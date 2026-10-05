import { sourceLinks } from "@/lib/links";

const questions = [
  { question: "What is Yosh?", answer: "An economic permission layer for agents, currently implemented as a local macOS system for bounded purchases of registered demo resources." },
  { question: "Is Yosh a wallet?", answer: "It includes a dedicated local spending wallet. Its central role is controlling authority to use that wallet through identity, grants, limits, pause state, and purchase records." },
  { id: "faq-security", question: "Does the agent receive my private key?", answer: "No. The wallet secret is stored in macOS Keychain and used by the local backend signer. MCP does not expose it or provide key-export tools. This does not protect against every compromised process on the same machine." },
  { question: "Can I connect my existing wallet?", answer: "Wallet import and Phantom signing are not implemented. Yosh creates or reuses its dedicated product wallet." },
  { question: "Is Yosh tied to x402?", answer: "Current purchases execute through x402. Authority is modeled separately, but alternative payment rails are not implemented." },
  { question: "Can multiple members share one budget?", answer: "Yes. Local members share daily authority while keeping separate credentials, grants, and purchase ownership. Codex is the current supported named host integration." },
  { question: "Does each member have its own authority?", answer: "Each member can have its own SpendGrant: total allowance, per-transaction limit, and expiry. It remains subject to shared daily authority. The grant total is cumulative over its lifetime; a daily reset does not reset it." },
  { question: "What happens when a request exceeds authority?", answer: "The current grant-based path records a denial without starting payment. A per-purchase exception approval flow is not implemented." },
  { question: "Can authority be paused or changed?", answer: "Pause new payments globally, change the daily limit, or replace or revoke a member’s grant. Grant changes rotate connection credentials and require MCP to reconnect. Pause does not reverse submitted transactions." },
  { question: "Does Approved mean complete?", answer: "No. Approval, payment confirmation, and delivery are separate facts. Default simulated requests can be approved without any payment." },
  { question: "What gets recorded?", answer: "Member ownership, request and resource information, amount, execution mode, decision and reason, payment state, delivery state, and available receipt or transaction information." },
  { question: "Does closing or locking the app pause payments?", answer: "No. Closing the window leaves the backend running, and the native PIN lock protects UI access. Use Payments to pause new payments. Normal quit stops the service safely." },
  { question: "Which network is supported?", answer: "The product purchase path uses Solana Devnet test USDC. Simulation is the default; live Devnet execution requires explicit configuration and test-wallet funding. Mainnet is disabled." },
  { question: "Is RWA supported?", answer: "No. Tokenized assets and broader investment permissions are exploratory directions, not current capabilities." },
  { question: "Where can I read the source?", answer: <>Visit the <a className="text-link" href={sourceLinks.github} target="_blank" rel="noreferrer">Yosh source repository</a> and begin with the README and MCP guide. Some published examples still describe older versions.</> },
  { question: "What if payment status is unknown?", answer: "The original record and reservation remain while the original payment is reconciled. Recovery does not create a replacement payment, and it does not guarantee delivery or refunds from every external API." },
  { question: "What happens after restarting?", answer: "Wallet, settings, members, and records remain. Active grants and connection credentials are revoked; reconnect and create new authority for new requests. Original pending payments remain eligible for reconciliation." },
];

export default function FAQSection() {
  return (
    <section className="essay-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="editorial-pair editorial-inset gateway-composition">
        <div className="section-copy"><h2 className="editorial-title" id="faq-title">A few<br />clear answers.</h2><p className="editorial-body">Current capabilities, practical limits, and the difference between permission and payment.</p></div>
        <div className="faq-list">{questions.map((entry) => <details id={entry.id} key={entry.question}><summary>{entry.question}</summary><p>{entry.answer}</p></details>)}</div>
      </div>
    </section>
  );
}
