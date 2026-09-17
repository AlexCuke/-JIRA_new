// Extracted from main; webpack module 33667. Factory, not an ES module.
((Ae, V) => {
  V.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  function t(e, a, m) {
    switch (e) {
      case V.Patterns.PATTERN000:
        return (a + m) % 2 == 0;
      case V.Patterns.PATTERN001:
        return a % 2 == 0;
      case V.Patterns.PATTERN010:
        return m % 3 == 0;
      case V.Patterns.PATTERN011:
        return (a + m) % 3 == 0;
      case V.Patterns.PATTERN100:
        return (Math.floor(a / 2) + Math.floor(m / 3)) % 2 == 0;
      case V.Patterns.PATTERN101:
        return a * m % 2 + a * m % 3 == 0;
      case V.Patterns.PATTERN110:
        return (a * m % 2 + a * m % 3) % 2 == 0;
      case V.Patterns.PATTERN111:
        return (a * m % 3 + (a + m) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + e);
    }
  }
  V.isValid = function (a) {
    return null != a && "" !== a && !isNaN(a) && a >= 0 && a <= 7;
  }, V.from = function (a) {
    return V.isValid(a) ? parseInt(a, 10) : void 0;
  }, V.getPenaltyN1 = function (a) {
    for (var m = a.size, d = 0, M = 0, b = 0, A = null, N = null, I = 0; I < m; I++) {
      M = b = 0, A = N = null;
      for (var O = 0; O < m; O++) {
        var L = a.get(I, O);
        L === A ? M++ : (M >= 5 && (d += M - 5 + 3), A = L, M = 1), (L = a.get(O, I)) === N ? b++ : (b >= 5 && (d += b - 5 + 3), N = L, b = 1);
      }
      M >= 5 && (d += M - 5 + 3), b >= 5 && (d += b - 5 + 3);
    }
    return d;
  }, V.getPenaltyN2 = function (a) {
    for (var m = a.size, d = 0, M = 0; M < m - 1; M++) for (var b = 0; b < m - 1; b++) {
      var A = a.get(M, b) + a.get(M, b + 1) + a.get(M + 1, b) + a.get(M + 1, b + 1);
      (4 === A || 0 === A) && d++;
    }
    return 3 * d;
  }, V.getPenaltyN3 = function (a) {
    for (var m = a.size, d = 0, M = 0, b = 0, A = 0; A < m; A++) {
      M = b = 0;
      for (var N = 0; N < m; N++) M = M << 1 & 2047 | a.get(A, N), N >= 10 && (1488 === M || 93 === M) && d++, b = b << 1 & 2047 | a.get(N, A), N >= 10 && (1488 === b || 93 === b) && d++;
    }
    return 40 * d;
  }, V.getPenaltyN4 = function (a) {
    for (var m = 0, d = a.data.length, M = 0; M < d; M++) m += a.data[M];
    return 10 * Math.abs(Math.ceil(100 * m / d / 5) - 10);
  }, V.applyMask = function (a, m) {
    for (var d = m.size, M = 0; M < d; M++) for (var b = 0; b < d; b++) m.isReserved(b, M) || m.xor(b, M, t(a, b, M));
  }, V.getBestMask = function (a, m) {
    for (var d = Object.keys(V.Patterns).length, M = 0, b = 1 / 0, A = 0; A < d; A++) {
      m(A), V.applyMask(A, a);
      var N = V.getPenaltyN1(a) + V.getPenaltyN2(a) + V.getPenaltyN3(a) + V.getPenaltyN4(a);
      V.applyMask(A, a), N < b && (b = N, M = A);
    }
    return M;
  };
});
