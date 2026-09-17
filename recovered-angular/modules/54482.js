// Extracted from main; webpack module 54482. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    A: () => e,
    e: () => a
  });
  var t = i(30576);
  function e(m) {
    return (0, t.m)(m?.lift);
  }
  function a(m) {
    return d => {
      if (e(d)) return d.lift(function (M) {
        try {
          return m(M, this);
        } catch (b) {
          this.error(b);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
});
