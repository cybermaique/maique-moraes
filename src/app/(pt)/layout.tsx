import "../globals.css";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/root-document";
import { rootMetadata, viewport } from "@/lib/metadata";

export const metadata = rootMetadata("pt");
export { viewport };

export default function PortugueseRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
