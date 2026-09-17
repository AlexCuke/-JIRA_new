// Extracted from main; webpack module 71397. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    x: () => L
  });
  var t = i(94650),
    e = i(36895),
    a = i(24006),
    m = i(9073),
    d = i(93278),
    M = i(59250),
    b = i(13207),
    A = i(62104),
    N = i(71273);
  function I(v, f) {
    if (1 & v && (t.TgZ(0, "lu-option", 7), t._uU(1), t.qZA()), 2 & v) {
      const E = f.$implicit;
      t.Q6J("value", E), t.xp6(1), t.hij("", E.label, " ");
    }
  }
  function O(v, f) {
    if (1 & v && t.YNc(0, I, 2, 2, "lu-option", 6), 2 & v) {
      const E = t.oxw();
      t.Q6J("ngForOf", E.activeSortMap);
    }
  }
  const C = class {
    constructor() {
      this.rowsSort = new t.vpe(), this.sortMap = [{
        name: "patientFio",
        label: "ФИО пациента",
        direction: "asc"
      }, {
        name: "wardSort",
        label: "Палата",
        direction: "desc"
      }, {
        name: "news2",
        label: "NEWS2",
        direction: "desc"
      }], this.sortValue = this.sortMap[1];
    }
    ngOnInit() {
      this.sortValue = this.activeSortMap[0];
    }
    sortHandler() {
      this.rowsSort.emit({
        field: this.sortValue.name,
        direction: this.sortValue.direction
      });
    }
    compareSort(f, E) {
      return f?.name === E?.name;
    }
    displaySort(f) {
      return f ? f.label : "";
    }
    get activeSortMap() {
      return this.customSortParams?.length ? this.customSortParams : this.sortMap;
    }
  };
  let L = C;
  C.ɵfac = function (E) {
    return new (E || C)();
  }, C.ɵcmp = t.Xpm({
    type: C,
    selectors: [["task-tablet-sort-widget"]],
    inputs: {
      customSortParams: "customSortParams"
    },
    outputs: {
      rowsSort: "rowsSort"
    },
    standalone: !0,
    features: [t.jDz],
    decls: 9,
    vars: 7,
    consts: [[1, "sort-header"], ["lu-button-link", "", "luDropdownButton", "", 3, "compareFn", "displayValueFn", "ngModel", "click", "ngModelChange"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "chevron-icon", 3, "size", "luChevronRotate"], ["positions", "bottom-left", 3, "content", "withArrow"], ["dropdown", ""], ["content", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function (E, h) {
      if (1 & E) {
        const x = t.EpF();
        t.TgZ(0, "div", 0)(1, "span"), t._uU(2, "Сортировка по:"), t.qZA(), t.TgZ(3, "button", 1), t.NdJ("click", function () {
          t.CHM(x);
          const T = t.MAs(6);
          return t.KtG(T.toggle());
        })("ngModelChange", function (T) {
          return h.sortValue = T;
        })("ngModelChange", function () {
          return h.sortHandler();
        }), t._UZ(4, "lu-svg-icon", 2), t.TgZ(5, "lu-dropdown", 3, 4), t.YNc(7, O, 1, 1, "ng-template", null, 5, t.W1O), t.qZA()()();
      }
      if (2 & E) {
        const x = t.MAs(6),
          u = t.MAs(8);
        t.xp6(3), t.Q6J("compareFn", h.compareSort)("displayValueFn", h.displaySort)("ngModel", h.sortValue), t.xp6(1), t.Q6J("size", 16)("luChevronRotate", x), t.xp6(1), t.Q6J("content", u)("withArrow", !0);
      }
    },
    dependencies: [e.ez, e.sg, m.W1, m.mc, m.zY, A.V, A.G, d.h, d.q, N.p, N.c, M.J, M.$, b.X, b.k, a.u5, a.JJ, a.On],
    styles: [".sort-widget[_ngcontent-%COMP%]{display:flex;flex-direction:row}.sort-header[_ngcontent-%COMP%]{display:flex;line-height:24px}"]
  });
});
