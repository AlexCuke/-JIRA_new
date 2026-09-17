// Extracted from main; webpack module 55643. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    const a = new URLSearchParams(window.location.search),
      m = e.needTags;
    return m ? m.reduce((d, M) => a.get(M) ? [...d, {
      tag: M,
      value: a.get(M) ?? "",
      aqlPath: "/"
    }] : d, []) : [];
  }
  i.d(V, {
    $: () => t
  });
});
