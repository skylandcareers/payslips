export interface KotakTransaction {
  id: string;
  date: string;
  description: string;
  refNo: string;
  debit: string;
  credit: string;
  balance: string;
}

export interface KotakAccountDetails {
  customerName: string;
  crn: string;
  addressLines: string[];
  micr: string;
  ifsc: string;
  accountNumber: string;
  accountType: string;
  branch: string;
  accountStatus: string;
  nomineeRegistered: string;
  currency: string;
  periodFrom: string;
  periodTo: string;
  statementDate: string;
  openingBalance: string;
  branchAddress: string;
  branchPhone: string;
  tollFree: string;
  registeredOffice: string;
  cin: string;
}

export const defaultKotakAccountDetails: KotakAccountDetails = {
  customerName: "Shapuram Sudheer Kumar",
  crn: "xxxxxx030",
  addressLines: [
    "House Number 1-163/5A",
    "Nandipet",
    "Nizamabad",
    "Nizamabad - 503212",
    "Telangana - India"
  ],
  micr: "503485622",
  ifsc: "KKBK0008370",
  accountNumber: "2511836505",
  accountType: "Savings",
  branch: "Mupkal",
  accountStatus: "Active",
  nomineeRegistered: "Yes",
  currency: "INDIAN RUPEE",
  periodFrom: "17 Jun 2026",
  periodTo: "24 Sep 2026",
  statementDate: "24 Sep 2026, 11:16",
  openingBalance: "7,49,725.57",
  branchAddress: "3-6 Main Road, Mupkal-503218, Telangana, India",
  branchPhone: "7337353738",
  tollFree: "1800 4100",
  registeredOffice: "27 BKC, C 27, G Block, Bandra Kurla Complex, Bandra (E), Mumbai - 400 051. www.kotak.bank.in",
  cin: "L65110MH1985PLC038137"
};

// The supplied statement prints a different generation time on page 6.
export const kotakStatementDateOverrides: Record<number, string> = {
  6: '21 Sep 2026, 15:16',
};

