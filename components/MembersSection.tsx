import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";

export default function MembersSection() {
  const { t } = useLanguage();
  const copy = t.product;
  return (
    <section className="essay-section members-section" id="product" aria-labelledby="members-title">
      <div className="editorial-pair editorial-inset product-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="members-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="member-principle">{copy.principle[0]}<br />{copy.principle[1]}</p>
          <p className="editorial-body">{copy.body}</p>
          <p className="current-state quiet-note">{copy.state[0]}<br />{copy.state[1]}<br />{copy.state[2]}</p>
        </div>
        <div className="members-list product-controls">
          <dl>
            {copy.controls.map((control, index) => (
              <div className="product-control" key={index}>
                <dt>{control.title}</dt><dd>{control.copy}</dd>
                {index === 0 && <div className="product-spirit"><Spirit state="focused" floating={false} interactive={false} /></div>}
              </div>
            ))}
          </dl>
          <p className="quiet-note">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
