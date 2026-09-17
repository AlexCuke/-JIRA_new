// Extracted from main; webpack module 88062. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Kn: () => t,
    Kp: () => e,
    RP: () => a
  });
  const t = () => {
      const d = window.location.pathname.split("/")[1];
      document.getElementById("root").className = `${d}-arm`;
    },
    e = m => {
      const d = new Date(m),
        M = new Date();
      let b = M.getFullYear() - d.getFullYear();
      const A = M.getMonth() - d.getMonth(),
        N = M.getDate() - d.getDate();
      return (A < 0 || 0 === A && N < 0) && b--, b;
    },
    a = (m, d, M) => {
      let A = [];
      const I = [...m].sort((L, C) => L[d].localeCompare(C[d])).reduce((L, C) => (L[C.ward] || (L[C.ward] = []), L[C.ward].push(C), L), {});
      I["Не размещен"] && (A = I["Не размещен"], A.sort((L, C) => +L[M] - +C[M]), delete I["Не размещен"]);
      const O = Object.values(I);
      return O.forEach(L => L.sort((C, v) => +C[M] - +v[M])), A.length ? [...A, ...O.flat()] : O.flat();
    };
});