export const defaultKotakTransactions: KotakTransaction[] = [
  {
    "id": "1",
    "date": "18 Jun 2026",
    "description": "MB: Sent NEFT/ chinta naveen/ STATE B/\n3790040",
    "refNo": "000532194403",
    "debit": "100.00",
    "credit": "",
    "balance": "7,49,625.57"
  },
  {
    "id": "2",
    "date": "19 Jun 2026",
    "description": "UPI/Jio Recharge/967799660033/Payment\nfrom Ph",
    "refNo": "UPI-613961379216",
    "debit": "39.00",
    "credit": "",
    "balance": "7,49,586.57"
  },
  {
    "id": "3",
    "date": "19 Jun 2026",
    "description": "UPI/GANGARAM\nCHOWD/220420329278/Payment from Ph",
    "refNo": "UPI-613974007857",
    "debit": "30.00",
    "credit": "",
    "balance": "7,49,556.57"
  },
  {
    "id": "4",
    "date": "20 Jun 2026",
    "description": "UPI/Jio Recharge/984387142612/Payment\nfrom Ph",
    "refNo": "UPI-614045360604",
    "debit": "904.00",
    "credit": "",
    "balance": "7,48,652.57"
  },
  {
    "id": "5",
    "date": "21 Jun 2026",
    "description": "UPI/MEDURI\nLAKSHMI/068648640658/Payment from Ph",
    "refNo": "UPI-614168009122",
    "debit": "",
    "credit": "3,000.00",
    "balance": "7,51,652.57"
  },
  {
    "id": "6",
    "date": "21 Jun 2026",
    "description": "UPI/YELLALA SUNIL R/731761306389/Payment\nfrom Ph",
    "refNo": "UPI-614177208319",
    "debit": "12,000.00",
    "credit": "",
    "balance": "7,39,652.57"
  },
  {
    "id": "7",
    "date": "22 Jun 2026",
    "description": "UPI/ANKANI\nNAGARAJU/645728059242/Payment from Ph",
    "refNo": "UPI-614240176171",
    "debit": "100.00",
    "credit": "",
    "balance": "7,39,552.57"
  },
  {
    "id": "8",
    "date": "22 Jun 2026",
    "description": "UPI/MAHENDHER GOUD\n/293688657631/Payment from Ph",
    "refNo": "UPI-614252239573",
    "debit": "10.00",
    "credit": "",
    "balance": "7,39,542.57"
  },
  {
    "id": "9",
    "date": "22 Jun 2026",
    "description": "UPI/Sama  Manikanta/562244568682/Payment\nfrom Ph",
    "refNo": "UPI-614276555081",
    "debit": "",
    "credit": "360.00",
    "balance": "7,39,902.57"
  },
  {
    "id": "10",
    "date": "22 Jun 2026",
    "description": "UPI/KOMMULA SAI\nKUM/942890651438/Payment from Ph",
    "refNo": "UPI-614276735257",
    "debit": "",
    "credit": "250.00",
    "balance": "7,40,152.57"
  },
  {
    "id": "11",
    "date": "22 Jun 2026",
    "description": "UPI/KANAKA DURGA\nWI/949675457450/Payment from Ph",
    "refNo": "UPI-614277046983",
    "debit": "9,700.00",
    "credit": "",
    "balance": "7,30,452.57"
  },
  {
    "id": "12",
    "date": "22 Jun 2026",
    "description": "UPI/SRINIVAS  ANGAR/777962792556/Payment\nfrom Ph",
    "refNo": "UPI-614277051032",
    "debit": "",
    "credit": "360.00",
    "balance": "7,30,812.57"
  },
  {
    "id": "13",
    "date": "22 Jun 2026",
    "description": "UPI/KANAKA DURGA\nWI/190643156041/Payment from Ph",
    "refNo": "UPI-614277138373",
    "debit": "190.00",
    "credit": "",
    "balance": "7,30,622.57"
  },
  {
    "id": "14",
    "date": "23 Jun 2026",
    "description": "UPI/MR LABISHETTY  /780519039371/Payment\nfrom Ph",
    "refNo": "UPI-614329767328",
    "debit": "35.00",
    "credit": "",
    "balance": "7,30,587.57"
  },
  {
    "id": "15",
    "date": "24 Jun 2026",
    "description": "UPI/NETFLIX COM/103342842625/Monthly\nautopay",
    "refNo": "UPI-614468742754",
    "debit": "649.00",
    "credit": "",
    "balance": "7,29,938.57"
  },
  {
    "id": "16",
    "date": "24 Jun 2026",
    "description": "UPI/Mujju Suguna Ch/584161077888/Payment\nfrom Ph",
    "refNo": "UPI-614492300341",
    "debit": "120.00",
    "credit": "",
    "balance": "7,29,818.57"
  },
  {
    "id": "17",
    "date": "24 Jun 2026",
    "description": "UPI/KOMMULA SAI\nKUM/404468749023/Payment from Ph",
    "refNo": "UPI-614493131976",
    "debit": "50.00",
    "credit": "",
    "balance": "7,29,768.57"
  },
  {
    "id": "18",
    "date": "24 Jun 2026",
    "description": "UPI/Sama  Manikanta/692508229409/Payment\nfrom Ph",
    "refNo": "UPI-614494252255",
    "debit": "",
    "credit": "180.00",
    "balance": "7,29,948.57"
  },
  {
    "id": "19",
    "date": "25 Jun 2026",
    "description": "UPI/ANKANI\nNAGARAJU/047560570759/Payment from Ph",
    "refNo": "UPI-614536020295",
    "debit": "75.00",
    "credit": "",
    "balance": "7,29,873.57"
  },
  {
    "id": "20",
    "date": "25 Jun 2026",
    "description": "UPI/ENGLIKAR RAVIND/240611054169/Pay to\nBharatPe",
    "refNo": "UPI-614591013954",
    "debit": "120.00",
    "credit": "",
    "balance": "7,29,753.57"
  },
  {
    "id": "21",
    "date": "26 Jun 2026",
    "description": "UPI/SRI LAXMI NARAS/509592172283/Payment\nfrom Ph",
    "refNo": "UPI-614608130553",
    "debit": "300.00",
    "credit": "",
    "balance": "7,29,453.57"
  },
  {
    "id": "22",
    "date": "27 Jun 2026",
    "description": "UPI/ELETI  PREM\nKUM/727749656265/Payment from Ph",
    "refNo": "UPI-614781526221",
    "debit": "",
    "credit": "500.00",
    "balance": "7,29,953.57"
  },
  {
    "id": "23",
    "date": "27 Jun 2026",
    "description": "UPI/BEJUGAM   LINGA/714196004690/Pay to\nBharatPe",
    "refNo": "UPI-614782140031",
    "debit": "500.00",
    "credit": "",
    "balance": "7,29,453.57"
  },
  {
    "id": "24",
    "date": "28 Jun 2026",
    "description": "UPI/ANKANI\nNAGARAJU/791932528668/Payment from Ph",
    "refNo": "UPI-614843498021",
    "debit": "30.00",
    "credit": "",
    "balance": "7,29,423.57"
  },
  {
    "id": "25",
    "date": "28 Jun 2026",
    "description": "UPI/RACHAKONDA\nVITT/299134054694/Payment from Ph",
    "refNo": "UPI-614869627549",
    "debit": "70.00",
    "credit": "",
    "balance": "7,29,353.57"
  },
  {
    "id": "26",
    "date": "30 Jun 2026",
    "description": "UPI/SRINIVAS  ANGAR/685513911031/Payment\nfrom Ph",
    "refNo": "UPI-615083970993",
    "debit": "",
    "credit": "200.00",
    "balance": "7,29,553.57"
  },
  {
    "id": "27",
    "date": "30 Jun 2026",
    "description": "UPI/KOMMULA SAI\nKUM/846909588738/Payment from Ph",
    "refNo": "UPI-615084123206",
    "debit": "200.00",
    "credit": "",
    "balance": "7,29,353.57"
  },
  {
    "id": "28",
    "date": "30 Jun 2026",
    "description": "UPI/GANGARAM\nCHOWD/689639681255/Payment from Ph",
    "refNo": "UPI-615009058671",
    "debit": "20.00",
    "credit": "",
    "balance": "7,29,333.57"
  },
  {
    "id": "29",
    "date": "30 Jun 2026",
    "description": "UPI/KANAKA DURGA\nWI/758276844711/Payment from Ph",
    "refNo": "UPI-615009262852",
    "debit": "190.00",
    "credit": "",
    "balance": "7,29,143.57"
  },
  {
    "id": "30",
    "date": "31 Jun 2026",
    "description": "UPI/CHENOORI\nNARESH/975918723954/Payment from Ph",
    "refNo": "UPI-615162893600",
    "debit": "45.00",
    "credit": "",
    "balance": "7,29,098.57"
  },
  {
    "id": "31",
    "date": "31 Jun 2026",
    "description": "UPI/SRINIVAS  ANGAR/099177815839/Payment\nfrom Ph",
    "refNo": "UPI-615163027327",
    "debit": "",
    "credit": "71.00",
    "balance": "7,29,169.57"
  },
  {
    "id": "32",
    "date": "31 Jun 2026",
    "description": "UPI/CHATLA VENKATA\n/753118001619/Payment from Ph",
    "refNo": "UPI-615163092297",
    "debit": "72.00",
    "credit": "",
    "balance": "7,29,097.57"
  },
  {
    "id": "33",
    "date": "31 Jun 2026",
    "description": "UPI/MOTHE VIGNESH\nR/953791535191/Payment from Ph",
    "refNo": "UPI-615171066030",
    "debit": "",
    "credit": "3,500.00",
    "balance": "7,32,597.57"
  },
  {
    "id": "34",
    "date": "31 Jun 2026",
    "description": "UPI/KANAKA DURGA\nWI/487797149627/Payment from Ph",
    "refNo": "UPI-615173081325",
    "debit": "720.00",
    "credit": "",
    "balance": "7,31,877.57"
  },
  {
    "id": "35",
    "date": "31 Jun 2026",
    "description": "UPI/KOMMULA SAI\nKUM/381333133046/Payment from Ph",
    "refNo": "UPI-615178843719",
    "debit": "600.00",
    "credit": "",
    "balance": "7,31,277.57"
  },
  {
    "id": "36",
    "date": "31 Jun 2026",
    "description": "UPI/MUSKU VIKAS\nRED/423926179681/Payment from Ph",
    "refNo": "UPI-615178924277",
    "debit": "15,000.00",
    "credit": "",
    "balance": "7,16,277.57"
  },
  {
    "id": "37",
    "date": "31 Jun 2026",
    "description": "UPI/POVAR  KAVITHA/826818333729/Payment\nfrom Ph",
    "refNo": "UPI-615182861318",
    "debit": "20.00",
    "credit": "",
    "balance": "7,16,257.57"
  },
  {
    "id": "38",
    "date": "01 Jul 2026",
    "description": "UPI/UMA GENERAL\nSTO/592481758228/Payment from Ph",
    "refNo": "UPI-615201729279",
    "debit": "70.00",
    "credit": "",
    "balance": "7,16,187.57"
  },
  {
    "id": "39",
    "date": "01 Jul 2026",
    "description": "UPI/SRINIVASA DIRY/413207446813/Payment\nmade to",
    "refNo": "UPI-615244743422",
    "debit": "50.00",
    "credit": "",
    "balance": "7,16,137.57"
  },
  {
    "id": "40",
    "date": "01 Jul 2026",
    "description": "UPI/Leharu Jat/727782929909/Payment from\nPh",
    "refNo": "UPI-615245178486",
    "debit": "80.00",
    "credit": "",
    "balance": "7,16,057.57"
  },
  {
    "id": "41",
    "date": "01 Jul 2026",
    "description": "UPI/SIDDI VINAYAKA /276688113622/Payment\nfrom Ph",
    "refNo": "UPI-615245437669",
    "debit": "100.00",
    "credit": "",
    "balance": "7,15,957.57"
  },
  {
    "id": "42",
    "date": "01 Jul 2026",
    "description": "UPI/Musku  Narsaiah/149008031966/Payment\nfrom Ph",
    "refNo": "UPI-615254418117",
    "debit": "",
    "credit": "10.00",
    "balance": "7,15,967.57"
  },
  {
    "id": "43",
    "date": "02 Jul 2026",
    "description": "UPI/RAGULA NAVEEN\nG/830443695037/Payment from Ph",
    "refNo": "UPI-615391204299",
    "debit": "22.00",
    "credit": "",
    "balance": "7,15,945.57"
  },
  {
    "id": "44",
    "date": "02 Jul 2026",
    "description": "UPI/RAGULA NAVEEN\nG/715196320139/Payment from Ph",
    "refNo": "UPI-615393337971",
    "debit": "100.00",
    "credit": "",
    "balance": "7,15,845.57"
  },
  {
    "id": "45",
    "date": "02 Jul 2026",
    "description": "UPI/ELETI  PREM\nKUM/083477035519/Payment from Ph",
    "refNo": "UPI-615395134889",
    "debit": "",
    "credit": "100.00",
    "balance": "7,15,945.57"
  },
  {
    "id": "46",
    "date": "02 Jul 2026",
    "description": "UPI/CHATLA VENKATA\n/302796476540/Payment from Ph",
    "refNo": "UPI-615310243967",
    "debit": "40.00",
    "credit": "",
    "balance": "7,15,905.57"
  },
  {
    "id": "47",
    "date": "03 Jul 2026",
    "description": "UPI/Parvej/934919248033/Payment from Ph",
    "refNo": "UPI-615456156539",
    "debit": "130.00",
    "credit": "",
    "balance": "7,15,775.57"
  },
  {
    "id": "48",
    "date": "03 Jul 2026",
    "description": "UPI/SURESH JAT/471848330425/Payment\nfrom Ph",
    "refNo": "UPI-615479133592",
    "debit": "20.00",
    "credit": "",
    "balance": "7,15,755.57"
  },
  {
    "id": "49",
    "date": "03 Jul 2026",
    "description": "UPI/MR BATTINI  RAJ/106423015732/Payment\nfrom Ph",
    "refNo": "UPI-615482198450",
    "debit": "20.00",
    "credit": "",
    "balance": "7,15,735.57"
  },
  {
    "id": "50",
    "date": "04 Jul 2026",
    "description": "UPI/MR LABISHETTY  /714424411706/Payment\nfrom Ph",
    "refNo": "UPI-615542015892",
    "debit": "55.00",
    "credit": "",
    "balance": "7,15,680.57"
  },
  {
    "id": "51",
    "date": "04 Jul 2026",
    "description": "UPI/KOLIPYAKA RAJES/220550354276/Pay to\nBharatPe",
    "refNo": "UPI-615542563039",
    "debit": "90.00",
    "credit": "",
    "balance": "7,15,590.57"
  },
  {
    "id": "52",
    "date": "05 Jul 2026",
    "description": "UPI/ANKANI\nNAGARAJU/615609844836/PaidViaKotakApp",
    "refNo": "UPI-615694706364",
    "debit": "30.00",
    "credit": "",
    "balance": "7,15,560.57"
  },
  {
    "id": "53",
    "date": "05 Jul 2026",
    "description": "UPI/MOTHE VIGNESH\nR/872172325187/Payment from Ph",
    "refNo": "UPI-615603257469",
    "debit": "",
    "credit": "5,000.00",
    "balance": "7,20,560.57"
  },
  {
    "id": "54",
    "date": "05 Jul 2026",
    "description": "UPI/KANAKA DURGA\nWI/720271292397/Payment from Ph",
    "refNo": "UPI-615606949910",
    "debit": "10,000.00",
    "credit": "",
    "balance": "7,10,560.57"
  },
  {
    "id": "55",
    "date": "05 Jul 2026",
    "description": "UPI/LINGAPURAM\nPRA/133475576447/Payment from Ph",
    "refNo": "UPI-615607808673",
    "debit": "120.00",
    "credit": "",
    "balance": "7,10,440.57"
  },
  {
    "id": "56",
    "date": "05 Jul 2026",
    "description": "UPI/Gaddam  Srishan/743382707308/Payment\nfrom Ph",
    "refNo": "UPI-615609661037",
    "debit": "280.00",
    "credit": "",
    "balance": "7,10,160.57"
  },
  {
    "id": "57",
    "date": "05 Jul 2026",
    "description": "UPI/Sama  Manikanta/343976332289/Payment\nfrom Ph",
    "refNo": "UPI-615610485345",
    "debit": "110.00",
    "credit": "",
    "balance": "7,10,050.57"
  },
  {
    "id": "58",
    "date": "05 Jul 2026",
    "description": "UPI/LINGAPURAM\nPRA/131803818443/Payment from Ph",
    "refNo": "UPI-615620406023",
    "debit": "190.00",
    "credit": "",
    "balance": "7,09,860.57"
  },
  {
    "id": "59",
    "date": "05 Jul 2026",
    "description": "UPI/SRINIVAS  ANGAR/333430524269/Payment\nfrom Ph",
    "refNo": "UPI-615623800778",
    "debit": "200.00",
    "credit": "",
    "balance": "7,09,660.57"
  },
  {
    "id": "60",
    "date": "05 Jul 2026",
    "description": "UPI/Leharu Jat/470895638003/Payment from\nPh",
    "refNo": "UPI-615631034607",
    "debit": "20.00",
    "credit": "",
    "balance": "7,09,640.57"
  },
  {
    "id": "61",
    "date": "06 Jul 2026",
    "description": "UPI/SRINIVASA DIRY/341902370077/Payment\nmade to",
    "refNo": "UPI-615704913527",
    "debit": "50.00",
    "credit": "",
    "balance": "7,09,590.57"
  },
  {
    "id": "62",
    "date": "07 Jul 2026",
    "description": "UPI/AbhiBus/541219723239/Payment from Ph",
    "refNo": "UPI-615841805617",
    "debit": "605.00",
    "credit": "",
    "balance": "7,08,985.57"
  },
  {
    "id": "63",
    "date": "07 Jul 2026",
    "description": "UPI/MR SUNIL/450882653265/Payment from\nPh",
    "refNo": "UPI-615860427523",
    "debit": "20.00",
    "credit": "",
    "balance": "7,08,965.57"
  },
  {
    "id": "64",
    "date": "07 Jul 2026",
    "description": "UPI/FEROZ KHAN/473395581875/Payment\nfrom Ph",
    "refNo": "UPI-615860860250",
    "debit": "30.00",
    "credit": "",
    "balance": "7,08,935.57"
  },
  {
    "id": "65",
    "date": "07 Jul 2026",
    "description": "UPI/APTARKHAN/408563449943/Payment\nfrom Ph",
    "refNo": "UPI-615868532638",
    "debit": "45.00",
    "credit": "",
    "balance": "7,08,890.57"
  },
  {
    "id": "66",
    "date": "07 Jul 2026",
    "description": "UPI/LINGAPURAM\nPRA/196995102340/Payment from Ph",
    "refNo": "UPI-615892760753",
    "debit": "1,500.00",
    "credit": "",
    "balance": "7,07,390.57"
  },
  {
    "id": "67",
    "date": "08 Jul 2026",
    "description": "UPI/LINGAPURAM\nPRA/458598089783/Payment from Ph",
    "refNo": "UPI-615917145402",
    "debit": "100.00",
    "credit": "",
    "balance": "7,07,290.57"
  },
  {
    "id": "68",
    "date": "10 Jul 2026",
    "description": "UPI/MS CHARITHA\nFUE/360288624862/Payment from Ph",
    "refNo": "UPI-616142763239",
    "debit": "1,520.00",
    "credit": "",
    "balance": "7,05,770.57"
  },
  {
    "id": "69",
    "date": "10 Jul 2026",
    "description": "UPI/RADHIKA PALA/159973192514/Payment\nfrom Ph",
    "refNo": "UPI-616170995822",
    "debit": "60.00",
    "credit": "",
    "balance": "7,05,710.57"
  },
  {
    "id": "70",
    "date": "10 Jul 2026",
    "description": "UPI/KANAKA DURGA\nWI/511187327320/Payment from Ph",
    "refNo": "UPI-616171043909",
    "debit": "730.00",
    "credit": "",
    "balance": "7,04,980.57"
  },
  {
    "id": "71",
    "date": "10 Jul 2026",
    "description": "UPI/NARALA\nRANADHEE/518167036328/Payment from Ph",
    "refNo": "UPI-616171151768",
    "debit": "54.00",
    "credit": "",
    "balance": "7,04,926.57"
  },
  {
    "id": "72",
    "date": "10 Jul 2026",
    "description": "UPI/ENGLIKAR RAVIND/603092334530/Pay to\nBharatPe",
    "refNo": "UPI-616199471932",
    "debit": "10.00",
    "credit": "",
    "balance": "7,04,916.57"
  },
  {
    "id": "73",
    "date": "11 Jul 2026",
    "description": "UPI/Airtel Recharge/254259562181/Payment\nfrom Ph",
    "refNo": "UPI-616247571556",
    "debit": "10.00",
    "credit": "",
    "balance": "7,04,906.57"
  },
  {
    "id": "74",
    "date": "11 Jul 2026",
    "description": "UPI/RACHAKONDA\nVI/672098275290/Payment from Ph",
    "refNo": "UPI-616253822477",
    "debit": "25.00",
    "credit": "",
    "balance": "7,04,881.57"
  },
  {
    "id": "75",
    "date": "11 Jul 2026",
    "description": "UPI/Leharu Jat/346239115130/Payment from\nPh",
    "refNo": "UPI-616254204496",
    "debit": "40.00",
    "credit": "",
    "balance": "7,04,841.57"
  },
  {
    "id": "76",
    "date": "11 Jul 2026",
    "description": "UPI/MOTHE VIGNESH\nR/241702118564/Payment from Ph",
    "refNo": "UPI-616254716494",
    "debit": "",
    "credit": "3,000.00",
    "balance": "7,07,841.57"
  },
  {
    "id": "77",
    "date": "12 Jul 2026",
    "description": "UPI/Giri  Shankar/255121093481/Pay to\nBharatPe",
    "refNo": "UPI-616330617210",
    "debit": "90.00",
    "credit": "",
    "balance": "7,07,751.57"
  },
  {
    "id": "78",
    "date": "13 Jul 2026",
    "description": "UPI/LAVANYA MILK\nAG/536829066910/Payment from Ph",
    "refNo": "UPI-616471607104",
    "debit": "115.00",
    "credit": "",
    "balance": "7,07,636.57"
  },
  {
    "id": "79",
    "date": "14 Jul 2026",
    "description": "UPI/Miss POVAR  KA/FDRL/789219524007/Pay\nto Bhara",
    "refNo": "UPI-616571922880",
    "debit": "20.00",
    "credit": "",
    "balance": "7,07,616.57"
  },
  {
    "id": "80",
    "date": "15 Jul 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/768599989226/Payment from",
    "refNo": "UPI-616695329662",
    "debit": "30.00",
    "credit": "",
    "balance": "7,07,586.57"
  },
  {
    "id": "81",
    "date": "15 Jul 2026",
    "description": "UPI/YELALA\nRAJU/IOBA/000377355077/Payment from",
    "refNo": "UPI-616698673150",
    "debit": "1,800.00",
    "credit": "",
    "balance": "7,05,786.57"
  },
  {
    "id": "82",
    "date": "16 Jul 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/272627329977/Payment from",
    "refNo": "UPI-616704867830",
    "debit": "20.00",
    "credit": "",
    "balance": "7,05,766.57"
  },
  {
    "id": "83",
    "date": "16 Jul 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/218637912491/Payment from",
    "refNo": "UPI-616705474238",
    "debit": "30.00",
    "credit": "",
    "balance": "7,05,736.57"
  },
  {
    "id": "84",
    "date": "18 Jul 2026",
    "description": "UPI/PRASHANTH\nKOMA/SBIN/307529394348/Payment from",
    "refNo": "UPI-616940176692",
    "debit": "",
    "credit": "6,500.00",
    "balance": "7,12,236.57"
  },
  {
    "id": "85",
    "date": "18 Jul 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/315575137150/Payment from",
    "refNo": "UPI-616941648850",
    "debit": "5,190.00",
    "credit": "",
    "balance": "7,07,046.57"
  },
  {
    "id": "86",
    "date": "18 Jul 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/361099846341/Payment from",
    "refNo": "UPI-616941819158",
    "debit": "190.00",
    "credit": "",
    "balance": "7,06,856.57"
  },
  {
    "id": "87",
    "date": "18 Jul 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/308733284979/Payment from",
    "refNo": "UPI-616943077062",
    "debit": "145.00",
    "credit": "",
    "balance": "7,06,711.57"
  },
  {
    "id": "88",
    "date": "18 Jul 2026",
    "description": "UPI/SAMA NARSA\nRED/SBIN/305299814449/Payment from",
    "refNo": "UPI-616944609936",
    "debit": "50.00",
    "credit": "",
    "balance": "7,06,661.57"
  },
  {
    "id": "89",
    "date": "18 Jul 2026",
    "description": "UPI/SRINIVAS\nANGA/SBIN/330387946018/Payment from",
    "refNo": "UPI-616946149099",
    "debit": "825.00",
    "credit": "",
    "balance": "7,05,836.57"
  },
  {
    "id": "90",
    "date": "19 Jul 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/009024500613/Payment from",
    "refNo": "UPI-617092334441",
    "debit": "5,610.00",
    "credit": "",
    "balance": "7,00,226.57"
  },
  {
    "id": "91",
    "date": "19 Jul 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/026367399145/Payment from",
    "refNo": "UPI-617008619057",
    "debit": "430.00",
    "credit": "",
    "balance": "6,99,796.57"
  },
  {
    "id": "92",
    "date": "20 Jul 2026",
    "description": "UPI/AKKALADEVI\nNAV/UBIN/307184124735/Payment from",
    "refNo": "UPI-617133095706",
    "debit": "30.00",
    "credit": "",
    "balance": "6,99,766.57"
  },
  {
    "id": "93",
    "date": "20 Jul 2026",
    "description": "SentIMPS617109709061KOTTALA\nRA/SBINX0293/KKBKTrans",
    "refNo": "IMPS-617109373839",
    "debit": "10,000.00",
    "credit": "",
    "balance": "6,89,766.57"
  },
  {
    "id": "94",
    "date": "20 Jul 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/536548830233/Payment from",
    "refNo": "UPI-617140452608",
    "debit": "380.00",
    "credit": "",
    "balance": "6,89,386.57"
  },
  {
    "id": "95",
    "date": "20 Jul 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/108852213873/Payment from",
    "refNo": "UPI-617144131197",
    "debit": "",
    "credit": "6,500.00",
    "balance": "6,95,886.57"
  },
  {
    "id": "96",
    "date": "20 Jul 2026",
    "description": "BRB:Sent RTGS\nKKBKR52026062000975172/KOTTALA RAMA",
    "refNo": "5/000538374543",
    "debit": "90,000.00",
    "credit": "",
    "balance": "6,05,886.57"
  },
  {
    "id": "97",
    "date": "20 Jul 2026",
    "description": "INSURANCE POLICY ISSUANCE",
    "refNo": "IIP-2006265014200",
    "debit": "2,400.00",
    "credit": "",
    "balance": "6,03,486.57"
  },
  {
    "id": "98",
    "date": "20 Jul 2026",
    "description": "UPI/Mr Shaik\nAfro/YESB/879383763709/Payment from",
    "refNo": "UPI-617161953548",
    "debit": "70.00",
    "credit": "",
    "balance": "6,03,416.57"
  },
  {
    "id": "99",
    "date": "20 Jul 2026",
    "description": "UPI/RADHE SHYAM\nJA/BARB/749764954110/Payment from",
    "refNo": "UPI-617162303334",
    "debit": "140.00",
    "credit": "",
    "balance": "6,03,276.57"
  },
  {
    "id": "100",
    "date": "22 Jul 2026",
    "description": "UPI/BHIMA\nRAM/YESB/061812708731/Payment from",
    "refNo": "UPI-617385654525",
    "debit": "60.00",
    "credit": "",
    "balance": "6,03,216.57"
  },
  {
    "id": "101",
    "date": "22 Jul 2026",
    "description": "UPI/Musku\nNarsaia/SBIN/266698820582/Payment from",
    "refNo": "UPI-617388618013",
    "debit": "",
    "credit": "10,000.00",
    "balance": "6,13,216.57"
  },
  {
    "id": "102",
    "date": "22 Jul 2026",
    "description": "UPI/SAI TEJA\nBITR/SBIN/924041289927/Payment from",
    "refNo": "UPI-617306139969",
    "debit": "5,000.00",
    "credit": "",
    "balance": "6,08,216.57"
  },
  {
    "id": "103",
    "date": "22 Jul 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/653605320600/Payment from",
    "refNo": "UPI-617309456181",
    "debit": "",
    "credit": "1,000.00",
    "balance": "6,09,216.57"
  },
  {
    "id": "104",
    "date": "22 Jul 2026",
    "description": "UPI/CHILKA\nRAJKUMA/UBIN/440550479873/Payment from",
    "refNo": "UPI-617310826142",
    "debit": "20.00",
    "credit": "",
    "balance": "6,09,196.57"
  },
  {
    "id": "105",
    "date": "23 Jul 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/479052481240/Payment from",
    "refNo": "UPI-617433150192",
    "debit": "45.00",
    "credit": "",
    "balance": "6,09,151.57"
  },
  {
    "id": "106",
    "date": "23 Jul 2026",
    "description": "UPI/MR BATTINI\nRA/YESB/535544648179/Payment from",
    "refNo": "UPI-617464201541",
    "debit": "20.00",
    "credit": "",
    "balance": "6,09,131.57"
  },
  {
    "id": "107",
    "date": "23 Jul 2026",
    "description": "UPI/BRAHMADANDI\nRA/KKBK/289023781205/Payment from",
    "refNo": "UPI-617464441941",
    "debit": "50.00",
    "credit": "",
    "balance": "6,09,081.57"
  },
  {
    "id": "108",
    "date": "24 Jul 2026",
    "description": "UPI/SIRIPURAM\nRAVI/SBIN/750552516676/Payment from",
    "refNo": "UPI-617500847973",
    "debit": "130.00",
    "credit": "",
    "balance": "6,08,951.57"
  },
  {
    "id": "109",
    "date": "24 Jul 2026",
    "description": "UPI/Musku\nNarsaia/SBIN/548598646737/Payment from",
    "refNo": "UPI-617502133821",
    "debit": "",
    "credit": "4,000.00",
    "balance": "6,12,951.57"
  },
  {
    "id": "110",
    "date": "24 Jul 2026",
    "description": "UPI/NETFLIX\nCOM/HDFC/103528719336/Monthly auto",
    "refNo": "UPI-617503351527",
    "debit": "649.00",
    "credit": "",
    "balance": "6,12,302.57"
  },
  {
    "id": "111",
    "date": "24 Jul 2026",
    "description": "UPI/SAMA  NARSA\nRE/SBIN/330024925852/Payment from",
    "refNo": "UPI-617503794488",
    "debit": "",
    "credit": "2,340.00",
    "balance": "6,14,642.57"
  },
  {
    "id": "112",
    "date": "24 Jul 2026",
    "description": "UPI/SAMA  NARSA\nRE/SBIN/851756949822/Payment from",
    "refNo": "UPI-617503832355",
    "debit": "",
    "credit": "210.00",
    "balance": "6,14,852.57"
  },
  {
    "id": "113",
    "date": "24 Jul 2026",
    "description": "UPI/P A C S\nRENJAR/TSAB/182737345581/Payment from",
    "refNo": "UPI-617504047347",
    "debit": "2,340.00",
    "credit": "",
    "balance": "6,12,512.57"
  },
  {
    "id": "114",
    "date": "24 Jul 2026",
    "description": "UPI/P A C S\nRENJAR/TSAB/762202483758/Payment from",
    "refNo": "UPI-617504114362",
    "debit": "4,185.00",
    "credit": "",
    "balance": "6,08,327.57"
  },
  {
    "id": "115",
    "date": "24 Jul 2026",
    "description": "UPI/Musku\nNarsaia/SBIN/363025057884/Payment from",
    "refNo": "UPI-617507289336",
    "debit": "",
    "credit": "600.00",
    "balance": "6,08,927.57"
  },
  {
    "id": "116",
    "date": "24 Jul 2026",
    "description": "UPI/KHOLIPACKA\nHA/SBIN/797879666875/Payment from",
    "refNo": "UPI-617507314292",
    "debit": "600.00",
    "credit": "",
    "balance": "6,08,327.57"
  },
  {
    "id": "117",
    "date": "24 Jul 2026",
    "description": "UPI/NERA\nRAVIKANTH/SBIN/099511906531/Payment\nfrom",
    "refNo": "UPI-617518191797",
    "debit": "",
    "credit": "1,300.00",
    "balance": "6,09,627.57"
  },
  {
    "id": "118",
    "date": "24 Jul 2026",
    "description": "Cash Deposit by vikas at MUPKAL",
    "refNo": "BRB-008370535172",
    "debit": "",
    "credit": "1,000.00",
    "balance": "6,10,627.57"
  },
  {
    "id": "119",
    "date": "24 Jul 2026",
    "description": "UPI/MUSKU VIKAS\nRE/UBIN/792734061130/Payment from",
    "refNo": "UPI-617519476699",
    "debit": "10,000.00",
    "credit": "",
    "balance": "6,00,627.57"
  },
  {
    "id": "120",
    "date": "24 Jul 2026",
    "description": "UPI/KOLIPYAKA\nRAJE/UNBA/157317100576/Pay to Bhara",
    "refNo": "UPI-617523645261",
    "debit": "150.00",
    "credit": "",
    "balance": "6,00,477.57"
  },
  {
    "id": "121",
    "date": "24 Jul 2026",
    "description": "UPI/AKHATAR ALI/UNBA/799128788611/Pay to\nBhara",
    "refNo": "UPI-617524306677",
    "debit": "25.00",
    "credit": "",
    "balance": "6,00,452.57"
  },
  {
    "id": "122",
    "date": "24 Jul 2026",
    "description": "UPI/Mr Shaik\nAfro/YESB/152184535480/Payment from",
    "refNo": "UPI-617527478591",
    "debit": "150.00",
    "credit": "",
    "balance": "6,00,302.57"
  },
  {
    "id": "123",
    "date": "25 Jul 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/306441594473/Payment from",
    "refNo": "UPI-617668664737",
    "debit": "45.00",
    "credit": "",
    "balance": "6,00,257.57"
  },
  {
    "id": "124",
    "date": "25 Jul 2026",
    "description": "UPI/TELANGANA\nSTAT/YESB/073633644162/Payment for",
    "refNo": "UPI-617691007144",
    "debit": "470.00",
    "credit": "",
    "balance": "5,99,787.57"
  },
  {
    "id": "125",
    "date": "25 Jul 2026",
    "description": "UPI/APTARKHAN/YESB/943899246348/Payme\nnt from",
    "refNo": "UPI-617699450175",
    "debit": "45.00",
    "credit": "",
    "balance": "5,99,742.57"
  },
  {
    "id": "126",
    "date": "25 Jul 2026",
    "description": "UPI/MUSUKU RAKESH\n/UBIN/933097232479/Payment from",
    "refNo": "UPI-617622154558",
    "debit": "",
    "credit": "500.00",
    "balance": "6,00,242.57"
  },
  {
    "id": "127",
    "date": "26 Jul 2026",
    "description": "UPI/KASANAGOTTU\nRA/UNBA/763159310448/Pay to Bhara",
    "refNo": "UPI-617732048318",
    "debit": "30.00",
    "credit": "",
    "balance": "6,00,212.57"
  },
  {
    "id": "128",
    "date": "26 Jul 2026",
    "description": "UPI/SURESH\nKEERTHI/YESB/166369365341/Payment from",
    "refNo": "UPI-617780063505",
    "debit": "402.00",
    "credit": "",
    "balance": "5,99,810.57"
  },
  {
    "id": "129",
    "date": "27 Jul 2026",
    "description": "UPI/Ganji\nShreyash/YESB/022077787796/Payment from",
    "refNo": "UPI-617800847733",
    "debit": "135.00",
    "credit": "",
    "balance": "5,99,675.57"
  },
  {
    "id": "130",
    "date": "27 Jul 2026",
    "description": "UPI/Aleti Anith\nRe/SBIN/836300025038/Payment from",
    "refNo": "UPI-617819590325",
    "debit": "",
    "credit": "500.00",
    "balance": "6,00,175.57"
  },
  {
    "id": "131",
    "date": "27 Jul 2026",
    "description": "UPI/SURESH\nKEERTHI/YESB/847433940425/Payment from",
    "refNo": "UPI-617819601647",
    "debit": "658.00",
    "credit": "",
    "balance": "5,99,517.57"
  },
  {
    "id": "132",
    "date": "28 Jul 2026",
    "description": "UPI/SANJAY REDDY\nA/KKBK/617946008024/Payment from",
    "refNo": "UPI-617965658782",
    "debit": "90.00",
    "credit": "",
    "balance": "599,427.57"
  },
  {
    "id": "133",
    "date": "28 Jul 2026",
    "description": "UPI/LINGAPURAM\nPR/SBIN/985967159393/Payment from",
    "refNo": "UPI-617980852373",
    "debit": "130.00",
    "credit": "",
    "balance": "5,99,297.57"
  },
  {
    "id": "134",
    "date": "28 Jul 2026",
    "description": "UPI/LINGAPURAM\nPR/SBIN/607461405853/Payment from",
    "refNo": "UPI-617985478397",
    "debit": "300.00",
    "credit": "",
    "balance": "5,98,997.57"
  },
  {
    "id": "135",
    "date": "28 Jul 2026",
    "description": "UPI/KYATHAM\nKAVIT/SBIN/474859272778/Payment from",
    "refNo": "UPI-617902217650",
    "debit": "",
    "credit": "930.00",
    "balance": "5,99,927.57"
  },
  {
    "id": "136",
    "date": "28 Jul 2026",
    "description": "UPI/SPARKLE GOLD\nR/HDFC/787307213199/Payment from",
    "refNo": "UPI-617902567746",
    "debit": "17,000.00",
    "credit": "",
    "balance": "5,82,927.57"
  },
  {
    "id": "137",
    "date": "28 Jul 2026",
    "description": "UPI/RAJ KUMAR\nYADA/IPOS/167618923430/Payment from",
    "refNo": "UPI-617908249191",
    "debit": "82.00",
    "credit": "",
    "balance": "5,82,845.57"
  },
  {
    "id": "138",
    "date": "29 Jul 2026",
    "description": "UPI/BADDAM\nHEMANTH/IPOS/560779587586/Payment from",
    "refNo": "UPI-618022523588",
    "debit": "",
    "credit": "750.00",
    "balance": "5,83,595.57"
  },
  {
    "id": "139",
    "date": "29 Jul 2026",
    "description": "UPI/XXXPGN KOTAK\nS/KKBK/944447344439/Payment from",
    "refNo": "UPI-618023709092",
    "debit": "750.00",
    "credit": "",
    "balance": "5,82,845.57"
  },
  {
    "id": "140",
    "date": "29 Jul 2026",
    "description": "UPI/NAGULA  NARA\nG/YESB/190146960651/Payment from",
    "refNo": "UPI-618027373829",
    "debit": "140.00",
    "credit": "",
    "balance": "5,82,705.57"
  },
  {
    "id": "141",
    "date": "29 Jul 2026",
    "description": "UPI/BALAGA\nGEETHIK/YESB/780183397962/Payment from",
    "refNo": "UPI-618027467253",
    "debit": "50.00",
    "credit": "",
    "balance": "5,82,655.57"
  },
  {
    "id": "142",
    "date": "29 Jul 2026",
    "description": "UPI/Laxmi Petro\nSt/YESB/014981676175/Payment from",
    "refNo": "UPI-618027989001",
    "debit": "220.00",
    "credit": "",
    "balance": "5,82,435.57"
  },
  {
    "id": "143",
    "date": "29 Jul 2026",
    "description": "UPI/XXXPGN KOTAK\nS/KKBK/258479241235/Payment from",
    "refNo": "UPI-618038100679",
    "debit": "350.00",
    "credit": "",
    "balance": "5,82,085.57"
  },
  {
    "id": "144",
    "date": "30 Jul 2026",
    "description": "UPI/MENS CLUB\nFASH/HDFC/257974774710/Payment from",
    "refNo": "UPI-618105621419",
    "debit": "1,099.00",
    "credit": "",
    "balance": "5,80,986.57"
  },
  {
    "id": "145",
    "date": "30 Jul 2026",
    "description": "UPI/MENS CLUB\nFASH/HDFC/250285744367/Payment from",
    "refNo": "UPI-618105799640",
    "debit": "300.00",
    "credit": "",
    "balance": "5,80,686.57"
  },
  {
    "id": "146",
    "date": "30 Jul 2026",
    "description": "CHRG: RTGS ON 20-JUN-2026",
    "refNo": "",
    "debit": "47.20",
    "credit": "",
    "balance": "5,80,639.37"
  },
  {
    "id": "147",
    "date": "30 Jul 2026",
    "description": "CHRG: IMPS TRANSACTION DATED ON 20-JUN-\n2026",
    "refNo": "",
    "debit": "5.90",
    "credit": "",
    "balance": "5,80,633.47"
  },
  {
    "id": "148",
    "date": "30 Jul 2026",
    "description": "UPI/AKHATAR ALI/UNBA/386187146520/Pay to\nBhara",
    "refNo": "UPI-618136033687",
    "debit": "60.00",
    "credit": "",
    "balance": "5,80,573.47"
  },
  {
    "id": "149",
    "date": "30 Jul 2026",
    "description": "Int.Pd:2511836505:01-04-2026 to 30-06-2026",
    "refNo": "",
    "debit": "",
    "credit": "2,062.00",
    "balance": "5,82,635.47"
  },
  {
    "id": "150",
    "date": "01 Aug 2026",
    "description": "UPI/SHERLA\nPRASHA/KKBK/117460445454/Payment from",
    "refNo": "UPI-618263895256",
    "debit": "40.00",
    "credit": "",
    "balance": "5,82,595.47"
  },
  {
    "id": "151",
    "date": "01 Aug 2026",
    "description": "UPI/ENGLIKAR\nRAVIN/UNBA/873993523986/Pay to Bhara",
    "refNo": "UPI-618271128020",
    "debit": "10.00",
    "credit": "",
    "balance": "5,82,585.47"
  },
  {
    "id": "152",
    "date": "01 Aug 2026",
    "description": "UPI/GANGARAM\nCHOW/YESB/371592736512/Payment from",
    "refNo": "UPI-618202579161",
    "debit": "30.00",
    "credit": "",
    "balance": "5,82,555.47"
  },
  {
    "id": "153",
    "date": "01 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/413907453751/Payment from",
    "refNo": "UPI-618208763292",
    "debit": "1,630.00",
    "credit": "",
    "balance": "5,80,925.47"
  },
  {
    "id": "154",
    "date": "01 Aug 2026",
    "description": "UPI/LINGAPURAM\nPR/SBIN/392118455571/Payment from",
    "refNo": "UPI-618212671447",
    "debit": "2,500.00",
    "credit": "",
    "balance": "5,78,425.47"
  },
  {
    "id": "155",
    "date": "01 Aug 2026",
    "description": "UPI/LINGAPURAM\nPR/SBIN/420042936839/Payment from",
    "refNo": "UPI-618213693069",
    "debit": "50.00",
    "credit": "",
    "balance": "5,78,375.47"
  },
  {
    "id": "156",
    "date": "02 Aug 2026",
    "description": "BY CLG INST 037642/29-06-26//NIZAMABAD",
    "refNo": "NCROUT_2_020720261\n74",
    "debit": "",
    "credit": "3,500.00",
    "balance": "5,81,875.47"
  },
  {
    "id": "157",
    "date": "02 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/579577503265/Payment from",
    "refNo": "UPI-618384450208",
    "debit": "110.00",
    "credit": "",
    "balance": "5,81,765.47"
  },
  {
    "id": "158",
    "date": "03 Aug 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/333797712498/Payment from",
    "refNo": "UPI-618448675869",
    "debit": "60.00",
    "credit": "",
    "balance": "5,81,705.47"
  },
  {
    "id": "159",
    "date": "03 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/399906567115/Payment from",
    "refNo": "UPI-618458376190",
    "debit": "3,600.00",
    "credit": "",
    "balance": "5,78,105.47"
  },
  {
    "id": "160",
    "date": "03 Aug 2026",
    "description": "UPI/LINGAPURAM\nNI/KKBK/704040675572/Payment from",
    "refNo": "UPI-618458633947",
    "debit": "",
    "credit": "9,000.00",
    "balance": "5,87,105.47"
  },
  {
    "id": "161",
    "date": "04 Aug 2026",
    "description": "UPI/KOLIPYAKA\nRAJE/UNBA/567157294326/Pay to Bhara",
    "refNo": "UPI-618598596130",
    "debit": "15,000.00",
    "credit": "",
    "balance": "5,72,105.47"
  },
  {
    "id": "162",
    "date": "04 Aug 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/401231279636/Payment from",
    "refNo": "UPI-618545772677",
    "debit": "1,540.00",
    "credit": "",
    "balance": "5,70,565.47"
  },
  {
    "id": "163",
    "date": "05 Aug 2026",
    "description": "UPI/GANGARAM\nCHOW/YESB/717176279008/Payment from",
    "refNo": "UPI-618684702446",
    "debit": "20.00",
    "credit": "",
    "balance": "5,70,545.47"
  },
  {
    "id": "164",
    "date": "05 Aug 2026",
    "description": "UPI/7989457642ptye/IOBA/721633513341/Pay\nment from",
    "refNo": "UPI-618603982868",
    "debit": "100.00",
    "credit": "",
    "balance": "5,70,445.47"
  },
  {
    "id": "165",
    "date": "06 Aug 2026",
    "description": "UPI/GANGARAM\nCHOW/YESB/299237598917/Payment from",
    "refNo": "UPI-618743381688",
    "debit": "20.00",
    "credit": "",
    "balance": "5,70,425.47"
  },
  {
    "id": "166",
    "date": "06 Aug 2026",
    "description": "UPI/GOPI\nSAMYUKTHA/YESB/546672427124/Payment\nfrom",
    "refNo": "UPI-618745864296",
    "debit": "70.00",
    "credit": "",
    "balance": "5,70,355.47"
  },
  {
    "id": "167",
    "date": "06 Aug 2026",
    "description": "UPI/CHENOORI\nNARES/AIRP/132844805551/Payment from",
    "refNo": "UPI-618754789281",
    "debit": "20.00",
    "credit": "",
    "balance": "5,70,335.47"
  },
  {
    "id": "168",
    "date": "06 Aug 2026",
    "description": "UPI/CHATLA\nVENKATA/YESB/473148616375/Payment from",
    "refNo": "UPI-618754951643",
    "debit": "10.00",
    "credit": "",
    "balance": "5,70,325.47"
  },
  {
    "id": "169",
    "date": "07 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/592391733192/Payment from",
    "refNo": "UPI-618894682319",
    "debit": "45.00",
    "credit": "",
    "balance": "5,70,280.47"
  },
  {
    "id": "170",
    "date": "07 Aug 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/062631084482/Payment from",
    "refNo": "UPI-618894992858",
    "debit": "20,000.00",
    "credit": "",
    "balance": "5,50,280.47"
  },
  {
    "id": "171",
    "date": "07 Aug 2026",
    "description": "UPI/MUSKU VIKAS\nRE/UBIN/157272311891/Payment from",
    "refNo": "UPI-618817619319",
    "debit": "",
    "credit": "6,500.00",
    "balance": "5,56,780.47"
  },
  {
    "id": "172",
    "date": "07 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/259091554512/Payment from",
    "refNo": "UPI-618818272478",
    "debit": "2,160.00",
    "credit": "",
    "balance": "5,54,620.47"
  },
  {
    "id": "173",
    "date": "07 Aug 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/587375958686/Payment from",
    "refNo": "UPI-618819398574",
    "debit": "330.00",
    "credit": "",
    "balance": "5,54,290.47"
  },
  {
    "id": "174",
    "date": "07 Aug 2026",
    "description": "UPI/KOMATI REDDY\n/SBIN/841931026367/Payment from",
    "refNo": "UPI-618819843303",
    "debit": "200.00",
    "credit": "",
    "balance": "5,54,090.47"
  },
  {
    "id": "175",
    "date": "07 Aug 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/427431814688/Payment from",
    "refNo": "UPI-618820025363",
    "debit": "5,810.00",
    "credit": "",
    "balance": "5,48,280.47"
  },
  {
    "id": "176",
    "date": "07 Aug 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/530026334041/Payment from",
    "refNo": "UPI-618830033988",
    "debit": "20.00",
    "credit": "",
    "balance": "5,48,260.47"
  },
  {
    "id": "177",
    "date": "07 Aug 2026",
    "description": "UPI/Airtel\nRecharg/YESB/629830589426/Payment from",
    "refNo": "UPI-618839869499",
    "debit": "203.00",
    "credit": "",
    "balance": "5,48,057.47"
  },
  {
    "id": "178",
    "date": "08 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/635263198751/Payment from",
    "refNo": "UPI-618962721000",
    "debit": "30.00",
    "credit": "",
    "balance": "5,48,027.47"
  },
  {
    "id": "179",
    "date": "08 Aug 2026",
    "description": "UPI/BHIMA\nRAM/YESB/957040546073/Payment from",
    "refNo": "UPI-618983370591",
    "debit": "80.00",
    "credit": "",
    "balance": "5,47,947.47"
  },
  {
    "id": "180",
    "date": "09 Aug 2026",
    "description": "UPI/Mr  KONDA\nOMK/UTIB/790923279201/Payment from",
    "refNo": "UPI-619052776641",
    "debit": "10.00",
    "credit": "",
    "balance": "5,47,937.47"
  },
  {
    "id": "181",
    "date": "09 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/718846001762/Payment from",
    "refNo": "UPI-619059574483",
    "debit": "380.00",
    "credit": "",
    "balance": "5,47,557.47"
  },
  {
    "id": "182",
    "date": "09 Aug 2026",
    "description": "UPI/AABID/SBIN/512075959649/Pay to Bhara",
    "refNo": "UPI-619077019819",
    "debit": "30.00",
    "credit": "",
    "balance": "5,47,527.47"
  },
  {
    "id": "183",
    "date": "10 Aug 2026",
    "description": "UPI/RADHE SHYAM\nJA/BARB/053419553250/Payment from",
    "refNo": "UPI-619123093869",
    "debit": "1,000.00",
    "credit": "",
    "balance": "5,46,527.47"
  },
  {
    "id": "184",
    "date": "10 Aug 2026",
    "description": "UPI/Mr Shaik\nAfro/YESB/181886497135/Payment from",
    "refNo": "UPI-619150333039",
    "debit": "130.00",
    "credit": "",
    "balance": "5,46,397.47"
  },
  {
    "id": "185",
    "date": "10 Aug 2026",
    "description": "UPI/BALAJI MITHAI\n/YESB/650765900200/Payment from",
    "refNo": "UPI-619150494348",
    "debit": "20.00",
    "credit": "",
    "balance": "5,46,377.47"
  },
  {
    "id": "186",
    "date": "10 Aug 2026",
    "description": "UPI/Al Mohammad\nra/YESB/872555557254/Payment from",
    "refNo": "UPI-619155857001",
    "debit": "30.00",
    "credit": "",
    "balance": "5,46,347.47"
  },
  {
    "id": "187",
    "date": "10 Aug 2026",
    "description": "UPI/MR POVAR\nARAV/YESB/875406611217/Payment from",
    "refNo": "UPI-619160750651",
    "debit": "20.00",
    "credit": "",
    "balance": "5,46,327.47"
  },
  {
    "id": "188",
    "date": "11 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/386754910076/Payment from",
    "refNo": "UPI-619271108786",
    "debit": "45.00",
    "credit": "",
    "balance": "5,46,282.47"
  },
  {
    "id": "189",
    "date": "11 Aug 2026",
    "description": "UPI/PADALA\nABHINAV/UNBA/844110852978/Payment from",
    "refNo": "UPI-619201510124",
    "debit": "70.00",
    "credit": "",
    "balance": "5,46,212.47"
  },
  {
    "id": "190",
    "date": "11 Aug 2026",
    "description": "UPI/BODA SANDEEP\nR/YESB/860317401514/Payment from",
    "refNo": "UPI-619201880628",
    "debit": "10.00",
    "credit": "",
    "balance": "5,46,202.47"
  },
  {
    "id": "191",
    "date": "11 Aug 2026",
    "description": "UPI/CHATLA\nVENKATA/YESB/951424232478/Payment from",
    "refNo": "UPI-619203913864",
    "debit": "10.00",
    "credit": "",
    "balance": "5,46,192.47"
  },
  {
    "id": "192",
    "date": "12 Aug 2026",
    "description": "UPI/SRI\nVENKATESHW/AIRP/162928438429/Payment\nmade",
    "refNo": "UPI-619356843799",
    "debit": "10,000.00",
    "credit": "",
    "balance": "5,36,192.47"
  },
  {
    "id": "193",
    "date": "12 Aug 2026",
    "description": "UPI/ELETI  PREM KU/SBIN/619312225421/Paid\nvia Sup",
    "refNo": "UPI-619359655193",
    "debit": "",
    "credit": "200.00",
    "balance": "5,36,392.47"
  },
  {
    "id": "194",
    "date": "12 Aug 2026",
    "description": "UPI/Mr GANESH\nBRA/YESB/202617384215/Payment from",
    "refNo": "UPI-619361004922",
    "debit": "350.00",
    "credit": "",
    "balance": "5,36,042.47"
  },
  {
    "id": "195",
    "date": "12 Aug 2026",
    "description": "UPI/SIDDI\nVINAYAKA/YESB/449710106410/Payment from",
    "refNo": "UPI-619361113324",
    "debit": "75.00",
    "credit": "",
    "balance": "5, 35,967.47"
  },
  {
    "id": "196",
    "date": "12 Aug 2026",
    "description": "UPI/AKHATAR ALI/UNBA/384093636259/Pay to\nBhara",
    "refNo": "UPI-619361292971",
    "debit": "155.00",
    "credit": "",
    "balance": "5,35,812.47"
  },
  {
    "id": "197",
    "date": "12 Aug 2026",
    "description": "UPI/ELETI  PREM KU/SBIN/619312677567/Paid\nvia Sup",
    "refNo": "UPI-619361636770",
    "debit": "",
    "credit": "580.00",
    "balance": "5,36,392.47"
  },
  {
    "id": "198",
    "date": "13 Aug 2026",
    "description": "UPI/RAJASTHAN\nSWEE/YESB/228146913963/Payment from",
    "refNo": "UPI-619438438733",
    "debit": "20.00",
    "credit": "",
    "balance": "5,36,372.47"
  },
  {
    "id": "199",
    "date": "13 Aug 2026",
    "description": "UPI/MYAKA  NARESH\n/SBIN/505985459729/Payment from",
    "refNo": "UPI-619439207646",
    "debit": "400.00",
    "credit": "",
    "balance": "5,35,972.47"
  },
  {
    "id": "200",
    "date": "13 Aug 2026",
    "description": "UPI/RANGANATHA\nTIF/YESB/422180098488/Payment from",
    "refNo": "UPI-619456006340",
    "debit": "30.00",
    "credit": "",
    "balance": "5,35,942.47"
  },
  {
    "id": "201",
    "date": "13 Aug 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/300721663770/Payment from",
    "refNo": "UPI-619458733001",
    "debit": "3,500.00",
    "credit": "",
    "balance": "5,32,442.47"
  },
  {
    "id": "202",
    "date": "13 Aug 2026",
    "description": "UPI/Jio\nRecharge/UTIB/595116910292/Payment from",
    "refNo": "UPI-619458798683",
    "debit": "39.00",
    "credit": "",
    "balance": "5,32,403.47"
  },
  {
    "id": "203",
    "date": "14 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/171567876189/Payment from",
    "refNo": "UPI-619584602909",
    "debit": "105.00",
    "credit": "",
    "balance": "5,32,298.47"
  },
  {
    "id": "204",
    "date": "14 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/356395616921/Payment from",
    "refNo": "UPI-619527165086",
    "debit": "180.00",
    "credit": "",
    "balance": "5,32,118.47"
  },
  {
    "id": "205",
    "date": "14 Aug 2026",
    "description": "UPI/RACHAKONDA\nVIT/YESB/271224647972/Payment from",
    "refNo": "UPI-619527461625",
    "debit": "30.00",
    "credit": "",
    "balance": "5,32,088.47"
  },
  {
    "id": "206",
    "date": "15 Aug 2026",
    "description": "UPI/RADHE SHYAM\nJA/BARB/775553654737/Payment from",
    "refNo": "UPI-619679823475",
    "debit": "30.00",
    "credit": "",
    "balance": "5,32,058.47"
  },
  {
    "id": "207",
    "date": "15 Aug 2026",
    "description": "UPI/BOBBY MOBILE\nC/CNRB/626297466718/Payment from",
    "refNo": "UPI-619680112757",
    "debit": "100.00",
    "credit": "",
    "balance": "5,31,958.47"
  },
  {
    "id": "208",
    "date": "15 Aug 2026",
    "description": "UPI/SPICY FAST\nFOO/YESB/588000992251/Payment from",
    "refNo": "UPI-619681595279",
    "debit": "80.00",
    "credit": "",
    "balance": "5,31,878.47"
  },
  {
    "id": "209",
    "date": "15 Aug 2026",
    "description": "UPI/LINGAPURAM\nDEV/ANDB/474976548438/Payment from",
    "refNo": "UPI-619697224732",
    "debit": "",
    "credit": "360.00",
    "balance": "5,32,238.47"
  },
  {
    "id": "210",
    "date": "15 Aug 2026",
    "description": "UPI/KANAKA DURGA\nWI/619619083120/PaidViaKotakApp",
    "refNo": "UPI-619697715475",
    "debit": "360.00",
    "credit": "",
    "balance": "5,31,878.47"
  },
  {
    "id": "211",
    "date": "15 Aug 2026",
    "description": "UPI/RACHAKONDA\nVITT/619619086580/PaidViaKotakApp",
    "refNo": "UPI-619697994173",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,858.47"
  },
  {
    "id": "212",
    "date": "15 Aug 2026",
    "description": "UPI/RACHAKONDA\nVITT/619619087582/PaidViaKotakApp",
    "refNo": "UPI-619698057236",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,838.47"
  },
  {
    "id": "213",
    "date": "15 Aug 2026",
    "description": "UPI/ENGLIKAR\nRAVIN/UNBA/113020073314/Pay to Bhara",
    "refNo": "UPI-619607335620",
    "debit": "10.00",
    "credit": "",
    "balance": "5,31,828.47"
  },
  {
    "id": "214",
    "date": "16 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/806053207582/Payment from",
    "refNo": "UPI-619724015986",
    "debit": "30.00",
    "credit": "",
    "balance": "5,31,798.47"
  },
  {
    "id": "215",
    "date": "16 Aug 2026",
    "description": "UPI/SIRIPURAM\nRAVI/SBIN/167129334154/Payment from",
    "refNo": "UPI-619735674479",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,778.47"
  },
  {
    "id": "216",
    "date": "16 Aug 2026",
    "description": "REV-UPI/SIRIPURAM\nRAV/SBIN/167129334154/Payment f",
    "refNo": "UPI-619735674479",
    "debit": "",
    "credit": "20.00",
    "balance": "5,31,798.47"
  },
  {
    "id": "217",
    "date": "16 Aug 2026",
    "description": "UPI/SIRIPURAM\nRAVI/619711493136/PaidViaKotakApp",
    "refNo": "UPI-619735729826",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,778.47"
  },
  {
    "id": "218",
    "date": "16 Aug 2026",
    "description": "REV-UPI/SIRIPURAM\nRAV/619711493136/PaidViaKotakA",
    "refNo": "UPI-619735729826",
    "debit": "",
    "credit": "20.00",
    "balance": "5,31,798.47"
  },
  {
    "id": "219",
    "date": "16 Aug 2026",
    "description": "UPI/GANGULA NAVEEN\n/619711493349/PaidViaKotakApp",
    "refNo": "UPI-619735751919",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,778.47"
  },
  {
    "id": "220",
    "date": "16 Aug 2026",
    "description": "UPI/ABDUL\nADNAN/YESB/927527827762/Payment from",
    "refNo": "UPI-619743707630",
    "debit": "10.00",
    "credit": "",
    "balance": "5,31,768.47"
  },
  {
    "id": "221",
    "date": "16 Aug 2026",
    "description": "UPI-REMI-FAILED-619619086580-15-JUL-2026",
    "refNo": "FOS26197193655216",
    "debit": "",
    "credit": "20.00",
    "balance": "5,31,788.47"
  },
  {
    "id": "222",
    "date": "17 Aug 2026",
    "description": "UPI/AKHATAR ALI/UNBA/486375691217/Pay to\nBhara",
    "refNo": "UPI-619817615176",
    "debit": "100.00",
    "credit": "",
    "balance": "5,31,688.47"
  },
  {
    "id": "223",
    "date": "17 Aug 2026",
    "description": "UPI/BODA SANDEEP\nR/YESB/539212112458/Payment from",
    "refNo": "UPI-619825036256",
    "debit": "10.00",
    "credit": "",
    "balance": "5,31,678.47"
  },
  {
    "id": "224",
    "date": "17 Aug 2026",
    "description": "UPI/LINGAPURAM\nDEV/ANDB/157589327831/Payment from",
    "refNo": "UPI-619836364999",
    "debit": "150.00",
    "credit": "",
    "balance": "5,31,528.47"
  },
  {
    "id": "225",
    "date": "18 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/078571001021/Payment from",
    "refNo": "UPI-619965534154",
    "debit": "30.00",
    "credit": "",
    "balance": "5,31,498.47"
  },
  {
    "id": "226",
    "date": "21 Aug 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/272758373261/Payment from",
    "refNo": "UPI-620261333602",
    "debit": "",
    "credit": "700.00",
    "balance": "5,32,198.47"
  },
  {
    "id": "227",
    "date": "21 Aug 2026",
    "description": "UPI/ANKANI\nNAGARAJ/YESB/754496783257/Payment from",
    "refNo": "UPI-620262925830",
    "debit": "45.00",
    "credit": "",
    "balance": "5,32,153.47"
  },
  {
    "id": "228",
    "date": "21 Aug 2026",
    "description": "UPI/ENGLIKAR\nRAVIN/UNBA/193669711067/Pay to Bhara",
    "refNo": "UPI-620263020744",
    "debit": "20.00",
    "credit": "",
    "balance": "5,32,133.47"
  },
  {
    "id": "229",
    "date": "21 Aug 2026",
    "description": "UPI/GANGARAM\nCHOWD/620215517826/PaidViaKotakApp",
    "refNo": "UPI-620286726068",
    "debit": "40.00",
    "credit": "",
    "balance": "5,32,093.47"
  },
  {
    "id": "230",
    "date": "21 Aug 2026",
    "description": "UPI/KOMMULA SAI\nKU/KKBK/338235156568/Payment from",
    "refNo": "UPI-620215511968",
    "debit": "",
    "credit": "50.00",
    "balance": "5,32,143.47"
  },
  {
    "id": "231",
    "date": "24 Aug 2026",
    "description": "UPI/NETFLIX\nCOM/HDFC/103715628100/Monthly auto",
    "refNo": "UPI-620567139510",
    "debit": "649.00",
    "credit": "",
    "balance": "5,31,494.47"
  },
  {
    "id": "232",
    "date": "25 Aug 2026",
    "description": "UPI/AKKALADEVI\nNAV/UBIN/370925828323/Payment from",
    "refNo": "UPI-620623078920",
    "debit": "10.00",
    "credit": "",
    "balance": "5,31,484.47"
  },
  {
    "id": "233",
    "date": "26 Aug 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/032167589032/Payment from",
    "refNo": "UPI-620720228906",
    "debit": "",
    "credit": "700.00",
    "balance": "5,32,184.47"
  },
  {
    "id": "234",
    "date": "26 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/521060505261/Payment from",
    "refNo": "UPI-620720292792",
    "debit": "180.00",
    "credit": "",
    "balance": "5,32,004.47"
  },
  {
    "id": "235",
    "date": "28 Aug 2026",
    "description": "UPI/AUNTY\nHOTEL/YESB/299428758121/Payment from",
    "refNo": "UPI-620923414994",
    "debit": "120.00",
    "credit": "",
    "balance": "5,31,884.47"
  },
  {
    "id": "236",
    "date": "28 Aug 2026",
    "description": "UPI/SPICY FAST\nFOO/YESB/108424014364/Payment from",
    "refNo": "UPI-620946349615",
    "debit": "70.00",
    "credit": "",
    "balance": "5,31,814.47"
  },
  {
    "id": "237",
    "date": "28 Aug 2026",
    "description": "UPI/GANGARAM\nCHOW/YESB/014155984009/Payment from",
    "refNo": "UPI-620946592599",
    "debit": "20.00",
    "credit": "",
    "balance": "5,31,794.47"
  },
  {
    "id": "238",
    "date": "28 Aug 2026",
    "description": "UPI/GANGARAM\nCHOW/YESB/886043539334/Payment from",
    "refNo": "UPI-620946755637",
    "debit": "10.00",
    "credit": "",
    "balance": "5,31,784.47"
  },
  {
    "id": "239",
    "date": "28 Aug 2026",
    "description": "UPI/Sama\nManikant/SBIN/548126929569/Payment from",
    "refNo": "UPI-620963797539",
    "debit": "",
    "credit": "180.00",
    "balance": "5,31,964.47"
  },
  {
    "id": "240",
    "date": "28 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/684443447202/Payment from",
    "refNo": "UPI-620965036046",
    "debit": "360.00",
    "credit": "",
    "balance": "5,31,604.47"
  },
  {
    "id": "241",
    "date": "29 Aug 2026",
    "description": "UPI/Sama\nManikant/SBIN/858165091792/Payment from",
    "refNo": "UPI-621090171647",
    "debit": "",
    "credit": "50.00",
    "balance": "5,31,654.47"
  },
  {
    "id": "242",
    "date": "29 Aug 2026",
    "description": "UPI/Mursarat\nKhato/YESB/544309906641/Payment from",
    "refNo": "UPI-621091042908",
    "debit": "170.00",
    "credit": "",
    "balance": "5,31,484.47"
  },
  {
    "id": "243",
    "date": "31 Aug 2026",
    "description": "UPI/Musku\nNarsaia/SBIN/131200952276/Payment from",
    "refNo": "UPI-621219967136",
    "debit": "",
    "credit": "5,000.00",
    "balance": "5,36,484.47"
  },
  {
    "id": "244",
    "date": "31 Aug 2026",
    "description": "UPI/Yettem\nAshok/SBIN/671569340376/Payment from",
    "refNo": "UPI-621221733699",
    "debit": "15,000.00",
    "credit": "",
    "balance": "5,21,484.47"
  },
  {
    "id": "245",
    "date": "31 Aug 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/876940969705/Payment from",
    "refNo": "UPI-621252806713",
    "debit": "",
    "credit": "650.00",
    "balance": "5,22,134.47"
  },
  {
    "id": "246",
    "date": "31 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/225909492684/Payment from",
    "refNo": "UPI-621252998181",
    "debit": "230.00",
    "credit": "",
    "balance": "5,21,904.47"
  },
  {
    "id": "247",
    "date": "31 Aug 2026",
    "description": "UPI/ANGAREKKALA\n/CNRB/469029531422/Payment from",
    "refNo": "UPI-621264431285",
    "debit": "",
    "credit": "30.00",
    "balance": "5,21,934.47"
  },
  {
    "id": "248",
    "date": "31 Aug 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/947556489381/Payment from",
    "refNo": "UPI-621264444401",
    "debit": "130.00",
    "credit": "",
    "balance": "5,21,804.47"
  },
  {
    "id": "249",
    "date": "31 Aug 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/854124741766/Payment from",
    "refNo": "UPI-621264874223",
    "debit": "370.00",
    "credit": "",
    "balance": "5,21,434.47"
  },
  {
    "id": "250",
    "date": "01 Sep 2026",
    "description": "UPI/AUNTY\nHOTEL/YESB/790589142370/Payment from",
    "refNo": "UPI-621391679279",
    "debit": "15.00",
    "credit": "",
    "balance": "5,21,419.47"
  },
  {
    "id": "251",
    "date": "01 Sep 2026",
    "description": "UPI/CHENOORI\nNARES/AIRP/156351057788/Payment from",
    "refNo": "UPI-621329401630",
    "debit": "30.00",
    "credit": "",
    "balance": "5,21,389.47"
  },
  {
    "id": "252",
    "date": "01 Sep 2026",
    "description": "UPI/Nandigama\nLaxm/INDB/605149019292/Payment from",
    "refNo": "UPI-621329921100",
    "debit": "",
    "credit": "2,500.00",
    "balance": "5,23,889.47"
  },
  {
    "id": "253",
    "date": "01 Sep 2026",
    "description": "UPI/Sita Ram TEA\nS/YESB/352932436978/Payment from",
    "refNo": "UPI-621337568885",
    "debit": "150.00",
    "credit": "",
    "balance": "5,23,739.47"
  },
  {
    "id": "254",
    "date": "01 Sep 2026",
    "description": "UPI/ANGAREKKALA\n/CNRB/690119584124/Payment from",
    "refNo": "UPI-621351037506",
    "debit": "2,350.00",
    "credit": "",
    "balance": "5,21,389.47"
  },
  {
    "id": "255",
    "date": "02 Sep 2026",
    "description": "UPI/MOTHE VIGNESH\n/CNRB/007942106503/Payment from",
    "refNo": "UPI-621406110626",
    "debit": "",
    "credit": "2,000.00",
    "balance": "5,23,389.47"
  },
  {
    "id": "256",
    "date": "02 Sep 2026",
    "description": "UPI/ELETI  PREM\nKU/SBIN/544780729535/Payment from",
    "refNo": "UPI-621406427982",
    "debit": "10,000.00",
    "credit": "",
    "balance": "5,13,389.47"
  },
  {
    "id": "257",
    "date": "02 Sep 2026",
    "description": "UPI/KOMMULA  SAI\nK/SBIN/669427094851/Payment from",
    "refNo": "UPI-621418160244",
    "debit": "",
    "credit": "180.00",
    "balance": "5,13,569.47"
  },
  {
    "id": "258",
    "date": "02 Sep 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/288037425208/Payment from",
    "refNo": "UPI-621419133284",
    "debit": "540.00",
    "credit": "",
    "balance": "5,13,029.47"
  },
  {
    "id": "259",
    "date": "03 Sep 2026",
    "description": "UPI/Thirumala\nEdli/UNBA/380411306344/Payment from",
    "refNo": "UPI-621546771105",
    "debit": "45.00",
    "credit": "",
    "balance": "5,12,984.47"
  },
  {
    "id": "260",
    "date": "04 Sep 2026",
    "description": "UPI/Muthevar\nLaxma/UNBA/268267838038/Pay to Bhara",
    "refNo": "UPI-621666433617",
    "debit": "100.00",
    "credit": "",
    "balance": "5,12,884.47"
  },
  {
    "id": "261",
    "date": "05 Sep 2026",
    "description": "UPI/KOTTALA  RAMA\n/SBIN/521562119496/Payment from",
    "refNo": "UPI-621792969721",
    "debit": "",
    "credit": "2,000.00",
    "balance": "5,14,884.47"
  },
  {
    "id": "262",
    "date": "05 Sep 2026",
    "description": "UPI/Musku\nNarsaia/SBIN/939239950305/Payment from",
    "refNo": "UPI-621701187395",
    "debit": "",
    "credit": "2,000.00",
    "balance": "5,16,884.47"
  },
  {
    "id": "263",
    "date": "06 Sep 2026",
    "description": "UPI/MUSUKU RAKESH\n/UBIN/227965211025/Payment from",
    "refNo": "UPI-621884180972",
    "debit": "",
    "credit": "5,000.00",
    "balance": "5,21,884.47"
  },
  {
    "id": "264",
    "date": "06 Sep 2026",
    "description": "UPI/THE\nSWAYAMVAR/HDFC/850424831276/Payment\nfrom",
    "refNo": "UPI-621886003002",
    "debit": "10,998.00",
    "credit": "",
    "balance": "5,10,886.47"
  },
  {
    "id": "265",
    "date": "06 Sep 2026",
    "description": "UPI/SNITCH\nAPPAREL/RATN/615383494501/Payment from",
    "refNo": "UPI-621890228122",
    "debit": "1,399.00",
    "credit": "",
    "balance": "5,09,487.47"
  },
  {
    "id": "266",
    "date": "06 Sep 2026",
    "description": "UPI/Centro\nTIRUMAL/JIOP/999971370392/Payment from",
    "refNo": "UPI-621893552632",
    "debit": "2,298.00",
    "credit": "",
    "balance": "5,07,189.47"
  },
  {
    "id": "267",
    "date": "07 Sep 2026",
    "description": "UPI/Mahi Chat\nBand/YESB/065287317815/Payment from",
    "refNo": "UPI-621960805375",
    "debit": "140.00",
    "credit": "",
    "balance": "5,07,049.47"
  },
  {
    "id": "268",
    "date": "07 Sep 2026",
    "description": "UPI/Mubarak\nCafe/YESB/806212359513/Payment from",
    "refNo": "UPI-621963444380",
    "debit": "525.00",
    "credit": "",
    "balance": "5,06,524.47"
  },
  {
    "id": "269",
    "date": "07 Sep 2026",
    "description": "UPI/Reliance BP\nMo/YESB/201684065297/Payment from",
    "refNo": "UPI-621965568107",
    "debit": "20,000.00",
    "credit": "",
    "balance": "4,86,524.47"
  },
  {
    "id": "270",
    "date": "07 Sep 2026",
    "description": "UPI/TRILOCHAN\nPAD/SBIN/712547926233/Payment from",
    "refNo": "UPI-621972018721",
    "debit": "1,750.00",
    "credit": "",
    "balance": "4,84,774.47"
  },
  {
    "id": "271",
    "date": "07 Sep 2026",
    "description": "UPI/Sri aadhya\nGra/YESB/612775401835/Payment from",
    "refNo": "UPI-621972126012",
    "debit": "20.00",
    "credit": "",
    "balance": "4,84,754.47"
  },
  {
    "id": "272",
    "date": "08 Sep 2026",
    "description": "UPI/THOUTU\nRAHUL/ICIC/968813276819/Payment from",
    "refNo": "UPI-622051673665",
    "debit": "100.00",
    "credit": "",
    "balance": "4,84,654.47"
  },
  {
    "id": "273",
    "date": "08 Sep 2026",
    "description": "UPI/ATTOLI SUMITH\n/KKBK/368438279541/Payment from",
    "refNo": "UPI-622057528240",
    "debit": "",
    "credit": "100.00",
    "balance": "4,84,754.47"
  },
  {
    "id": "274",
    "date": "08 Sep 2026",
    "description": "UPI/K SANTOSH\nNARS/HDFC/909777710282/Payment from",
    "refNo": "UPI-622065746625",
    "debit": "400.00",
    "credit": "",
    "balance": "4,84,354.47"
  },
  {
    "id": "275",
    "date": "09 Sep 2026",
    "description": "UPI/K SANTOSH\nNARS/HDFC/408090867661/Payment from",
    "refNo": "UPI-622171728087",
    "debit": "200.00",
    "credit": "",
    "balance": "4,84,154.47"
  },
  {
    "id": "276",
    "date": "09 Sep 2026",
    "description": "UPI/LINGAPURAM\nPR/SBIN/775820753890/Payment from",
    "refNo": "UPI-622123469693",
    "debit": "",
    "credit": "370.00",
    "balance": "4,84,524.47"
  },
  {
    "id": "277",
    "date": "09 Sep 2026",
    "description": "UPI/SPICY FAST\nFOO/YESB/814342794965/Payment from",
    "refNo": "UPI-622132146614",
    "debit": "80.00",
    "credit": "",
    "balance": "4,84,444.47"
  },
  {
    "id": "278",
    "date": "10 Sep 2026",
    "description": "UPI/Thirumala\nEdli/UNBA/609621639665/Payment from",
    "refNo": "UPI-622253162103",
    "debit": "75.00",
    "credit": "",
    "balance": "4,84,369.47"
  },
  {
    "id": "279",
    "date": "11 Sep 2026",
    "description": "UPI/Thirumala\nEdli/UNBA/428180393908/Payment from",
    "refNo": "UPI-622323769601",
    "debit": "90.00",
    "credit": "",
    "balance": "4,84,279.47"
  },
  {
    "id": "280",
    "date": "11 Sep 2026",
    "description": "UPI/Muthevar\nLaxma/UNBA/560448635807/Pay to Bhara",
    "refNo": "UPI-622360889221",
    "debit": "20.00",
    "credit": "",
    "balance": "4,84,259.47"
  },
  {
    "id": "281",
    "date": "11 Sep 2026",
    "description": "UPI/MUSKU VIKAS\nRE/UBIN/125298158090/Payment from",
    "refNo": "UPI-622367055290",
    "debit": "",
    "credit": "300.00",
    "balance": "4,84,559.47"
  },
  {
    "id": "282",
    "date": "11 Sep 2026",
    "description": "UPI/KANAKA DURGA\nW/YESB/003588020760/Payment from",
    "refNo": "UPI-622367519110",
    "debit": "660.00",
    "credit": "",
    "balance": "4,83,899.47"
  },
  {
    "id": "283",
    "date": "12 Sep 2026",
    "description": "UPI/AUNTY\nHOTEL/YESB/193818999462/Payment from",
    "refNo": "UPI-622494965280",
    "debit": "30.00",
    "credit": "",
    "balance": "4,83,869.47"
  },
  {
    "id": "284",
    "date": "12 Sep 2026",
    "description": "UPI/MERA\nRAKESH/IPOS/376446084350/Payment from",
    "refNo": "UPI-622424246354",
    "debit": "20.00",
    "credit": "",
    "balance": "4,83,849.47"
  },
  {
    "id": "285",
    "date": "13 Sep 2026",
    "description": "UPI/Thirumala\nEdli/UNBA/779662757414/Payment from",
    "refNo": "UPI-622564293353",
    "debit": "45.00",
    "credit": "",
    "balance": "4,83,804.47"
  },
  {
    "id": "286",
    "date": "13 Sep 2026",
    "description": "UPI/Uma Maheswara\n/YESB/988086285619/Payment from",
    "refNo": "UPI-622582626061",
    "debit": "25.00",
    "credit": "",
    "balance": "4,83,779.47"
  },
  {
    "id": "287",
    "date": "13 Sep 2026",
    "description": "UPI/CHAI CLUB/YESB/713535208437/Payment\nfrom",
    "refNo": "UPI-622592113759",
    "debit": "30.00",
    "credit": "",
    "balance": "4,83,749.47"
  },
  {
    "id": "288",
    "date": "13 Sep 2026",
    "description": "UPI/RANGANATHA\nTIF/YESB/760776366029/Payment from",
    "refNo": "UPI-622595033385",
    "debit": "70.00",
    "credit": "",
    "balance": "4,83,679.47"
  },
  {
    "id": "289",
    "date": "14 Sep 2026",
    "description": "UPI/AUNTY\nHOTEL/YESB/266832006460/Payment from",
    "refNo": "UPI-622638884510",
    "debit": "30.00",
    "credit": "",
    "balance": "4,83,649.47"
  },
  {
    "id": "290",
    "date": "14 Sep 2026",
    "description": "UPI/THOUTU\nRAHUL/ICIC/098169033798/Payment from",
    "refNo": "UPI-622642520975",
    "debit": "200.00",
    "credit": "",
    "balance": "4,83,449.47"
  },
  {
    "id": "291",
    "date": "15 Sep 2026",
    "description": "Recd: IMPS/622619466206/SRIYOGE\nSHWARA/TGRB/X9702/Trans",
    "refNo": "IMPS-622619866216",
    "debit": "",
    "credit": "2,00,000.00",
    "balance": "6,83,449.47"
  },
  {
    "id": "292",
    "date": "17 Sep 2026",
    "description": "Recd: IMPS/621938607610/SRIYOGE\nSHWARA/TGRB/X9702/Trans",
    "refNo": "IMPS-621916049599",
    "debit": "",
    "credit": "2,00,000.00",
    "balance": "8,83,449.47"
  },
  {
    "id": "293",
    "date": "18 Sep 2026",
    "description": "Recd: IMPS/623415698763/SRIYOGE\nSHWARA/TGRB/X9702/Trans",
    "refNo": "IMPS-623418796522",
    "debit": "",
    "credit": "1,00,000.00",
    "balance": "9,83,449.47"
  },
  {
    "id": "294",
    "date": "19 Sep 2026",
    "description": "UPI/SRINIVASA\nDIRY/AIRP/992304678320/Payment made",
    "refNo": "UPI-622963805073",
    "debit": "20.00",
    "credit": "",
    "balance": "9,83,429.47"
  },
  {
    "id": "295",
    "date": "20 Sep 2026",
    "description": "UPI/RANGANATHA\nTIF/YESB/342421260457/Payment from",
    "refNo": "UPI-622985026425",
    "debit": "25.00",
    "credit": "",
    "balance": "9,83,404.47"
  }
];

