// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.isTablet = !1, this.skinFormChanges = new e.vpe(), this.fb = (0, e.f3M)(pr.qu), this.isBedsoresExpanded = !1, this.hemaControl = new pr.NI(!1), this.skinFormGroup = this._initForm(), this.isEmittingToParent = !1;
  }
  ngOnChanges(s) {
    if ((0, Du.up)(s.skinStateValue)) {
      if (this.isEmittingToParent) return void (this.isEmittingToParent = !1);
      const o = {
          ...(this.skinStateValue ?? {})
        },
        D = o.hemaAreas ?? [];
      delete o.hemaAreas;
      const Z = {
        ...(0, Oc.yE)(fu.XM, o)
      };
      this.skinFormGroup.patchValue(Z, {
        emitEvent: !1
      }), OC(this.getControl("hemaAreas"), D);
      const X = Boolean(o.hematomas || D.length);
      this.hemaControl.setValue(X, {
        emitEvent: !1
      });
    }
    this.disabled ? this.skinFormGroup.disable({
      emitEvent: !1
    }) : this.skinFormGroup.enable({
      emitEvent: !1
    });
  }
  ngAfterViewInit() {
    this.getControl("bedsores").valueChanges.pipe((0, Kn.t)(this)).subscribe(s => this.isBedsoresExpanded = s), this.skinFormGroup.valueChanges.pipe((0, Kn.t)(this)).subscribe(() => {
      this.emitSkinFormChanges();
    });
  }
  emitSkinFormChanges() {
    const s = this.skinFormGroup.getRawValue(),
      o = H2(this.getControl("hemaAreas"));
    delete s.hemaAreas, this.isEmittingToParent = !0, this.skinFormChanges.emit({
      ...(0, Oc.zb)((0, Oc.yE)(fu.XM, s)),
      hemaAreas: o
    });
  }
  getControl(s) {
    return (0, nf.YV)(this.skinFormGroup, s);
  }
  _initForm() {
    return this.fb.group({
      hematomas: [!1],
      hemaAreas: this.fb.array([]),
      hemaDescription: [null],
      bedsores: [!1]
    });
  }
  toggleHematomas(s) {
    this.hemaControl.setValue(s), this.getControl("hematomas").patchValue(s), s || this.getControl("hemaAreas").clear();
  }
});
