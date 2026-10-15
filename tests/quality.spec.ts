import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = ["/", "/pt", "/work/bid-comparison", "/pt/work/ai-in-business-workflows", "/work/financial-platform"];

test.describe("accessibility", () => {
  for (const theme of ["dark", "light"] as const) {
    for (const path of pages) {
      test(`has no WCAG A/AA violations (${theme}): ${path}`, async ({ page }) => {
        await page.addInitScript((value) => localStorage.setItem("theme", value), theme);
        await page.emulateMedia({ reducedMotion: "reduce" });
        await page.goto(path);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
        const summary = results.violations.map((violation) => `${violation.id}: ${violation.nodes.map((node) => node.target.join(" ")).join(", ")}`);
        expect(summary).toEqual([]);
      });
    }
  }

  test("skip link moves focus to the main content", async ({ page, isMobile }) => {
    test.skip(isMobile, "Keyboard navigation is a desktop concern.");
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  });
});

test.describe("seo", () => {
  test.skip(({ isMobile }) => isMobile, "Markup is identical across viewports.");

  test("declares canonical and language alternates", async ({ page }) => {
    await page.goto("/pt/work/financial-platform");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/pt\/work\/financial-platform$/);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /\/work\/financial-platform$/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);
  });

  test("publishes valid structured data", async ({ page }) => {
    await page.goto("/");
    const json = await page.locator('script[type="application/ld+json"]').textContent();
    const data = JSON.parse(json ?? "{}");
    expect(data["@type"]).toBe("ProfilePage");
    expect(data.mainEntity.name).toBe("Maique Moraes");
    expect(data.mainEntity.sameAs).toContain("https://github.com/cybermaique");
  });

  test("lists every page in the sitemap", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    expect(xml.match(/<loc>/g)).toHaveLength(8);
    expect(xml).toContain("/pt/work/bid-comparison");
  });
});
