// Exact compiled component metadata; references belong to modules/83431.js
({
  type: _t,
  selectors: [["hl-user-info-item"]],
  inputs: {
    user: "user",
    role: "role"
  },
  ngContentSelectors: v,
  decls: 9,
  vars: 7,
  consts: [["luDropdownButton", "", 1, "user-info-container", 3, "click"], [1, "user-info-content"], ["class", "user-info-title", 4, "ngIf"], ["class", "user-info-subtitle", 4, "ngIf"], ["icon", "chevron-down", "luButtonPostfix", "", 1, "user-info-container__suffix", "chevron-icon", 3, "size", "luChevronRotate"], ["panelClass", "user-info-dropdown", 3, "content", "positions"], ["dropdown", ""], ["content", ""], [1, "user-info-title"], [1, "user-info-subtitle"]],
  template: function (Ge, Vi) {
    if (1 & Ge) {
      const Zo = e.EpF();
      e.F$t(), e.TgZ(0, "div", 0), e.NdJ("click", function () {
        e.CHM(Zo);
        const pa = e.MAs(6);
        return e.KtG(pa.toggle());
      }), e.TgZ(1, "div", 1), e.YNc(2, Ii, 2, 1, "div", 2), e.YNc(3, yi, 2, 1, "div", 3), e.qZA(), e._UZ(4, "lu-svg-icon", 4), e.TgZ(5, "lu-dropdown", 5, 6), e.YNc(7, co, 1, 0, "ng-template", null, 7, e.W1O), e.qZA()();
    }
    if (2 & Ge) {
      const Zo = e.MAs(6),
        Zr = e.MAs(8);
      e.xp6(2), e.Q6J("ngIf", Vi.user), e.xp6(1), e.Q6J("ngIf", Vi.role), e.xp6(1), e.Q6J("size", 16)("luChevronRotate", Zo), e.xp6(1), e.Q6J("content", Zr)("positions", e.DdM(6, Jo));
    }
  },
  dependencies: [t.O5, M.q, N.$, a.c, m.G],
  styles: ["[_nghost-%COMP%]{display:flex;flex-shrink:0;cursor:default;position:relative}  .user-info-dropdown{width:516px;margin-right:-23px;margin-top:6px;--lu-overlay-border: rgba(255, 255, 255, 1)}  .user-info-dropdown .lu-overlay-content{display:flex;flex-direction:column;align-items:center;border-radius:0 0 0 4px;box-shadow:0 0 1px #00000047,0 4px 8px #00000014,0 12px 24px #0000001f}.user-info-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0}.user-info-container__suffix[_ngcontent-%COMP%]{margin-left:16px}@media (max-width: 760px){.user-info-container__suffix[_ngcontent-%COMP%]{margin-left:10px}}.user-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-shrink:0}@media (max-width: 760px){.user-info-content[_ngcontent-%COMP%]{max-width:90px}}@media (max-width: 760px){.user-info-title[_ngcontent-%COMP%], .user-info-subtitle[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}}.user-info-title[_ngcontent-%COMP%]{font-weight:600;font-size:15px;line-height:24px;color:var(--lu-white)}.user-info-subtitle[_ngcontent-%COMP%]{font-weight:600;font-size:11px;line-height:18px;color:var(--lu-blue-40)}.chevron-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-white)}"],
  changeDetection: 0
});
