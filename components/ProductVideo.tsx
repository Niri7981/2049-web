import { useLanguage } from "@/components/LanguageProvider";

type ProductVideoProps = {
  src?: string;
  poster?: string;
  caption?: string;
};

// Set src="/videos/control.mp4" when the supplied product video is placed
// in public/videos. Until then, this is a static placeholder with no fake playback.
export default function ProductVideo({ src, poster, caption }: ProductVideoProps) {
  const { t } = useLanguage();
  const copy = t.control;
  return (
    <figure className="product-media">
      {src ? (
        <video className="product-video" src={src} poster={poster} controls playsInline preload="metadata" aria-label={copy.videoAria}>
          {copy.videoUnsupported}
        </video>
      ) : (
        <div className="video-placeholder" role="img" aria-label={copy.videoPlaceholder}>
          <svg className="video-play-symbol" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" />
            <path d="M27 23 42 32 27 41Z" />
          </svg>
        </div>
      )}
      <figcaption className="media-caption"><span>{caption ?? copy.videoCaption}</span><span>{src ? copy.videoType : copy.videoForthcoming}</span></figcaption>
    </figure>
  );
}
