import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maique Moraes — Senior Software Engineer",
  description: "Senior full stack software engineer working with TypeScript, React, Next.js, Node.js, and applied AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
