import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Printer, Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';
import {
  BankTransaction,
  AccountDetails,
  defaultAccountDetails,
  defaultTransactions,
  defaultLinkedCasa,
  defaultLinkedDeposits,
  defaultLinkedLoans,
  defaultLinkedLockers,
  defaultDigitalProducts,
} from '../data/unionBankData';

const PAGE_1_MAX = 22;
const MIDDLE_PAGE_MAX = 33;
const SUMMARY_PAGE_MAX = 22;

export default function UnionBankStatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);
  const accountDetails = defaultAccountDetails;
  const [transactions, setTransactions] = useState(defaultTransactions);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const linkedLoans = defaultLinkedLoans;
  const linkedCasa = defaultLinkedCasa;
  const linkedDeposits = defaultLinkedDeposits;
  const linkedLockers = defaultLinkedLockers;
  const digitalProducts = defaultDigitalProducts;

  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const rows = text.split('\n').filter(row => row.trim().length > 0);
        
        let startIndex = 0;
        if (rows[0].toLowerCase().includes('date') || rows[0].toLowerCase().includes('balance')) {
          startIndex = 1;
        }

        const newTransactions: BankTransaction[] = [];
        
        for (let i = startIndex; i < rows.length; i++) {
          const cols = rows[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rows[i].split(',');
          
          if (cols.length >= 4) {
            newTransactions.push({
              si: (i).toString(),
              date: cols[0]?.replace(/"/g, '').trim() || '',
              particulars: cols[1]?.replace(/"/g, '').trim() || '',
              chqNum: cols[2]?.replace(/"/g, '').trim() || '',
              withdrawal: cols[3]?.replace(/"/g, '').trim() || '',
              deposit: cols[4]?.replace(/"/g, '').trim() || '',
              balance: cols[5]?.replace(/"/g, '').trim() || ''
            });
          }
        }
        
        setTransactions(newTransactions);
        toast.success(`Successfully loaded ${newTransactions.length} transactions from CSV!`);
      } catch (err) {
        toast.error('Failed to parse CSV file. Please ensure it has columns: Date, Description, RefNo, Debit, Credit, Balance');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) { fileInputRef.current.value = ''; }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExporting(true);
      toast.info('Generating accurate statement PDF via Puppeteer...');

      const response = await fetch('/api/export-pdf?path=/union-bank&filename=Union_Bank_Statement.pdf');
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Union_Bank_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);

      toast.success('Union Bank Statement downloaded successfully!');
    } catch (err: any) {
      console.error('[PDF Download Error]:', err);
      toast.error('Failed to download PDF: ' + (err.message || 'Unknown error'));
    } finally {
      setIsExporting(false);
    }
  };

  // Calculate totals
  const totals = useMemo(() => {
    let totalDr = 0;
    let totalCr = 0;
    for (const t of transactions) {
      if (t.withdrawal) {
        const val = parseFloat(String(t.withdrawal).replace(/,/g, ''));
        if (!isNaN(val)) totalDr += val;
      }
      if (t.deposit) {
        const val = parseFloat(String(t.deposit).replace(/,/g, ''));
        if (!isNaN(val)) totalCr += val;
      }
    }

    const lastBalance = transactions.length > 0 ? transactions[transactions.length - 1].balance : '0.00 Cr';

    return {
      totalDebits: totalDr.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      totalCredits: totalCr.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      closingBalance: lastBalance.includes('Cr') || lastBalance.includes('Dr') ? lastBalance : `${lastBalance} Cr`,
    };
  }, [transactions]);

  // Dynamic chunking algorithm for A4 pages
  const { page1Trans, middlePages, summaryPageTrans, totalPages } = useMemo(() => {
    if (transactions.length === 0) {
      return { page1Trans: [], middlePages: [], summaryPageTrans: [], totalPages: 2 };
    }

    const page1 = transactions.slice(0, PAGE_1_MAX);
    const rem = transactions.slice(PAGE_1_MAX);

    if (rem.length === 0) {
      // All fit in page 1. Page 2 is summary + linked CASA. Page 3 is auxiliary (loans/etc)
      return { page1Trans: page1, middlePages: [], summaryPageTrans: [], totalPages: 3 };
    }

    if (rem.length <= SUMMARY_PAGE_MAX) {
      // Remaining fits on the summary page
      // Total pages = 1 (Page 1) + 1 (Summary page) + 1 (Auxiliary page) = 3
      return { page1Trans: page1, middlePages: [], summaryPageTrans: rem, totalPages: 3 };
    }

    const middle: BankTransaction[][] = [];
    let curr = 0;
    let summaryList: BankTransaction[] = [];

    while (curr < rem.length) {
      const left = rem.length - curr;
      if (left <= SUMMARY_PAGE_MAX) {
        summaryList = rem.slice(curr);
        break;
      } else if (left <= MIDDLE_PAGE_MAX) {
        // Between 23 and 33. Put on middle page, summary page will have 0 transactions
        middle.push(rem.slice(curr, curr + MIDDLE_PAGE_MAX));
        summaryList = [];
        break;
      } else {
        middle.push(rem.slice(curr, curr + MIDDLE_PAGE_MAX));
        curr += MIDDLE_PAGE_MAX;
      }
    }

    // 1 (page 1) + middle.length + 1 (summary page) + 1 (auxiliary page)
    const count = 1 + middle.length + 1 + 1;
    return {
      page1Trans: page1,
      middlePages: middle,
      summaryPageTrans: summaryList,
      totalPages: count,
    };
  }, [transactions]);

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white print:min-h-0 text-[#17212c] font-sans antialiased">
      {/* Embedded CSS faithful to public/union_bank_statement_padded.html & reference PDF */}
      <style>{`
        @import url('/fonts/calibri-embedded.css');
        @font-face {
          font-family: 'Calibri';
          src: url('/fonts/Calibri-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Calibri';
          src: url('/fonts/Calibri-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Calibri';
          src: url('/fonts/Calibri-Italic.ttf') format('truetype');
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Calibri';
          src: url('/fonts/Calibri-BoldItalic.ttf') format('truetype');
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Carlito';
          src: url('/fonts/Calibri-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Carlito';
          src: url('/fonts/Calibri-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Carlito';
          src: url('/fonts/Calibri-Italic.ttf') format('truetype');
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Carlito';
          src: url('/fonts/Calibri-BoldItalic.ttf') format('truetype');
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }

        :root {
          font-family: 'Calibri', 'Carlito', Arial, sans-serif;
          color: #17212c;
          background: #f0f2f5;
        }
        .ub-page-wrapper,
        .ub-statement-page,
        .ub-statement-page * {
          font-family: 'Calibri', 'Carlito', Arial, sans-serif !important;
          box-sizing: border-box !important;
        }
        .ub-statement-page {
          width: 794px; /* Standard A4 width at 96 DPI: 210mm */
          min-height: 1123px; /* Standard A4 height at 96 DPI: 297mm */
          background: #fff;
          margin: 20px auto;
          padding: 32px 33px; /* 24pt top/bottom, 25pt left/right */
          box-shadow: 0 1px 14px #17212c1c;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          position: relative;
        }
        .ub-brand {
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }
        .ub-brand img {
          display: block;
          width: 250px;
          max-width: 80%;
          height: auto;
        }
        .ub-statement-page h1 {
          font-size: 14px;
          text-align: center;
          margin: 0 0 6px;
          font-weight: 700;
          color: #111827;
        }
        .ub-statement-page h2 {
          font-size: 12.5px;
          margin: 8px 0 6px;
          font-weight: 700;
          color: #111827;
          text-align: center;
        }
        .ub-statement-page h3 {
          font-size: 11px;
          margin: 8px 0 4px;
          font-weight: 700;
          color: #111827;
        }
        .ub-table-scroll {
          width: 100%;
          overflow-x: auto;
        }
        .ub-statement-page table {
          border-collapse: collapse !important;
          width: 100% !important;
          table-layout: fixed !important;
          border: 1px solid #283746 !important;
          font-size: 11px !important;
          line-height: 1.15 !important;
        }
        .ub-statement-page th,
        .ub-statement-page td {
          border: 1px solid #344456 !important;
          padding: 2.5px 6px !important;
          vertical-align: middle !important;
          overflow-wrap: anywhere;
        }
        .ub-statement-page th {
          background: #cfe7ff !important;
          text-align: center !important;
          font-style: italic !important;
          font-weight: 700 !important;
          font-size: 11.5px !important;
          padding: 3px 6px !important;
          color: #111827 !important;
        }
        .ub-statement-page tbody tr:nth-child(even) {
          background: #eff7ff !important;
        }
        .ub-statement-page tbody tr:nth-child(odd) {
          background: #ffffff !important;
        }
        .ub-details {
          font-size: 11px !important;
          table-layout: fixed !important;
          width: 100% !important;
          border-collapse: collapse !important;
          border: 1px solid #283746 !important;
          margin-bottom: 0 !important;
        }
        .ub-details,
        .ub-details tr,
        .ub-details td {
          background: #ffffff !important;
        }
        .ub-details tr {
          height: 27px !important;
        }
        .ub-details td {
          padding: 2.5px 6px !important;
          overflow-wrap: normal !important;
          white-space: nowrap !important;
          line-height: 1.2 !important;
          vertical-align: middle !important;
          border: 1px solid #344456 !important;
        }
        .ub-detail-label {
          font-weight: 700 !important;
          font-style: italic !important;
        }
        .ub-text-right {
          text-align: right !important;
          padding-right: 8px !important;
        }
        .ub-period {
          margin: 64px 0 14px !important;
          font-size: 12.5px !important;
          font-weight: 700 !important;
          text-align: center !important;
        }
        .ub-transactions {
          font-size: 11px !important;
          border-collapse: collapse !important;
          width: 100% !important;
          table-layout: fixed !important;
          border: 1px solid #283746 !important;
        }
        .ub-transactions tr {
          height: 27.5px !important;
        }
        .ub-transactions th {
          padding: 3px 6px !important;
          text-align: center !important;
          font-style: italic !important;
          font-weight: 700 !important;
          font-size: 11.5px !important;
          line-height: 1.2 !important;
          background: #cfe7ff !important;
        }
        .ub-transactions td {
          padding: 2px 6px !important;
          vertical-align: middle !important;
          line-height: 1.15 !important;
        }
        .ub-transactions td.si {
          text-align: center !important;
          white-space: nowrap !important;
          padding: 2px 3px !important;
        }
        .ub-transactions td.date {
          text-align: center !important;
          white-space: nowrap !important;
          padding: 2px 4px !important;
        }
        .ub-transactions td.particulars {
          text-align: left !important;
          word-break: normal !important;
          overflow-wrap: anywhere !important;
          line-height: 1.14 !important;
          padding: 2px 6px !important;
        }
        .ub-transactions td.cheque {
          text-align: center !important;
          white-space: nowrap !important;
        }
        .ub-transactions td.number {
          text-align: right !important;
          white-space: nowrap !important;
          font-variant-numeric: tabular-nums !important;
          font-feature-settings: "tnum" 1 !important;
          padding-right: 7px !important;
          padding-left: 4px !important;
        }
        .ub-summary-cell {
          background: #cfe7ff !important;
          border: 1px solid #344456 !important;
          padding: 3px 6px !important;
          vertical-align: middle !important;
          white-space: nowrap !important;
        }
        .ub-summary-heading {
          font-weight: 700 !important;
          font-style: italic !important;
          text-align: right !important;
          font-size: 11.5px !important;
          padding-right: 8px !important;
        }
        .ub-summary-label {
          font-weight: 700 !important;
          font-style: italic !important;
          text-align: right !important;
          font-size: 11px !important;
          padding-right: 8px !important;
        }
        .ub-summary-value,
        .ub-transactions td.ub-summary-value {
          font-weight: 400 !important;
          text-align: right !important;
          font-variant-numeric: tabular-nums !important;
          font-feature-settings: "tnum" 1 !important;
          font-size: 11px !important;
          padding-right: 7px !important;
        }
        .ub-other-details-header {
          margin-top: 18px !important;
          margin-bottom: 8px !important;
          text-align: center;
        }
        .ub-other-main-title {
          font-size: 12.5px !important;
          font-weight: 700 !important;
          margin: 0 0 6px !important;
          text-align: center !important;
          color: #111827 !important;
        }
        .ub-other-subtitle {
          font-size: 11.5px !important;
          font-weight: 700 !important;
          margin: 0 0 6px !important;
          text-align: center !important;
          color: #111827 !important;
        }
        .ub-section.ub-first-section {
          margin-top: 0 !important;
        }
        .ub-section {
          margin-top: 14px !important;
        }
        .ub-note {
          border: 1px solid #506071;
          padding: 12px 14px;
          text-align: center;
          font-size: 11px;
          line-height: 1.45;
          margin-top: 14px;
        }
        .ub-note a {
          color: #0055b7;
        }
        .ub-page-bottom {
          margin-top: auto !important;
          padding-top: 6px !important;
        }
        .ub-legal {
          font-size: 9px !important;
          margin-bottom: 6px !important;
          line-height: 1.35 !important;
          color: #17212c !important;
        }
        .ub-page-footer {
          margin-top: auto !important;
          padding-top: 4px !important;
          text-align: right !important;
          font-size: 11px !important;
        }
        .ub-loan {
          font-size: 10.5px !important;
        }
        .ub-loan th,
        .ub-loan td {
          padding: 3px 5px !important;
        }
        .ub-loan td:nth-child(5),
        .ub-loan td:nth-child(6),
        .ub-loan td:nth-child(7),
        .ub-loan td:nth-child(9) {
          text-align: right !important;
          white-space: nowrap !important;
        }
        @media screen and (max-width: 820px) {
          .ub-statement-page {
            width: 100%;
            margin: 0 0 12px;
            padding: 18px 12px;
            min-height: auto;
          }
          .ub-details {
            min-width: 730px;
          }
          .ub-transactions {
            min-width: 830px;
          }
          .ub-section table:not(.ub-transactions) {
            min-width: 720px;
          }
          .ub-brand {
            height: 48px;
          }
          .ub-period {
            margin-top: 24px !important;
          }
        }
        @media print {
          @page {
            size: 595pt 842pt;
            margin: 0;
          }
          html, body, .min-h-screen, main, .ub-page-wrapper {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden,
          header.nav-header {
            display: none !important;
          }
          .ub-page-wrapper {
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
          }
          .ub-statement-page {
            display: block !important;
            box-shadow: none !important;
            margin: 0 !important;
            width: 595pt !important;
            height: 842pt !important;
            min-height: 842pt !important;
            max-height: 842pt !important;
            padding: 20pt 20pt 24.5pt 20pt !important;
            box-sizing: border-box !important;
            position: relative !important;
            overflow: hidden !important;
            break-after: page !important;
            page-break-after: always !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
            background: #ffffff !important;
          }
          .ub-statement-page:last-child {
            break-after: auto !important;
            page-break-after: auto !important;
          }
          .ub-table-scroll {
            overflow: visible !important;
            width: 555pt !important;
          }
          .ub-statement-page table {
            width: 555pt !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            border: 1px solid #283746 !important;
            box-sizing: border-box !important;
          }
          .ub-statement-page th,
          .ub-statement-page td {
            border: 1px solid #344456 !important;
            box-sizing: border-box !important;
          }
          .ub-statement-page th:last-child,
          .ub-statement-page td:last-child {
            border-right: 1px solid #344456 !important;
          }
          .ub-brand {
            height: 29.68pt !important;
            margin-bottom: 30pt !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .ub-statement-page:first-child .ub-brand {
            margin-bottom: 0 !important;
          }
          .ub-brand img {
            width: 199pt !important;
            height: 29.68pt !important;
            display: block !important;
          }
          .ub-statement-page h1 {
            font-size: 11pt !important;
            margin: 34pt 0 4.5pt !important;
            font-weight: 700 !important;
            text-align: center !important;
            color: #111827 !important;
          }
          .ub-statement-page h2:not(.ub-period) {
            font-size: 9.5pt !important;
            margin: 8pt 0 4pt !important;
            font-weight: 700 !important;
            color: #111827 !important;
            text-align: center !important;
          }
          .ub-statement-page h3 {
            font-size: 8.5pt !important;
            margin: 6pt 0 3pt !important;
            font-weight: 700 !important;
            color: #111827 !important;
            text-align: center !important;
          }
          .ub-details {
            font-size: 8.6pt !important;
            width: 555pt !important;
            border-collapse: collapse !important;
            border: 1px solid #283746 !important;
            margin: 0 !important;
          }
          .ub-details tr {
            height: 20.0pt !important;
          }
          .ub-details td {
            padding: 1pt 4.5pt !important;
            height: 20.0pt !important;
            line-height: 1.15 !important;
          }
          .ub-statement-page h2.ub-period,
          .ub-period {
            margin: 40pt 0 6pt !important;
            font-size: 10pt !important;
            font-weight: 700 !important;
            text-align: center !important;
          }
          .ub-transactions {
            font-size: 8.5pt !important;
            width: 555pt !important;
            border-collapse: collapse !important;
            border: 1px solid #283746 !important;
            margin: 0 !important;
          }
          .ub-transactions tr {
            height: 21.0pt !important;
          }
          .ub-transactions th {
            padding: 2.5pt 4pt !important;
            font-size: 8.8pt !important;
            height: 20.0pt !important;
            line-height: 1.15 !important;
            background: #cfe7ff !important;
          }
          .ub-transactions td {
            padding: 0 4pt !important;
            height: 21.0pt !important;
            line-height: 1.08 !important;
            font-size: 8.5pt !important;
          }
          .ub-transactions td.particulars {
            padding: 0 4pt !important;
            line-height: 1.08 !important;
            font-size: 8.5pt !important;
          }
          .ub-transactions td.number {
            font-variant-numeric: tabular-nums !important;
            font-feature-settings: "tnum" 1 !important;
            text-align: right !important;
            padding-right: 6pt !important;
          }
          .ub-summary-cell {
            padding: 2.5pt 4pt !important;
            height: 20.0pt !important;
          }
          .ub-summary-heading {
            font-size: 9pt !important;
            padding-right: 6pt !important;
          }
          .ub-summary-label {
            font-size: 8.5pt !important;
            padding-right: 6pt !important;
          }
          .ub-summary-value,
          .ub-transactions td.ub-summary-value {
            font-weight: 400 !important;
            font-size: 8.5pt !important;
            text-align: right !important;
            font-variant-numeric: tabular-nums !important;
            font-feature-settings: "tnum" 1 !important;
            padding-right: 6pt !important;
          }
          .ub-other-details-header {
            margin-top: 14pt !important;
            margin-bottom: 6pt !important;
          }
          .ub-other-main-title {
            font-size: 9.5pt !important;
            margin: 0 0 4pt !important;
          }
          .ub-other-subtitle {
            font-size: 9pt !important;
            margin: 0 0 4pt !important;
          }
          .ub-section.ub-first-section {
            margin-top: 0 !important;
          }
          .ub-section {
            margin-top: 10pt !important;
          }
          .ub-loan tr {
            height: 20.0pt !important;
          }
          .ub-loan th {
            height: 20.0pt !important;
          }
          .ub-legal {
            font-size: 7.5pt !important;
            line-height: 1.35 !important;
            margin-bottom: 3pt !important;
          }
          .ub-page-bottom {
            position: absolute !important;
            bottom: 24.5pt !important;
            left: 20pt !important;
            right: 20pt !important;
            margin-top: 0 !important;
          }
          .ub-page-bottom .ub-page-footer {
            position: static !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 4pt !important;
          }
          .ub-page-footer {
            position: absolute !important;
            bottom: 24.5pt !important;
            right: 20pt !important;
            text-align: right !important;
            font-size: 8.5pt !important;
            margin: 0 !important;
            padding: 0 !important;
            line-height: 1 !important;
          }
          .ub-note {
            margin-top: 10pt !important;
            padding: 6pt 8pt !important;
            font-size: 8.5pt !important;
          }
        }
      `}</style>

      {/* Non-printable Interactive Navigation Toolbar */}
      <header className="nav-header sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm print:hidden">
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
              <img src="/union_bank_logo.png" alt="Union Bank Logo" className="h-6 w-auto object-contain" />
              <span className="font-bold text-slate-800 text-sm md:text-base hidden sm:inline">
                Statement of Account
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {transactions.length} Transactions Loaded
            </span>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 bg-[#0055b7] hover:bg-[#004294] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-2 rounded-lg transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Print Dialog</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-6 print:py-0 print:m-0">
        {/* Dynamic Multi-Page Statement View */}
        <div className="ub-page-wrapper">
          {/* ================= PAGE 1 ================= */}
          <article className="ub-statement-page" aria-label="Statement page 1">
            <header className="ub-brand">
              <img alt="Union Bank of India" src="/union_bank_logo.png" />
            </header>

            <h1>DETAILS OF STATEMENT</h1>

            <div className="ub-table-scroll">
              <table className="ub-details">
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '18%' }} />
                  <col style={{ width: '14.4%' }} />
                  <col style={{ width: '18%' }} />
                  <col style={{ width: '9%' }} />
                  <col style={{ width: '30.6%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <td colSpan={2} className="ub-detail-label">Name &amp; Address :</td>
                    <td className="ub-detail-label ub-text-right">Customer ID :</td>
                    <td>{accountDetails.customerId}</td>
                    <td className="ub-detail-label ub-text-right">Branch :</td>
                    <td>{accountDetails.branch}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{accountDetails.customerName}</td>
                    <td className="ub-detail-label ub-text-right">Account Number :</td>
                    <td>{accountDetails.accountNumber}</td>
                    <td className="ub-detail-label ub-text-right">IFSC :</td>
                    <td>{accountDetails.ifsc}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{accountDetails.addressLines[0]}</td>
                    <td className="ub-detail-label ub-text-right">Account Open</td>
                    <td>{accountDetails.accountOpenDate}</td>
                    <td className="ub-detail-label ub-text-right">MICR :</td>
                    <td>{accountDetails.micr}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{accountDetails.addressLines[1]}</td>
                    <td className="ub-detail-label ub-text-right">Account Type :</td>
                    <td>{accountDetails.accountType}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{accountDetails.addressLines[2]}</td>
                    <td className="ub-detail-label ub-text-right">Nomination</td>
                    <td>{accountDetails.nomination}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{accountDetails.addressLines[3]}</td>
                    <td className="ub-detail-label ub-text-right">Re KYC Due Date :</td>
                    <td>{accountDetails.reKycDueDate}</td>
                    <td className="ub-detail-label ub-text-right">Phone :</td>
                    <td>{accountDetails.phone}</td>
                  </tr>
                  <tr>
                    <td>{accountDetails.pincode || '503212'}</td>
                    <td>{accountDetails.country || 'INDIA'}</td>
                    <td className="ub-detail-label ub-text-right">Generated Date :</td>
                    <td>{accountDetails.generatedDate}</td>
                    <td className="ub-detail-label ub-text-right">E-Mail :</td>
                    <td>{accountDetails.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="ub-period">
              STATEMENT OF ACCOUNT FOR THE PERIOD FROM {accountDetails.periodFrom} TO {accountDetails.periodTo}
            </h2>

            <div className="ub-table-scroll">
              <table className="ub-transactions">
                <colgroup>
                  <col style={{ width: '4.5%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '25.2%' }} />
                  <col style={{ width: '14.4%' }} />
                  <col style={{ width: '14.4%' }} />
                  <col style={{ width: '14.4%' }} />
                  <col style={{ width: '17.1%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">Sl</th>
                    <th scope="col">Date</th>
                    <th scope="col">Particulars</th>
                    <th scope="col">Chq Num</th>
                    <th scope="col">Withdrawal</th>
                    <th scope="col">Deposit</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {page1Trans.map((row) => (
                    <tr key={row.si}>
                      <td className="si">{row.si}</td>
                      <td className="date">{row.date}</td>
                      <td className="particulars" dangerouslySetInnerHTML={{ __html: row.particulars }} />
                      <td className="cheque">{row.chqNum}</td>
                      <td className="number">{row.withdrawal}</td>
                      <td className="number">{row.deposit}</td>
                      <td className="number">{row.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <footer className="ub-page-footer">1 of {totalPages}</footer>
          </article>

          {/* ================= MIDDLE TRANSACTION PAGES ================= */}
          {middlePages.map((pageRows, pageIdx) => {
            const pageNum = pageIdx + 2;
            return (
              <article key={pageIdx} className="ub-statement-page" aria-label={`Statement page ${pageNum}`}>
                <header className="ub-brand">
                  <img alt="Union Bank of India" src="/union_bank_logo.png" />
                </header>

                <div className="ub-table-scroll">
                  <table className="ub-transactions">
                    <colgroup>
                      <col style={{ width: '4.5%' }} />
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '25.2%' }} />
                      <col style={{ width: '14.4%' }} />
                      <col style={{ width: '14.4%' }} />
                      <col style={{ width: '14.4%' }} />
                      <col style={{ width: '17.1%' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Date</th>
                        <th scope="col">Particulars</th>
                        <th scope="col">Chq Num</th>
                        <th scope="col">Withdrawal</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageRows.map((row) => (
                        <tr key={row.si}>
                          <td className="si">{row.si}</td>
                          <td className="date">{row.date}</td>
                          <td className="particulars" dangerouslySetInnerHTML={{ __html: row.particulars }} />
                          <td className="cheque">{row.chqNum}</td>
                          <td className="number">{row.withdrawal}</td>
                          <td className="number">{row.deposit}</td>
                          <td className="number">{row.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <footer className="ub-page-footer">{pageNum} of {totalPages}</footer>
              </article>
            );
          })}

          {/* ================= SUMMARY & LINKED CASA PAGE ================= */}
          <article className="ub-statement-page" aria-label={`Statement page ${totalPages - 1}`}>
            <header className="ub-brand">
              <img alt="Union Bank of India" src="/union_bank_logo.png" />
            </header>

            {summaryPageTrans.length > 0 && (
              <div className="ub-table-scroll">
                <table className="ub-transactions">
                  <colgroup>
                    <col style={{ width: '4.5%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '25.2%' }} />
                    <col style={{ width: '14.4%' }} />
                    <col style={{ width: '14.4%' }} />
                    <col style={{ width: '14.4%' }} />
                    <col style={{ width: '17.1%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Date</th>
                      <th scope="col">Particulars</th>
                      <th scope="col">Chq Num</th>
                      <th scope="col">Withdrawal</th>
                      <th scope="col">Deposit</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryPageTrans.map((row) => (
                      <tr key={row.si}>
                        <td className="si">{row.si}</td>
                        <td className="date">{row.date}</td>
                        <td className="particulars" dangerouslySetInnerHTML={{ __html: row.particulars }} />
                        <td className="cheque">{row.chqNum}</td>
                        <td className="number">{row.withdrawal}</td>
                        <td className="number">{row.deposit}</td>
                        <td className="number">{row.balance}</td>
                      </tr>
                    ))}

                    {/* Integrated Summary Rows matching original reference */}
                    <tr>
                      <td colSpan={3} rowSpan={2} className="ub-summary-cell ub-summary-heading">
                        Summary :
                      </td>
                      <td className="ub-summary-cell ub-summary-label">Total Debits :</td>
                      <td className="ub-summary-cell ub-summary-value">{totals.totalDebits}</td>
                      <td rowSpan={2} className="ub-summary-cell ub-summary-label">
                        Closing Balance :
                      </td>
                      <td rowSpan={2} className="ub-summary-cell ub-summary-value">
                        {totals.closingBalance}
                      </td>
                    </tr>
                    <tr>
                      <td className="ub-summary-cell ub-summary-label">Total Credits :</td>
                      <td className="ub-summary-cell ub-summary-value">{totals.totalCredits}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <div className="ub-other-details-header">
              <h2 className="ub-other-main-title">
                OTHER ACCOUNT DETAILS AS ON {accountDetails.generatedDate}
              </h2>
              <h3 className="ub-other-subtitle">
                LINKED CASA ACCOUNTS
              </h3>
            </div>

            <section className="ub-section ub-first-section">
              <div className="ub-table-scroll">
                <table>
                  <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '18%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '18%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '20%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">SI</th>
                      <th scope="col">Scheme Type</th>
                      <th scope="col">Account Number</th>
                      <th scope="col">Account Open Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Account Balance (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {linkedCasa.length === 0 || linkedCasa[0].si === 'No Records Found' ? (
                      <tr>
                        <td colSpan={6} style={{ textAlign: 'center', fontStyle: 'italic', padding: '6px' }}>No Records Found</td>
                      </tr>
                    ) : (
                      linkedCasa.map((casa, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'center' }}>{casa.si}</td>
                          <td>{casa.schemeType}</td>
                          <td>{casa.accountNumber}</td>
                          <td>{casa.accountOpenDate}</td>
                          <td>{casa.status}</td>
                          <td style={{ textAlign: 'right' }}>{casa.balance}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ub-section">
              <h3 className="ub-other-subtitle">LINKED DEPOSITS</h3>
              <div className="ub-table-scroll">
                <table>
                  <colgroup>
                    <col style={{ width: '4%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '22%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '16%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">SI</th>
                      <th scope="col">Scheme Type</th>
                      <th scope="col">Account Number</th>
                      <th scope="col">Account Open Date</th>
                      <th scope="col">Maturity Date</th>
                      <th scope="col">ROI (%)</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {linkedDeposits.length === 0 || linkedDeposits[0].si === 'No Records Found' ? (
                      <tr>
                        <td colSpan={7} style={{ textAlign: 'center', fontStyle: 'italic', padding: '6px' }}>No Records Found</td>
                      </tr>
                    ) : (
                      linkedDeposits.map((dep, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'center' }}>{dep.si}</td>
                          <td>{dep.schemeType}</td>
                          <td>{dep.accountNumber}</td>
                          <td>{dep.accountOpenDate}</td>
                          <td>{dep.maturityDate}</td>
                          <td style={{ textAlign: 'right' }}>{dep.roi}</td>
                          <td style={{ textAlign: 'right' }}>{dep.balance}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <footer className="ub-page-footer">{totalPages - 1} of {totalPages}</footer>
          </article>

          {/* ================= FINAL AUXILIARY PAGE (LOANS, LOCKERS, LEGAL) ================= */}
          <article className="ub-statement-page" aria-label={`Statement page ${totalPages}`}>
            <header className="ub-brand">
              <img alt="Union Bank of India" src="/union_bank_logo.png" />
            </header>

            <section className="ub-section">
              <h2>LINKED LOAN &amp; ADVANCES</h2>
              <div className="ub-table-scroll">
                <table className="ub-loan">
                  <colgroup>
                    <col style={{ width: '4%' }} />
                    <col style={{ width: '8%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '12%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '8%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">SI</th>
                      <th scope="col">Scheme Type</th>
                      <th scope="col">Account Number</th>
                      <th scope="col">Account Open Date</th>
                      <th scope="col">Sanctioned Limit (Rs.)</th>
                      <th scope="col">Outstanding (Rs.)</th>
                      <th scope="col">Overdue (Rs.)</th>
                      <th scope="col">Asset Class</th>
                      <th scope="col">ROI (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {linkedLoans.map((loan, i) => (
                      <tr key={i}>
                        <td style={{ textAlign: 'center' }}>{loan.si}</td>
                        <td style={{ textAlign: 'center' }}>{loan.schemeType}</td>
                        <td style={{ textAlign: 'center' }}>{loan.accountNumber}</td>
                        <td style={{ textAlign: 'center' }}>{loan.accountOpenDate}</td>
                        <td style={{ textAlign: 'right' }}>{loan.sanctionedLimit}</td>
                        <td style={{ textAlign: 'right' }}>{loan.outstanding}</td>
                        <td style={{ textAlign: 'right' }}>{loan.overdue}</td>
                        <td style={{ textAlign: 'center' }}>{loan.assetClass}</td>
                        <td style={{ textAlign: 'right' }}>{loan.roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ub-section">
              <h2>LINKED LOCKERS</h2>
              <div className="ub-table-scroll">
                <table>
                  <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '24%' }} />
                    <col style={{ width: '24%' }} />
                    <col style={{ width: '23%' }} />
                    <col style={{ width: '24%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">SI</th>
                      <th scope="col">Locker Type</th>
                      <th scope="col">Locker Number</th>
                      <th scope="col">Overdue Rent</th>
                      <th scope="col">Linked Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    {linkedLockers.length === 0 || linkedLockers[0].si === 'No Records Found' ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic', padding: '6px' }}>No Records Found</td>
                      </tr>
                    ) : (
                      linkedLockers.map((locker, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'center' }}>{locker.si}</td>
                          <td>{locker.lockerType}</td>
                          <td>{locker.lockerNumber}</td>
                          <td style={{ textAlign: 'right' }}>{locker.overdueRent}</td>
                          <td>{locker.linkedAccount}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="ub-section">
              <h2>OTHER DIGITAL PRODUCTS</h2>
              <div className="ub-table-scroll">
                <table>
                  <colgroup>
                    <col style={{ width: '28%' }} />
                    <col style={{ width: '24%' }} />
                    <col style={{ width: '24%' }} />
                    <col style={{ width: '24%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">Facility</th>
                      <th scope="col">SMS Alert</th>
                      <th scope="col">Debit Card</th>
                      <th scope="col">Internet Banking</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Linked or not</td>
                      <td style={{ textAlign: 'center' }}>{digitalProducts.smsAlert}</td>
                      <td style={{ textAlign: 'center' }}>{digitalProducts.debitCard}</td>
                      <td style={{ textAlign: 'center' }}>{digitalProducts.internetBanking}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="ub-note">
              This is system generated statement and does not require signature{' '}
              <a href="https://www.unionbankofindia.co.in" target="_blank" rel="noopener noreferrer">
                https://www.unionbankofindia.co.in
              </a>
              <br />
              Request to our customers for notifying immediately, if there is any discrepancy in the statement.
              <br />
              <b>Registered office: Union Bank Bhavan, 239, Vidhan Bhavan Marg, Nariman Point, Mumbai-400021, India.</b>
            </div>

            <div className="ub-page-bottom">
              <div className="ub-legal">
                Disclaimer: This statement includes summary of your current,savings,deposit,loan accounts,lockers,government
                and digital products. Summary may not include all the other accounts/facilities availed by you.
                Further it does not include insurance policies and mutual fund availed from the bank as additional products.
                If any discrepancy kindly contact your branch.
              </div>

              <footer className="ub-page-footer">{totalPages} of {totalPages}</footer>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
