// Extracted from main; webpack module 34793. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    a: () => e
  });
  var t = i(71822);
  class e {
    findBasicTypesRecursive(m, d) {
      const M = m.getNode();
      M.getChildren().forEach(b => {
        m.ignoreFields().find(N => N === b.id && "_uid" !== N) || b.getRmType() === t.B8.LINK || b.getRmType() === t.B8.EVENT_CONTEXT || m.getMany((M.getRmType() === t.B8.COMPOSITION ? `${M.id}.${b.id}` : b.id) ?? "").forEach(N => {
          if (N.isComplexType()) this.findBasicTypesRecursive(N, d);else {
            const I = N;
            !I.isDeleted() && !I.isCleared() && d.push(I);
          }
        });
      });
    }
  }
});
