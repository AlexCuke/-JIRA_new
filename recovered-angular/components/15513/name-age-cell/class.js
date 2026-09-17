// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  ngOnInit() {
    this.clsData = (0, Oc.yE)(w1.d, this.data.data);
  }
  get age() {
    return new Date().getFullYear() - this.clsData?.combinedCareCase?.birthDate.getFullYear();
  }
  get genderIcon() {
    return 1 == this.clsData?.combinedCareCase?.genderCode ? "male2" : "female2";
  }
});
