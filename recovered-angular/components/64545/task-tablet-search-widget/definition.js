// Exact compiled component metadata; references belong to modules/64545.js
({
  type: T,
  selectors: [["task-tablet-search-widget"]],
  inputs: {
    searchFill: "searchFill"
  },
  outputs: {
    searchVisibleChange: "searchVisibleChange",
    searchSuccess: "searchSuccess",
    searchFillRes: "searchFillRes"
  },
  standalone: !0,
  features: [e.TTD, e.jDz],
  decls: 4,
  vars: 3,
  consts: [[1, "search__container"], [3, "click", 4, "ngIf"], ["class", "search__container__input_wrapper", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "search__container__input_wrapper"], ["lu-button-icon", "", "title", "Назад", 1, "search__container__input_wrapper__back_button", 3, "click"], ["icon", "left", 3, "size"], [1, "content-header__search_input_wrapper", 3, "clearButton", "afterClear"], ["luInput", "", "luInputString", "", "placeholder", "Поиск по ФИО пациента", 3, "ngModel", "ngModelChange"], ["icon", "search", "class", "search-icon", "luInputWrapperAfter", "", 3, "size", 4, "ngIf"], ["icon", "search", "luInputWrapperAfter", "", 1, "search-icon", 3, "size"], [1, "app-tablet-scanner-widget-class", 3, "searchWidgetParams", "disabled", "patientLoaded", "fioSearchStr", "closeSearch"]],
  template: function (y, j) {
    1 & y && (e.TgZ(0, "div", 0), e.YNc(1, v, 1, 0, "app-search-small-icon", 1), e.YNc(2, E, 6, 4, "div", 2), e.YNc(3, h, 2, 2, "ng-container", 3), e.qZA()), 2 & y && (e.xp6(1), e.Q6J("ngIf", !j.isSearchVisible), e.xp6(1), e.Q6J("ngIf", j.isSearchVisible), e.xp6(1), e.Q6J("ngIf", j.isSearchVisible && !j.isManualSearch));
  },
  dependencies: [m.o, m.k, d.h, d.q, M.LA, M.HY, M.Fj, b.f, b.L, A.c, A.H, N.W1, I.i, t.ez, t.O5, a.u5, a.Fj, a.JJ, a.On, O.O, L],
  styles: [".search__container[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.search__container[_ngcontent-%COMP%]:has(.search__container__input_wrapper){flex-direction:column;align-items:stretch;position:relative}.search__container__input_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:100%;padding:0 16px;margin-top:12px}.search__container__input_wrapper__back_button[_ngcontent-%COMP%]     .lu-button-wrapper{height:32px!important;width:32px!important}.search__container__input_wrapper[_ngcontent-%COMP%]     lu-wrapper{width:528px!important;display:block}.search__container__input_wrapper[_ngcontent-%COMP%]     lu-input-wrapper.content-header__search_input_wrapper input{width:528px!important}.search__container__input_wrapper[_ngcontent-%COMP%]     lu-input-container:after{width:528px!important}.search__container[_ngcontent-%COMP%]   .app-tablet-scanner-widget-class[_ngcontent-%COMP%]{width:100%;margin-top:16px;flex:1;position:relative}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]{border-radius:8px;flex:1;width:100%}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]     .lu-input-container:after{border-radius:4px!important}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]     lu-floated-border:after{border-radius:4px!important}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]     [data-lu-focused=true]{--lu-floated-border: #3DCFCF !important;border-radius:4px}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]     lu-svg-icon[data-lu-icon=close] svg{margin-left:23px;transform:scale(1.15)}.search__container[_ngcontent-%COMP%]   .content-header__search_input_wrapper[_ngcontent-%COMP%]       lu-svg-icon[data-lu-icon=search] svg{margin-left:19px}.search__container[_ngcontent-%COMP%]     .search-icon{--lu-svg-icon-color: #38a1d6 !important}.search__container[_ngcontent-%COMP%]:hover{cursor:pointer}"]
});
