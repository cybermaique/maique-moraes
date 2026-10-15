/**
 * Public origin of the site, without a trailing slash.
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — set this once a custom domain exists.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — provided automatically by Vercel.
 * 3. Local development fallback.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

/** Only production deployments should be indexed; previews and local builds stay out of search. */
export function isIndexable(): boolean {
  if (process.env.NEXT_PUBLIC_SITE_URL) return true;
  return process.env.VERCEL_ENV === "production";
}
