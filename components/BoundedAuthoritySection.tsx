"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";
import { ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS, amount, evaluateRequest } from "@/lib/authority";

export default function BoundedAuthoritySection() {
  const { t } = useLanguage();
  const copy = t.budget;
  const testUsdc = (cents: number) => `${amount(cents)} ${t.common.testUsdc}`;
  const slider = useRef<HTMLDivElement>(null);
  const [requestedCents, setRequestedCents] = useState(ACTION_LIMIT_CENTS);
  const reducedMotion = useReducedMotion();
  const position = useSpring(ACTION_LIMIT_CENTS, { stiffness: 500, damping: 50, mass: 0.7 });
  const markerLeft = useTransform(position, (cents) => `${(cents / DAILY_LIMIT_CENTS) * 100}%`);
  const { allowed, boundedCents } = evaluateRequest(requestedCents);

  function request(cents: number) {
    const requested = Math.max(0, Math.min(DAILY_LIMIT_CENTS, Math.round(cents)));
    setRequestedCents(requested);
    position.set(evaluateRequest(requested).boundedCents);
  }

  function readPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    request(((event.clientX - bounds.left) / bounds.width) * DAILY_LIMIT_CENTS);
  }

  function beginDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    readPointer(event);
  }

  function keyboardRequest(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 5 : 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight": case "ArrowUp": next = requestedCents + step; break;
      case "ArrowLeft": case "ArrowDown": next = requestedCents - step; break;
      case "PageUp": next = requestedCents + 10; break;
      case "PageDown": next = requestedCents - 10; break;
      case "Home": next = 0; break;
      case "End": next = DAILY_LIMIT_CENTS; break;
      default: return;
    }
    event.preventDefault();
    request(next);
  }

  return (
    <section className="essay-section bounded-section" aria-labelledby="bounded-title">
      <div className="budget-introduction editorial-inset">
        <h2 className="editorial-title" id="bounded-title">{copy.title[0]}<br />{copy.title[1]}</h2>
        <p className="editorial-body">{copy.body}</p>
      </div>
      <p className="budget-context quiet-note editorial-inset">{copy.context}</p>
      <div className="limit-composition editorial-inset" data-denied={!allowed}>
        <div className="limit-endpoints" aria-hidden="true">
          <span>0</span><span>{amount(DAILY_LIMIT_CENTS)}<small>{copy.daily}</small></span>
        </div>
        <div
          ref={slider}
          className="limit-slider"
          role="slider"
          tabIndex={0}
          aria-label={copy.slider}
          aria-valuemin={0}
          aria-valuemax={DAILY_LIMIT_CENTS}
          aria-valuenow={requestedCents}
          aria-valuetext={`${testUsdc(requestedCents)} ${copy.requested}. ${allowed ? copy.sliderWithin : copy.sliderOutside} ${copy.sliderTransaction} ${testUsdc(ACTION_LIMIT_CENTS)}; ${copy.sliderDaily} ${testUsdc(DAILY_LIMIT_CENTS)}.`}
          aria-describedby="limit-status"
          onKeyDown={keyboardRequest}
          onPointerDown={beginDrag}
          onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) readPointer(event); }}
          onPointerUp={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
        >
          <div className="limit-rail" aria-hidden="true">
            <span className="limit-permitted" />
            {Array.from({ length: 81 }, (_, index) => (
              <span className={`limit-tick${index % 8 === 0 ? " limit-tick-major" : ""}`} key={index} style={{ left: `${index * 1.25}%` }} />
            ))}
            <span className="zero-stop" />
            <span className="action-stop"><span>{amount(ACTION_LIMIT_CENTS)}<small>{copy.transaction}</small></span></span>
            <span className="daily-stop" />
          </div>
          <motion.div className="request-marker" aria-hidden="true" style={{ left: reducedMotion ? `${boundedCents}%` : markerLeft }}>
            <span className="request-pointer" />
            <span className="marker-amount">{amount(boundedCents)}</span>
            <span className="marker-agent">Codex</span>
          </motion.div>
        </div>
        <motion.div
          className="waiting-spirit"
          animate={{ rotate: reducedMotion ? 0 : allowed ? (requestedCents / ACTION_LIMIT_CENTS - 0.5) * 1.2 : 0.8 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 25 }}
        >
          <Spirit state="idle" floating={false} interactive={false} />
        </motion.div>
        <div className="limit-status" id="limit-status" role="status" aria-atomic="true">
          <span>{allowed ? t.common.within : copy.denied}</span>
          {!allowed && <span className="attempted-amount">{t.common.request} {amount(requestedCents)}</span>}
        </div>
      </div>
      <p className="accounting-note editorial-inset" id="authority-accounting">{copy.accounting} <a className="text-link" href="#docs">{copy.accountingLink}</a>{copy.accountingEnd}</p>
      <p className="budget-principle editorial-inset">{copy.principle}</p>
    </section>
  );
}
