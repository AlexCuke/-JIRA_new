// Extracted from main; webpack module 88000. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    o: () => b
  });
  var t = i(94650),
    e = i(54004),
    a = i(90293),
    m = i(29559),
    d = i(89653),
    M = i(26229);
  const A = class extends a.xB {
    constructor() {
      super(...arguments), this.store = (0, t.f3M)(d.yh);
    }
    _setColorStatistic(I) {
      const O = I.buckets.map(L => {
        const C = L.doc_count,
          [v, f] = L.key.code.split(";").map(E => E.trim());
        return {
          color: (0, m.d)(v),
          name: f,
          count: C
        };
      });
      this.store.dispatch((0, M.V)({
        statisticGroup: O
      }));
    }
    getIndexList(I, O) {
      return super.getIndexList(I, O).pipe((0, e.U)(L => (L?.aggregations && Object.entries(L?.aggregations).forEach(([C, v]) => {
        const [f, E] = C.split("#");
        "composite" === f && "groupByColorConsumableMaterialTerminology" === E && this._setColorStatistic(v);
      }), L)));
    }
  };
  let b = A;
  A.ɵfac = function () {
    let I;
    return function (L) {
      return (I || (I = t.n5z(A)))(L || A);
    };
  }(), A.ɵprov = t.Yz7({
    token: A,
    factory: A.ɵfac,
    providedIn: "root"
  });
});
