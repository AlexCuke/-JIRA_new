// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D) {
    this.store = s, this.model = o, this.router = D, this.model$ = this.model.init(), this.title = "МЕДСЕСТРА";
  }
  ngOnInit() {
    this.router.events.pipe((0, ka.h)(s => s instanceof wl.m2)).subscribe(() => {
      (0, Fc.Kn)();
    }), this.store.dispatch(Tl.initAuthorization()), this.store.select(Kc.selectAuthorizationState).pipe((0, iu.P)(s => "INITIAL" !== s.status)).subscribe(() => {
      this.store.dispatch(cl.ao.loadUserInfo());
    });
  }
});
