import re

with open('src/pages/SathyabamaLetterheadGenerator.tsx', 'r') as f:
    content = f.read()

# Fix Signature
content = content.replace('FOR SATHYABAMA UNIVERSITY LIMITED', 'FOR SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY')

# Fix Navbar
content = content.replace('<img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Sathyabama University" className="h-10 w-auto rounded" />', '<div className="text-xl font-extrabold text-[#800000]">SATHYABAMA</div>')

content = content.replace('<img src="https://www.mouritech.com/wp-content/uploads/2021/10/MT-Home-Logo-1-1.png" alt="Sathyabama University" className="h-10 w-auto rounded" />', '<div className="text-xl font-extrabold text-[#800000]">SATHYABAMA</div>')

# Fix Watermark
watermark_old = """            /* Watermark for print */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.04;
              z-index: -1;
              pointer-events: none;
              width: 70%;
            }"""

watermark_new = """            /* Watermark for print */
            .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0.04;
              z-index: -1;
              pointer-events: none;
              width: 50%;
            }"""
content = content.replace(watermark_old, watermark_new)

# Remove Mouri Watermark Image
watermark_img = '<img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Watermark" className="watermark print:block hidden" />'
sathyabama_watermark = '<img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Watermark" className="watermark print:block hidden" referrerPolicy="no-referrer" crossOrigin="anonymous" />'
content = content.replace(watermark_img, sathyabama_watermark)

# Remove old mouri watermark if still there
content = content.replace('<img src="/mouri_logo_new.png" alt="Watermark" className="watermark print:block hidden" />', sathyabama_watermark)

# Fix Logo 1
img_old = '<img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Sathyabama Institute of Science and Technology" className="h-20 w-auto object-contain" />'
img_new = '<img src="https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png" alt="Sathyabama Institute of Science and Technology" className="h-20 w-auto object-contain" referrerPolicy="no-referrer" crossOrigin="anonymous" />'
content = content.replace(img_old, img_new)

# Fix index logo
with open('src/pages/SathyabamaIndex.tsx', 'r') as f:
    index_content = f.read()
index_content = index_content.replace(img_old, img_new)
with open('src/pages/SathyabamaIndex.tsx', 'w') as f:
    f.write(index_content)

with open('src/pages/SathyabamaLetterheadGenerator.tsx', 'w') as f:
    f.write(content)
print("Done")
