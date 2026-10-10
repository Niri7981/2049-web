"use client";

import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import LanguageSwitch from "@/components/LanguageSwitch";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";

export default function FAQPage() {
  return <LanguageProvider page="faq"><FAQPageContent /></LanguageProvider>;
}

function FAQPageContent() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#content">{t.accessibility.skip}</a>
      <main className="faq-page" id="content" tabIndex={-1}>
        <div className="faq-page-sheet">
          <header className="faq-page-header">
            <Link className="sheet-mark" href="/" aria-label={t.accessibility.back}><span className="mark-dot" aria-hidden="true" /><span>Yosh</span></Link>
            <div className="faq-page-actions">
              <Link className="faq-page-back" href="/">← {t.faq.backHome}</Link>
              <LanguageSwitch />
            </div>
          </header>
          <FAQSection />
        </div>
      </main>
    </>
  );
}
