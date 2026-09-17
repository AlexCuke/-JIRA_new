// Exact compiled component metadata; references belong to modules/15513.js
({
  type: Ty,
  selectors: [["referral-number-cell"]],
  inputs: {
    data: "data"
  },
  standalone: !0,
  features: [e.jDz],
  decls: 3,
  vars: 7,
  consts: [[1, "referral-number-cell"], ["positions", "top-left", 1, "referral-number-cell__value", 3, "canOpen", "luTooltip"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "span", 1), e._uU(2), e.qZA()()), 2 & o && (e.xp6(1), e.ekj("referral-number-cell__value--failed", D.hasFailReason)("referral-number-cell__value--overdue", D.highlightOverdue), e.Q6J("canOpen", D.hasFailReason)("luTooltip", D.failReasonTooltip), e.xp6(1), e.hij(" ", D.referralNumber, " "));
  },
  dependencies: [vo.ez, bc.i, bc.$],
  styles: [".referral-number-cell[_ngcontent-%COMP%]{font-size:13px;min-width:0}.referral-number-cell__value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;max-width:100%}.referral-number-cell__value--failed[_ngcontent-%COMP%], .referral-number-cell__value--overdue[_ngcontent-%COMP%]{color:#e04b37}.referral-number-cell__value--failed[_ngcontent-%COMP%]{cursor:default}"]
});
