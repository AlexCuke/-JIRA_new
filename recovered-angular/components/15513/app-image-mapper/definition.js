// Exact compiled component metadata; references belong to modules/15513.js
({
  type: c,
  selectors: [["app-image-mapper"]],
  viewQuery: function (o, D) {
    if (1 & o && (e.Gf(ND, 5), e.Gf(M2, 5), e.Gf(g3, 5)), 2 & o) {
      let Z;
      e.iGM(Z = e.CRH()) && (D.canvasRef = Z.first), e.iGM(Z = e.CRH()) && (D.imgRef = Z.first), e.iGM(Z = e.CRH()) && (D.containerRef = Z.first);
    }
  },
  inputs: {
    src: "src",
    name: "name",
    width: "width",
    colors: "colors",
    areas: "areas",
    height: "height",
    imgWidth: "imgWidth",
    disabled: "disabled",
    selected: "selected",
    preselected: "preselected"
  },
  outputs: {
    onClick: "onClick",
    onMouseEnter: "onMouseEnter",
    onMouseLeave: "onMouseLeave",
    onMouseMove: "onMouseMove",
    onImageClick: "onImageClick",
    onImageMouseMove: "onImageMouseMove",
    onLoad: "onLoad"
  },
  standalone: !0,
  features: [e.TTD, e.jDz],
  decls: 8,
  vars: 29,
  consts: [[3, "ngStyle"], ["containerRef", ""], [3, "src", "useMap", "load", "click", "mousemove"], ["imgRef", ""], [3, "width", "height"], ["canvasRef", ""], [3, "name"], [3, "mouseenter", "mouseleave", "mousemove", "click", 4, "ngFor", "ngForOf"], [3, "mouseenter", "mouseleave", "mousemove", "click"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0, 1)(2, "img", 2, 3), e.NdJ("load", function () {
      return D.initCanvas();
    })("click", function (X) {
      return D.imageClick(X);
    })("mousemove", function (X) {
      return D.imageMouseMove(X);
    }), e.qZA(), e._UZ(4, "canvas", 4, 5), e.TgZ(6, "map", 6), e.YNc(7, T2, 1, 2, "area", 7), e.qZA()()), 2 & o && (e.Q6J("ngStyle", D.containerStyle), e.xp6(2), e.Udp("position", "absolute")("z-index", 1)("user-select", "none")("width", D.width, "px")("height", D.height, "px"), e.Q6J("src", D.src, e.LSH)("useMap", "#" + D.name), e.xp6(2), e.Udp("position", "absolute")("top", "0")("left", "0")("z-index", 2)("pointer-events", "none"), e.Q6J("width", D.canvasWidth)("height", D.canvasHeight), e.xp6(2), e.Udp("cursor", !D.disabled && D.onClick.observers.length ? "pointer" : "default"), e.Q6J("name", D.name), e.xp6(1), e.Q6J("ngForOf", D.getRenderableAreas()));
  },
  dependencies: [vo.PC, vo.sg],
  styles: ["img[_ngcontent-%COMP%]{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}"]
});
