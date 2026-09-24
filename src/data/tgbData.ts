export interface TGBAccountDetails {
  accountName: string;
  proprietor: string;
  addressLines: string[];
  email: string;
  accountNumber: string;
  secondHolderName: string;
  cifNo: string;
  ifscCode: string;
  product: string;
  branchName: string;
  branchCode: string;
  branchAddress: string[];
  periodFrom: string;
  periodTo: string;
  clearedBalance: string;
  unclearedAmount: string;
  statementDate: string;
  statementTime: string;
  limit: string;
  interestRate: string;
  drawingPower: string;
  micrCode: string;
  ckycNumber: string;
}

export const defaultTGBAccountDetails: TGBAccountDetails = {
  accountName: 'SRI YOGESHWARA SEEDS PESTICIDES',
  proprietor: 'NARSAIAH MUSKU',
  addressLines: [
    '2-79/3',
    'MUPKAL',
    'MUPKAL, MUPKAL NIZAMABAD, 503218'
  ],
  email: 'narasaiahmusku@gmail.com',
  accountNumber: '0000079016219702',
  secondHolderName: '--',
  cifNo: '29009029618',
  ifscCode: 'TGRB0000222',
  product: 'CA-RURAL-FIRM/TRUST/SOC',
  branchName: 'MUPKAL',
  branchCode: '00222',
  branchAddress: [
    'H NO 2-83 NEAR BUS STAND MUPKAL BUSSTAND',
    'Telangana Grameena Bank MUPKAL',
    'Nizamabad, 503218,'
  ],
  periodFrom: '18/05/2026',
  periodTo: '21/08/2026',
  clearedBalance: '1094074.29Cr',
  unclearedAmount: '0.00',
  statementDate: '21/08/2026',
  statementTime: '10:18:17',
  limit: '0.00',
  interestRate: '0.00% p.a.',
  drawingPower: '0.00',
  micrCode: '--',
  ckycNumber: '--'
};

export interface TGBTransaction {
  id: string;
  date: string;
  valueDate: string;
  description: string;
  chequeDetails: string;
  debit: string;
  credit: string;
  balance: string;
}

