import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";
import type { Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({
    headless: false,
  });

  page = await browser.newPage();

  (global as any).page = page;
});

After(async () => {
  await browser.close();
});

export { page };