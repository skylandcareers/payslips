import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Building2, ArrowLeft, ShieldCheck, CheckCircle, Upload, Image, RefreshCw, Eye, Download, Loader2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

// Completely Fresh, Organic Vector Motif: Auspicious Sacred Deepam (Traditional Brass Lamp) with Blooming Lotus & Divine Flame
// Pure organic artwork: NO geometric shapes, NO shields, NO circles, and NO "SAE" monogram.
export const SriAyyappaLogo = ({ className = "w-20 h-20", size = 80 }: { className?: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      {/* Radiant flame gradient from pure golden core to warm crimson amber */}
      <radialGradient id="flameInnerGlow" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#dc2626" />
      </radialGradient>

      {/* Brass / Antique Gold metallic gradient */}
      <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="35%" stopColor="#d97706" />
        <stop offset="70%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>

      {/* Lotus petal gradient */}
      <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="60%" stopColor="#991b1b" />
        <stop offset="100%" stopColor="#780016" />
      </linearGradient>

      {/* Soft radiant halo glow behind flame */}
      <radialGradient id="auraGlow" cx="50%" cy="28%" r="40%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Radiant Aura / Halo */}
    <circle cx="50" cy="28" r="24" fill="url(#auraGlow)" />

    {/* Soft rays emitting from flame */}
    <g stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" opacity="0.65">
      <line x1="50" y1="6" x2="50" y2="2" />
      <line x1="65" y1="12" x2="69" y2="9" />
      <line x1="35" y1="12" x2="31" y2="9" />
      <line x1="74" y1="26" x2="78" y2="25" />
      <line x1="26" y1="26" x2="22" y2="25" />
      <line x1="70" y1="40" x2="74" y2="42" />
      <line x1="30" y1="40" x2="26" y2="42" />
    </g>

    {/* The Sacred Luminous Jyothi (Flame) */}
    <path
      d="M50 7 C53 14 62 25 62 33 C62 41 57 46 50 46 C43 46 38 41 38 33 C38 25 47 14 50 7 Z"
      fill="url(#flameInnerGlow)"
      style={{ filter: "drop-shadow(0px 1px 3px rgba(220, 38, 38, 0.5))" }}
    />
    {/* Inner White-Hot Flame Core */}
    <path
      d="M50 17 C51.5 22 56 28 56 34 C56 39 53 43 50 43 C47 43 44 39 44 34 C44 28 48.5 22 50 17 Z"
      fill="#ffffff"
      opacity="0.92"
    />

    {/* Traditional Brass Diya / Oil Lamp Bowl */}
    <path
      d="M26 46 C32 43 68 43 74 46 C77 48 76 52 70 54 C62 57 38 57 30 54 C24 52 23 48 26 46 Z"
      fill="url(#brassGold)"
    />
    <path
      d="M28 51 C32 63 68 63 72 51 C68 59 32 59 28 51 Z"
      fill="#78350f"
      opacity="0.6"
    />

    {/* Blooming Sacred Lotus Petals supporting the lamp */}
    {/* Center front petal */}
    <path
      d="M50 49 C46 56 46 66 50 71 C54 66 54 56 50 49 Z"
      fill="url(#brassGold)"
    />
    {/* Left inner petal */}
    <path
      d="M48 51 C40 54 36 63 42 69 C44 65 46 58 48 51 Z"
      fill="url(#lotusGrad)"
    />
    {/* Right inner petal */}
    <path
      d="M52 51 C60 54 64 63 58 69 C56 65 54 58 52 51 Z"
      fill="url(#lotusGrad)"
    />
    {/* Far left outer petal */}
    <path
      d="M42 53 C32 56 26 64 32 70 C36 67 39 61 42 53 Z"
      fill="url(#brassGold)"
    />
    {/* Far right outer petal */}
    <path
      d="M58 53 C68 56 74 64 68 70 C64 67 61 61 58 53 Z"
      fill="url(#brassGold)"
    />

    {/* Ornate Turned Brass Stem / Pillar */}
    <path
      d="M46 69 H54 V74 H46 Z"
      fill="url(#brassGold)"
    />
    <ellipse cx="50" cy="74" rx="7" ry="2" fill="url(#brassGold)" />
    <path
      d="M47 75 H53 V82 H47 Z"
      fill="url(#brassGold)"
    />
    <ellipse cx="50" cy="82" rx="9" ry="2.5" fill="url(#brassGold)" />

    {/* Traditional Multi-tiered Pedestal Base */}
    <path
      d="M38 84 C38 83 62 83 62 84 L68 91 C68 92 32 92 32 91 Z"
      fill="url(#brassGold)"
    />
    {/* Base rim */}
    <rect x="28" y="91" width="44" height="4" rx="2" fill="url(#brassGold)" />

    {/* Tiny decorative beads on base */}
    <circle cx="34" cy="93" r="1" fill="#fef08a" />
    <circle cx="42" cy="93" r="1" fill="#fef08a" />
    <circle cx="50" cy="93" r="1" fill="#fef08a" />
    <circle cx="58" cy="93" r="1" fill="#fef08a" />
    <circle cx="66" cy="93" r="1" fill="#fef08a" />
  </svg>
);

// Font options with robust fallbacks
const fontOptions = [
  { label: 'Times New Roman (Official Legal Serif)', value: "'Times New Roman', Times, 'Liberation Serif', serif" },
  { label: 'Georgia (Classic Executive Serif)', value: "Georgia, 'Times New Roman', serif" },
  { label: 'Garamond / Cambria (Academic Serif)', value: "Garamond, Cambria, 'Times New Roman', serif" },
  { label: 'Arial / Helvetica (Clean Corporate Sans)', value: "Arial, Helvetica, 'Helvetica Neue', sans-serif" },
  { label: 'Calibri / Segoe (Modern Executive Sans)', value: "Calibri, Candara, 'Segoe UI', sans-serif" },
];

const templateOptions = [
  {
    id: "sponsorship-korea-durgaprasad",
    name: "★ 1. South Korea Visa Sponsorship Letter - DURGAPRASAD MALLULA (Son)",
    data: {
      referenceNo: "SAE/VISA/2026/KOREA-01",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "Consulate General of the Republic of Korea / Embassy of the Republic of Korea\nVisa Section, India",
      subject: "FINANCIAL SPONSORSHIP & GUARANTEE UNDERTAKING FOR SOUTH KOREA VISA (MR. DURGAPRASAD MALLULA)",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **Mr. SRINIVASU MALLULA**, residing at 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001, Sole Proprietor of **M/s. SRI AYYAPPA ENTERPRISES** (GSTIN: **37ECUPP1064H1Z3**, PAN: **ECUPP1064H**), hereby confirm that I am the biological father and financial sponsor of **Mr. DURGAPRASAD MALLULA** (Indian Passport No.: **AP541251**, Student ID / Admission No.: **SUB24M146**), regular **Ph.D. Scholar** in Management at **Sri Balaji University, Pune (SBUP)**.

My son has been invited by the **Korean Institute of Industrial Engineers (KIIE)** to present his research at the **26th Asia-Pacific Industrial Engineering and Management Systems Conference (APIEMS 2026)** at the **Busan Port International Exhibition & Convention Center (BPEX)**, Busan, Republic of Korea from **29th November to 2nd December, 2026**. Sri Balaji University Pune has sanctioned **Academic Duty Leave** for this visit.

I hereby undertake **full and unconditional financial sponsorship** for his entire visit to South Korea, covering round-trip flights, conference registration, lodging in Busan, living expenses, and overseas health/travel insurance. He will return to India immediately upon completion of the event to resume his Ph.D. studies at Sri Balaji University Pune.

Enclosed herewith: Form GST REG-06 (GSTIN: **37ECUPP1064H1Z3**), PAN copy, audited bank statements, Income Tax Returns (ITR-V), and University Bonafide Certificate. I kindly request you to grant him the visa.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "sponsorship-schengen-durgaprasad",
    name: "★ 2. Schengen Visa Sponsorship Letter - DURGAPRASAD MALLULA (Son)",
    data: {
      referenceNo: "SAE/VISA/2026/SCHENGEN-02",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "Embassy / Consulate General of the Schengen Member State\nVisa Processing Directorate, India",
      subject: "SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SCHENGEN VISA (MR. DURGAPRASAD MALLULA)",
      salutation: "Dear Sir/Madam,",
      bodyText: `I, **Mr. SRINIVASU MALLULA**, an Indian citizen residing at 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001, hereby confirm that I am the biological father and primary financial sponsor of my son, **Mr. DURGAPRASAD MALLULA** (Indian Passport No.: **AP541251**, Student ID / Admission No.: **SUB24M146**), who is a full-time regular **Ph.D. Research Scholar at Sri Balaji University Pune (SBUP)**, Maharashtra, India.

I am the sole Proprietor of **M/s. SRI AYYAPPA ENTERPRISES**, an established commercial firm in Andhra Pradesh (GSTIN: **37ECUPP1064H1Z3**, PAN: **ECUPP1064H**). My enterprise operates in good commercial standing with regular statutory GST and Income Tax Return filings with the Government of India.

My son has been accepted to present his scientific research at an international symposium in the Schengen Area. I hereby undertake **full and unconditional financial responsibility** for his entire trip, covering round-trip flights, hotel lodging, daily sustenance, local transport, overseas health and travel insurance exceeding €30,000, and all emergency contingencies during his stay.

His travel is strictly academic and temporary. He has strong familial and academic ties to India and will return immediately after completing his conference visit to complete his doctoral thesis at Sri Balaji University Pune. All supporting documents—including Form GST REG-06, PAN, recent Income Tax Returns, audited bank statements, and University Bonafide Certificate—are attached. I kindly request you to grant him the Schengen Short-Stay Visa.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "sponsorship-higher-ed-durgaprasad",
    name: "★ 3. Higher Education & International Study Sponsorship - DURGAPRASAD MALLULA",
    data: {
      referenceNo: "SAE/VISA/2026/STUDY-03",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer / Admissions Directorate",
      recipientAddress: "High Commission / Embassy / Immigration & Visa Authority\nStudent Visa Section",
      subject: "AFFIDAVIT OF FINANCIAL SPONSORSHIP & GUARANTEE FOR HIGHER EDUCATION (STUDENT: MR. DURGAPRASAD MALLULA)",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **Mr. SRINIVASU MALLULA**, residing at 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001, solemnly affirm that I am the biological father and primary financial sponsor of my son, **Mr. DURGAPRASAD MALLULA** (Indian Passport No.: **AP541251**, Student ID / Admission No.: **SUB24M146**), currently pursuing his regular **Ph.D. at Sri Balaji University Pune (SBUP)**, Maharashtra, India.

I am the sole Proprietor of **M/s. SRI AYYAPPA ENTERPRISES**, a legally compliant and actively operating commercial enterprise in Andhra Pradesh (GSTIN: **37ECUPP1064H1Z3**, PAN: **ECUPP1064H**). Through ongoing business operations, I possess substantial financial resources, steady cash flows, and unencumbered liquid assets to sponsor his academic pursuits.

I hereby formally guarantee:
1. **Academic Charges:** Timely payment of all educational tuition fees, registration fees, and laboratory/examination charges.
2. **Living & Accommodation:** Full funding for lodging, apartment rental, food, local commuting, and comprehensive medical insurance.
3. **Emergency Contingencies:** Unconditional guarantee that he will never become a public charge, with funds readily remitted upon requirement.

Copies of Form GST REG-06, Income Tax Returns, certified bank balance certificates, and University Bonafide Certificate are enclosed. I respectfully request you to kindly approve his visa application.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "gst-declaration",
    name: "4. GST Registration & Statutory Business Credentials Declaration",
    data: {
      referenceNo: "SAE/GST/2026/041",
      date: "14/10/2026",
      recipientName: "To Whomsoever It May Concern",
      recipientAddress: "Official Verification / Banking / Consular Authority",
      subject: "STATUTORY DECLARATION OF GST REGISTRATION DETAILS & BUSINESS PROFILE (M/S SRI AYYAPPA ENTERPRISES)",
      salutation: "Dear Sir/Madam,",
      bodyText: `This is to certify the official Goods & Services Tax (GST) registration credentials and operating commercial profile of **M/s. SRI AYYAPPA ENTERPRISES**, registered under the Goods and Services Tax Act, Government of India:

### 1. Business Particulars & Legal Status
| Parameter | Details | Parameter | Details |
|---|---|---|---|
| **Trade Name** | **SRI AYYAPPA ENTERPRISES** | **Legal Name** | **SRINIVASU MALLULA** |
| **GSTIN / UIN** | **37ECUPP1064H1Z3** | **Constitution** | **Proprietorship** |
| **Status** | **Active (Regular Taxpayer)** | **Reg. Date** | **06/08/2024** |
| **State Code** | **37 (Andhra Pradesh)** | **PAN** | **ECUPP1064H** |

### 2. Principal Place of Business & Tax Jurisdiction
- **Principal Address:** 17-8-38/1A, SAMBAMURTHY NAGAR, NEAR SAIBABA TEMPLE, Kakinada, Andhra Pradesh - 533001
- **Period of Validity:** From 06/08/2024 To Not Applicable (Regular Registration)
- **Approving Authority:** Centre (Assistant Commissioner ST, Jurisdictional Office: Andhra Pradesh)

### 3. Dealing in Commodities (HSN Codes)
- **8504 / 8536 / 8544:** Electrical Distribution Units, Circuit Apparatus & Armored Cables
- **7318 / 8481:** High-Tensile Structural Fasteners, Bolts & Industrial Pipe Valves

We confirm that the above particulars are authentic and extracted from the Goods and Services Tax Network (GSTN), Government of India.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "quotation",
    name: "5. Commercial Quotation / Supply Estimate",
    data: {
      referenceNo: "SAE/QTN/2026/184",
      date: "14/10/2026",
      recipientName: "The Purchase Officer / Managing Director",
      recipientAddress: "Industrial Contracting & Engineering Clients\nKakinada / Visakhapatnam, Andhra Pradesh",
      subject: "Commercial Quotation for Supply of Heavy-Duty Electrical Switchgear, Industrial Cables & Fasteners",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our most competitive rates for the supply of high-grade industrial electrical switchgear, heavy-duty armored cables, and structural fasteners as detailed below:

| # | HSN | Item Description & Specifications | Qty | Rate (₹) | Total (₹) |
|---|---|---|---|---|---|
| 1 | 8504 | Industrial Distribution Power Unit (24V 40A) | 12 pcs | 8,500.00 | 1,02,000.00 |
| 2 | 8536 | Heavy-Duty Three-Phase Contactor & Relay | 45 pcs | 2,400.00 | 1,08,000.00 |
| 3 | 8544 | 4-Core Copper Armored Power Cable (100m) | 8 rolls | 18,500.00 | 1,48,000.00 |
| 4 | 7318 | High-Tensile Grade 8.8 Galvanized Fasteners | 350 kgs | 280.00 | 98,000.00 |
| | | **Total Taxable Value** | | | **₹4,56,000.00** |
| | | **Total GST (CGST 9% + SGST 9%)** | | | **₹82,080.00** |
| | | **Grand Total (Inclusive of 18% GST)** | | | **₹5,38,080.00** |

**Amount in Words:** Five Lakh Thirty-Eight Thousand and Eighty Rupees Only.

**Commercial Terms:** Validity: 30 days | Delivery: 5–7 days from PO | Payment: 30% advance, 70% on delivery | 1-Yr Warranty.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "tax-invoice",
    name: "6. Official Tax Invoice (GST Regular Taxpayer)",
    data: {
      referenceNo: "SAE/INV/2026/0892",
      date: "14/10/2026",
      recipientName: "M/s. Coastal Infra & Engineering Projects Pvt. Ltd.",
      recipientAddress: "D.No. 48-12-5/2, Industrial Estate, Madhavapatnam, Kakinada, AP - 533005\nGSTIN: 37AABCC5432D1Z8 | State Code: 37",
      subject: "TAX INVOICE (ORIGINAL FOR RECIPIENT)",
      salutation: "",
      bodyText: `**Place of Supply:** Andhra Pradesh (37) | **Reverse Charge:** No | **Mode:** Roadways

| # | HSN | Description of Goods | Qty | Rate (₹) | Taxable (₹) | GST 18% (₹) | Total (₹) |
|---|---|---|---|---|---|---|---|
| 1 | 8504 | Industrial Power Transformer Unit | 4 | 14,000.00 | 56,000.00 | 10,080.00 | 66,080.00 |
| 2 | 8536 | Heavy Duty Breaker & Switches | 30 | 1,800.00 | 54,000.00 | 9,720.00 | 63,720.00 |
| 3 | 8544 | Armored Copper Power Cables | 6 | 16,500.00 | 99,000.00 | 17,820.00 | 1,16,820.00 |
| 4 | 7318 | Stainless Fastener Hardware Packs | 40 | 1,250.00 | 50,000.00 | 9,000.00 | 59,000.00 |
| | | **Total** | | | **₹2,59,000.00** | **₹46,620.00** | **₹3,05,620.00** |

**Total in Words:** Three Lakh Five Thousand Six Hundred and Twenty Rupees Only.

**Bank Remittance:** State Bank of India, Kakinada Branch | A/C: SRI AYYAPPA ENTERPRISES | A/C No: 41289010005432 | IFSC: SBIN0000851 | GSTIN: 37ECUPP1064H1Z3.

**Declaration:** We declare that this invoice shows the actual price of the goods described and all particulars are true and correct.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "delivery-challan",
    name: "7. Material Delivery Challan / Dispatch Note",
    data: {
      referenceNo: "SAE/DC/2026/0315",
      date: "14/10/2026",
      recipientName: "Site In-Charge / Project Logistics Officer",
      recipientAddress: "Port Logistics Yard, Deep Water Port Road\nKakinada, Andhra Pradesh - 533007",
      subject: "DELIVERY CHALLAN / MATERIAL DISPATCH NOTE",
      salutation: "",
      bodyText: `**Dispatched From:** 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, AP - 533001  
**Vehicle Number:** AP-05-TX-9842 | **Driver Contact:** K. Ramesh (+91 94401 XXXXX)

| # | HSN | Material Description | Unit / Pkg | Qty Dispatched | Remarks |
|---|---|---|---|---|---|
| 1 | 8504 | Industrial Distribution Power Units | 6 Cartons | 12 Units | Pre-Tested & Sealed |
| 2 | 8536 | Heavy-Duty Contactors & Relays | 3 Wooden Crates | 45 Sets | Original Factory Packing |
| 3 | 8544 | Copper Armored Industrial Power Cables | 8 Wooden Drums | 800 Meters | Verified Length |
| 4 | 7318 | Galvanized Industrial Hardware Bolts | 14 Bags | 350 Kgs | Heavy Grade 8.8 |

**Consignment Weight:** Approx. 620.00 Kgs | **Packages:** 31 Packages Total

**Receiver's Acknowledgment:** Received the above goods in good order and sound sealed condition.  
*Receiver's Signature & Date:* _______________________ | *Company Seal:* _______________________`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "visa-cover-letter",
    name: "8. Visa Application Cover Letter & Financial Undertaking (Proprietor)",
    data: {
      referenceNo: "SAE/VISA/2026/11",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "The Embassy / Consulate General\nVisa Processing Department, New Delhi / Chennai, India",
      subject: "COVERING LETTER & FINANCIAL GUARANTEE UNDERTAKING FOR VISA APPLICATION (PROPRIETOR)",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **SRINIVASU MALLULA**, an Indian citizen holding Passport No. **Z8920154**, respectfully submit this cover letter and financial guarantee statement in support of my Visa application.

I am the sole Proprietor and registered owner of **M/s. SRI AYYAPPA ENTERPRISES**, a legally established, active, and compliant commercial enterprise based at 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001. My firm has been operational with Goods & Services Tax registration (GSTIN: **37ECUPP1064H1Z3**, PAN: **ECUPP1064H**) granted by the jurisdictional authority.

Supporting documents enclosed: Form GST REG-06 Registration Certificate, Income Tax Returns (ITR-V) for recent assessment years, bank statements demonstrating sufficient liquid balances, and trade license credentials.

I undertake full, unconditional financial responsibility for all travel expenses, accommodation, boarding, and medical insurance. I have deep commercial ties in Andhra Pradesh, India, and will return immediately upon conclusion of my travel. I kindly request you to grant me the visa.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
  {
    id: "bank-reference",
    name: "9. Banking Authority & Trade Credit Verification Certificate",
    data: {
      referenceNo: "SAE/BNK/2026/028",
      date: "14/10/2026",
      recipientName: "The Branch Manager / Credit Officer",
      recipientAddress: "Commercial Banking & Credit Operations\nState Bank of India / Scheduled Commercial Bank",
      subject: "Declaration of Commercial Standing, Operating Profile & GST Compliance",
      salutation: "Dear Sir/Madam,",
      bodyText: `This letter confirms that **M/s. SRI AYYAPPA ENTERPRISES** is an actively operating commercial proprietorship enterprise owned by **Mr. SRINIVASU MALLULA**, operating from 17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001.

### Key Registration & Compliance Metrics:
1. **Tax Registration:** GSTIN **37ECUPP1064H1Z3** (Central/State Tax Jurisdiction, Andhra Pradesh).
2. **Compliance Record:** Regular Taxpayer with timely statutory filings and nil liabilities.
3. **Core Operating Sectors:** Electrical transformers (HSN 8504), circuit protection apparatus (HSN 8536), insulated cables (HSN 8544), and hardware fasteners (HSN 7318).
4. **Authorized Signatory:** Mr. Srinivasu Mallula is the sole proprietor authorized to operate all banking transactions and commercial contracts.

This certificate is issued at the request of banking authorities for trade credit evaluation and official commercial records.

Thanking you.`,
      signatoryName: "SRINIVASU MALLULA",
      signatoryTitle: "Proprietor",
      signatoryFirm: "SRI AYYAPPA ENTERPRISES",
    },
  },
];

export default function SriAyyappaLetterheadGenerator() {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('preview');
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');
  const [selectedFont, setSelectedFont] = useState<string>(fontOptions[0].value);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templateOptions[0].id);
  const [colorTheme, setColorTheme] = useState<'temple_maroon' | 'forest_gold' | 'bronze_saffron' | 'obsidian_gold'>('temple_maroon');
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [bodyFontSize, setBodyFontSize] = useState<string>('9.8pt');
  const [signatureGap, setSignatureGap] = useState<number>(60);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [isExportingPng, setIsExportingPng] = useState<boolean>(false);

  const [headerData, setHeaderData] = useState({
    firmName: 'SRI AYYAPPA ENTERPRISES',
    tagline: 'DEALERS IN ELECTRICAL, HARDWARE, INDUSTRIAL SUPPLIES & GENERAL MERCHANDISE',
    proprietor: 'SRINIVASU MALLULA',
    gstin: '37ECUPP1064H1Z3',
    hsnCode: 'HSN: 8504, 8536, 8544, 7318, 8481',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP) • ESTD 2024',
    address: '17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, Andhra Pradesh - 533001',
    phone: '+91 98481 23456 / +91 94401 98765',
    email: 'sriayyappaenterprises.kkd@gmail.com',
    pan: 'ECUPP1064H',
    jurisdictionCenter: 'Centre (Jurisdictional Office: Andhra Pradesh)',
    jurisdictionState: 'Andhra Pradesh',
  });

  const [formData, setFormData] = useState(templateOptions[0].data);

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tId = e.target.value;
    setSelectedTemplateId(tId);
    const selected = templateOptions.find(t => t.id === tId);
    if (selected) {
      setFormData(selected.data);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setCustomLogoUrl(url);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExportingPdf(true);
      setActiveTab('preview');
      await new Promise((resolve) => setTimeout(resolve, 200));

      const sheetEl = document.getElementById('sri-ayyappa-letterhead-sheet');
      if (!sheetEl) throw new Error('Letterhead sheet element not found');

      // High-resolution capture at natural aspect ratio
      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = 210;
      const pdfHeight = 297;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight, undefined, 'FAST');
      } else {
        const ratio = pdfHeight / imgHeight;
        const finalWidth = pdfWidth * ratio;
        const finalHeight = pdfHeight;
        const xOffset = (pdfWidth - finalWidth) / 2;
        pdf.addImage(imgData, 'JPEG', xOffset, 0, finalWidth, finalHeight, undefined, 'FAST');
      }

      const fileName = `${headerData.firmName.replace(/\s+/g, '_')}_${formData.referenceNo ? formData.referenceNo.replace(/[\/\\]/g, '_') : 'Letterhead'}.pdf`;
      pdf.save(fileName);
      toast.success('Letterhead PDF downloaded successfully!');
    } catch (err) {
      console.error('PDF export failed:', err);
      toast.error('Failed to generate PDF. Falling back to system print dialog.');
      window.print();
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleDownloadPng = async () => {
    try {
      setIsExportingPng(true);
      setActiveTab('preview');
      await new Promise((resolve) => setTimeout(resolve, 200));

      const sheetEl = document.getElementById('sri-ayyappa-letterhead-sheet');
      if (!sheetEl) throw new Error('Letterhead sheet element not found');

      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${headerData.firmName.replace(/\s+/g, '_')}_${formData.referenceNo ? formData.referenceNo.replace(/[\/\\]/g, '_') : 'Letterhead'}.png`;
      link.click();
      toast.success('High-resolution letterhead image downloaded!');
    } catch (err) {
      console.error('PNG export failed:', err);
      toast.error('Failed to generate image.');
    } finally {
      setIsExportingPng(false);
    }
  };

  const handlePrint = () => {
    setActiveTab('preview');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Fresh, radiant, and prestigious corporate theme palettes for Sri Ayyappa Enterprises
  const themes = {
    temple_maroon: {
      primary: '#780016', // Deep Imperial Maroon / Sacred Crimson
      secondary: '#b45309', // Warm Antique Gold
      darkText: '#1c1917', // Obsidian Charcoal
      subText: '#44403c',
      rulePrimary: '#780016',
      ruleSecondary: '#d97706',
      bgLight: '#fdf2f4', // Soft rose-cream background
      borderSoft: '#fecdd3',
    },
    forest_gold: {
      primary: '#14532d', // Sacred Bilva / Deep Forest Green
      secondary: '#b45309', // Marigold Gold
      darkText: '#052e16',
      subText: '#1e293b',
      rulePrimary: '#14532d',
      ruleSecondary: '#d97706',
      bgLight: '#f0fdf4',
      borderSoft: '#bbf7d0',
    },
    bronze_saffron: {
      primary: '#7c2d12', // Deep Terracotta Bronze
      secondary: '#ea580c', // Auspicious Saffron
      darkText: '#2b0710',
      subText: '#1f2937',
      rulePrimary: '#7c2d12',
      ruleSecondary: '#d97706',
      bgLight: '#fff7ed',
      borderSoft: '#fed7aa',
    },
    obsidian_gold: {
      primary: '#18181b', // Obsidian Charcoal
      secondary: '#c59b27', // Rich Gold
      darkText: '#09090b',
      subText: '#27272a',
      rulePrimary: '#18181b',
      ruleSecondary: '#d97706',
      bgLight: '#fafafa',
      borderSoft: '#e4e4e7',
    },
  };

  const currentTheme = themes[colorTheme];

  const inputCls = "w-full text-xs p-2 border rounded-md border-rose-200 focus:outline-none focus:ring-1 focus:ring-rose-600 bg-white text-slate-900 transition-colors";
  const labelCls = "block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1";

  return (
    <div className="min-h-screen bg-rose-50/30 text-slate-900 flex flex-col font-sans print:!bg-white print:!min-h-0 print:!h-auto print:!block">
      {/* Top Navbar */}
      <header
        id="app-top-nav"
        className="print:hidden bg-white border-b border-rose-200 px-6 py-3 sticky top-0 z-30 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Link
            to="/sri-ayyappa-enterprises"
            className="flex items-center gap-1.5 text-xs font-bold text-[#780016] hover:text-[#5c0011] bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#780016]" /> Sri Ayyappa Hub
          </Link>
          <div className="h-4 w-px bg-rose-200 mx-1 hidden sm:block" />
          <div>
            <h1 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#780016]" />
              <span>SRI AYYAPPA ENTERPRISES</span>
              <span className="text-[10px] font-bold text-[#780016] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-300 hidden md:inline">
                GSTIN: 37ECUPP1064H1Z3
              </span>
            </h1>
            <p className="text-[11px] text-slate-600 font-semibold">Official Executive Letterhead & Sponsorship Document Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Tab Switcher */}
          <div className="flex md:hidden bg-rose-50 p-0.5 rounded-lg border border-rose-200">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1 text-xs font-bold rounded-md ${activeTab === 'form' ? 'bg-white shadow text-[#780016]' : 'text-slate-600'}`}
            >
              Edit Form
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-bold rounded-md ${activeTab === 'preview' ? 'bg-white shadow text-[#780016]' : 'text-slate-600'}`}
            >
              Preview
            </button>
          </div>

          <Link
            to="/sri-ayyappa-enterprises/gst"
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-2 rounded-lg transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Form GST REG-06
          </Link>

          {/* Primary Action: Download PDF directly */}
          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#780016] hover:bg-[#5c0011] active:scale-95 px-4 py-2 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-75 disabled:cursor-wait"
            title="Download crisp A4 PDF directly"
          >
            {isExportingPdf ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Exporting PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Download PDF</span>
              </>
            )}
          </button>

          {/* Secondary Action: Download PNG */}
          <button
            onClick={handleDownloadPng}
            disabled={isExportingPng}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-rose-50 hover:bg-rose-100 active:scale-95 px-3 py-2 rounded-lg border border-rose-200 transition-all cursor-pointer disabled:opacity-75"
            title="Download high-resolution image"
          >
            {isExportingPng ? (
              <Loader2 className="w-4 h-4 animate-spin text-slate-600" />
            ) : (
              <Image className="w-4 h-4 text-[#780016]" />
            )}
            <span>Image</span>
          </button>

          {/* Fallback Action: Print / Browser PDF Dialog */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-rose-50 active:scale-95 px-3 py-2 rounded-lg border border-slate-300 shadow-2xs transition-all cursor-pointer"
            title="Open system print dialog"
          >
            <Printer className="w-4 h-4 text-slate-700" />
            <span className="hidden sm:inline">Print / System PDF</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Control Sidebar */}
        <aside
          className={`print:hidden w-full md:w-[420px] lg:w-[450px] bg-white border-r border-rose-200 flex flex-col shrink-0 h-[calc(100vh-57px)] overflow-y-auto ${activeTab === 'preview' ? 'hidden md:flex' : 'flex'
            }`}
        >
          <div className="p-4 space-y-5">
            {/* Template Selector Card */}
            <div className="bg-gradient-to-br from-rose-50 to-amber-50/70 p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
              <label className="text-xs font-bold text-[#780016] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#780016]" />
                Select Letter / Sponsorship Template
              </label>
              <select
                value={selectedTemplateId}
                onChange={handleTemplateChange}
                className="w-full text-xs font-bold p-2.5 bg-white border border-rose-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-600 shadow-2xs"
              >
                {templateOptions.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-stone-600 font-medium">
                Includes verified sponsorship letters by <strong>SRINIVASU MALLULA</strong> (Proprietor) and statutory GST profile declarations.
              </p>
            </div>

            {/* Styling & Typography Controls */}
            <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-200 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Settings2 className="w-4 h-4 text-[#780016]" /> Brand Colors & Letterhead Styling
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Header Style</label>
                  <select
                    value={headerStyle}
                    onChange={(e) => setHeaderStyle(e.target.value as any)}
                    className={inputCls}
                  >
                    <option value="centered">★ Sacred Deepam & Lotus</option>
                    <option value="boxed">Boxed Traditional Border</option>
                    <option value="modern">Modern Left-Aligned</option>
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Color Palette</label>
                  <select
                    value={colorTheme}
                    onChange={(e) => setColorTheme(e.target.value as any)}
                    className={inputCls}
                  >
                    <option value="temple_maroon">Imperial Maroon & Gold (Signature)</option>
                    <option value="forest_gold">Forest Green & Gold</option>
                    <option value="bronze_saffron">Bronze & Saffron</option>
                    <option value="obsidian_gold">Obsidian Slate & Gold</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Font Family</label>
                  <select
                    value={selectedFont}
                    onChange={(e) => setSelectedFont(e.target.value)}
                    className={`${inputCls} font-medium`}
                  >
                    {fontOptions.map((f) => (
                      <option key={f.value} value={f.value}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Font Size</label>
                  <select
                    value={bodyFontSize}
                    onChange={(e) => setBodyFontSize(e.target.value)}
                    className={`${inputCls} font-bold text-[#780016]`}
                  >
                    <option value="9.5pt">9.5pt (Compact)</option>
                    <option value="9.8pt">9.8pt (Standard Executive - Recommended)</option>
                    <option value="10.2pt">10.2pt (Spacious)</option>
                    <option value="10.8pt">10.8pt (Large)</option>
                  </select>
                </div>
              </div>

              {/* Signature Gap Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className={labelCls}>Signature / Stamp Gap</label>
                  <span className="text-[11px] font-bold text-[#780016]">{signatureGap}px</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="5"
                  value={signatureGap}
                  onChange={(e) => setSignatureGap(Number(e.target.value))}
                  className="w-full accent-[#780016] cursor-pointer"
                />
              </div>

              {/* Header Logo Controls */}
              <div className="pt-2 border-t border-rose-200">
                <label className="flex items-center justify-center gap-1.5 cursor-pointer bg-white hover:bg-rose-50 p-2.5 rounded-md border border-rose-300 text-xs font-bold text-[#780016] transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{customLogoUrl ? 'Replace Custom Logo' : 'Upload Custom Logo (Optional)'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
                {customLogoUrl && (
                  <button
                    onClick={() => setCustomLogoUrl(null)}
                    className="w-full text-center text-[10px] text-red-600 font-bold hover:underline mt-1"
                  >
                    Reset to Default Sacred Deepam Motif
                  </button>
                )}
              </div>
            </div>

            {/* Enterprise Header Details Editor */}
            <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-200 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#780016]" /> Enterprise Header Credentials
              </h3>

              <div>
                <label className={labelCls}>Firm / Trade Name</label>
                <input
                  type="text"
                  name="firmName"
                  value={headerData.firmName}
                  onChange={handleHeaderChange}
                  className={`${inputCls} font-bold`}
                />
              </div>

              <div>
                <label className={labelCls}>Tagline / Commercial Classification</label>
                <input
                  type="text"
                  name="tagline"
                  value={headerData.tagline}
                  onChange={handleHeaderChange}
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>GSTIN Number</label>
                  <input
                    type="text"
                    name="gstin"
                    value={headerData.gstin}
                    onChange={handleHeaderChange}
                    className={`${inputCls} font-mono font-bold`}
                  />
                </div>
                <div>
                  <label className={labelCls}>PAN Number</label>
                  <input
                    type="text"
                    name="pan"
                    value={headerData.pan}
                    onChange={handleHeaderChange}
                    className={`${inputCls} font-mono font-bold`}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Proprietor / Legal Name</label>
                <input
                  type="text"
                  name="proprietor"
                  value={headerData.proprietor}
                  onChange={handleHeaderChange}
                  className={`${inputCls} font-semibold`}
                />
              </div>

              <div>
                <label className={labelCls}>Principal Place of Business</label>
                <textarea
                  name="address"
                  value={headerData.address}
                  onChange={handleHeaderChange}
                  rows={2}
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Phone Numbers</label>
                  <input
                    type="text"
                    name="phone"
                    value={headerData.phone}
                    onChange={handleHeaderChange}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    value={headerData.email}
                    onChange={handleHeaderChange}
                    className={inputCls}
                  />
                </div>
              </div>
            </div>

            {/* Letter Content Editor */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#780016]" /> Letter Body & Meta Information
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Reference Number</label>
                  <input
                    type="text"
                    name="referenceNo"
                    value={formData.referenceNo}
                    onChange={handleFormChange}
                    className={`${inputCls} font-mono font-bold`}
                  />
                </div>
                <div>
                  <label className={labelCls}>Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    className={`${inputCls} font-bold`}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Recipient Name & Department</label>
                <textarea
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleFormChange}
                  rows={2}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Recipient Address</label>
                <textarea
                  name="recipientAddress"
                  value={formData.recipientAddress}
                  onChange={handleFormChange}
                  rows={2}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Subject Line</label>
                <textarea
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  rows={2}
                  className={`${inputCls} font-bold text-slate-900`}
                />
              </div>

              <div>
                <label className={labelCls}>Salutation</label>
                <input
                  type="text"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleFormChange}
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Body Content (Markdown Supported)</label>
                <textarea
                  name="bodyText"
                  value={formData.bodyText}
                  onChange={handleFormChange}
                  rows={14}
                  className={`${inputCls} font-mono text-[11px] leading-relaxed`}
                />
              </div>
            </div>

            {/* Signatory Details */}
            <div className="space-y-3 pt-3 border-t border-rose-200 pb-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#780016]" /> Signatory Details
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Signatory Name</label>
                  <input
                    type="text"
                    name="signatoryName"
                    value={formData.signatoryName}
                    onChange={handleFormChange}
                    className={`${inputCls} font-bold`}
                  />
                </div>
                <div>
                  <label className={labelCls}>Signatory Title</label>
                  <input
                    type="text"
                    name="signatoryTitle"
                    value={formData.signatoryTitle}
                    onChange={handleFormChange}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Signatory Firm Name</label>
                <input
                  type="text"
                  name="signatoryFirm"
                  value={formData.signatoryFirm}
                  onChange={handleFormChange}
                  className={inputCls}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Right Live Preview Canvas */}
        <main
          className={`flex-1 bg-stone-300/80 p-4 md:p-8 flex justify-center items-start overflow-y-auto print:!flex print:!p-0 print:!m-0 print:!overflow-visible print:!bg-white print:!w-full print:!static ${activeTab === 'form' ? 'hidden md:flex' : 'flex'
            }`}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @media print {
                  @page {
                    size: A4 portrait;
                    margin: 0 !important;
                  }
                  html, body {
                    background: #ffffff !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 210mm !important;
                    min-height: 297mm !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                  }
                  #app-top-nav, aside, nav, button, .print\\:hidden {
                    display: none !important;
                  }
                  body * {
                    visibility: hidden;
                  }
                  #sri-ayyappa-letterhead-sheet,
                  #sri-ayyappa-letterhead-sheet * {
                    visibility: visible;
                  }
                  #sri-ayyappa-letterhead-sheet {
                    position: absolute !important;
                    left: 0 !important;
                    top: 0 !important;
                    width: 210mm !important;
                    min-height: 297mm !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    padding: 8mm 14mm 8mm 14mm !important;
                    box-shadow: none !important;
                    border: none !important;
                    background: #ffffff !important;
                    page-break-after: avoid !important;
                    page-break-inside: avoid !important;
                    break-after: avoid !important;
                    break-inside: avoid !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                  }
                  .letterhead-header-block,
                  .letterhead-body-block,
                  .letterhead-footer-block {
                    display: block !important;
                    visibility: visible !important;
                  }
                }
              `,
            }}
          />

          {/* A4 Sheet Container */}
          <div
            id="sri-ayyappa-letterhead-sheet"
            className="print-letterhead-container bg-white shadow-2xl mx-auto flex flex-col justify-between relative print:!shadow-none print:!border-none"
            style={{
              width: '210mm',
              minHeight: '297mm',
              fontFamily: selectedFont,
              padding: '8mm 14mm 8mm 14mm',
              boxSizing: 'border-box',
              color: '#000000',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Ultra-subtle Organic Watermark in Background */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
              style={{ opacity: 0.038 }}
            >
              <SriAyyappaLogo size={320} />
            </div>

            {/* Top Letterhead Header Block */}
            <div className="letterhead-header-block w-full relative z-10">
              {/* Style 1: Sacred Deepam & Lotus Header (Signature Default) */}
              {headerStyle === 'centered' && (
                <div className="pb-2 mb-2 relative">
                  <div className="flex items-center gap-4">
                    {/* Organic Logo: Sacred Deepam / Lamp or Custom Upload */}
                    <div className="shrink-0 flex items-center justify-center">
                      {customLogoUrl ? (
                        <img
                          src={customLogoUrl}
                          alt="Sri Ayyappa Enterprises Logo"
                          className="w-20 h-20 object-contain"
                        />
                      ) : (
                        <SriAyyappaLogo size={78} />
                      )}
                    </div>

                    {/* Typography Block */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h1
                          className="text-[28px] leading-none font-black tracking-tight uppercase"
                          style={{
                            color: currentTheme.primary,
                            fontFamily: selectedFont,
                            letterSpacing: '-0.3px',
                          }}
                        >
                          {headerData.firmName}
                        </h1>
                      </div>

                      <p
                        className="text-[9.8px] font-bold tracking-[0.14em] uppercase mt-1"
                        style={{ color: currentTheme.secondary }}
                      >
                        {headerData.tagline}
                      </p>

                      <div className="text-[10px] font-semibold text-slate-900 leading-snug mt-1">
                        <span className="font-bold text-black">Principal Place:</span> {headerData.address}
                      </div>

                      <div className="text-[9.5px] font-semibold text-slate-800 mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                        <span><strong>T:</strong> {headerData.phone}</span>
                        <span className="text-amber-500">•</span>
                        <span><strong>E:</strong> {headerData.email}</span>
                        <span className="text-amber-500">•</span>
                        <span><strong>Proprietor:</strong> {headerData.proprietor}</span>
                        <span className="text-amber-500">•</span>
                        <span>GSTIN: <strong>{headerData.gstin}</strong></span>
                        <span className="text-amber-500">•</span>
                        <span>PAN: <strong>{headerData.pan}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Tone Executive Bottom Border */}
                  <div className="mt-3 mb-3.5 relative">
                    <div className="h-[2.5px] w-full" style={{ backgroundColor: currentTheme.rulePrimary }} />
                    <div className="h-[1.5px] w-full mt-[1px]" style={{ backgroundColor: currentTheme.ruleSecondary }} />
                  </div>
                </div>
              )}

              {/* Style 2: Boxed Traditional Legal / Government Contractor Banner */}
              {headerStyle === 'boxed' && (
                <div
                  className="p-3 mb-2 rounded-lg border-2 relative"
                  style={{
                    borderColor: currentTheme.rulePrimary,
                    backgroundColor: currentTheme.bgLight,
                  }}
                >
                  <div className="flex items-center justify-between border-b pb-1 mb-1.5" style={{ borderColor: `${currentTheme.rulePrimary}40` }}>
                    <div className="text-[9.5px] font-black tracking-wider uppercase text-slate-900">
                      GOVERNMENT OF INDIA • GSTIN: <strong style={{ color: currentTheme.primary }}>{headerData.gstin}</strong>
                    </div>
                    <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-900">
                      STATE: <strong>ANDHRA PRADESH (37)</strong> | PAN: <strong>{headerData.pan}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0">
                      {customLogoUrl ? (
                        <img src={customLogoUrl} alt="Logo" className="w-16 h-16 object-contain" />
                      ) : (
                        <SriAyyappaLogo size={68} />
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <h1
                        className="text-[23px] font-black uppercase tracking-tight leading-none"
                        style={{ color: currentTheme.primary }}
                      >
                        {headerData.firmName}
                      </h1>
                      <p
                        className="text-[9.5px] font-bold uppercase tracking-wider mt-0.5"
                        style={{ color: currentTheme.secondary }}
                      >
                        {headerData.tagline}
                      </p>
                      <p className="text-[10px] font-bold text-slate-900 mt-0.5">
                        {headerData.address}
                      </p>
                      <div className="text-[9.5px] text-slate-800 mt-0.5 flex flex-wrap gap-2 font-semibold">
                        <span>Tel: {headerData.phone}</span>
                        <span>•</span>
                        <span>Email: {headerData.email}</span>
                        <span>•</span>
                        <span>Proprietor: <strong>{headerData.proprietor}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Style 3: Modern Left-Aligned Corporate Brand */}
              {headerStyle === 'modern' && (
                <div className="pb-2 mb-2 border-b-2 relative" style={{ borderColor: currentTheme.rulePrimary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3.5">
                      {customLogoUrl ? (
                        <img src={customLogoUrl} alt="Logo" className="w-16 h-16 object-contain" />
                      ) : (
                        <SriAyyappaLogo size={68} />
                      )}
                      <div>
                        <h1
                          className="text-[24px] font-black tracking-tight leading-none uppercase"
                          style={{ color: currentTheme.primary }}
                        >
                          {headerData.firmName}
                        </h1>
                        <p
                          className="text-[9.5px] font-bold uppercase tracking-wider mt-0.5"
                          style={{ color: currentTheme.secondary }}
                        >
                          {headerData.tagline}
                        </p>
                        <p className="text-[9.5px] font-bold text-slate-900 mt-0.5">
                          Proprietor: <span className="text-black">{headerData.proprietor}</span> • Regular Taxpayer
                        </p>
                        <p className="text-[9.5px] font-medium text-slate-800 mt-0.5">
                          {headerData.address}
                        </p>
                      </div>
                    </div>

                    <div className="text-right text-[9.5px] text-slate-900 font-semibold space-y-0.5 pt-0.5">
                      <div className="font-mono font-black text-[11.5px]" style={{ color: currentTheme.primary }}>
                        GSTIN: {headerData.gstin}
                      </div>
                      <div>PAN: {headerData.pan}</div>
                      <div>Ph: {headerData.phone}</div>
                      <div className="text-slate-700">{headerData.email}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reference & Date Line */}
              <div
                className="flex justify-between items-center text-[10pt] font-bold mb-3.5 text-slate-950"
                style={{ fontFamily: selectedFont }}
              >
                <div>
                  {formData.referenceNo && (
                    <span>
                      Ref No.: <strong className="text-black font-extrabold">{formData.referenceNo}</strong>
                    </span>
                  )}
                </div>
                <div>
                  {formData.date && (
                    <span>
                      Date: <strong className="text-black font-extrabold">{formData.date}</strong>
                    </span>
                  )}
                </div>
              </div>

              {/* Recipient Block */}
              {formData.recipientName && (
                <div
                  className="text-[10pt] leading-normal mb-3 text-slate-950 font-medium"
                  style={{ fontFamily: selectedFont }}
                >
                  <div className="text-slate-800 text-[9.5pt] uppercase font-bold tracking-wider mb-0.5">To,</div>
                  <div className="font-bold text-black text-[10.5pt]">{formData.recipientName}</div>
                  <div className="whitespace-pre-line text-slate-900 text-[10pt]">{formData.recipientAddress}</div>
                </div>
              )}

              {/* Subject Banner */}
              {formData.subject && (
                <div
                  className="p-2.5 px-3.5 my-3 rounded-md border-l-4 font-bold text-[10pt] leading-snug shadow-2xs"
                  style={{
                    backgroundColor: currentTheme.bgLight,
                    borderLeftColor: currentTheme.rulePrimary,
                    color: currentTheme.primary,
                    fontFamily: selectedFont,
                  }}
                >
                  <span className="uppercase text-[9pt] tracking-wider font-extrabold mr-1.5">Subject:</span>
                  <span className="font-black text-black">{formData.subject}</span>
                </div>
              )}

              {/* Salutation */}
              {formData.salutation && (
                <div
                  className="text-[10pt] font-bold text-slate-950 mb-2.5"
                  style={{ fontFamily: selectedFont }}
                >
                  {formData.salutation}
                </div>
              )}
            </div>

            {/* Letter Body Content */}
            <div
              className="letterhead-body-block relative z-10 flex-1 w-full text-[#0a0a0a] text-justify mb-3 space-y-3
              [&_h3]:text-[10.5pt] [&_h3]:font-black [&_h3]:mt-2 [&_h3]:mb-1 [&_h3]:text-black
              [&_p]:mb-3 [&_p:last-child]:mb-0
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-2 [&_table]:text-[8.2pt] [&_table]:text-black
              [&_th]:border [&_th]:border-rose-300 [&_th]:bg-rose-50 [&_th]:p-1.5 [&_th]:font-black [&_th]:text-black [&_th]:text-left
              [&_td]:border [&_td]:border-rose-200 [&_td]:p-1.5 [&_td]:text-black
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-1.5 [&_li]:mb-0.5
              [&_hr]:border-rose-200 [&_hr]:my-2
              [&_strong]:font-black [&_strong]:text-black"
              style={{
                fontFamily: selectedFont,
                fontSize: bodyFontSize,
                lineHeight: 1.5,
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {formData.bodyText || ''}
              </ReactMarkdown>
            </div>

            {/* Signatory Section & Bottom Page Footer */}
            <div className="letterhead-footer-block w-full mt-auto relative z-10 pt-1">
              {/* Signature Block */}
              <div className="flex justify-between items-end mb-2">
                <div className="text-[8.5pt] text-slate-700 font-medium max-w-[280px] leading-tight">
                  {/* Space for verification stamp or seal if needed */}
                </div>

                <div className="text-right flex flex-col items-end">
                  <div className="text-[9.5pt] text-slate-900 font-medium">Yours faithfully,</div>
                  <div
                    className="text-[11pt] font-black uppercase tracking-tight mt-0.5"
                    style={{ color: currentTheme.primary }}
                  >
                    For {formData.signatoryFirm || headerData.firmName}
                  </div>

                  {/* Clean space for physical signature and firm rubber stamp */}
                  <div style={{ height: `${signatureGap}px`, width: '180px' }} />

                  <div className="text-[11pt] font-black text-black uppercase leading-tight">
                    {formData.signatoryName || headerData.proprietor}
                  </div>
                  <div className="text-[9pt] font-bold text-slate-800">
                    {formData.signatoryTitle || 'Proprietor'}
                  </div>
                </div>
              </div>

              {/* Bottom Official Rule & Footer Metadata */}
              <div
                className="pt-1.5 border-t text-[8.5pt] text-slate-900 flex flex-wrap items-center justify-between font-medium"
                style={{ borderColor: currentTheme.rulePrimary }}
              >
                <div className="font-bold flex items-center gap-2">
                  <span>GSTIN: <strong style={{ color: currentTheme.primary }}>{headerData.gstin}</strong></span>
                  <span className="text-amber-500">•</span>
                  <span>{headerData.hsnCode}</span>
                  <span className="text-amber-500">•</span>
                  <span>PAN: {headerData.pan}</span>
                </div>

                <div className="text-[8pt] text-slate-800 font-semibold">
                  17-8-38/1A, Sambamurthy Nagar, Near Saibaba Temple, Kakinada, AP - 533001
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
