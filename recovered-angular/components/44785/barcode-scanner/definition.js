// Exact compiled component metadata; references belong to modules/44785.js
({
  type: cp,
  selectors: [["barcode-scanner"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(G0, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.barcodeScanner = Ye.first);
    }
  },
  outputs: {
    barcodeValueEvent: "barcodeValueEvent"
  },
  standalone: !0,
  features: [n.jDz],
  decls: 2,
  vars: 0,
  consts: [[1, "barcode-scanner"], ["type", "code_128", 3, "valueChanges", "started"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "barcode-scanner-livestream", 1), n.NdJ("valueChanges", function (Tt) {
      return ce.onValueChanges(Tt);
    })("started", function () {
      return null;
    }), n.qZA()());
  },
  dependencies: [Di.ez, Vv, G0],
  styles: [".barcode-scanner[_ngcontent-%COMP%]{width:640px;height:480px;display:flex;align-items:center;justify-content:center}"]
});
