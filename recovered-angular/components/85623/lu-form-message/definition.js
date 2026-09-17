// Exact compiled component metadata; references belong to modules/85623.js
({
  type: A,
  selectors: [["lu-form-message"]],
  hostVars: 2,
  hostBindings: function (I, O) {
    2 & I && (t.uIk("data-lu-message-type", O.type), t.d8E("@showHide", O.animation));
  },
  inputs: {
    type: "type"
  },
  ngContentSelectors: d,
  decls: 3,
  vars: 0,
  consts: [[1, "lu-form-message"]],
  template: function (I, O) {
    1 & I && (t.F$t(m), t.Hsn(0), t.TgZ(1, "span", 0), t.Hsn(2, 1), t.qZA());
  },
  styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:flex;align-items:flex-start;font-size:13px;line-height:20px}[_nghost-%COMP%]   .lu-form-message[_ngcontent-%COMP%]{margin-top:2px;color:var(--lu-form-message-color)}[_nghost-%COMP%]     lu-svg-icon{margin-right:var(--lu-base-gutter)}[data-lu-message-type=error][_nghost-%COMP%], [data-lu-message-type=warning][_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}[data-lu-message-type=error][_nghost-%COMP%]   .lu-form-message[_ngcontent-%COMP%], [data-lu-message-type=warning][_nghost-%COMP%]   .lu-form-message[_ngcontent-%COMP%]{margin-top:0}[data-lu-message-type=error][_nghost-%COMP%]{--lu-form-message-color: var(--lu-red-120)}[data-lu-message-type=warning][_nghost-%COMP%]{--lu-form-message-color: var(--lu-black-80)}"],
  data: {
    animation: [(0, e.X$)("showHide", [(0, e.eR)(":enter", [(0, e.oB)({
      opacity: 0,
      height: 0
    }), (0, e.jt)("0.1s linear", (0, e.oB)({
      opacity: "*",
      height: "*"
    }))]), (0, e.eR)(":leave", [(0, e.oB)({
      opacity: "*",
      height: "*"
    }), (0, e.jt)("0.1s linear", (0, e.oB)({
      opacity: 0,
      height: 0
    }))])])]
  },
  changeDetection: 0
});
