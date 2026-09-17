// Extracted from main; webpack module 35882. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(80953),
    e = i(37623),
    a = i(40833);
  function m(M, b) {
    var A = M.getFullYear() - b.getFullYear() || M.getMonth() - b.getMonth() || M.getDate() - b.getDate() || M.getHours() - b.getHours() || M.getMinutes() - b.getMinutes() || M.getSeconds() - b.getSeconds() || M.getMilliseconds() - b.getMilliseconds();
    return A < 0 ? -1 : A > 0 ? 1 : A;
  }
  function d(M, b) {
    (0, a.Z)(2, arguments);
    var A = (0, t.Z)(M),
      N = (0, t.Z)(b),
      I = m(A, N),
      O = Math.abs((0, e.Z)(A, N));
    A.setDate(A.getDate() - I * O);
    var C = I * (O - Number(m(A, N) === -I));
    return 0 === C ? 0 : C;
  }
});
