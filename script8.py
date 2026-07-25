import os

def fix_print_paddings(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Fix fixed header padding
    old_fixed_header = """          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>"""
          
    new_fixed_header = """          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>"""
          
    content = content.replace(old_fixed_header, new_fixed_header)

    # Fix fixed footer padding
    old_fixed_footer = """          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>"""
          
    new_fixed_footer = """          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-14 md:px-20">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>"""
          
    content = content.replace(old_fixed_footer, new_fixed_footer)

    # Make absolutely sure the table padding matches exactly
    if "MouriLetterhead" in filepath:
        content = content.replace('className="px-[25mm] md:px-[25mm]', 'className="px-14 md:px-20')

    with open(filepath, "w") as f:
        f.write(content)

fix_print_paddings("src/pages/MouriLetterheadGenerator.tsx")
fix_print_paddings("src/pages/MouriOfferLetter.tsx")

print("Done")
