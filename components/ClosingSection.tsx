import Spirit from "@/components/Spirit";
import { sourceLinks } from "@/lib/links";

export default function ClosingSection() {
  return (
    <footer className="essay-section closing-section" aria-labelledby="closing-title">
      <div className="closing-content editorial-inset">
        <h2 className="closing-statement" id="closing-title">Agents are learning to act.<br />They need boundaries.</h2>
        <nav className="closing-links" aria-label="Yosh resources">
          <a href="#top">Yosh</a>
          <a href={sourceLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#docs">Docs</a>
          <a href="#get-started">Get started</a>
        </nav>
      </div>
      <div className="closing-boundary" aria-hidden="true" />
      <div className="closing-spirit"><Spirit state="sleeping" floating={false} interactive={false} /><span className="sleep-note" aria-hidden="true">z z</span></div>
    </footer>
  );
}
