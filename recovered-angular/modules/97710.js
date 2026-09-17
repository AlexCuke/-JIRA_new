// Extracted from main; webpack module 97710. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => M
  });
  var t = i(15861),
    e = i(83905),
    a = i(94650),
    m = i(80529),
    d = i(41025);
  const b = class {
    constructor(N, I) {
      this.http = N, this.keycloak = I;
    }
    getEmployeesList(N) {
      return this.http.post("/gateway/userservice/api/composite/employees", {
        filter: {
          status: "ALLACTIVE",
          jobTitleIds: [],
          departmentIds: [N]
        },
        paging: {
          page: 1,
          "page-size": 500,
          sort: [{
            direction: "ASC",
            path: "EMPLOYEEFIO"
          }]
        }
      }, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${this.keycloak.token}`
        }
      });
    }
    getPatients(N, I, O, L) {
      var C = this;
      return (0, t.Z)(function* () {
        const v = [{
            bool: {
              must: [{
                exists: {
                  field: "data.patientMovement"
                }
              }, {
                exists: {
                  field: "data.careCase"
                }
              }, {
                exists: {
                  field: "data.hospitalCard"
                }
              }, {
                bool: {
                  must_not: [{
                    exists: {
                      field: "data.patientMovement.endTime"
                    }
                  }]
                }
              }]
            }
          }, {
            bool: {
              should: [{
                bool: {
                  must_not: [{
                    exists: {
                      field: "data.stomas"
                    }
                  }]
                }
              }, {
                bool: {
                  must: [{
                    exists: {
                      field: "data.stomas"
                    }
                  }, {
                    bool: {
                      must_not: [{
                        nested: {
                          path: "data.stomas.elements",
                          query: {
                            bool: {
                              must_not: [{
                                exists: {
                                  field: "data.stomas.elements.finishDate"
                                }
                              }]
                            }
                          }
                        }
                      }]
                    }
                  }]
                }
              }],
              minimum_should_match: 1
            }
          }],
          f = O?.trim();
        if (N) v.push({
          term: {
            "data.patientMovement.departmentId": {
              value: N
            }
          }
        });else if (f) {
          const u = `.*${(u => u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))(f.toLowerCase())}.*`;
          v.push({
            bool: {
              should: [{
                regexp: {
                  "data.careCase.lastName": {
                    value: u
                  }
                }
              }, {
                regexp: {
                  "data.careCase.firstName": {
                    value: u
                  }
                }
              }, {
                regexp: {
                  "data.careCase.secondName": {
                    value: u
                  }
                }
              }],
              minimum_should_match: 1
            }
          });
        }
        const x = [];
        if (L) {
          const u = {
            searchParams: {
              body: {
                size: L,
                track_total_hits: !0,
                query: {
                  bool: {
                    must: v
                  }
                },
                from: 0
              }
            }
          };
          N && (u.departmentId = N);
          const T = yield (0, e.z)(C.http.post("/gateway/patient-list/api/v1/index/profile-stoma-patient-list", u, {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${C.keycloak.token}`
            }
          }));
          x.push(...(T.hits?.hits ?? []));
        } else {
          let u = 0,
            T = 1 / 0;
          for (; u < T;) {
            const R = {
              searchParams: {
                body: {
                  size: 500,
                  track_total_hits: !0,
                  query: {
                    bool: {
                      must: v
                    }
                  },
                  from: u
                }
              }
            };
            N && (R.departmentId = N);
            const B = yield (0, e.z)(C.http.post("/gateway/patient-list/api/v1/index/profile-stoma-patient-list", R, {
                headers: {
                  accept: "application/json",
                  authorization: `Bearer ${C.keycloak.token}`
                }
              })),
              y = B.hits?.hits ?? [];
            x.push(...y);
            const j = B.hits?.total;
            if (T = "number" == typeof j ? j : j?.value ?? y.length, y.length < 500) break;
            u += 500;
          }
        }
        return x.map(u => u?._source?.data).filter(Boolean).map(u => {
          const T = u?.careCase;
          return {
            ...u,
            careCaseId: u?.careCaseId || T?.careCaseId,
            actualPatientId: u?.actualPatientId || u?.patientId || T?.actualPatientId || T?.patientId,
            departmentId: u?.departmentId || u?.patientMovement?.departmentId,
            birthDate: u?.birthDate || T?.birthDate,
            cardNumber: u?.cardNumber || `\u2116 ${u?.hospitalCard?.fullNumber || u?.hospitalCard?.number}`,
            fio: u?.fio || [T?.lastName, T?.firstName, T?.secondName].filter(Boolean).join(" ")
          };
        });
      })();
    }
  };
  let M = b;
  b.ɵfac = function (I) {
    return new (I || b)(a.LFG(m.eN), a.LFG(d.M));
  }, b.ɵprov = a.Yz7({
    token: b,
    factory: b.ɵfac,
    providedIn: "root"
  });
});
