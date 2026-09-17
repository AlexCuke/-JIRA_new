// Exact compiled component metadata; references belong to modules/73922.js
({
  type: Kt,
  selectors: [["lu-month-stepper-chooser"]],
  inputs: {
    minDate: "minDate",
    maxDate: "maxDate"
  },
  features: [t._Bn([{
    provide: vt.fU,
    useExisting: Kt
  }, {
    provide: vt.Oc,
    useValue: Kr.Ls.PRIMITIVE
  }, {
    provide: an.Vg,
    useExisting: Kt
  }, {
    provide: vt.hy,
    useValue: Js.iO
  }, {
    provide: vt.oL,
    useValue: Js.He
  }]), t.qOj, t.TTD],
  decls: 12,
  vars: 16,
  consts: [[1, "lu-month-navigation"], ["stepUnit", "year", 3, "minDate", "iconSize"], ["lu-button-link-dashed", "", "luDropdownButton", "", 1, "select-year", 3, "ngModel", "displayValueFn", "compareFn", "ngModelChange", "click"], ["monthButton", "luDropdownButton"], ["icon", "chevron-down", "luButtonPostfix", "", 3, "size", "luChevronRotate"], [3, "content", "width", "contactBorder", "borderOffset"], ["dropdownYears", ""], ["contentYears", ""], ["stepUnit", "year", 3, "maxDate", "iconSize"], [1, "lu-month-wrapper"], ["class", "lu-month", "luControlSelector", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["itemSize", "small", 1, "dropdown-list", 3, "items", "itemContent"], ["yearTemplate", ""], [1, "list-item"], ["luControlSelector", "", 1, "lu-month", 3, "value", "click"], ["selector", "luControlSelector"]],
  template: function (Pn, pi) {
    if (1 & Pn) {
      const xo = t.EpF();
      t.TgZ(0, "div", 0), t._UZ(1, "lu-calendar-previous", 1), t.TgZ(2, "button", 2, 3), t.NdJ("ngModelChange", function (Ko) {
        return pi.chooseYear(Ko);
      })("click", function () {
        t.CHM(xo);
        const Ko = t.MAs(6);
        return t.KtG(Ko.toggle());
      }), t._UZ(4, "lu-svg-icon", 4), t.TgZ(5, "lu-dropdown", 5, 6), t.YNc(7, jt, 3, 2, "ng-template", null, 7, t.W1O), t.qZA()(), t._UZ(9, "lu-calendar-next", 8), t.qZA(), t.TgZ(10, "div", 9), t.YNc(11, hn, 4, 5, "div", 10), t.qZA();
    }
    if (2 & Pn) {
      const xo = t.MAs(3),
        No = t.MAs(6),
        Ko = t.MAs(8);
      t.xp6(1), t.Q6J("minDate", pi.minDate)("iconSize", 16), t.xp6(1), t.ekj("button-opened", No.isOpened), t.Q6J("ngModel", pi.model)("displayValueFn", pi.displayYear.bind(pi))("compareFn", pi.compareYears.bind(pi)), t.xp6(2), t.Q6J("size", 16)("luChevronRotate", No), t.xp6(1), t.Q6J("content", Ko)("width", xo.origin.nativeElement.offsetWidth)("contactBorder", !1)("borderOffset", 1), t.xp6(4), t.Q6J("maxDate", pi.maxDate)("iconSize", 16), t.xp6(2), t.Q6J("ngForOf", pi.months);
    }
  },
  dependencies: [f.sg, We.R, xa.Z, rs._, d.mc, d.zY, C.$, pe.q, ho.l, uo.G, ri.c, Mn.JJ, Mn.On, qn.M],
  styles: ["[_nghost-%COMP%]{display:block;width:204px}[_nghost-%COMP%]   lu-calendar-previous[_ngcontent-%COMP%], [_nghost-%COMP%]   lu-calendar-next[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   lu-calendar-previous[_ngcontent-%COMP%]:not([data-lu-disabled=true]):hover, [_nghost-%COMP%]   lu-calendar-next[_ngcontent-%COMP%]:not([data-lu-disabled=true]):hover{cursor:pointer}[_nghost-%COMP%]   lu-calendar-previous[_ngcontent-%COMP%]:not([data-lu-disabled=true]):hover:before, [_nghost-%COMP%]   lu-calendar-next[_ngcontent-%COMP%]:not([data-lu-disabled=true]):hover:before{position:absolute;content:\"\";top:0;left:0;width:100%;height:100%;background-color:var(--lu-primary);opacity:.2;border-radius:50%}[_nghost-%COMP%]   lu-calendar-previous[_ngcontent-%COMP%]     lu-svg-icon, [_nghost-%COMP%]   lu-calendar-next[_ngcontent-%COMP%]     lu-svg-icon{--lu-svg-icon-color: var(--lu-primary)}.lu-month-navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:calc(var(--lu-base-gutter) * 2)}.lu-month-stepper[_ngcontent-%COMP%]{display:flex;align-content:flex-start}.lu-month-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:column wrap;flex-direction:column;align-items:flex-start;max-height:240px}.lu-month[_ngcontent-%COMP%]{font-size:var(--lu-font-size);font-family:var(--lu-font);font-weight:var(--lu-font-weight);font-style:normal;line-height:var(--lu-line-height);color:var(--lu-text-color);display:inline-flex;padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2);border-radius:40px;min-width:102px;text-transform:capitalize}.lu-month[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--lu-primary-bg)}.lu-month[data-lu-checked=true][_ngcontent-%COMP%]{background-color:var(--lu-primary);color:var(--lu-white)}button[lu-button-link-dashed][_ngcontent-%COMP%]{border:1px solid transparent;border-bottom:none;padding:var(--lu-base-gutter);height:40px;transition:.12s cubic-bezier(.25,.8,.25,1) border;--lu-button-align: left}button[lu-button-link-dashed].button-opened[_ngcontent-%COMP%]{border-color:var(--lu-border)}.dropdown-list[_ngcontent-%COMP%]{max-height:392px}"],
  changeDetection: 0
});
