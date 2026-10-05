import Spirit from "@/components/Spirit";

export default function PermissionLayerSection() {
  return (
    <section className="essay-section permission-layer-section" aria-labelledby="permission-layer-title">
      <div className="editorial-pair editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="permission-layer-title">Permission<br />comes before<br />payment.</h2>
          <p className="editorial-body">2049 does not need to become the payment rail. It sits before execution, deciding whether an economic action is allowed to happen at all.</p>
        </div>
        <div className="permission-system" role="img" aria-label="Agent requests pass through the 2049 economic permission layer before reaching payment, wallet, or x402.">
          <span className="system-endpoint">Agent</span>
          <span className="system-arrow" aria-hidden="true">↓</span>
          <div className="permission-node"><span className="system-mark"><span className="technical-dot" aria-hidden="true" />2049</span><span className="system-label">Economic permission layer</span></div>
          <span className="system-arrow" aria-hidden="true">↓</span>
          <span className="system-endpoint system-payment">Payment / wallet / x402</span>
          <div className="system-spirit" aria-hidden="true"><Spirit state="idle" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
