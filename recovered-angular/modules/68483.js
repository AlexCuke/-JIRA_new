// Extracted from main; webpack module 68483. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    KE: () => Rt,
    QZ: () => qe,
    aV: () => Se
  });
  var t = i(97582),
    e = i(94650),
    a = i(85273),
    m = i(34304),
    d = i(58435),
    M = i(36895),
    b = i(89740),
    A = i(15635),
    N = i(44348),
    I = i(1371),
    O = i(99246),
    L = i(77579),
    C = i(54968),
    v = i(59468),
    f = i(54004),
    E = i(95698),
    h = i(81173),
    x = i(99691),
    u = i(24098);
  function T(We, Re) {
    if (1 & We) {
      const st = e.EpF();
      e.TgZ(0, "div", 1), e.NdJ("mouseenter", function () {
        e.CHM(st);
        const mt = e.oxw();
        return e.KtG(mt.mouseEnterEvent());
      })("mouseleave", function () {
        e.CHM(st);
        const mt = e.oxw();
        return e.KtG(mt.mouseLeaveEvent());
      })("click", function () {
        e.CHM(st);
        const mt = e.oxw();
        return e.KtG(mt.clickEvent());
      }), e.O4$(), e.TgZ(1, "svg", 2), e._UZ(2, "rect", 3), e.qZA()();
    }
  }
  function R(We, Re) {
    if (1 & We && e._UZ(0, "lu-node-indent", 1), 2 & We) {
      const st = Re.$implicit,
        q = e.oxw();
      e.Q6J("node", st)("line", q.tree.indentLines);
    }
  }
  const B = ["*"];
  function y(We, Re) {
    if (1 & We && e._UZ(0, "lu-tree-node-indent", 2), 2 & We) {
      const st = e.oxw();
      e.Q6J("node", null == st.node ? null : st.node.data);
    }
  }
  function j(We, Re) {
    if (1 & We && (e.ynx(0), e._uU(1), e.BQk()), 2 & We) {
      const st = Re.polymorpheusOutlet;
      e.xp6(1), e.Oqu(st);
    }
  }
  function W(We, Re) {
    if (1 & We && (e.ynx(0), e._uU(1), e.BQk()), 2 & We) {
      const st = Re.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", st, " ");
    }
  }
  function F(We, Re) {
    if (1 & We && (e.ynx(0), e.YNc(1, W, 2, 1, "ng-container", 4), e.BQk()), 2 & We) {
      const st = e.oxw();
      e.xp6(1), e.Q6J("polymorpheusOutlet", st.emptyContent);
    }
  }
  function Le(We, Re) {
    1 & We && e.GkF(0);
  }
  function ke(We, Re) {
    if (1 & We && e.YNc(0, Le, 1, 0, "ng-container", 5), 2 & We) {
      const st = e.oxw(),
        q = e.MAs(7),
        mt = e.MAs(5);
      e.Q6J("ngIf", st.virtualScroll)("ngIfThen", q)("ngIfElse", mt);
    }
  }
  function J(We, Re) {
    if (1 & We && (e.ynx(0), e._UZ(1, "lu-tree-node", 7), e.BQk()), 2 & We) {
      const st = Re.$implicit,
        q = e.oxw(2);
      e.xp6(1), e.Q6J("@treeNodeMotion", void 0)("nodeContent", q.nodeContent)("node", st)("indents", q.indents)("displayValueFn", q.displayValueFn), e.uIk("data-test-role-id", q.generateId(st.data))("data-test-role-parent-id", q.generateId(st.parent ? st.parent.data : st.data));
    }
  }
  function fe(We, Re) {
    if (1 & We && e.YNc(0, J, 2, 7, "ng-container", 6), 2 & We) {
      const st = e.oxw();
      e.Q6J("ngForOf", st.flatNodes)("ngForTrackBy", st.trackByFn);
    }
  }
  function ye(We, Re) {
    if (1 & We && (e.ynx(0), e._UZ(1, "lu-tree-node", 7), e.BQk()), 2 & We) {
      const st = Re.$implicit,
        q = e.oxw(2);
      e.xp6(1), e.Q6J("nodeContent", q.nodeContent)("node", st)("indents", q.indents)("displayValueFn", q.displayValueFn), e.uIk("data-test-role-id", q.generateId(st.data))("data-test-role-parent-id", q.generateId(st.parent ? st.parent.data : st.data));
    }
  }
  function ae(We, Re) {
    if (1 & We && (e.TgZ(0, "cdk-virtual-scroll-viewport", 8), e.YNc(1, ye, 2, 6, "ng-container", 9), e.qZA()), 2 & We) {
      const st = e.oxw();
      e.Q6J("itemSize", st.itemSize), e.xp6(1), e.Q6J("cdkVirtualForOf", st.flatNodes)("cdkVirtualForTemplateCacheSize", 0)("cdkVirtualForTrackBy", st.trackByFn);
    }
  }
  const Y = new e.OlP("LU_TREE");
  let G = (() => {
      class We {
        constructor(st, q) {
          this.changeDetectorRef = st, this.tree = q, this.node = null, this.line = !1, this.hoverChanged = () => {
            this.changeDetectorRef.markForCheck();
          };
        }
        ngOnInit() {
          this.line && (this.hoverChanged = this.hoverChanged.bind(this), this.node?.registerHoverChanged(this.hoverChanged));
        }
        get isHovered() {
          return !!this.node?.isHovered;
        }
        mouseEnterEvent() {
          this.node?.hover();
        }
        mouseLeaveEvent() {
          this.node?.blur();
        }
        clickEvent() {
          this.node && this.line && this.tree.toggle(this.node.data);
        }
        ngOnDestroy() {
          this.node?.unregisterHoverChanged(this.hoverChanged);
        }
      }
      return We.ɵfac = function (st) {
        return new (st || We)(e.Y36(e.sBO), e.Y36(Y));
      }, We.ɵcmp = e.Xpm({
        type: We,
        selectors: [["lu-node-indent"]],
        hostVars: 2,
        hostBindings: function (st, q) {
          2 & st && e.uIk("data-lu-lines", q.line)("data-lu-hovered", q.isHovered);
        },
        inputs: {
          node: "node",
          line: "line"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "lu-indent-line", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "lu-indent-line", 3, "mouseenter", "mouseleave", "click"], ["width", "100%", "height", "100%", "xmlns", "http://www.w3.org/2000/svg"], ["width", "100%", "height", "100%", 2, "fill", "none", "stroke", "var(--lu-tree-indent-color)", "stroke-width", "4", "stroke-dasharray", "3 3"]],
        template: function (st, q) {
          1 & st && e.YNc(0, T, 3, 0, "div", 0), 2 & st && e.Q6J("ngIf", q.line);
        },
        dependencies: [M.O5],
        styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;flex-shrink:0;width:var(--lu-tree-node-indent)}[data-lu-lines=true][_nghost-%COMP%]{cursor:pointer}[data-lu-lines=true][_nghost-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;content:\"\";top:0;right:calc(var(--lu-tree-node-indent) / 2);bottom:0;width:1px}[data-lu-hovered=true][_nghost-%COMP%]{--lu-tree-indent-color: var(--lu-tree-indent-hover-color)}.lu-indent-line[_ngcontent-%COMP%]{width:100%;height:100%}"],
        changeDetection: 0
      }), We;
    })(),
    te = (() => {
      class We {
        constructor(st) {
          this.tree = st, this.node = null;
        }
        getIndents(st) {
          return st ? (0, A._2)(this.tree.nodesMap.get(st)?.parents.reverse()) : [];
        }
      }
      return We.ɵfac = function (st) {
        return new (st || We)(e.Y36(Y));
      }, We.ɵcmp = e.Xpm({
        type: We,
        selectors: [["lu-tree-node-indent"]],
        inputs: {
          node: "node"
        },
        ngContentSelectors: B,
        decls: 2,
        vars: 1,
        consts: [[3, "node", "line", 4, "ngFor", "ngForOf"], [3, "node", "line"]],
        template: function (st, q) {
          1 & st && (e.F$t(), e.YNc(0, R, 1, 2, "lu-node-indent", 0), e.Hsn(1)), 2 & st && e.Q6J("ngForOf", q.getIndents(q.node));
        },
        dependencies: [M.sg, G],
        styles: ["[_nghost-%COMP%]{display:inline-flex}"],
        changeDetection: 0
      }), (0, t.gn)([m.J], We.prototype, "getIndents", null), We;
    })(),
    pe = (() => {
      let We = class {
        constructor() {
          this.node = null, this.nodeContent = ({
            $implicit: st
          }) => this.displayValueFn(st), this.displayValueFn = a.BW, this.indents = !0;
        }
        getContext(st) {
          return st && this.displayValueFn !== a.BW && "object" == typeof st && (Object.isFrozen(st) || (st.toString = () => this.displayValueFn(st))), {
            $implicit: st
          };
        }
        getIndents(st) {
          return new Array(st?.level || 0).fill(null).map(() => !0);
        }
      };
      return We.ɵfac = function (st) {
        return new (st || We)();
      }, We.ɵcmp = e.Xpm({
        type: We,
        selectors: [["lu-tree-node"]],
        inputs: {
          node: "node",
          nodeContent: "nodeContent",
          displayValueFn: "displayValueFn",
          indents: "indents"
        },
        decls: 2,
        vars: 3,
        consts: [[3, "node", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "node"]],
        template: function (st, q) {
          1 & st && (e.YNc(0, y, 1, 1, "lu-tree-node-indent", 0), e.YNc(1, j, 2, 1, "ng-container", 1)), 2 & st && (e.Q6J("ngIf", q.indents), e.xp6(1), e.Q6J("polymorpheusOutlet", q.nodeContent)("polymorpheusOutletContext", q.getContext(null == q.node ? null : q.node.data)));
        },
        dependencies: [M.O5, b.Li, te],
        styles: ["[_nghost-%COMP%]{display:flex}"],
        changeDetection: 0
      }), (0, t.gn)([m.J], We.prototype, "getContext", null), (0, t.gn)([m.J], We.prototype, "getIndents", null), We = (0, t.gn)([(0, d.c)()], We), We;
    })();
  function be(We, Re, st, q) {
    const mt = [];
    return (0, A._2)(We).forEach(ut => {
      const Ct = (0, A._2)(Re(ut)),
        Ft = new st(ut, q);
      mt.push(Ft), (0, A.kJ)(Ct) && be(Ct, Re, st, Ft);
    }), mt;
  }
  function le(We, Re) {
    return We.reduce((st, q) => ((!q.isHidden || Re) && st.push(q), (q.isExpanded || Re) && st.push(...le((0, A._2)(q.children), Re)), st), []);
  }
  var n;
  let Se = n = class {
    constructor(Re, st, q) {
      this.changeDetectorRef = Re, this.elementRef = st, this.treeNodeConstructor = q, this.nodes = a.LZ, this.searchText = "", this.filterBySearchTxt = !1, this.filterMinSymbols = 0, this.searchThrottleTime = 200, this.displayValueFn = a.BW, this.trackByFn = (mt, ut) => ut.data, this.nodeContent = ({
        $implicit: mt
      }) => (0, a.ll)(mt), this.indents = !0, this.expanded = !1, this.collapsible = !1, this.indentLines = !1, this.defineValueFn = a.F6, this.virtualScroll = !1, this.itemSize = null, this.emptyContent = "", this.treeScroll = new e.vpe(), this.listItems = a.Mm, this.dataTestRole = "tree", this.flatNodes = a.LZ, this.nodesMap = new Map(), this.nodesChanges = new L.x(), this.searchChangesSubject = new L.x(), this.searchChangesSubject.pipe((0, v.p)(this.searchThrottleTime)).subscribe(mt => {
        const ut = new h.k();
        this.nodes = ut.transform([...this.nodes], mt), this.rebuildNodes(this.nodes);
      });
    }
    ngOnInit() {
      (0, C.R)(this.elementRef.nativeElement, "scroll").pipe((0, d.t)(this), (0, f.U)(Re => Re.target)).subscribe(Re => {
        this.treeScroll.emit(Re.scrollHeight - Re.scrollTop - Re.clientHeight);
      });
    }
    ngOnChanges({
      nodes: Re,
      searchText: st
    }) {
      this.filterBySearchTxt && st && st?.currentValue && st.currentValue?.length >= this.filterMinSymbols && st?.currentValue !== st.previousValue && this.searchChangesSubject.next(st?.currentValue), Re && this.rebuildNodes(this.nodes);
    }
    expandAll() {
      this.flatNodes.forEach(Re => Re.expandAll()), this.refreshViewNodes();
    }
    collapseAll() {
      this.collapsible || (this.flatNodes.forEach(Re => Re.collapseAll()), this.refreshViewNodes());
    }
    sortTree(Re) {
      this.rebuildNodes(Re), this.refreshViewNodes();
    }
    isExpanded(Re) {
      return !!this.nodesMap.get(Re)?.isExpanded;
    }
    expand(Re) {
      Re && (this.nodesMap.get(Re)?.expand(), this.refreshViewNodes());
    }
    collapse(Re) {
      this.collapsible || (this.nodesMap.get(Re)?.collapse(), this.refreshViewNodes());
    }
    toggle(Re) {
      this.collapsible || (this.nodesMap.get(Re)?.toggle(), this.refreshViewNodes());
    }
    expandHovered() {
      const Re = this.flatNodes.find(st => st.isHovered);
      Re && (Re.expand(), this.refreshViewNodes());
    }
    collapseHovered() {
      this.collapsible || (this.flatNodes.find(Re => Re.isHovered)?.collapse(), this.refreshViewNodes());
    }
    hover(Re) {
      this.nodesMap.get(Re)?.hover();
    }
    blur(Re) {
      this.nodesMap.get(Re)?.blur();
    }
    addChildren(Re, st) {
      const q = this.nodesMap.get(Re);
      q && (st.forEach(mt => new (this.treeNodeConstructor ?? N.H2)(mt, q)), this.rebuildNodes(this.nodes));
    }
    addChildrenBefore(Re, st) {
      const q = this.nodesMap.get(Re);
      q && (st.forEach(mt => new (this.treeNodeConstructor ?? N.H2)(mt, q, !0)), this.rebuildNodes(this.nodes)), this.refreshViewNodes();
    }
    getNodes() {
      return this.nodes;
    }
    getItems() {
      return (0, A._2)(this.nodesMap.values()).map(Re => this.defineValueFn(Re.data));
    }
    getFlatIndex(Re) {
      return this.nodesMap.get(Re) ? this.flatNodes.indexOf(this.nodesMap.get(Re)) : -1;
    }
    scrollToIndex(Re) {
      const st = (0, A._2)(this.nodesMap.values())[Re],
        q = this.flatNodes.findIndex(mt => mt === st);
      if (this.expand(st.data), q > -1) {
        const mt = this.listItems.toArray()[q];
        mt && (0, A.Nj)(mt.listItemOrigin).scrollIntoView();
      } else this.listItems.changes.pipe((0, E.q)(1)).subscribe(() => {
        const mt = this.listItems.toArray().find(ut => ut.isSelected);
        mt && (0, A.Nj)(mt.listItemOrigin).scrollIntoView();
      }), this.changeDetectorRef.detectChanges();
    }
    rebuildNodes(Re) {
      this.nodesMap = new Map(le(Re, !0).map(st => [st.data, st])), this.flatNodes = le(Re), this.expanded && this.expandAll(), this.nodesChanges.next();
    }
    refreshViewNodes() {
      this.flatNodes = le(this.nodes), this.changeDetectorRef.markForCheck();
    }
    generateId(Re) {
      return Re ? String(Re.id ? Re.id : Re.code ? Re.code : Re.toString()).split("").reduce((st, q) => Math.imul(31, st) + q.charCodeAt(0) | 0, 0) : "";
    }
  };
  Se.ɵfac = function (Re) {
    return new (Re || Se)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(O.Ri, 8));
  }, Se.ɵcmp = e.Xpm({
    type: Se,
    selectors: [["lu-tree"]],
    contentQueries: function (Re, st, q) {
      if (1 & Re && e.Suo(q, N.qE, 5), 2 & Re) {
        let mt;
        e.iGM(mt = e.CRH()) && (st.listItems = mt);
      }
    },
    hostVars: 2,
    hostBindings: function (Re, st) {
      2 & Re && (e.uIk("data-test-role", st.dataTestRole), e.d8E("@preventInitialChild", st.preventInitialChild));
    },
    inputs: {
      nodes: "nodes",
      searchText: "searchText",
      filterBySearchTxt: "filterBySearchTxt",
      filterMinSymbols: "filterMinSymbols",
      searchThrottleTime: "searchThrottleTime",
      displayValueFn: "displayValueFn",
      trackByFn: "trackByFn",
      nodeContent: "nodeContent",
      indents: "indents",
      expanded: "expanded",
      collapsible: "collapsible",
      indentLines: "indentLines",
      defineValueFn: "defineValueFn",
      virtualScroll: "virtualScroll",
      itemSize: "itemSize",
      emptyContent: "emptyContent"
    },
    outputs: {
      treeScroll: "treeScroll"
    },
    features: [e._Bn([{
      provide: N.Qu,
      useExisting: n
    }, {
      provide: N.pc,
      useExisting: n
    }, {
      provide: Y,
      useExisting: n
    }]), e.TTD],
    decls: 8,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["defaultContent", ""], ["treeSimple", ""], ["treeVirtual", ""], [4, "polymorpheusOutlet"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-test-role", "treeNode", 3, "nodeContent", "node", "indents", "displayValueFn"], ["autosize", "", 2, "height", "100%", 3, "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize", "cdkVirtualForTrackBy"]],
    template: function (Re, st) {
      if (1 & Re && (e.TgZ(0, "lu-list"), e.YNc(1, F, 2, 1, "ng-container", 0), e.qZA(), e.YNc(2, ke, 1, 3, "ng-template", null, 1, e.W1O), e.YNc(4, fe, 1, 2, "ng-template", null, 2, e.W1O), e.YNc(6, ae, 2, 4, "ng-template", null, 3, e.W1O)), 2 & Re) {
        const q = e.MAs(3);
        e.xp6(1), e.Q6J("ngIf", !st.flatNodes.length && st.emptyContent)("ngIfElse", q);
      }
    },
    dependencies: [M.sg, M.O5, b.Li, x.e, u.xd, u.x0, u.N7, pe],
    styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;max-height:var(--lu-list-size)}[virtualscroll=true][_nghost-%COMP%]   lu-list[_ngcontent-%COMP%]{height:100%}[virtualscroll=true][_nghost-%COMP%]   lu-list[_ngcontent-%COMP%]    >div{height:100%}"],
    data: {
      animation: [I.tI, I.E_]
    },
    changeDetection: 0
  }), (0, t.gn)([m.J], Se.prototype, "generateId", null), Se = n = (0, t.gn)([(0, d.c)()], Se);
  let qe = (() => {
      class We {
        constructor(st) {
          this.treeNodeConstructor = st;
        }
        transform(st, q, mt) {
          return this.transformNodes(st, q, mt);
        }
        transformNodes(st, q, mt) {
          return be(st, q, this.treeNodeConstructor ?? N.H2, mt);
        }
      }
      return We.ɵfac = function (st) {
        return new (st || We)(e.Y36(O.Ri, 24));
      }, We.ɵpipe = e.Yjl({
        name: "luTreeNodes",
        type: We,
        pure: !1
      }), (0, t.gn)([m.J], We.prototype, "transformNodes", null), We;
    })(),
    Rt = (() => {
      class We {}
      return We.ɵfac = function (st) {
        return new (st || We)();
      }, We.ɵmod = e.oAB({
        type: We
      }), We.ɵinj = e.cJS({
        imports: [M.ez, b.wq, x.l, u.Cl]
      }), We;
    })();
});