export const kotakTransactions: KotakTransaction[] = defaultKotakTransactions;

export const kotakImportantInfo: string[] = [
  "RBI mandates Positive Pay for high-value cheques from Jan 1, 2021. Customers must submit cheque details via Net/Mobile Banking or at the branch on\nthe day of issuance or before handing it to the beneficiary. For more details, visit www.kotak.bank.in.",
  "From October 4, 2025, same-day cheque clearing will be implemented across all banks. Cheques will be credited or debited within a few hours of\nissuance.",
  "Complimentary insurance cover on Kotak Debit Cards (linked to Saving and Current accounts) will be discontinued w.e.f. July 20, 2025. All claims will be\naccepted until July 20, 2025, as per the existing process. Salary account holders may view their insurance covers under Debit Card Services in the Cards\n& FASTag section on the web portal. For any queries related to Debit Card insurance, write to dc.insurance@kotak.com or visit\nhttps://www.kotak.bank.in/en/personal-banking /cards/debit-cards/debit-card-services/insurnace-on-debit-card.html",
  "TDS is applicable from time to time as per the Income Tax Act, 2025 (IT Act) and Income Tax Rules, 2026. Currently, TDS is deducted when the aggregate\ninterest paid / credited across all FDs, RDs exceeds the threshold limit of Rs. 50,000/- for residents and Rs. 1,00,000/- for resident senior citizens in a\nfinancial year (FY) for a customer.",
  "You can avail a Tax Deduction at Source (TDS) exemption on the interest earned on your existing or new Fixed Deposits for the current financial year by\nsubmitting Form 121 (earlier Form 15G/15H). This exemption is available if you are eligible and the total interest earned on your bank deposits in a\nfinancial year exceeds the TDS exemption threshold. If the total interest earned on your bank deposits is below the TDS exemption threshold,\nsubmission of Form 121 is not required. A fresh Form 121 must be submitted at the beginning of each financial year for Fixed Deposits and Recurring\nDeposits.",
  "RBI, vide its circular DOR.CRE.REC.23/21.08.008/2022-23 dated April 19, 2022, has issued guidelines pertaining to the opening and maintenance of\nCurrent Account(s) of customers who have availed various credit facilities from the banking system. The term \"banking system\" refers to Scheduled\nCommercial Banks and Payments Banks. Banks (whether lending banks or otherwise) are required to monitor all Current Account, Overdraft, and Cash\nCredit accounts on a regular basis, at least on a half-yearly frequency. This monitoring must specifically consider the aggregate exposure of the banking\nsystem to the borrower vis-à-vis the individual bank's share in that exposure, in order to ensure compliance with the said instructions. Detailed\nguidelines are available in the aforementioned circular.",
  "Corporate Salary Account holders can view complete details of the General Schedule of Features and Charges (GSFC) related to balance maintenance,\ndebit card usage, transactions, and more by visiting: https://www.kotak.bank.in/en/personal-banking/accounts/savings-account/saving-accounts-fees-\nand-charges.html",
  "Starting December 2025, you will receive 30 free SMS alerts per month for transaction updates. To avoid charges beyond this limit, please maintain a\ncombined balance of ₹10,000 across your Savings and Term Deposits, or ensure regular salary credits in your salary account. If these conditions are not\nmet, a nominal fee of ₹0.15 per SMS will apply for transaction alerts such as UPI, NEFT, ATM withdrawals, Debit Card usage, and similar activities.\nMessages related to KYC and promotional offers will continue to be free of charge. For more details, please visit\nhttps://www.kotak.bank.in/en/gsfc.html.",
  "Deposits of up to ₹5,00,000 per depositor are fully insured by the Deposit Insurance and Credit Guarantee Corporation, under the Deposit Insurance\nScheme.",
  "Keep your account active for uninterrupted access to your funds: Inoperative accounts can be easily reactivated by submitting a signed request along\nwith valid KYC documents. For details, please click https://www.kotak.bank.in/en/reach-us.html",
  "Registering a nominee is strongly recommended: A nominee can help your family access funds lying in your inoperative account smoothly. In the event\nof the account holder’s demise, the nominee may visit our nearest branch with the required documents for verification and settlement of claims.",
  "Goods and Services Tax (GST), at the applicable rate of 18%, is levied on relevant service charges.",
  "Dear Customer, any inaccurate, incomplete or false disclosure of statement of financial transaction or reportable account by you would lead to penal\nconsequence on the Bank under applicable law. The Bank shall be entitled to recover from you such amount levied due to such inaccuracy,\nincompleteness or false disclosure. You will indemnify the Bank in respect of all or any liabilities incurred by Bank, by reason of any of the information or\nparticulars given by you, being incorrect or false or being suppressed or omitted.",
  "Please note: This statement/ advice should not be construed as a Tax Invoice under the Goods and Services Tax Act.",
  "Effective 1 August 2026, the Dynamic Currency Conversion (DCC) fee on Kotak Debit Card transactions will be 3.5% + GST of the transaction amount\n(earlier 1% + GST)."
];

