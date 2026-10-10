import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { sourceLinks } from "@/lib/links";

export default function DirectDownloadBar() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(sourceLinks.download);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="direct-download">
      <span className="direct-download-label">{t.hero.directDownloadLabel}</span>
      <div className="direct-download-row">
        <a className="direct-download-url" href={sourceLinks.download} title={sourceLinks.download} aria-label={t.hero.directDownloadLink}>
          {sourceLinks.download}
        </a>
        <button className="direct-download-copy" type="button" onClick={copyLink} aria-label={copyState === "copied" ? t.hero.linkCopied : copyState === "failed" ? t.hero.copyFailed : t.hero.copyDownloadLink} title={copyState === "copied" ? t.hero.linkCopied : copyState === "failed" ? t.hero.copyFailed : t.hero.copyDownloadLink}>
          {copyState === "copied" ? <span aria-hidden="true">✓</span> : copyState === "failed" ? <span aria-hidden="true">!</span> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="8" y="7" width="11" height="12" /><path d="M16 7V4H5v12h3" /></svg>}
        </button>
      </div>
      <span className="visually-hidden" role="status">{copyState === "copied" ? t.hero.linkCopied : copyState === "failed" ? t.hero.copyFailed : ""}</span>
    </div>
  );
}
