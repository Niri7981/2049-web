# 2049 web

An eight-section editorial homepage for 2049, built with Next.js, TypeScript, React, CSS, and Motion. One continuous editorial sheet, with no component library.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run build
npm run typecheck
npm run lint
```

For production locally, run `npm run build` followed by `npm start`.

## Composition and theme

The homepage continues through Economic permission, Identity / Authority / Execution, Budget, Members, Control, Activity, Permission layer, and Closing. The supplied light screenshots guide composition and content only. The approved dark theme remains unchanged.

The semantic theme tokens in `app/globals.css` are the color source of truth. Every section uses those same warm charcoal surfaces, ivory text, restrained signal, and fine rules. Instrument Serif is self-hosted with its SIL Open Font License. Coming Soon is reserved for tiny annotations, with its Apache 2.0 license alongside the font. Explanatory copy and functional data use sans-serif.

The fixed `ScrollRuler` spans the entire document. It stays compact at rest and subtly expands rightward during scrolling. Reading progress drives its line and marker. Reduced motion removes the spring lag and expansion.

## Yosh and interactions

`public/spirit/design-sheet.png` is the unchanged supplied artwork. `Spirit.tsx` selects idle, focused, waiting, curious, notified, and sleeping crops at render time. The existing SVG matte removes only the source backdrop without recoloring the character. All instances share responsive dimensions; sleeping naturally has a lower silhouette.

The approved hero retains its existing subtle motion. Other Yosh instances remain stationary except for small evaluation-driven movements. Reduced-motion preferences are respected.

The authority section evaluates Codex’s $0.20 request on entry. Activate the request amount to replay it. The budget ruler supports dragging and keyboard control: arrows change the request by one cent, Shift + arrows by five, Page Up/Down by ten, and Home/End reach the daily range endpoints. The visible marker stops at the $0.20 action boundary; requests beyond it are denied calmly.

## Product video and resources

`ProductVideo` is currently an accessible, static placeholder, with no simulated playback or video requests. When the actual film is supplied, place it at `public/videos/control.mp4` and set `<ProductVideo src="/videos/control.mp4" />` in `ControlSection`. The component also accepts a poster and uses native playback controls without autoplay.

Closing links include the local 2049 introduction and the repository. Docs and Download remain explicitly unavailable until their actual destinations are supplied.
