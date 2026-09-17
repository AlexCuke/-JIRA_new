// Extracted from main; webpack module 61969. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    d: () => Ke
  });
  var ye,
    t = i(94650),
    e = i(69751),
    a = [],
    M = "ResizeObserver loop completed with undelivered notifications.",
    A = (() => {
      return (Ze = A || (A = {})).BORDER_BOX = "border-box", Ze.CONTENT_BOX = "content-box", Ze.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box", A;
      var Ze;
    })(),
    N = function (Ze) {
      return Object.freeze(Ze);
    },
    I = function Ze(Ee, je) {
      this.inlineSize = Ee, this.blockSize = je, N(this);
    },
    O = function () {
      function Ze(Ee, je, Mt, Je) {
        return this.x = Ee, this.y = je, this.width = Mt, this.height = Je, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, N(this);
      }
      return Ze.prototype.toJSON = function () {
        var Ee = this;
        return {
          x: Ee.x,
          y: Ee.y,
          top: Ee.top,
          right: Ee.right,
          bottom: Ee.bottom,
          left: Ee.left,
          width: Ee.width,
          height: Ee.height
        };
      }, Ze.fromRect = function (Ee) {
        return new Ze(Ee.x, Ee.y, Ee.width, Ee.height);
      }, Ze;
    }(),
    L = function (Ze) {
      return Ze instanceof SVGElement && "getBBox" in Ze;
    },
    C = function (Ze) {
      if (L(Ze)) {
        var Ee = Ze.getBBox();
        return !Ee.width && !Ee.height;
      }
      return !(Ze.offsetWidth || Ze.offsetHeight || Ze.getClientRects().length);
    },
    v = function (Ze) {
      var Ee;
      if (Ze instanceof Element) return !0;
      var je = null === (Ee = Ze?.ownerDocument) || void 0 === Ee ? void 0 : Ee.defaultView;
      return !!(je && Ze instanceof je.Element);
    },
    E = typeof window < "u" ? window : {},
    h = new WeakMap(),
    x = /auto|scroll/,
    u = /^tb|vertical/,
    T = /msie|trident/i.test(E.navigator && E.navigator.userAgent),
    R = function (Ze) {
      return parseFloat(Ze || "0");
    },
    B = function (Ze, Ee, je) {
      return void 0 === Ze && (Ze = 0), void 0 === Ee && (Ee = 0), void 0 === je && (je = !1), new I((je ? Ee : Ze) || 0, (je ? Ze : Ee) || 0);
    },
    y = N({
      devicePixelContentBoxSize: B(),
      borderBoxSize: B(),
      contentBoxSize: B(),
      contentRect: new O(0, 0, 0, 0)
    }),
    j = function (Ze, Ee) {
      if (void 0 === Ee && (Ee = !1), h.has(Ze) && !Ee) return h.get(Ze);
      if (C(Ze)) return h.set(Ze, y), y;
      var je = getComputedStyle(Ze),
        Mt = L(Ze) && Ze.ownerSVGElement && Ze.getBBox(),
        Je = !T && "border-box" === je.boxSizing,
        Xt = u.test(je.writingMode || ""),
        Nn = !Mt && x.test(je.overflowY || ""),
        Pi = !Mt && x.test(je.overflowX || ""),
        Ii = Mt ? 0 : R(je.paddingTop),
        yi = Mt ? 0 : R(je.paddingRight),
        co = Mt ? 0 : R(je.paddingBottom),
        Jo = Mt ? 0 : R(je.paddingLeft),
        fr = Mt ? 0 : R(je.borderTopWidth),
        pt = Mt ? 0 : R(je.borderRightWidth),
        Dt = Mt ? 0 : R(je.borderBottomWidth),
        Dn = Jo + yi,
        vt = Ii + co,
        an = (Mt ? 0 : R(je.borderLeftWidth)) + pt,
        li = fr + Dt,
        zn = Pi ? Ze.offsetHeight - li - Ze.clientHeight : 0,
        $t = Nn ? Ze.offsetWidth - an - Ze.clientWidth : 0,
        Mn = Je ? Dn + an : 0,
        Qn = Je ? vt + li : 0,
        In = Mt ? Mt.width : R(je.width) - Mn - $t,
        ui = Mt ? Mt.height : R(je.height) - Qn - zn,
        To = In + Dn + $t + an,
        bi = ui + vt + zn + li,
        qn = N({
          devicePixelContentBoxSize: B(Math.round(In * devicePixelRatio), Math.round(ui * devicePixelRatio), Xt),
          borderBoxSize: B(To, bi, Xt),
          contentBoxSize: B(In, ui, Xt),
          contentRect: new O(Jo, Ii, In, ui)
        });
      return h.set(Ze, qn), qn;
    },
    W = function (Ze, Ee, je) {
      var Mt = j(Ze, je),
        Je = Mt.borderBoxSize,
        Xt = Mt.contentBoxSize,
        Nn = Mt.devicePixelContentBoxSize;
      switch (Ee) {
        case A.DEVICE_PIXEL_CONTENT_BOX:
          return Nn;
        case A.BORDER_BOX:
          return Je;
        default:
          return Xt;
      }
    },
    F = function Ze(Ee) {
      var je = j(Ee);
      this.target = Ee, this.contentRect = je.contentRect, this.borderBoxSize = N([je.borderBoxSize]), this.contentBoxSize = N([je.contentBoxSize]), this.devicePixelContentBoxSize = N([je.devicePixelContentBoxSize]);
    },
    Le = function (Ze) {
      if (C(Ze)) return 1 / 0;
      for (var Ee = 0, je = Ze.parentNode; je;) Ee += 1, je = je.parentNode;
      return Ee;
    },
    ke = function () {
      var Ze = 1 / 0,
        Ee = [];
      a.forEach(function (Nn) {
        if (0 !== Nn.activeTargets.length) {
          var Pi = [];
          Nn.activeTargets.forEach(function (yi) {
            var co = new F(yi.target),
              Jo = Le(yi.target);
            Pi.push(co), yi.lastReportedSize = W(yi.target, yi.observedBox), Jo < Ze && (Ze = Jo);
          }), Ee.push(function () {
            Nn.callback.call(Nn.observer, Pi, Nn.observer);
          }), Nn.activeTargets.splice(0, Nn.activeTargets.length);
        }
      });
      for (var je = 0, Mt = Ee; je < Mt.length; je++) (0, Mt[je])();
      return Ze;
    },
    J = function (Ze) {
      a.forEach(function (je) {
        je.activeTargets.splice(0, je.activeTargets.length), je.skippedTargets.splice(0, je.skippedTargets.length), je.observationTargets.forEach(function (Je) {
          Je.isActive() && (Le(Je.target) > Ze ? je.activeTargets.push(Je) : je.skippedTargets.push(Je));
        });
      });
    },
    ae = [],
    pe = 0,
    n = {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    },
    Se = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
    qe = function (Ze) {
      return void 0 === Ze && (Ze = 0), Date.now() + Ze;
    },
    Rt = !1,
    Re = new (function () {
      function Ze() {
        var Ee = this;
        this.stopped = !0, this.listener = function () {
          return Ee.schedule();
        };
      }
      return Ze.prototype.run = function (Ee) {
        var je = this;
        if (void 0 === Ee && (Ee = 250), !Rt) {
          Rt = !0;
          var Mt = qe(Ee);
          !function (Ze) {
            !function (Ze) {
              if (!ye) {
                var Ee = 0,
                  je = document.createTextNode("");
                new MutationObserver(function () {
                  return ae.splice(0).forEach(function (Ze) {
                    return Ze();
                  });
                }).observe(je, {
                  characterData: !0
                }), ye = function () {
                  je.textContent = "".concat(Ee ? Ee-- : Ee++);
                };
              }
              ae.push(Ze), ye();
            }(function () {
              requestAnimationFrame(Ze);
            });
          }(function () {
            var Je = !1;
            try {
              Je = function () {
                var Ze = 0;
                for (J(Ze); a.some(function (Ze) {
                  return Ze.activeTargets.length > 0;
                });) Ze = ke(), J(Ze);
                return a.some(function (Ze) {
                  return Ze.skippedTargets.length > 0;
                }) && function () {
                  var Ze;
                  "function" == typeof ErrorEvent ? Ze = new ErrorEvent("error", {
                    message: M
                  }) : ((Ze = document.createEvent("Event")).initEvent("error", !1, !1), Ze.message = M), window.dispatchEvent(Ze);
                }(), Ze > 0;
              }();
            } finally {
              if (Rt = !1, Ee = Mt - qe(), !pe) return;
              Je ? je.run(1e3) : Ee > 0 ? je.run(Ee) : je.start();
            }
          });
        }
      }, Ze.prototype.schedule = function () {
        this.stop(), this.run();
      }, Ze.prototype.observe = function () {
        var Ee = this,
          je = function () {
            return Ee.observer && Ee.observer.observe(document.body, n);
          };
        document.body ? je() : E.addEventListener("DOMContentLoaded", je);
      }, Ze.prototype.start = function () {
        var Ee = this;
        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Se.forEach(function (je) {
          return E.addEventListener(je, Ee.listener, !0);
        }));
      }, Ze.prototype.stop = function () {
        var Ee = this;
        this.stopped || (this.observer && this.observer.disconnect(), Se.forEach(function (je) {
          return E.removeEventListener(je, Ee.listener, !0);
        }), this.stopped = !0);
      }, Ze;
    }())(),
    st = function (Ze) {
      !pe && Ze > 0 && Re.start(), !(pe += Ze) && Re.stop();
    },
    mt = function () {
      function Ze(Ee, je) {
        this.target = Ee, this.observedBox = je || A.CONTENT_BOX, this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        };
      }
      return Ze.prototype.isActive = function () {
        var Ee = W(this.target, this.observedBox, !0);
        return function (Ze) {
          return !L(Ze) && !function (Ze) {
            switch (Ze.tagName) {
              case "INPUT":
                if ("image" !== Ze.type) break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          }(Ze) && "inline" === getComputedStyle(Ze).display;
        }(this.target) && (this.lastReportedSize = Ee), this.lastReportedSize.inlineSize !== Ee.inlineSize || this.lastReportedSize.blockSize !== Ee.blockSize;
      }, Ze;
    }(),
    ut = function Ze(Ee, je) {
      this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = Ee, this.callback = je;
    },
    Ct = new WeakMap(),
    Ft = function (Ze, Ee) {
      for (var je = 0; je < Ze.length; je += 1) if (Ze[je].target === Ee) return je;
      return -1;
    },
    Et = function () {
      function Ze() {}
      return Ze.connect = function (Ee, je) {
        var Mt = new ut(Ee, je);
        Ct.set(Ee, Mt);
      }, Ze.observe = function (Ee, je, Mt) {
        var Je = Ct.get(Ee),
          Xt = 0 === Je.observationTargets.length;
        Ft(Je.observationTargets, je) < 0 && (Xt && a.push(Je), Je.observationTargets.push(new mt(je, Mt && Mt.box)), st(1), Re.schedule());
      }, Ze.unobserve = function (Ee, je) {
        var Mt = Ct.get(Ee),
          Je = Ft(Mt.observationTargets, je);
        Je >= 0 && (1 === Mt.observationTargets.length && a.splice(a.indexOf(Mt), 1), Mt.observationTargets.splice(Je, 1), st(-1));
      }, Ze.disconnect = function (Ee) {
        var je = this,
          Mt = Ct.get(Ee);
        Mt.observationTargets.slice().forEach(function (Je) {
          return je.unobserve(Ee, Je.target);
        }), Mt.activeTargets.splice(0, Mt.activeTargets.length);
      }, Ze;
    }(),
    Ue = function () {
      function Ze(Ee) {
        if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if ("function" != typeof Ee) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        Et.connect(this, Ee);
      }
      return Ze.prototype.observe = function (Ee, je) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!v(Ee)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Et.observe(this, Ee, je);
      }, Ze.prototype.unobserve = function (Ee) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!v(Ee)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Et.unobserve(this, Ee);
      }, Ze.prototype.disconnect = function () {
        Et.disconnect(this);
      }, Ze.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }, Ze;
    }(),
    Me = i(15635);
  let Ke = (() => {
    class Ze {
      constructor(je) {
        this.ngZone = je;
      }
      observe(je) {
        return new e.y(Mt => {
          const Je = new Ue(Xt => Mt.next(Xt));
          return this.ngZone.runOutsideAngular(() => Je.observe((0, Me.Nj)(je), {
            box: "border-box"
          })), () => Je.disconnect();
        });
      }
    }
    return Ze.ɵfac = function (je) {
      return new (je || Ze)(t.LFG(t.R0b));
    }, Ze.ɵprov = t.Yz7({
      token: Ze,
      factory: Ze.ɵfac,
      providedIn: "root"
    }), Ze;
  })();
});
