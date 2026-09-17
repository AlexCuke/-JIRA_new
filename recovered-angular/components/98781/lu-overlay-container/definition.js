// Exact compiled component metadata; references belong to modules/98781.js
({
  type: B,
  selectors: [["lu-overlay-container"]],
  viewQuery: function (j, W) {
    if (1 & j && (m.Gf(h, 7, m.SBq), m.Gf(d.V, 5), m.Gf(L.Li, 7)), 2 & j) {
      let F;
      m.iGM(F = m.CRH()) && (W.contentContainer = F.first), m.iGM(F = m.CRH()) && (W.focusCatcher = F.first), m.iGM(F = m.CRH()) && (W.outlet = F.first);
    }
  },
  hostVars: 3,
  hostBindings: function (j, W) {
    2 & j && (m.Ikx("id", W.overlayId), m.uIk("data-lu-overlay-position", W.relativePosition)("data-lu-overlay-with-contact-border", W.contactBorder));
  },
  decls: 5,
  vars: 12,
  consts: [[3, "overlayPosition", "overlayAlign", "withPointer", "luEventSwitcher", "events"], ["data-test-role", "modal", "luFocusCatcher", "", 3, "focusHost"], [1, "lu-overlay-content", 3, "tabIndex"], ["contentContainer", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function (j, W) {
    if (1 & j && (m.TgZ(0, "lu-overlay-pointer", 0)(1, "lu-focus-control", 1)(2, "div", 2, 3), m.YNc(4, x, 2, 1, "ng-container", 4), m.qZA()()()), 2 & j) {
      let F, Le;
      m.Q6J("overlayPosition", W.relativePosition)("overlayAlign", W.overlayAlign)("withPointer", !(null == W.config || !W.config.withPointer))("luEventSwitcher", null !== (F = null == W.config || null == W.config.viewContainerRef || null == W.config.viewContainerRef.element ? null : W.config.viewContainerRef.element.nativeElement) && void 0 !== F ? F : null)("events", m.DdM(11, u)), m.xp6(1), m.Q6J("focusHost", null !== (Le = null == W.config || null == W.config.viewContainerRef || null == W.config.viewContainerRef.element ? null : W.config.viewContainerRef.element.nativeElement) && void 0 !== Le ? Le : null), m.xp6(1), m.ekj("word-break", null == W.config ? null : W.config.wordBreakAll), m.Q6J("tabIndex", -1), m.xp6(2), m.Q6J("polymorpheusOutlet", W.content)("polymorpheusOutletContext", W.getContext(W.config.context));
    }
  },
  dependencies: [L.Li, v.a, f.X, E.G, d.V],
  styles: ["[_nghost-%COMP%]{display:block;height:100%;width:100%}.lu-overlay-content[_ngcontent-%COMP%]{width:100%;height:100%;background-color:var(--lu-overlay-background);border:1px solid var(--lu-overlay-border)}.lu-overlay-content.word-break[_ngcontent-%COMP%]{word-break:break-all}[data-lu-overlay-position=top][_nghost-%COMP%]{transform-origin:bottom}[data-lu-overlay-position=top][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-bottom:none}[data-lu-overlay-position=bottom][_nghost-%COMP%]{transform-origin:top}[data-lu-overlay-position=bottom][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-top:none}[data-lu-overlay-position=left][_nghost-%COMP%]{transform-origin:right}[data-lu-overlay-position=left][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-right:none}[data-lu-overlay-position=right][_nghost-%COMP%]{transform-origin:left}[data-lu-overlay-position=right][data-lu-overlay-with-contact-border=false][_nghost-%COMP%]   .lu-overlay-content[_ngcontent-%COMP%]{border-left:none}"],
  changeDetection: 0
});
