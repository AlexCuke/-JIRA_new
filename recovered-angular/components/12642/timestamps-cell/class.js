// Extracted class; external identifiers resolve in modules/12642.js.
(class {
  constructor(I) {
    this.sharedDataService = I, this.listState = null, this.cellState = [], this.sharedDataService.updates$.subscribe(O => {
      this.listState = O;
    });
  }
  ngOnInit() {
    this.cellState = (this.data?.data?.elements ?? []).map(O => {
      const L = {
        ...O
      };
      return L.stomaCareMarks && L.stomaCareMarks.length > 0 && (L.stomaCareMarks = L.stomaCareMarks.map(C => {
        const v = {
            ...C
          },
          f = this.listState?.value?.queryParams?.dateRangeWidget;
        if (!f) return null;
        const E = e()(f),
          h = e()(v.observationDate);
        return E.isSame(h, "day") ? v[this.data.type]?.slice(0, 5) : null;
      }).filter(Boolean)), L;
    });
  }
});
