// Extracted from main; webpack module 72621. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Do: () => m,
    Iu: () => a,
    qp: () => d
  });
  var t = ["D", "DD"],
    e = ["YY", "YYYY"];
  function a(M) {
    return -1 !== t.indexOf(M);
  }
  function m(M) {
    return -1 !== e.indexOf(M);
  }
  function d(M, b, A) {
    if ("YYYY" === M) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(b, "`) for formatting years to the input `").concat(A, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if ("YY" === M) throw new RangeError("Use `yy` instead of `YY` (in `".concat(b, "`) for formatting years to the input `").concat(A, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if ("D" === M) throw new RangeError("Use `d` instead of `D` (in `".concat(b, "`) for formatting days of the month to the input `").concat(A, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if ("DD" === M) throw new RangeError("Use `dd` instead of `DD` (in `".concat(b, "`) for formatting days of the month to the input `").concat(A, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
});
