import { sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

export default function GetStartedSection() {
  const { t } = useLanguage();
  const copy = t.getStarted;
  return (
    <section className="essay-section get-started-section" id="get-started" aria-labelledby="get-started-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="get-started-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
          <p className="download-version">{copy.downloadMeta}</p>
          <p className="section-followup"><a className="text-link" href="#docs">{copy.guide}</a></p>
        </div>
        <ol className="onboarding-steps">
          {copy.steps.map((step, index) => <li key={index}><span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}
        </ol>
      </div>
      <div className="editorial-inset beta-disclosure">
        <p>{copy.notarization}</p>
        <p>{copy.firstLaunch}</p>
        <a className="text-link" href={sourceLinks.release} target="_blank" rel="noreferrer">{copy.releaseNotes}</a>
      </div>
    </section>
  );
}
