import { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { Download, Settings2, Printer, Loader2, Sparkles, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export interface BalajiFormData {
  instituteName: string;
  documentTitle: string;
  referenceNo: string;
  date: string;
  recipientName: string;
  subject: string;
  salutation: string;
  bodyText: string;
  signatoryName: string;
  signatoryDesignation: string;
  receiptStudentName?: string;
  receiptAdmissionNo?: string;
  receiptCourse?: string;
  receiptFatherName?: string;
  receiptHostelRoom?: string;
  receiptCampus?: string;
  receiptAcademicYear?: string;
  receiptTotalAmount?: string;
  receiptAmountInWords?: string;
  receiptPaymentMode?: string;
}

export interface BalajiTemplate {
  id: string;
  name: string;
  shortName: string;
  data: BalajiFormData;
}

export const sriBalajiTemplates: BalajiTemplate[] = [
  {
    id: "sbup-noc-leave-chhoton",
    name: "1. NOC & Leave Letter (Chhoton Roy - APIEMS 2026, Busan, South Korea)",
    shortName: "NOC & Leave Letter",
    data: {
      instituteName: "",
      documentTitle: "NO OBJECTION CERTIFICATE (NOC) & DUTY LEAVE SANCTION LETTER",
      referenceNo: "SBUP/SOM/NOC-LV/2026/104",
      date: "14/10/2026",
      recipientName: "The Visa Consular Officer\nConsulate General of the Republic of Korea\nMumbai, India",
      subject: "No Objection Certificate (NOC) and Leave Approval for International Conference Attendance in Busan, South Korea (APIEMS 2026)",
      salutation: "Respected Sir/Madam,",
      bodyText: `This is to certify that **Mr. CHHOTON ROY**, bearing Admission No. (Student ID): **SUB24M124** and Indian Passport No.: **C4450339**, is a bonafide regular **Ph.D. Scholar** pursuing **Ph.D. in Management** at the **School of Management, Sri Balaji University, Pune (SBUP)**.

The University has **No Objection (NOC)** to his travel to South Korea to attend and present his research at the **26th Asia-Pacific Industrial Engineering and Management Systems Conference (APIEMS 2026)**, organized by the **Korean Institute of Industrial Engineers (KIIE)** at **Busan Port International Exhibition & Convention Center (BPEX)**, Busan, Republic of Korea, scheduled from **29th November, 2026 to 2nd December, 2026** (EasyChair Registration Receipt No.: **641661278**).

He has been granted **Leave** for the period from **27th November, 2026 to 10th December, 2026**. His participation is purely academic and will not affect his Ph.D. programme. He is expected to resume his doctoral research at Sri Balaji University upon completion of the conference.

This certificate is issued at the request of the scholar for visa and official purposes.`,
      signatoryName: "",
      signatoryDesignation: "Registrar / Dean / Director – Research\nSchool of Management, Sri Balaji University, Pune (SBUP)\nCampus: Survey No. 55/2-7, Tathawade, Pune – 411033",
    },
  },
  {
    id: "sbup-bonafide-hostel-chhoton",
    name: "2. Bonafide Certificate with Campus Hostel Accommodation (Chhoton Roy)",
    shortName: "Bonafide Certificate",
    data: {
      instituteName: "",
      documentTitle: "BONAFIDE CERTIFICATE",
      referenceNo: "SBUP/SOM/REG/2026/118",
      date: "14/10/2026",
      recipientName: "To Whomsoever It May Concern",
      subject: "Bonafide Ph.D. Research Scholar Status (Ph.D. in Management) and On-Campus Hostel Residence Confirmation",
      salutation: "To Whom It May Concern,",
      bodyText: `This is to certify that **Mr. CHHOTON ROY** (Son of Mr. Sukumar Roy), Date of Birth: **20/01/1992**, bearing Admission No. (Student ID): **SUB24M124** and Indian Passport No.: **C4450339**, is a bonafide regular **Ph.D. Scholar** pursuing **Ph.D. in Management** at the **School of Management, Sri Balaji University, Pune (SBUP)**.

He is a regular full-time research scholar of the University and is currently in the **3rd year** of his doctoral program during the academic year **2026–2027**.

The student is provided **hostel accommodation within the University campus** (Research Scholars Hostel Block 'B', Room 304, Tathawade Campus, Pune – 411033), and his stay is officially recognized and permitted by the University for the duration of his Ph.D. program.

This bonafide certificate is issued upon his request for official purposes, including international conference participation (APIEMS 2026, Busan, South Korea), accommodation confirmation, visa processing, and other academic requirements.`,
      signatoryName: "",
      signatoryDesignation: "Registrar / Dean / Director – Research\nSchool of Management, Sri Balaji University, Pune (SBUP)\nCampus: Survey No. 55/2-7, Tathawade, Pune – 411033",
    },
  },
  {
    id: "sbup-hostel-receipt-chhoton",
    name: "3. Official Hostel Fee Receipt ₹1,05,000 (Chhoton Roy - Student Copy)",
    shortName: "Hostel Fee Receipt",
    data: {
      instituteName: "",
      documentTitle: "HOSTEL FEE RECEIPT (STUDENT COPY)",
      referenceNo: "SBUP/HOSTEL/2026-2027/2589",
      date: "June 12, 2026",
      recipientName: "CHHOTON ROY",
      subject: "Hostel Fee Receipt - Academic Year 2026–2027",
      salutation: "",
      bodyText: `1 | University Hostel Accommodation Fee (Annual AY 2026–2027) | 85,000.00
2 | Hostel Amenities, Maintenance & Electricity Charges | 15,000.00
3 | Hostel Security & Caution Deposit (Refundable) | 5,000.00`,
      signatoryName: "(Cashier / Accounts Officer)",
      signatoryDesignation: "Finance & Accounts Section\nSri Balaji University, Pune\nCampus: Survey No. 55/2-7, Tathawade, Pune – 411033",
      receiptStudentName: "CHHOTON ROY",
      receiptAdmissionNo: "SUB24M124",
      receiptCourse: "Ph.D. in Management (School of Management)",
      receiptFatherName: "SUKUMAR ROY",
      receiptHostelRoom: "Research Scholars Hostel Block 'B', Room 304",
      receiptCampus: "Tathawade Campus, Pune – 411033",
      receiptAcademicYear: "2026 – 2027",
      receiptTotalAmount: "1,05,000.00",
      receiptAmountInWords: "Rupees One Lakh Five Thousand Only",
      receiptPaymentMode: "Online NEFT Transfer (UTR Ref: SBUP-HOS-2026-948102)",
    },
  },
  {
    id: "sbup-sanction-letter-chhoton",
    name: "4. Duty Leave & Financial Sanction Letter ₹2,10,000 (Chhoton Roy - APIEMS 2026)",
    shortName: "Sanction Letter",
    data: {
      instituteName: "",
      documentTitle: "SANCTION LETTER - DUTY LEAVE & FINANCIAL ASSISTANCE",
      referenceNo: "SBUP/SOM/EVEN&CONF/2026/135",
      date: "14/10/2026",
      recipientName: "Mr. CHHOTON ROY\nPh.D. Scholar (Ph.D. in Management)\nSchool of Management, Sri Balaji University, Pune (SBUP)\nAdmission No. (Student ID): SUB24M124\nAddress: UTTARPARA, TENTIA, KOTWALI, NADIA – 741102, West Bengal",
      subject: "Financial Sanction and Leave Approval for APIEMS 2026 in Busan, South Korea",
      salutation: "Dear Mr. Chhoton Roy,",
      bodyText: `This is to certify that **Mr. CHHOTON ROY**, holding Admission No. (Student ID): **SUB24M124** and Indian Passport No.: **C4450339**, is a bonafide **Ph.D. Scholar** pursuing **Ph.D. in Management** at the **School of Management, Sri Balaji University, Pune (SBUP)**.

The University hereby sanctions a financial assistance of **₹2,10,000/- (Rupees Two Lakhs Ten Thousand Only)** in favor of **Mr. CHHOTON ROY** to support his academic travel, conference registration (EasyChair Receipt No.: **641661278**), and living expenses for attending the **26th Asia-Pacific Industrial Engineering and Management Systems Conference (APIEMS 2026)** at **BPEX, Busan, South Korea**, scheduled from **29th November, 2026 to 2nd December, 2026**.

He has been granted official **Leave** from **27th November, 2026 to 10th December, 2026** and is required to return and resume his doctoral studies at Sri Balaji University upon completion of the event.

The University has no objection to his participation in the above academic event. This letter is issued at his request for visa and other official purposes.`,
      signatoryName: "",
      signatoryDesignation: "Registrar / Dean / Director – Research\nSchool of Management, Sri Balaji University, Pune (SBUP)\nCampus: Survey No. 55/2-7, Tathawade, Pune – 411033",
    },
  },
  {
    id: "sbup-hostel-confirmation-chhoton",
    name: "5. Hostel Residence Confirmation Letter (Chhoton Roy - Tathawade Campus)",
    shortName: "Hostel Confirmation Letter",
    data: {
      instituteName: "",
      documentTitle: "HOSTEL RESIDENCE & ACCOMMODATION CONFIRMATION LETTER",
      referenceNo: "SBUP/HOSTEL/CONF/2026/894",
      date: "14/10/2026",
      recipientName: "To Whomsoever It May Concern",
      subject: "Confirmation of On-Campus University Hostel Residence for Mr. CHHOTON ROY (Admission No: SUB24M124)",
      salutation: "To Whom It May Concern,",
      bodyText: `This is to certify and officially confirm that **Mr. CHHOTON ROY** (Son of Mr. Sukumar Roy), Date of Birth: **20/01/1992**, holding Admission No. (Student ID): **SUB24M124** and Indian Passport No.: **C4450339**, is a bonafide regular **Ph.D. Research Scholar** at the **School of Management, Sri Balaji University, Pune (SBUP)**.

He has been officially allotted and is actively residing in the University On-Campus Hostel accommodation with details as under:

• **Hostel Block:** Research Scholars Hostel Block 'B'  
• **Room Number:** Room No. 304 (Single Occupancy)  
• **Campus Address:** Sri Balaji University Campus, Survey No. 55/2-7, Off Mumbai-Bangalore Bypass, Tathawade, Pune – 411033, Maharashtra, India  
• **Allotment Period:** Academic Year 2024–2025 to 2026–2027 (Current Academic Year: 2026–2027)  
• **Hostel Fee Status:** Paid & Cleared (Annual Hostel Fee of ₹1,05,000/- remitted vide Official Receipt No.: **SBUP/HOSTEL/2026-2027/2589**)

Mr. Chhoton Roy bears good moral character, adheres to all University hostel rules and disciplinary guidelines, and maintains an active residential presence on campus.

This certificate is issued upon his request as authentic verification of his local residential address in Pune, India for official purposes, including visa application, overseas conference travel (APIEMS 2026, Busan, South Korea), and academic verification.`,
      signatoryName: "Col. (Retd.) Arun Kumar",
      signatoryDesignation: "Chief Warden / Hostel Administrator\nHostel Administration & Student Affairs\nSri Balaji University, Pune (SBUP)\nCampus: Survey No. 55/2-7, Tathawade, Pune – 411033",
    },
  },
];


// Replicated SBUP Center Banner with Exact Alignment:
// 1. "Sri Balaji University, Pune" is sized (34px) and 100% CENTER-ALIGNED with safe margins (never touches circles).
// 2. Yellow border starts under 'S' and ends at letter 'j'.
// 3. 'UNIVERSITY FOR OPPORTUNITIES' starts after border and ends at letter 'y' in University.
const SbupCenterBanner = ({
  showFounderLine = true,
  showMottoPill = true,
  titleFontSize = "34px",
  titleFontFamily = "'Arial Rounded MT Bold', 'Arial Rounded Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}: {
  showFounderLine?: boolean;
  showMottoPill?: boolean;
  titleFontSize?: string;
  titleFontFamily?: string;
}) => {
  const textRef = useRef<SVGTextElement>(null);
  const span1Ref = useRef<SVGTSpanElement>(null);
  const span2Ref = useRef<SVGTSpanElement>(null);
  const span3Ref = useRef<SVGTSpanElement>(null);
  const span4Ref = useRef<SVGTSpanElement>(null);

  const [coords, setCoords] = useState({
    yellowX: 40,
    yellowWidth: 108,
    tagX: 165,
    tagWidth: 142,
  });

  const updateMeasurements = () => {
    if (textRef.current && span1Ref.current && span2Ref.current && span3Ref.current) {
      try {
        const totalW = textRef.current.getComputedTextLength();
        const l1 = span1Ref.current.getComputedTextLength();
        const l2 = span2Ref.current.getComputedTextLength();
        const l3 = span3Ref.current.getComputedTextLength();

        if (totalW > 50 && l1 > 10 && l3 > 20) {
          const xStart = 235 - totalW / 2;
          const yellowX = xStart;
          const yellowWidth = Math.max(20, l1 - 4);
          const tagX = xStart + l1 + l2 + 3;
          // Tagline spans under 'i Universit' (stops cleanly before 'y' descender, 100% zero overlap)
          const tagWidth = Math.max(30, l3 - 6);

          setCoords({
            yellowX,
            yellowWidth,
            tagX,
            tagWidth,
          });
        }
      } catch (err) {
        // Fallback safely
      }
    }
  };

  useLayoutEffect(() => {
    updateMeasurements();
    const timer = setTimeout(updateMeasurements, 80);
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateMeasurements);
    }
    return () => clearTimeout(timer);
  }, [titleFontSize, titleFontFamily]);

  const svgHeight = showMottoPill ? (showFounderLine ? 138 : 112) : showFounderLine ? 98 : 72;

  return (
    <svg
      width="470"
      height={svgHeight}
      viewBox={`0 0 470 ${svgHeight}`}
      className="w-full max-w-[470px] h-auto overflow-hidden select-none"
    >
      {/* Line 1: Sri Balaji Society's (Center Aligned) */}
      <text
        x="235"
        y="16"
        textAnchor="middle"
        fill="#2b3990"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="12px"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        Sri Balaji Society&apos;s
      </text>

      {/* Main Brand Title & Dynamic Sub-elements (Center Aligned) */}
      <g>
        {/* Main Title: Bolder Crimson Red (34px) with guaranteed vertical clearance for descenders */}
        <text
          ref={textRef}
          x="235"
          y="40"
          textAnchor="middle"
          fill="#af2321"
          fontFamily={titleFontFamily}
          fontSize={titleFontSize}
          fontWeight="900"
          letterSpacing="-0.025em"
        >
          <tspan ref={span1Ref}>Sri Bala</tspan>
          <tspan ref={span2Ref}>j</tspan>
          <tspan ref={span3Ref}>i Universit</tspan>
          <tspan ref={span4Ref}>y</tspan>
          <tspan>, Pune</tspan>
        </text>

        {/* Yellow Border: starts under 'S' of Sri and ends cleanly before letter 'j' of Balaji */}
        <rect
          x={coords.yellowX}
          y="55"
          width={coords.yellowWidth}
          height="4.5"
          fill="#ffcd01"
          rx="1"
        />

        {/* Tagline: UNIVERSITY FOR OPPORTUNITIES */}
        {/* Starts right after letter 'j' (under 'i'), and ends strictly BEFORE letter 'y' with ZERO vertical/horizontal overlap */}
        <text
          x={coords.tagX}
          y="61.5"
          fill="#af2321"
          fontFamily={titleFontFamily}
          fontSize="7.8px"
          fontWeight="900"
          textLength={coords.tagWidth}
          lengthAdjust="spacingAndGlyphs"
        >
          UNIVERSITY FOR OPPORTUNITIES
        </text>
      </g>

      {/* Line 4: Founder President & Chancellor (Center Aligned) */}
      {showFounderLine && (
        <text
          x="235"
          y="91"
          textAnchor="middle"
          fill="#2b3990"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="10.8px"
          fontStyle="italic"
          fontWeight="600"
        >
          Founder President &amp; Chancellor &bull; Late Prof. Dr. (Col) A. Balasubramanian
        </text>
      )}

      {/* Line 5: Motto Pill (Center Aligned) */}
      {showMottoPill && (
        <g transform={`translate(118, ${showFounderLine ? 110 : 80})`}>
          <rect
            x="0.6"
            y="0.6"
            width="232.8"
            height="18.8"
            rx="4"
            fill="#ffffff"
            stroke="#283548"
            strokeWidth="1.15"
          />
          <text
            x="117"
            y="10.5"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#0f172a"
            fontFamily="Georgia, 'Times New Roman', Times, serif"
            fontSize="9.5px"
            fontWeight="bold"
          >
            • Discipline   • Dedication   • Determination
          </text>
        </g>
      )}
    </svg>
  );
};