export const tgbTransactions: TGBTransaction[] = [
  {
    "id": "1",
    "date": "18-05-2026",
    "valueDate": "18-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61381936840 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "3000.00",
    "balance": "31639.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "2",
    "date": "18-05-2026",
    "valueDate": "18-05-2026",
    "description": "By Transfer:UPI  547940482470\n9032840701@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "9300.00",
    "balance": "40939.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "3",
    "date": "18-05-2026",
    "valueDate": "18-05-2026",
    "description": "By Transfer:UPI  106521392116\nbaddamrajeshwer@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "17000.00",
    "balance": "57939.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "4",
    "date": "18-05-2026",
    "valueDate": "18-05-2026",
    "description": "By Transfer:UPI  788763528074\n9912270034@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "20000.00",
    "balance": "77939.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "5",
    "date": "18-05-2026",
    "valueDate": "18-05-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "25000.00",
    "balance": "102939.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "6",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61391907832 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "37640.00",
    "balance": "140579.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "7",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  713615894731\n9177163896-4@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "18800.00",
    "balance": "159379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "8",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  079918732781\nmarushanker@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "85000.00",
    "balance": "244379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "9",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  933329583799\nnaveengaddam5552@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "5500.00",
    "balance": "249879.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "10",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  298219071343\n9010006633@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "7500.00",
    "balance": "257379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "11",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "WDL TFR:IMPS/613910040066/HDFC00\n00240/XXXX0007/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "207379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "12",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  176096745082\n8179258965-2@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "25000.00",
    "balance": "232379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "13",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  139894610544\n9177662131@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "14000.00",
    "balance": "246379.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "14",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  026379041890\n9177662131@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "8750.00",
    "balance": "255129.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "15",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "30000.00",
    "balance": "285129.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "16",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "WDL TFR:UPI  200672845374\ngsrinivasyadavgsrinivas27363@axl:TRF\nTO 0093559999333",
    "debit": "-20000.00",
    "credit": "",
    "balance": "265129.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "17",
    "date": "19-05-2026",
    "valueDate": "19-05-2026",
    "description": "By Transfer:UPI  678636306867\n7569285498@ibl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3000.00",
    "balance": "268129.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "18",
    "date": "20-05-2026",
    "valueDate": "20-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61402842960 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "14240.00",
    "balance": "282369.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "19",
    "date": "20-05-2026",
    "valueDate": "20-05-2026",
    "description": "By Transfer:UPI  119624041864\n8919944862-2@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3000.00",
    "balance": "285369.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "20",
    "date": "21-05-2026",
    "valueDate": "21-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61412607372 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "16470.00",
    "balance": "301839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "21",
    "date": "21-05-2026",
    "valueDate": "21-05-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "60000.00",
    "balance": "361839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "22",
    "date": "21-05-2026",
    "valueDate": "21-05-2026",
    "description": "WDL TFR:UPI  773802917895\nyashodahospital.42580410@hdfcban:\nTRF TO 0093559999333",
    "debit": "-12020.00",
    "credit": "",
    "balance": "349819.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "23",
    "date": "21-05-2026",
    "valueDate": "21-05-2026",
    "description": "WDL TFR:UPI  582300283247\n9491661786@axl:TRF TO\n0093562999339",
    "debit": "-1040.00",
    "credit": "",
    "balance": "348779.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "24",
    "date": "22-05-2026",
    "valueDate": "22-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61422976915 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "670.00",
    "balance": "349449.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "25",
    "date": "22-05-2026",
    "valueDate": "22-05-2026",
    "description": "By Transfer:UPI  788750397354 kittu.\nbusam@axl",
    "debit": "-",
    "credit": "38000.00",
    "balance": "387449.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "26",
    "date": "22-05-2026",
    "valueDate": "22-05-2026",
    "description": "By Transfer:UPI  782131568032\n9440719776-7@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "12000.00",
    "balance": "399449.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "27",
    "date": "23-05-2026",
    "valueDate": "23-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61431942885 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "1280.00",
    "balance": "400729.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "28",
    "date": "23-05-2026",
    "valueDate": "23-05-2026",
    "description": "By Transfer:UPI  209610806685\nravikommula@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "25000.00",
    "balance": "425729.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "29",
    "date": "23-05-2026",
    "valueDate": "23-05-2026",
    "description": "By Transfer:UPI  953001244594\n9652815843-3@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "17400.00",
    "balance": "443129.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "30",
    "date": "23-05-2026",
    "valueDate": "23-05-2026",
    "description": "By Transfer:UPI  963795195596\n9912361334@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1200.00",
    "balance": "444329.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "31",
    "date": "24-05-2026",
    "valueDate": "24-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61442914294 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "41510.00",
    "balance": "485839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "32",
    "date": "24-05-2026",
    "valueDate": "24-05-2026",
    "description": "WDL TFR:UPI  873102632828\n7997412646@ybl:TRF TO\n0093560999330",
    "debit": "-1000.00",
    "credit": "",
    "balance": "484839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "33",
    "date": "24-05-2026",
    "valueDate": "24-05-2026",
    "description": "WDL TFR:UPI  946751003034\n9989617555@ybl:TRF TO\n0093559999333",
    "debit": "-350.00",
    "credit": "",
    "balance": "484489.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "34",
    "date": "25-05-2026",
    "valueDate": "25-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61452608664 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "113030.00",
    "balance": "597519.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "35",
    "date": "25-05-2026",
    "valueDate": "25-05-2026",
    "description": "WDL TFR:UPI  357106910046\nyashodahospital.42580389@hdfcban:\nTRF TO 0093559999333",
    "debit": "-8320.00",
    "credit": "",
    "balance": "589199.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "36",
    "date": "25-05-2026",
    "valueDate": "25-05-2026",
    "description": "WDL TFR:IMPS/614512445853/KVBL00\n01449/XXXX7830/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-129000.00",
    "credit": "",
    "balance": "460199.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "37",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61462792635 PhonePe Lim",
    "debit": "-",
    "credit": "19210.00",
    "balance": "479409.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "38",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "WDL TFR:UPI  180326613012\nyashodaclinics.63493627@hdfcbank:TRF\nTO 0093563999338",
    "debit": "-570.00",
    "credit": "",
    "balance": "478839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "39",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "By Transfer:UPI  213735235909\n9110513611-3@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "50000.00",
    "balance": "528839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "40",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "By Transfer:UPI  753379402375\n9912020376@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "20000.00",
    "balance": "548839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "41",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "WDL TFR:IMPS/614610500809/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "448839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "42",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "WDL TFR:UPI  783466290695\n7396637714@sbi:TRF TO\n0093559999333",
    "debit": "-5000.00",
    "credit": "",
    "balance": "443839.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "43",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "WDL TFR:UPI  473704054687 gpay-\n11198535428@okbizaxis:TRF TO\n0093559999333",
    "debit": "-13500.00",
    "credit": "",
    "balance": "430339.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "44",
    "date": "26-05-2026",
    "valueDate": "26-05-2026",
    "description": "WDL TFR:IMPS/614617520971/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-20000.00",
    "credit": "",
    "balance": "410339.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "45",
    "date": "27-05-2026",
    "valueDate": "27-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61472387721 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "7650.00",
    "balance": "417989.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "46",
    "date": "27-05-2026",
    "valueDate": "27-05-2026",
    "description": "By Transfer:UPI  992443919760\nssayareddy@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "17500.00",
    "balance": "435489.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "47",
    "date": "27-05-2026",
    "valueDate": "27-05-2026",
    "description": "By Transfer:UPI  158628119572\n9949864909-7@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1500.00",
    "balance": "436989.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "48",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61483515695 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "49010.00",
    "balance": "485999.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "49",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "WDL TFR:IMPS/614812645883/KKBK00\n00958/XXXX0004/Bill Paymen",
    "debit": "-50000.00",
    "credit": "",
    "balance": "435999.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "50",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "By Transfer:UPI  673367312170\n7382698611@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "14120.00",
    "balance": "450119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "51",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "By Transfer:UPI  776092015496\nyampuram.rajeshwer@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "27500.00",
    "balance": "477619.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "52",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "By Transfer:UPI  437288262315\n9848560055@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "51500.00",
    "balance": "529119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "53",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "WDL TFR:IMPS/614818660702/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "429119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "54",
    "date": "28-05-2026",
    "valueDate": "28-05-2026",
    "description": "WDL TFR:IMPS/614818662036/CNRB00\n13315/XXXX8449/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "379119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "55",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61492700519 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "132600.00",
    "balance": "511719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "56",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "WDL TFR:UPI  885339057467\n7396637714@sbi:TRF TO\n0093560999330",
    "debit": "-10000.00",
    "credit": "",
    "balance": "501719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "57",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Transfer:UPI  607375902106\n9912778234@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "25000.00",
    "balance": "526719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "58",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Transfer:UPI  424114950683\npadamagundeti@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "7000.00",
    "balance": "533719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "59",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "WDL TFR:IMPS/614912696656/HDFC00\n00240/XXXX6998/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-58000.00",
    "credit": "",
    "balance": "475719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "60",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "210000.00",
    "balance": "685719.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "61",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Transfer:UPI  127789326415\n7893501450@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6800.00",
    "balance": "692519.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "62",
    "date": "29-05-2026",
    "valueDate": "29-05-2026",
    "description": "By Transfer:UPI  613714916448\nrajareddymusku@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "50000.00",
    "balance": "742519.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "63",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61502690074 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "115400.00",
    "balance": "857919.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "64",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "OWN CHQ XFER DP:TRF TO SRI\nYOGESHWARA SEEDS PESTICIDIES:\nTRF FR 0079020363838",
    "debit": "",
    "credit": "103200.00",
    "balance": "961119.00Cr",
    "chequeDetails": "380511"
  },
  {
    "id": "65",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "WDL TFR:IMPS/615014780040/HDFC00\n00240/XXXX9200/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "911119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "66",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "WDL TFR:IMPS/615014780145/HDFC00\n00240/XXXX9200/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-5000.00",
    "credit": "",
    "balance": "906119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "67",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Transfer:NEFT UBIN0817503\n002770915218 MARUTHI ENT:TRF\nFR 0099569999225",
    "debit": "-",
    "credit": "150000.00",
    "balance": "1056119.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "68",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Transfer:NEFT UBIN0825107\n002770960680 RAJA RAJESH:TRF\nFR 0099599999229",
    "debit": "-",
    "credit": "100500.00",
    "balance": "1156619.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "69",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "REMT THRU CHQ:AT PAR CA CHQ:\nNEFT ICIC0001097\nTGRBN26150626062 GAYATRI SEEDS\nG",
    "debit": "600024.00",
    "credit": "",
    "balance": "556595.00Cr",
    "chequeDetails": "828362"
  },
  {
    "id": "70",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "87000.00",
    "balance": "643595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "71",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "WDL TFR:OD CK OF RADHIKA\nCLOSURE:TRF TO 0079107717942",
    "debit": "-502667.00",
    "credit": "",
    "balance": "140928.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "72",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Transfer:UPI  443301184176\n9666758115@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "9800.00",
    "balance": "150728.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "73",
    "date": "30-05-2026",
    "valueDate": "30-05-2026",
    "description": "By Transfer:UPI  081921613473\nsrinivasoddam083@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "20000.00",
    "balance": "170728.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "74",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:TRF FR 0099579999223",
    "debit": "-",
    "credit": "160930.00",
    "balance": "331658.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "75",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  860101497595\n9989760817@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "3000.00",
    "balance": "334658.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "76",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  615174041123 gaddam.\nmalleshyadav-1@oksbi:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "2000.00",
    "balance": "336658.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "77",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  241118563564\n9989760817-3@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1000.00",
    "balance": "337658.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "78",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  178562197404\n9177662131-4@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1000.00",
    "balance": "338658.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "79",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "WDL TFR:UPI  883821051182\n9848176105@ybl:TRF TO\n0093562999339",
    "debit": "-500.00",
    "credit": "",
    "balance": "338158.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "80",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  425027302644\nsayareddy7@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "21600.00",
    "balance": "359758.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "81",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  376936149128\n9949864909-15@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "4500.00",
    "balance": "364258.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "82",
    "date": "31-05-2026",
    "valueDate": "31-05-2026",
    "description": "By Transfer:UPI  536238470771\n8074951337@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "4000.00",
    "balance": "368258.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "83",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61522673857 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "146050.00",
    "balance": "514308.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "84",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  399698618286\n8125359368@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4400.00",
    "balance": "518708.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "85",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  931840807480\n9618491541@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1050.00",
    "balance": "519758.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "86",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "100.00",
    "balance": "519858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "87",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  064282164354\n9100227032@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "35000.00",
    "balance": "554858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "88",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  343816352270\n9848785593@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "20000.00",
    "balance": "574858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "89",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  115563401036\n9603909612@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "17250.00",
    "balance": "592108.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "90",
    "date": "01-06-2026",
    "valueDate": "01-06-2026",
    "description": "By Transfer:UPI  473669667440\nsrinivasoddam083@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "18500.00",
    "balance": "610608.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "91",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61532082387 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "291350.00",
    "balance": "901958.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "92",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:UPI  262561121103\n9848332668@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "20000.00",
    "balance": "921958.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "93",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:UPI  051185870922\n9493663371-2@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "10400.00",
    "balance": "932358.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "94",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "WDL TFR:IMPS/615311957493/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "832358.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "95",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:UPI  898205866595\n7032788676@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "11500.00",
    "balance": "843858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "96",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:UPI  492945200788\n7013501685@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "20000.00",
    "balance": "863858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "97",
    "date": "02-06-2026",
    "valueDate": "02-06-2026",
    "description": "By Transfer:UPI  701119019723\nssayareddy@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "30000.00",
    "balance": "893858.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "98",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:TRF FR 0099549999228",
    "debit": "-",
    "credit": "209270.00",
    "balance": "1103128.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "99",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  234751758875\n8374406215@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "800.00",
    "balance": "1103928.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "100",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  399779381456\ndevenderreddy420@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "9900.00",
    "balance": "1113828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "101",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  615430529947\nkomatishettym@oksbi:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1600.00",
    "balance": "1115428.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "102",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  958994573210\n9492530560-4@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "9000.00",
    "balance": "1124428.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "103",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  054604050868\n9441711584@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "50000.00",
    "balance": "1174428.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "104",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  775068396615\n9989049300@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "14400.00",
    "balance": "1188828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "105",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "By Transfer:UPI  251929987281\n9848550055@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "35000.00",
    "balance": "1223828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "106",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "WDL TFR:IMPS/615419048912/IDIB000\nM371/XXXX9746/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1123828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "107",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "WDL TFR:IMPS/615419049059/HSBC05\n00002/XXXX0630/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-191000.00",
    "credit": "",
    "balance": "932828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "108",
    "date": "03-06-2026",
    "valueDate": "03-06-2026",
    "description": "WDL TFR:IMPS/615419049206/HDFC00\n00003/XXXX0157/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "832828.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "109",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61552820853 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "214040.00",
    "balance": "1046868.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "110",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:TRF FR 0093556999336",
    "debit": "-",
    "credit": "100.00",
    "balance": "1046968.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "111",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:UPI  976271062479 gundeti.\nmohan@ybl:TRF FR 0093555999337",
    "debit": "-",
    "credit": "15200.00",
    "balance": "1062168.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "112",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "WDL TFR:UPI  699012255023\nnavataroadtrans849.rzp@icici:TRF TO\n0093563999338",
    "debit": "-2382.00",
    "credit": "",
    "balance": "1059786.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "113",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "WDL TFR:IMPS/615515095340/HDFC00\n00700/XXXX7119/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-25000.00",
    "credit": "",
    "balance": "1034786.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "114",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "WDL TFR:IMPS/615516096276/UTIB000\n1634/XXXX3670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-126000.00",
    "credit": "",
    "balance": "908786.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "115",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:UPI  442711748442\n9848604299@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "19000.00",
    "balance": "927786.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "116",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:UPI  052272514349\n93469256@ybl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "13600.00",
    "balance": "941386.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "117",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:UPI  615526221107 gaddam.\nmalleshyadav-1@oksbi:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6000.00",
    "balance": "947386.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "118",
    "date": "04-06-2026",
    "valueDate": "04-06-2026",
    "description": "By Transfer:UPI  647813597324\n8897385222@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "30000.00",
    "balance": "977386.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "119",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61562774070 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "157450.00",
    "balance": "1134836.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "120",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  657147740885\n9848332668@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3000.00",
    "balance": "1137836.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "121",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  682101680833\n8184887008@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "11000.00",
    "balance": "1148836.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "122",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "1800.00",
    "balance": "1150636.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "123",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  756626481844\n9550239195@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "4900.00",
    "balance": "1155536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "124",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  233765104627\n7671068744@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "95000.00",
    "balance": "1250536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "125",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  856838929944\n9951835085@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "30000.00",
    "balance": "1280536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "126",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:DEVENDHAR TO SRI\nYOGESHWARA SEEDS:TRF FR\n0079003258509",
    "debit": "-",
    "credit": "100000.00",
    "balance": "1380536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "127",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "150000.00",
    "balance": "1530536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "128",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  828675585106\n9908319368@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "11000.00",
    "balance": "1541536.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "129",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "CAS CHQ XFER WD:AT PAR CA CHQ:\nFD NO. 704316:TRF TO 0079108903595",
    "debit": "1500000.00",
    "credit": "",
    "balance": "41536.00Cr",
    "chequeDetails": "828364"
  },
  {
    "id": "130",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  654215062312\n9490680026-3@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2400.00",
    "balance": "43936.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "131",
    "date": "05-06-2026",
    "valueDate": "05-06-2026",
    "description": "By Transfer:UPI  581878355385\n9440393301@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "10000.00",
    "balance": "53936.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "132",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61573024200 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "309921.82",
    "balance": "363857.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "133",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "By Transfer:UPI  262580591565\n7671068744@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "99000.00",
    "balance": "462857.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "134",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "By Transfer:TRF FR 0093556999336",
    "debit": "-",
    "credit": "28000.00",
    "balance": "490857.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "135",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "WDL TFR:IMPS/615717221522/BARB0I\nNTMUM/XXXX0670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "390857.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "136",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "By Transfer:UPI  402986472061\n9701934893@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1.00",
    "balance": "390858.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "137",
    "date": "06-06-2026",
    "valueDate": "06-06-2026",
    "description": "By Transfer:UPI  019059703132\n9177163896-4@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "13000.00",
    "balance": "403858.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "138",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61582027674 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "200950.00",
    "balance": "604808.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "139",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  783329165483\npravalikareddy971@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "800.00",
    "balance": "605608.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "140",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  284681803867\n9908508041@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "8000.00",
    "balance": "613608.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "141",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  720836287695\n6305654510@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "8300.00",
    "balance": "621908.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "142",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  551604622203\n9110513611-3@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "60000.00",
    "balance": "681908.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "143",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  578747376947\n7671068744@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "56000.00",
    "balance": "737908.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "144",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  658245197796\n9848550055@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "17500.00",
    "balance": "755408.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "145",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  632208373656\n9951856736@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "4700.00",
    "balance": "760108.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "146",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "21000.00",
    "balance": "781108.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "147",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  755557053423\nyampuram.rajeshwer@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "21000.00",
    "balance": "802108.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "148",
    "date": "07-06-2026",
    "valueDate": "07-06-2026",
    "description": "By Transfer:UPI  276591585513\n9908808480@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "30000.00",
    "balance": "832108.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "149",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61591921658 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "90690.00",
    "balance": "922798.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "150",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:UPI  717752785566\nyampuram.rajeshwer@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "10500.00",
    "balance": "933298.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "151",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:UPI  528225703593\n9441787752-11@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "6900.00",
    "balance": "940198.82Cr",
    "chequeDetails": "-"
  },
  {
    "id": "152",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "WDL TFR:UPI  381851967564\nnurtureagtechli904771.rzp@rxaxis:TRF\nTO 0093563999338",
    "debit": "-4561.50",
    "credit": "",
    "balance": "935637.32Cr",
    "chequeDetails": "-"
  },
  {
    "id": "153",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "WDL TFR:UPI  982917133093\nnurtureagtechli904771.rzp@rxaxis:TRF\nTO 0093559999333",
    "debit": "-33046.66",
    "credit": "",
    "balance": "902590.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "154",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "WDL TFR:IMPS/615912314082/HDFC0C\nTGCUB/XXXX6013/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "702590.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "155",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "WDL TFR:IMPS/615912314793/HDFC00\n00982/XXXX5658/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "502590.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "156",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "WDL TFR:IMPS/615913315997/KKBK00\n00958/XXXX0004/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-52000.00",
    "credit": "",
    "balance": "450590.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "157",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:UPI  305486059278\n8106699476-2@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "10300.00",
    "balance": "460890.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "158",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "23800.00",
    "balance": "484690.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "159",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:UPI  715954164513\n6281525534@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "10200.00",
    "balance": "494890.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "160",
    "date": "08-06-2026",
    "valueDate": "08-06-2026",
    "description": "By Transfer:UPI  500202501678\n9390237289@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3500.00",
    "balance": "498390.66Cr",
    "chequeDetails": "-"
  },
  {
    "id": "161",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61601973050 PhonePe Limited:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "239223.72",
    "balance": "737614.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "162",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  277231437807\n9492206111@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "13600.00",
    "balance": "751214.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "163",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  934881923083\n9014894157@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "13600.00",
    "balance": "764814.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "164",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  725039252126\nkolvimahesh1@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3400.00",
    "balance": "768214.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "165",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  130570957886\ngangasaramnarendher@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "10200.00",
    "balance": "778414.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "166",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  651607026034\n9014894157@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "13600.00",
    "balance": "792014.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "167",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "WDL TFR:IMPS/616011366529/CNRB00\n13315/XXXX8449/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-69400.00",
    "credit": "",
    "balance": "722614.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "168",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  085063472259\n9948402506@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1750.00",
    "balance": "724364.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "169",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "WDL TFR:IMPS/616013374180/KVBL00\n04825/XXXX0253/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "524364.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "170",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "6930.00",
    "balance": "531294.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "171",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  409873677565\n9550748003@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3400.00",
    "balance": "534694.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "172",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  675918811889\n9440910313@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "36500.00",
    "balance": "571194.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "173",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "WDL TFR:IMPS/616016383522/HDFC00\n00240/XXXX6998/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-97000.00",
    "credit": "",
    "balance": "474194.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "174",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  646062530161\n95052401@ybl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "10200.00",
    "balance": "484394.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "175",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  944384679136\n95052401@axl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "34.00",
    "balance": "484428.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "176",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  070844598003\n95052401@ybl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "3400.00",
    "balance": "487828.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "177",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  427690331668\n9848332668@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "5000.00",
    "balance": "492828.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "178",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  812746215937\nrajeshwarthurpu@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "24000.00",
    "balance": "516828.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "179",
    "date": "09-06-2026",
    "valueDate": "09-06-2026",
    "description": "By Transfer:UPI  339436128331\n9010635813@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "13900.00",
    "balance": "530728.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "180",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61613352455 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "511615.00",
    "balance": "1042343.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "181",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  674446818806\nkolvimahesh1@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "30000.00",
    "balance": "1072343.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "182",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "WDL TFR:TRF TO 0092292999331",
    "debit": "-4600.00",
    "credit": "",
    "balance": "1067743.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "183",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  230484831529\nssayareddy@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "2700.00",
    "balance": "1070443.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "184",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  083783394181\n9440719776@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "6500.00",
    "balance": "1076943.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "185",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  546703498522\n9701934893@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "3800.00",
    "balance": "1080743.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "186",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "CAS CHQ XFER WD:AT PAR CA CHQ:\nSB TO FD 704322:TRF TO\n0079109168320",
    "debit": "1000000.00",
    "credit": "",
    "balance": "80743.38Cr",
    "chequeDetails": "828365"
  },
  {
    "id": "187",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  651660272404\n9390333469@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1800.00",
    "balance": "82543.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "188",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  386376996896\nrythudsp@axl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "20000.00",
    "balance": "102543.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "189",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  063036636834\n7036284790@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "60000.00",
    "balance": "162543.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "190",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "WDL TFR:UPI  741689166886\nQ655795542@ybl:TRF TO\n0093563999338",
    "debit": "-10270.00",
    "credit": "",
    "balance": "152273.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "191",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  023689847390\nmuskurajareddy069@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "50000.00",
    "balance": "202273.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "192",
    "date": "10-06-2026",
    "valueDate": "10-06-2026",
    "description": "By Transfer:UPI  067993570347\n9959669780@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "2700.00",
    "balance": "204973.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "193",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61622743507 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "232160.00",
    "balance": "437133.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "194",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:UPI  594459024166\nsayareddynagampet@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3500.00",
    "balance": "440633.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "195",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:UPI  437384189587\n9951555999@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "5000.00",
    "balance": "445633.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "196",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "WDL TFR:IMPS/616209474187/HDFC00\n00126/XXXX8994/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-147000.00",
    "credit": "",
    "balance": "298633.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "197",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:UPI  114209672223\n9666056101@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "15000.00",
    "balance": "313633.38Cr",
    "chequeDetails": "-"
  },
  {
    "id": "198",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "WDL TFR:UPI  390828944830\nnurtureagtechli904771.rzp@rxaxis:TRF\nTO 0093560999330",
    "debit": "-25800.01",
    "credit": "",
    "balance": "287833.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "199",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:NEFT UBIN0825107\n002795087000 RAJA RAJESH:TRF\nFR 0099539999220",
    "debit": "-",
    "credit": "100500.00",
    "balance": "388333.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "200",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:UPI  084829309091\n7093800951@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "6900.00",
    "balance": "395233.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "201",
    "date": "11-06-2026",
    "valueDate": "11-06-2026",
    "description": "By Transfer:UPI  315452980424\n9989760817-2@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "25000.00",
    "balance": "420233.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "202",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61631911222 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "155920.00",
    "balance": "576153.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "203",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  143333217627\n9989760817-2@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "25000.00",
    "balance": "601153.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "204",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  007230066796\n9177662131-7@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1320.00",
    "balance": "602473.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "205",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  554773122771\n7842854262-2@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "5400.00",
    "balance": "607873.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "206",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  275762225993\n9666056101@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "10000.00",
    "balance": "617873.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "207",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  839374769471\n7013005215-4@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "10000.00",
    "balance": "627873.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "208",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "WDL TFR:IMPS/616311546201/UTIB000\n1634/XXXX3670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "577873.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "209",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  603864633530\n7386622832@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "10.00",
    "balance": "577883.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "210",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  917003355250\n7386622832@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "890.00",
    "balance": "578773.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "211",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "WDL TFR:IMPS/616316563014/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "478773.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "212",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "WDL TFR:IMPS/616316563933/INDB000\n0570/XXXX3615/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-15000.00",
    "credit": "",
    "balance": "463773.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "213",
    "date": "12-06-2026",
    "valueDate": "12-06-2026",
    "description": "By Transfer:UPI  738772728442\n9848604299@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "11400.00",
    "balance": "475173.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "214",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  356650922478\n9848604299@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "3800.00",
    "balance": "478973.37Cr",
    "chequeDetails": "-"
  },
  {
    "id": "215",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61641548213 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "256995.77",
    "balance": "735969.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "216",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  066250504829\n9848604299@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "7600.00",
    "balance": "743569.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "217",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  509887419258\n9963513178@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3500.00",
    "balance": "747069.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "218",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  068880163410\nanilreddyappala@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "35000.00",
    "balance": "782069.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "219",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  691015899267\n9640871567-2@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1200.00",
    "balance": "783269.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "220",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  946003465228\n9491535870@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "30000.00",
    "balance": "813269.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "221",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "WDL TFR:UPI  286681430723\n9390333469@ybl:TRF TO\n0093563999338",
    "debit": "-3600.00",
    "credit": "",
    "balance": "809669.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "222",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "WDL TFR:UPI  530174292885\nQ221630690@ybl:TRF TO\n0093560999330",
    "debit": "-1260.00",
    "credit": "",
    "balance": "808409.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "223",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  432985411941\n9951793836@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "4300.00",
    "balance": "812709.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "224",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "By Transfer:UPI  909519563936\nsrujanmusku@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "23000.00",
    "balance": "835709.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "225",
    "date": "13-06-2026",
    "valueDate": "13-06-2026",
    "description": "WDL TFR:IMPS/616420627273/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-150000.00",
    "credit": "",
    "balance": "685709.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "226",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61652952857 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "226200.00",
    "balance": "911909.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "227",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  289311771967\n9177662131-4@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4400.00",
    "balance": "916309.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "228",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  801853245048\n9440749120-3@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "7100.00",
    "balance": "923409.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "229",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  609033885934\n7386498296@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "14200.00",
    "balance": "937609.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "230",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  950875141726\n9110513611-3@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "50000.00",
    "balance": "987609.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "231",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  381288816658\n9912977467@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1650.00",
    "balance": "989259.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "232",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  550833259135\n9912977467@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "500.00",
    "balance": "989759.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "233",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  770219528470\nnomularajanna@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3500.00",
    "balance": "993259.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "234",
    "date": "14-06-2026",
    "valueDate": "14-06-2026",
    "description": "By Transfer:UPI  504712500875\n8179720765@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3500.00",
    "balance": "996759.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "235",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  508553058830\n9666056101@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "9000.00",
    "balance": "1005759.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "236",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61662921835 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "109800.00",
    "balance": "1115559.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "237",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  010577057090\n9618459842@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6500.00",
    "balance": "1122059.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "238",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:IMPS/616609999257/SRI\nMAHADEV TRA/XXXX9702/Yogeshw:\nTRF FR 0092291999332",
    "debit": "-",
    "credit": "474500.00",
    "balance": "1596559.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "239",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  547877232244\n8309885290@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "7200.00",
    "balance": "1603759.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "240",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  821623534691\n9440747809@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "50000.00",
    "balance": "1653759.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "241",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  534111319293\n9908508041@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "7400.00",
    "balance": "1661159.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "242",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "WDL TFR:IMPS/616615728334/HDFC00\n00240/XXXX0007/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1561159.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "243",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  724334903584\n9491535870@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "6800.00",
    "balance": "1567959.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "244",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "98000.00",
    "balance": "1665959.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "245",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "WDL TFR:IMPS/616615729000/ICIC000\n0044/XXXX0142/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1565959.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "246",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "CAS CHQ XFER WD:AT PAR CA CHQ:\nSB TP FD NO. 704323:TRF TO\n0079109370858",
    "debit": "1500000.00",
    "credit": "",
    "balance": "65959.14Cr",
    "chequeDetails": "828366"
  },
  {
    "id": "247",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "WDL TFR:IMPS/616615729877/SBIN000\n3257/XXXX2338/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "15959.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "248",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  193009234578\nbaddmrajeshwer1@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "10500.00",
    "balance": "26459.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "249",
    "date": "15-06-2026",
    "valueDate": "15-06-2026",
    "description": "By Transfer:UPI  145077358646\n7842320535@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "15000.00",
    "balance": "41459.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "250",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61671892411 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "175276.00",
    "balance": "216735.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "251",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Transfer:UPI  665068138541\n9666693997-2@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "18500.00",
    "balance": "235235.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "252",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Transfer:UPI  766734768901\n9848785593@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "34500.00",
    "balance": "269735.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "253",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "75000.00",
    "balance": "344735.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "254",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Transfer:TRF FR 0093554999338",
    "debit": "-",
    "credit": "45850.00",
    "balance": "390585.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "255",
    "date": "16-06-2026",
    "valueDate": "16-06-2026",
    "description": "By Transfer:UPI  770286215896\naithamanu3@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "4200.00",
    "balance": "394785.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "256",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61683277195 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "176090.00",
    "balance": "570875.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "257",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:UPI  728140083087\nthummalavenkatreddy88@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4450.00",
    "balance": "575325.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "258",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:UPI  996782170272\n9666056101@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "680.00",
    "balance": "576005.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "259",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:UPI  378644548494\ntelumuthyam@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6900.00",
    "balance": "582905.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "260",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:UPI  708815592672\n7993803410@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4800.00",
    "balance": "587705.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "261",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Transfer:UPI  311738953573\njpbhumeshwar@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "11200.00",
    "balance": "598905.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "262",
    "date": "17-06-2026",
    "valueDate": "17-06-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "22000.00",
    "balance": "620905.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "263",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61692023291 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "97560.00",
    "balance": "718465.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "264",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:UPI  830840219059\n9701934893@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1100.00",
    "balance": "719565.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "265",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:UPI  722899147473\n9052820492@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3600.00",
    "balance": "723165.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "266",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:UPI  549270540299\ndoddannagari@axl",
    "debit": "-",
    "credit": "1800.00",
    "balance": "724965.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "267",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "WDL TFR:IMPS/616910900451/KKBK00\n00958/XXXX0004/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-140000.00",
    "credit": "",
    "balance": "584965.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "268",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:UPI  620553946215\n9963513178@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1500.00",
    "balance": "586465.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "269",
    "date": "18-06-2026",
    "valueDate": "18-06-2026",
    "description": "By Transfer:UPI  451975740516\n9666693997-2@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "7000.00",
    "balance": "593465.14Cr",
    "chequeDetails": "-"
  },
  {
    "id": "270",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61703175059 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "195285.69",
    "balance": "788750.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "271",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  715723520771\n9441334559-5@ibl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "10000.00",
    "balance": "798750.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "272",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  245751743362\n9912323531-6@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "10000.00",
    "balance": "808750.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "273",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "WDL TFR:IMPS/617011961773/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "708750.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "274",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  385663909132\n9885878354@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "2500.00",
    "balance": "711250.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "275",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  700841305587\n9100745584@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "2300.00",
    "balance": "713550.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "276",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "WDL TFR:IMPS/617013969468/ICIC000\n0681/XXXX1022/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-40000.00",
    "credit": "",
    "balance": "673550.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "277",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "WDL TFR:IMPS/617013971352/BARB0I\nNTMUM/XXXX0670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "623550.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "278",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "WDL TFR:UPI  032195284735\nQ11452676@ybl",
    "debit": "-7900.00",
    "credit": "",
    "balance": "615650.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "279",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:RTGS UBIN0817503\nUBINH26170523568 KARTHIKEYA\nSEED:TRF FR 0099826999224",
    "debit": "-",
    "credit": "300000.00",
    "balance": "915650.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "280",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "155000.00",
    "balance": "1070650.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "281",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  127033273709\n9704119107-8@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1700.00",
    "balance": "1072350.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "282",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "By Transfer:UPI  891994814462\n94925652081@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "10000.00",
    "balance": "1082350.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "283",
    "date": "19-06-2026",
    "valueDate": "19-06-2026",
    "description": "WDL TFR:UPI  498235736872\nmahdevtredar@icici:TRF TO\n0093559999333",
    "debit": "-15900.00",
    "credit": "",
    "balance": "1066450.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "284",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61711971859 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "51450.00",
    "balance": "1117900.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "285",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  832989584665\n9885828451-2@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1700.00",
    "balance": "1119600.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "286",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  459736671429\nmahendermacharla@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "50000.00",
    "balance": "1169600.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "287",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  393888595198\njogugangadher@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3500.00",
    "balance": "1173100.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "288",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  706014112858\n9441140145@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3000.00",
    "balance": "1176100.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "289",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "WDL TFR:IMPS/617112033017/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1076100.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "290",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "WDL TFR:IMPS/617113035562/HDFC00\n00700/XXXX7119/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "876100.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "291",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  454068618805\n9866372673-7@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "150.00",
    "balance": "876250.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "292",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "WDL TFR:UPI  018871325372\nSV2512112238344230219611@ybl:TRF\nTO 0093560999330",
    "debit": "-10302.00",
    "credit": "",
    "balance": "865948.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "293",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "WDL TFR:UPI  524938445188\nSV2512112238344230219611@ybl:TRF\nTO 0093563999338",
    "debit": "-1789.00",
    "credit": "",
    "balance": "864159.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "294",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  132554383040 jakka.\nnarsareddy@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "5600.00",
    "balance": "869759.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "295",
    "date": "20-06-2026",
    "valueDate": "20-06-2026",
    "description": "By Transfer:UPI  070839395122\n6281127133-2@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "50000.00",
    "balance": "919759.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "296",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61721905231 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "51510.00",
    "balance": "971269.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "297",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "By Transfer:UPI  400390813341\n7013580041@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "4300.00",
    "balance": "975569.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "298",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "By Transfer:UPI  617286402658\npraveenreddy5989-2@oksbi:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "13000.00",
    "balance": "988569.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "299",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "By Transfer:UPI  218795206888\n63057328170@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1100.00",
    "balance": "989669.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "300",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "CEMTEX DEP:IMPS 617113035562\nDRC 79016219702",
    "debit": "-",
    "credit": "200000.00",
    "balance": "1189669.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "301",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "CEMTEX DEP:IMPS 617112033017\nDRC 79016219702",
    "debit": "-",
    "credit": "100000.00",
    "balance": "1289669.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "302",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "CEMTEX DEP:UPI  502066722862 TCC\n79016219702",
    "debit": "-",
    "credit": "27000.00",
    "balance": "1316669.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "303",
    "date": "21-06-2026",
    "valueDate": "21-06-2026",
    "description": "By Transfer:UPI  629943490260\n9908334284@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2800.00",
    "balance": "1319469.83Cr",
    "chequeDetails": "-"
  },
  {
    "id": "304",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61733241827 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "100214.59",
    "balance": "1419684.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "305",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  278553382256\nreddypalepu@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3300.00",
    "balance": "1422984.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "306",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  923203615406\n9908334322@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3300.00",
    "balance": "1426284.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "307",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  392075530549\n9949864909-7@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1100.00",
    "balance": "1427384.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "308",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  993352135372\n8790243302-2@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3500.00",
    "balance": "1430884.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "309",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "WDL TFR:IMPS/617310147384/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1330884.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "310",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "WDL TFR:IMPS/617313159081/HDFC00\n00700/XXXX7119/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "1130884.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "311",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "WDL TFR:IMPS/617314162550/HDFC00\n00642/XXXX0310/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1030884.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "312",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "116000.00",
    "balance": "1146884.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "313",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  825952503920\nreddypalepu@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1650.00",
    "balance": "1148534.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "314",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  673910793386\n9666570897@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "7300.00",
    "balance": "1155834.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "315",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  986449733603\n9030386428@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "250.00",
    "balance": "1156084.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "316",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:TRF FR 0093556999336",
    "debit": "-",
    "credit": "20000.00",
    "balance": "1176084.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "317",
    "date": "22-06-2026",
    "valueDate": "22-06-2026",
    "description": "By Transfer:UPI  913776786808\nrajajaidi@ybl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "5000.00",
    "balance": "1181084.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "318",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61741936824 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "130301.00",
    "balance": "1311385.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "319",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  363863307115\n9912174732-9@ibl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "450.00",
    "balance": "1311835.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "320",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  312402656276\n9666887767@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "11700.00",
    "balance": "1323535.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "321",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "WDL TFR:IMPS/617414211268/KVBL00\n01449/XXXX0073/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-24000.00",
    "credit": "",
    "balance": "1299535.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "322",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  268516042706\n8179720765@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "47000.00",
    "balance": "1346535.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "323",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  540489380381\n9949864909-7@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "500.00",
    "balance": "1347035.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "324",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  735348877241\n9666693997-3@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6000.00",
    "balance": "1353035.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "325",
    "date": "23-06-2026",
    "valueDate": "23-06-2026",
    "description": "By Transfer:UPI  077106809828\n8008479735@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "900.00",
    "balance": "1353935.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "326",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61751759387 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "123760.00",
    "balance": "1477695.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "327",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  358039693462\n8790030369-3@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1830.00",
    "balance": "1479525.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "328",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:TRF FR 0093115999330",
    "debit": "-",
    "credit": "4500.00",
    "balance": "1484025.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "329",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  792256907987\n9908334337@ibl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "4500.00",
    "balance": "1488525.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "330",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  056662423545\n9618944541@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "26500.00",
    "balance": "1515025.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "331",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  927643964064\n9912391990-5@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "80000.00",
    "balance": "1595025.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "332",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  443946571117\n9966932532-8@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1790.00",
    "balance": "1596815.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "333",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  969584365863\n9346199500@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "2800.00",
    "balance": "1599615.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "334",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  975816230524\n8008079058@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "17200.00",
    "balance": "1616815.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "335",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  833557685169\n9177662131-6@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "4500.00",
    "balance": "1621315.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "336",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  429144409622\nchepoorrajendher@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "54000.00",
    "balance": "1675315.42Cr",
    "chequeDetails": "-"
  },
  {
    "id": "337",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "WDL TFR:UPI  972025957362\nnurtureagtechli904771.rzp@rxaxis:TRF\nTO 0093116999339",
    "debit": "-33588.31",
    "credit": "",
    "balance": "1641727.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "338",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "CAS CHQ XFER WD:AT PAR CA CHQ:\nFD NO. 704347:TRF TO 0079109890200",
    "debit": "1000000.00",
    "credit": "",
    "balance": "641727.11Cr",
    "chequeDetails": "828367"
  },
  {
    "id": "339",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  228993754566\n9177662131-6@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "2200.00",
    "balance": "643927.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "340",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "WDL TFR:IMPS/617514272828/HDFC00\n07544/XXXX5912/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "443927.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "341",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  653463565040\n9701908669@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "20000.00",
    "balance": "463927.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "342",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  135419307858\n8179703240@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "800.00",
    "balance": "464727.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "343",
    "date": "24-06-2026",
    "valueDate": "24-06-2026",
    "description": "By Transfer:UPI  464919399156\n8367642946@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "13600.00",
    "balance": "478327.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "344",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61761944750 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "126410.00",
    "balance": "604737.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "345",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  679313542567\n9052820492@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4400.00",
    "balance": "609137.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "346",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  767705753835\n8186979488@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "15000.00",
    "balance": "624137.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "347",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  802268950918 jaidi.\nreddy1@ibl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "2500.00",
    "balance": "626637.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "348",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  666533291578\n9908903361@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "20000.00",
    "balance": "646637.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "349",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  898977567641\n8978342552@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "2200.00",
    "balance": "648837.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "350",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "WDL TFR:IMPS/617617342704/UTIB000\n1634/XXXX3670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "598837.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "351",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "WDL TFR:IMPS/617617343212/ICIC000\n0044/XXXX0142/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-132000.00",
    "credit": "",
    "balance": "466837.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "352",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "WDL TFR:IMPS/617617343277/ICIC000\n0044/XXXX0142/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "416837.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "353",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "WDL TFR:IMPS/617617343431/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "316837.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "354",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:UPI  290785095459\n6075012145988806@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "14200.00",
    "balance": "331037.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "355",
    "date": "25-06-2026",
    "valueDate": "25-06-2026",
    "description": "By Transfer:NEFT UTIB0002602\nAXOMB17602104635 SRI VINAYAK:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "50000.00",
    "balance": "381037.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "356",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  320906283293\nthakkala.raju@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4000.00",
    "balance": "385037.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "357",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  568483214956\nsnagampet@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "690.00",
    "balance": "385727.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "358",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  309245339423\n9398836551@ptyes:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3900.00",
    "balance": "389627.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "359",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  910366276691\n8008736027-2@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "2400.00",
    "balance": "392027.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "360",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "WDL TFR:UPI  117539679533\nQ221630690@ybl:TRF TO\n0093559999333",
    "debit": "-9010.00",
    "credit": "",
    "balance": "383017.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "361",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61771863464 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "97190.00",
    "balance": "480207.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "362",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  892425697328\n9441994249-2@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "6800.00",
    "balance": "487007.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "363",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  426782311221\n9701202673@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "12000.00",
    "balance": "499007.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "364",
    "date": "26-06-2026",
    "valueDate": "26-06-2026",
    "description": "By Transfer:UPI  395671632434\n9703074818@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "850.00",
    "balance": "499857.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "365",
    "date": "27-06-2026",
    "valueDate": "27-06-2026",
    "description": "By Transfer:UPI  528787623832\n9966519272@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "500.00",
    "balance": "500357.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "366",
    "date": "27-06-2026",
    "valueDate": "27-06-2026",
    "description": "By Transfer:UPI  022702570301\n8186037768@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1500.00",
    "balance": "501857.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "367",
    "date": "27-06-2026",
    "valueDate": "27-06-2026",
    "description": "By Transfer:UPI  895295214240\n9985392925@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "10000.00",
    "balance": "511857.11Cr",
    "chequeDetails": "-"
  },
  {
    "id": "368",
    "date": "27-06-2026",
    "valueDate": "27-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61789397350 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "136220.73",
    "balance": "648077.84Cr",
    "chequeDetails": "-"
  },
  {
    "id": "369",
    "date": "27-06-2026",
    "valueDate": "27-06-2026",
    "description": "WDL TFR:UPI  053288244888\nguruc95157@barodampay:TRF TO\n0093559999333",
    "debit": "-8750.00",
    "credit": "",
    "balance": "639327.84Cr",
    "chequeDetails": "-"
  },
  {
    "id": "370",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61791876362 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "103248.13",
    "balance": "742575.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "371",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  145406947211\nabhinaveen60001@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "7900.00",
    "balance": "750475.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "372",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  452375964517\n9110733788@ibl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1000.00",
    "balance": "751475.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "373",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "WDL TFR:IMPS/617909507054/UBIN080\n3871/XXXX1778/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-67146.00",
    "credit": "",
    "balance": "684329.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "374",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  365492324928\n9912174732-9@ibl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1200.00",
    "balance": "685529.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "375",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  950293768567\n9966120761@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1100.00",
    "balance": "686629.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "376",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  712107769439\n7013294864@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "2650.00",
    "balance": "689279.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "377",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  365958490137\n9704297882@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1150.00",
    "balance": "690429.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "378",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  008273994236\n7013901945@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "50000.00",
    "balance": "740429.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "379",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  271400621427\n7013901945@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2100.00",
    "balance": "742529.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "380",
    "date": "28-06-2026",
    "valueDate": "28-06-2026",
    "description": "By Transfer:UPI  910618079959\n817946447@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "4000.00",
    "balance": "746529.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "381",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61802916508 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "61490.00",
    "balance": "808019.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "382",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  921021579860 reddy.\npalepu1@ybl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "1700.00",
    "balance": "809719.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "383",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  597172695982\n9949864909-7@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1200.00",
    "balance": "810919.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "384",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  993067441284\nssayareddy@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "600.00",
    "balance": "811519.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "385",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  282075922713\n9912832652-5@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3900.00",
    "balance": "815419.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "386",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  307210233585\ngangathermallari96328@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6800.00",
    "balance": "822219.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "387",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  377431794910\nssayareddy@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "5500.00",
    "balance": "827719.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "388",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  771420182932\nssayareddy@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "450.00",
    "balance": "828169.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "389",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  283188450489 reddy.\npalepu1@axl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "400.00",
    "balance": "828569.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "390",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "WDL TFR:IMPS/618012579667/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "628569.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "391",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:NEFT UTIB0002602\nAXOMB18002071196 SRI VINAYAK:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "54000.00",
    "balance": "682569.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "392",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "WDL TFR:UPI  245383727787\n8522900668@pthdfc:TRF TO\n0093561999330",
    "debit": "-3142.00",
    "credit": "",
    "balance": "679427.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "393",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  974409093889\n8897392188@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "8500.00",
    "balance": "687927.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "394",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  361825617073\n8897392188@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "12800.00",
    "balance": "700727.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "395",
    "date": "29-06-2026",
    "valueDate": "29-06-2026",
    "description": "By Transfer:UPI  892384213452 reddy.\npalepu1@ybl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "2300.00",
    "balance": "703027.97Cr",
    "chequeDetails": "-"
  },
  {
    "id": "396",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61811830699 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "204114.74",
    "balance": "907142.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "397",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  052064868450\n9885828451-2@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3000.00",
    "balance": "910142.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "398",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  759355603332\nnarsaiah.k2@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1500.00",
    "balance": "911642.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "399",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  140526216764 reddy.\npalepu1@ybl:TRF FR 0093558999334",
    "debit": "-",
    "credit": "500.00",
    "balance": "912142.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "400",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  726846657376\n9441726835@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "20000.00",
    "balance": "932142.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "401",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  193329223245\n9441694724@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6800.00",
    "balance": "938942.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "402",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:RTGS SBIN0020593\nSBINH26181478269 SHIVA KESHAWA\nF:TRF FR 0099826999224",
    "debit": "-",
    "credit": "320000.00",
    "balance": "1258942.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "403",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "WDL TFR:IMPS/618114647924/HDFC00\n07544/XXXX5912/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "1058942.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "404",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "REMT THRU CHQ:AT PAR CA CHQ:\nNEFT HDFC0004015\nTGRBN26181772485 CHAROEN\nPOKPHAN",
    "debit": "800024.00",
    "credit": "",
    "balance": "258918.71Cr",
    "chequeDetails": "828371"
  },
  {
    "id": "405",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  840443279289\n6300102661-2@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1000.00",
    "balance": "259918.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "406",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  003112048072\n7075986673@nyes:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "11000.00",
    "balance": "270918.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "407",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  169181828747\n9542744658@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "5900.00",
    "balance": "276818.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "408",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  169158049143\n9963043551@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "22500.00",
    "balance": "299318.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "409",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  088108559428\n9908367925@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "2000.00",
    "balance": "301318.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "410",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "WDL TFR:IMPS/618118660095/HDFC00\n00240/XXXX0007/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "251318.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "411",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  661845036826\nstylechintu001@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1000.00",
    "balance": "252318.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "412",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  968639590235\n7997663684@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "8200.00",
    "balance": "260518.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "413",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  584351901040\n7095255301-2@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "100.00",
    "balance": "260618.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "414",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "WDL TFR:UPI  888317866357 paytm.\ns1n6u0n@pty:TRF TO 0093561999330",
    "debit": "-9580.00",
    "credit": "",
    "balance": "251038.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "415",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "WDL TFR:UPI  471119968999\n9989151355@ybl:TRF TO\n0093562999339",
    "debit": "-16673.00",
    "credit": "",
    "balance": "234365.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "416",
    "date": "30-06-2026",
    "valueDate": "30-06-2026",
    "description": "By Transfer:UPI  386112666367\n9966932532-8@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "900.00",
    "balance": "235265.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "417",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "WDL TFR:IMPS/618121673357/HDFC00\n00003/XXXX0157/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-104000.00",
    "credit": "",
    "balance": "131265.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "418",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "WDL TFR:IMPS/618121673586/UBIN080\n3871/XXXX1778/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-1767.00",
    "credit": "",
    "balance": "129498.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "419",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  135128911922\n7702416268@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6000.00",
    "balance": "135498.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "420",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "WDL TFR:IMPS/618121673803/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "35498.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "421",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  192543359361\n9177662131-6@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "3500.00",
    "balance": "38998.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "422",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  299329215179\n9177662131-6@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "300.00",
    "balance": "39298.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "423",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  700778361021\n9398375832@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "2400.00",
    "balance": "41698.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "424",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  132387896588\n9398375832@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "300.00",
    "balance": "41998.71Cr",
    "chequeDetails": "-"
  },
  {
    "id": "425",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61823343171 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "156677.29",
    "balance": "198676.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "426",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "WDL TFR:IMPS/618214711276/UBIN081\n7929/XXXX0026/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-25000.00",
    "credit": "",
    "balance": "173676.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "427",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  040281439317\n8897392188@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "10950.00",
    "balance": "184626.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "428",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  025522843513\n6300962661-h186@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "49999.00",
    "balance": "234625.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "429",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  926582025331\nashritharepally@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "6000.00",
    "balance": "240625.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "430",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  241043925174\n7842320535@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "750.00",
    "balance": "241375.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "431",
    "date": "01-07-2026",
    "valueDate": "01-07-2026",
    "description": "By Transfer:UPI  504848240221\ngsatya@ybl:TRF FR 0093557999335",
    "debit": "-",
    "credit": "150.00",
    "balance": "241525.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "432",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61839660698 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "149250.00",
    "balance": "390775.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "433",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  756579551153\n6309259286@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "420.00",
    "balance": "391195.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "434",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  109038871193\n8008090825@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "2400.00",
    "balance": "393595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "435",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  836018383945\n7702206941@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "50000.00",
    "balance": "443595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "436",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  178504398992\npdeveder@axl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "50000.00",
    "balance": "493595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "437",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  692105969540\n9110514232@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "3000.00",
    "balance": "496595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "438",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "WDL TFR:IMPS/618316788952/KVBL00\n04825/XXXX0253/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-300000.00",
    "credit": "",
    "balance": "196595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "439",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  914897091859\ngaddalasridhar12@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2000.00",
    "balance": "198595.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "440",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  455657270242\nsanthoshnani3@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "7600.00",
    "balance": "206195.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "441",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  816353129983\n9966932532-7@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2200.00",
    "balance": "208395.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "442",
    "date": "02-07-2026",
    "valueDate": "02-07-2026",
    "description": "By Transfer:UPI  177797418711\n9949864909-7@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3900.00",
    "balance": "212295.00Cr",
    "chequeDetails": "-"
  },
  {
    "id": "443",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61842691045 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "88243.15",
    "balance": "300538.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "444",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:UPI  704100136485\n9948773388-2@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "500.00",
    "balance": "301038.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "445",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:UPI  510424763804\n9052820492@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1750.00",
    "balance": "302788.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "446",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:UPI  258060663665\n9440247238@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "77500.00",
    "balance": "380288.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "447",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:UPI  278481730728\nkomatireddygangadhar@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3900.00",
    "balance": "384188.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "448",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "WDL TFR:IMPS/618415850860/HDFC00\n00126/XXXX8994/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "184188.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "449",
    "date": "03-07-2026",
    "valueDate": "03-07-2026",
    "description": "By Transfer:UPI  985242718806\n9666693997-10@ibl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6000.00",
    "balance": "190188.15Cr",
    "chequeDetails": "-"
  },
  {
    "id": "450",
    "date": "04-07-2026",
    "valueDate": "04-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61851846331 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "144606.93",
    "balance": "334795.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "451",
    "date": "04-07-2026",
    "valueDate": "04-07-2026",
    "description": "By Transfer:UPI  034230433212 reddy.\npalepu1@ybl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "3600.00",
    "balance": "338395.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "452",
    "date": "04-07-2026",
    "valueDate": "04-07-2026",
    "description": "By Transfer:UPI  021870317372\n9985392925@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "7500.00",
    "balance": "345895.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "453",
    "date": "04-07-2026",
    "valueDate": "04-07-2026",
    "description": "By Transfer:UPI  450673050352\n6303964351-abab@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1600.00",
    "balance": "347495.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "454",
    "date": "04-07-2026",
    "valueDate": "04-07-2026",
    "description": "By Transfer:UPI  479331674856\n9949864909-7@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1150.00",
    "balance": "348645.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "455",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61863237747 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "91580.00",
    "balance": "440225.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "456",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  479558022011\n9440084984@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1750.00",
    "balance": "441975.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "457",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  085197044158\n9441139183@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "2400.00",
    "balance": "444375.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "458",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  759651526019\n9177662131-4@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1900.00",
    "balance": "446275.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "459",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  311578798334\n7702267557@ibl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "800.00",
    "balance": "447075.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "460",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  028739891056\n9441787752-3@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3500.00",
    "balance": "450575.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "461",
    "date": "05-07-2026",
    "valueDate": "05-07-2026",
    "description": "By Transfer:UPI  911572943750\n9705454908-2@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "3000.00",
    "balance": "453575.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "462",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61873196595 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "129160.00",
    "balance": "582735.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "463",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  541556746246\n9966015028@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1000.00",
    "balance": "583735.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "464",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  384549993703\n8096308088-3@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "550.00",
    "balance": "584285.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "465",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  140550600741\n9949864909-7@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "800.00",
    "balance": "585085.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "466",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  528520410411\n9347271511@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "200.00",
    "balance": "585285.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "467",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  702305569195\n9948237414-2@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2700.00",
    "balance": "587985.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "468",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "WDL TFR:IMPS/618712054266/UBIN056\n2033/XXXX0110/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-11000.00",
    "credit": "",
    "balance": "576985.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "469",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "WDL TFR:IMPS/618712055144/UBIN056\n2033/XXXX0110/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-25000.00",
    "credit": "",
    "balance": "551985.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "470",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "WDL TFR:NEFT UBIN0562033\nTGRBN26187617559 crop care pestic:\nTRF TO 0099506999228",
    "debit": "-13000.00",
    "credit": "",
    "balance": "538985.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "471",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  653937624565\n9848660037@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "500.00",
    "balance": "539485.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "472",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  555342900263\n6083329730270048@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "10000.00",
    "balance": "549485.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "473",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  161698226533\n9346348947@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1700.00",
    "balance": "551185.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "474",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  210953824685\n9885828451-2@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1400.00",
    "balance": "552585.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "475",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  627154077385\nrajkumar6182@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3500.00",
    "balance": "556085.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "476",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  676010132989\n9505032575-4@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "50000.00",
    "balance": "606085.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "477",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  471791279267\nmuskumuthenna@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3100.00",
    "balance": "609185.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "478",
    "date": "06-07-2026",
    "valueDate": "06-07-2026",
    "description": "By Transfer:UPI  099663367187\nthotasrinu642@ibl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "14900.00",
    "balance": "624085.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "479",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61881786885 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "123160.00",
    "balance": "747245.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "480",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  162211642441\nssayareddy@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "6400.00",
    "balance": "753645.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "481",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  163883167187\nssayareddy@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1800.00",
    "balance": "755445.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "482",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  772054926316\n9849950673@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1900.00",
    "balance": "757345.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "483",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  615376125126\n9849950673@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "3800.00",
    "balance": "761145.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "484",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  018929699851\n9346570453@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "550.00",
    "balance": "761695.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "485",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "WDL TFR:IMPS/618812116867/HDFC00\n07544/XXXX5912/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "561695.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "486",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "By Transfer:UPI  507621888713\n9440777682@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1750.00",
    "balance": "563445.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "487",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "WDL TFR:IMPS/618820143966/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "463445.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "488",
    "date": "07-07-2026",
    "valueDate": "07-07-2026",
    "description": "WDL TFR:IMPS/618820145414/HSBC05\n00002/XXXX0630/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "363445.08Cr",
    "chequeDetails": "-"
  },
  {
    "id": "489",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61891430477 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "100602.36",
    "balance": "464047.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "490",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  054147536578\n9985910302-4@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "500.00",
    "balance": "464547.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "491",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  160324858259\njambugaraju@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "500.00",
    "balance": "465047.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "492",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  730111499554\n9618668401@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1500.00",
    "balance": "466547.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "493",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  246001351827\n9441862796@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "6600.00",
    "balance": "473147.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "494",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  226404352568\n9440055520@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "3300.00",
    "balance": "476447.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "495",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  139233989427\n9440055520@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "150.00",
    "balance": "476597.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "496",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  237622059101\nsmtech57@ybl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "9000.00",
    "balance": "485597.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "497",
    "date": "08-07-2026",
    "valueDate": "08-07-2026",
    "description": "By Transfer:UPI  337493286198\npravalika.bakkuri@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1500.00",
    "balance": "487097.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "498",
    "date": "09-07-2026",
    "valueDate": "09-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61903249821 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "57040.00",
    "balance": "544137.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "499",
    "date": "09-07-2026",
    "valueDate": "09-07-2026",
    "description": "By Transfer:UPI  319128199675\npdeveder@ybl:TRF FR 0093557999335",
    "debit": "-",
    "credit": "25000.00",
    "balance": "569137.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "500",
    "date": "09-07-2026",
    "valueDate": "09-07-2026",
    "description": "By Transfer:UPI  689179812153\n9989814577@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "800.00",
    "balance": "569937.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "501",
    "date": "09-07-2026",
    "valueDate": "09-07-2026",
    "description": "By Transfer:UPI  840831256037\n9959908463@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4600.00",
    "balance": "574537.44Cr",
    "chequeDetails": "-"
  },
  {
    "id": "502",
    "date": "10-07-2026",
    "valueDate": "10-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61913178866 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "48346.87",
    "balance": "622884.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "503",
    "date": "10-07-2026",
    "valueDate": "10-07-2026",
    "description": "WDL TFR:UPI  964662583160\n7396637714@sbi:TRF TO\n0093561999330",
    "debit": "-5000.00",
    "credit": "",
    "balance": "617884.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "504",
    "date": "10-07-2026",
    "valueDate": "10-07-2026",
    "description": "By Transfer:UPI  090734760384\n9949864909-7@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1300.00",
    "balance": "619184.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "505",
    "date": "10-07-2026",
    "valueDate": "10-07-2026",
    "description": "WDL TFR:IMPS/619114307211/ICIC000\n0681/XXXX1022/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-130000.00",
    "credit": "",
    "balance": "489184.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "506",
    "date": "10-07-2026",
    "valueDate": "10-07-2026",
    "description": "WDL TFR:UPI  893402017404\nmahdevtredar@icici:TRF TO\n0093562999339",
    "debit": "-18050.00",
    "credit": "",
    "balance": "471134.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "507",
    "date": "11-07-2026",
    "valueDate": "11-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61922616448 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "47475.00",
    "balance": "518609.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "508",
    "date": "11-07-2026",
    "valueDate": "11-07-2026",
    "description": "WDL TFR:UPI  926028526154\n7396637714@sbi:TRF TO\n0093560999330",
    "debit": "-5000.00",
    "credit": "",
    "balance": "513609.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "509",
    "date": "11-07-2026",
    "valueDate": "11-07-2026",
    "description": "By Transfer:UPI  105639551620\nkrishnareddymuthyala.9@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "8300.00",
    "balance": "521909.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "510",
    "date": "11-07-2026",
    "valueDate": "11-07-2026",
    "description": "By Transfer:UPI  128167668126\n9966932532-7@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "900.00",
    "balance": "522809.31Cr",
    "chequeDetails": "-"
  },
  {
    "id": "511",
    "date": "12-07-2026",
    "valueDate": "12-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61933184655 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "41023.22",
    "balance": "563832.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "512",
    "date": "12-07-2026",
    "valueDate": "12-07-2026",
    "description": "By Transfer:UPI  977072220027\n9966932532-7@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "300.00",
    "balance": "564132.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "513",
    "date": "12-07-2026",
    "valueDate": "12-07-2026",
    "description": "By Transfer:UPI  829008714253\n8790243302@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "2000.00",
    "balance": "566132.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "514",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61942423917 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "18980.00",
    "balance": "585112.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "515",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "By Transfer:UPI  787888692363 reddy.\npalepu1@ybl:TRF FR 0093558999334",
    "debit": "-",
    "credit": "5000.00",
    "balance": "590112.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "516",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "By Transfer:UPI  619446992591 gaddam.\nmalleshyadav-1@oksbi:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "6000.00",
    "balance": "596112.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "517",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "WDL TFR:UPI  603976759080\n7396637714@sbi:TRF TO\n0093560999330",
    "debit": "-5000.00",
    "credit": "",
    "balance": "591112.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "518",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "By Transfer:UPI  096655273727\n9032840701@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "8840.00",
    "balance": "599952.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "519",
    "date": "13-07-2026",
    "valueDate": "13-07-2026",
    "description": "By Transfer:UPI  695636904671\n9966932532-7@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "250.00",
    "balance": "600202.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "520",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61953173604 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "71120.00",
    "balance": "671322.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "521",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  518953008755\n8790243302@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "2000.00",
    "balance": "673322.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "522",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "To Cash:AT PAR CA CHQ:Paid toSELF",
    "debit": "200000.00",
    "credit": "",
    "balance": "473322.53Cr",
    "chequeDetails": "828372"
  },
  {
    "id": "523",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "WDL TFR:IMPS/619515541173/KVBL00\n01449/XXXX0073/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "273322.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "524",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "WDL TFR:IMPS/619515541446/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "173322.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "525",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "WDL TFR:IMPS/619516543360/HDFC00\n00642/XXXX0310/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "73322.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "526",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  285133743566\n9542744658@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1600.00",
    "balance": "74922.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "527",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  054553903462\n9542744658@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "200.00",
    "balance": "75122.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "528",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  333769659772\npalepureddy2@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1000.00",
    "balance": "76122.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "529",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  480756480058\n9949864909-7@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3700.00",
    "balance": "79822.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "530",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "By Transfer:UPI  354664462072\njsr90101672422@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "36000.00",
    "balance": "115822.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "531",
    "date": "14-07-2026",
    "valueDate": "14-07-2026",
    "description": "WDL TFR:UPI  826074628739\nQ221630690@ybl:TRF TO\n0093563999338",
    "debit": "-850.00",
    "credit": "",
    "balance": "114972.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "532",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61963035721 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "53770.00",
    "balance": "168742.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "533",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "WDL TFR:IMPS/619609584079/KVBL00\n01449/XXXX0073/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-40000.00",
    "credit": "",
    "balance": "128742.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "534",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "WDL TFR:UPI  584417204041\n19880CCPLTL1316@UBICAPS:TRF TO\n0093563999338",
    "debit": "-50000.00",
    "credit": "",
    "balance": "78742.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "535",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "WDL TFR:IMPS/619612593820/HDFC00\n00240/XXXX0007/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "28742.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "536",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "By Transfer:UPI  868001612721\n6302997742@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "350.00",
    "balance": "29092.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "537",
    "date": "15-07-2026",
    "valueDate": "15-07-2026",
    "description": "By Transfer:UPI  962704741379\n9705483810@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "27260.00",
    "balance": "56352.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "538",
    "date": "16-07-2026",
    "valueDate": "16-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61973202548 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "75661.00",
    "balance": "132013.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "539",
    "date": "16-07-2026",
    "valueDate": "16-07-2026",
    "description": "By Transfer:UPI  590774353313\n6300069586@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "450.00",
    "balance": "132463.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "540",
    "date": "16-07-2026",
    "valueDate": "16-07-2026",
    "description": "By Transfer:UPI  985166846326\n9966932532-7@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1820.00",
    "balance": "134283.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "541",
    "date": "16-07-2026",
    "valueDate": "16-07-2026",
    "description": "WDL TFR:UPI  397888634357\npadmagogoneni78@okicici:TRF TO\n0093559999333",
    "debit": "-10000.00",
    "credit": "",
    "balance": "124283.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "542",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61980833438 PhonePe Lim:\nTRF FR 0099599999229",
    "debit": "-",
    "credit": "41710.00",
    "balance": "165993.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "543",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  538923354310\nssayareddy@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1500.00",
    "balance": "167493.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "544",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  760795992670\nssayareddy@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "800.00",
    "balance": "168293.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "545",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  943230468715\n9491535443@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "210.00",
    "balance": "168503.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "546",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  651575012464\n7093389275@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1000.00",
    "balance": "169503.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "547",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  458292737097\npdeveder@axl:TRF FR 0093558999334",
    "debit": "-",
    "credit": "30000.00",
    "balance": "199503.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "548",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  533046120931\n9885828451-2@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1500.00",
    "balance": "201003.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "549",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  428743817105\n9494457625-3@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "18260.00",
    "balance": "219263.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "550",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  278324350623\nrameshreddyk1121@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3700.00",
    "balance": "222963.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "551",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "WDL TFR:IMPS/619817746484/KVBL00\n01449/XXXX0073/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-16250.00",
    "credit": "",
    "balance": "206713.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "552",
    "date": "17-07-2026",
    "valueDate": "17-07-2026",
    "description": "By Transfer:UPI  437034049327\nrajkumar6182@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "3350.00",
    "balance": "210063.53Cr",
    "chequeDetails": "-"
  },
  {
    "id": "553",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP61992988368 PhonePe Lim:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "75117.72",
    "balance": "285181.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "554",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "By Transfer:UPI  654678400497\nbaddenna@ybl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "2000.00",
    "balance": "287181.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "555",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "By Transfer:UPI  095253062243\n8978442905@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1160.00",
    "balance": "288341.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "556",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "WDL TFR:IMPS/619917808323/CNRB00\n13315/XXXX8449/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "188341.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "557",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "WDL TFR:IMPS/619917809341/KKBK00\n08372/XXXX8770/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "88341.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "558",
    "date": "18-07-2026",
    "valueDate": "18-07-2026",
    "description": "By Transfer:UPI  643071068170\n9959908463@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1150.00",
    "balance": "89491.25Cr",
    "chequeDetails": "-"
  },
  {
    "id": "559",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62002748913 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "109392.30",
    "balance": "198883.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "560",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  711978690375\n8179728756@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "160.00",
    "balance": "199043.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "561",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  524860800238\n9966117622-8@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1800.00",
    "balance": "200843.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "562",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  978413114008\n9177662131-2@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "6200.00",
    "balance": "207043.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "563",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  021573661562\n9177662131-2@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1500.00",
    "balance": "208543.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "564",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  307176750822\n9542744658@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1750.00",
    "balance": "210293.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "565",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  469981247048\n9542744658@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "200.00",
    "balance": "210493.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "566",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  847403084681\nsallaprashanth2373@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "550.00",
    "balance": "211043.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "567",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  941429255036 anugu.\nsayareddy2@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "40.00",
    "balance": "211083.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "568",
    "date": "19-07-2026",
    "valueDate": "19-07-2026",
    "description": "By Transfer:UPI  078152324618\nrajabaddam@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "360.00",
    "balance": "211443.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "569",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62011454081 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "55795.00",
    "balance": "267238.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "570",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "By Transfer:UPI  856927839863\n9912174732-9@ibl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "1000.00",
    "balance": "268238.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "571",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "By Transfer:UPI  021384431815\n9381254480-3@ibl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "600.00",
    "balance": "268838.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "572",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "By Transfer:UPI  669030098527\n9966932532-7@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "120.00",
    "balance": "268958.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "573",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "By Transfer:UPI  365471220006\n9505315427@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6350.00",
    "balance": "275308.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "574",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "WDL TFR:UPI  631387110439\n19880CCPLTL1316@UBICAPS:TRF TO\n0093562999339",
    "debit": "-50000.00",
    "credit": "",
    "balance": "225308.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "575",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "WDL TFR:UPI  367719070093\nBHARATPE.9050874447@fbpe:TRF TO\n0093560999330",
    "debit": "-36250.00",
    "credit": "",
    "balance": "189058.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "576",
    "date": "20-07-2026",
    "valueDate": "20-07-2026",
    "description": "WDL TFR:UPI  255012300415 Vyapar.\n172141900133@hdfcbank:TRF TO\n0093559999333",
    "debit": "-7800.00",
    "credit": "",
    "balance": "181258.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "577",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62022822644 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "70695.00",
    "balance": "251953.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "578",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  690155751716\n9392668528@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "6300.00",
    "balance": "258253.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "579",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  269278518462\n7702822173-4@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "600.00",
    "balance": "258853.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "580",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  532192598585\nmuskurajareddy069@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "50000.00",
    "balance": "308853.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "581",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  126642221446\nkanchugangadhar1961-2@okhdfcbank:\nTRF FR 0093556999336",
    "debit": "-",
    "credit": "5000.00",
    "balance": "313853.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "582",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:NEFT UBIN0825107\n002871105894 RAJA RAJESH:TRF\nFR 0099579999223",
    "debit": "-",
    "credit": "43550.00",
    "balance": "357403.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "583",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  184832187209\n9949864909@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2400.00",
    "balance": "359803.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "584",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "WDL TFR:IMPS/620218981729/CNRB00\n13310/XXXX7508/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-40000.00",
    "credit": "",
    "balance": "319803.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "585",
    "date": "21-07-2026",
    "valueDate": "21-07-2026",
    "description": "By Transfer:UPI  323553937898\n7075779565@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2400.00",
    "balance": "322203.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "586",
    "date": "22-07-2026",
    "valueDate": "22-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62032995687 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "42364.01",
    "balance": "364567.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "587",
    "date": "22-07-2026",
    "valueDate": "22-07-2026",
    "description": "By Transfer:UPI  047178128328\n9440777682@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "700.00",
    "balance": "365267.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "588",
    "date": "22-07-2026",
    "valueDate": "22-07-2026",
    "description": "By Transfer:UPI  156261763527\n9441646854@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "15300.00",
    "balance": "380567.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "589",
    "date": "22-07-2026",
    "valueDate": "22-07-2026",
    "description": "By Transfer:UPI  126696443711\nnayakudukishannayakudu@okhdfcban:\nTRF FR 0093555999337",
    "debit": "-",
    "credit": "1300.00",
    "balance": "381867.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "590",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62043289434 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "39710.00",
    "balance": "421577.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "591",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:UPI  054733383618\n9177662131@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "500.00",
    "balance": "422077.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "592",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "WDL TFR:IMPS/620412080306/KVBL00\n01449/XXXX7830/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-83400.00",
    "credit": "",
    "balance": "338677.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "593",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:UPI  670368857138\n9177662050@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "990.00",
    "balance": "339667.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "594",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:UPI  382454288052\n8179676603-2@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "650.00",
    "balance": "340317.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "595",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:UPI  448597909781\n8008483067@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "3500.00",
    "balance": "343817.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "596",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "By Transfer:UPI  964245566639\n8897392188@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "6160.00",
    "balance": "349977.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "597",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "WDL TFR:IMPS/620420112584/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-10000.00",
    "credit": "",
    "balance": "339977.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "598",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "WDL TFR:IMPS/620420112804/HSBC05\n00002/XXXX0630/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-20000.00",
    "credit": "",
    "balance": "319977.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "599",
    "date": "23-07-2026",
    "valueDate": "23-07-2026",
    "description": "WDL TFR:IMPS/620420113526/HDFC00\n00240/XXXX4041/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-10000.00",
    "credit": "",
    "balance": "309977.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "600",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62051427722 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "33990.00",
    "balance": "343967.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "601",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:UPI  755836608325\ndspguptha1@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "9700.00",
    "balance": "353667.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "602",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:UPI  110292371384\n9110513611-3@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "50000.00",
    "balance": "403667.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "603",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "WDL TFR:UPI  290697271683\nbachuwarsachin@okicici:TRF TO\n0093563999338",
    "debit": "-10800.00",
    "credit": "",
    "balance": "392867.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "604",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:UPI  945510544067\ngaddalasridhar12@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "100.00",
    "balance": "392967.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "605",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:UPI  036199654860\n9959354408@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "950.00",
    "balance": "393917.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "606",
    "date": "24-07-2026",
    "valueDate": "24-07-2026",
    "description": "By Transfer:UPI  695519345080 raja.\njaidi@axl:TRF FR 0093555999337",
    "debit": "-",
    "credit": "2050.00",
    "balance": "395967.56Cr",
    "chequeDetails": "-"
  },
  {
    "id": "607",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62062591951 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "42871.38",
    "balance": "438838.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "608",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  932287550491\n9701934893@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2050.00",
    "balance": "440888.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "609",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  225813074047\n9701934893@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "200.00",
    "balance": "441088.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "610",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  254486452058\n9666136728-2@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "500.00",
    "balance": "441588.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "611",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  828299544600\ndobbalarajesh@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "25000.00",
    "balance": "466588.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "612",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "WDL TFR:IMPS/620613209155/SBIN002\n0374/XXXX5377/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-77500.00",
    "credit": "",
    "balance": "389088.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "613",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  882965619347\n9959908463@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "430.00",
    "balance": "389518.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "614",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "By Transfer:UPI  179884713855\n8897787251@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "700.00",
    "balance": "390218.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "615",
    "date": "25-07-2026",
    "valueDate": "25-07-2026",
    "description": "WDL TFR:IMPS/620617219501/CNRB00\n13315/XXXX8449/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-10000.00",
    "credit": "",
    "balance": "380218.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "616",
    "date": "26-07-2026",
    "valueDate": "26-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62072925949 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "60780.00",
    "balance": "440998.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "617",
    "date": "26-07-2026",
    "valueDate": "26-07-2026",
    "description": "By Transfer:UPI  030131099215\n9441646854@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4250.00",
    "balance": "445248.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "618",
    "date": "26-07-2026",
    "valueDate": "26-07-2026",
    "description": "By Transfer:UPI  530982472534\n9966932532-8@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "120.00",
    "balance": "445368.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "619",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62081567944 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "29560.00",
    "balance": "474928.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "620",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "WDL TFR:IMPS/620811332971/UBIN081\n7929/XXXX0026/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "424928.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "621",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "WDL TFR:UPI  738855017063\n19880CCPLTL1316@UBICAPS:TRF TO\n0093563999338",
    "debit": "-20000.00",
    "credit": "",
    "balance": "404928.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "622",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "WDL TFR:UPI  927676003082\n19880CCPLTL1316@UBICAPS:TRF TO\n0093562999339",
    "debit": "-5000.00",
    "credit": "",
    "balance": "399928.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "623",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "WDL TFR:UPI  060711512276\n7396637714@sbi:TRF TO\n0093563999338",
    "debit": "-10000.00",
    "credit": "",
    "balance": "389928.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "624",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Transfer:UPI  030060842581\n8897392188@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "18250.00",
    "balance": "408178.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "625",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "123000.00",
    "balance": "531178.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "626",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Transfer:UPI  064220737213\n6300069586@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "560.00",
    "balance": "531738.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "627",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Transfer:UPI  277120225780\n9701889453@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "18600.00",
    "balance": "550338.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "628",
    "date": "27-07-2026",
    "valueDate": "27-07-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "2500.00",
    "balance": "552838.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "629",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62093137940 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "39560.00",
    "balance": "592398.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "630",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "By Transfer:UPI  551479433576\n9912020376@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "10250.00",
    "balance": "602648.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "631",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "By Transfer:UPI  434171594141\n9603909612@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "10000.00",
    "balance": "612648.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "632",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "By Transfer:UPI  417066664804\n9177662131@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "400.00",
    "balance": "613048.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "633",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "WDL TFR:UPI  224012522985 paytm.\ns208k59@pty:TRF TO 0093116999339",
    "debit": "-8800.00",
    "credit": "",
    "balance": "604248.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "634",
    "date": "28-07-2026",
    "valueDate": "28-07-2026",
    "description": "By Transfer:UPI  832708089628\n8330985236-2@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "9500.00",
    "balance": "613748.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "635",
    "date": "29-07-2026",
    "valueDate": "29-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62101551652 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "23640.00",
    "balance": "637388.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "636",
    "date": "29-07-2026",
    "valueDate": "29-07-2026",
    "description": "By Transfer:UPI  394782434375\n9912324249@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "600.00",
    "balance": "637988.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "637",
    "date": "29-07-2026",
    "valueDate": "29-07-2026",
    "description": "WDL TFR:UPI  894882371528\n9440466551@axl:TRF TO\n0093562999339",
    "debit": "-29550.00",
    "credit": "",
    "balance": "608438.94Cr",
    "chequeDetails": "-"
  },
  {
    "id": "638",
    "date": "30-07-2026",
    "valueDate": "30-07-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62112959149 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "17493.80",
    "balance": "625932.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "639",
    "date": "30-07-2026",
    "valueDate": "30-07-2026",
    "description": "By Transfer:UPI  805818735662\n9440465795@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "33425.00",
    "balance": "659357.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "640",
    "date": "31-07-2026",
    "valueDate": "31-07-2026",
    "description": "WDL TFR:TRF TO 0092292999331",
    "debit": "-30000.00",
    "credit": "",
    "balance": "629357.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "641",
    "date": "31-07-2026",
    "valueDate": "31-07-2026",
    "description": "By Transfer:UPI  098629831442\nyerramnaresh@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "9900.00",
    "balance": "639257.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "642",
    "date": "31-07-2026",
    "valueDate": "31-07-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "11000.00",
    "balance": "650257.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "643",
    "date": "31-07-2026",
    "valueDate": "31-07-2026",
    "description": "CEMTEX DEP:CTS CLG 31072026 CHQ\nNo 800890",
    "debit": "-",
    "credit": "900000.00",
    "balance": "1550257.74Cr",
    "chequeDetails": "-"
  },
  {
    "id": "644",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62132374006 PhonePe Lim:\nTRF FR 0099559999226",
    "debit": "-",
    "credit": "28405.89",
    "balance": "1578663.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "645",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "By Transfer:UPI  352354354581\n9912193894@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "350.00",
    "balance": "1579013.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "646",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "WDL TFR:IMPS/621313665827/UTIB000\n1634/XXXX3670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-79000.00",
    "credit": "",
    "balance": "1500013.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "647",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "WDL TFR:UPI  643077022331\n19880CCPLTL1316@UBICAPS:TRF TO\n0093559999333",
    "debit": "-30000.00",
    "credit": "",
    "balance": "1470013.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "648",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "19000.00",
    "balance": "1489013.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "649",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "By Transfer:UPI  184755747616\n6309259286@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3800.00",
    "balance": "1492813.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "650",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "CAS CHQ XFER WD:AT PAR CA CHQ:\nTO FD 704390:TRF TO 0079112017014",
    "debit": "800000.00",
    "credit": "",
    "balance": "692813.63Cr",
    "chequeDetails": "828373"
  },
  {
    "id": "651",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "By Transfer:UPI  481936483313\n8790337753@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "400.00",
    "balance": "693213.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "652",
    "date": "01-08-2026",
    "valueDate": "01-08-2026",
    "description": "WDL TFR:UPI  506131879332\n19880CCPLTL1316@UBICAPS:TRF TO\n0084199999337",
    "debit": "-10000.00",
    "credit": "",
    "balance": "683213.63Cr",
    "chequeDetails": "-"
  },
  {
    "id": "653",
    "date": "02-08-2026",
    "valueDate": "02-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62143265374 PhonePe Lim:\nTRF FR 0099659999223",
    "debit": "-",
    "credit": "68237.16",
    "balance": "751450.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "654",
    "date": "02-08-2026",
    "valueDate": "02-08-2026",
    "description": "By Transfer:UPI  169568933570\n9666693997-3@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "350.00",
    "balance": "751800.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "655",
    "date": "02-08-2026",
    "valueDate": "02-08-2026",
    "description": "By Transfer:UPI  342171680591\n9000579153-2@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "500.00",
    "balance": "752300.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "656",
    "date": "02-08-2026",
    "valueDate": "02-08-2026",
    "description": "By Transfer:UPI  539066461933\n9912407148-4@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "6500.00",
    "balance": "758800.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "657",
    "date": "02-08-2026",
    "valueDate": "02-08-2026",
    "description": "By Transfer:UPI  251363197209\ndisousa@axl:TRF FR 0093554999338",
    "debit": "-",
    "credit": "600.00",
    "balance": "759400.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "658",
    "date": "03-08-2026",
    "valueDate": "03-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62153311237 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "45110.00",
    "balance": "804510.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "659",
    "date": "03-08-2026",
    "valueDate": "03-08-2026",
    "description": "By Transfer:UPI  928107958651\n9177662131-2@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "700.00",
    "balance": "805210.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "660",
    "date": "04-08-2026",
    "valueDate": "04-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62162014717 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "27000.00",
    "balance": "832210.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "661",
    "date": "04-08-2026",
    "valueDate": "04-08-2026",
    "description": "WDL TFR:UPI  855037418518\nguruc95157@barodampay:TRF TO\n0093560999330",
    "debit": "-15375.00",
    "credit": "",
    "balance": "816835.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "662",
    "date": "04-08-2026",
    "valueDate": "04-08-2026",
    "description": "WDL TFR:UPI  745385177865\n19880CCPLTL1316@UBICAPS:TRF TO\n0084199999337",
    "debit": "-42000.00",
    "credit": "",
    "balance": "774835.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "663",
    "date": "04-08-2026",
    "valueDate": "04-08-2026",
    "description": "By Transfer:UPI  979040056631\n6300069586@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1500.00",
    "balance": "776335.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "664",
    "date": "04-08-2026",
    "valueDate": "04-08-2026",
    "description": "By Transfer:UPI  190738262918\n7659074841@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "2000.00",
    "balance": "778335.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "665",
    "date": "05-08-2026",
    "valueDate": "05-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62173789893 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "22660.00",
    "balance": "800995.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "666",
    "date": "05-08-2026",
    "valueDate": "05-08-2026",
    "description": "By Transfer:UPI  576838318279\nram29959@ibl:TRF FR 0093115999330",
    "debit": "-",
    "credit": "740.00",
    "balance": "801735.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "667",
    "date": "05-08-2026",
    "valueDate": "05-08-2026",
    "description": "By Transfer:UPI  865069279520\n9885828451-2@ybl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "4250.00",
    "balance": "805985.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "668",
    "date": "05-08-2026",
    "valueDate": "05-08-2026",
    "description": "By Transfer:UPI  814812982963\n9705192355@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "17200.00",
    "balance": "823185.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "669",
    "date": "05-08-2026",
    "valueDate": "05-08-2026",
    "description": "WDL TFR:IMPS/621720955465/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-1000.00",
    "credit": "",
    "balance": "822185.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "670",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62181718142 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "40670.00",
    "balance": "862855.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "671",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Transfer:UPI  089017218754\n9121972261-3@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2500.00",
    "balance": "865355.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "672",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "47000.00",
    "balance": "912355.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "673",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Transfer:UPI  262796592672\n9949864909-7@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "1850.00",
    "balance": "914205.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "674",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "WDL TFR:IMPS/621816999071/BARB0I\nNTMUM/XXXX0670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "864205.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "675",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Transfer:UPI  683334479901\n9177662131@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "4200.00",
    "balance": "868405.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "676",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "WDL TFR:IMPS/621818003610/SBIN000\n3257/XXXX2338/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "818405.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "677",
    "date": "06-08-2026",
    "valueDate": "06-08-2026",
    "description": "By Transfer:TRF FR 0093557999335",
    "debit": "-",
    "credit": "1850.00",
    "balance": "820255.79Cr",
    "chequeDetails": "-"
  },
  {
    "id": "678",
    "date": "07-08-2026",
    "valueDate": "07-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62193141554 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "40697.16",
    "balance": "860952.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "679",
    "date": "07-08-2026",
    "valueDate": "07-08-2026",
    "description": "By Transfer:UPI  823882938380\n9177163896-3@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "25000.00",
    "balance": "885952.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "680",
    "date": "07-08-2026",
    "valueDate": "07-08-2026",
    "description": "WDL TFR:UPI  982285079892\n19880CCPLTL1316@UBICAPS:TRF TO\n0093559999333",
    "debit": "-22000.00",
    "credit": "",
    "balance": "863952.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "681",
    "date": "07-08-2026",
    "valueDate": "07-08-2026",
    "description": "By Cash:Deposit by",
    "debit": "-",
    "credit": "12000.00",
    "balance": "875952.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "682",
    "date": "07-08-2026",
    "valueDate": "07-08-2026",
    "description": "By Transfer:UPI  877003059248\n9505032575-2@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "50000.00",
    "balance": "925952.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "683",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62202207023 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "24210.00",
    "balance": "950162.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "684",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "By Transfer:UPI  653082035755\n9959908463@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "3930.00",
    "balance": "954092.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "685",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "WDL TFR:UPI  645747176616\n19880CCPLTL1316@UBICAPS:TRF TO\n0093563999338",
    "debit": "-11000.00",
    "credit": "",
    "balance": "943092.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "686",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "By Transfer:NEFT UTIB0002602\nAXOMB22002082918 SRI VINAYAK:\nTRF FR 0099589999221",
    "debit": "-",
    "credit": "78500.00",
    "balance": "1021592.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "687",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "By Transfer:UPI  836017518144\n6300962661-h186@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2200.00",
    "balance": "1023792.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "688",
    "date": "08-08-2026",
    "valueDate": "08-08-2026",
    "description": "WDL TFR:UPI  281697740337\n7997412646@axl:TRF TO\n0093563999338",
    "debit": "-12000.00",
    "credit": "",
    "balance": "1011792.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "689",
    "date": "09-08-2026",
    "valueDate": "09-08-2026",
    "description": "By Transfer:UPI  601211301143\n76808184211@axl",
    "debit": "-",
    "credit": "4000.00",
    "balance": "1015792.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "690",
    "date": "09-08-2026",
    "valueDate": "09-08-2026",
    "description": "By Transfer:UPI  041753137634\n9948391187@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "5000.00",
    "balance": "1020792.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "691",
    "date": "09-08-2026",
    "valueDate": "09-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62210073061 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "60772.00",
    "balance": "1081564.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "692",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62221891362 PhonePe Lim:\nTRF FR 0099539999220",
    "debit": "-",
    "credit": "42980.00",
    "balance": "1124544.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "693",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:UPI  757236190528\n9885828451@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "2000.00",
    "balance": "1126544.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "694",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:UPI  622242002720 gaddam.\nmalleshyadav-1@oksbi:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "6000.00",
    "balance": "1132544.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "695",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "WDL TFR:UPI  921178240335 vanga.\nharikrishna@axl:TRF TO\n0093561999330",
    "debit": "-3000.00",
    "credit": "",
    "balance": "1129544.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "696",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "WDL TFR:IMPS/622215239340/UBIN090\n6352/XXXX7542/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-69000.00",
    "credit": "",
    "balance": "1060544.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "697",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:UPI  935031916115\n9505045165-2@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "900.00",
    "balance": "1061444.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "698",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "WDL TFR:UPI  432523114580\n19880CCPLTL1316@UBICAPS:TRF TO\n0093559999333",
    "debit": "-16500.00",
    "credit": "",
    "balance": "1044944.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "699",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:UPI  218409230356\nanuguprasadreddycanara@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "11800.00",
    "balance": "1056744.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "700",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "WDL TFR:UPI  034099300223 kumar.\nuppalanchi@axl:TRF TO 0093562999339",
    "debit": "-5300.00",
    "credit": "",
    "balance": "1051444.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "701",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "WDL TFR:UPI  977963609306 vanga.\nharikrishna@axl",
    "debit": "-1000.00",
    "credit": "",
    "balance": "1050444.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "702",
    "date": "10-08-2026",
    "valueDate": "10-08-2026",
    "description": "By Transfer:IMPS/622219685633/GREE\nNFIELDAGRIM/XXXX9702/NOREMAR:\nTRF FR 0092291999332",
    "debit": "-",
    "credit": "120000.00",
    "balance": "1170444.95Cr",
    "chequeDetails": "-"
  },
  {
    "id": "703",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62234147077 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "131868.60",
    "balance": "1302313.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "704",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Transfer:UPI  159001616480\n9441646854@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "9320.00",
    "balance": "1311633.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "705",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Transfer:UPI  489761401708\n9440247238@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "51300.00",
    "balance": "1362933.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "706",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "69000.00",
    "balance": "1431933.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "707",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "WDL TFR:IMPS/622312289299/UBIN080\n3871/XXXX1778/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-30000.00",
    "credit": "",
    "balance": "1401933.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "708",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Transfer:UPI  303391100982\nrajkumargaripally@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "21200.00",
    "balance": "1423133.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "709",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "WDL TFR:IMPS/622317305186/HDFC00\n04989/XXXX0371/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "1223133.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "710",
    "date": "11-08-2026",
    "valueDate": "11-08-2026",
    "description": "By Transfer:UPI  782475899795\nkommularavi2@axl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "8000.00",
    "balance": "1231133.55Cr",
    "chequeDetails": "-"
  },
  {
    "id": "711",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62243419732 PhonePe Lim:\nTRF FR 0099509999225",
    "debit": "-",
    "credit": "55664.74",
    "balance": "1286798.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "712",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:UPI  162143830337\npdeveder@axl:TRF FR 0093555999337",
    "debit": "-",
    "credit": "20000.00",
    "balance": "1306798.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "713",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:UPI  337678891570\n9505032575-4@ybl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "50000.00",
    "balance": "1356798.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "714",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:UPI  433706221435\n9505032575-2@ybl:TRF TO\n0084199999337",
    "debit": "-50000.00",
    "credit": "",
    "balance": "1306798.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "715",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:IMPS/622415359077/BARB0I\nNTMUM/XXXX0670/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "1256798.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "716",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:IMPS/622416361259/KVBL00\n01449/XXXX7830/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-49580.00",
    "credit": "",
    "balance": "1207218.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "717",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:UPI  321765213003\n9542744658@ybl:TRF FR\n0093557999335",
    "debit": "-",
    "credit": "1400.00",
    "balance": "1208618.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "718",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:NEFT UTIB000RAZP\nTGRBN26224756886 nurture agtech l:\nTRF TO 0099506999228",
    "debit": "-25000.00",
    "credit": "",
    "balance": "1183618.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "719",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:NEFT UTIB000RAZP\nTGRBN26224756897 nurture agtech l:\nTRF TO 0099506999228",
    "debit": "-35200.00",
    "credit": "",
    "balance": "1148418.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "720",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:IMPS/622419168091/RAZO\nRPAYPAYMENT/XXXX9702/NURTURE:\nTRF FR 0092291999332",
    "debit": "-",
    "credit": "25000.00",
    "balance": "1173418.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "721",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "By Transfer:IMPS/622419168609/RAZO\nRPAYPAYMENT/XXXX9702/NURTURE:\nTRF FR 0092291999332",
    "debit": "-",
    "credit": "3520.00",
    "balance": "1176938.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "722",
    "date": "12-08-2026",
    "valueDate": "12-08-2026",
    "description": "WDL TFR:IMPS/622419375386/ICIC000\n0681/XXXX1022/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-63000.00",
    "credit": "",
    "balance": "1113938.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "723",
    "date": "13-08-2026",
    "valueDate": "13-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62252067881 PhonePe Lim:\nTRF FR 0099579999223",
    "debit": "-",
    "credit": "39380.00",
    "balance": "1153318.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "724",
    "date": "13-08-2026",
    "valueDate": "13-08-2026",
    "description": "By Transfer:UPI  600064016429\nnaralanarayana6282@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1.00",
    "balance": "1153319.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "725",
    "date": "13-08-2026",
    "valueDate": "13-08-2026",
    "description": "By Transfer:UPI  931813972374\nnaralanarayana6282@ybl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "57300.00",
    "balance": "1210619.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "726",
    "date": "13-08-2026",
    "valueDate": "13-08-2026",
    "description": "By Transfer:UPI  266530171448\n9966488995@axl:TRF FR\n0093556999336",
    "debit": "-",
    "credit": "1200.00",
    "balance": "1211819.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "727",
    "date": "13-08-2026",
    "valueDate": "13-08-2026",
    "description": "By Transfer:UPI  715923192430\n99635918@ybl:TRF FR 0093556999336",
    "debit": "-",
    "credit": "3600.00",
    "balance": "1215419.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "728",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62264221980 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "30820.00",
    "balance": "1246239.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "729",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "WDL TFR:IMPS/622611462302/KVBL00\n01449/XXXX0073/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "1196239.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "730",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "DEP TFR:10000222   FI TRANSACTION\n62260659150179:TRF FR\n0079052594268",
    "debit": "-",
    "credit": "17500.00",
    "balance": "1213739.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "731",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "By Transfer:UPI  567171932418\n8096253728@ibl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "3700.00",
    "balance": "1217439.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "732",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "WDL TFR:UPI  434755474697 gocolors.\n42605134@hdfcbank:TRF TO\n0093563999338",
    "debit": "-2396.00",
    "credit": "",
    "balance": "1215043.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "733",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "WDL TFR:UPI  925145011894 paytm.\ns208k59@pty:TRF TO 0093561999330",
    "debit": "-9550.00",
    "credit": "",
    "balance": "1205493.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "734",
    "date": "14-08-2026",
    "valueDate": "14-08-2026",
    "description": "By Transfer:UPI  139234099351\nsaliganti.naresh@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "800.00",
    "balance": "1206293.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "735",
    "date": "15-08-2026",
    "valueDate": "15-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62272556420 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "36041.00",
    "balance": "1242334.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "736",
    "date": "15-08-2026",
    "valueDate": "15-08-2026",
    "description": "WDL TFR:UPI  664414482856\n7730085178-2@axl:TRF TO\n0093561999330",
    "debit": "-9000.00",
    "credit": "",
    "balance": "1233334.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "737",
    "date": "15-08-2026",
    "valueDate": "15-08-2026",
    "description": "WDL TFR:IMPS/622713521452/KKBK00\n08370/XXXX6505/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "1033334.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "738",
    "date": "15-08-2026",
    "valueDate": "15-08-2026",
    "description": "By Transfer:UPI  001729699522\n7702416268@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "70000.00",
    "balance": "1103334.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "739",
    "date": "16-08-2026",
    "valueDate": "16-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62284160374 PhonePe Lim:\nTRF FR 0099549999228",
    "debit": "-",
    "credit": "51945.00",
    "balance": "1155279.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "740",
    "date": "16-08-2026",
    "valueDate": "16-08-2026",
    "description": "By Transfer:UPI  919647808833\n7702416268-2@axl:TRF FR\n0093558999334",
    "debit": "-",
    "credit": "90000.00",
    "balance": "1245279.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "741",
    "date": "16-08-2026",
    "valueDate": "16-08-2026",
    "description": "By Transfer:UPI  403090067949\nusermahesh.katta@axl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "1500.00",
    "balance": "1246779.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "742",
    "date": "16-08-2026",
    "valueDate": "16-08-2026",
    "description": "By Transfer:UPI  374924611856\n9441646854@axl:TRF FR\n0093115999330",
    "debit": "-",
    "credit": "9960.00",
    "balance": "1256739.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "743",
    "date": "17-08-2026",
    "valueDate": "17-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62294031357 PhonePe Lim:\nTRF FR 0099649999225",
    "debit": "-",
    "credit": "40765.00",
    "balance": "1297504.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "744",
    "date": "17-08-2026",
    "valueDate": "17-08-2026",
    "description": "By Transfer:UPI  535076988393\n9951189389@axl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "100.00",
    "balance": "1297604.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "745",
    "date": "17-08-2026",
    "valueDate": "17-08-2026",
    "description": "By Cash:Deposit by  ADFPN1935M",
    "debit": "-",
    "credit": "69000.00",
    "balance": "1366604.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "746",
    "date": "17-08-2026",
    "valueDate": "17-08-2026",
    "description": "WDL TFR:IMPS/622919640374/KKBK00\n08370/XXXX6505/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-200000.00",
    "credit": "",
    "balance": "1166604.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "747",
    "date": "18-08-2026",
    "valueDate": "18-08-2026",
    "description": "WDL TFR:IMPS/622919640550/KKBK00\n08370/XXXX6505/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-100000.00",
    "credit": "",
    "balance": "1066604.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "748",
    "date": "20-08-2026",
    "valueDate": "20-08-2026",
    "description": "WDL TFR:IMPS/622919640658/HDFC00\n00240/XXXX0007/Bill Paymen:TRF TO\n0092292999331",
    "debit": "-50000.00",
    "credit": "",
    "balance": "1016604.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "749",
    "date": "20-08-2026",
    "valueDate": "20-08-2026",
    "description": "By Transfer:NEFT YESB0000001\nYESAP62304150765 PhonePe Lim:\nTRF FR 0099569999225",
    "debit": "-",
    "credit": "74540.00",
    "balance": "1091144.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "750",
    "date": "21-08-2026",
    "valueDate": "21-08-2026",
    "description": "By Transfer:TRF FR 0093558999334",
    "debit": "-",
    "credit": "480.00",
    "balance": "1091624.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "751",
    "date": "21-08-2026",
    "valueDate": "21-08-2026",
    "description": "By Transfer:UPI  975613956171\n7893436690-2@ybl:TRF FR\n0093554999338",
    "debit": "-",
    "credit": "800.00",
    "balance": "1092424.29Cr",
    "chequeDetails": "-"
  },
  {
    "id": "752",
    "date": "21-08-2026",
    "valueDate": "21-08-2026",
    "description": "By Transfer:UPI  395893282286\n9885828451-2@ybl:TRF FR\n0093555999337",
    "debit": "-",
    "credit": "1650.00",
    "balance": "1094074.29Cr",
    "chequeDetails": "-"
  }
];
