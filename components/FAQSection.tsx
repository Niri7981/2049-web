import { useLanguage } from "@/components/LanguageProvider";
import { sourceLinks } from "@/lib/links";

export default function FAQSection() {
  const { t } = useLanguage();
  const copy = t.faq;
  return (
    <section className="essay-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy"><h1 className="editorial-title" id="faq-title">{copy.title[0]}<br />{copy.title[1]}</h1><p className="editorial-body">{copy.body}</p></div>
        <div className="faq-list">{copy.questions.map((entry, index) => {
          const sourceParts = entry.answer.split("{source}");
          return <details id={index === 2 ? "faq-security" : undefined} key={index}><summary>{entry.question}</summary><p>{sourceParts[0]}{sourceParts.length > 1 && <><a className="text-link" href={sourceLinks.github} target="_blank" rel="noreferrer">{copy.sourceLink}</a>{sourceParts[1]}</>}</p></details>;
        })}</div>
      </div>
    </section>
  );
}
