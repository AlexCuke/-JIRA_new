// Extracted from main; webpack module 6998. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    GV: () => h,
    xY: () => E
  });
  var t = i(42550),
    e = i(19237),
    a = i(44348),
    m = i(97582),
    d = i(94650),
    M = i(85273),
    b = i(34304),
    A = i(36895),
    N = i(89740);
  const I = ["lu-action-message", ""];
  function O(x, u) {
    if (1 & x && (d.TgZ(0, "span"), d._uU(1), d.qZA()), 2 & x) {
      const T = d.oxw().$implicit;
      d.xp6(1), d.Oqu(T.text);
    }
  }
  function L(x, u) {
    if (1 & x && (d.ynx(0), d.TgZ(1, "span", 5), d._uU(2), d.qZA(), d.BQk()), 2 & x) {
      const T = d.oxw(2).$implicit;
      d.xp6(2), d.hij(" ", T.text, " ");
    }
  }
  function C(x, u) {
    if (1 & x) {
      const T = d.EpF();
      d.TgZ(0, "span", 3), d.NdJ("click", function () {
        d.CHM(T);
        const B = d.oxw().$implicit,
          y = d.oxw();
        return d.KtG(y.action.emit(B.action));
      }), d.YNc(1, L, 3, 1, "ng-container", 4), d.qZA();
    }
    if (2 & x) {
      const T = d.oxw().$implicit,
        R = d.oxw();
      d.xp6(1), d.Q6J("polymorpheusOutlet", R.linkContent)("polymorpheusOutletContext", R.getContext(T));
    }
  }
  function v(x, u) {
    if (1 & x && (d.ynx(0), d.YNc(1, O, 2, 1, "span", 1), d.YNc(2, C, 2, 2, "span", 2), d.BQk()), 2 & x) {
      const T = u.$implicit;
      d.xp6(1), d.Q6J("ngIf", "text" === T.type), d.xp6(1), d.Q6J("ngIf", "link" === T.type);
    }
  }
  let E = (() => {
      class x {
        constructor() {
          this.message = "", this.linkContent = ({
            $implicit: T
          }) => (0, M.ll)(T), this.action = new d.vpe(), this.messageParts = [];
        }
        ngOnChanges({
          message: T
        }) {
          T && (this.messageParts = function f(x) {
            const u = (0, t.EQ)(/[^[\]()]+/).pipe((0, t.dH)("static")),
              T = u.pipe((0, e.UI)(W => ({
                type: "text",
                text: W.value
              }))),
              R = u.pipe((0, e.vX)((0, t.fL)("["), (0, t.fL)("]")), (0, e.xD)(u.pipe((0, e.vX)((0, t.fL)("("), (0, t.fL)(")")))), (0, e.UI)(([W, F]) => ({
                type: "link",
                text: W.value,
                action: F.value
              }))),
              B = (0, t.RN)((0, t.fL)("["), (0, t.fL)("]"), (0, t.fL)("("), (0, t.fL)(")")).pipe((0, t.dH)("static"), (0, e.UI)(W => ({
                type: "text",
                text: W.value
              }))),
              j = (0, t.RN)(R, T, B).pipe((0, e.rx)()).pipe((0, e.Se)()).parse(x);
            if (j.success && "<EOF>" !== j.value) return j.value;
            throw a.vE.error(`\u041f\u0430\u0440\u0441\u0435\u0440 \u043d\u0435 \u0441\u043c\u043e\u0433 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 ${x}\n${JSON.stringify(j)}`);
          }(this.message));
        }
        getContext(T) {
          return {
            $implicit: T
          };
        }
      }
      return x.ɵfac = function (T) {
        return new (T || x)();
      }, x.ɵcmp = d.Xpm({
        type: x,
        selectors: [["", "lu-action-message", ""]],
        inputs: {
          message: ["lu-action-message", "message"],
          linkContent: "linkContent"
        },
        outputs: {
          action: "action"
        },
        features: [d.TTD],
        attrs: I,
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "lu-message-link-wrapper", 3, "click", 4, "ngIf"], [1, "lu-message-link-wrapper", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "lu-message-link"]],
        template: function (T, R) {
          1 & T && d.YNc(0, v, 3, 2, "ng-container", 0), 2 & T && d.Q6J("ngForOf", R.messageParts);
        },
        dependencies: [A.sg, A.O5, N.Li],
        styles: ["[_nghost-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color)}.lu-message-link[_ngcontent-%COMP%]{display:inline-block;max-height:var(--lu-line-height);border-bottom:1px dashed;color:var(--lu-primary);cursor:pointer}.lu-message-link[_ngcontent-%COMP%]:link, .lu-message-link[_ngcontent-%COMP%]:visited{color:var(--lu-primary)}.lu-message-link[_ngcontent-%COMP%]:hover{color:var(--lu-primary-active);text-decoration:none}"],
        changeDetection: 0
      }), (0, m.gn)([b.J], x.prototype, "getContext", null), x;
    })(),
    h = (() => {
      class x {}
      return x.ɵfac = function (T) {
        return new (T || x)();
      }, x.ɵmod = d.oAB({
        type: x
      }), x.ɵinj = d.cJS({
        imports: [A.ez, N.wq]
      }), x;
    })();
});
