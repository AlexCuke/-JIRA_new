// Extracted from main; webpack module 53260. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => m,
    Q: () => a
  });
  var t = i(97582),
    e = i(30576);
  function a(d) {
    return (0, t.FC)(this, arguments, function* () {
      const b = d.getReader();
      try {
        for (;;) {
          const {
            value: A,
            done: N
          } = yield (0, t.qq)(b.read());
          if (N) return yield (0, t.qq)(void 0);
          yield yield (0, t.qq)(A);
        }
      } finally {
        b.releaseLock();
      }
    });
  }
  function m(d) {
    return (0, e.m)(d?.getReader);
  }
});
