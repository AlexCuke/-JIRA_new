// Extracted from main; webpack module 93278. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    h: () => b,
    q: () => M
  });
  var t = i(97582),
    e = i(94650),
    a = i(99246),
    m = i(58435),
    d = i(36895);
  let M = (() => {
      let A = class {
        constructor(I) {
          this.assetsPath = I, this.icon = "", this.size = 16;
        }
        get href() {
          return `${this.assetsPath}/svg/${this.iconName}.svg#${this.iconName}`;
        }
        get iconName() {
          return `${this.icon}_${this.size}`;
        }
      };
      return A.ɵfac = function (I) {
        return new (I || A)(e.Y36(a.zs, 8));
      }, A.ɵcmp = e.Xpm({
        type: A,
        selectors: [["lu-svg-icon"]],
        hostVars: 4,
        hostBindings: function (I, O) {
          2 & I && e.uIk("data-lu-icon", O.icon)("data-test-role-type", O.icon)("data-lu-size", O.size)("data-lu-height", O.height);
        },
        inputs: {
          icon: "icon",
          size: "size",
          height: "height"
        },
        decls: 2,
        vars: 5,
        template: function (I, O) {
          1 & I && (e.O4$(), e.TgZ(0, "svg"), e._UZ(1, "use"), e.qZA()), 2 & I && (e.Udp("height", O.height || O.size, "px")("width", O.size, "px"), e.xp6(1), e.uIk("href", O.href, null, "xlink"));
        },
        styles: ["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:var(--lu-svg-icon-width, 16px);height:var(--lu-svg-icon-height, 16px)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:top}[data-lu-size=\"24\"][_nghost-%COMP%]{width:var(--lu-svg-icon-width, 24px);height:var(--lu-svg-icon-height, 24px)}[data-lu-size=\"32\"][_nghost-%COMP%]{width:var(--lu-svg-icon-width, 32px);height:var(--lu-svg-icon-height, 32px)}[data-lu-size=\"48\"][_nghost-%COMP%]{width:var(--lu-svg-icon-width, 48px);height:var(--lu-svg-icon-height, 48px)}[data-lu-size=\"50\"][_nghost-%COMP%]{width:var(--lu-svg-icon-width, 50px);height:var(--lu-svg-icon-height, 20px)}"],
        changeDetection: 0
      }), A = (0, t.gn)([(0, m.c)()], A), A;
    })(),
    b = (() => {
      class A {}
      return A.ɵfac = function (I) {
        return new (I || A)();
      }, A.ɵmod = e.oAB({
        type: A
      }), A.ɵinj = e.cJS({
        imports: [d.ez]
      }), A;
    })();
});
