// Extracted from main; webpack module 51708. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  var t = i(47103),
    a = (m.TYPED_ARRAY_SUPPORT = function e() {
      try {
        var x = new Uint8Array(1);
        return x.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          }
        }, 42 === x.foo();
      } catch {
        return !1;
      }
    }()) ? 2147483647 : 1073741823;
  function m(x, u, T) {
    return m.TYPED_ARRAY_SUPPORT || this instanceof m ? "number" == typeof x ? A(this, x) : function h(x, u, T, R) {
      if ("number" == typeof u) throw new TypeError("\"value\" argument must not be a number");
      return typeof ArrayBuffer < "u" && u instanceof ArrayBuffer ? function O(x, u, T, R) {
        if (T < 0 || u.byteLength < T) throw new RangeError("'offset' is out of bounds");
        if (u.byteLength < T + (R || 0)) throw new RangeError("'length' is out of bounds");
        var B;
        return B = void 0 === T && void 0 === R ? new Uint8Array(u) : void 0 === R ? new Uint8Array(u, T) : new Uint8Array(u, T, R), m.TYPED_ARRAY_SUPPORT ? B.__proto__ = m.prototype : B = I(x, B), B;
      }(x, u, T, R) : "string" == typeof u ? function N(x, u) {
        var T = 0 | v(u),
          R = b(x, T),
          B = R.write(u);
        return B !== T && (R = R.slice(0, B)), R;
      }(x, u) : function L(x, u) {
        if (m.isBuffer(u)) {
          var T = 0 | d(u.length),
            R = b(x, T);
          return 0 === R.length || u.copy(R, 0, 0, T), R;
        }
        if (u) {
          if (typeof ArrayBuffer < "u" && u.buffer instanceof ArrayBuffer || "length" in u) return "number" != typeof u.length || function M(x) {
            return x != x;
          }(u.length) ? b(x, 0) : I(x, u);
          if ("Buffer" === u.type && Array.isArray(u.data)) return I(x, u.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(x, u);
    }(this, x, u, T) : new m(x, u, T);
  }
  function d(x) {
    if (x >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return 0 | x;
  }
  function b(x, u) {
    var T;
    return m.TYPED_ARRAY_SUPPORT ? (T = new Uint8Array(u)).__proto__ = m.prototype : (null === (T = x) && (T = new m(u)), T.length = u), T;
  }
  function A(x, u) {
    var T = b(x, u < 0 ? 0 : 0 | d(u));
    if (!m.TYPED_ARRAY_SUPPORT) for (var R = 0; R < u; ++R) T[R] = 0;
    return T;
  }
  function I(x, u) {
    for (var T = u.length < 0 ? 0 : 0 | d(u.length), R = b(x, T), B = 0; B < T; B += 1) R[B] = 255 & u[B];
    return R;
  }
  function C(x, u) {
    u = u || 1 / 0;
    for (var T, R = x.length, B = null, y = [], j = 0; j < R; ++j) {
      if ((T = x.charCodeAt(j)) > 55295 && T < 57344) {
        if (!B) {
          if (T > 56319) {
            (u -= 3) > -1 && y.push(239, 191, 189);
            continue;
          }
          if (j + 1 === R) {
            (u -= 3) > -1 && y.push(239, 191, 189);
            continue;
          }
          B = T;
          continue;
        }
        if (T < 56320) {
          (u -= 3) > -1 && y.push(239, 191, 189), B = T;
          continue;
        }
        T = 65536 + (B - 55296 << 10 | T - 56320);
      } else B && (u -= 3) > -1 && y.push(239, 191, 189);
      if (B = null, T < 128) {
        if ((u -= 1) < 0) break;
        y.push(T);
      } else if (T < 2048) {
        if ((u -= 2) < 0) break;
        y.push(T >> 6 | 192, 63 & T | 128);
      } else if (T < 65536) {
        if ((u -= 3) < 0) break;
        y.push(T >> 12 | 224, T >> 6 & 63 | 128, 63 & T | 128);
      } else {
        if (!(T < 1114112)) throw new Error("Invalid code point");
        if ((u -= 4) < 0) break;
        y.push(T >> 18 | 240, T >> 12 & 63 | 128, T >> 6 & 63 | 128, 63 & T | 128);
      }
    }
    return y;
  }
  function v(x) {
    return m.isBuffer(x) ? x.length : typeof ArrayBuffer < "u" && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(x) || x instanceof ArrayBuffer) ? x.byteLength : ("string" != typeof x && (x = "" + x), 0 === x.length ? 0 : C(x).length);
  }
  m.TYPED_ARRAY_SUPPORT && (m.prototype.__proto__ = Uint8Array.prototype, m.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && m[Symbol.species] === m && Object.defineProperty(m, Symbol.species, {
    value: null,
    configurable: !0,
    enumerable: !1,
    writable: !1
  })), m.prototype.write = function (u, T, R) {
    void 0 === T || void 0 === R && "string" == typeof T ? (R = this.length, T = 0) : isFinite(T) && (T |= 0, isFinite(R) ? R |= 0 : R = void 0);
    var B = this.length - T;
    if ((void 0 === R || R > B) && (R = B), u.length > 0 && (R < 0 || T < 0) || T > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    return function E(x, u, T, R) {
      return function f(x, u, T, R) {
        for (var B = 0; B < R && !(B + T >= u.length || B >= x.length); ++B) u[B + T] = x[B];
        return B;
      }(C(u, x.length - T), x, T, R);
    }(this, u, T, R);
  }, m.prototype.slice = function (u, T) {
    var B,
      R = this.length;
    if ((u = ~~u) < 0 ? (u += R) < 0 && (u = 0) : u > R && (u = R), (T = void 0 === T ? R : ~~T) < 0 ? (T += R) < 0 && (T = 0) : T > R && (T = R), T < u && (T = u), m.TYPED_ARRAY_SUPPORT) (B = this.subarray(u, T)).__proto__ = m.prototype;else {
      var y = T - u;
      B = new m(y, void 0);
      for (var j = 0; j < y; ++j) B[j] = this[j + u];
    }
    return B;
  }, m.prototype.copy = function (u, T, R, B) {
    if (R || (R = 0), !B && 0 !== B && (B = this.length), T >= u.length && (T = u.length), T || (T = 0), B > 0 && B < R && (B = R), B === R || 0 === u.length || 0 === this.length) return 0;
    if (T < 0) throw new RangeError("targetStart out of bounds");
    if (R < 0 || R >= this.length) throw new RangeError("sourceStart out of bounds");
    if (B < 0) throw new RangeError("sourceEnd out of bounds");
    B > this.length && (B = this.length), u.length - T < B - R && (B = u.length - T + R);
    var j,
      y = B - R;
    if (this === u && R < T && T < B) for (j = y - 1; j >= 0; --j) u[j + T] = this[j + R];else if (y < 1e3 || !m.TYPED_ARRAY_SUPPORT) for (j = 0; j < y; ++j) u[j + T] = this[j + R];else Uint8Array.prototype.set.call(u, this.subarray(R, R + y), T);
    return y;
  }, m.prototype.fill = function (u, T, R) {
    if ("string" == typeof u) {
      if ("string" == typeof T ? (T = 0, R = this.length) : "string" == typeof R && (R = this.length), 1 === u.length) {
        var B = u.charCodeAt(0);
        B < 256 && (u = B);
      }
    } else "number" == typeof u && (u &= 255);
    if (T < 0 || this.length < T || this.length < R) throw new RangeError("Out of range index");
    if (R <= T) return this;
    var y;
    if (T >>>= 0, R = void 0 === R ? this.length : R >>> 0, u || (u = 0), "number" == typeof u) for (y = T; y < R; ++y) this[y] = u;else {
      var j = m.isBuffer(u) ? u : new m(u),
        W = j.length;
      for (y = 0; y < R - T; ++y) this[y + T] = j[y % W];
    }
    return this;
  }, m.concat = function (u, T) {
    if (!t(u)) throw new TypeError("\"list\" argument must be an Array of Buffers");
    if (0 === u.length) return b(null, 0);
    var R;
    if (void 0 === T) for (T = 0, R = 0; R < u.length; ++R) T += u[R].length;
    var B = A(null, T),
      y = 0;
    for (R = 0; R < u.length; ++R) {
      var j = u[R];
      if (!m.isBuffer(j)) throw new TypeError("\"list\" argument must be an Array of Buffers");
      j.copy(B, y), y += j.length;
    }
    return B;
  }, m.byteLength = v, m.prototype._isBuffer = !0, m.isBuffer = function (u) {
    return !(null == u || !u._isBuffer);
  }, Ae.exports = m;
});
