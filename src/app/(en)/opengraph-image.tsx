import { getDictionary } from "@/content";
import { ogSize, renderHomeOgImage } from "@/lib/og-image";

export const alt = getDictionary("en").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

/** English social preview, inherited by nested case-study pages. */
export default function OpengraphImage() {
  return renderHomeOgImage("en");
}
