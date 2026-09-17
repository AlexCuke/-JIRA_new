// Extracted class; external identifiers resolve in modules/11796.js.
(class {
  constructor(e, n, i) {
    this.breakpointObserver = e, this.userContext = n, this.store = i, this.isTablet = !1, this.operationListParams = {
      listName: "operations-list",
      initialParams: {},
      queryParams: {},
      excludeParts: {}
    }, this.operationAdaptiveListParams = {
      listName: "operations-adaptive-list",
      initialParams: {},
      queryParams: {},
      excludeParts: {}
    };
  }
  ngAfterViewInit() {
    this.breakpointObserver.observe(F.o).pipe((0, a.t)(this)).subscribe(e => {
      this.isTablet = e.matches;
    }), this.userContext.getUserContext().pipe((0, a.t)(this), (0, A.U)(e => function z(o) {
      const e = o?.department?.id;
      if (null == e) return null;
      const n = `${e}`.trim();
      return n && "undefined" !== n && "null" !== n ? n : null;
    }(e)), (0, L.h)(e => !!e), (0, E.x)()).subscribe(e => {});
  }
  onRunEvent(e) {
    console.log("EVENT", e);
  }
  onRunAction(e) {
    console.log("DATA^", e);
    const i = e?.data ?? null;
    "open_checkList" === (e?.actionName ?? "") && i && this.store.dispatch((0, I.D)({
      data: i
    }));
  }
});
