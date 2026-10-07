import { primaryChapters } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroContents() {
  const { locale, t } = useLanguage();
  const chapterLabels = [t.nav.product, t.nav.howItWorks, t.nav.docs, t.nav.roadmap];

  return (
    <>
      <h1 className="permission-heading" lang={locale === "zh" ? "zh-CN" : "en"}>
        {t.hero.statement.map((line) => <span key={line}>{line}</span>)}
      </h1>
      <nav className="chapter-index" lang={locale === "zh" ? "zh-CN" : "en"} aria-label={t.nav.chapters}>
        {primaryChapters.map((chapter, index) => <a href={chapter.href} key={chapter.href}>{chapterLabels[index]}</a>)}
      </nav>
    </>
  );
}
