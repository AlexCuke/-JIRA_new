// Extracted from main; webpack module 53037. Factory, not an ES module.
(() => {
  var Ae, V;
  V = Ae || (Ae = {}), function (i) {
    var t = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
      e = a(V);
    function a(m, d) {
      return function (M, b) {
        "function" != typeof m[M] && Object.defineProperty(m, M, {
          configurable: !0,
          writable: !0,
          value: b
        }), d && d(M, b);
      };
    }
    typeof t.Reflect > "u" ? t.Reflect = V : e = a(t.Reflect, e), function (i) {
      var t = Object.prototype.hasOwnProperty,
        e = "function" == typeof Symbol,
        a = e && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive",
        m = e && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator",
        d = "function" == typeof Object.create,
        M = {
          __proto__: []
        } instanceof Array,
        b = !d && !M,
        A = {
          create: d ? function () {
            return Mt(Object.create(null));
          } : M ? function () {
            return Mt({
              __proto__: null
            });
          } : function () {
            return Mt({});
          },
          has: b ? function (Je, Xt) {
            return t.call(Je, Xt);
          } : function (Je, Xt) {
            return Xt in Je;
          },
          get: b ? function (Je, Xt) {
            return t.call(Je, Xt) ? Je[Xt] : void 0;
          } : function (Je, Xt) {
            return Je[Xt];
          }
        },
        N = Object.getPrototypeOf(Function),
        I = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
        O = I || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function Ze() {
          var Je = {},
            Xt = [],
            Nn = function () {
              function co(Jo, fr, pt) {
                this._index = 0, this._keys = Jo, this._values = fr, this._selector = pt;
              }
              return co.prototype["@@iterator"] = function () {
                return this;
              }, co.prototype[m] = function () {
                return this;
              }, co.prototype.next = function () {
                var Jo = this._index;
                if (Jo >= 0 && Jo < this._keys.length) {
                  var fr = this._selector(this._keys[Jo], this._values[Jo]);
                  return Jo + 1 >= this._keys.length ? (this._index = -1, this._keys = Xt, this._values = Xt) : this._index++, {
                    value: fr,
                    done: !1
                  };
                }
                return {
                  value: void 0,
                  done: !0
                };
              }, co.prototype.throw = function (Jo) {
                throw this._index >= 0 && (this._index = -1, this._keys = Xt, this._values = Xt), Jo;
              }, co.prototype.return = function (Jo) {
                return this._index >= 0 && (this._index = -1, this._keys = Xt, this._values = Xt), {
                  value: Jo,
                  done: !0
                };
              }, co;
            }();
          return function () {
            function co() {
              this._keys = [], this._values = [], this._cacheKey = Je, this._cacheIndex = -2;
            }
            return Object.defineProperty(co.prototype, "size", {
              get: function () {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), co.prototype.has = function (Jo) {
              return this._find(Jo, !1) >= 0;
            }, co.prototype.get = function (Jo) {
              var fr = this._find(Jo, !1);
              return fr >= 0 ? this._values[fr] : void 0;
            }, co.prototype.set = function (Jo, fr) {
              var pt = this._find(Jo, !0);
              return this._values[pt] = fr, this;
            }, co.prototype.delete = function (Jo) {
              var fr = this._find(Jo, !1);
              if (fr >= 0) {
                for (var pt = this._keys.length, Dt = fr + 1; Dt < pt; Dt++) this._keys[Dt - 1] = this._keys[Dt], this._values[Dt - 1] = this._values[Dt];
                return this._keys.length--, this._values.length--, Jo === this._cacheKey && (this._cacheKey = Je, this._cacheIndex = -2), !0;
              }
              return !1;
            }, co.prototype.clear = function () {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = Je, this._cacheIndex = -2;
            }, co.prototype.keys = function () {
              return new Nn(this._keys, this._values, Pi);
            }, co.prototype.values = function () {
              return new Nn(this._keys, this._values, Ii);
            }, co.prototype.entries = function () {
              return new Nn(this._keys, this._values, yi);
            }, co.prototype["@@iterator"] = function () {
              return this.entries();
            }, co.prototype[m] = function () {
              return this.entries();
            }, co.prototype._find = function (Jo, fr) {
              return this._cacheKey !== Jo && (this._cacheIndex = this._keys.indexOf(this._cacheKey = Jo)), this._cacheIndex < 0 && fr && (this._cacheIndex = this._keys.length, this._keys.push(Jo), this._values.push(void 0)), this._cacheIndex;
            }, co;
          }();
          function Pi(co, Jo) {
            return co;
          }
          function Ii(co, Jo) {
            return Jo;
          }
          function yi(co, Jo) {
            return [co, Jo];
          }
        }() : Map,
        L = I || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function Ee() {
          return function () {
            function Je() {
              this._map = new O();
            }
            return Object.defineProperty(Je.prototype, "size", {
              get: function () {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), Je.prototype.has = function (Xt) {
              return this._map.has(Xt);
            }, Je.prototype.add = function (Xt) {
              return this._map.set(Xt, Xt), this;
            }, Je.prototype.delete = function (Xt) {
              return this._map.delete(Xt);
            }, Je.prototype.clear = function () {
              this._map.clear();
            }, Je.prototype.keys = function () {
              return this._map.keys();
            }, Je.prototype.values = function () {
              return this._map.values();
            }, Je.prototype.entries = function () {
              return this._map.entries();
            }, Je.prototype["@@iterator"] = function () {
              return this.keys();
            }, Je.prototype[m] = function () {
              return this.keys();
            }, Je;
          }();
        }() : Set,
        v = new (I || "function" != typeof WeakMap ? function je() {
          var Je = 16,
            Xt = A.create(),
            Nn = Pi();
          return function () {
            function fr() {
              this._key = Pi();
            }
            return fr.prototype.has = function (pt) {
              var Dt = Ii(pt, !1);
              return void 0 !== Dt && A.has(Dt, this._key);
            }, fr.prototype.get = function (pt) {
              var Dt = Ii(pt, !1);
              return void 0 !== Dt ? A.get(Dt, this._key) : void 0;
            }, fr.prototype.set = function (pt, Dt) {
              return Ii(pt, !0)[this._key] = Dt, this;
            }, fr.prototype.delete = function (pt) {
              var Dt = Ii(pt, !1);
              return void 0 !== Dt && delete Dt[this._key];
            }, fr.prototype.clear = function () {
              this._key = Pi();
            }, fr;
          }();
          function Pi() {
            var fr;
            do {
              fr = "@@WeakMap@@" + Jo();
            } while (A.has(Xt, fr));
            return Xt[fr] = !0, fr;
          }
          function Ii(fr, pt) {
            if (!t.call(fr, Nn)) {
              if (!pt) return;
              Object.defineProperty(fr, Nn, {
                value: A.create()
              });
            }
            return fr[Nn];
          }
          function yi(fr, pt) {
            for (var Dt = 0; Dt < pt; ++Dt) fr[Dt] = 255 * Math.random() | 0;
            return fr;
          }
          function Jo() {
            var fr = function co(fr) {
              return "function" == typeof Uint8Array ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(fr)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(fr)) : yi(new Uint8Array(fr), fr) : yi(new Array(fr), fr);
            }(Je);
            fr[6] = 79 & fr[6] | 64, fr[8] = 191 & fr[8] | 128;
            for (var pt = "", Dt = 0; Dt < Je; ++Dt) {
              var Ht = fr[Dt];
              (4 === Dt || 6 === Dt || 8 === Dt) && (pt += "-"), Ht < 16 && (pt += "0"), pt += Ht.toString(16).toLowerCase();
            }
            return pt;
          }
        }() : WeakMap)();
      function Le(Je, Xt, Nn) {
        var Pi = v.get(Je);
        if (pe(Pi)) {
          if (!Nn) return;
          Pi = new O(), v.set(Je, Pi);
        }
        var Ii = Pi.get(Xt);
        if (pe(Ii)) {
          if (!Nn) return;
          Ii = new O(), Pi.set(Xt, Ii);
        }
        return Ii;
      }
      function ke(Je, Xt, Nn) {
        if (J(Je, Xt, Nn)) return !0;
        var Ii = Ke(Xt);
        return !be(Ii) && ke(Je, Ii, Nn);
      }
      function J(Je, Xt, Nn) {
        var Pi = Le(Xt, Nn, !1);
        return !pe(Pi) && function Rt(Je) {
          return !!Je;
        }(Pi.has(Je));
      }
      function fe(Je, Xt, Nn) {
        if (J(Je, Xt, Nn)) return ye(Je, Xt, Nn);
        var Ii = Ke(Xt);
        return be(Ii) ? void 0 : fe(Je, Ii, Nn);
      }
      function ye(Je, Xt, Nn) {
        var Pi = Le(Xt, Nn, !1);
        if (!pe(Pi)) return Pi.get(Je);
      }
      function ae(Je, Xt, Nn, Pi) {
        Le(Nn, Pi, !0).set(Je, Xt);
      }
      function Y(Je, Xt) {
        var Nn = G(Je, Xt),
          Pi = Ke(Je);
        if (null === Pi) return Nn;
        var Ii = Y(Pi, Xt);
        if (Ii.length <= 0) return Nn;
        if (Nn.length <= 0) return Ii;
        for (var yi = new L(), co = [], Jo = 0, fr = Nn; Jo < fr.length; Jo++) yi.has(pt = fr[Jo]) || (yi.add(pt), co.push(pt));
        for (var Ht = 0, Dn = Ii; Ht < Dn.length; Ht++) {
          var pt;
          yi.has(pt = Dn[Ht]) || (yi.add(pt), co.push(pt));
        }
        return co;
      }
      function G(Je, Xt) {
        var Nn = [],
          Pi = Le(Je, Xt, !1);
        if (pe(Pi)) return Nn;
        for (var yi = function Ft(Je) {
            var Xt = Ct(Je, m);
            if (!q(Xt)) throw new TypeError();
            var Nn = Xt.call(Je);
            if (!n(Nn)) throw new TypeError();
            return Nn;
          }(Pi.keys()), co = 0;;) {
          var Jo = Ue(yi);
          if (!Jo) return Nn.length = co, Nn;
          var fr = Et(Jo);
          try {
            Nn[co] = fr;
          } catch (pt) {
            try {
              Me(yi);
            } finally {
              throw pt;
            }
          }
          co++;
        }
      }
      function te(Je) {
        if (null === Je) return 1;
        switch (typeof Je) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return null === Je ? 1 : 6;
          default:
            return 6;
        }
      }
      function pe(Je) {
        return void 0 === Je;
      }
      function be(Je) {
        return null === Je;
      }
      function n(Je) {
        return "object" == typeof Je ? null !== Je : "function" == typeof Je;
      }
      function Se(Je, Xt) {
        switch (te(Je)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return Je;
        }
        var Nn = 3 === Xt ? "string" : 5 === Xt ? "number" : "default",
          Pi = Ct(Je, a);
        if (void 0 !== Pi) {
          var Ii = Pi.call(Je, Nn);
          if (n(Ii)) throw new TypeError();
          return Ii;
        }
        return function qe(Je, Xt) {
          if ("string" === Xt) {
            var Nn = Je.toString;
            if (q(Nn) && !n(Pi = Nn.call(Je))) return Pi;
            if (q(Ii = Je.valueOf) && !n(Pi = Ii.call(Je))) return Pi;
          } else {
            var Ii;
            if (q(Ii = Je.valueOf) && !n(Pi = Ii.call(Je))) return Pi;
            var Pi,
              yi = Je.toString;
            if (q(yi) && !n(Pi = yi.call(Je))) return Pi;
          }
          throw new TypeError();
        }(Je, "default" === Nn ? "number" : Nn);
      }
      function Re(Je) {
        var Xt = Se(Je, 3);
        return function le(Je) {
          return "symbol" == typeof Je;
        }(Xt) ? Xt : function We(Je) {
          return "" + Je;
        }(Xt);
      }
      function st(Je) {
        return Array.isArray ? Array.isArray(Je) : Je instanceof Object ? Je instanceof Array : "[object Array]" === Object.prototype.toString.call(Je);
      }
      function q(Je) {
        return "function" == typeof Je;
      }
      function mt(Je) {
        return "function" == typeof Je;
      }
      function Ct(Je, Xt) {
        var Nn = Je[Xt];
        if (null != Nn) {
          if (!q(Nn)) throw new TypeError();
          return Nn;
        }
      }
      function Et(Je) {
        return Je.value;
      }
      function Ue(Je) {
        var Xt = Je.next();
        return !Xt.done && Xt;
      }
      function Me(Je) {
        var Xt = Je.return;
        Xt && Xt.call(Je);
      }
      function Ke(Je) {
        var Xt = Object.getPrototypeOf(Je);
        if ("function" != typeof Je || Je === N || Xt !== N) return Xt;
        var Nn = Je.prototype,
          Pi = Nn && Object.getPrototypeOf(Nn);
        if (null == Pi || Pi === Object.prototype) return Xt;
        var Ii = Pi.constructor;
        return "function" != typeof Ii || Ii === Je ? Xt : Ii;
      }
      function Mt(Je) {
        return Je.__ = void 0, delete Je.__, Je;
      }
      i("decorate", function f(Je, Xt, Nn, Pi) {
        if (pe(Nn)) {
          if (!st(Je)) throw new TypeError();
          if (!mt(Xt)) throw new TypeError();
          return function W(Je, Xt) {
            for (var Nn = Je.length - 1; Nn >= 0; --Nn) {
              var Ii = (0, Je[Nn])(Xt);
              if (!pe(Ii) && !be(Ii)) {
                if (!mt(Ii)) throw new TypeError();
                Xt = Ii;
              }
            }
            return Xt;
          }(Je, Xt);
        }
        if (!st(Je)) throw new TypeError();
        if (!n(Xt)) throw new TypeError();
        if (!n(Pi) && !pe(Pi) && !be(Pi)) throw new TypeError();
        return be(Pi) && (Pi = void 0), function F(Je, Xt, Nn, Pi) {
          for (var Ii = Je.length - 1; Ii >= 0; --Ii) {
            var co = (0, Je[Ii])(Xt, Nn, Pi);
            if (!pe(co) && !be(co)) {
              if (!n(co)) throw new TypeError();
              Pi = co;
            }
          }
          return Pi;
        }(Je, Xt, Nn = Re(Nn), Pi);
      }), i("metadata", function E(Je, Xt) {
        return function Nn(Pi, Ii) {
          if (!n(Pi)) throw new TypeError();
          if (!pe(Ii) && !function ut(Je) {
            switch (te(Je)) {
              case 3:
              case 4:
                return !0;
              default:
                return !1;
            }
          }(Ii)) throw new TypeError();
          ae(Je, Xt, Pi, Ii);
        };
      }), i("defineMetadata", function h(Je, Xt, Nn, Pi) {
        if (!n(Nn)) throw new TypeError();
        return pe(Pi) || (Pi = Re(Pi)), ae(Je, Xt, Nn, Pi);
      }), i("hasMetadata", function x(Je, Xt, Nn) {
        if (!n(Xt)) throw new TypeError();
        return pe(Nn) || (Nn = Re(Nn)), ke(Je, Xt, Nn);
      }), i("hasOwnMetadata", function u(Je, Xt, Nn) {
        if (!n(Xt)) throw new TypeError();
        return pe(Nn) || (Nn = Re(Nn)), J(Je, Xt, Nn);
      }), i("getMetadata", function T(Je, Xt, Nn) {
        if (!n(Xt)) throw new TypeError();
        return pe(Nn) || (Nn = Re(Nn)), fe(Je, Xt, Nn);
      }), i("getOwnMetadata", function R(Je, Xt, Nn) {
        if (!n(Xt)) throw new TypeError();
        return pe(Nn) || (Nn = Re(Nn)), ye(Je, Xt, Nn);
      }), i("getMetadataKeys", function B(Je, Xt) {
        if (!n(Je)) throw new TypeError();
        return pe(Xt) || (Xt = Re(Xt)), Y(Je, Xt);
      }), i("getOwnMetadataKeys", function y(Je, Xt) {
        if (!n(Je)) throw new TypeError();
        return pe(Xt) || (Xt = Re(Xt)), G(Je, Xt);
      }), i("deleteMetadata", function j(Je, Xt, Nn) {
        if (!n(Xt)) throw new TypeError();
        pe(Nn) || (Nn = Re(Nn));
        var Pi = Le(Xt, Nn, !1);
        if (pe(Pi) || !Pi.delete(Je)) return !1;
        if (Pi.size > 0) return !0;
        var Ii = v.get(Xt);
        return Ii.delete(Nn), Ii.size > 0 || v.delete(Xt), !0;
      });
    }(e);
  }();
});
