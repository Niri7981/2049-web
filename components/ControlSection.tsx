import ProductVideo from "@/components/ProductVideo";
import Spirit from "@/components/Spirit";

export default function ControlSection() {
  return (
    <section className="essay-section control-section" aria-labelledby="control-title">
      <div className="control-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="control-title">Control<br />without<br />exposure.</h2>
          <p className="editorial-body">Set or revoke a member’s grant, adjust daily authority, and pause new payments. Already submitted transactions remain subject to reconciliation.</p>
        </div>
        <div className="control-media">
          <ProductVideo />
          <ol className="future-clips" aria-label="Planned product recordings"><li>Connect Codex</li><li>Give bounded authority</li><li>Approved or denied</li></ol>
          <div className="control-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
