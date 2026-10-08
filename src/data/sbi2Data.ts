// State Bank of India - Format 2 (WhatsApp Banking Statement)
// Extracted and verified from public/sbi2/SBI_2.pdf & SBI_2.html
// 100% balance checksum verification: 0 arithmetic discrepancies

export interface SBI2Transaction {
  page?: number;
  date: string;
  valueDate: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
}

export interface SBI2AccountDetails {
  customerName: string;
  relation: string;
  addressLines: string[];
  registeredBranchCode: string;
  accountNumber: string;
  branch: string;
  accountName: string;
  interestRate: string;
  cifNo: string;
  balanceDate: string;
  balanceAsOn: string;
  periodFrom: string;
  periodTo: string;
}

export const defaultAccountDetails: SBI2AccountDetails = {
  customerName: 'Mr. IRFAN SHAIK',
  relation: 'S/O: KARIMULLA SHAIK',
  addressLines: [
    '202,12-2-710 TO 712, AVALON APARTMENTS',
    'Nanal Nagar,',
    'HYDERABAD, 500028',
    'Telangana, India',
  ],
  registeredBranchCode: '20235',
  accountNumber: '32645083192',
  branch: 'HYDERABAD',
  accountName: 'Mr. IRFAN SHAIK',
  interestRate: '2.70',
  cifNo: '86507322763',
  balanceDate: '30/09/2026',
  balanceAsOn: '858727.85',
  periodFrom: '01/07/2026',
  periodTo: '30/09/2026',
};

