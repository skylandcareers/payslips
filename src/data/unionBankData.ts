export interface BankTransaction {
  si: number | string;
  date: string;
  particulars: string;
  chqNum?: string;
  withdrawal?: string;
  deposit?: string;
  balance: string;
}

export interface AccountDetails {
  customerName: string;
  addressLines: string[];
  pincode?: string;
  country?: string;
  customerId: string;
  accountNumber: string;
  accountOpenDate: string;
  accountType: string;
  nomination: string;
  reKycDueDate: string;
  generatedDate: string;
  branch: string;
  ifsc: string;
  micr: string;
  phone: string;
  email: string;
  periodFrom: string;
  periodTo: string;
}

export interface LinkedLoan {
  si: number | string;
  schemeType: string;
  accountNumber: string;
  accountOpenDate: string;
  sanctionedLimit: string;
  outstanding: string;
  overdue: string;
  assetClass: string;
  roi: string;
}

export interface LinkedCasa {
  si: number | string;
  schemeType: string;
  accountNumber: string;
  accountOpenDate: string;
  status: string;
  balance: string;
}

export interface LinkedDeposit {
  si: number | string;
  schemeType: string;
  accountNumber: string;
  accountOpenDate: string;
  maturityDate: string;
  roi: string;
  balance: string;
}

export interface LinkedLocker {
  si: number | string;
  lockerType: string;
  lockerNumber: string;
  overdueRent: string;
  linkedAccount: string;
}

export interface DigitalProducts {
  smsAlert: string;
  debitCard: string;
  internetBanking: string;
}

export interface StatementSummary {
  totalDebits: string;
  totalCredits: string;
  closingBalance: string;
}

export const defaultAccountDetails: AccountDetails = {
  customerName: "SHAPURAM RAMULU",
  addressLines: [
    "HNO 1 63 5A   RAM NAGAR",
    "NANDIPET MANDAL",
    "NIZAMABAD",
    "TELANGANA"
  ],
  pincode: "503212",
  country: "INDIA",
  customerId: "36051533",
  accountNumber: "1750XXXXXXX6266",
  accountOpenDate: "16-01-2012",
  accountType: "SBA",
  nomination: "Y",
  reKycDueDate: "04-10-2035",
  generatedDate: "22-09-2026",
  branch: "NANDIPET",
  ifsc: "UBIN0817503",
  micr: "503026027",
  phone: "9908166020",
  email: "",
  periodFrom: "20-06-2026",
  periodTo: "22-09-2026"
};

export const defaultLinkedCasa: LinkedCasa[] = [
  {
    si: "No Records Found",
    schemeType: "",
    accountNumber: "",
    accountOpenDate: "",
    status: "",
    balance: ""
  }
];

export const defaultLinkedDeposits: LinkedDeposit[] = [
  {
    si: "No Records Found",
    schemeType: "",
    accountNumber: "",
    accountOpenDate: "",
    maturityDate: "",
    roi: "",
    balance: ""
  }
];

export const defaultLinkedLoans: LinkedLoan[] = [
  {
    si: 1,
    schemeType: "LAA",
    accountNumber: "1750XXXXXXX3522",
    accountOpenDate: "05-06-2026",
    sanctionedLimit: "4,98,000.00",
    outstanding: "4,98,000.00 Dr",
    overdue: "0.00",
    assetClass: "Standard",
    roi: "8.80"
  },
  {
    si: 2,
    schemeType: "LAA",
    accountNumber: "1750XXXXXXX0094",
    accountOpenDate: "22-09-2026",
    sanctionedLimit: "1,55,000.00",
    outstanding: "0.00 Cr",
    overdue: "0.00",
    assetClass: "Standard",
    roi: "9.40"
  }
];

export const defaultLinkedLockers: LinkedLocker[] = [
  {
    si: "No Records Found",
    lockerType: "",
    lockerNumber: "",
    overdueRent: "",
    linkedAccount: ""
  }
];

export const defaultDigitalProducts: DigitalProducts = {
  smsAlert: "N",
  debitCard: "Y",
  internetBanking: "N"
};

