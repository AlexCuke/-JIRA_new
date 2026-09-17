// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.formControl = new pr.NI(), this.compatibilityItems = [];
  }
  ngOnInit() {
    this.compatibilityItems = this.widget.data.terminology.fromStatic.items.map(s => {
      const o = "" === s.display || ";" === s.display ? "Отсутствует" : s.display.split(";")[1].trim();
      return {
        code: s.code,
        display: o
      };
    });
  }
  displayValue(s) {
    return s ? s.display : "";
  }
});
