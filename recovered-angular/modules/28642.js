// Extracted from main; webpack module 28642. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C2: () => d,
    Rx: () => m,
    WA: () => M,
    fF: () => b,
    up: () => N,
    xj: () => A
  });
  var t = i(54968),
    e = i(54004),
    a = i(15635);
  function m(I, O) {
    return O ? O.inputChange : (0, t.R)(I, "input").pipe((0, e.U)(() => I.value));
  }
  function d(I, O) {
    return O ? O.inputChange : (0, t.R)(I, "input").pipe((0, e.U)(() => I.files));
  }
  function M(I) {
    return I.charAt(0).toUpperCase() + I.slice(1);
  }
  function b(I, O = 2, L = ".") {
    const C = I.split(L);
    return `${C[0]}${L}${(0, a.qy)(C[1] || "", O, "0")}`;
  }
  function A(I, O) {
    const L = I.split(O);
    return L[0] = L[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "), L.join(O);
  }
  function N(I, O, L) {
    return (0, a.kJ)(O) ? O.map(C => C.handler ? C.handler(L(I, C.pattern)) : L(I, C.pattern)).join("") : L(I, O);
  }
});
