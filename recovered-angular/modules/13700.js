// Extracted from main; webpack module 13700. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    L: () => a,
    f: () => m
  });
  var t = i(94650),
    e = i(26652);
  let a = (() => {
      class d {
        constructor(b, A) {
          this.elementRef = b, this.renderer = A, this.elementRef?.nativeElement?.setAttribute("data-test-role", "textInput");
        }
        get hostClasses() {
          return "lu-input";
        }
        get placeholder() {
          return this.elementRef.nativeElement.placeholder || "";
        }
        caretPoint() {
          return e.Nu.caretXY(this.elementRef.nativeElement);
        }
        get isFocused() {
          return document.activeElement === this.elementRef.nativeElement;
        }
        get isReadonly() {
          return this.elementRef.nativeElement.readOnly;
        }
        get value() {
          return this.elementRef.nativeElement.value;
        }
        focus() {
          this.elementRef.nativeElement.focus();
        }
        blink() {
          this.renderer.removeClass(this.elementRef.nativeElement, "-blink"), this.renderer.addClass(this.elementRef.nativeElement, "-blink");
        }
      }
      return d.ɵfac = function (b) {
        return new (b || d)(t.Y36(t.SBq), t.Y36(t.Qsj));
      }, d.ɵdir = t.lG2({
        type: d,
        selectors: [["input", "luInput", ""]],
        hostVars: 2,
        hostBindings: function (b, A) {
          2 & b && t.Tol(A.hostClasses);
        },
        exportAs: ["luInput"]
      }), d;
    })(),
    m = (() => {
      class d {}
      return d.ɵfac = function (b) {
        return new (b || d)();
      }, d.ɵmod = t.oAB({
        type: d
      }), d.ɵinj = t.cJS({}), d;
    })();
});
