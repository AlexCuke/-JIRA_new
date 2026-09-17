// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue, He, lt, ht, ct, on, yn) {
    this.modalData = s, this.cdr = o, this.patientDiagnosesService = D, this.sharedDataService = Z, this.breakpointObserver = X, this.userContextService = oe, this.bedFundService = ue, this.wardService = He, this.patientMovementService = lt, this.dictionaryService = ht, this.userComposite = ct, this.terminologyService = on, this.departmentService = yn, this.title = "", this.doctorList = [], this.specialities = [], this.wardList = [], this.bedProfiles = [], this.isLoadBedProfiles = !1, this.isTablet = !1, this.isLoading = !1, this.isFactPlacementMatch = !0, this.modalState = {
      department: null,
      diagnosis: null,
      placementDate: null,
      buttonText: "",
      careCaseId: ""
    }, this.placementForm = new pr.cw({
      doctor: new pr.NI(null, {
        validators: [pr.kI.required]
      }),
      ward: new pr.NI(null, {
        validators: [pr.kI.required]
      }),
      bed: new pr.NI(null),
      bedProfile: new pr.NI(null, {
        validators: [pr.kI.required]
      }),
      actualPlacement: new pr.NI(null)
    });
  }
  ngOnInit() {
    const {
        data: s,
        actionName: o
      } = this.modalData,
      D = (0, hu.DF)(s.careCase);
    switch (this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(Z => {
      this.isTablet = Z.matches;
    }), this.modalData?.data?.patientMovement?.departmentId && this.departmentService.getDepartmentQuery(this.modalData?.data?.patientMovement?.departmentId).pipe((0, Kn.t)(this)).subscribe(Z => {
      this.headDepartmentInfo = {
        headDepartmentId: Z?.headDepartment?.headDepartmentId,
        headDepartmentProfileId: Z?.headDepartment?.headDepartmentProfile?.headDepartmentProfileId?.toString()
      };
    }), this.terminologyService.getTerminologyQuery("department", l2({
      comparison: "not",
      items: [{
        value: null,
        field: "code",
        comparison: "eq"
      }]
    })), this.placementForm.get("ward").valueChanges.pipe((0, Kn.t)(this)).subscribe(() => {
      this.onWardChange();
    }), 0 === this.doctorList.length && this.loadEmployeeWithJobTitles().pipe((0, Kn.t)(this)).subscribe(() => {
      this.onWardChange(), this.cdr.markForCheck();
    }), this.modalState.careCaseId = s.careCase.careCaseId, this.patientDiagnosesService.careCaseDiagnosisQuery({
      careCaseId: this.modalState.careCaseId
    }).pipe((0, Ma.b)(Z => {
      this.modalState.diagnosis = (0, Ol.first)(Z), this.cdr.markForCheck();
    }), (0, Ja.K)(Z => (console.log("error", Z), (0, La.of)([]))), (0, Kn.t)(this)).subscribe(), o) {
      case "change_placement":
        this.title = `\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${D}`, this.placementForm.setValue({
          doctor: {
            fio: s.patientMovement.doctorName,
            workPlaceId: s.patientMovement.workplaceId
          },
          ward: {
            wardId: s.patientMovement.wardId,
            name: s.patientMovement.wardName
          },
          bed: s.patientMovement?.bed ?? "",
          bedProfile: {
            bedProfile: {
              name: s.patientMovement.bedProfileName
            },
            profileBedId: s.patientMovement.bedProfileCode
          },
          actualPlacement: s.patientMovement.actualPlacement ?? null
        }), this.isFactPlacementMatch = !s.patientMovement.actualPlacement, this.modalState.department = {
          id: s.patientMovement.departmentId,
          name: s.patientMovement.departmentName
        }, this.modalState.placementDate = new Date(), this.modalState.buttonText = "Сохранить изменения";
        break;
      case "place_patient":
        this.title = `\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 ${D}`, this.userContextService.getUserContext().pipe((0, Ie.q)(1)).subscribe(Z => {
          const {
            department: X
          } = Z;
          this.modalState.department = {
            ...X,
            name: X.fullName
          }, this.modalState.placementDate = this.modalData?.data?.patientMovement?.movementDate || new Date(), this.isFactPlacementMatch = !0, this.modalState.buttonText = "Разместить", this.cdr.markForCheck();
        });
    }
    0 === this.bedProfiles.length && this.onWardChange(), this.placementForm.get("ward").valueChanges.pipe((0, Kn.t)(this)).subscribe(() => {
      this.onWardChange();
    });
  }
  displayDoctorFn(s) {
    return s?.fio || "";
  }
  displayWardFn(s) {
    return s?.name;
  }
  displayBedProfileFn(s) {
    return s?.bedProfile?.name;
  }
  loadEmployeeWithJobTitles() {
    return this.terminologyService.getTerminologyQuery("specialitylist", l2({
      comparison: "not",
      items: [{
        value: null,
        field: "code",
        comparison: "eq"
      }]
    })).pipe((0, zs.U)(s => (0, yg.Cu)(s).items?.map(o => o.code)), (0, vs.w)(s => this.userComposite.getEmployees((0, $M.v)([], this.modalState.department.id)).pipe((0, zs.U)(o => {
      const D = {
        ...o
      };
      return D.employees = o.employees.filter(Z => s.includes(Z.speciality.id)), D.totalEmployees = D.employees.length, D.total = D.employees.length, D;
    }))), (0, Ma.b)({
      next: s => {
        this.doctorList = s.employees.map(this.convertDoctor);
      },
      error: s => console.log(s)
    }), (0, Ja.K)(() => TD.E));
  }
  convertDoctor(s) {
    return {
      id: s.id ?? 0,
      fio: s.fio ?? "",
      jobTitle: s.jobTitle?.name ?? "",
      speciality: s.speciality,
      profileId: s?.profileId?.toString(),
      workPlaceId: s.workplaceId ?? "",
      employeeId: s.employeeId ?? ""
    };
  }
  onOpenWards() {
    0 === this.wardList.length && this.wardService.getWardsAndBedsQuery(this.modalState.department.id).pipe((0, Kn.t)(this)).subscribe(s => {
      this.wardList = s.wards, this.cdr.markForCheck();
    });
  }
  onWardChange() {
    this.placementForm.patchValue({
      bedProfile: null
    }), this.placementForm.get("bedProfile").enable(), this.placementForm.get("doctor").patchValue(null), this.placementForm.get("doctor").enable(), this.bedProfiles = [], this.isLoadBedProfiles = !0, this.placementForm.value?.ward?.wardId ? this.wardService.getWardQuery(this.placementForm.value.ward.wardId).pipe((0, Kn.t)(this)).subscribe(s => {
      let o = null;
      this.bedProfiles = s.wardProfiles.map(X => {
        const oe = {
          bedProfile: {
            name: X.wardProfileName
          },
          profileBedId: X.wardProfileId
        };
        return X.isDefault && (o = oe), oe;
      }), this.isLoadBedProfiles = !1, this.placementForm.patchValue({
        bedProfile: o || 1 != this.bedProfiles.length ? o : this.bedProfiles[0]
      }), 1 === this.bedProfiles.length && this.placementForm.get("bedProfile").disable();
      const D = this.doctorList.find(X => X.profileId == s?.doctorWard?.doctorWardProfile?.doctorWardProfileId?.toString() && X.fio == s?.doctorWard?.doctorWardProfileFio),
        Z = this.doctorList.find(X => X.employeeId == this.headDepartmentInfo.headDepartmentId && X.profileId == this.headDepartmentInfo.headDepartmentProfileId);
      (D || Z) && (this.placementForm.get("doctor").patchValue(D || Z), this.placementForm.get("doctor").disable()), this.cdr.markForCheck();
    }) : this.bedFundService.getBedProfilesQuery({
      departmentId: this.modalState.department.id,
      date: new Date().toISOString()
    }).pipe((0, Kn.t)(this)).subscribe(s => {
      this.bedProfiles = s, this.isLoadBedProfiles = !1, this.cdr.markForCheck();
    });
  }
  onSubmit() {
    if (this.placementForm.valid) {
      this.isLoading = !0, this.placementForm.updateValueAndValidity({
        emitEvent: !1
      });
      const s = this.placementForm.getRawValue();
      this.patientMovementService.placePatientCommand({
        careCaseId: this.modalState.careCaseId,
        doctorId: s.doctor.workPlaceId,
        doctorName: s.doctor.fio,
        wardId: s.ward.wardId,
        wardName: s.ward.name,
        bedProfileCode: s.bedProfile.profileBedId,
        placementDate: this.modalState.placementDate ? new Date(this.modalState.placementDate) : new Date(),
        bed: s.bed || null,
        bedId: null,
        actualPlacement: s.actualPlacement || null
      }).pipe((0, Ma.b)(() => {
        this.modalRef.onClose();
      }), (0, GM.g)(Gm.x), (0, Ma.b)(() => {
        this.sharedDataService.runActionSubject("tasksPatientList");
      }), (0, Ja.K)(o => (console.log(o), (0, La.of)([]))), (0, Kn.t)(this)).subscribe(() => {
        this.isLoading = !1;
      });
    } else this.placementForm.markAllAsTouched();
  }
  get getDepartment() {
    return this.modalState?.department?.name;
  }
  get getPlacementDate() {
    return this.modalState.placementDate ? (0, zm.Z)(new Date(this.modalState.placementDate), "dd MMM, eee, HH:mm", {
      locale: yC.default
    }) : null;
  }
  get getActualDiagnoses() {
    if (!this.modalState.diagnosis) return null;
    let s = (0, Ol.sortBy)((0, ka.h)(this.modalState.diagnosis.actualDiagnoses, o => "1" === o.diagnosisKindCode), "diagnosisSetDate");
    return s.length > 0 ? s[0].diagnosisName : null;
  }
  changePlacement() {
    this.cdr.detectChanges(), this.placementForm.get("actualPlacement").reset();
  }
});
