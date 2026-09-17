// Extracted from main; webpack module 56137. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    BN: () => u,
    JM: () => T,
    e_: () => R
  });
  var t = i(94650),
    e = i(48580),
    a = i(71801),
    m = i(95017),
    d = i(36895),
    M = i(77978),
    b = i(32643),
    A = i(93278);
  function N(B, y) {
    1 & B && t.Hsn(0);
  }
  function I(B, y) {
    1 & B && t.GkF(0);
  }
  function O(B, y) {
    if (1 & B && (t.ynx(0), t.YNc(1, I, 1, 0, "ng-container", 4), t.BQk()), 2 & B) {
      t.oxw();
      const j = t.MAs(1);
      t.xp6(1), t.Q6J("ngTemplateOutlet", j);
    }
  }
  function L(B, y) {
    1 & B && t.Hsn(0, 1);
  }
  function C(B, y) {
    1 & B && t.GkF(0);
  }
  function v(B, y) {
    if (1 & B && (t.ynx(0), t.YNc(1, C, 1, 0, "ng-container", 4), t.BQk()), 2 & B) {
      t.oxw();
      const j = t.MAs(1);
      t.xp6(1), t.Q6J("ngTemplateOutlet", j);
    }
  }
  const f = [[["lu-expansion-panel-header"]], "*"],
    E = ["lu-expansion-panel-header", "*"];
  function h(B, y) {
    1 & B && t._UZ(0, "lu-svg-icon", 2);
  }
  const x = ["*"];
  let u = (() => {
      class B extends e.dD {
        constructor(j, W, F) {
          super(j, W, F), this.accordion = j, this.changeDetectorRef = W, this.uniqueSelectionDispatcher = F, this.headerPosition = "top";
        }
        get isExpanded() {
          return this.expanded;
        }
        get isAccordionItem() {
          return !!this.accordion;
        }
      }
      return B.ɵfac = function (j) {
        return new (j || B)(t.Y36(a.r, 8), t.Y36(t.sBO), t.Y36(m.A8));
      }, B.ɵcmp = t.Xpm({
        type: B,
        selectors: [["lu-expansion-panel"]],
        hostVars: 3,
        hostBindings: function (j, W) {
          2 & j && t.uIk("data-lu-header-position", W.headerPosition)("data-lu-expanded", W.isExpanded)("data-lu-accordion-item", W.isAccordionItem);
        },
        inputs: {
          headerPosition: "headerPosition"
        },
        features: [t.qOj],
        ngContentSelectors: E,
        decls: 7,
        vars: 4,
        consts: [["header", ""], [4, "ngIf"], [1, "lu-expansion-panel-content", 3, "expanded", "content"], ["content", ""], [4, "ngTemplateOutlet"]],
        template: function (j, W) {
          if (1 & j && (t.F$t(f), t.YNc(0, N, 1, 0, "ng-template", null, 0, t.W1O), t.YNc(2, O, 2, 1, "ng-container", 1), t.TgZ(3, "lu-expander", 2), t.YNc(4, L, 1, 0, "ng-template", null, 3, t.W1O), t.qZA(), t.YNc(6, v, 2, 1, "ng-container", 1)), 2 & j) {
            const F = t.MAs(5);
            t.xp6(2), t.Q6J("ngIf", "top" === W.headerPosition), t.xp6(1), t.Q6J("expanded", W.expanded)("content", F), t.xp6(3), t.Q6J("ngIf", "bottom" === W.headerPosition);
          }
        },
        dependencies: [d.O5, d.tP, M.G],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden;transition:flex var(--lu-transition);min-height:32px}.lu-expansion-panel-content[_ngcontent-%COMP%]{overflow:auto}"],
        changeDetection: 0
      }), B;
    })(),
    T = (() => {
      class B {
        constructor(j, W) {
          this.expansionPanel = j, this.elementRef = W, this.withArrow = !1, this.color = "transparent";
        }
        ngAfterContentInit() {
          this.elementRef?.nativeElement?.setAttribute("data-test-role", "clickableElement"), this.elementRef?.nativeElement?.querySelector(".lu-text")?.setAttribute("data-test-role", "title");
        }
        get expanded() {
          return this.expansionPanel.expanded;
        }
        get headerPosition() {
          return this.expansionPanel.headerPosition;
        }
        toggle() {
          this.expansionPanel.toggle();
        }
      }
      return B.ɵfac = function (j) {
        return new (j || B)(t.Y36(u, 1), t.Y36(t.SBq));
      }, B.ɵcmp = t.Xpm({
        type: B,
        selectors: [["lu-expansion-panel-header"]],
        hostVars: 3,
        hostBindings: function (j, W) {
          1 & j && t.NdJ("click", function () {
            return W.toggle();
          }), 2 & j && t.uIk("data-lu-color", W.color)("data-lu-expanded", W.expanded)("data-lu-header-position", W.headerPosition);
        },
        inputs: {
          withArrow: "withArrow",
          color: "color"
        },
        ngContentSelectors: x,
        decls: 3,
        vars: 1,
        consts: [["lu-text", ""], ["icon", "chevron-right", "luTextLeft", "", 4, "ngIf"], ["icon", "chevron-right", "luTextLeft", ""]],
        template: function (j, W) {
          1 & j && (t.F$t(), t.TgZ(0, "div", 0), t.YNc(1, h, 1, 0, "lu-svg-icon", 1), t.Hsn(2), t.qZA()), 2 & j && (t.xp6(1), t.Q6J("ngIf", W.withArrow));
        },
        dependencies: [d.O5, A.q, b.NZ, b.ZZ],
        styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);position:relative;display:flex;cursor:pointer;overflow:hidden;justify-content:flex-start;align-items:center;background-color:var(--lu-expansion-panel-background);padding:calc(var(--lu-base-gutter) / 2) 0;flex-shrink:0;--lu-text-color: var(--lu-expansion-panel-color)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{outline:none}[_nghost-%COMP%]:not([aria-disabled=true]){cursor:pointer}[_nghost-%COMP%]:not([data-lu-color=transparent]){width:100%}[_nghost-%COMP%]:hover[data-lu-expanded=true]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.25}[_nghost-%COMP%]:hover   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.15}[_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{width:16px;height:16px;transition:var(--lu-transition)}[data-lu-expanded=true][_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{transform:rotate(90deg)}[data-lu-expanded=true][data-lu-header-position=bottom][_nghost-%COMP%]   lu-svg-icon[icon=chevron-right][_ngcontent-%COMP%]{transform:rotate(-90deg)}[data-lu-expanded=true][data-lu-color=primary][_nghost-%COMP%]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{opacity:.2}[data-lu-color=primary][_nghost-%COMP%]   .lu-expansion-header-backdrop[_ngcontent-%COMP%]{background-color:var(--lu-primary)}[_nghost-%COMP%]     lu-badge:not([luTextBefore]){display:inline-flex;justify-content:center;width:35px;margin-right:var(--lu-base-gutter);margin-top:2px;margin-left:calc(var(--lu-base-gutter) / 2 * -1)}"],
        changeDetection: 0
      }), B;
    })(),
    R = (() => {
      class B {}
      return B.ɵfac = function (j) {
        return new (j || B)();
      }, B.ɵmod = t.oAB({
        type: B
      }), B.ɵinj = t.cJS({
        imports: [d.ez, A.h, M.I, b.aI]
      }), B;
    })();
});
