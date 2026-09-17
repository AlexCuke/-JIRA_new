// Extracted from main; webpack module 89188. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Cu: () => C,
    Eu: () => m,
    bA: () => M,
    cW: () => I,
    f0: () => L,
    fW: () => a,
    ge: () => O,
    r5: () => d,
    x9: () => b
  });
  var t = i(17489);
  const a = (v, f) => {
      if ("temperature" === v && f) {
        const E = f && +f.toString().replace(",", ".");
        return E >= 39.1 ? 2 : E >= 38.1 && E <= 39 || E >= 35.1 && E <= 36 ? 1 : E >= 36.1 && E <= 38 ? 0 : 3;
      }
      if ("sys" === v && f) {
        if (+f >= 111 && +f <= 219) return 0;
        if (+f >= 101 && +f <= 110) return 1;
        if (+f >= 91 && +f <= 100) return 2;
        if (f) return 3;
      }
      return "hr" === v && f ? +f <= 40 || +f >= 131 ? 3 : +f >= 111 && +f <= 130 ? 2 : +f >= 91 && +f <= 110 || +f >= 41 && +f <= 50 ? 1 : 0 : "rr" === v && f ? +f <= 8 || +f >= 25 ? 3 : +f >= 21 && +f <= 24 ? 2 : +f >= 9 && +f <= 11 ? 1 : 0 : "sp" === v && f ? +f <= 91 ? 3 : 92 == +f || 93 == +f ? 2 : 94 == +f || 95 == +f ? 1 : 0 : "oxygenation" === v && null != f && "" !== f ? +f ? 2 : 0 : "consciousness" === v && f ? "ясное" === f.toLowerCase() ? 0 : 3 : 0;
    },
    m = v => {
      let f, E;
      const h = Object.values(v).reduce((u, T) => u + T, 0),
        x = Object.values(v).includes(3);
      return 0 === h ? (f = "Без отклонений", E = "Без отклонений") : h > 0 && h <= 4 && !x ? (f = "Низкий", E = "Низкий балл") : 3 !== h && 4 !== h || !x ? 5 === h || 6 === h ? (f = "Высокий", E = "Высокий балл") : (f = "Критичный", E = "Критичный параметр") : (f = "Средний", E = "Средний балл"), {
        sum: h,
        risk: f,
        riskComposition: E
      };
    };
  function d(v, f) {
    const E = Object.values(v),
      h = E.includes(3),
      x = E.reduce((u, T) => u + T, 0);
    return f ? null : 0 === x ? "news2-color-schema-point-0" : x >= 1 && x <= 4 && !h ? "news2-color-schema-point-1-4" : x >= 3 && x <= 4 && h ? "news2-color-schema-point-3-4-max" : x >= 5 && x <= 6 ? "news2-color-schema-point-5-6" : x >= 7 && x <= 20 ? "news2-color-schema-point-7-20" : null;
  }
  function M(v) {
    const f = v % 100;
    let E = "баллов";
    f >= 11 && f <= 14 && (E = "баллов");
    const h = v % 10;
    return 1 === h && (E = "балл"), h >= 2 && h <= 4 && (E = "балла"), v || 0 === v ? `${v} ${E}` : "—";
  }
  function b(v, f = "YYYY-MM-DD") {
    if (!v) return null;
    const E = new Date();
    let h = E.getFullYear() - v.getFullYear();
    return (E.getMonth() < v.getMonth() || E.getMonth() === v.getMonth() && E.getDate() < v.getDate()) && h--, h ? `${h} ${function A(v) {
      const f = v % 10,
        E = v % 100;
      return 1 === f && 11 !== E ? "год" : f >= 2 && f <= 4 && ![12, 13, 14].includes(E) ? "года" : "лет";
    }(h)}` : E.getMonth() - v.getMonth() + " мес.";
  }
  function I(v, f = []) {
    if (v.projection && v.id && f.push({
      id: v.id,
      projection: v.projection,
      name: v.name
    }), v.children && v.children.length) for (const E of v.children) I(E, f);
    return f;
  }
  function O(v, f) {
    return v.map(E => {
      const h = {
          ...E
        },
        x = h.name.toLowerCase().includes(f.toLowerCase());
      return h.children && h.children.length > 0 && (h.children = O(h.children, f)), x || h.children && h.children.length > 0 ? h : null;
    }).filter(Boolean);
  }
  function L(v) {
    if (!v) return "-";
    const f = v.split(" ");
    return 3 === f.length ? (0, t.join)([f[0], f[1].charAt(0), f[2].charAt(0)], " ") : v;
  }
  function C(v) {
    const f = new Map();
    v.items.forEach(u => f.set(u.code, u));
    const E = new Map();
    function h(u) {
      if (E.has(u)) return E.get(u);
      const T = f.get(u);
      if (!T) return !1;
      if ("0" === T.code || "1" === T.code || "0" === T.parent || "1" === T.parent) return E.set(u, !0), !0;
      if (null == T.parent || !f.has(T.parent)) return E.set(u, !1), !1;
      const R = h(T.parent);
      return E.set(u, R), R;
    }
    const x = v.items.filter(u => "0" !== u.code && "1" !== u.code && h(u.code));
    return {
      items: x,
      total: x.length
    };
  }
});
