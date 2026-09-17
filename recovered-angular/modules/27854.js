// Extracted from main; webpack module 27854. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    C: () => E,
    c: () => x
  });
  var t = i(94650),
    e = i(2711),
    a = i(82805),
    m = i(95698),
    d = i(4128),
    M = i(54004),
    b = i(70262),
    A = i(39646),
    N = i(82722),
    I = i(63900),
    O = i(39300),
    L = i(46590),
    C = i(88e3);
  const E = 3e3,
    u = class {
      constructor() {
        this.indexService = (0, t.f3M)(C.o);
      }
      scheduleDelayedListReload(R, B = E) {
        return (0, a.H)(B).pipe((0, m.q)(1)).subscribe(() => R());
      }
      scheduleListRefreshAfterRegistration(R, B, y) {
        return this.scheduleDelayedListReload(y);
      }
      scheduleListRefreshAfterMarkPostponing(R, B, y) {
        return this.scheduleDelayedListReload(y);
      }
      scheduleListRefreshAfterCancelPostponing(R, B, y) {
        return this.scheduleDelayedListReload(y);
      }
      scheduleListRefreshAfterOutLabResult(R, B, y) {
        return this.scheduleDelayedListReload(y);
      }
      resolveReferralsWithProbeFromIndex(R, B) {
        const y = () => (0, d.D)(R.map(F => this.fetchReferralFromIndex(F, B).pipe((0, M.U)(Le => this._mergeProbeFromIndex(F, Le)), (0, b.K)(() => (0, A.of)(F))))),
          j = (0, a.H)(E),
          W = (0, a.H)(0, 500).pipe((0, N.R)((0, a.H)(E)), (0, I.w)(() => y()), (0, O.h)(F => F.every(Le => !!`${Le?.labReferral?.probeNumber ?? ""}`.trim())), (0, m.q)(1), (0, L.d)(null));
        return (0, d.D)([j, W]).pipe((0, I.w)(([, F]) => F ? (0, A.of)(F) : y()));
      }
      _mergeProbeFromIndex(R, B) {
        const y = `${B?.labReferral?.probeNumber ?? ""}`.trim();
        return y ? {
          ...R,
          labReferral: {
            ...R.labReferral,
            probeNumber: y
          }
        } : R;
      }
      scheduleListRefreshAfterGenerateProbeNumber(R, B, y) {
        const j = R.filter(Le => `${Le.labReferral?.referralId ?? ""}`.trim());
        if (!j.length) return this.scheduleDelayedListReload(y);
        const W = (0, a.H)(E),
          F = (0, a.H)(0, 500).pipe((0, N.R)((0, a.H)(E)), (0, I.w)(() => (0, d.D)(j.map(Le => this.fetchReferralFromIndex(Le, B).pipe((0, b.K)(() => (0, A.of)(null)))))), (0, O.h)(Le => Le.every(ke => !!`${ke?.labReferral?.probeNumber ?? ""}`.trim())), (0, m.q)(1), (0, L.d)(null));
        return (0, d.D)([W, F]).pipe((0, m.q)(1)).subscribe(() => y());
      }
      fetchReferralFromIndex(R, B) {
        const y = `${R.labReferral?.referralId ?? ""}`.trim(),
          j = String(R.labReferral?.referralNumber ?? R.labReferral?.probeNumber ?? "").trim();
        return y && j ? this._fetchReferralFromIndex(j, y, B).pipe((0, M.U)(({
          registered: W,
          unregistered: F
        }) => F?.labReferral?.referralId === y ? F : W?.labReferral?.referralId === y ? W : F ?? W), (0, b.K)(() => (0, A.of)(null))) : (0, A.of)(null);
      }
      scheduleListRefreshAfterCancelProbe(R, B, y) {
        return this.scheduleDelayedListReload(y);
      }
      _fetchReferralFromIndex(R, B, y) {
        return (0, d.D)({
          registered: this._searchInList("lr-registered-patient-list", R, B, y),
          unregistered: this._searchInList("lr-unregistered-patient-list", R, B, y)
        });
      }
      _searchInList(R, B, y, j) {
        return this.indexService.getConfig(R).pipe((0, I.w)(W => {
          const F = e.Pj.updateParamsByConfig(W, {
              listName: R,
              queryParams: {},
              initialParams: j
            }),
            Le = e.Pj.updateParamsByConfig(W, {
              listName: R,
              queryParams: {
                searchWidget: B
              },
              initialParams: j
            });
          return this.indexService.getList({
            filter: Le,
            initialFilter: F,
            sort: void 0,
            paging: {
              pageIndex: 0,
              size: W.datasource?.paging?.pageSize ?? 100
            }
          }, W);
        }), (0, M.U)(W => this._findReferralInItems(W?.items ?? [], B, y)), (0, b.K)(() => (0, A.of)(null)));
      }
      _findReferralInItems(R, B, y) {
        const j = B.trim(),
          W = j.toLowerCase(),
          F = Le => {
            for (const ke of Le) {
              const J = ke.data;
              if (J?.labReferral) {
                if (J.labReferral.referralId === y) return J;
                const ye = String(J.labReferral.probeNumber ?? "").trim(),
                  ae = String(J.labReferral.referralNumber ?? "").trim();
                if (ye === j || ye.toLowerCase() === W || ae === j) return J;
              }
              const fe = ke.children;
              if (Array.isArray(fe) && fe.length > 0) {
                const ye = F(fe);
                if (ye) return ye;
              }
            }
            return null;
          };
        return F(R);
      }
    };
  let x = u;
  u.ɵfac = function (B) {
    return new (B || u)();
  }, u.ɵprov = t.Yz7({
    token: u,
    factory: u.ɵfac,
    providedIn: "root"
  });
});
