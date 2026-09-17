// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.width = "400px", this.isShowCloseButton = !0, this.isShowBottomButtons = !0, this.closePanelEvent = new e.vpe(), this.selectedAreaEvent = new e.vpe(), this.cdr = (0, e.f3M)(e.sBO), this.treeItems = fu.OW, this.selectedItems = [], this.search = "";
  }
  ngOnChanges(s) {
    const o = s.schemaSelected;
    o && (o.currentValue?.toString() !== o.previousValue?.toString() || o.firstChange) && (this.selectedItems = Object.assign([], this.schemaSelected));
  }
  getChildren(s) {
    return s.children;
  }
  prepareSelected() {
    const s = this.selectedItems.map(o => (0, yg.cW)(o)).flat();
    this.selectedAreaEvent.emit(s);
  }
  compareNode(s, o) {
    return s?.id === o?.id && s?.projection === o?.projection;
  }
  resetTree() {
    this.treeItems = fu.OW;
  }
  expand() {
    this.areasTree.expandAll();
  }
  searchAreas() {
    this.resetTree(), this.search ? (this.treeItems = (0, yg.ge)(this.treeItems, this.search), setTimeout(() => this.areasTree.expandAll(), 0)) : setTimeout(() => this.areasTree.collapseAll(), 0);
  }
});
