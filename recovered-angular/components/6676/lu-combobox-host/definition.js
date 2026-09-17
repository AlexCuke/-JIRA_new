// Exact compiled component metadata; references belong to modules/6676.js
({
  type: B,
  selectors: [["lu-combobox-host"]],
  contentQueries: function (Rt, We, Re) {
    if (1 & Rt && (e.Suo(Re, A.$, 5), e.Suo(Re, v.L, 5), e.Suo(Re, C.kK, 5)), 2 & Rt) {
      let st;
      e.iGM(st = e.CRH()) && (We.dropdown = st.first), e.iGM(st = e.CRH()) && (We.input = st.first), e.iGM(st = e.CRH()) && (We.inputControl = st.first);
    }
  },
  viewQuery: function (Rt, We) {
    if (1 & Rt && e.Gf(u, 7, e.SBq), 2 & Rt) {
      let Re;
      e.iGM(Re = e.CRH()) && (We.origin = Re.first);
    }
  },
  hostVars: 1,
  hostBindings: function (Rt, We) {
    2 & Rt && e.uIk("data-lu-combobox-size", We.size);
  },
  inputs: {
    type: "type",
    compareFn: "compareFn",
    displayValueFn: "displayValueFn",
    size: "size"
  },
  features: [e._Bn([{
    provide: C.fU,
    useExisting: R
  }, {
    provide: C.Oc,
    useValue: f.Ls.PRIMITIVE
  }, {
    provide: C.N4,
    useExisting: R
  }, {
    provide: I.Mn,
    useExisting: R
  }, {
    provide: I.eV,
    useExisting: R
  }, {
    provide: I.Vg,
    useExisting: R
  }, {
    provide: I.p7,
    useExisting: R
  }]), e.qOj],
  ngContentSelectors: ["*"],
  decls: 3,
  vars: 1,
  consts: [["luFocusCatcher", "", 1, "lu-dropdown-host", 3, "luDropdownHandler", "click", "blurEvent"], ["origin", ""]],
  template: function (Rt, We) {
    1 & Rt && (e.F$t(), e.TgZ(0, "label", 0, 1), e.NdJ("click", function () {
      return We.clickEvent();
    })("blurEvent", function () {
      return null == We.dropdown ? null : We.dropdown.close();
    }), e.Hsn(2), e.qZA()), 2 & Rt && e.Q6J("luDropdownHandler", We.dropdown);
  },
  dependencies: [N.V, h.i],
  styles: ["[_nghost-%COMP%]{position:relative;display:block;width:100%}.lu-dropdown-host[_ngcontent-%COMP%]{display:block}  .lu-combobox-host-overlay-small{--lu-list-size: 160px}  .lu-combobox-host-overlay-medium{--lu-list-size: 320px}  .lu-combobox-host-overlay-large{--lu-list-size: 480px}"],
  changeDetection: 0
});
