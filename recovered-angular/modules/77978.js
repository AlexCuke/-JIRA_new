// Extracted from main; webpack module 77978. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    G: () => v,
    I: () => f
  });
  var t = i(94650),
    e = i(1371),
    a = i(36895),
    m = i(89740);
  function d(E, h) {
    1 & E && t.GkF(0);
  }
  const M = function (E, h) {
      return {
        from: E,
        opacity: h
      };
    },
    b = function (E, h) {
      return {
        value: E,
        params: h
      };
    };
  function A(E, h) {
    if (1 & E && (t.TgZ(0, "div"), t.YNc(1, d, 1, 0, "ng-container", 3), t.qZA()), 2 & E) {
      const x = t.oxw(2),
        u = t.MAs(2);
      t.ekj("left", "left" === x.direction), t.Q6J("@expandCollapseWidth", t.WLB(7, b, x.expanded, t.WLB(4, M, x.from + "px", x.from ? 1 : 0))), t.xp6(1), t.Q6J("ngTemplateOutlet", u);
    }
  }
  function N(E, h) {
    1 & E && t.GkF(0);
  }
  function I(E, h) {
    if (1 & E && (t.TgZ(0, "div"), t.YNc(1, N, 1, 0, "ng-container", 3), t.qZA()), 2 & E) {
      const x = t.oxw(2),
        u = t.MAs(2);
      t.Q6J("@expandCollapse", t.WLB(5, b, x.expanded, t.WLB(2, M, x.from + "px", x.from ? 1 : 0))), t.xp6(1), t.Q6J("ngTemplateOutlet", u);
    }
  }
  function O(E, h) {
    if (1 & E && (t.ynx(0), t.YNc(1, A, 2, 10, "div", 2), t.YNc(2, I, 2, 8, "div", 0), t.BQk()), 2 & E) {
      const x = t.oxw();
      t.xp6(1), t.Q6J("ngIf", "bottom" !== x.direction), t.xp6(1), t.Q6J("ngIf", "bottom" === x.direction);
    }
  }
  function L(E, h) {
    if (1 & E && (t.ynx(0), t._uU(1), t.BQk()), 2 & E) {
      const x = h.polymorpheusOutlet;
      t.xp6(1), t.Oqu(x);
    }
  }
  function C(E, h) {
    if (1 & E && t.YNc(0, L, 2, 1, "ng-container", 4), 2 & E) {
      const x = t.oxw();
      t.Q6J("polymorpheusOutlet", x.content);
    }
  }
  let v = (() => {
      class E {
        constructor() {
          this.expanded = !1, this.content = "", this.direction = "right", this.from = 0;
        }
      }
      return E.ɵfac = function (x) {
        return new (x || E)();
      }, E.ɵcmp = t.Xpm({
        type: E,
        selectors: [["lu-expander"]],
        hostVars: 2,
        hostBindings: function (x, u) {
          2 & x && (t.uIk("lu-data-expanded", u.expanded), t.d8E("@preventInitialChild", u.preventInitialChild));
        },
        inputs: {
          expanded: "expanded",
          content: "content",
          direction: "direction",
          from: "from"
        },
        decls: 3,
        vars: 1,
        consts: [[4, "ngIf"], ["expTpl", ""], [3, "left", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "polymorpheusOutlet"]],
        template: function (x, u) {
          1 & x && (t.YNc(0, O, 3, 2, "ng-container", 0), t.YNc(1, C, 1, 1, "ng-template", null, 1, t.W1O)), 2 & x && t.Q6J("ngIf", u.expanded || u.from);
        },
        dependencies: [a.O5, a.tP, m.Li],
        styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .left[_ngcontent-%COMP%]{float:right}"],
        data: {
          animation: [e.tI, e.Qr, e.qy]
        },
        changeDetection: 0
      }), E;
    })(),
    f = (() => {
      class E {}
      return E.ɵfac = function (x) {
        return new (x || E)();
      }, E.ɵmod = t.oAB({
        type: E
      }), E.ɵinj = t.cJS({
        imports: [a.ez, m.wq]
      }), E;
    })();
});
