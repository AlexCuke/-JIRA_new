// Exact compiled component metadata; references belong to modules/15903.js
({
  type: we,
  selectors: [["dp-text-cropping"]],
  ngContentSelectors: fd,
  decls: 3,
  vars: 6,
  consts: [["dpTextCropping", "", 3, "maxLines", "luTooltip", "wordBreakAll", "positions", "delay", "canOpen"], ["croppedElement", "dpTextCropping"]],
  template: function (ve, yt) {
    if (1 & ve && (t.F$t(), t.TgZ(0, "div", 0, 1), t.Hsn(2), t.qZA()), 2 & ve) {
      const An = t.MAs(1);
      t.Q6J("maxLines", 1)("luTooltip", An.text)("wordBreakAll", !0)("positions", "top-center")("delay", 500)("canOpen", An.isCropped);
    }
  },
  dependencies: [ki.ZC, N.$],
  encapsulation: 2,
  changeDetection: 0
});
