import os

def fix_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    # Remove the buggy absolute bar from PageHeader
    old_header = """  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-2 print:pt-6'}`}>
      <div className={`absolute -top-10 md:-top-14 -left-10 md:-left-14 w-[calc(100%+80px)] md:w-[calc(100%+112px)] h-[8px] bg-[#005A9C] z-20 ${isPrintFixed ? 'hidden' : 'print:hidden'}`}></div>
      <div className={`${isPrintFixed ? 'block' : 'hidden print:block'} fixed top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20`}></div>"""

    new_header = """  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-2 print:pt-6'}`}>
      <div className={`${isPrintFixed ? 'block' : 'hidden print:block'} fixed top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20`}></div>"""

    content = content.replace(old_header, new_header)

    # Insert absolute bar directly into page-container
    if "MouriLetterhead" in filepath:
        old_container = """          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg rounded-md relative flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 page-container">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">"""
            
        new_container = """          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg rounded-md relative flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 page-container">
            
            {/* Screen Preview Bleed Bar */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20 print:hidden rounded-t-md"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">"""
            
        content = content.replace(old_container, new_container)
    else:
        old_container = """          <div className="w-full max-w-[210mm] bg-white text-black shadow-lg rounded-md relative print:shadow-none print:rounded-none print:w-full print:max-w-none print:h-auto page-container">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">"""
            
        new_container = """          <div className="w-full max-w-[210mm] bg-white text-black shadow-lg rounded-md relative print:shadow-none print:rounded-none print:w-full print:max-w-none print:h-auto page-container">
            
            {/* Screen Preview Bleed Bar */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20 print:hidden rounded-t-md"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">"""
            
        content = content.replace(old_container, new_container)

    with open(filepath, "w") as f:
        f.write(content)

fix_file("src/pages/MouriLetterheadGenerator.tsx")
fix_file("src/pages/MouriOfferLetter.tsx")

print("Done")
