import { useLanguage } from "@/components/LanguageProvider";

export default function RoadmapSection() {
  const { t } = useLanguage();
  const copy = t.roadmap;
  return (
    <section className="essay-section roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="roadmap-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
          <p className="roadmap-boundary">{copy.boundary}</p>
        </div>
        <div className="roadmap-groups">
          <div><h3 className="quiet-label">{copy.planned}</h3><ul>{copy.plannedItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h3 className="quiet-label">{copy.exploring}</h3><ul>{copy.exploringItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
