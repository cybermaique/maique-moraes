import localFont from "next/font/local";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

/**
 * Display face: Bricolage Grotesque, self-hosted (SIL OFL 1.1, see fonts/OFL.txt).
 * The file is Google Fonts' Latin subset instanced at weight 600 with the optical-size
 * axis kept: half the size of the full variable font (≈40 KB instead of ≈77 KB) while
 * preserving the tight display cut the headlines rely on.
 */
const display = localFont({
  src: "./fonts/bricolage-grotesque-latin-600-opsz.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-bricolage",
  display: "swap",
});

/** Reading face: calm, highly legible sans for body copy and UI. */
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

/** Annotation face: used sparingly for labels, figures, and metadata. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
