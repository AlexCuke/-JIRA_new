// Exact compiled component metadata; references belong to modules/97396.js
({
  type: u,
  selectors: [["lu-calendar-field-host"]],
  contentQueries: function (B, y, j) {
    if (1 & B && (e.Suo(j, M.$, 5), e.Suo(j, d.N_, 5)), 2 & B) {
      let W;
      e.iGM(W = e.CRH()) && (y.dropdown = W.first), e.iGM(W = e.CRH()) && (y.calendar = W.first);
    }
  },
  viewQuery: function (B, y) {
    if (1 & B && e.Gf(E, 7, e.SBq), 2 & B) {
      let j;
      e.iGM(j = e.CRH()) && (y.origin = j.first);
    }
  },
  hostVars: 1,
  hostBindings: function (B, y) {
    2 & B && e.uIk("data-lu-size", y.size);
  },
  inputs: {
    size: "size"
  },
  features: [e._Bn([{
    provide: N.fU,
    useExisting: x
  }, {
    provide: N.Oc,
    useValue: I.Ls.PRIMITIVE
  }, {
    provide: N.N4,
    useExisting: x
  }]), e.qOj],
  ngContentSelectors: ["*"],
  decls: 3,
  vars: 1,
  consts: [["luFocusCatcher", "", 1, "lu-calendar-field-host", 3, "luDropdownHandler", "blurEvent"], ["origin", ""]],
  template: function (B, y) {
    1 & B && (e.F$t(), e.TgZ(0, "label", 0, 1), e.NdJ("blurEvent", function () {
      return y.onBlur();
    }), e.Hsn(2), e.qZA()), 2 & B && e.Q6J("luDropdownHandler", y.dropdown);
  },
  dependencies: [b.V, v.i],
  styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;flex-shrink:0}[data-lu-size=small][_nghost-%COMP%]{--lu-input-width: 144px}[data-lu-size=medium][_nghost-%COMP%]{--lu-input-width: 168px}[data-lu-size=large][_nghost-%COMP%]{--lu-input-width: 200px}[data-lu-size=extra-large][_nghost-%COMP%]{--lu-input-width: 232px}.lu-calendar-field-host[_ngcontent-%COMP%]{display:inline-block}"],
  changeDetection: 0
});
