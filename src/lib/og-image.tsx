import { ImageResponse } from "next/og";
import { getArticle, getCaseStudy, getDictionary, profile, type Locale } from "@/content";

export const ogSize = { width: 1200, height: 630 };

/**
 * Fetches a subset of a Google font as TTF for Satori. Returns `undefined` when
 * offline so the image still renders with the default font.
 */
async function loadFont(family: string, weight: number, text: string): Promise<ArrayBuffer | undefined> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const source = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
    if (!source) return undefined;
    const response = await fetch(source[1]);
    return response.ok ? await response.arrayBuffer() : undefined;
  } catch {
    return undefined;
  }
}

interface OgContent {
  /** Headline lines; the last one is highlighted. */
  lines: string[];
  fontSize: number;
  footer: string;
  badge: string;
}

export function renderHomeOgImage(locale: Locale) {
  const t = getDictionary(locale);
  return renderOgImage({
    lines: t.hero.headline,
    fontSize: 84,
    footer: `${t.hero.eyebrow}  ·  TypeScript · React · Next.js · Node.js · NestJS`,
    badge: `${t.hero.facts.based.value} · UTC−3`,
  });
}

export function renderCaseOgImage(locale: Locale, slug: string) {
  const t = getDictionary(locale);
  const study = getCaseStudy(locale, slug);
  return renderOgImage({
    lines: [study?.title ?? t.meta.title],
    fontSize: 76,
    footer: study ? `${study.index}  ·  ${study.company}  ·  ${study.domain}` : t.hero.eyebrow,
    badge: t.hero.eyebrow,
  });
}

export function renderArticleOgImage(locale: Locale, slug: string) {
  const t = getDictionary(locale);
  const article = getArticle(locale, slug);
  return renderOgImage({
    lines: [article?.title ?? t.meta.title],
    fontSize: 76,
    footer: article ? `${t.notes.label}  ·  ${article.tag}` : t.hero.eyebrow,
    badge: t.hero.eyebrow,
  });
}

async function renderOgImage({ lines, fontSize, footer, badge }: OgContent) {
  const text = `${profile.name}${lines.join("")}${footer}${badge}MM`;
  const display = await loadFont("Bricolage Grotesque", 600, text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f3f1ea",
          backgroundImage:
            "linear-gradient(rgba(18,21,18,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,21,18,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#121512",
          fontFamily: display ? "Display" : undefined,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "#121512",
                color: "#f3f1ea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
              }}
            >
              MM
            </div>
            <div style={{ fontSize: 30 }}>{profile.name}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(18,21,18,0.2)",
              fontSize: 20,
              color: "#2d312c",
            }}
          >
            <div style={{ width: 10, height: 10, background: "#2b3cdc" }} />
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: 1000 }}>
          {lines.map((line, index) => (
            <div key={line} style={{ color: index === lines.length - 1 && lines.length > 1 ? "#2b3cdc" : "#121512" }}>
              {line}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", borderTop: "1px solid rgba(18,21,18,0.2)", paddingTop: 24, fontSize: 22, color: "#5c6159" }}>
          {footer}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: display ? [{ name: "Display", data: display, weight: 600, style: "normal" }] : undefined,
    },
  );
}
