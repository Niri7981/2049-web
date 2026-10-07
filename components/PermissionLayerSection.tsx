import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";

export default function PermissionLayerSection() {
  const { t } = useLanguage();
  const copy = t.permissionLayer;
  return (
    <section className="essay-section permission-layer-section" aria-labelledby="permission-layer-title">
      <div className="editorial-pair editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="permission-layer-title">{copy.title.map((line, index) => <span key={index}>{line}{index < copy.title.length - 1 && <br />}</span>)}</h2>
          <p className="editorial-body">{copy.body}</p>
        </div>
        <div className="permission-system" role="img" aria-label={copy.diagram}>
          <span className="system-endpoint">{copy.agent}</span>
          <span className="system-arrow" aria-hidden="true">↓</span>
          <div className="permission-node"><span className="system-mark"><span className="technical-dot" aria-hidden="true" />Yosh</span><span className="system-label">{copy.layer}</span></div>
          <span className="system-arrow" aria-hidden="true">↓</span>
          <span className="system-endpoint system-payment">{copy.payment}</span>
          <div className="system-spirit" aria-hidden="true"><Spirit state="idle" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
