// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-toolbox"]],
  inputs: {
    visible: "visible",
    buttons: "buttons",
    element: "element",
    contextMenuMaxWidth: "contextMenuMaxWidth"
  },
  outputs: {
    data: "data"
  },
  features: [t.TTD],
  decls: 6,
  vars: 4,
  consts: [["luDropdownOrigin", "", 4, "ngIf"], [3, "contextMenuMaxWidth"], ["dropdownCmp", ""], [4, "ngIf", "ngIfElse"], ["content", ""], ["luDropdownOrigin", ""], ["origin", "luDropdownOrigin"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "luTooltip", "canOpen", "positions", "iconName", "text", "type", "click", 4, "ngIf"], [3, "luTooltip", "canOpen", "positions", "iconName", "text", "type", "click"], [4, "ngFor", "ngForOf"], [3, "itemText", "iconName", "type", "data"], [4, "ngIf"], [1, "container"], ["class", "content", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content", 3, "ngClass", "click"], ["lu-text", ""], ["lu-text", "", "color", "muted", "size", "normal", 4, "ngIf"], ["lu-text", "", "color", "muted", "size", "normal"]],
  template: function (z, De) {
    if (1 & z && (t.YNc(0, Il, 3, 2, "dp-table-row-control-panel", 0), t.TgZ(1, "dp-context-menu", 1, 2), t.YNc(3, Wl, 2, 1, "ng-container", 3), t.YNc(4, nu, 1, 1, "ng-template", null, 4, t.W1O), t.qZA()), 2 & z) {
      const rt = t.MAs(2),
        Cn = t.MAs(5);
      t.Q6J("ngIf", De.visible || (null == rt.dropdown ? null : rt.dropdown.isOpened)), t.xp6(1), t.Q6J("contextMenuMaxWidth", De.contextMenuMaxWidth), t.xp6(2), t.Q6J("ngIf", De.childButtons.length > 0)("ngIfElse", Cn);
    }
  },
  dependencies: [E.$, v.n, b.mk, b.sg, b.O5, j.GI, j.qX, j.uh, j.LC, j.Xx],
  styles: [".hidden[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 1.125) 0 var(--lu-base-gutter)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);cursor:pointer}.content--disabled[_ngcontent-%COMP%]{opacity:.4}.content[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}"],
  changeDetection: 0
});
