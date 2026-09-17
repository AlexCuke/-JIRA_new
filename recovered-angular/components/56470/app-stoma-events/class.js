// Extracted class; external identifiers resolve in modules/56470.js.
(class {
  constructor(It, At, _n, it, _e, gt, ni, So) {
    this.cdr = It, this.composition = At, this.confirmationModalService = _n, this.messageService = it, this.store = _e, this.stomaNewCompositionService = gt, this.breakpointObserver = ni, this.stomaNotificationService = So, this.parentSigned = !1, this.updateStomaItem = new q.vpe(), this.isEventLoad = new q.vpe(), this.eventsChanged = new q.vpe(), this.destroy$ = new e.x(), this.card = null, this.eventsList = [], this.eventState = {}, this.isSigned = !1, this.compositionSigned = !1, this.events = !1, this.event = {
      0: !1,
      1: !1
    }, this.isTablet = !1, this.isLoad = !1, this.compositionId$ = new t.X(null);
  }
  ngOnInit() {
    this.breakpointObserver.observe(Dn.o).subscribe(It => this.isTablet = It.matches), (0, pt.a)([this.compositionId$, this.store.select(be.S8), this.store.select(Re.j3)]).pipe((0, Dt.x)(), (0, m.R)(this.destroy$), (0, a.h)(([It, At, _n]) => !!It && !!At && !!_n), (0, Nn.w)(([It, At, _n]) => this.composition.getCompositionNew(It).pipe((0, Ht.U)(it => ({
      composition: it,
      user: At,
      patient: _n
    }))))).subscribe(({
      composition: It,
      user: At,
      patient: _n
    }) => {
      this.currentUser = At, this.patient = _n, this.handleComposition(It);
    });
  }
  handleComposition(It) {
    const At = this.parseOpenEhr(It),
      _n = At?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой;
    this.card = At;
    const it = It?.tags?.find(_e => "sign" === _e.tag);
    if (this.compositionSigned = !!it?.value, this.isSigned = this.parentSigned || this.compositionSigned, this.eventsList = this.mapStomaEvents(_n, this.currentUser), this.eventsList) {
      const _e = _n?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача ?? _n?.сведения_о_враче_и_медицинской_сестре?.фио_медицинской_сестры?.фио_медицинской_сестры?.фио_медицинской_сестры;
      this.updateStomaItem.emit({
        eventsList: this.eventsList,
        selectDoc: {
          selectDoctor: {
            id: _e?.code,
            name: _e?.value
          }
        },
        currentCareMark: this.compositionId,
        payload: this.buildUnSignPayload()
      });
    }
  }
  ngOnChanges(It) {
    It.compositionId && this.compositionId$.next(this.compositionId), It.parentSigned && (this.isSigned = this.parentSigned || this.compositionSigned);
  }
  mapStomaEvents(It, At) {
    const _n = le([At?.lastName, At?.firstName, At?.secondName].filter(Boolean).join(" "));
    return [{
      type: "bandage",
      title: "Смена повязки",
      source: It?.смена_повязки?.подробности_о_процедуре,
      getDate: _e => _e?.дата_смены_повязки?.дата_смены_повязки,
      getTime: _e => _e?.дата_смены_повязки?.время_смены_повязки,
      getEmployee: Rt
    }, {
      type: "replace",
      title: "Частичная замена системы",
      source: It?.частичная_замена_системы?.подробности_о_процедуре,
      getDate: _e => _e?.дата_частичной_замены_системы?.дата_частичной_замены,
      getTime: _e => _e?.дата_частичной_замены_системы?.время_частичной_замены,
      getEmployee: Rt,
      extra: _e => ({
        device: _e?.устройство?.устройство
      })
    }, {
      type: "treatment",
      title: "Обработка кожных покровов",
      source: It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа,
      getDate: _e => _e?.дата_обработки?.дата_обработки,
      getTime: _e => _e?.дата_обработки?.время_обработки,
      getEmployee: Rt
    }, {
      type: "inflammation",
      title: "Воспаление слизистой в месте стояния стомы",
      source: It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая,
      getDate: _e => _e?.дата_воспаления?.дата_воспаления,
      getTime: _e => _e?.дата_воспаления?.время_воспаления,
      getEmployee: Rt,
      extra: _e => ({
        desc: _e?.описание_воспаления
      })
    }, {
      type: "excretion",
      title: "Наличие отделяемого",
      source: It?.наличие_отделяемого?.контейнер,
      getDate: _e => _e?.дата_отделяемого?.дата_отделяемого,
      getTime: _e => _e?.дата_отделяемого?.время_отделяемого,
      getEmployee: Rt,
      extra: _e => ({
        desc: _e?.отделяемое_из_уретры?.характер_отделяемого
      })
    }, {
      type: "disorder",
      title: "Функциональность стомы нарушена",
      source: It?.функциональность_стомы_нарушена,
      getDate: _e => _e?.дата?.дата_нарушения_функциональности_стомы,
      getTime: _e => _e?.дата?.время_нарушения_функциональности_стомы,
      getEmployee: Rt
    }, {
      type: "complaint",
      title: "Жалобы пациента",
      source: It?.жалобы_пациента?.жалобы,
      getDate: _e => _e?.дата_жалобы?.дата_жалобы,
      getTime: _e => _e?.дата_жалобы?.время_жалобы,
      getEmployee: Rt,
      extra: _e => ({
        desc: _e?.описание_жалобы
      })
    }, {
      type: "addInfo",
      title: "Дополнительная информация",
      source: It?.контейнер,
      getDate: _e => _e?.дата_и_время?.дата_дополнительной_информации,
      getTime: _e => _e?.дата_и_время?.время_дополнительной_информации,
      getEmployee: Rt,
      extra: _e => ({
        desc: _e?.описание_дополнительной_информации?.описание_дополнительной_информации
      })
    }, {
      type: "deleteStoma",
      title: "Закрытие стомы",
      source: It?.удаление_стомы,
      getDate: _e => _e?.дата_удаления?.дата_удаления,
      getTime: _e => _e?.дата_удаления?.время_удаления,
      getEmployee: _e => n(this.getClosureAuthor(_e)),
      getEmployeeRaw: _e => this.getClosureAuthor(_e),
      extra: _e => ({
        reason: _e?.причина_удаления?.причина_удаления,
        complication: _e?.причина_удаления?.осложнение
      })
    }, {
      type: "finish",
      title: "Завершение ухода",
      source: It?.завершение_ухода_за_пациентом?.any_event,
      getDate: _e => _e?.дата_завершения_ухода?.дата_завершения_ухода,
      getTime: _e => _e?.дата_завершения_ухода?.время_завершения_ухода,
      getEmployee: Rt,
      extra: _e => ({
        comment: _e?.комментарий
      })
    }].flatMap(_e => We(_e, _n));
  }
  getClosureAuthor(It) {
    return It?.фио_медсестры?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_медсестры?.фио_медсестры?.value ?? It?.фио_врача?.фио_врача?.фио_врача?.value ?? It?.фио_врача?.фио_врача?.value ?? "";
  }
  eventsToggle() {
    this.events = !this.events;
  }
  eventToggle(It) {
    this.eventState = {
      ...this.eventState,
      [It]: !this.eventState[It]
    };
  }
  deleteEvent(It, At) {
    var _n = this;
    return (0, M.Z)(function* () {
      const it = _n.buildUpdatePayload(_n.eventsList, At);
      if (it) try {
        yield (0, G.z)(_n.stomaNewCompositionService.deleteEventFromComposition(_n.card.ehrId, _n.compositionId, _n.protocolId, it));
      } catch (_e) {
        console.error("Ошибка при удалении отметки:", _e);
      }
    })();
  }
  parseOpenEhr(It) {
    if (Array.isArray(It)) return 1 === It.length ? this.parseOpenEhr(It[0]) : It.map(At => this.parseOpenEhr(At));
    if (It && "object" == typeof It) {
      const At = {};
      for (const _n of Object.keys(It)) {
        const it = It[_n];
        _n.startsWith("|") ? At[_n.substring(1)] = this.parseOpenEhr(it) : At[_n] = this.parseOpenEhr(it);
      }
      return "value" in At && 1 === Object.keys(At).length ? At.value : At;
    }
    return It;
  }
  buildUpdatePayload(It, At) {
    const _n = It[At];
    if (!_n) return null;
    const it = this.card?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой,
      _e = structuredClone(it),
      {
        type: ni,
        sourceIndex: So
      } = _n,
      Er = {
        bandage: {
          block: "смена_повязки",
          arrayPath: ["подробности_о_процедуре"]
        },
        replace: {
          block: "частичная_замена_системы",
          arrayPath: ["подробности_о_процедуре"]
        },
        treatment: {
          block: "обработка_кожных_покровов_вокруг_стомы",
          arrayPath: ["any_event", "кожа"]
        },
        inflammation: {
          block: "воспаление_слизистой_в_месте_стояния_стомы",
          arrayPath: ["any_event", "слизистая"]
        },
        excretion: {
          block: "наличие_отделяемого",
          arrayPath: ["контейнер"]
        },
        disorder: {
          block: "функциональность_стомы_нарушена",
          arrayPath: []
        },
        complaint: {
          block: "жалобы_пациента",
          arrayPath: ["жалобы"]
        },
        addInfo: {
          block: "контейнер",
          arrayPath: []
        }
      }[ni];
    if (Er) {
      const {
        block: zr,
        arrayPath: ks
      } = Er;
      let aa = _e?.[zr];
      if (!aa) return null;
      for (let ul = 0; ul < ks.length - 1; ul++) aa = aa?.[ks[ul]];
      const Ka = ks[ks.length - 1],
        ja = ks.length ? aa?.[Ka] : aa;
      if (Array.isArray(ja)) {
        const ul = ja.filter((Ln, en) => en !== So);
        0 === ul.length ? delete _e[zr] : ks.length ? aa[Ka] = ul : _e[zr] = ul;
      } else delete _e[zr];
    } else "deleteStoma" === ni ? delete _e.удаление_стомы : "finish" === ni && delete _e.завершение_ухода_за_пациентом;
    const Br = (zr, ks) => {
        if (!zr) return null;
        const aa = Array.isArray(zr) ? zr : [zr];
        return aa.reduce((Ka, ja) => {
          const ul = ks(Ka),
            Ln = ks(ja);
          return ul ? Ln && Ln > ul ? ja : Ka : ja;
        }, aa[0]);
      },
      vr_replacement = () => Br(_e?.частичная_замена_системы?.подробности_о_процедуре, zr => zr?.дата_частичной_замены_системы?.время_частичной_замены),
      vr_inflammation = () => Br(_e?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая, zr => zr?.дата_воспаления?.время_воспаления),
      vr_excretion = () => Br(_e?.наличие_отделяемого?.контейнер, zr => zr?.дата_отделяемого?.время_отделяемого),
      vr_complaint = () => Br(_e?.жалобы_пациента?.жалобы, zr => zr?.дата_жалобы?.время_жалобы),
      vr_addInfo = () => Br(_e?.контейнер, zr => zr?.дата_и_время?.время_дополнительной_информации);
    return {
      protocolId: this.protocolId ?? null,
      careCaseId: this.patient?.careCaseId ?? null,
      ehr: this.card?.ehrId ?? null,
      installDate: _e?.дата_и_время?.дата_и_время?.дата_установки,
      observationDate: _e?.дата_и_время?.дата_наблюдения?.дата_наблюдения,
      stoma: {
        stomaKind: _e?.вид_стомы?.вид_стомы?.вид_стомы,
        stomaSize: _e?.вид_стомы?.вид_стомы?.размер,
        stomaName: _e?.вид_стомы?.вид_стомы?.название_стомы
      },
      bandage: _e?.смена_повязки ? {
        check: !0,
        time: Br(_e?.смена_повязки?.подробности_о_процедуре, zr => zr?.дата_смены_повязки?.время_смены_повязки)?.дата_смены_повязки?.время_смены_повязки,
        details: (() => {
          const zr = _e.смена_повязки?.подробности_о_процедуре;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      replacement: _e?.частичная_замена_системы ? {
        check: !0,
        time: vr_replacement()?.дата_частичной_замены_системы?.время_частичной_замены?.slice(0, 5) ?? null,
        device: vr_replacement()?.устройство?.устройство ?? null,
        details: (() => {
          const zr = _e.частичная_замена_системы?.подробности_о_процедуре;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      treatment: _e?.обработка_кожных_покровов_вокруг_стомы ? {
        check: !0,
        time: Br(_e?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа, zr => zr?.дата_обработки?.время_обработки)?.дата_обработки?.время_обработки?.slice(0, 5) ?? null,
        details: (() => {
          const zr = _e.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      inflammation: _e?.воспаление_слизистой_в_месте_стояния_стомы ? {
        check: !0,
        time: vr_inflammation()?.дата_воспаления?.время_воспаления?.slice(0, 5) ?? null,
        desc: vr_inflammation()?.описание_воспаления ?? null,
        details: (() => {
          const zr = _e.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      excretion: _e?.наличие_отделяемого ? {
        check: !0,
        time: vr_excretion()?.дата_отделяемого?.время_отделяемого?.slice(0, 5) ?? null,
        desc: vr_excretion()?.отделяемое_из_уретры?.характер_отделяемого ?? null,
        details: (() => {
          const zr = _e.наличие_отделяемого?.контейнер;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      disorder: _e?.функциональность_стомы_нарушена ? {
        check: !0,
        time: Br(_e?.функциональность_стомы_нарушена, zr => zr?.дата?.время_нарушения_функциональности_стомы)?.дата?.время_нарушения_функциональности_стомы?.slice(0, 5) ?? null,
        details: (() => {
          const zr = _e?.функциональность_стомы_нарушена;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      complaint: _e?.жалобы_пациента ? {
        check: !0,
        time: vr_complaint()?.дата_жалобы?.время_жалобы?.slice(0, 5) ?? null,
        desc: vr_complaint()?.описание_жалобы ?? null,
        details: (() => {
          const zr = _e.жалобы_пациента?.жалобы;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      addInfo: _e?.контейнер ? {
        check: !0,
        time: vr_addInfo()?.дата_и_время?.время_дополнительной_информации?.slice(0, 5) ?? null,
        desc: vr_addInfo()?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null,
        details: (() => {
          const zr = _e?.контейнер;
          return null == zr ? null : Array.isArray(zr) ? zr : [zr];
        })()
      } : null,
      deleteStoma: _e?.удаление_стомы ? {
        check: !0,
        time: _e.удаление_стомы?.дата_удаления?.время_удаления?.slice(0, 5) ?? null,
        reason: _e.удаление_стомы?.причина_удаления?.причина_удаления ?? null,
        complication: _e.удаление_стомы?.причина_удаления?.осложнение ?? null
      } : null,
      finishStoma: _e?.завершение_ухода_за_пациентом ? {
        check: !0,
        time: _e.завершение_ухода_за_пациентом?.any_event?.дата_завершения_ухода?.время_завершения_ухода?.slice(0, 5) ?? null,
        comment: _e.завершение_ухода_за_пациентом?.any_event?.комментарий ?? null
      } : null,
      selectedDoctor: {
        name: _e?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.value,
        id: _e?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.code
      }
    };
  }
  openDeleteStomaCareMarks(It, At) {
    var _n = this;
    const it = It?.time ? `\u0432 ${It.time.slice(0, 5)}` : "";
    this.confirmationModalService.openDialog({
      message: `\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \xab${It?.title}\xbb ${It?.date || ""} ${it}?`,
      cancelButtonTitle: "Отменить",
      buttonTitle: "Удалить",
      title: "Удаление отметки"
    }).subscribe((0, M.Z)(function* () {
      try {
        _n.onIsLoad(!0), yield _n.deleteEvent(It, At), _n.eventsChanged.emit();
      } catch (gt) {
        _n.onIsLoad(!1), console.error(gt);
      }
    }));
  }
  getOriginalIndex(It) {
    return this.eventsList.indexOf(It);
  }
  get groupedEventsList() {
    const It = new Map();
    for (const At of this.eventsList) {
      const _n = At.type;
      It.has(_n) || It.set(_n, {
        key: _n,
        title: At.title,
        items: []
      }), It.get(_n).items.push(At);
    }
    return Array.from(It.values());
  }
  buildUnSignPayload() {
    const It = this.card?.composition?.карта_наблюдения_за_пациентом_со_стомой?.карта_наблюдения_за_пациентом_со_стомой;
    if (!It) return null;
    const At = structuredClone(It);
    return delete At.завершение_ухода_за_пациентом, this.buildPayloadFromCard(At);
  }
  buildPayloadFromCard(It) {
    const At = (_e, gt) => {
        if (!_e) return null;
        const ni = Array.isArray(_e) ? _e : [_e];
        return ni.reduce((So, Er) => {
          const Br = gt(So),
            vr = gt(Er);
          return Br ? vr && vr > Br ? Er : So : Er;
        }, ni[0]);
      },
      _n = _e => null == _e ? null : Array.isArray(_e) ? _e : [_e],
      it_replacement = () => At(It?.частичная_замена_системы?.подробности_о_процедуре, _e => _e?.дата_частичной_замены_системы?.время_частичной_замены),
      it_inflammation = () => At(It?.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая, _e => _e?.дата_воспаления?.время_воспаления),
      it_excretion = () => At(It?.наличие_отделяемого?.контейнер, _e => _e?.дата_отделяемого?.время_отделяемого),
      it_complaint = () => At(It?.жалобы_пациента?.жалобы, _e => _e?.дата_жалобы?.время_жалобы),
      it_addInfo = () => At(It?.контейнер, _e => _e?.дата_и_время?.время_дополнительной_информации);
    return {
      bandage: It?.смена_повязки ? {
        check: !0,
        time: At(It?.смена_повязки?.подробности_о_процедуре, _e => _e?.дата_смены_повязки?.время_смены_повязки)?.дата_смены_повязки?.время_смены_повязки,
        details: _n(It.смена_повязки?.подробности_о_процедуре)
      } : null,
      replacement: It?.частичная_замена_системы ? {
        check: !0,
        time: it_replacement()?.дата_частичной_замены_системы?.время_частичной_замены?.slice(0, 5) ?? null,
        device: it_replacement()?.устройство?.устройство ?? null,
        details: _n(It.частичная_замена_системы?.подробности_о_процедуре)
      } : null,
      treatment: It?.обработка_кожных_покровов_вокруг_стомы ? {
        check: !0,
        time: At(It?.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа, _e => _e?.дата_обработки?.время_обработки)?.дата_обработки?.время_обработки?.slice(0, 5) ?? null,
        details: _n(It.обработка_кожных_покровов_вокруг_стомы?.any_event?.кожа)
      } : null,
      inflammation: It?.воспаление_слизистой_в_месте_стояния_стомы ? {
        check: !0,
        time: it_inflammation()?.дата_воспаления?.время_воспаления?.slice(0, 5) ?? null,
        desc: it_inflammation()?.описание_воспаления ?? null,
        details: _n(It.воспаление_слизистой_в_месте_стояния_стомы?.any_event?.слизистая)
      } : null,
      excretion: It?.наличие_отделяемого ? {
        check: !0,
        time: it_excretion()?.дата_отделяемого?.время_отделяемого?.slice(0, 5) ?? null,
        desc: it_excretion()?.отделяемое_из_уретры?.характер_отделяемого ?? null,
        details: _n(It.наличие_отделяемого?.контейнер)
      } : null,
      disorder: It?.функциональность_стомы_нарушена ? {
        check: !0,
        time: At(It?.функциональность_стомы_нарушена, _e => _e?.дата?.время_нарушения_функциональности_стомы)?.дата?.время_нарушения_функциональности_стомы?.slice(0, 5) ?? null,
        details: _n(It.функциональность_стомы_нарушена)
      } : null,
      complaint: It?.жалобы_пациента ? {
        check: !0,
        time: it_complaint()?.дата_жалобы?.время_жалобы?.slice(0, 5) ?? null,
        desc: it_complaint()?.описание_жалобы ?? null,
        details: _n(It.жалобы_пациента?.жалобы)
      } : null,
      addInfo: It?.контейнер ? {
        check: !0,
        time: it_addInfo()?.дата_и_время?.время_дополнительной_информации?.slice(0, 5) ?? null,
        desc: it_addInfo()?.описание_дополнительной_информации?.описание_дополнительной_информации ?? null,
        details: _n(It.контейнер)
      } : null,
      deleteStoma: It?.удаление_стомы ? {
        check: !0,
        time: It.удаление_стомы?.дата_удаления?.время_удаления?.slice(0, 5) ?? null,
        reason: It.удаление_стомы?.причина_удаления?.причина_удаления ?? null,
        complication: It.удаление_стомы?.причина_удаления?.осложнение ?? null
      } : null,
      finishStoma: It?.завершение_ухода_за_пациентом ? {
        check: !0,
        time: It.завершение_ухода_за_пациентом?.any_event?.дата_завершения_ухода?.время_завершения_ухода?.slice(0, 5) ?? null,
        comment: It.завершение_ухода_за_пациентом?.any_event?.комментарий ?? null
      } : null,
      selectedDoctor: {
        name: It?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.value,
        id: It?.сведения_о_враче_и_медицинской_сестре?.фио_врача?.фио_врача?.фио_врача?.code
      }
    };
  }
  onIsLoad(It) {
    this.isEventLoad.emit(It);
  }
  ngOnDestroy() {
    this.destroy$.next(), this.destroy$.complete();
  }
});
