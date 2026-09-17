// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-context-menu-item"]],
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
  template: function (ve, yt) {
    1 & ve && (t.TgZ(0, "div", 0), t.NdJ("click", function (Un) {
      return yt.onItemClick(Un);
    }), t.TgZ(1, "div", 1), t._UZ(2, "lu-svg-icon", 2), t.TgZ(3, "div", 3), t._uU(4), t.qZA()(), t.YNc(5, uo, 1, 1, "lu-svg-icon", 4), t.qZA()), 2 & ve && (t.Q6J("ngClass", t.VKq(7, ri, "danger" === yt.type)), t.xp6(2), t.Q6J("ngClass", t.VKq(9, Yt, "danger" === yt.type))("icon", yt.iconName)("size", 24), t.xp6(1), t.Q6J("ngClass", t.VKq(11, jt, "danger" === yt.type)), t.xp6(1), t.hij(" ", yt.itemText, " "), t.xp6(1), t.Q6J("ngIf", yt.isShowArrowIcon));
  },
  dependencies: [C.mk, C.O5, a.q, m.NZ],
  styles: [".context-menu-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 1.5);cursor:pointer}.context-menu-item[_ngcontent-%COMP%]:hover{background-color:var(--lu-blue-10)}.context-menu-item--danger[_ngcontent-%COMP%]:hover{background-color:var(--lu-red-10)}.context-menu-item-content[_ngcontent-%COMP%]{display:flex}.context-menu-item__text[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.context-menu-item-text[_ngcontent-%COMP%]{color:var(--lu-text-color)}.context-menu-item-text--danger[_ngcontent-%COMP%]{color:var(--lu-red-120)}.context-menu-item-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-40)}.context-menu-item-icon--danger[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-red-120)}"],
  changeDetection: 0
});
