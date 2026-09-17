// Extracted class; external identifiers resolve in modules/40400.js.
(class {
  constructor() {
    this.isRequired = !0, this.urinaryFormSubmitted = new e.vpe(), this.fb = (0, e.f3M)(O.qu), this.urinaryCatheterForm = this._initForm(), this.urinaryCatheterTypes = E.j6, this.urinaryCatheterSizes = E.Ur, this.getControl = h.YV;
  }
  ngOnInit() {}
  ngOnChanges(Le) {
    this.isRequired || ["urinaryCatheterType", "urinaryCatheterSize"].forEach(ke => {
      this.urinaryCatheterForm.get(ke).clearValidators(), this.urinaryCatheterForm.get(ke).updateValueAndValidity();
    });
  }
  ngAfterViewInit() {
    this.urinaryCatheterForm.valueChanges.pipe((0, x.t)(this)).subscribe(Le => {
      this.urinaryFormSubmitted.emit({
        isValid: this.urinaryCatheterForm.valid,
        data: Le
      });
    });
  }
  _initForm() {
    return this.fb.group({
      urinaryCatheterType: [null, [O.kI.required]],
      urinaryCatheterSize: [null, [O.kI.required]]
    });
  }
});
