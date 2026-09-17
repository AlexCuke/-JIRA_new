// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor($, k, ce, Ye) {
    this.modalRef = $, this.qrScannerService = k, this.injectionsService = ce, this.data = Ye;
  }
  ngOnInit() {
    this.qrScannerService.start({
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    }), this.qrScannerService.scan$.pipe((0, Xn.t)(this)).subscribe(({
      value: $
    }) => {
      $ === this.data.code && this.modalRef.close(!0);
    });
  }
  get isDebugMode() {
    return this.injectionsService.isDebugMode;
  }
});
