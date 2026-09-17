// Extracted from main; webpack module 20733. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    SI: () => ci,
    dC: () => Io,
    OZ: () => Kt,
    BX: () => Dn,
    $x: () => Ps,
    Tj: () => vr,
    Cc: () => Vt,
    jC: () => ja,
    FB: () => an,
    Df: () => ks,
    yM: () => Ft,
    vZ: () => st,
    B7: () => je,
    s$: () => rs,
    iJ: () => Ro,
    B8: () => di,
    Ht: () => Qs,
    $3: () => tn,
    O2: () => ua,
    YS: () => Nn,
    Xu: () => ji,
    Rm: () => Xt,
    r2: () => Je,
    L3: () => co,
    Pm: () => fr,
    ug: () => Dt,
    Z4: () => pt,
    kT: () => Jo,
    p$: () => Re,
    YF: () => Ii,
    Fo: () => Yt,
    hQ: () => hn
  });
  var t = i(66745),
    e = i(28115),
    a = i(32722),
    m = i(35119),
    d = i(81664),
    M = i(9378),
    b = i(30948),
    A = i(5238),
    N = i(72201),
    I = i(91998),
    O = i(40833);
  function L(Ln, en) {
    (0, O.Z)(2, arguments);
    var mi = (0, I.Z)(en);
    return (0, A.Z)(Ln, 7 * mi);
  }
  var v = i(85866),
    f = i(56463),
    E = i(97978),
    h = i(57776),
    x = i(33413),
    u = i(66425),
    T = i(37623),
    R = i(20544),
    B = i(37524),
    y = i(89570),
    j = i(94650),
    F = (i(53037), i(44726)),
    Le = i(73766),
    ke = i(86936),
    J = i(79247),
    fe = i(89635),
    ye = i(77579),
    ae = i(56451),
    Y = i(82722),
    G = i(68675),
    te = i(11520),
    pe = i(39300),
    be = i(54004),
    le = i(59468),
    n = i(71884),
    Se = i(18505),
    qe = i(24006),
    Rt = i(19700);
  function Re(Ln) {
    return "string" == typeof Ln && /\d\d\d\d-\d\d-\d\d/g.test(Ln) ? (0, t.Z)(Date.parse(Ln)) : Ln instanceof Date;
  }
  function st(Ln, en, mi = []) {
    if (Ln === en) return !0;
    if ("object" != typeof Ln || null === Ln || "object" != typeof en || null === en) return !1;
    if (Re(Ln) && Re(en)) return Ln.valueOf() === en.valueOf();
    const ro = Object.keys(Ln).filter(jr => !mi.includes(jr)),
      cr = Object.keys(en).filter(jr => !mi.includes(jr));
    if (ro.length !== cr.length) return !1;
    for (const jr of ro) if (!cr.includes(jr) || !st(Ln[jr], en[jr], mi)) return !1;
    return !0;
  }
  const q = {
      startOfDay: e.Z,
      endOfDay: a.Z,
      startOfMonth: m.Z,
      endOfMonth: d.Z,
      startOfYear: M.Z,
      endOfYear: b.Z,
      now: () => new Date()
    },
    mt = {
      addDays: A.Z,
      subDays: N.Z,
      addWeeks: L,
      subWeeks: function C(Ln, en) {
        return (0, O.Z)(2, arguments), L(Ln, -(0, I.Z)(en));
      },
      addMonths: v.Z,
      subMonths: f.Z,
      addYears: E.Z,
      subYears: h.Z,
      setHours: x.Z
    },
    ut = {
      toNumber: Ln => Ln
    },
    Ct = {
      toDate: Ln => new Date(Ln)
    };
  function Ft(Ln, en) {
    const ro = function Ze(Ln) {
      return Ln.split("|").filter(Boolean);
    }(Ln).reduce((cr, jr) => {
      const as = mt[function Ke(Ln) {
          return Ln.slice(0, Ln.indexOf(":"));
        }(jr)],
        Da = q[jr],
        vo = ut[jr],
        As = Ct[jr];
      if (function Et(Ln) {
        return !Ln.includes("|now") && !Ln.includes("|toDate") && !Ln.split("|")[0];
      }(Ln)) throw new Error("Error, base parameter not passed!");
      if (As) {
        if ((0, t.Z)(new Date(cr))) return As(cr);
        throw new Error("Error, invalid date passed!");
      }
      if (Da) return Da(cr);
      if (as) {
        const dl = function Ee(Ln) {
          return Ln.slice(Ln.indexOf(":")).split(":").filter(Boolean).map(en => Number(en));
        }(jr);
        if (dl.length > as.length) throw new Error("Error, params passed more than wait function!");
        return as(cr, ...dl);
      }
      return vo ? vo(Number(cr)) : jr;
    }, en);
    if (function Ue(Ln) {
      for (const en of function Me(Ln) {
        return Ln.split("|").slice(1, Ln.length).map(en => en.split(":")[0]);
      }(Ln)) if (!(q[en] || mt[en] || ut[en] || Ct[en])) return !0;
      return !1;
    }(Ln)) throw new Error("Error, undefined function name passed!");
    return ro;
  }
  function je(Ln) {
    const {
      value: en
    } = Ln;
    return "string" != typeof en || Je(en) ? en instanceof Object ? function Mt(Ln) {
      const en = {
        ...Ln
      };
      return Object.keys(en).forEach(mi => {
        Je(en[mi]) && (en[mi] = Ft(en[mi]));
      }), en;
    }(en) : Ft(en) : en;
  }
  function Je(Ln) {
    return Ln.includes("|");
  }
  function Xt(Ln, en) {
    const mi = {};
    return Object.keys(Ln).forEach(ro => {
      mi[ro] = null == Ln[ro] ? en[ro] : Ln[ro];
    }), mi;
  }
  function Nn(Ln) {
    return en => (0, y.j)({
      path: Ln,
      json: en
    });
  }
  function Ii(Ln) {
    return new RegExp("^\\d+[YMD]$").test(String(Ln));
  }
  function yi(Ln) {
    if ("object" == typeof Ln && null !== Ln) {
      const en = Object.getOwnPropertyNames(Ln);
      return en.includes("start") && en.includes("end");
    }
    return !1;
  }
  function co(Ln) {
    if (Array.isArray(Ln)) throw new Error(`Value must not be an array: [${Ln.join(",")}]`);
  }
  function Jo(Ln) {
    if (Ln?.start || Ln?.end) throw new Error(`Value must not be an period: ${String(Ln)}`);
  }
  function fr(Ln) {
    if (!Array.isArray(Ln) && "boolean" != typeof Ln) throw new Error(`Value must be an array or boolean: ${String(Ln)}`);
  }
  function pt(Ln) {
    if (!Ln?.start && !Ln?.end && "boolean" != typeof Ln) throw new Error(`Value must be an period or boolean: ${String(Ln)}`);
  }
  function Dt(Ln) {
    if (!Re(Ln)) throw new Error(`Value must be an Date: ${String(Ln)}`);
  }
  function Ht(Ln) {
    return Re(Ln.start) || Re(Ln.end);
  }
  let Dn = (() => {
    class Ln {
      transform(mi, ro) {
        return ro ? ro(mi) : null;
      }
    }
    return Ln.ɵfac = function (mi) {
      return new (mi || Ln)();
    }, Ln.ɵpipe = j.Yjl({
      name: "pipeMapper",
      type: Ln,
      pure: !0,
      standalone: !0
    }), Ln;
  })();
  function vt() {
    return Ln => (0, F.HZ)(Ln);
  }
  function an(Ln) {
    return en => en.reduce((mi, ro, cr) => (Ln[cr] && (mi[Ln[cr]] = ro), mi), {});
  }
  function li(Ln) {
    return en => Ft(Ln, en);
  }
  function zn() {
    return Ln => Object.getOwnPropertyNames(Ln).some(en => !!Ln[en]) ? Ln : void 0;
  }
  function $t(Ln) {
    return en => {
      if (Array.isArray(en)) return Ln.reduce((mi, ro, cr) => {
        const [jr, as] = ro.split(".");
        return mi[Number(jr)] || (mi[Number(jr)] = []), mi[Number(jr)][Number(as)] = en[cr], mi;
      }, [[]]);
      throw new Error(`createMatrixFromArray: invalid value ${JSON.stringify(en)}`);
    };
  }
  function Mn(Ln) {
    const en = {};
    return mi => (en[Ln] = mi, en);
  }
  function Qn(Ln) {
    return () => Ln;
  }
  const ui = function In() {
    const Ln = {
      ...Le.default,
      localize: Le.default.localize ? {
        ...Le.default.localize
      } : void 0
    };
    if (Ln.localize) {
      const en = Ln.localize.month;
      Ln.localize.month = (mi, ro) => {
        const cr = en(mi, ro);
        return "abbreviated" === ro?.width ? cr.slice(0, 3) : cr;
      };
    }
    return Ln;
  }();
  function To(Ln) {
    return en => en ? (0, u.Z)(new Date(en), Ln, {
      locale: ui
    }) : "";
  }
  function bi() {
    return () => new Date().toISOString();
  }
  function qn() {
    return Ln => (0, F.V$)({
      date: new Date(Ln)
    });
  }
  function Xn() {
    return Ln => (0, F.GF)(Ln);
  }
  function Yi(Ln) {
    return en => {
      if (!en) return {};
      const [mi, ro] = en;
      return Array.isArray(mi) ? mi.forEach(cr => {
        cr[Ln] = ro;
      }) : mi[Ln] = ro, mi;
    };
  }
  function Eo() {
    return ({
      start: Ln,
      end: en
    }) => Ln && en ? (0, T.Z)(new Date(en), new Date(Ln)) : 0;
  }
  function Fo(Ln) {
    return en => {
      if (!Array.isArray(en)) throw new Error("Invalid value format");
      return en.find(mi => typeof mi === Ln);
    };
  }
  function br() {
    return Ln => Ln ? Ln[0] : void 0;
  }
  function Pr(Ln) {
    return Ln ? en => qo(en, Ln) : ([en, mi]) => qo(en, mi);
  }
  function qo(Ln, en) {
    if (null != Ln) {
      if ("object" == typeof Ln && "string" == typeof en) return Ln[en];
      throw new Error(`Invalid obj or key types, obj type equal ${typeof Ln}, key type equal ${typeof en}`);
    }
  }
  function Yo(Ln, en) {
    return mi => {
      try {
        return function oo(Ln, en) {
          return en.reduce((mi, ro) => cr => ro(mi ? mi(cr) : cr), mi => mi)(Ln);
        }(mi, function wr(Ln, en) {
          return en.map(mi => "string" == typeof mi ? Ln[mi](void 0, Ln) : Ln[mi.name](mi.options, Ln));
        }(Ln, en));
      } catch (ro) {
        return console.error(ro), "error";
      }
    };
  }
  function Di(Ln, en) {
    if (!Array.isArray(Ln) || Ln.length < 1) throw new Error("[iif] options must be an array with at least 1 element (condition pipe)");
    const [mi, ro, cr] = Ln,
      jr = Yo(en, mi),
      as = ro ? Yo(en, ro) : void 0,
      Da = cr ? Yo(en, cr) : void 0;
    return vo => jr(vo) ? as ? as(vo) : vo : Da ? Da(vo) : vo;
  }
  function Ci() {
    return ({
      start: Ln,
      end: en
    }) => (0, R.Z)(Ln && en ? {
      start: new Date(Ln),
      end: new Date(en)
    } : {
      start: 0,
      end: 0
    });
  }
  function lo(Ln) {
    return ({
      start: en,
      end: mi
    }) => {
      const ro = Ci()({
        start: en,
        end: mi
      });
      switch (Ln) {
        case "hours":
          return ro.days || ro.months || ro.years ? 24 : ro[Ln] ?? 0;
        case "minutes":
        case "seconds":
          return ro.days || ro.months || ro.years ? 60 : ro[Ln] ?? 0;
        default:
          return ro[Ln] ?? 0;
      }
    };
  }
  function jo(Ln) {
    return en => {
      if (!Array.isArray(en)) throw new SyntaxError("Error");
      return en.every(mi => "" === mi || void 0 === mi) || 0 === en.length ? "" : en.filter(mi => null != mi).join(Ln);
    };
  }
  const Go = new ke.Kj();
  function ji(Ln) {
    const en = Go.parse(Ln);
    return mi => Go.renderSync(en, {
      value: mi
    });
  }
  function ti(Ln, en) {
    const mi = Yo(en, Ln);
    return ro => Array.isArray(ro) ? ro.map(cr => mi(cr)) : [];
  }
  function fi(Ln) {
    const en = new J.M();
    return mi => {
      if (null == mi) return mi;
      if ("string" != typeof mi) throw new Error("Error: value invalid type");
      return en.transform(mi, Ln);
    };
  }
  function Fi(Ln, en) {
    const mi = Ln.map(ro => Yo(en, ro));
    return ro => mi.map(cr => cr(ro));
  }
  function Rn() {
    return Ln => {
      const en = Number(Ln);
      return `${Math.floor(en / 60)} \u0447\u0430\u0441 ${en % 60} \u043c\u0438\u043d`;
    };
  }
  function ki(Ln) {
    return en => {
      if (!["string", "number"].includes(typeof en)) throw new Error(`Unknown pluralise value: ${String(en)}`);
      return (0, F.gY)(Number(en), Ln, !0);
    };
  }
  function Ei() {
    return Ln => !Ln;
  }
  function Wt() {
    return Ln => {
      if (!Ln) return "";
      const [en, mi] = Ln;
      return !!en && en.some(ro => Oi(ro, mi));
    };
  }
  function Oi(Ln, en) {
    return Array.isArray(Ln) ? Array.isArray(en) ? Ln.some(mi => Oi(en, mi)) : Ln.includes(Ji(Ln, en)) : Array.isArray(en) ? en.includes(Ji(en, Ln)) : Ln === Ji([Ln], en);
  }
  function Ji(Ln, en) {
    switch (typeof Ln[0]) {
      case "number":
        return Number(en);
      case "string":
        return String(en);
      default:
        return en;
    }
  }
  function Ao(Ln) {
    return en => ({
      optionalParam: Ln,
      ...en
    });
  }
  function Sr() {
    return Ln => ("string" != typeof Ln || "false" !== Ln) && Boolean(Ln);
  }
  Go.registerFilter("titlecase", Ln => Ln.toLowerCase().split(" ").map(en => en.charAt(0).toUpperCase() + en.slice(1)).join(" "));
  const us = new j.OlP("pipe-mapper-operator");
  let Ps = (() => {
    class Ln {
      constructor(mi = {}) {
        this.DEFAULT_OPERATORS = {
          "json-path": Nn,
          merge: Fi,
          age: vt,
          applyPipeSchema: li,
          join: jo,
          mask: fi,
          map: ti,
          dateFormat: To,
          dateTimeFormat: qn,
          dateNow: bi,
          intervalToDuration: Ci,
          intervalToType: lo,
          differenceInCalendarDays: Eo,
          liquid: ji,
          arrayToObject: an,
          minutesToTimeSpent: Rn,
          createObjectFromValue: Mn,
          createMatrixFromArray: $t,
          checkEmptyObject: zn,
          getFirstObjectFromArray: br,
          getObjectAttrValueByKey: Pr,
          iif: Di,
          firstArrayElementByType: Fo,
          dateToTime: Xn,
          specifiedParameter: Ao,
          pluralise: ki,
          reverseBoolean: Ei,
          someArray: Wt,
          toBoolean: Sr,
          createValue: Qn,
          enrichObject: Yi
        }, this.ALL_OPERATORS = {}, this.ALL_OPERATORS = {
          ...this.DEFAULT_OPERATORS,
          ...mi
        };
      }
      pipeBuild(mi) {
        return Yo(this.ALL_OPERATORS, mi);
      }
    }
    return Ln.ɵfac = function (mi) {
      return new (mi || Ln)(j.LFG(us, 8));
    }, Ln.ɵprov = j.Yz7({
      token: Ln,
      factory: Ln.ɵfac
    }), Ln;
  })();
  class hs {
    constructor(en, mi, ro) {
      this.item = en, this.rule = mi, this._value = ro;
    }
    match() {
      if ("in" === this.rule.operator) return this.in();
      throw new Error(`ArrayFilter: invalid rule operator - ${this.rule.operator}`);
    }
    in() {
      const en = this.getValueInItem(),
        mi = this.getComparisonValue();
      if (!Array.isArray(mi)) throw new Error("Invalid comparison value type, need array, current: " + typeof mi);
      return Array.isArray(en) ? en.every(ro => mi.includes(ro)) : mi.includes(en);
    }
    getValueInItem() {
      return Nn(this.rule.field)(this.item)[0];
    }
    getComparisonValue() {
      if (!Array.isArray(this.rule.value) && void 0 !== this.rule.value) throw new Error("Invalid default value format. Need array or undefined.");
      return "boolean" == typeof this._value ? this.rule.value : this._value;
    }
  }
  class oi {
    constructor(en) {
      this.matchResults = en;
    }
    match() {
      return this.matchResults.every(Boolean);
    }
  }
  class yo {
    constructor(en) {
      this.matchResults = en;
    }
    match() {
      return this.matchResults.includes(!0);
    }
  }
  class Qi {
    constructor(en, mi, ro) {
      this.item = en, this.rule = mi, this.currentDate = ro;
    }
    match() {
      if ("today" === this.rule.value) return (0, B.Z)((0, e.Z)(this.currentDate), (0, e.Z)(this.getValueInItem()));
      throw new Error(`StaticDate: invalid rule value - ${String(this.rule.value)}`);
    }
    getValueInItem() {
      return new Date(Nn(this.rule.field)(this.item));
    }
  }
  class Qo {
    constructor(en, mi, ro) {
      this.item = en, this.rule = mi, this.value = ro;
    }
    match() {
      switch (this.rule.operator) {
        case "=":
          return this.getValueInItem() === this.value;
        case "<":
          return this.getValueInItem() < this.value;
        case "<=":
          return this.getValueInItem() <= this.value;
        case ">":
          return this.getValueInItem() > this.value;
        case ">=":
          return this.getValueInItem() >= this.value;
        default:
          throw new Error(`TextFilter: invalid rule operator - ${this.rule.operator}`);
      }
    }
    getValueInItem() {
      return Nn(this.rule.field)(this.item)[0];
    }
  }
  class Kr {
    constructor(en) {
      this.matchResults = en;
    }
    match() {
      return this.matchResults.every(en => !1 === en);
    }
  }
  function ra(Ln, en, mi) {
    let ro;
    switch (en.operator) {
      case "or":
        ro = new yo(Or(Ln, en.items, mi));
        break;
      case "nested":
        ro = new oi(Or(Ln, function Fs(Ln) {
          return Ln.items.map(en => en?.field ? {
            ...en,
            field: en.field.replace(Ln.nestedPath, `${Ln.nestedPath}[*]`)
          } : en);
        }(en), mi));
        break;
      case "and":
        ro = new oi(Or(Ln, en.items, mi));
        break;
      case "not":
        ro = new Kr(Or(Ln, en.items, mi));
        break;
      case "staticDate":
        ro = new Qi(Ln, en, new Date());
        break;
      default:
        ro = function xa(Ln, en, mi) {
          return "multiple" === en.type ? new hs(Ln, en, mi) : (co(mi), new Qo(Ln, en, mi));
        }(Ln, en, mi);
    }
    return ro.match();
  }
  function Or(Ln, en, mi) {
    return en.map(ro => ra(Ln, ro, mi));
  }
  function rs(Ln, en) {
    let mi = Ln;
    return Array.isArray(en) ? (en.forEach(ro => {
      mi = Js(mi, ro);
    }), mi) : Js(Ln, en);
  }
  function Js(Ln, en) {
    const [mi, ro] = (en ?? "").split(":");
    switch (mi) {
      case "lowercase":
        if ("string" != typeof Ln) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: string`);
        return Ln.toLowerCase();
      case "uppercase":
        if ("string" != typeof Ln) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: string`);
        return Ln.toUpperCase();
      case "trim":
        if ("string" != typeof Ln) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: string`);
        return Ln.trim();
      case "escape":
        if ("string" != typeof Ln) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: string`);
        return (0, F.dm)(Ln);
      case "dateFormat":
        if (yi(Ln)) return function ho(Ln, en) {
          return {
            start: Ln.start ? uo(Ln.start, en) : null,
            end: Ln.end ? uo(Ln.end, en) : null
          };
        }(Ln, ro);
        if (!Re(Ln)) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: Date`);
        return uo(Ln, ro);
      case "getCode":
        return ri(Ln, "code");
      case "get":
        return ri(Ln, ro);
      default:
        return Ln;
    }
  }
  function uo(Ln, en) {
    if (!Re(Ln)) throw new Error(`Invalid filter value format: ${typeof Ln}. Expected: Date`);
    return (0, u.Z)(new Date(String(Ln)), en);
  }
  function ri(Ln, en) {
    if ("object" != typeof Ln && !Array.isArray(Ln) || void 0 === Ln[en] && void 0 === Ln[0][en]) throw new Error(`Invalid filter value: ${typeof Ln}. Expected: { ${en}: unknown } OR Array<{ ${en}: unknown }>`);
    return Array.isArray(Ln) ? Ln.filter(mi => !!mi[en]).map(mi => String(mi[en])) : Ln[en];
  }
  function Yt(Ln) {
    return yi(Ln) ? jt(Ln) : hn(Ln);
  }
  function jt(Ln) {
    return hn(Ln.start) || hn(Ln.end);
  }
  function hn(Ln) {
    const en = JSON.stringify(Ln);
    return null != Ln && !1 !== Ln && "" !== Ln && "{}" !== en && "[]" !== en;
  }
  function tn(Ln, en = new Date()) {
    return Re(Ln) ? Ln instanceof Date ? Ln.toISOString() : Ln : Ii(Ln) ? wo(Ln, en) : yi(Ln) && jt(Ln) && Ht(Ln) ? (0, F.J5)(Ln) : Ln;
  }
  function di(Ln, en, mi = new Date()) {
    return en.filterRuleValueFromWidget && !0 === Ln[en.field] ? di(Ln, {
      ...en,
      filterRuleValueFromWidget: void 0,
      field: en.filterRuleValueFromWidget
    }, mi) : en.terminology?.valueFrom && "object" == typeof Ln[en.field] && null !== Ln[en.field] ? Array.isArray(Ln[en.field]) ? function Gn(Ln, en) {
      return Ln.map(mi => dn(en, mi));
    }(Ln[en.field], en) : dn(en, Ln[en.field]) : ["number", "boolean"].includes(typeof Ln[en.field]) ? Ln[en.field] : Re(Ln[en.field]) ? Ln[en.field] instanceof Date ? Ln[en.field].toISOString() : Ln[en.field] : Ii(Ln[en.field]) ? wo(Ln[en.field], mi) : yi(Ln[en.field]) && jt(Ln[en.field]) && Ht(Ln[en.field]) ? (0, F.J5)(Ln[en.field]) : Ln[en.field];
  }
  function dn(Ln, en) {
    return Nn(Ln.terminology?.valueFrom ?? "")(en)[0];
  }
  function wo(Ln, en = new Date()) {
    const mi = Ln.slice(-1),
      ro = Number(Ln.slice(0, -1));
    return (0, F.$j)({
      start: ro,
      end: ro
    }, mi, en);
  }
  function Ro(Ln, en, mi) {
    let ro = Ln;
    return Array.isArray(en) ? (en.forEach(cr => {
      ro = _r(ro, cr, mi);
    }), ro) : _r(Ln, en, mi);
  }
  function _r(Ln, en, mi) {
    const [ro, cr] = (en ?? "").split(":");
    switch (ro) {
      case "yearsToDate":
        return (0, F.$j)(Ln, "Y", new Date());
      case "daysToDate":
        return (0, F.$j)(Ln, "D", new Date());
      case "timeToDate":
        return function qr(Ln, en, mi) {
          if (!mi) throw new Error("filterKey is required");
          if (!en) throw new Error("filter is required");
          const ro = en[mi];
          if (!ro) throw new Error("filterValue is required");
          return (0, F.mu)(Ln, ro);
        }(Ln, mi, cr);
      default:
        return Ln;
    }
  }
  function Ts(Ln, en) {
    const mi = {};
    return Ln.forEach(ro => {
      mi[ro.field] = en[ro.field] ?? function js(Ln) {
        return Array.isArray(Ln.initialValue) ? [] : yi(Ln.initialValue) ? {
          start: null,
          end: null
        } : null;
      }(ro);
    }), mi;
  }
  function Ws(Ln, en) {
    const mi = Ln.options?.filter ?? {};
    return !(!ua(mi) || !ua(en)) || st(function ha(Ln, en) {
      const mi = {
        ...en,
        ...Ln
      };
      return Object.keys(mi).reduce((ro, cr) => ({
        ...ro,
        [cr]: null != Ln[cr] ? Ln[cr] : da(en[cr])
      }), {});
    }(mi, en), function sa(Ln, en) {
      return Object.keys(Ln).reduce((mi, ro) => ({
        ...mi,
        [ro]: "{{current}}" === en[ro] ? "{{current}}" : Ln[ro]
      }), {});
    }(en, mi));
  }
  function ua(Ln) {
    return yi(Ln) ? ua(Ln.start) && ua(Ln.end) : !Re(Ln) && ("object" != typeof Ln || Array.isArray(Ln) ? null == Ln || "" === Ln || Array.isArray(Ln) && 0 === Ln.length : !(0, F.Yh)(Ln));
  }
  function da(Ln) {
    return ua(Ln) ? Ln : null;
  }
  function na(Ln, en) {
    return Object.keys(Ln).reduce((mi, ro) => ({
      ...mi,
      [ro]: "{{current}}" === Ln[ro] ? en[ro] : Ln[ro]
    }), {});
  }
  function Qs(Ln, en) {
    return en.reduce((mi, ro) => ({
      ...mi,
      [ro]: Ln[ro]
    }), {});
  }
  function Xs(Ln, en) {
    const mi = Ln.controls,
      ro = en.map(cr => cr.field);
    Object.keys(mi).forEach(cr => {
      ro.includes(cr) || Ln.removeControl(cr);
    }), en.forEach(cr => {
      const jr = mi[cr.field];
      jr ? function Ks(Ln, en) {
        Ln.enabled && Ln.value !== en.value && Ln.setValue(en.value, {
          emitEvent: !1
        }), Ln.disabled !== en.disabled && (en.disabled ? Ln.disable({
          emitEvent: !1
        }) : Ln.enable({
          emitEvent: !1
        }));
      }(jr, cr) : Ln.addControl(cr.field, new qe.NI({
        value: cr.value,
        disabled: cr.disabled
      }));
    });
  }
  function ba(Ln, en) {
    return !(ua(Ln) && ua(en) || function qs(Ln, en) {
      return !1 === Ln && void 0 === en;
    }(Ln, en) || function Ri(Ln, en) {
      return void 0 === Ln && !1 === en;
    }(Ln, en) || st(Ln, en));
  }
  class ci {
    constructor(en) {
      this.formGroup = new qe.cw({}), this.initialValue = function $o(Ln) {
        const en = {};
        return Ln.forEach(mi => {
          en[mi.field] = mi.initialValue;
        }), en;
      }(en), this.formGroup = function ws(Ln) {
        return new qe.cw(Ln.reduce((en, mi) => ({
          ...en,
          [mi.field]: new qe.NI({
            value: mi.value ?? mi.initialValue ?? null,
            disabled: mi.disabled
          })
        }), {}));
      }(en), this.fields = en;
    }
    isDirtyValue() {
      return !st(this.initialValue, this.getValue());
    }
    getFormGroup() {
      return this.formGroup;
    }
    resetToInitial() {
      this.formGroup.setValue(this.initialValue);
    }
    resetOnlyFieldsToInitial(en) {
      this.formGroup.patchValue(Qs(this.initialValue, en));
    }
    getValue() {
      return Object.keys(this.getFormGroup().getRawValue()).reduce((en, mi) => mi in en ? en : {
        ...en,
        [mi]: this.initialValue[mi]
      }, this.getFormGroup().value);
    }
    setValue(en) {
      this.formGroup.setValue(Ts(this.fields, en));
    }
    setValueWithoutRunChanges(en) {
      this.formGroup.setValue(Ts(this.fields, en), {
        emitEvent: !1
      });
    }
    actualValueCorrespondsFilter(en) {
      return st(this.formGroup.getRawValue(), na(Ts(this.fields, en), this.formGroup.value));
    }
    updateControlsStatus(en) {
      Xs(this.formGroup, en), this.fields = en;
    }
    isEmptyFields(en) {
      return en.every(mi => {
        const ro = this.getFieldByName(mi);
        return !ro || JSON.stringify(this.formGroup.get(ro.field)?.value) === JSON.stringify(ro.initialValue);
      });
    }
    quickFiltersValueChanges() {
      return this.formGroup.valueChanges.pipe((0, G.O)(this.formGroup.value), (0, te.G)(), (0, pe.h)(([en, mi]) => function Va(Ln, en, mi) {
        return mi.filter(ro => !!ro.options?.isQuick).reduce((ro, cr) => ro || ba(Ln[cr.field], en[cr.field]), !1);
      }(en, mi, this.fields)), (0, be.U)(([, en]) => en));
    }
    getFieldByName(en) {
      return this.fields.find(mi => mi.field === en);
    }
  }
  function Gi(Ln, en) {
    const mi = {};
    return Ln.forEach(ro => {
      mi[ro.field] = Ws(ro, en);
    }), mi;
  }
  class Fn {
    constructor(en, mi) {
      this.formGroup = new qe.cw({}), this.formGroup = function Us(Ln, en) {
        return new qe.cw(Ln.reduce((mi, ro) => ({
          ...mi,
          [ro.field]: new qe.NI({
            value: en ? Ws(ro, en) : ro.value,
            disabled: ro.disabled
          })
        }), {}));
      }(en, mi), this.changePresetValue(), this.fields = en;
    }
    getFormGroup() {
      return this.formGroup;
    }
    setValue(en) {
      this.formGroup.setValue(Gi(this.fields, en));
    }
    getFilterValue(en) {
      const mi = Object.keys(en).find(ro => en[ro]);
      if (mi) return this.fields.find(ro => ro.field === mi)?.options?.filter;
      throw new Error("Unknown preset");
    }
    updateControlsStatus(en) {
      Xs(this.formGroup, en), this.fields = en;
    }
    actualPresetCorrespondsFilter(en) {
      return st(this.formGroup.value, Gi(this.fields, en));
    }
    valueChanges() {
      return this.formGroup.valueChanges.pipe((0, G.O)(this.formGroup.value), (0, pe.h)(en => Object.keys(en).filter(mi => !!en[mi]).length <= 1), (0, te.G)(), (0, pe.h)(([en, mi]) => JSON.stringify(en) !== JSON.stringify(mi)), (0, le.p)(0), (0, be.U)(([en, mi]) => this.getActualValue(en, mi)), (0, n.x)((en, mi) => JSON.stringify(en) === JSON.stringify(mi)), (0, be.U)(en => {
        const mi = Object.keys(en).find(ro => !!en[ro]);
        if (mi) return this.fields.find(ro => ro.field === mi)?.options?.filter;
      }), (0, pe.h)(en => !!en));
    }
    changePresetValue() {
      let en;
      this.formGroup.valueChanges.pipe((0, pe.h)(() => {
        const mi = en;
        return en = void 0, JSON.stringify(this.formGroup.getRawValue()) !== JSON.stringify(mi);
      }), (0, G.O)(this.formGroup.value), (0, te.G)(), (0, pe.h)(([mi, ro]) => JSON.stringify(mi) !== JSON.stringify(ro)), (0, be.U)(([mi, ro]) => this.getActualValue(mi, ro)), (0, pe.h)(mi => JSON.stringify(this.formGroup.getRawValue()) !== JSON.stringify(mi))).subscribe(mi => {
        en = mi, this.formGroup.setValue(mi);
      });
    }
    getActualValue(en, mi) {
      const ro = {};
      return Object.keys(this.formGroup.getRawValue()).forEach(cr => {
        ro[cr] = (!en[cr] || !mi[cr]) && (!(en[cr] || !mi[cr]) || (mi[cr] ?? !1));
      }), ro;
    }
  }
  class Io {
    constructor(en) {
      this.fields = en, this.immediatelyChanges = new ye.x(), this.subs = [], this.filter = new ci(this.filterFieldsByType(en, "filter")), this.groupBy = new ci(this.filterFieldsByType(en, "group")), this.preset = new Fn(this.filterFieldsByType(en, "preset"), this.filter.getFormGroup().getRawValue()), this.onPresetValueChanges();
    }
    updateControlsStatus(en) {
      this.filter.updateControlsStatus(this.filterFieldsByType(en, "filter")), this.preset.updateControlsStatus(this.filterFieldsByType(en, "preset"));
    }
    getFormValueByType(en) {
      switch (en) {
        case "filter":
          return this.getFormGroupByType("filter").value;
        case "group":
          return this.getFormGroupByType("group").value;
        default:
          throw new Error(`FormGroupBuilder: invalid field type - ${en}`);
      }
    }
    get invalidFilters() {
      return this.getFormGroupByType("filter").invalid;
    }
    get dirtyFilterValue() {
      return this.filter.isDirtyValue();
    }
    getFormGroupByType(en) {
      switch (en) {
        case "filter":
          return this.filter.getFormGroup();
        case "preset":
          return this.preset.getFormGroup();
        case "group":
          return this.groupBy.getFormGroup();
        default:
          throw new Error(`FormGroupBuilder: invalid field type - ${en}`);
      }
    }
    getFormValueByTypes(en) {
      return en.reduce((mi, ro) => ({
        ...mi,
        ...this.getFormValueByType(ro)
      }), {});
    }
    getControlByField(en, mi) {
      switch (mi) {
        case "filter":
          return this.filter.getFormGroup().get(en);
        case "preset":
          return this.preset.getFormGroup().get(en);
        case "group":
          return this.groupBy.getFormGroup().get(en);
        default:
          throw new Error(`FormGroupBuilder: invalid field type - ${mi}`);
      }
    }
    filterValueChanges() {
      return (0, ae.T)(this.filter.getFormGroup().valueChanges, this.preset.valueChanges().pipe((0, be.U)(en => na(en, this.getFormValueByType("filter")))));
    }
    getValue() {
      return this.filter.getFormGroup().value;
    }
    getImmediatelyChanges() {
      return (0, ae.T)(this.preset.valueChanges().pipe((0, be.U)(en => na(en, this.filter.getFormGroup().getRawValue()))), this.filter.quickFiltersValueChanges(), this.immediatelyChanges).pipe(function zi(Ln) {
        let en;
        return (0, fe.z)((0, Se.b)(() => {
          en && Date.now() - en > Ln && (en = void 0);
        }), (0, pe.h)(() => !en), (0, Se.b)(() => {
          en = Date.now();
        }));
      }(10));
    }
    destroy() {
      this.closeEvents();
    }
    closeEvents() {
      this.subs.forEach(en => en.unsubscribe());
    }
    resetToInitial() {
      this.filter.resetToInitial(), this.immediatelyChanges.next({
        ...this.filter.getFormGroup().value
      });
    }
    resetFilterToInitial() {
      this.resetToInitial();
    }
    resetOnlyFieldsToInitial(en) {
      this.filter.resetOnlyFieldsToInitial(en), this.immediatelyChanges.next({
        ...this.filter.getFormGroup().value
      });
    }
    isEmpty(en) {
      return this.filter.isEmptyFields(en.map(mi => mi.field));
    }
    apply() {
      const en = this.filter.getFormGroup().getRawValue();
      this.preset.actualPresetCorrespondsFilter(en) || this.preset.setValue(en);
    }
    groupByValueChanges() {
      return this.groupBy.getFormGroup().valueChanges;
    }
    filterFieldsByType(en, mi) {
      return en.filter(ro => ro.type === mi);
    }
    onPresetValueChanges() {
      this.preset.valueChanges().pipe((0, pe.h)(en => !this.filter.actualValueCorrespondsFilter(en))).subscribe(en => {
        this.filter.setValue(na(en, this.getFormValueByType("filter")));
      });
    }
    hasChangesInFilterValue(en, mi) {
      return this.fields.reduce((ro, cr) => ro || ba(en[cr.field], mi[cr.field]), !1);
    }
  }
  class Kt {
    constructor(en) {
      this.fields = en, this.destroy$ = new ye.x(), this.filter = new ci(this.filterFieldsByType(en, "filter")), this.groupBy = new ci(this.filterFieldsByType(en, "group")), this.preset = new Fn(this.filterFieldsByType(en, "preset")), this.disableControlsWatching(en);
    }
    updateControlsStatus(en) {
      this.destroy$.next(), this.filter.updateControlsStatus(this.filterFieldsByType(en, "filter")), this.groupBy.updateControlsStatus(this.filterFieldsByType(en, "group")), this.preset.updateControlsStatus(this.filterFieldsByType(en, "preset")), this.disableControlsWatching(en);
    }
    destroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    disableControlsWatching(en) {
      en.filter(mi => mi.disableRule).length > 0 && (0, ae.T)(this.filter.getFormGroup().valueChanges, this.groupBy.getFormGroup().valueChanges).pipe((0, be.U)(() => ({
        ...this.filter.getFormGroup().getRawValue(),
        ...this.groupBy.getFormGroup().getRawValue()
      })), (0, Y.R)(this.destroy$)).subscribe(mi => this.updateControlsStatus(this.updateFieldsDisabledByRule(en, mi)));
    }
    updateFieldsDisabledByRule(en, mi) {
      const ro = function gi(Ln) {
        const en = {};
        return Ln.forEach(mi => {
          en[mi.field] = mi.value ?? null;
        }), en;
      }(en);
      return en.map(cr => {
        if (cr.disableRule) {
          const jr = (0, F.S7)(cr.disableRule, {
            filter: ro,
            formValue: mi
          });
          return {
            ...cr,
            value: cr.options?.clearValueIfDisabled && jr ? null : mi[cr.field],
            disabled: jr
          };
        }
        return {
          ...cr,
          value: mi[cr.field]
        };
      });
    }
    getControlByField(en, mi) {
      switch (mi) {
        case "filter":
          return this.filter.getFormGroup().get(en);
        case "preset":
          return this.preset.getFormGroup().get(en);
        case "group":
          return this.groupBy.getFormGroup().get(en);
        default:
          throw new Error(`FormGroupBuilder: invalid field type - ${mi}`);
      }
    }
    get invalidFilters() {
      return this.filter.getFormGroup().invalid;
    }
    get dirtyFilterValue() {
      return this.filter.isDirtyValue();
    }
    resetFilterToInitial() {
      this.filter.resetToInitial();
    }
    filterValueChanges() {
      return (0, ae.T)(this.filter.getFormGroup().valueChanges.pipe((0, be.U)(() => this.filter.getValue())), this.preset.getFormGroup().valueChanges.pipe((0, be.U)(en => this.preset.getFilterValue(en))));
    }
    getValue() {
      return this.filter.getValue();
    }
    groupByValueChanges() {
      return this.groupBy.getFormGroup().valueChanges;
    }
    filterFieldsByType(en, mi) {
      return en.filter(ro => ro.type === mi);
    }
  }
  const Vt = new j.OlP("UniversalListConfigurationToken");
  function pi(Ln) {
    const {
      path: en,
      rule: mi
    } = Ln;
    return ro => {
      if (!Array.isArray(ro)) throw new SyntaxError("Error");
      return ro.map(cr => {
        const jr = Nn(en)(cr)[0] ?? [];
        if (void 0 === mi.value) throw new Error("Invalid rule default value, value cant be undefined");
        const as = function _s(Ln, en, mi) {
          return Ln.filter(ro => ra(ro, en, mi));
        }(jr, mi, mi.value);
        return (0, F.lv)(cr, `${en}`, as);
      });
    };
  }
  function xo(Ln) {
    return en => {
      if (!Array.isArray(en)) throw new SyntaxError("Error");
      if (!Array.isArray(Ln) || 0 === Ln.length) throw new SyntaxError("Invalid option fields");
      return en.reduce((mi, ro) => [...mi, ...No(ro, Ln)], []);
    };
  }
  function No(Ln, en) {
    let mi = Ko(Ln, en[0]),
      ro = 1;
    for (; ro < en.length;) mi = mi.map(cr => Ko(cr, en[ro])).reduce((cr, jr) => [...cr, ...jr], []), ro += 1;
    return mi;
  }
  function Ko(Ln, en) {
    const mi = function Mi(Ln, en) {
      const mi = en.split(".");
      if (0 === mi.length) return;
      let ro = Ln[mi[0]];
      for (let cr = 1; cr < mi.length; cr++) {
        if (void 0 === ro) return;
        ro = ro[mi[cr]];
      }
      return ro;
    }(Ln, en);
    return Array.isArray(mi) ? (mi.length > 0 ? mi : [void 0]).map(ro => (0, F.lv)(Ln, en, ro)) : [Ln];
  }
  function It({
    fields: Ln,
    id: en,
    clearLevel: mi
  }) {
    return ro => new At(ro, Ln, en, mi ?? 0).innerMerge();
  }
  class At {
    constructor(en, mi, ro, cr) {
      return this.items = en, this.fields = mi, this.id = ro, this.clearLevel = cr, this;
    }
    innerMerge() {
      const en = [],
        mi = [];
      return this.items.forEach(ro => {
        const cr = this.createKeys(ro, this.fields, this.id);
        this.inKeys(cr, mi) || (this.checkEqualsValuesInFields(ro, this.fields) ? en.push(ro) : en.push(this.setUndefinedInFields(ro, this.getFamousFields(cr, mi), this.clearLevel))), mi.push(...cr);
      }), en;
    }
    setUndefinedInFields(en, mi, ro) {
      return mi.reduce((cr, jr) => {
        const as = ro ? jr.split(".").slice(0, -ro).join(".") : jr;
        return (0, F.lv)(cr, as, void 0);
      }, en);
    }
    inKeys(en, mi) {
      return en.every(ro => mi.includes(ro));
    }
    rightKeys(en, mi) {
      return en.filter(ro => mi.includes(ro));
    }
    getFamousFields(en, mi) {
      return this.rightKeys(en, mi).map(ro => ro.split(":")[1]);
    }
    createKeys(en, mi, ro) {
      const cr = [],
        jr = Nn(ro)(en)[0];
      return mi.forEach(as => {
        const Da = Nn(as)(en)[0];
        cr.push(`${String(jr)}:${as}:${String(Da)}`);
      }), cr;
    }
    checkEqualsValuesInFields(en, mi) {
      let ro = (0, F.Xy)(Nn(mi[0])(en), Nn(mi[1])(en)),
        cr = 1;
      for (; cr < mi.length && ro;) mi[cr + 1] && (ro = ro && (0, F.Xy)(Nn(mi[cr])(en), Nn(mi[cr + 1])(en))), cr += 1;
      return ro;
    }
  }
  function _n(Ln, en) {
    return (mi, {
      queryParams: ro,
      context: cr
    }) => {
      if (!Array.isArray(mi)) throw new SyntaxError("Error");
      return mi.map(jr => {
        const as = {};
        return Object.keys(Ln).forEach(Da => {
          as[Da] = en(Ln[Da])({
            item: jr,
            queryParams: ro,
            context: cr
          });
        }), {
          ...jr,
          ...as
        };
      });
    };
  }
  function _e(Ln) {
    const [en, mi] = function ni(Ln) {
        const [en, mi] = Ln.split("[*]");
        return [`${en}[*]`, `$${mi}`];
      }(Ln.splitByPath),
      ro = function gt(Ln) {
        return Ln.replace("$.", "").replace("[*]", "");
      }(en);
    return cr => {
      if (!Array.isArray(cr)) throw new SyntaxError("Error");
      return cr.map(jr => {
        const as = (0, y.j)({
            path: en,
            json: jr
          }),
          Da = function Er(Ln, en, mi) {
            const ro = (0, y.j)({
                path: en,
                json: Ln
              }),
              cr = [];
            return ro.forEach((jr, as) => {
              if (0 === as) cr.push([jr]);else {
                const Da = mi.find(As => As.includes(jr)) ?? [],
                  vo = cr.findIndex(As => As.includes(jr) || Da.some(dl => As.includes(dl)));
                -1 === vo ? cr.push([jr]) : cr[vo].includes(jr) || cr[vo].push(jr);
              }
            }), cr;
          }(jr, Ln.splitByPath, Ln.grouping ?? []);
        return Da.length <= 1 ? [jr] : Da.map(vo => (0, F.lv)(jr, ro, function So(Ln, en, mi) {
          return Ln.filter(ro => {
            const cr = (0, y.j)({
              path: en,
              json: ro
            });
            return mi.includes(cr[0]);
          });
        }(as, mi, vo)));
      }).reduce((jr, as) => [...jr, ...as], []);
    };
  }
  const Br = new j.OlP("post-processing-mapper-operator");
  let vr = (() => {
    class Ln {
      constructor(mi = {}, ro) {
        this.pipeMapper = ro, this.DEFAULT_OPERATORS = {
          flatBy: xo,
          merge: It,
          filter: pi,
          mutation: _n,
          split: _e
        }, this.ALL_OPERATORS = {}, this.ALL_OPERATORS = {
          ...this.DEFAULT_OPERATORS,
          ...mi
        };
      }
      pipeBuild(mi) {
        return function it(Ln, en, mi) {
          return (ro, ...cr) => {
            try {
              return en.map(jr => "string" == typeof jr ? Ln[jr](void 0, mi) : Ln[jr.name](jr.options, mi)).reduce((jr, as) => Da => as(jr ? jr(Da) : Da, ...cr), jr => jr)(ro, ...cr);
            } catch (jr) {
              return console.error(jr), "error";
            }
          };
        }(this.ALL_OPERATORS, mi, this.pipeMapper.pipeBuild.bind(this.pipeMapper));
      }
    }
    return Ln.ɵfac = function (mi) {
      return new (mi || Ln)(j.LFG(Br, 8), j.LFG(Ps));
    }, Ln.ɵprov = j.Yz7({
      token: Ln,
      factory: Ln.ɵfac
    }), Ln;
  })();
  function ks(Ln, en) {
    if (!en) return Ln;
    const mi = Object.keys(en);
    return an(mi)(mi.map(ro => {
      const cr = Nn(en[ro])(Ln);
      return cr.length > 1 ? cr : cr[0];
    }));
  }
  class aa {
    constructor(en, mi) {
      this.config = en, this.iconName = en.iconName, this.iconType = en.iconType, this.title = en.title, this.haveDivider = en.haveDivider, this.titleInTooltip = en.titleInTooltip, this.tooltip = en.tooltip, this.action = en.action, this.data = en.data, this.displayRules = en.displayRules, this.subItems = en.subItems, this.tooltipHint = en.tooltipHint, this.children = en.children ? en.children.map(ro => new aa(ro, mi)) : void 0, this.subItemsMapper = en.subItems ? mi.pipeBuild(en.subItems) : void 0;
    }
  }
  class ja {
    constructor({
      configJson: en,
      items: mi,
      pipeMapperService: ro,
      postProcessingMapperService: cr,
      excludeParts: jr,
      queryParams: as,
      context: Da
    }) {
      this.title = en.title, this.contextMenu = this.filterRowActions(en.contextMenu, jr.excludeActions || []).map(vo => new aa(vo, ro)), this.toolbox = this.filterRowActions(en.toolbox, jr.excludeActions || []).map(vo => new aa(vo, ro)), this.rowActions = this.filterRowActions(en.rowActions ?? [], jr.excludeActions || []), this.columns = this.filterColumns(en.columns, jr.excludeColumns || []).map((vo, As) => new ul(vo, vo.id ?? `${As}_${vo.head[0].header[0].caption}`, ro, en.datasource.sorting.includeSortKeys, en.styles)), this.items = this.addTechnicalId(cr.pipeBuild(en.datasource.postProcessing)(mi, {
        queryParams: as,
        context: Da
      }), en), this.rowDblClickEventFn = this.createRowSelectFn(en, ro, "dblclick"), this.rowClickEventFn = this.createRowSelectFn(en, ro, "click"), this.rowDisabledInfo = en.rows?.disable ? this.setRowDisabledInfo(en.rows.disable, ro) : void 0, this.rowBackgroundColorFn = en.rows?.styles?.background?.pipe ? ro.pipeBuild(en.rows.styles.background.pipe) : void 0, this.individualRulesDisplayingActions = this.createIndividualRulesDisplayingActions(this.items, this.filterActionsWithDisplayRules([...this.toolbox, ...this.contextMenu]), ro), this.usePaginator = this.getTableOption(en)?.usePaginator ?? !1, this.showTotalInQuery = this.getTableOption(en)?.showTotalInQuery ?? !1, this.selectionOptions = this.getTableOption(en)?.useMultipleRowSelection ?? void 0, this.tableOptions = this.getTableOption(en), this.tableCellPaddingY = this.getTableOption(en)?.tableCellPaddingY;
    }
    createRowSelectFn(en, mi, ro = "click") {
      const cr = [...this.contextMenu, ...this.toolbox, ...this.rowActions];
      return en.rows?.event?.[ro] ? jr => {
        const as = en.rows?.event?.[ro];
        if (as) {
          if ("select" === as.type) return {
            action: Rt.dU,
            data: this.createPipeFnRowEvent(as, cr, mi, jr)?.data
          };
          if ("action" === as.type) return this.createPipeFnRowEvent(as, cr, mi, jr);
        }
      } : () => {};
    }
    createPipeFnRowEvent(en, mi, ro, cr) {
      if (!en.value) return;
      if ("string" == typeof en.value) {
        const as = mi.find(Da => Da.action === en.value || Da.children?.some(vo => vo.action === en.value));
        return as ? {
          action: as.action,
          data: ks(cr, as.data)
        } : void 0;
      }
      const jr = ro.pipeBuild(en.value)(cr);
      return "action" in jr && "data" in jr ? jr : void 0;
    }
    getTableOption(en) {
      return (0, Rt.s1)(en);
    }
    setRowDisabledInfo(en, mi) {
      return {
        disableFn: mi.pipeBuild(en.conditions),
        disableReasonFn: en.reason ? mi.pipeBuild(en.reason) : () => ""
      };
    }
    addTechnicalId(en, mi) {
      return en.map(ro => {
        return {
          ...ro,
          _techId: (Ln = mi.datasource.uniqueKeyPipe, en => Ln ? Nn(Ln)(en)[0] : "")(ro)
        };
        var Ln;
      });
    }
    filterActionsWithDisplayRules(en) {
      const mi = [];
      return en.forEach(ro => {
        ro.displayRules && ro.displayRules.length > 0 && mi.push(ro), ro.children && ro.children.length > 0 && mi.push(...this.filterActionsWithDisplayRules(ro.children));
      }), mi;
    }
    createIndividualRulesDisplayingActions(en, mi, ro) {
      const cr = {};
      return en.forEach(jr => {
        const as = jr._techId;
        cr[as] = {}, mi.forEach(Da => {
          cr[as][Da.action + Da.iconName + Da.title] = ro.pipeBuild(Da.displayRules ?? [])(jr);
        });
      }), cr;
    }
    filterColumns(en, mi) {
      return 0 === mi?.length ? en : en.filter(ro => !ro.id || !mi.includes(ro.id));
    }
    filterRowActions(en, mi) {
      return 0 === mi.length ? en : en.map(cr => ({
        ...cr,
        children: cr.children?.filter(jr => !mi.includes(jr.action))
      })).filter((cr, jr) => {
        const as = mi.includes(cr.action);
        return en[jr].children?.length ? !as && !!cr.children?.length : !as;
      });
    }
  }
  class ul {
    constructor(en, mi, ro, cr, jr) {
      this.includeSortKeys = cr, this.id = mi.toString(), this.type = en.cell.type, this.cellMapper = ro.pipeBuild(en.cell.pipe), this.widgetMapper = this.convertWidgetMapper(ro, en.cell.widgetKeyPipe), this.widgetDataMapper = this.convertWidgetDataMapper(ro, en.cell.widgetPipe), this.width = en.width, this.head = this.updateSortKey(en.head), this.alignContent = en.cell.alignContent, this.textSize = jr?.textSize || "normal", this.canMove = en.canMove, this.canHide = en.canHide, this.hiddenByDefault = en.hiddenByDefault, this.hideIf = en.cell.hideIf;
    }
    convertWidgetMapper(en, mi) {
      return Array.isArray(mi) && mi.length > 0 ? en.pipeBuild(mi) : void 0;
    }
    convertWidgetDataMapper(en, mi) {
      if (mi) return {
        key: Array.isArray(mi.key) && mi.key.length > 0 ? en.pipeBuild(mi.key) : mi.key,
        data: en.pipeBuild(mi.data)
      };
    }
    updateSortKey(en) {
      return en.map(mi => ({
        ...mi,
        header: mi.header.map(ro => ({
          ...ro,
          sortKey: this.includeSortKeys.includes(ro.sortKey ?? "") ? ro.sortKey : ""
        }))
      }));
    }
  }
});
