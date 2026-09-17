// Extracted from main; webpack module 71764. Factory, not an ES module.
(function (Ae) {
  Ae.exports = function () {
    "use strict";

    var i = 6e4,
      t = 36e5,
      e = "millisecond",
      a = "second",
      m = "minute",
      d = "hour",
      M = "day",
      b = "week",
      A = "month",
      N = "quarter",
      I = "year",
      O = "date",
      L = "Invalid Date",
      C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      f = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function (F) {
          var Le = ["th", "st", "nd", "rd"],
            ke = F % 100;
          return "[" + F + (Le[(ke - 20) % 10] || Le[ke] || Le[0]) + "]";
        }
      },
      E = function (F, Le, ke) {
        var J = String(F);
        return !J || J.length >= Le ? F : "" + Array(Le + 1 - J.length).join(ke) + F;
      },
      h = {
        s: E,
        z: function (F) {
          var Le = -F.utcOffset(),
            ke = Math.abs(Le),
            J = Math.floor(ke / 60),
            fe = ke % 60;
          return (Le <= 0 ? "+" : "-") + E(J, 2, "0") + ":" + E(fe, 2, "0");
        },
        m: function F(Le, ke) {
          if (Le.date() < ke.date()) return -F(ke, Le);
          var J = 12 * (ke.year() - Le.year()) + (ke.month() - Le.month()),
            fe = Le.clone().add(J, A),
            ye = ke - fe < 0,
            ae = Le.clone().add(J + (ye ? -1 : 1), A);
          return +(-(J + (ke - fe) / (ye ? fe - ae : ae - fe)) || 0);
        },
        a: function (F) {
          return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
        },
        p: function (F) {
          return {
            M: A,
            y: I,
            w: b,
            d: M,
            D: O,
            h: d,
            m,
            s: a,
            ms: e,
            Q: N
          }[F] || String(F || "").toLowerCase().replace(/s$/, "");
        },
        u: function (F) {
          return void 0 === F;
        }
      },
      x = "en",
      u = {};
    u[x] = f;
    var T = function (F) {
        return F instanceof j;
      },
      R = function F(Le, ke, J) {
        var fe;
        if (!Le) return x;
        if ("string" == typeof Le) {
          var ye = Le.toLowerCase();
          u[ye] && (fe = ye), ke && (u[ye] = ke, fe = ye);
          var ae = Le.split("-");
          if (!fe && ae.length > 1) return F(ae[0]);
        } else {
          var Y = Le.name;
          u[Y] = Le, fe = Y;
        }
        return !J && fe && (x = fe), fe || !J && x;
      },
      B = function (F, Le) {
        if (T(F)) return F.clone();
        var ke = "object" == typeof Le ? Le : {};
        return ke.date = F, ke.args = arguments, new j(ke);
      },
      y = h;
    y.l = R, y.i = T, y.w = function (F, Le) {
      return B(F, {
        locale: Le.$L,
        utc: Le.$u,
        x: Le.$x,
        $offset: Le.$offset
      });
    };
    var j = function () {
        function F(ke) {
          this.$L = R(ke.locale, null, !0), this.parse(ke);
        }
        var Le = F.prototype;
        return Le.parse = function (ke) {
          this.$d = function (J) {
            var fe = J.date,
              ye = J.utc;
            if (null === fe) return new Date(NaN);
            if (y.u(fe)) return new Date();
            if (fe instanceof Date) return new Date(fe);
            if ("string" == typeof fe && !/Z$/i.test(fe)) {
              var ae = fe.match(C);
              if (ae) {
                var Y = ae[2] - 1 || 0,
                  G = (ae[7] || "0").substring(0, 3);
                return ye ? new Date(Date.UTC(ae[1], Y, ae[3] || 1, ae[4] || 0, ae[5] || 0, ae[6] || 0, G)) : new Date(ae[1], Y, ae[3] || 1, ae[4] || 0, ae[5] || 0, ae[6] || 0, G);
              }
            }
            return new Date(fe);
          }(ke), this.$x = ke.x || {}, this.init();
        }, Le.init = function () {
          var ke = this.$d;
          this.$y = ke.getFullYear(), this.$M = ke.getMonth(), this.$D = ke.getDate(), this.$W = ke.getDay(), this.$H = ke.getHours(), this.$m = ke.getMinutes(), this.$s = ke.getSeconds(), this.$ms = ke.getMilliseconds();
        }, Le.$utils = function () {
          return y;
        }, Le.isValid = function () {
          return this.$d.toString() !== L;
        }, Le.isSame = function (ke, J) {
          var fe = B(ke);
          return this.startOf(J) <= fe && fe <= this.endOf(J);
        }, Le.isAfter = function (ke, J) {
          return B(ke) < this.startOf(J);
        }, Le.isBefore = function (ke, J) {
          return this.endOf(J) < B(ke);
        }, Le.$g = function (ke, J, fe) {
          return y.u(ke) ? this[J] : this.set(fe, ke);
        }, Le.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, Le.valueOf = function () {
          return this.$d.getTime();
        }, Le.startOf = function (ke, J) {
          var fe = this,
            ye = !!y.u(J) || J,
            ae = y.p(ke),
            Y = function (qe, Rt) {
              var We = y.w(fe.$u ? Date.UTC(fe.$y, Rt, qe) : new Date(fe.$y, Rt, qe), fe);
              return ye ? We : We.endOf(M);
            },
            G = function (qe, Rt) {
              return y.w(fe.toDate()[qe].apply(fe.toDate("s"), (ye ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Rt)), fe);
            },
            te = this.$W,
            pe = this.$M,
            be = this.$D,
            le = "set" + (this.$u ? "UTC" : "");
          switch (ae) {
            case I:
              return ye ? Y(1, 0) : Y(31, 11);
            case A:
              return ye ? Y(1, pe) : Y(0, pe + 1);
            case b:
              var n = this.$locale().weekStart || 0,
                Se = (te < n ? te + 7 : te) - n;
              return Y(ye ? be - Se : be + (6 - Se), pe);
            case M:
            case O:
              return G(le + "Hours", 0);
            case d:
              return G(le + "Minutes", 1);
            case m:
              return G(le + "Seconds", 2);
            case a:
              return G(le + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, Le.endOf = function (ke) {
          return this.startOf(ke, !1);
        }, Le.$set = function (ke, J) {
          var fe,
            ye = y.p(ke),
            ae = "set" + (this.$u ? "UTC" : ""),
            Y = (fe = {}, fe[M] = ae + "Date", fe[O] = ae + "Date", fe[A] = ae + "Month", fe[I] = ae + "FullYear", fe[d] = ae + "Hours", fe[m] = ae + "Minutes", fe[a] = ae + "Seconds", fe[e] = ae + "Milliseconds", fe)[ye],
            G = ye === M ? this.$D + (J - this.$W) : J;
          if (ye === A || ye === I) {
            var te = this.clone().set(O, 1);
            te.$d[Y](G), te.init(), this.$d = te.set(O, Math.min(this.$D, te.daysInMonth())).$d;
          } else Y && this.$d[Y](G);
          return this.init(), this;
        }, Le.set = function (ke, J) {
          return this.clone().$set(ke, J);
        }, Le.get = function (ke) {
          return this[y.p(ke)]();
        }, Le.add = function (ke, J) {
          var fe,
            ye = this;
          ke = Number(ke);
          var ae = y.p(J),
            Y = function (pe) {
              var be = B(ye);
              return y.w(be.date(be.date() + Math.round(pe * ke)), ye);
            };
          if (ae === A) return this.set(A, this.$M + ke);
          if (ae === I) return this.set(I, this.$y + ke);
          if (ae === M) return Y(1);
          if (ae === b) return Y(7);
          var G = (fe = {}, fe[m] = i, fe[d] = t, fe[a] = 1e3, fe)[ae] || 1,
            te = this.$d.getTime() + ke * G;
          return y.w(te, this);
        }, Le.subtract = function (ke, J) {
          return this.add(-1 * ke, J);
        }, Le.format = function (ke) {
          var J = this,
            fe = this.$locale();
          if (!this.isValid()) return fe.invalidDate || L;
          var ye = ke || "YYYY-MM-DDTHH:mm:ssZ",
            ae = y.z(this),
            Y = this.$H,
            G = this.$m,
            te = this.$M,
            pe = fe.weekdays,
            be = fe.months,
            n = function (Rt, We, Re, st) {
              return Rt && (Rt[We] || Rt(J, ye)) || Re[We].slice(0, st);
            },
            Se = function (Rt) {
              return y.s(Y % 12 || 12, Rt, "0");
            },
            qe = fe.meridiem || function (Rt, We, Re) {
              var st = Rt < 12 ? "AM" : "PM";
              return Re ? st.toLowerCase() : st;
            };
          return ye.replace(v, function (Rt, We) {
            return We || function (Re) {
              switch (Re) {
                case "YY":
                  return String(J.$y).slice(-2);
                case "YYYY":
                  return y.s(J.$y, 4, "0");
                case "M":
                  return te + 1;
                case "MM":
                  return y.s(te + 1, 2, "0");
                case "MMM":
                  return n(fe.monthsShort, te, be, 3);
                case "MMMM":
                  return n(be, te);
                case "D":
                  return J.$D;
                case "DD":
                  return y.s(J.$D, 2, "0");
                case "d":
                  return String(J.$W);
                case "dd":
                  return n(fe.weekdaysMin, J.$W, pe, 2);
                case "ddd":
                  return n(fe.weekdaysShort, J.$W, pe, 3);
                case "dddd":
                  return pe[J.$W];
                case "H":
                  return String(Y);
                case "HH":
                  return y.s(Y, 2, "0");
                case "h":
                  return Se(1);
                case "hh":
                  return Se(2);
                case "a":
                  return qe(Y, G, !0);
                case "A":
                  return qe(Y, G, !1);
                case "m":
                  return String(G);
                case "mm":
                  return y.s(G, 2, "0");
                case "s":
                  return String(J.$s);
                case "ss":
                  return y.s(J.$s, 2, "0");
                case "SSS":
                  return y.s(J.$ms, 3, "0");
                case "Z":
                  return ae;
              }
              return null;
            }(Rt) || ae.replace(":", "");
          });
        }, Le.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, Le.diff = function (ke, J, fe) {
          var ye,
            ae = this,
            Y = y.p(J),
            G = B(ke),
            te = (G.utcOffset() - this.utcOffset()) * i,
            pe = this - G,
            be = function () {
              return y.m(ae, G);
            };
          switch (Y) {
            case I:
              ye = be() / 12;
              break;
            case A:
              ye = be();
              break;
            case N:
              ye = be() / 3;
              break;
            case b:
              ye = (pe - te) / 6048e5;
              break;
            case M:
              ye = (pe - te) / 864e5;
              break;
            case d:
              ye = pe / t;
              break;
            case m:
              ye = pe / i;
              break;
            case a:
              ye = pe / 1e3;
              break;
            default:
              ye = pe;
          }
          return fe ? ye : y.a(ye);
        }, Le.daysInMonth = function () {
          return this.endOf(A).$D;
        }, Le.$locale = function () {
          return u[this.$L];
        }, Le.locale = function (ke, J) {
          if (!ke) return this.$L;
          var fe = this.clone(),
            ye = R(ke, J, !0);
          return ye && (fe.$L = ye), fe;
        }, Le.clone = function () {
          return y.w(this.$d, this);
        }, Le.toDate = function () {
          return new Date(this.valueOf());
        }, Le.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, Le.toISOString = function () {
          return this.$d.toISOString();
        }, Le.toString = function () {
          return this.$d.toUTCString();
        }, F;
      }(),
      W = j.prototype;
    return B.prototype = W, [["$ms", e], ["$s", a], ["$m", m], ["$H", d], ["$W", M], ["$M", A], ["$y", I], ["$D", O]].forEach(function (F) {
      W[F[1]] = function (Le) {
        return this.$g(Le, F[0], F[1]);
      };
    }), B.extend = function (F, Le) {
      return F.$i || (F(Le, j, B), F.$i = !0), B;
    }, B.locale = R, B.isDayjs = T, B.unix = function (F) {
      return B(1e3 * F);
    }, B.en = u[x], B.Ls = u, B.p = {}, B;
  }();
});
