import { sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

const guideHrefs = ["#get-started", sourceLinks.mcp, "#spend-grant", sourceLinks.mcp, "#security", sourceLinks.architecture, sourceLinks.github];

export default function DocsSection() {
  const { t } = useLanguage();
  const copy = t.docs;
  return (
    <section className="essay-section docs-section" id="docs" aria-labelledby="docs-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="docs-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
          <p className="quiet-note docs-requirements">{copy.requirements[0]}<br />{copy.requirements[1]}<br />{copy.requirements[2]}</p>
          <a className="text-link docs-installation" href={sourceLinks.download}>{copy.installation}</a>
        </div>
        <ul className="docs-links">
          {copy.guides.map((guide, index) => <li key={index}><a href={guideHrefs[index]} target={guideHrefs[index].startsWith("https:") ? "_blank" : undefined} rel={guideHrefs[index].startsWith("https:") ? "noreferrer" : undefined}><span>{guide.title}</span><span className="link-direction" aria-hidden="true">{guideHrefs[index].startsWith("https:") ? "↗" : "→"}</span><small>{guide.description}</small></a></li>)}
        </ul>
      </div>
      <p className="quiet-note documentation-note editorial-inset">{copy.note}</p>
    </section>
  );
}
