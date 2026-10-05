import Spirit from "@/components/Spirit";

const activity = [
  { resource: "Market Snapshot", amount: "0.20", decision: "Approved" },
  { resource: "Market Analysis", amount: "20.00", decision: "Denied" },
] as const;

export default function ActivitySection() {
  return (
    <section className="essay-section activity-section" aria-labelledby="activity-title">
      <div className="activity-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="activity-title">Every action<br />leaves a trace.</h2>
          <p className="editorial-body">Yosh records who requested, the resource, amount, decision, execution mode, payment state, delivery state, and available transaction information.</p>
        </div>
        <div className="activity-ledger">
          <div className="ledger-scroll" role="region" aria-label="Illustrative purchase records" tabIndex={0}>
          <table>
            <caption>Illustrative records · simulated · test USDC</caption>
            <thead><tr><th scope="col">Request</th><th scope="col">Decision</th><th scope="col">Payment</th><th scope="col">Delivery</th></tr></thead>
            <tbody>
              {activity.map((entry) => (
                <tr key={entry.resource}>
                  <th scope="row">{entry.resource}<small>Codex · {entry.amount} test USDC</small></th>
                  <td><span className="ledger-status" data-status={entry.decision.toLowerCase()}><span aria-hidden="true" />{entry.decision}</span></td>
                  <td>Not started</td>
                  <td>Not delivered</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="quiet-note ledger-note">No transaction in these examples: simulation does not start payment.</p>
          <div className="activity-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
