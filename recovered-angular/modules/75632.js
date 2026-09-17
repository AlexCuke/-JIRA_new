// Extracted from main; webpack module 75632. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    p: () => a
  });
  var t = i(94650),
    e = i(97215);
  const m = class {
    constructor(M) {
      this.userContextService = M, this.rightCodes = [], this.allowedExecutionAssignmentCodes = new Set(), this.userContextService.getUserContext().subscribe(b => {
        b && (this.rightCodes = b.rightCodes ?? [], this.allowedExecutionAssignmentCodes = new Set(Object.keys(b.assignmentRights?.execution?.Procedure ?? {})));
      });
    }
    hasRight(M) {
      return this.rightCodes.includes(M);
    }
    hasAssignmentExecutionRight(M) {
      return !!M && this.allowedExecutionAssignmentCodes.has(M);
    }
    canFinalizeAssignment(M) {
      return !(!this.hasRight("EXECUTE_PROCEDURE_ASSIGNMENT") || !this.hasRight("FINALIZE_PROCEDURE_ASSIGNMENT")) && this.hasAssignmentExecutionRight(M);
    }
    canFinalizeAssignments(M) {
      return !!M?.length && M.every(b => this.canFinalizeAssignment(b));
    }
    getExcludedParts() {
      const M = [];
      return this.hasRight("EXECUTE_PROCEDURE") || (M.push("complete-with-doc"), M.push("complete")), this.hasRight("CANCEL_PROCEDURE_EXECUTION") || (M.push("cancel"), M.push("cancel_kebab")), this.hasRight("ROLLBACK_EXECUTED_PROCEDURE_EXECUTION") || M.push("restore_completed"), this.hasRight("ROLLBACK_CANCELLED_PROCEDURE_EXECUTION") || M.push("restore_cancelled"), this.hasRight("VIEW_PROCEDURE_EXECUTION_PROTOCOL") || M.push("open_finish_details"), (!this.hasRight("EXECUTE_PROCEDURE_ASSIGNMENT") || !this.hasRight("FINALIZE_PROCEDURE_ASSIGNMENT")) && M.push("final"), {
        excludeActions: M,
        excludeWidgets: [],
        excludeColumns: []
      };
    }
  };
  let a = m;
  m.ɵfac = function (b) {
    return new (b || m)(t.LFG(e.oL));
  }, m.ɵprov = t.Yz7({
    token: m,
    factory: m.ɵfac,
    providedIn: "root"
  });
});
