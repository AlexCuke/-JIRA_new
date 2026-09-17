// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X, oe, ue) {
    this.router = s, this.store = o, this.authService = D, this.userContextService = Z, this.keycloakChangeUserProfileService = X, this.keycloakChangeUserPasswordService = oe, this.settingsService = ue, this.modelSubject = new KA.X(null), this.model$ = this.modelSubject.pipe((0, vP.d)(1)), this.breakpointObserver = (0, e.f3M)(Lp.Yg), this.telephonogramRouteIsAvailable = !1, this.isTablet = !1, this.store.select(Kc.selectAuthorizationState).pipe((0, ka.h)(He => "SUCCESS" === He.status), (0, iu.P)(), (0, ka.h)(() => !!this.authService.token), (0, vs.w)(() => this.settingsService.getSettingQuery("medical-day", "medical-day-start")), (0, Ja.K)(() => (0, La.of)(null)), (0, Kn.t)(this)).subscribe(He => {
      const lt = He?.setting?.time,
        ht = "string" == typeof lt ? lt : void 0;
      ht && this.store.dispatch(lP({
        medicalDay: (0, Du.oJ)(ht)
      }));
    });
  }
  ngOnInit() {
    this.getUserContext().pipe((0, Kn.t)(this)).subscribe(s => {
      this.modelSubject.next({
        userInfo: s,
        modules: []
      }), this.telephonogramRouteIsAvailable = !0;
    }), this.breakpointObserver.observe(Du.ok).pipe((0, Kn.t)(this)).subscribe(s => this.isTablet = s.matches), this.telephonogramRouteIsActive$ = this.router.events.pipe((0, ka.h)(s => s instanceof wl.m2), (0, j2.O)(new wl.m2(0, this.router.url, this.router.url)), (0, zs.U)(s => s.urlAfterRedirects.includes("/telephonogram-list")), (0, ea.x)());
  }
  onLogoClick() {}
  logout() {
    this.authService.logout(), this.userContextService.clear();
  }
  changeProfile() {
    this.keycloakChangeUserProfileService.changeUserProfile(this.authService.token);
  }
  changePassword() {
    this.keycloakChangeUserPasswordService.changeUserPassword(this.authService.token);
  }
  getUserContext() {
    return this.userContextService.getUserContext();
  }
});
