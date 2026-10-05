import ProductVideo from "@/components/ProductVideo";
import Spirit from "@/components/Spirit";

export default function ControlSection() {
  return (
    <section className="essay-section control-section" aria-labelledby="control-title">
      <div className="control-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="control-title">Control<br />without<br />exposure.</h2>
          <p className="editorial-body">Give an agent authority. Change it at any time. Pause, resume, and adjust limits without handing over unrestricted control.</p>
        </div>
        <div className="control-media">
          <ProductVideo />
          <div className="control-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
