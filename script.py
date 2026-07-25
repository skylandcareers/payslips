import os

files = [
    "src/pages/MouriOfferLetter.tsx",
    "src/pages/MouriPayslipGenerator.tsx",
    "src/pages/MouriLetterheadGenerator.tsx",
    "src/pages/MouriIndex.tsx"
]

replacements = {
    "Aviso Software India LLP": "MOURI Tech Limited",
    "Aviso AI | End-to-End AI Revenue Platform": "MOURI Tech | Enterprise IT Solutions",
    "4th Floor, Block B, Purva Summit, Whitefield Road, Hitec City, Hyderabad - 500081": "3rd Floor, Loukya Towers, Bldg. #6-3-83, Mallampet Road, Bachupally, Hyderabad - 500090, Telangana, India",
    "4th Floor, Block B, Purva Summit": "3rd Floor, Loukya Towers, Bldg. #6-3-83",
    "Whitefield Road, Hitec City, Hyderabad - 500081": "Mallampet Road, Bachupally, Hyderabad - 500090, Telangana, India",
    "Whitefield Road, Hitec City, Hyderabad, Telangana - 500081": "Mallampet Road, Bachupally, Hyderabad - 500090, Telangana, India",
    "LLPIN: AAL-4581 | ": "",
    "LLPIN: AAL-4581": "",
    "https://media.licdn.com/dms/image/v2/D560BAQGREzSyNC8Gtw/company-logo_200_200/company-logo_200_200/0/1687330866404/aviso_inc_logo?e=2147483647&v=beta&t=8-c6FAeLmXM5IIbukECZ4W6vgIhc7bdaEYOWfOaMWYw": "https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png",
    "aviso logo": "mouri tech logo",
    "aviso logo icon": "mouri tech logo icon",
    "E93D44": "005A9C",
    "hr@aviso.com": "hr@mouritech.com",
    "www.aviso.com": "www.mouritech.com",
    "export default OfferLetter;": "export default MouriOfferLetter;",
    "const OfferLetter = () => {": "const MouriOfferLetter = () => {",
    "export default PayslipGenerator;": "export default MouriPayslipGenerator;",
    "const PayslipGenerator = () => {": "const MouriPayslipGenerator = () => {",
    "export default LetterheadGenerator;": "export default MouriLetterheadGenerator;",
    "const LetterheadGenerator = () => {": "const MouriLetterheadGenerator = () => {",
    "export default Index;": "export default MouriIndex;",
    "const Index = () => {": "const MouriIndex = () => {",
    "Aviso Generators": "MOURI Tech Generators",
    "/offer-letter": "/mouri/offer-letter",
    "/payslips": "/mouri/payslips",
    "/letterhead": "/mouri/letterhead"
}

for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, "r") as f:
            content = f.read()
        
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        with open(fpath, "w") as f:
            f.write(content)
print("Done replacements.")
