import { useId } from "react";

export default function BrandGhost() {
  const matteId = `${useId()}-brand-matte`;

  return (
    <svg className="mark-ghost" viewBox="112 106 278 308" aria-hidden="true" focusable="false">
      <defs>
        {/* Reuse the supplied logo; remove its dark backdrop at render time. */}
        <filter id={matteId} colorInterpolationFilters="sRGB">
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  .2126 .7152 .0722 0 0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="8" intercept="-1.6" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <image href="/icon.png" width="512" height="512" filter={`url(#${matteId})`} />
    </svg>
  );
}
