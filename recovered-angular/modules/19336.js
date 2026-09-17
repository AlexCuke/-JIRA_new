// Extracted from main; webpack module 19336. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(a) {
    return "MedicalEntrySetting" === a.getValue()?.type;
  }
  function e(a) {
    return a.getContext().getLinks().find(t) || a.getLinks().find(t);
  }
  i.d(V, {
    V: () => e
  });
});
