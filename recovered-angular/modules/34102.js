// Extracted from main; webpack module 34102. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    QL: () => A,
    XN: () => M,
    jj: () => d,
    yR: () => m
  });
  var t = i(97582),
    e = i(43429),
    a = i(73021);
  const m = {
    Central: "Центральный",
    Peripheral: "Периферический",
    Perepherical: "Периферический",
    Urinary: "Мочевой",
    Foley: "Мочевой"
  };
  function d(N) {
    if (!N) return "";
    switch (N.trim().toLowerCase().replace(/[_\s-]/g, "")) {
      case "central":
      case "центральный":
        return "Central";
      case "peripheral":
      case "perepherical":
      case "периферический":
        return "Peripheral";
      case "urinary":
      case "foley":
      case "foleycatheter":
      case "мочевой":
        return "Urinary";
      default:
        return "";
    }
  }
  function M(N) {
    const I = d(N);
    if (I) return m[I];
    const O = N?.trim();
    return O && O in m ? m[O] : O || "—";
  }
  class b {}
  (0, t.gn)([(0, e.D)(() => a.gz)], b.prototype, "elements", void 0);
  class A {}
  (0, t.gn)([(0, e.D)(() => b)], A.prototype, "catheter", void 0), (0, t.gn)([(0, e.D)(() => a.rw)], A.prototype, "hospitalCard", void 0), (0, t.gn)([(0, e.D)(() => a.xe)], A.prototype, "careCase", void 0), (0, t.gn)([(0, e.D)(() => a.ph)], A.prototype, "patientMovement", void 0);
});
