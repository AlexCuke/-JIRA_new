// Extracted from main; webpack module 39453. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Zr: () => B,
    fh: () => R,
    Rt: () => A,
    iQ: () => u,
    hd: () => T,
    ok: () => y,
    UH: () => f,
    mF: () => N,
    TB: () => I,
    CT: () => F,
    dG: () => Le,
    YV: () => m,
    _R: () => v,
    up: () => b,
    FF: () => fe,
    oJ: () => W,
    Be: () => ye,
    $l: () => O
  });
  var t = i(66425),
    e = i(17489),
    a = i.n(e);
  function m(ae, Y) {
    return ae.get(Y);
  }
  function b(ae) {
    return ae && ae.currentValue && !a().isEqual(ae.currentValue, ae.previousValue);
  }
  class A {
    static newGuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, Y => {
        let G = 16 * Math.random() | 0;
        return ("x" == Y ? G : 3 & G | 8).toString(16);
      });
    }
  }
  function N() {
    return ae => ae && ae.value ? ae.value instanceof Date ? ae.value : new Date(ae.value) : null;
  }
  function I(ae = "yyyy-MM-dd") {
    return ({
      value: Y
    }) => Y ? (0, t.Z)(Y, ae) : null;
  }
  function O(ae) {
    if (!ae || "string" != typeof ae) return ae;
    const Y = ae.slice(-2).toLowerCase(),
      G = ae.slice(-1).toLowerCase();
    return ["ов", "ев", "ин", "ын"].includes(Y) ? ae + "у" : ["ский", "цкий"].includes(ae.slice(-3).toLowerCase()) ? ae.slice(0, -3) + "скому" : "ь" === G ? ae.slice(0, -1) + "ю" : "а" === G ? ae.slice(0, -1) + "ой" : ae;
  }
  function v(ae, Y) {
    const G = ae % 10,
      te = ae % 100;
    return te >= 11 && te <= 14 ? Y[2] : 1 === G ? Y[0] : G >= 2 && G <= 4 ? Y[1] : Y[2];
  }
  class f {
    static getValue(Y) {
      return (window.env || {})[Y];
    }
  }
  var E = i(97582),
    h = i(74523),
    x = i(33981);
  class u {
    get ownerInitials() {
      return this.owner ? this.owner?.split(" ").map((Y, G) => G ? Y[0].toUpperCase() + "." : Y).join(" ") : this.owner;
    }
  }
  (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "isFall", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "hasConcomitantDiseases", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "hasIntravenousTherapy", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "independenceWalking", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "gait", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae?.name ?? ae, {
    toPlainOnly: !0
  })], u.prototype, "mentalState", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({
    value: ae
  }) => ae && ae instanceof Date ? ae.toISOString() : ae, {
    toPlainOnly: !0
  })], u.prototype, "scaleMorseTime", void 0), (0, E.gn)([(0, x.o)({
    toPlainOnly: !0
  })], u.prototype, "ownerInitials", null);
  class T {
    get ownerInitials() {
      return this.owner ? this.owner?.split(" ").map((Y, G) => G ? Y[0].toUpperCase() + "." : Y).join(" ") : this.owner;
    }
  }
  (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  })], T.prototype, "time_committed", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && (ae.length < 4 ? +(ae + ".0") : +ae.toString().replace(",", ".")), {
    toPlainOnly: !0
  })], T.prototype, "temperature", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "temperatureTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "sysTime", void 0), (0, E.gn)([(0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  }), (0, h.w)(N(), {
    toClassOnly: !0
  })], T.prototype, "diaTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "rrTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "spTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "oxygenationTime", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae[0] : ae, {
    toPlainOnly: !0
  }), (0, h.w)(({
    value: ae
  }) => ae && (ae instanceof Array ? ae : [ae]), {
    toClassOnly: !0
  })], T.prototype, "oxygenationDevice", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "oxygenationDeviceTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], T.prototype, "hrTime", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae[0]?.toLowerCase() : ae?.toLowerCase(), {
    toPlainOnly: !0
  }), (0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? [ae[0]?.replace(/^./, Y => Y.toUpperCase())] : [ae?.replace(/^./, Y => Y.toUpperCase())], {
    toClassOnly: !0
  })], T.prototype, "consciousness", void 0), (0, E.gn)([(0, x.o)({
    toPlainOnly: !0
  })], T.prototype, "ownerInitials", null);
  class R {}
  (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && (ae.length < 4 ? +(ae + ".0") : +ae.toString().replace(",", ".")), {
    toPlainOnly: !0
  })], R.prototype, "temperature", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "temperatureTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "sysTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "hrTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "rrTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "weightTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "bathTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "linenTime", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae[0] : ae, {
    toPlainOnly: !0
  }), (0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae : [ae], {
    toClassOnly: !0
  })], R.prototype, "pediculosis", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "pediculosisTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "liquidTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "phlegmTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "urineTime", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], R.prototype, "fecesTime", void 0), (0, E.gn)([(0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae[0] : ae, {
    toPlainOnly: !0
  }), (0, h.w)(({
    value: ae
  }) => ae && ae instanceof Array ? ae : [ae], {
    toClassOnly: !0
  })], R.prototype, "transportability", void 0), (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  })], R.prototype, "timeCommited", void 0);
  class B {}
  (0, E.gn)([(0, h.w)(N(), {
    toClassOnly: !0
  }), (0, h.w)(({}) => new Date().toISOString(), {
    toPlainOnly: !0
  })], B.prototype, "weightTime", void 0);
  const y = ["(min-width: 600px) and (max-width: 960px)"];
  function W(ae) {
    const Y = ae.split(".");
    return {
      hours: Number(Y[0]),
      minutes: Number(Y[1])
    };
  }
  function F(ae) {
    if (!ae) return "";
    const Y = ae instanceof Date ? ae : new Date(ae);
    if (Number.isNaN(Y.getTime())) return "";
    const te = "string" == typeof ae && /\+03:00$/.test(ae.trim()) ? new Date(Y.getTime() + 108e5) : Y,
      be = te.getUTCDate();
    let le = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"][te.getUTCMonth()];
    return "май" === le && (le = "мая"), `${be} ${le}, ${String(te.getUTCHours()).padStart(2, "0")}:${String(te.getUTCMinutes()).padStart(2, "0")}`;
  }
  function Le(ae) {
    if (!ae) return "";
    const Y = ae instanceof Date ? ae : new Date(ae);
    if (Number.isNaN(Y.getTime())) return "";
    const G = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    let te, pe, be, le;
    if (ae instanceof Date) {
      const n = new Intl.DateTimeFormat("ru-RU", {
          day: "numeric",
          month: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
          timeZone: "Europe/Moscow"
        }).formatToParts(Y),
        Se = qe => n.find(Rt => Rt.type === qe)?.value ?? "";
      te = parseInt(Se("day"), 10), pe = G[parseInt(Se("month"), 10) - 1], be = Se("hour").padStart(2, "0"), le = Se("minute").padStart(2, "0");
    } else {
      const Se = /\+03:00$/.test(ae.trim()) ? new Date(Y.getTime() + 108e5) : Y;
      te = Se.getUTCDate(), pe = G[Se.getUTCMonth()], be = String(Se.getUTCHours()).padStart(2, "0"), le = String(Se.getUTCMinutes()).padStart(2, "0");
    }
    return `${te} ${pe}, ${be}:${le}`;
  }
  const ke = (() => {
      const ae = {};
      for (let Y = 0; Y <= 9; Y += 1) ae[`Digit${Y}`] = String(Y), ae[`Numpad${Y}`] = String(Y);
      for (let Y = 0; Y < 26; Y += 1) {
        const G = String.fromCharCode(97 + Y);
        ae[`Key${G.toUpperCase()}`] = G;
      }
      return ae.Minus = "-", ae.NumpadSubtract = "-", ae.Period = ".", ae.Comma = ",", ae.Slash = "/", ae;
    })(),
    J = {
      й: "q",
      ц: "w",
      у: "e",
      к: "r",
      е: "t",
      н: "y",
      г: "u",
      ш: "i",
      щ: "o",
      з: "p",
      х: "[",
      ъ: "]",
      ф: "a",
      ы: "s",
      в: "d",
      а: "f",
      п: "g",
      р: "h",
      о: "j",
      л: "k",
      д: "l",
      ж: ";",
      э: "'",
      я: "z",
      ч: "x",
      с: "c",
      м: "v",
      и: "b",
      т: "n",
      ь: "m",
      б: ",",
      ю: "."
    };
  function fe(ae) {
    return ae.split("").map(Y => {
      const G = Y.toLowerCase(),
        te = J[G];
      return te ? Y === G ? te : te.toUpperCase() : Y;
    }).join("");
  }
  function ye(ae) {
    const Y = ke[ae.code];
    if (void 0 !== Y) return Y;
    if (1 !== ae.key.length) return null;
    const G = fe(ae.key);
    return 1 === G.length ? G : null;
  }
});
