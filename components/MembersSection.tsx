import Spirit from "@/components/Spirit";

const controls = [
  { label: "Connection", copy: "Connect Codex through MCP. Setup / Waiting is distinct from a real, recent Connected session." },
  { label: "SpendGrant", copy: "Set total allowance, per-transaction limit, and expiry. Replace or revoke the selected member’s grant." },
  { label: "Daily Authority", copy: "One daily spending limit across members. Paid, Reserved, and Remaining stay distinct." },
  { label: "Payments", copy: "Pause new payments across the service. Pause does not reverse already submitted transactions." },
  { label: "Activity", copy: "Review the request, decision, payment state, delivery state, and available receipt or transaction information." },
];

export default function MembersSection() {
  return (
    <section className="essay-section members-section" id="product" aria-labelledby="members-title">
      <div className="editorial-pair editorial-inset product-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="members-title">Authority,<br />with boundaries.</h2>
          <p className="member-principle">One boundary,<br />many members.</p>
          <p className="editorial-body">Members keep separate local identities, grants, connections, and purchase ownership while sharing daily authority. Codex is the current supported named host integration.</p>
          <p className="current-state quiet-note">Local macOS · Codex through MCP<br />Solana Devnet · test USDC<br />Simulation by default</p>
        </div>
        <div className="members-list product-controls">
          <dl>
            {controls.map((control, index) => (
              <div className="product-control" key={control.label}>
                <dt>{control.label}</dt><dd>{control.copy}</dd>
                {index === 0 && <div className="product-spirit"><Spirit state="focused" floating={false} interactive={false} /></div>}
              </div>
            ))}
          </dl>
          <p className="quiet-note">Additional named host integrations are not available today.</p>
        </div>
      </div>
    </section>
  );
}
