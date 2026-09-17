// Extracted from main; webpack module 6676. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    m: () => n,
    n: () => Se
  });
  var t = i(97582),
    e = i(94650),
    a = i(24006),
    m = i(42730),
    d = i(21803),
    M = i(1120),
    b = i(37933),
    A = i(59250),
    N = i(41089),
    I = i(44348),
    O = i(85273),
    L = i(41742),
    C = i(99246),
    v = i(13700),
    f = i(46757),
    E = i(39300),
    h = i(64248),
    x = i(36895);
  const u = ["origin"];
  var R;
  let B = R = class extends I.zH {
    constructor(Rt, We, Re, st) {
      super(Rt, st, Re), this.changeDetectorRef = Rt, this.ngZone = We, this.ngControl = Re, this.controlHost = st, this.type = "select", this.compareFn = O.kX, this.displayValueFn = O.BW, this.size = "medium", this.inputControl = null, this.positions = ["bottom-center", "top-center"], this.borderOffset = 1;
    }
    ngAfterContentInit() {
      this.inputControl?.valueChange.pipe((0, E.h)(() => !!this.input?.isFocused), (0, b.t)(this), (0, L.hx)(this.ngZone)).subscribe(() => this.dropdown?.open()), this.typedControlChange(I.DA).pipe((0, b.t)(this)).subscribe(() => this.dropdown?.close());
    }
    incomingUpdate(Rt) {
      super.incomingUpdate(Rt), Rt && this.dropdown?.close();
    }
    get searchText() {
      return this.hasValue ? "" : this.input?.value || "";
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
    typeIs(Rt) {
      return Rt === this.type;
    }
    clickEvent() {
      !this.typeIs("search") && !this.disabled && this.dropdown?.open();
    }
  };
  B.ɵfac = function (Rt) {
    return new (Rt || B)(e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(a.a5, 10), e.Y36(C.fU, 12));
  }, B.ɵcmp = e.Xpm({
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
  }), B = R = (0, t.gn)([(0, b.c)()], B);
  let y = (() => {
    class qe {}
    return qe.ɵfac = function (We) {
      return new (We || qe)();
    }, qe.ɵmod = e.oAB({
      type: qe
    }), qe.ɵinj = e.cJS({
      imports: [x.ez, N.T, h.Y]
    }), qe;
  })();
  var le,
    j = i(20891),
    W = i(62804),
    F = i(43150),
    Le = i(13207),
    ke = i(77229),
    J = i(32643),
    fe = i(46385),
    ye = i(76500),
    ae = i(93278),
    Y = i(89740);
  function G(qe, Rt) {
    1 & qe && e._UZ(0, "lu-svg-icon", 8);
  }
  function te(qe, Rt) {
    if (1 & qe) {
      const We = e.EpF();
      e.TgZ(0, "lu-option", 11), e.NdJ("click", function () {
        e.CHM(We), e.oxw(2);
        const st = e.MAs(7);
        return e.KtG(st.close());
      }), e.TgZ(1, "div", 12), e._UZ(2, "lu-svg-icon", 13), e._uU(3, " Сбросить выбор "), e.qZA()();
    }
    2 & qe && e.Q6J("value", null);
  }
  function pe(qe, Rt) {}
  function be(qe, Rt) {
    if (1 & qe && (e.YNc(0, te, 4, 1, "lu-option", 9), e.YNc(1, pe, 0, 0, "ng-template", 10)), 2 & qe) {
      const We = e.oxw();
      e.Q6J("ngIf", We.typeIs("select") && We.hasValue && We.clearButton), e.xp6(1), e.Q6J("ngTemplateOutlet", We.data);
    }
  }
  let n = le = class extends I.zH {
    constructor(Rt, We, Re, st) {
      super(We, void 0, st), this.elementRef = Rt, this.changeDetectorRef = We, this.ngZone = Re, this.ngControl = st, this.type = "select", this.compareFn = O.kX, this.displayValueFn = O.BW, this.valueContent = "", this.clearButton = !0, this.searchIcon = !1, this.size = "medium", this.minHeight = null, this.height = null, this.minWidth = null, this.width = null, this.placeholder = null, this.positions = ["bottom-center", "top-center", "right-center", "left-center"], this.inputId = null, this.inputChange = new e.vpe(), this.beforeOpen = new e.vpe(), this.afterOpen = new e.vpe(), this.beforeClose = new e.vpe(), this.afterClose = new e.vpe(), this.clear = new e.vpe(), this.inputControl = null, this.data = null, this.dataTestRole = "combobox";
    }
    get searchText() {
      return this.comboboxHost?.searchText || "";
    }
    typeIs(Rt) {
      return Rt === this.type;
    }
    get listHostOrigin() {
      return this.elementRef.nativeElement;
    }
    onClear() {
      this.inputControl?.writeValueFromHost(null), this.updateModel(null), this.clear.emit();
    }
  };
  n.ɵfac = function (Rt) {
    return new (Rt || n)(e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(e.R0b), e.Y36(a.a5, 8));
  }, n.ɵcmp = e.Xpm({
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
  }), n = le = (0, t.gn)([(0, m.c)()], n);
  let Se = (() => {
    class qe {}
    return qe.ɵfac = function (We) {
      return new (We || qe)();
    }, qe.ɵmod = e.oAB({
      type: qe
    }), qe.ɵinj = e.cJS({
      imports: [x.ez, y, W.LA, v.f, F.c, A.J, Le.X, j.X, d.H, M._, Y.wq, ke.v, ae.h, J.aI, a.u5, fe.B]
    }), qe;
  })();
});
