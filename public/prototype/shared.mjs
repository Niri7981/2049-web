export const sourceLinks = {
  repo:'https://github.com/Niri7981/2049',
  install:'https://github.com/Niri7981/2049/blob/main/README.md',
  first:'https://github.com/Niri7981/2049/blob/main/docs/demo/first-mainnet-purchase-20261008.md',
  anthropic:'https://www.anthropic.com/research/economic-index-june-2026-report',
  x402:'https://docs.cdp.coinbase.com/x402/welcome'
};
export function spirit(id='hero',src='assets/design-sheet.png') {
  return `<svg class="spirit" viewBox="854 268 114 148" role="img" aria-label="Yosh mascot">
  <defs><clipPath id="${id}-clip"><rect x="854" y="268" width="114" height="148"/></clipPath><filter id="${id}-matte" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 .2126 .7152 .0722 0 0"/><feComponentTransfer><feFuncA type="linear" slope="8" intercept="-1.6"/></feComponentTransfer><feMorphology operator="dilate" radius="3"/><feMorphology operator="erode" radius="3"/><feComposite in="SourceGraphic" operator="in"/></filter></defs><image href="${src}" width="1536" height="1024" clip-path="url(#${id}-clip)" filter="url(#${id}-matte)"/></svg>`;
}
export function storedLanguage() {try{return localStorage.getItem('yosh-language')==='zh'?'zh':'en';}catch{return 'en';}}
export function saveLanguage(lang){try{localStorage.setItem('yosh-language',lang);}catch{/* local preview still works */}}
export function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
