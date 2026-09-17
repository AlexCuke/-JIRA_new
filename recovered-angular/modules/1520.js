// Extracted from main; webpack module 1520. Factory, not an ES module.
((module, exports, __webpack_require__) => {
  var __WEBPACK_AMD_DEFINE_RESULT__;
  (function () {
    "use strict";

    var ERROR = "input is invalid type",
      WINDOW = "object" == typeof window,
      root = WINDOW ? window : {};
    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && "object" == typeof self,
      NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
    NODE_JS ? root = global : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
      AMD = __webpack_require__.amdO,
      ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      HEX_CHARS = "0123456789abcdef".split(""),
      EXTRA = [-2147483648, 8388608, 32768, 128],
      SHIFT = [24, 16, 8, 0],
      K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
      blocks = [];
    (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function (Ae) {
      return "[object Array]" === Object.prototype.toString.call(Ae);
    }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function (Ae) {
      return "object" == typeof Ae && Ae.buffer && Ae.buffer.constructor === ArrayBuffer;
    });
    var createOutputMethod = function (Ae, V) {
        return function (i) {
          return new Sha256(V, !0).update(i)[Ae]();
        };
      },
      createMethod = function (Ae) {
        var V = createOutputMethod("hex", Ae);
        NODE_JS && (V = nodeWrap(V, Ae)), V.create = function () {
          return new Sha256(Ae);
        }, V.update = function (e) {
          return V.create().update(e);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var t = OUTPUT_TYPES[i];
          V[t] = createOutputMethod(t, Ae);
        }
        return V;
      },
      nodeWrap = function (method, is224) {
        var crypto = eval("require('crypto')"),
          Buffer = eval("require('buffer').Buffer"),
          algorithm = is224 ? "sha224" : "sha256",
          nodeMethod = function (Ae) {
            if ("string" == typeof Ae) return crypto.createHash(algorithm).update(Ae, "utf8").digest("hex");
            if (null == Ae) throw new Error(ERROR);
            return Ae.constructor === ArrayBuffer && (Ae = new Uint8Array(Ae)), Array.isArray(Ae) || ArrayBuffer.isView(Ae) || Ae.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(Ae)).digest("hex") : method(Ae);
          };
        return nodeMethod;
      },
      createHmacOutputMethod = function (Ae, V) {
        return function (i, t) {
          return new HmacSha256(i, V, !0).update(t)[Ae]();
        };
      },
      createHmacMethod = function (Ae) {
        var V = createHmacOutputMethod("hex", Ae);
        V.create = function (e) {
          return new HmacSha256(e, Ae);
        }, V.update = function (e, a) {
          return V.create(e).update(a);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var t = OUTPUT_TYPES[i];
          V[t] = createHmacOutputMethod(t, Ae);
        }
        return V;
      };
    function Sha256(Ae, V) {
      V ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Ae ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = Ae;
    }
    function HmacSha256(Ae, V, i) {
      var t,
        e = typeof Ae;
      if ("string" === e) {
        var M,
          a = [],
          m = Ae.length,
          d = 0;
        for (t = 0; t < m; ++t) (M = Ae.charCodeAt(t)) < 128 ? a[d++] = M : M < 2048 ? (a[d++] = 192 | M >> 6, a[d++] = 128 | 63 & M) : M < 55296 || M >= 57344 ? (a[d++] = 224 | M >> 12, a[d++] = 128 | M >> 6 & 63, a[d++] = 128 | 63 & M) : (M = 65536 + ((1023 & M) << 10 | 1023 & Ae.charCodeAt(++t)), a[d++] = 240 | M >> 18, a[d++] = 128 | M >> 12 & 63, a[d++] = 128 | M >> 6 & 63, a[d++] = 128 | 63 & M);
        Ae = a;
      } else {
        if ("object" !== e) throw new Error(ERROR);
        if (null === Ae) throw new Error(ERROR);
        if (ARRAY_BUFFER && Ae.constructor === ArrayBuffer) Ae = new Uint8Array(Ae);else if (!(Array.isArray(Ae) || ARRAY_BUFFER && ArrayBuffer.isView(Ae))) throw new Error(ERROR);
      }
      Ae.length > 64 && (Ae = new Sha256(V, !0).update(Ae).array());
      var b = [],
        A = [];
      for (t = 0; t < 64; ++t) {
        var N = Ae[t] || 0;
        b[t] = 92 ^ N, A[t] = 54 ^ N;
      }
      Sha256.call(this, V, i), this.update(A), this.oKeyPad = b, this.inner = !0, this.sharedMemory = i;
    }
    Sha256.prototype.update = function (Ae) {
      if (!this.finalized) {
        var V,
          i = typeof Ae;
        if ("string" !== i) {
          if ("object" !== i) throw new Error(ERROR);
          if (null === Ae) throw new Error(ERROR);
          if (ARRAY_BUFFER && Ae.constructor === ArrayBuffer) Ae = new Uint8Array(Ae);else if (!(Array.isArray(Ae) || ARRAY_BUFFER && ArrayBuffer.isView(Ae))) throw new Error(ERROR);
          V = !0;
        }
        for (var t, a, e = 0, m = Ae.length, d = this.blocks; e < m;) {
          if (this.hashed && (this.hashed = !1, d[0] = this.block, d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0), V) for (a = this.start; e < m && a < 64; ++e) d[a >> 2] |= Ae[e] << SHIFT[3 & a++];else for (a = this.start; e < m && a < 64; ++e) (t = Ae.charCodeAt(e)) < 128 ? d[a >> 2] |= t << SHIFT[3 & a++] : t < 2048 ? (d[a >> 2] |= (192 | t >> 6) << SHIFT[3 & a++], d[a >> 2] |= (128 | 63 & t) << SHIFT[3 & a++]) : t < 55296 || t >= 57344 ? (d[a >> 2] |= (224 | t >> 12) << SHIFT[3 & a++], d[a >> 2] |= (128 | t >> 6 & 63) << SHIFT[3 & a++], d[a >> 2] |= (128 | 63 & t) << SHIFT[3 & a++]) : (t = 65536 + ((1023 & t) << 10 | 1023 & Ae.charCodeAt(++e)), d[a >> 2] |= (240 | t >> 18) << SHIFT[3 & a++], d[a >> 2] |= (128 | t >> 12 & 63) << SHIFT[3 & a++], d[a >> 2] |= (128 | t >> 6 & 63) << SHIFT[3 & a++], d[a >> 2] |= (128 | 63 & t) << SHIFT[3 & a++]);
          this.lastByteIndex = a, this.bytes += a - this.start, a >= 64 ? (this.block = d[16], this.start = a - 64, this.hash(), this.hashed = !0) : this.start = a;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }
    }, Sha256.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0;
        var Ae = this.blocks,
          V = this.lastByteIndex;
        Ae[16] = this.block, Ae[V >> 2] |= EXTRA[3 & V], this.block = Ae[16], V >= 56 && (this.hashed || this.hash(), Ae[0] = this.block, Ae[16] = Ae[1] = Ae[2] = Ae[3] = Ae[4] = Ae[5] = Ae[6] = Ae[7] = Ae[8] = Ae[9] = Ae[10] = Ae[11] = Ae[12] = Ae[13] = Ae[14] = Ae[15] = 0), Ae[14] = this.hBytes << 3 | this.bytes >>> 29, Ae[15] = this.bytes << 3, this.hash();
      }
    }, Sha256.prototype.hash = function () {
      var b,
        O,
        v,
        f,
        E,
        h,
        Ae = this.h0,
        V = this.h1,
        i = this.h2,
        t = this.h3,
        e = this.h4,
        a = this.h5,
        m = this.h6,
        d = this.h7,
        M = this.blocks;
      for (b = 16; b < 64; ++b) M[b] = M[b - 16] + (((O = M[b - 15]) >>> 7 | O << 25) ^ (O >>> 18 | O << 14) ^ O >>> 3) + M[b - 7] + (((O = M[b - 2]) >>> 17 | O << 15) ^ (O >>> 19 | O << 13) ^ O >>> 10) << 0;
      for (h = V & i, b = 0; b < 64; b += 4) this.first ? (this.is224 ? (v = 300032, d = (O = M[0] - 1413257819) - 150054599 << 0, t = O + 24177077 << 0) : (v = 704751109, d = (O = M[0] - 210244248) - 1521486534 << 0, t = O + 143694565 << 0), this.first = !1) : (d = t + (O = d + ((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + (e & a ^ ~e & m) + K[b] + M[b]) << 0, t = O + (((Ae >>> 2 | Ae << 30) ^ (Ae >>> 13 | Ae << 19) ^ (Ae >>> 22 | Ae << 10)) + ((v = Ae & V) ^ Ae & i ^ h)) << 0), m = i + (O = m + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & e ^ ~d & a) + K[b + 1] + M[b + 1]) << 0, i = O + (((t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)) + ((f = t & Ae) ^ t & V ^ v)) << 0, a = V + (O = a + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & d ^ ~m & e) + K[b + 2] + M[b + 2]) << 0, V = O + (((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + ((E = i & t) ^ i & Ae ^ f)) << 0, e = Ae + (O = e + ((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & m ^ ~a & d) + K[b + 3] + M[b + 3]) << 0, Ae = O + (((V >>> 2 | V << 30) ^ (V >>> 13 | V << 19) ^ (V >>> 22 | V << 10)) + ((h = V & i) ^ V & t ^ E)) << 0;
      this.h0 = this.h0 + Ae << 0, this.h1 = this.h1 + V << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + t << 0, this.h4 = this.h4 + e << 0, this.h5 = this.h5 + a << 0, this.h6 = this.h6 + m << 0, this.h7 = this.h7 + d << 0;
    }, Sha256.prototype.hex = function () {
      this.finalize();
      var Ae = this.h0,
        V = this.h1,
        i = this.h2,
        t = this.h3,
        e = this.h4,
        a = this.h5,
        m = this.h6,
        d = this.h7,
        M = HEX_CHARS[Ae >> 28 & 15] + HEX_CHARS[Ae >> 24 & 15] + HEX_CHARS[Ae >> 20 & 15] + HEX_CHARS[Ae >> 16 & 15] + HEX_CHARS[Ae >> 12 & 15] + HEX_CHARS[Ae >> 8 & 15] + HEX_CHARS[Ae >> 4 & 15] + HEX_CHARS[15 & Ae] + HEX_CHARS[V >> 28 & 15] + HEX_CHARS[V >> 24 & 15] + HEX_CHARS[V >> 20 & 15] + HEX_CHARS[V >> 16 & 15] + HEX_CHARS[V >> 12 & 15] + HEX_CHARS[V >> 8 & 15] + HEX_CHARS[V >> 4 & 15] + HEX_CHARS[15 & V] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[m >> 28 & 15] + HEX_CHARS[m >> 24 & 15] + HEX_CHARS[m >> 20 & 15] + HEX_CHARS[m >> 16 & 15] + HEX_CHARS[m >> 12 & 15] + HEX_CHARS[m >> 8 & 15] + HEX_CHARS[m >> 4 & 15] + HEX_CHARS[15 & m];
      return this.is224 || (M += HEX_CHARS[d >> 28 & 15] + HEX_CHARS[d >> 24 & 15] + HEX_CHARS[d >> 20 & 15] + HEX_CHARS[d >> 16 & 15] + HEX_CHARS[d >> 12 & 15] + HEX_CHARS[d >> 8 & 15] + HEX_CHARS[d >> 4 & 15] + HEX_CHARS[15 & d]), M;
    }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function () {
      this.finalize();
      var Ae = this.h0,
        V = this.h1,
        i = this.h2,
        t = this.h3,
        e = this.h4,
        a = this.h5,
        m = this.h6,
        d = this.h7,
        M = [Ae >> 24 & 255, Ae >> 16 & 255, Ae >> 8 & 255, 255 & Ae, V >> 24 & 255, V >> 16 & 255, V >> 8 & 255, 255 & V, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m];
      return this.is224 || M.push(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d), M;
    }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function () {
      this.finalize();
      var Ae = new ArrayBuffer(this.is224 ? 28 : 32),
        V = new DataView(Ae);
      return V.setUint32(0, this.h0), V.setUint32(4, this.h1), V.setUint32(8, this.h2), V.setUint32(12, this.h3), V.setUint32(16, this.h4), V.setUint32(20, this.h5), V.setUint32(24, this.h6), this.is224 || V.setUint32(28, this.h7), Ae;
    }, HmacSha256.prototype = new Sha256(), HmacSha256.prototype.finalize = function () {
      if (Sha256.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var Ae = this.array();
        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(Ae), Sha256.prototype.finalize.call(this);
      }
    };
    var exports = createMethod();
    exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return exports;
    }.call(exports, __webpack_require__, exports, module), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
  })();
});
