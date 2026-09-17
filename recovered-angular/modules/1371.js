// Extracted from main; webpack module 1371. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    E_: () => h,
    He: () => a,
    Hl: () => A,
    Qr: () => v,
    YN: () => M,
    dE: () => O,
    dV: () => I,
    iO: () => e,
    ni: () => b,
    qy: () => f,
    tI: () => C,
    ye: () => m
  });
  var t = i(37340);
  const e = [(0, t.oB)({
      transform: "scaleY(0.9)",
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scaleY(1)",
      opacity: 1
    }))],
    a = [(0, t.oB)({
      transform: "scaleY(1)",
      opacity: 1
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scaleY(0.9)",
      opacity: 0
    }))],
    m = [(0, t.oB)({
      transform: "scale(0.9)",
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }))],
    M = ((0, t.oB)({
      transform: "scaleY(1)",
      opacity: 1
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scaleY(0.9)",
      opacity: 0
    })), [(0, t.oB)({
      transform: "scale(0.8)",
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }))]),
    b = [(0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(0.8)",
      opacity: 0
    }))],
    A = (0, t.X$)("scaleAnimation", [(0, t.eR)(":enter", [(0, t.oB)({
      transform: "scale(0)",
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }))]), (0, t.eR)(":leave", [(0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(0)",
      opacity: 0
    }))])]),
    I = ((0, t.X$)("slideModal", [(0, t.SB)("enter", (0, t.oB)({
      transform: "translate3d(0,0,0)",
      opacity: 1
    })), (0, t.SB)("void", (0, t.oB)({
      transform: "translateY(10%) translate3d(0,0,0)",
      opacity: 0
    })), (0, t.SB)("exit", (0, t.oB)({
      transform: "translateY(10%) translate3d(0,0,0)",
      opacity: 0
    })), (0, t.eR)("* => *", (0, t.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)"))]), [(0, t.oB)({
      transform: "translateY(10%) translate3d(0,0,0)",
      opacity: 0
    }), (0, t.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "translate3d(0,0,0)",
      opacity: 1
    }))]),
    O = [(0, t.oB)({
      transform: "translate3d(0,0,0)",
      opacity: 1
    }), (0, t.jt)("250ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "translateY(10%) translate3d(0,0,0)",
      opacity: 0
    }))],
    C = ((0, t.X$)("slideOverlayAnimation", [(0, t.eR)(":enter", [(0, t.oB)({
      transform: "scale(0.9)",
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      transform: "scale(1)",
      opacity: 1
    }))])]), (0, t.X$)("preventInitialChild", [(0, t.eR)(":enter", [])])),
    v = (0, t.X$)("expandCollapse", [(0, t.eR)(":enter", [(0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }), (0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)", (0, t.oB)({
      opacity: 1,
      height: "*"
    }))], {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.eR)(":leave", [(0, t.oB)({
      opacity: 1,
      height: "*"
    }), (0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)", (0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }))], {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.SB)("true", (0, t.oB)({
      opacity: 1,
      height: "*"
    })), (0, t.SB)("false", (0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }), {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.eR)("* => true", [(0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)")]), (0, t.eR)("* => false", [(0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)")])]),
    f = (0, t.X$)("expandCollapseWidth", [(0, t.eR)(":enter", [(0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }), (0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)", (0, t.oB)({
      opacity: 1,
      height: "*"
    }))], {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.eR)(":leave", [(0, t.oB)({
      opacity: 1,
      height: "*"
    }), (0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)", (0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }))], {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.SB)("true", (0, t.oB)({
      opacity: 1,
      height: "*"
    })), (0, t.SB)("false", (0, t.oB)({
      opacity: "{{opacity}}",
      height: "{{from}}"
    }), {
      params: {
        from: 0,
        opacity: 0
      }
    }), (0, t.eR)("* => true", [(0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)")]), (0, t.eR)("* => false", [(0, t.jt)("225ms cubic-bezier(0.8,0.0,0.2,1)")])]),
    h = ((0, t.X$)("fadeAnimation", [(0, t.eR)(":enter", [(0, t.oB)({
      opacity: 0
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      opacity: 1
    }))]), (0, t.eR)(":leave", [(0, t.oB)({
      opacity: 1
    }), (0, t.jt)("120ms cubic-bezier(0.25, 0.8, 0.25, 1)", (0, t.oB)({
      opacity: 0
    }))])]), (0, t.X$)("treeNodeMotion", [(0, t.eR)(":enter", [(0, t.oB)({
      opacity: 0,
      height: 0
    }), (0, t.jt)("120ms cubic-bezier(0.645, 0.045, 0.355, 1)", (0, t.oB)({
      opacity: 1,
      height: "*"
    }))]), (0, t.eR)(":leave", [(0, t.oB)({
      opacity: 1,
      height: "*"
    }), (0, t.jt)("120ms cubic-bezier(0.645, 0.045, 0.355, 1)", (0, t.oB)({
      opacity: 0,
      height: 0
    }))])]));
});
