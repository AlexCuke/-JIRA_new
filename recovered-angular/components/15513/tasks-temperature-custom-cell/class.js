// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.temperature = 0;
  }
  ngOnInit() {
    this.temperature = this.data.data?.news2?.temperature;
  }
  get getTemperature() {
    return 2 === this.temperature.toString().length ? this.temperature + ",0" : this.temperature.toString().replace(".", ",");
  }
});
