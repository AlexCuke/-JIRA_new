// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o) {
    this.sharedDataService = s, this.router = o, this.listId = CP;
  }
  ngOnInit() {
    this._updateListId(this.router.url), this.router.events.pipe((0, ka.h)(s => s instanceof wl.m2), (0, Kn.t)(this)).subscribe(s => {
      this._updateListId(s.urlAfterRedirects);
    });
  }
  refreshData() {
    this.sharedDataService.runActionSubject(this.listId);
  }
  _updateListId(s) {
    const o = s.split("?")[0].split("#")[0].split("/").filter(Boolean)[0];
    this.listId = QA[o] ?? CP;
  }
});
