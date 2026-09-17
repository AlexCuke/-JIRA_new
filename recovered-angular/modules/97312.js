// Extracted from main; webpack module 97312. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    FK: () => I,
    HV: () => m,
    Qg: () => b,
    _e: () => v,
    e9: () => d,
    gS: () => N,
    jj: () => L,
    kf: () => O,
    pq: () => M
  });
  const t = "REGISTERING",
    e = new Set(["POSTPONING", "POSTPONED"]);
  let a = "";
  function m(f) {
    a = `${f ?? ""}`.trim();
  }
  function d(f) {
    return `${f?.employee?.workplace?.id ?? ""}`.trim();
  }
  function M(f) {
    const E = f?.department?.id;
    if (null == E) return null;
    const h = `${E}`.trim();
    return h && "undefined" !== h && "null" !== h ? h : null;
  }
  function b() {
    return a || d(function A() {
      try {
        const f = localStorage.getItem("userData");
        return f ? JSON.parse(f) : null;
      } catch {
        return null;
      }
    }());
  }
  function N(f) {
    return f && "object" == typeof f && "data" in f && f.data?.labReferral ? f.data : f && "object" == typeof f && "labReferral" in f && f.labReferral ? f : void 0;
  }
  function I(f) {
    return f.map(E => N(E)).filter(E => !!E?.labReferral);
  }
  function O(f) {
    const E = f;
    if (E.data) {
      const h = N(E.data);
      if (h) return h;
      if (E.data.labReferral) return E.data;
    }
    if (E.event) {
      const h = N(E.event);
      if (h) return h;
    }
    if (E.item) {
      const h = N(E.item);
      if (h) return h;
    }
    return N(E);
  }
  function L(f, E) {
    const h = N(f)?.labReferral;
    if (!h || h.status !== t) return !1;
    const x = `${h.workplaceId ?? ""}`.trim(),
      u = `${E ?? ""}`.trim();
    return !(!x || !u) && x !== u;
  }
  function v(f) {
    const E = N(f)?.labReferral?.status;
    return !!E && e.has(E);
  }
});
