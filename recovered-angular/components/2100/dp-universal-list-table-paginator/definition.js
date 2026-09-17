// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-table-paginator"]],
  inputs: {
    viewData: "viewData"
  },
  outputs: {
    goToPage: "goToPage"
  },
  decls: 7,
  vars: 7,
  consts: [[1, "paginator"], [1, "nav", "prev", 3, "click"], ["icon", "chevron-left", 3, "size"], [1, "pages"], [4, "ngFor", "ngForOf"], [1, "nav", "next", 3, "click"], ["icon", "chevron-right", 3, "size"], ["class", "ellipsis", 4, "ngIf"], ["class", "page", 3, "active", "click", 4, "ngIf"], [1, "ellipsis"], [1, "page", 3, "click"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0)(1, "div", 1), t.NdJ("click", function () {
      return De.navigateToPage("prev");
    }), t._UZ(2, "lu-svg-icon", 2), t.qZA(), t.TgZ(3, "div", 3), t.YNc(4, kc, 3, 2, "ng-container", 4), t.qZA(), t.TgZ(5, "div", 5), t.NdJ("click", function () {
      return De.navigateToPage("next");
    }), t._UZ(6, "lu-svg-icon", 6), t.qZA()()), 2 & z && (t.xp6(1), t.ekj("disabled", De.isPrevDisabled), t.xp6(1), t.Q6J("size", 24), t.xp6(2), t.Q6J("ngForOf", De.items), t.xp6(1), t.ekj("disabled", De.isNextDisabled), t.xp6(1), t.Q6J("size", 24));
  },
  dependencies: [b.sg, b.O5, L.q],
  styles: [".paginator[_ngcontent-%COMP%]{display:flex;align-items:center}.paginator[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:8px}.pages[_ngcontent-%COMP%]{display:flex;align-items:center}.pages[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:8px}.page[_ngcontent-%COMP%], .ellipsis[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--lu-base-gutter) * 5);height:calc(var(--lu-base-gutter) * 5);border-radius:9999px;-webkit-user-select:none;user-select:none}.page[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]{cursor:pointer}.ellipsis[_ngcontent-%COMP%], .nav.disabled[_ngcontent-%COMP%]{cursor:default}.page[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]:not(.disabled){color:var(--lu-primary);--lu-svg-icon-color: var(--lu-primary)}.page[_ngcontent-%COMP%]:hover{background:var(--us-table-row-hover-color, var(--lu-teal-10))}.nav[_ngcontent-%COMP%]:not(.disabled):hover{background:var(--us-table-row-hover-color, var(--lu-teal-10))}.ellipsis[_ngcontent-%COMP%]:hover{background:transparent}.nav.disabled[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-20);background:transparent;pointer-events:none}.page.active[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:2px}"],
  changeDetection: 0
});
