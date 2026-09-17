// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  ngOnInit() {
    this.clsData = (0, Fu.d6)((0, Oc.yE)(b1.QL, this.data.data));
  }
  get age() {
    return (0, Fu.cJ)(this.clsData?.careCase?.birthDate);
  }
  get genderIcon() {
    return 1 == this.clsData?.careCase?.genderCode ? "male2" : "female2";
  }
});
