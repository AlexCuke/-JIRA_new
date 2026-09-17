// Extracted from main; webpack module 42550. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    EQ: () => A,
    RN: () => M,
    Rx: () => L,
    dH: () => O,
    fL: () => m
  });
  var t = i(20385),
    e = i(19237);
  function m(C) {
    return new t._b(v => {
      const f = v.location.index,
        E = f + C.length;
      return v.input.slice(f, E) === C ? v.success(E, C) : v.fail(f, [C]);
    });
  }
  function M(...C) {
    return C.reduce((v, f) => v.pipe((0, e.or)(f)));
  }
  function A(C) {
    if (C.flags.split("").some(v => !["i", "s", "m", "u"].includes(v))) throw new Error("only the regexp flags \"imsu\" are supported");
    return new t._b(v => {
      const f = new RegExp(C.source, C.flags + "y"),
        E = v.location.index,
        h = v.input.slice(E, v.input.length).match(f);
      if (h) {
        const x = E + h[0].length,
          u = v.input.slice(E, x);
        return v.success(x, u);
      }
      return v.fail(E, [String(C)]);
    });
  }
  const I = new t._b(C => C.success(C.location.index, C.location));
  function O(C) {
    return v => function a(...C) {
      return C.reduce((v, f) => v.pipe((0, e.tS)(E => f.pipe((0, e.UI)(h => [...E, h])))), (0, t.Vp)([]));
    }(I, v, I).pipe((0, e.UI)(([f, E, h]) => ({
      type: "ParseNode",
      name: C,
      value: E,
      start: f,
      end: h
    })));
  }
  function L() {
    return A(/[0-9]+/).pipe((0, e.UI)(Number));
  }
});
