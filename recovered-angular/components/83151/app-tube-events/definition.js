// Exact compiled component metadata; references belong to modules/83151.js
({
  type: li,
  selectors: [["app-tube-events"]],
  inputs: {
    isSign: "isSign",
    tubeData: "tubeData",
    observationDate: "observationDate",
    patientId: "patientId"
  },
  outputs: {
    changeLoad: "changeLoad"
  },
  decls: 8,
  vars: 5,
  consts: [[1, "tube-events"], [1, "tube-events__header", 3, "click"], ["icon", "chevron-down", 3, "size"], [1, "tube-events__body"], [3, "expanded", "content"], ["content", ""], [1, "body-container"], ["class", "event-group", 4, "ngFor", "ngForOf"], [1, "event-group"], ["class", "event-group__header", "color", "primary", 4, "ngIf"], [1, "event-group__body"], [4, "ngIf"], ["color", "primary", 1, "event-group__header"], ["class", "event", 3, "pr-24", 4, "ngFor", "ngForOf"], [1, "event"], [1, "event__label"], ["class", "event__desc", 3, "w-s", 4, "ngIf"], ["class", "event__delete", 3, "click", 4, "ngIf"], [1, "event__desc"], [1, "event__delete", 3, "click"], ["icon", "close-tag", 3, "size"], [1, "group-subtitle"]],
  template: function (In, ui) {
    if (1 & In && (y.TgZ(0, "div", 0)(1, "div", 1), y.NdJ("click", function () {
      return ui.eventsToggle();
    }), y._uU(2, " События за текущие сутки "), y._UZ(3, "lu-svg-icon", 2), y.qZA(), y.TgZ(4, "div", 3)(5, "lu-expander", 4), y.YNc(6, co, 2, 1, "ng-template", null, 5, y.W1O), y.qZA()()()), 2 & In) {
      const To = y.MAs(7);
      y.ekj("open", ui.expanded), y.xp6(3), y.Q6J("size", 16), y.xp6(2), y.Q6J("expanded", ui.expanded)("content", To);
    }
  },
  dependencies: [t.sg, t.O5, b.q, M.BN, M.JM, W.G],
  styles: [".tube-events[_ngcontent-%COMP%]{padding:11px;border:1px dashed #ccc;border-radius:4px;background-color:#fff}.tube-events.open[_ngcontent-%COMP%] > .tube-events__header[_ngcontent-%COMP%] > lu-svg-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.tube-events__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-weight:600;color:#000;cursor:pointer}.tube-events__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #67bde3;transition:.2s ease}.tube-events__body[_ngcontent-%COMP%]{overflow:hidden}.tube-events__body[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]{padding-top:8px}.tube-events[_ngcontent-%COMP%]   .event-group[_ngcontent-%COMP%]{min-height:auto}.tube-events[_ngcontent-%COMP%]   .event-group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]{padding:0;width:-moz-fit-content;width:fit-content}.tube-events[_ngcontent-%COMP%]   .event-group__header[data-lu-expanded=true][_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #67bde3;transition:.2s ease}.tube-events[_ngcontent-%COMP%]   .event-group__header[_ngcontent-%COMP%]     .lu-text{display:flex;align-items:center;gap:8px;color:#333}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px 4px;padding-top:8px}.tube-events[_ngcontent-%COMP%]   .event-group__body.pt-6[_ngcontent-%COMP%]{padding-top:6px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .group-subtitle[_ngcontent-%COMP%]{width:100%}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]{position:relative;font-size:13px;border-radius:4px;background-color:#38a1d61a;line-height:1.539;overflow:hidden}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event.pr-24[_ngcontent-%COMP%]{padding-right:24px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__label[_ngcontent-%COMP%]{padding:2.5px 8px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:24px;padding:4.5px 4px;height:100%;cursor:pointer;transition:.2s ease}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]:hover{background-color:#fde4df}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]:hover   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #f05c46}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__delete[_ngcontent-%COMP%]   lu-svg-icon[_ngcontent-%COMP%]{--lu-svg-icon-color: #b3b3b3}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__desc[_ngcontent-%COMP%]{padding:0 8px 4px;min-width:664px}.tube-events[_ngcontent-%COMP%]   .event-group__body[_ngcontent-%COMP%]   .event__desc.w-s[_ngcontent-%COMP%]{min-width:593px}"]
});
