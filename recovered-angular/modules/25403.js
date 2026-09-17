// Extracted from main; webpack module 25403. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Q: () => e
  });
  var t = i(70930);
  class e extends t.Lv {
    constructor(m, d, M, b, A) {
      super(m), this.onFinalize = A, this._next = d ? function (N) {
        try {
          d(N);
        } catch (I) {
          m.error(I);
        }
      } : super._next, this._error = b ? function (N) {
        try {
          b(N);
        } catch (I) {
          m.error(I);
        } finally {
          this.unsubscribe();
        }
      } : super._error, this._complete = M ? function () {
        try {
          M();
        } catch (N) {
          m.error(N);
        } finally {
          this.unsubscribe();
        }
      } : super._complete;
    }
    unsubscribe() {
      var m;
      const {
        closed: d
      } = this;
      super.unsubscribe(), !d && (null === (m = this.onFinalize) || void 0 === m || m.call(this));
    }
  }
});
