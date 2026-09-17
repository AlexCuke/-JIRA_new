// Exact compiled component metadata; references belong to modules/6676.js
({
  type: n,
  selectors: [["lu-combobox"]],
  contentQueries: function (Rt, We, Re) {
    if (1 & Rt && e.Suo(Re, ye.g, 5, e.Rgc), 2 & Rt) {
      let st;
      e.iGM(st = e.CRH()) && (We.data = st.first);
    }
  },
  viewQuery: function (Rt, We) {
    if (1 & Rt && (e.Gf(A.$, 7), e.Gf(B, 7), e.Gf(v.L, 7), e.Gf(C.kK, 5)), 2 & Rt) {
      let Re;
      e.iGM(Re = e.CRH()) && (We.dropdown = Re.first), e.iGM(Re = e.CRH()) && (We.comboboxHost = Re.first), e.iGM(Re = e.CRH()) && (We.input = Re.first), e.iGM(Re = e.CRH()) && (We.inputControl = Re.first);
    }
  },
  hostVars: 1,
  hostBindings: function (Rt, We) {
    2 & Rt && e.uIk("data-test-role", We.dataTestRole);
  },
  inputs: {
    type: "type",
    compareFn: "compareFn",
    displayValueFn: "displayValueFn",
    valueContent: "valueContent",
    clearButton: "clearButton",
    searchIcon: "searchIcon",
    size: "size",
    minHeight: "minHeight",
    height: "height",
    minWidth: "minWidth",
    width: "width",
    placeholder: "placeholder",
    positions: "positions",
    inputId: "inputId"
  },
  outputs: {
    inputChange: "inputChange",
    beforeOpen: "beforeOpen",
    afterOpen: "afterOpen",
    beforeClose: "beforeClose",
    afterClose: "afterClose",
    clear: "clear"
  },
  features: [e._Bn([{
    provide: C.fU,
    useExisting: le
  }, {
    provide: C.Oc,
    useValue: f.Ls.PRIMITIVE
  }, {
    provide: I.eV,
    useExisting: le
  }, {
    provide: I.Mn,
    useExisting: le
  }, {
    provide: I.Vg,
    useExisting: le
  }, {
    provide: I.p7,
    useExisting: le
  }]), e.qOj],
  decls: 9,
  vars: 23,
  consts: [[3, "type", "size", "compareFn", "displayValueFn", "disabled"], [3, "blurContent", "highlight", "blurContext"], ["icon", "search", "size", "24", "luInputWrapperBefore", "", 4, "ngIf"], ["luInput", "", "luInputString", "", "luComboboxInput", "", 3, "ngModel", "readOnly", "placeholder", "ngModelChange"], ["luInputWrapperAfter", "", 3, "dropdown", "clearButton", "chevronButton"], [3, "minHeight", "height", "minWidth", "width", "positions", "beforeOpen", "beforeClose", "afterOpen", "afterClose"], ["dropdown", ""], ["luOverlayContent", ""], ["icon", "search", "size", "24", "luInputWrapperBefore", ""], ["class", "lu-clear-button", 3, "value", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "lu-clear-button", 3, "value", "click"], ["lu-text", ""], ["icon", "close", "luTextLeft", ""]],
  template: function (Rt, We) {
    if (1 & Rt && (e.TgZ(0, "lu-combobox-host", 0)(1, "lu-input-wrapper", 1), e.YNc(2, G, 1, 0, "lu-svg-icon", 2), e.TgZ(3, "input", 3), e.NdJ("ngModelChange", function (st) {
      return We.inputChange.emit(st);
    }), e.ALo(4, "luTranslate"), e.qZA(), e._UZ(5, "lu-combobox-controls", 4), e.TgZ(6, "lu-dropdown", 5, 6), e.NdJ("beforeOpen", function () {
      return We.beforeOpen.emit();
    })("beforeClose", function () {
      return We.beforeClose.emit();
    })("afterOpen", function () {
      return We.afterOpen.emit();
    })("afterClose", function () {
      return We.afterClose.emit();
    }), e.YNc(8, be, 2, 2, "ng-template", 7), e.qZA()()()), 2 & Rt) {
      const Re = e.MAs(7);
      let st;
      e.Q6J("type", We.type)("size", We.size)("compareFn", We.compareFn)("displayValueFn", We.displayValueFn)("disabled", We.disabled), e.xp6(1), e.Q6J("blurContent", We.hasValue ? We.valueContent : null)("highlight", !We.valueContent)("blurContext", We.model), e.xp6(1), e.Q6J("ngIf", We.searchIcon), e.xp6(1), e.Q6J("ngModel", null)("readOnly", We.typeIs("select"))("placeholder", null !== (st = We.placeholder) && void 0 !== st ? st : e.lcZ(4, 21, "LuCombobox.placeholder")), e.uIk("id", We.inputId ? We.inputId : null), e.xp6(2), e.Q6J("dropdown", Re)("clearButton", !We.typeIs("select") && We.clearButton)("chevronButton", !We.typeIs("search")), e.xp6(1), e.Q6J("minHeight", We.minHeight)("height", We.height)("minWidth", We.minWidth)("width", We.width)("positions", We.positions);
    }
  },
  dependencies: [x.O5, x.tP, B, W.HY, W.kH, W.Fj, v.L, F.H, A.$, Le.k, d.q, M.m, ke.o, ae.q, J.NZ, J.ZZ, a.Fj, a.JJ, a.On, fe.M],
  styles: ["[_nghost-%COMP%]{display:block;width:100%}.lu-clear-button[_ngcontent-%COMP%]{border-bottom:1px solid var(--lu-divider)}.lu-clear-button[_ngcontent-%COMP%]   lu-svg-icon[icon=close][_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}"],
  changeDetection: 0
});
