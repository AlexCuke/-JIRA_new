// Exact compiled component metadata; references belong to modules/59198.js
({
  type: Re,
  selectors: [["lu-combobox-multiple"]],
  contentQueries: function (mt, ut, Ct) {
    if (1 & mt && e.Suo(Ct, ae.g, 5, e.Rgc), 2 & mt) {
      let Ft;
      e.iGM(Ft = e.CRH()) && (ut.data = Ft.first);
    }
  },
  viewQuery: function (mt, ut) {
    if (1 & mt && (e.Gf(M.$, 7), e.Gf(C.L, 7), e.Gf(L.kK, 5), e.Gf(R, 7)), 2 & mt) {
      let Ct;
      e.iGM(Ct = e.CRH()) && (ut.dropdown = Ct.first), e.iGM(Ct = e.CRH()) && (ut.input = Ct.first), e.iGM(Ct = e.CRH()) && (ut.inputControl = Ct.first), e.iGM(Ct = e.CRH()) && (ut.comboboxHost = Ct.first);
    }
  },
  hostVars: 1,
  hostBindings: function (mt, ut) {
    2 & mt && e.uIk("data-test-role", ut.dataTestRole);
  },
  inputs: {
    type: "type",
    compareFn: "compareFn",
    displayValueFn: "displayValueFn",
    clearButton: "clearButton",
    size: "size",
    minHeight: "minHeight",
    height: "height",
    minWidth: "minWidth",
    width: "width",
    placeholder: "placeholder",
    positions: "positions",
    compactView: "compactView",
    selectedLabel: "selectedLabel",
    inputId: "inputId"
  },
  outputs: {
    inputChange: "inputChange",
    itemRemove: "itemRemove",
    beforeOpen: "beforeOpen",
    afterOpen: "afterOpen",
    beforeClose: "beforeClose",
    afterClose: "afterClose",
    clear: "clear"
  },
  features: [e._Bn([{
    provide: L.fU,
    useExisting: We
  }, {
    provide: L.Oc,
    useValue: v.Ls.ARRAY
  }, {
    provide: L.N4,
    useExisting: We
  }, {
    provide: N.Mn,
    useExisting: We
  }, {
    provide: N.eV,
    useExisting: We
  }, {
    provide: N.Vg,
    useExisting: We
  }, {
    provide: N.p7,
    useExisting: We
  }, {
    provide: L.pP,
    useValue: !0
  }]), e.qOj],
  decls: 14,
  vars: 16,
  consts: [[3, "type", "size", "compareFn", "displayValueFn"], [3, "rightContent", "blurContent"], ["compactViewTemplate", ""], ["luInput", "", "luInputString", "", 3, "ngModel", "placeholder", "readOnly", "ngModelChange"], ["rightContent", ""], ["rightContentCompactView", ""], [3, "minHeight", "height", "minWidth", "width", "positions", "beforeOpen", "beforeClose", "afterOpen", "afterClose"], ["dropdown", ""], ["luOverlayContent", ""], [3, "dropdown", "chevronButton", "itemRemove", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["overflowItems", ""], [3, "items", "startOfString", "endOfString"], [3, "dropdown", "clearButton", "chevronButton"], [3, "ngTemplateOutlet"], [3, "dropdown", "chevronButton", "itemRemove"]],
  template: function (mt, ut) {
    if (1 & mt && (e.TgZ(0, "lu-combobox-multiple-host", 0)(1, "lu-input-wrapper", 1), e.YNc(2, be, 3, 2, "ng-template", null, 2, e.W1O), e.TgZ(4, "lu-combobox-search-input")(5, "input", 3), e.NdJ("ngModelChange", function (Ft) {
      return ut.inputChange.emit(Ft);
    }), e.qZA(), e.YNc(6, le, 1, 3, "ng-template", null, 4, e.W1O), e.qZA(), e.YNc(8, n, 1, 3, "ng-template", null, 5, e.W1O), e.TgZ(10, "lu-dropdown", 6, 7), e.NdJ("beforeOpen", function () {
      return ut.beforeOpen.emit();
    })("beforeClose", function () {
      return ut.beforeClose.emit();
    })("afterOpen", function () {
      return ut.afterOpen.emit();
    })("afterClose", function () {
      return ut.afterClose.emit();
    }), e.YNc(12, qe, 1, 1, "ng-template", 8), e.qZA()(), e.YNc(13, Rt, 1, 2, "lu-combobox-tags", 9), e.qZA()), 2 & mt) {
      const Ct = e.MAs(3),
        Ft = e.MAs(7),
        Et = e.MAs(9);
      e.Q6J("type", ut.type)("size", ut.size)("compareFn", ut.compareFn)("displayValueFn", ut.displayValueFn), e.xp6(1), e.Q6J("rightContent", ut.compactView ? Et : Ft)("blurContent", ut.compactView && ut.hasValue ? Ct : null), e.xp6(4), e.Q6J("ngModel", null)("placeholder", ut.computedPlaceholder)("readOnly", ut.typeIs("select")), e.uIk("id", ut.inputId ? ut.inputId : null), e.xp6(5), e.Q6J("minHeight", ut.minHeight)("height", ut.height)("minWidth", ut.minWidth)("width", ut.width)("positions", ut.positions), e.xp6(3), e.Q6J("ngIf", !ut.compactView && (ut.hasValue || ut.typeIs("select")));
    }
  },
  dependencies: [h.O5, h.tP, R, Le.HY, y.p, C.L, ke.H, j.I, W.q, M.$, J.o, a.Fj, a.JJ, a.On, fe.n, ye.M],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}"],
  changeDetection: 0
});
