import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Download, ExternalLink, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function TGBStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const [htmlDoc, setHtmlDoc] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/tgb/tgb.html')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        // Strip out any navigation chrome if present
        const cleaned = text
          .replace(/<details class="toc"[\s\S]*?<\/details>/gi, '')
          .replace(/<details class="thumbs"[\s\S]*?<\/details>/gi, '');
        setHtmlDoc(cleaned);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load /tgb/tgb.html', err);
        toast.error('Failed to load converted Telangana Grameena Bank statement HTML.');
        setLoading(false);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating 100% authentic TGB statement PDF via Puppeteer...');

      const response = await fetch(
        '/api/export-pdf?path=/tgb/tgb.html&filename=Telangana_Grameena_Bank_Statement.pdf'
      );
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Telangana_Grameena_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success('Telangana Grameena Bank statement PDF downloaded successfully!');
    } catch (err) {
      console.error('[PDF Download Error]:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      toast.error('Failed to download PDF: ' + errorMessage);
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </Link>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex items-center gap-2.5">
              <img
                src="/tgb-logo.png"
                alt="Telangana Grameena Bank"
                className="h-8 max-w-[170px] object-contain"
              />
              <span className="font-bold text-slate-800 text-sm md:text-base hidden sm:inline">
                Statement Viewer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
              37 Pages • Converted Source HTML
            </span>

            <a
              href="/tgb/tgb.html"
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
              className="inline-flex items-center gap-2 bg-[#e65100] hover:bg-[#c24400] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
            <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
            <p className="text-sm font-medium">Loading 100% Authentic Telangana Grameena Bank Statement...</p>
          </div>
        ) : (
          <div
            className="tgb-statement-container w-full flex flex-col items-center"
            dangerouslySetInnerHTML={{ __html: htmlDoc }}
          />
        )}
      </main>
    </div>
  );
}
