// Extracted from main; webpack module 92203. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Y: () => B,
    z: () => R
  });
  var t = i(97582),
    e = i(94650),
    a = i(85623),
    m = i(68675),
    d = i(54004),
    M = i(71884),
    b = i(85273),
    A = i(44348),
    N = i(34304),
    I = i(36895),
    O = i(89740),
    L = i(15472);
  const C = ["labelElement"],
    v = ["lu-label", ""];
  function f(y, j) {
    if (1 & y && (e.ynx(0), e._uU(1), e.BQk()), 2 & y) {
      const W = j.polymorpheusOutlet;
      e.xp6(1), e.Oqu(W);
    }
  }
  function E(y, j) {
    if (1 & y && (e.TgZ(0, "span", 3, 4), e.YNc(2, f, 2, 1, "ng-container", 5), e.qZA()), 2 & y) {
      const W = e.oxw();
      e.xp6(2), e.Q6J("polymorpheusOutlet", W.label);
    }
  }
  function h(y, j) {
    1 & y && (e.TgZ(0, "span", 7), e.Hsn(1, 1), e.qZA());
  }
  function x(y, j) {
    if (1 & y && (e.ynx(0), e.YNc(1, h, 2, 0, "span", 6), e.BQk()), 2 & y) {
      const W = e.oxw();
      e.xp6(1), e.Q6J("ngIf", W.messages.length);
    }
  }
  const u = ["*", [["lu-form-message"]]],
    T = ["*", "lu-form-message"];
  let R = (() => {
      class y {
        constructor(W) {
          this.elementRef = W, this.label = "", this.orientation = "vertical", this.messageOrientation = "vertical", this.align = "left", this.messages = b.Mm, this.elementRef?.nativeElement?.setAttribute("data-test-role", "title");
        }
        get state() {
          return this.messages.reduce((W, F) => "error" === F.type || "error" === W ? "error" : "warning" === F.type || "warning" === W ? "warning" : null, null);
        }
        get stateChanges() {
          return this.messages.changes.pipe((0, m.O)(null), (0, d.U)(() => this.state), (0, M.x)());
        }
      }
      return y.ɵfac = function (W) {
        return new (W || y)(e.Y36(e.SBq));
      }, y.ɵcmp = e.Xpm({
        type: y,
        selectors: [["label", "lu-label", ""]],
        contentQueries: function (W, F, Le) {
          if (1 & W && e.Suo(Le, a.l, 5), 2 & W) {
            let ke;
            e.iGM(ke = e.CRH()) && (F.messages = ke);
          }
        },
        viewQuery: function (W, F) {
          if (1 & W && e.Gf(C, 5, e.SBq), 2 & W) {
            let Le;
            e.iGM(Le = e.CRH()) && (F.labelElement = Le.first);
          }
        },
        hostVars: 4,
        hostBindings: function (W, F) {
          2 & W && e.uIk("data-lu-orientation", F.orientation)("data-lu-message-orientation", F.messageOrientation)("data-lu-align", F.align)("data-lu-control-state", F.state);
        },
        inputs: {
          label: ["lu-label", "label"],
          orientation: "orientation",
          messageOrientation: "messageOrientation",
          align: "align"
        },
        features: [e._Bn([{
          provide: A.Qe,
          useExisting: y
        }])],
        attrs: v,
        ngContentSelectors: T,
        decls: 5,
        vars: 4,
        consts: [["class", "lu-label", 4, "ngIf"], [1, "lu-content"], [4, "luLet"], [1, "lu-label"], ["labelElement", ""], [4, "polymorpheusOutlet"], ["class", "lu-form-messages", 4, "ngIf"], [1, "lu-form-messages"]],
        template: function (W, F) {
          1 & W && (e.F$t(u), e.YNc(0, E, 3, 1, "span", 0), e.TgZ(1, "span", 1), e.Hsn(2), e.YNc(3, x, 2, 1, "ng-container", 2), e.ALo(4, "async"), e.qZA()), 2 & W && (e.Q6J("ngIf", F.label), e.xp6(3), e.Q6J("luLet", e.lcZ(4, 2, F.stateChanges)));
        },
        dependencies: [I.O5, O.Li, L.zh, I.Ov],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;pointer-events:none}[data-lu-orientation=vertical][_nghost-%COMP%]   .lu-label[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter)}[data-lu-orientation=horizontal][_nghost-%COMP%]{flex-direction:row}[data-lu-orientation=horizontal][_nghost-%COMP%]   .lu-label[_ngcontent-%COMP%]{align-items:flex-start;padding-bottom:0;padding-top:var(--lu-base-gutter);padding-right:calc(var(--lu-base-gutter) * 2)}[data-lu-message-orientation=horizontal][_nghost-%COMP%]   .lu-content[_ngcontent-%COMP%]{flex-direction:row}[data-lu-message-orientation=horizontal][_nghost-%COMP%]   .lu-form-messages[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}[data-lu-align=right][_nghost-%COMP%]   .lu-label[_ngcontent-%COMP%]{align-self:flex-end;text-align:end}[data-lu-control-state=error][_nghost-%COMP%]{--lu-floated-border: var(--lu-error);--lu-focus: var(--lu-error)}[data-lu-control-state=warning][_nghost-%COMP%]{--lu-floated-border: var(--lu-warning);--lu-focus: var(--lu-warning)}.lu-label[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:flex;flex-direction:row;pointer-events:auto}.lu-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;width:var(--lu-label-content-width, 100%)}.lu-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .lu-content[_ngcontent-%COMP%]    >*{pointer-events:auto}.lu-button-content[_ngcontent-%COMP%]{flex:1}.lu-form-messages[_ngcontent-%COMP%]:not(:empty){margin-top:var(--lu-base-gutter)}"],
        changeDetection: 0
      }), (0, t.gn)([N.J], y.prototype, "stateChanges", null), y;
    })(),
    B = (() => {
      class y {}
      return y.ɵfac = function (W) {
        return new (W || y)();
      }, y.ɵmod = e.oAB({
        type: y
      }), y.ɵinj = e.cJS({
        imports: [I.ez, O.wq, L.DH]
      }), y;
    })();
});
