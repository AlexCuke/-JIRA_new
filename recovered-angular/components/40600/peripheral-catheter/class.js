// Extracted class; external identifiers resolve in modules/40600.js.
(class {
  constructor() {
    this.isRequired = !0, this.peripheralFormSubmitted = new e.vpe(), this.peripheralCatheterFormChanges = new e.vpe(), this.fb = (0, e.f3M)(v.qu), this.cdr = (0, e.f3M)(e.sBO), this.peripheralCatheterForm = this._initForm(), this.localizationPlace = f.pC.map(ke => ke.name), this.getControl = x.YV;
  }
  ngOnChanges(ke) {
    this.isRequired || ["catheterLocus", "peripheralCatheterUnit", "peripheralCatheterSize"].forEach(J => {
      this.peripheralCatheterForm.get(J).clearValidators(), this.peripheralCatheterForm.get(J).updateValueAndValidity();
    });
  }
  ngAfterViewInit() {
    this.peripheralCatheterForm.valueChanges.pipe((0, h.t)(this)).subscribe(ke => {
      this.peripheralFormSubmitted.emit({
        isValid: this.peripheralCatheterForm.valid,
        data: ke
      }), this.cdr.markForCheck(), this.peripheralCatheterFormChanges.emit((0, T.zb)((0, T.yE)(u.Dz, ke)));
    });
  }
  _initForm() {
    return this.fb.group({
      catheterLocus: [null, [v.kI.required]],
      peripheralCatheterSize: [null, [v.kI.required]],
      peripheralCatheterUnit: ["G", [v.kI.required]]
    });
  }
});
