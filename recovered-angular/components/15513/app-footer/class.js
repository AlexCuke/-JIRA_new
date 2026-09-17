// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.store = (0, e.f3M)(Qr.yh), this.cdr = (0, e.f3M)(e.sBO), this.openedPanels = [];
  }
  get appVersion() {
    return (Rl.UH.getValue("revision")?.version ?? "").replace(/[^\d.]/g, "");
  }
  ngAfterViewInit() {
    this.store.select(cS.mW).pipe((0, Kn.t)(this)).subscribe(s => {
      if (s) {
        const o = this.openedPanels.findIndex(Z => Z.guid === s.guid),
          D = this.openedPanels[o];
        !D && s.isOpened ? this.openedPanels.push({
          ...s
        }) : D && !s.isOpened && this.openedPanels.splice(o, 1);
      }
    }), this.cdr.markForCheck();
  }
  resetPanels() {
    this.openedPanels.forEach(s => {
      s.isExpanded = !1, this.dispatchPanel(s);
    });
  }
  minimizePanel(s) {
    this.resetPanels(), s.isExpanded = !1, this.dispatchPanel(s);
  }
  maximizePanel(s) {
    this.resetPanels(), s.isExpanded = !0, this.dispatchPanel(s);
  }
  dispatchPanel(s) {
    this.store.dispatch((0, Q2.xU)({
      panelFooterState: {
        ...s
      }
    }));
  }
});
