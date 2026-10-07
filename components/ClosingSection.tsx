import Spirit from "@/components/Spirit";
import { sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

export default function ClosingSection() {
  const { t } = useLanguage();
  return (
    <footer className="essay-section closing-section" aria-labelledby="closing-title">
      <div className="closing-content editorial-inset">
        <h2 className="closing-statement" id="closing-title">{t.closing.statement[0]}<br />{t.closing.statement[1]}</h2>
        <nav className="closing-links" aria-label={t.accessibility.resources}>
          <a href="#top">Yosh</a>
          <a href={sourceLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#docs">{t.nav.docs}</a>
          <a href="#get-started">{t.nav.getStarted}</a>
        </nav>
      </div>
      <div className="closing-boundary" aria-hidden="true" />
      <div className="closing-spirit"><Spirit state="sleeping" floating={false} interactive={false} /><span className="sleep-note" aria-hidden="true">z z</span></div>
    </footer>
  );
}
