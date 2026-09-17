// Exact compiled component metadata; references belong to modules/44785.js
({
  type: Ud,
  selectors: [["app-preparing-table-mob"]],
  inputs: {
    tasks: "tasks",
    selectedPeriod: "selectedPeriod",
    searchQuery: "searchQuery"
  },
  outputs: {
    slotAction: "slotAction"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "preparing-medications-wrapper"], [1, "preparing-medications-list"], ["class", "preparing-medications-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "preparing-medications-list__item"], ["color", "primary", 1, "preparing-medications-list__item-header", 3, "withArrow"], [1, "medicine-heading"], [1, "medicine-heading__fio"], [1, "name", 3, "innerHTML"], [1, "pillbox-number"], [1, "medicine-heading__details"], [1, "medicine-heading__separator"], [1, "medicine-details"], [1, "medicine-details__period"], [1, "medicine-details__period-items"], [4, "ngIf"], [3, "slots", "mode", "pillboxMarks", "filterPeriod", "action"], [4, "ngFor", "ngForOf"]],
  template: function (k, ce) {
    1 & k && (n.TgZ(0, "div", 0)(1, "div", 1), n.YNc(2, wt, 21, 14, "lu-expansion-panel", 2), n.qZA()()), 2 & k && (n.xp6(2), n.Q6J("ngForOf", ce.tasks)("ngForTrackBy", ce.trackByTask));
  },
  dependencies: [Di.sg, Di.O5, Ba.BN, Ba.JM, Wu, ms.S],
  styles: ["[_nghost-%COMP%]{display:block;height:100%}.preparing-medications-wrapper[_ngcontent-%COMP%]{padding:8px 0;height:100%;background-color:#f2f2f2}.preparing-medications-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:0 16px;height:100%;overflow:hidden auto}.preparing-medications-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.preparing-medications-list[_ngcontent-%COMP%]     .lu-text-left{--lu-svg-icon-color: #38a1d6}.preparing-medications-list__item[_ngcontent-%COMP%]{width:calc(100vw - 32px);min-height:-moz-fit-content;min-height:fit-content;border-radius:8px;background-color:#fff;transition:background-color .15s ease}@media (min-width: 961px){.preparing-medications-list__item[_ngcontent-%COMP%]:hover{background-color:#ecf6fb}}.preparing-medications-list__item-header[_ngcontent-%COMP%]{display:block;padding:16px 24px 16px 16px}@media (min-width: 600px) and (max-width: 960px){.preparing-medications-list[_ngcontent-%COMP%]     .preparing-medications-list__item-header .lu-text-left{width:24px!important}}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-name[_ngcontent-%COMP%]{font-weight:600;color:#333}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading[_ngcontent-%COMP%]{display:flex;align-items:start;justify-content:space-between;gap:16px;color:#333}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]{display:flex;flex-direction:column}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]     mark.search-highlight{background-color:#fff199!important}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__fio[_ngcontent-%COMP%]   .pillbox-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:13px;color:#757575}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__details[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0;gap:12px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-heading__separator[_ngcontent-%COMP%]{display:block;height:15px;border-right:1px solid #ccc}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details[_ngcontent-%COMP%]{padding:0 24px 24px 48px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details__period[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.preparing-medications-list[_ngcontent-%COMP%]   .medicine-details__period-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,112px);gap:16px;font-size:13px;color:#757575}"],
  changeDetection: 0
});
