import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Download, ExternalLink, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function KotakBankStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const [htmlDoc, setHtmlDoc] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/kotak/kotak.html')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(text => {
        // Strip out the collapsible toc and thumbs navigation sidebars
        // so that only the authentic 13 pages are displayed cleanly
        const cleaned = text
          .replace(/<details class="toc"[\s\S]*?<\/details>/gi, '')
          .replace(/<details class="thumbs"[\s\S]*?<\/details>/gi, '');
        setHtmlDoc(cleaned);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load /kotak/kotak.html', err);
        toast.error('Failed to load converted Kotak statement HTML.');
        setLoading(false);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating 100% authentic statement PDF via Puppeteer...');

      const response = await fetch('/api/export-pdf?path=/kotak/kotak.html&filename=Kotak_Mahindra_Bank_Statement.pdf');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Kotak_Mahindra_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success('Kotak Bank Statement PDF downloaded successfully!');
    } catch (err: any) {
      console.error('[PDF Download Error]:', err);
      toast.error('Failed to download PDF: ' + (err.message || 'Unknown error'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8e8e8] flex flex-col items-center">
      {/* Navigation Toolbar (Hidden during print) */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm w-full print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </Link>
            <div className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-red-600 text-lg tracking-tight">Kotak</span>
              <span className="font-bold text-slate-800 text-sm md:text-base hidden sm:inline">
                Mahindra Bank Statement
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              13 Pages • Converted Source HTML
            </span>

            <a
              href="/kotak/kotak.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Open Standalone HTML</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 bg-[#ed1c24] hover:bg-[#c9141b] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download PDF (Accurate)
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              title="Open browser print dialog (Ctrl+P)"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Print Dialog</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Statement Content */}
      <main className="w-full flex flex-col items-center py-6 print:py-0 print:m-0">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-20 text-slate-500 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-red-600" />
            <p className="text-sm">Loading 100% Authentic Kotak Statement...</p>
          </div>
        ) : (
          <div
            className="w-full flex flex-col items-center"
            dangerouslySetInnerHTML={{ __html: htmlDoc }}
          />
        )}
      </main>
    </div>
  );
}
