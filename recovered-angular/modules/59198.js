// Extracted from main; webpack module 59198. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    v: () => Re,
    Y: () => st
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(42730),
    d = i(37933),
    M = i(59250),
    b = i(41089),
    A = i(28353),
    N = i(44348),
    I = i(85273),
    O = i(41742),
    L = i(99246),
    C = i(13700),
    v = i(46757),
    f = i(39300),
    E = i(64248),
    h = i(36895);
  const x = ["origin"];
  var T;
  let R = T = class extends N.HY {
    constructor(mt, ut, Ct, Ft) {
      super(mt, Ft, Ct), this.changeDetectorRef = mt, this.ngZone = ut, this.ngControl = Ct, this.controlHost = Ft, this.type = "select", this.size = "medium", this.displayValueFn = I.BW, this.inputControl = null, this.positions = ["bottom-center", "top-center"], this.borderOffset = 1;
    }
    ngAfterContentInit() {
      this.inputControl?.valueChange.pipe((0, f.h)(() => !!this.input?.isFocused), (0, d.t)(this), (0, O.hx)(this.ngZone)).subscribe(() => this.dropdown?.open());
    }
    get searchText() {
      return this.input?.value || "";
    }
    get width() {
      return this.origin?.nativeElement.offsetWidth || 0;
    }
    get listHostOrigin() {
      return this.origin || null;
    }
    get panelClass() {
      return `lu-combobox-host-overlay-${this.size}`;
    }
    typeIs(mt) {
      return mt === this.type;
    }
    clickEvent() {
      !this.typeIs("search") && !this.disabled && this.dropdown?.open();
    }
  };
  R.ɵfac = function (mt) {
    return new (mt || R)(e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(a.a5, 10), e.Y36(L.fU, 12));
  }, R.ɵcmp = e.Xpm({
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
  }), R = T = (0, t.gn)([(0, d.c)()], R);
  let B = (() => {
    class q {}
    return q.ɵfac = function (ut) {
      return new (ut || q)();
    }, q.ɵmod = e.oAB({
      type: q
    }), q.ɵinj = e.cJS({
      imports: [h.ez, b.T, E.Y, A.c]
    }), q;
  })();
  var y = i(69199),
    j = i(27191),
    W = i(21803),
    F = i(8391),
    Le = i(62804),
    ke = i(43150),
    J = i(77229),
    fe = i(34905),
    ye = i(46385),
    ae = i(76500),
    Y = i(26773);
  function G(q, mt) {
    if (1 & q && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "luTranslate"), e.qZA()), 2 & q) {
      const ut = e.oxw(2);
      e.xp6(1), e.lnq(" ", e.lcZ(2, 3, "LuComboboxMultiple.startOfString"), "", null == ut.comboboxHost || null == ut.comboboxHost.model ? null : ut.comboboxHost.model.length, " ", ut.selectedLabel, " ");
    }
  }
  const te = function () {
    return [];
  };
  function pe(q, mt) {
    if (1 & q && (e._UZ(0, "lu-overflow-items", 12), e.ALo(1, "luTranslate"), e.ALo(2, "luTranslate")), 2 & q) {
      const ut = e.oxw(2);
      e.Q6J("items", (null == ut.comboboxHost ? null : ut.comboboxHost.model) || e.DdM(7, te))("startOfString", e.lcZ(1, 3, "LuComboboxMultiple.startOfString"))("endOfString", e.lcZ(2, 5, "LuComboboxMultiple.endOfString"));
    }
  }
  function be(q, mt) {
    if (1 & q && (e.YNc(0, G, 3, 5, "span", 10), e.YNc(1, pe, 3, 8, "ng-template", null, 11, e.W1O)), 2 & q) {
      const ut = e.MAs(2),
        Ct = e.oxw();
      e.Q6J("ngIf", Ct.selectedLabel)("ngIfElse", ut);
    }
  }
  function le(q, mt) {
    if (1 & q && e._UZ(0, "lu-combobox-controls", 13), 2 & q) {
      const ut = e.oxw(),
        Ct = e.MAs(11);
      e.Q6J("dropdown", Ct)("clearButton", ut.clearButton)("chevronButton", ut.typeIs("autocomplete"));
    }
  }
  function n(q, mt) {
    if (1 & q && e._UZ(0, "lu-combobox-controls", 13), 2 & q) {
      const ut = e.oxw(),
        Ct = e.MAs(11);
      e.Q6J("dropdown", Ct)("clearButton", ut.clearButton)("chevronButton", !ut.typeIs("search"));
    }
  }
  function Se(q, mt) {}
  function qe(q, mt) {
    if (1 & q && e.YNc(0, Se, 0, 0, "ng-template", 14), 2 & q) {
      const ut = e.oxw();
      e.Q6J("ngTemplateOutlet", ut.data);
    }
  }
  function Rt(q, mt) {
    if (1 & q) {
      const ut = e.EpF();
      e.TgZ(0, "lu-combobox-tags", 15), e.NdJ("itemRemove", function (Ft) {
        e.CHM(ut);
        const Et = e.oxw();
        return e.KtG(Et.itemRemove.emit(Ft));
      }), e.qZA();
    }
    if (2 & q) {
      const ut = e.oxw(),
        Ct = e.MAs(11);
      e.Q6J("dropdown", Ct)("chevronButton", ut.typeIs("select"));
    }
  }
  var We;
  let Re = We = class extends N.HY {
    constructor(mt, ut, Ct, Ft, Et) {
      super(ut, void 0, Et), this.elementRef = mt, this.changeDetectorRef = ut, this.ngZone = Ct, this.locale = Ft, this.ngControl = Et, this.type = "select", this.compareFn = I.kX, this.displayValueFn = I.BW, this.clearButton = !0, this.size = "medium", this.minHeight = null, this.height = null, this.minWidth = null, this.width = null, this.placeholder = null, this.positions = ["bottom-center", "top-center", "right-center", "left-center"], this.compactView = !1, this.selectedLabel = null, this.inputId = null, this.inputChange = new e.vpe(), this.itemRemove = new e.vpe(), this.beforeOpen = new e.vpe(), this.afterOpen = new e.vpe(), this.beforeClose = new e.vpe(), this.afterClose = new e.vpe(), this.clear = new e.vpe(), this.inputControl = null, this.data = "", this.dataTestRole = "combobox";
    }
    get searchText() {
      return this.comboboxHost?.searchText || "";
    }
    typeIs(mt) {
      return mt === this.type;
    }
    get listHostOrigin() {
      return this.elementRef.nativeElement;
    }
    get computedPlaceholder() {
      return this.typeIs("select") && !this.hasValue || !this.typeIs("select") ? this.placeholder ?? (this.locale.getTranslation("LuComboboxMultiple.placeholder") || "") : "";
    }
    onClear() {
      this.inputControl?.writeValueFromHost(null), this.updateModel(null), this.clear.emit();
    }
  };
  Re.ɵfac = function (mt) {
    return new (mt || Re)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(F.oo), e.Y36(a.a5, 8));
  }, Re.ɵcmp = e.Xpm({
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
  }), Re = We = (0, t.gn)([(0, m.c)()], Re);
  let st = (() => {
    class q {}
    return q.ɵfac = function (ut) {
      return new (ut || q)();
    }, q.ɵmod = e.oAB({
      type: q
    }), q.ɵinj = e.cJS({
      imports: [h.ez, B, Le.LA, y.k, C.f, ke.c, j.D, W.H, M.J, J.v, a.u5, fe.e, ye.B, Y.M]
    }), q;
  })();
});
