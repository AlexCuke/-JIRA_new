// Extracted from main; webpack module 69082. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    V: () => ke,
    d: () => Le
  });
  var t = i(97582),
    e = i(94650),
    a = i(20891),
    m = i(32643),
    d = i(26773),
    M = i(46385),
    b = i(85273),
    A = i(44348),
    N = i(34304),
    I = i(36895),
    O = i(13207),
    L = i(89740),
    C = i(99691),
    v = i(5847),
    f = i(87545),
    E = i(24006);
  function h(J, fe) {
    if (1 & J && (e.TgZ(0, "span", 6), e._uU(1), e.qZA()), 2 & J) {
      const ye = fe.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", ye, " ");
    }
  }
  function x(J, fe) {
    if (1 & J && e._UZ(0, "lu-checkbox", 12), 2 & J) {
      e.oxw();
      const ye = e.MAs(1);
      e.Q6J("ngModel", ye.checked)("tabIndex", -1)("disabled", ye.disabled);
    }
  }
  function u(J, fe) {
    if (1 & J && (e.ynx(0), e._uU(1), e.BQk()), 2 & J) {
      const ye = fe.polymorpheusOutlet;
      e.xp6(1), e.Oqu(ye);
    }
  }
  function T(J, fe) {
    if (1 & J && (e.TgZ(0, "lu-option", 7, 8)(2, "div", 9), e.YNc(3, x, 1, 3, "lu-checkbox", 10), e.YNc(4, u, 2, 1, "ng-container", 11), e.qZA()()), 2 & J) {
      const ye = fe.$implicit,
        ae = e.oxw(3);
      e.Q6J("size", ae.itemSize)("value", ae.defineValueFn(ye))("disabled", ae.itemDisabledFn(ye)), e.xp6(3), e.Q6J("ngIf", ae.multiOption), e.xp6(1), e.Q6J("polymorpheusOutlet", ae.itemContent)("polymorpheusOutletContext", ae.getContext(ye));
    }
  }
  function R(J, fe) {
    if (1 & J && (e.TgZ(0, "lu-option-group"), e.YNc(1, h, 2, 1, "span", 4), e.YNc(2, T, 5, 6, "lu-option", 5), e.qZA()), 2 & J) {
      const ye = fe.$implicit,
        ae = e.oxw(2);
      e.xp6(1), e.Q6J("polymorpheusOutlet", ae.groupContent)("polymorpheusOutletContext", ae.getGroupContext(ye)), e.xp6(1), e.Q6J("ngForOf", ae.groups.get(ye))("ngForTrackBy", ae.trackByFn);
    }
  }
  function B(J, fe) {
    if (1 & J && (e.ynx(0), e.YNc(1, R, 3, 4, "lu-option-group", 3), e.BQk()), 2 & J) {
      const ye = e.oxw();
      e.xp6(1), e.Q6J("ngForOf", ye.groupItems);
    }
  }
  function y(J, fe) {
    if (1 & J && (e.ynx(0), e._uU(1), e.BQk()), 2 & J) {
      const ye = fe.polymorpheusOutlet;
      e.xp6(1), e.hij(" ", ye, " ");
    }
  }
  function j(J, fe) {
    if (1 & J && (e.ynx(0), e.YNc(1, y, 2, 1, "ng-container", 15), e.BQk()), 2 & J) {
      const ye = e.oxw(2);
      e.xp6(1), e.Q6J("polymorpheusOutlet", ye.emptyContent);
    }
  }
  function W(J, fe) {
    1 & J && (e._uU(0), e.ALo(1, "luTranslate")), 2 & J && e.hij(" ", e.lcZ(1, 1, "LuList.emptyMessage"), " ");
  }
  function F(J, fe) {
    if (1 & J && (e.TgZ(0, "div", 13), e.YNc(1, j, 2, 1, "ng-container", 1), e.YNc(2, W, 2, 3, "ng-template", null, 14, e.W1O), e.qZA()), 2 & J) {
      const ye = e.MAs(3),
        ae = e.oxw();
      e.xp6(1), e.Q6J("ngIf", ae.emptyContent)("ngIfElse", ye);
    }
  }
  let Le = (() => {
      class J extends a.l {
        constructor() {
          super(...arguments), this.groupContent = ({
            $implicit: ye
          }) => this.displayValueFn(ye), this.groups = b.wO, this.groupItems = b.LZ;
        }
        getGroupContext(ye) {
          return {
            $implicit: ye
          };
        }
        ngOnChanges({
          items: ye,
          itemGroupFn: ae
        }) {
          (ye || ae) && (this.groups = new Map(), this.items?.forEach(Y => {
            if (this.itemGroupFn) {
              const G = this.itemGroupFn(Y),
                te = this.groups.get(G) || [];
              te.push(Y), this.groups.set(this.itemGroupFn(Y), te);
            }
          }), this.groupItems = Array.from(this.groups.keys()));
        }
      }
      return J.ɵfac = function () {
        let fe;
        return function (ae) {
          return (fe || (fe = e.n5z(J)))(ae || J);
        };
      }(), J.ɵcmp = e.Xpm({
        type: J,
        selectors: [["lu-data-list-group"]],
        inputs: {
          itemGroupFn: "itemGroupFn",
          groupContent: "groupContent"
        },
        features: [e._Bn([{
          provide: A.Qu,
          useExisting: J
        }]), e.qOj, e.TTD],
        decls: 4,
        vars: 3,
        consts: [[3, "autofocus"], [4, "ngIf", "ngIfElse"], ["emptyTemplate", ""], [4, "ngFor", "ngForOf"], ["luOptionGroupHeader", "", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "size", "value", "disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["luOptionGroupHeader", ""], [3, "size", "value", "disabled"], ["option", ""], ["lu-text", ""], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled", 4, "ngIf"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["luTextLeft", "", "luControlSilencer", "", 3, "ngModel", "tabIndex", "disabled"], ["lu-text", "", 1, "lu-empty-message"], ["defaultMessage", ""], [4, "polymorpheusOutlet"]],
        template: function (ye, ae) {
          if (1 & ye && (e.TgZ(0, "lu-list", 0), e.YNc(1, B, 2, 1, "ng-container", 1), e.YNc(2, F, 4, 2, "ng-template", null, 2, e.W1O), e.qZA()), 2 & ye) {
            const Y = e.MAs(3);
            e.Q6J("autofocus", ae.autofocus), e.xp6(1), e.Q6J("ngIf", ae.items && ae.items.length)("ngIfElse", Y);
          }
        },
        dependencies: [I.sg, I.O5, O.k, L.Li, C.e, v.rh, m.NZ, m.ZZ, f.$m, E.JJ, E.On, d.l, M.M],
        styles: ["[_nghost-%COMP%]{display:block;overflow:auto;max-height:var(--lu-list-size)}.lu-empty-message[_ngcontent-%COMP%]{padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);--lu-font-size: 13px;--lu-line-height: 22px}lu-checkbox[_ngcontent-%COMP%]{pointer-events:none}"],
        changeDetection: 0
      }), (0, t.gn)([N.J], J.prototype, "getGroupContext", null), J;
    })(),
    ke = (() => {
      class J {}
      return J.ɵfac = function (ye) {
        return new (ye || J)();
      }, J.ɵmod = e.oAB({
        type: J
      }), J.ɵinj = e.cJS({
        imports: [I.ez, O.X, L.wq, C.l, v.Z3, m.aI, f.Nu, E.u5, d.M, M.B]
      }), J;
    })();
});
