// Extracted from main; webpack module 34792. Factory, not an ES module.
((Ae, V) => {
  var i,
    t = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  V.getSymbolSize = function (a) {
    if (!a) throw new Error("\"version\" cannot be null or undefined");
    if (a < 1 || a > 40) throw new Error("\"version\" should be in range from 1 to 40");
    return 4 * a + 17;
  }, V.getSymbolTotalCodewords = function (a) {
    return t[a];
  }, V.getBCHDigit = function (e) {
    for (var a = 0; 0 !== e;) a++, e >>>= 1;
    return a;
  }, V.setToSJISFunction = function (a) {
    if ("function" != typeof a) throw new Error("\"toSJISFunc\" is not a valid function.");
    i = a;
  }, V.isKanjiModeEnabled = function () {
    return typeof i < "u";
  }, V.toSJIS = function (a) {
    return i(a);
  };
});
