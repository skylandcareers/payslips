import os

filepath = "src/pages/MouriLetterheadGenerator.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix PageHeader to support isPrintFixed
old_page_header = """  const PageHeader = () => (
    <div className="w-full relative pt-2 print:pt-6">
      <div className="absolute -top-10 md:-top-14 -left-10 md:-left-14 w-[calc(100%+80px)] md:w-[calc(100%+112px)] h-[8px] bg-[#005A9C] z-20 print:hidden"></div>
      <div className="hidden print:block fixed top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20"></div>"""

new_page_header = """  const PageHeader = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative ${isPrintFixed ? 'pt-6' : 'pt-2 print:pt-6'}`}>
      <div className={`absolute -top-10 md:-top-14 -left-10 md:-left-14 w-[calc(100%+80px)] md:w-[calc(100%+112px)] h-[8px] bg-[#005A9C] z-20 ${isPrintFixed ? 'hidden' : 'print:hidden'}`}></div>
      <div className={`${isPrintFixed ? 'block' : 'hidden print:block'} fixed top-0 left-0 w-full h-[8px] bg-[#005A9C] z-20`}></div>"""

content = content.replace(old_page_header, new_page_header)

old_page_footer = """  const PageFooter = () => (
    <div className="w-full relative border-t border-gray-200 bg-white mt-8 pt-4 pb-10 md:pb-14 print:pb-4">"""

new_page_footer = """  const PageFooter = ({ isPrintFixed = false }: { isPrintFixed?: boolean }) => (
    <div className={`w-full relative border-t border-gray-200 bg-white ${isPrintFixed ? 'pb-4 pt-4' : 'mt-8 pt-4 pb-10 md:pb-14 print:pb-4'}`}>"""

content = content.replace(old_page_footer, new_page_footer)


# Fix the preview section container
old_preview = """        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="hidden print:block watermark grayscale" />

          {/* Letterhead Paper Container */}
          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg rounded-md relative flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 page-container overflow-hidden">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">
              <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            <table className="print-table flex-1 relative z-10 h-full">
              <thead className="print-header">
                <tr>
                  <td>
                    <div className="px-10 md:px-14">
                      <PageHeader />
                    </div>
                  </td>
                </tr>
              </thead>
              
              <tbody className="print-body">"""

new_preview = """        {/* Multi-Page WYSIWYG Preview Section */}
        <div className={`print-container flex-1 overflow-y-auto bg-slate-200/50 p-4 md:p-8 rounded-2xl md:flex flex-col gap-10 items-center relative print:block print:bg-transparent print:rounded-none print:p-0 print:m-0 print:overflow-visible ${activeTab === "preview" ? "flex" : "hidden"}`}>
          
          <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="hidden print:block watermark grayscale" />

          <div className="hidden print:block fixed top-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageHeader isPrintFixed={true} />
            </div>
          </div>
          <div className="hidden print:block fixed bottom-0 left-0 w-full z-50 bg-white">
            <div className="px-10">
              <PageFooter isPrintFixed={true} />
            </div>
          </div>

          <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-black shadow-lg rounded-md relative flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 page-container overflow-hidden">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none print:hidden w-[70%] flex justify-center z-0">
              <img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="" className="w-full h-auto object-contain grayscale" />
            </div>

            <table className="w-full relative z-10 h-full">
              <thead>
                <tr>
                  <td>
                    <div className="px-10 md:px-14 pt-10 md:pt-14 print:pt-0 print:opacity-0">
                      <PageHeader />
                    </div>
                  </td>
                </tr>
              </thead>
              
              <tbody>"""

content = content.replace(old_preview, new_preview)


# Fix footer rendering inside table
old_footer = """              <tfoot className="print-footer">
                <tr>
                  <td className="align-bottom">
                    <div className="px-10 md:px-14">
                      <PageFooter />
                    </div>
                  </td>
                </tr>
              </tfoot>"""

new_footer = """              <tfoot>
                <tr>
                  <td className="align-bottom">
                    <div className="px-10 md:px-14 print:opacity-0">
                      <PageFooter />
                    </div>
                  </td>
                </tr>
              </tfoot>"""

content = content.replace(old_footer, new_footer)


# Fix paragraph spacing issue
old_paragraphs = """                      <div className="space-y-4 text-justify text-gray-900">
                        {formData.bodyText.split('\\n').map((paragraph, idx) => (
                          <p key={idx} className="min-h-[1rem]">{paragraph}</p>
                        ))}
                      </div>"""

new_paragraphs = """                      <div className="text-justify text-gray-900">
                        {formData.bodyText.split('\\n').map((paragraph, idx) => (
                          paragraph.trim() ? <p key={idx} className="mb-4">{paragraph}</p> : null
                        ))}
                      </div>"""

content = content.replace(old_paragraphs, new_paragraphs)


with open(filepath, "w") as f:
    f.write(content)

print("Done")
