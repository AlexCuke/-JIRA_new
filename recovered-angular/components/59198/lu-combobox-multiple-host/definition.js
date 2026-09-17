// Exact compiled component metadata; references belong to modules/59198.js
({
  type: R,
  selectors: [["lu-combobox-multiple-host"]],
  contentQueries: function (mt, ut, Ct) {
    if (1 & mt && (e.Suo(Ct, M.$, 5), e.Suo(Ct, C.L, 5), e.Suo(Ct, L.kK, 5)), 2 & mt) {
      let Ft;
      e.iGM(Ft = e.CRH()) && (ut.dropdown = Ft.first), e.iGM(Ft = e.CRH()) && (ut.input = Ft.first), e.iGM(Ft = e.CRH()) && (ut.inputControl = Ft.first);
    }
  },
  viewQuery: function (mt, ut) {
    if (1 & mt && e.Gf(x, 7, e.SBq), 2 & mt) {
      let Ct;
      e.iGM(Ct = e.CRH()) && (ut.origin = Ct.first);
    }
  },
  hostVars: 2,
  hostBindings: function (mt, ut) {
    2 & mt && e.uIk("data-lu-combobox-type", ut.type)("data-lu-combobox-size", ut.size);
  },
  inputs: {
    type: "type",
    size: "size",
    displayValueFn: "displayValueFn"
  },
  features: [e._Bn([{
    provide: L.fU,
    useExisting: T
  }, {
    provide: L.Oc,
    useValue: v.Ls.ARRAY
  }, {
    provide: L.N4,
    useExisting: T
  }, {
    provide: N.Mn,
    useExisting: T
  }, {
    provide: N.eV,
    useExisting: T
  }, {
    provide: N.Vg,
    useExisting: T
  }, {
    provide: N.p7,
    useExisting: T
  }, {
    provide: L.pP,
    useValue: !0
  }]), e.qOj],
  ngContentSelectors: ["*"],
  decls: 4,
  vars: 1,
  consts: [["luFocusCatcher", "", 3, "blurEvent", "click"], [1, "lu-dropdown-host", 3, "luDropdownHandler"], ["origin", ""]],
  template: function (mt, ut) {
    1 & mt && (e.F$t(), e.TgZ(0, "lu-wrapper", 0), e.NdJ("blurEvent", function () {
      return null == ut.dropdown ? null : ut.dropdown.close();
    })("click", function () {
      return ut.clickEvent();
    }), e.TgZ(1, "label", 1, 2), e.Hsn(3), e.qZA()()), 2 & mt && (e.xp6(1), e.Q6J("luDropdownHandler", ut.dropdown));
  },
  dependencies: [b.V, E.i, A.U],
  styles: ["[_nghost-%COMP%]{position:relative;display:block;width:100%}[_nghost-%COMP%]:not([data-lu-combobox-type=select])     lu-input-wrapper{order:2}[_nghost-%COMP%]:not([data-lu-combobox-type=select])     lu-combobox-tags{position:relative;order:1;border-top:1px solid var(--lu-border);border-left:1px solid var(--lu-border);border-right:1px solid var(--lu-border);border-bottom:0}[data-lu-disabled=true][_nghost-%COMP%]{--lu-border: var(--lu-black-20)}[data-lu-combobox-type=select][_nghost-%COMP%]     lu-input-wrapper{position:absolute;left:0;top:0;--lu-input-height: 100%}[data-lu-combobox-type=select][_nghost-%COMP%]     lu-combobox-tags{cursor:pointer}.lu-dropdown-host[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:40px}  .lu-combobox-host-overlay-small{--lu-list-size: 160px}  .lu-combobox-host-overlay-medium{--lu-list-size: 320px}  .lu-combobox-host-overlay-large{--lu-list-size: 480px}"],
  changeDetection: 0
});
