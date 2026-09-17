// Extracted from main; webpack module 42088. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(34792),
    e = i(14655),
    a = i(82259),
    m = i(64016),
    d = i(94406),
    M = i(47103),
    A = t.getBCHDigit(7973);
  function I(C, v) {
    return m.getCharCountIndicator(C, v) + 4;
  }
  function O(C, v) {
    var f = 0;
    return C.forEach(function (E) {
      var h = I(E.mode, v);
      f += h + E.getBitsLength();
    }), f;
  }
  V.from = function (v, f) {
    return d.isValid(v) ? parseInt(v, 10) : f;
  }, V.getCapacity = function (v, f, E) {
    if (!d.isValid(v)) throw new Error("Invalid QR Code version");
    typeof E > "u" && (E = m.BYTE);
    var u = 8 * (t.getSymbolTotalCodewords(v) - e.getTotalCodewordsCount(v, f));
    if (E === m.MIXED) return u;
    var T = u - I(E, v);
    switch (E) {
      case m.NUMERIC:
        return Math.floor(T / 10 * 3);
      case m.ALPHANUMERIC:
        return Math.floor(T / 11 * 2);
      case m.KANJI:
        return Math.floor(T / 13);
      default:
        return Math.floor(T / 8);
    }
  }, V.getBestVersionForData = function (v, f) {
    var E,
      h = a.from(f, a.M);
    if (M(v)) {
      if (v.length > 1) return function L(C, v) {
        for (var f = 1; f <= 40; f++) if (O(C, f) <= V.getCapacity(f, v, m.MIXED)) return f;
      }(v, h);
      if (0 === v.length) return 1;
      E = v[0];
    } else E = v;
    return function N(C, v, f) {
      for (var E = 1; E <= 40; E++) if (v <= V.getCapacity(E, f, C)) return E;
    }(E.mode, E.getLength(), h);
  }, V.getEncodedBits = function (v) {
    if (!d.isValid(v) || v < 7) throw new Error("Invalid QR Code version");
    for (var f = v << 12; t.getBCHDigit(f) - A >= 0;) f ^= 7973 << t.getBCHDigit(f) - A;
    return v << 12 | f;
  };
});
