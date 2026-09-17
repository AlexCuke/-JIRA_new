// Extracted from main; webpack module 2908. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function e(a) {
    return `${function t(a) {
      return (window.env || {})[a];
    }("apiGatewayBasePath")}${a ?? ""}`;
  }
  i.d(V, {
    b: () => e
  });
});
