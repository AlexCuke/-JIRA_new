// Extracted from main; webpack module 82805. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    H: () => d
  });
  var t = i(69751),
    e = i(34986),
    a = i(93532),
    m = i(51165);
  function d(M = 0, b, A = e.P) {
    let N = -1;
    return null != b && ((0, a.K)(b) ? A = b : N = b), new t.y(I => {
      let O = (0, m.q)(M) ? +M - A.now() : M;
      O < 0 && (O = 0);
      let L = 0;
      return A.schedule(function () {
        I.closed || (I.next(L++), 0 <= N ? this.schedule(void 0, N) : I.complete());
      }, O);
    });
  }
});
