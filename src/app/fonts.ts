import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

/** Display face: characterful grotesque with optical sizing for large headlines. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz"],
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
