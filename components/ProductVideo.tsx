type ProductVideoProps = {
  src?: string;
  poster?: string;
  caption?: string;
};

// Set src="/videos/control.mp4" when the supplied product video is placed
// in public/videos. Until then, this is a static placeholder with no fake playback.
export default function ProductVideo({ src, poster, caption = "Connect Codex / Product demo" }: ProductVideoProps) {
  return (
    <figure className="product-media">
      {src ? (
        <video className="product-video" src={src} poster={poster} controls playsInline preload="metadata" aria-label="Yosh authority control demonstration">
          Your browser does not support video playback.
        </video>
      ) : (
        <div className="video-placeholder" role="img" aria-label="Placeholder for the forthcoming Yosh product video">
          <svg className="video-play-symbol" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" />
            <path d="M27 23 42 32 27 41Z" />
          </svg>
        </div>
      )}
      <figcaption className="media-caption"><span>{caption}</span><span>{src ? "PRODUCT / CONTROL" : "Recording forthcoming"}</span></figcaption>
    </figure>
  );
}
