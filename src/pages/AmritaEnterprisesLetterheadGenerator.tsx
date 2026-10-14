import React, { useState } from 'react';
import { Settings2, Printer, FileText, Sparkles, Building2, ArrowLeft, ShieldCheck, CheckCircle, Upload, Image, RefreshCw, Eye, Download, Loader2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

// High-Resolution Professional Vector Corporate Crest Logo
const AmritaLogo = ({ className = "w-24 h-24", size = 96 }: { className?: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer gold ring */}
    <circle cx="60" cy="60" r="56" stroke="#c59b27" strokeWidth="2.5" fill="#0f2b5c" />
    <circle cx="60" cy="60" r="51" stroke="#e6c66e" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.85" />
    <circle cx="60" cy="60" r="47" stroke="#0a1d3d" strokeWidth="1.5" fill="#0c234b" />

    {/* Concentric radial sheen */}
    <radialGradient id="aeGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stopColor="#1e4687" />
      <stop offset="100%" stopColor="#081833" />
    </radialGradient>
    <circle cx="60" cy="60" r="46" fill="url(#aeGlow)" />

    {/* Laurel wreath left & right */}
    <g fill="#c59b27" opacity="0.85">
      <path d="M30 65 C26 50 32 38 42 30 C38 38 35 48 37 62 Z" />
      <path d="M28 55 C24 48 26 40 33 35 C30 42 29 48 31 54 Z" />
      <path d="M90 65 C94 50 88 38 78 30 C82 38 85 48 83 62 Z" />
      <path d="M92 55 C96 48 94 40 87 35 C90 42 91 48 89 54 Z" />
    </g>

    {/* Crown / Crest on top */}
    <path d="M50 33 L55 38 L60 30 L65 38 L70 33 L68 41 L52 41 Z" fill="#e6c66e" stroke="#c59b27" strokeWidth="0.8" />

    {/* Monogram AE */}
    <text
      x="60"
      y="71"
      textAnchor="middle"
      fontFamily="'Times New Roman', Georgia, serif"
      fontSize="31"
      fontWeight="900"
      fill="#ffffff"
      letterSpacing="1"
      style={{ filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.6))" }}
    >
      AE
    </text>

    {/* Gold stars */}
    <polygon points="40,78 41.5,82 45.5,82 42.5,84.5 43.5,88.5 40,86 36.5,88.5 37.5,84.5 34.5,82 38.5,82" fill="#e6c66e" transform="scale(0.8) translate(10, 8)" />
    <polygon points="60,78 61.5,82 65.5,82 62.5,84.5 63.5,88.5 60,86 56.5,88.5 57.5,84.5 54.5,82 58.5,82" fill="#e6c66e" transform="scale(0.8) translate(15, 8)" />
    <polygon points="80,78 81.5,82 85.5,82 82.5,84.5 83.5,88.5 80,86 76.5,88.5 77.5,84.5 74.5,82 78.5,82" fill="#e6c66e" transform="scale(0.8) translate(20, 8)" />

    {/* Estd 2017 banner */}
    <rect x="34" y="86" width="52" height="12" rx="3" fill="#c59b27" stroke="#e6c66e" strokeWidth="0.8" />
    <text
      x="60"
      y="95"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="7"
      fontWeight="900"
      fill="#0c234b"
      letterSpacing="1"
    >
      ESTD 2017
    </text>
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
    id: "sponsorship-korea-chhoton",
    name: "★ 1. South Korea Visa Sponsorship Letter - CHHOTON ROY (KIIE / Korea)",
    data: {
      referenceNo: "AE/VISA/2026/KOREA-01",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "Consulate General of the Republic of Korea\nMumbai, India",
      subject: "FINANCIAL SPONSORSHIP & GUARANTEE UNDERTAKING FOR SOUTH KOREA VISA",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **Mr. SUKUMAR ROY**, residing at A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249, Sole Proprietor of **M/s. AMRITA ENTERPRISES** (GSTIN: **19COVPS4539H1Z0**, PAN: **COVPS4539H**), hereby confirm that I am the father and financial sponsor of **Mr. CHHOTON ROY** (Passport No.: **C4450339**, Admission No.: **SUB24M124**), regular **Ph.D. Scholar** in Management at **Sri Balaji University, Pune (SBUP)**.

My son has been invited by the **Korean Institute of Industrial Engineers (KIIE)** to present his research at the **26th Asia-Pacific Industrial Engineering and Management Systems Conference (APIEMS 2026)** at the **Busan Port International Exhibition & Convention Center (BPEX)**, Busan, Republic of Korea from **29th November to 2nd December, 2026**. Sri Balaji University Pune has sanctioned **Academic Duty Leave** from **27th November to 10th December, 2026**.

I hereby undertake **full and unconditional financial sponsorship** for his entire visit to South Korea, covering flights, conference registration, lodging in Busan, living expenses, and overseas health/travel insurance. He will return to India immediately upon completion of the event to resume his Ph.D. studies at Sri Balaji University.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "sponsorship-schengen-chhoton",
    name: "★ 2. Schengen Visa Sponsorship Letter - CHHOTON ROY (Europe / Conference)",
    data: {
      referenceNo: "AE/VISA/2026/SCHENGEN-02",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "Consulate General of France / Embassy of Germany / Spain / Schengen Member State\nKolkata / New Delhi, India",
      subject: "SPONSORSHIP DECLARATION & FINANCIAL GUARANTEE UNDERTAKING FOR SCHENGEN VISA (MR. CHHOTON ROY)",
      salutation: "Dear Sir/Madam,",
      bodyText: `I, **Mr. SUKUMAR ROY**, an Indian citizen residing at A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249, hereby confirm that I am the biological father and primary financial sponsor of my son, **Mr. CHHOTON ROY** (Indian Passport No.: **C4450339**, Admission No.: **SUB24M124**), who is a full-time **final-year Ph.D. Research Scholar at Sri Balaji University Pune (SBUP)**, Maharashtra, India.

I am the sole Proprietor of **M/s. AMRITA ENTERPRISES**, an established commercial firm in West Bengal (GSTIN: **19COVPS4539H1Z0**, PAN: **COVPS4539H**). My enterprise operates in good commercial standing with regular GST and Income Tax Return filings with the Government of India.

My son has been accepted to present his scientific research at an international symposium in the Schengen Area. I hereby undertake **full and unconditional financial responsibility** for his entire trip, covering round-trip flights, lodging accommodations, daily sustenance, local transport, overseas health and travel insurance exceeding €30,000, and all emergency contingencies during his stay.

His travel is strictly academic and temporary. He has strong familial and academic ties to India and will return immediately after completing his conference visit to complete his doctoral thesis at Sri Balaji University Pune. All supporting documents—including Form GST REG-06, PAN, recent Income Tax Returns, audited bank statements, and University Bonafide Certificate—are attached. I kindly request you to grant him the Schengen Short-Stay Visa.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "sponsorship-higher-ed-chhoton",
    name: "★ 3. Higher Education & International Study Sponsorship - CHHOTON ROY",
    data: {
      referenceNo: "AE/VISA/2026/STUDY-03",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer / Admissions Directorate",
      recipientAddress: "High Commission / Embassy / Immigration & Visa Authority\nStudent Visa Section",
      subject: "AFFIDAVIT OF FINANCIAL SPONSORSHIP & GUARANTEE FOR HIGHER EDUCATION (STUDENT: MR. CHHOTON ROY)",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **Mr. SUKUMAR ROY**, residing at A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249, solemnly affirm that I am the father and primary financial sponsor of **Mr. CHHOTON ROY** (Indian Passport No.: **C4450339**, Admission No.: **SUB24M124**), currently pursuing his **final-year Ph.D. at Sri Balaji University Pune (SBUP)**, Maharashtra, India.

I am the sole Proprietor of **M/s. AMRITA ENTERPRISES**, a compliant and thriving commercial establishment in West Bengal (GSTIN: **19COVPS4539H1Z0**, PAN: **COVPS4539H**). Through ongoing business operations, I possess substantial financial resources, steady cash flows, and unencumbered liquid assets to sponsor his academic pursuits.

I hereby formally guarantee:
1. **Academic Charges:** Timely payment of all educational registration, conference, and laboratory fees.
2. **Living & Accommodation:** Full funding for lodging, rent, meals, transportation, and health insurance.
3. **Emergency Contingencies:** Unconditional guarantee that he will never become a public charge, with funds readily remitted.

Copies of Form GST REG-06, 3 assessment years' Income Tax Returns, certified bank balance certificates, and University Bonafide Certificate are enclosed. I respectfully request you to kindly approve his visa application.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "gst-declaration",
    name: "4. GST Registration & Statutory Business Credentials Declaration",
    data: {
      referenceNo: "AE/GST/2026/041",
      date: "14/10/2026",
      recipientName: "To Whomsoever It May Concern",
      recipientAddress: "Official Verification / Banking / Consular Authority",
      subject: "STATUTORY DECLARATION OF GST REGISTRATION DETAILS & BUSINESS PROFILE (M/S AMRITA ENTERPRISES)",
      salutation: "Dear Sir/Madam,",
      bodyText: `This is to certify the official Goods & Services Tax (GST) registration credentials and operating commercial profile of **M/s. AMRITA ENTERPRISES**, registered under the Goods and Services Tax Act, Government of India:

### 1. Business Particulars & Legal Status
| Parameter | Details | Parameter | Details |
|---|---|---|---|
| **Trade Name** | **AMRITA ENTERPRISES** | **Legal Name** | **SUKUMAR ROY** |
| **GSTIN / UIN** | **19COVPS4539H1Z0** | **Constitution** | **Proprietorship** |
| **Status** | **Active (Regular Taxpayer)** | **Reg. Date** | **29/12/2017** |
| **Aadhaar Auth** | **Yes (Verified 20/05/2022)** | **PAN** | **COVPS4539H** |

### 2. Principal Place of Business & Tax Jurisdiction
- **Principal Address:** A1/100, SRI KRISHNA MARKET, HARINGHATA, Nadia, West Bengal - 741249
- **Center Jurisdiction:** CBIC Kolkata Zone, Kolkata-North Commissionerate, Kalyani-Nadia Division, Range-III
- **State Jurisdiction:** West Bengal Commissionerate, Baharampur Circle, Krishnanagar Charge

### 3. Dealing in Goods (HSN Codes)
| HSN | Description of Commodities / Goods |
|---|---|
| **6109** | T-Shirts, singlets and other vests, knitted or crocheted |
| **6403** | Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of leather |
| **8471** | Automatic data processing machines and units thereof, magnetic or optical readers |
| **8523** | Discs, tapes, solid-state non-volatile storage devices, smart cards and other media |

We confirm that the above particulars are true, authentic, and extracted from the Goods and Services Tax Network (GSTN), Government of India.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "quotation",
    name: "5. Commercial Quotation / Supply Estimate",
    data: {
      referenceNo: "AE/QTN/2026/184",
      date: "14/10/2026",
      recipientName: "The Purchase Officer / Managing Director",
      recipientAddress: "Institutional Buyers & Enterprise Clients\nKolkata / Nadia, West Bengal",
      subject: "Commercial Quotation for Supply of Corporate Apparels, Safety Footwear & IT Hardware Storage",
      salutation: "Dear Sir/Madam,",
      bodyText: `We are pleased to submit our most competitive rates for the supply of high-grade knitted apparels, industrial footwear, and IT hardware storage units as detailed below:

| # | HSN | Item Description & Specifications | Qty | Rate (₹) | Total (₹) |
|---|---|---|---|---|---|
| 1 | 6109 | Premium Bio-Washed Cotton Crew-Neck T-Shirts | 250 pcs | 340.00 | 85,000.00 |
| 2 | 6403 | Executive Leather Footwear (Anti-Skid Soles) | 60 pairs | 1,850.00 | 1,11,000.00 |
| 3 | 8471 | Data Processing Desktop Units (i5, 16GB, 512GB) | 6 units | 38,500.00 | 2,31,000.00 |
| 4 | 8523 | External Solid-State Storage (1TB NVMe SSD) | 15 units | 5,200.00 | 78,000.00 |
| | | **Total Taxable Value** | | | **₹5,05,000.00** |
| | | **Total GST (CGST 9% + SGST 9%)** | | | **₹90,900.00** |
| | | **Grand Total (Inclusive of 18% GST)** | | | **₹5,95,900.00** |

**Amount in Words:** Five Lakh Ninety-Five Thousand Nine Hundred Rupees Only.

**Commercial Terms:**  
1. **Validity:** 30 days from date hereof.  
2. **Delivery:** Within 7–10 business days from PO receipt.  
3. **Payment:** 30% advance with PO, 70% upon delivery & inspection.  
4. **Warranty:** 1-Year Comprehensive Replacement Warranty on IT storage hardware.

We look forward to receiving your valued Purchase Order.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "tax-invoice",
    name: "6. Official Tax Invoice (GST Regular Taxpayer)",
    data: {
      referenceNo: "AE/INV/2026/0892",
      date: "14/10/2026",
      recipientName: "M/s. Eastern Tech Solutions & Logistics Pvt. Ltd.",
      recipientAddress: "Plot No. B-42, Kalyani Industrial Estate, Nadia, West Bengal - 741235\nGSTIN: 19AABCE1234F1Z6 | State Code: 19",
      subject: "TAX INVOICE (ORIGINAL FOR RECIPIENT)",
      salutation: "",
      bodyText: `**Place of Supply:** West Bengal (19) | **Reverse Charge:** No | **Mode:** Roadways

| # | HSN | Description of Goods | Qty | Rate (₹) | Taxable (₹) | GST 18% (₹) | Total (₹) |
|---|---|---|---|---|---|---|---|
| 1 | 6109 | Uniform T-Shirts Knitted | 120 | 360.00 | 43,200.00 | 7,776.00 | 50,976.00 |
| 2 | 6403 | Leather Safety Shoes | 40 | 1,750.00 | 70,000.00 | 12,600.00 | 82,600.00 |
| 3 | 8471 | Data Processing Units | 4 | 36,000.00 | 1,44,000.00 | 25,920.00 | 1,69,920.00 |
| 4 | 8523 | Solid-State Media (1TB) | 10 | 4,800.00 | 48,000.00 | 8,640.00 | 56,640.00 |
| | | **Total** | | | **₹3,05,200.00** | **₹54,936.00** | **₹3,60,136.00** |

**Total in Words:** Three Lakh Sixty Thousand One Hundred and Thirty-Six Rupees Only.

**Bank Remittance Details:**  
- **Bank:** State Bank of India, Haringhata Branch | **A/C Name:** AMRITA ENTERPRISES  
- **A/C No:** 38290100045231 | **IFSC:** SBIN0008542 | **GSTIN:** 19COVPS4539H1Z0

**Declaration:** We declare that this invoice shows the actual price of the goods and all particulars are true and correct.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "delivery-challan",
    name: "7. Material Delivery Challan / Dispatch Note",
    data: {
      referenceNo: "AE/DC/2026/0315",
      date: "14/10/2026",
      recipientName: "Warehouse Supervisor / Site In-Charge",
      recipientAddress: "Distribution Center, National Highway 34\nBarasat, North 24 Parganas, West Bengal - 700124",
      subject: "DELIVERY CHALLAN / MATERIAL DISPATCH NOTE",
      salutation: "",
      bodyText: `**Dispatched From:** A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249  
**Vehicle Number:** WB-25-D-8421 | **Driver Contact:** M. Mondal (+91 97321 XXXXX)

| # | HSN | Material Description | Unit / Pkg | Qty Dispatched | Remarks |
|---|---|---|---|---|---|
| 1 | 6109 | Cotton T-Shirts & Vests (Assorted M, L, XL) | 5 Cartons | 250 Pcs | Inspected & Poly-Packed |
| 2 | 6403 | Leather Upper Footwear (Sizes 7, 8, 9, 10) | 6 Boxes | 60 Pairs | Standard Factory Box |
| 3 | 8471 | Automated Computing Units (CPUs + Monitors) | 6 Cartons | 6 Sets | Sealed Manufacturer Box |
| 4 | 8523 | External Solid-State Storage Media (1TB SSDs) | 1 Box | 15 Units | Tamper-Evident Seal |

**Consignment Weight:** Approx. 142.50 Kgs | **Packages:** 18 Packages

**Receiver's Acknowledgment:** Received the above goods in sound condition and sealed packaging.  
*Receiver's Signature & Date:* _______________________ | *Company Stamp:* _______________________`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "visa-cover-letter",
    name: "8. Visa Application Cover Letter & Financial Undertaking (Proprietor)",
    data: {
      referenceNo: "AE/VISA/2026/11",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer",
      recipientAddress: "The Embassy / Consulate General\nVisa Section, New Delhi / Kolkata, India",
      subject: "COVERING LETTER & FINANCIAL GUARANTEE UNDERTAKING FOR VISA APPLICATION (PROPRIETOR)",
      salutation: "Respected Sir/Madam,",
      bodyText: `I, **SUKUMAR ROY**, an Indian citizen holding Passport No. **P8492015**, respectfully submit this cover letter and financial guarantee statement in support of my Visa application.

I am the sole Proprietor and registered owner of **M/s. AMRITA ENTERPRISES**, a legally established, active, and compliant commercial enterprise based at A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249. My firm has been operational with Goods & Services Tax registration (GSTIN: **19COVPS4539H1Z0**, PAN: **COVPS4539H**) since December 2017.

### Professional & Financial Profile:
- **Trade Name:** AMRITA ENTERPRISES | **Proprietor:** SUKUMAR ROY
- **GSTIN:** 19COVPS4539H1Z0 (Regular Taxpayer, Active Status)
- **Principal Business Address:** A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249

Supporting documents enclosed: Form GST REG-06 Registration Certificate, Income Tax Returns (ITR-V) for the last three assessment years, bank statements demonstrating sufficient liquid balances, and trade license credentials.

I undertake full, unconditional financial responsibility for all travel expenses, accommodation, boarding, and medical insurance. I have deep commercial ties in West Bengal, India, and will return immediately upon conclusion of my travel. I kindly request you to grant me the visa.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
  {
    id: "bank-reference",
    name: "9. Banking Authority & Trade Credit Verification Certificate",
    data: {
      referenceNo: "AE/BNK/2026/028",
      date: "14/10/2026",
      recipientName: "The Branch Manager / Credit Officer",
      recipientAddress: "Commercial Banking & Credit Operations\nState Bank of India / Scheduled Commercial Bank",
      subject: "Declaration of Commercial Standing, Operating Profile & GST Compliance",
      salutation: "Dear Sir/Madam,",
      bodyText: `This letter confirms that **M/s. AMRITA ENTERPRISES** is an actively operating commercial proprietorship enterprise owned by **Mr. SUKUMAR ROY**, operating from A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249.

### Key Registration & Compliance Metrics:
1. **Tax Registration:** GSTIN **19COVPS4539H1Z0** (CBIC Kolkata-North Kalyani Division / WB Baharampur Krishnanagar).
2. **Compliance Record:** Regular Taxpayer with timely GSTR-1 and GSTR-3B monthly filings and nil liabilities.
3. **Core Operating Sectors:** Knitted garments (HSN 6109), leather footwear (HSN 6403), computing machines (HSN 8471), and digital storage memory media (HSN 8523).
4. **Authorized Signatory:** Mr. Sukumar Roy is the sole proprietor authorized to operate all banking transactions and commercial contracts.

This certificate is issued at the request of banking authorities for trade credit evaluation and official commercial records.

Thanking you.`,
      signatoryName: "SUKUMAR ROY",
      signatoryTitle: "Proprietor",
      signatoryFirm: "AMRITA ENTERPRISES",
    },
  },
];

export default function AmritaEnterprisesLetterheadGenerator() {
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('preview');
  const [headerStyle, setHeaderStyle] = useState<'centered' | 'boxed' | 'modern'>('centered');
  const [selectedFont, setSelectedFont] = useState<string>(fontOptions[0].value);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templateOptions[0].id);
  const [colorTheme, setColorTheme] = useState<'navy_gold' | 'emerald_gold' | 'burgundy' | 'slate'>('navy_gold');
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [bodyFontSize, setBodyFontSize] = useState<string>('10pt');
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [isExportingPng, setIsExportingPng] = useState<boolean>(false);

  const [headerData, setHeaderData] = useState({
    firmName: 'AMRITA ENTERPRISES',
    tagline: 'DEALERS & SERVICE PROVIDERS IN KNITTED APPARELS, FOOTWEAR & IT STORAGE MEDIA',
    proprietor: 'SUKUMAR ROY',
    gstin: '19COVPS4539H1Z0',
    hsnCode: 'HSN: 6109, 6403, 8471, 8523',
    regType: 'REGULAR TAXPAYER (PROPRIETORSHIP) • ESTD 2017',
    address: 'A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249',
    phone: '+91 94340 18293 / +91 98321 44589',
    email: 'amritaenterprises.haringhata@gmail.com',
    pan: 'COVPS4539H',
    jurisdictionCenter: 'CBIC Kolkata-North (Kalyani-Nadia Division)',
    jurisdictionState: 'West Bengal (Baharampur Circle)',
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

      const sheetEl = document.getElementById('amrita-letterhead-sheet');
      if (!sheetEl) throw new Error('Letterhead sheet element not found');

      // High-resolution capture at natural aspect ratio (no windowWidth override)
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
      // Calculate height maintaining true aspect ratio without vertical or horizontal squeeze
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      if (imgHeight <= pdfHeight) {
        // Natural fit on 1 page with zero distortion
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight, undefined, 'FAST');
      } else {
        // Uniform proportional scale down so that nothing is squished
        const ratio = pdfHeight / imgHeight;
        const finalWidth = pdfWidth * ratio;
        const finalHeight = pdfHeight;
        const xOffset = (pdfWidth - finalWidth) / 2;
        pdf.addImage(imgData, 'JPEG', xOffset, 0, finalWidth, finalHeight, undefined, 'FAST');
      }

      const cleanRef = (formData.referenceNo || 'Letterhead').replace(/[^a-zA-Z0-9_-]/g, '_');
      pdf.save(`Amrita_Enterprises_${cleanRef}.pdf`);
      toast.success('Official 1-Page Letterhead PDF exported successfully!');
    } catch (err) {
      console.error('PDF export error:', err);
      toast.error('Direct PDF export encountered an issue. Opening browser print dialog.');
      handlePrint();
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleDownloadPng = async () => {
    try {
      setIsExportingPng(true);
      setActiveTab('preview');
      await new Promise((resolve) => setTimeout(resolve, 200));

      const sheetEl = document.getElementById('amrita-letterhead-sheet');
      if (!sheetEl) throw new Error('Letterhead sheet element not found');

      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const link = document.createElement('a');
      const cleanRef = (formData.referenceNo || 'Letterhead').replace(/[^a-zA-Z0-9_-]/g, '_');
      link.download = `Amrita_Enterprises_${cleanRef}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('High-resolution PNG image downloaded!');
    } catch (err) {
      console.error('PNG export error:', err);
      toast.error('Failed to export image.');
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

  // High-contrast, prestigious corporate theme palettes
  const themes = {
    navy_gold: {
      primary: '#0a1d3d',
      secondary: '#b3820a',
      darkText: '#0a0f1d',
      subText: '#1f2937',
      rulePrimary: '#0a1d3d',
      ruleSecondary: '#c59b27',
      bgLight: '#f4f7fc',
      borderSoft: '#cbd5e1',
    },
    emerald_gold: {
      primary: '#083324',
      secondary: '#c59b27',
      darkText: '#061c14',
      subText: '#1e293b',
      rulePrimary: '#083324',
      ruleSecondary: '#d4af37',
      bgLight: '#f2f8f5',
      borderSoft: '#cbd5e1',
    },
    burgundy: {
      primary: '#4c0d1c',
      secondary: '#b3820a',
      darkText: '#2b0710',
      subText: '#1f2937',
      rulePrimary: '#4c0d1c',
      ruleSecondary: '#c59b27',
      bgLight: '#faf3f4',
      borderSoft: '#cbd5e1',
    },
    slate: {
      primary: '#0f172a',
      secondary: '#475569',
      darkText: '#020617',
      subText: '#1e293b',
      rulePrimary: '#0f172a',
      ruleSecondary: '#64748b',
      bgLight: '#f8fafc',
      borderSoft: '#cbd5e1',
    },
  };

  const currentTheme = themes[colorTheme];

  const inputCls = "w-full text-xs p-2 border rounded-md border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white text-slate-900 transition-colors";
  const labelCls = "block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans print:!bg-white print:!min-h-0 print:!h-auto print:!block">
      {/* Top Navbar */}
      <header
        id="app-top-nav"
        className="print:hidden bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-30 shadow-xs flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Link
            to="/amrita-enterprises"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-blue-900" /> Amrita Hub
          </Link>
          <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />
          <div>
            <h1 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-900" />
              <span>AMRITA ENTERPRISES</span>
              <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 hidden md:inline">
                GSTIN: 19COVPS4539H1Z0
              </span>
            </h1>
            <p className="text-[11px] text-slate-600 font-semibold">Official Executive Letterhead & Sponsorship Document Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Tab Switcher */}
          <div className="flex md:hidden bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1 text-xs font-bold rounded-md ${activeTab === 'form' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
            >
              Edit Form
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-bold rounded-md ${activeTab === 'preview' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
            >
              Preview
            </button>
          </div>

          <Link
            to="/amrita-enterprises/gst"
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-2 rounded-lg transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Form GST REG-06
          </Link>

          {/* Primary Action: Download PDF directly */}
          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 active:scale-95 px-4 py-2 rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-75 disabled:cursor-wait"
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
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 px-3 py-2 rounded-lg border border-slate-300 transition-all cursor-pointer disabled:opacity-75"
            title="Download high-resolution image"
          >
            {isExportingPng ? (
              <Loader2 className="w-4 h-4 animate-spin text-slate-600" />
            ) : (
              <Image className="w-4 h-4 text-slate-600" />
            )}
            <span>Image</span>
          </button>

          {/* Fallback Action: Print / Browser PDF Dialog */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 active:scale-95 px-3 py-2 rounded-lg border border-slate-300 shadow-2xs transition-all cursor-pointer"
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
          className={`print:hidden w-full md:w-[420px] lg:w-[450px] bg-white border-r border-slate-200 flex flex-col shrink-0 h-[calc(100vh-57px)] overflow-y-auto ${activeTab === 'preview' ? 'hidden md:flex' : 'flex'
            }`}
        >
          <div className="p-4 space-y-5">
            {/* Template Selector Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 p-4 rounded-xl border border-blue-200 shadow-2xs space-y-2">
              <label className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-800" />
                Select Letter / Sponsorship Template
              </label>
              <select
                value={selectedTemplateId}
                onChange={handleTemplateChange}
                className="w-full text-xs font-bold p-2.5 bg-white border border-blue-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
              >
                {templateOptions.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-600 font-medium">
                Includes verified sponsorship letters for <strong>CHHOTON ROY</strong> and statutory GST profile declarations.
              </p>
            </div>

            {/* Styling & Typography Controls */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Settings2 className="w-4 h-4 text-blue-900" /> Executive Letterhead Styling
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Header Style</label>
                  <select
                    value={headerStyle}
                    onChange={(e) => setHeaderStyle(e.target.value as any)}
                    className={inputCls}
                  >
                    <option value="centered">★ Official Corporate Crest</option>
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
                    <option value="navy_gold">Royal Navy & Gold</option>
                    <option value="emerald_gold">Forest Emerald & Gold</option>
                    <option value="burgundy">Burgundy & Gold</option>
                    <option value="slate">Executive Charcoal Slate</option>
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
                    className={`${inputCls} font-bold text-blue-950`}
                  >
                    <option value="9.5pt">9.5pt (Compact - For Dense Letters)</option>
                    <option value="10pt">10.0pt (Standard Executive - Recommended)</option>
                    <option value="10.5pt">10.5pt (Large & Dignified)</option>
                    <option value="11pt">11.0pt (Spacious)</option>
                  </select>
                </div>
              </div>

              {/* Header Logo Controls */}
              <div className="pt-2 border-t border-slate-200">
                <label className="flex items-center justify-center gap-1.5 cursor-pointer bg-white hover:bg-slate-50 p-2.5 rounded-md border border-slate-200 text-xs font-bold text-blue-900 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-blue-700" />
                  <span>Upload Header Logo (Optional)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>

                {customLogoUrl && (
                  <div className="mt-2 flex items-center justify-between text-xs bg-blue-50 text-blue-900 p-2 rounded border border-blue-200">
                    <span>Using custom logo image</span>
                    <button
                      onClick={() => setCustomLogoUrl(null)}
                      className="text-red-700 hover:underline font-bold text-[11px]"
                    >
                      Reset Logo
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Firm Header Metadata */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-900" /> Firm Header Details
              </h3>

              <div>
                <label className={labelCls}>Firm Trade Name</label>
                <input
                  type="text"
                  name="firmName"
                  value={headerData.firmName}
                  onChange={handleHeaderChange}
                  className={`${inputCls} font-bold text-slate-900`}
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
                  <label className={labelCls}>Proprietor</label>
                  <input
                    type="text"
                    name="proprietor"
                    value={headerData.proprietor}
                    onChange={handleHeaderChange}
                    className={`${inputCls} font-bold`}
                  />
                </div>
                <div>
                  <label className={labelCls}>GSTIN</label>
                  <input
                    type="text"
                    name="gstin"
                    value={headerData.gstin}
                    onChange={handleHeaderChange}
                    className={`${inputCls} font-mono font-bold text-blue-950`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>HSN Codes Summary</label>
                  <input
                    type="text"
                    name="hsnCode"
                    value={headerData.hsnCode}
                    onChange={handleHeaderChange}
                    className={inputCls}
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
                <label className={labelCls}>Registered Office Address</label>
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
                  <label className={labelCls}>Contact Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={headerData.phone}
                    onChange={handleHeaderChange}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Official Email</label>
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

            {/* Letter Content Form */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-900" /> Letter Contents
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Reference Number</label>
                  <input
                    type="text"
                    name="referenceNo"
                    value={formData.referenceNo}
                    onChange={handleFormChange}
                    className={`${inputCls} font-bold`}
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
            <div className="space-y-3 pt-3 border-t border-slate-200 pb-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-900" /> Signatory Details
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
          className={`flex-1 bg-slate-300/80 p-4 md:p-8 flex justify-center items-start overflow-y-auto print:!flex print:!p-0 print:!m-0 print:!overflow-visible print:!bg-white print:!w-full print:!static ${activeTab === 'form' ? 'hidden md:flex' : 'flex'
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
                  #amrita-letterhead-sheet,
                  #amrita-letterhead-sheet * {
                    visibility: visible;
                  }
                  #amrita-letterhead-sheet {
                    position: absolute !important;
                    left: 0 !important;
                    top: 0 !important;
                    width: 210mm !important;
                    min-height: 297mm !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    padding: 12mm 16mm 12mm 16mm !important;
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
            id="amrita-letterhead-sheet"
            className="print-letterhead-container bg-white shadow-2xl mx-auto flex flex-col justify-between relative print:!shadow-none print:!border-none"
            style={{
              width: '210mm',
              minHeight: '297mm',
              fontFamily: selectedFont,
              padding: '10mm 15mm 10mm 15mm',
              boxSizing: 'border-box',
              color: '#000000',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Ultra-subtle Watermark in Background */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
              style={{ opacity: 0.035 }}
            >
              <AmritaLogo size={340} />
            </div>

            {/* Top Letterhead Header Block */}
            <div className="letterhead-header-block w-full relative z-10">
              {/* Style 1: Centered Corporate Crest (Default & Recommended) */}
              {headerStyle === 'centered' && (
                <div className="pb-2.5 mb-2.5 relative">
                  <div className="flex items-center gap-4">
                    {/* Logo: Vector Emblem or Custom Upload */}
                    <div className="shrink-0 flex items-center justify-center">
                      {customLogoUrl ? (
                        <img
                          src={customLogoUrl}
                          alt="Amrita Enterprises Logo"
                          className="w-20 h-20 object-contain"
                        />
                      ) : (
                        <AmritaLogo size={80} />
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
                        className="text-[10px] font-bold tracking-[0.14em] uppercase mt-1"
                        style={{ color: currentTheme.secondary }}
                      >
                        {headerData.tagline}
                      </p>

                      <div className="text-[10px] font-semibold text-slate-900 leading-snug mt-1">
                        <span className="font-bold text-black">Principal Place:</span> {headerData.address}
                      </div>

                      <div className="text-[9.5px] font-semibold text-slate-800 mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                        <span><strong>T:</strong> {headerData.phone}</span>
                        <span className="text-slate-400">•</span>
                        <span><strong>E:</strong> {headerData.email}</span>
                        <span className="text-slate-400">•</span>
                        <span><strong>Proprietor:</strong> {headerData.proprietor}</span>
                        <span className="text-slate-400">•</span>
                        <span>GSTIN: <strong>{headerData.gstin}</strong></span>
                        <span className="text-slate-400">•</span>
                        <span>PAN: <strong>{headerData.pan}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Tone Executive Bottom Border */}
                  <div className="mt-3.5 mb-4 relative">
                    <div className="h-[2.5px] w-full" style={{ backgroundColor: currentTheme.rulePrimary }} />
                    <div className="h-[1.5px] w-full mt-[1px]" style={{ backgroundColor: currentTheme.ruleSecondary }} />
                  </div>
                </div>
              )}

              {/* Style 2: Boxed Traditional Legal / Government Contractor Banner */}
              {headerStyle === 'boxed' && (
                <div
                  className="p-3 mb-2.5 rounded-lg border-2 relative"
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
                      STATE: <strong>WEST BENGAL (19)</strong> | PAN: <strong>{headerData.pan}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0">
                      {customLogoUrl ? (
                        <img src={customLogoUrl} alt="Logo" className="w-16 h-16 object-contain" />
                      ) : (
                        <AmritaLogo size={68} />
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <h1
                        className="text-[24px] font-black uppercase tracking-tight leading-none"
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
                <div className="pb-2 mb-2.5 border-b-2 relative" style={{ borderColor: currentTheme.rulePrimary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3.5">
                      {customLogoUrl ? (
                        <img src={customLogoUrl} alt="Logo" className="w-16 h-16 object-contain" />
                      ) : (
                        <AmritaLogo size={68} />
                      )}
                      <div>
                        <h1
                          className="text-[25px] font-black tracking-tight leading-none uppercase"
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
                className="flex justify-between items-center text-[10pt] font-bold mb-4 text-slate-950"
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
                  className="text-[10pt] leading-normal mb-4 text-slate-950 font-medium"
                  style={{ fontFamily: selectedFont }}
                >
                  <div className="text-slate-800 text-[9.5pt] uppercase font-bold tracking-wider mb-1">To,</div>
                  <div className="font-bold text-black text-[10.5pt]">{formData.recipientName}</div>
                  <div className="whitespace-pre-line text-slate-900 text-[10pt]">{formData.recipientAddress}</div>
                </div>
              )}

              {/* Subject Banner */}
              {formData.subject && (
                <div
                  className="p-2.5 px-3.5 my-4 rounded-md border-l-4 font-bold text-[10pt] leading-snug shadow-2xs"
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
                  className="text-[10pt] font-bold text-slate-950 mb-3"
                  style={{ fontFamily: selectedFont }}
                >
                  {formData.salutation}
                </div>
              )}
            </div>

            {/* Letter Body Content */}
            <div
              className="letterhead-body-block relative z-10 flex-1 w-full text-[#0a0a0a] text-justify mb-4 space-y-3.5
              [&_h3]:text-[11pt] [&_h3]:font-black [&_h3]:mt-2.5 [&_h3]:mb-1 [&_h3]:text-black
              [&_p]:mb-3.5 [&_p:last-child]:mb-0
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-2.5 [&_table]:text-[8.5pt] [&_table]:text-black
              [&_th]:border [&_th]:border-slate-400 [&_th]:bg-slate-100 [&_th]:p-1.5 [&_th]:font-black [&_th]:text-black [&_th]:text-left
              [&_td]:border [&_td]:border-slate-300 [&_td]:p-1.5 [&_td]:text-black
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-1.5 [&_li]:mb-0.5
              [&_hr]:border-slate-300 [&_hr]:my-2.5
              [&_strong]:font-black [&_strong]:text-black"
              style={{
                fontFamily: selectedFont,
                fontSize: bodyFontSize,
                lineHeight: 1.65,
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {formData.bodyText || ''}
              </ReactMarkdown>
            </div>

            {/* Signatory Section & Bottom Page Footer */}
            <div className="letterhead-footer-block w-full mt-auto relative z-10 pt-1.5">
              {/* Signature Block */}
              <div className="flex justify-between items-end mb-2.5">
                <div className="text-[8.5pt] text-slate-700 font-medium max-w-[280px] leading-tight">
                  {/* Space for additional memo or seal if needed */}
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
                  <div className="h-[85px] w-44" />

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
                  <span className="text-slate-400">•</span>
                  <span>{headerData.hsnCode}</span>
                  <span className="text-slate-400">•</span>
                  <span>PAN: {headerData.pan}</span>
                </div>

                <div className="text-[8pt] text-slate-800 font-semibold">
                  A1/100, Sri Krishna Market, Haringhata, Nadia, West Bengal - 741249
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
