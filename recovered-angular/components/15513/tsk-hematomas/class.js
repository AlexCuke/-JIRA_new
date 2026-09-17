// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.hemaBodyColors = fu.X5, this.isFactPlacementMatch = !0, this.cdr = (0, e.f3M)(e.sBO), this.attachedDocumentService = (0, e.f3M)(Sc), this.isAdaptiveAreasPanelOpen = !1, this.isAdaptiveDirectoriesPanelOpen = !1, this.isTablet = !1, this.activePanelButtonIndex = 0, this.schemaSelectedMap = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.schemaSelectedMapId = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.schemaSelectedFlat = [], this.preselected = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.isHemaDirOpen = !1, this.panelButtons = [{
      label: "Передняя проекция",
      buttonPath: "assets/checklist-hematomas-svg/hema_navigate_front.svg",
      width: 39,
      height: 80,
      bodyPath: "assets/checklist-hematomas-svg/hema_body_front.svg",
      bodyAreas: fu.KE,
      projection: "front",
      nextRotateLetter: "П",
      sideLeftPosition: "Правая сторона",
      sideRightPosition: "Левая сторона"
    }, {
      label: "Прав. бок. проекция",
      buttonPath: "assets/checklist-hematomas-svg/hema_navigate_right.svg",
      width: 17,
      height: 80,
      bodyPath: "assets/checklist-hematomas-svg/hema_body_right.svg",
      bodyAreas: fu.EI,
      projection: "right",
      nextRotateLetter: "З",
      sideLeftPosition: "Задняя сторона",
      sideRightPosition: "Передняя сторона"
    }, {
      label: "Задняя проекция",
      buttonPath: "assets/checklist-hematomas-svg/hema_navigate_back.svg",
      width: 35,
      height: 80,
      bodyPath: "assets/checklist-hematomas-svg/hema_body_back.svg",
      bodyAreas: fu.H,
      projection: "back",
      nextRotateLetter: "Л",
      sideLeftPosition: "Левая сторона",
      sideRightPosition: "Правая сторона"
    }, {
      label: "Левая бок. проекция",
      buttonPath: "assets/checklist-hematomas-svg/hema_navigate_left.svg",
      width: 17,
      height: 80,
      bodyPath: "assets/checklist-hematomas-svg/hema_body_left.svg",
      bodyAreas: fu.Sz,
      projection: "left",
      nextRotateLetter: "П",
      sideLeftPosition: "Передняя сторона",
      sideRightPosition: "Задняя сторона"
    }];
  }
  onKeyEvent(s) {
    ("п" === s.key.toLowerCase() || "g" === s.key.toLowerCase()) && this.rotateBody();
  }
  ngOnInit() {
    this.loadBody(0);
  }
  ngAfterViewInit() {
    setTimeout(() => this.restoreVisualStateFromForm()), this.getControl("hemaAreas").valueChanges.pipe((0, Kn.t)(this)).subscribe(() => {
      setTimeout(() => this.restoreVisualStateFromForm());
    });
  }
  changePlacement() {
    this.cdr.markForCheck();
  }
  ngOnChanges() {
    this.imageMapperComponent && this.restoreVisualStateFromForm();
  }
  readHemaAreasFromForm() {
    return H2(this.getControl("hemaAreas"));
  }
  get hemaAreaControls() {
    const s = this.getControl("hemaAreas");
    return s instanceof pr.Oe ? s.controls : [];
  }
  get adaptivePanelButtons() {
    const s = [...this.panelButtons];
    return [s[1], s[2]] = [s[2], s[1]], s;
  }
  restoreVisualStateFromForm() {
    const s = this.readHemaAreasFromForm();
    s.length && (this.schemaSelectedMap = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.schemaSelectedMapId = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.preselected = {
      front: [],
      back: [],
      left: [],
      right: []
    }, s.forEach(o => {
      const D = this.panelButtons.find(X => X.projection === o.projection);
      if (!D) return;
      const Z = D.bodyAreas.filter(X => X._id === o.id);
      this.schemaSelectedMap[o.projection].push(...Z), o.isCompleted ? this.preselected[o.projection].push(o.id) : this.schemaSelectedMapId[o.projection].push(o.id);
    }), this.schemaSelectedFlat = Object.keys(this.schemaSelectedMap).map(o => this.schemaSelectedMap[o].map(D => ({
      id: D._id,
      projection: o,
      name: D.name
    }))).flat(), this.imageMapperComponent?.renderPrefilledAreas(), this.cdr.markForCheck());
  }
  setHemaAreas(s) {
    const {
        id: o,
        projection: D
      } = s,
      Z = this.readHemaAreasFromForm(),
      X = {
        front: [],
        back: [],
        left: [],
        right: []
      };
    OC(this.getControl("hemaAreas"), Z), Z.forEach(oe => {
      oe.isCompleted && X[oe.projection].push(oe.id);
    }), s.isCompleted ? (this.schemaSelectedMapId[D] = this.schemaSelectedMapId[D].filter(oe => oe !== o), this.preselected = X) : (this.schemaSelectedMapId[D] = this.schemaSelectedMapId[D].concat(s.id), this.preselected[D] = this.preselected[D].filter(oe => oe !== s.id));
  }
  convert2EHRFormat() {
    console.log(fu.KE.map(s => ({
      code: s._id,
      text: s.name,
      coords: s.coords.join(", ")
    })));
  }
  getControl(s) {
    return (0, nf.YV)(this.skinFormGroup, s);
  }
  rotateBody() {
    let s = this.activePanelButtonIndex;
    s = 3 === s ? 0 : s + 1, this.loadBody(s);
  }
  get activeProjection() {
    return this.isTablet ? this.adaptivePanelButtons[this.activePanelButtonIndex].projection : this.panelButtons[this.activePanelButtonIndex].projection;
  }
  loadBody(s) {
    this.activePanelButtonIndex = s, this.selectedBodyUrl = this.isTablet ? this.adaptivePanelButtons[s].bodyPath : this.panelButtons[s].bodyPath, this.label = this.isTablet ? this.adaptivePanelButtons[s].label : this.panelButtons[s].label, this.cdr.markForCheck(), setTimeout(() => this.imageMapperComponent?.renderPrefilledAreas());
  }
  closeDirectory(s) {
    s && this.resetSchemaSelected(), this.isHemaDirOpen = !1;
  }
  resetSchemaSelected() {
    this.schemaSelectedMap = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.schemaSelectedMapId = {
      front: [],
      back: [],
      left: [],
      right: []
    }, this.preselected = {
      front: [],
      back: [],
      left: [],
      right: []
    }, OC(this.getControl("hemaAreas"), []), this.schemaSelectedFlat = [];
  }
  selectAreaFromSchema(s) {
    const o = this.schemaSelectedMap[this.activeProjection].findIndex(D => D._id === s.area._id);
    this.schemaSelectedMap[this.activeProjection] = o >= 0 ? this.schemaSelectedMap[this.activeProjection].filter(D => D._id !== s.area._id) : this.schemaSelectedMap[this.activeProjection].concat(s.area), this.schemaSelectedMapId[this.activeProjection] = o >= 0 ? this.schemaSelectedMapId[this.activeProjection].filter(D => D !== s.area._id) : this.schemaSelectedMapId[this.activeProjection].concat(s.area._id), this.addHemaAreasToForm(), this.cdr.markForCheck();
  }
  removeAreaFromStick(s) {
    this.schemaSelectedMap[s.projection] = this.schemaSelectedMap[s.projection].filter(o => o._id !== s.id), this.schemaSelectedMapId[s.projection] = this.schemaSelectedMapId[s.projection].filter(o => o !== s.id), this.preselected[s.projection] = this.preselected[s.projection].filter(o => o !== s.id), this.addHemaAreasToForm(), this.cdr.markForCheck();
  }
  treeHandler(s) {
    this.selectSchemaAreaFromTree(s), this.cdr.markForCheck();
  }
  selectSchemaAreaFromTree(s) {
    this.resetSchemaSelected(), s.forEach(o => {
      const D = this.panelButtons.find(Z => Z.projection === o.projection).bodyAreas;
      this.schemaSelectedMap[o.projection].push(...D.filter(Z => Z._id === o.id)), this.schemaSelectedMapId[o.projection] = this.schemaSelectedMap[o.projection].map(({
        _id: Z
      }) => Z);
    }), this.addHemaAreasToForm(), this.imageMapperComponent.renderPrefilledAreas();
  }
  addHemaAreasToForm() {
    this.schemaSelectedFlat = Object.keys(this.schemaSelectedMap).map(D => this.schemaSelectedMap[D].map(Z => ({
      id: Z._id,
      projection: D,
      name: Z.name
    }))).flat();
    const s = this.readHemaAreasFromForm(),
      o = this.schemaSelectedFlat.map(D => {
        const Z = s.find(ue => ue.id === D.id),
          X = Z?.photos,
          oe = Z?.isCompleted;
        return new fu.eP(D.id, D.projection, D.name, X, oe);
      });
    OC(this.getControl("hemaAreas"), o);
  }
});
