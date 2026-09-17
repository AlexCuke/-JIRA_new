// Extracted class; external identifiers resolve in modules/3279.js.
(class Q {
  constructor(re) {}
  static forRoot(re, Ce) {
    return {
      ngModule: Q,
      providers: [fl, Zo && Ce?.enableTracing ? Rl().ɵproviders : [], {
        provide: Ma,
        multi: !0,
        useValue: re
      }, {
        provide: pa,
        useFactory: si,
        deps: [[Ja, new t.FiY(), new t.tp0()]]
      }, {
        provide: rc,
        useValue: Ce || {}
      }, Ce?.useHash ? {
        provide: f.S$,
        useClass: f.Do
      } : {
        provide: f.S$,
        useClass: f.b0
      }, {
        provide: Tl,
        useFactory: () => {
          const Q = (0, t.f3M)(f.EM),
            se = (0, t.f3M)(t.R0b),
            re = (0, t.f3M)(rc),
            Ce = (0, t.f3M)(sl),
            Be = (0, t.f3M)(fr);
          return re.scrollOffset && Q.setOffset(re.scrollOffset), new $c(Be, Ce, Q, se, re);
        }
      }, Ce?.preloadingStrategy ? _t(Ce.preloadingStrategy).ɵproviders : [], {
        provide: t.PXZ,
        multi: !0,
        useFactory: Bs
      }, Ce?.initialNavigation ? Oo(Ce) : [], [{
        provide: xs,
        useFactory: ac
      }, {
        provide: t.tb,
        multi: !0,
        useExisting: xs
      }]]
    };
  }
  static forChild(re) {
    return {
      ngModule: Q,
      providers: [{
        provide: Ma,
        multi: !0,
        useValue: re
      }]
    };
  }
});
