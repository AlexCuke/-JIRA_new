// Extracted from main; webpack module 94370. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    v: () => T
  });
  var t = i(94650),
    e = i(24006),
    a = i(77015),
    m = i(99246),
    d = i(77579),
    M = i(68675),
    b = i(82722),
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
      t.TgZ(0, "lu-option", 8), t.NdJ("click", function () {
        const Le = t.CHM(j).$implicit,
          ke = t.oxw(2);
        return t.KtG(ke.onAction(Le));
      }), t.TgZ(1, "lu-checkbox", 9), t.NdJ("click", function (F) {
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
    if (1 & B && t.YNc(0, x, 3, 2, "lu-option", 7), 2 & B) {
      const j = t.oxw();
      t.Q6J("ngForOf", j.items);
    }
  }
  const R = class {
    constructor(y, j) {
      this.store = y, this.cd = j, this.displayChipValue = "", this.selectedItems = [], this.loadItems = [], this.items = [], this.destroy$ = new d.x(), this.fromModuleSubscribed = !1, this.formControl = new e.NI();
    }
    ngOnInit() {
      this.rebuildItems(), this.subscribeFromModule(), this.formControl.valueChanges.pipe((0, M.O)(this.formControl.value), (0, b.R)(this.destroy$)).subscribe(y => {
        this.selectedItems = y || [], this.updateDisplayValue(), this.cd.markForCheck();
      });
    }
    ngOnChanges(y) {
      y.widget && !y.widget.firstChange && (this.rebuildItems(), this.updateDisplayValue(), this.cd.markForCheck());
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    rebuildItems() {
      const y = this.widget?.data?.terminology;
      !y?.fromStatic || y.fromModule || (this.loadItems = Array.isArray(y.fromStatic.items) ? y.fromStatic.items : [], this.items = [{
        code: "all",
        display: this.getAllItemLabel()
      }, ...this.loadItems]);
    }
    subscribeFromModule() {
      const y = this.widget?.data?.terminology?.fromModule;
      if (!y || this.fromModuleSubscribed) return;
      this.fromModuleSubscribed = !0;
      const j = y.uniqueId;
      this.store.select(a.Tb.selectTerminologyItem(y.name, j)).pipe((0, b.R)(this.destroy$)).subscribe(W => {
        this.loadItems = Array.isArray(W.data) ? W.data : [], this.items = [{
          code: "all",
          display: this.getAllItemLabel(j)
        }, ...this.loadItems], this.updateDisplayValue(), this.cd.markForCheck();
      });
    }
    getAllItemLabel(y) {
      if (y && R.ALL_LABELS_BY_UNIQUE_ID[y]) return R.ALL_LABELS_BY_UNIQUE_ID[y];
      const j = this.widget?.formGroupField?.field;
      return j && R.ALL_LABELS_BY_FIELD[j] ? R.ALL_LABELS_BY_FIELD[j] : this.widget?.data?.placeholder ?? "";
    }
    updateDisplayValue() {
      const y = this.widget?.data?.placeholder ?? "",
        j = this.selectedItems.length,
        F = !!this.items.find(Le => "all" === Le.code) && this.items.length > 1 && j === this.items.length - 1;
      this.displayChipValue = 0 === j || F ? y : 1 === j ? `${N()(this.selectedItems[0]?.display ?? "", {
        length: 20
      })}` : `${N()(this.selectedItems[0]?.display ?? "", {
        length: 20
      })}, \u0435\u0449\u0435 ${j - 1}`;
    }
    onAction(y) {
      if ("all" === y.code) return this.selectedItems = this.selectedItems.length === this.items.length - 1 ? [] : this.items.filter(F => "all" !== F.code), void this.formControl.setValue(this.selectedItems);
      const j = this.selectedItems.findIndex(W => W.code === y.code);
      this.selectedItems = j >= 0 ? [...this.selectedItems.slice(0, j), ...this.selectedItems.slice(j + 1)] : [...this.selectedItems, y], this.formControl.setValue(this.selectedItems);
    }
    getChecked(y) {
      return "all" === y.code ? this.selectedItems.length === this.items.length - 1 : this.selectedItems.some(j => j.code === y.code);
    }
    onOpen() {
      this.widget.data.terminology.fromModule && this.store.dispatch(a.gA.getTerminology({
        request: [{
          featureKey: this.widget.data.terminology.fromModule.uniqueId,
          terminologyName: this.widget.data.terminology.fromModule.name
        }]
      }));
    }
    openDropdown(y) {
      this.onOpen(), y.open();
    }
  };
  let T = R;
  R.ALL_LABELS_BY_UNIQUE_ID = {
    stoma_kind_list: "Все стомы",
    departments_list: "Все отделения"
  }, R.ALL_LABELS_BY_FIELD = {
    allWardsWidget: "Все палаты"
  }, R.ɵfac = function (j) {
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
    }]), t.TTD],
    decls: 10,
    vars: 8,
    consts: [["type", "button", "luDropdownOrigin", "", 1, "lu-custom-chip", 3, "focusin", "click"], ["origin", "luDropdownOrigin"], [1, "chip-label"], [3, "dropdown", "clearButton", "chevronButton"], ["panelClass", "dropdown-chip-multi", "positions", "bottom-left", 1, "chip-data-list", 3, "content", "closeIfOutsideClick", "notFocusClosestElement", "origin"], ["chipDropdown", ""], ["content", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "checked", "click"]],
    template: function (j, W) {
      if (1 & j) {
        const F = t.EpF();
        t.ynx(0), t.TgZ(1, "lu-chip", 0, 1), t.NdJ("focusin", function () {
          return W.onOpen();
        })("click", function () {
          t.CHM(F);
          const ke = t.MAs(7);
          return t.KtG(W.openDropdown(ke));
        }), t.TgZ(3, "span", 2), t._uU(4), t.qZA(), t._UZ(5, "lu-combobox-controls", 3), t.qZA(), t.TgZ(6, "lu-dropdown", 4, 5), t.YNc(8, u, 1, 1, "ng-template", null, 6, t.W1O), t.qZA(), t.BQk();
      }
      if (2 & j) {
        const F = t.MAs(2),
          Le = t.MAs(7),
          ke = t.MAs(9);
        t.xp6(4), t.Oqu(W.displayChipValue), t.xp6(1), t.Q6J("dropdown", Le)("clearButton", !1)("chevronButton", !0), t.xp6(1), t.Q6J("content", ke)("closeIfOutsideClick", !0)("notFocusClosestElement", !0)("origin", F);
      }
    },
    dependencies: [O.sg, L.r, E.n, h.q, C.$, v.$m, f.k],
    styles: ["[_nghost-%COMP%]{display:block;width:100%}.__other-item[_ngcontent-%COMP%]{margin-top:calc(var(--lu-base-gutter) * 2)}.sub-display[_ngcontent-%COMP%]{display:block}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column}.message-link[_ngcontent-%COMP%]{cursor:pointer}.message-link__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) / 2);cursor:pointer}.chip-data-list[_ngcontent-%COMP%]{--lu-list-size: 320px}  .lu-custom-chip   .lu-chip{height:32px!important;min-width:40px}  .lu-custom-chip   .lu-chip:hover{background:rgba(56,161,214,.2)!important}  .lu-custom-chip   label{padding:0 4px 0 12px!important;display:flex;align-items:center;width:100%;box-sizing:border-box}  .lu-custom-chip   label .chip-label{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}  .lu-custom-chip   label lu-combobox-controls{display:flex;align-items:center;margin-left:auto;flex-shrink:0}  .lu-custom-chip   label .lu-chevron-button .lu-button-wrapper{height:32px!important;width:32px!important}  .lu-custom-chip:has(lu-combobox-controls .lu-chevron-button lu-svg-icon[style=\"transform: rotateZ(180deg);\"]) .lu-chip{background:rgba(56,161,214,.3019607843)!important}  .dropdown-chip-multi .lu-overlay-content{max-width:500px;max-height:320px;overflow-y:auto}  .dropdown-chip-multi .lu-overlay-content lu-option:has(lu-checkbox[data-lu-checked=true]){background:rgba(56,161,214,.2)!important}"],
    changeDetection: 0
  });
});
