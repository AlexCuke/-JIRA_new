// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-context-menu-item"]],
  inputs: {
    itemText: "itemText",
    iconName: "iconName",
    isShowArrowIcon: "isShowArrowIcon",
    type: "type"
  },
  outputs: {
    data: "data"
  },
  decls: 6,
  vars: 13,
  consts: [[1, "context-menu-item", 3, "ngClass", "click"], [1, "context-menu-item-content"], [1, "context-menu-item-icon", 3, "ngClass", "icon", "size"], ["lu-text", "", 1, "context-menu-item__text", "context-menu-item-text", 3, "ngClass"], ["class", "context-menu-item-icon", "icon", "chevron-right", 3, "size", 4, "ngIf"], ["icon", "chevron-right", 1, "context-menu-item-icon", 3, "size"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0), t.NdJ("click", function (Cn) {
      return De.onItemClick(Cn);
    }), t.TgZ(1, "div", 1), t._UZ(2, "lu-svg-icon", 2), t.TgZ(3, "div", 3), t._uU(4), t.qZA()(), t.YNc(5, Ds, 1, 1, "lu-svg-icon", 4), t.qZA()), 2 & z && (t.Q6J("ngClass", t.VKq(7, wa, "danger" === De.type)), t.xp6(2), t.Q6J("ngClass", t.VKq(9, Ua, "danger" === De.type))("icon", De.iconName)("size", 24), t.xp6(1), t.Q6J("ngClass", t.VKq(11, hl, "danger" === De.type)), t.xp6(1), t.hij(" ", De.itemText, " "), t.xp6(1), t.Q6J("ngIf", De.isShowArrowIcon));
  },
  dependencies: [b.mk, b.O5, L.q, I.NZ],
  styles: [".context-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5);cursor:pointer}.context-menu-item[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}.context-menu-item--danger[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-10)}.context-menu-item-content[_ngcontent-%COMP%]{display:flex}.context-menu-item__text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.context-menu-item-text[_ngcontent-%COMP%]{color:var(--lu-text-color)}.context-menu-item-text--danger[_ngcontent-%COMP%]{color:var(--lu-red-120)}.context-menu-item-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.context-menu-item-icon--danger[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-120)}"],
  changeDetection: 0
});
