// Exact compiled component metadata; references belong to modules/15513.js
({
  type: G_,
  selectors: [["lu-file-upload"]],
  viewQuery: function (s, o) {
    if (1 & s && (e.Gf(ec.kK, 5), e.Gf(A2, 5)), 2 & s) {
      let D;
      e.iGM(D = e.CRH()) && (o.inputControl = D.first), e.iGM(D = e.CRH()) && (o.inputFile = D.first);
    }
  },
  inputs: {
    multiple: "multiple",
    compactView: "compactView",
    withPreloader: "withPreloader",
    accept: "accept",
    maxSize: "maxSize",
    files: "files",
    completedFiles: "completedFiles"
  },
  outputs: {
    inputChange: "inputChange"
  },
  features: [e._Bn([{
    provide: ec.BU,
    useExisting: I2
  }]), e.qOj],
  decls: 13,
  vars: 10,
  consts: [[1, "lu-file-upload__container", 3, "drop", "dragover", "click"], ["type", "file", "luInput", "", "luInputFile", "", 1, "lu-file-upload__input", 3, "accept", "multiple", "ngModel", "ngModelChange"], ["fileUpload", ""], ["icon", "clip", "size", "24", 1, "lu-file-upload__icon"], [1, "lu-file-upload__content"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", 4, "ngIf"], ["filesTmpl", ""], ["filesDesc", ""], [1, "lu-file-upload__title"], [3, "ngTemplateOutlet"], ["class", "lu-file-upload__file", 4, "ngFor", "ngForOf"], [1, "lu-file-upload__file"], [1, "lu-file-upload__file-title", 3, "luTooltip"], [1, "lu-file-upload__file-btn"], ["luTooltip", "Удалить", "icon", "close", "size", "16", "class", "lu-file-upload__close", 3, "click", 4, "ngIf"], ["icon", "indicator", "size", "24", "class", "lu-file-upload__preloader", 4, "ngIf"], ["luTooltip", "Удалить", "icon", "close", "size", "16", 1, "lu-file-upload__close", 3, "click"], ["icon", "indicator", "size", "24", 1, "lu-file-upload__preloader"], [1, "lu-file-upload__desc"]],
  template: function (s, o) {
    if (1 & s && (e.TgZ(0, "label", 0), e.NdJ("drop", function (Z) {
      return o.dropHandler(Z);
    })("dragover", function (Z) {
      return o.dragOverHandler(Z);
    })("click", function (Z) {
      return o.onLabelClick(Z);
    }), e.TgZ(1, "input", 1, 2), e.NdJ("ngModelChange", function (Z) {
      return o.onInputChange(Z);
    }), e.qZA(), e._UZ(3, "lu-svg-icon", 3), e.TgZ(4, "div", 4), e.YNc(5, a_, 5, 0, "ng-container", 5), e.YNc(6, S2, 1, 1, "ng-container", 6), e.qZA()(), e.YNc(7, cx, 1, 1, "ng-container", 6), e.YNc(8, ux, 1, 1, "ng-container", 6), e.YNc(9, DC, 1, 1, "ng-template", null, 7, e.W1O), e.YNc(11, jD, 2, 2, "ng-template", null, 8, e.W1O)), 2 & s) {
      const D = e.MAs(10);
      e.ekj("lu-file-upload__container_compact", o.compactView), e.xp6(1), e.Q6J("accept", o.acceptTypes)("multiple", o.multiple)("ngModel", null), e.xp6(4), e.Q6J("ngIf", o.multiple || !o.files.length)("ngIfElse", D), e.xp6(1), e.Q6J("ngIf", !o.compactView), e.xp6(1), e.Q6J("ngIf", o.compactView), e.xp6(1), e.Q6J("ngIf", o.multiple);
    }
  },
  dependencies: [vo.sg, vo.O5, vo.tP, Oa.q, pr.Fj, pr.JJ, pr.On, id.L, s_, bc.$],
  styles: ["[_nghost-%COMP%]{display:block;margin-bottom:var(--lu-base-gutter)}.lu-file-upload__container[_ngcontent-%COMP%]{border-radius:4px;border:1px dashed var(--teal-t-100, #269999);background:var(--special-background, #FFF);display:flex;padding:16px;flex-direction:column;align-items:center;gap:8px;align-self:stretch;cursor:pointer;text-align:center;min-width:350px}.lu-file-upload__container[_ngcontent-%COMP%] + .lu-file-upload__desc[_ngcontent-%COMP%]{margin:4px 0 8px}.lu-file-upload__container_compact[_ngcontent-%COMP%]{height:40px;flex-direction:row}.lu-file-upload__container[_ngcontent-%COMP%]:hover{background:var(--teal-t-10, #EBF8F8)}.lu-file-upload__container[_ngcontent-%COMP%] + .lu-file-upload__file[_ngcontent-%COMP%]{margin-top:8px}.lu-file-upload__input[_ngcontent-%COMP%]{visibility:hidden;position:absolute}.lu-file-upload__icon[_ngcontent-%COMP%]{pointer-events:none;--lu-svg-icon-color: var(--lu-teal-100)}.lu-file-upload__content[_ngcontent-%COMP%]{pointer-events:none}.lu-file-upload__title[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);color:var(--black-b-40, #999);pointer-events:none}.lu-file-upload__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--teal-t-120, #1D8585)}.lu-file-upload__desc[_ngcontent-%COMP%]{font-size:13px;line-height:20px;color:var(--black-b-40, #999);pointer-events:none}.lu-file-upload__file[_ngcontent-%COMP%]{border-radius:4px;background:var(--black-b-10, #E6E6E6);display:flex;align-items:center;justify-content:space-between;height:20px;font-size:13px;color:var(--black-b-80, #333);padding:0 0 0 8px;pointer-events:auto}.lu-file-upload__file[_ngcontent-%COMP%] + .lu-file-upload__file[_ngcontent-%COMP%]{margin-top:4px}.lu-file-upload__file-title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:inline-block;max-width:calc(100% - 28px)}.lu-file-upload__file-btn[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;justify-content:center;width:24px}.lu-file-upload__preloader[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotator 1.4s linear infinite}.lu-file-upload__close[_ngcontent-%COMP%]{--lu-svg-icon-color: var(--lu-black-54)}@keyframes _ngcontent-%COMP%_rotator{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],
  changeDetection: 0
});
