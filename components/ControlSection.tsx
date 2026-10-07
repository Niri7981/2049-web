import ProductVideo from "@/components/ProductVideo";
import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";

export default function ControlSection() {
  const { t } = useLanguage();
  const copy = t.control;
  return (
    <section className="essay-section control-section" aria-labelledby="control-title">
      <div className="control-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="control-title">{copy.title.map((line, index) => <span key={index}>{line}{index < copy.title.length - 1 && <br />}</span>)}</h2>
          <p className="editorial-body">{copy.body}</p>
        </div>
        <div className="control-media">
          <ProductVideo />
          <ol className="future-clips" aria-label={copy.clipsLabel}>{copy.clips.map((clip) => <li key={clip}>{clip}</li>)}</ol>
          <div className="control-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
