// Extracted from main; webpack module 87849. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => a
  });
  var t = i(42416),
    e = i(43410);
  function a(m) {
    e.z.setTimeout(() => {
      const {
        onUnhandledError: d
      } = t.v;
      if (!d) throw m;
      d(m);
    });
  }
});
