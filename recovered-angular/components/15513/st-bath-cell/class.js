// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get text() {
    return this.formatBathText((0, rd.mw)(this.data?.data).bath);
  }
  formatBathText(s) {
    if (null == s || "" === s) return "Нет";
    if ("boolean" == typeof s) return s ? "Да" : "Нет";
    const o = String(s).trim().toLowerCase();
    return ["да", "true", "1"].includes(o) ? "Да" : ["нет", "false", "0"].includes(o) ? "Нет" : o.charAt(0).toUpperCase() + o.slice(1);
  }
});
