export interface Itr2ReportData {
  ackNumber: string;
  dateOfFiling: string;
  financialYear: string;
  assessmentYear: string;
  pan: string;
  name: string;
  address1: string;
  address2: string;
  status: string;
  formNumber: string;
  filedUs: string;
  totalIncome: string;
  netTax: string;
  taxesPaid: string;
  taxPayable1: string;
  timestamp: string;
  ipAddress: string;
  evc: string;
  barcodeValue: string;
}

export const ITR2_YEAR_PRESETS: Record<string, Itr2ReportData> = {
  'Irfan Shaik (FY 2023-24)': {
    ackNumber: '118673410270724',
    dateOfFiling: '27-Jul-2024',
    financialYear: '2023-24',
    assessmentYear: '2024-25',
    pan: 'FCEPS8377F',
    name: 'IRFAN SHAIK',
    address1: '202, 12-2-710 TO 712, AVALON APARTMENTS, NANAL NAGAR,',
    address2: 'HYDERABAD, 36-Telangana, 91-India, 500028',
    status: 'Individual',
    formNumber: 'ITR-3',
    filedUs: '139(1)- On or Before due date',
    totalIncome: '4,73,200',
    netTax: '0',
    taxesPaid: '0',
    taxPayable1: '0',
    timestamp: '27-Jul-2024 19:33:26',
    ipAddress: '49.43.225.120',
    evc: 'TUD92T69CI',
    barcodeValue: 'FCEPS8377F03118673410270724890F167B59C9B4BACAF0B50198F89ED1FB0C6360',
  },
  'Irfan Shaik (FY 2024-25)': {
    ackNumber: '118673410270725',
    dateOfFiling: '15-Jul-2025',
    financialYear: '2024-25',
    assessmentYear: '2025-26',
    pan: 'FCEPS8377F',
    name: 'IRFAN SHAIK',
    address1: '202, 12-2-710 TO 712, AVALON APARTMENTS, NANAL NAGAR,',
    address2: 'HYDERABAD, 36-Telangana, 91-India, 500028',
    status: 'Individual',
    formNumber: 'ITR-3',
    filedUs: '139(1)- On or Before due date',
    totalIncome: '10,38,400',
    netTax: '0',
    taxesPaid: '0',
    taxPayable1: '0',
    timestamp: '15-Jul-2025 14:22:10',
    ipAddress: '49.43.225.120',
    evc: 'YUP92T88DI',
    barcodeValue: 'FCEPS8377F031186734102707256DC582D457C091EC42A7E8434FFDC1AD0A2A9043',
  },
  'Irfan Shaik (FY 2025-26)': {
    ackNumber: '118673410270726',
    dateOfFiling: '20-Jul-2026',
    financialYear: '2025-26',
    assessmentYear: '2026-27',
    pan: 'FCEPS8377F',
    name: 'IRFAN SHAIK',
    address1: '202, 12-2-710 TO 712, AVALON APARTMENTS, NANAL NAGAR,',
    address2: 'HYDERABAD, 36-Telangana, 91-India, 500028',
    status: 'Individual',
    formNumber: 'ITR-3',
    filedUs: '139(1)- On or Before due date',
    totalIncome: '11,22,400',
    netTax: '0',
    taxesPaid: '0',
    taxPayable1: '0',
    timestamp: '20-Jul-2026 10:15:45',
    ipAddress: '49.43.225.120',
    evc: 'HJS92T77EK',
    barcodeValue: 'FCEPS8377F03118673410270726704957EA542B1F2868DB0D036FA3E7AB3980600E',
  },
};
