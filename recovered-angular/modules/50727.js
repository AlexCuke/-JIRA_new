// Extracted from main; webpack module 50727. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Lc: () => M,
    w0: () => d,
    Nn: () => b
  });
  var t = i(30576);
  const a = (0, i(83888).d)(N => function (O) {
    N(this), this.message = O ? `${O.length} errors occurred during unsubscription:\n${O.map((L, C) => `${C + 1}) ${L.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = O;
  });
  var m = i(38737);
  class d {
    constructor(I) {
      this.initialTeardown = I, this.closed = !1, this._parentage = null, this._teardowns = null;
    }
    unsubscribe() {
      let I;
      if (!this.closed) {
        this.closed = !0;
        const {
          _parentage: O
        } = this;
        if (O) if (this._parentage = null, Array.isArray(O)) for (const v of O) v.remove(this);else O.remove(this);
        const {
          initialTeardown: L
        } = this;
        if ((0, t.m)(L)) try {
          L();
        } catch (v) {
          I = v instanceof a ? v.errors : [v];
        }
        const {
          _teardowns: C
        } = this;
        if (C) {
          this._teardowns = null;
          for (const v of C) try {
            A(v);
          } catch (f) {
            I = I ?? [], f instanceof a ? I = [...I, ...f.errors] : I.push(f);
          }
        }
        if (I) throw new a(I);
      }
    }
    add(I) {
      var O;
      if (I && I !== this) if (this.closed) A(I);else {
        if (I instanceof d) {
          if (I.closed || I._hasParent(this)) return;
          I._addParent(this);
        }
        (this._teardowns = null !== (O = this._teardowns) && void 0 !== O ? O : []).push(I);
      }
    }
    _hasParent(I) {
      const {
        _parentage: O
      } = this;
      return O === I || Array.isArray(O) && O.includes(I);
    }
    _addParent(I) {
      const {
        _parentage: O
      } = this;
      this._parentage = Array.isArray(O) ? (O.push(I), O) : O ? [O, I] : I;
    }
    _removeParent(I) {
      const {
        _parentage: O
      } = this;
      O === I ? this._parentage = null : Array.isArray(O) && (0, m.P)(O, I);
    }
    remove(I) {
      const {
        _teardowns: O
      } = this;
      O && (0, m.P)(O, I), I instanceof d && I._removeParent(this);
    }
  }
  d.EMPTY = (() => {
    const N = new d();
    return N.closed = !0, N;
  })();
  const M = d.EMPTY;
  function b(N) {
    return N instanceof d || N && "closed" in N && (0, t.m)(N.remove) && (0, t.m)(N.add) && (0, t.m)(N.unsubscribe);
  }
  function A(N) {
    (0, t.m)(N) ? N() : N.unsubscribe();
  }
});
