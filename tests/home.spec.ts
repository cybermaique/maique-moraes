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

  test("states the current role and live local time", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(en.hero.facts.now.value)).toBeVisible();
    const based = page.locator("dd", { hasText: en.hero.facts.based.value });
    await expect(based.locator("time")).toHaveText(/\d{1,2}:\d{2}/);
  });

  test("tells visitors the time difference from their own zone", async ({ browser }) => {
    const context = await browser.newContext({ timezoneId: "America/New_York" });
    const page = await context.newPage();
    await page.goto("/");
    // João Pessoa is UTC−3 all year; New York is UTC−4 or UTC−5 depending on the season.
    await expect(page.locator("#contact")).toContainText(/It’s .+ in João Pessoa — (1|2)\sh ahead of you\./);
    await context.close();
  });

  test("links to the site's public source code", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer").getByRole("link", { name: new RegExp(en.contact.viewSource) })).toHaveAttribute(
      "href",
      profile.sourceCode,
    );
  });

  test("serves the resume PDF", async ({ request }) => {
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

  test("plays the opening sequence on every page load", async ({ page }) => {
    // Record whether the head script ever turns the intro on, without racing its timer.
    await page.addInitScript(() => {
      const w = window as typeof window & { __introPlayed?: boolean };
      w.__introPlayed = false;
      new MutationObserver(() => {
        if (document.documentElement?.dataset.intro === "play") w.__introPlayed = true;
      }).observe(document, { attributes: true, subtree: true, attributeFilter: ["data-intro"] });
    });
    const introPlayed = () => page.evaluate(() => (window as typeof window & { __introPlayed?: boolean }).__introPlayed);
    const html = page.locator("html");

    await page.goto("/");
    expect(await introPlayed()).toBe(true);
    // Released once the sequence has finished, so later navigations never replay it.
    await expect(html).not.toHaveAttribute("data-intro", /.*/, { timeout: 5_000 });

    // A reload is a new page load, so the sequence plays again.
    await page.reload();
    expect(await introPlayed()).toBe(true);
  });

  test("follows the system theme by default", async ({ page }) => {
    const html = page.locator("html");
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await expect(html).toHaveAttribute("data-theme", "light");
    await page.emulateMedia({ colorScheme: "dark" });
    await page.reload();
    await expect(html).toHaveAttribute("data-theme", "dark");
  });

  test("switches theme and remembers the choice", async ({ page, isMobile }) => {
    // On small screens the toggle lives in the menu.
    const openMenuIfNeeded = async () => {
      if (isMobile) await page.getByRole("button", { name: en.a11y.openMenu }).click();
    };
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "dark");
    await openMenuIfNeeded();
    await page.getByRole("button", { name: en.a11y.themeToLight }).click();
    await expect(html).toHaveAttribute("data-theme", "light");
    await page.reload();
    await expect(html).toHaveAttribute("data-theme", "light");
    await openMenuIfNeeded();
    await expect(page.getByRole("button", { name: en.a11y.themeToDark })).toBeVisible();
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
