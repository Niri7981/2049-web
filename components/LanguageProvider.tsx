"use client";

import { createContext, useContext, useLayoutEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { content, type Locale, type SiteContent } from "@/content";

const storageKey = "yosh-language";
const changeEvent = "yosh-language-change";
let fallbackLocale: Locale = "en";

function getLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "en" || saved === "zh") return saved;
  } catch { /* Storage can be disabled; keep the language switch usable. */ }
  return fallbackLocale;
}

function subscribe(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

type LanguageContextValue = { locale: Locale; t: SiteContent; setLocale: (locale: Locale) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, page = "home" }: { children: ReactNode; page?: "home" | "faq" }) {
  const locale = useSyncExternalStore(subscribe, getLocale, () => "en" as Locale);
  const position = useRef<{ section: Element | null; top: number; scrollY: number } | null>(null);

  useLayoutEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = page === "faq" ? content[locale].meta.faqTitle : content[locale].meta.title;
    if (!position.current) return;
    const { section, top, scrollY } = position.current;
    position.current = null;
    const delta = section ? section.getBoundingClientRect().top - top : 0;
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, scrollY + delta);
    document.documentElement.style.scrollBehavior = previous;
  }, [locale, page]);

  function setLocale(next: Locale) {
    if (next === locale) return;
    const sections = [...document.querySelectorAll("main section, main footer")];
    const section = sections.findLast((item) => item.getBoundingClientRect().top <= window.innerHeight / 2) ?? sections[0] ?? null;
    position.current = { section, top: section?.getBoundingClientRect().top ?? 0, scrollY: window.scrollY };
    fallbackLocale = next;
    try { window.localStorage.setItem(storageKey, next); } catch { /* In-memory fallback. */ }
    window.dispatchEvent(new Event(changeEvent));
  }

  return <LanguageContext.Provider value={{ locale, t: content[locale], setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