export const kotakNarrationsPart1 = [
  {
    "code": "AP",
    "description": "Autopay for Billpay"
  },
  {
    "code": "ATL",
    "description": "ATM withdrawal done from other bank ATM machine"
  },
  {
    "code": "ATW",
    "description": "ATM withdrawal done from Kotak ATM machine"
  },
  {
    "code": "BP",
    "description": "Bill Pay transaction"
  },
  {
    "code": "CDM",
    "description": "Kotak Cash Deposit Machine"
  },
  {
    "code": "CMS",
    "description": "Cash Management Service"
  },
  {
    "code": "IB",
    "description": "Transaction done on Kotak Net Banking"
  },
  {
    "code": "IMPS",
    "description": "Immediate Payment Service"
  },
  {
    "code": "Netcard",
    "description": "Netc@rd transaction"
  },
  {
    "code": "OS",
    "description": "Online Shopping transaction"
  },
  {
    "code": "OT",
    "description": "Online Trading transaction via Payment Gateway"
  },
  {
    "code": "PB",
    "description": "Transaction done through Phone Banking (IVR)"
  },
  {
    "code": "PCI/PCD",
    "description": "POS transaction"
  },
  {
    "code": "RTGS",
    "description": "Real Time Gross Settlement"
  },
  {
    "code": "UPI",
    "description": "Unified Payment Interface"
  },
  {
    "code": "VISACCPAY",
    "description": "Visa Credit Card Payment"
  }
];

export const kotakNarrationsPart2 = [
  {
    "code": "IMT",
    "description": "Instant Money Transfer"
  },
  {
    "code": "KB",
    "description": "Billpay transaction via Keya Chatbot"
  },
  {
    "code": "MB",
    "description": "Transaction done on Mobile banking"
  },
  {
    "code": "NACH",
    "description": "National Automated Clearing House"
  },
  {
    "code": "NEFT",
    "description": "National Electronic Funds Transfer"
  },
  {
    "code": "VMT",
    "description": "VISA Money Transfer"
  },
  {
    "code": "WB",
    "description": "Billpay transaction via WhatsApp Banking"
  },
  {
    "code": "Int. Pd.",
    "description": "Interest credited on your savings account balance"
  },
  {
    "code": "Sweep transfer to",
    "description": "Booking new Term Deposit"
  },
  {
    "code": "Sweep transfer from",
    "description": "Broken existing Term Deposit"
  }
];
