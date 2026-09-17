// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-table-settings-menu"]],
  inputs: {
    staticColumns: "staticColumns",
    dynamicColumns: "dynamicColumns"
  },
  outputs: {
    listChanges: "listChanges"
  },
  decls: 5,
  vars: 3,
  consts: [[1, "column-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["hideOptions", ""], ["class", "column-box", 4, "ngIf"], [1, "column-box"], [1, "column", "column-static"], [1, "column-title", "column-title--static"], [1, "column-title-text", 3, "innerHtml"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkDropList", "", 1, "column-list", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "column-box column-box--drag", 3, "mouseenter", "mouseleave", 4, "ngIf"], ["cdkDrag", "", 1, "column-box", "column-box--drag", 3, "mouseenter", "mouseleave"], [1, "column", "column-drag"], ["cdkDragHandle", "", 1, "drag-button"], ["icon", "drag-and-drop", 1, "drop-icon", 3, "ngClass", "size"], [1, "column-title"], [1, "column-text", 3, "ngClass"], [1, "column-title-text", 3, "innerHTML"], ["class", "column-icon-section", 4, "ngIf"], [1, "column-icon-section"], ["class", "visible-icon visible-icon--show", "icon", "eye", 3, "size", "click", 4, "ngIf"], ["class", "visible-icon visible-icon--hide", "icon", "eye_off", 3, "size", "click", 4, "ngIf"], ["icon", "eye", 1, "visible-icon", "visible-icon--show", 3, "size", "click"], ["icon", "eye_off", 1, "visible-icon", "visible-icon--hide", 3, "size", "click"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0), t.YNc(1, Hn, 2, 1, "ng-container", 1), t.qZA(), t.YNc(2, Qe, 3, 2, "ng-container", 2), t.YNc(3, Ce, 1, 1, "ng-template", null, 3, t.W1O)), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.staticColumns)("ngForTrackBy", De.trackByIndex), t.xp6(1), t.Q6J("ngIf", De.dynamicColumns.length));
  },
  dependencies: [b.mk, b.sg, b.O5, b.tP, Rn, us, L.q, Ei],
  styles: [".column[_ngcontent-%COMP%]{width:100%;padding:0 calc(var(--lu-base-gutter) * 2) 0 calc(var(--lu-base-gutter) * 3)}.column-drag[_ngcontent-%COMP%]{position:relative;padding:0 calc(var(--lu-base-gutter) * 2) 0 calc(var(--lu-base-gutter) * 3);width:100%}.column-box[_ngcontent-%COMP%]{background-color:var(--lu-white);display:flex;align-items:center}.drag-button[_ngcontent-%COMP%]{position:absolute;left:0;bottom:var(--lu-base-gutter);width:calc(var(--lu-base-gutter) * 5);height:calc(var(--lu-base-gutter) * 3)}.column-title[_ngcontent-%COMP%]{height:calc(var(--lu-base-gutter) * 4);display:flex;justify-content:space-between;align-items:center;width:100%;border-bottom:1px solid var(--lu-black-5);padding:calc(var(--lu-base-gutter) * 2.4) 0}.column-title-text[_ngcontent-%COMP%]{font-size:calc(var(--lu-base-gutter) * 1.875);line-height:calc(var(--lu-base-gutter) * 2.75);font-weight:400;font-family:system-ui,sans-serif}.column-icon-section[_ngcontent-%COMP%]{width:calc(var(--lu-base-gutter) * 4);display:flex;justify-content:space-around}.drop-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-50)}.drop-icon--display[_ngcontent-%COMP%]{cursor:move;display:block}.drop-icon--hide[_ngcontent-%COMP%]{display:none}.visible-icon[_ngcontent-%COMP%]{cursor:pointer}.visible-icon--show[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.visible-icon--hide[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20)}.column-text--hide[_ngcontent-%COMP%]{color:var(--lu-black-30)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],
  changeDetection: 0
});
