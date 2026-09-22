import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);

function getArg(key, defaultValue) {
  const index = args.indexOf(key);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }
  return defaultValue;
}

const pagePath = getArg('--path', '/union-bank');
const outFile = getArg('--out', path.resolve(process.cwd(), 'Union_Bank_Statement.pdf'));
const port = getArg('--port', process.env.PORT || '4175');
const host = getArg('--host', 'localhost');
const targetUrl = `http://${host}:${port}${pagePath.startsWith('/') ? pagePath : '/' + pagePath}`;

console.log(`[PDF Exporter] Target URL: ${targetUrl}`);
console.log(`[PDF Exporter] Output file: ${outFile}`);

async function generate() {
  const chromePath = process.env.CHROME_PATH || '/usr/bin/google-chrome';
  if (!fs.existsSync(chromePath)) {
    throw new Error(`Chrome binary not found at ${chromePath}. Please set CHROME_PATH environment variable.`);
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none',
    ],
  });

  try {
    const page = await browser.newPage();
    
    // Set A4 viewport
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
    });

    console.log(`[PDF Exporter] Navigating to ${targetUrl}...`);
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    // Emulate print media
    await page.emulateMediaType('print');

    // Wait for custom fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Give a brief moment for layout settling
    await new Promise((r) => setTimeout(r, 250));

    console.log(`[PDF Exporter] Rendering PDF...`);
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });

    fs.writeFileSync(outFile, pdfBuffer);
    console.log(`[PDF Exporter] Successfully saved PDF (${(pdfBuffer.length / 1024).toFixed(1)} KB) -> ${outFile}`);
  } finally {
    await browser.close();
  }
}

generate().catch((err) => {
  console.error('[PDF Exporter] Error:', err);
  process.exit(1);
});
