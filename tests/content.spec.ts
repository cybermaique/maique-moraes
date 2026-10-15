import { expect, test } from "@playwright/test";
import { en } from "../src/content/en";
import { pt } from "../src/content/pt";
import { profile } from "../src/content/profile";

/** Collects every string leaf with its path, for parity and emptiness checks. */
function leaves(value: unknown, path = ""): Map<string, string> {
  const result = new Map<string, string>();
  if (typeof value === "string") {
    result.set(path, value);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => leaves(item, `${path}[${index}]`).forEach((v, k) => result.set(k, v)));
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      leaves(item, path ? `${path}.${key}` : key).forEach((v, k) => result.set(k, v));
    }
  }
  return result;
}

test.describe("content", () => {
  test.skip(({ isMobile }) => isMobile, "Runs once; no browser needed.");

  test("English and Portuguese dictionaries have the same shape", () => {
    expect([...leaves(pt).keys()].sort()).toEqual([...leaves(en).keys()].sort());
  });

  test("no translation is empty", () => {
    for (const [path, value] of [...leaves(en), ...leaves(pt)]) {
      expect(value.trim(), path).not.toBe("");
    }
  });

  test("case studies share slugs across languages", () => {
    expect(pt.cases.map((study) => study.slug)).toEqual(en.cases.map((study) => study.slug));
  });

  test("contact details match the supplied résumé", () => {
    expect(profile.email).toBe("maiqued.18@gmail.com");
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/maique-moraes/");
    expect(profile.github).toBe("https://github.com/cybermaique");
  });
});
