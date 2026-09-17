// Exact compiled component metadata; references belong to modules/15513.js
({
  type: c,
  selectors: [["ngx-image-viewer"]],
  hostBindings: function (o, D) {
    1 & o && e.NdJ("keyup.ArrowRight", function (X) {
      return D.nextImage(X);
    }, !1, e.Jf7)("keyup.ArrowLeft", function (X) {
      return D.prevImage(X);
    }, !1, e.Jf7)("mouseover", function () {
      return D.onMouseOver();
    })("mouseleave", function () {
      return D.onMouseLeave();
    });
  },
  inputs: {
    index: "index",
    config: "config",
    src: "src"
  },
  outputs: {
    indexChange: "indexChange",
    configChange: "configChange",
    customEvent: "customEvent"
  },
  decls: 11,
  vars: 13,
  consts: [[1, "img-container", 3, "ngxToggleFullscreen", "wheel", "dragover"], ["alt", "Image not found...", 3, "src", "ngStyle", "dragstart", "load", "loadstart"], ["class", "spinner-container", 4, "ngIf"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", "id", "ngx-fs-btn", 3, "class", "click", 4, "ngIf"], ["class", "nav-button-container", 4, "ngIf"], [1, "spinner-container"], [1, "spinner"], ["type", "button", 3, "click"], ["type", "button", "id", "ngx-fs-btn", 3, "click"], [1, "nav-button-container"], ["type", "button", 3, "disabled", "click"]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0), e.NdJ("wheel", function (X) {
      return D.scrollZoom(X);
    })("dragover", function (X) {
      return D.onDragOver(X);
    }), e.TgZ(1, "img", 1), e.NdJ("dragstart", function (X) {
      return D.onDragStart(X);
    })("load", function () {
      return D.onLoad();
    })("loadstart", function () {
      return D.onLoadStart();
    }), e.qZA(), e._UZ(2, "div"), e.YNc(3, Wl, 2, 0, "div", 2), e.YNc(4, nc, 2, 4, "button", 3), e.YNc(5, Zc, 2, 4, "button", 3), e.YNc(6, Yc, 2, 4, "button", 3), e.YNc(7, nu, 2, 4, "button", 3), e.YNc(8, kl, 2, 4, "button", 4), e.YNc(9, mu, 2, 4, "button", 5), e.YNc(10, Wc, 5, 10, "div", 6), e.qZA()), 2 & o && (e.Udp("background-color", D.config.containerBackgroundColor), e.Q6J("ngxToggleFullscreen", D.fullscreen), e.xp6(1), e.Q6J("src", D.src[D.index], e.LSH)("ngStyle", D.style), e.xp6(2), e.Q6J("ngIf", D.loading), e.xp6(1), e.Q6J("ngIf", D.config.btnShow.rotateCounterClockwise), e.xp6(1), e.Q6J("ngIf", D.config.btnShow.rotateClockwise), e.xp6(1), e.Q6J("ngIf", D.config.btnShow.zoomOut), e.xp6(1), e.Q6J("ngIf", D.config.btnShow.zoomIn), e.xp6(1), e.Q6J("ngForOf", D.config.customBtns), e.xp6(1), e.Q6J("ngIf", D.config.allowFullscreen), e.xp6(1), e.Q6J("ngIf", D.src.length > 1));
  },
  dependencies: function () {
    return [vo.sg, vo.O5, vo.PC, Ar];
  },
  styles: [".img-container[_ngcontent-%COMP%] {\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      position: relative; }\n\n    .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      z-index: 2;\n      margin: 0 auto;\n      display: block;\n      max-width: 100%;\n      max-height: 100%; }\n\n    .img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      z-index: 99;\n      position: absolute;\n      right: 15px; }\n      .img-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled) {\n        cursor: pointer; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(1):not(#ngx-fs-btn) {\n      bottom: 15px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(2):not(#ngx-fs-btn) {\n      bottom: 65px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(3):not(#ngx-fs-btn) {\n      bottom: 115px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(4):not(#ngx-fs-btn) {\n      bottom: 165px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(5):not(#ngx-fs-btn) {\n      bottom: 215px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(6):not(#ngx-fs-btn) {\n      bottom: 265px; }\n\n    .img-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:nth-of-type(7):not(#ngx-fs-btn) {\n      bottom: 315px; }\n\n    #ngx-fs-btn[_ngcontent-%COMP%] {\n      top: 15px; }\n\n    button.default[_ngcontent-%COMP%] {\n      height: 40px;\n      width: 40px;\n      border: 1px solid #555;\n      border-radius: 50%;\n      background-color: white;\n      opacity: 0.7;\n      -webkit-transition: opacity 200ms;\n      transition: opacity 200ms; }\n\n    button.default[_ngcontent-%COMP%]:hover {\n      opacity: 1; }\n\n    button.default[_ngcontent-%COMP%]:disabled {\n      opacity: 0.25; }\n\n    .nav-button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n      position: relative;\n      right: 0;\n      margin: 0 10px; }\n\n    .nav-button-container[_ngcontent-%COMP%] {\n      text-align: center;\n      position: absolute;\n      z-index: 98;\n      bottom: 10px;\n      left: 0;\n      right: 0; }\n\n    .spinner-container[_ngcontent-%COMP%] {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 60px;\n      height: 60px;\n      margin: auto;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.4);\n      border-radius: 25%; }\n\n    .spinner[_ngcontent-%COMP%] {\n      border-width: 7px;\n      border-style: solid;\n      border-color: #ccc;\n      border-bottom-color: #222;\n      border-radius: 50%;\n      height: 100%;\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-animation: _ngcontent-%COMP%_rotation 2s linear infinite;\n      \n      \n      \n      animation: _ngcontent-%COMP%_rotation 2s linear infinite;\n       }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n      from {\n        -webkit-transform: rotate(0deg); }\n      to {\n        -webkit-transform: rotate(359deg); } }\n\n    @-webkit-keyframes _ngcontent-%COMP%_rotation {\n      from {\n        -webkit-transform: rotate(0deg); }\n      to {\n        -webkit-transform: rotate(359deg); } }"]
});
