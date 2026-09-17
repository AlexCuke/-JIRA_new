// Extracted from main; webpack module 27664. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    CJ: () => b,
    Fm: () => a,
    Ln: () => m,
    zE: () => M
  });
  var t = i(2711),
    e = i(95698);
  const a = "scales-temperature-patient-list",
    m = "scales-temperature-patient-adaptive-list";
  function d(A, N) {
    A.select((0, t.I3)(N)).pipe((0, e.q)(1)).subscribe(I => {
      const O = {
        ...(I?.queryParams ?? {})
      };
      delete O.fio, A.dispatch((0, t.tI)({
        listName: N,
        cache: {
          queryParams: O,
          update: new Date().toISOString()
        }
      }));
    });
  }
  function M(A) {
    d(A, a), d(A, m);
  }
  function b(A, N = "") {
    const I = A?.querySelector("dp-rollable-search-control input");
    I && (I.value = N, I.dispatchEvent(new Event("input", {
      bubbles: !0
    })));
  }
});
