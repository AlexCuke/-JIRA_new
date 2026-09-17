// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-widget-container"]],
  inputs: {
    viewData: "viewData",
    formGroupBuilder: "formGroupBuilder",
    showLabels: "showLabels",
    labelTemplate: "labelTemplate",
    labelOrientation: "labelOrientation",
    widgetsWithoutLabels: "widgetsWithoutLabels"
  },
  outputs: {
    runAction: "runAction"
  },
  decls: 3,
  vars: 1,
  consts: [["class", "widget-container", 3, "ngClass", 4, "ngIf"], ["widgetTmpl", ""], [1, "widget-container", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widgets", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "widget-container-item", 3, "ngClass", "ngStyle"], [4, "ngIf"], [3, "widget", "runEvent", 4, "ngIf"], [3, "widget", "renderContext", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noLabelControl", ""], ["controlWithLabel", ""], [1, "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [3, "id", "widget", "formControl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["lu-text", ""], [3, "lu-label", "orientation"], ["label", ""], ["lu-text", "", 3, "ngClass"], [3, "widget", "runEvent"], [3, "widget", "renderContext"]],
  template: function (z, De) {
    1 & z && (t.YNc(0, Xs, 2, 3, "div", 0), t.YNc(1, pi, 4, 7, "ng-template", null, 1, t.W1O)), 2 & z && t.Q6J("ngIf", De.formIsReady);
  },
  dependencies: [b.mk, b.sg, b.O5, b.tP, b.PC, A.JJ, A.oH, N.z, I.NZ, y.ol, y.NP, y.T$],
  styles: [".widget-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.widget-container.vertical[_ngcontent-%COMP%]{flex-direction:column}.widget-container.horizontal[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.widget-container-item--row-label[_ngcontent-%COMP%]{display:flex;flex-direction:row}.widget-container-item--row-label[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{margin-bottom:0;padding-right:calc(var(--lu-base-gutter) * 2)}.widget-container-item--row-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{align-items:center}.widgets[_ngcontent-%COMP%]{display:flex}  .lu-content{align-items:stretch!important}.title[_ngcontent-%COMP%]{margin-bottom:var(--lu-base-gutter);cursor:default}label[_ngcontent-%COMP%]     .lu-label{padding-top:0!important}.nowrap[_ngcontent-%COMP%]{text-wrap:nowrap}"],
  changeDetection: 0
});
