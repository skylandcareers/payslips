import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, Printer } from 'lucide-react';
import { toast } from 'sonner';
import {
  defaultSBI3AccountDetails as account,
  defaultSBI3StatementSummary as summary,
  sbi3Transactions,
  type SBI3Transaction,
} from '../data/sbi3Data';
import { sbi3PageLayouts, sbi3ColumnWidths } from '../data/sbi3Layout';

const pageCount = sbi3PageLayouts.length;
const pages = (() => {
  let start = 0;
  return sbi3PageLayouts.map((layout) => {
    const transactions = sbi3Transactions.slice(start, start + layout.rowCount);
    start += layout.rowCount;
    return { ...layout, transactions };
  });
})();

function Text({
  x,
  y,
  children,
  className = '',
  style = {},
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`sbi3-text ${className}`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Page1Header() {
  return (
    <div className="sbi3-header-container">
      {/* Background vector decorations */}
      <img
        src="/sbi3/layout/page-01-bg.svg"
        alt=""
        className="sbi3-page1-vectors"
      />

      {/* Top purple banner text */}
      <Text x={698.67} y={22.80} className="c1">
        Welcome:
      </Text>
      <Text x={581.03} y={44.13} className="c1">
        {account.customerName}
      </Text>
      <Text x={358.67} y={29.47} className="c1">
        As on
      </Text>
      <Text x={398.67} y={29.47} className="c1">
        {account.statementDate}
      </Text>
      <Text x={45.33} y={55.37} className="c0">
        Account Summary
      </Text>

      {/* Title */}
      <Text x={292.44} y={78.03} className="c2">
        STATEMENT OF ACCOUNT
      </Text>
      <Text x={452.00} y={123.93} className="c6">
        State Bank of India
      </Text>

      {/* Left Column: Customer details & account status */}
      <Text x={88.00} y={130.03} className="c2">
        {account.customerName}
      </Text>
      <Text x={86.67} y={162.80} className="c3">
        {account.email}
      </Text>
      {account.addressLines.map((line, i) => (
        <Text key={i} x={89.33} y={206.80 + i * 15.52} className="c3">
          {line}
        </Text>
      ))}

      <Text x={86.67} y={276.13} className="c3">
        Date of Statement
      </Text>
      <Text x={265.33} y={276.42} className="c4">
        :
      </Text>
      <Text x={276.00} y={277.47} className="c3">
        {account.statementDate}
      </Text>

      <Text x={86.67} y={314.80} className="c3">
        Clear Balance
      </Text>
      <Text x={265.33} y={312.42} className="c4">
        :
      </Text>
      <Text x={276.00} y={313.47} className="c3">
        {account.clearBalance}
      </Text>

      <Text x={86.67} y={344.13} className="c3">
        Uncleared Amount
      </Text>
      <Text x={265.33} y={343.08} className="c4">
        :
      </Text>
      <Text x={276.00} y={344.13} className="c3">
        {account.unclearedAmount}
      </Text>

      <Text x={86.67} y={376.13} className="c3">
        +MOD Bal
      </Text>
      <Text x={265.33} y={376.42} className="c4">
        :
      </Text>
      <Text x={276.00} y={377.47} className="c3">
        {account.modBalance}
      </Text>

      <Text x={86.67} y={405.47} className="c3">
        Lien
      </Text>
      <Text x={265.33} y={405.75} className="c4">
        :
      </Text>
      <Text x={276.00} y={405.47} className="c3">
        {account.lien}
      </Text>

      <Text x={86.67} y={436.13} className="c3">
        Limit
      </Text>
      <Text x={265.33} y={437.75} className="c4">
        :
      </Text>
      <Text x={276.00} y={437.47} className="c3">
        {account.limit}
      </Text>

      <Text x={86.67} y={470.80} className="c3">
        Monthly Avg Balance
      </Text>
      <Text x={265.33} y={471.08} className="c4">
        :
      </Text>
      <Text x={276.00} y={472.13} className="c3">
        {account.monthlyAvgBalance}
      </Text>

      <Text x={86.67} y={500.13} className="c3">
        Interest Rate
      </Text>
      <Text x={265.33} y={500.42} className="c4">
        :
      </Text>
      <Text x={276.00} y={501.47} className="c3">
        {account.interestRate}
      </Text>

      <Text x={86.67} y={529.47} className="c3">
        Drawing Power
      </Text>
      <Text x={265.33} y={529.75} className="c4">
        :
      </Text>
      <Text x={276.00} y={530.80} className="c3">
        {account.drawingPower}
      </Text>

      <Text x={86.67} y={569.47} className="c3">
        Account open Date
      </Text>
      <Text x={265.33} y={568.42} className="c4">
        :
      </Text>
      <Text x={276.00} y={569.47} className="c3">
        {account.accountOpenDate}
      </Text>

      {/* Right Column: Branch & Relationship product details */}
      <Text x={458.67} y={152.13} className="c3">
        {account.branchAddress[0]}
      </Text>
      <Text x={462.67} y={184.13} className="c3">
        {account.branchAddress[1]}
      </Text>
      <Text x={462.67} y={199.65} className="c3">
        {account.branchAddress[2]}
      </Text>

      <Text x={464.00} y={237.47} className="c3">
        Branch Code
      </Text>
      <Text x={589.33} y={236.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={237.47} className="c3">
        {account.branchCode}
      </Text>

      <Text x={464.00} y={260.13} className="c3">
        Branch Name
      </Text>
      <Text x={589.33} y={259.08} className="c4">
        :
      </Text>
      <Text x={601.33} y={260.13} className="c3">
        {account.branchName}
      </Text>

      <Text x={464.00} y={284.13} className="c3">
        Branch Email ID
      </Text>
      <Text x={589.33} y={285.75} className="c4">
        :
      </Text>
      <Text x={601.33} y={285.47} className="c3">
        {account.branchEmail}
      </Text>

      <Text x={464.00} y={309.47} className="c3">
        Branch Phone
      </Text>
      <Text x={589.33} y={309.75} className="c4">
        :
      </Text>
      <Text x={601.33} y={310.80} className="c3">
        {account.branchPhone}
      </Text>

      <Text x={464.00} y={345.47} className="c3">
        CIF Number
      </Text>
      <Text x={589.33} y={344.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={345.47} className="c3">
        {account.cifNumber}
      </Text>

      <Text x={464.00} y={369.47} className="c3">
        Account Number
      </Text>
      <Text x={589.33} y={368.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={369.47} className="c3">
        {account.accountNumber}
      </Text>

      <Text x={464.00} y={394.80} className="c3">
        Product
      </Text>
      <Text x={589.33} y={393.75} className="c4">
        :
      </Text>
      <Text x={601.33} y={396.63} className="c5">
        {account.product}
      </Text>

      <Text x={464.00} y={421.47} className="c3">
        IFSC Code
      </Text>
      <Text x={589.33} y={420.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={421.47} className="c3">
        {account.ifscCode}
      </Text>

      <Text x={464.00} y={449.47} className="c3">
        Currency
      </Text>
      <Text x={589.33} y={448.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={449.47} className="c3">
        {account.currency}
      </Text>

      <Text x={464.00} y={476.13} className="c3">
        Account Status
      </Text>
      <Text x={589.33} y={475.08} className="c4">
        :
      </Text>
      <Text x={601.33} y={476.13} className="c3">
        {account.accountStatus}
      </Text>

      <Text x={464.00} y={505.47} className="c3">
        CKYCR Number
      </Text>
      <Text x={589.33} y={503.08} className="c4">
        :
      </Text>
      <Text x={601.33} y={504.13} className="c3">
        {account.ckycrNumber}
      </Text>

      <Text x={464.00} y={530.80} className="c3">
        MICR Code
      </Text>
      <Text x={589.33} y={528.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={530.80} className="c3">
        {account.micrCode}
      </Text>

      <Text x={464.00} y={565.47} className="c3">
        Nominee Name
      </Text>
      <Text x={589.33} y={564.42} className="c4">
        :
      </Text>
      <Text x={601.33} y={563.30} className="c5">
        {account.nomineeName}
      </Text>

      {/* Statement Period banner */}
      <Text x={270.67} y={617.47} className="c3">
        Statement From
      </Text>
      <Text x={380.00} y={617.47} className="c3">
        :
      </Text>
      <Text x={386.67} y={617.47} className="c3">
        {account.periodFrom} to {account.periodTo}
      </Text>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="sbi3-table-header">
      <div style={{ width: sbi3ColumnWidths.valueDate }} className="sbi3-th-cell">
        Value Date
      </div>
      <div style={{ width: sbi3ColumnWidths.postDate }} className="sbi3-th-cell">
        Post Date
      </div>
      <div style={{ width: sbi3ColumnWidths.details }} className="sbi3-th-cell">
        Details
      </div>
      <div style={{ width: sbi3ColumnWidths.refNo }} className="sbi3-th-cell sbi3-th-multiline">
        <div>Ref No/</div>
        <div>Cheque</div>
        <div>No</div>
      </div>
      <div style={{ width: sbi3ColumnWidths.debit }} className="sbi3-th-cell">
        ₹ Debit
      </div>
      <div style={{ width: sbi3ColumnWidths.credit }} className="sbi3-th-cell">
        ₹ Credit
      </div>
      <div style={{ width: sbi3ColumnWidths.balance }} className="sbi3-th-cell">
        Balance
      </div>
    </div>
  );
}

function TableEndingRow() {
  return (
    <div className="sbi3-table-ending-row">
      <div style={{ width: sbi3ColumnWidths.valueDate }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.postDate }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.details }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.refNo }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.debit }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.credit }} className="sbi3-ending-cell" />
      <div style={{ width: sbi3ColumnWidths.balance }} className="sbi3-ending-cell" />
    </div>
  );
}

function Table({
  transactions,
  rowHeights,
  top,
}: {
  transactions: SBI3Transaction[];
  rowHeights: number[];
  top: number;
}) {
  return (
    <div className="sbi3-table" style={{ top }}>
      <TableHeader />
      {transactions.map((row, i) => (
        <div
          className="sbi3-table-row"
          style={{ height: rowHeights[i] || 66.67 }}
          key={row.id}
        >
          <div
            style={{ width: sbi3ColumnWidths.valueDate }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.txnDate || row.valueDate}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.postDate }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.valueDate || row.postDate}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.details }}
            className="sbi3-cell sbi3-cell-desc"
          >
            {(row.description || row.details || '').split('\n').map((line, idx) => (
              <div key={idx} className="sbi3-desc-line">
                {line}
              </div>
            ))}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.refNo }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.refNo}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.debit }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.debit}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.credit }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.credit}
          </div>
          <div
            style={{ width: sbi3ColumnWidths.balance }}
            className="sbi3-cell sbi3-cell-center"
          >
            {row.balance}
          </div>
        </div>
      ))}
      <TableEndingRow />
    </div>
  );
}

