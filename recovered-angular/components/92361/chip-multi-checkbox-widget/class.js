// Extracted class; external identifiers resolve in modules/92361.js.
(class {
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
});
