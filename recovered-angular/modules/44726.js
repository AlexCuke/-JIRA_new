// Extracted from main; webpack module 44726. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $j: () => li,
    Xh: () => ui,
    dm: () => Me,
    GF: () => st,
    HZ: () => co,
    V$: () => qe,
    Xy: () => Ke,
    Yh: () => Je,
    gY: () => Xt,
    lv: () => Qn,
    J5: () => zn,
    mu: () => $t,
    S7: () => To,
    mq: () => bi
  });
  var t = i(66425),
    e = i(45566),
    a = i(40833),
    m = i(91998);
  var M = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/
    },
    b = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    A = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    N = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function C(qn) {
    return qn ? parseInt(qn) : 1;
  }
  function f(qn) {
    return qn && parseFloat(qn.replace(",", ".")) || 0;
  }
  var x = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function u(qn) {
    return qn % 400 == 0 || qn % 4 == 0 && qn % 100 != 0;
  }
  var W = i(62526),
    F = i(80953),
    ke = i(16153),
    J = i(35882),
    fe = i(56463),
    ye = i(37524),
    ae = i(28115),
    Y = i(5238),
    G = i(57776),
    te = i(32722),
    pe = i(72201),
    be = i(73766),
    le = i(86936);
  const n = {
      narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
      abbreviated: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
      wide: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    Se = {
      ...be.default,
      localize: {
        ...be.default.localize,
        month: (qn, Xn) => n[Xn.width][qn]
      }
    };
  function qe(qn) {
    const Xn = "string" == typeof qn.date ? new Date(qn.date) : qn.date;
    if (Xn instanceof Date && "Invalid Date" !== String(Xn)) {
      const Yi = qn.currentDate ? qn.currentDate : new Date(),
        Eo = Xn.getFullYear(),
        Fo = Yi.getFullYear();
      return (0, t.Z)(Xn, `dd MMM${qn.alwaysShowYear || Eo !== Fo ? " yyyy" : ""}${void 0 === qn.separator ? "," : qn.separator} ${qn.dayWeekAtTheEnd ? "EEEEEE" : "HH:mm"}`, {
        locale: qn.customLocale || Se
      });
    }
    return "-";
  }
  function st(qn) {
    return qn ? (0, t.Z)(function d(qn, Xn) {
      var Yi;
      (0, a.Z)(1, arguments);
      var Eo = (0, m.Z)(null !== (Yi = Xn?.additionalDigits) && void 0 !== Yi ? Yi : 2);
      if (2 !== Eo && 1 !== Eo && 0 !== Eo) throw new RangeError("additionalDigits must be 0, 1 or 2");
      if ("string" != typeof qn && "[object String]" !== Object.prototype.toString.call(qn)) return new Date(NaN);
      var br,
        Fo = function I(qn) {
          var Eo,
            Xn = {},
            Yi = qn.split(M.dateTimeDelimiter);
          if (Yi.length > 2) return Xn;
          if (/:/.test(Yi[0]) ? Eo = Yi[0] : (Xn.date = Yi[0], Eo = Yi[1], M.timeZoneDelimiter.test(Xn.date) && (Xn.date = qn.split(M.timeZoneDelimiter)[0], Eo = qn.substr(Xn.date.length, qn.length))), Eo) {
            var Fo = M.timezone.exec(Eo);
            Fo ? (Xn.time = Eo.replace(Fo[1], ""), Xn.timezone = Fo[1]) : Xn.time = Eo;
          }
          return Xn;
        }(qn);
      if (Fo.date) {
        var Pr = function O(qn, Xn) {
          var Yi = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + Xn) + "})|(\\d{2}|[+-]\\d{" + (2 + Xn) + "})$)"),
            Eo = qn.match(Yi);
          if (!Eo) return {
            year: NaN,
            restDateString: ""
          };
          var Fo = Eo[1] ? parseInt(Eo[1]) : null,
            br = Eo[2] ? parseInt(Eo[2]) : null;
          return {
            year: null === br ? Fo : 100 * br,
            restDateString: qn.slice((Eo[1] || Eo[2]).length)
          };
        }(Fo.date, Eo);
        br = function L(qn, Xn) {
          if (null === Xn) return new Date(NaN);
          var Yi = qn.match(b);
          if (!Yi) return new Date(NaN);
          var Eo = !!Yi[4],
            Fo = C(Yi[1]),
            br = C(Yi[2]) - 1,
            Pr = C(Yi[3]),
            qo = C(Yi[4]),
            Yo = C(Yi[5]) - 1;
          if (Eo) return function B(qn, Xn, Yi) {
            return Xn >= 1 && Xn <= 53 && Yi >= 0 && Yi <= 6;
          }(0, qo, Yo) ? function h(qn, Xn, Yi) {
            var Eo = new Date(0);
            Eo.setUTCFullYear(qn, 0, 4);
            var br = 7 * (Xn - 1) + Yi + 1 - (Eo.getUTCDay() || 7);
            return Eo.setUTCDate(Eo.getUTCDate() + br), Eo;
          }(Xn, qo, Yo) : new Date(NaN);
          var wr = new Date(0);
          return function T(qn, Xn, Yi) {
            return Xn >= 0 && Xn <= 11 && Yi >= 1 && Yi <= (x[Xn] || (u(qn) ? 29 : 28));
          }(Xn, br, Pr) && function R(qn, Xn) {
            return Xn >= 1 && Xn <= (u(qn) ? 366 : 365);
          }(Xn, Fo) ? (wr.setUTCFullYear(Xn, br, Math.max(Fo, Pr)), wr) : new Date(NaN);
        }(Pr.restDateString, Pr.year);
      }
      if (!br || isNaN(br.getTime())) return new Date(NaN);
      var wr,
        qo = br.getTime(),
        Yo = 0;
      if (Fo.time && (Yo = function v(qn) {
        var Xn = qn.match(A);
        if (!Xn) return NaN;
        var Yi = f(Xn[1]),
          Eo = f(Xn[2]),
          Fo = f(Xn[3]);
        return function y(qn, Xn, Yi) {
          return 24 === qn ? 0 === Xn && 0 === Yi : Yi >= 0 && Yi < 60 && Xn >= 0 && Xn < 60 && qn >= 0 && qn < 25;
        }(Yi, Eo, Fo) ? Yi * e.vh + Eo * e.yJ + 1e3 * Fo : NaN;
      }(Fo.time), isNaN(Yo))) return new Date(NaN);
      if (!Fo.timezone) {
        var oo = new Date(qo + Yo),
          Di = new Date(0);
        return Di.setFullYear(oo.getUTCFullYear(), oo.getUTCMonth(), oo.getUTCDate()), Di.setHours(oo.getUTCHours(), oo.getUTCMinutes(), oo.getUTCSeconds(), oo.getUTCMilliseconds()), Di;
      }
      return wr = function E(qn) {
        if ("Z" === qn) return 0;
        var Xn = qn.match(N);
        if (!Xn) return 0;
        var Yi = "+" === Xn[1] ? -1 : 1,
          Eo = parseInt(Xn[2]),
          Fo = Xn[3] && parseInt(Xn[3]) || 0;
        return function j(qn, Xn) {
          return Xn >= 0 && Xn <= 59;
        }(0, Fo) ? Yi * (Eo * e.vh + Fo * e.yJ) : NaN;
      }(Fo.timezone), isNaN(wr) ? new Date(NaN) : new Date(qo + Yo + wr);
    }(qn), "HH:mm") : "";
  }
  const Ue = new RegExp(`[${"+-=&|!(){}[]^\"~*?:\\/".split("").join("\\")}]`, "g");
  function Me(qn) {
    return qn ? qn.replace(/[<>]/g, "").replace(Ue, "\\$&") : "";
  }
  function Ke(qn, Xn) {
    return JSON.stringify(qn) === JSON.stringify(Xn);
  }
  const Ze = ["год", "года", "лет"];
  function Je(qn, Xn = []) {
    return !!qn && Object.getOwnPropertyNames(qn).filter(Yi => !Xn.includes(Yi)).some(Yi => !!qn[Yi]);
  }
  function Xt(qn, Xn, Yi = !0) {
    if (!Number.isInteger(qn) || !Array.isArray(Xn) || Xn.length < 3) return "";
    const Eo = Xn[0],
      Fo = Xn[1],
      br = Xn[2];
    let Pr;
    const qo = qn % 100;
    if (qo >= 11 && qo <= 19) Pr = br;else switch (qo % 10) {
      case 1:
        Pr = Eo;
        break;
      case 2:
      case 3:
      case 4:
        Pr = Fo;
        break;
      default:
        Pr = br;
    }
    return function Nn(qn, Xn, Yi) {
      return `${Yi ? `${qn.toString()} ` : ""}${Xn}`;
    }(qn, Pr, Yi);
  }
  function co(qn) {
    if (!qn) return "—";
    const Xn = Ze,
      Yi = "мес.",
      Fo = new Date(),
      br = new Date(qn),
      Pr = function Pi(qn) {
        const Xn = new Date(),
          Yi = Math.abs((0, W.Z)(new Date(qn), Xn));
        return function Ii(qn) {
          const Xn = new Date(),
            Yi = new Date(Xn.getFullYear(), new Date(qn).getMonth(), new Date(qn).getDate());
          return function Le(qn, Xn) {
            (0, a.Z)(2, arguments);
            var Yi = (0, F.Z)(qn),
              Eo = (0, F.Z)(Xn);
            return Yi.getTime() > Eo.getTime();
          }(Xn, Yi);
        }(qn) ? Yi : Yi - 1;
      }(qn),
      qo = Math.abs((0, ke.Z)(br, Fo)) - 12 * Pr,
      Yo = Math.abs((0, J.Z)(br, Fo) - (0, J.Z)((0, fe.Z)(Fo, qo), Fo));
    if ((0, ye.Z)((0, ae.Z)(Fo), (0, ae.Z)(br))) return "0 дн.";
    if (Pr && Pr >= 5) return `${Pr} ${Xt(Pr, Xn, !1)}`;
    if (Pr && Pr > 0 && Pr < 5) {
      const wr = qo ? ` ${qo} ${Yi}` : "";
      return `${Pr} ${Xt(Pr, Xn, !1)}${wr}`;
    }
    return qo && qo >= 3 && qo < 12 ? `${qo} ${Yi}` : qo && qo > 0 && qo < 3 ? `${qo} ${Yi} ${Yo ? `${Yo} \u0434\u043d.` : ""}` : Yo ? `${Yo} \u0434\u043d.` : "";
  }
  function li(qn, Xn, Yi = new Date()) {
    switch (Xn) {
      case "Y":
        return {
          start: qn.end ? (0, Y.Z)((0, G.Z)((0, ae.Z)(Yi), Number(qn.end) + 1), 1) : null,
          end: qn.start ? (0, G.Z)((0, te.Z)(Yi), Number(qn.start)) : null
        };
      case "M":
        return {
          start: qn.end ? (0, fe.Z)((0, ae.Z)(Yi), Number(qn.end) + 1) : null,
          end: qn.start ? (0, fe.Z)((0, te.Z)(Yi), Number(qn.start)) : null
        };
      case "D":
        return {
          start: qn.end ? (0, pe.Z)((0, ae.Z)(Yi), Number(qn.end)) : null,
          end: qn.start ? (0, pe.Z)((0, te.Z)(Yi), Number(qn.start)) : null
        };
    }
    return {
      start: null,
      end: null
    };
  }
  function zn(qn) {
    return {
      start: qn.start ? (0, ae.Z)(new Date(qn.start)) : null,
      end: qn.end ? (0, te.Z)(new Date(qn.end)) : null
    };
  }
  function $t(qn, Xn) {
    return qn.start || qn.end ? {
      start: Mn(qn.start, Xn?.start),
      end: Mn(qn.end, Xn?.end)
    } : qn;
  }
  function Mn(qn, Xn) {
    if (!qn) return null;
    if (Xn) {
      const [Yi, Eo] = Xn.split(":") || [];
      if (isNaN(Number(Yi)) || isNaN(Number(Eo))) throw new Error("timeValue must be a valid date period");
      const Fo = new Date(qn).setHours(Number(Yi), Number(Eo));
      return new Date(Fo);
    }
    return new Date(qn);
  }
  function Qn(qn, Xn, Yi) {
    const Eo = Xn.split(".");
    return {
      ...qn,
      [Eo[0]]: Eo.length > 1 && qn[Eo[0]] ? Qn(qn[Eo[0]], Eo.slice(1).join("."), Yi) : Yi
    };
  }
  function ui(qn) {
    if (null === qn || "object" != typeof qn) return qn;
    if (Array.isArray(qn)) return qn.map(ui);
    if (function In(qn) {
      if ("object" != typeof qn || null === qn) return !1;
      const Xn = Object.getPrototypeOf(qn);
      return null === Xn || Xn === Object.prototype;
    }(qn)) {
      const Xn = {};
      for (const Yi in qn) qn.hasOwnProperty(Yi) && (Xn[Yi] = ui(qn[Yi]));
      return Xn;
    }
    return qn;
  }
  function To(qn, Xn) {
    if (qn) {
      const Yi = new le.Kj();
      try {
        return "true" === Yi.renderSync(Yi.parse(`{% if ${qn} %}true{% else %}false{% endif %}`), Xn);
      } catch (Eo) {
        return console.error("Invalid widget disable rule", Eo), !1;
      }
    }
    return !1;
  }
  function bi(qn, Xn) {
    if (qn) {
      const Yi = new le.Kj();
      try {
        return "true" === Yi.renderSync(Yi.parse(`{% if ${qn} %}true{% else %}false{% endif %}`), Xn);
      } catch (Eo) {
        return console.error("Invalid widget hide rule", Eo), !1;
      }
    }
    return !1;
  }
});
