// Exact compiled component metadata; references belong to modules/80668.js
({
  type: C,
  selectors: [["lu-replacement-message"]],
  contentQueries: function (f, E, h) {
    if (1 & f && (t.Suo(h, e.q, 5), t.Suo(h, I, 5)), 2 & f) {
      let x;
      t.iGM(x = t.CRH()) && (E.icon = x.first), t.iGM(x = t.CRH()) && (E.title = x.first);
    }
  },
  hostVars: 24,
  hostBindings: function (f, E) {
    2 & f && t.ekj("-is-highlight", E.highlight)("-is-grey", E.isGrey)("-is-vertical", "vertical" === E.orientation)("-is-non-icon", !E.icon)("-is-success", "success" === E.type)("-is-info", "info" === E.type)("-is-attention", "attention" === E.type)("-is-warning", "warning" === E.type)("-is-small", "small" === E.size)("-is-medium", "medium" === E.size)("-is-large", "large" === E.size)("-absolute", E.absolute);
  },
  inputs: {
    type: "type",
    orientation: "orientation",
    size: "size",
    absolute: "absolute",
    highlight: "highlight",
    isGrey: "isGrey"
  },
  ngContentSelectors: N,
  decls: 6,
  vars: 6,
  consts: [[1, "lu-replacement-message"], ["class", "lu-replacement-message__icon", 4, "ngIf"], [1, "lu-replacement-message__content"], ["class", "lu-replacement-message__title", 4, "ngIf"], [1, "lu-replacement-message-text"], [1, "lu-replacement-message__icon"], [1, "lu-replacement-message__title"]],
  template: function (f, E) {
    1 & f && (t.F$t(b), t.TgZ(0, "div", 0), t.YNc(1, d, 2, 0, "div", 1), t.TgZ(2, "div", 2), t.YNc(3, M, 2, 0, "div", 3), t.TgZ(4, "div", 4), t.Hsn(5), t.qZA()()()), 2 & f && (t.Tol(t.VKq(4, A, E.highlight)), t.xp6(1), t.Q6J("ngIf", E.icon), t.xp6(2), t.Q6J("ngIf", E.title));
  },
  dependencies: [a.O5],
  styles: ["[_nghost-%COMP%]{display:inline-flex;line-height:24px;font-size:15px;text-align:center;vertical-align:middle;--lu-replacement-index: 5;--lu-replacement-bg: var(--lu-base);--lu-replacement-padding: calc(var(--lu-base-gutter) * 3)}[_nghost-%COMP%]:not(.-is-vertical)   .lu-replacement-message[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]:not(.-is-vertical)   .lu-replacement-message__icon[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.-is-vertical)   .lu-replacement-message__content[_ngcontent-%COMP%]{display:flex;vertical-align:middle;align-items:flex-start;font-size:13px}[_nghost-%COMP%]:not(.-is-vertical)   .lu-replacement-message__content[_ngcontent-%COMP%]{text-align:left}[_nghost-%COMP%]:not(.-is-vertical).-is-large   .lu-replacement-message__icon[_ngcontent-%COMP%]{margin-bottom:5px}[_nghost-%COMP%]:not(.-is-vertical).-is-large   .lu-replacement-message__content[_ngcontent-%COMP%]{margin-left:18px;font-size:15px}[_nghost-%COMP%]:not(.-is-vertical).-is-medium   .lu-replacement-message__icon[_ngcontent-%COMP%]{margin-bottom:3px}[_nghost-%COMP%]:not(.-is-vertical).-is-medium   .lu-replacement-message__content[_ngcontent-%COMP%]{margin-left:15px;font-size:15px}[_nghost-%COMP%]:not(.-is-vertical).-is-small   .lu-replacement-message__content[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter);font-size:15px}.-absolute[_nghost-%COMP%]{position:absolute;left:0;top:0;z-index:var(--lu-replacement-index);width:100%;height:100%;background-color:var(--lu-replacement-bg);justify-content:center;align-items:center;padding:var(--lu-replacement-padding)}.-is-highlight.-is-success[_nghost-%COMP%]{color:var(--lu-green-120)}.-is-highlight.-is-info[_nghost-%COMP%]{color:var(--lu-blue-120)}.-is-highlight.-is-attention[_nghost-%COMP%]{color:var(--lu-orange-120)}.-is-highlight.-is-warning[_nghost-%COMP%]{color:var(--lu-red-120)}.-is-grey[_nghost-%COMP%]   .lu-replacement-message__content[_ngcontent-%COMP%]{color:#757575}.-is-non-icon[_nghost-%COMP%]   .lu-replacement-message__title[_ngcontent-%COMP%]{margin-bottom:10px}.-is-non-icon.-is-success[_nghost-%COMP%]   .lu-replacement-message__title[_ngcontent-%COMP%]{color:var(--lu-green-120)}.-is-non-icon.-is-info[_nghost-%COMP%]   .lu-replacement-message__title[_ngcontent-%COMP%]{color:var(--lu-blue-120)}.-is-non-icon.-is-attention[_nghost-%COMP%]   .lu-replacement-message__title[_ngcontent-%COMP%]{color:var(--lu-orange-120)}.-is-non-icon.-is-warning[_nghost-%COMP%]   .lu-replacement-message__title[_ngcontent-%COMP%]{color:var(--lu-red-120)}.-is-vertical[_nghost-%COMP%]   .lu-replacement-message__icon[_ngcontent-%COMP%]{display:inline-flex;margin-bottom:10px}.-is-vertical.-is-large[_nghost-%COMP%]   .lu-replacement-message__icon[_ngcontent-%COMP%]{margin-bottom:calc(var(--lu-base-gutter) * 2)}.-is-vertical.-is-large[_nghost-%COMP%]   .lu-replacement-message[_ngcontent-%COMP%], .-is-vertical.-is-medium[_nghost-%COMP%]   .lu-replacement-message[_ngcontent-%COMP%]{max-width:600px}.lu-replacement-message__title[_ngcontent-%COMP%]{font-weight:600;font-size:15px}.lu-replacement-message__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.lu-replacement-message__content[_ngcontent-%COMP%]     button.lu-link{display:inline;padding:0;vertical-align:baseline;font-size:inherit}.lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link], .lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link-dashed]{display:inline;font-size:inherit;line-height:inherit;vertical-align:baseline}.lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link] .lu-button-wrapper, .lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link-dashed] .lu-button-wrapper{display:inline-block}.lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link] .lu-button-wrapper .lu-button-text, .lu-replacement-message__content[_ngcontent-%COMP%]     button[lu-button-link-dashed] .lu-button-wrapper .lu-button-text{line-height:inherit;margin:0!important}"],
  changeDetection: 0
});
