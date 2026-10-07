import en from "./en";
import zh from "./zh";

export type Locale = "en" | "zh";
export type SiteContent = typeof en;
export const content: Record<Locale, SiteContent> = { en, zh };
