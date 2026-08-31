import re

with open('src/pages/SathyabamaLetterheadGenerator.tsx', 'r') as f:
    content = f.read()

# Replace Component Name
content = content.replace('MouriLetterheadGenerator', 'SathyabamaLetterheadGenerator')

# Replace Default State
content = content.replace('referenceNo: "MT/GEN/2026/102"', 'referenceNo: "SU/ADMIN/2026/045"')
content = content.replace('salutation: "Dear Sir/Madam,"', 'salutation: "To Whom It May Concern,"')
content = content.replace('subject: "Employment Verification"', 'subject: "bonafide Certificate"')
content = content.replace('bodyText: "This is to certify that Mr./Ms. Jane Doe is a bonafide employee of MOURI Tech Limited, working in the capacity of Senior Software Engineer since August 1, 2026.\\n\\nThis letter is issued at the request of the employee for the purpose of opening a bank account / visa application.\\n\\nPlease feel free to contact us for any further clarification."', 'bodyText: "This is to certify that Mr./Ms. Jane Doe (Register No: 39110000) is a bonafide student of Sathyabama Institute of Science and Technology, pursuing B.E. Computer Science and Engineering during the academic year 2024-2028.\\n\\nThis certificate is issued at the request of the student for the purpose of a bank loan application.\\n\\nPlease feel free to contact the administration for any further verification."')
content = content.replace('signatoryName: "Jane Smith"', 'signatoryName: "Dr. T. Sasipraba"')
content = content.replace('signatoryDesignation: "Director - Human Resources"', 'signatoryDesignation: "Vice Chancellor"')

# Replace Header and Footer HTML
header_old = """        <div>
          <img src="/mouri_logo_new.png" alt="MOURI Tech" className="h-14 w-auto object-contain mb-1" />
        </div>
        <div className="text-right text-gray-500 text-[10px] leading-[1.5] font-sans">
          <p className="text-[#005A9C] text-[13px] mb-1 font-bold tracking-wide uppercase">MOURI Tech Limited</p>
          <p>Survey No. 64, 4th Floor, SBR Surya Pearl Sector III</p>
          <p>Hitech City, Madhapur, Hyderabad, TS 500081, INDIA</p>
          <p className="mt-1">
            <span className="text-gray-400">P:</span> +91 40 67254100 &nbsp;|&nbsp; <span className="text-gray-400">E:</span> info@mouritech.org.in &nbsp;|&nbsp; <span className="text-gray-400">W:</span> mouritech.com
          </p>
          <p><span className="text-gray-400">CIN:</span> U72200TG2005PTC048486</p>
        </div>"""

header_new = """        <div className="flex items-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Sathyabama Institute of Science and Technology" className="h-20 w-auto object-contain" />
        </div>
        <div className="text-right text-gray-600 text-[10px] leading-[1.5] font-sans">
          <p className="text-[#800000] text-[14px] mb-1 font-bold tracking-wide uppercase">SATHYABAMA</p>
          <p className="text-[11px] font-semibold text-slate-700">INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
          <p>(Deemed to be University)</p>
          <p>Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai - 600 119, Tamil Nadu, INDIA.</p>
          <p className="mt-1">
            <span className="text-gray-400">Phone:</span> 044 - 2450 3150 / 51 / 52 / 54 / 55
          </p>
          <p><span className="text-gray-400">Email:</span> registrar@sathyabama.ac.in &nbsp;|&nbsp; <span className="text-gray-400">Web:</span> www.sathyabama.ac.in</p>
        </div>"""

content = content.replace(header_old, header_new)

footer_old = """      {/* Tech Dot Pattern */}
      <div 
        className="absolute top-1 left-0 w-48 h-10 opacity-[0.15]" 
        style={{ backgroundImage: 'radial-gradient(#005A9C 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      ></div>
      
      {/* Geometric Accent Line */}
      <div className="absolute top-0 left-0 w-32 h-[3px] bg-[#005A9C]"></div>
      <div className="absolute top-0 left-32 w-16 h-[3px] bg-blue-300"></div>

      <div className="flex justify-between items-center font-sans text-[9px] text-gray-400 relative z-10 pl-2">
        <p className="font-semibold text-gray-500 tracking-wider">MOURI TECH LIMITED</p>
        <p>Regd Office: D1 IT Park Hill #2, Visakhapatnam, 530003, AP</p>
        <p>www.mouritech.com</p>
      </div>"""

footer_new = """      {/* Sathyabama Footer Accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] flex">
        <div className="w-1/3 h-full bg-[#800000]"></div>
        <div className="w-2/3 h-full bg-[#000080]"></div>
      </div>

      <div className="flex justify-between items-center font-sans text-[10px] text-gray-500 relative z-10 pt-4 px-8">
        <p className="font-semibold text-[#800000] tracking-wider uppercase">SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
        <p>Accredited with Grade "A++" by NAAC</p>
        <p>www.sathyabama.ac.in</p>
      </div>"""

content = content.replace(footer_old, footer_new)

# Replace all Mouri colors with Sathyabama colors
content = content.replace('#005A9C', '#800000') # Primary blue to maroon
content = content.replace('MOURI Tech', 'Sathyabama University')
content = content.replace('MOURI Tech Limited', 'Sathyabama Institute of Science and Technology')
content = content.replace('For Sathyabama Institute of Science and Technology', 'For SATHYABAMA')
content = content.replace('mouri_logo_new.png', 'https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png')
content = content.replace('to="/mouri"', 'to="/sathyabama"')

with open('src/pages/SathyabamaLetterheadGenerator.tsx', 'w') as f:
    f.write(content)

print("Done")
