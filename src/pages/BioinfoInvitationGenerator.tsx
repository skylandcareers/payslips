import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Printer, FileText, User, Calendar, MapPin, Mail, ArrowLeft, RotateCcw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface BioinfoInvitationData {
  letterDate: string;
  recipientName: string;
  eventName: string;
  eventDates: string;
  venue: string;
  organizers: string;
  role: string;
  secretariatEmail: string;
  secGenName: string;
  secGenTitle: string;
  programChairName: string;
  programChairTitle: string;
}

export const defaultBioinfoInvitationData: BioinfoInvitationData = {
  letterDate: "23 September, 2026",
  recipientName: "Dr. ARUNKUMAR RAJALINGAM",
  eventName: "BIOINFO/GIW ISCB-Asia 2026",
  eventDates: "November 17 – 20, 2026",
  venue: "Centennial Hall, Yonsei University, Seoul, Korea",
  organizers: "BIOINFO/GIW ISCB-Asia 2026 committee",
  role: "Presenting Author",
  secretariatEmail: "info-pre@ceed.kr",
  secGenName: "Sangwoo Kim",
  secGenTitle: "Secretary General\nBIOINFO/GIW ISCB-Asia",
  programChairName: "Joon-Yong An",
  programChairTitle: "Program Chair\nBIOINFO/GIW ISCB-Asia"
};