function SummarySection() {
  return (
    <div className="sbi3-summary-container" style={{ top: 445.33 }}>
      <div className="sbi3-summary-banner">
        Statement Summary : {summary.periodFrom} To {summary.periodTo}
      </div>
      <div className="sbi3-summary-table">
        <div className="sbi3-summary-header-row">
          <div style={{ width: 132.67 }} className="sbi3-sum-th">
            Brought Forward (₹)
          </div>
          <div style={{ width: 77.33 }} className="sbi3-sum-th">
            Dr Count
          </div>
          <div style={{ width: 69.33 }} className="sbi3-sum-th">
            Cr Count
          </div>
          <div style={{ width: 134.67 }} className="sbi3-sum-th">
            Total Debits (₹)
          </div>
          <div style={{ width: 133.33 }} className="sbi3-sum-th">
            Total Credits (₹)
          </div>
          <div style={{ width: 192.67 }} className="sbi3-sum-th">
            Closing Balance (₹)
          </div>
        </div>
        <div className="sbi3-summary-value-row">
          <div style={{ width: 132.67 }} className="sbi3-sum-td">
            {summary.broughtForward}
          </div>
          <div style={{ width: 77.33 }} className="sbi3-sum-td">
            {summary.drCount}
          </div>
          <div style={{ width: 69.33 }} className="sbi3-sum-td">
            {summary.crCount}
          </div>
          <div style={{ width: 134.67 }} className="sbi3-sum-td">
            {summary.totalDebits}
          </div>
          <div style={{ width: 133.33 }} className="sbi3-sum-td">
            {summary.totalCredits}
          </div>
          <div style={{ width: 192.67 }} className="sbi3-sum-td">
            {summary.closingBalance}
          </div>
        </div>
      </div>
      <div className="sbi3-disclaimer-notes">
        <div className="sbi3-note-item">
          <span className="sbi3-bullet">•</span>
          <span>
            Please do not share your ATM, Debit/Credit Card number, PIN (Personal
            Identification number ), OTP (One-Time Password), Username or Password
            with anyone via email, SMS, phone call, or any other medium. Bank
            never asks for such information.
          </span>
        </div>
        <div className="sbi3-note-item">
          <span className="sbi3-bullet">•</span>
          <span>
            If your account is operated by a Power of Attorney holder, please
            review the transactions with extra care.
          </span>
        </div>
        <div className="sbi3-note-item">
          <span className="sbi3-bullet">•</span>
          <span>
            This is a computer generated statement and does not require a
            signature.
          </span>
        </div>
      </div>
    </div>
  );
}

