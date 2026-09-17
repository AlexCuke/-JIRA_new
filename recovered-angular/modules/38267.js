// Extracted from main; webpack module 38267. Factory, not an ES module.
(function (Ae, V, i) {
  var t,
    e = e || function (a) {
      "use strict";

      if (!(typeof a > "u" || typeof navigator < "u" && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var d = function () {
            return a.URL || a.webkitURL || a;
          },
          M = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
          b = "download" in M,
          N = /constructor/i.test(a.HTMLElement) || a.safari,
          I = /CriOS\/[\d]+/.test(navigator.userAgent),
          O = function (T) {
            (a.setImmediate || a.setTimeout)(function () {
              throw T;
            }, 0);
          },
          v = function (T) {
            setTimeout(function () {
              "string" == typeof T ? d().revokeObjectURL(T) : T.remove();
            }, 4e4);
          },
          E = function (T) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(T.type) ? new Blob([String.fromCharCode(65279), T], {
              type: T.type
            }) : T;
          },
          h = function (T, R, B) {
            B || (T = E(T));
            var F,
              y = this,
              W = "application/octet-stream" === T.type,
              Le = function () {
                !function (T, R, B) {
                  for (var y = (R = [].concat(R)).length; y--;) {
                    var j = T["on" + R[y]];
                    if ("function" == typeof j) try {
                      j.call(T, T);
                    } catch (W) {
                      O(W);
                    }
                  }
                }(y, "writestart progress write writeend".split(" "));
              };
            if (y.readyState = y.INIT, b) return F = d().createObjectURL(T), void setTimeout(function () {
              M.href = F, M.download = R, function (T) {
                var R = new MouseEvent("click");
                T.dispatchEvent(R);
              }(M), Le(), v(F), y.readyState = y.DONE;
            });
            !function () {
              if ((I || W && N) && a.FileReader) {
                var J = new FileReader();
                return J.onloadend = function () {
                  var ye = I ? J.result : J.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  a.open(ye, "_blank") || (a.location.href = ye), ye = void 0, y.readyState = y.DONE, Le();
                }, J.readAsDataURL(T), void (y.readyState = y.INIT);
              }
              F || (F = d().createObjectURL(T)), W ? a.location.href = F : a.open(F, "_blank") || (a.location.href = F), y.readyState = y.DONE, Le(), v(F);
            }();
          },
          x = h.prototype;
        return typeof navigator < "u" && navigator.msSaveOrOpenBlob ? function (T, R, B) {
          return R = R || T.name || "download", B || (T = E(T)), navigator.msSaveOrOpenBlob(T, R);
        } : (x.abort = function () {}, x.readyState = x.INIT = 0, x.WRITING = 1, x.DONE = 2, x.error = x.onwritestart = x.onprogress = x.onwrite = x.onabort = x.onerror = x.onwriteend = null, function (T, R, B) {
          return new h(T, R || T.name || "download", B);
        });
      }
    }(typeof self < "u" && self || typeof window < "u" && window || this.content);
  Ae.exports ? Ae.exports.saveAs = e : null !== i.amdD && null !== i.amdO && void 0 !== (t = function () {
    return e;
  }.call(V, i, V, Ae)) && (Ae.exports = t);
});
