// Extracted from main; webpack module 5250. Factory, not an ES module.
(Ae => {
  !function () {
    "use strict";

    var V = typeof window < "u" && typeof window.document < "u" ? window.document : {},
      i = Ae.exports,
      t = typeof Element < "u" && "ALLOW_KEYBOARD_INPUT" in Element,
      e = function () {
        for (var d, M = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], b = 0, A = M.length, N = {}; b < A; b++) if ((d = M[b]) && d[1] in V) {
          for (b = 0; b < d.length; b++) N[M[0][b]] = d[b];
          return N;
        }
        return !1;
      }(),
      a = {
        change: e.fullscreenchange,
        error: e.fullscreenerror
      },
      m = {
        request: function (d) {
          var M = e.requestFullscreen;
          d = d || V.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? d[M]() : d[M](t ? Element.ALLOW_KEYBOARD_INPUT : {});
        },
        exit: function () {
          V[e.exitFullscreen]();
        },
        toggle: function (d) {
          this.isFullscreen ? this.exit() : this.request(d);
        },
        onchange: function (d) {
          this.on("change", d);
        },
        onerror: function (d) {
          this.on("error", d);
        },
        on: function (d, M) {
          var b = a[d];
          b && V.addEventListener(b, M, !1);
        },
        off: function (d, M) {
          var b = a[d];
          b && V.removeEventListener(b, M, !1);
        },
        raw: e
      };
    e ? (Object.defineProperties(m, {
      isFullscreen: {
        get: function () {
          return Boolean(V[e.fullscreenElement]);
        }
      },
      element: {
        enumerable: !0,
        get: function () {
          return V[e.fullscreenElement];
        }
      },
      enabled: {
        enumerable: !0,
        get: function () {
          return Boolean(V[e.fullscreenEnabled]);
        }
      }
    }), i ? Ae.exports = m : window.screenfull = m) : i ? Ae.exports = !1 : window.screenfull = !1;
  }();
});
