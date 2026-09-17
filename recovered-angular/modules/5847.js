// Extracted from main; webpack module 5847. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z3: () => C,
    rh: () => L
  });
  var t = i(97582),
    e = i(94650),
    a = i(37933),
    m = i(13207),
    d = i(85273),
    M = i(68675),
    b = i(36895);
  function A(v, f) {
    1 & v && (e.TgZ(0, "div", 3), e.Hsn(1, 1), e.qZA());
  }
  const N = ["*", [["", "luOptionGroupHeader", ""]]],
    I = ["*", "[luOptionGroupHeader]"];
  let L = (() => {
      let v = class {
        constructor(E) {
          this.changeDetectorRef = E, this.options = d.Mm, this.hasHeader = !1;
        }
        ngAfterContentInit() {
          this.options.changes.pipe((0, M.O)(this.options), (0, a.t)(this)).subscribe(E => {
            this.hasHeader = !!E.length, this.changeDetectorRef.markForCheck();
          });
        }
      };
      return v.ɵfac = function (E) {
        return new (E || v)(e.Y36(e.sBO));
      }, v.ɵcmp = e.Xpm({
        type: v,
        selectors: [["lu-option-group"]],
        contentQueries: function (E, h, x) {
          if (1 & E && e.Suo(x, m.k, 5), 2 & E) {
            let u;
            e.iGM(u = e.CRH()) && (h.options = u);
          }
        },
        ngContentSelectors: I,
        decls: 4,
        vars: 1,
        consts: [[1, "lu-option-group-wrapper"], ["class", "lu-option-group-header", 4, "ngIf"], [1, "lu-option-group"], [1, "lu-option-group-header"]],
        template: function (E, h) {
          1 & E && (e.F$t(N), e.TgZ(0, "div", 0), e.YNc(1, A, 2, 0, "div", 1), e.TgZ(2, "div", 2), e.Hsn(3), e.qZA()()), 2 & E && (e.xp6(1), e.Q6J("ngIf", h.hasHeader));
        },
        dependencies: [b.O5],
        styles: [".lu-option-group-header[_ngcontent-%COMP%]{display:flex;line-height:18px;font-size:13px;background-color:var(--lu-black-5)}.lu-option-group-header[_ngcontent-%COMP%] >   *{margin:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2)}.lu-option-group[_ngcontent-%COMP%]     lu-option .lu-option-wrapper{padding-left:calc(var(--lu-base-gutter) * 2)}.lu-option-group[_ngcontent-%COMP%]     lu-option.-has-checkbox .lu-option-wrapper{padding-left:calc(var(--lu-base-gutter) * 2)}"],
        changeDetection: 0
      }), v = (0, t.gn)([(0, a.c)()], v), v;
    })(),
    C = (() => {
      class v {}
      return v.ɵfac = function (E) {
        return new (E || v)();
      }, v.ɵmod = e.oAB({
        type: v
      }), v.ɵinj = e.cJS({
        imports: [b.ez]
      }), v;
    })();
});
