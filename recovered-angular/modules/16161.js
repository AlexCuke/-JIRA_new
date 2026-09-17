// Extracted from main; webpack module 16161. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    l7: () => C,
    sx: () => v
  });
  var L,
    t = i(97582),
    e = i(94650),
    a = i(99246),
    m = i(44348),
    d = i(85273),
    M = i(15635),
    b = i(58435),
    A = i(24006),
    N = i(11848),
    I = i(68483);
  let C = L = class extends m.zH {
    constructor(E, h, x, u, T) {
      super(E, T, u), this.changeDetectorRef = E, this.tree = h, this.compareHost = x, this.ngControl = u, this.controlHost = T, this.compareFn = null, this.isModelNodeFn = () => !0, this.isIndependentChildren = !1, this.isModelState = !1;
    }
    ngAfterContentInit() {
      this.tree?.nodesChanges.pipe((0, b.t)(this)).subscribe(() => {
        const E = new m.Q2(this.compareFunction, this.model);
        this.updateNodesByModel((0, M._2)(this.tree?.nodes), E);
      });
    }
    isChecked(E) {
      const h = this.tree?.nodesMap.get(E)?.isChecked;
      return void 0 !== h && h;
    }
    check(E) {
      this.tree?.nodesMap?.get(E)?.check(!0, this.isIndependentChildren), this.updateModel(this.getModel());
    }
    uncheck(E) {
      this.tree?.nodesMap?.get(E)?.uncheck(!0, this.isIndependentChildren), this.updateModel(this.getModel());
    }
    toggle(E) {
      if (this.tree?.nodesMap?.get(E)?.isChecked ? this.tree?.nodesMap?.get(E)?.uncheck(!0, this.isIndependentChildren) : this.tree?.nodesMap?.get(E)?.check(!0, this.isIndependentChildren), this.isModelState) {
        const h = new Set([...(this.model ? this.model : [])]);
        h.has(E) ? h.delete(E) : h.add(E), this.updateModel((0, M._2)(h.values()));
      } else this.updateModel(this.getModel());
    }
    typedControlChanges() {
      return N.C;
    }
    registerControl() {}
    unregisterControl() {}
    writeValue(E) {
      super.writeValue(E);
      const h = new m.Q2(this.compareFunction, E);
      this.updateNodesByModel((0, M._2)(this.tree?.nodes), h);
    }
    incomingUpdate(E) {
      const h = new m.Q2(this.compareFunction, E);
      this.updateNodesByModel((0, M._2)(this.tree?.nodes), h);
    }
    getModel() {
      return this.modelNodes(this.tree?.nodes ?? []).map(h => this.tree.defineValueFn(h.data));
    }
    modelNodes(E) {
      return E.reduce((h, x) => (this.isModelNodeFn(x.data) && x.isChecked ? h.push(x) : (!this.isModelNodeFn(x.data) && x.isChecked || null === x.isChecked) && h.push(...this.modelNodes((0, M._2)(x.children))), h), []);
    }
    updateNodesByModel(E, h) {
      E.forEach(x => {
        const u = this.tree.defineValueFn(x.data);
        h.has(u) ? x.check(!0) : (x.uncheck(), this.updateNodesByModel((0, M._2)(x.children), h));
      });
    }
    get compareFunction() {
      return this.compareFn ?? this.compareHost?.compareFn ?? d.kX;
    }
  };
  C.ɵfac = function (E) {
    return new (E || C)(e.Y36(e.sBO), e.Y36(I.aV, 1), e.Y36(m.Vg, 8), e.Y36(A.a5, 8), e.Y36(a.fU, 12));
  }, C.ɵdir = e.lG2({
    type: C,
    selectors: [["lu-tree", "luTreeCheckboxAdapter", ""]],
    inputs: {
      compareFn: "compareFn",
      isModelNodeFn: "isModelNodeFn",
      isIndependentChildren: "isIndependentChildren",
      isModelState: "isModelState"
    },
    exportAs: ["luTreeAdapter"],
    features: [e._Bn([{
      provide: a.Ri,
      useValue: class O extends m.H2 {
        constructor(E, h) {
          super(E, h), this.data = E, this.parent = h, this.children = new Set(), this.checked = !1;
        }
        get isChecked() {
          return this.checked;
        }
        check(E, h) {
          this.checked = !0, this.children.forEach(x => x.check()), E && this.parent?.recalculateState(h);
        }
        uncheck(E, h) {
          this.checked = !1, this.children.forEach(x => x.uncheck()), E && this.parent?.recalculateState(h);
        }
        recalculateState(E) {
          const h = (0, M._2)(this.children);
          this.checked = E ? null !== this.checked && null : !!h.every(x => x.isChecked) || !!h.some(x => x.isChecked || null === x.isChecked) && null, this.parent?.recalculateState();
        }
      }
    }, {
      provide: m.RP,
      useExisting: L
    }, {
      provide: a.fU,
      useExisting: L
    }]), e.qOj]
  }), C = L = (0, t.gn)([(0, b.c)()], C);
  let v = (() => {
    class f {}
    return f.ɵfac = function (h) {
      return new (h || f)();
    }, f.ɵmod = e.oAB({
      type: f
    }), f.ɵinj = e.cJS({}), f;
  })();
});
