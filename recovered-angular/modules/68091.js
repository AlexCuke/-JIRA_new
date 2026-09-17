// Extracted from main; webpack module 68091. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    K: () => N
  });
  var t = i(71822),
    e = i(39646),
    a = i(51588);
  function m(I) {
    const O = I.length,
      L = I.findIndex(C => null == C);
    return L > -1 && I.splice(L, 1), O !== I.length ? m(I) : I;
  }
  function d(I, O = 3, L = 0) {
    if (!(L > O)) {
      if (Array.isArray(I)) return m(I), void I.forEach(C => {
        d(I[C], O, L + 1);
      });
      I && "object" == typeof I && Object.keys(I).forEach(C => {
        const v = I[C];
        v && "object" == typeof v && d(v, O, L + 1);
      });
    }
  }
  var M = i(8875),
    b = i(34793),
    A = i(90467);
  let N = (() => {
    class I {
      constructor(L) {
        this.entry = L, this.composition = L.getComposition();
      }
      extractComposition(L) {
        const C = new t.wC(this.composition.getTemplate(), {}).get();
        return L.forEach(v => {
          let f = [];
          new b.a().findBasicTypesRecursive(this.composition.get(v), f), f = f.filter(E => !E.empty()), f.forEach(E => {
            const h = E.getPath().rebase(C.getPath());
            C.getPathElements(h).forEach(T => T.restore()), C.getByPath(h)?.assign(E);
          });
        }), C;
      }
      applyTemplate(L, C) {
        const v = C.content.content?.filter(u => u.templateId === this.composition.getTemplateId())[0];
        if (!v) return (0, e.of)([]);
        const f = new t.wC(this.composition.getTemplate(), v.composition);
        v.assignmentUidPath || d(v), this.entry.setLocalValid(v.valid);
        let E = [];
        L.mode === A.m.Clean && this.composition.clear(), new b.a().findBasicTypesRecursive(f.get(this.composition?.getNode()?.getPath()), E), E = E.filter(u => !u.empty());
        const h = [...Object.values(M.g)].includes(C.code);
        return this.fromBasicTypesHandle({
          fromBasicTypes: E,
          isAssignment: h,
          mode: L.mode,
          assignmentUidPath: v.assignmentUidPath || this.getInfoAssignmentUidPath
        }), (0, e.of)([this.entry]);
      }
      createTemplate(L) {
        const C = this.composition.getTemplate(),
          v = {};
        let f = [];
        new b.a().findBasicTypesRecursive(this.composition, f);
        const E = new t.wC(C, v);
        return f = f.filter(h => {
          const x = h.getPath();
          return !this.composition.getPathElements(x).find(T => T.isDeleted());
        }), f = f.filter(h => !h.empty() && !h.isDeleted()), f.forEach(h => {
          const x = E.getByPath(h.getPath().rebase(this.composition.getPath().toZero()));
          x?.assign(h), x?.save(), x && E.set(x);
        }), d(v), {
          content: {
            content: [{
              key: this.entry.getSettings().code,
              templateId: this.composition.getTemplateId(),
              composition: v,
              assignmentUidPath: this.getInfoAssignmentUidPath,
              valid: this.entry.getLocalValid()
            }],
            designMedicalEntry: this.entry.getMedicalEntry().getSettings().code,
            authorName: this.entry.getComposition().getComposer()?.getValue()?.name ?? ""
          },
          common: L.common,
          code: this.entry.getSettings().code,
          statistics: 0,
          folder: L.folder,
          name: L.name,
          uid: (0, a.Z)(),
          type: I.COMPOSITION
        };
      }
      getSearchCriteria() {
        return {
          code: this.entry.getSettings().code,
          type: I.COMPOSITION
        };
      }
      get getInfoAssignmentUidPath() {
        const L = this.entry.asType("IAssignmentEntry");
        return L?.getAssignmentUidPath ? L.getAssignmentUidPath() : void 0;
      }
      fromBasicTypesHandle({
        fromBasicTypes: L,
        isAssignment: C,
        mode: v,
        assignmentUidPath: f
      }) {
        const E = this.composition.getUid()?.getValue() || (0, a.Z)();
        L.forEach(h => {
          if (f) try {
            h.getPath().getParts().some(B => B.includes("_uid")) && h.getValue() && (h.setValue(E), h.save());
          } catch (R) {
            console.error(R);
          }
          const x = h.getPath().rebase(this.composition.getPath());
          this.composition.getPathElements(x).forEach(R => R.restore());
          const T = this.composition.getByPath(x);
          switch (v) {
            case A.m.FillEmpty:
              T?.empty() && T?.assign(h);
              break;
            case A.m.Replace:
              (!T?.empty() || C || T.empty() && !h.empty()) && T?.assign(h);
              break;
            default:
              T?.assign(h);
          }
        });
      }
    }
    return I.COMPOSITION = "COMPOSITION", I;
  })();
});
