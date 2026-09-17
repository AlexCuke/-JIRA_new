// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o) {
    this.luValidators = s, this.router = o, this.formControl = new pr.NI({
      start: (0, j3.Z)((0, FS.Z)(new Date(), 1)),
      end: (0, j3.Z)((0, _P.Z)(new Date(), 1))
    }, [this.luValidators.periodRequired(), this.luValidators.periodIsValid()]), this.label = "Период", this.isError = !1, this.errorMsg = "Необходимо выбрать период для формирования списка";
    const D = window.location.pathname.split("/")[2];
    this.label = "unregistered" === D ? "Период" : "Взятие биоматериала";
  }
  ngOnInit() {
    this.router.events.pipe((0, ka.h)(s => s instanceof wl.m2)).subscribe(s => {
      const o = s.urlAfterRedirects.split("/")[2];
      this.label = "unregistered" === o ? "Период" : "Взятие биоматериала";
    }), this.formControl.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.isError = !s?.start || !s?.end;
    }), this.parentFormGroup.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {});
  }
});