export const defaultTransactions: BankTransaction[] = [
  {
    "si": 1,
    "date": "",
    "particulars": "Opening Balance",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "",
    "balance": "4,00,000.00 Cr"
  },
  {
    "si": 2,
    "date": "20-06-2026",
    "particulars": "UPIAR/498185386983/DR/N MART<br>S/YESB/paytm.d9324249",
    "chqNum": "",
    "withdrawal": "178.00",
    "deposit": "",
    "balance": "3,99,822.00 Cr"
  },
  {
    "si": 3,
    "date": "20-06-2026",
    "particulars": "UPIAR/721450041106/DR/KAMMA<br>M  /FDRL/BHARATPE.9F0B0",
    "chqNum": "",
    "withdrawal": "40.00",
    "deposit": "",
    "balance": "3,99,782.00 Cr"
  },
  {
    "si": 4,
    "date": "23-06-2026",
    "particulars": "UPIAR/581041410346/DR/LAXMI<br>EN/YESB/ Q640132550@yb",
    "chqNum": "",
    "withdrawal": "1,450.00",
    "deposit": "",
    "balance": "3,98,332.00 Cr"
  },
  {
    "si": 5,
    "date": "27-06-2026",
    "particulars": "UPIAR/270956466032/DR/DEVALL<br>A /YESB/ Q258941133@yb",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "3,98,312.00 Cr"
  },
  {
    "si": 6,
    "date": "27-06-2026",
    "particulars": "UPIAR/148577342454/DR/SRI<br>KRIS/UTIB/9440139889@okb",
    "chqNum": "",
    "withdrawal": "500.00",
    "deposit": "",
    "balance": "3,97,812.00 Cr"
  },
  {
    "si": 7,
    "date": "27-06-2026",
    "particulars": "UPIAR/668810330746/DR/ABDUL<br>W/SBIN/ 9050432113@yb",
    "chqNum": "",
    "withdrawal": "300.00",
    "deposit": "",
    "balance": "3,97,512.00 Cr"
  },
  {
    "si": 8,
    "date": "27-06-2026",
    "particulars": "UPIAR/186828217839/DR/FAMOU<br>S R/SBIP/SBIBHIM.INSTAN",
    "chqNum": "",
    "withdrawal": "180.00",
    "deposit": "",
    "balance": "3,97,332.00 Cr"
  },
  {
    "si": 9,
    "date": "27-06-2026",
    "particulars": "UPIAB/617818118136/CR/SHAIK<br>F/SBIN/sf78193-3@oksb",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "50,000.00",
    "balance": "4,47,332.00 Cr"
  },
  {
    "si": 10,
    "date": "28-06-2026",
    "particulars": "UPIAR/275789768015/DR/BATHNA<br>S /IOBA/ 7997593200@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,47,232.00 Cr"
  },
  {
    "si": 11,
    "date": "28-06-2026",
    "particulars": "UPIAR/400844177373/DR/SAPURA<br>M /HDFC/9908166020-5@y",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,47,132.00 Cr"
  },
  {
    "si": 12,
    "date": "28-06-2026",
    "particulars": "UPIAB/426229709417/CR/SAPURA<br>M /HDFC/9908166020-5@a",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "200.00",
    "balance": "4,47,332.00 Cr"
  },
  {
    "si": 13,
    "date": "29-06-2026",
    "particulars": "UPIAB/222634436957/CR/SHAPUR<br>AM/UBIN/ 8019124780@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "2,000.00",
    "balance": "4,49,332.00 Cr"
  },
  {
    "si": 14,
    "date": "29-06-2026",
    "particulars": "UPIAR/133171134532/DR/SAPURA<br>M /HDFC/9908166020-5@y",
    "chqNum": "",
    "withdrawal": "1,000.00",
    "deposit": "",
    "balance": "4,48,332.00 Cr"
  },
  {
    "si": 15,
    "date": "30-06-2026",
    "particulars": "NEFT:PAY AND ACCOUNTS OFFICE<br>(MAIN BRANC RBISH0067",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "41,984.00",
    "balance": "4,90,316.00 Cr"
  },
  {
    "si": 16,
    "date": "03-07-2026",
    "particulars": "UPIAR/244649324272/DR/Sri<br>Kris/YESB/ Q196603014@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,90,216.00 Cr"
  },
  {
    "si": 17,
    "date": "03-07-2026",
    "particulars": "UPIAB/330145946388/CR/CHEPOO<br>R /SBIN/ 7075151513@yb",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "4,000.00",
    "balance": "4,94,216.00 Cr"
  },
  {
    "si": 18,
    "date": "04-07-2026",
    "particulars": "UPIAR/599820755009/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,94,116.00 Cr"
  },
  {
    "si": 19,
    "date": "04-07-2026",
    "particulars": "UPIAB/349475314427/CR/SHAIK<br>AT/HDFC/ atheeqhdfc@yb",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "1,566.00",
    "balance": "4,95,682.00 Cr"
  },
  {
    "si": 20,
    "date": "05-07-2026",
    "particulars": "UPIAB/140259712144/CR/Shreedh<br>a/SBIN/9481109593-3@y",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "800.00",
    "balance": "4,96,482.00 Cr"
  },
  {
    "si": 21,
    "date": "05-07-2026",
    "particulars": "UPIAR/755231581306/DR/NALLA<br>SR/YESB/ Q644397936@yb",
    "chqNum": "",
    "withdrawal": "150.00",
    "deposit": "",
    "balance": "4,96,332.00 Cr"
  },
  {
    "si": 22,
    "date": "05-07-2026",
    "particulars": "175010100016266:Int.Pd:01-04-<br>2026 to 30-06-2026",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "22.00",
    "balance": "4,96,354.00 Cr"
  },
  {
    "si": 23,
    "date": "06-07-2026",
    "particulars": "UPIAR/991294425666/DR/MS<br>KARTH/YESB/paytm.s28s0js@",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,96,154.00 Cr"
  },
  {
    "si": 24,
    "date": "07-07-2026",
    "particulars": "UPIAR/517999273213/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,96,054.00 Cr"
  },
  {
    "si": 25,
    "date": "07-07-2026",
    "particulars": "UPIAR/010268186388/DR/N MART<br>S/YESB/paytm.d9324249",
    "chqNum": "",
    "withdrawal": "430.00",
    "deposit": "",
    "balance": "4,95,624.00 Cr"
  },
  {
    "si": 26,
    "date": "07-07-2026",
    "particulars": "UPIAR/376761147446/DR/M/S.SRI<br>/ICIC/sridharanimedi",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,95,604.00 Cr"
  },
  {
    "si": 27,
    "date": "07-07-2026",
    "particulars": "UPIAR/324102617908/DR/MACHA<br>RLA/UBIN/srujan.shapura",
    "chqNum": "",
    "withdrawal": "35,000.00",
    "deposit": "",
    "balance": "4,60,604.00 Cr"
  },
  {
    "si": 28,
    "date": "08-07-2026",
    "particulars": "UPIAR/919053797630/DR/LOLAPU<br>S/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "350.00",
    "deposit": "",
    "balance": "4,60,254.00 Cr"
  },
  {
    "si": 29,
    "date": "10-07-2026",
    "particulars": "UPIAR/058066310248/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,60,154.00 Cr"
  },
  {
    "si": 30,
    "date": "10-07-2026",
    "particulars": "UPIAR/279782366295/DR/Bharat<br>C/UTIB/SV251211223834",
    "chqNum": "",
    "withdrawal": "73.00",
    "deposit": "",
    "balance": "4,60,081.00 Cr"
  },
  {
    "si": 31,
    "date": "10-07-2026",
    "particulars": "UPIAR/478187066053/DR/<br>PhonePe/YESB/SV251211223834",
    "chqNum": "",
    "withdrawal": "63.00",
    "deposit": "",
    "balance": "4,60,018.00 Cr"
  },
  {
    "si": 32,
    "date": "11-07-2026",
    "particulars": "UPIAR/844926925947/DR/Yeram<br>Ya/YESB/ Q116699485@yb",
    "chqNum": "",
    "withdrawal": "50.00",
    "deposit": "",
    "balance": "4,59,968.00 Cr"
  },
  {
    "si": 33,
    "date": "11-07-2026",
    "particulars": "UPIAR/280664944146/DR/ARRAM<br>CH/ANDB/ 7396021514@yb",
    "chqNum": "",
    "withdrawal": "1,000.00",
    "deposit": "",
    "balance": "4,58,968.00 Cr"
  },
  {
    "si": 34,
    "date": "12-07-2026",
    "particulars": "UPIAR/700955465547/DR/LAXMA<br>N M/YESB/ Q994370918@yb",
    "chqNum": "",
    "withdrawal": "500.00",
    "deposit": "",
    "balance": "4,58,468.00 Cr"
  },
  {
    "si": 35,
    "date": "12-07-2026",
    "particulars": "UPIAR/124417489049/DR/BANDA<br>MID/UBIN/shankarbandame",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,58,458.00 Cr"
  },
  {
    "si": 36,
    "date": "12-07-2026",
    "particulars": "UPIAR/332987062856/DR/AMPELL<br>Y /UBIN/ 9492210412@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,58,358.00 Cr"
  },
  {
    "si": 37,
    "date": "13-07-2026",
    "particulars": "UPIAR/893232297484/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,58,348.00 Cr"
  },
  {
    "si": 38,
    "date": "13-07-2026",
    "particulars": "UPIAR/319199348065/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,58,338.00 Cr"
  },
  {
    "si": 39,
    "date": "14-07-2026",
    "particulars": "UPIAR/696350936814/DR/SUKAVA<br>SI/UBIN/shnakarshivapr",
    "chqNum": "",
    "withdrawal": "3,500.00",
    "deposit": "",
    "balance": "4,54,838.00 Cr"
  },
  {
    "si": 40,
    "date": "14-07-2026",
    "particulars": "UPIAR/377564307094/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,54,828.00 Cr"
  },
  {
    "si": 41,
    "date": "14-07-2026",
    "particulars": "UPIAR/938000294260/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,54,818.00 Cr"
  },
  {
    "si": 42,
    "date": "16-07-2026",
    "particulars": "UPIAR/127141277293/DR/AMPELL<br>Y /UBIN/ 9492210412@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,54,718.00 Cr"
  },
  {
    "si": 43,
    "date": "16-07-2026",
    "particulars": "UPIAR/890650081853/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,54,618.00 Cr"
  },
  {
    "si": 44,
    "date": "17-07-2026",
    "particulars": "UPIAR/335252902600/DR/MADHA<br>SU/CNRB/ 7673930688@yb",
    "chqNum": "",
    "withdrawal": "20,000.00",
    "deposit": "",
    "balance": "4,34,618.00 Cr"
  },
  {
    "si": 45,
    "date": "18-07-2026",
    "particulars": "UPIAR/155154824117/DR/JAI<br>ANNA/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "140.00",
    "deposit": "",
    "balance": "4,34,478.00 Cr"
  },
  {
    "si": 46,
    "date": "18-07-2026",
    "particulars": "UPIAR/954340796400/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,34,378.00 Cr"
  },
  {
    "si": 47,
    "date": "18-07-2026",
    "particulars": "UPIAR/715442974759/DR/GADDE<br>SW/SBIN/  994967827@yb",
    "chqNum": "",
    "withdrawal": "45.00",
    "deposit": "",
    "balance": "4,34,333.00 Cr"
  },
  {
    "si": 48,
    "date": "18-07-2026",
    "particulars": "UPIAR/603772975291/DR/SHAPUR<br>AM/UBIN/ 8019124780@ax",
    "chqNum": "",
    "withdrawal": "1,200.00",
    "deposit": "",
    "balance": "4,33,133.00 Cr"
  },
  {
    "si": 49,
    "date": "18-07-2026",
    "particulars": "UPIAR/536132219656/DR/SHAPUR<br>AM/UBIN/ 8019124780@ax",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,33,033.00 Cr"
  },
  {
    "si": 50,
    "date": "20-07-2026",
    "particulars": "UPIAR/029792043121/DR/Krishna<br>/YESB/  Q87303448@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,32,933.00 Cr"
  },
  {
    "si": 51,
    "date": "22-07-2026",
    "particulars": "UPIAR/754579185627/DR/Sri<br>Kris/YESB/paytmqr1m5loq7",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,32,833.00 Cr"
  },
  {
    "si": 52,
    "date": "22-07-2026",
    "particulars": "UPIAR/652997550722/DR/PARUNA<br>ND/HDFC/Vyapar.1766863",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,32,733.00 Cr"
  },
  {
    "si": 53,
    "date": "22-07-2026",
    "particulars": "UPIAR/925714060122/DR/GADDE<br>SW/SBIN/  994967827@yb",
    "chqNum": "",
    "withdrawal": "60.00",
    "deposit": "",
    "balance": "4,32,673.00 Cr"
  },
  {
    "si": 54,
    "date": "22-07-2026",
    "particulars": "UPIAR/042921786688/DR/KAMAL<br>KI/YESB/ Q708193755@yb",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,32,663.00 Cr"
  },
  {
    "si": 55,
    "date": "23-07-2026",
    "particulars": "UPIAR/552507297942/DR/Amma<br>win/YESB/ Q546558107@yb",
    "chqNum": "",
    "withdrawal": "190.00",
    "deposit": "",
    "balance": "4,32,473.00 Cr"
  },
  {
    "si": 56,
    "date": "23-07-2026",
    "particulars": "UPIAR/886374069712/DR/VIGNES<br>H /YESB/ Q403042613@yb",
    "chqNum": "",
    "withdrawal": "70.00",
    "deposit": "",
    "balance": "4,32,403.00 Cr"
  },
  {
    "si": 57,
    "date": "23-07-2026",
    "particulars": "UPIAR/786156602724/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,32,303.00 Cr"
  },
  {
    "si": 58,
    "date": "24-07-2026",
    "particulars": "UPIAR/584427929473/DR/ADDEPA<br>LL/YESB/ Q847007652@yb",
    "chqNum": "",
    "withdrawal": "30.00",
    "deposit": "",
    "balance": "4,32,273.00 Cr"
  },
  {
    "si": 59,
    "date": "25-07-2026",
    "particulars": "UPIAR/933848467672/DR/AMPELL<br>Y /UBIN/ 9492210412@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,32,173.00 Cr"
  },
  {
    "si": 60,
    "date": "25-07-2026",
    "particulars": "UPIAR/991575827353/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,32,153.00 Cr"
  },
  {
    "si": 61,
    "date": "25-07-2026",
    "particulars": "UPIAR/603100060646/DR/KAMMA<br>M A/UNBA/BHARATPE.9V0K0",
    "chqNum": "",
    "withdrawal": "40.00",
    "deposit": "",
    "balance": "4,32,113.00 Cr"
  },
  {
    "si": 62,
    "date": "25-07-2026",
    "particulars": "UPIAR/620593542031/DR/KORIPAL<br>L/UBIN/ 9441827700@yb",
    "chqNum": "",
    "withdrawal": "250.00",
    "deposit": "",
    "balance": "4,31,863.00 Cr"
  },
  {
    "si": 63,
    "date": "25-07-2026",
    "particulars": "UPIAR/355744219965/DR/Coconut<br>/YESB/ Q444820008@yb",
    "chqNum": "",
    "withdrawal": "50.00",
    "deposit": "",
    "balance": "4,31,813.00 Cr"
  },
  {
    "si": 64,
    "date": "25-07-2026",
    "particulars": "UPIAR/039436890891/DR/LOLAPU<br>S/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "90.00",
    "deposit": "",
    "balance": "4,31,723.00 Cr"
  },
  {
    "si": 65,
    "date": "27-07-2026",
    "particulars": "UPIAR/649308392832/DR/Sri Sai<br>/YESB/ Q884586475@yb",
    "chqNum": "",
    "withdrawal": "30.00",
    "deposit": "",
    "balance": "4,31,693.00 Cr"
  },
  {
    "si": 66,
    "date": "27-07-2026",
    "particulars": "UPIAR/726389583128/DR/Prabhav<br>a/UNBA/BHARATPE.9Z0H0",
    "chqNum": "",
    "withdrawal": "300.00",
    "deposit": "",
    "balance": "4,31,393.00 Cr"
  },
  {
    "si": 67,
    "date": "31-07-2026",
    "particulars": "UPIAR/519211866843/DR/KRISHN<br>A /YESB/ Q762259007@yb",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,31,193.00 Cr"
  },
  {
    "si": 68,
    "date": "31-07-2026",
    "particulars": "UPIAR/233061435554/DR/Coconut<br>/YESB/ Q444820008@yb",
    "chqNum": "",
    "withdrawal": "25.00",
    "deposit": "",
    "balance": "4,31,168.00 Cr"
  },
  {
    "si": 69,
    "date": "31-07-2026",
    "particulars": "UPIAR/102957248998/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,31,068.00 Cr"
  },
  {
    "si": 70,
    "date": "02-08-2026",
    "particulars": "UPIAR/258070326152/DR/JAI<br>DURG/UBIN/QR919121691630",
    "chqNum": "",
    "withdrawal": "130.00",
    "deposit": "",
    "balance": "4,30,938.00 Cr"
  },
  {
    "si": 71,
    "date": "02-08-2026",
    "particulars": "UPIAR/900151287100/DR/Sunnam<br>R/TGRB/9666509655-4@a",
    "chqNum": "",
    "withdrawal": "500.00",
    "deposit": "",
    "balance": "4,30,438.00 Cr"
  },
  {
    "si": 72,
    "date": "02-08-2026",
    "particulars": "UPIAR/525598380333/DR/Amma<br>win/YESB/ Q546558107@yb",
    "chqNum": "",
    "withdrawal": "190.00",
    "deposit": "",
    "balance": "4,30,248.00 Cr"
  },
  {
    "si": 73,
    "date": "02-08-2026",
    "particulars": "UPIAR/760663689632/DR/Balaji<br>E/YESB/ Q030173399@yb",
    "chqNum": "",
    "withdrawal": "75.00",
    "deposit": "",
    "balance": "4,30,173.00 Cr"
  },
  {
    "si": 74,
    "date": "03-08-2026",
    "particulars": "UPIAR/300659098507/DR/GUNDA<br>MPA/UBIN/ 8466869790@ax",
    "chqNum": "",
    "withdrawal": "250.00",
    "deposit": "",
    "balance": "4,29,923.00 Cr"
  },
  {
    "si": 75,
    "date": "04-08-2026",
    "particulars": "UPIAR/607106354236/DR/Sri<br>Kris/YESB/paytmqr5d6b2c@",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,29,823.00 Cr"
  },
  {
    "si": 76,
    "date": "04-08-2026",
    "particulars": "UPIAB/451120633918/CR/GANDLA<br>S/HDFC/ 9949090094@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "1,800.00",
    "balance": "4,31,623.00 Cr"
  },
  {
    "si": 77,
    "date": "06-08-2026",
    "particulars": "UPIAR/422752745461/DR/KRISHN<br>A /YESB/ Q762259007@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,31,523.00 Cr"
  },
  {
    "si": 78,
    "date": "07-08-2026",
    "particulars": "UPIAR/063115033703/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,31,423.00 Cr"
  },
  {
    "si": 79,
    "date": "08-08-2026",
    "particulars": "UPIAR/821990133325/DR/BSNL<br>Rec/UTIB/PHONEPEBSNLSOU",
    "chqNum": "",
    "withdrawal": "443.00",
    "deposit": "",
    "balance": "4,30,980.00 Cr"
  },
  {
    "si": 80,
    "date": "08-08-2026",
    "particulars": "UPIAR/308169833451/DR/<br>SHAHIN/UBIN/rasheedskrashe",
    "chqNum": "",
    "withdrawal": "300.00",
    "deposit": "",
    "balance": "4,30,680.00 Cr"
  },
  {
    "si": 81,
    "date": "09-08-2026",
    "particulars": "UPIAB/583957982866/CR/VINJAM<br>M/UBIN/9550722848-2@i",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "500.00",
    "balance": "4,31,180.00 Cr"
  },
  {
    "si": 82,
    "date": "09-08-2026",
    "particulars": "UPIAR/641766510826/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,31,080.00 Cr"
  },
  {
    "si": 83,
    "date": "10-08-2026",
    "particulars": "UPIAR/486759285512/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,30,980.00 Cr"
  },
  {
    "si": 84,
    "date": "11-08-2026",
    "particulars": "UPIAR/850030838307/DR/Sri Sai<br>/YESB/ Q672731565@yb",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,30,960.00 Cr"
  },
  {
    "si": 85,
    "date": "11-08-2026",
    "particulars": "UPIAR/389472331139/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,30,860.00 Cr"
  },
  {
    "si": 86,
    "date": "12-08-2026",
    "particulars": "UPIAR/632465148366/DR/KRISHN<br>A /YESB/ Q762259007@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,30,760.00 Cr"
  },
  {
    "si": 87,
    "date": "12-08-2026",
    "particulars": "UPIAR/991300603357/DR/GADDE<br>SW/SBIN/  994967827@yb",
    "chqNum": "",
    "withdrawal": "60.00",
    "deposit": "",
    "balance": "4,30,700.00 Cr"
  },
  {
    "si": 88,
    "date": "12-08-2026",
    "particulars": "UPIAR/104790013766/DR/Bharat<br>C/UTIB/SV251211223834",
    "chqNum": "",
    "withdrawal": "73.00",
    "deposit": "",
    "balance": "4,30,627.00 Cr"
  },
  {
    "si": 89,
    "date": "12-08-2026",
    "particulars": "UPIAR/538470620295/DR/Bharat<br>C/YESB/SV251211223834",
    "chqNum": "",
    "withdrawal": "63.00",
    "deposit": "",
    "balance": "4,30,564.00 Cr"
  },
  {
    "si": 90,
    "date": "13-08-2026",
    "particulars": "UPIAR/622514216764/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,30,364.00 Cr"
  },
  {
    "si": 91,
    "date": "13-08-2026",
    "particulars": "UPIAR/050241160085/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,30,344.00 Cr"
  },
  {
    "si": 92,
    "date": "14-08-2026",
    "particulars": "UPIAR/127409586334/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,30,244.00 Cr"
  },
  {
    "si": 93,
    "date": "14-08-2026",
    "particulars": "UPIAR/276128735882/DR/Alla<br>Bak/YESB/paytm.s1bziki@",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,30,044.00 Cr"
  },
  {
    "si": 94,
    "date": "15-08-2026",
    "particulars": "UPIAR/344998536192/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,29,944.00 Cr"
  },
  {
    "si": 95,
    "date": "16-08-2026",
    "particulars": "UPIAR/708732834991/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,29,844.00 Cr"
  },
  {
    "si": 96,
    "date": "16-08-2026",
    "particulars": "UPIAR/880175631704/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,29,834.00 Cr"
  },
  {
    "si": 97,
    "date": "16-08-2026",
    "particulars": "UPIAR/589053313069/DR/JAI<br>DURG/UBIN/QR919121691630",
    "chqNum": "",
    "withdrawal": "240.00",
    "deposit": "",
    "balance": "4,29,594.00 Cr"
  },
  {
    "si": 98,
    "date": "16-08-2026",
    "particulars": "UPIAR/214034467696/DR/AMPALL<br>I /UBIN/17501201000393",
    "chqNum": "",
    "withdrawal": "60.00",
    "deposit": "",
    "balance": "4,29,534.00 Cr"
  },
  {
    "si": 99,
    "date": "17-08-2026",
    "particulars": "UPIAR/434400326753/DR/ARVAPA<br>LL/UNBA/BHARATPE2H0F0R",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,29,514.00 Cr"
  },
  {
    "si": 100,
    "date": "18-08-2026",
    "particulars": "UPIAR/760620652551/DR/Alla<br>Bak/YESB/paytm.s1bziki@",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,29,314.00 Cr"
  },
  {
    "si": 101,
    "date": "19-08-2026",
    "particulars": "UPIAR/807502168747/DR/THALA<br>MAD/IOBA/ 8179158806@ax",
    "chqNum": "",
    "withdrawal": "290.00",
    "deposit": "",
    "balance": "4,29,024.00 Cr"
  },
  {
    "si": 102,
    "date": "20-08-2026",
    "particulars": "Loan Recovery<br>For175016540013522",
    "chqNum": "",
    "withdrawal": "10.38",
    "deposit": "",
    "balance": "4,29,013.62 Cr"
  },
  {
    "si": 103,
    "date": "21-08-2026",
    "particulars": "UPIAB/617613691063/CR/SHAPUR<br>AM/HDFC/ 6309061307@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "50,000.00",
    "balance": "4,79,013.62 Cr"
  },
  {
    "si": 104,
    "date": "21-08-2026",
    "particulars": "UPIAR/136209312389/DR/RAMUL<br>U  /SBIN/9908166020-2@a",
    "chqNum": "",
    "withdrawal": "50,000.00",
    "deposit": "",
    "balance": "4,29,013.62 Cr"
  },
  {
    "si": 105,
    "date": "22-08-2026",
    "particulars": "UPIAR/044817234906/DR/MOHA<br>MMED/SBIN/ 8374710050@ib",
    "chqNum": "",
    "withdrawal": "266.00",
    "deposit": "",
    "balance": "4,28,747.62 Cr"
  },
  {
    "si": 106,
    "date": "23-08-2026",
    "particulars": "UPIAR/007016588287/DR/Sri<br>Kris/YESB/paytmqr1m5loq7",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,647.62 Cr"
  },
  {
    "si": 107,
    "date": "23-08-2026",
    "particulars": "UPIAR/201561333118/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,28,637.62 Cr"
  },
  {
    "si": 108,
    "date": "23-08-2026",
    "particulars": "UPIAR/078276494346/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,537.62 Cr"
  },
  {
    "si": 109,
    "date": "24-08-2026",
    "particulars": "UPIAR/386925521723/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,437.62 Cr"
  },
  {
    "si": 110,
    "date": "24-08-2026",
    "particulars": "UPIAR/624107591391/DR/JAI<br>ANNA/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "150.00",
    "deposit": "",
    "balance": "4,28,287.62 Cr"
  },
  {
    "si": 111,
    "date": "07-09-2026",
    "particulars": "UPIAB/188437144504/CR/Koneru<br>/SBIN/ 8096233731@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "800.00",
    "balance": "4,29,087.62 Cr"
  },
  {
    "si": 112,
    "date": "07-09-2026",
    "particulars": "UPIAR/063045450068/DR/JAI<br>ANNA/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "30.00",
    "deposit": "",
    "balance": "4,29,057.62 Cr"
  },
  {
    "si": 113,
    "date": "07-09-2026",
    "particulars": "UPIAR/481035166569/DR/AMPALL<br>I /UBIN/17501201000393",
    "chqNum": "",
    "withdrawal": "45.00",
    "deposit": "",
    "balance": "4,29,012.62 Cr"
  },
  {
    "si": 114,
    "date": "07-09-2026",
    "particulars": "UPIAR/594968793572/DR/Kamal<br>sh/YESB/ Q708193755@yb",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,28,992.62 Cr"
  },
  {
    "si": 115,
    "date": "11-09-2026",
    "particulars": "UPIAR/411534262617/DR/BANDA<br>MEE/SBIN/bandameedishan",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,28,982.62 Cr"
  },
  {
    "si": 116,
    "date": "11-09-2026",
    "particulars": "UPIAR/130020802577/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,882.62 Cr"
  },
  {
    "si": 117,
    "date": "12-09-2026",
    "particulars": "UPIAR/682627912933/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,782.62 Cr"
  },
  {
    "si": 118,
    "date": "12-09-2026",
    "particulars": "UPIAR/379801167905/DR/Bharat<br>C/YESB/SV251211223834",
    "chqNum": "",
    "withdrawal": "73.00",
    "deposit": "",
    "balance": "4,28,709.62 Cr"
  },
  {
    "si": 119,
    "date": "12-09-2026",
    "particulars": "UPIAR/024663870121/DR/Bharat<br>C/YESB/SV251211223834",
    "chqNum": "",
    "withdrawal": "63.00",
    "deposit": "",
    "balance": "4,28,646.62 Cr"
  },
  {
    "si": 120,
    "date": "13-09-2026",
    "particulars": "UPIAR/568754899594/DR/Prabhav<br>a/UNBA/BHARATPE.9Z0H0",
    "chqNum": "",
    "withdrawal": "20.00",
    "deposit": "",
    "balance": "4,28,626.62 Cr"
  },
  {
    "si": 121,
    "date": "13-09-2026",
    "particulars": "UPIAR/571774581467/DR/GADDE<br>SW/SBIN/  994967827@ax",
    "chqNum": "",
    "withdrawal": "45.00",
    "deposit": "",
    "balance": "4,28,581.62 Cr"
  },
  {
    "si": 122,
    "date": "13-09-2026",
    "particulars": "UPIAR/924547837568/DR/SRI SAI<br>/HDFC/Vyapar.1756936",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,481.62 Cr"
  },
  {
    "si": 123,
    "date": "15-09-2026",
    "particulars": "UPIAR/985861716868/DR/BALAJI<br>S/YESB/ Q002261525@yb",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,28,471.62 Cr"
  },
  {
    "si": 124,
    "date": "15-09-2026",
    "particulars": "UPIAB/480406115397/CR/RAVI<br>KUM/HDFC/ 9441493471@yb",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "30,000.00",
    "balance": "4,58,471.62 Cr"
  },
  {
    "si": 125,
    "date": "15-09-2026",
    "particulars": "UPIAR/640269363874/DR/RAMUL<br>U  /SBIN/9908166020-2@a",
    "chqNum": "",
    "withdrawal": "30,000.00",
    "deposit": "",
    "balance": "4,28,471.62 Cr"
  },
  {
    "si": 126,
    "date": "15-09-2026",
    "particulars": "UPIAB/958851580509/CR/THOTA<br>RA/HDFC/ 9603814584@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "30,000.00",
    "balance": "4,58,471.62 Cr"
  },
  {
    "si": 127,
    "date": "15-09-2026",
    "particulars": "UPIAR/194717946003/DR/RAVI<br>KUM/HDFC/ 9441493471@yb",
    "chqNum": "",
    "withdrawal": "30,000.00",
    "deposit": "",
    "balance": "4,28,471.62 Cr"
  },
  {
    "si": 128,
    "date": "16-09-2026",
    "particulars": "UPIAR/250683724603/DR/Prabhav<br>a/UNBA/BHARATPE.9Z0H0",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,28,461.62 Cr"
  },
  {
    "si": 129,
    "date": "16-09-2026",
    "particulars": "UPIAR/691888300998/DR/JAI<br>ANNA/YESB/ Q326379437@yb",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,361.62 Cr"
  },
  {
    "si": 130,
    "date": "16-09-2026",
    "particulars": "UPIAB/921215126847/CR/SHAPUR<br>AM/UBIN/ 8019124780@ax",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "500.00",
    "balance": "4,28,861.62 Cr"
  },
  {
    "si": 131,
    "date": "17-09-2026",
    "particulars": "UPIAR/036385651698/DR/SRI<br>BALA/YESB/ Q279790151@yb",
    "chqNum": "",
    "withdrawal": "50.00",
    "deposit": "",
    "balance": "4,28,811.62 Cr"
  },
  {
    "si": 132,
    "date": "18-09-2026",
    "particulars": "UPIAR/294967056501/DR/Prabhav<br>a/UNBA/BHARATPE.9Z0H0",
    "chqNum": "",
    "withdrawal": "10.00",
    "deposit": "",
    "balance": "4,28,801.62 Cr"
  },
  {
    "si": 133,
    "date": "18-09-2026",
    "particulars": "UPIAR/477438520287/DR/BALERA<br>O /HDFC/Vyapar.1724268",
    "chqNum": "",
    "withdrawal": "110.00",
    "deposit": "",
    "balance": "4,28,691.62 Cr"
  },
  {
    "si": 134,
    "date": "19-09-2026",
    "particulars": "UPIAR/459363243970/DR/Prabhav<br>a/UNBA/BHARATPE.9Z0H0",
    "chqNum": "",
    "withdrawal": "15.00",
    "deposit": "",
    "balance": "4,28,676.62 Cr"
  },
  {
    "si": 135,
    "date": "20-09-2026",
    "particulars": "UPIAR/410753779836/DR/Krishna<br>/YESB/ Q041320599@yb",
    "chqNum": "",
    "withdrawal": "200.00",
    "deposit": "",
    "balance": "4,28,476.62 Cr"
  },
  {
    "si": 136,
    "date": "22-09-2026",
    "particulars": "UPIAR/591983564738/DR/Prabhav<br>a/UNBA/BHARATPE.9C0P0",
    "chqNum": "",
    "withdrawal": "45.00",
    "deposit": "",
    "balance": "4,28,431.62 Cr"
  },
  {
    "si": 137,
    "date": "22-09-2026",
    "particulars": "UPIAR/359745216353/DR/JANAGA<br>MA/UBIN/janagamarajugo",
    "chqNum": "",
    "withdrawal": "100.00",
    "deposit": "",
    "balance": "4,28,331.62 Cr"
  },
  {
    "si": 138,
    "date": "22-09-2026",
    "particulars": "BY CASH",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "1,55,000.00",
    "balance": "5,83,331.62 Cr"
  },
  {
    "si": 139,
    "date": "22-09-2026",
    "particulars": "175010100016266 - Payoff Source<br>a/c",
    "chqNum": "",
    "withdrawal": "1,53,905.00",
    "deposit": "",
    "balance": "4,29,426.62 Cr"
  },
  {
    "si": 140,
    "date": "22-09-2026",
    "particulars": "PROCESSING CHARGE for<br>175016630010094",
    "chqNum": "",
    "withdrawal": "354.00",
    "deposit": "",
    "balance": "4,29,072.62 Cr"
  },
  {
    "si": 141,
    "date": "22-09-2026",
    "particulars": "Appraiser charger for<br>175016630010094",
    "chqNum": "",
    "withdrawal": "590.00",
    "deposit": "",
    "balance": "4,28,482.62 Cr"
  },
  {
    "si": 142,
    "date": "22-09-2026",
    "particulars": "Disb. to: 175010100016266 for<br>175016630010094",
    "chqNum": "",
    "withdrawal": "",
    "deposit": "1,55,000.00",
    "balance": "5,83,482.62 Cr"
  },
  {
    "si": 143,
    "date": "22-09-2026",
    "particulars": "UPIAR/542830641172/DR/Bank<br>Acc/UBIN/17501010009627",
    "chqNum": "",
    "withdrawal": "1.00",
    "deposit": "",
    "balance": "5,83,481.62 Cr"
  }
];
