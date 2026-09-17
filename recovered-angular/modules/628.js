// Extracted from main; webpack module 628. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    No: () => M,
    p1: () => a,
    vO: () => d
  });
  var t = i(89188);
  const e = ["temperature", "sys", "hr", "rr", "sp", "oxygenation", "consciousness"];
  function a(b) {
    const A = {
      temperature: 0,
      sys: 0,
      hr: 0,
      rr: 0,
      sp: 0,
      oxygenation: 0,
      consciousness: 0
    };
    return b && e.forEach(N => {
      const I = b[N],
        O = "consciousness" === N ? String(I ?? "").toLowerCase() : String(I ?? "").replace(",", ".");
      A[N] = (0, t.fW)(N, O);
    }), A;
  }
  function d(b) {
    return null == b || "" === b ? "—" : "string" == typeof b ? "был выявлен, обработка проведена" === b.toLowerCase() ? "Обработка проведена" : "был выявлен ранее, обрати внимание" === b.toLowerCase() ? "Был выявлен ранее" : b[0].toUpperCase() + b.slice(1) : String(b);
  }
  function M(b) {
    const A = b?.risk;
    if (null != A && "" !== A && !/^\d+$/.test(String(A))) return String(A);
    const N = a(b);
    return (Object.values(N).some(O => O > 0) || null != b?.sum) && (0, t.Eu)(N).risk || "—";
  }
});