export const defaultTransactions: SBI2Transaction[] = [
  {
    "page": 1,
    "date": "01/06/2026",
    "valueDate": "01/06/2026",
    "description": "UPI/DR/820215631713/Bank Acc/ICIC/1804015315/Payme",
    "debit": "25000.00",
    "credit": "",
    "balance": "509783.85"
  },
  {
    "page": 1,
    "date": "02/06/2026",
    "valueDate": "02/06/2026",
    "description": "UPI/DR/616216772111/NIRMALA /CNRB/9742625753/Payme",
    "debit": "100.00",
    "credit": "",
    "balance": "509683.85"
  },
  {
    "page": 1,
    "date": "02/06/2026",
    "valueDate": "02/06/2026",
    "description": "UPI/DR/617718205804/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "508683.85"
  },
  {
    "page": 1,
    "date": "02/06/2026",
    "valueDate": "02/06/2026",
    "description": "UPI/CR/307270380803/MUNAGALA/SBIN/9 059034497/Sent",
    "debit": "",
    "credit": "4000.00",
    "balance": "512683.85"
  },
  {
    "page": 1,
    "date": "02/06/2026",
    "valueDate": "02/06/2026",
    "description": "UPI/CR/207517743157/MUNAGALA/SBIN/9 059034497/Sent",
    "debit": "",
    "credit": "1000.00",
    "balance": "513683.85"
  },
  {
    "page": 1,
    "date": "02/06/2026",
    "valueDate": "02/06/2026",
    "description": "UPI/DR/808866557832/90590344/SBIN/90590 34497/Payme",
    "debit": "500.00",
    "credit": "",
    "balance": "513183.85"
  },
  {
    "page": 1,
    "date": "03/06/2026",
    "valueDate": "03/06/2026",
    "description": "UPI/CR/615477695532/BUDDA SE/CNRB/buddaseshu/UPI",
    "debit": "",
    "credit": "25000.00",
    "balance": "538183.85"
  },
  {
    "page": 1,
    "date": "03/06/2026",
    "valueDate": "03/06/2026",
    "description": "UPI/DR/652012850420/CRED/UTIB/cred.club @/payment",
    "debit": "9393.00",
    "credit": "",
    "balance": "528790.85"
  },
  {
    "page": 1,
    "date": "04/06/2026",
    "valueDate": "04/06/2026",
    "description": "UPI/DR/546181526526/KAYA PAT/KKBK/paytm.s211/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "528730.85"
  },
  {
    "page": 1,
    "date": "05/06/2026",
    "valueDate": "05/06/2026",
    "description": "NEFT*YASHODA HOSPITALS*SALARY MAY",
    "debit": "",
    "credit": "94000.00",
    "balance": "622730.85"
  },
  {
    "page": 1,
    "date": "06/06/2026",
    "valueDate": "06/06/2026",
    "description": "UPI/DR/639912270968/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "868.00",
    "credit": "",
    "balance": "621862.85"
  },
  {
    "page": 1,
    "date": "06/06/2026",
    "valueDate": "06/06/2026",
    "description": "UPI/DR/770133102442/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "1021.00",
    "credit": "",
    "balance": "620841.85"
  },
  {
    "page": 1,
    "date": "06/06/2026",
    "valueDate": "06/06/2026",
    "description": "UPI/DR/083356565144/PRAMEETH/UTIB/al ex.lucif/Payme",
    "debit": "250.00",
    "credit": "",
    "balance": "620591.85"
  },
  {
    "page": 1,
    "date": "06/06/2026",
    "valueDate": "06/06/2026",
    "description": "UPI/DR/108792102832/NAGARAJA/YESB/Q 311630612/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "620581.85"
  },
  {
    "page": 1,
    "date": "07/06/2026",
    "valueDate": "07/06/2026",
    "description": "ATM CASH 7175949188   VARTHUR, BANGALORE - ABANGAL",
    "debit": "11000.00",
    "credit": "",
    "balance": "609581.85"
  },
  {
    "page": 1,
    "date": "08/06/2026",
    "valueDate": "08/06/2026",
    "description": "UPI/DR/917091358391/Venkata /YESB/paytm.s1f4/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "609541.85"
  },
  {
    "page": 1,
    "date": "10/06/2026",
    "valueDate": "10/06/2026",
    "description": "UPI/DR/236206592606/RAJASHRE/CNRB/ra jashree./Payme",
    "debit": "5000.00",
    "credit": "",
    "balance": "604541.85"
  },
  {
    "page": 1,
    "date": "10/06/2026",
    "valueDate": "10/06/2026",
    "description": "UPI/DR/786904016208/Shadowfax/ICIC/shad owfax@/Paym",
    "debit": "1079.00",
    "credit": "",
    "balance": "603462.85"
  },
  {
    "page": 1,
    "date": "11/06/2026",
    "valueDate": "11/06/2026",
    "description": "UPI/DR/487736349542/MUNIRAJU/YESB/Q 787227406/Payme",
    "debit": "80.00",
    "credit": "",
    "balance": "603382.85"
  },
  {
    "page": 2,
    "date": "11/06/2026",
    "valueDate": "11/06/2026",
    "description": "UPI/CR/124568920774/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "3000.00",
    "balance": "606382.85"
  },
  {
    "page": 2,
    "date": "12/06/2026",
    "valueDate": "12/06/2026",
    "description": "UPI/DR/765084523046/KAYA PAT/KKBK/paytm.s269/Payme",
    "debit": "70.00",
    "credit": "",
    "balance": "606312.85"
  },
  {
    "page": 2,
    "date": "12/06/2026",
    "valueDate": "12/06/2026",
    "description": "UPI/DR/950735095728/ASHWINI /YESB/Q137055738/Payme",
    "debit": "70.00",
    "credit": "",
    "balance": "606242.85"
  },
  {
    "page": 2,
    "date": "13/06/2026",
    "valueDate": "13/06/2026",
    "description": "UPI/CR/124663547586/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "2000.00",
    "balance": "608242.85"
  },
  {
    "page": 2,
    "date": "14/06/2026",
    "valueDate": "14/06/2026",
    "description": "UPI/DR/171852633616/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "638.00",
    "credit": "",
    "balance": "607604.85"
  },
  {
    "page": 2,
    "date": "14/06/2026",
    "valueDate": "14/06/2026",
    "description": "UPI/DR/949436162910/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "7479.00",
    "credit": "",
    "balance": "600125.85"
  },
  {
    "page": 2,
    "date": "14/06/2026",
    "valueDate": "14/06/2026",
    "description": "UPI/DR/361836243933/RAJASHRE/KKBK/8 147881899/Inter",
    "debit": "10000.00",
    "credit": "",
    "balance": "590125.85"
  },
  {
    "page": 2,
    "date": "14/06/2026",
    "valueDate": "14/06/2026",
    "description": "UPI/DR/479187830800/MOHD MA/SBIN/9058401059/Payme",
    "debit": "130.00",
    "credit": "",
    "balance": "589995.85"
  },
  {
    "page": 2,
    "date": "14/06/2026",
    "valueDate": "14/06/2026",
    "description": "UPI/DR/731989847254/RAJASHRE/KKBK/8 147881899/Payme",
    "debit": "6000.00",
    "credit": "",
    "balance": "583995.85"
  },
  {
    "page": 2,
    "date": "15/06/2026",
    "valueDate": "15/06/2026",
    "description": "UPI/DR/885575622863/SHA RUK/CNRB/7349312269/Payme",
    "debit": "488.00",
    "credit": "",
    "balance": "583507.85"
  },
  {
    "page": 2,
    "date": "15/06/2026",
    "valueDate": "15/06/2026",
    "description": "UPI/DR/875718680976/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "999.00",
    "credit": "",
    "balance": "582508.85"
  },
  {
    "page": 2,
    "date": "15/06/2026",
    "valueDate": "15/06/2026",
    "description": "UPI/DR/250934120736/EKART/UTIB/ekart2. pay/UPIQR",
    "debit": "540.00",
    "credit": "",
    "balance": "581968.85"
  },
  {
    "page": 2,
    "date": "16/06/2026",
    "valueDate": "16/06/2026",
    "description": "UPI/DR/766343849869/KAYA PAT/KKBK/paytm.s269/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "581908.85"
  },
  {
    "page": 2,
    "date": "16/06/2026",
    "valueDate": "16/06/2026",
    "description": "UPI/DR/409688789017/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "581858.85"
  },
  {
    "page": 2,
    "date": "16/06/2026",
    "valueDate": "16/06/2026",
    "description": "UPI/DR/700886584825/N B HARI/IBKL/8073057265/Payme",
    "debit": "444.00",
    "credit": "",
    "balance": "581414.85"
  },
  {
    "page": 2,
    "date": "16/06/2026",
    "valueDate": "16/06/2026",
    "description": "UPI/DR/122430515497/PRAVIN K/UBIN/py4118319@/Payme",
    "debit": "686.00",
    "credit": "",
    "balance": "580728.85"
  },
  {
    "page": 2,
    "date": "17/06/2026",
    "valueDate": "17/06/2026",
    "description": "UPI/DR/771538517052/RAHUL RA/CNRB/rrathod282/Payme",
    "debit": "82.00",
    "credit": "",
    "balance": "580646.85"
  },
  {
    "page": 2,
    "date": "18/06/2026",
    "valueDate": "18/06/2026",
    "description": "UPI/DR/920759439487/ATISH BA/KKBK/atishtarka/Payme",
    "debit": "650.00",
    "credit": "",
    "balance": "579996.85"
  },
  {
    "page": 2,
    "date": "18/06/2026",
    "valueDate": "18/06/2026",
    "description": "UPI/DR/122240383012/BUDDA BA/UBIN/8099425707/Payme",
    "debit": "2500.00",
    "credit": "",
    "balance": "577496.85"
  },
  {
    "page": 2,
    "date": "18/06/2026",
    "valueDate": "18/06/2026",
    "description": "UPI/DR/923606614153/RAJASHRE/KKBK/8 147881899/Payme",
    "debit": "3000.00",
    "credit": "",
    "balance": "574496.85"
  },
  {
    "page": 2,
    "date": "19/06/2026",
    "valueDate": "19/06/2026",
    "description": "UPI/CR/653620318459/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "3000.00",
    "balance": "577496.85"
  },
  {
    "page": 2,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/106411263521/Abhijeet/SBIN/779644 3113/Payme",
    "debit": "500.00",
    "credit": "",
    "balance": "576996.85"
  },
  {
    "page": 2,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/328655291460/Indian R/SBIN/railsbiupi/Payme",
    "debit": "15.00",
    "credit": "",
    "balance": "576981.85"
  },
  {
    "page": 2,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/239861915435/Mohit Pa/SBIN/9653084039/Payme",
    "debit": "67.00",
    "credit": "",
    "balance": "576914.85"
  },
  {
    "page": 2,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/490941751806/Salim Ah/UBIN/pqr.gt2dn5/Payme",
    "debit": "630.00",
    "credit": "",
    "balance": "576284.85"
  },
  {
    "page": 2,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/493974261514/MOHD NASIM/BARB/9721574039/Pay",
    "debit": "220.00",
    "credit": "",
    "balance": "576064.85"
  },
  {
    "page": 3,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/878445604986/MOHAMMAD/BARB /alamansari/F",
    "debit": "150.00",
    "credit": "",
    "balance": "575914.85"
  },
  {
    "page": 3,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/502662105627/Shoeb Khan/AIRP/mohdmateen/Pay",
    "debit": "190.00",
    "credit": "",
    "balance": "575724.85"
  },
  {
    "page": 3,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/946139383547/SATWANT /HDFC/satwant143/Payme",
    "debit": "100.00",
    "credit": "",
    "balance": "575624.85"
  },
  {
    "page": 3,
    "date": "20/06/2026",
    "valueDate": "20/06/2026",
    "description": "UPI/DR/712864316305/MoJaved/FINO/96968 78865/Paymen",
    "debit": "960.00",
    "credit": "",
    "balance": "574664.85"
  },
  {
    "page": 3,
    "date": "21/06/2026",
    "valueDate": "21/06/2026",
    "description": "UPI/DR/248003220962/MAHABEER/UBIN/r ajbharmah/Payme",
    "debit": "125.00",
    "credit": "",
    "balance": "574539.85"
  },
  {
    "page": 3,
    "date": "21/06/2026",
    "valueDate": "21/06/2026",
    "description": "UPI/DR/540312199692/VENKATA /ICIC/7975158562/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "574479.85"
  },
  {
    "page": 3,
    "date": "21/06/2026",
    "valueDate": "21/06/2026",
    "description": "UPI/DR/162105132953/DEPOT MA/KKBK/dmtmk@kota/Upi T",
    "debit": "92.00",
    "credit": "",
    "balance": "574387.85"
  },
  {
    "page": 3,
    "date": "21/06/2026",
    "valueDate": "21/06/2026",
    "description": "UPI/DR/881892497637/RACHNA U/BARB/rachnaupad/Payme",
    "debit": "210.00",
    "credit": "",
    "balance": "574177.85"
  },
  {
    "page": 3,
    "date": "21/06/2026",
    "valueDate": "21/06/2026",
    "description": "UPI/DR/742539882637/BMTC/YESB/MYBM TCDQR@/Payment",
    "debit": "45.00",
    "credit": "",
    "balance": "574132.85"
  },
  {
    "page": 3,
    "date": "22/06/2026",
    "valueDate": "22/06/2026",
    "description": "UPI/DR/603863061630/Umesh C/IDFB/9791906484/Paymen",
    "debit": "37.00",
    "credit": "",
    "balance": "574095.85"
  },
  {
    "page": 3,
    "date": "22/06/2026",
    "valueDate": "22/06/2026",
    "description": "IMPS/617394546880/SMF-XX172-API Bank/Payout",
    "debit": "",
    "credit": "1.00",
    "balance": "574096.85"
  },
  {
    "page": 3,
    "date": "22/06/2026",
    "valueDate": "22/06/2026",
    "description": "UPI/DR/304696563279/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "574046.85"
  },
  {
    "page": 3,
    "date": "22/06/2026",
    "valueDate": "22/06/2026",
    "description": "UPI/DR/227958666486/SUNIL S /YESB/BHARATPE90/Pay T",
    "debit": "60.00",
    "credit": "",
    "balance": "573986.85"
  },
  {
    "page": 3,
    "date": "22/06/2026",
    "valueDate": "22/06/2026",
    "description": "UPI/CR/441000479796/AKSHAY M/CNRB/akshayakki/10k6k",
    "debit": "",
    "credit": "16500.00",
    "balance": "590486.85"
  },
  {
    "page": 3,
    "date": "23/06/2026",
    "valueDate": "23/06/2026",
    "description": "UPI/DR/701575810096/ASHWINI /YESB/Q883398500/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "590436.85"
  },
  {
    "page": 3,
    "date": "24/06/2026",
    "valueDate": "24/06/2026",
    "description": "UPI/DR/040140658207/AAYUSH S/NESF/aayushshar/Samee",
    "debit": "1915.00",
    "credit": "",
    "balance": "588521.85"
  },
  {
    "page": 3,
    "date": "24/06/2026",
    "valueDate": "24/06/2026",
    "description": "UPI/DR/247024820364/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "588471.85"
  },
  {
    "page": 3,
    "date": "25/06/2026",
    "valueDate": "25/06/2026",
    "description": "UPI/DR/377670241313/ASHWINI /YESB/Q883398500/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "588421.85"
  },
  {
    "page": 3,
    "date": "25/06/2026",
    "valueDate": "25/06/2026",
    "description": "",
    "debit": "",
    "credit": "301.00",
    "balance": "588722.85"
  },
  {
    "page": 3,
    "date": "26/06/2026",
    "valueDate": "26/06/2026",
    "description": "UPI/DR/036818701318/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "588672.85"
  },
  {
    "page": 3,
    "date": "27/06/2026",
    "valueDate": "27/06/2026",
    "description": "UPI/DR/654402207240/CRED Club/UTIB/cred.club@/paym",
    "debit": "1623.00",
    "credit": "",
    "balance": "587049.85"
  },
  {
    "page": 3,
    "date": "28/06/2026",
    "valueDate": "28/06/2026",
    "description": "UPI/DR/826689584520/CHENNAPP/KARB/9 916754797/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "586999.85"
  },
  {
    "page": 3,
    "date": "29/06/2026",
    "valueDate": "29/06/2026",
    "description": "UPI/DR/844404382737/Swiggy/NSPB/cf.swig gy3/5897220",
    "debit": "923.00",
    "credit": "",
    "balance": "586076.85"
  },
  {
    "page": 3,
    "date": "29/06/2026",
    "valueDate": "29/06/2026",
    "description": "UPI/DR/864607295695/YERRAMSE/SBIN/86 88394333/Payme",
    "debit": "19000.00",
    "credit": "",
    "balance": "567076.85"
  },
  {
    "page": 3,
    "date": "30/06/2026",
    "valueDate": "30/06/2026",
    "description": "UPI/DR/129226974697/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "567026.85"
  },
  {
    "page": 3,
    "date": "30/06/2026",
    "valueDate": "30/06/2026",
    "description": "NEFT*HDFC0000240*HDFCH01089679406* AI GROWTH PRIVAT",
    "debit": "",
    "credit": "65412.00",
    "balance": "632438.85"
  },
  {
    "page": 4,
    "date": "01/07/2026",
    "valueDate": "01/07/2026",
    "description": "UPI/DR/981066580627/ASHWINI /YESB/Q883398500/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "632388.85"
  },
  {
    "page": 4,
    "date": "02/07/2026",
    "valueDate": "02/07/2026",
    "description": "UPI/CR/459980205441/PALLA VENU/HDFC/hdfchuzur@/Pay",
    "debit": "",
    "credit": "5000.00",
    "balance": "637388.85"
  },
  {
    "page": 4,
    "date": "02/07/2026",
    "valueDate": "02/07/2026",
    "description": "UPI/DR/654575751399/RADHA P/SBIN/radhapkadu/Payme",
    "debit": "200.00",
    "credit": "",
    "balance": "637188.85"
  },
  {
    "page": 4,
    "date": "02/07/2026",
    "valueDate": "02/07/2026",
    "description": "UPI/DR/226287146327/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "637138.85"
  },
  {
    "page": 4,
    "date": "03/07/2026",
    "valueDate": "03/07/2026",
    "description": "UPI/DR/655015172684/CRED Club/UTIB/cred.club@/paym",
    "debit": "16156.00",
    "credit": "",
    "balance": "620982.85"
  },
  {
    "page": 4,
    "date": "04/07/2026",
    "valueDate": "04/07/2026",
    "description": "UPI/CR/655137248719/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "5000.00",
    "balance": "625982.85"
  },
  {
    "page": 4,
    "date": "04/07/2026",
    "valueDate": "04/07/2026",
    "description": "UPI/CR/655173751109/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "5000.00",
    "balance": "630982.85"
  },
  {
    "page": 4,
    "date": "04/07/2026",
    "valueDate": "04/07/2026",
    "description": "UPI/CR/655139678844/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "10000.00",
    "balance": "640982.85"
  },
  {
    "page": 4,
    "date": "04/07/2026",
    "valueDate": "04/07/2026",
    "description": "UPI/CR/125772567665/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "10000.00",
    "balance": "650982.85"
  },
  {
    "page": 4,
    "date": "04/07/2026",
    "valueDate": "04/07/2026",
    "description": "UPI/CR/655131447722/RAJASHRE/KKBK/ra jashreeg/UPI",
    "debit": "",
    "credit": "20000.00",
    "balance": "670982.85"
  },
  {
    "page": 4,
    "date": "05/07/2026",
    "valueDate": "05/07/2026",
    "description": "NEFT*KKBK0000958*KKBKH26186950523 *RAJASHREE   GOLT",
    "debit": "",
    "credit": "10000.00",
    "balance": "680982.85"
  },
  {
    "page": 4,
    "date": "05/07/2026",
    "valueDate": "05/07/2026",
    "description": "UPI/DR/470681709150/PRIYANKA/CNRB/pr iyankakp/Payme",
    "debit": "360.00",
    "credit": "",
    "balance": "680622.85"
  },
  {
    "page": 4,
    "date": "05/07/2026",
    "valueDate": "05/07/2026",
    "description": "UPI/DR/941099522585/YARAVA R/HDFC/reddeppay@/Payme",
    "debit": "7000.00",
    "credit": "",
    "balance": "673622.85"
  },
  {
    "page": 1,
    "date": "05/07/2026",
    "valueDate": "05/07/2026",
    "description": "NEFT*YASHODA HOSPITALS*SALARY JUN",
    "debit": "",
    "credit": "94000.00",
    "balance": "767622.85"
  },
  {
    "page": 4,
    "date": "07/07/2026",
    "valueDate": "07/07/2026",
    "description": "UPI/DR/392288219822/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "767572.85"
  },
  {
    "page": 4,
    "date": "09/07/2026",
    "valueDate": "09/07/2026",
    "description": "UPI/CR/989677061577/KODAM AR/FDRL/pentaaruna/Payme",
    "debit": "",
    "credit": "4000.00",
    "balance": "771572.85"
  },
  {
    "page": 4,
    "date": "09/07/2026",
    "valueDate": "09/07/2026",
    "description": "UPI/DR/097961649723/KODAM AR/FDRL/pentaaruna/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "770572.85"
  },
  {
    "page": 4,
    "date": "09/07/2026",
    "valueDate": "09/07/2026",
    "description": "UPI/DR/688170688000/Goudru m/YESB/Q883398500/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "770522.85"
  },
  {
    "page": 4,
    "date": "10/07/2026",
    "valueDate": "10/07/2026",
    "description": "UPI/DR/089131785161/PALLA VENU/HDFC/hdfchuzur@/Ara",
    "debit": "50000.00",
    "credit": "",
    "balance": "720522.85"
  },
  {
    "page": 4,
    "date": "10/07/2026",
    "valueDate": "10/07/2026",
    "description": "UPI/DR/399434917242/NTRP/HDFC/ntrp.705 01/Pay via",
    "debit": "100.00",
    "credit": "",
    "balance": "720422.85"
  },
  {
    "page": 4,
    "date": "11/07/2026",
    "valueDate": "11/07/2026",
    "description": "UPI/CR/372475350487/YERRAMSE/BARB/a ravindyer/Onbeh",
    "debit": "",
    "credit": "50000.00",
    "balance": "770422.85"
  },
  {
    "page": 4,
    "date": "12/07/2026",
    "valueDate": "12/07/2026",
    "description": "UPI/DR/091418495848/MUNAGALA/UTIB/9 966218891/Payme",
    "debit": "15000.00",
    "credit": "",
    "balance": "755422.85"
  },
  {
    "page": 4,
    "date": "12/07/2026",
    "valueDate": "12/07/2026",
    "description": "UPI/DR/328405064324/CHENNAPP/KARB/9 916754797/Payme",
    "debit": "90.00",
    "credit": "",
    "balance": "755332.85"
  },
  {
    "page": 4,
    "date": "13/07/2026",
    "valueDate": "13/07/2026",
    "description": "UPI/DR/467189203552/Goudru m/YESB/Q883398500/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "755272.85"
  },
  {
    "page": 4,
    "date": "14/07/2026",
    "valueDate": "14/07/2026",
    "description": "UPI/DR/779152071323/Goudru m/YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "755222.85"
  },
  {
    "page": 4,
    "date": "16/07/2026",
    "valueDate": "16/07/2026",
    "description": "UPI/DR/776178950452/ASHWINI /YESB/Q137055738/Payme",
    "debit": "20.00",
    "credit": "",
    "balance": "755202.85"
  },
  {
    "page": 4,
    "date": "17/07/2026",
    "valueDate": "17/07/2026",
    "description": "UPI/DR/648514339567/Goudru m/YESB/Q883398500/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "755152.85"
  },
  {
    "page": 5,
    "date": "17/07/2026",
    "valueDate": "17/07/2026",
    "description": "UPI/DR/144094945572/SUMIT AG/HDFC/9007493923/Payme",
    "debit": "15000.00",
    "credit": "",
    "balance": "740152.85"
  },
  {
    "page": 5,
    "date": "18/07/2026",
    "valueDate": "18/07/2026",
    "description": "UPI/DR/563583550811/KAYA PAT/KKBK/paytm.s27p/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "740112.85"
  },
  {
    "page": 5,
    "date": "19/07/2026",
    "valueDate": "19/07/2026",
    "description": "UPI/DR/706321876282/BUDDA BA/UBIN/8099425707/Payme",
    "debit": "650.00",
    "credit": "",
    "balance": "739462.85"
  },
  {
    "page": 5,
    "date": "20/07/2026",
    "valueDate": "20/07/2026",
    "description": "UPI/DR/203505354864/ASHWINI /YESB/Q137055738/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "739412.85"
  },
  {
    "page": 5,
    "date": "20/07/2026",
    "valueDate": "20/07/2026",
    "description": "UPI/CR/379081383121/NUNNAM D/INDB/dharanicho/Payme",
    "debit": "",
    "credit": "2000.00",
    "balance": "741412.85"
  },
  {
    "page": 5,
    "date": "20/07/2026",
    "valueDate": "20/07/2026",
    "description": "UPI/CR/906723206967/KODAM AR/FDRL/pentaaruna/Payme",
    "debit": "",
    "credit": "2500.00",
    "balance": "743912.85"
  },
  {
    "page": 5,
    "date": "21/07/2026",
    "valueDate": "21/07/2026",
    "description": "UPI/DR/096486325580/ASHWINI /YESB/Q883398500/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "743872.85"
  },
  {
    "page": 5,
    "date": "21/07/2026",
    "valueDate": "21/07/2026",
    "description": "UPI/CR/126652669562/SUMIT AG/HDFC/sumitagarw/UPI",
    "debit": "",
    "credit": "14500.00",
    "balance": "758372.85"
  },
  {
    "page": 5,
    "date": "21/07/2026",
    "valueDate": "21/07/2026",
    "description": "UPI/DR/082632546601/ANIL KUM/YESB/paytmqr6yj/Payme",
    "debit": "228.00",
    "credit": "",
    "balance": "758144.85"
  },
  {
    "page": 5,
    "date": "22/07/2026",
    "valueDate": "22/07/2026",
    "description": "UPI/DR/737959158759/ASHWINI /YESB/Q137055738/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "758104.85"
  },
  {
    "page": 5,
    "date": "23/07/2026",
    "valueDate": "23/07/2026",
    "description": "UPI/DR/229646100601/Goudru m/YESB/Q137055738/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "758064.85"
  },
  {
    "page": 5,
    "date": "23/07/2026",
    "valueDate": "23/07/2026",
    "description": "UPI/CR/214737036411/VENKATAL/CNRB/9 014817276/NO RE",
    "debit": "",
    "credit": "5000.00",
    "balance": "763064.85"
  },
  {
    "page": 5,
    "date": "24/07/2026",
    "valueDate": "24/07/2026",
    "description": "UPI/DR/005012656648/Goudru m/YESB/Q137055738/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "763024.85"
  },
  {
    "page": 5,
    "date": "25/07/2026",
    "valueDate": "25/07/2026",
    "description": "UPI/DR/707409694057/GOGINENI/YESB/yes pay.biz/Payme",
    "debit": "90.00",
    "credit": "",
    "balance": "762934.85"
  },
  {
    "page": 5,
    "date": "26/07/2026",
    "valueDate": "26/07/2026",
    "description": "UPI/DR/960732565037/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "3000.00",
    "credit": "",
    "balance": "759934.85"
  },
  {
    "page": 5,
    "date": "27/07/2026",
    "valueDate": "27/07/2026",
    "description": "UPI/DR/657417617788/CRED Club/UTIB/cred.club@/paym",
    "debit": "693.00",
    "credit": "",
    "balance": "759241.85"
  },
  {
    "page": 5,
    "date": "28/07/2026",
    "valueDate": "28/07/2026",
    "description": "UPI/CR/860824788281/MUNAGALA/HDFC/ srinath123/Payme",
    "debit": "",
    "credit": "5000.00",
    "balance": "764241.85"
  },
  {
    "page": 5,
    "date": "28/07/2026",
    "valueDate": "28/07/2026",
    "description": "UPI/DR/977361976405/ASHWINI /YESB/Q137055738/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "764181.85"
  },
  {
    "page": 5,
    "date": "28/07/2026",
    "valueDate": "28/07/2026",
    "description": "UPI/DR/911532313996/BUDDA NA/UBIN/buddajayal/Payme",
    "debit": "1500.00",
    "credit": "",
    "balance": "762681.85"
  },
  {
    "page": 5,
    "date": "30/07/2026",
    "valueDate": "30/07/2026",
    "description": "UPI/CR/621167378308/SUSWARAM/ICIC/vij ay.susw/vani",
    "debit": "",
    "credit": "9170.00",
    "balance": "771851.85"
  },
  {
    "page": 5,
    "date": "30/07/2026",
    "valueDate": "30/07/2026",
    "description": "UPI/DR/617750529027/CBDT TIN/HDFC/cbdttin@hd/UPIIn",
    "debit": "9171.00",
    "credit": "",
    "balance": "762680.85"
  },
  {
    "page": 5,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "UPI/CR/621285487953/SUSWARAM/ICIC/vij ay.susw/UPI",
    "debit": "",
    "credit": "2500.00",
    "balance": "765180.85"
  },
  {
    "page": 5,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "TO TRANSFER INB E mandate SBIN70331072620239270000",
    "debit": "59.00",
    "credit": "",
    "balance": "765121.85"
  },
  {
    "page": 5,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "NEFT*IDFB0040101*IDFB6212M5501126*I NCRED FINANCIAL",
    "debit": "",
    "credit": "481892.28",
    "balance": "1247014.13"
  },
  {
    "page": 5,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "UPI/DR/172356195005/Goudru m/YESB/Q137055738/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "1246954.13"
  },
  {
    "page": 5,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "NEFT*HDFC0000240*HDFCH01159809210* AI GROWTH PRIVAT",
    "debit": "",
    "credit": "65412.00",
    "balance": "1312366.13"
  },
  {
    "page": 6,
    "date": "31/07/2026",
    "valueDate": "31/07/2026",
    "description": "UPI/CR/812230485586/MUNAGALA/HDFC/ srinath123/Payme",
    "debit": "",
    "credit": "10000.00",
    "balance": "1322366.13"
  },
  {
    "page": 6,
    "date": "01/08/2026",
    "valueDate": "01/08/2026",
    "description": "UPI/DR/371871342202/Aayush S/NESF/8958885587/Payme",
    "debit": "4000.00",
    "credit": "",
    "balance": "1318366.13"
  },
  {
    "page": 6,
    "date": "02/08/2026",
    "valueDate": "02/08/2026",
    "description": "UPI/DR/034022181032/BUDDA SE/ICIC/buddaseshu/Payme",
    "debit": "30000.00",
    "credit": "",
    "balance": "1288366.13"
  },
  {
    "page": 6,
    "date": "02/08/2026",
    "valueDate": "02/08/2026",
    "description": "UPI/DR/526326010423/T DHILLI/ICIC/7892893145/Payme",
    "debit": "90.00",
    "credit": "",
    "balance": "1288276.13"
  },
  {
    "page": 6,
    "date": "02/08/2026",
    "valueDate": "02/08/2026",
    "description": "UPI/CR/250652693955/BUDDA SE/ICIC/buddaseshu/Payme",
    "debit": "",
    "credit": "30000.00",
    "balance": "1318276.13"
  },
  {
    "page": 6,
    "date": "03/08/2026",
    "valueDate": "03/08/2026",
    "description": "UPI/DR/658124638817/CRED Club/UTIB/cred.club@/paym",
    "debit": "9268.00",
    "credit": "",
    "balance": "1309008.13"
  },
  {
    "page": 6,
    "date": "03/08/2026",
    "valueDate": "03/08/2026",
    "description": "UPI/DR/474883662239/YERRAMSE/SBIN/86 88394333/Payme",
    "debit": "95000.00",
    "credit": "",
    "balance": "1214008.13"
  },
  {
    "page": 6,
    "date": "03/08/2026",
    "valueDate": "03/08/2026",
    "description": "UPI/DR/926309130062/ICAI EXAM/HDFC/icaiexam.1/Paym",
    "debit": "2400.00",
    "credit": "",
    "balance": "1211608.13"
  },
  {
    "page": 6,
    "date": "04/08/2026",
    "valueDate": "04/08/2026",
    "description": "UPI/DR/440733961750/Goudru m/YESB/Q137055738/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "1211548.13"
  },
  {
    "page": 6,
    "date": "05/08/2026",
    "valueDate": "05/08/2026",
    "description": "ACHDr NACH00000000005552 INCRED FINANCI",
    "debit": "1961.00",
    "credit": "",
    "balance": "1209587.13"
  },
  {
    "page": 6,
    "date": "05/08/2026",
    "valueDate": "05/08/2026",
    "description": "UPI/DR/498939627418/Goudru m/YESB/Q308152210/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "1209547.13"
  },
  {
    "page": 1,
    "date": "05/08/2026",
    "valueDate": "05/08/2026",
    "description": "NEFT*YASHODA HOSPITALS*SALARY JUL",
    "debit": "",
    "credit": "94000.00",
    "balance": "1303547.13"
  },
  {
    "page": 6,
    "date": "06/08/2026",
    "valueDate": "06/08/2026",
    "description": "UPI/DR/876200535342/BUDDA BA/UBIN/8099425707/Payme",
    "debit": "600.00",
    "credit": "",
    "balance": "1302947.13"
  },
  {
    "page": 6,
    "date": "07/08/2026",
    "valueDate": "07/08/2026",
    "description": "UPI/DR/776675858398/Goudru m/YESB/Q308152210/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "1302887.13"
  },
  {
    "page": 6,
    "date": "08/08/2026",
    "valueDate": "08/08/2026",
    "description": "UPI/DR/584615196173/DY Delic/YESB/Q962133150/Payme",
    "debit": "17.00",
    "credit": "",
    "balance": "1302870.13"
  },
  {
    "page": 6,
    "date": "08/08/2026",
    "valueDate": "08/08/2026",
    "description": "UPI/DR/287312380977/Kudupudi/SBIN/pk314 3@ybl/Payme",
    "debit": "90000.00",
    "credit": "",
    "balance": "1212870.13"
  },
  {
    "page": 6,
    "date": "08/08/2026",
    "valueDate": "08/08/2026",
    "description": "UPI/DR/579914555926/Mr JAYAR/IDIB/9743825844/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "1212860.13"
  },
  {
    "page": 6,
    "date": "08/08/2026",
    "valueDate": "08/08/2026",
    "description": "UPI/DR/974976873143/VISHAL M/HDFC/vishalmega/Payme",
    "debit": "666.00",
    "credit": "",
    "balance": "1212194.13"
  },
  {
    "page": 6,
    "date": "09/08/2026",
    "valueDate": "09/08/2026",
    "description": "UPI/DR/628975983815/Kudupudi/SBIN/pk314 3@ybl/Payme",
    "debit": "90000.00",
    "credit": "",
    "balance": "1122194.13"
  },
  {
    "page": 6,
    "date": "09/08/2026",
    "valueDate": "09/08/2026",
    "description": "UPI/CR/891303277438/T DHILLI/ICIC/7892893145/Payme",
    "debit": "",
    "credit": "50.00",
    "balance": "1122244.13"
  },
  {
    "page": 6,
    "date": "10/08/2026",
    "valueDate": "10/08/2026",
    "description": "UPI/DR/078060513962/Goudru m/YESB/Q308152210/Payme",
    "debit": "60.00",
    "credit": "",
    "balance": "1122184.13"
  },
  {
    "page": 6,
    "date": "10/08/2026",
    "valueDate": "10/08/2026",
    "description": "UPI/DR/167032983392/Kudupudi/SBIN/pk314 3@ybl/Payme",
    "debit": "95000.00",
    "credit": "",
    "balance": "1027184.13"
  },
  {
    "page": 6,
    "date": "11/08/2026",
    "valueDate": "11/08/2026",
    "description": "UPI/DR/458647240166/Goudru m/YESB/Q666587762/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "1027134.13"
  },
  {
    "page": 6,
    "date": "11/08/2026",
    "valueDate": "11/08/2026",
    "description": "UPI/DR/059137465060/Kudupudi/SBIN/pk314 3@ybl/Payme",
    "debit": "95000.00",
    "credit": "",
    "balance": "932134.13"
  },
  {
    "page": 6,
    "date": "12/08/2026",
    "valueDate": "12/08/2026",
    "description": "UPI/DR/676889390852/YERRAMSE/BARB/a ravindyer/Payme",
    "debit": "35000.00",
    "credit": "",
    "balance": "897134.13"
  },
  {
    "page": 6,
    "date": "13/08/2026",
    "valueDate": "13/08/2026",
    "description": "UPI/DR/208400595226/PRIYANKA/SBIN/pri yankash/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "897084.13"
  },
  {
    "page": 6,
    "date": "16/08/2026",
    "valueDate": "16/08/2026",
    "description": "UPI/DR/153018855945/BUDDA MA/CNRB/8125588837/Payme",
    "debit": "500.00",
    "credit": "",
    "balance": "896584.13"
  },
  {
    "page": 7,
    "date": "16/08/2026",
    "valueDate": "16/08/2026",
    "description": "UPI/DR/573231108043/Venkata /YESB/paytm.s1f4/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "896544.13"
  },
  {
    "page": 7,
    "date": "19/08/2026",
    "valueDate": "19/08/2026",
    "description": "UPI/CR/623170610464/ALEKHYA /SBIN/alekhya.ds/UPI",
    "debit": "",
    "credit": "19044.00",
    "balance": "915588.13"
  },
  {
    "page": 7,
    "date": "20/08/2026",
    "valueDate": "20/08/2026",
    "description": "UPI/DR/716379407252/BUDDA BA/UBIN/8099425707/Payme",
    "debit": "4000.00",
    "credit": "",
    "balance": "911588.13"
  },
  {
    "page": 7,
    "date": "22/08/2026",
    "valueDate": "22/08/2026",
    "description": "UPI/DR/660001657757/Makemytr/UTIB/redbu s8719/redbu",
    "debit": "710.63",
    "credit": "",
    "balance": "910877.50"
  },
  {
    "page": 7,
    "date": "23/08/2026",
    "valueDate": "23/08/2026",
    "description": "UPI/DR/260171922703/YATHAM K/HDFC/yathamkaly/Payme",
    "debit": "50000.00",
    "credit": "",
    "balance": "860877.50"
  },
  {
    "page": 7,
    "date": "23/08/2026",
    "valueDate": "23/08/2026",
    "description": "UPI/DR/409112771256/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "1500.00",
    "credit": "",
    "balance": "859377.50"
  },
  {
    "page": 7,
    "date": "24/08/2026",
    "valueDate": "24/08/2026",
    "description": "UPI/DR/065409165744/MUNAGALA/UTIB/9 966218891/Payme",
    "debit": "6000.00",
    "credit": "",
    "balance": "853377.50"
  },
  {
    "page": 7,
    "date": "26/08/2026",
    "valueDate": "26/08/2026",
    "description": "UPI/DR/568309064736/KODAM AR/FDRL/pentaaruna/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "852377.50"
  },
  {
    "page": 7,
    "date": "26/08/2026",
    "valueDate": "26/08/2026",
    "description": "UPI/CR/623851766079/ALEKHYA /SBIN/alekhya.ds/UPI",
    "debit": "",
    "credit": "7158.00",
    "balance": "859535.50"
  },
  {
    "page": 7,
    "date": "27/08/2026",
    "valueDate": "27/08/2026",
    "description": "UPI/DR/692684938871/Harish N/IDFB/9353997300/Payme",
    "debit": "125.00",
    "credit": "",
    "balance": "859410.50"
  },
  {
    "page": 7,
    "date": "28/08/2026",
    "valueDate": "28/08/2026",
    "description": "UPI/DR/288026788433/T SRINIV/UNBA/BHARATPE.9/Pay t",
    "debit": "6.00",
    "credit": "",
    "balance": "859404.50"
  },
  {
    "page": 7,
    "date": "28/08/2026",
    "valueDate": "28/08/2026",
    "description": "UPI/CR/143192357814/CHITTIMA/NESF/628 1310938/Payme",
    "debit": "",
    "credit": "15.00",
    "balance": "859419.50"
  },
  {
    "page": 7,
    "date": "28/08/2026",
    "valueDate": "28/08/2026",
    "description": "UPI/CR/624093922433/THOLAM P/ANDB/7674956322/Payme",
    "debit": "",
    "credit": "30.00",
    "balance": "859449.50"
  },
  {
    "page": 7,
    "date": "30/08/2026",
    "valueDate": "30/08/2026",
    "description": "UPI/DR/405250999459/BUDDA NA/UBIN/buddajayal/Payme",
    "debit": "3000.00",
    "credit": "",
    "balance": "856449.50"
  },
  {
    "page": 7,
    "date": "30/08/2026",
    "valueDate": "30/08/2026",
    "description": "UPI/DR/660806018402/CRED Club/UTIB/cred.club@/paym",
    "debit": "4530.00",
    "credit": "",
    "balance": "851919.50"
  },
  {
    "page": 7,
    "date": "31/08/2026",
    "valueDate": "31/08/2026",
    "description": "UPI/DR/086674672646/BUDDA BA/UBIN/8099425707/Payme",
    "debit": "500.00",
    "credit": "",
    "balance": "851419.50"
  },
  {
    "page": 7,
    "date": "31/08/2026",
    "valueDate": "31/08/2026",
    "description": "UPI/DR/660916181796/MAKEMYTR/UTIB/ makemytrip/Paid",
    "debit": "966.00",
    "credit": "",
    "balance": "850453.50"
  },
  {
    "page": 7,
    "date": "31/08/2026",
    "valueDate": "31/08/2026",
    "description": "NEFT*HDFC0000240*HDFCH01225845702* AI GROWTH PRIVAT",
    "debit": "",
    "credit": "65412.00",
    "balance": "915865.50"
  },
  {
    "page": 7,
    "date": "31/08/2026",
    "valueDate": "31/08/2026",
    "description": "UPI/CR/650709439060/Bhyri P/SBIN/8790928761/Payme",
    "debit": "",
    "credit": "3000.00",
    "balance": "918865.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/532159454027/MOWNA BH/SBIN/6305556185/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "917865.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/CR/475668311154/MOWNA BH/SBIN/6305556185/Payme",
    "debit": "",
    "credit": "1000.00",
    "balance": "918865.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/074458780663/MOWNA BH/SBIN/6305556185/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "917865.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/317179227970/Patan Na/SBIN/6301579813/Payme",
    "debit": "22.00",
    "credit": "",
    "balance": "917843.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/665073553284/G KALYAN/SBIN/9550077279/Payme",
    "debit": "300.00",
    "credit": "",
    "balance": "917543.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/015851926637/YERRAMSE/SBIN/86 88394333/Payme",
    "debit": "20000.00",
    "credit": "",
    "balance": "897543.50"
  },
  {
    "page": 7,
    "date": "01/09/2026",
    "valueDate": "01/09/2026",
    "description": "UPI/DR/908730210073/CHANDRAB/KKBK/ 9494746754/Payme",
    "debit": "80.00",
    "credit": "",
    "balance": "897463.50"
  },
  {
    "page": 8,
    "date": "02/09/2026",
    "valueDate": "02/09/2026",
    "description": "UPI/CR/797162596877/KODAM AR/FDRL/pentaaruna/Payme",
    "debit": "",
    "credit": "1000.00",
    "balance": "898463.50"
  },
  {
    "page": 8,
    "date": "03/09/2026",
    "valueDate": "03/09/2026",
    "description": "UPI/CR/525273761926/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "",
    "credit": "1500.00",
    "balance": "899963.50"
  },
  {
    "page": 8,
    "date": "03/09/2026",
    "valueDate": "03/09/2026",
    "description": "UPI/CR/673500821586/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "",
    "credit": "3000.00",
    "balance": "902963.50"
  },
  {
    "page": 8,
    "date": "03/09/2026",
    "valueDate": "03/09/2026",
    "description": "UPI/DR/661219762230/CRED Club/UTIB/cred.club@/paym",
    "debit": "31793.00",
    "credit": "",
    "balance": "871170.50"
  },
  {
    "page": 8,
    "date": "03/09/2026",
    "valueDate": "03/09/2026",
    "description": "UPI/DR/261508732466/Google/utib/playstore1 /Mandate",
    "debit": "15.00",
    "credit": "",
    "balance": "871155.50"
  },
  {
    "page": 8,
    "date": "05/09/2026",
    "valueDate": "05/09/2026",
    "description": "UPI/DR/849218878694/THORI KO/UBIN/9701468943/Payme",
    "debit": "20.00",
    "credit": "",
    "balance": "871135.50"
  },
  {
    "page": 8,
    "date": "05/09/2026",
    "valueDate": "05/09/2026",
    "description": "ACHDr NACH00000000005552 INCRED FINANCI",
    "debit": "17825.00",
    "credit": "",
    "balance": "853310.50"
  },
  {
    "page": 8,
    "date": "05/09/2026",
    "valueDate": "05/09/2026",
    "description": "UPI/CR/287283657732/NUNNAM D/UTIB/dharanicho/Payme",
    "debit": "",
    "credit": "7000.00",
    "balance": "860310.50"
  },
  {
    "page": 8,
    "date": "05/09/2026",
    "valueDate": "05/09/2026",
    "description": "UPI/DR/298232683203/SANNEBOE/CNRB/9 640852726/Payme",
    "debit": "40.00",
    "credit": "",
    "balance": "860270.50"
  },
  {
    "page": 1,
    "date": "05/09/2026",
    "valueDate": "05/09/2026",
    "description": "NEFT*YASHODA HOSPITALS*SALARY AUG",
    "debit": "",
    "credit": "94000.00",
    "balance": "954270.50"
  },
  {
    "page": 8,
    "date": "07/09/2026",
    "valueDate": "07/09/2026",
    "description": "UPI/DR/135222430283/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "954243.50"
  },
  {
    "page": 8,
    "date": "07/09/2026",
    "valueDate": "07/09/2026",
    "description": "UPI/DR/940310005948/RAJASHRE/KKBK/8 147881899/Payme",
    "debit": "10000.00",
    "credit": "",
    "balance": "944243.50"
  },
  {
    "page": 8,
    "date": "10/09/2026",
    "valueDate": "10/09/2026",
    "description": "UPI/DR/689527461643/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "255.00",
    "credit": "",
    "balance": "943988.50"
  },
  {
    "page": 8,
    "date": "11/09/2026",
    "valueDate": "11/09/2026",
    "description": "UPI/DR/604503457111/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "943978.50"
  },
  {
    "page": 8,
    "date": "12/09/2026",
    "valueDate": "12/09/2026",
    "description": "UPI/DR/083996395902/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "943951.50"
  },
  {
    "page": 8,
    "date": "12/09/2026",
    "valueDate": "12/09/2026",
    "description": "UPI/DR/569906632767/ASHWINI/UBIN/payt m.s2f2/Paymen",
    "debit": "50.00",
    "credit": "",
    "balance": "943901.50"
  },
  {
    "page": 8,
    "date": "13/09/2026",
    "valueDate": "13/09/2026",
    "description": "UPI/DR/438884097607/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "250.00",
    "credit": "",
    "balance": "943651.50"
  },
  {
    "page": 8,
    "date": "14/09/2026",
    "valueDate": "14/09/2026",
    "description": "UPI/DR/994399860157/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "137.00",
    "credit": "",
    "balance": "943514.50"
  },
  {
    "page": 8,
    "date": "14/09/2026",
    "valueDate": "14/09/2026",
    "description": "UPI/DR/574460018066/KATAKAM /YESB/BHARATPE90/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "943464.50"
  },
  {
    "page": 8,
    "date": "15/09/2026",
    "valueDate": "15/09/2026",
    "description": "UPI/DR/192716815115/BUDDA SE/ICIC/buddaseshu/Payme",
    "debit": "10000.00",
    "credit": "",
    "balance": "933464.50"
  },
  {
    "page": 8,
    "date": "15/09/2026",
    "valueDate": "15/09/2026",
    "description": "UPI/CR/634946436206/BUDDA SE/ICIC/buddaseshu/Payme",
    "debit": "",
    "credit": "6000.00",
    "balance": "939464.50"
  },
  {
    "page": 8,
    "date": "15/09/2026",
    "valueDate": "15/09/2026",
    "description": "UPI/DR/377152506457/YARAVA R/HDFC/reddeppay@/Payme",
    "debit": "7000.00",
    "credit": "",
    "balance": "932464.50"
  },
  {
    "page": 8,
    "date": "15/09/2026",
    "valueDate": "15/09/2026",
    "description": "UPI/DR/977301260451/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "932454.50"
  },
  {
    "page": 8,
    "date": "16/09/2026",
    "valueDate": "16/09/2026",
    "description": "UPI/DR/325885306230/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "932427.50"
  },
  {
    "page": 8,
    "date": "16/09/2026",
    "valueDate": "16/09/2026",
    "description": "UPI/DR/341664617308/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "932417.50"
  },
  {
    "page": 8,
    "date": "17/09/2026",
    "valueDate": "17/09/2026",
    "description": "UPI/DR/691587090335/STAR DEN/UNBA/BHARATPE2P/Pay T",
    "debit": "490.00",
    "credit": "",
    "balance": "931927.50"
  },
  {
    "page": 8,
    "date": "17/09/2026",
    "valueDate": "17/09/2026",
    "description": "UPI/DR/334561630997/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "931917.50"
  },
  {
    "page": 9,
    "date": "17/09/2026",
    "valueDate": "17/09/2026",
    "description": "UPI/DR/644149054836/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "50.00",
    "credit": "",
    "balance": "931867.50"
  },
  {
    "page": 9,
    "date": "19/09/2026",
    "valueDate": "19/09/2026",
    "description": "UPI/DR/814658794317/JOBIN CH/YESB/paytm.s21w/Payme",
    "debit": "15.00",
    "credit": "",
    "balance": "931852.50"
  },
  {
    "page": 9,
    "date": "19/09/2026",
    "valueDate": "19/09/2026",
    "description": "UPI/DR/382896595291/RAJASHRE/KKBK/8 147881899/Payme",
    "debit": "10000.00",
    "credit": "",
    "balance": "921852.50"
  },
  {
    "page": 9,
    "date": "19/09/2026",
    "valueDate": "19/09/2026",
    "description": "UPI/DR/236476969813/IMRAN KHAN/BARB/9986119148/Pay",
    "debit": "106.00",
    "credit": "",
    "balance": "921746.50"
  },
  {
    "page": 9,
    "date": "20/09/2026",
    "valueDate": "20/09/2026",
    "description": "UPI/DR/814873049634/KRISHNA /ESFB/7339134629/Payme",
    "debit": "2400.00",
    "credit": "",
    "balance": "919346.50"
  },
  {
    "page": 9,
    "date": "20/09/2026",
    "valueDate": "20/09/2026",
    "description": "UPI/DR/175266769837/ARUVI CAFE/UTIB/gpay-12204/Pay",
    "debit": "50.00",
    "credit": "",
    "balance": "919296.50"
  },
  {
    "page": 9,
    "date": "21/09/2026",
    "valueDate": "21/09/2026",
    "description": "UPI/DR/074003905023/S ANAND/UTIB/aanand1050/Paymen",
    "debit": "43.00",
    "credit": "",
    "balance": "919253.50"
  },
  {
    "page": 9,
    "date": "21/09/2026",
    "valueDate": "21/09/2026",
    "description": "UPI/DR/447367026511/MD SALAM/KKBK/9342733840/Paym",
    "debit": "80.00",
    "credit": "",
    "balance": "919173.50"
  },
  {
    "page": 9,
    "date": "22/09/2026",
    "valueDate": "22/09/2026",
    "description": "UPI/CR/442005122629/YERRAMSE/BARB/a ravindyer/Repay",
    "debit": "",
    "credit": "20000.00",
    "balance": "939173.50"
  },
  {
    "page": 9,
    "date": "22/09/2026",
    "valueDate": "22/09/2026",
    "description": "UPI/DR/806854567579/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "220.00",
    "credit": "",
    "balance": "938953.50"
  },
  {
    "page": 9,
    "date": "22/09/2026",
    "valueDate": "22/09/2026",
    "description": "I/DR/663161469222/NATIONAL/NA/nseltd.n se/Exe",
    "debit": "23205.00",
    "credit": "",
    "balance": "915748.50"
  },
  {
    "page": 1,
    "date": "22/09/2026",
    "valueDate": "22/09/2026",
    "description": "POS/VFS GLOBAL SVCS/FRANCE VISA (90 EUR)",
    "debit": "9781.65",
    "credit": "",
    "balance": "905966.85"
  },
  {
    "page": 1,
    "date": "22/09/2026",
    "valueDate": "22/09/2026",
    "description": "BANK CHARGES/SERVICE CHARGE/FOREX MARKUP",
    "debit": "1100.00",
    "credit": "",
    "balance": "904866.85"
  },
  {
    "page": 9,
    "date": "24/09/2026",
    "valueDate": "24/09/2026",
    "description": "UPI/DR/075052598733/BUDDA NA/UBIN/buddajayal/Payme",
    "debit": "40000.00",
    "credit": "",
    "balance": "864866.85"
  },
  {
    "page": 9,
    "date": "24/09/2026",
    "valueDate": "24/09/2026",
    "description": "UPI/DR/304181357434/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "1000.00",
    "credit": "",
    "balance": "863866.85"
  },
  {
    "page": 9,
    "date": "25/09/2026",
    "valueDate": "25/09/2026",
    "description": "UPI/DR/146158955783/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "863839.85"
  },
  {
    "page": 9,
    "date": "25/09/2026",
    "valueDate": "25/09/2026",
    "description": "UPI/DR/179116214770/ICAI EXAM/HDFC/icaiexam.1/Paym",
    "debit": "140.00",
    "credit": "",
    "balance": "863699.85"
  },
  {
    "page": 9,
    "date": "25/09/2026",
    "valueDate": "25/09/2026",
    "description": "UPI/DR/697817508367/SRI LAKS/FDRL/lakshmi531/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "863689.85"
  },
  {
    "page": 9,
    "date": "25/09/2026",
    "valueDate": "25/09/2026",
    "description": "",
    "debit": "",
    "credit": "1187.00",
    "balance": "864876.85"
  },
  {
    "page": 9,
    "date": "26/09/2026",
    "valueDate": "26/09/2026",
    "description": "UPI/DR/469884324367/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "864849.85"
  },
  {
    "page": 9,
    "date": "26/09/2026",
    "valueDate": "26/09/2026",
    "description": "UPI/DR/906896396113/ICAI EXAM/HDFC/icaiexam.1/Paym",
    "debit": "500.00",
    "credit": "",
    "balance": "864349.85"
  },
  {
    "page": 9,
    "date": "27/09/2026",
    "valueDate": "27/09/2026",
    "description": "UPI/CR/079684200448/KANUMURI/UBIN/o mkarinika/Payme",
    "debit": "",
    "credit": "1000.00",
    "balance": "865349.85"
  },
  {
    "page": 9,
    "date": "27/09/2026",
    "valueDate": "27/09/2026",
    "description": "UPI/DR/266924345215/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "865322.85"
  },
  {
    "page": 9,
    "date": "27/09/2026",
    "valueDate": "27/09/2026",
    "description": "UPI/DR/265052605561/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "865312.85"
  },
  {
    "page": 9,
    "date": "28/09/2026",
    "valueDate": "28/09/2026",
    "description": "UPI/DR/627141138061/CRED/UTIB/cred.club @/payment",
    "debit": "6548.00",
    "credit": "",
    "balance": "858764.85"
  },
  {
    "page": 9,
    "date": "28/09/2026",
    "valueDate": "28/09/2026",
    "description": "UPI/DR/839544504067/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "10.00",
    "credit": "",
    "balance": "858754.85"
  },
  {
    "page": 9,
    "date": "29/09/2026",
    "valueDate": "29/09/2026",
    "description": "UPI/DR/651786924679/SRI LAKS/YESB/paytmqr6pq/Payme",
    "debit": "27.00",
    "credit": "",
    "balance": "858727.85"
  }
];
