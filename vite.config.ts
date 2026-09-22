import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import puppeteer from "puppeteer-core";
import fs from "fs";

function pdfExportPlugin(): Plugin {
  const createPdfHandler = () => {
    return async (req: any, res: any, next: any) => {
      const host = req.headers.host || "localhost:8080";
      const parsedUrl = new URL(req.url, `http://${host}`);

      if (parsedUrl.pathname === "/api/export-pdf") {
        const pagePath = parsedUrl.searchParams.get("path") || "/union-bank";
        const filename = parsedUrl.searchParams.get("filename") || "Union_Bank_Statement.pdf";
        const targetUrl = `http://${host}${pagePath.startsWith("/") ? pagePath : "/" + pagePath}`;

        const chromePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
        if (!fs.existsSync(chromePath)) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: `Chrome not found at ${chromePath}` }));
          return;
        }

        let browser: any = null;
        try {
          browser = await puppeteer.launch({
            executablePath: chromePath,
            headless: true,
            args: [
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--disable-gpu",
              "--disable-dev-shm-usage",
              "--font-render-hinting=none",
            ],
          });

          const page = await browser.newPage();
          await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
          await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });
          await page.emulateMediaType("print");
          await page.evaluateHandle("document.fonts.ready");
          await new Promise((r) => setTimeout(r, 200));

          const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
          });

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
          res.setHeader("Content-Length", pdfBuffer.length);
          res.end(pdfBuffer);
        } catch (error: any) {
          console.error("[PDF Export Error]:", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: error.message || "Failed to generate PDF" }));
        } finally {
          if (browser) {
            await browser.close();
          }
        }
        return;
      }
      next();
    };
  };

  return {
    name: "vite-plugin-pdf-export",
    configureServer(server) {
      server.middlewares.use(createPdfHandler());
    },
    configurePreviewServer(server) {
      server.middlewares.use(createPdfHandler());
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    pdfExportPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

