// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Te,
  selectors: [["barcode-scanner-livestream"]],
  viewQuery: function (k, ce) {
    if (1 & k && n.Gf(Hv, 5), 2 & k) {
      let Ye;
      n.iGM(Ye = n.CRH()) && (ce.barcodeScanner = Ye.first);
    }
  },
  inputs: {
    type: "type",
    deviceId: "deviceId",
    maxWidth: "maxWidth",
    maxHeight: "maxHeight",
    config: "config",
    errorFilter: "errorFilter",
    torch: "torch"
  },
  outputs: {
    valueChanges: "valueChanges",
    started: "started"
  },
  features: [n.TTD],
  decls: 4,
  vars: 13,
  consts: [[1, "scanner", 3, "hidden"], ["BarcodeScanner", ""], [1, "drawingBuffer"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0, 1), n._UZ(2, "video")(3, "canvas", 2), n.qZA()), 2 & k && (n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth), n.Q6J("hidden", !ce.isStarted), n.xp6(2), n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth), n.xp6(1), n.Udp("max-height", ce._maxHeight)("max-width", ce._maxWidth));
  },
  styles: [".scanner{position:relative}.scanner video,.scanner canvas{width:100%;height:100%}.scanner canvas.drawingBuffer{position:absolute;left:0;top:0}\n"],
  encapsulation: 2
});
