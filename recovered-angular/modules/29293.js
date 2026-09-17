// Extracted from main; webpack module 29293. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    V$: () => v,
    gY: () => Ke,
    rP: () => je,
    rz: () => qe
  });
  var t = i(66425),
    e = i(73766);
  i(89570), i(17489);
  const L = {
      narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
      abbreviated: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
      wide: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    C = {
      ...e.default,
      localize: {
        ...e.default.localize,
        month: (pt, Dt) => L[Dt.width][pt]
      }
    };
  function v(pt) {
    const Dt = "string" == typeof pt.date ? new Date(pt.date) : pt.date;
    if (Dt instanceof Date && "Invalid Date" !== String(Dt)) {
      const Ht = pt.currentDate ? pt.currentDate : new Date(),
        Dn = Dt.getFullYear(),
        vt = Ht.getFullYear();
      return (0, t.Z)(Dt, `dd MMM${pt.alwaysShowYear || Dn !== vt ? " yyyy" : ""}${void 0 === pt.separator ? "," : pt.separator} ${pt.dayWeekAtTheEnd ? "EEEEEE" : "HH:mm"}`, {
        locale: pt.customLocale || C
      });
    }
    return "-";
  }
  new RegExp(`[${"+-=&|!(){}[]^\"~*?:\\/".split("").join("\\")}]`, "g");
  const qe = ["год", "года", "лет"];
  function Ke(pt, Dt, Ht = !0) {
    if (!Number.isInteger(pt) || !Array.isArray(Dt) || Dt.length < 3) return "";
    const Dn = Dt[0],
      vt = Dt[1],
      an = Dt[2];
    let li;
    const zn = pt % 100;
    if (zn >= 11 && zn <= 19) li = an;else switch (zn % 10) {
      case 1:
        li = Dn;
        break;
      case 2:
      case 3:
      case 4:
        li = vt;
        break;
      default:
        li = an;
    }
    return function Ze(pt, Dt, Ht) {
      return `${Ht ? `${pt.toString()} ` : ""}${Dt}`;
    }(pt, li, Ht);
  }
  function je(pt) {
    return JSON.stringify({
      page: {
        $type: "page",
        page: 0,
        pageSize: 500
      },
      filters: Array.isArray(Mt(pt)) ? Mt(pt) : [Mt(pt)]
    });
  }
  function Mt(pt) {
    if ("items" in pt && pt.comparison) {
      if (["and", "or"].includes(pt.comparison)) return {
        $type: pt.comparison,
        criteria: Je(pt.items.map(Dt => Mt(Dt)))
      };
      if (["not"].includes(pt.comparison)) return pt.items.map(Dt => ({
        $type: pt.comparison,
        criteria: Mt(Dt)
      }));
    }
    if ("field" in pt) return function Xt(pt) {
      return {
        $type: "compare",
        field: pt.field,
        comparison: Pi(pt.comparison),
        value: `*${pt.value}*`
      };
    }(pt);
    throw new Error("Не удалось преобразовать элемент фильтра");
  }
  function Je(pt) {
    return pt.reduce((Dt, Ht) => Dt.concat(Array.isArray(Ht) ? Je(Ht) : Ht), []);
  }
  function Pi(pt) {
    switch (pt) {
      case "eq":
      case "like":
        return "=";
      case "gt":
      case "gte":
        return ">";
      case "lt":
      case "lte":
        return "<";
    }
  }
});
