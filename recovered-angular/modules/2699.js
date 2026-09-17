// Extracted from main; webpack module 2699. Factory, not an ES module.
((Ae, V) => {
  var i = "[0-9]+",
    e = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
    a = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (e = e.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
  V.KANJI = new RegExp(e, "g"), V.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), V.BYTE = new RegExp(a, "g"), V.NUMERIC = new RegExp(i, "g"), V.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
  var m = new RegExp("^" + e + "$"),
    d = new RegExp("^" + i + "$"),
    M = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  V.testKanji = function (A) {
    return m.test(A);
  }, V.testNumeric = function (A) {
    return d.test(A);
  }, V.testAlphanumeric = function (A) {
    return M.test(A);
  };
});
