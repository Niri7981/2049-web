import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions — Yosh",
  description: "Answers about Yosh's current capabilities, authority boundaries, wallet, and payment flow.",
};

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
