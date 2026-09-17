// Exact compiled component metadata; references belong to modules/91854.js
({
  type: le,
  selectors: [["lu-message-container"]],
  viewQuery: function (Se, qe) {
    if (1 & Se && (t.Gf(ye, 7), t.Gf(ae, 7)), 2 & Se) {
      let Rt;
      t.iGM(Rt = t.CRH()) && (qe.wrapper = Rt.first), t.iGM(Rt = t.CRH()) && (qe.wrapperErrors = Rt.first);
    }
  },
  hostVars: 2,
  hostBindings: function (Se, qe) {
    2 & Se && t.Udp("padding-bottom", qe.marginBottom);
  },
  decls: 4,
  vars: 0,
  consts: [[1, "lu-message-container-wrapper"], ["wrapper", ""], ["wrapperErrors", ""]],
  template: function (Se, qe) {
    1 & Se && t._UZ(0, "div", 0, 1)(2, "div", 0, 2);
  },
  styles: ["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%]   .lu-message-container-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;padding-right:var(--lu-base-gutter);white-space:pre-line}"],
  changeDetection: 0
});
