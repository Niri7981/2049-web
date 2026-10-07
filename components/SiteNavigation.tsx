import { primaryChapters, sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

export default function SiteNavigation() {
  const { locale, t, setLocale } = useLanguage();
  const chapterLabels = [t.nav.product, t.nav.howItWorks, t.nav.docs, t.nav.roadmap];
  return (
    <header className="site-header">
      <a className="sheet-mark" href="#top" aria-label={t.accessibility.back}><span className="mark-dot" aria-hidden="true" /><span>Yosh</span></a>
      <nav className="site-navigation" aria-label={t.accessibility.mainNav}>
        {primaryChapters.map((chapter, index) => <a href={chapter.href} key={chapter.href}>{chapterLabels[index]}</a>)}
        <a href={sourceLinks.github} target="_blank" rel="noreferrer">{t.nav.github}</a>
        <a href="#get-started">{t.nav.getStarted}</a>
        <span className="language-switch" role="group" aria-label={t.nav.language}>
          <button type="button" lang="en" aria-label="English" aria-pressed={locale === "en"} data-active={locale === "en"} onClick={() => setLocale("en")}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" lang="zh-CN" aria-label="简体中文" aria-pressed={locale === "zh"} data-active={locale === "zh"} onClick={() => setLocale("zh")}>中文</button>
        </span>
      </nav>
    </header>
  );
}
