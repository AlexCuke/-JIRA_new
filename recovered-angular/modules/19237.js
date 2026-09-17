// Extracted from main; webpack module 19237. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    NM: () => v,
    Se: () => I,
    T0: () => b,
    UI: () => d,
    WL: () => N,
    hZ: () => O,
    lp: () => M,
    or: () => L,
    rx: () => C,
    tS: () => m,
    vX: () => A,
    xD: () => a
  });
  var t = i(20385),
    e = i(56697);
  function a(E) {
    return h => new t._b(x => {
      const u = h.action(x);
      if ("Fail" === u.type) return u;
      const T = (x = x.moveTo(u.location)).merge(u, E.action(x));
      return "Success" === T.type ? x.merge(T, x.success(T.location.index, [u.value, T.value])) : T;
    });
  }
  function m(E) {
    return h => new t._b(x => {
      const u = h.action(x);
      if ("Fail" === u.type) return u;
      const T = E(u.value);
      return (x = x.moveTo(u.location)).merge(u, T.action(x));
    });
  }
  function d(E) {
    return h => h.pipe(m(x => (0, t.Vp)(E(x))));
  }
  function M(E) {
    return h => h.pipe(a(E), d(([, x]) => x));
  }
  function b(E) {
    return h => h.pipe(a(E), d(([x]) => x));
  }
  function A(E, h) {
    return x => E.pipe(M(x), b(h));
  }
  function N(E) {
    return h => new t._b(x => {
      const u = h.action(x);
      return "Success" === u.type ? u : {
        type: "Fail",
        furthest: u.furthest,
        expected: [E]
      };
    });
  }
  function I() {
    return E => {
      const h = new t._b(x => x.location.index < x.input.length ? x.fail(x.location.index, ["<EOF>"]) : x.success(x.location.index, "<EOF>"));
      return E.pipe(b(h));
    };
  }
  function O(E) {
    return h => h.pipe(m(() => (0, t.Vp)(E)));
  }
  function L(E) {
    return h => new t._b(x => {
      const u = h.action(x);
      return "Success" === u.type ? u : x.merge(u, E.action(x));
    });
  }
  function C(E = 0, h = 1 / 0) {
    return x => {
      if (!(0, e.x)(E, h)) throw new Error(`repeat: bad range (${E} to ${h})`);
      return 0 === E ? x.pipe(C(1, h), L((0, t.Vp)([]))) : new t._b(u => {
        const T = [];
        let R = x.action(u);
        if ("Fail" === R.type) return R;
        for (; "Success" === R.type && T.length < h;) {
          if (T.push(R.value), R.location.index === u.location.index) throw new Error("infinite loop detected; don`t call repeat() with parsers that can accept zero characters");
          R = (u = u.moveTo(R.location)).merge(R, x.action(u));
        }
        return "Fail" === R.type && T.length < E ? R : u.merge(R, u.success(u.location.index, T));
      });
    };
  }
  function v(E, h = 0, x = 1 / 0) {
    return u => {
      if (!(0, e.x)(h, x)) throw new Error(`sepBy: bad range (${h} to ${x})`);
      return 0 === h ? u.pipe(v(E, 1, x), L((0, t.Vp)([]))) : u.pipe(1 === x ? d(T => [T]) : m(T => E.pipe(M(u), C(h - 1, x - 1), d(R => [T, ...R]))));
    };
  }
});
