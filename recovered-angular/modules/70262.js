// Extracted from main; webpack module 70262. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K: () => m
  });
  var t = i(38421),
    e = i(25403),
    a = i(54482);
  function m(d) {
    return (0, a.e)((M, b) => {
      let I,
        A = null,
        N = !1;
      A = M.subscribe(new e.Q(b, void 0, void 0, O => {
        I = (0, t.Xf)(d(O, m(d)(M))), A ? (A.unsubscribe(), A = null, I.subscribe(b)) : N = !0;
      })), N && (A.unsubscribe(), A = null, I.subscribe(b));
    });
  }
});
