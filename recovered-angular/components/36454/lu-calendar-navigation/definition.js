// Exact compiled component metadata; references belong to modules/36454.js
({
  type: st,
  selectors: [["lu-calendar-navigation"]],
  inputs: {
    currentMonth: "currentMonth",
    minDate: "minDate",
    maxDate: "maxDate",
    selectionState: "selectionState",
    startDate: "startDate"
  },
  outputs: {
    nextMonth: "nextMonth",
    prevMonth: "prevMonth",
    selectMonth: "selectMonth"
  },
  features: [e._Bn([{
    provide: I.hy,
    useValue: b.iO
  }, {
    provide: I.oL,
    useValue: b.He
  }]), e.TTD],
  decls: 18,
  vars: 20,
  consts: [["lu-button-icon", "", 3, "disabled", "click"], ["icon", "chevron-up"], ["icon", "chevron-down"], ["lu-button-link-dashed", "", "luDropdownButton", "", 1, "select-month", 3, "ngModel", "displayValueFn", "compareFn", "click", "ngModelChange"], ["monthButton", "luDropdownButton"], ["icon", "chevron-down", "size", "16", "luButtonPostfix", "", 3, "luChevronRotate"], [3, "content", "width", "contactBorder", "borderOffset"], ["dropdownMonths", ""], ["contentMonths", ""], ["lu-button-link-dashed", "", "luDropdownButton", "", 1, "select-year", 3, "ngModel", "click", "ngModelChange"], ["yearButton", "luDropdownButton"], ["dropdownYears", ""], ["contentYears", ""], ["itemSize", "small", 1, "dropdown-list", 3, "items", "itemContent", "itemDisabledFn"], ["monthTemplate", ""], [1, "list-item"], ["itemSize", "small", 1, "dropdown-list", 3, "items"]],
  template: function (mt, ut) {
    if (1 & mt) {
      const Ct = e.EpF();
      e.TgZ(0, "button", 0), e.NdJ("click", function () {
        return ut.prevMonth.emit();
      }), e._UZ(1, "lu-svg-icon", 1), e.qZA(), e.TgZ(2, "button", 0), e.NdJ("click", function () {
        return ut.nextMonth.emit();
      }), e._UZ(3, "lu-svg-icon", 2), e.qZA(), e.TgZ(4, "button", 3, 4), e.NdJ("click", function () {
        e.CHM(Ct);
        const Et = e.MAs(8);
        return e.KtG(Et.toggle());
      })("ngModelChange", function (Et) {
        return ut.selectedMonth = Et;
      })("ngModelChange", function () {
        return ut.emitChanges();
      }), e._UZ(6, "lu-svg-icon", 5), e.TgZ(7, "lu-dropdown", 6, 7), e.YNc(9, fe, 3, 3, "ng-template", null, 8, e.W1O), e.qZA()(), e.TgZ(11, "button", 9, 10), e.NdJ("click", function () {
        e.CHM(Ct);
        const Et = e.MAs(15);
        return e.KtG(Et.toggle());
      })("ngModelChange", function (Et) {
        return ut.selectedYear = Et;
      })("ngModelChange", function () {
        return ut.emitChanges();
      }), e._UZ(13, "lu-svg-icon", 5), e.TgZ(14, "lu-dropdown", 6, 11), e.YNc(16, ye, 1, 1, "ng-template", null, 12, e.W1O), e.qZA()();
    }
    if (2 & mt) {
      const Ct = e.MAs(5),
        Ft = e.MAs(8),
        Et = e.MAs(10),
        Ue = e.MAs(12),
        Me = e.MAs(15),
        Ke = e.MAs(17);
      e.Q6J("disabled", ut.isMinMonth()), e.xp6(2), e.Q6J("disabled", ut.isMaxMonth()), e.xp6(2), e.ekj("button-opened", Ft.isOpened), e.Q6J("ngModel", ut.selectedMonth)("displayValueFn", ut.displayMonth.bind(ut))("compareFn", ut.compareMonth.bind(ut)), e.xp6(2), e.Q6J("luChevronRotate", Ft), e.xp6(1), e.Q6J("content", Et)("width", Ct.origin.nativeElement.offsetWidth)("contactBorder", !1)("borderOffset", 1), e.xp6(4), e.ekj("button-opened", Me.isOpened), e.Q6J("ngModel", ut.selectedYear), e.xp6(2), e.Q6J("luChevronRotate", Me), e.xp6(1), e.Q6J("content", Ke)("width", Ue.origin.nativeElement.offsetWidth)("contactBorder", !1)("borderOffset", 1);
    }
  },
  dependencies: [d.mc, d.zY, E.k, h.q, x.$, u.c, T.l, L.JJ, L.On, R.G, B.M],
  styles: ["[_nghost-%COMP%]{display:flex;margin-top:8px}.dropdown-list[_ngcontent-%COMP%]{max-height:392px}.list-item[_ngcontent-%COMP%]{text-transform:capitalize}.list-item[_ngcontent-%COMP%]:last-child{margin-bottom:calc(var(--lu-base-gutter) / 2)}button[lu-button-link-dashed][_ngcontent-%COMP%]{border:1px solid transparent;border-bottom:none;height:40px;transition:.12s cubic-bezier(.25,.8,.25,1) border;--lu-button-align: left}button[lu-button-link-dashed].button-opened[_ngcontent-%COMP%]{border-color:var(--lu-border)}button[lu-button-link-dashed].select-month[_ngcontent-%COMP%]{flex:1}button[lu-button-link-dashed].select-year[_ngcontent-%COMP%]{right:8px}button[lu-button-link-dashed][_ngcontent-%COMP%]:hover{--lu-button-hover-background: none;--lu-button-active-background: none}button[lu-button-icon][_ngcontent-%COMP%]:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;border-radius:50%}button[lu-button-icon][_ngcontent-%COMP%]:hover:before{background-color:var(--lu-primary);opacity:.2}"],
  changeDetection: 0
});
