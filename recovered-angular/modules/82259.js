// Extracted from main; webpack module 82259. Factory, not an ES module.
((Ae, V) => {
  V.L = {
    bit: 1
  }, V.M = {
    bit: 0
  }, V.Q = {
    bit: 3
  }, V.H = {
    bit: 2
  }, V.isValid = function (e) {
    return e && typeof e.bit < "u" && e.bit >= 0 && e.bit < 4;
  }, V.from = function (e, a) {
    if (V.isValid(e)) return e;
    try {
      return function i(t) {
        if ("string" != typeof t) throw new Error("Param is not a string");
        switch (t.toLowerCase()) {
          case "l":
          case "low":
            return V.L;
          case "m":
          case "medium":
            return V.M;
          case "q":
          case "quartile":
            return V.Q;
          case "h":
          case "high":
            return V.H;
          default:
            throw new Error("Unknown EC Level: " + t);
        }
      }(e);
    } catch {
      return a;
    }
  };
});
