// Extracted from main; webpack module 63269. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    _6: () => M,
    jO: () => m,
    yG: () => d
  });
  var t = i(30576),
    e = i(93532);
  function a(b) {
    return b[b.length - 1];
  }
  function m(b) {
    return (0, t.m)(a(b)) ? b.pop() : void 0;
  }
  function d(b) {
    return (0, e.K)(a(b)) ? b.pop() : void 0;
  }
  function M(b, A) {
    return "number" == typeof a(b) ? b.pop() : A;
  }
});
