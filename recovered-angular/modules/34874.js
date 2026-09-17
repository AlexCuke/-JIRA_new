// Extracted from main; webpack module 34874. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    S$: () => L,
    TB: () => N,
    YV: () => m,
    _Y: () => O,
    mF: () => A
  });
  var t = i(66425);
  function m(C, v) {
    return C.get(v);
  }
  function A() {
    return C => C && null !== C.value ? C.value instanceof Date ? C.value : new Date(C.value) : null;
  }
  function N(C = "yyyy-MM-dd") {
    return ({
      value: v
    }) => v ? (0, t.Z)(v, C) : null;
  }
  function O(C) {
    return C <= 24 ? "green-sum-result" : C > 24 && C <= 50 ? "yellow-sum-result" : "red-sum-result";
  }
  function L(C, v) {
    return C % 10 == 1 && C % 100 != 11 ? v + "" : C % 10 >= 2 && C % 10 <= 4 && (C % 100 < 10 || C % 100 >= 20) ? v + "а" : v + "ов";
  }
  i(17489);
});
