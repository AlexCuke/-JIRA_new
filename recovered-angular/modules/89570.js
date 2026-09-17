// Extracted from main; webpack module 89570. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(J) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (fe) {
      return typeof fe;
    } : function (fe) {
      return fe && "function" == typeof Symbol && fe.constructor === Symbol && fe !== Symbol.prototype ? "symbol" : typeof fe;
    })(J);
  }
  function e(J, fe) {
    if (!(J instanceof fe)) throw new TypeError("Cannot call a class as a function");
  }
  function a(J, fe) {
    for (var ye = 0; ye < fe.length; ye++) {
      var ae = fe[ye];
      ae.enumerable = ae.enumerable || !1, ae.configurable = !0, "value" in ae && (ae.writable = !0), Object.defineProperty(J, ae.key, ae);
    }
  }
  function m(J, fe, ye) {
    return fe && a(J.prototype, fe), ye && a(J, ye), Object.defineProperty(J, "prototype", {
      writable: !1
    }), J;
  }
  function M(J) {
    return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (ye) {
      return ye.__proto__ || Object.getPrototypeOf(ye);
    })(J);
  }
  function b(J, fe) {
    return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (ae, Y) {
      return ae.__proto__ = Y, ae;
    })(J, fe);
  }
  function A() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function N(J, fe, ye) {
    return (N = A() ? Reflect.construct.bind() : function (Y, G, te) {
      var pe = [null];
      pe.push.apply(pe, G);
      var le = new (Function.bind.apply(Y, pe))();
      return te && b(le, te.prototype), le;
    }).apply(null, arguments);
  }
  function O(J) {
    var fe = "function" == typeof Map ? new Map() : void 0;
    return O = function (ae) {
      if (null === ae || !function I(J) {
        return -1 !== Function.toString.call(J).indexOf("[native code]");
      }(ae)) return ae;
      if ("function" != typeof ae) throw new TypeError("Super expression must either be null or a function");
      if (typeof fe < "u") {
        if (fe.has(ae)) return fe.get(ae);
        fe.set(ae, Y);
      }
      function Y() {
        return N(ae, arguments, M(this).constructor);
      }
      return Y.prototype = Object.create(ae.prototype, {
        constructor: {
          value: Y,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b(Y, ae);
    }, O(J);
  }
  function x(J, fe) {
    if (J) {
      if ("string" == typeof J) return u(J, fe);
      var ye = Object.prototype.toString.call(J).slice(8, -1);
      if ("Object" === ye && J.constructor && (ye = J.constructor.name), "Map" === ye || "Set" === ye) return Array.from(J);
      if ("Arguments" === ye || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ye)) return u(J, fe);
    }
  }
  function u(J, fe) {
    (null == fe || fe > J.length) && (fe = J.length);
    for (var ye = 0, ae = new Array(fe); ye < fe; ye++) ae[ye] = J[ye];
    return ae;
  }
  i.d(V, {
    j: () => F
  });
  var B = Object.prototype.hasOwnProperty;
  function y(J, fe) {
    return (J = J.slice()).push(fe), J;
  }
  function j(J, fe) {
    return (fe = fe.slice()).unshift(J), fe;
  }
  var W = function (J) {
    !function d(J, fe) {
      if ("function" != typeof fe && null !== fe) throw new TypeError("Super expression must either be null or a function");
      J.prototype = Object.create(fe && fe.prototype, {
        constructor: {
          value: J,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(J, "prototype", {
        writable: !1
      }), fe && b(J, fe);
    }(ye, J);
    var fe = function v(J) {
      var fe = A();
      return function () {
        var Y,
          ae = M(J);
        if (fe) {
          var G = M(this).constructor;
          Y = Reflect.construct(ae, arguments, G);
        } else Y = ae.apply(this, arguments);
        return function C(J, fe) {
          if (fe && ("object" == typeof fe || "function" == typeof fe)) return fe;
          if (void 0 !== fe) throw new TypeError("Derived constructors may only return object or undefined");
          return function L(J) {
            if (void 0 === J) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return J;
          }(J);
        }(this, Y);
      };
    }(ye);
    function ye(ae) {
      var Y;
      return e(this, ye), (Y = fe.call(this, "JSONPath should not be called with \"new\" (it prevents return of (unwrapped) scalar values)")).avoidNew = !0, Y.value = ae, Y.name = "NewError", Y;
    }
    return m(ye);
  }(O(Error));
  function F(J, fe, ye, ae, Y) {
    if (!(this instanceof F)) try {
      return new F(J, fe, ye, ae, Y);
    } catch (be) {
      if (!be.avoidNew) throw be;
      return be.value;
    }
    "string" == typeof J && (Y = ae, ae = ye, ye = fe, fe = J, J = null);
    var G = J && "object" === t(J);
    if (this.json = (J = J || {}).json || ye, this.path = J.path || fe, this.resultType = J.resultType || "value", this.flatten = J.flatten || !1, this.wrap = !B.call(J, "wrap") || J.wrap, this.sandbox = J.sandbox || {}, this.preventEval = J.preventEval || !1, this.parent = J.parent || null, this.parentProperty = J.parentProperty || null, this.callback = J.callback || ae || null, this.otherTypeCallback = J.otherTypeCallback || Y || function () {
      throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
    }, !1 !== J.autostart) {
      var te = {
        path: G ? J.path : fe
      };
      G ? "json" in J && (te.json = J.json) : te.json = ye;
      var pe = this.evaluate(te);
      if (!pe || "object" !== t(pe)) throw new W(pe);
      return pe;
    }
  }
  F.prototype.evaluate = function (J, fe, ye, ae) {
    var Y = this,
      G = this.parent,
      te = this.parentProperty,
      pe = this.flatten,
      be = this.wrap;
    if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, ye = ye || this.callback, this.currOtherTypeCallback = ae || this.otherTypeCallback, fe = fe || this.json, (J = J || this.path) && "object" === t(J) && !Array.isArray(J)) {
      if (!J.path && "" !== J.path) throw new TypeError("You must supply a \"path\" property when providing an object argument to JSONPath.evaluate().");
      if (!B.call(J, "json")) throw new TypeError("You must supply a \"json\" property when providing an object argument to JSONPath.evaluate().");
      fe = J.json, pe = B.call(J, "flatten") ? J.flatten : pe, this.currResultType = B.call(J, "resultType") ? J.resultType : this.currResultType, this.currSandbox = B.call(J, "sandbox") ? J.sandbox : this.currSandbox, be = B.call(J, "wrap") ? J.wrap : be, this.currPreventEval = B.call(J, "preventEval") ? J.preventEval : this.currPreventEval, ye = B.call(J, "callback") ? J.callback : ye, this.currOtherTypeCallback = B.call(J, "otherTypeCallback") ? J.otherTypeCallback : this.currOtherTypeCallback, G = B.call(J, "parent") ? J.parent : G, te = B.call(J, "parentProperty") ? J.parentProperty : te, J = J.path;
    }
    if (G = G || null, te = te || null, Array.isArray(J) && (J = F.toPathString(J)), (J || "" === J) && fe) {
      var n = F.toPathArray(J);
      "$" === n[0] && n.length > 1 && n.shift(), this._hasParentSelector = null;
      var Se = this._trace(n, fe, ["$"], G, te, ye).filter(function (qe) {
        return qe && !qe.isParentSelector;
      });
      return Se.length ? be || 1 !== Se.length || Se[0].hasArrExpr ? Se.reduce(function (qe, Rt) {
        var We = Y._getPreferredOutput(Rt);
        return pe && Array.isArray(We) ? qe = qe.concat(We) : qe.push(We), qe;
      }, []) : this._getPreferredOutput(Se[0]) : be ? [] : void 0;
    }
  }, F.prototype._getPreferredOutput = function (J) {
    var fe = this.currResultType;
    switch (fe) {
      case "all":
        var ye = Array.isArray(J.path) ? J.path : F.toPathArray(J.path);
        return J.pointer = F.toPointer(ye), J.path = "string" == typeof J.path ? J.path : F.toPathString(J.path), J;
      case "value":
      case "parent":
      case "parentProperty":
        return J[fe];
      case "path":
        return F.toPathString(J[fe]);
      case "pointer":
        return F.toPointer(J.path);
      default:
        throw new TypeError("Unknown result type");
    }
  }, F.prototype._handleCallback = function (J, fe, ye) {
    if (fe) {
      var ae = this._getPreferredOutput(J);
      J.path = "string" == typeof J.path ? J.path : F.toPathString(J.path), fe(ae, ye, J);
    }
  }, F.prototype._trace = function (J, fe, ye, ae, Y, G, te, pe) {
    var le,
      be = this;
    if (!J.length) return this._handleCallback(le = {
      path: ye,
      value: fe,
      parent: ae,
      parentProperty: Y,
      hasArrExpr: te
    }, G, "value"), le;
    var n = J[0],
      Se = J.slice(1),
      qe = [];
    function Rt(Ee) {
      Array.isArray(Ee) ? Ee.forEach(function (je) {
        qe.push(je);
      }) : qe.push(Ee);
    }
    if (("string" != typeof n || pe) && fe && B.call(fe, n)) Rt(this._trace(Se, fe[n], y(ye, n), fe, n, G, te));else if ("*" === n) this._walk(fe, function (Ee) {
      Rt(be._trace(Se, fe[Ee], y(ye, Ee), fe, Ee, G, !0, !0));
    });else if (".." === n) Rt(this._trace(Se, fe, ye, ae, Y, G, te)), this._walk(fe, function (Ee) {
      "object" === t(fe[Ee]) && Rt(be._trace(J.slice(), fe[Ee], y(ye, Ee), fe, Ee, G, !0));
    });else {
      if ("^" === n) return this._hasParentSelector = !0, {
        path: ye.slice(0, -1),
        expr: Se,
        isParentSelector: !0
      };
      if ("~" === n) return le = {
        path: y(ye, n),
        value: Y,
        parent: ae,
        parentProperty: null
      }, this._handleCallback(le, G, "property"), le;
      if ("$" === n) Rt(this._trace(Se, fe, ye, null, null, G, te));else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(n)) Rt(this._slice(n, Se, fe, ye, ae, Y, G));else if (0 === n.indexOf("?(")) {
        if (this.currPreventEval) throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
        var We = n.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
        this._walk(fe, function (Ee) {
          be._eval(We, fe[Ee], Ee, ye, ae, Y) && Rt(be._trace(Se, fe[Ee], y(ye, Ee), fe, Ee, G, !0));
        });
      } else if ("(" === n[0]) {
        if (this.currPreventEval) throw new Error("Eval [(expr)] prevented in JSONPath expression.");
        Rt(this._trace(j(this._eval(n, fe, ye[ye.length - 1], ye.slice(0, -1), ae, Y), Se), fe, ye, ae, Y, G, te));
      } else if ("@" === n[0]) {
        var Re = !1,
          st = n.slice(1, -2);
        switch (st) {
          case "scalar":
            (!fe || !["object", "function"].includes(t(fe))) && (Re = !0);
            break;
          case "boolean":
          case "string":
          case "undefined":
          case "function":
            t(fe) === st && (Re = !0);
            break;
          case "integer":
            Number.isFinite(fe) && !(fe % 1) && (Re = !0);
            break;
          case "number":
            Number.isFinite(fe) && (Re = !0);
            break;
          case "nonFinite":
            "number" == typeof fe && !Number.isFinite(fe) && (Re = !0);
            break;
          case "object":
            fe && t(fe) === st && (Re = !0);
            break;
          case "array":
            Array.isArray(fe) && (Re = !0);
            break;
          case "other":
            Re = this.currOtherTypeCallback(fe, ye, ae, Y);
            break;
          case "null":
            null === fe && (Re = !0);
            break;
          default:
            throw new TypeError("Unknown value type " + st);
        }
        if (Re) return this._handleCallback(le = {
          path: ye,
          value: fe,
          parent: ae,
          parentProperty: Y
        }, G, "value"), le;
      } else if ("`" === n[0] && fe && B.call(fe, n.slice(1))) {
        var q = n.slice(1);
        Rt(this._trace(Se, fe[q], y(ye, q), fe, q, G, te, !0));
      } else if (n.includes(",")) {
        var Ct,
          ut = function R(J, fe) {
            var ye = typeof Symbol < "u" && J[Symbol.iterator] || J["@@iterator"];
            if (!ye) {
              if (Array.isArray(J) || (ye = x(J)) || fe && J && "number" == typeof J.length) {
                ye && (J = ye);
                var ae = 0,
                  Y = function () {};
                return {
                  s: Y,
                  n: function () {
                    return ae >= J.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: J[ae++]
                    };
                  },
                  e: function (be) {
                    throw be;
                  },
                  f: Y
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var pe,
              G = !0,
              te = !1;
            return {
              s: function () {
                ye = ye.call(J);
              },
              n: function () {
                var be = ye.next();
                return G = be.done, be;
              },
              e: function (be) {
                te = !0, pe = be;
              },
              f: function () {
                try {
                  !G && null != ye.return && ye.return();
                } finally {
                  if (te) throw pe;
                }
              }
            };
          }(n.split(","));
        try {
          for (ut.s(); !(Ct = ut.n()).done;) Rt(this._trace(j(Ct.value, Se), fe, ye, ae, Y, G, !0));
        } catch (Ee) {
          ut.e(Ee);
        } finally {
          ut.f();
        }
      } else !pe && fe && B.call(fe, n) && Rt(this._trace(Se, fe[n], y(ye, n), fe, n, G, te, !0));
    }
    if (this._hasParentSelector) for (var Et = 0; Et < qe.length; Et++) {
      var Ue = qe[Et];
      if (Ue && Ue.isParentSelector) {
        var Me = this._trace(Ue.expr, fe, Ue.path, ae, Y, G, te);
        if (Array.isArray(Me)) {
          qe[Et] = Me[0];
          for (var Ke = Me.length, Ze = 1; Ze < Ke; Ze++) Et++, qe.splice(Et, 0, Me[Ze]);
        } else qe[Et] = Me;
      }
    }
    return qe;
  }, F.prototype._walk = function (J, fe) {
    if (Array.isArray(J)) for (var ye = J.length, ae = 0; ae < ye; ae++) fe(ae);else J && "object" === t(J) && Object.keys(J).forEach(function (Y) {
      fe(Y);
    });
  }, F.prototype._slice = function (J, fe, ye, ae, Y, G, te) {
    if (Array.isArray(ye)) {
      var pe = ye.length,
        be = J.split(":"),
        le = be[2] && Number.parseInt(be[2]) || 1,
        n = be[0] && Number.parseInt(be[0]) || 0,
        Se = be[1] && Number.parseInt(be[1]) || pe;
      n = n < 0 ? Math.max(0, n + pe) : Math.min(pe, n), Se = Se < 0 ? Math.max(0, Se + pe) : Math.min(pe, Se);
      for (var qe = [], Rt = n; Rt < Se; Rt += le) this._trace(j(Rt, fe), ye, ae, Y, G, te, !0).forEach(function (Re) {
        qe.push(Re);
      });
      return qe;
    }
  }, F.prototype._eval = function (J, fe, ye, ae, Y, G) {
    this.currSandbox._$_parentProperty = G, this.currSandbox._$_parent = Y, this.currSandbox._$_property = ye, this.currSandbox._$_root = this.json, this.currSandbox._$_v = fe;
    var te = J.includes("@path");
    te && (this.currSandbox._$_path = F.toPathString(ae.concat([ye])));
    var pe = "script:" + J;
    if (!F.cache[pe]) {
      var be = J.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
      te && (be = be.replace(/@path/g, "_$_path")), F.cache[pe] = new this.vm.Script(be);
    }
    try {
      return F.cache[pe].runInNewContext(this.currSandbox);
    } catch (le) {
      throw new Error("jsonPath: " + le.message + ": " + J);
    }
  }, F.cache = {}, F.toPathString = function (J) {
    for (var fe = J, ye = fe.length, ae = "$", Y = 1; Y < ye; Y++) /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(fe[Y]) || (ae += /^[\*0-9]+$/.test(fe[Y]) ? "[" + fe[Y] + "]" : "['" + fe[Y] + "']");
    return ae;
  }, F.toPointer = function (J) {
    for (var fe = J, ye = fe.length, ae = "", Y = 1; Y < ye; Y++) /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(fe[Y]) || (ae += "/" + fe[Y].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
    return ae;
  }, F.toPathArray = function (J) {
    var fe = F.cache;
    if (fe[J]) return fe[J].concat();
    var ye = [],
      Y = J.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function (G, te) {
        return "[#" + (ye.push(te) - 1) + "]";
      }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function (G, te) {
        return "['" + te.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
      }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function (G, te) {
        return ";" + te.split("").join(";") + ";";
      }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "").split(";").map(function (G) {
        var te = G.match(/#([0-9]+)/);
        return te && te[1] ? ye[te[1]] : G;
      });
    return fe[J] = Y, fe[J].concat();
  }, F.prototype.vm = {
    Script: function () {
      function J(fe) {
        e(this, J), this.code = fe;
      }
      return m(J, [{
        key: "runInNewContext",
        value: function (ye) {
          var ae = this.code,
            Y = Object.keys(ye),
            G = [];
          !function (fe, ye, ae) {
            for (var Y = fe.length, G = 0; G < Y; G++) ae(fe[G]) && ye.push(fe.splice(G--, 1)[0]);
          }(Y, G, function (n) {
            return "function" == typeof ye[n];
          });
          var te = Y.map(function (n, Se) {
              return ye[n];
            }),
            pe = G.reduce(function (n, Se) {
              var qe = ye[Se].toString();
              return /function/.test(qe) || (qe = "function " + qe), "var " + Se + "=" + qe + ";" + n;
            }, "");
          !/(["'])use strict\1/.test(ae = pe + ae) && !Y.includes("arguments") && (ae = "var arguments = undefined;" + ae);
          var be = (ae = ae.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "")).lastIndexOf(";"),
            le = be > -1 ? ae.slice(0, be + 1) + " return " + ae.slice(be + 1) : " return " + ae;
          return N(Function, Y.concat([le])).apply(void 0, function f(J) {
            return function E(J) {
              if (Array.isArray(J)) return u(J);
            }(J) || function h(J) {
              if (typeof Symbol < "u" && null != J[Symbol.iterator] || null != J["@@iterator"]) return Array.from(J);
            }(J) || x(J) || function T() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(te));
        }
      }]), J;
    }()
  };
});
