# Yosh website

The editorial product website for Yosh, built with Next.js, TypeScript, React, CSS, and Motion. One continuous editorial sheet, with no component library.

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

The homepage preserves its approved editorial composition and dark theme. Public copy uses Yosh; internal repository identifiers retain the older project name. Four real chapter anchors—Product, How it works, Docs, and Roadmap—appear in the global navigation and hero index. Smooth scrolling respects reduced-motion preferences.

Existing Hero, How it works, Budget, Product/Members, Control, Activity, Permission layer, and Closing sections remain. Get started, Security, Docs, Roadmap, and FAQ provide concise product guidance. Detailed installation remains in repository documentation; no separate documentation site or public download is claimed.

The semantic theme tokens in `app/globals.css` are the color source of truth. Every section uses those same warm charcoal surfaces, ivory text, restrained signal, and fine rules. Instrument Serif is self-hosted with its SIL Open Font License. Coming Soon is reserved for tiny annotations, with its Apache 2.0 license alongside the font. Explanatory copy and functional data use sans-serif.

The fixed `ScrollRuler` spans the entire document. It stays compact at rest and subtly expands rightward during scrolling. Reading progress drives its line and marker. Reduced motion removes the spring lag and expansion.

## Yosh and interactions

`public/spirit/design-sheet.png` is the unchanged supplied artwork. `Spirit.tsx` selects idle, focused, waiting, curious, notified, and sleeping crops at render time. The existing SVG matte removes only the source backdrop without recoloring the character. All instances share responsive dimensions; sleeping naturally has a lower silhouette.

The approved hero retains its existing subtle motion. Other Yosh instances remain stationary except for small evaluation-driven movements. Reduced-motion preferences are respected.

The authority section illustrates a 1.00 test USDC shared daily limit, a 0.40 grant total, a 0.20 per-transaction limit, and one-hour expiry. Market Snapshot (0.20) is approved with authority reserved; Market Analysis (20.00) is denied. Both are explicitly simulated examples, with no payment started. Activate either resource name to evaluate or replay it. The budget ruler supports dragging and keyboard control: arrows change the request by one cent, Shift + arrows by five, Page Up/Down by ten, and Home/End reach the daily range endpoints. The visible marker stops at the 0.20 test USDC per-transaction boundary; requests beyond it are denied calmly.

## Product video and resources

`ProductVideo` is currently an accessible, static placeholder, with no simulated playback or video requests. When the actual film is supplied, place it at `public/videos/control.mp4` and set `<ProductVideo src="/videos/control.mp4" />` in `ControlSection`. The component also accepts a poster and uses native playback controls without autoplay.

Navigation and closing resources link to the homepage anchors and the product source repository supplied in the verified content pack. `lib/links.ts` holds those URLs. Docs provides a curated gateway, identifies source-install prerequisites, and notes that published repository guides may contain older names and examples.

Product facts come from the supplied verified content pack: Codex is the current named host integration; the purchase path uses Solana Devnet test USDC and x402; simulation is the default; mainnet, wallet import, Phantom signing, standalone distribution, per-purchase exception approval, and RWA are not presented as available. Planned and exploratory work remain separate. Activity rows are labeled illustrative and do not claim live payments or delivered resources.
