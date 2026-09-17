// Extracted class; external identifiers resolve in modules/30229.js.
(class {
  constructor(ki, Ei, Wt, Oi, Ji, Ao, Sr, us, Ps) {
    this.compositionService = ki, this.modalService = Ei, this.messageService = Wt, this.store = Oi, this.fb = Ji, this.cdr = Ao, this.luValidators = Sr, this.modalRef = us, this.modalData = Ps, this.resetForm$ = new N.x(), this.tubesData = [], this.isLoading = !1, this.heightBody = "", this.tubes = u.fW, this.nutrient = [], this.patientInfo = null, this.observationWarning = [], this.minDate = new Date(), this.maxDate = new Date(), this.dateControl = new e.NI(new Date(), [e.kI.required, this.luValidators.dateMax(this.maxDate)]), this.tubeObservationForm = this.fb.array([]), this.store.dispatch(E.gA.getTerminology({
      request: [{
        featureKey: "nutrient_list",
        terminologyName: "dictionaries:babyformula"
      }]
    }));
  }
  ngOnInit() {
    (0, I.a)({
      careCaseId: this.store.select(B._0),
      tubeList: this.store.select(B.YT),
      observationDateCard: this.store.select(B.OZ)
    }).pipe((0, a.t)(this), (0, O.w)(({
      careCaseId: ki,
      tubeList: Ei,
      observationDateCard: Wt
    }) => {
      this.tubeObservationForm = this.fb.array([]), this.dateControl.setValue(new Date(Wt), {
        emitEvent: !1
      });
      const Oi = Ei.find(({
        careCase: Ji
      }) => Ji.careCaseId === ki);
      if (Oi) {
        this.selectedPatient = Oi, this.patientInfo = {
          fio: [Oi.careCase.lastName, Oi.careCase.firstName, Oi.careCase.secondName].join(" "),
          gender: Oi.careCase.genderName[0].toUpperCase(),
          age: (0, h.Kp)(Oi.careCase.birthDate) || 0,
          birthDate: d()(Oi.careCase.birthDate).format(u.UV),
          cardNumber: Oi.hospitalCard ? Oi.hospitalCard.number : "",
          deptName: Oi.patientMovement.departmentName
        };
        const Ji = Oi.nasogastric.elements.filter(Ao => d()(Ao.installDate).startOf("day").isSameOrBefore(d()(Wt).startOf("day")));
        return this.tubesData = this.sortTubes(Ji).map(Ao => {
          this.addFormGroup();
          const Sr = new Date(Ao.installDate),
            us = Ao.finishDate ? new Date(Ao.finishDate) : new Date();
          return (!this.minDate || Sr < this.minDate) && (this.minDate = Sr), (!this.maxDate || us > this.maxDate) && (this.maxDate = us), {
            protocolId: Ao.protocolId,
            allowDeleteCard: !Ao.nasogastricCareMarks.length,
            isSignedCard: !!Ao.sign || !!Ao.nasogastricCareMarks.find(Ps => "finishTime" in Ps),
            visibleFinish: this.calcIsVisibleFinish(Ao),
            tubeInfo: {
              installDate: new Date(Ao.installDate),
              finishDate: Ao.finishDate ? new Date(Ao.finishDate) : void 0,
              tubeSize: Ao.actualSize
            },
            rawCareMarks: Ao.nasogastricCareMarks,
            groupedEvents: []
          };
        }), this.store.dispatch((0, R.N1)(Oi)), this.getEventsGrouped(this.tubesData, Wt);
      }
      return L.E;
    })).subscribe(ki => {
      this.hardResetForm(), this.setEvents(ki);
    }), this.dateControl.valueChanges.pipe((0, a.t)(this)).subscribe(ki => {
      this.store.dispatch((0, R.AR)({
        observationDateCard: ki
      }));
    }), this.store.select(E.Tb.selectTerminologyItem("dictionaries:babyformula", "nutrient_list")).subscribe(({
      status: ki,
      data: Ei
    }) => {
      "SUCCESS" === ki && (this.nutrient = Ei.filter(({
        age: Wt
      }) => (0, x.uB)(+this.patientInfo?.age).includes(+Wt)).map(({
        name: Wt
      }) => Wt), this.cdr.markForCheck());
    });
  }
  ngAfterViewInit() {
    this.heightBody = `calc(100% - ${this.heading.nativeElement.clientHeight}px - 72px)`;
  }
  ngOnDestroy() {
    this.resetForm$.next(), this.resetForm$.complete(), this.store.dispatch((0, R.PF)()), this.store.dispatch((0, R.N1)(null)), this.store.dispatch((0, R.lR)(""));
  }
  calcIsVisibleFinish(ki) {
    if (ki.finishDate) return d()(this.dateControl.value).isSame(ki.finishDate, "day");
    const Ei = ki.nasogastricCareMarks.find(Oi => "finishTime" in Oi);
    return Ei ? d()(this.dateControl.value).isSame(d()(Ei.observationDate), "day") : !ki.nasogastricCareMarks.some(Oi => d()(Oi.observationDate).isAfter(d()(this.dateControl.value), "day"));
  }
  getEventsGrouped(ki, Ei) {
    const Wt = ki.map(Oi => this.compositionService.getEvents(Oi.rawCareMarks, Ei));
    return (0, C.D)(Wt);
  }
  sortTubes(ki) {
    return [...ki].sort((Ei, Wt) => {
      const Oi = !!Ei.finishDate,
        Ji = !!Wt.finishDate;
      return !Oi && Ji ? -1 : Oi && !Ji ? 1 : Oi && Ji ? new Date(Wt.finishDate).getTime() - new Date(Ei.finishDate).getTime() : 0;
    });
  }
  addFormGroup() {
    this.tubeObservationForm.push(this.fb.group({
      replacement: this.fb.group({
        check: [!1],
        time: [""],
        size: [""]
      }),
      nasalTreatment: this.fb.group({
        check: [!1],
        time: [""]
      }),
      inflammation: this.fb.group({
        check: [!1],
        time: [""],
        desc: [""]
      }),
      bandage: this.fb.group({
        check: [!1],
        time: [""]
      }),
      complaint: this.fb.group({
        check: [!1],
        time: [""],
        desc: [""]
      }),
      addInfo: this.fb.group({
        check: [!1],
        time: [""],
        desc: [""]
      }),
      nutrition: this.fb.group({
        check: [!1],
        nutrientName: [""],
        nutrientType: [""],
        fractionalTime: [""],
        fractionalValue: [""],
        longStartTime: [""],
        longEndTime: [""],
        longValue: [""],
        nutrition: ["nutrient"]
      }),
      nutritionWater: this.fb.group({
        check: [!1],
        nutrientTypeWater: [""],
        fractionalTime: [""],
        fractionalValue: [""],
        longStartTime: [""],
        longEndTime: [""],
        longValue: [""],
        nutrition: ["water"]
      }),
      deleteTube: this.fb.group({
        check: [!1],
        time: [""],
        reason: [""],
        complication: [""]
      }),
      finishTube: this.fb.group({
        check: [!1],
        time: [""],
        comment: [""]
      })
    }));
  }
  isEventHint(ki, Ei) {
    if ("nutritionWater" === ki || "nutrition" === ki) {
      const Wt = this.tubesData[Ei].groupedEvents.find(({
        group: Oi
      }) => Oi === ki);
      return !!Wt?.fractional || !!Wt?.long;
    }
    return !!this.tubesData[Ei].groupedEvents.find(({
      group: Wt
    }) => Wt === ki);
  }
  getControl(ki, Ei) {
    const Wt = this.tubeObservationForm.at(ki);
    return Wt && Wt.get(Ei) || null;
  }
  get isFinishChecked() {
    return this.getControl(0, "finishTube").value.check;
  }
  allowUnSign(ki) {
    const Ei = this.tubesData[ki].groupedEvents.find(Wt => "finishTube" === Wt.group);
    return this.tubesData[ki].isSignedCard || !!Ei;
  }
  isVisibleActions(ki) {
    const Ei = this.tubesData[ki]?.rawCareMarks.find(Ji => "finishTime" in Ji),
      Wt = this.tubesData[ki].tubeInfo.finishDate,
      Oi = this.selectedPatient.nasogastric.elements.find(Ji => {
        if (!Ji.finishDate || !Ji.nasogastricCareMarks?.find(Ao => Ao.finishTime)) return Ji;
      });
    return Oi ? Oi.protocolId === this.tubesData[ki].protocolId : !Wt && !Ei || this.getLatestFinishedTube(this.selectedPatient.nasogastric.elements).protocolId === this.tubesData[ki].protocolId;
  }
  getLatestFinishedTube(ki) {
    let Ei = null,
      Wt = null;
    return ki.forEach(Oi => {
      let Ji = null;
      if (Oi.finishDate) Ji = Oi.finishDate;else {
        const Ao = Oi.nasogastricCareMarks?.find(Sr => Sr.finishTime);
        Ao && Ao.observationDate && (Ji = `${Ao.observationDate}T${Ao.finishTime}`);
      }
      if (Ji) {
        const Ao = new Date(Ji);
        (!Ei || Ao > Ei) && (Ei = Ao, Wt = Oi);
      }
    }), Wt;
  }
  isFinishedTube(ki) {
    const Ei = this.tubesData[ki].groupedEvents.find(Wt => "finishTube" === Wt.group);
    return this.tubesData[ki].isSignedCard || !!Ei;
  }
  setEvents(ki) {
    this.tubesData = this.tubesData.map((Ei, Wt) => {
      const Oi = {
        ...Ei,
        groupedEvents: ki[Wt] || []
      };
      return (Oi.groupedEvents.some(({
        group: Ao
      }) => "finishTube" === Ao) || Oi.isSignedCard) && Oi.groupedEvents.forEach(({
        group: Ao
      }) => {
        this.getControl(Wt, `${Ao}.check`).setValue(!0);
      }), Oi;
    }), this.cdr.markForCheck();
  }
  subscribeCheckControl() {
    const ki = ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube"];
    this.tubeObservationForm.controls.forEach((Ei, Wt) => {
      ki.forEach(Oi => {
        this.getControl(Wt, `${Oi}.check`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Ji => {
          if (this.getControl(Wt, Oi).patchValue({
            time: Ji ? d()().format(u.nf) : ""
          }), Ji) {
            if ("finishTube" === Oi) {
              const Ao = d()(this.tubesData[Wt].tubeInfo.installDate).startOf("day"),
                Sr = d()(this.dateControl.value).startOf("day"),
                us = Sr.diff(Ao, "day");
              if (this.tubesData[Wt].rawCareMarks.length != us + 1) {
                const Ps = [];
                let hs = Ao;
                for (; hs.isBefore(Sr) || hs.isSame(Sr);) this.tubesData[Wt].rawCareMarks.find(yo => d()(yo.observationDate).startOf("day").isSame(d()(hs))) || Ps.push(hs.format(u.UV)), hs = hs.add(1, "day");
                Ps.length && (this.observationWarning[Wt] = {
                  state: !0,
                  missedDays: Ps
                });
              }
            }
          } else "replacement" === Oi && this.getControl(Wt, Oi).patchValue({
            size: ""
          }), ("inflammation" === Oi || "complaint" === Oi || "addInfo" === Oi) && this.getControl(Wt, Oi).patchValue({
            desc: ""
          }), "deleteTube" === Oi && this.getControl(Wt, Oi).patchValue({
            reason: "",
            complication: ""
          }), "finishTube" === Oi && (this.getControl(Wt, Oi).patchValue({
            comment: ""
          }), this.observationWarning[Wt] = {
            state: !1,
            missedDays: []
          });
        });
      });
    });
  }
  subscribeNutritionControl() {
    this.tubeObservationForm.controls.forEach((ki, Ei) => {
      this.getControl(Ei, "nutrition.check").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
        if (!Wt.check) {
          const Oi = {
            nutrientName: "",
            nutrientType: "",
            fractionalTime: "",
            fractionalValue: "",
            longStartTime: "",
            longEndTime: "",
            longValue: ""
          };
          this.getControl(Ei, "nutrition").patchValue(Oi, {
            emitEvent: !1
          });
        }
      }), this.getControl(Ei, "nutritionWater.check").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
        if (!Wt.check) {
          const Oi = {
            nutrientTypeWater: "",
            fractionalTime: "",
            fractionalValue: "",
            longStartTime: "",
            longEndTime: "",
            longValue: ""
          };
          this.getControl(Ei, "nutritionWater").patchValue(Oi, {
            emitEvent: !1
          });
        }
      }), this.getControl(Ei, "nutrition.nutrientType").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
        let Oi = {};
        "fractional" === Wt && (Oi = {
          fractionalTime: d()().format(u.nf),
          longStartTime: "",
          longEndTime: "",
          longValue: ""
        }), "long" === Wt && (Oi = {
          fractionalTime: "",
          fractionalValue: "",
          longStartTime: d()().format(u.nf),
          longEndTime: d()().add(1, "hour").format(u.nf)
        }), this.getControl(Ei, "nutrition").patchValue(Oi, {
          emitEvent: !1
        });
      }), this.getControl(Ei, "nutritionWater.nutrientTypeWater").valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Wt => {
        let Oi = {};
        "fractional" === Wt && (Oi = {
          fractionalTime: d()().format(u.nf),
          longStartTime: "",
          longEndTime: "",
          longValue: ""
        }), "long" === Wt && (Oi = {
          fractionalTime: "",
          fractionalValue: "",
          longStartTime: d()().format(u.nf),
          longEndTime: d()().add(1, "hour").format(u.nf)
        }), this.getControl(Ei, "nutritionWater").patchValue(Oi, {
          emitEvent: !1
        });
      }), ["fractionalValue", "longValue"].forEach(Wt => {
        this.getControl(Ei, `nutrition.${Wt}`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Oi => {
          let Ji = {};
          "fractionalValue" === Wt && +Oi > 500 && (Ji = {
            fractionalValue: "500"
          }), "longValue" === Wt && +Oi > 2e3 && (Ji = {
            longValue: "2000"
          }), this.getControl(Ei, "nutrition").patchValue(Ji, {
            emitEvent: !1
          });
        }), this.getControl(Ei, `nutritionWater.${Wt}`).valueChanges.pipe((0, a.t)(this), (0, M.R)(this.resetForm$)).subscribe(Oi => {
          let Ji = {};
          "fractionalValue" === Wt && +Oi > 500 && (Ji = {
            fractionalValue: "500"
          }), "longValue" === Wt && +Oi > 2e3 && (Ji = {
            longValue: "2000"
          }), this.getControl(Ei, "nutritionWater").patchValue(Ji, {
            emitEvent: !1
          });
        });
      });
    });
  }
  validateFormGroups() {
    let ki = !0;
    ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube"].forEach(oi => {
      this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.time`).value && (this.getControl(0, `${oi}.time`).setErrors({
        required: !0
      }), ki = !1), "replacement" === oi && this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.size`).value && (this.getControl(0, `${oi}.size`).setErrors({
        required: !0
      }), ki = !1), ("inflammation" === oi || "complaint" === oi || "addInfo" === oi) && this.getControl(0, `${oi}.check`).value && !this.getControl(0, `${oi}.desc`).value && (this.getControl(0, `${oi}.desc`).setErrors({
        required: !0
      }), ki = !1);
    });
    const Wt = this.getControl(0, "nutrition").value,
      Oi = "fractional" === Wt.nutrientType,
      Ji = "long" === Wt.nutrientType,
      Ao = (0, x.DY)(Wt.longStartTime, Wt.longEndTime);
    Wt.check && !Wt.nutrientType && (this.getControl(0, "nutrition.nutrientType").setErrors({
      required: !0
    }), this.messageService.error("Выберите способ введения"), ki = !1), Wt.check && !Wt.nutrientName && (this.getControl(0, "nutrition.nutrientName").setErrors({
      required: !0
    }), ki = !1), Oi && !Wt.fractionalTime && (this.getControl(0, "nutrition.fractionalTime").setErrors({
      required: !0
    }), ki = !1), Oi && !Wt.fractionalValue && (this.getControl(0, "nutrition.fractionalValue").setErrors({
      required: !0
    }), ki = !1), Ji && !Wt.longStartTime && (this.getControl(0, "nutrition.longStartTime").setErrors({
      required: !0
    }), ki = !1), Ji && !Wt.longEndTime && (this.getControl(0, "nutrition.longEndTime").setErrors({
      required: !0
    }), ki = !1), Ji && !Wt.longValue && (this.getControl(0, "nutrition.longValue").setErrors({
      required: !0
    }), ki = !1), Ji && Wt.longStartTime && Wt.longEndTime && !Ao && (this.getControl(0, "nutrition.longEndTime").setErrors({
      shortPeriod: !0
    }), ki = !1);
    const Sr = this.getControl(0, "nutritionWater").value,
      us = "fractional" === Sr.nutrientTypeWater,
      Ps = "long" === Sr.nutrientTypeWater,
      hs = (0, x.DY)(Sr.longStartTime, Sr.longEndTime);
    Sr.check && !Sr.nutrientTypeWater && (this.getControl(0, "nutritionWater.nutrientTypeWater").setErrors({
      required: !0
    }), this.messageService.error("Выберите способ введения"), ki = !1), us && !Sr.fractionalTime && (this.getControl(0, "nutritionWater.fractionalTime").setErrors({
      required: !0
    }), ki = !1), us && !Sr.fractionalValue && (this.getControl(0, "nutritionWater.fractionalValue").setErrors({
      required: !0
    }), ki = !1), Ps && !Sr.longStartTime && (this.getControl(0, "nutritionWater.longStartTime").setErrors({
      required: !0
    }), ki = !1), Ps && !Sr.longEndTime && (this.getControl(0, "nutritionWater.longEndTime").setErrors({
      required: !0
    }), ki = !1), Ps && !Sr.longValue && (this.getControl(0, "nutritionWater.longValue").setErrors({
      required: !0
    }), ki = !1), Ps && Sr.longStartTime && Sr.longEndTime && !hs && (this.getControl(0, "nutritionWater.longEndTime").setErrors({
      shortPeriod: !0
    }), ki = !1);
    for (let oi of [Wt, Sr]) {
      const yo = (0, x.Bg)(oi, this.tubesData[0].rawCareMarks);
      if (yo) {
        this.messageService.warning(yo), ki = !1;
        break;
      }
    }
    return ki;
  }
  onCloseCard() {
    this.modalRef && this.modalRef.close(!1);
  }
  onDeleteTube(ki) {
    this.modalService.open(new v.X(T.z), {
      panelClass: "delete-modal",
      data: {
        title: "Удаление карты наблюдения",
        message: "Карта наблюдения будет удалена вместе с пациентом из Списка ухода. Удалить пациента из Списка ухода?"
      }
    }).beforeClose().pipe((0, b.h)(Wt => !!Wt), (0, O.w)(() => {
      this.isLoading = !0;
      const Wt = this.tubesData[ki].protocolId;
      return this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Oi => this.compositionService.deleteTubeDocument(Oi, Wt)));
    }), (0, A.x)(() => {
      this.isLoading = !1;
    })).subscribe({
      next: () => {
        this.messageService.success("Карта наблюдения успешно удалена"), this.onCloseCard(), setTimeout(() => {
          this.store.dispatch((0, R.Rc)(!0));
        }, 5e3);
      },
      error: Wt => {
        console.error(Wt);
      }
    });
  }
  onSave() {
    const ki = {
      ...this.tubeObservationForm.at(0).value
    };
    if (!Object.values(ki).some(({
      check: Ji
    }) => Ji)) return this.messageService.info("Данные для сохранения отсутствуют", {
      marginBottom: 44
    }), !1;
    if (!this.validateFormGroups()) return !1;
    this.isLoading = !0;
    const Wt = d()(this.dateControl.value).isSame(this.tubesData[0].tubeInfo.installDate, "day"),
      Oi = (0, y._)(this.selectedPatient.careCase.careCaseId, this.tubesData[0].protocolId, this.tubesData[0].tubeInfo.installDate, this.tubesData[0].rawCareMarks, this.tubeObservationForm.at(0).value, this.dateControl.value);
    this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Ji => Wt ? (console.log("updateTubeDocument", Oi), this.compositionService.updateTubeDocument({
      ehr: Ji,
      uid: Oi.protocolId,
      data: Oi
    })) : Oi.childComposition ? (console.log("updateTubeChildDocument", Oi), this.compositionService.updateTubeChildDocument(Ji, Oi)) : (console.log("createTubeChildDocument", Oi), this.compositionService.createTubeChildDocument(Ji, Oi))), (0, A.x)(() => {
      this.isLoading = !1;
    })).subscribe({
      next: () => {
        this.onCloseCard(), this.messageService.success("Данные по уходу сохранены", {
          marginBottom: 44
        }), setTimeout(() => {
          this.store.dispatch((0, R.Rc)(!0));
        }, 5e3);
      },
      error: Ji => {
        console.error(Ji);
      }
    });
  }
  onUnSign() {
    const ki = (0, y._)(this.selectedPatient.careCase.careCaseId, this.tubesData[0].protocolId, this.tubesData[0].tubeInfo.installDate, this.tubesData[0].rawCareMarks, this.tubeObservationForm.at(0).value, this.dateControl.value);
    this.isLoading = !0, this.compositionService.getEhrByPatientId(this.selectedPatient.careCase.actualPatientId).pipe((0, O.w)(Ei => this.compositionService.unSignTubeDocument(Ei, ki, ki.childComposition, ki.protocolId))).subscribe({
      next: () => {
        setTimeout(() => {
          this.messageService.success("Подпись снята"), this.hardResetForm(), this.store.dispatch((0, R.Rc)(!0)), this.isLoading = !1;
        }, 3e3);
      },
      error: Ei => {
        this.isLoading = !1, console.error(Ei);
      }
    });
  }
  hardResetForm() {
    this.resetForm$.next(), this.subscribeCheckControl(), this.subscribeNutritionControl();
    const ki = ["replacement", "nasalTreatment", "inflammation", "bandage", "complaint", "addInfo", "deleteTube", "finishTube", "nutrition", "nutritionWater"];
    this.tubeObservationForm.controls.forEach((Ei, Wt) => {
      ki.forEach(Oi => {
        this.getControl(Wt, `${Oi}.check`)?.setValue(!1);
        const Ji = this.getControl(Wt, Oi);
        Ji && (Ji.setErrors(null), Object.keys(Ji.controls).forEach(Ao => {
          Ji.get(Ao)?.setErrors(null);
        }));
      }), this.getControl(Wt, "nutrition").patchValue({
        nutrition: "nutrient"
      }, {
        emitEvent: !1
      }), this.getControl(Wt, "nutritionWater").patchValue({
        nutrition: "water"
      }, {
        emitEvent: !1
      }), this.observationWarning[Wt] = {
        state: !1,
        missedDays: []
      }, this.tubeObservationForm.at(Wt).markAsPristine(), this.tubeObservationForm.at(Wt).markAsUntouched();
    }), this.tubeObservationForm.markAsPristine(), this.tubeObservationForm.markAsUntouched();
  }
  changeLoad(ki) {
    this.isLoading = ki;
  }
});
