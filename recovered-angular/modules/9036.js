// Extracted from main; webpack module 9036. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    W: () => Js
  });
  var t = i(94650),
    e = i(28642),
    a = i(8391),
    m = i(29358),
    d = i(5238),
    M = i(85866),
    b = i(97978),
    A = i(60883),
    N = i(91998),
    I = i(80953),
    O = i(40833),
    C = i(28115),
    v = i(58370);
  var h = i(35119),
    x = i(81664),
    u = i(9378),
    T = i(30948),
    R = i(66745),
    B = i(23882),
    y = i(86);
  function j(ho, uo) {
    (null == uo || uo > ho.length) && (uo = ho.length);
    for (var ri = 0, Yt = Array(uo); ri < uo; ri++) Yt[ri] = ho[ri];
    return Yt;
  }
  function F(ho, uo) {
    var ri = typeof Symbol < "u" && ho[Symbol.iterator] || ho["@@iterator"];
    if (!ri) {
      if (Array.isArray(ho) || (ri = function W(ho, uo) {
        if (ho) {
          if ("string" == typeof ho) return j(ho, uo);
          var ri = {}.toString.call(ho).slice(8, -1);
          return "Object" === ri && ho.constructor && (ri = ho.constructor.name), "Map" === ri || "Set" === ri ? Array.from(ho) : "Arguments" === ri || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ri) ? j(ho, uo) : void 0;
        }
      }(ho)) || uo && ho && "number" == typeof ho.length) {
        ri && (ho = ri);
        var Yt = 0,
          jt = function () {};
        return {
          s: jt,
          n: function () {
            return Yt >= ho.length ? {
              done: !0
            } : {
              done: !1,
              value: ho[Yt++]
            };
          },
          e: function (dn) {
            throw dn;
          },
          f: jt
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hn,
      tn = !0,
      di = !1;
    return {
      s: function () {
        ri = ri.call(ho);
      },
      n: function () {
        var dn = ri.next();
        return tn = dn.done, dn;
      },
      e: function (dn) {
        di = !0, hn = dn;
      },
      f: function () {
        try {
          tn || null == ri.return || ri.return();
        } finally {
          if (di) throw hn;
        }
      }
    };
  }
  var Le = i(25),
    ke = i(52725);
  function J(ho, uo) {
    if (null == ho) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var ri in uo) Object.prototype.hasOwnProperty.call(uo, ri) && (ho[ri] = uo[ri]);
    return ho;
  }
  var fe = i(61889),
    ye = i(9868),
    ae = i(72621);
  function Y(ho) {
    if (void 0 === ho) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return ho;
  }
  function G(ho, uo) {
    return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (ri, Yt) {
      return ri.__proto__ = Yt, ri;
    })(ho, uo);
  }
  function te(ho, uo) {
    if ("function" != typeof uo && null !== uo) throw new TypeError("Super expression must either be null or a function");
    ho.prototype = Object.create(uo && uo.prototype, {
      constructor: {
        value: ho,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(ho, "prototype", {
      writable: !1
    }), uo && G(ho, uo);
  }
  function pe(ho) {
    return (pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (uo) {
      return uo.__proto__ || Object.getPrototypeOf(uo);
    })(ho);
  }
  function be() {
    try {
      var ho = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch {}
    return (be = function () {
      return !!ho;
    })();
  }
  function n(ho) {
    var uo = be();
    return function () {
      var ri,
        Yt = pe(ho);
      if (uo) {
        var jt = pe(this).constructor;
        ri = Reflect.construct(Yt, arguments, jt);
      } else ri = Yt.apply(this, arguments);
      return function le(ho, uo) {
        if (uo && ("object" == (0, y.Z)(uo) || "function" == typeof uo)) return uo;
        if (void 0 !== uo) throw new TypeError("Derived constructors may only return object or undefined");
        return Y(ho);
      }(this, ri);
    };
  }
  function Se(ho, uo) {
    if (!(ho instanceof uo)) throw new TypeError("Cannot call a class as a function");
  }
  function Rt(ho) {
    var uo = function qe(ho, uo) {
      if ("object" != (0, y.Z)(ho) || !ho) return ho;
      var ri = ho[Symbol.toPrimitive];
      if (void 0 !== ri) {
        var Yt = ri.call(ho, uo || "default");
        if ("object" != (0, y.Z)(Yt)) return Yt;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === uo ? String : Number)(ho);
    }(ho, "string");
    return "symbol" == (0, y.Z)(uo) ? uo : uo + "";
  }
  function We(ho, uo) {
    for (var ri = 0; ri < uo.length; ri++) {
      var Yt = uo[ri];
      Yt.enumerable = Yt.enumerable || !1, Yt.configurable = !0, "value" in Yt && (Yt.writable = !0), Object.defineProperty(ho, Rt(Yt.key), Yt);
    }
  }
  function Re(ho, uo, ri) {
    return uo && We(ho.prototype, uo), ri && We(ho, ri), Object.defineProperty(ho, "prototype", {
      writable: !1
    }), ho;
  }
  function st(ho, uo, ri) {
    return (uo = Rt(uo)) in ho ? Object.defineProperty(ho, uo, {
      value: ri,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : ho[uo] = ri, ho;
  }
  var q = 10,
    mt = function () {
      function ho() {
        Se(this, ho), st(this, "priority", void 0), st(this, "subPriority", 0);
      }
      return Re(ho, [{
        key: "validate",
        value: function (ri, Yt) {
          return !0;
        }
      }]), ho;
    }(),
    ut = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri(Yt, jt, hn, tn, di) {
        var Gn;
        return Se(this, ri), (Gn = uo.call(this)).value = Yt, Gn.validateValue = jt, Gn.setValue = hn, Gn.priority = tn, di && (Gn.subPriority = di), Gn;
      }
      return Re(ri, [{
        key: "validate",
        value: function (jt, hn) {
          return this.validateValue(jt, this.value, hn);
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return this.setValue(jt, hn, this.value, tn);
        }
      }]), ri;
    }(mt),
    Ct = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", q), st(Y(Yt), "subPriority", -1), Yt;
      }
      return Re(ri, [{
        key: "set",
        value: function (jt, hn) {
          if (hn.timestampIsSet) return jt;
          var tn = new Date(0);
          return tn.setFullYear(jt.getUTCFullYear(), jt.getUTCMonth(), jt.getUTCDate()), tn.setHours(jt.getUTCHours(), jt.getUTCMinutes(), jt.getUTCSeconds(), jt.getUTCMilliseconds()), tn;
        }
      }]), ri;
    }(mt),
    Ft = function () {
      function ho() {
        Se(this, ho), st(this, "incompatibleTokens", void 0), st(this, "priority", void 0), st(this, "subPriority", void 0);
      }
      return Re(ho, [{
        key: "run",
        value: function (ri, Yt, jt, hn) {
          var tn = this.parse(ri, Yt, jt, hn);
          return tn ? {
            setter: new ut(tn.value, this.validate, this.set, this.priority, this.subPriority),
            rest: tn.rest
          } : null;
        }
      }, {
        key: "validate",
        value: function (ri, Yt, jt) {
          return !0;
        }
      }]), ho;
    }(),
    Et = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 140), st(Y(Yt), "incompatibleTokens", ["R", "u", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "G":
            case "GG":
            case "GGG":
              return tn.era(jt, {
                width: "abbreviated"
              }) || tn.era(jt, {
                width: "narrow"
              });
            case "GGGGG":
              return tn.era(jt, {
                width: "narrow"
              });
            default:
              return tn.era(jt, {
                width: "wide"
              }) || tn.era(jt, {
                width: "abbreviated"
              }) || tn.era(jt, {
                width: "narrow"
              });
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return hn.era = tn, jt.setUTCFullYear(tn, 0, 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Ue = i(45566),
    Me = {
      month: /^(1[0-2]|0?\d)/,
      date: /^(3[0-1]|[0-2]?\d)/,
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      week: /^(5[0-3]|[0-4]?\d)/,
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      hour11h: /^(1[0-1]|0?\d)/,
      hour12h: /^(1[0-2]|0?\d)/,
      minute: /^[0-5]?\d/,
      second: /^[0-5]?\d/,
      singleDigit: /^\d/,
      twoDigits: /^\d{1,2}/,
      threeDigits: /^\d{1,3}/,
      fourDigits: /^\d{1,4}/,
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      twoDigitsSigned: /^-?\d{1,2}/,
      threeDigitsSigned: /^-?\d{1,3}/,
      fourDigitsSigned: /^-?\d{1,4}/
    },
    Ke_basicOptionalMinutes = /^([+-])(\d{2})(\d{2})?|Z/,
    Ke_basic = /^([+-])(\d{2})(\d{2})|Z/,
    Ke_basicOptionalSeconds = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    Ke_extended = /^([+-])(\d{2}):(\d{2})|Z/,
    Ke_extendedOptionalSeconds = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function Ze(ho, uo) {
    return ho && {
      value: uo(ho.value),
      rest: ho.rest
    };
  }
  function Ee(ho, uo) {
    var ri = uo.match(ho);
    return ri ? {
      value: parseInt(ri[0], 10),
      rest: uo.slice(ri[0].length)
    } : null;
  }
  function je(ho, uo) {
    var ri = uo.match(ho);
    if (!ri) return null;
    if ("Z" === ri[0]) return {
      value: 0,
      rest: uo.slice(1)
    };
    var Yt = "+" === ri[1] ? 1 : -1,
      jt = ri[2] ? parseInt(ri[2], 10) : 0,
      hn = ri[3] ? parseInt(ri[3], 10) : 0,
      tn = ri[5] ? parseInt(ri[5], 10) : 0;
    return {
      value: Yt * (jt * Ue.vh + hn * Ue.yJ + tn * Ue.qk),
      rest: uo.slice(ri[0].length)
    };
  }
  function Mt(ho) {
    return Ee(Me.anyDigitsSigned, ho);
  }
  function Je(ho, uo) {
    switch (ho) {
      case 1:
        return Ee(Me.singleDigit, uo);
      case 2:
        return Ee(Me.twoDigits, uo);
      case 3:
        return Ee(Me.threeDigits, uo);
      case 4:
        return Ee(Me.fourDigits, uo);
      default:
        return Ee(new RegExp("^\\d{1," + ho + "}"), uo);
    }
  }
  function Xt(ho, uo) {
    switch (ho) {
      case 1:
        return Ee(Me.singleDigitSigned, uo);
      case 2:
        return Ee(Me.twoDigitsSigned, uo);
      case 3:
        return Ee(Me.threeDigitsSigned, uo);
      case 4:
        return Ee(Me.fourDigitsSigned, uo);
      default:
        return Ee(new RegExp("^-?\\d{1," + ho + "}"), uo);
    }
  }
  function Nn(ho) {
    switch (ho) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function Pi(ho, uo) {
    var jt,
      ri = uo > 0,
      Yt = ri ? uo : 1 - uo;
    if (Yt <= 50) jt = ho || 100;else {
      var hn = Yt + 50;
      jt = ho + 100 * Math.floor(hn / 100) - (ho >= hn % 100 ? 100 : 0);
    }
    return ri ? jt : 1 - jt;
  }
  function Ii(ho) {
    return ho % 400 == 0 || ho % 4 == 0 && ho % 100 != 0;
  }
  var yi = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 130), st(Y(Yt), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          var di = function (dn) {
            return {
              year: dn,
              isTwoDigitYear: "yy" === hn
            };
          };
          switch (hn) {
            case "y":
              return Ze(Je(4, jt), di);
            case "yo":
              return Ze(tn.ordinalNumber(jt, {
                unit: "year"
              }), di);
            default:
              return Ze(Je(hn.length, jt), di);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn.isTwoDigitYear || hn.year > 0;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          var di = jt.getUTCFullYear();
          if (tn.isTwoDigitYear) {
            var Gn = Pi(tn.year, di);
            return jt.setUTCFullYear(Gn, 0, 1), jt.setUTCHours(0, 0, 0, 0), jt;
          }
          return jt.setUTCFullYear("era" in hn && 1 !== hn.era ? 1 - tn.year : tn.year, 0, 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    co = i(51834),
    Jo = i(74697),
    fr = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 130), st(Y(Yt), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          var di = function (dn) {
            return {
              year: dn,
              isTwoDigitYear: "YY" === hn
            };
          };
          switch (hn) {
            case "Y":
              return Ze(Je(4, jt), di);
            case "Yo":
              return Ze(tn.ordinalNumber(jt, {
                unit: "year"
              }), di);
            default:
              return Ze(Je(hn.length, jt), di);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn.isTwoDigitYear || hn.year > 0;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn, di) {
          var Gn = (0, co.Z)(jt, di);
          if (tn.isTwoDigitYear) {
            var dn = Pi(tn.year, Gn);
            return jt.setUTCFullYear(dn, 0, di.firstWeekContainsDate), jt.setUTCHours(0, 0, 0, 0), (0, Jo.Z)(jt, di);
          }
          return jt.setUTCFullYear("era" in hn && 1 !== hn.era ? 1 - tn.year : tn.year, 0, di.firstWeekContainsDate), jt.setUTCHours(0, 0, 0, 0), (0, Jo.Z)(jt, di);
        }
      }]), ri;
    }(Ft),
    pt = i(77290),
    Dt = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 130), st(Y(Yt), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn) {
          return Xt("R" === hn ? 4 : hn.length, jt);
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          var di = new Date(0);
          return di.setUTCFullYear(tn, 0, 4), di.setUTCHours(0, 0, 0, 0), (0, pt.Z)(di);
        }
      }]), ri;
    }(Ft),
    Ht = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 130), st(Y(Yt), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn) {
          return Xt("u" === hn ? 4 : hn.length, jt);
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCFullYear(tn, 0, 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Dn = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 120), st(Y(Yt), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "Q":
            case "QQ":
              return Je(hn.length, jt);
            case "Qo":
              return tn.ordinalNumber(jt, {
                unit: "quarter"
              });
            case "QQQ":
              return tn.quarter(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.quarter(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "QQQQQ":
              return tn.quarter(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.quarter(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.quarter(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.quarter(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 4;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMonth(3 * (tn - 1), 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    vt = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 120), st(Y(Yt), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "q":
            case "qq":
              return Je(hn.length, jt);
            case "qo":
              return tn.ordinalNumber(jt, {
                unit: "quarter"
              });
            case "qqq":
              return tn.quarter(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.quarter(jt, {
                width: "narrow",
                context: "standalone"
              });
            case "qqqqq":
              return tn.quarter(jt, {
                width: "narrow",
                context: "standalone"
              });
            default:
              return tn.quarter(jt, {
                width: "wide",
                context: "standalone"
              }) || tn.quarter(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.quarter(jt, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 4;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMonth(3 * (tn - 1), 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    an = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), st(Y(Yt), "priority", 110), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          var di = function (dn) {
            return dn - 1;
          };
          switch (hn) {
            case "M":
              return Ze(Ee(Me.month, jt), di);
            case "MM":
              return Ze(Je(2, jt), di);
            case "Mo":
              return Ze(tn.ordinalNumber(jt, {
                unit: "month"
              }), di);
            case "MMM":
              return tn.month(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.month(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "MMMMM":
              return tn.month(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.month(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.month(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.month(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 11;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMonth(tn, 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    li = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 110), st(Y(Yt), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          var di = function (dn) {
            return dn - 1;
          };
          switch (hn) {
            case "L":
              return Ze(Ee(Me.month, jt), di);
            case "LL":
              return Ze(Je(2, jt), di);
            case "Lo":
              return Ze(tn.ordinalNumber(jt, {
                unit: "month"
              }), di);
            case "LLL":
              return tn.month(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.month(jt, {
                width: "narrow",
                context: "standalone"
              });
            case "LLLLL":
              return tn.month(jt, {
                width: "narrow",
                context: "standalone"
              });
            default:
              return tn.month(jt, {
                width: "wide",
                context: "standalone"
              }) || tn.month(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.month(jt, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 11;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMonth(tn, 1), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    zn = i(7070),
    Mn = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 100), st(Y(Yt), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "w":
              return Ee(Me.week, jt);
            case "wo":
              return tn.ordinalNumber(jt, {
                unit: "week"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 53;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn, di) {
          return (0, Jo.Z)(function $t(ho, uo, ri) {
            (0, O.Z)(2, arguments);
            var Yt = (0, I.Z)(ho),
              jt = (0, N.Z)(uo),
              hn = (0, zn.Z)(Yt, ri) - jt;
            return Yt.setUTCDate(Yt.getUTCDate() - 7 * hn), Yt;
          }(jt, tn, di), di);
        }
      }]), ri;
    }(Ft),
    Qn = i(59264),
    ui = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 100), st(Y(Yt), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "I":
              return Ee(Me.week, jt);
            case "Io":
              return tn.ordinalNumber(jt, {
                unit: "week"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 53;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return (0, pt.Z)(function In(ho, uo) {
            (0, O.Z)(2, arguments);
            var ri = (0, I.Z)(ho),
              Yt = (0, N.Z)(uo),
              jt = (0, Qn.Z)(ri) - Yt;
            return ri.setUTCDate(ri.getUTCDate() - 7 * jt), ri;
          }(jt, tn));
        }
      }]), ri;
    }(Ft),
    To = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    bi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    qn = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "subPriority", 1), st(Y(Yt), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "d":
              return Ee(Me.date, jt);
            case "do":
              return tn.ordinalNumber(jt, {
                unit: "date"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          var di = Ii(jt.getUTCFullYear()),
            Gn = jt.getUTCMonth();
          return di ? hn >= 1 && hn <= bi[Gn] : hn >= 1 && hn <= To[Gn];
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCDate(tn), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Xn = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "subpriority", 1), st(Y(Yt), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "D":
            case "DD":
              return Ee(Me.dayOfYear, jt);
            case "Do":
              return tn.ordinalNumber(jt, {
                unit: "date"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return Ii(jt.getUTCFullYear()) ? hn >= 1 && hn <= 366 : hn >= 1 && hn <= 365;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMonth(0, tn), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft);
  function Yi(ho, uo, ri) {
    var Yt, jt, hn, tn, di, Gn, dn, wo;
    (0, O.Z)(2, arguments);
    var Ro = (0, v.j)(),
      _r = (0, N.Z)(null !== (Yt = null !== (jt = null !== (hn = null !== (tn = ri?.weekStartsOn) && void 0 !== tn ? tn : null == ri || null === (di = ri.locale) || void 0 === di || null === (Gn = di.options) || void 0 === Gn ? void 0 : Gn.weekStartsOn) && void 0 !== hn ? hn : Ro.weekStartsOn) && void 0 !== jt ? jt : null === (dn = Ro.locale) || void 0 === dn || null === (wo = dn.options) || void 0 === wo ? void 0 : wo.weekStartsOn) && void 0 !== Yt ? Yt : 0);
    if (!(_r >= 0 && _r <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var qr = (0, I.Z)(ho),
      Ts = (0, N.Z)(uo),
      Ws = ((Ts % 7 + 7) % 7 < _r ? 7 : 0) + Ts - qr.getUTCDay();
    return qr.setUTCDate(qr.getUTCDate() + Ws), qr;
  }
  var Eo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "E":
            case "EE":
            case "EEE":
              return tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "EEEEE":
              return tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "EEEEEE":
              return tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.day(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 6;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn, di) {
          return (jt = Yi(jt, tn, di)).setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Fo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn, di) {
          var Gn = function (wo) {
            var Ro = 7 * Math.floor((wo - 1) / 7);
            return (wo + di.weekStartsOn + 6) % 7 + Ro;
          };
          switch (hn) {
            case "e":
            case "ee":
              return Ze(Je(hn.length, jt), Gn);
            case "eo":
              return Ze(tn.ordinalNumber(jt, {
                unit: "day"
              }), Gn);
            case "eee":
              return tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "eeeee":
              return tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "eeeeee":
              return tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.day(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 6;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn, di) {
          return (jt = Yi(jt, tn, di)).setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    br = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn, di) {
          var Gn = function (wo) {
            var Ro = 7 * Math.floor((wo - 1) / 7);
            return (wo + di.weekStartsOn + 6) % 7 + Ro;
          };
          switch (hn) {
            case "c":
            case "cc":
              return Ze(Je(hn.length, jt), Gn);
            case "co":
              return Ze(tn.ordinalNumber(jt, {
                unit: "day"
              }), Gn);
            case "ccc":
              return tn.day(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.day(jt, {
                width: "short",
                context: "standalone"
              }) || tn.day(jt, {
                width: "narrow",
                context: "standalone"
              });
            case "ccccc":
              return tn.day(jt, {
                width: "narrow",
                context: "standalone"
              });
            case "cccccc":
              return tn.day(jt, {
                width: "short",
                context: "standalone"
              }) || tn.day(jt, {
                width: "narrow",
                context: "standalone"
              });
            default:
              return tn.day(jt, {
                width: "wide",
                context: "standalone"
              }) || tn.day(jt, {
                width: "abbreviated",
                context: "standalone"
              }) || tn.day(jt, {
                width: "short",
                context: "standalone"
              }) || tn.day(jt, {
                width: "narrow",
                context: "standalone"
              });
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 6;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn, di) {
          return (jt = Yi(jt, tn, di)).setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    qo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 90), st(Y(Yt), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          var di = function (dn) {
            return 0 === dn ? 7 : dn;
          };
          switch (hn) {
            case "i":
            case "ii":
              return Je(hn.length, jt);
            case "io":
              return tn.ordinalNumber(jt, {
                unit: "day"
              });
            case "iii":
              return Ze(tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              }), di);
            case "iiiii":
              return Ze(tn.day(jt, {
                width: "narrow",
                context: "formatting"
              }), di);
            case "iiiiii":
              return Ze(tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              }), di);
            default:
              return Ze(tn.day(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.day(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.day(jt, {
                width: "short",
                context: "formatting"
              }) || tn.day(jt, {
                width: "narrow",
                context: "formatting"
              }), di);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 7;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt = function Pr(ho, uo) {
            (0, O.Z)(2, arguments);
            var ri = (0, N.Z)(uo);
            ri % 7 == 0 && (ri -= 7);
            var jt = (0, I.Z)(ho),
              Gn = ((ri % 7 + 7) % 7 < 1 ? 7 : 0) + ri - jt.getUTCDay();
            return jt.setUTCDate(jt.getUTCDate() + Gn), jt;
          }(jt, tn), jt.setUTCHours(0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Yo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 80), st(Y(Yt), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "a":
            case "aa":
            case "aaa":
              return tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "aaaaa":
              return tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.dayPeriod(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCHours(Nn(tn), 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    wr = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 80), st(Y(Yt), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "b":
            case "bb":
            case "bbb":
              return tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "bbbbb":
              return tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.dayPeriod(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCHours(Nn(tn), 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    oo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 80), st(Y(Yt), "incompatibleTokens", ["a", "b", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "B":
            case "BB":
            case "BBB":
              return tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            case "BBBBB":
              return tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
            default:
              return tn.dayPeriod(jt, {
                width: "wide",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "abbreviated",
                context: "formatting"
              }) || tn.dayPeriod(jt, {
                width: "narrow",
                context: "formatting"
              });
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCHours(Nn(tn), 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Di = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 70), st(Y(Yt), "incompatibleTokens", ["H", "K", "k", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "h":
              return Ee(Me.hour12h, jt);
            case "ho":
              return tn.ordinalNumber(jt, {
                unit: "hour"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 12;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          var di = jt.getUTCHours() >= 12;
          return jt.setUTCHours(di && tn < 12 ? tn + 12 : di || 12 !== tn ? tn : 0, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Ci = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 70), st(Y(Yt), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "H":
              return Ee(Me.hour23h, jt);
            case "Ho":
              return tn.ordinalNumber(jt, {
                unit: "hour"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 23;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCHours(tn, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    lo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 70), st(Y(Yt), "incompatibleTokens", ["h", "H", "k", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "K":
              return Ee(Me.hour11h, jt);
            case "Ko":
              return tn.ordinalNumber(jt, {
                unit: "hour"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 11;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          var di = jt.getUTCHours() >= 12;
          return jt.setUTCHours(di && tn < 12 ? tn + 12 : tn, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    jo = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 70), st(Y(Yt), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "k":
              return Ee(Me.hour24h, jt);
            case "ko":
              return tn.ordinalNumber(jt, {
                unit: "hour"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 1 && hn <= 24;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCHours(tn <= 24 ? tn % 24 : tn, 0, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    Go = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 60), st(Y(Yt), "incompatibleTokens", ["t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "m":
              return Ee(Me.minute, jt);
            case "mo":
              return tn.ordinalNumber(jt, {
                unit: "minute"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 59;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMinutes(tn, 0, 0), jt;
        }
      }]), ri;
    }(Ft),
    ji = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 50), st(Y(Yt), "incompatibleTokens", ["t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn, tn) {
          switch (hn) {
            case "s":
              return Ee(Me.second, jt);
            case "so":
              return tn.ordinalNumber(jt, {
                unit: "second"
              });
            default:
              return Je(hn.length, jt);
          }
        }
      }, {
        key: "validate",
        value: function (jt, hn) {
          return hn >= 0 && hn <= 59;
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCSeconds(tn, 0), jt;
        }
      }]), ri;
    }(Ft),
    ti = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 30), st(Y(Yt), "incompatibleTokens", ["t", "T"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn) {
          return Ze(Je(hn.length, jt), function (Gn) {
            return Math.floor(Gn * Math.pow(10, 3 - hn.length));
          });
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return jt.setUTCMilliseconds(tn), jt;
        }
      }]), ri;
    }(Ft),
    fi = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 10), st(Y(Yt), "incompatibleTokens", ["t", "T", "x"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn) {
          switch (hn) {
            case "X":
              return je(Ke_basicOptionalMinutes, jt);
            case "XX":
              return je(Ke_basic, jt);
            case "XXXX":
              return je(Ke_basicOptionalSeconds, jt);
            case "XXXXX":
              return je(Ke_extendedOptionalSeconds, jt);
            default:
              return je(Ke_extended, jt);
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return hn.timestampIsSet ? jt : new Date(jt.getTime() - tn);
        }
      }]), ri;
    }(Ft),
    Fi = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 10), st(Y(Yt), "incompatibleTokens", ["t", "T", "X"]), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt, hn) {
          switch (hn) {
            case "x":
              return je(Ke_basicOptionalMinutes, jt);
            case "xx":
              return je(Ke_basic, jt);
            case "xxxx":
              return je(Ke_basicOptionalSeconds, jt);
            case "xxxxx":
              return je(Ke_extendedOptionalSeconds, jt);
            default:
              return je(Ke_extended, jt);
          }
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return hn.timestampIsSet ? jt : new Date(jt.getTime() - tn);
        }
      }]), ri;
    }(Ft),
    Rn = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 40), st(Y(Yt), "incompatibleTokens", "*"), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt) {
          return Mt(jt);
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return [new Date(1e3 * tn), {
            timestampIsSet: !0
          }];
        }
      }]), ri;
    }(Ft),
    ki = function (ho) {
      te(ri, ho);
      var uo = n(ri);
      function ri() {
        var Yt;
        Se(this, ri);
        for (var jt = arguments.length, hn = new Array(jt), tn = 0; tn < jt; tn++) hn[tn] = arguments[tn];
        return st(Y(Yt = uo.call.apply(uo, [this].concat(hn))), "priority", 20), st(Y(Yt), "incompatibleTokens", "*"), Yt;
      }
      return Re(ri, [{
        key: "parse",
        value: function (jt) {
          return Mt(jt);
        }
      }, {
        key: "set",
        value: function (jt, hn, tn) {
          return [new Date(tn), {
            timestampIsSet: !0
          }];
        }
      }]), ri;
    }(Ft),
    Ei = {
      G: new Et(),
      y: new yi(),
      Y: new fr(),
      R: new Dt(),
      u: new Ht(),
      Q: new Dn(),
      q: new vt(),
      M: new an(),
      L: new li(),
      w: new Mn(),
      I: new ui(),
      d: new qn(),
      D: new Xn(),
      E: new Eo(),
      e: new Fo(),
      c: new br(),
      i: new qo(),
      a: new Yo(),
      b: new wr(),
      B: new oo(),
      h: new Di(),
      H: new Ci(),
      K: new lo(),
      k: new jo(),
      m: new Go(),
      s: new ji(),
      S: new ti(),
      X: new fi(),
      x: new Fi(),
      t: new Rn(),
      T: new ki()
    },
    Wt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Oi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Ji = /^'([^]*?)'?$/,
    Ao = /''/g,
    Sr = /\S/,
    us = /[a-zA-Z]/;
  var oi = i(66425),
    yo = i(83394),
    Qi = i(16153),
    Qo = i(35882),
    Kr = i(83958),
    ra = i(80188);
  const Or = {
      parse: {
        inputFormat: "dd.MM.yyyy"
      },
      display: {
        inputFormat: "dd.MM.yyyy",
        medium: [{
          pattern: "dd. "
        }, {
          pattern: "MMM",
          handler: ho => ho.replace(/\.$/, "")
        }, {
          pattern: " yyyy"
        }],
        large: [{
          pattern: "EEE",
          handler: ho => ho.replace(/\.$/, ",")
        }, {
          pattern: " dd.MM.yyyy"
        }],
        extraLarge: [{
          pattern: "EEE",
          handler: ho => ho.replace(/\.$/, ",")
        }, {
          pattern: " dd. "
        }, {
          pattern: "MMM",
          handler: ho => ho.replace(/\.$/, "")
        }, {
          pattern: " yyyy"
        }],
        month: "LLLL",
        monthAndYear: "LLLL yyyy",
        year: "yyyy"
      }
    },
    Fs = {
      parse: {
        inputFormat: "dd.MM.yyyy"
      },
      display: {
        inputFormat: "dd.MM.yyyy",
        medium: "dd MMM yyyy",
        large: "EEE, dd.MM.yyyy",
        extraLarge: "EEE, dd MMM yyyy",
        month: "LLLL",
        monthAndYear: "LLLL yyyy",
        year: "yyyy"
      }
    },
    xa = {
      parse: {
        inputFormat: "dd.MM.yyyy"
      },
      display: {
        inputFormat: "dd.MM.yyyy",
        medium: [{
          pattern: "dd.MM.yyyy, "
        }, {
          pattern: "EEEEEE",
          handler: ho => (0, e.WA)(ho)
        }],
        large: "dd MMMM yyyy",
        extraLarge: [{
          pattern: "dd MMMM yyyy, "
        }, {
          pattern: "EEEEEE",
          handler: ho => (0, e.WA)(ho)
        }],
        month: "LLLL",
        monthAndYear: "LLLL yyyy",
        year: "yyyy"
      }
    };
  let rs = (() => {
      class ho extends a.SW {
        addHours(ri, Yt) {
          return (0, m.Z)(this.toDate(ri), Yt);
        }
        addDays(ri, Yt) {
          return (0, d.Z)(this.toDate(ri), Yt);
        }
        addMonths(ri, Yt) {
          return (0, M.Z)(this.toDate(ri), Yt);
        }
        addYears(ri, Yt) {
          return (0, b.Z)(this.toDate(ri), Yt);
        }
        setMonth(ri, Yt) {
          return (0, A.Z)(this.toDate(ri), Yt);
        }
        setYear(ri, Yt) {
          return function L(ho, uo) {
            (0, O.Z)(2, arguments);
            var ri = (0, I.Z)(ho),
              Yt = (0, N.Z)(uo);
            return isNaN(ri.getTime()) ? new Date(NaN) : (ri.setFullYear(Yt), ri);
          }(this.toDate(ri), Yt);
        }
        startOfDay(ri) {
          return (0, C.Z)(this.toDate(ri));
        }
        startOfISOWeek(ri) {
          return function E(ho) {
            return (0, O.Z)(1, arguments), function f(ho, uo) {
              var ri, Yt, jt, hn, tn, di, Gn, dn;
              (0, O.Z)(1, arguments);
              var wo = (0, v.j)(),
                Ro = (0, N.Z)(null !== (ri = null !== (Yt = null !== (jt = null !== (hn = uo?.weekStartsOn) && void 0 !== hn ? hn : null == uo || null === (tn = uo.locale) || void 0 === tn || null === (di = tn.options) || void 0 === di ? void 0 : di.weekStartsOn) && void 0 !== jt ? jt : wo.weekStartsOn) && void 0 !== Yt ? Yt : null === (Gn = wo.locale) || void 0 === Gn || null === (dn = Gn.options) || void 0 === dn ? void 0 : dn.weekStartsOn) && void 0 !== ri ? ri : 0);
              if (!(Ro >= 0 && Ro <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
              var _r = (0, I.Z)(ho),
                qr = _r.getDay(),
                Ts = (qr < Ro ? 7 : 0) + qr - Ro;
              return _r.setDate(_r.getDate() - Ts), _r.setHours(0, 0, 0, 0), _r;
            }(ho, {
              weekStartsOn: 1
            });
          }(this.toDate(ri));
        }
        startOfMonth(ri) {
          return (0, h.Z)(this.toDate(ri));
        }
        endOfMonth(ri) {
          return (0, x.Z)(this.toDate(ri));
        }
        startOfYear(ri) {
          return (0, u.Z)(this.toDate(ri));
        }
        endOfYear(ri) {
          return (0, T.Z)(this.toDate(ri));
        }
        today() {
          return new Date(Date.now());
        }
        isValid(ri) {
          return (0, R.Z)(this.clone(ri));
        }
        getDaysInMonth(ri) {
          return (0, B.Z)(ri);
        }
        invalid() {
          return new Date(NaN);
        }
        formats() {
          switch (this.locale) {
            case "en-US":
              return Fs;
            case "de-DE":
              return Or;
            default:
              return xa;
          }
        }
        parse(ri, Yt) {
          return function Ps(ho, uo, ri, Yt) {
            var jt, hn, tn, di, Gn, dn, wo, Ro, _r, qr, Ts, js, ws, Us, Ws, sa, ha, ua;
            (0, O.Z)(3, arguments);
            var da = String(ho),
              na = String(uo),
              Qs = (0, v.j)(),
              ma = null !== (jt = null !== (hn = Yt?.locale) && void 0 !== hn ? hn : Qs.locale) && void 0 !== jt ? jt : Le.Z;
            if (!ma.match) throw new RangeError("locale must contain match property");
            var Xs = (0, N.Z)(null !== (tn = null !== (di = null !== (Gn = null !== (dn = Yt?.firstWeekContainsDate) && void 0 !== dn ? dn : null == Yt || null === (wo = Yt.locale) || void 0 === wo || null === (Ro = wo.options) || void 0 === Ro ? void 0 : Ro.firstWeekContainsDate) && void 0 !== Gn ? Gn : Qs.firstWeekContainsDate) && void 0 !== di ? di : null === (_r = Qs.locale) || void 0 === _r || null === (qr = _r.options) || void 0 === qr ? void 0 : qr.firstWeekContainsDate) && void 0 !== tn ? tn : 1);
            if (!(Xs >= 1 && Xs <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var Ks = (0, N.Z)(null !== (Ts = null !== (js = null !== (ws = null !== (Us = Yt?.weekStartsOn) && void 0 !== Us ? Us : null == Yt || null === (Ws = Yt.locale) || void 0 === Ws || null === (sa = Ws.options) || void 0 === sa ? void 0 : sa.weekStartsOn) && void 0 !== ws ? ws : Qs.weekStartsOn) && void 0 !== js ? js : null === (ha = Qs.locale) || void 0 === ha || null === (ua = ha.options) || void 0 === ua ? void 0 : ua.weekStartsOn) && void 0 !== Ts ? Ts : 0);
            if (!(Ks >= 0 && Ks <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if ("" === na) return "" === da ? (0, I.Z)(ri) : new Date(NaN);
            var ci,
              Va = {
                firstWeekContainsDate: Xs,
                weekStartsOn: Ks,
                locale: ma
              },
              ba = [new Ct()],
              qs = na.match(Oi).map(function (No) {
                var Ko = No[0];
                return Ko in fe.Z ? (0, fe.Z[Ko])(No, ma.formatLong) : No;
              }).join("").match(Wt),
              Ri = [],
              $o = F(qs);
            try {
              var Gi = function () {
                var Ko = ci.value;
                !(null != Yt && Yt.useAdditionalWeekYearTokens) && (0, ae.Do)(Ko) && (0, ae.qp)(Ko, na, ho), (null == Yt || !Yt.useAdditionalDayOfYearTokens) && (0, ae.Iu)(Ko) && (0, ae.qp)(Ko, na, ho);
                var Mi = Ko[0],
                  It = Ei[Mi];
                if (It) {
                  var At = It.incompatibleTokens;
                  if (Array.isArray(At)) {
                    var _n = Ri.find(function (_e) {
                      return At.includes(_e.token) || _e.token === Mi;
                    });
                    if (_n) throw new RangeError("The format string mustn't contain `".concat(_n.fullToken, "` and `").concat(Ko, "` at the same time"));
                  } else if ("*" === It.incompatibleTokens && Ri.length > 0) throw new RangeError("The format string mustn't contain `".concat(Ko, "` and any other token at the same time"));
                  Ri.push({
                    token: Mi,
                    fullToken: Ko
                  });
                  var it = It.run(da, Ko, ma.match, Va);
                  if (!it) return {
                    v: new Date(NaN)
                  };
                  ba.push(it.setter), da = it.rest;
                } else {
                  if (Mi.match(us)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + Mi + "`");
                  if ("''" === Ko ? Ko = "'" : "'" === Mi && (Ko = function hs(ho) {
                    return ho.match(Ji)[1].replace(Ao, "'");
                  }(Ko)), 0 !== da.indexOf(Ko)) return {
                    v: new Date(NaN)
                  };
                  da = da.slice(Ko.length);
                }
              };
              for ($o.s(); !(ci = $o.n()).done;) {
                var Fn = Gi();
                if ("object" === (0, y.Z)(Fn)) return Fn.v;
              }
            } catch (No) {
              $o.e(No);
            } finally {
              $o.f();
            }
            if (da.length > 0 && Sr.test(da)) return new Date(NaN);
            var zi = ba.map(function (No) {
                return No.priority;
              }).sort(function (No, Ko) {
                return Ko - No;
              }).filter(function (No, Ko, Mi) {
                return Mi.indexOf(No) === Ko;
              }).map(function (No) {
                return ba.filter(function (Ko) {
                  return Ko.priority === No;
                }).sort(function (Ko, Mi) {
                  return Mi.subPriority - Ko.subPriority;
                });
              }).map(function (No) {
                return No[0];
              }),
              Io = (0, I.Z)(ri);
            if (isNaN(Io.getTime())) return new Date(NaN);
            var Pn,
              gi = (0, ke.Z)(Io, (0, ye.Z)(Io)),
              Kt = {},
              Vt = F(zi);
            try {
              for (Vt.s(); !(Pn = Vt.n()).done;) {
                var pi = Pn.value;
                if (!pi.validate(gi, Va)) return new Date(NaN);
                var xo = pi.set(gi, Kt, Va);
                Array.isArray(xo) ? (gi = xo[0], J(Kt, xo[1])) : gi = xo;
              }
            } catch (No) {
              Vt.e(No);
            } finally {
              Vt.f();
            }
            return gi;
          }(ri, Yt, new Date());
        }
        format(ri, Yt) {
          return (0, e.up)(ri, Yt, (jt, hn) => (0, oi.Z)(this.toDate(jt), hn, {
            locale: this.dateLocale ?? void 0
          }));
        }
        clone(ri) {
          return new Date(ri);
        }
        loadLocale(ri) {
          switch (ri) {
            case "en-US":
              return (0, ra.D)(Promise.resolve().then(i.bind(i, 3034)).then(Yt => Yt.default));
            case "de-DE":
              return (0, ra.D)(i.e(515).then(i.bind(i, 22515)).then(Yt => Yt.default));
            default:
              return (0, ra.D)(Promise.resolve().then(i.bind(i, 73766)).then(Yt => Yt.default));
          }
        }
        diffInYears(ri) {
          return (0, yo.Z)(this.toDate(ri.end), this.toDate(ri.start));
        }
        diffInMonths(ri) {
          return (0, Qi.Z)(this.toDate(ri.end), this.toDate(ri.start));
        }
        diffInWeeks(ri) {
          return function _s(ho, uo, ri) {
            (0, O.Z)(2, arguments);
            var Yt = (0, Qo.Z)(ho, uo) / 7;
            return (0, Kr.u)(ri?.roundingMethod)(Yt);
          }(this.toDate(ri.end), this.toDate(ri.start));
        }
        diffInDays(ri) {
          return (0, Qo.Z)(this.toDate(ri.end), this.toDate(ri.start));
        }
        toDate(ri) {
          return new Date(ri);
        }
      }
      return ho.ɵfac = function () {
        let uo;
        return function (Yt) {
          return (uo || (uo = t.n5z(ho)))(Yt || ho);
        };
      }(), ho.ɵprov = t.Yz7({
        token: ho,
        factory: ho.ɵfac
      }), ho;
    })(),
    Js = (() => {
      class ho {}
      return ho.ɵfac = function (ri) {
        return new (ri || ho)();
      }, ho.ɵmod = t.oAB({
        type: ho
      }), ho.ɵinj = t.cJS({
        providers: [{
          provide: a.SW,
          useClass: rs
        }]
      }), ho;
    })();
});
