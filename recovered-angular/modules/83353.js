// Extracted from main; webpack module 83353. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Mq: () => v,
    Oy: () => R,
    _i: () => f,
    i$: () => O,
    kV: () => x,
    sA: () => T,
    t4: () => m
  });
  var t = i(94650),
    e = i(36895);
  let a;
  try {
    a = typeof Intl < "u" && Intl.v8BreakIterator;
  } catch {
    a = !1;
  }
  let N,
    L,
    C,
    E,
    m = (() => {
      class B {
        constructor(j) {
          this._platformId = j, this.isBrowser = this._platformId ? (0, e.NF)(this._platformId) : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !a) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
      }
      return B.ɵfac = function (j) {
        return new (j || B)(t.LFG(t.Lbi));
      }, B.ɵprov = t.Yz7({
        token: B,
        factory: B.ɵfac,
        providedIn: "root"
      }), B;
    })();
  function O(B) {
    return function I() {
      if (null == N && typeof window < "u") try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: () => N = !0
        }));
      } finally {
        N = N || !1;
      }
      return N;
    }() ? B : !!B.capture;
  }
  function v() {
    if (null == C) {
      if ("object" != typeof document || !document || "function" != typeof Element || !Element) return C = !1, C;
      if ("scrollBehavior" in document.documentElement.style) C = !0;else {
        const B = Element.prototype.scrollTo;
        C = !!B && !/\{\s*\[native code\]\s*\}/.test(B.toString());
      }
    }
    return C;
  }
  function f() {
    if ("object" != typeof document || !document) return 0;
    if (null == L) {
      const B = document.createElement("div"),
        y = B.style;
      B.dir = "rtl", y.width = "1px", y.overflow = "auto", y.visibility = "hidden", y.pointerEvents = "none", y.position = "absolute";
      const j = document.createElement("div"),
        W = j.style;
      W.width = "2px", W.height = "1px", B.appendChild(j), document.body.appendChild(B), L = 0, 0 === B.scrollLeft && (B.scrollLeft = 1, L = 0 === B.scrollLeft ? 1 : 2), B.remove();
    }
    return L;
  }
  function x(B) {
    if (function h() {
      if (null == E) {
        const B = typeof document < "u" ? document.head : null;
        E = !(!B || !B.createShadowRoot && !B.attachShadow);
      }
      return E;
    }()) {
      const y = B.getRootNode ? B.getRootNode() : null;
      if (typeof ShadowRoot < "u" && ShadowRoot && y instanceof ShadowRoot) return y;
    }
    return null;
  }
  function T(B) {
    return B.composedPath ? B.composedPath()[0] : B.target;
  }
  function R() {
    return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha;
  }
});
