// Exact compiled component metadata; references belong to modules/52470.js
({
  type: C,
  selectors: [["lu-form-field"]],
  contentQueries: function (E, h, x) {
    if (1 & E && e.Suo(x, M.l, 5), 2 & E) {
      let u;
      e.iGM(u = e.CRH()) && (h.messages = u);
    }
  },
  hostVars: 8,
  hostBindings: function (E, h) {
    2 & E && e.ekj("-is-horizontal", "horizontal" === h.orientation)("-is-error", "error" === h.state)("-is-warning", "warning" === h.state)("-label-right-align", "right" === h.labelAlign);
  },
  inputs: {
    orientation: "orientation",
    messageOrientation: "messageOrientation",
    labelAlign: "labelAlign"
  },
  features: [e._Bn([{
    provide: b.Qe,
    useExisting: L
  }])],
  ngContentSelectors: ["label", "*", "lu-form-message"],
  decls: 5,
  vars: 2,
  consts: [[1, "lu-form-field-wrapper"], [1, "lu-form-field-control"]],
  template: function (E, h) {
    1 & E && (e.F$t(I), e.Hsn(0), e.TgZ(1, "div", 0)(2, "div", 1), e.Hsn(3, 1), e.qZA(), e.Hsn(4, 2), e.qZA()), 2 & E && (e.xp6(1), e.ekj("-is-horizontal", "horizontal" === h.messageOrientation));
  },
  styles: ["[_nghost-%COMP%]{display:inline-flex;flex-direction:column;align-items:flex-start;width:100%}[_nghost-%COMP%]     label{font-size:15px;line-height:24px;margin-bottom:var(--lu-base-gutter)}[_nghost-%COMP%]   .lu-form-field-control[_ngcontent-%COMP%]{position:relative;display:flex}.-is-error[_nghost-%COMP%]{--lu-floated-border: var(--lu-error);--lu-focus: var(--lu-error)}.-is-warning[_nghost-%COMP%]{--lu-floated-border: var(--lu-warning);--lu-focus: var(--lu-warning)}.-is-horizontal[_nghost-%COMP%]{flex-direction:row}.-is-horizontal[_nghost-%COMP%]     label{display:flex;margin-bottom:0;margin-right:calc(var(--lu-base-gutter) * 3);align-items:center;margin-top:var(--lu-base-gutter)}.-label-right-align[_nghost-%COMP%]     label{text-align:right}.-label-right-align.-is-horizontal[_nghost-%COMP%]     label{margin-right:calc(var(--lu-base-gutter) * 2)}.-label-right-align[_nghost-%COMP%]:not(.-is-horizontal)     label{width:100%}[_nghost-%COMP%]   .lu-form-field-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}[_nghost-%COMP%]   .lu-form-field-wrapper[_ngcontent-%COMP%]     lu-form-message{margin-top:var(--lu-base-gutter)}[_nghost-%COMP%]   .lu-form-field-wrapper.-is-horizontal[_ngcontent-%COMP%]{flex-direction:row}[_nghost-%COMP%]   .lu-form-field-wrapper.-is-horizontal[_ngcontent-%COMP%]     lu-form-message{margin-top:0;margin-left:var(--lu-base-gutter);align-items:center}"],
  changeDetection: 0
});
