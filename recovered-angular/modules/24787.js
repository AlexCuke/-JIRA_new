// Extracted from main; webpack module 24787. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function e(m) {
    if (!m) return "";
    const M = function t(m) {
      const d = `${m}`.trim();
      if (!d) return null;
      const M = d.endsWith("Z") ? d.replace(/Z$/, "+03:00") : d,
        b = new Date(M);
      return Number.isFinite(b.getTime()) ? b : null;
    }(m);
    if (M.setHours(M.getHours() + 3), !M) return "";
    const b = M.getDate();
    let A = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"][M.getMonth()];
    return "май" === A && (A = "мая"), `${b} ${A}, ${M.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
  }
  i.d(V, {
    K: () => a,
    t: () => e
  });
  const a = m => {
    const d = new Date(m),
      M = new Date();
    let b = M.getFullYear() - d.getFullYear();
    const A = M.getMonth() - d.getMonth(),
      N = M.getDate() - d.getDate();
    return (A < 0 || 0 === A && N < 0) && b--, b;
  };
});
