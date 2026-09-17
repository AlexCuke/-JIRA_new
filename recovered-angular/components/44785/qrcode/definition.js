// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Te,
  selectors: [["qrcode"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(Jl, 7), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.qrcElement = Ye.first);
    }
  },
  inputs: {
    colordark: "colordark",
    colorlight: "colorlight",
    level: "level",
    hidetitle: "hidetitle",
    size: "size",
    usesvg: "usesvg",
    allowEmptyString: "allowEmptyString",
    qrdata: "qrdata",
    colorDark: "colorDark",
    colorLight: "colorLight",
    cssClass: "cssClass",
    elementType: "elementType",
    errorCorrectionLevel: "errorCorrectionLevel",
    margin: "margin",
    scale: "scale",
    width: "width",
    alt: "alt",
    ariaLabel: "ariaLabel",
    title: "title",
    version: "version"
  },
  features: [n.TTD],
  decls: 2,
  vars: 2,
  consts: [["qrcElement", ""]],
  template: function (k, ce) {
    1 & k && n._UZ(0, "div", null, 0), 2 & k && n.Tol(ce.cssClass);
  },
  encapsulation: 2,
  changeDetection: 0
});
