// Extracted from main; webpack module 64016. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(94406),
    e = i(2699);
  V.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, V.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, V.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, V.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, V.MIXED = {
    bit: -1
  }, V.getCharCountIndicator = function (d, M) {
    if (!d.ccBits) throw new Error("Invalid mode: " + d);
    if (!t.isValid(M)) throw new Error("Invalid version: " + M);
    return M >= 1 && M < 10 ? d.ccBits[0] : M < 27 ? d.ccBits[1] : d.ccBits[2];
  }, V.getBestModeForData = function (d) {
    return e.testNumeric(d) ? V.NUMERIC : e.testAlphanumeric(d) ? V.ALPHANUMERIC : e.testKanji(d) ? V.KANJI : V.BYTE;
  }, V.toString = function (d) {
    if (d && d.id) return d.id;
    throw new Error("Invalid mode");
  }, V.isValid = function (d) {
    return d && d.bit && d.ccBits;
  }, V.from = function (d, M) {
    if (V.isValid(d)) return d;
    try {
      return function a(m) {
        if ("string" != typeof m) throw new Error("Param is not a string");
        switch (m.toLowerCase()) {
          case "numeric":
            return V.NUMERIC;
          case "alphanumeric":
            return V.ALPHANUMERIC;
          case "kanji":
            return V.KANJI;
          case "byte":
            return V.BYTE;
          default:
            throw new Error("Unknown mode: " + m);
        }
      }(d);
    } catch {
      return M;
    }
  };
});
