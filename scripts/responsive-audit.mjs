import { chromium } from 'playwright';
import fs from 'fs';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const OUT = 'scripts/shots';
fs.mkdirSync(OUT, { recursive: true });

const widths = [320, 375, 414, 768, 1024, 1440];
const pages = ['HOME', 'MISSION', 'ADULTS', 'KIDS', 'CONTACT US'];

const browser = await chromium.launch();
let problems = 0;

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });

  for (const label of pages) {
    // Desktop nav is hidden below md; open the mobile menu when needed.
    const link = page.getByRole('button', { name: label, exact: true }).first();
    if (!(await link.isVisible())) {
      await page.getByLabel('Toggle navigation menu').click();
    }
    await page.getByRole('button', { name: label, exact: true }).first().click();
    await page.waitForTimeout(400);

    const res = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const offenders = [];
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
          // ignore elements inside intentionally clipped containers
          let p = el.parentElement, clipped = false;
          while (p && p !== document.body) {
            const o = getComputedStyle(p).overflowX;
            if (o === 'hidden' || o === 'auto' || o === 'scroll') { clipped = true; break; }
            p = p.parentElement;
          }
          if (!clipped) offenders.push(el.tagName + '.' + String(el.className).slice(0, 60));
        }
      });
      // Partially visible content = clipped (off-screen carousel slides have left >= vw, so they are ignored)
      document.querySelectorAll('h1,h2,h3,h4,p,button,a,input,select,textarea,label').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.left < vw - 1 && r.right > vw + 1) {
          offenders.push('CLIPPED ' + el.tagName + ':' + (el.textContent || '').trim().slice(0, 30));
        }
      });
      return {
        scrollW: document.documentElement.scrollWidth,
        vw,
        offenders: offenders.slice(0, 5),
      };
    });

    const bad = res.scrollW > res.vw + 1 || res.offenders.length > 0;
    if (bad) problems++;
    console.log(`${bad ? 'FAIL' : 'ok  '} w=${w} ${label} scrollW=${res.scrollW} vw=${res.vw}`, bad ? res.offenders : '');
    await page.screenshot({ path: `${OUT}/${label.replace(' ', '_')}-${w}.png`, fullPage: true });
  }
  await ctx.close();
}

await browser.close();
console.log(`\nDone. ${problems} problem page/viewport combos.`);
process.exit(problems ? 1 : 0);
