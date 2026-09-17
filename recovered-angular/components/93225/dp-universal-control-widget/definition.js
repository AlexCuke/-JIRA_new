// Exact compiled component metadata; references belong to modules/93225.js
({
  type: St,
  selectors: [["dp-universal-control-widget"]],
  viewQuery: function (Pt, Ki) {
    if (1 & Pt && t.Gf(st.x6, 7), 2 & Pt) {
      let Nr;
      t.iGM(Nr = t.CRH()) && (Ki.adHost = Nr.first);
    }
  },
  inputs: {
    widget: "widget"
  },
  features: [t.qOj, t.TTD],
  decls: 3,
  vars: 1,
  consts: [[1, "widget"], ["class", "widget-template widget-template__wrapper", 4, "ngIf"], ["dpAdHost", ""], [1, "widget-template", "widget-template__wrapper"], [3, "templateData", "setTemplate", 4, "ngFor", "ngForOf"], [3, "templateData", "setTemplate"]],
  template: function (Pt, Ki) {
    1 & Pt && (t.TgZ(0, "div", 0), t.YNc(1, Pe, 2, 1, "div", 1), t.YNc(2, at, 0, 0, "ng-template", 2), t.qZA()), 2 & Pt && (t.xp6(1), t.Q6J("ngIf", null == Ki.widget.data || null == Ki.widget.data.templates ? null : Ki.widget.data.templates.length));
  },
  dependencies: [qe.sg, qe.O5, st.x6, Si],
  styles: ["[_nghost-%COMP%]{display:block}.widget-template[_ngcontent-%COMP%]{display:flex;flex-direction:row}.widget-template__wrapper[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter)}"],
  changeDetection: 0
});
