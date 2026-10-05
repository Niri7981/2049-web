import { sourceLinks } from "@/lib/links";

const steps = [
  { title: "Install and open Yosh", copy: "Build the current macOS app from source and open it." },
  { title: "Connect Codex", copy: "Use Members to connect through MCP. Open a Codex chat or reload MCP, then wait for the real handshake." },
  { title: "Set authority", copy: "Set the shared daily limit and a SpendGrant: total allowance, per-transaction limit, and expiry. Reload MCP after grant changes." },
  { title: "Make a request", copy: "Ask for a registered demo resource. Simulation is the default; Devnet payment requires explicit configuration and test-wallet funding." },
  { title: "Review the result", copy: "Read the decision, then check payment and delivery separately." },
];

export default function GetStartedSection() {
  return (
    <section className="essay-section get-started-section" id="get-started" aria-labelledby="get-started-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="get-started-title">Start with<br />a boundary.</h2>
          <p className="editorial-body">A local source installation, followed by a bounded first request.</p>
          <p className="section-followup"><a className="text-link" href="#docs">Requirements and installation guide</a></p>
        </div>
        <ol className="onboarding-steps">
          {steps.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}
        </ol>
      </div>
      <p className="quiet-note editorial-inset source-install-note">Get started from source. A standalone public download is not available yet. <a className="text-link" href={sourceLinks.installation} target="_blank" rel="noreferrer">Repository installation</a></p>
    </section>
  );
}
