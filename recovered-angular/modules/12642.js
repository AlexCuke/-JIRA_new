// Extracted from main; webpack module 12642. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    e: () => b
  });
  var t = i(71764),
    e = i.n(t),
    a = i(94650),
    m = i(21846),
    d = i(36895);
  function M(N, I) {
    if (1 & N && (a.TgZ(0, "div")(1, "div")(2, "p", 2), a._uU(3), a.qZA()()()), 2 & N) {
      const O = I.$implicit;
      a.xp6(3), a.Oqu((null == O || null == O.stomaCareMarks ? null : O.stomaCareMarks[O.stomaCareMarks.length - 1]) || "");
    }
  }
  const A = class {
    constructor(I) {
      this.sharedDataService = I, this.listState = null, this.cellState = [], this.sharedDataService.updates$.subscribe(O => {
        this.listState = O;
      });
    }
    ngOnInit() {
      this.cellState = (this.data?.data?.elements ?? []).map(O => {
        const L = {
          ...O
        };
        return L.stomaCareMarks && L.stomaCareMarks.length > 0 && (L.stomaCareMarks = L.stomaCareMarks.map(C => {
          const v = {
              ...C
            },
            f = this.listState?.value?.queryParams?.dateRangeWidget;
          if (!f) return null;
          const E = e()(f),
            h = e()(v.observationDate);
          return E.isSame(h, "day") ? v[this.data.type]?.slice(0, 5) : null;
        }).filter(Boolean)), L;
      });
    }
  };
  let b = A;
  A.ɵfac = function (O) {
    return new (O || A)(a.Y36(m.g));
  }, A.ɵcmp = a.Xpm({
    type: A,
    selectors: [["timestamps-cell"]],
    inputs: {
      data: "data"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "timestamps-cell"], [4, "ngFor", "ngForOf"], [2, "height", "22px"]],
    template: function (O, L) {
      1 & O && (a.TgZ(0, "div", 0), a.YNc(1, M, 4, 1, "div", 1), a.qZA()), 2 & O && (a.xp6(1), a.Q6J("ngForOf", L.cellState));
    },
    dependencies: [d.sg]
  });
});
