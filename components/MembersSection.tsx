import Spirit from "@/components/Spirit";

const agents = [
  { name: "Codex", limit: "$0.20", state: "focused" },
  { name: "Grok", limit: "$0.10", state: "curious" },
  { name: "Claude", limit: "$0.30", state: "sleeping" },
] as const;

export default function MembersSection() {
  return (
    <section className="essay-section members-section" aria-labelledby="members-title">
      <div className="editorial-pair editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="members-title">One boundary,<br />many agents.</h2>
          <p className="editorial-body">A shared daily budget can govern multiple agents. Each agent keeps its own identity, SpendGrant and per-action limit. They share the same economic boundary without sharing the same authority.</p>
        </div>
        <div className="members-list">
          <ul>
            {agents.map((agent) => (
              <li className="member-row" key={agent.name}>
                <div className="member-spirit"><Spirit state={agent.state} floating={false} interactive={false} /></div>
                <div><h3>{agent.name}</h3><p>{agent.limit} / action</p></div>
              </li>
            ))}
          </ul>
          <div className="shared-authority"><span>Shared daily authority</span><strong>$1.00</strong></div>
        </div>
      </div>
    </section>
  );
}
