import { primaryChapters, sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function SiteNavigation() {
  const { locale, t } = useLanguage();
  const chapterLabels = [t.nav.product, t.nav.howItWorks, t.nav.docs, t.nav.roadmap];
  return (
    <header className="site-header">
      <a className="sheet-mark" href="#top" aria-label={t.accessibility.back}><span className="mark-dot" aria-hidden="true" /><span>Yosh</span></a>
      <nav className="site-navigation" aria-label={t.accessibility.mainNav}>
        {primaryChapters.map((chapter, index) => <a className="header-chapter-link" href={chapter.href} key={chapter.href}>{chapterLabels[index]}</a>)}
        <a href={sourceLinks.github} target="_blank" rel="noreferrer">{t.nav.github}</a>
        <div className="header-language-social">
          <LanguageSwitch />
          <div className="header-social-links" role="group" aria-label={locale === "zh" ? "社交主页" : "Social profiles"}>
            <a href={sourceLinks.xProfile} target="_blank" rel="noopener noreferrer" aria-label="X — nirimyq">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.43L5.55 22H2.4l7.25-8.29L1.8 2h6.41l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.26 3.9H5.4L17.8 20Z" /></svg>
            </a>
            <a href={sourceLinks.githubProfile} target="_blank" rel="noopener noreferrer" aria-label="GitHub — Niri7981">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.06 3.23 1.45.1-.73.4-1.23.72-1.52-2.48-.28-5.09-1.24-5.09-5.48 0-1.21.43-2.2 1.15-2.97-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.13a10.57 10.57 0 0 1 5.55 0c2.11-1.43 3.05-1.13 3.05-1.13.61 1.53.22 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.25-2.61 5.2-5.1 5.48.41.35.77 1.04.77 2.1v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
