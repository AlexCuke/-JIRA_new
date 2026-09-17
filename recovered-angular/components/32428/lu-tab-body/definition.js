// Exact compiled component metadata; references belong to modules/32428.js
({
  type: Et,
  selectors: [["lu-tab-body"]],
  hostVars: 1,
  hostBindings: function (Me, Ke) {
    2 & Me && t.uIk("data-lu-visible", Ke.isVisible);
  },
  inputs: {
    content: "content",
    index: "index",
    selectedIndex: "selectedIndex",
    withPortal: "withPortal"
  },
  features: [t._Bn([{
    provide: Rt,
    useExisting: Et
  }]), t.TTD],
  ngContentSelectors: ke,
  decls: 2,
  vars: 2,
  consts: [["class", "lu-tab-body-content", 4, "ngIf"], [1, "lu-tab-body-content"], ["luTabBodyPortal", ""], [4, "polymorpheusOutlet"]],
  template: function (Me, Ke) {
    1 & Me && (t.F$t(), t.YNc(0, ye, 2, 1, "div", 0), t.YNc(1, ae, 2, 0, "div", 0)), 2 & Me && (t.Q6J("ngIf", Ke.withPortal), t.xp6(1), t.Q6J("ngIf", !Ke.withPortal));
  },
  dependencies: [I.O5, O.Li, We],
  styles: ["[_nghost-%COMP%]{position:absolute;display:flex;top:0;left:0;right:0;bottom:0;overflow:hidden}[data-lu-visible=true][_nghost-%COMP%]{position:relative;z-index:1;overflow-x:hidden;overflow-y:auto;flex-grow:1}.lu-tab-body-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:auto;width:100%}"],
  data: {
    animation: [(0, d.X$)("bodyAnimation", [(0, d.SB)("void", (0, d.oB)({
      transform: "none"
    })), (0, d.SB)(N.Rd.SHOW_FROM_LEFT, (0, d.oB)({
      transform: "translateX(0%)"
    })), (0, d.SB)(N.Rd.SHOW_FROM_RIGHT, (0, d.oB)({
      transform: "translateX(0%)"
    })), (0, d.SB)(N.Rd.HIDE_TO_LEFT, (0, d.oB)({
      transform: "translateX(-100%)"
    })), (0, d.SB)(N.Rd.HIDE_TO_RIGHT, (0, d.oB)({
      transform: "translateX(100%)"
    })), (0, d.eR)(`${N.Rd.HIDE_TO_RIGHT} =>  ${N.Rd.SHOW_FROM_LEFT},\n                                ${N.Rd.HIDE_TO_LEFT} =>  ${N.Rd.SHOW_FROM_LEFT}`, [(0, d.oB)({
      transform: "translateX(-100%)"
    }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")]), (0, d.eR)(`${N.Rd.HIDE_TO_RIGHT} =>  ${N.Rd.SHOW_FROM_RIGHT},\n                                ${N.Rd.HIDE_TO_LEFT} =>  ${N.Rd.SHOW_FROM_RIGHT}`, [(0, d.oB)({
      transform: "translateX(100%)"
    }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")]), (0, d.eR)("* => " + N.Rd.HIDE_TO_RIGHT + ", * => " + N.Rd.HIDE_TO_LEFT, [(0, d.oB)({
      transform: "translateX(0%)"
    }), (0, d.jt)("0.3s cubic-bezier(0.35, 0, 0.25, 1)")])])]
  },
  changeDetection: 0
});
