// Extracted from main; webpack module 90274. Factory, not an ES module.
(function (Ae) {
  Ae.exports = function () {
    "use strict";

    var V = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      t = /\d\d/,
      e = /\d\d?/,
      a = /\d*[^-_:/,()\s\d]+/,
      m = {},
      d = function (L) {
        return (L = +L) + (L > 68 ? 1900 : 2e3);
      },
      M = function (L) {
        return function (C) {
          this[L] = +C;
        };
      },
      b = [/[+-]\d\d:?(\d\d)?|Z/, function (L) {
        (this.zone || (this.zone = {})).offset = function (C) {
          if (!C || "Z" === C) return 0;
          var v = C.match(/([+-]|\d\d)/g),
            f = 60 * v[1] + (+v[2] || 0);
          return 0 === f ? 0 : "+" === v[0] ? -f : f;
        }(L);
      }],
      A = function (L) {
        var C = m[L];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      },
      N = function (L, C) {
        var v,
          f = m.meridiem;
        if (f) {
          for (var E = 1; E <= 24; E += 1) if (L.indexOf(f(E, 0, C)) > -1) {
            v = E > 12;
            break;
          }
        } else v = L === (C ? "pm" : "PM");
        return v;
      },
      I = {
        A: [a, function (L) {
          this.afternoon = N(L, !1);
        }],
        a: [a, function (L) {
          this.afternoon = N(L, !0);
        }],
        S: [/\d/, function (L) {
          this.milliseconds = 100 * +L;
        }],
        SS: [t, function (L) {
          this.milliseconds = 10 * +L;
        }],
        SSS: [/\d{3}/, function (L) {
          this.milliseconds = +L;
        }],
        s: [e, M("seconds")],
        ss: [e, M("seconds")],
        m: [e, M("minutes")],
        mm: [e, M("minutes")],
        H: [e, M("hours")],
        h: [e, M("hours")],
        HH: [e, M("hours")],
        hh: [e, M("hours")],
        D: [e, M("day")],
        DD: [t, M("day")],
        Do: [a, function (L) {
          var C = m.ordinal,
            v = L.match(/\d+/);
          if (this.day = v[0], C) for (var f = 1; f <= 31; f += 1) C(f).replace(/\[|\]/g, "") === L && (this.day = f);
        }],
        M: [e, M("month")],
        MM: [t, M("month")],
        MMM: [a, function (L) {
          var C = A("months"),
            v = (A("monthsShort") || C.map(function (f) {
              return f.slice(0, 3);
            })).indexOf(L) + 1;
          if (v < 1) throw new Error();
          this.month = v % 12 || v;
        }],
        MMMM: [a, function (L) {
          var C = A("months").indexOf(L) + 1;
          if (C < 1) throw new Error();
          this.month = C % 12 || C;
        }],
        Y: [/[+-]?\d+/, M("year")],
        YY: [t, function (L) {
          this.year = d(L);
        }],
        YYYY: [/\d{4}/, M("year")],
        Z: b,
        ZZ: b
      };
    return function (L, C, v) {
      v.p.customParseFormat = !0, L && L.parseTwoDigitYear && (d = L.parseTwoDigitYear);
      var f = C.prototype,
        E = f.parse;
      f.parse = function (h) {
        var x = h.date,
          u = h.utc,
          T = h.args;
        this.$u = u;
        var R = T[1];
        if ("string" == typeof R) {
          var B = !0 === T[2],
            y = !0 === T[3],
            j = B || y,
            W = T[2];
          y && (W = T[2]), m = this.$locale(), !B && W && (m = v.Ls[W]), this.$d = function (J, fe, ye) {
            try {
              if (["x", "X"].indexOf(fe) > -1) return new Date(("X" === fe ? 1e3 : 1) * J);
              var ae = function O(L) {
                  var v;
                  v = m && m.formats;
                  for (var f = (L = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (B, y, j) {
                      var W = j && j.toUpperCase();
                      return y || v[j] || V[j] || v[W].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (F, Le, ke) {
                        return Le || ke.slice(1);
                      });
                    })).match(i), E = f.length, h = 0; h < E; h += 1) {
                    var x = f[h],
                      u = I[x],
                      R = u && u[1];
                    f[h] = R ? {
                      regex: u && u[0],
                      parser: R
                    } : x.replace(/^\[|\]$/g, "");
                  }
                  return function (B) {
                    for (var y = {}, j = 0, W = 0; j < E; j += 1) {
                      var F = f[j];
                      if ("string" == typeof F) W += F.length;else {
                        var Le = F.regex,
                          ke = F.parser,
                          J = B.slice(W),
                          fe = Le.exec(J)[0];
                        ke.call(y, fe), B = B.replace(fe, "");
                      }
                    }
                    return function (ye) {
                      var ae = ye.afternoon;
                      if (void 0 !== ae) {
                        var Y = ye.hours;
                        ae ? Y < 12 && (ye.hours += 12) : 12 === Y && (ye.hours = 0), delete ye.afternoon;
                      }
                    }(y), y;
                  };
                }(fe)(J),
                Y = ae.year,
                G = ae.month,
                te = ae.day,
                pe = ae.hours,
                be = ae.minutes,
                le = ae.seconds,
                n = ae.milliseconds,
                Se = ae.zone,
                qe = new Date(),
                Rt = te || (Y || G ? 1 : qe.getDate()),
                We = Y || qe.getFullYear(),
                Re = 0;
              Y && !G || (Re = G > 0 ? G - 1 : qe.getMonth());
              var st = pe || 0,
                q = be || 0,
                mt = le || 0,
                ut = n || 0;
              return Se ? new Date(Date.UTC(We, Re, Rt, st, q, mt, ut + 60 * Se.offset * 1e3)) : ye ? new Date(Date.UTC(We, Re, Rt, st, q, mt, ut)) : new Date(We, Re, Rt, st, q, mt, ut);
            } catch {
              return new Date("");
            }
          }(x, R, u), this.init(), W && !0 !== W && (this.$L = this.locale(W).$L), j && x != this.format(R) && (this.$d = new Date("")), m = {};
        } else if (R instanceof Array) for (var F = R.length, Le = 1; Le <= F; Le += 1) {
          T[1] = R[Le - 1];
          var ke = v.apply(this, T);
          if (ke.isValid()) {
            this.$d = ke.$d, this.$L = ke.$L, this.init();
            break;
          }
          Le === F && (this.$d = new Date(""));
        } else E.call(this, h);
      };
    };
  }();
});
