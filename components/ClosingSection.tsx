import Spirit from "@/components/Spirit";

export default function ClosingSection() {
  return (
    <footer className="essay-section closing-section" aria-labelledby="closing-title">
      <div className="closing-content editorial-inset">
        <h2 className="closing-statement" id="closing-title">Agents are learning to act.<br />They need boundaries.</h2>
        <nav className="closing-links" aria-label="2049 resources">
          <a href="#product">2049</a>
          <a href="https://github.com/Niri7981/2049-web" target="_blank" rel="noreferrer">GitHub</a>
          {/* Resource destinations can be supplied without changing the composition. */}
          <span aria-disabled="true" title="Documentation is forthcoming">Docs</span>
          <span aria-disabled="true" title="Download is forthcoming">Download</span>
        </nav>
      </div>
      <div className="closing-boundary" aria-hidden="true" />
      <div className="closing-spirit"><Spirit state="sleeping" floating={false} interactive={false} /><span className="sleep-note" aria-hidden="true">z z</span></div>
    </footer>
  );
}
