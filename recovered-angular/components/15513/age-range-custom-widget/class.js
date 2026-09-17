// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s) {
    this.luValidators = s, this.formControl = new pr.NI({
      start: null,
      end: null
    }, [this.luValidators.periodRequired(), this.luValidators.periodIsValid()]), this.agePeriodFormGroup = new pr.cw({
      min: new pr.NI(null),
      max: new pr.NI(null)
    });
  }
  ngOnInit() {
    console.log("WIDGET", this.widget), this.parentFormGroup.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      s[this.widget.formGroupField.field] || this.agePeriodFormGroup.patchValue({
        min: null,
        max: null
      }, {
        emitEvent: !1
      });
    }), this.agePeriodFormGroup.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.agePeriodFormGroup.setErrors(null);
      const o = this.cleanAgeValue(s.min),
        D = this.cleanAgeValue(s.max);
      (o !== s.min || D !== s.max) && (this.agePeriodFormGroup.patchValue({
        min: o,
        max: D
      }, {
        emitEvent: !1
      }), null != o && null != D && o > D && this.agePeriodFormGroup.setErrors({
        invalidRange: !0
      }, {
        emitEvent: !1
      }), this.agePeriodFormGroup.errors || this.formControl.patchValue((0, OL.$j)({
        start: o,
        end: D
      }, "Y")));
    });
  }
  cleanAgeValue(s) {
    if (0 === s) return 0;
    if (!s) return null;
    let o = String(s).replace(/\D/g, "");
    return /^0+$/.test(o) ? 0 : (o.startsWith("0") && o.length > 1 && (o = o.replace(/^0+/, "")), "" === o ? null : +o);
  }
});
