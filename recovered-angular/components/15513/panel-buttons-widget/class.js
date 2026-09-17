// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.runEvent = new e.vpe(), this.printService = (0, e.f3M)(SS.$), this.lrNamedLabelPrint = (0, e.f3M)(AS.k), this.messageService = (0, e.f3M)(tf.Jv);
  }
  get isRegistered() {
    return "registered" === this.widget?.dataForAction?.type;
  }
  get isUnregistered() {
    return "unregistered" === this.widget?.dataForAction?.type;
  }
  clickButton(s) {
    "printNamedLabels" === s ? (this.runEvent.emit(), this.printService.currentSelectedData$.pipe((0, Ie.q)(1), (0, Kn.t)(this)).subscribe(o => {
      const D = o?.data?.markedItems;
      if (!Array.isArray(D) || 0 === D.length) return void this.messageService.warning("Выберите направления для печати именных этикеток");
      const Z = this.printService.getReloadList(),
        X = this.printService.getIndexFilterParams();
      this.lrNamedLabelPrint.openPrintDialogs(D, {
        reloadList: Z ?? void 0,
        indexFilterParams: X
      });
    })) : this.runEvent.emit();
  }
});
