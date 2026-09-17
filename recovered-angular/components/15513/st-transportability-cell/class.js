// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  get value() {
    const s = (0, rd.mw)(this.data?.data).transportability;
    return null != s ? String(s) : null;
  }
  get text() {
    return this.value ?? "—";
  }
});
