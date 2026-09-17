// Extracted from main; webpack module 49151. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    I: () => d
  });
  var t = i(15439),
    e = i.n(t),
    a = i(17489);
  class d {
    constructor() {
      this.notModifiedNodes = ["_uid", "_link", "language", "territory", "category", "composer", "context"];
    }
    get composerData() {
      return this.composition.getComposer().getData();
    }
    _splitByIndex(b, A, N = -1) {
      const I = b.split(A);
      return N < 0 || N >= I.length - 1 ? I : [I.slice(0, N + 1).join(A), I.slice(N + 1).join(A)];
    }
    get parsedFromCompositionData() {
      if (!this.composition) throw new Error("Path settings is not set!");
      const b = this.pathsSettingsMap,
        A = {};
      return Object.keys(b).forEach(N => {
        const I = b[N];
        A[N] = {}, Object.keys(I).forEach(O => {
          const L = I[O];
          if (O.includes("[*]")) {
            const C = this._getMultiClusterCompositionData(O, L);
            if (Object.keys(C).length) {
              const v = Object.keys(C)[0];
              A[N][v] = v in A[N] ? A[N][v].map((f, E) => (0, a.merge)({}, f, C[v][E])) : C[v];
            }
          } else if (O.includes(".")) {
            const [C, v] = O.split(".");
            A[N][C][v] = this._getCompositionData(L);
          } else A[N][O] = this._getCompositionData(L);
        });
      }), A;
    }
    _checkMomentFormat(b) {
      return e().isMoment(b) && b.isValid() ? b.toDate() : b;
    }
    _getCompositionData(b) {
      let A;
      const N = this._getMethod(b);
      if ((b.path.match(/[^\.]+(?=\[\*\])/g) || []).length) {
        let O = 0;
        for (A = [];;) {
          const L = this.composition.get(b.path.replace("[*]", `[${O}]`))[N]();
          if (!L) break;
          A.push(this._checkMomentFormat(L)), O += 1;
        }
      } else A = this.composition.get(b.path)[N](), A = this._checkMomentFormat(A);
      return A;
    }
    setInitialValues(b, A) {
      this.owner = A?.owner, this.setCareCaseId(b), this.setTechnicalInfo(), this.composition.save();
    }
    setValues(b, A, N, I) {
      if (!this.pathsSettingsMap) throw new Error("Path settings is not set!");
      N && this.setLink(N);
      const O = this.pathsSettingsMap[A];
      console.log(O, this.pathsSettingsMap, A), console.log(b), this._preparingCompositionFromObject(O, b), this.composition.save();
    }
    clearComposition() {
      const b = this.composition.getData();
      b && Object.keys(b).filter(A => !this.notModifiedNodes.includes(A)).forEach(A => {
        b[A] = [null], this.composition.save();
      });
    }
    logData() {
      console.log(this.composition.getData());
    }
    _setValueTypeSwitcher(b, A, N, I) {
      if (null != I && "" !== I) {
        const O = N.setMethodName ?? "setValue";
        I instanceof Date && (I = I.toISOString()), b.get(A)[O](I), this.composition.save();
      }
    }
    _getNestedData(b, A) {
      return A && b.includes(".") && b.split(".").forEach(N => {
        N && (A = A[N]);
      }), A;
    }
    multiclusterHandler(b, A, N, I, O = "") {
      let [L, C] = this._splitByIndex(b, "[*].", 0);
      const [v, f] = this._splitByIndex(N, "[*].", 0);
      O && (O += "."), L = `${O}${L}`, I.forEach((E, h) => {
        if (C.includes("[*]") && f.includes("[*]")) {
          const x = E[f.split("[*]")[0]];
          if (x && x instanceof Array) {
            const u = `${L}[${h}]`;
            this.multiclusterHandler(C, A, f.split("[*]")[1], x, u);
          }
        } else this._setValueTypeSwitcher(this.composition.get(`${L}[${h}]`), C, A, this._getNestedData(N.includes("[*]") ? N.split("[*]")[1] : N, E));
      });
    }
    _preparingCompositionFromObject(b, A) {
      Object.keys(b).forEach(N => {
        const I = b[N];
        if (I.path.includes("[*]")) {
          const O = N.includes("[*]") ? A?.[this._splitByIndex(N, "[*]", 0)[0]] : A?.[N];
          O && this.multiclusterHandler(I.path, I, N, O);
        } else {
          const O = N.includes("[*]") ? A?.[this._splitByIndex(N, "[*]", 1)[0]] : A?.[N];
          this._setValueTypeSwitcher(this.composition, I.path, I, this._getNestedData(N, O));
        }
      });
    }
    setCareCaseId(b) {
      this.composition.getContext().get("подробности_контекста.ид_события").setIdentifier({
        id: b,
        assigner: "hospital",
        issuer: "hospital",
        type: "medical-entry"
      });
    }
    setTechnicalInfo() {
      this.composition.get("composer").setValue({
        id: "Hospital",
        namespace: "Hospital",
        scheme: "Hospital",
        name: this.owner
      });
    }
    setLink(b) {
      this.composition.addLink().setValue({
        meaning: "Ссылка на протокол",
        type: "EHR",
        target: `ehr:compositions/${b}`
      });
    }
    _getMethod(b) {
      return b.setMethodName ? b.setMethodName.replace("set", "get") : "getValue";
    }
    _getMultiClusterCompositionData(b, A) {
      const N = this._getMethod(A),
        I = A.path.split("."),
        O = b.split(".");
      let L = !1;
      const v = {};
      let f = I.map((E, h) => E.includes("[*]") ? h : -1).filter(E => -1 !== E).map(() => 0);
      for (;;) {
        const E = this._buildKey(I, f),
          h = this.composition.get(E)[N]();
        if (h) {
          if (L || (this._initializeStructure(v, O), L = !0), this._addValueToResult(v, O, f, this._checkMomentFormat(h)), !this._incrementIndices(A, I, f)) break;
        } else if (!this._incrementIndices(A, I, f)) break;
      }
      return v;
    }
    _initializeStructure(b, A) {
      let N = b;
      for (let I = 0; I < A.length; I++) {
        const O = A[I],
          L = O.includes("[*]"),
          C = O.replace(/\[\*\]/g, "");
        I === A.length - 1 ? N[C] || (N[C] = "") : L ? (N[C] || (N[C] = []), 0 === N[C].length && N[C].push({}), N = N[C][0]) : (N[C] || (N[C] = {}), N = N[C]);
      }
    }
    _buildKey(b, A) {
      const N = [...b];
      let I = 0;
      for (let O = 0; O < N.length; O++) N[O].includes("[*]") && (N[O] = N[O].replace("[*]", `[${A[I]}]`), I++);
      return N.join(".");
    }
    _addValueToResult(b, A, N, I) {
      let O = 0;
      for (let L = 0; L < A.length; L++) {
        const C = A[L],
          v = C.includes("[*]"),
          f = C.replace(/\[\*\]/g, "");
        if (L === A.length - 1) b[f] = I;else if (v) {
          const E = N[O];
          for (O++, b[f] || (b[f] = [{}]); b[f].length <= E;) b[f].push({});
          b = b[f][E];
        } else b = b[f];
      }
    }
    _incrementIndices(b, A, N) {
      for (let I = N.length - 1; I >= 0; I--) {
        N[I]++;
        const O = this._buildKey(A, N);
        if (this.composition.get(O)[this._getMethod(b)]()) return !0;
        N[I] = 0;
      }
      return !1;
    }
  }
});
