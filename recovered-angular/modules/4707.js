// Extracted from main; webpack module 4707. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    t: () => a
  });
  var t = i(77579),
    e = i(26063);
  class a extends t.x {
    constructor(d = 1 / 0, M = 1 / 0, b = e.l) {
      super(), this._bufferSize = d, this._windowTime = M, this._timestampProvider = b, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = M === 1 / 0, this._bufferSize = Math.max(1, d), this._windowTime = Math.max(1, M);
    }
    next(d) {
      const {
        isStopped: M,
        _buffer: b,
        _infiniteTimeWindow: A,
        _timestampProvider: N,
        _windowTime: I
      } = this;
      M || (b.push(d), !A && b.push(N.now() + I)), this._trimBuffer(), super.next(d);
    }
    _subscribe(d) {
      this._throwIfClosed(), this._trimBuffer();
      const M = this._innerSubscribe(d),
        {
          _infiniteTimeWindow: b,
          _buffer: A
        } = this,
        N = A.slice();
      for (let I = 0; I < N.length && !d.closed; I += b ? 1 : 2) d.next(N[I]);
      return this._checkFinalizedStatuses(d), M;
    }
    _trimBuffer() {
      const {
          _bufferSize: d,
          _timestampProvider: M,
          _buffer: b,
          _infiniteTimeWindow: A
        } = this,
        N = (A ? 1 : 2) * d;
      if (d < 1 / 0 && N < b.length && b.splice(0, b.length - N), !A) {
        const I = M.now();
        let O = 0;
        for (let L = 1; L < b.length && b[L] <= I; L += 2) O = L;
        O && b.splice(0, O + 1);
      }
    }
  }
});
