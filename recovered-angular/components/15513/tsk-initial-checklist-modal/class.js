// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z) {
    this.indexData = s, this.modalRef = o, this.fb = D, this.attachedDocumentService = Z, this.breakpointObserver = (0, e.f3M)(Lp.Yg), this.isTablet = !1, this.messageService = (0, e.f3M)(tf.Jv), this.cdr = (0, e.f3M)(e.sBO), this.confirmationModalService = (0, e.f3M)(MC.k), this.store = (0, e.f3M)(Qr.yh), this.compositionsBaseService = (0, e.f3M)(Z_.W), this.containerWidth = 0, this.menuWidth = 0, this.medicalDay = cP.medicalDay, this.isLoad = !0, this.isStartUnsigned = !1, this.checklistForm = this._initForm(), this.isCommonStateValid = !1, this.isJKTStateValid = !1, this.isODAStateValid = !1, this.showValidationErrors = !1, this.selectedMenuIndex = 0, this.childEntriesMap = {
      t_patient_scales: {
        cls: bm.CE,
        field: "morse"
      },
      t_form_004: {
        cls: bm.KS,
        field: "form004"
      },
      t_scale_NEWS2: {
        cls: bm.u,
        field: "news2"
      },
      t_anthropometric_data: {
        cls: bm.je,
        field: "anthropometry"
      }
    }, this.menuItems = [{
      label: "Общее состояние",
      name: "commonState"
    }, {
      label: "Состояние функций ЖКТ",
      name: "jktState"
    }, {
      label: "Состояние кожного покрова",
      name: "skinState"
    }, {
      label: "Состояние опорно - двигательного аппарата",
      name: "odaState"
    }, {
      label: "Пациенту установлено",
      name: "patientSet"
    }], this.adaptiveMenuItems = [{
      label: "Общее состояние",
      name: "commonState"
    }, {
      label: "Функции ЖКТ",
      name: "jktState"
    }, {
      label: "Кожный покров",
      name: "skinState"
    }, {
      label: "Опорно-двигательный аппарат",
      name: "odaState"
    }, {
      label: "Пациенту установлено",
      name: "patientSet"
    }], this.indexData = (0, Oc.yE)(Q4.F6, this.indexData), this.patient = (0, Oc.yE)(sP.xe, this.indexData.careCase), this.checkListCompositionUID = this.indexData.initialChecklist?.compositionUid, this.isLoad = !this.checkListCompositionUID;
  }
  ngOnInit() {
    this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(s => this.isTablet = s.matches), this.selectedMenu = this.menuItems[this.selectedMenuIndex], this.store.select(aP).pipe((0, Kn.t)(this), (0, Ma.b)(s => {
      this.medicalDay = s;
    })).subscribe();
  }
  ngAfterViewInit() {
    this.store.select(cl.S8).pipe((0, Kn.t)(this)).subscribe(s => {
      const o = new g2.I(s);
      this.getControl("owner").setValue(o.officialName), this.currentUser = o;
    }), this.compositionsBaseService.getPatientById(this.patient?.actualPatientId).pipe((0, Kn.t)(this), (0, ka.h)(s => (this.getControl("ehrId").setValue(s.ehrId), !!this.indexData.initialChecklist?.compositionUid)), (0, vs.w)(() => this._setCompositionData()), (0, Ja.K)(s => (this.isLoad = !0, (0, qO._)(() => s))), (0, vs.w)(() => this._attachFiles())).subscribe(() => this.cdr.markForCheck());
  }
  onItemHover(s, o) {
    this._calcItemScroll(s.target, o);
  }
  _calcItemScroll(s, o) {
    const D = this.menuContainerRef?.nativeElement;
    if (!(D && s && D.scrollWidth > D.clientWidth)) return;
    const X = D.clientWidth,
      oe = s.offsetLeft,
      ue = s.clientWidth,
      He = D.scrollLeft;
    (oe + ue > He + X - 100 || o + 1 === this.adaptiveMenuItems.length || oe < He + 100 || 0 === o) && D.scrollTo({
      left: oe - X / 2 + ue / 2,
      behavior: "smooth"
    });
  }
  selectMenu(s, o) {
    this.selectedMenu = s, this.selectedMenuIndex = o, setTimeout(() => {
      const D = this.menuRef.nativeElement.children[o];
      D && this._calcItemScroll(D, o);
    });
  }
  nextPrevItem(s) {
    const o = this.selectedMenuIndex + s;
    o >= 0 && o < this.adaptiveMenuItems.length && (this.selectedMenuIndex = o, this.selectMenu(this.adaptiveMenuItems[o], o));
  }
  getControl(s) {
    return (0, nf.YV)(this.checklistForm, s);
  }
  checkAndClose() {
    if (!this.getControl("common_state").value?.news2) return void this.messageService.warning("Подтвердите оценку шкалы NEWS2!");
    if (this.checklistForm.invalid || !this.isCommonStateValid || !this.isJKTStateValid || !this.isODAStateValid) return this.showValidationErrors = !0, this.checklistForm.markAllAsTouched(), this.checklistForm.updateValueAndValidity(), this.focusFirstInvalidSection(), this.messageService.error("Не заполнены обязательные поля!"), void this.cdr.markForCheck();
    const s = this.checklistForm.value;
    s?.skin_state?.hemaAreas && (s.skin_state.hemaAreas = s.skin_state?.hemaAreas.filter(o => o.isCompleted)), s?.common_state?.morse && (s.common_state.morse.scaleMorseTime = new Date()), this.modalRef.close(s);
  }
  unSign() {
    if (!this.isAllowUnsign) return this.messageService.warning("Снятие подписи не доступно!"), void this.cdr.markForCheck();
    this.isStartUnsigned = !0, this.medicalEntry.save().pipe((0, Kn.t)(this)).subscribe(() => {
      "SIGNED" !== this.medicalEntry.status() ? (this.isStartUnsigned = !1, this.messageService.success("Подпись снята"), this.showValidationErrors = !1, this.checklistForm.enable(), this.checklistForm.updateValueAndValidity(), this.cdr.markForCheck()) : this.messageService.warning("Ошибка снятия подписи");
    });
  }
  _setCompositionData() {
    return console.log("%cСчитываем данные композиции", "color: red"), console.log("%cполучаем главную композицию", "color: red"), this.compositionsBaseService.getEhr(this.getControl("ehrId").value).pipe((0, vs.w)(s => s.getMedicalEntry(this.checkListCompositionUID)), (0, Ma.b)(s => {
      if (s.delete(), !s.isEmpty()) try {
        const o = new bm.cg(s.getRoot()),
          D = o.parsedFromCompositionData;
        D?.skin_state?.hemaAreas && (D.skin_state.hemaAreas = function WD(c) {
          return c?.length ? c.map(s => {
            if (s?.name) return s;
            const o = function YD(c, s) {
                return c && s ? (I3[s] ?? []).find(D => D._id === String(c))?.name ?? "" : "";
              }(s?.id, s?.projection),
              D = s?.photosCompositionData?.find(Z => !!Z?.description)?.description;
            return {
              ...s,
              name: o || D || ""
            };
          }) : [];
        }(D.skin_state.hemaAreas).map(ue => (ue.isCompleted = !0, ue))), this.checklistForm.patchValue((0, Oc.yE)(fu.Pr, D)), "SIGNED" === s.status() && this.checklistForm.disable(), this.getControl("checkListCompositionUID").patchValue(this.checkListCompositionUID), this.getControl("patientScalesMorseFallScaleUid").patchValue(this.indexData.scales?.compositionUid), this.getControl("ownerId").patchValue(+o.composerData["|id"]), this.medicalEntry = s;
        const Z = this.getControl("common_state"),
          X = Z.value;
        s.getChildren().forEach(ue => {
          const He = ue.getTemplateId().split(".")[1];
          if (Object.keys(this.childEntriesMap).includes(He)) {
            const lt = this.childEntriesMap[He],
              ht = new lt.cls(ue);
            X[lt.field] = ht.parsedFromCompositionData[lt.field], X[lt.field].owner = ue.getComposition().getComposer().getValue().name, X[lt.field].compositionUid = ue.getUid().split(":")[0], X[lt.field].time_committed = this.indexData?.initialChecklist?.timeCommitted;
          }
        }), Z.patchValue(X), this.isLoad = !0;
      } catch {
        this.isLoad = !0, console.error("Ошибка чтения композиции...");
      }
      this.isLoad = !0, this.cdr.markForCheck();
    }));
  }
  _attachFiles() {
    const s = this.checklistForm.value;
    return s?.skin_state?.hemaAreas?.some(D => D.photosCompositionData && D.photosCompositionData.length && D.photosCompositionData.some(Z => !!Z.source)) ? (0, y1.D)(s.skin_state.hemaAreas.map((D, Z) => (0, y1.D)(D.photosCompositionData.map(X => "без фото" === X.source.toLowerCase() ? (0, La.of)(X.source) : this.attachedDocumentService.getFile(X.source).pipe((0, zs.U)(oe => new File([oe], X.name))))))).pipe((0, Ma.b)(D => {
      const Z = this.getControl("skin_state").value,
        X = Z?.hemaAreas;
      D.forEach((oe, ue) => {
        oe.every(He => He instanceof File) && (X[ue].photos = oe), delete X[ue].photosCompositionData;
      }), this.getControl("skin_state").patchValue({
        ...Z,
        hemaAreas: X
      });
    })) : (0, La.of)();
  }
  get isAllowUnsign() {
    if (!this.indexData.initialChecklist?.timeCommitted) return !1;
    const s = new Date(this.indexData.initialChecklist?.timeCommitted),
      o = Tg()().set({
        day: s.getDay() + 1,
        hour: this.medicalDay.hours,
        minute: this.medicalDay.minutes,
        second: 0
      }).toDate();
    return new Date() < o && this.checklistForm.disabled && this.currentUser.id === this.getControl("ownerId").value;
  }
  _initForm() {
    return this.fb.group({
      date: [null],
      time: [null],
      owner: [null],
      ownerId: [null],
      ehrId: [null],
      common_state: [null, [pr.kI.required]],
      jkt_state: [null, [pr.kI.required]],
      skin_state: [null],
      oda_state: [null, [pr.kI.required]],
      patient_set: [null],
      checkListCompositionUID: [null],
      patientScalesMorseFallScaleUid: [null]
    });
  }
  setChildFormValue(s, o) {
    this.checklistForm.get(s).setValue(o);
  }
  closeModal() {
    const o = ["common_state", "jkt_state", "skin_state", "oda_state", "patient_set"];
    (Object.entries(this.checklistForm.value).filter(([X, oe]) => o.includes(X)).some(([X, oe]) => !!oe) ? this.confirmationModalService.openDialog({
      title: "Предупреждение",
      message: "Введенные данные не будут сохранены! Закрыть форму?",
      buttonTitle: "Да",
      cancelButtonTitle: "Нет",
      size: 600
    }) : (0, La.of)(!0)).pipe((0, Kn.t)(this)).subscribe(() => this.modalRef.close());
  }
  isMenuItemInvalid(s) {
    if (!this.showValidationErrors) return !1;
    switch (s.name) {
      case "commonState":
        return this.getControl("common_state").invalid || !this.isCommonStateValid;
      case "jktState":
        return this.getControl("jkt_state").invalid || !this.isJKTStateValid;
      case "odaState":
        return this.getControl("oda_state").invalid || !this.isODAStateValid;
      default:
        return !1;
    }
  }
  focusFirstInvalidSection() {
    const s = this.isTablet ? this.adaptiveMenuItems : this.menuItems,
      o = s.findIndex(D => this.isMenuItemInvalid(D));
    o >= 0 && this.selectMenu(s[o], o);
  }
});
