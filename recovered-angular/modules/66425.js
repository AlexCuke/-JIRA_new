// Extracted from main; webpack module 66425. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => ye
  });
  var t = i(66745),
    e = i(52725),
    a = i(80953),
    m = i(40833),
    d = 864e5,
    b = i(59264),
    A = i(37875),
    N = i(7070),
    I = i(51834),
    O = i(23331);
  const C_y = function (G, te) {
      var pe = G.getUTCFullYear(),
        be = pe > 0 ? pe : 1 - pe;
      return (0, O.Z)("yy" === te ? be % 100 : be, te.length);
    },
    C_M = function (G, te) {
      var pe = G.getUTCMonth();
      return "M" === te ? String(pe + 1) : (0, O.Z)(pe + 1, 2);
    },
    C_d = function (G, te) {
      return (0, O.Z)(G.getUTCDate(), te.length);
    },
    C_h = function (G, te) {
      return (0, O.Z)(G.getUTCHours() % 12 || 12, te.length);
    },
    C_H = function (G, te) {
      return (0, O.Z)(G.getUTCHours(), te.length);
    },
    C_m = function (G, te) {
      return (0, O.Z)(G.getUTCMinutes(), te.length);
    },
    C_s = function (G, te) {
      return (0, O.Z)(G.getUTCSeconds(), te.length);
    },
    C_S = function (G, te) {
      var pe = te.length,
        be = G.getUTCMilliseconds(),
        le = Math.floor(be * Math.pow(10, pe - 3));
      return (0, O.Z)(le, te.length);
    };
  function E(Y, G) {
    var te = Y > 0 ? "-" : "+",
      pe = Math.abs(Y),
      be = Math.floor(pe / 60),
      le = pe % 60;
    if (0 === le) return te + String(be);
    var n = G || "";
    return te + String(be) + n + (0, O.Z)(le, 2);
  }
  function h(Y, G) {
    return Y % 60 == 0 ? (Y > 0 ? "-" : "+") + (0, O.Z)(Math.abs(Y) / 60, 2) : x(Y, G);
  }
  function x(Y, G) {
    var te = G || "",
      pe = Y > 0 ? "-" : "+",
      be = Math.abs(Y);
    return pe + (0, O.Z)(Math.floor(be / 60), 2) + te + (0, O.Z)(be % 60, 2);
  }
  const u = {
    G: function (G, te, pe) {
      var be = G.getUTCFullYear() > 0 ? 1 : 0;
      switch (te) {
        case "G":
        case "GG":
        case "GGG":
          return pe.era(be, {
            width: "abbreviated"
          });
        case "GGGGG":
          return pe.era(be, {
            width: "narrow"
          });
        default:
          return pe.era(be, {
            width: "wide"
          });
      }
    },
    y: function (G, te, pe) {
      if ("yo" === te) {
        var be = G.getUTCFullYear();
        return pe.ordinalNumber(be > 0 ? be : 1 - be, {
          unit: "year"
        });
      }
      return C_y(G, te);
    },
    Y: function (G, te, pe, be) {
      var le = (0, I.Z)(G, be),
        n = le > 0 ? le : 1 - le;
      return "YY" === te ? (0, O.Z)(n % 100, 2) : "Yo" === te ? pe.ordinalNumber(n, {
        unit: "year"
      }) : (0, O.Z)(n, te.length);
    },
    R: function (G, te) {
      var pe = (0, A.Z)(G);
      return (0, O.Z)(pe, te.length);
    },
    u: function (G, te) {
      var pe = G.getUTCFullYear();
      return (0, O.Z)(pe, te.length);
    },
    Q: function (G, te, pe) {
      var be = Math.ceil((G.getUTCMonth() + 1) / 3);
      switch (te) {
        case "Q":
          return String(be);
        case "QQ":
          return (0, O.Z)(be, 2);
        case "Qo":
          return pe.ordinalNumber(be, {
            unit: "quarter"
          });
        case "QQQ":
          return pe.quarter(be, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return pe.quarter(be, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return pe.quarter(be, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function (G, te, pe) {
      var be = Math.ceil((G.getUTCMonth() + 1) / 3);
      switch (te) {
        case "q":
          return String(be);
        case "qq":
          return (0, O.Z)(be, 2);
        case "qo":
          return pe.ordinalNumber(be, {
            unit: "quarter"
          });
        case "qqq":
          return pe.quarter(be, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return pe.quarter(be, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return pe.quarter(be, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function (G, te, pe) {
      var be = G.getUTCMonth();
      switch (te) {
        case "M":
        case "MM":
          return C_M(G, te);
        case "Mo":
          return pe.ordinalNumber(be + 1, {
            unit: "month"
          });
        case "MMM":
          return pe.month(be, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return pe.month(be, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return pe.month(be, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function (G, te, pe) {
      var be = G.getUTCMonth();
      switch (te) {
        case "L":
          return String(be + 1);
        case "LL":
          return (0, O.Z)(be + 1, 2);
        case "Lo":
          return pe.ordinalNumber(be + 1, {
            unit: "month"
          });
        case "LLL":
          return pe.month(be, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return pe.month(be, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return pe.month(be, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function (G, te, pe, be) {
      var le = (0, N.Z)(G, be);
      return "wo" === te ? pe.ordinalNumber(le, {
        unit: "week"
      }) : (0, O.Z)(le, te.length);
    },
    I: function (G, te, pe) {
      var be = (0, b.Z)(G);
      return "Io" === te ? pe.ordinalNumber(be, {
        unit: "week"
      }) : (0, O.Z)(be, te.length);
    },
    d: function (G, te, pe) {
      return "do" === te ? pe.ordinalNumber(G.getUTCDate(), {
        unit: "date"
      }) : C_d(G, te);
    },
    D: function (G, te, pe) {
      var be = function M(Y) {
        (0, m.Z)(1, arguments);
        var G = (0, a.Z)(Y),
          te = G.getTime();
        G.setUTCMonth(0, 1), G.setUTCHours(0, 0, 0, 0);
        var pe = G.getTime();
        return Math.floor((te - pe) / d) + 1;
      }(G);
      return "Do" === te ? pe.ordinalNumber(be, {
        unit: "dayOfYear"
      }) : (0, O.Z)(be, te.length);
    },
    E: function (G, te, pe) {
      var be = G.getUTCDay();
      switch (te) {
        case "E":
        case "EE":
        case "EEE":
          return pe.day(be, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return pe.day(be, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return pe.day(be, {
            width: "short",
            context: "formatting"
          });
        default:
          return pe.day(be, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function (G, te, pe, be) {
      var le = G.getUTCDay(),
        n = (le - be.weekStartsOn + 8) % 7 || 7;
      switch (te) {
        case "e":
          return String(n);
        case "ee":
          return (0, O.Z)(n, 2);
        case "eo":
          return pe.ordinalNumber(n, {
            unit: "day"
          });
        case "eee":
          return pe.day(le, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return pe.day(le, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return pe.day(le, {
            width: "short",
            context: "formatting"
          });
        default:
          return pe.day(le, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function (G, te, pe, be) {
      var le = G.getUTCDay(),
        n = (le - be.weekStartsOn + 8) % 7 || 7;
      switch (te) {
        case "c":
          return String(n);
        case "cc":
          return (0, O.Z)(n, te.length);
        case "co":
          return pe.ordinalNumber(n, {
            unit: "day"
          });
        case "ccc":
          return pe.day(le, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return pe.day(le, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return pe.day(le, {
            width: "short",
            context: "standalone"
          });
        default:
          return pe.day(le, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function (G, te, pe) {
      var be = G.getUTCDay(),
        le = 0 === be ? 7 : be;
      switch (te) {
        case "i":
          return String(le);
        case "ii":
          return (0, O.Z)(le, te.length);
        case "io":
          return pe.ordinalNumber(le, {
            unit: "day"
          });
        case "iii":
          return pe.day(be, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return pe.day(be, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return pe.day(be, {
            width: "short",
            context: "formatting"
          });
        default:
          return pe.day(be, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function (G, te, pe) {
      var le = G.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (te) {
        case "a":
        case "aa":
          return pe.dayPeriod(le, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return pe.dayPeriod(le, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return pe.dayPeriod(le, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return pe.dayPeriod(le, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function (G, te, pe) {
      var le,
        be = G.getUTCHours();
      switch (le = 12 === be ? "noon" : 0 === be ? "midnight" : be / 12 >= 1 ? "pm" : "am", te) {
        case "b":
        case "bb":
          return pe.dayPeriod(le, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return pe.dayPeriod(le, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return pe.dayPeriod(le, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return pe.dayPeriod(le, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function (G, te, pe) {
      var le,
        be = G.getUTCHours();
      switch (le = be >= 17 ? "evening" : be >= 12 ? "afternoon" : be >= 4 ? "morning" : "night", te) {
        case "B":
        case "BB":
        case "BBB":
          return pe.dayPeriod(le, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return pe.dayPeriod(le, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return pe.dayPeriod(le, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function (G, te, pe) {
      if ("ho" === te) {
        var be = G.getUTCHours() % 12;
        return 0 === be && (be = 12), pe.ordinalNumber(be, {
          unit: "hour"
        });
      }
      return C_h(G, te);
    },
    H: function (G, te, pe) {
      return "Ho" === te ? pe.ordinalNumber(G.getUTCHours(), {
        unit: "hour"
      }) : C_H(G, te);
    },
    K: function (G, te, pe) {
      var be = G.getUTCHours() % 12;
      return "Ko" === te ? pe.ordinalNumber(be, {
        unit: "hour"
      }) : (0, O.Z)(be, te.length);
    },
    k: function (G, te, pe) {
      var be = G.getUTCHours();
      return 0 === be && (be = 24), "ko" === te ? pe.ordinalNumber(be, {
        unit: "hour"
      }) : (0, O.Z)(be, te.length);
    },
    m: function (G, te, pe) {
      return "mo" === te ? pe.ordinalNumber(G.getUTCMinutes(), {
        unit: "minute"
      }) : C_m(G, te);
    },
    s: function (G, te, pe) {
      return "so" === te ? pe.ordinalNumber(G.getUTCSeconds(), {
        unit: "second"
      }) : C_s(G, te);
    },
    S: function (G, te) {
      return C_S(G, te);
    },
    X: function (G, te, pe, be) {
      var n = (be._originalDate || G).getTimezoneOffset();
      if (0 === n) return "Z";
      switch (te) {
        case "X":
          return h(n);
        case "XXXX":
        case "XX":
          return x(n);
        default:
          return x(n, ":");
      }
    },
    x: function (G, te, pe, be) {
      var n = (be._originalDate || G).getTimezoneOffset();
      switch (te) {
        case "x":
          return h(n);
        case "xxxx":
        case "xx":
          return x(n);
        default:
          return x(n, ":");
      }
    },
    O: function (G, te, pe, be) {
      var n = (be._originalDate || G).getTimezoneOffset();
      switch (te) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + E(n, ":");
        default:
          return "GMT" + x(n, ":");
      }
    },
    z: function (G, te, pe, be) {
      var n = (be._originalDate || G).getTimezoneOffset();
      switch (te) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + E(n, ":");
        default:
          return "GMT" + x(n, ":");
      }
    },
    t: function (G, te, pe, be) {
      var n = Math.floor((be._originalDate || G).getTime() / 1e3);
      return (0, O.Z)(n, te.length);
    },
    T: function (G, te, pe, be) {
      var n = (be._originalDate || G).getTime();
      return (0, O.Z)(n, te.length);
    }
  };
  var T = i(61889),
    R = i(9868),
    B = i(72621),
    y = i(91998),
    j = i(58370),
    W = i(25),
    F = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Le = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    ke = /^'([^]*?)'?$/,
    J = /''/g,
    fe = /[a-zA-Z]/;
  function ye(Y, G, te) {
    var pe, be, le, n, Se, qe, Rt, We, Re, st, q, mt, ut, Ct, Ft, Et, Ue, Me;
    (0, m.Z)(2, arguments);
    var Ke = String(G),
      Ze = (0, j.j)(),
      Ee = null !== (pe = null !== (be = te?.locale) && void 0 !== be ? be : Ze.locale) && void 0 !== pe ? pe : W.Z,
      je = (0, y.Z)(null !== (le = null !== (n = null !== (Se = null !== (qe = te?.firstWeekContainsDate) && void 0 !== qe ? qe : null == te || null === (Rt = te.locale) || void 0 === Rt || null === (We = Rt.options) || void 0 === We ? void 0 : We.firstWeekContainsDate) && void 0 !== Se ? Se : Ze.firstWeekContainsDate) && void 0 !== n ? n : null === (Re = Ze.locale) || void 0 === Re || null === (st = Re.options) || void 0 === st ? void 0 : st.firstWeekContainsDate) && void 0 !== le ? le : 1);
    if (!(je >= 1 && je <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var Mt = (0, y.Z)(null !== (q = null !== (mt = null !== (ut = null !== (Ct = te?.weekStartsOn) && void 0 !== Ct ? Ct : null == te || null === (Ft = te.locale) || void 0 === Ft || null === (Et = Ft.options) || void 0 === Et ? void 0 : Et.weekStartsOn) && void 0 !== ut ? ut : Ze.weekStartsOn) && void 0 !== mt ? mt : null === (Ue = Ze.locale) || void 0 === Ue || null === (Me = Ue.options) || void 0 === Me ? void 0 : Me.weekStartsOn) && void 0 !== q ? q : 0);
    if (!(Mt >= 0 && Mt <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!Ee.localize) throw new RangeError("locale must contain localize property");
    if (!Ee.formatLong) throw new RangeError("locale must contain formatLong property");
    var Je = (0, a.Z)(Y);
    if (!(0, t.Z)(Je)) throw new RangeError("Invalid time value");
    var Xt = (0, R.Z)(Je),
      Nn = (0, e.Z)(Je, Xt),
      Pi = {
        firstWeekContainsDate: je,
        weekStartsOn: Mt,
        locale: Ee,
        _originalDate: Je
      },
      Ii = Ke.match(Le).map(function (yi) {
        var co = yi[0];
        return "p" === co || "P" === co ? (0, T.Z[co])(yi, Ee.formatLong) : yi;
      }).join("").match(F).map(function (yi) {
        if ("''" === yi) return "'";
        var co = yi[0];
        if ("'" === co) return function ae(Y) {
          var G = Y.match(ke);
          return G ? G[1].replace(J, "'") : Y;
        }(yi);
        var Jo = u[co];
        if (Jo) return !(null != te && te.useAdditionalWeekYearTokens) && (0, B.Do)(yi) && (0, B.qp)(yi, G, String(Y)), !(null != te && te.useAdditionalDayOfYearTokens) && (0, B.Iu)(yi) && (0, B.qp)(yi, G, String(Y)), Jo(Nn, yi, Ee.localize, Pi);
        if (co.match(fe)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + co + "`");
        return yi;
      }).join("");
    return Ii;
  }
});
