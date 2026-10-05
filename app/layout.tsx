import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2049 — Economic permission for autonomous agents",
  description:
    "2049 gives autonomous agents bounded economic authority. Act, spend and transact without unrestricted control of your wallet.",
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
