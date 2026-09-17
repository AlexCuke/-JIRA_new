// Extracted from main; webpack module 81290. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    z: () => t
  });
  class t {
    constructor() {
      this.marks = new Map();
    }
    hasMark(a) {
      return this.marks.has(a);
    }
    markAs(a) {
      this.marks.set(a, !0);
    }
    unmark(a) {
      this.marks.delete(a);
    }
    clear() {
      this.marks.clear();
    }
  }
});
