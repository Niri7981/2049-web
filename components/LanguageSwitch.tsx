import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitch() {
  const { locale, t, setLocale } = useLanguage();
  return (
    <span className="language-switch" role="group" aria-label={t.nav.language}>
      <button type="button" lang="en" aria-label="English" aria-pressed={locale === "en"} data-active={locale === "en"} onClick={() => setLocale("en")}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="zh-CN" aria-label="简体中文" aria-pressed={locale === "zh"} data-active={locale === "zh"} onClick={() => setLocale("zh")}>中文</button>
    </span>
  );
}
