// Extracted class; external identifiers resolve in modules/90015.js.
(class {
  constructor(je) {
    this.store = je, this.nurses = [];
  }
  ngOnInit() {
    const {
      elements: je,
      nurseId: Mt
    } = this.data;
    (0, a.a)({
      employees: this.store.select(O.VC),
      observationDateList: this.store.select(O.YI)
    }).pipe((0, e.t)(this)).subscribe(({
      employees: Je,
      observationDateList: Xt
    }) => {
      je.length && je.forEach(Nn => {
        const Pi = Nn.nasogastricCareMarks.find(Ii => M()(Xt).format(N.Hu) === M()(Ii.observationDate).format(N.Hu));
        if (Pi && Pi[Mt]) {
          const yi = Je.find(({
            id: co
          }) => co === Pi[Mt]).fio.split(" ");
          this.nurses.push(`${yi[0]} ${yi[1][0]}.${yi[2][0]}.`);
        } else this.nurses.push("");
      });
    });
  }
});
