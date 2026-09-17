// Extracted from main; webpack module 90896. Factory, not an ES module.
(Ae => {
  window, Ae.exports = function (V) {
    var i = {};
    function t(e) {
      if (i[e]) return i[e].exports;
      var a = i[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return V[e].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
    }
    return t.m = V, t.c = i, t.d = function (e, a, m) {
      t.o(e, a) || Object.defineProperty(e, a, {
        enumerable: !0,
        get: m
      });
    }, t.r = function (e) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, t.t = function (e, a) {
      if (1 & a && (e = t(e)), 8 & a || 4 & a && "object" == typeof e && e && e.__esModule) return e;
      var m = Object.create(null);
      if (t.r(m), Object.defineProperty(m, "default", {
        enumerable: !0,
        value: e
      }), 2 & a && "string" != typeof e) for (var d in e) t.d(m, d, function (M) {
        return e[M];
      }.bind(null, d));
      return m;
    }, t.n = function (e) {
      var a = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(a, "a", a), a;
    }, t.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }, t.p = "/", t(t.s = 90);
  }([function (V, i, t) {
    var e = t(68);
    V.exports = function (a, m, d) {
      return (m = e(m)) in a ? Object.defineProperty(a, m, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : a[m] = d, a;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    function t(e) {
      return V.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, V.exports.__esModule = !0, V.exports.default = V.exports, t(e);
    }
    V.exports = t, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(68);
    function a(m, d) {
      for (var M = 0; M < d.length; M++) {
        var b = d[M];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(m, e(b.key), b);
      }
    }
    V.exports = function (m, d, M) {
      return d && a(m.prototype, d), M && a(m, M), Object.defineProperty(m, "prototype", {
        writable: !1
      }), m;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(9).default,
      a = t(150);
    V.exports = function (m, d) {
      if (d && ("object" == e(d) || "function" == typeof d)) return d;
      if (void 0 !== d) throw new TypeError("Derived constructors may only return object or undefined");
      return a(m);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(38);
    V.exports = function (a, m) {
      if ("function" != typeof m && null !== m) throw new TypeError("Super expression must either be null or a function");
      a.prototype = Object.create(m && m.prototype, {
        constructor: {
          value: a,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(a, "prototype", {
        writable: !1
      }), m && e(a, m);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(146)();
    V.exports = e;
    try {
      regeneratorRuntime = e;
    } catch {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
    }
  }, function (V, i) {
    function t(e, a, m, d, M, b, A) {
      try {
        var N = e[b](A),
          I = N.value;
      } catch (O) {
        return void m(O);
      }
      N.done ? a(I) : Promise.resolve(I).then(d, M);
    }
    V.exports = function (e) {
      return function () {
        var a = this,
          m = arguments;
        return new Promise(function (d, M) {
          var b = e.apply(a, m);
          function A(I) {
            t(b, d, M, A, N, "next", I);
          }
          function N(I) {
            t(b, d, M, A, N, "throw", I);
          }
          A(void 0);
        });
      };
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(46),
      a = "object" == typeof self && self && self.Object === Object && self,
      m = e || a || Function("return this")();
    V.exports = m;
  }, function (V, i) {
    function t(e) {
      return V.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
        return typeof a;
      } : function (a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, V.exports.__esModule = !0, V.exports.default = V.exports, t(e);
    }
    V.exports = t, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  }, function (V, i) {
    V.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  }, function (V, i) {
    V.exports = Array.isArray;
  }, function (V, i, t) {
    var e = t(151);
    function a() {
      return V.exports = a = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function (m, d, M) {
        var b = e(m, d);
        if (b) {
          var A = Object.getOwnPropertyDescriptor(b, d);
          return A.get ? A.get.call(arguments.length < 3 ? m : M) : A.value;
        }
      }, V.exports.__esModule = !0, V.exports.default = V.exports, a.apply(null, arguments);
    }
    V.exports = a, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(102),
      a = t(108);
    V.exports = function (m, d) {
      var M = a(m, d);
      return e(M) ? M : void 0;
    };
  }, function (V, i, t) {
    var e = t(91),
      a = t(134)(function (m, d, M) {
        e(m, d, M);
      });
    V.exports = a;
  }, function (V, i, t) {
    var e = t(152),
      a = t(153),
      m = t(66),
      d = t(154);
    V.exports = function (M) {
      return e(M) || a(M) || m(M) || d();
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(19),
      a = t(104),
      m = t(105),
      d = e ? e.toStringTag : void 0;
    V.exports = function (M) {
      return null == M ? void 0 === M ? "[object Undefined]" : "[object Null]" : d && d in Object(M) ? a(M) : m(M);
    };
  }, function (V, i, t) {
    var e = t(60),
      a = t(29);
    V.exports = function (m, d, M, b) {
      var A = !M;
      M || (M = {});
      for (var N = -1, I = d.length; ++N < I;) {
        var O = d[N],
          L = b ? b(M[O], m[O], O, M, m) : void 0;
        void 0 === L && (L = m[O]), A ? a(M, O, L) : e(M, O, L);
      }
      return M;
    };
  }, function (V, i, t) {
    var e = t(8).Symbol;
    V.exports = e;
  }, function (V, i, t) {
    var e = t(61),
      a = t(132),
      m = t(26);
    V.exports = function (d) {
      return m(d) ? e(d, !0) : a(d);
    };
  }, function (V, i, t) {
    var e = t(92),
      a = t(93),
      m = t(94),
      d = t(95),
      M = t(96);
    function b(A) {
      var N = -1,
        I = null == A ? 0 : A.length;
      for (this.clear(); ++N < I;) {
        var O = A[N];
        this.set(O[0], O[1]);
      }
    }
    b.prototype.clear = e, b.prototype.delete = a, b.prototype.get = m, b.prototype.has = d, b.prototype.set = M, V.exports = b;
  }, function (V, i, t) {
    var e = t(23);
    V.exports = function (a, m) {
      for (var d = a.length; d--;) if (e(a[d][0], m)) return d;
      return -1;
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      return t === e || t != t && e != e;
    };
  }, function (V, i, t) {
    var e = t(14)(Object, "create");
    V.exports = e;
  }, function (V, i, t) {
    var e = t(117);
    V.exports = function (a, m) {
      var d = a.__data__;
      return e(m) ? d["string" == typeof m ? "string" : "hash"] : d.map;
    };
  }, function (V, i, t) {
    var e = t(28),
      a = t(56);
    V.exports = function (m) {
      return null != m && a(m.length) && !e(m);
    };
  }, function (V, i, t) {
    var e = t(14)(t(8), "Map");
    V.exports = e;
  }, function (V, i, t) {
    var e = t(17),
      a = t(10);
    V.exports = function (m) {
      if (!a(m)) return !1;
      var d = e(m);
      return "[object Function]" == d || "[object GeneratorFunction]" == d || "[object AsyncFunction]" == d || "[object Proxy]" == d;
    };
  }, function (V, i, t) {
    var e = t(50);
    V.exports = function (a, m, d) {
      "__proto__" == m && e ? e(a, m, {
        configurable: !0,
        enumerable: !0,
        value: d,
        writable: !0
      }) : a[m] = d;
    };
  }, function (V, i) {
    V.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  }, function (V, i, t) {
    var e = t(124);
    V.exports = function (a) {
      var m = new a.constructor(a.byteLength);
      return new e(m).set(new e(a)), m;
    };
  }, function (V, i, t) {
    var e = t(55)(Object.getPrototypeOf, Object);
    V.exports = e;
  }, function (V, i) {
    var t = Object.prototype;
    V.exports = function (e) {
      var a = e && e.constructor;
      return e === ("function" == typeof a && a.prototype || t);
    };
  }, function (V, i, t) {
    var e = t(126),
      a = t(11),
      m = Object.prototype,
      d = m.hasOwnProperty,
      M = m.propertyIsEnumerable,
      b = e(function () {
        return arguments;
      }()) ? e : function (A) {
        return a(A) && d.call(A, "callee") && !M.call(A, "callee");
      };
    V.exports = b;
  }, function (V, i, t) {
    (function (e) {
      var a = t(8),
        m = t(128),
        d = i && !i.nodeType && i,
        M = d && "object" == typeof e && e && !e.nodeType && e,
        b = M && M.exports === d ? a.Buffer : void 0;
      e.exports = (b ? b.isBuffer : void 0) || m;
    }).call(this, t(30)(V));
  }, function (V, i) {
    V.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  }, function (V, i, t) {
    (function (e) {
      var a = t(46),
        m = i && !i.nodeType && i,
        d = m && "object" == typeof e && e && !e.nodeType && e,
        M = d && d.exports === m && a.process,
        b = function () {
          try {
            return d && d.require && d.require("util").types || M && M.binding && M.binding("util");
          } catch {}
        }();
      e.exports = b;
    }).call(this, t(30)(V));
  }, function (V, i) {
    function t(e, a) {
      return V.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (m, d) {
        return m.__proto__ = d, m;
      }, V.exports.__esModule = !0, V.exports.default = V.exports, t(e, a);
    }
    V.exports = t, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(61),
      a = t(159),
      m = t(26);
    V.exports = function (d) {
      return m(d) ? e(d) : a(d);
    };
  }, function (V, i, t) {
    var e = t(163),
      a = t(75),
      m = Object.prototype.propertyIsEnumerable,
      d = Object.getOwnPropertySymbols;
    V.exports = d ? function (b) {
      return null == b ? [] : (b = Object(b), e(d(b), function (A) {
        return m.call(b, A);
      }));
    } : a;
  }, function (V, i) {
    V.exports = function (t, e) {
      for (var a = -1, m = e.length, d = t.length; ++a < m;) t[d + a] = e[a];
      return t;
    };
  }, function (V, i, t) {
    var e = t(166),
      a = t(27),
      m = t(167),
      d = t(168),
      M = t(169),
      b = t(17),
      A = t(47),
      N = A(e),
      I = A(a),
      O = A(m),
      L = A(d),
      C = A(M),
      v = b;
    (e && "[object DataView]" != v(new e(new ArrayBuffer(1))) || a && "[object Map]" != v(new a()) || m && "[object Promise]" != v(m.resolve()) || d && "[object Set]" != v(new d()) || M && "[object WeakMap]" != v(new M())) && (v = function (f) {
      var E = b(f),
        h = "[object Object]" == E ? f.constructor : void 0,
        x = h ? A(h) : "";
      if (x) switch (x) {
        case N:
          return "[object DataView]";
        case I:
          return "[object Map]";
        case O:
          return "[object Promise]";
        case L:
          return "[object Set]";
        case C:
          return "[object WeakMap]";
      }
      return E;
    }), V.exports = v;
  }, function (V, i, t) {
    var e = t(12),
      a = t(180),
      m = t(181),
      d = t(184);
    V.exports = function (M, b) {
      return e(M) ? M : a(M, b) ? [M] : m(d(M));
    };
  }, function (V, i, t) {
    var e = t(17),
      a = t(11);
    V.exports = function (m) {
      return "symbol" == typeof m || a(m) && "[object Symbol]" == e(m);
    };
  }, function (V, i, t) {
    var e = t(21),
      a = t(97),
      m = t(98),
      d = t(99),
      M = t(100),
      b = t(101);
    function A(N) {
      var I = this.__data__ = new e(N);
      this.size = I.size;
    }
    A.prototype.clear = a, A.prototype.delete = m, A.prototype.get = d, A.prototype.has = M, A.prototype.set = b, V.exports = A;
  }, function (V, i, t) {
    (function (e) {
      V.exports = "object" == typeof e && e && e.Object === Object && e;
    }).call(this, t(103));
  }, function (V, i) {
    var t = Function.prototype.toString;
    V.exports = function (e) {
      if (null != e) {
        try {
          return t.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    };
  }, function (V, i, t) {
    var e = t(109),
      a = t(116),
      m = t(118),
      d = t(119),
      M = t(120);
    function b(A) {
      var N = -1,
        I = null == A ? 0 : A.length;
      for (this.clear(); ++N < I;) {
        var O = A[N];
        this.set(O[0], O[1]);
      }
    }
    b.prototype.clear = e, b.prototype.delete = a, b.prototype.get = m, b.prototype.has = d, b.prototype.set = M, V.exports = b;
  }, function (V, i, t) {
    var e = t(29),
      a = t(23);
    V.exports = function (m, d, M) {
      (void 0 !== M && !a(m[d], M) || void 0 === M && !(d in m)) && e(m, d, M);
    };
  }, function (V, i, t) {
    var e = t(14),
      a = function () {
        try {
          var m = e(Object, "defineProperty");
          return m({}, "", {}), m;
        } catch {}
      }();
    V.exports = a;
  }, function (V, i, t) {
    (function (e) {
      var a = t(8),
        m = i && !i.nodeType && i,
        d = m && "object" == typeof e && e && !e.nodeType && e,
        M = d && d.exports === m ? a.Buffer : void 0,
        b = M ? M.allocUnsafe : void 0;
      e.exports = function (A, N) {
        if (N) return A.slice();
        var I = A.length,
          O = b ? b(I) : new A.constructor(I);
        return A.copy(O), O;
      };
    }).call(this, t(30)(V));
  }, function (V, i, t) {
    var e = t(31);
    V.exports = function (a, m) {
      var d = m ? e(a.buffer) : a.buffer;
      return new a.constructor(d, a.byteOffset, a.length);
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      var a = -1,
        m = t.length;
      for (e || (e = Array(m)); ++a < m;) e[a] = t[a];
      return e;
    };
  }, function (V, i, t) {
    var e = t(125),
      a = t(32),
      m = t(33);
    V.exports = function (d) {
      return "function" != typeof d.constructor || m(d) ? {} : e(a(d));
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      return function (a) {
        return t(e(a));
      };
    };
  }, function (V, i) {
    V.exports = function (t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
    };
  }, function (V, i, t) {
    var e = t(17),
      a = t(32),
      m = t(11),
      b = Function.prototype.toString,
      A = Object.prototype.hasOwnProperty,
      N = b.call(Object);
    V.exports = function (I) {
      if (!m(I) || "[object Object]" != e(I)) return !1;
      var O = a(I);
      if (null === O) return !0;
      var L = A.call(O, "constructor") && O.constructor;
      return "function" == typeof L && L instanceof L && b.call(L) == N;
    };
  }, function (V, i, t) {
    var e = t(129),
      a = t(36),
      m = t(37),
      d = m && m.isTypedArray,
      M = d ? a(d) : e;
    V.exports = M;
  }, function (V, i) {
    V.exports = function (t, e) {
      if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
    };
  }, function (V, i, t) {
    var e = t(29),
      a = t(23),
      m = Object.prototype.hasOwnProperty;
    V.exports = function (d, M, b) {
      var A = d[M];
      m.call(d, M) && a(A, b) && (void 0 !== b || M in d) || e(d, M, b);
    };
  }, function (V, i, t) {
    var e = t(131),
      a = t(34),
      m = t(12),
      d = t(35),
      M = t(62),
      b = t(58),
      A = Object.prototype.hasOwnProperty;
    V.exports = function (N, I) {
      var O = m(N),
        L = !O && a(N),
        C = !O && !L && d(N),
        v = !O && !L && !C && b(N),
        f = O || L || C || v,
        E = f ? e(N.length, String) : [],
        h = E.length;
      for (var x in N) !I && !A.call(N, x) || f && ("length" == x || C && ("offset" == x || "parent" == x) || v && ("buffer" == x || "byteLength" == x || "byteOffset" == x) || M(x, h)) || E.push(x);
      return E;
    };
  }, function (V, i) {
    var t = /^(?:0|[1-9]\d*)$/;
    V.exports = function (e, a) {
      var m = typeof e;
      return !!(a = a ?? 9007199254740991) && ("number" == m || "symbol" != m && t.test(e)) && e > -1 && e % 1 == 0 && e < a;
    };
  }, function (V, i) {
    V.exports = function (t) {
      return t;
    };
  }, function (V, i, t) {
    var e = t(136),
      a = Math.max;
    V.exports = function (m, d, M) {
      return d = a(void 0 === d ? m.length - 1 : d, 0), function () {
        for (var b = arguments, A = -1, N = a(b.length - d, 0), I = Array(N); ++A < N;) I[A] = b[d + A];
        A = -1;
        for (var O = Array(d + 1); ++A < d;) O[A] = b[A];
        return O[d] = M(I), e(m, this, O);
      };
    };
  }, function (V, i, t) {
    var e = t(137),
      a = t(139)(e);
    V.exports = a;
  }, function (V, i, t) {
    var e = t(67);
    V.exports = function (a, m) {
      if (a) {
        if ("string" == typeof a) return e(a, m);
        var d = {}.toString.call(a).slice(8, -1);
        return "Object" === d && a.constructor && (d = a.constructor.name), "Map" === d || "Set" === d ? Array.from(a) : "Arguments" === d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? e(a, m) : void 0;
      }
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var a = 0, m = Array(e); a < e; a++) m[a] = t[a];
      return m;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(9).default,
      a = t(145);
    V.exports = function (m) {
      var d = a(m, "string");
      return "symbol" == e(d) ? d : d + "";
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      this.v = t, this.k = e;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(71);
    function a() {
      var m,
        d,
        M = "function" == typeof Symbol ? Symbol : {},
        b = M.iterator || "@@iterator",
        A = M.toStringTag || "@@toStringTag";
      function N(h, x, u, T) {
        var B = Object.create((x && x.prototype instanceof O ? x : O).prototype);
        return e(B, "_invoke", function (y, j, W) {
          var F,
            Le,
            ke,
            J = 0,
            fe = W || [],
            ye = !1,
            ae = {
              p: 0,
              n: 0,
              v: m,
              a: Y,
              f: Y.bind(m, 4),
              d: function (G, te) {
                return F = G, Le = 0, ke = m, ae.n = te, I;
              }
            };
          function Y(G, te) {
            for (Le = G, ke = te, d = 0; !ye && J && !pe && d < fe.length; d++) {
              var pe,
                be = fe[d],
                le = ae.p,
                n = be[2];
              G > 3 ? (pe = n === te) && (ke = be[(Le = be[4]) ? 5 : (Le = 3, 3)], be[4] = be[5] = m) : be[0] <= le && ((pe = G < 2 && le < be[1]) ? (Le = 0, ae.v = te, ae.n = be[1]) : le < n && (pe = G < 3 || be[0] > te || te > n) && (be[4] = G, be[5] = te, ae.n = n, Le = 0));
            }
            if (pe || G > 1) return I;
            throw ye = !0, te;
          }
          return function (G, te, pe) {
            if (J > 1) throw TypeError("Generator is already running");
            for (ye && 1 === te && Y(te, pe), Le = te, ke = pe; (d = Le < 2 ? m : ke) || !ye;) {
              F || (Le ? Le < 3 ? (Le > 1 && (ae.n = -1), Y(Le, ke)) : ae.n = ke : ae.v = ke);
              try {
                if (J = 2, F) {
                  if (Le || (G = "next"), d = F[G]) {
                    if (!(d = d.call(F, ke))) throw TypeError("iterator result is not an object");
                    if (!d.done) return d;
                    ke = d.value, Le < 2 && (Le = 0);
                  } else 1 === Le && (d = F.return) && d.call(F), Le < 2 && (ke = TypeError("The iterator does not provide a '" + G + "' method"), Le = 1);
                  F = m;
                } else if ((d = (ye = ae.n < 0) ? ke : y.call(j, ae)) !== I) break;
              } catch (be) {
                F = m, Le = 1, ke = be;
              } finally {
                J = 1;
              }
            }
            return {
              value: d,
              done: ye
            };
          };
        }(h, u, T), !0), B;
      }
      var I = {};
      function O() {}
      function L() {}
      function C() {}
      d = Object.getPrototypeOf;
      var v = [][b] ? d(d([][b]())) : (e(d = {}, b, function () {
          return this;
        }), d),
        f = C.prototype = O.prototype = Object.create(v);
      function E(h) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(h, C) : (h.__proto__ = C, e(h, A, "GeneratorFunction")), h.prototype = Object.create(f), h;
      }
      return L.prototype = C, e(f, "constructor", C), e(C, "constructor", L), L.displayName = "GeneratorFunction", e(C, A, "GeneratorFunction"), e(f), e(f, A, "Generator"), e(f, b, function () {
        return this;
      }), e(f, "toString", function () {
        return "[object Generator]";
      }), (V.exports = a = function () {
        return {
          w: N,
          m: E
        };
      }, V.exports.__esModule = !0, V.exports.default = V.exports)();
    }
    V.exports = a, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    function t(e, a, m, d) {
      var M = Object.defineProperty;
      try {
        M({}, "", {});
      } catch {
        M = 0;
      }
      V.exports = t = function (b, A, N, I) {
        function O(L, C) {
          t(b, L, function (v) {
            return this._invoke(L, C, v);
          });
        }
        A ? M ? M(b, A, {
          value: N,
          enumerable: !I,
          configurable: !I,
          writable: !I
        }) : b[A] = N : (O("next", 0), O("throw", 1), O("return", 2));
      }, V.exports.__esModule = !0, V.exports.default = V.exports, t(e, a, m, d);
    }
    V.exports = t, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(70),
      a = t(73);
    V.exports = function (m, d, M, b, A) {
      return new a(e().w(m, d, M, b), A || Promise);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(69),
      a = t(71);
    V.exports = function m(d, M) {
      function b(N, I, O, L) {
        try {
          var C = d[N](I),
            v = C.value;
          return v instanceof e ? M.resolve(v.v).then(function (f) {
            b("next", f, O, L);
          }, function (f) {
            b("throw", f, O, L);
          }) : M.resolve(v).then(function (f) {
            C.value = f, O(C);
          }, function (f) {
            return b("throw", f, O, L);
          });
        } catch (f) {
          L(f);
        }
      }
      var A;
      this.next || (a(m.prototype), a(m.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
        return this;
      })), a(this, "_invoke", function (N, I, O) {
        function L() {
          return new M(function (C, v) {
            b(N, O, C, v);
          });
        }
        return A = A ? A.then(L, L) : L();
      }, !0);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      for (var a = -1, m = null == t ? 0 : t.length, d = Array(m); ++a < m;) d[a] = e(t[a], a, t);
      return d;
    };
  }, function (V, i) {
    V.exports = function () {
      return [];
    };
  }, function (V, i, t) {
    var e = t(41),
      a = t(32),
      m = t(40),
      d = t(75);
    V.exports = Object.getOwnPropertySymbols ? function (b) {
      for (var A = []; b;) e(A, m(b)), b = a(b);
      return A;
    } : d;
  }, function (V, i, t) {
    var e = t(41),
      a = t(12);
    V.exports = function (m, d, M) {
      var b = d(m);
      return a(m) ? b : e(b, M(m));
    };
  }, function (V, i, t) {
    var e = t(77),
      a = t(76),
      m = t(20);
    V.exports = function (d) {
      return e(d, m, a);
    };
  }, function (V, i, t) {
    var e = t(44);
    V.exports = function (a) {
      if ("string" == typeof a || e(a)) return a;
      var m = a + "";
      return "0" == m && 1 / a == -1 / 0 ? "-0" : m;
    };
  }, function (V, i, t) {
    var e = t(142),
      a = t(143),
      m = t(66),
      d = t(144);
    V.exports = function (M, b) {
      return e(M) || a(M, b) || m(M, b) || d();
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(155);
    V.exports = function (a, m) {
      if (null == a) return {};
      var d,
        M,
        b = e(a, m);
      if (Object.getOwnPropertySymbols) {
        var A = Object.getOwnPropertySymbols(a);
        for (M = 0; M < A.length; M++) -1 === m.indexOf(d = A[M]) && {}.propertyIsEnumerable.call(a, d) && (b[d] = a[d]);
      }
      return b;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(74),
      a = t(156),
      m = t(179),
      d = t(43),
      M = t(18),
      b = t(190),
      A = t(191),
      N = t(78),
      I = A(function (O, L) {
        var C = {};
        if (null == O) return C;
        var v = !1;
        L = e(L, function (E) {
          return E = d(E, O), v || (v = E.length > 1), E;
        }), M(O, N(O), C), v && (C = a(C, 7, b));
        for (var f = L.length; f--;) m(C, L[f]);
        return C;
      });
    V.exports = I;
  }, function (V, i, t) {
    var e = t(1),
      a = t(38),
      m = t(195),
      d = t(196);
    function M(b) {
      var A = "function" == typeof Map ? new Map() : void 0;
      return V.exports = M = function (N) {
        if (null === N || !m(N)) return N;
        if ("function" != typeof N) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== A) {
          if (A.has(N)) return A.get(N);
          A.set(N, I);
        }
        function I() {
          return d(N, arguments, e(this).constructor);
        }
        return I.prototype = Object.create(N.prototype, {
          constructor: {
            value: I,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), a(I, N);
      }, V.exports.__esModule = !0, V.exports.default = V.exports, M(b);
    }
    V.exports = M, V.exports.__esModule = !0, V.exports.default = V.exports;
  },,,,,,, function (V, i, t) {
    V.exports = t(198);
  }, function (V, i, t) {
    var e = t(45),
      a = t(49),
      m = t(121),
      d = t(123),
      M = t(10),
      b = t(20),
      A = t(59);
    V.exports = function N(I, O, L, C, v) {
      I !== O && m(O, function (f, E) {
        if (v || (v = new e()), M(f)) d(I, O, E, L, N, C, v);else {
          var h = C ? C(A(I, E), f, E + "", I, O, v) : void 0;
          void 0 === h && (h = f), a(I, E, h);
        }
      }, b);
    };
  }, function (V, i) {
    V.exports = function () {
      this.__data__ = [], this.size = 0;
    };
  }, function (V, i, t) {
    var e = t(22),
      a = Array.prototype.splice;
    V.exports = function (m) {
      var d = this.__data__,
        M = e(d, m);
      return !(M < 0 || (M == d.length - 1 ? d.pop() : a.call(d, M, 1), --this.size, 0));
    };
  }, function (V, i, t) {
    var e = t(22);
    V.exports = function (a) {
      var m = this.__data__,
        d = e(m, a);
      return d < 0 ? void 0 : m[d][1];
    };
  }, function (V, i, t) {
    var e = t(22);
    V.exports = function (a) {
      return e(this.__data__, a) > -1;
    };
  }, function (V, i, t) {
    var e = t(22);
    V.exports = function (a, m) {
      var d = this.__data__,
        M = e(d, a);
      return M < 0 ? (++this.size, d.push([a, m])) : d[M][1] = m, this;
    };
  }, function (V, i, t) {
    var e = t(21);
    V.exports = function () {
      this.__data__ = new e(), this.size = 0;
    };
  }, function (V, i) {
    V.exports = function (t) {
      var e = this.__data__,
        a = e.delete(t);
      return this.size = e.size, a;
    };
  }, function (V, i) {
    V.exports = function (t) {
      return this.__data__.get(t);
    };
  }, function (V, i) {
    V.exports = function (t) {
      return this.__data__.has(t);
    };
  }, function (V, i, t) {
    var e = t(21),
      a = t(27),
      m = t(48);
    V.exports = function (d, M) {
      var b = this.__data__;
      if (b instanceof e) {
        var A = b.__data__;
        if (!a || A.length < 199) return A.push([d, M]), this.size = ++b.size, this;
        b = this.__data__ = new m(A);
      }
      return b.set(d, M), this.size = b.size, this;
    };
  }, function (V, i, t) {
    var e = t(28),
      a = t(106),
      m = t(10),
      d = t(47),
      M = /^\[object .+?Constructor\]$/,
      O = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    V.exports = function (L) {
      return !(!m(L) || a(L)) && (e(L) ? O : M).test(d(L));
    };
  }, function (V, i) {
    var t;
    t = function () {
      return this;
    }();
    try {
      t = t || new Function("return this")();
    } catch {
      "object" == typeof window && (t = window);
    }
    V.exports = t;
  }, function (V, i, t) {
    var e = t(19),
      a = Object.prototype,
      m = a.hasOwnProperty,
      d = a.toString,
      M = e ? e.toStringTag : void 0;
    V.exports = function (b) {
      var A = m.call(b, M),
        N = b[M];
      try {
        b[M] = void 0;
        var I = !0;
      } catch {}
      var O = d.call(b);
      return I && (A ? b[M] = N : delete b[M]), O;
    };
  }, function (V, i) {
    var t = Object.prototype.toString;
    V.exports = function (e) {
      return t.call(e);
    };
  }, function (V, i, t) {
    var e,
      a = t(107),
      m = (e = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "";
    V.exports = function (d) {
      return !!m && m in d;
    };
  }, function (V, i, t) {
    var e = t(8)["__core-js_shared__"];
    V.exports = e;
  }, function (V, i) {
    V.exports = function (t, e) {
      return t?.[e];
    };
  }, function (V, i, t) {
    var e = t(110),
      a = t(21),
      m = t(27);
    V.exports = function () {
      this.size = 0, this.__data__ = {
        hash: new e(),
        map: new (m || a)(),
        string: new e()
      };
    };
  }, function (V, i, t) {
    var e = t(111),
      a = t(112),
      m = t(113),
      d = t(114),
      M = t(115);
    function b(A) {
      var N = -1,
        I = null == A ? 0 : A.length;
      for (this.clear(); ++N < I;) {
        var O = A[N];
        this.set(O[0], O[1]);
      }
    }
    b.prototype.clear = e, b.prototype.delete = a, b.prototype.get = m, b.prototype.has = d, b.prototype.set = M, V.exports = b;
  }, function (V, i, t) {
    var e = t(24);
    V.exports = function () {
      this.__data__ = e ? e(null) : {}, this.size = 0;
    };
  }, function (V, i) {
    V.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    };
  }, function (V, i, t) {
    var e = t(24),
      a = Object.prototype.hasOwnProperty;
    V.exports = function (m) {
      var d = this.__data__;
      if (e) {
        var M = d[m];
        return "__lodash_hash_undefined__" === M ? void 0 : M;
      }
      return a.call(d, m) ? d[m] : void 0;
    };
  }, function (V, i, t) {
    var e = t(24),
      a = Object.prototype.hasOwnProperty;
    V.exports = function (m) {
      var d = this.__data__;
      return e ? void 0 !== d[m] : a.call(d, m);
    };
  }, function (V, i, t) {
    var e = t(24);
    V.exports = function (a, m) {
      var d = this.__data__;
      return this.size += this.has(a) ? 0 : 1, d[a] = e && void 0 === m ? "__lodash_hash_undefined__" : m, this;
    };
  }, function (V, i, t) {
    var e = t(25);
    V.exports = function (a) {
      var m = e(this, a).delete(a);
      return this.size -= m ? 1 : 0, m;
    };
  }, function (V, i) {
    V.exports = function (t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    };
  }, function (V, i, t) {
    var e = t(25);
    V.exports = function (a) {
      return e(this, a).get(a);
    };
  }, function (V, i, t) {
    var e = t(25);
    V.exports = function (a) {
      return e(this, a).has(a);
    };
  }, function (V, i, t) {
    var e = t(25);
    V.exports = function (a, m) {
      var d = e(this, a),
        M = d.size;
      return d.set(a, m), this.size += d.size == M ? 0 : 1, this;
    };
  }, function (V, i, t) {
    var e = t(122)();
    V.exports = e;
  }, function (V, i) {
    V.exports = function (t) {
      return function (e, a, m) {
        for (var d = -1, M = Object(e), b = m(e), A = b.length; A--;) {
          var N = b[t ? A : ++d];
          if (!1 === a(M[N], N, M)) break;
        }
        return e;
      };
    };
  }, function (V, i, t) {
    var e = t(49),
      a = t(51),
      m = t(52),
      d = t(53),
      M = t(54),
      b = t(34),
      A = t(12),
      N = t(127),
      I = t(35),
      O = t(28),
      L = t(10),
      C = t(57),
      v = t(58),
      f = t(59),
      E = t(130);
    V.exports = function (h, x, u, T, R, B, y) {
      var j = f(h, u),
        W = f(x, u),
        F = y.get(W);
      if (F) e(h, u, F);else {
        var Le = B ? B(j, W, u + "", h, x, y) : void 0,
          ke = void 0 === Le;
        if (ke) {
          var J = A(W),
            fe = !J && I(W),
            ye = !J && !fe && v(W);
          Le = W, J || fe || ye ? A(j) ? Le = j : N(j) ? Le = d(j) : fe ? (ke = !1, Le = a(W, !0)) : ye ? (ke = !1, Le = m(W, !0)) : Le = [] : C(W) || b(W) ? (Le = j, b(j) ? Le = E(j) : L(j) && !O(j) || (Le = M(W))) : ke = !1;
        }
        ke && (y.set(W, Le), R(Le, W, T, B, y), y.delete(W)), e(h, u, Le);
      }
    };
  }, function (V, i, t) {
    var e = t(8).Uint8Array;
    V.exports = e;
  }, function (V, i, t) {
    var e = t(10),
      a = Object.create,
      m = function () {
        function d() {}
        return function (M) {
          if (!e(M)) return {};
          if (a) return a(M);
          d.prototype = M;
          var b = new d();
          return d.prototype = void 0, b;
        };
      }();
    V.exports = m;
  }, function (V, i, t) {
    var e = t(17),
      a = t(11);
    V.exports = function (m) {
      return a(m) && "[object Arguments]" == e(m);
    };
  }, function (V, i, t) {
    var e = t(26),
      a = t(11);
    V.exports = function (m) {
      return a(m) && e(m);
    };
  }, function (V, i) {
    V.exports = function () {
      return !1;
    };
  }, function (V, i, t) {
    var e = t(17),
      a = t(56),
      m = t(11),
      d = {};
    d["[object Float32Array]"] = d["[object Float64Array]"] = d["[object Int8Array]"] = d["[object Int16Array]"] = d["[object Int32Array]"] = d["[object Uint8Array]"] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d["[object Uint32Array]"] = !0, d["[object Arguments]"] = d["[object Array]"] = d["[object ArrayBuffer]"] = d["[object Boolean]"] = d["[object DataView]"] = d["[object Date]"] = d["[object Error]"] = d["[object Function]"] = d["[object Map]"] = d["[object Number]"] = d["[object Object]"] = d["[object RegExp]"] = d["[object Set]"] = d["[object String]"] = d["[object WeakMap]"] = !1, V.exports = function (M) {
      return m(M) && a(M.length) && !!d[e(M)];
    };
  }, function (V, i, t) {
    var e = t(18),
      a = t(20);
    V.exports = function (m) {
      return e(m, a(m));
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      for (var a = -1, m = Array(t); ++a < t;) m[a] = e(a);
      return m;
    };
  }, function (V, i, t) {
    var e = t(10),
      a = t(33),
      m = t(133),
      d = Object.prototype.hasOwnProperty;
    V.exports = function (M) {
      if (!e(M)) return m(M);
      var b = a(M),
        A = [];
      for (var N in M) ("constructor" != N || !b && d.call(M, N)) && A.push(N);
      return A;
    };
  }, function (V, i) {
    V.exports = function (t) {
      var e = [];
      if (null != t) for (var a in Object(t)) e.push(a);
      return e;
    };
  }, function (V, i, t) {
    var e = t(135),
      a = t(140);
    V.exports = function (m) {
      return e(function (d, M) {
        var b = -1,
          A = M.length,
          N = A > 1 ? M[A - 1] : void 0,
          I = A > 2 ? M[2] : void 0;
        for (N = m.length > 3 && "function" == typeof N ? (A--, N) : void 0, I && a(M[0], M[1], I) && (N = A < 3 ? void 0 : N, A = 1), d = Object(d); ++b < A;) {
          var O = M[b];
          O && m(d, O, b, N);
        }
        return d;
      });
    };
  }, function (V, i, t) {
    var e = t(63),
      a = t(64),
      m = t(65);
    V.exports = function (d, M) {
      return m(a(d, M, e), d + "");
    };
  }, function (V, i) {
    V.exports = function (t, e, a) {
      switch (a.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, a[0]);
        case 2:
          return t.call(e, a[0], a[1]);
        case 3:
          return t.call(e, a[0], a[1], a[2]);
      }
      return t.apply(e, a);
    };
  }, function (V, i, t) {
    var e = t(138),
      a = t(50),
      m = t(63);
    V.exports = a ? function (M, b) {
      return a(M, "toString", {
        configurable: !0,
        enumerable: !1,
        value: e(b),
        writable: !0
      });
    } : m;
  }, function (V, i) {
    V.exports = function (t) {
      return function () {
        return t;
      };
    };
  }, function (V, i) {
    var t = Date.now;
    V.exports = function (e) {
      var a = 0,
        m = 0;
      return function () {
        var d = t(),
          M = 16 - (d - m);
        if (m = d, M > 0) {
          if (++a >= 800) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
      };
    };
  }, function (V, i, t) {
    var e = t(23),
      a = t(26),
      m = t(62),
      d = t(10);
    V.exports = function (M, b, A) {
      if (!d(A)) return !1;
      var N = typeof b;
      return !!("number" == N ? a(A) && m(b, A.length) : "string" == N && b in A) && e(A[b], M);
    };
  }, function (V, i) {
    typeof window < "u" && (window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      window.setTimeout(t, 1e3 / 60);
    })), "function" != typeof Math.imul && (Math.imul = function (t, e) {
      var a = 65535 & t,
        m = 65535 & e;
      return a * m + ((t >>> 16 & 65535) * m + a * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    }), "function" != typeof Object.assign && (Object.assign = function (t) {
      "use strict";

      if (null === t) throw new TypeError("Cannot convert undefined or null to object");
      for (var e = Object(t), a = 1; a < arguments.length; a++) {
        var m = arguments[a];
        if (null !== m) for (var d in m) Object.prototype.hasOwnProperty.call(m, d) && (e[d] = m[d]);
      }
      return e;
    });
  }, function (V, i) {
    V.exports = function (t) {
      if (Array.isArray(t)) return t;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      var a = null == t ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (null != a) {
        var m,
          d,
          M,
          b,
          A = [],
          N = !0,
          I = !1;
        try {
          if (M = (a = a.call(t)).next, 0 === e) {
            if (Object(a) !== a) return;
            N = !1;
          } else for (; !(N = (m = M.call(a)).done) && (A.push(m.value), A.length !== e); N = !0);
        } catch (O) {
          I = !0, d = O;
        } finally {
          try {
            if (!N && null != a.return && (b = a.return(), Object(b) !== b)) return;
          } finally {
            if (I) throw d;
          }
        }
        return A;
      }
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(9).default;
    V.exports = function (a, m) {
      if ("object" != e(a) || !a) return a;
      var d = a[Symbol.toPrimitive];
      if (void 0 !== d) {
        var M = d.call(a, m || "default");
        if ("object" != e(M)) return M;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === m ? String : Number)(a);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(69),
      a = t(70),
      m = t(147),
      d = t(72),
      M = t(73),
      b = t(148),
      A = t(149);
    function N() {
      "use strict";

      var I = a(),
        O = I.m(N),
        L = (Object.getPrototypeOf ? Object.getPrototypeOf(O) : O.__proto__).constructor;
      function C(E) {
        var h = "function" == typeof E && E.constructor;
        return !!h && (h === L || "GeneratorFunction" === (h.displayName || h.name));
      }
      var v = {
        throw: 1,
        return: 2,
        break: 3,
        continue: 3
      };
      function f(E) {
        var h, x;
        return function (u) {
          h || (h = {
            stop: function () {
              return x(u.a, 2);
            },
            catch: function () {
              return u.v;
            },
            abrupt: function (T, R) {
              return x(u.a, v[T], R);
            },
            delegateYield: function (T, R, B) {
              return h.resultName = R, x(u.d, A(T), B);
            },
            finish: function (T) {
              return x(u.f, T);
            }
          }, x = function (T, R, B) {
            u.p = h.prev, u.n = h.next;
            try {
              return T(R, B);
            } finally {
              h.next = u.n;
            }
          }), h.resultName && (h[h.resultName] = u.v, h.resultName = void 0), h.sent = u.v, h.next = u.n;
          try {
            return E.call(this, h);
          } finally {
            u.p = h.prev, u.n = h.next;
          }
        };
      }
      return (V.exports = N = function () {
        return {
          wrap: function (E, h, x, u) {
            return I.w(f(E), h, x, u && u.reverse());
          },
          isGeneratorFunction: C,
          mark: I.m,
          awrap: function (E, h) {
            return new e(E, h);
          },
          AsyncIterator: M,
          async: function (E, h, x, u, T) {
            return (C(h) ? d : m)(f(E), h, x, u, T);
          },
          keys: b,
          values: A
        };
      }, V.exports.__esModule = !0, V.exports.default = V.exports)();
    }
    V.exports = N, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(72);
    V.exports = function (a, m, d, M, b) {
      var A = e(a, m, d, M, b);
      return A.next().then(function (N) {
        return N.done ? N.value : A.next();
      });
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t) {
      var e = Object(t),
        a = [];
      for (var m in e) a.unshift(m);
      return function d() {
        for (; a.length;) if ((m = a.pop()) in e) return d.value = m, d.done = !1, d;
        return d.done = !0, d;
      };
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(9).default;
    V.exports = function (a) {
      if (null != a) {
        var m = a["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
          d = 0;
        if (m) return m.call(a);
        if ("function" == typeof a.next) return a;
        if (!isNaN(a.length)) return {
          next: function () {
            return a && d >= a.length && (a = void 0), {
              value: a && a[d++],
              done: !a
            };
          }
        };
      }
      throw new TypeError(e(a) + " is not iterable");
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(1);
    V.exports = function (a, m) {
      for (; !{}.hasOwnProperty.call(a, m) && null !== (a = e(a)););
      return a;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(67);
    V.exports = function (a) {
      if (Array.isArray(a)) return e(a);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t) {
      if (typeof Symbol < "u" && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    V.exports = function (t, e) {
      if (null == t) return {};
      var a = {};
      for (var m in t) if ({}.hasOwnProperty.call(t, m)) {
        if (-1 !== e.indexOf(m)) continue;
        a[m] = t[m];
      }
      return a;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(45),
      a = t(157),
      m = t(60),
      d = t(158),
      M = t(161),
      b = t(51),
      A = t(53),
      N = t(162),
      I = t(164),
      O = t(165),
      L = t(78),
      C = t(42),
      v = t(170),
      f = t(171),
      E = t(54),
      h = t(12),
      x = t(35),
      u = t(175),
      T = t(10),
      R = t(177),
      B = t(39),
      y = t(20),
      j = {};
    j["[object Arguments]"] = j["[object Array]"] = j["[object ArrayBuffer]"] = j["[object DataView]"] = j["[object Boolean]"] = j["[object Date]"] = j["[object Float32Array]"] = j["[object Float64Array]"] = j["[object Int8Array]"] = j["[object Int16Array]"] = j["[object Int32Array]"] = j["[object Map]"] = j["[object Number]"] = j["[object Object]"] = j["[object RegExp]"] = j["[object Set]"] = j["[object String]"] = j["[object Symbol]"] = j["[object Uint8Array]"] = j["[object Uint8ClampedArray]"] = j["[object Uint16Array]"] = j["[object Uint32Array]"] = !0, j["[object Error]"] = j["[object Function]"] = j["[object WeakMap]"] = !1, V.exports = function W(F, Le, ke, J, fe, ye) {
      var ae,
        Y = 1 & Le,
        G = 2 & Le,
        te = 4 & Le;
      if (ke && (ae = fe ? ke(F, J, fe, ye) : ke(F)), void 0 !== ae) return ae;
      if (!T(F)) return F;
      var pe = h(F);
      if (pe) {
        if (ae = v(F), !Y) return A(F, ae);
      } else {
        var be = C(F),
          le = "[object Function]" == be || "[object GeneratorFunction]" == be;
        if (x(F)) return b(F, Y);
        if ("[object Object]" == be || "[object Arguments]" == be || le && !fe) {
          if (ae = G || le ? {} : E(F), !Y) return G ? I(F, M(ae, F)) : N(F, d(ae, F));
        } else {
          if (!j[be]) return fe ? F : {};
          ae = f(F, be, Y);
        }
      }
      ye || (ye = new e());
      var n = ye.get(F);
      if (n) return n;
      ye.set(F, ae), R(F) ? F.forEach(function (qe) {
        ae.add(W(qe, Le, ke, qe, F, ye));
      }) : u(F) && F.forEach(function (qe, Rt) {
        ae.set(Rt, W(qe, Le, ke, Rt, F, ye));
      });
      var Se = pe ? void 0 : (te ? G ? L : O : G ? y : B)(F);
      return a(Se || F, function (qe, Rt) {
        Se && (qe = F[Rt = qe]), m(ae, Rt, W(qe, Le, ke, Rt, F, ye));
      }), ae;
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      for (var a = -1, m = null == t ? 0 : t.length; ++a < m && !1 !== e(t[a], a, t););
      return t;
    };
  }, function (V, i, t) {
    var e = t(18),
      a = t(39);
    V.exports = function (m, d) {
      return m && e(d, a(d), m);
    };
  }, function (V, i, t) {
    var e = t(33),
      a = t(160),
      m = Object.prototype.hasOwnProperty;
    V.exports = function (d) {
      if (!e(d)) return a(d);
      var M = [];
      for (var b in Object(d)) m.call(d, b) && "constructor" != b && M.push(b);
      return M;
    };
  }, function (V, i, t) {
    var e = t(55)(Object.keys, Object);
    V.exports = e;
  }, function (V, i, t) {
    var e = t(18),
      a = t(20);
    V.exports = function (m, d) {
      return m && e(d, a(d), m);
    };
  }, function (V, i, t) {
    var e = t(18),
      a = t(40);
    V.exports = function (m, d) {
      return e(m, a(m), d);
    };
  }, function (V, i) {
    V.exports = function (t, e) {
      for (var a = -1, m = null == t ? 0 : t.length, d = 0, M = []; ++a < m;) {
        var b = t[a];
        e(b, a, t) && (M[d++] = b);
      }
      return M;
    };
  }, function (V, i, t) {
    var e = t(18),
      a = t(76);
    V.exports = function (m, d) {
      return e(m, a(m), d);
    };
  }, function (V, i, t) {
    var e = t(77),
      a = t(40),
      m = t(39);
    V.exports = function (d) {
      return e(d, m, a);
    };
  }, function (V, i, t) {
    var e = t(14)(t(8), "DataView");
    V.exports = e;
  }, function (V, i, t) {
    var e = t(14)(t(8), "Promise");
    V.exports = e;
  }, function (V, i, t) {
    var e = t(14)(t(8), "Set");
    V.exports = e;
  }, function (V, i, t) {
    var e = t(14)(t(8), "WeakMap");
    V.exports = e;
  }, function (V, i) {
    var t = Object.prototype.hasOwnProperty;
    V.exports = function (e) {
      var a = e.length,
        m = new e.constructor(a);
      return a && "string" == typeof e[0] && t.call(e, "index") && (m.index = e.index, m.input = e.input), m;
    };
  }, function (V, i, t) {
    var e = t(31),
      a = t(172),
      m = t(173),
      d = t(174),
      M = t(52);
    V.exports = function (b, A, N) {
      var I = b.constructor;
      switch (A) {
        case "[object ArrayBuffer]":
          return e(b);
        case "[object Boolean]":
        case "[object Date]":
          return new I(+b);
        case "[object DataView]":
          return a(b, N);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return M(b, N);
        case "[object Map]":
        case "[object Set]":
          return new I();
        case "[object Number]":
        case "[object String]":
          return new I(b);
        case "[object RegExp]":
          return m(b);
        case "[object Symbol]":
          return d(b);
      }
    };
  }, function (V, i, t) {
    var e = t(31);
    V.exports = function (a, m) {
      var d = m ? e(a.buffer) : a.buffer;
      return new a.constructor(d, a.byteOffset, a.byteLength);
    };
  }, function (V, i) {
    var t = /\w*$/;
    V.exports = function (e) {
      var a = new e.constructor(e.source, t.exec(e));
      return a.lastIndex = e.lastIndex, a;
    };
  }, function (V, i, t) {
    var e = t(19),
      a = e ? e.prototype : void 0,
      m = a ? a.valueOf : void 0;
    V.exports = function (d) {
      return m ? Object(m.call(d)) : {};
    };
  }, function (V, i, t) {
    var e = t(176),
      a = t(36),
      m = t(37),
      d = m && m.isMap,
      M = d ? a(d) : e;
    V.exports = M;
  }, function (V, i, t) {
    var e = t(42),
      a = t(11);
    V.exports = function (m) {
      return a(m) && "[object Map]" == e(m);
    };
  }, function (V, i, t) {
    var e = t(178),
      a = t(36),
      m = t(37),
      d = m && m.isSet,
      M = d ? a(d) : e;
    V.exports = M;
  }, function (V, i, t) {
    var e = t(42),
      a = t(11);
    V.exports = function (m) {
      return a(m) && "[object Set]" == e(m);
    };
  }, function (V, i, t) {
    var e = t(43),
      a = t(186),
      m = t(187),
      d = t(79);
    V.exports = function (M, b) {
      return b = e(b, M), null == (M = m(M, b)) || delete M[d(a(b))];
    };
  }, function (V, i, t) {
    var e = t(12),
      a = t(44),
      m = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      d = /^\w*$/;
    V.exports = function (M, b) {
      if (e(M)) return !1;
      var A = typeof M;
      return !("number" != A && "symbol" != A && "boolean" != A && null != M && !a(M)) || d.test(M) || !m.test(M) || null != b && M in Object(b);
    };
  }, function (V, i, t) {
    var e = t(182),
      a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      m = /\\(\\)?/g,
      d = e(function (M) {
        var b = [];
        return 46 === M.charCodeAt(0) && b.push(""), M.replace(a, function (A, N, I, O) {
          b.push(I ? O.replace(m, "$1") : N || A);
        }), b;
      });
    V.exports = d;
  }, function (V, i, t) {
    var e = t(183);
    V.exports = function (a) {
      var m = e(a, function (M) {
          return 500 === d.size && d.clear(), M;
        }),
        d = m.cache;
      return m;
    };
  }, function (V, i, t) {
    var e = t(48);
    function a(m, d) {
      if ("function" != typeof m || null != d && "function" != typeof d) throw new TypeError("Expected a function");
      var M = function () {
        var b = arguments,
          A = d ? d.apply(this, b) : b[0],
          N = M.cache;
        if (N.has(A)) return N.get(A);
        var I = m.apply(this, b);
        return M.cache = N.set(A, I) || N, I;
      };
      return M.cache = new (a.Cache || e)(), M;
    }
    a.Cache = e, V.exports = a;
  }, function (V, i, t) {
    var e = t(185);
    V.exports = function (a) {
      return null == a ? "" : e(a);
    };
  }, function (V, i, t) {
    var e = t(19),
      a = t(74),
      m = t(12),
      d = t(44),
      M = e ? e.prototype : void 0,
      b = M ? M.toString : void 0;
    V.exports = function A(N) {
      if ("string" == typeof N) return N;
      if (m(N)) return a(N, A) + "";
      if (d(N)) return b ? b.call(N) : "";
      var I = N + "";
      return "0" == I && 1 / N == -1 / 0 ? "-0" : I;
    };
  }, function (V, i) {
    V.exports = function (t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : void 0;
    };
  }, function (V, i, t) {
    var e = t(188),
      a = t(189);
    V.exports = function (m, d) {
      return d.length < 2 ? m : e(m, a(d, 0, -1));
    };
  }, function (V, i, t) {
    var e = t(43),
      a = t(79);
    V.exports = function (m, d) {
      for (var M = 0, b = (d = e(d, m)).length; null != m && M < b;) m = m[a(d[M++])];
      return M && M == b ? m : void 0;
    };
  }, function (V, i) {
    V.exports = function (t, e, a) {
      var m = -1,
        d = t.length;
      e < 0 && (e = -e > d ? 0 : d + e), (a = a > d ? d : a) < 0 && (a += d), d = e > a ? 0 : a - e >>> 0, e >>>= 0;
      for (var M = Array(d); ++m < d;) M[m] = t[m + e];
      return M;
    };
  }, function (V, i, t) {
    var e = t(57);
    V.exports = function (a) {
      return e(a) ? void 0 : a;
    };
  }, function (V, i, t) {
    var e = t(192),
      a = t(64),
      m = t(65);
    V.exports = function (d) {
      return m(a(d, void 0, e), d + "");
    };
  }, function (V, i, t) {
    var e = t(193);
    V.exports = function (a) {
      return null != a && a.length ? e(a, 1) : [];
    };
  }, function (V, i, t) {
    var e = t(41),
      a = t(194);
    V.exports = function m(d, M, b, A, N) {
      var I = -1,
        O = d.length;
      for (b || (b = a), N || (N = []); ++I < O;) {
        var L = d[I];
        M > 0 && b(L) ? M > 1 ? m(L, M - 1, b, A, N) : e(N, L) : A || (N[N.length] = L);
      }
      return N;
    };
  }, function (V, i, t) {
    var e = t(19),
      a = t(34),
      m = t(12),
      d = e ? e.isConcatSpreadable : void 0;
    V.exports = function (M) {
      return m(M) || a(M) || !!(d && M && M[d]);
    };
  }, function (V, i) {
    V.exports = function (t) {
      try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
      } catch {
        return "function" == typeof t;
      }
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    var e = t(197),
      a = t(38);
    V.exports = function (m, d, M) {
      if (e()) return Reflect.construct.apply(null, arguments);
      var b = [null];
      b.push.apply(b, d);
      var A = new (m.bind.apply(m, b))();
      return M && a(A, M.prototype), A;
    }, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i) {
    function t() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      } catch {}
      return (V.exports = t = function () {
        return !!e;
      }, V.exports.__esModule = !0, V.exports.default = V.exports)();
    }
    V.exports = t, V.exports.__esModule = !0, V.exports.default = V.exports;
  }, function (V, i, t) {
    "use strict";

    t.r(i), t.d(i, "BarcodeDecoder", function () {
      return wa;
    }), t.d(i, "Readers", function () {
      return d;
    }), t.d(i, "CameraAccess", function () {
      return Ea;
    }), t.d(i, "ImageDebug", function () {
      return Io;
    }), t.d(i, "ImageWrapper", function () {
      return $o;
    }), t.d(i, "ResultCollector", function () {
      return Ll;
    });
    var e = {};
    t.r(e), t.d(e, "create", function () {
      return R;
    }), t.d(e, "clone", function () {
      return B;
    }), t.d(e, "copy", function () {
      return y;
    }), t.d(e, "identity", function () {
      return j;
    }), t.d(e, "fromValues", function () {
      return W;
    }), t.d(e, "set", function () {
      return F;
    }), t.d(e, "transpose", function () {
      return Le;
    }), t.d(e, "invert", function () {
      return ke;
    }), t.d(e, "adjoint", function () {
      return J;
    }), t.d(e, "determinant", function () {
      return fe;
    }), t.d(e, "multiply", function () {
      return ye;
    }), t.d(e, "rotate", function () {
      return ae;
    }), t.d(e, "scale", function () {
      return Y;
    }), t.d(e, "fromRotation", function () {
      return G;
    }), t.d(e, "fromScaling", function () {
      return te;
    }), t.d(e, "str", function () {
      return pe;
    }), t.d(e, "frob", function () {
      return be;
    }), t.d(e, "LDU", function () {
      return le;
    }), t.d(e, "add", function () {
      return n;
    }), t.d(e, "subtract", function () {
      return Se;
    }), t.d(e, "exactEquals", function () {
      return qe;
    }), t.d(e, "equals", function () {
      return Rt;
    }), t.d(e, "multiplyScalar", function () {
      return We;
    }), t.d(e, "multiplyScalarAndAdd", function () {
      return Re;
    }), t.d(e, "mul", function () {
      return st;
    }), t.d(e, "sub", function () {
      return q;
    });
    var a = {};
    t.r(a), t.d(a, "create", function () {
      return mt;
    }), t.d(a, "clone", function () {
      return ut;
    }), t.d(a, "fromValues", function () {
      return Ct;
    }), t.d(a, "copy", function () {
      return Ft;
    }), t.d(a, "set", function () {
      return Et;
    }), t.d(a, "add", function () {
      return Ue;
    }), t.d(a, "subtract", function () {
      return Me;
    }), t.d(a, "multiply", function () {
      return Ke;
    }), t.d(a, "divide", function () {
      return Ze;
    }), t.d(a, "ceil", function () {
      return Ee;
    }), t.d(a, "floor", function () {
      return je;
    }), t.d(a, "min", function () {
      return Mt;
    }), t.d(a, "max", function () {
      return Je;
    }), t.d(a, "round", function () {
      return Xt;
    }), t.d(a, "scale", function () {
      return Nn;
    }), t.d(a, "scaleAndAdd", function () {
      return Pi;
    }), t.d(a, "distance", function () {
      return Ii;
    }), t.d(a, "squaredDistance", function () {
      return yi;
    }), t.d(a, "length", function () {
      return co;
    }), t.d(a, "squaredLength", function () {
      return Jo;
    }), t.d(a, "negate", function () {
      return fr;
    }), t.d(a, "inverse", function () {
      return pt;
    }), t.d(a, "normalize", function () {
      return Dt;
    }), t.d(a, "dot", function () {
      return Ht;
    }), t.d(a, "cross", function () {
      return Dn;
    }), t.d(a, "lerp", function () {
      return vt;
    }), t.d(a, "random", function () {
      return an;
    }), t.d(a, "transformMat2", function () {
      return li;
    }), t.d(a, "transformMat2d", function () {
      return zn;
    }), t.d(a, "transformMat3", function () {
      return $t;
    }), t.d(a, "transformMat4", function () {
      return Mn;
    }), t.d(a, "rotate", function () {
      return Qn;
    }), t.d(a, "angle", function () {
      return In;
    }), t.d(a, "signedAngle", function () {
      return ui;
    }), t.d(a, "zero", function () {
      return To;
    }), t.d(a, "str", function () {
      return bi;
    }), t.d(a, "exactEquals", function () {
      return qn;
    }), t.d(a, "equals", function () {
      return Xn;
    }), t.d(a, "len", function () {
      return Eo;
    }), t.d(a, "sub", function () {
      return Fo;
    }), t.d(a, "mul", function () {
      return br;
    }), t.d(a, "div", function () {
      return Pr;
    }), t.d(a, "dist", function () {
      return qo;
    }), t.d(a, "sqrDist", function () {
      return Yo;
    }), t.d(a, "sqrLen", function () {
      return wr;
    }), t.d(a, "forEach", function () {
      return oo;
    });
    var m = {};
    t.r(m), t.d(m, "create", function () {
      return Di;
    }), t.d(m, "clone", function () {
      return Ci;
    }), t.d(m, "length", function () {
      return lo;
    }), t.d(m, "fromValues", function () {
      return jo;
    }), t.d(m, "copy", function () {
      return Go;
    }), t.d(m, "set", function () {
      return ji;
    }), t.d(m, "add", function () {
      return ti;
    }), t.d(m, "subtract", function () {
      return fi;
    }), t.d(m, "multiply", function () {
      return Fi;
    }), t.d(m, "divide", function () {
      return Rn;
    }), t.d(m, "ceil", function () {
      return ki;
    }), t.d(m, "floor", function () {
      return Ei;
    }), t.d(m, "min", function () {
      return Wt;
    }), t.d(m, "max", function () {
      return Oi;
    }), t.d(m, "round", function () {
      return Ji;
    }), t.d(m, "scale", function () {
      return Ao;
    }), t.d(m, "scaleAndAdd", function () {
      return Sr;
    }), t.d(m, "distance", function () {
      return us;
    }), t.d(m, "squaredDistance", function () {
      return Ps;
    }), t.d(m, "squaredLength", function () {
      return hs;
    }), t.d(m, "negate", function () {
      return oi;
    }), t.d(m, "inverse", function () {
      return yo;
    }), t.d(m, "normalize", function () {
      return Qi;
    }), t.d(m, "dot", function () {
      return Qo;
    }), t.d(m, "cross", function () {
      return Kr;
    }), t.d(m, "lerp", function () {
      return _s;
    }), t.d(m, "slerp", function () {
      return ra;
    }), t.d(m, "hermite", function () {
      return Or;
    }), t.d(m, "bezier", function () {
      return Fs;
    }), t.d(m, "random", function () {
      return xa;
    }), t.d(m, "transformMat4", function () {
      return rs;
    }), t.d(m, "transformMat3", function () {
      return Js;
    }), t.d(m, "transformQuat", function () {
      return ho;
    }), t.d(m, "rotateX", function () {
      return uo;
    }), t.d(m, "rotateY", function () {
      return ri;
    }), t.d(m, "rotateZ", function () {
      return Yt;
    }), t.d(m, "angle", function () {
      return jt;
    }), t.d(m, "zero", function () {
      return hn;
    }), t.d(m, "str", function () {
      return tn;
    }), t.d(m, "exactEquals", function () {
      return di;
    }), t.d(m, "equals", function () {
      return Gn;
    }), t.d(m, "sub", function () {
      return dn;
    }), t.d(m, "mul", function () {
      return wo;
    }), t.d(m, "div", function () {
      return Ro;
    }), t.d(m, "dist", function () {
      return _r;
    }), t.d(m, "sqrDist", function () {
      return qr;
    }), t.d(m, "len", function () {
      return Ts;
    }), t.d(m, "sqrLen", function () {
      return js;
    }), t.d(m, "forEach", function () {
      return ws;
    });
    var d = {};
    t.r(d), t.d(d, "BarcodeReader", function () {
      return Mi;
    }), t.d(d, "TwoOfFiveReader", function () {
      return gt;
    }), t.d(d, "NewCodabarReader", function () {
      return vr;
    }), t.d(d, "Code128Reader", function () {
      return ks;
    }), t.d(d, "Code32Reader", function () {
      return as;
    }), t.d(d, "Code39Reader", function () {
      return ro;
    }), t.d(d, "Code39VINReader", function () {
      return dl;
    }), t.d(d, "Code93Reader", function () {
      return Si;
    }), t.d(d, "EAN2Reader", function () {
      return Hs;
    }), t.d(d, "EAN5Reader", function () {
      return Wi;
    }), t.d(d, "EAN8Reader", function () {
      return Ki;
    }), t.d(d, "EANReader", function () {
      return Xr;
    }), t.d(d, "I2of5Reader", function () {
      return oa;
    }), t.d(d, "PharmacodeReader", function () {
      return Wl;
    }), t.d(d, "UPCEReader", function () {
      return nu;
    }), t.d(d, "UPCReader", function () {
      return mu;
    });
    var M = t(9),
      b = t.n(M),
      A = t(15),
      N = t.n(A),
      I = (t(141), t(80)),
      O = t.n(I),
      L = t(2),
      C = t.n(L),
      v = t(3),
      f = t.n(v),
      E = t(0),
      h = t.n(E),
      x = typeof Float32Array < "u" ? Float32Array : Array,
      u = Math.random;
    function T(Ne) {
      return Ne >= 0 ? Math.round(Ne) : Ne % .5 == 0 ? Math.floor(Ne) : Math.round(Ne);
    }
    function R() {
      var Ne = new x(4);
      return x != Float32Array && (Ne[1] = 0, Ne[2] = 0), Ne[0] = 1, Ne[3] = 1, Ne;
    }
    function B(Ne) {
      var Qe = new x(4);
      return Qe[0] = Ne[0], Qe[1] = Ne[1], Qe[2] = Ne[2], Qe[3] = Ne[3], Qe;
    }
    function y(Ne, Qe) {
      return Ne[0] = Qe[0], Ne[1] = Qe[1], Ne[2] = Qe[2], Ne[3] = Qe[3], Ne;
    }
    function j(Ne) {
      return Ne[0] = 1, Ne[1] = 0, Ne[2] = 0, Ne[3] = 1, Ne;
    }
    function W(Ne, Qe, Q, se) {
      var re = new x(4);
      return re[0] = Ne, re[1] = Qe, re[2] = Q, re[3] = se, re;
    }
    function F(Ne, Qe, Q, se, re) {
      return Ne[0] = Qe, Ne[1] = Q, Ne[2] = se, Ne[3] = re, Ne;
    }
    function Le(Ne, Qe) {
      if (Ne === Qe) {
        var Q = Qe[1];
        Ne[1] = Qe[2], Ne[2] = Q;
      } else Ne[0] = Qe[0], Ne[1] = Qe[2], Ne[2] = Qe[1], Ne[3] = Qe[3];
      return Ne;
    }
    function ke(Ne, Qe) {
      var Q = Qe[0],
        se = Qe[1],
        re = Qe[2],
        Ce = Qe[3],
        Be = Q * Ce - re * se;
      return Be ? (Ne[0] = Ce * (Be = 1 / Be), Ne[1] = -se * Be, Ne[2] = -re * Be, Ne[3] = Q * Be, Ne) : null;
    }
    function J(Ne, Qe) {
      var Q = Qe[0];
      return Ne[0] = Qe[3], Ne[1] = -Qe[1], Ne[2] = -Qe[2], Ne[3] = Q, Ne;
    }
    function fe(Ne) {
      return Ne[0] * Ne[3] - Ne[2] * Ne[1];
    }
    function ye(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1],
        Ce = Qe[2],
        Be = Qe[3],
        dt = Q[0],
        Ot = Q[1],
        Qt = Q[2],
        Wn = Q[3];
      return Ne[0] = se * dt + Ce * Ot, Ne[1] = re * dt + Be * Ot, Ne[2] = se * Qt + Ce * Wn, Ne[3] = re * Qt + Be * Wn, Ne;
    }
    function ae(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1],
        Ce = Qe[2],
        Be = Qe[3],
        dt = Math.sin(Q),
        Ot = Math.cos(Q);
      return Ne[0] = se * Ot + Ce * dt, Ne[1] = re * Ot + Be * dt, Ne[2] = se * -dt + Ce * Ot, Ne[3] = re * -dt + Be * Ot, Ne;
    }
    function Y(Ne, Qe, Q) {
      var re = Qe[1],
        Ce = Qe[2],
        Be = Qe[3],
        dt = Q[0],
        Ot = Q[1];
      return Ne[0] = Qe[0] * dt, Ne[1] = re * dt, Ne[2] = Ce * Ot, Ne[3] = Be * Ot, Ne;
    }
    function G(Ne, Qe) {
      var Q = Math.sin(Qe),
        se = Math.cos(Qe);
      return Ne[0] = se, Ne[1] = Q, Ne[2] = -Q, Ne[3] = se, Ne;
    }
    function te(Ne, Qe) {
      return Ne[0] = Qe[0], Ne[1] = 0, Ne[2] = 0, Ne[3] = Qe[1], Ne;
    }
    function pe(Ne) {
      return "mat2(" + Ne[0] + ", " + Ne[1] + ", " + Ne[2] + ", " + Ne[3] + ")";
    }
    function be(Ne) {
      return Math.sqrt(Ne[0] * Ne[0] + Ne[1] * Ne[1] + Ne[2] * Ne[2] + Ne[3] * Ne[3]);
    }
    function le(Ne, Qe, Q, se) {
      return Ne[2] = se[2] / se[0], Q[0] = se[0], Q[1] = se[1], Q[3] = se[3] - Ne[2] * Q[1], [Ne, Qe, Q];
    }
    function n(Ne, Qe, Q) {
      return Ne[0] = Qe[0] + Q[0], Ne[1] = Qe[1] + Q[1], Ne[2] = Qe[2] + Q[2], Ne[3] = Qe[3] + Q[3], Ne;
    }
    function Se(Ne, Qe, Q) {
      return Ne[0] = Qe[0] - Q[0], Ne[1] = Qe[1] - Q[1], Ne[2] = Qe[2] - Q[2], Ne[3] = Qe[3] - Q[3], Ne;
    }
    function qe(Ne, Qe) {
      return Ne[0] === Qe[0] && Ne[1] === Qe[1] && Ne[2] === Qe[2] && Ne[3] === Qe[3];
    }
    function Rt(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Ne[2],
        Ce = Ne[3],
        Be = Qe[0],
        dt = Qe[1],
        Ot = Qe[2],
        Qt = Qe[3];
      return Math.abs(Q - Be) <= 1e-6 * Math.max(1, Math.abs(Q), Math.abs(Be)) && Math.abs(se - dt) <= 1e-6 * Math.max(1, Math.abs(se), Math.abs(dt)) && Math.abs(re - Ot) <= 1e-6 * Math.max(1, Math.abs(re), Math.abs(Ot)) && Math.abs(Ce - Qt) <= 1e-6 * Math.max(1, Math.abs(Ce), Math.abs(Qt));
    }
    function We(Ne, Qe, Q) {
      return Ne[0] = Qe[0] * Q, Ne[1] = Qe[1] * Q, Ne[2] = Qe[2] * Q, Ne[3] = Qe[3] * Q, Ne;
    }
    function Re(Ne, Qe, Q, se) {
      return Ne[0] = Qe[0] + Q[0] * se, Ne[1] = Qe[1] + Q[1] * se, Ne[2] = Qe[2] + Q[2] * se, Ne[3] = Qe[3] + Q[3] * se, Ne;
    }
    var st = ye,
      q = Se;
    function mt() {
      var Ne = new x(2);
      return x != Float32Array && (Ne[0] = 0, Ne[1] = 0), Ne;
    }
    function ut(Ne) {
      var Qe = new x(2);
      return Qe[0] = Ne[0], Qe[1] = Ne[1], Qe;
    }
    function Ct(Ne, Qe) {
      var Q = new x(2);
      return Q[0] = Ne, Q[1] = Qe, Q;
    }
    function Ft(Ne, Qe) {
      return Ne[0] = Qe[0], Ne[1] = Qe[1], Ne;
    }
    function Et(Ne, Qe, Q) {
      return Ne[0] = Qe, Ne[1] = Q, Ne;
    }
    function Ue(Ne, Qe, Q) {
      return Ne[0] = Qe[0] + Q[0], Ne[1] = Qe[1] + Q[1], Ne;
    }
    function Me(Ne, Qe, Q) {
      return Ne[0] = Qe[0] - Q[0], Ne[1] = Qe[1] - Q[1], Ne;
    }
    function Ke(Ne, Qe, Q) {
      return Ne[0] = Qe[0] * Q[0], Ne[1] = Qe[1] * Q[1], Ne;
    }
    function Ze(Ne, Qe, Q) {
      return Ne[0] = Qe[0] / Q[0], Ne[1] = Qe[1] / Q[1], Ne;
    }
    function Ee(Ne, Qe) {
      return Ne[0] = Math.ceil(Qe[0]), Ne[1] = Math.ceil(Qe[1]), Ne;
    }
    function je(Ne, Qe) {
      return Ne[0] = Math.floor(Qe[0]), Ne[1] = Math.floor(Qe[1]), Ne;
    }
    function Mt(Ne, Qe, Q) {
      return Ne[0] = Math.min(Qe[0], Q[0]), Ne[1] = Math.min(Qe[1], Q[1]), Ne;
    }
    function Je(Ne, Qe, Q) {
      return Ne[0] = Math.max(Qe[0], Q[0]), Ne[1] = Math.max(Qe[1], Q[1]), Ne;
    }
    function Xt(Ne, Qe) {
      return Ne[0] = T(Qe[0]), Ne[1] = T(Qe[1]), Ne;
    }
    function Nn(Ne, Qe, Q) {
      return Ne[0] = Qe[0] * Q, Ne[1] = Qe[1] * Q, Ne;
    }
    function Pi(Ne, Qe, Q, se) {
      return Ne[0] = Qe[0] + Q[0] * se, Ne[1] = Qe[1] + Q[1] * se, Ne;
    }
    function Ii(Ne, Qe) {
      var Q = Qe[0] - Ne[0],
        se = Qe[1] - Ne[1];
      return Math.sqrt(Q * Q + se * se);
    }
    function yi(Ne, Qe) {
      var Q = Qe[0] - Ne[0],
        se = Qe[1] - Ne[1];
      return Q * Q + se * se;
    }
    function co(Ne) {
      var Qe = Ne[0],
        Q = Ne[1];
      return Math.sqrt(Qe * Qe + Q * Q);
    }
    function Jo(Ne) {
      var Qe = Ne[0],
        Q = Ne[1];
      return Qe * Qe + Q * Q;
    }
    function fr(Ne, Qe) {
      return Ne[0] = -Qe[0], Ne[1] = -Qe[1], Ne;
    }
    function pt(Ne, Qe) {
      return Ne[0] = 1 / Qe[0], Ne[1] = 1 / Qe[1], Ne;
    }
    function Dt(Ne, Qe) {
      var Q = Qe[0],
        se = Qe[1],
        re = Q * Q + se * se;
      return re > 0 && (re = 1 / Math.sqrt(re)), Ne[0] = Qe[0] * re, Ne[1] = Qe[1] * re, Ne;
    }
    function Ht(Ne, Qe) {
      return Ne[0] * Qe[0] + Ne[1] * Qe[1];
    }
    function Dn(Ne, Qe, Q) {
      var se = Qe[0] * Q[1] - Qe[1] * Q[0];
      return Ne[0] = Ne[1] = 0, Ne[2] = se, Ne;
    }
    function vt(Ne, Qe, Q, se) {
      var re = Qe[0],
        Ce = Qe[1];
      return Ne[0] = re + se * (Q[0] - re), Ne[1] = Ce + se * (Q[1] - Ce), Ne;
    }
    function an(Ne, Qe) {
      Qe = void 0 === Qe ? 1 : Qe;
      var Q = 2 * u() * Math.PI;
      return Ne[0] = Math.cos(Q) * Qe, Ne[1] = Math.sin(Q) * Qe, Ne;
    }
    function li(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1];
      return Ne[0] = Q[0] * se + Q[2] * re, Ne[1] = Q[1] * se + Q[3] * re, Ne;
    }
    function zn(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1];
      return Ne[0] = Q[0] * se + Q[2] * re + Q[4], Ne[1] = Q[1] * se + Q[3] * re + Q[5], Ne;
    }
    function $t(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1];
      return Ne[0] = Q[0] * se + Q[3] * re + Q[6], Ne[1] = Q[1] * se + Q[4] * re + Q[7], Ne;
    }
    function Mn(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1];
      return Ne[0] = Q[0] * se + Q[4] * re + Q[12], Ne[1] = Q[1] * se + Q[5] * re + Q[13], Ne;
    }
    function Qn(Ne, Qe, Q, se) {
      var re = Qe[0] - Q[0],
        Ce = Qe[1] - Q[1],
        Be = Math.sin(se),
        dt = Math.cos(se);
      return Ne[0] = re * dt - Ce * Be + Q[0], Ne[1] = re * Be + Ce * dt + Q[1], Ne;
    }
    function In(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Qe[0],
        Ce = Qe[1];
      return Math.abs(Math.atan2(se * re - Q * Ce, Q * re + se * Ce));
    }
    function ui(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Qe[0],
        Ce = Qe[1];
      return Math.atan2(Q * Ce - se * re, Q * re + se * Ce);
    }
    function To(Ne) {
      return Ne[0] = 0, Ne[1] = 0, Ne;
    }
    function bi(Ne) {
      return "vec2(" + Ne[0] + ", " + Ne[1] + ")";
    }
    function qn(Ne, Qe) {
      return Ne[0] === Qe[0] && Ne[1] === Qe[1];
    }
    function Xn(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Qe[0],
        Ce = Qe[1];
      return Math.abs(Q - re) <= 1e-6 * Math.max(1, Math.abs(Q), Math.abs(re)) && Math.abs(se - Ce) <= 1e-6 * Math.max(1, Math.abs(se), Math.abs(Ce));
    }
    var Yi,
      Eo = co,
      Fo = Me,
      br = Ke,
      Pr = Ze,
      qo = Ii,
      Yo = yi,
      wr = Jo,
      oo = (Yi = mt(), function (Ne, Qe, Q, se, re, Ce) {
        var Be, dt;
        for (Qe || (Qe = 2), Q || (Q = 0), dt = se ? Math.min(se * Qe + Q, Ne.length) : Ne.length, Be = Q; Be < dt; Be += Qe) Yi[0] = Ne[Be], Yi[1] = Ne[Be + 1], re(Yi, Yi, Ce), Ne[Be] = Yi[0], Ne[Be + 1] = Yi[1];
        return Ne;
      });
    function Di() {
      var Ne = new x(3);
      return x != Float32Array && (Ne[0] = 0, Ne[1] = 0, Ne[2] = 0), Ne;
    }
    function Ci(Ne) {
      var Qe = new x(3);
      return Qe[0] = Ne[0], Qe[1] = Ne[1], Qe[2] = Ne[2], Qe;
    }
    function lo(Ne) {
      var Qe = Ne[0],
        Q = Ne[1],
        se = Ne[2];
      return Math.sqrt(Qe * Qe + Q * Q + se * se);
    }
    function jo(Ne, Qe, Q) {
      var se = new x(3);
      return se[0] = Ne, se[1] = Qe, se[2] = Q, se;
    }
    function Go(Ne, Qe) {
      return Ne[0] = Qe[0], Ne[1] = Qe[1], Ne[2] = Qe[2], Ne;
    }
    function ji(Ne, Qe, Q, se) {
      return Ne[0] = Qe, Ne[1] = Q, Ne[2] = se, Ne;
    }
    function ti(Ne, Qe, Q) {
      return Ne[0] = Qe[0] + Q[0], Ne[1] = Qe[1] + Q[1], Ne[2] = Qe[2] + Q[2], Ne;
    }
    function fi(Ne, Qe, Q) {
      return Ne[0] = Qe[0] - Q[0], Ne[1] = Qe[1] - Q[1], Ne[2] = Qe[2] - Q[2], Ne;
    }
    function Fi(Ne, Qe, Q) {
      return Ne[0] = Qe[0] * Q[0], Ne[1] = Qe[1] * Q[1], Ne[2] = Qe[2] * Q[2], Ne;
    }
    function Rn(Ne, Qe, Q) {
      return Ne[0] = Qe[0] / Q[0], Ne[1] = Qe[1] / Q[1], Ne[2] = Qe[2] / Q[2], Ne;
    }
    function ki(Ne, Qe) {
      return Ne[0] = Math.ceil(Qe[0]), Ne[1] = Math.ceil(Qe[1]), Ne[2] = Math.ceil(Qe[2]), Ne;
    }
    function Ei(Ne, Qe) {
      return Ne[0] = Math.floor(Qe[0]), Ne[1] = Math.floor(Qe[1]), Ne[2] = Math.floor(Qe[2]), Ne;
    }
    function Wt(Ne, Qe, Q) {
      return Ne[0] = Math.min(Qe[0], Q[0]), Ne[1] = Math.min(Qe[1], Q[1]), Ne[2] = Math.min(Qe[2], Q[2]), Ne;
    }
    function Oi(Ne, Qe, Q) {
      return Ne[0] = Math.max(Qe[0], Q[0]), Ne[1] = Math.max(Qe[1], Q[1]), Ne[2] = Math.max(Qe[2], Q[2]), Ne;
    }
    function Ji(Ne, Qe) {
      return Ne[0] = T(Qe[0]), Ne[1] = T(Qe[1]), Ne[2] = T(Qe[2]), Ne;
    }
    function Ao(Ne, Qe, Q) {
      return Ne[0] = Qe[0] * Q, Ne[1] = Qe[1] * Q, Ne[2] = Qe[2] * Q, Ne;
    }
    function Sr(Ne, Qe, Q, se) {
      return Ne[0] = Qe[0] + Q[0] * se, Ne[1] = Qe[1] + Q[1] * se, Ne[2] = Qe[2] + Q[2] * se, Ne;
    }
    function us(Ne, Qe) {
      var Q = Qe[0] - Ne[0],
        se = Qe[1] - Ne[1],
        re = Qe[2] - Ne[2];
      return Math.sqrt(Q * Q + se * se + re * re);
    }
    function Ps(Ne, Qe) {
      var Q = Qe[0] - Ne[0],
        se = Qe[1] - Ne[1],
        re = Qe[2] - Ne[2];
      return Q * Q + se * se + re * re;
    }
    function hs(Ne) {
      var Qe = Ne[0],
        Q = Ne[1],
        se = Ne[2];
      return Qe * Qe + Q * Q + se * se;
    }
    function oi(Ne, Qe) {
      return Ne[0] = -Qe[0], Ne[1] = -Qe[1], Ne[2] = -Qe[2], Ne;
    }
    function yo(Ne, Qe) {
      return Ne[0] = 1 / Qe[0], Ne[1] = 1 / Qe[1], Ne[2] = 1 / Qe[2], Ne;
    }
    function Qi(Ne, Qe) {
      var Q = Qe[0],
        se = Qe[1],
        re = Qe[2],
        Ce = Q * Q + se * se + re * re;
      return Ce > 0 && (Ce = 1 / Math.sqrt(Ce)), Ne[0] = Qe[0] * Ce, Ne[1] = Qe[1] * Ce, Ne[2] = Qe[2] * Ce, Ne;
    }
    function Qo(Ne, Qe) {
      return Ne[0] * Qe[0] + Ne[1] * Qe[1] + Ne[2] * Qe[2];
    }
    function Kr(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1],
        Ce = Qe[2],
        Be = Q[0],
        dt = Q[1],
        Ot = Q[2];
      return Ne[0] = re * Ot - Ce * dt, Ne[1] = Ce * Be - se * Ot, Ne[2] = se * dt - re * Be, Ne;
    }
    function _s(Ne, Qe, Q, se) {
      var re = Qe[0],
        Ce = Qe[1],
        Be = Qe[2];
      return Ne[0] = re + se * (Q[0] - re), Ne[1] = Ce + se * (Q[1] - Ce), Ne[2] = Be + se * (Q[2] - Be), Ne;
    }
    function ra(Ne, Qe, Q, se) {
      var re = Math.acos(Math.min(Math.max(Qo(Qe, Q), -1), 1)),
        Ce = Math.sin(re),
        Be = Math.sin((1 - se) * re) / Ce,
        dt = Math.sin(se * re) / Ce;
      return Ne[0] = Be * Qe[0] + dt * Q[0], Ne[1] = Be * Qe[1] + dt * Q[1], Ne[2] = Be * Qe[2] + dt * Q[2], Ne;
    }
    function Or(Ne, Qe, Q, se, re, Ce) {
      var Be = Ce * Ce,
        dt = Be * (2 * Ce - 3) + 1,
        Ot = Be * (Ce - 2) + Ce,
        Qt = Be * (Ce - 1),
        Wn = Be * (3 - 2 * Ce);
      return Ne[0] = Qe[0] * dt + Q[0] * Ot + se[0] * Qt + re[0] * Wn, Ne[1] = Qe[1] * dt + Q[1] * Ot + se[1] * Qt + re[1] * Wn, Ne[2] = Qe[2] * dt + Q[2] * Ot + se[2] * Qt + re[2] * Wn, Ne;
    }
    function Fs(Ne, Qe, Q, se, re, Ce) {
      var Be = 1 - Ce,
        dt = Be * Be,
        Ot = Ce * Ce,
        Qt = dt * Be,
        Wn = 3 * Ce * dt,
        Ui = 3 * Ot * Be,
        eo = Ot * Ce;
      return Ne[0] = Qe[0] * Qt + Q[0] * Wn + se[0] * Ui + re[0] * eo, Ne[1] = Qe[1] * Qt + Q[1] * Wn + se[1] * Ui + re[1] * eo, Ne[2] = Qe[2] * Qt + Q[2] * Wn + se[2] * Ui + re[2] * eo, Ne;
    }
    function xa(Ne, Qe) {
      Qe = void 0 === Qe ? 1 : Qe;
      var Q = 2 * u() * Math.PI,
        se = 2 * u() - 1,
        re = Math.sqrt(1 - se * se) * Qe;
      return Ne[0] = Math.cos(Q) * re, Ne[1] = Math.sin(Q) * re, Ne[2] = se * Qe, Ne;
    }
    function rs(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1],
        Ce = Qe[2],
        Be = Q[3] * se + Q[7] * re + Q[11] * Ce + Q[15];
      return Ne[0] = (Q[0] * se + Q[4] * re + Q[8] * Ce + Q[12]) / (Be = Be || 1), Ne[1] = (Q[1] * se + Q[5] * re + Q[9] * Ce + Q[13]) / Be, Ne[2] = (Q[2] * se + Q[6] * re + Q[10] * Ce + Q[14]) / Be, Ne;
    }
    function Js(Ne, Qe, Q) {
      var se = Qe[0],
        re = Qe[1],
        Ce = Qe[2];
      return Ne[0] = se * Q[0] + re * Q[3] + Ce * Q[6], Ne[1] = se * Q[1] + re * Q[4] + Ce * Q[7], Ne[2] = se * Q[2] + re * Q[5] + Ce * Q[8], Ne;
    }
    function ho(Ne, Qe, Q) {
      var se = Q[0],
        re = Q[1],
        Ce = Q[2],
        Be = Q[3],
        dt = Qe[0],
        Ot = Qe[1],
        Qt = Qe[2],
        Wn = re * Qt - Ce * Ot,
        Ui = Ce * dt - se * Qt,
        eo = se * Ot - re * dt;
      return Ne[0] = dt + Be * (Wn += Wn) + re * (eo += eo) - Ce * (Ui += Ui), Ne[1] = Ot + Be * Ui + Ce * Wn - se * eo, Ne[2] = Qt + Be * eo + se * Ui - re * Wn, Ne;
    }
    function uo(Ne, Qe, Q, se) {
      var re = [],
        Ce = [];
      return re[0] = Qe[0] - Q[0], re[1] = Qe[1] - Q[1], re[2] = Qe[2] - Q[2], Ce[0] = re[0], Ce[1] = re[1] * Math.cos(se) - re[2] * Math.sin(se), Ce[2] = re[1] * Math.sin(se) + re[2] * Math.cos(se), Ne[0] = Ce[0] + Q[0], Ne[1] = Ce[1] + Q[1], Ne[2] = Ce[2] + Q[2], Ne;
    }
    function ri(Ne, Qe, Q, se) {
      var re = [],
        Ce = [];
      return re[0] = Qe[0] - Q[0], re[1] = Qe[1] - Q[1], re[2] = Qe[2] - Q[2], Ce[0] = re[2] * Math.sin(se) + re[0] * Math.cos(se), Ce[1] = re[1], Ce[2] = re[2] * Math.cos(se) - re[0] * Math.sin(se), Ne[0] = Ce[0] + Q[0], Ne[1] = Ce[1] + Q[1], Ne[2] = Ce[2] + Q[2], Ne;
    }
    function Yt(Ne, Qe, Q, se) {
      var re = [],
        Ce = [];
      return re[0] = Qe[0] - Q[0], re[1] = Qe[1] - Q[1], re[2] = Qe[2] - Q[2], Ce[0] = re[0] * Math.cos(se) - re[1] * Math.sin(se), Ce[1] = re[0] * Math.sin(se) + re[1] * Math.cos(se), Ce[2] = re[2], Ne[0] = Ce[0] + Q[0], Ne[1] = Ce[1] + Q[1], Ne[2] = Ce[2] + Q[2], Ne;
    }
    function jt(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Ne[2],
        Ce = Qe[0],
        Be = Qe[1],
        dt = Qe[2],
        Ot = Math.sqrt((Q * Q + se * se + re * re) * (Ce * Ce + Be * Be + dt * dt)),
        Qt = Ot && Qo(Ne, Qe) / Ot;
      return Math.acos(Math.min(Math.max(Qt, -1), 1));
    }
    function hn(Ne) {
      return Ne[0] = 0, Ne[1] = 0, Ne[2] = 0, Ne;
    }
    function tn(Ne) {
      return "vec3(" + Ne[0] + ", " + Ne[1] + ", " + Ne[2] + ")";
    }
    function di(Ne, Qe) {
      return Ne[0] === Qe[0] && Ne[1] === Qe[1] && Ne[2] === Qe[2];
    }
    function Gn(Ne, Qe) {
      var Q = Ne[0],
        se = Ne[1],
        re = Ne[2],
        Ce = Qe[0],
        Be = Qe[1],
        dt = Qe[2];
      return Math.abs(Q - Ce) <= 1e-6 * Math.max(1, Math.abs(Q), Math.abs(Ce)) && Math.abs(se - Be) <= 1e-6 * Math.max(1, Math.abs(se), Math.abs(Be)) && Math.abs(re - dt) <= 1e-6 * Math.max(1, Math.abs(re), Math.abs(dt));
    }
    var Ne,
      dn = fi,
      wo = Fi,
      Ro = Rn,
      _r = us,
      qr = Ps,
      Ts = lo,
      js = hs,
      ws = (Ne = Di(), function (Qe, Q, se, re, Ce, Be) {
        var dt, Ot;
        for (Q || (Q = 3), se || (se = 0), Ot = re ? Math.min(re * Q + se, Qe.length) : Qe.length, dt = se; dt < Ot; dt += Q) Ne[0] = Qe[dt], Ne[1] = Qe[dt + 1], Ne[2] = Qe[dt + 2], Ce(Ne, Ne, Be), Qe[dt] = Ne[0], Qe[dt + 1] = Ne[1], Qe[dt + 2] = Ne[2];
        return Qe;
      }),
      Us = function (Ne, Qe) {
        Ne.fill(Qe);
      },
      Ws = function (Ne) {
        for (var Qe = 0, Q = 0; Q < Ne.length; Q++) Ne[Q] > Ne[Qe] && (Qe = Q);
        return Qe;
      },
      sa = function (Ne) {
        for (var Qe = Ne.length, Q = 0; Qe--;) Q += Ne[Qe];
        return Q;
      },
      ha = function (Ne, Qe) {
        var Q = [],
          se = {
            rad: 0,
            vec: a.clone([0, 0])
          },
          re = {};
        function Ce(dt) {
          re[dt.id] = dt, Q.push(dt);
        }
        function Be() {
          var dt,
            Ot = 0;
          for (dt = 0; dt < Q.length; dt++) Ot += Q[dt].rad;
          se.rad = Ot / Q.length, se.vec = a.clone([Math.cos(se.rad), Math.sin(se.rad)]);
        }
        return Ce(Ne), Be(), {
          add: function (dt) {
            re[dt.id] || (Ce(dt), Be());
          },
          fits: function (dt) {
            return Math.abs(a.dot(dt.point.vec, se.vec)) > Qe;
          },
          getPoints: function () {
            return Q;
          },
          getCenter: function () {
            return se;
          }
        };
      },
      ua = function (Ne, Qe, Q) {
        return {
          rad: Ne[Q],
          point: Ne,
          id: Qe
        };
      };
    function da(Ne, Qe) {
      return {
        x: Ne,
        y: Qe,
        toVec2: function () {
          return a.clone([this.x, this.y]);
        },
        toVec3: function () {
          return m.clone([this.x, this.y, 1]);
        },
        round: function () {
          return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this;
        }
      };
    }
    function Qs(Ne, Qe) {
      var Q = function (se) {
        var re,
          Ce = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          Be = 8 - Ce;
        function dt(Ui, eo) {
          for (var Wo = 0, Ve = Ui; Ve <= eo; Ve++) Wo += re[Ve];
          return Wo;
        }
        function Ot(Ui, eo) {
          for (var Wo = 0, Ve = Ui; Ve <= eo; Ve++) Wo += Ve * re[Ve];
          return Wo;
        }
        return function Qt() {
          var Ui,
            eo,
            Wo,
            Ve,
            me = [0],
            ze = (1 << Ce) - 1;
          re = function na(Ne, Qe) {
            Qe || (Qe = 8);
            for (var Q = Ne.data, se = Q.length, re = 8 - Qe, Ce = new Int32Array(1 << Qe); se--;) Ce[Q[se] >> re]++;
            return Ce;
          }(se, Ce);
          for (var xt = 1; xt < ze; xt++) 0 == (Wo = (Ui = dt(0, xt)) * (eo = dt(xt + 1, ze))) && (Wo = 1), Ve = Ot(0, xt) * eo - Ot(xt + 1, ze) * Ui, me[xt] = Ve * Ve / Wo;
          return Ws(me);
        }() << Be;
      }(Ne);
      return function (se, re, Ce) {
        Ce || (Ce = se);
        for (var Be = se.data, dt = Be.length, Ot = Ce.data; dt--;) Ot[dt] = Be[dt] < re ? 1 : 0;
      }(Ne, Q, Qe), Q;
    }
    function Xs(Ne) {
      var Qe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0, 0],
        Q = Ne[0],
        re = Ne[2],
        Ce = re * Ne[1],
        Be = Ce * (1 - Math.abs(Q / 60 % 2 - 1)),
        dt = re - Ce,
        Ot = 0,
        Qt = 0,
        Wn = 0;
      return Q < 60 ? (Ot = Ce, Qt = Be) : Q < 120 ? (Ot = Be, Qt = Ce) : Q < 180 ? (Qt = Ce, Wn = Be) : Q < 240 ? (Qt = Be, Wn = Ce) : Q < 300 ? (Ot = Be, Wn = Ce) : Q < 360 && (Ot = Ce, Wn = Be), Qe[0] = 255 * (Ot + dt) | 0, Qe[1] = 255 * (Qt + dt) | 0, Qe[2] = 255 * (Wn + dt) | 0, Qe;
    }
    function Ks(Ne) {
      if (!Number.isFinite(Ne) || Ne < 1) return [];
      for (var Qe = [], Q = [], se = Math.sqrt(Ne), re = 1; re <= se; re++) Ne % re == 0 && (Q.push(re), re !== Ne / re && Qe.unshift(Math.floor(Ne / re)));
      return Q.concat(Qe);
    }
    function Va(Ne, Qe) {
      var Q,
        se = Ks(Qe.x),
        re = Ks(Qe.y),
        Ce = Math.max(Qe.x, Qe.y),
        Be = function (Wo, Ve) {
          for (var me = 0, ze = 0, xt = []; me < Wo.length && ze < Ve.length;) Wo[me] === Ve[ze] ? (xt.push(Wo[me]), me++, ze++) : Wo[me] > Ve[ze] ? ze++ : me++;
          return xt;
        }(se, re),
        dt = [8, 10, 15, 20, 32, 60, 80],
        Ot = {
          "x-small": 5,
          small: 4,
          medium: 3,
          large: 2,
          "x-large": 1
        },
        Qt = Ot[Ne] || Ot.medium,
        Wn = dt[Qt],
        Ui = Math.floor(Ce / Wn);
      function eo(Wo) {
        for (var Ve = 0, me = Wo[Math.floor(Wo.length / 2)]; Ve < Wo.length - 1 && Wo[Ve] < Ui;) Ve++;
        return Ve > 0 && (me = Math.abs(Wo[Ve] - Ui) > Math.abs(Wo[Ve - 1] - Ui) ? Wo[Ve - 1] : Wo[Ve]), Ui / me < dt[Qt + 1] / dt[Qt] && Ui / me > dt[Qt - 1] / dt[Qt] ? {
          x: me,
          y: me
        } : null;
      }
      return (Q = eo(Be)) || (Q = eo(Ks(Ce))) || (Q = eo(Ks(Ui * Wn))), Q || (Q = {
        x: Math.max(1, Qe.x),
        y: Math.max(1, Qe.y)
      }), Q;
    }
    var ba = {
      top: function (Ne, Qe) {
        return "%" === Ne.unit ? Math.floor(Qe.height * (Ne.value / 100)) : null;
      },
      right: function (Ne, Qe) {
        return "%" === Ne.unit ? Math.floor(Qe.width - Qe.width * (Ne.value / 100)) : null;
      },
      bottom: function (Ne, Qe) {
        return "%" === Ne.unit ? Math.floor(Qe.height - Qe.height * (Ne.value / 100)) : null;
      },
      left: function (Ne, Qe) {
        return "%" === Ne.unit ? Math.floor(Qe.width * (Ne.value / 100)) : null;
      }
    };
    function Ri(Ne) {
      if (Ne < 0) throw new Error("expected positive number, received ".concat(Ne));
    }
    var $o = f()(function Ne(Qe, Q) {
        var se = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uint8Array,
          re = arguments.length > 3 ? arguments[3] : void 0;
        C()(this, Ne), h()(this, "data", void 0), h()(this, "size", void 0), h()(this, "indexMapping", void 0), Q ? this.data = Q : (this.data = new se(Qe.x * Qe.y), re && Us(this.data, 0)), this.size = Qe;
      }, [{
        key: "inImageWithBorder",
        value: function (Ne) {
          var Qe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return Ri(Qe), Ne.x >= 0 && Ne.y >= 0 && Ne.x < this.size.x + 2 * Qe && Ne.y < this.size.y + 2 * Qe;
        }
      }, {
        key: "subImageAsCopy",
        value: function (Ne, Qe) {
          Ri(Qe.x), Ri(Qe.y);
          for (var Q = Ne.size, se = Q.x, re = Q.y, Ce = 0; Ce < se; Ce++) for (var Be = 0; Be < re; Be++) Ne.data[Be * se + Ce] = this.data[(Qe.y + Be) * this.size.x + Qe.x + Ce];
          return Ne;
        }
      }, {
        key: "get",
        value: function (Ne, Qe) {
          return this.data[Qe * this.size.x + Ne];
        }
      }, {
        key: "getSafe",
        value: function (Ne, Qe) {
          if (!this.indexMapping) {
            this.indexMapping = {
              x: [],
              y: []
            };
            for (var Q = 0; Q < this.size.x; Q++) this.indexMapping.x[Q] = Q, this.indexMapping.x[Q + this.size.x] = Q;
            for (var se = 0; se < this.size.y; se++) this.indexMapping.y[se] = se, this.indexMapping.y[se + this.size.y] = se;
          }
          return this.data[this.indexMapping.y[Qe + this.size.y] * this.size.x + this.indexMapping.x[Ne + this.size.x]];
        }
      }, {
        key: "set",
        value: function (Ne, Qe, Q) {
          return this.data[Qe * this.size.x + Ne] = Q, delete this.indexMapping, this;
        }
      }, {
        key: "zeroBorder",
        value: function () {
          for (var Ne = this.size, Qe = Ne.x, Q = Ne.y, se = 0; se < Qe; se++) this.data[se] = this.data[(Q - 1) * Qe + se] = 0;
          for (var re = 1; re < Q - 1; re++) this.data[re * Qe] = this.data[re * Qe + (Qe - 1)] = 0;
          return delete this.indexMapping, this;
        }
      }, {
        key: "moments",
        value: function (Ne) {
          var Qe,
            Q,
            se,
            re,
            Ce,
            Be,
            dt,
            Ot,
            Qt,
            Wn,
            Ui = this.data,
            eo = this.size.y,
            Wo = this.size.x,
            Ve = [],
            me = [],
            ze = Math.PI,
            xt = ze / 4;
          if (Ne <= 0) return me;
          for (Ce = 0; Ce < Ne; Ce++) Ve[Ce] = {
            m00: 0,
            m01: 0,
            m10: 0,
            m11: 0,
            m02: 0,
            m20: 0,
            theta: 0,
            rad: 0
          };
          for (Q = 0; Q < eo; Q++) for (re = Q * Q, Qe = 0; Qe < Wo; Qe++) (se = Ui[Q * Wo + Qe]) > 0 && ((Be = Ve[se - 1]).m00 += 1, Be.m01 += Q, Be.m10 += Qe, Be.m11 += Qe * Q, Be.m02 += re, Be.m20 += Qe * Qe);
          for (Ce = 0; Ce < Ne; Ce++) Be = Ve[Ce], isNaN(Be.m00) || 0 === Be.m00 || (Wn = (Be.m02 / Be.m00 - (Qt = Be.m01 / Be.m00) * Qt - (Be.m20 / Be.m00 - (Ot = Be.m10 / Be.m00) * Ot)) / (2 * (dt = Be.m11 / Be.m00 - Ot * Qt)), Wn = .5 * Math.atan(Wn) + (dt >= 0 ? xt : -xt) + ze, Be.theta = (180 * Wn / ze + 90) % 180 - 90, Be.theta < 0 && (Be.theta += 180), Be.rad = Wn > ze ? Wn - ze : Wn, Be.vec = a.clone([Math.cos(Wn), Math.sin(Wn)]), me.push(Be));
          return me;
        }
      }, {
        key: "getAsRGBA",
        value: function () {
          for (var Ne = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, Qe = new Uint8ClampedArray(4 * this.size.x * this.size.y), Q = 0; Q < this.size.y; Q++) for (var se = 0; se < this.size.x; se++) {
            var re = Q * this.size.x + se,
              Ce = this.get(se, Q) * Ne;
            Qe[4 * re + 0] = Ce, Qe[4 * re + 1] = Ce, Qe[4 * re + 2] = Ce, Qe[4 * re + 3] = 255;
          }
          return Qe;
        }
      }, {
        key: "show",
        value: function (Ne) {
          var Qe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          console.warn("* imagewrapper show getcontext 2d");
          var Q = Ne.getContext("2d");
          if (!Q) throw new Error("Unable to get canvas context");
          var se = Q.getImageData(0, 0, Ne.width, Ne.height),
            re = this.getAsRGBA(Qe);
          Ne.width = this.size.x, Ne.height = this.size.y;
          var Ce = new ImageData(re, se.width, se.height);
          Q.putImageData(Ce, 0, 0);
        }
      }, {
        key: "overlay",
        value: function (Ne, Qe, Q) {
          var se = Qe < 0 || Qe > 360 ? 360 : Qe,
            re = [0, 1, 1],
            Ce = [0, 0, 0],
            Be = [255, 255, 255],
            dt = [0, 0, 0];
          console.warn("* imagewrapper overlay getcontext 2d");
          var Ot = Ne.getContext("2d");
          if (!Ot) throw new Error("Unable to get canvas context");
          for (var Qt = Ot.getImageData(Q.x, Q.y, this.size.x, this.size.y), Wn = Qt.data, Ui = this.data.length; Ui--;) {
            re[0] = this.data[Ui] * se;
            var eo = 4 * Ui,
              Wo = re[0] <= 0 ? Be : re[0] >= 360 ? dt : Xs(re, Ce),
              Ve = O()(Wo, 3);
            Wn[eo] = Ve[0], Wn[eo + 1] = Ve[1], Wn[eo + 2] = Ve[2], Wn[eo + 3] = 255;
          }
          Ot.putImageData(Qt, Q.x, Q.y);
        }
      }]),
      ci = t(7),
      Gi = t.n(ci),
      Fn = t(6),
      zi = t.n(Fn),
      Io = {
        drawRect: function (Ne, Qe, Q, se) {
          Q.strokeStyle = se.color, Q.fillStyle = se.color, Q.lineWidth = se.lineWidth || 1, Q.beginPath(), Q.strokeRect(Ne.x, Ne.y, Qe.x, Qe.y);
        },
        drawPath: function (Ne, Qe, Q, se) {
          Q.strokeStyle = se.color, Q.fillStyle = se.color, Q.lineWidth = se.lineWidth, Q.beginPath(), Q.moveTo(Ne[0][Qe.x], Ne[0][Qe.y]);
          for (var re = 1; re < Ne.length; re++) Q.lineTo(Ne[re][Qe.x], Ne[re][Qe.y]);
          Q.closePath(), Q.stroke();
        },
        drawImage: function (Ne, Qe, Q) {
          var se = Q.getImageData(0, 0, Qe.x, Qe.y),
            re = se.data,
            Ce = re.length,
            Be = Ne.length;
          if (Ce / Be != 4) return !1;
          for (; Be--;) {
            var dt = Ne[Be];
            re[--Ce] = 255, re[--Ce] = dt, re[--Ce] = dt, re[--Ce] = dt;
          }
          return Q.putImageData(se, 0, 0), !0;
        }
      },
      gi = t(4),
      Kt = t.n(gi),
      Vt = t(1),
      Pn = t.n(Vt),
      pi = t(5),
      xo = t.n(pi),
      No = function (Ne) {
        return Ne[Ne.Forward = 1] = "Forward", Ne[Ne.Reverse = -1] = "Reverse", Ne;
      }({}),
      Ko = f()(function Ne(Qe, Q) {
        C()(this, Ne), h()(this, "_row", []), h()(this, "config", {}), h()(this, "supplements", []), h()(this, "SINGLE_CODE_ERROR", 0), h()(this, "FORMAT", "unknown"), h()(this, "CONFIG_KEYS", {}), this._row = [], this.config = Qe || {}, Q && (this.supplements = Q);
      }, [{
        key: "_nextUnset",
        value: function (Ne) {
          for (var Q = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; Q < Ne.length; Q++) if (!Ne[Q]) return Q;
          return Ne.length;
        }
      }, {
        key: "_matchPattern",
        value: function (Ne, Qe) {
          for (var dt, Q = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.SINGLE_CODE_ERROR || 1, se = 0, re = 0, Ce = 0, Be = 0, Qt = 0, Wn = 0; Wn < Ne.length; Wn++) Ce += Ne[Wn], Be += Qe[Wn];
          if (Ce < Be) return Number.MAX_VALUE;
          Q *= dt = Ce / Be;
          for (var Ui = 0; Ui < Ne.length; Ui++) {
            if (Qt = Qe[Ui] * dt, (re = Math.abs(Ne[Ui] - Qt) / Qt) > Q) return Number.MAX_VALUE;
            se += re;
          }
          return se / Be;
        }
      }, {
        key: "_nextSet",
        value: function (Ne) {
          for (var Q = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; Q < Ne.length; Q++) if (Ne[Q]) return Q;
          return Ne.length;
        }
      }, {
        key: "_correctBars",
        value: function (Ne, Qe, Q) {
          for (var se = Q.length, re = 0; se--;) (re = Ne[Q[se]] * (1 - (1 - Qe) / 2)) > 1 && (Ne[Q[se]] = re);
        }
      }, {
        key: "decodePattern",
        value: function (Ne) {
          this._row = Ne;
          var Qe = this.decode();
          return null === Qe ? (this._row.reverse(), (Qe = this.decode()) && (Qe.direction = No.Reverse, Qe.start = this._row.length - Qe.start, Qe.end = this._row.length - Qe.end)) : Qe.direction = No.Forward, Qe && (Qe.format = this.FORMAT), Qe;
        }
      }, {
        key: "_matchRange",
        value: function (Ne, Qe, Q) {
          var se;
          for (se = Ne = Ne < 0 ? 0 : Ne; se < Qe; se++) if (this._row[se] !== Q) return !1;
          return !0;
        }
      }, {
        key: "_fillCounters",
        value: function () {
          var Ne = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._nextUnset(this._row),
            Qe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._row.length,
            Q = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            se = [],
            re = 0;
          se[re] = 0;
          for (var Ce = Ne; Ce < Qe; Ce++) this._row[Ce] ^ (Q ? 1 : 0) ? se[re]++ : (se[++re] = 1, Q = !Q);
          return se;
        }
      }, {
        key: "_toCounters",
        value: function (Ne, Qe) {
          var Q = Qe.length,
            se = this._row.length,
            re = !this._row[Ne],
            Ce = 0;
          Us(Qe, 0);
          for (var Be = Ne; Be < se; Be++) if (this._row[Be] ^ (re ? 1 : 0)) Qe[Ce]++;else {
            if (++Ce === Q) break;
            Qe[Ce] = 1, re = !re;
          }
          return Qe;
        }
      }, {
        key: "decodeImage",
        value: function (Ne) {
          return null;
        }
      }], [{
        key: "Exception",
        get: function () {
          return {
            StartNotFoundException: "Start-Info was not found!",
            CodeNotFoundException: "Code could not be found!",
            PatternNotFoundException: "Pattern could not be found!"
          };
        }
      }]);
    h()(Ko, "adjacentLineValidationMatches", 0);
    var Mi = Ko;
    var At = [3, 1, 3, 1, 1, 1],
      _n = [3, 1, 1, 1, 3],
      it = [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]],
      _e = At.reduce(function (Ne, Qe) {
        return Ne + Qe;
      }, 0),
      gt = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function It(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "barSpaceRatio", [1, 1]), h()(Q, "FORMAT", "2of5"), h()(Q, "SINGLE_CODE_ERROR", .78), h()(Q, "AVG_CODE_ERROR", .3), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_findPattern",
          value: function (Q, se) {
            var re = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Ce = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Be = [],
              dt = 0,
              Ot = {
                error: Number.MAX_VALUE,
                code: -1,
                start: 0,
                end: 0
              },
              Qt = 0,
              Wn = 0,
              Ui = this.AVG_CODE_ERROR;
            se || (se = this._nextSet(this._row));
            for (var eo = 0; eo < Q.length; eo++) Be[eo] = 0;
            for (var Wo = se; Wo < this._row.length; Wo++) if (this._row[Wo] ^ (re ? 1 : 0)) Be[dt]++;else {
              if (dt === Be.length - 1) {
                Qt = 0;
                for (var Ve = 0; Ve < Be.length; Ve++) Qt += Be[Ve];
                if ((Wn = this._matchPattern(Be, Q)) < Ui) return Ot.error = Wn, Ot.start = Wo - Qt, Ot.end = Wo, Ot;
                if (!Ce) return null;
                for (var me = 0; me < Be.length - 2; me++) Be[me] = Be[me + 2];
                Be[Be.length - 2] = 0, Be[Be.length - 1] = 0, dt--;
              } else dt++;
              Be[dt] = 1, re = !re;
            }
            return null;
          }
        }, {
          key: "_findStart",
          value: function () {
            for (var Q = null, se = this._nextSet(this._row), re = 1, Ce = 0; !Q;) {
              if (!(Q = this._findPattern(At, se, !1, !0))) return null;
              if (re = Math.floor((Q.end - Q.start) / _e), (Ce = Q.start - 5 * re) >= 0 && this._matchRange(Ce, Q.start, 0)) return Q;
              se = Q.end, Q = null;
            }
            return Q;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function (Q) {
            var se = Q.end + (Q.end - Q.start) / 2;
            return se < this._row.length && this._matchRange(Q.end, se, 0) ? Q : null;
          }
        }, {
          key: "_findEnd",
          value: function () {
            this._row.reverse();
            var Q = this._nextSet(this._row),
              se = this._findPattern(_n, Q, !1, !0);
            if (this._row.reverse(), null === se) return null;
            var re = se.start;
            return se.start = this._row.length - se.end, se.end = this._row.length - re, null !== se ? this._verifyTrailingWhitespace(se) : null;
          }
        }, {
          key: "_verifyCounterLength",
          value: function (Q) {
            return Q.length % 10 == 0;
          }
        }, {
          key: "_decodeCode",
          value: function (Q) {
            for (var se = this.AVG_CODE_ERROR, re = {
                error: Number.MAX_VALUE,
                code: -1,
                start: 0,
                end: 0
              }, Ce = 0; Ce < it.length; Ce++) {
              var Be = this._matchPattern(Q, it[Ce]);
              Be < re.error && (re.code = Ce, re.error = Be);
            }
            return re.error < se ? re : null;
          }
        }, {
          key: "_decodePayload",
          value: function (Q, se, re) {
            for (var Ce = 0, Be = Q.length, dt = [0, 0, 0, 0, 0], Ot = null; Ce < Be;) {
              for (var Qt = 0; Qt < 5; Qt++) dt[Qt] = Q[Ce] * this.barSpaceRatio[0], Ce += 2;
              if (!(Ot = this._decodeCode(dt))) return null;
              se.push("".concat(Ot.code)), re.push(Ot);
            }
            return Ot;
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            var re = this._findStart();
            if (!re) return null;
            var Ce = this._findEnd();
            if (!Ce) return null;
            var Be = this._fillCounters(re.end, Ce.start, !1);
            if (!this._verifyCounterLength(Be)) return null;
            var dt = [];
            dt.push(re);
            var Ot = [];
            return this._decodePayload(Be, Ot, dt) ? Ot.length < 5 ? null : (dt.push(Ce), {
              code: Ot.join(""),
              start: re.start,
              end: Ce.end,
              startInfo: re,
              decodedCodes: dt,
              format: this.FORMAT
            }) : null;
          }
        }]);
      }(Mi);
    var So = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68],
      Er = [3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14],
      Br = [26, 41, 11, 14],
      vr = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function ni(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "_counters", []), h()(Q, "FORMAT", "codabar"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_computeAlternatingThreshold",
          value: function (Q, se) {
            for (var re = Number.MAX_VALUE, Ce = 0, Be = 0, dt = Q; dt < se; dt += 2) (Be = this._counters[dt]) > Ce && (Ce = Be), Be < re && (re = Be);
            return (re + Ce) / 2 | 0;
          }
        }, {
          key: "_toPattern",
          value: function (Q) {
            var se = Q + 7;
            if (se > this._counters.length) return -1;
            for (var re = this._computeAlternatingThreshold(Q, se), Ce = this._computeAlternatingThreshold(Q + 1, se), Be = 64, Ot = 0, Qt = 0; Qt < 7; Qt++) this._counters[Q + Qt] > (1 & Qt ? Ce : re) && (Ot |= Be), Be >>= 1;
            return Ot;
          }
        }, {
          key: "_isStartEnd",
          value: function (Q) {
            for (var se = 0; se < Br.length; se++) if (Br[se] === Q) return !0;
            return !1;
          }
        }, {
          key: "_sumCounters",
          value: function (Q, se) {
            for (var re = 0, Ce = Q; Ce < se; Ce++) re += this._counters[Ce];
            return re;
          }
        }, {
          key: "_findStart",
          value: function () {
            for (var Q = this._nextUnset(this._row), se = 1; se < this._counters.length; se++) {
              var re = this._toPattern(se);
              if (-1 !== re && this._isStartEnd(re)) return {
                start: Q += this._sumCounters(0, se),
                end: Q + this._sumCounters(se, se + 8),
                startCounter: se,
                endCounter: se + 8
              };
            }
            return null;
          }
        }, {
          key: "_patternToChar",
          value: function (Q) {
            for (var se = 0; se < Er.length; se++) if (Er[se] === Q) return String.fromCharCode(So[se]);
            return null;
          }
        }, {
          key: "_calculatePatternLength",
          value: function (Q) {
            for (var se = 0, re = Q; re < Q + 7; re++) se += this._counters[re];
            return se;
          }
        }, {
          key: "_verifyWhitespace",
          value: function (Q, se) {
            return (Q - 1 <= 0 || this._counters[Q - 1] >= this._calculatePatternLength(Q) / 2) && (se + 8 >= this._counters.length || this._counters[se + 7] >= this._calculatePatternLength(se) / 2);
          }
        }, {
          key: "_charToPattern",
          value: function (Q) {
            for (var se = Q.charCodeAt(0), re = 0; re < So.length; re++) if (So[re] === se) return Er[re];
            return 0;
          }
        }, {
          key: "_thresholdResultPattern",
          value: function (Q, se) {
            for (var re, Ce = {
                space: {
                  narrow: {
                    size: 0,
                    counts: 0,
                    min: 0,
                    max: Number.MAX_VALUE
                  },
                  wide: {
                    size: 0,
                    counts: 0,
                    min: 0,
                    max: Number.MAX_VALUE
                  }
                },
                bar: {
                  narrow: {
                    size: 0,
                    counts: 0,
                    min: 0,
                    max: Number.MAX_VALUE
                  },
                  wide: {
                    size: 0,
                    counts: 0,
                    min: 0,
                    max: Number.MAX_VALUE
                  }
                }
              }, Be = se, dt = 0; dt < Q.length; dt++) {
              re = this._charToPattern(Q[dt]);
              for (var Ot = 6; Ot >= 0; Ot--) {
                var Qt = 2 == (1 & Ot) ? Ce.bar : Ce.space,
                  Wn = 1 == (1 & re) ? Qt.wide : Qt.narrow;
                Wn.size += this._counters[Be + Ot], Wn.counts++, re >>= 1;
              }
              Be += 8;
            }
            return ["space", "bar"].forEach(function (Ui) {
              var eo = Ce[Ui];
              eo.wide.min = Math.floor((eo.narrow.size / eo.narrow.counts + eo.wide.size / eo.wide.counts) / 2), eo.narrow.max = Math.ceil(eo.wide.min), eo.wide.max = Math.ceil((2 * eo.wide.size + 1.5) / eo.wide.counts);
            }), Ce;
          }
        }, {
          key: "_validateResult",
          value: function (Q, se) {
            for (var re, Ce = this._thresholdResultPattern(Q, se), Be = se, dt = 0; dt < Q.length; dt++) {
              re = this._charToPattern(Q[dt]);
              for (var Ot = 6; Ot >= 0; Ot--) {
                var Qt = 1 & Ot ? Ce.space : Ce.bar,
                  Wn = 1 == (1 & re) ? Qt.wide : Qt.narrow,
                  Ui = this._counters[Be + Ot];
                if (Ui < Wn.min || Ui > Wn.max) return !1;
                re >>= 1;
              }
              Be += 8;
            }
            return !0;
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            if (this._counters = this._fillCounters(), !(se = this._findStart())) return null;
            var re,
              Ce = se.startCounter,
              Be = [];
            do {
              if ((re = this._toPattern(Ce)) < 0) return null;
              var dt = this._patternToChar(re);
              if (null === dt) return null;
              if (Be.push(dt), Ce += 8, Be.length > 1 && this._isStartEnd(re)) break;
            } while (Ce < this._counters.length);
            if (Be.length - 2 < 4 || !this._isStartEnd(re) || !this._verifyWhitespace(se.startCounter, Ce - 8) || !this._validateResult(Be, se.startCounter)) return null;
            var Ot = se.start + this._sumCounters(se.startCounter, (Ce = Ce > this._counters.length ? this._counters.length : Ce) - 8);
            return {
              code: Be.join(""),
              start: se.start,
              end: Ot,
              startInfo: se,
              decodedCodes: Be,
              format: this.FORMAT
            };
          }
        }]);
      }(Mi);
    var ks = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function zr(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "CODE_SHIFT", 98), h()(Q, "CODE_C", 99), h()(Q, "CODE_B", 100), h()(Q, "CODE_A", 101), h()(Q, "FNC1", 102), h()(Q, "START_CODE_A", 103), h()(Q, "START_CODE_B", 104), h()(Q, "START_CODE_C", 105), h()(Q, "STOP_CODE", 106), h()(Q, "FNC1_CHAR", String.fromCharCode(29)), h()(Q, "CODE_PATTERN", [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]), h()(Q, "SINGLE_CODE_ERROR", .64), h()(Q, "AVG_CODE_ERROR", .3), h()(Q, "FORMAT", "code_128"), h()(Q, "MODULE_INDICES", {
            bar: [0, 2, 4],
            space: [1, 3, 5]
          }), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_decodeCode",
          value: function (Q, se) {
            for (var re = {
                error: Number.MAX_VALUE,
                code: -1,
                start: Q,
                end: Q,
                correction: {
                  bar: 1,
                  space: 1
                }
              }, Ce = [0, 0, 0, 0, 0, 0], dt = !this._row[Q], Ot = 0, Qt = Q; Qt < this._row.length; Qt++) if (this._row[Qt] ^ (dt ? 1 : 0)) Ce[Ot]++;else {
              if (Ot === Ce.length - 1) {
                se && this._correct(Ce, se);
                for (var Wn = 0; Wn < this.CODE_PATTERN.length; Wn++) {
                  var Ui = this._matchPattern(Ce, this.CODE_PATTERN[Wn]);
                  Ui < re.error && (re.code = Wn, re.error = Ui);
                }
                return re.end = Qt, -1 === re.code || re.error > this.AVG_CODE_ERROR ? null : (this.CODE_PATTERN[re.code] && (re.correction.bar = this.calculateCorrection(this.CODE_PATTERN[re.code], Ce, this.MODULE_INDICES.bar), re.correction.space = this.calculateCorrection(this.CODE_PATTERN[re.code], Ce, this.MODULE_INDICES.space)), re);
              }
              Ce[++Ot] = 1, dt = !dt;
            }
            return null;
          }
        }, {
          key: "_correct",
          value: function (Q, se) {
            this._correctBars(Q, se.bar, this.MODULE_INDICES.bar), this._correctBars(Q, se.space, this.MODULE_INDICES.space);
          }
        }, {
          key: "_findStart",
          value: function () {
            for (var Q = [0, 0, 0, 0, 0, 0], se = this._nextSet(this._row), re = {
                error: Number.MAX_VALUE,
                code: -1,
                start: 0,
                end: 0,
                correction: {
                  bar: 1,
                  space: 1
                }
              }, Ce = !1, Be = 0, dt = se; dt < this._row.length; dt++) if (this._row[dt] ^ (Ce ? 1 : 0)) Q[Be]++;else {
              if (Be === Q.length - 1) {
                for (var Ot = Q.reduce(function (eo, Wo) {
                    return eo + Wo;
                  }, 0), Qt = this.START_CODE_A; Qt <= this.START_CODE_C; Qt++) {
                  var Wn = this._matchPattern(Q, this.CODE_PATTERN[Qt]);
                  Wn < re.error && (re.code = Qt, re.error = Wn);
                }
                if (re.error < this.AVG_CODE_ERROR) return re.start = dt - Ot, re.end = dt, re.correction.bar = this.calculateCorrection(this.CODE_PATTERN[re.code], Q, this.MODULE_INDICES.bar), re.correction.space = this.calculateCorrection(this.CODE_PATTERN[re.code], Q, this.MODULE_INDICES.space), re;
                for (var Ui = 0; Ui < 4; Ui++) Q[Ui] = Q[Ui + 2];
                Q[4] = 0, Q[5] = 0, Be--;
              } else Be++;
              Q[Be] = 1, Ce = !Ce;
            }
            return null;
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            var re = this,
              Ce = this._findStart();
            if (null === Ce) return null;
            var Be = {
                code: Ce.code,
                start: Ce.start,
                end: Ce.end,
                correction: {
                  bar: Ce.correction.bar,
                  space: Ce.correction.space
                }
              },
              dt = [];
            dt.push(Be);
            for (var Ot = Be.code, Qt = function (xt) {
                switch (xt) {
                  case re.START_CODE_A:
                    return re.CODE_A;
                  case re.START_CODE_B:
                    return re.CODE_B;
                  case re.START_CODE_C:
                    return re.CODE_C;
                  default:
                    return null;
                }
              }(Be.code), Wn = !1, Ui = !1, eo = Ui, Wo = !0, Ve = 0, me = [], ze = []; !Wn;) {
              if (eo = Ui, Ui = !1, null !== (Be = this._decodeCode(Be.end, Be.correction))) switch (Be.code !== this.STOP_CODE && (Wo = !0), Be.code !== this.STOP_CODE && (me.push(Be.code), Ot += ++Ve * Be.code), dt.push(Be), Qt) {
                case this.CODE_A:
                  if (Be.code < 64) ze.push(String.fromCharCode(32 + Be.code));else if (Be.code < 96) ze.push(String.fromCharCode(Be.code - 64));else switch (Be.code !== this.STOP_CODE && (Wo = !1), Be.code) {
                    case this.CODE_SHIFT:
                      Ui = !0, Qt = this.CODE_B;
                      break;
                    case this.CODE_B:
                      Qt = this.CODE_B;
                      break;
                    case this.CODE_C:
                      Qt = this.CODE_C;
                      break;
                    case this.FNC1:
                      ze.push(this.FNC1_CHAR);
                      break;
                    case this.STOP_CODE:
                      Wn = !0;
                  }
                  break;
                case this.CODE_B:
                  if (Be.code < 96) ze.push(String.fromCharCode(32 + Be.code));else switch (Be.code !== this.STOP_CODE && (Wo = !1), Be.code) {
                    case this.CODE_SHIFT:
                      Ui = !0, Qt = this.CODE_A;
                      break;
                    case this.CODE_A:
                      Qt = this.CODE_A;
                      break;
                    case this.CODE_C:
                      Qt = this.CODE_C;
                      break;
                    case this.FNC1:
                      ze.push(this.FNC1_CHAR);
                      break;
                    case this.STOP_CODE:
                      Wn = !0;
                  }
                  break;
                case this.CODE_C:
                  if (Be.code < 100) ze.push(Be.code < 10 ? "0" + Be.code : Be.code);else switch (Be.code !== this.STOP_CODE && (Wo = !1), Be.code) {
                    case this.CODE_A:
                      Qt = this.CODE_A;
                      break;
                    case this.CODE_B:
                      Qt = this.CODE_B;
                      break;
                    case this.FNC1:
                      ze.push(this.FNC1_CHAR);
                      break;
                    case this.STOP_CODE:
                      Wn = !0;
                  }
              } else Wn = !0;
              eo && (Qt = Qt === this.CODE_A ? this.CODE_B : this.CODE_A);
            }
            return null === Be ? null : (Be.end = this._nextUnset(this._row, Be.end), this._verifyTrailingWhitespace(Be) ? (Ot -= Ve * me[me.length - 1]) % 103 !== me[me.length - 1] ? null : ze.length ? (Wo && ze.splice(ze.length - 1, 1), {
              code: ze.join(""),
              start: Ce.start,
              end: Be.end,
              codeset: Qt,
              startInfo: Ce,
              decodedCodes: dt,
              endInfo: Be,
              format: this.FORMAT
            }) : null : null);
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function (Q) {
            var se;
            return (se = Q.end + (Q.end - Q.start) / 2) < this._row.length && this._matchRange(Q.end, se, 0) ? Q : null;
          }
        }, {
          key: "calculateCorrection",
          value: function (Q, se, re) {
            for (var Ce = re.length, Be = 0, dt = 0; Ce--;) dt += Q[re[Ce]], Be += se[re[Ce]];
            return dt / Be;
          }
        }]);
      }(Mi),
      aa = t(13),
      Ka = t.n(aa),
      ja = t(16),
      ul = t.n(ja);
    var en = new Uint16Array(ul()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%").map(function (Ne) {
        return Ne.charCodeAt(0);
      })),
      mi = new Uint16Array([52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42]),
      ro = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function Ln(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "code_39"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_findStart",
          value: function () {
            for (var Q = this._nextSet(this._row), se = Q, re = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), Ce = 0, Be = !1, dt = Q; dt < this._row.length; dt++) if (this._row[dt] ^ (Be ? 1 : 0)) re[Ce]++;else {
              if (Ce === re.length - 1) {
                if (148 === this._toPattern(re)) {
                  var Ot = Math.floor(Math.max(0, se - (dt - se) / 4));
                  if (this._matchRange(Ot, se, 0)) return {
                    start: se,
                    end: dt
                  };
                }
                se += re[0] + re[1];
                for (var Qt = 0; Qt < 7; Qt++) re[Qt] = re[Qt + 2];
                re[7] = 0, re[8] = 0, Ce--;
              } else Ce++;
              re[Ce] = 1, Be = !Be;
            }
            return null;
          }
        }, {
          key: "_toPattern",
          value: function (Q) {
            for (var se = Q.length, re = 0, Ce = se, Be = 0; Ce > 3;) {
              re = this._findNextWidth(Q, re), Ce = 0;
              for (var dt = 0, Ot = 0; Ot < se; Ot++) Q[Ot] > re && (dt |= 1 << se - 1 - Ot, Ce++, Be += Q[Ot]);
              if (3 === Ce) {
                for (var Qt = 0; Qt < se && Ce > 0; Qt++) if (Q[Qt] > re && (Ce--, 2 * Q[Qt] >= Be)) return -1;
                return dt;
              }
            }
            return -1;
          }
        }, {
          key: "_findNextWidth",
          value: function (Q, se) {
            for (var re = Number.MAX_VALUE, Ce = 0; Ce < Q.length; Ce++) Q[Ce] < re && Q[Ce] > se && (re = Q[Ce]);
            return re;
          }
        }, {
          key: "_patternToChar",
          value: function (Q) {
            for (var se = 0; se < mi.length; se++) if (mi[se] === Q) return String.fromCharCode(en[se]);
            return null;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function (Q, se, re) {
            var Ce = sa(re);
            return 3 * (se - Q - Ce) >= Ce;
          }
        }, {
          key: "decode",
          value: function () {
            var Q = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]),
              se = [],
              re = this._findStart();
            if (!re) return null;
            var Ce,
              Be,
              dt = this._nextSet(this._row, re.end);
            do {
              Q = this._toCounters(dt, Q);
              var Ot = this._toPattern(Q);
              if (Ot < 0 || null === (Ce = this._patternToChar(Ot))) return null;
              se.push(Ce), Be = dt, dt += sa(Q), dt = this._nextSet(this._row, dt);
            } while ("*" !== Ce);
            return se.pop(), se.length && this._verifyTrailingWhitespace(Be, dt, Q) ? {
              code: se.join(""),
              start: re.start,
              end: dt,
              startInfo: re,
              decodedCodes: se,
              format: this.FORMAT
            } : null;
          }
        }]);
      }(Mi);
    var jr = /[AEIO]/g,
      as = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function cr(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "code_32_reader"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_decodeCode32",
          value: function (Q) {
            if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(Q)) return null;
            for (var se = 0, re = 0; re < Q.length; re++) se = 32 * se + "0123456789BCDFGHJKLMNPQRSTUVWXYZ".indexOf(Q[re]);
            var Ce = "".concat(se);
            return Ce.length < 9 && (Ce = ("000000000" + Ce).slice(-9)), "A" + Ce;
          }
        }, {
          key: "_checkChecksum",
          value: function (Q) {
            return !!Q;
          }
        }, {
          key: "decode",
          value: function () {
            var Q,
              re,
              Be,
              dt = (Q = Qe, "decode", re = this, 3, "function" == typeof (Be = Ka()(Pn()(Q.prototype), "decode", re)) ? function (Wn) {
                return Be.apply(re, Wn);
              } : Be)([]);
            if (!dt) return null;
            var Ot = dt.code;
            if (!Ot || (Ot = Ot.replace(jr, ""), !this._checkChecksum(Ot))) return null;
            var Qt = this._decodeCode32(Ot);
            return Qt ? (dt.code = Qt, dt) : null;
          }
        }]);
      }(ro);
    var vo = /[IOQ]/g,
      As = /[A-Z0-9]{17}/,
      dl = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function Da(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "code_39_vin"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_checkChecksum",
          value: function (Q) {
            return !!Q;
          }
        }, {
          key: "decode",
          value: function () {
            var Q,
              re,
              Be,
              dt = (Q = Qe, "decode", re = this, 3, "function" == typeof (Be = Ka()(Pn()(Q.prototype), "decode", re)) ? function (Qt) {
                return Be.apply(re, Qt);
              } : Be)([]);
            if (!dt) return null;
            var Ot = dt.code;
            return Ot && (Ot = Ot.replace(vo, "")).match(As) && this._checkChecksum(Ot) ? (dt.code = Ot, dt) : null;
          }
        }]);
      }(ro);
    var sn = new Uint16Array(ul()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*").map(function (Ne) {
        return Ne.charCodeAt(0);
      })),
      Jt = new Uint16Array([276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350]),
      Si = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function pn(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "code_93"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_patternToChar",
          value: function (Q) {
            for (var se = 0; se < Jt.length; se++) if (Jt[se] === Q) return String.fromCharCode(sn[se]);
            return null;
          }
        }, {
          key: "_toPattern",
          value: function (Q) {
            for (var se = Q.length, re = Q.reduce(function (Qt, Wn) {
                return Qt + Wn;
              }, 0), Ce = 0, Be = 0; Be < se; Be++) {
              var dt = Math.round(9 * Q[Be] / re);
              if (dt < 1 || dt > 4) return -1;
              if (1 & Be) Ce <<= dt;else for (var Ot = 0; Ot < dt; Ot++) Ce = Ce << 1 | 1;
            }
            return Ce;
          }
        }, {
          key: "_findStart",
          value: function () {
            for (var Q = this._nextSet(this._row), se = Q, re = new Uint16Array([0, 0, 0, 0, 0, 0]), Ce = 0, Be = !1, dt = Q; dt < this._row.length; dt++) if (this._row[dt] ^ (Be ? 1 : 0)) re[Ce]++;else {
              if (Ce === re.length - 1) {
                if (350 === this._toPattern(re)) {
                  var Ot = Math.floor(Math.max(0, se - (dt - se) / 4));
                  if (this._matchRange(Ot, se, 0)) return {
                    start: se,
                    end: dt
                  };
                }
                se += re[0] + re[1];
                for (var Qt = 0; Qt < 4; Qt++) re[Qt] = re[Qt + 2];
                re[4] = 0, re[5] = 0, Ce--;
              } else Ce++;
              re[Ce] = 1, Be = !Be;
            }
            return null;
          }
        }, {
          key: "_verifyEnd",
          value: function (Q, se) {
            return !(Q === se || !this._row[se]);
          }
        }, {
          key: "_decodeExtended",
          value: function (Q) {
            for (var se = Q.length, re = [], Ce = 0; Ce < se; Ce++) {
              var Be = Q[Ce];
              if (Be >= "a" && Be <= "d") {
                if (Ce > se - 2) return null;
                var dt = Q[++Ce],
                  Ot = dt.charCodeAt(0),
                  Qt = void 0;
                switch (Be) {
                  case "a":
                    if (!(dt >= "A" && dt <= "Z")) return null;
                    Qt = String.fromCharCode(Ot - 64);
                    break;
                  case "b":
                    if (dt >= "A" && dt <= "E") Qt = String.fromCharCode(Ot - 38);else if (dt >= "F" && dt <= "J") Qt = String.fromCharCode(Ot - 11);else if (dt >= "K" && dt <= "O") Qt = String.fromCharCode(Ot + 16);else if (dt >= "P" && dt <= "S") Qt = String.fromCharCode(Ot + 43);else {
                      if (!(dt >= "T" && dt <= "Z")) return null;
                      Qt = String.fromCharCode(127);
                    }
                    break;
                  case "c":
                    if (dt >= "A" && dt <= "O") Qt = String.fromCharCode(Ot - 32);else {
                      if ("Z" !== dt) return null;
                      Qt = ":";
                    }
                    break;
                  case "d":
                    if (!(dt >= "A" && dt <= "Z")) return null;
                    Qt = String.fromCharCode(Ot + 32);
                    break;
                  default:
                    return console.warn("* code_93_reader _decodeExtended hit default case, this may be an error", Qt), null;
                }
                re.push(Qt);
              } else re.push(Be);
            }
            return re;
          }
        }, {
          key: "_matchCheckChar",
          value: function (Q, se, re) {
            var Ce = Q.slice(0, se),
              Be = Ce.length,
              dt = Ce.reduce(function (Ot, Qt, Wn) {
                return Ot + ((-1 * Wn + (Be - 1)) % re + 1) * sn.indexOf(Qt.charCodeAt(0));
              }, 0);
            return sn[dt % 47] === Q[se].charCodeAt(0);
          }
        }, {
          key: "_verifyChecksums",
          value: function (Q) {
            return this._matchCheckChar(Q, Q.length - 2, 20) && this._matchCheckChar(Q, Q.length - 1, 15);
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            if (!(se = this._findStart())) return null;
            var re,
              Ce,
              Be = new Uint16Array([0, 0, 0, 0, 0, 0]),
              dt = [],
              Ot = this._nextSet(this._row, se.end);
            do {
              Be = this._toCounters(Ot, Be);
              var Qt = this._toPattern(Be);
              if (Qt < 0 || null === (Ce = this._patternToChar(Qt))) return null;
              dt.push(Ce), re = Ot, Ot += sa(Be), Ot = this._nextSet(this._row, Ot);
            } while ("*" !== Ce);
            return dt.pop(), dt.length && this._verifyEnd(re, Ot) && this._verifyChecksums(dt) ? (dt = dt.slice(0, dt.length - 2), null === (dt = this._decodeExtended(dt)) ? null : {
              code: dt.join(""),
              start: se.start,
              end: Ot,
              startInfo: se,
              decodedCodes: dt,
              format: this.FORMAT
            }) : null;
          }
        }]);
      }(Mi);
    function mn(Ne, Qe) {
      var Q = Object.keys(Ne);
      if (Object.getOwnPropertySymbols) {
        var se = Object.getOwnPropertySymbols(Ne);
        Qe && (se = se.filter(function (re) {
          return Object.getOwnPropertyDescriptor(Ne, re).enumerable;
        })), Q.push.apply(Q, se);
      }
      return Q;
    }
    function Pe(Ne) {
      for (var Qe = 1; Qe < arguments.length; Qe++) {
        var Q = null != arguments[Qe] ? arguments[Qe] : {};
        Qe % 2 ? mn(Object(Q), !0).forEach(function (se) {
          h()(Ne, se, Q[se]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Ne, Object.getOwnPropertyDescriptors(Q)) : mn(Object(Q)).forEach(function (se) {
          Object.defineProperty(Ne, se, Object.getOwnPropertyDescriptor(Q, se));
        });
      }
      return Ne;
    }
    var Zt = [1, 1, 1],
      Li = [1, 1, 1, 1, 1],
      mo = [1, 1, 2],
      Xo = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]],
      Cr = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26],
      Xr = function (Ne) {
        function Qe(Q, se) {
          var re;
          return C()(this, Qe), re = function at(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [N()({
            supplements: []
          }, Q), se]), h()(re, "FORMAT", "ean_13"), h()(re, "SINGLE_CODE_ERROR", .7), h()(re, "STOP_PATTERN", [1, 1, 1]), re;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_findPattern",
          value: function (Q, se, re, Ce) {
            var Be = new Array(Q.length).fill(0),
              dt = {
                error: Number.MAX_VALUE,
                start: 0,
                end: 0
              },
              Ot = 0;
            se || (se = this._nextSet(this._row));
            for (var Qt = !1, Wn = se; Wn < this._row.length; Wn++) if (this._row[Wn] ^ (re ? 1 : 0)) Be[Ot] += 1;else {
              if (Ot === Be.length - 1) {
                var Ui = this._matchPattern(Be, Q);
                if (Ui < .48 && dt.error && Ui < dt.error) return Qt = !0, dt.error = Ui, dt.start = Wn - Be.reduce(function (Wo, Ve) {
                  return Wo + Ve;
                }, 0), dt.end = Wn, dt;
                if (Ce) {
                  for (var eo = 0; eo < Be.length - 2; eo++) Be[eo] = Be[eo + 2];
                  Be[Be.length - 2] = 0, Be[Be.length - 1] = 0, Ot--;
                }
              } else Ot++;
              Be[Ot] = 1, re = !re;
            }
            return Qt ? dt : null;
          }
        }, {
          key: "_decodeCode",
          value: function (Q, se) {
            var re = [0, 0, 0, 0],
              Be = {
                error: Number.MAX_VALUE,
                code: -1,
                start: Q,
                end: Q
              },
              dt = !this._row[Q],
              Ot = 0;
            se || (se = Xo.length);
            for (var Qt = Q; Qt < this._row.length; Qt++) if (this._row[Qt] ^ (dt ? 1 : 0)) re[Ot]++;else {
              if (Ot === re.length - 1) {
                for (var Wn = 0; Wn < se; Wn++) {
                  var Ui = this._matchPattern(re, Xo[Wn]);
                  Be.end = Qt, Ui < Be.error && (Be.code = Wn, Be.error = Ui);
                }
                return Be.error > .48 ? null : Be;
              }
              re[++Ot] = 1, dt = !dt;
            }
            return null;
          }
        }, {
          key: "_findStart",
          value: function () {
            for (var Q = this._nextSet(this._row), se = null; !se;) {
              if (!(se = this._findPattern(Zt, Q, !1, !0))) return null;
              var re = se.start - (se.end - se.start);
              if (re >= 0 && this._matchRange(re, se.start, 0)) return se;
              Q = se.end, se = null;
            }
            return null;
          }
        }, {
          key: "_calculateFirstDigit",
          value: function (Q) {
            for (var se = 0; se < Cr.length; se++) if (Q === Cr[se]) return se;
            return null;
          }
        }, {
          key: "_decodePayload",
          value: function (Q, se, re) {
            for (var Ce = Pe({}, Q), Be = 0, dt = 0; dt < 6; dt++) {
              if (!(Ce = this._decodeCode(Ce.end))) return null;
              Ce.code >= 10 ? (Ce.code -= 10, Be |= 1 << 5 - dt) : Be |= 0 << 5 - dt, se.push(Ce.code), re.push(Ce);
            }
            var Ot = this._calculateFirstDigit(Be);
            if (null === Ot) return null;
            se.unshift(Ot);
            var Qt = this._findPattern(Li, Ce.end, !0, !1);
            if (null === Qt || !Qt.end) return null;
            re.push(Qt);
            for (var Wn = 0; Wn < 6; Wn++) {
              if (!(Qt = this._decodeCode(Qt.end, 10))) return null;
              re.push(Qt), se.push(Qt.code);
            }
            return Qt;
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function (Q) {
            var se = Q.end + (Q.end - Q.start);
            return se < this._row.length && this._matchRange(Q.end, se, 0) ? Q : null;
          }
        }, {
          key: "_findEnd",
          value: function (Q, se) {
            var re = this._findPattern(this.STOP_PATTERN, Q, se, !1);
            return null !== re ? this._verifyTrailingWhitespace(re) : null;
          }
        }, {
          key: "_checksum",
          value: function (Q) {
            for (var se = 0, re = Q.length - 2; re >= 0; re -= 2) se += Q[re];
            se *= 3;
            for (var Ce = Q.length - 1; Ce >= 0; Ce -= 2) se += Q[Ce];
            return se % 10 == 0;
          }
        }, {
          key: "_decodeExtensions",
          value: function (Q) {
            var se = this._nextSet(this._row, Q),
              re = this._findPattern(mo, se, !1, !1);
            if (null === re) return null;
            for (var Ce = 0; Ce < this.supplements.length; Ce++) try {
              var Be = this.supplements[Ce].decode(this._row, re.end);
              if (null !== Be) return {
                code: Be.code,
                start: se,
                startInfo: re,
                end: Be.end,
                decodedCodes: Be.decodedCodes,
                format: this.supplements[Ce].FORMAT
              };
            } catch (dt) {
              console.error("* decodeExtensions error in ", this.supplements[Ce], ": ", dt);
            }
            return null;
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            var re = new Array(),
              Ce = new Array(),
              Be = {},
              dt = this._findStart();
            if (!dt) return null;
            var Ot = {
              start: dt.start,
              end: dt.end
            };
            if (Ce.push(Ot), !(Ot = this._decodePayload(Ot, re, Ce)) || !(Ot = this._findEnd(Ot.end, !1)) || (Ce.push(Ot), !this._checksum(re))) return null;
            if (this.supplements.length > 0) {
              var Qt = this._decodeExtensions(Ot.end);
              if (!Qt || !Qt.decodedCodes) return null;
              var Wn = Qt.decodedCodes[Qt.decodedCodes.length - 1];
              if (!this._verifyTrailingWhitespace({
                start: Wn.start + ((Wn.end - Wn.start) / 2 | 0),
                end: Wn.end
              })) return null;
              Be = {
                supplement: Qt,
                code: re.join("") + Qt.code
              };
            }
            return Pe(Pe({
              code: re.join(""),
              start: dt.start,
              end: Ot.end,
              startInfo: dt,
              decodedCodes: Ce
            }, Be), {}, {
              format: this.FORMAT
            });
          }
        }]);
      }(Mi);
    var Hs = function (Ne) {
      function Qe() {
        var Q;
        C()(this, Qe);
        for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
        return Q = function ys(Ne, Qe, Q) {
          return Qe = Pn()(Qe), Kt()(Ne, function () {
            try {
              var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            } catch {}
            return !!se;
          }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
        }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "ean_2"), Q;
      }
      return xo()(Qe, Ne), f()(Qe, [{
        key: "decode",
        value: function (Q, se) {
          Q && (this._row = Q);
          var re = 0,
            Ce = se,
            Be = this._row.length,
            dt = [],
            Ot = [],
            Qt = null;
          if (void 0 === Ce) return null;
          for (var Wn = 0; Wn < 2 && Ce < Be; Wn++) {
            if (!(Qt = this._decodeCode(Ce))) return null;
            Ot.push(Qt), dt.push(Qt.code % 10), Qt.code >= 10 && (re |= 1 << 1 - Wn), 1 !== Wn && (Ce = this._nextSet(this._row, Qt.end), Ce = this._nextUnset(this._row, Ce));
          }
          if (2 !== dt.length || parseInt(dt.join("")) % 4 !== re) return null;
          var Ui = this._findStart();
          return {
            code: dt.join(""),
            decodedCodes: Ot,
            end: Qt.end,
            format: this.FORMAT,
            startInfo: Ui,
            start: Ui.start
          };
        }
      }]);
    }(Xr);
    var St = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5],
      Wi = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function la(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "ean_5"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "decode",
          value: function (Q, se) {
            if (void 0 === se) return null;
            Q && (this._row = Q);
            for (var re = 0, Ce = se, Be = this._row.length, dt = null, Ot = [], Qt = [], Wn = 0; Wn < 5 && Ce < Be; Wn++) {
              if (!(dt = this._decodeCode(Ce))) return null;
              Qt.push(dt), Ot.push(dt.code % 10), dt.code >= 10 && (re |= 1 << 4 - Wn), 4 !== Wn && (Ce = this._nextSet(this._row, dt.end), Ce = this._nextUnset(this._row, Ce));
            }
            if (5 !== Ot.length || function (eo) {
              for (var Wo = eo.length, Ve = 0, me = Wo - 2; me >= 0; me -= 2) Ve += eo[me];
              Ve *= 3;
              for (var ze = Wo - 1; ze >= 0; ze -= 2) Ve += eo[ze];
              return (Ve *= 3) % 10;
            }(Ot) !== function (eo) {
              for (var Wo = 0; Wo < 10; Wo++) if (eo === St[Wo]) return Wo;
              return null;
            }(re)) return null;
            var Ui = this._findStart();
            return {
              code: Ot.join(""),
              decodedCodes: Qt,
              end: dt.end,
              format: this.FORMAT,
              startInfo: Ui,
              start: Ui.start
            };
          }
        }]);
      }(Xr);
    var Ki = function (Ne) {
      function Qe() {
        var Q;
        C()(this, Qe);
        for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
        return Q = function Pt(Ne, Qe, Q) {
          return Qe = Pn()(Qe), Kt()(Ne, function () {
            try {
              var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            } catch {}
            return !!se;
          }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
        }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "ean_8"), Q;
      }
      return xo()(Qe, Ne), f()(Qe, [{
        key: "_decodePayload",
        value: function (Q, se, re) {
          for (var Ce = Q, Be = 0; Be < 4; Be++) {
            if (!(Ce = this._decodeCode(Ce.end, 10))) return null;
            se.push(Ce.code), re.push(Ce);
          }
          if (null === (Ce = this._findPattern(Li, Ce.end, !0, !1))) return null;
          re.push(Ce);
          for (var dt = 0; dt < 4; dt++) {
            if (!(Ce = this._decodeCode(Ce.end, 10))) return null;
            re.push(Ce), se.push(Ce.code);
          }
          return Ce;
        }
      }]);
    }(Xr);
    var oa = function (Ne) {
      function Qe(Q) {
        var se;
        return C()(this, Qe), se = function Nr(Ne, Qe, Q) {
          return Qe = Pn()(Qe), Kt()(Ne, function () {
            try {
              var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            } catch {}
            return !!se;
          }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
        }(this, Qe, [N()({
          normalizeBarSpaceWidth: !1
        }, Q)]), h()(se, "barSpaceRatio", [1, 1]), h()(se, "SINGLE_CODE_ERROR", .78), h()(se, "AVG_CODE_ERROR", .38), h()(se, "START_PATTERN", [1, 1, 1, 1]), h()(se, "STOP_PATTERN", [1, 1, 3]), h()(se, "CODE_PATTERN", [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]]), h()(se, "MAX_CORRECTION_FACTOR", 5), h()(se, "FORMAT", "i2of5"), Q.normalizeBarSpaceWidth && (se.SINGLE_CODE_ERROR = .38, se.AVG_CODE_ERROR = .09), se.config = Q, Kt()(se, se);
      }
      return xo()(Qe, Ne), f()(Qe, [{
        key: "_matchPattern",
        value: function (Q, se) {
          if (this.config.normalizeBarSpaceWidth) {
            for (var re = [0, 0], Ce = [0, 0], Be = [0, 0], dt = this.MAX_CORRECTION_FACTOR, Ot = 1 / dt, Qt = 0; Qt < Q.length; Qt++) re[Qt % 2] += Q[Qt], Ce[Qt % 2] += se[Qt];
            Be[0] = Ce[0] / re[0], Be[1] = Ce[1] / re[1], Be[0] = Math.max(Math.min(Be[0], dt), Ot), Be[1] = Math.max(Math.min(Be[1], dt), Ot), this.barSpaceRatio = Be;
            for (var Wn = 0; Wn < Q.length; Wn++) Q[Wn] *= this.barSpaceRatio[Wn % 2];
          }
          return (Ui = Qe, "_matchPattern", Wo = this, 3, "function" == typeof (me = Ka()(Pn()(Ui.prototype), "_matchPattern", Wo)) ? function (ze) {
            return me.apply(Wo, ze);
          } : me)([Q, se]);
          var Ui, Wo, me;
        }
      }, {
        key: "_findPattern",
        value: function (Q, se) {
          var re = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ce = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Be = new Array(Q.length).fill(0),
            dt = 0,
            Ot = {
              error: Number.MAX_VALUE,
              start: 0,
              end: 0
            },
            Qt = this.AVG_CODE_ERROR;
          re = re || !1, Ce = Ce || !1, se || (se = this._nextSet(this._row));
          for (var Wn = se; Wn < this._row.length; Wn++) if (this._row[Wn] ^ (re ? 1 : 0)) Be[dt]++;else {
            if (dt === Be.length - 1) {
              var Ui = Be.reduce(function (Ve, me) {
                  return Ve + me;
                }, 0),
                eo = this._matchPattern(Be, Q);
              if (eo < Qt) return Ot.error = eo, Ot.start = Wn - Ui, Ot.end = Wn, Ot;
              if (!Ce) return null;
              for (var Wo = 0; Wo < Be.length - 2; Wo++) Be[Wo] = Be[Wo + 2];
              Be[Be.length - 2] = 0, Be[Be.length - 1] = 0, dt--;
            } else dt++;
            Be[dt] = 1, re = !re;
          }
          return null;
        }
      }, {
        key: "_findStart",
        value: function () {
          for (var Q = 0, se = this._nextSet(this._row), re = null, Ce = 1; !re;) {
            if (!(re = this._findPattern(this.START_PATTERN, se, !1, !0))) return null;
            if (Ce = Math.floor((re.end - re.start) / 4), (Q = re.start - 10 * Ce) >= 0 && this._matchRange(Q, re.start, 0)) return re;
            se = re.end, re = null;
          }
          return null;
        }
      }, {
        key: "_verifyTrailingWhitespace",
        value: function (Q) {
          var se = Q.end + (Q.end - Q.start) / 2;
          return se < this._row.length && this._matchRange(Q.end, se, 0) ? Q : null;
        }
      }, {
        key: "_findEnd",
        value: function () {
          this._row.reverse();
          var Q = this._findPattern(this.STOP_PATTERN);
          if (this._row.reverse(), null === Q) return null;
          var se = Q.start;
          return Q.start = this._row.length - Q.end, Q.end = this._row.length - se, null !== Q ? this._verifyTrailingWhitespace(Q) : null;
        }
      }, {
        key: "_decodePair",
        value: function (Q) {
          for (var se = [], re = 0; re < Q.length; re++) {
            var Ce = this._decodeCode(Q[re]);
            if (!Ce) return null;
            se.push(Ce);
          }
          return se;
        }
      }, {
        key: "_decodeCode",
        value: function (Q) {
          for (var se = this.AVG_CODE_ERROR, re = {
              error: Number.MAX_VALUE,
              code: -1,
              start: 0,
              end: 0
            }, Ce = 0; Ce < this.CODE_PATTERN.length; Ce++) {
            var Be = this._matchPattern(Q, this.CODE_PATTERN[Ce]);
            Be < re.error && (re.code = Ce, re.error = Be);
          }
          return re.error < se ? re : null;
        }
      }, {
        key: "_decodePayload",
        value: function (Q, se, re) {
          for (var Ce = 0, Be = Q.length, dt = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], Ot = null; Ce < Be;) {
            for (var Qt = 0; Qt < 5; Qt++) dt[0][Qt] = Q[Ce] * this.barSpaceRatio[0], dt[1][Qt] = Q[Ce + 1] * this.barSpaceRatio[1], Ce += 2;
            if (!(Ot = this._decodePair(dt))) return null;
            for (var Wn = 0; Wn < Ot.length; Wn++) se.push(Ot[Wn].code + ""), re.push(Ot[Wn]);
          }
          return Ot;
        }
      }, {
        key: "_verifyCounterLength",
        value: function (Q) {
          return Q.length % 10 == 0;
        }
      }, {
        key: "decode",
        value: function (Q, se) {
          var re = new Array(),
            Ce = new Array(),
            Be = this._findStart();
          if (!Be) return null;
          Ce.push(Be);
          var dt = this._findEnd();
          if (!dt) return null;
          var Ot = this._fillCounters(Be.end, dt.start, !1);
          return this._verifyCounterLength(Ot) && this._decodePayload(Ot, re, Ce) ? re.length % 2 != 0 || re.length < 6 ? null : (Ce.push(dt), {
            code: re.join(""),
            start: Be.start,
            end: dt.end,
            startInfo: Be,
            decodedCodes: Ce,
            format: this.FORMAT
          }) : null;
        }
      }]);
    }(Mi);
    function er(Ne, Qe) {
      var Q = typeof Symbol < "u" && Ne[Symbol.iterator] || Ne["@@iterator"];
      if (!Q) {
        if (Array.isArray(Ne) || (Q = function (Ot, Qt) {
          if (Ot) {
            if ("string" == typeof Ot) return Qr(Ot, undefined);
            var Wn = {}.toString.call(Ot).slice(8, -1);
            return "Object" === Wn && Ot.constructor && (Wn = Ot.constructor.name), "Map" === Wn || "Set" === Wn ? Array.from(Ot) : "Arguments" === Wn || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wn) ? Qr(Ot, undefined) : void 0;
          }
        }(Ne)) || Qe && Ne && "number" == typeof Ne.length) {
          Q && (Ne = Q);
          var se = 0,
            re = function () {};
          return {
            s: re,
            n: function () {
              return se >= Ne.length ? {
                done: !0
              } : {
                done: !1,
                value: Ne[se++]
              };
            },
            e: function (Ot) {
              throw Ot;
            },
            f: re
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var Ce,
        Be = !0,
        dt = !1;
      return {
        s: function () {
          Q = Q.call(Ne);
        },
        n: function () {
          var Ot = Q.next();
          return Be = Ot.done, Ot;
        },
        e: function (Ot) {
          dt = !0, Ce = Ot;
        },
        f: function () {
          try {
            Be || null == Q.return || Q.return();
          } finally {
            if (dt) throw Ce;
          }
        }
      };
    }
    function Qr(Ne, Qe) {
      (null == Qe || Qe > Ne.length) && (Qe = Ne.length);
      for (var Q = 0, se = Array(Qe); Q < Qe; Q++) se[Q] = Ne[Q];
      return se;
    }
    var Uc = [2, 2.5, 3],
      Kl = function (Ne) {
        function Qe() {
          var Q,
            se = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return C()(this, Qe), Q = function Il(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [se]), h()(Q, "FORMAT", "pharmacode"), h()(Q, "SINGLE_CODE_ERROR", .7), h()(Q, "AVG_CODE_ERROR", .48), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "_findStart",
          value: function () {
            for (var Q = 0; Q < this._row.length;) {
              var se = this._nextSet(this._row, Q);
              if (se >= this._row.length) return null;
              for (var re = se; re < this._row.length && this._row[re];) re++;
              var Ce = re - se;
              if (Ce < 5) Q = re + 1;else {
                var Be = se - Math.max(2 * Ce, 20);
                if (Be < 0) Q = re + 1;else if (this._matchRange(Be, se, 0)) {
                  var dt = Math.max(10 * Ce, 50),
                    Ot = this._nextSet(this._row, re);
                  if (Ot >= this._row.length) Q = re + 1;else {
                    if (!(Ot - re > dt)) return {
                      start: se,
                      end: re
                    };
                    Q = re + 1;
                  }
                } else Q = re + 1;
              }
            }
            return null;
          }
        }, {
          key: "_smoothBarWidths",
          value: function (Q) {
            if (Q.length <= 2) return Q;
            for (var se = Q.slice(), re = 1; re < se.length - 1; re++) {
              var Be = se[re],
                dt = [se[re - 1], Be, se[re + 1]].sort(function (Qt, Wn) {
                  return Qt - Wn;
                })[1],
                Ot = Math.abs(Be - dt);
              Ot > 0 && Ot <= 3 && (se[re] = dt);
            }
            return se;
          }
        }, {
          key: "_extractBarsAndSpaces",
          value: function (Q) {
            for (var se = [], re = [], Ce = Q, Be = 0, dt = !1; Ce < this._row.length && this._row[Ce];) Be++, Ce++;
            if (0 === Be) return null;
            for (se.push(Be), Be = 0; Ce < this._row.length && !this._row[Ce];) Be++, Ce++;
            if (0 === Be || Ce >= this._row.length) return null;
            re.push(Be);
            for (var Ot = 6 * (se[0] < re[0] ? se[0] : .8 * re[0]), Qt = 2.5 * re[0]; Ce < this._row.length && se.length < 16;) {
              for (Be = 0; Ce < this._row.length && this._row[Ce];) Be++, Ce++;
              if (0 === Be) break;
              se.push(Be), Be = 0;
              for (var Wn = Ce; Ce < this._row.length && !this._row[Ce];) Be++, Ce++;
              if (0 === Be) break;
              if (Be >= Ot) {
                dt = !0, Ce = Wn;
                break;
              }
              if (se.length >= 2 && Be >= Qt) {
                dt = !0, Ce = Wn;
                break;
              }
              if (Ce >= this._row.length) {
                dt = !0, Ce = Wn;
                break;
              }
              re.push(Be), re.length >= 2 && (Qt = re.reduce(function (Ui, eo) {
                return Ui + eo;
              }, 0) / re.length * 2);
            }
            return dt ? se.length < 2 || se.length > 16 || re.length !== se.length - 1 ? null : this._validateSpaces(re) && this._validateBarSizeCount(se) ? {
              bars: this._smoothBarWidths(se),
              spaces: re,
              end: Ce
            } : null : null;
          }
        }, {
          key: "_validateBarSizeCount",
          value: function (Q) {
            if (0 === Q.length) return !1;
            var se,
              re = [],
              Ce = er(Q);
            try {
              for (Ce.s(); !(se = Ce.n()).done;) {
                var Be,
                  dt = se.value,
                  Ot = !1,
                  Qt = er(re);
                try {
                  for (Qt.s(); !(Be = Qt.n()).done;) {
                    var Wn = Be.value,
                      Ui = Wn.reduce(function (eo, Wo) {
                        return eo + Wo;
                      }, 0) / Wn.length;
                    if (Math.abs(dt - Ui) <= .35 * Ui) {
                      Wn.push(dt), Ot = !0;
                      break;
                    }
                  }
                } catch (eo) {
                  Qt.e(eo);
                } finally {
                  Qt.f();
                }
                Ot || re.push([dt]);
              }
            } catch (eo) {
              Ce.e(eo);
            } finally {
              Ce.f();
            }
            return !(re.length > 2);
          }
        }, {
          key: "_validateSpaces",
          value: function (Q) {
            if (0 === Q.length) return !0;
            var se = Q.reduce(function (Ce, Be) {
              return Ce + Be;
            }, 0) / Q.length;
            if (0 === se) return !1;
            var re = Q.reduce(function (Ce, Be) {
              return Ce + Math.pow(Be - se, 2);
            }, 0) / Q.length;
            return Math.sqrt(re) / se <= .35;
          }
        }, {
          key: "_validateBarRatios",
          value: function (Q, se) {
            var re = Q.reduce(function (Cl, lc) {
                return Cl + lc;
              }, 0) / Q.length,
              Ce = Q.reduce(function (Cl, lc) {
                return Cl + Math.abs(lc - re);
              }, 0) / Q.length;
            if ((0 === re ? 0 : Ce / re) <= .1) {
              var Be = se.length > 0 ? se.reduce(function (Cl, lc) {
                return Cl + lc;
              }, 0) / se.length : 0;
              return Be > 0 && Be / re < .7 ? {
                narrowWidth: re / 2.5,
                wideRatio: 2.5
              } : {
                narrowWidth: re,
                wideRatio: 2
              };
            }
            var dt = Array.from(new Set(Q.slice().sort(function (Cl, lc) {
              return Cl - lc;
            })));
            if (dt.length < 2) return {
              narrowWidth: Q.reduce(function (Cl, lc) {
                return Cl + lc;
              }, 0) / Q.length,
              wideRatio: 2
            };
            for (var Ot = [], Qt = 0; Qt < dt.length - 1; Qt++) {
              var Wn,
                Ui = (dt[Qt] + dt[Qt + 1]) / 2,
                eo = [],
                Wo = [],
                Ve = er(Q);
              try {
                for (Ve.s(); !(Wn = Ve.n()).done;) {
                  var me = Wn.value;
                  me < Ui ? eo.push(me) : Wo.push(me);
                }
              } catch (Cl) {
                Ve.e(Cl);
              } finally {
                Ve.f();
              }
              if (0 !== eo.length && 0 !== Wo.length) {
                for (var ze = eo.reduce(function (Cl, lc) {
                    return Cl + lc;
                  }, 0) / eo.length, xt = Wo.reduce(function (Cl, lc) {
                    return Cl + lc;
                  }, 0) / Wo.length, wn = xt / ze, Ai = Uc[0], _o = Math.abs(wn - Ai), mr = 0, Yr = Uc; mr < Yr.length; mr++) {
                  var es = Yr[mr],
                    Jr = Math.abs(wn - es);
                  Jr < _o && (_o = Jr, Ai = es);
                }
                Ot.push({
                  threshold: Ui,
                  narrowBars: eo,
                  wideBars: Wo,
                  avgN: ze,
                  avgW: xt,
                  ratio: wn,
                  ratioDiff: _o,
                  matchedRatio: Ai
                });
              }
            }
            Ot.sort(function (Cl, lc) {
              return Cl.ratioDiff - lc.ratioDiff;
            });
            for (var Ca = 0, Ra = Ot; Ca < Ra.length; Ca++) {
              var Ta = Ra[Ca],
                Qa = .05 * Ta.matchedRatio;
              if (!(Math.abs(Ta.ratio - Ta.matchedRatio) > Qa)) {
                var Vc,
                  fc = .15 * Ta.avgN,
                  Ac = .15 * Ta.avgW,
                  cu = !0,
                  $a = er(Ta.narrowBars);
                try {
                  for ($a.s(); !(Vc = $a.n()).done;) if (Math.abs(Vc.value - Ta.avgN) > fc) {
                    cu = !1;
                    break;
                  }
                } catch (Cl) {
                  $a.e(Cl);
                } finally {
                  $a.f();
                }
                if (cu) {
                  var uu,
                    jl = er(Ta.wideBars);
                  try {
                    for (jl.s(); !(uu = jl.n()).done;) if (Math.abs(uu.value - Ta.avgW) > Ac) {
                      cu = !1;
                      break;
                    }
                  } catch (Cl) {
                    jl.e(Cl);
                  } finally {
                    jl.f();
                  }
                  if (cu) return {
                    narrowWidth: Ta.avgN,
                    wideRatio: Ta.matchedRatio
                  };
                }
              }
            }
            return null;
          }
        }, {
          key: "_validatePeriodicity",
          value: function (Q, se) {
            if (Q.length > 0) {
              var re = Q.reduce(function (Wn, Ui) {
                  return Wn + Ui;
                }, 0) / Q.length,
                Ce = Q.reduce(function (Wn, Ui) {
                  return Wn + Math.pow(Ui - re, 2);
                }, 0) / Q.length,
                Be = Math.sqrt(Ce);
              if ((0 !== re ? Be / re : 0) > .65) return !1;
            }
            if (se.length > 0) {
              var dt = se.reduce(function (Wn, Ui) {
                  return Wn + Ui;
                }, 0) / se.length,
                Ot = se.reduce(function (Wn, Ui) {
                  return Wn + Math.pow(Ui - dt, 2);
                }, 0) / se.length,
                Qt = Math.sqrt(Ot);
              if ((0 !== dt ? Qt / dt : 0) > .55) return !1;
            }
            return !0;
          }
        }, {
          key: "_validateQuietZones",
          value: function (Q, se, re) {
            var Ce = 1 * se;
            if (Q.start >= 2 && Q.start < Ce) return !1;
            var Be = this._row.length - re;
            return Be < 6 || !(Be < Ce);
          }
        }, {
          key: "_decodeBars",
          value: function (Q, se) {
            for (var re = 1.6 * (se ?? Math.min.apply(Math, ul()(Q))), Ce = 0, Be = Q.slice().reverse(), dt = 0; dt < Be.length; dt++) Ce += Be[dt] > re ? Math.pow(2, dt + 1) : Math.pow(2, dt);
            for (var Ot = "", Qt = Be.length - 1; Qt >= 0; Qt--) Ot += Be[Qt] > re ? "W" : "N";
            return {
              value: Ce,
              pattern: Ot
            };
          }
        }, {
          key: "_verifyTrailingWhitespace",
          value: function (Q, se) {
            var re = Math.min(Q + 2 * se, this._row.length);
            return this._matchRange(Q, re, 0);
          }
        }, {
          key: "_validatePatternConsistency",
          value: function (Q, se) {
            for (var re = Q.start, Ce = 0, Be = 0, dt = 0, Ot = [-2, -1, 1, 2]; dt < Ot.length; dt++) {
              var Qt = re + Ot[dt];
              if (!(Qt < 0 || Qt >= this._row.length)) {
                Be++;
                var Wn = this._extractBarsAndSpaces(Qt);
                if (Wn && Wn.bars.length === se.length) {
                  for (var Ui = !0, eo = 0; eo < se.length; eo++) if (Math.abs(Wn.bars[eo] - se[eo]) / Math.max(se[eo], 1) > .25) {
                    Ui = !1;
                    break;
                  }
                  Ui && Ce++;
                }
              }
            }
            return Be > 0 && Ce >= .5 * Be;
          }
        }, {
          key: "decode",
          value: function (Q, se) {
            var re = this._findStart();
            if (!re || re.start > .5 * this._row.length) return null;
            var Ce = this._extractBarsAndSpaces(re.start);
            if (!Ce) return null;
            var Be = Ce.bars,
              dt = Ce.spaces,
              Ot = Ce.end;
            if (Be.reduce(function (Ve, me) {
              return Ve + me;
            }, 0) + dt.reduce(function (Ve, me) {
              return Ve + me;
            }, 0) < 20 || this._row.length - Ot < 0 || !this._validateSpaces(dt) || !this._validatePeriodicity(Be, dt) || !this._validatePatternConsistency(re, Be)) return null;
            var Qt = this._validateBarRatios(Be, dt);
            if (!Qt || !this._validateQuietZones(re, Qt.narrowWidth, Ot)) return null;
            var Wn = this._decodeBars(Be, Qt.narrowWidth);
            if (!Wn) return null;
            var Ui = Wn.value;
            if (Ui < 3 || Ui > 131070) return null;
            var eo = Be.reduce(function (Ve, me) {
              return Ve + me;
            }, 0) / Be.length;
            this._verifyTrailingWhitespace(Ot, eo);
            var Wo = Be.map(function (Ve, me) {
              return {
                code: Ve > 1.6 * Math.min.apply(Math, ul()(Be)) ? 1 : 0,
                start: 0,
                end: 0,
                error: 0
              };
            });
            return {
              code: Ui.toString(),
              start: re.start,
              end: Ot,
              startInfo: re,
              decodedCodes: Wo,
              pattern: Wn.pattern,
              format: this.FORMAT
            };
          }
        }]);
      }(Mi);
    h()(Kl, "adjacentLineValidationMatches", 1);
    var Wl = Kl;
    function nc(Ne, Qe) {
      var Q = Object.keys(Ne);
      if (Object.getOwnPropertySymbols) {
        var se = Object.getOwnPropertySymbols(Ne);
        Qe && (se = se.filter(function (re) {
          return Object.getOwnPropertyDescriptor(Ne, re).enumerable;
        })), Q.push.apply(Q, se);
      }
      return Q;
    }
    function Yc(Ne, Qe, Q, se) {
      var re = Ka()(Pn()(1 & se ? Ne.prototype : Ne), Qe, Q);
      return 2 & se && "function" == typeof re ? function (Ce) {
        return re.apply(Q, Ce);
      } : re;
    }
    var nu = function (Ne) {
      function Qe() {
        var Q;
        C()(this, Qe);
        for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
        return Q = function Zc(Ne, Qe, Q) {
          return Qe = Pn()(Qe), Kt()(Ne, function () {
            try {
              var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            } catch {}
            return !!se;
          }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
        }(this, Qe, [].concat(re)), h()(Q, "CODE_FREQUENCY", [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]), h()(Q, "STOP_PATTERN", [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]), h()(Q, "FORMAT", "upc_e"), Q;
      }
      return xo()(Qe, Ne), f()(Qe, [{
        key: "_decodePayload",
        value: function (Q, se, re) {
          for (var Ce = function (Ot) {
              for (var Qt = 1; Qt < arguments.length; Qt++) {
                var Wn = null != arguments[Qt] ? arguments[Qt] : {};
                Qt % 2 ? nc(Object(Wn), !0).forEach(function (Ui) {
                  h()(Ot, Ui, Wn[Ui]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Ot, Object.getOwnPropertyDescriptors(Wn)) : nc(Object(Wn)).forEach(function (Ui) {
                  Object.defineProperty(Ot, Ui, Object.getOwnPropertyDescriptor(Wn, Ui));
                });
              }
              return Ot;
            }({}, Q), Be = 0, dt = 0; dt < 6; dt++) {
            if (!(Ce = this._decodeCode(Ce.end))) return null;
            Ce.code >= 10 && (Ce.code = Ce.code - 10, Be |= 1 << 5 - dt), se.push(Ce.code), re.push(Ce);
          }
          return this._determineParity(Be, se) ? Ce : null;
        }
      }, {
        key: "_determineParity",
        value: function (Q, se) {
          for (var re = 0; re < this.CODE_FREQUENCY.length; re++) for (var Ce = 0; Ce < this.CODE_FREQUENCY[re].length; Ce++) if (Q === this.CODE_FREQUENCY[re][Ce]) return se.unshift(re), se.push(Ce), !0;
          return !1;
        }
      }, {
        key: "_convertToUPCA",
        value: function (Q) {
          var se = [Q[0]],
            re = Q[Q.length - 2];
          return (se = re <= 2 ? se.concat(Q.slice(1, 3)).concat([re, 0, 0, 0, 0]).concat(Q.slice(3, 6)) : 3 === re ? se.concat(Q.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(Q.slice(4, 6)) : 4 === re ? se.concat(Q.slice(1, 5)).concat([0, 0, 0, 0, 0, Q[5]]) : se.concat(Q.slice(1, 6)).concat([0, 0, 0, 0, re])).push(Q[Q.length - 1]), se;
        }
      }, {
        key: "_checksum",
        value: function (Q) {
          return Yc(Qe, "_checksum", this, 3)([this._convertToUPCA(Q)]);
        }
      }, {
        key: "_findEnd",
        value: function (Q, se) {
          return Yc(Qe, "_findEnd", this, 3)([Q, !0]);
        }
      }, {
        key: "_verifyTrailingWhitespace",
        value: function (Q) {
          var se = Q.end + (Q.end - Q.start) / 2;
          return se < this._row.length && this._matchRange(Q.end, se, 0) ? Q : null;
        }
      }]);
    }(Xr);
    var mu = function (Ne) {
        function Qe() {
          var Q;
          C()(this, Qe);
          for (var se = arguments.length, re = new Array(se), Ce = 0; Ce < se; Ce++) re[Ce] = arguments[Ce];
          return Q = function kl(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [].concat(re)), h()(Q, "FORMAT", "upc_a"), Q;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "decode",
          value: function (Q, se) {
            var re = Xr.prototype.decode.call(this);
            return re && re.code && 13 === re.code.length && "0" === re.code.charAt(0) ? (re.code = re.code.substring(1), re) : null;
          }
        }]);
      }(Xr),
      Wc = {},
      gc_UP = 1,
      gc_DOWN = -1;
    Wc.getBarcodeLine = function (Ne, Qe, Q) {
      var se,
        re,
        Ce,
        Be,
        dt,
        Ot = 0 | Qe.x,
        Qt = 0 | Qe.y,
        Wn = 0 | Q.x,
        Ui = 0 | Q.y,
        eo = Math.abs(Ui - Qt) > Math.abs(Wn - Ot),
        Wo = [],
        Ve = Ne.data,
        me = Ne.size.x,
        ze = 255,
        xt = 0;
      function wn(Yr, es) {
        ze = (dt = Ve[es * me + Yr]) < ze ? dt : ze, xt = dt > xt ? dt : xt, Wo.push(dt);
      }
      eo && (Ce = Ot, Ot = Qt, Qt = Ce, Ce = Wn, Wn = Ui, Ui = Ce), Ot > Wn && (Ce = Ot, Ot = Wn, Wn = Ce, Ce = Qt, Qt = Ui, Ui = Ce);
      var Ai = Wn - Ot,
        _o = Math.abs(Ui - Qt);
      se = Ai / 2 | 0, re = Qt;
      var mr = Qt < Ui ? 1 : -1;
      for (Be = Ot; Be < Wn; Be++) eo ? wn(re, Be) : wn(Be, re), (se -= _o) < 0 && (re += mr, se += Ai);
      return {
        line: Wo,
        min: ze,
        max: xt
      };
    }, Wc.toBinaryLine = function (Ne) {
      var Qe,
        Q,
        se,
        re,
        Ce,
        Be,
        dt = Ne.min,
        Ot = Ne.max,
        Qt = Ne.line,
        Wn = dt + (Ot - dt) / 2,
        Ui = [],
        eo = (Ot - dt) / 12,
        Wo = -eo;
      for (se = Qt[0] > Wn ? gc_UP : gc_DOWN, Ui.push({
        pos: 0,
        val: Qt[0]
      }), Ce = 0; Ce < Qt.length - 2; Ce++) se !== (re = (Qe = Qt[Ce + 1] - Qt[Ce]) + (Q = Qt[Ce + 2] - Qt[Ce + 1]) < Wo && Qt[Ce + 1] < 1.5 * Wn ? gc_DOWN : Qe + Q > eo && Qt[Ce + 1] > .5 * Wn ? gc_UP : se) && (Ui.push({
        pos: Ce,
        val: Qt[Ce]
      }), se = re);
      for (Ui.push({
        pos: Qt.length,
        val: Qt[Qt.length - 1]
      }), Be = Ui[0].pos; Be < Ui[1].pos; Be++) Qt[Be] = Qt[Be] > Wn ? 0 : 1;
      for (Ce = 1; Ce < Ui.length - 1; Ce++) for (eo = Ui[Ce + 1].val > Ui[Ce].val ? Ui[Ce].val + (Ui[Ce + 1].val - Ui[Ce].val) / 3 * 2 | 0 : Ui[Ce + 1].val + (Ui[Ce].val - Ui[Ce + 1].val) / 3 | 0, Be = Ui[Ce].pos; Be < Ui[Ce + 1].pos; Be++) Qt[Be] = Qt[Be] > eo ? 0 : 1;
      return {
        line: Qt,
        threshold: eo
      };
    }, Wc.debug = {
      printFrequency: function (Ne, Qe) {
        var Q,
          se = Qe.getContext("2d");
        for (Qe.width = Ne.length, Qe.height = 256, se.beginPath(), se.strokeStyle = "blue", Q = 0; Q < Ne.length; Q++) se.moveTo(Q, 255), se.lineTo(Q, 255 - Ne[Q]);
        se.stroke(), se.closePath();
      },
      printPattern: function (Ne, Qe) {
        var Q,
          se = Qe.getContext("2d");
        for (Qe.width = Ne.length, se.fillColor = "black", Q = 0; Q < Ne.length; Q++) 1 === Ne[Q] && se.fillRect(Q, 0, 1, 100);
      }
    };
    var ir = Wc;
    function Hr(Ne, Qe) {
      var Q = typeof Symbol < "u" && Ne[Symbol.iterator] || Ne["@@iterator"];
      if (!Q) {
        if (Array.isArray(Ne) || (Q = function (Ot, Qt) {
          if (Ot) {
            if ("string" == typeof Ot) return Ar(Ot, undefined);
            var Wn = {}.toString.call(Ot).slice(8, -1);
            return "Object" === Wn && Ot.constructor && (Wn = Ot.constructor.name), "Map" === Wn || "Set" === Wn ? Array.from(Ot) : "Arguments" === Wn || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wn) ? Ar(Ot, undefined) : void 0;
          }
        }(Ne)) || Qe && Ne && "number" == typeof Ne.length) {
          Q && (Ne = Q);
          var se = 0,
            re = function () {};
          return {
            s: re,
            n: function () {
              return se >= Ne.length ? {
                done: !0
              } : {
                done: !1,
                value: Ne[se++]
              };
            },
            e: function (Ot) {
              throw Ot;
            },
            f: re
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var Ce,
        Be = !0,
        dt = !1;
      return {
        s: function () {
          Q = Q.call(Ne);
        },
        n: function () {
          var Ot = Q.next();
          return Be = Ot.done, Ot;
        },
        e: function (Ot) {
          dt = !0, Ce = Ot;
        },
        f: function () {
          try {
            Be || null == Q.return || Q.return();
          } finally {
            if (dt) throw Ce;
          }
        }
      };
    }
    function Ar(Ne, Qe) {
      (null == Qe || Qe > Ne.length) && (Qe = Ne.length);
      for (var Q = 0, se = Array(Qe); Q < Qe; Q++) se[Q] = Ne[Q];
      return se;
    }
    var Ds = {
        code_128_reader: ks,
        ean_reader: Xr,
        ean_5_reader: Wi,
        ean_2_reader: Hs,
        ean_8_reader: Ki,
        code_39_reader: ro,
        code_39_vin_reader: dl,
        codabar_reader: vr,
        upc_reader: mu,
        upc_e_reader: nu,
        i2of5_reader: oa,
        "2of5_reader": gt,
        code_93_reader: Si,
        code_32_reader: as,
        pharmacode_reader: Wl
      },
      wa = {
        registerReader: function (Ne, Qe) {
          Ds[Ne] = Qe;
        },
        create: function (Ne, Qe) {
          var se = [];
          function re() {
            Ne.readers.forEach(function (Qt) {
              var Wn,
                Ui = {},
                eo = [];
              "object" === b()(Qt) ? (Wn = Qt.format, Ui = Qt.config) : "string" == typeof Qt && (Wn = Qt), Ui.supplements && (eo = Ui.supplements.map(function (Ve) {
                return new Ds[Ve]();
              }));
              try {
                var Wo = new Ds[Wn](Ui, eo);
                se.push(Wo);
              } catch (Ve) {
                throw console.error("* Error constructing reader ", Wn, Ve), Ve;
              }
            });
          }
          function Ce(Qt) {
            var Wn,
              Ui = null,
              eo = ir.getBarcodeLine(Qe, Qt[0], Qt[1]);
            ir.toBinaryLine(eo);
            var Wo = -1;
            for (Wn = 0; Wn < se.length && null === Ui; Wn++) "function" == typeof se[Wn].setImageWrapper && se[Wn].setImageWrapper(Qe), null !== (Ui = se[Wn].decodePattern(eo.line)) && (Wo = Wn);
            return null === Ui || Wo >= 0 && se[Wo] instanceof Wl && !function (Ve, me, ze, xt) {
              var wn = Math.round(Ve[1].y),
                Ai = me.start,
                _o = ze.constructor,
                mr = _o && _o.adjacentLineValidationMatches || 0;
              if (mr <= 0) return !0;
              for (var Yr = 0, es = !1, Jr = 0, Ca = [1, 2, 3]; Jr < Ca.length; Jr++) {
                var Ra = Ca[Jr];
                if (es) break;
                for (var Ta = 0, Qa = [-1, 1]; Ta < Qa.length; Ta++) {
                  var Vc = Qa[Ta];
                  if (es) break;
                  var fc = wn + Ra * Vc;
                  if (!(fc < 0 || fc >= xt.size.y)) {
                    var Ac = {
                        x: Ve[0].x,
                        y: fc
                      },
                      cu = {
                        x: Ve[1].x,
                        y: fc
                      };
                    try {
                      var $a = ir.getBarcodeLine(xt, Ac, cu);
                      ir.toBinaryLine($a), ze._row = $a.line;
                      var eu = ze._findStart();
                      if (null !== eu && eu.start === Ai && ++Yr >= mr) {
                        es = !0;
                        break;
                      }
                    } catch {}
                  }
                }
              }
              return Yr >= mr;
            }(Qt, Ui, se[Wo], Qe) ? null : {
              codeResult: Ui,
              barcodeLine: eo
            };
          }
          function Be(Qt) {
            return dt.apply(this, arguments);
          }
          function dt() {
            return (dt = Gi()(zi.a.mark(function Qt(Wn) {
              var Ui, eo, Wo, Ve, me;
              return zi.a.wrap(function (ze) {
                for (;;) switch (ze.prev = ze.next) {
                  case 0:
                    Ui = null, eo = Hr(se), ze.prev = 1, eo.s();
                  case 2:
                    if ((Wo = eo.n()).done) {
                      ze.next = 5;
                      break;
                    }
                    if (!(Ve = Wo.value).decodeImage) {
                      ze.next = 4;
                      break;
                    }
                    return ze.next = 3, Ve.decodeImage(Wn);
                  case 3:
                    if (!(Ui = ze.sent)) {
                      ze.next = 4;
                      break;
                    }
                    return ze.abrupt("continue", 5);
                  case 4:
                    ze.next = 2;
                    break;
                  case 5:
                    ze.next = 7;
                    break;
                  case 6:
                    ze.prev = 6, me = ze.catch(1), eo.e(me);
                  case 7:
                    return ze.prev = 7, eo.f(), ze.finish(7);
                  case 8:
                    return ze.abrupt("return", Ui);
                  case 9:
                  case "end":
                    return ze.stop();
                }
              }, Qt, null, [[1, 6, 7, 8]]);
            }))).apply(this, arguments);
          }
          function Ot(Qt) {
            var Wn,
              Ui,
              Ve,
              eo = function (Ve) {
                return Math.sqrt(Math.pow(Math.abs(Ve[1].y - Ve[0].y), 2) + Math.pow(Math.abs(Ve[1].x - Ve[0].x), 2));
              }(Wn = [{
                x: ((Ve = Qt)[1][0] - Ve[0][0]) / 2 + Ve[0][0],
                y: (Ve[1][1] - Ve[0][1]) / 2 + Ve[0][1]
              }, {
                x: (Ve[3][0] - Ve[2][0]) / 2 + Ve[2][0],
                y: (Ve[3][1] - Ve[2][1]) / 2 + Ve[2][1]
              }]),
              Wo = Math.atan2(Wn[1].y - Wn[0].y, Wn[1].x - Wn[0].x);
            return null === (Wn = function (Ve, me, ze) {
              function xt(wn) {
                var Ai = wn * Math.sin(me),
                  _o = wn * Math.cos(me);
                Ve[0].y -= Ai, Ve[0].x -= _o, Ve[1].y += Ai, Ve[1].x += _o;
              }
              for (xt(ze); ze > 1 && (!Qe.inImageWithBorder(Ve[0]) || !Qe.inImageWithBorder(Ve[1]));) xt(-(ze -= Math.ceil(ze / 2)));
              return Ve;
            }(Wn, Wo, Math.floor(.1 * eo))) ? null : (null === (Ui = Ce(Wn)) && (Ui = function (Ve, me, ze) {
              var xt,
                wn,
                Ai,
                _o = Math.sqrt(Math.pow(Ve[1][0] - Ve[0][0], 2) + Math.pow(Ve[1][1] - Ve[0][1], 2)),
                mr = null,
                Yr = Math.sin(ze),
                es = Math.cos(ze);
              for (xt = 1; xt < 16 && null === mr; xt++) Ai = {
                y: (wn = _o / 16 * xt * (xt % 2 == 0 ? -1 : 1)) * Yr,
                x: wn * es
              }, me[0].y += Ai.x, me[0].x -= Ai.y, me[1].y += Ai.x, me[1].x -= Ai.y, mr = Ce(me);
              return mr;
            }(Qt, Wn, Wo)), null === Ui ? null : {
              codeResult: Ui.codeResult,
              line: Wn,
              angle: Wo,
              pattern: Ui.barcodeLine.line,
              threshold: Ui.barcodeLine.threshold
            });
          }
          return re(), {
            decodeFromBoundingBox: function (Qt) {
              return Ot(Qt);
            },
            decodeFromBoundingBoxes: function (Qt) {
              var Wn,
                Ui,
                eo = [],
                Wo = Ne.multiple;
              for (Wn = 0; Wn < Qt.length; Wn++) {
                var Ve = Qt[Wn];
                if ((Ui = Ot(Ve) || {}).box = Ve, Wo) eo.push(Ui);else if (Ui.codeResult) return Ui;
              }
              return {
                barcodes: eo
              };
            },
            decodeFromImage: function (Qt) {
              return Gi()(zi.a.mark(function Wn() {
                return zi.a.wrap(function (eo) {
                  for (;;) switch (eo.prev = eo.next) {
                    case 0:
                      return eo.next = 1, Be(Qt);
                    case 1:
                      return eo.abrupt("return", eo.sent);
                    case 2:
                    case "end":
                      return eo.stop();
                  }
                }, Wn);
              }))();
            },
            registerReader: function (Qt, Wn) {
              if (Ds[Qt]) throw new Error("cannot register existing reader", Qt);
              Ds[Qt] = Wn;
            },
            setReaders: function (Qt) {
              Ne.readers = Qt, se.length = 0, re();
            }
          };
        }
      },
      Ua = function () {
        var Ne = {};
        function Qe(re) {
          return Ne[re] || (Ne[re] = {
            subscribers: []
          }), Ne[re];
        }
        function Q(re, Ce) {
          re.async ? setTimeout(function () {
            re.callback(Ce);
          }, 4) : re.callback(Ce);
        }
        function se(re, Ce, Be) {
          var dt;
          if ("function" == typeof Ce) dt = {
            callback: Ce,
            async: Be
          };else if (!(dt = Ce).callback) throw new Error("Callback was not specified on options");
          Qe(re).subscribers.push(dt);
        }
        return {
          subscribe: function (re, Ce, Be) {
            return se(re, Ce, Be);
          },
          publish: function (re, Ce) {
            var Be = Qe(re),
              dt = Be.subscribers;
            dt.filter(function (Ot) {
              return !!Ot.once;
            }).forEach(function (Ot) {
              Q(Ot, Ce);
            }), Be.subscribers = dt.filter(function (Ot) {
              return !Ot.once;
            }), Be.subscribers.forEach(function (Ot) {
              Q(Ot, Ce);
            });
          },
          once: function (re, Ce) {
            se(re, {
              callback: Ce,
              async: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              once: !0
            });
          },
          unsubscribe: function (re, Ce) {
            if (re) {
              var Be = Qe(re);
              Be.subscribers = Be && Ce ? Be.subscribers.filter(function (dt) {
                return dt.callback !== Ce;
              }) : [];
            } else Ne = {};
          }
        };
      }(),
      hl = t(81),
      va = t.n(hl),
      wc = t(82),
      zs = t.n(wc),
      ic = t(83);
    var zc = function (Ne) {
        function Qe(Q, se) {
          var re;
          return C()(this, Qe), re = function _c(Ne, Qe, Q) {
            return Qe = Pn()(Qe), Kt()(Ne, function () {
              try {
                var se = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch {}
              return !!se;
            }() ? Reflect.construct(Qe, Q || [], Pn()(Ne).constructor) : Qe.apply(Ne, Q));
          }(this, Qe, [Q]), h()(re, "code", void 0), re.code = se, Object.setPrototypeOf(re, Qe.prototype), re;
        }
        return xo()(Qe, Ne), f()(Qe, [{
          key: "toJSON",
          value: function () {
            return {
              name: this.name,
              message: this.message,
              code: this.code
            };
          }
        }]);
      }(t.n(ic)()(Error)),
      Gc = "This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.";
    function au() {
      try {
        return navigator.mediaDevices.enumerateDevices();
      } catch {
        var Ne = new zc("enumerateDevices is not defined. ".concat(Gc), -1);
        return Promise.reject(Ne);
      }
    }
    function xu(Ne) {
      try {
        return navigator.mediaDevices.getUserMedia(Ne);
      } catch {
        var Qe = new zc("getUserMedia is not defined. ".concat(Gc), -1);
        return Promise.reject(Qe);
      }
    }
    var vs,
      La = ["deviceId"];
    function kc(Ne, Qe) {
      var Q = Object.keys(Ne);
      if (Object.getOwnPropertySymbols) {
        var se = Object.getOwnPropertySymbols(Ne);
        Qe && (se = se.filter(function (re) {
          return Object.getOwnPropertyDescriptor(Ne, re).enumerable;
        })), Q.push.apply(Q, se);
      }
      return Q;
    }
    function Ut(Ne) {
      for (var Qe = 1; Qe < arguments.length; Qe++) {
        var Q = null != arguments[Qe] ? arguments[Qe] : {};
        Qe % 2 ? kc(Object(Q), !0).forEach(function (se) {
          h()(Ne, se, Q[se]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Ne, Object.getOwnPropertyDescriptors(Q)) : kc(Object(Q)).forEach(function (se) {
          Object.defineProperty(Ne, se, Object.getOwnPropertyDescriptor(Q, se));
        });
      }
      return Ne;
    }
    function Vn(Ne, Qe) {
      var Q = typeof Symbol < "u" && Ne[Symbol.iterator] || Ne["@@iterator"];
      if (!Q) {
        if (Array.isArray(Ne) || (Q = function (Ot, Qt) {
          if (Ot) {
            if ("string" == typeof Ot) return Gt(Ot, undefined);
            var Wn = {}.toString.call(Ot).slice(8, -1);
            return "Object" === Wn && Ot.constructor && (Wn = Ot.constructor.name), "Map" === Wn || "Set" === Wn ? Array.from(Ot) : "Arguments" === Wn || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wn) ? Gt(Ot, undefined) : void 0;
          }
        }(Ne)) || Qe && Ne && "number" == typeof Ne.length) {
          Q && (Ne = Q);
          var se = 0,
            re = function () {};
          return {
            s: re,
            n: function () {
              return se >= Ne.length ? {
                done: !0
              } : {
                done: !1,
                value: Ne[se++]
              };
            },
            e: function (Ot) {
              throw Ot;
            },
            f: re
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var Ce,
        Be = !0,
        dt = !1;
      return {
        s: function () {
          Q = Q.call(Ne);
        },
        n: function () {
          var Ot = Q.next();
          return Be = Ot.done, Ot;
        },
        e: function (Ot) {
          dt = !0, Ce = Ot;
        },
        f: function () {
          try {
            Be || null == Q.return || Q.return();
          } finally {
            if (dt) throw Ce;
          }
        }
      };
    }
    function Gt(Ne, Qe) {
      (null == Qe || Qe > Ne.length) && (Qe = Ne.length);
      for (var Q = 0, se = Array(Qe); Q < Qe; Q++) se[Q] = Ne[Q];
      return se;
    }
    function xi(Ne) {
      return new Promise(function (Qe, Q) {
        var se = 10;
        !function re() {
          se > 0 ? Ne.videoWidth > 10 && Ne.videoHeight > 10 ? Qe() : window.setTimeout(re, 500) : Q(new zc("Unable to play video stream. Is webcam working?", -1)), se--;
        }();
      });
    }
    function so(Ne, Qe) {
      return yr.apply(this, arguments);
    }
    function yr() {
      return (yr = Gi()(zi.a.mark(function Ne(Qe, Q) {
        var se;
        return zi.a.wrap(function (re) {
          for (;;) switch (re.prev = re.next) {
            case 0:
              return re.next = 1, xu(Q);
            case 1:
              if (vs = se = re.sent, !Qe) {
                re.next = 2;
                break;
              }
              return Qe.setAttribute("autoplay", "true"), Qe.setAttribute("muted", "true"), Qe.setAttribute("playsinline", "true"), Qe.srcObject = se, Qe.addEventListener("loadedmetadata", function () {
                Qe.play().catch(function (Ce) {
                  console.warn("* Error while trying to play video stream:", Ce);
                });
              }), re.abrupt("return", xi(Qe));
            case 2:
              return re.abrupt("return", Promise.resolve());
            case 3:
            case "end":
              return re.stop();
          }
        }, Ne);
      }))).apply(this, arguments);
    }
    function Rr(Ne) {
      var Qe = zs()(Ne, ["facing", "minAspectRatio", "maxAspectRatio"]);
      return void 0 !== Ne.minAspectRatio && Ne.minAspectRatio > 0 && (Qe.aspectRatio = Ne.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== Ne.facing && (Qe.facingMode = Ne.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), Qe;
    }
    function Ns() {
      var Qe = Rr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
      return Qe && Qe.deviceId && Qe.facingMode && delete Qe.facingMode, Promise.resolve({
        audio: !1,
        video: Qe
      });
    }
    function Ga() {
      return (Ga = Gi()(zi.a.mark(function Ne(Qe) {
        var se, re, Ce, Be, dt, Ot, Qt, Wn, Ui;
        return zi.a.wrap(function (eo) {
          for (;;) switch (eo.prev = eo.next) {
            case 0:
              return eo.next = 1, au();
            case 1:
              if (se = eo.sent.filter(function (Wo) {
                return "videoinput" === Wo.kind;
              }), Qe) {
                eo.next = 2;
                break;
              }
              return eo.abrupt("return", se);
            case 2:
              re = [], Ce = Rr(Qe), Be = va()(Ce, La), dt = Vn(se), eo.prev = 3, dt.s();
            case 4:
              if ((Ot = dt.n()).done) {
                eo.next = 9;
                break;
              }
              return Qt = Ot.value, eo.prev = 5, Wn = {
                audio: !1,
                video: Ut(Ut({}, Be), {}, {
                  deviceId: {
                    exact: Qt.deviceId
                  }
                })
              }, eo.next = 6, xu(Wn);
            case 6:
              eo.sent.getTracks().forEach(function (Wo) {
                return Wo.stop();
              }), re.push(Qt), eo.next = 8;
              break;
            case 7:
              eo.prev = 7, eo.catch(5);
            case 8:
              eo.next = 4;
              break;
            case 9:
              eo.next = 11;
              break;
            case 10:
              eo.prev = 10, Ui = eo.catch(3), dt.e(Ui);
            case 11:
              return eo.prev = 11, dt.f(), eo.finish(11);
            case 12:
              return eo.abrupt("return", re);
            case 13:
            case "end":
              return eo.stop();
          }
        }, Ne, null, [[3, 10, 11, 12], [5, 7]]);
      }))).apply(this, arguments);
    }
    function Ma() {
      if (!vs) return null;
      var Ne = vs.getVideoTracks();
      return Ne && null != Ne && Ne.length ? Ne[0] : null;
    }
    var Ia = {
        requestedVideoElement: null,
        request: function (Ne, Qe) {
          return Gi()(zi.a.mark(function Q() {
            return zi.a.wrap(function (re) {
              for (;;) switch (re.prev = re.next) {
                case 0:
                  return Ia.requestedVideoElement = Ne, re.next = 1, Ns(Qe);
                case 1:
                  return re.abrupt("return", so(Ne, re.sent));
                case 2:
                case "end":
                  return re.stop();
              }
            }, Q);
          }))();
        },
        release: function () {
          var Ne = vs && vs.getVideoTracks();
          return null !== Ia.requestedVideoElement && Ia.requestedVideoElement.pause(), new Promise(function (Qe) {
            setTimeout(function () {
              Ne && Ne.length && Ne.forEach(function (Q) {
                return Q.stop();
              }), vs = null, Ia.requestedVideoElement = null, Qe();
            }, 0);
          });
        },
        enumerateVideoDevices: function (Ne) {
          return Ga.apply(this, arguments);
        },
        getActiveStream: function () {
          var Ne;
          return null !== (Ne = vs) && void 0 !== Ne ? Ne : null;
        },
        getActiveStreamLabel: function () {
          var Ne = Ma();
          return Ne ? Ne.label : "";
        },
        getActiveTrack: Ma,
        disableTorch: function () {
          return Gi()(zi.a.mark(function Ne() {
            var Qe, Q;
            return zi.a.wrap(function (se) {
              for (;;) switch (se.prev = se.next) {
                case 0:
                  if (!(Qe = Ma())) {
                    se.next = 4;
                    break;
                  }
                  return se.prev = 1, se.next = 2, Qe.applyConstraints({
                    advanced: [{
                      torch: !1
                    }]
                  });
                case 2:
                  se.next = 4;
                  break;
                case 3:
                  throw se.prev = 3, (Q = se.catch(1)) instanceof OverconstrainedError && console.warn("quagga2/CameraAccess: Torch not supported on this device"), Q;
                case 4:
                case "end":
                  return se.stop();
              }
            }, Ne, null, [[1, 3]]);
          }))();
        },
        enableTorch: function () {
          return Gi()(zi.a.mark(function Ne() {
            var Qe, Q;
            return zi.a.wrap(function (se) {
              for (;;) switch (se.prev = se.next) {
                case 0:
                  if (!(Qe = Ma())) {
                    se.next = 4;
                    break;
                  }
                  return se.prev = 1, se.next = 2, Qe.applyConstraints({
                    advanced: [{
                      torch: !0
                    }]
                  });
                case 2:
                  se.next = 4;
                  break;
                case 3:
                  throw se.prev = 3, (Q = se.catch(1)) instanceof OverconstrainedError && console.warn("quagga2/CameraAccess: Torch not supported on this device"), Q;
                case 4:
                case "end":
                  return se.stop();
              }
            }, Ne, null, [[1, 3]]);
          }))();
        }
      },
      Ea = Ia,
      Ll = {
        create: function (Ne) {
          var Qe,
            Q = document.createElement("canvas"),
            se = Q.getContext("2d", {
              willReadFrequently: !!Ne.willReadFrequently
            }),
            re = [],
            Ce = null !== (Qe = Ne.capacity) && void 0 !== Qe ? Qe : 20,
            Be = !0 === Ne.capture;
          return {
            addResult: function (Ot, Qt, Wn) {
              var Ui = {};
              (function dt(Ot) {
                return !!Ce && Ot && (Qt = Ot, !((Wn = Ne.blacklist) && Wn.some(function (Ui) {
                  return Object.keys(Ui).every(function (eo) {
                    return Ui[eo] === Qt[eo];
                  });
                }))) && function (Qt, Wn) {
                  return "function" != typeof Wn || Wn(Qt);
                }(Ot, Ne.filter);
                var Qt, Wn;
              })(Wn) && (Ce--, Ui.codeResult = Wn, Be && (Q.width = Qt.x, Q.height = Qt.y, Io.drawImage(Ot, Qt, se), Ui.frame = Q.toDataURL()), re.push(Ui));
            },
            getResults: function () {
              return re;
            }
          };
        }
      },
      Za = {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
          },
          area: {
            top: "0%",
            right: "0%",
            left: "0%",
            bottom: "0%"
          },
          singleChannel: !1
        },
        locate: !0,
        canvas: {
          createOverlay: !0
        },
        decoder: {
          readers: ["code_128_reader"]
        },
        locator: {
          halfSample: !0,
          patchSize: "medium"
        }
      },
      sl = Math.PI / 180,
      pl = {
        create: function (Ne, Qe) {
          var Q,
            se = {},
            re = Ne.getConfig(),
            Ce = da(Ne.getRealWidth(), Ne.getRealHeight()),
            Be = Ne.getCanvasSize(),
            dt = da(Ne.getWidth(), Ne.getHeight()),
            Ot = Ne.getTopRight(),
            Qt = Ot.x,
            Wn = Ot.y,
            Ui = null,
            eo = null,
            Wo = re.willReadFrequently;
          function Ve(me, ze, xt, wn, Ai) {
            var _o = Math.floor(wn),
              mr = Math.floor(Ai),
              Yr = Math.min(_o + 1, ze - 1),
              es = Math.min(mr + 1, xt - 1),
              Jr = wn - _o,
              Ca = Ai - mr;
            return (me[mr * ze + _o] * (1 - Jr) + me[mr * ze + Yr] * Jr) * (1 - Ca) + (me[es * ze + _o] * (1 - Jr) + me[es * ze + Yr] * Jr) * Ca;
          }
          return (Q = Qe || document.createElement("canvas")).width = Be.x, Q.height = Be.y, Ui = Q.getContext("2d", {
            willReadFrequently: !!Wo
          }), eo = new Uint8Array(dt.x * dt.y), se.attachData = function (me) {
            eo = me;
          }, se.getData = function () {
            return eo;
          }, se.grab = function () {
            var $a,
              eu,
              me = re.halfSample,
              ze = Ne.getFrame(),
              xt = ze,
              wn = 0;
            if (xt) {
              if (($a = Q).width !== (eu = Be).x && ($a.width = eu.x), $a.height !== eu.y && ($a.height = eu.y), "ImageStream" === re.type && (xt = ze.img, ze.tags && ze.tags.orientation)) switch (ze.tags.orientation) {
                case 6:
                  wn = 90 * sl;
                  break;
                case 8:
                  wn = -90 * sl;
              }
              if (0 !== wn ? (Ui.translate(Be.x / 2, Be.y / 2), Ui.rotate(wn), Ui.drawImage(xt, -Be.y / 2, -Be.x / 2, Be.y, Be.x), Ui.rotate(-wn), Ui.translate(-Be.x / 2, -Be.y / 2)) : Ui.drawImage(xt, 0, 0, Be.x, Be.y), me) !function ($a, eu, uu) {
                for (var jl, Nc = 0, Cl = eu.x, lc = Math.floor($a.length / 4), Bu = eu.x / 2, Sc = 0, Vu = eu.x; Cl < lc;) {
                  for (jl = 0; jl < Bu; jl++) uu[Sc] = (.299 * $a[4 * Nc + 0] + .587 * $a[4 * Nc + 1] + .114 * $a[4 * Nc + 2] + (.299 * $a[4 * (Nc + 1) + 0] + .587 * $a[4 * (Nc + 1) + 1] + .114 * $a[4 * (Nc + 1) + 2]) + (.299 * $a[4 * Cl + 0] + .587 * $a[4 * Cl + 1] + .114 * $a[4 * Cl + 2]) + (.299 * $a[4 * (Cl + 1) + 0] + .587 * $a[4 * (Cl + 1) + 1] + .114 * $a[4 * (Cl + 1) + 2])) / 4, Sc++, Nc += 2, Cl += 2;
                  Nc += Vu, Cl += Vu;
                }
              }(Ui.getImageData(Qt, Wn, dt.x, dt.y).data, dt, eo);else {
                var Ai = document.createElement("canvas");
                Ai.width = Ce.x, Ai.height = Ce.y;
                var _o = Ai.getContext("2d");
                0 !== wn ? (_o.translate(Ce.x / 2, Ce.y / 2), _o.rotate(wn), _o.drawImage(xt, -Ce.y / 2, -Ce.x / 2, Ce.y, Ce.x)) : _o.drawImage(xt, 0, 0, Ce.x, Ce.y);
                var mr = _o.getImageData(0, 0, Ce.x, Ce.y).data,
                  Yr = new Uint8Array(Ce.x * Ce.y);
                !function ma(Ne, Qe, Q) {
                  var se = Ne.length / 4 | 0;
                  if (Q && !0 === Q.singleChannel) for (var re = 0; re < se; re++) Qe[re] = 0 === Ne[4 * re + 3] ? 255 : Ne[4 * re + 0];else for (var Be = 0; Be < se; Be++) Qe[Be] = 0 === Ne[4 * Be + 3] ? 255 : .299 * Ne[4 * Be + 0] + .587 * Ne[4 * Be + 1] + .114 * Ne[4 * Be + 2];
                }(mr, Yr, re);
                for (var es = new Uint8Array(Be.x * Be.y), Jr = Ce.x / Be.x, Ca = Ce.y / Be.y, Ra = 0; Ra < Be.y; Ra++) for (var Ta = 0; Ta < Be.x; Ta++) es[Ra * Be.x + Ta] = 0 | Ve(Yr, Ce.x, Ce.y, Ta * Jr, Ra * Ca);
                for (var fc = 0; fc < dt.y; fc++) for (var Ac = 0; Ac < dt.x; Ac++) eo[fc * dt.x + Ac] = es[(fc + Wn) * Be.x + (Ac + Qt)];
              }
              return !0;
            }
            return !1;
          }, se.getSize = function () {
            return dt;
          }, se;
        }
      },
      ql = pl,
      vc = {
        274: "orientation"
      },
      oc = Object.keys(vc).map(function (Ne) {
        return vc[Ne];
      });
    function pc(Ne) {
      return new Promise(function (Qe) {
        var Q = new FileReader();
        Q.onload = function (se) {
          return Qe(se.target.result);
        }, Q.readAsArrayBuffer(Ne);
      });
    }
    function rc(Ne, Qe, Q) {
      if ("Exif" !== function (Be, dt, Ot) {
        for (var Qt = "", Wn = dt; Wn < dt + 4; Wn++) Qt += String.fromCharCode(Be.getUint8(Wn));
        return Qt;
      }(Ne, Qe)) return !1;
      var se,
        re = Qe + 6;
      if (18761 === Ne.getUint16(re)) se = !1;else {
        if (19789 !== Ne.getUint16(re)) return !1;
        se = !0;
      }
      if (42 !== Ne.getUint16(re + 2, !se)) return !1;
      var Ce = Ne.getUint32(re + 4, !se);
      return !(Ce < 8) && function (Be, dt, Ot, Qt, Wn) {
        for (var Ui = Be.getUint16(Ot, !Wn), eo = {}, Wo = 0; Wo < Ui; Wo++) {
          var Ve = Ot + 12 * Wo + 2,
            me = Qt[Be.getUint16(Ve, !Wn)];
          me && (eo[me] = Bl(Be, Ve, 0, 0, Wn));
        }
        return eo;
      }(Ne, 0, re + Ce, Q, se);
    }
    function Bl(Ne, Qe, Q, se, re) {
      var Ce = Ne.getUint16(Qe + 2, !re),
        Be = Ne.getUint32(Qe + 4, !re);
      return 3 === Ce && 1 === Be ? Ne.getUint16(Qe + 8, !re) : null;
    }
    function gu(Ne, Qe) {
      return "".concat(Ne, "image-").concat(Qe.toString().padStart(3, "0"), ".jpg");
    }
    var Xc = {};
    function al(Ne, Qe) {
      Ne.onload = function () {
        Qe.loaded(this);
      }, Ne.onerror = function () {
        Qe.loaded(this);
      };
    }
    Xc.load = function (Ne, Qe, Q, se, re, Ce) {
      var Be,
        dt,
        Qt = new Array(se),
        Wn = new Array(Qt.length);
      if (!1 === re) Qt[0] = Ne;else for (Be = 0; Be < Qt.length; Be++) Qt[Be] = gu(Ne, Q + Be);
      for (Wn.notLoaded = [], Wn.addImage = function (Ui) {
        Wn.notLoaded.push(Ui);
      }, Wn.loaded = function (Ui) {
        for (var eo = Wn.notLoaded, Wo = 0; Wo < eo.length; Wo++) if (eo[Wo] === Ui) {
          eo.splice(Wo, 1);
          for (var Ve = 0; Ve < Qt.length; Ve++) {
            var me = encodeURI(Qt[Ve].substr(Qt[Ve].lastIndexOf("/")));
            if (-1 !== Ui.src.lastIndexOf(me)) {
              Wn[Ve] = {
                img: Ui
              };
              break;
            }
          }
          break;
        }
        0 === eo.length && (!1 === re ? function (ze) {
          var xt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oc;
          return /^blob:/i.test(ze) ? function ec(Ne) {
            return new Promise(function (Qe, Q) {
              var se = new XMLHttpRequest();
              se.open("GET", Ne, !0), se.responseType = "blob", se.onreadystatechange = function () {
                se.readyState !== XMLHttpRequest.DONE || 200 !== se.status && 0 !== se.status || Qe(this.response);
              }, se.onerror = Q, se.send();
            });
          }(ze).then(pc).then(function (wn) {
            return function Mc(Ne) {
              var Qe = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oc,
                Q = new DataView(Ne),
                se = Ne.byteLength,
                re = Qe.reduce(function (Be, dt) {
                  var Ot = Object.keys(vc).filter(function (Qt) {
                    return vc[Qt] === dt;
                  })[0];
                  return Ot && (Be[Ot] = dt), Be;
                }, {}),
                Ce = 2;
              if (255 !== Q.getUint8(0) || 216 !== Q.getUint8(1)) return !1;
              for (; Ce < se;) {
                if (255 !== Q.getUint8(Ce)) return !1;
                if (225 === Q.getUint8(Ce + 1)) return rc(Q, Ce + 4, re);
                Ce += 2 + Q.getUint16(Ce + 2);
              }
              return !1;
            }(wn, xt);
          }) : Promise.resolve(null);
        }(Ne, ["orientation"]).then(function (ze) {
          Wn[0].tags = ze, Qe(Wn);
        }).catch(function (ze) {
          console.log(ze), Qe(Wn);
        }) : Qe(Wn));
      }, Be = 0; Be < Qt.length; Be++) dt = new Image(), Wn.addImage(dt), al(dt, Wn), dt.src = Qt[Be];
    };
    var tc,
      zl,
      Tc,
      Jl,
      hc,
      ll,
      Tl,
      $c,
      Ml,
      Vl,
      Bc,
      bu,
      ca = Xc,
      _a = {
        createVideoStream: function (Ne) {
          console.warn("**** InputStreamBrowser createVideoStream");
          var Qe,
            Q,
            se = null,
            re = ["canrecord", "ended"],
            Ce = {},
            Be = {
              x: 0,
              y: 0,
              type: "Point"
            },
            dt = {
              x: 0,
              y: 0,
              type: "XYSize"
            },
            Ot = {
              getRealWidth: function () {
                return Ne.videoWidth;
              },
              getRealHeight: function () {
                return Ne.videoHeight;
              },
              getWidth: function () {
                return Qe;
              },
              getHeight: function () {
                return Q;
              },
              setWidth: function (Qt) {
                Qe = Qt;
              },
              setHeight: function (Qt) {
                Q = Qt;
              },
              setInputStream: function (Qt) {
                se = Qt, this.setAttribute("src", void 0 !== Qt.src ? Qt.src : "");
              },
              ended: function () {
                return Ne.ended;
              },
              getConfig: function () {
                return se;
              },
              setAttribute: function (Qt, Wn) {
                Ne && Ne.setAttribute(Qt, Wn);
              },
              pause: function () {
                Ne.pause();
              },
              play: function () {
                Ne.play();
              },
              setCurrentTime: function (Qt) {
                var Wn;
                "LiveStream" !== (null === (Wn = se) || void 0 === Wn ? void 0 : Wn.type) && this.setAttribute("currentTime", Qt.toString());
              },
              addEventListener: function (Qt, Wn, Ui) {
                -1 !== re.indexOf(Qt) ? (Ce[Qt] || (Ce[Qt] = []), Ce[Qt].push(Wn)) : Ne.addEventListener(Qt, Wn, Ui);
              },
              clearEventHandlers: function () {
                re.forEach(function (Qt) {
                  var Wn = Ce[Qt];
                  Wn && Wn.length > 0 && Wn.forEach(function (Ui) {
                    Ne.removeEventListener(Qt, Ui);
                  });
                });
              },
              trigger: function (Qt, Wn) {
                var Ui,
                  eo,
                  Wo,
                  Ve,
                  me,
                  ze = Ce[Qt];
                if ("canrecord" === Qt && (Ve = Ne.videoWidth, me = Ne.videoHeight, Qe = null !== (eo = se) && void 0 !== eo && eo.size ? Ve / me > 1 ? se.size : Math.floor(Ve / me * se.size) : Ve, Q = null !== (Wo = se) && void 0 !== Wo && Wo.size ? Ve / me > 1 ? Math.floor(me / Ve * se.size) : se.size : me, dt.x = Qe, dt.y = Q), ze && ze.length > 0) for (Ui = 0; Ui < ze.length; Ui++) ze[Ui].apply(Ot, Wn);
              },
              setTopRight: function (Qt) {
                Be.x = Qt.x, Be.y = Qt.y;
              },
              getTopRight: function () {
                return Be;
              },
              setCanvasSize: function (Qt) {
                dt.x = Qt.x, dt.y = Qt.y;
              },
              getCanvasSize: function () {
                return dt;
              },
              getFrame: function () {
                return Ne;
              }
            };
          return Ot;
        },
        createLiveStream: function (Ne) {
          console.warn("**** InputStreamBrowser createLiveStream"), Ne && Ne.setAttribute("autoplay", "true");
          var Qe = _a.createVideoStream(Ne);
          return Qe.ended = function () {
            return !1;
          }, Qe;
        },
        createImageStream: function () {
          var Ne,
            Qe,
            Q = null,
            se = 0,
            re = 0,
            Ce = 0,
            Be = !0,
            dt = !1,
            Ot = null,
            Qt = 0,
            Wn = null,
            Ui = !1,
            eo = ["canrecord", "ended"],
            Wo = {},
            Ve = {
              x: 0,
              y: 0,
              type: "Point"
            },
            me = {
              x: 0,
              y: 0,
              type: "XYSize"
            };
          function ze(wn, Ai) {
            var _o,
              mr = Wo[wn];
            if (mr && mr.length > 0) for (_o = 0; _o < mr.length; _o++) mr[_o].apply(xt, Ai);
          }
          var xt = {
            trigger: ze,
            getWidth: function () {
              return Ne;
            },
            getHeight: function () {
              return Qe;
            },
            setWidth: function (wn) {
              Ne = wn;
            },
            setHeight: function (wn) {
              Qe = wn;
            },
            getRealWidth: function () {
              return se;
            },
            getRealHeight: function () {
              return re;
            },
            setInputStream: function (wn) {
              var Ai;
              !1 === wn.sequence ? (Wn = wn.src, Qt = 1) : (Wn = wn.src, Qt = wn.length), dt = !1, ca.load(Wn, function (_o) {
                var mr, Yr;
                if (Ot = _o, _o[0].tags && _o[0].tags.orientation) switch (_o[0].tags.orientation) {
                  case 6:
                  case 8:
                    se = _o[0].img.height, re = _o[0].img.width;
                    break;
                  default:
                    se = _o[0].img.width, re = _o[0].img.height;
                } else se = _o[0].img.width, re = _o[0].img.height;
                Ne = null !== (mr = Q) && void 0 !== mr && mr.size ? se / re > 1 ? Q.size : Math.floor(se / re * Q.size) : se, Qe = null !== (Yr = Q) && void 0 !== Yr && Yr.size ? se / re > 1 ? Math.floor(re / se * Q.size) : Q.size : re, me.x = Ne, me.y = Qe, dt = !0, Ce = 0, setTimeout(function () {
                  ze("canrecord", []);
                }, 0);
              }, 1, Qt, null === (Ai = Q = wn) || void 0 === Ai ? void 0 : Ai.sequence, Q);
            },
            ended: function () {
              return Ui;
            },
            setAttribute: function () {},
            getConfig: function () {
              return Q;
            },
            pause: function () {
              Be = !0;
            },
            play: function () {
              Be = !1;
            },
            setCurrentTime: function (wn) {
              Ce = wn;
            },
            addEventListener: function (wn, Ai) {
              -1 !== eo.indexOf(wn) && (Wo[wn] || (Wo[wn] = []), Wo[wn].push(Ai));
            },
            clearEventHandlers: function () {
              Object.keys(Wo).forEach(function (wn) {
                return delete Wo[wn];
              });
            },
            setTopRight: function (wn) {
              Ve.x = wn.x, Ve.y = wn.y;
            },
            getTopRight: function () {
              return Ve;
            },
            setCanvasSize: function (wn) {
              me.x = wn.x, me.y = wn.y;
            },
            getCanvasSize: function () {
              return me;
            },
            getFrame: function () {
              var wn, Ai;
              return dt ? (Be || (wn = null === (Ai = Ot) || void 0 === Ai ? void 0 : Ai[Ce], Ce < Qt - 1 ? Ce++ : setTimeout(function () {
                Ui = !0, ze("ended", []);
              }, 0)), wn) : null;
            }
          };
          return xt;
        }
      },
      wl = _a,
      Ja = {
        searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
        create: function (Ne, Qe) {
          var Q,
            se = Ne.data,
            re = Qe.data,
            Ce = this.searchDirections,
            Be = Ne.size.x;
          function dt(Qt, Wn, Ui, eo) {
            var Wo, Ve, me;
            for (Wo = 0; Wo < Ce.length; Wo++) {
              if (se[Q = (Ve = Qt.cy + Ce[Qt.dir][0]) * Be + (me = Qt.cx + Ce[Qt.dir][1])] === Wn && (0 === re[Q] || re[Q] === Ui)) return re[Q] = Ui, Qt.cy = Ve, Qt.cx = me, !0;
              0 === re[Q] && (re[Q] = eo), Qt.dir = (Qt.dir + 1) % 8;
            }
            return !1;
          }
          function Ot(Qt, Wn, Ui) {
            return {
              dir: Ui,
              x: Qt,
              y: Wn,
              next: null,
              prev: null
            };
          }
          return {
            trace: function (Qt, Wn, Ui, eo) {
              return dt(Qt, Wn, Ui, eo);
            },
            contourTracing: function (Qt, Wn, Ui, eo, Wo) {
              return function (Ve, me, ze, xt, wn) {
                var Ai,
                  _o,
                  mr,
                  Yr = null,
                  es = {
                    cx: me,
                    cy: Ve,
                    dir: 0
                  };
                if (dt(es, xt, ze, wn)) {
                  Ai = Yr = Ot(me, Ve, es.dir), mr = es.dir, (_o = Ot(es.cx, es.cy, 0)).prev = Ai, Ai.next = _o, _o.next = null, Ai = _o;
                  var Jr = Ne.size.x * Ne.size.y,
                    Ca = 0;
                  do {
                    es.dir = (es.dir + 6) % 8, dt(es, xt, ze, wn), mr !== es.dir ? (Ai.dir = es.dir, (_o = Ot(es.cx, es.cy, 0)).prev = Ai, Ai.next = _o, _o.next = null, Ai = _o) : (Ai.dir = mr, Ai.x = es.cx, Ai.y = es.cy), mr = es.dir;
                  } while ((es.cx !== me || es.cy !== Ve) && ++Ca < Jr);
                  Yr.prev = Ai.prev, Ai.prev.next = Yr;
                }
                return Yr;
              }(Qt, Wn, Ui, eo, Wo);
            }
          };
        }
      },
      ka = {
        createContour2D: function () {
          return {
            dir: null,
            index: null,
            firstVertex: null,
            insideContours: null,
            nextpeer: null,
            prevpeer: null
          };
        },
        CONTOUR_DIR: {
          CW_DIR: 0,
          CCW_DIR: 1,
          UNKNOWN_DIR: 2
        },
        DIR: {
          OUTSIDE_EDGE: -32767,
          INSIDE_EDGE: -32766
        },
        create: function (Ne, Qe) {
          var Q = Ne.data,
            se = Qe.data,
            re = Ne.size.x,
            Ce = Ne.size.y,
            Be = Ja.create(Ne, Qe);
          return {
            rasterize: function (dt) {
              var Ot,
                Qt,
                Wn,
                Ui,
                eo,
                Wo,
                Ve,
                me,
                ze,
                xt,
                wn,
                Ai,
                _o = [],
                mr = 0;
              for (Ai = 0; Ai < 400; Ai++) _o[Ai] = 0;
              for (_o[0] = Q[0], ze = null, Wo = 1; Wo < Ce - 1; Wo++) for (Ui = 0, Qt = _o[0], eo = 1; eo < re - 1; eo++) if (0 === se[wn = Wo * re + eo]) {
                if ((Ot = Q[wn]) !== Qt) {
                  if (0 === Ui) _o[Wn = mr + 1] = Ot, Qt = Ot, null !== (Ve = Be.contourTracing(Wo, eo, Wn, Ot, ka.DIR.OUTSIDE_EDGE)) && (mr++, Ui = Wn, (me = ka.createContour2D()).dir = ka.CONTOUR_DIR.CW_DIR, me.index = Ui, me.firstVertex = Ve, me.nextpeer = ze, me.insideContours = null, null !== ze && (ze.prevpeer = me), ze = me);else if (null !== (Ve = Be.contourTracing(Wo, eo, ka.DIR.INSIDE_EDGE, Ot, Ui))) {
                    for ((me = ka.createContour2D()).firstVertex = Ve, me.insideContours = null, me.dir = 0 === dt ? ka.CONTOUR_DIR.CCW_DIR : ka.CONTOUR_DIR.CW_DIR, me.index = dt, xt = ze; null !== xt && xt.index !== Ui;) xt = xt.nextpeer;
                    null !== xt && (me.nextpeer = xt.insideContours, null !== xt.insideContours && (xt.insideContours.prevpeer = me), xt.insideContours = me);
                  }
                } else se[wn] = Ui;
              } else se[wn] === ka.DIR.OUTSIDE_EDGE || se[wn] === ka.DIR.INSIDE_EDGE ? (Ui = 0, Qt = se[wn] === ka.DIR.INSIDE_EDGE ? Q[wn] : _o[0]) : Qt = _o[Ui = se[wn]];
              for (xt = ze; null !== xt;) xt.index = dt, xt = xt.nextpeer;
              return {
                cc: ze,
                count: mr
              };
            },
            debug: {
              drawContour: function (dt, Ot) {
                var Qt,
                  Wn,
                  Ui,
                  eo = dt.getContext("2d"),
                  Wo = Ot;
                for (eo.strokeStyle = "red", eo.fillStyle = "red", eo.lineWidth = 1, Qt = null !== Wo ? Wo.insideContours : null; null !== Wo;) {
                  switch (null !== Qt ? (Wn = Qt, Qt = Qt.nextpeer) : (Wn = Wo, Qt = null !== (Wo = Wo.nextpeer) ? Wo.insideContours : null), Wn.dir) {
                    case ka.CONTOUR_DIR.CW_DIR:
                      eo.strokeStyle = "red";
                      break;
                    case ka.CONTOUR_DIR.CCW_DIR:
                      eo.strokeStyle = "blue";
                      break;
                    case ka.CONTOUR_DIR.UNKNOWN_DIR:
                      eo.strokeStyle = "green";
                  }
                  Ui = Wn.firstVertex, eo.beginPath(), eo.moveTo(Ui.x, Ui.y);
                  do {
                    eo.lineTo((Ui = Ui.next).x, Ui.y);
                  } while (Ui !== Wn.firstVertex);
                  eo.stroke();
                }
              }
            }
          };
        }
      },
      Hc = ka,
      Kc = /* @preserve ASM BEGIN */
      function (Ne, Qe, Q) {
        var se = new Ne.Uint8Array(Q),
          re = 0 | Qe.size,
          Ce = Ne.Math.imul;
        function Be(me, ze) {
          me |= 0, ze |= 0;
          var xt = 0,
            wn = 0,
            _o = 0,
            mr = 0,
            Yr = 0,
            es = 0,
            Jr = 0;
          for (xt = 1; (0 | xt) < (re - 1 | 0); xt = xt + 1 | 0) for (Jr = Jr + re | 0, wn = 1; (0 | wn) < (re - 1 | 0); wn = wn + 1 | 0) se[ze + Jr + wn | 0] = 5 == (0 | (0 | se[me + (_o = Jr - re | 0) + (Yr = wn - 1 | 0) | 0]) + (0 | se[me + _o + (es = wn + 1 | 0) | 0]) + (0 | se[me + Jr + wn | 0]) + (0 | se[me + (mr = Jr + re | 0) + Yr | 0]) + (0 | se[me + mr + es | 0])) ? 1 : 0;
        }
        function dt(me, ze, xt) {
          me |= 0, ze |= 0, xt |= 0;
          var wn = 0;
          for (wn = 0 | Ce(re, re); (0 | wn) > 0;) se[xt + (wn = wn - 1 | 0) | 0] = (0 | se[me + wn | 0]) - (0 | se[ze + wn | 0]) | 0;
        }
        function Ot(me, ze, xt) {
          me |= 0, ze |= 0, xt |= 0;
          var wn = 0;
          for (wn = 0 | Ce(re, re); (0 | wn) > 0;) se[xt + (wn = wn - 1 | 0) | 0] = 0 | se[me + wn | 0] | se[ze + wn | 0] | 0;
        }
        function Qt(me) {
          me |= 0;
          var ze = 0,
            xt = 0;
          for (xt = 0 | Ce(re, re); (0 | xt) > 0;) ze = (0 | ze) + (0 | se[me + (xt = xt - 1 | 0) | 0]) | 0;
          return 0 | ze;
        }
        function Ui(me, ze) {
          me |= 0, ze |= 0;
          var xt = 0,
            wn = 0,
            _o = 0,
            mr = 0,
            Yr = 0,
            es = 0,
            Jr = 0;
          for (xt = 1; (0 | xt) < (re - 1 | 0); xt = xt + 1 | 0) for (Jr = Jr + re | 0, wn = 1; (0 | wn) < (re - 1 | 0); wn = wn + 1 | 0) se[ze + Jr + wn | 0] = (0 | (0 | se[me + (_o = Jr - re | 0) + (Yr = wn - 1 | 0) | 0]) + (0 | se[me + _o + (es = wn + 1 | 0) | 0]) + (0 | se[me + Jr + wn | 0]) + (0 | se[me + (mr = Jr + re | 0) + Yr | 0]) + (0 | se[me + mr + es | 0])) > 0 ? 1 : 0;
        }
        function eo(me, ze) {
          me |= 0, ze |= 0;
          var xt = 0;
          for (xt = 0 | Ce(re, re); (0 | xt) > 0;) se[ze + (xt = xt - 1 | 0) | 0] = 0 | se[me + xt | 0];
        }
        return {
          skeletonize: function Ve() {
            var ze,
              xt,
              wn,
              _o = 0;
            (function Wn(me, ze) {
              me |= 0, ze |= 0;
              var xt = 0;
              for (xt = 0 | Ce(re, re); (0 | xt) > 0;) se[me + (xt = xt - 1 | 0) | 0] = ze;
            })(wn = (xt = (ze = 0 | Ce(re, re)) + ze | 0) + ze | 0, 0), function Wo(me) {
              me |= 0;
              var ze = 0,
                xt = 0;
              for (ze = 0; (0 | ze) < (re - 1 | 0); ze = ze + 1 | 0) se[me + ze | 0] = 0, se[me + xt | 0] = 0, se[me + (xt = xt + re - 1 | 0) | 0] = 0, xt = xt + 1 | 0;
              for (ze = 0; (0 | ze) < (0 | re); ze = ze + 1 | 0) se[me + xt | 0] = 0, xt = xt + 1 | 0;
            }(0);
            do {
              Be(0, ze), Ui(ze, xt), dt(0, xt, xt), Ot(wn, xt, wn), eo(ze, 0), _o = 0 == (0 | Qt(0)) | 0;
            } while (!_o);
          }
        };
      },
      Al = {
        ctx: {
          binary: null
        },
        dom: {
          binary: null
        }
      },
      sc = {
        x: 0,
        y: 0
      };
    function Bi(Ne) {
      var Qe,
        Q,
        se,
        re,
        Ce,
        Be,
        dt,
        Ot = Ml.size.x,
        Qt = Ml.size.y,
        Wn = -Ml.size.x,
        Ui = -Ml.size.y;
      for (Qe = 0, Q = 0; Q < Ne.length; Q++) Qe += (re = Ne[Q]).rad;
      for ((Qe = (180 * (Qe /= Ne.length) / Math.PI + 90) % 180 - 90) < 0 && (Qe += 180), Qe = (180 - Qe) * Math.PI / 180, Ce = e.copy(e.create(), [Math.cos(Qe), Math.sin(Qe), -Math.sin(Qe), Math.cos(Qe)]), Q = 0; Q < Ne.length; Q++) for (re = Ne[Q], se = 0; se < 4; se++) a.transformMat2(re.box[se], re.box[se], Ce);
      for (Q = 0; Q < Ne.length; Q++) for (re = Ne[Q], se = 0; se < 4; se++) re.box[se][0] < Ot && (Ot = re.box[se][0]), re.box[se][0] > Wn && (Wn = re.box[se][0]), re.box[se][1] < Qt && (Qt = re.box[se][1]), re.box[se][1] > Ui && (Ui = re.box[se][1]);
      for (Be = [[Ot, Qt], [Wn, Qt], [Wn, Ui], [Ot, Ui]], dt = tc.halfSample ? 2 : 1, Ce = e.invert(Ce, Ce), se = 0; se < 4; se++) a.transformMat2(Be[se], Be[se], Ce);
      for (se = 0; se < 4; se++) a.scale(Be[se], Be[se], dt);
      return Be;
    }
    function Rc(Ne, Qe) {
      Ml.subImageAsCopy(Jl, da(Ne, Qe)), bu.skeletonize();
    }
    function ac(Ne, Qe, Q, se) {
      var re,
        Ce,
        Be,
        dt,
        Ot = [],
        Qt = [],
        Wn = Math.ceil(Vl.x / 3);
      if (Ne.length >= 2) {
        for (re = 0; re < Ne.length; re++) Ne[re].m00 > Wn && Ot.push(Ne[re]);
        if (Ot.length >= 2) {
          for (Be = function lu(Ne) {
            var Qe = function (Ce, Be, dt) {
                var Ot,
                  Qt,
                  Wn,
                  Ui,
                  eo = 0,
                  Wo = 0,
                  Ve = [];
                for (Ot = 0; Ot < 1; Ot++) Ve[Ot] = {
                  score: 0,
                  item: null
                };
                for (Ot = 0; Ot < Ce.length; Ot++) if ((Qt = dt.apply(this, [Ce[Ot]])) > Wo) for ((Wn = Ve[eo]).score = Qt, Wn.item = Ce[Ot], Wo = Number.MAX_VALUE, Ui = 0; Ui < 1; Ui++) Ve[Ui].score < Wo && (Wo = Ve[Ui].score, eo = Ui);
                return Ve;
              }(function (Ce, Be, dt) {
                var Ot,
                  Qt,
                  Wn,
                  Ui,
                  eo = [];
                function Wo(Ve) {
                  var me = !1;
                  for (Qt = 0; Qt < eo.length; Qt++) (Wn = eo[Qt]).fits(Ve) && (Wn.add(Ve), me = !0);
                  return me;
                }
                for (dt || (dt = "rad"), Ot = 0; Ot < Ce.length; Ot++) Wo(Ui = ua(Ce[Ot], Ot, dt)) || eo.push(ha(Ui, .9));
                return eo;
              }(Ne), 0, function (Ce) {
                return Ce.getPoints().length;
              }),
              Q = [],
              se = [];
            if (1 === Qe.length) {
              Q = Qe[0].item.getPoints();
              for (var re = 0; re < Q.length; re++) se.push(Q[re].point);
            }
            return se;
          }(Ot), Ce = 0, re = 0; re < Be.length; re++) {
            var Ui, eo;
            Ce += null !== (Ui = null === (eo = Be[re]) || void 0 === eo ? void 0 : eo.rad) && void 0 !== Ui ? Ui : 0;
          }
          Be.length > 1 && Be.length >= Ot.length / 4 * 3 && Be.length > Ne.length / 4 && (Ce /= Be.length, dt = {
            index: Qe[1] * sc.x + Qe[0],
            pos: {
              x: Q,
              y: se
            },
            box: [a.clone([Q, se]), a.clone([Q + Jl.size.x, se]), a.clone([Q + Jl.size.x, se + Jl.size.y]), a.clone([Q, se + Jl.size.y])],
            moments: Be,
            rad: Ce,
            vec: a.clone([Math.cos(Ce), Math.sin(Ce)])
          }, Qt.push(dt));
        }
      }
      return Qt;
    }
    var iu = function (Ne, Qe) {
        var Q,
          se,
          re = Ne.getWidth(),
          Ce = Ne.getHeight(),
          Be = Qe.halfSample ? .5 : 1;
        Ne.getConfig().area && (se = function qs(Ne, Qe, Q) {
          var se = {
              width: Ne,
              height: Qe
            },
            re = Object.keys(Q).reduce(function (Ce, Be) {
              if (!ba[Be]) return Ce;
              var Qt,
                dt = (Qt = Q[Be], {
                  value: parseFloat(Qt),
                  unit: (Qt.indexOf("%"), "%")
                }),
                Ot = ba[Be](dt, se);
              return Ce[Be] = Ot, Ce;
            }, {});
          return {
            sx: re.left,
            sy: re.top,
            sw: re.right - re.left,
            sh: re.bottom - re.top
          };
        }(re, Ce, Ne.getConfig().area), Ne.setTopRight({
          x: se.sx,
          y: se.sy
        }), Ne.setCanvasSize({
          x: re,
          y: Ce
        }), re = se.sw, Ce = se.sh);
        var dt = {
          x: Math.floor(re * Be),
          y: Math.floor(Ce * Be)
        };
        if (Q = Va(Qe.patchSize, dt), Ne.setWidth(Math.max(Math.floor(Math.floor(dt.x / Q.x) * (1 / Be) * Q.x), Q.x)), Ne.setHeight(Math.max(Math.floor(Math.floor(dt.y / Q.y) * (1 / Be) * Q.y), Q.y)), Ne.getWidth() % Q.x == 0 && Ne.getHeight() % Q.y == 0) return !0;
        throw new Error("Image dimensions do not comply with the current settings: Width (".concat(re, " )and height (").concat(Ce, ") must a multiple of ").concat(Q.x));
      },
      Fc = f()(function Ne() {
        C()(this, Ne), h()(this, "config", void 0), h()(this, "inputStream", void 0), h()(this, "framegrabber", void 0), h()(this, "inputImageWrapper", void 0), h()(this, "stopped", !1), h()(this, "initAborted", !1), h()(this, "boxSize", void 0), h()(this, "resultCollector", void 0), h()(this, "decoder", void 0), h()(this, "workerPool", []), h()(this, "onUIThread", !0), h()(this, "canvasContainer", new Jc());
      }),
      Rl = f()(function Ne() {
        C()(this, Ne), h()(this, "image", void 0), h()(this, "overlay", void 0);
      }),
      Jc = f()(function Ne() {
        C()(this, Ne), h()(this, "ctx", void 0), h()(this, "dom", void 0), this.ctx = new Rl(), this.dom = new Rl();
      });
    function _t(Ne) {
      return typeof document > "u" ? null : Ne instanceof HTMLElement && Ne.nodeName && 1 === Ne.nodeType ? Ne : document.querySelector("string" == typeof Ne ? Ne : "#interactive.viewport");
    }
    function Tn(Ne, Qe, Q) {
      var Be,
        dt,
        se = (Be = Qe, (dt = document.querySelector(Ne)) || ((dt = document.createElement("canvas")).className = Be), dt),
        re = se.getContext("2d", {
          willReadFrequently: Q.willReadFrequently
        });
      return {
        canvas: se,
        context: re
      };
    }
    function Vi(Ne, Qe) {
      var Q = Object.keys(Ne);
      if (Object.getOwnPropertySymbols) {
        var se = Object.getOwnPropertySymbols(Ne);
        Qe && (se = se.filter(function (re) {
          return Object.getOwnPropertyDescriptor(Ne, re).enumerable;
        })), Q.push.apply(Q, se);
      }
      return Q;
    }
    function Zo(Ne) {
      for (var Qe = 1; Qe < arguments.length; Qe++) {
        var Q = null != arguments[Qe] ? arguments[Qe] : {};
        Qe % 2 ? Vi(Object(Q), !0).forEach(function (se) {
          h()(Ne, se, Q[se]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Ne, Object.getOwnPropertyDescriptors(Q)) : Vi(Object(Q)).forEach(function (se) {
          Object.defineProperty(Ne, se, Object.getOwnPropertyDescriptor(Q, se));
        });
      }
      return Ne;
    }
    var Zr = [];
    function pa(Ne) {
      return Zo(Zo({}, Ne), {}, {
        inputStream: Zo(Zo({}, Ne.inputStream), {}, {
          target: null
        })
      });
    }
    function fl(Ne) {
      if (Ne) {
        var Qe = Ne().default;
        if (!Qe) return void self.postMessage({
          event: "error",
          message: "Quagga could not be created"
        });
      }
      var Q;
      function se(Ce) {
        self.postMessage({
          event: "processed",
          imageData: Q.data,
          result: Ce
        }, [Q.data.buffer]);
      }
      function re() {
        self.postMessage({
          event: "initialized",
          imageData: Q.data
        }, [Q.data.buffer]);
      }
      self.onmessage = function (Ce) {
        if ("init" === Ce.data.cmd) {
          var Be = Ce.data.config;
          Be.numOfWorkers = 0, Q = new Qe.ImageWrapper({
            x: Ce.data.size.x,
            y: Ce.data.size.y
          }, new Uint8Array(Ce.data.imageData)), Qe.init(Be, re, Q), Qe.onProcessed(se);
        } else "process" === Ce.data.cmd ? (Q.data = new Uint8Array(Ce.data.imageData), Qe.start()) : "setReaders" === Ce.data.cmd ? Qe.setReaders(Ce.data.readers) : "registerReader" === Ce.data.cmd && Qe.registerReader(Ce.data.name, Ce.data.reader);
      };
    }
    function Bs(Ne, Qe, Q) {
      var se,
        re,
        Ce = (typeof __factorySource__ < "u" && (re = __factorySource__), se = new Blob(["(" + fl.toString() + ")(" + re + ");"], {
          type: "text/javascript"
        }), window.URL.createObjectURL(se)),
        Be = {
          worker: new Worker(Ce),
          imageData: new Uint8Array(Qe.getWidth() * Qe.getHeight()),
          busy: !0
        };
      Be.worker.onmessage = function (dt) {
        "initialized" === dt.data.event ? (URL.revokeObjectURL(Ce), Be.busy = !1, Be.imageData = new Uint8Array(dt.data.imageData), Q(Be)) : "processed" === dt.data.event && (Be.imageData = new Uint8Array(dt.data.imageData), Be.busy = !1, typeof publishResult < "u" && publishResult(dt.data.result, Be.imageData));
      }, Be.worker.postMessage({
        cmd: "init",
        size: {
          x: Qe.getWidth(),
          y: Qe.getHeight()
        },
        imageData: Be.imageData,
        config: pa(Ne)
      }, [Be.imageData.buffer]);
    }
    function qc(Ne, Qe, Q, se) {
      var re = Ne - Zr.length;
      if (0 === re && se) se();else if (re < 0) Zr.slice(re).forEach(function (dt) {
        dt.worker.terminate();
      }), Zr = Zr.slice(0, re), se && se();else {
        var Ce = function (dt) {
          Zr.push(dt), Zr.length >= Ne && se && se();
        };
        if (Qe) for (var Be = 0; Be < re; Be++) Bs(Qe, Q, Ce);
      }
    }
    function $e(Ne, Qe, Q) {
      for (var se = Ne.length; se--;) Ne[se][0] += Qe, Ne[se][1] += Q;
    }
    var nt = function () {
        return f()(function Q() {
          var se = this;
          C()(this, Q), h()(this, "context", new Fc()), h()(this, "canRecord", function (re) {
            var Ce;
            se.context.initAborted ? re(new Error("Initialization was aborted")) : se.context.config ? se.context.inputStream ? (iu(se.context.inputStream, null === (Ce = se.context.config) || void 0 === Ce ? void 0 : Ce.locator), se.initCanvas(), se.context.framegrabber = ql.create(se.context.inputStream, se.context.canvasContainer.dom.image), void 0 === se.context.config.numOfWorkers && (se.context.config.numOfWorkers = 0), qc(se.context.config.numOfWorkers, se.context.config, se.context.inputStream, function () {
              var Be;
              0 === (null === (Be = se.context.config) || void 0 === Be ? void 0 : Be.numOfWorkers) && se.initializeData(), se.ready(re);
            })) : re(new Error("Input stream not initialized")) : re(new Error("Configuration not initialized"));
          }), h()(this, "update", function () {
            if (se.context.onUIThread) {
              var re,
                Ce = (dt = se.context.framegrabber, Zr.length ? !!(Ot = Zr.filter(function (Qt) {
                  return !Qt.busy;
                })[0]) && (dt.attachData(Ot.imageData), dt.grab() && (Ot.busy = !0, Ot.worker.postMessage({
                  cmd: "process",
                  imageData: Ot.imageData
                }, [Ot.imageData.buffer])), !0) : null);
              Ce || (se.context.framegrabber.attachData(null === (re = se.context.inputImageWrapper) || void 0 === re ? void 0 : re.data), se.context.framegrabber.grab() && (Ce || se.locateAndDecode()));
            } else {
              var Be;
              se.context.framegrabber.attachData(null === (Be = se.context.inputImageWrapper) || void 0 === Be ? void 0 : Be.data), se.context.framegrabber.grab(), se.locateAndDecode();
            }
            var dt, Ot;
          }), h()(this, "_cachedStyleValues", void 0), h()(this, "_resolvedStyle", void 0);
        }, [{
          key: "initBuffers",
          value: function (Q) {
            if (this.context.config) {
              var se = (Be = this.context.inputStream, Ot = this.context.config.locator, Qt = Q || new $o({
                  x: Be.getWidth(),
                  y: Be.getHeight(),
                  type: "XYSize"
                }), Wn = [a.clone([0, 0]), a.clone([0, Qt.size.y]), a.clone([Qt.size.x, Qt.size.y]), a.clone([Qt.size.x, 0])], function (Ne, Qe) {
                  tc = Qe, Bc = Ne, function () {
                    zl = tc.halfSample ? new $o({
                      x: Bc.size.x / 2 | 0,
                      y: Bc.size.y / 2 | 0
                    }) : Bc, Vl = Va(tc.patchSize, zl.size), sc.x = zl.size.x / Vl.x | 0, sc.y = zl.size.y / Vl.y | 0, Ml = new $o(zl.size, void 0, Uint8Array, !1), hc = new $o(Vl, void 0, Array, !0);
                    var se = Math.max(65536, Math.pow(2, Math.ceil(Math.log2(Vl.x * Vl.y * 4)))),
                      re = new ArrayBuffer(se);
                    Jl = new $o(Vl, new Uint8Array(re, 0, Vl.x * Vl.y)), Tc = new $o(Vl, new Uint8Array(re, Vl.x * Vl.y * 3, Vl.x * Vl.y), void 0, !0), bu = Kc({
                      Math,
                      Uint8Array
                    }, {
                      size: Vl.x
                    }, re), $c = new $o({
                      x: zl.size.x / Jl.size.x | 0,
                      y: zl.size.y / Jl.size.y | 0
                    }, void 0, Array, !0), ll = new $o($c.size, void 0, void 0, !0), Tl = new $o($c.size, void 0, Int32Array, !0);
                  }(), !tc.useWorker && typeof document < "u" && (Al.dom.binary = document.createElement("canvas"), Al.dom.binary.className = "binaryBuffer", Al.ctx.binary = Al.dom.binary.getContext("2d", {
                    willReadFrequently: !!tc.willReadFrequently
                  }), Al.dom.binary.width = Ml.size.x, Al.dom.binary.height = Ml.size.y);
                }(Qt, Ot), {
                  inputImageWrapper: Qt,
                  boxSize: Wn
                }),
                Ce = se.boxSize;
              this.context.inputImageWrapper = se.inputImageWrapper, this.context.boxSize = Ce;
            }
            var Be, Ot, Qt, Wn;
          }
        }, {
          key: "initializeData",
          value: function (Q) {
            this.context.config && (this.initBuffers(Q), this.context.decoder = wa.create(this.context.config.decoder, this.context.inputImageWrapper));
          }
        }, {
          key: "getViewPort",
          value: function () {
            return this.context.config && this.context.config.inputStream ? _t(this.context.config.inputStream.target) : null;
          }
        }, {
          key: "ready",
          value: function (Q) {
            this.context.inputStream.play(), Q();
          }
        }, {
          key: "initCanvas",
          value: function () {
            var Q = function Ge(Ne) {
              var Qe,
                Q,
                se,
                re,
                Ce,
                Be,
                dt,
                Ot,
                Qt,
                Wn,
                Ui = _t(null == Ne || null === (Qe = Ne.config) || void 0 === Qe || null === (Q = Qe.inputStream) || void 0 === Q ? void 0 : Q.target),
                eo = null == Ne || null === (se = Ne.config) || void 0 === se || null === (re = se.inputStream) || void 0 === re ? void 0 : re.type;
              if (!eo) return null;
              var Wo = !1 !== (null == Ne || null === (Ce = Ne.config) || void 0 === Ce || null === (Be = Ce.canvas) || void 0 === Be ? void 0 : Be.createOverlay),
                Ve = function (ze, xt) {
                  var wn = xt.willReadFrequently,
                    Ai = xt.createOverlay,
                    _o = xt.debug;
                  if (typeof document < "u") {
                    var mr = Tn("canvas.imgBuffer", "imgBuffer", {
                      willReadFrequently: wn,
                      debug: _o
                    });
                    mr.canvas.width = ze.x, mr.canvas.height = ze.y;
                    var Yr = {
                      canvas: null,
                      context: null
                    };
                    if (Ai) {
                      var es = Tn("canvas.drawingBuffer", "drawingBuffer", {
                        willReadFrequently: wn,
                        debug: _o
                      });
                      es.canvas.width = ze.x, es.canvas.height = ze.y, Yr = es;
                    }
                    return {
                      dom: {
                        image: mr.canvas,
                        overlay: Yr.canvas
                      },
                      ctx: {
                        image: mr.context,
                        overlay: Yr.context
                      }
                    };
                  }
                  return null;
                }(Ne.inputStream.getCanvasSize(), {
                  willReadFrequently: !(null == Ne || null === (dt = Ne.config) || void 0 === dt || null === (Ot = dt.inputStream) || void 0 === Ot || !Ot.willReadFrequently),
                  createOverlay: Wo,
                  debug: null == Ne || null === (Qt = Ne.config) || void 0 === Qt || null === (Wn = Qt.locator) || void 0 === Wn ? void 0 : Wn.debug
                });
              if (!Ve) return {
                dom: {
                  image: null,
                  overlay: null
                },
                ctx: {
                  image: null,
                  overlay: null
                }
              };
              var me = Ve.dom;
              return typeof document < "u" && Ui && ("ImageStream" !== eo || Ui.contains(me.image) || Ui.appendChild(me.image), me.overlay && !Ui.contains(me.overlay) && Ui.appendChild(me.overlay)), Ve;
            }(this.context);
            if (Q) {
              var se = Q.ctx,
                re = Q.dom;
              this.context.canvasContainer.dom.image = re.image, this.context.canvasContainer.dom.overlay = re.overlay, this.context.canvasContainer.ctx.image = se.image, this.context.canvasContainer.ctx.overlay = se.overlay;
            }
          }
        }, {
          key: "initInputStream",
          value: function (Q) {
            if (this.context.config && this.context.config.inputStream) {
              var se = this.context.config.inputStream,
                re = se.type,
                Ce = se.constraints,
                Be = function () {
                  var Qt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "LiveStream",
                    Wn = arguments.length > 1 ? arguments[1] : void 0,
                    Ui = arguments.length > 2 ? arguments[2] : void 0;
                  switch (Qt) {
                    case "VideoStream":
                      var eo = document.createElement("video");
                      return {
                        video: eo,
                        inputStream: Ui.createVideoStream(eo)
                      };
                    case "ImageStream":
                      return {
                        inputStream: Ui.createImageStream()
                      };
                    case "LiveStream":
                      var Wo = null;
                      return Wn && ((Wo = Wn.querySelector("video")) || (Wo = document.createElement("video"), Wn.appendChild(Wo))), {
                        video: Wo,
                        inputStream: Ui.createLiveStream(Wo)
                      };
                    default:
                      return console.error("* setupInputStream invalid type ".concat(Qt)), {
                        video: null,
                        inputStream: null
                      };
                  }
                }(re, this.getViewPort(), wl),
                dt = Be.video,
                Ot = Be.inputStream;
              "LiveStream" === re && dt && Ea.request(dt, Ce).then(function () {
                return Ot.trigger("canrecord");
              }).catch(function (Qt) {
                return Q(Qt);
              }), Ot && (Ot.setAttribute("preload", "auto"), Ot.setInputStream(this.context.config.inputStream), Ot.addEventListener("canrecord", this.canRecord.bind(void 0, Q))), this.context.inputStream = Ot;
            }
          }
        }, {
          key: "getBoundingBoxes",
          value: function () {
            var Q;
            return null !== (Q = this.context.config) && void 0 !== Q && Q.locate ? function () {
              tc.halfSample && function (se, re) {
                for (var Ce = se.data, Be = se.size.x, dt = re.data, Ot = 0, Qt = Be, Wn = Ce.length, Ui = Be / 2, eo = 0; Qt < Wn;) {
                  for (var Wo = 0; Wo < Ui; Wo++) dt[eo] = Math.floor((Ce[Ot] + Ce[Ot + 1] + Ce[Qt] + Ce[Qt + 1]) / 4), eo++, Ot += 2, Qt += 2;
                  Ot += Be, Qt += Be;
                }
              }(Bc, zl), Qs(zl, Ml), Ml.zeroBorder();
              var Ne = function () {
                var se,
                  re,
                  Ce,
                  Be,
                  dt,
                  Ot,
                  Qt = [];
                for (se = 0; se < sc.x; se++) for (re = 0; re < sc.y; re++) Rc(Ce = Jl.size.x * se, Be = Jl.size.y * re), Tc.zeroBorder(), Us(hc.data, 0), Ot = Hc.create(Tc, hc).rasterize(0), dt = hc.moments(Ot.count), Qt = Qt.concat(ac(dt, [se, re], Ce, Be));
                return Qt;
              }();
              if (Ne.length < sc.x * sc.y * .05) return null;
              var Qe = function (se) {
                var re,
                  Ce,
                  Be = 0,
                  dt = 0;
                function Ot() {
                  var Wn;
                  for (Wn = 0; Wn < Tl.data.length; Wn++) if (0 === Tl.data[Wn] && 1 === ll.data[Wn]) return Wn;
                  return Tl.data.length;
                }
                function Qt(Wn) {
                  var Wo,
                    Ve,
                    me,
                    ze = Wn % Tl.size.x,
                    xt = Wn / Tl.size.x | 0;
                  if (Wn < Tl.data.length) for (Wo = $c.data[Wn], Tl.data[Wn] = Be, me = 0; me < Ja.searchDirections.length; me++) 0 !== ll.data[Ve = (xt + Ja.searchDirections[me][0]) * Tl.size.x + (ze + Ja.searchDirections[me][1])] ? 0 === Tl.data[Ve] && Math.abs(a.dot($c.data[Ve].vec, Wo.vec)) > .95 && Qt(Ve) : Tl.data[Ve] = Number.MAX_VALUE;
                }
                for (Us(ll.data, 0), Us(Tl.data, 0), Us($c.data, null), re = 0; re < se.length; re++) $c.data[(Ce = se[re]).index] = Ce, ll.data[Ce.index] = 1;
                for (ll.zeroBorder(); (dt = Ot()) < Tl.data.length;) Be++, Qt(dt);
                return Be;
              }(Ne);
              if (Qe < 1) return null;
              var Q = function (se) {
                var re,
                  Ce,
                  Be = [];
                for (re = 0; re < se; re++) Be.push(0);
                for (Ce = Tl.data.length; Ce--;) Tl.data[Ce] > 0 && Be[Tl.data[Ce] - 1]++;
                return (Be = Be.map(function (dt, Ot) {
                  return {
                    val: dt,
                    label: Ot + 1
                  };
                })).sort(function (dt, Ot) {
                  return Ot.val - dt.val;
                }), Be.filter(function (dt) {
                  return dt.val >= 5;
                });
              }(Qe);
              return 0 === Q.length ? null : function (se, re) {
                var Ce,
                  Be,
                  Ot,
                  Qt = [],
                  Wn = [];
                for (Ce = 0; Ce < se.length; Ce++) {
                  for (Be = Tl.data.length, Qt.length = 0; Be--;) Tl.data[Be] === se[Ce].label && Qt.push($c.data[Be]);
                  (Ot = Bi(Qt)) && Wn.push(Ot);
                }
                return Wn;
              }(Q);
            }() : [[a.clone(this.context.boxSize[0]), a.clone(this.context.boxSize[1]), a.clone(this.context.boxSize[2]), a.clone(this.context.boxSize[3])]];
          }
        }, {
          key: "transformResult",
          value: function (Q) {
            var se = this,
              re = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set(),
              Ce = this.context.inputStream.getTopRight(),
              Be = Ce.x,
              dt = Ce.y;
            if ((0 !== Be || 0 !== dt) && (Q.barcodes && Q.barcodes.forEach(function (Qt) {
              return se.transformResult(Qt, re);
            }), Q.line && 2 === Q.line.length && function Hn(Ne, Qe, Q) {
              Ne[0].x += Qe, Ne[0].y += Q, Ne[1].x += Qe, Ne[1].y += Q;
            }(Q.line, Be, dt), Q.box && !re.has(Q.box) && ($e(Q.box, Be, dt), re.add(Q.box)), Q.boxes && Q.boxes.length > 0)) for (var Ot = 0; Ot < Q.boxes.length; Ot++) re.has(Q.boxes[Ot]) || ($e(Q.boxes[Ot], Be, dt), re.add(Q.boxes[Ot]));
          }
        }, {
          key: "addResult",
          value: function (Q, se) {
            var re = this;
            se && this.context.resultCollector && (Q.barcodes ? Q.barcodes.filter(function (Ce) {
              return Ce.codeResult;
            }).forEach(function (Ce) {
              return re.addResult(Ce, se);
            }) : Q.codeResult && this.context.resultCollector.addResult(se, this.context.inputStream.getCanvasSize(), Q.codeResult));
          }
        }, {
          key: "hasCodeResult",
          value: function (Q) {
            return !(!Q || !(Q.barcodes ? Q.barcodes.some(function (se) {
              return se.codeResult;
            }) : Q.codeResult));
          }
        }, {
          key: "publishResult",
          value: function () {
            var Q,
              se,
              re = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Ce = arguments.length > 1 ? arguments[1] : void 0,
              Be = re;
            re && this.context.onUIThread && (this.transformResult(re), this.addResult(re, Ce), Be = (null == re || null === (se = re.barcodes) || void 0 === se ? void 0 : se.length) > 0 ? re.barcodes : re), Ua.publish("processed", Be), this.hasCodeResult(re) && Ua.publish("detected", Be);
            var dt = this.context.config;
            dt && !1 === dt.locate && null !== (Q = dt.inputStream) && void 0 !== Q && Q.area && this.drawScannerArea();
          }
        }, {
          key: "locateAndDecode",
          value: (Qe = Gi()(zi.a.mark(function Q() {
            var se, re, Ce, Be, dt, Ot;
            return zi.a.wrap(function (Qt) {
              for (;;) switch (Qt.prev = Qt.next) {
                case 0:
                  if (!(se = this.getBoundingBoxes())) {
                    Qt.next = 3;
                    break;
                  }
                  return Qt.next = 1, this.context.decoder.decodeFromBoundingBoxes(se);
                case 1:
                  if (Ot = Qt.sent) {
                    Qt.next = 2;
                    break;
                  }
                  Ot = {};
                case 2:
                  (Ce = Ot).boxes = se, this.publishResult(Ce, null === (re = this.context.inputImageWrapper) || void 0 === re ? void 0 : re.data), Qt.next = 5;
                  break;
                case 3:
                  return Qt.next = 4, this.context.decoder.decodeFromImage(this.context.inputImageWrapper);
                case 4:
                  (Be = Qt.sent) ? this.publishResult(Be, null === (dt = this.context.inputImageWrapper) || void 0 === dt ? void 0 : dt.data) : this.publishResult();
                case 5:
                case "end":
                  return Qt.stop();
              }
            }, Q, this);
          })), function () {
            return Qe.apply(this, arguments);
          })
        }, {
          key: "startContinuousUpdate",
          value: function () {
            var Q,
              se = this,
              re = null,
              Ce = 1e3 / ((null === (Q = this.context.config) || void 0 === Q ? void 0 : Q.frequency) || 60);
            this.context.stopped = !1;
            var Be = this.context,
              dt = function (Ot) {
                re = re || Ot, Be.stopped || (Ot >= re && (re += Ce, se.update()), window.requestAnimationFrame(dt));
              };
            dt(performance.now());
          }
        }, {
          key: "start",
          value: function () {
            var Q, se;
            this.context.onUIThread && "LiveStream" === (null === (Q = this.context.config) || void 0 === Q || null === (se = Q.inputStream) || void 0 === se ? void 0 : se.type) ? this.startContinuousUpdate() : this.update();
          }
        }, {
          key: "stop",
          value: (Ne = Gi()(zi.a.mark(function Q() {
            var se, re;
            return zi.a.wrap(function (Ce) {
              for (;;) switch (Ce.prev = Ce.next) {
                case 0:
                  if (this.context.stopped = !0, this.context.framegrabber || (this.context.initAborted = !0), qc(0), null === (se = this.context.config) || void 0 === se || !se.inputStream || "LiveStream" !== this.context.config.inputStream.type) {
                    Ce.next = 2;
                    break;
                  }
                  return Ce.next = 1, Ea.release();
                case 1:
                  null === (re = this.context.inputStream) || void 0 === re || re.clearEventHandlers();
                case 2:
                case "end":
                  return Ce.stop();
              }
            }, Q, this);
          })), function () {
            return Ne.apply(this, arguments);
          })
        }, {
          key: "setReaders",
          value: function (Q) {
            var se;
            this.context.decoder && this.context.decoder.setReaders(Q), se = Q, Zr.forEach(function (re) {
              return re.worker.postMessage({
                cmd: "setReaders",
                readers: se
              });
            });
          }
        }, {
          key: "registerReader",
          value: function (Q, se) {
            var re, Ce;
            wa.registerReader(Q, se), this.context.decoder && this.context.decoder.registerReader(Q, se), re = Q, Ce = se, Zr.forEach(function (Be) {
              return Be.worker.postMessage({
                cmd: "registerReader",
                name: re,
                reader: Ce
              });
            });
          }
        }, {
          key: "drawScannerArea",
          value: function () {
            var Q,
              se,
              re,
              Ce = null === (Q = this.context.config) || void 0 === Q || null === (se = Q.inputStream) || void 0 === se ? void 0 : se.area;
            if (Ce) {
              var Be = this.context.canvasContainer.ctx.overlay;
              if (Be && !1 === (null === (re = this.context.config) || void 0 === re ? void 0 : re.locate) && (void 0 !== Ce.borderColor && "" !== Ce.borderColor || void 0 !== Ce.borderWidth && Ce.borderWidth > 0 || void 0 !== Ce.backgroundColor && "" !== Ce.backgroundColor) && this.context.boxSize) {
                var dt = this.context.inputStream.getTopRight(),
                  Wn = this.context.boxSize,
                  Ui = Wn[0],
                  Ve = Ui[0] + dt.x,
                  me = Ui[1] + dt.y,
                  ze = Wn[3][0] - Ui[0],
                  xt = Wn[1][1] - Ui[1];
                if (!this._cachedStyleValues || this._cachedStyleValues.borderColor !== Ce.borderColor || this._cachedStyleValues.borderWidth !== Ce.borderWidth || this._cachedStyleValues.backgroundColor !== Ce.backgroundColor) {
                  var wn, Ai;
                  this._cachedStyleValues = {
                    borderColor: Ce.borderColor,
                    borderWidth: Ce.borderWidth,
                    backgroundColor: Ce.backgroundColor
                  };
                  var mr = null !== (wn = Ce.borderColor) && void 0 !== wn ? wn : "rgba(0, 255, 0, 0.5)",
                    Yr = void 0 !== Ce.borderColor || void 0 !== Ce.borderWidth ? null !== (Ai = Ce.borderWidth) && void 0 !== Ai ? Ai : 2 : 0;
                  this._resolvedStyle = {
                    color: mr,
                    width: Yr,
                    bg: Ce.backgroundColor
                  };
                }
                var Jr = this._resolvedStyle;
                Jr.bg && (Be.fillStyle = Jr.bg, Be.fillRect(Ve, me, ze, xt)), Jr.width > 0 && (Be.strokeStyle = Jr.color, Be.lineWidth = Jr.width, Be.strokeRect(Ve, me, ze, xt));
              }
            }
          }
        }]);
        var Ne, Qe;
      }(),
      si = new nt(),
      Oo = si.context,
      xs = {
        init: function (Ne, Qe, Q) {
          var se,
            re = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : si;
          return Qe || (se = new Promise(function (Ce, Be) {
            Qe = function (dt) {
              dt ? Be(dt) : Ce();
            };
          })), re.context.initAborted = !1, re.context.config = N()({}, Za, Ne), re.context.config.numOfWorkers > 0 && (re.context.config.numOfWorkers = 0), Q ? (re.context.onUIThread = !1, re.initializeData(Q), Qe && Qe()) : re.initInputStream(Qe), se;
        },
        start: function (Ne, Qe) {
          var Q;
          if (Ne) return Qe || (Q = new Promise(function (se, re) {
            Qe = function (Ce) {
              Ce ? re(Ce) : se();
            };
          })), this.init(Ne, function (se) {
            if (se) Qe(se);else try {
              si.start(), Qe();
            } catch (re) {
              Qe(re);
            }
          }), Q;
          if (!Oo.framegrabber) throw new Error("start() was called before init() completed. Call init() first, or call start(config) to combine init and start.");
          return si.start();
        },
        stop: function () {
          return si.stop();
        },
        pause: function () {
          Oo.stopped = !0;
        },
        onDetected: function (Ne) {
          Ne && ("function" == typeof Ne || "object" === b()(Ne) && Ne.callback) ? Ua.subscribe("detected", Ne) : console.trace("* warning: Quagga.onDetected called with invalid callback, ignoring");
        },
        offDetected: function (Ne) {
          Ua.unsubscribe("detected", Ne);
        },
        onProcessed: function (Ne) {
          Ne && ("function" == typeof Ne || "object" === b()(Ne) && Ne.callback) ? Ua.subscribe("processed", Ne) : console.trace("* warning: Quagga.onProcessed called with invalid callback, ignoring");
        },
        offProcessed: function (Ne) {
          Ua.unsubscribe("processed", Ne);
        },
        setReaders: function (Ne) {
          Ne ? si.setReaders(Ne) : console.trace("* warning: Quagga.setReaders called with no readers, ignoring");
        },
        registerReader: function (Ne, Qe) {
          Ne ? Qe ? si.registerReader(Ne, Qe) : console.trace("* warning: Quagga.registerReader called with no reader, ignoring") : console.trace("* warning: Quagga.registerReader called with no name, ignoring");
        },
        registerResultCollector: function (Ne) {
          Ne && "function" == typeof Ne.addResult && (Oo.resultCollector = Ne);
        },
        get canvas() {
          return Oo.canvasContainer;
        },
        drawScannerArea: function () {
          return si.drawScannerArea();
        },
        decodeSingle: function (Ne, Qe) {
          var Q = this,
            se = new nt();
          return (Ne = N()({
            inputStream: {
              type: "ImageStream",
              sequence: !1,
              size: 800,
              src: Ne.src
            },
            numOfWorkers: 1,
            locator: {
              halfSample: !1
            }
          }, Ne)).numOfWorkers > 0 && (Ne.numOfWorkers = 0), Ne.numOfWorkers > 0 && (typeof Blob > "u" || typeof Worker > "u") && (console.warn("* no Worker and/or Blob support - forcing numOfWorkers to 0"), Ne.numOfWorkers = 0), new Promise(function (re, Ce) {
            try {
              Q.init(Ne, function () {
                Oo.canvasContainer = se.context.canvasContainer, Ua.once("processed", function (Be) {
                  se.stop(), Qe && Qe.call(null, Be), re(Be);
                }, !0), se.start();
              }, null, se);
            } catch (Be) {
              Ce(Be);
            }
          });
        },
        get default() {
          return xs;
        },
        Readers: d,
        CameraAccess: Ea,
        ImageDebug: Io,
        ImageWrapper: $o,
        ResultCollector: Ll
      };
    i.default = xs;
  }]).default;
});
