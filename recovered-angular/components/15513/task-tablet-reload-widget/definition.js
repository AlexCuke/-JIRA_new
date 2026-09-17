// Exact compiled component metadata; references belong to modules/15513.js
({
  type: c0,
  selectors: [["task-tablet-reload-widget"]],
  standalone: !0,
  features: [e.jDz],
  decls: 2,
  vars: 1,
  consts: [[1, "reload__container", 3, "click"], ["icon", "reload", 3, "size"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0), e.NdJ("click", function () {
      return D.refreshData();
    }), e._UZ(1, "lu-svg-icon", 1), e.qZA()), 2 & o && (e.xp6(1), e.Q6J("size", 24));
  },
  dependencies: [Xl.W1, Qc.o, Oa.h, Oa.q, vo.ez],
  styles: [".reload__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;--lu-svg-icon-color: #38a1d6}.reload__container[_ngcontent-%COMP%]:hover{cursor:pointer}.icons-actions[_ngcontent-%COMP%]{--lu-svg-icon-width: 24px;--lu-svg-icon-height: 24px;transform:scale(1.2)}"]
});
