// Extracted from main; webpack module 8745. Factory, not an ES module.
(Ae => {
  Ae.exports = function V(i, t, e, a) {
    var m = -1,
      d = null == i ? 0 : i.length;
    for (a && d && (e = i[++m]); ++m < d;) e = t(e, i[m], m, i);
    return e;
  };
});
