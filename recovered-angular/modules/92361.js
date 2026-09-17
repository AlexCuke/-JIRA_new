// Extracted from main; webpack module 92361. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => T
  });
  var t = i(94650),
    e = i(24006),
    a = i(77015),
    m = i(99246),
    d = i(77579),
    M = i(82722),
    b = i(68675),
    A = i(12180),
    N = i.n(A),
    I = i(89653),
    O = i(36895),
    L = i(18200),
    C = i(59250),
    v = i(87545),
    f = i(13207),
    E = i(71298),
    h = i(21803);
  function x(B, y) {
    if (1 & B) {
      const j = t.EpF();
      t.TgZ(0, "lu-option", 7), t.NdJ("click", function () {
        const Le = t.CHM(j).$implicit,
          ke = t.oxw(2);
        return t.KtG(ke.onAction(Le));
      }), t.TgZ(1, "lu-checkbox", 8), t.NdJ("click", function (F) {
        return F.preventDefault();
      }), t._uU(2), t.qZA()();
    }
    if (2 & B) {
      const j = y.$implicit,
        W = t.oxw(2);
      t.xp6(1), t.Q6J("checked", W.getChecked(j)), t.xp6(1), t.hij(" ", j.display, " ");
    }
  }
  function u(B, y) {
    if (1 & B && t.YNc(0, x, 3, 2, "lu-option", 6), 2 & B) {
      const j = t.oxw();
      t.Q6J("ngForOf", j.items);
    }
  }
  const R = class {
    constructor(y, j) {
      this.store = y, this.cd = j, this.displayChipValue = "", this.selectedItems = [], this.loadItems = [], this.items = [], this.destroy$ = new d.x(), this.formControl = new e.NI();
    }
    ngOnInit() {
      this.widget.data.terminology.fromModule ? this.store.select(a.Tb.selectTerminologyItem(this.widget.data.terminology.fromModule.name, this.widget.data.terminology.fromModule.uniqueId)).pipe((0, M.R)(this.destroy$)).subscribe(y => {
        this.loadItems = Array.isArray(y.data) ? y.data : [], this.items = [...this.loadItems], this.cd.markForCheck();
      }) : this.widget.data.terminology.fromStatic && (this.loadItems = Array.isArray(this.widget.data.terminology.fromStatic.items) ? this.widget.data.terminology.fromStatic.items : [], this.items = [...this.loadItems]), this.formControl.valueChanges.pipe((0, b.O)(this.formControl.value), (0, M.R)(this.destroy$)).subscribe(y => {
        this.selectedItems = y || [], this.updateDisplayValue(), this.cd.markForCheck();
      });
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    updateDisplayValue() {
      const y = this.selectedItems.length;
      this.displayChipValue = 0 === y ? this.widget.data.placeholder : 1 === y ? `${N()(this.selectedItems[0].display, {
        length: 20
      })}` : `${N()(this.selectedItems[0].display, {
        length: 20
      })}, \u0435\u0449\u0435 ${y - 1}`;
    }
    onAction(y) {
      const j = this.selectedItems.findIndex(W => W.code === y.code);
      this.selectedItems = j >= 0 ? [...this.selectedItems.slice(0, j), ...this.selectedItems.slice(j + 1)] : [...this.selectedItems, y], this.formControl.setValue(this.selectedItems);
    }
    getChecked(y) {
      return this.selectedItems.some(j => j.code === y.code);
    }
    onOpen() {
      this.widget.data.terminology.fromModule && this.store.dispatch(a.gA.getTerminology({
        request: [{
          featureKey: this.widget.data.terminology.fromModule.uniqueId,
          terminologyName: this.widget.data.terminology.fromModule.name
        }]
      }));
    }
  };
  let T = R;
  R.ɵfac = function (j) {
    return new (j || R)(t.Y36(I.yh), t.Y36(t.sBO));
  }, R.ɵcmp = t.Xpm({
    type: R,
    selectors: [["chip-multi-checkbox-widget"]],
    inputs: {
      widget: "widget",
      formControl: "formControl"
    },
    features: [t._Bn([a.EA, a.ER, {
      provide: e.JU,
      useExisting: (0, t.Gpc)(() => a.uY),
      multi: !0
    }, {
      provide: m.pP,
      useValue: !0
    }])],
    decls: 9,
    vars: 8,
    consts: [["luDropdownOrigin", "", 1, "lu-custom-chip", 3, "focusin"], ["origin", "luDropdownOrigin"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-chip-multi", "positions", "bottom-left", 1, "chip-data-list", 3, "content", "closeIfOutsideClick", "notFocusClosestElement", "origin"], ["chipDropdown", ""], ["content", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "checked", "click"]],
    template: function (j, W) {
      if (1 & j && (t.ynx(0), t.TgZ(1, "lu-chip", 0, 1), t.NdJ("focusin", function () {
        return W.onOpen();
      }), t._uU(3), t._UZ(4, "lu-combobox-controls", 2), t.qZA(), t.TgZ(5, "lu-dropdown", 3, 4), t.YNc(7, u, 1, 1, "ng-template", null, 5, t.W1O), t.qZA(), t.BQk()), 2 & j) {
        const F = t.MAs(2),
          Le = t.MAs(6),
          ke = t.MAs(8);
        t.xp6(3), t.hij(" ", W.displayChipValue, " "), t.xp6(1), t.Q6J("dropdown", Le)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", ke)("closeIfOutsideClick", !0)("notFocusClosestElement", !0)("origin", F);
      }
    },
    dependencies: [O.sg, L.r, E.n, h.q, C.$, v.$m, f.k],
    styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}  .lu-custom-chip   lu-chip{height:32px;max-width:288px;min-width:40px}  .lu-custom-chip   label{padding:0 4px 0 12px!important}  .lu-custom-chip   label .lu-button-wrapper{height:32px!important;width:32px!important}  .dropdown-chip-multi .lu-overlay-content{max-width:500px;max-height:320px;overflow-y:auto}"],
    changeDetection: 0
  });
});
