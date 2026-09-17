// Extracted from main; webpack module 54968. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    R: () => I
  });
  var t = i(38421),
    e = i(69751),
    a = i(95577),
    m = i(81144),
    d = i(30576),
    M = i(83268);
  const b = ["addListener", "removeListener"],
    A = ["addEventListener", "removeEventListener"],
    N = ["on", "off"];
  function I(f, E, h, x) {
    if ((0, d.m)(h) && (x = h, h = void 0), x) return I(f, E, h).pipe((0, M.Z)(x));
    const [u, T] = function v(f) {
      return (0, d.m)(f.addEventListener) && (0, d.m)(f.removeEventListener);
    }(f) ? A.map(R => B => f[R](E, B, h)) : function L(f) {
      return (0, d.m)(f.addListener) && (0, d.m)(f.removeListener);
    }(f) ? b.map(O(f, E)) : function C(f) {
      return (0, d.m)(f.on) && (0, d.m)(f.off);
    }(f) ? N.map(O(f, E)) : [];
    if (!u && (0, m.z)(f)) return (0, a.z)(R => I(R, E, h))((0, t.Xf)(f));
    if (!u) throw new TypeError("Invalid event target");
    return new e.y(R => {
      const B = (...y) => R.next(1 < y.length ? y : y[0]);
      return u(B), () => T(B);
    });
  }
  function O(f, E) {
    return h => x => f[h](E, x);
  }
});
