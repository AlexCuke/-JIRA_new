// Extracted class; external identifiers resolve in modules/90015.js.
(class {
  constructor(je) {
    this.store = je, this.times = [];
  }
  ngOnInit() {
    this.store.select(O.YI).pipe((0, e.t)(this), (0, Re.q)(1)).subscribe(je => {
      this.data && (this.times = this.data.careMarks.map((Mt, Je) => {
        const Xt = Mt.find(Nn => {
          if (M()(je).format(N.Hu) === M()(Nn.observationDate).format(N.Hu) && Nn[this.data.timeField]) return Nn;
        });
        return Xt ? Xt[this.data.timeField].slice(0, 5) : "   ";
      }));
    });
  }
});
