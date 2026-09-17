// Extracted from main; webpack module 20385. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    _b: () => M,
    Vp: () => A
  });
  var t = i(56697);
  function e(N) {
    return N;
  }
  class a {
    constructor(I) {
      this.input = I.input, this.location = I.location;
    }
    moveTo(I) {
      return new a({
        input: this.input,
        location: I
      });
    }
    success(I, O) {
      return {
        type: "Success",
        value: O,
        location: this._internal_move(I),
        furthest: {
          index: -1,
          line: -1,
          column: -1
        },
        expected: []
      };
    }
    fail(I, O) {
      return {
        type: "Fail",
        furthest: this._internal_move(I),
        expected: O
      };
    }
    merge(I, O) {
      if (O.furthest.index > I.furthest.index) return O;
      const L = O.furthest.index === I.furthest.index ? (0, t.G)(I.expected, O.expected) : I.expected;
      return "Success" === O.type ? {
        type: "Success",
        location: O.location,
        value: O.value,
        furthest: I.furthest,
        expected: L
      } : {
        type: "Fail",
        furthest: I.furthest,
        expected: L
      };
    }
    _internal_move(I) {
      if (I === this.location.index) return this.location;
      const L = this.input.slice(this.location.index, I);
      let {
        line: C,
        column: v
      } = this.location;
      return L.split("").forEach(f => {
        "\n" === f ? (C++, v = 1) : v++;
      }), {
        index: I,
        line: C,
        column: v
      };
    }
  }
  class M {
    constructor(I) {
      this.action = I;
    }
    parse(I) {
      const L = new a({
          input: I,
          location: {
            index: 0,
            line: 1,
            column: 1
          }
        }),
        C = this.action(L);
      return "Success" === C.type ? {
        success: !0,
        value: C.value
      } : {
        success: !1,
        location: C.furthest,
        expected: C.expected
      };
    }
    pipe(...I) {
      return I.length ? function d(N) {
        return 0 === N.length ? e : 1 === N.length ? N[0] : function (O) {
          return N.reduce((L, C) => C(L), O);
        };
      }(I)(this) : this;
    }
  }
  function A(N) {
    return new M(I => I.success(I.location.index, N));
  }
});
