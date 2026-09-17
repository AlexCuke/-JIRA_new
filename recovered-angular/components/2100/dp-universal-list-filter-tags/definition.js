// Exact compiled component metadata; references belong to modules/2100.js
({
  type: xe,
  selectors: [["dp-universal-list-filter-tags"]],
  inputs: {
    viewData: "viewData"
  },
  outputs: {
    updateFilter: "updateFilter"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "filter-tags-container", "__tags"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-tag", "__tag"], ["lu-text", "", 1, "__text-title", 3, "color"], ["lu-text", "", 1, "__text"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "close-icon", 3, "size"]],
  template: function (z, De) {
    1 & z && (t.TgZ(0, "div", 0), t.YNc(1, Xr, 8, 4, "ng-container", 1), t.qZA()), 2 & z && (t.xp6(1), t.Q6J("ngForOf", De.viewData)("ngForTrackBy", De.identify));
  },
  dependencies: [b.sg, I.NZ, L.q, f.k],
  styles: [".filter-tags-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.filter-tag[_ngcontent-%COMP%]{background:var(--lu-yellow-60);border-radius:var(--lu-base-gutter);display:flex;align-items:center;height:calc(var(--lu-base-gutter) * 4)}.__tag[_ngcontent-%COMP%]{margin-top:var(--lu-base-gutter);margin-right:var(--lu-base-gutter)}.__text[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * .5)}.__text-title[_ngcontent-%COMP%]{margin-left:calc(var(--lu-base-gutter) * 1.5)}.close-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-100);opacity:.3}.close-icon[_ngcontent-%COMP%]:hover{opacity:.5}.__tags[_ngcontent-%COMP%]{margin:calc(var(--lu-base-gutter) * -1) calc(var(--lu-base-gutter) * 1.5) 0}"],
  changeDetection: 0
});