function Footer({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="sbi3-footer" style={{ top: 1008.13 }}>
      <span className="c3">Page no. {pageNumber}</span>
    </div>
  );
}

export default function SBI3StatementGenerator() {
  const [isExporting, setIsExporting] = useState(false);

  const downloadPdf = async () => {
    try {
      setIsExporting(true);
      const response = await fetch(
        '/api/export-pdf?path=/sbi3&filename=SBI_Account_Statement.pdf'
      );
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || `Export failed with status ${response.status}`);
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SBI_Account_Statement.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success('SBI Statement PDF downloaded successfully.');
    } catch (error) {
      toast.error(
        `Failed to download PDF: ${error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="sbi3-viewer">
      <style>{`
        @font-face {
          font-family: 'SBI Helvetica';
          src: url('/sbi3/fonts/NimbusSans-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: block;
        }
        @font-face {
          font-family: 'SBI Helvetica';
          src: url('/sbi3/fonts/NimbusSans-Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
          font-display: block;
        }

        @page { size: 793.33px 1122.67px; margin: 0; }
        .sbi3-viewer { min-height: 100vh; background: #e8e8e8; font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .sbi3-toolbar { position: sticky; top: 0; z-index: 50; background: white; border-bottom: 1px solid #ddd; }
        .sbi3-toolbar-inner { max-width: 1200px; margin: auto; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
        .sbi3-toolbar-title, .sbi3-toolbar-actions { display: flex; align-items: center; gap: 12px; }
        .sbi3-toolbar button { cursor: pointer; }
        .sbi3-pages { padding: 8px 0; }
        .sbi3-page { width: 793.33px; height: 1122.67px; position: relative; box-sizing: border-box; overflow: hidden; background: white; margin: 8px auto; box-shadow: 0 1px 4px #0005; color: #000; }
        .sbi3-page1-vectors { position: absolute; left: 0; top: 0; width: 793.33px; height: 1122.67px; pointer-events: none; }
        .sbi3-text { position: absolute; left: 0; top: 0; display: inline-block; line-height: 1; white-space: pre; transform-origin: 0 0; }

        /* Typography classes matching source HTML */
        .c0 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; }
        .c1 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 13.33px; color: #ffffff; }
        .c2 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 16px; color: #000000; }
        .c3 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 13.33px; color: #000000; }
        .c4 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 14.67px; color: #000000; }
        .c5 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 9.33px; color: #000000; }
        .c6 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 18.67px; color: #00b7ff; }
        .c7 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 10.67px; color: #000000; }
        .c8 { font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; font-size: 10px; color: #000000; }


        
        /* Table layout */
        .sbi3-table { position: absolute; left: 26.67px; width: 740px; box-sizing: border-box; }
        .sbi3-table-header { display: flex; width: 740px; height: 49.33px; background: #5553aa; border: 0.67px solid #b8b8b8; box-sizing: border-box; }
        .sbi3-th-cell { border-right: 0.67px solid #b8b8b8; display: flex; align-items: center; justify-content: center; text-align: center; color: #ffffff; font-size: 13.33px; font-weight: normal; box-sizing: border-box; font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; }
        .sbi3-th-multiline { flex-direction: column; font-size: 10px; line-height: 12px; }
        .sbi3-th-cell:last-child { border-right: none; }
        .sbi3-table-row { display: flex; width: 740px; border-left: 0.67px solid #b8b8b8; border-right: 0.67px solid #b8b8b8; border-bottom: 0.67px solid #b8b8b8; box-sizing: border-box; }
        .sbi3-cell { border-right: 0.67px solid #b8b8b8; box-sizing: border-box; overflow: visible; font-size: 10.67px; line-height: 12.5px; font-weight: 500; font-family: Arial, Helvetica, sans-serif; color: #000000; -webkit-text-stroke: 0.10px #000000; text-rendering: geometricPrecision; }
        .sbi3-cell:last-child { border-right: none; }
        .sbi3-cell-center { display: flex; align-items: center; justify-content: center; text-align: center; }
        .sbi3-cell-desc { display: flex; flex-direction: column; justify-content: flex-start; padding: 6px 6px 2px 6px; text-align: left; line-height: 11.5px; overflow: visible; }
        .sbi3-desc-line { white-space: pre-wrap; word-break: break-word; }
        .sbi3-cell-amount { display: flex; align-items: center; justify-content: flex-end; padding-right: 12px; text-align: right; font-variant-numeric: tabular-nums; }
        .sbi3-table-ending-row { display: flex; width: 740px; height: 40px; background: #5553aa; border-left: 0.67px solid #b8b8b8; border-right: 0.67px solid #b8b8b8; border-bottom: 0.67px solid #b8b8b8; box-sizing: border-box; }
        .sbi3-ending-cell { border-right: 0.67px solid #b8b8b8; box-sizing: border-box; height: 100%; }
        .sbi3-ending-cell:last-child { border-right: none; }

        /* Summary section */
        .sbi3-summary-container { position: absolute; left: 26.67px; width: 740px; box-sizing: border-box; }
        .sbi3-summary-banner { width: 740px; height: 33.33px; background: #5553aa; color: #ffffff; font-size: 13.33px; display: flex; align-items: center; justify-content: center; box-sizing: border-box; border: 0.67px solid #b8b8b8; }
        .sbi3-summary-table { width: 740px; border-left: 0.67px solid #b8b8b8; border-right: 0.67px solid #b8b8b8; border-bottom: 0.67px solid #b8b8b8; box-sizing: border-box; }
        .sbi3-summary-header-row { display: flex; height: 38px; background: #ffffff; border-bottom: 0.67px solid #b8b8b8; box-sizing: border-box; }
        .sbi3-sum-th { border-right: 0.67px solid #b8b8b8; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 13.33px; color: #000000; box-sizing: border-box; font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; }
        .sbi3-sum-th:last-child { border-right: none; }
        .sbi3-rupee-icon { display: inline-block; width: 14px; height: 14px; vertical-align: middle; margin: 0 2px; }
        .sbi3-summary-value-row { display: flex; height: 38px; box-sizing: border-box; }
        .sbi3-sum-td { border-right: 0.67px solid #b8b8b8; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 13.33px; color: #000000; font-variant-numeric: tabular-nums; box-sizing: border-box; font-family: 'SBI Helvetica', Helvetica, Arial, sans-serif; }
        .sbi3-sum-td:last-child { border-right: none; }

        /* Disclaimer notes */
        .sbi3-disclaimer-notes { margin-top: 18px; font-size: 10px; line-height: 14px; color: #000000; }
        .sbi3-note-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
        .sbi3-bullet { font-size: 14px; line-height: 10px; color: #000000; }

        /* Footer */
        .sbi3-footer { position: absolute; left: 0; width: 793.33px; text-align: center; }

        @media (max-width: 809px) { .sbi3-pages { overflow-x: auto; } .sbi3-page { margin-left: 8px; margin-right: 8px; } }
        @media print {
          html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
          .sbi3-viewer { min-height: 0; background: white; }
          .sbi3-toolbar { display: none !important; }
          .sbi3-pages { padding: 0; overflow: visible; }
          .sbi3-page { margin: 0; box-shadow: none; break-after: page; page-break-after: always; height: 1122.67px !important; }
          .sbi3-page:last-child { break-after: auto; page-break-after: auto; }
        }
      `}</style>

      {/* Navigation Toolbar (Hidden during print) */}
      <header className="sbi3-toolbar">
        <div className="sbi3-toolbar-inner">
          <div className="sbi3-toolbar-title">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>
            <strong className="text-sm text-slate-800">
              State Bank of India Statement
            </strong>
          </div>
          <div className="sbi3-toolbar-actions">
            <span className="text-xs text-slate-600">
              {sbi3Transactions.length} transactions · {pageCount} pages
            </span>
            <button
              type="button"
              onClick={downloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 rounded bg-indigo-700 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-800 disabled:opacity-60"
            >
              {isExporting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {isExporting ? 'Generating PDF...' : 'Download PDF'}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Statement Pages Canvas */}
      <main className="sbi3-pages" aria-label="State Bank of India statement">
        {pages.map((page, i) => {
          const pageNumber = i + 1;
          const isFirst = pageNumber === 1;
          const isLast = pageNumber === pageCount;

          return (
            <section
              className="sbi3-page"
              aria-label={`Statement page ${pageNumber} of ${pageCount}`}
              key={pageNumber}
            >
              {isFirst && <Page1Header />}
              <Table
                transactions={page.transactions}
                rowHeights={page.rowHeights}
                top={page.tableTop}
              />
              {isLast && <SummarySection />}
              <Footer pageNumber={pageNumber} />
            </section>
          );
        })}
      </main>
    </div>
  );
}
