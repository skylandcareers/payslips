import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Printer, FileText, User, Calendar, MapPin, Receipt, ArrowLeft, RotateCcw, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface BioinfoReceiptData {
  receiptNumber: string;
  conferenceTitle: string;
  venue: string;
  startDate: string;
  endDate: string;
  contactEmail: string;
  attendeeName: string;
  attendeeEmail: string;
  orderReference: string;
  orderDate: string;
  transactionId: string;
  paymentDate: string;
  titlePosition: string;
  organization: string;
  country: string;
  itemName: string;
  priceUSD: string;
  totalPaidUSD: string;
}

export const defaultBioinfoReceiptData: BioinfoReceiptData = {
  receiptNumber: "Receipt 23FAB/2",
  conferenceTitle: "BIOINFO/GIW ISCB-Asia",
  venue: "Yonsei University",
  startDate: "Nov 17, 2026",
  endDate: "Nov 20, 2026",
  contactEmail: "ksbi.office@gmail.com",
  attendeeName: "ARUNKUMAR RAJALINGAM",
  attendeeEmail: "arunkumarrajalingam@gmail.com",
  orderReference: "23FAB",
  orderDate: "Sep 22, 2026",
  transactionId: "CDCB03D9AE75",
  paymentDate: "Sep 22, 2026",
  titlePosition: "Student",
  organization: "WOXSEN UNIVERSITY",
  country: "India",
  itemName: "Non Members - Student (x1)",
  priceUSD: "$300.00",
  totalPaidUSD: "$300.00"
};

