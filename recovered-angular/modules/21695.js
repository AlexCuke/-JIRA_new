// Extracted from main; webpack module 21695. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    N: () => M
  });
  var t = i(89653),
    e = i(40929),
    a = i(73252);
  const m = (0, t.Lq)(e.E, (0, t.on)(a.Fb, (A, N) => ({
    ...A,
    observationListDate: N.observationListDate
  })), (0, t.on)(a.rr, (A, N) => ({
    ...A,
    observationWatchDate: N.observationWatchDate
  })), (0, t.on)(a.iO, (A, N) => ({
    ...A,
    stomaList: N.stomaList
  })), (0, t.on)(a.cf, (A, N) => ({
    ...A,
    modal: N.modal
  })), (0, t.on)(a.ZB, (A, N) => ({
    ...A,
    stomaWatchMenu: N.state,
    modalUpdate: N.modalUpdate ?? A.modalUpdate
  })), (0, t.on)(a.Dj, (A, N) => ({
    ...A,
    departments: N.departments
  })), (0, t.on)(a.mR, (A, N) => ({
    ...A,
    selectedPatient: N.selectedPatient
  })), (0, t.on)(a.vi, (A, N) => ({
    ...A,
    stomaListItems: N.stomaListItems
  })), (0, t.on)(a.EB, (A, N) => ({
    ...A,
    doctorList: N.doctorList
  })), (0, t.on)(a.Wn, (A, {
    careCaseId: N
  }) => ({
    ...A,
    pendingOpenCard: N
  })), (0, t.on)(a.BT, (A, N) => ({
    ...A,
    search: N.search
  })));
  var d = i(94650);
  const b = class {};
  let M = b;
  b.ɵfac = function (I) {
    return new (I || b)();
  }, b.ɵmod = d.oAB({
    type: b
  }), b.ɵinj = d.cJS({
    imports: [t.Aw.forFeature("stoma", m)]
  });
});
