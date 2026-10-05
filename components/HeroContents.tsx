import { primaryChapters } from "@/lib/links";

type HeroLocale = "en" | "zh";

const copy = {
  en: {
    lang: "en",
    statement: ["Economic", "permission", "for", "autonomous", "agents"],
    indexLabel: "Homepage chapters",
    chapters: ["Product", "How it works", "Docs", "Roadmap"],
  },
  zh: {
    lang: "zh-CN",
    statement: ["面向自主代理的", "经济权限"],
    indexLabel: "首页章节导航",
    chapters: ["产品", "工作原理", "文档", "路线图"],
  },
} as const;

// Both objects follow the same selected locale. The planned language selector
// can pass it here without rendering duplicate language blocks or changing links.
export default function HeroContents({ locale = "en" }: { locale?: HeroLocale }) {
  const content = copy[locale];

  return (
    <>
      <h1 className="permission-heading" lang={content.lang}>
        {content.statement.map((line) => <span key={line}>{line}</span>)}
      </h1>
      <nav className="chapter-index" lang={content.lang} aria-label={content.indexLabel}>
        {primaryChapters.map((chapter, index) => <a href={chapter.href} key={chapter.href}>{content.chapters[index]}</a>)}
      </nav>
    </>
  );
}
