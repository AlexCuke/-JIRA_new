// Extracted from main; webpack module 30535. Factory, not an ES module.
((Ae, V, i) => {
  var t = i(99850),
    e = "Expected a function";
  function a(m, d) {
    if ("function" != typeof m || null != d && "function" != typeof d) throw new TypeError(e);
    var M = function () {
      var b = arguments,
        A = d ? d.apply(this, b) : b[0],
        N = M.cache;
      if (N.has(A)) return N.get(A);
      var I = m.apply(this, b);
      return M.cache = N.set(A, I) || N, I;
    };
    return M.cache = new (a.Cache || t)(), M;
  }
  a.Cache = t, Ae.exports = a;
});
