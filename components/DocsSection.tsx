import { sourceLinks } from "@/lib/links";

const guides = [
  { title: "Get started", href: "#get-started", description: "Install → connect → set authority → request → review" },
  { title: "Connect Codex", href: sourceLinks.mcp, description: "Connection setup, session liveness, and reconnecting" },
  { title: "SpendGrant", href: "#spend-grant", description: "Total allowance, per-transaction limit, and expiry" },
  { title: "MCP guide", href: sourceLinks.mcp, description: "Agent requests and the local backend boundary" },
  { title: "Security model", href: "#security", description: "What the agent may request, and what stays local" },
  { title: "Architecture", href: sourceLinks.architecture, description: "Authority, accounting, and the purchase lifecycle" },
  { title: "GitHub", href: sourceLinks.github, description: "Inspect the product source" },
];

export default function DocsSection() {
  return (
    <section className="essay-section docs-section" id="docs" aria-labelledby="docs-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="docs-title">Read the boundaries.<br />Inspect the source.</h2>
          <p className="editorial-body">Start with installation and Codex connection, then explore authority, accounting, and execution.</p>
          <p className="quiet-note docs-requirements">Current local build<br />macOS 15+ · Node.js 24.5+<br />Xcode build tools</p>
          <a className="text-link docs-installation" href={sourceLinks.installation} target="_blank" rel="noreferrer">Repository installation guide ↗</a>
        </div>
        <ul className="docs-links">
          {guides.map((guide) => <li key={guide.title}><a href={guide.href} target={guide.href.startsWith("https:") ? "_blank" : undefined} rel={guide.href.startsWith("https:") ? "noreferrer" : undefined}><span>{guide.title}</span><span className="link-direction" aria-hidden="true">{guide.href.startsWith("https:") ? "↗" : "→"}</span><small>{guide.description}</small></a></li>)}
        </ul>
      </div>
      <p className="quiet-note documentation-note editorial-inset">Some repository guides retain older names and tool examples. Follow the current Yosh source when they differ. No separate hosted documentation site or standalone download is offered here.</p>
    </section>
  );
}
