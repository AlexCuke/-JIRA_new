// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get text() {
    return this.formatLinenText((0, rd.mw)(this.data?.data).linen);
  }
  formatLinenText(s) {
    if (null == s || "" === s) return "Нет";
    if ("boolean" == typeof s) return s ? "Да" : "Нет";
    const o = String(s).trim().toLowerCase();
    return ["да", "true", "1"].includes(o) ? "Да" : ["нет", "false", "0"].includes(o) ? "Нет" : o.charAt(0).toUpperCase() + o.slice(1);
  }
});
