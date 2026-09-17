// Exact compiled component metadata; references belong to modules/56470.js
({
  type: xo,
  selectors: [["app-stoma-events"]],
  inputs: {
    compositionId: "compositionId",
    stomaName: "stomaName",
    protocolId: "protocolId",
    parentSigned: "parentSigned"
  },
  outputs: {
    updateStomaItem: "updateStomaItem",
    isEventLoad: "isEventLoad",
    eventsChanged: "eventsChanged"
  },
  features: [q.TTD],
  decls: 5,
  vars: 3,
  consts: [[1, "stoma-events"], [1, "stoma-events__header", 3, "click"], ["class", "stoma-events__body", 4, "ngIf"], [1, "stoma-events__body"], ["class", "event", 4, "ngFor", "ngForOf"], [1, "event"], [1, "event__header", 3, "click"], ["class", "event__body", 4, "ngIf"], [1, "event__body"], [1, "event__items-row"], ["class", "event__item", 3, "has-desc", 4, "ngFor", "ngForOf"], [1, "event__item"], [1, "event__item__wrapper"], [1, "event__item-header"], [1, "event__item-title"], ["class", "event__item-desc", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "event__item-desc"], [3, "click"]],
  template: function (At, _n) {
    1 & At && (q.TgZ(0, "div", 0)(1, "div", 1), q.NdJ("click", function () {
      return _n.eventsToggle();
    }), q._uU(2, " События за текущие сутки "), q._UZ(3, "app-chevron-down-icon"), q.qZA(), q.YNc(4, qn, 2, 1, "div", 2), q.qZA()), 2 & At && (q.xp6(1), q.ekj("open", _n.events), q.xp6(3), q.Q6J("ngIf", _n.events));
  },
  dependencies: [b.sg, b.O5, ut, Ct],
  styles: [".stoma-events[_ngcontent-%COMP%]{padding:12px;border:1px dashed #ccc;border-radius:4px;background-color:#fff}.stoma-events__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;line-height:24px;font-weight:600;color:#000;cursor:pointer}.stoma-events__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{color:#67bde3}.stoma-events__header.open[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.stoma-events__body[_ngcontent-%COMP%]{margin-top:8px;font-size:15px;color:#333;display:flex;flex-direction:column;gap:8px}.event[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.event__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}.event__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{color:#67bde3}.event__header[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]:hover{color:#2c8dc4!important}.event__header.open[_ngcontent-%COMP%]   app-chevron-down-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.event__item[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;gap:4px;width:-moz-fit-content;width:fit-content;font-size:13px;color:#333;border-radius:4px;background-color:#38a1d61a}.event__item[_ngcontent-%COMP%]   app-delete-event-icon[_ngcontent-%COMP%]{height:100%}.event__item[_ngcontent-%COMP%]:hover{background-color:#38a1d61a}.event__item[_ngcontent-%COMP%]:hover   app-delete-event-icon[_ngcontent-%COMP%]{color:#f05c46!important}.event__item[_ngcontent-%COMP%]:active{background-color:#38a1d633}.event__item[_ngcontent-%COMP%]:active   app-delete-event-icon[_ngcontent-%COMP%]{background-color:#fde4df!important;color:#f05c46!important;border-radius:0 4px 4px 0}.event__item__wrapper[_ngcontent-%COMP%]{padding:2px 0 2px 8px}.event__item-header[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;gap:4px;line-height:20px}.event__item-title[_ngcontent-%COMP%]{flex:1}.event__item-desc[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word;line-height:20px}.event__items-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.event[_ngcontent-%COMP%]   app-delete-event-icon[_ngcontent-%COMP%]{color:#b3b3b3;cursor:pointer}  .lu-message-container-wrapper{padding-right:16px!important}  .lu-message-container-wrapper lu-message:before{opacity:1!important}"],
  changeDetection: 0
});
