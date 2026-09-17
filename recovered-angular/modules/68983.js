// Extracted from main; webpack module 68983. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X: () => m
  });
  var t = i(94650),
    e = i(15635),
    a = i(8391);
  let m = (() => {
    class d {
      constructor(b) {
        this.dateAdapter = b;
      }
      dateMin(b) {
        return A => A.value && !this.dateAdapter.isSameDay(A.value, b) && this.dateAdapter.isBefore(A.value, b) ? {
          dateMin: !0
        } : null;
      }
      dateMax(b) {
        return A => A.value && !this.dateAdapter.isSameDay(A.value, b) && this.dateAdapter.isAfter(A.value, b) ? {
          dateMax: !0
        } : null;
      }
      dateIsInvalid() {
        return b => b.value && !this.dateAdapter.isValid(b.value) ? {
          dateIsInvalid: !0
        } : null;
      }
      periodRequired() {
        return b => b.value && (0, e.EN)(b.value.start) && (0, e.EN)(b.value.end) ? null : {
          required: !0
        };
      }
      periodIsValid() {
        return b => {
          const A = b.value;
          return (0, e.EN)(A) && (0, e.EN)(A.start) && (0, e.EN)(A.end) && !this.dateAdapter.isBefore(A.start, A.end) && !this.dateAdapter.isAfter(A.end, A.start) && !this.dateAdapter.isSameDay(A.start, A.end) ? {
            periodIsValid: !0
          } : null;
        };
      }
      periodStartMin(b) {
        return A => {
          const N = A.value;
          return (0, e.EN)(A.value) && (0, e.EN)(N.start) && !this.dateAdapter.isSameDay(N.start, b) && !this.dateAdapter.isAfter(N.start, b) ? {
            periodStartMin: !0
          } : null;
        };
      }
      periodStartMax(b) {
        return A => {
          const N = A.value;
          return (0, e.EN)(N) && (0, e.EN)(N.start) && !this.dateAdapter.isSameDay(N.start, b) && !this.dateAdapter.isBefore(N.start, b) ? {
            periodStartMax: !0
          } : null;
        };
      }
      periodEndMin(b) {
        return A => {
          const N = A.value;
          return (0, e.EN)(N) && (0, e.EN)(N.end) && !this.dateAdapter.isSameDay(N.end, b) && !this.dateAdapter.isAfter(N.end, b) ? {
            periodEndMin: !0
          } : null;
        };
      }
      periodEndMax(b) {
        return A => {
          const N = A.value;
          return (0, e.EN)(N) && (0, e.EN)(N.end) && !this.dateAdapter.isSameDay(N.end, b) && !this.dateAdapter.isBefore(N.end, b) ? {
            periodEndMax: !0
          } : null;
        };
      }
    }
    return d.ɵfac = function (b) {
      return new (b || d)(t.LFG(a.SW));
    }, d.ɵprov = t.Yz7({
      token: d,
      factory: d.ɵfac,
      providedIn: "root"
    }), d;
  })();
});
