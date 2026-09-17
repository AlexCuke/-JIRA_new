// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor() {
    this.barcodeValueEvent = new n.vpe();
  }
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
  onValueChanges($) {
    const k = +$.codeResult.code;
    k && this.barcodeValueEvent.emit(k);
  }
  onStarted($) {
    console.log($);
  }
});
