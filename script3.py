import os

files = [
    "src/pages/MouriOfferLetter.tsx",
    "src/pages/MouriPayslipGenerator.tsx",
    "src/pages/MouriLetterheadGenerator.tsx"
]

replacements = {
    "Aviso AI": "MOURI Tech",
    "Aviso Software ESOP 2026 Plan": "MOURI Tech ESOP Plan",
    "Aviso Software": "MOURI Tech",
    "alt=\"Aviso\"": "alt=\"MOURI Tech\"",
    "AVISO SOFTWARE INDIA LLP": "MOURI TECH LIMITED",
    "Aviso's forecasting and revenue products": "MOURI Tech's enterprise IT solutions",
    "Aviso": "MOURI Tech",
    '<span className="text-[38px] leading-none tracking-tight text-[#005A9C] lowercase font-sans -mt-1 font-medium">aviso</span>': ""
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
