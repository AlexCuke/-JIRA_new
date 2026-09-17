// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o) {
    this.store = s, this.cd = o, this.selectedItems = [], this.items = [], this.displayChipValue = "", this.formControl = new pr.NI();
  }
  ngOnInit() {
    if (this.widget.data.terminology.fromStatic) {
      const s = oe => /^\d+$/.test(oe),
        o = this.widget.data.terminology.fromStatic.items,
        D = Array.isArray(o) ? o : [],
        Z = D.filter(oe => !s(oe.code) || !s(oe.display)),
        X = D.filter(oe => s(oe.code) && s(oe.display)).map(({
          code: oe,
          display: ue
        }) => ({
          code: oe,
          display: `\u2116 ${ue}`
        }));
      X.sort((oe, ue) => +oe.code - +ue.code), this.items = [...Z, ...X];
    }
    this.formControl.valueChanges.pipe((0, j2.O)(this.formControl.value), (0, Kn.t)(this)).subscribe(s => {
      this.selectedItems = s || [];
      const o = this.selectedItems.length;
      this.displayChipValue = 0 === o ? this.widget.data.placeholder.trim() : 1 === o ? `${mw()(this.selectedItems[0].display, {
        length: 30
      })}`.trim() : `${mw()(this.selectedItems[0].display, {
        length: 20
      })}, \u0435\u0449\u0435 ${o - 1}`.trim(), this.cd.markForCheck();
    });
  }
  onReset() {
    this.selectedItems = [], this.formControl.setValue(this.selectedItems);
  }
  onAction(s) {
    const o = this.selectedItems.findIndex(D => D.code === s.code);
    this.selectedItems = o >= 0 ? [...this.selectedItems.slice(0, o), ...this.selectedItems.slice(o + 1)] : [...this.selectedItems, s], this.formControl.setValue(this.selectedItems);
  }
  getSelected(s) {
    return this.selectedItems.some(({
      code: o
    }) => o === s.code);
  }
  onOpen() {
    this.widget.data.terminology.fromModule && this.store.dispatch(pl.gA.getTerminology({
      request: [{
        featureKey: this.widget.data.terminology.fromModule.uniqueId,
        terminologyName: this.widget.data.terminology.fromModule.name
      }]
    }));
  }
});
