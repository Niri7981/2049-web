"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Spirit from "@/components/Spirit";
import { ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS, GRANT_TOTAL_CENTS, exampleRequests, evaluateRequest, testUsdc } from "@/lib/authority";

type Phase = "ready" | "checking" | "within" | "resolved";
type RequestKey = keyof typeof exampleRequests;

const chapters = [
  { label: "Identity", copy: "Each authenticated connection belongs to a persistent local member. Purchases stay associated with that member when credentials change." },
  { label: "Authority", id: "spend-grant", copy: "A SpendGrant sets total allowance, per-transaction limit, and expiry. Each member also draws from the same shared daily authority." },
  { label: "Decision", copy: "Yosh validates the request and quote, then checks the grant, shared daily authority, pause state, and unresolved payments. Requests outside these boundaries are denied." },
  { label: "Execution", copy: "With Devnet execution explicitly enabled, approved purchases can enter the x402 pipeline. Authority and payment terms are checked again before signing." },
  { label: "Record", copy: "Decision, payment, and delivery are recorded as separate facts." },
];

export default function AuthoritySection() {
  const decision = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inView = useInView(decision, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("ready");
  const [requestKey, setRequestKey] = useState<RequestKey>("snapshot");
  const request = exampleRequests[requestKey];
  const { allowed } = evaluateRequest(request.cents);
  const reachedAuthority = phase === "within" || phase === "resolved";
  const busy = phase === "checking" || phase === "within";

  const evaluate = useCallback((key: RequestKey) => {
    timers.current.forEach(clearTimeout);
    setRequestKey(key);
    if (reducedMotion) {
      setPhase("resolved");
      return;
    }
    setPhase("checking");
    timers.current = [
      setTimeout(() => setPhase("within"), 480),
      setTimeout(() => setPhase("resolved"), 820),
    ];
  }, [reducedMotion]);

  useEffect(() => {
    if (!inView) return;
    const entrance = setTimeout(() => evaluate("snapshot"), reducedMotion ? 0 : 120);
    return () => {
      clearTimeout(entrance);
      timers.current.forEach(clearTimeout);
    };
  }, [inView, evaluate, reducedMotion]);

  return (
    <section className="essay-section authority-section" id="how-it-works" aria-labelledby="authority-title">
      <div className="section-introduction editorial-inset">
        <h2 className="editorial-title" id="authority-title">A request is<br />not authority.</h2>
      </div>
      <div className="authority-diagram editorial-inset" data-phase={phase}>
        <div className="authority-chapters">
          {chapters.map((chapter) => (
            <div className="authority-row" id={chapter.id} key={chapter.label}>
              <h3 className="chapter-word">{chapter.label}</h3>
              <p className="chapter-copy">{chapter.copy}</p>
            </div>
          ))}
        </div>
        <div ref={decision} className="decision-column">
          <p className="quiet-note">Illustrative configuration · simulated<br />No previous spending · payments enabled</p>
          <h3 className="decision-title">Codex requests<br />{request.resource}</h3>
          <dl className="decision-facts">
            <div><dt>Shared daily limit</dt><dd>{testUsdc(DAILY_LIMIT_CENTS)}</dd></div>
            <div><dt>SpendGrant total</dt><dd>{testUsdc(GRANT_TOTAL_CENTS)}</dd></div>
            <div><dt>Per transaction</dt><dd>{testUsdc(ACTION_LIMIT_CENTS)}</dd></div>
            <div><dt>Expiry</dt><dd>One hour</dd></div>
            <div><dt>Quote</dt><dd>{testUsdc(request.cents)}</dd></div>
          </dl>
          <div className="request-choices" aria-label="Illustrative purchase requests">
            {Object.entries(exampleRequests).map(([key, example]) => (
              <button className="request-text" key={key} disabled={busy} aria-pressed={requestKey === key} onClick={() => evaluate(key as RequestKey)}>{example.resource}</button>
            ))}
          </div>
          <div className="execution-diagram" data-denied={!allowed}>
            <div className="evaluation-path" aria-hidden="true"><motion.span className="evaluation-trace" animate={{ scaleY: reachedAuthority ? 1 : phase === "checking" ? 0.45 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.24 }} /></div>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result" data-reached={reachedAuthority}>{allowed ? "within authority" : "outside authority"}</span>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result decision-result" data-reached={phase === "resolved"}>{allowed ? "approved" : "denied"}</span>
            <p className="reservation-result">{phase === "resolved" ? allowed ? "authority reserved" : "no authority reserved" : "Evaluating authority…"}</p>
            <p className="simulation-note">In simulation, payment does not start.</p>
            <motion.div className="focused-spirit" animate={{ rotate: phase === "checking" ? -1 : 0, y: phase === "checking" ? 2 : 0 }} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 25 }}><Spirit state="focused" floating={false} interactive={false} /></motion.div>
            <span className="visually-hidden" role="status">{phase === "resolved" ? `${request.resource}, ${testUsdc(request.cents)}. ${allowed ? "Approved; authority reserved." : "Denied; outside per-transaction authority."} Simulated mode. No payment started.` : busy ? "Evaluating request." : ""}</span>
          </div>
        </div>
      </div>
      <p className="outcome-principle editorial-inset">Approved does not mean paid.<br />Paid does not mean delivered.</p>
    </section>
  );
}
