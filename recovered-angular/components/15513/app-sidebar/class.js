// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor(s, o, D, Z, X) {
    this.store = s, this.router = o, this.modalService = D, this.sharedDataService = Z, this.cdr = X, this.component = null, this.tabletMenuOpen = !1, this.isTabletSearchOpen = !1, this.activeRoute = "/tasks", this.activeSidebarRoute = "/tasks";
    const oe = this.router.parseUrl(this.router.url);
    oe.fragment = null, oe.queryParams = {}, this.activeRoute = oe.toString(), this.store.select(cl.S8).pipe((0, Kn.t)(this)).subscribe(ue => {
      this.currentUser = ue, this.cdr.markForCheck();
    }), this.activeRoute = window.location.pathname, this.router.events.pipe((0, ka.h)(ue => ue instanceof wl.m2), (0, Kn.t)(this)).subscribe(ue => {
      this.activeRoute = ue.urlAfterRedirects, this.handleSidebarRouteChange(ue.urlAfterRedirects);
    });
  }
  handleSidebarRouteChange(s) {
    const o = this.resolveSidebarRoute(s);
    this.activeSidebarRoute !== o && ("/temperature-list" === this.activeSidebarRoute && (0, JA.zE)(this.store), this.resetTabletSearch()), this.activeSidebarRoute = o;
  }
  resolveSidebarRoute(s) {
    return this.sideBarItems.find(o => s.startsWith(o.route))?.route ?? null;
  }
  resetTabletSearch() {
    this.isTabletSearchOpen = !1, this.sharedDataService.setSearch(""), this.tabletSearchWidget?.resetSearch();
  }
  get sideBarItems() {
    const s = this.currentUser?.rightCodes;
    return X3.filter(o => 0 === o.permissions.length || o.permissions.some(D => s?.includes(D)));
  }
  get activeSideBarItem() {
    return this.sideBarItems.find(s => this.activeRoute?.startsWith(s.route)) || null;
  }
  openTabletMenu() {
    this.tabletMenuOpen = !0;
  }
  closeTabletMenu() {
    this.tabletMenuOpen = !1;
  }
  onTabletSearchToggle(s) {
    this.isTabletSearchOpen = s;
  }
  openConfigDietModal() {
    this.modalService.open(new Zs.X(m1), {
      panelClass: "diet-modal"
    });
  }
});
