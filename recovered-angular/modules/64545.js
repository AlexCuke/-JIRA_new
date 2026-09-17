// Extracted from main; webpack module 64545. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    o: () => x
  });
  var t = i(36895),
    e = i(94650),
    a = i(24006),
    m = i(19550),
    d = i(93278),
    M = i(62804),
    b = i(13700),
    A = i(43150),
    N = i(9073),
    I = i(70823),
    O = i(31224);
  const u = class {};
  let L = u;
  u.ɵfac = function (y) {
    return new (y || u)();
  }, u.ɵcmp = e.Xpm({
    type: u,
    selectors: [["app-search-small-icon"]],
    standalone: !0,
    features: [e.jDz],
    decls: 2,
    vars: 0,
    consts: [["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4863 11.8894L17.6699 16.073C18.11 16.5142 18.11 17.2298 17.6699 17.6699C17.2298 18.11 16.5142 18.11 16.0741 17.6699L11.8905 13.4852C11.8127 13.4096 11.7495 13.3238 11.6998 13.2335C10.4798 14.1364 8.96981 14.6713 7.33565 14.6713C3.28412 14.6713 0 11.3872 0 7.33565C0 3.28412 3.28412 0 7.33565 0C11.3872 0 14.6713 3.28412 14.6713 7.33565C14.6713 8.96981 14.1364 10.4798 13.2335 11.6987C13.3238 11.7495 13.4084 11.8127 13.4863 11.8894ZM2.25712 7.33565C2.25712 10.1401 4.53118 12.4142 7.33565 12.4142C10.1401 12.4142 12.4142 10.1401 12.4142 7.33565C12.4142 4.53118 10.1401 2.25712 7.33565 2.25712C4.53118 2.25712 2.25712 4.53118 2.25712 7.33565Z", "fill", "#38A1D6"]],
    template: function (y, j) {
      1 & y && (e.O4$(), e.TgZ(0, "svg", 0), e._UZ(1, "path", 1), e.qZA());
    },
    styles: ["[_nghost-%COMP%]{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center}"]
  });
  var C = i(21846);
  function v(R, B) {
    if (1 & R) {
      const y = e.EpF();
      e.TgZ(0, "app-search-small-icon", 4), e.NdJ("click", function () {
        e.CHM(y);
        const W = e.oxw();
        return e.KtG(W.toggleSearchInput(!0));
      }), e.qZA();
    }
  }
  function f(R, B) {
    1 & R && e._UZ(0, "lu-svg-icon", 11), 2 & R && e.Q6J("size", 24);
  }
  function E(R, B) {
    if (1 & R) {
      const y = e.EpF();
      e.TgZ(0, "div", 5)(1, "button", 6), e.NdJ("click", function () {
        e.CHM(y);
        const W = e.oxw();
        return e.KtG(W.toggleSearchInput(!1));
      }), e._UZ(2, "lu-svg-icon", 7), e.qZA(), e.TgZ(3, "lu-input-wrapper", 8), e.NdJ("afterClear", function () {
        e.CHM(y);
        const W = e.oxw();
        return e.KtG(W.toggleSearchInput(!1));
      }), e.TgZ(4, "input", 9), e.NdJ("ngModelChange", function (W) {
        e.CHM(y);
        const F = e.oxw();
        return e.KtG(F.searchValue = W);
      })("ngModelChange", function (W) {
        e.CHM(y);
        const F = e.oxw();
        return e.KtG(F.onSearch(W));
      }), e.qZA(), e.YNc(5, f, 1, 1, "lu-svg-icon", 10), e.qZA()();
    }
    if (2 & R) {
      const y = e.oxw();
      e.xp6(2), e.Q6J("size", 24), e.xp6(1), e.Q6J("clearButton", !!y.searchValue), e.xp6(1), e.Q6J("ngModel", y.searchValue), e.xp6(1), e.Q6J("ngIf", !y.searchValue);
    }
  }
  function h(R, B) {
    if (1 & R) {
      const y = e.EpF();
      e.ynx(0), e.TgZ(1, "app-tablet-scanner-widget", 12), e.NdJ("patientLoaded", function (W) {
        e.CHM(y);
        const F = e.oxw();
        return e.KtG(F.onPatientLoaded(W));
      })("fioSearchStr", function (W) {
        e.CHM(y);
        const F = e.oxw();
        return e.KtG(F.onFioSearchFromScanner(W));
      })("closeSearch", function (W) {
        e.CHM(y);
        const F = e.oxw();
        return e.KtG(F.onCloseSearch(W));
      }), e.qZA(), e.BQk();
    }
    if (2 & R) {
      const y = e.oxw();
      e.xp6(1), e.Q6J("searchWidgetParams", y.searchWidgetParams)("disabled", y.isScannerDisabled);
    }
  }
  const T = class {
    constructor(B) {
      this.sharedDataService = B, this.searchVisibleChange = new e.vpe(), this.searchSuccess = new e.vpe(), this.searchFillRes = new e.vpe(), this.isSearchVisible = !1, this.searchValue = "", this.isScannerDisabled = !1, this.isManualSearch = !1, this.searchWidgetParams = {
        header: null,
        subHeader: "Отсканируйте QR-код пациента или введите его данные",
        isSearchAllowed: !0,
        mode: "patient",
        searchPlaceholder: "ФИО пациента или номер карты"
      };
    }
    ngOnInit() {}
    ngOnChanges() {
      this.searchFill && (this.searchWidgetParams.header = this.searchFill);
    }
    toggleSearchInput(B) {
      this.isSearchVisible = B, this.isManualSearch = !1, B ? this.isScannerDisabled = !1 : (this.searchValue = "", this.sharedDataService.setSearch(""), this.isScannerDisabled = !0), this.searchVisibleChange.emit(this.isSearchVisible), this.searchFillRes.emit("");
    }
    resetSearch() {
      this.isSearchVisible = !1, this.isManualSearch = !1, this.isScannerDisabled = !0, this.searchValue = "", this.sharedDataService.setSearch(""), this.searchVisibleChange.emit(!1), this.searchFillRes.emit("");
    }
    clearSearch() {
      this.isSearchVisible = !1, this.searchValue = "";
    }
    onSearchChange(B) {
      this.searchValue = B;
    }
    onSearch(B) {
      this.sharedDataService.setSearch(B), this.searchSuccess.emit(!0), this.searchFillRes.emit(B), this.isScannerDisabled = !0, this.isManualSearch = !!B;
    }
    onPatientLoaded(B) {
      if (this.patientDataObj = B, B?.patient?.name) {
        const {
          lastName: y,
          firstName: j,
          secondName: W
        } = B.patient.name;
        this.searchValue = [y, j, W].filter(Boolean).join(" "), this.sharedDataService.setSearch(this.searchValue), this.searchSuccess.emit(!0), this.isScannerDisabled = !0;
      } else this.searchValue = "";
    }
    onFioSearchFromScanner(B) {
      this.searchValue = B, this.onSearch(B);
    }
    onCloseSearch(B) {
      this.toggleSearchInput(B);
    }
  };
  let x = T;
  T.ɵfac = function (y) {
    return new (y || T)(e.Y36(C.g));
  }, T.ɵcmp = e.Xpm({
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
});
