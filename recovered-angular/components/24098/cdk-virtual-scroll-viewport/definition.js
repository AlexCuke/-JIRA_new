// Exact compiled component metadata; references belong to modules/24098.js
({
  type: Et,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function (Me, Ke) {
    if (1 & Me && e.Gf(J, 7), 2 & Me) {
      let Ze;
      e.iGM(Ze = e.CRH()) && (Ke._contentWrapper = Ze.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function (Me, Ke) {
    2 & Me && e.ekj("cdk-virtual-scroll-orientation-horizontal", "horizontal" === Ke.orientation)("cdk-virtual-scroll-orientation-vertical", "horizontal" !== Ke.orientation);
  },
  inputs: {
    orientation: "orientation",
    appendOnly: "appendOnly"
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  standalone: !0,
  features: [e._Bn([{
    provide: be,
    useFactory: (Ue, Me) => Ue || Me,
    deps: [[new e.FiY(), new e.tBr(Se)], Et]
  }]), e.qOj, e.jDz],
  ngContentSelectors: fe,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function (Me, Ke) {
    1 & Me && (e.F$t(), e.TgZ(0, "div", 0, 1), e.Hsn(2), e.qZA(), e._UZ(3, "div", 2)), 2 & Me && (e.xp6(3), e.Udp("width", Ke._totalContentWidth)("height", Ke._totalContentHeight));
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
  encapsulation: 2,
  changeDetection: 0
});
