// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-context-menu-item-with-dropdown"]],
  inputs: {
    itemText: "itemText",
    iconName: "iconName",
    isShowArrowIcon: "isShowArrowIcon",
    type: "type",
    dropdown: "dropdown"
  },
  outputs: {
    data: "data"
  },
  decls: 1,
  vars: 1,
  consts: [["dpDataTestRole", "contextMenuItem", "luDropdownOrigin", "", 3, "itemText", "iconName", "isShowArrowIcon", "type", "click", 4, "ngIf"], ["dpDataTestRole", "contextMenuItem", "luDropdownOrigin", "", 3, "itemText", "iconName", "isShowArrowIcon", "type", "click"], ["origin", "luDropdownOrigin"], [3, "origin", "closeIfInnerClick", "positions", "borderOffset", "content"], ["dropdownCmp", ""], ["content", ""], [1, "container"], ["class", "content", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "content", 3, "ngClass", "click"], ["lu-text", ""], ["lu-text", "", "color", "muted", "size", "normal", 4, "ngIf"], ["lu-text", "", "color", "muted", "size", "normal"]],
  template: function (z, De) {
    1 & z && t.YNc(0, _c, 6, 9, "dp-universal-list-context-menu-item", 0), 2 & z && t.Q6J("ngIf", De.dropdown);
  },
  dependencies: [b.mk, b.sg, b.O5, C.$, v.n, I.NZ, G.U, va],
  styles: ["lu-focus-control>.lu-overlay-content{box-shadow:0 0 calc(var(--lu-base-gutter) / 8) #00000047,0 calc(var(--lu-base-gutter) / 2) var(--lu-base-gutter) #00000014,0 calc(var(--lu-base-gutter) * 1.5) calc(var(--lu-base-gutter) * 3) #0000001f;border-radius:calc(var(--lu-base-gutter) / 2);border-color:transparent!important}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:calc(var(--lu-base-gutter) * 1.125) 0 var(--lu-base-gutter)}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);cursor:pointer}.content--disabled[_ngcontent-%COMP%]{opacity:.4}.content[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}"],
  changeDetection: 0
});
