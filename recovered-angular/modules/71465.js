// Extracted from main; webpack module 71465. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(51708),
    e = i(34792),
    a = i(82259),
    m = i(52118),
    d = i(34425),
    M = i(46221),
    b = i(43114),
    A = i(33667),
    N = i(14655),
    I = i(12636),
    O = i(42088),
    L = i(17078),
    C = i(64016),
    v = i(62033),
    f = i(47103);
  function T(W, F, Le) {
    var fe,
      ye,
      ke = W.size,
      J = L.getEncodedBits(F, Le);
    for (fe = 0; fe < 15; fe++) W.set(fe < 6 ? fe : fe < 8 ? fe + 1 : ke - 15 + fe, 8, ye = 1 == (J >> fe & 1), !0), W.set(8, fe < 8 ? ke - fe - 1 : fe < 9 ? 15 - fe - 1 + 1 : 15 - fe - 1, ye, !0);
    W.set(ke - 8, 8, 1, !0);
  }
  function j(W, F, Le, ke) {
    var J;
    if (f(W)) J = v.fromArray(W);else {
      if ("string" != typeof W) throw new Error("Invalid data");
      var fe = F;
      if (!fe) {
        var ye = v.rawSplit(W);
        fe = O.getBestVersionForData(ye, Le);
      }
      J = v.fromString(W, fe || 40);
    }
    var ae = O.getBestVersionForData(J, Le);
    if (!ae) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (F) {
      if (F < ae) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + ae + ".\n");
    } else F = ae;
    var Y = function B(W, F, Le) {
        var ke = new m();
        Le.forEach(function (G) {
          ke.put(G.mode.bit, 4), ke.put(G.getLength(), C.getCharCountIndicator(G.mode, W)), G.write(ke);
        });
        var ye = 8 * (e.getSymbolTotalCodewords(W) - N.getTotalCodewordsCount(W, F));
        for (ke.getLengthInBits() + 4 <= ye && ke.put(0, 4); ke.getLengthInBits() % 8 != 0;) ke.putBit(0);
        for (var ae = (ye - ke.getLengthInBits()) / 8, Y = 0; Y < ae; Y++) ke.put(Y % 2 ? 17 : 236, 8);
        return function y(W, F, Le) {
          for (var ke = e.getSymbolTotalCodewords(F), fe = ke - N.getTotalCodewordsCount(F, Le), ye = N.getBlocksCount(F, Le), Y = ye - ke % ye, G = Math.floor(ke / ye), te = Math.floor(fe / ye), pe = te + 1, be = G - te, le = new I(be), n = 0, Se = new Array(ye), qe = new Array(ye), Rt = 0, We = new t(W.buffer), Re = 0; Re < ye; Re++) {
            var st = Re < Y ? te : pe;
            Se[Re] = We.slice(n, n + st), qe[Re] = le.encode(Se[Re]), n += st, Rt = Math.max(Rt, st);
          }
          var ut,
            Ct,
            q = new t(ke),
            mt = 0;
          for (ut = 0; ut < Rt; ut++) for (Ct = 0; Ct < ye; Ct++) ut < Se[Ct].length && (q[mt++] = Se[Ct][ut]);
          for (ut = 0; ut < be; ut++) for (Ct = 0; Ct < ye; Ct++) q[mt++] = qe[Ct][ut];
          return q;
        }(ke, W, F);
      }(F, Le, J),
      G = e.getSymbolSize(F),
      te = new d(G);
    return function E(W, F) {
      for (var Le = W.size, ke = b.getPositions(F), J = 0; J < ke.length; J++) for (var fe = ke[J][0], ye = ke[J][1], ae = -1; ae <= 7; ae++) if (!(fe + ae <= -1 || Le <= fe + ae)) for (var Y = -1; Y <= 7; Y++) ye + Y <= -1 || Le <= ye + Y || W.set(fe + ae, ye + Y, ae >= 0 && ae <= 6 && (0 === Y || 6 === Y) || Y >= 0 && Y <= 6 && (0 === ae || 6 === ae) || ae >= 2 && ae <= 4 && Y >= 2 && Y <= 4, !0);
    }(te, F), function h(W) {
      for (var F = W.size, Le = 8; Le < F - 8; Le++) {
        var ke = Le % 2 == 0;
        W.set(Le, 6, ke, !0), W.set(6, Le, ke, !0);
      }
    }(te), function x(W, F) {
      for (var Le = M.getPositions(F), ke = 0; ke < Le.length; ke++) for (var J = Le[ke][0], fe = Le[ke][1], ye = -2; ye <= 2; ye++) for (var ae = -2; ae <= 2; ae++) W.set(J + ye, fe + ae, -2 === ye || 2 === ye || -2 === ae || 2 === ae || 0 === ye && 0 === ae, !0);
    }(te, F), T(te, Le, 0), F >= 7 && function u(W, F) {
      for (var J, fe, ye, Le = W.size, ke = O.getEncodedBits(F), ae = 0; ae < 18; ae++) J = Math.floor(ae / 3), W.set(J, fe = ae % 3 + Le - 8 - 3, ye = 1 == (ke >> ae & 1), !0), W.set(fe, J, ye, !0);
    }(te, F), function R(W, F) {
      for (var Le = W.size, ke = -1, J = Le - 1, fe = 7, ye = 0, ae = Le - 1; ae > 0; ae -= 2) for (6 === ae && ae--;;) {
        for (var Y = 0; Y < 2; Y++) if (!W.isReserved(J, ae - Y)) {
          var G = !1;
          ye < F.length && (G = 1 == (F[ye] >>> fe & 1)), W.set(J, ae - Y, G), -1 == --fe && (ye++, fe = 7);
        }
        if ((J += ke) < 0 || Le <= J) {
          J -= ke, ke = -ke;
          break;
        }
      }
    }(te, Y), isNaN(ke) && (ke = A.getBestMask(te, T.bind(null, te, Le))), A.applyMask(ke, te), T(te, Le, ke), {
      modules: te,
      version: F,
      errorCorrectionLevel: Le,
      maskPattern: ke,
      segments: J
    };
  }
  V.create = function (F, Le) {
    if (typeof F > "u" || "" === F) throw new Error("No input text");
    var J,
      fe,
      ke = a.M;
    return typeof Le < "u" && (ke = a.from(Le.errorCorrectionLevel, a.M), J = O.from(Le.version), fe = A.from(Le.maskPattern), Le.toSJISFunc && e.setToSJISFunction(Le.toSJISFunc)), j(F, J, ke, fe);
  };
});
