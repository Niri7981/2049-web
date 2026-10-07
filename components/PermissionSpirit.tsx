import Spirit from "@/components/Spirit";
import { useLanguage } from "@/components/LanguageProvider";

export default function PermissionSpirit() {
  const { t } = useLanguage();
  return (
    <div className="spirit-position">
      <Spirit />
      <span className="authority-caption">{t.hero.authority}</span>
    </div>
  );
}
