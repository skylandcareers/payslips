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
  'FY 2023-24': {
    ackNumber: '309247080290724',
    dateOfFiling: '29-Jul-2024',
    financialYear: '2023-24',
    assessmentYear: '2024-25',
    pan: 'KXFPK8725L',
    name: 'RAJALINGAM K',
    address1: '122/P, Trichy Main Road, Angarai, Lalgudi,',
    address2: 'Lalgudi, Tiruchirappalli, 33-Tamil Nadu, 91-India, 621703',
    status: 'Individual',
    formNumber: 'ITR-2',
    filedUs: '139(1)-On or before due date',
    totalIncome: '8,45,600',
    netTax: '84,880',
    taxesPaid: '84,880',
    taxPayable1: '0',
    timestamp: '29-Jul-2024 17:42:40',
    ipAddress: '49.43.234.230',
    evc: 'KVR7X42NJB',
    barcodeValue: 'KXFPK8725L023092470802907247c6c4daa99f7f86ee2acf60aa101950ce7b24abd',
  },
  'FY 2024-25': {
    ackNumber: '418392070250725',
    dateOfFiling: '25-Jul-2025',
    financialYear: '2024-25',
    assessmentYear: '2025-26',
    pan: 'KXFPK8725L',
    name: 'RAJALINGAM K',
    address1: '122/P, Trichy Main Road, Angarai, Lalgudi,',
    address2: 'Lalgudi, Tiruchirappalli, 33-Tamil Nadu, 91-India, 621703',
    status: 'Individual',
    formNumber: 'ITR-2',
    filedUs: '139(1)-On or before due date',
    totalIncome: '10,65,400',
    netTax: '1,32,180',
    taxesPaid: '1,32,180',
    taxPayable1: '0',
    timestamp: '25-Jul-2025 15:18:22',
    ipAddress: '152.58.112.45',
    evc: 'TUL9M71KAP',
    barcodeValue: 'KXFPK8725L024183920702507258d7d5ebb00a8a97ff3bda71bb202061df8c35bcf',
  },
  'FY 2025-26': {
    ackNumber: '527481900240726',
    dateOfFiling: '24-Jul-2026',
    financialYear: '2025-26',
    assessmentYear: '2026-27',
    pan: 'KXFPK8725L',
    name: 'RAJALINGAM K',
    address1: '122/P, Trichy Main Road, Angarai, Lalgudi,',
    address2: 'Lalgudi, Tiruchirappalli, 33-Tamil Nadu, 91-India, 621703',
    status: 'Individual',
    formNumber: 'ITR-2',
    filedUs: '139(1)-On or before due date',
    totalIncome: '12,84,500',
    netTax: '1,76,230',
    taxesPaid: '1,76,230',
    taxPayable1: '0',
    timestamp: '24-Jul-2026 14:35:10',
    ipAddress: '106.213.88.19',
    evc: 'WBP6H85VTC',
    barcodeValue: 'KXFPK8725L025274819002407269e8f6fcc11b9b08aa4cea82cc303172ef9d46cdf',
  }
};
