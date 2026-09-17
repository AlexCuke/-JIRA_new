// Exact compiled component metadata; references belong to modules/32428.js
({
  type: Et,
  selectors: [["lu-tab"], ["a", "lu-tab", ""]],
  contentQueries: function (Me, Ke, Ze) {
    if (1 & Me && t.Suo(Ze, Se, 5, t.Rgc), 2 & Me) {
      let Ee;
      t.iGM(Ee = t.CRH()) && (Ke.title = Ee.first);
    }
  },
  viewQuery: function (Me, Ke) {
    if (1 & Me && t.Gf(t.Rgc, 7), 2 & Me) {
      let Ze;
      t.iGM(Ze = t.CRH()) && (Ke.content = Ze.first);
    }
  },
  inputs: {
    label: "label",
    id: "id",
    active: "active"
  },
  features: [t.TTD],
  ngContentSelectors: ke,
  decls: 1,
  vars: 0,
  template: function (Me, Ke) {
    1 & Me && (t.F$t(), t.YNc(0, Le, 1, 0, "ng-template"));
  },
  changeDetection: 0
});
