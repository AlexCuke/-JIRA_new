// Extracted from main; webpack module 55979. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    $: () => T,
    r: () => R
  });
  var t = i(15861),
    e = i(77579),
    a = i(83905),
    m = i(82722),
    d = i(43862),
    M = i(76549),
    b = i(71764),
    A = i.n(b),
    N = i(25268),
    I = i.n(N),
    O = i(97215),
    L = i(39453),
    C = i(36927),
    v = i(94650),
    f = i(80529),
    E = i(41025),
    h = i(89653),
    x = i(19104),
    u = i(63873);
  A().extend(I());
  const T = {
      pillboxes: ["Перорально", "Местные аппликации", "Сублингвально", "Ректально", "Интраназальное введение", "Другой", "Вагинально", "Парабульбарно", "Субконъюктивально", "Ретробульбарно", "Инфузия", "Накожно", "Спринцевание", "В зев", "Апликационно", "В коньюктивальный мешок", "В слуховой проход", "Внутрь", "Глазные капли", "Ингаляционно", "Интраназально", "Местно", "Наружно", "Первагинально", "Пернозально", "Перректально", "Подъязычно", "Суббукально", "Трансдермально", "Дуоденально", "Интравитреально"],
      injections: ["Субарахноидально", "Интраперитонеально", "Микроструйно", "Через гастростому", "Ингаляции", "Аппликация на слизистую оболочку рта", "Ингаляции через небулайзер", "В конъюнктивальную полость", "Внутрипузырно", "Внутриартериальное введение", "Внутрисуставно", "Перфузия", "Внутрижелудочково", "Параартикулярно", "Эндурально", "Внутримышечно", "Внутривенно капельно", "Внутривенно струйно", "Подкожно", "Под кожу виска", "Внутрикожно", "Интравентрикулярно", "В желудочный зонд капельно", "В кишечный зонд капельно", "В/В", "В/В инфузомат", "В/В кубитально", "В/В перфузор"]
    },
    B = class {
      constructor(j, W, F, Le, ke) {
        this.http = j, this.keycloak = W, this.store = F, this.medicationControllerService = Le, this.activeMedicamentsModuleService = ke, this.destroy$ = new e.x(), this.userInfo = null, this.store.select(O.S8).pipe((0, m.R)(this.destroy$)).subscribe(J => {
          this.userInfo = J;
        });
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
      getPatients(j, W, F) {
        var Le = this;
        return (0, t.Z)(function* (ke, J, fe, ye = "issuing") {
          const ae = ke || new Date(),
            Y = A()(ae).format("YYYY-MM-DD"),
            te = (A()(ae).startOf("day").toISOString(), A()(ae).endOf("day").toISOString()),
            pe = [{
              bool: {
                should: [...T[Le.activeMedicamentsModuleService.activeArm].map(We => ({
                  match: {
                    "data.medicationAssignment.elements.routeOfAdministration": We
                  }
                }))]
              }
            }, {
              bool: {
                must: [{
                  range: {
                    "data.medicationAssignment.elements.assignmentDate": {
                      lte: te
                    }
                  }
                }],
                must_not: []
              }
            }];
          if ("pillboxes" === Le.activeMedicamentsModuleService.activeArm && (pe[1].bool.must_not.push({
            exists: {
              field: "data.medicationAssignment.elements.deleted"
            }
          }), pe[1].bool.must_not.push({
            terms: {
              "data.medicationAssignment.elements.status": ["CANCELLED"]
            }
          }), "pillbox" === ye)) {
            const We = A().utc(Y).startOf("day").toISOString(),
              Re = A().utc(Y).endOf("day").toISOString();
            pe.push({
              nested: {
                path: "data.medicationAssignment.elements.medicationDispenses",
                query: {
                  range: {
                    "data.medicationAssignment.elements.medicationDispenses.planningDate": {
                      gte: We,
                      lte: Re
                    }
                  }
                }
              }
            });
          }
          const be = [{
            exists: {
              field: "data.medicationAssignment"
            }
          }, {
            exists: {
              field: "data.hospitalCard"
            }
          }, {
            exists: {
              field: "data.careCase"
            }
          }, {
            nested: {
              path: "data.medicationAssignment.elements",
              query: {
                bool: {
                  must: pe
                }
              }
            }
          }, {
            bool: {
              should: [{
                bool: {
                  must: [{
                    exists: {
                      field: "data.patientMovement"
                    }
                  }, {
                    term: {
                      "data.patientMovement.departmentId": J
                    }
                  }]
                }
              }, {
                bool: {
                  must: [{
                    exists: {
                      field: "data.careCase.admissionDepartmentId"
                    }
                  }, {
                    term: {
                      "data.careCase.admissionDepartmentId": J
                    }
                  }, {
                    bool: {
                      must_not: [{
                        exists: {
                          field: "data.patientMovement"
                        }
                      }]
                    }
                  }]
                }
              }],
              minimum_should_match: 1
            }
          }];
          fe && be.push({
            term: {
              "data.careCase.careCaseId": fe
            }
          });
          const n = [];
          let Se = 0,
            qe = 1 / 0;
          for (; Se < qe;) {
            const We = yield (0, a.z)(Le.http.post("/gateway/patient-list/api/v1/index/profile-delivery-of-medicines-list", {
                searchParams: {
                  body: {
                    size: 500,
                    track_total_hits: !0,
                    query: {
                      bool: {
                        must: be
                      }
                    },
                    from: Se
                  }
                },
                date: Y,
                departmentId: J
              }, {
                headers: {
                  accept: "application/json",
                  authorization: `Bearer ${Le.keycloak.token}`
                }
              })),
              Re = We.hits?.hits ?? [];
            n.push(...Re);
            const st = We.hits?.total;
            if (qe = "number" == typeof st ? st : st?.value ?? Re.length, Re.length < 500) break;
            Se += 500;
          }
          return n.map(We => {
            const Re = We._source?.entityId || We._source?.data?.careCase?.careCaseId || We._id;
            let st = We._source?.updated || We._source?.meta?.updated;
            if (!st && We._source?.data?.medicationAssignment?.elements) {
              const mt = [];
              We._source.data.medicationAssignment.elements.forEach(ut => {
                ut.updated && mt.push(ut.updated), ut.medicationDispenses && ut.medicationDispenses.forEach(Ct => {
                  Ct.updated && mt.push(Ct.updated);
                });
              }), mt.length > 0 && (st = mt.reduce((ut, Ct) => Ct > ut ? Ct : ut));
            }
            const q = We._source.data?.medicationAssignment?.elements?.length ? We._source.data?.medicationAssignment?.elements?.filter(mt => T[Le.activeMedicamentsModuleService.activeArm].includes(mt.routeOfAdministration)) : null;
            return {
              careCase: We._source.data.careCase ?? null,
              pillbox: We._source.data.pillbox ?? null,
              hospitalCard: We._source.data.hospitalCard ?? null,
              medicationAssignment: q,
              patientMovement: We._source.data.patientMovement ?? null,
              entityId: Re,
              updated: st
            };
          });
        }).apply(this, arguments);
      }
      getFlatDispensingList(j) {
        console.log(j.flatMap(W => W.filter(({
          status: F
        }) => ["ASSIGNED", "CREATED"].includes(F)).flatMap(({
          id: F,
          medicationDispenses: Le,
          multiplicity: ke
        }) => "Симптоматически" === ke ? {
          id: F
        } : Le.filter(({
          status: J
        }) => ["ASSIGNED", "CREATED"].includes(J)).flatMap(J => ({
          id: F,
          code: J.code
        })))));
      }
      getMedicamentType(j) {
        return Object.entries(T).find(([W, F]) => F.includes(j))[0];
      }
      cancelMedication(j) {
        const W = this.getUserCommandParams(),
          F = {
            resultCompositionUid: j.resultCompositionUid,
            code: j.code,
            byExecutor: j.byExecutor ?? !0,
            updated: A()().toISOString(),
            cancelReason: j.cancelReason,
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.cancelMedicationDispenseCommand(F);
      }
      postponeMedication(j) {
        const W = this.getUserCommandParams(),
          F = {
            code: j.code,
            updated: A()().toISOString(),
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob,
            postponedReason: j.postponedReason
          };
        return this.medicationControllerService.postponeMedicationInstructionCommand(F);
      }
      rollbackPostponeMedication(j) {
        const W = this.getUserCommandParams(),
          F = {
            code: j.code,
            updated: A()().toISOString(),
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.rollbackPostponeMedicationInstructionCommand(F);
      }
      markMedicationAsCancelling(j, W = !0) {
        const F = this.getUserCommandParams();
        return this.medicationControllerService.markMedicationDispenseAsCancellingCommand({
          code: j,
          byExecutor: W,
          workplaceId: F.workplaceId,
          doctorName: F.doctorName,
          doctorJob: F.doctorJob
        });
      }
      unmarkMedicationAsCancelling(j) {
        const W = this.getUserCommandParams();
        return this.medicationControllerService.unmarkMedicationDispenseAsCancellingCommand({
          code: j,
          workplaceId: W.workplaceId,
          doctorName: W.doctorName,
          doctorJob: W.doctorJob
        });
      }
      getMedicationInstructions(j) {
        return this.medicationControllerService.getMedicationInstructionsQuery(j);
      }
      createMedicationInstruction(j) {
        const W = this.getUserCommandParams(),
          F = {
            code: j.code,
            planningDate: j.planningDate,
            comment: j.comment,
            updated: A()().toISOString(),
            symptomatic: j.symptomatic,
            dayTimePeriod: j.dayTimePeriod,
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.createMedicationInstructionCommand(F);
      }
      planMedicationInstruction(j) {
        const W = this.getUserCommandParams(),
          F = {
            code: j.code,
            planningDate: j.planningDate,
            comment: j.comment,
            updated: A()().toISOString(),
            symptomatic: j.symptomatic,
            dayTimePeriod: j.dayTimePeriod,
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob,
            assignmentCompositionUid: j.assignmentCompositionUid
          };
        return this.medicationControllerService.planMedicationInstructionCommand(F);
      }
      activateAssignment(j) {
        const W = this.getUserCommandParams();
        return this.medicationControllerService.activateMedicationAssignmentInstructionCommand({
          assignmentCompositionUid: j.assignmentCompositionUid,
          updated: j.updated || A()().toISOString(),
          byExecutor: j.byExecutor ?? !0,
          workplaceId: W.workplaceId,
          doctorName: W.doctorName,
          doctorJob: W.doctorJob
        });
      }
      deactivateAssignment(j) {
        const W = this.getUserCommandParams();
        return this.medicationControllerService.deactivateMedicationAssignmentInstructionCommand({
          assignmentCompositionUid: j.assignmentCompositionUid,
          updated: j.updated || A()().toISOString(),
          workplaceId: W.workplaceId,
          doctorName: W.doctorName,
          doctorJob: W.doctorJob
        });
      }
      completeAssignment(j) {
        const W = this.getUserCommandParams();
        return this.medicationControllerService.completeMedicationAssignmentInstructionCommand({
          assignmentCompositionUid: j.assignmentCompositionUid,
          updated: j.updated || A()().toISOString(),
          workplaceId: W.workplaceId,
          doctorName: W.doctorName,
          doctorJob: W.doctorJob
        });
      }
      cancelAssignment(j) {
        const W = this.getUserCommandParams(),
          F = {
            assignmentCompositionUid: j.assignmentCompositionUid,
            resultCompositionUid: j.resultCompositionUid,
            updated: j.updated || A()().toISOString(),
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.cancelMedicationAssignmentInstructionCommand(F);
      }
      rollbackCancelAssignment(j) {
        const W = this.getUserCommandParams(),
          F = {
            assignmentCompositionUid: j.assignmentCompositionUid,
            updated: j.updated || A()().toISOString(),
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.rollbackCancelMedicationAssignmentInstructionCommand(F);
      }
      rollbackCompleteAssignment(j) {
        const W = this.getUserCommandParams(),
          F = {
            assignmentCompositionUid: j.assignmentCompositionUid,
            updated: j.updated || A()().toISOString(),
            workplaceId: W.workplaceId,
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.rollbackCompleteMedicationAssignmentInstructionCommand(F);
      }
      markAssignmentAsCancelling(j, W = !0) {
        const F = this.getUserCommandParams(),
          Le = {
            assignmentCompositionUid: j,
            byExecutor: W,
            workplaceId: F.workplaceId.toString(),
            doctorName: F.doctorName,
            doctorJob: F.doctorJob
          };
        return this.medicationControllerService.markMedicationAssignmentInstructionAsCancellingCommand(Le);
      }
      unmarkAssignmentAsCancelling(j) {
        const W = this.getUserCommandParams(),
          F = {
            assignmentCompositionUid: j,
            workplaceId: W.workplaceId.toString(),
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.unMarkMedicationAssignmentInstructionAsCancellingCommand(F);
      }
      markAssignmentAsEditing(j) {
        const W = this.getUserCommandParams(),
          F = {
            assignmentCompositionUid: j.assignmentCompositionUid,
            updated: j.updated || A()().toISOString(),
            workplaceId: W.workplaceId.toString(),
            doctorName: W.doctorName,
            doctorJob: W.doctorJob
          };
        return this.medicationControllerService.markMedicationAssignmentInstructionAsEditingCommand(F);
      }
      deleteAssignment(j, W) {
        const F = {
          assignmentCompositionUid: j,
          updated: W || A()().toISOString()
        };
        return this.medicationControllerService.deleteMedicationAssignmentInstructionCommand(F);
      }
      getAssignments(j) {
        return this.medicationControllerService.getMedicationAssignmentInstructionQuery(j);
      }
      findAssignmentsBetween(j) {
        const W = this.getUserCommandParams(),
          F = {
            ...j,
            workplaceId: (j.workplaceId || W.workplaceId).toString()
          };
        return this.medicationControllerService.getMedicationAssignmentsBetweenQuery(F);
      }
      findDuplicates(j) {
        return this.medicationControllerService.checkMedicationAssignmentInstructionDublicateQuery(j);
      }
      findAssignmentByCompositionUid(j) {
        return this.medicationControllerService.getMedicationAssignmentInstructionStatusQuery(j);
      }
      getSinglePatientAdapter(j) {
        const W = [];
        j.medicationAssignment.filter(Le => Le.medications && Le.medications.length > 0 && ("pillboxes" !== this.activeMedicamentsModuleService.activeArm || !Le.deleted)).forEach(Le => {
          Le.medications.forEach((ke, J) => {
            const fe = this.formatDosage(ke),
              ye = this.getMedicationTypeFlags(ke),
              ae = Le.medicationDispenses || [],
              {
                symptomaticDispenses: Y
              } = this.getSymptomaticInfo(ae, Le?.maxSymptomaticAmount),
              G = this.getSlotsForMedication(Le, J, ae, Le?.maxSymptomaticAmount),
              te = this.createMedicationDispenses(ae),
              pe = this.formatFrequency(Le, ae);
            W.push({
              id: Le.id + (J > 0 ? `-${J}` : ""),
              name: this.getMedicationPrefix(ke) + (ke.mnn || ke.mnnName || ""),
              tradeName: ke.otnName || "",
              dose: ke.applyDose || ke.applyPacking,
              unitOfDose: ke.applyUnitOfDose,
              dosage: fe,
              method: Le.routeOfAdministration || "",
              typeMedicament: this.getMedicamentType(Le.routeOfAdministration),
              indicationsForUse: Le.indicationsForUse || "",
              comment: Le.comment || "",
              frequency: pe,
              deleted: Le.deleted,
              multiplicityScale: this.parseMultiplicity(Le.multiplicity)?.count || 1,
              slotNotes: "",
              doctor: Le.doctorName || "",
              slots: G,
              status: Le.status,
              base: ye.isBase,
              onHand: ye.isOnHand,
              dosageMedicine: ke.dosageMedicine,
              vaccination: ye.isVaccination,
              symptomatic: ye.isSymptomatic || Y.length > 0,
              dispensingSymptomaticAmount: ae.filter(be => "COMPLETED" === be.status).length,
              maxSymptomaticAmount: Le.maxSymptomaticAmount,
              financeSourceName: ke.financeSourceName || Le.financeSourceName,
              financeSourceCode: ke.financeSourceCode || Le.financeSourceCode,
              writeOffDocument: ke.writeOffDocument,
              employeeIssuedMedicine: ke.employeeIssuedMedicine,
              assignmentCompositionUid: Le.assignmentCompositionUid,
              medicationDispenses: te,
              assignmentDate: Le.assignmentDate,
              otnId: ke.otnCode,
              otnUid: ke.otnUid,
              mnnId: ke.mnnId,
              applyPacking: ke.applyPacking,
              updated: Le.updated,
              duration: Le.duration,
              permanently: Le.permanently,
              unitOfPacking: ke?.unitOfPacking,
              unitInjectionSpeed: Le?.unitInjectionSpeed,
              injectionSpeed: Le?.injectionSpeed,
              durationInjectionSpeed: Le?.durationInjectionSpeed,
              countAdditionalUnit: ke.countAdditionalUnit,
              additionalUnit: ke.additionalUnit
            });
          });
        });
        const F = {
          lastName: j.careCase.lastName || "",
          firstName: j.careCase.firstName || "",
          secondName: j.careCase.secondName
        };
        return {
          id: j.careCase.careCaseId,
          careCaseId: j.careCase.careCaseId,
          name: `${F.lastName} ${F.firstName} ${F.secondName || ""}`.trim(),
          fullName: F,
          age: A()().diff(A()(j.careCase.birthDate), "year"),
          historyNumber: j.hospitalCard?.fullNumber || j.hospitalCard?.number || "",
          ward: j.patientMovement?.wardName || "",
          insurance: j.careCase.typeOfPaymentName || "",
          sex: +j.careCase.genderCode || 0,
          gender: j?.careCase?.genderName ? j?.careCase?.genderName.charAt(0).toUpperCase() : "",
          birthDate: new Date(j?.careCase?.birthDate),
          medicines: W,
          medicationAssignment: j?.medicationAssignment,
          ehrId: j.medicationAssignment?.[0]?.ehrId,
          mdocId: j.hospitalCard?.mdocId,
          mdocTypeId: j.hospitalCard?.mdocTypeId,
          financeSourceName: j.careCase.financeSourceName,
          financeSourceCode: j.careCase.financeSourceCode,
          deptId: j.patientMovement?.deptId,
          deptName: j.patientMovement?.deptName,
          profileDeptId: j.patientMovement?.profileDeptId,
          entityId: j.entityId,
          updated: j.updated
        };
      }
      getPatientsAdapter(j) {
        return j.filter(W => W.careCase && W.medicationAssignment && Array.isArray(W.medicationAssignment)).map(W => this.getSinglePatientAdapter(W));
      }
      getPrescriptionsAdapter(j) {
        const W = [];
        return j.filter(F => F.careCase && F.medicationAssignment && Array.isArray(F.medicationAssignment)).forEach(F => {
          const Le = {
            patientId: F.careCase.careCaseId,
            careCaseId: F.careCase.careCaseId,
            patientName: `${F.careCase.lastName || ""} ${F.careCase.firstName || ""} ${F.careCase.secondName || ""}`.trim(),
            sex: +F.careCase.genderCode || 0,
            patientAge: A()().diff(A()(F.careCase.birthDate), "year"),
            patientHistoryNumber: F.hospitalCard?.fullNumber || F.hospitalCard?.number || "",
            patientWard: F.patientMovement?.wardName || "",
            patientInsurance: F.careCase.typeOfPaymentName || "",
            ehrId: F.medicationAssignment?.[0]?.ehrId,
            financeSourceName: F.careCase.financeSourceName,
            financeSourceCode: F.careCase.financeSourceCode
          };
          F.medicationAssignment.filter(ke => ke.medications && ke.medications.length > 0).forEach(ke => {
            ke.medications.forEach((J, fe) => {
              const ye = this.formatDosage(J),
                ae = this.getMedicationTypeFlags(J),
                Y = ke.medicationDispenses || [],
                {
                  symptomaticDispenses: G
                } = this.getSymptomaticInfo(Y, ke?.maxSymptomaticAmount),
                te = this.getSlotsForMedication(ke, fe, Y, ke?.maxSymptomaticAmount),
                pe = this.createMedicationDispenses(Y),
                be = this.formatFrequency(ke, Y);
              W.push({
                ...Le,
                id: ke.id + (fe > 0 ? `-${fe}` : ""),
                medicineName: this.getMedicationPrefix(J) + (J.mnn || J.mnnName || ""),
                tradeName: J.otnName || "",
                form: J.form || "",
                dose: ye,
                method: ke.routeOfAdministration || "",
                indicationsForUse: ke.indicationsForUse || "",
                comment: ke.comment || "",
                deleted: ke.deleted,
                frequency: be,
                doctor: ke.doctorName,
                slots: te,
                base: ae.isBase,
                onHand: ae.isOnHand,
                vaccination: ae.isVaccination,
                symptomatic: ae.isSymptomatic || G.length > 0,
                assignmentCompositionUid: ke.assignmentCompositionUid,
                writeOffDocument: J.writeOffDocument,
                employeeIssuedMedicine: J.employeeIssuedMedicine,
                medicationDispenses: pe,
                assignmentDate: ke.assignmentDate,
                countAdditionalUnit: J.countAdditionalUnit,
                additionalUnit: J.additionalUnit
              });
            });
          });
        }), W;
      }
      getMedicationPrefix(j) {
        return j.onHand ? "(Р) " : j.base ? "(Б) " : "";
      }
      getUserCommandParams() {
        if (!this.userInfo) return {
          workplaceId: null,
          doctorName: "",
          doctorJob: ""
        };
        const {
          lastName: j,
          firstName: W,
          secondName: F,
          employee: Le,
          jobTitle: ke
        } = this.userInfo;
        return {
          workplaceId: Le?.workplace?.id || null,
          doctorName: [j, W, F].filter(Boolean).join(" "),
          doctorJob: ke?.name || ""
        };
      }
      createSlotsFromDispenses(j, W, F, Le) {
        return "pillboxes" === this.activeMedicamentsModuleService.activeArm && (j = j.filter(ke => "CANCELLED" !== ke.status)), j.map((ke, J) => {
          const fe = ke.id || `${W.id}-${F}-${J}`;
          let ye = ke.dayTimePeriod?.toUpperCase(),
            ae = ke.time;
          if (!ye && ke.planningDate) {
            const Re = this.derivePeriodFromPlanningDate(ke.planningDate);
            ye = Re.period, ae || (ae = Re.time);
          }
          !ae && ke.planningDate && (ae = A().utc(ke.planningDate).format("HH:mm")), ye = ye || "MORNING", ae = ae || this.getDefaultTimeForPeriod(ye);
          const Y = ke.startTime || this.getDefaultStartTimeForPeriod(ye),
            G = ke.endTime || this.getDefaultEndTimeForPeriod(ye);
          ke.code || W.assignmentCompositionUid || String(fe);
          let pe = ke.status || "ASSIGNED";
          "pillboxes" === this.activeMedicamentsModuleService.activeArm && pe === d.vd.Prepared && (pe = "ASSIGNED");
          const be = (0, C.z)(ke),
            le = be ? (0, C.rZ)(j, be) : 0,
            n = !!Le;
          n && (pe = le < Le ? d.vd.Systematically : "COMPLETED");
          const Se = W.medications?.[F],
            qe = Se?.applyPacking || Se?.countAdditionalUnit,
            Rt = Se?.unitOfPacking,
            We = n && be ? (0, C.es)(le, Le) : void 0;
          return {
            id: fe,
            code: ke.code,
            assignmentCompositionUid: W?.assignmentCompositionUid,
            resultCompositionUid: ke.resultCompositionUid || W.resultCompositionUid || W.assignmentCompositionUid,
            status: pe,
            displayType: n ? "range" : "point",
            startTime: Y,
            endTime: G,
            period: ye,
            time: ae,
            dayTimePeriod: ke.dayTimePeriod,
            updated: ke.updated,
            planningDate: ke.planningDate,
            maxSymptomaticAmount: Le,
            label: We,
            symptomaticCompleted: le,
            amount: qe,
            pack: Rt,
            document: ke.documentNumber || Se?.documentNumber,
            issuer: ke.issuedBy || Se?.issuedBy
          };
        });
      }
      derivePeriodFromPlanningDate(j) {
        const W = A().utc(j),
          F = W.hour();
        let ke;
        return ke = F >= 6 && F < 12 ? "MORNING" : F >= 12 && F < 18 ? "DAY" : F >= 18 && F < 22 ? "EVENING" : "NIGHT", {
          period: ke,
          time: W.format("HH:mm")
        };
      }
      createMedicationDispenses(j) {
        return j.map(W => ({
          id: W.id,
          status: W.status,
          symptomatic: W.symptomatic,
          dayTimePeriod: W.dayTimePeriod,
          financeSourceCode: W.financeSourceCode,
          financeSourceName: W.financeSourceName,
          resultCompositionUid: W.resultCompositionUid?.split("::")[0] || null,
          byExecutor: W.byExecutor,
          code: W.code,
          planningDate: W.planningDate
        }));
      }
      getSymptomaticInfo(j, W) {
        return W ? {
          symptomaticDispenses: j,
          slotNotes: ""
        } : {
          symptomaticDispenses: [],
          slotNotes: ""
        };
      }
      getSlotsForMedication(j, W, F, Le, ke) {
        let J;
        return J = F.length > 0 ? this.createSlotsFromDispenses(F, j, W, Le) : this.generateSlotsFromMultiplicity(j, W, j.multiplicity, ke, F), J;
      }
      getMedicationTypeFlags(j) {
        return {
          isBase: !0 === j.base,
          isOnHand: !0 === j.onHand,
          isVaccination: !0 === j.vaccination,
          isSymptomatic: !0 === j.symptomatic
        };
      }
      formatDosage(j) {
        return `${j.countAdditionalUnit || j.applyDose || ""} ${j.additionalUnit || j.applyUnitOfDose || ""} [${j.applyPacking || ""} ${j.unitOfPacking || ""}]`;
      }
      formatFrequency(j, W) {
        const F = [];
        j.multiplicity && F.push(j.multiplicity);
        const ke = new Set(),
          J = new Set();
        for (const Y of W) Y.dayTimePeriod ? ke.add(Y.dayTimePeriod.toLowerCase()) : Y.planningDate && J.add(A().utc(Y.planningDate).format("HH:mm"));
        const ye = ["morning", "day", "evening", "night"].filter(Y => ke.has(Y)).map(Y => B.DAY_TIME_PERIOD_LABELS[Y]).filter(Boolean);
        ye.length > 0 && F.push(ye.join(", "));
        const ae = Array.from(J).sort();
        return ae.length && F.push(ae.join(", ") + " ч."), j.withFood && F.push(j.withFood), j.duration && F.push(`${j.duration} ${this.pluralizeDuration(j.duration, j.durationUnit)}`), F.join(", ");
      }
      pluralizeDuration(j, W) {
        const F = (W || "d").toLowerCase(),
          Le = B.DURATION_UNIT_WORDS[F];
        return Le ? (0, L._R)(j, Le) : W || "дней";
      }
      parseMultiplicity(j) {
        if (!j) return {
          count: 1,
          periods: ["MORNING"],
          isOnDemand: !1
        };
        const W = j.toLowerCase().trim();
        if (W.includes("симптоматически") || W.includes("по требованию") || W.includes("по просьбе")) return {
          count: 1,
          periods: ["MORNING"],
          isOnDemand: !0
        };
        if (W.includes("отменен")) return {
          count: 0,
          periods: [],
          isOnDemand: !1
        };
        const F = W.match(/(\d+)\s*\u0440\u0430\u0437/),
          Le = F ? parseInt(F[1], 10) : 1,
          ke = ["MORNING", "DAY", "EVENING", "NIGHT"];
        let J;
        switch (Le) {
          case 1:
            J = ["MORNING"];
            break;
          case 2:
            J = ["MORNING", "EVENING"];
            break;
          case 3:
            J = ["MORNING", "DAY", "EVENING"];
            break;
          default:
            J = ke.slice(0, Math.min(Le, 4));
        }
        return {
          count: Le,
          periods: J,
          isOnDemand: !1
        };
      }
      generateSlotsFromMultiplicity(j, W, F, Le, ke = []) {
        const J = this.parseMultiplicity(F);
        if (0 === J.count) return [];
        const fe = j.status?.toUpperCase();
        let ye;
        switch (fe) {
          case "CANCELLED":
            ye = "CANCELLED";
            break;
          case "CREATED":
            ye = "CREATED";
            break;
          case "COMPLETED":
            ye = "COMPLETED";
            break;
          default:
            ye = "ASSIGNED";
        }
        if ("CANCELLED" === ye) return [];
        const ae = Le ? A().utc(A()(Le).format("YYYY-MM-DD")).toISOString() : j.assignmentDate,
          Y = ae ? (0, C.HL)(ae) : null,
          G = j.maxSymptomaticAmount,
          te = Y ? (0, C.rZ)(ke, Y) : 0,
          pe = G && Y ? (0, C.es)(te, G) : G ? `0 / max ${G}` : "",
          be = G ? te < G ? d.vd.Systematically : "COMPLETED" : d.vd.Systematically;
        return J.periods.map((le, n) => {
          const qe = this.hashStringToNumber(`${j.id}-${W}-gen-${n}`),
            We = (j.assignmentCompositionUid || String(qe), j.medications?.[W]),
            Re = We?.applyPacking || We?.countAdditionalUnit,
            st = We?.unitOfPacking;
          return J.isOnDemand ? {
            id: qe,
            assignmentCompositionUid: j.assignmentCompositionUid,
            resultCompositionUid: j.resultCompositionUid || j.assignmentCompositionUid,
            status: be,
            displayType: "range",
            startTime: "06:00",
            endTime: "22:00",
            period: "MORNING",
            time: "08:00",
            planningDate: ae,
            maxSymptomaticAmount: j.maxSymptomaticAmount,
            dispensingSymptomaticAmount: j.dispensingSymptomaticAmount,
            label: pe,
            amount: Re,
            pack: st,
            document: We?.documentNumber,
            issuer: We?.issuedBy
          } : {
            id: qe,
            assignmentCompositionUid: j.assignmentCompositionUid,
            resultCompositionUid: j.resultCompositionUid || j.assignmentCompositionUid,
            status: ye,
            displayType: "point",
            period: le,
            time: this.getDefaultTimeForPeriod(le),
            startTime: this.getDefaultStartTimeForPeriod(le),
            endTime: this.getDefaultEndTimeForPeriod(le),
            planningDate: ae,
            maxSymptomaticAmount: j.maxSymptomaticAmount,
            dispensingSymptomaticAmount: j.dispensingSymptomaticAmount,
            label: G ? pe : "",
            amount: Re,
            pack: st,
            document: We?.documentNumber,
            issuer: We?.issuedBy
          };
        });
      }
      hashStringToNumber(j) {
        let W = 0;
        for (let F = 0; F < j.length; F++) W = (W << 5) - W + j.charCodeAt(F), W &= W;
        return Math.abs(W);
      }
      getDefaultTimeForPeriod(j) {
        return {
          MORNING: "08:00",
          DAY: "13:00",
          EVENING: "18:00",
          NIGHT: "22:00"
        }[j?.toUpperCase()] || "08:00";
      }
      getDefaultStartTimeForPeriod(j) {
        return {
          MORNING: "06:00",
          DAY: "12:00",
          EVENING: "18:00",
          NIGHT: "22:00"
        }[j?.toUpperCase()] || "06:00";
      }
      getDefaultEndTimeForPeriod(j) {
        return {
          MORNING: "12:00",
          DAY: "18:00",
          EVENING: "22:00",
          NIGHT: "06:00"
        }[j?.toUpperCase()] || "12:00";
      }
      getPillboxTasksAdapter(j, W) {
        return j.filter(F => F.careCase && F.medicationAssignment && F.pillbox && Array.isArray(F.medicationAssignment)).map(F => {
          const Le = F.careCase,
            ke = {
              lastName: Le.lastName || "",
              firstName: Le.firstName || "",
              secondName: Le.secondName
            },
            J = `${ke.lastName} ${ke.firstName} ${ke.secondName || ""}`.trim(),
            fe = [],
            ye = [],
            ae = [];
          F.medicationAssignment.filter(le => le.medications?.length > 0).forEach(le => {
            le.medications.forEach((n, Se) => {
              const qe = this.getMedicationTypeFlags(n),
                Rt = qe.isSymptomatic || le.multiplicity?.toLowerCase().includes("симптоматически"),
                We = ["перорально", "внутрь", "подъязычно"].includes(le.routeOfAdministration.toLowerCase()),
                Re = Rt || qe.isOnHand || qe.isBase || !We,
                st = this.formatDosage(n),
                q = le.medicationDispenses || [],
                ut = (this.getSymptomaticInfo(q, le?.maxSymptomaticAmount), this.getSlotsForMedication(le, Se, q, le?.maxSymptomaticAmount, W)),
                Ct = this.formatFrequency(le, q);
              Re || ae.push(...ut);
              const Ft = {
                id: le.id + (Se > 0 ? `-${Se}` : ""),
                name: this.getMedicationPrefix(n) + (n.mnn || n.mnnName || ""),
                tradeName: n.otnName || "",
                dose: n.applyDose || n.applyPacking,
                unitOfDose: n.applyUnitOfDose,
                dosage: st,
                method: le.routeOfAdministration || "",
                frequency: Ct,
                deleted: le.deleted,
                doctor: le.doctorName || "",
                slots: ut,
                status: le.status,
                base: qe.isBase,
                onHand: qe.isOnHand,
                vaccination: qe.isVaccination,
                assignmentCompositionUid: le.assignmentCompositionUid,
                otnId: n.otnCode,
                otnUid: n.otnUid,
                mnnId: n.mnnId,
                applyPacking: n.applyPacking,
                unitOfPacking: n?.unitOfPacking,
                permanently: le.permanently,
                comment: le.comment || "",
                countAdditionalUnit: n.countAdditionalUnit,
                additionalUnit: n.additionalUnit
              };
              Re ? ye.push(Ft) : fe.push(Ft);
            });
          });
          const Y = ae.some(le => "COMPLETED" === le.status || "ISSUED" === le.status);
          let te;
          te = ae.length > 0 && ae.every(le => "COMPLETED" === le.status || "ISSUED" === le.status || "UTILIZED" === le.status) ? M.hY.Completed : Y ? M.hY.InProgress : M.hY.Pending;
          const pe = F?.pillbox?.elements[0],
            be = (0, C.HI)(W || new Date());
          return pe.pillboxMarks = pe.pillboxMarks.filter(le => (0, C.HL)(le.boxDate) === be) ?? [], fe.length ? {
            id: Le.careCaseId,
            patientName: J,
            fullName: ke,
            historyNumber: F.hospitalCard?.fullNumber || F.hospitalCard?.number || "",
            ward: F.patientMovement?.wardName || "",
            department: F.patientMovement?.deptName || "",
            status: te,
            paymentType: Le.typeOfPaymentName || "",
            pillbox: pe,
            pillboxNumber: F?.pillbox?.elements[0]?.number || "",
            slots: ae,
            age: A()().diff(A()(Le.birthDate), "year"),
            sex: +Le.genderCode || 0,
            birthDate: Le.birthDate,
            careCaseId: Le.careCaseId,
            ehrId: F.medicationAssignment?.[0]?.ehrId,
            medicines: fe,
            otherMedicines: ye,
            entityId: F.entityId,
            updated: F.updated
          } : null;
        }).filter(F => !!F).sort((F, Le) => F.fullName.lastName.localeCompare(Le.fullName.lastName, void 0, {
          sensitivity: "base"
        }));
      }
    };
  let R = B;
  B.DAY_TIME_PERIOD_LABELS = {
    morning: "утром",
    day: "днем",
    evening: "вечером",
    night: "ночью"
  }, B.DURATION_UNIT_WORDS = {
    d: ["день", "дня", "дней"],
    h: ["час", "часа", "часов"],
    wk: ["неделя", "недели", "недель"],
    mo: ["месяц", "месяца", "месяцев"],
    y: ["год", "года", "лет"]
  }, B.ɵfac = function (W) {
    return new (W || B)(v.LFG(f.eN), v.LFG(E.M), v.LFG(h.yh), v.LFG(x.i8), v.LFG(u.w));
  }, B.ɵprov = v.Yz7({
    token: B,
    factory: B.ɵfac,
    providedIn: "root"
  });
});
