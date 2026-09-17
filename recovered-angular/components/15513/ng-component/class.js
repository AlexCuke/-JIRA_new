// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.luValidators = s, this.formControl = new pr.NI(), this.destroy$ = new Uo.x(), this.formGroup = new pr.cw({
      start: new pr.NI(null),
      end: new pr.NI(null)
    });
  }
  ngOnInit() {
    this.formControl.setValidators(this.getValidators()), this.writeValue(this.formControl.value), this.formControl.valueChanges.pipe((0, fw.R)(this.destroy$)).subscribe(s => this.writeValue(s)), this.formGroup.valueChanges.pipe((0, fw.R)(this.destroy$)).subscribe(s => {
      this.formControl.setValue({
        start: s.start ?? null,
        end: s.end ?? null
      }, {
        emitEvent: !1
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next(), this.destroy$.complete();
  }
  writeValue(s) {
    this.formGroup.patchValue({
      start: s?.start ?? null,
      end: s?.end ?? null
    }, {
      emitEvent: !1
    });
  }
  get options() {
    return this.widget?.formGroupField?.options?.validation;
  }
  getStartMinDate() {
    return this.options?.startMinDate ? new Date(this.options.startMinDate) : void 0;
  }
  getStartMaxDate() {
    return this.options?.startMaxDate ? new Date(this.options.startMaxDate) : void 0;
  }
  getEndMinDate() {
    return this.options?.endMinDate ? new Date(this.options.endMinDate) : void 0;
  }
  getEndMaxDate() {
    return this.options?.endMaxDate ? new Date(this.options.endMaxDate) : void 0;
  }
  getValidators() {
    const s = [this.luValidators.periodIsValid()];
    return void 0 !== this.getStartMinDate() && s.push(this.luValidators.periodStartMin(this.getStartMinDate())), void 0 !== this.getStartMaxDate() && s.push(this.luValidators.periodStartMax(this.getStartMaxDate())), void 0 !== this.getEndMinDate() && s.push(this.luValidators.periodEndMin(this.getEndMinDate())), void 0 !== this.getEndMaxDate() && s.push(this.luValidators.periodEndMax(this.getEndMaxDate())), s;
  }
});
