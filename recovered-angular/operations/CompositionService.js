// Reconstructed name. Original methods retained; dependencies in imports.json/module.factory.js.
class CompositionService {
  constructor(e, n, i, u, c, D) {
    this.http = e, this.keycloak = n, this.ehrService = i, this.userContext = u, this.patientService = c, this.store = D;
  }
  getEhrByPatientId(e) {
    return this.patientService.getPatientQuery(e).pipe((0, O.w)(n => this.ehrService.getEhr(n.ehrId)));
  }
  createOperaationCheckListDocument(e, n, i) {
    return e.createMedicalEntry("preoperative_checklist", n).pipe((0, O.w)(u => (new pt(u).setInitialValues(n, i), u.sign())));
  }
}
