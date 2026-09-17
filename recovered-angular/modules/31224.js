// Extracted from main; webpack module 31224. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => ug
  });
  var t = i(15861),
    e = i(36895),
    a = i(94650),
    m = i(24006),
    d = i(93278),
    M = i(62804),
    b = i(43150),
    A = i(13700);
  var p,
    O = (p = function (l, g) {
      return (p = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (S, H) {
        S.__proto__ = H;
      } || function (S, H) {
        for (var ie in H) Object.prototype.hasOwnProperty.call(H, ie) && (S[ie] = H[ie]);
      })(l, g);
    }, function (r, l) {
      if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
      function g() {
        this.constructor = r;
      }
      p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
    }),
    L = function (p) {
      function r(l, g) {
        var S = this.constructor,
          H = p.call(this, l, g) || this;
        return Object.defineProperty(H, "name", {
          value: S.name,
          enumerable: !1,
          configurable: !0
        }), function N(p, r) {
          var l = Object.setPrototypeOf;
          l ? l(p, r) : p.__proto__ = r;
        }(H, S.prototype), function I(p, r) {
          void 0 === r && (r = p.constructor);
          var l = Error.captureStackTrace;
          l && l(p, r);
        }(H), H;
      }
      return O(r, p), r;
    }(Error),
    f = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    E = function (p) {
      function r(l) {
        void 0 === l && (l = void 0);
        var g = p.call(this, l) || this;
        return g.message = l, g;
      }
      return f(r, p), r.prototype.getKind = function () {
        return this.constructor.kind;
      }, r.kind = "Exception", r;
    }(L);
  const h = E;
  var x = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    u = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return x(r, p), r.kind = "ArgumentException", r;
    }(h);
  const T = u;
  var R = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    B = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return R(r, p), r.kind = "IllegalArgumentException", r;
    }(h);
  const y = B;
  var j = function () {
    function p(r) {
      if (this.binarizer = r, null === r) throw new y("Binarizer must be non-null.");
    }
    return p.prototype.getWidth = function () {
      return this.binarizer.getWidth();
    }, p.prototype.getHeight = function () {
      return this.binarizer.getHeight();
    }, p.prototype.getBlackRow = function (r, l) {
      return this.binarizer.getBlackRow(r, l);
    }, p.prototype.getBlackMatrix = function () {
      return null == this.matrix && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
    }, p.prototype.isCropSupported = function () {
      return this.binarizer.getLuminanceSource().isCropSupported();
    }, p.prototype.crop = function (r, l, g, S) {
      var H = this.binarizer.getLuminanceSource().crop(r, l, g, S);
      return new p(this.binarizer.createBinarizer(H));
    }, p.prototype.isRotateSupported = function () {
      return this.binarizer.getLuminanceSource().isRotateSupported();
    }, p.prototype.rotateCounterClockwise = function () {
      var r = this.binarizer.getLuminanceSource().rotateCounterClockwise();
      return new p(this.binarizer.createBinarizer(r));
    }, p.prototype.rotateCounterClockwise45 = function () {
      var r = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
      return new p(this.binarizer.createBinarizer(r));
    }, p.prototype.toString = function () {
      try {
        return this.getBlackMatrix().toString();
      } catch {
        return "";
      }
    }, p;
  }();
  const W = j;
  var F = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Le = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return F(r, p), r.getChecksumInstance = function () {
        return new r();
      }, r.kind = "ChecksumException", r;
    }(h);
  const ke = Le;
  var J = function () {
    function p(r) {
      this.source = r;
    }
    return p.prototype.getLuminanceSource = function () {
      return this.source;
    }, p.prototype.getWidth = function () {
      return this.source.getWidth();
    }, p.prototype.getHeight = function () {
      return this.source.getHeight();
    }, p;
  }();
  const fe = J;
  var ye = function () {
    function p() {}
    return p.arraycopy = function (r, l, g, S, H) {
      for (; H--;) g[S++] = r[l++];
    }, p.currentTimeMillis = function () {
      return Date.now();
    }, p;
  }();
  const ae = ye;
  var Y = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    G = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Y(r, p), r.kind = "IndexOutOfBoundsException", r;
    }(h);
  const te = G;
  var pe = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    be = function (p) {
      function r(l, g) {
        void 0 === l && (l = void 0), void 0 === g && (g = void 0);
        var S = p.call(this, g) || this;
        return S.index = l, S.message = g, S;
      }
      return pe(r, p), r.kind = "ArrayIndexOutOfBoundsException", r;
    }(te);
  const le = be;
  var Se = function () {
    function p() {}
    return p.fill = function (r, l) {
      for (var g = 0, S = r.length; g < S; g++) r[g] = l;
    }, p.fillWithin = function (r, l, g, S) {
      p.rangeCheck(r.length, l, g);
      for (var H = l; H < g; H++) r[H] = S;
    }, p.rangeCheck = function (r, l, g) {
      if (l > g) throw new y("fromIndex(" + l + ") > toIndex(" + g + ")");
      if (l < 0) throw new le(l);
      if (g > r) throw new le(g);
    }, p.asList = function () {
      for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return r;
    }, p.create = function (r, l, g) {
      return Array.from({
        length: r
      }).map(function (H) {
        return Array.from({
          length: l
        }).fill(g);
      });
    }, p.createInt32Array = function (r, l, g) {
      return Array.from({
        length: r
      }).map(function (H) {
        return Int32Array.from({
          length: l
        }).fill(g);
      });
    }, p.equals = function (r, l) {
      if (!(r && l && r.length && l.length && r.length === l.length)) return !1;
      for (var g = 0, S = r.length; g < S; g++) if (r[g] !== l[g]) return !1;
      return !0;
    }, p.hashCode = function (r) {
      var l, g;
      if (null === r) return 0;
      var S = 1;
      try {
        for (var H = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(r), ie = H.next(); !ie.done; ie = H.next()) S = 31 * S + ie.value;
      } catch (Oe) {
        l = {
          error: Oe
        };
      } finally {
        try {
          ie && !ie.done && (g = H.return) && g.call(H);
        } finally {
          if (l) throw l.error;
        }
      }
      return S;
    }, p.fillUint8Array = function (r, l) {
      for (var g = 0; g !== r.length; g++) r[g] = l;
    }, p.copyOf = function (r, l) {
      return r.slice(0, l);
    }, p.copyOfUint8Array = function (r, l) {
      if (r.length <= l) {
        var g = new Uint8Array(l);
        return g.set(r), g;
      }
      return r.slice(0, l);
    }, p.copyOfRange = function (r, l, g) {
      var S = g - l,
        H = new Int32Array(S);
      return ae.arraycopy(r, l, H, 0, S), H;
    }, p.binarySearch = function (r, l, g) {
      void 0 === g && (g = p.numberComparator);
      for (var S = 0, H = r.length - 1; S <= H;) {
        var ie = H + S >> 1,
          de = g(l, r[ie]);
        if (de > 0) S = ie + 1;else {
          if (!(de < 0)) return ie;
          H = ie - 1;
        }
      }
      return -S - 1;
    }, p.numberComparator = function (r, l) {
      return r - l;
    }, p;
  }();
  const qe = Se;
  var Rt = function () {
    function p() {}
    return p.numberOfTrailingZeros = function (r) {
      var l;
      if (0 === r) return 32;
      var g = 31;
      return 0 != (l = r << 16) && (g -= 16, r = l), 0 != (l = r << 8) && (g -= 8, r = l), 0 != (l = r << 4) && (g -= 4, r = l), 0 != (l = r << 2) && (g -= 2, r = l), g - (r << 1 >>> 31);
    }, p.numberOfLeadingZeros = function (r) {
      if (0 === r) return 32;
      var l = 1;
      return r >>> 16 || (l += 16, r <<= 16), r >>> 24 || (l += 8, r <<= 8), r >>> 28 || (l += 4, r <<= 4), r >>> 30 || (l += 2, r <<= 2), l - (r >>> 31);
    }, p.toHexString = function (r) {
      return r.toString(16);
    }, p.toBinaryString = function (r) {
      return String(parseInt(String(r), 2));
    }, p.bitCount = function (r) {
      return r = (r = (858993459 & (r -= r >>> 1 & 1431655765)) + (r >>> 2 & 858993459)) + (r >>> 4) & 252645135, 63 & (r += r >>> 8) + (r >>> 16);
    }, p.truncDivision = function (r, l) {
      return Math.trunc(r / l);
    }, p.parseInt = function (r, l) {
      return void 0 === l && (l = void 0), parseInt(r, l);
    }, p.MIN_VALUE_32_BITS = -2147483648, p.MAX_VALUE = Number.MAX_SAFE_INTEGER, p;
  }();
  const We = Rt;
  var Re = function () {
    function p(r, l) {
      void 0 === r ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = r, this.bits = null == l ? p.makeArray(r) : l);
    }
    return p.prototype.getSize = function () {
      return this.size;
    }, p.prototype.getSizeInBytes = function () {
      return Math.floor((this.size + 7) / 8);
    }, p.prototype.ensureCapacity = function (r) {
      if (r > 32 * this.bits.length) {
        var l = p.makeArray(r);
        ae.arraycopy(this.bits, 0, l, 0, this.bits.length), this.bits = l;
      }
    }, p.prototype.get = function (r) {
      return 0 != (this.bits[Math.floor(r / 32)] & 1 << (31 & r));
    }, p.prototype.set = function (r) {
      this.bits[Math.floor(r / 32)] |= 1 << (31 & r);
    }, p.prototype.flip = function (r) {
      this.bits[Math.floor(r / 32)] ^= 1 << (31 & r);
    }, p.prototype.getNextSet = function (r) {
      var l = this.size;
      if (r >= l) return l;
      var g = this.bits,
        S = Math.floor(r / 32),
        H = g[S];
      H &= ~((1 << (31 & r)) - 1);
      for (var ie = g.length; 0 === H;) {
        if (++S === ie) return l;
        H = g[S];
      }
      var de = 32 * S + We.numberOfTrailingZeros(H);
      return de > l ? l : de;
    }, p.prototype.getNextUnset = function (r) {
      var l = this.size;
      if (r >= l) return l;
      var g = this.bits,
        S = Math.floor(r / 32),
        H = ~g[S];
      H &= ~((1 << (31 & r)) - 1);
      for (var ie = g.length; 0 === H;) {
        if (++S === ie) return l;
        H = ~g[S];
      }
      var de = 32 * S + We.numberOfTrailingZeros(H);
      return de > l ? l : de;
    }, p.prototype.setBulk = function (r, l) {
      this.bits[Math.floor(r / 32)] = l;
    }, p.prototype.setRange = function (r, l) {
      if (l < r || r < 0 || l > this.size) throw new y();
      if (l !== r) {
        l--;
        for (var g = Math.floor(r / 32), S = Math.floor(l / 32), H = this.bits, ie = g; ie <= S; ie++) H[ie] |= (2 << (ie < S ? 31 : 31 & l)) - (1 << (ie > g ? 0 : 31 & r));
      }
    }, p.prototype.clear = function () {
      for (var r = this.bits.length, l = this.bits, g = 0; g < r; g++) l[g] = 0;
    }, p.prototype.isRange = function (r, l, g) {
      if (l < r || r < 0 || l > this.size) throw new y();
      if (l === r) return !0;
      l--;
      for (var S = Math.floor(r / 32), H = Math.floor(l / 32), ie = this.bits, de = S; de <= H; de++) {
        var wt = (2 << (de < H ? 31 : 31 & l)) - (1 << (de > S ? 0 : 31 & r)) & 4294967295;
        if ((ie[de] & wt) !== (g ? wt : 0)) return !1;
      }
      return !0;
    }, p.prototype.appendBit = function (r) {
      this.ensureCapacity(this.size + 1), r && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++;
    }, p.prototype.appendBits = function (r, l) {
      if (l < 0 || l > 32) throw new y("Num bits must be between 0 and 32");
      this.ensureCapacity(this.size + l);
      for (var g = l; g > 0; g--) this.appendBit(1 == (r >> g - 1 & 1));
    }, p.prototype.appendBitArray = function (r) {
      var l = r.size;
      this.ensureCapacity(this.size + l);
      for (var g = 0; g < l; g++) this.appendBit(r.get(g));
    }, p.prototype.xor = function (r) {
      if (this.size !== r.size) throw new y("Sizes don't match");
      for (var l = this.bits, g = 0, S = l.length; g < S; g++) l[g] ^= r.bits[g];
    }, p.prototype.toBytes = function (r, l, g, S) {
      for (var H = 0; H < S; H++) {
        for (var ie = 0, de = 0; de < 8; de++) this.get(r) && (ie |= 1 << 7 - de), r++;
        l[g + H] = ie;
      }
    }, p.prototype.getBitArray = function () {
      return this.bits;
    }, p.prototype.reverse = function () {
      for (var r = new Int32Array(this.bits.length), l = Math.floor((this.size - 1) / 32), g = l + 1, S = this.bits, H = 0; H < g; H++) {
        var ie = S[H];
        r[l - H] = ie = (ie = (ie = (ie = (ie = ie >> 1 & 1431655765 | (1431655765 & ie) << 1) >> 2 & 858993459 | (858993459 & ie) << 2) >> 4 & 252645135 | (252645135 & ie) << 4) >> 8 & 16711935 | (16711935 & ie) << 8) >> 16 & 65535 | (65535 & ie) << 16;
      }
      if (this.size !== 32 * g) {
        var de = 32 * g - this.size,
          Oe = r[0] >>> de;
        for (H = 1; H < g; H++) {
          var Xe = r[H];
          r[H - 1] = Oe |= Xe << 32 - de, Oe = Xe >>> de;
        }
        r[g - 1] = Oe;
      }
      this.bits = r;
    }, p.makeArray = function (r) {
      return new Int32Array(Math.floor((r + 31) / 32));
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.size === r.size && qe.equals(this.bits, r.bits);
    }, p.prototype.hashCode = function () {
      return 31 * this.size + qe.hashCode(this.bits);
    }, p.prototype.toString = function () {
      for (var r = "", l = 0, g = this.size; l < g; l++) 7 & l || (r += " "), r += this.get(l) ? "X" : ".";
      return r;
    }, p.prototype.clone = function () {
      return new p(this.size, this.bits.slice());
    }, p.prototype.toArray = function () {
      for (var r = [], l = 0, g = this.size; l < g; l++) r.push(this.get(l));
      return r;
    }, p;
  }();
  const st = Re;
  var q = (() => (function (p) {
    p[p.OTHER = 0] = "OTHER", p[p.PURE_BARCODE = 1] = "PURE_BARCODE", p[p.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", p[p.TRY_HARDER = 3] = "TRY_HARDER", p[p.CHARACTER_SET = 4] = "CHARACTER_SET", p[p.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", p[p.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", p[p.ENABLE_CODE_39_EXTENDED_MODE = 7] = "ENABLE_CODE_39_EXTENDED_MODE", p[p.ASSUME_GS1 = 8] = "ASSUME_GS1", p[p.RETURN_CODABAR_START_END = 9] = "RETURN_CODABAR_START_END", p[p.NEED_RESULT_POINT_CALLBACK = 10] = "NEED_RESULT_POINT_CALLBACK", p[p.ALLOWED_EAN_EXTENSIONS = 11] = "ALLOWED_EAN_EXTENSIONS";
  }(q || (q = {})), q))();
  const mt = q;
  var ut = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ct = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return ut(r, p), r.getFormatInstance = function () {
        return new r();
      }, r.kind = "FormatException", r;
    }(h);
  const Ft = Ct;
  var Et = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Ue = (() => (function (p) {
      p[p.Cp437 = 0] = "Cp437", p[p.ISO8859_1 = 1] = "ISO8859_1", p[p.ISO8859_2 = 2] = "ISO8859_2", p[p.ISO8859_3 = 3] = "ISO8859_3", p[p.ISO8859_4 = 4] = "ISO8859_4", p[p.ISO8859_5 = 5] = "ISO8859_5", p[p.ISO8859_6 = 6] = "ISO8859_6", p[p.ISO8859_7 = 7] = "ISO8859_7", p[p.ISO8859_8 = 8] = "ISO8859_8", p[p.ISO8859_9 = 9] = "ISO8859_9", p[p.ISO8859_10 = 10] = "ISO8859_10", p[p.ISO8859_11 = 11] = "ISO8859_11", p[p.ISO8859_13 = 12] = "ISO8859_13", p[p.ISO8859_14 = 13] = "ISO8859_14", p[p.ISO8859_15 = 14] = "ISO8859_15", p[p.ISO8859_16 = 15] = "ISO8859_16", p[p.SJIS = 16] = "SJIS", p[p.Cp1250 = 17] = "Cp1250", p[p.Cp1251 = 18] = "Cp1251", p[p.Cp1252 = 19] = "Cp1252", p[p.Cp1256 = 20] = "Cp1256", p[p.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", p[p.UTF8 = 22] = "UTF8", p[p.ASCII = 23] = "ASCII", p[p.Big5 = 24] = "Big5", p[p.GB18030 = 25] = "GB18030", p[p.EUC_KR = 26] = "EUC_KR";
    }(Ue || (Ue = {})), Ue))(),
    Me = function () {
      function p(r, l, g) {
        for (var S, H, ie = [], de = 3; de < arguments.length; de++) ie[de - 3] = arguments[de];
        this.valueIdentifier = r, this.name = g, this.values = "number" == typeof l ? Int32Array.from([l]) : l, this.otherEncodingNames = ie, p.VALUE_IDENTIFIER_TO_ECI.set(r, this), p.NAME_TO_ECI.set(g, this);
        for (var Oe = this.values, Xe = 0, wt = Oe.length; Xe !== wt; Xe++) p.VALUES_TO_ECI.set(Oe[Xe], this);
        try {
          for (var cn = Et(ie), xn = cn.next(); !xn.done; xn = cn.next()) p.NAME_TO_ECI.set(xn.value, this);
        } catch (no) {
          S = {
            error: no
          };
        } finally {
          try {
            xn && !xn.done && (H = cn.return) && H.call(cn);
          } finally {
            if (S) throw S.error;
          }
        }
      }
      return p.prototype.getValueIdentifier = function () {
        return this.valueIdentifier;
      }, p.prototype.getName = function () {
        return this.name;
      }, p.prototype.getValue = function () {
        return this.values[0];
      }, p.getCharacterSetECIByValue = function (r) {
        if (r < 0 || r >= 900) throw new Ft("incorect value");
        var l = p.VALUES_TO_ECI.get(r);
        if (void 0 === l) throw new Ft("incorect value");
        return l;
      }, p.getCharacterSetECIByName = function (r) {
        var l = p.NAME_TO_ECI.get(r);
        if (void 0 === l) throw new Ft("incorect value");
        return l;
      }, p.prototype.equals = function (r) {
        if (!(r instanceof p)) return !1;
        var l = r;
        return this.getName() === l.getName();
      }, p.VALUE_IDENTIFIER_TO_ECI = new Map(), p.VALUES_TO_ECI = new Map(), p.NAME_TO_ECI = new Map(), p.Cp437 = new p(Ue.Cp437, Int32Array.from([0, 2]), "Cp437"), p.ISO8859_1 = new p(Ue.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), p.ISO8859_2 = new p(Ue.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), p.ISO8859_3 = new p(Ue.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), p.ISO8859_4 = new p(Ue.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), p.ISO8859_5 = new p(Ue.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), p.ISO8859_6 = new p(Ue.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), p.ISO8859_7 = new p(Ue.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), p.ISO8859_8 = new p(Ue.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), p.ISO8859_9 = new p(Ue.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), p.ISO8859_10 = new p(Ue.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), p.ISO8859_11 = new p(Ue.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), p.ISO8859_13 = new p(Ue.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), p.ISO8859_14 = new p(Ue.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), p.ISO8859_15 = new p(Ue.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), p.ISO8859_16 = new p(Ue.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), p.SJIS = new p(Ue.SJIS, 20, "SJIS", "Shift_JIS"), p.Cp1250 = new p(Ue.Cp1250, 21, "Cp1250", "windows-1250"), p.Cp1251 = new p(Ue.Cp1251, 22, "Cp1251", "windows-1251"), p.Cp1252 = new p(Ue.Cp1252, 23, "Cp1252", "windows-1252"), p.Cp1256 = new p(Ue.Cp1256, 24, "Cp1256", "windows-1256"), p.UnicodeBigUnmarked = new p(Ue.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), p.UTF8 = new p(Ue.UTF8, 26, "UTF8", "UTF-8"), p.ASCII = new p(Ue.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), p.Big5 = new p(Ue.Big5, 28, "Big5"), p.GB18030 = new p(Ue.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), p.EUC_KR = new p(Ue.EUC_KR, 30, "EUC_KR", "EUC-KR"), p;
    }();
  const Ke = Me;
  var Ze = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ee = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Ze(r, p), r.kind = "UnsupportedOperationException", r;
    }(h);
  const je = Ee;
  var Mt = function () {
    function p() {}
    return p.decode = function (r, l) {
      var g = this.encodingName(l);
      return this.customDecoder ? this.customDecoder(r, g) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(g) ? this.decodeFallback(r, g) : new TextDecoder(g).decode(r);
    }, p.shouldDecodeOnFallback = function (r) {
      return !p.isBrowser() && "ISO-8859-1" === r;
    }, p.encode = function (r, l) {
      var g = this.encodingName(l);
      return this.customEncoder ? this.customEncoder(r, g) : typeof TextEncoder > "u" ? this.encodeFallback(r) : new TextEncoder().encode(r);
    }, p.isBrowser = function () {
      return typeof window < "u" && "[object Window]" === {}.toString.call(window);
    }, p.encodingName = function (r) {
      return "string" == typeof r ? r : r.getName();
    }, p.encodingCharacterSet = function (r) {
      return r instanceof Ke ? r : Ke.getCharacterSetECIByName(r);
    }, p.decodeFallback = function (r, l) {
      var g = this.encodingCharacterSet(l);
      if (p.isDecodeFallbackSupported(g)) {
        for (var S = "", H = 0, ie = r.length; H < ie; H++) {
          var de = r[H].toString(16);
          de.length < 2 && (de = "0" + de), S += "%" + de;
        }
        return decodeURIComponent(S);
      }
      if (g.equals(Ke.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
      throw new je("Encoding " + this.encodingName(l) + " not supported by fallback.");
    }, p.isDecodeFallbackSupported = function (r) {
      return r.equals(Ke.UTF8) || r.equals(Ke.ISO8859_1) || r.equals(Ke.ASCII);
    }, p.encodeFallback = function (r) {
      for (var g = btoa(unescape(encodeURIComponent(r))).split(""), S = [], H = 0; H < g.length; H++) S.push(g[H].charCodeAt(0));
      return new Uint8Array(S);
    }, p;
  }();
  const Je = Mt;
  var Xt = function () {
    function p() {}
    return p.castAsNonUtf8Char = function (r, l) {
      void 0 === l && (l = null);
      var g = l ? l.getName() : this.ISO88591;
      return Je.decode(new Uint8Array([r]), g);
    }, p.guessEncoding = function (r, l) {
      if (null != l && void 0 !== l.get(mt.CHARACTER_SET)) return l.get(mt.CHARACTER_SET).toString();
      for (var g = r.length, S = !0, H = !0, ie = !0, de = 0, Oe = 0, Xe = 0, wt = 0, Lt = 0, cn = 0, xn = 0, Hi = 0, no = 0, Ho = 0, zo = 0, Bo = r.length > 3 && 239 === r[0] && 187 === r[1] && 191 === r[2], Mr = 0; Mr < g && (S || H || ie); Mr++) {
        var Ur = 255 & r[Mr];
        ie && (de > 0 ? 128 & Ur ? de-- : ie = !1 : 128 & Ur && (64 & Ur ? (de++, 32 & Ur ? (de++, 16 & Ur ? (de++, 8 & Ur ? ie = !1 : wt++) : Xe++) : Oe++) : ie = !1)), S && (Ur > 127 && Ur < 160 ? S = !1 : Ur > 159 && (Ur < 192 || 215 === Ur || 247 === Ur) && zo++), H && (Lt > 0 ? Ur < 64 || 127 === Ur || Ur > 252 ? H = !1 : Lt-- : 128 === Ur || 160 === Ur || Ur > 239 ? H = !1 : Ur > 160 && Ur < 224 ? (cn++, Hi = 0, ++xn > no && (no = xn)) : Ur > 127 ? (Lt++, xn = 0, ++Hi > Ho && (Ho = Hi)) : (xn = 0, Hi = 0));
      }
      return ie && de > 0 && (ie = !1), H && Lt > 0 && (H = !1), ie && (Bo || Oe + Xe + wt > 0) ? p.UTF8 : H && (p.ASSUME_SHIFT_JIS || no >= 3 || Ho >= 3) ? p.SHIFT_JIS : S && H ? 2 === no && 2 === cn || 10 * zo >= g ? p.SHIFT_JIS : p.ISO88591 : S ? p.ISO88591 : H ? p.SHIFT_JIS : ie ? p.UTF8 : p.PLATFORM_DEFAULT_ENCODING;
    }, p.format = function (r) {
      for (var l = [], g = 1; g < arguments.length; g++) l[g - 1] = arguments[g];
      var S = -1;
      return r.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function H(de, Oe, Xe, wt, Lt, cn) {
        if ("%%" === de) return "%";
        if (void 0 !== l[++S]) {
          de = wt ? parseInt(wt.substr(1)) : void 0;
          var Hi,
            xn = Lt ? parseInt(Lt.substr(1)) : void 0;
          switch (cn) {
            case "s":
              Hi = l[S];
              break;
            case "c":
              Hi = l[S][0];
              break;
            case "f":
              Hi = parseFloat(l[S]).toFixed(de);
              break;
            case "p":
              Hi = parseFloat(l[S]).toPrecision(de);
              break;
            case "e":
              Hi = parseFloat(l[S]).toExponential(de);
              break;
            case "x":
              Hi = parseInt(l[S]).toString(xn || 16);
              break;
            case "d":
              Hi = parseFloat(parseInt(l[S], xn || 10).toPrecision(de)).toFixed(0);
          }
          Hi = "object" == typeof Hi ? JSON.stringify(Hi) : (+Hi).toString(xn);
          for (var no = parseInt(Xe), Ho = Xe && Xe[0] + "" == "0" ? "0" : " "; Hi.length < no;) Hi = void 0 !== Oe ? Hi + Ho : Ho + Hi;
          return Hi;
        }
      });
    }, p.getBytes = function (r, l) {
      return Je.encode(r, l);
    }, p.getCharCode = function (r, l) {
      return void 0 === l && (l = 0), r.charCodeAt(l);
    }, p.getCharAt = function (r) {
      return String.fromCharCode(r);
    }, p.SHIFT_JIS = Ke.SJIS.getName(), p.GB2312 = "GB2312", p.ISO88591 = Ke.ISO8859_1.getName(), p.EUC_JP = "EUC_JP", p.UTF8 = Ke.UTF8.getName(), p.PLATFORM_DEFAULT_ENCODING = p.UTF8, p.ASSUME_SHIFT_JIS = !1, p;
  }();
  const Nn = Xt;
  var Pi = function () {
    function p(r) {
      void 0 === r && (r = ""), this.value = r;
    }
    return p.prototype.enableDecoding = function (r) {
      return this.encoding = r, this;
    }, p.prototype.append = function (r) {
      return this.value += "string" == typeof r ? r.toString() : this.encoding ? Nn.castAsNonUtf8Char(r, this.encoding) : String.fromCharCode(r), this;
    }, p.prototype.appendChars = function (r, l, g) {
      for (var S = l; l < l + g; S++) this.append(r[S]);
      return this;
    }, p.prototype.length = function () {
      return this.value.length;
    }, p.prototype.charAt = function (r) {
      return this.value.charAt(r);
    }, p.prototype.deleteCharAt = function (r) {
      this.value = this.value.substr(0, r) + this.value.substring(r + 1);
    }, p.prototype.setCharAt = function (r, l) {
      this.value = this.value.substr(0, r) + l + this.value.substr(r + 1);
    }, p.prototype.substring = function (r, l) {
      return this.value.substring(r, l);
    }, p.prototype.setLengthToZero = function () {
      this.value = "";
    }, p.prototype.toString = function () {
      return this.value;
    }, p.prototype.insert = function (r, l) {
      this.value = this.value.substring(0, r) + l + this.value.substring(r);
    }, p;
  }();
  const Ii = Pi;
  var yi = function () {
    function p(r, l, g, S) {
      if (this.width = r, this.height = l, this.rowSize = g, this.bits = S, null == l && (l = r), this.height = l, r < 1 || l < 1) throw new y("Both dimensions must be greater than 0");
      null == g && (g = Math.floor((r + 31) / 32)), this.rowSize = g, null == S && (this.bits = new Int32Array(this.rowSize * this.height));
    }
    return p.parseFromBooleanArray = function (r) {
      for (var l = r.length, g = r[0].length, S = new p(g, l), H = 0; H < l; H++) for (var ie = r[H], de = 0; de < g; de++) ie[de] && S.set(de, H);
      return S;
    }, p.parseFromString = function (r, l, g) {
      if (null === r) throw new y("stringRepresentation cannot be null");
      for (var S = new Array(r.length), H = 0, ie = 0, de = -1, Oe = 0, Xe = 0; Xe < r.length;) if ("\n" === r.charAt(Xe) || "\r" === r.charAt(Xe)) {
        if (H > ie) {
          if (-1 === de) de = H - ie;else if (H - ie !== de) throw new y("row lengths do not match");
          ie = H, Oe++;
        }
        Xe++;
      } else if (r.substring(Xe, Xe + l.length) === l) Xe += l.length, S[H] = !0, H++;else {
        if (r.substring(Xe, Xe + g.length) !== g) throw new y("illegal character encountered: " + r.substring(Xe));
        Xe += g.length, S[H] = !1, H++;
      }
      if (H > ie) {
        if (-1 === de) de = H - ie;else if (H - ie !== de) throw new y("row lengths do not match");
        Oe++;
      }
      for (var wt = new p(de, Oe), Lt = 0; Lt < H; Lt++) S[Lt] && wt.set(Math.floor(Lt % de), Math.floor(Lt / de));
      return wt;
    }, p.prototype.get = function (r, l) {
      var g = l * this.rowSize + Math.floor(r / 32);
      return 0 != (this.bits[g] >>> (31 & r) & 1);
    }, p.prototype.set = function (r, l) {
      var g = l * this.rowSize + Math.floor(r / 32);
      this.bits[g] |= 1 << (31 & r) & 4294967295;
    }, p.prototype.unset = function (r, l) {
      var g = l * this.rowSize + Math.floor(r / 32);
      this.bits[g] &= ~(1 << (31 & r) & 4294967295);
    }, p.prototype.flip = function (r, l) {
      var g = l * this.rowSize + Math.floor(r / 32);
      this.bits[g] ^= 1 << (31 & r) & 4294967295;
    }, p.prototype.xor = function (r) {
      if (this.width !== r.getWidth() || this.height !== r.getHeight() || this.rowSize !== r.getRowSize()) throw new y("input matrix dimensions do not match");
      for (var l = new st(Math.floor(this.width / 32) + 1), g = this.rowSize, S = this.bits, H = 0, ie = this.height; H < ie; H++) for (var de = H * g, Oe = r.getRow(H, l).getBitArray(), Xe = 0; Xe < g; Xe++) S[de + Xe] ^= Oe[Xe];
    }, p.prototype.clear = function () {
      for (var r = this.bits, l = r.length, g = 0; g < l; g++) r[g] = 0;
    }, p.prototype.setRegion = function (r, l, g, S) {
      if (l < 0 || r < 0) throw new y("Left and top must be nonnegative");
      if (S < 1 || g < 1) throw new y("Height and width must be at least 1");
      var H = r + g,
        ie = l + S;
      if (ie > this.height || H > this.width) throw new y("The region must fit inside the matrix");
      for (var de = this.rowSize, Oe = this.bits, Xe = l; Xe < ie; Xe++) for (var wt = Xe * de, Lt = r; Lt < H; Lt++) Oe[wt + Math.floor(Lt / 32)] |= 1 << (31 & Lt) & 4294967295;
    }, p.prototype.getRow = function (r, l) {
      null == l || l.getSize() < this.width ? l = new st(this.width) : l.clear();
      for (var g = this.rowSize, S = this.bits, H = r * g, ie = 0; ie < g; ie++) l.setBulk(32 * ie, S[H + ie]);
      return l;
    }, p.prototype.setRow = function (r, l) {
      ae.arraycopy(l.getBitArray(), 0, this.bits, r * this.rowSize, this.rowSize);
    }, p.prototype.rotate180 = function () {
      for (var r = this.getWidth(), l = this.getHeight(), g = new st(r), S = new st(r), H = 0, ie = Math.floor((l + 1) / 2); H < ie; H++) g = this.getRow(H, g), S = this.getRow(l - 1 - H, S), g.reverse(), S.reverse(), this.setRow(H, S), this.setRow(l - 1 - H, g);
    }, p.prototype.getEnclosingRectangle = function () {
      for (var l = this.height, g = this.rowSize, S = this.bits, H = this.width, ie = l, de = -1, Oe = -1, Xe = 0; Xe < l; Xe++) for (var wt = 0; wt < g; wt++) {
        var Lt = S[Xe * g + wt];
        if (0 !== Lt) {
          if (Xe < ie && (ie = Xe), Xe > Oe && (Oe = Xe), 32 * wt < H) {
            for (var cn = 0; !(Lt << 31 - cn & 4294967295);) cn++;
            32 * wt + cn < H && (H = 32 * wt + cn);
          }
          if (32 * wt + 31 > de) {
            for (cn = 31; !(Lt >>> cn);) cn--;
            32 * wt + cn > de && (de = 32 * wt + cn);
          }
        }
      }
      return de < H || Oe < ie ? null : Int32Array.from([H, ie, de - H + 1, Oe - ie + 1]);
    }, p.prototype.getTopLeftOnBit = function () {
      for (var r = this.rowSize, l = this.bits, g = 0; g < l.length && 0 === l[g];) g++;
      if (g === l.length) return null;
      for (var S = g / r, H = g % r * 32, ie = l[g], de = 0; !(ie << 31 - de & 4294967295);) de++;
      return Int32Array.from([H += de, S]);
    }, p.prototype.getBottomRightOnBit = function () {
      for (var r = this.rowSize, l = this.bits, g = l.length - 1; g >= 0 && 0 === l[g];) g--;
      if (g < 0) return null;
      for (var S = Math.floor(g / r), H = 32 * Math.floor(g % r), ie = l[g], de = 31; !(ie >>> de);) de--;
      return Int32Array.from([H += de, S]);
    }, p.prototype.getWidth = function () {
      return this.width;
    }, p.prototype.getHeight = function () {
      return this.height;
    }, p.prototype.getRowSize = function () {
      return this.rowSize;
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.width === r.width && this.height === r.height && this.rowSize === r.rowSize && qe.equals(this.bits, r.bits);
    }, p.prototype.hashCode = function () {
      var r = this.width;
      return 31 * (r = 31 * (r = 31 * (r = 31 * r + this.width) + this.height) + this.rowSize) + qe.hashCode(this.bits);
    }, p.prototype.toString = function (r, l, g) {
      return void 0 === r && (r = "X "), void 0 === l && (l = "  "), void 0 === g && (g = "\n"), this.buildToString(r, l, g);
    }, p.prototype.buildToString = function (r, l, g) {
      for (var S = new Ii(), H = 0, ie = this.height; H < ie; H++) {
        for (var de = 0, Oe = this.width; de < Oe; de++) S.append(this.get(de, H) ? r : l);
        S.append(g);
      }
      return S.toString();
    }, p.prototype.clone = function () {
      return new p(this.width, this.height, this.rowSize, this.bits.slice());
    }, p;
  }();
  const co = yi;
  var Jo = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    fr = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Jo(r, p), r.getNotFoundInstance = function () {
        return new r();
      }, r.kind = "NotFoundException", r;
    }(h);
  const pt = fr;
  var Dt = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ht = function (p) {
      function r(l) {
        var g = p.call(this, l) || this;
        return g.luminances = r.EMPTY, g.buckets = new Int32Array(r.LUMINANCE_BUCKETS), g;
      }
      return Dt(r, p), r.prototype.getBlackRow = function (l, g) {
        var S = this.getLuminanceSource(),
          H = S.getWidth();
        null == g || g.getSize() < H ? g = new st(H) : g.clear(), this.initArrays(H);
        for (var ie = S.getRow(l, this.luminances), de = this.buckets, Oe = 0; Oe < H; Oe++) de[(255 & ie[Oe]) >> r.LUMINANCE_SHIFT]++;
        var Xe = r.estimateBlackPoint(de);
        if (H < 3) for (Oe = 0; Oe < H; Oe++) (255 & ie[Oe]) < Xe && g.set(Oe);else {
          var wt = 255 & ie[0],
            Lt = 255 & ie[1];
          for (Oe = 1; Oe < H - 1; Oe++) {
            var cn = 255 & ie[Oe + 1];
            (4 * Lt - wt - cn) / 2 < Xe && g.set(Oe), wt = Lt, Lt = cn;
          }
        }
        return g;
      }, r.prototype.getBlackMatrix = function () {
        var l = this.getLuminanceSource(),
          g = l.getWidth(),
          S = l.getHeight(),
          H = new co(g, S);
        this.initArrays(g);
        for (var ie = this.buckets, de = 1; de < 5; de++) for (var Oe = Math.floor(S * de / 5), Xe = l.getRow(Oe, this.luminances), wt = Math.floor(4 * g / 5), Lt = Math.floor(g / 5); Lt < wt; Lt++) ie[(255 & Xe[Lt]) >> r.LUMINANCE_SHIFT]++;
        var xn = r.estimateBlackPoint(ie),
          Hi = l.getMatrix();
        for (de = 0; de < S; de++) {
          var no = de * g;
          for (Lt = 0; Lt < g; Lt++) (255 & Hi[no + Lt]) < xn && H.set(Lt, de);
        }
        return H;
      }, r.prototype.createBinarizer = function (l) {
        return new r(l);
      }, r.prototype.initArrays = function (l) {
        this.luminances.length < l && (this.luminances = new Uint8ClampedArray(l));
        for (var g = this.buckets, S = 0; S < r.LUMINANCE_BUCKETS; S++) g[S] = 0;
      }, r.estimateBlackPoint = function (l) {
        for (var g = l.length, S = 0, H = 0, ie = 0, de = 0; de < g; de++) l[de] > ie && (H = de, ie = l[de]), l[de] > S && (S = l[de]);
        var Oe = 0,
          Xe = 0;
        for (de = 0; de < g; de++) {
          var wt = de - H;
          (Lt = l[de] * wt * wt) > Xe && (Oe = de, Xe = Lt);
        }
        if (H > Oe) {
          var cn = H;
          H = Oe, Oe = cn;
        }
        if (Oe - H <= g / 16) throw new pt();
        var xn = Oe - 1,
          Hi = -1;
        for (de = Oe - 1; de > H; de--) {
          var Lt,
            no = de - H;
          (Lt = no * no * (Oe - de) * (S - l[de])) > Hi && (xn = de, Hi = Lt);
        }
        return xn << r.LUMINANCE_SHIFT;
      }, r.LUMINANCE_SHIFT = 8 - (r.LUMINANCE_BITS = 5), r.LUMINANCE_BUCKETS = 1 << r.LUMINANCE_BITS, r.EMPTY = Uint8ClampedArray.from([0]), r;
    }(fe);
  const Dn = Ht;
  var vt = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    an = function (p) {
      function r(l) {
        var g = p.call(this, l) || this;
        return g.matrix = null, g;
      }
      return vt(r, p), r.prototype.getBlackMatrix = function () {
        if (null !== this.matrix) return this.matrix;
        var l = this.getLuminanceSource(),
          g = l.getWidth(),
          S = l.getHeight();
        if (g >= r.MINIMUM_DIMENSION && S >= r.MINIMUM_DIMENSION) {
          var H = l.getMatrix(),
            ie = g >> r.BLOCK_SIZE_POWER;
          g & r.BLOCK_SIZE_MASK && ie++;
          var de = S >> r.BLOCK_SIZE_POWER;
          S & r.BLOCK_SIZE_MASK && de++;
          var Oe = r.calculateBlackPoints(H, ie, de, g, S),
            Xe = new co(g, S);
          r.calculateThresholdForBlock(H, ie, de, g, S, Oe, Xe), this.matrix = Xe;
        } else this.matrix = p.prototype.getBlackMatrix.call(this);
        return this.matrix;
      }, r.prototype.createBinarizer = function (l) {
        return new r(l);
      }, r.calculateThresholdForBlock = function (l, g, S, H, ie, de, Oe) {
        for (var Xe = ie - r.BLOCK_SIZE, wt = H - r.BLOCK_SIZE, Lt = 0; Lt < S; Lt++) {
          var cn = Lt << r.BLOCK_SIZE_POWER;
          cn > Xe && (cn = Xe);
          for (var xn = r.cap(Lt, 2, S - 3), Hi = 0; Hi < g; Hi++) {
            var no = Hi << r.BLOCK_SIZE_POWER;
            no > wt && (no = wt);
            for (var Ho = r.cap(Hi, 2, g - 3), zo = 0, Bo = -2; Bo <= 2; Bo++) {
              var Mr = de[xn + Bo];
              zo += Mr[Ho - 2] + Mr[Ho - 1] + Mr[Ho] + Mr[Ho + 1] + Mr[Ho + 2];
            }
            r.thresholdBlock(l, no, cn, zo / 25, H, Oe);
          }
        }
      }, r.cap = function (l, g, S) {
        return l < g ? g : l > S ? S : l;
      }, r.thresholdBlock = function (l, g, S, H, ie, de) {
        for (var Oe = 0, Xe = S * ie + g; Oe < r.BLOCK_SIZE; Oe++, Xe += ie) for (var wt = 0; wt < r.BLOCK_SIZE; wt++) (255 & l[Xe + wt]) <= H && de.set(g + wt, S + Oe);
      }, r.calculateBlackPoints = function (l, g, S, H, ie) {
        for (var de = ie - r.BLOCK_SIZE, Oe = H - r.BLOCK_SIZE, Xe = new Array(S), wt = 0; wt < S; wt++) {
          Xe[wt] = new Int32Array(g);
          var Lt = wt << r.BLOCK_SIZE_POWER;
          Lt > de && (Lt = de);
          for (var cn = 0; cn < g; cn++) {
            var xn = cn << r.BLOCK_SIZE_POWER;
            xn > Oe && (xn = Oe);
            for (var Hi = 0, no = 255, Ho = 0, zo = 0, Bo = Lt * H + xn; zo < r.BLOCK_SIZE; zo++, Bo += H) {
              for (var Mr = 0; Mr < r.BLOCK_SIZE; Mr++) {
                var Ur = 255 & l[Bo + Mr];
                Hi += Ur, Ur < no && (no = Ur), Ur > Ho && (Ho = Ur);
              }
              if (Ho - no > r.MIN_DYNAMIC_RANGE) for (zo++, Bo += H; zo < r.BLOCK_SIZE; zo++, Bo += H) for (Mr = 0; Mr < r.BLOCK_SIZE; Mr++) Hi += 255 & l[Bo + Mr];
            }
            var ls = Hi >> 2 * r.BLOCK_SIZE_POWER;
            if (Ho - no <= r.MIN_DYNAMIC_RANGE && (ls = no / 2, wt > 0 && cn > 0)) {
              var Ss = (Xe[wt - 1][cn] + 2 * Xe[wt][cn - 1] + Xe[wt - 1][cn - 1]) / 4;
              no < Ss && (ls = Ss);
            }
            Xe[wt][cn] = ls;
          }
        }
        return Xe;
      }, r.BLOCK_SIZE_MASK = (r.BLOCK_SIZE = 1 << (r.BLOCK_SIZE_POWER = 3)) - 1, r.MINIMUM_DIMENSION = 5 * r.BLOCK_SIZE, r.MIN_DYNAMIC_RANGE = 24, r;
    }(Dn);
  const li = an;
  var zn = function () {
    function p(r, l) {
      this.width = r, this.height = l;
    }
    return p.prototype.getWidth = function () {
      return this.width;
    }, p.prototype.getHeight = function () {
      return this.height;
    }, p.prototype.isCropSupported = function () {
      return !1;
    }, p.prototype.crop = function (r, l, g, S) {
      throw new je("This luminance source does not support cropping.");
    }, p.prototype.isRotateSupported = function () {
      return !1;
    }, p.prototype.rotateCounterClockwise = function () {
      throw new je("This luminance source does not support rotation by 90 degrees.");
    }, p.prototype.rotateCounterClockwise45 = function () {
      throw new je("This luminance source does not support rotation by 45 degrees.");
    }, p.prototype.toString = function () {
      for (var r = new Uint8ClampedArray(this.width), l = new Ii(), g = 0; g < this.height; g++) {
        for (var S = this.getRow(g, r), H = 0; H < this.width; H++) {
          var ie = 255 & S[H];
          l.append(ie < 64 ? "#" : ie < 128 ? "+" : ie < 192 ? "." : " ");
        }
        l.append("\n");
      }
      return l.toString();
    }, p;
  }();
  const $t = zn;
  var Mn = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Qn = function (p) {
      function r(l) {
        var g = p.call(this, l.getWidth(), l.getHeight()) || this;
        return g.delegate = l, g;
      }
      return Mn(r, p), r.prototype.getRow = function (l, g) {
        for (var S = this.delegate.getRow(l, g), H = this.getWidth(), ie = 0; ie < H; ie++) S[ie] = 255 - (255 & S[ie]);
        return S;
      }, r.prototype.getMatrix = function () {
        for (var l = this.delegate.getMatrix(), g = this.getWidth() * this.getHeight(), S = new Uint8ClampedArray(g), H = 0; H < g; H++) S[H] = 255 - (255 & l[H]);
        return S;
      }, r.prototype.isCropSupported = function () {
        return this.delegate.isCropSupported();
      }, r.prototype.crop = function (l, g, S, H) {
        return new r(this.delegate.crop(l, g, S, H));
      }, r.prototype.isRotateSupported = function () {
        return this.delegate.isRotateSupported();
      }, r.prototype.invert = function () {
        return this.delegate;
      }, r.prototype.rotateCounterClockwise = function () {
        return new r(this.delegate.rotateCounterClockwise());
      }, r.prototype.rotateCounterClockwise45 = function () {
        return new r(this.delegate.rotateCounterClockwise45());
      }, r;
    }($t);
  const In = Qn;
  var ui = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    To = function (p) {
      function r(l, g) {
        void 0 === g && (g = !1);
        var S = p.call(this, l.width, l.height) || this;
        return S.canvas = l, S.tempCanvasElement = null, S.buffer = r.makeBufferFromCanvasImageData(l, g), S;
      }
      return ui(r, p), r.makeBufferFromCanvasImageData = function (l, g) {
        void 0 === g && (g = !1);
        var S = l.getContext("2d").getImageData(0, 0, l.width, l.height);
        return r.toGrayscaleBuffer(S.data, l.width, l.height, g);
      }, r.toGrayscaleBuffer = function (l, g, S, H) {
        void 0 === H && (H = !1);
        var ie = new Uint8ClampedArray(g * S);
        if ((r.FRAME_INDEX = !r.FRAME_INDEX) || !H) for (var de = 0, Oe = 0, Xe = l.length; de < Xe; de += 4, Oe++) {
          ie[Oe] = 0 === l[de + 3] ? 255 : 306 * l[de] + 601 * l[de + 1] + 117 * l[de + 2] + 512 >> 10;
        } else {
          de = 0, Oe = 0;
          for (var no = l.length; de < no; de += 4, Oe++) void 0, ie[Oe] = 255 - (0 === l[de + 3] ? 255 : 306 * l[de] + 601 * l[de + 1] + 117 * l[de + 2] + 512 >> 10);
        }
        return ie;
      }, r.prototype.getRow = function (l, g) {
        if (l < 0 || l >= this.getHeight()) throw new y("Requested row is outside the image: " + l);
        var S = this.getWidth(),
          H = l * S;
        return null === g ? g = this.buffer.slice(H, H + S) : (g.length < S && (g = new Uint8ClampedArray(S)), g.set(this.buffer.slice(H, H + S))), g;
      }, r.prototype.getMatrix = function () {
        return this.buffer;
      }, r.prototype.isCropSupported = function () {
        return !0;
      }, r.prototype.crop = function (l, g, S, H) {
        return p.prototype.crop.call(this, l, g, S, H), this;
      }, r.prototype.isRotateSupported = function () {
        return !0;
      }, r.prototype.rotateCounterClockwise = function () {
        return this.rotate(-90), this;
      }, r.prototype.rotateCounterClockwise45 = function () {
        return this.rotate(-45), this;
      }, r.prototype.getTempCanvasElement = function () {
        if (null === this.tempCanvasElement) {
          var l = this.canvas.ownerDocument.createElement("canvas");
          l.width = this.canvas.width, l.height = this.canvas.height, this.tempCanvasElement = l;
        }
        return this.tempCanvasElement;
      }, r.prototype.rotate = function (l) {
        var g = this.getTempCanvasElement(),
          S = g.getContext("2d"),
          H = l * r.DEGREE_TO_RADIANS,
          ie = this.canvas.width,
          de = this.canvas.height,
          Oe = Math.ceil(Math.abs(Math.cos(H)) * ie + Math.abs(Math.sin(H)) * de),
          Xe = Math.ceil(Math.abs(Math.sin(H)) * ie + Math.abs(Math.cos(H)) * de);
        return g.width = Oe, g.height = Xe, S.translate(Oe / 2, Xe / 2), S.rotate(H), S.drawImage(this.canvas, ie / -2, de / -2), this.buffer = r.makeBufferFromCanvasImageData(g), this;
      }, r.prototype.invert = function () {
        return new In(this);
      }, r.DEGREE_TO_RADIANS = Math.PI / 180, r.FRAME_INDEX = !0, r;
    }($t),
    bi = function () {
      function p(r, l, g) {
        this.deviceId = r, this.label = l, this.kind = "videoinput", this.groupId = g || void 0;
      }
      return p.prototype.toJSON = function () {
        return {
          kind: this.kind,
          groupId: this.groupId,
          deviceId: this.deviceId,
          label: this.label
        };
      }, p;
    }(),
    qn = function (p, r, l, g) {
      return new (l || (l = Promise))(function (H, ie) {
        function de(wt) {
          try {
            Xe(g.next(wt));
          } catch (Lt) {
            ie(Lt);
          }
        }
        function Oe(wt) {
          try {
            Xe(g.throw(wt));
          } catch (Lt) {
            ie(Lt);
          }
        }
        function Xe(wt) {
          wt.done ? H(wt.value) : function S(H) {
            return H instanceof l ? H : new l(function (ie) {
              ie(H);
            });
          }(wt.value).then(de, Oe);
        }
        Xe((g = g.apply(p, r || [])).next());
      });
    },
    Xn = function (p, r) {
      var g,
        S,
        H,
        ie,
        l = {
          label: 0,
          sent: function () {
            if (1 & H[0]) throw H[1];
            return H[1];
          },
          trys: [],
          ops: []
        };
      return ie = {
        next: de(0),
        throw: de(1),
        return: de(2)
      }, "function" == typeof Symbol && (ie[Symbol.iterator] = function () {
        return this;
      }), ie;
      function de(Xe) {
        return function (wt) {
          return function Oe(Xe) {
            if (g) throw new TypeError("Generator is already executing.");
            for (; l;) try {
              if (g = 1, S && (H = 2 & Xe[0] ? S.return : Xe[0] ? S.throw || ((H = S.return) && H.call(S), 0) : S.next) && !(H = H.call(S, Xe[1])).done) return H;
              switch (S = 0, H && (Xe = [2 & Xe[0], H.value]), Xe[0]) {
                case 0:
                case 1:
                  H = Xe;
                  break;
                case 4:
                  return l.label++, {
                    value: Xe[1],
                    done: !1
                  };
                case 5:
                  l.label++, S = Xe[1], Xe = [0];
                  continue;
                case 7:
                  Xe = l.ops.pop(), l.trys.pop();
                  continue;
                default:
                  if (!(H = (H = l.trys).length > 0 && H[H.length - 1]) && (6 === Xe[0] || 2 === Xe[0])) {
                    l = 0;
                    continue;
                  }
                  if (3 === Xe[0] && (!H || Xe[1] > H[0] && Xe[1] < H[3])) {
                    l.label = Xe[1];
                    break;
                  }
                  if (6 === Xe[0] && l.label < H[1]) {
                    l.label = H[1], H = Xe;
                    break;
                  }
                  if (H && l.label < H[2]) {
                    l.label = H[2], l.ops.push(Xe);
                    break;
                  }
                  H[2] && l.ops.pop(), l.trys.pop();
                  continue;
              }
              Xe = r.call(p, l);
            } catch (wt) {
              Xe = [6, wt], S = 0;
            } finally {
              g = H = 0;
            }
            if (5 & Xe[0]) throw Xe[1];
            return {
              value: Xe[0] ? Xe[1] : void 0,
              done: !0
            };
          }([Xe, wt]);
        };
      }
    },
    Eo = function () {
      function p(r, l, g) {
        void 0 === l && (l = 500), this.reader = r, this.timeBetweenScansMillis = l, this._hints = g, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
      }
      return Object.defineProperty(p.prototype, "hasNavigator", {
        get: function () {
          return typeof navigator < "u";
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "isMediaDevicesSuported", {
        get: function () {
          return this.hasNavigator && !!navigator.mediaDevices;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "canEnumerateDevices", {
        get: function () {
          return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "timeBetweenDecodingAttempts", {
        get: function () {
          return this._timeBetweenDecodingAttempts;
        },
        set: function (r) {
          this._timeBetweenDecodingAttempts = r < 0 ? 0 : r;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "hints", {
        get: function () {
          return this._hints;
        },
        set: function (r) {
          this._hints = r || null;
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.listVideoInputDevices = function () {
        return qn(this, void 0, void 0, function () {
          var r, l, g, S, H, ie, Lt, cn;
          return Xn(this, function (xn) {
            switch (xn.label) {
              case 0:
                if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
                if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
                return [4, navigator.mediaDevices.enumerateDevices()];
              case 1:
                r = xn.sent(), l = [];
                try {
                  for (g = function (p) {
                    var r = "function" == typeof Symbol && Symbol.iterator,
                      l = r && p[r],
                      g = 0;
                    if (l) return l.call(p);
                    if (p && "number" == typeof p.length) return {
                      next: function () {
                        return p && g >= p.length && (p = void 0), {
                          value: p && p[g++],
                          done: !p
                        };
                      }
                    };
                    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
                  }(r), S = g.next(); !S.done; S = g.next()) "videoinput" === (ie = "video" === (H = S.value).kind ? "videoinput" : H.kind) && l.push({
                    deviceId: H.deviceId || H.id,
                    label: H.label || "Video device " + (l.length + 1),
                    kind: ie,
                    groupId: H.groupId
                  });
                } catch (Hi) {
                  Lt = {
                    error: Hi
                  };
                } finally {
                  try {
                    S && !S.done && (cn = g.return) && cn.call(g);
                  } finally {
                    if (Lt) throw Lt.error;
                  }
                }
                return [2, l];
            }
          });
        });
      }, p.prototype.getVideoInputDevices = function () {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, this.listVideoInputDevices()];
              case 1:
                return [2, l.sent().map(function (g) {
                  return new bi(g.deviceId, g.label);
                })];
            }
          });
        });
      }, p.prototype.findDeviceById = function (r) {
        return qn(this, void 0, void 0, function () {
          var l;
          return Xn(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, this.listVideoInputDevices()];
              case 1:
                return (l = g.sent()) ? [2, l.find(function (S) {
                  return S.deviceId === r;
                })] : [2, null];
            }
          });
        });
      }, p.prototype.decodeFromInputVideoDevice = function (r, l) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, this.decodeOnceFromVideoDevice(r, l)];
              case 1:
                return [2, g.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromVideoDevice = function (r, l) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (H) {
            switch (H.label) {
              case 0:
                return this.reset(), [4, this.decodeOnceFromConstraints({
                  video: r ? {
                    deviceId: {
                      exact: r
                    }
                  } : {
                    facingMode: "environment"
                  }
                }, l)];
              case 1:
                return [2, H.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromConstraints = function (r, l) {
        return qn(this, void 0, void 0, function () {
          var g;
          return Xn(this, function (S) {
            switch (S.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(r)];
              case 1:
                return g = S.sent(), [4, this.decodeOnceFromStream(g, l)];
              case 2:
                return [2, S.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromStream = function (r, l) {
        return qn(this, void 0, void 0, function () {
          var g;
          return Xn(this, function (H) {
            switch (H.label) {
              case 0:
                return this.reset(), [4, this.attachStreamToVideo(r, l)];
              case 1:
                return g = H.sent(), [4, this.decodeOnce(g)];
              case 2:
                return [2, H.sent()];
            }
          });
        });
      }, p.prototype.decodeFromInputVideoDeviceContinuously = function (r, l, g) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (S) {
            switch (S.label) {
              case 0:
                return [4, this.decodeFromVideoDevice(r, l, g)];
              case 1:
                return [2, S.sent()];
            }
          });
        });
      }, p.prototype.decodeFromVideoDevice = function (r, l, g) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (ie) {
            switch (ie.label) {
              case 0:
                return [4, this.decodeFromConstraints({
                  video: r ? {
                    deviceId: {
                      exact: r
                    }
                  } : {
                    facingMode: "environment"
                  }
                }, l, g)];
              case 1:
                return [2, ie.sent()];
            }
          });
        });
      }, p.prototype.decodeFromConstraints = function (r, l, g) {
        return qn(this, void 0, void 0, function () {
          var S;
          return Xn(this, function (H) {
            switch (H.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(r)];
              case 1:
                return S = H.sent(), [4, this.decodeFromStream(S, l, g)];
              case 2:
                return [2, H.sent()];
            }
          });
        });
      }, p.prototype.decodeFromStream = function (r, l, g) {
        return qn(this, void 0, void 0, function () {
          var S;
          return Xn(this, function (H) {
            switch (H.label) {
              case 0:
                return this.reset(), [4, this.attachStreamToVideo(r, l)];
              case 1:
                return S = H.sent(), [4, this.decodeContinuously(S, g)];
              case 2:
                return [2, H.sent()];
            }
          });
        });
      }, p.prototype.stopAsyncDecode = function () {
        this._stopAsyncDecode = !0;
      }, p.prototype.stopContinuousDecode = function () {
        this._stopContinuousDecode = !0;
      }, p.prototype.attachStreamToVideo = function (r, l) {
        return qn(this, void 0, void 0, function () {
          var g;
          return Xn(this, function (S) {
            switch (S.label) {
              case 0:
                return g = this.prepareVideoElement(l), this.addVideoSource(g, r), this.videoElement = g, this.stream = r, [4, this.playVideoOnLoadAsync(g)];
              case 1:
                return S.sent(), [2, g];
            }
          });
        });
      }, p.prototype.playVideoOnLoadAsync = function (r) {
        var l = this;
        return new Promise(function (g, S) {
          return l.playVideoOnLoad(r, function () {
            return g();
          });
        });
      }, p.prototype.playVideoOnLoad = function (r, l) {
        var g = this;
        this.videoEndedListener = function () {
          return g.stopStreams();
        }, this.videoCanPlayListener = function () {
          return g.tryPlayVideo(r);
        }, r.addEventListener("ended", this.videoEndedListener), r.addEventListener("canplay", this.videoCanPlayListener), r.addEventListener("playing", l), this.tryPlayVideo(r);
      }, p.prototype.isVideoPlaying = function (r) {
        return r.currentTime > 0 && !r.paused && !r.ended && r.readyState > 2;
      }, p.prototype.tryPlayVideo = function (r) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (g) {
            switch (g.label) {
              case 0:
                if (this.isVideoPlaying(r)) return console.warn("Trying to play video that is already playing."), [2];
                g.label = 1;
              case 1:
                return g.trys.push([1, 3,, 4]), [4, r.play()];
              case 2:
                return g.sent(), [3, 4];
              case 3:
                return g.sent(), console.warn("It was not possible to play the video."), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, p.prototype.getMediaElement = function (r, l) {
        var g = document.getElementById(r);
        if (!g) throw new T("element with id '" + r + "' not found");
        if (g.nodeName.toLowerCase() !== l.toLowerCase()) throw new T("element with id '" + r + "' must be an " + l + " element");
        return g;
      }, p.prototype.decodeFromImage = function (r, l) {
        if (!r && !l) throw new T("either imageElement with a src set or an url must be provided");
        return l && !r ? this.decodeFromImageUrl(l) : this.decodeFromImageElement(r);
      }, p.prototype.decodeFromVideo = function (r, l) {
        if (!r && !l) throw new T("Either an element with a src set or an URL must be provided");
        return l && !r ? this.decodeFromVideoUrl(l) : this.decodeFromVideoElement(r);
      }, p.prototype.decodeFromVideoContinuously = function (r, l, g) {
        if (void 0 === r && void 0 === l) throw new T("Either an element with a src set or an URL must be provided");
        return l && !r ? this.decodeFromVideoUrlContinuously(l, g) : this.decodeFromVideoElementContinuously(r, g);
      }, p.prototype.decodeFromImageElement = function (r) {
        if (!r) throw new T("An image element must be provided.");
        this.reset();
        var l = this.prepareImageElement(r);
        return this.imageElement = l, this.isImageLoaded(l) ? this.decodeOnce(l, !1, !0) : this._decodeOnLoadImage(l);
      }, p.prototype.decodeFromVideoElement = function (r) {
        var l = this._decodeFromVideoElementSetup(r);
        return this._decodeOnLoadVideo(l);
      }, p.prototype.decodeFromVideoElementContinuously = function (r, l) {
        var g = this._decodeFromVideoElementSetup(r);
        return this._decodeOnLoadVideoContinuously(g, l);
      }, p.prototype._decodeFromVideoElementSetup = function (r) {
        if (!r) throw new T("A video element must be provided.");
        this.reset();
        var l = this.prepareVideoElement(r);
        return this.videoElement = l, l;
      }, p.prototype.decodeFromImageUrl = function (r) {
        if (!r) throw new T("An URL must be provided.");
        this.reset();
        var l = this.prepareImageElement();
        this.imageElement = l;
        var g = this._decodeOnLoadImage(l);
        return l.src = r, g;
      }, p.prototype.decodeFromVideoUrl = function (r) {
        if (!r) throw new T("An URL must be provided.");
        this.reset();
        var l = this.prepareVideoElement(),
          g = this.decodeFromVideoElement(l);
        return l.src = r, g;
      }, p.prototype.decodeFromVideoUrlContinuously = function (r, l) {
        if (!r) throw new T("An URL must be provided.");
        this.reset();
        var g = this.prepareVideoElement(),
          S = this.decodeFromVideoElementContinuously(g, l);
        return g.src = r, S;
      }, p.prototype._decodeOnLoadImage = function (r) {
        var l = this;
        return new Promise(function (g, S) {
          l.imageLoadedListener = function () {
            return l.decodeOnce(r, !1, !0).then(g, S);
          }, r.addEventListener("load", l.imageLoadedListener);
        });
      }, p.prototype._decodeOnLoadVideo = function (r) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, this.playVideoOnLoadAsync(r)];
              case 1:
                return l.sent(), [4, this.decodeOnce(r)];
              case 2:
                return [2, l.sent()];
            }
          });
        });
      }, p.prototype._decodeOnLoadVideoContinuously = function (r, l) {
        return qn(this, void 0, void 0, function () {
          return Xn(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, this.playVideoOnLoadAsync(r)];
              case 1:
                return g.sent(), this.decodeContinuously(r, l), [2];
            }
          });
        });
      }, p.prototype.isImageLoaded = function (r) {
        return !(!r.complete || 0 === r.naturalWidth);
      }, p.prototype.prepareImageElement = function (r) {
        var l;
        return typeof r > "u" && ((l = document.createElement("img")).width = 200, l.height = 200), "string" == typeof r && (l = this.getMediaElement(r, "img")), r instanceof HTMLImageElement && (l = r), l;
      }, p.prototype.prepareVideoElement = function (r) {
        var l;
        return !r && typeof document < "u" && ((l = document.createElement("video")).width = 200, l.height = 200), "string" == typeof r && (l = this.getMediaElement(r, "video")), r instanceof HTMLVideoElement && (l = r), l.setAttribute("autoplay", "true"), l.setAttribute("muted", "true"), l.setAttribute("playsinline", "true"), l;
      }, p.prototype.decodeOnce = function (r, l, g) {
        var S = this;
        void 0 === l && (l = !0), void 0 === g && (g = !0), this._stopAsyncDecode = !1;
        var H = function (ie, de) {
          if (S._stopAsyncDecode) return de(new pt("Video stream has ended before any code could be detected.")), void (S._stopAsyncDecode = void 0);
          try {
            ie(S.decode(r));
          } catch (cn) {
            if (l && cn instanceof pt || (cn instanceof ke || cn instanceof Ft) && g) return setTimeout(H, S._timeBetweenDecodingAttempts, ie, de);
            de(cn);
          }
        };
        return new Promise(function (ie, de) {
          return H(ie, de);
        });
      }, p.prototype.decodeContinuously = function (r, l) {
        var g = this;
        this._stopContinuousDecode = !1;
        var S = function () {
          if (g._stopContinuousDecode) g._stopContinuousDecode = void 0;else try {
            var H = g.decode(r);
            l(H, null), setTimeout(S, g.timeBetweenScansMillis);
          } catch (Oe) {
            l(null, Oe), (Oe instanceof ke || Oe instanceof Ft || Oe instanceof pt) && setTimeout(S, g._timeBetweenDecodingAttempts);
          }
        };
        S();
      }, p.prototype.decode = function (r) {
        var l = this.createBinaryBitmap(r);
        return this.decodeBitmap(l);
      }, p.prototype.createBinaryBitmap = function (r) {
        this.getCaptureCanvasContext(r);
        var g = !1;
        r instanceof HTMLVideoElement ? (this.drawFrameOnCanvas(r), g = !0) : this.drawImageOnCanvas(r);
        var S = this.getCaptureCanvas(r),
          H = new To(S, g),
          ie = new li(H);
        return new W(ie);
      }, p.prototype.getCaptureCanvasContext = function (r) {
        if (!this.captureCanvasContext) {
          var l = this.getCaptureCanvas(r),
            g = void 0;
          try {
            g = l.getContext("2d", {
              willReadFrequently: !0
            });
          } catch {
            g = l.getContext("2d");
          }
          this.captureCanvasContext = g;
        }
        return this.captureCanvasContext;
      }, p.prototype.getCaptureCanvas = function (r) {
        if (!this.captureCanvas) {
          var l = this.createCaptureCanvas(r);
          this.captureCanvas = l;
        }
        return this.captureCanvas;
      }, p.prototype.drawFrameOnCanvas = function (r, l, g) {
        void 0 === l && (l = {
          sx: 0,
          sy: 0,
          sWidth: r.videoWidth,
          sHeight: r.videoHeight,
          dx: 0,
          dy: 0,
          dWidth: r.videoWidth,
          dHeight: r.videoHeight
        }), void 0 === g && (g = this.captureCanvasContext), g.drawImage(r, l.sx, l.sy, l.sWidth, l.sHeight, l.dx, l.dy, l.dWidth, l.dHeight);
      }, p.prototype.drawImageOnCanvas = function (r, l, g) {
        void 0 === l && (l = {
          sx: 0,
          sy: 0,
          sWidth: r.naturalWidth,
          sHeight: r.naturalHeight,
          dx: 0,
          dy: 0,
          dWidth: r.naturalWidth,
          dHeight: r.naturalHeight
        }), void 0 === g && (g = this.captureCanvasContext), g.drawImage(r, l.sx, l.sy, l.sWidth, l.sHeight, l.dx, l.dy, l.dWidth, l.dHeight);
      }, p.prototype.decodeBitmap = function (r) {
        return this.reader.decode(r, this._hints);
      }, p.prototype.createCaptureCanvas = function (r) {
        if (typeof document > "u") return this._destroyCaptureCanvas(), null;
        var g,
          S,
          l = document.createElement("canvas");
        return typeof r < "u" && (r instanceof HTMLVideoElement ? (g = r.videoWidth, S = r.videoHeight) : r instanceof HTMLImageElement && (g = r.naturalWidth || r.width, S = r.naturalHeight || r.height)), l.style.width = g + "px", l.style.height = S + "px", l.width = g, l.height = S, l;
      }, p.prototype.stopStreams = function () {
        this.stream && (this.stream.getVideoTracks().forEach(function (r) {
          return r.stop();
        }), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode();
      }, p.prototype.reset = function () {
        this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
      }, p.prototype._destroyVideoElement = function () {
        this.videoElement && (typeof this.videoEndedListener < "u" && this.videoElement.removeEventListener("ended", this.videoEndedListener), typeof this.videoPlayingEventListener < "u" && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), typeof this.videoCanPlayListener < "u" && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
      }, p.prototype._destroyImageElement = function () {
        this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
      }, p.prototype._destroyCaptureCanvas = function () {
        this.captureCanvasContext = void 0, this.captureCanvas = void 0;
      }, p.prototype.addVideoSource = function (r, l) {
        try {
          r.srcObject = l;
        } catch {
          r.src = URL.createObjectURL(l);
        }
      }, p.prototype.cleanVideoSource = function (r) {
        try {
          r.srcObject = null;
        } catch {
          r.src = "";
        }
        this.videoElement.removeAttribute("src");
      }, p;
    }(),
    Fo = function () {
      function p(r, l, g, S, H, ie) {
        void 0 === g && (g = null == l ? 0 : 8 * l.length), void 0 === ie && (ie = ae.currentTimeMillis()), this.text = r, this.rawBytes = l, this.numBits = g, this.resultPoints = S, this.format = H, this.timestamp = ie, this.text = r, this.rawBytes = l, this.numBits = null == g ? null == l ? 0 : 8 * l.length : g, this.resultPoints = S, this.format = H, this.resultMetadata = null, this.timestamp = null == ie ? ae.currentTimeMillis() : ie;
      }
      return p.prototype.getText = function () {
        return this.text;
      }, p.prototype.getRawBytes = function () {
        return this.rawBytes;
      }, p.prototype.getNumBits = function () {
        return this.numBits;
      }, p.prototype.getResultPoints = function () {
        return this.resultPoints;
      }, p.prototype.getBarcodeFormat = function () {
        return this.format;
      }, p.prototype.getResultMetadata = function () {
        return this.resultMetadata;
      }, p.prototype.putMetadata = function (r, l) {
        null === this.resultMetadata && (this.resultMetadata = new Map()), this.resultMetadata.set(r, l);
      }, p.prototype.putAllMetadata = function (r) {
        null !== r && (this.resultMetadata = null === this.resultMetadata ? r : new Map(r));
      }, p.prototype.addResultPoints = function (r) {
        var l = this.resultPoints;
        if (null === l) this.resultPoints = r;else if (null !== r && r.length > 0) {
          var g = new Array(l.length + r.length);
          ae.arraycopy(l, 0, g, 0, l.length), ae.arraycopy(r, 0, g, l.length, r.length), this.resultPoints = g;
        }
      }, p.prototype.getTimestamp = function () {
        return this.timestamp;
      }, p.prototype.toString = function () {
        return this.text;
      }, p;
    }();
  const br = Fo;
  var Pr = (() => (function (p) {
    p[p.AZTEC = 0] = "AZTEC", p[p.CODABAR = 1] = "CODABAR", p[p.CODE_39 = 2] = "CODE_39", p[p.CODE_93 = 3] = "CODE_93", p[p.CODE_128 = 4] = "CODE_128", p[p.DATA_MATRIX = 5] = "DATA_MATRIX", p[p.EAN_8 = 6] = "EAN_8", p[p.EAN_13 = 7] = "EAN_13", p[p.ITF = 8] = "ITF", p[p.MAXICODE = 9] = "MAXICODE", p[p.PDF_417 = 10] = "PDF_417", p[p.QR_CODE = 11] = "QR_CODE", p[p.RSS_14 = 12] = "RSS_14", p[p.RSS_EXPANDED = 13] = "RSS_EXPANDED", p[p.UPC_A = 14] = "UPC_A", p[p.UPC_E = 15] = "UPC_E", p[p.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
  }(Pr || (Pr = {})), Pr))();
  const qo = Pr;
  var Yo = (() => (function (p) {
    p[p.OTHER = 0] = "OTHER", p[p.ORIENTATION = 1] = "ORIENTATION", p[p.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", p[p.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", p[p.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", p[p.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", p[p.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", p[p.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", p[p.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", p[p.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", p[p.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
  }(Yo || (Yo = {})), Yo))();
  const wr = Yo;
  var oo = function () {
    function p(r, l, g, S, H, ie) {
      void 0 === H && (H = -1), void 0 === ie && (ie = -1), this.rawBytes = r, this.text = l, this.byteSegments = g, this.ecLevel = S, this.structuredAppendSequenceNumber = H, this.structuredAppendParity = ie, this.numBits = null == r ? 0 : 8 * r.length;
    }
    return p.prototype.getRawBytes = function () {
      return this.rawBytes;
    }, p.prototype.getNumBits = function () {
      return this.numBits;
    }, p.prototype.setNumBits = function (r) {
      this.numBits = r;
    }, p.prototype.getText = function () {
      return this.text;
    }, p.prototype.getByteSegments = function () {
      return this.byteSegments;
    }, p.prototype.getECLevel = function () {
      return this.ecLevel;
    }, p.prototype.getErrorsCorrected = function () {
      return this.errorsCorrected;
    }, p.prototype.setErrorsCorrected = function (r) {
      this.errorsCorrected = r;
    }, p.prototype.getErasures = function () {
      return this.erasures;
    }, p.prototype.setErasures = function (r) {
      this.erasures = r;
    }, p.prototype.getOther = function () {
      return this.other;
    }, p.prototype.setOther = function (r) {
      this.other = r;
    }, p.prototype.hasStructuredAppend = function () {
      return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    }, p.prototype.getStructuredAppendParity = function () {
      return this.structuredAppendParity;
    }, p.prototype.getStructuredAppendSequenceNumber = function () {
      return this.structuredAppendSequenceNumber;
    }, p;
  }();
  const Di = oo;
  var Ci = function () {
    function p() {}
    return p.prototype.exp = function (r) {
      return this.expTable[r];
    }, p.prototype.log = function (r) {
      if (0 === r) throw new y();
      return this.logTable[r];
    }, p.addOrSubtract = function (r, l) {
      return r ^ l;
    }, p;
  }();
  const lo = Ci;
  var jo = function () {
    function p(r, l) {
      if (0 === l.length) throw new y();
      this.field = r;
      var g = l.length;
      if (g > 1 && 0 === l[0]) {
        for (var S = 1; S < g && 0 === l[S];) S++;
        S === g ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(g - S), ae.arraycopy(l, S, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = l;
    }
    return p.prototype.getCoefficients = function () {
      return this.coefficients;
    }, p.prototype.getDegree = function () {
      return this.coefficients.length - 1;
    }, p.prototype.isZero = function () {
      return 0 === this.coefficients[0];
    }, p.prototype.getCoefficient = function (r) {
      return this.coefficients[this.coefficients.length - 1 - r];
    }, p.prototype.evaluateAt = function (r) {
      if (0 === r) return this.getCoefficient(0);
      var g,
        l = this.coefficients;
      if (1 === r) {
        g = 0;
        for (var S = 0, H = l.length; S !== H; S++) g = lo.addOrSubtract(g, l[S]);
        return g;
      }
      g = l[0];
      var de = l.length,
        Oe = this.field;
      for (S = 1; S < de; S++) g = lo.addOrSubtract(Oe.multiply(r, g), l[S]);
      return g;
    }, p.prototype.addOrSubtract = function (r) {
      if (!this.field.equals(r.field)) throw new y("GenericGFPolys do not have same GenericGF field");
      if (this.isZero()) return r;
      if (r.isZero()) return this;
      var l = this.coefficients,
        g = r.coefficients;
      if (l.length > g.length) {
        var S = l;
        l = g, g = S;
      }
      var H = new Int32Array(g.length),
        ie = g.length - l.length;
      ae.arraycopy(g, 0, H, 0, ie);
      for (var de = ie; de < g.length; de++) H[de] = lo.addOrSubtract(l[de - ie], g[de]);
      return new p(this.field, H);
    }, p.prototype.multiply = function (r) {
      if (!this.field.equals(r.field)) throw new y("GenericGFPolys do not have same GenericGF field");
      if (this.isZero() || r.isZero()) return this.field.getZero();
      for (var l = this.coefficients, g = l.length, S = r.coefficients, H = S.length, ie = new Int32Array(g + H - 1), de = this.field, Oe = 0; Oe < g; Oe++) for (var Xe = l[Oe], wt = 0; wt < H; wt++) ie[Oe + wt] = lo.addOrSubtract(ie[Oe + wt], de.multiply(Xe, S[wt]));
      return new p(de, ie);
    }, p.prototype.multiplyScalar = function (r) {
      if (0 === r) return this.field.getZero();
      if (1 === r) return this;
      for (var l = this.coefficients.length, g = this.field, S = new Int32Array(l), H = this.coefficients, ie = 0; ie < l; ie++) S[ie] = g.multiply(H[ie], r);
      return new p(g, S);
    }, p.prototype.multiplyByMonomial = function (r, l) {
      if (r < 0) throw new y();
      if (0 === l) return this.field.getZero();
      for (var g = this.coefficients, S = g.length, H = new Int32Array(S + r), ie = this.field, de = 0; de < S; de++) H[de] = ie.multiply(g[de], l);
      return new p(ie, H);
    }, p.prototype.divide = function (r) {
      if (!this.field.equals(r.field)) throw new y("GenericGFPolys do not have same GenericGF field");
      if (r.isZero()) throw new y("Divide by 0");
      for (var l = this.field, g = l.getZero(), S = this, H = r.getCoefficient(r.getDegree()), ie = l.inverse(H); S.getDegree() >= r.getDegree() && !S.isZero();) {
        var de = S.getDegree() - r.getDegree(),
          Oe = l.multiply(S.getCoefficient(S.getDegree()), ie),
          Xe = r.multiplyByMonomial(de, Oe),
          wt = l.buildMonomial(de, Oe);
        g = g.addOrSubtract(wt), S = S.addOrSubtract(Xe);
      }
      return [g, S];
    }, p.prototype.toString = function () {
      for (var r = "", l = this.getDegree(); l >= 0; l--) {
        var g = this.getCoefficient(l);
        if (0 !== g) {
          if (g < 0 ? (r += " - ", g = -g) : r.length > 0 && (r += " + "), 0 === l || 1 !== g) {
            var S = this.field.log(g);
            0 === S ? r += "1" : 1 === S ? r += "a" : (r += "a^", r += S);
          }
          0 !== l && (1 === l ? r += "x" : (r += "x^", r += l));
        }
      }
      return r;
    }, p;
  }();
  const Go = jo;
  var ji = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ti = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return ji(r, p), r.kind = "ArithmeticException", r;
    }(h);
  const fi = ti;
  var Fi = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Rn = function (p) {
      function r(l, g, S) {
        var H = p.call(this) || this;
        H.primitive = l, H.size = g, H.generatorBase = S;
        for (var ie = new Int32Array(g), de = 1, Oe = 0; Oe < g; Oe++) ie[Oe] = de, (de *= 2) >= g && (de ^= l, de &= g - 1);
        H.expTable = ie;
        var Xe = new Int32Array(g);
        for (Oe = 0; Oe < g - 1; Oe++) Xe[ie[Oe]] = Oe;
        return H.logTable = Xe, H.zero = new Go(H, Int32Array.from([0])), H.one = new Go(H, Int32Array.from([1])), H;
      }
      return Fi(r, p), r.prototype.getZero = function () {
        return this.zero;
      }, r.prototype.getOne = function () {
        return this.one;
      }, r.prototype.buildMonomial = function (l, g) {
        if (l < 0) throw new y();
        if (0 === g) return this.zero;
        var S = new Int32Array(l + 1);
        return S[0] = g, new Go(this, S);
      }, r.prototype.inverse = function (l) {
        if (0 === l) throw new fi();
        return this.expTable[this.size - this.logTable[l] - 1];
      }, r.prototype.multiply = function (l, g) {
        return 0 === l || 0 === g ? 0 : this.expTable[(this.logTable[l] + this.logTable[g]) % (this.size - 1)];
      }, r.prototype.getSize = function () {
        return this.size;
      }, r.prototype.getGeneratorBase = function () {
        return this.generatorBase;
      }, r.prototype.toString = function () {
        return "GF(0x" + We.toHexString(this.primitive) + "," + this.size + ")";
      }, r.prototype.equals = function (l) {
        return l === this;
      }, r.AZTEC_DATA_12 = new r(4201, 4096, 1), r.AZTEC_DATA_10 = new r(1033, 1024, 1), r.AZTEC_DATA_6 = new r(67, 64, 1), r.AZTEC_PARAM = new r(19, 16, 1), r.QR_CODE_FIELD_256 = new r(285, 256, 0), r.DATA_MATRIX_FIELD_256 = new r(301, 256, 1), r.AZTEC_DATA_8 = r.DATA_MATRIX_FIELD_256, r.MAXICODE_FIELD_64 = r.AZTEC_DATA_6, r;
    }(lo);
  const ki = Rn;
  var Ei = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Wt = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Ei(r, p), r.kind = "ReedSolomonException", r;
    }(h);
  const Oi = Wt;
  var Ji = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ao = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Ji(r, p), r.kind = "IllegalStateException", r;
    }(h);
  const Sr = Ao;
  var us = function () {
    function p(r) {
      this.field = r;
    }
    return p.prototype.decode = function (r, l) {
      for (var g = this.field, S = new Go(g, r), H = new Int32Array(l), ie = !0, de = 0; de < l; de++) {
        var Oe = S.evaluateAt(g.exp(de + g.getGeneratorBase()));
        H[H.length - 1 - de] = Oe, 0 !== Oe && (ie = !1);
      }
      if (!ie) {
        var Xe = new Go(g, H),
          wt = this.runEuclideanAlgorithm(g.buildMonomial(l, 1), Xe, l),
          cn = wt[1],
          xn = this.findErrorLocations(wt[0]),
          Hi = this.findErrorMagnitudes(cn, xn);
        for (de = 0; de < xn.length; de++) {
          var no = r.length - 1 - g.log(xn[de]);
          if (no < 0) throw new Oi("Bad error location");
          r[no] = ki.addOrSubtract(r[no], Hi[de]);
        }
      }
    }, p.prototype.runEuclideanAlgorithm = function (r, l, g) {
      if (r.getDegree() < l.getDegree()) {
        var S = r;
        r = l, l = S;
      }
      for (var H = this.field, ie = r, de = l, Oe = H.getZero(), Xe = H.getOne(); de.getDegree() >= (g / 2 | 0);) {
        var wt = ie,
          Lt = Oe;
        if (Oe = Xe, (ie = de).isZero()) throw new Oi("r_{i-1} was zero");
        de = wt;
        for (var cn = H.getZero(), xn = ie.getCoefficient(ie.getDegree()), Hi = H.inverse(xn); de.getDegree() >= ie.getDegree() && !de.isZero();) {
          var no = de.getDegree() - ie.getDegree(),
            Ho = H.multiply(de.getCoefficient(de.getDegree()), Hi);
          cn = cn.addOrSubtract(H.buildMonomial(no, Ho)), de = de.addOrSubtract(ie.multiplyByMonomial(no, Ho));
        }
        if (Xe = cn.multiply(Oe).addOrSubtract(Lt), de.getDegree() >= ie.getDegree()) throw new Sr("Division algorithm failed to reduce polynomial?");
      }
      var zo = Xe.getCoefficient(0);
      if (0 === zo) throw new Oi("sigmaTilde(0) was zero");
      var Bo = H.inverse(zo);
      return [Xe.multiplyScalar(Bo), de.multiplyScalar(Bo)];
    }, p.prototype.findErrorLocations = function (r) {
      var l = r.getDegree();
      if (1 === l) return Int32Array.from([r.getCoefficient(1)]);
      for (var g = new Int32Array(l), S = 0, H = this.field, ie = 1; ie < H.getSize() && S < l; ie++) 0 === r.evaluateAt(ie) && (g[S] = H.inverse(ie), S++);
      if (S !== l) throw new Oi("Error locator degree does not match number of roots");
      return g;
    }, p.prototype.findErrorMagnitudes = function (r, l) {
      for (var g = l.length, S = new Int32Array(g), H = this.field, ie = 0; ie < g; ie++) {
        for (var de = H.inverse(l[ie]), Oe = 1, Xe = 0; Xe < g; Xe++) if (ie !== Xe) {
          var wt = H.multiply(l[Xe], de);
          Oe = H.multiply(Oe, 1 & wt ? -2 & wt : 1 | wt);
        }
        S[ie] = H.multiply(r.evaluateAt(de), H.inverse(Oe)), 0 !== H.getGeneratorBase() && (S[ie] = H.multiply(S[ie], de));
      }
      return S;
    }, p;
  }();
  const Ps = us;
  var hs = (() => (function (p) {
      p[p.UPPER = 0] = "UPPER", p[p.LOWER = 1] = "LOWER", p[p.MIXED = 2] = "MIXED", p[p.DIGIT = 3] = "DIGIT", p[p.PUNCT = 4] = "PUNCT", p[p.BINARY = 5] = "BINARY";
    }(hs || (hs = {})), hs))(),
    oi = function () {
      function p() {}
      return p.prototype.decode = function (r) {
        this.ddata = r;
        var l = r.getBits(),
          g = this.extractBits(l),
          S = this.correctBits(g),
          H = p.convertBoolArrayToByteArray(S),
          ie = p.getEncodedData(S),
          de = new Di(H, ie, null, null);
        return de.setNumBits(S.length), de;
      }, p.highLevelDecode = function (r) {
        return this.getEncodedData(r);
      }, p.getEncodedData = function (r) {
        for (var l = r.length, g = hs.UPPER, S = hs.UPPER, H = "", ie = 0; ie < l;) if (S === hs.BINARY) {
          if (l - ie < 5) break;
          var de = p.readCode(r, ie, 5);
          if (ie += 5, 0 === de) {
            if (l - ie < 11) break;
            de = p.readCode(r, ie, 11) + 31, ie += 11;
          }
          for (var Oe = 0; Oe < de; Oe++) {
            if (l - ie < 8) {
              ie = l;
              break;
            }
            var Xe = p.readCode(r, ie, 8);
            H += Nn.castAsNonUtf8Char(Xe), ie += 8;
          }
          S = g;
        } else {
          var wt = S === hs.DIGIT ? 4 : 5;
          if (l - ie < wt) break;
          Xe = p.readCode(r, ie, wt), ie += wt;
          var Lt = p.getCharacter(S, Xe);
          Lt.startsWith("CTRL_") ? (g = S, S = p.getTable(Lt.charAt(5)), "L" === Lt.charAt(6) && (g = S)) : (H += Lt, S = g);
        }
        return H;
      }, p.getTable = function (r) {
        switch (r) {
          case "L":
            return hs.LOWER;
          case "P":
            return hs.PUNCT;
          case "M":
            return hs.MIXED;
          case "D":
            return hs.DIGIT;
          case "B":
            return hs.BINARY;
          default:
            return hs.UPPER;
        }
      }, p.getCharacter = function (r, l) {
        switch (r) {
          case hs.UPPER:
            return p.UPPER_TABLE[l];
          case hs.LOWER:
            return p.LOWER_TABLE[l];
          case hs.MIXED:
            return p.MIXED_TABLE[l];
          case hs.PUNCT:
            return p.PUNCT_TABLE[l];
          case hs.DIGIT:
            return p.DIGIT_TABLE[l];
          default:
            throw new Sr("Bad table");
        }
      }, p.prototype.correctBits = function (r) {
        var l, g;
        this.ddata.getNbLayers() <= 2 ? (g = 6, l = ki.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (g = 8, l = ki.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (g = 10, l = ki.AZTEC_DATA_10) : (g = 12, l = ki.AZTEC_DATA_12);
        var S = this.ddata.getNbDatablocks(),
          H = r.length / g;
        if (H < S) throw new Ft();
        for (var ie = r.length % g, de = new Int32Array(H), Oe = 0; Oe < H; Oe++, ie += g) de[Oe] = p.readCode(r, ie, g);
        try {
          new Ps(l).decode(de, H - S);
        } catch (Ho) {
          throw new Ft(Ho);
        }
        var wt = (1 << g) - 1,
          Lt = 0;
        for (Oe = 0; Oe < S; Oe++) {
          if (0 === (cn = de[Oe]) || cn === wt) throw new Ft();
          (1 === cn || cn === wt - 1) && Lt++;
        }
        var xn = new Array(S * g - Lt),
          Hi = 0;
        for (Oe = 0; Oe < S; Oe++) {
          var cn;
          if (1 === (cn = de[Oe]) || cn === wt - 1) xn.fill(cn > 1, Hi, Hi + g - 1), Hi += g - 1;else for (var no = g - 1; no >= 0; --no) xn[Hi++] = 0 != (cn & 1 << no);
        }
        return xn;
      }, p.prototype.extractBits = function (r) {
        var l = this.ddata.isCompact(),
          g = this.ddata.getNbLayers(),
          S = (l ? 11 : 14) + 4 * g,
          H = new Int32Array(S),
          ie = new Array(this.totalBitsInLayer(g, l));
        if (l) for (var de = 0; de < H.length; de++) H[de] = de;else {
          var Oe = S + 1 + 2 * We.truncDivision(We.truncDivision(S, 2) - 1, 15),
            Xe = S / 2,
            wt = We.truncDivision(Oe, 2);
          for (de = 0; de < Xe; de++) {
            var Lt = de + We.truncDivision(de, 15);
            H[Xe - de - 1] = wt - Lt - 1, H[Xe + de] = wt + Lt + 1;
          }
        }
        de = 0;
        for (var cn = 0; de < g; de++) {
          for (var xn = 4 * (g - de) + (l ? 9 : 12), Hi = 2 * de, no = S - 1 - Hi, Ho = 0; Ho < xn; Ho++) for (var zo = 2 * Ho, Bo = 0; Bo < 2; Bo++) ie[cn + zo + Bo] = r.get(H[Hi + Bo], H[Hi + Ho]), ie[cn + 2 * xn + zo + Bo] = r.get(H[Hi + Ho], H[no - Bo]), ie[cn + 4 * xn + zo + Bo] = r.get(H[no - Bo], H[no - Ho]), ie[cn + 6 * xn + zo + Bo] = r.get(H[no - Ho], H[Hi + Bo]);
          cn += 8 * xn;
        }
        return ie;
      }, p.readCode = function (r, l, g) {
        for (var S = 0, H = l; H < l + g; H++) S <<= 1, r[H] && (S |= 1);
        return S;
      }, p.readByte = function (r, l) {
        var g = r.length - l;
        return g >= 8 ? p.readCode(r, l, 8) : p.readCode(r, l, g) << 8 - g;
      }, p.convertBoolArrayToByteArray = function (r) {
        for (var l = new Uint8Array((r.length + 7) / 8), g = 0; g < l.length; g++) l[g] = p.readByte(r, 8 * g);
        return l;
      }, p.prototype.totalBitsInLayer = function (r, l) {
        return ((l ? 88 : 112) + 16 * r) * r;
      }, p.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], p.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], p.MIXED_TABLE = ["CTRL_PS", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", "", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], p.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], p.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"], p;
    }();
  const yo = oi;
  var Qi = function () {
    function p() {}
    return p.round = function (r) {
      return isNaN(r) ? 0 : r <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : r >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : r + (r < 0 ? -.5 : .5) | 0;
    }, p.distance = function (r, l, g, S) {
      var H = r - g,
        ie = l - S;
      return Math.sqrt(H * H + ie * ie);
    }, p.sum = function (r) {
      for (var l = 0, g = 0, S = r.length; g !== S; g++) l += r[g];
      return l;
    }, p;
  }();
  const Qo = Qi;
  var Kr = function () {
    function p() {}
    return p.floatToIntBits = function (r) {
      return r;
    }, p.MAX_VALUE = Number.MAX_SAFE_INTEGER, p;
  }();
  const _s = Kr;
  var ra = function () {
    function p(r, l) {
      this.x = r, this.y = l;
    }
    return p.prototype.getX = function () {
      return this.x;
    }, p.prototype.getY = function () {
      return this.y;
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.x === r.x && this.y === r.y;
    }, p.prototype.hashCode = function () {
      return 31 * _s.floatToIntBits(this.x) + _s.floatToIntBits(this.y);
    }, p.prototype.toString = function () {
      return "(" + this.x + "," + this.y + ")";
    }, p.orderBestPatterns = function (r) {
      var H,
        ie,
        de,
        l = this.distance(r[0], r[1]),
        g = this.distance(r[1], r[2]),
        S = this.distance(r[0], r[2]);
      if (g >= l && g >= S ? (ie = r[0], H = r[1], de = r[2]) : S >= g && S >= l ? (ie = r[1], H = r[0], de = r[2]) : (ie = r[2], H = r[0], de = r[1]), this.crossProductZ(H, ie, de) < 0) {
        var Oe = H;
        H = de, de = Oe;
      }
      r[0] = H, r[1] = ie, r[2] = de;
    }, p.distance = function (r, l) {
      return Qo.distance(r.x, r.y, l.x, l.y);
    }, p.crossProductZ = function (r, l, g) {
      var S = l.x,
        H = l.y;
      return (g.x - S) * (r.y - H) - (g.y - H) * (r.x - S);
    }, p;
  }();
  const Or = ra;
  var Fs = function () {
    function p(r, l) {
      this.bits = r, this.points = l;
    }
    return p.prototype.getBits = function () {
      return this.bits;
    }, p.prototype.getPoints = function () {
      return this.points;
    }, p;
  }();
  const xa = Fs;
  var rs = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Js = function (p) {
      function r(l, g, S, H, ie) {
        var de = p.call(this, l, g) || this;
        return de.compact = S, de.nbDatablocks = H, de.nbLayers = ie, de;
      }
      return rs(r, p), r.prototype.getNbLayers = function () {
        return this.nbLayers;
      }, r.prototype.getNbDatablocks = function () {
        return this.nbDatablocks;
      }, r.prototype.isCompact = function () {
        return this.compact;
      }, r;
    }(xa);
  const ho = Js;
  var uo = function () {
    function p(r, l, g, S) {
      this.image = r, this.height = r.getHeight(), this.width = r.getWidth(), null == l && (l = p.INIT_SIZE), null == g && (g = r.getWidth() / 2 | 0), null == S && (S = r.getHeight() / 2 | 0);
      var H = l / 2 | 0;
      if (this.leftInit = g - H, this.rightInit = g + H, this.upInit = S - H, this.downInit = S + H, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new pt();
    }
    return p.prototype.detect = function () {
      for (var r = this.leftInit, l = this.rightInit, g = this.upInit, S = this.downInit, H = !1, ie = !0, de = !1, Oe = !1, Xe = !1, wt = !1, Lt = !1, cn = this.width, xn = this.height; ie;) {
        ie = !1;
        for (var Hi = !0; (Hi || !Oe) && l < cn;) (Hi = this.containsBlackPoint(g, S, l, !1)) ? (l++, ie = !0, Oe = !0) : Oe || l++;
        if (l >= cn) {
          H = !0;
          break;
        }
        for (var no = !0; (no || !Xe) && S < xn;) (no = this.containsBlackPoint(r, l, S, !0)) ? (S++, ie = !0, Xe = !0) : Xe || S++;
        if (S >= xn) {
          H = !0;
          break;
        }
        for (var Ho = !0; (Ho || !wt) && r >= 0;) (Ho = this.containsBlackPoint(g, S, r, !1)) ? (r--, ie = !0, wt = !0) : wt || r--;
        if (r < 0) {
          H = !0;
          break;
        }
        for (var zo = !0; (zo || !Lt) && g >= 0;) (zo = this.containsBlackPoint(r, l, g, !0)) ? (g--, ie = !0, Lt = !0) : Lt || g--;
        if (g < 0) {
          H = !0;
          break;
        }
        ie && (de = !0);
      }
      if (!H && de) {
        for (var Bo = l - r, Mr = null, Ur = 1; null === Mr && Ur < Bo; Ur++) Mr = this.getBlackPointOnSegment(r, S - Ur, r + Ur, S);
        if (null == Mr) throw new pt();
        var ls = null;
        for (Ur = 1; null === ls && Ur < Bo; Ur++) ls = this.getBlackPointOnSegment(r, g + Ur, r + Ur, g);
        if (null == ls) throw new pt();
        var Ss = null;
        for (Ur = 1; null === Ss && Ur < Bo; Ur++) Ss = this.getBlackPointOnSegment(l, g + Ur, l - Ur, g);
        if (null == Ss) throw new pt();
        var Is = null;
        for (Ur = 1; null === Is && Ur < Bo; Ur++) Is = this.getBlackPointOnSegment(l, S - Ur, l - Ur, S);
        if (null == Is) throw new pt();
        return this.centerEdges(Is, Mr, Ss, ls);
      }
      throw new pt();
    }, p.prototype.getBlackPointOnSegment = function (r, l, g, S) {
      for (var H = Qo.round(Qo.distance(r, l, g, S)), ie = (g - r) / H, de = (S - l) / H, Oe = this.image, Xe = 0; Xe < H; Xe++) {
        var wt = Qo.round(r + Xe * ie),
          Lt = Qo.round(l + Xe * de);
        if (Oe.get(wt, Lt)) return new Or(wt, Lt);
      }
      return null;
    }, p.prototype.centerEdges = function (r, l, g, S) {
      var H = r.getX(),
        ie = r.getY(),
        de = l.getX(),
        Oe = l.getY(),
        Xe = g.getX(),
        wt = g.getY(),
        Lt = S.getX(),
        cn = S.getY(),
        xn = p.CORR;
      return H < this.width / 2 ? [new Or(Lt - xn, cn + xn), new Or(de + xn, Oe + xn), new Or(Xe - xn, wt - xn), new Or(H + xn, ie - xn)] : [new Or(Lt + xn, cn + xn), new Or(de + xn, Oe - xn), new Or(Xe - xn, wt + xn), new Or(H - xn, ie - xn)];
    }, p.prototype.containsBlackPoint = function (r, l, g, S) {
      var H = this.image;
      if (S) {
        for (var ie = r; ie <= l; ie++) if (H.get(ie, g)) return !0;
      } else for (var de = r; de <= l; de++) if (H.get(g, de)) return !0;
      return !1;
    }, p.INIT_SIZE = 10, p.CORR = 1, p;
  }();
  const ri = uo;
  var Yt = function () {
    function p() {}
    return p.checkAndNudgePoints = function (r, l) {
      for (var g = r.getWidth(), S = r.getHeight(), H = !0, ie = 0; ie < l.length && H; ie += 2) {
        var de = Math.floor(l[ie]),
          Oe = Math.floor(l[ie + 1]);
        if (de < -1 || de > g || Oe < -1 || Oe > S) throw new pt();
        H = !1, -1 === de ? (l[ie] = 0, H = !0) : de === g && (l[ie] = g - 1, H = !0), -1 === Oe ? (l[ie + 1] = 0, H = !0) : Oe === S && (l[ie + 1] = S - 1, H = !0);
      }
      for (H = !0, ie = l.length - 2; ie >= 0 && H; ie -= 2) {
        if (de = Math.floor(l[ie]), Oe = Math.floor(l[ie + 1]), de < -1 || de > g || Oe < -1 || Oe > S) throw new pt();
        H = !1, -1 === de ? (l[ie] = 0, H = !0) : de === g && (l[ie] = g - 1, H = !0), -1 === Oe ? (l[ie + 1] = 0, H = !0) : Oe === S && (l[ie + 1] = S - 1, H = !0);
      }
    }, p;
  }();
  const jt = Yt;
  var hn = function () {
    function p(r, l, g, S, H, ie, de, Oe, Xe) {
      this.a11 = r, this.a21 = l, this.a31 = g, this.a12 = S, this.a22 = H, this.a32 = ie, this.a13 = de, this.a23 = Oe, this.a33 = Xe;
    }
    return p.quadrilateralToQuadrilateral = function (r, l, g, S, H, ie, de, Oe, Xe, wt, Lt, cn, xn, Hi, no, Ho) {
      var zo = p.quadrilateralToSquare(r, l, g, S, H, ie, de, Oe);
      return p.squareToQuadrilateral(Xe, wt, Lt, cn, xn, Hi, no, Ho).times(zo);
    }, p.prototype.transformPoints = function (r) {
      for (var l = r.length, g = this.a11, S = this.a12, H = this.a13, ie = this.a21, de = this.a22, Oe = this.a23, Xe = this.a31, wt = this.a32, Lt = this.a33, cn = 0; cn < l; cn += 2) {
        var xn = r[cn],
          Hi = r[cn + 1],
          no = H * xn + Oe * Hi + Lt;
        r[cn] = (g * xn + ie * Hi + Xe) / no, r[cn + 1] = (S * xn + de * Hi + wt) / no;
      }
    }, p.prototype.transformPointsWithValues = function (r, l) {
      for (var g = this.a11, S = this.a12, H = this.a13, ie = this.a21, de = this.a22, Oe = this.a23, Xe = this.a31, wt = this.a32, Lt = this.a33, cn = r.length, xn = 0; xn < cn; xn++) {
        var Hi = r[xn],
          no = l[xn],
          Ho = H * Hi + Oe * no + Lt;
        r[xn] = (g * Hi + ie * no + Xe) / Ho, l[xn] = (S * Hi + de * no + wt) / Ho;
      }
    }, p.squareToQuadrilateral = function (r, l, g, S, H, ie, de, Oe) {
      var Xe = r - g + H - de,
        wt = l - S + ie - Oe;
      if (0 === Xe && 0 === wt) return new p(g - r, H - g, r, S - l, ie - S, l, 0, 0, 1);
      var Lt = g - H,
        cn = de - H,
        xn = S - ie,
        Hi = Oe - ie,
        no = Lt * Hi - cn * xn,
        Ho = (Xe * Hi - cn * wt) / no,
        zo = (Lt * wt - Xe * xn) / no;
      return new p(g - r + Ho * g, de - r + zo * de, r, S - l + Ho * S, Oe - l + zo * Oe, l, Ho, zo, 1);
    }, p.quadrilateralToSquare = function (r, l, g, S, H, ie, de, Oe) {
      return p.squareToQuadrilateral(r, l, g, S, H, ie, de, Oe).buildAdjoint();
    }, p.prototype.buildAdjoint = function () {
      return new p(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    }, p.prototype.times = function (r) {
      return new p(this.a11 * r.a11 + this.a21 * r.a12 + this.a31 * r.a13, this.a11 * r.a21 + this.a21 * r.a22 + this.a31 * r.a23, this.a11 * r.a31 + this.a21 * r.a32 + this.a31 * r.a33, this.a12 * r.a11 + this.a22 * r.a12 + this.a32 * r.a13, this.a12 * r.a21 + this.a22 * r.a22 + this.a32 * r.a23, this.a12 * r.a31 + this.a22 * r.a32 + this.a32 * r.a33, this.a13 * r.a11 + this.a23 * r.a12 + this.a33 * r.a13, this.a13 * r.a21 + this.a23 * r.a22 + this.a33 * r.a23, this.a13 * r.a31 + this.a23 * r.a32 + this.a33 * r.a33);
    }, p;
  }();
  const tn = hn;
  var di = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Gn = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return di(r, p), r.prototype.sampleGrid = function (l, g, S, H, ie, de, Oe, Xe, wt, Lt, cn, xn, Hi, no, Ho, zo, Bo, Mr, Ur) {
        var ls = tn.quadrilateralToQuadrilateral(H, ie, de, Oe, Xe, wt, Lt, cn, xn, Hi, no, Ho, zo, Bo, Mr, Ur);
        return this.sampleGridWithTransform(l, g, S, ls);
      }, r.prototype.sampleGridWithTransform = function (l, g, S, H) {
        if (g <= 0 || S <= 0) throw new pt();
        for (var ie = new co(g, S), de = new Float32Array(2 * g), Oe = 0; Oe < S; Oe++) {
          for (var Xe = de.length, wt = Oe + .5, Lt = 0; Lt < Xe; Lt += 2) de[Lt] = Lt / 2 + .5, de[Lt + 1] = wt;
          H.transformPoints(de), jt.checkAndNudgePoints(l, de);
          try {
            for (Lt = 0; Lt < Xe; Lt += 2) l.get(Math.floor(de[Lt]), Math.floor(de[Lt + 1])) && ie.set(Lt / 2, Oe);
          } catch {
            throw new pt();
          }
        }
        return ie;
      }, r;
    }(jt);
  const dn = Gn;
  var wo = function () {
    function p() {}
    return p.setGridSampler = function (r) {
      p.gridSampler = r;
    }, p.getInstance = function () {
      return p.gridSampler;
    }, p.gridSampler = new dn(), p;
  }();
  const Ro = wo;
  var _r = function () {
      function p(r, l) {
        this.x = r, this.y = l;
      }
      return p.prototype.toResultPoint = function () {
        return new Or(this.getX(), this.getY());
      }, p.prototype.getX = function () {
        return this.x;
      }, p.prototype.getY = function () {
        return this.y;
      }, p;
    }(),
    qr = function () {
      function p(r) {
        this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = r;
      }
      return p.prototype.detect = function () {
        return this.detectMirror(!1);
      }, p.prototype.detectMirror = function (r) {
        var l = this.getMatrixCenter(),
          g = this.getBullsEyeCorners(l);
        if (r) {
          var S = g[0];
          g[0] = g[2], g[2] = S;
        }
        this.extractParameters(g);
        var H = this.sampleGrid(this.image, g[this.shift % 4], g[(this.shift + 1) % 4], g[(this.shift + 2) % 4], g[(this.shift + 3) % 4]),
          ie = this.getMatrixCornerPoints(g);
        return new ho(H, ie, this.compact, this.nbDataBlocks, this.nbLayers);
      }, p.prototype.extractParameters = function (r) {
        if (!(this.isValidPoint(r[0]) && this.isValidPoint(r[1]) && this.isValidPoint(r[2]) && this.isValidPoint(r[3]))) throw new pt();
        var l = 2 * this.nbCenterLayers,
          g = new Int32Array([this.sampleLine(r[0], r[1], l), this.sampleLine(r[1], r[2], l), this.sampleLine(r[2], r[3], l), this.sampleLine(r[3], r[0], l)]);
        this.shift = this.getRotation(g, l);
        for (var S = 0, H = 0; H < 4; H++) {
          var ie = g[(this.shift + H) % 4];
          this.compact ? (S <<= 7, S += ie >> 1 & 127) : (S <<= 10, S += (ie >> 2 & 992) + (ie >> 1 & 31));
        }
        var de = this.getCorrectedParameterData(S, this.compact);
        this.compact ? (this.nbLayers = 1 + (de >> 6), this.nbDataBlocks = 1 + (63 & de)) : (this.nbLayers = 1 + (de >> 11), this.nbDataBlocks = 1 + (2047 & de));
      }, p.prototype.getRotation = function (r, l) {
        var g = 0;
        r.forEach(function (H, ie, de) {
          g = (H >> l - 2 << 1) + (1 & H) + (g << 3);
        }), g = ((1 & g) << 11) + (g >> 1);
        for (var S = 0; S < 4; S++) if (We.bitCount(g ^ this.EXPECTED_CORNER_BITS[S]) <= 2) return S;
        throw new pt();
      }, p.prototype.getCorrectedParameterData = function (r, l) {
        var g, S;
        l ? (g = 7, S = 2) : (g = 10, S = 4);
        for (var H = g - S, ie = new Int32Array(g), de = g - 1; de >= 0; --de) ie[de] = 15 & r, r >>= 4;
        try {
          new Ps(ki.AZTEC_PARAM).decode(ie, H);
        } catch {
          throw new pt();
        }
        var Xe = 0;
        for (de = 0; de < S; de++) Xe = (Xe << 4) + ie[de];
        return Xe;
      }, p.prototype.getBullsEyeCorners = function (r) {
        var l = r,
          g = r,
          S = r,
          H = r,
          ie = !0;
        for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
          var de = this.getFirstDifferent(l, ie, 1, -1),
            Oe = this.getFirstDifferent(g, ie, 1, 1),
            Xe = this.getFirstDifferent(S, ie, -1, 1),
            wt = this.getFirstDifferent(H, ie, -1, -1);
          if (this.nbCenterLayers > 2) {
            var Lt = this.distancePoint(wt, de) * this.nbCenterLayers / (this.distancePoint(H, l) * (this.nbCenterLayers + 2));
            if (Lt < .75 || Lt > 1.25 || !this.isWhiteOrBlackRectangle(de, Oe, Xe, wt)) break;
          }
          l = de, g = Oe, S = Xe, H = wt, ie = !ie;
        }
        if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new pt();
        this.compact = 5 === this.nbCenterLayers;
        var cn = new Or(l.getX() + .5, l.getY() - .5),
          xn = new Or(g.getX() + .5, g.getY() + .5),
          Hi = new Or(S.getX() - .5, S.getY() + .5),
          no = new Or(H.getX() - .5, H.getY() - .5);
        return this.expandSquare([cn, xn, Hi, no], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
      }, p.prototype.getMatrixCenter = function () {
        var r, l, g, S;
        try {
          r = (H = new ri(this.image).detect())[0], l = H[1], g = H[2], S = H[3];
        } catch {
          var ie = this.image.getWidth() / 2,
            de = this.image.getHeight() / 2;
          r = this.getFirstDifferent(new _r(ie + 7, de - 7), !1, 1, -1).toResultPoint(), l = this.getFirstDifferent(new _r(ie + 7, de + 7), !1, 1, 1).toResultPoint(), g = this.getFirstDifferent(new _r(ie - 7, de + 7), !1, -1, 1).toResultPoint(), S = this.getFirstDifferent(new _r(ie - 7, de - 7), !1, -1, -1).toResultPoint();
        }
        var Oe = Qo.round((r.getX() + S.getX() + l.getX() + g.getX()) / 4),
          Xe = Qo.round((r.getY() + S.getY() + l.getY() + g.getY()) / 4);
        try {
          var H;
          r = (H = new ri(this.image, 15, Oe, Xe).detect())[0], l = H[1], g = H[2], S = H[3];
        } catch {
          r = this.getFirstDifferent(new _r(Oe + 7, Xe - 7), !1, 1, -1).toResultPoint(), l = this.getFirstDifferent(new _r(Oe + 7, Xe + 7), !1, 1, 1).toResultPoint(), g = this.getFirstDifferent(new _r(Oe - 7, Xe + 7), !1, -1, 1).toResultPoint(), S = this.getFirstDifferent(new _r(Oe - 7, Xe - 7), !1, -1, -1).toResultPoint();
        }
        return Oe = Qo.round((r.getX() + S.getX() + l.getX() + g.getX()) / 4), Xe = Qo.round((r.getY() + S.getY() + l.getY() + g.getY()) / 4), new _r(Oe, Xe);
      }, p.prototype.getMatrixCornerPoints = function (r) {
        return this.expandSquare(r, 2 * this.nbCenterLayers, this.getDimension());
      }, p.prototype.sampleGrid = function (r, l, g, S, H) {
        var ie = Ro.getInstance(),
          de = this.getDimension(),
          Oe = de / 2 - this.nbCenterLayers,
          Xe = de / 2 + this.nbCenterLayers;
        return ie.sampleGrid(r, de, de, Oe, Oe, Xe, Oe, Xe, Xe, Oe, Xe, l.getX(), l.getY(), g.getX(), g.getY(), S.getX(), S.getY(), H.getX(), H.getY());
      }, p.prototype.sampleLine = function (r, l, g) {
        for (var S = 0, H = this.distanceResultPoint(r, l), ie = H / g, de = r.getX(), Oe = r.getY(), Xe = ie * (l.getX() - r.getX()) / H, wt = ie * (l.getY() - r.getY()) / H, Lt = 0; Lt < g; Lt++) this.image.get(Qo.round(de + Lt * Xe), Qo.round(Oe + Lt * wt)) && (S |= 1 << g - Lt - 1);
        return S;
      }, p.prototype.isWhiteOrBlackRectangle = function (r, l, g, S) {
        r = new _r(r.getX() - 3, r.getY() + 3), l = new _r(l.getX() - 3, l.getY() - 3), g = new _r(g.getX() + 3, g.getY() - 3), S = new _r(S.getX() + 3, S.getY() + 3);
        var ie = this.getColor(S, r);
        if (0 === ie) return !1;
        var de = this.getColor(r, l);
        return de === ie && (de = this.getColor(l, g)) === ie && (de = this.getColor(g, S)) === ie;
      }, p.prototype.getColor = function (r, l) {
        for (var g = this.distancePoint(r, l), S = (l.getX() - r.getX()) / g, H = (l.getY() - r.getY()) / g, ie = 0, de = r.getX(), Oe = r.getY(), Xe = this.image.get(r.getX(), r.getY()), wt = Math.ceil(g), Lt = 0; Lt < wt; Lt++) Oe += H, this.image.get(Qo.round(de += S), Qo.round(Oe)) !== Xe && ie++;
        var cn = ie / g;
        return cn > .1 && cn < .9 ? 0 : cn <= .1 === Xe ? 1 : -1;
      }, p.prototype.getFirstDifferent = function (r, l, g, S) {
        for (var H = r.getX() + g, ie = r.getY() + S; this.isValid(H, ie) && this.image.get(H, ie) === l;) H += g, ie += S;
        for (H -= g, ie -= S; this.isValid(H, ie) && this.image.get(H, ie) === l;) H += g;
        for (H -= g; this.isValid(H, ie) && this.image.get(H, ie) === l;) ie += S;
        return new _r(H, ie -= S);
      }, p.prototype.expandSquare = function (r, l, g) {
        var S = g / (2 * l),
          H = r[0].getX() - r[2].getX(),
          ie = r[0].getY() - r[2].getY(),
          de = (r[0].getX() + r[2].getX()) / 2,
          Oe = (r[0].getY() + r[2].getY()) / 2,
          Xe = new Or(de + S * H, Oe + S * ie),
          wt = new Or(de - S * H, Oe - S * ie);
        return H = r[1].getX() - r[3].getX(), ie = r[1].getY() - r[3].getY(), de = (r[1].getX() + r[3].getX()) / 2, Oe = (r[1].getY() + r[3].getY()) / 2, [Xe, new Or(de + S * H, Oe + S * ie), wt, new Or(de - S * H, Oe - S * ie)];
      }, p.prototype.isValid = function (r, l) {
        return r >= 0 && r < this.image.getWidth() && l > 0 && l < this.image.getHeight();
      }, p.prototype.isValidPoint = function (r) {
        var l = Qo.round(r.getX()),
          g = Qo.round(r.getY());
        return this.isValid(l, g);
      }, p.prototype.distancePoint = function (r, l) {
        return Qo.distance(r.getX(), r.getY(), l.getX(), l.getY());
      }, p.prototype.distanceResultPoint = function (r, l) {
        return Qo.distance(r.getX(), r.getY(), l.getX(), l.getY());
      }, p.prototype.getDimension = function () {
        return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (We.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
      }, p;
    }();
  const Ts = qr;
  var js = function () {
    function p() {}
    return p.prototype.decode = function (r, l) {
      void 0 === l && (l = null);
      var g = null,
        S = new Ts(r.getBlackMatrix()),
        H = null,
        ie = null;
      try {
        H = (de = S.detectMirror(!1)).getPoints(), this.reportFoundResultPoints(l, H), ie = new yo().decode(de);
      } catch (Lt) {
        g = Lt;
      }
      if (null == ie) try {
        var de;
        H = (de = S.detectMirror(!0)).getPoints(), this.reportFoundResultPoints(l, H), ie = new yo().decode(de);
      } catch (Lt) {
        throw g ?? Lt;
      }
      var Oe = new br(ie.getText(), ie.getRawBytes(), ie.getNumBits(), H, qo.AZTEC, ae.currentTimeMillis()),
        Xe = ie.getByteSegments();
      null != Xe && Oe.putMetadata(wr.BYTE_SEGMENTS, Xe);
      var wt = ie.getECLevel();
      return null != wt && Oe.putMetadata(wr.ERROR_CORRECTION_LEVEL, wt), Oe;
    }, p.prototype.reportFoundResultPoints = function (r, l) {
      if (null != r) {
        var g = r.get(mt.NEED_RESULT_POINT_CALLBACK);
        null != g && l.forEach(function (S, H, ie) {
          g.foundPossibleResultPoint(S);
        });
      }
    }, p.prototype.reset = function () {}, p;
  }();
  const ws = js;
  var Us = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    sa = (function (p) {
      Us(function r(l) {
        return void 0 === l && (l = 500), p.call(this, new ws(), l) || this;
      }, p);
    }(Eo), function () {
      function p() {}
      return p.prototype.decode = function (r, l) {
        try {
          return this.doDecode(r, l);
        } catch {
          if (l && !0 === l.get(mt.TRY_HARDER) && r.isRotateSupported()) {
            var S = r.rotateCounterClockwise(),
              H = this.doDecode(S, l),
              ie = H.getResultMetadata(),
              de = 270;
            null !== ie && !0 === ie.get(wr.ORIENTATION) && (de += ie.get(wr.ORIENTATION) % 360), H.putMetadata(wr.ORIENTATION, de);
            var Oe = H.getResultPoints();
            if (null !== Oe) for (var Xe = S.getHeight(), wt = 0; wt < Oe.length; wt++) Oe[wt] = new Or(Xe - Oe[wt].getY() - 1, Oe[wt].getX());
            return H;
          }
          throw new pt();
        }
      }, p.prototype.reset = function () {}, p.prototype.doDecode = function (r, l) {
        var Oe,
          g = r.getWidth(),
          S = r.getHeight(),
          H = new st(g),
          ie = l && !0 === l.get(mt.TRY_HARDER),
          de = Math.max(1, S >> (ie ? 8 : 5));
        Oe = ie ? S : 15;
        for (var Xe = Math.trunc(S / 2), wt = 0; wt < Oe; wt++) {
          var Lt = Math.trunc((wt + 1) / 2),
            xn = Xe + de * (0 == (1 & wt) ? Lt : -Lt);
          if (xn < 0 || xn >= S) break;
          try {
            H = r.getBlackRow(xn, H);
          } catch {
            continue;
          }
          for (var Hi = function (Bo) {
              if (1 === Bo && (H.reverse(), l && !0 === l.get(mt.NEED_RESULT_POINT_CALLBACK))) {
                var Mr = new Map();
                l.forEach(function (Ss, Is) {
                  return Mr.set(Is, Ss);
                }), Mr.delete(mt.NEED_RESULT_POINT_CALLBACK), l = Mr;
              }
              try {
                var Ur = no.decodeRow(xn, H, l);
                if (1 === Bo) {
                  Ur.putMetadata(wr.ORIENTATION, 180);
                  var ls = Ur.getResultPoints();
                  null !== ls && (ls[0] = new Or(g - ls[0].getX() - 1, ls[0].getY()), ls[1] = new Or(g - ls[1].getX() - 1, ls[1].getY()));
                }
                return {
                  value: Ur
                };
              } catch {}
            }, no = this, Ho = 0; Ho < 2; Ho++) {
            var zo = Hi(Ho);
            if ("object" == typeof zo) return zo.value;
          }
        }
        throw new pt();
      }, p.recordPattern = function (r, l, g) {
        for (var S = g.length, H = 0; H < S; H++) g[H] = 0;
        var ie = r.getSize();
        if (l >= ie) throw new pt();
        for (var de = !r.get(l), Oe = 0, Xe = l; Xe < ie;) {
          if (r.get(Xe) !== de) g[Oe]++;else {
            if (++Oe === S) break;
            g[Oe] = 1, de = !de;
          }
          Xe++;
        }
        if (Oe !== S && (Oe !== S - 1 || Xe !== ie)) throw new pt();
      }, p.recordPatternInReverse = function (r, l, g) {
        for (var S = g.length, H = r.get(l); l > 0 && S >= 0;) r.get(--l) !== H && (S--, H = !H);
        if (S >= 0) throw new pt();
        p.recordPattern(r, l + 1, g);
      }, p.patternMatchVariance = function (r, l, g) {
        for (var S = r.length, H = 0, ie = 0, de = 0; de < S; de++) H += r[de], ie += l[de];
        if (H < ie) return Number.POSITIVE_INFINITY;
        var Oe = H / ie;
        g *= Oe;
        for (var Xe = 0, wt = 0; wt < S; wt++) {
          var Lt = r[wt],
            cn = l[wt] * Oe,
            xn = Lt > cn ? Lt - cn : cn - Lt;
          if (xn > g) return Number.POSITIVE_INFINITY;
          Xe += xn;
        }
        return Xe / H;
      }, p;
    }());
  const ha = sa;
  var ua = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    da = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return ua(r, p), r.findStartPattern = function (l) {
        for (var g = l.getSize(), S = l.getNextSet(0), H = 0, ie = Int32Array.from([0, 0, 0, 0, 0, 0]), de = S, Oe = !1, wt = S; wt < g; wt++) if (l.get(wt) !== Oe) ie[H]++;else {
          if (5 === H) {
            for (var Lt = r.MAX_AVG_VARIANCE, cn = -1, xn = r.CODE_START_A; xn <= r.CODE_START_C; xn++) {
              var Hi = ha.patternMatchVariance(ie, r.CODE_PATTERNS[xn], r.MAX_INDIVIDUAL_VARIANCE);
              Hi < Lt && (Lt = Hi, cn = xn);
            }
            if (cn >= 0 && l.isRange(Math.max(0, de - (wt - de) / 2), de, !1)) return Int32Array.from([de, wt, cn]);
            de += ie[0] + ie[1], (ie = ie.slice(2, ie.length))[H - 1] = 0, ie[H] = 0, H--;
          } else H++;
          ie[H] = 1, Oe = !Oe;
        }
        throw new pt();
      }, r.decodeCode = function (l, g, S) {
        ha.recordPattern(l, S, g);
        for (var H = r.MAX_AVG_VARIANCE, ie = -1, de = 0; de < r.CODE_PATTERNS.length; de++) {
          var Xe = this.patternMatchVariance(g, r.CODE_PATTERNS[de], r.MAX_INDIVIDUAL_VARIANCE);
          Xe < H && (H = Xe, ie = de);
        }
        if (ie >= 0) return ie;
        throw new pt();
      }, r.prototype.decodeRow = function (l, g, S) {
        var wt,
          H = S && !0 === S.get(mt.ASSUME_GS1),
          ie = r.findStartPattern(g),
          de = ie[2],
          Oe = 0,
          Xe = new Uint8Array(20);
        switch (Xe[Oe++] = de, de) {
          case r.CODE_START_A:
            wt = r.CODE_CODE_A;
            break;
          case r.CODE_START_B:
            wt = r.CODE_CODE_B;
            break;
          case r.CODE_START_C:
            wt = r.CODE_CODE_C;
            break;
          default:
            throw new Ft();
        }
        for (var Lt = !1, cn = !1, xn = "", Hi = ie[0], no = ie[1], Ho = Int32Array.from([0, 0, 0, 0, 0, 0]), zo = 0, Bo = 0, Mr = de, Ur = 0, ls = !0, Ss = !1, Is = !1; !Lt;) {
          var Ys = cn;
          switch (cn = !1, zo = Bo, Bo = r.decodeCode(g, Ho, no), Xe[Oe++] = Bo, Bo !== r.CODE_STOP && (ls = !0), Bo !== r.CODE_STOP && (Mr += ++Ur * Bo), Hi = no, no += Ho.reduce(function (Nm, bf) {
            return Nm + bf;
          }, 0), Bo) {
            case r.CODE_START_A:
            case r.CODE_START_B:
            case r.CODE_START_C:
              throw new Ft();
          }
          switch (wt) {
            case r.CODE_CODE_A:
              if (Bo < 64) xn += String.fromCharCode(Is === Ss ? " ".charCodeAt(0) + Bo : " ".charCodeAt(0) + Bo + 128), Is = !1;else if (Bo < 96) xn += String.fromCharCode(Is === Ss ? Bo - 64 : Bo + 64), Is = !1;else switch (Bo !== r.CODE_STOP && (ls = !1), Bo) {
                case r.CODE_FNC_1:
                  H && (xn += 0 === xn.length ? "]C1" : String.fromCharCode(29));
                  break;
                case r.CODE_FNC_2:
                case r.CODE_FNC_3:
                  break;
                case r.CODE_FNC_4_A:
                  !Ss && Is ? (Ss = !0, Is = !1) : Ss && Is ? (Ss = !1, Is = !1) : Is = !0;
                  break;
                case r.CODE_SHIFT:
                  cn = !0, wt = r.CODE_CODE_B;
                  break;
                case r.CODE_CODE_B:
                  wt = r.CODE_CODE_B;
                  break;
                case r.CODE_CODE_C:
                  wt = r.CODE_CODE_C;
                  break;
                case r.CODE_STOP:
                  Lt = !0;
              }
              break;
            case r.CODE_CODE_B:
              if (Bo < 96) xn += String.fromCharCode(Is === Ss ? " ".charCodeAt(0) + Bo : " ".charCodeAt(0) + Bo + 128), Is = !1;else switch (Bo !== r.CODE_STOP && (ls = !1), Bo) {
                case r.CODE_FNC_1:
                  H && (xn += 0 === xn.length ? "]C1" : String.fromCharCode(29));
                  break;
                case r.CODE_FNC_2:
                case r.CODE_FNC_3:
                  break;
                case r.CODE_FNC_4_B:
                  !Ss && Is ? (Ss = !0, Is = !1) : Ss && Is ? (Ss = !1, Is = !1) : Is = !0;
                  break;
                case r.CODE_SHIFT:
                  cn = !0, wt = r.CODE_CODE_A;
                  break;
                case r.CODE_CODE_A:
                  wt = r.CODE_CODE_A;
                  break;
                case r.CODE_CODE_C:
                  wt = r.CODE_CODE_C;
                  break;
                case r.CODE_STOP:
                  Lt = !0;
              }
              break;
            case r.CODE_CODE_C:
              if (Bo < 100) Bo < 10 && (xn += "0"), xn += Bo;else switch (Bo !== r.CODE_STOP && (ls = !1), Bo) {
                case r.CODE_FNC_1:
                  H && (xn += 0 === xn.length ? "]C1" : String.fromCharCode(29));
                  break;
                case r.CODE_CODE_A:
                  wt = r.CODE_CODE_A;
                  break;
                case r.CODE_CODE_B:
                  wt = r.CODE_CODE_B;
                  break;
                case r.CODE_STOP:
                  Lt = !0;
              }
          }
          Ys && (wt = wt === r.CODE_CODE_A ? r.CODE_CODE_B : r.CODE_CODE_A);
        }
        var Sa = no - Hi;
        if (no = g.getNextUnset(no), !g.isRange(no, Math.min(g.getSize(), no + (no - Hi) / 2), !1)) throw new pt();
        if ((Mr -= Ur * zo) % 103 !== zo) throw new ke();
        var el = xn.length;
        if (0 === el) throw new pt();
        el > 0 && ls && (xn = xn.substring(0, wt === r.CODE_CODE_C ? el - 2 : el - 1));
        for (var tu = (ie[1] + ie[0]) / 2, Ql = Hi + Sa / 2, pu = Xe.length, Id = new Uint8Array(pu), Ld = 0; Ld < pu; Ld++) Id[Ld] = Xe[Ld];
        var em = [new Or(tu, l), new Or(Ql, l)];
        return new br(xn, Id, 0, em, qo.CODE_128, new Date().getTime());
      }, r.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], r.MAX_AVG_VARIANCE = .25, r.MAX_INDIVIDUAL_VARIANCE = .7, r.CODE_SHIFT = 98, r.CODE_CODE_C = 99, r.CODE_CODE_B = 100, r.CODE_CODE_A = 101, r.CODE_FNC_1 = 102, r.CODE_FNC_2 = 97, r.CODE_FNC_3 = 96, r.CODE_FNC_4_A = 101, r.CODE_FNC_4_B = 100, r.CODE_START_A = 103, r.CODE_START_B = 104, r.CODE_START_C = 105, r.CODE_STOP = 106, r;
    }(ha);
  const na = da;
  var Qs = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ma = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Xs = function (p) {
      function r(l, g) {
        void 0 === l && (l = !1), void 0 === g && (g = !1);
        var S = p.call(this) || this;
        return S.usingCheckDigit = l, S.extendedMode = g, S.decodeRowResult = "", S.counters = new Int32Array(9), S;
      }
      return Qs(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H,
          ie,
          de,
          Oe,
          Xe = this.counters;
        Xe.fill(0), this.decodeRowResult = "";
        var xn,
          Hi,
          wt = r.findAsteriskPattern(g, Xe),
          Lt = g.getNextSet(wt[1]),
          cn = g.getSize();
        do {
          r.recordPattern(g, Lt, Xe);
          var no = r.toNarrowWidePattern(Xe);
          if (no < 0) throw new pt();
          xn = r.patternToChar(no), this.decodeRowResult += xn, Hi = Lt;
          try {
            for (var Ho = (H = void 0, ma(Xe)), zo = Ho.next(); !zo.done; zo = Ho.next()) Lt += zo.value;
          } catch (pu) {
            H = {
              error: pu
            };
          } finally {
            try {
              zo && !zo.done && (ie = Ho.return) && ie.call(Ho);
            } finally {
              if (H) throw H.error;
            }
          }
          Lt = g.getNextSet(Lt);
        } while ("*" !== xn);
        this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
        var el,
          Mr = 0;
        try {
          for (var Ur = ma(Xe), ls = Ur.next(); !ls.done; ls = Ur.next()) Mr += ls.value;
        } catch (pu) {
          de = {
            error: pu
          };
        } finally {
          try {
            ls && !ls.done && (Oe = Ur.return) && Oe.call(Ur);
          } finally {
            if (de) throw de.error;
          }
        }
        if (Lt !== cn && 2 * (Lt - Hi - Mr) < Mr) throw new pt();
        if (this.usingCheckDigit) {
          for (var Is = this.decodeRowResult.length - 1, Ys = 0, Sa = 0; Sa < Is; Sa++) Ys += r.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(Sa));
          if (this.decodeRowResult.charAt(Is) !== r.ALPHABET_STRING.charAt(Ys % 43)) throw new ke();
          this.decodeRowResult = this.decodeRowResult.substring(0, Is);
        }
        if (0 === this.decodeRowResult.length) throw new pt();
        el = this.extendedMode ? r.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
        var Ql = Hi + Mr / 2;
        return new br(el, null, 0, [new Or((wt[1] + wt[0]) / 2, l), new Or(Ql, l)], qo.CODE_39, new Date().getTime());
      }, r.findAsteriskPattern = function (l, g) {
        for (var S = l.getSize(), H = l.getNextSet(0), ie = 0, de = H, Oe = !1, Xe = g.length, wt = H; wt < S; wt++) if (l.get(wt) !== Oe) g[ie]++;else {
          if (ie === Xe - 1) {
            if (this.toNarrowWidePattern(g) === r.ASTERISK_ENCODING && l.isRange(Math.max(0, de - Math.floor((wt - de) / 2)), de, !1)) return [de, wt];
            de += g[0] + g[1], g.copyWithin(0, 2, 2 + ie - 1), g[ie - 1] = 0, g[ie] = 0, ie--;
          } else ie++;
          g[ie] = 1, Oe = !Oe;
        }
        throw new pt();
      }, r.toNarrowWidePattern = function (l) {
        var g,
          S,
          de,
          H = l.length,
          ie = 0;
        do {
          var Oe = 2147483647;
          try {
            for (var Xe = (g = void 0, ma(l)), wt = Xe.next(); !wt.done; wt = Xe.next()) (Lt = wt.value) < Oe && Lt > ie && (Oe = Lt);
          } catch (no) {
            g = {
              error: no
            };
          } finally {
            try {
              wt && !wt.done && (S = Xe.return) && S.call(Xe);
            } finally {
              if (g) throw g.error;
            }
          }
          ie = Oe, de = 0;
          for (var cn = 0, xn = 0, Hi = 0; Hi < H; Hi++) (Lt = l[Hi]) > ie && (xn |= 1 << H - 1 - Hi, de++, cn += Lt);
          if (3 === de) {
            for (Hi = 0; Hi < H && de > 0; Hi++) {
              var Lt;
              if ((Lt = l[Hi]) > ie && (de--, 2 * Lt >= cn)) return -1;
            }
            return xn;
          }
        } while (de > 3);
        return -1;
      }, r.patternToChar = function (l) {
        for (var g = 0; g < r.CHARACTER_ENCODINGS.length; g++) if (r.CHARACTER_ENCODINGS[g] === l) return r.ALPHABET_STRING.charAt(g);
        if (l === r.ASTERISK_ENCODING) return "*";
        throw new pt();
      }, r.decodeExtended = function (l) {
        for (var g = l.length, S = "", H = 0; H < g; H++) {
          var ie = l.charAt(H);
          if ("+" === ie || "$" === ie || "%" === ie || "/" === ie) {
            var de = l.charAt(H + 1),
              Oe = "\0";
            switch (ie) {
              case "+":
                if (!(de >= "A" && de <= "Z")) throw new Ft();
                Oe = String.fromCharCode(de.charCodeAt(0) + 32);
                break;
              case "$":
                if (!(de >= "A" && de <= "Z")) throw new Ft();
                Oe = String.fromCharCode(de.charCodeAt(0) - 64);
                break;
              case "%":
                if (de >= "A" && de <= "E") Oe = String.fromCharCode(de.charCodeAt(0) - 38);else if (de >= "F" && de <= "J") Oe = String.fromCharCode(de.charCodeAt(0) - 11);else if (de >= "K" && de <= "O") Oe = String.fromCharCode(de.charCodeAt(0) + 16);else if (de >= "P" && de <= "T") Oe = String.fromCharCode(de.charCodeAt(0) + 43);else if ("U" === de) Oe = "\0";else if ("V" === de) Oe = "@";else if ("W" === de) Oe = "`";else {
                  if ("X" !== de && "Y" !== de && "Z" !== de) throw new Ft();
                  Oe = "";
                }
                break;
              case "/":
                if (de >= "A" && de <= "O") Oe = String.fromCharCode(de.charCodeAt(0) - 32);else {
                  if ("Z" !== de) throw new Ft();
                  Oe = ":";
                }
            }
            S += Oe, H++;
          } else S += ie;
        }
        return S;
      }, r.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", r.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], r.ASTERISK_ENCODING = 148, r;
    }(ha);
  const Ks = Xs;
  var Va = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ba = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    qs = function (p) {
      function r() {
        var l = p.call(this) || this;
        return l.decodeRowResult = "", l.counters = new Int32Array(6), l;
      }
      return Va(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H,
          ie,
          de,
          Oe,
          xn,
          Hi,
          Xe = this.findAsteriskPattern(g),
          wt = g.getNextSet(Xe[1]),
          Lt = g.getSize(),
          cn = this.counters;
        cn.fill(0), this.decodeRowResult = "";
        do {
          r.recordPattern(g, wt, cn);
          var no = this.toPattern(cn);
          if (no < 0) throw new pt();
          xn = this.patternToChar(no), this.decodeRowResult += xn, Hi = wt;
          try {
            for (var Ho = (H = void 0, ba(cn)), zo = Ho.next(); !zo.done; zo = Ho.next()) wt += zo.value;
          } catch (Sa) {
            H = {
              error: Sa
            };
          } finally {
            try {
              zo && !zo.done && (ie = Ho.return) && ie.call(Ho);
            } finally {
              if (H) throw H.error;
            }
          }
          wt = g.getNextSet(wt);
        } while ("*" !== xn);
        this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
        var Mr = 0;
        try {
          for (var Ur = ba(cn), ls = Ur.next(); !ls.done; ls = Ur.next()) Mr += ls.value;
        } catch (Sa) {
          de = {
            error: Sa
          };
        } finally {
          try {
            ls && !ls.done && (Oe = Ur.return) && Oe.call(Ur);
          } finally {
            if (de) throw de.error;
          }
        }
        if (wt === Lt || !g.get(wt)) throw new pt();
        if (this.decodeRowResult.length < 2) throw new pt();
        this.checkChecksums(this.decodeRowResult), this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
        var Ss = this.decodeExtended(this.decodeRowResult),
          Ys = Hi + Mr / 2;
        return new br(Ss, null, 0, [new Or((Xe[1] + Xe[0]) / 2, l), new Or(Ys, l)], qo.CODE_93, new Date().getTime());
      }, r.prototype.findAsteriskPattern = function (l) {
        var g = l.getSize(),
          S = l.getNextSet(0);
        this.counters.fill(0);
        for (var H = this.counters, ie = S, de = !1, Oe = H.length, Xe = 0, wt = S; wt < g; wt++) if (l.get(wt) !== de) H[Xe]++;else {
          if (Xe === Oe - 1) {
            if (this.toPattern(H) === r.ASTERISK_ENCODING) return new Int32Array([ie, wt]);
            ie += H[0] + H[1], H.copyWithin(0, 2, 2 + Xe - 1), H[Xe - 1] = 0, H[Xe] = 0, Xe--;
          } else Xe++;
          H[Xe] = 1, de = !de;
        }
        throw new pt();
      }, r.prototype.toPattern = function (l) {
        var g,
          S,
          H = 0;
        try {
          for (var ie = ba(l), de = ie.next(); !de.done; de = ie.next()) H += de.value;
        } catch (Hi) {
          g = {
            error: Hi
          };
        } finally {
          try {
            de && !de.done && (S = ie.return) && S.call(ie);
          } finally {
            if (g) throw g.error;
          }
        }
        for (var Xe = 0, wt = l.length, Lt = 0; Lt < wt; Lt++) {
          var cn = Math.round(9 * l[Lt] / H);
          if (cn < 1 || cn > 4) return -1;
          if (1 & Lt) Xe <<= cn;else for (var xn = 0; xn < cn; xn++) Xe = Xe << 1 | 1;
        }
        return Xe;
      }, r.prototype.patternToChar = function (l) {
        for (var g = 0; g < r.CHARACTER_ENCODINGS.length; g++) if (r.CHARACTER_ENCODINGS[g] === l) return r.ALPHABET_STRING.charAt(g);
        throw new pt();
      }, r.prototype.decodeExtended = function (l) {
        for (var g = l.length, S = "", H = 0; H < g; H++) {
          var ie = l.charAt(H);
          if (ie >= "a" && ie <= "d") {
            if (H >= g - 1) throw new Ft();
            var de = l.charAt(H + 1),
              Oe = "\0";
            switch (ie) {
              case "d":
                if (!(de >= "A" && de <= "Z")) throw new Ft();
                Oe = String.fromCharCode(de.charCodeAt(0) + 32);
                break;
              case "a":
                if (!(de >= "A" && de <= "Z")) throw new Ft();
                Oe = String.fromCharCode(de.charCodeAt(0) - 64);
                break;
              case "b":
                if (de >= "A" && de <= "E") Oe = String.fromCharCode(de.charCodeAt(0) - 38);else if (de >= "F" && de <= "J") Oe = String.fromCharCode(de.charCodeAt(0) - 11);else if (de >= "K" && de <= "O") Oe = String.fromCharCode(de.charCodeAt(0) + 16);else if (de >= "P" && de <= "T") Oe = String.fromCharCode(de.charCodeAt(0) + 43);else if ("U" === de) Oe = "\0";else if ("V" === de) Oe = "@";else if ("W" === de) Oe = "`";else {
                  if (!(de >= "X" && de <= "Z")) throw new Ft();
                  Oe = String.fromCharCode(127);
                }
                break;
              case "c":
                if (de >= "A" && de <= "O") Oe = String.fromCharCode(de.charCodeAt(0) - 32);else {
                  if ("Z" !== de) throw new Ft();
                  Oe = ":";
                }
            }
            S += Oe, H++;
          } else S += ie;
        }
        return S;
      }, r.prototype.checkChecksums = function (l) {
        var g = l.length;
        this.checkOneChecksum(l, g - 2, 20), this.checkOneChecksum(l, g - 1, 15);
      }, r.prototype.checkOneChecksum = function (l, g, S) {
        for (var H = 1, ie = 0, de = g - 1; de >= 0; de--) ie += H * r.ALPHABET_STRING.indexOf(l.charAt(de)), ++H > S && (H = 1);
        if (l.charAt(g) !== r.ALPHABET_STRING[ie % 47]) throw new ke();
      }, r.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", r.ASTERISK_ENCODING = (r.CHARACTER_ENCODINGS = [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350])[47], r;
    }(ha);
  const Ri = qs;
  var $o = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Gi = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.narrowLineWidth = -1, l;
      }
      return $o(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H,
          ie,
          de = this.decodeStart(g),
          Oe = this.decodeEnd(g),
          Xe = new Ii();
        r.decodeMiddle(g, de[1], Oe[0], Xe);
        var wt = Xe.toString(),
          Lt = null;
        null != S && (Lt = S.get(mt.ALLOWED_LENGTHS)), null == Lt && (Lt = r.DEFAULT_ALLOWED_LENGTHS);
        var cn = wt.length,
          xn = !1,
          Hi = 0;
        try {
          for (var no = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(Lt), Ho = no.next(); !Ho.done; Ho = no.next()) {
            var zo = Ho.value;
            if (cn === zo) {
              xn = !0;
              break;
            }
            zo > Hi && (Hi = zo);
          }
        } catch (Ur) {
          H = {
            error: Ur
          };
        } finally {
          try {
            Ho && !Ho.done && (ie = no.return) && ie.call(no);
          } finally {
            if (H) throw H.error;
          }
        }
        if (!xn && cn > Hi && (xn = !0), !xn) throw new Ft();
        var Bo = [new Or(de[1], l), new Or(Oe[0], l)];
        return new br(wt, null, 0, Bo, qo.ITF, new Date().getTime());
      }, r.decodeMiddle = function (l, g, S, H) {
        var ie = new Int32Array(10),
          de = new Int32Array(5),
          Oe = new Int32Array(5);
        for (ie.fill(0), de.fill(0), Oe.fill(0); g < S;) {
          ha.recordPattern(l, g, ie);
          for (var Xe = 0; Xe < 5; Xe++) {
            var wt = 2 * Xe;
            de[Xe] = ie[wt], Oe[Xe] = ie[wt + 1];
          }
          var Lt = r.decodeDigit(de);
          H.append(Lt.toString()), Lt = this.decodeDigit(Oe), H.append(Lt.toString()), ie.forEach(function (cn) {
            g += cn;
          });
        }
      }, r.prototype.decodeStart = function (l) {
        var g = r.skipWhiteSpace(l),
          S = r.findGuardPattern(l, g, r.START_PATTERN);
        return this.narrowLineWidth = (S[1] - S[0]) / 4, this.validateQuietZone(l, S[0]), S;
      }, r.prototype.validateQuietZone = function (l, g) {
        var S = 10 * this.narrowLineWidth;
        S = S < g ? S : g;
        for (var H = g - 1; S > 0 && H >= 0 && !l.get(H); H--) S--;
        if (0 !== S) throw new pt();
      }, r.skipWhiteSpace = function (l) {
        var g = l.getSize(),
          S = l.getNextSet(0);
        if (S === g) throw new pt();
        return S;
      }, r.prototype.decodeEnd = function (l) {
        l.reverse();
        try {
          var g = r.skipWhiteSpace(l),
            S = void 0;
          try {
            S = r.findGuardPattern(l, g, r.END_PATTERN_REVERSED[0]);
          } catch (ie) {
            ie instanceof pt && (S = r.findGuardPattern(l, g, r.END_PATTERN_REVERSED[1]));
          }
          this.validateQuietZone(l, S[0]);
          var H = S[0];
          return S[0] = l.getSize() - S[1], S[1] = l.getSize() - H, S;
        } finally {
          l.reverse();
        }
      }, r.findGuardPattern = function (l, g, S) {
        var H = S.length,
          ie = new Int32Array(H),
          de = l.getSize(),
          Oe = !1,
          Xe = 0,
          wt = g;
        ie.fill(0);
        for (var Lt = g; Lt < de; Lt++) if (l.get(Lt) !== Oe) ie[Xe]++;else {
          if (Xe === H - 1) {
            if (ha.patternMatchVariance(ie, S, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE) return [wt, Lt];
            wt += ie[0] + ie[1], ae.arraycopy(ie, 2, ie, 0, Xe - 1), ie[Xe - 1] = 0, ie[Xe] = 0, Xe--;
          } else Xe++;
          ie[Xe] = 1, Oe = !Oe;
        }
        throw new pt();
      }, r.decodeDigit = function (l) {
        for (var g = r.MAX_AVG_VARIANCE, S = -1, H = r.PATTERNS.length, ie = 0; ie < H; ie++) {
          var Oe = ha.patternMatchVariance(l, r.PATTERNS[ie], r.MAX_INDIVIDUAL_VARIANCE);
          Oe < g ? (g = Oe, S = ie) : Oe === g && (S = -1);
        }
        if (S >= 0) return S % 10;
        throw new pt();
      }, r.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], r.MAX_AVG_VARIANCE = .38, r.MAX_INDIVIDUAL_VARIANCE = .5, r.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], r.START_PATTERN = Int32Array.from([1, 1, 1, 1]), r.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])], r;
    }(ha);
  const Fn = Gi;
  var zi = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Io = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.decodeRowStringBuffer = "", l;
      }
      return zi(r, p), r.findStartGuardPattern = function (l) {
        for (var S, g = !1, H = 0, ie = Int32Array.from([0, 0, 0]); !g;) {
          ie = Int32Array.from([0, 0, 0]);
          var de = (S = r.findGuardPattern(l, H, !1, this.START_END_PATTERN, ie))[0],
            Oe = de - ((H = S[1]) - de);
          Oe >= 0 && (g = l.isRange(Oe, de, !1));
        }
        return S;
      }, r.checkChecksum = function (l) {
        return r.checkStandardUPCEANChecksum(l);
      }, r.checkStandardUPCEANChecksum = function (l) {
        var g = l.length;
        if (0 === g) return !1;
        var S = parseInt(l.charAt(g - 1), 10);
        return r.getStandardUPCEANChecksum(l.substring(0, g - 1)) === S;
      }, r.getStandardUPCEANChecksum = function (l) {
        for (var g = l.length, S = 0, H = g - 1; H >= 0; H -= 2) {
          if ((ie = l.charAt(H).charCodeAt(0) - "0".charCodeAt(0)) < 0 || ie > 9) throw new Ft();
          S += ie;
        }
        for (S *= 3, H = g - 2; H >= 0; H -= 2) {
          var ie;
          if ((ie = l.charAt(H).charCodeAt(0) - "0".charCodeAt(0)) < 0 || ie > 9) throw new Ft();
          S += ie;
        }
        return (1e3 - S) % 10;
      }, r.decodeEnd = function (l, g) {
        return r.findGuardPattern(l, g, !1, r.START_END_PATTERN, new Int32Array(r.START_END_PATTERN.length).fill(0));
      }, r.findGuardPatternWithoutCounters = function (l, g, S, H) {
        return this.findGuardPattern(l, g, S, H, new Int32Array(H.length));
      }, r.findGuardPattern = function (l, g, S, H, ie) {
        for (var de = l.getSize(), Oe = 0, Xe = g = S ? l.getNextUnset(g) : l.getNextSet(g), wt = H.length, Lt = S, cn = g; cn < de; cn++) if (l.get(cn) !== Lt) ie[Oe]++;else {
          if (Oe === wt - 1) {
            if (ha.patternMatchVariance(ie, H, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE) return Int32Array.from([Xe, cn]);
            Xe += ie[0] + ie[1];
            for (var xn = ie.slice(2, ie.length), Hi = 0; Hi < Oe - 1; Hi++) ie[Hi] = xn[Hi];
            ie[Oe - 1] = 0, ie[Oe] = 0, Oe--;
          } else Oe++;
          ie[Oe] = 1, Lt = !Lt;
        }
        throw new pt();
      }, r.decodeDigit = function (l, g, S, H) {
        this.recordPattern(l, S, g);
        for (var ie = this.MAX_AVG_VARIANCE, de = -1, Oe = H.length, Xe = 0; Xe < Oe; Xe++) {
          var Lt = ha.patternMatchVariance(g, H[Xe], r.MAX_INDIVIDUAL_VARIANCE);
          Lt < ie && (ie = Lt, de = Xe);
        }
        if (de >= 0) return de;
        throw new pt();
      }, r.MAX_AVG_VARIANCE = .48, r.MAX_INDIVIDUAL_VARIANCE = .7, r.START_END_PATTERN = Int32Array.from([1, 1, 1]), r.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), r.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), r.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])], r;
    }(ha);
  const gi = Io;
  var Kt = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Vt = function () {
      function p() {
        this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
      }
      return p.prototype.decodeRow = function (r, l, g) {
        var S = this.decodeRowStringBuffer,
          H = this.decodeMiddle(l, g, S),
          ie = S.toString(),
          de = p.parseExtensionString(ie),
          Oe = [new Or((g[0] + g[1]) / 2, r), new Or(H, r)],
          Xe = new br(ie, null, 0, Oe, qo.UPC_EAN_EXTENSION, new Date().getTime());
        return null != de && Xe.putAllMetadata(de), Xe;
      }, p.prototype.decodeMiddle = function (r, l, g) {
        var S,
          H,
          ie = this.decodeMiddleCounters;
        ie[0] = 0, ie[1] = 0, ie[2] = 0, ie[3] = 0;
        for (var de = r.getSize(), Oe = l[1], Xe = 0, wt = 0; wt < 5 && Oe < de; wt++) {
          var Lt = gi.decodeDigit(r, ie, Oe, gi.L_AND_G_PATTERNS);
          g += String.fromCharCode("0".charCodeAt(0) + Lt % 10);
          try {
            for (var cn = (S = void 0, Kt(ie)), xn = cn.next(); !xn.done; xn = cn.next()) Oe += xn.value;
          } catch (Ho) {
            S = {
              error: Ho
            };
          } finally {
            try {
              xn && !xn.done && (H = cn.return) && H.call(cn);
            } finally {
              if (S) throw S.error;
            }
          }
          Lt >= 10 && (Xe |= 1 << 4 - wt), 4 !== wt && (Oe = r.getNextSet(Oe), Oe = r.getNextUnset(Oe));
        }
        if (5 !== g.length) throw new pt();
        var no = this.determineCheckDigit(Xe);
        if (p.extensionChecksum(g.toString()) !== no) throw new pt();
        return Oe;
      }, p.extensionChecksum = function (r) {
        for (var l = r.length, g = 0, S = l - 2; S >= 0; S -= 2) g += r.charAt(S).charCodeAt(0) - "0".charCodeAt(0);
        for (g *= 3, S = l - 1; S >= 0; S -= 2) g += r.charAt(S).charCodeAt(0) - "0".charCodeAt(0);
        return (g *= 3) % 10;
      }, p.prototype.determineCheckDigit = function (r) {
        for (var l = 0; l < 10; l++) if (r === this.CHECK_DIGIT_ENCODINGS[l]) return l;
        throw new pt();
      }, p.parseExtensionString = function (r) {
        if (5 !== r.length) return null;
        var l = p.parseExtension5String(r);
        return null == l ? null : new Map([[wr.SUGGESTED_PRICE, l]]);
      }, p.parseExtension5String = function (r) {
        var l;
        switch (r.charAt(0)) {
          case "0":
            l = "£";
            break;
          case "5":
            l = "$";
            break;
          case "9":
            switch (r) {
              case "90000":
                return null;
              case "99991":
                return "0.00";
              case "99990":
                return "Used";
            }
            l = "";
            break;
          default:
            l = "";
        }
        var g = parseInt(r.substring(1)),
          H = g % 100;
        return l + (g / 100).toString() + "." + (H < 10 ? "0" + H : H.toString());
      }, p;
    }();
  const Pn = Vt;
  var pi = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    xo = function () {
      function p() {
        this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
      }
      return p.prototype.decodeRow = function (r, l, g) {
        var S = this.decodeRowStringBuffer,
          H = this.decodeMiddle(l, g, S),
          ie = S.toString(),
          de = p.parseExtensionString(ie),
          Oe = [new Or((g[0] + g[1]) / 2, r), new Or(H, r)],
          Xe = new br(ie, null, 0, Oe, qo.UPC_EAN_EXTENSION, new Date().getTime());
        return null != de && Xe.putAllMetadata(de), Xe;
      }, p.prototype.decodeMiddle = function (r, l, g) {
        var S,
          H,
          ie = this.decodeMiddleCounters;
        ie[0] = 0, ie[1] = 0, ie[2] = 0, ie[3] = 0;
        for (var de = r.getSize(), Oe = l[1], Xe = 0, wt = 0; wt < 2 && Oe < de; wt++) {
          var Lt = gi.decodeDigit(r, ie, Oe, gi.L_AND_G_PATTERNS);
          g += String.fromCharCode("0".charCodeAt(0) + Lt % 10);
          try {
            for (var cn = (S = void 0, pi(ie)), xn = cn.next(); !xn.done; xn = cn.next()) Oe += xn.value;
          } catch (no) {
            S = {
              error: no
            };
          } finally {
            try {
              xn && !xn.done && (H = cn.return) && H.call(cn);
            } finally {
              if (S) throw S.error;
            }
          }
          Lt >= 10 && (Xe |= 1 << 1 - wt), 1 !== wt && (Oe = r.getNextSet(Oe), Oe = r.getNextUnset(Oe));
        }
        if (2 !== g.length) throw new pt();
        if (parseInt(g.toString()) % 4 !== Xe) throw new pt();
        return Oe;
      }, p.parseExtensionString = function (r) {
        return 2 !== r.length ? null : new Map([[wr.ISSUE_NUMBER, parseInt(r)]]);
      }, p;
    }();
  const No = xo;
  var Ko = function () {
    function p() {}
    return p.decodeRow = function (r, l, g) {
      var S = gi.findGuardPattern(l, g, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
      try {
        return new Pn().decodeRow(r, l, S);
      } catch {
        return new No().decodeRow(r, l, S);
      }
    }, p.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), p;
  }();
  const Mi = Ko;
  var It = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    At = function (p) {
      function r() {
        var l = p.call(this) || this;
        l.decodeRowStringBuffer = "", r.L_AND_G_PATTERNS = r.L_PATTERNS.map(function (de) {
          return Int32Array.from(de);
        });
        for (var g = 10; g < 20; g++) {
          for (var S = r.L_PATTERNS[g - 10], H = new Int32Array(S.length), ie = 0; ie < S.length; ie++) H[ie] = S[S.length - ie - 1];
          r.L_AND_G_PATTERNS[g] = H;
        }
        return l;
      }
      return It(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H = r.findStartGuardPattern(g),
          ie = null == S ? null : S.get(mt.NEED_RESULT_POINT_CALLBACK);
        if (null != ie) {
          var de = new Or((H[0] + H[1]) / 2, l);
          ie.foundPossibleResultPoint(de);
        }
        var Oe = this.decodeMiddle(g, H, this.decodeRowStringBuffer),
          Xe = Oe.rowOffset,
          wt = Oe.resultString;
        if (null != ie) {
          var Lt = new Or(Xe, l);
          ie.foundPossibleResultPoint(Lt);
        }
        var cn = r.decodeEnd(g, Xe);
        if (null != ie) {
          var xn = new Or((cn[0] + cn[1]) / 2, l);
          ie.foundPossibleResultPoint(xn);
        }
        var Hi = cn[1],
          no = Hi + (Hi - cn[0]);
        if (no >= g.getSize() || !g.isRange(Hi, no, !1)) throw new pt();
        var Ho = wt.toString();
        if (Ho.length < 8) throw new Ft();
        if (!r.checkChecksum(Ho)) throw new ke();
        var zo = (H[1] + H[0]) / 2,
          Bo = (cn[1] + cn[0]) / 2,
          Mr = this.getBarcodeFormat(),
          Ur = [new Or(zo, l), new Or(Bo, l)],
          ls = new br(Ho, null, 0, Ur, Mr, new Date().getTime()),
          Ss = 0;
        try {
          var Is = Mi.decodeRow(l, g, cn[1]);
          ls.putMetadata(wr.UPC_EAN_EXTENSION, Is.getText()), ls.putAllMetadata(Is.getResultMetadata()), ls.addResultPoints(Is.getResultPoints()), Ss = Is.getText().length;
        } catch {}
        var Ys = null == S ? null : S.get(mt.ALLOWED_EAN_EXTENSIONS);
        if (null != Ys) {
          var Sa = !1;
          for (var el in Ys) if (Ss.toString() === el) {
            Sa = !0;
            break;
          }
          if (!Sa) throw new pt();
        }
        return ls;
      }, r.checkChecksum = function (l) {
        return r.checkStandardUPCEANChecksum(l);
      }, r.checkStandardUPCEANChecksum = function (l) {
        var g = l.length;
        if (0 === g) return !1;
        var S = parseInt(l.charAt(g - 1), 10);
        return r.getStandardUPCEANChecksum(l.substring(0, g - 1)) === S;
      }, r.getStandardUPCEANChecksum = function (l) {
        for (var g = l.length, S = 0, H = g - 1; H >= 0; H -= 2) {
          if ((ie = l.charAt(H).charCodeAt(0) - "0".charCodeAt(0)) < 0 || ie > 9) throw new Ft();
          S += ie;
        }
        for (S *= 3, H = g - 2; H >= 0; H -= 2) {
          var ie;
          if ((ie = l.charAt(H).charCodeAt(0) - "0".charCodeAt(0)) < 0 || ie > 9) throw new Ft();
          S += ie;
        }
        return (1e3 - S) % 10;
      }, r.decodeEnd = function (l, g) {
        return r.findGuardPattern(l, g, !1, r.START_END_PATTERN, new Int32Array(r.START_END_PATTERN.length).fill(0));
      }, r;
    }(gi);
  const _n = At;
  var it = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    _e = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    gt = function (p) {
      function r() {
        var l = p.call(this) || this;
        return l.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), l;
      }
      return it(r, p), r.prototype.decodeMiddle = function (l, g, S) {
        var H,
          ie,
          de,
          Oe,
          Xe = this.decodeMiddleCounters;
        Xe[0] = 0, Xe[1] = 0, Xe[2] = 0, Xe[3] = 0;
        for (var wt = l.getSize(), Lt = g[1], cn = 0, xn = 0; xn < 6 && Lt < wt; xn++) {
          var Hi = _n.decodeDigit(l, Xe, Lt, _n.L_AND_G_PATTERNS);
          S += String.fromCharCode("0".charCodeAt(0) + Hi % 10);
          try {
            for (var no = (H = void 0, _e(Xe)), Ho = no.next(); !Ho.done; Ho = no.next()) Lt += Ho.value;
          } catch (ls) {
            H = {
              error: ls
            };
          } finally {
            try {
              Ho && !Ho.done && (ie = no.return) && ie.call(no);
            } finally {
              if (H) throw H.error;
            }
          }
          Hi >= 10 && (cn |= 1 << 5 - xn);
        }
        for (S = r.determineFirstDigit(S, cn), Lt = _n.findGuardPattern(l, Lt, !0, _n.MIDDLE_PATTERN, new Int32Array(_n.MIDDLE_PATTERN.length).fill(0))[1], xn = 0; xn < 6 && Lt < wt; xn++) {
          Hi = _n.decodeDigit(l, Xe, Lt, _n.L_PATTERNS), S += String.fromCharCode("0".charCodeAt(0) + Hi);
          try {
            for (var Mr = (de = void 0, _e(Xe)), Ur = Mr.next(); !Ur.done; Ur = Mr.next()) Lt += Ur.value;
          } catch (Is) {
            de = {
              error: Is
            };
          } finally {
            try {
              Ur && !Ur.done && (Oe = Mr.return) && Oe.call(Mr);
            } finally {
              if (de) throw de.error;
            }
          }
        }
        return {
          rowOffset: Lt,
          resultString: S
        };
      }, r.prototype.getBarcodeFormat = function () {
        return qo.EAN_13;
      }, r.determineFirstDigit = function (l, g) {
        for (var S = 0; S < 10; S++) if (g === this.FIRST_DIGIT_ENCODINGS[S]) return String.fromCharCode("0".charCodeAt(0) + S) + l;
        throw new pt();
      }, r.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], r;
    }(_n);
  const ni = gt;
  var So = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Er = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Br = function (p) {
      function r() {
        var l = p.call(this) || this;
        return l.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), l;
      }
      return So(r, p), r.prototype.decodeMiddle = function (l, g, S) {
        var H,
          ie,
          de,
          Oe,
          Xe = this.decodeMiddleCounters;
        Xe[0] = 0, Xe[1] = 0, Xe[2] = 0, Xe[3] = 0;
        for (var wt = l.getSize(), Lt = g[1], cn = 0; cn < 4 && Lt < wt; cn++) {
          var xn = _n.decodeDigit(l, Xe, Lt, _n.L_PATTERNS);
          S += String.fromCharCode("0".charCodeAt(0) + xn);
          try {
            for (var Hi = (H = void 0, Er(Xe)), no = Hi.next(); !no.done; no = Hi.next()) Lt += no.value;
          } catch (Ur) {
            H = {
              error: Ur
            };
          } finally {
            try {
              no && !no.done && (ie = Hi.return) && ie.call(Hi);
            } finally {
              if (H) throw H.error;
            }
          }
        }
        for (Lt = _n.findGuardPattern(l, Lt, !0, _n.MIDDLE_PATTERN, new Int32Array(_n.MIDDLE_PATTERN.length).fill(0))[1], cn = 0; cn < 4 && Lt < wt; cn++) {
          xn = _n.decodeDigit(l, Xe, Lt, _n.L_PATTERNS), S += String.fromCharCode("0".charCodeAt(0) + xn);
          try {
            for (var Bo = (de = void 0, Er(Xe)), Mr = Bo.next(); !Mr.done; Mr = Bo.next()) Lt += Mr.value;
          } catch (Ss) {
            de = {
              error: Ss
            };
          } finally {
            try {
              Mr && !Mr.done && (Oe = Bo.return) && Oe.call(Bo);
            } finally {
              if (de) throw de.error;
            }
          }
        }
        return {
          rowOffset: Lt,
          resultString: S
        };
      }, r.prototype.getBarcodeFormat = function () {
        return qo.EAN_8;
      }, r;
    }(_n);
  const vr = Br;
  var zr = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ks = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.ean13Reader = new ni(), l;
      }
      return zr(r, p), r.prototype.getBarcodeFormat = function () {
        return qo.UPC_A;
      }, r.prototype.decode = function (l, g) {
        return this.maybeReturnResult(this.ean13Reader.decode(l));
      }, r.prototype.decodeRow = function (l, g, S) {
        return this.maybeReturnResult(this.ean13Reader.decodeRow(l, g, S));
      }, r.prototype.decodeMiddle = function (l, g, S) {
        return this.ean13Reader.decodeMiddle(l, g, S);
      }, r.prototype.maybeReturnResult = function (l) {
        var g = l.getText();
        if ("0" === g.charAt(0)) {
          var S = new br(g.substring(1), null, null, l.getResultPoints(), qo.UPC_A);
          return null != l.getResultMetadata() && S.putAllMetadata(l.getResultMetadata()), S;
        }
        throw new pt();
      }, r.prototype.reset = function () {
        this.ean13Reader.reset();
      }, r;
    }(_n);
  const aa = ks;
  var Ka = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ja = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    ul = function (p) {
      function r() {
        var l = p.call(this) || this;
        return l.decodeMiddleCounters = new Int32Array(4), l;
      }
      return Ka(r, p), r.prototype.decodeMiddle = function (l, g, S) {
        var H,
          ie,
          de = this.decodeMiddleCounters.map(function (Ho) {
            return Ho;
          });
        de[0] = 0, de[1] = 0, de[2] = 0, de[3] = 0;
        for (var Oe = l.getSize(), Xe = g[1], wt = 0, Lt = 0; Lt < 6 && Xe < Oe; Lt++) {
          var cn = r.decodeDigit(l, de, Xe, r.L_AND_G_PATTERNS);
          S += String.fromCharCode("0".charCodeAt(0) + cn % 10);
          try {
            for (var xn = (H = void 0, ja(de)), Hi = xn.next(); !Hi.done; Hi = xn.next()) Xe += Hi.value;
          } catch (Ho) {
            H = {
              error: Ho
            };
          } finally {
            try {
              Hi && !Hi.done && (ie = xn.return) && ie.call(xn);
            } finally {
              if (H) throw H.error;
            }
          }
          cn >= 10 && (wt |= 1 << 5 - Lt);
        }
        return r.determineNumSysAndCheckDigit(new Ii(S), wt), Xe;
      }, r.prototype.decodeEnd = function (l, g) {
        return r.findGuardPatternWithoutCounters(l, g, !0, r.MIDDLE_END_PATTERN);
      }, r.prototype.checkChecksum = function (l) {
        return _n.checkChecksum(r.convertUPCEtoUPCA(l));
      }, r.determineNumSysAndCheckDigit = function (l, g) {
        for (var S = 0; S <= 1; S++) for (var H = 0; H < 10; H++) if (g === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[S][H]) return l.insert(0, "0" + S), void l.append("0" + H);
        throw pt.getNotFoundInstance();
      }, r.prototype.getBarcodeFormat = function () {
        return qo.UPC_E;
      }, r.convertUPCEtoUPCA = function (l) {
        var g = l.slice(1, 7).split("").map(function (ie) {
            return ie.charCodeAt(0);
          }),
          S = new Ii();
        S.append(l.charAt(0));
        var H = g[5];
        switch (H) {
          case 0:
          case 1:
          case 2:
            S.appendChars(g, 0, 2), S.append(H), S.append("0000"), S.appendChars(g, 2, 3);
            break;
          case 3:
            S.appendChars(g, 0, 3), S.append("00000"), S.appendChars(g, 3, 2);
            break;
          case 4:
            S.appendChars(g, 0, 4), S.append("00000"), S.append(g[4]);
            break;
          default:
            S.appendChars(g, 0, 5), S.append("0000"), S.append(H);
        }
        return l.length >= 8 && S.append(l.charAt(7)), S.toString();
      }, r.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), r.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])], r;
    }(_n);
  const Ln = ul;
  var en = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    mi = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    ro = function (p) {
      function r(l) {
        var g = p.call(this) || this,
          S = null == l ? null : l.get(mt.POSSIBLE_FORMATS),
          H = [];
        return null != S && (S.indexOf(qo.EAN_13) > -1 && H.push(new ni()), S.indexOf(qo.UPC_A) > -1 && H.push(new aa()), S.indexOf(qo.EAN_8) > -1 && H.push(new vr()), S.indexOf(qo.UPC_E) > -1 && H.push(new Ln())), 0 === H.length && (H.push(new ni()), H.push(new aa()), H.push(new vr()), H.push(new Ln())), g.readers = H, g;
      }
      return en(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H, ie;
        try {
          for (var de = mi(this.readers), Oe = de.next(); !Oe.done; Oe = de.next()) {
            var Xe = Oe.value;
            try {
              var wt = Xe.decodeRow(l, g, S),
                Lt = wt.getBarcodeFormat() === qo.EAN_13 && "0" === wt.getText().charAt(0),
                cn = null == S ? null : S.get(mt.POSSIBLE_FORMATS),
                xn = null == cn || cn.includes(qo.UPC_A);
              if (Lt && xn) {
                var Hi = wt.getRawBytes(),
                  no = new br(wt.getText().substring(1), Hi, Hi ? Hi.length : null, wt.getResultPoints(), qo.UPC_A);
                return no.putAllMetadata(wt.getResultMetadata()), no;
              }
              return wt;
            } catch {}
          }
        } catch (Ho) {
          H = {
            error: Ho
          };
        } finally {
          try {
            Oe && !Oe.done && (ie = de.return) && ie.call(de);
          } finally {
            if (H) throw H.error;
          }
        }
        throw new pt();
      }, r.prototype.reset = function () {
        var l, g;
        try {
          for (var S = mi(this.readers), H = S.next(); !H.done; H = S.next()) H.value.reset();
        } catch (de) {
          l = {
            error: de
          };
        } finally {
          try {
            H && !H.done && (g = S.return) && g.call(S);
          } finally {
            if (l) throw l.error;
          }
        }
      }, r;
    }(ha);
  const cr = ro;
  var jr = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    as = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.CODA_BAR_CHAR_SET = {
          nnnnnww: "0",
          nnnnwwn: "1",
          nnnwnnw: "2",
          wwnnnnn: "3",
          nnwnnwn: "4",
          wnnnnwn: "5",
          nwnnnnw: "6",
          nwnnwnn: "7",
          nwwnnnn: "8",
          wnnwnnn: "9",
          nnnwwnn: "-",
          nnwwnnn: "$",
          wnnnwnw: ":",
          wnwnnnw: "/",
          wnwnwnn: ".",
          nnwwwww: "+",
          nnwwnwn: "A",
          nwnwnnw: "B",
          nnnwnww: "C",
          nnnwwwn: "D"
        }, l;
      }
      return jr(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H = this.getValidRowData(g);
        if (!H) throw new pt();
        var ie = this.codaBarDecodeRow(H.row);
        if (!ie) throw new pt();
        return new br(ie, null, 0, [new Or(H.left, l), new Or(H.right, l)], qo.CODABAR, new Date().getTime());
      }, r.prototype.getValidRowData = function (l) {
        var g = l.toArray(),
          S = g.indexOf(!0);
        if (-1 === S) return null;
        var H = g.lastIndexOf(!0);
        if (H <= S) return null;
        for (var ie = [], de = (g = g.slice(S, H + 1))[0], Oe = 1, Xe = 1; Xe < g.length; Xe++) g[Xe] === de ? Oe++ : (de = g[Xe], ie.push(Oe), Oe = 1);
        return ie.push(Oe), ie.length < 23 && (ie.length + 1) % 8 != 0 ? null : {
          row: ie,
          left: S,
          right: H
        };
      }, r.prototype.codaBarDecodeRow = function (l) {
        for (var g = [], S = Math.ceil(l.reduce(function (Oe, Xe) {
            return (Oe + Xe) / 2;
          }, 0)); l.length > 0;) {
          var ie = l.splice(0, 8).splice(0, 7).map(function (Oe) {
            return Oe < S ? "n" : "w";
          }).join("");
          if (void 0 === this.CODA_BAR_CHAR_SET[ie]) return null;
          g.push(this.CODA_BAR_CHAR_SET[ie]);
        }
        var de = g.join("");
        return this.validCodaBarString(de) ? de : null;
      }, r.prototype.validCodaBarString = function (l) {
        return /^[A-D].{1,}[A-D]$/.test(l);
      }, r;
    }(ha);
  const Da = as;
  var vo = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    dl = function (p) {
      function r() {
        var l = p.call(this) || this;
        return l.decodeFinderCounters = new Int32Array(4), l.dataCharacterCounters = new Int32Array(8), l.oddRoundingErrors = new Array(4), l.evenRoundingErrors = new Array(4), l.oddCounts = new Array(l.dataCharacterCounters.length / 2), l.evenCounts = new Array(l.dataCharacterCounters.length / 2), l;
      }
      return vo(r, p), r.prototype.getDecodeFinderCounters = function () {
        return this.decodeFinderCounters;
      }, r.prototype.getDataCharacterCounters = function () {
        return this.dataCharacterCounters;
      }, r.prototype.getOddRoundingErrors = function () {
        return this.oddRoundingErrors;
      }, r.prototype.getEvenRoundingErrors = function () {
        return this.evenRoundingErrors;
      }, r.prototype.getOddCounts = function () {
        return this.oddCounts;
      }, r.prototype.getEvenCounts = function () {
        return this.evenCounts;
      }, r.prototype.parseFinderValue = function (l, g) {
        for (var S = 0; S < g.length; S++) if (ha.patternMatchVariance(l, g[S], r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE) return S;
        throw new pt();
      }, r.count = function (l) {
        return Qo.sum(new Int32Array(l));
      }, r.increment = function (l, g) {
        for (var S = 0, H = g[0], ie = 1; ie < l.length; ie++) g[ie] > H && (H = g[ie], S = ie);
        l[S]++;
      }, r.decrement = function (l, g) {
        for (var S = 0, H = g[0], ie = 1; ie < l.length; ie++) g[ie] < H && (H = g[ie], S = ie);
        l[S]--;
      }, r.isFinderPattern = function (l) {
        var g,
          S,
          H = l[0] + l[1],
          de = H / (H + l[2] + l[3]);
        if (de >= r.MIN_FINDER_PATTERN_RATIO && de <= r.MAX_FINDER_PATTERN_RATIO) {
          var Oe = Number.MAX_SAFE_INTEGER,
            Xe = Number.MIN_SAFE_INTEGER;
          try {
            for (var wt = function (p) {
                var r = "function" == typeof Symbol && Symbol.iterator,
                  l = r && p[r],
                  g = 0;
                if (l) return l.call(p);
                if (p && "number" == typeof p.length) return {
                  next: function () {
                    return p && g >= p.length && (p = void 0), {
                      value: p && p[g++],
                      done: !p
                    };
                  }
                };
                throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
              }(l), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
              var cn = Lt.value;
              cn > Xe && (Xe = cn), cn < Oe && (Oe = cn);
            }
          } catch (xn) {
            g = {
              error: xn
            };
          } finally {
            try {
              Lt && !Lt.done && (S = wt.return) && S.call(wt);
            } finally {
              if (g) throw g.error;
            }
          }
          return Xe < 10 * Oe;
        }
        return !1;
      }, r.MAX_AVG_VARIANCE = .2, r.MAX_INDIVIDUAL_VARIANCE = .45, r.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, r.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, r;
    }(ha);
  const pn = dl;
  var sn = function () {
    function p(r, l) {
      this.value = r, this.checksumPortion = l;
    }
    return p.prototype.getValue = function () {
      return this.value;
    }, p.prototype.getChecksumPortion = function () {
      return this.checksumPortion;
    }, p.prototype.toString = function () {
      return this.value + "(" + this.checksumPortion + ")";
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.value === r.value && this.checksumPortion === r.checksumPortion;
    }, p.prototype.hashCode = function () {
      return this.value ^ this.checksumPortion;
    }, p;
  }();
  const Jt = sn;
  var Si = function () {
    function p(r, l, g, S, H) {
      this.value = r, this.startEnd = l, this.value = r, this.startEnd = l, this.resultPoints = new Array(), this.resultPoints.push(new Or(g, H)), this.resultPoints.push(new Or(S, H));
    }
    return p.prototype.getValue = function () {
      return this.value;
    }, p.prototype.getStartEnd = function () {
      return this.startEnd;
    }, p.prototype.getResultPoints = function () {
      return this.resultPoints;
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.value === r.value;
    }, p.prototype.hashCode = function () {
      return this.value;
    }, p;
  }();
  const mn = Si;
  var at = function () {
    function p() {}
    return p.getRSSvalue = function (r, l, g) {
      var S,
        H,
        ie = 0;
      try {
        for (var de = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(r), Oe = de.next(); !Oe.done; Oe = de.next()) ie += Oe.value;
      } catch (Bo) {
        S = {
          error: Bo
        };
      } finally {
        try {
          Oe && !Oe.done && (H = de.return) && H.call(de);
        } finally {
          if (S) throw S.error;
        }
      }
      for (var wt = 0, Lt = 0, cn = r.length, xn = 0; xn < cn - 1; xn++) {
        var Hi = void 0;
        for (Hi = 1, Lt |= 1 << xn; Hi < r[xn]; Hi++, Lt &= ~(1 << xn)) {
          var no = p.combins(ie - Hi - 1, cn - xn - 2);
          if (g && 0 === Lt && ie - Hi - (cn - xn - 1) >= cn - xn - 1 && (no -= p.combins(ie - Hi - (cn - xn), cn - xn - 2)), cn - xn - 1 > 1) {
            for (var Ho = 0, zo = ie - Hi - (cn - xn - 2); zo > l; zo--) Ho += p.combins(ie - Hi - zo - 1, cn - xn - 3);
            no -= Ho * (cn - 1 - xn);
          } else ie - Hi > l && no--;
          wt += no;
        }
        ie -= Hi;
      }
      return wt;
    }, p.combins = function (r, l) {
      var g, S;
      r - l > l ? (S = l, g = r - l) : (S = r - l, g = l);
      for (var H = 1, ie = 1, de = r; de > g; de--) H *= de, ie <= S && (H /= ie, ie++);
      for (; ie <= S;) H /= ie, ie++;
      return H;
    }, p;
  }();
  const Zt = at;
  var Li = function () {
    function p() {}
    return p.buildBitArray = function (r) {
      var l = 2 * r.length - 1;
      null == r[r.length - 1].getRightChar() && (l -= 1);
      for (var S = new st(12 * l), H = 0, de = r[0].getRightChar().getValue(), Oe = 11; Oe >= 0; --Oe) de & 1 << Oe && S.set(H), H++;
      for (Oe = 1; Oe < r.length; ++Oe) {
        for (var Xe = r[Oe], wt = Xe.getLeftChar().getValue(), Lt = 11; Lt >= 0; --Lt) wt & 1 << Lt && S.set(H), H++;
        if (null !== Xe.getRightChar()) {
          var cn = Xe.getRightChar().getValue();
          for (Lt = 11; Lt >= 0; --Lt) cn & 1 << Lt && S.set(H), H++;
        }
      }
      return S;
    }, p;
  }();
  const mo = Li;
  var Xo = function () {
    function p(r, l) {
      l ? this.decodedInformation = null : (this.finished = r, this.decodedInformation = l);
    }
    return p.prototype.getDecodedInformation = function () {
      return this.decodedInformation;
    }, p.prototype.isFinished = function () {
      return this.finished;
    }, p;
  }();
  const Cr = Xo;
  var Xr = function () {
    function p(r) {
      this.newPosition = r;
    }
    return p.prototype.getNewPosition = function () {
      return this.newPosition;
    }, p;
  }();
  const ys = Xr;
  var Hs = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    la = function (p) {
      function r(l, g) {
        var S = p.call(this, l) || this;
        return S.value = g, S;
      }
      return Hs(r, p), r.prototype.getValue = function () {
        return this.value;
      }, r.prototype.isFNC1 = function () {
        return this.value === r.FNC1;
      }, r.FNC1 = "$", r;
    }(ys);
  const St = la;
  var Wi = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Pt = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l) || this;
        return S ? (H.remaining = !0, H.remainingValue = H.remainingValue) : (H.remaining = !1, H.remainingValue = 0), H.newString = g, H;
      }
      return Wi(r, p), r.prototype.getNewString = function () {
        return this.newString;
      }, r.prototype.isRemaining = function () {
        return this.remaining;
      }, r.prototype.getRemainingValue = function () {
        return this.remainingValue;
      }, r;
    }(ys);
  const Ki = Pt;
  var Nr = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    oa = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l) || this;
        if (g < 0 || g > 10 || S < 0 || S > 10) throw new Ft();
        return H.firstDigit = g, H.secondDigit = S, H;
      }
      return Nr(r, p), r.prototype.getFirstDigit = function () {
        return this.firstDigit;
      }, r.prototype.getSecondDigit = function () {
        return this.secondDigit;
      }, r.prototype.getValue = function () {
        return 10 * this.firstDigit + this.secondDigit;
      }, r.prototype.isFirstDigitFNC1 = function () {
        return this.firstDigit === r.FNC1;
      }, r.prototype.isSecondDigitFNC1 = function () {
        return this.secondDigit === r.FNC1;
      }, r.prototype.isAnyFNC1 = function () {
        return this.firstDigit === r.FNC1 || this.secondDigit === r.FNC1;
      }, r.FNC1 = 10, r;
    }(ys);
  const er = oa;
  var Qr = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Il = function () {
      function p() {}
      return p.parseFieldsInGeneralPurpose = function (r) {
        var l, g, S, H, ie, de, Oe, Xe;
        if (!r) return null;
        if (r.length < 2) throw new pt();
        var wt = r.substring(0, 2);
        try {
          for (var Lt = Qr(p.TWO_DIGIT_DATA_LENGTH), cn = Lt.next(); !cn.done; cn = Lt.next()) if ((xn = cn.value)[0] === wt) return xn[1] === p.VARIABLE_LENGTH ? p.processVariableAI(2, xn[2], r) : p.processFixedAI(2, xn[1], r);
        } catch (Ss) {
          l = {
            error: Ss
          };
        } finally {
          try {
            cn && !cn.done && (g = Lt.return) && g.call(Lt);
          } finally {
            if (l) throw l.error;
          }
        }
        if (r.length < 3) throw new pt();
        var Hi = r.substring(0, 3);
        try {
          for (var no = Qr(p.THREE_DIGIT_DATA_LENGTH), Ho = no.next(); !Ho.done; Ho = no.next()) if ((xn = Ho.value)[0] === Hi) return xn[1] === p.VARIABLE_LENGTH ? p.processVariableAI(3, xn[2], r) : p.processFixedAI(3, xn[1], r);
        } catch (Ss) {
          S = {
            error: Ss
          };
        } finally {
          try {
            Ho && !Ho.done && (H = no.return) && H.call(no);
          } finally {
            if (S) throw S.error;
          }
        }
        try {
          for (var zo = Qr(p.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), Bo = zo.next(); !Bo.done; Bo = zo.next()) if ((xn = Bo.value)[0] === Hi) return xn[1] === p.VARIABLE_LENGTH ? p.processVariableAI(4, xn[2], r) : p.processFixedAI(4, xn[1], r);
        } catch (Ss) {
          ie = {
            error: Ss
          };
        } finally {
          try {
            Bo && !Bo.done && (de = zo.return) && de.call(zo);
          } finally {
            if (ie) throw ie.error;
          }
        }
        if (r.length < 4) throw new pt();
        var Mr = r.substring(0, 4);
        try {
          for (var Ur = Qr(p.FOUR_DIGIT_DATA_LENGTH), ls = Ur.next(); !ls.done; ls = Ur.next()) {
            var xn;
            if ((xn = ls.value)[0] === Mr) return xn[1] === p.VARIABLE_LENGTH ? p.processVariableAI(4, xn[2], r) : p.processFixedAI(4, xn[1], r);
          }
        } catch (Ss) {
          Oe = {
            error: Ss
          };
        } finally {
          try {
            ls && !ls.done && (Xe = Ur.return) && Xe.call(Ur);
          } finally {
            if (Oe) throw Oe.error;
          }
        }
        throw new pt();
      }, p.processFixedAI = function (r, l, g) {
        if (g.length < r) throw new pt();
        var S = g.substring(0, r);
        if (g.length < r + l) throw new pt();
        var H = g.substring(r, r + l),
          ie = g.substring(r + l),
          de = "(" + S + ")" + H,
          Oe = p.parseFieldsInGeneralPurpose(ie);
        return null == Oe ? de : de + Oe;
      }, p.processVariableAI = function (r, l, g) {
        var H,
          S = g.substring(0, r),
          ie = g.substring(r, H = g.length < r + l ? g.length : r + l),
          de = g.substring(H),
          Oe = "(" + S + ")" + ie,
          Xe = p.parseFieldsInGeneralPurpose(de);
        return null == Xe ? Oe : Oe + Xe;
      }, p.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", p.VARIABLE_LENGTH = [], 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", p.VARIABLE_LENGTH, 20], ["22", p.VARIABLE_LENGTH, 29], ["30", p.VARIABLE_LENGTH, 8], ["37", p.VARIABLE_LENGTH, 8], ["90", p.VARIABLE_LENGTH, 30], ["91", p.VARIABLE_LENGTH, 30], ["92", p.VARIABLE_LENGTH, 30], ["93", p.VARIABLE_LENGTH, 30], ["94", p.VARIABLE_LENGTH, 30], ["95", p.VARIABLE_LENGTH, 30], ["96", p.VARIABLE_LENGTH, 30], ["97", p.VARIABLE_LENGTH, 3], ["98", p.VARIABLE_LENGTH, 30], ["99", p.VARIABLE_LENGTH, 30]], p.THREE_DIGIT_DATA_LENGTH = [["240", p.VARIABLE_LENGTH, 30], ["241", p.VARIABLE_LENGTH, 30], ["242", p.VARIABLE_LENGTH, 6], ["250", p.VARIABLE_LENGTH, 30], ["251", p.VARIABLE_LENGTH, 30], ["253", p.VARIABLE_LENGTH, 17], ["254", p.VARIABLE_LENGTH, 20], ["400", p.VARIABLE_LENGTH, 30], ["401", p.VARIABLE_LENGTH, 30], ["402", 17], ["403", p.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", p.VARIABLE_LENGTH, 20], ["421", p.VARIABLE_LENGTH, 15], ["422", 3], ["423", p.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]], p.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", p.VARIABLE_LENGTH, 15], ["391", p.VARIABLE_LENGTH, 18], ["392", p.VARIABLE_LENGTH, 15], ["393", p.VARIABLE_LENGTH, 18], ["703", p.VARIABLE_LENGTH, 30]], p.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", p.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", p.VARIABLE_LENGTH, 20], ["8003", p.VARIABLE_LENGTH, 30], ["8004", p.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", p.VARIABLE_LENGTH, 30], ["8008", p.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", p.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", p.VARIABLE_LENGTH, 70], ["8200", p.VARIABLE_LENGTH, 70]], p;
    }();
  const Uc = Il;
  var Kl = function () {
    function p(r) {
      this.buffer = new Ii(), this.information = r;
    }
    return p.prototype.decodeAllCodes = function (r, l) {
      for (var g = l, S = null;;) {
        var H = this.decodeGeneralPurposeField(g, S),
          ie = Uc.parseFieldsInGeneralPurpose(H.getNewString());
        if (null != ie && r.append(ie), S = H.isRemaining() ? "" + H.getRemainingValue() : null, g === H.getNewPosition()) break;
        g = H.getNewPosition();
      }
      return r.toString();
    }, p.prototype.isStillNumeric = function (r) {
      if (r + 7 > this.information.getSize()) return r + 4 <= this.information.getSize();
      for (var l = r; l < r + 3; ++l) if (this.information.get(l)) return !0;
      return this.information.get(r + 3);
    }, p.prototype.decodeNumeric = function (r) {
      if (r + 7 > this.information.getSize()) {
        var l = this.extractNumericValueFromBitArray(r, 4);
        return new er(this.information.getSize(), 0 === l ? er.FNC1 : l - 1, er.FNC1);
      }
      var g = this.extractNumericValueFromBitArray(r, 7);
      return new er(r + 7, (g - 8) / 11, (g - 8) % 11);
    }, p.prototype.extractNumericValueFromBitArray = function (r, l) {
      return p.extractNumericValueFromBitArray(this.information, r, l);
    }, p.extractNumericValueFromBitArray = function (r, l, g) {
      for (var S = 0, H = 0; H < g; ++H) r.get(l + H) && (S |= 1 << g - H - 1);
      return S;
    }, p.prototype.decodeGeneralPurposeField = function (r, l) {
      this.buffer.setLengthToZero(), null != l && this.buffer.append(l), this.current.setPosition(r);
      var g = this.parseBlocks();
      return null != g && g.isRemaining() ? new Ki(this.current.getPosition(), this.buffer.toString(), g.getRemainingValue()) : new Ki(this.current.getPosition(), this.buffer.toString());
    }, p.prototype.parseBlocks = function () {
      var r, l;
      do {
        var g = this.current.getPosition();
        if (r = this.current.isAlpha() ? (l = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (l = this.parseIsoIec646Block()).isFinished() : (l = this.parseNumericBlock()).isFinished(), g === this.current.getPosition() && !r) break;
      } while (!r);
      return l.getDecodedInformation();
    }, p.prototype.parseNumericBlock = function () {
      for (; this.isStillNumeric(this.current.getPosition());) {
        var r = this.decodeNumeric(this.current.getPosition());
        if (this.current.setPosition(r.getNewPosition()), r.isFirstDigitFNC1()) {
          var l = void 0;
          return l = r.isSecondDigitFNC1() ? new Ki(this.current.getPosition(), this.buffer.toString()) : new Ki(this.current.getPosition(), this.buffer.toString(), r.getSecondDigit()), new Cr(!0, l);
        }
        if (this.buffer.append(r.getFirstDigit()), r.isSecondDigitFNC1()) return l = new Ki(this.current.getPosition(), this.buffer.toString()), new Cr(!0, l);
        this.buffer.append(r.getSecondDigit());
      }
      return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Cr(!1);
    }, p.prototype.parseIsoIec646Block = function () {
      for (; this.isStillIsoIec646(this.current.getPosition());) {
        var r = this.decodeIsoIec646(this.current.getPosition());
        if (this.current.setPosition(r.getNewPosition()), r.isFNC1()) {
          var l = new Ki(this.current.getPosition(), this.buffer.toString());
          return new Cr(!0, l);
        }
        this.buffer.append(r.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Cr(!1);
    }, p.prototype.parseAlphaBlock = function () {
      for (; this.isStillAlpha(this.current.getPosition());) {
        var r = this.decodeAlphanumeric(this.current.getPosition());
        if (this.current.setPosition(r.getNewPosition()), r.isFNC1()) {
          var l = new Ki(this.current.getPosition(), this.buffer.toString());
          return new Cr(!0, l);
        }
        this.buffer.append(r.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Cr(!1);
    }, p.prototype.isStillIsoIec646 = function (r) {
      if (r + 5 > this.information.getSize()) return !1;
      var l = this.extractNumericValueFromBitArray(r, 5);
      if (l >= 5 && l < 16) return !0;
      if (r + 7 > this.information.getSize()) return !1;
      var g = this.extractNumericValueFromBitArray(r, 7);
      if (g >= 64 && g < 116) return !0;
      if (r + 8 > this.information.getSize()) return !1;
      var S = this.extractNumericValueFromBitArray(r, 8);
      return S >= 232 && S < 253;
    }, p.prototype.decodeIsoIec646 = function (r) {
      var l = this.extractNumericValueFromBitArray(r, 5);
      if (15 === l) return new St(r + 5, St.FNC1);
      if (l >= 5 && l < 15) return new St(r + 5, "0" + (l - 5));
      var H,
        g = this.extractNumericValueFromBitArray(r, 7);
      if (g >= 64 && g < 90) return new St(r + 7, "" + (g + 1));
      if (g >= 90 && g < 116) return new St(r + 7, "" + (g + 7));
      switch (this.extractNumericValueFromBitArray(r, 8)) {
        case 232:
          H = "!";
          break;
        case 233:
          H = "\"";
          break;
        case 234:
          H = "%";
          break;
        case 235:
          H = "&";
          break;
        case 236:
          H = "'";
          break;
        case 237:
          H = "(";
          break;
        case 238:
          H = ")";
          break;
        case 239:
          H = "*";
          break;
        case 240:
          H = "+";
          break;
        case 241:
          H = ",";
          break;
        case 242:
          H = "-";
          break;
        case 243:
          H = ".";
          break;
        case 244:
          H = "/";
          break;
        case 245:
          H = ":";
          break;
        case 246:
          H = ";";
          break;
        case 247:
          H = "<";
          break;
        case 248:
          H = "=";
          break;
        case 249:
          H = ">";
          break;
        case 250:
          H = "?";
          break;
        case 251:
          H = "_";
          break;
        case 252:
          H = " ";
          break;
        default:
          throw new Ft();
      }
      return new St(r + 8, H);
    }, p.prototype.isStillAlpha = function (r) {
      if (r + 5 > this.information.getSize()) return !1;
      var l = this.extractNumericValueFromBitArray(r, 5);
      if (l >= 5 && l < 16) return !0;
      if (r + 6 > this.information.getSize()) return !1;
      var g = this.extractNumericValueFromBitArray(r, 6);
      return g >= 16 && g < 63;
    }, p.prototype.decodeAlphanumeric = function (r) {
      var l = this.extractNumericValueFromBitArray(r, 5);
      if (15 === l) return new St(r + 5, St.FNC1);
      if (l >= 5 && l < 15) return new St(r + 5, "0" + (l - 5));
      var S,
        g = this.extractNumericValueFromBitArray(r, 6);
      if (g >= 32 && g < 58) return new St(r + 6, "" + (g + 33));
      switch (g) {
        case 58:
          S = "*";
          break;
        case 59:
          S = ",";
          break;
        case 60:
          S = "-";
          break;
        case 61:
          S = ".";
          break;
        case 62:
          S = "/";
          break;
        default:
          throw new Sr("Decoding invalid alphanumeric value: " + g);
      }
      return new St(r + 6, S);
    }, p.prototype.isAlphaTo646ToAlphaLatch = function (r) {
      if (r + 1 > this.information.getSize()) return !1;
      for (var l = 0; l < 5 && l + r < this.information.getSize(); ++l) if (2 === l) {
        if (!this.information.get(r + 2)) return !1;
      } else if (this.information.get(r + l)) return !1;
      return !0;
    }, p.prototype.isAlphaOr646ToNumericLatch = function (r) {
      if (r + 3 > this.information.getSize()) return !1;
      for (var l = r; l < r + 3; ++l) if (this.information.get(l)) return !1;
      return !0;
    }, p.prototype.isNumericToAlphaNumericLatch = function (r) {
      if (r + 1 > this.information.getSize()) return !1;
      for (var l = 0; l < 4 && l + r < this.information.getSize(); ++l) if (this.information.get(r + l)) return !1;
      return !0;
    }, p;
  }();
  const Wl = Kl;
  var nc = function () {
    function p(r) {
      this.information = r, this.generalDecoder = new Wl(r);
    }
    return p.prototype.getInformation = function () {
      return this.information;
    }, p.prototype.getGeneralDecoder = function () {
      return this.generalDecoder;
    }, p;
  }();
  const Zc = nc;
  var Yc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    nu = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return Yc(r, p), r.prototype.encodeCompressedGtin = function (l, g) {
        l.append("(01)");
        var S = l.length();
        l.append("9"), this.encodeCompressedGtinWithoutAI(l, g, S);
      }, r.prototype.encodeCompressedGtinWithoutAI = function (l, g, S) {
        for (var H = 0; H < 4; ++H) {
          var ie = this.getGeneralDecoder().extractNumericValueFromBitArray(g + 10 * H, 10);
          ie / 100 == 0 && l.append("0"), ie / 10 == 0 && l.append("0"), l.append(ie);
        }
        r.appendCheckDigit(l, S);
      }, r.appendCheckDigit = function (l, g) {
        for (var S = 0, H = 0; H < 13; H++) {
          var ie = l.charAt(H + g).charCodeAt(0) - "0".charCodeAt(0);
          S += 1 & H ? ie : 3 * ie;
        }
        10 == (S = 10 - S % 10) && (S = 0), l.append(S);
      }, r.GTIN_SIZE = 40, r;
    }(Zc);
  const kl = nu;
  var mu = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Wc = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return mu(r, p), r.prototype.parseInformation = function () {
        var l = new Ii();
        l.append("(01)");
        var g = l.length(),
          S = this.getGeneralDecoder().extractNumericValueFromBitArray(r.HEADER_SIZE, 4);
        return l.append(S), this.encodeCompressedGtinWithoutAI(l, r.HEADER_SIZE + 4, g), this.getGeneralDecoder().decodeAllCodes(l, r.HEADER_SIZE + 44);
      }, r.HEADER_SIZE = 4, r;
    }(kl);
  const gc = Wc;
  var ir = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Hr = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return ir(r, p), r.prototype.parseInformation = function () {
        var l = new Ii();
        return this.getGeneralDecoder().decodeAllCodes(l, r.HEADER_SIZE);
      }, r.HEADER_SIZE = 5, r;
    }(Zc);
  const Ar = Hr;
  var Ds = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    wa = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return Ds(r, p), r.prototype.encodeCompressedWeight = function (l, g, S) {
        var H = this.getGeneralDecoder().extractNumericValueFromBitArray(g, S);
        this.addWeightCode(l, H);
        for (var ie = this.checkWeight(H), de = 1e5, Oe = 0; Oe < 5; ++Oe) ie / de == 0 && l.append("0"), de /= 10;
        l.append(ie);
      }, r;
    }(kl);
  const Ua = wa;
  var hl = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    va = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return hl(r, p), r.prototype.parseInformation = function () {
        if (this.getInformation().getSize() !== r.HEADER_SIZE + Ua.GTIN_SIZE + r.WEIGHT_SIZE) throw new pt();
        var l = new Ii();
        return this.encodeCompressedGtin(l, r.HEADER_SIZE), this.encodeCompressedWeight(l, r.HEADER_SIZE + Ua.GTIN_SIZE, r.WEIGHT_SIZE), l.toString();
      }, r.HEADER_SIZE = 5, r.WEIGHT_SIZE = 15, r;
    }(Ua);
  const wc = va;
  var zs = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ic = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return zs(r, p), r.prototype.addWeightCode = function (l, g) {
        l.append("(3103)");
      }, r.prototype.checkWeight = function (l) {
        return l;
      }, r;
    }(wc);
  const _c = ic;
  var zc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Gc = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return zc(r, p), r.prototype.addWeightCode = function (l, g) {
        l.append(g < 1e4 ? "(3202)" : "(3203)");
      }, r.prototype.checkWeight = function (l) {
        return l < 1e4 ? l : l - 1e4;
      }, r;
    }(wc);
  const au = Gc;
  var xu = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    vs = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return xu(r, p), r.prototype.parseInformation = function () {
        if (this.getInformation().getSize() < r.HEADER_SIZE + kl.GTIN_SIZE) throw new pt();
        var l = new Ii();
        this.encodeCompressedGtin(l, r.HEADER_SIZE);
        var g = this.getGeneralDecoder().extractNumericValueFromBitArray(r.HEADER_SIZE + kl.GTIN_SIZE, r.LAST_DIGIT_SIZE);
        l.append("(392"), l.append(g), l.append(")");
        var S = this.getGeneralDecoder().decodeGeneralPurposeField(r.HEADER_SIZE + kl.GTIN_SIZE + r.LAST_DIGIT_SIZE, null);
        return l.append(S.getNewString()), l.toString();
      }, r.HEADER_SIZE = 8, r.LAST_DIGIT_SIZE = 2, r;
    }(kl);
  const La = vs;
  var kc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ut = function (p) {
      function r(l) {
        return p.call(this, l) || this;
      }
      return kc(r, p), r.prototype.parseInformation = function () {
        if (this.getInformation().getSize() < r.HEADER_SIZE + kl.GTIN_SIZE) throw new pt();
        var l = new Ii();
        this.encodeCompressedGtin(l, r.HEADER_SIZE);
        var g = this.getGeneralDecoder().extractNumericValueFromBitArray(r.HEADER_SIZE + kl.GTIN_SIZE, r.LAST_DIGIT_SIZE);
        l.append("(393"), l.append(g), l.append(")");
        var S = this.getGeneralDecoder().extractNumericValueFromBitArray(r.HEADER_SIZE + kl.GTIN_SIZE + r.LAST_DIGIT_SIZE, r.FIRST_THREE_DIGITS_SIZE);
        S / 100 == 0 && l.append("0"), S / 10 == 0 && l.append("0"), l.append(S);
        var H = this.getGeneralDecoder().decodeGeneralPurposeField(r.HEADER_SIZE + kl.GTIN_SIZE + r.LAST_DIGIT_SIZE + r.FIRST_THREE_DIGITS_SIZE, null);
        return l.append(H.getNewString()), l.toString();
      }, r.HEADER_SIZE = 8, r.LAST_DIGIT_SIZE = 2, r.FIRST_THREE_DIGITS_SIZE = 10, r;
    }(kl);
  const Vn = Ut;
  var Gt = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    xi = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l) || this;
        return H.dateCode = S, H.firstAIdigits = g, H;
      }
      return Gt(r, p), r.prototype.parseInformation = function () {
        if (this.getInformation().getSize() !== r.HEADER_SIZE + r.GTIN_SIZE + r.WEIGHT_SIZE + r.DATE_SIZE) throw new pt();
        var l = new Ii();
        return this.encodeCompressedGtin(l, r.HEADER_SIZE), this.encodeCompressedWeight(l, r.HEADER_SIZE + r.GTIN_SIZE, r.WEIGHT_SIZE), this.encodeCompressedDate(l, r.HEADER_SIZE + r.GTIN_SIZE + r.WEIGHT_SIZE), l.toString();
      }, r.prototype.encodeCompressedDate = function (l, g) {
        var S = this.getGeneralDecoder().extractNumericValueFromBitArray(g, r.DATE_SIZE);
        if (38400 !== S) {
          l.append("("), l.append(this.dateCode), l.append(")");
          var H = S % 32,
            ie = (S /= 32) % 12 + 1,
            de = S /= 12;
          de / 10 == 0 && l.append("0"), l.append(de), ie / 10 == 0 && l.append("0"), l.append(ie), H / 10 == 0 && l.append("0"), l.append(H);
        }
      }, r.prototype.addWeightCode = function (l, g) {
        l.append("("), l.append(this.firstAIdigits), l.append(g / 1e5), l.append(")");
      }, r.prototype.checkWeight = function (l) {
        return l % 1e5;
      }, r.HEADER_SIZE = 8, r.WEIGHT_SIZE = 20, r.DATE_SIZE = 16, r;
    }(Ua);
  const so = xi;
  var Rr = function () {
    function p(r, l, g, S) {
      this.leftchar = r, this.rightchar = l, this.finderpattern = g, this.maybeLast = S;
    }
    return p.prototype.mayBeLast = function () {
      return this.maybeLast;
    }, p.prototype.getLeftChar = function () {
      return this.leftchar;
    }, p.prototype.getRightChar = function () {
      return this.rightchar;
    }, p.prototype.getFinderPattern = function () {
      return this.finderpattern;
    }, p.prototype.mustBeLast = function () {
      return null == this.rightchar;
    }, p.prototype.toString = function () {
      return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]";
    }, p.equals = function (r, l) {
      return r instanceof p && p.equalsOrNull(r.leftchar, l.leftchar) && p.equalsOrNull(r.rightchar, l.rightchar) && p.equalsOrNull(r.finderpattern, l.finderpattern);
    }, p.equalsOrNull = function (r, l) {
      return null === r ? null === l : p.equals(r, l);
    }, p.prototype.hashCode = function () {
      return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
    }, p;
  }();
  const Ns = Rr;
  var Ga = function () {
    function p(r, l, g) {
      this.pairs = r, this.rowNumber = l, this.wasReversed = g;
    }
    return p.prototype.getPairs = function () {
      return this.pairs;
    }, p.prototype.getRowNumber = function () {
      return this.rowNumber;
    }, p.prototype.isReversed = function () {
      return this.wasReversed;
    }, p.prototype.isEquivalent = function (r) {
      return this.checkEqualitity(this, r);
    }, p.prototype.toString = function () {
      return "{ " + this.pairs + " }";
    }, p.prototype.equals = function (r, l) {
      return r instanceof p && this.checkEqualitity(r, l) && r.wasReversed === l.wasReversed;
    }, p.prototype.checkEqualitity = function (r, l) {
      var g;
      if (r && l) return r.forEach(function (S, H) {
        l.forEach(function (ie) {
          S.getLeftChar().getValue() === ie.getLeftChar().getValue() && S.getRightChar().getValue() === ie.getRightChar().getValue() && S.getFinderPatter().getValue() === ie.getFinderPatter().getValue() && (g = !0);
        });
      }), g;
    }, p;
  }();
  const Ma = Ga;
  var Ia = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Ea = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Ll = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.pairs = new Array(r.MAX_PAIRS), l.rows = new Array(), l.startEnd = [2], l;
      }
      return Ia(r, p), r.prototype.decodeRow = function (l, g, S) {
        this.pairs.length = 0, this.startFromEven = !1;
        try {
          return r.constructResult(this.decodeRow2pairs(l, g));
        } catch {}
        return this.pairs.length = 0, this.startFromEven = !0, r.constructResult(this.decodeRow2pairs(l, g));
      }, r.prototype.reset = function () {
        this.pairs.length = 0, this.rows.length = 0;
      }, r.prototype.decodeRow2pairs = function (l, g) {
        for (var S = !1; !S;) try {
          this.pairs.push(this.retrieveNextPair(g, this.pairs, l));
        } catch (de) {
          if (de instanceof pt) {
            if (!this.pairs.length) throw new pt();
            S = !0;
          }
        }
        if (this.checkChecksum()) return this.pairs;
        var H;
        if (H = !!this.rows.length, this.storeRow(l, !1), H) {
          var ie = this.checkRowsBoolean(!1);
          if (null != ie || null != (ie = this.checkRowsBoolean(!0))) return ie;
        }
        throw new pt();
      }, r.prototype.checkRowsBoolean = function (l) {
        if (this.rows.length > 25) return this.rows.length = 0, null;
        this.pairs.length = 0, l && (this.rows = this.rows.reverse());
        var g = null;
        try {
          g = this.checkRows(new Array(), 0);
        } catch (S) {
          console.log(S);
        }
        return l && (this.rows = this.rows.reverse()), g;
      }, r.prototype.checkRows = function (l, g) {
        for (var S, H, ie = g; ie < this.rows.length; ie++) {
          var de = this.rows[ie];
          this.pairs.length = 0;
          try {
            for (var Oe = (S = void 0, Ea(l)), Xe = Oe.next(); !Xe.done; Xe = Oe.next()) this.pairs.push(Xe.value.getPairs());
          } catch (cn) {
            S = {
              error: cn
            };
          } finally {
            try {
              Xe && !Xe.done && (H = Oe.return) && H.call(Oe);
            } finally {
              if (S) throw S.error;
            }
          }
          if (this.pairs.push(de.getPairs()), r.isValidSequence(this.pairs)) {
            if (this.checkChecksum()) return this.pairs;
            var Lt = new Array(l);
            Lt.push(de);
            try {
              return this.checkRows(Lt, ie + 1);
            } catch (cn) {
              console.log(cn);
            }
          }
        }
        throw new pt();
      }, r.isValidSequence = function (l) {
        var g, S;
        try {
          for (var H = Ea(r.FINDER_PATTERN_SEQUENCES), ie = H.next(); !ie.done; ie = H.next()) {
            var de = ie.value;
            if (!(l.length > de.length)) {
              for (var Oe = !0, Xe = 0; Xe < l.length; Xe++) if (l[Xe].getFinderPattern().getValue() !== de[Xe]) {
                Oe = !1;
                break;
              }
              if (Oe) return !0;
            }
          }
        } catch (wt) {
          g = {
            error: wt
          };
        } finally {
          try {
            ie && !ie.done && (S = H.return) && S.call(H);
          } finally {
            if (g) throw g.error;
          }
        }
        return !1;
      }, r.prototype.storeRow = function (l, g) {
        for (var S = 0, H = !1, ie = !1; S < this.rows.length;) {
          var de = this.rows[S];
          if (de.getRowNumber() > l) {
            ie = de.isEquivalent(this.pairs);
            break;
          }
          H = de.isEquivalent(this.pairs), S++;
        }
        ie || H || r.isPartialRow(this.pairs, this.rows) || (this.rows.push(S, new Ma(this.pairs, l, g)), this.removePartialRows(this.pairs, this.rows));
      }, r.prototype.removePartialRows = function (l, g) {
        var S, H, ie, de, Oe, Xe;
        try {
          for (var wt = Ea(g), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
            var cn = Lt.value;
            if (cn.getPairs().length !== l.length) try {
              for (var Hi = (ie = void 0, Ea(cn.getPairs())), no = Hi.next(); !no.done; no = Hi.next()) {
                var Ho = no.value;
                try {
                  for (var Bo = (Oe = void 0, Ea(l)), Mr = Bo.next(); !Mr.done; Mr = Bo.next()) if (Ns.equals(Ho, Mr.value)) {
                    !0;
                    break;
                  }
                } catch (ls) {
                  Oe = {
                    error: ls
                  };
                } finally {
                  try {
                    Mr && !Mr.done && (Xe = Bo.return) && Xe.call(Bo);
                  } finally {
                    if (Oe) throw Oe.error;
                  }
                }
              }
            } catch (ls) {
              ie = {
                error: ls
              };
            } finally {
              try {
                no && !no.done && (de = Hi.return) && de.call(Hi);
              } finally {
                if (ie) throw ie.error;
              }
            }
          }
        } catch (ls) {
          S = {
            error: ls
          };
        } finally {
          try {
            Lt && !Lt.done && (H = wt.return) && H.call(wt);
          } finally {
            if (S) throw S.error;
          }
        }
      }, r.isPartialRow = function (l, g) {
        var S, H, ie, de, Oe, Xe;
        try {
          for (var wt = Ea(g), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
            var cn = Lt.value,
              xn = !0;
            try {
              for (var Hi = (ie = void 0, Ea(l)), no = Hi.next(); !no.done; no = Hi.next()) {
                var Ho = no.value,
                  zo = !1;
                try {
                  for (var Bo = (Oe = void 0, Ea(cn.getPairs())), Mr = Bo.next(); !Mr.done; Mr = Bo.next()) if (Ho.equals(Mr.value)) {
                    zo = !0;
                    break;
                  }
                } catch (ls) {
                  Oe = {
                    error: ls
                  };
                } finally {
                  try {
                    Mr && !Mr.done && (Xe = Bo.return) && Xe.call(Bo);
                  } finally {
                    if (Oe) throw Oe.error;
                  }
                }
                if (!zo) {
                  xn = !1;
                  break;
                }
              }
            } catch (ls) {
              ie = {
                error: ls
              };
            } finally {
              try {
                no && !no.done && (de = Hi.return) && de.call(Hi);
              } finally {
                if (ie) throw ie.error;
              }
            }
            if (xn) return !0;
          }
        } catch (ls) {
          S = {
            error: ls
          };
        } finally {
          try {
            Lt && !Lt.done && (H = wt.return) && H.call(wt);
          } finally {
            if (S) throw S.error;
          }
        }
        return !1;
      }, r.prototype.getRows = function () {
        return this.rows;
      }, r.constructResult = function (l) {
        var S = function yr(p) {
            try {
              if (p.get(1)) return new gc(p);
              if (!p.get(2)) return new Ar(p);
              switch (Wl.extractNumericValueFromBitArray(p, 1, 4)) {
                case 4:
                  return new _c(p);
                case 5:
                  return new au(p);
              }
              switch (Wl.extractNumericValueFromBitArray(p, 1, 5)) {
                case 12:
                  return new La(p);
                case 13:
                  return new Vn(p);
              }
              switch (Wl.extractNumericValueFromBitArray(p, 1, 7)) {
                case 56:
                  return new so(p, "310", "11");
                case 57:
                  return new so(p, "320", "11");
                case 58:
                  return new so(p, "310", "13");
                case 59:
                  return new so(p, "320", "13");
                case 60:
                  return new so(p, "310", "15");
                case 61:
                  return new so(p, "320", "15");
                case 62:
                  return new so(p, "310", "17");
                case 63:
                  return new so(p, "320", "17");
              }
            } catch (S) {
              throw console.log(S), new Sr("unknown decoder: " + p);
            }
          }(mo.buildBitArray(l)),
          H = S.parseInformation(),
          ie = l[0].getFinderPattern().getResultPoints(),
          de = l[l.length - 1].getFinderPattern().getResultPoints();
        return new br(H, null, null, [ie[0], ie[1], de[0], de[1]], qo.RSS_EXPANDED, null);
      }, r.prototype.checkChecksum = function () {
        var l = this.pairs.get(0),
          g = l.getLeftChar(),
          S = l.getRightChar();
        if (null === S) return !1;
        for (var H = S.getChecksumPortion(), ie = 2, de = 1; de < this.pairs.size(); ++de) {
          var Oe = this.pairs.get(de);
          H += Oe.getLeftChar().getChecksumPortion(), ie++;
          var Xe = Oe.getRightChar();
          null != Xe && (H += Xe.getChecksumPortion(), ie++);
        }
        return 211 * (ie - 4) + (H %= 211) === g.getValue();
      }, r.getNextSecondBar = function (l, g) {
        var S;
        return l.get(g) ? (S = l.getNextUnset(g), S = l.getNextSet(S)) : (S = l.getNextSet(g), S = l.getNextUnset(S)), S;
      }, r.prototype.retrieveNextPair = function (l, g, S) {
        var H = g.length % 2 == 0;
        this.startFromEven && (H = !H);
        var ie,
          de = !0,
          Oe = -1;
        do {
          this.findNextPair(l, g, Oe), null === (ie = this.parseFoundFinderPattern(l, S, H)) ? Oe = r.getNextSecondBar(l, this.startEnd[0]) : de = !1;
        } while (de);
        var wt,
          Xe = this.decodeDataCharacter(l, ie, H, !0);
        if (!this.isEmptyPair(g) && g[g.length - 1].mustBeLast()) throw new pt();
        try {
          wt = this.decodeDataCharacter(l, ie, H, !1);
        } catch (Lt) {
          wt = null, console.log(Lt);
        }
        return new Ns(Xe, wt, ie, !0);
      }, r.prototype.isEmptyPair = function (l) {
        return 0 === l.length;
      }, r.prototype.findNextPair = function (l, g, S) {
        var H = this.getDecodeFinderCounters();
        H[0] = 0, H[1] = 0, H[2] = 0, H[3] = 0;
        var de,
          ie = l.getSize();
        de = S >= 0 ? S : this.isEmptyPair(g) ? 0 : g[g.length - 1].getFinderPattern().getStartEnd()[1];
        var Xe = g.length % 2 != 0;
        this.startFromEven && (Xe = !Xe);
        for (var wt = !1; de < ie && (wt = !l.get(de));) de++;
        for (var Lt = 0, cn = de, xn = de; xn < ie; xn++) if (l.get(xn) !== wt) H[Lt]++;else {
          if (3 === Lt) {
            if (Xe && r.reverseCounters(H), r.isFinderPattern(H)) return this.startEnd[0] = cn, void (this.startEnd[1] = xn);
            Xe && r.reverseCounters(H), cn += H[0] + H[1], H[0] = H[2], H[1] = H[3], H[2] = 0, H[3] = 0, Lt--;
          } else Lt++;
          H[Lt] = 1, wt = !wt;
        }
        throw new pt();
      }, r.reverseCounters = function (l) {
        for (var g = l.length, S = 0; S < g / 2; ++S) {
          var H = l[S];
          l[S] = l[g - S - 1], l[g - S - 1] = H;
        }
      }, r.prototype.parseFoundFinderPattern = function (l, g, S) {
        var H, ie, de;
        if (S) {
          for (var Oe = this.startEnd[0] - 1; Oe >= 0 && !l.get(Oe);) Oe--;
          Oe++, H = this.startEnd[0] - Oe, ie = Oe, de = this.startEnd[1];
        } else ie = this.startEnd[0], H = (de = l.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
        var wt,
          Xe = this.getDecodeFinderCounters();
        ae.arraycopy(Xe, 0, Xe, 1, Xe.length - 1), Xe[0] = H;
        try {
          wt = this.parseFinderValue(Xe, r.FINDER_PATTERNS);
        } catch {
          return null;
        }
        return new mn(wt, [ie, de], ie, de, g);
      }, r.prototype.decodeDataCharacter = function (l, g, S, H) {
        for (var ie = this.getDataCharacterCounters(), de = 0; de < ie.length; de++) ie[de] = 0;
        if (H) r.recordPatternInReverse(l, g.getStartEnd()[0], ie);else {
          r.recordPattern(l, g.getStartEnd()[1], ie);
          for (var Oe = 0, Xe = ie.length - 1; Oe < Xe; Oe++, Xe--) {
            var wt = ie[Oe];
            ie[Oe] = ie[Xe], ie[Xe] = wt;
          }
        }
        var cn = Qo.sum(new Int32Array(ie)) / 17,
          xn = (g.getStartEnd()[1] - g.getStartEnd()[0]) / 15;
        if (Math.abs(cn - xn) / xn > .3) throw new pt();
        var Hi = this.getOddCounts(),
          no = this.getEvenCounts(),
          Ho = this.getOddRoundingErrors(),
          zo = this.getEvenRoundingErrors();
        for (Oe = 0; Oe < ie.length; Oe++) {
          var Bo = 1 * ie[Oe] / cn,
            Mr = Bo + .5;
          if (Mr < 1) {
            if (Bo < .3) throw new pt();
            Mr = 1;
          } else if (Mr > 8) {
            if (Bo > 8.7) throw new pt();
            Mr = 8;
          }
          var Ur = Oe / 2;
          1 & Oe ? (no[Ur] = Mr, zo[Ur] = Bo - Mr) : (Hi[Ur] = Mr, Ho[Ur] = Bo - Mr);
        }
        this.adjustOddEvenCounts(17);
        var ls = 4 * g.getValue() + (S ? 0 : 2) + (H ? 0 : 1) - 1,
          Ss = 0,
          Is = 0;
        for (Oe = Hi.length - 1; Oe >= 0; Oe--) r.isNotA1left(g, S, H) && (Is += Hi[Oe] * r.WEIGHTS[ls][2 * Oe]), Ss += Hi[Oe];
        var Sa = 0;
        for (Oe = no.length - 1; Oe >= 0; Oe--) r.isNotA1left(g, S, H) && (Sa += no[Oe] * r.WEIGHTS[ls][2 * Oe + 1]);
        var el = Is + Sa;
        if (1 & Ss || Ss > 13 || Ss < 4) throw new pt();
        var tu = (13 - Ss) / 2,
          Ql = r.SYMBOL_WIDEST[tu],
          pu = 9 - Ql,
          Id = Zt.getRSSvalue(Hi, Ql, !0),
          Ld = Zt.getRSSvalue(no, pu, !1);
        return new Jt(Id * r.EVEN_TOTAL_SUBSET[tu] + Ld + r.GSUM[tu], el);
      }, r.isNotA1left = function (l, g, S) {
        return !(0 === l.getValue() && g && S);
      }, r.prototype.adjustOddEvenCounts = function (l) {
        var g = Qo.sum(new Int32Array(this.getOddCounts())),
          S = Qo.sum(new Int32Array(this.getEvenCounts())),
          H = !1,
          ie = !1;
        g > 13 ? ie = !0 : g < 4 && (H = !0);
        var de = !1,
          Oe = !1;
        S > 13 ? Oe = !0 : S < 4 && (de = !0);
        var Xe = g + S - l,
          wt = 1 == (1 & g),
          Lt = 0 == (1 & S);
        if (1 === Xe) {
          if (wt) {
            if (Lt) throw new pt();
            ie = !0;
          } else {
            if (!Lt) throw new pt();
            Oe = !0;
          }
        } else if (-1 === Xe) {
          if (wt) {
            if (Lt) throw new pt();
            H = !0;
          } else {
            if (!Lt) throw new pt();
            de = !0;
          }
        } else {
          if (0 !== Xe) throw new pt();
          if (wt) {
            if (!Lt) throw new pt();
            g < S ? (H = !0, Oe = !0) : (ie = !0, de = !0);
          } else if (Lt) throw new pt();
        }
        if (H) {
          if (ie) throw new pt();
          r.increment(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (ie && r.decrement(this.getOddCounts(), this.getOddRoundingErrors()), de) {
          if (Oe) throw new pt();
          r.increment(this.getEvenCounts(), this.getOddRoundingErrors());
        }
        Oe && r.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }, r.SYMBOL_WIDEST = [7, 5, 4, 3, 1], r.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], r.GSUM = [0, 348, 1388, 2948, 3988], r.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], r.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]], r.FINDER_PATTERN_SEQUENCES = [[r.FINDER_PAT_A = 0, r.FINDER_PAT_A], [r.FINDER_PAT_A, r.FINDER_PAT_B = 1, r.FINDER_PAT_B], [r.FINDER_PAT_A, r.FINDER_PAT_C = 2, r.FINDER_PAT_B, r.FINDER_PAT_D = 3], [r.FINDER_PAT_A, r.FINDER_PAT_E = 4, r.FINDER_PAT_B, r.FINDER_PAT_D, r.FINDER_PAT_C], [r.FINDER_PAT_A, r.FINDER_PAT_E, r.FINDER_PAT_B, r.FINDER_PAT_D, r.FINDER_PAT_D, r.FINDER_PAT_F = 5], [r.FINDER_PAT_A, r.FINDER_PAT_E, r.FINDER_PAT_B, r.FINDER_PAT_D, r.FINDER_PAT_E, r.FINDER_PAT_F, r.FINDER_PAT_F], [r.FINDER_PAT_A, r.FINDER_PAT_A, r.FINDER_PAT_B, r.FINDER_PAT_B, r.FINDER_PAT_C, r.FINDER_PAT_C, r.FINDER_PAT_D, r.FINDER_PAT_D], [r.FINDER_PAT_A, r.FINDER_PAT_A, r.FINDER_PAT_B, r.FINDER_PAT_B, r.FINDER_PAT_C, r.FINDER_PAT_C, r.FINDER_PAT_D, r.FINDER_PAT_E, r.FINDER_PAT_E], [r.FINDER_PAT_A, r.FINDER_PAT_A, r.FINDER_PAT_B, r.FINDER_PAT_B, r.FINDER_PAT_C, r.FINDER_PAT_C, r.FINDER_PAT_D, r.FINDER_PAT_E, r.FINDER_PAT_F, r.FINDER_PAT_F], [r.FINDER_PAT_A, r.FINDER_PAT_A, r.FINDER_PAT_B, r.FINDER_PAT_B, r.FINDER_PAT_C, r.FINDER_PAT_D, r.FINDER_PAT_D, r.FINDER_PAT_E, r.FINDER_PAT_E, r.FINDER_PAT_F, r.FINDER_PAT_F]], r.MAX_PAIRS = 11, r;
    }(pn);
  const Za = Ll;
  var sl = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    pl = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l, g) || this;
        return H.count = 0, H.finderPattern = S, H;
      }
      return sl(r, p), r.prototype.getFinderPattern = function () {
        return this.finderPattern;
      }, r.prototype.getCount = function () {
        return this.count;
      }, r.prototype.incrementCount = function () {
        this.count++;
      }, r;
    }(Jt);
  const ql = pl;
  var vc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    oc = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    pc = function (p) {
      function r() {
        var l = null !== p && p.apply(this, arguments) || this;
        return l.possibleLeftPairs = [], l.possibleRightPairs = [], l;
      }
      return vc(r, p), r.prototype.decodeRow = function (l, g, S) {
        var H,
          ie,
          de,
          Oe,
          Xe = this.decodePair(g, !1, l, S);
        r.addOrTally(this.possibleLeftPairs, Xe), g.reverse();
        var wt = this.decodePair(g, !0, l, S);
        r.addOrTally(this.possibleRightPairs, wt), g.reverse();
        try {
          for (var Lt = oc(this.possibleLeftPairs), cn = Lt.next(); !cn.done; cn = Lt.next()) {
            var xn = cn.value;
            if (xn.getCount() > 1) try {
              for (var Hi = (de = void 0, oc(this.possibleRightPairs)), no = Hi.next(); !no.done; no = Hi.next()) {
                var Ho = no.value;
                if (Ho.getCount() > 1 && r.checkChecksum(xn, Ho)) return r.constructResult(xn, Ho);
              }
            } catch (zo) {
              de = {
                error: zo
              };
            } finally {
              try {
                no && !no.done && (Oe = Hi.return) && Oe.call(Hi);
              } finally {
                if (de) throw de.error;
              }
            }
          }
        } catch (zo) {
          H = {
            error: zo
          };
        } finally {
          try {
            cn && !cn.done && (ie = Lt.return) && ie.call(Lt);
          } finally {
            if (H) throw H.error;
          }
        }
        throw new pt();
      }, r.addOrTally = function (l, g) {
        var S, H;
        if (null != g) {
          var ie = !1;
          try {
            for (var de = oc(l), Oe = de.next(); !Oe.done; Oe = de.next()) {
              var Xe = Oe.value;
              if (Xe.getValue() === g.getValue()) {
                Xe.incrementCount(), ie = !0;
                break;
              }
            }
          } catch (wt) {
            S = {
              error: wt
            };
          } finally {
            try {
              Oe && !Oe.done && (H = de.return) && H.call(de);
            } finally {
              if (S) throw S.error;
            }
          }
          ie || l.push(g);
        }
      }, r.prototype.reset = function () {
        this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
      }, r.constructResult = function (l, g) {
        for (var S = 4537077 * l.getValue() + g.getValue(), H = new String(S).toString(), ie = new Ii(), de = 13 - H.length; de > 0; de--) ie.append("0");
        ie.append(H);
        var Oe = 0;
        for (de = 0; de < 13; de++) {
          var Xe = ie.charAt(de).charCodeAt(0) - "0".charCodeAt(0);
          Oe += 1 & de ? Xe : 3 * Xe;
        }
        10 == (Oe = 10 - Oe % 10) && (Oe = 0), ie.append(Oe.toString());
        var wt = l.getFinderPattern().getResultPoints(),
          Lt = g.getFinderPattern().getResultPoints();
        return new br(ie.toString(), null, 0, [wt[0], wt[1], Lt[0], Lt[1]], qo.RSS_14, new Date().getTime());
      }, r.checkChecksum = function (l, g) {
        var S = (l.getChecksumPortion() + 16 * g.getChecksumPortion()) % 79,
          H = 9 * l.getFinderPattern().getValue() + g.getFinderPattern().getValue();
        return H > 72 && H--, H > 8 && H--, S === H;
      }, r.prototype.decodePair = function (l, g, S, H) {
        try {
          var ie = this.findFinderPattern(l, g),
            de = this.parseFoundFinderPattern(l, S, g, ie),
            Oe = null == H ? null : H.get(mt.NEED_RESULT_POINT_CALLBACK);
          if (null != Oe) {
            var Xe = (ie[0] + ie[1]) / 2;
            g && (Xe = l.getSize() - 1 - Xe), Oe.foundPossibleResultPoint(new Or(Xe, S));
          }
          var wt = this.decodeDataCharacter(l, de, !0),
            Lt = this.decodeDataCharacter(l, de, !1);
          return new ql(1597 * wt.getValue() + Lt.getValue(), wt.getChecksumPortion() + 4 * Lt.getChecksumPortion(), de);
        } catch {
          return null;
        }
      }, r.prototype.decodeDataCharacter = function (l, g, S) {
        for (var H = this.getDataCharacterCounters(), ie = 0; ie < H.length; ie++) H[ie] = 0;
        if (S) ha.recordPatternInReverse(l, g.getStartEnd()[0], H);else {
          ha.recordPattern(l, g.getStartEnd()[1] + 1, H);
          for (var de = 0, Oe = H.length - 1; de < Oe; de++, Oe--) {
            var Xe = H[de];
            H[de] = H[Oe], H[Oe] = Xe;
          }
        }
        var wt = S ? 16 : 15,
          Lt = Qo.sum(new Int32Array(H)) / wt,
          cn = this.getOddCounts(),
          xn = this.getEvenCounts(),
          Hi = this.getOddRoundingErrors(),
          no = this.getEvenRoundingErrors();
        for (de = 0; de < H.length; de++) {
          var Ho = H[de] / Lt,
            zo = Math.floor(Ho + .5);
          zo < 1 ? zo = 1 : zo > 8 && (zo = 8);
          var Bo = Math.floor(de / 2);
          1 & de ? (xn[Bo] = zo, no[Bo] = Ho - zo) : (cn[Bo] = zo, Hi[Bo] = Ho - zo);
        }
        this.adjustOddEvenCounts(S, wt);
        var Mr = 0,
          Ur = 0;
        for (de = cn.length - 1; de >= 0; de--) Ur *= 9, Ur += cn[de], Mr += cn[de];
        var ls = 0,
          Ss = 0;
        for (de = xn.length - 1; de >= 0; de--) ls *= 9, ls += xn[de], Ss += xn[de];
        var Ys,
          Sa,
          Is = Ur + 3 * ls;
        if (S) {
          if (1 & Mr || Mr > 12 || Mr < 4) throw new pt();
          var el = 9 - (Sa = r.OUTSIDE_ODD_WIDEST[Ys = (12 - Mr) / 2]),
            tu = Zt.getRSSvalue(cn, Sa, !1),
            Ql = Zt.getRSSvalue(xn, el, !0);
          return new Jt(tu * r.OUTSIDE_EVEN_TOTAL_SUBSET[Ys] + Ql + r.OUTSIDE_GSUM[Ys], Is);
        }
        if (1 & Ss || Ss > 10 || Ss < 4) throw new pt();
        return el = 9 - (Sa = r.INSIDE_ODD_WIDEST[Ys = (10 - Ss) / 2]), tu = Zt.getRSSvalue(cn, Sa, !0), Ql = Zt.getRSSvalue(xn, el, !1), new Jt(Ql * r.INSIDE_ODD_TOTAL_SUBSET[Ys] + tu + r.INSIDE_GSUM[Ys], Is);
      }, r.prototype.findFinderPattern = function (l, g) {
        var S = this.getDecodeFinderCounters();
        S[0] = 0, S[1] = 0, S[2] = 0, S[3] = 0;
        for (var H = l.getSize(), ie = !1, de = 0; de < H && g !== (ie = !l.get(de));) de++;
        for (var Oe = 0, Xe = de, wt = de; wt < H; wt++) if (l.get(wt) !== ie) S[Oe]++;else {
          if (3 === Oe) {
            if (pn.isFinderPattern(S)) return [Xe, wt];
            Xe += S[0] + S[1], S[0] = S[2], S[1] = S[3], S[2] = 0, S[3] = 0, Oe--;
          } else Oe++;
          S[Oe] = 1, ie = !ie;
        }
        throw new pt();
      }, r.prototype.parseFoundFinderPattern = function (l, g, S, H) {
        for (var ie = l.get(H[0]), de = H[0] - 1; de >= 0 && ie !== l.get(de);) de--;
        de++;
        var Oe = H[0] - de,
          Xe = this.getDecodeFinderCounters(),
          wt = new Int32Array(Xe.length);
        ae.arraycopy(Xe, 0, wt, 1, Xe.length - 1), wt[0] = Oe;
        var Lt = this.parseFinderValue(wt, r.FINDER_PATTERNS),
          cn = de,
          xn = H[1];
        return S && (cn = l.getSize() - 1 - cn, xn = l.getSize() - 1 - xn), new mn(Lt, [de, H[1]], cn, xn, g);
      }, r.prototype.adjustOddEvenCounts = function (l, g) {
        var S = Qo.sum(new Int32Array(this.getOddCounts())),
          H = Qo.sum(new Int32Array(this.getEvenCounts())),
          ie = !1,
          de = !1,
          Oe = !1,
          Xe = !1;
        l ? (S > 12 ? de = !0 : S < 4 && (ie = !0), H > 12 ? Xe = !0 : H < 4 && (Oe = !0)) : (S > 11 ? de = !0 : S < 5 && (ie = !0), H > 10 ? Xe = !0 : H < 4 && (Oe = !0));
        var wt = S + H - g,
          Lt = (1 & S) == (l ? 1 : 0),
          cn = 1 == (1 & H);
        if (1 === wt) {
          if (Lt) {
            if (cn) throw new pt();
            de = !0;
          } else {
            if (!cn) throw new pt();
            Xe = !0;
          }
        } else if (-1 === wt) {
          if (Lt) {
            if (cn) throw new pt();
            ie = !0;
          } else {
            if (!cn) throw new pt();
            Oe = !0;
          }
        } else {
          if (0 !== wt) throw new pt();
          if (Lt) {
            if (!cn) throw new pt();
            S < H ? (ie = !0, Xe = !0) : (de = !0, Oe = !0);
          } else if (cn) throw new pt();
        }
        if (ie) {
          if (de) throw new pt();
          pn.increment(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (de && pn.decrement(this.getOddCounts(), this.getOddRoundingErrors()), Oe) {
          if (Xe) throw new pt();
          pn.increment(this.getEvenCounts(), this.getOddRoundingErrors());
        }
        Xe && pn.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }, r.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], r.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], r.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], r.INSIDE_GSUM = [0, 336, 1036, 1516], r.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], r.INSIDE_ODD_WIDEST = [2, 4, 6, 8], r.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])], r;
    }(pn);
  const ec = pc;
  var Mc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    rc = function (p) {
      function r(l) {
        var g = p.call(this) || this;
        g.readers = [];
        var S = l ? l.get(mt.POSSIBLE_FORMATS) : null,
          H = l && void 0 !== l.get(mt.ASSUME_CODE_39_CHECK_DIGIT),
          ie = l && void 0 !== l.get(mt.ENABLE_CODE_39_EXTENDED_MODE);
        return S && ((S.includes(qo.EAN_13) || S.includes(qo.UPC_A) || S.includes(qo.EAN_8) || S.includes(qo.UPC_E)) && g.readers.push(new cr(l)), S.includes(qo.CODE_39) && g.readers.push(new Ks(H, ie)), S.includes(qo.CODE_93) && g.readers.push(new Ri()), S.includes(qo.CODE_128) && g.readers.push(new na()), S.includes(qo.ITF) && g.readers.push(new Fn()), S.includes(qo.CODABAR) && g.readers.push(new Da()), S.includes(qo.RSS_14) && g.readers.push(new ec()), S.includes(qo.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), g.readers.push(new Za()))), 0 === g.readers.length && (g.readers.push(new cr(l)), g.readers.push(new Ks()), g.readers.push(new Ri()), g.readers.push(new cr(l)), g.readers.push(new na()), g.readers.push(new Fn()), g.readers.push(new ec())), g;
      }
      return Mc(r, p), r.prototype.decodeRow = function (l, g, S) {
        for (var H = 0; H < this.readers.length; H++) try {
          return this.readers[H].decodeRow(l, g, S);
        } catch {}
        throw new pt();
      }, r.prototype.reset = function () {
        this.readers.forEach(function (l) {
          return l.reset();
        });
      }, r;
    }(ha);
  const Bl = rc;
  var gu = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    al = (function (p) {
      gu(function r(l, g) {
        return void 0 === l && (l = 500), p.call(this, new Bl(g), l, g) || this;
      }, p);
    }(Eo), function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }),
    ca = function () {
      function p(r, l, g) {
        this.ecCodewords = r, this.ecBlocks = [l], g && this.ecBlocks.push(g);
      }
      return p.prototype.getECCodewords = function () {
        return this.ecCodewords;
      }, p.prototype.getECBlocks = function () {
        return this.ecBlocks;
      }, p;
    }(),
    _a = function () {
      function p(r, l) {
        this.count = r, this.dataCodewords = l;
      }
      return p.prototype.getCount = function () {
        return this.count;
      }, p.prototype.getDataCodewords = function () {
        return this.dataCodewords;
      }, p;
    }(),
    wl = function () {
      function p(r, l, g, S, H, ie) {
        var de, Oe;
        this.versionNumber = r, this.symbolSizeRows = l, this.symbolSizeColumns = g, this.dataRegionSizeRows = S, this.dataRegionSizeColumns = H, this.ecBlocks = ie;
        var Xe = 0,
          wt = ie.getECCodewords(),
          Lt = ie.getECBlocks();
        try {
          for (var cn = al(Lt), xn = cn.next(); !xn.done; xn = cn.next()) {
            var Hi = xn.value;
            Xe += Hi.getCount() * (Hi.getDataCodewords() + wt);
          }
        } catch (no) {
          de = {
            error: no
          };
        } finally {
          try {
            xn && !xn.done && (Oe = cn.return) && Oe.call(cn);
          } finally {
            if (de) throw de.error;
          }
        }
        this.totalCodewords = Xe;
      }
      return p.prototype.getVersionNumber = function () {
        return this.versionNumber;
      }, p.prototype.getSymbolSizeRows = function () {
        return this.symbolSizeRows;
      }, p.prototype.getSymbolSizeColumns = function () {
        return this.symbolSizeColumns;
      }, p.prototype.getDataRegionSizeRows = function () {
        return this.dataRegionSizeRows;
      }, p.prototype.getDataRegionSizeColumns = function () {
        return this.dataRegionSizeColumns;
      }, p.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
      }, p.prototype.getECBlocks = function () {
        return this.ecBlocks;
      }, p.getVersionForDimensions = function (r, l) {
        var g, S;
        if (1 & r || 1 & l) throw new Ft();
        try {
          for (var H = al(p.VERSIONS), ie = H.next(); !ie.done; ie = H.next()) {
            var de = ie.value;
            if (de.symbolSizeRows === r && de.symbolSizeColumns === l) return de;
          }
        } catch (Oe) {
          g = {
            error: Oe
          };
        } finally {
          try {
            ie && !ie.done && (S = H.return) && S.call(H);
          } finally {
            if (g) throw g.error;
          }
        }
        throw new Ft();
      }, p.prototype.toString = function () {
        return "" + this.versionNumber;
      }, p.buildVersions = function () {
        return [new p(1, 10, 10, 8, 8, new ca(5, new _a(1, 3))), new p(2, 12, 12, 10, 10, new ca(7, new _a(1, 5))), new p(3, 14, 14, 12, 12, new ca(10, new _a(1, 8))), new p(4, 16, 16, 14, 14, new ca(12, new _a(1, 12))), new p(5, 18, 18, 16, 16, new ca(14, new _a(1, 18))), new p(6, 20, 20, 18, 18, new ca(18, new _a(1, 22))), new p(7, 22, 22, 20, 20, new ca(20, new _a(1, 30))), new p(8, 24, 24, 22, 22, new ca(24, new _a(1, 36))), new p(9, 26, 26, 24, 24, new ca(28, new _a(1, 44))), new p(10, 32, 32, 14, 14, new ca(36, new _a(1, 62))), new p(11, 36, 36, 16, 16, new ca(42, new _a(1, 86))), new p(12, 40, 40, 18, 18, new ca(48, new _a(1, 114))), new p(13, 44, 44, 20, 20, new ca(56, new _a(1, 144))), new p(14, 48, 48, 22, 22, new ca(68, new _a(1, 174))), new p(15, 52, 52, 24, 24, new ca(42, new _a(2, 102))), new p(16, 64, 64, 14, 14, new ca(56, new _a(2, 140))), new p(17, 72, 72, 16, 16, new ca(36, new _a(4, 92))), new p(18, 80, 80, 18, 18, new ca(48, new _a(4, 114))), new p(19, 88, 88, 20, 20, new ca(56, new _a(4, 144))), new p(20, 96, 96, 22, 22, new ca(68, new _a(4, 174))), new p(21, 104, 104, 24, 24, new ca(56, new _a(6, 136))), new p(22, 120, 120, 18, 18, new ca(68, new _a(6, 175))), new p(23, 132, 132, 20, 20, new ca(62, new _a(8, 163))), new p(24, 144, 144, 22, 22, new ca(62, new _a(8, 156), new _a(2, 155))), new p(25, 8, 18, 6, 16, new ca(7, new _a(1, 5))), new p(26, 8, 32, 6, 14, new ca(11, new _a(1, 10))), new p(27, 12, 26, 10, 24, new ca(14, new _a(1, 16))), new p(28, 12, 36, 10, 16, new ca(18, new _a(1, 22))), new p(29, 16, 36, 14, 16, new ca(24, new _a(1, 32))), new p(30, 16, 48, 14, 22, new ca(28, new _a(1, 49)))];
      }, p.VERSIONS = p.buildVersions(), p;
    }();
  const Ja = wl;
  var ka = function () {
    function p(r) {
      var l = r.getHeight();
      if (l < 8 || l > 144 || 1 & l) throw new Ft();
      this.version = p.readVersion(r), this.mappingBitMatrix = this.extractDataRegion(r), this.readMappingMatrix = new co(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
    }
    return p.prototype.getVersion = function () {
      return this.version;
    }, p.readVersion = function (r) {
      var l = r.getHeight(),
        g = r.getWidth();
      return Ja.getVersionForDimensions(l, g);
    }, p.prototype.readCodewords = function () {
      var r = new Int8Array(this.version.getTotalCodewords()),
        l = 0,
        g = 4,
        S = 0,
        H = this.mappingBitMatrix.getHeight(),
        ie = this.mappingBitMatrix.getWidth(),
        de = !1,
        Oe = !1,
        Xe = !1,
        wt = !1;
      do {
        if (g !== H || 0 !== S || de) {
          if (g === H - 2 && 0 === S && 3 & ie && !Oe) r[l++] = 255 & this.readCorner2(H, ie), g -= 2, S += 2, Oe = !0;else if (g !== H + 4 || 2 !== S || 7 & ie || Xe) {
            if (g !== H - 2 || 0 !== S || 4 != (7 & ie) || wt) {
              do {
                g < H && S >= 0 && !this.readMappingMatrix.get(S, g) && (r[l++] = 255 & this.readUtah(g, S, H, ie)), g -= 2, S += 2;
              } while (g >= 0 && S < ie);
              g += 1, S += 3;
              do {
                g >= 0 && S < ie && !this.readMappingMatrix.get(S, g) && (r[l++] = 255 & this.readUtah(g, S, H, ie)), g += 2, S -= 2;
              } while (g < H && S >= 0);
              g += 3, S += 1;
            } else r[l++] = 255 & this.readCorner4(H, ie), g -= 2, S += 2, wt = !0;
          } else r[l++] = 255 & this.readCorner3(H, ie), g -= 2, S += 2, Xe = !0;
        } else r[l++] = 255 & this.readCorner1(H, ie), g -= 2, S += 2, de = !0;
      } while (g < H || S < ie);
      if (l !== this.version.getTotalCodewords()) throw new Ft();
      return r;
    }, p.prototype.readModule = function (r, l, g, S) {
      return r < 0 && (r += g, l += 4 - (g + 4 & 7)), l < 0 && (l += S, r += 4 - (S + 4 & 7)), this.readMappingMatrix.set(l, r), this.mappingBitMatrix.get(l, r);
    }, p.prototype.readUtah = function (r, l, g, S) {
      var H = 0;
      return this.readModule(r - 2, l - 2, g, S) && (H |= 1), H <<= 1, this.readModule(r - 2, l - 1, g, S) && (H |= 1), H <<= 1, this.readModule(r - 1, l - 2, g, S) && (H |= 1), H <<= 1, this.readModule(r - 1, l - 1, g, S) && (H |= 1), H <<= 1, this.readModule(r - 1, l, g, S) && (H |= 1), H <<= 1, this.readModule(r, l - 2, g, S) && (H |= 1), H <<= 1, this.readModule(r, l - 1, g, S) && (H |= 1), H <<= 1, this.readModule(r, l, g, S) && (H |= 1), H;
    }, p.prototype.readCorner1 = function (r, l) {
      var g = 0;
      return this.readModule(r - 1, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 1, 1, r, l) && (g |= 1), g <<= 1, this.readModule(r - 1, 2, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 2, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(2, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(3, l - 1, r, l) && (g |= 1), g;
    }, p.prototype.readCorner2 = function (r, l) {
      var g = 0;
      return this.readModule(r - 3, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 2, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 1, 0, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 4, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 3, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 2, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 1, r, l) && (g |= 1), g;
    }, p.prototype.readCorner3 = function (r, l) {
      var g = 0;
      return this.readModule(r - 1, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 1, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 3, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 2, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 3, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 2, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 1, r, l) && (g |= 1), g;
    }, p.prototype.readCorner4 = function (r, l) {
      var g = 0;
      return this.readModule(r - 3, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 2, 0, r, l) && (g |= 1), g <<= 1, this.readModule(r - 1, 0, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 2, r, l) && (g |= 1), g <<= 1, this.readModule(0, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(1, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(2, l - 1, r, l) && (g |= 1), g <<= 1, this.readModule(3, l - 1, r, l) && (g |= 1), g;
    }, p.prototype.extractDataRegion = function (r) {
      var l = this.version.getSymbolSizeRows(),
        g = this.version.getSymbolSizeColumns();
      if (r.getHeight() !== l) throw new y("Dimension of bitMatrix must match the version size");
      for (var S = this.version.getDataRegionSizeRows(), H = this.version.getDataRegionSizeColumns(), ie = l / S | 0, de = g / H | 0, wt = new co(de * H, ie * S), Lt = 0; Lt < ie; ++Lt) for (var cn = Lt * S, xn = 0; xn < de; ++xn) for (var Hi = xn * H, no = 0; no < S; ++no) for (var Ho = Lt * (S + 2) + 1 + no, zo = cn + no, Bo = 0; Bo < H; ++Bo) r.get(xn * (H + 2) + 1 + Bo, Ho) && wt.set(Hi + Bo, zo);
      return wt;
    }, p;
  }();
  const Hc = ka;
  var tc = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    zl = function () {
      function p(r, l) {
        this.numDataCodewords = r, this.codewords = l;
      }
      return p.getDataBlocks = function (r, l) {
        var g,
          S,
          H,
          ie,
          de = l.getECBlocks(),
          Oe = 0,
          Xe = de.getECBlocks();
        try {
          for (var wt = tc(Xe), Lt = wt.next(); !Lt.done; Lt = wt.next()) Oe += (cn = Lt.value).getCount();
        } catch (Id) {
          g = {
            error: Id
          };
        } finally {
          try {
            Lt && !Lt.done && (S = wt.return) && S.call(wt);
          } finally {
            if (g) throw g.error;
          }
        }
        var xn = new Array(Oe),
          Hi = 0;
        try {
          for (var no = tc(Xe), Ho = no.next(); !Ho.done; Ho = no.next()) for (var cn = Ho.value, zo = 0; zo < cn.getCount(); zo++) {
            var Bo = cn.getDataCodewords(),
              Mr = de.getECCodewords() + Bo;
            xn[Hi++] = new p(Bo, new Uint8Array(Mr));
          }
        } catch (Id) {
          H = {
            error: Id
          };
        } finally {
          try {
            Ho && !Ho.done && (ie = no.return) && ie.call(no);
          } finally {
            if (H) throw H.error;
          }
        }
        var ls = xn[0].codewords.length - de.getECCodewords(),
          Ss = ls - 1,
          Is = 0;
        for (zo = 0; zo < Ss; zo++) for (var Ys = 0; Ys < Hi; Ys++) xn[Ys].codewords[zo] = r[Is++];
        var Sa = 24 === l.getVersionNumber(),
          el = Sa ? 8 : Hi;
        for (Ys = 0; Ys < el; Ys++) xn[Ys].codewords[ls - 1] = r[Is++];
        var tu = xn[0].codewords.length;
        for (zo = ls; zo < tu; zo++) for (Ys = 0; Ys < Hi; Ys++) {
          var Ql = Sa ? (Ys + 8) % Hi : Ys;
          xn[Ql].codewords[Sa && Ql > 7 ? zo - 1 : zo] = r[Is++];
        }
        if (Is !== r.length) throw new y();
        return xn;
      }, p.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
      }, p.prototype.getCodewords = function () {
        return this.codewords;
      }, p;
    }();
  const Tc = zl;
  var Jl = function () {
    function p(r) {
      this.bytes = r, this.byteOffset = 0, this.bitOffset = 0;
    }
    return p.prototype.getBitOffset = function () {
      return this.bitOffset;
    }, p.prototype.getByteOffset = function () {
      return this.byteOffset;
    }, p.prototype.readBits = function (r) {
      if (r < 1 || r > 32 || r > this.available()) throw new y("" + r);
      var l = 0,
        g = this.bitOffset,
        S = this.byteOffset,
        H = this.bytes;
      if (g > 0) {
        var ie = 8 - g,
          de = r < ie ? r : ie;
        l = (H[S] & 255 >> 8 - de << (Oe = ie - de)) >> Oe, r -= de, 8 === (g += de) && (g = 0, S++);
      }
      if (r > 0) {
        for (; r >= 8;) l = l << 8 | 255 & H[S], S++, r -= 8;
        var Oe;
        r > 0 && (l = l << r | (H[S] & 255 >> (Oe = 8 - r) << Oe) >> Oe, g += r);
      }
      return this.bitOffset = g, this.byteOffset = S, l;
    }, p.prototype.available = function () {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    }, p;
  }();
  const hc = Jl;
  var ll = (() => (function (p) {
      p[p.PAD_ENCODE = 0] = "PAD_ENCODE", p[p.ASCII_ENCODE = 1] = "ASCII_ENCODE", p[p.C40_ENCODE = 2] = "C40_ENCODE", p[p.TEXT_ENCODE = 3] = "TEXT_ENCODE", p[p.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", p[p.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", p[p.BASE256_ENCODE = 6] = "BASE256_ENCODE";
    }(ll || (ll = {})), ll))(),
    Tl = function () {
      function p() {}
      return p.decode = function (r) {
        var l = new hc(r),
          g = new Ii(),
          S = new Ii(),
          H = new Array(),
          ie = ll.ASCII_ENCODE;
        do {
          if (ie === ll.ASCII_ENCODE) ie = this.decodeAsciiSegment(l, g, S);else {
            switch (ie) {
              case ll.C40_ENCODE:
                this.decodeC40Segment(l, g);
                break;
              case ll.TEXT_ENCODE:
                this.decodeTextSegment(l, g);
                break;
              case ll.ANSIX12_ENCODE:
                this.decodeAnsiX12Segment(l, g);
                break;
              case ll.EDIFACT_ENCODE:
                this.decodeEdifactSegment(l, g);
                break;
              case ll.BASE256_ENCODE:
                this.decodeBase256Segment(l, g, H);
                break;
              default:
                throw new Ft();
            }
            ie = ll.ASCII_ENCODE;
          }
        } while (ie !== ll.PAD_ENCODE && l.available() > 0);
        return S.length() > 0 && g.append(S.toString()), new Di(r, g.toString(), 0 === H.length ? null : H, null);
      }, p.decodeAsciiSegment = function (r, l, g) {
        var S = !1;
        do {
          var H = r.readBits(8);
          if (0 === H) throw new Ft();
          if (H <= 128) return S && (H += 128), l.append(String.fromCharCode(H - 1)), ll.ASCII_ENCODE;
          if (129 === H) return ll.PAD_ENCODE;
          if (H <= 229) {
            var ie = H - 130;
            ie < 10 && l.append("0"), l.append("" + ie);
          } else switch (H) {
            case 230:
              return ll.C40_ENCODE;
            case 231:
              return ll.BASE256_ENCODE;
            case 232:
              l.append(String.fromCharCode(29));
              break;
            case 233:
            case 234:
            case 241:
              break;
            case 235:
              S = !0;
              break;
            case 236:
              l.append("[)>05"), g.insert(0, "");
              break;
            case 237:
              l.append("[)>06"), g.insert(0, "");
              break;
            case 238:
              return ll.ANSIX12_ENCODE;
            case 239:
              return ll.TEXT_ENCODE;
            case 240:
              return ll.EDIFACT_ENCODE;
            default:
              if (254 !== H || 0 !== r.available()) throw new Ft();
          }
        } while (r.available() > 0);
        return ll.ASCII_ENCODE;
      }, p.decodeC40Segment = function (r, l) {
        var g = !1,
          S = [],
          H = 0;
        do {
          if (8 === r.available()) return;
          var ie = r.readBits(8);
          if (254 === ie) return;
          this.parseTwoBytes(ie, r.readBits(8), S);
          for (var de = 0; de < 3; de++) {
            var Oe = S[de];
            switch (H) {
              case 0:
                if (Oe < 3) H = Oe + 1;else {
                  if (!(Oe < this.C40_BASIC_SET_CHARS.length)) throw new Ft();
                  var Xe = this.C40_BASIC_SET_CHARS[Oe];
                  g ? (l.append(String.fromCharCode(Xe.charCodeAt(0) + 128)), g = !1) : l.append(Xe);
                }
                break;
              case 1:
                g ? (l.append(String.fromCharCode(Oe + 128)), g = !1) : l.append(String.fromCharCode(Oe)), H = 0;
                break;
              case 2:
                if (Oe < this.C40_SHIFT2_SET_CHARS.length) Xe = this.C40_SHIFT2_SET_CHARS[Oe], g ? (l.append(String.fromCharCode(Xe.charCodeAt(0) + 128)), g = !1) : l.append(Xe);else switch (Oe) {
                  case 27:
                    l.append(String.fromCharCode(29));
                    break;
                  case 30:
                    g = !0;
                    break;
                  default:
                    throw new Ft();
                }
                H = 0;
                break;
              case 3:
                g ? (l.append(String.fromCharCode(Oe + 224)), g = !1) : l.append(String.fromCharCode(Oe + 96)), H = 0;
                break;
              default:
                throw new Ft();
            }
          }
        } while (r.available() > 0);
      }, p.decodeTextSegment = function (r, l) {
        var g = !1,
          S = [],
          H = 0;
        do {
          if (8 === r.available()) return;
          var ie = r.readBits(8);
          if (254 === ie) return;
          this.parseTwoBytes(ie, r.readBits(8), S);
          for (var de = 0; de < 3; de++) {
            var Oe = S[de];
            switch (H) {
              case 0:
                if (Oe < 3) H = Oe + 1;else {
                  if (!(Oe < this.TEXT_BASIC_SET_CHARS.length)) throw new Ft();
                  var Xe = this.TEXT_BASIC_SET_CHARS[Oe];
                  g ? (l.append(String.fromCharCode(Xe.charCodeAt(0) + 128)), g = !1) : l.append(Xe);
                }
                break;
              case 1:
                g ? (l.append(String.fromCharCode(Oe + 128)), g = !1) : l.append(String.fromCharCode(Oe)), H = 0;
                break;
              case 2:
                if (Oe < this.TEXT_SHIFT2_SET_CHARS.length) Xe = this.TEXT_SHIFT2_SET_CHARS[Oe], g ? (l.append(String.fromCharCode(Xe.charCodeAt(0) + 128)), g = !1) : l.append(Xe);else switch (Oe) {
                  case 27:
                    l.append(String.fromCharCode(29));
                    break;
                  case 30:
                    g = !0;
                    break;
                  default:
                    throw new Ft();
                }
                H = 0;
                break;
              case 3:
                if (!(Oe < this.TEXT_SHIFT3_SET_CHARS.length)) throw new Ft();
                Xe = this.TEXT_SHIFT3_SET_CHARS[Oe], g ? (l.append(String.fromCharCode(Xe.charCodeAt(0) + 128)), g = !1) : l.append(Xe), H = 0;
                break;
              default:
                throw new Ft();
            }
          }
        } while (r.available() > 0);
      }, p.decodeAnsiX12Segment = function (r, l) {
        var g = [];
        do {
          if (8 === r.available()) return;
          var S = r.readBits(8);
          if (254 === S) return;
          this.parseTwoBytes(S, r.readBits(8), g);
          for (var H = 0; H < 3; H++) {
            var ie = g[H];
            switch (ie) {
              case 0:
                l.append("\r");
                break;
              case 1:
                l.append("*");
                break;
              case 2:
                l.append(">");
                break;
              case 3:
                l.append(" ");
                break;
              default:
                if (ie < 14) l.append(String.fromCharCode(ie + 44));else {
                  if (!(ie < 40)) throw new Ft();
                  l.append(String.fromCharCode(ie + 51));
                }
            }
          }
        } while (r.available() > 0);
      }, p.parseTwoBytes = function (r, l, g) {
        var S = (r << 8) + l - 1,
          H = Math.floor(S / 1600);
        g[0] = H, S -= 1600 * H, H = Math.floor(S / 40), g[1] = H, g[2] = S - 40 * H;
      }, p.decodeEdifactSegment = function (r, l) {
        do {
          if (r.available() <= 16) return;
          for (var g = 0; g < 4; g++) {
            var S = r.readBits(6);
            if (31 === S) {
              var H = 8 - r.getBitOffset();
              return void (8 !== H && r.readBits(H));
            }
            32 & S || (S |= 64), l.append(String.fromCharCode(S));
          }
        } while (r.available() > 0);
      }, p.decodeBase256Segment = function (r, l, g) {
        var ie,
          S = 1 + r.getByteOffset(),
          H = this.unrandomize255State(r.readBits(8), S++);
        if ((ie = 0 === H ? r.available() / 8 | 0 : H < 250 ? H : 250 * (H - 249) + this.unrandomize255State(r.readBits(8), S++)) < 0) throw new Ft();
        for (var de = new Uint8Array(ie), Oe = 0; Oe < ie; Oe++) {
          if (r.available() < 8) throw new Ft();
          de[Oe] = this.unrandomize255State(r.readBits(8), S++);
        }
        g.push(de);
        try {
          l.append(Je.decode(de, Nn.ISO88591));
        } catch (Xe) {
          throw new Sr("Platform does not support required encoding: " + Xe.message);
        }
      }, p.unrandomize255State = function (r, l) {
        var S = r - (149 * l % 255 + 1);
        return S >= 0 ? S : S + 256;
      }, p.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], p.C40_SHIFT2_SET_CHARS = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], p.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], p.TEXT_SHIFT2_SET_CHARS = p.C40_SHIFT2_SET_CHARS, p.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)], p;
    }();
  const $c = Tl;
  var Vl = function () {
    function p() {
      this.rsDecoder = new Ps(ki.DATA_MATRIX_FIELD_256);
    }
    return p.prototype.decode = function (r) {
      var l,
        g,
        S = new Hc(r),
        H = S.getVersion(),
        ie = S.readCodewords(),
        de = Tc.getDataBlocks(ie, H),
        Oe = 0;
      try {
        for (var Xe = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(de), wt = Xe.next(); !wt.done; wt = Xe.next()) Oe += wt.value.getNumDataCodewords();
      } catch (Mr) {
        l = {
          error: Mr
        };
      } finally {
        try {
          wt && !wt.done && (g = Xe.return) && g.call(Xe);
        } finally {
          if (l) throw l.error;
        }
      }
      for (var cn = new Uint8Array(Oe), xn = de.length, Hi = 0; Hi < xn; Hi++) {
        var no = de[Hi],
          Ho = no.getCodewords(),
          zo = no.getNumDataCodewords();
        this.correctErrors(Ho, zo);
        for (var Bo = 0; Bo < zo; Bo++) cn[Bo * xn + Hi] = Ho[Bo];
      }
      return $c.decode(cn);
    }, p.prototype.correctErrors = function (r, l) {
      var g = new Int32Array(r);
      try {
        this.rsDecoder.decode(g, r.length - l);
      } catch {
        throw new ke();
      }
      for (var S = 0; S < l; S++) r[S] = g[S];
    }, p;
  }();
  const Bc = Vl;
  var bu = function () {
    function p(r) {
      this.image = r, this.rectangleDetector = new ri(this.image);
    }
    return p.prototype.detect = function () {
      var r = this.rectangleDetector.detect(),
        l = this.detectSolid1(r);
      if ((l = this.detectSolid2(l))[3] = this.correctTopRight(l), !l[3]) throw new pt();
      var g = (l = this.shiftToModuleCenter(l))[0],
        S = l[1],
        H = l[2],
        ie = l[3],
        de = this.transitionsBetween(g, ie) + 1,
        Oe = this.transitionsBetween(H, ie) + 1;
      1 == (1 & de) && (de += 1), 1 == (1 & Oe) && (Oe += 1), 4 * de < 7 * Oe && 4 * Oe < 7 * de && (de = Oe = Math.max(de, Oe));
      var Xe = p.sampleGrid(this.image, g, S, H, ie, de, Oe);
      return new xa(Xe, [g, S, H, ie]);
    }, p.shiftPoint = function (r, l, g) {
      var S = (l.getX() - r.getX()) / (g + 1),
        H = (l.getY() - r.getY()) / (g + 1);
      return new Or(r.getX() + S, r.getY() + H);
    }, p.moveAway = function (r, l, g) {
      var S = r.getX(),
        H = r.getY();
      return S < l ? S -= 1 : S += 1, H < g ? H -= 1 : H += 1, new Or(S, H);
    }, p.prototype.detectSolid1 = function (r) {
      var l = r[0],
        g = r[1],
        S = r[3],
        H = r[2],
        ie = this.transitionsBetween(l, g),
        de = this.transitionsBetween(g, S),
        Oe = this.transitionsBetween(S, H),
        Xe = this.transitionsBetween(H, l),
        wt = ie,
        Lt = [H, l, g, S];
      return wt > de && (wt = de, Lt[0] = l, Lt[1] = g, Lt[2] = S, Lt[3] = H), wt > Oe && (wt = Oe, Lt[0] = g, Lt[1] = S, Lt[2] = H, Lt[3] = l), wt > Xe && (Lt[0] = S, Lt[1] = H, Lt[2] = l, Lt[3] = g), Lt;
    }, p.prototype.detectSolid2 = function (r) {
      var l = r[0],
        g = r[1],
        S = r[2],
        H = r[3],
        ie = this.transitionsBetween(l, H),
        de = p.shiftPoint(g, S, 4 * (ie + 1)),
        Oe = p.shiftPoint(S, g, 4 * (ie + 1));
      return this.transitionsBetween(de, l) < this.transitionsBetween(Oe, H) ? (r[0] = l, r[1] = g, r[2] = S, r[3] = H) : (r[0] = g, r[1] = S, r[2] = H, r[3] = l), r;
    }, p.prototype.correctTopRight = function (r) {
      var l = r[0],
        g = r[1],
        S = r[2],
        H = r[3],
        ie = this.transitionsBetween(l, H),
        de = this.transitionsBetween(g, H),
        Oe = p.shiftPoint(l, g, 4 * (de + 1)),
        Xe = p.shiftPoint(S, g, 4 * (ie + 1));
      ie = this.transitionsBetween(Oe, H), de = this.transitionsBetween(Xe, H);
      var wt = new Or(H.getX() + (S.getX() - g.getX()) / (ie + 1), H.getY() + (S.getY() - g.getY()) / (ie + 1)),
        Lt = new Or(H.getX() + (l.getX() - g.getX()) / (de + 1), H.getY() + (l.getY() - g.getY()) / (de + 1));
      return this.isValid(wt) ? this.isValid(Lt) ? this.transitionsBetween(Oe, wt) + this.transitionsBetween(Xe, wt) > this.transitionsBetween(Oe, Lt) + this.transitionsBetween(Xe, Lt) ? wt : Lt : wt : this.isValid(Lt) ? Lt : null;
    }, p.prototype.shiftToModuleCenter = function (r) {
      var l = r[0],
        g = r[1],
        S = r[2],
        H = r[3],
        ie = this.transitionsBetween(l, H) + 1,
        de = this.transitionsBetween(S, H) + 1,
        Oe = p.shiftPoint(l, g, 4 * de),
        Xe = p.shiftPoint(S, g, 4 * ie);
      1 == (1 & (ie = this.transitionsBetween(Oe, H) + 1)) && (ie += 1), 1 == (1 & (de = this.transitionsBetween(Xe, H) + 1)) && (de += 1);
      var cn,
        xn,
        wt = (l.getX() + g.getX() + S.getX() + H.getX()) / 4,
        Lt = (l.getY() + g.getY() + S.getY() + H.getY()) / 4;
      return l = p.moveAway(l, wt, Lt), g = p.moveAway(g, wt, Lt), S = p.moveAway(S, wt, Lt), H = p.moveAway(H, wt, Lt), Oe = p.shiftPoint(l, g, 4 * de), Oe = p.shiftPoint(Oe, H, 4 * ie), cn = p.shiftPoint(g, l, 4 * de), cn = p.shiftPoint(cn, S, 4 * ie), Xe = p.shiftPoint(S, H, 4 * de), Xe = p.shiftPoint(Xe, g, 4 * ie), xn = p.shiftPoint(H, S, 4 * de), [Oe, cn, Xe, xn = p.shiftPoint(xn, l, 4 * ie)];
    }, p.prototype.isValid = function (r) {
      return r.getX() >= 0 && r.getX() < this.image.getWidth() && r.getY() > 0 && r.getY() < this.image.getHeight();
    }, p.sampleGrid = function (r, l, g, S, H, ie, de) {
      return Ro.getInstance().sampleGrid(r, ie, de, .5, .5, ie - .5, .5, ie - .5, de - .5, .5, de - .5, l.getX(), l.getY(), H.getX(), H.getY(), S.getX(), S.getY(), g.getX(), g.getY());
    }, p.prototype.transitionsBetween = function (r, l) {
      var g = Math.trunc(r.getX()),
        S = Math.trunc(r.getY()),
        H = Math.trunc(l.getX()),
        ie = Math.trunc(l.getY()),
        de = Math.abs(ie - S) > Math.abs(H - g);
      if (de) {
        var Oe = g;
        g = S, S = Oe, Oe = H, H = ie, ie = Oe;
      }
      for (var Xe = Math.abs(H - g), wt = Math.abs(ie - S), Lt = -Xe / 2, cn = S < ie ? 1 : -1, xn = g < H ? 1 : -1, Hi = 0, no = this.image.get(de ? S : g, de ? g : S), Ho = g, zo = S; Ho !== H; Ho += xn) {
        var Bo = this.image.get(de ? zo : Ho, de ? Ho : zo);
        if (Bo !== no && (Hi++, no = Bo), (Lt += wt) > 0) {
          if (zo === ie) break;
          zo += cn, Lt -= Xe;
        }
      }
      return Hi;
    }, p;
  }();
  const Kc = bu;
  var Al = function () {
    function p() {
      this.decoder = new Bc();
    }
    return p.prototype.decode = function (r, l) {
      var g, S;
      if (void 0 === l && (l = null), null != l && l.has(mt.PURE_BARCODE)) {
        var H = p.extractPureBits(r.getBlackMatrix());
        g = this.decoder.decode(H), S = p.NO_POINTS;
      } else {
        var ie = new Kc(r.getBlackMatrix()).detect();
        g = this.decoder.decode(ie.getBits()), S = ie.getPoints();
      }
      var de = g.getRawBytes(),
        Oe = new br(g.getText(), de, 8 * de.length, S, qo.DATA_MATRIX, ae.currentTimeMillis()),
        Xe = g.getByteSegments();
      null != Xe && Oe.putMetadata(wr.BYTE_SEGMENTS, Xe);
      var wt = g.getECLevel();
      return null != wt && Oe.putMetadata(wr.ERROR_CORRECTION_LEVEL, wt), Oe;
    }, p.prototype.reset = function () {}, p.extractPureBits = function (r) {
      var l = r.getTopLeftOnBit(),
        g = r.getBottomRightOnBit();
      if (null == l || null == g) throw new pt();
      var S = this.moduleSize(l, r),
        H = l[1],
        de = l[0],
        Xe = (g[0] - de + 1) / S,
        wt = (g[1] - H + 1) / S;
      if (Xe <= 0 || wt <= 0) throw new pt();
      var Lt = S / 2;
      H += Lt, de += Lt;
      for (var cn = new co(Xe, wt), xn = 0; xn < wt; xn++) for (var Hi = H + xn * S, no = 0; no < Xe; no++) r.get(de + no * S, Hi) && cn.set(no, xn);
      return cn;
    }, p.moduleSize = function (r, l) {
      for (var g = l.getWidth(), S = r[0], H = r[1]; S < g && l.get(S, H);) S++;
      if (S === g) throw new pt();
      var ie = S - r[0];
      if (0 === ie) throw new pt();
      return ie;
    }, p.NO_POINTS = [], p;
  }();
  const sc = Al;
  var Bi = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Rc = (function (p) {
      Bi(function r(l) {
        return void 0 === l && (l = 500), p.call(this, new sc(), l) || this;
      }, p);
    }(Eo), (() => (function (p) {
      p[p.L = 0] = "L", p[p.M = 1] = "M", p[p.Q = 2] = "Q", p[p.H = 3] = "H";
    }(Rc || (Rc = {})), Rc))()),
    ac = function () {
      function p(r, l, g) {
        this.value = r, this.stringValue = l, this.bits = g, p.FOR_BITS.set(g, this), p.FOR_VALUE.set(r, this);
      }
      return p.prototype.getValue = function () {
        return this.value;
      }, p.prototype.getBits = function () {
        return this.bits;
      }, p.fromString = function (r) {
        switch (r) {
          case "L":
            return p.L;
          case "M":
            return p.M;
          case "Q":
            return p.Q;
          case "H":
            return p.H;
          default:
            throw new T(r + "not available");
        }
      }, p.prototype.toString = function () {
        return this.stringValue;
      }, p.prototype.equals = function (r) {
        return r instanceof p && this.value === r.value;
      }, p.forBits = function (r) {
        if (r < 0 || r >= p.FOR_BITS.size) throw new y();
        return p.FOR_BITS.get(r);
      }, p.FOR_BITS = new Map(), p.FOR_VALUE = new Map(), p.L = new p(Rc.L, "L", 1), p.M = new p(Rc.M, "M", 0), p.Q = new p(Rc.Q, "Q", 3), p.H = new p(Rc.H, "H", 2), p;
    }();
  const Pa = ac;
  var iu = function () {
    function p(r) {
      this.errorCorrectionLevel = Pa.forBits(r >> 3 & 3), this.dataMask = 7 & r;
    }
    return p.numBitsDiffering = function (r, l) {
      return We.bitCount(r ^ l);
    }, p.decodeFormatInformation = function (r, l) {
      var g = p.doDecodeFormatInformation(r, l);
      return null !== g ? g : p.doDecodeFormatInformation(r ^ p.FORMAT_INFO_MASK_QR, l ^ p.FORMAT_INFO_MASK_QR);
    }, p.doDecodeFormatInformation = function (r, l) {
      var g,
        S,
        H = Number.MAX_SAFE_INTEGER,
        ie = 0;
      try {
        for (var de = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(p.FORMAT_INFO_DECODE_LOOKUP), Oe = de.next(); !Oe.done; Oe = de.next()) {
          var Xe = Oe.value,
            wt = Xe[0];
          if (wt === r || wt === l) return new p(Xe[1]);
          var Lt = p.numBitsDiffering(r, wt);
          Lt < H && (ie = Xe[1], H = Lt), r !== l && (Lt = p.numBitsDiffering(l, wt)) < H && (ie = Xe[1], H = Lt);
        }
      } catch (cn) {
        g = {
          error: cn
        };
      } finally {
        try {
          Oe && !Oe.done && (S = de.return) && S.call(de);
        } finally {
          if (g) throw g.error;
        }
      }
      return H <= 3 ? new p(ie) : null;
    }, p.prototype.getErrorCorrectionLevel = function () {
      return this.errorCorrectionLevel;
    }, p.prototype.getDataMask = function () {
      return this.dataMask;
    }, p.prototype.hashCode = function () {
      return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
    }, p.prototype.equals = function (r) {
      return r instanceof p && this.errorCorrectionLevel === r.errorCorrectionLevel && this.dataMask === r.dataMask;
    }, p.FORMAT_INFO_MASK_QR = 21522, p.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], p;
  }();
  const Fc = iu;
  var Jc = function () {
    function p(r) {
      for (var l = [], g = 1; g < arguments.length; g++) l[g - 1] = arguments[g];
      this.ecCodewordsPerBlock = r, this.ecBlocks = l;
    }
    return p.prototype.getECCodewordsPerBlock = function () {
      return this.ecCodewordsPerBlock;
    }, p.prototype.getNumBlocks = function () {
      var r,
        l,
        g = 0,
        S = this.ecBlocks;
      try {
        for (var H = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(S), ie = H.next(); !ie.done; ie = H.next()) g += ie.value.getCount();
      } catch (Oe) {
        r = {
          error: Oe
        };
      } finally {
        try {
          ie && !ie.done && (l = H.return) && l.call(H);
        } finally {
          if (r) throw r.error;
        }
      }
      return g;
    }, p.prototype.getTotalECCodewords = function () {
      return this.ecCodewordsPerBlock * this.getNumBlocks();
    }, p.prototype.getECBlocks = function () {
      return this.ecBlocks;
    }, p;
  }();
  const _t = Jc;
  var Tn = function () {
    function p(r, l) {
      this.count = r, this.dataCodewords = l;
    }
    return p.prototype.getCount = function () {
      return this.count;
    }, p.prototype.getDataCodewords = function () {
      return this.dataCodewords;
    }, p;
  }();
  const Ge = Tn;
  var Vi = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Zo = function () {
      function p(r, l) {
        for (var g, S, H = [], ie = 2; ie < arguments.length; ie++) H[ie - 2] = arguments[ie];
        this.versionNumber = r, this.alignmentPatternCenters = l, this.ecBlocks = H;
        var de = 0,
          Oe = H[0].getECCodewordsPerBlock(),
          Xe = H[0].getECBlocks();
        try {
          for (var wt = Vi(Xe), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
            var cn = Lt.value;
            de += cn.getCount() * (cn.getDataCodewords() + Oe);
          }
        } catch (xn) {
          g = {
            error: xn
          };
        } finally {
          try {
            Lt && !Lt.done && (S = wt.return) && S.call(wt);
          } finally {
            if (g) throw g.error;
          }
        }
        this.totalCodewords = de;
      }
      return p.prototype.getVersionNumber = function () {
        return this.versionNumber;
      }, p.prototype.getAlignmentPatternCenters = function () {
        return this.alignmentPatternCenters;
      }, p.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
      }, p.prototype.getDimensionForVersion = function () {
        return 17 + 4 * this.versionNumber;
      }, p.prototype.getECBlocksForLevel = function (r) {
        return this.ecBlocks[r.getValue()];
      }, p.getProvisionalVersionForDimension = function (r) {
        if (r % 4 != 1) throw new Ft();
        try {
          return this.getVersionForNumber((r - 17) / 4);
        } catch {
          throw new Ft();
        }
      }, p.getVersionForNumber = function (r) {
        if (r < 1 || r > 40) throw new y();
        return p.VERSIONS[r - 1];
      }, p.decodeVersionInformation = function (r) {
        for (var l = Number.MAX_SAFE_INTEGER, g = 0, S = 0; S < p.VERSION_DECODE_INFO.length; S++) {
          var H = p.VERSION_DECODE_INFO[S];
          if (H === r) return p.getVersionForNumber(S + 7);
          var ie = Fc.numBitsDiffering(r, H);
          ie < l && (g = S + 7, l = ie);
        }
        return l <= 3 ? p.getVersionForNumber(g) : null;
      }, p.prototype.buildFunctionPattern = function () {
        var r = this.getDimensionForVersion(),
          l = new co(r);
        l.setRegion(0, 0, 9, 9), l.setRegion(r - 8, 0, 8, 9), l.setRegion(0, r - 8, 9, 8);
        for (var g = this.alignmentPatternCenters.length, S = 0; S < g; S++) for (var H = this.alignmentPatternCenters[S] - 2, ie = 0; ie < g; ie++) 0 === S && (0 === ie || ie === g - 1) || S === g - 1 && 0 === ie || l.setRegion(this.alignmentPatternCenters[ie] - 2, H, 5, 5);
        return l.setRegion(6, 9, 1, r - 17), l.setRegion(9, 6, r - 17, 1), this.versionNumber > 6 && (l.setRegion(r - 11, 0, 3, 6), l.setRegion(0, r - 11, 6, 3)), l;
      }, p.prototype.toString = function () {
        return "" + this.versionNumber;
      }, p.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), p.VERSIONS = [new p(1, new Int32Array(0), new _t(7, new Ge(1, 19)), new _t(10, new Ge(1, 16)), new _t(13, new Ge(1, 13)), new _t(17, new Ge(1, 9))), new p(2, Int32Array.from([6, 18]), new _t(10, new Ge(1, 34)), new _t(16, new Ge(1, 28)), new _t(22, new Ge(1, 22)), new _t(28, new Ge(1, 16))), new p(3, Int32Array.from([6, 22]), new _t(15, new Ge(1, 55)), new _t(26, new Ge(1, 44)), new _t(18, new Ge(2, 17)), new _t(22, new Ge(2, 13))), new p(4, Int32Array.from([6, 26]), new _t(20, new Ge(1, 80)), new _t(18, new Ge(2, 32)), new _t(26, new Ge(2, 24)), new _t(16, new Ge(4, 9))), new p(5, Int32Array.from([6, 30]), new _t(26, new Ge(1, 108)), new _t(24, new Ge(2, 43)), new _t(18, new Ge(2, 15), new Ge(2, 16)), new _t(22, new Ge(2, 11), new Ge(2, 12))), new p(6, Int32Array.from([6, 34]), new _t(18, new Ge(2, 68)), new _t(16, new Ge(4, 27)), new _t(24, new Ge(4, 19)), new _t(28, new Ge(4, 15))), new p(7, Int32Array.from([6, 22, 38]), new _t(20, new Ge(2, 78)), new _t(18, new Ge(4, 31)), new _t(18, new Ge(2, 14), new Ge(4, 15)), new _t(26, new Ge(4, 13), new Ge(1, 14))), new p(8, Int32Array.from([6, 24, 42]), new _t(24, new Ge(2, 97)), new _t(22, new Ge(2, 38), new Ge(2, 39)), new _t(22, new Ge(4, 18), new Ge(2, 19)), new _t(26, new Ge(4, 14), new Ge(2, 15))), new p(9, Int32Array.from([6, 26, 46]), new _t(30, new Ge(2, 116)), new _t(22, new Ge(3, 36), new Ge(2, 37)), new _t(20, new Ge(4, 16), new Ge(4, 17)), new _t(24, new Ge(4, 12), new Ge(4, 13))), new p(10, Int32Array.from([6, 28, 50]), new _t(18, new Ge(2, 68), new Ge(2, 69)), new _t(26, new Ge(4, 43), new Ge(1, 44)), new _t(24, new Ge(6, 19), new Ge(2, 20)), new _t(28, new Ge(6, 15), new Ge(2, 16))), new p(11, Int32Array.from([6, 30, 54]), new _t(20, new Ge(4, 81)), new _t(30, new Ge(1, 50), new Ge(4, 51)), new _t(28, new Ge(4, 22), new Ge(4, 23)), new _t(24, new Ge(3, 12), new Ge(8, 13))), new p(12, Int32Array.from([6, 32, 58]), new _t(24, new Ge(2, 92), new Ge(2, 93)), new _t(22, new Ge(6, 36), new Ge(2, 37)), new _t(26, new Ge(4, 20), new Ge(6, 21)), new _t(28, new Ge(7, 14), new Ge(4, 15))), new p(13, Int32Array.from([6, 34, 62]), new _t(26, new Ge(4, 107)), new _t(22, new Ge(8, 37), new Ge(1, 38)), new _t(24, new Ge(8, 20), new Ge(4, 21)), new _t(22, new Ge(12, 11), new Ge(4, 12))), new p(14, Int32Array.from([6, 26, 46, 66]), new _t(30, new Ge(3, 115), new Ge(1, 116)), new _t(24, new Ge(4, 40), new Ge(5, 41)), new _t(20, new Ge(11, 16), new Ge(5, 17)), new _t(24, new Ge(11, 12), new Ge(5, 13))), new p(15, Int32Array.from([6, 26, 48, 70]), new _t(22, new Ge(5, 87), new Ge(1, 88)), new _t(24, new Ge(5, 41), new Ge(5, 42)), new _t(30, new Ge(5, 24), new Ge(7, 25)), new _t(24, new Ge(11, 12), new Ge(7, 13))), new p(16, Int32Array.from([6, 26, 50, 74]), new _t(24, new Ge(5, 98), new Ge(1, 99)), new _t(28, new Ge(7, 45), new Ge(3, 46)), new _t(24, new Ge(15, 19), new Ge(2, 20)), new _t(30, new Ge(3, 15), new Ge(13, 16))), new p(17, Int32Array.from([6, 30, 54, 78]), new _t(28, new Ge(1, 107), new Ge(5, 108)), new _t(28, new Ge(10, 46), new Ge(1, 47)), new _t(28, new Ge(1, 22), new Ge(15, 23)), new _t(28, new Ge(2, 14), new Ge(17, 15))), new p(18, Int32Array.from([6, 30, 56, 82]), new _t(30, new Ge(5, 120), new Ge(1, 121)), new _t(26, new Ge(9, 43), new Ge(4, 44)), new _t(28, new Ge(17, 22), new Ge(1, 23)), new _t(28, new Ge(2, 14), new Ge(19, 15))), new p(19, Int32Array.from([6, 30, 58, 86]), new _t(28, new Ge(3, 113), new Ge(4, 114)), new _t(26, new Ge(3, 44), new Ge(11, 45)), new _t(26, new Ge(17, 21), new Ge(4, 22)), new _t(26, new Ge(9, 13), new Ge(16, 14))), new p(20, Int32Array.from([6, 34, 62, 90]), new _t(28, new Ge(3, 107), new Ge(5, 108)), new _t(26, new Ge(3, 41), new Ge(13, 42)), new _t(30, new Ge(15, 24), new Ge(5, 25)), new _t(28, new Ge(15, 15), new Ge(10, 16))), new p(21, Int32Array.from([6, 28, 50, 72, 94]), new _t(28, new Ge(4, 116), new Ge(4, 117)), new _t(26, new Ge(17, 42)), new _t(28, new Ge(17, 22), new Ge(6, 23)), new _t(30, new Ge(19, 16), new Ge(6, 17))), new p(22, Int32Array.from([6, 26, 50, 74, 98]), new _t(28, new Ge(2, 111), new Ge(7, 112)), new _t(28, new Ge(17, 46)), new _t(30, new Ge(7, 24), new Ge(16, 25)), new _t(24, new Ge(34, 13))), new p(23, Int32Array.from([6, 30, 54, 78, 102]), new _t(30, new Ge(4, 121), new Ge(5, 122)), new _t(28, new Ge(4, 47), new Ge(14, 48)), new _t(30, new Ge(11, 24), new Ge(14, 25)), new _t(30, new Ge(16, 15), new Ge(14, 16))), new p(24, Int32Array.from([6, 28, 54, 80, 106]), new _t(30, new Ge(6, 117), new Ge(4, 118)), new _t(28, new Ge(6, 45), new Ge(14, 46)), new _t(30, new Ge(11, 24), new Ge(16, 25)), new _t(30, new Ge(30, 16), new Ge(2, 17))), new p(25, Int32Array.from([6, 32, 58, 84, 110]), new _t(26, new Ge(8, 106), new Ge(4, 107)), new _t(28, new Ge(8, 47), new Ge(13, 48)), new _t(30, new Ge(7, 24), new Ge(22, 25)), new _t(30, new Ge(22, 15), new Ge(13, 16))), new p(26, Int32Array.from([6, 30, 58, 86, 114]), new _t(28, new Ge(10, 114), new Ge(2, 115)), new _t(28, new Ge(19, 46), new Ge(4, 47)), new _t(28, new Ge(28, 22), new Ge(6, 23)), new _t(30, new Ge(33, 16), new Ge(4, 17))), new p(27, Int32Array.from([6, 34, 62, 90, 118]), new _t(30, new Ge(8, 122), new Ge(4, 123)), new _t(28, new Ge(22, 45), new Ge(3, 46)), new _t(30, new Ge(8, 23), new Ge(26, 24)), new _t(30, new Ge(12, 15), new Ge(28, 16))), new p(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new _t(30, new Ge(3, 117), new Ge(10, 118)), new _t(28, new Ge(3, 45), new Ge(23, 46)), new _t(30, new Ge(4, 24), new Ge(31, 25)), new _t(30, new Ge(11, 15), new Ge(31, 16))), new p(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new _t(30, new Ge(7, 116), new Ge(7, 117)), new _t(28, new Ge(21, 45), new Ge(7, 46)), new _t(30, new Ge(1, 23), new Ge(37, 24)), new _t(30, new Ge(19, 15), new Ge(26, 16))), new p(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new _t(30, new Ge(5, 115), new Ge(10, 116)), new _t(28, new Ge(19, 47), new Ge(10, 48)), new _t(30, new Ge(15, 24), new Ge(25, 25)), new _t(30, new Ge(23, 15), new Ge(25, 16))), new p(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new _t(30, new Ge(13, 115), new Ge(3, 116)), new _t(28, new Ge(2, 46), new Ge(29, 47)), new _t(30, new Ge(42, 24), new Ge(1, 25)), new _t(30, new Ge(23, 15), new Ge(28, 16))), new p(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new _t(30, new Ge(17, 115)), new _t(28, new Ge(10, 46), new Ge(23, 47)), new _t(30, new Ge(10, 24), new Ge(35, 25)), new _t(30, new Ge(19, 15), new Ge(35, 16))), new p(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new _t(30, new Ge(17, 115), new Ge(1, 116)), new _t(28, new Ge(14, 46), new Ge(21, 47)), new _t(30, new Ge(29, 24), new Ge(19, 25)), new _t(30, new Ge(11, 15), new Ge(46, 16))), new p(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new _t(30, new Ge(13, 115), new Ge(6, 116)), new _t(28, new Ge(14, 46), new Ge(23, 47)), new _t(30, new Ge(44, 24), new Ge(7, 25)), new _t(30, new Ge(59, 16), new Ge(1, 17))), new p(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new _t(30, new Ge(12, 121), new Ge(7, 122)), new _t(28, new Ge(12, 47), new Ge(26, 48)), new _t(30, new Ge(39, 24), new Ge(14, 25)), new _t(30, new Ge(22, 15), new Ge(41, 16))), new p(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new _t(30, new Ge(6, 121), new Ge(14, 122)), new _t(28, new Ge(6, 47), new Ge(34, 48)), new _t(30, new Ge(46, 24), new Ge(10, 25)), new _t(30, new Ge(2, 15), new Ge(64, 16))), new p(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new _t(30, new Ge(17, 122), new Ge(4, 123)), new _t(28, new Ge(29, 46), new Ge(14, 47)), new _t(30, new Ge(49, 24), new Ge(10, 25)), new _t(30, new Ge(24, 15), new Ge(46, 16))), new p(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new _t(30, new Ge(4, 122), new Ge(18, 123)), new _t(28, new Ge(13, 46), new Ge(32, 47)), new _t(30, new Ge(48, 24), new Ge(14, 25)), new _t(30, new Ge(42, 15), new Ge(32, 16))), new p(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new _t(30, new Ge(20, 117), new Ge(4, 118)), new _t(28, new Ge(40, 47), new Ge(7, 48)), new _t(30, new Ge(43, 24), new Ge(22, 25)), new _t(30, new Ge(10, 15), new Ge(67, 16))), new p(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new _t(30, new Ge(19, 118), new Ge(6, 119)), new _t(28, new Ge(18, 47), new Ge(31, 48)), new _t(30, new Ge(34, 24), new Ge(34, 25)), new _t(30, new Ge(20, 15), new Ge(61, 16)))], p;
    }();
  const Zr = Zo;
  var pa = (() => (function (p) {
      p[p.DATA_MASK_000 = 0] = "DATA_MASK_000", p[p.DATA_MASK_001 = 1] = "DATA_MASK_001", p[p.DATA_MASK_010 = 2] = "DATA_MASK_010", p[p.DATA_MASK_011 = 3] = "DATA_MASK_011", p[p.DATA_MASK_100 = 4] = "DATA_MASK_100", p[p.DATA_MASK_101 = 5] = "DATA_MASK_101", p[p.DATA_MASK_110 = 6] = "DATA_MASK_110", p[p.DATA_MASK_111 = 7] = "DATA_MASK_111";
    }(pa || (pa = {})), pa))(),
    fl = function () {
      function p(r, l) {
        this.value = r, this.isMasked = l;
      }
      return p.prototype.unmaskBitMatrix = function (r, l) {
        for (var g = 0; g < l; g++) for (var S = 0; S < l; S++) this.isMasked(g, S) && r.flip(S, g);
      }, p.values = new Map([[pa.DATA_MASK_000, new p(pa.DATA_MASK_000, function (r, l) {
        return 0 == (r + l & 1);
      })], [pa.DATA_MASK_001, new p(pa.DATA_MASK_001, function (r, l) {
        return 0 == (1 & r);
      })], [pa.DATA_MASK_010, new p(pa.DATA_MASK_010, function (r, l) {
        return l % 3 == 0;
      })], [pa.DATA_MASK_011, new p(pa.DATA_MASK_011, function (r, l) {
        return (r + l) % 3 == 0;
      })], [pa.DATA_MASK_100, new p(pa.DATA_MASK_100, function (r, l) {
        return 0 == (Math.floor(r / 2) + Math.floor(l / 3) & 1);
      })], [pa.DATA_MASK_101, new p(pa.DATA_MASK_101, function (r, l) {
        return r * l % 6 == 0;
      })], [pa.DATA_MASK_110, new p(pa.DATA_MASK_110, function (r, l) {
        return r * l % 6 < 3;
      })], [pa.DATA_MASK_111, new p(pa.DATA_MASK_111, function (r, l) {
        return 0 == (r + l + r * l % 3 & 1);
      })]]), p;
    }();
  const Bs = fl;
  var qc = function () {
    function p(r) {
      var l = r.getHeight();
      if (l < 21 || 1 != (3 & l)) throw new Ft();
      this.bitMatrix = r;
    }
    return p.prototype.readFormatInformation = function () {
      if (null != this.parsedFormatInfo) return this.parsedFormatInfo;
      for (var r = 0, l = 0; l < 6; l++) r = this.copyBit(l, 8, r);
      r = this.copyBit(7, 8, r), r = this.copyBit(8, 8, r), r = this.copyBit(8, 7, r);
      for (var g = 5; g >= 0; g--) r = this.copyBit(8, g, r);
      var S = this.bitMatrix.getHeight(),
        H = 0,
        ie = S - 7;
      for (g = S - 1; g >= ie; g--) H = this.copyBit(8, g, H);
      for (l = S - 8; l < S; l++) H = this.copyBit(l, 8, H);
      if (this.parsedFormatInfo = Fc.decodeFormatInformation(r, H), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
      throw new Ft();
    }, p.prototype.readVersion = function () {
      if (null != this.parsedVersion) return this.parsedVersion;
      var r = this.bitMatrix.getHeight(),
        l = Math.floor((r - 17) / 4);
      if (l <= 6) return Zr.getVersionForNumber(l);
      for (var g = 0, S = r - 11, H = 5; H >= 0; H--) for (var ie = r - 9; ie >= S; ie--) g = this.copyBit(ie, H, g);
      var de = Zr.decodeVersionInformation(g);
      if (null !== de && de.getDimensionForVersion() === r) return this.parsedVersion = de, de;
      for (g = 0, ie = 5; ie >= 0; ie--) for (H = r - 9; H >= S; H--) g = this.copyBit(ie, H, g);
      if (null !== (de = Zr.decodeVersionInformation(g)) && de.getDimensionForVersion() === r) return this.parsedVersion = de, de;
      throw new Ft();
    }, p.prototype.copyBit = function (r, l, g) {
      return (this.isMirror ? this.bitMatrix.get(l, r) : this.bitMatrix.get(r, l)) ? g << 1 | 1 : g << 1;
    }, p.prototype.readCodewords = function () {
      var r = this.readFormatInformation(),
        l = this.readVersion(),
        g = Bs.values.get(r.getDataMask()),
        S = this.bitMatrix.getHeight();
      g.unmaskBitMatrix(this.bitMatrix, S);
      for (var H = l.buildFunctionPattern(), ie = !0, de = new Uint8Array(l.getTotalCodewords()), Oe = 0, Xe = 0, wt = 0, Lt = S - 1; Lt > 0; Lt -= 2) {
        6 === Lt && Lt--;
        for (var cn = 0; cn < S; cn++) for (var xn = ie ? S - 1 - cn : cn, Hi = 0; Hi < 2; Hi++) H.get(Lt - Hi, xn) || (wt++, Xe <<= 1, this.bitMatrix.get(Lt - Hi, xn) && (Xe |= 1), 8 === wt && (de[Oe++] = Xe, wt = 0, Xe = 0));
        ie = !ie;
      }
      if (Oe !== l.getTotalCodewords()) throw new Ft();
      return de;
    }, p.prototype.remask = function () {
      if (null !== this.parsedFormatInfo) {
        var r = Bs.values.get(this.parsedFormatInfo.getDataMask()),
          l = this.bitMatrix.getHeight();
        r.unmaskBitMatrix(this.bitMatrix, l);
      }
    }, p.prototype.setMirror = function (r) {
      this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = r;
    }, p.prototype.mirror = function () {
      for (var r = this.bitMatrix, l = 0, g = r.getWidth(); l < g; l++) for (var S = l + 1, H = r.getHeight(); S < H; S++) r.get(l, S) !== r.get(S, l) && (r.flip(S, l), r.flip(l, S));
    }, p;
  }();
  const $e = qc;
  var Hn = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    nt = function () {
      function p(r, l) {
        this.numDataCodewords = r, this.codewords = l;
      }
      return p.getDataBlocks = function (r, l, g) {
        var S, H, ie, de;
        if (r.length !== l.getTotalCodewords()) throw new y();
        var Oe = l.getECBlocksForLevel(g),
          Xe = 0,
          wt = Oe.getECBlocks();
        try {
          for (var Lt = Hn(wt), cn = Lt.next(); !cn.done; cn = Lt.next()) Xe += (xn = cn.value).getCount();
        } catch (pu) {
          S = {
            error: pu
          };
        } finally {
          try {
            cn && !cn.done && (H = Lt.return) && H.call(Lt);
          } finally {
            if (S) throw S.error;
          }
        }
        var Hi = new Array(Xe),
          no = 0;
        try {
          for (var Ho = Hn(wt), zo = Ho.next(); !zo.done; zo = Ho.next()) for (var xn = zo.value, Bo = 0; Bo < xn.getCount(); Bo++) {
            var Mr = xn.getDataCodewords(),
              Ur = Oe.getECCodewordsPerBlock() + Mr;
            Hi[no++] = new p(Mr, new Uint8Array(Ur));
          }
        } catch (pu) {
          ie = {
            error: pu
          };
        } finally {
          try {
            zo && !zo.done && (de = Ho.return) && de.call(Ho);
          } finally {
            if (ie) throw ie.error;
          }
        }
        for (var ls = Hi[0].codewords.length, Ss = Hi.length - 1; Ss >= 0 && Hi[Ss].codewords.length !== ls;) Ss--;
        Ss++;
        var Ys = ls - Oe.getECCodewordsPerBlock(),
          Sa = 0;
        for (Bo = 0; Bo < Ys; Bo++) for (var el = 0; el < no; el++) Hi[el].codewords[Bo] = r[Sa++];
        for (el = Ss; el < no; el++) Hi[el].codewords[Ys] = r[Sa++];
        var tu = Hi[0].codewords.length;
        for (Bo = Ys; Bo < tu; Bo++) for (el = 0; el < no; el++) Hi[el].codewords[el < Ss ? Bo : Bo + 1] = r[Sa++];
        return Hi;
      }, p.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
      }, p.prototype.getCodewords = function () {
        return this.codewords;
      }, p;
    }();
  const si = nt;
  var Oo = (() => (function (p) {
      p[p.TERMINATOR = 0] = "TERMINATOR", p[p.NUMERIC = 1] = "NUMERIC", p[p.ALPHANUMERIC = 2] = "ALPHANUMERIC", p[p.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", p[p.BYTE = 4] = "BYTE", p[p.ECI = 5] = "ECI", p[p.KANJI = 6] = "KANJI", p[p.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", p[p.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", p[p.HANZI = 9] = "HANZI";
    }(Oo || (Oo = {})), Oo))(),
    xs = function () {
      function p(r, l, g, S) {
        this.value = r, this.stringValue = l, this.characterCountBitsForVersions = g, this.bits = S, p.FOR_BITS.set(S, this), p.FOR_VALUE.set(r, this);
      }
      return p.forBits = function (r) {
        var l = p.FOR_BITS.get(r);
        if (void 0 === l) throw new y();
        return l;
      }, p.prototype.getCharacterCountBits = function (r) {
        var l = r.getVersionNumber();
        return this.characterCountBitsForVersions[l <= 9 ? 0 : l <= 26 ? 1 : 2];
      }, p.prototype.getValue = function () {
        return this.value;
      }, p.prototype.getBits = function () {
        return this.bits;
      }, p.prototype.equals = function (r) {
        return r instanceof p && this.value === r.value;
      }, p.prototype.toString = function () {
        return this.stringValue;
      }, p.FOR_BITS = new Map(), p.FOR_VALUE = new Map(), p.TERMINATOR = new p(Oo.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), p.NUMERIC = new p(Oo.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), p.ALPHANUMERIC = new p(Oo.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), p.STRUCTURED_APPEND = new p(Oo.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), p.BYTE = new p(Oo.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), p.ECI = new p(Oo.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), p.KANJI = new p(Oo.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), p.FNC1_FIRST_POSITION = new p(Oo.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), p.FNC1_SECOND_POSITION = new p(Oo.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), p.HANZI = new p(Oo.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), p;
    }();
  const Ne = xs;
  var Qe = function () {
    function p() {}
    return p.decode = function (r, l, g, S) {
      var H = new hc(r),
        ie = new Ii(),
        de = new Array(),
        Oe = -1,
        Xe = -1;
      try {
        var wt = null,
          Lt = !1,
          cn = void 0;
        do {
          if (H.available() < 4) cn = Ne.TERMINATOR;else {
            var xn = H.readBits(4);
            cn = Ne.forBits(xn);
          }
          switch (cn) {
            case Ne.TERMINATOR:
              break;
            case Ne.FNC1_FIRST_POSITION:
            case Ne.FNC1_SECOND_POSITION:
              Lt = !0;
              break;
            case Ne.STRUCTURED_APPEND:
              if (H.available() < 16) throw new Ft();
              Oe = H.readBits(8), Xe = H.readBits(8);
              break;
            case Ne.ECI:
              var Hi = p.parseECIValue(H);
              if (null === (wt = Ke.getCharacterSetECIByValue(Hi))) throw new Ft();
              break;
            case Ne.HANZI:
              var no = H.readBits(4),
                Ho = H.readBits(cn.getCharacterCountBits(l));
              no === p.GB2312_SUBSET && p.decodeHanziSegment(H, ie, Ho);
              break;
            default:
              var zo = H.readBits(cn.getCharacterCountBits(l));
              switch (cn) {
                case Ne.NUMERIC:
                  p.decodeNumericSegment(H, ie, zo);
                  break;
                case Ne.ALPHANUMERIC:
                  p.decodeAlphanumericSegment(H, ie, zo, Lt);
                  break;
                case Ne.BYTE:
                  p.decodeByteSegment(H, ie, zo, wt, de, S);
                  break;
                case Ne.KANJI:
                  p.decodeKanjiSegment(H, ie, zo);
                  break;
                default:
                  throw new Ft();
              }
          }
        } while (cn !== Ne.TERMINATOR);
      } catch {
        throw new Ft();
      }
      return new Di(r, ie.toString(), 0 === de.length ? null : de, null === g ? null : g.toString(), Oe, Xe);
    }, p.decodeHanziSegment = function (r, l, g) {
      if (13 * g > r.available()) throw new Ft();
      for (var S = new Uint8Array(2 * g), H = 0; g > 0;) {
        var ie = r.readBits(13),
          de = ie / 96 << 8 & 4294967295 | ie % 96;
        S[H] = (de += de < 959 ? 41377 : 42657) >> 8 & 255, S[H + 1] = 255 & de, H += 2, g--;
      }
      try {
        l.append(Je.decode(S, Nn.GB2312));
      } catch (Oe) {
        throw new Ft(Oe);
      }
    }, p.decodeKanjiSegment = function (r, l, g) {
      if (13 * g > r.available()) throw new Ft();
      for (var S = new Uint8Array(2 * g), H = 0; g > 0;) {
        var ie = r.readBits(13),
          de = ie / 192 << 8 & 4294967295 | ie % 192;
        S[H] = (de += de < 7936 ? 33088 : 49472) >> 8, S[H + 1] = de, H += 2, g--;
      }
      try {
        l.append(Je.decode(S, Nn.SHIFT_JIS));
      } catch (Oe) {
        throw new Ft(Oe);
      }
    }, p.decodeByteSegment = function (r, l, g, S, H, ie) {
      if (8 * g > r.available()) throw new Ft();
      for (var de = new Uint8Array(g), Oe = 0; Oe < g; Oe++) de[Oe] = r.readBits(8);
      var Xe;
      Xe = null === S ? Nn.guessEncoding(de, ie) : S.getName();
      try {
        l.append(Je.decode(de, Xe));
      } catch (wt) {
        throw new Ft(wt);
      }
      H.push(de);
    }, p.toAlphaNumericChar = function (r) {
      if (r >= p.ALPHANUMERIC_CHARS.length) throw new Ft();
      return p.ALPHANUMERIC_CHARS[r];
    }, p.decodeAlphanumericSegment = function (r, l, g, S) {
      for (var H = l.length(); g > 1;) {
        if (r.available() < 11) throw new Ft();
        var ie = r.readBits(11);
        l.append(p.toAlphaNumericChar(Math.floor(ie / 45))), l.append(p.toAlphaNumericChar(ie % 45)), g -= 2;
      }
      if (1 === g) {
        if (r.available() < 6) throw new Ft();
        l.append(p.toAlphaNumericChar(r.readBits(6)));
      }
      if (S) for (var de = H; de < l.length(); de++) "%" === l.charAt(de) && (de < l.length() - 1 && "%" === l.charAt(de + 1) ? l.deleteCharAt(de + 1) : l.setCharAt(de, String.fromCharCode(29)));
    }, p.decodeNumericSegment = function (r, l, g) {
      for (; g >= 3;) {
        if (r.available() < 10) throw new Ft();
        var S = r.readBits(10);
        if (S >= 1e3) throw new Ft();
        l.append(p.toAlphaNumericChar(Math.floor(S / 100))), l.append(p.toAlphaNumericChar(Math.floor(S / 10) % 10)), l.append(p.toAlphaNumericChar(S % 10)), g -= 3;
      }
      if (2 === g) {
        if (r.available() < 7) throw new Ft();
        var H = r.readBits(7);
        if (H >= 100) throw new Ft();
        l.append(p.toAlphaNumericChar(Math.floor(H / 10))), l.append(p.toAlphaNumericChar(H % 10));
      } else if (1 === g) {
        if (r.available() < 4) throw new Ft();
        var ie = r.readBits(4);
        if (ie >= 10) throw new Ft();
        l.append(p.toAlphaNumericChar(ie));
      }
    }, p.parseECIValue = function (r) {
      var l = r.readBits(8);
      if (!(128 & l)) return 127 & l;
      if (128 == (192 & l)) return (63 & l) << 8 & 4294967295 | r.readBits(8);
      if (192 == (224 & l)) return (31 & l) << 16 & 4294967295 | r.readBits(16);
      throw new Ft();
    }, p.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", p.GB2312_SUBSET = 1, p;
  }();
  const Q = Qe;
  var se = function () {
    function p(r) {
      this.mirrored = r;
    }
    return p.prototype.isMirrored = function () {
      return this.mirrored;
    }, p.prototype.applyMirroredCorrection = function (r) {
      if (this.mirrored && null !== r && !(r.length < 3)) {
        var l = r[0];
        r[0] = r[2], r[2] = l;
      }
    }, p;
  }();
  const re = se;
  var Ce = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Be = function () {
      function p() {
        this.rsDecoder = new Ps(ki.QR_CODE_FIELD_256);
      }
      return p.prototype.decodeBooleanArray = function (r, l) {
        return this.decodeBitMatrix(co.parseFromBooleanArray(r), l);
      }, p.prototype.decodeBitMatrix = function (r, l) {
        var g = new $e(r),
          S = null;
        try {
          return this.decodeBitMatrixParser(g, l);
        } catch (ie) {
          S = ie;
        }
        try {
          g.remask(), g.setMirror(!0), g.readVersion(), g.readFormatInformation(), g.mirror();
          var H = this.decodeBitMatrixParser(g, l);
          return H.setOther(new re(!0)), H;
        } catch (ie) {
          throw null !== S ? S : ie;
        }
      }, p.prototype.decodeBitMatrixParser = function (r, l) {
        var g,
          S,
          H,
          ie,
          de = r.readVersion(),
          Oe = r.readFormatInformation().getErrorCorrectionLevel(),
          Xe = r.readCodewords(),
          wt = si.getDataBlocks(Xe, de, Oe),
          Lt = 0;
        try {
          for (var cn = Ce(wt), xn = cn.next(); !xn.done; xn = cn.next()) Lt += (Hi = xn.value).getNumDataCodewords();
        } catch (Ss) {
          g = {
            error: Ss
          };
        } finally {
          try {
            xn && !xn.done && (S = cn.return) && S.call(cn);
          } finally {
            if (g) throw g.error;
          }
        }
        var no = new Uint8Array(Lt),
          Ho = 0;
        try {
          for (var zo = Ce(wt), Bo = zo.next(); !Bo.done; Bo = zo.next()) {
            var Hi,
              Mr = (Hi = Bo.value).getCodewords(),
              Ur = Hi.getNumDataCodewords();
            this.correctErrors(Mr, Ur);
            for (var ls = 0; ls < Ur; ls++) no[Ho++] = Mr[ls];
          }
        } catch (Ss) {
          H = {
            error: Ss
          };
        } finally {
          try {
            Bo && !Bo.done && (ie = zo.return) && ie.call(zo);
          } finally {
            if (H) throw H.error;
          }
        }
        return Q.decode(no, de, Oe, l);
      }, p.prototype.correctErrors = function (r, l) {
        var g = new Int32Array(r);
        try {
          this.rsDecoder.decode(g, r.length - l);
        } catch {
          throw new ke();
        }
        for (var S = 0; S < l; S++) r[S] = g[S];
      }, p;
    }();
  const dt = Be;
  var Ot = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Qt = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l, g) || this;
        return H.estimatedModuleSize = S, H;
      }
      return Ot(r, p), r.prototype.aboutEquals = function (l, g, S) {
        if (Math.abs(g - this.getY()) <= l && Math.abs(S - this.getX()) <= l) {
          var H = Math.abs(l - this.estimatedModuleSize);
          return H <= 1 || H <= this.estimatedModuleSize;
        }
        return !1;
      }, r.prototype.combineEstimate = function (l, g, S) {
        return new r((this.getX() + g) / 2, (this.getY() + l) / 2, (this.estimatedModuleSize + S) / 2);
      }, r;
    }(Or);
  const Wn = Qt;
  var eo = function () {
    function p(r, l, g, S, H, ie, de) {
      this.image = r, this.startX = l, this.startY = g, this.width = S, this.height = H, this.moduleSize = ie, this.resultPointCallback = de, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
    }
    return p.prototype.find = function () {
      for (var r = this.startX, l = this.height, S = r + this.width, H = this.startY + l / 2, ie = new Int32Array(3), de = this.image, Oe = 0; Oe < l; Oe++) {
        var Xe = H + (1 & Oe ? -Math.floor((Oe + 1) / 2) : Math.floor((Oe + 1) / 2));
        ie[0] = 0, ie[1] = 0, ie[2] = 0;
        for (var wt = r; wt < S && !de.get(wt, Xe);) wt++;
        for (var Lt = 0; wt < S;) {
          if (de.get(wt, Xe)) {
            if (1 === Lt) ie[1]++;else if (2 === Lt) {
              var cn;
              if (this.foundPatternCross(ie) && null !== (cn = this.handlePossibleCenter(ie, Xe, wt))) return cn;
              ie[0] = ie[2], ie[1] = 1, ie[2] = 0, Lt = 1;
            } else ie[++Lt]++;
          } else 1 === Lt && Lt++, ie[Lt]++;
          wt++;
        }
        if (this.foundPatternCross(ie) && null !== (cn = this.handlePossibleCenter(ie, Xe, S))) return cn;
      }
      if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
      throw new pt();
    }, p.centerFromEnd = function (r, l) {
      return l - r[2] - r[1] / 2;
    }, p.prototype.foundPatternCross = function (r) {
      for (var l = this.moduleSize, g = l / 2, S = 0; S < 3; S++) if (Math.abs(l - r[S]) >= g) return !1;
      return !0;
    }, p.prototype.crossCheckVertical = function (r, l, g, S) {
      var H = this.image,
        ie = H.getHeight(),
        de = this.crossCheckStateCount;
      de[0] = 0, de[1] = 0, de[2] = 0;
      for (var Oe = r; Oe >= 0 && H.get(l, Oe) && de[1] <= g;) de[1]++, Oe--;
      if (Oe < 0 || de[1] > g) return NaN;
      for (; Oe >= 0 && !H.get(l, Oe) && de[0] <= g;) de[0]++, Oe--;
      if (de[0] > g) return NaN;
      for (Oe = r + 1; Oe < ie && H.get(l, Oe) && de[1] <= g;) de[1]++, Oe++;
      if (Oe === ie || de[1] > g) return NaN;
      for (; Oe < ie && !H.get(l, Oe) && de[2] <= g;) de[2]++, Oe++;
      return de[2] > g || 5 * Math.abs(de[0] + de[1] + de[2] - S) >= 2 * S ? NaN : this.foundPatternCross(de) ? p.centerFromEnd(de, Oe) : NaN;
    }, p.prototype.handlePossibleCenter = function (r, l, g) {
      var S,
        H,
        ie = r[0] + r[1] + r[2],
        de = p.centerFromEnd(r, g),
        Oe = this.crossCheckVertical(l, de, 2 * r[1], ie);
      if (!isNaN(Oe)) {
        var Xe = (r[0] + r[1] + r[2]) / 3;
        try {
          for (var wt = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(this.possibleCenters), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
            var cn = Lt.value;
            if (cn.aboutEquals(Xe, Oe, de)) return cn.combineEstimate(Oe, de, Xe);
          }
        } catch (Hi) {
          S = {
            error: Hi
          };
        } finally {
          try {
            Lt && !Lt.done && (H = wt.return) && H.call(wt);
          } finally {
            if (S) throw S.error;
          }
        }
        var xn = new Wn(de, Oe, Xe);
        this.possibleCenters.push(xn), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(xn);
      }
      return null;
    }, p;
  }();
  const Wo = eo;
  var Ve = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    me = function (p) {
      function r(l, g, S, H) {
        var ie = p.call(this, l, g) || this;
        return ie.estimatedModuleSize = S, ie.count = H, void 0 === H && (ie.count = 1), ie;
      }
      return Ve(r, p), r.prototype.getEstimatedModuleSize = function () {
        return this.estimatedModuleSize;
      }, r.prototype.getCount = function () {
        return this.count;
      }, r.prototype.aboutEquals = function (l, g, S) {
        if (Math.abs(g - this.getY()) <= l && Math.abs(S - this.getX()) <= l) {
          var H = Math.abs(l - this.estimatedModuleSize);
          return H <= 1 || H <= this.estimatedModuleSize;
        }
        return !1;
      }, r.prototype.combineEstimate = function (l, g, S) {
        var H = this.count + 1;
        return new r((this.count * this.getX() + g) / H, (this.count * this.getY() + l) / H, (this.count * this.estimatedModuleSize + S) / H, H);
      }, r;
    }(Or);
  const ze = me;
  var xt = function () {
    function p(r) {
      this.bottomLeft = r[0], this.topLeft = r[1], this.topRight = r[2];
    }
    return p.prototype.getBottomLeft = function () {
      return this.bottomLeft;
    }, p.prototype.getTopLeft = function () {
      return this.topLeft;
    }, p.prototype.getTopRight = function () {
      return this.topRight;
    }, p;
  }();
  const wn = xt;
  var Ai = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    _o = function () {
      function p(r, l) {
        this.image = r, this.resultPointCallback = l, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = l;
      }
      return p.prototype.getImage = function () {
        return this.image;
      }, p.prototype.getPossibleCenters = function () {
        return this.possibleCenters;
      }, p.prototype.find = function (r) {
        var l = null != r && void 0 !== r.get(mt.TRY_HARDER),
          g = null != r && void 0 !== r.get(mt.PURE_BARCODE),
          S = this.image,
          H = S.getHeight(),
          ie = S.getWidth(),
          de = Math.floor(3 * H / (4 * p.MAX_MODULES));
        (de < p.MIN_SKIP || l) && (de = p.MIN_SKIP);
        for (var Oe = !1, Xe = new Int32Array(5), wt = de - 1; wt < H && !Oe; wt += de) {
          Xe[0] = 0, Xe[1] = 0, Xe[2] = 0, Xe[3] = 0, Xe[4] = 0;
          for (var Lt = 0, cn = 0; cn < ie; cn++) if (S.get(cn, wt)) 1 == (1 & Lt) && Lt++, Xe[Lt]++;else if (1 & Lt) Xe[Lt]++;else if (4 === Lt) {
            if (p.foundPatternCross(Xe)) {
              if (!0 !== this.handlePossibleCenter(Xe, wt, cn, g)) {
                Xe[0] = Xe[2], Xe[1] = Xe[3], Xe[2] = Xe[4], Xe[3] = 1, Xe[4] = 0, Lt = 3;
                continue;
              }
              if (de = 2, !0 === this.hasSkipped) Oe = this.haveMultiplyConfirmedCenters();else {
                var Hi = this.findRowSkip();
                Hi > Xe[2] && (wt += Hi - Xe[2] - de, cn = ie - 1);
              }
              Lt = 0, Xe[0] = 0, Xe[1] = 0, Xe[2] = 0, Xe[3] = 0, Xe[4] = 0;
            } else Xe[0] = Xe[2], Xe[1] = Xe[3], Xe[2] = Xe[4], Xe[3] = 1, Xe[4] = 0, Lt = 3;
          } else Xe[++Lt]++;
          p.foundPatternCross(Xe) && !0 === this.handlePossibleCenter(Xe, wt, ie, g) && (de = Xe[0], this.hasSkipped && (Oe = this.haveMultiplyConfirmedCenters()));
        }
        var no = this.selectBestPatterns();
        return Or.orderBestPatterns(no), new wn(no);
      }, p.centerFromEnd = function (r, l) {
        return l - r[4] - r[3] - r[2] / 2;
      }, p.foundPatternCross = function (r) {
        for (var l = 0, g = 0; g < 5; g++) {
          var S = r[g];
          if (0 === S) return !1;
          l += S;
        }
        if (l < 7) return !1;
        var H = l / 7,
          ie = H / 2;
        return Math.abs(H - r[0]) < ie && Math.abs(H - r[1]) < ie && Math.abs(3 * H - r[2]) < 3 * ie && Math.abs(H - r[3]) < ie && Math.abs(H - r[4]) < ie;
      }, p.prototype.getCrossCheckStateCount = function () {
        var r = this.crossCheckStateCount;
        return r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r;
      }, p.prototype.crossCheckDiagonal = function (r, l, g, S) {
        for (var H = this.getCrossCheckStateCount(), ie = 0, de = this.image; r >= ie && l >= ie && de.get(l - ie, r - ie);) H[2]++, ie++;
        if (r < ie || l < ie) return !1;
        for (; r >= ie && l >= ie && !de.get(l - ie, r - ie) && H[1] <= g;) H[1]++, ie++;
        if (r < ie || l < ie || H[1] > g) return !1;
        for (; r >= ie && l >= ie && de.get(l - ie, r - ie) && H[0] <= g;) H[0]++, ie++;
        if (H[0] > g) return !1;
        var Oe = de.getHeight(),
          Xe = de.getWidth();
        for (ie = 1; r + ie < Oe && l + ie < Xe && de.get(l + ie, r + ie);) H[2]++, ie++;
        if (r + ie >= Oe || l + ie >= Xe) return !1;
        for (; r + ie < Oe && l + ie < Xe && !de.get(l + ie, r + ie) && H[3] < g;) H[3]++, ie++;
        if (r + ie >= Oe || l + ie >= Xe || H[3] >= g) return !1;
        for (; r + ie < Oe && l + ie < Xe && de.get(l + ie, r + ie) && H[4] < g;) H[4]++, ie++;
        return !(H[4] >= g) && Math.abs(H[0] + H[1] + H[2] + H[3] + H[4] - S) < 2 * S && p.foundPatternCross(H);
      }, p.prototype.crossCheckVertical = function (r, l, g, S) {
        for (var H = this.image, ie = H.getHeight(), de = this.getCrossCheckStateCount(), Oe = r; Oe >= 0 && H.get(l, Oe);) de[2]++, Oe--;
        if (Oe < 0) return NaN;
        for (; Oe >= 0 && !H.get(l, Oe) && de[1] <= g;) de[1]++, Oe--;
        if (Oe < 0 || de[1] > g) return NaN;
        for (; Oe >= 0 && H.get(l, Oe) && de[0] <= g;) de[0]++, Oe--;
        if (de[0] > g) return NaN;
        for (Oe = r + 1; Oe < ie && H.get(l, Oe);) de[2]++, Oe++;
        if (Oe === ie) return NaN;
        for (; Oe < ie && !H.get(l, Oe) && de[3] < g;) de[3]++, Oe++;
        if (Oe === ie || de[3] >= g) return NaN;
        for (; Oe < ie && H.get(l, Oe) && de[4] < g;) de[4]++, Oe++;
        return de[4] >= g || 5 * Math.abs(de[0] + de[1] + de[2] + de[3] + de[4] - S) >= 2 * S ? NaN : p.foundPatternCross(de) ? p.centerFromEnd(de, Oe) : NaN;
      }, p.prototype.crossCheckHorizontal = function (r, l, g, S) {
        for (var H = this.image, ie = H.getWidth(), de = this.getCrossCheckStateCount(), Oe = r; Oe >= 0 && H.get(Oe, l);) de[2]++, Oe--;
        if (Oe < 0) return NaN;
        for (; Oe >= 0 && !H.get(Oe, l) && de[1] <= g;) de[1]++, Oe--;
        if (Oe < 0 || de[1] > g) return NaN;
        for (; Oe >= 0 && H.get(Oe, l) && de[0] <= g;) de[0]++, Oe--;
        if (de[0] > g) return NaN;
        for (Oe = r + 1; Oe < ie && H.get(Oe, l);) de[2]++, Oe++;
        if (Oe === ie) return NaN;
        for (; Oe < ie && !H.get(Oe, l) && de[3] < g;) de[3]++, Oe++;
        if (Oe === ie || de[3] >= g) return NaN;
        for (; Oe < ie && H.get(Oe, l) && de[4] < g;) de[4]++, Oe++;
        return de[4] >= g || 5 * Math.abs(de[0] + de[1] + de[2] + de[3] + de[4] - S) >= S ? NaN : p.foundPatternCross(de) ? p.centerFromEnd(de, Oe) : NaN;
      }, p.prototype.handlePossibleCenter = function (r, l, g, S) {
        var H = r[0] + r[1] + r[2] + r[3] + r[4],
          ie = p.centerFromEnd(r, g),
          de = this.crossCheckVertical(l, Math.floor(ie), r[2], H);
        if (!isNaN(de) && (ie = this.crossCheckHorizontal(Math.floor(ie), Math.floor(de), r[2], H), !isNaN(ie) && (!S || this.crossCheckDiagonal(Math.floor(de), Math.floor(ie), r[2], H)))) {
          for (var Oe = H / 7, Xe = !1, wt = this.possibleCenters, Lt = 0, cn = wt.length; Lt < cn; Lt++) {
            var xn = wt[Lt];
            if (xn.aboutEquals(Oe, de, ie)) {
              wt[Lt] = xn.combineEstimate(de, ie, Oe), Xe = !0;
              break;
            }
          }
          if (!Xe) {
            var Hi = new ze(ie, de, Oe);
            wt.push(Hi), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(Hi);
          }
          return !0;
        }
        return !1;
      }, p.prototype.findRowSkip = function () {
        var r, l;
        if (this.possibleCenters.length <= 1) return 0;
        var S = null;
        try {
          for (var H = Ai(this.possibleCenters), ie = H.next(); !ie.done; ie = H.next()) {
            var de = ie.value;
            if (de.getCount() >= p.CENTER_QUORUM) {
              if (null != S) return this.hasSkipped = !0, Math.floor((Math.abs(S.getX() - de.getX()) - Math.abs(S.getY() - de.getY())) / 2);
              S = de;
            }
          }
        } catch (Oe) {
          r = {
            error: Oe
          };
        } finally {
          try {
            ie && !ie.done && (l = H.return) && l.call(H);
          } finally {
            if (r) throw r.error;
          }
        }
        return 0;
      }, p.prototype.haveMultiplyConfirmedCenters = function () {
        var r,
          l,
          g,
          S,
          H = 0,
          ie = 0,
          de = this.possibleCenters.length;
        try {
          for (var Oe = Ai(this.possibleCenters), Xe = Oe.next(); !Xe.done; Xe = Oe.next()) (wt = Xe.value).getCount() >= p.CENTER_QUORUM && (H++, ie += wt.getEstimatedModuleSize());
        } catch (no) {
          r = {
            error: no
          };
        } finally {
          try {
            Xe && !Xe.done && (l = Oe.return) && l.call(Oe);
          } finally {
            if (r) throw r.error;
          }
        }
        if (H < 3) return !1;
        var Lt = ie / de,
          cn = 0;
        try {
          for (var xn = Ai(this.possibleCenters), Hi = xn.next(); !Hi.done; Hi = xn.next()) {
            var wt = Hi.value;
            cn += Math.abs(wt.getEstimatedModuleSize() - Lt);
          }
        } catch (no) {
          g = {
            error: no
          };
        } finally {
          try {
            Hi && !Hi.done && (S = xn.return) && S.call(xn);
          } finally {
            if (g) throw g.error;
          }
        }
        return cn <= .05 * ie;
      }, p.prototype.selectBestPatterns = function () {
        var r,
          l,
          g,
          S,
          H = this.possibleCenters.length;
        if (H < 3) throw new pt();
        var de,
          ie = this.possibleCenters;
        if (H > 3) {
          var Oe = 0,
            Xe = 0;
          try {
            for (var wt = Ai(this.possibleCenters), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
              var xn = Lt.value.getEstimatedModuleSize();
              Oe += xn, Xe += xn * xn;
            }
          } catch (ls) {
            r = {
              error: ls
            };
          } finally {
            try {
              Lt && !Lt.done && (l = wt.return) && l.call(wt);
            } finally {
              if (r) throw r.error;
            }
          }
          de = Oe / H;
          var Hi = Math.sqrt(Xe / H - de * de);
          ie.sort(function (ls, Ss) {
            var Is = Math.abs(Ss.getEstimatedModuleSize() - de),
              Ys = Math.abs(ls.getEstimatedModuleSize() - de);
            return Is < Ys ? -1 : Is > Ys ? 1 : 0;
          });
          for (var no = Math.max(.2 * de, Hi), Ho = 0; Ho < ie.length && ie.length > 3; Ho++) Math.abs(ie[Ho].getEstimatedModuleSize() - de) > no && (ie.splice(Ho, 1), Ho--);
        }
        if (ie.length > 3) {
          Oe = 0;
          try {
            for (var Bo = Ai(ie), Mr = Bo.next(); !Mr.done; Mr = Bo.next()) Oe += Mr.value.getEstimatedModuleSize();
          } catch (Ss) {
            g = {
              error: Ss
            };
          } finally {
            try {
              Mr && !Mr.done && (S = Bo.return) && S.call(Bo);
            } finally {
              if (g) throw g.error;
            }
          }
          de = Oe / ie.length, ie.sort(function (Ss, Is) {
            if (Is.getCount() === Ss.getCount()) {
              var Ys = Math.abs(Is.getEstimatedModuleSize() - de),
                Sa = Math.abs(Ss.getEstimatedModuleSize() - de);
              return Ys < Sa ? 1 : Ys > Sa ? -1 : 0;
            }
            return Is.getCount() - Ss.getCount();
          }), ie.splice(3);
        }
        return [ie[0], ie[1], ie[2]];
      }, p.CENTER_QUORUM = 2, p.MIN_SKIP = 3, p.MAX_MODULES = 57, p;
    }();
  const mr = _o;
  var Yr = function () {
    function p(r) {
      this.image = r;
    }
    return p.prototype.getImage = function () {
      return this.image;
    }, p.prototype.getResultPointCallback = function () {
      return this.resultPointCallback;
    }, p.prototype.detect = function (r) {
      this.resultPointCallback = null == r ? null : r.get(mt.NEED_RESULT_POINT_CALLBACK);
      var g = new mr(this.image, this.resultPointCallback).find(r);
      return this.processFinderPatternInfo(g);
    }, p.prototype.processFinderPatternInfo = function (r) {
      var l = r.getTopLeft(),
        g = r.getTopRight(),
        S = r.getBottomLeft(),
        H = this.calculateModuleSize(l, g, S);
      if (H < 1) throw new pt("No pattern found in proccess finder.");
      var ie = p.computeDimension(l, g, S, H),
        de = Zr.getProvisionalVersionForDimension(ie),
        Oe = de.getDimensionForVersion() - 7,
        Xe = null;
      if (de.getAlignmentPatternCenters().length > 0) for (var wt = g.getX() - l.getX() + S.getX(), Lt = g.getY() - l.getY() + S.getY(), cn = 1 - 3 / Oe, xn = Math.floor(l.getX() + cn * (wt - l.getX())), Hi = Math.floor(l.getY() + cn * (Lt - l.getY())), no = 4; no <= 16; no <<= 1) try {
        Xe = this.findAlignmentInRegion(H, xn, Hi, no);
        break;
      } catch (Mr) {
        if (!(Mr instanceof pt)) throw Mr;
      }
      var Ho = p.createTransform(l, g, S, Xe, ie),
        zo = p.sampleGrid(this.image, Ho, ie);
      return new xa(zo, null === Xe ? [S, l, g] : [S, l, g, Xe]);
    }, p.createTransform = function (r, l, g, S, H) {
      var de,
        Oe,
        Xe,
        wt,
        ie = H - 3.5;
      return null !== S ? (de = S.getX(), Oe = S.getY(), wt = Xe = ie - 3) : (de = l.getX() - r.getX() + g.getX(), Oe = l.getY() - r.getY() + g.getY(), Xe = ie, wt = ie), tn.quadrilateralToQuadrilateral(3.5, 3.5, ie, 3.5, Xe, wt, 3.5, ie, r.getX(), r.getY(), l.getX(), l.getY(), de, Oe, g.getX(), g.getY());
    }, p.sampleGrid = function (r, l, g) {
      return Ro.getInstance().sampleGridWithTransform(r, g, g, l);
    }, p.computeDimension = function (r, l, g, S) {
      var H = Qo.round(Or.distance(r, l) / S),
        ie = Qo.round(Or.distance(r, g) / S),
        de = Math.floor((H + ie) / 2) + 7;
      switch (3 & de) {
        case 0:
          de++;
          break;
        case 2:
          de--;
          break;
        case 3:
          throw new pt("Dimensions could be not found.");
      }
      return de;
    }, p.prototype.calculateModuleSize = function (r, l, g) {
      return (this.calculateModuleSizeOneWay(r, l) + this.calculateModuleSizeOneWay(r, g)) / 2;
    }, p.prototype.calculateModuleSizeOneWay = function (r, l) {
      var g = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(r.getX()), Math.floor(r.getY()), Math.floor(l.getX()), Math.floor(l.getY())),
        S = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(l.getX()), Math.floor(l.getY()), Math.floor(r.getX()), Math.floor(r.getY()));
      return isNaN(g) ? S / 7 : isNaN(S) ? g / 7 : (g + S) / 14;
    }, p.prototype.sizeOfBlackWhiteBlackRunBothWays = function (r, l, g, S) {
      var H = this.sizeOfBlackWhiteBlackRun(r, l, g, S),
        ie = 1,
        de = r - (g - r);
      de < 0 ? (ie = r / (r - de), de = 0) : de >= this.image.getWidth() && (ie = (this.image.getWidth() - 1 - r) / (de - r), de = this.image.getWidth() - 1);
      var Oe = Math.floor(l - (S - l) * ie);
      return ie = 1, Oe < 0 ? (ie = l / (l - Oe), Oe = 0) : Oe >= this.image.getHeight() && (ie = (this.image.getHeight() - 1 - l) / (Oe - l), Oe = this.image.getHeight() - 1), de = Math.floor(r + (de - r) * ie), (H += this.sizeOfBlackWhiteBlackRun(r, l, de, Oe)) - 1;
    }, p.prototype.sizeOfBlackWhiteBlackRun = function (r, l, g, S) {
      var H = Math.abs(S - l) > Math.abs(g - r);
      if (H) {
        var ie = r;
        r = l, l = ie, ie = g, g = S, S = ie;
      }
      for (var de = Math.abs(g - r), Oe = Math.abs(S - l), Xe = -de / 2, wt = r < g ? 1 : -1, Lt = l < S ? 1 : -1, cn = 0, xn = g + wt, Hi = r, no = l; Hi !== xn; Hi += wt) {
        if (1 === cn === this.image.get(H ? no : Hi, H ? Hi : no)) {
          if (2 === cn) return Qo.distance(Hi, no, r, l);
          cn++;
        }
        if ((Xe += Oe) > 0) {
          if (no === S) break;
          no += Lt, Xe -= de;
        }
      }
      return 2 === cn ? Qo.distance(g + wt, S, r, l) : NaN;
    }, p.prototype.findAlignmentInRegion = function (r, l, g, S) {
      var H = Math.floor(S * r),
        ie = Math.max(0, l - H),
        de = Math.min(this.image.getWidth() - 1, l + H);
      if (de - ie < 3 * r) throw new pt("Alignment top exceeds estimated module size.");
      var Oe = Math.max(0, g - H),
        Xe = Math.min(this.image.getHeight() - 1, g + H);
      if (Xe - Oe < 3 * r) throw new pt("Alignment bottom exceeds estimated module size.");
      return new Wo(this.image, ie, Oe, de - ie, Xe - Oe, r, this.resultPointCallback).find();
    }, p;
  }();
  const es = Yr;
  var Jr = function () {
    function p() {
      this.decoder = new dt();
    }
    return p.prototype.getDecoder = function () {
      return this.decoder;
    }, p.prototype.decode = function (r, l) {
      var g, S;
      if (null != l && void 0 !== l.get(mt.PURE_BARCODE)) {
        var H = p.extractPureBits(r.getBlackMatrix());
        g = this.decoder.decodeBitMatrix(H, l), S = p.NO_POINTS;
      } else {
        var ie = new es(r.getBlackMatrix()).detect(l);
        g = this.decoder.decodeBitMatrix(ie.getBits(), l), S = ie.getPoints();
      }
      g.getOther() instanceof re && g.getOther().applyMirroredCorrection(S);
      var de = new br(g.getText(), g.getRawBytes(), void 0, S, qo.QR_CODE, void 0),
        Oe = g.getByteSegments();
      null !== Oe && de.putMetadata(wr.BYTE_SEGMENTS, Oe);
      var Xe = g.getECLevel();
      return null !== Xe && de.putMetadata(wr.ERROR_CORRECTION_LEVEL, Xe), g.hasStructuredAppend() && (de.putMetadata(wr.STRUCTURED_APPEND_SEQUENCE, g.getStructuredAppendSequenceNumber()), de.putMetadata(wr.STRUCTURED_APPEND_PARITY, g.getStructuredAppendParity())), de;
    }, p.prototype.reset = function () {}, p.extractPureBits = function (r) {
      var l = r.getTopLeftOnBit(),
        g = r.getBottomRightOnBit();
      if (null === l || null === g) throw new pt();
      var S = this.moduleSize(l, r),
        H = l[1],
        ie = g[1],
        de = l[0],
        Oe = g[0];
      if (de >= Oe || H >= ie) throw new pt();
      if (ie - H != Oe - de && (Oe = de + (ie - H)) >= r.getWidth()) throw new pt();
      var Xe = Math.round((Oe - de + 1) / S),
        wt = Math.round((ie - H + 1) / S);
      if (Xe <= 0 || wt <= 0) throw new pt();
      if (wt !== Xe) throw new pt();
      var Lt = Math.floor(S / 2);
      H += Lt;
      var cn = (de += Lt) + Math.floor((Xe - 1) * S) - Oe;
      if (cn > 0) {
        if (cn > Lt) throw new pt();
        de -= cn;
      }
      var xn = H + Math.floor((wt - 1) * S) - ie;
      if (xn > 0) {
        if (xn > Lt) throw new pt();
        H -= xn;
      }
      for (var Hi = new co(Xe, wt), no = 0; no < wt; no++) for (var Ho = H + Math.floor(no * S), zo = 0; zo < Xe; zo++) r.get(de + Math.floor(zo * S), Ho) && Hi.set(zo, no);
      return Hi;
    }, p.moduleSize = function (r, l) {
      for (var g = l.getHeight(), S = l.getWidth(), H = r[0], ie = r[1], de = !0, Oe = 0; H < S && ie < g;) {
        if (de !== l.get(H, ie)) {
          if (5 == ++Oe) break;
          de = !de;
        }
        H++, ie++;
      }
      if (H === S || ie === g) throw new pt();
      return (H - r[0]) / 7;
    }, p.NO_POINTS = new Array(), p;
  }();
  const Ca = Jr;
  var Ta = function () {
    function p() {}
    return p.prototype.PDF417Common = function () {}, p.getBitCountSum = function (r) {
      return Qo.sum(r);
    }, p.toIntArray = function (r) {
      var l, g;
      if (null == r || !r.length) return p.EMPTY_INT_ARRAY;
      var S = new Int32Array(r.length),
        H = 0;
      try {
        for (var ie = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(r), de = ie.next(); !de.done; de = ie.next()) S[H++] = de.value;
      } catch (Xe) {
        l = {
          error: Xe
        };
      } finally {
        try {
          de && !de.done && (g = ie.return) && g.call(ie);
        } finally {
          if (l) throw l.error;
        }
      }
      return S;
    }, p.getCodeword = function (r) {
      var l = qe.binarySearch(p.SYMBOL_TABLE, 262143 & r);
      return l < 0 ? -1 : (p.CODEWORD_TABLE[l] - 1) % p.NUMBER_OF_CODEWORDS;
    }, p.MAX_CODEWORDS_IN_BARCODE = (p.NUMBER_OF_CODEWORDS = 929) - 1, p.MIN_ROWS_IN_BARCODE = 3, p.MAX_ROWS_IN_BARCODE = 90, p.MODULES_IN_CODEWORD = 17, p.MODULES_IN_STOP_PATTERN = 18, p.BARS_IN_MODULE = 8, p.EMPTY_INT_ARRAY = new Int32Array([]), p.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), p.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]), p;
  }();
  const Qa = Ta;
  var Vc = function () {
    function p(r, l) {
      this.bits = r, this.points = l;
    }
    return p.prototype.getBits = function () {
      return this.bits;
    }, p.prototype.getPoints = function () {
      return this.points;
    }, p;
  }();
  const fc = Vc;
  var Ac = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    cu = function () {
      function p() {}
      return p.detectMultiple = function (r, l, g) {
        var S = r.getBlackMatrix(),
          H = p.detect(g, S);
        return H.length || ((S = S.clone()).rotate180(), H = p.detect(g, S)), new fc(S, H);
      }, p.detect = function (r, l) {
        for (var g, S, H = new Array(), ie = 0, de = 0, Oe = !1; ie < l.getHeight();) {
          var Xe = p.findVertices(l, ie, de);
          if (null != Xe[0] || null != Xe[3]) {
            if (Oe = !0, H.push(Xe), !r) break;
            null != Xe[2] ? (de = Math.trunc(Xe[2].getX()), ie = Math.trunc(Xe[2].getY())) : (de = Math.trunc(Xe[4].getX()), ie = Math.trunc(Xe[4].getY()));
          } else {
            if (!Oe) break;
            Oe = !1, de = 0;
            try {
              for (var wt = (g = void 0, Ac(H)), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
                var cn = Lt.value;
                null != cn[1] && (ie = Math.trunc(Math.max(ie, cn[1].getY()))), null != cn[3] && (ie = Math.max(ie, Math.trunc(cn[3].getY())));
              }
            } catch (xn) {
              g = {
                error: xn
              };
            } finally {
              try {
                Lt && !Lt.done && (S = wt.return) && S.call(wt);
              } finally {
                if (g) throw g.error;
              }
            }
            ie += p.ROW_STEP;
          }
        }
        return H;
      }, p.findVertices = function (r, l, g) {
        var S = r.getHeight(),
          H = r.getWidth(),
          ie = new Array(8);
        return p.copyToResult(ie, p.findRowsWithPattern(r, S, H, l, g, p.START_PATTERN), p.INDEXES_START_PATTERN), null != ie[4] && (g = Math.trunc(ie[4].getX()), l = Math.trunc(ie[4].getY())), p.copyToResult(ie, p.findRowsWithPattern(r, S, H, l, g, p.STOP_PATTERN), p.INDEXES_STOP_PATTERN), ie;
      }, p.copyToResult = function (r, l, g) {
        for (var S = 0; S < g.length; S++) r[g[S]] = l[S];
      }, p.findRowsWithPattern = function (r, l, g, S, H, ie) {
        for (var de = new Array(4), Oe = !1, Xe = new Int32Array(ie.length); S < l; S += p.ROW_STEP) if (null != (wt = p.findGuardPattern(r, H, S, g, !1, ie, Xe))) {
          for (; S > 0;) {
            if (null == (Lt = p.findGuardPattern(r, H, --S, g, !1, ie, Xe))) {
              S++;
              break;
            }
            wt = Lt;
          }
          de[0] = new Or(wt[0], S), de[1] = new Or(wt[1], S), Oe = !0;
          break;
        }
        var cn = S + 1;
        if (Oe) {
          for (var xn = 0, Lt = Int32Array.from([Math.trunc(de[0].getX()), Math.trunc(de[1].getX())]); cn < l; cn++) {
            var wt;
            if (null != (wt = p.findGuardPattern(r, Lt[0], cn, g, !1, ie, Xe)) && Math.abs(Lt[0] - wt[0]) < p.MAX_PATTERN_DRIFT && Math.abs(Lt[1] - wt[1]) < p.MAX_PATTERN_DRIFT) Lt = wt, xn = 0;else {
              if (xn > p.SKIPPED_ROW_COUNT_MAX) break;
              xn++;
            }
          }
          de[2] = new Or(Lt[0], cn -= xn + 1), de[3] = new Or(Lt[1], cn);
        }
        return cn - S < p.BARCODE_MIN_HEIGHT && qe.fill(de, null), de;
      }, p.findGuardPattern = function (r, l, g, S, H, ie, de) {
        qe.fillWithin(de, 0, de.length, 0);
        for (var Oe = l, Xe = 0; r.get(Oe, g) && Oe > 0 && Xe++ < p.MAX_PIXEL_DRIFT;) Oe--;
        for (var wt = Oe, Lt = 0, cn = ie.length, xn = H; wt < S; wt++) if (r.get(wt, g) !== xn) de[Lt]++;else {
          if (Lt === cn - 1) {
            if (p.patternMatchVariance(de, ie, p.MAX_INDIVIDUAL_VARIANCE) < p.MAX_AVG_VARIANCE) return new Int32Array([Oe, wt]);
            Oe += de[0] + de[1], ae.arraycopy(de, 2, de, 0, Lt - 1), de[Lt - 1] = 0, de[Lt] = 0, Lt--;
          } else Lt++;
          de[Lt] = 1, xn = !xn;
        }
        return Lt === cn - 1 && p.patternMatchVariance(de, ie, p.MAX_INDIVIDUAL_VARIANCE) < p.MAX_AVG_VARIANCE ? new Int32Array([Oe, wt - 1]) : null;
      }, p.patternMatchVariance = function (r, l, g) {
        for (var S = r.length, H = 0, ie = 0, de = 0; de < S; de++) H += r[de], ie += l[de];
        if (H < ie) return 1 / 0;
        var Oe = H / ie;
        g *= Oe;
        for (var Xe = 0, wt = 0; wt < S; wt++) {
          var Lt = r[wt],
            cn = l[wt] * Oe,
            xn = Lt > cn ? Lt - cn : cn - Lt;
          if (xn > g) return 1 / 0;
          Xe += xn;
        }
        return Xe / H;
      }, p.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), p.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), p.MAX_AVG_VARIANCE = .42, p.MAX_INDIVIDUAL_VARIANCE = .8, p.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), p.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), p.MAX_PIXEL_DRIFT = 3, p.MAX_PATTERN_DRIFT = 5, p.SKIPPED_ROW_COUNT_MAX = 25, p.ROW_STEP = 5, p.BARCODE_MIN_HEIGHT = 10, p;
    }();
  const $a = cu;
  var uu = function () {
    function p(r, l) {
      if (0 === l.length) throw new y();
      this.field = r;
      var g = l.length;
      if (g > 1 && 0 === l[0]) {
        for (var S = 1; S < g && 0 === l[S];) S++;
        S === g ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(g - S), ae.arraycopy(l, S, this.coefficients, 0, this.coefficients.length));
      } else this.coefficients = l;
    }
    return p.prototype.getCoefficients = function () {
      return this.coefficients;
    }, p.prototype.getDegree = function () {
      return this.coefficients.length - 1;
    }, p.prototype.isZero = function () {
      return 0 === this.coefficients[0];
    }, p.prototype.getCoefficient = function (r) {
      return this.coefficients[this.coefficients.length - 1 - r];
    }, p.prototype.evaluateAt = function (r) {
      var l, g;
      if (0 === r) return this.getCoefficient(0);
      if (1 === r) {
        var S = 0;
        try {
          for (var H = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(this.coefficients), ie = H.next(); !ie.done; ie = H.next()) S = this.field.add(S, ie.value);
        } catch (Lt) {
          l = {
            error: Lt
          };
        } finally {
          try {
            ie && !ie.done && (g = H.return) && g.call(H);
          } finally {
            if (l) throw l.error;
          }
        }
        return S;
      }
      for (var Oe = this.coefficients[0], Xe = this.coefficients.length, wt = 1; wt < Xe; wt++) Oe = this.field.add(this.field.multiply(r, Oe), this.coefficients[wt]);
      return Oe;
    }, p.prototype.add = function (r) {
      if (!this.field.equals(r.field)) throw new y("ModulusPolys do not have same ModulusGF field");
      if (this.isZero()) return r;
      if (r.isZero()) return this;
      var l = this.coefficients,
        g = r.coefficients;
      if (l.length > g.length) {
        var S = l;
        l = g, g = S;
      }
      var H = new Int32Array(g.length),
        ie = g.length - l.length;
      ae.arraycopy(g, 0, H, 0, ie);
      for (var de = ie; de < g.length; de++) H[de] = this.field.add(l[de - ie], g[de]);
      return new p(this.field, H);
    }, p.prototype.subtract = function (r) {
      if (!this.field.equals(r.field)) throw new y("ModulusPolys do not have same ModulusGF field");
      return r.isZero() ? this : this.add(r.negative());
    }, p.prototype.multiply = function (r) {
      return r instanceof p ? this.multiplyOther(r) : this.multiplyScalar(r);
    }, p.prototype.multiplyOther = function (r) {
      if (!this.field.equals(r.field)) throw new y("ModulusPolys do not have same ModulusGF field");
      if (this.isZero() || r.isZero()) return new p(this.field, new Int32Array([0]));
      for (var l = this.coefficients, g = l.length, S = r.coefficients, H = S.length, ie = new Int32Array(g + H - 1), de = 0; de < g; de++) for (var Oe = l[de], Xe = 0; Xe < H; Xe++) ie[de + Xe] = this.field.add(ie[de + Xe], this.field.multiply(Oe, S[Xe]));
      return new p(this.field, ie);
    }, p.prototype.negative = function () {
      for (var r = this.coefficients.length, l = new Int32Array(r), g = 0; g < r; g++) l[g] = this.field.subtract(0, this.coefficients[g]);
      return new p(this.field, l);
    }, p.prototype.multiplyScalar = function (r) {
      if (0 === r) return new p(this.field, new Int32Array([0]));
      if (1 === r) return this;
      for (var l = this.coefficients.length, g = new Int32Array(l), S = 0; S < l; S++) g[S] = this.field.multiply(this.coefficients[S], r);
      return new p(this.field, g);
    }, p.prototype.multiplyByMonomial = function (r, l) {
      if (r < 0) throw new y();
      if (0 === l) return new p(this.field, new Int32Array([0]));
      for (var g = this.coefficients.length, S = new Int32Array(g + r), H = 0; H < g; H++) S[H] = this.field.multiply(this.coefficients[H], l);
      return new p(this.field, S);
    }, p.prototype.toString = function () {
      for (var r = new Ii(), l = this.getDegree(); l >= 0; l--) {
        var g = this.getCoefficient(l);
        0 !== g && (g < 0 ? (r.append(" - "), g = -g) : r.length() > 0 && r.append(" + "), (0 === l || 1 !== g) && r.append(g), 0 !== l && (1 === l ? r.append("x") : (r.append("x^"), r.append(l))));
      }
      return r.toString();
    }, p;
  }();
  const jl = uu;
  var Nc = function () {
    function p() {}
    return p.prototype.add = function (r, l) {
      return (r + l) % this.modulus;
    }, p.prototype.subtract = function (r, l) {
      return (this.modulus + r - l) % this.modulus;
    }, p.prototype.exp = function (r) {
      return this.expTable[r];
    }, p.prototype.log = function (r) {
      if (0 === r) throw new y();
      return this.logTable[r];
    }, p.prototype.inverse = function (r) {
      if (0 === r) throw new fi();
      return this.expTable[this.modulus - this.logTable[r] - 1];
    }, p.prototype.multiply = function (r, l) {
      return 0 === r || 0 === l ? 0 : this.expTable[(this.logTable[r] + this.logTable[l]) % (this.modulus - 1)];
    }, p.prototype.getSize = function () {
      return this.modulus;
    }, p.prototype.equals = function (r) {
      return r === this;
    }, p;
  }();
  const Cl = Nc;
  var lc = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Bu = function (p) {
      function r(l, g) {
        var S = p.call(this) || this;
        S.modulus = l, S.expTable = new Int32Array(l), S.logTable = new Int32Array(l);
        for (var H = 1, ie = 0; ie < l; ie++) S.expTable[ie] = H, H = H * g % l;
        for (ie = 0; ie < l - 1; ie++) S.logTable[S.expTable[ie]] = ie;
        return S.zero = new jl(S, new Int32Array([0])), S.one = new jl(S, new Int32Array([1])), S;
      }
      return lc(r, p), r.prototype.getZero = function () {
        return this.zero;
      }, r.prototype.getOne = function () {
        return this.one;
      }, r.prototype.buildMonomial = function (l, g) {
        if (l < 0) throw new y();
        if (0 === g) return this.zero;
        var S = new Int32Array(l + 1);
        return S[0] = g, new jl(this, S);
      }, r.PDF417_GF = new r(Qa.NUMBER_OF_CODEWORDS, 3), r;
    }(Cl);
  const Sc = Bu;
  var ah = function () {
    function p() {
      this.field = Sc.PDF417_GF;
    }
    return p.prototype.decode = function (r, l, g) {
      for (var S, H, ie = new jl(this.field, r), de = new Int32Array(l), Oe = !1, Xe = l; Xe > 0; Xe--) {
        var wt = ie.evaluateAt(this.field.exp(Xe));
        de[l - Xe] = wt, 0 !== wt && (Oe = !0);
      }
      if (!Oe) return 0;
      var Lt = this.field.getOne();
      if (null != g) try {
        for (var cn = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(g), xn = cn.next(); !xn.done; xn = cn.next()) {
          var no = this.field.exp(r.length - 1 - xn.value),
            Ho = new jl(this.field, new Int32Array([this.field.subtract(0, no), 1]));
          Lt = Lt.multiply(Ho);
        }
      } catch (Ys) {
        S = {
          error: Ys
        };
      } finally {
        try {
          xn && !xn.done && (H = cn.return) && H.call(cn);
        } finally {
          if (S) throw S.error;
        }
      }
      var zo = new jl(this.field, de),
        Bo = this.runEuclideanAlgorithm(this.field.buildMonomial(l, 1), zo, l),
        Mr = Bo[0],
        Ur = Bo[1],
        ls = this.findErrorLocations(Mr),
        Ss = this.findErrorMagnitudes(Ur, Mr, ls);
      for (Xe = 0; Xe < ls.length; Xe++) {
        var Is = r.length - 1 - this.field.log(ls[Xe]);
        if (Is < 0) throw ke.getChecksumInstance();
        r[Is] = this.field.subtract(r[Is], Ss[Xe]);
      }
      return ls.length;
    }, p.prototype.runEuclideanAlgorithm = function (r, l, g) {
      if (r.getDegree() < l.getDegree()) {
        var S = r;
        r = l, l = S;
      }
      for (var H = r, ie = l, de = this.field.getZero(), Oe = this.field.getOne(); ie.getDegree() >= Math.round(g / 2);) {
        var Xe = H,
          wt = de;
        if (de = Oe, (H = ie).isZero()) throw ke.getChecksumInstance();
        ie = Xe;
        for (var Lt = this.field.getZero(), cn = H.getCoefficient(H.getDegree()), xn = this.field.inverse(cn); ie.getDegree() >= H.getDegree() && !ie.isZero();) {
          var Hi = ie.getDegree() - H.getDegree(),
            no = this.field.multiply(ie.getCoefficient(ie.getDegree()), xn);
          Lt = Lt.add(this.field.buildMonomial(Hi, no)), ie = ie.subtract(H.multiplyByMonomial(Hi, no));
        }
        Oe = Lt.multiply(de).subtract(wt).negative();
      }
      var Ho = Oe.getCoefficient(0);
      if (0 === Ho) throw ke.getChecksumInstance();
      var zo = this.field.inverse(Ho);
      return [Oe.multiply(zo), ie.multiply(zo)];
    }, p.prototype.findErrorLocations = function (r) {
      for (var l = r.getDegree(), g = new Int32Array(l), S = 0, H = 1; H < this.field.getSize() && S < l; H++) 0 === r.evaluateAt(H) && (g[S] = this.field.inverse(H), S++);
      if (S !== l) throw ke.getChecksumInstance();
      return g;
    }, p.prototype.findErrorMagnitudes = function (r, l, g) {
      for (var S = l.getDegree(), H = new Int32Array(S), ie = 1; ie <= S; ie++) H[S - ie] = this.field.multiply(ie, l.getCoefficient(ie));
      var de = new jl(this.field, H),
        Oe = g.length,
        Xe = new Int32Array(Oe);
      for (ie = 0; ie < Oe; ie++) {
        var wt = this.field.inverse(g[ie]),
          Lt = this.field.subtract(0, r.evaluateAt(wt)),
          cn = this.field.inverse(de.evaluateAt(wt));
        Xe[ie] = this.field.multiply(Lt, cn);
      }
      return Xe;
    }, p;
  }();
  const Qd = ah;
  var Md = function () {
    function p(r, l, g, S, H) {
      r instanceof p ? this.constructor_2(r) : this.constructor_1(r, l, g, S, H);
    }
    return p.prototype.constructor_1 = function (r, l, g, S, H) {
      var ie = null == l || null == g,
        de = null == S || null == H;
      if (ie && de) throw new pt();
      ie ? (l = new Or(0, S.getY()), g = new Or(0, H.getY())) : de && (S = new Or(r.getWidth() - 1, l.getY()), H = new Or(r.getWidth() - 1, g.getY())), this.image = r, this.topLeft = l, this.bottomLeft = g, this.topRight = S, this.bottomRight = H, this.minX = Math.trunc(Math.min(l.getX(), g.getX())), this.maxX = Math.trunc(Math.max(S.getX(), H.getX())), this.minY = Math.trunc(Math.min(l.getY(), S.getY())), this.maxY = Math.trunc(Math.max(g.getY(), H.getY()));
    }, p.prototype.constructor_2 = function (r) {
      this.image = r.image, this.topLeft = r.getTopLeft(), this.bottomLeft = r.getBottomLeft(), this.topRight = r.getTopRight(), this.bottomRight = r.getBottomRight(), this.minX = r.getMinX(), this.maxX = r.getMaxX(), this.minY = r.getMinY(), this.maxY = r.getMaxY();
    }, p.merge = function (r, l) {
      return null == r ? l : null == l ? r : new p(r.image, r.topLeft, r.bottomLeft, l.topRight, l.bottomRight);
    }, p.prototype.addMissingRows = function (r, l, g) {
      var S = this.topLeft,
        H = this.bottomLeft,
        ie = this.topRight,
        de = this.bottomRight;
      if (r > 0) {
        var Oe = g ? this.topLeft : this.topRight,
          Xe = Math.trunc(Oe.getY() - r);
        Xe < 0 && (Xe = 0);
        var wt = new Or(Oe.getX(), Xe);
        g ? S = wt : ie = wt;
      }
      if (l > 0) {
        var Lt = g ? this.bottomLeft : this.bottomRight,
          cn = Math.trunc(Lt.getY() + l);
        cn >= this.image.getHeight() && (cn = this.image.getHeight() - 1);
        var xn = new Or(Lt.getX(), cn);
        g ? H = xn : de = xn;
      }
      return new p(this.image, S, H, ie, de);
    }, p.prototype.getMinX = function () {
      return this.minX;
    }, p.prototype.getMaxX = function () {
      return this.maxX;
    }, p.prototype.getMinY = function () {
      return this.minY;
    }, p.prototype.getMaxY = function () {
      return this.maxY;
    }, p.prototype.getTopLeft = function () {
      return this.topLeft;
    }, p.prototype.getTopRight = function () {
      return this.topRight;
    }, p.prototype.getBottomLeft = function () {
      return this.bottomLeft;
    }, p.prototype.getBottomRight = function () {
      return this.bottomRight;
    }, p;
  }();
  const _u = Md;
  var ju = function () {
    function p(r, l, g, S) {
      this.columnCount = r, this.errorCorrectionLevel = S, this.rowCountUpperPart = l, this.rowCountLowerPart = g, this.rowCount = l + g;
    }
    return p.prototype.getColumnCount = function () {
      return this.columnCount;
    }, p.prototype.getErrorCorrectionLevel = function () {
      return this.errorCorrectionLevel;
    }, p.prototype.getRowCount = function () {
      return this.rowCount;
    }, p.prototype.getRowCountUpperPart = function () {
      return this.rowCountUpperPart;
    }, p.prototype.getRowCountLowerPart = function () {
      return this.rowCountLowerPart;
    }, p;
  }();
  const Xu = ju;
  var Xd = function () {
    function p() {
      this.buffer = "";
    }
    return p.form = function (r, l) {
      var g = -1;
      return r.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function S(ie, de, Oe, Xe, wt, Lt) {
        if ("%%" === ie) return "%";
        if (void 0 !== l[++g]) {
          ie = Xe ? parseInt(Xe.substr(1)) : void 0;
          var xn,
            cn = wt ? parseInt(wt.substr(1)) : void 0;
          switch (Lt) {
            case "s":
              xn = l[g];
              break;
            case "c":
              xn = l[g][0];
              break;
            case "f":
              xn = parseFloat(l[g]).toFixed(ie);
              break;
            case "p":
              xn = parseFloat(l[g]).toPrecision(ie);
              break;
            case "e":
              xn = parseFloat(l[g]).toExponential(ie);
              break;
            case "x":
              xn = parseInt(l[g]).toString(cn || 16);
              break;
            case "d":
              xn = parseFloat(parseInt(l[g], cn || 10).toPrecision(ie)).toFixed(0);
          }
          xn = "object" == typeof xn ? JSON.stringify(xn) : (+xn).toString(cn);
          for (var Hi = parseInt(Oe), no = Oe && Oe[0] + "" == "0" ? "0" : " "; xn.length < Hi;) xn = void 0 !== de ? xn + no : no + xn;
          return xn;
        }
      });
    }, p.prototype.format = function (r) {
      for (var l = [], g = 1; g < arguments.length; g++) l[g - 1] = arguments[g];
      this.buffer += p.form(r, l);
    }, p.prototype.toString = function () {
      return this.buffer;
    }, p;
  }();
  const Zu = Xd;
  var hd = function () {
    function p(r) {
      this.boundingBox = new _u(r), this.codewords = new Array(r.getMaxY() - r.getMinY() + 1);
    }
    return p.prototype.getCodewordNearby = function (r) {
      var l = this.getCodeword(r);
      if (null != l) return l;
      for (var g = 1; g < p.MAX_NEARBY_DISTANCE; g++) {
        var S = this.imageRowToCodewordIndex(r) - g;
        if (S >= 0 && null != (l = this.codewords[S]) || (S = this.imageRowToCodewordIndex(r) + g) < this.codewords.length && null != (l = this.codewords[S])) return l;
      }
      return null;
    }, p.prototype.imageRowToCodewordIndex = function (r) {
      return r - this.boundingBox.getMinY();
    }, p.prototype.setCodeword = function (r, l) {
      this.codewords[this.imageRowToCodewordIndex(r)] = l;
    }, p.prototype.getCodeword = function (r) {
      return this.codewords[this.imageRowToCodewordIndex(r)];
    }, p.prototype.getBoundingBox = function () {
      return this.boundingBox;
    }, p.prototype.getCodewords = function () {
      return this.codewords;
    }, p.prototype.toString = function () {
      var r,
        l,
        g = new Zu(),
        S = 0;
      try {
        for (var H = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(this.codewords), ie = H.next(); !ie.done; ie = H.next()) {
          var de = ie.value;
          null != de ? g.format("%3d: %3d|%3d%n", S++, de.getRowNumber(), de.getValue()) : g.format("%3d:    |   %n", S++);
        }
      } catch (Oe) {
        r = {
          error: Oe
        };
      } finally {
        try {
          ie && !ie.done && (l = H.return) && l.call(H);
        } finally {
          if (r) throw r.error;
        }
      }
      return g.toString();
    }, p.MAX_NEARBY_DISTANCE = 5, p;
  }();
  const Td = hd;
  var sd = function (p, r) {
      var l = "function" == typeof Symbol && p[Symbol.iterator];
      if (!l) return p;
      var S,
        ie,
        g = l.call(p),
        H = [];
      try {
        for (; (void 0 === r || r-- > 0) && !(S = g.next()).done;) H.push(S.value);
      } catch (de) {
        ie = {
          error: de
        };
      } finally {
        try {
          S && !S.done && (l = g.return) && l.call(g);
        } finally {
          if (ie) throw ie.error;
        }
      }
      return H;
    },
    tl = function () {
      function p() {
        this.values = new Map();
      }
      return p.prototype.setValue = function (r) {
        r = Math.trunc(r);
        var l = this.values.get(r);
        null == l && (l = 0), l++, this.values.set(r, l);
      }, p.prototype.getValue = function () {
        var r,
          l,
          g = -1,
          S = new Array(),
          H = function (Lt, cn) {
            var xn_getKey = function () {
                return Lt;
              },
              xn_getValue = function () {
                return cn;
              };
            xn_getValue() > g ? (g = xn_getValue(), (S = []).push(xn_getKey())) : xn_getValue() === g && S.push(xn_getKey());
          };
        try {
          for (var ie = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(this.values.entries()), de = ie.next(); !de.done; de = ie.next()) {
            var Oe = sd(de.value, 2);
            H(Oe[0], Oe[1]);
          }
        } catch (Lt) {
          r = {
            error: Lt
          };
        } finally {
          try {
            de && !de.done && (l = ie.return) && l.call(ie);
          } finally {
            if (r) throw r.error;
          }
        }
        return Qa.toIntArray(S);
      }, p.prototype.getConfidence = function (r) {
        return this.values.get(r);
      }, p;
    }();
  const Ie = tl;
  var ft = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    rn = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    En = function (p) {
      function r(l, g) {
        var S = p.call(this, l) || this;
        return S._isLeft = g, S;
      }
      return ft(r, p), r.prototype.setRowNumbers = function () {
        var l, g;
        try {
          for (var S = rn(this.getCodewords()), H = S.next(); !H.done; H = S.next()) H.value?.setRowNumberAsRowIndicatorColumn();
        } catch (de) {
          l = {
            error: de
          };
        } finally {
          try {
            H && !H.done && (g = S.return) && g.call(S);
          } finally {
            if (l) throw l.error;
          }
        }
      }, r.prototype.adjustCompleteIndicatorColumnRowNumbers = function (l) {
        var g = this.getCodewords();
        this.setRowNumbers(), this.removeIncorrectCodewords(g, l);
        for (var S = this.getBoundingBox(), H = this._isLeft ? S.getTopLeft() : S.getTopRight(), ie = this._isLeft ? S.getBottomLeft() : S.getBottomRight(), de = this.imageRowToCodewordIndex(Math.trunc(H.getY())), Oe = this.imageRowToCodewordIndex(Math.trunc(ie.getY())), Xe = -1, wt = 1, Lt = 0, cn = de; cn < Oe; cn++) if (null != g[cn]) {
          var xn = g[cn],
            Hi = xn.getRowNumber() - Xe;
          if (0 === Hi) Lt++;else if (1 === Hi) wt = Math.max(wt, Lt), Lt = 1, Xe = xn.getRowNumber();else if (Hi < 0 || xn.getRowNumber() >= l.getRowCount() || Hi > cn) g[cn] = null;else {
            for (var no, Ho = (no = wt > 2 ? (wt - 2) * Hi : Hi) >= cn, zo = 1; zo <= no && !Ho; zo++) Ho = null != g[cn - zo];
            Ho ? g[cn] = null : (Xe = xn.getRowNumber(), Lt = 1);
          }
        }
      }, r.prototype.getRowHeights = function () {
        var l,
          g,
          S = this.getBarcodeMetadata();
        if (null == S) return null;
        this.adjustIncompleteIndicatorColumnRowNumbers(S);
        var H = new Int32Array(S.getRowCount());
        try {
          for (var ie = rn(this.getCodewords()), de = ie.next(); !de.done; de = ie.next()) {
            var Oe = de.value;
            if (null != Oe) {
              var Xe = Oe.getRowNumber();
              if (Xe >= H.length) continue;
              H[Xe]++;
            }
          }
        } catch (wt) {
          l = {
            error: wt
          };
        } finally {
          try {
            de && !de.done && (g = ie.return) && g.call(ie);
          } finally {
            if (l) throw l.error;
          }
        }
        return H;
      }, r.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (l) {
        for (var g = this.getBoundingBox(), S = this._isLeft ? g.getTopLeft() : g.getTopRight(), H = this._isLeft ? g.getBottomLeft() : g.getBottomRight(), ie = this.imageRowToCodewordIndex(Math.trunc(S.getY())), de = this.imageRowToCodewordIndex(Math.trunc(H.getY())), Oe = this.getCodewords(), Xe = -1, wt = 1, Lt = 0, cn = ie; cn < de; cn++) if (null != Oe[cn]) {
          var xn = Oe[cn];
          xn.setRowNumberAsRowIndicatorColumn();
          var Hi = xn.getRowNumber() - Xe;
          0 === Hi ? Lt++ : 1 === Hi ? (wt = Math.max(wt, Lt), Lt = 1, Xe = xn.getRowNumber()) : xn.getRowNumber() >= l.getRowCount() ? Oe[cn] = null : (Xe = xn.getRowNumber(), Lt = 1);
        }
      }, r.prototype.getBarcodeMetadata = function () {
        var l,
          g,
          S = this.getCodewords(),
          H = new Ie(),
          ie = new Ie(),
          de = new Ie(),
          Oe = new Ie();
        try {
          for (var Xe = rn(S), wt = Xe.next(); !wt.done; wt = Xe.next()) {
            var Lt = wt.value;
            if (null != Lt) {
              Lt.setRowNumberAsRowIndicatorColumn();
              var cn = Lt.getValue() % 30,
                xn = Lt.getRowNumber();
              switch (this._isLeft || (xn += 2), xn % 3) {
                case 0:
                  ie.setValue(3 * cn + 1);
                  break;
                case 1:
                  Oe.setValue(cn / 3), de.setValue(cn % 3);
                  break;
                case 2:
                  H.setValue(cn + 1);
              }
            }
          }
        } catch (no) {
          l = {
            error: no
          };
        } finally {
          try {
            wt && !wt.done && (g = Xe.return) && g.call(Xe);
          } finally {
            if (l) throw l.error;
          }
        }
        if (0 === H.getValue().length || 0 === ie.getValue().length || 0 === de.getValue().length || 0 === Oe.getValue().length || H.getValue()[0] < 1 || ie.getValue()[0] + de.getValue()[0] < Qa.MIN_ROWS_IN_BARCODE || ie.getValue()[0] + de.getValue()[0] > Qa.MAX_ROWS_IN_BARCODE) return null;
        var Hi = new Xu(H.getValue()[0], ie.getValue()[0], de.getValue()[0], Oe.getValue()[0]);
        return this.removeIncorrectCodewords(S, Hi), Hi;
      }, r.prototype.removeIncorrectCodewords = function (l, g) {
        for (var S = 0; S < l.length; S++) {
          var H = l[S];
          if (null != l[S]) {
            var ie = H.getValue() % 30,
              de = H.getRowNumber();
            if (de > g.getRowCount()) {
              l[S] = null;
              continue;
            }
            switch (this._isLeft || (de += 2), de % 3) {
              case 0:
                3 * ie + 1 !== g.getRowCountUpperPart() && (l[S] = null);
                break;
              case 1:
                (Math.trunc(ie / 3) !== g.getErrorCorrectionLevel() || ie % 3 !== g.getRowCountLowerPart()) && (l[S] = null);
                break;
              case 2:
                ie + 1 !== g.getColumnCount() && (l[S] = null);
            }
          }
        }
      }, r.prototype.isLeft = function () {
        return this._isLeft;
      }, r.prototype.toString = function () {
        return "IsLeft: " + this._isLeft + "\n" + p.prototype.toString.call(this);
      }, r;
    }(Td);
  const Kn = En;
  var Vr = function () {
    function p(r, l) {
      this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = r, this.barcodeColumnCount = r.getColumnCount(), this.boundingBox = l, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
    }
    return p.prototype.getDetectionResultColumns = function () {
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
      var l,
        r = Qa.MAX_CODEWORDS_IN_BARCODE;
      do {
        l = r, r = this.adjustRowNumbersAndGetCount();
      } while (r > 0 && r < l);
      return this.detectionResultColumns;
    }, p.prototype.adjustIndicatorColumnRowNumbers = function (r) {
      r?.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
    }, p.prototype.adjustRowNumbersAndGetCount = function () {
      var r = this.adjustRowNumbersByRow();
      if (0 === r) return 0;
      for (var l = 1; l < this.barcodeColumnCount + 1; l++) for (var g = this.detectionResultColumns[l].getCodewords(), S = 0; S < g.length; S++) null != g[S] && (g[S].hasValidRowNumber() || this.adjustRowNumbers(l, S, g));
      return r;
    }, p.prototype.adjustRowNumbersByRow = function () {
      return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
    }, p.prototype.adjustRowNumbersFromBothRI = function () {
      if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1]) for (var r = this.detectionResultColumns[0].getCodewords(), l = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), g = 0; g < r.length; g++) if (null != r[g] && null != l[g] && r[g].getRowNumber() === l[g].getRowNumber()) for (var S = 1; S <= this.barcodeColumnCount; S++) {
        var H = this.detectionResultColumns[S].getCodewords()[g];
        null != H && (H.setRowNumber(r[g].getRowNumber()), H.hasValidRowNumber() || (this.detectionResultColumns[S].getCodewords()[g] = null));
      }
    }, p.prototype.adjustRowNumbersFromRRI = function () {
      if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
      for (var r = 0, l = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), g = 0; g < l.length; g++) if (null != l[g]) for (var S = l[g].getRowNumber(), H = 0, ie = this.barcodeColumnCount + 1; ie > 0 && H < this.ADJUST_ROW_NUMBER_SKIP; ie--) {
        var de = this.detectionResultColumns[ie].getCodewords()[g];
        null != de && (H = p.adjustRowNumberIfValid(S, H, de), de.hasValidRowNumber() || r++);
      }
      return r;
    }, p.prototype.adjustRowNumbersFromLRI = function () {
      if (null == this.detectionResultColumns[0]) return 0;
      for (var r = 0, l = this.detectionResultColumns[0].getCodewords(), g = 0; g < l.length; g++) if (null != l[g]) for (var S = l[g].getRowNumber(), H = 0, ie = 1; ie < this.barcodeColumnCount + 1 && H < this.ADJUST_ROW_NUMBER_SKIP; ie++) {
        var de = this.detectionResultColumns[ie].getCodewords()[g];
        null != de && (H = p.adjustRowNumberIfValid(S, H, de), de.hasValidRowNumber() || r++);
      }
      return r;
    }, p.adjustRowNumberIfValid = function (r, l, g) {
      return null == g || g.hasValidRowNumber() || (g.isValidRowNumber(r) ? (g.setRowNumber(r), l = 0) : ++l), l;
    }, p.prototype.adjustRowNumbers = function (r, l, g) {
      var S, H;
      if (null != this.detectionResultColumns[r - 1]) {
        var ie = g[l],
          de = this.detectionResultColumns[r - 1].getCodewords(),
          Oe = de;
        null != this.detectionResultColumns[r + 1] && (Oe = this.detectionResultColumns[r + 1].getCodewords());
        var Xe = new Array(14);
        Xe[2] = de[l], Xe[3] = Oe[l], l > 0 && (Xe[0] = g[l - 1], Xe[4] = de[l - 1], Xe[5] = Oe[l - 1]), l > 1 && (Xe[8] = g[l - 2], Xe[10] = de[l - 2], Xe[11] = Oe[l - 2]), l < g.length - 1 && (Xe[1] = g[l + 1], Xe[6] = de[l + 1], Xe[7] = Oe[l + 1]), l < g.length - 2 && (Xe[9] = g[l + 2], Xe[12] = de[l + 2], Xe[13] = Oe[l + 2]);
        try {
          for (var wt = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(Xe), Lt = wt.next(); !Lt.done; Lt = wt.next()) if (p.adjustRowNumber(ie, Lt.value)) return;
        } catch (xn) {
          S = {
            error: xn
          };
        } finally {
          try {
            Lt && !Lt.done && (H = wt.return) && H.call(wt);
          } finally {
            if (S) throw S.error;
          }
        }
      }
    }, p.adjustRowNumber = function (r, l) {
      return !(null == l || !l.hasValidRowNumber() || l.getBucket() !== r.getBucket() || (r.setRowNumber(l.getRowNumber()), 0));
    }, p.prototype.getBarcodeColumnCount = function () {
      return this.barcodeColumnCount;
    }, p.prototype.getBarcodeRowCount = function () {
      return this.barcodeMetadata.getRowCount();
    }, p.prototype.getBarcodeECLevel = function () {
      return this.barcodeMetadata.getErrorCorrectionLevel();
    }, p.prototype.setBoundingBox = function (r) {
      this.boundingBox = r;
    }, p.prototype.getBoundingBox = function () {
      return this.boundingBox;
    }, p.prototype.setDetectionResultColumn = function (r, l) {
      this.detectionResultColumns[r] = l;
    }, p.prototype.getDetectionResultColumn = function (r) {
      return this.detectionResultColumns[r];
    }, p.prototype.toString = function () {
      var r = this.detectionResultColumns[0];
      null == r && (r = this.detectionResultColumns[this.barcodeColumnCount + 1]);
      for (var l = new Zu(), g = 0; g < r.getCodewords().length; g++) {
        l.format("CW %3d:", g);
        for (var S = 0; S < this.barcodeColumnCount + 2; S++) if (null != this.detectionResultColumns[S]) {
          var H = this.detectionResultColumns[S].getCodewords()[g];
          null != H ? l.format(" %3d|%3d", H.getRowNumber(), H.getValue()) : l.format("    |   ");
        } else l.format("    |   ");
        l.format("%n");
      }
      return l.toString();
    }, p;
  }();
  const ea = Vr;
  var Zs = function () {
    function p(r, l, g, S) {
      this.rowNumber = p.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(r), this.endX = Math.trunc(l), this.bucket = Math.trunc(g), this.value = Math.trunc(S);
    }
    return p.prototype.hasValidRowNumber = function () {
      return this.isValidRowNumber(this.rowNumber);
    }, p.prototype.isValidRowNumber = function (r) {
      return r !== p.BARCODE_ROW_UNKNOWN && this.bucket === r % 3 * 3;
    }, p.prototype.setRowNumberAsRowIndicatorColumn = function () {
      this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
    }, p.prototype.getWidth = function () {
      return this.endX - this.startX;
    }, p.prototype.getStartX = function () {
      return this.startX;
    }, p.prototype.getEndX = function () {
      return this.endX;
    }, p.prototype.getBucket = function () {
      return this.bucket;
    }, p.prototype.getValue = function () {
      return this.value;
    }, p.prototype.getRowNumber = function () {
      return this.rowNumber;
    }, p.prototype.setRowNumber = function (r) {
      this.rowNumber = r;
    }, p.prototype.toString = function () {
      return this.rowNumber + "|" + this.value;
    }, p.BARCODE_ROW_UNKNOWN = -1, p;
  }();
  const xl = Zs;
  var Ec = function () {
    function p() {}
    return p.initialize = function () {
      for (var r = 0; r < Qa.SYMBOL_TABLE.length; r++) for (var l = Qa.SYMBOL_TABLE[r], g = 1 & l, S = 0; S < Qa.BARS_IN_MODULE; S++) {
        for (var H = 0; (1 & l) === g;) H += 1, l >>= 1;
        g = 1 & l, p.RATIOS_TABLE[r] || (p.RATIOS_TABLE[r] = new Array(Qa.BARS_IN_MODULE)), p.RATIOS_TABLE[r][Qa.BARS_IN_MODULE - S - 1] = Math.fround(H / Qa.MODULES_IN_CODEWORD);
      }
      this.bSymbolTableReady = !0;
    }, p.getDecodedValue = function (r) {
      var l = p.getDecodedCodewordValue(p.sampleBitCounts(r));
      return -1 !== l ? l : p.getClosestDecodedValue(r);
    }, p.sampleBitCounts = function (r) {
      for (var l = Qo.sum(r), g = new Int32Array(Qa.BARS_IN_MODULE), S = 0, H = 0, ie = 0; ie < Qa.MODULES_IN_CODEWORD; ie++) H + r[S] <= l / (2 * Qa.MODULES_IN_CODEWORD) + ie * l / Qa.MODULES_IN_CODEWORD && (H += r[S], S++), g[S]++;
      return g;
    }, p.getDecodedCodewordValue = function (r) {
      var l = p.getBitValue(r);
      return -1 === Qa.getCodeword(l) ? -1 : l;
    }, p.getBitValue = function (r) {
      for (var l = 0, g = 0; g < r.length; g++) for (var S = 0; S < r[g]; S++) l = l << 1 | (g % 2 == 0 ? 1 : 0);
      return Math.trunc(l);
    }, p.getClosestDecodedValue = function (r) {
      var l = Qo.sum(r),
        g = new Array(Qa.BARS_IN_MODULE);
      if (l > 1) for (var S = 0; S < g.length; S++) g[S] = Math.fround(r[S] / l);
      var H = _s.MAX_VALUE,
        ie = -1;
      this.bSymbolTableReady || p.initialize();
      for (var de = 0; de < p.RATIOS_TABLE.length; de++) {
        for (var Oe = 0, Xe = p.RATIOS_TABLE[de], wt = 0; wt < Qa.BARS_IN_MODULE; wt++) {
          var Lt = Math.fround(Xe[wt] - g[wt]);
          if ((Oe += Math.fround(Lt * Lt)) >= H) break;
        }
        Oe < H && (H = Oe, ie = Qa.SYMBOL_TABLE[de]);
      }
      return ie;
    }, p.bSymbolTableReady = !1, p.RATIOS_TABLE = new Array(Qa.SYMBOL_TABLE.length).map(function (r) {
      return new Array(Qa.BARS_IN_MODULE);
    }), p;
  }();
  const Ya = Ec;
  var Zl = function () {
    function p() {
      this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
    }
    return p.prototype.getSegmentIndex = function () {
      return this.segmentIndex;
    }, p.prototype.setSegmentIndex = function (r) {
      this.segmentIndex = r;
    }, p.prototype.getFileId = function () {
      return this.fileId;
    }, p.prototype.setFileId = function (r) {
      this.fileId = r;
    }, p.prototype.getOptionalData = function () {
      return this.optionalData;
    }, p.prototype.setOptionalData = function (r) {
      this.optionalData = r;
    }, p.prototype.isLastSegment = function () {
      return this.lastSegment;
    }, p.prototype.setLastSegment = function (r) {
      this.lastSegment = r;
    }, p.prototype.getSegmentCount = function () {
      return this.segmentCount;
    }, p.prototype.setSegmentCount = function (r) {
      this.segmentCount = r;
    }, p.prototype.getSender = function () {
      return this.sender || null;
    }, p.prototype.setSender = function (r) {
      this.sender = r;
    }, p.prototype.getAddressee = function () {
      return this.addressee || null;
    }, p.prototype.setAddressee = function (r) {
      this.addressee = r;
    }, p.prototype.getFileName = function () {
      return this.fileName;
    }, p.prototype.setFileName = function (r) {
      this.fileName = r;
    }, p.prototype.getFileSize = function () {
      return this.fileSize;
    }, p.prototype.setFileSize = function (r) {
      this.fileSize = r;
    }, p.prototype.getChecksum = function () {
      return this.checksum;
    }, p.prototype.setChecksum = function (r) {
      this.checksum = r;
    }, p.prototype.getTimestamp = function () {
      return this.timestamp;
    }, p.prototype.setTimestamp = function (r) {
      this.timestamp = r;
    }, p;
  }();
  const ku = Zl;
  var mp = function () {
    function p() {}
    return p.parseLong = function (r, l) {
      return void 0 === l && (l = void 0), parseInt(r, l);
    }, p;
  }();
  const Ed = mp;
  var gp = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    fd = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return gp(r, p), r.kind = "NullPointerException", r;
    }(h);
  const kn = fd;
  var nn = function () {
    function p() {}
    return p.prototype.writeBytes = function (r) {
      this.writeBytesOffset(r, 0, r.length);
    }, p.prototype.writeBytesOffset = function (r, l, g) {
      if (null == r) throw new kn();
      if (l < 0 || l > r.length || g < 0 || l + g > r.length || l + g < 0) throw new te();
      if (0 !== g) for (var S = 0; S < g; S++) this.write(r[l + S]);
    }, p.prototype.flush = function () {}, p.prototype.close = function () {}, p;
  }();
  const zt = nn;
  var Jn = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Do = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Jn(r, p), r;
    }(h);
  const we = Do;
  var Bt = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    ve = function (p) {
      function r(l) {
        void 0 === l && (l = 32);
        var g = p.call(this) || this;
        if (g.count = 0, l < 0) throw new y("Negative initial size: " + l);
        return g.buf = new Uint8Array(l), g;
      }
      return Bt(r, p), r.prototype.ensureCapacity = function (l) {
        l - this.buf.length > 0 && this.grow(l);
      }, r.prototype.grow = function (l) {
        var S = this.buf.length << 1;
        if (S - l < 0 && (S = l), S < 0) {
          if (l < 0) throw new we();
          S = We.MAX_VALUE;
        }
        this.buf = qe.copyOfUint8Array(this.buf, S);
      }, r.prototype.write = function (l) {
        this.ensureCapacity(this.count + 1), this.buf[this.count] = l, this.count += 1;
      }, r.prototype.writeBytesOffset = function (l, g, S) {
        if (g < 0 || g > l.length || S < 0 || g + S - l.length > 0) throw new te();
        this.ensureCapacity(this.count + S), ae.arraycopy(l, g, this.buf, this.count, S), this.count += S;
      }, r.prototype.writeTo = function (l) {
        l.writeBytesOffset(this.buf, 0, this.count);
      }, r.prototype.reset = function () {
        this.count = 0;
      }, r.prototype.toByteArray = function () {
        return qe.copyOfUint8Array(this.buf, this.count);
      }, r.prototype.size = function () {
        return this.count;
      }, r.prototype.toString = function (l) {
        return l ? "string" == typeof l ? this.toString_string(l) : this.toString_number(l) : this.toString_void();
      }, r.prototype.toString_void = function () {
        return new String(this.buf).toString();
      }, r.prototype.toString_string = function (l) {
        return new String(this.buf).toString();
      }, r.prototype.toString_number = function (l) {
        return new String(this.buf).toString();
      }, r.prototype.close = function () {}, r;
    }(zt);
  const yt = ve;
  var tr,
    An = (() => (function (p) {
      p[p.ALPHA = 0] = "ALPHA", p[p.LOWER = 1] = "LOWER", p[p.MIXED = 2] = "MIXED", p[p.PUNCT = 3] = "PUNCT", p[p.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", p[p.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
    }(An || (An = {})), An))();
  function Un() {
    if (typeof window < "u") return window.BigInt || null;
    if (typeof global < "u") return global.BigInt || null;
    if (typeof self < "u") return self.BigInt || null;
    throw new Error("Can't search globals for BigInt!");
  }
  function Gr(p) {
    if (typeof tr > "u" && (tr = Un()), null === tr) throw new Error("BigInt is not supported!");
    return tr(p);
  }
  var ta = function () {
    function p() {}
    return p.decode = function (r, l) {
      var g = new Ii(""),
        S = Ke.ISO8859_1;
      g.enableDecoding(S);
      for (var H = 1, ie = r[H++], de = new ku(); H < r[0];) {
        switch (ie) {
          case p.TEXT_COMPACTION_MODE_LATCH:
            H = p.textCompaction(r, H, g);
            break;
          case p.BYTE_COMPACTION_MODE_LATCH:
          case p.BYTE_COMPACTION_MODE_LATCH_6:
            H = p.byteCompaction(ie, r, S, H, g);
            break;
          case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            g.append(r[H++]);
            break;
          case p.NUMERIC_COMPACTION_MODE_LATCH:
            H = p.numericCompaction(r, H, g);
            break;
          case p.ECI_CHARSET:
            Ke.getCharacterSetECIByValue(r[H++]);
            break;
          case p.ECI_GENERAL_PURPOSE:
            H += 2;
            break;
          case p.ECI_USER_DEFINED:
            H++;
            break;
          case p.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            H = p.decodeMacroBlock(r, H, de);
            break;
          case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case p.MACRO_PDF417_TERMINATOR:
            throw new Ft();
          default:
            H--, H = p.textCompaction(r, H, g);
        }
        if (!(H < r.length)) throw Ft.getFormatInstance();
        ie = r[H++];
      }
      if (0 === g.length()) throw Ft.getFormatInstance();
      var Xe = new Di(null, g.toString(), null, l);
      return Xe.setOther(de), Xe;
    }, p.decodeMacroBlock = function (r, l, g) {
      if (l + p.NUMBER_OF_SEQUENCE_CODEWORDS > r[0]) throw Ft.getFormatInstance();
      for (var S = new Int32Array(p.NUMBER_OF_SEQUENCE_CODEWORDS), H = 0; H < p.NUMBER_OF_SEQUENCE_CODEWORDS; H++, l++) S[H] = r[l];
      g.setSegmentIndex(We.parseInt(p.decodeBase900toBase10(S, p.NUMBER_OF_SEQUENCE_CODEWORDS)));
      var ie = new Ii();
      l = p.textCompaction(r, l, ie), g.setFileId(ie.toString());
      var de = -1;
      for (r[l] === p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (de = l + 1); l < r[0];) switch (r[l]) {
        case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          switch (r[++l]) {
            case p.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
              var Oe = new Ii();
              l = p.textCompaction(r, l + 1, Oe), g.setFileName(Oe.toString());
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
              var Xe = new Ii();
              l = p.textCompaction(r, l + 1, Xe), g.setSender(Xe.toString());
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
              var wt = new Ii();
              l = p.textCompaction(r, l + 1, wt), g.setAddressee(wt.toString());
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
              var Lt = new Ii();
              l = p.numericCompaction(r, l + 1, Lt), g.setSegmentCount(We.parseInt(Lt.toString()));
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
              var cn = new Ii();
              l = p.numericCompaction(r, l + 1, cn), g.setTimestamp(Ed.parseLong(cn.toString()));
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
              var xn = new Ii();
              l = p.numericCompaction(r, l + 1, xn), g.setChecksum(We.parseInt(xn.toString()));
              break;
            case p.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
              var Hi = new Ii();
              l = p.numericCompaction(r, l + 1, Hi), g.setFileSize(Ed.parseLong(Hi.toString()));
              break;
            default:
              throw Ft.getFormatInstance();
          }
          break;
        case p.MACRO_PDF417_TERMINATOR:
          l++, g.setLastSegment(!0);
          break;
        default:
          throw Ft.getFormatInstance();
      }
      if (-1 !== de) {
        var no = l - de;
        g.isLastSegment() && no--, g.setOptionalData(qe.copyOfRange(r, de, de + no));
      }
      return l;
    }, p.textCompaction = function (r, l, g) {
      for (var S = new Int32Array(2 * (r[0] - l)), H = new Int32Array(2 * (r[0] - l)), ie = 0, de = !1; l < r[0] && !de;) {
        var Oe = r[l++];
        if (Oe < p.TEXT_COMPACTION_MODE_LATCH) S[ie] = Oe / 30, S[ie + 1] = Oe % 30, ie += 2;else switch (Oe) {
          case p.TEXT_COMPACTION_MODE_LATCH:
            S[ie++] = p.TEXT_COMPACTION_MODE_LATCH;
            break;
          case p.BYTE_COMPACTION_MODE_LATCH:
          case p.BYTE_COMPACTION_MODE_LATCH_6:
          case p.NUMERIC_COMPACTION_MODE_LATCH:
          case p.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case p.MACRO_PDF417_TERMINATOR:
            l--, de = !0;
            break;
          case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            S[ie] = p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, Oe = r[l++], H[ie] = Oe, ie++;
        }
      }
      return p.decodeTextCompaction(S, H, ie, g), l;
    }, p.decodeTextCompaction = function (r, l, g, S) {
      for (var H = An.ALPHA, ie = An.ALPHA, de = 0; de < g;) {
        var Oe = r[de],
          Xe = "";
        switch (H) {
          case An.ALPHA:
            if (Oe < 26) Xe = String.fromCharCode(65 + Oe);else switch (Oe) {
              case 26:
                Xe = " ";
                break;
              case p.LL:
                H = An.LOWER;
                break;
              case p.ML:
                H = An.MIXED;
                break;
              case p.PS:
                ie = H, H = An.PUNCT_SHIFT;
                break;
              case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                S.append(l[de]);
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
            break;
          case An.LOWER:
            if (Oe < 26) Xe = String.fromCharCode(97 + Oe);else switch (Oe) {
              case 26:
                Xe = " ";
                break;
              case p.AS:
                ie = H, H = An.ALPHA_SHIFT;
                break;
              case p.ML:
                H = An.MIXED;
                break;
              case p.PS:
                ie = H, H = An.PUNCT_SHIFT;
                break;
              case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                S.append(l[de]);
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
            break;
          case An.MIXED:
            if (Oe < p.PL) Xe = p.MIXED_CHARS[Oe];else switch (Oe) {
              case p.PL:
                H = An.PUNCT;
                break;
              case 26:
                Xe = " ";
                break;
              case p.LL:
                H = An.LOWER;
                break;
              case p.AL:
                H = An.ALPHA;
                break;
              case p.PS:
                ie = H, H = An.PUNCT_SHIFT;
                break;
              case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                S.append(l[de]);
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
            break;
          case An.PUNCT:
            if (Oe < p.PAL) Xe = p.PUNCT_CHARS[Oe];else switch (Oe) {
              case p.PAL:
                H = An.ALPHA;
                break;
              case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                S.append(l[de]);
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
            break;
          case An.ALPHA_SHIFT:
            if (H = ie, Oe < 26) Xe = String.fromCharCode(65 + Oe);else switch (Oe) {
              case 26:
                Xe = " ";
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
            break;
          case An.PUNCT_SHIFT:
            if (H = ie, Oe < p.PAL) Xe = p.PUNCT_CHARS[Oe];else switch (Oe) {
              case p.PAL:
                H = An.ALPHA;
                break;
              case p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                S.append(l[de]);
                break;
              case p.TEXT_COMPACTION_MODE_LATCH:
                H = An.ALPHA;
            }
        }
        "" !== Xe && S.append(Xe), de++;
      }
    }, p.byteCompaction = function (r, l, g, S, H) {
      var ie = new yt(),
        de = 0,
        Oe = 0,
        Xe = !1;
      switch (r) {
        case p.BYTE_COMPACTION_MODE_LATCH:
          for (var wt = new Int32Array(6), Lt = l[S++]; S < l[0] && !Xe;) switch (wt[de++] = Lt, Oe = 900 * Oe + Lt, Lt = l[S++], Lt) {
            case p.TEXT_COMPACTION_MODE_LATCH:
            case p.BYTE_COMPACTION_MODE_LATCH:
            case p.NUMERIC_COMPACTION_MODE_LATCH:
            case p.BYTE_COMPACTION_MODE_LATCH_6:
            case p.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case p.MACRO_PDF417_TERMINATOR:
              S--, Xe = !0;
              break;
            default:
              if (de % 5 == 0 && de > 0) {
                for (var cn = 0; cn < 6; ++cn) ie.write(Number(Gr(Oe) >> Gr(8 * (5 - cn))));
                Oe = 0, de = 0;
              }
          }
          S === l[0] && Lt < p.TEXT_COMPACTION_MODE_LATCH && (wt[de++] = Lt);
          for (var xn = 0; xn < de; xn++) ie.write(wt[xn]);
          break;
        case p.BYTE_COMPACTION_MODE_LATCH_6:
          for (; S < l[0] && !Xe;) {
            var Hi = l[S++];
            if (Hi < p.TEXT_COMPACTION_MODE_LATCH) de++, Oe = 900 * Oe + Hi;else switch (Hi) {
              case p.TEXT_COMPACTION_MODE_LATCH:
              case p.BYTE_COMPACTION_MODE_LATCH:
              case p.NUMERIC_COMPACTION_MODE_LATCH:
              case p.BYTE_COMPACTION_MODE_LATCH_6:
              case p.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case p.MACRO_PDF417_TERMINATOR:
                S--, Xe = !0;
            }
            if (de % 5 == 0 && de > 0) {
              for (cn = 0; cn < 6; ++cn) ie.write(Number(Gr(Oe) >> Gr(8 * (5 - cn))));
              Oe = 0, de = 0;
            }
          }
      }
      return H.append(Je.decode(ie.toByteArray(), g)), S;
    }, p.numericCompaction = function (r, l, g) {
      for (var S = 0, H = !1, ie = new Int32Array(p.MAX_NUMERIC_CODEWORDS); l < r[0] && !H;) {
        var de = r[l++];
        if (l === r[0] && (H = !0), de < p.TEXT_COMPACTION_MODE_LATCH) ie[S] = de, S++;else switch (de) {
          case p.TEXT_COMPACTION_MODE_LATCH:
          case p.BYTE_COMPACTION_MODE_LATCH:
          case p.BYTE_COMPACTION_MODE_LATCH_6:
          case p.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case p.MACRO_PDF417_TERMINATOR:
            l--, H = !0;
        }
        (S % p.MAX_NUMERIC_CODEWORDS == 0 || de === p.NUMERIC_COMPACTION_MODE_LATCH || H) && S > 0 && (g.append(p.decodeBase900toBase10(ie, S)), S = 0);
      }
      return l;
    }, p.decodeBase900toBase10 = function (r, l) {
      for (var g = Gr(0), S = 0; S < l; S++) g += p.EXP900[l - S - 1] * Gr(r[S]);
      var H = g.toString();
      if ("1" !== H.charAt(0)) throw new Ft();
      return H.substring(1);
    }, p.TEXT_COMPACTION_MODE_LATCH = 900, p.BYTE_COMPACTION_MODE_LATCH = 901, p.NUMERIC_COMPACTION_MODE_LATCH = 902, p.BYTE_COMPACTION_MODE_LATCH_6 = 924, p.ECI_USER_DEFINED = 925, p.ECI_GENERAL_PURPOSE = 926, p.ECI_CHARSET = 927, p.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, p.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, p.MACRO_PDF417_TERMINATOR = 922, p.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, p.MAX_NUMERIC_CODEWORDS = 15, p.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, p.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, p.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, p.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, p.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, p.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, p.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, p.PL = 25, p.LL = 27, p.AS = 27, p.ML = 28, p.AL = 28, p.PS = 29, p.PAL = 29, p.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", p.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", p.EXP900 = Un() ? function Vo() {
      var p = [];
      p[0] = Gr(1);
      var r = Gr(900);
      p[1] = r;
      for (var l = 2; l < 16; l++) p[l] = p[l - 1] * r;
      return p;
    }() : [], p.NUMBER_OF_SEQUENCE_CODEWORDS = 2, p;
  }();
  const za = ta;
  var cs = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Gs = function () {
      function p() {}
      return p.decode = function (r, l, g, S, H, ie, de) {
        for (var Lt, Oe = new _u(r, l, g, S, H), Xe = null, wt = null, cn = !0;; cn = !1) {
          if (null != l && (Xe = p.getRowIndicatorColumn(r, Oe, l, !0, ie, de)), null != S && (wt = p.getRowIndicatorColumn(r, Oe, S, !1, ie, de)), null == (Lt = p.merge(Xe, wt))) throw pt.getNotFoundInstance();
          var xn = Lt.getBoundingBox();
          if (!cn || null == xn || !(xn.getMinY() < Oe.getMinY() || xn.getMaxY() > Oe.getMaxY())) break;
          Oe = xn;
        }
        Lt.setBoundingBox(Oe);
        var Hi = Lt.getBarcodeColumnCount() + 1;
        Lt.setDetectionResultColumn(0, Xe), Lt.setDetectionResultColumn(Hi, wt);
        for (var no = null != Xe, Ho = 1; Ho <= Hi; Ho++) {
          var zo = no ? Ho : Hi - Ho;
          if (void 0 === Lt.getDetectionResultColumn(zo)) {
            var Bo = void 0;
            Bo = 0 === zo || zo === Hi ? new Kn(Oe, 0 === zo) : new Td(Oe), Lt.setDetectionResultColumn(zo, Bo);
            for (var Mr = -1, Ur = Mr, ls = Oe.getMinY(); ls <= Oe.getMaxY(); ls++) {
              if ((Mr = p.getStartColumn(Lt, zo, ls, no)) < 0 || Mr > Oe.getMaxX()) {
                if (-1 === Ur) continue;
                Mr = Ur;
              }
              var Ss = p.detectCodeword(r, Oe.getMinX(), Oe.getMaxX(), no, Mr, ls, ie, de);
              null != Ss && (Bo.setCodeword(ls, Ss), Ur = Mr, ie = Math.min(ie, Ss.getWidth()), de = Math.max(de, Ss.getWidth()));
            }
          }
        }
        return p.createDecoderResult(Lt);
      }, p.merge = function (r, l) {
        if (null == r && null == l) return null;
        var g = p.getBarcodeMetadata(r, l);
        if (null == g) return null;
        var S = _u.merge(p.adjustBoundingBox(r), p.adjustBoundingBox(l));
        return new ea(g, S);
      }, p.adjustBoundingBox = function (r) {
        var l, g;
        if (null == r) return null;
        var S = r.getRowHeights();
        if (null == S) return null;
        var H = p.getMax(S),
          ie = 0;
        try {
          for (var de = cs(S), Oe = de.next(); !Oe.done; Oe = de.next()) {
            var Xe = Oe.value;
            if (ie += H - Xe, Xe > 0) break;
          }
        } catch (xn) {
          l = {
            error: xn
          };
        } finally {
          try {
            Oe && !Oe.done && (g = de.return) && g.call(de);
          } finally {
            if (l) throw l.error;
          }
        }
        for (var wt = r.getCodewords(), Lt = 0; ie > 0 && null == wt[Lt]; Lt++) ie--;
        var cn = 0;
        for (Lt = S.length - 1; Lt >= 0 && (cn += H - S[Lt], !(S[Lt] > 0)); Lt--);
        for (Lt = wt.length - 1; cn > 0 && null == wt[Lt]; Lt--) cn--;
        return r.getBoundingBox().addMissingRows(ie, cn, r.isLeft());
      }, p.getMax = function (r) {
        var l,
          g,
          S = -1;
        try {
          for (var H = cs(r), ie = H.next(); !ie.done; ie = H.next()) S = Math.max(S, ie.value);
        } catch (Oe) {
          l = {
            error: Oe
          };
        } finally {
          try {
            ie && !ie.done && (g = H.return) && g.call(H);
          } finally {
            if (l) throw l.error;
          }
        }
        return S;
      }, p.getBarcodeMetadata = function (r, l) {
        var g, S;
        return null == r || null == (g = r.getBarcodeMetadata()) ? null == l ? null : l.getBarcodeMetadata() : null == l || null == (S = l.getBarcodeMetadata()) ? g : g.getColumnCount() !== S.getColumnCount() && g.getErrorCorrectionLevel() !== S.getErrorCorrectionLevel() && g.getRowCount() !== S.getRowCount() ? null : g;
      }, p.getRowIndicatorColumn = function (r, l, g, S, H, ie) {
        for (var de = new Kn(l, S), Oe = 0; Oe < 2; Oe++) for (var Xe = 0 === Oe ? 1 : -1, wt = Math.trunc(Math.trunc(g.getX())), Lt = Math.trunc(Math.trunc(g.getY())); Lt <= l.getMaxY() && Lt >= l.getMinY(); Lt += Xe) {
          var cn = p.detectCodeword(r, 0, r.getWidth(), S, wt, Lt, H, ie);
          null != cn && (de.setCodeword(Lt, cn), wt = S ? cn.getStartX() : cn.getEndX());
        }
        return de;
      }, p.adjustCodewordCount = function (r, l) {
        var g = l[0][1],
          S = g.getValue(),
          H = r.getBarcodeColumnCount() * r.getBarcodeRowCount() - p.getNumberOfECCodeWords(r.getBarcodeECLevel());
        if (0 === S.length) {
          if (H < 1 || H > Qa.MAX_CODEWORDS_IN_BARCODE) throw pt.getNotFoundInstance();
          g.setValue(H);
        } else S[0] !== H && g.setValue(H);
      }, p.createDecoderResult = function (r) {
        var l = p.createBarcodeMatrix(r);
        p.adjustCodewordCount(r, l);
        for (var g = new Array(), S = new Int32Array(r.getBarcodeRowCount() * r.getBarcodeColumnCount()), H = [], ie = new Array(), de = 0; de < r.getBarcodeRowCount(); de++) for (var Oe = 0; Oe < r.getBarcodeColumnCount(); Oe++) {
          var Xe = l[de][Oe + 1].getValue(),
            wt = de * r.getBarcodeColumnCount() + Oe;
          0 === Xe.length ? g.push(wt) : 1 === Xe.length ? S[wt] = Xe[0] : (ie.push(wt), H.push(Xe));
        }
        for (var Lt = new Array(H.length), cn = 0; cn < Lt.length; cn++) Lt[cn] = H[cn];
        return p.createDecoderResultFromAmbiguousValues(r.getBarcodeECLevel(), S, Qa.toIntArray(g), Qa.toIntArray(ie), Lt);
      }, p.createDecoderResultFromAmbiguousValues = function (r, l, g, S, H) {
        for (var ie = new Int32Array(S.length), de = 100; de-- > 0;) {
          for (var Oe = 0; Oe < ie.length; Oe++) l[S[Oe]] = H[Oe][ie[Oe]];
          try {
            return p.decodeCodewords(l, r, g);
          } catch (wt) {
            if (!(wt instanceof ke)) throw wt;
          }
          if (0 === ie.length) throw ke.getChecksumInstance();
          for (Oe = 0; Oe < ie.length; Oe++) {
            if (ie[Oe] < H[Oe].length - 1) {
              ie[Oe]++;
              break;
            }
            if (ie[Oe] = 0, Oe === ie.length - 1) throw ke.getChecksumInstance();
          }
        }
        throw ke.getChecksumInstance();
      }, p.createBarcodeMatrix = function (r) {
        for (var l, g, S, H, ie = Array.from({
            length: r.getBarcodeRowCount()
          }, function () {
            return new Array(r.getBarcodeColumnCount() + 2);
          }), de = 0; de < ie.length; de++) for (var Oe = 0; Oe < ie[de].length; Oe++) ie[de][Oe] = new Ie();
        var Xe = 0;
        try {
          for (var wt = cs(r.getDetectionResultColumns()), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
            var cn = Lt.value;
            if (null != cn) try {
              for (var xn = (S = void 0, cs(cn.getCodewords())), Hi = xn.next(); !Hi.done; Hi = xn.next()) {
                var no = Hi.value;
                if (null != no) {
                  var Ho = no.getRowNumber();
                  if (Ho >= 0) {
                    if (Ho >= ie.length) continue;
                    ie[Ho][Xe].setValue(no.getValue());
                  }
                }
              }
            } catch (zo) {
              S = {
                error: zo
              };
            } finally {
              try {
                Hi && !Hi.done && (H = xn.return) && H.call(xn);
              } finally {
                if (S) throw S.error;
              }
            }
            Xe++;
          }
        } catch (zo) {
          l = {
            error: zo
          };
        } finally {
          try {
            Lt && !Lt.done && (g = wt.return) && g.call(wt);
          } finally {
            if (l) throw l.error;
          }
        }
        return ie;
      }, p.isValidBarcodeColumn = function (r, l) {
        return l >= 0 && l <= r.getBarcodeColumnCount() + 1;
      }, p.getStartColumn = function (r, l, g, S) {
        var H,
          ie,
          de = S ? 1 : -1,
          Oe = null;
        if (p.isValidBarcodeColumn(r, l - de) && (Oe = r.getDetectionResultColumn(l - de).getCodeword(g)), null != Oe) return S ? Oe.getEndX() : Oe.getStartX();
        if (null != (Oe = r.getDetectionResultColumn(l).getCodewordNearby(g))) return S ? Oe.getStartX() : Oe.getEndX();
        if (p.isValidBarcodeColumn(r, l - de) && (Oe = r.getDetectionResultColumn(l - de).getCodewordNearby(g)), null != Oe) return S ? Oe.getEndX() : Oe.getStartX();
        for (var Xe = 0; p.isValidBarcodeColumn(r, l - de);) {
          l -= de;
          try {
            for (var wt = (H = void 0, cs(r.getDetectionResultColumn(l).getCodewords())), Lt = wt.next(); !Lt.done; Lt = wt.next()) {
              var cn = Lt.value;
              if (null != cn) return (S ? cn.getEndX() : cn.getStartX()) + de * Xe * (cn.getEndX() - cn.getStartX());
            }
          } catch (xn) {
            H = {
              error: xn
            };
          } finally {
            try {
              Lt && !Lt.done && (ie = wt.return) && ie.call(wt);
            } finally {
              if (H) throw H.error;
            }
          }
          Xe++;
        }
        return S ? r.getBoundingBox().getMinX() : r.getBoundingBox().getMaxX();
      }, p.detectCodeword = function (r, l, g, S, H, ie, de, Oe) {
        H = p.adjustCodewordStartColumn(r, l, g, S, H, ie);
        var Xe = p.getModuleBitCount(r, l, g, S, H, ie);
        if (null == Xe) return null;
        var wt,
          Lt = Qo.sum(Xe);
        if (S) wt = H + Lt;else {
          for (var cn = 0; cn < Xe.length / 2; cn++) {
            var xn = Xe[cn];
            Xe[cn] = Xe[Xe.length - 1 - cn], Xe[Xe.length - 1 - cn] = xn;
          }
          H = (wt = H) - Lt;
        }
        if (!p.checkCodewordSkew(Lt, de, Oe)) return null;
        var Hi = Ya.getDecodedValue(Xe),
          no = Qa.getCodeword(Hi);
        return -1 === no ? null : new xl(H, wt, p.getCodewordBucketNumber(Hi), no);
      }, p.getModuleBitCount = function (r, l, g, S, H, ie) {
        for (var de = H, Oe = new Int32Array(8), Xe = 0, wt = S ? 1 : -1, Lt = S; (S ? de < g : de >= l) && Xe < Oe.length;) r.get(de, ie) === Lt ? (Oe[Xe]++, de += wt) : (Xe++, Lt = !Lt);
        return Xe === Oe.length || de === (S ? g : l) && Xe === Oe.length - 1 ? Oe : null;
      }, p.getNumberOfECCodeWords = function (r) {
        return 2 << r;
      }, p.adjustCodewordStartColumn = function (r, l, g, S, H, ie) {
        for (var de = H, Oe = S ? -1 : 1, Xe = 0; Xe < 2; Xe++) {
          for (; (S ? de >= l : de < g) && S === r.get(de, ie);) {
            if (Math.abs(H - de) > p.CODEWORD_SKEW_SIZE) return H;
            de += Oe;
          }
          Oe = -Oe, S = !S;
        }
        return de;
      }, p.checkCodewordSkew = function (r, l, g) {
        return l - p.CODEWORD_SKEW_SIZE <= r && r <= g + p.CODEWORD_SKEW_SIZE;
      }, p.decodeCodewords = function (r, l, g) {
        if (0 === r.length) throw Ft.getFormatInstance();
        var S = 1 << l + 1,
          H = p.correctErrors(r, g, S);
        p.verifyCodewordCount(r, S);
        var ie = za.decode(r, "" + l);
        return ie.setErrorsCorrected(H), ie.setErasures(g.length), ie;
      }, p.correctErrors = function (r, l, g) {
        if (null != l && l.length > g / 2 + p.MAX_ERRORS || g < 0 || g > p.MAX_EC_CODEWORDS) throw ke.getChecksumInstance();
        return p.errorCorrection.decode(r, g, l);
      }, p.verifyCodewordCount = function (r, l) {
        if (r.length < 4) throw Ft.getFormatInstance();
        var g = r[0];
        if (g > r.length) throw Ft.getFormatInstance();
        if (0 === g) {
          if (!(l < r.length)) throw Ft.getFormatInstance();
          r[0] = r.length - l;
        }
      }, p.getBitCountForCodeword = function (r) {
        for (var l = new Int32Array(8), g = 0, S = l.length - 1; !((1 & r) !== g && (g = 1 & r, S--, S < 0));) l[S]++, r >>= 1;
        return l;
      }, p.getCodewordBucketNumber = function (r) {
        return r instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(r) : this.getCodewordBucketNumber_number(r);
      }, p.getCodewordBucketNumber_number = function (r) {
        return p.getCodewordBucketNumber(p.getBitCountForCodeword(r));
      }, p.getCodewordBucketNumber_Int32Array = function (r) {
        return (r[0] - r[2] + r[4] - r[6] + 9) % 9;
      }, p.toString = function (r) {
        for (var l = new Zu(), g = 0; g < r.length; g++) {
          l.format("Row %2d: ", g);
          for (var S = 0; S < r[g].length; S++) {
            var H = r[g][S];
            0 === H.getValue().length ? l.format("        ", null) : l.format("%4d(%2d)", H.getValue()[0], H.getConfidence(H.getValue()[0]));
          }
          l.format("%n");
        }
        return l.toString();
      }, p.CODEWORD_SKEW_SIZE = 2, p.MAX_ERRORS = 3, p.MAX_EC_CODEWORDS = 512, p.errorCorrection = new Qd(), p;
    }();
  const du = Gs;
  var Yu = function () {
    function p() {}
    return p.prototype.decode = function (r, l) {
      void 0 === l && (l = null);
      var g = p.decode(r, l, !1);
      if (null == g || 0 === g.length || null == g[0]) throw pt.getNotFoundInstance();
      return g[0];
    }, p.prototype.decodeMultiple = function (r, l) {
      void 0 === l && (l = null);
      try {
        return p.decode(r, l, !0);
      } catch (g) {
        throw g instanceof Ft || g instanceof ke ? pt.getNotFoundInstance() : g;
      }
    }, p.decode = function (r, l, g) {
      var S,
        H,
        ie = new Array(),
        de = $a.detectMultiple(r, l, g);
      try {
        for (var Oe = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(de.getPoints()), Xe = Oe.next(); !Xe.done; Xe = Oe.next()) {
          var wt = Xe.value,
            Lt = du.decode(de.getBits(), wt[4], wt[5], wt[6], wt[7], p.getMinCodewordWidth(wt), p.getMaxCodewordWidth(wt)),
            cn = new br(Lt.getText(), Lt.getRawBytes(), void 0, wt, qo.PDF_417);
          cn.putMetadata(wr.ERROR_CORRECTION_LEVEL, Lt.getECLevel());
          var xn = Lt.getOther();
          null != xn && cn.putMetadata(wr.PDF417_EXTRA_METADATA, xn), ie.push(cn);
        }
      } catch (Hi) {
        S = {
          error: Hi
        };
      } finally {
        try {
          Xe && !Xe.done && (H = Oe.return) && H.call(Oe);
        } finally {
          if (S) throw S.error;
        }
      }
      return ie.map(function (Hi) {
        return Hi;
      });
    }, p.getMaxWidth = function (r, l) {
      return null == r || null == l ? 0 : Math.trunc(Math.abs(r.getX() - l.getX()));
    }, p.getMinWidth = function (r, l) {
      return null == r || null == l ? We.MAX_VALUE : Math.trunc(Math.abs(r.getX() - l.getX()));
    }, p.getMaxCodewordWidth = function (r) {
      return Math.floor(Math.max(Math.max(p.getMaxWidth(r[0], r[4]), p.getMaxWidth(r[6], r[2]) * Qa.MODULES_IN_CODEWORD / Qa.MODULES_IN_STOP_PATTERN), Math.max(p.getMaxWidth(r[1], r[5]), p.getMaxWidth(r[7], r[3]) * Qa.MODULES_IN_CODEWORD / Qa.MODULES_IN_STOP_PATTERN)));
    }, p.getMinCodewordWidth = function (r) {
      return Math.floor(Math.min(Math.min(p.getMinWidth(r[0], r[4]), p.getMinWidth(r[6], r[2]) * Qa.MODULES_IN_CODEWORD / Qa.MODULES_IN_STOP_PATTERN), Math.min(p.getMinWidth(r[1], r[5]), p.getMinWidth(r[7], r[3]) * Qa.MODULES_IN_CODEWORD / Qa.MODULES_IN_STOP_PATTERN)));
    }, p.prototype.reset = function () {}, p;
  }();
  const Dc = Yu;
  var ou = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    md = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return ou(r, p), r.kind = "ReaderException", r;
    }(h);
  const wh = md;
  var gd = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Rp = function () {
      function p() {}
      return p.prototype.decode = function (r, l) {
        return this.setHints(l), this.decodeInternal(r);
      }, p.prototype.decodeWithState = function (r) {
        return null == this.readers && this.setHints(null), this.decodeInternal(r);
      }, p.prototype.setHints = function (r) {
        this.hints = r;
        var l = null != r && void 0 !== r.get(mt.TRY_HARDER),
          g = null == r ? null : r.get(mt.POSSIBLE_FORMATS),
          S = new Array();
        if (null != g) {
          var H = g.some(function (ie) {
            return ie === qo.UPC_A || ie === qo.UPC_E || ie === qo.EAN_13 || ie === qo.EAN_8 || ie === qo.CODABAR || ie === qo.CODE_39 || ie === qo.CODE_93 || ie === qo.CODE_128 || ie === qo.ITF || ie === qo.RSS_14 || ie === qo.RSS_EXPANDED;
          });
          H && !l && S.push(new Bl(r)), g.includes(qo.QR_CODE) && S.push(new Ca()), g.includes(qo.DATA_MATRIX) && S.push(new sc()), g.includes(qo.AZTEC) && S.push(new ws()), g.includes(qo.PDF_417) && S.push(new Dc()), H && l && S.push(new Bl(r));
        }
        0 === S.length && (l || S.push(new Bl(r)), S.push(new Ca()), S.push(new sc()), S.push(new ws()), S.push(new Dc()), l && S.push(new Bl(r))), this.readers = S;
      }, p.prototype.reset = function () {
        var r, l;
        if (null !== this.readers) try {
          for (var g = gd(this.readers), S = g.next(); !S.done; S = g.next()) S.value.reset();
        } catch (ie) {
          r = {
            error: ie
          };
        } finally {
          try {
            S && !S.done && (l = g.return) && l.call(g);
          } finally {
            if (r) throw r.error;
          }
        }
      }, p.prototype.decodeInternal = function (r) {
        var l, g;
        if (null === this.readers) throw new wh("No readers where selected, nothing can be read.");
        try {
          for (var S = gd(this.readers), H = S.next(); !H.done; H = S.next()) {
            var ie = H.value;
            try {
              return ie.decode(r, this.hints);
            } catch (de) {
              if (de instanceof wh) continue;
            }
          }
        } catch (de) {
          l = {
            error: de
          };
        } finally {
          try {
            H && !H.done && (g = S.return) && g.call(S);
          } finally {
            if (l) throw l.error;
          }
        }
        throw new pt("No MultiFormat Readers were able to detect the code.");
      }, p;
    }();
  const _d = Rp;
  var sf = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Mh = (function (p) {
      function r(l, g) {
        void 0 === l && (l = null), void 0 === g && (g = 500);
        var H = new _d();
        return H.setHints(l), p.call(this, H, g) || this;
      }
      sf(r, p), r.prototype.decodeBitmap = function (l) {
        return this.reader.decodeWithState(l);
      };
    }(Eo), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    qu = (function (p) {
      Mh(function r(l) {
        return void 0 === l && (l = 500), p.call(this, new Dc(), l) || this;
      }, p);
    }(Eo), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    Lc = (function (p) {
      qu(function r(l) {
        return void 0 === l && (l = 500), p.call(this, new Ca(), l) || this;
      }, p);
    }(Eo), (() => (function (p) {
      p[p.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", p[p.CHARACTER_SET = 1] = "CHARACTER_SET", p[p.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", p[p.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT", p[p.MIN_SIZE = 4] = "MIN_SIZE", p[p.MAX_SIZE = 5] = "MAX_SIZE", p[p.MARGIN = 6] = "MARGIN", p[p.PDF417_COMPACT = 7] = "PDF417_COMPACT", p[p.PDF417_COMPACTION = 8] = "PDF417_COMPACTION", p[p.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS", p[p.AZTEC_LAYERS = 10] = "AZTEC_LAYERS", p[p.QR_VERSION = 11] = "QR_VERSION", p[p.GS1_FORMAT = 12] = "GS1_FORMAT", p[p.FORCE_C40 = 13] = "FORCE_C40";
    }(Lc || (Lc = {})), Lc))());
  const il = Lc;
  var vd = function () {
    function p(r) {
      this.field = r, this.cachedGenerators = [], this.cachedGenerators.push(new Go(r, Int32Array.from([1])));
    }
    return p.prototype.buildGenerator = function (r) {
      var l = this.cachedGenerators;
      if (r >= l.length) for (var g = l[l.length - 1], S = this.field, H = l.length; H <= r; H++) {
        var ie = g.multiply(new Go(S, Int32Array.from([1, S.exp(H - 1 + S.getGeneratorBase())])));
        l.push(ie), g = ie;
      }
      return l[r];
    }, p.prototype.encode = function (r, l) {
      if (0 === l) throw new y("No error correction bytes");
      var g = r.length - l;
      if (g <= 0) throw new y("No data bytes provided");
      var S = this.buildGenerator(l),
        H = new Int32Array(g);
      ae.arraycopy(r, 0, H, 0, g);
      for (var ie = new Go(this.field, H), Oe = (ie = ie.multiplyByMonomial(l, 1)).divide(S)[1].getCoefficients(), Xe = l - Oe.length, wt = 0; wt < Xe; wt++) r[g + wt] = 0;
      ae.arraycopy(Oe, 0, r, g + Xe, Oe.length);
    }, p;
  }();
  const ad = vd;
  var qd = function () {
    function p() {}
    return p.applyMaskPenaltyRule1 = function (r) {
      return p.applyMaskPenaltyRule1Internal(r, !0) + p.applyMaskPenaltyRule1Internal(r, !1);
    }, p.applyMaskPenaltyRule2 = function (r) {
      for (var l = 0, g = r.getArray(), S = r.getWidth(), H = r.getHeight(), ie = 0; ie < H - 1; ie++) for (var de = g[ie], Oe = 0; Oe < S - 1; Oe++) {
        var Xe = de[Oe];
        Xe === de[Oe + 1] && Xe === g[ie + 1][Oe] && Xe === g[ie + 1][Oe + 1] && l++;
      }
      return p.N2 * l;
    }, p.applyMaskPenaltyRule3 = function (r) {
      for (var l = 0, g = r.getArray(), S = r.getWidth(), H = r.getHeight(), ie = 0; ie < H; ie++) for (var de = 0; de < S; de++) {
        var Oe = g[ie];
        de + 6 < S && 1 === Oe[de] && 0 === Oe[de + 1] && 1 === Oe[de + 2] && 1 === Oe[de + 3] && 1 === Oe[de + 4] && 0 === Oe[de + 5] && 1 === Oe[de + 6] && (p.isWhiteHorizontal(Oe, de - 4, de) || p.isWhiteHorizontal(Oe, de + 7, de + 11)) && l++, ie + 6 < H && 1 === g[ie][de] && 0 === g[ie + 1][de] && 1 === g[ie + 2][de] && 1 === g[ie + 3][de] && 1 === g[ie + 4][de] && 0 === g[ie + 5][de] && 1 === g[ie + 6][de] && (p.isWhiteVertical(g, de, ie - 4, ie) || p.isWhiteVertical(g, de, ie + 7, ie + 11)) && l++;
      }
      return l * p.N3;
    }, p.isWhiteHorizontal = function (r, l, g) {
      l = Math.max(l, 0), g = Math.min(g, r.length);
      for (var S = l; S < g; S++) if (1 === r[S]) return !1;
      return !0;
    }, p.isWhiteVertical = function (r, l, g, S) {
      g = Math.max(g, 0), S = Math.min(S, r.length);
      for (var H = g; H < S; H++) if (1 === r[H][l]) return !1;
      return !0;
    }, p.applyMaskPenaltyRule4 = function (r) {
      for (var l = 0, g = r.getArray(), S = r.getWidth(), H = r.getHeight(), ie = 0; ie < H; ie++) for (var de = g[ie], Oe = 0; Oe < S; Oe++) 1 === de[Oe] && l++;
      var Xe = r.getHeight() * r.getWidth();
      return Math.floor(10 * Math.abs(2 * l - Xe) / Xe) * p.N4;
    }, p.getDataMaskBit = function (r, l, g) {
      var S, H;
      switch (r) {
        case 0:
          S = g + l & 1;
          break;
        case 1:
          S = 1 & g;
          break;
        case 2:
          S = l % 3;
          break;
        case 3:
          S = (g + l) % 3;
          break;
        case 4:
          S = Math.floor(g / 2) + Math.floor(l / 3) & 1;
          break;
        case 5:
          S = (1 & (H = g * l)) + H % 3;
          break;
        case 6:
          S = (1 & (H = g * l)) + H % 3 & 1;
          break;
        case 7:
          S = (H = g * l) % 3 + (g + l & 1) & 1;
          break;
        default:
          throw new y("Invalid mask pattern: " + r);
      }
      return 0 === S;
    }, p.applyMaskPenaltyRule1Internal = function (r, l) {
      for (var g = 0, S = l ? r.getHeight() : r.getWidth(), H = l ? r.getWidth() : r.getHeight(), ie = r.getArray(), de = 0; de < S; de++) {
        for (var Oe = 0, Xe = -1, wt = 0; wt < H; wt++) {
          var Lt = l ? ie[de][wt] : ie[wt][de];
          Lt === Xe ? Oe++ : (Oe >= 5 && (g += p.N1 + (Oe - 5)), Oe = 1, Xe = Lt);
        }
        Oe >= 5 && (g += p.N1 + (Oe - 5));
      }
      return g;
    }, p.N1 = 3, p.N2 = 3, p.N3 = 40, p.N4 = 10, p;
  }();
  const ld = qd;
  var Pu = function () {
    function p(r, l) {
      this.width = r, this.height = l;
      for (var g = new Array(l), S = 0; S !== l; S++) g[S] = new Uint8Array(r);
      this.bytes = g;
    }
    return p.prototype.getHeight = function () {
      return this.height;
    }, p.prototype.getWidth = function () {
      return this.width;
    }, p.prototype.get = function (r, l) {
      return this.bytes[l][r];
    }, p.prototype.getArray = function () {
      return this.bytes;
    }, p.prototype.setNumber = function (r, l, g) {
      this.bytes[l][r] = g;
    }, p.prototype.setBoolean = function (r, l, g) {
      this.bytes[l][r] = g ? 1 : 0;
    }, p.prototype.clear = function (r) {
      var l, g;
      try {
        for (var S = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(this.bytes), H = S.next(); !H.done; H = S.next()) qe.fill(H.value, r);
      } catch (de) {
        l = {
          error: de
        };
      } finally {
        try {
          H && !H.done && (g = S.return) && g.call(S);
        } finally {
          if (l) throw l.error;
        }
      }
    }, p.prototype.equals = function (r) {
      if (!(r instanceof p)) return !1;
      var l = r;
      if (this.width !== l.width || this.height !== l.height) return !1;
      for (var g = 0, S = this.height; g < S; ++g) for (var H = this.bytes[g], ie = l.bytes[g], de = 0, Oe = this.width; de < Oe; ++de) if (H[de] !== ie[de]) return !1;
      return !0;
    }, p.prototype.toString = function () {
      for (var r = new Ii(), l = 0, g = this.height; l < g; ++l) {
        for (var S = this.bytes[l], H = 0, ie = this.width; H < ie; ++H) switch (S[H]) {
          case 0:
            r.append(" 0");
            break;
          case 1:
            r.append(" 1");
            break;
          default:
            r.append("  ");
        }
        r.append("\n");
      }
      return r.toString();
    }, p;
  }();
  const Ha = Pu;
  var vu = function () {
    function p() {
      this.maskPattern = -1;
    }
    return p.prototype.getMode = function () {
      return this.mode;
    }, p.prototype.getECLevel = function () {
      return this.ecLevel;
    }, p.prototype.getVersion = function () {
      return this.version;
    }, p.prototype.getMaskPattern = function () {
      return this.maskPattern;
    }, p.prototype.getMatrix = function () {
      return this.matrix;
    }, p.prototype.toString = function () {
      var r = new Ii();
      return r.append("<<\n"), r.append(" mode: "), r.append(this.mode ? this.mode.toString() : "null"), r.append("\n ecLevel: "), r.append(this.ecLevel ? this.ecLevel.toString() : "null"), r.append("\n version: "), r.append(this.version ? this.version.toString() : "null"), r.append("\n maskPattern: "), r.append(this.maskPattern.toString()), this.matrix ? (r.append("\n matrix:\n"), r.append(this.matrix.toString())) : r.append("\n matrix: null\n"), r.append(">>\n"), r.toString();
    }, p.prototype.setMode = function (r) {
      this.mode = r;
    }, p.prototype.setECLevel = function (r) {
      this.ecLevel = r;
    }, p.prototype.setVersion = function (r) {
      this.version = r;
    }, p.prototype.setMaskPattern = function (r) {
      this.maskPattern = r;
    }, p.prototype.setMatrix = function (r) {
      this.matrix = r;
    }, p.isValidMaskPattern = function (r) {
      return r >= 0 && r < p.NUM_MASK_PATTERNS;
    }, p.NUM_MASK_PATTERNS = 8, p;
  }();
  const Zd = vu;
  var Fp = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    vp = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Fp(r, p), r.kind = "WriterException", r;
    }(h);
  const Cc = vp;
  var ep = function () {
    function p() {}
    return p.clearMatrix = function (r) {
      r.clear(255);
    }, p.buildMatrix = function (r, l, g, S, H) {
      p.clearMatrix(H), p.embedBasicPatterns(g, H), p.embedTypeInfo(l, S, H), p.maybeEmbedVersionInfo(g, H), p.embedDataBits(r, S, H);
    }, p.embedBasicPatterns = function (r, l) {
      p.embedPositionDetectionPatternsAndSeparators(l), p.embedDarkDotAtLeftBottomCorner(l), p.maybeEmbedPositionAdjustmentPatterns(r, l), p.embedTimingPatterns(l);
    }, p.embedTypeInfo = function (r, l, g) {
      var S = new st();
      p.makeTypeInfoBits(r, l, S);
      for (var H = 0, ie = S.getSize(); H < ie; ++H) {
        var de = S.get(S.getSize() - 1 - H),
          Oe = p.TYPE_INFO_COORDINATES[H];
        if (g.setBoolean(Oe[0], Oe[1], de), H < 8) {
          var Lt = g.getWidth() - H - 1;
          g.setBoolean(Lt, cn = 8, de);
        } else {
          Lt = 8;
          var cn = g.getHeight() - 7 + (H - 8);
          g.setBoolean(Lt, cn, de);
        }
      }
    }, p.maybeEmbedVersionInfo = function (r, l) {
      if (!(r.getVersionNumber() < 7)) {
        var g = new st();
        p.makeVersionInfoBits(r, g);
        for (var S = 17, H = 0; H < 6; ++H) for (var ie = 0; ie < 3; ++ie) {
          var de = g.get(S);
          S--, l.setBoolean(H, l.getHeight() - 11 + ie, de), l.setBoolean(l.getHeight() - 11 + ie, H, de);
        }
      }
    }, p.embedDataBits = function (r, l, g) {
      for (var S = 0, H = -1, ie = g.getWidth() - 1, de = g.getHeight() - 1; ie > 0;) {
        for (6 === ie && (ie -= 1); de >= 0 && de < g.getHeight();) {
          for (var Oe = 0; Oe < 2; ++Oe) {
            var Xe = ie - Oe;
            if (p.isEmpty(g.get(Xe, de))) {
              var wt = void 0;
              S < r.getSize() ? (wt = r.get(S), ++S) : wt = !1, 255 !== l && ld.getDataMaskBit(l, Xe, de) && (wt = !wt), g.setBoolean(Xe, de, wt);
            }
          }
          de += H;
        }
        de += H = -H, ie -= 2;
      }
      if (S !== r.getSize()) throw new Cc("Not all bits consumed: " + S + "/" + r.getSize());
    }, p.findMSBSet = function (r) {
      return 32 - We.numberOfLeadingZeros(r);
    }, p.calculateBCHCode = function (r, l) {
      if (0 === l) throw new y("0 polynomial");
      var g = p.findMSBSet(l);
      for (r <<= g - 1; p.findMSBSet(r) >= g;) r ^= l << p.findMSBSet(r) - g;
      return r;
    }, p.makeTypeInfoBits = function (r, l, g) {
      if (!Zd.isValidMaskPattern(l)) throw new Cc("Invalid mask pattern");
      var S = r.getBits() << 3 | l;
      g.appendBits(S, 5);
      var H = p.calculateBCHCode(S, p.TYPE_INFO_POLY);
      g.appendBits(H, 10);
      var ie = new st();
      if (ie.appendBits(p.TYPE_INFO_MASK_PATTERN, 15), g.xor(ie), 15 !== g.getSize()) throw new Cc("should not happen but we got: " + g.getSize());
    }, p.makeVersionInfoBits = function (r, l) {
      l.appendBits(r.getVersionNumber(), 6);
      var g = p.calculateBCHCode(r.getVersionNumber(), p.VERSION_INFO_POLY);
      if (l.appendBits(g, 12), 18 !== l.getSize()) throw new Cc("should not happen but we got: " + l.getSize());
    }, p.isEmpty = function (r) {
      return 255 === r;
    }, p.embedTimingPatterns = function (r) {
      for (var l = 8; l < r.getWidth() - 8; ++l) {
        var g = (l + 1) % 2;
        p.isEmpty(r.get(l, 6)) && r.setNumber(l, 6, g), p.isEmpty(r.get(6, l)) && r.setNumber(6, l, g);
      }
    }, p.embedDarkDotAtLeftBottomCorner = function (r) {
      if (0 === r.get(8, r.getHeight() - 8)) throw new Cc();
      r.setNumber(8, r.getHeight() - 8, 1);
    }, p.embedHorizontalSeparationPattern = function (r, l, g) {
      for (var S = 0; S < 8; ++S) {
        if (!p.isEmpty(g.get(r + S, l))) throw new Cc();
        g.setNumber(r + S, l, 0);
      }
    }, p.embedVerticalSeparationPattern = function (r, l, g) {
      for (var S = 0; S < 7; ++S) {
        if (!p.isEmpty(g.get(r, l + S))) throw new Cc();
        g.setNumber(r, l + S, 0);
      }
    }, p.embedPositionAdjustmentPattern = function (r, l, g) {
      for (var S = 0; S < 5; ++S) for (var H = p.POSITION_ADJUSTMENT_PATTERN[S], ie = 0; ie < 5; ++ie) g.setNumber(r + ie, l + S, H[ie]);
    }, p.embedPositionDetectionPattern = function (r, l, g) {
      for (var S = 0; S < 7; ++S) for (var H = p.POSITION_DETECTION_PATTERN[S], ie = 0; ie < 7; ++ie) g.setNumber(r + ie, l + S, H[ie]);
    }, p.embedPositionDetectionPatternsAndSeparators = function (r) {
      var l = p.POSITION_DETECTION_PATTERN[0].length;
      p.embedPositionDetectionPattern(0, 0, r), p.embedPositionDetectionPattern(r.getWidth() - l, 0, r), p.embedPositionDetectionPattern(0, r.getWidth() - l, r), p.embedHorizontalSeparationPattern(0, 7, r), p.embedHorizontalSeparationPattern(r.getWidth() - 8, 7, r), p.embedHorizontalSeparationPattern(0, r.getWidth() - 8, r), p.embedVerticalSeparationPattern(7, 0, r), p.embedVerticalSeparationPattern(r.getHeight() - 7 - 1, 0, r), p.embedVerticalSeparationPattern(7, r.getHeight() - 7, r);
    }, p.maybeEmbedPositionAdjustmentPatterns = function (r, l) {
      if (!(r.getVersionNumber() < 2)) for (var g = r.getVersionNumber() - 1, S = p.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[g], H = 0, ie = S.length; H !== ie; H++) {
        var de = S[H];
        if (de >= 0) for (var Oe = 0; Oe !== ie; Oe++) {
          var Xe = S[Oe];
          Xe >= 0 && p.isEmpty(l.get(Xe, de)) && p.embedPositionAdjustmentPattern(Xe - 2, de - 2, l);
        }
      }
    }, p.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), p.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), p.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), p.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), p.VERSION_INFO_POLY = 7973, p.TYPE_INFO_POLY = 1335, p.TYPE_INFO_MASK_PATTERN = 21522, p;
  }();
  const Np = ep;
  var Cd = function () {
    function p(r, l) {
      this.dataBytes = r, this.errorCorrectionBytes = l;
    }
    return p.prototype.getDataBytes = function () {
      return this.dataBytes;
    }, p.prototype.getErrorCorrectionBytes = function () {
      return this.errorCorrectionBytes;
    }, p;
  }();
  const yd = Cd;
  var Yd = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    lf = function () {
      function p() {}
      return p.calculateMaskPenalty = function (r) {
        return ld.applyMaskPenaltyRule1(r) + ld.applyMaskPenaltyRule2(r) + ld.applyMaskPenaltyRule3(r) + ld.applyMaskPenaltyRule4(r);
      }, p.encode = function (r, l, g) {
        void 0 === g && (g = null);
        var S = p.DEFAULT_BYTE_MODE_ENCODING,
          H = null !== g && void 0 !== g.get(il.CHARACTER_SET);
        H && (S = g.get(il.CHARACTER_SET).toString());
        var ie = this.chooseMode(r, S),
          de = new st();
        if (ie === Ne.BYTE && (H || p.DEFAULT_BYTE_MODE_ENCODING !== S)) {
          var Oe = Ke.getCharacterSetECIByName(S);
          void 0 !== Oe && this.appendECI(Oe, de);
        }
        this.appendModeInfo(ie, de);
        var wt,
          Xe = new st();
        if (this.appendBytes(r, ie, Xe, S), null !== g && void 0 !== g.get(il.QR_VERSION)) {
          var Lt = Number.parseInt(g.get(il.QR_VERSION).toString(), 10);
          wt = Zr.getVersionForNumber(Lt);
          var cn = this.calculateBitsNeeded(ie, de, Xe, wt);
          if (!this.willFit(cn, wt, l)) throw new Cc("Data too big for requested version");
        } else wt = this.recommendVersion(l, ie, de, Xe);
        var xn = new st();
        xn.appendBitArray(de);
        var Hi = ie === Ne.BYTE ? Xe.getSizeInBytes() : r.length;
        this.appendLengthInfo(Hi, wt, ie, xn), xn.appendBitArray(Xe);
        var no = wt.getECBlocksForLevel(l),
          Ho = wt.getTotalCodewords() - no.getTotalECCodewords();
        this.terminateBits(Ho, xn);
        var zo = this.interleaveWithECBytes(xn, wt.getTotalCodewords(), Ho, no.getNumBlocks()),
          Bo = new Zd();
        Bo.setECLevel(l), Bo.setMode(ie), Bo.setVersion(wt);
        var Mr = wt.getDimensionForVersion(),
          Ur = new Ha(Mr, Mr),
          ls = this.chooseMaskPattern(zo, l, wt, Ur);
        return Bo.setMaskPattern(ls), Np.buildMatrix(zo, l, wt, ls, Ur), Bo.setMatrix(Ur), Bo;
      }, p.recommendVersion = function (r, l, g, S) {
        var H = this.calculateBitsNeeded(l, g, S, Zr.getVersionForNumber(1)),
          ie = this.chooseVersion(H, r),
          de = this.calculateBitsNeeded(l, g, S, ie);
        return this.chooseVersion(de, r);
      }, p.calculateBitsNeeded = function (r, l, g, S) {
        return l.getSize() + r.getCharacterCountBits(S) + g.getSize();
      }, p.getAlphanumericCode = function (r) {
        return r < p.ALPHANUMERIC_TABLE.length ? p.ALPHANUMERIC_TABLE[r] : -1;
      }, p.chooseMode = function (r, l) {
        if (void 0 === l && (l = null), Ke.SJIS.getName() === l && this.isOnlyDoubleByteKanji(r)) return Ne.KANJI;
        for (var g = !1, S = !1, H = 0, ie = r.length; H < ie; ++H) {
          var de = r.charAt(H);
          if (p.isDigit(de)) g = !0;else {
            if (-1 === this.getAlphanumericCode(de.charCodeAt(0))) return Ne.BYTE;
            S = !0;
          }
        }
        return S ? Ne.ALPHANUMERIC : g ? Ne.NUMERIC : Ne.BYTE;
      }, p.isOnlyDoubleByteKanji = function (r) {
        var l;
        try {
          l = Je.encode(r, Ke.SJIS);
        } catch {
          return !1;
        }
        var g = l.length;
        if (g % 2 != 0) return !1;
        for (var S = 0; S < g; S += 2) {
          var H = 255 & l[S];
          if ((H < 129 || H > 159) && (H < 224 || H > 235)) return !1;
        }
        return !0;
      }, p.chooseMaskPattern = function (r, l, g, S) {
        for (var H = Number.MAX_SAFE_INTEGER, ie = -1, de = 0; de < Zd.NUM_MASK_PATTERNS; de++) {
          Np.buildMatrix(r, l, g, de, S);
          var Oe = this.calculateMaskPenalty(S);
          Oe < H && (H = Oe, ie = de);
        }
        return ie;
      }, p.chooseVersion = function (r, l) {
        for (var g = 1; g <= 40; g++) {
          var S = Zr.getVersionForNumber(g);
          if (p.willFit(r, S, l)) return S;
        }
        throw new Cc("Data too big");
      }, p.willFit = function (r, l, g) {
        return l.getTotalCodewords() - l.getECBlocksForLevel(g).getTotalECCodewords() >= (r + 7) / 8;
      }, p.terminateBits = function (r, l) {
        var g = 8 * r;
        if (l.getSize() > g) throw new Cc("data bits cannot fit in the QR Code" + l.getSize() + " > " + g);
        for (var S = 0; S < 4 && l.getSize() < g; ++S) l.appendBit(!1);
        var H = 7 & l.getSize();
        if (H > 0) for (S = H; S < 8; S++) l.appendBit(!1);
        var ie = r - l.getSizeInBytes();
        for (S = 0; S < ie; ++S) l.appendBits(1 & S ? 17 : 236, 8);
        if (l.getSize() !== g) throw new Cc("Bits size does not equal capacity");
      }, p.getNumDataBytesAndNumECBytesForBlockID = function (r, l, g, S, H, ie) {
        if (S >= g) throw new Cc("Block ID too large");
        var de = r % g,
          Oe = g - de,
          Xe = Math.floor(r / g),
          wt = Xe + 1,
          Lt = Math.floor(l / g),
          cn = Lt + 1,
          xn = Xe - Lt,
          Hi = wt - cn;
        if (xn !== Hi) throw new Cc("EC bytes mismatch");
        if (g !== Oe + de) throw new Cc("RS blocks mismatch");
        if (r !== (Lt + xn) * Oe + (cn + Hi) * de) throw new Cc("Total bytes mismatch");
        S < Oe ? (H[0] = Lt, ie[0] = xn) : (H[0] = cn, ie[0] = Hi);
      }, p.interleaveWithECBytes = function (r, l, g, S) {
        var H, ie, de, Oe;
        if (r.getSizeInBytes() !== g) throw new Cc("Number of bits and data bytes does not match");
        for (var Xe = 0, wt = 0, Lt = 0, cn = new Array(), xn = 0; xn < S; ++xn) {
          var Hi = new Int32Array(1),
            no = new Int32Array(1);
          p.getNumDataBytesAndNumECBytesForBlockID(l, g, S, xn, Hi, no);
          var Ho = Hi[0],
            zo = new Uint8Array(Ho);
          r.toBytes(8 * Xe, zo, 0, Ho);
          var Bo = p.generateECBytes(zo, no[0]);
          cn.push(new yd(zo, Bo)), wt = Math.max(wt, Ho), Lt = Math.max(Lt, Bo.length), Xe += Hi[0];
        }
        if (g !== Xe) throw new Cc("Data bytes does not match offset");
        var Mr = new st();
        for (xn = 0; xn < wt; ++xn) try {
          for (var Ur = (H = void 0, Yd(cn)), ls = Ur.next(); !ls.done; ls = Ur.next()) xn < (zo = ls.value.getDataBytes()).length && Mr.appendBits(zo[xn], 8);
        } catch (el) {
          H = {
            error: el
          };
        } finally {
          try {
            ls && !ls.done && (ie = Ur.return) && ie.call(Ur);
          } finally {
            if (H) throw H.error;
          }
        }
        for (xn = 0; xn < Lt; ++xn) try {
          for (var Is = (de = void 0, Yd(cn)), Ys = Is.next(); !Ys.done; Ys = Is.next()) xn < (Bo = Ys.value.getErrorCorrectionBytes()).length && Mr.appendBits(Bo[xn], 8);
        } catch (el) {
          de = {
            error: el
          };
        } finally {
          try {
            Ys && !Ys.done && (Oe = Is.return) && Oe.call(Is);
          } finally {
            if (de) throw de.error;
          }
        }
        if (l !== Mr.getSizeInBytes()) throw new Cc("Interleaving error: " + l + " and " + Mr.getSizeInBytes() + " differ.");
        return Mr;
      }, p.generateECBytes = function (r, l) {
        for (var g = r.length, S = new Int32Array(g + l), H = 0; H < g; H++) S[H] = 255 & r[H];
        new ad(ki.QR_CODE_FIELD_256).encode(S, l);
        var ie = new Uint8Array(l);
        for (H = 0; H < l; H++) ie[H] = S[g + H];
        return ie;
      }, p.appendModeInfo = function (r, l) {
        l.appendBits(r.getBits(), 4);
      }, p.appendLengthInfo = function (r, l, g, S) {
        var H = g.getCharacterCountBits(l);
        if (r >= 1 << H) throw new Cc(r + " is bigger than " + ((1 << H) - 1));
        S.appendBits(r, H);
      }, p.appendBytes = function (r, l, g, S) {
        switch (l) {
          case Ne.NUMERIC:
            p.appendNumericBytes(r, g);
            break;
          case Ne.ALPHANUMERIC:
            p.appendAlphanumericBytes(r, g);
            break;
          case Ne.BYTE:
            p.append8BitBytes(r, g, S);
            break;
          case Ne.KANJI:
            p.appendKanjiBytes(r, g);
            break;
          default:
            throw new Cc("Invalid mode: " + l);
        }
      }, p.getDigit = function (r) {
        return r.charCodeAt(0) - 48;
      }, p.isDigit = function (r) {
        var l = p.getDigit(r);
        return l >= 0 && l <= 9;
      }, p.appendNumericBytes = function (r, l) {
        for (var g = r.length, S = 0; S < g;) {
          var H = p.getDigit(r.charAt(S));
          if (S + 2 < g) {
            var ie = p.getDigit(r.charAt(S + 1)),
              de = p.getDigit(r.charAt(S + 2));
            l.appendBits(100 * H + 10 * ie + de, 10), S += 3;
          } else S + 1 < g ? (ie = p.getDigit(r.charAt(S + 1)), l.appendBits(10 * H + ie, 7), S += 2) : (l.appendBits(H, 4), S++);
        }
      }, p.appendAlphanumericBytes = function (r, l) {
        for (var g = r.length, S = 0; S < g;) {
          var H = p.getAlphanumericCode(r.charCodeAt(S));
          if (-1 === H) throw new Cc();
          if (S + 1 < g) {
            var ie = p.getAlphanumericCode(r.charCodeAt(S + 1));
            if (-1 === ie) throw new Cc();
            l.appendBits(45 * H + ie, 11), S += 2;
          } else l.appendBits(H, 6), S++;
        }
      }, p.append8BitBytes = function (r, l, g) {
        var S;
        try {
          S = Je.encode(r, g);
        } catch (Oe) {
          throw new Cc(Oe);
        }
        for (var H = 0, ie = S.length; H !== ie; H++) l.appendBits(S[H], 8);
      }, p.appendKanjiBytes = function (r, l) {
        var g;
        try {
          g = Je.encode(r, Ke.SJIS);
        } catch (Lt) {
          throw new Cc(Lt);
        }
        for (var S = g.length, H = 0; H < S; H += 2) {
          var Oe = (255 & g[H]) << 8 & 4294967295 | 255 & g[H + 1],
            Xe = -1;
          if (Oe >= 33088 && Oe <= 40956 ? Xe = Oe - 33088 : Oe >= 57408 && Oe <= 60351 && (Xe = Oe - 49472), -1 === Xe) throw new Cc("Invalid byte sequence");
          l.appendBits(192 * (Xe >> 8) + (255 & Xe), 13);
        }
      }, p.appendECI = function (r, l) {
        l.appendBits(Ne.ECI.getBits(), 4), l.appendBits(r.getValue(), 8);
      }, p.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), p.DEFAULT_BYTE_MODE_ENCODING = Ke.UTF8.getName(), p;
    }();
  const Up = lf;
  !function () {
    function p() {}
    p.prototype.write = function (r, l, g, S) {
      if (void 0 === S && (S = null), 0 === r.length) throw new y("Found empty contents");
      if (l < 0 || g < 0) throw new y("Requested dimensions are too small: " + l + "x" + g);
      var H = Pa.L,
        ie = p.QUIET_ZONE_SIZE;
      null !== S && (void 0 !== S.get(il.ERROR_CORRECTION) && (H = Pa.fromString(S.get(il.ERROR_CORRECTION).toString())), void 0 !== S.get(il.MARGIN) && (ie = Number.parseInt(S.get(il.MARGIN).toString(), 10)));
      var de = Up.encode(r, H, S);
      return this.renderResult(de, l, g, ie);
    }, p.prototype.writeToDom = function (r, l, g, S, H) {
      void 0 === H && (H = null), "string" == typeof r && (r = document.querySelector(r));
      var ie = this.write(l, g, S, H);
      r && r.appendChild(ie);
    }, p.prototype.renderResult = function (r, l, g, S) {
      var H = r.getMatrix();
      if (null === H) throw new Sr();
      for (var ie = H.getWidth(), de = H.getHeight(), Oe = ie + 2 * S, Xe = de + 2 * S, wt = Math.max(l, Oe), Lt = Math.max(g, Xe), cn = Math.min(Math.floor(wt / Oe), Math.floor(Lt / Xe)), xn = Math.floor((wt - ie * cn) / 2), Hi = Math.floor((Lt - de * cn) / 2), no = this.createSVGElement(wt, Lt), Ho = 0, zo = Hi; Ho < de; Ho++, zo += cn) for (var Bo = 0, Mr = xn; Bo < ie; Bo++, Mr += cn) if (1 === H.get(Bo, Ho)) {
        var Ur = this.createSvgRectElement(Mr, zo, cn, cn);
        no.appendChild(Ur);
      }
      return no;
    }, p.prototype.createSVGElement = function (r, l) {
      var g = document.createElementNS(p.SVG_NS, "svg");
      return g.setAttributeNS(null, "height", r.toString()), g.setAttributeNS(null, "width", l.toString()), g;
    }, p.prototype.createSvgRectElement = function (r, l, g, S) {
      var H = document.createElementNS(p.SVG_NS, "rect");
      return H.setAttributeNS(null, "x", r.toString()), H.setAttributeNS(null, "y", l.toString()), H.setAttributeNS(null, "height", g.toString()), H.setAttributeNS(null, "width", S.toString()), H.setAttributeNS(null, "fill", "#000000"), H;
    }, p.QUIET_ZONE_SIZE = 4, p.SVG_NS = "http://www.w3.org/2000/svg";
  }();
  !function () {
    function p() {}
    p.prototype.encode = function (r, l, g, S, H) {
      if (0 === r.length) throw new y("Found empty contents");
      if (l !== qo.QR_CODE) throw new y("Can only encode QR_CODE, but got " + l);
      if (g < 0 || S < 0) throw new y("Requested dimensions are too small: " + g + "x" + S);
      var ie = Pa.L,
        de = p.QUIET_ZONE_SIZE;
      null !== H && (void 0 !== H.get(il.ERROR_CORRECTION) && (ie = Pa.fromString(H.get(il.ERROR_CORRECTION).toString())), void 0 !== H.get(il.MARGIN) && (de = Number.parseInt(H.get(il.MARGIN).toString(), 10)));
      var Oe = Up.encode(r, ie, H);
      return p.renderResult(Oe, g, S, de);
    }, p.renderResult = function (r, l, g, S) {
      var H = r.getMatrix();
      if (null === H) throw new Sr();
      for (var ie = H.getWidth(), de = H.getHeight(), Oe = ie + 2 * S, Xe = de + 2 * S, wt = Math.max(l, Oe), Lt = Math.max(g, Xe), cn = Math.min(Math.floor(wt / Oe), Math.floor(Lt / Xe)), xn = Math.floor((wt - ie * cn) / 2), Hi = Math.floor((Lt - de * cn) / 2), no = new co(wt, Lt), Ho = 0, zo = Hi; Ho < de; Ho++, zo += cn) for (var Bo = 0, Mr = xn; Bo < ie; Bo++, Mr += cn) 1 === H.get(Bo, Ho) && no.setRegion(Mr, zo, cn, cn);
      return no;
    }, p.QUIET_ZONE_SIZE = 4;
  }();
  var zd = function () {
    var p = function (r, l) {
      return (p = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (g, S) {
        g.__proto__ = S;
      } || function (g, S) {
        for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
      })(r, l);
    };
    return function (r, l) {
      function g() {
        this.constructor = r;
      }
      p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
    };
  }();
  !function (p) {
    function r(l, g, S, H, ie, de, Oe, Xe) {
      var wt = p.call(this, de, Oe) || this;
      if (wt.yuvData = l, wt.dataWidth = g, wt.dataHeight = S, wt.left = H, wt.top = ie, H + de > g || ie + Oe > S) throw new y("Crop rectangle does not fit within image data.");
      return Xe && wt.reverseHorizontal(de, Oe), wt;
    }
    zd(r, p), r.prototype.getRow = function (l, g) {
      if (l < 0 || l >= this.getHeight()) throw new y("Requested row is outside the image: " + l);
      var S = this.getWidth();
      return (null == g || g.length < S) && (g = new Uint8ClampedArray(S)), ae.arraycopy(this.yuvData, (l + this.top) * this.dataWidth + this.left, g, 0, S), g;
    }, r.prototype.getMatrix = function () {
      var l = this.getWidth(),
        g = this.getHeight();
      if (l === this.dataWidth && g === this.dataHeight) return this.yuvData;
      var S = l * g,
        H = new Uint8ClampedArray(S),
        ie = this.top * this.dataWidth + this.left;
      if (l === this.dataWidth) return ae.arraycopy(this.yuvData, ie, H, 0, S), H;
      for (var de = 0; de < g; de++) ae.arraycopy(this.yuvData, ie, H, de * l, l), ie += this.dataWidth;
      return H;
    }, r.prototype.isCropSupported = function () {
      return !0;
    }, r.prototype.crop = function (l, g, S, H) {
      return new r(this.yuvData, this.dataWidth, this.dataHeight, this.left + l, this.top + g, S, H, !1);
    }, r.prototype.renderThumbnail = function () {
      for (var l = this.getWidth() / r.THUMBNAIL_SCALE_FACTOR, g = this.getHeight() / r.THUMBNAIL_SCALE_FACTOR, S = new Int32Array(l * g), H = this.yuvData, ie = this.top * this.dataWidth + this.left, de = 0; de < g; de++) {
        for (var Oe = de * l, Xe = 0; Xe < l; Xe++) S[Oe + Xe] = 4278190080 | 65793 * (255 & H[ie + Xe * r.THUMBNAIL_SCALE_FACTOR]);
        ie += this.dataWidth * r.THUMBNAIL_SCALE_FACTOR;
      }
      return S;
    }, r.prototype.getThumbnailWidth = function () {
      return this.getWidth() / r.THUMBNAIL_SCALE_FACTOR;
    }, r.prototype.getThumbnailHeight = function () {
      return this.getHeight() / r.THUMBNAIL_SCALE_FACTOR;
    }, r.prototype.reverseHorizontal = function (l, g) {
      for (var S = this.yuvData, H = 0, ie = this.top * this.dataWidth + this.left; H < g; H++, ie += this.dataWidth) for (var de = ie + l / 2, Oe = ie, Xe = ie + l - 1; Oe < de; Oe++, Xe--) {
        var wt = S[Oe];
        S[Oe] = S[Xe], S[Xe] = wt;
      }
    }, r.prototype.invert = function () {
      return new In(this);
    }, r.THUMBNAIL_SCALE_FACTOR = 2;
  }($t);
  var Cp = function () {
    var p = function (r, l) {
      return (p = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (g, S) {
        g.__proto__ = S;
      } || function (g, S) {
        for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
      })(r, l);
    };
    return function (r, l) {
      function g() {
        this.constructor = r;
      }
      p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
    };
  }();
  !function (p) {
    function r(l, g, S, H, ie, de, Oe) {
      var Xe = p.call(this, g, S) || this;
      if (Xe.dataWidth = H, Xe.dataHeight = ie, Xe.left = de, Xe.top = Oe, 4 === l.BYTES_PER_ELEMENT) {
        for (var wt = g * S, Lt = new Uint8ClampedArray(wt), cn = 0; cn < wt; cn++) {
          var xn = l[cn];
          Lt[cn] = ((xn >> 16 & 255) + (xn >> 7 & 510) + (255 & xn)) / 4 & 255;
        }
        Xe.luminances = Lt;
      } else Xe.luminances = l;
      if (void 0 === H && (Xe.dataWidth = g), void 0 === ie && (Xe.dataHeight = S), void 0 === de && (Xe.left = 0), void 0 === Oe && (Xe.top = 0), Xe.left + g > Xe.dataWidth || Xe.top + S > Xe.dataHeight) throw new y("Crop rectangle does not fit within image data.");
      return Xe;
    }
    Cp(r, p), r.prototype.getRow = function (l, g) {
      if (l < 0 || l >= this.getHeight()) throw new y("Requested row is outside the image: " + l);
      var S = this.getWidth();
      return (null == g || g.length < S) && (g = new Uint8ClampedArray(S)), ae.arraycopy(this.luminances, (l + this.top) * this.dataWidth + this.left, g, 0, S), g;
    }, r.prototype.getMatrix = function () {
      var l = this.getWidth(),
        g = this.getHeight();
      if (l === this.dataWidth && g === this.dataHeight) return this.luminances;
      var S = l * g,
        H = new Uint8ClampedArray(S),
        ie = this.top * this.dataWidth + this.left;
      if (l === this.dataWidth) return ae.arraycopy(this.luminances, ie, H, 0, S), H;
      for (var de = 0; de < g; de++) ae.arraycopy(this.luminances, ie, H, de * l, l), ie += this.dataWidth;
      return H;
    }, r.prototype.isCropSupported = function () {
      return !0;
    }, r.prototype.crop = function (l, g, S, H) {
      return new r(this.luminances, S, H, this.dataWidth, this.dataHeight, this.left + l, this.top + g);
    }, r.prototype.invert = function () {
      return new In(this);
    };
  }($t);
  var cf = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    np = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return cf(r, p), r.forName = function (l) {
        return this.getCharacterSetECIByName(l);
      }, r;
    }(Ke);
  const Sl = np;
  var uf = function () {
    function p() {}
    return p.ISO_8859_1 = Ke.ISO8859_1, p;
  }();
  const Hp = uf;
  var Zf = function () {
    function p(r, l, g) {
      this.codewords = r, this.numcols = l, this.numrows = g, this.bits = new Uint8Array(l * g), qe.fill(this.bits, 2);
    }
    return p.prototype.getNumrows = function () {
      return this.numrows;
    }, p.prototype.getNumcols = function () {
      return this.numcols;
    }, p.prototype.getBits = function () {
      return this.bits;
    }, p.prototype.getBit = function (r, l) {
      return 1 === this.bits[l * this.numcols + r];
    }, p.prototype.setBit = function (r, l, g) {
      this.bits[l * this.numcols + r] = g ? 1 : 0;
    }, p.prototype.noBit = function (r, l) {
      return 2 === this.bits[l * this.numcols + r];
    }, p.prototype.place = function () {
      var r = 0,
        l = 4,
        g = 0;
      do {
        l === this.numrows && 0 === g && this.corner1(r++), l === this.numrows - 2 && 0 === g && this.numcols % 4 != 0 && this.corner2(r++), l === this.numrows - 2 && 0 === g && this.numcols % 8 == 4 && this.corner3(r++), l === this.numrows + 4 && 2 === g && this.numcols % 8 == 0 && this.corner4(r++);
        do {
          l < this.numrows && g >= 0 && this.noBit(g, l) && this.utah(l, g, r++), l -= 2, g += 2;
        } while (l >= 0 && g < this.numcols);
        l++, g += 3;
        do {
          l >= 0 && g < this.numcols && this.noBit(g, l) && this.utah(l, g, r++), l += 2, g -= 2;
        } while (l < this.numrows && g >= 0);
        l += 3, g++;
      } while (l < this.numrows || g < this.numcols);
      this.noBit(this.numcols - 1, this.numrows - 1) && (this.setBit(this.numcols - 1, this.numrows - 1, !0), this.setBit(this.numcols - 2, this.numrows - 2, !0));
    }, p.prototype.module = function (r, l, g, S) {
      r < 0 && (r += this.numrows, l += 4 - (this.numrows + 4) % 8), l < 0 && (l += this.numcols, r += 4 - (this.numcols + 4) % 8);
      var H = this.codewords.charCodeAt(g);
      this.setBit(l, r, 0 != (H &= 1 << 8 - S));
    }, p.prototype.utah = function (r, l, g) {
      this.module(r - 2, l - 2, g, 1), this.module(r - 2, l - 1, g, 2), this.module(r - 1, l - 2, g, 3), this.module(r - 1, l - 1, g, 4), this.module(r - 1, l, g, 5), this.module(r, l - 2, g, 6), this.module(r, l - 1, g, 7), this.module(r, l, g, 8);
    }, p.prototype.corner1 = function (r) {
      this.module(this.numrows - 1, 0, r, 1), this.module(this.numrows - 1, 1, r, 2), this.module(this.numrows - 1, 2, r, 3), this.module(0, this.numcols - 2, r, 4), this.module(0, this.numcols - 1, r, 5), this.module(1, this.numcols - 1, r, 6), this.module(2, this.numcols - 1, r, 7), this.module(3, this.numcols - 1, r, 8);
    }, p.prototype.corner2 = function (r) {
      this.module(this.numrows - 3, 0, r, 1), this.module(this.numrows - 2, 0, r, 2), this.module(this.numrows - 1, 0, r, 3), this.module(0, this.numcols - 4, r, 4), this.module(0, this.numcols - 3, r, 5), this.module(0, this.numcols - 2, r, 6), this.module(0, this.numcols - 1, r, 7), this.module(1, this.numcols - 1, r, 8);
    }, p.prototype.corner3 = function (r) {
      this.module(this.numrows - 3, 0, r, 1), this.module(this.numrows - 2, 0, r, 2), this.module(this.numrows - 1, 0, r, 3), this.module(0, this.numcols - 2, r, 4), this.module(0, this.numcols - 1, r, 5), this.module(1, this.numcols - 1, r, 6), this.module(2, this.numcols - 1, r, 7), this.module(3, this.numcols - 1, r, 8);
    }, p.prototype.corner4 = function (r) {
      this.module(this.numrows - 1, 0, r, 1), this.module(this.numrows - 1, this.numcols - 1, r, 2), this.module(0, this.numcols - 3, r, 3), this.module(0, this.numcols - 2, r, 4), this.module(0, this.numcols - 1, r, 5), this.module(1, this.numcols - 3, r, 6), this.module(1, this.numcols - 2, r, 7), this.module(1, this.numcols - 1, r, 8);
    }, p;
  }();
  const Yf = Zf;
  var yp,
    uh = [5, 7, 10, 11, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 62, 68],
    cd = [[228, 48, 15, 111, 62], [23, 68, 144, 134, 240, 92, 254], [28, 24, 185, 166, 223, 248, 116, 255, 110, 61], [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120], [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242], [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185], [83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225, 48, 90, 188], [15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108, 82, 27, 174, 186, 172], [52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5, 172, 254, 124, 12, 181, 184, 96, 50, 193], [211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249, 121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255], [245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251, 80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184, 59, 25, 225, 98, 81, 112], [77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8, 175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54, 101, 248, 202, 69, 50, 150, 177, 226, 5, 9, 5], [245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188, 237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120, 100, 66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213, 92, 253, 225, 19], [175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215, 235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117, 203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245, 127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46], [242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108, 196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221, 175, 64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130, 188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47, 11, 204], [220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73, 127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15, 160, 227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96, 210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189, 64, 54, 108, 153, 132, 63, 96, 103, 82, 186]],
    ed = (yp = function (p, r) {
      for (var l = 1, g = 0; g < 255; g++) r[g] = l, p[l] = g, (l *= 2) >= 256 && (l ^= 301);
      return {
        LOG: p,
        ALOG: r
      };
    }([], []), yp.LOG),
    dh = yp.ALOG,
    Rs = "[)>05",
    Aa = "[)>06",
    Ph = function () {
      function p() {}
      return p.encodeECC200 = function (r, l) {
        if (r.length !== l.getDataCapacity()) throw new Error("The number of codewords does not match the selected symbol");
        var g = new Ii();
        g.append(r);
        var S = l.getInterleavedBlockCount();
        if (1 === S) {
          var H = this.createECCBlock(r, l.getErrorCodewords());
          g.append(H);
        } else {
          for (var ie = [], de = [], Oe = 0; Oe < S; Oe++) ie[Oe] = l.getDataLengthForInterleavedBlock(Oe + 1), de[Oe] = l.getErrorLengthForInterleavedBlock(Oe + 1);
          for (var Xe = 0; Xe < S; Xe++) {
            for (var wt = new Ii(), Lt = Xe; Lt < l.getDataCapacity(); Lt += S) wt.append(r.charAt(Lt));
            H = this.createECCBlock(wt.toString(), de[Xe]);
            for (var cn = 0, xn = Xe; xn < de[Xe] * S; xn += S) g.setCharAt(l.getDataCapacity() + xn, H.charAt(cn++));
          }
        }
        return g.toString();
      }, p.createECCBlock = function (r, l) {
        for (var g = -1, S = 0; S < uh.length; S++) if (uh[S] === l) {
          g = S;
          break;
        }
        if (g < 0) throw new Error("Illegal number of error correction codewords specified: " + l);
        var H = cd[g],
          ie = [];
        for (S = 0; S < l; S++) ie[S] = 0;
        for (S = 0; S < r.length; S++) {
          for (var de = ie[l - 1] ^ r.charAt(S).charCodeAt(0), Oe = l - 1; Oe > 0; Oe--) ie[Oe] = 0 !== de && 0 !== H[Oe] ? ie[Oe - 1] ^ dh[(ed[de] + ed[H[Oe]]) % 255] : ie[Oe - 1];
          ie[0] = 0 !== de && 0 !== H[0] ? dh[(ed[de] + ed[H[0]]) % 255] : 0;
        }
        var Xe = [];
        for (S = 0; S < l; S++) Xe[S] = ie[l - S - 1];
        return Xe.map(function (wt) {
          return String.fromCharCode(wt);
        }).join("");
      }, p;
    }();
  const xp = Ph;
  var Oh = function () {
      function p() {}
      return p.prototype.getEncodingMode = function () {
        return 0;
      }, p.prototype.encode = function (r) {
        if (El.determineConsecutiveDigitCount(r.getMessage(), r.pos) >= 2) r.writeCodeword(this.encodeASCIIDigits(r.getMessage().charCodeAt(r.pos), r.getMessage().charCodeAt(r.pos + 1))), r.pos += 2;else {
          var g = r.getCurrentChar(),
            S = El.lookAheadTest(r.getMessage(), r.pos, this.getEncodingMode());
          if (S !== this.getEncodingMode()) switch (S) {
            case 5:
              return r.writeCodeword(231), void r.signalEncoderChange(5);
            case 1:
              return r.writeCodeword(230), void r.signalEncoderChange(1);
            case 3:
              r.writeCodeword(238), r.signalEncoderChange(3);
              break;
            case 2:
              r.writeCodeword(239), r.signalEncoderChange(2);
              break;
            case 4:
              r.writeCodeword(240), r.signalEncoderChange(4);
              break;
            default:
              throw new Error("Illegal mode: " + S);
          } else El.isExtendedASCII(g) ? (r.writeCodeword(235), r.writeCodeword(g - 128 + 1), r.pos++) : (r.writeCodeword(g + 1), r.pos++);
        }
      }, p.prototype.encodeASCIIDigits = function (r, l) {
        if (El.isDigit(r) && El.isDigit(l)) return 10 * (r - 48) + (l - 48) + 130;
        throw new Error("not digits: " + r + l);
      }, p;
    }(),
    Wp = function () {
      function p() {}
      return p.prototype.getEncodingMode = function () {
        return 5;
      }, p.prototype.encode = function (r) {
        var l = new Ii();
        for (l.append(0); r.hasMoreCharacters();) {
          var g = r.getCurrentChar();
          if (l.append(g), r.pos++, El.lookAheadTest(r.getMessage(), r.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
            r.signalEncoderChange(0);
            break;
          }
        }
        var H = l.length() - 1,
          de = r.getCodewordCount() + H + 1;
        r.updateSymbolInfo(de);
        var Oe = r.getSymbolInfo().getDataCapacity() - de > 0;
        if (r.hasMoreCharacters() || Oe) if (H <= 249) l.setCharAt(0, Nn.getCharAt(H));else {
          if (!(H <= 1555)) throw new Error("Message length not in valid ranges: " + H);
          l.setCharAt(0, Nn.getCharAt(Math.floor(H / 250) + 249)), l.insert(1, Nn.getCharAt(H % 250));
        }
        var Xe = 0;
        for (g = l.length(); Xe < g; Xe++) r.writeCodeword(this.randomize255State(l.charAt(Xe).charCodeAt(0), r.getCodewordCount() + 1));
      }, p.prototype.randomize255State = function (r, l) {
        var S = r + (149 * l % 255 + 1);
        return S <= 255 ? S : S - 256;
      }, p;
    }(),
    Ah = function () {
      function p() {}
      return p.prototype.getEncodingMode = function () {
        return 1;
      }, p.prototype.encodeMaximal = function (r) {
        for (var l = new Ii(), g = 0, S = r.pos, H = 0; r.hasMoreCharacters();) {
          var ie = r.getCurrentChar();
          r.pos++, g = this.encodeChar(ie, l), l.length() % 3 == 0 && (S = r.pos, H = l.length());
        }
        if (H !== l.length()) {
          var de = Math.floor(l.length() / 3 * 2),
            Oe = Math.floor(r.getCodewordCount() + de + 1);
          r.updateSymbolInfo(Oe);
          var Xe = r.getSymbolInfo().getDataCapacity() - Oe,
            wt = Math.floor(l.length() % 3);
          (2 === wt && 2 !== Xe || 1 === wt && (g > 3 || 1 !== Xe)) && (r.pos = S);
        }
        l.length() > 0 && r.writeCodeword(230), this.handleEOD(r, l);
      }, p.prototype.encode = function (r) {
        for (var l = new Ii(); r.hasMoreCharacters();) {
          var g = r.getCurrentChar();
          r.pos++;
          var S = this.encodeChar(g, l),
            H = 2 * Math.floor(l.length() / 3),
            ie = r.getCodewordCount() + H;
          r.updateSymbolInfo(ie);
          var de = r.getSymbolInfo().getDataCapacity() - ie;
          if (!r.hasMoreCharacters()) {
            var Oe = new Ii();
            for (l.length() % 3 == 2 && 2 !== de && (S = this.backtrackOneCharacter(r, l, Oe, S)); l.length() % 3 == 1 && (S > 3 || 1 !== de);) S = this.backtrackOneCharacter(r, l, Oe, S);
            break;
          }
          if (l.length() % 3 == 0 && El.lookAheadTest(r.getMessage(), r.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
            r.signalEncoderChange(0);
            break;
          }
        }
        this.handleEOD(r, l);
      }, p.prototype.backtrackOneCharacter = function (r, l, g, S) {
        var H = l.length(),
          ie = l.toString().substring(0, H - S);
        l.setLengthToZero(), l.append(ie), r.pos--;
        var de = r.getCurrentChar();
        return S = this.encodeChar(de, g), r.resetSymbolInfo(), S;
      }, p.prototype.writeNextTriplet = function (r, l) {
        r.writeCodewords(this.encodeToCodewords(l.toString()));
        var g = l.toString().substring(3);
        l.setLengthToZero(), l.append(g);
      }, p.prototype.handleEOD = function (r, l) {
        var g = Math.floor(l.length() / 3 * 2),
          S = l.length() % 3,
          H = r.getCodewordCount() + g;
        r.updateSymbolInfo(H);
        var ie = r.getSymbolInfo().getDataCapacity() - H;
        if (2 === S) {
          for (l.append("\0"); l.length() >= 3;) this.writeNextTriplet(r, l);
          r.hasMoreCharacters() && r.writeCodeword(254);
        } else if (1 === ie && 1 === S) {
          for (; l.length() >= 3;) this.writeNextTriplet(r, l);
          r.hasMoreCharacters() && r.writeCodeword(254), r.pos--;
        } else {
          if (0 !== S) throw new Error("Unexpected case. Please report!");
          for (; l.length() >= 3;) this.writeNextTriplet(r, l);
          (ie > 0 || r.hasMoreCharacters()) && r.writeCodeword(254);
        }
        r.signalEncoderChange(0);
      }, p.prototype.encodeChar = function (r, l) {
        return r === " ".charCodeAt(0) ? (l.append(3), 1) : r >= "0".charCodeAt(0) && r <= "9".charCodeAt(0) ? (l.append(r - 48 + 4), 1) : r >= "A".charCodeAt(0) && r <= "Z".charCodeAt(0) ? (l.append(r - 65 + 14), 1) : r < " ".charCodeAt(0) ? (l.append(0), l.append(r), 2) : r <= "/".charCodeAt(0) ? (l.append(1), l.append(r - 33), 2) : r <= "@".charCodeAt(0) ? (l.append(1), l.append(r - 58 + 15), 2) : r <= "_".charCodeAt(0) ? (l.append(1), l.append(r - 91 + 22), 2) : r <= 127 ? (l.append(2), l.append(r - 96), 2) : (l.append("1"), 2 + this.encodeChar(r - 128, l));
      }, p.prototype.encodeToCodewords = function (r) {
        var l = 1600 * r.charCodeAt(0) + 40 * r.charCodeAt(1) + r.charCodeAt(2) + 1,
          g = l / 256,
          S = l % 256,
          H = new Ii();
        return H.append(g), H.append(S), H.toString();
      }, p;
    }(),
    zp = function () {
      function p() {}
      return p.prototype.getEncodingMode = function () {
        return 4;
      }, p.prototype.encode = function (r) {
        for (var l = new Ii(); r.hasMoreCharacters();) {
          var g = r.getCurrentChar();
          if (this.encodeChar(g, l), r.pos++, l.length() >= 4) {
            r.writeCodewords(this.encodeToCodewords(l.toString()));
            var H = l.toString().substring(4);
            if (l.setLengthToZero(), l.append(H), El.lookAheadTest(r.getMessage(), r.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
              r.signalEncoderChange(0);
              break;
            }
          }
        }
        l.append(Nn.getCharAt(31)), this.handleEOD(r, l);
      }, p.prototype.handleEOD = function (r, l) {
        try {
          var g = l.length();
          if (0 === g) return;
          if (1 === g) {
            r.updateSymbolInfo();
            var S = r.getSymbolInfo().getDataCapacity() - r.getCodewordCount(),
              H = r.getRemainingCharacters();
            if (H > S && (r.updateSymbolInfo(r.getCodewordCount() + 1), S = r.getSymbolInfo().getDataCapacity() - r.getCodewordCount()), H <= S && S <= 2) return;
          }
          if (g > 4) throw new Error("Count must not exceed 4");
          var ie = g - 1,
            de = this.encodeToCodewords(l.toString()),
            Xe = !r.hasMoreCharacters() && ie <= 2;
          ie <= 2 && (r.updateSymbolInfo(r.getCodewordCount() + ie), (S = r.getSymbolInfo().getDataCapacity() - r.getCodewordCount()) >= 3 && (Xe = !1, r.updateSymbolInfo(r.getCodewordCount() + de.length))), Xe ? (r.resetSymbolInfo(), r.pos -= ie) : r.writeCodewords(de);
        } finally {
          r.signalEncoderChange(0);
        }
      }, p.prototype.encodeChar = function (r, l) {
        r >= " ".charCodeAt(0) && r <= "?".charCodeAt(0) ? l.append(r) : r >= "@".charCodeAt(0) && r <= "^".charCodeAt(0) ? l.append(Nn.getCharAt(r - 64)) : El.illegalCharacter(Nn.getCharAt(r));
      }, p.prototype.encodeToCodewords = function (r) {
        var l = r.length;
        if (0 === l) throw new Error("StringBuilder must not be empty");
        var de = (r.charAt(0).charCodeAt(0) << 18) + ((l >= 2 ? r.charAt(1).charCodeAt(0) : 0) << 12) + ((l >= 3 ? r.charAt(2).charCodeAt(0) : 0) << 6) + (l >= 4 ? r.charAt(3).charCodeAt(0) : 0),
          Oe = de >> 16 & 255,
          Xe = de >> 8 & 255,
          wt = 255 & de,
          Lt = new Ii();
        return Lt.append(Oe), l >= 2 && Lt.append(Xe), l >= 3 && Lt.append(wt), Lt.toString();
      }, p;
    }(),
    Wf = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    cc = function () {
      function p(r, l, g, S, H, ie, de, Oe) {
        void 0 === de && (de = 0), void 0 === Oe && (Oe = 0), this.rectangular = r, this.dataCapacity = l, this.errorCodewords = g, this.matrixWidth = S, this.matrixHeight = H, this.dataRegions = ie, this.rsBlockData = de, this.rsBlockError = Oe;
      }
      return p.lookup = function (r, l, g, S, H) {
        var ie, de;
        void 0 === l && (l = 0), void 0 === g && (g = null), void 0 === S && (S = null), void 0 === H && (H = !0);
        try {
          for (var Oe = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(ph), Xe = Oe.next(); !Xe.done; Xe = Oe.next()) {
            var wt = Xe.value;
            if ((1 !== l || !wt.rectangular) && (2 !== l || wt.rectangular) && (null == g || !(wt.getSymbolWidth() < g.getWidth() || wt.getSymbolHeight() < g.getHeight())) && (null == S || !(wt.getSymbolWidth() > S.getWidth() || wt.getSymbolHeight() > S.getHeight())) && r <= wt.dataCapacity) return wt;
          }
        } catch (Lt) {
          ie = {
            error: Lt
          };
        } finally {
          try {
            Xe && !Xe.done && (de = Oe.return) && de.call(Oe);
          } finally {
            if (ie) throw ie.error;
          }
        }
        if (H) throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + r);
        return null;
      }, p.prototype.getHorizontalDataRegions = function () {
        switch (this.dataRegions) {
          case 1:
            return 1;
          case 2:
          case 4:
            return 2;
          case 16:
            return 4;
          case 36:
            return 6;
          default:
            throw new Error("Cannot handle this number of data regions");
        }
      }, p.prototype.getVerticalDataRegions = function () {
        switch (this.dataRegions) {
          case 1:
          case 2:
            return 1;
          case 4:
            return 2;
          case 16:
            return 4;
          case 36:
            return 6;
          default:
            throw new Error("Cannot handle this number of data regions");
        }
      }, p.prototype.getSymbolDataWidth = function () {
        return this.getHorizontalDataRegions() * this.matrixWidth;
      }, p.prototype.getSymbolDataHeight = function () {
        return this.getVerticalDataRegions() * this.matrixHeight;
      }, p.prototype.getSymbolWidth = function () {
        return this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions();
      }, p.prototype.getSymbolHeight = function () {
        return this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions();
      }, p.prototype.getCodewordCount = function () {
        return this.dataCapacity + this.errorCodewords;
      }, p.prototype.getInterleavedBlockCount = function () {
        return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
      }, p.prototype.getDataCapacity = function () {
        return this.dataCapacity;
      }, p.prototype.getErrorCodewords = function () {
        return this.errorCodewords;
      }, p.prototype.getDataLengthForInterleavedBlock = function (r) {
        return this.rsBlockData;
      }, p.prototype.getErrorLengthForInterleavedBlock = function (r) {
        return this.rsBlockError;
      }, p;
    }();
  const df = cc;
  var ip = function (p) {
      function r() {
        return p.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this;
      }
      return Wf(r, p), r.prototype.getInterleavedBlockCount = function () {
        return 10;
      }, r.prototype.getDataLengthForInterleavedBlock = function (l) {
        return l <= 8 ? 156 : 155;
      }, r;
    }(cc),
    ph = [new cc(!1, 3, 5, 8, 8, 1), new cc(!1, 5, 7, 10, 10, 1), new cc(!0, 5, 7, 16, 6, 1), new cc(!1, 8, 10, 12, 12, 1), new cc(!0, 10, 11, 14, 6, 2), new cc(!1, 12, 12, 14, 14, 1), new cc(!0, 16, 14, 24, 10, 1), new cc(!1, 18, 14, 16, 16, 1), new cc(!1, 22, 18, 18, 18, 1), new cc(!0, 22, 18, 16, 10, 2), new cc(!1, 30, 20, 20, 20, 1), new cc(!0, 32, 24, 16, 14, 2), new cc(!1, 36, 24, 22, 22, 1), new cc(!1, 44, 28, 24, 24, 1), new cc(!0, 49, 28, 22, 14, 2), new cc(!1, 62, 36, 14, 14, 4), new cc(!1, 86, 42, 16, 16, 4), new cc(!1, 114, 48, 18, 18, 4), new cc(!1, 144, 56, 20, 20, 4), new cc(!1, 174, 68, 22, 22, 4), new cc(!1, 204, 84, 24, 24, 4, 102, 42), new cc(!1, 280, 112, 14, 14, 16, 140, 56), new cc(!1, 368, 144, 16, 16, 16, 92, 36), new cc(!1, 456, 192, 18, 18, 16, 114, 48), new cc(!1, 576, 224, 20, 20, 16, 144, 56), new cc(!1, 696, 272, 22, 22, 16, 174, 68), new cc(!1, 816, 336, 24, 24, 16, 136, 56), new cc(!1, 1050, 408, 18, 18, 36, 175, 68), new cc(!1, 1304, 496, 20, 20, 36, 163, 62), new ip()],
    Tm = function () {
      function p(r) {
        this.msg = r, this.pos = 0, this.skipAtEnd = 0;
        for (var l = r.split("").map(function (de) {
            return de.charCodeAt(0);
          }), g = new Ii(), S = 0, H = l.length; S < H; S++) {
          var ie = String.fromCharCode(255 & l[S]);
          if ("?" === ie && "?" !== r.charAt(S)) throw new Error("Message contains characters outside ISO-8859-1 encoding.");
          g.append(ie);
        }
        this.msg = g.toString(), this.shape = 0, this.codewords = new Ii(), this.newEncoding = -1;
      }
      return p.prototype.setSymbolShape = function (r) {
        this.shape = r;
      }, p.prototype.setSizeConstraints = function (r, l) {
        this.minSize = r, this.maxSize = l;
      }, p.prototype.getMessage = function () {
        return this.msg;
      }, p.prototype.setSkipAtEnd = function (r) {
        this.skipAtEnd = r;
      }, p.prototype.getCurrentChar = function () {
        return this.msg.charCodeAt(this.pos);
      }, p.prototype.getCurrent = function () {
        return this.msg.charCodeAt(this.pos);
      }, p.prototype.getCodewords = function () {
        return this.codewords;
      }, p.prototype.writeCodewords = function (r) {
        this.codewords.append(r);
      }, p.prototype.writeCodeword = function (r) {
        this.codewords.append(r);
      }, p.prototype.getCodewordCount = function () {
        return this.codewords.length();
      }, p.prototype.getNewEncoding = function () {
        return this.newEncoding;
      }, p.prototype.signalEncoderChange = function (r) {
        this.newEncoding = r;
      }, p.prototype.resetEncoderSignal = function () {
        this.newEncoding = -1;
      }, p.prototype.hasMoreCharacters = function () {
        return this.pos < this.getTotalMessageCharCount();
      }, p.prototype.getTotalMessageCharCount = function () {
        return this.msg.length - this.skipAtEnd;
      }, p.prototype.getRemainingCharacters = function () {
        return this.getTotalMessageCharCount() - this.pos;
      }, p.prototype.getSymbolInfo = function () {
        return this.symbolInfo;
      }, p.prototype.updateSymbolInfo = function (r) {
        void 0 === r && (r = this.getCodewordCount()), (null == this.symbolInfo || r > this.symbolInfo.getDataCapacity()) && (this.symbolInfo = df.lookup(r, this.shape, this.minSize, this.maxSize, !0));
      }, p.prototype.resetSymbolInfo = function () {
        this.symbolInfo = null;
      }, p;
    }(),
    zf = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Em = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return zf(r, p), r.prototype.getEncodingMode = function () {
        return 3;
      }, r.prototype.encode = function (l) {
        for (var g = new Ii(); l.hasMoreCharacters();) {
          var S = l.getCurrentChar();
          if (l.pos++, this.encodeChar(S, g), g.length() % 3 == 0 && (this.writeNextTriplet(l, g), El.lookAheadTest(l.getMessage(), l.pos, this.getEncodingMode()) !== this.getEncodingMode())) {
            l.signalEncoderChange(0);
            break;
          }
        }
        this.handleEOD(l, g);
      }, r.prototype.encodeChar = function (l, g) {
        switch (l) {
          case 13:
            g.append(0);
            break;
          case "*".charCodeAt(0):
            g.append(1);
            break;
          case ">".charCodeAt(0):
            g.append(2);
            break;
          case " ".charCodeAt(0):
            g.append(3);
            break;
          default:
            l >= "0".charCodeAt(0) && l <= "9".charCodeAt(0) ? g.append(l - 48 + 4) : l >= "A".charCodeAt(0) && l <= "Z".charCodeAt(0) ? g.append(l - 65 + 14) : El.illegalCharacter(Nn.getCharAt(l));
        }
        return 1;
      }, r.prototype.handleEOD = function (l, g) {
        l.updateSymbolInfo();
        var S = l.getSymbolInfo().getDataCapacity() - l.getCodewordCount(),
          H = g.length();
        l.pos -= H, (l.getRemainingCharacters() > 1 || S > 1 || l.getRemainingCharacters() !== S) && l.writeCodeword(254), l.getNewEncoding() < 0 && l.signalEncoderChange(0);
      }, r;
    }(Ah),
    Sh = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    eg = function (p) {
      function r() {
        return null !== p && p.apply(this, arguments) || this;
      }
      return Sh(r, p), r.prototype.getEncodingMode = function () {
        return 2;
      }, r.prototype.encodeChar = function (l, g) {
        return l === " ".charCodeAt(0) ? (g.append(3), 1) : l >= "0".charCodeAt(0) && l <= "9".charCodeAt(0) ? (g.append(l - 48 + 4), 1) : l >= "a".charCodeAt(0) && l <= "z".charCodeAt(0) ? (g.append(l - 97 + 14), 1) : l < " ".charCodeAt(0) ? (g.append(0), g.append(l), 2) : l <= "/".charCodeAt(0) ? (g.append(1), g.append(l - 33), 2) : l <= "@".charCodeAt(0) ? (g.append(1), g.append(l - 58 + 15), 2) : l >= "[".charCodeAt(0) && l <= "_".charCodeAt(0) ? (g.append(1), g.append(l - 91 + 22), 2) : l === "`".charCodeAt(0) ? (g.append(2), g.append(0), 2) : l <= "Z".charCodeAt(0) ? (g.append(2), g.append(l - 65 + 1), 2) : l <= 127 ? (g.append(2), g.append(l - 123 + 27), 2) : (g.append("1"), 2 + this.encodeChar(l - 128, g));
      }, r;
    }(Ah),
    Dm = function () {
      function p() {}
      return p.randomize253State = function (r) {
        var g = 149 * r % 253 + 1 + 129;
        return g <= 254 ? g : g - 254;
      }, p.encodeHighLevel = function (r, l, g, S, H) {
        void 0 === l && (l = 0), void 0 === g && (g = null), void 0 === S && (S = null), void 0 === H && (H = !1);
        var ie = new Ah(),
          de = [new Oh(), ie, new eg(), new Em(), new zp(), new Wp()],
          Oe = new Tm(r);
        Oe.setSymbolShape(l), Oe.setSizeConstraints(g, S), r.startsWith(Rs) && r.endsWith("") ? (Oe.writeCodeword(236), Oe.setSkipAtEnd(2), Oe.pos += Rs.length) : r.startsWith(Aa) && r.endsWith("") && (Oe.writeCodeword(237), Oe.setSkipAtEnd(2), Oe.pos += Aa.length);
        var Xe = 0;
        for (H && (ie.encodeMaximal(Oe), Xe = Oe.getNewEncoding(), Oe.resetEncoderSignal()); Oe.hasMoreCharacters();) de[Xe].encode(Oe), Oe.getNewEncoding() >= 0 && (Xe = Oe.getNewEncoding(), Oe.resetEncoderSignal());
        var wt = Oe.getCodewordCount();
        Oe.updateSymbolInfo();
        var Lt = Oe.getSymbolInfo().getDataCapacity();
        wt < Lt && 0 !== Xe && 5 !== Xe && 4 !== Xe && Oe.writeCodeword("þ");
        var cn = Oe.getCodewords();
        for (cn.length() < Lt && cn.append(129); cn.length() < Lt;) cn.append(this.randomize253State(cn.length() + 1));
        return Oe.getCodewords().toString();
      }, p.lookAheadTest = function (r, l, g) {
        var S = this.lookAheadTestIntern(r, l, g);
        if (3 === g && 3 === S) {
          for (var H = Math.min(l + 3, r.length), ie = l; ie < H; ie++) if (!this.isNativeX12(r.charCodeAt(ie))) return 0;
        } else if (4 === g && 4 === S) for (H = Math.min(l + 4, r.length), ie = l; ie < H; ie++) if (!this.isNativeEDIFACT(r.charCodeAt(ie))) return 0;
        return S;
      }, p.lookAheadTestIntern = function (r, l, g) {
        if (l >= r.length) return g;
        var S;
        0 === g ? S = [0, 1, 1, 1, 1, 1.25] : (S = [1, 2, 2, 2, 2, 2.25])[g] = 0;
        for (var H = 0, ie = new Uint8Array(6), de = [];;) {
          if (l + H === r.length) {
            qe.fill(ie, 0), qe.fill(de, 0);
            var Oe = this.findMinimums(S, de, We.MAX_VALUE, ie),
              Xe = this.getMinimumCount(ie);
            if (de[0] === Oe) return 0;
            if (1 === Xe) {
              if (ie[5] > 0) return 5;
              if (ie[4] > 0) return 4;
              if (ie[2] > 0) return 2;
              if (ie[3] > 0) return 3;
            }
            return 1;
          }
          var wt = r.charCodeAt(l + H);
          if (H++, this.isDigit(wt) ? S[0] += .5 : this.isExtendedASCII(wt) ? (S[0] = Math.ceil(S[0]), S[0] += 2) : (S[0] = Math.ceil(S[0]), S[0]++), this.isNativeC40(wt) ? S[1] += 2 / 3 : this.isExtendedASCII(wt) ? S[1] += 8 / 3 : S[1] += 4 / 3, this.isNativeText(wt) ? S[2] += 2 / 3 : this.isExtendedASCII(wt) ? S[2] += 8 / 3 : S[2] += 4 / 3, this.isNativeX12(wt) ? S[3] += 2 / 3 : this.isExtendedASCII(wt) ? S[3] += 13 / 3 : S[3] += 10 / 3, this.isNativeEDIFACT(wt) ? S[4] += 3 / 4 : this.isExtendedASCII(wt) ? S[4] += 4.25 : S[4] += 3.25, this.isSpecialB256(wt) ? S[5] += 4 : S[5]++, H >= 4) {
            if (qe.fill(ie, 0), qe.fill(de, 0), this.findMinimums(S, de, We.MAX_VALUE, ie), de[0] < this.min(de[5], de[1], de[2], de[3], de[4])) return 0;
            if (de[5] < de[0] || de[5] + 1 < this.min(de[1], de[2], de[3], de[4])) return 5;
            if (de[4] + 1 < this.min(de[5], de[1], de[2], de[3], de[0])) return 4;
            if (de[2] + 1 < this.min(de[5], de[1], de[4], de[3], de[0])) return 2;
            if (de[3] + 1 < this.min(de[5], de[1], de[4], de[2], de[0])) return 3;
            if (de[1] + 1 < this.min(de[0], de[5], de[4], de[2])) {
              if (de[1] < de[3]) return 1;
              if (de[1] === de[3]) {
                for (var Lt = l + H + 1; Lt < r.length;) {
                  var cn = r.charCodeAt(Lt);
                  if (this.isX12TermSep(cn)) return 3;
                  if (!this.isNativeX12(cn)) break;
                  Lt++;
                }
                return 1;
              }
            }
          }
        }
      }, p.min = function (r, l, g, S, H) {
        var ie = Math.min(r, Math.min(l, Math.min(g, S)));
        return void 0 === H ? ie : Math.min(ie, H);
      }, p.findMinimums = function (r, l, g, S) {
        for (var H = 0; H < 6; H++) {
          var ie = l[H] = Math.ceil(r[H]);
          g > ie && (g = ie, qe.fill(S, 0)), g === ie && (S[H] = S[H] + 1);
        }
        return g;
      }, p.getMinimumCount = function (r) {
        for (var l = 0, g = 0; g < 6; g++) l += r[g];
        return l || 0;
      }, p.isDigit = function (r) {
        return r >= "0".charCodeAt(0) && r <= "9".charCodeAt(0);
      }, p.isExtendedASCII = function (r) {
        return r >= 128 && r <= 255;
      }, p.isNativeC40 = function (r) {
        return r === " ".charCodeAt(0) || r >= "0".charCodeAt(0) && r <= "9".charCodeAt(0) || r >= "A".charCodeAt(0) && r <= "Z".charCodeAt(0);
      }, p.isNativeText = function (r) {
        return r === " ".charCodeAt(0) || r >= "0".charCodeAt(0) && r <= "9".charCodeAt(0) || r >= "a".charCodeAt(0) && r <= "z".charCodeAt(0);
      }, p.isNativeX12 = function (r) {
        return this.isX12TermSep(r) || r === " ".charCodeAt(0) || r >= "0".charCodeAt(0) && r <= "9".charCodeAt(0) || r >= "A".charCodeAt(0) && r <= "Z".charCodeAt(0);
      }, p.isX12TermSep = function (r) {
        return 13 === r || r === "*".charCodeAt(0) || r === ">".charCodeAt(0);
      }, p.isNativeEDIFACT = function (r) {
        return r >= " ".charCodeAt(0) && r <= "^".charCodeAt(0);
      }, p.isSpecialB256 = function (r) {
        return !1;
      }, p.determineConsecutiveDigitCount = function (r, l) {
        void 0 === l && (l = 0);
        for (var g = r.length, S = l; S < g && this.isDigit(r.charCodeAt(S));) S++;
        return S - l;
      }, p.illegalCharacter = function (r) {
        var l = We.toHexString(r.charCodeAt(0));
        throw l = "0000".substring(0, 4 - l.length) + l, new Error("Illegal character: " + r + " (0x" + l + ")");
      }, p;
    }();
  const El = Dm;
  var bp = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    tg = function () {
      function p(r) {
        this.charset = r, this.name = r.name;
      }
      return p.prototype.canEncode = function (r) {
        try {
          return null != Je.encode(r, this.charset);
        } catch {
          return !1;
        }
      }, p;
    }(),
    op = function () {
      function p(r, l, g) {
        var S, H, ie, de, Oe, Xe;
        this.ENCODERS = ["IBM437", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "windows-1250", "windows-1251", "windows-1252", "windows-1256", "Shift_JIS"].map(function (Sa) {
          return new tg(Sl.forName(Sa));
        }), this.encoders = [];
        var wt = [];
        wt.push(new tg(Hp.ISO_8859_1));
        for (var Lt = null != l && l.name.startsWith("UTF"), cn = 0; cn < r.length; cn++) {
          var xn = !1;
          try {
            for (var Hi = (S = void 0, bp(wt)), no = Hi.next(); !no.done; no = Hi.next()) {
              var Ho = no.value,
                zo = r.charAt(cn);
              if (zo.charCodeAt(0) === g || Ho.canEncode(zo)) {
                xn = !0;
                break;
              }
            }
          } catch (Sa) {
            S = {
              error: Sa
            };
          } finally {
            try {
              no && !no.done && (H = Hi.return) && H.call(Hi);
            } finally {
              if (S) throw S.error;
            }
          }
          if (!xn) try {
            for (var Mr = (ie = void 0, bp(this.ENCODERS)), Ur = Mr.next(); !Ur.done; Ur = Mr.next()) if ((Ho = Ur.value).canEncode(r.charAt(cn))) {
              wt.push(Ho), xn = !0;
              break;
            }
          } catch (Sa) {
            ie = {
              error: Sa
            };
          } finally {
            try {
              Ur && !Ur.done && (de = Mr.return) && de.call(Mr);
            } finally {
              if (ie) throw ie.error;
            }
          }
          xn || (Lt = !0);
        }
        if (1 !== wt.length || Lt) {
          this.encoders = [];
          var ls = 0;
          try {
            for (var Ss = bp(wt), Is = Ss.next(); !Is.done; Is = Ss.next()) this.encoders[ls++] = Ho = Is.value;
          } catch (Sa) {
            Oe = {
              error: Sa
            };
          } finally {
            try {
              Is && !Is.done && (Xe = Ss.return) && Xe.call(Ss);
            } finally {
              if (Oe) throw Oe.error;
            }
          }
        } else this.encoders = [wt[0]];
        var Ys = -1;
        if (null != l) for (cn = 0; cn < this.encoders.length; cn++) if (null != this.encoders[cn] && l.name === this.encoders[cn].name) {
          Ys = cn;
          break;
        }
        this.priorityEncoderIndex = Ys;
      }
      return p.prototype.length = function () {
        return this.encoders.length;
      }, p.prototype.getCharsetName = function (r) {
        if (!(r < this.length())) throw new Error("index must be less than length");
        return this.encoders[r].name;
      }, p.prototype.getCharset = function (r) {
        if (!(r < this.length())) throw new Error("index must be less than length");
        return this.encoders[r].charset;
      }, p.prototype.getECIValue = function (r) {
        return this.encoders[r].charset.getValueIdentifier();
      }, p.prototype.getPriorityEncoderIndex = function () {
        return this.priorityEncoderIndex;
      }, p.prototype.canEncode = function (r, l) {
        if (!(l < this.length())) throw new Error("index must be less than length");
        return !0;
      }, p.prototype.encode = function (r, l) {
        if (!(l < this.length())) throw new Error("index must be less than length");
        return Je.encode(Nn.getCharAt(r), this.encoders[l].name);
      }, p;
    }(),
    Gp = 3,
    Gf = function () {
      function p(r, l, g) {
        this.fnc1 = g;
        var S = new op(r, l, g);
        if (1 === S.length()) for (var H = 0; H < this.bytes.length; H++) {
          var ie = r.charAt(H).charCodeAt(0);
          this.bytes[H] = ie === g ? 1e3 : ie;
        } else this.bytes = this.encodeMinimally(r, S, g);
      }
      return p.prototype.getFNC1Character = function () {
        return this.fnc1;
      }, p.prototype.length = function () {
        return this.bytes.length;
      }, p.prototype.haveNCharacters = function (r, l) {
        if (r + l - 1 >= this.bytes.length) return !1;
        for (var g = 0; g < l; g++) if (this.isECI(r + g)) return !1;
        return !0;
      }, p.prototype.charAt = function (r) {
        if (r < 0 || r >= this.length()) throw new Error("" + r);
        if (this.isECI(r)) throw new Error("value at " + r + " is not a character but an ECI");
        return this.isFNC1(r) ? this.fnc1 : this.bytes[r];
      }, p.prototype.subSequence = function (r, l) {
        if (r < 0 || r > l || l > this.length()) throw new Error("" + r);
        for (var g = new Ii(), S = r; S < l; S++) {
          if (this.isECI(S)) throw new Error("value at " + S + " is not a character but an ECI");
          g.append(this.charAt(S));
        }
        return g.toString();
      }, p.prototype.isECI = function (r) {
        if (r < 0 || r >= this.length()) throw new Error("" + r);
        return this.bytes[r] > 255 && this.bytes[r] <= 999;
      }, p.prototype.isFNC1 = function (r) {
        if (r < 0 || r >= this.length()) throw new Error("" + r);
        return 1e3 === this.bytes[r];
      }, p.prototype.getECIValue = function (r) {
        if (r < 0 || r >= this.length()) throw new Error("" + r);
        if (!this.isECI(r)) throw new Error("value at " + r + " is not an ECI but a character");
        return this.bytes[r] - 256;
      }, p.prototype.addEdge = function (r, l, g) {
        (null == r[l][g.encoderIndex] || r[l][g.encoderIndex].cachedTotalSize > g.cachedTotalSize) && (r[l][g.encoderIndex] = g);
      }, p.prototype.addEdges = function (r, l, g, S, H, ie) {
        var de = r.charAt(S).charCodeAt(0),
          Oe = 0,
          Xe = l.length();
        l.getPriorityEncoderIndex() >= 0 && (de === ie || l.canEncode(de, l.getPriorityEncoderIndex())) && (Xe = (Oe = l.getPriorityEncoderIndex()) + 1);
        for (var wt = Oe; wt < Xe; wt++) (de === ie || l.canEncode(de, wt)) && this.addEdge(g, S + 1, new Ih(de, l, wt, H, ie));
      }, p.prototype.encodeMinimally = function (r, l, g) {
        var S = r.length,
          H = new Ih[S + 1][l.length()]();
        this.addEdges(r, l, H, 0, null, g);
        for (var ie = 1; ie <= S; ie++) {
          for (var de = 0; de < l.length(); de++) null != H[ie][de] && ie < S && this.addEdges(r, l, H, ie, H[ie][de], g);
          for (de = 0; de < l.length(); de++) H[ie - 1][de] = null;
        }
        var Oe = -1,
          Xe = We.MAX_VALUE;
        for (de = 0; de < l.length(); de++) if (null != H[S][de]) {
          var wt = H[S][de];
          wt.cachedTotalSize < Xe && (Xe = wt.cachedTotalSize, Oe = de);
        }
        if (Oe < 0) throw new Error("Failed to encode \"" + r + "\"");
        for (var Lt = [], cn = H[S][Oe]; null != cn;) {
          if (cn.isFNC1()) Lt.unshift(1e3);else {
            var xn = l.encode(cn.c, cn.encoderIndex);
            for (ie = xn.length - 1; ie >= 0; ie--) Lt.unshift(255 & xn[ie]);
          }
          (null === cn.previous ? 0 : cn.previous.encoderIndex) !== cn.encoderIndex && Lt.unshift(256 + l.getECIValue(cn.encoderIndex)), cn = cn.previous;
        }
        var no = [];
        for (ie = 0; ie < no.length; ie++) no[ie] = Lt[ie];
        return no;
      }, p;
    }(),
    Ih = function () {
      function p(r, l, g, S, H) {
        this.c = r, this.encoderSet = l, this.encoderIndex = g, this.previous = S, this.fnc1 = H, this.c = r === H ? 1e3 : r;
        var ie = this.isFNC1() ? 1 : l.encode(r, g).length;
        (null === S ? 0 : S.encoderIndex) !== g && (ie += Gp), null != S && (ie += S.cachedTotalSize), this.cachedTotalSize = ie;
      }
      return p.prototype.isFNC1 = function () {
        return 1e3 === this.c;
      }, p;
    }(),
    Ag = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    pf = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    ng = function (p, r) {
      var l = "function" == typeof Symbol && p[Symbol.iterator];
      if (!l) return p;
      var S,
        ie,
        g = l.call(p),
        H = [];
      try {
        for (; (void 0 === r || r-- > 0) && !(S = g.next()).done;) H.push(S.value);
      } catch (de) {
        ie = {
          error: de
        };
      } finally {
        try {
          S && !S.done && (l = g.return) && l.call(g);
        } finally {
          if (ie) throw ie.error;
        }
      }
      return H;
    },
    $s = (() => (function (p) {
      p[p.ASCII = 0] = "ASCII", p[p.C40 = 1] = "C40", p[p.TEXT = 2] = "TEXT", p[p.X12 = 3] = "X12", p[p.EDF = 4] = "EDF", p[p.B256 = 5] = "B256";
    }($s || ($s = {})), $s))(),
    Eu = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"],
    Nu = function () {
      function p() {}
      return p.isExtendedASCII = function (r, l) {
        return r !== l && r >= 128 && r <= 255;
      }, p.isInC40Shift1Set = function (r) {
        return r <= 31;
      }, p.isInC40Shift2Set = function (r, l) {
        var g, S;
        try {
          for (var H = pf(Eu), ie = H.next(); !ie.done; ie = H.next()) if (ie.value.charCodeAt(0) === r) return !0;
        } catch (Oe) {
          g = {
            error: Oe
          };
        } finally {
          try {
            ie && !ie.done && (S = H.return) && S.call(H);
          } finally {
            if (g) throw g.error;
          }
        }
        return r === l;
      }, p.isInTextShift1Set = function (r) {
        return this.isInC40Shift1Set(r);
      }, p.isInTextShift2Set = function (r, l) {
        return this.isInC40Shift2Set(r, l);
      }, p.encodeHighLevel = function (r, l, g, S) {
        void 0 === l && (l = null), void 0 === g && (g = -1), void 0 === S && (S = 0);
        var H = 0;
        return r.startsWith(Rs) && r.endsWith("") ? (H = 5, r = r.substring(Rs.length, r.length - 2)) : r.startsWith(Aa) && r.endsWith("") && (H = 6, r = r.substring(Aa.length, r.length - 2)), decodeURIComponent(escape(String.fromCharCode.apply(String, function () {
          for (var p = [], r = 0; r < arguments.length; r++) p = p.concat(ng(arguments[r]));
          return p;
        }(this.encode(r, l, g, S, H)))));
      }, p.encode = function (r, l, g, S, H) {
        return this.encodeMinimally(new Sg(r, l, g, S, H)).getBytes();
      }, p.addEdge = function (r, l) {
        var g = l.fromPosition + l.characterLength;
        (null === r[g][l.getEndMode()] || r[g][l.getEndMode()].cachedTotalSize > l.cachedTotalSize) && (r[g][l.getEndMode()] = l);
      }, p.getNumberOfC40Words = function (r, l, g, S) {
        for (var H = 0, ie = l; ie < r.length(); ie++) {
          if (r.isECI(ie)) return S[0] = 0, 0;
          var de = r.charAt(ie);
          if (g && El.isNativeC40(de) || !g && El.isNativeText(de)) H++;else if (p.isExtendedASCII(de, r.getFNC1Character())) {
            var Oe = 255 & de;
            Oe >= 128 && (g && El.isNativeC40(Oe - 128) || !g && El.isNativeText(Oe - 128)) ? H += 3 : H += 4;
          } else H += 2;
          if (H % 3 == 0 || (H - 2) % 3 == 0 && ie + 1 === r.length()) return S[0] = ie - l + 1, Math.ceil(H / 3);
        }
        return S[0] = 0, 0;
      }, p.addEdges = function (r, l, g, S) {
        var H, ie;
        if (r.isECI(g)) this.addEdge(l, new Dd(r, $s.ASCII, g, 1, S));else {
          var xn,
            de = r.charAt(g);
          if (null === S || S.getEndMode() !== $s.EDF) {
            El.isDigit(de) && r.haveNCharacters(g, 2) && El.isDigit(r.charAt(g + 1)) ? this.addEdge(l, new Dd(r, $s.ASCII, g, 2, S)) : this.addEdge(l, new Dd(r, $s.ASCII, g, 1, S));
            var Oe = [$s.C40, $s.TEXT];
            try {
              for (var Xe = pf(Oe), wt = Xe.next(); !wt.done; wt = Xe.next()) {
                var Lt = wt.value,
                  cn = [];
                p.getNumberOfC40Words(r, g, Lt === $s.C40, cn) > 0 && this.addEdge(l, new Dd(r, Lt, g, cn[0], S));
              }
            } catch (no) {
              H = {
                error: no
              };
            } finally {
              try {
                wt && !wt.done && (ie = Xe.return) && ie.call(Xe);
              } finally {
                if (H) throw H.error;
              }
            }
            r.haveNCharacters(g, 3) && El.isNativeX12(r.charAt(g)) && El.isNativeX12(r.charAt(g + 1)) && El.isNativeX12(r.charAt(g + 2)) && this.addEdge(l, new Dd(r, $s.X12, g, 3, S)), this.addEdge(l, new Dd(r, $s.B256, g, 1, S));
          }
          for (xn = 0; xn < 3; xn++) {
            var Hi = g + xn;
            if (!r.haveNCharacters(Hi, 1) || !El.isNativeEDIFACT(r.charAt(Hi))) break;
            this.addEdge(l, new Dd(r, $s.EDF, g, xn + 1, S));
          }
          3 === xn && r.haveNCharacters(g, 4) && El.isNativeEDIFACT(r.charAt(g + 3)) && this.addEdge(l, new Dd(r, $s.EDF, g, 4, S));
        }
      }, p.encodeMinimally = function (r) {
        var l = r.length(),
          g = Array(l + 1).fill(null).map(function () {
            return Array(6).fill(0);
          });
        this.addEdges(r, g, 0, null);
        for (var S = 1; S <= l; S++) {
          for (var H = 0; H < 6; H++) null !== g[S][H] && S < l && this.addEdges(r, g, S, g[S][H]);
          for (H = 0; H < 6; H++) g[S - 1][H] = null;
        }
        var ie = -1,
          de = We.MAX_VALUE;
        for (H = 0; H < 6; H++) if (null !== g[l][H]) {
          var Oe = g[l][H],
            Xe = H >= 1 && H <= 3 ? Oe.cachedTotalSize + 1 : Oe.cachedTotalSize;
          Xe < de && (de = Xe, ie = H);
        }
        if (ie < 0) throw new Error("Failed to encode \"" + r + "\"");
        return new ru(g[l][ie]);
      }, p;
    }(),
    ru = function () {
      function p(r) {
        var l = r.input,
          g = 0,
          S = [],
          H = [],
          ie = [];
        (r.mode === $s.C40 || r.mode === $s.TEXT || r.mode === $s.X12) && r.getEndMode() !== $s.ASCII && (g += this.prepend(Dd.getBytes(254), S));
        for (var de = r; null !== de;) g += this.prepend(de.getDataBytes(), S), (null === de.previous || de.getPreviousStartMode() !== de.getMode()) && (de.getMode() === $s.B256 && (g <= 249 ? (S.unshift(g), g++) : (S.unshift(g % 250), S.unshift(g / 250 + 249), g += 2), H.push(S.length), ie.push(g)), this.prepend(de.getLatchBytes(), S), g = 0), de = de.previous;
        5 === l.getMacroId() ? g += this.prepend(Dd.getBytes(236), S) : 6 === l.getMacroId() && (g += this.prepend(Dd.getBytes(237), S)), l.getFNC1Character() > 0 && (g += this.prepend(Dd.getBytes(232), S));
        for (var Oe = 0; Oe < H.length; Oe++) this.applyRandomPattern(S, S.length - H[Oe], ie[Oe]);
        var Xe = r.getMinSymbolSize(S.length);
        for (S.length < Xe && S.push(129); S.length < Xe;) S.push(this.randomize253State(S.length + 1));
        for (this.bytes = new Uint8Array(S.length), Oe = 0; Oe < this.bytes.length; Oe++) this.bytes[Oe] = S[Oe];
      }
      return p.prototype.prepend = function (r, l) {
        for (var g = r.length - 1; g >= 0; g--) l.unshift(r[g]);
        return r.length;
      }, p.prototype.randomize253State = function (r) {
        var g = 149 * r % 253 + 1 + 129;
        return g <= 254 ? g : g - 254;
      }, p.prototype.applyRandomPattern = function (r, l, g) {
        for (var S = 0; S < g; S++) {
          var H = l + S,
            Oe = 149 * (H + 1) % 255 + 1 + (255 & r[H]);
          r[H] = Oe <= 255 ? Oe : Oe - 256;
        }
      }, p.prototype.getBytes = function () {
        return this.bytes;
      }, p;
    }(),
    Dd = function () {
      function p(r, l, g, S, H) {
        if (this.input = r, this.mode = l, this.fromPosition = g, this.characterLength = S, this.previous = H, this.allCodewordCapacities = [3, 5, 8, 10, 12, 16, 18, 22, 30, 32, 36, 44, 49, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558], this.squareCodewordCapacities = [3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558], this.rectangularCodewordCapacities = [5, 10, 16, 33, 32, 49], !(g + S <= r.length())) throw new Error("Invalid edge");
        var ie = null !== H ? H.cachedTotalSize : 0,
          de = this.getPreviousMode();
        switch (l) {
          case $s.ASCII:
            ie++, (r.isECI(g) || Nu.isExtendedASCII(r.charAt(g), r.getFNC1Character())) && ie++, (de === $s.C40 || de === $s.TEXT || de === $s.X12) && ie++;
            break;
          case $s.B256:
            ie++, (de !== $s.B256 || 250 === this.getB256Size()) && ie++, de === $s.ASCII ? ie++ : (de === $s.C40 || de === $s.TEXT || de === $s.X12) && (ie += 2);
            break;
          case $s.C40:
          case $s.TEXT:
          case $s.X12:
            ie += l === $s.X12 ? 2 : 2 * Nu.getNumberOfC40Words(r, g, l === $s.C40, []), de === $s.ASCII || de === $s.B256 ? ie++ : de !== l && (de === $s.C40 || de === $s.TEXT || de === $s.X12) && (ie += 2);
            break;
          case $s.EDF:
            ie += 3, de === $s.ASCII || de === $s.B256 ? ie++ : (de === $s.C40 || de === $s.TEXT || de === $s.X12) && (ie += 2);
        }
        this.cachedTotalSize = ie;
      }
      return p.prototype.getB256Size = function () {
        for (var r = 0, l = this; null !== l && l.mode === $s.B256 && r <= 250;) r++, l = l.previous;
        return r;
      }, p.prototype.getPreviousStartMode = function () {
        return null === this.previous ? $s.ASCII : this.previous.mode;
      }, p.prototype.getPreviousMode = function () {
        return null === this.previous ? $s.ASCII : this.previous.getEndMode();
      }, p.prototype.getEndMode = function () {
        if (this.mode === $s.EDF) {
          if (this.characterLength < 4) return $s.ASCII;
          if ((r = this.getLastASCII()) > 0 && this.getCodewordsRemaining(this.cachedTotalSize + r) <= 2 - r) return $s.ASCII;
        }
        if (this.mode === $s.C40 || this.mode === $s.TEXT || this.mode === $s.X12) {
          if (this.fromPosition + this.characterLength >= this.input.length() && 0 === this.getCodewordsRemaining(this.cachedTotalSize)) return $s.ASCII;
          var r;
          if (1 === (r = this.getLastASCII()) && 0 === this.getCodewordsRemaining(this.cachedTotalSize + 1)) return $s.ASCII;
        }
        return this.mode;
      }, p.prototype.getMode = function () {
        return this.mode;
      }, p.prototype.getLastASCII = function () {
        var r = this.input.length(),
          l = this.fromPosition + this.characterLength;
        return r - l > 4 || l >= r ? 0 : r - l == 1 ? Nu.isExtendedASCII(this.input.charAt(l), this.input.getFNC1Character()) ? 0 : 1 : r - l == 2 ? Nu.isExtendedASCII(this.input.charAt(l), this.input.getFNC1Character()) || Nu.isExtendedASCII(this.input.charAt(l + 1), this.input.getFNC1Character()) ? 0 : El.isDigit(this.input.charAt(l)) && El.isDigit(this.input.charAt(l + 1)) ? 1 : 2 : r - l == 3 ? El.isDigit(this.input.charAt(l)) && El.isDigit(this.input.charAt(l + 1)) && !Nu.isExtendedASCII(this.input.charAt(l + 2), this.input.getFNC1Character()) || El.isDigit(this.input.charAt(l + 1)) && El.isDigit(this.input.charAt(l + 2)) && !Nu.isExtendedASCII(this.input.charAt(l), this.input.getFNC1Character()) ? 2 : 0 : El.isDigit(this.input.charAt(l)) && El.isDigit(this.input.charAt(l + 1)) && El.isDigit(this.input.charAt(l + 2)) && El.isDigit(this.input.charAt(l + 3)) ? 2 : 0;
      }, p.prototype.getMinSymbolSize = function (r) {
        var l, g, S, H, ie, de;
        switch (this.input.getShapeHint()) {
          case 1:
            try {
              for (var Oe = pf(this.squareCodewordCapacities), Xe = Oe.next(); !Xe.done; Xe = Oe.next()) if ((wt = Xe.value) >= r) return wt;
            } catch (no) {
              l = {
                error: no
              };
            } finally {
              try {
                Xe && !Xe.done && (g = Oe.return) && g.call(Oe);
              } finally {
                if (l) throw l.error;
              }
            }
            break;
          case 2:
            try {
              for (var Lt = pf(this.rectangularCodewordCapacities), cn = Lt.next(); !cn.done; cn = Lt.next()) if ((wt = cn.value) >= r) return wt;
            } catch (no) {
              S = {
                error: no
              };
            } finally {
              try {
                cn && !cn.done && (H = Lt.return) && H.call(Lt);
              } finally {
                if (S) throw S.error;
              }
            }
        }
        try {
          for (var xn = pf(this.allCodewordCapacities), Hi = xn.next(); !Hi.done; Hi = xn.next()) {
            var wt;
            if ((wt = Hi.value) >= r) return wt;
          }
        } catch (no) {
          ie = {
            error: no
          };
        } finally {
          try {
            Hi && !Hi.done && (de = xn.return) && de.call(xn);
          } finally {
            if (ie) throw ie.error;
          }
        }
        return this.allCodewordCapacities[this.allCodewordCapacities.length - 1];
      }, p.prototype.getCodewordsRemaining = function (r) {
        return this.getMinSymbolSize(r) - r;
      }, p.getBytes = function (r, l) {
        var g = new Uint8Array(l ? 2 : 1);
        return g[0] = r, l && (g[1] = l), g;
      }, p.prototype.setC40Word = function (r, l, g, S, H) {
        var ie = 1600 * (255 & g) + 40 * (255 & S) + (255 & H) + 1;
        r[l] = ie / 256, r[l + 1] = ie % 256;
      }, p.prototype.getX12Value = function (r) {
        return 13 === r ? 0 : 42 === r ? 1 : 62 === r ? 2 : 32 === r ? 3 : r >= 48 && r <= 57 ? r - 44 : r >= 65 && r <= 90 ? r - 51 : r;
      }, p.prototype.getX12Words = function () {
        if (this.characterLength % 3 != 0) throw new Error("X12 words must be a multiple of 3");
        for (var r = new Uint8Array(this.characterLength / 3 * 2), l = 0; l < r.length; l += 2) this.setC40Word(r, l, this.getX12Value(this.input.charAt(this.fromPosition + l / 2 * 3)), this.getX12Value(this.input.charAt(this.fromPosition + l / 2 * 3 + 1)), this.getX12Value(this.input.charAt(this.fromPosition + l / 2 * 3 + 2)));
        return r;
      }, p.prototype.getShiftValue = function (r, l, g) {
        return l && Nu.isInC40Shift1Set(r) || !l && Nu.isInTextShift1Set(r) ? 0 : l && Nu.isInC40Shift2Set(r, g) || !l && Nu.isInTextShift2Set(r, g) ? 1 : 2;
      }, p.prototype.getC40Value = function (r, l, g, S) {
        if (g === S) {
          if (2 !== l) throw new Error("FNC1 cannot be used in C40 shift 2");
          return 27;
        }
        return r ? g <= 31 ? g : 32 === g ? 3 : g <= 47 ? g - 33 : g <= 57 ? g - 44 : g <= 64 ? g - 43 : g <= 90 ? g - 51 : g <= 95 ? g - 69 : g <= 127 ? g - 96 : g : 0 === g ? 0 : 0 === l && g <= 3 ? g - 1 : 1 === l && g <= 31 ? g : 32 === g ? 3 : g >= 33 && g <= 47 ? g - 33 : g >= 48 && g <= 57 ? g - 44 : g >= 58 && g <= 64 ? g - 43 : g >= 65 && g <= 90 ? g - 64 : g >= 91 && g <= 95 ? g - 69 : 96 === g ? 0 : g >= 97 && g <= 122 ? g - 83 : g >= 123 && g <= 127 ? g - 96 : g;
      }, p.prototype.getC40Words = function (r, l) {
        for (var g = [], S = 0; S < this.characterLength; S++) {
          var H = this.input.charAt(this.fromPosition + S);
          if (r && El.isNativeC40(H) || !r && El.isNativeText(H)) g.push(this.getC40Value(r, 0, H, l));else if (Nu.isExtendedASCII(H, l)) {
            var de = (255 & H) - 128;
            if (r && El.isNativeC40(de) || !r && El.isNativeText(de)) g.push(1), g.push(30), g.push(this.getC40Value(r, 0, de, l));else {
              g.push(1), g.push(30);
              var ie = this.getShiftValue(de, r, l);
              g.push(ie), g.push(this.getC40Value(r, ie, de, l));
            }
          } else ie = this.getShiftValue(H, r, l), g.push(ie), g.push(this.getC40Value(r, ie, H, l));
        }
        if (g.length % 3 != 0) {
          if ((g.length - 2) % 3 != 0 || this.fromPosition + this.characterLength !== this.input.length()) throw new Error("C40 words must be a multiple of 3");
          g.push(0);
        }
        var Oe = new Uint8Array(g.length / 3 * 2),
          Xe = 0;
        for (S = 0; S < g.length; S += 3) this.setC40Word(Oe, Xe, 255 & g[S], 255 & g[S + 1], 255 & g[S + 2]), Xe += 2;
        return Oe;
      }, p.prototype.getEDFBytes = function () {
        for (var r = Math.ceil(this.characterLength / 4), l = new Uint8Array(3 * r), g = this.fromPosition, S = Math.min(this.fromPosition + this.characterLength - 1, this.input.length() - 1), H = 0; H < r; H += 3) {
          for (var ie = [], de = 0; de < 4; de++) ie[de] = g <= S ? 63 & this.input.charAt(g++) : g === S + 1 ? 31 : 0;
          var Oe = ie[0] << 18;
          Oe |= ie[1] << 12, Oe |= ie[2] << 6, l[H] = (Oe |= ie[3]) >> 16 & 255, l[H + 1] = Oe >> 8 & 255, l[H + 2] = 255 & Oe;
        }
        return l;
      }, p.prototype.getLatchBytes = function () {
        switch (this.getPreviousMode()) {
          case $s.ASCII:
          case $s.B256:
            switch (this.mode) {
              case $s.B256:
                return p.getBytes(231);
              case $s.C40:
                return p.getBytes(230);
              case $s.TEXT:
                return p.getBytes(239);
              case $s.X12:
                return p.getBytes(238);
              case $s.EDF:
                return p.getBytes(240);
            }
            break;
          case $s.C40:
          case $s.TEXT:
          case $s.X12:
            if (this.mode !== this.getPreviousMode()) switch (this.mode) {
              case $s.ASCII:
                return p.getBytes(254);
              case $s.B256:
                return p.getBytes(254, 231);
              case $s.C40:
                return p.getBytes(254, 230);
              case $s.TEXT:
                return p.getBytes(254, 239);
              case $s.X12:
                return p.getBytes(254, 238);
              case $s.EDF:
                return p.getBytes(254, 240);
            }
            break;
          case $s.EDF:
            if (this.mode !== $s.EDF) throw new Error("Cannot switch from EDF to " + this.mode);
        }
        return new Uint8Array(0);
      }, p.prototype.getDataBytes = function () {
        switch (this.mode) {
          case $s.ASCII:
            return this.input.isECI(this.fromPosition) ? p.getBytes(241, this.input.getECIValue(this.fromPosition) + 1) : Nu.isExtendedASCII(this.input.charAt(this.fromPosition), this.input.getFNC1Character()) ? p.getBytes(235, this.input.charAt(this.fromPosition) - 127) : 2 === this.characterLength ? p.getBytes(10 * this.input.charAt(this.fromPosition) + this.input.charAt(this.fromPosition + 1) + 130) : this.input.isFNC1(this.fromPosition) ? p.getBytes(232) : p.getBytes(this.input.charAt(this.fromPosition) + 1);
          case $s.B256:
            return p.getBytes(this.input.charAt(this.fromPosition));
          case $s.C40:
            return this.getC40Words(!0, this.input.getFNC1Character());
          case $s.TEXT:
            return this.getC40Words(!1, this.input.getFNC1Character());
          case $s.X12:
            return this.getX12Words();
          case $s.EDF:
            return this.getEDFBytes();
        }
      }, p;
    }(),
    Sg = function (p) {
      function r(l, g, S, H, ie) {
        var de = p.call(this, l, g, S) || this;
        return de.shape = H, de.macroId = ie, de;
      }
      return Ag(r, p), r.prototype.getMacroId = function () {
        return this.macroId;
      }, r.prototype.getShapeHint = function () {
        return this.shape;
      }, r;
    }(Gf);
  !function () {
    function p() {}
    p.prototype.encode = function (r, l, g, S, H) {
      if (void 0 === H && (H = null), "" === r.trim()) throw new Error("Found empty contents");
      if (l !== qo.DATA_MATRIX) throw new Error("Can only encode DATA_MATRIX, but got " + l);
      if (g < 0 || S < 0) throw new Error("Requested dimensions can't be negative: " + g + "x" + S);
      var cn,
        ie = 0,
        de = null,
        Oe = null;
      if (null != H) {
        var Xe = H.get(il.DATA_MATRIX_SHAPE);
        null != Xe && (ie = Xe);
        var wt = H.get(il.MIN_SIZE);
        null != wt && (de = wt);
        var Lt = H.get(il.MAX_SIZE);
        null != Lt && (Oe = Lt);
      }
      if (null != H && H.has(il.DATA_MATRIX_COMPACT) && Boolean(H.get(il.DATA_MATRIX_COMPACT).toString())) {
        var Hi = H.has(il.GS1_FORMAT) && Boolean(H.get(il.GS1_FORMAT).toString()),
          no = null;
        H.has(il.CHARACTER_SET) && (no = Sl.forName(H.get(il.CHARACTER_SET).toString())), cn = Nu.encodeHighLevel(r, no, Hi ? 29 : -1, ie);
      } else {
        var zo = null != H && H.has(il.FORCE_C40) && Boolean(H.get(il.FORCE_C40).toString());
        cn = El.encodeHighLevel(r, ie, de, Oe, zo);
      }
      var Bo = df.lookup(cn.length, ie, de, Oe, !0),
        Mr = xp.encodeECC200(cn, Bo),
        Ur = new Yf(Mr, Bo.getSymbolDataWidth(), Bo.getSymbolDataHeight());
      return Ur.place(), this.encodeLowLevel(Ur, Bo, g, S);
    }, p.prototype.encodeLowLevel = function (r, l, g, S) {
      for (var H = l.getSymbolDataWidth(), ie = l.getSymbolDataHeight(), de = new Ha(l.getSymbolWidth(), l.getSymbolHeight()), Oe = 0, Xe = 0; Xe < ie; Xe++) {
        var wt = void 0;
        if (Xe % l.matrixHeight == 0) {
          wt = 0;
          for (var Lt = 0; Lt < l.getSymbolWidth(); Lt++) de.setBoolean(wt, Oe, Lt % 2 == 0), wt++;
          Oe++;
        }
        for (wt = 0, Lt = 0; Lt < H; Lt++) Lt % l.matrixWidth == 0 && (de.setBoolean(wt, Oe, !0), wt++), de.setBoolean(wt, Oe, r.getBit(Lt, Xe)), wt++, Lt % l.matrixWidth == l.matrixWidth - 1 && (de.setBoolean(wt, Oe, Xe % 2 == 0), wt++);
        if (Oe++, Xe % l.matrixHeight == l.matrixHeight - 1) {
          for (wt = 0, Lt = 0; Lt < l.getSymbolWidth(); Lt++) de.setBoolean(wt, Oe, !0), wt++;
          Oe++;
        }
      }
      return this.convertByteMatrixToBitMatrix(de, g, S);
    }, p.prototype.convertByteMatrixToBitMatrix = function (r, l, g) {
      var Lt,
        S = r.getWidth(),
        H = r.getHeight(),
        ie = Math.max(l, S),
        de = Math.max(g, H),
        Oe = Math.min(ie / S, de / H),
        Xe = (ie - S * Oe) / 2,
        wt = (de - H * Oe) / 2;
      g < H || l < S ? (Xe = 0, wt = 0, Lt = new co(S, H)) : Lt = new co(l, g), Lt.clear();
      for (var cn = 0, xn = wt; cn < H; cn++, xn += Oe) for (var Hi = 0, no = Xe; Hi < S; Hi++, no += Oe) 1 === r.get(Hi, cn) && Lt.setRegion(no, xn, Oe, Oe);
      return Lt;
    };
  }();
  var Am = function () {
    function p() {}
    return p.prototype.isCompact = function () {
      return this.compact;
    }, p.prototype.setCompact = function (r) {
      this.compact = r;
    }, p.prototype.getSize = function () {
      return this.size;
    }, p.prototype.setSize = function (r) {
      this.size = r;
    }, p.prototype.getLayers = function () {
      return this.layers;
    }, p.prototype.setLayers = function (r) {
      this.layers = r;
    }, p.prototype.getCodeWords = function () {
      return this.codeWords;
    }, p.prototype.setCodeWords = function (r) {
      this.codeWords = r;
    }, p.prototype.getMatrix = function () {
      return this.matrix;
    }, p.prototype.setMatrix = function (r) {
      this.matrix = r;
    }, p;
  }();
  const hh = Am;
  var wp = function () {
    function p() {}
    return p.singletonList = function (r) {
      return [r];
    }, p.min = function (r, l) {
      return r.sort(l)[0];
    }, p;
  }();
  const ig = wp;
  var Ig = function () {
    function p(r) {
      this.previous = r;
    }
    return p.prototype.getPrevious = function () {
      return this.previous;
    }, p;
  }();
  const Ou = Ig;
  var v_ = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Lh = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l) || this;
        return H.value = g, H.bitCount = S, H;
      }
      return v_(r, p), r.prototype.appendTo = function (l, g) {
        l.appendBits(this.value, this.bitCount);
      }, r.prototype.add = function (l, g) {
        return new r(this, l, g);
      }, r.prototype.addBinaryShift = function (l, g) {
        return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new r(this, l, g);
      }, r.prototype.toString = function () {
        var l = this.value & (1 << this.bitCount) - 1;
        return "<" + We.toBinaryString((l |= 1 << this.bitCount) | 1 << this.bitCount).substring(1) + ">";
      }, r;
    }(Ou);
  const ff = Lh;
  var og = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) S.hasOwnProperty(H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    rg = function (p) {
      function r(l, g, S) {
        var H = p.call(this, l, 0, 0) || this;
        return H.binaryShiftStart = g, H.binaryShiftByteCount = S, H;
      }
      return og(r, p), r.prototype.appendTo = function (l, g) {
        for (var S = 0; S < this.binaryShiftByteCount; S++) (0 === S || 31 === S && this.binaryShiftByteCount <= 62) && (l.appendBits(31, 5), this.binaryShiftByteCount > 62 ? l.appendBits(this.binaryShiftByteCount - 31, 16) : l.appendBits(0 === S ? Math.min(this.binaryShiftByteCount, 31) : this.binaryShiftByteCount - 31, 5)), l.appendBits(g[this.binaryShiftStart + S], 8);
      }, r.prototype.addBinaryShift = function (l, g) {
        return new r(this, l, g);
      }, r.prototype.toString = function () {
        return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
      }, r;
    }(ff);
  const gs = rg;
  function mf(p, r, l) {
    return new ff(p, r, l);
  }
  var Mp = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
    dd = new ff(null, 0, 0),
    fh = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])],
    sg = function Tp(p) {
      var r, l;
      try {
        for (var g = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(p), S = g.next(); !S.done; S = g.next()) qe.fill(S.value, -1);
      } catch (ie) {
        r = {
          error: ie
        };
      } finally {
        try {
          S && !S.done && (l = g.return) && l.call(g);
        } finally {
          if (r) throw r.error;
        }
      }
      return p[0][4] = 0, p[1][4] = 0, p[1][0] = 28, p[3][4] = 0, p[2][4] = 0, p[2][0] = 15, p;
    }(qe.createInt32Array(6, 6)),
    $f = function () {
      function p(r, l, g, S) {
        this.token = r, this.mode = l, this.binaryShiftByteCount = g, this.bitCount = S;
      }
      return p.prototype.getMode = function () {
        return this.mode;
      }, p.prototype.getToken = function () {
        return this.token;
      }, p.prototype.getBinaryShiftByteCount = function () {
        return this.binaryShiftByteCount;
      }, p.prototype.getBitCount = function () {
        return this.bitCount;
      }, p.prototype.latchAndAppend = function (r, l) {
        var g = this.bitCount,
          S = this.token;
        if (r !== this.mode) {
          var H = fh[this.mode][r];
          S = mf(S, 65535 & H, H >> 16), g += H >> 16;
        }
        var ie = 2 === r ? 4 : 5;
        return new p(S = mf(S, l, ie), r, 0, g + ie);
      }, p.prototype.shiftAndAppend = function (r, l) {
        var g = this.token,
          S = 2 === this.mode ? 4 : 5;
        return g = mf(g, sg[this.mode][r], S), new p(g = mf(g, l, 5), this.mode, 0, this.bitCount + S + 5);
      }, p.prototype.addBinaryShiftChar = function (r) {
        var l = this.token,
          g = this.mode,
          S = this.bitCount;
        if (4 === this.mode || 2 === this.mode) {
          var H = fh[g][0];
          l = mf(l, 65535 & H, H >> 16), S += H >> 16, g = 0;
        }
        var de = new p(l, g, this.binaryShiftByteCount + 1, S + (0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8));
        return 2078 === de.binaryShiftByteCount && (de = de.endBinaryShift(r + 1)), de;
      }, p.prototype.endBinaryShift = function (r) {
        if (0 === this.binaryShiftByteCount) return this;
        var l = this.token;
        return l = function ud(p, r, l) {
          return new gs(p, r, l);
        }(l, r - this.binaryShiftByteCount, this.binaryShiftByteCount), new p(l, this.mode, 0, this.bitCount);
      }, p.prototype.isBetterThanOrEqualTo = function (r) {
        var l = this.bitCount + (fh[this.mode][r.mode] >> 16);
        return this.binaryShiftByteCount < r.binaryShiftByteCount ? l += p.calculateBinaryShiftCost(r) - p.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > r.binaryShiftByteCount && r.binaryShiftByteCount > 0 && (l += 10), l <= r.bitCount;
      }, p.prototype.toBitArray = function (r) {
        for (var l, g, S = [], H = this.endBinaryShift(r.length).token; null !== H; H = H.getPrevious()) S.unshift(H);
        var ie = new st();
        try {
          for (var de = function (p) {
              var r = "function" == typeof Symbol && Symbol.iterator,
                l = r && p[r],
                g = 0;
              if (l) return l.call(p);
              if (p && "number" == typeof p.length) return {
                next: function () {
                  return p && g >= p.length && (p = void 0), {
                    value: p && p[g++],
                    done: !p
                  };
                }
              };
              throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(S), Oe = de.next(); !Oe.done; Oe = de.next()) Oe.value.appendTo(ie, r);
        } catch (wt) {
          l = {
            error: wt
          };
        } finally {
          try {
            Oe && !Oe.done && (g = de.return) && g.call(de);
          } finally {
            if (l) throw l.error;
          }
        }
        return ie;
      }, p.prototype.toString = function () {
        return Nn.format("%s bits=%d bytes=%d", Mp[this.mode], this.bitCount, this.binaryShiftByteCount);
      }, p.calculateBinaryShiftCost = function (r) {
        return r.binaryShiftByteCount > 62 ? 21 : r.binaryShiftByteCount > 31 ? 20 : r.binaryShiftByteCount > 0 ? 10 : 0;
      }, p.INITIAL_STATE = new p(dd, 0, 0, 0), p;
    }();
  const ag = $f;
  var $p = function gf(p) {
      var r = Nn.getCharCode(" "),
        l = Nn.getCharCode("."),
        g = Nn.getCharCode(",");
      p[0][r] = 1;
      for (var S = Nn.getCharCode("Z"), H = Nn.getCharCode("A"), ie = H; ie <= S; ie++) p[0][ie] = ie - H + 2;
      p[1][r] = 1;
      var de = Nn.getCharCode("z"),
        Oe = Nn.getCharCode("a");
      for (ie = Oe; ie <= de; ie++) p[1][ie] = ie - Oe + 2;
      p[2][r] = 1;
      var Xe = Nn.getCharCode("9"),
        wt = Nn.getCharCode("0");
      for (ie = wt; ie <= Xe; ie++) p[2][ie] = ie - wt + 2;
      p[2][g] = 12, p[2][l] = 13;
      for (var Lt = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""], cn = 0; cn < Lt.length; cn++) p[3][Nn.getCharCode(Lt[cn])] = cn;
      var xn = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
      for (cn = 0; cn < xn.length; cn++) Nn.getCharCode(xn[cn]) > 0 && (p[4][Nn.getCharCode(xn[cn])] = cn);
      return p;
    }(qe.createInt32Array(5, 256)),
    Au = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    rp = function () {
      function p(r) {
        this.text = r;
      }
      return p.prototype.encode = function () {
        for (var r = Nn.getCharCode(" "), l = Nn.getCharCode("\n"), g = ig.singletonList(ag.INITIAL_STATE), S = 0; S < this.text.length; S++) {
          var H = void 0,
            ie = S + 1 < this.text.length ? this.text[S + 1] : 0;
          switch (this.text[S]) {
            case Nn.getCharCode("\r"):
              H = ie === l ? 2 : 0;
              break;
            case Nn.getCharCode("."):
              H = ie === r ? 3 : 0;
              break;
            case Nn.getCharCode(","):
              H = ie === r ? 4 : 0;
              break;
            case Nn.getCharCode(":"):
              H = ie === r ? 5 : 0;
              break;
            default:
              H = 0;
          }
          H > 0 ? (g = p.updateStateListForPair(g, S, H), S++) : g = this.updateStateListForChar(g, S);
        }
        return ig.min(g, function (Oe, Xe) {
          return Oe.getBitCount() - Xe.getBitCount();
        }).toBitArray(this.text);
      }, p.prototype.updateStateListForChar = function (r, l) {
        var g,
          S,
          H = [];
        try {
          for (var ie = Au(r), de = ie.next(); !de.done; de = ie.next()) this.updateStateForChar(de.value, l, H);
        } catch (Xe) {
          g = {
            error: Xe
          };
        } finally {
          try {
            de && !de.done && (S = ie.return) && S.call(ie);
          } finally {
            if (g) throw g.error;
          }
        }
        return p.simplifyStates(H);
      }, p.prototype.updateStateForChar = function (r, l, g) {
        for (var S = 255 & this.text[l], H = $p[r.getMode()][S] > 0, ie = null, de = 0; de <= 4; de++) {
          var Oe = $p[de][S];
          if (Oe > 0) {
            if (null == ie && (ie = r.endBinaryShift(l)), !H || de === r.getMode() || 2 === de) {
              var Xe = ie.latchAndAppend(de, Oe);
              g.push(Xe);
            }
            if (!H && sg[r.getMode()][de] >= 0) {
              var wt = ie.shiftAndAppend(de, Oe);
              g.push(wt);
            }
          }
        }
        if (r.getBinaryShiftByteCount() > 0 || 0 === $p[r.getMode()][S]) {
          var Lt = r.addBinaryShiftChar(l);
          g.push(Lt);
        }
      }, p.updateStateListForPair = function (r, l, g) {
        var S,
          H,
          ie = [];
        try {
          for (var de = Au(r), Oe = de.next(); !Oe.done; Oe = de.next()) this.updateStateForPair(Oe.value, l, g, ie);
        } catch (wt) {
          S = {
            error: wt
          };
        } finally {
          try {
            Oe && !Oe.done && (H = de.return) && H.call(de);
          } finally {
            if (S) throw S.error;
          }
        }
        return this.simplifyStates(ie);
      }, p.updateStateForPair = function (r, l, g, S) {
        var H = r.endBinaryShift(l);
        if (S.push(H.latchAndAppend(4, g)), 4 !== r.getMode() && S.push(H.shiftAndAppend(4, g)), 3 === g || 4 === g) {
          var ie = H.latchAndAppend(2, 16 - g).latchAndAppend(2, 1);
          S.push(ie);
        }
        if (r.getBinaryShiftByteCount() > 0) {
          var de = r.addBinaryShiftChar(l).addBinaryShiftChar(l + 1);
          S.push(de);
        }
      }, p.simplifyStates = function (r) {
        var l,
          g,
          S,
          H,
          ie = [];
        try {
          for (var de = Au(r), Oe = de.next(); !Oe.done; Oe = de.next()) {
            var Xe = Oe.value,
              wt = !0,
              Lt = function (Ho) {
                if (Ho.isBetterThanOrEqualTo(Xe)) return wt = !1, "break";
                Xe.isBetterThanOrEqualTo(Ho) && (ie = ie.filter(function (zo) {
                  return zo !== Ho;
                }));
              };
            try {
              for (var cn = (S = void 0, Au(ie)), xn = cn.next(); !xn.done && "break" !== Lt(xn.value); xn = cn.next());
            } catch (Ho) {
              S = {
                error: Ho
              };
            } finally {
              try {
                xn && !xn.done && (H = cn.return) && H.call(cn);
              } finally {
                if (S) throw S.error;
              }
            }
            wt && ie.push(Xe);
          }
        } catch (Ho) {
          l = {
            error: Ho
          };
        } finally {
          try {
            Oe && !Oe.done && (g = de.return) && g.call(de);
          } finally {
            if (l) throw l.error;
          }
        }
        return ie;
      }, p;
    }();
  const Od = rp;
  var y_ = function () {
    function p() {}
    return p.encodeBytes = function (r) {
      return p.encode(r, p.DEFAULT_EC_PERCENT, p.DEFAULT_AZTEC_LAYERS);
    }, p.encode = function (r, l, g) {
      var de,
        Oe,
        Xe,
        wt,
        Lt,
        S = new Od(r).encode(),
        H = We.truncDivision(S.getSize() * l, 100) + 11,
        ie = S.getSize() + H;
      if (g !== p.DEFAULT_AZTEC_LAYERS) {
        if (de = g < 0, (Oe = Math.abs(g)) > (de ? p.MAX_NB_BITS_COMPACT : p.MAX_NB_BITS)) throw new y(Nn.format("Illegal value %s for layers", g));
        var cn = (Xe = p.totalBitsInLayer(Oe, de)) - Xe % (wt = p.WORD_SIZE[Oe]);
        if ((Lt = p.stuffBits(S, wt)).getSize() + H > cn) throw new y("Data to large for user specified layer");
        if (de && Lt.getSize() > 64 * wt) throw new y("Data to large for user specified layer");
      } else {
        wt = 0, Lt = null;
        for (var xn = 0;; xn++) {
          if (xn > p.MAX_NB_BITS) throw new y("Data too large for an Aztec code");
          if (!(ie > (Xe = p.totalBitsInLayer(Oe = (de = xn <= 3) ? xn + 1 : xn, de))) && ((null == Lt || wt !== p.WORD_SIZE[Oe]) && (Lt = p.stuffBits(S, wt = p.WORD_SIZE[Oe])), cn = Xe - Xe % wt, !(de && Lt.getSize() > 64 * wt) && Lt.getSize() + H <= cn)) break;
        }
      }
      var Mr,
        Hi = p.generateCheckWords(Lt, Xe, wt),
        no = Lt.getSize() / wt,
        Ho = p.generateModeMessage(de, Oe, no),
        zo = (de ? 11 : 14) + 4 * Oe,
        Bo = new Int32Array(zo);
      if (de) for (Mr = zo, xn = 0; xn < Bo.length; xn++) Bo[xn] = xn;else {
        Mr = zo + 1 + 2 * We.truncDivision(We.truncDivision(zo, 2) - 1, 15);
        var Ur = We.truncDivision(zo, 2),
          ls = We.truncDivision(Mr, 2);
        for (xn = 0; xn < Ur; xn++) {
          var Ss = xn + We.truncDivision(xn, 15);
          Bo[Ur - xn - 1] = ls - Ss - 1, Bo[Ur + xn] = ls + Ss + 1;
        }
      }
      for (var Is = new co(Mr), Ys = (xn = 0, 0); xn < Oe; xn++) {
        for (var Sa = 4 * (Oe - xn) + (de ? 9 : 12), el = 0; el < Sa; el++) for (var tu = 2 * el, Ql = 0; Ql < 2; Ql++) Hi.get(Ys + tu + Ql) && Is.set(Bo[2 * xn + Ql], Bo[2 * xn + el]), Hi.get(Ys + 2 * Sa + tu + Ql) && Is.set(Bo[2 * xn + el], Bo[zo - 1 - 2 * xn - Ql]), Hi.get(Ys + 4 * Sa + tu + Ql) && Is.set(Bo[zo - 1 - 2 * xn - Ql], Bo[zo - 1 - 2 * xn - el]), Hi.get(Ys + 6 * Sa + tu + Ql) && Is.set(Bo[zo - 1 - 2 * xn - el], Bo[2 * xn + Ql]);
        Ys += 8 * Sa;
      }
      if (p.drawModeMessage(Is, de, Mr, Ho), de) p.drawBullsEye(Is, We.truncDivision(Mr, 2), 5);else for (p.drawBullsEye(Is, We.truncDivision(Mr, 2), 7), xn = 0, el = 0; xn < We.truncDivision(zo, 2) - 1; xn += 15, el += 16) for (Ql = 1 & We.truncDivision(Mr, 2); Ql < Mr; Ql += 2) Is.set(We.truncDivision(Mr, 2) - el, Ql), Is.set(We.truncDivision(Mr, 2) + el, Ql), Is.set(Ql, We.truncDivision(Mr, 2) - el), Is.set(Ql, We.truncDivision(Mr, 2) + el);
      var pu = new hh();
      return pu.setCompact(de), pu.setSize(Mr), pu.setLayers(Oe), pu.setCodeWords(no), pu.setMatrix(Is), pu;
    }, p.drawBullsEye = function (r, l, g) {
      for (var S = 0; S < g; S += 2) for (var H = l - S; H <= l + S; H++) r.set(H, l - S), r.set(H, l + S), r.set(l - S, H), r.set(l + S, H);
      r.set(l - g, l - g), r.set(l - g + 1, l - g), r.set(l - g, l - g + 1), r.set(l + g, l - g), r.set(l + g, l - g + 1), r.set(l + g, l + g - 1);
    }, p.generateModeMessage = function (r, l, g) {
      var S = new st();
      return r ? (S.appendBits(l - 1, 2), S.appendBits(g - 1, 6), S = p.generateCheckWords(S, 28, 4)) : (S.appendBits(l - 1, 5), S.appendBits(g - 1, 11), S = p.generateCheckWords(S, 40, 4)), S;
    }, p.drawModeMessage = function (r, l, g, S) {
      var H = We.truncDivision(g, 2);
      if (l) for (var ie = 0; ie < 7; ie++) {
        var de = H - 3 + ie;
        S.get(ie) && r.set(de, H - 5), S.get(ie + 7) && r.set(H + 5, de), S.get(20 - ie) && r.set(de, H + 5), S.get(27 - ie) && r.set(H - 5, de);
      } else for (ie = 0; ie < 10; ie++) de = H - 5 + ie + We.truncDivision(ie, 5), S.get(ie) && r.set(de, H - 7), S.get(ie + 10) && r.set(H + 7, de), S.get(29 - ie) && r.set(de, H + 7), S.get(39 - ie) && r.set(H - 7, de);
    }, p.generateCheckWords = function (r, l, g) {
      var S,
        H,
        ie = r.getSize() / g,
        de = new ad(p.getGF(g)),
        Oe = We.truncDivision(l, g),
        Xe = p.bitsToWords(r, g, Oe);
      de.encode(Xe, Oe - ie);
      var wt = l % g,
        Lt = new st();
      Lt.appendBits(0, wt);
      try {
        for (var cn = function (p) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              l = r && p[r],
              g = 0;
            if (l) return l.call(p);
            if (p && "number" == typeof p.length) return {
              next: function () {
                return p && g >= p.length && (p = void 0), {
                  value: p && p[g++],
                  done: !p
                };
              }
            };
            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }(Array.from(Xe)), xn = cn.next(); !xn.done; xn = cn.next()) Lt.appendBits(xn.value, g);
      } catch (no) {
        S = {
          error: no
        };
      } finally {
        try {
          xn && !xn.done && (H = cn.return) && H.call(cn);
        } finally {
          if (S) throw S.error;
        }
      }
      return Lt;
    }, p.bitsToWords = function (r, l, g) {
      var H,
        ie,
        S = new Int32Array(g);
      for (H = 0, ie = r.getSize() / l; H < ie; H++) {
        for (var de = 0, Oe = 0; Oe < l; Oe++) de |= r.get(H * l + Oe) ? 1 << l - Oe - 1 : 0;
        S[H] = de;
      }
      return S;
    }, p.getGF = function (r) {
      switch (r) {
        case 4:
          return ki.AZTEC_PARAM;
        case 6:
          return ki.AZTEC_DATA_6;
        case 8:
          return ki.AZTEC_DATA_8;
        case 10:
          return ki.AZTEC_DATA_10;
        case 12:
          return ki.AZTEC_DATA_12;
        default:
          throw new y("Unsupported word size " + r);
      }
    }, p.stuffBits = function (r, l) {
      for (var g = new st(), S = r.getSize(), H = (1 << l) - 2, ie = 0; ie < S; ie += l) {
        for (var de = 0, Oe = 0; Oe < l; Oe++) (ie + Oe >= S || r.get(ie + Oe)) && (de |= 1 << l - 1 - Oe);
        (de & H) === H ? (g.appendBits(de & H, l), ie--) : de & H ? g.appendBits(de, l) : (g.appendBits(1 | de, l), ie--);
      }
      return g;
    }, p.totalBitsInLayer = function (r, l) {
      return ((l ? 88 : 112) + 16 * r) * r;
    }, p.DEFAULT_EC_PERCENT = 33, p.DEFAULT_AZTEC_LAYERS = 0, p.MAX_NB_BITS = 32, p.MAX_NB_BITS_COMPACT = 4, p.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]), p;
  }();
  const Im = y_;
  !function () {
    function p() {}
    p.prototype.encode = function (r, l, g, S) {
      return this.encodeWithHints(r, l, g, S, null);
    }, p.prototype.encodeWithHints = function (r, l, g, S, H) {
      var ie = Hp.ISO_8859_1,
        de = Im.DEFAULT_EC_PERCENT,
        Oe = Im.DEFAULT_AZTEC_LAYERS;
      return null != H && (H.has(il.CHARACTER_SET) && (ie = Sl.forName(H.get(il.CHARACTER_SET).toString())), H.has(il.ERROR_CORRECTION) && (de = We.parseInt(H.get(il.ERROR_CORRECTION).toString())), H.has(il.AZTEC_LAYERS) && (Oe = We.parseInt(H.get(il.AZTEC_LAYERS).toString()))), p.encodeLayers(r, l, g, S, ie, de, Oe);
    }, p.encodeLayers = function (r, l, g, S, H, ie, de) {
      if (l !== qo.AZTEC) throw new y("Can only encode AZTEC, but got " + l);
      var Oe = Im.encode(Nn.getBytes(r, H), ie, de);
      return p.renderResult(Oe, g, S);
    }, p.renderResult = function (r, l, g) {
      var S = r.getMatrix();
      if (null == S) throw new Sr();
      for (var H = S.getWidth(), ie = S.getHeight(), de = Math.max(l, H), Oe = Math.max(g, ie), Xe = Math.min(de / H, Oe / ie), wt = (de - H * Xe) / 2, Lt = (Oe - ie * Xe) / 2, cn = new co(de, Oe), xn = 0, Hi = Lt; xn < ie; xn++, Hi += Xe) for (var no = 0, Ho = wt; no < H; no++, Ho += Xe) S.get(no, xn) && cn.setRegion(Ho, Hi, Xe, Xe);
      return cn;
    };
  }();
  var Lg = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    kg = function (p) {
      function r(l) {
        var g = p.call(this, l.width, l.height) || this;
        return g.canvas = l, g.tempCanvasElement = null, g.buffer = r.makeBufferFromCanvasImageData(l), g;
      }
      return Lg(r, p), r.makeBufferFromCanvasImageData = function (l) {
        var g;
        try {
          g = l.getContext("2d", {
            willReadFrequently: !0
          });
        } catch {
          g = l.getContext("2d");
        }
        if (!g) throw new Error("Couldn't get canvas context.");
        var S = g.getImageData(0, 0, l.width, l.height);
        return r.toGrayscaleBuffer(S.data, l.width, l.height);
      }, r.toGrayscaleBuffer = function (l, g, S) {
        for (var H = new Uint8ClampedArray(g * S), ie = 0, de = 0, Oe = l.length; ie < Oe; ie += 4, de++) {
          H[de] = 0 === l[ie + 3] ? 255 : 306 * l[ie] + 601 * l[ie + 1] + 117 * l[ie + 2] + 512 >> 10;
        }
        return H;
      }, r.prototype.getRow = function (l, g) {
        if (l < 0 || l >= this.getHeight()) throw new y("Requested row is outside the image: " + l);
        var S = this.getWidth(),
          H = l * S;
        return null === g ? g = this.buffer.slice(H, H + S) : (g.length < S && (g = new Uint8ClampedArray(S)), g.set(this.buffer.slice(H, H + S))), g;
      }, r.prototype.getMatrix = function () {
        return this.buffer;
      }, r.prototype.isCropSupported = function () {
        return !0;
      }, r.prototype.crop = function (l, g, S, H) {
        return p.prototype.crop.call(this, l, g, S, H), this;
      }, r.prototype.isRotateSupported = function () {
        return !0;
      }, r.prototype.rotateCounterClockwise = function () {
        return this.rotate(-90), this;
      }, r.prototype.rotateCounterClockwise45 = function () {
        return this.rotate(-45), this;
      }, r.prototype.invert = function () {
        return new In(this);
      }, r.prototype.getTempCanvasElement = function () {
        if (null === this.tempCanvasElement) {
          var l = this.canvas.ownerDocument.createElement("canvas");
          l.width = this.canvas.width, l.height = this.canvas.height, this.tempCanvasElement = l;
        }
        return this.tempCanvasElement;
      }, r.prototype.rotate = function (l) {
        var g = this.getTempCanvasElement();
        if (!g) throw new Error("Could not create a Canvas element.");
        var S = l * r.DEGREE_TO_RADIANS,
          H = this.canvas.width,
          ie = this.canvas.height,
          de = Math.ceil(Math.abs(Math.cos(S)) * H + Math.abs(Math.sin(S)) * ie),
          Oe = Math.ceil(Math.abs(Math.sin(S)) * H + Math.abs(Math.cos(S)) * ie);
        g.width = de, g.height = Oe;
        var Xe = g.getContext("2d");
        if (!Xe) throw new Error("Could not create a Canvas Context element.");
        return Xe.translate(de / 2, Oe / 2), Xe.rotate(S), Xe.drawImage(this.canvas, H / -2, ie / -2), this.buffer = r.makeBufferFromCanvasImageData(g), this;
      }, r.DEGREE_TO_RADIANS = Math.PI / 180, r;
    }($t);
  function Kf() {
    return typeof navigator < "u";
  }
  var kh = function () {
      return kh = Object.assign || function (p) {
        for (var r, l = 1, g = arguments.length; l < g; l++) for (var S in r = arguments[l]) Object.prototype.hasOwnProperty.call(r, S) && (p[S] = r[S]);
        return p;
      }, kh.apply(this, arguments);
    },
    Nl = function (p, r, l, g) {
      return new (l || (l = Promise))(function (H, ie) {
        function de(wt) {
          try {
            Xe(g.next(wt));
          } catch (Lt) {
            ie(Lt);
          }
        }
        function Oe(wt) {
          try {
            Xe(g.throw(wt));
          } catch (Lt) {
            ie(Lt);
          }
        }
        function Xe(wt) {
          wt.done ? H(wt.value) : function S(H) {
            return H instanceof l ? H : new l(function (ie) {
              ie(H);
            });
          }(wt.value).then(de, Oe);
        }
        Xe((g = g.apply(p, r || [])).next());
      });
    },
    Cu = function (p, r) {
      var g,
        S,
        H,
        ie,
        l = {
          label: 0,
          sent: function () {
            if (1 & H[0]) throw H[1];
            return H[1];
          },
          trys: [],
          ops: []
        };
      return ie = {
        next: de(0),
        throw: de(1),
        return: de(2)
      }, "function" == typeof Symbol && (ie[Symbol.iterator] = function () {
        return this;
      }), ie;
      function de(Xe) {
        return function (wt) {
          return function Oe(Xe) {
            if (g) throw new TypeError("Generator is already executing.");
            for (; l;) try {
              if (g = 1, S && (H = 2 & Xe[0] ? S.return : Xe[0] ? S.throw || ((H = S.return) && H.call(S), 0) : S.next) && !(H = H.call(S, Xe[1])).done) return H;
              switch (S = 0, H && (Xe = [2 & Xe[0], H.value]), Xe[0]) {
                case 0:
                case 1:
                  H = Xe;
                  break;
                case 4:
                  return l.label++, {
                    value: Xe[1],
                    done: !1
                  };
                case 5:
                  l.label++, S = Xe[1], Xe = [0];
                  continue;
                case 7:
                  Xe = l.ops.pop(), l.trys.pop();
                  continue;
                default:
                  if (!(H = (H = l.trys).length > 0 && H[H.length - 1]) && (6 === Xe[0] || 2 === Xe[0])) {
                    l = 0;
                    continue;
                  }
                  if (3 === Xe[0] && (!H || Xe[1] > H[0] && Xe[1] < H[3])) {
                    l.label = Xe[1];
                    break;
                  }
                  if (6 === Xe[0] && l.label < H[1]) {
                    l.label = H[1], H = Xe;
                    break;
                  }
                  if (H && l.label < H[2]) {
                    l.label = H[2], l.ops.push(Xe);
                    break;
                  }
                  H[2] && l.ops.pop(), l.trys.pop();
                  continue;
              }
              Xe = r.call(p, l);
            } catch (wt) {
              Xe = [6, wt], S = 0;
            } finally {
              g = H = 0;
            }
            if (5 & Xe[0]) throw Xe[1];
            return {
              value: Xe[0] ? Xe[1] : void 0,
              done: !0
            };
          }([Xe, wt]);
        };
      }
    },
    Lm = function (p) {
      var r = "function" == typeof Symbol && Symbol.iterator,
        l = r && p[r],
        g = 0;
      if (l) return l.call(p);
      if (p && "number" == typeof p.length) return {
        next: function () {
          return p && g >= p.length && (p = void 0), {
            value: p && p[g++],
            done: !p
          };
        }
      };
      throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Rh = {
      delayBetweenScanAttempts: 500,
      delayBetweenScanSuccess: 500,
      tryPlayVideoTimeout: 5e3
    },
    Ep = function () {
      function p(r, l, g) {
        void 0 === l && (l = new Map()), void 0 === g && (g = {}), this.reader = r, this.hints = l, this.options = kh(kh({}, Rh), g);
      }
      return Object.defineProperty(p.prototype, "possibleFormats", {
        set: function (r) {
          this.hints.set(mt.POSSIBLE_FORMATS, r);
        },
        enumerable: !1,
        configurable: !0
      }), p.addVideoSource = function (r, l) {
        try {
          r.srcObject = l;
        } catch {
          console.error("got interrupted by new loading request");
        }
      }, p.mediaStreamSetTorch = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, r.applyConstraints({
                  advanced: [{
                    fillLightMode: l ? "flash" : "off",
                    torch: !!l
                  }]
                })];
              case 1:
                return g.sent(), [2];
            }
          });
        });
      }, p.mediaStreamIsTorchCompatible = function (r) {
        var l,
          g,
          S = r.getVideoTracks();
        try {
          for (var H = Lm(S), ie = H.next(); !ie.done; ie = H.next()) if (p.mediaStreamIsTorchCompatibleTrack(ie.value)) return !0;
        } catch (Oe) {
          l = {
            error: Oe
          };
        } finally {
          try {
            ie && !ie.done && (g = H.return) && g.call(H);
          } finally {
            if (l) throw l.error;
          }
        }
        return !1;
      }, p.mediaStreamIsTorchCompatibleTrack = function (r) {
        try {
          return "torch" in r.getCapabilities();
        } catch (g) {
          return console.error(g), console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."), !1;
        }
      }, p.isVideoPlaying = function (r) {
        return r.currentTime > 0 && !r.paused && r.readyState > 2;
      }, p.getMediaElement = function (r, l) {
        var g = document.getElementById(r);
        if (!g) throw new T("element with id '".concat(r, "' not found"));
        if (g.nodeName.toLowerCase() !== l.toLowerCase()) throw new T("element with id '".concat(r, "' must be an ").concat(l, " element"));
        return g;
      }, p.createVideoElement = function (r) {
        if (r instanceof HTMLVideoElement) return r;
        if ("string" == typeof r) return p.getMediaElement(r, "video");
        if (!r && typeof document < "u") {
          var l = document.createElement("video");
          return l.width = 200, l.height = 200, l;
        }
        throw new Error("Couldn't get videoElement from videoSource!");
      }, p.prepareImageElement = function (r) {
        if (r instanceof HTMLImageElement) return r;
        if ("string" == typeof r) return p.getMediaElement(r, "img");
        if (typeof r > "u") {
          var l = document.createElement("img");
          return l.width = 200, l.height = 200, l;
        }
        throw new Error("Couldn't get imageElement from imageSource!");
      }, p.prepareVideoElement = function (r) {
        var l = p.createVideoElement(r);
        return l.setAttribute("autoplay", "true"), l.setAttribute("muted", "true"), l.setAttribute("playsinline", "true"), l;
      }, p.isImageLoaded = function (r) {
        return !(!r.complete || 0 === r.naturalWidth);
      }, p.createBinaryBitmapFromCanvas = function (r) {
        var l = new kg(r),
          g = new li(l);
        return new W(g);
      }, p.drawImageOnCanvas = function (r, l) {
        r.drawImage(l, 0, 0);
      }, p.getMediaElementDimensions = function (r) {
        if (r instanceof HTMLVideoElement) return {
          height: r.videoHeight,
          width: r.videoWidth
        };
        if (r instanceof HTMLImageElement) return {
          height: r.naturalHeight || r.height,
          width: r.naturalWidth || r.width
        };
        throw new Error("Couldn't find the Source's dimensions!");
      }, p.createCaptureCanvas = function (r) {
        if (!r) throw new T("Cannot create a capture canvas without a media element.");
        if (typeof document > "u") throw new Error("The page \"Document\" is undefined, make sure you're running in a browser.");
        var l = document.createElement("canvas"),
          g = p.getMediaElementDimensions(r),
          S = g.width,
          H = g.height;
        return l.style.width = S + "px", l.style.height = H + "px", l.width = S, l.height = H, l;
      }, p.tryPlayVideo = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                if (r?.ended) return console.error("Trying to play video that has ended."), [2, !1];
                if (p.isVideoPlaying(r)) return console.warn("Trying to play video that is already playing."), [2, !0];
                g.label = 1;
              case 1:
                return g.trys.push([1, 3,, 4]), [4, r.play()];
              case 2:
                return g.sent(), [2, !0];
              case 3:
                return l = g.sent(), console.warn("It was not possible to play the video.", l), [2, !1];
              case 4:
                return [2];
            }
          });
        });
      }, p.createCanvasFromMediaElement = function (r) {
        var l = p.createCaptureCanvas(r),
          g = l.getContext("2d");
        if (!g) throw new Error("Couldn't find Canvas 2D Context.");
        return p.drawImageOnCanvas(g, r), l;
      }, p.createBinaryBitmapFromMediaElem = function (r) {
        var l = p.createCanvasFromMediaElement(r);
        return p.createBinaryBitmapFromCanvas(l);
      }, p.destroyImageElement = function (r) {
        r.src = "", r.removeAttribute("src"), r = void 0;
      }, p.listVideoInputDevices = function () {
        return Nl(this, void 0, void 0, function () {
          var r, l, g, S, H, ie, de, Oe, Lt, cn;
          return Cu(this, function (xn) {
            switch (xn.label) {
              case 0:
                if (!Kf()) throw new Error("Can't enumerate devices, navigator is not present.");
                if (!function mh() {
                  return !(!function Rg() {
                    return Kf() && !!navigator.mediaDevices;
                  }() || !navigator.mediaDevices.enumerateDevices);
                }()) throw new Error("Can't enumerate devices, method not supported.");
                return [4, navigator.mediaDevices.enumerateDevices()];
              case 1:
                r = xn.sent(), l = [];
                try {
                  for (g = Lm(r), S = g.next(); !S.done; S = g.next()) "videoinput" === (ie = "video" === (H = S.value).kind ? "videoinput" : H.kind) && (de = H.deviceId || H.id, Oe = H.label || "Video device ".concat(l.length + 1), l.push({
                    deviceId: de,
                    label: Oe,
                    kind: ie,
                    groupId: H.groupId
                  }));
                } catch (Hi) {
                  Lt = {
                    error: Hi
                  };
                } finally {
                  try {
                    S && !S.done && (cn = g.return) && cn.call(g);
                  } finally {
                    if (Lt) throw Lt.error;
                  }
                }
                return [2, l];
            }
          });
        });
      }, p.findDeviceById = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, p.listVideoInputDevices()];
              case 1:
                return (l = g.sent()) ? [2, l.find(function (S) {
                  return S.deviceId === r;
                })] : [2];
            }
          });
        });
      }, p.cleanVideoSource = function (r) {
        if (r) {
          try {
            r.srcObject = null;
          } catch {
            r.src = "";
          }
          r && r.removeAttribute("src");
        }
      }, p.releaseAllStreams = function () {
        0 !== p.streamTracker.length && p.streamTracker.forEach(function (r) {
          r.getTracks().forEach(function (l) {
            return l.stop();
          });
        }), p.streamTracker = [];
      }, p.playVideoOnLoadAsync = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          return Cu(this, function (S) {
            switch (S.label) {
              case 0:
                return [4, p.tryPlayVideo(r)];
              case 1:
                return S.sent() ? [2, !0] : [2, new Promise(function (H, ie) {
                  var de = setTimeout(function () {
                      p.isVideoPlaying(r) || (ie(!1), r.removeEventListener("canplay", Oe));
                    }, l),
                    Oe = function () {
                      p.tryPlayVideo(r).then(function (Xe) {
                        clearTimeout(de), r.removeEventListener("canplay", Oe), H(Xe);
                      });
                    };
                  r.addEventListener("canplay", Oe);
                })];
            }
          });
        });
      }, p.attachStreamToVideo = function (r, l, g) {
        return void 0 === g && (g = 5e3), Nl(this, void 0, void 0, function () {
          var S;
          return Cu(this, function (H) {
            switch (H.label) {
              case 0:
                return S = p.prepareVideoElement(l), p.addVideoSource(S, r), [4, p.playVideoOnLoadAsync(S, g)];
              case 1:
                return H.sent(), [2, S];
            }
          });
        });
      }, p._waitImageLoad = function (r) {
        return new Promise(function (l, g) {
          var H = setTimeout(function () {
              p.isImageLoaded(r) || (r.removeEventListener("load", ie), g());
            }, 1e4),
            ie = function () {
              clearTimeout(H), r.removeEventListener("load", ie), l();
            };
          r.addEventListener("load", ie);
        });
      }, p.checkCallbackFnOrThrow = function (r) {
        if (!r) throw new T("`callbackFn` is a required parameter, you cannot capture results without it.");
      }, p.disposeMediaStream = function (r) {
        r.getVideoTracks().forEach(function (l) {
          return l.stop();
        }), r = void 0;
      }, p.prototype.decode = function (r) {
        var l = p.createCanvasFromMediaElement(r);
        return this.decodeFromCanvas(l);
      }, p.prototype.decodeBitmap = function (r) {
        return this.reader.decode(r, this.hints);
      }, p.prototype.decodeFromCanvas = function (r) {
        var l = p.createBinaryBitmapFromCanvas(r);
        return this.decodeBitmap(l);
      }, p.prototype.decodeFromImageElement = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                if (!r) throw new T("An image element must be provided.");
                return l = p.prepareImageElement(r), [4, this._decodeOnLoadImage(l)];
              case 1:
                return [2, g.sent()];
            }
          });
        });
      }, p.prototype.decodeFromImageUrl = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                if (!r) throw new T("An URL must be provided.");
                (l = p.prepareImageElement()).src = r, g.label = 1;
              case 1:
                return g.trys.push([1,, 3, 4]), [4, this.decodeFromImageElement(l)];
              case 2:
                return [2, g.sent()];
              case 3:
                return p.destroyImageElement(l), [7];
              case 4:
                return [2];
            }
          });
        });
      }, p.prototype.decodeFromConstraints = function (r, l, g) {
        return Nl(this, void 0, void 0, function () {
          var S, H;
          return Cu(this, function (ie) {
            switch (ie.label) {
              case 0:
                return p.checkCallbackFnOrThrow(g), [4, this.getUserMedia(r)];
              case 1:
                S = ie.sent(), ie.label = 2;
              case 2:
                return ie.trys.push([2, 4,, 5]), [4, this.decodeFromStream(S, l, g)];
              case 3:
                return [2, ie.sent()];
              case 4:
                throw H = ie.sent(), p.disposeMediaStream(S), H;
              case 5:
                return [2];
            }
          });
        });
      }, p.prototype.decodeFromStream = function (r, l, g) {
        return Nl(this, void 0, void 0, function () {
          var H,
            de,
            Oe,
            Xe,
            Lt,
            cn,
            xn = this;
          return Cu(this, function (Hi) {
            switch (Hi.label) {
              case 0:
                return p.checkCallbackFnOrThrow(g), [4, p.attachStreamToVideo(r, l, this.options.tryPlayVideoTimeout)];
              case 1:
                return H = Hi.sent(), de = this.scan(H, g, function () {
                  p.disposeMediaStream(r), p.cleanVideoSource(H);
                }), Oe = r.getVideoTracks(), Xe = kh(kh({}, de), {
                  stop: function () {
                    de.stop();
                  },
                  streamVideoConstraintsApply: function (no, Ho) {
                    return Nl(this, void 0, void 0, function () {
                      var zo, Bo, Mr, ls, Ss, Is;
                      return Cu(this, function (Ys) {
                        switch (Ys.label) {
                          case 0:
                            zo = Ho ? Oe.filter(Ho) : Oe, Ys.label = 1;
                          case 1:
                            Ys.trys.push([1, 6, 7, 8]), Bo = Lm(zo), Mr = Bo.next(), Ys.label = 2;
                          case 2:
                            return Mr.done ? [3, 5] : [4, Mr.value.applyConstraints(no)];
                          case 3:
                            Ys.sent(), Ys.label = 4;
                          case 4:
                            return Mr = Bo.next(), [3, 2];
                          case 5:
                            return [3, 8];
                          case 6:
                            return ls = Ys.sent(), Ss = {
                              error: ls
                            }, [3, 8];
                          case 7:
                            try {
                              Mr && !Mr.done && (Is = Bo.return) && Is.call(Bo);
                            } finally {
                              if (Ss) throw Ss.error;
                            }
                            return [7];
                          case 8:
                            return [2];
                        }
                      });
                    });
                  },
                  streamVideoConstraintsGet: function (no) {
                    return Oe.find(no).getConstraints();
                  },
                  streamVideoSettingsGet: function (no) {
                    return Oe.find(no).getSettings();
                  },
                  streamVideoCapabilitiesGet: function (no) {
                    return Oe.find(no).getCapabilities();
                  }
                }), p.mediaStreamIsTorchCompatible(r) && (Lt = Oe?.find(function (no) {
                  return p.mediaStreamIsTorchCompatibleTrack(no);
                }), Xe.switchTorch = cn = function (no) {
                  return Nl(xn, void 0, void 0, function () {
                    return Cu(this, function (Ho) {
                      switch (Ho.label) {
                        case 0:
                          return [4, p.mediaStreamSetTorch(Lt, no)];
                        case 1:
                          return Ho.sent(), [2];
                      }
                    });
                  });
                }, Xe.stop = function () {
                  return Nl(xn, void 0, void 0, function () {
                    return Cu(this, function (no) {
                      switch (no.label) {
                        case 0:
                          return de.stop(), [4, cn(!1)];
                        case 1:
                          return no.sent(), [2];
                      }
                    });
                  });
                }), [2, Xe];
            }
          });
        });
      }, p.prototype.decodeFromVideoDevice = function (r, l, g) {
        return Nl(this, void 0, void 0, function () {
          return Cu(this, function (ie) {
            switch (ie.label) {
              case 0:
                return p.checkCallbackFnOrThrow(g), [4, this.decodeFromConstraints({
                  video: r ? {
                    deviceId: {
                      exact: r
                    }
                  } : {
                    facingMode: "environment"
                  }
                }, l, g)];
              case 1:
                return [2, ie.sent()];
            }
          });
        });
      }, p.prototype.decodeFromVideoElement = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          var g;
          return Cu(this, function (H) {
            switch (H.label) {
              case 0:
                if (p.checkCallbackFnOrThrow(l), !r) throw new T("A video element must be provided.");
                return g = p.prepareVideoElement(r), [4, p.playVideoOnLoadAsync(g, this.options.tryPlayVideoTimeout)];
              case 1:
                return H.sent(), [2, this.scan(g, l)];
            }
          });
        });
      }, p.prototype.decodeFromVideoUrl = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          var g, S;
          return Cu(this, function (de) {
            switch (de.label) {
              case 0:
                if (p.checkCallbackFnOrThrow(l), !r) throw new T("An URL must be provided.");
                return (g = p.prepareVideoElement()).src = r, S = function () {
                  p.cleanVideoSource(g);
                }, [4, p.playVideoOnLoadAsync(g, this.options.tryPlayVideoTimeout)];
              case 1:
                return de.sent(), [2, this.scan(g, l, S)];
            }
          });
        });
      }, p.prototype.decodeOnceFromConstraints = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          var g;
          return Cu(this, function (S) {
            switch (S.label) {
              case 0:
                return [4, this.getUserMedia(r)];
              case 1:
                return g = S.sent(), [4, this.decodeOnceFromStream(g, l)];
              case 2:
                return [2, S.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromStream = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          var g, S;
          return Cu(this, function (ie) {
            switch (ie.label) {
              case 0:
                return g = Boolean(l), [4, p.attachStreamToVideo(r, l)];
              case 1:
                S = ie.sent(), ie.label = 2;
              case 2:
                return ie.trys.push([2,, 4, 5]), [4, this.scanOneResult(S)];
              case 3:
                return [2, ie.sent()];
              case 4:
                return g || p.cleanVideoSource(S), [7];
              case 5:
                return [2];
            }
          });
        });
      }, p.prototype.decodeOnceFromVideoDevice = function (r, l) {
        return Nl(this, void 0, void 0, function () {
          return Cu(this, function (H) {
            switch (H.label) {
              case 0:
                return [4, this.decodeOnceFromConstraints({
                  video: r ? {
                    deviceId: {
                      exact: r
                    }
                  } : {
                    facingMode: "environment"
                  }
                }, l)];
              case 1:
                return [2, H.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromVideoElement = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (S) {
            switch (S.label) {
              case 0:
                if (!r) throw new T("A video element must be provided.");
                return l = p.prepareVideoElement(r), [4, p.playVideoOnLoadAsync(l, this.options.tryPlayVideoTimeout)];
              case 1:
                return S.sent(), [4, this.scanOneResult(l)];
              case 2:
                return [2, S.sent()];
            }
          });
        });
      }, p.prototype.decodeOnceFromVideoUrl = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l, g;
          return Cu(this, function (S) {
            switch (S.label) {
              case 0:
                if (!r) throw new T("An URL must be provided.");
                (l = p.prepareVideoElement()).src = r, g = this.decodeOnceFromVideoElement(l), S.label = 1;
              case 1:
                return S.trys.push([1,, 3, 4]), [4, g];
              case 2:
                return [2, S.sent()];
              case 3:
                return p.cleanVideoSource(l), [7];
              case 4:
                return [2];
            }
          });
        });
      }, p.prototype.scanOneResult = function (r, l, g, S) {
        var H = this;
        return void 0 === l && (l = !0), void 0 === g && (g = !0), void 0 === S && (S = !0), new Promise(function (ie, de) {
          H.scan(r, function (Oe, Xe, wt) {
            if (Oe) return ie(Oe), void wt.stop();
            if (Xe) {
              if (Xe instanceof pt && l || Xe instanceof ke && g || Xe instanceof Ft && S) return;
              wt.stop(), de(Xe);
            }
          });
        });
      }, p.prototype.scan = function (r, l, g) {
        var S = this;
        p.checkCallbackFnOrThrow(l);
        var ie,
          H = p.createCaptureCanvas(r);
        try {
          ie = H.getContext("2d", {
            willReadFrequently: !0
          });
        } catch {
          ie = H.getContext("2d");
        }
        if (!ie) throw new Error("Couldn't create canvas for visual element scan.");
        var Xe,
          de = function () {
            ie = void 0, H = void 0;
          },
          Oe = !1,
          Lt = {
            stop: function () {
              Oe = !0, clearTimeout(Xe), de(), g && g();
            }
          },
          cn = function () {
            if (!Oe) try {
              p.drawImageOnCanvas(ie, r);
              var xn = S.decodeFromCanvas(H);
              l(xn, void 0, Lt), Xe = setTimeout(cn, S.options.delayBetweenScanSuccess);
            } catch (zo) {
              if (l(void 0, zo, Lt), zo instanceof ke || zo instanceof Ft || zo instanceof pt) return void (Xe = setTimeout(cn, S.options.delayBetweenScanAttempts));
              de(), g && g(zo);
            }
          };
        return cn(), Lt;
      }, p.prototype._decodeOnLoadImage = function (r) {
        return Nl(this, void 0, void 0, function () {
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                return p.isImageLoaded(r) ? [3, 2] : [4, p._waitImageLoad(r)];
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return [2, this.decode(r)];
            }
          });
        });
      }, p.prototype.getUserMedia = function (r) {
        return Nl(this, void 0, void 0, function () {
          var l;
          return Cu(this, function (g) {
            switch (g.label) {
              case 0:
                return [4, navigator.mediaDevices.getUserMedia(r)];
              case 1:
                return l = g.sent(), p.streamTracker.push(l), [2, l];
            }
          });
        });
      }, p.streamTracker = [], p;
    }(),
    _f = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Fg = (function (p) {
      _f(function r(l, g) {
        return p.call(this, new ws(), l, g) || this;
      }, p);
    }(Ep), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    Ng = (function (p) {
      Fg(function r(l, g) {
        return p.call(this, new Bl(l), l, g) || this;
      }, p);
    }(Ep), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    Rm = (function (p) {
      Ng(function r(l, g) {
        return p.call(this, new sc(), l, g) || this;
      }, p);
    }(Ep), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    vf = function (p) {
      function r(l, g) {
        var S = this,
          H = new _d();
        return H.setHints(l), (S = p.call(this, H, l, g) || this).reader = H, S;
      }
      return Rm(r, p), Object.defineProperty(r.prototype, "possibleFormats", {
        set: function (l) {
          this.hints.set(mt.POSSIBLE_FORMATS, l), this.reader.setHints(this.hints);
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype.decodeBitmap = function (l) {
        return this.reader.decodeWithState(l);
      }, r.prototype.setHints = function (l) {
        this.hints = l, this.reader.setHints(this.hints);
      }, r;
    }(Ep),
    Ug = function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }(),
    Qf = (function (p) {
      Ug(function r(l, g) {
        return p.call(this, new Dc(), l, g) || this;
      }, p);
    }(Ep), function () {
      var p = function (r, l) {
        return (p = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, S) {
          g.__proto__ = S;
        } || function (g, S) {
          for (var H in S) Object.prototype.hasOwnProperty.call(S, H) && (g[H] = S[H]);
        })(r, l);
      };
      return function (r, l) {
        if ("function" != typeof l && null !== l) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        function g() {
          this.constructor = r;
        }
        p(r, l), r.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g());
      };
    }()),
    sp = (function (p) {
      Qf(function r(l, g) {
        return p.call(this, new Ca(), l, g) || this;
      }, p);
    }(Ep), "http://www.w3.org/2000/svg"),
    ap = (function () {
      function p(r) {
        if ("string" == typeof r) {
          var l = document.getElementById(r);
          if (!l) throw new Error("Could not find a Container element with '".concat(r, "'."));
          this.containerElement = l;
        } else this.containerElement = r;
      }
      p.prototype.write = function (r, l, g, S) {
        if (0 === r.length) throw new y("Found empty contents");
        if (l < 0 || g < 0) throw new y("Requested dimensions are too small: " + l + "x" + g);
        var H = S && void 0 !== S.get(il.MARGIN) ? Number.parseInt(S.get(il.MARGIN).toString(), 10) : p.QUIET_ZONE_SIZE,
          ie = this.encode(S, r);
        return this.renderResult(ie, l, g, H);
      }, p.prototype.createSVGElement = function (r, l) {
        var g = document.createElementNS(p.SVG_NS, "svg");
        return g.setAttributeNS(sp, "width", l.toString()), g.setAttributeNS(sp, "height", r.toString()), g;
      }, p.prototype.createSvgPathPlaceholderElement = function (r, l) {
        var g = document.createElementNS(p.SVG_NS, "path");
        return g.setAttributeNS(sp, "d", "M0 0h".concat(r, "v").concat(l, "H0z")), g.setAttributeNS(sp, "fill", "none"), g;
      }, p.prototype.createSvgRectElement = function (r, l, g, S) {
        var H = document.createElementNS(p.SVG_NS, "rect");
        return H.setAttributeNS(sp, "x", r.toString()), H.setAttributeNS(sp, "y", l.toString()), H.setAttributeNS(sp, "height", g.toString()), H.setAttributeNS(sp, "width", S.toString()), H.setAttributeNS(sp, "fill", "#000000"), H;
      }, p.prototype.encode = function (r, l) {
        var g = Pa.L;
        if (r && void 0 !== r.get(il.ERROR_CORRECTION)) {
          var S = r.get(il.ERROR_CORRECTION).toString();
          g = Pa.fromString(S);
        }
        return Up.encode(l, g, r);
      }, p.prototype.renderResult = function (r, l, g, S) {
        var H = r.getMatrix();
        if (null === H) throw new Sr();
        var ie = H.getWidth(),
          de = H.getHeight(),
          Oe = ie + 2 * S,
          Xe = de + 2 * S,
          wt = Math.max(l, Oe),
          Lt = Math.max(g, Xe),
          cn = Math.min(Math.floor(wt / Oe), Math.floor(Lt / Xe)),
          xn = Math.floor((wt - ie * cn) / 2),
          Hi = Math.floor((Lt - de * cn) / 2),
          no = this.createSVGElement(wt, Lt),
          Ho = this.createSvgPathPlaceholderElement(l, g);
        no.appendChild(Ho), this.containerElement.appendChild(no);
        for (var zo = 0, Bo = Hi; zo < de; zo++, Bo += cn) for (var Mr = 0, Ur = xn; Mr < ie; Mr++, Ur += cn) if (1 === H.get(Mr, zo)) {
          var ls = this.createSvgRectElement(Ur, Bo, cn, cn);
          no.appendChild(ls);
        }
        return no;
      }, p.QUIET_ZONE_SIZE = 4, p.SVG_NS = "http://www.w3.org/2000/svg";
    }(), "http://www.w3.org/2000/svg"),
    Hg = (function () {
      function p() {}
      p.prototype.write = function (r, l, g, S) {
        if (0 === r.length) throw new y("Found empty contents");
        if (l < 0 || g < 0) throw new y("Requested dimensions are too small: " + l + "x" + g);
        var H = Pa.L,
          ie = p.QUIET_ZONE_SIZE;
        if (S) {
          if (void 0 !== S.get(il.ERROR_CORRECTION)) {
            var de = S.get(il.ERROR_CORRECTION).toString();
            H = Pa.fromString(de);
          }
          void 0 !== S.get(il.MARGIN) && (ie = Number.parseInt(S.get(il.MARGIN).toString(), 10));
        }
        var Oe = Up.encode(r, H, S);
        return this.renderResult(Oe, l, g, ie);
      }, p.prototype.writeToDom = function (r, l, g, S, H) {
        if ("string" == typeof r) {
          var ie = document.querySelector(r);
          if (!ie) throw new Error("Could no find the target HTML element.");
          r = ie;
        }
        var de = this.write(l, g, S, H);
        r instanceof HTMLElement && r.appendChild(de);
      }, p.prototype.renderResult = function (r, l, g, S) {
        var H = r.getMatrix();
        if (null === H) throw new Sr();
        for (var ie = H.getWidth(), de = H.getHeight(), Oe = ie + 2 * S, Xe = de + 2 * S, wt = Math.max(l, Oe), Lt = Math.max(g, Xe), cn = Math.min(Math.floor(wt / Oe), Math.floor(Lt / Xe)), xn = Math.floor((wt - ie * cn) / 2), Hi = Math.floor((Lt - de * cn) / 2), no = this.createSVGElement(wt, Lt), Ho = 0, zo = Hi; Ho < de; Ho++, zo += cn) for (var Bo = 0, Mr = xn; Bo < ie; Bo++, Mr += cn) if (1 === H.get(Bo, Ho)) {
          var Ur = this.createSvgRectElement(Mr, zo, cn, cn);
          no.appendChild(Ur);
        }
        return no;
      }, p.prototype.createSVGElement = function (r, l) {
        var g = document.createElementNS(ap, "svg"),
          S = r.toString(),
          H = l.toString();
        return g.setAttribute("height", H), g.setAttribute("width", S), g.setAttribute("viewBox", "0 0 " + S + " " + H), g;
      }, p.prototype.createSvgRectElement = function (r, l, g, S) {
        var H = document.createElementNS(ap, "rect");
        return H.setAttribute("x", r.toString()), H.setAttribute("y", l.toString()), H.setAttribute("height", g.toString()), H.setAttribute("width", S.toString()), H.setAttribute("fill", "#000000"), H;
      }, p.QUIET_ZONE_SIZE = 4;
    }(), i(77579)),
    Cf = i(78372),
    Kp = i(71884),
    lp = i(39300),
    $d = i(63900),
    Dp = i(60515),
    Sd = i(18505),
    Xf = i(70262),
    w_ = i(24810),
    I0 = i(56539);
  const L0 = ["video"];
  function Bg(p, r) {
    if (1 & p && (a.TgZ(0, "h3"), a._uU(1), a.qZA()), 2 & p) {
      const l = a.oxw(2);
      a.xp6(1), a.Oqu(l.searchWidgetParams.header);
    }
  }
  function qf(p, r) {
    if (1 & p && (a.TgZ(0, "p"), a._uU(1), a.qZA()), 2 & p) {
      const l = a.oxw(2);
      a.xp6(1), a.Oqu(l.searchWidgetParams.subHeader);
    }
  }
  function Vg(p, r) {
    if (1 & p) {
      const l = a.EpF();
      a.TgZ(0, "div", 21)(1, "lu-input-wrapper")(2, "input", 22), a.NdJ("ngModelChange", function (S) {
        a.CHM(l);
        const H = a.oxw(2);
        return a.KtG(H.fioSearch = S);
      })("ngModelChange", function (S) {
        a.CHM(l);
        const H = a.oxw(2);
        return a.KtG(H.onFioChange(S));
      }), a.qZA(), a._UZ(3, "lu-svg-icon", 23), a.qZA()();
    }
    if (2 & p) {
      const l = a.oxw(2);
      a.xp6(2), a.Q6J("ngModel", l.fioSearch)("placeholder", l.searchWidgetParams.searchPlaceholder), a.xp6(1), a.Q6J("size", 24);
    }
  }
  function jg(p, r) {
    1 & p && (a.TgZ(0, "div", 24)(1, "p"), a._uU(2, "Камера не найдена или доступ запрещён."), a.qZA()());
  }
  function M_(p, r) {
    if (1 & p) {
      const l = a.EpF();
      a.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4), a.YNc(4, Bg, 2, 1, "h3", 5), a.YNc(5, qf, 2, 1, "p", 5), a.qZA(), a.TgZ(6, "div", 6)(7, "lu-svg-icon", 7), a.NdJ("click", function () {
        a.CHM(l);
        const S = a.oxw();
        return a.KtG(S.onClose());
      }), a.qZA()()(), a.Hsn(8), a.YNc(9, Vg, 4, 3, "div", 8), a.qZA(), a.TgZ(10, "div", 9)(11, "div", 10), a._UZ(12, "video", 11, 12), a.YNc(14, jg, 3, 0, "ng-template", null, 13, a.W1O), a.qZA(), a._UZ(16, "div", 14), a.TgZ(17, "div", 15)(18, "div", 16), a._UZ(19, "div", 17)(20, "div", 18)(21, "div", 19)(22, "div", 20), a.qZA()()()();
    }
    if (2 & p) {
      const l = a.oxw();
      a.xp6(4), a.Q6J("ngIf", l.searchWidgetParams.header), a.xp6(1), a.Q6J("ngIf", l.searchWidgetParams.subHeader), a.xp6(2), a.Q6J("size", 24), a.xp6(2), a.Q6J("ngIf", l.searchWidgetParams.isSearchAllowed);
    }
  }
  const xf = class {
    set disabled(r) {
      const l = this._disabled;
      this._disabled = r, r ? (console.log("disabled = true - останавливаем сканер"), this.isScanning = !1, this.stopScanner()) : l && (console.log("disabled = false - запускаем сканер"), this.isScanning = !0, this.cdr.detectChanges(), this.hasCamera && this.selectedDeviceId && this.startScanner());
    }
    get disabled() {
      return this._disabled;
    }
    constructor(r, l, g) {
      this.careCaseService = r, this.uidService = l, this.cdr = g, this.fioSearch = "", this.fioSearch$ = new Hg.x(), this.patientLoaded = new a.vpe(), this.fioSearchStr = new a.vpe(), this.closeSearch = new a.vpe(), this.barcodeScanned = new a.vpe(), this.qrCodeScanned = new a.vpe(), this._searchFill = "", this.startScannerRetryCount = 0, this.MAX_START_RETRIES = 10, this._disabled = !1, this.hints = new Map([[2, [qo.QR_CODE, qo.DATA_MATRIX, qo.CODE_128, qo.CODE_39, qo.EAN_13, qo.EAN_8]]]), this.codeReader = new vf(this.hints), this.stream = null, this.result = "", this.scanning = !1, this.hasCamera = !1, this.devices = [], this.selectedDeviceId = null, this.isScanning = !1, this.scanStatusMessage = "Наведите камеру на QR-код", this.scanningInProgress = !1;
    }
    ngOnInit() {
      this.fioSearch$.pipe((0, Cf.b)(500), (0, Kp.x)(), (0, lp.h)(r => r.length >= 3)).subscribe(r => {
        r && r.trim() && this.fioSearchStr.emit(r);
      });
    }
    onFioChange(r) {
      this.fioSearch$.next(r);
    }
    ngAfterViewInit() {
      var r = this;
      return (0, t.Z)(function* () {
        r.isScanning = !0, r.cdr.detectChanges(), yield r.getVideoDevices(), r.hasCamera && r.selectedDeviceId && setTimeout(() => {
          r.startScanner();
        }, 100);
      })();
    }
    getVideoDevices() {
      var r = this;
      return (0, t.Z)(function* () {
        try {
          (yield navigator.mediaDevices.getUserMedia({
            video: !0
          })).getTracks().forEach(H => H.stop()), r.hasCamera = !0;
        } catch (S) {
          console.error("Ошибка при получении доступа к камере:", S), r.hasCamera = !1, r.scanStatusMessage = "Камера не доступна.";
        }
        if (!r.hasCamera) return;
        const l = yield navigator.mediaDevices.enumerateDevices();
        r.devices = l.filter(S => "videoinput" === S.kind);
        const g = r.devices.find(S => S.label.toLowerCase().includes("back") || S.label.toLowerCase().includes("rear") || S.label.toLowerCase().includes("environment"));
        r.selectedDeviceId = g?.deviceId ?? r.devices[0]?.deviceId ?? null;
      })();
    }
    startScanner() {
      var r = this;
      return (0, t.Z)(function* () {
        if (console.log("Запуск камеры", r.selectedDeviceId), r.hasCamera && r.selectedDeviceId) {
          if (r.disabled) return console.log("Сканер отключён, запуск отменён"), void (r.startScannerRetryCount = 0);
          if (!r.video?.nativeElement) return r.startScannerRetryCount++, r.startScannerRetryCount > r.MAX_START_RETRIES ? (console.error("Video element так и не появился после", r.MAX_START_RETRIES, "попыток"), void (r.startScannerRetryCount = 0)) : void setTimeout(() => r.startScanner(), 100);
          r.startScannerRetryCount = 0, r.scanning = !0, r.scanStatusMessage = "Наведите камеру на QR-код";
          try {
            r.stream = yield navigator.mediaDevices.getUserMedia({
              video: {
                deviceId: {
                  exact: r.selectedDeviceId
                }
              }
            });
            const l = r.video.nativeElement;
            l.srcObject = r.stream, l.paused && (yield l.play()), requestAnimationFrame(() => r.scanLoop());
          } catch (l) {
            console.error("Ошибка запуска камеры:", l), r.hasCamera = !1, r.scanning = !1, r.scanStatusMessage = "Не удалось запустить камеру.";
          }
        } else r.scanStatusMessage = "Камера не найдена.";
      })();
    }
    scanLoop() {
      var r = this;
      return (0, t.Z)(function* () {
        if (r.scanning && !r.scanningInProgress) {
          r.scanningInProgress = !0;
          try {
            const l = yield r.codeReader.decodeOnceFromVideoElement(r.video.nativeElement);
            r.result = l.getText(), r.scanStatusMessage = "Код успешно распознан!", r.stopScanner(), setTimeout(() => {
              r.onEnter();
            }, 1e3);
          } catch (l) {
            l instanceof pt ? (r.scanStatusMessage = "Код не распознан, попробуйте снова", requestAnimationFrame(() => r.scanLoop())) : (r.scanStatusMessage = "Произошла ошибка сканера.", console.error("Ошибка сканера:", l), r.stopScanner());
          } finally {
            r.scanning || (r.scanningInProgress = !1);
          }
        }
      })();
    }
    stopScanner() {
      this.scanning = !1, this.stream && (this.stream.getTracks().forEach(r => r.stop()), this.stream = null), this.video?.nativeElement && (this.video.nativeElement.pause(), this.video.nativeElement.srcObject = null);
    }
    ngOnDestroy() {
      this.stopScanner();
    }
    onEnter() {
      if ("barcode" !== this.searchWidgetParams.mode && "qrcode" !== this.searchWidgetParams.mode) this.uidService.getUid(this.result).pipe((0, $d.w)(r => r.status ? this.careCaseService.getCareCaseQuery(r.data_object.careCaseId || r.data_object.ehr_case_id).pipe((0, Sd.b)(g => {
        g?.error ? console.log("Пациент не найден!") : (this.patientLoaded.emit(g), this.isScanning = !1);
      }), (0, Xf.K)(g => (console.log("Возникла ошибка: ", g), Dp.E))) : (console.log("QR-код не актуальный"), Dp.E)), (0, Xf.K)(r => 404 === r.status ? (console.warn("QR-код не найден, пробуем искать по сканированному значению:", this.result), this.careCaseService.getCareCaseQuery(this.result).pipe((0, Sd.b)(l => {
        l?.error || (this.patientLoaded.emit(l), this.isScanning = !1);
      }), (0, Xf.K)(() => Dp.E))) : (console.error("Ошибка при проверке qr-кода", r), Dp.E))).subscribe();else {
        switch (this.searchWidgetParams.mode) {
          case "barcode":
            this.barcodeScanned.emit(this.result);
            break;
          case "qrcode":
            this.qrCodeScanned.emit(this.result);
        }
        this.onClose();
      }
    }
    onClose() {
      this.stopScanner(), this.disabled = !0, this.closeSearch.emit(!1);
    }
  };
  let ug = xf;
  xf.ɵfac = function (l) {
    return new (l || xf)(a.Y36(w_.lb), a.Y36(I0.G1), a.Y36(a.sBO));
  }, xf.ɵcmp = a.Xpm({
    type: xf,
    selectors: [["app-tablet-scanner-widget"]],
    viewQuery: function (l, g) {
      if (1 & l && a.Gf(L0, 5), 2 & l) {
        let S;
        a.iGM(S = a.CRH()) && (g.video = S.first);
      }
    },
    inputs: {
      searchWidgetParams: "searchWidgetParams",
      disabled: "disabled"
    },
    outputs: {
      patientLoaded: "patientLoaded",
      fioSearchStr: "fioSearchStr",
      closeSearch: "closeSearch",
      barcodeScanned: "barcodeScanned",
      qrCodeScanned: "qrCodeScanned"
    },
    standalone: !0,
    features: [a.jDz],
    ngContentSelectors: ["*"],
    decls: 1,
    vars: 1,
    consts: [["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "scanner-header-container"], [1, "scanner-header-container__title"], [1, "scanner-header-container__title__text"], [4, "ngIf"], [1, "scanner-header-container__title__btn"], ["icon", "close", 3, "size", "click"], ["class", "scanner-header-container__search", 4, "ngIf"], [1, "scanner-body", "scanner-body-tablet"], [1, "scanner-camera"], ["autoplay", "", "muted", "", "playsinline", ""], ["video", ""], ["noCamera", ""], [1, "mask-layer"], [1, "modal-window"], [1, "scanner-box"], [1, "corner", "top-left"], [1, "corner", "top-right"], [1, "corner", "bottom-left"], [1, "corner", "bottom-right"], [1, "scanner-header-container__search"], ["luInput", "", "luInputString", "", 3, "ngModel", "placeholder", "ngModelChange"], ["luInputWrapperAfter", "", "icon", "search", 3, "size"], [1, "no-camera-feedback"]],
    template: function (l, g) {
      1 & l && (a.F$t(), a.YNc(0, M_, 23, 4, "div", 0)), 2 & l && a.Q6J("ngIf", g.isScanning && !g.disabled);
    },
    dependencies: [e.ez, e.O5, m.u5, m.Fj, m.JJ, m.On, d.h, d.q, M.LA, M.HY, M.Fj, b.c, b.H, A.f, A.L],
    styles: [".modal-content[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000;display:flex;flex-direction:column}.scanner-body[_ngcontent-%COMP%]{position:relative;flex:1;overflow:hidden;background:#000}.scanner-camera[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;overflow:hidden}.scanner-camera[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.scanner-body-tablet[_ngcontent-%COMP%]   .scanner-camera[_ngcontent-%COMP%]{inset:204px auto auto 50%;width:320px;height:320px;transform:translate(-50%);border-radius:48px;z-index:2}.scanner-body-tablet[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background:url(Rectangle\\ 559.890a9050d51d6ed2.png);background-size:cover;background-position:center;z-index:0}.scanner-body-tablet[_ngcontent-%COMP%]   .mask-layer[_ngcontent-%COMP%]{top:204px}.scanner-body-tablet[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]{padding-top:204px}.mask-layer[_ngcontent-%COMP%]{position:absolute;top:120px;left:0;right:0;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.mask-layer[_ngcontent-%COMP%]:before{content:\"\";width:320px;height:320px;border-radius:48px;background:transparent;box-shadow:0 0 0 9999px #000000a6}.modal-window[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:center;align-items:center;padding-top:120px;pointer-events:none}.scanner-box[_ngcontent-%COMP%]{position:relative;width:320px;height:320px;border-radius:20px;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.scan-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;flex-direction:column}.scan-line[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:3px;background:#38a1d6;animation:_ngcontent-%COMP%_scanMove 2s linear infinite;box-shadow:0 0 8px #38a1d6cc}@keyframes _ngcontent-%COMP%_scanMove{0%{top:0}to{top:calc(100% - 3px)}}.scan-feedback[_ngcontent-%COMP%]{position:absolute;bottom:-40px;color:#fff;font-size:14px;text-align:center}.no-camera-feedback[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#666;text-align:center;padding:16px}.corner[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;border-color:#fff;border-style:solid;border-width:6px;pointer-events:none;box-sizing:border-box;z-index:5000}.top-left[_ngcontent-%COMP%]{top:0;left:0;border-right:none;border-bottom:none;border-radius:48px 0 0}.top-right[_ngcontent-%COMP%]{top:0;right:0;border-left:none;border-bottom:none;border-radius:0 48px 0 0}.bottom-left[_ngcontent-%COMP%]{bottom:0;left:0;border-right:none;border-top:none;border-radius:0 0 0 48px}.bottom-right[_ngcontent-%COMP%]{bottom:0;right:0;border-left:none;border-top:none;border-radius:0 0 48px}.scanner-header-container[_ngcontent-%COMP%]{padding:16px;background:#fff;display:flex;flex-direction:column;position:relative;z-index:3}.scanner-header-container__title[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.scanner-header-container__title__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.scanner-header-container__title__btn[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc}.scanner-header-container__search[_ngcontent-%COMP%]{margin-top:44px}.scanner-header-container__search[_ngcontent-%COMP%]    {--lu-svg-icon-color: #38a1d6 !important}.scanner-header-container__search[_ngcontent-%COMP%]     .lu-input-container:after{border-radius:4px!important}.scanner-header-container__search[_ngcontent-%COMP%]     lu-floated-border:after{border-radius:4px!important}.scanner-header-container__search[_ngcontent-%COMP%]     [data-lu-focused=true]{--lu-floated-border: #3DCFCF !important;border-radius:4px}"]
  });
});
