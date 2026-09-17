// Extracted from main; webpack module 77069. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    b: () => I
  });
  var t = i(15861),
    e = i(83905),
    a = i(73252),
    m = i(851),
    d = i(97215),
    M = i(94650),
    b = i(80529),
    A = i(41025),
    N = i(89653);
  const O = class {
    constructor(C, v, f) {
      this.http = C, this.keycloak = v, this.store = f;
    }
    getAllDepartments() {
      return this.http.post("/gateway/orgstructure/api/v1/departments", {
        paging: {
          page: 0,
          "page-size": 0
        }
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    getDepartment(C) {
      return this.http.post("/gateway/orgstructure/api/v1/departments", {
        departmentIds: [C],
        paging: {
          page: 0,
          "page-size": 0
        }
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    getDepts() {
      var C = this;
      return (0, t.Z)(function* () {
        if (!(yield (0, e.z)(C.store.select(m.pP))).length) {
          const {
            departments: f
          } = yield (0, e.z)(C.getAllDepartments());
          C.store.dispatch((0, a.Dj)({
            departments: f
          }));
        }
      })();
    }
    getDeptList() {
      var C = this;
      return (0, t.Z)(function* () {
        return (yield (0, e.z)(C.store.select(m.pP))).filter(f => !f.emergencyRoom && f.hasBedFundRecords && "Active" === f.status.code).map(({
          id: f,
          fullName: E
        }) => ({
          id: f,
          name: E,
          fullName: E
        }));
      })();
    }
    getBedFund() {
      var C = this;
      return (0, t.Z)(function* () {
        const v = yield (0, e.z)(C.store.select(m.pP)),
          {
            department: f
          } = yield (0, e.z)(C.store.select(d.S8)),
          E = v.find(({
            id: h
          }) => h === f.id);
        return !!E && E.hasBedFundRecords;
      })();
    }
    getDepartmentById(C) {
      var v = this;
      return (0, t.Z)(function* () {
        if (!C) return null;
        const {
            departments: f
          } = yield (0, e.z)(v.getDepartment(C)),
          E = f?.[0];
        return E ? {
          id: E.id,
          name: E.fullName,
          fullname: E.fullName
        } : null;
      })();
    }
  };
  let I = O;
  O.ɵfac = function (v) {
    return new (v || O)(M.LFG(b.eN), M.LFG(A.M), M.LFG(N.yh));
  }, O.ɵprov = M.Yz7({
    token: O,
    factory: O.ɵfac,
    providedIn: "root"
  });
});
