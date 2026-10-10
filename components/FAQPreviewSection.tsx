import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function FAQPreviewSection() {
  const { t } = useLanguage();
  const copy = t.faq;
  return (
    <section className="essay-section faq-preview-section" id="faq" aria-labelledby="faq-preview-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="faq-preview-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
        </div>
        <div className="faq-preview-index">
          <p className="quiet-label">{String(copy.questions.length).padStart(2, "0")} / {copy.indexLabel}</p>
          <Link href="/faq" className="faq-preview-link">{copy.viewAll}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
