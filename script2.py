import os

files = [
    "src/pages/MouriOfferLetter.tsx",
    "src/pages/MouriPayslipGenerator.tsx",
    "src/pages/MouriLetterheadGenerator.tsx"
]

replacements = {
    "3rd Floor, Loukya Towers, Bldg. #6-3-83, Mallampet Road, Bachupally, Hyderabad - 500090, Telangana, India": "D1 IT Park Hill #2, Rushikonda, Madhurawada, Visakhapatnam, 530003, Andhra Pradesh",
    "3rd Floor, Loukya Towers, Bldg. #6-3-83": "D1 IT Park Hill #2",
    "Mallampet Road, Bachupally, Hyderabad - 500090, Telangana, India": "Rushikonda, Madhurawada, Visakhapatnam, 530003, Andhra Pradesh",
    "hr@mouritech.com |": "info@mouritech.com |",
    "hr@mouritech.com": "info@mouritech.com",
    "Email:": "Phone:</span> +91 891 681 4100 | <span className=\"text-[#005A9C]\">Email:"
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
