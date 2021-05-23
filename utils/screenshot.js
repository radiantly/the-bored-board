import { launch } from "puppeteer";
import fs from "fs";
const {
  promises: { access },
  constants: { F_OK },
} = fs;

import { URLS } from "./urls";

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  for (const [i, url] of URLS.entries()) {
    process.stdout.write(`\rNavigating to page ${i + 1}`);
    const path = `../public/screenshots/${btoa(url)}.png`;
    if (
      await access(path, F_OK)
        .then(() => true)
        .catch(() => false)
    )
      continue;
    try {
      await page.goto(url);
      await page.screenshot({ path });
    } catch (ex) {
      console.log(`\rError fetching page ${i + 1}: ${url}`);
    }
  }
  await browser.close();
})();
