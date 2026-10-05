"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Spirit from "@/components/Spirit";
import { ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS, dollars, evaluateRequest } from "@/lib/authority";

type Phase = "ready" | "checking" | "within" | "allowed";

export default function AuthoritySection() {
  const decision = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  // Observe the decision itself; the complete chapter can be taller than a mobile viewport.
  const inView = useInView(decision, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("ready");
  const allowed = evaluateRequest(ACTION_LIMIT_CENTS).allowed;

  const evaluate = useCallback(() => {
    timers.current.forEach(clearTimeout);
    if (reducedMotion) {
      setPhase("allowed");
      return;
    }
    setPhase("checking");
    timers.current = [
      setTimeout(() => setPhase("within"), 480),
      setTimeout(() => setPhase("allowed"), 820),
    ];
  }, [reducedMotion]);

  useEffect(() => {
    if (!inView) return;
    const entrance = setTimeout(evaluate, reducedMotion ? 0 : 120);
    return () => {
      clearTimeout(entrance);
      timers.current.forEach(clearTimeout);
    };
  }, [inView, evaluate, reducedMotion]);

  const reachedAuthority = phase === "within" || phase === "allowed";

  return (
    <section className="essay-section authority-section" aria-labelledby="authority-title">
      <h2 id="authority-title" className="visually-hidden">Authority</h2>
      <div className="authority-diagram editorial-inset" data-phase={phase}>
        <div className="authority-chapters">
          <div className="authority-row">
            <h3 className="chapter-word">Identity</h3>
            <p className="chapter-copy"><span>Know which agent is asking.</span>Every economic action begins with an identity, so you always know who is asking.</p>
          </div>
          <div className="authority-row">
            <h3 className="chapter-word">Authority</h3>
            <p className="chapter-copy"><span>Define what it may do.</span>Give each agent a SpendGrant with a per-action limit and a daily budget.</p>
          </div>
          <div className="authority-row">
            <h3 className="chapter-word">Execution</h3>
            <p className="chapter-copy"><span>Let the request cross the boundary.</span>We check the agent’s authority before a request ever reaches your wallet.</p>
          </div>
        </div>
        <div ref={decision} className="decision-column">
          <h3 className="decision-title">Codex requests {dollars(ACTION_LIMIT_CENTS)}</h3>
          <dl className="decision-facts">
            <div><dt>Identity</dt><dd>Codex</dd></div>
            <div><dt>SpendGrant</dt><dd>{dollars(ACTION_LIMIT_CENTS)} max / action</dd></div>
            <div><dt>Daily authority</dt><dd>{dollars(DAILY_LIMIT_CENTS)}</dd></div>
            <div><dt>Request</dt><dd><button
                className="request-text"
                onClick={evaluate}
                disabled={phase === "checking" || phase === "within"}
                aria-label="Evaluate a 20 cent request from Codex; activate again to replay"
              >{dollars(ACTION_LIMIT_CENTS)}</button></dd></div>
          </dl>
          <div className="execution-diagram">
            <div className="evaluation-path" aria-hidden="true">
              <motion.span
                className="evaluation-trace"
                animate={{ scaleY: reachedAuthority ? 1 : phase === "checking" ? 0.45 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.24 }}
              />
            </div>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result" data-reached={reachedAuthority}>within authority</span>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result" data-reached={phase === "allowed"}>{allowed ? "allowed" : "denied"}</span>
            <motion.div
              className="focused-spirit"
              animate={{ rotate: phase === "checking" ? -1 : 0, y: phase === "checking" ? 2 : 0 }}
              transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 25 }}
            >
              <Spirit state="focused" floating={false} interactive={false} />
            </motion.div>
            <span className="visually-hidden" role="status">
              {phase === "allowed" ? "Codex’s 20 cent request is within its daily and per-action authority. Allowed." : phase === "checking" ? "Evaluating request." : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
