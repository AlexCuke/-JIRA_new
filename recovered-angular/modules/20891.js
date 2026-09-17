// Extracted from main; webpack module 20891. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => qe,
    l: () => Se
  });
  var n,
    t = i(97582),
    e = i(94650),
    a = i(32643),
    m = i(26773),
    d = i(22819),
    M = i(46385),
    b = i(85273),
    A = i(15635),
    N = i(99246),
    I = i(44348),
    O = i(34304),
    L = i(54968),
    C = i(54004),
    v = i(37933),
    f = i(36895),
    E = i(13207),
    h = i(89740),
    x = i(99691),
    u = i(87545),
    T = i(24006),
    R = i(24098);
  function B(Rt, We) {
    if (1 & Rt && (e.TgZ(0, "div", 8), e._UZ(1, "lu-checkbox", 9), e._uU(2, " Выбрать все "), e.qZA()), 2 & Rt) {
      const Re = e.oxw(2);
      e.xp6(1), e.Q6J("ngModel", Re.isAllSelected)("tabIndex", -1);
    }
  }
  function y(Rt, We) {
    1 & Rt && e._uU(0, " Выбрать все ");
  }
  function j(Rt, We) {
    if (1 & Rt) {
      const Re = e.EpF();
      e.TgZ(0, "lu-option", 5), e.NdJ("click", function () {
        e.CHM(Re);
        const q = e.oxw();
        return e.KtG(q.onSelectAll());
      }), e.YNc(1, B, 3, 2, "div", 6), e.YNc(2, y, 1, 0, "ng-template", null, 7, e.W1O), e.qZA();
    }
    if (2 & Rt) {
      const Re = e.MAs(3),
        st = e.oxw();
      e.Q6J("size", st.itemSize)("selectable", !1), e.xp6(1), e.Q6J("ngIf", st.multiOption && st.showSelectAllCheckbox)("ngIfElse", Re);
    }
  }
  function W(Rt, We) {
    if (1 & Rt && e._UZ(0, "lu-checkbox", 15), 2 & Rt) {
      e.oxw();
      const Re = e.MAs(1);
      e.Q6J("ngModel", Re.checked)("tabIndex", -1)("disabled", Re.disabled);
    }
  }
  function F(Rt, We) {
    if (1 & Rt && (e.ynx(0), e._uU(1), e.BQk()), 2 & Rt) {
      const Re = We.polymorpheusOutlet;
      e.xp6(1), e.Oqu(Re);
    }
  }
  function Le(Rt, We) {
    if (1 & Rt) {
      const Re = e.EpF();
      e.TgZ(0, "lu-option", 11, 12), e.NdJ("click", function () {
        const mt = e.CHM(Re).$implicit,
          ut = e.oxw(2);
        return e.KtG(ut.onItemClick(mt));
      }), e.TgZ(2, "div", 8), e.YNc(3, W, 1, 3, "lu-checkbox", 13), e.YNc(4, F, 2, 1, "ng-container", 14), e.qZA()();
    }
    if (2 & Rt) {
      const Re = We.$implicit,
        st = e.oxw(2);
      e.Q6J("size", st.itemSize)("value", st.defineValueFn(Re))("disabled", st.itemDisabledFn(Re)), e.xp6(3), e.Q6J("ngIf", st.multiOption), e.xp6(1), e.Q6J("polymorpheusOutlet", st.itemContent)("polymorpheusOutletContext", st.getContext(Re));
    }
  }
  function ke(Rt, We) {
    if (1 & Rt && (e.ynx(0), e.YNc(1, Le, 5, 6, "lu-option", 10), e.BQk()), 2 & Rt) {
      const Re = e.oxw();
      e.xp6(1), e.Q6J("ngForOf", Re.items)("ngForTrackBy", Re.trackByFn);
    }
  }
  function J(Rt, We) {
    if (1 & Rt && (e.ynx(0), e._uU(1), e.BQk()), 2 & Rt) {
      const Re = We.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", Re, " ");
    }
  }
  function fe(Rt, We) {
    if (1 & Rt && (e.ynx(0), e.YNc(1, J, 2, 1, "ng-container", 19), e.BQk()), 2 & Rt) {
      const Re = e.oxw(4);
      e.xp6(1), e.Q6J("polymorpheusOutlet", Re.errorContent);
    }
  }
  function ye(Rt, We) {
    if (1 & Rt && (e.ynx(0), e.TgZ(1, "div", 18), e.YNc(2, fe, 2, 1, "ng-container", 16), e.qZA(), e.BQk()), 2 & Rt) {
      const Re = e.oxw(3);
      e.xp6(2), e.Q6J("ngIf", Re.errorContent);
    }
  }
  function ae(Rt, We) {
    if (1 & Rt && (e.ynx(0), e._uU(1), e.BQk()), 2 & Rt) {
      const Re = We.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", Re, " ");
    }
  }
  function Y(Rt, We) {
    if (1 & Rt && (e.ynx(0), e.YNc(1, ae, 2, 1, "ng-container", 19), e.BQk()), 2 & Rt) {
      const Re = e.oxw(4);
      e.xp6(1), e.Q6J("polymorpheusOutlet", Re.emptyContent);
    }
  }
  function G(Rt, We) {
    1 & Rt && (e._uU(0), e.ALo(1, "luTranslate")), 2 & Rt && e.hij(" ", e.lcZ(1, 1, "LuList.emptyMessage"), " ");
  }
  function te(Rt, We) {
    if (1 & Rt && (e.TgZ(0, "div", 18), e.YNc(1, Y, 2, 1, "ng-container", 2), e.YNc(2, G, 2, 3, "ng-template", null, 20, e.W1O), e.qZA()), 2 & Rt) {
      const Re = e.MAs(3),
        st = e.oxw(3);
      e.xp6(1), e.Q6J("ngIf", st.emptyContent)("ngIfElse", Re);
    }
  }
  function pe(Rt, We) {
    if (1 & Rt && (e.ynx(0), e.YNc(1, ye, 3, 1, "ng-container", 2), e.YNc(2, te, 4, 2, "ng-template", null, 17, e.W1O), e.BQk()), 2 & Rt) {
      const Re = e.MAs(3),
        st = e.oxw(2);
      e.xp6(1), e.Q6J("ngIf", st.showErrorContent && st.errorContent)("ngIfElse", Re);
    }
  }
  function be(Rt, We) {
    if (1 & Rt && e.YNc(0, pe, 4, 2, "ng-container", 16), 2 & Rt) {
      const Re = e.oxw();
      e.Q6J("ngIf", !Re.showPreloader);
    }
  }
  function le(Rt, We) {
    1 & Rt && (e.TgZ(0, "div", 21), e._UZ(1, "lu-preloader", 22), e.qZA());
  }
  let Se = n = class {
    getContext(We) {
      return this.displayValueFn !== b.BW && "object" == typeof We && We && (We.toString = () => this.displayValueFn(We)), {
        $implicit: We
      };
    }
    constructor(We, Re, st, q) {
      this.multiOption = We, this.elementRef = Re, this.changeDetectorRef = st, this.controlArrayHost = q, this.showPreloader = !1, this.autofocus = !0, this.itemSize = "medium", this.items = [], this.showSelectAll = !1, this.showSelectAllCheckbox = !1, this.itemContent = ({
        $implicit: mt
      }) => this.displayValueFn(mt), this.emptyContent = "", this.errorContent = "", this.showErrorContent = !1, this.itemDisabledFn = b.Fh, this.defineValueFn = b.F6, this.displayValueFn = b.BW, this.action = new e.vpe(), this.optionsScroll = new e.vpe(), this.selectedAll = new e.vpe(), this.trackByFn = (mt, ut) => ut, this.listItems = b.Mm, this.dataTestRole = "optionList";
    }
    ngOnInit() {
      (0, L.R)(this.elementRef.nativeElement, "scroll").pipe((0, v.t)(this), (0, C.U)(We => We.target)).subscribe(We => {
        this.optionsScroll.emit(We.scrollHeight - We.scrollTop - We.clientHeight);
      }), this.controlArrayHost && this.controlArrayHost.valueChange.pipe((0, v.t)(this)).subscribe(() => {
        this.multiOption && this.showSelectAll && this.showSelectAllCheckbox && setTimeout(() => this.changeDetectorRef.markForCheck(), 0);
      });
    }
    ngAfterViewInit() {
      this.listItems.changes.pipe((0, v.t)(this)).subscribe(() => {
        setTimeout(() => {
          this.changeDetectorRef.markForCheck();
        }, 0);
      }), setTimeout(() => {
        this.changeDetectorRef.markForCheck();
      }, 0);
    }
    onItemClick(We) {
      this.action.emit(We), this.multiOption && this.showSelectAll && this.showSelectAllCheckbox && setTimeout(() => this.changeDetectorRef.markForCheck());
    }
    get isAllSelected() {
      if (!this.multiOption || !this.items || 0 === this.items.length) return !1;
      if (this.controlArrayHost && this.controlArrayHost.model) {
        const Re = this.controlArrayHost.model,
          st = (0, A._2)(this.items);
        return 0 !== st.length && st.every(q => {
          const mt = this.defineValueFn(q);
          return Re.some(ut => this.controlArrayHost?.compareFn(mt, ut));
        });
      }
      if (!this.listItems || 0 === this.listItems.length) return !1;
      const We = this.listItems.toArray();
      return 0 !== We.length && We.every(Re => Re.isSelected);
    }
    get hasSelectedItems() {
      return !!this.multiOption && (this.controlArrayHost && this.controlArrayHost.model ? this.controlArrayHost.model.length > 0 : !(!this.listItems || 0 === this.listItems.length) && this.listItems.toArray().some(We => We.isSelected));
    }
    getItems() {
      return (0, A._2)(this.items);
    }
    scrollToIndex(We) {
      const Re = this.listItems.toArray()[We];
      Re && (0, A.Nj)(Re.listItemOrigin).scrollIntoView();
    }
    onSelectAll() {
      this.selectedAll.emit();
      const We = !this.isAllSelected;
      this.listItems.forEach(Re => {
        We ? Re?.select() : Re?.deselect();
      }), setTimeout(() => {
        this.changeDetectorRef.markForCheck();
      }, 0);
    }
    get element() {
      return this.elementRef;
    }
  };
  Se.ɵfac = function (We) {
    return new (We || Se)(e.Y36(N.pP, 8), e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(N.fU, 8));
  }, Se.ɵcmp = e.Xpm({
    type: Se,
    selectors: [["lu-data-list"]],
    viewQuery: function (We, Re) {
      if (1 & We && e.Gf(I.qE, 5), 2 & We) {
        let st;
        e.iGM(st = e.CRH()) && (Re.listItems = st);
      }
    },
    hostVars: 1,
    hostBindings: function (We, Re) {
      2 & We && e.uIk("data-test-role", Re.dataTestRole);
    },
    inputs: {
      showPreloader: "showPreloader",
      autofocus: "autofocus",
      itemSize: "itemSize",
      items: "items",
      showSelectAll: "showSelectAll",
      showSelectAllCheckbox: "showSelectAllCheckbox",
      itemContent: "itemContent",
      emptyContent: "emptyContent",
      errorContent: "errorContent",
      showErrorContent: "showErrorContent",
      itemDisabledFn: "itemDisabledFn",
      defineValueFn: "defineValueFn",
      displayValueFn: "displayValueFn",
      trackByFn: "trackByFn"
    },
    outputs: {
      action: "action",
      optionsScroll: "optionsScroll",
      selectedAll: "selectedAll"
    },
    features: [e._Bn([{
      provide: I.Qu,
      useExisting: n
    }])],
    decls: 6,
    vars: 5,
    consts: [[3, "size", "selectable", "click", 4, "ngIf"], [3, "autofocus"], [4, "ngIf", "ngIfElse"], ["extraContent", ""], ["class", "preloader", 4, "ngIf"], [3, "size", "selectable", "click"], ["lu-text", "", 4, "ngIf", "ngIfElse"], ["textOnly", ""], ["lu-text", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex"], [3, "size", "value", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "size", "value", "disabled", "click"], ["option", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled"], [4, "ngIf"], ["emptyTemplate", ""], ["lu-text", "", 1, "lu-empty-message"], [4, "polymorpheusOutlet"], ["defaultMessage", ""], [1, "preloader"], ["size", "no-title"]],
    template: function (We, Re) {
      if (1 & We && (e.YNc(0, j, 4, 4, "lu-option", 0), e.TgZ(1, "lu-list", 1), e.YNc(2, ke, 2, 2, "ng-container", 2), e.YNc(3, be, 1, 1, "ng-template", null, 3, e.W1O), e.qZA(), e.YNc(5, le, 2, 0, "div", 4)), 2 & We) {
        const st = e.MAs(4);
        e.Q6J("ngIf", Re.showSelectAll && Re.items && Re.items.length), e.xp6(1), e.Q6J("autofocus", Re.autofocus), e.xp6(1), e.Q6J("ngIf", Re.items && Re.items.length && !Re.showErrorContent)("ngIfElse", st), e.xp6(3), e.Q6J("ngIf", Re.showPreloader);
      }
    },
    dependencies: [f.sg, f.O5, E.k, h.Li, x.e, a.NZ, a.ZZ, u.$m, T.JJ, T.On, m.l, d.d, M.M],
    styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;max-height:var(--lu-list-size)}[_nghost-%COMP%]   .preloader[_ngcontent-%COMP%]{padding:8px}.lu-empty-message[_ngcontent-%COMP%]{padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-font-size: 13px;--lu-line-height: 22px}lu-checkbox[_ngcontent-%COMP%]{pointer-events:none}"],
    changeDetection: 0
  }), (0, t.gn)([O.J], Se.prototype, "getContext", null), Se = n = (0, t.gn)([(0, v.c)()], Se);
  let qe = (() => {
    class Rt {}
    return Rt.ɵfac = function (Re) {
      return new (Re || Rt)();
    }, Rt.ɵmod = e.oAB({
      type: Rt
    }), Rt.ɵinj = e.cJS({
      imports: [f.ez, E.X, h.wq, x.l, R.Cl, a.aI, u.Nu, T.u5, m.M, M.B, d.c]
    }), Rt;
  })();
});
