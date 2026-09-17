// Extracted from main; webpack module 99691. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    e: () => ye,
    l: () => ae
  });
  var t = i(97582),
    e = i(12687),
    a = i(36895),
    m = i(94650),
    d = i(58435),
    M = i(99246),
    b = i(56451),
    A = i(54968),
    N = i(11848),
    I = i(82805),
    O = i(82722),
    L = i(61260),
    C = i(60515),
    v = i(54482),
    f = i(25403),
    E = i(38421),
    x = i(39300),
    u = i(54004),
    T = i(68675),
    R = i(50590),
    B = i(78372),
    y = i(26652),
    j = i(15635),
    W = i(85273),
    F = i(41089),
    Le = i(44348),
    ke = i(46757),
    J = i(41742);
  const fe = ["*"];
  let ye = (() => {
      let Y = class {
        constructor(te, pe, be, le, n, Se, qe, Rt, We) {
          this.elementRef = te, this.ngZone = pe, this.documentRef = be, this.nativeFocus = le, this.listController = n, this.listHost = Se, this.controlHost = qe, this.hostModelType = Rt, this.compareHost = We, this.autofocus = !0, this.optionsScroll = new m.vpe(), this.keyManager = null, this.dataTestRole = "optionList";
          const Re = this.listHost?.listHostOrigin ? (0, j.Nj)(this.listHost?.listHostOrigin) : null,
            st = (0, j.Nj)(this.elementRef);
          (0, b.T)((0, A.R)(st, "keydown"), Re ? (0, A.R)(Re, "keydown").pipe((0, O.R)((0, A.R)(st, "keydown")), (0, L.j)(() => this.ngZone.onStable), function h(Y) {
            let te,
              G = 1 / 0;
            return null != Y && ("object" == typeof Y ? {
              count: G = 1 / 0,
              delay: te
            } = Y : G = Y), G <= 0 ? () => C.E : (0, v.e)((pe, be) => {
              let n,
                le = 0;
              const Se = () => {
                  if (n?.unsubscribe(), n = null, null != te) {
                    const Rt = "number" == typeof te ? (0, I.H)(te) : (0, E.Xf)(te(le)),
                      We = new f.Q(be, () => {
                        We.unsubscribe(), qe();
                      });
                    Rt.subscribe(We);
                  } else qe();
                },
                qe = () => {
                  let Rt = !1;
                  n = pe.subscribe(new f.Q(be, void 0, () => {
                    ++le < G ? n ? Se() : Rt = !0 : be.complete();
                  })), Rt && Se();
                };
              qe();
            });
          }()) : N.C).pipe((0, x.h)(q => !q.defaultPrevented), (0, d.t)(this)).subscribe(q => {
            const mt = q;
            switch (mt.key) {
              case "ArrowUp":
                this.focusPrevious(), mt.preventDefault();
                break;
              case "ArrowDown":
                this.focusNext(), mt.preventDefault();
                break;
              case "Enter":
                this.nativeFocus || this.keyManager?.activeItem?.selectByUser(), mt.preventDefault();
            }
          });
        }
        ngOnInit() {
          (0, A.R)(this.elementRef.nativeElement, "scroll").pipe((0, d.t)(this), (0, u.U)(te => te.target)).subscribe(te => {
            this.optionsScroll.emit(te.scrollHeight - te.scrollTop - te.clientHeight);
          });
        }
        ngAfterViewInit() {
          this.listController?.listItems.changes.pipe((0, T.O)(null), (0, d.t)(this)).subscribe(() => {
            const te = this.listController?.listItems.find(pe => pe.hovered);
            this.reinitializeKeyManager(), te && this.keyManager?.setActiveItem(te);
          }), this.autofocus && (0, I.H)(0).pipe((0, J.hx)(this.ngZone), (0, R.P)()).subscribe(() => this.focusFirstSelected());
        }
        focusEvent() {
          this.keyManager?.activeItem && (this.keyManager.activeItem.setInactiveStyles(), this.reinitializeKeyManager());
        }
        reinitializeKeyManager() {
          if (this.listController) {
            const te = [...this.listController.listItems].sort((pe, be) => pe.index - be.index);
            this.keyManager = new e.s1(te);
          }
        }
        focusFirstSelected() {
          const te = this.firstSelectedIndex();
          te > -1 && this.listController && (this.listController.scrollToIndex(te), this.listController.listItems.changes.pipe((0, T.O)(this.listController.listItems), (0, B.b)(10), (0, R.P)()).subscribe(() => {
            if (this.listController) {
              const pe = this.listController.listItems.toArray().findIndex(be => be.isSelected);
              if (this.nativeFocus) {
                const be = this.listController.listItems.toArray()[pe];
                be && be.listItemOrigin && (0, j.Nj)(be.listItemOrigin).focus();
              } else this.keyManager?.setActiveItem(pe);
            }
          }));
        }
        focusPrevious() {
          this.nativeFocus || this.focusCatcher?.focused ? this.documentRef.activeElement instanceof HTMLElement && (y.Hn.focusClosestElement(this.documentRef.activeElement, this.elementRef.nativeElement, !1), this.documentRef.activeElement?.scrollIntoView()) : (this.keyManager?.setPreviousItemActive(), this.keyManager?.activeItem?.listItemOrigin && (0, j.Nj)(this.keyManager.activeItem.listItemOrigin).scrollIntoView());
        }
        focusNext() {
          this.nativeFocus || this.focusCatcher?.focused ? this.documentRef.activeElement instanceof HTMLElement && (y.Hn.focusClosestElement(this.documentRef.activeElement, this.elementRef.nativeElement), this.documentRef.activeElement?.scrollIntoView()) : (this.keyManager?.setNextItemActive(), this.keyManager?.activeItem?.listItemOrigin && (0, j.Nj)(this.keyManager.activeItem.listItemOrigin).scrollIntoView());
        }
        firstSelectedIndex() {
          if (this.listController && this.controlHost) {
            const te = this.listController.getItems(),
              pe = this.compareHost?.compareFn || W.kX,
              be = this.controlHost.model;
            return te.findIndex((this.hostModelType || null) === ke.Ls.ARRAY ? n => (0, j._2)(be).some(Se => pe(Se, n)) : n => pe(be, n));
          }
          return -1;
        }
      };
      return Y.ɵfac = function (te) {
        return new (te || Y)(m.Y36(m.SBq), m.Y36(m.R0b), m.Y36(a.K0), m.Y36(M.bD, 8), m.Y36(Le.Qu, 8), m.Y36(Le.Mn, 8), m.Y36(M.fU, 8), m.Y36(M.Oc, 8), m.Y36(Le.Vg, 8));
      }, Y.ɵcmp = m.Xpm({
        type: Y,
        selectors: [["lu-list"]],
        viewQuery: function (te, pe) {
          if (1 & te && m.Gf(F.V, 5), 2 & te) {
            let be;
            m.iGM(be = m.CRH()) && (pe.focusCatcher = be.first);
          }
        },
        hostVars: 1,
        hostBindings: function (te, pe) {
          2 & te && m.uIk("data-test-role", pe.dataTestRole);
        },
        inputs: {
          autofocus: "autofocus"
        },
        outputs: {
          optionsScroll: "optionsScroll"
        },
        ngContentSelectors: fe,
        decls: 2,
        vars: 0,
        consts: [["luFocusCatcher", "", 3, "focusEvent"]],
        template: function (te, pe) {
          1 & te && (m.F$t(), m.TgZ(0, "div", 0), m.NdJ("focusEvent", function () {
            return pe.focusEvent();
          }), m.Hsn(1), m.qZA());
        },
        dependencies: [F.V],
        styles: ["[_nghost-%COMP%]{display:block}"],
        changeDetection: 0
      }), Y = (0, t.gn)([(0, d.c)()], Y), Y;
    })(),
    ae = (() => {
      class Y {}
      return Y.ɵfac = function (te) {
        return new (te || Y)();
      }, Y.ɵmod = m.oAB({
        type: Y
      }), Y.ɵinj = m.cJS({
        imports: [a.ez, F.T]
      }), Y;
    })();
});
