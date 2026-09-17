// Extracted from main; webpack module 73745. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C8: () => d,
    HJ: () => m,
    bg: () => b,
    gH: () => a,
    yn: () => A
  });
  var t = i(89653);
  const e = (0, t.ZF)("tasks"),
    a = (0, t.P1)(e, N => N.patientDietData),
    m = (0, t.P1)(e, N => N.patientData),
    d = (0, t.P1)(e, N => ({
      menuName: N.menuName,
      params: N.params
    })),
    b = ((0, t.P1)(e, N => N.modal), (0, t.P1)(e, N => N.replacement)),
    A = (0, t.P1)(e, N => N.search);
});
