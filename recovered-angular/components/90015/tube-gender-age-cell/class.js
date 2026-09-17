// Extracted class; external identifiers resolve in modules/90015.js.
(class {
  constructor() {
    this.age = 0, this.icon = "";
  }
  ngOnInit() {
    const {
      careCase: je
    } = this.data;
    this.age = (0, A.Kp)(je?.birthDate) || 0, this.icon = 1 == je?.genderCode ? "male2" : "female2";
  }
});
