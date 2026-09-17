// Extracted from main; webpack module 31061. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    m: () => a
  });
  var t = i(91415);
  const a = new class e {
    constructor() {
      this._typeMetadatas = new Map(), this._transformMetadatas = new Map(), this._exposeMetadatas = new Map(), this._excludeMetadatas = new Map(), this._ancestorsMap = new Map();
    }
    addTypeMetadata(d) {
      this._typeMetadatas.has(d.target) || this._typeMetadatas.set(d.target, new Map()), this._typeMetadatas.get(d.target).set(d.propertyName, d);
    }
    addTransformMetadata(d) {
      this._transformMetadatas.has(d.target) || this._transformMetadatas.set(d.target, new Map()), this._transformMetadatas.get(d.target).has(d.propertyName) || this._transformMetadatas.get(d.target).set(d.propertyName, []), this._transformMetadatas.get(d.target).get(d.propertyName).push(d);
    }
    addExposeMetadata(d) {
      this._exposeMetadatas.has(d.target) || this._exposeMetadatas.set(d.target, new Map()), this._exposeMetadatas.get(d.target).set(d.propertyName, d);
    }
    addExcludeMetadata(d) {
      this._excludeMetadatas.has(d.target) || this._excludeMetadatas.set(d.target, new Map()), this._excludeMetadatas.get(d.target).set(d.propertyName, d);
    }
    findTransformMetadatas(d, M, b) {
      return this.findMetadatas(this._transformMetadatas, d, M).filter(A => !A.options || !0 === A.options.toClassOnly && !0 === A.options.toPlainOnly || (!0 === A.options.toClassOnly ? b === t.h.CLASS_TO_CLASS || b === t.h.PLAIN_TO_CLASS : !0 !== A.options.toPlainOnly || b === t.h.CLASS_TO_PLAIN));
    }
    findExcludeMetadata(d, M) {
      return this.findMetadata(this._excludeMetadatas, d, M);
    }
    findExposeMetadata(d, M) {
      return this.findMetadata(this._exposeMetadatas, d, M);
    }
    findExposeMetadataByCustomName(d, M) {
      return this.getExposedMetadatas(d).find(b => b.options && b.options.name === M);
    }
    findTypeMetadata(d, M) {
      return this.findMetadata(this._typeMetadatas, d, M);
    }
    getStrategy(d) {
      const M = this._excludeMetadatas.get(d),
        b = M && M.get(void 0),
        A = this._exposeMetadatas.get(d),
        N = A && A.get(void 0);
      return b && N || !b && !N ? "none" : b ? "excludeAll" : "exposeAll";
    }
    getExposedMetadatas(d) {
      return this.getMetadata(this._exposeMetadatas, d);
    }
    getExcludedMetadatas(d) {
      return this.getMetadata(this._excludeMetadatas, d);
    }
    getExposedProperties(d, M) {
      return this.getExposedMetadatas(d).filter(b => !b.options || !0 === b.options.toClassOnly && !0 === b.options.toPlainOnly || (!0 === b.options.toClassOnly ? M === t.h.CLASS_TO_CLASS || M === t.h.PLAIN_TO_CLASS : !0 !== b.options.toPlainOnly || M === t.h.CLASS_TO_PLAIN)).map(b => b.propertyName);
    }
    getExcludedProperties(d, M) {
      return this.getExcludedMetadatas(d).filter(b => !b.options || !0 === b.options.toClassOnly && !0 === b.options.toPlainOnly || (!0 === b.options.toClassOnly ? M === t.h.CLASS_TO_CLASS || M === t.h.PLAIN_TO_CLASS : !0 !== b.options.toPlainOnly || M === t.h.CLASS_TO_PLAIN)).map(b => b.propertyName);
    }
    clear() {
      this._typeMetadatas.clear(), this._exposeMetadatas.clear(), this._excludeMetadatas.clear(), this._ancestorsMap.clear();
    }
    getMetadata(d, M) {
      const b = d.get(M);
      let A;
      b && (A = Array.from(b.values()).filter(I => void 0 !== I.propertyName));
      const N = [];
      for (const I of this.getAncestors(M)) {
        const O = d.get(I);
        if (O) {
          const L = Array.from(O.values()).filter(C => void 0 !== C.propertyName);
          N.push(...L);
        }
      }
      return N.concat(A || []);
    }
    findMetadata(d, M, b) {
      const A = d.get(M);
      if (A) {
        const N = A.get(b);
        if (N) return N;
      }
      for (const N of this.getAncestors(M)) {
        const I = d.get(N);
        if (I) {
          const O = I.get(b);
          if (O) return O;
        }
      }
    }
    findMetadatas(d, M, b) {
      const A = d.get(M);
      let N;
      A && (N = A.get(b));
      const I = [];
      for (const O of this.getAncestors(M)) {
        const L = d.get(O);
        L && L.has(b) && I.push(...L.get(b));
      }
      return I.slice().reverse().concat((N || []).slice().reverse());
    }
    getAncestors(d) {
      if (!d) return [];
      if (!this._ancestorsMap.has(d)) {
        const M = [];
        for (let b = Object.getPrototypeOf(d.prototype.constructor); typeof b.prototype < "u"; b = Object.getPrototypeOf(b.prototype.constructor)) M.push(b);
        this._ancestorsMap.set(d, M);
      }
      return this._ancestorsMap.get(d);
    }
  }();
});
