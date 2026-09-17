// Extracted class; external identifiers resolve in modules/94370.js.
(class {
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
});
