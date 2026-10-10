import { primaryChapters, sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function SiteNavigation() {
  const { t } = useLanguage();
  const chapterLabels = [t.nav.product, t.nav.howItWorks, t.nav.docs, t.nav.roadmap];
  return (
    <header className="site-header">
      <a className="sheet-mark" href="#top" aria-label={t.accessibility.back}><span className="mark-dot" aria-hidden="true" /><span>Yosh</span></a>
      <nav className="site-navigation" aria-label={t.accessibility.mainNav}>
        {primaryChapters.map((chapter, index) => <a className="header-chapter-link" href={chapter.href} key={chapter.href}>{chapterLabels[index]}</a>)}
        <a href={sourceLinks.github} target="_blank" rel="noreferrer">{t.nav.github}</a>
        <LanguageSwitch />
      </nav>
    </header>
  );
}
