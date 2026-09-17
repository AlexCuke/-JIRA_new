// Exact compiled component metadata; references belong to modules/31224.js
({
  type: xf,
  selectors: [["app-tablet-scanner-widget"]],
  viewQuery: function (l, g) {
    if (1 & l && a.Gf(L0, 5), 2 & l) {
      let S;
      a.iGM(S = a.CRH()) && (g.video = S.first);
    }
  },
  inputs: {
    searchWidgetParams: "searchWidgetParams",
    disabled: "disabled"
  },
  outputs: {
    patientLoaded: "patientLoaded",
    fioSearchStr: "fioSearchStr",
    closeSearch: "closeSearch",
    barcodeScanned: "barcodeScanned",
    qrCodeScanned: "qrCodeScanned"
  },
  standalone: !0,
  features: [a.jDz],
  ngContentSelectors: ["*"],
  decls: 1,
  vars: 1,
  consts: [["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "scanner-header-container"], [1, "scanner-header-container__title"], [1, "scanner-header-container__title__text"], [4, "ngIf"], [1, "scanner-header-container__title__btn"], ["icon", "close", 3, "size", "click"], ["class", "scanner-header-container__search", 4, "ngIf"], [1, "scanner-body", "scanner-body-tablet"], [1, "scanner-camera"], ["autoplay", "", "muted", "", "playsinline", ""], ["video", ""], ["noCamera", ""], [1, "mask-layer"], [1, "modal-window"], [1, "scanner-box"], [1, "corner", "top-left"], [1, "corner", "top-right"], [1, "corner", "bottom-left"], [1, "corner", "bottom-right"], [1, "scanner-header-container__search"], ["luInput", "", "luInputString", "", 3, "ngModel", "placeholder", "ngModelChange"], ["luInputWrapperAfter", "", "icon", "search", 3, "size"], [1, "no-camera-feedback"]],
  template: function (l, g) {
    1 & l && (a.F$t(), a.YNc(0, M_, 23, 4, "div", 0)), 2 & l && a.Q6J("ngIf", g.isScanning && !g.disabled);
  },
  dependencies: [e.ez, e.O5, m.u5, m.Fj, m.JJ, m.On, d.h, d.q, M.LA, M.HY, M.Fj, b.c, b.H, A.f, A.L],
  styles: [".modal-content[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000;display:flex;flex-direction:column}.scanner-body[_ngcontent-%COMP%]{position:relative;flex:1;overflow:hidden;background:#000}.scanner-camera[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;overflow:hidden}.scanner-camera[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.scanner-body-tablet[_ngcontent-%COMP%]   .scanner-camera[_ngcontent-%COMP%]{inset:204px auto auto 50%;width:320px;height:320px;transform:translate(-50%);border-radius:48px;z-index:2}.scanner-body-tablet[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;background:url(Rectangle\\ 559.890a9050d51d6ed2.png);background-size:cover;background-position:center;z-index:0}.scanner-body-tablet[_ngcontent-%COMP%]   .mask-layer[_ngcontent-%COMP%]{top:204px}.scanner-body-tablet[_ngcontent-%COMP%]   .modal-window[_ngcontent-%COMP%]{padding-top:204px}.mask-layer[_ngcontent-%COMP%]{position:absolute;top:120px;left:0;right:0;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.mask-layer[_ngcontent-%COMP%]:before{content:\"\";width:320px;height:320px;border-radius:48px;background:transparent;box-shadow:0 0 0 9999px #000000a6}.modal-window[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:center;align-items:center;padding-top:120px;pointer-events:none}.scanner-box[_ngcontent-%COMP%]{position:relative;width:320px;height:320px;border-radius:20px;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.scan-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;flex-direction:column}.scan-line[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:3px;background:#38a1d6;animation:_ngcontent-%COMP%_scanMove 2s linear infinite;box-shadow:0 0 8px #38a1d6cc}@keyframes _ngcontent-%COMP%_scanMove{0%{top:0}to{top:calc(100% - 3px)}}.scan-feedback[_ngcontent-%COMP%]{position:absolute;bottom:-40px;color:#fff;font-size:14px;text-align:center}.no-camera-feedback[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#666;text-align:center;padding:16px}.corner[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;border-color:#fff;border-style:solid;border-width:6px;pointer-events:none;box-sizing:border-box;z-index:5000}.top-left[_ngcontent-%COMP%]{top:0;left:0;border-right:none;border-bottom:none;border-radius:48px 0 0}.top-right[_ngcontent-%COMP%]{top:0;right:0;border-left:none;border-bottom:none;border-radius:0 48px 0 0}.bottom-left[_ngcontent-%COMP%]{bottom:0;left:0;border-right:none;border-top:none;border-radius:0 0 0 48px}.bottom-right[_ngcontent-%COMP%]{bottom:0;right:0;border-left:none;border-top:none;border-radius:0 0 48px}.scanner-header-container[_ngcontent-%COMP%]{padding:16px;background:#fff;display:flex;flex-direction:column;position:relative;z-index:3}.scanner-header-container__title[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.scanner-header-container__title__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.scanner-header-container__title__btn[_ngcontent-%COMP%]{--lu-svg-icon-color: #ccc}.scanner-header-container__search[_ngcontent-%COMP%]{margin-top:44px}.scanner-header-container__search[_ngcontent-%COMP%]    {--lu-svg-icon-color: #38a1d6 !important}.scanner-header-container__search[_ngcontent-%COMP%]     .lu-input-container:after{border-radius:4px!important}.scanner-header-container__search[_ngcontent-%COMP%]     lu-floated-border:after{border-radius:4px!important}.scanner-header-container__search[_ngcontent-%COMP%]     [data-lu-focused=true]{--lu-floated-border: #3DCFCF !important;border-radius:4px}"]
});
