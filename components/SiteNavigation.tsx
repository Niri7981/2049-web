import { primaryChapters, sourceLinks } from "@/lib/links";

export default function SiteNavigation() {
  return (
    <header className="site-header">
      <a className="sheet-mark" href="#top" aria-label="Yosh, back to introduction"><span className="mark-dot" aria-hidden="true" /><span>Yosh</span></a>
      <nav className="site-navigation" aria-label="Main navigation">
        {primaryChapters.map((chapter) => <a href={chapter.href} key={chapter.href}>{chapter.label}</a>)}
        <a href={sourceLinks.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#get-started">Get started</a>
      </nav>
    </header>
  );
}
