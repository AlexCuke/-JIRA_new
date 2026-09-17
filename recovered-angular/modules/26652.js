// Extracted from main; webpack module 26652. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Hn: () => A,
    Nu: () => M,
    Yc: () => m
  });
  var t = i(15635);
  const a = {
    "top-left": {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom"
    },
    "top-center": {
      originX: "center",
      originY: "top",
      overlayX: "center",
      overlayY: "bottom"
    },
    "top-right": {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom"
    },
    "bottom-left": {
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    },
    "bottom-center": {
      originX: "center",
      originY: "bottom",
      overlayX: "center",
      overlayY: "top"
    },
    "bottom-right": {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    },
    "left-top": {
      originX: "start",
      originY: "top",
      overlayX: "end",
      overlayY: "top"
    },
    "left-center": {
      originX: "start",
      originY: "center",
      overlayX: "end",
      overlayY: "center"
    },
    "left-bottom": {
      originX: "start",
      originY: "bottom",
      overlayX: "end",
      overlayY: "bottom"
    },
    "right-top": {
      originX: "end",
      originY: "top",
      overlayX: "start",
      overlayY: "top"
    },
    "right-center": {
      originX: "end",
      originY: "center",
      overlayX: "start",
      overlayY: "center"
    },
    "right-bottom": {
      originX: "end",
      originY: "bottom",
      overlayX: "start",
      overlayY: "bottom"
    }
  };
  class m {
    static getConnectedPosition(I, O, L = 0, C = !1) {
      return (0, t._2)(I).map(v => {
        const f = m.toConnectedPosition(v),
          E = m.getMarginMultiplier(f),
          h = m.isVerticalPosition(f) ? 0 : L * E,
          x = m.isVerticalPosition(f) ? L * E : 0;
        return f.offsetX = f.offsetX || 0, f.offsetY = f.offsetY || 0, f.offsetX += (C ? m.getOffsetX(O, f) : 0) + h, f.offsetY += (C ? m.getOffsetY(O, f) : 0) + x, f;
      });
    }
    static toConnectedPosition(I) {
      return "string" == typeof I ? {
        ...a[I]
      } : {
        ...I
      };
    }
    static toConnectedPositions(I) {
      return I.map(m.toConnectedPosition);
    }
    static getOffsetX(I, O) {
      const L = m.isVerticalPosition(O),
        C = m.getOffsetMultiplier(O),
        v = m.isCenterPosition(O),
        f = "center" === O.originX && "center" !== O.overlayX || m.overlayIsOutByX(O) ? 8 : I.offsetWidth;
      return (L && !v ? Math.max(32 - f, 0) : 0) * C;
    }
    static getOffsetY(I, O) {
      const L = m.isVerticalPosition(O),
        C = m.getOffsetMultiplier(O),
        v = m.isCenterPosition(O),
        f = "center" === O.originY && "center" !== O.overlayY || m.overlayIsOutByY(O) ? 8 : I.offsetHeight;
      return (L || v ? 0 : Math.max(32 - f, 0)) * C;
    }
    static overlayIsOutByX(I) {
      return "start" === I.originX && "end" === I.overlayX || "end" === I.originX && "start" === I.overlayX;
    }
    static overlayIsOutByY(I) {
      return "top" === I.originY && "bottom" === I.overlayY || "bottom" === I.originY && "top" === I.overlayY;
    }
    static getOffsetMultiplier(I) {
      return m.isVerticalPosition(I) && "end" === I.overlayX || !m.isVerticalPosition(I) && "bottom" === I.overlayY ? 1 : -1;
    }
    static getMarginMultiplier(I) {
      return ["right", "bottom"].includes(m.getRelativePosition(I) || "") ? 1 : -1;
    }
    static isVerticalPosition(I) {
      return ["bottom", "top"].includes(m.getRelativePosition(I) || "");
    }
    static isCenterPosition(I) {
      return "center" === I.overlayX || "center" === I.overlayY;
    }
    static getPositionAlign(I) {
      return m.isVerticalPosition(I) ? "start" === I.overlayX ? "left" : "end" === I.overlayX ? "right" : null : "top" === I.originY ? "top" : "bottom" === I.originY ? "bottom" : null;
    }
    static getRelativePosition(I) {
      const O = m.toConnectedPosition(I);
      return "bottom" === O.originY && "top" === O.overlayY ? "bottom" : "top" === O.originY && "bottom" === O.overlayY ? "top" : "start" === O.originX && "end" === O.overlayX ? "left" : "end" === O.originX && "start" === O.overlayX ? "right" : null;
    }
    static getOverlayPosition(I) {
      return Object.keys(a).find(L => {
        const C = a[L];
        return I.originX === C.originX && I.originY === C.originY && I.overlayX === C.overlayX && I.overlayY === C.overlayY;
      }) || I;
    }
  }
  class M {
    static getElementPosition(I) {
      let O = 0,
        L = 0;
      for (; I;) if (I === document.body) {
        const C = document.documentElement;
        O += C.offsetLeft - C.scrollLeft + C.clientLeft, L += C.offsetTop - C.scrollTop + C.clientTop, I = null;
      } else {
        const C = new DOMMatrix(I.style.transform);
        O += I.offsetLeft - I.scrollLeft + I.clientLeft + C.m41, L += I.offsetTop - I.scrollTop + I.clientTop + C.m42, I = M.getOffsetParent(I);
      }
      return {
        x: O,
        y: L
      };
    }
    static getOffsetParent(I) {
      const O = getComputedStyle(I);
      return "fixed" === O.position || "none" === O.display ? null : I.offsetParent;
    }
    static toPixels(I, O) {
      let L,
        C = parseFloat(I);
      return -1 !== I.indexOf("pt") ? C = 4 * C / 3 : -1 !== I.indexOf("mm") ? C = 96 * C / 25.4 : -1 !== I.indexOf("cm") ? C = 96 * C / 2.54 : -1 !== I.indexOf("in") ? C *= 96 : -1 !== I.indexOf("pc") ? C *= 16 : -1 !== I.indexOf("rem") ? (L = parseFloat(getComputedStyle(document.documentElement).fontSize), C *= L) : -1 !== I.indexOf("em") && (C = O ? C * parseFloat(O) : M.toPixels(`${C}rem`, O)), C;
    }
    static lineHeightInPixels(I, O) {
      return "normal" === I ? 1.2 * parseInt(O, 10) : M.toPixels(I, O);
    }
    static getMirrorInfo(I, O) {
      if (I.mirrorInfo) return I.mirrorInfo;
      const L = document.createElement("div"),
        C = L.style,
        v = getComputedStyle(I),
        f = "hidden",
        E = "focusout";
      return C.whiteSpace = "pre-wrap", O || (C.wordWrap = "break-word"), C.position = "absolute", C.top = "0", C.visibility = f, b.forEach(h => C[h] = v[h]), C.overflow = f, O && (C.whiteSpace = "nowrap"), document.body.appendChild(L), I.mirrorInfo = {
        div: L,
        span: document.createElement("span"),
        computedStyles: v
      }, I.addEventListener(E, function h() {
        delete I.mirrorInfo, document.body.removeChild(L), I.removeEventListener(E, h);
      }), I.mirrorInfo;
    }
    static caretXY(I, O) {
      if (document.activeElement !== I) return null;
      void 0 === O && (O = I.selectionEnd);
      const L = "input" === I.nodeName.toLowerCase(),
        C = M.getMirrorInfo(I, L),
        v = C.div,
        f = C.span,
        E = C.computedStyles,
        h = I.value.substring(0, O);
      v.textContent = L ? h.replace(/\s/g, "\xA0") : h, f.textContent = I.value.substring(O) || ".", v.appendChild(f);
      const x = I.getBoundingClientRect();
      return {
        y: f.offsetTop + parseInt(E.borderTopWidth, 0) - I.scrollTop + x.top,
        x: f.offsetLeft + parseInt(E.borderLeftWidth, 0) - I.scrollLeft + x.left,
        height: M.lineHeightInPixels(E.lineHeight, E.fontSize) + 6
      };
    }
    static caretContentEditableXY(I) {
      if (document.activeElement !== I) return null;
      const O = window.getSelection();
      if (O && O.rangeCount) {
        const L = window.getSelection()?.getRangeAt(0) || null,
          C = document.createElement("span");
        L?.insertNode(C);
        const v = getComputedStyle(C),
          f = M.getElementPosition(C),
          E = M.lineHeightInPixels(v.lineHeight, v.fontSize);
        return C.remove(), {
          ...f,
          height: E
        };
      }
      return null;
    }
    static createCloneOf(I, O) {
      const L = document.createElement(O),
        C = getComputedStyle(I);
      return L.style.position = "absolute", L.style.visibility = "hidden", L.style.whiteSpace = "nowrap", b.filter(v => !["width"].includes(v)).forEach(v => L.style[v] = C[v]), L;
    }
  }
  const b = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "varterSpacing", "wordSpacing", "tabSize", "MozTabSize"];
  class A {
    static isNativeKeyboardFocusable(I) {
      if (I.hasAttribute("disabled") || "-1" === I.getAttribute("tabIndex")) return !1;
      if (I instanceof HTMLElement && I.isContentEditable || "0" === I.getAttribute("tabIndex")) return !0;
      switch (I.tagName) {
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
          return !0;
        case "VIDEO":
        case "AUDIO":
          return I.hasAttribute("controls");
        case "INPUT":
          return "hidden" !== I.getAttribute("type");
        case "A":
        case "LINK":
          return I.hasAttribute("href");
        default:
          return !1;
      }
    }
    static getClosestKeyboardFocusable(I, O, L = !0) {
      if (!O.ownerDocument) return null;
      const v = O.ownerDocument.createTreeWalker(O, NodeFilter.SHOW_ELEMENT, f => "ownerSVGElement" in f ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT);
      for (v.currentNode = I; L ? v.nextNode() : v.previousNode();) if (v.currentNode instanceof HTMLElement && (I = v.currentNode), A.isNativeKeyboardFocusable(I)) return I;
      return null;
    }
    static focusClosestElement(I, O, L = !0) {
      const C = A.getClosestKeyboardFocusable(I, O, L);
      C && C.focus();
    }
  }
});
