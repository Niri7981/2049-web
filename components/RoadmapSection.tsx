const planned = [
  "Verifiable purchase confirmation in the agent conversation",
  "Durable, bounded delivery retries",
  "A third-party mainnet purchase path",
  "Self-contained app distribution",
];
const exploring = [
  "Broader economic actions",
  "Richer permission policies",
  "Additional agent integrations",
  "Tokenized assets and RWA permissions",
];

export default function RoadmapSection() {
  return (
    <section className="essay-section roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy">
          <h2 className="editorial-title" id="roadmap-title">Beyond<br />spending.</h2>
          <p className="editorial-body">Today, Yosh governs bounded spending on registered demo resources. We are exploring how identity, authority, and execution could apply to broader economic actions.</p>
          <p className="roadmap-boundary">RWA support is not available today.</p>
        </div>
        <div className="roadmap-groups">
          <div><h3 className="quiet-label">Planned</h3><ul>{planned.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h3 className="quiet-label">Exploring</h3><ul>{exploring.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
