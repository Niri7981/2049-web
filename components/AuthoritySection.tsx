"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";
import { ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS, GRANT_TOTAL_CENTS, exampleRequests, evaluateRequest, amount } from "@/lib/authority";

type Phase = "ready" | "checking" | "within" | "resolved";
type RequestKey = keyof typeof exampleRequests;

export default function AuthoritySection() {
  const { t } = useLanguage();
  const copy = t.howItWorks;
  const testUsdc = (cents: number) => `${amount(cents)} ${t.common.testUsdc}`;
  const decision = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inView = useInView(decision, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("ready");
  const [requestKey, setRequestKey] = useState<RequestKey>("snapshot");
  const request = exampleRequests[requestKey];
  const resource = copy.resources[requestKey];
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
    <section className="essay-section authority-section" id="policy-check" aria-labelledby="authority-title">
      <div className="section-introduction editorial-inset">
        <h2 className="editorial-title" id="authority-title">{copy.title[0]}<br />{copy.title[1]}</h2>
      </div>
      <div className="authority-diagram editorial-inset" data-phase={phase}>
        <div className="authority-chapters">
          {copy.chapters.map((chapter, index) => (
            <div className="authority-row" id={index === 1 ? "spend-grant" : undefined} key={index}>
              <h3 className="chapter-word">{chapter.title}</h3>
              <p className="chapter-copy">{chapter.copy}</p>
            </div>
          ))}
        </div>
        <div ref={decision} className="decision-column">
          <p className="quiet-note">{copy.configuration[0]}<br />{copy.configuration[1]}</p>
          <h3 className="decision-title">Codex {copy.requests}<br />{resource}</h3>
          <dl className="decision-facts">
            <div><dt>{copy.facts.daily}</dt><dd>{testUsdc(DAILY_LIMIT_CENTS)}</dd></div>
            <div><dt>{copy.facts.grant}</dt><dd>{testUsdc(GRANT_TOTAL_CENTS)}</dd></div>
            <div><dt>{copy.facts.transaction}</dt><dd>{testUsdc(ACTION_LIMIT_CENTS)}</dd></div>
            <div><dt>{copy.facts.expiry}</dt><dd>{copy.facts.oneHour}</dd></div>
            <div><dt>{copy.facts.quote}</dt><dd>{testUsdc(request.cents)}</dd></div>
          </dl>
          <div className="request-choices" aria-label={copy.requestChoices}>
            {Object.keys(exampleRequests).map((key) => (
              <button className="request-text" key={key} disabled={busy} aria-pressed={requestKey === key} onClick={() => evaluate(key as RequestKey)}>{copy.resources[key as RequestKey]}</button>
            ))}
          </div>
          <div className="execution-diagram" data-denied={!allowed}>
            <div className="evaluation-path" aria-hidden="true"><motion.span className="evaluation-trace" animate={{ scaleY: reachedAuthority ? 1 : phase === "checking" ? 0.45 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.24 }} /></div>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result" data-reached={reachedAuthority}>{allowed ? t.common.within : t.common.outside}</span>
            <span className="sequence-arrow" aria-hidden="true">↓</span>
            <span className="sequence-result decision-result" data-reached={phase === "resolved"}>{allowed ? t.common.approved : t.common.denied}</span>
            <p className="reservation-result">{phase === "resolved" ? allowed ? copy.reserved : copy.notReserved : copy.evaluating}</p>
            <p className="simulation-note">{copy.simulation}</p>
            <motion.div className="focused-spirit" animate={{ rotate: phase === "checking" ? -1 : 0, y: phase === "checking" ? 2 : 0 }} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 25 }}><Spirit state="focused" floating={false} interactive={false} /></motion.div>
            <span className="visually-hidden" role="status">{phase === "resolved" ? `${resource}, ${testUsdc(request.cents)}. ${allowed ? copy.announcedApproved : copy.announcedDenied} ${copy.announcedSimulation}` : busy ? copy.announcedEvaluating : ""}</span>
          </div>
        </div>
      </div>
      <p className="outcome-principle editorial-inset">{copy.principle[0]}<br />{copy.principle[1]}</p>
    </section>
  );
}
