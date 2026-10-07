import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";

const activity = [
  { resource: "snapshot", amount: "0.20", decision: "approved" },
  { resource: "analysis", amount: "20.00", decision: "denied" },
] as const;

export default function ActivitySection() {
  const { t } = useLanguage();
  const copy = t.activity;
  return (
    <section className="essay-section activity-section" aria-labelledby="activity-title">
      <div className="activity-composition editorial-inset">
        <div className="section-copy">
          <h2 className="editorial-title" id="activity-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <p className="editorial-body">{copy.body}</p>
        </div>
        <div className="activity-ledger">
          <div className="ledger-scroll" role="region" aria-label={copy.region} tabIndex={0}>
          <table>
            <caption>{copy.caption}</caption>
            <thead><tr>{copy.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
            <tbody>
              {activity.map((entry) => (
                <tr key={entry.resource}>
                  <th scope="row">{t.howItWorks.resources[entry.resource]}<small>Codex · {entry.amount} {t.common.testUsdc}</small></th>
                  <td><span className="ledger-status" data-status={entry.decision}><span aria-hidden="true" />{copy[entry.decision]}</span></td>
                  <td>{copy.notStarted}</td>
                  <td>{copy.notDelivered}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="quiet-note ledger-note">{copy.note}</p>
          <div className="activity-spirit"><Spirit state="notified" floating={false} interactive={false} /></div>
        </div>
      </div>
    </section>
  );
}
