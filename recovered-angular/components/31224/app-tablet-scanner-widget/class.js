// Extracted class; external identifiers resolve in modules/31224.js.
(class {
  set disabled(r) {
    const l = this._disabled;
    this._disabled = r, r ? (console.log("disabled = true - останавливаем сканер"), this.isScanning = !1, this.stopScanner()) : l && (console.log("disabled = false - запускаем сканер"), this.isScanning = !0, this.cdr.detectChanges(), this.hasCamera && this.selectedDeviceId && this.startScanner());
  }
  get disabled() {
    return this._disabled;
  }
  constructor(r, l, g) {
    this.careCaseService = r, this.uidService = l, this.cdr = g, this.fioSearch = "", this.fioSearch$ = new Hg.x(), this.patientLoaded = new a.vpe(), this.fioSearchStr = new a.vpe(), this.closeSearch = new a.vpe(), this.barcodeScanned = new a.vpe(), this.qrCodeScanned = new a.vpe(), this._searchFill = "", this.startScannerRetryCount = 0, this.MAX_START_RETRIES = 10, this._disabled = !1, this.hints = new Map([[2, [qo.QR_CODE, qo.DATA_MATRIX, qo.CODE_128, qo.CODE_39, qo.EAN_13, qo.EAN_8]]]), this.codeReader = new vf(this.hints), this.stream = null, this.result = "", this.scanning = !1, this.hasCamera = !1, this.devices = [], this.selectedDeviceId = null, this.isScanning = !1, this.scanStatusMessage = "Наведите камеру на QR-код", this.scanningInProgress = !1;
  }
  ngOnInit() {
    this.fioSearch$.pipe((0, Cf.b)(500), (0, Kp.x)(), (0, lp.h)(r => r.length >= 3)).subscribe(r => {
      r && r.trim() && this.fioSearchStr.emit(r);
    });
  }
  onFioChange(r) {
    this.fioSearch$.next(r);
  }
  ngAfterViewInit() {
    var r = this;
    return (0, t.Z)(function* () {
      r.isScanning = !0, r.cdr.detectChanges(), yield r.getVideoDevices(), r.hasCamera && r.selectedDeviceId && setTimeout(() => {
        r.startScanner();
      }, 100);
    })();
  }
  getVideoDevices() {
    var r = this;
    return (0, t.Z)(function* () {
      try {
        (yield navigator.mediaDevices.getUserMedia({
          video: !0
        })).getTracks().forEach(H => H.stop()), r.hasCamera = !0;
      } catch (S) {
        console.error("Ошибка при получении доступа к камере:", S), r.hasCamera = !1, r.scanStatusMessage = "Камера не доступна.";
      }
      if (!r.hasCamera) return;
      const l = yield navigator.mediaDevices.enumerateDevices();
      r.devices = l.filter(S => "videoinput" === S.kind);
      const g = r.devices.find(S => S.label.toLowerCase().includes("back") || S.label.toLowerCase().includes("rear") || S.label.toLowerCase().includes("environment"));
      r.selectedDeviceId = g?.deviceId ?? r.devices[0]?.deviceId ?? null;
    })();
  }
  startScanner() {
    var r = this;
    return (0, t.Z)(function* () {
      if (console.log("Запуск камеры", r.selectedDeviceId), r.hasCamera && r.selectedDeviceId) {
        if (r.disabled) return console.log("Сканер отключён, запуск отменён"), void (r.startScannerRetryCount = 0);
        if (!r.video?.nativeElement) return r.startScannerRetryCount++, r.startScannerRetryCount > r.MAX_START_RETRIES ? (console.error("Video element так и не появился после", r.MAX_START_RETRIES, "попыток"), void (r.startScannerRetryCount = 0)) : void setTimeout(() => r.startScanner(), 100);
        r.startScannerRetryCount = 0, r.scanning = !0, r.scanStatusMessage = "Наведите камеру на QR-код";
        try {
          r.stream = yield navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: {
                exact: r.selectedDeviceId
              }
            }
          });
          const l = r.video.nativeElement;
          l.srcObject = r.stream, l.paused && (yield l.play()), requestAnimationFrame(() => r.scanLoop());
        } catch (l) {
          console.error("Ошибка запуска камеры:", l), r.hasCamera = !1, r.scanning = !1, r.scanStatusMessage = "Не удалось запустить камеру.";
        }
      } else r.scanStatusMessage = "Камера не найдена.";
    })();
  }
  scanLoop() {
    var r = this;
    return (0, t.Z)(function* () {
      if (r.scanning && !r.scanningInProgress) {
        r.scanningInProgress = !0;
        try {
          const l = yield r.codeReader.decodeOnceFromVideoElement(r.video.nativeElement);
          r.result = l.getText(), r.scanStatusMessage = "Код успешно распознан!", r.stopScanner(), setTimeout(() => {
            r.onEnter();
          }, 1e3);
        } catch (l) {
          l instanceof pt ? (r.scanStatusMessage = "Код не распознан, попробуйте снова", requestAnimationFrame(() => r.scanLoop())) : (r.scanStatusMessage = "Произошла ошибка сканера.", console.error("Ошибка сканера:", l), r.stopScanner());
        } finally {
          r.scanning || (r.scanningInProgress = !1);
        }
      }
    })();
  }
  stopScanner() {
    this.scanning = !1, this.stream && (this.stream.getTracks().forEach(r => r.stop()), this.stream = null), this.video?.nativeElement && (this.video.nativeElement.pause(), this.video.nativeElement.srcObject = null);
  }
  ngOnDestroy() {
    this.stopScanner();
  }
  onEnter() {
    if ("barcode" !== this.searchWidgetParams.mode && "qrcode" !== this.searchWidgetParams.mode) this.uidService.getUid(this.result).pipe((0, $d.w)(r => r.status ? this.careCaseService.getCareCaseQuery(r.data_object.careCaseId || r.data_object.ehr_case_id).pipe((0, Sd.b)(g => {
      g?.error ? console.log("Пациент не найден!") : (this.patientLoaded.emit(g), this.isScanning = !1);
    }), (0, Xf.K)(g => (console.log("Возникла ошибка: ", g), Dp.E))) : (console.log("QR-код не актуальный"), Dp.E)), (0, Xf.K)(r => 404 === r.status ? (console.warn("QR-код не найден, пробуем искать по сканированному значению:", this.result), this.careCaseService.getCareCaseQuery(this.result).pipe((0, Sd.b)(l => {
      l?.error || (this.patientLoaded.emit(l), this.isScanning = !1);
    }), (0, Xf.K)(() => Dp.E))) : (console.error("Ошибка при проверке qr-кода", r), Dp.E))).subscribe();else {
      switch (this.searchWidgetParams.mode) {
        case "barcode":
          this.barcodeScanned.emit(this.result);
          break;
        case "qrcode":
          this.qrCodeScanned.emit(this.result);
      }
      this.onClose();
    }
  }
  onClose() {
    this.stopScanner(), this.disabled = !0, this.closeSearch.emit(!1);
  }
});
