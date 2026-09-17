// Exact compiled component metadata; references belong to modules/15513.js
({
  type: kC,
  selectors: [["sm-image-viewer-modal"]],
  viewQuery: function (o, D) {
    if (1 & o && e.Gf(D3, 5), 2 & o) {
      let Z;
      e.iGM(Z = e.CRH()) && (D.imageViewer = Z.first);
    }
  },
  hostBindings: function (o, D) {
    1 & o && e.NdJ("keyup.esc", function () {
      return D.onKeyUp();
    }, !1, e.Jf7);
  },
  standalone: !0,
  features: [e.jDz],
  decls: 24,
  vars: 13,
  consts: [[1, "image-panel"], [1, "image-panel__header"], [1, "image-panel__header__action-panel"], ["luTooltip", "Предыдущее изображение", "lu-button-icon-outer", "", 3, "disabled", "click"], ["icon", "chevron-left", 3, "size"], ["luTooltip", "Следующее изображение", "lu-button-icon-outer", "", 3, "disabled", "click"], ["icon", "chevron-right", 3, "size"], ["luTooltip", "Повернуть Против часовой стрелки", "lu-button-icon-outer", "", 3, "click"], ["icon", "left_rotation", 3, "size"], ["luTooltip", "Повернуть по часовой стрелке", "lu-button-icon-outer", "", 3, "click"], ["icon", "right_rotation", 3, "size"], ["luTooltip", "Сбросить", "lu-button-icon-outer", "", 3, "click"], ["icon", "recent", 3, "size"], ["luTooltip", "На весь экран", "lu-button-icon-outer", "", 3, "click"], ["icon", "expand", 3, "size"], ["luTooltip", "Отдалить", "lu-button-icon-outer", "", 3, "click"], ["icon", "zoom-out", 3, "size"], ["luTooltip", "Приблизить", "lu-button-icon-outer", "", 3, "click"], ["icon", "zoom-in", 3, "size"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 3, "size"], ["class", "image-panel__content", 4, "ngIf"], [1, "image-panel__content"], [3, "index", "src", "indexChange"], ["imageViewer", ""]],
  template: function (o, D) {
    1 & o && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), e._uU(3), e.qZA(), e.TgZ(4, "div", 2)(5, "button", 3), e.NdJ("click", function () {
      return D.prevImage();
    }), e._UZ(6, "lu-svg-icon", 4), e.qZA(), e.TgZ(7, "button", 5), e.NdJ("click", function () {
      return D.nextImage();
    }), e._UZ(8, "lu-svg-icon", 6), e.qZA(), e.TgZ(9, "button", 7), e.NdJ("click", function () {
      return D.leftRotate();
    }), e._UZ(10, "lu-svg-icon", 8), e.qZA(), e.TgZ(11, "button", 9), e.NdJ("click", function () {
      return D.rightRotate();
    }), e._UZ(12, "lu-svg-icon", 10), e.qZA(), e.TgZ(13, "button", 11), e.NdJ("click", function () {
      return D.reset();
    }), e._UZ(14, "lu-svg-icon", 12), e.qZA(), e.TgZ(15, "button", 13), e.NdJ("click", function () {
      return D.fullScreen();
    }), e._UZ(16, "lu-svg-icon", 14), e.qZA(), e.TgZ(17, "button", 15), e.NdJ("click", function () {
      return D.zoomOut();
    }), e._UZ(18, "lu-svg-icon", 16), e.qZA(), e.TgZ(19, "button", 17), e.NdJ("click", function () {
      return D.zoomIn();
    }), e._UZ(20, "lu-svg-icon", 18), e.qZA()(), e.TgZ(21, "button", 19), e.NdJ("click", function () {
      return D.modalRef.close();
    }), e._UZ(22, "lu-svg-icon", 20), e.qZA()(), e.YNc(23, P3, 3, 2, "div", 21), e.qZA()), 2 & o && (e.xp6(3), e.Oqu(D.imageName), e.xp6(2), e.Q6J("disabled", D.isFirstImage), e.xp6(1), e.Q6J("size", 24), e.xp6(1), e.Q6J("disabled", D.isLastImage), e.xp6(1), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 24), e.xp6(2), e.Q6J("size", 16), e.xp6(1), e.Q6J("ngIf", !(null == D.imagesUrls || !D.imagesUrls.length)));
  },
  dependencies: [vo.ez, vo.O5, Ds, Hr, Qc.o, Qc.k, Oa.h, Oa.q, bc.i, bc.$],
  styles: [".image-panel[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column}.image-panel__header[_ngcontent-%COMP%]{width:100%;height:50px;display:flex;flex-direction:row;justify-content:space-between;padding:0 20px;align-items:center;border-bottom:1px solid rgb(170,169,169);gap:10px}.image-panel__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.image-panel__header__action-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1 1 60%;gap:10px;height:50px}.image-panel__content[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px)}.image-panel__content[_ngcontent-%COMP%]   ngx-image-viewer[_ngcontent-%COMP%]{width:100%;height:100%}.image-panel__content[_ngcontent-%COMP%]     .nav-button-container{display:none}"]
});
