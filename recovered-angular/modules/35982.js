// Extracted from main; webpack module 35982. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    au: () => I,
    VK: () => M,
    eT: () => N,
    KD: () => b
  });
  var t = i(80529);
  class e {
    encodeKey(v) {
      return encodeURIComponent(v);
    }
    encodeValue(v) {
      return encodeURIComponent(v);
    }
    decodeKey(v) {
      return decodeURIComponent(v);
    }
    decodeValue(v) {
      return decodeURIComponent(v);
    }
  }
  var a = i(94650);
  const m = new a.OlP("basePath");
  class M {
    constructor(v = {}) {
      this.apiKeys = v.apiKeys, this.username = v.username, this.password = v.password, this.accessToken = v.accessToken, this.basePath = v.basePath, this.withCredentials = v.withCredentials, this.encoder = v.encoder, this.credentials = v.credentials ? v.credentials : {};
    }
    selectHeaderContentType(v) {
      if (0 === v.length) return;
      const f = v.find(E => this.isJsonMime(E));
      return void 0 === f ? v[0] : f;
    }
    selectHeaderAccept(v) {
      if (0 === v.length) return;
      const f = v.find(E => this.isJsonMime(E));
      return void 0 === f ? v[0] : f;
    }
    isJsonMime(v) {
      const f = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
      return null !== v && (f.test(v) || "application/json-patch+json" === v.toLowerCase());
    }
    lookupCredential(v) {
      const f = this.credentials[v];
      return "function" == typeof f ? f() : f;
    }
  }
  const O = class {
    constructor(v, f, E) {
      this.httpClient = v, this.basePath = "https://hospital-krakend.hospital.solit-clouds.ru", this.defaultHeaders = new t.WM(), this.configuration = new M(), E && (this.configuration = E), "string" != typeof this.configuration.basePath && ("string" != typeof f && (f = this.basePath), this.configuration.basePath = f), this.encoder = this.configuration.encoder || new e();
    }
    addToHttpParams(v, f, E) {
      return "object" != typeof f || f instanceof Date ? this.addToHttpParamsRecursive(v, f, E) : this.addToHttpParamsRecursive(v, f);
    }
    addToHttpParamsRecursive(v, f, E) {
      if (null == f) return v;
      if ("object" == typeof f) {
        if (Array.isArray(f)) f.forEach(h => v = this.addToHttpParamsRecursive(v, h, E));else if (f instanceof Date) {
          if (null == E) throw Error("key may not be null if value is Date");
          v = v.append(E, f.toISOString().substr(0, 10));
        } else Object.keys(f).forEach(h => v = this.addToHttpParamsRecursive(v, f[h], null != E ? `${E}.${h}` : h));
      } else {
        if (null == E) throw Error("key may not be null if value is not object or array");
        v = v.append(E, f);
      }
      return v;
    }
    whoami(v = "body", f = !1, E) {
      let h = this.defaultHeaders,
        x = E && E.httpHeaderAccept;
      void 0 === x && (x = this.configuration.selectHeaderAccept(["application/json"])), void 0 !== x && (h = h.set("Accept", x));
      let u = E && E.context;
      void 0 === u && (u = new t.qT());
      let T = "json";
      return x && (T = x.startsWith("text") ? "text" : this.configuration.isJsonMime(x) ? "json" : "blob"), this.httpClient.get(`${this.configuration.basePath}/api/users/whoami`, {
        context: u,
        responseType: T,
        withCredentials: this.configuration.withCredentials,
        headers: h,
        observe: v,
        reportProgress: f
      });
    }
  };
  let b = O;
  O.ɵfac = function (f) {
    return new (f || O)(a.LFG(t.eN), a.LFG(m, 8), a.LFG(M, 8));
  }, O.ɵprov = a.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
  const N = {
      ViewAdmissionChannelPatients: "VIEW_ADMISSION_CHANNEL_PATIENTS",
      ViewPatientChannel: "VIEW_PATIENT_CHANNEL",
      CreateCareCase: "CREATE_CARE_CASE",
      ViewCareCase: "VIEW_CARE_CASE",
      EditCareCase: "EDIT_CARE_CASE",
      PrintDocuments: "PRINT_DOCUMENTS",
      AllowPrintAllMedEntries: "ALLOW_PRINT_ALL_MED_ENTRIES",
      PrintMedEntries: "PRINT_MED_ENTRIES",
      ViewAdmissionPatients: "VIEW_ADMISSION_PATIENTS",
      ViewAdmissionHospitalizedPatients: "VIEW_ADMISSION_HOSPITALIZED_PATIENTS",
      ViewCancelledPatients: "VIEW_CANCELLED_PATIENTS",
      ViewAnnulledPatients: "VIEW_ANNULLED_PATIENTS",
      MoveAdmissionPatient: "MOVE_ADMISSION_PATIENT",
      CancelAdmissionPatient: "CANCEL_ADMISSION_PATIENT",
      HospitalizePatient: "HOSPITALIZE_PATIENT",
      CancelHospitalization: "CANCEL_HOSPITALIZATION",
      CancelHospitalizationCancellation: "CANCEL_HOSPITALIZATION_CANCELLATION",
      ViewPdoZone: "VIEW_PDO_ZONE",
      PlacePdoZonePatient: "PLACE_PDO_ZONE_PATIENT",
      AnnulCareCase: "ANNUL_CARE_CASE",
      ViewTemperatureListPatients: "VIEW_TEMPERATURE_LIST_PATIENTS",
      UpdatePatientTemperatureList: "UPDATE_PATIENT_TEMPERATURE_LIST",
      UpdatePatientNews2: "UPDATE_PATIENT_NEWS2",
      ViewGlobalListPatients: "VIEW_GLOBAL_LIST_PATIENTS",
      ViewHospitalizedPatients: "VIEW_HOSPITALIZED_PATIENTS",
      PlacePatient: "PLACE_PATIENT",
      ChangePatientPlacement: "CHANGE_PATIENT_PLACEMENT",
      MovePatient: "MOVE_PATIENT",
      CancelPatientMovement: "CANCEL_PATIENT_MOVEMENT",
      CreatePatientDischargeRequest: "CREATE_PATIENT_DISCHARGE_REQUEST",
      EditPatientDischargeRequest: "EDIT_PATIENT_DISCHARGE_REQUEST",
      CancelPatientDischargeRequest: "CANCEL_PATIENT_DISCHARGE_REQUEST",
      DischargePatient: "DISCHARGE_PATIENT",
      ViewDischargedPatientList: "VIEW_DISCHARGED_PATIENT_LIST",
      CancelPatientDischarge: "CANCEL_PATIENT_DISCHARGE",
      ViewPatientHospitalization: "VIEW_PATIENT_HOSPITALIZATION",
      CreateDocuments: "CREATE_DOCUMENTS",
      EditMedicalCard: "EDIT_MEDICAL_CARD",
      ViewMedicalCard: "VIEW_MEDICAL_CARD",
      ViewMedicalRecord: "VIEW_MEDICAL_RECORD",
      EditMedicalRecord: "EDIT_MEDICAL_RECORD",
      DeleteMedicalRecord: "DELETE_MEDICAL_RECORD",
      CopyMedicalRecord: "COPY_MEDICAL_RECORD",
      CreateUserTemplate: "CREATE_USER_TEMPLATE",
      DeleteUserTemplate: "DELETE_USER_TEMPLATE",
      ApplyUserTemplate: "APPLY_USER_TEMPLATE",
      ManagePublicAvailabilityOfUserTemplate: "MANAGE_PUBLIC_AVAILABILITY_OF_USER_TEMPLATE",
      AttachAssignmentToProtocol: "ATTACH_ASSIGNMENT_TO_PROTOCOL",
      ViewFavoriteDocuments: "VIEW_FAVORITE_DOCUMENTS",
      EditFavoriteDocuments: "EDIT_FAVORITE_DOCUMENTS",
      ViewInstructionList: "VIEW_INSTRUCTION_LIST",
      CreateAssignment: "CREATE_ASSIGNMENT",
      ViewAssignment: "VIEW_ASSIGNMENT",
      EditAssignment: "EDIT_ASSIGNMENT",
      DeleteAssignment: "DELETE_ASSIGNMENT",
      CancelAssignment: "CANCEL_ASSIGNMENT",
      RollbackAssignment: "ROLLBACK_ASSIGNMENT",
      TrackingMetricsTemplates: "TRACKING_METRICS_TEMPLATES",
      SwitchStorage: "SWITCH_STORAGE",
      LabTestResultsChart: "LAB_TEST_RESULTS_CHART",
      ViewTap: "VIEW_TAP",
      CreateTap: "CREATE_TAP",
      EditTap: "EDIT_TAP",
      PrintTap: "PRINT_TAP",
      ViewMedicalConclusion: "VIEW_MEDICAL_CONCLUSION",
      ViewStatCard: "VIEW_STAT_CARD",
      CreateStatCard: "CREATE_STAT_CARD",
      EditStatCard: "EDIT_STAT_CARD",
      DeleteStatCard: "DELETE_STAT_CARD",
      PrintStatCard: "PRINT_STAT_CARD",
      CreateEpicrisis: "CREATE_EPICRISIS",
      ViewEpicrisis: "VIEW_EPICRISIS",
      EditEpicrisis: "EDIT_EPICRISIS",
      DeleteEpicrisis: "DELETE_EPICRISIS",
      PrintEpicrisis: "PRINT_EPICRISIS",
      ViewSignatureEpicrisisList: "VIEW_SIGNATURE_EPICRISIS_LIST",
      ApproveEpicrisis: "APPROVE_EPICRISIS",
      ViewSigningEpicrisisList: "VIEW_SIGNING_EPICRISIS_LIST",
      RevokeEpicrisisSignature: "REVOKE_EPICRISIS_SIGNATURE",
      ViewConsultationAdmissionPlan: "VIEW_CONSULTATION_ADMISSION_PLAN",
      ExecuteConsultation: "EXECUTE_CONSULTATION",
      CancelConsultation: "CANCEL_CONSULTATION",
      RollbackConsultation: "ROLLBACK_CONSULTATION",
      ViewConsultationProtocol: "VIEW_CONSULTATION_PROTOCOL",
      ViewPpiAdmissionPlan: "VIEW_PPI_ADMISSION_PLAN",
      ExecutePpi: "EXECUTE_PPI",
      ViewPpiProtocol: "VIEW_PPI_PROTOCOL",
      ViewOperationAdmissionPlan: "VIEW_OPERATION_ADMISSION_PLAN",
      ExecuteOperation: "EXECUTE_OPERATION",
      CancelOperation: "CANCEL_OPERATION",
      RollbackOperation: "ROLLBACK_OPERATION",
      ViewOperationProtocol: "VIEW_OPERATION_PROTOCOL",
      ViewLabAdmissionPlan: "VIEW_LAB_ADMISSION_PLAN",
      ExecuteLab: "EXECUTE_LAB",
      ViewLabProtocol: "VIEW_LAB_PROTOCOL",
      ViewInstrumentalAdmissionPlan: "VIEW_INSTRUMENTAL_ADMISSION_PLAN",
      ExecuteInstrumental: "EXECUTE_INSTRUMENTAL",
      CancelInstrumental: "CANCEL_INSTRUMENTAL",
      RollbackInstrumental: "ROLLBACK_INSTRUMENTAL",
      ViewInstrumentalProtocol: "VIEW_INSTRUMENTAL_PROTOCOL",
      ViewUnregisteredPatientReferral: "VIEW_UNREGISTERED_PATIENT_REFERRAL",
      ViewRegisteredPatientReferral: "VIEW_REGISTERED_PATIENT_REFERRAL",
      RegisterPatientProbe: "REGISTER_PATIENT_PROBE",
      CancelPatientProbeRegistration: "CANCEL_PATIENT_PROBE_REGISTRATION",
      NoteIncompleteProbe: "NOTE_INCOMPLETE_PROBE",
      PrintPersonalLabel: "PRINT_PERSONAL_LABEL",
      ViewProcedureExecutionList: "VIEW_PROCEDURE_EXECUTION_LIST",
      CancelProcedureExecution: "CANCEL_PROCEDURE_EXECUTION",
      RollbackCancelledProcedureExecution: "ROLLBACK_CANCELLED_PROCEDURE_EXECUTION",
      ExecuteProcedure: "EXECUTE_PROCEDURE",
      RollbackExecutedProcedureExecution: "ROLLBACK_EXECUTED_PROCEDURE_EXECUTION",
      ViewProcedureExecutionProtocol: "VIEW_PROCEDURE_EXECUTION_PROTOCOL",
      FinalizeProcedureAssignment: "FINALIZE_PROCEDURE_ASSIGNMENT",
      ViewMedicationInstructionList: "VIEW_MEDICATION_INSTRUCTION_LIST",
      ViewProcedureMedicationInstructionList: "VIEW_PROCEDURE_MEDICATION_INSTRUCTION_LIST",
      ExecuteMedicationInstruction: "EXECUTE_MEDICATION_INSTRUCTION",
      PostponeMedicationExecution: "POSTPONE_MEDICATION_EXECUTION",
      CancelMedicationExecution: "CANCEL_MEDICATION_EXECUTION",
      RollbackMedicationExecution: "ROLLBACK_MEDICATION_EXECUTION",
      ClientFrontendAdmin: "CLIENT_FRONTEND_ADMIN",
      EditOrganizationStructure: "EDIT_ORGANIZATION_STRUCTURE",
      EditRolesAndUsers: "EDIT_ROLES_AND_USERS",
      EditSettings: "EDIT_SETTINGS",
      ViewScanCopyList: "VIEW_SCAN_COPY_LIST",
      ViewScanCopyPatientList: "VIEW_SCAN_COPY_PATIENT_LIST",
      ViewFavoritePatients: "VIEW_FAVORITE_PATIENTS",
      EditFavoritePatients: "EDIT_FAVORITE_PATIENTS",
      ViewCddConsultationAdmissionPlan: "VIEW_CDD_CONSULTATION_ADMISSION_PLAN",
      ScheduleDispatching: "SCHEDULE_DISPATCHING",
      ViewLaboratoryWidget: "VIEW_LABORATORY_WIDGET",
      ViewInstrumentalWidget: "VIEW_INSTRUMENTAL_WIDGET",
      RegisterLogPatient: "REGISTER_LOG_PATIENT",
      CancelEntryLogPatient: "CANCEL_ENTRY_LOG_PATIENT",
      RollbackEntryLogPatient: "ROLLBACK_ENTRY_LOG_PATIENT",
      PlanningHospitalizationPatient: "PLANNING_HOSPITALIZATION_PATIENT",
      EditPlanningHospitalizationPatient: "EDIT_PLANNING_HOSPITALIZATION_PATIENT",
      ViewRegisteredLogPatient: "VIEW_REGISTERED_LOG_PATIENT",
      ViewPlannedLogPatient: "VIEW_PLANNED_LOG_PATIENT",
      ViewCancelledLogPatient: "VIEW_CANCELLED_LOG_PATIENT",
      ViewHospitalizedLogPatient: "VIEW_HOSPITALIZED_LOG_PATIENT",
      ViewPlanPatientsList: "VIEW_PLAN_PATIENTS_LIST",
      LogCarecaseRegistration: "LOG_CARECASE_REGISTRATION",
      ConductTriage: "CONDUCT_TRIAGE",
      EditDictionaries: "EDIT_DICTIONARIES",
      EditOuterSystemsUnloading: "EDIT_OUTER_SYSTEMS_UNLOADING",
      ViewIntegralWidget: "VIEW_INTEGRAL_WIDGET"
    },
    L = class {
      static forRoot(v) {
        return {
          ngModule: L,
          providers: [{
            provide: M,
            useFactory: v
          }]
        };
      }
      constructor(v, f) {
        if (v) throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
        if (!f) throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
      }
    };
  let I = L;
  L.ɵfac = function (f) {
    return new (f || L)(a.LFG(L, 12), a.LFG(t.eN, 8));
  }, L.ɵmod = a.oAB({
    type: L
  }), L.ɵinj = a.cJS({});
});
