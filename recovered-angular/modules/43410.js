// Extracted from main; webpack module 43410. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => t
  });
  const t = {
    setTimeout(...e) {
      const {
        delegate: a
      } = t;
      return (a?.setTimeout || setTimeout)(...e);
    },
    clearTimeout(e) {
      const {
        delegate: a
      } = t;
      return (a?.clearTimeout || clearTimeout)(e);
    },
    delegate: void 0
  };
});