export default function BioinfoReceiptGenerator() {
  const [formData, setFormData] = useState<BioinfoReceiptData>(defaultBioinfoReceiptData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Reset receipt to default official template?")) {
      setFormData(defaultBioinfoReceiptData);
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
                <Receipt className="w-4 h-4 text-blue-600" />
                BIOINFO/GIW ISCB-Asia 2026 Conference Registration Receipt
              </h1>
              <p className="text-xs text-slate-500 font-medium">Official Payment Receipt ({formData.orderReference}) • $300.00 USD</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleReset} variant="outline" size="sm" className="text-xs flex items-center gap-1.5 text-slate-600 hover:text-slate-900">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </Button>
            <Button onClick={handlePrint} size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold text-xs shadow-sm">
              <Printer className="mr-2 h-4 w-4" />
              Print Receipt
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full">
        {/* Editor Sidebar */}
        <div className="print:hidden w-full lg:w-[440px] bg-white border-r border-slate-200 flex flex-col z-10 shadow-sm relative">
          <div className="p-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
            <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-blue-600" /> Receipt Data Editor
            </h2>
            <p className="text-xs text-slate-500">Customize receipt and payment transaction details.</p>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 pb-20 text-xs">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <Receipt className="w-3.5 h-3.5" /> Receipt & Order Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Receipt Title</Label>
                    <Input name="receiptNumber" value={formData.receiptNumber} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Order Ref</Label>
                      <Input name="orderReference" value={formData.orderReference} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Order Date</Label>
                      <Input name="orderDate" value={formData.orderDate} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Transaction ID</Label>
                    <Input name="transactionId" value={formData.transactionId} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-mono" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Payment Date</Label>
                    <Input name="paymentDate" value={formData.paymentDate} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Attendee Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Attendee Name</Label>
                    <Input name="attendeeName" value={formData.attendeeName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-bold" />
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Attendee Email</Label>
                    <Input name="attendeeEmail" value={formData.attendeeEmail} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Title / Position</Label>
                      <Input name="titlePosition" value={formData.titlePosition} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Country</Label>
                      <Input name="country" value={formData.country} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Organization / University</Label>
                    <Input name="organization" value={formData.organization} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-semibold" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5" /> Amount & Item
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-3">
                  <div>
                    <Label className="text-[11px] font-bold text-slate-600">Item Description</Label>
                    <Input name="itemName" value={formData.itemName} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Price</Label>
                      <Input name="priceUSD" value={formData.priceUSD} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-semibold" />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-600">Total Paid</Label>
                      <Input name="totalPaidUSD" value={formData.totalPaidUSD} onChange={handleInputChange} className="h-8 text-xs bg-white text-slate-900 border-slate-200 font-bold text-emerald-700" />
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
            id="print-receipt"
            className="bg-white text-slate-900 shadow-2xl print:shadow-none relative flex flex-col justify-between"
            style={{
              width: "793.33px",
              minHeight: "1122.67px",
              height: "1122.67px",
              boxSizing: "border-box",
              padding: "60px 64px",
              fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            }}
          >
            <div>
              {/* Top Header Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "50px" }}>
                <div>
                  <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>
                    {formData.receiptNumber}
                  </h1>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e3a8a", marginTop: "4px" }}>
                    {formData.conferenceTitle}
                  </div>
                </div>

                {/* Right Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "2px solid #1d4ed8",
                      background: "radial-gradient(circle at 30% 30%, #60a5fa, #1d4ed8)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff"
                    }}
                  >
                    <div style={{ fontSize: "6.5px", fontWeight: 800 }}>BIOINFO</div>
                    <div style={{ fontSize: "5.5px", fontWeight: 700 }}>GIW</div>
                    <div style={{ fontSize: "5px", fontWeight: 700 }}>ISCB-Asia</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 800, color: "#1e3a8a", lineHeight: 1.1 }}>BIOINFO</div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#2563eb", lineHeight: 1.1 }}>GIW ISCB-Asia</div>
                  </div>
                </div>
              </div>

              {/* Two Column Section: Event Details & Order Details */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
                {/* Left: Event details */}
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                    Event details
                  </div>
                  <div style={{ fontSize: "13px", lineHeight: 1.6, color: "#334155" }}>
                    <div>Venue: {formData.venue}</div>
                    <div>Start date: {formData.startDate}</div>
                    <div>End date: {formData.endDate}</div>
                    <div>Email: {formData.contactEmail}</div>
                  </div>
                </div>

                {/* Right: Order details */}
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                    Order details
                  </div>
                  <div style={{ fontSize: "13px", lineHeight: 1.6, color: "#334155" }}>
                    <div style={{ fontWeight: 700, color: "#0f172a" }}>{formData.attendeeName}</div>
                    <div>{formData.attendeeEmail}</div>
                    <div>Order reference: {formData.orderReference}</div>
                    <div>Order date: {formData.orderDate}</div>
                    <div>Transaction ID: {formData.transactionId}</div>
                    <div>Payment date: {formData.paymentDate}</div>
                  </div>
                </div>
              </div>

              {/* Attendee details */}
              <div style={{ marginBottom: "35px" }}>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>
                  Attendee details
                </div>
                <div style={{ fontSize: "13px", lineHeight: 1.6, color: "#334155" }}>
                  <div style={{ fontWeight: 800, color: "#0f172a" }}>{formData.attendeeName}</div>
                  <div>Title/Position {formData.titlePosition}</div>
                  <div>Organization {formData.organization}</div>
                  <div>Country of Institution {formData.country}</div>
                </div>
              </div>

              {/* Items Table */}
              <div style={{ marginBottom: "35px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1.5px solid #cbd5e1" }}>
                      <th style={{ textAlign: "left", paddingBottom: "10px", fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>
                        ITEM
                      </th>
                      <th style={{ textAlign: "right", paddingBottom: "10px", fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>
                        PRICE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ paddingTop: "14px", paddingBottom: "14px", fontSize: "13px", color: "#334155" }}>
                        {formData.itemName}
                      </td>
                      <td style={{ paddingTop: "14px", paddingBottom: "14px", textAlign: "right", fontSize: "13px", color: "#334155" }}>
                        {formData.priceUSD}
                      </td>
                    </tr>
                    <tr style={{ borderTop: "1.5px solid #cbd5e1" }}>
                      <td style={{ paddingTop: "14px", paddingBottom: "14px", textAlign: "right", fontSize: "14px", fontWeight: 800, color: "#0f172a" }}>
                        Total paid
                      </td>
                      <td style={{ paddingTop: "14px", paddingBottom: "14px", textAlign: "right", fontSize: "14px", fontWeight: 800, color: "#0f172a" }}>
                        {formData.totalPaidUSD}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bullet notes */}
              <div style={{ marginTop: "40px", fontSize: "12px", color: "#475569", lineHeight: 1.8 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span>•</span>
                  <span>The stated registration fee applies only if payment is received by the designated deadline.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span>•</span>
                  <span>If payment is not completed on time, re-registration will be required.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span>•</span>
                  <span>If you have any questions regarding payment, contact the administrator prior to the deadline.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
