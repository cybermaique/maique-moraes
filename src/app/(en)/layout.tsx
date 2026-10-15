import "../globals.css";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/root-document";
import { rootMetadata, viewport } from "@/lib/metadata";

export const metadata = rootMetadata("en");
export { viewport };

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
