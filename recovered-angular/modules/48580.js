// Extracted from main; webpack module 48580. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    dD: () => I,
    xI: () => A
  });
  var t = i(94650),
    e = i(95017),
    a = i(21281),
    m = i(77579),
    d = i(50727);
  let M = 0;
  const b = new t.OlP("CdkAccordion");
  let A = (() => {
      class L {
        constructor() {
          this._stateChanges = new m.x(), this._openCloseAllActions = new m.x(), this.id = "cdk-accordion-" + M++, this._multi = !1;
        }
        get multi() {
          return this._multi;
        }
        set multi(v) {
          this._multi = (0, a.Ig)(v);
        }
        openAll() {
          this._multi && this._openCloseAllActions.next(!0);
        }
        closeAll() {
          this._openCloseAllActions.next(!1);
        }
        ngOnChanges(v) {
          this._stateChanges.next(v);
        }
        ngOnDestroy() {
          this._stateChanges.complete(), this._openCloseAllActions.complete();
        }
      }
      return L.ɵfac = function (v) {
        return new (v || L)();
      }, L.ɵdir = t.lG2({
        type: L,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [t._Bn([{
          provide: b,
          useExisting: L
        }]), t.TTD]
      }), L;
    })(),
    N = 0,
    I = (() => {
      class L {
        get expanded() {
          return this._expanded;
        }
        set expanded(v) {
          v = (0, a.Ig)(v), this._expanded !== v && (this._expanded = v, this.expandedChange.emit(v), v ? (this.opened.emit(), this._expansionDispatcher.notify(this.id, this.accordion ? this.accordion.id : this.id)) : this.closed.emit(), this._changeDetectorRef.markForCheck());
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(v) {
          this._disabled = (0, a.Ig)(v);
        }
        constructor(v, f, E) {
          this.accordion = v, this._changeDetectorRef = f, this._expansionDispatcher = E, this._openCloseAllSubscription = d.w0.EMPTY, this.closed = new t.vpe(), this.opened = new t.vpe(), this.destroyed = new t.vpe(), this.expandedChange = new t.vpe(), this.id = "cdk-accordion-child-" + N++, this._expanded = !1, this._disabled = !1, this._removeUniqueSelectionListener = () => {}, this._removeUniqueSelectionListener = E.listen((h, x) => {
            this.accordion && !this.accordion.multi && this.accordion.id === x && this.id !== h && (this.expanded = !1);
          }), this.accordion && (this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions());
        }
        ngOnDestroy() {
          this.opened.complete(), this.closed.complete(), this.destroyed.emit(), this.destroyed.complete(), this._removeUniqueSelectionListener(), this._openCloseAllSubscription.unsubscribe();
        }
        toggle() {
          this.disabled || (this.expanded = !this.expanded);
        }
        close() {
          this.disabled || (this.expanded = !1);
        }
        open() {
          this.disabled || (this.expanded = !0);
        }
        _subscribeToOpenCloseAllActions() {
          return this.accordion._openCloseAllActions.subscribe(v => {
            this.disabled || (this.expanded = v);
          });
        }
      }
      return L.ɵfac = function (v) {
        return new (v || L)(t.Y36(b, 12), t.Y36(t.sBO), t.Y36(e.A8));
      }, L.ɵdir = t.lG2({
        type: L,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [t._Bn([{
          provide: b,
          useValue: void 0
        }])]
      }), L;
    })();
});
