import os

files_to_check = [
    "index.html",
    "src/components/Header.tsx",
    "src/components/Hero.tsx",
    "src/components/ui/sticky-footer.tsx"
]

replacements = {
    "AltUni Labs - AI Talent &amp; Solutions Platform": "Enterprise Document Generators",
    "AltUni Labs": "Document Generators",
    "@AltUniLabs": "@DocGen",
    "AltUni": "Document Generators"
}

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".html") or file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, "r") as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                
                if content != new_content:
                    with open(filepath, "w") as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                pass
