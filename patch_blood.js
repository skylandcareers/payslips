const fs = require('fs');
let content = fs.readFileSync('src/pages/VijayaDiagnosticIdCard.tsx', 'utf8');

const newBlood = `{/* Blood group pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '3.5px',
              background: VDC_ACCENT,
              borderRadius: '3px', padding: '2px 5px 2px 4px',
            }}>
              {/* Clean SVG blood drop icon */}
              <svg width="6" height="8" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0C5 0 0 6.5 0 9.5C0 12.261 2.239 14.5 5 14.5C7.761 14.5 10 12.261 10 9.5C10 6.5 5 0 5 0Z" fill="white" />
              </svg>
              <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'white' }}>{formData.bloodGroup}</span>
            </div>`;

content = content.replace(/\{\/\* Blood group pill \*\/\}[\s\S]*?<\/div>/, newBlood);
fs.writeFileSync('src/pages/VijayaDiagnosticIdCard.tsx', content);
