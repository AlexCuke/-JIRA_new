// Extracted from main; webpack module 20629. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  function t(a) {
    return a?.ward ? a.ward : a?.patientMovement?.wardName ?? "";
  }
  function e(a) {
    const m = a?.patientMovement?.departmentId;
    return m || (a?.careCase?.admissionDepartmentId ?? "");
  }
  i.d(V, {
    O: () => t,
    v: () => e
  });
});
