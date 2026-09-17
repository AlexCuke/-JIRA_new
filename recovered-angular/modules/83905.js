// Extracted from main; webpack module 83905. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => a
  });
  var t = i(86805),
    e = i(70930);
  function a(m, d) {
    const M = "object" == typeof d;
    return new Promise((b, A) => {
      const N = new e.Hp({
        next: I => {
          b(I), N.unsubscribe();
        },
        error: A,
        complete: () => {
          M ? b(d.defaultValue) : A(new t.K());
        }
      });
      m.subscribe(N);
    });
  }
});
