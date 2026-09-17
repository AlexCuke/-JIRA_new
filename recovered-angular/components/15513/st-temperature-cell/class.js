// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get temperature() {
    return (0, bh.ze)(this.data.data);
  }
  get temperatureText() {
    const s = this.temperature;
    return null == s || Number.isNaN(s) ? "—" : (0, bh.VG)(s);
  }
  get temperatureClass() {
    const s = this.temperature;
    return null == s ? "st-temperature-cell__value_normal" : s < 35.9 || s > 36.9 ? "st-temperature-cell__value_fever" : "st-temperature-cell__value_normal";
  }
});
