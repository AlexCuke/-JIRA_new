// Extracted from main; webpack module 68533. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(44129);
  Ae.exports = function a(m) {
    if ("string" == typeof m || t(m)) return m;
    var d = m + "";
    return "0" == d && 1 / m == -Infinity ? "-0" : d;
  };
});
