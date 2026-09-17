// Extracted from main; webpack module 87717. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => m
  });
  var t = i(82562),
    e = i(666);
  const a = "subsign";
  function m({
    tags: d,
    marks: M,
    context: b,
    lifecycleState: A
  }) {
    const N = d.find(I => I.tag === a);
    return N ? [N] : M.hasMark(e.T.FORCE_SIGN_COMPOSITION) && A === t.u.COMPLETE ? [{
      tag: a,
      value: b.getSignTagValue(),
      aqlPath: "/"
    }] : [];
  }
});
