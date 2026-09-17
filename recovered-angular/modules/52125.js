// Extracted from main; webpack module 52125. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    AB: () => fe,
    HZ: () => h,
    ZO: () => ke,
    c0: () => R,
    kA: () => J
  });
  var t = i(94650),
    e = i(36895),
    a = i(29293),
    m = i(20544),
    d = i(37524),
    M = i(28115);
  function h(We) {
    if (!We) return console.error("ERROR: getAgeCaptionByBirthDate", "Некорректное значение параметра \"birthDate\".", We), "—";
    const Re = a.rz,
      st = "мес.",
      q = "дн.",
      mt = new Date(),
      ut = new Date(We),
      {
        years: Ct,
        months: Ft,
        days: Et
      } = (0, m.Z)({
        start: ut,
        end: mt
      });
    if ((0, d.Z)((0, M.Z)(mt), (0, M.Z)(ut))) return `0 ${q}`;
    if (Ct && Ct >= 5) return `${Ct} ${(0, a.gY)(Ct, Re, !1)}`;
    if (Ct && Ct > 0 && Ct < 5) {
      const Ue = Ft ? ` ${Ft} ${st}` : "";
      return `${Ct} ${(0, a.gY)(Ct, Re, !1)}${Ue}`;
    }
    return Ft && Ft >= 3 && Ft < 12 ? `${Ft} ${st}` : Ft && Ft > 0 && Ft < 3 ? `${Ft} ${st} ${Et ? `${Et} ${q}` : ""}` : Et ? `${Et} ${q}` : "";
  }
  function R(We) {
    if (!We) return "";
    let Re;
    return Re = "string" == typeof We ? We.split(" ") : [We.lastName?.trim(), We.firstName?.trim(), We.secondName?.trim()], Re.reduce((q, mt, ut) => mt ? 0 === ut ? (q.push(mt), q) : (q.push(`${mt[0]}.`), q) : q, []).join(" ");
  }
  let ke = (() => {
      class We {}
      return We.ɵfac = function (st) {
        return new (st || We)();
      }, We.ɵmod = t.oAB({
        type: We
      }), We.ɵinj = t.cJS({
        imports: [e.ez]
      }), We;
    })(),
    J = (() => {
      class We {
        transform(st) {
          return function T(We) {
            return We ? "string" == typeof We ? We : [We.lastName, We.firstName, We.secondName].filter(Boolean).join(" ") : "";
          }(st);
        }
      }
      return We.ɵfac = function (st) {
        return new (st || We)();
      }, We.ɵpipe = t.Yjl({
        name: "fullName",
        type: We,
        pure: !0
      }), We;
    })(),
    fe = (() => {
      class We {}
      return We.ɵfac = function (st) {
        return new (st || We)();
      }, We.ɵmod = t.oAB({
        type: We
      }), We.ɵinj = t.cJS({
        imports: [e.ez]
      }), We;
    })();
});
