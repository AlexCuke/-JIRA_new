// Extracted from main; webpack module 20107. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O: () => M
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
    getDepartmentPatients(N) {
      var I = this;
      return (0, t.Z)(function* () {
        const O = [{
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
                must: [{
                  exists: {
                    field: "data.hospitalizedPatient"
                  }
                }, {
                  term: {
                    "data.hospitalizedPatient.statusCode": {
                      value: "HOSPITALIZED"
                    }
                  }
                }]
              }
            }]
          }
        }];
        N && O.push({
          term: {
            "data.patientMovement.departmentId": {
              value: N
            }
          }
        });
        const C = [];
        let v = 0,
          f = 1 / 0;
        for (; v < f;) {
          const E = {
            searchParams: {
              body: {
                size: 500,
                track_total_hits: !0,
                query: {
                  bool: {
                    must: O
                  }
                },
                from: v
              }
            }
          };
          N && (E.departmentId = N);
          const h = yield (0, e.z)(I.http.post("/gateway/patient-list/api/v1/index/profile-nurse-task-list", E, {
              headers: {
                accept: "application/json",
                authorization: `Bearer ${I.keycloak.token}`
              }
            })),
            x = h.hits?.hits ?? [];
          C.push(...x);
          const u = h.hits?.total;
          if (f = "number" == typeof u ? u : u?.value ?? x.length, x.length < 500) break;
          v += 500;
        }
        return C.map(E => E?._source?.data).filter(Boolean).map(E => I.mapPatient(E)).filter(E => !!E?.careCaseId && !!E?.fio).sort((E, h) => E.fio.localeCompare(h.fio, "ru"));
      })();
    }
    mapPatient(N) {
      const I = N?.careCase;
      if (!I) return null;
      const O = [I.lastName, I.firstName, I.secondName].filter(Boolean).join(" ").trim(),
        L = N?.hospitalCard?.fullNumber || N?.hospitalCard?.number,
        C = L ? `\u2116 ${L}` : "",
        v = I.birthDate,
        E = [O, v ? new Intl.DateTimeFormat("ru-RU").format(new Date(v)) : "", C].filter(Boolean).join(", ");
      return {
        careCaseId: I.careCaseId,
        actualPatientId: I.actualPatientId || I.patientId,
        departmentId: N?.patientMovement?.departmentId,
        birthDate: v,
        cardNumber: C,
        fio: O,
        fullName: O,
        label: E
      };
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
