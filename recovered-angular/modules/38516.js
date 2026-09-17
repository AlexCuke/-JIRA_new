// Extracted from main; webpack module 38516. Factory, not an ES module.
(Ae => {
  var $t,
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
    R = ($t = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + $t : "",
    B = x.toString,
    y = u.hasOwnProperty,
    j = u.toString,
    W = RegExp("^" + B.call(y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    F = v.Symbol,
    Le = h.splice,
    ke = Mt(v, "Map"),
    J = Mt(Object, "create"),
    fe = F ? F.prototype : void 0,
    ye = fe ? fe.toString : void 0;
  function ae($t) {
    var Mn = -1,
      Qn = $t ? $t.length : 0;
    for (this.clear(); ++Mn < Qn;) {
      var In = $t[Mn];
      this.set(In[0], In[1]);
    }
  }
  function le($t) {
    var Mn = -1,
      Qn = $t ? $t.length : 0;
    for (this.clear(); ++Mn < Qn;) {
      var In = $t[Mn];
      this.set(In[0], In[1]);
    }
  }
  function Re($t) {
    var Mn = -1,
      Qn = $t ? $t.length : 0;
    for (this.clear(); ++Mn < Qn;) {
      var In = $t[Mn];
      this.set(In[0], In[1]);
    }
  }
  function Ft($t, Mn) {
    for (var Qn = $t.length; Qn--;) if (pt($t[Qn][0], Mn)) return Qn;
    return -1;
  }
  function Ee($t) {
    return Dt($t) ? $t : Ii($t);
  }
  function je($t, Mn) {
    var Qn = $t.__data__;
    return function Xt($t) {
      var Mn = typeof $t;
      return "string" == Mn || "number" == Mn || "symbol" == Mn || "boolean" == Mn ? "__proto__" !== $t : null === $t;
    }(Mn) ? Qn["string" == typeof Mn ? "string" : "hash"] : Qn.map;
  }
  function Mt($t, Mn) {
    var Qn = function f($t, Mn) {
      return $t?.[Mn];
    }($t, Mn);
    return function Ue($t) {
      if (!Dn($t) || function Nn($t) {
        return !!R && R in $t;
      }($t)) return !1;
      var Mn = function Ht($t) {
        var Mn = Dn($t) ? j.call($t) : "";
        return Mn == e || Mn == a;
      }($t) || function E($t) {
        var Mn = !1;
        if (null != $t && "function" != typeof $t.toString) try {
          Mn = !!($t + "");
        } catch {}
        return Mn;
      }($t) ? W : O;
      return Mn.test(function co($t) {
        if (null != $t) {
          try {
            return B.call($t);
          } catch {}
          try {
            return $t + "";
          } catch {}
        }
        return "";
      }($t));
    }(Qn) ? Qn : void 0;
  }
  function Je($t, Mn) {
    if (Dt($t)) return !1;
    var Qn = typeof $t;
    return !("number" != Qn && "symbol" != Qn && "boolean" != Qn && null != $t && !an($t)) || M.test($t) || !d.test($t) || null != Mn && $t in Object(Mn);
  }
  ae.prototype.clear = function Y() {
    this.__data__ = J ? J(null) : {};
  }, ae.prototype.delete = function G($t) {
    return this.has($t) && delete this.__data__[$t];
  }, ae.prototype.get = function te($t) {
    var Mn = this.__data__;
    if (J) {
      var Qn = Mn[$t];
      return Qn === i ? void 0 : Qn;
    }
    return y.call(Mn, $t) ? Mn[$t] : void 0;
  }, ae.prototype.has = function pe($t) {
    var Mn = this.__data__;
    return J ? void 0 !== Mn[$t] : y.call(Mn, $t);
  }, ae.prototype.set = function be($t, Mn) {
    return this.__data__[$t] = J && void 0 === Mn ? i : Mn, this;
  }, le.prototype.clear = function n() {
    this.__data__ = [];
  }, le.prototype.delete = function Se($t) {
    var Mn = this.__data__,
      Qn = Ft(Mn, $t);
    return !(Qn < 0 || (Qn == Mn.length - 1 ? Mn.pop() : Le.call(Mn, Qn, 1), 0));
  }, le.prototype.get = function qe($t) {
    var Mn = this.__data__,
      Qn = Ft(Mn, $t);
    return Qn < 0 ? void 0 : Mn[Qn][1];
  }, le.prototype.has = function Rt($t) {
    return Ft(this.__data__, $t) > -1;
  }, le.prototype.set = function We($t, Mn) {
    var Qn = this.__data__,
      In = Ft(Qn, $t);
    return In < 0 ? Qn.push([$t, Mn]) : Qn[In][1] = Mn, this;
  }, Re.prototype.clear = function st() {
    this.__data__ = {
      hash: new ae(),
      map: new (ke || le)(),
      string: new ae()
    };
  }, Re.prototype.delete = function q($t) {
    return je(this, $t).delete($t);
  }, Re.prototype.get = function mt($t) {
    return je(this, $t).get($t);
  }, Re.prototype.has = function ut($t) {
    return je(this, $t).has($t);
  }, Re.prototype.set = function Ct($t, Mn) {
    return je(this, $t).set($t, Mn), this;
  };
  var Ii = fr(function ($t) {
    $t = function li($t) {
      return null == $t ? "" : function Ke($t) {
        if ("string" == typeof $t) return $t;
        if (an($t)) return ye ? ye.call($t) : "";
        var Mn = $t + "";
        return "0" == Mn && 1 / $t == -t ? "-0" : Mn;
      }($t);
    }($t);
    var Mn = [];
    return b.test($t) && Mn.push(""), $t.replace(A, function (Qn, In, ui, To) {
      Mn.push(ui ? To.replace(I, "$1") : In || Qn);
    }), Mn;
  });
  function yi($t) {
    if ("string" == typeof $t || an($t)) return $t;
    var Mn = $t + "";
    return "0" == Mn && 1 / $t == -t ? "-0" : Mn;
  }
  function fr($t, Mn) {
    if ("function" != typeof $t || Mn && "function" != typeof Mn) throw new TypeError(V);
    var Qn = function () {
      var In = arguments,
        ui = Mn ? Mn.apply(this, In) : In[0],
        To = Qn.cache;
      if (To.has(ui)) return To.get(ui);
      var bi = $t.apply(this, In);
      return Qn.cache = To.set(ui, bi), bi;
    };
    return Qn.cache = new (fr.Cache || Re)(), Qn;
  }
  function pt($t, Mn) {
    return $t === Mn || $t != $t && Mn != Mn;
  }
  fr.Cache = Re;
  var Dt = Array.isArray;
  function Dn($t) {
    var Mn = typeof $t;
    return !!$t && ("object" == Mn || "function" == Mn);
  }
  function an($t) {
    return "symbol" == typeof $t || function vt($t) {
      return !!$t && "object" == typeof $t;
    }($t) && j.call($t) == m;
  }
  Ae.exports = function zn($t, Mn) {
    return null == $t || function Ze($t, Mn) {
      $t = function Pi($t, Mn) {
        return 1 == Mn.length ? $t : function Et($t, Mn) {
          for (var Qn = 0, In = (Mn = Je(Mn, $t) ? [Mn] : Ee(Mn)).length; null != $t && Qn < In;) $t = $t[yi(Mn[Qn++])];
          return Qn && Qn == In ? $t : void 0;
        }($t, function Me($t, Mn, Qn) {
          var In = -1,
            ui = $t.length;
          Mn < 0 && (Mn = -Mn > ui ? 0 : ui + Mn), (Qn = Qn > ui ? ui : Qn) < 0 && (Qn += ui), ui = Mn > Qn ? 0 : Qn - Mn >>> 0, Mn >>>= 0;
          for (var To = Array(ui); ++In < ui;) To[In] = $t[In + Mn];
          return To;
        }(Mn, 0, -1));
      }($t, Mn = Je(Mn, $t) ? [Mn] : Ee(Mn));
      var Qn = yi(function Jo($t) {
        var Mn = $t ? $t.length : 0;
        return Mn ? $t[Mn - 1] : void 0;
      }(Mn));
      return !(null != $t && y.call($t, Qn)) || delete $t[Qn];
    }($t, Mn);
  };
});
