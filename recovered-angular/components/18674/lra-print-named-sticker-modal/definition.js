// Exact compiled component metadata; references belong to modules/18674.js
({
  type: qe,
  selectors: [["lra-print-named-sticker-modal"]],
  standalone: !0,
  features: [t.jDz],
  decls: 20,
  vars: 8,
  consts: [[1, "print-sticker"], [1, "print-named-sticker-modal-header"], ["lu-button-icon", "", 3, "click"], ["icon", "close", 1, "icon-close", 3, "size"], ["class", "barcode-wrapper", 4, "ngIf", "ngIfElse"], ["noNumber", ""], [1, "data-content"], [1, "data-text-size"], [1, "print-sticker__action"], ["type", "button", "lu-button-raised", "", 1, "print-sticker__action__button", 3, "disabled", "click"], ["icon", "print", 3, "size"], [1, "barcode-wrapper"], [3, "bc-format", "bc-value", "bc-width", "bc-height", "bc-display-value"], [1, "no-number-container"], [1, "no-number-label"]],
  template: function (q, mt) {
    if (1 & q && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "span"), t._uU(3, "Печать именной этикетки"), t.qZA(), t.TgZ(4, "button", 2), t.NdJ("click", function () {
      return mt.modalRef.close();
    }), t._UZ(5, "lu-svg-icon", 3), t.qZA()(), t.YNc(6, G, 2, 5, "div", 4), t.YNc(7, te, 3, 0, "ng-template", null, 5, t.W1O), t.TgZ(9, "div", 6)(10, "span", 7), t._uU(11), t.qZA(), t.TgZ(12, "span", 7), t._uU(13), t.qZA(), t.TgZ(14, "span", 7), t._uU(15), t.qZA()(), t.TgZ(16, "div", 8)(17, "button", 9), t.NdJ("click", function () {
      return mt.printLabel();
    }), t._UZ(18, "lu-svg-icon", 10), t._uU(19, " Распечатать "), t.qZA()()()), 2 & q) {
      const ut = t.MAs(8);
      t.xp6(5), t.Q6J("size", 24), t.xp6(1), t.Q6J("ngIf", mt.probeNumberForBarcode)("ngIfElse", ut), t.xp6(5), t.Oqu(mt.probeNumberForBarcode), t.xp6(2), t.Oqu(null == mt.indexData || null == mt.indexData.combinedCareCase ? null : mt.indexData.combinedCareCase.fullName), t.xp6(2), t.hij(" ", null == mt.indexData || null == mt.indexData.hospitalCard ? null : mt.indexData.hospitalCard.number, ""), t.xp6(2), t.Q6J("disabled", mt.isPrinting), t.xp6(1), t.Q6J("size", 24);
    }
  },
  dependencies: [B.ez, B.O5, y.t, y.y, j.W1, j.mc, W.h, W.q, F.o, F.k],
  styles: [".print-sticker[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:start}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:281px;max-width:100%;min-height:144px;margin-top:-12px;margin-bottom:8px;overflow:hidden}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]{display:block}.print-sticker[_ngcontent-%COMP%]   .barcode-wrapper[_ngcontent-%COMP%]   ngx-barcode6[_ngcontent-%COMP%]     svg{max-width:281px;height:auto}.print-sticker__action[_ngcontent-%COMP%]{justify-content:end;display:flex;flex-direction:row;width:100%}.print-sticker__action__button[_ngcontent-%COMP%]{width:158px!important;min-width:158px!important;max-width:158px!important;height:40px!important;min-height:40px!important;max-height:40px!important;margin:32px 24px 24px;padding:0!important;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box}.print-sticker__action__button[_ngcontent-%COMP%]     .lu-button-wrapper, .print-sticker__action__button[_ngcontent-%COMP%]     .lu-button-badge{width:158px!important;min-width:158px!important;max-width:158px!important;height:40px!important;min-height:40px!important;max-height:40px!important;box-sizing:border-box}.print-sticker__action__button[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{margin-left:-14px}.print-named-sticker-modal-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:28px;width:calc(100% - 48px);margin:24px 24px 28px;font-size:20px;font-weight:600}.icon-close[_ngcontent-%COMP%]{--lu-svg-icon-color: #CCCCCC;padding-left:15px}.no-number-container[_ngcontent-%COMP%]{width:281px;height:144px;display:flex;flex-direction:row;align-items:center;justify-content:center}.no-number-container[_ngcontent-%COMP%]   .no-number-label[_ngcontent-%COMP%]{place-content:center center;align-items:center;font-style:italic;color:#6b6b6b;font-size:1.1em}.data-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}.data-content[_ngcontent-%COMP%]   .data-text-size[_ngcontent-%COMP%]{font-size:20px;font-weight:400;min-height:28px;text-align:center}"],
  changeDetection: 0
});
