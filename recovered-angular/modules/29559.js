// Extracted from main; webpack module 29559. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(e) {
    if (!e) return null;
    e = e.replace("$", "");
    const a = parseInt(e, 16);
    return `#${[255 & a, a >> 8 & 255, a >> 16 & 255].map(M => `0${M.toString(16)}`.slice(-2)).join("")}`;
  }
  i.d(V, {
    d: () => t
  });
});
