// Extracted class; external identifiers resolve in modules/56470.js.
(class {
  constructor(It, At, _n, it, _e, gt, ni, So, Er, Br, vr, zr, ks) {
    this.modalRef = It, this.modalData = At, this.messageService = _n, this.luValidators = it, this.patientService = _e, this.ehrService = gt, this.cdr = ni, this.store = So, this.employeesService = Er, this.stomaNewCompositionService = Br, this.compositionService = vr, this.confirmationModalService = zr, this.modalService = ks, this.maxDate = new Date(), this.minDate = new Date(1900, 0, 1), this.hintText = "Уже было проведено сегодня", this.dateControl = new fe.NI(new Date(), [fe.kI.required, this.luValidators.dateMax(this.maxDate)]), this.patientInfo = null, this.stomaList = [], this.doctorList = [], this.isDoctor = !1, this.isTablet = !1, this.isLoad = !1, this.showValidationErrors = !1, this.expandedProtocolId = null, this.sourceStomas = [], this.actualPatientEhrId = null, this.destroy$ = new e.x();
  }
  ngOnInit() {
    var It = this;
    this.modalData.stream$.pipe((0, m.R)(this.destroy$)).subscribe({
      next: At => {
        if (At && (!this.currentEntityId || this.currentEntityId === At?.actionData.entityId)) {
          this.patientInfo = At.selectedPatient, this.isTablet = !!At.isTablet, this.currentUser = At.currentUser, this.sourceStomas = (At?.actionData?.data?.stomas?.elements ?? []).map(it => ({
            ...it,
            stomaCareMarks: [...(it.stomaCareMarks ?? [])]
          }));
          const _n = At?.actionData?.data?.stomas?.minInstallDate ?? this.sourceStomas.map(it => it.installDate).filter(Boolean).sort()[0];
          _n && (this.minDate = new Date(_n)), this.dateControl.setValidators([fe.kI.required, this.luValidators.dateMin(this.minDate), this.luValidators.dateMax(this.maxDate)]), this.dateControl.updateValueAndValidity({
            emitEvent: !1
          }), this.currentEntityId || this.dateControl.setValue(Y()(At.dateRangeWidgetValue).format("YYYY-MM-DD"), {
            emitEvent: !1
          }), this.currentEntityId = At?.actionData.entityId, this.initialize();
        }
      }
    }), this.dateControl.valueChanges.pipe((0, m.R)(this.destroy$)).subscribe(function () {
      var At = (0, M.Z)(function* (_n) {
        It.store.dispatch((0, st.rr)({
          observationWatchDate: _n
        })), It.dateControl.valid && (yield It.loadStomas());
      });
      return function (_n) {
        return At.apply(this, arguments);
      };
    }());
  }
  ngOnDestroy() {
    this.destroy$.next(), this.destroy$.complete();
  }
  triggerReloadTargetList() {
    const {
      $stream: It,
      targetList: At
    } = this.modalData.refresh;
    It && At && It.next(At);
  }
  initialize() {
    var It = this;
    return (0, M.Z)(function* () {
      try {
        const At = yield (0, G.z)(It.store.select(be.S8).pipe((0, a.h)(Boolean), (0, pe.q)(1)));
        It.currentUser = It.currentUser ?? At;
        const _n = It.currentUser?.jobTitle?.name?.toLowerCase() ?? "";
        It.isDoctor = _n.includes("врач"), yield It.loadDoctors(), yield It.loadStomas();
      } catch (At) {
        console.error("Не удалось инициализировать карту наблюдения:", At), It.messageService.error("Не удалось загрузить карту наблюдения", {
          marginBottom: 44
        });
      }
    })();
  }
  loadDoctors() {
    var It = this;
    return (0, M.Z)(function* () {
      It.isLoad = !0;
      const At = yield (0, G.z)(It.store.select(Re.pe).pipe((0, pe.q)(1))),
        _n = At?.length ? At : (yield (0, G.z)(It.employeesService.getEmployeesList(It.currentUser.department.id))).employees;
      It.doctorList = _n.filter(it => {
        const _e = it?.jobTitle?.name?.toLowerCase() ?? "";
        return !(_e.includes("сестра") || _e.includes("брат"));
      }), At?.length || It.store.dispatch((0, st.EB)({
        doctorList: It.doctorList
      })), It.isLoad = !1;
    })();
  }
  loadStomas() {
    var It = this;
    return (0, M.Z)(function* () {
      const At = It.selectedDate;
      It.isLoad = !0, It.showValidationErrors = !1;
      const _n = It.sourceStomas.filter(it => It.isStomaVisibleOnDate(it, At)).map(it => It.createCard(it)).sort((it, _e) => Y()(_e.installDate).valueOf() - Y()(it.installDate).valueOf());
      try {
        if (!It.actualPatientEhrId) {
          const gt = yield (0, G.z)(It.patientService.findPatientInfo(It.patientInfo.actualPatientId));
          It.actualPatientEhrId = gt?.ehrId ?? null;
        }
        if (!It.actualPatientEhrId) throw new Error("Не найден ehrId пациента.");
        const it = yield (0, G.z)(It.ehrService.getEhr(It.actualPatientEhrId));
        (yield Promise.all(_n.map(gt => (0, G.z)(it.getMedicalEntry(gt.protocolId))))).forEach(gt => It.applyCompositionData(_n, gt)), It.stomaList = _n, It.expandedProtocolId = _n.some(gt => gt.protocolId === It.expandedProtocolId) ? It.expandedProtocolId : _n[0]?.protocolId ?? null;
      } catch (it) {
        console.error("Не удалось загрузить данные ухода:", it), It.stomaList = _n, It.messageService.error("Не удалось загрузить события ухода", {
          marginBottom: 44
        });
      } finally {
        It.isLoad = !1, It.cdr.markForCheck();
      }
    })();
  }
  createCard(It) {
    const At = this.getRepDeviceByStomaKind(It.stomaKind),
      _n = It.stomaCareMarks?.find(it => !!it.finishTime);
    return {
      ...It,
      careCaseId: It.careCaseId ?? this.patientInfo?.careCaseId,
      signed: !!It.signed,
      finishDate: It.finishDate ?? (_n ? `${_n.observationDate}T${_n.finishTime ?? "00:00"}` : void 0),
      repDeviceData: At,
      watchForm: this.createEmptyWatch(At.value),
      todayEvents: [],
      todayCompositionId: null,
      careDates: new Set(),
      signatureDate: _n?.observationDate ?? null,
      unsignPayload: null,
      currentCareMark: null,
      compositionLoaded: !1,
      hasMissingDays: !1,
      missingDaysLabel: "",
      hasCareMarks: It.stomaCareMarks ?? []
    };
  }
  applyCompositionData(It, At) {
    const _n = At.getUid(),
      it = It.find(gt => this.compareUids(gt.protocolId, _n));
    it && (it.signed = !!At.getRoot().getTags()?.some(gt => "sign" === gt.tag), it.compositionLoaded = !0, [At.getRoot(), ...At.getChildren()].forEach(gt => {
      const ni = gt.getComposition().getData()?.карта_наблюдения_за_пациентом_со_стомой?.[0],
        So = this.parseOpenEhr(ni),
        Er = So?.дата_и_время?.дата_наблюдения?.дата_наблюдения;
      if (!Er) return;
      const Br = this.mapStomaEvents(So, gt.getUid(), this.currentUser);
      Br.some(zr => Gi.has(zr.type)) && it.careDates.add(Y()(Er).format("YYYY-MM-DD"));
      const vr = Br.find(zr => "finish" === zr.type);
      vr && (it.signatureDate = Y()(Er).format("YYYY-MM-DD"), it.finishDate = `${it.signatureDate}T${vr.time ?? "00:00"}`), Y()(Er).isSame(Y()(this.selectedDate), "day") && (it.todayEvents = Br, it.todayCompositionId = gt.getUid());
    }), it.signed && it.todayEvents.length && (it.watchForm = this.createWatchFromEvents(it.todayEvents, it.repDeviceData?.value ?? "")));
  }
  isStomaVisibleOnDate(It, At) {
    if (Y()(It.installDate).isAfter(Y()(At), "day")) return !1;
    const it = It.stomaCareMarks?.find(gt => !!gt.finishTime),
      _e = It.finishDate ?? it?.observationDate;
    return !_e || !Y()(_e).isBefore(Y()(At), "day");
  }
  createWatchFromEvents(It, At) {
    const _n = this.createEmptyWatch(At),
      it = _e => It.find(gt => gt.type === _e);
    return _n.bandage = {
      check: !!it("bandage"),
      time: it("bandage")?.time ?? null
    }, _n.replacement = {
      check: !!it("replace"),
      time: it("replace")?.time ?? null,
      device: it("replace")?.device ?? At
    }, _n.treatment = {
      check: !!it("treatment"),
      time: it("treatment")?.time ?? null
    }, _n.inflammation = {
      check: !!it("inflammation"),
      time: it("inflammation")?.time ?? null,
      desc: it("inflammation")?.desc ?? ""
    }, _n.excretion = {
      check: !!it("excretion"),
      time: it("excretion")?.time ?? null,
      desc: it("excretion")?.desc ?? ""
    }, _n.disorder = {
      check: !!it("disorder"),
      time: it("disorder")?.time ?? null
    }, _n.complaint = {
      check: !!it("complaint"),
      time: it("complaint")?.time ?? null,
      desc: it("complaint")?.desc ?? ""
    }, _n.addInfo = {
      check: !!it("addInfo"),
      time: it("addInfo")?.time ?? null,
      desc: it("addInfo")?.desc ?? ""
    }, _n.deleteStoma = {
      check: !!it("deleteStoma"),
      time: it("deleteStoma")?.time ?? null,
      reason: it("deleteStoma")?.reason ?? "",
      complication: it("deleteStoma")?.complication ?? ""
    }, _n.finishStoma = {
      check: !!it("finish"),
      time: it("finish")?.time ?? null,
      comment: it("finish")?.comment ?? ""
    }, _n;
  }
  get selectedDate() {
    return Y()(this.dateControl.value).format("YYYY-MM-DD");
  }
  get saveText() {
    return this.stomaList.some(It => !It.signed && It.watchForm.finishStoma.check) ? "Сохранить и подписать" : "Сохранить";
  }
  get hasEditableStomas() {
    return this.stomaList.some(It => !It.signed);
  }
  hasEvent(It, At) {
    const _n = "replacement" === At ? "replace" : "finishStoma" === At ? "finish" : At;
    return It.todayEvents.some(it => it.type === _n);
  }
  canUnsign(It) {
    return !!It.signed;
  }
  canDeleteStoma(It) {
    return !It.signed && It.compositionLoaded && !It.stomaCareMarks?.length && 0 === It.careDates.size;
  }
  canFinish(It) {
    return !It.stomaCareMarks.find(_n => _n.observationDate > this.selectedDate);
  }
  markDirty(It) {
    It.signed || (this.showValidationErrors = !1);
  }
  onCheck(It, At, _n) {
    if (_n.signed) return;
    const it = _n.watchForm;
    it[At].time = It ? Y()().format("HH:mm") : null, It || ("replacement" === At && (it.replacement.device = _n.repDeviceData?.value ?? ""), ("inflammation" === At || "excretion" === At || "complaint" === At || "addInfo" === At) && (it[At].desc = ""), "deleteStoma" === At && (it.deleteStoma.reason = "", it.deleteStoma.complication = ""), "finishStoma" === At && (it.finishStoma.comment = "")), "finishStoma" === At && It && this.updateMissingDays(_n), this.showValidationErrors = !1;
  }
  fieldHasError(It, At, _n) {
    if (!this.showValidationErrors || !It.watchForm[At].check) return !1;
    const it = It.watchForm[At][_n];
    return "time" === _n ? !this.isValidTime(it) : !String(it ?? "").trim();
  }
  doctorHasError(It) {
    return this.showValidationErrors && !this.isDoctor && this.hasAnySelectedActivity(It.watchForm) && !It.watchForm.selectedDoctor;
  }
  isValidTime(It) {
    if (!It || !/^\d{2}:\d{2}$/.test(It)) return !1;
    const [At, _n] = It.split(":").map(Number);
    return At >= 0 && At < 24 && _n >= 0 && _n < 60;
  }
  isCardValid(It) {
    const At = It.watchForm,
      it = ["bandage", "replacement", "treatment", "inflammation", "excretion", "disorder", "complaint", "addInfo", "deleteStoma", "finishStoma"].every(So => !At[So].check || this.isValidTime(At[So].time)),
      _e = !At.replacement.check || !!At.replacement.device?.trim(),
      gt = !At.deleteStoma.check || !!At.deleteStoma.reason?.trim() && !!At.deleteStoma.complication?.trim();
    return it && _e && gt && (this.isDoctor || !!At.selectedDoctor);
  }
  hasAnyCareActivity(It) {
    return [It.bandage, It.replacement, It.treatment, It.inflammation, It.excretion, It.disorder, It.complaint, It.addInfo, It.deleteStoma].some(At => At.check);
  }
  hasAnySelectedActivity(It) {
    return this.hasAnyCareActivity(It) || It.finishStoma.check;
  }
  getMissingDays(It) {
    const At = new Set(It.careDates);
    this.hasAnyCareActivity(It.watchForm) && At.add(this.selectedDate);
    const _n = [];
    let it = Y()(It.installDate).startOf("day");
    const _e = Y()(this.selectedDate).startOf("day");
    for (; it.isBefore(_e, "day") || it.isSame(_e, "day");) {
      const gt = it.format("YYYY-MM-DD");
      At.has(gt) || _n.push(gt), it = it.add(1, "day");
    }
    return _n;
  }
  updateMissingDays(It) {
    const At = this.getMissingDays(It);
    It.hasMissingDays = At.length > 0, It.missingDaysLabel = this.declineDays(At.length);
  }
  onSave() {
    var It = this;
    return (0, M.Z)(function* () {
      const At = It.stomaList.filter(_e => !_e.signed && It.hasAnySelectedActivity(_e.watchForm));
      if (!At.length) return void It.messageService.info("Данные для сохранения отсутствуют", {
        marginBottom: 44
      });
      if (At.some(_e => !_e.compositionLoaded)) return void It.messageService.error("Дождитесь загрузки данных ухода и повторите попытку", {
        marginBottom: 44
      });
      if (It.showValidationErrors = !0, It.dateControl.invalid || At.some(_e => !It.isCardValid(_e))) return It.messageService.error("Заполните обязательные поля", {
        marginBottom: 44
      }), void It.cdr.markForCheck();
      const _n = At.filter(_e => _e.watchForm.finishStoma.check);
      for (const _e of _n) {
        const gt = new Set(_e.careDates);
        if (It.hasAnyCareActivity(_e.watchForm) && gt.add(It.selectedDate), !gt.size) return It.updateMissingDays(_e), It.messageService.error("Невозможно подписать карту: отметки ухода отсутствуют за весь период", {
          marginBottom: 44
        }), void It.cdr.markForCheck();
      }
      const it = _n.map(_e => ({
        stoma: _e,
        missingDays: It.getMissingDays(_e)
      })).filter(_e => _e.missingDays.length > 0);
      if (it.forEach(({
        stoma: _e,
        missingDays: gt
      }) => {
        _e.hasMissingDays = !0, _e.missingDaysLabel = It.declineDays(gt.length);
      }), it.length) {
        const gt = {
          title: "Подписание карты наблюдения",
          message: `\u0415\u0441\u0442\u044c \u0434\u043d\u0438 \u0431\u0435\u0437 \u043e\u0442\u043c\u0435\u0442\u043e\u043a \u0443\u0445\u043e\u0434\u0430 (${it.map(({
            stoma: So,
            missingDays: Er
          }) => `${So.stomaKind}: ${It.declineDays(Er.length)}`).join("; ")}). \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0434\u043d\u0438 \u0438\u043b\u0438 \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e.`,
          cancelButtonTitle: "Заполнить",
          buttonTitle: "Подписать"
        };
        if (!(yield (0, G.z)(It.confirmationModalService.openDialog(gt, !0)))) return;
      }
      It.isLoad = !0;
      try {
        for (const _e of At) yield (0, G.z)(It.stomaNewCompositionService.saveStoma(It.buildPayload(_e), It.actualPatientEhrId));
        yield Fn(), It.triggerReloadTargetList(), yield Fn(), _n.length ? (_n.forEach(_e => It.markAsSignedLocally(_e)), yield It.loadStomas(), It.messageService.success("Данные по уходу подписаны", {
          marginBottom: 44
        })) : (It.messageService.success("Данные по уходу сохранены", {
          marginBottom: 44
        }), It.modalRef.close(!0));
      } catch (_e) {
        console.error("Ошибка сохранения карты наблюдения:", _e), It.messageService.error("Не удалось сохранить данные по уходу", {
          marginBottom: 44
        });
      } finally {
        It.isLoad = !1, It.cdr.markForCheck();
      }
    })();
  }
  buildPayload(It) {
    const At = It.watchForm,
      _n = _e => _e.check ? _e : null,
      it = this.isDoctor ? {
        id: this.currentUser.employeeId,
        name: [this.currentUser.lastName, this.currentUser.firstName, this.currentUser.secondName].filter(Boolean).join(" ")
      } : {
        id: At.selectedDoctor?.id ?? At.selectedDoctor?.employeeId ?? "",
        name: At.selectedDoctor?.fio ?? At.selectedDoctor?.name ?? ""
      };
    return {
      protocolId: It.protocolId,
      careCaseId: It.careCaseId ?? this.patientInfo.careCaseId,
      installDate: It.installDate,
      observationDate: this.selectedDate,
      stoma: It,
      selectedDoctor: it,
      bandage: _n({
        ...At.bandage
      }),
      replacement: _n({
        ...At.replacement
      }),
      treatment: _n({
        ...At.treatment
      }),
      inflammation: _n({
        ...At.inflammation
      }),
      excretion: _n({
        ...At.excretion
      }),
      disorder: _n({
        ...At.disorder
      }),
      complaint: _n({
        ...At.complaint
      }),
      addInfo: _n({
        ...At.addInfo
      }),
      deleteStoma: _n({
        ...At.deleteStoma
      }),
      finishStoma: _n({
        ...At.finishStoma
      })
    };
  }
  markAsSignedLocally(It) {
    const At = It.watchForm.finishStoma.time ?? "00:00",
      _n = this.sourceStomas.find(it => this.compareUids(it.protocolId, It.protocolId));
    _n && (_n.signed = !0, _n.finishDate = `${this.selectedDate}T${At}`, _n.stomaCareMarks = [...(_n.stomaCareMarks ?? []).filter(it => !it.finishTime), {
      compositionId: It.todayCompositionId ?? It.protocolId,
      observationDate: this.selectedDate,
      finishTime: At
    }]), It.signed = !0, It.signatureDate = this.selectedDate, It.finishDate = `${this.selectedDate}T${At}`;
  }
  openAddStomaModal() {
    var It = this;
    return (0, M.Z)(function* () {
      It.store.dispatch((0, st.cf)({
        modal: "AddStomaModalComponent"
      }));
      const At = It.modalService.open(new d.X(Et.z), {
          panelClass: It.isTablet ? "full-screen-modal" : void 0,
          width: It.isTablet ? "100vw" : void 0,
          height: It.isTablet ? "100vh" : void 0,
          data: {
            patientInfo: It.patientInfo,
            date: It.dateControl.value
          }
        }),
        _n = yield (0, G.z)(At.afterClose(), {
          defaultValue: null
        });
      _n?.protocolId && (It.sourceStomas = [_n, ...It.sourceStomas], It.expandedProtocolId = _n.protocolId, yield It.loadStomas());
    })();
  }
  openDeleteStomaModal(It) {
    var At = this;
    return (0, M.Z)(function* () {
      const _n = 1 === At.sourceStomas.length,
        it = _n ? {
          title: "Удаление карты наблюдения",
          message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?",
          cancelButtonTitle: "Отменить",
          buttonTitle: "Удалить"
        } : {
          title: "Удаление карты наблюдения",
          message: `\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u041a\u0430\u0440\u0442\u0443 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0437\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u043c \u0441\u043e \u0441\u0442\u043e\u043c\u043e\u0439 (${It.stomaKind})?`,
          cancelButtonTitle: "Отменить",
          buttonTitle: "Удалить"
        };
      if (yield (0, G.z)(At.confirmationModalService.openDialog(it, !0))) {
        At.isLoad = !0;
        try {
          if (!At.actualPatientEhrId) throw new Error("Не найден ehrId пациента.");
          const gt = yield (0, G.z)(At.compositionService.getEhr(At.actualPatientEhrId));
          yield (0, G.z)(At.compositionService.deleteStomaDocument(gt, It.protocolId)), At.sourceStomas = At.sourceStomas.filter(ni => !At.compareUids(ni.protocolId, It.protocolId)), At.triggerReloadTargetList(), At.messageService.info("Карта наблюдения удалена", {
            marginBottom: 44
          }), _n ? At.modalRef.close(!0) : yield At.loadStomas();
        } catch (gt) {
          console.error("Ошибка удаления карты наблюдения:", gt), At.messageService.error("Не удалось удалить карту наблюдения", {
            marginBottom: 44
          });
        } finally {
          At.isLoad = !1, At.cdr.markForCheck();
        }
      }
    })();
  }
  updateStomaItem(It, At) {
    At.todayEvents = It.eventsList ?? [], At.currentCareMark = It.currentCareMark;
    const _n = It.payload?.selectedDoctor;
    At.unsignPayload = It.payload ? {
      ...It.payload,
      selectedDoctor: _n?.name ? _n : It.selectDoc?.selectDoctor ?? null
    } : null, this.cdr.markForCheck();
  }
  onEventsChanged() {
    var It = this;
    return (0, M.Z)(function* () {
      It.isLoad = !0, It.triggerReloadTargetList(), yield Fn(), yield It.loadStomas(), It.cdr.markForCheck(), It.isLoad = !1;
    })();
  }
  onEventCheckLoad(It) {
    this.isLoad = It;
  }
  onUnSign(It) {
    var At = this;
    return (0, M.Z)(function* () {
      if (!At.canUnsign(It)) return;
      if (!It.unsignPayload || !At.actualPatientEhrId) return void At.messageService.error("Данные для снятия подписи ещё не загружены", {
        marginBottom: 44
      });
      const _n = {
        ...It.unsignPayload,
        protocolId: It.protocolId,
        careCaseId: It.careCaseId ?? At.patientInfo.careCaseId,
        installDate: It.installDate,
        observationDate: At.selectedDate,
        currentCareMark: It.currentCareMark,
        stoma: {
          protocolId: It.protocolId,
          stomaKind: It.stomaKind,
          stomaName: It.stomaName,
          stomaCareMarks: It.stomaCareMarks ?? [],
          stomaKindId: It.stomaKindId,
          installDate: It.installDate,
          sign: It.signed,
          employeeId: It.employeeId,
          stomaSize: It.stomaSize,
          careCaseId: It.careCaseId ?? At.patientInfo.careCaseId,
          updated: It.updated
        }
      };
      At.isLoad = !0;
      try {
        yield (0, G.z)(At.stomaNewCompositionService.unSignStoma(At.actualPatientEhrId, _n, It.protocolId));
        const it = At.sourceStomas.find(_e => At.compareUids(_e.protocolId, It.protocolId));
        it && (it.signed = !1, it.finishDate = void 0, it.stomaCareMarks = (it.stomaCareMarks ?? []).filter(_e => !_e.finishTime)), yield Fn(5e3), At.triggerReloadTargetList(), yield Fn(), yield At.loadStomas(), At.messageService.success("Подпись снята", {
          marginBottom: 44
        });
      } catch (it) {
        console.error("Ошибка при снятии подписи:", it), At.messageService.error("Не удалось снять подпись", {
          marginBottom: 44
        });
      } finally {
        At.isLoad = !1, At.cdr.markForCheck();
      }
    })();
  }
  displayDoctor(It) {
    return It ? [It?.fio ?? It?.name ?? It?.selectDoctor?.name, It?.jobTitle?.name, It?.department?.name].filter(Boolean).join(", ") : "";
  }
  trackByProtocolId(It, At) {
    return At.protocolId;
  }
  closeModal() {
    this.modalRef.close(!1);
  }
  mapStomaEvents(It, At, _n) {
    const it = le([_n?.lastName, _n?.firstName, _n?.secondName].filter(Boolean).join(" "));
    return [{
      type: "bandage",
      title: "Смена повязки",
      source: It?.смена_повязки?.подробности_о_процедуре,
      getDate: gt => gt?.дата_смены_повязки?.дата_смены_повязки,
      getTime: gt => gt?.дата_смены_повязки?.время_смены_повязки,
      getEmployee: Rt
    }, {
      type: "replace",
      title: "Частичная замена системы",
      source: It?.частичная_замена_системы?.подробности_о_процедуре,
      getDate: gt => gt?.дата_частичной_замены_системы?.дата_частичной_замены,
      getTime: gt => gt?.дата_частичной_замены_системы?.время_частичной_замены,
      getEmployee: Rt,
      extra: gt => ({
        device: gt?.устройство?.устройство
      })
    }, {
      type: "treatment",
      title: "Обработка кожных покровов",
      source: It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа,
      getDate: gt => gt?.дата_обработки?.дата_обработки,
      getTime: gt => gt?.дата_обработки?.время_обработки,
      getEmployee: Rt
    }, {
      type: "inflammation",
      title: "Воспаление слизистой в месте стояния стомы",
      source: It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая,
      getDate: gt => gt?.дата_воспаления?.дата_воспаления,
      getTime: gt => gt?.дата_воспаления?.время_воспаления,
      getEmployee: Rt,
      extra: gt => ({
        desc: gt?.описание_воспаления
      })
    }, {
      type: "excretion",
      title: "Наличие отделяемого",
      source: It?.наличие_отделяемого?.контейнер,
      getDate: gt => gt?.дата_отделяемого?.дата_отделяемого,
      getTime: gt => gt?.дата_отделяемого?.время_отделяемого,
      getEmployee: Rt,
      extra: gt => ({
        desc: gt?.отделяемое_из_уретры?.характер_отделяемого
      })
    }, {
      type: "disorder",
      title: "Функциональность стомы нарушена",
      source: It?.функциональность_стомы_нарушена,
      getDate: gt => gt?.дата?.дата_нарушения_функциональности_стомы,
      getTime: gt => gt?.дата?.время_нарушения_функциональности_стомы,
      getEmployee: Rt
    }, {
      type: "complaint",
      title: "Жалобы пациента",
      source: It?.жалобы_пациента?.жалобы,
      getDate: gt => gt?.дата_жалобы?.дата_жалобы,
      getTime: gt => gt?.дата_жалобы?.время_жалобы,
      getEmployee: Rt,
      extra: gt => ({
        desc: gt?.описание_жалобы
      })
    }, {
      type: "addInfo",
      title: "Дополнительная информация",
      source: It?.контейнер,
      getDate: gt => gt?.дата_и_время?.дата_дополнительной_информации,
      getTime: gt => gt?.дата_и_время?.время_дополнительной_информации,
      getEmployee: Rt,
      extra: gt => ({
        desc: gt?.описание_дополнительной_информации?.описание_дополнительной_информации
      })
    }, {
      type: "deleteStoma",
      title: "Закрытие стомы",
      source: It?.удаление_стомы,
      getDate: gt => gt?.дата_удаления?.дата_удаления,
      getTime: gt => gt?.дата_удаления?.время_удаления,
      getEmployee: gt => n(this.getClosureAuthor(gt)),
      getEmployeeRaw: gt => this.getClosureAuthor(gt),
      extra: gt => ({
        reason: gt?.причина_удаления?.причина_удаления,
        complication: gt?.причина_удаления?.осложнение
      })
    }, {
      type: "finish",
      title: "Завершение ухода",
      source: It?.завершение_ухода_за_пациентом?.any_event,
      getDate: gt => gt?.дата_завершения_ухода?.дата_завершения_ухода,
      getTime: gt => gt?.дата_завершения_ухода?.время_завершения_ухода,
      getEmployee: Rt,
      extra: gt => ({
        comment: gt?.комментарий
      })
    }].flatMap(gt => We(gt, it)).map(gt => ({
      ...gt,
      compositionId: At
    }));
  }
  parseOpenEhr(It) {
    if (Array.isArray(It)) return 1 === It.length ? this.parseOpenEhr(It[0]) : It.map(At => this.parseOpenEhr(At));
    if (It && "object" == typeof It) {
      const At = {};
      return Object.keys(It).forEach(_n => {
        At[_n.startsWith("|") ? _n.substring(1) : _n] = this.parseOpenEhr(It[_n]);
      }), "value" in At && 1 === Object.keys(At).length ? At.value : At;
    }
    return It;
  }
  getClosureAuthor(It) {
    return It?.фио_медсестры?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_врача?.фио_врача?.фио_врача?.value ?? It?.фио_врача?.фио_врача?.value ?? "";
  }
  createEmptyWatch(It = "") {
    return {
      bandage: {
        check: !1,
        time: null
      },
      replacement: {
        check: !1,
        time: null,
        device: It
      },
      treatment: {
        check: !1,
        time: null
      },
      inflammation: {
        check: !1,
        time: null,
        desc: ""
      },
      excretion: {
        check: !1,
        time: null,
        desc: ""
      },
      disorder: {
        check: !1,
        time: null
      },
      complaint: {
        check: !1,
        time: null,
        desc: ""
      },
      addInfo: {
        check: !1,
        time: null,
        desc: ""
      },
      deleteStoma: {
        check: !1,
        time: null,
        reason: "",
        complication: ""
      },
      finishStoma: {
        check: !1,
        time: null,
        comment: ""
      },
      selectedDoctor: null
    };
  }
  declineDays(It) {
    const At = Math.abs(It) % 100,
      _n = At % 10;
    return At > 10 && At < 20 ? `${It} \u0434\u043d\u0435\u0439` : _n > 1 && _n < 5 ? `${It} \u0434\u043d\u044f` : 1 === _n ? `${It} \u0434\u0435\u043d\u044c` : `${It} \u0434\u043d\u0435\u0439`;
  }
  compareUids(It, At) {
    return It?.split("::")[0] === At?.split("::")[0];
  }
  getRepDeviceByStomaKind(It) {
    const At = ["Калоприемник", "Мочеприемник", "Дренажная трубка", "Трахеостомическая трубка", "Гастростомическая трубка", "Нефростомическая трубка", "Цистостомическая трубка"];
    switch (It?.toLowerCase()) {
      case "колостома":
        return {
          value: "Калоприемник",
          options: ["Калоприемник"]
        };
      case "цистостома (эпицистостома)":
        return {
          value: "Мочеприемник",
          options: ["Мочеприемник"]
        };
      case "трахеостома":
        return {
          value: "Трахеостомическая трубка",
          options: ["Трахеостомическая трубка"]
        };
      case "гастростома":
        return {
          value: "Гастростомическая трубка",
          options: ["Гастростомическая трубка"]
        };
      default:
        return {
          value: "Калоприемник",
          options: At
        };
    }
  }
});
