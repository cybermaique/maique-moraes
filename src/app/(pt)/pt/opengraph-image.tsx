import { getDictionary } from "@/content";
import { ogSize, renderHomeOgImage } from "@/lib/og-image";

export const alt = getDictionary("pt").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

/** Portuguese social preview, inherited by nested case-study pages. */
export default function OpengraphImage() {
  return renderHomeOgImage("pt");
}
