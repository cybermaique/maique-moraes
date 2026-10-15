import { expect, test } from "@playwright/test";
import { en } from "../src/content/en";
import { pt } from "../src/content/pt";
import { profile } from "../src/content/profile";

test.describe("homepage", () => {
  test("presents identity, positioning, and calls to action in English", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(en.meta.title);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(en.hero.headline[2]);
    await expect(page.getByRole("link", { name: en.hero.ctaWork })).toHaveAttribute("href", "#work");
    await expect(page.getByRole("link", { name: new RegExp(en.hero.ctaResume) })).toHaveAttribute("href", profile.resume);
  });

  test("renders every main section", async ({ page }) => {
    await page.goto("/");
    for (const id of ["work", "experience", "approach", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
    await expect(page.getByRole("heading", { level: 2, name: en.work.title })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "Stratesys" })).toBeVisible();
    await expect(page.locator("footer")).toContainText(profile.name);
  });

  test("links to verified contact channels", async ({ page }) => {
    await page.goto("/");
    const contact = page.locator("#contact");
    await expect(contact.getByRole("link", { name: profile.email })).toHaveAttribute("href", `mailto:${profile.email}`);
    await expect(contact.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", profile.linkedin);
    await expect(contact.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", profile.github);
  });

  test("serves the résumé PDF", async ({ request }) => {
    const response = await request.get(profile.resume);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });

  test("the system diagram explains the selected layer", async ({ page }) => {
    await page.goto("/");
    const intelligence = page.getByRole("button", { name: /Intelligence/ });
    await intelligence.click();
    await expect(intelligence).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".system [aria-live]")).toContainText(en.hero.layers[2].body);
    await expect(page.getByRole("button", { name: /Services/ })).toHaveAttribute("aria-pressed", "false");
  });

  test("copies the email address", async ({ page, context, browserName }) => {
    test.skip(browserName !== "chromium", "Clipboard permissions are Chromium-specific.");
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");
    await page.getByRole("button", { name: en.contact.copy }).click();
    await expect(page.locator("#contact [role=status]")).toHaveText(en.contact.copied);
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(profile.email);
  });

  test("switches between English and Portuguese", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: en.a11y.switchLanguage }).click();
    await expect(page).toHaveURL(/\/pt$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(pt.hero.headline[0]);
    await page.getByRole("link", { name: pt.a11y.switchLanguage }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("every internal link resolves", async ({ page, request }) => {
    await page.goto("/");
    const hrefs = await page.locator("a[href^='/']").evaluateAll((links) =>
      [...new Set(links.map((link) => (link as HTMLAnchorElement).getAttribute("href")!.split("#")[0]))],
    );
    expect(hrefs.length).toBeGreaterThan(3);
    for (const href of hrefs) {
      expect((await request.get(href)).status(), href).toBe(200);
    }
  });
});

test.describe("mobile navigation", () => {
  test("opens, navigates, and closes with Escape", async ({ page, isMobile }) => {
    test.skip(!isMobile, "The menu button only exists on small screens.");
    await page.goto("/");
    const toggle = page.getByRole("button", { name: en.a11y.openMenu });
    await toggle.click();
    await expect(page.getByRole("button", { name: en.a11y.closeMenu })).toHaveAttribute("aria-expanded", "true");
    const menu = page.locator("#mobile-menu");
    await expect(menu.getByRole("link", { name: new RegExp(en.nav.experience) })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(toggle).toBeFocused();

    await toggle.click();
    await menu.getByRole("link", { name: new RegExp(en.nav.experience) }).click();
    await expect(menu).toBeHidden();
    await expect(page).toHaveURL(/#experience$/);
  });
});
