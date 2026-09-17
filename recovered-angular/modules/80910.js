// Extracted from main; webpack module 80910. Factory, not an ES module.
(Ae => {
  var V = "\\ud800-\\udfff",
    m = "\\u2700-\\u27bf",
    d = "a-z\\xdf-\\xf6\\xf8-\\xff",
    I = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    L = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    v = "[" + L + "]",
    E = "\\d+",
    h = "[" + m + "]",
    x = "[" + d + "]",
    u = "[^" + V + L + E + m + d + I + "]",
    y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    j = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    W = "[" + I + "]",
    Le = "(?:" + x + "|" + u + ")",
    ke = "(?:" + W + "|" + u + ")",
    J = "(?:['’](?:d|ll|m|re|s|t|ve))?",
    fe = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
    ye = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    ae = "[\\ufe0e\\ufe0f]?",
    pe = ae + ye + "(?:\\u200d(?:" + ["[^" + V + "]", y, j].join("|") + ")" + ae + ye + ")*",
    be = "(?:" + [h, y, j].join("|") + ")" + pe,
    le = RegExp([W + "?" + x + "+" + J + "(?=" + [v, W, "$"].join("|") + ")", ke + "+" + fe + "(?=" + [v, W + Le, "$"].join("|") + ")", W + "?" + Le + "+" + J, W + "+" + fe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", E, be].join("|"), "g");
  Ae.exports = function n(Se) {
    return Se.match(le) || [];
  };
});
