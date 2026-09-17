// Extracted from main; webpack module 6319. Factory, not an ES module.
(Ae => {
  var V = "\\ud800-\\udfff",
    d = "[" + V + "]",
    M = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    b = "\\ud83c[\\udffb-\\udfff]",
    N = "[^" + V + "]",
    I = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    O = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    C = "(?:" + M + "|" + b + ")?",
    v = "[\\ufe0e\\ufe0f]?",
    E = v + C + "(?:\\u200d(?:" + [N, I, O].join("|") + ")" + v + C + ")*",
    h = "(?:" + [N + M + "?", M, I, O, d].join("|") + ")",
    x = RegExp(b + "(?=" + b + ")|" + h + E, "g");
  Ae.exports = function u(T) {
    return T.match(x) || [];
  };
});
