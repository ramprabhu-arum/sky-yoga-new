import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const browser = await chromium.launch();
let problems = 0;

// width x height — includes a short landscape phone, the worst case for modals
const viewports = [
  [320, 568],
  [375, 667],
  [667, 375],
  [768, 1024],
];

async function checkModal(page, name, w, h) {
  await page.waitForTimeout(350);
  const r = await page.evaluate(() => {
    // The modal card is the last fixed overlay's first child
    const overlays = [...document.querySelectorAll('div.fixed.inset-0')];
    const ov = overlays[overlays.length - 1];
    if (!ov) return { missing: true };
    const card = ov.firstElementChild.getBoundingClientRect();
    return {
      top: Math.round(card.top),
      bottom: Math.round(card.bottom),
      left: Math.round(card.left),
      right: Math.round(card.right),
      vw: innerWidth,
      vh: innerHeight,
    };
  });
  const bad = r.missing || r.left < 0 || r.right > r.vw + 1 || r.top < 0 || r.bottom > r.vh + 1;
  if (bad) problems++;
  console.log(`${bad ? 'FAIL' : 'ok  '} ${w}x${h} ${name}`, bad ? JSON.stringify(r) : '');
}

for (const [w, h] of viewports) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  const openMenuIfNeeded = async () => {
    const t = page.getByLabel('Toggle navigation menu');
    if (await t.isVisible()) await t.click();
  };

  // Get Started (navbar CTA is hidden < sm, so use the mobile menu or hero button)
  await page.getByRole('button', { name: 'Begin Journey' }).first().click({ force: true });
  await checkModal(page, 'GetStarted', w, h);
  await page.keyboard.press('Escape');
  await page.mouse.click(2, 2);
  await page.waitForTimeout(250);

  // Search
  await page.getByLabel('Search SKY Yoga programs and centers').click();
  await checkModal(page, 'Search', w, h);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(250);

  // Video
  await page.getByTitle(/Click to watch/).click();
  await checkModal(page, 'Video', w, h);
  await page.keyboard.press('Escape');
  await page.mouse.click(2, 2);
  await page.waitForTimeout(250);

  // Registration (Kids hero CTA)
  await openMenuIfNeeded();
  await page.getByRole('button', { name: 'KIDS', exact: true }).first().click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /Enroll Your Child/ }).click();
  await checkModal(page, 'Registration', w, h);

  await ctx.close();
}
await browser.close();
console.log(`\nModal audit done. ${problems} problems.`);
process.exit(problems ? 1 : 0);
