// Extracted from main; webpack module 86936. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Kj: () => eo
  });
  class t {
    constructor(me, ze, xt, wn, Ai) {
      this.kind = me, this.input = ze, this.begin = xt, this.end = wn, this.file = Ai;
    }
    getText() {
      return this.input.slice(this.begin, this.end);
    }
    getPosition() {
      let [me, ze] = [1, 1];
      for (let xt = 0; xt < this.begin; xt++) "\n" === this.input[xt] ? (me++, ze = 1) : ze++;
      return [me, ze];
    }
    size() {
      return this.end - this.begin;
    }
  }
  class e {
    liquidMethodMissing(me, ze) {}
  }
  const a = Object.prototype.toString,
    m = String.prototype.toLowerCase,
    d = Object.hasOwnProperty;
  function M(Ve) {
    return "string" == typeof Ve;
  }
  function b(Ve) {
    return "function" == typeof Ve;
  }
  function A(Ve) {
    return Ve && b(Ve.then);
  }
  function N(Ve) {
    return Ve && b(Ve.next) && b(Ve.throw) && b(Ve.return);
  }
  function O(Ve) {
    return M(Ve = v(Ve)) ? Ve : x(Ve) ? "" : T(Ve) ? Ve.map(me => O(me)).join("") : String(Ve);
  }
  function L(Ve) {
    return T(Ve = v(Ve)) ? Ve : M(Ve) && Ve.length > 0 ? [Ve] : function B(Ve) {
      return W(Ve) && Symbol.iterator in Ve;
    }(Ve) ? Array.from(Ve) : W(Ve) ? Object.keys(Ve).map(me => [me, Ve[me]]) : [];
  }
  function C(Ve) {
    return x(Ve = v(Ve)) ? [] : T(Ve) ? Ve : [Ve];
  }
  function v(Ve) {
    return Ve instanceof e && b(Ve.valueOf) ? Ve.valueOf() : Ve;
  }
  function f(Ve) {
    return +v(Ve) || 0;
  }
  function E(Ve) {
    return "number" == typeof Ve;
  }
  function h(Ve) {
    return Ve && b(Ve.toLiquid) ? h(Ve.toLiquid()) : Ve;
  }
  function x(Ve) {
    return null == Ve;
  }
  function T(Ve) {
    return "[object Array]" === a.call(Ve);
  }
  function R(Ve) {
    return Ve && E(Ve.length);
  }
  function y(Ve, me) {
    Ve = Ve || {};
    for (const ze in Ve) if (d.call(Ve, ze) && !1 === me(Ve[ze], ze, Ve)) break;
    return Ve;
  }
  function j(Ve) {
    return Ve[Ve.length - 1];
  }
  function W(Ve) {
    const me = typeof Ve;
    return null !== Ve && ("object" === me || "function" === me);
  }
  function F(Ve, me, ze = 1) {
    const xt = [];
    for (let wn = Ve; wn < me; wn += ze) xt.push(wn);
    return xt;
  }
  function Le(Ve, me, ze = " ") {
    return J(Ve, me, ze, (xt, wn) => wn + xt);
  }
  function J(Ve, me, ze, xt) {
    let wn = me - (Ve = String(Ve)).length;
    for (; wn-- > 0;) Ve = xt(Ve, ze);
    return Ve;
  }
  function fe(Ve) {
    return Ve;
  }
  function Y(Ve, me) {
    return null == Ve && null == me ? 0 : null == Ve ? 1 : null == me || (Ve = m.call(Ve)) < (me = m.call(me)) ? -1 : Ve > me ? 1 : 0;
  }
  function G(Ve) {
    return function (...me) {
      return Ve.call(this, ...me.map(v));
    };
  }
  function te(Ve) {
    return function (...me) {
      return Ve.call(this, ...me.map(f));
    };
  }
  function pe(Ve) {
    return Ve.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  function* be(Ve) {
    const me = new Set();
    for (const ze of Ve) {
      const xt = JSON.stringify(ze);
      me.has(xt) || (me.add(xt), yield ze);
    }
  }
  const le = "__liquidClass__";
  class n extends Error {
    constructor(me, ze) {
      super("string" == typeof me ? me : me.message), this.context = "", "string" != typeof me && Object.defineProperty(this, "originalError", {
        value: me,
        enumerable: !1
      }), Object.defineProperty(this, "token", {
        value: ze,
        enumerable: !1
      }), Object.defineProperty(this, le, {
        value: "LiquidError",
        enumerable: !1
      });
    }
    update() {
      Object.defineProperty(this, "context", {
        value: mt(this.token),
        enumerable: !1
      }), this.message = function ut(Ve, me) {
        me.file && (Ve += `, file:${me.file}`);
        const [ze, xt] = me.getPosition();
        return Ve + `, line:${ze}, col:${xt}`;
      }(this.message, this.token), this.stack = this.message + "\n" + this.context + "\n" + this.stack, this.originalError && (this.stack += "\nFrom " + this.originalError.stack);
    }
    static is(me) {
      return "LiquidError" === me?.[le];
    }
  }
  class Se extends n {
    constructor(me, ze) {
      super(me, ze), this.name = "TokenizationError", super.update();
    }
  }
  class qe extends n {
    constructor(me, ze) {
      super(me, ze), this.name = "ParseError", this.message = me.message, super.update();
    }
  }
  class Rt extends n {
    constructor(me, ze) {
      super(me, ze.token), this.name = "RenderError", this.message = me.message, super.update();
    }
    static is(me) {
      return "RenderError" === me.name;
    }
  }
  class We extends n {
    constructor(me) {
      super(me[0], me[0].token), this.errors = me, this.name = "LiquidErrors", this.message = `${me.length} error${me.length > 1 ? "s" : ""} found`, super.update();
    }
    static is(me) {
      return "LiquidErrors" === me.name;
    }
  }
  class Re extends n {
    constructor(me, ze) {
      super(me, ze), this.name = "UndefinedVariableError", this.message = me.message, super.update();
    }
  }
  class st extends Error {
    constructor(me) {
      super(`undefined variable: ${me}`), this.name = "InternalUndefinedVariableError", this.variableName = me;
    }
  }
  class q extends Error {
    constructor(me) {
      super(me), this.name = "AssertionError", this.message = me + "";
    }
  }
  function mt(Ve) {
    const [me, ze] = Ve.getPosition(),
      xt = Ve.input.split("\n"),
      wn = Math.max(me - 2, 1),
      Ai = Math.min(me + 3, xt.length);
    return F(wn, Ai + 1).map(mr => {
      let Jr = `${mr === me ? ">> " : "   "}${Le(String(mr), String(Ai).length)}| `;
      const Ca = mr === me ? "\n" + Le("^", ze + Jr.length) : "";
      return Jr += xt[mr - 1], Jr += Ca, Jr;
    }).join("\n");
  }
  const Ct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    Ft = 1,
    Et = 4,
    Me = 16;
  function je(Ve) {
    const me = Ve.charCodeAt(0);
    return me >= 128 ? !Ct[me] : !!(Ct[me] & Ft);
  }
  function Mt(Ve, me) {
    if (!Ve) {
      const ze = "function" == typeof me ? me() : me || `expect ${Ve} to be true`;
      throw new q(ze);
    }
  }
  function Je(Ve, me = `unexpected ${JSON.stringify(Ve)}`) {
    Mt(!Ve, me);
  }
  Ct[160] = Ct[5760] = Ct[6158] = Ct[8192] = Ct[8193] = Ct[8194] = Ct[8195] = Ct[8196] = Ct[8197] = Ct[8198] = Ct[8199] = Ct[8200] = Ct[8201] = Ct[8202] = Ct[8232] = Ct[8233] = Ct[8239] = Ct[8287] = Ct[12288] = Et, Ct[8220] = Ct[8221] = 128;
  class Nn extends e {
    equals(me) {
      return !(me instanceof Nn || (M(me = v(me)) || T(me) ? 0 !== me.length : !W(me) || 0 !== Object.keys(me).length));
    }
    gt() {
      return !1;
    }
    geq() {
      return !1;
    }
    lt() {
      return !1;
    }
    leq() {
      return !1;
    }
    valueOf() {
      return "";
    }
    static is(me) {
      return me instanceof Nn;
    }
  }
  class Pi extends Nn {
    equals(me) {
      return !(!1 !== me && !x(v(me))) || (M(me) ? /^\s*$/.test(me) : super.equals(me));
    }
    static is(me) {
      return me instanceof Pi;
    }
  }
  class Ii extends e {
    constructor(me, ze, xt) {
      super(), this.i = 0, this.length = me, this.name = `${xt}-${ze}`;
    }
    next() {
      this.i++;
    }
    index0() {
      return this.i;
    }
    index() {
      return this.i + 1;
    }
    first() {
      return 0 === this.i;
    }
    last() {
      return this.i === this.length - 1;
    }
    rindex() {
      return this.length - this.i;
    }
    rindex0() {
      return this.length - this.i - 1;
    }
    valueOf() {
      return JSON.stringify(this);
    }
  }
  class yi {
    constructor() {
      this.buffer = "";
    }
    write(me) {
      this.buffer += O(me);
    }
  }
  class co {
    constructor() {
      throw this.buffer = "", this.stream = null, new Error("streaming not supported in browser");
    }
  }
  class Jo {
    constructor() {
      this.buffer = "";
    }
    write(me) {
      me = v(me), this.buffer = "string" != typeof me && "" === this.buffer ? me : O(this.buffer) + O(me);
    }
  }
  class fr extends e {
    constructor(me = () => "") {
      super(), this.superBlockRender = me;
    }
    *super() {
      const me = new yi();
      return yield this.superBlockRender(me), me.buffer;
    }
  }
  function pt(Ve) {
    return Ve && b(Ve.equals) && b(Ve.gt) && b(Ve.geq) && b(Ve.lt) && b(Ve.leq);
  }
  const Dt = new class Xt extends e {
      equals(me) {
        return x(v(me));
      }
      gt() {
        return !1;
      }
      geq() {
        return !1;
      }
      lt() {
        return !1;
      }
      leq() {
        return !1;
      }
      valueOf() {
        return null;
      }
    }(),
    Ht = {
      true: !0,
      false: !1,
      nil: Dt,
      null: Dt,
      empty: new Nn(),
      blank: new Pi()
    };
  function Dn(Ve) {
    const me = {};
    for (const [ze, xt] of Object.entries(Ve)) {
      let wn = me;
      for (let Ai = 0; Ai < ze.length; Ai++) {
        const _o = ze[Ai];
        wn[_o] = wn[_o] || {}, Ai === ze.length - 1 && je(ze[Ai]) && (wn[_o].needBoundary = !0), wn = wn[_o];
      }
      wn.data = xt, wn.end = !0;
    }
    return me;
  }
  var vt = function () {
    return vt = Object.assign || function (me) {
      for (var ze, xt = 1, wn = arguments.length; xt < wn; xt++) for (var Ai in ze = arguments[xt]) Object.prototype.hasOwnProperty.call(ze, Ai) && (me[Ai] = ze[Ai]);
      return me;
    }, vt.apply(this, arguments);
  };
  function an(Ve, me, ze, xt) {
    return new (ze || (ze = Promise))(function (Ai, _o) {
      function mr(Jr) {
        try {
          es(xt.next(Jr));
        } catch (Ca) {
          _o(Ca);
        }
      }
      function Yr(Jr) {
        try {
          es(xt.throw(Jr));
        } catch (Ca) {
          _o(Ca);
        }
      }
      function es(Jr) {
        Jr.done ? Ai(Jr.value) : function wn(Ai) {
          return Ai instanceof ze ? Ai : new ze(function (_o) {
            _o(Ai);
          });
        }(Jr.value).then(mr, Yr);
      }
      es((xt = xt.apply(Ve, me || [])).next());
    });
  }
  function li(Ve) {
    return an(this, void 0, void 0, function* () {
      if (!N(Ve)) return Ve;
      let me,
        ze = !1,
        xt = "next";
      do {
        const wn = Ve[xt](me);
        ze = wn.done, me = wn.value, xt = "next";
        try {
          N(me) && (me = li(me)), A(me) && (me = yield me);
        } catch (Ai) {
          xt = "throw", me = Ai;
        }
      } while (!ze);
      return me;
    });
  }
  function zn(Ve) {
    if (!N(Ve)) return Ve;
    let me,
      ze = !1,
      xt = "next";
    do {
      const wn = Ve[xt](me);
      if (ze = wn.done, me = wn.value, xt = "next", N(me)) try {
        me = zn(me);
      } catch (Ai) {
        xt = "throw", me = Ai;
      }
    } while (!ze);
    return me;
  }
  const $t = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
  function Mn(Ve) {
    return [31, ui(Ve) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  function Qn(Ve) {
    let me = 0;
    for (let ze = 0; ze < Ve.getMonth(); ++ze) me += Mn(Ve)[ze];
    return me + Ve.getDate();
  }
  function In(Ve, me) {
    const ze = Qn(Ve) + (me - Ve.getDay()),
      wn = 7 - new Date(Ve.getFullYear(), 0, 1).getDay() + me;
    return String(Math.floor((ze - wn) / 7) + 1);
  }
  function ui(Ve) {
    const me = Ve.getFullYear();
    return !(3 & me || !(me % 100 || me % 400 == 0 && me));
  }
  const qn = {
      d: 2,
      e: 2,
      H: 2,
      I: 2,
      j: 3,
      k: 2,
      l: 2,
      L: 3,
      m: 2,
      M: 2,
      S: 2,
      U: 2,
      W: 2
    },
    Xn = new Set("aAbBceklpP");
  function Yi(Ve, me) {
    const ze = Math.abs(Ve.getTimezoneOffset()),
      xt = Math.floor(ze / 60),
      wn = ze % 60;
    return (Ve.getTimezoneOffset() > 0 ? "-" : "+") + Le(xt, 2, "0") + (me.flags[":"] ? ":" : "") + Le(wn, 2, "0");
  }
  const Eo = {
    a: Ve => Ve.getShortWeekdayName(),
    A: Ve => Ve.getLongWeekdayName(),
    b: Ve => Ve.getShortMonthName(),
    B: Ve => Ve.getLongMonthName(),
    c: Ve => Ve.toLocaleString(),
    C: Ve => function bi(Ve) {
      return parseInt(Ve.getFullYear().toString().substring(0, 2), 10);
    }(Ve),
    d: Ve => Ve.getDate(),
    e: Ve => Ve.getDate(),
    H: Ve => Ve.getHours(),
    I: Ve => String(Ve.getHours() % 12 || 12),
    j: Ve => Qn(Ve),
    k: Ve => Ve.getHours(),
    l: Ve => String(Ve.getHours() % 12 || 12),
    L: Ve => Ve.getMilliseconds(),
    m: Ve => Ve.getMonth() + 1,
    M: Ve => Ve.getMinutes(),
    N: (Ve, me) => {
      const ze = Number(me.width) || 9;
      return function ke(Ve, me, ze = " ") {
        return J(Ve, me, ze, (xt, wn) => xt + wn);
      }(String(Ve.getMilliseconds()).slice(0, ze), ze, "0");
    },
    p: Ve => Ve.getHours() < 12 ? "AM" : "PM",
    P: Ve => Ve.getHours() < 12 ? "am" : "pm",
    q: Ve => function To(Ve) {
      const me = Ve.getDate();
      if ([11, 12, 13].includes(me)) return "th";
      switch (me % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }(Ve),
    s: Ve => Math.round(Ve.getTime() / 1e3),
    S: Ve => Ve.getSeconds(),
    u: Ve => Ve.getDay() || 7,
    U: Ve => In(Ve, 0),
    w: Ve => Ve.getDay(),
    W: Ve => In(Ve, 1),
    x: Ve => Ve.toLocaleDateString(),
    X: Ve => Ve.toLocaleTimeString(),
    y: Ve => Ve.getFullYear().toString().slice(2, 4),
    Y: Ve => Ve.getFullYear(),
    z: Yi,
    Z: (Ve, me) => Ve.getTimeZoneName() || Yi(Ve, me),
    t: () => "\t",
    n: () => "\n",
    "%": () => "%"
  };
  function Fo(Ve, me) {
    let wn,
      ze = "",
      xt = me;
    for (; wn = $t.exec(xt);) ze += xt.slice(0, wn.index), xt = xt.slice(wn.index + wn[0].length), ze += br(Ve, wn);
    return ze + xt;
  }
  function br(Ve, me) {
    const [ze, xt = "", wn, Ai, _o] = me,
      mr = Eo[_o];
    if (!mr) return ze;
    const Yr = {};
    for (const Ra of xt) Yr[Ra] = !0;
    let es = String(mr(Ve, {
        flags: Yr,
        width: wn,
        modifier: Ai
      })),
      Jr = Xn.has(_o) ? " " : "0",
      Ca = wn || qn[_o] || 0;
    return Yr["^"] ? es = es.toUpperCase() : Yr["#"] && (es = function ye(Ve) {
      return [...Ve].some(ze => ze >= "a" && ze <= "z") ? Ve.toUpperCase() : Ve.toLowerCase();
    }(es)), Yr._ ? Jr = " " : Yr[0] && (Jr = "0"), Yr["-"] && (Ca = 0), Le(es, Ca, Jr);
  }
  function Pr() {
    return typeof Intl < "u" ? Intl.DateTimeFormat : void 0;
  }
  Eo.h = Eo.b;
  const Yo = /([zZ]|([+-])(\d{2}):?(\d{2}))$/,
    wr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    oo = wr.map(Ve => Ve.slice(0, 3)),
    Di = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    Ci = Di.map(Ve => Ve.slice(0, 3));
  class lo {
    constructor(me, ze, xt) {
      this.locale = ze, this.DateTimeFormat = Pr(), this.date = new Date(me), this.timezoneFixed = void 0 !== xt, void 0 === xt && (xt = this.date.getTimezoneOffset()), this.timezoneOffset = M(xt) ? lo.getTimezoneOffset(xt, this.date) : xt, this.timezoneName = M(xt) ? xt : "";
      const wn = 6e4 * (this.date.getTimezoneOffset() - this.timezoneOffset),
        Ai = this.date.getTime() + wn;
      this.displayDate = new Date(Ai);
    }
    getTime() {
      return this.displayDate.getTime();
    }
    getMilliseconds() {
      return this.displayDate.getMilliseconds();
    }
    getSeconds() {
      return this.displayDate.getSeconds();
    }
    getMinutes() {
      return this.displayDate.getMinutes();
    }
    getHours() {
      return this.displayDate.getHours();
    }
    getDay() {
      return this.displayDate.getDay();
    }
    getDate() {
      return this.displayDate.getDate();
    }
    getMonth() {
      return this.displayDate.getMonth();
    }
    getFullYear() {
      return this.displayDate.getFullYear();
    }
    toLocaleString(me, ze) {
      return ze?.timeZone ? this.date.toLocaleString(me, ze) : this.displayDate.toLocaleString(me, ze);
    }
    toLocaleTimeString(me) {
      return this.displayDate.toLocaleTimeString(me);
    }
    toLocaleDateString(me) {
      return this.displayDate.toLocaleDateString(me);
    }
    getTimezoneOffset() {
      return this.timezoneOffset;
    }
    getTimeZoneName() {
      return this.timezoneFixed ? this.timezoneName : this.DateTimeFormat ? this.DateTimeFormat().resolvedOptions().timeZone : void 0;
    }
    getLongMonthName() {
      var me;
      return null !== (me = this.format({
        month: "long"
      })) && void 0 !== me ? me : wr[this.getMonth()];
    }
    getShortMonthName() {
      var me;
      return null !== (me = this.format({
        month: "short"
      })) && void 0 !== me ? me : oo[this.getMonth()];
    }
    getLongWeekdayName() {
      var me;
      return null !== (me = this.format({
        weekday: "long"
      })) && void 0 !== me ? me : Di[this.displayDate.getDay()];
    }
    getShortWeekdayName() {
      var me;
      return null !== (me = this.format({
        weekday: "short"
      })) && void 0 !== me ? me : Ci[this.displayDate.getDay()];
    }
    valid() {
      return !isNaN(this.getTime());
    }
    format(me) {
      return this.DateTimeFormat && this.DateTimeFormat(this.locale, me).format(this.displayDate);
    }
    static createDateFixedToTimezone(me, ze) {
      const xt = me.match(Yo);
      if (xt && "Z" === xt[1]) return new lo(+new Date(me), ze, 0);
      if (xt && xt[2] && xt[3] && xt[4]) {
        const [,, wn, Ai, _o] = xt,
          mr = ("+" === wn ? -1 : 1) * (60 * parseInt(Ai, 10) + parseInt(_o, 10));
        return new lo(+new Date(me), ze, mr);
      }
      return new lo(me, ze);
    }
    static getTimezoneOffset(me, ze) {
      const xt = ze.toLocaleString("en-US", {
          timeZone: me
        }),
        wn = ze.toLocaleString("en-US", {
          timeZone: "UTC"
        }),
        Ai = new Date(xt);
      return (+new Date(wn) - +Ai) / 6e4;
    }
  }
  class jo {
    constructor(me, ze) {
      this.base = 0, this.message = `${me} limit exceeded`, this.limit = ze;
    }
    use(me) {
      Mt(this.base + (me = +me || 0) <= this.limit, this.message), this.base += me;
    }
    check(me) {
      Mt((me = +me || 0) <= this.limit, this.message);
    }
  }
  class Go extends t {
    constructor(me, [ze, xt], wn, Ai, _o, mr, Yr, es) {
      super(me, wn, Ai, _o, es), this.trimLeft = !1, this.trimRight = !1;
      const Jr = "-" === wn[ze],
        Ca = "-" === wn[xt - 1];
      let Ra = Jr ? ze + 1 : ze,
        Ta = Ca ? xt - 1 : xt;
      for (; Ra < Ta && Ct[wn.charCodeAt(Ra)] & Et;) Ra++;
      for (; Ta > Ra && Ct[wn.charCodeAt(Ta - 1)] & Et;) Ta--;
      this.contentRange = [Ra, Ta], this.trimLeft = Jr || mr, this.trimRight = Ca || Yr;
    }
    get content() {
      return this.input.slice(this.contentRange[0], this.contentRange[1]);
    }
  }
  class ji extends Go {
    constructor(me, ze, xt, wn, Ai) {
      const {
          trimTagLeft: _o,
          trimTagRight: mr,
          tagDelimiterLeft: Yr,
          tagDelimiterRight: es
        } = wn,
        [Jr, Ca] = [ze + Yr.length, xt - es.length];
      super(as.Tag, [Jr, Ca], me, ze, xt, _o, mr, Ai), this.tokenizer = new xo(me, wn.operators, Ai, this.contentRange), this.name = this.tokenizer.readTagName(), this.tokenizer.assert(this.name, "illegal tag syntax, tag name expected"), this.tokenizer.skipBlank(), this.args = this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
  }
  class ti extends Go {
    constructor(me, ze, xt, wn, Ai) {
      const {
        trimOutputLeft: _o,
        trimOutputRight: mr,
        outputDelimiterLeft: Yr,
        outputDelimiterRight: es
      } = wn;
      super(as.Output, [ze + Yr.length, xt - es.length], me, ze, xt, _o, mr, Ai);
    }
  }
  class fi extends t {
    constructor(me, ze, xt, wn) {
      super(as.HTML, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.trimLeft = 0, this.trimRight = 0;
    }
    getContent() {
      return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
  }
  class Fi extends t {
    constructor(me, ze, xt, wn) {
      super(as.Number, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.content = Number(this.getText());
    }
  }
  class Rn extends t {
    constructor(me, ze, xt, wn) {
      super(as.Word, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.content = this.getText();
    }
  }
  class ki extends t {
    constructor(me, ze, xt, wn) {
      super(as.Literal, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.literal = this.getText(), this.content = Ht[this.literal];
    }
  }
  const Ei = {
      "==": 2,
      "!=": 2,
      ">": 2,
      "<": 2,
      ">=": 2,
      "<=": 2,
      contains: 2,
      not: 1,
      and: 0,
      or: 0
    },
    Wt = {
      "==": 0,
      "!=": 0,
      ">": 0,
      "<": 0,
      ">=": 0,
      "<=": 0,
      contains: 0,
      not: 1,
      and: 0,
      or: 0
    };
  class Oi extends t {
    constructor(me, ze, xt, wn) {
      super(as.Operator, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.operator = this.getText();
    }
    getPrecedence() {
      const me = this.getText();
      return me in Ei ? Ei[me] : 1;
    }
  }
  class Ji extends t {
    constructor(me, ze, xt, wn, Ai, _o) {
      super(as.PropertyAccess, xt, wn, Ai, _o), this.variable = me, this.props = ze;
    }
  }
  class Ao extends t {
    constructor(me, ze, xt, wn, Ai, _o) {
      super(as.Filter, xt, wn, Ai, _o), this.name = me, this.args = ze;
    }
  }
  class Sr extends t {
    constructor(me, ze, xt, wn, Ai, _o) {
      super(as.Hash, me, ze, xt, _o), this.input = me, this.begin = ze, this.end = xt, this.name = wn, this.value = Ai, this.file = _o;
    }
  }
  const us = /[\da-fA-F]/,
    Ps = /[0-7]/,
    hs = {
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t",
      v: ""
    };
  function oi(Ve) {
    const me = Ve.charCodeAt(0);
    return me >= 97 ? me - 87 : me >= 65 ? me - 55 : me - 48;
  }
  class Qi extends t {
    constructor(me, ze, xt, wn) {
      super(as.Quoted, me, ze, xt, wn), this.input = me, this.begin = ze, this.end = xt, this.file = wn, this.content = function yo(Ve) {
        let me = "";
        for (let ze = 1; ze < Ve.length - 1; ze++) if ("\\" === Ve[ze]) {
          if (void 0 !== hs[Ve[ze + 1]]) me += hs[Ve[++ze]];else if ("u" === Ve[ze + 1]) {
            let xt = 0,
              wn = ze + 2;
            for (; wn <= ze + 5 && us.test(Ve[wn]);) xt = 16 * xt + oi(Ve[wn++]);
            ze = wn - 1, me += String.fromCharCode(xt);
          } else if (Ps.test(Ve[ze + 1])) {
            let xt = ze + 1,
              wn = 0;
            for (; xt <= ze + 3 && Ps.test(Ve[xt]);) wn = 8 * wn + oi(Ve[xt++]);
            ze = xt - 1, me += String.fromCharCode(wn);
          } else me += Ve[++ze];
        } else me += Ve[ze];
        return me;
      }(this.getText());
    }
  }
  class Qo extends t {
    constructor(me, ze, xt, wn, Ai, _o) {
      super(as.Range, me, ze, xt, _o), this.input = me, this.begin = ze, this.end = xt, this.lhs = wn, this.rhs = Ai, this.file = _o;
    }
  }
  class Kr extends Go {
    constructor(me, ze, xt, wn, Ai) {
      super(as.Tag, [ze, xt], me, ze, xt, !1, !1, Ai), this.tokenizer = new xo(me, wn.operators, Ai, this.contentRange), this.name = this.tokenizer.readTagName(), this.tokenizer.assert(this.name, "illegal liquid tag syntax"), this.tokenizer.skipBlank();
    }
    get args() {
      return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
  }
  class _s extends t {
    constructor(me, ze, xt, wn, Ai, _o) {
      super(as.FilteredValue, xt, wn, Ai, _o), this.initial = me, this.filters = ze, this.input = xt, this.begin = wn, this.end = Ai, this.file = _o;
    }
  }
  const ra = {
    now: () => Date.now()
  };
  function Or() {
    return "object" == typeof global && global.performance || "object" == typeof window && window.performance || ra;
  }
  class Fs {
    renderTemplatesToNodeStream(me, ze) {
      const xt = new co();
      return Promise.resolve().then(() => li(this.renderTemplates(me, ze, xt))).then(() => xt.end(), wn => xt.error(wn)), xt.stream;
    }
    *renderTemplates(me, ze, xt) {
      xt || (xt = ze.opts.keepOutputType ? new Jo() : new yi());
      const wn = [];
      for (const Ai of me) {
        ze.renderLimit.check(Or().now());
        try {
          const _o = yield Ai.render(ze, xt);
          if (_o && xt.write(_o), ze.breakCalled || ze.continueCalled) break;
        } catch (_o) {
          const mr = n.is(_o) ? _o : new Rt(_o, Ai);
          if (!ze.opts.catchAllErrors) throw mr;
          wn.push(mr);
        }
      }
      if (wn.length) throw new We(wn);
      return xt.buffer;
    }
  }
  class xa {
    constructor(me) {
      this.postfix = [...ri(me)];
    }
    *evaluate(me, ze) {
      Mt(me, "unable to evaluate: context not defined");
      const xt = [];
      for (const wn of this.postfix) if (vo(wn)) {
        const Ai = xt.pop();
        let _o;
        if (1 === Wt[wn.operator]) _o = yield me.opts.operators[wn.operator](Ai, me);else {
          const mr = xt.pop();
          _o = yield me.opts.operators[wn.operator](mr, Ai, me);
        }
        xt.push(_o);
      } else xt.push(yield rs(wn, me, ze));
      return xt[0];
    }
    valid() {
      return !!this.postfix.length;
    }
  }
  function* rs(Ve, me, ze = !1) {
    if (Ve) {
      if ("content" in Ve) return Ve.content;
      if (mn(Ve)) return yield function* Js(Ve, me, ze) {
        const xt = [];
        for (const wn of Ve.props) xt.push(yield rs(wn, me, !1));
        try {
          if (Ve.variable) {
            const wn = yield rs(Ve.variable, me, ze);
            return yield me._getFromScope(wn, xt);
          }
          return yield me._get(xt);
        } catch (wn) {
          if (ze && "InternalUndefinedVariableError" === wn.name) return null;
          throw new Re(wn, Ve);
        }
      }(Ve, me, ze);
      if (at(Ve)) return yield function* uo(Ve, me) {
        const ze = yield rs(Ve.lhs, me),
          xt = yield rs(Ve.rhs, me);
        return me.memoryLimit.use(xt - ze + 1), F(+ze, +xt + 1);
      }(Ve, me);
    }
  }
  function* ri(Ve) {
    const me = [];
    for (const ze of Ve) if (vo(ze)) {
      for (; me.length && me[me.length - 1].getPrecedence() > ze.getPrecedence();) yield me.pop();
      me.push(ze);
    } else yield ze;
    for (; me.length;) yield me.pop();
  }
  function Yt(Ve, me) {
    return !jt(Ve, me);
  }
  function jt(Ve, me) {
    return Ve = v(Ve), me.opts.jsTruthy ? !Ve : !1 === Ve || null == Ve;
  }
  const hn = {
    "==": tn,
    "!=": (Ve, me) => !tn(Ve, me),
    ">": (Ve, me) => pt(Ve) ? Ve.gt(me) : pt(me) ? me.lt(Ve) : v(Ve) > v(me),
    "<": (Ve, me) => pt(Ve) ? Ve.lt(me) : pt(me) ? me.gt(Ve) : v(Ve) < v(me),
    ">=": (Ve, me) => pt(Ve) ? Ve.geq(me) : pt(me) ? me.leq(Ve) : v(Ve) >= v(me),
    "<=": (Ve, me) => pt(Ve) ? Ve.leq(me) : pt(me) ? me.geq(Ve) : v(Ve) <= v(me),
    contains: (Ve, me) => T(Ve = v(Ve)) ? Ve.some(ze => tn(ze, me)) : !!b(Ve?.indexOf) && Ve.indexOf(v(me)) > -1,
    not: (Ve, me) => jt(v(Ve), me),
    and: (Ve, me, ze) => Yt(v(Ve), ze) && Yt(v(me), ze),
    or: (Ve, me, ze) => Yt(v(Ve), ze) || Yt(v(me), ze)
  };
  function tn(Ve, me) {
    return pt(Ve) ? Ve.equals(me) : pt(me) ? me.equals(Ve) : (Ve = v(Ve), me = v(me), T(Ve) ? T(me) && function di(Ve, me) {
      return Ve.length === me.length && !Ve.some((ze, xt) => !tn(ze, me[xt]));
    }(Ve, me) : Ve === me);
  }
  class dn {
    constructor(me, ze, xt, wn) {
      this.key = me, this.value = ze, this.next = xt, this.prev = wn;
    }
  }
  class wo {
    constructor(me, ze = 0) {
      this.limit = me, this.size = ze, this.cache = {}, this.head = new dn("HEAD", null, null, null), this.tail = new dn("TAIL", null, null, null), this.head.next = this.tail, this.tail.prev = this.head;
    }
    write(me, ze) {
      if (this.cache[me]) this.cache[me].value = ze;else {
        const xt = new dn(me, ze, this.head.next, this.head);
        this.head.next.prev = xt, this.head.next = xt, this.cache[me] = xt, this.size++, this.ensureLimit();
      }
    }
    read(me) {
      if (!this.cache[me]) return;
      const {
        value: ze
      } = this.cache[me];
      return this.remove(me), this.write(me, ze), ze;
    }
    remove(me) {
      const ze = this.cache[me];
      ze.prev.next = ze.next, ze.next.prev = ze.prev, delete this.cache[me], this.size--;
    }
    clear() {
      this.head.next = this.tail, this.tail.prev = this.head, this.size = 0, this.cache = {};
    }
    ensureLimit() {
      this.size > this.limit && this.remove(this.tail.prev.key);
    }
  }
  function Ro(Ve, me) {
    const ze = document.createElement("base");
    ze.href = Ve;
    const xt = document.getElementsByTagName("head")[0];
    xt.insertBefore(ze, xt.firstChild);
    const wn = document.createElement("a");
    wn.href = me;
    const Ai = wn.href;
    return xt.removeChild(ze), Ai;
  }
  var sa = Object.freeze({
    __proto__: null,
    resolve: function _r(Ve, me, ze) {
      return Ve.length && "/" !== j(Ve) && (Ve += "/"), Ro(Ve, me).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (wn, Ai, _o) => {
        const mr = _o.split("/").pop();
        return /\.\w+$/.test(mr) ? wn : Ai + _o + ze;
      });
    },
    readFile: function qr(Ve) {
      return an(this, void 0, void 0, function* () {
        return new Promise((me, ze) => {
          const xt = new XMLHttpRequest();
          xt.onload = () => {
            xt.status >= 200 && xt.status < 300 ? me(xt.responseText) : ze(new Error(xt.statusText));
          }, xt.onerror = () => {
            ze(new Error("An error occurred whilst receiving the response."));
          }, xt.open("GET", Ve), xt.send();
        });
      });
    },
    readFileSync: function Ts(Ve) {
      const me = new XMLHttpRequest();
      if (me.open("GET", Ve, !1), me.send(), me.status < 200 || me.status >= 300) throw new Error(me.statusText);
      return me.responseText;
    },
    exists: function js(Ve) {
      return an(this, void 0, void 0, function* () {
        return !0;
      });
    },
    existsSync: function ws(Ve) {
      return !0;
    },
    dirname: function Us(Ve) {
      return Ro(Ve, ".");
    },
    sep: "/"
  });
  function ua(Ve, me = 0) {
    return JSON.stringify(Ve, null, me);
  }
  var ma = {
    default: function ha(Ve, me, ...ze) {
      return T(Ve = v(Ve)) || M(Ve) ? Ve.length ? Ve : me : (!1 !== Ve || !new Map(ze).get("allow_false")) && (jt(Ve, this.context) ? me : Ve);
    },
    raw: {
      raw: !0,
      handler: fe
    },
    jsonify: ua,
    to_integer: function na(Ve) {
      return Number(Ve);
    },
    json: ua,
    inspect: function da(Ve, me = 0) {
      const ze = [];
      return JSON.stringify(Ve, function (xt, wn) {
        if ("object" != typeof wn || null === wn) return wn;
        for (; ze.length > 0 && ze[ze.length - 1] !== this;) ze.pop();
        return ze.includes(wn) ? "[Circular]" : (ze.push(wn), wn);
      }, me);
    }
  };
  const Xs = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&#34;",
      "'": "&#39;"
    },
    Ks = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&#34;": "\"",
      "&#39;": "'"
    };
  function Va(Ve) {
    return Ve = O(Ve), this.context.memoryLimit.use(Ve.length), Ve.replace(/&|<|>|"|'/g, me => Xs[me]);
  }
  function qs(Ve) {
    return Ve = O(Ve), this.context.memoryLimit.use(Ve.length), Ve.replace(/&(amp|lt|gt|#34|#39);/g, me => Ks[me]);
  }
  var Gi = Object.freeze({
    __proto__: null,
    escape: Va,
    xml_escape: function ba(Ve) {
      return Va.call(this, Ve);
    },
    escape_once: function Ri(Ve) {
      return Va.call(this, qs.call(this, Ve));
    },
    newline_to_br: function $o(Ve) {
      const me = O(Ve);
      return this.context.memoryLimit.use(me.length), me.replace(/\r?\n/gm, "<br />\n");
    },
    strip_html: function ci(Ve) {
      const me = O(Ve);
      return this.context.memoryLimit.use(me.length), me.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, "");
    }
  });
  class Fn {
    constructor(me) {
      this.mapping = me, this.sep = "/";
    }
    exists(me) {
      return an(this, void 0, void 0, function* () {
        return this.existsSync(me);
      });
    }
    existsSync(me) {
      return !x(this.mapping[me]);
    }
    readFile(me) {
      return an(this, void 0, void 0, function* () {
        return this.readFileSync(me);
      });
    }
    readFileSync(me) {
      const ze = this.mapping[me];
      if (x(ze)) throw new Error(`ENOENT: ${me}`);
      return ze;
    }
    dirname(me) {
      const ze = me.split(this.sep);
      return ze.pop(), ze.join(this.sep);
    }
    resolve(me, ze, xt) {
      if (ze += xt, "." === me) return ze;
      const wn = me.split(/\/+/);
      for (const Ai of ze.split(this.sep)) "." === Ai || "" === Ai || (".." === Ai ? (wn.length > 1 || "" !== wn[0]) && wn.pop() : wn.push(Ai));
      return wn.join(this.sep);
    }
  }
  const zi = {
    root: ["."],
    layouts: ["."],
    partials: ["."],
    relativeReference: !0,
    jekyllInclude: !1,
    keyValueSeparator: ":",
    cache: void 0,
    extname: "",
    fs: sa,
    dynamicPartials: !0,
    jsTruthy: !1,
    dateFormat: "%A, %B %-e, %Y at %-l:%M %P %z",
    locale: "",
    trimTagRight: !1,
    trimTagLeft: !1,
    trimOutputRight: !1,
    trimOutputLeft: !1,
    greedy: !0,
    tagDelimiterLeft: "{%",
    tagDelimiterRight: "%}",
    outputDelimiterLeft: "{{",
    outputDelimiterRight: "}}",
    preserveTimezones: !1,
    strictFilters: !1,
    strictVariables: !1,
    ownPropertyOnly: !0,
    lenientIf: !1,
    globals: {},
    keepOutputType: !1,
    operators: hn,
    memoryLimit: 1 / 0,
    parseLimit: 1 / 0,
    renderLimit: 1 / 0
  };
  function Kt(Ve) {
    let me = [];
    return T(Ve) && (me = Ve), M(Ve) && (me = [Ve]), me;
  }
  function Pn(Ve, me) {
    if (!Ve || !As(Ve)) return;
    const ze = me ? Et : Me;
    for (; Ct[Ve.input.charCodeAt(Ve.end - 1 - Ve.trimRight)] & ze;) Ve.trimRight++;
  }
  function pi(Ve, me) {
    if (!Ve || !As(Ve)) return;
    const ze = me ? Et : Me;
    for (; Ct[Ve.input.charCodeAt(Ve.begin + Ve.trimLeft)] & ze;) Ve.trimLeft++;
    "\n" === Ve.input.charAt(Ve.begin + Ve.trimLeft) && Ve.trimLeft++;
  }
  class xo {
    constructor(me, ze = zi.operators, xt, wn) {
      this.input = me, this.file = xt, this.rawBeginAt = -1, this.p = wn ? wn[0] : 0, this.N = wn ? wn[1] : me.length, this.opTrie = Dn(ze), this.literalTrie = Dn(Ht);
    }
    readExpression() {
      return new xa(this.readExpressionTokens());
    }
    *readExpressionTokens() {
      for (; this.p < this.N;) {
        const me = this.readOperator();
        if (me) {
          yield me;
          continue;
        }
        const ze = this.readValue();
        if (!ze) return;
        yield ze;
      }
    }
    readOperator() {
      this.skipBlank();
      const me = this.matchTrie(this.opTrie);
      if (-1 !== me) return new Oi(this.input, this.p, this.p = me, this.file);
    }
    matchTrie(me) {
      let wn,
        ze = me,
        xt = this.p;
      for (; ze[this.input[xt]] && xt < this.N;) ze = ze[this.input[xt++]], ze.end && (wn = ze);
      return !wn || wn.needBoundary && je(this.peek(xt - this.p)) ? -1 : xt;
    }
    readFilteredValue() {
      const me = this.p,
        ze = this.readExpression();
      this.assert(ze.valid(), `invalid value expression: ${this.snapshot()}`);
      const xt = this.readFilters();
      return new _s(ze, xt, this.input, me, this.p, this.file);
    }
    readFilters() {
      const me = [];
      for (;;) {
        const ze = this.readFilter();
        if (!ze) return me;
        me.push(ze);
      }
    }
    readFilter() {
      if (this.skipBlank(), this.end()) return null;
      this.assert("|" === this.read(), "expected \"|\" before filter");
      const me = this.readIdentifier();
      if (!me.size()) return this.assert(this.end(), "expected filter name"), null;
      const ze = [];
      if (this.skipBlank(), ":" === this.peek()) do {
        ++this.p;
        const xt = this.readFilterArg();
        xt && ze.push(xt), this.skipBlank(), this.assert(this.end() || "," === this.peek() || "|" === this.peek(), () => `unexpected character ${this.snapshot()}`);
      } while ("," === this.peek());else if ("|" !== this.peek() && !this.end()) throw this.error("expected \":\" after filter name");
      return new Ao(me.getText(), ze, this.input, me.begin, this.p, this.file);
    }
    readFilterArg() {
      const me = this.readValue();
      if (!me) return;
      if (this.skipBlank(), ":" !== this.peek()) return me;
      ++this.p;
      const ze = this.readValue();
      return [me.getText(), ze];
    }
    readTopLevelTokens(me = zi) {
      const ze = [];
      for (; this.p < this.N;) {
        const xt = this.readTopLevelToken(me);
        ze.push(xt);
      }
      return function Vt(Ve, me) {
        let ze = !1;
        for (let xt = 0; xt < Ve.length; xt++) {
          const wn = Ve[xt];
          Da(wn) && (!ze && wn.trimLeft && Pn(Ve[xt - 1], me.greedy), pn(wn) && ("raw" === wn.name ? ze = !0 : "endraw" === wn.name && (ze = !1)), !ze && wn.trimRight && pi(Ve[xt + 1], me.greedy));
        }
      }(ze, me), ze;
    }
    readTopLevelToken(me) {
      const {
        tagDelimiterLeft: ze,
        outputDelimiterLeft: xt
      } = me;
      return this.rawBeginAt > -1 ? this.readEndrawOrRawContent(me) : this.match(ze) ? this.readTagToken(me) : this.match(xt) ? this.readOutputToken(me) : this.readHTMLToken([ze, xt]);
    }
    readHTMLToken(me) {
      const ze = this.p;
      for (; this.p < this.N && !me.some(xt => this.match(xt));) ++this.p;
      return new fi(this.input, ze, this.p, this.file);
    }
    readTagToken(me) {
      const {
          file: ze,
          input: xt
        } = this,
        wn = this.p;
      if (-1 === this.readToDelimiter(me.tagDelimiterRight)) throw this.error(`tag ${this.snapshot(wn)} not closed`, wn);
      const Ai = new ji(xt, wn, this.p, me, ze);
      return "raw" === Ai.name && (this.rawBeginAt = wn), Ai;
    }
    readToDelimiter(me, ze = !1) {
      for (this.skipBlank(); this.p < this.N;) if (ze && 8 & this.peekType()) this.readQuoted();else if (++this.p, this.rmatch(me)) return this.p;
      return -1;
    }
    readOutputToken(me = zi) {
      const {
          file: ze,
          input: xt
        } = this,
        {
          outputDelimiterRight: wn
        } = me,
        Ai = this.p;
      if (-1 === this.readToDelimiter(wn, !0)) throw this.error(`output ${this.snapshot(Ai)} not closed`, Ai);
      return new ti(xt, Ai, this.p, me, ze);
    }
    readEndrawOrRawContent(me) {
      const {
          tagDelimiterLeft: ze,
          tagDelimiterRight: xt
        } = me,
        wn = this.p;
      let Ai = this.readTo(ze) - ze.length;
      for (; this.p < this.N;) if ("endraw" === this.readIdentifier().getText()) for (; this.p <= this.N;) {
        if (this.rmatch(xt)) {
          const _o = this.p;
          return wn === Ai ? (this.rawBeginAt = -1, new ji(this.input, wn, _o, me, this.file)) : (this.p = Ai, new fi(this.input, wn, Ai, this.file));
        }
        if (this.rmatch(ze)) break;
        this.p++;
      } else Ai = this.readTo(ze) - ze.length;
      throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, wn);
    }
    readLiquidTagTokens(me = zi) {
      const ze = [];
      for (; this.p < this.N;) {
        const xt = this.readLiquidTagToken(me);
        xt && ze.push(xt);
      }
      return ze;
    }
    readLiquidTagToken(me) {
      if (this.skipBlank(), this.end()) return;
      const ze = this.p;
      return this.readToDelimiter("\n"), new Kr(this.input, ze, this.p, me, this.file);
    }
    error(me, ze = this.p) {
      return new Se(me, new Rn(this.input, ze, this.N, this.file));
    }
    assert(me, ze, xt) {
      if (!me) throw this.error("function" == typeof ze ? ze() : ze, xt);
    }
    snapshot(me = this.p) {
      return JSON.stringify(function ae(Ve, me) {
        return Ve.length > me ? Ve.slice(0, me - 3) + "..." : Ve;
      }(this.input.slice(me, this.N), 32));
    }
    readWord() {
      return this.readIdentifier();
    }
    readIdentifier() {
      this.skipBlank();
      const me = this.p;
      for (; !this.end() && je(this.peek());) ++this.p;
      return new Rn(this.input, me, this.p, this.file);
    }
    readNonEmptyIdentifier() {
      const me = this.readIdentifier();
      return me.size() ? me : void 0;
    }
    readTagName() {
      return this.skipBlank(), "#" === this.input[this.p] ? this.input.slice(this.p, ++this.p) : this.readIdentifier().getText();
    }
    readHashes(me) {
      const ze = [];
      for (;;) {
        const xt = this.readHash(me);
        if (!xt) return ze;
        ze.push(xt);
      }
    }
    readHash(me) {
      this.skipBlank(), "," === this.peek() && ++this.p;
      const ze = this.p,
        xt = this.readNonEmptyIdentifier();
      if (!xt) return;
      let wn;
      this.skipBlank();
      const Ai = M(me) ? me : me ? "=" : ":";
      return this.peek() === Ai && (++this.p, wn = this.readValue()), new Sr(this.input, ze, this.p, xt, wn, this.file);
    }
    remaining() {
      return this.input.slice(this.p, this.N);
    }
    advance(me = 1) {
      this.p += me;
    }
    end() {
      return this.p >= this.N;
    }
    read() {
      return this.input[this.p++];
    }
    readTo(me) {
      for (; this.p < this.N;) if (++this.p, this.rmatch(me)) return this.p;
      return -1;
    }
    readValue() {
      this.skipBlank();
      const me = this.p,
        ze = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber(),
        xt = this.readProperties(!ze);
      return xt.length ? new Ji(ze, xt, this.input, me, this.p) : ze;
    }
    readScopeValue() {
      this.skipBlank();
      const me = this.p,
        ze = this.readProperties();
      if (ze.length) return new Ji(void 0, ze, this.input, me, this.p);
    }
    readProperties(me = !0) {
      const ze = [];
      for (;;) if ("[" !== this.peek()) {
        if (me && !ze.length) {
          const xt = this.readNonEmptyIdentifier();
          if (xt) {
            ze.push(xt);
            continue;
          }
        }
        if ("." !== this.peek() || "." === this.peek(1)) break;
        {
          this.p++;
          const xt = this.readNonEmptyIdentifier();
          if (!xt) break;
          ze.push(xt);
        }
      } else {
        this.p++;
        const xt = this.readValue() || new Rn(this.input, this.p, this.p, this.file);
        this.assert(-1 !== this.readTo("]"), "[ not closed"), ze.push(xt);
      }
      return ze;
    }
    readNumber() {
      this.skipBlank();
      let me = !1,
        ze = !1,
        xt = 0;
      for (64 & this.peekType() && xt++; this.p + xt <= this.N;) if (32 & this.peekType(xt)) ze = !0, xt++;else {
        if ("." !== this.peek(xt) || "." === this.peek(xt + 1)) break;
        if (me || !ze) return;
        me = !0, xt++;
      }
      if (ze && !je(this.peek(xt))) {
        const wn = new Fi(this.input, this.p, this.p + xt, this.file);
        return this.advance(xt), wn;
      }
    }
    readLiteral() {
      this.skipBlank();
      const me = this.matchTrie(this.literalTrie);
      if (-1 === me) return;
      const ze = new ki(this.input, this.p, me, this.file);
      return this.p = me, ze;
    }
    readRange() {
      this.skipBlank();
      const me = this.p;
      if ("(" !== this.peek()) return;
      ++this.p;
      const ze = this.readValueOrThrow();
      this.skipBlank(), this.assert("." === this.read() && "." === this.read(), "invalid range syntax");
      const xt = this.readValueOrThrow();
      return this.skipBlank(), this.assert(")" === this.read(), "invalid range syntax"), new Qo(this.input, me, this.p, ze, xt, this.file);
    }
    readValueOrThrow() {
      const me = this.readValue();
      return this.assert(me, () => `unexpected token ${this.snapshot()}, value expected`), me;
    }
    readQuoted() {
      this.skipBlank();
      const me = this.p;
      if (!(8 & this.peekType())) return;
      ++this.p;
      let ze = !1;
      for (; this.p < this.N && (++this.p, this.input[this.p - 1] !== this.input[me] || ze);) ze ? ze = !1 : "\\" === this.input[this.p - 1] && (ze = !0);
      return new Qi(this.input, me, this.p, this.file);
    }
    *readFileNameTemplate(me) {
      const {
          outputDelimiterLeft: ze
        } = me,
        xt = [",", " ", ze],
        wn = new Set(xt);
      for (; this.p < this.N && !wn.has(this.peek());) yield this.match(ze) ? this.readOutputToken(me) : this.readHTMLToken(xt);
    }
    match(me) {
      for (let ze = 0; ze < me.length; ze++) if (me[ze] !== this.input[this.p + ze]) return !1;
      return !0;
    }
    rmatch(me) {
      for (let ze = 0; ze < me.length; ze++) if (me[me.length - 1 - ze] !== this.input[this.p - 1 - ze]) return !1;
      return !0;
    }
    peekType(me = 0) {
      return this.p + me >= this.N ? 0 : Ct[this.input.charCodeAt(this.p + me)];
    }
    peek(me = 0) {
      return this.p + me >= this.N ? "" : this.input[this.p + me];
    }
    skipBlank() {
      for (; this.peekType() & Et;) ++this.p;
    }
  }
  class No {
    constructor(me, ze) {
      this.handlers = {}, this.stopRequested = !1, this.tokens = me, this.parseToken = ze;
    }
    on(me, ze) {
      return this.handlers[me] = ze, this;
    }
    trigger(me, ze) {
      const xt = this.handlers[me];
      return !!xt && (xt.call(this, ze), !0);
    }
    start() {
      let me;
      for (this.trigger("start"); !this.stopRequested && (me = this.tokens.shift());) {
        if (this.trigger("token", me) || pn(me) && this.trigger(`tag:${me.name}`, me)) continue;
        const ze = this.parseToken(me, this.tokens);
        this.trigger("template", ze);
      }
      return this.stopRequested || this.trigger("end"), this;
    }
    stop() {
      return this.stopRequested = !0, this;
    }
  }
  class Ko {
    constructor(me) {
      this.token = me;
    }
  }
  class Mi extends Ko {
    constructor(me, ze, xt) {
      super(me), this.name = me.name, this.liquid = xt, this.tokenizer = me.tokenizer;
    }
  }
  class It {
    constructor(me, ze) {
      this.hash = {};
      const xt = me instanceof xo ? me : new xo(me, {});
      for (const wn of xt.readHashes(ze)) this.hash[wn.name.content] = wn.value;
    }
    *render(me) {
      const ze = {};
      for (const xt of Object.keys(this.hash)) ze[xt] = void 0 === this.hash[xt] || (yield rs(this.hash[xt], me));
      return ze;
    }
  }
  function _n(Ve) {
    return T(Ve);
  }
  class it {
    constructor(me, ze, xt) {
      this.token = me, this.name = me.name, this.handler = b(ze) ? ze : b(ze?.handler) ? ze.handler : fe, this.raw = !b(ze) && !!ze?.raw, this.args = me.args, this.liquid = xt;
    }
    *render(me, ze) {
      const xt = [];
      for (const wn of this.args) _n(wn) ? xt.push([wn[0], yield rs(wn[1], ze)]) : xt.push(yield rs(wn, ze));
      return yield this.handler.apply({
        context: ze,
        token: this.token,
        liquid: this.liquid
      }, [me, ...xt]);
    }
  }
  class _e {
    constructor(me, ze) {
      this.filters = [];
      const xt = "string" == typeof me ? new xo(me, ze.options.operators).readFilteredValue() : me;
      this.initial = xt.initial, this.filters = xt.filters.map(wn => new it(wn, this.getFilter(ze, wn.name), ze));
    }
    *value(me, ze) {
      ze = ze || me.opts.lenientIf && this.filters.length > 0 && "default" === this.filters[0].name;
      let xt = yield this.initial.evaluate(me, ze);
      for (const wn of this.filters) xt = yield wn.render(xt, me);
      return xt;
    }
    getFilter(me, ze) {
      const xt = me.filters[ze];
      return Mt(xt || !me.options.strictFilters, () => `undefined filter: ${ze}`), xt;
    }
  }
  class gt extends Ko {
    constructor(me, ze) {
      var xt;
      super(me);
      const wn = new xo(me.input, ze.options.operators, me.file, me.contentRange);
      this.value = new _e(wn.readFilteredValue(), ze);
      const Ai = this.value.filters,
        _o = ze.options.outputEscape;
      if ((null === (xt = Ai[Ai.length - 1]) || void 0 === xt || !xt.raw) && _o) {
        const mr = new Ao(toString.call(_o), [], "", 0, 0);
        Ai.push(new it(mr, _o, ze));
      }
    }
    *render(me, ze) {
      const xt = yield this.value.value(me, !1);
      ze.write(xt);
    }
    *arguments() {
      yield this.value;
    }
  }
  class ni extends Ko {
    constructor(me) {
      super(me), this.str = me.getContent();
    }
    *render(me, ze) {
      ze.write(this.str);
    }
  }
  class So {
    constructor(me, ze) {
      this.segments = me, this.location = ze;
    }
    toString() {
      return mi(this.segments, !0);
    }
    toArray() {
      return Array.from(function* me(...ze) {
        for (const xt of ze) xt instanceof So ? yield Array.from(me(...xt.segments)) : yield xt;
      }(...this.segments));
    }
  }
  class Er {
    constructor() {
      this.map = new Map();
    }
    get(me) {
      const ze = mi([me.segments[0]]);
      return this.map.has(ze) || this.map.set(ze, []), this.map.get(ze);
    }
    has(me) {
      return this.map.has(mi([me.segments[0]]));
    }
    push(me) {
      this.get(me).push(me);
    }
    asObject() {
      return Object.fromEntries(this.map);
    }
  }
  const Br = {
    partials: !0
  };
  function* vr(Ve, me, ze) {
    const xt = new Er(),
      wn = new Er(),
      Ai = new Er(),
      _o = new aa(new Set()),
      mr = new Set();
    function Yr(Jr, Ca) {
      xt.push(Jr);
      const Ra = Ca.alias(Jr);
      if (void 0 !== Ra) {
        const Ta = Ra.segments[0];
        M(Ta) && !_o.has(Ta) && wn.push(Ra);
      } else {
        const Ta = Jr.segments[0];
        M(Ta) && !Ca.has(Ta) && wn.push(Jr);
      }
      for (const Ta of Jr.segments) Ta instanceof So && Yr(Ta, Ca);
    }
    function* es(Jr, Ca) {
      if (Jr.arguments) for (const Ra of Jr.arguments()) for (const Ta of Ka(Ra)) Yr(Ta, Ca);
      if (Jr.localScope) for (const Ra of Jr.localScope()) {
        Ca.add(Ra.content), Ca.deleteAlias(Ra.content);
        const [Ta, Qa] = Ra.getPosition();
        Ai.push(new So([Ra.content], {
          row: Ta,
          col: Qa,
          file: Ra.file
        }));
      }
      if (Jr.children) if (Jr.partialScope) {
        const Ra = Jr.partialScope();
        if (void 0 === Ra) {
          for (const Vc of yield Jr.children(me, ze)) yield es(Vc, Ca);
          return;
        }
        if (mr.has(Ra.name)) return;
        const Ta = new Set(),
          Qa = Ra.isolated ? new aa(Ta) : Ca.push(Ta);
        for (const Vc of Ra.scope) if (M(Vc)) Ta.add(Vc);else {
          const [fc, Ac] = Vc;
          Ta.add(fc);
          const cu = Array.from(Ka(Ac));
          cu.length && Qa.setAlias(fc, cu[0].segments);
        }
        for (const Vc of yield Jr.children(me, ze)) yield es(Vc, Qa), mr.add(Ra.name);
        Qa.pop();
      } else {
        Jr.blockScope && Ca.push(new Set(Jr.blockScope()));
        for (const Ra of yield Jr.children(me, ze)) yield es(Ra, Ca);
        Jr.blockScope && Ca.pop();
      }
    }
    for (const Jr of Ve) yield es(Jr, _o);
    return {
      variables: xt.asObject(),
      globals: wn.asObject(),
      locals: Ai.asObject()
    };
  }
  function zr(Ve, me = {}) {
    return li(vr(Ve, Object.assign(Object.assign({}, Br), me).partials, !1));
  }
  function ks(Ve, me = {}) {
    return zn(vr(Ve, Object.assign(Object.assign({}, Br), me).partials, !0));
  }
  class aa {
    constructor(me) {
      this.stack = [{
        names: me,
        aliases: new Map()
      }];
    }
    has(me) {
      for (const ze of this.stack) if (ze.names.has(me)) return !0;
      return !1;
    }
    push(me) {
      return this.stack.push({
        names: me,
        aliases: new Map()
      }), this;
    }
    pop() {
      var me;
      return null === (me = this.stack.pop()) || void 0 === me ? void 0 : me.names;
    }
    add(me) {
      this.stack[0].names.add(me);
    }
    alias(me) {
      const ze = me.segments[0];
      if (!M(ze)) return;
      const xt = this.getAlias(ze);
      return void 0 !== xt ? new So([...xt, ...me.segments.slice(1)], me.location) : void 0;
    }
    setAlias(me, ze) {
      this.stack[this.stack.length - 1].aliases.set(me, ze);
    }
    deleteAlias(me) {
      this.stack[this.stack.length - 1].aliases.delete(me);
    }
    getAlias(me) {
      for (const ze of this.stack) {
        if (ze.aliases.has(me)) return ze.aliases.get(me);
        if (ze.names.has(me)) return;
      }
    }
  }
  function* Ka(Ve) {
    Zt(Ve) ? yield* ul(Ve) : Ve instanceof _e && (yield* function* ja(Ve) {
      for (const me of Ve.initial.postfix) Zt(me) && (yield* ul(me));
      for (const me of Ve.filters) for (const ze of me.args) _n(ze) && ze[1] ? yield* ul(ze[1]) : Zt(ze) && (yield* ul(ze));
    }(Ve));
  }
  function* ul(Ve) {
    at(Ve) ? (yield* ul(Ve.lhs), yield* ul(Ve.rhs)) : mn(Ve) && (yield Ln(Ve));
  }
  function Ln(Ve) {
    const me = [];
    let ze = Ve.file;
    const xt = Ve.props[0];
    ze = ze || xt.file, sn(xt) || Si(xt) || Pe(xt) ? me.push(xt.content) : mn(xt) && me.push(...Ln(xt).segments);
    for (const _o of Ve.props.slice(1)) ze = ze || _o.file, sn(_o) || Si(_o) || Pe(_o) ? me.push(_o.content) : mn(_o) && me.push(Ln(_o));
    const [wn, Ai] = Ve.getPosition();
    return new So(me, {
      row: wn,
      col: Ai,
      file: ze
    });
  }
  const en = /^[\u0080-\uFFFFa-zA-Z_][\u0080-\uFFFFa-zA-Z0-9_-]*$/;
  function mi(Ve, me = !1) {
    const ze = [],
      xt = Ve[0];
    M(xt) && (!me || xt.match(en) ? ze.push(`${xt}`) : ze.push(`['${xt}']`));
    for (const wn of Ve.slice(1)) wn instanceof So ? ze.push(`[${mi(wn.segments)}]`) : M(wn) ? wn.match(en) ? ze.push(`.${wn}`) : ze.push(`['${wn}']`) : ze.push(`[${wn}]`);
    return ze.join("");
  }
  var ro = (() => {
    return (Ve = ro || (ro = {})).Partials = "partials", Ve.Layouts = "layouts", Ve.Root = "root", ro;
    var Ve;
  })();
  class cr {
    constructor(me) {
      if (this.options = me, me.relativeReference) {
        const ze = me.fs.sep;
        Mt(ze, "`fs.sep` is required for relative reference");
        const xt = new RegExp(["." + ze, ".." + ze, "./", "../"].map(wn => function I(Ve) {
          return Ve.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        }(wn)).join("|"));
        this.shouldLoadRelative = wn => xt.test(wn);
      } else this.shouldLoadRelative = ze => !1;
      this.contains = this.options.fs.contains || (() => !0);
    }
    *lookup(me, ze, xt, wn) {
      const {
          fs: Ai
        } = this.options,
        _o = this.options[ze];
      for (const mr of this.candidates(me, _o, wn, ze !== ro.Root)) if (xt ? Ai.existsSync(mr) : yield Ai.exists(mr)) return mr;
      throw this.lookupError(me, _o);
    }
    *candidates(me, ze, xt, wn) {
      const {
        fs: Ai,
        extname: _o
      } = this.options;
      if (this.shouldLoadRelative(me) && xt) {
        const mr = Ai.resolve(this.dirname(xt), me, _o);
        for (const Yr of ze) if (!wn || this.contains(Yr, mr)) {
          yield mr;
          break;
        }
      }
      for (const mr of ze) {
        const Yr = Ai.resolve(mr, me, _o);
        (!wn || this.contains(mr, Yr)) && (yield Yr);
      }
      if (void 0 !== Ai.fallback) {
        const mr = Ai.fallback(me);
        void 0 !== mr && (yield mr);
      }
    }
    dirname(me) {
      const ze = this.options.fs;
      return Mt(ze.dirname, "`fs.dirname` is required for relative reference"), ze.dirname(me);
    }
    lookupError(me, ze) {
      const xt = new Error("ENOENT");
      return xt.message = `ENOENT: Failed to lookup "${me}" in "${ze}"`, xt.code = "ENOENT", xt;
    }
  }
  class jr {
    constructor(me) {
      this.liquid = me, this.cache = this.liquid.options.cache, this.fs = this.liquid.options.fs, this.parseFile = this.cache ? this._parseFileCached : this._parseFile, this.loader = new cr(this.liquid.options), this.parseLimit = new jo("parse length", me.options.parseLimit);
    }
    parse(me, ze) {
      me = String(me), this.parseLimit.use(me.length);
      const wn = new xo(me, this.liquid.options.operators, ze).readTopLevelTokens(this.liquid.options);
      return this.parseTokens(wn);
    }
    parseTokens(me) {
      let ze;
      const xt = [],
        wn = [];
      for (; ze = me.shift();) try {
        xt.push(this.parseToken(ze, me));
      } catch (Ai) {
        if (!this.liquid.options.catchAllErrors) throw Ai;
        wn.push(Ai);
      }
      if (wn.length) throw new We(wn);
      return xt;
    }
    parseToken(me, ze) {
      try {
        if (pn(me)) {
          const xt = this.liquid.tags[me.name];
          return Mt(xt, `tag "${me.name}" not found`), new xt(me, ze, this.liquid, this);
        }
        return function dl(Ve) {
          return Li(Ve) === as.Output;
        }(me) ? new gt(me, this.liquid) : new ni(me);
      } catch (xt) {
        throw n.is(xt) ? xt : new qe(xt, me);
      }
    }
    parseStream(me) {
      return new No(me, (ze, xt) => this.parseToken(ze, xt));
    }
    *_parseFileCached(me, ze, xt = ro.Root, wn) {
      const Ai = this.cache,
        _o = this.loader.shouldLoadRelative(me) ? wn + "," + me : xt + ":" + me,
        mr = yield Ai.read(_o);
      if (mr) return mr;
      const Yr = this._parseFile(me, ze, xt, wn),
        es = ze ? yield Yr : li(Yr);
      Ai.write(_o, es);
      try {
        return yield es;
      } catch (Jr) {
        throw Ai.remove(_o), Jr;
      }
    }
    *_parseFile(me, ze, xt = ro.Root, wn) {
      const Ai = yield this.loader.lookup(me, xt, ze, wn);
      return this.parse(ze ? this.fs.readFileSync(Ai) : yield this.fs.readFile(Ai), Ai);
    }
  }
  var as = (() => {
    return (Ve = as || (as = {}))[Ve.Number = 1] = "Number", Ve[Ve.Literal = 2] = "Literal", Ve[Ve.Tag = 4] = "Tag", Ve[Ve.Output = 8] = "Output", Ve[Ve.HTML = 16] = "HTML", Ve[Ve.Filter = 32] = "Filter", Ve[Ve.Hash = 64] = "Hash", Ve[Ve.PropertyAccess = 128] = "PropertyAccess", Ve[Ve.Word = 256] = "Word", Ve[Ve.Range = 512] = "Range", Ve[Ve.Quoted = 1024] = "Quoted", Ve[Ve.Operator = 2048] = "Operator", Ve[Ve.FilteredValue = 4096] = "FilteredValue", Ve[Ve.Delimited = 12] = "Delimited", as;
    var Ve;
  })();
  function Da(Ve) {
    return !!(Li(Ve) & as.Delimited);
  }
  function vo(Ve) {
    return Li(Ve) === as.Operator;
  }
  function As(Ve) {
    return Li(Ve) === as.HTML;
  }
  function pn(Ve) {
    return Li(Ve) === as.Tag;
  }
  function sn(Ve) {
    return Li(Ve) === as.Quoted;
  }
  function Si(Ve) {
    return Li(Ve) === as.Number;
  }
  function mn(Ve) {
    return Li(Ve) === as.PropertyAccess;
  }
  function Pe(Ve) {
    return Li(Ve) === as.Word;
  }
  function at(Ve) {
    return Li(Ve) === as.Range;
  }
  function Zt(Ve) {
    return (1667 & Li(Ve)) > 0;
  }
  function Li(Ve) {
    return Ve ? Ve.kind : -1;
  }
  class Xo {
    constructor(me = {}, ze = zi, xt = {}, {
      memoryLimit: wn,
      renderLimit: Ai
    } = {}) {
      var _o, mr, Yr, es, Jr;
      this.scopes = [{}], this.registers = {}, this.breakCalled = !1, this.continueCalled = !1, this.sync = !!xt.sync, this.opts = ze, this.globals = null !== (_o = xt.globals) && void 0 !== _o ? _o : ze.globals, this.environments = W(me) ? me : Object(me), this.strictVariables = null !== (mr = xt.strictVariables) && void 0 !== mr ? mr : this.opts.strictVariables, this.ownPropertyOnly = null !== (Yr = xt.ownPropertyOnly) && void 0 !== Yr ? Yr : ze.ownPropertyOnly, this.memoryLimit = wn ?? new jo("memory alloc", null !== (es = xt.memoryLimit) && void 0 !== es ? es : ze.memoryLimit), this.renderLimit = Ai ?? new jo("template render", Or().now() + (null !== (Jr = xt.renderLimit) && void 0 !== Jr ? Jr : ze.renderLimit));
    }
    getRegister(me) {
      return this.registers[me] = this.registers[me] || {};
    }
    setRegister(me, ze) {
      return this.registers[me] = ze;
    }
    saveRegister(...me) {
      return me.map(ze => [ze, this.getRegister(ze)]);
    }
    restoreRegister(me) {
      return me.forEach(([ze, xt]) => this.setRegister(ze, xt));
    }
    getAll() {
      return [this.globals, this.environments, ...this.scopes].reduce((me, ze) => vt(me, ze), {});
    }
    get(me) {
      return this.getSync(me);
    }
    getSync(me) {
      return zn(this._get(me));
    }
    *_get(me) {
      const ze = this.findScope(me[0]);
      return yield this._getFromScope(ze, me);
    }
    getFromScope(me, ze) {
      return zn(this._getFromScope(me, ze));
    }
    *_getFromScope(me, ze, xt = this.strictVariables) {
      M(ze) && (ze = ze.split("."));
      for (let wn = 0; wn < ze.length; wn++) if (me = yield this.readProperty(me, ze[wn]), xt && void 0 === me) throw new st(ze.slice(0, wn + 1).join("."));
      return me;
    }
    push(me) {
      return this.scopes.push(me);
    }
    pop() {
      return this.scopes.pop();
    }
    bottom() {
      return this.scopes[0];
    }
    spawn(me = {}) {
      return new Xo(me, this.opts, {
        sync: this.sync,
        globals: this.globals,
        strictVariables: this.strictVariables
      }, {
        renderLimit: this.renderLimit,
        memoryLimit: this.memoryLimit
      });
    }
    findScope(me) {
      for (let ze = this.scopes.length - 1; ze >= 0; ze--) {
        const xt = this.scopes[ze];
        if (me in xt) return xt;
      }
      return me in this.environments ? this.environments : this.globals;
    }
    readProperty(me, ze) {
      if (me = h(me), ze = v(ze), x(me)) return me;
      if (T(me) && ze < 0) return me[me.length + +ze];
      const xt = function Cr(Ve, me, ze) {
        if (!ze || d.call(Ve, me) || Ve instanceof e) return Ve[me];
      }(me, ze, this.ownPropertyOnly);
      return void 0 === xt && me instanceof e ? me.liquidMethodMissing(ze, this) : b(xt) ? xt.call(me) : "size" === ze ? function Hs(Ve) {
        return d.call(Ve, "size") || void 0 !== Ve.size ? Ve.size : T(Ve) || M(Ve) ? Ve.length : "object" == typeof Ve ? Object.keys(Ve).length : void 0;
      }(me) : "first" === ze ? function Xr(Ve) {
        return T(Ve) ? Ve[0] : Ve.first;
      }(me) : "last" === ze ? function ys(Ve) {
        return T(Ve) ? Ve[Ve.length - 1] : Ve.last;
      }(me) : xt;
    }
  }
  var la = (() => {
    return (Ve = la || (la = {}))[Ve.OUTPUT = 0] = "OUTPUT", Ve[Ve.STORE = 1] = "STORE", la;
    var Ve;
  })();
  const St = te(Math.abs),
    Wi = te(Math.max),
    Pt = te(Math.min),
    Ki = te(Math.ceil),
    Nr = te((Ve, me, ze = !1) => ze ? Math.floor(Ve / me) : Ve / me),
    oa = te(Math.floor),
    er = te((Ve, me) => Ve - me),
    Qr = te((Ve, me) => Ve + me),
    Il = te((Ve, me) => Ve % me),
    Uc = te((Ve, me) => Ve * me);
  var Wl = Object.freeze({
    __proto__: null,
    abs: St,
    at_least: Wi,
    at_most: Pt,
    ceil: Ki,
    divided_by: Nr,
    floor: oa,
    minus: er,
    plus: Qr,
    modulo: Il,
    times: Uc,
    round: function Kl(Ve, me = 0) {
      Ve = f(Ve), me = f(me);
      const ze = Math.pow(10, me);
      return Math.round(Ve * ze) / ze;
    }
  });
  const kl = /[^\p{M}\p{L}\p{Nd}]+/gu,
    mu = {
      raw: /\s+/g,
      default: kl,
      pretty: /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/gu,
      ascii: /[^A-Za-z0-9]+/g,
      latin: kl,
      none: null
    };
  var ir = Object.freeze({
    __proto__: null,
    url_decode: Ve => decodeURIComponent(O(Ve)).replace(/\+/g, " "),
    url_encode: Ve => encodeURIComponent(O(Ve)).replace(/%20/g, "+"),
    cgi_escape: Ve => encodeURIComponent(O(Ve)).replace(/%20/g, "+").replace(/[!'()*]/g, me => "%" + me.charCodeAt(0).toString(16).toUpperCase()),
    uri_escape: Ve => encodeURI(O(Ve)).replace(/%5B/g, "[").replace(/%5D/g, "]"),
    slugify: function Wc(Ve, me = "default", ze = !1) {
      Ve = O(Ve);
      const xt = mu[me];
      return xt && ("latin" === me && (Ve = function gc(Ve) {
        return Ve.replace(/[\xe0\xe1\xe2\xe3\xe4\xe5]/g, "a").replace(/[\xe6]/g, "ae").replace(/[\xe7]/g, "c").replace(/[\xe8\xe9\xea\xeb]/g, "e").replace(/[\xec\xed\xee\xef]/g, "i").replace(/[\xf0]/g, "d").replace(/[\xf1]/g, "n").replace(/[\xf2\xf3\xf4\xf5\xf6\xf8]/g, "o").replace(/[\xf9\xfa\xfb\xfc]/g, "u").replace(/[\xfd\xff]/g, "y").replace(/[\xdf]/g, "ss").replace(/[\u0153]/g, "oe").replace(/[\xfe]/g, "th").replace(/[\u1e9e]/g, "SS").replace(/[\u0152]/g, "OE").replace(/[\xde]/g, "TH");
      }(Ve)), Ve = Ve.replace(xt, "-").replace(/^-|-$/g, "")), ze ? Ve : Ve.toLowerCase();
    }
  });
  const Hr = G(function (Ve, me) {
      const ze = C(Ve),
        xt = x(me) ? " " : O(me);
      return this.context.memoryLimit.use(ze.length * (1 + xt.length)), ze.join(xt);
    }),
    Ar = G(Ve => R(Ve) ? j(Ve) : ""),
    Ds = G(Ve => R(Ve) ? Ve[0] : ""),
    wa = G(function (Ve) {
      const me = C(Ve);
      return this.context.memoryLimit.use(me.length), [...me].reverse();
    });
  function _c(Ve, me = []) {
    const ze = C(Ve),
      xt = C(me);
    return this.context.memoryLimit.use(ze.length + xt.length), ze.concat(xt);
  }
  function La(Ve) {
    return this.context.opts.jekyllWhere ? me => Nn.is(Ve) ? tn(me, Ve) : T(me) ? function Gn(Ve, me) {
      return Ve.some(ze => tn(ze, me));
    }(me, Ve) : tn(me, Ve) : void 0 === Ve ? me => Yt(me, this.context) : me => tn(me, Ve);
  }
  function* kc(Ve, me, ze, xt) {
    const wn = [];
    me = C(me), this.context.memoryLimit.use(me.length);
    const Ai = new xo(O(ze)).readScopeValue();
    for (const mr of me) wn.push(yield rs(Ai, this.context.spawn(mr)));
    const _o = La.call(this, xt);
    return me.filter((mr, Yr) => _o(wn[Yr]) === Ve);
  }
  function* Ut(Ve, me, ze, xt) {
    const wn = [],
      Ai = new _e(O(xt), this.liquid),
      _o = C(me);
    this.context.memoryLimit.use(_o.length);
    for (const mr of _o) {
      this.context.push({
        [ze]: mr
      });
      const Yr = yield Ai.value(this.context);
      this.context.pop(), Yr === Ve && wn.push(mr);
    }
    return wn;
  }
  function* Ns(Ve, me, ze) {
    const xt = new xo(O(me)).readScopeValue(),
      wn = C(Ve),
      Ai = La.call(this, ze);
    for (let _o = 0; _o < wn.length; _o++) if (Ai(yield rs(xt, this.context.spawn(wn[_o])))) return [_o, wn[_o]];
  }
  function* Ga(Ve, me, ze) {
    const xt = new _e(O(ze), this.liquid),
      wn = C(Ve);
    for (let Ai = 0; Ai < wn.length; Ai++) {
      this.context.push({
        [me]: wn[Ai]
      });
      const _o = yield xt.value(this.context);
      if (this.context.pop(), _o) return [Ai, wn[Ai]];
    }
  }
  var vc = Object.freeze({
    __proto__: null,
    join: Hr,
    last: Ar,
    first: Ds,
    reverse: wa,
    sort: function* Ua(Ve, me) {
      const ze = [],
        xt = C(Ve);
      this.context.memoryLimit.use(xt.length);
      for (const wn of xt) ze.push([wn, me ? yield this.context._getFromScope(wn, O(me).split("."), !1) : wn]);
      return ze.sort((wn, Ai) => {
        const _o = wn[1],
          mr = Ai[1];
        return _o < mr ? -1 : _o > mr ? 1 : 0;
      }).map(wn => wn[0]);
    },
    sort_natural: function hl(Ve, me) {
      const ze = O(me),
        xt = void 0 === me ? Y : (Ai, _o) => Y(Ai[ze], _o[ze]),
        wn = C(Ve);
      return this.context.memoryLimit.use(wn.length), [...wn].sort(xt);
    },
    size: Ve => Ve && Ve.length || 0,
    map: function* wc(Ve, me) {
      const ze = [],
        xt = C(Ve);
      this.context.memoryLimit.use(xt.length);
      for (const wn of xt) ze.push(yield this.context._getFromScope(wn, O(me), !1));
      return ze;
    },
    sum: function* zs(Ve, me) {
      let ze = 0;
      const xt = C(Ve);
      for (const wn of xt) {
        const Ai = Number(me ? yield this.context._getFromScope(wn, O(me), !1) : wn);
        ze += Number.isNaN(Ai) ? 0 : Ai;
      }
      return ze;
    },
    compact: function ic(Ve) {
      const me = C(Ve);
      return this.context.memoryLimit.use(me.length), me.filter(ze => !x(v(ze)));
    },
    concat: _c,
    push: function zc(Ve, me) {
      return _c.call(this, Ve, [me]);
    },
    unshift: function Gc(Ve, me) {
      const ze = C(Ve);
      this.context.memoryLimit.use(ze.length);
      const xt = [...ze];
      return xt.unshift(me), xt;
    },
    pop: function au(Ve) {
      const me = [...C(Ve)];
      return me.pop(), me;
    },
    shift: function xu(Ve) {
      const me = C(Ve);
      this.context.memoryLimit.use(me.length);
      const ze = [...me];
      return ze.shift(), ze;
    },
    slice: function vs(Ve, me, ze = 1) {
      return x(Ve = v(Ve)) ? [] : (T(Ve) || (Ve = O(Ve)), me = me < 0 ? Ve.length + me : me, this.context.memoryLimit.use(ze), Ve.slice(me, me + ze));
    },
    where: function* Vn(Ve, me, ze) {
      return yield* kc.call(this, !0, Ve, me, ze);
    },
    reject: function* Gt(Ve, me, ze) {
      return yield* kc.call(this, !1, Ve, me, ze);
    },
    where_exp: function* xi(Ve, me, ze) {
      return yield* Ut.call(this, !0, Ve, me, ze);
    },
    reject_exp: function* so(Ve, me, ze) {
      return yield* Ut.call(this, !1, Ve, me, ze);
    },
    group_by: function* yr(Ve, me) {
      const ze = new Map();
      Ve = L(Ve);
      const xt = new xo(O(me)).readScopeValue();
      this.context.memoryLimit.use(Ve.length);
      for (const wn of Ve) {
        const Ai = yield rs(xt, this.context.spawn(wn));
        ze.has(Ai) || ze.set(Ai, []), ze.get(Ai).push(wn);
      }
      return [...ze.entries()].map(([wn, Ai]) => ({
        name: wn,
        items: Ai
      }));
    },
    group_by_exp: function* Rr(Ve, me, ze) {
      const xt = new Map(),
        wn = new _e(O(ze), this.liquid);
      Ve = L(Ve), this.context.memoryLimit.use(Ve.length);
      for (const Ai of Ve) {
        this.context.push({
          [me]: Ai
        });
        const _o = yield wn.value(this.context);
        this.context.pop(), xt.has(_o) || xt.set(_o, []), xt.get(_o).push(Ai);
      }
      return [...xt.entries()].map(([Ai, _o]) => ({
        name: Ai,
        items: _o
      }));
    },
    has: function* Ma(Ve, me, ze) {
      return !!(yield* Ns.call(this, Ve, me, ze));
    },
    has_exp: function* Ia(Ve, me, ze) {
      return !!(yield* Ga.call(this, Ve, me, ze));
    },
    find_index: function* Ea(Ve, me, ze) {
      const xt = yield* Ns.call(this, Ve, me, ze);
      return xt ? xt[0] : void 0;
    },
    find_index_exp: function* Ll(Ve, me, ze) {
      const xt = yield* Ga.call(this, Ve, me, ze);
      return xt ? xt[0] : void 0;
    },
    find: function* Za(Ve, me, ze) {
      const xt = yield* Ns.call(this, Ve, me, ze);
      return xt ? xt[1] : void 0;
    },
    find_exp: function* sl(Ve, me, ze) {
      const xt = yield* Ga.call(this, Ve, me, ze);
      return xt ? xt[1] : void 0;
    },
    uniq: function pl(Ve) {
      return Ve = C(Ve), this.context.memoryLimit.use(Ve.length), [...new Set(Ve)];
    },
    sample: function ql(Ve, me = 1) {
      if (x(Ve = v(Ve))) return [];
      T(Ve) || (Ve = O(Ve)), this.context.memoryLimit.use(me);
      const ze = [...Ve].sort(() => Math.random() - .5);
      return 1 === me ? ze[0] : ze.slice(0, me);
    }
  });
  function oc(Ve, me, ze) {
    var xt, wn, Ai;
    const _o = (null !== (xt = Ve?.length) && void 0 !== xt ? xt : 0) + (null !== (wn = me?.length) && void 0 !== wn ? wn : 0) + (null !== (Ai = ze?.length) && void 0 !== Ai ? Ai : 0);
    this.context.memoryLimit.use(_o);
    const mr = gu(Ve, this.context.opts, ze);
    return mr ? Fo(mr, me = x(me = v(me)) ? this.context.opts.dateFormat : O(me)) : Ve;
  }
  function Bl(Ve, me, ze, xt) {
    const wn = gu(Ve, this.context.opts);
    if (!wn) return Ve;
    if ("ordinal" === ze) {
      const Ai = wn.getDate();
      return Fo(wn, "US" === xt ? `${me} ${Ai}%q, %Y` : `${Ai}%q ${me} %Y`);
    }
    return Fo(wn, `%d ${me} %Y`);
  }
  function gu(Ve, me, ze) {
    let xt;
    const wn = ze ?? me.timezoneOffset,
      Ai = me.locale;
    return xt = "now" === (Ve = v(Ve)) || "today" === Ve ? new lo(Date.now(), Ai, wn) : E(Ve) ? new lo(1e3 * Ve, Ai, wn) : M(Ve) ? /^\d+$/.test(Ve) ? new lo(1e3 * +Ve, Ai, wn) : me.preserveTimezones && void 0 === ze ? lo.createDateFixedToTimezone(Ve, Ai) : new lo(Ve, Ai, wn) : new lo(Ve, Ai, wn), xt.valid() ? xt : void 0;
  }
  var Xc = Object.freeze({
    __proto__: null,
    date: oc,
    date_to_xmlschema: function pc(Ve) {
      return oc.call(this, Ve, "%Y-%m-%dT%H:%M:%S%:z");
    },
    date_to_rfc822: function ec(Ve) {
      return oc.call(this, Ve, "%a, %d %b %Y %H:%M:%S %z");
    },
    date_to_string: function Mc(Ve, me, ze) {
      return Bl.call(this, Ve, "%b", me, ze);
    },
    date_to_long_string: function rc(Ve, me, ze) {
      return Bl.call(this, Ve, "%B", me, ze);
    }
  });
  const al = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu,
    ca = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
  var lu = Object.freeze({
      __proto__: null,
      append: function _a(Ve, me) {
        Mt(2 === arguments.length, "append expect 2 arguments");
        const ze = O(Ve),
          xt = O(me);
        return this.context.memoryLimit.use(ze.length + xt.length), ze + xt;
      },
      prepend: function wl(Ve, me) {
        Mt(2 === arguments.length, "prepend expect 2 arguments");
        const ze = O(Ve),
          xt = O(me);
        return this.context.memoryLimit.use(ze.length + xt.length), xt + ze;
      },
      lstrip: function Ja(Ve, me) {
        const ze = O(Ve);
        return this.context.memoryLimit.use(ze.length), me ? (me = pe(O(me)), ze.replace(new RegExp(`^[${me}]+`, "g"), "")) : ze.replace(/^\s+/, "");
      },
      downcase: function ka(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), me.toLowerCase();
      },
      upcase: function Hc(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), O(me).toUpperCase();
      },
      remove: function tc(Ve, me) {
        const ze = O(Ve);
        return this.context.memoryLimit.use(ze.length), ze.split(O(me)).join("");
      },
      remove_first: function zl(Ve, me) {
        const ze = O(Ve);
        return this.context.memoryLimit.use(ze.length), ze.replace(O(me), "");
      },
      remove_last: function Tc(Ve, me) {
        const ze = O(Ve);
        this.context.memoryLimit.use(ze.length);
        const xt = O(me),
          wn = ze.lastIndexOf(xt);
        return -1 === wn ? ze : ze.substring(0, wn) + ze.substring(wn + xt.length);
      },
      rstrip: function Jl(Ve, me) {
        return Ve = O(Ve), this.context.memoryLimit.use(Ve.length), me ? (me = pe(O(me)), Ve.replace(new RegExp(`[${me}]+$`, "g"), "")) : Ve.replace(/\s+$/, "");
      },
      split: function hc(Ve, me) {
        const ze = O(Ve);
        this.context.memoryLimit.use(ze.length);
        const xt = ze.split(O(me));
        for (; xt.length && "" === xt[xt.length - 1];) xt.pop();
        return xt;
      },
      strip: function ll(Ve, me) {
        const ze = O(Ve);
        return this.context.memoryLimit.use(ze.length), me ? (me = pe(O(me)), ze.replace(new RegExp(`^[${me}]+`, "g"), "").replace(new RegExp(`[${me}]+$`, "g"), "")) : ze.trim();
      },
      strip_newlines: function Tl(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), me.replace(/\r?\n/gm, "");
      },
      capitalize: function $c(Ve) {
        return Ve = O(Ve), this.context.memoryLimit.use(Ve.length), Ve.charAt(0).toUpperCase() + Ve.slice(1).toLowerCase();
      },
      replace: function Ml(Ve, me, ze) {
        const xt = O(Ve);
        return this.context.memoryLimit.use(xt.length), xt.split(O(me)).join(ze);
      },
      replace_first: function Vl(Ve, me, ze) {
        const xt = O(Ve);
        return this.context.memoryLimit.use(xt.length), xt.replace(O(me), ze);
      },
      replace_last: function Bc(Ve, me, ze) {
        const xt = O(Ve);
        this.context.memoryLimit.use(xt.length);
        const wn = O(me),
          Ai = xt.lastIndexOf(wn);
        if (-1 === Ai) return xt;
        const _o = O(ze);
        return xt.substring(0, Ai) + _o + xt.substring(Ai + wn.length);
      },
      truncate: function bu(Ve, me = 50, ze = "...") {
        const xt = O(Ve);
        return this.context.memoryLimit.use(xt.length), xt.length <= me ? Ve : xt.substring(0, me - ze.length) + ze;
      },
      truncatewords: function Kc(Ve, me = 15, ze = "...") {
        const xt = O(Ve);
        this.context.memoryLimit.use(xt.length);
        const wn = xt.split(/\s+/);
        me <= 0 && (me = 1);
        let Ai = wn.slice(0, me).join(" ");
        return wn.length >= me && (Ai += ze), Ai;
      },
      normalize_whitespace: function Al(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), me.replace(/\s+/g, " ");
      },
      number_of_words: function sc(Ve, me) {
        const ze = O(Ve);
        if (this.context.memoryLimit.use(ze.length), !(Ve = ze.trim())) return 0;
        switch (me) {
          case "cjk":
            return (Ve.match(al) || []).length + (Ve.match(ca) || []).length;
          case "auto":
            return al.test(Ve) ? Ve.match(al).length + (Ve.match(ca) || []).length : Ve.split(/\s+/).length;
          default:
            return Ve.split(/\s+/).length;
        }
      },
      array_to_sentence_string: function Bi(Ve, me = "and") {
        switch (this.context.memoryLimit.use(Ve.length), Ve.length) {
          case 0:
            return "";
          case 1:
            return Ve[0];
          case 2:
            return `${Ve[0]} ${me} ${Ve[1]}`;
          default:
            return `${Ve.slice(0, -1).join(", ")}, ${me} ${Ve[Ve.length - 1]}`;
        }
      }
    }),
    iu = Object.freeze({
      __proto__: null,
      base64_encode: function Pa(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), function Rc(Ve) {
          return btoa(String.fromCharCode(...new TextEncoder().encode(Ve)));
        }(me);
      },
      base64_decode: function cl(Ve) {
        const me = O(Ve);
        return this.context.memoryLimit.use(me.length), function ac(Ve) {
          return new TextDecoder().decode(Uint8Array.from(atob(Ve), me => me.charCodeAt(0)));
        }(me);
      }
    });
  const Fc = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gi), Wl), ir), vc), Xc), lu), iu), ma),
    Jc = ["offset", "limit", "reversed"];
  function Bs(Ve, me, ze) {
    if (me.options.dynamicPartials) {
      const Ai = Ve.readValue();
      if (Ve.assert(Ai, "illegal file path"), "none" === Ai.getText()) return;
      if (sn(Ai)) {
        const _o = ze.parse(function ho(Ve) {
          return Ve.content;
        }(Ai));
        return qc(_o);
      }
      return Ai;
    }
    const xt = [...Ve.readFileNameTemplate(me.options)],
      wn = qc(ze.parseTokens(xt));
    return "none" === wn ? void 0 : wn;
  }
  function qc(Ve) {
    return 1 === Ve.length && As(Ve[0].token) ? Ve[0].token.getContent() : Ve;
  }
  function* $e(Ve, me, ze) {
    return "string" == typeof Ve ? Ve : Array.isArray(Ve) ? ze.renderer.renderTemplates(Ve, me) : yield rs(Ve, me);
  }
  class se extends Ii {
    constructor(me, ze, xt, wn) {
      super(me, xt, wn), this.length = me, this.cols = ze;
    }
    row() {
      return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
      return this.i % this.cols;
    }
    col() {
      return this.col0() + 1;
    }
    col_first() {
      return 0 === this.col0();
    }
    col_last() {
      return this.col() === this.cols;
    }
  }
  const Ui = {
    assign: class Rl extends Mi {
      constructor(me, ze, xt) {
        super(me, ze, xt), this.identifier = this.tokenizer.readIdentifier(), this.key = this.identifier.content, this.tokenizer.assert(this.key, "expected variable name"), this.tokenizer.skipBlank(), this.tokenizer.assert("=" === this.tokenizer.peek(), "expected \"=\""), this.tokenizer.advance(), this.value = new _e(this.tokenizer.readFilteredValue(), this.liquid);
      }
      *render(me) {
        me.bottom()[this.key] = yield this.value.value(me, this.liquid.options.lenientIf);
      }
      *arguments() {
        yield this.value;
      }
      *localScope() {
        yield this.identifier;
      }
    },
    for: class _t extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt);
        const Ai = this.tokenizer.readIdentifier(),
          _o = this.tokenizer.readIdentifier(),
          mr = this.tokenizer.readValue();
        if (!Ai.size() || "in" !== _o.content || !mr) throw new Error(`illegal tag: ${me.getText()}`);
        let Yr;
        this.variable = Ai.content, this.collection = mr, this.hash = new It(this.tokenizer, xt.options.keyValueSeparator), this.templates = [], this.elseTemplates = [];
        const es = wn.parseStream(ze).on("start", () => Yr = this.templates).on("tag:else", Jr => {
          Je(Jr.args), Yr = this.elseTemplates;
        }).on("tag:endfor", Jr => {
          Je(Jr.args), es.stop();
        }).on("template", Jr => Yr.push(Jr)).on("end", () => {
          throw new Error(`tag ${me.getText()} not closed`);
        });
        es.start();
      }
      *render(me, ze) {
        const xt = this.liquid.renderer;
        let wn = L(yield rs(this.collection, me));
        if (!wn.length) return void (yield xt.renderTemplates(this.elseTemplates, me, ze));
        const Ai = "continue-" + this.variable + "-" + this.collection.getText();
        me.push({
          continue: me.getRegister(Ai)
        });
        const _o = yield this.hash.render(me);
        me.pop(), wn = (this.liquid.options.orderedFilterParameters ? Object.keys(_o).filter(es => Jc.includes(es)) : Jc.filter(es => void 0 !== _o[es])).reduce((es, Jr) => "offset" === Jr ? function Ge(Ve, me) {
          return Ve.slice(me);
        }(es, _o.offset) : "limit" === Jr ? function Vi(Ve, me) {
          return Ve.slice(0, me);
        }(es, _o.limit) : function Tn(Ve) {
          return [...Ve].reverse();
        }(es), wn), me.setRegister(Ai, (_o.offset || 0) + wn.length);
        const Yr = {
          forloop: new Ii(wn.length, this.collection.getText(), this.variable)
        };
        me.push(Yr);
        for (const es of wn) {
          if (Yr[this.variable] = es, me.continueCalled = me.breakCalled = !1, yield xt.renderTemplates(this.templates, me, ze), me.breakCalled) break;
          Yr.forloop.next();
        }
        me.continueCalled = me.breakCalled = !1, me.pop();
      }
      *children() {
        const me = this.templates.slice();
        return this.elseTemplates && me.push(...this.elseTemplates), me;
      }
      *arguments() {
        yield this.collection;
        for (const me of Object.values(this.hash.hash)) Zt(me) && (yield me);
      }
      blockScope() {
        return [this.variable, "forloop"];
      }
    },
    capture: class Zo extends Mi {
      constructor(me, ze, xt, wn) {
        for (super(me, ze, xt), this.templates = [], this.identifier = this.readVariable(), this.variable = this.identifier.content; ze.length;) {
          const Ai = ze.shift();
          if (pn(Ai) && "endcapture" === Ai.name) return;
          this.templates.push(wn.parseToken(Ai, ze));
        }
        throw new Error(`tag ${me.getText()} not closed`);
      }
      readVariable() {
        let me = this.tokenizer.readIdentifier();
        if (me.content || (me = this.tokenizer.readQuoted(), me)) return me;
        throw this.tokenizer.error("invalid capture name");
      }
      *render(me) {
        const xt = yield this.liquid.renderer.renderTemplates(this.templates, me);
        me.bottom()[this.variable] = xt;
      }
      *children() {
        return this.templates;
      }
      *localScope() {
        yield this.identifier;
      }
    },
    case: class Zr extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt), this.branches = [], this.elseTemplates = [], this.value = new _e(this.tokenizer.readFilteredValue(), this.liquid), this.elseTemplates = [];
        let Ai = [],
          _o = 0;
        const mr = wn.parseStream(ze).on("tag:when", Yr => {
          if (_o > 0) return;
          Ai = [];
          const es = [];
          for (; !Yr.tokenizer.end();) es.push(Yr.tokenizer.readValueOrThrow()), Yr.tokenizer.skipBlank(), "," === Yr.tokenizer.peek() ? Yr.tokenizer.readTo(",") : Yr.tokenizer.readTo("or");
          this.branches.push({
            values: es,
            templates: Ai
          });
        }).on("tag:else", () => {
          _o++, Ai = this.elseTemplates;
        }).on("tag:endcase", () => mr.stop()).on("template", Yr => {
          (Ai !== this.elseTemplates || 1 === _o) && Ai.push(Yr);
        }).on("end", () => {
          throw new Error(`tag ${me.getText()} not closed`);
        });
        mr.start();
      }
      *render(me, ze) {
        const xt = this.liquid.renderer,
          wn = v(yield this.value.value(me, me.opts.lenientIf));
        let Ai = !1;
        for (const _o of this.branches) for (const mr of _o.values) if (tn(wn, yield rs(mr, me, me.opts.lenientIf))) {
          yield xt.renderTemplates(_o.templates, me, ze), Ai = !0;
          break;
        }
        Ai || (yield xt.renderTemplates(this.elseTemplates, me, ze));
      }
      *arguments() {
        yield this.value, yield* this.branches.flatMap(me => me.values);
      }
      *children() {
        const me = this.branches.flatMap(ze => ze.templates);
        return this.elseTemplates && me.push(...this.elseTemplates), me;
      }
    },
    comment: class pa extends Mi {
      constructor(me, ze, xt) {
        for (super(me, ze, xt); ze.length;) {
          const wn = ze.shift();
          if (pn(wn) && "endcomment" === wn.name) return;
        }
        throw new Error(`tag ${me.getText()} not closed`);
      }
      render() {}
    },
    include: class Hn extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt);
        const {
          tokenizer: Ai
        } = me;
        this.file = Bs(Ai, this.liquid, wn), this.currentFile = me.file;
        const _o = Ai.p;
        "with" === Ai.readIdentifier().content ? (Ai.skipBlank(), ":" !== Ai.peek() ? this.withVar = Ai.readValue() : Ai.p = _o) : Ai.p = _o, this.hash = new It(Ai, xt.options.jekyllInclude || xt.options.keyValueSeparator);
      }
      *render(me, ze) {
        const {
            liquid: xt,
            hash: wn,
            withVar: Ai
          } = this,
          {
            renderer: _o
          } = xt,
          mr = yield $e(this.file, me, xt);
        Mt(mr, () => `illegal file path "${mr}"`);
        const Yr = me.saveRegister("blocks", "blockMode");
        me.setRegister("blocks", {}), me.setRegister("blockMode", la.OUTPUT);
        const es = yield wn.render(me);
        Ai && (es[mr] = yield rs(Ai, me));
        const Jr = yield xt._parsePartialFile(mr, me.sync, this.currentFile);
        me.push(me.opts.jekyllInclude ? {
          include: es
        } : es), yield _o.renderTemplates(Jr, me, ze), me.pop(), me.restoreRegister(Yr);
      }
      *children(me, ze) {
        return me && M(this.file) ? yield this.liquid._parsePartialFile(this.file, ze, this.currentFile) : [];
      }
      partialScope() {
        if (M(this.file)) {
          let me;
          return this.liquid.options.jekyllInclude ? me = ["include"] : (me = Object.keys(this.hash.hash), this.withVar && me.push([this.file, this.withVar])), {
            name: this.file,
            isolated: !1,
            scope: me
          };
        }
      }
      *arguments() {
        yield* Object.values(this.hash.hash).filter(Zt), Zt(this.file) && (yield this.file), Zt(this.withVar) && (yield this.withVar);
      }
    },
    render: class fl extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt);
        const Ai = this.tokenizer;
        for (this.file = Bs(Ai, this.liquid, wn), this.currentFile = me.file; !Ai.end();) {
          Ai.skipBlank();
          const _o = Ai.p,
            mr = Ai.readIdentifier();
          if (("with" === mr.content || "for" === mr.content) && (Ai.skipBlank(), ":" !== Ai.peek())) {
            const Yr = Ai.readValue();
            if (Yr) {
              const es = Ai.p;
              let Ca;
              "as" === Ai.readIdentifier().content ? Ca = Ai.readIdentifier() : Ai.p = es, this[mr.content] = {
                value: Yr,
                alias: Ca && Ca.content
              }, Ai.skipBlank(), "," === Ai.peek() && Ai.advance();
              continue;
            }
          }
          Ai.p = _o;
          break;
        }
        this.hash = new It(Ai, xt.options.keyValueSeparator);
      }
      *render(me, ze) {
        const {
            liquid: xt,
            hash: wn
          } = this,
          Ai = yield $e(this.file, me, xt);
        Mt(Ai, () => `illegal file path "${Ai}"`);
        const _o = me.spawn(),
          mr = _o.bottom();
        if (vt(mr, yield wn.render(me)), this.with) {
          const {
            value: Yr,
            alias: es
          } = this.with;
          mr[es || Ai] = yield rs(Yr, me);
        }
        if (this.for) {
          const {
              value: Yr,
              alias: es
            } = this.for,
            Jr = L(yield rs(Yr, me));
          mr.forloop = new Ii(Jr.length, Yr.getText(), es);
          for (const Ca of Jr) {
            mr[es] = Ca;
            const Ra = yield xt._parsePartialFile(Ai, _o.sync, this.currentFile);
            yield xt.renderer.renderTemplates(Ra, _o, ze), mr.forloop.next();
          }
        } else {
          const Yr = yield xt._parsePartialFile(Ai, _o.sync, this.currentFile);
          yield xt.renderer.renderTemplates(Yr, _o, ze);
        }
      }
      *children(me, ze) {
        return me && M(this.file) ? yield this.liquid._parsePartialFile(this.file, ze, this.currentFile) : [];
      }
      partialScope() {
        if (M(this.file)) {
          const me = Object.keys(this.hash.hash);
          if (this.with) {
            const {
              value: ze,
              alias: xt
            } = this.with;
            M(xt) ? me.push([xt, ze]) : M(this.file) && me.push([this.file, ze]);
          }
          if (this.for) {
            const {
              value: ze,
              alias: xt
            } = this.for;
            M(xt) ? me.push([xt, ze]) : M(this.file) && me.push([this.file, ze]);
          }
          return {
            name: this.file,
            isolated: !0,
            scope: me
          };
        }
      }
      *arguments() {
        for (const me of Object.values(this.hash.hash)) Zt(me) && (yield me);
        if (this.with) {
          const {
            value: me
          } = this.with;
          Zt(me) && (yield me);
        }
        if (this.for) {
          const {
            value: me
          } = this.for;
          Zt(me) && (yield me);
        }
      }
    },
    decrement: class nt extends Mi {
      constructor(me, ze, xt) {
        super(me, ze, xt), this.identifier = this.tokenizer.readIdentifier(), this.variable = this.identifier.content;
      }
      render(me, ze) {
        const xt = me.environments;
        E(xt[this.variable]) || (xt[this.variable] = 0), ze.write(O(--xt[this.variable]));
      }
      *localScope() {
        yield this.identifier;
      }
    },
    increment: class xs extends Mi {
      constructor(me, ze, xt) {
        super(me, ze, xt), this.identifier = this.tokenizer.readIdentifier(), this.variable = this.identifier.content;
      }
      render(me, ze) {
        const xt = me.environments;
        E(xt[this.variable]) || (xt[this.variable] = 0);
        const wn = xt[this.variable];
        xt[this.variable]++, ze.write(O(wn));
      }
      *localScope() {
        yield this.identifier;
      }
    },
    cycle: class si extends Mi {
      constructor(me, ze, xt) {
        super(me, ze, xt), this.candidates = [];
        const wn = this.tokenizer.readValue();
        for (this.tokenizer.skipBlank(), wn && (":" === this.tokenizer.peek() ? (this.group = wn, this.tokenizer.advance()) : this.candidates.push(wn)); !this.tokenizer.end();) {
          const Ai = this.tokenizer.readValue();
          Ai && this.candidates.push(Ai), this.tokenizer.readTo(",");
        }
        this.tokenizer.assert(this.candidates.length, () => `empty candidates: "${me.getText()}"`);
      }
      *render(me, ze) {
        const wn = `cycle:${yield rs(this.group, me)}:` + this.candidates.join(","),
          Ai = me.getRegister("cycle");
        let _o = Ai[wn];
        void 0 === _o && (_o = Ai[wn] = 0);
        const mr = this.candidates[_o];
        return _o = (_o + 1) % this.candidates.length, Ai[wn] = _o, yield rs(mr, me);
      }
      *arguments() {
        yield* this.candidates, this.group && (yield this.group);
      }
    },
    if: class Oo extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt), this.branches = [];
        let Ai = [];
        wn.parseStream(ze).on("start", () => this.branches.push({
          value: new _e(me.tokenizer.readFilteredValue(), this.liquid),
          templates: Ai = []
        })).on("tag:elsif", _o => {
          Mt(!this.elseTemplates, "unexpected elsif after else"), this.branches.push({
            value: new _e(_o.tokenizer.readFilteredValue(), this.liquid),
            templates: Ai = []
          });
        }).on("tag:else", _o => {
          Je(_o.args), Mt(!this.elseTemplates, "duplicated else"), Ai = this.elseTemplates = [];
        }).on("tag:endif", function (_o) {
          Je(_o.args), this.stop();
        }).on("template", _o => Ai.push(_o)).on("end", () => {
          throw new Error(`tag ${me.getText()} not closed`);
        }).start();
      }
      *render(me, ze) {
        const xt = this.liquid.renderer;
        for (const {
          value: wn,
          templates: Ai
        } of this.branches) if (Yt(yield wn.value(me, me.opts.lenientIf), me)) return void (yield xt.renderTemplates(Ai, me, ze));
        yield xt.renderTemplates(this.elseTemplates || [], me, ze);
      }
      *children() {
        const me = this.branches.flatMap(ze => ze.templates);
        return this.elseTemplates && me.push(...this.elseTemplates), me;
      }
      arguments() {
        return this.branches.map(me => me.value);
      }
    },
    layout: class Ne extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt), this.file = Bs(this.tokenizer, this.liquid, wn), this.currentFile = me.file, this.args = new It(this.tokenizer, xt.options.keyValueSeparator), this.templates = wn.parseTokens(ze);
      }
      *render(me, ze) {
        const {
            liquid: xt,
            args: wn,
            file: Ai
          } = this,
          {
            renderer: _o
          } = xt;
        if (void 0 === Ai) return me.setRegister("blockMode", la.OUTPUT), void (yield _o.renderTemplates(this.templates, me, ze));
        const mr = yield $e(this.file, me, xt);
        Mt(mr, () => `illegal file path "${mr}"`);
        const Yr = yield xt._parseLayoutFile(mr, me.sync, this.currentFile);
        me.setRegister("blockMode", la.STORE);
        const es = yield _o.renderTemplates(this.templates, me),
          Jr = me.getRegister("blocks");
        void 0 === Jr[""] && (Jr[""] = (Ca, Ra) => Ra.write(es)), me.setRegister("blockMode", la.OUTPUT), me.push(yield wn.render(me)), yield _o.renderTemplates(Yr, me, ze), me.pop();
      }
      *children(me) {
        const ze = this.templates.slice();
        return me && M(this.file) && ze.push(...(yield this.liquid._parsePartialFile(this.file, !0, this.currentFile))), ze;
      }
      *arguments() {
        for (const me of Object.values(this.args.hash)) Zt(me) && (yield me);
        Zt(this.file) && (yield this.file);
      }
      partialScope() {
        if (M(this.file)) return {
          name: this.file,
          isolated: !1,
          scope: Object.keys(this.args.hash)
        };
      }
    },
    block: class Qe extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt), this.templates = [];
        const Ai = /\w+/.exec(me.args);
        for (this.block = Ai ? Ai[0] : ""; ze.length;) {
          const _o = ze.shift();
          if (pn(_o) && "endblock" === _o.name) return;
          const mr = wn.parseToken(_o, ze);
          this.templates.push(mr);
        }
        throw new Error(`tag ${me.getText()} not closed`);
      }
      *render(me, ze) {
        const xt = this.getBlockRender(me);
        me.getRegister("blockMode") === la.STORE ? me.getRegister("blocks")[this.block] = xt : yield xt(new fr(), ze);
      }
      getBlockRender(me) {
        const {
            liquid: ze,
            templates: xt
          } = this,
          wn = me.getRegister("blocks")[this.block],
          Ai = function* (_o, mr) {
            me.push({
              block: _o
            }), yield ze.renderer.renderTemplates(xt, me, mr), me.pop();
          };
        return wn ? (_o, mr) => wn(new fr(Yr => Ai(_o, Yr)), mr) : Ai;
      }
      *children() {
        return this.templates;
      }
      blockScope() {
        return ["block"];
      }
    },
    raw: class Q extends Mi {
      constructor(me, ze, xt) {
        for (super(me, ze, xt), this.tokens = []; ze.length;) {
          const wn = ze.shift();
          if (pn(wn) && "endraw" === wn.name) return;
          this.tokens.push(wn);
        }
        throw new Error(`tag ${me.getText()} not closed`);
      }
      render() {
        return this.tokens.map(me => me.getText()).join("");
      }
    },
    tablerow: class re extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt);
        const Ai = this.tokenizer.readIdentifier();
        this.tokenizer.skipBlank();
        const _o = this.tokenizer.readIdentifier(),
          mr = this.tokenizer.readValue();
        if ("in" !== _o.content || !mr) throw new Error(`illegal tag: ${me.getText()}`);
        let Yr;
        this.variable = Ai.content, this.collection = mr, this.args = new It(this.tokenizer, xt.options.keyValueSeparator), this.templates = [];
        const es = wn.parseStream(ze).on("start", () => Yr = this.templates).on("tag:endtablerow", () => es.stop()).on("template", Jr => Yr.push(Jr)).on("end", () => {
          throw new Error(`tag ${me.getText()} not closed`);
        });
        es.start();
      }
      *render(me, ze) {
        let xt = L(yield rs(this.collection, me));
        const wn = yield this.args.render(me),
          Ai = wn.offset || 0;
        xt = xt.slice(Ai, Ai + (void 0 === wn.limit ? xt.length : wn.limit));
        const Yr = this.liquid.renderer,
          es = new se(xt.length, wn.cols || xt.length, this.collection.getText(), this.variable),
          Jr = {
            tablerowloop: es
          };
        me.push(Jr);
        for (let Ca = 0; Ca < xt.length; Ca++, es.next()) Jr[this.variable] = xt[Ca], 0 === es.col0() && (1 !== es.row() && ze.write("</tr>"), ze.write(`<tr class="row${es.row()}">`)), ze.write(`<td class="col${es.col()}">`), yield Yr.renderTemplates(this.templates, me, ze), ze.write("</td>");
        xt.length && ze.write("</tr>"), me.pop();
      }
      *children() {
        return this.templates;
      }
      *arguments() {
        yield this.collection;
        for (const me of Object.values(this.args.hash)) Zt(me) && (yield me);
      }
      blockScope() {
        return [this.variable, "tablerowloop"];
      }
    },
    unless: class Ce extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt), this.branches = [], this.elseTemplates = [];
        let Ai = [],
          _o = 0;
        wn.parseStream(ze).on("start", () => this.branches.push({
          value: new _e(me.tokenizer.readFilteredValue(), this.liquid),
          test: jt,
          templates: Ai = []
        })).on("tag:elsif", mr => {
          _o > 0 ? Ai = [] : this.branches.push({
            value: new _e(mr.tokenizer.readFilteredValue(), this.liquid),
            test: Yt,
            templates: Ai = []
          });
        }).on("tag:else", () => {
          _o++, Ai = this.elseTemplates;
        }).on("tag:endunless", function () {
          this.stop();
        }).on("template", mr => {
          (Ai !== this.elseTemplates || 1 === _o) && Ai.push(mr);
        }).on("end", () => {
          throw new Error(`tag ${me.getText()} not closed`);
        }).start();
      }
      *render(me, ze) {
        const xt = this.liquid.renderer;
        for (const {
          value: wn,
          test: Ai,
          templates: _o
        } of this.branches) if (Ai(yield wn.value(me, me.opts.lenientIf), me)) return void (yield xt.renderTemplates(_o, me, ze));
        yield xt.renderTemplates(this.elseTemplates, me, ze);
      }
      *children() {
        const me = this.branches.flatMap(ze => ze.templates);
        return this.elseTemplates && me.push(...this.elseTemplates), me;
      }
      arguments() {
        return this.branches.map(me => me.value);
      }
    },
    break: class Be extends Mi {
      render(me, ze) {
        me.breakCalled = !0;
      }
    },
    continue: class dt extends Mi {
      render(me, ze) {
        me.continueCalled = !0;
      }
    },
    echo: class Ot extends Mi {
      constructor(me, ze, xt) {
        super(me, ze, xt), this.tokenizer.skipBlank(), this.tokenizer.end() || (this.value = new _e(this.tokenizer.readFilteredValue(), this.liquid));
      }
      *render(me, ze) {
        if (!this.value) return;
        const xt = yield this.value.value(me, !1);
        ze.write(xt);
      }
      *arguments() {
        this.value && (yield this.value);
      }
    },
    liquid: class Qt extends Mi {
      constructor(me, ze, xt, wn) {
        super(me, ze, xt);
        const Ai = this.tokenizer.readLiquidTagTokens(this.liquid.options);
        this.templates = wn.parseTokens(Ai);
      }
      *render(me, ze) {
        yield this.liquid.renderer.renderTemplates(this.templates, me, ze);
      }
      *children() {
        return this.templates;
      }
    },
    "#": class Wn extends Mi {
      constructor(me, ze, xt) {
        if (super(me, ze, xt), -1 !== me.args.search(/\n\s*[^#\s]/g)) throw new Error("every line of an inline comment must start with a '#' character");
      }
      render() {}
    }
  };
  class eo {
    constructor(me = {}) {
      this.renderer = new Fs(), this.filters = {}, this.tags = {}, this.options = function Io(Ve) {
        var me, ze;
        if (Ve.hasOwnProperty("root") && (Ve.hasOwnProperty("partials") || (Ve.partials = Ve.root), Ve.hasOwnProperty("layouts") || (Ve.layouts = Ve.root)), Ve.hasOwnProperty("cache")) {
          let xt;
          xt = "number" == typeof Ve.cache ? Ve.cache > 0 ? new wo(Ve.cache) : void 0 : "object" == typeof Ve.cache ? Ve.cache : Ve.cache ? new wo(1024) : void 0, Ve.cache = xt;
        }
        return (!(Ve = Object.assign(Object.assign(Object.assign({}, zi), Ve.jekyllInclude ? {
          dynamicPartials: !1
        } : {}), Ve)).fs.dirname || !Ve.fs.sep) && Ve.relativeReference && (console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning"), Ve.relativeReference = !1), Ve.root = Kt(Ve.root), Ve.partials = Kt(Ve.partials), Ve.layouts = Kt(Ve.layouts), Ve.outputEscape = Ve.outputEscape && function gi(Ve) {
          return "escape" === Ve ? Va : "json" === Ve ? ma.json : (Mt(b(Ve), "`outputEscape` need to be of type string or function"), Ve);
        }(Ve.outputEscape), Ve.locale || (Ve.locale = null !== (ze = null === (me = Pr()) || void 0 === me ? void 0 : me().resolvedOptions().locale) && void 0 !== ze ? ze : "en-US"), Ve.templates && (Ve.fs = new Fn(Ve.templates), Ve.relativeReference = !0, Ve.root = Ve.partials = Ve.layouts = "."), Ve;
      }(me), this.parser = new jr(this), y(Ui, (ze, xt) => this.registerTag(xt, ze)), y(Fc, (ze, xt) => this.registerFilter(xt, ze));
    }
    parse(me, ze) {
      return new jr(this).parse(me, ze);
    }
    _render(me, ze, xt) {
      const wn = ze instanceof Xo ? ze : new Xo(ze, this.options, xt);
      return this.renderer.renderTemplates(me, wn);
    }
    render(me, ze, xt) {
      return an(this, void 0, void 0, function* () {
        return li(this._render(me, ze, Object.assign(Object.assign({}, xt), {
          sync: !1
        })));
      });
    }
    renderSync(me, ze, xt) {
      return zn(this._render(me, ze, Object.assign(Object.assign({}, xt), {
        sync: !0
      })));
    }
    renderToNodeStream(me, ze, xt = {}) {
      const wn = new Xo(ze, this.options, xt);
      return this.renderer.renderTemplatesToNodeStream(me, wn);
    }
    _parseAndRender(me, ze, xt) {
      const wn = this.parse(me);
      return this._render(wn, ze, xt);
    }
    parseAndRender(me, ze, xt) {
      return an(this, void 0, void 0, function* () {
        return li(this._parseAndRender(me, ze, Object.assign(Object.assign({}, xt), {
          sync: !1
        })));
      });
    }
    parseAndRenderSync(me, ze, xt) {
      return zn(this._parseAndRender(me, ze, Object.assign(Object.assign({}, xt), {
        sync: !0
      })));
    }
    _parsePartialFile(me, ze, xt) {
      return new jr(this).parseFile(me, ze, ro.Partials, xt);
    }
    _parseLayoutFile(me, ze, xt) {
      return new jr(this).parseFile(me, ze, ro.Layouts, xt);
    }
    _parseFile(me, ze, xt, wn) {
      return new jr(this).parseFile(me, ze, xt, wn);
    }
    parseFile(me, ze) {
      return an(this, void 0, void 0, function* () {
        return li(new jr(this).parseFile(me, !1, ze));
      });
    }
    parseFileSync(me, ze) {
      return zn(new jr(this).parseFile(me, !0, ze));
    }
    *_renderFile(me, ze, xt) {
      const wn = yield this._parseFile(me, xt.sync, xt.lookupType);
      return yield this._render(wn, ze, xt);
    }
    renderFile(me, ze, xt) {
      return an(this, void 0, void 0, function* () {
        return li(this._renderFile(me, ze, Object.assign(Object.assign({}, xt), {
          sync: !1
        })));
      });
    }
    renderFileSync(me, ze, xt) {
      return zn(this._renderFile(me, ze, Object.assign(Object.assign({}, xt), {
        sync: !0
      })));
    }
    renderFileToNodeStream(me, ze, xt) {
      return an(this, void 0, void 0, function* () {
        const wn = yield this.parseFile(me);
        return this.renderToNodeStream(wn, ze, xt);
      });
    }
    _evalValue(me, ze) {
      const xt = new _e(me, this),
        wn = ze instanceof Xo ? ze : new Xo(ze, this.options);
      return xt.value(wn);
    }
    evalValue(me, ze) {
      return an(this, void 0, void 0, function* () {
        return li(this._evalValue(me, ze));
      });
    }
    evalValueSync(me, ze) {
      return zn(this._evalValue(me, ze));
    }
    registerFilter(me, ze) {
      this.filters[me] = ze;
    }
    registerTag(me, ze) {
      this.tags[me] = b(ze) ? ze : function At(Ve) {
        return class extends Mi {
          constructor(me, ze, xt) {
            super(me, ze, xt), b(Ve.parse) && Ve.parse.call(this, me, ze);
          }
          *render(me, ze) {
            const xt = yield new It(this.token.args, me.opts.keyValueSeparator).render(me);
            return yield Ve.render.call(this, me, ze, xt);
          }
        };
      }(ze);
    }
    plugin(me) {
      return me.call(this, eo);
    }
    express() {
      const me = this;
      let ze = !0;
      return function (xt, wn, Ai) {
        if (ze) {
          ze = !1;
          const _o = Kt(this.root);
          me.options.root.unshift(..._o), me.options.layouts.unshift(..._o), me.options.partials.unshift(..._o);
        }
        me.renderFile(xt, wn).then(_o => Ai(null, _o), Ai);
      };
    }
    analyze(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        return zr(me, ze);
      });
    }
    analyzeSync(me, ze = {}) {
      return ks(me, ze);
    }
    parseAndAnalyze(me, ze, xt = {}) {
      return an(this, void 0, void 0, function* () {
        return zr(this.parse(me, ze), xt);
      });
    }
    parseAndAnalyzeSync(me, ze, xt = {}) {
      return ks(this.parse(me, ze), xt);
    }
    variables(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Object.keys(xt.variables);
      });
    }
    variablesSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Object.keys(xt.variables);
    }
    fullVariables(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Array.from(new Set(Object.values(xt.variables).flatMap(wn => wn.map(Ai => String(Ai)))));
      });
    }
    fullVariablesSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Array.from(new Set(Object.values(xt.variables).flatMap(wn => wn.map(Ai => String(Ai)))));
    }
    variableSegments(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Array.from(be(Object.values(xt.variables).flatMap(wn => wn.map(Ai => Ai.toArray()))));
      });
    }
    variableSegmentsSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Array.from(be(Object.values(xt.variables).flatMap(wn => wn.map(Ai => Ai.toArray()))));
    }
    globalVariables(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Object.keys(xt.globals);
      });
    }
    globalVariablesSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Object.keys(xt.globals);
    }
    globalFullVariables(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Array.from(new Set(Object.values(xt.globals).flatMap(wn => wn.map(Ai => String(Ai)))));
      });
    }
    globalFullVariablesSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Array.from(new Set(Object.values(xt.globals).flatMap(wn => wn.map(Ai => String(Ai)))));
    }
    globalVariableSegments(me, ze = {}) {
      return an(this, void 0, void 0, function* () {
        const xt = yield zr(M(me) ? this.parse(me) : me, ze);
        return Array.from(be(Object.values(xt.globals).flatMap(wn => wn.map(Ai => Ai.toArray()))));
      });
    }
    globalVariableSegmentsSync(me, ze = {}) {
      const xt = ks(M(me) ? this.parse(me) : me, ze);
      return Array.from(be(Object.values(xt.globals).flatMap(wn => wn.map(Ai => Ai.toArray()))));
    }
  }
});
