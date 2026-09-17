// Extracted from main; webpack module 12687. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    X6: () => q,
    s1: () => B,
    yG: () => mt
  });
  var t = i(94650),
    a = (i(83353), i(77579)),
    m = i(50727),
    d = i(29521),
    M = i(18505),
    b = i(78372),
    A = i(39300),
    N = i(54004);
  class R {
    constructor(Dt) {
      this._items = Dt, this._activeItemIndex = -1, this._activeItem = null, this._wrap = !1, this._letterKeyStream = new a.x(), this._typeaheadSubscription = m.w0.EMPTY, this._vertical = !0, this._allowedModifierKeys = [], this._homeAndEnd = !1, this._pageUpAndDown = {
        enabled: !1,
        delta: 10
      }, this._skipPredicateFn = Ht => Ht.disabled, this._pressedLetters = [], this.tabOut = new a.x(), this.change = new a.x(), Dt instanceof t.n_E && (this._itemChangesSubscription = Dt.changes.subscribe(Ht => {
        if (this._activeItem) {
          const vt = Ht.toArray().indexOf(this._activeItem);
          vt > -1 && vt !== this._activeItemIndex && (this._activeItemIndex = vt);
        }
      }));
    }
    skipPredicate(Dt) {
      return this._skipPredicateFn = Dt, this;
    }
    withWrap(Dt = !0) {
      return this._wrap = Dt, this;
    }
    withVerticalOrientation(Dt = !0) {
      return this._vertical = Dt, this;
    }
    withHorizontalOrientation(Dt) {
      return this._horizontal = Dt, this;
    }
    withAllowedModifierKeys(Dt) {
      return this._allowedModifierKeys = Dt, this;
    }
    withTypeAhead(Dt = 200) {
      return this._typeaheadSubscription.unsubscribe(), this._typeaheadSubscription = this._letterKeyStream.pipe((0, M.b)(Ht => this._pressedLetters.push(Ht)), (0, b.b)(Dt), (0, A.h)(() => this._pressedLetters.length > 0), (0, N.U)(() => this._pressedLetters.join(""))).subscribe(Ht => {
        const Dn = this._getItemsArray();
        for (let vt = 1; vt < Dn.length + 1; vt++) {
          const an = (this._activeItemIndex + vt) % Dn.length,
            li = Dn[an];
          if (!this._skipPredicateFn(li) && 0 === li.getLabel().toUpperCase().trim().indexOf(Ht)) {
            this.setActiveItem(an);
            break;
          }
        }
        this._pressedLetters = [];
      }), this;
    }
    cancelTypeahead() {
      return this._pressedLetters = [], this;
    }
    withHomeAndEnd(Dt = !0) {
      return this._homeAndEnd = Dt, this;
    }
    withPageUpDown(Dt = !0, Ht = 10) {
      return this._pageUpAndDown = {
        enabled: Dt,
        delta: Ht
      }, this;
    }
    setActiveItem(Dt) {
      const Ht = this._activeItem;
      this.updateActiveItem(Dt), this._activeItem !== Ht && this.change.next(this._activeItemIndex);
    }
    onKeydown(Dt) {
      const Ht = Dt.keyCode,
        vt = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(an => !Dt[an] || this._allowedModifierKeys.indexOf(an) > -1);
      switch (Ht) {
        case d.Mf:
          return void this.tabOut.next();
        case d.JH:
          if (this._vertical && vt) {
            this.setNextItemActive();
            break;
          }
          return;
        case d.LH:
          if (this._vertical && vt) {
            this.setPreviousItemActive();
            break;
          }
          return;
        case d.SV:
          if (this._horizontal && vt) {
            "rtl" === this._horizontal ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
          }
          return;
        case d.oh:
          if (this._horizontal && vt) {
            "rtl" === this._horizontal ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
          }
          return;
        case d.Sd:
          if (this._homeAndEnd && vt) {
            this.setFirstItemActive();
            break;
          }
          return;
        case d.uR:
          if (this._homeAndEnd && vt) {
            this.setLastItemActive();
            break;
          }
          return;
        case d.Ku:
          if (this._pageUpAndDown.enabled && vt) {
            const an = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(an > 0 ? an : 0, 1);
            break;
          }
          return;
        case d.VM:
          if (this._pageUpAndDown.enabled && vt) {
            const an = this._activeItemIndex + this._pageUpAndDown.delta,
              li = this._getItemsArray().length;
            this._setActiveItemByIndex(an < li ? an : li - 1, -1);
            break;
          }
          return;
        default:
          return void ((vt || (0, d.Vb)(Dt, "shiftKey")) && (Dt.key && 1 === Dt.key.length ? this._letterKeyStream.next(Dt.key.toLocaleUpperCase()) : (Ht >= d.A && Ht <= d.Z || Ht >= d.xE && Ht <= d.aO) && this._letterKeyStream.next(String.fromCharCode(Ht))));
      }
      this._pressedLetters = [], Dt.preventDefault();
    }
    get activeItemIndex() {
      return this._activeItemIndex;
    }
    get activeItem() {
      return this._activeItem;
    }
    isTyping() {
      return this._pressedLetters.length > 0;
    }
    setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
      this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    setNextItemActive() {
      this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(Dt) {
      const Ht = this._getItemsArray(),
        Dn = "number" == typeof Dt ? Dt : Ht.indexOf(Dt);
      this._activeItem = Ht[Dn] ?? null, this._activeItemIndex = Dn;
    }
    destroy() {
      this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._letterKeyStream.complete(), this.tabOut.complete(), this.change.complete(), this._pressedLetters = [];
    }
    _setActiveItemByDelta(Dt) {
      this._wrap ? this._setActiveInWrapMode(Dt) : this._setActiveInDefaultMode(Dt);
    }
    _setActiveInWrapMode(Dt) {
      const Ht = this._getItemsArray();
      for (let Dn = 1; Dn <= Ht.length; Dn++) {
        const vt = (this._activeItemIndex + Dt * Dn + Ht.length) % Ht.length;
        if (!this._skipPredicateFn(Ht[vt])) return void this.setActiveItem(vt);
      }
    }
    _setActiveInDefaultMode(Dt) {
      this._setActiveItemByIndex(this._activeItemIndex + Dt, Dt);
    }
    _setActiveItemByIndex(Dt, Ht) {
      const Dn = this._getItemsArray();
      if (Dn[Dt]) {
        for (; this._skipPredicateFn(Dn[Dt]);) if (!Dn[Dt += Ht]) return;
        this.setActiveItem(Dt);
      }
    }
    _getItemsArray() {
      return this._items instanceof t.n_E ? this._items.toArray() : this._items;
    }
  }
  class B extends R {
    setActiveItem(Dt) {
      this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(Dt), this.activeItem && this.activeItem.setActiveStyles();
    }
  }
  function q(pt) {
    return 0 === pt.buttons || 0 === pt.offsetX && 0 === pt.offsetY;
  }
  function mt(pt) {
    const Dt = pt.touches && pt.touches[0] || pt.changedTouches && pt.changedTouches[0];
    return !(!Dt || -1 !== Dt.identifier || null != Dt.radiusX && 1 !== Dt.radiusX || null != Dt.radiusY && 1 !== Dt.radiusY);
  }
});
