import { expect, test } from "@playwright/test";
import { en } from "../src/content/en";
import { pt } from "../src/content/pt";
import type { AiDiagramCopy, BidDiagramCopy } from "../src/content/types";

const locales = [
  { prefix: "", t: en, lang: "en" },
  { prefix: "/pt", t: pt, lang: "pt-BR" },
];

for (const { prefix, t, lang } of locales) {
  for (const study of t.cases) {
    test(`${lang} case study renders: ${study.slug}`, async ({ page }) => {
      await page.goto(`${prefix}/work/${study.slug}`);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
      await expect(page.getByRole("heading", { name: study.decision.title })).toBeVisible();
      await expect(page.getByText(study.scope)).toBeVisible();
    });
  }
}

test("navigates from a work card to its case study and onward", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: en.cases[0].title }).click();
  await expect(page).toHaveURL(/\/work\/bid-comparison$/);
  await page.getByRole("link", { name: new RegExp(en.cases[1].title) }).click();
  await expect(page).toHaveURL(/\/work\/ai-in-business-workflows$/);
});

test("bid diagram demonstrates a controlled failure and recovery", async ({ page }) => {
  const copy = en.cases[0].diagram as BidDiagramCopy;
  await page.goto("/work/bid-comparison");
  const toggle = page.getByRole("button", { name: copy.simulate });
  await toggle.click();
  await expect(page.getByRole("button", { name: copy.restore })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".dg [aria-live]")).toHaveText(copy.failCaption);
  await page.getByRole("button", { name: copy.restore }).click();
  await expect(page.locator(".dg [aria-live]")).toHaveText(copy.okCaption);
});

test("AI diagram routes each illustrative request to its lane", async ({ page }) => {
  const copy = en.cases[1].diagram as AiDiagramCopy;
  await page.goto("/work/ai-in-business-workflows");
  for (const route of copy.routes) {
    const button = page.getByRole("button", { name: new RegExp(route.request.slice(0, 20)) });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".dg [aria-live]")).toContainText(route.steps[0]);
  }
});

test("unknown pages return a branded 404", async ({ page }) => {
  const response = await page.goto("/work/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(en.notFound.title);
});
