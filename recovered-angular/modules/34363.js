// Extracted from main; webpack module 34363. Factory, not an ES module.
(Ae => {
  Ae.exports = function V(i, t, e) {
    var a = -1,
      m = i.length;
    t < 0 && (t = -t > m ? 0 : m + t), (e = e > m ? m : e) < 0 && (e += m), m = t > e ? 0 : e - t >>> 0, t >>>= 0;
    for (var d = Array(m); ++a < m;) d[a] = i[a + t];
    return d;
  };
});
