import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen and share-sheet icon for iOS, matching the SVG favicon. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#121512" }}>
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          <path d="M8 22V10l8 7.5L24 10v12" stroke="#f3f1ea" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="17.5" r="2.2" fill="#9aa6ff" />
        </svg>
      </div>
    ),
    size,
  );
}
