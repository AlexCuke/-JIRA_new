// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.isTablet = !1, this.patientSetFormChanges = new e.vpe(), this.fb = (0, e.f3M)(pr.qu), this.isCenterCatheterExpand = !1, this.isPeripheralCatheterExpand = !1, this.isUrinaryCatheterExpand = !1, this.isNasogastricTubeExpand = !1, this.isStomaExpand = !1, this.patientSetForm = this._initForm(), this.peripheralCathetersFormList = new pr.Oe([]), this.urinaryCatheterCtrl = new pr.NI(), this.nasogastricCtrl = new pr.NI(), this.stomaFormList = new pr.Oe([]), this.centralCathetersFormList = new pr.Oe([]), this.centralCathetersVesselTypes = fu.rX, this.centralCathetersLocalizationTypes = fu.wj, this.centralCathetersNamesCathetersTypes = fu.rx, this.compositionValueMap = {
      centralCatheters: {
        catheterName: this.centralCathetersNamesCathetersTypes,
        localization: this.centralCathetersLocalizationTypes,
        vesselType: this.centralCathetersVesselTypes
      }
    };
  }
  ngAfterViewInit() {
    this.patientSetForm.valueChanges.pipe((0, Kn.t)(this)).subscribe(s => {
      this.patientSetFormChanges.emit((0, Oc.zb)((0, Oc.yE)(fu.hh, s)));
    });
  }
  ngOnChanges(s) {
    (0, Du.up)(s.patientSetValue) && (Object.entries(this.patientSetValue).filter(([o, D]) => !(D instanceof Array) && D || D instanceof Array && D.length).map(([o, D]) => {
      if (Object.keys(this.compositionValueMap).includes(o)) {
        const Z = this.compositionValueMap[o];
        return D instanceof Array ? [o, D.map(oe => Object.fromEntries(Object.entries(oe).map(([ue, He]) => Object.keys(Z).includes(ue) ? [ue, Z[ue].find(lt => lt?.name?.toLowerCase() === He?.toLowerCase())] : [ue, He])))] : [o, Object.fromEntries(Object.entries(D).map(([oe, ue]) => Object.keys(Z).includes(oe) ? [oe, Z[oe].find(He => He?.name?.toLowerCase() === ue?.toLowerCase())] : [oe, ue]))];
      }
      return [o, D];
    }).forEach(([o, D]) => {
      if (D instanceof Array) {
        const Z = this.getControl(o);
        Z.clear(), D.forEach(X => Z.push(new pr.NI(X)));
      } else this.getControl(o).patchValue(D);
    }), this.peripheralCathetersFormList = this.getControl("peripheralCatheters"), this.urinaryCatheterCtrl = this.getControl("urinaryCatheter"), this.nasogastricCtrl = this.getControl("nasogastricTube"), this.stomaFormList = this.getControl("stoma"), this.centralCathetersFormList = this.getControl("centralCatheters")), this.disabled ? this.patientSetForm.disable({
      emitEvent: !1
    }) : this.patientSetForm.enable({
      emitEvent: !1
    });
  }
  getControl(s) {
    return (0, nf.YV)(this.patientSetForm, s);
  }
  get isPeripheralCatheterListExist() {
    return !!this.peripheralCathetersFormList.value?.length;
  }
  get isUrinaryCatheterExist() {
    return !!this.urinaryCatheterCtrl.value;
  }
  get isNasogastricTubeExist() {
    return !!this.nasogastricCtrl.value;
  }
  get isStomaExist() {
    return !!this.stomaFormList.value?.length;
  }
  get isCenterCatheterListExist() {
    return !!this.centralCathetersFormList.value?.length;
  }
  _initForm() {
    return this.fb.group({
      portSystem: [!1],
      peripheralCatheters: new pr.Oe([]),
      urinaryCatheter: [null],
      nasogastricTube: [null],
      stoma: new pr.Oe([]),
      centralCatheters: new pr.Oe([])
    });
  }
});
