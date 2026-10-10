import { useLanguage } from "@/components/LanguageProvider";

export default function ProductVideo() {
  const { t } = useLanguage();
  const copy = t.control;
  return (
    <figure className="product-media">
      <video className="product-video" src="/videos/yosh-demo-v2-synced.mp4" poster="/videos/yosh-demo-v2-poster.jpg" controls playsInline preload="metadata" aria-label={copy.videoAria}>
        {copy.videoUnsupported}
      </video>
      <figcaption className="media-caption"><span>{copy.videoCaption}</span><span>{copy.videoType}</span></figcaption>
    </figure>
  );
}
