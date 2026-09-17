// Extracted from main; webpack module 61889. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = function (b, A) {
      switch (b) {
        case "P":
          return A.date({
            width: "short"
          });
        case "PP":
          return A.date({
            width: "medium"
          });
        case "PPP":
          return A.date({
            width: "long"
          });
        default:
          return A.date({
            width: "full"
          });
      }
    },
    e = function (b, A) {
      switch (b) {
        case "p":
          return A.time({
            width: "short"
          });
        case "pp":
          return A.time({
            width: "medium"
          });
        case "ppp":
          return A.time({
            width: "long"
          });
        default:
          return A.time({
            width: "full"
          });
      }
    };
  const d = {
    p: e,
    P: function (b, A) {
      var L,
        N = b.match(/(P+)(p+)?/) || [],
        I = N[1],
        O = N[2];
      if (!O) return t(b, A);
      switch (I) {
        case "P":
          L = A.dateTime({
            width: "short"
          });
          break;
        case "PP":
          L = A.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          L = A.dateTime({
            width: "long"
          });
          break;
        default:
          L = A.dateTime({
            width: "full"
          });
      }
      return L.replace("{{date}}", t(I, A)).replace("{{time}}", e(O, A));
    }
  };
});