export default function BioinfoInvitationGenerator() {
  const [formData, setFormData] = useState<BioinfoInvitationData>(defaultBioinfoInvitationData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Reset invitation letter to default official template?")) {
      setFormData(defaultBioinfoInvitationData);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col print:bg-white text-slate-900">
      {/* Header Bar */}
      <header className="print:hidden bg-white border-b border-slate-200 px-6 py-3.5 shadow-sm sticky top-0 z-30">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                BIOINFO/GIW ISCB-Asia 2026 Invitation Letter
              </h1>
              <p className="text-xs text-slate-500 font-medium">Conference Visa Invitation Letter • Seoul, South Korea</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleReset} variant="outline" size="sm" className="text-xs flex items-center gap-1.5 text-slate-600 hover:text-slate-900">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </Button>
            <Button onClick={handlePrint} size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold text-xs shadow-sm">
              <Printer className="mr-2 h-4 w-4" />
              Print Invitation Letter
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full">
        {/* Editor Sidebar */}
        <div className="print:hidden w-full lg:w-[440px] bg-white border-r border-slate-200 flex flex-col z-10 shadow-sm relative">
          <div className="p-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
            <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" /> Invitation Letter Editor
            </h2>
            <p className="text-xs text-slate-500">Customize attendee and conference details in real time.</p>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 pb-20 text-xs">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Recipient & Date
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Letter Date</Label>
                    <Input name="letterDate" value={formData.letterDate} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Addressee Name</Label>
                    <Input name="recipientName" value={formData.recipientName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-semibold" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Role in Conference</Label>
                    <Input name="role" value={formData.role} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 text-emerald-700 font-semibold" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Conference Event Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Event Title</Label>
                    <Input name="eventName" value={formData.eventName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Conference Dates</Label>
                    <Input name="eventDates" value={formData.eventDates} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Venue</Label>
                    <Input name="venue" value={formData.venue} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Organizers</Label>
                    <Input name="organizers" value={formData.organizers} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Secretariat Email</Label>
                    <Input name="secretariatEmail" value={formData.secretariatEmail} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Signatories
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Secretary General</Label>
                      <Input name="secGenName" value={formData.secGenName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-semibold" />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Program Chair</Label>
                      <Input name="programChairName" value={formData.programChairName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-semibold" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>

        {/* Document Preview (A4 Dimensions) */}
        <div className="flex-1 overflow-auto bg-slate-200 print:bg-white p-8 print:p-0 flex justify-center items-start">
          <div
            id="print-invitation"
            className="bg-white text-slate-900 shadow-2xl print:shadow-none relative flex flex-col justify-between"
            style={{
              width: "793.33px",
              minHeight: "1122.67px",
              height: "1122.67px",
              boxSizing: "border-box",
              padding: "48px 56px 40px 56px",
              fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            }}
          >
            {/* Top Banner Box */}
            <div>
              <div
                style={{
                  border: "2px solid #2563eb",
                  borderRadius: "2px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "32px",
                  background: "#ffffff"
                }}
              >
                {/* Left Logo Globe */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      border: "2px solid #1d4ed8",
                      background: "radial-gradient(circle at 30% 30%, #60a5fa, #1d4ed8)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: "0 2px 6px rgba(29,78,216,0.3)"
                    }}
                  >
                    <div style={{ fontSize: "7.5px", fontWeight: 800, letterSpacing: "0.5px" }}>BIOINFO</div>
                    <div style={{ fontSize: "6.5px", fontWeight: 700 }}>GIW</div>
                    <div style={{ fontSize: "5.5px", fontWeight: 700 }}>ISCB-Asia</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "19px", fontWeight: 900, color: "#1e40af", letterSpacing: "-0.3px", lineHeight: 1.1 }}>
                      BIOINFO/GIW ISCB-Asia 2026
                    </div>
                  </div>
                </div>

                {/* Right Header Text */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#1e3a8a" }}>
                    BIOINFO/GIW ISCB-Asia 2026, Seoul, Korea
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e3a8a", marginTop: "2px" }}>
                    {formData.eventDates}
                  </div>
                </div>
              </div>

              {/* Date */}
              <div style={{ textAlign: "right", fontSize: "13px", color: "#059669", fontWeight: 600, marginBottom: "28px" }}>
                {formData.letterDate}
              </div>

              {/* Salutation */}
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", marginBottom: "18px" }}>
                Dear {formData.recipientName}
              </div>

              {/* Paragraph 1 */}
              <div style={{ fontSize: "13.2px", lineHeight: 1.65, color: "#1e293b", textAlign: "justify", marginBottom: "16px" }}>
                We are pleased to invite you to participate in the upcoming <strong>{formData.eventName}</strong>. The conference features keynote talks by preeminent scientists in AI biology, presentations of groundbreaking research in computational biology by a lineup of distinguished speakers, and poster sessions on the latest research progress.
              </div>

              {/* Paragraph 2 */}
              <div style={{ fontSize: "13.2px", lineHeight: 1.65, color: "#1e293b", textAlign: "justify", marginBottom: "22px" }}>
                As an esteemed participant, your presence is greatly valued and will contribute to the exchange of knowledge while fostering a mutually beneficial experience for all involved.
              </div>

              {/* Details Header */}
              <div style={{ fontSize: "13.2px", lineHeight: 1.65, color: "#1e293b", marginBottom: "14px" }}>
                The conference hereby confirms the following details to assist you in obtaining your visa:
              </div>

              {/* Details List */}
              <div style={{ marginLeft: "48px", marginBottom: "24px", fontSize: "13.2px", lineHeight: 2 }}>
                <div style={{ display: "flex" }}>
                  <span style={{ width: "160px", fontWeight: 700, color: "#0f172a" }}>Event:</span>
                  <span style={{ color: "#1e293b" }}>{formData.eventName}</span>
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ width: "160px", fontWeight: 700, color: "#0f172a" }}>Date:</span>
                  <span style={{ color: "#1e293b" }}>{formData.eventDates}</span>
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ width: "160px", fontWeight: 700, color: "#0f172a" }}>Venue:</span>
                  <span style={{ color: "#1e293b" }}>{formData.venue}</span>
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ width: "160px", fontWeight: 700, color: "#0f172a" }}>Organizers:</span>
                  <span style={{ color: "#1e293b" }}>{formData.organizers}</span>
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ width: "160px", fontWeight: 700, color: "#0f172a" }}>Role in conference:</span>
                  <span style={{ color: "#059669", fontWeight: 700 }}>{formData.role}</span>
                </div>
              </div>

              {/* Inquiries */}
              <div style={{ fontSize: "13.2px", lineHeight: 1.65, color: "#1e293b", textAlign: "justify", marginBottom: "22px" }}>
                Should you have any inquiries or require assistance, please feel free to contact the {formData.eventName} secretariat at <span style={{ color: "#2563eb", fontWeight: 600 }}>{formData.secretariatEmail}</span>
              </div>

              {/* Signoff */}
              <div style={{ fontSize: "13.5px", color: "#0f172a", marginBottom: "32px" }}>
                Sincerely,
              </div>

              {/* Signatures & Seal Area */}
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "10px" }}>
                {/* Secretary General */}
                <div style={{ textAlign: "left", width: "230px" }}>
                  <div style={{ height: "45px", display: "flex", alignItems: "flex-end", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "cursive", fontSize: "24px", color: "#1e293b", fontStyle: "italic" }}>
                      Sangwookim
                    </span>
                  </div>
                  <div style={{ borderTop: "1px dashed #94a3b8", paddingTop: "6px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#0f172a" }}>{formData.secGenName}</div>
                    <div style={{ fontSize: "11.5px", color: "#475569" }}>Secretary General</div>
                    <div style={{ fontSize: "11.5px", color: "#475569" }}>BIOINFO/GIW ISCB-Asia</div>
                  </div>
                </div>

                {/* Korean Red Seal / Stamp */}
                <div style={{ textAlign: "center", marginBottom: "8px" }}>
                  <div
                    style={{
                      border: "3px solid #dc2626",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      display: "inline-block",
                      background: "rgba(254, 226, 226, 0.2)",
                      boxShadow: "0 0 2px rgba(220, 38, 38, 0.4)"
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 900, color: "#dc2626", letterSpacing: "1.5px", lineHeight: 1.2 }}>
                      韓國生命情報
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 900, color: "#dc2626", letterSpacing: "1.5px", lineHeight: 1.2 }}>
                      學會長之印
                    </div>
                  </div>
                </div>

                {/* Program Chair */}
                <div style={{ textAlign: "left", width: "230px" }}>
                  <div style={{ height: "45px", display: "flex", alignItems: "flex-end", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "cursive", fontSize: "26px", color: "#1e293b", fontStyle: "italic" }}>
                      Joon-Yong An
                    </span>
                  </div>
                  <div style={{ borderTop: "1px dashed #94a3b8", paddingTop: "6px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#0f172a" }}>{formData.programChairName}</div>
                    <div style={{ fontSize: "11.5px", color: "#475569" }}>Program Chair</div>
                    <div style={{ fontSize: "11.5px", color: "#475569" }}>BIOINFO/GIW ISCB-Asia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div
              style={{
                borderTop: "1.5px solid #cbd5e1",
                paddingTop: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11.5px",
                color: "#475569"
              }}
            >
              {/* KSBI Logo & Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3b82f6" }}></div>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6366f1" }}></div>
                </div>
                <div>
                  <span style={{ fontWeight: 800, color: "#1e293b", marginRight: "4px" }}>KSBI</span>
                  <span style={{ fontWeight: 600 }}>한국생명정보학회</span>
                  <div style={{ fontSize: "9.5px", color: "#64748b" }}>Korean Society for Bioinformatics</div>
                </div>
              </div>

              {/* Secretariat Info */}
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700, color: "#0f172a" }}>Secretariat of the BIOINFO/GIW ISCB-Asia 2026</div>
                <div>E-mail: <span style={{ color: "#2563eb" }}>{formData.secretariatEmail}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
