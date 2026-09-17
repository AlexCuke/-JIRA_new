// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-scroll-container"]],
  viewQuery: function (ve, yt) {
    if (1 & ve && t.Gf(ws, 7), 2 & ve) {
      let An;
      t.iGM(An = t.CRH()) && (yt.scrollElementRef = An.first);
    }
  },
  inputs: {
    darkTheme: "darkTheme"
  },
  outputs: {
    scrollChangeY: "scrollChangeY",
    scrollChangeX: "scrollChangeX",
    scrollEndY: "scrollEndY",
    scrollEndX: "scrollEndX"
  },
  ngContentSelectors: Us,
  decls: 3,
  vars: 2,
  consts: [[1, "dp-scroll"], ["scrollElement", ""]],
  template: function (ve, yt) {
    1 & ve && (t.F$t(), t.TgZ(0, "div", 0, 1), t.Hsn(2), t.qZA()), 2 & ve && t.ekj("-is-dark-theme", yt.darkTheme);
  },
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;--scrollbar-track: var(--lu-white);--scrollbar-thumb-border: var(--lu-white);--scrollbar-thumb-bgc: rgba(var(--lu-black-rgb-100), .16);--scrollbar-thumb-bgc-hover: rgba(var(--lu-black-rgb-100), .24);--scrollbar-thumb-bgc-active: rgba(var(--lu-black-rgb-100), .32)}.dp-scroll[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:auto;scroll-behavior:smooth}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border:4px solid var(--scrollbar-thumb-border);border-radius:16px;background-color:var(--scrollbar-thumb-bgc)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-bgc-hover)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--scrollbar-thumb-bgc-active)}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]{height:100%}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--lu-black-80)}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border:4px solid var(--lu-black-80);border-radius:8px;background-color:#ffffff26}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#ffffff1a}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:#ffffff1a}"],
  changeDetection: 0
});
