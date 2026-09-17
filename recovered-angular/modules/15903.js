// Extracted from main; webpack module 15903. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    GI: () => Js,
    uh: () => ho,
    qX: () => hn,
    vI: () => _r,
    x_: () => Ko,
    S1: () => Ts,
    Pl: () => js,
    nD: () => ma,
    yS: () => Ks,
    Ep: () => Fn,
    QQ: () => ci,
    eX: () => xo,
    EC: () => _n,
    C3: () => Gi,
    hO: () => No,
    Ej: () => At,
    N9: () => Kt,
    wE: () => sa,
    Nl: () => Xs,
    ac: () => sc,
    U$: () => nt,
    nP: () => xl,
    LD: () => Ec,
    Xx: () => Ed,
    LC: () => Zl,
    yr: () => gp,
    Vz: () => kn,
    nE: () => nn,
    bk: () => Jn,
    $f: () => Do,
    Xo: () => En,
    W8: () => Kn,
    Jv: () => ul,
    lF: () => ja
  });
  var t = i(94650),
    e = i(59250),
    a = i(93278),
    m = i(32643),
    d = i(71298),
    M = i(9073),
    b = i(81207),
    A = i(13207),
    N = i(70823),
    I = i(87545),
    O = i(12168),
    L = i(40865),
    C = i(36895),
    v = i(84464),
    f = i(32428),
    E = i(80668),
    h = i(54968),
    x = i(77579),
    u = i(61135),
    T = i(78372),
    R = i(68675),
    B = i(54004),
    y = i(71884),
    j = i(82722),
    W = i(18505),
    F = i(34782),
    Le = i(84080),
    ke = i(20733),
    J = i(24280),
    fe = i(37340),
    ye = i(40445),
    ae = i(21281),
    Y = i(95017),
    G = i(83353),
    te = i(24098),
    pe = i(80188),
    be = i(45191),
    le = i(39646),
    n = i(95698);
  const Se = [[["caption"]], [["colgroup"], ["col"]]],
    qe = ["caption", "colgroup, col"];
  function Re(we) {
    return class extends we {
      get sticky() {
        return this._sticky;
      }
      set sticky(Bt) {
        const ve = this._sticky;
        this._sticky = (0, ae.Ig)(Bt), this._hasStickyChanged = ve !== this._sticky;
      }
      hasStickyChanged() {
        const Bt = this._hasStickyChanged;
        return this._hasStickyChanged = !1, Bt;
      }
      resetStickyChanged() {
        this._hasStickyChanged = !1;
      }
      constructor(...Bt) {
        super(...Bt), this._sticky = !1, this._hasStickyChanged = !1;
      }
    };
  }
  const st = new t.OlP("CDK_TABLE");
  let mt = (() => {
      class we {
        constructor(ve) {
          this.template = ve;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkCellDef", ""]]
      }), we;
    })(),
    ut = (() => {
      class we {
        constructor(ve) {
          this.template = ve;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkHeaderCellDef", ""]]
      }), we;
    })(),
    Ct = (() => {
      class we {
        constructor(ve) {
          this.template = ve;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkFooterCellDef", ""]]
      }), we;
    })();
  class Ft {}
  const Et = Re(Ft);
  let Ue = (() => {
    class we extends Et {
      get name() {
        return this._name;
      }
      set name(ve) {
        this._setNameInput(ve);
      }
      get stickyEnd() {
        return this._stickyEnd;
      }
      set stickyEnd(ve) {
        const yt = this._stickyEnd;
        this._stickyEnd = (0, ae.Ig)(ve), this._hasStickyChanged = yt !== this._stickyEnd;
      }
      constructor(ve) {
        super(), this._table = ve, this._stickyEnd = !1;
      }
      _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
      }
      _setNameInput(ve) {
        ve && (this._name = ve, this.cssClassFriendlyName = ve.replace(/[^a-z0-9_-]/gi, "-"), this._updateColumnCssClassName());
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)(t.Y36(st, 8));
    }, we.ɵdir = t.lG2({
      type: we,
      selectors: [["", "cdkColumnDef", ""]],
      contentQueries: function (ve, yt, An) {
        if (1 & ve && (t.Suo(An, mt, 5), t.Suo(An, ut, 5), t.Suo(An, Ct, 5)), 2 & ve) {
          let Un;
          t.iGM(Un = t.CRH()) && (yt.cell = Un.first), t.iGM(Un = t.CRH()) && (yt.headerCell = Un.first), t.iGM(Un = t.CRH()) && (yt.footerCell = Un.first);
        }
      },
      inputs: {
        sticky: "sticky",
        name: ["cdkColumnDef", "name"],
        stickyEnd: "stickyEnd"
      },
      features: [t._Bn([{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: we
      }]), t.qOj]
    }), we;
  })();
  class Me {
    constructor(Bt, ve) {
      ve.nativeElement.classList.add(...Bt._columnCssClassName);
    }
  }
  let Ke = (() => {
      class we extends Me {
        constructor(ve, yt) {
          super(ve, yt);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Ue), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [t.qOj]
      }), we;
    })(),
    Ze = (() => {
      class we extends Me {
        constructor(ve, yt) {
          if (super(ve, yt), 1 === ve._table?._elementRef.nativeElement.nodeType) {
            const An = ve._table._elementRef.nativeElement.getAttribute("role");
            yt.nativeElement.setAttribute("role", "grid" === An || "treegrid" === An ? "gridcell" : "cell");
          }
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Ue), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: [1, "cdk-footer-cell"],
        features: [t.qOj]
      }), we;
    })(),
    Ee = (() => {
      class we extends Me {
        constructor(ve, yt) {
          if (super(ve, yt), 1 === ve._table?._elementRef.nativeElement.nodeType) {
            const An = ve._table._elementRef.nativeElement.getAttribute("role");
            yt.nativeElement.setAttribute("role", "grid" === An || "treegrid" === An ? "gridcell" : "cell");
          }
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Ue), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: [1, "cdk-cell"],
        features: [t.qOj]
      }), we;
    })();
  class je {
    constructor() {
      this.tasks = [], this.endTasks = [];
    }
  }
  const Mt = new t.OlP("_COALESCED_STYLE_SCHEDULER");
  let Je = (() => {
      class we {
        constructor(ve) {
          this._ngZone = ve, this._currentSchedule = null, this._destroyed = new x.x();
        }
        schedule(ve) {
          this._createScheduleIfNeeded(), this._currentSchedule.tasks.push(ve);
        }
        scheduleEnd(ve) {
          this._createScheduleIfNeeded(), this._currentSchedule.endTasks.push(ve);
        }
        ngOnDestroy() {
          this._destroyed.next(), this._destroyed.complete();
        }
        _createScheduleIfNeeded() {
          this._currentSchedule || (this._currentSchedule = new je(), this._getScheduleObservable().pipe((0, j.R)(this._destroyed)).subscribe(() => {
            for (; this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length;) {
              const ve = this._currentSchedule;
              this._currentSchedule = new je();
              for (const yt of ve.tasks) yt();
              for (const yt of ve.endTasks) yt();
            }
            this._currentSchedule = null;
          }));
        }
        _getScheduleObservable() {
          return this._ngZone.isStable ? (0, pe.D)(Promise.resolve(void 0)) : this._ngZone.onStable.pipe((0, n.q)(1));
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.LFG(t.R0b));
      }, we.ɵprov = t.Yz7({
        token: we,
        factory: we.ɵfac
      }), we;
    })(),
    Nn = (() => {
      class we {
        constructor(ve, yt) {
          this.template = ve, this._differs = yt;
        }
        ngOnChanges(ve) {
          if (!this._columnsDiffer) {
            const yt = ve.columns && ve.columns.currentValue || [];
            this._columnsDiffer = this._differs.find(yt).create(), this._columnsDiffer.diff(yt);
          }
        }
        getColumnsDiff() {
          return this._columnsDiffer.diff(this.columns);
        }
        extractCellTemplate(ve) {
          return this instanceof yi ? ve.headerCell.template : this instanceof fr ? ve.footerCell.template : ve.cell.template;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.ZZ4));
      }, we.ɵdir = t.lG2({
        type: we,
        features: [t.TTD]
      }), we;
    })();
  class Pi extends Nn {}
  const Ii = Re(Pi);
  let yi = (() => {
    class we extends Ii {
      constructor(ve, yt, An) {
        super(ve, yt), this._table = An;
      }
      ngOnChanges(ve) {
        super.ngOnChanges(ve);
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.ZZ4), t.Y36(st, 8));
    }, we.ɵdir = t.lG2({
      type: we,
      selectors: [["", "cdkHeaderRowDef", ""]],
      inputs: {
        columns: ["cdkHeaderRowDef", "columns"],
        sticky: ["cdkHeaderRowDefSticky", "sticky"]
      },
      features: [t.qOj, t.TTD]
    }), we;
  })();
  class co extends Nn {}
  const Jo = Re(co);
  let fr = (() => {
      class we extends Jo {
        constructor(ve, yt, An) {
          super(ve, yt), this._table = An;
        }
        ngOnChanges(ve) {
          super.ngOnChanges(ve);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.ZZ4), t.Y36(st, 8));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: ["cdkFooterRowDef", "columns"],
          sticky: ["cdkFooterRowDefSticky", "sticky"]
        },
        features: [t.qOj, t.TTD]
      }), we;
    })(),
    pt = (() => {
      class we extends Nn {
        constructor(ve, yt, An) {
          super(ve, yt), this._table = An;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.ZZ4), t.Y36(st, 8));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: ["cdkRowDefColumns", "columns"],
          when: ["cdkRowDefWhen", "when"]
        },
        features: [t.qOj]
      }), we;
    })(),
    Dt = (() => {
      class we {
        constructor(ve) {
          this._viewContainer = ve, we.mostRecentCellOutlet = this;
        }
        ngOnDestroy() {
          we.mostRecentCellOutlet === this && (we.mostRecentCellOutlet = null);
        }
      }
      return we.mostRecentCellOutlet = null, we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.s_b));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "cdkCellOutlet", ""]]
      }), we;
    })(),
    Ht = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (ve, yt) {
          1 & ve && t.GkF(0, 0);
        },
        dependencies: [Dt],
        encapsulation: 2
      }), we;
    })(),
    Dn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (ve, yt) {
          1 & ve && t.GkF(0, 0);
        },
        dependencies: [Dt],
        encapsulation: 2
      }), we;
    })(),
    vt = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function (ve, yt) {
          1 & ve && t.GkF(0, 0);
        },
        dependencies: [Dt],
        encapsulation: 2
      }), we;
    })(),
    an = (() => {
      class we {
        constructor(ve) {
          this.templateRef = ve, this._contentClassName = "cdk-no-data-row";
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
      }), we;
    })();
  const li = ["top", "bottom", "left", "right"];
  class zn {
    constructor(Bt, ve, yt, An, Un = !0, tr = !0, Gr) {
      this._isNativeHtmlTable = Bt, this._stickCellCss = ve, this.direction = yt, this._coalescedStyleScheduler = An, this._isBrowser = Un, this._needsPositionStickyOnElement = tr, this._positionListener = Gr, this._cachedCellWidths = [], this._borderCellCss = {
        top: `${ve}-border-elem-top`,
        bottom: `${ve}-border-elem-bottom`,
        left: `${ve}-border-elem-left`,
        right: `${ve}-border-elem-right`
      };
    }
    clearStickyPositioning(Bt, ve) {
      const yt = [];
      for (const An of Bt) if (An.nodeType === An.ELEMENT_NODE) {
        yt.push(An);
        for (let Un = 0; Un < An.children.length; Un++) yt.push(An.children[Un]);
      }
      this._coalescedStyleScheduler.schedule(() => {
        for (const An of yt) this._removeStickyStyle(An, ve);
      });
    }
    updateStickyColumns(Bt, ve, yt, An = !0) {
      if (!Bt.length || !this._isBrowser || !ve.some(Gs => Gs) && !yt.some(Gs => Gs)) return void (this._positionListener && (this._positionListener.stickyColumnsUpdated({
        sizes: []
      }), this._positionListener.stickyEndColumnsUpdated({
        sizes: []
      })));
      const Un = Bt[0],
        tr = Un.children.length,
        Gr = this._getCellWidths(Un, An),
        Vo = this._getStickyStartColumnPositions(Gr, ve),
        ta = this._getStickyEndColumnPositions(Gr, yt),
        za = ve.lastIndexOf(!0),
        cs = yt.indexOf(!0);
      this._coalescedStyleScheduler.schedule(() => {
        const Gs = "rtl" === this.direction,
          du = Gs ? "right" : "left",
          Ic = Gs ? "left" : "right";
        for (const Yu of Bt) for (let Dc = 0; Dc < tr; Dc++) {
          const ou = Yu.children[Dc];
          ve[Dc] && this._addStickyStyle(ou, du, Vo[Dc], Dc === za), yt[Dc] && this._addStickyStyle(ou, Ic, ta[Dc], Dc === cs);
        }
        this._positionListener && (this._positionListener.stickyColumnsUpdated({
          sizes: -1 === za ? [] : Gr.slice(0, za + 1).map((Yu, Dc) => ve[Dc] ? Yu : null)
        }), this._positionListener.stickyEndColumnsUpdated({
          sizes: -1 === cs ? [] : Gr.slice(cs).map((Yu, Dc) => yt[Dc + cs] ? Yu : null).reverse()
        }));
      });
    }
    stickRows(Bt, ve, yt) {
      if (!this._isBrowser) return;
      const An = "bottom" === yt ? Bt.slice().reverse() : Bt,
        Un = "bottom" === yt ? ve.slice().reverse() : ve,
        tr = [],
        Gr = [],
        Vo = [];
      for (let za = 0, cs = 0; za < An.length; za++) {
        if (!Un[za]) continue;
        tr[za] = cs;
        const Gs = An[za];
        Vo[za] = this._isNativeHtmlTable ? Array.from(Gs.children) : [Gs];
        const du = Gs.getBoundingClientRect().height;
        cs += du, Gr[za] = du;
      }
      const ta = Un.lastIndexOf(!0);
      this._coalescedStyleScheduler.schedule(() => {
        for (let za = 0; za < An.length; za++) {
          if (!Un[za]) continue;
          const cs = tr[za],
            Gs = za === ta;
          for (const du of Vo[za]) this._addStickyStyle(du, yt, cs, Gs);
        }
        "top" === yt ? this._positionListener?.stickyHeaderRowsUpdated({
          sizes: Gr,
          offsets: tr,
          elements: Vo
        }) : this._positionListener?.stickyFooterRowsUpdated({
          sizes: Gr,
          offsets: tr,
          elements: Vo
        });
      });
    }
    updateStickyFooterContainer(Bt, ve) {
      if (!this._isNativeHtmlTable) return;
      const yt = Bt.querySelector("tfoot");
      this._coalescedStyleScheduler.schedule(() => {
        ve.some(An => !An) ? this._removeStickyStyle(yt, ["bottom"]) : this._addStickyStyle(yt, "bottom", 0, !1);
      });
    }
    _removeStickyStyle(Bt, ve) {
      for (const An of ve) Bt.style[An] = "", Bt.classList.remove(this._borderCellCss[An]);
      li.some(An => -1 === ve.indexOf(An) && Bt.style[An]) ? Bt.style.zIndex = this._getCalculatedZIndex(Bt) : (Bt.style.zIndex = "", this._needsPositionStickyOnElement && (Bt.style.position = ""), Bt.classList.remove(this._stickCellCss));
    }
    _addStickyStyle(Bt, ve, yt, An) {
      Bt.classList.add(this._stickCellCss), An && Bt.classList.add(this._borderCellCss[ve]), Bt.style[ve] = `${yt}px`, Bt.style.zIndex = this._getCalculatedZIndex(Bt), this._needsPositionStickyOnElement && (Bt.style.cssText += "position: -webkit-sticky; position: sticky; ");
    }
    _getCalculatedZIndex(Bt) {
      const ve = {
        top: 100,
        bottom: 10,
        left: 1,
        right: 1
      };
      let yt = 0;
      for (const An of li) Bt.style[An] && (yt += ve[An]);
      return yt ? `${yt}` : "";
    }
    _getCellWidths(Bt, ve = !0) {
      if (!ve && this._cachedCellWidths.length) return this._cachedCellWidths;
      const yt = [],
        An = Bt.children;
      for (let Un = 0; Un < An.length; Un++) yt.push(An[Un].getBoundingClientRect().width);
      return this._cachedCellWidths = yt, yt;
    }
    _getStickyStartColumnPositions(Bt, ve) {
      const yt = [];
      let An = 0;
      for (let Un = 0; Un < Bt.length; Un++) ve[Un] && (yt[Un] = An, An += Bt[Un]);
      return yt;
    }
    _getStickyEndColumnPositions(Bt, ve) {
      const yt = [];
      let An = 0;
      for (let Un = Bt.length; Un > 0; Un--) ve[Un] && (yt[Un] = An, An += Bt[Un]);
      return yt;
    }
  }
  const Xn = new t.OlP("CDK_SPL");
  let Eo = (() => {
      class we {
        constructor(ve, yt) {
          this.viewContainer = ve, this.elementRef = yt;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.s_b), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "rowOutlet", ""]]
      }), we;
    })(),
    Fo = (() => {
      class we {
        constructor(ve, yt) {
          this.viewContainer = ve, this.elementRef = yt;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.s_b), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "headerRowOutlet", ""]]
      }), we;
    })(),
    br = (() => {
      class we {
        constructor(ve, yt) {
          this.viewContainer = ve, this.elementRef = yt;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.s_b), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "footerRowOutlet", ""]]
      }), we;
    })(),
    Pr = (() => {
      class we {
        constructor(ve, yt) {
          this.viewContainer = ve, this.elementRef = yt;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.s_b), t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "noDataRowOutlet", ""]]
      }), we;
    })(),
    wr = (() => {
      class we {
        get trackBy() {
          return this._trackByFn;
        }
        set trackBy(ve) {
          this._trackByFn = ve;
        }
        get dataSource() {
          return this._dataSource;
        }
        set dataSource(ve) {
          this._dataSource !== ve && this._switchDataSource(ve);
        }
        get multiTemplateDataRows() {
          return this._multiTemplateDataRows;
        }
        set multiTemplateDataRows(ve) {
          this._multiTemplateDataRows = (0, ae.Ig)(ve), this._rowOutlet && this._rowOutlet.viewContainer.length && (this._forceRenderDataRows(), this.updateStickyColumnStyles());
        }
        get fixedLayout() {
          return this._fixedLayout;
        }
        set fixedLayout(ve) {
          this._fixedLayout = (0, ae.Ig)(ve), this._forceRecalculateCellWidths = !0, this._stickyColumnStylesNeedReset = !0;
        }
        constructor(ve, yt, An, Un, tr, Gr, Vo, ta, za, cs, Gs, du) {
          this._differs = ve, this._changeDetectorRef = yt, this._elementRef = An, this._dir = tr, this._platform = Vo, this._viewRepeater = ta, this._coalescedStyleScheduler = za, this._viewportRuler = cs, this._stickyPositioningListener = Gs, this._ngZone = du, this._onDestroy = new x.x(), this._columnDefsByName = new Map(), this._customColumnDefs = new Set(), this._customRowDefs = new Set(), this._customHeaderRowDefs = new Set(), this._customFooterRowDefs = new Set(), this._headerRowDefChanged = !0, this._footerRowDefChanged = !0, this._stickyColumnStylesNeedReset = !0, this._forceRecalculateCellWidths = !0, this._cachedRenderRowsMap = new Map(), this.stickyCssClass = "cdk-table-sticky", this.needsPositionStickyOnElement = !0, this._isShowingNoDataRow = !1, this._multiTemplateDataRows = !1, this._fixedLayout = !1, this.contentChanged = new t.vpe(), this.viewChange = new u.X({
            start: 0,
            end: Number.MAX_VALUE
          }), Un || this._elementRef.nativeElement.setAttribute("role", "table"), this._document = Gr, this._isNativeHtmlTable = "TABLE" === this._elementRef.nativeElement.nodeName;
        }
        ngOnInit() {
          this._setupStickyStyler(), this._isNativeHtmlTable && this._applyNativeTableSections(), this._dataDiffer = this._differs.find([]).create((ve, yt) => this.trackBy ? this.trackBy(yt.dataIndex, yt.data) : yt), this._viewportRuler.change().pipe((0, j.R)(this._onDestroy)).subscribe(() => {
            this._forceRecalculateCellWidths = !0;
          });
        }
        ngAfterContentChecked() {
          this._cacheRowDefs(), this._cacheColumnDefs();
          const yt = this._renderUpdatedColumns() || this._headerRowDefChanged || this._footerRowDefChanged;
          this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || yt, this._forceRecalculateCellWidths = yt, this._headerRowDefChanged && (this._forceRenderHeaderRows(), this._headerRowDefChanged = !1), this._footerRowDefChanged && (this._forceRenderFooterRows(), this._footerRowDefChanged = !1), this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription ? this._observeRenderChanges() : this._stickyColumnStylesNeedReset && this.updateStickyColumnStyles(), this._checkStickyStates();
        }
        ngOnDestroy() {
          [this._rowOutlet.viewContainer, this._headerRowOutlet.viewContainer, this._footerRowOutlet.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(ve => {
            ve.clear();
          }), this._headerRowDefs = [], this._footerRowDefs = [], this._defaultRowDef = null, this._onDestroy.next(), this._onDestroy.complete(), (0, Y.Z9)(this.dataSource) && this.dataSource.disconnect(this);
        }
        renderRows() {
          this._renderRows = this._getAllRenderRows();
          const ve = this._dataDiffer.diff(this._renderRows);
          if (!ve) return this._updateNoDataRow(), void this.contentChanged.next();
          const yt = this._rowOutlet.viewContainer;
          this._viewRepeater.applyChanges(ve, yt, (An, Un, tr) => this._getEmbeddedViewArgs(An.item, tr), An => An.item.data, An => {
            1 === An.operation && An.context && this._renderCellTemplateForItem(An.record.item.rowDef, An.context);
          }), this._updateRowIndexContext(), ve.forEachIdentityChange(An => {
            yt.get(An.currentIndex).context.$implicit = An.item.data;
          }), this._updateNoDataRow(), this._ngZone && t.R0b.isInAngularZone() ? this._ngZone.onStable.pipe((0, n.q)(1), (0, j.R)(this._onDestroy)).subscribe(() => {
            this.updateStickyColumnStyles();
          }) : this.updateStickyColumnStyles(), this.contentChanged.next();
        }
        addColumnDef(ve) {
          this._customColumnDefs.add(ve);
        }
        removeColumnDef(ve) {
          this._customColumnDefs.delete(ve);
        }
        addRowDef(ve) {
          this._customRowDefs.add(ve);
        }
        removeRowDef(ve) {
          this._customRowDefs.delete(ve);
        }
        addHeaderRowDef(ve) {
          this._customHeaderRowDefs.add(ve), this._headerRowDefChanged = !0;
        }
        removeHeaderRowDef(ve) {
          this._customHeaderRowDefs.delete(ve), this._headerRowDefChanged = !0;
        }
        addFooterRowDef(ve) {
          this._customFooterRowDefs.add(ve), this._footerRowDefChanged = !0;
        }
        removeFooterRowDef(ve) {
          this._customFooterRowDefs.delete(ve), this._footerRowDefChanged = !0;
        }
        setNoDataRow(ve) {
          this._customNoDataRow = ve;
        }
        updateStickyHeaderRowStyles() {
          const ve = this._getRenderedRows(this._headerRowOutlet),
            An = this._elementRef.nativeElement.querySelector("thead");
          An && (An.style.display = ve.length ? "" : "none");
          const Un = this._headerRowDefs.map(tr => tr.sticky);
          this._stickyStyler.clearStickyPositioning(ve, ["top"]), this._stickyStyler.stickRows(ve, Un, "top"), this._headerRowDefs.forEach(tr => tr.resetStickyChanged());
        }
        updateStickyFooterRowStyles() {
          const ve = this._getRenderedRows(this._footerRowOutlet),
            An = this._elementRef.nativeElement.querySelector("tfoot");
          An && (An.style.display = ve.length ? "" : "none");
          const Un = this._footerRowDefs.map(tr => tr.sticky);
          this._stickyStyler.clearStickyPositioning(ve, ["bottom"]), this._stickyStyler.stickRows(ve, Un, "bottom"), this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, Un), this._footerRowDefs.forEach(tr => tr.resetStickyChanged());
        }
        updateStickyColumnStyles() {
          const ve = this._getRenderedRows(this._headerRowOutlet),
            yt = this._getRenderedRows(this._rowOutlet),
            An = this._getRenderedRows(this._footerRowOutlet);
          (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) && (this._stickyStyler.clearStickyPositioning([...ve, ...yt, ...An], ["left", "right"]), this._stickyColumnStylesNeedReset = !1), ve.forEach((Un, tr) => {
            this._addStickyColumnStyles([Un], this._headerRowDefs[tr]);
          }), this._rowDefs.forEach(Un => {
            const tr = [];
            for (let Gr = 0; Gr < yt.length; Gr++) this._renderRows[Gr].rowDef === Un && tr.push(yt[Gr]);
            this._addStickyColumnStyles(tr, Un);
          }), An.forEach((Un, tr) => {
            this._addStickyColumnStyles([Un], this._footerRowDefs[tr]);
          }), Array.from(this._columnDefsByName.values()).forEach(Un => Un.resetStickyChanged());
        }
        _getAllRenderRows() {
          const ve = [],
            yt = this._cachedRenderRowsMap;
          this._cachedRenderRowsMap = new Map();
          for (let An = 0; An < this._data.length; An++) {
            let Un = this._data[An];
            const tr = this._getRenderRowsForData(Un, An, yt.get(Un));
            this._cachedRenderRowsMap.has(Un) || this._cachedRenderRowsMap.set(Un, new WeakMap());
            for (let Gr = 0; Gr < tr.length; Gr++) {
              let Vo = tr[Gr];
              const ta = this._cachedRenderRowsMap.get(Vo.data);
              ta.has(Vo.rowDef) ? ta.get(Vo.rowDef).push(Vo) : ta.set(Vo.rowDef, [Vo]), ve.push(Vo);
            }
          }
          return ve;
        }
        _getRenderRowsForData(ve, yt, An) {
          return this._getRowDefs(ve, yt).map(tr => {
            const Gr = An && An.has(tr) ? An.get(tr) : [];
            if (Gr.length) {
              const Vo = Gr.shift();
              return Vo.dataIndex = yt, Vo;
            }
            return {
              data: ve,
              rowDef: tr,
              dataIndex: yt
            };
          });
        }
        _cacheColumnDefs() {
          this._columnDefsByName.clear(), oo(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs).forEach(yt => {
            this._columnDefsByName.has(yt.name), this._columnDefsByName.set(yt.name, yt);
          });
        }
        _cacheRowDefs() {
          this._headerRowDefs = oo(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs), this._footerRowDefs = oo(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs), this._rowDefs = oo(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
          const ve = this._rowDefs.filter(yt => !yt.when);
          this._defaultRowDef = ve[0];
        }
        _renderUpdatedColumns() {
          const ve = (tr, Gr) => tr || !!Gr.getColumnsDiff(),
            yt = this._rowDefs.reduce(ve, !1);
          yt && this._forceRenderDataRows();
          const An = this._headerRowDefs.reduce(ve, !1);
          An && this._forceRenderHeaderRows();
          const Un = this._footerRowDefs.reduce(ve, !1);
          return Un && this._forceRenderFooterRows(), yt || An || Un;
        }
        _switchDataSource(ve) {
          this._data = [], (0, Y.Z9)(this.dataSource) && this.dataSource.disconnect(this), this._renderChangeSubscription && (this._renderChangeSubscription.unsubscribe(), this._renderChangeSubscription = null), ve || (this._dataDiffer && this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear()), this._dataSource = ve;
        }
        _observeRenderChanges() {
          if (!this.dataSource) return;
          let ve;
          (0, Y.Z9)(this.dataSource) ? ve = this.dataSource.connect(this) : (0, be.b)(this.dataSource) ? ve = this.dataSource : Array.isArray(this.dataSource) && (ve = (0, le.of)(this.dataSource)), this._renderChangeSubscription = ve.pipe((0, j.R)(this._onDestroy)).subscribe(yt => {
            this._data = yt || [], this.renderRows();
          });
        }
        _forceRenderHeaderRows() {
          this._headerRowOutlet.viewContainer.length > 0 && this._headerRowOutlet.viewContainer.clear(), this._headerRowDefs.forEach((ve, yt) => this._renderRow(this._headerRowOutlet, ve, yt)), this.updateStickyHeaderRowStyles();
        }
        _forceRenderFooterRows() {
          this._footerRowOutlet.viewContainer.length > 0 && this._footerRowOutlet.viewContainer.clear(), this._footerRowDefs.forEach((ve, yt) => this._renderRow(this._footerRowOutlet, ve, yt)), this.updateStickyFooterRowStyles();
        }
        _addStickyColumnStyles(ve, yt) {
          const An = Array.from(yt.columns || []).map(Gr => this._columnDefsByName.get(Gr)),
            Un = An.map(Gr => Gr.sticky),
            tr = An.map(Gr => Gr.stickyEnd);
          this._stickyStyler.updateStickyColumns(ve, Un, tr, !this._fixedLayout || this._forceRecalculateCellWidths);
        }
        _getRenderedRows(ve) {
          const yt = [];
          for (let An = 0; An < ve.viewContainer.length; An++) {
            const Un = ve.viewContainer.get(An);
            yt.push(Un.rootNodes[0]);
          }
          return yt;
        }
        _getRowDefs(ve, yt) {
          if (1 == this._rowDefs.length) return [this._rowDefs[0]];
          let An = [];
          if (this.multiTemplateDataRows) An = this._rowDefs.filter(Un => !Un.when || Un.when(yt, ve));else {
            let Un = this._rowDefs.find(tr => tr.when && tr.when(yt, ve)) || this._defaultRowDef;
            Un && An.push(Un);
          }
          return An;
        }
        _getEmbeddedViewArgs(ve, yt) {
          return {
            templateRef: ve.rowDef.template,
            context: {
              $implicit: ve.data
            },
            index: yt
          };
        }
        _renderRow(ve, yt, An, Un = {}) {
          const tr = ve.viewContainer.createEmbeddedView(yt.template, Un, An);
          return this._renderCellTemplateForItem(yt, Un), tr;
        }
        _renderCellTemplateForItem(ve, yt) {
          for (let An of this._getCellTemplates(ve)) Dt.mostRecentCellOutlet && Dt.mostRecentCellOutlet._viewContainer.createEmbeddedView(An, yt);
          this._changeDetectorRef.markForCheck();
        }
        _updateRowIndexContext() {
          const ve = this._rowOutlet.viewContainer;
          for (let yt = 0, An = ve.length; yt < An; yt++) {
            const tr = ve.get(yt).context;
            tr.count = An, tr.first = 0 === yt, tr.last = yt === An - 1, tr.even = yt % 2 == 0, tr.odd = !tr.even, this.multiTemplateDataRows ? (tr.dataIndex = this._renderRows[yt].dataIndex, tr.renderIndex = yt) : tr.index = this._renderRows[yt].dataIndex;
          }
        }
        _getCellTemplates(ve) {
          return ve && ve.columns ? Array.from(ve.columns, yt => {
            const An = this._columnDefsByName.get(yt);
            return ve.extractCellTemplate(An);
          }) : [];
        }
        _applyNativeTableSections() {
          const ve = this._document.createDocumentFragment(),
            yt = [{
              tag: "thead",
              outlets: [this._headerRowOutlet]
            }, {
              tag: "tbody",
              outlets: [this._rowOutlet, this._noDataRowOutlet]
            }, {
              tag: "tfoot",
              outlets: [this._footerRowOutlet]
            }];
          for (const An of yt) {
            const Un = this._document.createElement(An.tag);
            Un.setAttribute("role", "rowgroup");
            for (const tr of An.outlets) Un.appendChild(tr.elementRef.nativeElement);
            ve.appendChild(Un);
          }
          this._elementRef.nativeElement.appendChild(ve);
        }
        _forceRenderDataRows() {
          this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear(), this.renderRows();
        }
        _checkStickyStates() {
          const ve = (yt, An) => yt || An.hasStickyChanged();
          this._headerRowDefs.reduce(ve, !1) && this.updateStickyHeaderRowStyles(), this._footerRowDefs.reduce(ve, !1) && this.updateStickyFooterRowStyles(), Array.from(this._columnDefsByName.values()).reduce(ve, !1) && (this._stickyColumnStylesNeedReset = !0, this.updateStickyColumnStyles());
        }
        _setupStickyStyler() {
          this._stickyStyler = new zn(this._isNativeHtmlTable, this.stickyCssClass, this._dir ? this._dir.value : "ltr", this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener), (this._dir ? this._dir.change : (0, le.of)()).pipe((0, j.R)(this._onDestroy)).subscribe(yt => {
            this._stickyStyler.direction = yt, this.updateStickyColumnStyles();
          });
        }
        _getOwnDefs(ve) {
          return ve.filter(yt => !yt._table || yt._table === this);
        }
        _updateNoDataRow() {
          const ve = this._customNoDataRow || this._noDataRow;
          if (!ve) return;
          const yt = 0 === this._rowOutlet.viewContainer.length;
          if (yt === this._isShowingNoDataRow) return;
          const An = this._noDataRowOutlet.viewContainer;
          if (yt) {
            const Un = An.createEmbeddedView(ve.templateRef),
              tr = Un.rootNodes[0];
            1 === Un.rootNodes.length && tr?.nodeType === this._document.ELEMENT_NODE && (tr.setAttribute("role", "row"), tr.classList.add(ve._contentClassName));
          } else An.clear();
          this._isShowingNoDataRow = yt;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.ZZ4), t.Y36(t.sBO), t.Y36(t.SBq), t.$8M("role"), t.Y36(ye.Is, 8), t.Y36(C.K0), t.Y36(G.t4), t.Y36(Y.k), t.Y36(Mt), t.Y36(te.rL), t.Y36(Xn, 12), t.Y36(t.R0b, 8));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function (ve, yt, An) {
          if (1 & ve && (t.Suo(An, an, 5), t.Suo(An, Ue, 5), t.Suo(An, pt, 5), t.Suo(An, yi, 5), t.Suo(An, fr, 5)), 2 & ve) {
            let Un;
            t.iGM(Un = t.CRH()) && (yt._noDataRow = Un.first), t.iGM(Un = t.CRH()) && (yt._contentColumnDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentRowDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentHeaderRowDefs = Un), t.iGM(Un = t.CRH()) && (yt._contentFooterRowDefs = Un);
          }
        },
        viewQuery: function (ve, yt) {
          if (1 & ve && (t.Gf(Eo, 7), t.Gf(Fo, 7), t.Gf(br, 7), t.Gf(Pr, 7)), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt._rowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._headerRowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._footerRowOutlet = An.first), t.iGM(An = t.CRH()) && (yt._noDataRowOutlet = An.first);
          }
        },
        hostAttrs: [1, "cdk-table"],
        hostVars: 2,
        hostBindings: function (ve, yt) {
          2 & ve && t.ekj("cdk-table-fixed-layout", yt.fixedLayout);
        },
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: "multiTemplateDataRows",
          fixedLayout: "fixedLayout"
        },
        outputs: {
          contentChanged: "contentChanged"
        },
        exportAs: ["cdkTable"],
        features: [t._Bn([{
          provide: st,
          useExisting: we
        }, {
          provide: Y.k,
          useClass: Y.yy
        }, {
          provide: Mt,
          useClass: Je
        }, {
          provide: Xn,
          useValue: null
        }])],
        ngContentSelectors: qe,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(Se), t.Hsn(0), t.Hsn(1, 1), t.GkF(2, 0)(3, 1)(4, 2)(5, 3));
        },
        dependencies: [Eo, Fo, br, Pr],
        styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
        encapsulation: 2
      }), we;
    })();
  function oo(we, Bt) {
    return we.concat(Array.from(Bt));
  }
  let lo = (() => {
    class we {}
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵmod = t.oAB({
      type: we
    }), we.ɵinj = t.cJS({
      imports: [te.Cl]
    }), we;
  })();
  var jo = i(44726),
    Go = i(24006),
    ji = i(62104),
    ti = i(71273),
    fi = i(77015),
    Fi = i(19700),
    Rn = i(97582),
    ki = i(30338),
    Ei = i(52306),
    Wt = i(92203);
  const Oi = new t.OlP("ALTERNATIVE_COMPONENT_SERVICE_TOKEN");
  function Ji(we, Bt) {}
  function Ao(we, Bt) {
    1 & we && (t.ynx(0), t.Hsn(1), t.BQk());
  }
  const Sr = ["*"];
  let us = (() => {
      class we {
        constructor(ve) {
          this.altComponentsService = ve, this.runEvent = new t.vpe();
        }
        ngOnInit() {
          this.loadComponent();
        }
        get altComponent() {
          return this.altComponentsService?.[this.containerType];
        }
        loadComponent() {
          const ve = this.altComponent;
          if (!ve) return;
          const yt = this.adHost.viewContainerRef;
          yt.clear(), this.componentRef = yt.createComponent(ve), this.componentRef.instance.runEvent && this.initRunEvent(this.componentRef.instance);
        }
        initRunEvent(ve) {
          return ve.runEvent?.subscribe(yt => this.runEvent.emit(yt));
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Oi, 8));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-universal-list-alternatives-container"]],
        viewQuery: function (ve, yt) {
          if (1 & ve && t.Gf(ki.x6, 7), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt.adHost = An.first);
          }
        },
        inputs: {
          containerType: "containerType"
        },
        outputs: {
          runEvent: "runEvent"
        },
        ngContentSelectors: Sr,
        decls: 3,
        vars: 1,
        consts: [["dpAdHost", ""], [4, "ngIf"]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(), t.TgZ(0, "div"), t.YNc(1, Ji, 0, 0, "ng-template", 0), t.qZA(), t.YNc(2, Ao, 2, 0, "ng-container", 1)), 2 & ve && (t.xp6(2), t.Q6J("ngIf", !yt.altComponent));
        },
        dependencies: [C.O5, ki.x6],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), (0, Rn.gn)([(0, Ei.k)(), (0, Rn.w6)("design:type", Function), (0, Rn.w6)("design:paramtypes", [Object]), (0, Rn.w6)("design:returntype", Object)], we.prototype, "initRunEvent", null), we;
    })(),
    Ps = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Go.UX, Wt.Y, m.aI, ki.vB]
      }), we;
    })(),
    hs = (() => {
      class we {
        constructor() {
          this.runEvent = new t.vpe();
        }
        onRefresh() {
          this.runEvent.emit();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-alt-search-failure"]],
        outputs: {
          runEvent: "runEvent"
        },
        decls: 9,
        vars: 5,
        consts: [[1, "message-container", 3, "type", "orientation", "size", "absolute"], ["luReplacementMessageTitle", ""], ["icon", "warning_line", 3, "size"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "Ошибка!"), t.qZA(), t._UZ(3, "lu-svg-icon", 2), t.TgZ(4, "div", 3)(5, "span"), t._uU(6, "Список временно недоступен."), t.qZA(), t.TgZ(7, "button", 4), t.NdJ("click", function () {
            return yt.onRefresh();
          }), t._uU(8, "Обновить"), t.qZA()()()), 2 & ve && (t.Q6J("type", "warning")("orientation", "vertical")("size", "medium")("absolute", !0), t.xp6(3), t.Q6J("size", 48));
        },
        dependencies: [E.dj, E.UY, a.q, M.mc],
        styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), we;
    })(),
    oi = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, E.M0, a.h, M.W1]
      }), we;
    })(),
    yo = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-alt-no-items"]],
        decls: 3,
        vars: 3,
        consts: [[1, "message-container", 3, "orientation", "size", "absolute"], ["luReplacementMessageTitle", "", 1, "message-title"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "Ничего не найдено"), t.qZA()()), 2 & ve && t.Q6J("orientation", "vertical")("size", "medium")("absolute", !0);
        },
        dependencies: [E.dj, E.UY],
        styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), we;
    })(),
    Qi = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, E.M0, a.h, M.W1]
      }), we;
    })(),
    Qo = (() => {
      class we {
        constructor() {
          this.runEvent = new t.vpe();
        }
        onClearFilter() {
          this.runEvent.emit();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-alt-no-items-filtered"]],
        outputs: {
          runEvent: "runEvent"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "message-container", 3, "orientation", "size", "absolute"], ["luReplacementMessageTitle", "", 1, "message-title"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "Ничего не найдено"), t.qZA(), t.TgZ(3, "span", 2), t._uU(4, " Проверьте или "), t.TgZ(5, "button", 3), t.NdJ("click", function () {
            return yt.onClearFilter();
          }), t._uU(6, "сбросьте"), t.qZA(), t._uU(7, " параметры фильтрации "), t.qZA()()), 2 & ve && t.Q6J("orientation", "vertical")("size", "medium")("absolute", !0);
        },
        dependencies: [E.dj, E.UY, M.mc],
        styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), we;
    })(),
    Kr = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, E.M0, a.h, M.W1]
      }), we;
    })(),
    _s = (() => {
      class we {
        constructor() {
          this.runEvent = new t.vpe();
        }
        onRefresh() {
          this.runEvent.emit();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-alt-no-items-on-page"]],
        outputs: {
          runEvent: "runEvent"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "message-container", 3, "orientation", "size", "absolute"], ["luReplacementMessageTitle", "", 1, "message-title"], [1, "message-text"], ["lu-button-link-dashed", "", 1, "message-text__button", 3, "click"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "lu-replacement-message", 0)(1, "span", 1), t._uU(2, "На текущей странице не осталось элементов."), t.qZA(), t.TgZ(3, "div", 2)(4, "span"), t._uU(5, "Выберите другую или"), t.qZA(), t.TgZ(6, "button", 3), t.NdJ("click", function () {
            return yt.onRefresh();
          }), t._uU(7, "обновите"), t.qZA()()()), 2 & ve && t.Q6J("orientation", "vertical")("size", "medium")("absolute", !0);
        },
        dependencies: [E.dj, E.UY, M.mc],
        styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), we;
    })(),
    ra = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, E.M0, a.h, M.W1]
      }), we;
    })();
  const Or = ["dropdown"];
  function Fs(we, Bt) {
    if (1 & we && (t.TgZ(0, "div", 3), t.Hsn(1), t.qZA()), 2 & we) {
      const ve = t.oxw();
      t.Udp("max-width", ve.contextMenuMaxWidth);
    }
  }
  const xa = ["*"],
    rs = "calc(var(--lu-base-gutter) * 33)";
  let Js = (() => {
      class we {
        constructor() {
          this.closeIfInnerClick = !0, this.positions = "bottom-right", this.afterClose = new t.vpe(), this.origin = {
            x: 0,
            y: 0
          }, this._contextMenuMaxWidth = rs;
        }
        set contextMenuMaxWidth(ve) {
          this._contextMenuMaxWidth = ve || rs;
        }
        get contextMenuMaxWidth() {
          return this._contextMenuMaxWidth;
        }
        open(ve, yt) {
          this.selectedRow = yt, this.origin = ve, setTimeout(() => this.dropdown.open(), 50);
        }
        handleAfterClose() {
          this.afterClose.emit();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-context-menu"]],
        viewQuery: function (ve, yt) {
          if (1 & ve && t.Gf(Or, 7), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt.dropdown = An.first);
          }
        },
        inputs: {
          closeIfInnerClick: "closeIfInnerClick",
          positions: "positions",
          contextMenuMaxWidth: "contextMenuMaxWidth"
        },
        outputs: {
          afterClose: "afterClose"
        },
        ngContentSelectors: xa,
        decls: 4,
        vars: 5,
        consts: [["panelClass", "context-menu", 3, "origin", "closeIfInnerClick", "notFocusClosestElement", "positions", "content", "afterClose"], ["dropdown", ""], ["content", ""], ["dpDataTestRole", "contextMenu", 1, "context-menu-items-container", "context-menu__dropdown"]],
        template: function (ve, yt) {
          if (1 & ve && (t.F$t(), t.TgZ(0, "lu-dropdown", 0, 1), t.NdJ("afterClose", function () {
            return yt.handleAfterClose();
          }), t.YNc(2, Fs, 2, 2, "ng-template", null, 2, t.W1O), t.qZA()), 2 & ve) {
            const An = t.MAs(3);
            t.Q6J("origin", yt.origin)("closeIfInnerClick", yt.closeIfInnerClick)("notFocusClosestElement", !0)("positions", yt.positions)("content", An);
          }
        },
        dependencies: [e.$, L.U],
        styles: [".context-menu .lu-overlay-content{border-color:transparent!important;border-radius:calc(var(--lu-base-gutter) / 2);box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f}.context-menu__dropdown[_ngcontent-%COMP%]{margin:var(--lu-base-gutter) 0}.context-menu-items-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"],
        changeDetection: 0
      }), we;
    })(),
    ho = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-context-menu-divider"]],
        decls: 1,
        vars: 0,
        consts: [[1, "context-menu-divider"]],
        template: function (ve, yt) {
          1 & ve && t._UZ(0, "div", 0);
        },
        styles: [".context-menu-divider[_ngcontent-%COMP%]{background-color:var(--lu-black-10);height:1px}"],
        changeDetection: 0
      }), we;
    })();
  function uo(we, Bt) {
    1 & we && t._UZ(0, "lu-svg-icon", 5), 2 & we && t.Q6J("size", 16);
  }
  const ri = function (we) {
      return {
        "context-menu-item--danger": we
      };
    },
    Yt = function (we) {
      return {
        "context-menu-item-icon--danger": we
      };
    },
    jt = function (we) {
      return {
        "context-menu-item-text--danger": we
      };
    };
  let hn = (() => {
      class we {
        constructor(ve) {
          this.contextMenu = ve, this.isShowArrowIcon = !1, this.type = "default", this.data = new t.vpe();
        }
        onItemClick(ve) {
          this.contextMenu && (ve.preventDefault(), this.data.emit(this.contextMenu.selectedRow));
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Js, 8));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-context-menu-item"]],
        inputs: {
          itemText: "itemText",
          iconName: "iconName",
          isShowArrowIcon: "isShowArrowIcon",
          type: "type"
        },
        outputs: {
          data: "data"
        },
        decls: 6,
        vars: 13,
        consts: [[1, "context-menu-item", 3, "ngClass", "click"], [1, "context-menu-item-content"], [1, "context-menu-item-icon", 3, "ngClass", "icon", "size"], ["lu-text", "", 1, "context-menu-item__text", "context-menu-item-text", 3, "ngClass"], ["class", "context-menu-item-icon", "icon", "chevron-right", 3, "size", 4, "ngIf"], ["icon", "chevron-right", 1, "context-menu-item-icon", 3, "size"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "div", 0), t.NdJ("click", function (Un) {
            return yt.onItemClick(Un);
          }), t.TgZ(1, "div", 1), t._UZ(2, "lu-svg-icon", 2), t.TgZ(3, "div", 3), t._uU(4), t.qZA()(), t.YNc(5, uo, 1, 1, "lu-svg-icon", 4), t.qZA()), 2 & ve && (t.Q6J("ngClass", t.VKq(7, ri, "danger" === yt.type)), t.xp6(2), t.Q6J("ngClass", t.VKq(9, Yt, "danger" === yt.type))("icon", yt.iconName)("size", 24), t.xp6(1), t.Q6J("ngClass", t.VKq(11, jt, "danger" === yt.type)), t.xp6(1), t.hij(" ", yt.itemText, " "), t.xp6(1), t.Q6J("ngIf", yt.isShowArrowIcon));
        },
        dependencies: [C.mk, C.O5, a.q, m.NZ],
        styles: [".context-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5);cursor:pointer}.context-menu-item[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}.context-menu-item--danger[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-10)}.context-menu-item-content[_ngcontent-%COMP%]{display:flex}.context-menu-item__text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.context-menu-item-text[_ngcontent-%COMP%]{color:var(--lu-text-color)}.context-menu-item-text--danger[_ngcontent-%COMP%]{color:var(--lu-red-120)}.context-menu-item-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.context-menu-item-icon--danger[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-120)}"],
        changeDetection: 0
      }), we;
    })(),
    _r = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, e.J, d.O, a.h, m.aI, L.w]
      }), we;
    })();
  function qr(we, Bt) {
    if (1 & we && (t.TgZ(0, "lu-badge", 2), t._uU(1), t.qZA()), 2 & we) {
      const ve = t.oxw();
      t.Q6J("size", "extra-small")("color", "yellow"), t.xp6(1), t.hij(" ", ve.selectedFiltersCount, "\n");
    }
  }
  let Ts = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-filter-icon-counter"]],
        inputs: {
          selectedFiltersCount: "selectedFiltersCount"
        },
        decls: 2,
        vars: 2,
        consts: [["icon", "filter", 3, "size"], ["class", "__badge", "dpDataTestRole", "counter", 3, "size", "color", 4, "ngIf"], ["dpDataTestRole", "counter", 1, "__badge", 3, "size", "color"]],
        template: function (ve, yt) {
          1 & ve && (t._UZ(0, "lu-svg-icon", 0), t.YNc(1, qr, 2, 3, "lu-badge", 1)), 2 & ve && (t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", yt.selectedFiltersCount));
        },
        dependencies: [C.O5, a.q, v.A, L.U],
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-shrink:0}.__badge[_ngcontent-%COMP%]{position:absolute;top:calc(-1 * var(--lu-base-gutter));right:calc(-1 * var(--lu-base-gutter))}"],
        changeDetection: 0
      }), we;
    })(),
    js = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, a.h, v.T, L.w]
      }), we;
    })();
  const ws = ["scrollElement"],
    Us = ["*"];
  let sa = (() => {
      class we {
        constructor() {
          this.darkTheme = !1, this.scrollChangeY = new t.vpe(), this.scrollChangeX = new t.vpe(), this.scrollEndY = new t.vpe(), this.scrollEndX = new t.vpe(), this.scrollTop = 0, this.scrollLeft = 0;
        }
        ngOnInit() {
          this.initScrollEventListening(this.scrollElementRef?.nativeElement);
        }
        ngOnDestroy() {
          this.subscription && this.subscription.unsubscribe();
        }
        initScrollEventListening(ve) {
          ve && (this.updateCurrentScrollProperties(ve), this.subscription = (0, h.R)(ve, "scroll").pipe((0, T.b)(50)).subscribe(this.onScroll.bind(this)));
        }
        onScroll(ve) {
          this.checkEventsFromScrollY(ve), this.checkEventsFromScrollX(ve), this.updateCurrentScrollProperties(ve.target);
        }
        checkEventsFromScrollY(ve) {
          const yt = ve.target;
          yt && yt.scrollTop !== this.scrollTop && (this.scrollChangeY.emit(ve), this.isVerticalFullyScrolled(yt) && this.scrollEndY.emit());
        }
        checkEventsFromScrollX(ve) {
          const yt = ve.target;
          yt && yt.scrollLeft !== this.scrollLeft && (this.scrollChangeX.emit(ve), this.isHorizontalFullyScrolled(yt) && this.scrollEndX.emit());
        }
        isVerticalFullyScrolled(ve) {
          return Math.abs(ve.scrollHeight - ve.clientHeight - ve.scrollTop) < 1;
        }
        isHorizontalFullyScrolled(ve) {
          return Math.abs(ve.scrollWidth - ve.clientWidth - ve.scrollLeft) < 1;
        }
        updateCurrentScrollProperties(ve) {
          ve && (this.scrollTop = ve.scrollTop, this.scrollLeft = ve.scrollLeft);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-scroll-container"]],
        viewQuery: function (ve, yt) {
          if (1 & ve && t.Gf(ws, 7), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt.scrollElementRef = An.first);
          }
        },
        inputs: {
          darkTheme: "darkTheme"
        },
        outputs: {
          scrollChangeY: "scrollChangeY",
          scrollChangeX: "scrollChangeX",
          scrollEndY: "scrollEndY",
          scrollEndX: "scrollEndX"
        },
        ngContentSelectors: Us,
        decls: 3,
        vars: 2,
        consts: [[1, "dp-scroll"], ["scrollElement", ""]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(), t.TgZ(0, "div", 0, 1), t.Hsn(2), t.qZA()), 2 & ve && t.ekj("-is-dark-theme", yt.darkTheme);
        },
        styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;--scrollbar-track: var(--lu-white);--scrollbar-thumb-border: var(--lu-white);--scrollbar-thumb-bgc: rgba(var(--lu-black-rgb-100), .16);--scrollbar-thumb-bgc-hover: rgba(var(--lu-black-rgb-100), .24);--scrollbar-thumb-bgc-active: rgba(var(--lu-black-rgb-100), .32)}.dp-scroll[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:auto;scroll-behavior:smooth}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--scrollbar-track)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border:4px solid var(--scrollbar-thumb-border);border-radius:16px;background-color:var(--scrollbar-thumb-bgc)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-bgc-hover)}.dp-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--scrollbar-thumb-bgc-active)}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]{height:100%}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:var(--lu-black-80)}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border:4px solid var(--lu-black-80);border-radius:8px;background-color:#ffffff26}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#ffffff1a}.dp-scroll.-is-dark-theme[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{background-color:#ffffff1a}"],
        changeDetection: 0
      }), we;
    })(),
    ha = (() => {
      class we {
        constructor(ve) {
          this.el = ve;
        }
        ngAfterContentChecked() {
          this.addMarginStyleToContentElements();
        }
        addMarginStyleToContentElements() {
          const ve = this.el?.nativeElement?.children;
          ve && Array.from(ve).forEach((yt, An) => {
            0 !== An && (yt.style.marginTop = "24px");
          });
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.SBq));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "dpFilterPanelContent", ""]]
      }), we;
    })();
  function ua(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "button", 6), t.NdJ("click", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onReset());
      }), t._uU(1, " Очистить "), t.qZA();
    }
  }
  const da = function (we) {
    return {
      "footer-border": we
    };
  };
  function na(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "footer", 7)(1, "button", 8), t.NdJ("click", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onApply());
      }), t._uU(2, "Применить"), t.qZA()();
    }
    if (2 & we) {
      const ve = t.oxw();
      t.Q6J("ngClass", t.VKq(2, da, ve.isActionButtonShow && ve.displayBorder)), t.xp6(1), t.Q6J("disabled", ve.applyDisabled);
    }
  }
  const Qs = ["*"];
  let ma = (() => {
      class we {
        constructor() {
          this.hasSelectedParameters = !1, this.hasAppliedParameters = !1, this.applyDisabled = !1, this.displayBorder = !1, this.applyFilter = new t.vpe(), this.resetFilter = new t.vpe();
        }
        get isActionButtonShow() {
          return this.hasSelectedParameters || this.hasAppliedParameters;
        }
        onApply() {
          this.applyFilter.emit();
        }
        onReset() {
          this.resetFilter.emit();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-filter-panel"]],
        inputs: {
          hasSelectedParameters: "hasSelectedParameters",
          hasAppliedParameters: "hasAppliedParameters",
          applyDisabled: "applyDisabled",
          displayBorder: "displayBorder"
        },
        outputs: {
          applyFilter: "applyFilter",
          resetFilter: "resetFilter"
        },
        ngContentSelectors: Qs,
        decls: 9,
        vars: 2,
        consts: [[1, "header"], ["lu-text", "", "dpDataTestRole", "header", 1, "title"], ["lu-button-link-dashed", "", "size", "medium", "class", "header-reset-button", 3, "click", 4, "ngIf"], [1, "main"], ["dpFilterPanelContent", "", 1, "main-content"], ["class", "footer", 3, "ngClass", 4, "ngIf"], ["lu-button-link-dashed", "", "size", "medium", 1, "header-reset-button", 3, "click"], [1, "footer", 3, "ngClass"], ["lu-button-raised", "", "size", "medium", 3, "disabled", "click"]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(), t.TgZ(0, "header", 0)(1, "h4", 1), t._uU(2, "Фильтр"), t.qZA(), t.YNc(3, ua, 2, 0, "button", 2), t.qZA(), t.TgZ(4, "main", 3)(5, "dp-scroll-container")(6, "div", 4), t.Hsn(7), t.qZA()()(), t.YNc(8, na, 3, 4, "footer", 5)), 2 & ve && (t.xp6(3), t.Q6J("ngIf", yt.isActionButtonShow), t.xp6(5), t.Q6J("ngIf", yt.isActionButtonShow));
        },
        dependencies: [C.mk, C.O5, M.mc, m.NZ, sa, L.U, ha],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}.title[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter) 0 0}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;padding:calc(var(--lu-base-gutter) * 3)}.header-reset-button[_ngcontent-%COMP%]{--lu-button-hover-background: transparent;--lu-button-active-background: transparent}.main[_ngcontent-%COMP%]{flex-grow:2;overflow:hidden;display:flex;padding:0 0 0 calc(var(--lu-base-gutter) * 3)}.main-content[_ngcontent-%COMP%]{padding-right:16px}.footer[_ngcontent-%COMP%]{padding:calc(var(--lu-base-gutter) * 2) calc(var(--lu-base-gutter) * 3)}.footer-border[_ngcontent-%COMP%]{border-top:1px solid var(--lu-black-15)}"],
        changeDetection: 0
      }), we;
    })(),
    Xs = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Ks = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, M.W1, m.aI, Xs, L.w]
      }), we;
    })();
  function Va(we, Bt, ve = []) {
    return ba(we, Bt) ? 0 : function Ri(we, Bt, ve) {
      return Object.keys({
        ...$o(we, Bt, ve),
        ...$o(Bt, we, ve)
      }).length;
    }(we ?? {}, Bt ?? {}, ve);
  }
  function ba(we, Bt) {
    return we instanceof Date && Bt instanceof Date ? we.valueOf() === Bt.valueOf() : JSON.stringify(we) === JSON.stringify(Bt);
  }
  function $o(we, Bt, ve) {
    const yt = Object.keys(we),
      An = {};
    return yt.filter(Un => null != we[Un] && "" !== we[Un] && !1 !== we[Un] && !function qs(we) {
      return !(we instanceof Date) && "object" == typeof we && Object.keys(we).every(Bt => null == we[Bt] || "" === we[Bt]);
    }(we[Un])).filter(Un => !ve.includes(Un)).forEach(Un => {
      "object" == typeof we[Un] && ba(we[Un], Bt[Un]) || we[Un] !== Bt[Un] && (An[Un] = we[Un]);
    }), An;
  }
  let ci = (() => {
      class we {
        transform(ve, yt, An = []) {
          return Va(ve, yt, An);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵpipe = t.Yjl({
        name: "filterParamsCount",
        type: we,
        pure: !0
      }), we;
    })(),
    Gi = (() => {
      class we {
        transform(ve, yt, An = []) {
          return Va(ve, yt, An) > 0;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵpipe = t.Yjl({
        name: "hasFilterParameters",
        type: we,
        pure: !0
      }), we;
    })(),
    Fn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({}), we;
    })(),
    zi = (() => {
      class we {
        constructor() {
          this.placeholderPortalOutlets = new Map(), this.updateWaitingList = new x.x();
        }
        getOutlets(ve) {
          return this.updateWaitingList.pipe((0, R.O)(void 0), (0, B.U)(() => Array.from(this.placeholderPortalOutlets.keys())), (0, y.x)((yt, An) => yt.every(Un => An.includes(Un))), (0, B.U)(yt => yt.filter(An => ve.test(String(An))).sort().map(An => ({
            name: An
          }))));
        }
        registerOutlet(ve) {
          return this.placeholderPortalOutlets.has(ve) || this.placeholderPortalOutlets.set(ve, new u.X(null)), this.placeholderPortalOutlets.get(ve)?.asObservable();
        }
        removeOutlet(ve) {}
        setPortal(ve) {
          this.isRegisteredPortal(ve.target) ? this.placeholderPortalOutlets.get(ve.target)?.next(ve) : this.placeholderPortalOutlets.set(ve.target, new u.X(ve));
        }
        removePortal({
          target: ve
        }) {
          this.placeholderPortalOutlets.get(ve)?.next(null);
        }
        isRegisteredPortal(ve) {
          return this.placeholderPortalOutlets.has(ve);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵprov = t.Yz7({
        token: we,
        factory: we.ɵfac,
        providedIn: "root"
      }), we;
    })();
  function Io(we, Bt) {}
  function gi(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Io, 0, 0, "ng-template", 1), t.BQk()), 2 & we) {
      const ve = Bt.ngIf;
      t.xp6(1), t.Q6J("cdkPortalOutlet", ve);
    }
  }
  let Kt = (() => {
      class we {
        constructor(ve) {
          this.layoutPlaceholderService = ve, this.name = "";
        }
        ngOnInit() {
          this.layoutPortal$ = this.layoutPlaceholderService.registerOutlet(this.name);
        }
        ngOnDestroy() {
          this.layoutPlaceholderService.removeOutlet(this.name);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(zi));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-portal-host"]],
        inputs: {
          name: "name"
        },
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "cdkPortalOutlet"]],
        template: function (ve, yt) {
          1 & ve && (t.YNc(0, gi, 2, 1, "ng-container", 0), t.ALo(1, "async")), 2 & ve && t.Q6J("ngIf", t.lcZ(1, 1, yt.layoutPortal$));
        },
        dependencies: [C.O5, Le.Pl, C.Ov],
        styles: ["[_nghost-%COMP%]{display:flex;flex-grow:1;overflow:auto}"],
        changeDetection: 0
      }), we;
    })(),
    Vt = (() => {
      class we {
        constructor(ve, yt, An) {
          this.templateRef = ve, this.viewContainer = yt, this.layoutPlaceholderService = An, this.destroy$ = new x.x();
        }
        listenPortalRegistered(ve) {
          this.layoutPlaceholderService.getOutlets(ve).pipe((0, j.R)(this.destroy$)).subscribe(yt => {
            this.updateView(yt);
          });
        }
        ngOnInit() {
          this.listenPortalRegistered(this.dpRegisteredPortalsFor);
        }
        ngOnDestroy() {
          this.destroy$.next(), this.destroy$.complete();
        }
        updateView(ve) {
          this.viewContainer.clear(), ve.forEach((yt, An) => {
            this.viewContainer.createEmbeddedView(this.templateRef, {
              $implicit: yt,
              index: An,
              first: 0 === An,
              last: An === ve.length - 1,
              even: An % 2 == 0,
              odd: An % 2 == 1
            });
          });
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.s_b), t.Y36(zi));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "dpRegisteredPortalsFor", ""]],
        inputs: {
          dpRegisteredPortalsFor: "dpRegisteredPortalsFor"
        }
      }), we;
    })();
  function Pn(we, Bt) {
    if (1 & we && t._UZ(0, "dp-portal-host", 6), 2 & we) {
      const ve = t.oxw().$implicit;
      t.Q6J("name", ve.name);
    }
  }
  function pi(we, Bt) {
    if (1 & we && (t.TgZ(0, "lu-tab"), t.YNc(1, Pn, 1, 1, "ng-template", 4), t._UZ(2, "dp-portal-host", 5), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw();
      t.xp6(2), t.Q6J("name", yt.getTabContentName(ve.name));
    }
  }
  let xo = (() => {
      class we {
        constructor() {
          this.tabs = [], this.isOpen = !0, this.toggleSideBarEmitter = new t.vpe(), this.isContentOpen = !0, this.regForTab = /^filters-tab-title([-a-zA-Z]*)$/;
        }
        ngOnInit() {
          this.isContentOpen = this.isOpen;
        }
        getTabContentName(ve) {
          return ve.replace("filters-tab-title", "filters-tab-content");
        }
        get openedTab() {
          return this.openedTabId ? this.openedTabId : "";
        }
        onTabChange(ve) {
          const yt = ve !== this.openedTab;
          "string" == typeof ve && (this.openedTabId = ve), (!this.isContentOpen || !yt) && this.toggleContentState();
        }
        onClose() {
          this.toggleContentState();
        }
        toggleContentState() {
          this.isContentOpen = !this.isContentOpen, this.toggleSideBarEmitter.emit(this.isContentOpen);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-filter-sidebar"]],
        inputs: {
          tabs: "tabs",
          isOpen: "isOpen",
          openedTabId: "openedTabId"
        },
        outputs: {
          toggleSideBarEmitter: "toggleSideBarEmitter"
        },
        decls: 4,
        vars: 8,
        consts: [[1, "sidebar", 3, "ngClass"], [3, "openedTab", "orientation", "hasDivider", "hasItemDivider", "luNoAnimation", "tabChange"], [4, "dpRegisteredPortalsFor"], ["icon", "close-12", "dpDataTestRole", "closeButton", 1, "sidebar-close-btn", 3, "size", "click"], ["luTabTitle", ""], [3, "name"], [1, "sidebar-tab", 3, "name"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "div", 0)(1, "lu-tab-group", 1), t.NdJ("tabChange", function (Un) {
            return yt.onTabChange(Un);
          }), t.YNc(2, pi, 3, 1, "lu-tab", 2), t.qZA(), t.TgZ(3, "lu-svg-icon", 3), t.NdJ("click", function () {
            return yt.onClose();
          }), t.qZA()()), 2 & ve && (t.Q6J("ngClass", yt.isContentOpen ? "sidebar_state_opened" : "sidebar_state_closed"), t.xp6(1), t.Q6J("openedTab", yt.openedTab)("orientation", "vertical")("hasDivider", !0)("hasItemDivider", !0)("luNoAnimation", !0), t.xp6(1), t.Q6J("dpRegisteredPortalsFor", yt.regForTab), t.xp6(1), t.Q6J("size", 24));
        },
        dependencies: [C.mk, Kt, Vt, f.Y0, f.hD, f.Ld, a.q, b.E, L.U],
        styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0}.sidebar[_ngcontent-%COMP%]{position:relative;display:flex;flex-shrink:0;width:calc(var(--lu-base-gutter) * 52);box-shadow:1px 0 0 0 var(--lu-black-15) inset;background-color:var(--lu-black-5);overflow:hidden}.sidebar_state_opened[_ngcontent-%COMP%]{margin-right:0;transition:margin-right .2s linear}.sidebar_state_closed[_ngcontent-%COMP%]{margin-right:calc(-1 * (calc(var(--lu-base-gutter) * 52) - calc(var(--lu-base-gutter) * 7)));transition:margin-right .1s linear}.sidebar[_ngcontent-%COMP%]   lu-tab-group[_ngcontent-%COMP%]{z-index:0}.sidebar-tab[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:calc(var(--lu-base-gutter) * 7)!important;height:calc(var(--lu-base-gutter) * 7)!important}.sidebar-close-btn[_ngcontent-%COMP%]{position:absolute;top:calc(var(--lu-base-gutter) * 2);right:calc(var(--lu-base-gutter) * 2);cursor:pointer;--lu-svg-icon-color: var(--lu-black-30)}"],
        changeDetection: 0
      }), we;
    })(),
    No = (() => {
      class we extends Le.ig {
        constructor(ve, yt, An) {
          super(ve, yt), this.templateRef = ve, this.viewContainerRef = yt, this.layoutPlaceholderService = An, this.target = Symbol();
        }
        ngOnInit() {
          this.layoutPlaceholderService.setPortal(this);
        }
        ngOnDestroy() {
          this.layoutPlaceholderService.removePortal(this);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.Rgc), t.Y36(t.s_b), t.Y36(zi));
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["", "dpLayoutPortal", ""]],
        inputs: {
          target: ["dpLayoutPortal", "target"]
        },
        features: [t.qOj]
      }), we;
    })(),
    Ko = (() => {
      class we {
        constructor() {
          this.portalItems = new Map();
        }
        registerPortal(ve, yt) {
          if (!ve) throw new Error("listName for portal is required");
          this.portalItems.set(ve, yt);
        }
        getPortalItem(ve) {
          return this.portalItems.get(ve);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵprov = t.Yz7({
        token: we,
        factory: we.ɵfac,
        providedIn: "root"
      }), we;
    })(),
    It = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    At = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Le.eL, It]
      }), we;
    })(),
    _n = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, At, m.aI, f.Hu, a.h, b.B, L.w]
      }), we;
    })();
  const gt = 8;
  function ni(we) {
    const ve = Array.from(document.querySelectorAll("[id^=\"label-\"]")),
      yt = [];
    return !we.length || !ve.length || ve.forEach((An, Un) => {
      const tr = 0 === Un,
        Vo = we?.find(za => za.labelId === An.id.replace("label-", ""));
      if (!Vo) return;
      let ta;
      !function So(we, Bt, ve) {
        const yt = we?.getBoundingClientRect(),
          An = document.getElementById("groupingLabelsTopContainer")?.getBoundingClientRect();
        return !(!yt || !An) && (Bt && Er(function aa(we) {
          return we + zr();
        }(yt.bottom), yt.height, ve) < An.top || !Bt && Er(yt.top, yt.height, ve) < An.top);
      }(An, tr, yt.length) ? function Br(we, Bt, ve) {
        const yt = we?.getBoundingClientRect(),
          An = document.getElementById("groupingLabelsBottomContainer")?.getBoundingClientRect();
        return !(!yt || !An) && function vr(we, Bt, ve) {
          return we - (ve - 1) * (Bt + gt) - ks() + 36;
        }(yt.top, yt.height, ve) > function Ka(we) {
          return we + ks();
        }(An.bottom);
      }(An, 0, yt.length) && (ta = "BOTTOM") : ta = "TOP", ta && yt.push({
        labelId: Vo.labelId,
        position: ta,
        ...Vo.groupingLabel
      });
    }), yt;
  }
  function Er(we, Bt, ve) {
    return we + ve * (Bt + gt) + zr();
  }
  function zr() {
    const we = document.getElementById("groupingLabelsBottomContainer")?.parentElement;
    return we ? Number(getComputedStyle(we).top.replace("px", "")) : 0;
  }
  function ks() {
    const we = document.getElementById("groupingLabelsBottomContainer")?.parentElement;
    return we ? Number(getComputedStyle(we).bottom.replace("px", "")) : 0;
  }
  function ja(we) {
    return Bt => we ? (0, ke.YS)(we)(Bt)[0] : "";
  }
  function ul(we) {
    if (!we) return "";
    if ("rootId" in we) return we.rootId;
    if ("labelId" in we) return we.labelId;
    const Bt = we._techId;
    if (Bt) return Bt;
    throw Error("Error getting unique key");
  }
  var mi = (() => {
    return (we = mi || (mi = {})).SELECTED = "SELECTED", we.NOT_SELECTED = "NOT_SELECTED", mi;
    var we;
  })();
  const ro = {
    tableSourceState: {
      tableDataSource: [],
      selectedRow: null,
      hoveredRow: null,
      markedRows: [],
      unmarkedRows: [],
      allMarkedRows: mi.NOT_SELECTED,
      collapsedGroups: []
    },
    tableDisplayProps: {},
    rowDisabledConditionFunction: void 0,
    rowDisabledTooltipTextFunction: void 0,
    rowSelectItemFunction: void 0,
    rowBackgroundColorFunction: void 0,
    groupingType: void 0
  };
  let cr = (() => {
    class we extends J.m1 {
      constructor() {
        super(ro), this.selectFilteredTableState = this.select(ve => ({
          ...ve,
          tableSourceState: {
            ...ve.tableSourceState,
            tableDataSource: this.filterActiveGroupItems(ve)
          }
        })), this.setPartialSource = this.updater((ve, yt) => {
          const An = this.updatedTableProps(ve, yt);
          return {
            ...ve,
            rowDisabledConditionFunction: An.rowDisabledConditionFunction,
            rowDisabledTooltipTextFunction: An.rowDisabledTooltipTextFunction,
            tableSourceState: {
              ...ve.tableSourceState,
              ...An.tableSourceState
            },
            groupingType: An.groupingType,
            tableDisplayProps: {
              ...ve.tableDisplayProps,
              columns: An.tableDisplayProps?.columns || [],
              metaMap: An.tableDisplayProps?.metaMap || new Map()
            }
          };
        }), this.initParams = this.updater((ve, yt) => ({
          ...ve,
          rowDisabledConditionFunction: yt.rowFns.rowDisabledConditionFunction,
          rowDisabledTooltipTextFunction: yt.rowFns.rowDisabledTooltipTextFunction,
          rowSelectItemFunction: yt.rowFns.rowSelectItemFunction,
          rowBackgroundColorFunction: yt.rowFns.rowBackgroundColorFunction,
          tableDisplayProps: {
            metaMap: yt.metaMap,
            columns: yt.columns
          },
          tableSourceState: {
            tableDataSource: this.convertDataSourceToTable(yt.dataList, {
              rowDisabledConditionFunction: yt.rowFns.rowDisabledConditionFunction,
              rowDisabledTooltipTextFunction: yt.rowFns.rowDisabledTooltipTextFunction,
              rowSelectItemFunction: yt.rowFns.rowSelectItemFunction,
              rowBackgroundColorFunction: yt.rowFns.rowBackgroundColorFunction
            }, ve.tableSourceState),
            selectedRow: null,
            hoveredRow: null,
            markedRows: [],
            unmarkedRows: [],
            allMarkedRows: mi.NOT_SELECTED,
            collapsedGroups: []
          },
          dataList: yt.dataList,
          groupingType: yt.groupingType
        })), this.setMark = this.updater((ve, yt) => ({
          ...ve,
          tableSourceState: this.updateTableStateByMarkedRows(ve.tableSourceState, yt)
        })), this.setMarkGroup = this.updater((ve, yt) => ({
          ...ve,
          tableSourceState: this.updateTableStateByMarkedGroup(ve.tableSourceState, yt)
        })), this.setToggleGroup = this.updater((ve, yt) => ({
          ...ve,
          tableSourceState: this.updateTableStateByToggle(ve.tableSourceState, yt)
        })), this.setMarkAll = this.updater((ve, yt) => ({
          ...ve,
          tableSourceState: this.setAllMarkState(ve.tableSourceState, yt)
        })), this.init = this.effect(ve => ve.pipe((0, W.b)(yt => this.initParams(yt)))), this.setMarked = this.effect(ve => ve.pipe((0, W.b)(({
          row: yt
        }) => this.setMark(yt)))), this.toggleGroup = this.effect(ve => ve.pipe((0, W.b)(({
          row: yt
        }) => this.setToggleGroup(yt)))), this.setMarkedGroup = this.effect(ve => ve.pipe((0, W.b)(({
          row: yt
        }) => this.setMarkGroup(yt)))), this.setAllMarked = this.effect(ve => ve.pipe((0, W.b)(({
          markAll: yt
        }) => this.setMarkAll(yt)))), this.updatePartialPros = this.effect(ve => ve.pipe((0, W.b)(yt => this.setPartialSource(yt))));
      }
      updatedTableProps(ve, yt) {
        const An = yt.rowFns ? yt.rowFns.rowDisabledConditionFunction : ve.rowDisabledConditionFunction,
          Un = yt.rowFns ? yt.rowFns.rowDisabledTooltipTextFunction : ve.rowDisabledTooltipTextFunction,
          tr = yt.columns ?? ve.tableDisplayProps.columns ?? [],
          Gr = yt.metaMap ?? ve.tableDisplayProps.metaMap ?? new Map();
        let Vo = ve.tableSourceState.tableDataSource;
        return yt.dataList ? Vo = this.convertDataSourceToTable(yt.dataList, {
          rowDisabledConditionFunction: An,
          rowDisabledTooltipTextFunction: Un,
          rowSelectItemFunction: ve.rowSelectItemFunction,
          rowBackgroundColorFunction: ve.rowBackgroundColorFunction
        }, ve.tableSourceState) : yt.rowFns && (Vo = this.updateListItems(ve.tableSourceState.tableDataSource, {
          ...yt.rowFns,
          rowSelectItemFunction: ve.rowSelectItemFunction,
          rowBackgroundColorFunction: ve.rowBackgroundColorFunction
        })), {
          rowDisabledConditionFunction: An,
          rowDisabledTooltipTextFunction: Un,
          tableSourceState: {
            ...ve.tableSourceState,
            tableDataSource: Vo,
            markedRows: Vo.filter(ta => ta.isMarked && !ta.disabled),
            unmarkedRows: ve.tableSourceState.allMarkedRows === mi.SELECTED ? Vo.filter(ta => !ta.isMarked && !ta.disabled) : [],
            collapsedGroups: Vo.filter(ta => ta.isCollapsedGroup).map(ta => ta.groupId)
          },
          tableDisplayProps: {
            ...ve.tableDisplayProps,
            columns: tr,
            metaMap: Gr
          },
          groupingType: yt.groupingType
        };
      }
      updateListItems(ve, yt) {
        return ve.map(An => {
          let Un = {};
          return yt && (Un = {
            activeStyle: this.activeStyle(An.rowData, yt),
            background: this.getDataByRowFn(An.rowData, yt.rowBackgroundColorFunction),
            disabled: this.getDataByRowFn(An.rowData, yt.rowDisabledConditionFunction) ?? !1,
            disabledText: this.getDataByRowFn(An.rowData, yt.rowDisabledTooltipTextFunction)
          }), {
            ...An,
            ...Un
          };
        });
      }
      convertFlatDataSourceToTable(ve, yt, An, Un) {
        return (ve || []).map(tr => {
          const Gr = tr?._techId ?? Math.random().toString();
          let Vo = An.tableDataSource.find(za => za.techId === Gr)?.isMarked ?? !1;
          return An.allMarkedRows === mi.SELECTED && (Vo = !An.unmarkedRows.some(za => za.techId === Gr)), {
            ...this.rawItemToTableItem(tr, Vo, Un, Gr),
            activeStyle: this.activeStyle(tr, yt),
            background: this.getDataByRowFn(tr, yt.rowBackgroundColorFunction),
            disabled: this.getDataByRowFn(tr, yt.rowDisabledConditionFunction) ?? !1,
            disabledText: this.getDataByRowFn(tr, yt.rowDisabledTooltipTextFunction),
            animationState: this.getAnimationState(tr)
          };
        });
      }
      convertDataSourceToTable(ve, yt, An) {
        if (!ve) return [];
        if (ve.groupingDataSource) return this.convertGroupItemsToTableItems(ve, yt, An);
        if (ve.dataSource) return this.convertFlatDataSourceToTable(ve.dataSource, yt, An);
        throw new Error("Empty DataSource");
      }
      convertGroupItemsToTableItems(ve, yt, An) {
        if (!ve) return [];
        const Un = [];
        return (ve.groupingDataSource || []).forEach(tr => {
          const Gr = tr.labelId,
            Vo = 0 === tr.children.length;
          let ta = !Vo && (An.tableDataSource.find(Gs => Gs.techId === Gr)?.isMarked ?? !1);
          !Vo && An.allMarkedRows === mi.SELECTED && (ta = !An.unmarkedRows.some(Gs => Gs.techId === Gr || Gs.groupId === Gr));
          const za = this.rawItemToTableItem(tr, ta, Gr, Gr);
          Un.push({
            ...za,
            isGroupRow: !0,
            disabled: Vo,
            activeStyle: this.activeStyle(za.rowData, yt),
            background: this.getDataByRowFn(za.rowData, yt.rowBackgroundColorFunction),
            disabledText: this.getDataByRowFn(za.rowData, yt.rowDisabledTooltipTextFunction),
            isCollapsedGroup: !!An.collapsedGroups.find(Gs => Gs === tr.labelId) || Vo
          });
          const cs = this.convertFlatDataSourceToTable(tr.children, yt, An, tr.labelId);
          Un.push(...cs);
        }), Un;
      }
      setAllMarkState(ve, yt) {
        const An = ve.tableDataSource.map(Un => ({
          ...Un,
          isMarked: !Un.disabled && yt
        }));
        return {
          ...ve,
          markedRows: yt ? [...An.filter(Un => Un.isMarked)] : [],
          unmarkedRows: [],
          tableDataSource: An,
          allMarkedRows: yt ? mi.SELECTED : mi.NOT_SELECTED
        };
      }
      updateTableStateByMarkedGroup(ve, yt) {
        const An = [],
          Un = [],
          tr = [],
          Gr = !ve.markedRows.find(Vo => Vo.isGroupRow && Vo.techId === yt?.techId)?.isMarked;
        return ve.tableDataSource.forEach(Vo => {
          const ta = Vo.groupId === yt?.groupId ? Gr : Vo.isMarked,
            za = {
              ...Vo,
              isMarked: Vo.groupId === yt?.groupId ? Gr : Vo.isMarked
            };
          ta && An.push(za), ve.allMarkedRows === mi.SELECTED && !ta && Un.push(za), tr.push(za);
        }), {
          ...ve,
          markedRows: An,
          unmarkedRows: Un,
          tableDataSource: tr
        };
      }
      updateTableStateByMarkedRows(ve, yt) {
        const An = [],
          Un = [],
          tr = [];
        return ve.tableDataSource.forEach(Gr => {
          const Vo = yt && Gr.techId === yt.techId ? !ve.markedRows.some(za => za.techId === yt.techId) : Gr.isMarked,
            ta = {
              ...Gr,
              isMarked: Vo
            };
          tr.push(ta);
        }), tr.forEach(Gr => {
          if (Gr.isGroupRow && !Gr.disabled) {
            const Vo = tr.filter(ta => !ta.isGroupRow && ta.groupId === Gr.groupId).every(ta => ta.isMarked);
            return Gr.isMarked = Vo, void (Vo && An.push(Gr));
          }
          Gr.isMarked && An.push(Gr), ve.allMarkedRows === mi.SELECTED && !Gr.isMarked && Un.push(Gr);
        }), {
          ...ve,
          markedRows: An,
          unmarkedRows: Un,
          tableDataSource: tr
        };
      }
      updateTableStateByToggle(ve, yt) {
        if (!yt?.groupId) return ve;
        const An = [...ve.collapsedGroups];
        if (An.includes(yt?.groupId)) {
          const Un = An.filter(tr => tr !== yt?.groupId);
          return {
            ...ve,
            collapsedGroups: Un,
            tableDataSource: this.setCollapsedRow(ve.tableDataSource, Un)
          };
        }
        return An.push(yt?.groupId), {
          ...ve,
          collapsedGroups: An,
          tableDataSource: this.setCollapsedRow(ve.tableDataSource, An)
        };
      }
      setCollapsedRow(ve, yt) {
        return ve.map(An => An.isGroupRow ? {
          ...An,
          isCollapsedGroup: !!yt.find(Un => Un === An.groupId)
        } : An);
      }
      activeStyle(ve, yt) {
        const An = "dp-table-row_state_highlighted-",
          Un = yt.rowSelectItemFunction;
        return Un && Un(ve) ? `${An}active` : `${An}inactive`;
      }
      getDataByRowFn(ve, yt) {
        if (yt) return yt(ve);
      }
      getAnimationState(ve) {
        return "object" == typeof ve && null !== ve && "_updated_row" in ve ? "updated" : "object" == typeof ve && null !== ve && "_created_row" in ve ? "create" : "";
      }
      rawItemToTableItem(ve, yt, An, Un) {
        return {
          rowData: ve,
          isMarked: yt,
          activeStyle: "",
          background: "",
          disabled: !1,
          disabledText: void 0,
          animationState: "",
          techId: Un,
          groupId: An,
          isGroupRow: !1,
          isCollapsedGroup: !1
        };
      }
      filterActiveGroupItems(ve) {
        if (ve.tableSourceState.collapsedGroups.length > 0) {
          const yt = ve.tableSourceState.collapsedGroups;
          return ve.tableSourceState.tableDataSource.filter(Un => !!Un.isGroupRow || !yt.some(tr => tr === Un.groupId));
        }
        return ve.tableSourceState.tableDataSource;
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵprov = t.Yz7({
      token: we,
      factory: we.ɵfac
    }), we;
  })();
  var jr = (() => {
    return (we = jr || (jr = {})).INIT = "INIT", we.UPDATE_TABLE_PROPS = "UPDATE_TABLE_PROPS", we.SET_MARKED = "SET_MARKED", we.SET_ALL_MARKED = "SET_ALL_MARKED", we.TOGGLE_GROUP = "TOGGLE_GROUP", we.SET_MARKED_GROUP = "SET_MARKED_GROUP", jr;
    var we;
  })();
  class as {
    constructor(Bt) {
      this.componentStore = Bt;
    }
    emit(Bt, ve) {
      switch (Bt) {
        case jr.INIT:
          this.init(ve);
          break;
        case jr.UPDATE_TABLE_PROPS:
          this.updateTableProps(ve);
          break;
        case jr.SET_MARKED:
          this.setMarked(ve);
          break;
        case jr.SET_ALL_MARKED:
          this.setAllMarked(ve);
          break;
        case jr.TOGGLE_GROUP:
          this.toggleGroup(ve);
          break;
        case jr.SET_MARKED_GROUP:
          this.setMarkedGroup(ve);
      }
    }
    init(Bt) {
      this.componentStore.init(Bt);
    }
    updateTableProps(Bt) {
      this.componentStore.updatePartialPros(Bt);
    }
    setMarked(Bt) {
      this.componentStore.setMarked(Bt);
    }
    setAllMarked(Bt) {
      this.componentStore.setAllMarked(Bt);
    }
    toggleGroup(Bt) {
      this.componentStore.toggleGroup(Bt);
    }
    setMarkedGroup(Bt) {
      this.componentStore.setMarkedGroup(Bt);
    }
  }
  class Da {
    constructor(Bt) {
      this.storeComponent = Bt;
    }
    init() {
      return this.storeComponent.selectFilteredTableState;
    }
  }
  let vo = (() => {
      class we {
        set displayType(ve) {
          this.displayTypeCssClass = ve;
        }
        get tableCellPaddingYCss() {
          return "number" == typeof this.tableCellPaddingY ? `${this.tableCellPaddingY}px` : null;
        }
        constructor(ve, yt, An) {
          this.modelService = ve, this.controller = yt, this.cdr = An, this.displayMainRowFn = this.displayMainRow.bind(this), this.dataSource = [], this.groupingType = void 0, this.isSourceExpandGrouped = !1, this.virtualLabels = null, this.columns = [], this.showExpandIcon = !0, this.showSettings = !1, this.markRowsAllowed = !1, this.markAllRowsAllowed = !1, this.allowExpandMultiplyRows = !0, this.outsideClick = !0, this.stickyGroupingLabels = !1, this.showToolbox = !0, this.usePaginator = !1, this.pageIndex = 0, this.selectedRowTechId = null, this.scrollEnd = new t.vpe(), this.rowDbClick = new t.vpe(), this.rowClick = new t.vpe(), this.outside = new t.vpe(), this.rowMark = new t.vpe(), this.allRowsMark = new t.vpe(), this.selectedItems = new t.vpe(), this.rowsSort = new t.vpe(), this.rowsFilter = new t.vpe(), this.rowContextMenu = new t.vpe(), this.openSettingsMenu = new t.vpe(), this.displayTypeCssClass = "basic", this.disableAnimation = !0, this.hoveredRowTechId = null, this.expandedRows = [], this.rowClickDelay = 250, this.tableModel$ = this.modelService.init().pipe((0, F.d)(1));
        }
        ngOnInit() {
          this.trackByFn || (this.trackByFn = this.getTrackByFn()), this.controller.emit(jr.INIT, {
            dataList: {
              dataSource: this.dataSource,
              groupingDataSource: this.dataSourceGrouped
            },
            rowFns: {
              rowDisabledConditionFunction: this.rowDisabledConditionFunction,
              rowDisabledTooltipTextFunction: this.rowDisabledTooltipTextFunction,
              rowSelectItemFunction: this.rowSelectItemFunction,
              rowBackgroundColorFunction: this.rowBackgroundColorFunction
            },
            columns: this.columnNameList,
            metaMap: this.metaMap,
            groupingType: this.groupingType
          }), this.initMarkedRowEvents();
        }
        ngOnChanges(ve) {
          this.disableAnimation = this.getDisableAnimationState(ve), this.initOperatingMode();
          const yt = {};
          this.hasChangesInRow(ve) && (this.onRowsChanged(), yt.dataList = {
            dataSource: this.dataSource,
            groupingDataSource: this.dataSourceGrouped
          }), this.hasChangesInRowActions(ve) && (yt.rowFns = {
            rowDisabledConditionFunction: this.rowDisabledConditionFunction,
            rowDisabledTooltipTextFunction: this.rowDisabledTooltipTextFunction
          }), this.hasChangesInColumns(ve) && (yt.columns = this.columnNameList, yt.metaMap = this.metaMap), this.hasChangesInGropingType(ve) && (yt.groupingType = this.groupingType), (0, jo.Yh)(yt) && this.controller.emit(jr.UPDATE_TABLE_PROPS, yt);
        }
        ngOnDestroy() {
          this.clearHoverTimer(), this.clearRowClickTimer();
        }
        get columnNameList() {
          const ve = [...this.columns];
          return this.isExpandGrouping && this.showExpandIcon && ve.unshift("expandGroupToggle"), this.markRowsAllowed && ve.unshift("selection"), this.showToolbox && ve.push("toolbox"), this.showSettings && ve.push("settings"), ve;
        }
        getTrackByFn() {
          try {
            return this.trackByFnCreator();
          } catch {
            throw Error("Need to define trackByFnCreator");
          }
        }
        trackByFnColumn(ve, yt) {
          return yt.column;
        }
        onScrollEndY() {
          this.scrollEnd.emit();
        }
        onSettingsClick() {
          this.openSettingsMenu.emit();
        }
        extraRowStyleForAnimatedAppear(ve) {
          return ve ? {
            height: `${ve.scrollHeight}px`
          } : {};
        }
        onContextMenu(ve, yt) {
          if (yt.disabled) this.updateContextRow(null);else if (this.contextRow !== yt) {
            const An = {
              coordinates: {
                x: ve.x,
                y: ve.y
              },
              row: yt.rowData
            };
            this.updateContextRow(yt), ve.preventDefault(), this.rowContextMenu.emit(An);
          } else this.updateContextRow(null);
        }
        isRowExpanded(ve) {
          return this.expandedRows.includes(ve);
        }
        isRowActive(ve) {
          return ve.techId === this.hoveredRowTechId || ve.techId === this.selectedRowTechId;
        }
        markRowAction(ve) {
          this.controller.emit(jr.SET_MARKED, {
            row: ve
          });
        }
        onRowHoverStart(ve) {
          this.clearHoverTimer(), this.updateHoveredRow(ve);
        }
        onRowHoverEnd() {
          this.clearHoverTimer(), this.hoverTimerId = window.setTimeout(() => {
            this.updateHoveredRow(null), this.hoverTimerId = void 0;
          }, 100);
        }
        onSort(ve) {
          this.rowsSort.emit({
            field: String(ve.key)
          });
        }
        onFilter(ve) {
          this.rowsFilter.emit(ve);
        }
        onRowDbClick(ve, yt) {
          yt?.stopPropagation(), this.clearRowClickTimer(), !ve.disabled && (this.rowDbClick.emit(ve), this.updateContextRow(null));
        }
        onRowClick(ve, yt) {
          yt?.stopPropagation(), !ve.disabled && (this.clearRowClickTimer(), this.rowClickTimerId = window.setTimeout(() => {
            this.rowClick.emit(ve), this.updateContextRow(null), this.rowClickTimerId = void 0;
          }, this.rowClickDelay));
        }
        onDocumentClick() {
          this.outsideClick && this.selectedRowTechId && this.outside.emit();
        }
        onMarkAllRows(ve) {
          this.controller.emit(jr.SET_ALL_MARKED, {
            markAll: !ve
          });
        }
        onCheckboxContainerClick(ve, yt, An) {
          if (!yt.disabled && !An.disabled) {
            if (ve.stopPropagation(), yt.toggle(), An.isGroupRow) return void this.setMarkedGroup(An);
            this.markRowAction(An);
          }
        }
        displayMainRow(ve, yt) {
          return !yt.isGroupRow;
        }
        displayHeader(ve, yt) {
          return yt.isGroupRow;
        }
        toggleGroupExpand(ve) {
          ve.disabled || (this.disableAnimation = !0, this.controller.emit(jr.TOGGLE_GROUP, {
            row: ve
          }));
        }
        onRowsChanged() {}
        hasChangesInRowActions(ve) {
          return !!ve.rowDisabledConditionFunction && !ve.rowDisabledConditionFunction.firstChange && ve.rowDisabledConditionFunction.currentValue !== ve.rowDisabledConditionFunction.previousValue || !!ve.rowDisabledTooltipTextFunction && !ve.rowDisabledTooltipTextFunction.firstChange && ve.rowDisabledTooltipTextFunction.currentValue !== ve.rowDisabledTooltipTextFunction.previousValue;
        }
        getDisableAnimationState(ve) {
          return !!this.hasChangesInPageIndex(ve) || !this.hasChangesInRow(ve) || this.hasEmptyRows(ve);
        }
        hasChangesInPageIndex(ve) {
          return !!this.usePaginator && !!ve.pageIndex && ve.pageIndex.currentValue !== ve.pageIndex.previousValue;
        }
        hasEmptyRows(ve) {
          return Array.isArray(ve.dataSource?.currentValue) ? 0 === ve.dataSource?.currentValue.length : !Array.isArray(ve.dataSourceGrouped?.currentValue) || 0 === ve.dataSourceGrouped?.currentValue.length || ve.dataSourceGrouped?.currentValue.every(yt => 0 === yt.children.length);
        }
        hasChangesInRow(ve) {
          const yt = this.isChanged(ve.dataSourceGrouped);
          return this.isChanged(ve.dataSource) || yt;
        }
        isChanged(ve) {
          return ve && !ve.firstChange && !(0, ke.vZ)(ve.currentValue, ve.previousValue);
        }
        hasChangesInGropingType(ve) {
          return !!ve.groupingType && !ve.groupingType.firstChange && ve.groupingType.previousValue !== ve.groupingType.currentValue;
        }
        hasChangesInColumns(ve) {
          return !!ve.columns && !ve.columns.firstChange && String(ve.columns.previousValue) !== String(ve.columns.currentValue);
        }
        initOperatingMode() {
          this.isGrouping = Boolean(this.dataSourceGrouped), this.isExpandGrouping = Boolean(this.dataSourceExpandGrouped || this.isSourceExpandGrouped);
        }
        updateHoveredRow(ve) {
          this.hoveredRowTechId = ve?.techId ?? null, this.cdr.markForCheck();
        }
        updateContextRow(ve) {
          this.contextRow = ve;
        }
        clearHoverTimer() {
          void 0 !== this.hoverTimerId && (clearTimeout(this.hoverTimerId), this.hoverTimerId = void 0);
        }
        clearRowClickTimer() {
          void 0 !== this.rowClickTimerId && (clearTimeout(this.rowClickTimerId), this.rowClickTimerId = void 0);
        }
        setMarkedGroup(ve) {
          this.controller.emit(jr.SET_MARKED_GROUP, {
            row: ve
          });
        }
        initMarkedRowEvents() {
          this.tableModel$.pipe((0, B.U)(ve => ({
            allMarked: ve.tableSourceState.allMarkedRows === mi.SELECTED,
            markedRows: ve.tableSourceState.markedRows.filter(yt => !yt.isGroupRow).map(yt => yt.rowData),
            unmarkedRows: ve.tableSourceState.unmarkedRows.filter(yt => !yt.isGroupRow).map(yt => yt.rowData)
          })), (0, y.x)((ve, yt) => ve.allMarked === yt.allMarked && (0, ke.vZ)(ve.markedRows, yt.markedRows) && (0, ke.vZ)(ve.unmarkedRows, yt.unmarkedRows))).subscribe(ve => {
            this.selectedItems.emit(ve);
          });
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(Da), t.Y36(as), t.Y36(t.sBO));
      }, we.ɵdir = t.lG2({
        type: we,
        hostVars: 4,
        hostBindings: function (ve, yt) {
          1 & ve && t.NdJ("click", function () {
            return yt.onDocumentClick();
          }, !1, t.evT), 2 & ve && (t.Tol(yt.displayTypeCssClass), t.Udp("--dp-table-cell-padding-y", yt.tableCellPaddingYCss));
        },
        inputs: {
          tableCellPaddingY: "tableCellPaddingY",
          dataSource: "dataSource",
          dataSourceGrouped: "dataSourceGrouped",
          groupingType: "groupingType",
          dataSourceExpandGrouped: "dataSourceExpandGrouped",
          isSourceExpandGrouped: "isSourceExpandGrouped",
          virtualLabels: "virtualLabels",
          columns: "columns",
          metaMap: "metaMap",
          groupingElementColumn: "groupingElementColumn",
          showExpandIcon: "showExpandIcon",
          tdCellsTemplate: "tdCellsTemplate",
          tdHeaderCellsTemplate: "tdHeaderCellsTemplate",
          extraRowTemplate: "extraRowTemplate",
          sortParams: "sortParams",
          showSettings: "showSettings",
          markRowsAllowed: "markRowsAllowed",
          markAllRowsAllowed: "markAllRowsAllowed",
          allowExpandMultiplyRows: "allowExpandMultiplyRows",
          outsideClick: "outsideClick",
          stickyGroupingLabels: "stickyGroupingLabels",
          showToolbox: "showToolbox",
          usePaginator: "usePaginator",
          pageIndex: "pageIndex",
          selectedRowTechId: "selectedRowTechId",
          displayType: "displayType",
          rowDisabledConditionFunction: "rowDisabledConditionFunction",
          rowDisabledTooltipTextFunction: "rowDisabledTooltipTextFunction",
          rowSelectItemFunction: "rowSelectItemFunction",
          rowBackgroundColorFunction: "rowBackgroundColorFunction",
          trackByFnCreator: "trackByFnCreator"
        },
        outputs: {
          scrollEnd: "scrollEnd",
          rowDbClick: "rowDbClick",
          rowClick: "rowClick",
          outside: "outside",
          rowMark: "rowMark",
          allRowsMark: "allRowsMark",
          selectedItems: "selectedItems",
          rowsSort: "rowsSort",
          rowsFilter: "rowsFilter",
          rowContextMenu: "rowContextMenu",
          openSettingsMenu: "openSettingsMenu"
        },
        features: [t.TTD]
      }), we;
    })(),
    As = class extends as {
      constructor(Bt) {
        super(Bt);
      }
    };
  As.ɵfac = function (Bt) {
    return new (Bt || As)(t.LFG(cr));
  }, As.ɵprov = t.Yz7({
    token: As,
    factory: As.ɵfac
  });
  let dl = class extends Da {
    constructor(Bt) {
      super(Bt);
    }
  };
  function pn(we, Bt) {
    1 & we && (t.TgZ(0, "span", 9), t._uU(1, "/"), t.qZA());
  }
  function sn(we, Bt) {
    1 & we && (t.TgZ(0, "span", 10), t._uU(1, "\xA0/\xA0"), t.qZA());
  }
  function Jt(we, Bt) {
    1 & we && t.GkF(0);
  }
  dl.ɵfac = function (Bt) {
    return new (Bt || dl)(t.LFG(cr));
  }, dl.ɵprov = t.Yz7({
    token: dl,
    factory: dl.ɵfac
  });
  const Si = function (we) {
    return {
      title: we
    };
  };
  function mn(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Jt, 1, 0, "ng-container", 11), t.BQk()), 2 & we) {
      const ve = t.oxw().$implicit;
      t.oxw(2);
      const yt = t.MAs(2);
      t.xp6(1), t.Q6J("ngTemplateOutlet", yt)("ngTemplateOutletContext", t.VKq(2, Si, ve));
    }
  }
  function Pe(we, Bt) {
    1 & we && t.GkF(0);
  }
  function at(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Pe, 1, 0, "ng-container", 11), t.BQk()), 2 & we) {
      const ve = t.oxw().$implicit;
      t.oxw(2);
      const yt = t.MAs(4);
      t.xp6(1), t.Q6J("ngTemplateOutlet", yt)("ngTemplateOutletContext", t.VKq(2, Si, ve));
    }
  }
  function Zt(we, Bt) {
    1 & we && t.GkF(0);
  }
  function Li(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Zt, 1, 0, "ng-container", 11), t.BQk()), 2 & we) {
      const ve = t.oxw().$implicit;
      t.oxw(2);
      const yt = t.MAs(6);
      t.xp6(1), t.Q6J("ngTemplateOutlet", yt)("ngTemplateOutletContext", t.VKq(2, Si, ve));
    }
  }
  function mo(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, pn, 2, 0, "span", 4), t.YNc(2, sn, 2, 0, "span", 5), t.TgZ(3, "div", 6), t.YNc(4, mn, 2, 4, "ng-container", 7), t.YNc(5, at, 2, 4, "ng-container", 7), t.YNc(6, Li, 2, 4, "ng-container", 8), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.$implicit,
        yt = Bt.index,
        An = t.oxw().index,
        Un = t.oxw();
      t.xp6(1), t.Q6J("ngIf", An > 0 && 0 === yt), t.xp6(1), t.Q6J("ngIf", yt > 0), t.xp6(1), t.Q6J("luTooltip", Un.getTooltip(ve))("canOpen", !!Un.getTooltip(ve))("ngSwitch", ve.type), t.xp6(1), t.Q6J("ngSwitchCase", "SORT"), t.xp6(1), t.Q6J("ngSwitchCase", "FILTER");
    }
  }
  function Xo(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, mo, 7, 7, "ng-container", 0), t.BQk()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("ngForOf", ve);
    }
  }
  function Cr(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 17), 2 & we) {
      const ve = t.oxw().title,
        yt = t.oxw();
      t.Q6J("icon", yt.getNameIconParams(ve.name).icon)("size", yt.getNameIconParams(ve.name).size);
    }
  }
  function Xr(we, Bt) {
    if (1 & we && t._UZ(0, "span", 18), 2 & we) {
      const ve = t.oxw().title;
      t.Q6J("innerHTML", ve.name, t.oJD);
    }
  }
  function ys(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 19), 2 & we) {
      const ve = t.oxw(2);
      t.Q6J("icon", ve.sortIconName)("size", 16);
    }
  }
  function Hs(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "div", 12), t.NdJ("click", function () {
        const Un = t.CHM(ve).title,
          tr = t.oxw();
        return t.KtG(tr.onSortTitleClick(Un));
      }), t.ynx(1, 13), t.YNc(2, Cr, 1, 2, "lu-svg-icon", 14), t.YNc(3, Xr, 1, 1, "span", 15), t.BQk(), t.YNc(4, ys, 1, 2, "lu-svg-icon", 16), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.title,
        yt = t.oxw();
      t.xp6(1), t.Q6J("ngSwitch", ve.nameType), t.xp6(1), t.Q6J("ngSwitchCase", "icon"), t.xp6(2), t.Q6J("ngIf", yt.isSortIconShow(ve));
    }
  }
  function la(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.ynx(0), t.TgZ(1, "lu-option", 26), t.NdJ("click", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(4);
        return t.KtG(tr.onFilterTitleSelect(Un));
      }), t._uU(2), t.qZA(), t.BQk();
    }
    if (2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("value", ve.code), t.xp6(1), t.hij(" ", ve.name, " ");
    }
  }
  function St(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, la, 3, 2, "ng-container", 0), t.BQk()), 2 & we) {
      const ve = Bt.ngIf;
      t.xp6(1), t.Q6J("ngForOf", ve);
    }
  }
  function Wi(we, Bt) {
    if (1 & we && t.YNc(0, St, 2, 1, "ng-container", 25), 2 & we) {
      const ve = t.oxw().title;
      t.Q6J("ngIf", ve.filterItems);
    }
  }
  const Pt = function () {
    return ["bottom-right", "bottom-left"];
  };
  function Ki(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "div", 20), t.NdJ("click", function () {
        t.CHM(ve);
        const An = t.MAs(4);
        return t.KtG(An.toggle());
      }), t._UZ(1, "span", 18)(2, "lu-svg-icon", 21), t.TgZ(3, "lu-dropdown", 22, 23), t.YNc(5, Wi, 1, 1, "ng-template", null, 24, t.W1O), t.qZA()();
    }
    if (2 & we) {
      const ve = Bt.title,
        yt = t.MAs(4),
        An = t.MAs(6),
        Un = t.oxw();
      t.Q6J("formControl", Un.filterControl), t.xp6(1), t.Q6J("innerHTML", ve.name, t.oJD), t.xp6(1), t.Q6J("icon", "chevron-down")("size", 16)("luChevronRotate", yt), t.xp6(1), t.Q6J("content", An)("withArrow", !0)("positions", t.DdM(8, Pt));
    }
  }
  function Nr(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 17), 2 & we) {
      const ve = t.oxw().title,
        yt = t.oxw();
      t.Q6J("icon", yt.getNameIconParams(ve.name).icon)("size", yt.getNameIconParams(ve.name).size);
    }
  }
  function oa(we, Bt) {
    if (1 & we && t._UZ(0, "span", 18), 2 & we) {
      const ve = t.oxw().title;
      t.Q6J("innerHTML", ve.name, t.oJD);
    }
  }
  function er(we, Bt) {
    if (1 & we && (t.TgZ(0, "div", 27), t.ynx(1, 13), t.YNc(2, Nr, 1, 2, "lu-svg-icon", 14), t.YNc(3, oa, 1, 1, "span", 15), t.BQk(), t.qZA()), 2 & we) {
      const ve = Bt.title;
      t.xp6(1), t.Q6J("ngSwitch", ve.nameType), t.xp6(1), t.Q6J("ngSwitchCase", "icon");
    }
  }
  let Qr = (() => {
    class we {
      constructor() {
        this.titleGroups = [[]], this.sortAction = new t.vpe(), this.filterAction = new t.vpe(), this.filterControl = new Go.NI("Палата");
      }
      getTooltip(ve) {
        return ve.tooltip || "";
      }
      get sortIconName() {
        switch (this.sortParams?.direction) {
          case "asc":
            return "sorting-increase";
          case "desc":
            return "sorting-decrease";
          default:
            return "";
        }
      }
      getNameIconParams(ve) {
        const [yt, An] = ve.split(":");
        return {
          icon: yt,
          size: An ? Number(An) : 16
        };
      }
      isSortIconShow(ve) {
        return this.sortParams?.field === ve.key;
      }
      isTitleHighlighted(ve) {
        return "SIMPLE" !== ve.type;
      }
      onSortTitleClick(ve) {
        this.emitSortEvent(ve);
      }
      onFilterTitleSelect(ve) {
        this.emitFilterEvent(ve);
      }
      emitSortEvent(ve) {
        this.sortAction.emit(ve);
      }
      emitFilterEvent(ve) {
        this.filterAction.emit(ve);
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵcmp = t.Xpm({
      type: we,
      selectors: [["dp-table-header-cell"]],
      inputs: {
        titleGroups: "titleGroups",
        sortParams: "sortParams"
      },
      outputs: {
        sortAction: "sortAction",
        filterAction: "filterAction"
      },
      decls: 7,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["sortHeaderCellTemplate", ""], ["filterHeaderCellTemplate", ""], ["defaultHeaderCellTemplate", ""], ["class", "__title-groups-divider", 4, "ngIf"], ["lu-text", "", "color", "muted", 4, "ngIf"], [3, "luTooltip", "canOpen", "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "__title-groups-divider"], ["lu-text", "", "color", "muted"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dp-table-header-item", "dp-table-header-item_state_highlighted", 3, "click"], [3, "ngSwitch"], [3, "icon", "size", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchDefault"], ["class", "dp-table-header-item__postfix", 3, "icon", "size", 4, "ngIf"], [3, "icon", "size"], [3, "innerHTML"], [1, "dp-table-header-item__postfix", 3, "icon", "size"], ["luDropdownButton", "", 1, "dp-table-header-item", "dp-table-header-item_state_highlighted", 3, "formControl", "click"], [1, "dp-table-header-item__postfix", 3, "icon", "size", "luChevronRotate"], [3, "content", "withArrow", "positions"], ["dropdown", ""], ["content", ""], [4, "ngIf"], [3, "value", "click"], [1, "dp-table-header-item"]],
      template: function (ve, yt) {
        1 & ve && (t.YNc(0, Xo, 2, 1, "ng-container", 0), t.YNc(1, Hs, 5, 3, "ng-template", null, 1, t.W1O), t.YNc(3, Ki, 7, 9, "ng-template", null, 2, t.W1O), t.YNc(5, er, 4, 2, "ng-template", null, 3, t.W1O)), 2 & ve && t.Q6J("ngForOf", yt.titleGroups);
      },
      dependencies: [C.sg, C.O5, C.tP, C.RF, C.n9, C.ED, Go.JJ, Go.oH, ji.G, e.$, ti.c, A.k, m.NZ, a.q, N.$],
      styles: ["[_nghost-%COMP%]{cursor:default;display:flex;flex-wrap:wrap;align-items:flex-end;height:100%}.__title-groups-divider[_ngcontent-%COMP%]{margin:0 var(--lu-base-gutter)}.dp-table-header-item[_ngcontent-%COMP%]{display:flex;align-items:flex-end;font-weight:400;font-size:13px;line-height:20px;color:var(--lu-black-54);--lu-svg-icon-color: var(--lu-black-54)}.dp-table-header-item_state_highlighted[_ngcontent-%COMP%]{cursor:pointer;color:var(--lu-primary)}.dp-table-header-item_state_highlighted[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-primary)}.dp-table-header-item__postfix[_ngcontent-%COMP%]{margin-left:5px}"],
      changeDetection: 0
    }), we;
  })();
  function Il(we, Bt) {
    1 & we && t._UZ(0, "div", 7);
  }
  function Uc(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 8), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("icon", ve.iconName)("size", ve.iconSize);
    }
  }
  function Kl(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 8), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("icon", ve.iconName)("size", ve.iconSize);
    }
  }
  const Wl = function () {
    return [];
  };
  function nc(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Il, 1, 0, "div", 3), t.TgZ(2, "div", 4), t.YNc(3, Uc, 1, 2, "lu-svg-icon", 5), t._UZ(4, "span", 6), t.YNc(5, Kl, 1, 2, "lu-svg-icon", 5), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.$implicit,
        yt = Bt.index;
      t.xp6(1), t.Q6J("ngIf", yt > 0), t.xp6(1), t.Q6J("ngStyle", ve.textCssStyle)("luTooltip", ve.tooltip || "")("withArrow", !1)("canOpen", !!ve.tooltip), t.xp6(1), t.Q6J("ngForOf", (null == ve ? null : ve.prefixIcons) || t.DdM(8, Wl)), t.xp6(1), t.Q6J("innerHTML", ve.text, t.oJD), t.xp6(1), t.Q6J("ngForOf", (null == ve ? null : ve.suffixIcons) || t.DdM(9, Wl));
    }
  }
  function Zc(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, nc, 6, 10, "ng-container", 2), t.BQk()), 2 & we) {
      const ve = t.oxw().ngIf;
      t.xp6(1), t.Q6J("ngForOf", ve.chunks);
    }
  }
  function Yc(we, Bt) {
    if (1 & we && (t.ynx(0), t.TgZ(1, "div", 1), t.YNc(2, Zc, 2, 1, "ng-container", 0), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw();
      t.xp6(1), t.ekj("label--type-sticky", yt.isSticky), t.Q6J("ngStyle", ve.cssStyle), t.xp6(1), t.Q6J("ngIf", null == ve.chunks ? null : ve.chunks.length);
    }
  }
  let nu = (() => {
    class we {
      constructor() {
        this.isSticky = !1;
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵcmp = t.Xpm({
      type: we,
      selectors: [["dp-grouping-label"]],
      inputs: {
        viewData: "viewData",
        isSticky: "isSticky"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "label", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["class", "label-chunk-divider", 4, "ngIf"], [1, "label-chunk", 3, "ngStyle", "luTooltip", "withArrow", "canOpen"], [3, "icon", "size", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "label-chunk-divider"], [3, "icon", "size"]],
      template: function (ve, yt) {
        1 & ve && t.YNc(0, Yc, 3, 4, "ng-container", 0), 2 & ve && t.Q6J("ngIf", yt.viewData);
      },
      dependencies: [C.sg, C.O5, C.PC, a.q, N.$],
      styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.label[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content;border-radius:3px;font-weight:600;font-size:13px;line-height:24px;color:var(--lu-black-80);background-color:var(--lu-black-10);cursor:pointer}.label--type-sticky[_ngcontent-%COMP%]{border-radius:3px 3px 0 0}.label-chunk[_ngcontent-%COMP%]{display:flex;padding:0 var(--lu-base-gutter)}.label-chunk-divider[_ngcontent-%COMP%]{width:1px;height:calc(var(--lu-base-gutter) * 2);background-color:var(--lu-black-20)}"],
      changeDetection: 0
    }), we;
  })();
  function kl(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-grouping-label", 3), t.NdJ("click", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw();
        return t.KtG(tr.onLabelSelect(Un));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw();
      t.Q6J("ngClass", "row" === yt.displayType ? "__row-label" : "__label")("viewData", ve);
    }
  }
  function mu(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-grouping-label", 3), t.NdJ("click", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw();
        return t.KtG(tr.onLabelSelect(Un));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw();
      t.Q6J("ngClass", "row" === yt.displayType ? "__row-label" : "__label")("viewData", ve);
    }
  }
  const Wc = function (we) {
    return {
      __row: we
    };
  };
  let gc = (() => {
    class we {
      constructor() {
        this.topOffset = 0, this.bottomOffset = 0, this.displayType = "column", this.selectLabel = new t.vpe(), this.topLabels = [], this.bottomLabels = [];
      }
      set labels(ve) {
        this.initLabels(ve);
      }
      onLabelSelect(ve) {
        this.selectLabel.emit(ve);
      }
      get hostTop() {
        return `${this.topOffset}px`;
      }
      get hostBottom() {
        return `${this.bottomOffset}px`;
      }
      initLabels(ve) {
        this.topLabels = [], this.bottomLabels = [], (ve || []).forEach(yt => {
          switch (yt.position) {
            case "TOP":
              this.topLabels.push(yt);
              break;
            case "BOTTOM":
              this.bottomLabels.push(yt);
          }
        });
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵcmp = t.Xpm({
      type: we,
      selectors: [["dp-virtual-grouping-labels"]],
      hostVars: 4,
      hostBindings: function (ve, yt) {
        2 & ve && t.Udp("top", yt.hostTop)("bottom", yt.hostBottom);
      },
      inputs: {
        topOffset: "topOffset",
        bottomOffset: "bottomOffset",
        displayType: "displayType",
        labels: "labels"
      },
      outputs: {
        selectLabel: "selectLabel"
      },
      decls: 4,
      vars: 8,
      consts: [["id", "groupingLabelsTopContainer", 1, "group-container", 3, "ngClass"], [3, "ngClass", "viewData", "click", 4, "ngFor", "ngForOf"], ["id", "groupingLabelsBottomContainer", 1, "group-container", 3, "ngClass"], [3, "ngClass", "viewData", "click"]],
      template: function (ve, yt) {
        1 & ve && (t.TgZ(0, "div", 0), t.YNc(1, kl, 1, 2, "dp-grouping-label", 1), t.qZA(), t.TgZ(2, "div", 2), t.YNc(3, mu, 1, 2, "dp-grouping-label", 1), t.qZA()), 2 & ve && (t.Q6J("ngClass", t.VKq(4, Wc, "row" === yt.displayType && yt.topLabels.length)), t.xp6(1), t.Q6J("ngForOf", yt.topLabels), t.xp6(1), t.Q6J("ngClass", t.VKq(6, Wc, "row" === yt.displayType && yt.bottomLabels.length)), t.xp6(1), t.Q6J("ngForOf", yt.bottomLabels));
      },
      dependencies: [C.mk, C.sg, nu],
      styles: ["[_nghost-%COMP%]{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;width:calc(100% - 16px)}.group-container[_ngcontent-%COMP%]{z-index:9}.__label[_ngcontent-%COMP%]{margin-top:8px;margin-left:8px}.__row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;padding-left:8px;padding-top:4px;padding-bottom:4px;pointer-events:auto;background-color:var(--lu-white)}.__row-label[_ngcontent-%COMP%]{flex-shrink:0;cursor:pointer}.__row-label[_ngcontent-%COMP%] + .__row-label[_ngcontent-%COMP%]{margin-left:8px}"],
      changeDetection: 0
    }), we;
  })();
  function ir(we, Bt) {
    1 & we && t._UZ(0, "div", 9);
  }
  function Hr(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 10), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("icon", ve.iconName)("size", ve.iconSize);
    }
  }
  function Ar(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 10), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("icon", ve.iconName)("size", ve.iconSize);
    }
  }
  const Ds = function () {
    return [];
  };
  function wa(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, ir, 1, 0, "div", 5), t.TgZ(2, "div", 6), t.YNc(3, Hr, 1, 2, "lu-svg-icon", 7), t._UZ(4, "span", 8), t.YNc(5, Ar, 1, 2, "lu-svg-icon", 7), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.$implicit,
        yt = Bt.index;
      t.xp6(1), t.Q6J("ngIf", yt > 0), t.xp6(1), t.Q6J("ngStyle", ve.textCssStyle)("luTooltip", ve.tooltip || "")("withArrow", !1)("canOpen", !!ve.tooltip), t.xp6(1), t.Q6J("ngForOf", (null == ve ? null : ve.prefixIcons) || t.DdM(8, Ds)), t.xp6(1), t.Q6J("innerHTML", ve.text, t.oJD), t.xp6(1), t.Q6J("ngForOf", (null == ve ? null : ve.suffixIcons) || t.DdM(9, Ds));
    }
  }
  function Ua(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, wa, 6, 10, "ng-container", 4), t.BQk()), 2 & we) {
      const ve = t.oxw().ngIf;
      t.xp6(1), t.Q6J("ngForOf", ve.chunks);
    }
  }
  function hl(we, Bt) {
    if (1 & we && (t.ynx(0), t.TgZ(1, "div", 1)(2, "div", 2), t.YNc(3, Ua, 2, 1, "ng-container", 0), t.qZA(), t._UZ(4, "dp-single-icon", 3), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw();
      t.xp6(2), t.Q6J("ngStyle", ve.cssStyle), t.xp6(1), t.Q6J("ngIf", null == ve.chunks ? null : ve.chunks.length), t.xp6(1), t.Q6J("icon", yt.singleIconWrapper);
    }
  }
  let va = (() => {
      class we {
        get singleIconWrapper() {
          return {
            type: "char",
            iconData: {
              value: this.viewData.totalCounts.toString(),
              size: "normal",
              color: "var(--lu-black-54)"
            },
            figureData: {
              color: "var(--lu-black-10)",
              figure: "circle",
              size: 25
            }
          };
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-grouping-row"]],
        inputs: {
          viewData: "viewData"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "group-row"], [3, "ngStyle"], [3, "icon"], [4, "ngFor", "ngForOf"], ["class", "label-chunk-divider", 4, "ngIf"], [1, "label-chunk", 3, "ngStyle", "luTooltip", "withArrow", "canOpen"], [3, "icon", "size", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "label-chunk-divider"], [3, "icon", "size"]],
        template: function (ve, yt) {
          1 & ve && t.YNc(0, hl, 5, 3, "ng-container", 0), 2 & ve && t.Q6J("ngIf", yt.viewData.groupingLabel);
        },
        dependencies: [C.sg, C.O5, C.PC, a.q, N.$, fi._y],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.group-row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.label-chunk[_ngcontent-%COMP%]{display:flex;padding:0 var(--lu-base-gutter)}.label-chunk-divider[_ngcontent-%COMP%]{width:1px;height:calc(var(--lu-base-gutter) * 2);background-color:var(--lu-black-20)}"],
        changeDetection: 0
      }), we;
    })(),
    wc = (() => {
      class we {
        transform(ve, yt, An) {
          const Un = function Ln(we, Bt, ve) {
            return Boolean(ve.get(we)?.columnType?.some(yt => Bt.includes(yt)));
          }(ve, yt, An);
          return {
            __cell: !Un,
            "__cell-sticky": Un,
            "__cell-sticky--first": this.firstStickyElement(ve, yt, An)
          };
        }
        firstStickyElement(ve, yt, An) {
          const Un = Array.from(An).find(([, tr]) => tr.columnType?.some(Gr => yt.includes(Gr)));
          return !!Un && Un[0] === ve;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵpipe = t.Yjl({
        name: "headerCellClasses",
        type: we,
        pure: !0
      }), we;
    })(),
    zs = (() => {
      class we {
        transform(ve) {
          if (!ve) return null;
          let yt = !1;
          ve.tableSourceState.allMarkedRows === mi.SELECTED && (yt = 0 === ve.tableSourceState.unmarkedRows.length || null);
          const An = this.createColumns(ve),
            Un = ve.groupingType !== Fi.yh.EXPAND;
          return {
            tableSource: ve.tableSourceState.tableDataSource,
            columnDef: An,
            columnList: ve.tableDisplayProps.columns || [],
            allMarked: yt,
            isLabelGroupDisplay: Un,
            groupingRowCells: this.getGroupingRowCells(An, Un)
          };
        }
        getGroupingRowCells(ve, yt) {
          const An = ["groupHeader"];
          return yt || An.unshift("expand"), ve.some(Un => "selection" === Un.column) && An.unshift("selection"), An;
        }
        createColumns(ve) {
          const {
              columns: yt,
              metaMap: An
            } = ve.tableDisplayProps,
            Un = new wc();
          return (yt || []).map(Gr => {
            const Vo = "selection" === Gr,
              ta = "settings" === Gr,
              za = "toolbox" === Gr,
              cs = An?.get(Gr),
              Gs = Un.transform(Gr, ["stickyEnd", "sticky"], An);
            return {
              column: Gr,
              styles: cs?.tdStyle || "",
              isSelection: Vo,
              isSetting: ta,
              isToolbox: za,
              sticky: cs?.columnType?.includes("sticky") ?? !1,
              stickyEnd: ta || (cs?.columnType?.includes("stickyEnd") ?? !1),
              isCustom: cs?.columnType?.includes("custom") ?? !1,
              headerClass: Gs,
              thTitleGroups: cs?.thTitleGroups || []
            };
          });
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵpipe = t.Yjl({
        name: "tableViewData",
        type: we,
        pure: !0
      }), we;
    })();
  const ic = ["cdkTable"];
  function _c(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-virtual-grouping-labels", 4), t.NdJ("selectLabel", function (An) {
        t.CHM(ve);
        const Un = t.oxw(2);
        return t.KtG(Un.onSelectGroupingLabel(An));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = t.oxw(2);
      t.Q6J("topOffset", ve.virtualLabels.offsets.top)("bottomOffset", ve.virtualLabels.offsets.bottom)("displayType", ve.virtualLabels.direction)("labels", ve.groupingLabels);
    }
  }
  function zc(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-header-cell", 15)(1, "lu-checkbox", 16), t.NdJ("ngModelChange", function () {
        t.CHM(ve);
        const An = t.oxw(4).ngIf,
          Un = t.oxw();
        return t.KtG(Un.onMarkAllRows(An.allMarked));
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = t.oxw(4).ngIf,
        yt = t.oxw();
      t.xp6(1), t.Q6J("ngModel", ve.allMarked)("disabled", !yt.markAllRowsAllowed);
    }
  }
  function Gc(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, zc, 2, 2, "cdk-header-cell", 14), t.BQk());
  }
  function au(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-header-cell", 18)(1, "div", 19)(2, "lu-svg-icon", 20), t.NdJ("click", function () {
        t.CHM(ve);
        const An = t.oxw(5);
        return t.KtG(An.onSettingsClick());
      }), t.qZA()()();
    }
    2 & we && (t.xp6(1), t.Q6J("luTooltip", "Настройка столбцов"), t.xp6(1), t.Q6J("size", 16));
  }
  function xu(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, au, 3, 2, "cdk-header-cell", 17), t.BQk());
  }
  function vs(we, Bt) {
    1 & we && t._UZ(0, "cdk-header-cell");
  }
  function La(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, vs, 1, 0, "cdk-header-cell", 21), t.BQk());
  }
  function kc(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Ut = function (we) {
    return {
      columnDef: we
    };
  };
  function Vn(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, kc, 1, 0, "ng-container", 27), t.BQk()), 2 & we) {
      const ve = t.oxw(4).$implicit,
        yt = t.oxw(3);
      t.xp6(1), t.Q6J("ngTemplateOutlet", yt.tdHeaderCellsTemplate)("ngTemplateOutletContext", t.VKq(2, Ut, ve.column));
    }
  }
  function Gt(we, Bt) {
    if (1 & we && (t.TgZ(0, "div"), t._uU(1), t.qZA()), 2 & we) {
      const ve = t.oxw(4).$implicit;
      t.xp6(1), t.hij("Не указан теплейт для ", ve.column, "");
    }
  }
  function xi(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Vn, 2, 4, "ng-container", 24), t.YNc(2, Gt, 2, 1, "ng-template", null, 26, t.W1O), t.BQk()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(6);
      t.xp6(1), t.Q6J("ngIf", yt.tdHeaderCellsTemplate)("ngIfElse", ve);
    }
  }
  function so(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-table-header-cell", 28), t.NdJ("sortAction", function (An) {
        t.CHM(ve);
        const Un = t.oxw(6);
        return t.KtG(Un.onSort(An));
      })("filterAction", function (An) {
        t.CHM(ve);
        const Un = t.oxw(6);
        return t.KtG(Un.onFilter(An));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = t.oxw(3).$implicit,
        yt = t.oxw(3);
      t.Q6J("titleGroups", ve.thTitleGroups)("sortParams", yt.sortParams);
    }
  }
  function yr(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-header-cell", 23), t.YNc(1, xi, 4, 2, "ng-container", 24), t.YNc(2, so, 1, 2, "ng-template", null, 25, t.W1O), t.qZA()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(2).$implicit;
      t.Akn(yt.styles), t.Q6J("ngClass", yt.headerClass), t.xp6(1), t.Q6J("ngIf", yt.isCustom)("ngIfElse", ve);
    }
  }
  function Rr(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, yr, 4, 5, "cdk-header-cell", 22), t.BQk());
  }
  function Ns(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-cell", 30), t.NdJ("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.MAs(2),
          Vo = t.oxw(5);
        return t.KtG(Vo.onCheckboxContainerClick(An, Gr, tr));
      }), t.TgZ(1, "lu-checkbox", 31, 32), t.NdJ("click", function (An) {
        return An.stopPropagation();
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("ngModel", ve.isMarked);
    }
  }
  function Ga(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Ns, 3, 1, "cdk-cell", 29), t.BQk());
  }
  function Ma(we, Bt) {
    1 & we && t._UZ(0, "cdk-cell");
  }
  function Ia(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Ma, 1, 0, "cdk-cell", 33), t.BQk());
  }
  function Ea(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Ll = function (we, Bt, ve) {
    return {
      columnDef: we,
      element: Bt,
      isHovered: ve
    };
  };
  function Za(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell"), t.YNc(1, Ea, 1, 0, "ng-container", 27), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(2).$implicit,
        An = t.oxw(3);
      t.xp6(1), t.Q6J("ngTemplateOutlet", An.tdCellsTemplate)("ngTemplateOutletContext", t.kEZ(2, Ll, yt.column, ve.rowData, An.isRowActive(ve)));
    }
  }
  function sl(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Za, 2, 6, "cdk-cell", 33), t.BQk());
  }
  function pl(we, Bt) {
    1 & we && t.GkF(0);
  }
  const ql = function (we, Bt, ve) {
    return {
      "h1-table-cell": we,
      __cell: Bt,
      "__cell-sticky": ve
    };
  };
  function vc(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 35), t.YNc(1, pl, 1, 0, "ng-container", 27), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(2).$implicit,
        An = t.oxw(3);
      t.Akn(yt.styles), t.Q6J("ngClass", t.kEZ(5, ql, !(yt.stickyEnd || yt.sticky), !(yt.stickyEnd || yt.sticky), yt.stickyEnd || yt.sticky)), t.xp6(1), t.Q6J("ngTemplateOutlet", An.tdCellsTemplate)("ngTemplateOutletContext", t.kEZ(9, Ll, yt.column, ve.rowData, An.isRowActive(ve)));
    }
  }
  function oc(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, vc, 2, 13, "cdk-cell", 34), t.BQk());
  }
  function pc(we, Bt) {
    if (1 & we && (t.ynx(0, 13), t.YNc(1, Gc, 2, 0, "ng-container", 0), t.YNc(2, xu, 2, 0, "ng-container", 0), t.YNc(3, La, 2, 0, "ng-container", 0), t.YNc(4, Rr, 2, 0, "ng-container", 0), t.YNc(5, Ga, 2, 0, "ng-container", 0), t.YNc(6, Ia, 2, 0, "ng-container", 0), t.YNc(7, sl, 2, 0, "ng-container", 0), t.YNc(8, oc, 2, 0, "ng-container", 0), t.BQk()), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("cdkColumnDef", ve.column)("stickyEnd", ve.stickyEnd)("sticky", ve.sticky), t.xp6(1), t.Q6J("ngIf", ve.isSelection), t.xp6(1), t.Q6J("ngIf", ve.isSetting), t.xp6(1), t.Q6J("ngIf", ve.isToolbox), t.xp6(1), t.Q6J("ngIf", !(ve.isSetting && ve.isSelection)), t.xp6(1), t.Q6J("ngIf", ve.isSelection), t.xp6(1), t.Q6J("ngIf", ve.isSetting), t.xp6(1), t.Q6J("ngIf", ve.isToolbox), t.xp6(1), t.Q6J("ngIf", !(ve.isSetting && ve.isSelection));
    }
  }
  function ec(we, Bt) {
    if (1 & we && t._UZ(0, "cdk-header-row", 36), 2 & we) {
      const ve = t.oxw(3);
      t.ekj("dp-table-header-row--has-items", ve.dataSource.length > 0);
    }
  }
  const Mc = function (we) {
    return {
      "element-hide": we
    };
  };
  function rc(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 41), t._UZ(1, "dp-grouping-label", 42), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("ngClass", t.VKq(4, Mc, !ve.isGroupRow)), t.xp6(1), t.Q6J("isSticky", ve.rowData.totalCounts > 0)("viewData", ve.rowData.groupingLabel), t.uIk("id", ve.rowData.labelId && "label-" + ve.rowData.labelId);
    }
  }
  function Bl(we, Bt) {
    1 & we && t._UZ(0, "cdk-row", 43);
  }
  function gu(we, Bt) {
    if (1 & we && (t.ynx(0)(1, 38), t.YNc(2, rc, 2, 6, "cdk-cell", 39), t.BQk(), t.YNc(3, Bl, 1, 0, "cdk-row", 40), t.BQk()), 2 & we) {
      const ve = t.oxw(3).ngIf,
        yt = t.oxw();
      t.xp6(1), t.Q6J("sticky", yt.stickyGroupingLabels), t.xp6(2), t.Q6J("cdkRowDefColumns", ve.groupingRowCells)("cdkRowDefWhen", yt.displayHeader);
    }
  }
  function Xc(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-cell", 50), t.NdJ("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.MAs(2),
          Vo = t.oxw(5);
        return t.KtG(Vo.onCheckboxContainerClick(An, Gr, tr));
      }), t.TgZ(1, "lu-checkbox", 51, 32), t.NdJ("click", function (An) {
        return An.stopPropagation();
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("disabled", ve.disabled)("ngModel", ve.isMarked);
    }
  }
  function al(we, Bt) {
    1 & we && t._UZ(0, "lu-svg-icon", 55), 2 & we && t.Q6J("size", 16);
  }
  function ca(we, Bt) {
    1 & we && t._UZ(0, "lu-svg-icon", 56), 2 & we && t.Q6J("size", 16);
  }
  function _a(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 52), t.YNc(1, al, 1, 1, "lu-svg-icon", 53), t.YNc(2, ca, 1, 1, "lu-svg-icon", 54), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("ngIf", !ve.isCollapsedGroup), t.xp6(1), t.Q6J("ngIf", ve.isCollapsedGroup);
    }
  }
  function wl(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 57), t._UZ(1, "dp-grouping-row", 58), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("viewData", ve.rowData);
    }
  }
  function Ja(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-row", 59), t.NdJ("click", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(5);
        return t.KtG(tr.toggleGroupExpand(Un));
      })("mouseenter", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(5);
        return t.KtG(tr.onRowHoverStart(Un));
      })("mouseleave", function () {
        t.CHM(ve);
        const An = t.oxw(5);
        return t.KtG(An.onRowHoverEnd());
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(5);
      t.ekj("dp-table-row_state_disabled", ve.disabled), t.Q6J("ngClass", yt.isRowActive(ve) ? ve.activeStyle : "");
    }
  }
  function ka(we, Bt) {
    if (1 & we && (t.YNc(0, Xc, 3, 2, "cdk-cell", 44), t.ynx(1, 45), t.YNc(2, _a, 3, 2, "cdk-cell", 46), t.BQk(), t.ynx(3, 47), t.YNc(4, wl, 2, 1, "cdk-cell", 48), t.BQk(), t.YNc(5, Ja, 1, 3, "cdk-row", 49)), 2 & we) {
      const ve = t.oxw(3).ngIf,
        yt = t.oxw();
      t.xp6(5), t.Q6J("cdkRowDefColumns", ve.groupingRowCells)("cdkRowDefWhen", yt.displayHeader);
    }
  }
  function Hc(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, gu, 4, 3, "ng-container", 24), t.YNc(2, ka, 6, 2, "ng-template", null, 37, t.W1O), t.BQk()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(2).ngIf;
      t.xp6(1), t.Q6J("ngIf", yt.isLabelGroupDisplay)("ngIfElse", ve);
    }
  }
  function tc(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-row", 60), t.NdJ("dblclick", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onRowDbClick(tr, An));
      })("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onRowClick(tr, An));
      })("contextmenu", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onContextMenu(An, tr));
      })("mouseenter", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(3);
        return t.KtG(tr.onRowHoverStart(Un));
      })("mouseleave", function () {
        t.CHM(ve);
        const An = t.oxw(3);
        return t.KtG(An.onRowHoverEnd());
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(3);
      t.Udp("background", ve.background), t.ekj("dp-table-row_state_disabled", ve.disabled)("dp-table-row_state_highlighted-selected", ve.techId === yt.selectedRowTechId), t.Q6J("ngClass", ve.techId === yt.hoveredRowTechId ? ve.activeStyle : "")("luTooltip", ve.disabledText)("canOpen", ve.disabled && ve.disabledText)("@rowAnimation", ve.animationState);
    }
  }
  function zl(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Tc = function (we) {
    return {
      element: we
    };
  };
  function Jl(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 64, 65), t.YNc(2, zl, 1, 0, "ng-container", 27), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.MAs(1),
        An = t.oxw(3).ngIf,
        Un = t.oxw();
      t.ekj("appearing-element_state_hide", !Un.isRowExpanded(ve)), t.Q6J("ngStyle", Un.extraRowStyleForAnimatedAppear(yt)), t.uIk("colspan", An.columnList.length), t.xp6(2), t.Q6J("ngTemplateOutlet", Un.extraRowTemplate)("ngTemplateOutletContext", t.VKq(6, Tc, ve));
    }
  }
  function hc(we, Bt) {
    if (1 & we && t._UZ(0, "cdk-row", 66), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(4);
      t.ekj("dp-table-row_state_highlighted", yt.isRowActive(ve));
    }
  }
  const ll = function () {
    return ["extraRow"];
  };
  function Tl(we, Bt) {
    1 & we && (t.ynx(0)(1, 61), t.YNc(2, Jl, 3, 8, "cdk-cell", 62), t.BQk(), t.YNc(3, hc, 1, 2, "cdk-row", 63), t.BQk()), 2 & we && (t.xp6(3), t.Q6J("cdkRowDefColumns", t.DdM(1, ll)));
  }
  function $c(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-footer-cell", 67), t.Hsn(1), t.qZA()), 2 & we) {
      const ve = t.oxw(2).ngIf;
      t.uIk("colspan", ve.columnList.length);
    }
  }
  function Ml(we, Bt) {
    1 & we && t._UZ(0, "cdk-footer-row", 68);
  }
  const Vl = function () {
    return ["footerRow"];
  };
  function Bc(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-table", 5, 6), t.YNc(2, pc, 9, 11, "ng-container", 7), t.YNc(3, ec, 1, 2, "cdk-header-row", 8), t.YNc(4, Hc, 4, 2, "ng-container", 0), t.YNc(5, tc, 1, 10, "cdk-row", 9), t.YNc(6, Tl, 4, 2, "ng-container", 0), t.ynx(7, 10), t.YNc(8, $c, 2, 1, "cdk-footer-cell", 11), t.BQk(), t.YNc(9, Ml, 1, 0, "cdk-footer-row", 12), t.qZA()), 2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw().ngIf,
        An = t.oxw();
      t.Q6J("dataSource", ve)("trackBy", An.trackByFn)("@.disabled", An.disableAnimation), t.xp6(2), t.Q6J("ngForOf", yt.columnDef)("ngForTrackBy", An.trackByFnColumn), t.xp6(1), t.Q6J("cdkHeaderRowDef", yt.columnList), t.xp6(1), t.Q6J("ngIf", An.isGrouping), t.xp6(1), t.Q6J("cdkRowDefColumns", yt.columnList)("cdkRowDefWhen", An.displayMainRowFn), t.xp6(1), t.Q6J("ngIf", An.extraRowTemplate), t.xp6(3), t.Q6J("cdkFooterRowDef", t.DdM(11, Vl));
    }
  }
  function bu(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-scroll-container", 1), t.NdJ("scrollChangeY", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onScrollChangeY());
      })("scrollEndY", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onScrollEndY());
      }), t.YNc(2, _c, 1, 4, "dp-virtual-grouping-labels", 2), t.YNc(3, Bc, 10, 12, "cdk-table", 3), t.qZA(), t.BQk();
    }
    if (2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw();
      t.xp6(2), t.Q6J("ngIf", yt.virtualLabels), t.xp6(1), t.Q6J("ngIf", ve.tableSource);
    }
  }
  const Kc = [[["", "dpTableFooter", ""]]],
    Al = ["[dpTableFooter]"];
  let sc = (() => {
      class we extends vo {
        constructor(ve, yt, An) {
          super(yt, An, ve);
        }
        ngAfterViewChecked() {
          this.cdkTable?.updateStickyColumnStyles(), this.updateGroupingLabels();
        }
        onScrollChangeY() {
          this.updateGroupingLabels();
        }
        onSelectGroupingLabel(ve) {
          const yt = document.getElementById(`label-${ve.labelId}`);
          yt && yt.scrollIntoView({
            block: "center",
            inline: "center"
          });
        }
        updateGroupingLabels() {
          setTimeout(() => {
            const ve = ni(this.dataSourceGrouped || []);
            (ve.length !== this.groupingLabels?.length || ve.some(yt => !this.groupingLabels.find(An => An.labelId === yt.labelId))) && (this.groupingLabels = ni(this.dataSourceGrouped || []), this.cdr.detectChanges());
          });
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.sBO), t.Y36(dl), t.Y36(As));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-table"]],
        viewQuery: function (ve, yt) {
          if (1 & ve && t.Gf(ic, 5), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt.cdkTable = An.first);
          }
        },
        features: [t._Bn([cr, As, dl]), t.qOj],
        ngContentSelectors: Al,
        decls: 3,
        vars: 5,
        consts: [[4, "ngIf"], ["id", "scrollContainer", 3, "scrollChangeY", "scrollEndY"], [3, "topOffset", "bottomOffset", "displayType", "labels", "selectLabel", 4, "ngIf"], ["class", "dp-table", "multiTemplateDataRows", "", "dpDataTestRole", "table", 3, "dataSource", "trackBy", 4, "ngIf"], [3, "topOffset", "bottomOffset", "displayType", "labels", "selectLabel"], ["multiTemplateDataRows", "", "dpDataTestRole", "table", 1, "dp-table", 3, "dataSource", "trackBy"], ["cdkTable", ""], [3, "cdkColumnDef", "stickyEnd", "sticky", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "dp-table-header-row", "dpDataTestRole", "tableHeaderRow", 3, "dp-table-header-row--has-items", 4, "cdkHeaderRowDef"], ["class", "dp-table-row", "dpDataTestRole", "tableRow", 3, "ngClass", "dp-table-row_state_disabled", "dp-table-row_state_highlighted-selected", "background", "luTooltip", "canOpen", "dblclick", "click", "contextmenu", "mouseenter", "mouseleave", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], ["cdkColumnDef", "footerRow"], ["class", "dp-table-footer-cell", "dpDataTestRole", "tableCell", 4, "cdkFooterCellDef"], ["class", "dp-table-footer-row", "dpDataTestRole", "tableRow", 4, "cdkFooterRowDef"], [3, "cdkColumnDef", "stickyEnd", "sticky"], ["class", "__cell h1-table-cell-checkbox", 4, "cdkHeaderCellDef"], [1, "__cell", "h1-table-cell-checkbox"], ["dpDataTestRole", "tableCell", 3, "ngModel", "disabled", "ngModelChange"], ["class", "__cell-sticky dp-table-cell-icon __cell-sticky--first", 4, "cdkHeaderCellDef"], [1, "__cell-sticky", "dp-table-cell-icon", "__cell-sticky--first"], [1, "col-settings-control", 3, "luTooltip"], ["icon", "cog", 3, "size", "click"], [4, "cdkHeaderCellDef"], [3, "style", "ngClass", 4, "cdkHeaderCellDef"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["defaultHeader", ""], ["emptyCustomHeader", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dpDataTestRole", "tableCell", 3, "titleGroups", "sortParams", "sortAction", "filterAction"], ["class", "__cell h1-table-cell-checkbox", 3, "click", 4, "cdkCellDef"], [1, "__cell", "h1-table-cell-checkbox", 3, "click"], ["dpDataTestRole", "tableCell", 2, "pointer-events", "none", 3, "ngModel", "click"], ["currentCheckbox", ""], [4, "cdkCellDef"], ["dpDataTestRole", "tableCell", 3, "style", "ngClass", 4, "cdkCellDef"], ["dpDataTestRole", "tableCell", 3, "ngClass"], ["dpDataTestRole", "tableHeaderRow", 1, "dp-table-header-row"], ["expandTemplate", ""], ["cdkColumnDef", "groupHeader", 3, "sticky"], ["class", "dp-label-row__cell", "dpDataTestRole", "tableCell", 3, "ngClass", 4, "cdkCellDef"], ["class", "dp-label-row", "dpDataTestRole", "tableRow", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], ["dpDataTestRole", "tableCell", 1, "dp-label-row__cell", 3, "ngClass"], [3, "isSticky", "viewData"], ["dpDataTestRole", "tableRow", 1, "dp-label-row"], ["class", "h1-table-cell-checkbox", 3, "click", 4, "cdkCellDef"], ["cdkColumnDef", "expand"], ["class", "dp-table-cell-icon dp-table-cell-toggle", "dpDataTestRole", "tableCell", 4, "cdkCellDef"], ["cdkColumnDef", "groupHeader"], ["class", "h1-table-cell", "dpDataTestRole", "tableCell", 4, "cdkCellDef"], ["class", "dp-table-row", "dpDataTestRole", "tableRow", 3, "dp-table-row_state_disabled", "ngClass", "click", "mouseenter", "mouseleave", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], [1, "h1-table-cell-checkbox", 3, "click"], ["dpDataTestRole", "tableCell", 2, "pointer-events", "none", 3, "disabled", "ngModel", "click"], ["dpDataTestRole", "tableCell", 1, "dp-table-cell-icon", "dp-table-cell-toggle"], ["icon", "chevron-down", 3, "size", 4, "ngIf"], ["icon", "chevron-right", 3, "size", 4, "ngIf"], ["icon", "chevron-down", 3, "size"], ["icon", "chevron-right", 3, "size"], ["dpDataTestRole", "tableCell", 1, "h1-table-cell"], [3, "viewData"], ["dpDataTestRole", "tableRow", 1, "dp-table-row", 3, "ngClass", "click", "mouseenter", "mouseleave"], ["dpDataTestRole", "tableRow", 1, "dp-table-row", 3, "ngClass", "luTooltip", "canOpen", "dblclick", "click", "contextmenu", "mouseenter", "mouseleave"], ["cdkColumnDef", "extraRow"], ["class", "appearing-element", "dpDataTestRole", "tableCell", 3, "appearing-element_state_hide", "ngStyle", 4, "cdkCellDef"], ["class", "dp-table-row dp-table-row_type_extra", "dpDataTestRole", "tableRow", 3, "dp-table-row_state_highlighted", 4, "cdkRowDef", "cdkRowDefColumns"], ["dpDataTestRole", "tableCell", 1, "appearing-element", 3, "ngStyle"], ["extraRowElement", ""], ["dpDataTestRole", "tableRow", 1, "dp-table-row", "dp-table-row_type_extra"], ["dpDataTestRole", "tableCell", 1, "dp-table-footer-cell"], ["dpDataTestRole", "tableRow", 1, "dp-table-footer-row"]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(Kc), t.YNc(0, bu, 4, 2, "ng-container", 0), t.ALo(1, "tableViewData"), t.ALo(2, "async")), 2 & ve && t.Q6J("ngIf", t.lcZ(1, 1, t.lcZ(2, 3, yt.tableModel$)));
        },
        dependencies: [C.mk, C.sg, C.O5, C.tP, C.PC, Go.JJ, Go.On, wr, pt, mt, ut, Ct, Ue, Ee, vt, Ke, Ze, Ht, yi, Dn, fr, Qr, I.$m, N.$, sa, nu, gc, a.q, L.U, va, C.Ov, zs],
        styles: ["@charset \"UTF-8\";cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%]{display:flex;min-width:-moz-fit-content;min-width:fit-content}cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%]{flex-shrink:0}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;--table-row-color: var(--lu-white);--table-header-color: var(--lu-white);--table-footer-color: var(--lu-white)}.__cell[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2);margin-bottom:var(--lu-base-gutter)}.__cell-sticky[_ngcontent-%COMP%]{position:relative;background-color:var(--table-row-color);margin-bottom:var(--lu-base-gutter)}.__cell-sticky.cdk-header-cell[_ngcontent-%COMP%]:before{content:\" \";position:absolute;width:calc(var(--lu-base-gutter) * 4);height:100%;left:calc(var(--lu-base-gutter) * -4);background:linear-gradient(to left,var(--lu-white) 20%,transparent)}.__cell-sticky--first[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-grow:2}.__cell[_ngcontent-%COMP%]:first-child{margin-left:0}.dp-label-row__cell[_ngcontent-%COMP%]{margin-top:16px;margin-left:8px}.dp-table[_ngcontent-%COMP%]{flex-grow:1;min-width:-moz-fit-content;min-width:fit-content;background-color:var(--lu-black-5)}.dp-table-header-row[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;padding:0 0 0 24px;min-height:40px;box-shadow:0 2px 3px #00000014,0 6px 8px -2px #00000014;background-color:var(--table-header-color)}.dp-table-header-row--has-items[_ngcontent-%COMP%]{margin-bottom:12px}.dp-label-row[_ngcontent-%COMP%]{background-color:var(--lu-black-5)}.h1-table-cell-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;--lu-checkbox-color: var(--us-control-color, var(--lu-primary-hover))}.dp-table-cell-toggle[_ngcontent-%COMP%]{align-items:center;justify-content:center}.dp-table-cell-icon[_ngcontent-%COMP%]{position:relative;display:flex;cursor:pointer;--lu-svg-icon-color: var(--us-control-color, var(--lu-primary-hover))}.dp-table-cell-icon[_ngcontent-%COMP%]   .col-settings-control[_ngcontent-%COMP%]{align-items:flex-end;margin-bottom:2px;padding:0 var(--lu-base-gutter)}.dp-table-row[_ngcontent-%COMP%]{position:relative;padding:0 0 0 24px;background-color:var(--table-row-color);cursor:default}.dp-table-row[_ngcontent-%COMP%]:not(:last-child):after{z-index:1;content:\"\";position:absolute;bottom:0;left:24px;right:0;height:1px;background-color:var(--lu-black-10)}.dp-table-row_state_highlighted-active[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-color, var(--lu-blue-10)) !important;--dp-row-hover-btn: var(--us-table-row-hover-btn-color, var(--lu-blue-30)) !important;background-color:var(--us-table-row-hover-color, var(--lu-blue-10))!important}.dp-table-row_state_highlighted-inactive[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-color, var(--lu-black-5)) !important;--dp-row-hover-btn: var(--us-table-row-hover-btn-color, var(--lu-black-10)) !important;background-color:var(--us-table-row-hover-color, var(--lu-black-5))!important}.dp-table-row_state_highlighted-selected[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-color, var(--lu-yellow-10)) !important;--dp-row-hover-btn: var(--us-table-row-hover-btn-color, var(--lu-yellow-20)) !important;background-color:var(--us-table-row-selected-color, var(--lu-yellow-10))!important}.dp-table-row_state_disabled[_ngcontent-%COMP%]{background:var(--us-table-row-disabled-color, rgba(0, 0, 0, .05));opacity:var(--us-table-row-disabled-opacity, .4)}.dp-table-row_type_extra[_ngcontent-%COMP%]{width:100%}.dp-table-footer-row[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0 0 0 24px;background-color:var(--table-footer-color);cursor:default}.dp-table-footer-cell[_ngcontent-%COMP%]{flex-grow:1}.h1-table-cell[_ngcontent-%COMP%]{padding-top:var(--dp-table-cell-padding-y, 12px);padding-bottom:calc(var(--dp-table-cell-padding-y, 12px) - var(--lu-base-gutter));font-weight:400;font-size:15px;line-height:24px;color:var(--lu-black-80);overflow-wrap:break-word}.appearing-element[_ngcontent-%COMP%]{width:100%;overflow:hidden;transition:height .3s linear}.appearing-element_state_hide[_ngcontent-%COMP%]{height:0!important}.element-hide[_ngcontent-%COMP%]{display:none}.secondary[_nghost-%COMP%]   cdk-row[_ngcontent-%COMP%], .secondary[_nghost-%COMP%]   cdk-header-row[_ngcontent-%COMP%], .secondary[_nghost-%COMP%]   cdk-footer-row[_ngcontent-%COMP%]{justify-content:space-between}.secondary[_nghost-%COMP%]   .__cell[_ngcontent-%COMP%]{margin-left:0}.secondary[_nghost-%COMP%]   .dp-table-header-row[_ngcontent-%COMP%]{box-shadow:none;background-color:var(--table-header-color)}.secondary[_nghost-%COMP%]   .dp-table-header-row[_ngcontent-%COMP%]:after{z-index:1;content:\"\";position:absolute;bottom:0;left:24px;right:0;height:1px;background-color:var(--lu-black-10)}.secondary[_nghost-%COMP%]   .dp-table-row[_ngcontent-%COMP%]{background-color:var(--table-row-color)}"],
        data: {
          animation: [(0, fe.X$)("rowAnimation", [(0, fe.eR)("void => create", [(0, fe.oB)({
            opacity: 0,
            height: "0px"
          }), (0, fe.jt)("800ms ease-in", (0, fe.oB)({
            opacity: 1,
            height: "*"
          }))]), (0, fe.eR)(":leave", [(0, fe.jt)("1000ms ease-out", (0, fe.oB)({
            opacity: 0,
            height: "0px",
            margin: 0
          }))]), (0, fe.eR)("* => updated", [(0, fe.oB)({
            backgroundColor: "var(--lu-yellow-20)"
          }), (0, fe.jt)("2000ms ease-in-out", (0, fe.oB)({
            backgroundColor: "white"
          }))])])]
        },
        changeDetection: 0
      }), we;
    })(),
    Bi = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, a.h, N.i]
      }), we;
    })(),
    lu = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Go.u5, Go.UX, ji.V, e.J, ti.p, A.X, m.aI, a.h, N.i]
      }), we;
    })(),
    Rc = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Bi]
      }), we;
    })(),
    ac = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, a.h, N.i, fi.pW]
      }), we;
    })();
  class Pa {
    constructor(Bt, ve, yt) {
      this.itemHeight = Bt, this.headerHeight = ve, this.bufferSize = yt, this.indexChange = new u.X(0), this.measureScrollOffset = new u.X(0), this.rangeChange = new u.X({
        start: 0,
        end: 0
      }), this.dataLength = 0, this.scrolledIndexChange = this.indexChange.asObservable().pipe((0, y.x)()), this.renderedRangeStream = this.rangeChange.asObservable().pipe((0, y.x)());
    }
    attach(Bt) {
      this.viewport = Bt, this.onDataLengthChanged();
    }
    detach() {}
    onContentScrolled() {
      this.updateContent(this.viewport);
    }
    onDataLengthChanged() {
      this.viewport && (this.viewport.setTotalContentSize(this.dataLength * this.itemHeight + this.headerHeight), this.updateContent(this.viewport));
    }
    onContentRendered() {}
    onRenderedOffsetChanged() {}
    scrollToIndex(Bt, ve) {
      this.viewport && this.viewport.scrollToOffset(Bt * this.itemHeight, ve);
    }
    setDataLength(Bt) {
      this.dataLength = Bt, this.onDataLengthChanged();
    }
    setConfig(Bt, ve, yt) {
      this.itemHeight = Bt, this.headerHeight = ve, this.bufferSize = yt, this.updateContent(this.viewport);
    }
    updateContent(Bt) {
      if (Bt) {
        const ve = Math.ceil(Bt.getViewportSize() / this.itemHeight) + 2 * this.bufferSize,
          yt = Math.max(0, Math.floor((Bt.measureScrollOffset() - this.headerHeight) / this.itemHeight) - this.bufferSize),
          An = this.dataLength,
          Un = Math.max(0, yt),
          tr = Math.min(An, yt + ve);
        if (this.indexChange.next(yt), this.measureScrollOffset.next(Bt.measureScrollOffset("start")), this.currentRange?.start === Un && this.currentRange?.end === tr) return;
        Bt.setRenderedContentOffset(this.itemHeight * Un), Bt.setRenderedRange({
          start: Un,
          end: tr
        }), this.currentRange = {
          start: Un,
          end: tr
        }, this.rangeChange.next({
          start: Un,
          end: tr
        });
      }
    }
  }
  function cl(we) {
    return we.scrollStrategy;
  }
  let iu = (() => {
      class we {
        constructor() {
          this.rowHeight = 40, this.headerHeight = 0, this.bufferSize = 0, this.totalItems = 0, this.offsetChanges = new t.vpe(), this.rangeChanges = new t.vpe(), this.scrollStrategy = new Pa(this.rowHeight, this.headerHeight, this.bufferSize);
        }
        ngAfterContentInit() {
          this.scrollStrategy.setDataLength(this.totalItems), this.rangeChanges$.subscribe(ve => {
            this.range = ve;
          });
        }
        ngOnChanges(ve) {
          (ve.rowHeight || ve.headerHeight || ve.bufferSize) && this.scrollStrategy.setConfig(this.rowHeight, this.headerHeight, this.bufferSize), ve.totalItems && this.scrollStrategy.setDataLength(this.totalItems);
        }
        get rangeChanges$() {
          return this.scrollStrategy.rangeChange.pipe((0, y.x)((ve, yt) => ve.start === yt.start && ve.end === yt.end), (0, F.d)(1));
        }
        scrollToIndex(ve = 0, yt = "auto") {
          this.scrollStrategy.scrollToIndex(ve, yt);
        }
        measureScrollOffset() {
          return this.scrollStrategy.measureScrollOffset.pipe((0, y.x)());
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵdir = t.lG2({
        type: we,
        selectors: [["cdk-virtual-scroll-viewport", "totalItems", ""]],
        inputs: {
          rowHeight: "rowHeight",
          headerHeight: "headerHeight",
          bufferSize: "bufferSize",
          totalItems: "totalItems"
        },
        outputs: {
          offsetChanges: "offsetChanges",
          rangeChanges: "rangeChanges"
        },
        features: [t._Bn([{
          provide: te.yU,
          useFactory: cl,
          deps: [(0, t.Gpc)(() => we)]
        }]), t.TTD]
      }), we;
    })(),
    Fc = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({}), we;
    })(),
    Jc = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Tn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Vi = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Zr = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    fl = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Bs = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    $e = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    Hn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez]
      }), we;
    })(),
    nt = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Go.u5, lo, lu, te.Cl, I.Nu, O.P, N.i, Xs, Vi, Tn, fl, Bi, Rc, Zr, Jc, M.W1, ti.p, a.h, L.w, Bs, $e, Hn, Fc, ac]
      }), we;
    })(),
    si = (() => {
      class we extends as {
        constructor(ve) {
          super(ve);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.LFG(cr));
      }, we.ɵprov = t.Yz7({
        token: we,
        factory: we.ɵfac
      }), we;
    })(),
    Oo = (() => {
      class we extends Da {
        constructor(ve) {
          super(ve);
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.LFG(cr));
      }, we.ɵprov = t.Yz7({
        token: we,
        factory: we.ɵfac
      }), we;
    })(),
    xs = (() => {
      class we {
        transform(ve, yt) {
          if (0 === ve.length) return [];
          const An = [];
          return ve.forEach((Un, tr) => {
            if (!Un.isGroupRow) return;
            const Gr = Un.rowData;
            if (!yt) return void An.push({
              labelId: Gr.labelId,
              position: "TOP",
              index: tr,
              chunks: Gr.groupingLabel.chunks,
              cssStyle: Gr.groupingLabel.cssStyle
            });
            let Vo;
            tr < yt.start ? Vo = "TOP" : tr >= yt.end && (Vo = "BOTTOM"), Vo && An.push({
              labelId: Gr.labelId,
              position: Vo,
              index: tr,
              chunks: Gr.groupingLabel.chunks,
              cssStyle: Gr.groupingLabel.cssStyle
            });
          }), An;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵpipe = t.Yjl({
        name: "virtualLabels",
        type: we,
        pure: !0
      }), we;
    })();
  const Ne = {
    start: 0,
    end: 30
  };
  let Qe = (() => {
    class we {
      transform(ve, yt = Ne) {
        return ve.slice(yt?.start || 0, (yt?.end || 0) + 1);
      }
    }
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵpipe = t.Yjl({
      name: "dataSourceSlice",
      type: we,
      pure: !0
    }), we;
  })();
  const Q = ["cdkTable"],
    se = ["headerTable"];
  function re(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-header-cell", 9)(1, "lu-checkbox", 10), t.NdJ("ngModelChange", function () {
        t.CHM(ve);
        const An = t.oxw(3).ngIf,
          Un = t.oxw();
        return t.KtG(Un.onMarkAllRows(An.allMarked));
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = t.oxw(3).ngIf,
        yt = t.oxw();
      t.xp6(1), t.Q6J("ngModel", ve.allMarked)("disabled", !yt.markAllRowsAllowed);
    }
  }
  function Ce(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, re, 2, 2, "cdk-header-cell", 8), t.BQk());
  }
  function Be(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-header-cell", 12)(1, "div", 13)(2, "lu-svg-icon", 14), t.NdJ("click", function () {
        t.CHM(ve);
        const An = t.oxw(4);
        return t.KtG(An.onSettingsClick());
      }), t.qZA()()();
    }
    2 & we && (t.xp6(1), t.Q6J("luTooltip", "Настройка столбцов"), t.xp6(1), t.Q6J("size", 16));
  }
  function dt(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Be, 3, 2, "cdk-header-cell", 11), t.BQk());
  }
  function Ot(we, Bt) {
    1 & we && t._UZ(0, "cdk-header-cell");
  }
  function Qt(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Ot, 1, 0, "cdk-header-cell", 15), t.BQk());
  }
  function Wn(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Ui = function (we) {
    return {
      columnDef: we
    };
  };
  function eo(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Wn, 1, 0, "ng-container", 21), t.BQk()), 2 & we) {
      const ve = t.oxw(4).$implicit,
        yt = t.oxw(2);
      t.xp6(1), t.Q6J("ngTemplateOutlet", yt.tdHeaderCellsTemplate)("ngTemplateOutletContext", t.VKq(2, Ui, ve.column));
    }
  }
  function Wo(we, Bt) {
    if (1 & we && (t.TgZ(0, "div"), t._uU(1), t.qZA()), 2 & we) {
      const ve = t.oxw(4).$implicit;
      t.xp6(1), t.hij("Не указан теплейт для ", ve.column, "");
    }
  }
  function Ve(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, eo, 2, 4, "ng-container", 18), t.YNc(2, Wo, 2, 1, "ng-template", null, 20, t.W1O), t.BQk()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(5);
      t.xp6(1), t.Q6J("ngIf", yt.tdHeaderCellsTemplate)("ngIfElse", ve);
    }
  }
  function me(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-table-header-cell", 22), t.NdJ("sortAction", function (An) {
        t.CHM(ve);
        const Un = t.oxw(5);
        return t.KtG(Un.onSort(An));
      })("filterAction", function (An) {
        t.CHM(ve);
        const Un = t.oxw(5);
        return t.KtG(Un.onFilter(An));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = t.oxw(3).$implicit,
        yt = t.oxw(2);
      t.Q6J("titleGroups", ve.thTitleGroups)("sortParams", yt.sortParams);
    }
  }
  function ze(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-header-cell", 17), t.YNc(1, Ve, 4, 2, "ng-container", 18), t.YNc(2, me, 1, 2, "ng-template", null, 19, t.W1O), t.qZA()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(2).$implicit;
      t.Akn(yt.styles), t.Q6J("ngClass", yt.headerClass), t.xp6(1), t.Q6J("ngIf", yt.isCustom)("ngIfElse", ve);
    }
  }
  function xt(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, ze, 4, 5, "cdk-header-cell", 16), t.BQk());
  }
  function wn(we, Bt) {
    if (1 & we && (t.ynx(0)(1, 7), t.YNc(2, Ce, 2, 0, "ng-container", 0), t.YNc(3, dt, 2, 0, "ng-container", 0), t.YNc(4, Qt, 2, 0, "ng-container", 0), t.YNc(5, xt, 2, 0, "ng-container", 0), t.BQk()()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("cdkColumnDef", ve.column)("stickyEnd", ve.stickyEnd)("sticky", ve.sticky), t.xp6(1), t.Q6J("ngIf", ve.isSelection), t.xp6(1), t.Q6J("ngIf", ve.isSetting), t.xp6(1), t.Q6J("ngIf", ve.isToolbox), t.xp6(1), t.Q6J("ngIf", !(ve.isSetting && ve.isSelection));
    }
  }
  function Ai(we, Bt) {
    1 & we && t._UZ(0, "cdk-header-row", 23);
  }
  function _o(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.ynx(0), t.TgZ(1, "dp-virtual-grouping-labels", 24), t.NdJ("selectLabel", function (An) {
        t.CHM(ve);
        const Un = t.oxw(2);
        return t.KtG(Un.onSelectGroupingLabel(An));
      }), t.ALo(2, "virtualLabels"), t.qZA(), t.BQk();
    }
    if (2 & we) {
      const ve = t.oxw().ngIf,
        yt = t.oxw();
      t.xp6(1), t.Q6J("topOffset", yt.virtualLabels.offsets.top)("bottomOffset", yt.virtualLabels.offsets.bottom)("displayType", yt.virtualLabels.direction)("labels", t.xi3(2, 4, ve.tableSource, null == yt.vsScroll ? null : yt.vsScroll.range));
    }
  }
  function mr(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-cell", 33), t.NdJ("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.MAs(2),
          Vo = t.oxw(5);
        return t.KtG(Vo.onCheckboxContainerClick(An, Gr, tr));
      }), t.TgZ(1, "lu-checkbox", 34, 35), t.NdJ("click", function (An) {
        return An.stopPropagation();
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("ngModel", ve.isMarked);
    }
  }
  function Yr(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, mr, 3, 1, "cdk-cell", 32), t.BQk());
  }
  function es(we, Bt) {
    1 & we && t._UZ(0, "cdk-cell");
  }
  function Jr(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, es, 1, 0, "cdk-cell", 36), t.BQk());
  }
  function Ca(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Ra = function (we, Bt, ve) {
    return {
      columnDef: we,
      element: Bt,
      isHovered: ve
    };
  };
  function Ta(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell"), t.YNc(1, Ca, 1, 0, "ng-container", 21), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(2).$implicit,
        An = t.oxw(3);
      t.xp6(1), t.Q6J("ngTemplateOutlet", An.tdCellsTemplate)("ngTemplateOutletContext", t.kEZ(2, Ra, yt.column, ve.rowData, An.isRowActive(ve)));
    }
  }
  function Qa(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Ta, 2, 6, "cdk-cell", 36), t.BQk());
  }
  function Vc(we, Bt) {
    1 & we && t.GkF(0);
  }
  const fc = function (we, Bt, ve) {
    return {
      "h1-table-cell": we,
      __cell: Bt,
      "__cell-sticky": ve
    };
  };
  function Ac(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 38), t.YNc(1, Vc, 1, 0, "ng-container", 21), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(2).$implicit,
        An = t.oxw(3);
      t.Akn(yt.styles), t.Q6J("ngClass", t.kEZ(5, fc, !(yt.stickyEnd || yt.sticky), !(yt.stickyEnd || yt.sticky), yt.stickyEnd || yt.sticky)), t.xp6(1), t.Q6J("ngTemplateOutlet", An.tdCellsTemplate)("ngTemplateOutletContext", t.kEZ(9, Ra, yt.column, ve.rowData, An.isRowActive(ve)));
    }
  }
  function cu(we, Bt) {
    1 & we && (t.ynx(0), t.YNc(1, Ac, 2, 13, "cdk-cell", 37), t.BQk());
  }
  function $a(we, Bt) {
    if (1 & we && (t.ynx(0, 7), t.YNc(1, Yr, 2, 0, "ng-container", 0), t.YNc(2, Jr, 2, 0, "ng-container", 0), t.YNc(3, Qa, 2, 0, "ng-container", 0), t.YNc(4, cu, 2, 0, "ng-container", 0), t.BQk()), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("cdkColumnDef", ve.column)("stickyEnd", ve.stickyEnd)("sticky", ve.sticky), t.xp6(1), t.Q6J("ngIf", ve.isSelection), t.xp6(1), t.Q6J("ngIf", ve.isSetting), t.xp6(1), t.Q6J("ngIf", ve.isToolbox), t.xp6(1), t.Q6J("ngIf", !(ve.isSetting && ve.isSelection));
    }
  }
  const eu = function (we) {
    return {
      "element-hide": we
    };
  };
  function uu(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 43), t._UZ(1, "dp-grouping-label", 44), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.Q6J("ngClass", t.VKq(4, eu, !ve.isGroupRow)), t.xp6(1), t.Q6J("isSticky", ve.rowData.totalCounts > 0)("viewData", ve.rowData.groupingLabel), t.uIk("id", ve.rowData.labelId && "label-" + ve.rowData.labelId);
    }
  }
  function jl(we, Bt) {
    if (1 & we && t._UZ(0, "cdk-row", 45), 2 & we) {
      const ve = t.oxw(5);
      t.Akn(ve.rowHeightStyle);
    }
  }
  function Nc(we, Bt) {
    if (1 & we && (t.ynx(0)(1, 40), t.YNc(2, uu, 2, 6, "cdk-cell", 41), t.BQk(), t.YNc(3, jl, 1, 2, "cdk-row", 42), t.BQk()), 2 & we) {
      const ve = t.oxw(3).ngIf,
        yt = t.oxw();
      t.xp6(1), t.Q6J("sticky", yt.stickyGroupingLabels), t.xp6(2), t.Q6J("cdkRowDefColumns", ve.groupingRowCells)("cdkRowDefWhen", yt.displayHeader);
    }
  }
  function Cl(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-cell", 52), t.NdJ("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.MAs(2),
          Vo = t.oxw(5);
        return t.KtG(Vo.onCheckboxContainerClick(An, Gr, tr));
      }), t.TgZ(1, "lu-checkbox", 53, 35), t.NdJ("click", function (An) {
        return An.stopPropagation();
      }), t.qZA()();
    }
    if (2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("disabled", ve.disabled)("ngModel", ve.isMarked);
    }
  }
  function lc(we, Bt) {
    1 & we && t._UZ(0, "lu-svg-icon", 57), 2 & we && t.Q6J("size", 16);
  }
  function Bu(we, Bt) {
    1 & we && t._UZ(0, "lu-svg-icon", 58), 2 & we && t.Q6J("size", 16);
  }
  function Sc(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 54), t.YNc(1, lc, 1, 1, "lu-svg-icon", 55), t.YNc(2, Bu, 1, 1, "lu-svg-icon", 56), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("ngIf", !ve.isCollapsedGroup), t.xp6(1), t.Q6J("ngIf", ve.isCollapsedGroup);
    }
  }
  function Vu(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 59), t._UZ(1, "dp-grouping-row", 60), t.qZA()), 2 & we) {
      const ve = Bt.$implicit;
      t.xp6(1), t.Q6J("viewData", ve.rowData);
    }
  }
  function ah(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-row", 61), t.NdJ("click", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(5);
        return t.KtG(tr.toggleGroupExpand(Un));
      })("mouseenter", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(5);
        return t.KtG(tr.onRowHoverStart(Un));
      })("mouseleave", function () {
        t.CHM(ve);
        const An = t.oxw(5);
        return t.KtG(An.onRowHoverEnd());
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(5);
      t.Akn(yt.rowHeightStyle), t.ekj("dp-table-row_state_disabled", ve.disabled), t.Q6J("ngClass", yt.isRowActive(ve) ? ve.activeStyle : "");
    }
  }
  function Qd(we, Bt) {
    if (1 & we && (t.YNc(0, Cl, 3, 2, "cdk-cell", 46), t.ynx(1, 47), t.YNc(2, Sc, 3, 2, "cdk-cell", 48), t.BQk(), t.ynx(3, 49), t.YNc(4, Vu, 2, 1, "cdk-cell", 50), t.BQk(), t.YNc(5, ah, 1, 5, "cdk-row", 51)), 2 & we) {
      const ve = t.oxw(3).ngIf,
        yt = t.oxw();
      t.xp6(5), t.Q6J("cdkRowDefColumns", ve.groupingRowCells)("cdkRowDefWhen", yt.displayHeader);
    }
  }
  function Md(we, Bt) {
    if (1 & we && (t.ynx(0), t.YNc(1, Nc, 4, 3, "ng-container", 18), t.YNc(2, Qd, 6, 2, "ng-template", null, 39, t.W1O), t.BQk()), 2 & we) {
      const ve = t.MAs(3),
        yt = t.oxw(2).ngIf;
      t.xp6(1), t.Q6J("ngIf", yt.isLabelGroupDisplay)("ngIfElse", ve);
    }
  }
  function _u(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "cdk-row", 62), t.NdJ("dblclick", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onRowDbClick(tr, An));
      })("click", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onRowClick(tr, An));
      })("contextmenu", function (An) {
        const tr = t.CHM(ve).$implicit,
          Gr = t.oxw(3);
        return t.KtG(Gr.onContextMenu(An, tr));
      })("mouseenter", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(3);
        return t.KtG(tr.onRowHoverStart(Un));
      })("mouseleave", function () {
        t.CHM(ve);
        const An = t.oxw(3);
        return t.KtG(An.onRowHoverEnd());
      })("animationend", function () {
        const Un = t.CHM(ve).$implicit,
          tr = t.oxw(3);
        return t.KtG(tr.onRowAnimationEnd(Un));
      }), t.qZA();
    }
    if (2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(3);
      t.Akn(yt.rowHeightStyle), t.Udp("background", ve.background), t.ekj("dp-table-row_state_disabled", ve.disabled)("dp-table-row_state_highlighted-selected", ve.techId === yt.selectedRowTechId)("dp-table-row_state_updated", "updated" === ve.animationState && !yt.isRowAnimationPlayed(ve)), t.Q6J("ngClass", ve.techId === yt.hoveredRowTechId ? ve.activeStyle : "")("luTooltip", ve.disabledText)("canOpen", ve.disabled && ve.disabledText);
    }
  }
  function ju(we, Bt) {
    1 & we && t.GkF(0);
  }
  const Xu = function (we) {
    return {
      element: we
    };
  };
  function Xd(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-cell", 66, 67), t.YNc(2, ju, 1, 0, "ng-container", 21), t.qZA()), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.MAs(1),
        An = t.oxw(3).ngIf,
        Un = t.oxw();
      t.Q6J("ngStyle", Un.extraRowStyleForAnimatedAppear(yt)), t.uIk("colspan", An.columnList.length), t.xp6(2), t.Q6J("ngTemplateOutlet", Un.extraRowTemplate)("ngTemplateOutletContext", t.VKq(4, Xu, ve));
    }
  }
  function Zu(we, Bt) {
    if (1 & we && t._UZ(0, "cdk-row", 68), 2 & we) {
      const ve = Bt.$implicit,
        yt = t.oxw(4);
      t.ekj("dp-table-row_state_highlighted", yt.isRowActive(ve));
    }
  }
  const kp = function () {
    return ["extraRow"];
  };
  function hd(we, Bt) {
    1 & we && (t.ynx(0)(1, 63), t.YNc(2, Xd, 3, 6, "cdk-cell", 64), t.BQk(), t.YNc(3, Zu, 1, 2, "cdk-row", 65), t.BQk()), 2 & we && (t.xp6(3), t.Q6J("cdkRowDefColumns", t.DdM(1, kp)));
  }
  function Td(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-footer-cell", 69), t.Hsn(1), t.qZA()), 2 & we) {
      const ve = t.oxw(2).ngIf;
      t.uIk("colspan", ve.columnList.length);
    }
  }
  function yl(we, Bt) {
    1 & we && t._UZ(0, "cdk-footer-row", 70);
  }
  const sd = function () {
    return ["footerRow"];
  };
  function tl(we, Bt) {
    if (1 & we && (t.TgZ(0, "cdk-table", 25, 26), t.YNc(2, $a, 5, 7, "ng-container", 27), t.YNc(3, Md, 4, 2, "ng-container", 0), t.ynx(4), t.YNc(5, _u, 1, 13, "cdk-row", 28), t.BQk(), t.YNc(6, hd, 4, 2, "ng-container", 0), t.ynx(7, 29), t.YNc(8, Td, 2, 1, "cdk-footer-cell", 30), t.BQk(), t.YNc(9, yl, 1, 0, "cdk-footer-row", 31), t.qZA()), 2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw().ngIf,
        An = t.oxw();
      t.Q6J("dataSource", ve)("trackBy", An.trackByFn), t.xp6(2), t.Q6J("ngForOf", yt.columnDef)("ngForTrackBy", An.trackByFnColumn), t.xp6(1), t.Q6J("ngIf", An.isGrouping), t.xp6(2), t.Q6J("cdkRowDefColumns", yt.columnList)("cdkRowDefWhen", An.displayMainRowFn), t.xp6(1), t.Q6J("ngIf", An.extraRowTemplate), t.xp6(3), t.Q6J("cdkFooterRowDef", t.DdM(9, sd));
    }
  }
  function Ie(we, Bt) {
    if (1 & we && (t.ynx(0), t.TgZ(1, "cdk-table", 1, 2), t.YNc(3, wn, 6, 7, "ng-container", 3), t.YNc(4, Ai, 1, 0, "cdk-header-row", 4), t.qZA(), t.YNc(5, _o, 3, 7, "ng-container", 0), t.TgZ(6, "cdk-virtual-scroll-viewport", 5), t.YNc(7, tl, 10, 10, "cdk-table", 6), t.ALo(8, "dataSourceSlice"), t.qZA(), t.BQk()), 2 & we) {
      const ve = Bt.ngIf,
        yt = t.oxw();
      t.xp6(1), t.Udp("left", yt.headerStickyOffset, "px"), t.Q6J("trackBy", yt.trackByFn), t.xp6(2), t.Q6J("ngForOf", ve.columnDef)("ngForTrackBy", yt.trackByFnColumn), t.xp6(1), t.Q6J("cdkHeaderRowDef", ve.columnList), t.xp6(1), t.Q6J("ngIf", yt.virtualLabels), t.xp6(1), t.Q6J("totalItems", ve.tableSource.length)("rowHeight", yt.rowHeight), t.xp6(1), t.Q6J("ngIf", t.xi3(8, 10, ve.tableSource, null == yt.vsScroll ? null : yt.vsScroll.range));
    }
  }
  const ft = [[["", "dpTableFooter", ""]]],
    rn = ["[dpTableFooter]"];
  let En = (() => {
      class we extends vo {
        constructor(ve, yt, An) {
          super(yt, An, ve), this.headerStickyOffset = 0, this.playedAnimations = new Set(), this.rowHeightStyle = "";
        }
        ngOnInit() {
          super.ngOnInit(), this.setRowHeightStyle();
        }
        ngAfterViewInit() {
          this.vsScroll?.measureScrollOffset().subscribe(ve => {
            this.headerStickyOffset = -1 * ve, this.cdr.detectChanges();
          });
        }
        ngAfterViewChecked() {
          this.cdkTable?.updateStickyColumnStyles(), this.headerTable?.updateStickyColumnStyles();
        }
        setRowHeightStyle() {
          this.rowHeightStyle = `height: ${this.rowHeight}px !important;`;
        }
        get rowHeight() {
          return this.tableOptions?.useVirtualTable?.rowHeight || 56;
        }
        isRowAnimationPlayed(ve) {
          return this.playedAnimations.has(ve.techId);
        }
        onRowAnimationEnd(ve) {
          this.playedAnimations.add(ve.techId);
        }
        onSelectGroupingLabel(ve) {
          void 0 !== ve.index && this.vsScroll?.scrollToIndex(ve.index, "smooth");
        }
        onRowsChanged() {
          this.playedAnimations.clear();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.sBO), t.Y36(Oo), t.Y36(si));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-virtual-table"]],
        viewQuery: function (ve, yt) {
          if (1 & ve && (t.Gf(iu, 5), t.Gf(Q, 5), t.Gf(se, 5)), 2 & ve) {
            let An;
            t.iGM(An = t.CRH()) && (yt.vsScroll = An.first), t.iGM(An = t.CRH()) && (yt.cdkTable = An.first), t.iGM(An = t.CRH()) && (yt.headerTable = An.first);
          }
        },
        inputs: {
          tableOptions: "tableOptions"
        },
        features: [t._Bn([cr, si, Oo]), t.qOj],
        ngContentSelectors: rn,
        decls: 3,
        vars: 5,
        consts: [[4, "ngIf"], ["multiTemplateDataRows", "", 1, "dp-table", "dp-table-header-only", 3, "trackBy"], ["headerTable", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "dp-table-header-row", "dpDataTestRole", "tableHeaderRow", 4, "cdkHeaderRowDef"], ["id", "scrollContainer", 3, "totalItems", "rowHeight"], ["class", "dp-table", "multiTemplateDataRows", "", "dpDataTestRole", "table", 3, "dataSource", "trackBy", 4, "ngIf"], [3, "cdkColumnDef", "stickyEnd", "sticky"], ["class", "__cell h1-table-cell-checkbox", 4, "cdkHeaderCellDef"], [1, "__cell", "h1-table-cell-checkbox"], ["dpDataTestRole", "tableCell", 3, "ngModel", "disabled", "ngModelChange"], ["class", "__cell-sticky dp-table-cell-icon __cell-sticky--first", 4, "cdkHeaderCellDef"], [1, "__cell-sticky", "dp-table-cell-icon", "__cell-sticky--first"], [1, "col-settings-control", 3, "luTooltip"], ["icon", "cog", 3, "size", "click"], [4, "cdkHeaderCellDef"], [3, "style", "ngClass", 4, "cdkHeaderCellDef"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["defaultHeader", ""], ["emptyCustomHeader", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dpDataTestRole", "tableCell", 3, "titleGroups", "sortParams", "sortAction", "filterAction"], ["dpDataTestRole", "tableHeaderRow", 1, "dp-table-header-row"], [3, "topOffset", "bottomOffset", "displayType", "labels", "selectLabel"], ["multiTemplateDataRows", "", "dpDataTestRole", "table", 1, "dp-table", 3, "dataSource", "trackBy"], ["cdkTable", ""], [3, "cdkColumnDef", "stickyEnd", "sticky", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "dp-table-row", "dpDataTestRole", "tableRow", 3, "ngClass", "dp-table-row_state_disabled", "dp-table-row_state_highlighted-selected", "background", "luTooltip", "canOpen", "dp-table-row_state_updated", "style", "dblclick", "click", "contextmenu", "mouseenter", "mouseleave", "animationend", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], ["cdkColumnDef", "footerRow"], ["class", "dp-table-footer-cell", "dpDataTestRole", "tableCell", 4, "cdkFooterCellDef"], ["class", "dp-table-footer-row", "dpDataTestRole", "tableRow", 4, "cdkFooterRowDef"], ["class", "__cell h1-table-cell-checkbox", 3, "click", 4, "cdkCellDef"], [1, "__cell", "h1-table-cell-checkbox", 3, "click"], ["dpDataTestRole", "tableCell", 2, "pointer-events", "none", 3, "ngModel", "click"], ["currentCheckbox", ""], [4, "cdkCellDef"], ["dpDataTestRole", "tableCell", 3, "style", "ngClass", 4, "cdkCellDef"], ["dpDataTestRole", "tableCell", 3, "ngClass"], ["expandTemplate", ""], ["cdkColumnDef", "groupHeader", 3, "sticky"], ["class", "dp-label-row-cell", "dpDataTestRole", "tableCell", 3, "ngClass", 4, "cdkCellDef"], ["class", "dp-label-row", "dpDataTestRole", "tableRow", 3, "style", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], ["dpDataTestRole", "tableCell", 1, "dp-label-row-cell", 3, "ngClass"], [1, "dp-label-grouping", 3, "isSticky", "viewData"], ["dpDataTestRole", "tableRow", 1, "dp-label-row"], ["class", "h1-table-cell-checkbox", 3, "click", 4, "cdkCellDef"], ["cdkColumnDef", "expand"], ["class", "dp-table-cell-icon dp-table-cell-toggle", "dpDataTestRole", "tableCell", 4, "cdkCellDef"], ["cdkColumnDef", "groupHeader"], ["class", "h1-table-cell", "dpDataTestRole", "tableCell", 4, "cdkCellDef"], ["class", "dp-table-row", "dpDataTestRole", "tableRow", 3, "dp-table-row_state_disabled", "ngClass", "style", "click", "mouseenter", "mouseleave", 4, "cdkRowDef", "cdkRowDefColumns", "cdkRowDefWhen"], [1, "h1-table-cell-checkbox", 3, "click"], ["dpDataTestRole", "tableCell", 2, "pointer-events", "none", 3, "disabled", "ngModel", "click"], ["dpDataTestRole", "tableCell", 1, "dp-table-cell-icon", "dp-table-cell-toggle"], ["icon", "chevron-down", 3, "size", 4, "ngIf"], ["icon", "chevron-right", 3, "size", 4, "ngIf"], ["icon", "chevron-down", 3, "size"], ["icon", "chevron-right", 3, "size"], ["dpDataTestRole", "tableCell", 1, "h1-table-cell"], [3, "viewData"], ["dpDataTestRole", "tableRow", 1, "dp-table-row", 3, "ngClass", "click", "mouseenter", "mouseleave"], ["dpDataTestRole", "tableRow", 1, "dp-table-row", 3, "ngClass", "luTooltip", "canOpen", "dblclick", "click", "contextmenu", "mouseenter", "mouseleave", "animationend"], ["cdkColumnDef", "extraRow"], ["class", "appearing-element", "dpDataTestRole", "tableCell", 3, "ngStyle", 4, "cdkCellDef"], ["class", "dp-table-row dp-table-row_type_extra", "dpDataTestRole", "tableRow", 3, "dp-table-row_state_highlighted", 4, "cdkRowDef", "cdkRowDefColumns"], ["dpDataTestRole", "tableCell", 1, "appearing-element", 3, "ngStyle"], ["extraRowElement", ""], ["dpDataTestRole", "tableRow", 1, "dp-table-row", "dp-table-row_type_extra"], ["dpDataTestRole", "tableCell", 1, "dp-table-footer-cell"], ["dpDataTestRole", "tableRow", 1, "dp-table-footer-row"]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(ft), t.YNc(0, Ie, 9, 13, "ng-container", 0), t.ALo(1, "tableViewData"), t.ALo(2, "async")), 2 & ve && t.Q6J("ngIf", t.lcZ(1, 1, t.lcZ(2, 3, yt.tableModel$)));
        },
        dependencies: [C.mk, C.sg, C.O5, C.tP, C.PC, Go.JJ, Go.On, wr, pt, mt, ut, Ct, Ue, Ee, vt, Ke, Ze, Ht, yi, Dn, fr, Qr, te.N7, I.$m, N.$, nu, gc, a.q, L.U, iu, va, C.Ov, zs, xs, Qe],
        styles: ["@charset \"UTF-8\";cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%]{display:flex;min-width:-moz-fit-content;min-width:fit-content}cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%]{flex-shrink:0}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;--table-row-color: var(--lu-white);--table-header-color: var(--lu-white);--table-footer-color: var(--lu-white)}.__cell[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 2);margin-bottom:var(--lu-base-gutter)}.__cell-sticky[_ngcontent-%COMP%]{position:relative;background-color:var(--table-row-color);margin-bottom:var(--lu-base-gutter)}.__cell-sticky.cdk-header-cell[_ngcontent-%COMP%]:before{content:\" \";position:absolute;width:calc(var(--lu-base-gutter) * 4);height:100%;left:calc(var(--lu-base-gutter) * -4);background:linear-gradient(to left,var(--lu-white) 20%,transparent)}.__cell-sticky--first[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-grow:2}.__cell[_ngcontent-%COMP%]:first-child{margin-left:0}.dp-label-row-cell[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end}.dp-label-grouping[_ngcontent-%COMP%]{padding-left:var(--lu-base-gutter)}.dp-table[_ngcontent-%COMP%]{flex-grow:1;min-width:-moz-fit-content;min-width:fit-content;background-color:var(--lu-black-5)}.dp-table-header-only[_ngcontent-%COMP%]{position:relative}.dp-table-header-row[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;padding:0 0 0 24px;min-height:40px;box-shadow:0 2px 3px #00000014,0 6px 8px -2px #00000014;background-color:var(--table-header-color)}.dp-label-row[_ngcontent-%COMP%]{background-color:var(--lu-black-5)}.h1-table-cell-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer;--lu-checkbox-color: var(--us-control-color, var(--lu-primary-hover))}.dp-table-cell-toggle[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 2)}.dp-table-cell-icon[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-end;cursor:pointer;--lu-svg-icon-color: var(--us-control-color, var(--lu-primary-hover));padding:0 var(--lu-base-gutter)}.dp-table-cell-icon[_ngcontent-%COMP%]   .col-settings-control[_ngcontent-%COMP%]{margin-bottom:2px}.dp-table-row[_ngcontent-%COMP%]{position:relative;padding:0 0 0 24px;background-color:var(--table-row-color);cursor:default}.dp-table-row[_ngcontent-%COMP%]:not(:last-child):after{z-index:1;content:\"\";position:absolute;bottom:0;left:24px;right:0;height:1px;background-color:var(--lu-black-10)}.dp-table-row_state_highlighted-active[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-active-color, var(--lu-blue-10)) !important;--dp-row-hover-btn: var(--us-table-row-hover-active-btn-color, var(--lu-blue-30)) !important;background-color:var(--us-table-row-hover-color, var(--lu-blue-10))!important}.dp-table-row_state_highlighted-inactive[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-inactive-color, var(--lu-black-5)) !important;--dp-row-hover-btn: var(--us-table-row-hover-inactive-btn-color, var(--lu-black-10)) !important;background-color:var(--us-table-row-hover-inactive-color, var(--lu-black-5))!important}.dp-table-row_state_highlighted-selected[_ngcontent-%COMP%]{--dp-row-hover-bg: var(--us-table-row-hover-selected-color, var(--lu-yellow-10)) !important;--dp-row-hover-btn: var(--us-table-row-hover-selected-btn-color, var(--lu-yellow-20)) !important;background-color:var(--us-table-row-hover-selected-color, var(--lu-yellow-10))!important}.dp-table-row_state_disabled[_ngcontent-%COMP%]{background:var(--us-table-row-disabled-color, rgba(0, 0, 0, .05));opacity:var(--us-table-row-disabled-opacity, .4)}.dp-table-row_state_updated[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rowUpdated 2s ease-in-out forwards}.dp-table-row_type_extra[_ngcontent-%COMP%]{width:100%}.dp-table-row_type-loading[_ngcontent-%COMP%]{cursor:progress}#scrollContainer[_ngcontent-%COMP%]{height:100%;background-color:var(--lu-black-5);overflow-anchor:none}#scrollContainer[_ngcontent-%COMP%]   .cdk-virtual-scroll-content-wrapper[_ngcontent-%COMP%]{overflow-anchor:none}.dp-table-footer-row[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0 0 0 24px;background-color:var(--table-footer-color);cursor:default}.dp-table-footer-cell[_ngcontent-%COMP%]{flex-grow:1}.h1-table-cell[_ngcontent-%COMP%]{padding-top:var(--dp-table-cell-padding-y, 12px);padding-bottom:calc(var(--dp-table-cell-padding-y, 12px) - var(--lu-base-gutter));font-weight:400;font-size:15px;line-height:24px;color:var(--lu-black-80);overflow-wrap:break-word}.appearing-element[_ngcontent-%COMP%]{width:100%;overflow:hidden;transition:height .3s linear}.appearing-element_state_hide[_ngcontent-%COMP%]{height:0!important}.element-hide[_ngcontent-%COMP%]{display:none}@keyframes _ngcontent-%COMP%_rowUpdated{0%{background-color:var(--lu-yellow-20)}to{background-color:var(--table-row-color)}}.secondary[_nghost-%COMP%]   cdk-row[_ngcontent-%COMP%], .secondary[_nghost-%COMP%]   cdk-header-row[_ngcontent-%COMP%], .secondary[_nghost-%COMP%]   cdk-footer-row[_ngcontent-%COMP%]{justify-content:space-between}.secondary[_nghost-%COMP%]   .__cell[_ngcontent-%COMP%]{margin-left:0}.secondary[_nghost-%COMP%]   .dp-table-header-row[_ngcontent-%COMP%]{box-shadow:none;background-color:var(--table-header-color)}.secondary[_nghost-%COMP%]   .dp-table-header-row[_ngcontent-%COMP%]:after{z-index:1;content:\"\";position:absolute;bottom:0;left:24px;right:0;height:1px;background-color:var(--lu-black-10)}.secondary[_nghost-%COMP%]   .dp-table-row[_ngcontent-%COMP%]{background-color:var(--table-row-color)}"],
        changeDetection: 0
      }), we;
    })(),
    Kn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, Go.u5, lo, lu, te.Cl, I.Nu, O.P, N.i, Xs, Vi, Tn, fl, Bi, Rc, Zr, Jc, M.W1, ti.p, a.h, L.w, Bs, $e, Hn, Fc, ac]
      }), we;
    })();
  function Uo(we, Bt) {
    1 & we && (t.TgZ(0, "dp-universal-list-alternatives-container", 2), t._UZ(1, "dp-alt-no-items"), t.qZA()), 2 & we && t.Q6J("containerType", "no-items");
  }
  function Vr(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-universal-list-alternatives-container", 2)(1, "dp-alt-no-items-on-page", 3), t.NdJ("runEvent", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onRefresh());
      }), t.qZA()();
    }
    2 & we && t.Q6J("containerType", "no-items-on-page");
  }
  function ea(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-universal-list-alternatives-container", 4), t.NdJ("runEvent", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onClearFilter());
      }), t.TgZ(1, "dp-alt-no-items-filtered", 3), t.NdJ("runEvent", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onClearFilter());
      }), t.qZA()();
    }
    2 & we && t.Q6J("containerType", "no-items-filtered");
  }
  function Zs(we, Bt) {
    if (1 & we) {
      const ve = t.EpF();
      t.TgZ(0, "dp-universal-list-alternatives-container", 4), t.NdJ("runEvent", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onRefresh());
      }), t.TgZ(1, "dp-alt-search-failure", 3), t.NdJ("runEvent", function () {
        t.CHM(ve);
        const An = t.oxw();
        return t.KtG(An.onRefresh());
      }), t.qZA()();
    }
    2 & we && t.Q6J("containerType", "search-failure");
  }
  let xl = (() => {
      class we {
        constructor() {
          this.viewData = {
            status: "INITIAL",
            isApplyFilter: !1,
            isPaging: !1
          }, this.clearFilter = new t.vpe(), this.refresh = new t.vpe();
        }
        onRefresh() {
          this.refresh.emit();
        }
        onClearFilter() {
          this.clearFilter.emit();
        }
        get displayNoItems() {
          return "SUCCESS" === this.viewData.status && !this.viewData.isApplyFilter && !this.viewData.isPaging;
        }
        get displayNoItemsOnPage() {
          return "SUCCESS" === this.viewData.status && !this.viewData.isApplyFilter && this.viewData.isPaging;
        }
        get displayIsFiltered() {
          return "SUCCESS" === this.viewData.status && this.viewData.isApplyFilter;
        }
        get displayFailure() {
          return "FAILURE" === this.viewData.status;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-table-no-items-view"]],
        inputs: {
          viewData: "viewData"
        },
        outputs: {
          clearFilter: "clearFilter",
          refresh: "refresh"
        },
        decls: 4,
        vars: 4,
        consts: [[3, "containerType", 4, "ngIf"], [3, "containerType", "runEvent", 4, "ngIf"], [3, "containerType"], [3, "runEvent"], [3, "containerType", "runEvent"]],
        template: function (ve, yt) {
          1 & ve && (t.YNc(0, Uo, 2, 1, "dp-universal-list-alternatives-container", 0), t.YNc(1, Vr, 2, 1, "dp-universal-list-alternatives-container", 0), t.YNc(2, ea, 2, 1, "dp-universal-list-alternatives-container", 1), t.YNc(3, Zs, 2, 1, "dp-universal-list-alternatives-container", 1)), 2 & ve && (t.Q6J("ngIf", yt.displayNoItems), t.xp6(1), t.Q6J("ngIf", yt.displayNoItemsOnPage), t.xp6(1), t.Q6J("ngIf", yt.displayIsFiltered), t.xp6(1), t.Q6J("ngIf", yt.displayFailure));
        },
        dependencies: [C.O5, us, yo, Qo, hs, _s],
        styles: [".message-container[_ngcontent-%COMP%]{--lu-replacement-index: 0;--lu-replacement-bg: var(--lu-black-5)}.message-title[_ngcontent-%COMP%]{color:var(--lu-black-100)}.message-text[_ngcontent-%COMP%]{display:flex}.message-text__button[_ngcontent-%COMP%]{margin:0 calc(var(--lu-base-gutter) / 2)}"],
        changeDetection: 0
      }), we;
    })(),
    Ec = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, E.M0, a.h, M.W1, Ps, Qi, Kr, oi, ra]
      }), we;
    })();
  const Ya = ["*"];
  let Zl = (() => {
    class we {}
    return we.ɵfac = function (ve) {
      return new (ve || we)();
    }, we.ɵcmp = t.Xpm({
      type: we,
      selectors: [["dp-table-row-control-panel"]],
      ngContentSelectors: Ya,
      decls: 2,
      vars: 0,
      consts: [[1, "table-row-control-panel"]],
      template: function (ve, yt) {
        1 & ve && (t.F$t(), t.TgZ(0, "div", 0), t.Hsn(1), t.qZA());
      },
      styles: [".table-row-control-panel[_ngcontent-%COMP%]{display:flex;height:100%;background-color:var(--dp-row-hover-bg, var(--lu-blue-10));position:relative}.table-row-control-panel[_ngcontent-%COMP%]:before{content:\"\";position:absolute;height:100%;left:-80px;width:80px;background:linear-gradient(to left,var(--dp-row-hover-bg, var(--lu-blue-10)),transparent)}"],
      changeDetection: 0
    }), we;
  })();
  function ku(we, Bt) {
    if (1 & we && t._UZ(0, "lu-svg-icon", 3), 2 & we) {
      const ve = t.oxw();
      t.Q6J("ngClass", ve.getTypeClassName("table-row-control-panel-icon"))("icon", ve.iconName)("size", ve.iconSize);
    }
  }
  function mp(we, Bt) {
    if (1 & we && (t.TgZ(0, "span"), t._uU(1), t.qZA()), 2 & we) {
      const ve = t.oxw();
      t.xp6(1), t.Oqu(ve.text);
    }
  }
  let Ed = (() => {
      class we {
        constructor() {
          this.iconSize = 24, this.type = "default";
        }
        getTypeClassName(ve) {
          switch (this.type) {
            case "danger":
              return this.updateClassByText([ve, `${ve}--danger`], ve);
            case "success":
              return this.updateClassByText([ve, `${ve}--success`], ve);
            default:
              return this.updateClassByText([ve], ve);
          }
        }
        updateClassByText(ve, yt) {
          return this.text ? [...ve, `${yt}--text`] : ve;
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-table-row-control-panel-button"]],
        inputs: {
          iconName: "iconName",
          text: "text",
          iconSize: "iconSize",
          type: "type"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "ngClass"], ["class", "table-row-control-panel-btn__icon table-row-control-panel-icon", 3, "ngClass", "icon", "size", 4, "ngIf"], [4, "ngIf"], [1, "table-row-control-panel-btn__icon", "table-row-control-panel-icon", 3, "ngClass", "icon", "size"]],
        template: function (ve, yt) {
          1 & ve && (t.TgZ(0, "button", 0), t.YNc(1, ku, 1, 3, "lu-svg-icon", 1), t.YNc(2, mp, 2, 1, "span", 2), t.qZA()), 2 & ve && (t.Q6J("ngClass", yt.getTypeClassName("table-row-control-panel-btn")), t.xp6(1), t.Q6J("ngIf", yt.iconName), t.xp6(1), t.Q6J("ngIf", yt.text));
        },
        dependencies: [C.mk, C.O5, a.q],
        styles: [".table-row-control-panel-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:48px;height:100%;border:0;background-color:var(--dp-row-hover-bg, var(--lu-blue-10))}.table-row-control-panel-btn[_ngcontent-%COMP%]:hover{background-color:var(--dp-row-hover-btn, var(--lu-blue-30));cursor:pointer}.table-row-control-panel-btn--danger[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-30)}.table-row-control-panel-btn--danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--lu-red-100)}.table-row-control-panel-btn--success[_ngcontent-%COMP%]:hover{background-color:var(--lu-green-30)}.table-row-control-panel-btn--success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--lu-green-100)}.table-row-control-panel-btn--text[_ngcontent-%COMP%]{width:auto;padding:0px calc(var(--lu-base-gutter) * 2)}.table-row-control-panel-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--lu-blue-100);font-weight:600}.table-row-control-panel-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-blue-100)}.table-row-control-panel-icon--danger[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-100)}.table-row-control-panel-icon--success[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-green-100)}"],
        changeDetection: 0
      }), we;
    })(),
    gp = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, a.h]
      }), we;
    })();
  const fd = ["*"];
  let kn = (() => {
      class we {
        constructor(ve) {
          this.cdr = ve;
        }
        ngAfterViewInit() {
          this.cdr.detectChanges();
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)(t.Y36(t.sBO));
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-text-cropping"]],
        ngContentSelectors: fd,
        decls: 3,
        vars: 6,
        consts: [["dpTextCropping", "", 3, "maxLines", "luTooltip", "wordBreakAll", "positions", "delay", "canOpen"], ["croppedElement", "dpTextCropping"]],
        template: function (ve, yt) {
          if (1 & ve && (t.F$t(), t.TgZ(0, "div", 0, 1), t.Hsn(2), t.qZA()), 2 & ve) {
            const An = t.MAs(1);
            t.Q6J("maxLines", 1)("luTooltip", An.text)("wordBreakAll", !0)("positions", "top-center")("delay", 500)("canOpen", An.isCropped);
          }
        },
        dependencies: [ki.ZC, N.$],
        encapsulation: 2,
        changeDetection: 0
      }), we;
    })(),
    nn = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, ki.nX, N.i]
      }), we;
    })();
  const zt = ["*"];
  let Jn = (() => {
      class we {
        constructor() {
          this.tooltip = "Не известный тип компонента";
        }
      }
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵcmp = t.Xpm({
        type: we,
        selectors: [["dp-unknown-component"]],
        inputs: {
          tooltip: "tooltip"
        },
        ngContentSelectors: zt,
        decls: 2,
        vars: 1,
        consts: [[1, "nfc", 3, "luTooltip"]],
        template: function (ve, yt) {
          1 & ve && (t.F$t(), t.TgZ(0, "div", 0), t.Hsn(1), t.qZA()), 2 & ve && t.Q6J("luTooltip", yt.tooltip);
        },
        dependencies: [N.$],
        styles: [".nfc[_ngcontent-%COMP%]{background:#f5a2a2;color:#fff;padding:0 8px;border-radius:6px}"],
        changeDetection: 0
      }), we;
    })(),
    Do = (() => {
      class we {}
      return we.ɵfac = function (ve) {
        return new (ve || we)();
      }, we.ɵmod = t.oAB({
        type: we
      }), we.ɵinj = t.cJS({
        imports: [C.ez, N.i]
      }), we;
    })();
});