const SriBalajiLetterheadGenerator = () => {
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isExportingPng, setIsExportingPng] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "preview">("preview");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(sriBalajiTemplates[0].id);

  // Formatting & Display Controls for Guaranteed 1-Page Fit
  const [bannerStyle, setBannerStyle] = useState<"official" | "svg">("official");
  const [circleSize, setCircleSize] = useState<"large" | "xlarge" | "standard">("large");
  const [titleFontFamily, setTitleFontFamily] = useState<string>("'Arial Rounded MT Bold', 'Arial Rounded Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
  const [titleFontSize, setTitleFontSize] = useState<string>("34px");
  const [bodyFontSize, setBodyFontSize] = useState<string>("10pt");
  const [lineSpacing, setLineSpacing] = useState<"tight" | "normal" | "relaxed">("normal");
  const [showFounderLine, setShowFounderLine] = useState(true);
  const [showMottoPill, setShowMottoPill] = useState(true);
  const [signatureGap, setSignatureGap] = useState<number>(85);

  const sheetRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<BalajiFormData>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get("data");
      if (dataParam) {
        return JSON.parse(decodeURIComponent(dataParam));
      }
    } catch (e) {
      console.error("Failed to parse URL form data", e);
    }
    return sriBalajiTemplates[0].data;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApplyTemplate = (templateId: string) => {
    const tpl = sriBalajiTemplates.find((t) => t.id === templateId);
    if (tpl) {
      setSelectedTemplateId(templateId);
      setFormData(tpl.data);
      toast.success(`Applied template: ${tpl.name}`);
    }
  };

  // Dynamic Emblem and Banner Metrics (Unified [Logo + Text] Single Block, Center-Aligned)
  const getCircleMetrics = () => {
    switch (circleSize) {
      case "xlarge":
        return {
          emblemWidth: 144,
          emblemHeight: 104,
          bannerMaxWidth: 460,
          gap: 16,
        };
      case "standard":
        return {
          emblemWidth: 118,
          emblemHeight: 85,
          bannerMaxWidth: 420,
          gap: 12,
        };
      case "large":
      default:
        return {
          emblemWidth: 132,
          emblemHeight: 95,
          bannerMaxWidth: 440,
          gap: 14,
        };
    }
  };

  // High-Resolution Direct PDF Export with Zero Layout Shifting
  const handleExportPDF = async () => {
    try {
      setIsExportingPdf(true);
      setActiveTab("preview");
      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise((resolve) => setTimeout(resolve, 300));

      const sheetEl = document.getElementById("sri-balaji-letterhead-sheet");
      if (!sheetEl) throw new Error("Letterhead sheet element not found");

      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          const el = clonedDoc.getElementById("sri-balaji-letterhead-sheet");
          if (el) {
            el.style.margin = "0";
            el.style.boxShadow = "none";
            el.style.transform = "none";
          }
        },
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Pin cleanly to 297mm if within 6mm to ensure perfect 1-page fit without squashing
      const finalHeight = Math.abs(imgHeight - 297) < 6 ? 297 : imgHeight;
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, finalHeight, undefined, "FAST");

      const cleanRef = (formData.referenceNo || "Letterhead").replace(/[^a-zA-Z0-9_-]/g, "_");
      pdf.save(`Sri_Balaji_University_${cleanRef}.pdf`);
      toast.success("Official Sri Balaji University Letterhead PDF exported successfully!");
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Direct PDF export had an issue, opening print dialog as fallback.");
      window.print();
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleExportPNG = async () => {
    try {
      setIsExportingPng(true);
      setActiveTab("preview");
      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise((resolve) => setTimeout(resolve, 300));

      const sheetEl = document.getElementById("sri-balaji-letterhead-sheet");
      if (!sheetEl) throw new Error("Letterhead sheet element not found");

      const canvas = await html2canvas(sheetEl, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          const el = clonedDoc.getElementById("sri-balaji-letterhead-sheet");
          if (el) {
            el.style.margin = "0";
            el.style.boxShadow = "none";
            el.style.transform = "none";
          }
        },
      });

      const link = document.createElement("a");
      const cleanRef = (formData.referenceNo || "Letterhead").replace(/[^a-zA-Z0-9_-]/g, "_");
      link.download = `Sri_Balaji_University_${cleanRef}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("High-resolution PNG image downloaded!");
    } catch (err) {
      console.error("PNG export error:", err);
      toast.error("Failed to export PNG image.");
    } finally {
      setIsExportingPng(false);
    }
  };

  const getLineHeightClass = () => {
    if (lineSpacing === "tight") return "leading-[1.38]";
    if (lineSpacing === "relaxed") return "leading-[1.58]";
    return "leading-[1.44]";
  };

  const getReceiptItems = () => {
    const raw = formData.bodyText || "";
    const lines = raw
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0 && !l.startsWith("|-") && !l.toLowerCase().includes("particulars"));

    const items: Array<{ sNo: string; particulars: string; amount: string }> = [];
    lines.forEach((line, idx) => {
      const cleaned = line.replace(/^\|/, "").replace(/\|$/, "");
      const parts = cleaned.split("|").map((p) => p.trim().replace(/\*\*/g, ""));
      if (parts.length >= 3) {
        items.push({ sNo: parts[0] || `${idx + 1}`, particulars: parts[1], amount: parts[2] });
      } else if (parts.length === 2) {
        items.push({ sNo: `${idx + 1}`, particulars: parts[0], amount: parts[1] });
      } else if (
        line.trim().length > 0 &&
        !line.toLowerCase().includes("amt. in words") &&
        !line.toLowerCase().includes("total amount")
      ) {
        items.push({ sNo: `${idx + 1}`, particulars: line, amount: "" });
      }
    });

    if (items.length === 0) {
      return [
        { sNo: "1", particulars: "University Hostel Accommodation Fee (Annual AY 2026–2027)", amount: "85,000.00" },
        { sNo: "2", particulars: "Hostel Amenities, Maintenance & Electricity Charges", amount: "15,000.00" },
        { sNo: "3", particulars: "Hostel Security & Caution Deposit (Refundable)", amount: "5,000.00" },
      ];
    }
    return items;
  };

  // Replicated Official Sri Balaji University Header Banner with HTML Table (Unified [Logo + Text] Block, Center-Aligned)
  const PageHeader = () => {
    const metrics = getCircleMetrics();
    return (
      <div className="w-full relative select-none">
        {/* Single Center-Aligned Table Block containing Left Emblem and Text Block */}
        <table
          style={{
            margin: "0 auto 3px auto",
            borderCollapse: "collapse",
            border: "none",
            padding: 0,
          }}
        >
          <tbody>
            <tr>
              {/* Left: Official Sri Balaji University Emblem */}
              <td
                style={{
                  verticalAlign: "middle",
                  textAlign: "right",
                  padding: `0 ${metrics.gap}px 0 0`,
                }}
              >
                <img
                  src="/sri-balaji-emblem.png"
                  alt="Sri Balaji University Emblem"
                  style={{
                    width: `${metrics.emblemWidth}px`,
                    height: "auto",
                    maxHeight: `${metrics.emblemHeight}px`,
                    display: "block",
                  }}
                />
              </td>

              {/* Text Block: Official Authentic Graphic Banner OR Calibrated SVG Typography */}
              <td
                style={{
                  verticalAlign: "middle",
                  textAlign: "center",
                  padding: 0,
                }}
              >
                {bannerStyle === "official" ? (
                  <div className="flex flex-col items-center justify-center select-none text-center">
                    <img
                      src="/sbup-official-banner.png"
                      alt="Sri Balaji University, Pune Official Banner"
                      style={{
                        width: "100%",
                        maxWidth: `${metrics.bannerMaxWidth}px`,
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    {showFounderLine && (
                      <p
                        style={{
                          textAlign: "center",
                          color: "#2b3990",
                          fontFamily: "Georgia, 'Times New Roman', Times, serif",
                          fontWeight: 600,
                          fontStyle: "italic",
                          fontSize: "10.5px",
                          lineHeight: "1.3",
                          marginTop: "4px",
                          marginBottom: "1px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Founder President &amp; Chancellor &bull; Late Prof. Dr. (Col) A. Balasubramanian
                      </p>
                    )}
                    {showMottoPill && (
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: "10px",
                          marginBottom: "5px",
                          lineHeight: 0,
                        }}
                      >
                        <svg
                          width="234"
                          height="20"
                          viewBox="0 0 234 20"
                          style={{ display: "inline-block", verticalAlign: "middle" }}
                        >
                          <rect
                            x="0.6"
                            y="0.6"
                            width="232.8"
                            height="18.8"
                            rx="4"
                            fill="#ffffff"
                            stroke="#283548"
                            strokeWidth="1.15"
                          />
                          <text
                            x="117"
                            y="10.5"
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="#0f172a"
                            fontFamily="Georgia, 'Times New Roman', Times, serif"
                            fontSize="9.5px"
                            fontWeight="bold"
                          >
                            • Discipline   • Dedication   • Determination
                          </text>
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <SbupCenterBanner
                    showFounderLine={showFounderLine}
                    showMottoPill={showMottoPill}
                    titleFontSize={titleFontSize}
                    titleFontFamily={titleFontFamily}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Campus Address & Contact Bar */}
        <div className="w-full text-center mt-0.5 pb-1 text-[9px] font-sans text-slate-700 leading-tight">
          <p>
            Survey No. 55/2-7, Tathawade, Off Mumbai-Bangalore Bypass, Pune – 411033, Maharashtra, India
          </p>
          <p className="mt-0.5 text-slate-600">
            Tel: +91 (020) 6674 1235 / 1223 &bull; Email: info@sbup.edu.in / admissions@sbup.edu.in &bull; Web:{" "}
            <span className="text-[#af2321] font-semibold">www.sbup.edu.in</span>
          </p>
        </div>

        {/* Distinct Dual Maroon & Gold Dividing Line */}
        <div className="w-full flex flex-col gap-[2px] mt-1 mb-4">
          <div className="w-full h-[2.5px] bg-[#af2321]"></div>
          <div className="w-full h-[1.5px] bg-[#ffcd01]"></div>
        </div>
      </div>
    );
  };

  const PageFooter = () => (
    <div className="w-full relative bg-transparent select-none">
      <div className="w-full flex flex-col gap-[2px] mb-2">
        <div className="w-full h-[1.5px] bg-[#ffcd01]"></div>
        <div className="w-full h-[2px] bg-[#af2321]"></div>
      </div>
      <div className="flex w-full items-center justify-between text-[8.5px] font-sans text-slate-600">
        <p>Survey No. 55/2-7, Tathawade, Pune – 411033</p>
        <p className="font-semibold text-[#af2321] tracking-wider uppercase">Sri Balaji University, Pune</p>
        <p className="font-medium">www.sbup.edu.in</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col print:bg-transparent print:text-black">
      <style>{`
        @media print { 
          @page { size: A4; margin: 0; } 
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: white !important; } 
          .no-print { display: none !important; } 
          .print-page { margin: 0 !important; box-shadow: none !important; position: relative; width: 210mm !important; min-height: 297mm !important; height: auto !important; page-break-after: always; overflow: visible; background: white !important; } 
        }
      `}</style>

      {/* Top Navigation Bar */}
      <div className="no-print flex flex-wrap items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
            ← Home
          </Link>
          <span className="text-slate-300">|</span>
          <span className="text-slate-800 font-bold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#af2321]" />
            Sri Balaji University, Pune Letterhead
          </span>
          <span className="hidden md:inline-flex text-[11px] font-medium bg-red-50 text-[#af2321] border border-red-200 px-2 py-0.5 rounded-full">
            Official Replicated Banner (Text + Vector)
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Settings2 className="w-3.5 h-3.5" /> {activeTab === "form" ? "Show Preview" : "Edit Form"}
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" /> Print
          </button>

          <button
            onClick={handleExportPNG}
            disabled={isExportingPng}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 hover:border-slate-400 bg-white text-slate-700 transition-colors flex items-center gap-1.5"
            title="Download high-resolution image"
          >
            {isExportingPng ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ImageIcon className="w-3.5 h-3.5" />}
            PNG Image
          </button>

          <button
            onClick={handleExportPDF}
            disabled={isExportingPdf}
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-sm hover:opacity-95 bg-[#af2321] disabled:opacity-60"
          >
            {isExportingPdf ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            {isExportingPdf ? "Generating PDF..." : "Download 1-Page PDF"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Form / Settings Panel */}
        {activeTab === "form" && (
          <div className="no-print w-full md:w-[460px] lg:w-[500px] bg-white overflow-y-auto p-5 border-r border-slate-200 flex-shrink-0 shadow-lg z-10">
            {/* Quick Template Selector */}
            <div className="mb-5 p-3.5 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl border border-red-100">
              <label className="text-xs font-bold text-[#af2321] uppercase tracking-wide flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#af2321]" /> Pre-Configured Templates
              </label>
              <select
                value={selectedTemplateId}
                onChange={(e) => handleApplyTemplate(e.target.value)}
                className="w-full p-2 text-xs font-medium border border-red-200 rounded-lg bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#af2321]"
              >
                {sriBalajiTemplates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <p className="text-[10px] text-slate-500 mt-1.5">
                Official documents for CHHOTON ROY (Passport: C4450339, Admission No: SUB24M124, APIEMS 2026 Busan, Korea): 1. NOC &amp; Leave Letter, 2. Bonafide Certificate, 3. Hostel Fee Receipt, 4. Sanction Letter, 5. Hostel Confirmation Letter.
              </p>
            </div>

            {/* Layout & Typography Controls */}
            <div className="mb-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                1-Page Layout &amp; Header Controls
              </div>

              {/* Banner Mode Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  University Header Banner Mode
                </label>
                <select
                  value={bannerStyle}
                  onChange={(e) => setBannerStyle(e.target.value as "official" | "svg")}
                  className="w-full p-2 text-xs border border-red-300 rounded-lg bg-red-50/60 font-bold text-[#af2321] focus:ring-2 focus:ring-[#af2321]"
                >
                  <option value="official">★ Official Brand Graphic (100% Authentic Match)</option>
                  <option value="svg">Dynamic SVG Typography (Custom Font &amp; Size)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  {bannerStyle === "official"
                    ? "Using 100% authentic crisp official banner artwork with zero circle overlap."
                    : "Editable SVG typography with dynamic font and baseline alignment."}
                </p>
              </div>

              {bannerStyle === "svg" && (
                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-200">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Header Font Type</label>
                    <select
                      value={titleFontFamily}
                      onChange={(e) => setTitleFontFamily(e.target.value)}
                      className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white font-medium text-slate-800"
                    >
                      <option value="'Arial Rounded MT Bold', 'Arial Rounded Bold', -apple-system, BlinkMacSystemFont, sans-serif">
                        Arial Rounded MT Bold (Official Match)
                      </option>
                      <option value="Arial, 'Helvetica Neue', Helvetica, sans-serif">
                        Arial / Helvetica Heavy
                      </option>
                      <option value="'Montserrat', sans-serif">
                        Montserrat (Geometric Black)
                      </option>
                      <option value="'Trebuchet MS', Arial, sans-serif">
                        Trebuchet MS Bold
                      </option>
                      <option value="Impact, sans-serif">
                        Impact Bold
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Header Title Size</label>
                    <select
                      value={titleFontSize}
                      onChange={(e) => setTitleFontSize(e.target.value)}
                      className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white font-medium"
                    >
                      <option value="32px">32px (Compact)</option>
                      <option value="34px">34px (Recommended - Safe Fit)</option>
                      <option value="36px">36px (Large)</option>
                      <option value="37.5px">37.5px (Max Safe - Fits Circles)</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Logo &amp; Circle Size</label>
                <select
                  value={circleSize}
                  onChange={(e) => setCircleSize(e.target.value as "large" | "xlarge" | "standard")}
                  className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white font-medium text-slate-800"
                >
                  <option value="large">Large (Recommended - Prominent ~94px, Tight Gap)</option>
                  <option value="xlarge">Extra Large (102px, Ultra-Tight Gap)</option>
                  <option value="standard">Standard (82px, Compact)</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Body Font Size</label>
                  <select
                    value={bodyFontSize}
                    onChange={(e) => setBodyFontSize(e.target.value)}
                    className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white"
                  >
                    <option value="9.5pt">9.5pt (Compact)</option>
                    <option value="10pt">10pt (Balanced)</option>
                    <option value="10.5pt">10.5pt (Standard 1-Page)</option>
                    <option value="11pt">11pt (Large)</option>
                    <option value="11.5pt">11.5pt (Expanded)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Line Spacing</label>
                  <select
                    value={lineSpacing}
                    onChange={(e) => setLineSpacing(e.target.value as any)}
                    className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white"
                  >
                    <option value="tight">Tight</option>
                    <option value="normal">Normal</option>
                    <option value="relaxed">Relaxed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Signature Gap</label>
                  <select
                    value={signatureGap}
                    onChange={(e) => setSignatureGap(Number(e.target.value))}
                    className="w-full p-1.5 text-xs border border-slate-300 rounded bg-white font-medium text-slate-800"
                  >
                    <option value={85}>85px (Recommended - Stamp &amp; Sign)</option>
                    <option value={100}>100px (Spacious)</option>
                    <option value={70}>70px (Standard)</option>
                    <option value={50}>50px (Compact)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFounderLine}
                    onChange={(e) => setShowFounderLine(e.target.checked)}
                    className="rounded text-[#af2321] focus:ring-[#af2321]"
                  />
                  <span>Founder Line</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMottoPill}
                    onChange={(e) => setShowMottoPill(e.target.checked)}
                    className="rounded text-[#af2321] focus:ring-[#af2321]"
                  />
                  <span>Motto Pill</span>
                </label>
              </div>
            </div>

            {/* Document Details Form */}
            <h2 className="text-sm font-bold mb-3 text-slate-800 uppercase tracking-wide">
              {formData.documentTitle?.toLowerCase().includes("receipt") ? "Receipt Voucher Fields" : "Document Fields"}
            </h2>
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {formData.documentTitle?.toLowerCase().includes("receipt") ? "Receipt No" : "Reference No"}
                  </label>
                  <input
                    className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                    name="referenceNo"
                    value={formData.referenceNo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                  <input
                    className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Document Title</label>
                <input
                  className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleChange}
                />
              </div>

              {formData.documentTitle?.toLowerCase().includes("receipt") ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Student Name</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptStudentName"
                        value={formData.receiptStudentName || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Admission No. (Student ID)</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptAdmissionNo"
                        value={formData.receiptAdmissionNo || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Course &amp; Dept</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptCourse"
                        value={formData.receiptCourse || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Father / Guardian</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptFatherName"
                        value={formData.receiptFatherName || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Hostel Residence</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptHostelRoom"
                        value={formData.receiptHostelRoom || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Academic Year</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptAcademicYear"
                        value={formData.receiptAcademicYear || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Fee Particulars (Line Items: Sr.No | Head | Amount)
                    </label>
                    <textarea
                      className="w-full p-2 text-xs font-mono border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321] min-h-[90px]"
                      name="bodyText"
                      value={formData.bodyText}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Total Amount (₹)</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptTotalAmount"
                        value={formData.receiptTotalAmount || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Payment Mode / UTR</label>
                      <input
                        className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                        name="receiptPaymentMode"
                        value={formData.receiptPaymentMode || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Amount in Words</label>
                    <input
                      className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                      name="receiptAmountInWords"
                      value={formData.receiptAmountInWords || ""}
                      onChange={handleChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Recipient Name / Address</label>
                    <textarea
                      className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321] min-h-[55px]"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <textarea
                      className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321] min-h-[45px]"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Salutation</label>
                    <input
                      className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Body Text (Supports Markdown **bold**)</label>
                    <textarea
                      className="w-full p-2 text-xs font-mono border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321] min-h-[220px]"
                      name="bodyText"
                      value={formData.bodyText}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Name</label>
                <input
                  className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321]"
                  name="signatoryName"
                  value={formData.signatoryName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Signatory Designation &amp; Dept</label>
                <textarea
                  className="w-full p-2 text-xs border border-slate-300 rounded focus:border-[#af2321] focus:ring-1 focus:ring-[#af2321] min-h-[70px]"
                  name="signatoryDesignation"
                  value={formData.signatoryDesignation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* Right Preview Panel */}
        <div
          className={`flex-1 overflow-y-auto bg-slate-200/80 flex flex-col items-center py-8 print:bg-white print:p-0 gap-6 print:gap-0 ${activeTab === "form" ? "hidden md:flex" : "flex"
            }`}
        >
          {/* Quick 1-Click Document Switcher Tabs */}
          <div className="no-print flex flex-wrap items-center justify-center gap-2 bg-white px-3 py-2 rounded-2xl shadow-md border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase px-2 tracking-wide">
              Official Documents:
            </span>
            {sriBalajiTemplates.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => handleApplyTemplate(t.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${selectedTemplateId === t.id
                  ? "bg-[#af2321] text-white shadow-sm ring-2 ring-[#af2321]/30"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
              >
                <span>{idx + 1}.</span> {t.shortName}
              </button>
            ))}
            <button
              onClick={() => setActiveTab(activeTab === "form" ? "preview" : "form")}
              className="ml-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 px-2.5 py-1.5 rounded-lg flex items-center gap-1 bg-slate-50"
            >
              <Settings2 className="w-3 h-3 text-[#af2321]" /> Edit Fields
            </button>
          </div>

          {/* Letterhead Paper Sheet */}
          <div
            id="sri-balaji-letterhead-sheet"
            ref={sheetRef}
            className="print-page bg-white shadow-2xl relative flex flex-col justify-between"
            style={{
              width: "210mm",
              minHeight: "297mm",
              boxSizing: "border-box",
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontSize: bodyFontSize,
              color: "#000",
              padding: "10mm 15mm 10mm 15mm",
            }}
          >
            {/* Top Header */}
            <div>
              <PageHeader />

              {formData.documentTitle?.toLowerCase().includes("receipt") ? (
                /* Dedicated Authentic University Hostel Fee Receipt Voucher */
                <div className="w-full">
                  {/* Receipt Voucher Title & Academic Year Badge */}
                  <div className="text-center my-3.5">
                    <h2 className="text-[13.5pt] font-bold uppercase tracking-wider underline underline-offset-4 font-serif">
                      {formData.documentTitle}
                    </h2>
                  </div>

                  {/* Structured 2-Column Info Card */}
                  <div
                    style={{
                      border: "1px solid #94a3b8",
                      borderRadius: "4px",
                      marginBottom: "14px",
                      fontSize: "9.5pt",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div style={{ display: "flex", borderBottom: "1px solid #cbd5e1" }}>
                      <div style={{ flex: 1, padding: "7px 12px", borderRight: "1px solid #cbd5e1", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Receipt Number
                        </span>
                        <span style={{ fontSize: "10pt", color: "#0f172a" }}>
                          <strong>{formData.referenceNo || "SBUP/HOSTEL/2026-2027/2589"}</strong>
                        </span>
                      </div>
                      <div style={{ flex: 1, padding: "7px 12px", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Receipt Date
                        </span>
                        <span style={{ fontSize: "10pt", color: "#0f172a" }}>
                          <strong>{formData.date || "June 12, 2026"}</strong>
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", borderBottom: "1px solid #cbd5e1" }}>
                      <div style={{ flex: 1, padding: "7px 12px", borderRight: "1px solid #cbd5e1", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Student Name
                        </span>
                        <span style={{ fontSize: "10pt", color: "#0f172a" }}>
                          <strong>{formData.receiptStudentName || "CHHOTON ROY"}</strong>
                        </span>
                      </div>
                      <div style={{ flex: 1, padding: "7px 12px", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Admission No. / Student ID
                        </span>
                        <span style={{ fontSize: "10pt", color: "#0f172a" }}>
                          <strong>{formData.receiptAdmissionNo || "SUB24M124"}</strong>
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", borderBottom: "1px solid #cbd5e1" }}>
                      <div style={{ flex: 1, padding: "7px 12px", borderRight: "1px solid #cbd5e1", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Course &amp; Department
                        </span>
                        <span style={{ fontSize: "9.5pt", color: "#0f172a" }}>
                          {formData.receiptCourse || "Ph.D. in Management (School of Management)"}
                        </span>
                      </div>
                      <div style={{ flex: 1, padding: "7px 12px", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Father / Guardian Name
                        </span>
                        <span style={{ fontSize: "9.5pt", color: "#0f172a" }}>
                          {formData.receiptFatherName || "SUKUMAR ROY"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1, padding: "7px 12px", borderRight: "1px solid #cbd5e1", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Hostel Residence
                        </span>
                        <span style={{ fontSize: "9.5pt", color: "#0f172a" }}>
                          {formData.receiptHostelRoom || "Research Scholars Hostel Block 'B', Room 304"}
                        </span>
                      </div>
                      <div style={{ flex: 1, padding: "7px 12px", lineHeight: 1.4 }}>
                        <span style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "8pt", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Campus Location
                        </span>
                        <span style={{ fontSize: "9.5pt", color: "#0f172a" }}>
                          {formData.receiptCampus || "Tathawade Campus, Pune – 411033"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fee Particulars & Breakdown Table (Div container with zero-slicing borders) */}
                  <div
                    style={{
                      border: "1px solid #94a3b8",
                      borderRadius: "4px",
                      marginBottom: "12px",
                      fontSize: "9.5pt",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "#f1f5f9",
                        borderBottom: "1px solid #94a3b8",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                        fontSize: "9pt",
                        color: "#1e293b",
                      }}
                    >
                      <div style={{ width: "10%", textAlign: "center", padding: "8px 6px", borderRight: "1px solid #cbd5e1" }}>Sr. No.</div>
                      <div style={{ width: "65%", padding: "8px 12px", borderRight: "1px solid #cbd5e1" }}>Particulars / Head of Account</div>
                      <div style={{ width: "25%", textAlign: "right", padding: "8px 12px" }}>Amount (INR)</div>
                    </div>
                    {getReceiptItems().map((item, idx) => (
                      <div key={idx} style={{ display: "flex", borderBottom: "1px solid #e2e8f0" }}>
                        <div style={{ width: "10%", textAlign: "center", padding: "8px 6px", borderRight: "1px solid #e2e8f0" }}>{item.sNo}</div>
                        <div style={{ width: "65%", padding: "8px 12px", borderRight: "1px solid #e2e8f0" }}>{item.particulars}</div>
                        <div style={{ width: "25%", textAlign: "right", padding: "8px 12px" }}>{item.amount}</div>
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "#f8fafc",
                        borderTop: "1.5px solid #94a3b8",
                        fontWeight: "bold",
                        fontSize: "10pt",
                      }}
                    >
                      <div style={{ width: "10%", borderRight: "1px solid #e2e8f0" }}></div>
                      <div style={{ width: "65%", padding: "9px 12px", borderRight: "1px solid #e2e8f0" }}>Total Amount Received</div>
                      <div style={{ width: "25%", textAlign: "right", padding: "9px 12px", color: "#af2321" }}>
                        &#8377; {formData.receiptTotalAmount || "1,05,000.00"}
                      </div>
                    </div>
                  </div>

                  {/* Amount in Words */}
                  <div
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px dashed #cbd5e1",
                      padding: "7px 12px",
                      borderRadius: "4px",
                      marginBottom: "12px",
                      fontSize: "9pt",
                      lineHeight: 1.4,
                    }}
                  >
                    <strong>Amount in Words:</strong> {formData.receiptAmountInWords || "Rupees One Lakh Five Thousand Only"}
                  </div>

                  {/* Payment Details */}
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      padding: "7px 12px",
                      marginBottom: "16px",
                      fontSize: "8.5pt",
                      fontFamily: "Arial, sans-serif",
                      color: "#475569",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div><strong>Payment Mode:</strong> {formData.receiptPaymentMode || "Online NEFT Transfer (UTR Ref: SBUP-HOS-2026-948102)"}</div>
                  </div>

                  {/* Signatures & Seal Block */}
                  <div style={{ justifyContent: "space-between", alignItems: "flex-end", marginTop: "14px", paddingTop: "6px" }}>
                    <div style={{ textAlign: "left", fontSize: "9.5pt" }}>
                      <div style={{ height: `${Math.max(45, signatureGap - 20)}px` }}></div>
                      {formData.signatoryName && <p style={{ margin: 0, fontWeight: "bold", fontSize: "10pt" }}>{formData.signatoryName}</p>}
                      {formData.signatoryDesignation &&
                        formData.signatoryDesignation.split("\n").map((line, i) => (
                          <p key={i} style={{ margin: "1px 0 0 0", fontSize: "8.5pt", color: "#334155", lineHeight: 1.3 }}>
                            {line}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Letter Layout */
                <div>
                  {/* Reference & Date Bar */}
                  {(formData.referenceNo || formData.date) && (
                    <div className="flex justify-between items-start mb-4 text-[10.5pt]">
                      <div>
                        {formData.referenceNo && (
                          <span>
                            <strong>Ref. No.:</strong> {formData.referenceNo}
                          </span>
                        )}
                      </div>
                      <div>
                        {formData.date && (
                          <span>
                            <strong>Date:</strong> {formData.date}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Document Title with Proper Breathing Room */}
                  {formData.documentTitle && (
                    <div className="text-center mt-3.5 mb-5">
                      <h2 className="text-[13pt] font-bold uppercase tracking-wider underline underline-offset-6 font-serif">
                        {formData.documentTitle}
                      </h2>
                    </div>
                  )}

                  {/* Recipient Details */}
                  {formData.recipientName && (
                    <div className="mb-3.5 leading-snug">
                      {!formData.recipientName.trim().startsWith("To") && (
                        <p className="font-semibold">To,</p>
                      )}
                      {formData.recipientName.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}

                  {/* Subject */}
                  {formData.subject && (
                    <div className="mb-3 leading-snug">
                      <p>
                        <strong>Subject:</strong> {formData.subject}
                      </p>
                    </div>
                  )}

                  {/* Salutation */}
                  {formData.salutation && (
                    <div className="mb-2.5">
                      <p>{formData.salutation}</p>
                    </div>
                  )}

                  {/* Letter Body Markdown */}
                  <div className={`mb-4 text-justify space-y-2.5 ${getLineHeightClass()}`}>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ node, ...props }) => <p {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        table: ({ node, ...props }) => (
                          <table
                            style={{
                              width: "100%",
                              margin: "14px 0",
                              borderCollapse: "collapse",
                              border: "1.2px solid #64748b",
                              fontSize: "10pt",
                            }}
                            {...props}
                          />
                        ),
                        thead: ({ node, ...props }) => (
                          <thead style={{ backgroundColor: "#f8fafc", fontWeight: "bold" }} {...props} />
                        ),
                        th: ({ node, ...props }) => (
                          <th
                            style={{
                              borderBottom: "1.5px solid #64748b",
                              borderRight: "1px solid #cbd5e1",
                              padding: "10px 14px",
                              textAlign: "left",
                              color: "#0f172a",
                              fontWeight: 700,
                              lineHeight: "1.5",
                            }}
                            {...props}
                          />
                        ),
                        td: ({ node, ...props }) => (
                          <td
                            style={{
                              borderBottom: "1px solid #cbd5e1",
                              borderRight: "1px solid #cbd5e1",
                              padding: "10px 14px",
                              color: "#1e293b",
                              lineHeight: "1.5",
                              verticalAlign: "middle",
                            }}
                            {...props}
                          />
                        ),
                      }}
                    >
                      {formData.bodyText}
                    </ReactMarkdown>
                  </div>

                  {/* Signatory Block */}
                  <div className="pt-1">
                    <p className="mb-0">Yours faithfully,</p>
                    {/* Clear vertical space for physical signature & official university seal */}
                    <div style={{ height: `${signatureGap}px` }} className="w-full select-none" />
                    {formData.signatoryName && <p className="font-bold mb-0.5">{formData.signatoryName}</p>}
                    {formData.signatoryDesignation &&
                      formData.signatoryDesignation.split("\n").map((line, i) => (
                        <p key={i} className="leading-snug text-[9.5pt] text-slate-800">
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer */}
            <div className="w-full pt-2">
              <PageFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SriBalajiLetterheadGenerator;
