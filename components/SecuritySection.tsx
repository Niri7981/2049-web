import { useLanguage } from "@/components/LanguageProvider";

export default function SecuritySection() {
  const { t } = useLanguage();
  const copy = t.security;
  return (
    <section className="essay-section security-section" id="security" aria-labelledby="security-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="security-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
          <p className="section-followup"><a className="text-link" href="#docs">{copy.link}</a></p>
        </div>
        <div className="security-boundaries">
          <p className="quiet-label">{copy.agentCannot}</p>
          <ul>{copy.boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}</ul>
          <p className="quiet-note">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
