// Extracted class; external identifiers resolve in modules/9340.js.
(class {
  constructor(h, x, u) {
    this.modalRef = h, this.store = u, this.patientData = x, this.fullName = (0, b.hE)(x), this.indexScalesSeed = (0, b.sn)(x);
    const T = (0, A.iY)(x?.data).timeCommitted;
    this.indexTimeCommitted = null != T ? String(T) : void 0, this.store.dispatch((0, d.v_)({
      patientData: x
    }));
  }
});
