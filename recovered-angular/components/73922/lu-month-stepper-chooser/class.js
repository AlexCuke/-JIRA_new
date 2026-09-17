// Extracted class; external identifiers resolve in modules/73922.js.
(class Kt {
  constructor(Pn) {
    this.locale = Pn, Pn.setLocale("ru-RU");
  }
  static forRoot(Pn = gi) {
    return {
      ngModule: Kt,
      providers: [{
        provide: Ws.nQ,
        useValue: Pn.modalConfig || gi.modalConfig
      }, {
        provide: vt.zs,
        useValue: Pn.assetsPath || gi.assetsPath
      }, {
        provide: Ws.XA,
        useValue: Pn.messageConfig || gi.messageConfig
      }, {
        provide: vt.Wt,
        useValue: Pn.buttonConfig || gi.buttonConfig
      }, {
        provide: vt.Ic,
        useValue: Pn.tooltipConfig || gi.tooltipConfig
      }, (0, e.O4)("ru-RU", jo.aw), (0, e.O4)("en-US", jo.Ll), (0, e.O4)("de-DE", jo.Ms)]
    };
  }
});
