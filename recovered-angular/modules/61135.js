// Extracted from main; webpack module 61135. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => e
  });
  var t = i(77579);
  class e extends t.x {
    constructor(m) {
      super(), this._value = m;
    }
    get value() {
      return this.getValue();
    }
    _subscribe(m) {
      const d = super._subscribe(m);
      return !d.closed && m.next(this._value), d;
    }
    getValue() {
      const {
        hasError: m,
        thrownError: d,
        _value: M
      } = this;
      if (m) throw d;
      return this._throwIfClosed(), M;
    }
    next(m) {
      super.next(this._value = m);
    }
  }
});
