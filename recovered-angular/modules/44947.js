// Extracted from main; webpack module 44947. Factory, not an ES module.
(Ae => {
  var vt,
    V = "Expected a function",
    i = "__lodash_hash_undefined__",
    t = 1 / 0,
    e = "[object Function]",
    a = "[object GeneratorFunction]",
    m = "[object Symbol]",
    d = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    M = /^\w*$/,
    b = /^\./,
    A = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    I = /\\(\\)?/g,
    O = /^\[object .+?Constructor\]$/,
    L = "object" == typeof global && global && global.Object === Object && global,
    C = "object" == typeof self && self && self.Object === Object && self,
    v = L || C || Function("return this")(),
    h = Array.prototype,
    x = Function.prototype,
    u = Object.prototype,
    T = v["__core-js_shared__"],
    R = (vt = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + vt : "",
    B = x.toString,
    y = u.hasOwnProperty,
    j = u.toString,
    W = RegExp("^" + B.call(y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    F = v.Symbol,
    Le = h.splice,
    ke = Ee(v, "Map"),
    J = Ee(Object, "create"),
    fe = F ? F.prototype : void 0,
    ye = fe ? fe.toString : void 0;
  function ae(vt) {
    var an = -1,
      li = vt ? vt.length : 0;
    for (this.clear(); ++an < li;) {
      var zn = vt[an];
      this.set(zn[0], zn[1]);
    }
  }
  function le(vt) {
    var an = -1,
      li = vt ? vt.length : 0;
    for (this.clear(); ++an < li;) {
      var zn = vt[an];
      this.set(zn[0], zn[1]);
    }
  }
  function Re(vt) {
    var an = -1,
      li = vt ? vt.length : 0;
    for (this.clear(); ++an < li;) {
      var zn = vt[an];
      this.set(zn[0], zn[1]);
    }
  }
  function Ft(vt, an) {
    for (var li = vt.length; li--;) if (yi(vt[li][0], an)) return li;
    return -1;
  }
  function Ze(vt, an) {
    var li = vt.__data__;
    return function Mt(vt) {
      var an = typeof vt;
      return "string" == an || "number" == an || "symbol" == an || "boolean" == an ? "__proto__" !== vt : null === vt;
    }(an) ? li["string" == typeof an ? "string" : "hash"] : li.map;
  }
  function Ee(vt, an) {
    var li = function f(vt, an) {
      return vt?.[an];
    }(vt, an);
    return function Ue(vt) {
      if (!fr(vt) || function Je(vt) {
        return !!R && R in vt;
      }(vt)) return !1;
      var an = function Jo(vt) {
        var an = fr(vt) ? j.call(vt) : "";
        return an == e || an == a;
      }(vt) || function E(vt) {
        var an = !1;
        if (null != vt && "function" != typeof vt.toString) try {
          an = !!(vt + "");
        } catch {}
        return an;
      }(vt) ? W : O;
      return an.test(function Pi(vt) {
        if (null != vt) {
          try {
            return B.call(vt);
          } catch {}
          try {
            return vt + "";
          } catch {}
        }
        return "";
      }(vt));
    }(li) ? li : void 0;
  }
  ae.prototype.clear = function Y() {
    this.__data__ = J ? J(null) : {};
  }, ae.prototype.delete = function G(vt) {
    return this.has(vt) && delete this.__data__[vt];
  }, ae.prototype.get = function te(vt) {
    var an = this.__data__;
    if (J) {
      var li = an[vt];
      return li === i ? void 0 : li;
    }
    return y.call(an, vt) ? an[vt] : void 0;
  }, ae.prototype.has = function pe(vt) {
    var an = this.__data__;
    return J ? void 0 !== an[vt] : y.call(an, vt);
  }, ae.prototype.set = function be(vt, an) {
    return this.__data__[vt] = J && void 0 === an ? i : an, this;
  }, le.prototype.clear = function n() {
    this.__data__ = [];
  }, le.prototype.delete = function Se(vt) {
    var an = this.__data__,
      li = Ft(an, vt);
    return !(li < 0 || (li == an.length - 1 ? an.pop() : Le.call(an, li, 1), 0));
  }, le.prototype.get = function qe(vt) {
    var an = this.__data__,
      li = Ft(an, vt);
    return li < 0 ? void 0 : an[li][1];
  }, le.prototype.has = function Rt(vt) {
    return Ft(this.__data__, vt) > -1;
  }, le.prototype.set = function We(vt, an) {
    var li = this.__data__,
      zn = Ft(li, vt);
    return zn < 0 ? li.push([vt, an]) : li[zn][1] = an, this;
  }, Re.prototype.clear = function st() {
    this.__data__ = {
      hash: new ae(),
      map: new (ke || le)(),
      string: new ae()
    };
  }, Re.prototype.delete = function q(vt) {
    return Ze(this, vt).delete(vt);
  }, Re.prototype.get = function mt(vt) {
    return Ze(this, vt).get(vt);
  }, Re.prototype.has = function ut(vt) {
    return Ze(this, vt).has(vt);
  }, Re.prototype.set = function Ct(vt, an) {
    return Ze(this, vt).set(vt, an), this;
  };
  var Xt = Ii(function (vt) {
    vt = function Ht(vt) {
      return null == vt ? "" : function Me(vt) {
        if ("string" == typeof vt) return vt;
        if (Dt(vt)) return ye ? ye.call(vt) : "";
        var an = vt + "";
        return "0" == an && 1 / vt == -t ? "-0" : an;
      }(vt);
    }(vt);
    var an = [];
    return b.test(vt) && an.push(""), vt.replace(A, function (li, zn, $t, Mn) {
      an.push($t ? Mn.replace(I, "$1") : zn || li);
    }), an;
  });
  function Nn(vt) {
    if ("string" == typeof vt || Dt(vt)) return vt;
    var an = vt + "";
    return "0" == an && 1 / vt == -t ? "-0" : an;
  }
  function Ii(vt, an) {
    if ("function" != typeof vt || an && "function" != typeof an) throw new TypeError(V);
    var li = function () {
      var zn = arguments,
        $t = an ? an.apply(this, zn) : zn[0],
        Mn = li.cache;
      if (Mn.has($t)) return Mn.get($t);
      var Qn = vt.apply(this, zn);
      return li.cache = Mn.set($t, Qn), Qn;
    };
    return li.cache = new (Ii.Cache || Re)(), li;
  }
  function yi(vt, an) {
    return vt === an || vt != vt && an != an;
  }
  Ii.Cache = Re;
  var co = Array.isArray;
  function fr(vt) {
    var an = typeof vt;
    return !!vt && ("object" == an || "function" == an);
  }
  function Dt(vt) {
    return "symbol" == typeof vt || function pt(vt) {
      return !!vt && "object" == typeof vt;
    }(vt) && j.call(vt) == m;
  }
  Ae.exports = function Dn(vt, an, li) {
    var zn = null == vt ? void 0 : function Et(vt, an) {
      an = function je(vt, an) {
        if (co(vt)) return !1;
        var li = typeof vt;
        return !("number" != li && "symbol" != li && "boolean" != li && null != vt && !Dt(vt)) || M.test(vt) || !d.test(vt) || null != an && vt in Object(an);
      }(an, vt) ? [an] : function Ke(vt) {
        return co(vt) ? vt : Xt(vt);
      }(an);
      for (var li = 0, zn = an.length; null != vt && li < zn;) vt = vt[Nn(an[li++])];
      return li && li == zn ? vt : void 0;
    }(vt, an);
    return void 0 === zn ? li : zn;
  };
});
