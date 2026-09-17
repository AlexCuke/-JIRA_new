// Extracted from main; webpack module 77015. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Og: () => Fn,
    ZS: () => Pr,
    v2: () => oo,
    _y: () => qn,
    pW: () => wr,
    c8: () => dn,
    Ak: () => ws,
    YG: () => Ko,
    p5: () => Mi,
    A1: () => ja,
    my: () => ul,
    mZ: () => mn,
    fc: () => Pe,
    m2: () => hl,
    tH: () => va,
    wj: () => Ea,
    ad: () => Ll,
    XD: () => Hc,
    Yi: () => tc,
    YE: () => ac,
    CU: () => Pa,
    Ox: () => Zr,
    LU: () => pa,
    gA: () => ti,
    CE: () => Yt,
    IM: () => jt,
    uY: () => Gi,
    EA: () => na,
    ER: () => Qs,
    wI: () => zi,
    E9: () => Er,
    xb: () => Br,
    r$: () => As,
    N6: () => dl,
    El: () => Kl,
    Su: () => Wl,
    Gy: () => qc,
    LX: () => Vn,
    Cq: () => Gt,
    yS: () => gu,
    _L: () => Xc,
    RO: () => bu,
    H5: () => Kc,
    Tb: () => ra,
    hG: () => Jc,
    X2: () => _t,
    b8: () => li,
    XU: () => Ws
  });
  var t = i(94650),
    e = i(36895),
    a = i(39605),
    m = i(32643),
    d = i(70823),
    M = i(93278),
    b = i(87545),
    A = i(22819),
    N = i(18200),
    I = i(71298),
    O = i(59250),
    L = i(13207),
    C = i(9073),
    v = i(24676),
    f = i(28369),
    E = i(33459),
    h = i(62804),
    x = i(13700),
    u = i(92203),
    T = i(43150),
    R = i(76500),
    B = i(49267),
    y = i(85171),
    j = i(32619),
    W = i(19550),
    F = i(44348),
    Le = i(99246),
    ke = i(24006),
    J = i(77579),
    fe = i(39646),
    ye = i(39841),
    ae = i(82722),
    Y = i(61135),
    G = i(4128),
    te = i(89653),
    pe = i(54004),
    be = i(34782),
    le = i(68675),
    n = i(71884),
    Se = i(63900),
    qe = i(39300),
    Rt = i(78372),
    We = i(95698),
    Re = i(24351),
    st = i(70262),
    q = i(50590),
    mt = i(25763),
    ut = i(21803),
    Ct = i(20891),
    Ft = i(62104),
    Et = i(71273),
    Ue = i(69082),
    Me = i(54976),
    Ke = i(5416),
    Ze = i(47313),
    Ee = i(85623);
  let pt = (() => {
    class $e {}
    return $e.ɵfac = function (nt) {
      return new (nt || $e)();
    }, $e.ɵmod = t.oAB({
      type: $e
    }), $e.ɵinj = t.cJS({
      imports: [e.ez, u.Y, Ee.c, M.h, d.i]
    }), $e;
  })();
  var Dt = i(6676),
    Ht = i(59198),
    Dn = i(73922),
    vt = i(10493);
  const an = new t.OlP("TERMINOLOGY_MODULE_FACTORY_TOKEN");
  function li($e) {
    return {
      provide: an,
      useClass: $e,
      multi: !0
    };
  }
  let zn = (() => {
    class $e {
      constructor(nt) {
        this.services = nt;
      }
      getTerminology({
        terminologyName: nt,
        filterText: si,
        paging: Oo,
        filter: xs
      }) {
        const Ne = this.findService(nt);
        if (!Ne) throw new Error(`Terminology service by ${nt} not injected`);
        const [Qe, Q] = nt.split(":");
        return Ne.getTerminology({
          terminologyName: Q ?? Qe,
          filterText: si,
          paging: Oo,
          filter: xs
        });
      }
      findService(nt) {
        const [si, Oo] = nt.split(":");
        return Oo ? this.services.find(xs => si === xs.key) : this.services[0];
      }
    }
    return $e.ɵfac = function (nt) {
      return new (nt || $e)(t.LFG(an));
    }, $e.ɵprov = t.Yz7({
      token: $e,
      factory: $e.ɵfac
    }), $e;
  })();
  const $t = new t.OlP("TERMINOLOGY_ICON_TOKEN");
  function Mn($e, Hn) {
    1 & $e && t._UZ(0, "div", 4);
  }
  function Qn($e, Hn) {
    if (1 & $e && (t.ynx(0), t._UZ(1, "lu-svg-icon", 5), t.BQk()), 2 & $e) {
      const nt = Hn.ngIf,
        si = t.oxw(2);
      t.xp6(1), t.Q6J("icon", nt.value)("size", nt.size)("height", nt.height)("ngStyle", si.getIconStyle());
    }
  }
  function In($e, Hn) {
    if (1 & $e && (t.ynx(0), t._UZ(1, "lu-dot", 6), t.BQk()), 2 & $e) {
      const nt = t.oxw(2);
      t.xp6(1), t.Q6J("color", nt.getDotColor());
    }
  }
  function ui($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "span", 7), t._uU(2), t.qZA(), t.BQk()), 2 & $e) {
      const nt = Hn.ngIf,
        si = t.oxw(2);
      t.xp6(1), t.Q6J("size", nt.size)("ngStyle", si.getCharStyle()), t.xp6(1), t.hij(" ", nt.char, " ");
    }
  }
  function To($e, Hn) {
    if (1 & $e && t._UZ(0, "div", 8), 2 & $e) {
      const nt = t.oxw(2);
      t.Q6J("innerHTML", nt.tooltip, t.oJD);
    }
  }
  function bi($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "div", 1), t.YNc(2, Mn, 1, 0, "div", 2), t.YNc(3, Qn, 2, 4, "ng-container", 0), t.YNc(4, In, 2, 1, "ng-container", 0), t.YNc(5, ui, 3, 3, "ng-container", 0), t.qZA(), t.YNc(6, To, 1, 1, "ng-template", null, 3, t.W1O), t.BQk()), 2 & $e) {
      const nt = t.MAs(7),
        si = t.oxw();
      t.xp6(1), t.Q6J("ngClass", si.figureClass)("ngStyle", si.figureStyle)("luTooltip", nt)("canOpen", si.canOpenTooltip), t.xp6(1), t.Q6J("ngIf", si.showMark), t.xp6(1), t.Q6J("ngIf", si.getIconData()), t.xp6(1), t.Q6J("ngIf", si.hasDotData()), t.xp6(1), t.Q6J("ngIf", si.getCharData());
    }
  }
  let qn = (() => {
    class $e {
      getIconData() {
        return this.hasIconData && this.iconData?.value && this.iconData?.size ? {
          value: this.iconData.value,
          size: this.iconData.size,
          height: this.iconData.height ? this.iconData.height : this.iconData.size
        } : null;
      }
      getIconStyle() {
        const nt = this.icon.iconData;
        return nt.color ? {
          "--lu-svg-icon-color": nt.color
        } : {};
      }
      hasDotData() {
        return "dot" === this.icon.type;
      }
      getDotColor() {
        return this.dotData?.color || "default";
      }
      getCharData() {
        return this.charData?.value && this.charData?.size ? {
          char: this.charData.value,
          size: this.charData.size
        } : null;
      }
      getCharStyle() {
        const nt = this.icon.iconData;
        return nt.color ? {
          color: nt.color
        } : {};
      }
      get showMark() {
        return this.icon.figureData?.mark ?? !1;
      }
      get figureClass() {
        return [this.icon.figureData?.figure || "", "char" === this.icon.type ? "figure-for-char" : ""].filter(Boolean);
      }
      get figureStyle() {
        if (!this.icon.figureData) return {};
        if ("char" === this.icon.type && !this.getCharData()) return {};
        const nt = this.getFigureWidth();
        return {
          "background-color": this.icon.figureData.color ? this.icon.figureData.color : "transparent",
          width: nt ? `${nt}px` : "auto",
          height: nt ? `${nt}px` : "auto"
        };
      }
      getFigureWidth() {
        return "rectangle" === this.icon.figureData?.figure ? this.icon.figureData?.width ?? this.icon.figureData?.size : this.icon.figureData?.size;
      }
      getFigureHeight() {
        return "rectangle" === this.icon.figureData?.figure ? this.icon.figureData?.height ?? this.icon.figureData?.size : this.icon.figureData?.size;
      }
      get tooltip() {
        return this.icon.tooltip || "";
      }
      get canOpenTooltip() {
        return Boolean(this.tooltip);
      }
      get iconData() {
        return this.hasIconData ? this.icon.iconData : null;
      }
      get dotData() {
        return "dot" === this.icon.type ? this.icon.iconData : null;
      }
      get charData() {
        return "char" === this.icon.type ? this.icon.iconData : null;
      }
      get hasIconData() {
        if ("icon" === this.icon.type) {
          const nt = this.icon.iconData;
          return !!nt.value && !!nt.size;
        }
        return !1;
      }
    }
    return $e.ɵfac = function (nt) {
      return new (nt || $e)();
    }, $e.ɵcmp = t.Xpm({
      type: $e,
      selectors: [["dp-single-icon"]],
      inputs: {
        icon: "icon"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "icon-container", 3, "ngClass", "ngStyle", "luTooltip", "canOpen"], ["class", "icon-container-mark", 4, "ngIf"], ["tooltipRef", ""], [1, "icon-container-mark"], [3, "icon", "size", "height", "ngStyle"], [1, "icon-container__dot", 3, "color"], ["lu-text", "", 3, "size", "ngStyle"], [3, "innerHTML"]],
      template: function (nt, si) {
        1 & nt && t.YNc(0, bi, 8, 8, "ng-container", 0), 2 & nt && t.Q6J("ngIf", si.icon);
      },
      dependencies: [e.mk, e.O5, e.PC, a.Z, m.NZ, d.$, M.q],
      styles: [".icon-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.icon-container-mark[_ngcontent-%COMP%]{position:absolute;top:-6px;right:-6px;width:12px;height:12px;background:var(--lu-orange-100);border-radius:6px;border:3px solid white}.icon-container__dot[_ngcontent-%COMP%]{margin-right:calc(var(--lu-base-gutter) / 2 * -1)}.figure-for-char[_ngcontent-%COMP%]{padding:0 calc(var(--lu-base-gutter) / 2)}.square[_ngcontent-%COMP%], .rectangle[_ngcontent-%COMP%]{border-radius:2px;border:1px solid transparent}.circle[_ngcontent-%COMP%]{border-radius:50%;border:1px solid transparent}.icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.singe-dot[_ngcontent-%COMP%]   .lu-dot-wrapper[_ngcontent-%COMP%]{display:none}"],
      changeDetection: 0
    }), $e;
  })();
  function Xn($e, Hn) {
    if (1 & $e && (t.ynx(0), t._UZ(1, "dp-single-icon", 6), t.BQk()), 2 & $e) {
      const nt = Hn.$implicit;
      t.xp6(1), t.Q6J("icon", nt);
    }
  }
  function Yi($e, Hn) {
    if (1 & $e && (t.TgZ(0, "div", 4), t.YNc(1, Xn, 2, 1, "ng-container", 5), t.qZA()), 2 & $e) {
      const nt = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", nt.prefixIcons);
    }
  }
  function Eo($e, Hn) {
    if (1 & $e && (t.ynx(0), t._UZ(1, "dp-single-icon", 6), t.BQk()), 2 & $e) {
      const nt = Hn.$implicit;
      t.xp6(1), t.Q6J("icon", nt);
    }
  }
  function Fo($e, Hn) {
    if (1 & $e && (t.TgZ(0, "div", 7), t.YNc(1, Eo, 2, 1, "ng-container", 5), t.qZA()), 2 & $e) {
      const nt = t.oxw();
      t.xp6(1), t.Q6J("ngForOf", nt.postfixIcons);
    }
  }
  const br = ["*"];
  let Pr = (() => {
    class $e {
      get prefixIcons() {
        return this.availableIcons.filter(nt => "prefix" === nt.position);
      }
      get postfixIcons() {
        return this.availableIcons.filter(nt => "postfix" === nt.position);
      }
    }
    return $e.ɵfac = function (nt) {
      return new (nt || $e)();
    }, $e.ɵcmp = t.Xpm({
      type: $e,
      selectors: [["dp-icon-wrapper"]],
      inputs: {
        availableIcons: "availableIcons"
      },
      ngContentSelectors: br,
      decls: 5,
      vars: 2,
      consts: [[1, "icon-wrapper__container"], ["class", "icon-wrapper__prefix", 4, "ngIf"], [1, "icon-wrapper__content"], ["class", "icon-wrapper__postfix", 4, "ngIf"], [1, "icon-wrapper__prefix"], [4, "ngFor", "ngForOf"], [3, "icon"], [1, "icon-wrapper__postfix"]],
      template: function (nt, si) {
        1 & nt && (t.F$t(), t.TgZ(0, "div", 0), t.YNc(1, Yi, 2, 1, "div", 1), t.TgZ(2, "div", 2), t.Hsn(3), t.qZA(), t.YNc(4, Fo, 2, 1, "div", 3), t.qZA()), 2 & nt && (t.xp6(1), t.Q6J("ngIf", si.prefixIcons.length > 0), t.xp6(3), t.Q6J("ngIf", si.postfixIcons.length > 0));
      },
      dependencies: [e.sg, e.O5, qn],
      styles: [".icon-wrapper__container[_ngcontent-%COMP%]{display:flex;align-items:center}.icon-wrapper__prefix[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:calc(var(--lu-base-gutter) / 2)}.icon-wrapper__content[_ngcontent-%COMP%]{flex:1}.icon-wrapper__postfix[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:calc(var(--lu-base-gutter) / 2)}"],
      changeDetection: 0
    }), $e;
  })();
  const qo = ["*"];
  let Yo = (() => {
      class $e {
        constructor(nt) {
          this.iconData = nt;
        }
        get availableIcons() {
          return this.iconData?.[this.terminologyName]?.[this.terminologyCode] || [];
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36($t, 8));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-icon-terminology-wrapper"]],
        inputs: {
          terminologyName: "terminologyName",
          terminologyCode: "terminologyCode"
        },
        ngContentSelectors: qo,
        decls: 2,
        vars: 1,
        consts: [[3, "availableIcons"]],
        template: function (nt, si) {
          1 & nt && (t.F$t(), t.TgZ(0, "dp-icon-wrapper", 0), t.Hsn(1), t.qZA()), 2 & nt && t.Q6J("availableIcons", si.availableIcons);
        },
        dependencies: [Pr],
        changeDetection: 0
      }), $e;
    })(),
    wr = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, a.O, m.aI, d.i, W.o, M.h]
      }), $e;
    })(),
    oo = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, M.h, a.O, wr]
      }), $e;
    })(),
    Di = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, M.h, a.O, wr, oo]
      }), $e;
    })();
  const Ci = (0, te.PH)("[Terminology] Get Terminology Init", (0, te.Ky)()),
    lo = (0, te.PH)("[Terminology] Get Terminology Success", (0, te.Ky)()),
    jo = (0, te.PH)("[Terminology] Reset Terminology", (0, te.Ky)()),
    Go = (0, te.PH)("[Terminology] Actual Terminology", (0, te.Ky)()),
    ji = (0, te.PH)("[Terminology] Set State", (0, te.Ky)());
  var ti = Object.freeze({
      __proto__: null,
      actualTerminology: Go,
      getTerminology: Ci,
      getTerminologySuccess: lo,
      resetTerminology: jo,
      setState: ji
    }),
    fi = (() => ((fi || (fi = {})).INIT = "INIT", fi))();
  let Fi = (() => {
    class $e {
      constructor(nt) {
        this.store = nt;
      }
      emit(nt, si) {
        nt === fi.INIT ? this.store.dispatch(Ci({
          request: [{
            ...si
          }]
        })) : console.error("ERROR: TerminologyRadioGroupControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
      }
    }
    return $e.ɵfac = function (nt) {
      return new (nt || $e)(t.LFG(te.yh));
    }, $e.ɵprov = t.Yz7({
      token: $e,
      factory: $e.ɵfac
    }), $e;
  })();
  const ki = {
      status: "INITIAL",
      total: 0
    },
    Ei = "terminology",
    Wt = (0, te.Lq)({}, (0, te.on)(Ci, ($e, {
      request: Hn
    }) => function Oi($e, Hn) {
      let nt = {
        ...$e
      };
      return Hn.forEach(si => {
        nt = {
          ...Qi(nt, si, Oo => Ps(Oo, si) ? {
            status: "PENDING",
            total: 0
          } : us(Oo) ? {
            ...Oo,
            status: "PENDING"
          } : Oo)
        };
      }), nt;
    }($e, Hn)), (0, te.on)(lo, ($e, {
      data: Hn
    }) => function Ji($e, Hn) {
      let nt = {
        ...$e
      };
      return Hn.forEach(si => {
        const {
          response: Oo,
          error: xs
        } = si;
        nt = {
          ...Qi(nt, si, Ne => Oo ? function oi($e, Hn) {
            return {
              ...$e,
              status: "SUCCESS",
              data: Hn ? hs(Hn, $e) : $e.data,
              filterText: Hn?.filterText,
              filter: Hn?.filter,
              paging: Hn?.paging,
              total: Hn.total ?? 0
            };
          }(Ne, Oo) : function yo($e, Hn) {
            return {
              ...$e,
              status: "FAILURE",
              error: Hn
            };
          }(Ne, xs))
        };
      }), nt;
    }($e, Hn)), (0, te.on)(jo, ($e, {
      data: Hn
    }) => function Ao($e, Hn) {
      return Qi($e, Hn, () => ki);
    }($e, Hn)), (0, te.on)(Go, ($e, {
      data: Hn
    }) => function Sr($e, Hn) {
      return Qi($e, Hn, nt => Ps(nt, Hn) ? ki : nt);
    }($e, Hn)), (0, te.on)(ji, ($e, {
      state: Hn
    }) => Hn));
  function us($e) {
    return !$e.data || $e.total !== $e.data.length;
  }
  function Ps($e, Hn) {
    return JSON.stringify(Hn.filter) !== JSON.stringify($e.filter) || Hn.filterText !== $e.filterText;
  }
  function hs($e, Hn) {
    return !Hn.data || (Hn.paging?.pageNumber ?? 0) > ($e.paging?.pageNumber ?? 0) ? $e.items : [...(Hn.data ?? []), ...($e.items ?? [])];
  }
  function Qi($e, Hn, nt) {
    const si = {
        ...$e
      },
      {
        terminologyName: Oo,
        featureKey: xs
      } = Hn,
      Ne = si[Oo] && si[Oo][xs] || ki;
    return {
      ...si,
      [Oo]: {
        ...si[Oo],
        [xs]: nt(Ne)
      }
    };
  }
  const Qo = (0, te.ZF)(Ei),
    Kr = ($e, Hn) => (0, te.P1)(Qo, nt => nt[$e] && nt[$e][Hn] || ki);
  var ra = Object.freeze({
    __proto__: null,
    selectTerminologies: ($e, Hn) => (0, te.P1)(Qo, nt => $e.map(si => nt[si] && nt[si][Hn] || {
      status: "INITIAL",
      data: void 0,
      error: new Error("Terminology not loaded"),
      total: 0
    })),
    selectTerminologyItem: Kr,
    selectTerminologyState: Qo
  });
  let Or = (() => {
    class $e {
      constructor(nt) {
        this.store = nt;
      }
      init(nt) {
        return this.store.select(Kr(nt.terminologyName, nt.featureKey));
      }
    }
    return $e.ɵfac = function (nt) {
      return new (nt || $e)(t.LFG(te.yh));
    }, $e.ɵprov = t.Yz7({
      token: $e,
      factory: $e.ɵfac
    }), $e;
  })();
  class Fs {
    static getExpandItemInState(Hn, nt) {
      if (nt) return this.getExpandItem(Hn.data || [], nt);
    }
    static getContains(Hn) {
      return Hn.data ? Hn.data.map(nt => ({
        ...nt
      })) : [];
    }
    static getExpandItem(Hn, nt, si = "code") {
      if (nt) return Hn.find(Oo => Oo[si]?.toString() === nt);
    }
    static sortByField(Hn, nt = "display") {
      return [...Hn].sort((si, Oo) => "string" == typeof si[nt] ? (si[nt] ?? "").toString().localeCompare((Oo[nt] ?? "").toString()) : "number" == typeof si[nt] ? (si[nt] ?? 0) > (Oo[nt] ?? 0) ? -1 : 1 : 0);
    }
  }
  let xa = (() => {
      class $e {
        transform(nt) {
          return {
            status: nt.status,
            items: Fs.getContains(nt)
          };
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "terminologyCheckboxGroupViewData",
        type: $e,
        pure: !0
      }), $e;
    })(),
    rs = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })();
  function Js($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-checkbox", 6)(1, "dp-icon-terminology-wrapper", 7)(2, "span"), t._uU(3), t.qZA()()()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt), t.xp6(1), t.Q6J("terminologyName", si.terminologyName)("terminologyCode", nt.code), t.xp6(2), t.Oqu(si.displayValueFn(nt));
    }
  }
  function ho($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-checkbox-group", 4), t.YNc(1, Js, 4, 4, "lu-checkbox", 5), t.ALo(2, "terminologyCheckboxGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("compareFn", si.compareTerminologyItems)("formControl", si.formControl)("itemsOrientation", si.itemsOrientation), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 4, nt).items);
    }
  }
  function uo($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function ri($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, ho, 3, 6, "lu-checkbox-group", 2), t.YNc(3, uo, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let Yt = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.itemsOrientation = "vertical", this.formControl = new ke.NI(null), this.displayValueFn = Oo => Oo.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        writeValue(nt) {
          this.formControl.setValue(nt);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }), this.init();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(fi.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        get compareTerminologyItems() {
          return (nt, si) => "boolean" == typeof nt && "boolean" == typeof si && nt === si || !!nt && !!si && nt.code === si.code;
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, ae.R)(this.destroy$));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(Fi), t.Y36(Or));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-checkbox-group"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          itemsOrientation: "itemsOrientation",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([Or, Fi, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [3, "compareFn", "formControl", "itemsOrientation", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [3, "compareFn", "formControl", "itemsOrientation"], ["hlDataTestRole", "checkbox", 3, "value", 4, "ngFor", "ngForOf"], ["hlDataTestRole", "checkbox", 3, "value"], [3, "terminologyName", "terminologyCode"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, ri, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, mt.fd, b.$m, A.d, Yo, e.Ov, xa],
        styles: ["lu-checkbox[_ngcontent-%COMP%]   .lu-checkbox-wrapper[_ngcontent-%COMP%]{justify-content:center;align-items:center}"],
        changeDetection: 0
      }), $e;
    })(),
    jt = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, mt.mQ, b.Nu, A.c, rs, Di]
      }), $e;
    })();
  function hn($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-checkbox", 6)(1, "dp-icon-terminology-wrapper", 7)(2, "span"), t._uU(3), t.qZA()()()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt), t.xp6(1), t.Q6J("terminologyName", si.terminologyName)("terminologyCode", nt.code), t.xp6(2), t.Oqu(si.displayValueFn(nt));
    }
  }
  function tn($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-checkbox-group", 4), t.YNc(1, hn, 4, 4, "lu-checkbox", 5), t.ALo(2, "terminologyCheckboxGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("compareFn", si.compareTerminologyItems)("formControl", si.formControl)("itemsOrientation", si.itemsOrientation), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 4, nt).items);
    }
  }
  function di($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function Gn($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, tn, 3, 6, "lu-checkbox-group", 2), t.YNc(3, di, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let dn = (() => {
      class $e extends Yt {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-checkbox-group"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([Or, Fi, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [3, "compareFn", "formControl", "itemsOrientation", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [3, "compareFn", "formControl", "itemsOrientation"], ["hlDataTestRole", "checkbox", 3, "value", 4, "ngFor", "ngForOf"], ["hlDataTestRole", "checkbox", 3, "value"], [3, "terminologyName", "terminologyCode"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Gn, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, mt.fd, b.$m, A.d, Yo, e.Ov, xa],
        styles: ["lu-checkbox[_ngcontent-%COMP%]   .lu-checkbox-wrapper[_ngcontent-%COMP%]{justify-content:center;align-items:center}"],
        changeDetection: 0
      }), $e;
    })(),
    Ro = (() => {
      class $e {
        transform(nt) {
          return nt.map(si => ({
            ...si,
            code: String(si.code),
            display: String(si.display)
          }));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "normalization",
        type: $e,
        pure: !0
      }), $e;
    })(),
    _r = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })(),
    js = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })(),
    ws = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, mt.mQ, b.Nu, A.c, js, rs, Di]
      }), $e;
    })();
  function Ws($e, Hn) {
    return !!$e && !!Hn && $e.code === Hn.code;
  }
  function sa($e, Hn) {
    return $e?.code && Hn?.code ? $e.code === Hn.code : $e === Hn;
  }
  let ua = class {
    static getViewData(Hn, nt = []) {
      return {
        status: Hn.state.status,
        items: this.convertValuesToString([...nt, ...(Hn.state.data ?? [])]),
        filterText: Hn.state.filterText,
        paging: Hn.state.paging
      };
    }
    static convertValuesToString(Hn) {
      return Hn.map(nt => ({
        ...nt,
        code: String(nt.code),
        display: String(nt.display)
      }));
    }
    static selectableItemDisabledFn() {
      return Hn => !!Hn.selectable && "false" === Hn.selectable;
    }
  };
  var da = (() => {
    return ($e = da || (da = {})).LOAD = "LOAD", $e.UPDATE_FILTER = "UPDATE_FILTER", da;
    var $e;
  })();
  let na = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          switch (nt) {
            case da.LOAD:
              this.store.dispatch(Ci({
                request: [{
                  ...si
                }]
              }));
              break;
            case da.UPDATE_FILTER:
              this.store.dispatch(Go({
                data: si
              }));
              break;
            default:
              console.error("ERROR: TerminologyMultipleComboboxControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
          }
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    Qs = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return (0, ye.a)([this.store.select(Kr(nt.terminologyName, nt.featureKey))]).pipe((0, pe.U)(([si]) => ({
            state: si
          })));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    ma = (() => {
      class $e extends F.HY {
        constructor(nt, si) {
          super(nt, void 0, si), this.changeDetectorRef = nt, this.ngControl = si;
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(t.sBO), t.Y36(ke.a5, 10));
      }, $e.ɵdir = t.lG2({
        type: $e,
        selectors: [["", "dpChipMultipleHost", ""]],
        features: [t._Bn([{
          provide: Le.fU,
          useExisting: $e
        }, {
          provide: Le.pP,
          useValue: !0
        }]), t.qOj]
      }), $e;
    })();
  function Xs($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 12), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function Ks($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 10), t.YNc(1, Xs, 2, 1, "span", 11)), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("innerHTML", si.displayValueFn(nt), t.oJD), t.xp6(1), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Va($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 17), t._uU(1, "Загрузка"), t.qZA());
  }
  function ba($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 18), t._uU(1, "По вашему запросу ничего не найдено"), t.qZA());
  }
  function qs($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 19)(1, "span", 20), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 21), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(4);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function Ri($e, Hn) {
    if (1 & $e && (t.ynx(0, 13), t.YNc(1, Va, 2, 0, "lu-preloader", 14), t.YNc(2, ba, 2, 0, "div", 15), t.YNc(3, qs, 5, 0, "div", 16), t.BQk()), 2 & $e) {
      const nt = t.oxw(2).ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function $o($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 7), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw().ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.YNc(1, Ks, 2, 2, "ng-template", null, 8, t.W1O), t.qZA(), t.YNc(3, Ri, 4, 4, "ng-template", null, 9, t.W1O);
    }
    if (2 & $e) {
      const nt = t.MAs(2),
        si = t.MAs(4),
        Oo = t.oxw().ngIf,
        xs = t.oxw();
      t.Q6J("formControl", xs.formControl)("items", Oo.items)("itemDisabledFn", xs.itemDisabledFn)("itemContent", nt)("emptyContent", si)("compareFn", xs.compareTerminologyItems);
    }
  }
  function ci($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-chip", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t._uU(3), t.ALo(4, "async"), t._UZ(5, "lu-combobox-controls", 3), t.qZA(), t.TgZ(6, "lu-dropdown", 4, 5), t.YNc(8, $o, 5, 6, "ng-template", null, 6, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = t.MAs(2),
        si = t.MAs(7),
        Oo = t.MAs(9),
        xs = t.oxw();
      t.xp6(3), t.hij(" ", t.lcZ(4, 8, xs.displayChipValue$), " "), t.xp6(2), t.Q6J("dropdown", si)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", Oo)("origin", nt)("closeIfOutsideClick", !0)("notFocusClosestElement", !0);
    }
  }
  let Gi = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.placeholder = "Выберите из списка", this.joinSeparator = ",", this.splitCount = 1, this.withPaging = !1, this.externalValues = [], this.startPageNumber = 0, this.defaultPageSize = 25, this.formControl = new ke.NI([]), this.itemDisabledFn = ua.selectableItemDisabledFn(), this.displayValueFn = xs => xs.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {};
          const Oo = this.changeValueEvent().pipe((0, be.d)(1));
          Oo.subscribe(xs => {
            this.onChange(xs);
          }), this.displayChipValue$ = Oo.pipe((0, le.O)(this.formControl.value), (0, pe.U)(xs => this.getChipText(xs)));
        }
        ngOnChanges(nt) {
          nt.filter && JSON.stringify(nt.filter.currentValue) !== JSON.stringify(nt.filter.previousValue) && this.controllerService.emit(da.UPDATE_FILTER, {
            terminologyName: this.terminologyName,
            featureKey: this.featureKey,
            filter: nt.filter.currentValue
          });
        }
        writeValue(nt) {
          const si = Array.isArray(nt) && 0 !== nt.length;
          this.formControl.setValue(si ? nt : []);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }), this.viewData$ = this.model$.pipe((0, pe.U)(nt => ua.getViewData(nt, this.externalValues)));
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        onScroll(nt, si) {
          0 === nt && "SUCCESS" === si.status && this.withPaging && this.controllerService.emit(da.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: si.filterText,
            filter: this.filter,
            paging: {
              pageSize: si.paging?.pageSize,
              pageNumber: (si.paging?.pageNumber ?? 0) + 1
            }
          });
        }
        loadWithPaging(nt) {
          this.controllerService.emit(da.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: nt,
            filter: this.filter,
            paging: {
              pageNumber: this.startPageNumber,
              pageSize: this.defaultPageSize
            }
          });
        }
        get compareTerminologyItems() {
          return Ws;
        }
        getChipText(nt) {
          if (!nt || !nt.length) return this.placeholder;
          const si = nt.slice(0, this.splitCount).map(xs => xs.display).join(this.joinSeparator),
            Oo = nt.slice(this.splitCount).length;
          return `\u0412\u044b\u0431\u0440\u0430\u043d\u043e: ${si}${Oo > 0 ? `, \u0435\u0449\u0435: ${Oo}` : ""}`;
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, n.x)(), (0, ae.R)(this.destroy$));
        }
        loadList() {
          this.withPaging ? this.loadWithPaging("") : this.controllerService.emit(da.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        onReload() {
          this.loadList();
        }
        onOpen(nt) {
          ["FAILURE", "INITIAL"].includes(nt) && this.loadList();
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(na), t.Y36(Qs));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-chip-multiple-combobox"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          placeholder: "placeholder",
          joinSeparator: "joinSeparator",
          splitCount: "splitCount",
          withPaging: "withPaging",
          externalValues: "externalValues",
          startPageNumber: "startPageNumber",
          defaultPageSize: "defaultPageSize",
          filter: "filter",
          itemDisabledFn: "itemDisabledFn",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([na, Qs, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["luDropdownOrigin", "", 3, "focusin"], ["origin", "luDropdownOrigin"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-table-menu", "positions", "bottom-left", 3, "content", "origin", "closeIfOutsideClick", "notFocusClosestElement"], ["chipDropdown", ""], ["content", ""], ["dpChipMultipleHost", "", 1, "chip-data-list", 3, "formControl", "items", "itemDisabledFn", "itemContent", "emptyContent", "compareFn", "optionsScroll"], ["itemContent", ""], ["emptyContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, ci, 10, 10, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.viewData$));
        },
        dependencies: [e.O5, e.RF, e.n9, N.r, I.n, ut.q, O.$, Ct.l, ke.JJ, ke.oH, A.d, m.NZ, ma, e.Ov],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}"],
        changeDetection: 0
      }), $e;
    })(),
    Fn = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez]
      }), $e;
    })(),
    zi = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, N.U, I.O, ut.H, O.J, Ct.X, ke.UX, A.c, m.aI, Fn]
      }), $e;
    })();
  function Io($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 12), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function gi($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 10), t.YNc(1, Io, 2, 1, "span", 11)), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("innerHTML", si.displayValueFn(nt), t.oJD), t.xp6(1), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Kt($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 17), t._uU(1, "Загрузка"), t.qZA());
  }
  function Vt($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 18), t._uU(1, "По вашему запросу ничего не найдено"), t.qZA());
  }
  function Pn($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 19)(1, "span", 20), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 21), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(4);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function pi($e, Hn) {
    if (1 & $e && (t.ynx(0, 13), t.YNc(1, Kt, 2, 0, "lu-preloader", 14), t.YNc(2, Vt, 2, 0, "div", 15), t.YNc(3, Pn, 5, 0, "div", 16), t.BQk()), 2 & $e) {
      const nt = t.oxw(2).ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function xo($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 7), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw().ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.YNc(1, gi, 2, 2, "ng-template", null, 8, t.W1O), t.qZA(), t.YNc(3, pi, 4, 4, "ng-template", null, 9, t.W1O);
    }
    if (2 & $e) {
      const nt = t.MAs(2),
        si = t.MAs(4),
        Oo = t.oxw().ngIf,
        xs = t.oxw();
      t.Q6J("formControl", xs.formControl)("items", Oo.items)("itemDisabledFn", xs.itemDisabledFn)("itemContent", nt)("emptyContent", si)("compareFn", xs.compareTerminologyItems);
    }
  }
  function No($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-chip", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t._uU(3), t.ALo(4, "async"), t._UZ(5, "lu-combobox-controls", 3), t.qZA(), t.TgZ(6, "lu-dropdown", 4, 5), t.YNc(8, xo, 5, 6, "ng-template", null, 6, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = t.MAs(2),
        si = t.MAs(7),
        Oo = t.MAs(9),
        xs = t.oxw();
      t.xp6(3), t.hij(" ", t.lcZ(4, 8, xs.displayChipValue$), " "), t.xp6(2), t.Q6J("dropdown", si)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", Oo)("origin", nt)("closeIfOutsideClick", !0)("notFocusClosestElement", !0);
    }
  }
  let Ko = (() => {
      class $e extends Gi {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.viewData$ = (0, fe.of)({
            status: "SUCCESS",
            items: this.staticTerminology
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-chip-multiple-combobox"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([na, Qs, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["luDropdownOrigin", "", 3, "focusin"], ["origin", "luDropdownOrigin"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-table-menu", "positions", "bottom-left", 3, "content", "origin", "closeIfOutsideClick", "notFocusClosestElement"], ["chipDropdown", ""], ["content", ""], ["dpChipMultipleHost", "", 1, "chip-data-list", 3, "formControl", "items", "itemDisabledFn", "itemContent", "emptyContent", "compareFn", "optionsScroll"], ["itemContent", ""], ["emptyContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, No, 10, 10, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.viewData$));
        },
        dependencies: [e.O5, e.RF, e.n9, N.r, I.n, ut.q, O.$, Ct.l, ke.JJ, ke.oH, A.d, m.NZ, ma, e.Ov],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}"],
        changeDetection: 0
      }), $e;
    })(),
    Mi = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, N.U, I.O, ut.H, O.J, Ct.X, ke.UX, A.c, m.aI, Fn]
      }), $e;
    })();
  var It = (() => ((It || (It = {})).INIT = "INIT", It))();
  let At = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          nt === It.INIT ? this.store.dispatch(Ci({
            request: [{
              ...si
            }]
          })) : console.error("ERROR: TerminologyRadioGroupControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    _n = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return this.store.select(Kr(nt.terminologyName, nt.featureKey));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })();
  function it($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-option", 10), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit;
      t.Q6J("value", nt), t.xp6(1), t.hij(" ", nt.display, " ");
    }
  }
  function _e($e, Hn) {
    if (1 & $e && t.YNc(0, it, 2, 2, "lu-option", 9), 2 & $e) {
      const nt = t.oxw(2).ngIf;
      t.Q6J("ngForOf", nt.data);
    }
  }
  function gt($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-chip", 4), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.MAs(4);
        return t.KtG(Oo.toggle());
      }), t._uU(1), t._UZ(2, "lu-svg-icon", 5), t.TgZ(3, "lu-dropdown", 6, 7), t.YNc(5, _e, 1, 1, "ng-template", null, 8, t.W1O), t.qZA()();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.MAs(6),
        Oo = t.oxw(2);
      t.Q6J("type", "button")("formControl", Oo.formControl), t.xp6(1), t.hij(" ", (null == Oo.formControl.value ? null : Oo.formControl.value.display) || "Выберите значение", " "), t.xp6(1), t.Q6J("size", 16)("luChevronRotate", nt), t.xp6(1), t.Q6J("content", si);
    }
  }
  function ni($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 11), t._uU(1, "Загрузка"), t.qZA());
  }
  function So($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, gt, 7, 6, "lu-chip", 2), t.YNc(3, ni, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let Er = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.formControl = new ke.NI(null), this.onChange = () => {}, this.onTouched = () => {}, this.destroy$ = new J.x(), this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }), this.init();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(It.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        writeValue(nt) {
          this.formControl.setValue(nt);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, ae.R)(this.destroy$));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(At), t.Y36(_n));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-chip-select"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName"
        },
        features: [t._Bn([_n, At, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "dp-ul-chip-select", "luDropdownOrigin", "", "luDropdownButton", "", 3, "type", "formControl", "click", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["luDropdownOrigin", "", "luDropdownButton", "", 1, "dp-ul-chip-select", 3, "type", "formControl", "click"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "select-chevron", 3, "size", "luChevronRotate"], ["positions", "bottom-left", 3, "content"], ["chipSelect", ""], ["content", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, So, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, N.r, Ft.G, M.q, Et.c, O.$, L.k, I.n, C.zY, A.d, e.Ov],
        styles: ["[_nghost-%COMP%]{display:block}.dp-ul-chip-select[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:24px}.select-chevron[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-54)}"],
        changeDetection: 0
      }), $e;
    })(),
    Br = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, N.U, Ft.V, M.h, Et.p, O.J, L.X, I.O, C.W1, A.c]
      }), $e;
    })();
  function vr($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-option", 10), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit;
      t.Q6J("value", nt), t.xp6(1), t.hij(" ", nt.display, " ");
    }
  }
  function zr($e, Hn) {
    if (1 & $e && t.YNc(0, vr, 2, 2, "lu-option", 9), 2 & $e) {
      const nt = t.oxw(2).ngIf;
      t.Q6J("ngForOf", nt.data);
    }
  }
  function ks($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-chip", 4), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.MAs(4);
        return t.KtG(Oo.toggle());
      }), t._uU(1), t._UZ(2, "lu-svg-icon", 5), t.TgZ(3, "lu-dropdown", 6, 7), t.YNc(5, zr, 1, 1, "ng-template", null, 8, t.W1O), t.qZA()();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.MAs(6),
        Oo = t.oxw(2);
      t.Q6J("type", "button")("formControl", Oo.formControl), t.xp6(1), t.hij(" ", (null == Oo.formControl.value ? null : Oo.formControl.value.display) || "Выберите значение", " "), t.xp6(1), t.Q6J("size", 16)("luChevronRotate", nt), t.xp6(1), t.Q6J("content", si);
    }
  }
  function aa($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 11), t._uU(1, "Загрузка"), t.qZA());
  }
  function Ka($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, ks, 7, 6, "lu-chip", 2), t.YNc(3, aa, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let ja = (() => {
      class $e extends Er {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            error: void 0,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-chip-select"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([_n, At, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "dp-ul-chip-select", "luDropdownOrigin", "", "luDropdownButton", "", 3, "type", "formControl", "click", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["luDropdownOrigin", "", "luDropdownButton", "", 1, "dp-ul-chip-select", 3, "type", "formControl", "click"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "select-chevron", 3, "size", "luChevronRotate"], ["positions", "bottom-left", 3, "content"], ["chipSelect", ""], ["content", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Ka, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, N.r, Ft.G, M.q, Et.c, O.$, L.k, I.n, C.zY, A.d, e.Ov],
        styles: ["[_nghost-%COMP%]{display:block}.dp-ul-chip-select[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:24px}.select-chevron[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-54)}"],
        changeDetection: 0
      }), $e;
    })(),
    ul = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, N.U, Ft.V, M.h, Et.p, O.J, L.X, I.O, C.W1, A.c]
      }), $e;
    })(),
    Ln = (() => {
      class $e {
        transform(nt) {
          return {
            status: nt.status,
            items: Fs.getContains(nt)
          };
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "terminologyChipsGroupViewData",
        type: $e,
        pure: !0
      }), $e;
    })(),
    en = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })();
  var mi = (() => ((mi || (mi = {})).INIT = "INIT", mi))();
  let ro = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          nt === mi.INIT ? this.store.dispatch(Ci({
            request: [{
              ...si
            }]
          })) : console.error("ERROR: TerminologyRadioGroupControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    cr = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return this.store.select(Kr(nt.terminologyName, nt.featureKey));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })();
  function jr($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chip", 6), t._UZ(1, "div", 7), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt.code), t.xp6(1), t.Q6J("innerHTML", si.displayValueFn(nt), t.oJD);
    }
  }
  function as($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chips-group", 4), t.YNc(1, jr, 2, 2, "lu-chip", 5), t.ALo(2, "terminologyChipsGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("formControl", si.formControl)("luChipsGroupType", si.groupType)("luChipsGroupName", si.groupName), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 4, nt).items);
    }
  }
  function Da($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function vo($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, as, 3, 6, "lu-chips-group", 2), t.YNc(3, Da, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let As = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.groupType = "radio", this.groupName = this.generateRandomGroupName(), this.formControl = new ke.NI([], {
            nonNullable: !0
          }), this.displayValueFn = Oo => Oo.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        writeValue(nt) {
          Array.isArray(nt) ? this.formControl.setValue(nt.map(si => si.code)) : this.formControl.setValue(nt?.code ? [nt.code] : []);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }).pipe((0, be.d)(1)), this.init();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(mi.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, Se.w)(nt => this.getTerminologyItemsInModel(nt)), (0, pe.U)(nt => this.covertTerminologyItemsByControlType(nt)), (0, ae.R)(this.destroy$));
        }
        covertTerminologyItemsByControlType(nt) {
          return "radio" === this.groupType ? nt[0] ?? null : nt;
        }
        getTerminologyItemsInModel(nt) {
          return this.model$.pipe((0, pe.U)(si => nt.map(Oo => (si.data ?? []).find(xs => xs.code === Oo))));
        }
        generateRandomGroupName() {
          return Math.floor(1e4 + 9e4 * Math.random()).toString();
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(ro), t.Y36(cr));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-chips-group"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          groupType: "groupType",
          groupName: "groupName",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([cr, ro, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "container", 3, "formControl", "luChipsGroupType", "luChipsGroupName", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [1, "container", 3, "formControl", "luChipsGroupType", "luChipsGroupName"], ["class", "chip-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "chip-item", 3, "value"], ["lu-text", "", 3, "innerHTML"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, vo, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, A.d, v.P, N.r, f.b, E.P, m.NZ, e.Ov, Ln],
        styles: [".container[_ngcontent-%COMP%]{display:flex}.chip-item[_ngcontent-%COMP%]:not(:first-child){margin-left:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), $e;
    })(),
    dl = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, A.c, v.m, N.U, f.B, en, E.T, m.aI]
      }), $e;
    })();
  function pn($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chip", 6), t._UZ(1, "div", 7), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt.code), t.xp6(1), t.Q6J("innerHTML", si.displayValueFn(nt), t.oJD);
    }
  }
  function sn($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chips-group", 4), t.YNc(1, pn, 2, 2, "lu-chip", 5), t.ALo(2, "terminologyChipsGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("formControl", si.formControl)("luChipsGroupType", si.groupType)("luChipsGroupName", si.groupName), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 4, nt).items);
    }
  }
  function Jt($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function Si($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, sn, 3, 6, "lu-chips-group", 2), t.YNc(3, Jt, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let mn = (() => {
      class $e extends As {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-chips-group"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([cr, ro, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "container", 3, "formControl", "luChipsGroupType", "luChipsGroupName", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [1, "container", 3, "formControl", "luChipsGroupType", "luChipsGroupName"], ["class", "chip-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "chip-item", 3, "value"], ["lu-text", "", 3, "innerHTML"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Si, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, A.d, v.P, N.r, f.b, E.P, e.Ov, Ln],
        styles: [".container[_ngcontent-%COMP%]{display:flex}.chip-item[_ngcontent-%COMP%]:not(:first-child){margin-left:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), $e;
    })(),
    Pe = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, A.c, v.m, N.U, f.B, en, E.T]
      }), $e;
    })();
  var at = (() => {
    return ($e = at || (at = {})).LOAD = "LOAD", $e.UPDATE_FILTER = "UPDATE_FILTER", at;
    var $e;
  })();
  let Zt = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          switch (nt) {
            case at.UPDATE_FILTER:
              this.store.dispatch(Go({
                data: si
              }));
              break;
            case at.LOAD:
              this.store.dispatch(Ci({
                request: [{
                  ...si
                }]
              }));
              break;
            default:
              console.error("ERROR: TerminologyComboboxControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
          }
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    Li = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return this.store.select(Kr(nt.terminologyName, nt.featureKey)).pipe((0, pe.U)(si => ({
            state: si
          })));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })();
  class mo {
    static getViewData(Hn, nt = []) {
      return {
        status: Hn.state.status,
        items: this.convertValuesToString([...nt, ...(Hn.state.data ?? [])]),
        filterText: Hn.state.filterText,
        paging: Hn.state.paging
      };
    }
    static convertValuesToString(Hn) {
      return Hn.map(nt => ({
        ...nt,
        code: String(nt.code),
        display: String(nt.display)
      }));
    }
    static selectableItemDisabledFn() {
      return Hn => !!Hn.selectable && "false" === Hn.selectable;
    }
  }
  let Xo = (() => {
      class $e {
        transform(nt, si) {
          return nt ? mo.getViewData(nt, si) : {
            status: "INITIAL",
            items: []
          };
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "terminologyComboboxViewData",
        type: $e,
        pure: !0
      }), $e;
    })(),
    Cr = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })();
  function Xr($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 11), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function ys($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 9), t.ALo(1, "luHighlight"), t.YNc(2, Xr, 2, 1, "span", 10)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(3);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Hs($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list-group", 7), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw(2).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, ys, 3, 5, "ng-template", null, 8, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw(2).ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(7),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 6, t.lcZ(2, 9, si.items), Ne.textForFilter(Oo.searchText)))("itemGroupFn", Ne.groupByFn)("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs)("defineValueFn", Ne.defineValue);
    }
  }
  function la($e, Hn) {
    1 & $e && (t.ynx(0), t.YNc(1, Hs, 5, 11, "lu-data-list-group", 6), t.BQk());
  }
  function St($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 11), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function Wi($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 9), t.ALo(1, "luHighlight"), t.YNc(2, St, 2, 1, "span", 10)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(3);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Pt($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 13), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw(2).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, Wi, 3, 5, "ng-template", null, 8, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw(2).ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(7),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 5, t.lcZ(2, 8, si.items), Ne.textForFilter(Oo.searchText)))("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs)("defineValueFn", Ne.defineValue);
    }
  }
  function Ki($e, Hn) {
    1 & $e && t.YNc(0, Pt, 5, 10, "lu-data-list", 12);
  }
  function Nr($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 18)(1, "span", 19), t._uU(2, "По вашему запросу ничего не найдено"), t.qZA()());
  }
  function oa($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 20), t._uU(1, "Загрузка"), t.qZA());
  }
  function er($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 21)(1, "span", 19), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 22), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(3);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function Qr($e, Hn) {
    if (1 & $e && (t.ynx(0, 14), t.YNc(1, Nr, 3, 0, "div", 15), t.YNc(2, oa, 2, 0, "lu-preloader", 16), t.YNc(3, er, 5, 0, "div", 17), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function Il($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-combobox", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t.YNc(3, la, 2, 0, "ng-container", 3), t.YNc(4, Ki, 1, 0, "ng-template", null, 4, t.W1O), t.YNc(6, Qr, 4, 4, "ng-template", null, 5, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = Hn.ngIf,
        si = t.MAs(5),
        Oo = t.oxw();
      t.xp6(1), t.Q6J("placeholder", Oo.placeholder)("formControl", Oo.formControl)("clearButton", Oo.clearButton)("displayValueFn", Oo.comboboxDisplayValue(nt.items))("compareFn", Oo.compareTerminologyItems), t.xp6(2), t.Q6J("ngIf", Oo.groupBy)("ngIfElse", si);
    }
  }
  function Uc($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "div", 23)(2, "label", 24)(3, "lu-input-wrapper"), t._UZ(4, "input", 25), t.qZA()()(), t.BQk()), 2 & $e) {
      const nt = t.oxw();
      t.xp6(2), t.Q6J("lu-label", nt.otherTitle), t.xp6(2), t.Q6J("formControl", nt.otherItemDisplayControl);
    }
  }
  let Kl = (() => {
      class $e {
        get controlValue() {
          return this.formControl.value;
        }
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.placeholder = "", this.withPaging = !1, this.clearButton = !0, this.externalValues = [], this.otherTitle = "Наименование", this.searchTextLength = 3, this.startPageNumber = 0, this.defaultPageSize = 25, this.formControl = new ke.NI(null), this.otherItemDisplayControl = new ke.NI(null, ke.kI.required), this.defineValue = Oo => this.isOtherValue(Oo) ? {
            ...Oo,
            display: ""
          } : Oo, this.itemDisabledFn = mo.selectableItemDisabledFn(), this.displayValueFn = Oo => Oo.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.changeOtherItemDisplayValue(), this.changeOtherItemDisplayState(), this.onChange(Oo);
          }), this.otherItemDisplayChanges().subscribe(Oo => {
            this.onOtherItemDisplayChange(Oo);
          });
        }
        ngOnChanges(nt) {
          nt.filter && JSON.stringify(nt.filter.currentValue) !== JSON.stringify(nt.filter.previousValue) && this.controllerService.emit(at.UPDATE_FILTER, {
            terminologyName: this.terminologyName,
            featureKey: this.featureKey,
            filter: nt.filter.currentValue
          });
        }
        otherItemDisplayChanges() {
          return this.otherItemDisplayControl.valueChanges.pipe((0, n.x)(), (0, ae.R)(this.destroy$));
        }
        writeValue(nt) {
          this.formControl.setValue(nt);
        }
        groupByFn(nt) {
          return this.groupBy ? nt[this.groupBy] ?? "Прочие" : "Прочие";
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable(), this.changeOtherItemDisplayState(nt);
        }
        onOtherItemDisplayChange(nt) {
          this.controlValue ? this.isOtherValue(this.controlValue) ? this.writeValue({
            ...this.controlValue,
            display: nt ?? ""
          }) : this.writeValue(this.controlValue) : this.onChange(null);
        }
        changeOtherItemDisplayState(nt) {
          const si = this.otherItemDisplayControl.disabled,
            Oo = this.isOtherValue(this.controlValue);
          Oo && si && !nt && this.otherItemDisplayControl.enable(), (!Oo && !si || nt) && this.otherItemDisplayControl.disable();
        }
        changeOtherItemDisplayValue() {
          this.isOtherValue(this.formControl.value) && this.formControl.value && this.formControl.value?.display !== this.otherItemDisplayControl.value && this.otherItemDisplayControl.setValue(this.formControl.value.display);
        }
        validate() {
          return this.isOtherValue(this.formControl.value) && this.otherItemDisplayControl.invalid ? {
            required: !0
          } : null;
        }
        isOtherValue(nt) {
          return !!this.otherItemCode && !!nt && nt.code === this.otherItemCode;
        }
        textForFilter(nt) {
          return this.withPaging ? "" : nt;
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }).pipe((0, be.d)(1)), this.actualDataIfFilterDoesNotMatchModel();
        }
        loadList() {
          this.withPaging ? this.loadWithPaging() : this.controllerService.emit(at.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filter: this.filter
          });
        }
        ngAfterViewInit() {
          this.comboboxInputChanges();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        onScroll(nt, si) {
          0 === nt && "SUCCESS" === si.status && this.withPaging && this.controllerService.emit(at.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: si.filterText,
            filter: this.filter,
            paging: {
              pageSize: si.paging?.pageSize,
              pageNumber: (si.paging?.pageNumber ?? 0) + 1
            }
          });
        }
        loadWithPaging(nt) {
          this.controllerService.emit(at.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: nt,
            filter: this.filter,
            paging: {
              pageNumber: this.startPageNumber,
              pageSize: this.defaultPageSize
            }
          });
        }
        comboboxDisplayValue(nt) {
          const si = new Map(nt.map(Oo => [Oo.code, Oo]));
          return Oo => Oo ? this.getTerminologyDisplay(si, Oo) : "";
        }
        getTerminologyDisplay(nt, si) {
          return this.displayValueFn(nt.get(si.code) ?? si) || (this.isOtherValue(si) ? "Другое" : si.display);
        }
        get compareTerminologyItems() {
          return Ws;
        }
        comboboxInputChanges() {
          return this.comboboxCmp.inputChange.pipe((0, qe.h)(nt => this.withPaging && (!nt || nt.length >= this.searchTextLength)), (0, Rt.b)(300), (0, ae.R)(this.destroy$)).subscribe(nt => this.loadWithPaging(nt));
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, n.x)(), (0, ae.R)(this.destroy$));
        }
        onReload() {
          this.loadList();
        }
        onOpen(nt) {
          ["FAILURE", "INITIAL"].includes(nt) && this.loadList();
        }
        actualDataIfFilterDoesNotMatchModel() {
          this.model$.pipe((0, We.q)(1)).subscribe(nt => {
            "SUCCESS" === nt.state.status && JSON.stringify(nt.state.filter) !== JSON.stringify(this.filter) && this.controllerService.emit(at.UPDATE_FILTER, {
              terminologyName: this.terminologyName,
              featureKey: this.featureKey,
              filter: this.filter
            });
          });
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(Zt), t.Y36(Li));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-combobox"]],
        viewQuery: function (nt, si) {
          if (1 & nt && t.Gf(Dt.m, 5), 2 & nt) {
            let Oo;
            t.iGM(Oo = t.CRH()) && (si.comboboxCmp = Oo.first);
          }
        },
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          placeholder: "placeholder",
          withPaging: "withPaging",
          clearButton: "clearButton",
          externalValues: "externalValues",
          otherItemCode: "otherItemCode",
          otherTitle: "otherTitle",
          groupBy: "groupBy",
          searchTextLength: "searchTextLength",
          startPageNumber: "startPageNumber",
          defaultPageSize: "defaultPageSize",
          filter: "filter",
          itemDisabledFn: "itemDisabledFn",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([Zt, Li, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }, {
          provide: ke.Cf,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.TTD],
        decls: 4,
        vars: 7,
        consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "clearButton", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [4, "ngIf", "ngIfElse"], ["default", ""], ["emptyContent", ""], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], [3, "ngSwitch"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["lu-text", "", 1, "message"], [1, "message-text"], ["size", "inline-dropdown"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-link", "message-link__text", 3, "click"], [1, "__other-item"], [3, "lu-label"], ["luInput", "", "luInputString", "", 1, "other-input", 3, "formControl"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Il, 8, 7, "ng-container", 0), t.ALo(1, "terminologyComboboxViewData"), t.ALo(2, "async"), t.YNc(3, Uc, 5, 2, "ng-container", 0)), 2 & nt && (t.Q6J("ngIf", t.xi3(1, 2, t.lcZ(2, 5, si.model$), si.externalValues)), t.xp6(3), t.Q6J("ngIf", si.isOtherValue(si.controlValue)));
        },
        dependencies: [e.O5, e.RF, e.n9, Ct.l, h.HY, x.L, u.z, T.H, R.g, Dt.m, ke.Fj, ke.JJ, ke.oH, A.d, m.NZ, Ue.d, e.Ov, B.J, y.e, Xo, Ro],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    Wl = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, B.F, y.j, Ct.X, h.LA, x.f, u.Y, T.c, R.u, Dt.n, pt, ke.UX, A.c, m.aI, Ue.V, Cr, _r]
      }), $e;
    })();
  function nc($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 11), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function Zc($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 9), t.ALo(1, "luHighlight"), t.YNc(2, nc, 2, 1, "span", 10)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(3);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Yc($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list-group", 7), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw(2).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, Zc, 3, 5, "ng-template", null, 8, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw(2).ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(7),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 6, t.lcZ(2, 9, si.items), Ne.textForFilter(Oo.searchText)))("itemGroupFn", Ne.groupByFn)("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs)("defineValueFn", Ne.defineValue);
    }
  }
  function nu($e, Hn) {
    1 & $e && (t.ynx(0), t.YNc(1, Yc, 5, 11, "lu-data-list-group", 6), t.BQk());
  }
  function kl($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 11), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function mu($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 9), t.ALo(1, "luHighlight"), t.YNc(2, kl, 2, 1, "span", 10)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(3);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function Wc($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 13), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw(2).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, mu, 3, 5, "ng-template", null, 8, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw(2).ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(7),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 5, t.lcZ(2, 8, si.items), Ne.textForFilter(Oo.searchText)))("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs)("defineValueFn", Ne.defineValue);
    }
  }
  function gc($e, Hn) {
    1 & $e && t.YNc(0, Wc, 5, 10, "lu-data-list", 12);
  }
  function ir($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 18)(1, "span", 19), t._uU(2, "По вашему запросу ничего не найдено"), t.qZA()());
  }
  function Hr($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 20), t._uU(1, "Загрузка"), t.qZA());
  }
  function Ar($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 21)(1, "span", 19), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 22), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(3);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function Ds($e, Hn) {
    if (1 & $e && (t.ynx(0, 14), t.YNc(1, ir, 3, 0, "div", 15), t.YNc(2, Hr, 2, 0, "lu-preloader", 16), t.YNc(3, Ar, 5, 0, "div", 17), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function wa($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-combobox", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t.YNc(3, nu, 2, 0, "ng-container", 3), t.YNc(4, gc, 1, 0, "ng-template", null, 4, t.W1O), t.YNc(6, Ds, 4, 4, "ng-template", null, 5, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = Hn.ngIf,
        si = t.MAs(5),
        Oo = t.oxw();
      t.xp6(1), t.Q6J("placeholder", Oo.placeholder)("formControl", Oo.formControl)("clearButton", Oo.clearButton)("displayValueFn", Oo.comboboxDisplayValue(nt.items))("compareFn", Oo.compareTerminologyItems), t.xp6(2), t.Q6J("ngIf", Oo.groupBy)("ngIfElse", si);
    }
  }
  function Ua($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "div", 23)(2, "label", 24)(3, "lu-input-wrapper"), t._UZ(4, "input", 25), t.qZA()()(), t.BQk()), 2 & $e) {
      const nt = t.oxw();
      t.xp6(2), t.Q6J("lu-label", nt.otherTitle), t.xp6(2), t.Q6J("formControl", nt.otherItemDisplayControl);
    }
  }
  let hl = (() => {
      class $e extends Kl {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            state: {
              status: "SUCCESS",
              data: this.staticTerminology,
              total: this.staticTerminology.length
            }
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-combobox"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([Zt, Li, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 4,
        vars: 7,
        consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "clearButton", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [4, "ngIf", "ngIfElse"], ["default", ""], ["emptyContent", ""], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemGroupFn", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll", 4, "luData"], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "defineValueFn", "optionsScroll"], [3, "ngSwitch"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["lu-text", "", 1, "message"], [1, "message-text"], ["size", "inline-dropdown"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-link", "message-link__text", 3, "click"], [1, "__other-item"], [3, "lu-label"], ["luInput", "", "luInputString", "", 1, "other-input", 3, "formControl"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, wa, 8, 7, "ng-container", 0), t.ALo(1, "terminologyComboboxViewData"), t.ALo(2, "async"), t.YNc(3, Ua, 5, 2, "ng-container", 0)), 2 & nt && (t.Q6J("ngIf", t.xi3(1, 2, t.lcZ(2, 5, si.model$), si.externalValues)), t.xp6(3), t.Q6J("ngIf", si.isOtherValue(si.controlValue)));
        },
        dependencies: [e.O5, e.RF, e.n9, Ct.l, Ue.d, R.g, h.HY, x.L, T.H, Dt.m, ke.Fj, ke.JJ, ke.oH, A.d, m.NZ, u.z, e.Ov, B.J, y.e, Xo, Ro],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    va = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, B.F, y.j, Ct.X, Ue.V, R.u, h.LA, x.f, T.c, pt, Dt.n, ke.UX, A.c, m.aI, u.Y, Cr, _r]
      }), $e;
    })();
  class wc {
    static getViewData(Hn, nt = []) {
      return {
        status: Hn.state.status,
        items: this.convertValuesToString([...nt, ...(Hn.state.data ?? [])]),
        filterText: Hn.state.filterText,
        paging: Hn.state.paging
      };
    }
    static convertValuesToString(Hn) {
      return Hn.map(nt => ({
        ...nt,
        code: String(nt.code),
        display: String(nt.display)
      }));
    }
    static selectableItemDisabledFn() {
      return Hn => !!Hn.selectable && "false" === Hn.selectable;
    }
  }
  var zs = (() => {
    return ($e = zs || (zs = {})).LOAD = "LOAD", $e.UPDATE_FILTER = "UPDATE_FILTER", zs;
    var $e;
  })();
  let ic = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          switch (nt) {
            case zs.LOAD:
              this.store.dispatch(Ci({
                request: [{
                  ...si
                }]
              }));
              break;
            case zs.UPDATE_FILTER:
              this.store.dispatch(Go({
                data: si
              }));
              break;
            default:
              console.error("ERROR: TerminologyMultipleComboboxControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
          }
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    _c = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return (0, ye.a)([this.store.select(Kr(nt.terminologyName, nt.featureKey))]).pipe((0, pe.U)(([si]) => ({
            state: si
          })));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })();
  function zc($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 9), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function Gc($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 7), t.ALo(1, "luHighlight"), t.YNc(2, zc, 2, 1, "span", 8)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(2);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function au($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 5), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw().ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, Gc, 3, 5, "ng-template", null, 6, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw().ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(5),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 4, t.lcZ(2, 7, si.items), Ne.textForFilter(Oo.searchText)))("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs);
    }
  }
  function xu($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 14), t._uU(1, "Загрузка"), t.qZA());
  }
  function vs($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 15), t._uU(1, " По вашему запросу ничего не найдено "), t.qZA());
  }
  function La($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 16)(1, "span", 17), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 18), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(3);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function kc($e, Hn) {
    if (1 & $e && (t.ynx(0, 10), t.YNc(1, xu, 2, 0, "lu-preloader", 11), t.YNc(2, vs, 2, 0, "div", 12), t.YNc(3, La, 5, 0, "div", 13), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function Ut($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-combobox-multiple", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t.YNc(3, au, 5, 9, "lu-data-list", 3), t.YNc(4, kc, 4, 4, "ng-template", null, 4, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = Hn.ngIf,
        si = t.oxw();
      t.xp6(1), t.Q6J("placeholder", si.placeholder)("formControl", si.formControl)("displayValueFn", si.comboboxDisplayValue(nt.items))("compareFn", si.compareTerminologyItems);
    }
  }
  let Vn = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.placeholder = "", this.withPaging = !1, this.externalValues = [], this.otherTitle = "Наименование", this.searchTextLength = 3, this.startPageNumber = 0, this.defaultPageSize = 25, this.formControl = new ke.NI([]), this.itemDisabledFn = wc.selectableItemDisabledFn(), this.displayValueFn = Oo => Oo.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        ngOnChanges(nt) {
          nt.filter && JSON.stringify(nt.filter.currentValue) !== JSON.stringify(nt.filter.previousValue) && this.controllerService.emit(zs.UPDATE_FILTER, {
            terminologyName: this.terminologyName,
            featureKey: this.featureKey,
            filter: nt.filter.currentValue
          });
        }
        writeValue(nt) {
          const si = Array.isArray(nt) && 0 !== nt.length;
          si || this.comboboxCmp?.onClear(), this.formControl.setValue(si ? nt : []);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        textForFilter(nt) {
          return this.withPaging ? "" : nt;
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }).pipe((0, be.d)(1)), this.actualDataIfFilterDoesNotMatchModel(), this.viewData$ = this.model$.pipe((0, pe.U)(nt => wc.getViewData(nt, this.externalValues)));
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        ngAfterViewInit() {
          this.comboboxInputChanges();
        }
        onScroll(nt, si) {
          0 === nt && "SUCCESS" === si.status && this.withPaging && this.controllerService.emit(zs.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: si.filterText,
            filter: this.filter,
            paging: {
              pageSize: si.paging?.pageSize,
              pageNumber: (si.paging?.pageNumber ?? 0) + 1
            }
          });
        }
        loadWithPaging(nt) {
          this.controllerService.emit(zs.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName,
            filterText: nt,
            filter: this.filter,
            paging: {
              pageNumber: this.startPageNumber,
              pageSize: this.defaultPageSize
            }
          });
        }
        comboboxDisplayValue(nt) {
          const si = new Map(nt.map(Oo => [Oo.code, Oo]));
          return Oo => Oo ? this.getTerminologyDisplay(si, Oo) : "";
        }
        get compareTerminologyItems() {
          return Ws;
        }
        getTerminologyDisplay(nt, si) {
          return nt.get(si.code)?.display ?? si.display;
        }
        comboboxInputChanges() {
          return this.comboboxCmp.inputChange.pipe((0, qe.h)(nt => this.withPaging && (!nt || nt.length >= this.searchTextLength)), (0, Rt.b)(300), (0, ae.R)(this.destroy$)).subscribe(nt => this.loadWithPaging(nt));
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, n.x)(), (0, ae.R)(this.destroy$));
        }
        loadList() {
          this.withPaging ? this.loadWithPaging("") : this.controllerService.emit(zs.LOAD, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        onReload() {
          this.loadList();
        }
        onOpen(nt) {
          ["FAILURE", "INITIAL"].includes(nt) && this.loadList();
        }
        actualDataIfFilterDoesNotMatchModel() {
          this.model$.pipe((0, We.q)(1)).subscribe(nt => {
            "SUCCESS" === nt.state.status && JSON.stringify(nt.state.filter) !== JSON.stringify(this.filter) && this.controllerService.emit(zs.UPDATE_FILTER, {
              terminologyName: this.terminologyName,
              featureKey: this.featureKey,
              filter: this.filter
            });
          });
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(ic), t.Y36(_c));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-multiple-combobox"]],
        viewQuery: function (nt, si) {
          if (1 & nt && t.Gf(Ht.v, 5), 2 & nt) {
            let Oo;
            t.iGM(Oo = t.CRH()) && (si.comboboxCmp = Oo.first);
          }
        },
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          placeholder: "placeholder",
          withPaging: "withPaging",
          externalValues: "externalValues",
          otherItemCode: "otherItemCode",
          otherTitle: "otherTitle",
          searchTextLength: "searchTextLength",
          startPageNumber: "startPageNumber",
          defaultPageSize: "defaultPageSize",
          filter: "filter",
          itemDisabledFn: "itemDisabledFn",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([ic, _c, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll", 4, "luData"], ["emptyContent", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Ut, 6, 4, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.viewData$));
        },
        dependencies: [e.O5, e.RF, e.n9, Ct.l, R.g, Ht.v, ke.JJ, ke.oH, A.d, m.NZ, e.Ov, B.J, y.e, Ro],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    Gt = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, B.F, y.j, Ct.X, u.Y, T.c, R.u, Ht.Y, ke.UX, A.c, m.aI, _r]
      }), $e;
    })();
  function xi($e, Hn) {
    if (1 & $e && (t.TgZ(0, "span", 9), t._uU(1), t.qZA()), 2 & $e) {
      const nt = t.oxw().$implicit;
      t.xp6(1), t.Oqu(nt.subDisplay);
    }
  }
  function so($e, Hn) {
    if (1 & $e && (t._UZ(0, "div", 7), t.ALo(1, "luHighlight"), t.YNc(2, xi, 2, 1, "span", 8)), 2 & $e) {
      const nt = Hn.$implicit;
      t.oxw(2);
      const si = t.MAs(2),
        Oo = t.oxw();
      t.Q6J("innerHTML", t.xi3(1, 2, Oo.displayValueFn(nt), si.searchText), t.oJD), t.xp6(2), t.Q6J("ngIf", nt.subDisplay);
    }
  }
  function yr($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-data-list", 5), t.NdJ("optionsScroll", function (Oo) {
        t.CHM(nt);
        const xs = t.oxw().ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onScroll(Oo, xs));
      }), t.ALo(1, "luFilterByText"), t.ALo(2, "normalization"), t.YNc(3, so, 3, 5, "ng-template", null, 6, t.W1O), t.qZA();
    }
    if (2 & $e) {
      const nt = t.MAs(4),
        si = t.oxw().ngIf,
        Oo = t.MAs(2),
        xs = t.MAs(5),
        Ne = t.oxw();
      t.Q6J("items", t.xi3(1, 4, t.lcZ(2, 7, si.items), Ne.textForFilter(Oo.searchText)))("itemDisabledFn", Ne.itemDisabledFn)("itemContent", nt)("emptyContent", xs);
    }
  }
  function Rr($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 14), t._uU(1, "Загрузка"), t.qZA());
  }
  function Ns($e, Hn) {
    1 & $e && (t.TgZ(0, "div", 15), t._uU(1, " По вашему запросу ничего не найдено "), t.qZA());
  }
  function Ga($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 16)(1, "span", 17), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 18), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(3);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function Ma($e, Hn) {
    if (1 & $e && (t.ynx(0, 10), t.YNc(1, Rr, 2, 0, "lu-preloader", 11), t.YNc(2, Ns, 2, 0, "div", 12), t.YNc(3, Ga, 5, 0, "div", 13), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf;
      t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  function Ia($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-combobox-multiple", 1, 2), t.NdJ("focusin", function () {
        const xs = t.CHM(nt).ngIf,
          Ne = t.oxw();
        return t.KtG(Ne.onOpen(xs.status));
      }), t.YNc(3, yr, 5, 9, "lu-data-list", 3), t.YNc(4, Ma, 4, 4, "ng-template", null, 4, t.W1O), t.qZA(), t.BQk();
    }
    if (2 & $e) {
      const nt = Hn.ngIf,
        si = t.oxw();
      t.xp6(1), t.Q6J("placeholder", si.placeholder)("formControl", si.formControl)("displayValueFn", si.comboboxDisplayValue(nt.items))("compareFn", si.compareTerminologyItems);
    }
  }
  let Ea = (() => {
      class $e extends Vn {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.viewData$ = (0, fe.of)({
            status: "SUCCESS",
            items: this.staticTerminology
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-multiple-combobox"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([ic, _c, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["type", "autocomplete", 3, "placeholder", "formControl", "displayValueFn", "compareFn", "focusin"], ["combobox", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll", 4, "luData"], ["emptyContent", ""], [3, "items", "itemDisabledFn", "itemContent", "emptyContent", "optionsScroll"], ["itemContent", ""], ["lu-text", "", 3, "innerHTML"], ["class", "sub-display", "lu-text", "", "size", "small", "color", "muted", 4, "ngIf"], ["lu-text", "", "size", "small", "color", "muted", 1, "sub-display"], [3, "ngSwitch"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], ["size", "inline-dropdown"], ["lu-text", "", 1, "message"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Ia, 6, 4, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.viewData$));
        },
        dependencies: [e.O5, e.RF, e.n9, Ct.l, R.g, Ht.v, ke.JJ, ke.oH, A.d, m.NZ, e.Ov, B.J, y.e, Ro],
        styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    Ll = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, B.F, y.j, Ct.X, u.Y, T.c, R.u, Ht.Y, ke.UX, A.c, m.aI, _r]
      }), $e;
    })();
  var Za = (() => ((Za || (Za = {})).INIT = "INIT", Za))();
  let sl = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          nt === Za.INIT ? this.store.dispatch(Ci({
            request: [{
              ...si
            }]
          })) : console.error("ERROR: TerminologyRadioGroupControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    pl = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return this.store.select(Kr(nt.terminologyName, nt.featureKey));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    ql = (() => {
      class $e {
        transform(nt) {
          return {
            status: nt.status,
            items: Fs.getContains(nt)
          };
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "terminologyRadioGroupViewData",
        type: $e,
        pure: !0
      }), $e;
    })(),
    vc = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez]
      }), $e;
    })();
  function oc($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-radio", 8), t._uU(1, "Любой"), t.qZA()), 2 & $e && t.Q6J("value", null);
  }
  function pc($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-radio", 8), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt), t.xp6(1), t.hij("", si.displayValueFn(nt), " ");
    }
  }
  function ec($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-radio-group", 5), t.YNc(1, oc, 2, 1, "lu-radio", 6), t.YNc(2, pc, 2, 2, "lu-radio", 7), t.ALo(3, "terminologyRadioGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("formControl", si.formControl)("compareFn", si.compareTerminologyItems)("itemsOrientation", si.itemsOrientation), t.xp6(1), t.Q6J("ngIf", si.clearOption), t.xp6(1), t.Q6J("ngForOf", t.lcZ(3, 5, nt).items);
    }
  }
  function Mc($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 9), t._uU(1, "Загрузка"), t.qZA());
  }
  function rc($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 10)(1, "span", 11), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 12), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(2);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function Bl($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, ec, 4, 7, "lu-radio-group", 2), t.YNc(3, Mc, 2, 0, "lu-preloader", 3), t.YNc(4, rc, 5, 0, "div", 4), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  let gu = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.itemsOrientation = "vertical", this.clearOption = !1, this.formControl = new ke.NI(null), this.displayValueFn = Oo => Oo.display, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        writeValue(nt) {
          this.formControl.setValue(nt);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }), this.init();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(Za.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        onReload() {
          this.init();
        }
        get compareTerminologyItems() {
          return sa;
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, ae.R)(this.destroy$));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(sl), t.Y36(pl));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-radio-group"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          itemsOrientation: "itemsOrientation",
          clearOption: "clearOption",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([pl, sl, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [3, "formControl", "compareFn", "itemsOrientation", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], [3, "formControl", "compareFn", "itemsOrientation"], [3, "value", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "inline-dropdown"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Bl, 5, 4, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, Me.K2, j.wH, ke.JJ, ke.oH, A.d, m.NZ, e.Ov, ql],
        styles: [".message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    Xc = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, Me.y8, j.VY, ke.UX, vc, A.c, m.aI, y.j]
      }), $e;
    })();
  function al($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-radio", 8), t._uU(1, "Любой"), t.qZA()), 2 & $e && t.Q6J("value", null);
  }
  function ca($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-radio", 8), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt), t.xp6(1), t.hij("", si.displayValueFn(nt), " ");
    }
  }
  function _a($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-radio-group", 5), t.YNc(1, al, 2, 1, "lu-radio", 6), t.YNc(2, ca, 2, 2, "lu-radio", 7), t.ALo(3, "terminologyRadioGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("formControl", si.formControl)("compareFn", si.compareTerminologyItems)("itemsOrientation", si.itemsOrientation), t.xp6(1), t.Q6J("ngIf", si.clearOption), t.xp6(1), t.Q6J("ngForOf", t.lcZ(3, 5, nt).items);
    }
  }
  function wl($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 9), t._uU(1, "Загрузка"), t.qZA());
  }
  function Ja($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "div", 10)(1, "span", 11), t._uU(2, "Произошла ошибка при загрузке списка."), t.qZA(), t.TgZ(3, "span", 12), t.NdJ("click", function () {
        t.CHM(nt);
        const Oo = t.oxw(2);
        return t.KtG(Oo.onReload());
      }), t._uU(4, "Обновить"), t.qZA()();
    }
  }
  function ka($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, _a, 4, 7, "lu-radio-group", 2), t.YNc(3, wl, 2, 0, "lu-preloader", 3), t.YNc(4, Ja, 5, 0, "div", 4), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING"), t.xp6(1), t.Q6J("ngSwitchCase", "FAILURE");
    }
  }
  let Hc = (() => {
      class $e extends gu {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            error: void 0,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-radio-group"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([pl, sl, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [3, "formControl", "compareFn", "itemsOrientation", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], ["class", "message", "lu-text", "", "color", "red", 4, "ngSwitchCase"], [3, "formControl", "compareFn", "itemsOrientation"], [3, "value", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "inline-dropdown"], ["lu-text", "", "color", "red", 1, "message"], [1, "message-text"], [1, "message-link", "message-link__text", 3, "click"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, ka, 5, 4, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, Me.K2, j.wH, ke.JJ, ke.oH, A.d, m.NZ, e.Ov, ql],
        styles: [".message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}"],
        changeDetection: 0
      }), $e;
    })(),
    tc = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, Me.y8, j.VY, ke.UX, vc, A.c, m.aI, y.j]
      }), $e;
    })();
  var zl = (() => ((zl || (zl = {})).INIT = "INIT", zl))();
  let Tc = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        emit(nt, si) {
          nt === zl.INIT ? this.store.dispatch(Ci({
            request: [{
              ...si
            }]
          })) : console.error("ERROR: TerminologyRadioGroupControllerService.emit", "Используется некорректное наименование события, либо для данного события не реализована обработка.", nt);
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    Jl = (() => {
      class $e {
        constructor(nt) {
          this.store = nt;
        }
        init(nt) {
          return this.store.select(Kr(nt.terminologyName, nt.featureKey));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    hc = (() => {
      class $e {
        transform(nt) {
          return {
            status: nt.status,
            items: Fs.getContains(nt)
          };
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵpipe = t.Yjl({
        name: "terminologySegmentGroupViewData",
        type: $e,
        pure: !0
      }), $e;
    })(),
    ll = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({}), $e;
    })();
  function Tl($e, Hn) {
    1 & $e && (t.TgZ(0, "button", 7), t._uU(1, " Любой "), t.qZA()), 2 & $e && t.Q6J("size", "medium")("value", null);
  }
  function $c($e, Hn) {
    if (1 & $e && (t.TgZ(0, "button", 8), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt)("size", "medium"), t.xp6(1), t.hij(" ", si.displayValueFn(nt), " ");
    }
  }
  function Ml($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "lu-radio-group", 4)(2, "lu-button-group"), t.YNc(3, Tl, 2, 2, "button", 5), t.YNc(4, $c, 2, 3, "button", 6), t.ALo(5, "terminologySegmentGroupViewData"), t.qZA()(), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.xp6(1), t.Q6J("formControl", si.formControl)("compareFn", si.compareTerminologyItems)("itemsOrientation", si.itemsOrientation), t.xp6(2), t.Q6J("ngIf", si.clearOption), t.xp6(1), t.Q6J("ngForOf", t.lcZ(5, 5, nt).items);
    }
  }
  function Vl($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 9), t._uU(1, "Загрузка"), t.qZA());
  }
  function Bc($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, Ml, 6, 7, "ng-container", 2), t.YNc(3, Vl, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let bu = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.itemsOrientation = "horizontal", this.displayValueFn = Oo => Oo.display, this.clearOption = !1, this.formControl = new ke.NI(null), this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {}, this.changeValueEvent().subscribe(Oo => {
            this.onChange(Oo);
          });
        }
        writeValue(nt) {
          this.formControl.setValue(nt);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          nt ? this.formControl.disable() : this.formControl.enable();
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }), this.init();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(zl.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        get compareTerminologyItems() {
          return (nt, si) => "boolean" == typeof nt && "boolean" == typeof si && nt === si || !!nt && !!si && nt.code === si.code;
        }
        changeValueEvent() {
          return this.formControl.valueChanges.pipe((0, ae.R)(this.destroy$));
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(Tc), t.Y36(Jl));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-segment-group"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          itemsOrientation: "itemsOrientation",
          displayValueFn: "displayValueFn",
          clearOption: "clearOption"
        },
        features: [t._Bn([Jl, Tc, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [3, "formControl", "compareFn", "itemsOrientation"], ["lu-segment-button", "", "luSegment", "", 3, "size", "value", 4, "ngIf"], ["lu-segment-button", "", "luSegment", "", 3, "value", "size", 4, "ngFor", "ngForOf"], ["lu-segment-button", "", "luSegment", "", 3, "size", "value"], ["lu-segment-button", "", "luSegment", "", 3, "value", "size"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Bc, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, A.d, Me.K2, Ke.w, C.mc, Ze.X, e.Ov, hc],
        changeDetection: 0
      }), $e;
    })(),
    Kc = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, A.c, ll, Me.y8, Ke.F, j.VY, C.W1, Ze.P]
      }), $e;
    })();
  function Al($e, Hn) {
    1 & $e && (t.TgZ(0, "button", 7), t._uU(1, " Любой "), t.qZA()), 2 & $e && t.Q6J("size", "medium")("value", null);
  }
  function sc($e, Hn) {
    if (1 & $e && (t.TgZ(0, "button", 8), t._uU(1), t.qZA()), 2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("value", nt)("size", "medium"), t.xp6(1), t.hij(" ", si.displayValueFn(nt), " ");
    }
  }
  function Bi($e, Hn) {
    if (1 & $e && (t.ynx(0), t.TgZ(1, "lu-radio-group", 4)(2, "lu-button-group"), t.YNc(3, Al, 2, 2, "button", 5), t.YNc(4, sc, 2, 3, "button", 6), t.ALo(5, "terminologySegmentGroupViewData"), t.qZA()(), t.BQk()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.xp6(1), t.Q6J("formControl", si.formControl)("compareFn", si.compareTerminologyItems)("itemsOrientation", si.itemsOrientation), t.xp6(2), t.Q6J("ngIf", si.clearOption), t.xp6(1), t.Q6J("ngForOf", t.lcZ(5, 5, nt).items);
    }
  }
  function lu($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 9), t._uU(1, "Загрузка"), t.qZA());
  }
  function Rc($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, Bi, 6, 7, "ng-container", 2), t.YNc(3, lu, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let ac = (() => {
      class $e extends bu {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            error: void 0,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-segment-group"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([Jl, Tc, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [3, "formControl", "compareFn", "itemsOrientation"], ["lu-segment-button", "", "luSegment", "", 3, "size", "value", 4, "ngIf"], ["lu-segment-button", "", "luSegment", "", 3, "value", "size", 4, "ngFor", "ngForOf"], ["lu-segment-button", "", "luSegment", "", 3, "size", "value"], ["lu-segment-button", "", "luSegment", "", 3, "value", "size"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Rc, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, ke.JJ, ke.oH, A.d, Me.K2, Ke.w, C.mc, Ze.X, e.Ov, hc],
        changeDetection: 0
      }), $e;
    })(),
    Pa = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, ke.UX, A.c, ll, Me.y8, Ke.F, j.VY, C.W1, Ze.P]
      }), $e;
    })();
  function cl($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-chip", 6), t.NdJ("click", function () {
        const xs = t.CHM(nt).$implicit,
          Ne = t.oxw(3);
        return t.KtG(Ne.onSelectItem(xs.code));
      }), t.ALo(1, "async"), t.TgZ(2, "dp-icon-terminology-wrapper", 7), t._uU(3), t.qZA()();
    }
    if (2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("checked", si.isSelected(nt.code, t.lcZ(1, 6, si.selectedCodeItem$)))("disabled", si.isDisabled)("value", nt.code), t.xp6(2), t.Q6J("terminologyName", si.terminologyName)("terminologyCode", nt.code), t.xp6(1), t.hij(" ", si.displayValueFn(nt), " ");
    }
  }
  function iu($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chips-group", 4), t.YNc(1, cl, 4, 8, "lu-chip", 5), t.ALo(2, "terminologyChipsGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("luChipsGroupType", "radio")("luChipsGroupName", si.groupName), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 3, nt).items);
    }
  }
  function Fc($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function Rl($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, iu, 3, 5, "lu-chips-group", 2), t.YNc(3, Fc, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let Jc = (() => {
      class $e {
        constructor(nt, si) {
          this.controllerService = nt, this.modelService = si, this.featureKey = "all", this.groupName = this.generateRandomGroupName(), this.displayValueFn = Oo => Oo.display, this.selectedCodeItem$ = new Y.X(null), this.isDisabled = !1, this.destroy$ = new J.x(), this.onChange = () => {}, this.onTouched = () => {};
        }
        writeValue(nt) {
          this.setItem(nt?.code ?? null);
        }
        registerOnChange(nt) {
          this.onChange = si => {
            nt(si);
          };
        }
        registerOnTouched(nt) {
          this.onTouched = nt;
        }
        setDisabledState(nt) {
          this.isDisabled = nt;
        }
        ngOnInit() {
          this.model$ = this.modelService.init({
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          }).pipe((0, be.d)(1)), this.init(), this.initChangeEvent();
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        init() {
          this.controllerService.emit(mi.INIT, {
            featureKey: this.featureKey,
            terminologyName: this.terminologyName
          });
        }
        onSelectItem(nt) {
          this.setItem(nt);
        }
        isSelected(nt, si) {
          return nt === si;
        }
        changeValueEvent() {
          return this.selectedCodeItem$.pipe((0, Se.w)(nt => this.getTerminologyItemsInModel(nt)), (0, pe.U)(nt => this.covertTerminologyItemsToControlType(nt)), (0, ae.R)(this.destroy$));
        }
        covertTerminologyItemsToControlType(nt) {
          return nt ?? null;
        }
        getTerminologyItemsInModel(nt) {
          return this.model$.pipe((0, pe.U)(si => (si.data ?? []).find(Oo => Oo.code === nt)));
        }
        generateRandomGroupName() {
          return Math.floor(1e4 + 9e4 * Math.random()).toString();
        }
        setItem(nt) {
          this.selectedCodeItem$.next(nt);
        }
        initChangeEvent() {
          this.changeValueEvent().subscribe(nt => {
            this.onChange(nt);
          });
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.Y36(ro), t.Y36(cr));
      }, $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-terminology-toggle"]],
        inputs: {
          featureKey: "featureKey",
          terminologyName: "terminologyName",
          groupName: "groupName",
          displayValueFn: "displayValueFn"
        },
        features: [t._Bn([cr, ro, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }])],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "dp-chip-group dp-chip-radio-group", 3, "luChipsGroupType", "luChipsGroupName", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [1, "dp-chip-group", "dp-chip-radio-group", 3, "luChipsGroupType", "luChipsGroupName"], ["class", "dp-filters-container__item dp-filter-chip", 3, "checked", "disabled", "value", "click", 4, "ngFor", "ngForOf"], [1, "dp-filters-container__item", "dp-filter-chip", 3, "checked", "disabled", "value", "click"], [3, "terminologyName", "terminologyCode"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Rl, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, N.r, v.P, f.b, E.P, A.d, Yo, e.Ov, Ln],
        styles: [".dp-chip-group[_ngcontent-%COMP%]{display:flex;flex-shrink:0}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip:not(:first-child){margin-left:calc(var(--lu-base-gutter) * -4.1)}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label{padding-right:calc(var(--lu-base-gutter) * 3.5);padding-left:calc(var(--lu-base-gutter) * 3.5);z-index:0;display:flex;justify-content:flex-end}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label.checked{z-index:1}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label:hover{z-index:2}.dp-filter-chip[_ngcontent-%COMP%]{flex-shrink:0;font-weight:400;font-size:15px;line-height:24px}.dp-filters-container__item[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), $e;
    })(),
    _t = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, Me.y8, j.VY, ke.UX, Dn.h, en, Di, E.T, f.B, N.U, A.c]
      }), $e;
    })();
  function Tn($e, Hn) {
    if (1 & $e) {
      const nt = t.EpF();
      t.TgZ(0, "lu-chip", 6), t.NdJ("click", function () {
        const xs = t.CHM(nt).$implicit,
          Ne = t.oxw(3);
        return t.KtG(Ne.onSelectItem(xs.code));
      }), t.ALo(1, "async"), t.TgZ(2, "dp-icon-terminology-wrapper", 7), t._uU(3), t.qZA()();
    }
    if (2 & $e) {
      const nt = Hn.$implicit,
        si = t.oxw(3);
      t.Q6J("checked", si.isSelected(nt.code, t.lcZ(1, 6, si.selectedCodeItem$)))("disabled", si.isDisabled)("value", nt.code), t.xp6(2), t.Q6J("terminologyName", si.terminologyName)("terminologyCode", nt.code), t.xp6(1), t.hij(" ", si.displayValueFn(nt), " ");
    }
  }
  function Ge($e, Hn) {
    if (1 & $e && (t.TgZ(0, "lu-chips-group", 4), t.YNc(1, Tn, 4, 8, "lu-chip", 5), t.ALo(2, "terminologyChipsGroupViewData"), t.qZA()), 2 & $e) {
      const nt = t.oxw().ngIf,
        si = t.oxw();
      t.Q6J("luChipsGroupType", "radio")("luChipsGroupName", si.groupName), t.xp6(1), t.Q6J("ngForOf", t.lcZ(2, 3, nt).items);
    }
  }
  function Vi($e, Hn) {
    1 & $e && (t.TgZ(0, "lu-preloader", 8), t._uU(1, "Загрузка"), t.qZA());
  }
  function Zo($e, Hn) {
    if (1 & $e && (t.ynx(0)(1, 1), t.YNc(2, Ge, 3, 5, "lu-chips-group", 2), t.YNc(3, Vi, 2, 0, "lu-preloader", 3), t.BQk()()), 2 & $e) {
      const nt = Hn.ngIf;
      t.xp6(1), t.Q6J("ngSwitch", nt.status), t.xp6(1), t.Q6J("ngSwitchCase", "SUCCESS"), t.xp6(1), t.Q6J("ngSwitchCase", "PENDING");
    }
  }
  let Zr = (() => {
      class $e extends Jc {
        constructor() {
          super(...arguments), this.staticTerminology = [];
        }
        ngOnInit() {
          this.initViewData(), this.initChangeEvent();
        }
        ngOnChanges() {
          this.initViewData();
        }
        initViewData() {
          this.model$ = (0, fe.of)({
            status: "SUCCESS",
            data: this.staticTerminology,
            error: void 0,
            total: this.staticTerminology.length
          });
        }
      }
      return $e.ɵfac = function () {
        let Hn;
        return function (si) {
          return (Hn || (Hn = t.n5z($e)))(si || $e);
        };
      }(), $e.ɵcmp = t.Xpm({
        type: $e,
        selectors: [["dp-static-terminology-toggle"]],
        inputs: {
          staticTerminology: "staticTerminology"
        },
        features: [t._Bn([cr, ro, {
          provide: ke.JU,
          useExisting: (0, t.Gpc)(() => $e),
          multi: !0
        }]), t.qOj, t.TTD],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "dp-chip-group dp-chip-radio-group", 3, "luChipsGroupType", "luChipsGroupName", 4, "ngSwitchCase"], ["size", "inline-dropdown", 4, "ngSwitchCase"], [1, "dp-chip-group", "dp-chip-radio-group", 3, "luChipsGroupType", "luChipsGroupName"], ["class", "dp-filters-container__item dp-filter-chip", 3, "checked", "disabled", "value", "click", 4, "ngFor", "ngForOf"], [1, "dp-filters-container__item", "dp-filter-chip", 3, "checked", "disabled", "value", "click"], [3, "terminologyName", "terminologyCode"], ["size", "inline-dropdown"]],
        template: function (nt, si) {
          1 & nt && (t.YNc(0, Zo, 4, 3, "ng-container", 0), t.ALo(1, "async")), 2 & nt && t.Q6J("ngIf", t.lcZ(1, 1, si.model$));
        },
        dependencies: [e.sg, e.O5, e.RF, e.n9, Yo, E.P, f.b, N.r, A.d, v.P, e.Ov, Ln],
        styles: [".dp-chip-group[_ngcontent-%COMP%]{display:flex;flex-shrink:0}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip:not(:first-child){margin-left:calc(var(--lu-base-gutter) * -4.1)}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label{padding-right:calc(var(--lu-base-gutter) * 3.5);padding-left:calc(var(--lu-base-gutter) * 3.5);z-index:0;display:flex;justify-content:flex-end}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label.checked{z-index:1}.dp-chip-radio-group[_ngcontent-%COMP%]     lu-chip label:hover{z-index:2}.dp-filter-chip[_ngcontent-%COMP%]{flex-shrink:0;font-weight:400;font-size:15px;line-height:24px}.dp-filters-container__item[_ngcontent-%COMP%]{margin-right:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), $e;
    })(),
    pa = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, Me.y8, j.VY, ke.UX, en, Di, E.T, f.B, N.U, A.c, _t, v.m]
      }), $e;
    })(),
    fl = (() => {
      class $e {
        constructor(nt, si, Oo) {
          this.actions$ = nt, this.service = si, this.store = Oo, this.getTerminology$ = (0, vt.GW)(() => this.actions$.pipe((0, vt.l4)(Ci), (0, Re.b)(({
            request: xs
          }) => this.getTerminologies(xs).pipe((0, qe.h)(Ne => Ne.length > 0), (0, pe.U)(Ne => lo({
            data: Ne
          }))))));
        }
        getTerminologies(nt) {
          return (0, G.D)(nt.map(si => this.getTerminology(si))).pipe((0, pe.U)(si => si.filter(Boolean)));
        }
        getTerminology(nt) {
          return this.checkNeedTerminologyLoad(nt).pipe((0, Se.w)(si => si ? this.service.getTerminology({
            terminologyName: nt.terminologyName,
            filterText: nt.filterText,
            paging: nt.paging,
            filter: nt.filter
          }) : (0, fe.of)(void 0)), (0, pe.U)(si => si ? {
            featureKey: nt.featureKey,
            terminologyName: nt.terminologyName,
            response: {
              ...si,
              filter: nt.filter,
              paging: nt.paging,
              filterText: nt.filterText
            }
          } : void 0), (0, st.K)(si => (0, fe.of)({
            featureKey: nt.featureKey,
            terminologyName: nt.terminologyName,
            error: si
          })));
        }
        checkNeedTerminologyLoad(nt) {
          const {
            terminologyName: si,
            featureKey: Oo
          } = nt;
          return this.store.select(Kr(si, Oo)).pipe((0, pe.U)(xs => us(xs)), (0, q.P)());
        }
      }
      return $e.ɵfac = function (nt) {
        return new (nt || $e)(t.LFG(vt.eX), t.LFG(zn), t.LFG(te.yh));
      }, $e.ɵprov = t.Yz7({
        token: $e,
        factory: $e.ɵfac
      }), $e;
    })(),
    Bs = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        providers: [zn],
        imports: [te.Aw.forFeature(Ei, Wt), vt.sQ.forFeature([fl])]
      }), $e;
    })(),
    qc = (() => {
      class $e {}
      return $e.ɵfac = function (nt) {
        return new (nt || $e)();
      }, $e.ɵmod = t.oAB({
        type: $e
      }), $e.ɵinj = t.cJS({
        imports: [e.ez, Bs]
      }), $e;
    })();
});
