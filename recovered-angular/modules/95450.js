// Extracted from main; webpack module 95450. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    IH: () => N,
    Kd: () => a,
    bf: () => A,
    bh: () => M,
    zv: () => I
  });
  const t = 5;
  function a(O) {
    return O ? [O.firstName, O.secondName, O.lastName].filter(Boolean).join(" ") : "";
  }
  function m(O) {
    return O ? O.split(" — ")[0].trim().replace(/\./g, " ").replace(/\s+/g, " ").toLowerCase() : "";
  }
  function M(O, L, C) {
    if (!C) return !1;
    if (null != L && null != C.id && Number(L) === Number(C.id) || null != L && C.employee?.id && String(L) === String(C.employee.id)) return !0;
    const v = String(O ?? "").trim();
    if (!v) return !1;
    const f = m(v);
    return !!function d(O) {
      if (!O) return [];
      const L = new Set(),
        C = a(O),
        v = [O.lastName, O.firstName, O.secondName].filter(Boolean).join(" "),
        f = function e(O, L, C) {
          const v = [O?.trim()].filter(Boolean);
          return L?.trim() && v.push(`${L.trim().charAt(0).toUpperCase()}.`), C?.trim() && v.push(`${C.trim().charAt(0).toUpperCase()}.`), v.join(" ");
        }(O.lastName, O.firstName, O.secondName);
      return [C, v, f].forEach(E => {
        const h = m(E);
        h && L.add(h);
      }), [...L];
    }(C).includes(f) || function b(O, L) {
      const C = m(L.lastName);
      if (!C) return !1;
      const v = m(O);
      if (!v.includes(C)) return !1;
      const f = m(L.firstName);
      if (f && v.includes(f)) return !0;
      const E = m(L.secondName);
      if (E && v.includes(E)) return !0;
      const h = L.firstName?.charAt(0)?.toLowerCase(),
        x = L.secondName?.charAt(0)?.toLowerCase(),
        u = !h || v.includes(h),
        T = !x || !L.secondName || v.includes(x);
      return u && T;
    }(v, C);
  }
  function A(O) {
    if (null == O || "" === O) return;
    const L = new Date(String(O));
    return Number.isNaN(L.getTime()) ? void 0 : L;
  }
  function N(O) {
    if (!O) return;
    const L = O.name ?? O["|name"],
      C = O["|id"] ?? O.id;
    return null != L && "" !== L || null != C ? {
      owner: L,
      ownerId: C
    } : void 0;
  }
  function I(O, L, C, v, f = new Date()) {
    const E = A(O);
    if (!E || !C) return !1;
    const h = new Date(E);
    return h.setMinutes(h.getMinutes() + t), f.getTime() <= h.getTime() && M(L, v, C);
  }
});
