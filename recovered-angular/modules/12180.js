// Extracted from main; webpack module 12180. Factory, not an ES module.
((Ae, V, i) => {
  Ae = i.nmd(Ae);
  var a = 1 / 0,
    m = 17976931348623157e292,
    d = NaN,
    b = "[object Symbol]",
    A = /^\s+|\s+$/g,
    N = /\w*$/,
    I = /^[-+]0x[0-9a-f]+$/i,
    O = /^0b[01]+$/i,
    L = /^0o[0-7]+$/i,
    C = "\\ud800-\\udfff",
    v = "\\u0300-\\u036f\\ufe20-\\ufe23",
    f = "\\u20d0-\\u20f0",
    E = "\\ufe0e\\ufe0f",
    h = "[" + C + "]",
    x = "[" + v + f + "]",
    u = "\\ud83c[\\udffb-\\udfff]",
    R = "[^" + C + "]",
    B = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    y = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    j = "\\u200d",
    W = "(?:" + x + "|" + u + ")?",
    F = "[" + E + "]?",
    ke = F + W + "(?:" + j + "(?:" + [R, B, y].join("|") + ")" + F + W + ")*",
    J = "(?:" + [R + x + "?", x, B, y, h].join("|") + ")",
    fe = RegExp(u + "(?=" + u + ")|" + J + ke, "g"),
    ye = RegExp("[" + j + C + v + f + E + "]"),
    ae = parseInt,
    Y = "object" == typeof global && global && global.Object === Object && global,
    G = "object" == typeof self && self && self.Object === Object && self,
    te = Y || G || Function("return this")(),
    pe = V && !V.nodeType && V,
    be = pe && Ae && !Ae.nodeType && Ae,
    n = be && be.exports === pe && Y.process,
    Se = function () {
      try {
        return n && n.binding("util");
      } catch {}
    }(),
    qe = Se && Se.isRegExp,
    Rt = function Re(Dt) {
      return function (Ht) {
        return Ht?.[Dt];
      };
    }("length");
  function q(Dt) {
    return ye.test(Dt);
  }
  var Ue = Object.prototype.toString,
    Me = te.Symbol,
    Ke = Me ? Me.prototype : void 0,
    Ze = Ke ? Ke.toString : void 0;
  function Mt(Dt) {
    if ("string" == typeof Dt) return Dt;
    if (Ii(Dt)) return Ze ? Ze.call(Dt) : "";
    var Ht = Dt + "";
    return "0" == Ht && 1 / Dt == -a ? "-0" : Ht;
  }
  function Xt(Dt) {
    var Ht = typeof Dt;
    return !!Dt && ("object" == Ht || "function" == Ht);
  }
  var Pi = qe ? function st(Dt) {
    return function (Ht) {
      return Dt(Ht);
    };
  }(qe) : function Ee(Dt) {
    return Xt(Dt) && "[object RegExp]" == Ue.call(Dt);
  };
  function Ii(Dt) {
    return "symbol" == typeof Dt || function Nn(Dt) {
      return !!Dt && "object" == typeof Dt;
    }(Dt) && Ue.call(Dt) == b;
  }
  function fr(Dt) {
    return null == Dt ? "" : Mt(Dt);
  }
  Ae.exports = function pt(Dt, Ht) {
    var Dn = 30,
      vt = "...";
    if (Xt(Ht)) {
      var an = "separator" in Ht ? Ht.separator : an;
      Dn = "length" in Ht ? function co(Dt) {
        var Ht = function yi(Dt) {
            return Dt ? (Dt = function Jo(Dt) {
              if ("number" == typeof Dt) return Dt;
              if (Ii(Dt)) return d;
              if (Xt(Dt)) {
                var Ht = "function" == typeof Dt.valueOf ? Dt.valueOf() : Dt;
                Dt = Xt(Ht) ? Ht + "" : Ht;
              }
              if ("string" != typeof Dt) return 0 === Dt ? Dt : +Dt;
              Dt = Dt.replace(A, "");
              var Dn = O.test(Dt);
              return Dn || L.test(Dt) ? ae(Dt.slice(2), Dn ? 2 : 8) : I.test(Dt) ? d : +Dt;
            }(Dt)) === a || Dt === -a ? (Dt < 0 ? -1 : 1) * m : Dt == Dt ? Dt : 0 : 0 === Dt ? Dt : 0;
          }(Dt),
          Dn = Ht % 1;
        return Ht == Ht ? Dn ? Ht - Dn : Ht : 0;
      }(Ht.length) : Dn, vt = "omission" in Ht ? Mt(Ht.omission) : vt;
    }
    var li = (Dt = fr(Dt)).length;
    if (q(Dt)) {
      var zn = function ut(Dt) {
        return q(Dt) ? function Ft(Dt) {
          return Dt.match(fe) || [];
        }(Dt) : function We(Dt) {
          return Dt.split("");
        }(Dt);
      }(Dt);
      li = zn.length;
    }
    if (Dn >= li) return Dt;
    var $t = Dn - function mt(Dt) {
      return q(Dt) ? function Ct(Dt) {
        for (var Ht = fe.lastIndex = 0; fe.test(Dt);) Ht++;
        return Ht;
      }(Dt) : Rt(Dt);
    }(vt);
    if ($t < 1) return vt;
    var Mn = zn ? function Je(Dt, Ht, Dn) {
      var vt = Dt.length;
      return Dn = void 0 === Dn ? vt : Dn, !Ht && Dn >= vt ? Dt : function je(Dt, Ht, Dn) {
        var vt = -1,
          an = Dt.length;
        Ht < 0 && (Ht = -Ht > an ? 0 : an + Ht), (Dn = Dn > an ? an : Dn) < 0 && (Dn += an), an = Ht > Dn ? 0 : Dn - Ht >>> 0, Ht >>>= 0;
        for (var li = Array(an); ++vt < an;) li[vt] = Dt[vt + Ht];
        return li;
      }(Dt, Ht, Dn);
    }(zn, 0, $t).join("") : Dt.slice(0, $t);
    if (void 0 === an) return Mn + vt;
    if (zn && ($t += Mn.length - $t), Pi(an)) {
      if (Dt.slice($t).search(an)) {
        var Qn,
          In = Mn;
        for (an.global || (an = RegExp(an.source, fr(N.exec(an)) + "g")), an.lastIndex = 0; Qn = an.exec(In);) var ui = Qn.index;
        Mn = Mn.slice(0, void 0 === ui ? $t : ui);
      }
    } else if (Dt.indexOf(Mt(an), $t) != $t) {
      var To = Mn.lastIndexOf(an);
      To > -1 && (Mn = Mn.slice(0, To));
    }
    return Mn + vt;
  };
});
