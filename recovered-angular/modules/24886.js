// Extracted from main; webpack module 24886. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    VA: () => I,
    a2: () => N
  });
  const t = {
      morning: "MORNING",
      day: "DAY",
      evening: "EVENING",
      night: "NIGHT"
    },
    e = {
      MORNING: 719,
      DAY: 1079,
      EVENING: 1319,
      NIGHT: 1799
    },
    a = {
      MORNING: 360,
      DAY: 720,
      EVENING: 1080,
      NIGHT: 1320
    };
  function m(O) {
    if (!O) return null;
    const L = String(O),
      C = L.toUpperCase();
    return null != e[C] ? C : t[L.toLowerCase()] ?? null;
  }
  function d(O) {
    const L = O.split(":");
    if (!L.length) return null;
    const C = parseInt(L[0], 10),
      v = parseInt(L[1] || "0", 10);
    return Number.isNaN(C) || Number.isNaN(v) ? null : 60 * C + v;
  }
  function M(O) {
    return m(O.dayTimePeriod);
  }
  function b(O, L) {
    return "NIGHT" !== O && L > e[O];
  }
  function A(O, L) {
    const C = a[O];
    return "NIGHT" === O ? L >= 360 && L < C : L < C;
  }
  function N(O, L = new Date()) {
    const C = 60 * L.getHours() + L.getMinutes(),
      v = M(O);
    if (v) return b(v, C);
    if (O.time) {
      const E = d(O.time);
      return null != E && C > E;
    }
    if (O.endTime) {
      const E = d(O.endTime);
      return null != E && C > E;
    }
    const f = m(O.period);
    return !!f && b(f, C);
  }
  function I(O, L = new Date()) {
    const C = 60 * L.getHours() + L.getMinutes(),
      v = M(O);
    if (v) return A(v, C);
    if (O.time) {
      const E = d(O.time);
      return null != E && C < E;
    }
    if (O.startTime) {
      const E = d(O.startTime);
      return null != E && C < E;
    }
    const f = m(O.period);
    return !!f && A(f, C);
  }
});
