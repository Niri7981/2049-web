import Spirit from "@/components/Spirit";

const activity = [
  { service: "OpenAI", agent: "Codex", amount: "$0.20", status: "Paid" },
  { service: "Vercel", agent: "Grok", amount: "$0.10", status: "Denied" },
  { service: "Notion", agent: "Claude", amount: "$0.05", status: "Complete" },
] as const;

export default function ActivitySection() {
  return (
    <section className="essay-section activity-section" aria-labelledby="activity-title">
      <div className="activity-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="activity-title">Every action<br />leaves a trace.</h2>
          <p className="editorial-body">2049 records what the agent asked for, what authority was checked, what decision was made, and what happened next.</p>
        </div>
        <div className="activity-ledger">
          <table>
            <caption>Latest activity</caption>
            <thead className="visually-hidden"><tr><th scope="col">Service</th><th scope="col">Agent</th><th scope="col">Amount</th><th scope="col">Decision</th></tr></thead>
            <tbody>
              {activity.map((entry) => (
                <tr key={entry.service}>
                  <th scope="row">{entry.service}</th>
                  <td>{entry.agent}</td>
                  <td className="ledger-amount">{entry.amount}</td>
                  <td><span className="ledger-status" data-status={entry.status.toLowerCase()}><span aria-hidden="true" />{entry.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="activity-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
