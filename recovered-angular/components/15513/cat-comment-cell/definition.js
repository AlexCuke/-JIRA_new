// Exact compiled component metadata; references belong to modules/15513.js
({
  type: My,
  selectors: [["cat-comment-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 2,
  vars: 2,
  consts: [[1, "comment-cell"], ["class", "comment-cell__item", 3, "luTooltip", "canOpen", "positions", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "comment-cell__item", 3, "luTooltip", "canOpen", "positions"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0), e.YNc(1, o5, 2, 4, "span", 1), e.qZA()), 2 & o && (e.xp6(1), e.Q6J("ngForOf", D.commentItems)("ngForTrackBy", D.trackByKey));
  },
  dependencies: [vo.ez, vo.sg, bc.i, bc.$],
  styles: [".comment-cell[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:12px}.comment-cell__item[_ngcontent-%COMP%]{display:block;width:100%;min-height:20px;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]
});
