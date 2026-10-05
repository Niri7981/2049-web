import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosh — Economic permission for autonomous agents",
  description:
    "Give agents bounded spending authority without unrestricted wallet control. Yosh checks authority before payment. Local macOS, Codex through MCP, and Solana Devnet test USDC.",
};

export const viewport: Viewport = {
  themeColor: "#141412",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
