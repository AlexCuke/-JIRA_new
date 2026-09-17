// Exact compiled component metadata; references belong to modules/32643.js
({
  type: L,
  selectors: [["", "lu-text", ""]],
  contentQueries: function (v, f, E) {
    if (1 & v && (e.Suo(E, N, 5), e.Suo(E, A, 5)), 2 & v) {
      let h;
      e.iGM(h = e.CRH()) && (f.leftContent = h.first), e.iGM(h = e.CRH()) && (f.rightContent = h.first);
    }
  },
  hostVars: 3,
  hostBindings: function (v, f) {
    2 & v && e.uIk("data-lu-text-size", f.size)("data-lu-text-color", f.color)("data-lu-text-align", f.align);
  },
  inputs: {
    size: "size",
    color: "color",
    align: "align"
  },
  attrs: a,
  ngContentSelectors: b,
  decls: 4,
  vars: 2,
  consts: [["class", "lu-text-left", 4, "ngIf"], [1, "lu-text"], ["class", "lu-text-right", 4, "ngIf"], [1, "lu-text-left"], [1, "lu-text-right"]],
  template: function (v, f) {
    1 & v && (e.F$t(M), e.YNc(0, m, 2, 0, "span", 0), e.TgZ(1, "span", 1), e.Hsn(2), e.qZA(), e.YNc(3, d, 2, 0, "span", 2)), 2 & v && (e.Q6J("ngIf", f.leftContent), e.xp6(3), e.Q6J("ngIf", f.rightContent));
  },
  dependencies: [t.O5],
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:flex;align-items:flex-start}[data-lu-text-size=small][_nghost-%COMP%]{--lu-font-size: 13px;--lu-line-height: 20px}[data-lu-text-color=muted][_nghost-%COMP%]{--lu-text-color: var(--lu-black-54)}[data-lu-text-color=red][_nghost-%COMP%]{--lu-text-color: var(--lu-red-120)}[data-lu-text-align=left][_nghost-%COMP%]   .lu-text[_ngcontent-%COMP%]{text-align:left}[data-lu-text-align=center][_nghost-%COMP%]   .lu-text[_ngcontent-%COMP%]{text-align:center}[data-lu-text-align=right][_nghost-%COMP%]   .lu-text[_ngcontent-%COMP%]{text-align:right}h1[_nghost-%COMP%]{border:none;--lu-font-size: 21px;--lu-line-height: 28px;--lu-font-weight: 600}h2[_nghost-%COMP%]{border:none;--lu-font-size: 20px;--lu-line-height: 28px;--lu-font-weight: 600}h3[_nghost-%COMP%]{--lu-font-size: 17px;--lu-line-height: 24px;--lu-font-weight: 600}h4[_nghost-%COMP%], h5[_nghost-%COMP%], h6[_nghost-%COMP%]{--lu-font-size: 15px;--lu-line-height: 24px;--lu-font-weight: 600}span[_nghost-%COMP%]{display:inline-flex}span[_nghost-%COMP%]   .lu-text[_ngcontent-%COMP%]{width:auto}[_nghost-%COMP%]   .lu-text-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .lu-text-right[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-shrink:0;min-height:var(--lu-line-height);align-items:center}[_nghost-%COMP%]   .lu-text-left[_ngcontent-%COMP%]    >lu-svg-icon, [_nghost-%COMP%]   .lu-text-right[_ngcontent-%COMP%]    >lu-svg-icon{display:flex;min-height:var(--lu-line-height)}.lu-text[_ngcontent-%COMP%]{width:100%}.lu-text[_ngcontent-%COMP%]:empty{display:none}.lu-text-left[_ngcontent-%COMP%]:not(:empty){width:var(--lu-text-left-width)}.lu-text-left[_ngcontent-%COMP%]:not(:empty) ~ .lu-text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.lu-text-right[_ngcontent-%COMP%]:not(:empty){width:var(--lu-text-right-width);margin-left:var(--lu-base-gutter)}"],
  changeDetection: 0
});
