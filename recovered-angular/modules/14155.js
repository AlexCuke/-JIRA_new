// Extracted from main; webpack module 14155. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    y: () => m
  });
  var t = i(61135),
    e = i(94650);
  const a = {
      "st-news2-cell": "NEWS2",
      "st-temperature-cell": "Темп., °C",
      "st-pressure-cell": "Давление",
      "st-hr-cell": "ЧСС",
      "st-rr-cell": "ЧДД",
      "st-morse-cell": "Морсе",
      "st-transportability-cell": "Транспортабельн.",
      "st-bath-cell": "Ванна",
      "st-linen-cell": "Смена белья",
      "st-pediculosis-cell": "Педикулёз",
      "st-weight-cell": "Вес",
      "st-liquid-cell": "Выпито жидкости",
      "st-urine-cell": "Сут. кол-во мочи",
      "st-feces-cell": "Стул",
      "st-phlegm-cell": "Мокрота",
      "st-ward-cell": "Палата"
    },
    d = class {
      constructor() {
        this.settings$ = new t.X(null), this.changes$ = this.settings$.asObservable();
      }
      apply(b) {
        this.settings$.next(b?.length ? b : null);
      }
      isVisible(b) {
        const A = this.settings$.value;
        if (!A?.length) return !0;
        const N = A.find(O => O.columnId === b);
        if (N) return N.isVisible;
        const I = a[b];
        if (I) {
          const O = A.find(L => L.columnName === I);
          if (O) return O.isVisible;
        }
        return !0;
      }
      reset() {
        this.settings$.next(null);
      }
    };
  let m = d;
  d.ɵfac = function (A) {
    return new (A || d)();
  }, d.ɵprov = e.Yz7({
    token: d,
    factory: d.ɵfac,
    providedIn: "root"
  });
});
