// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.cdr = (0, e.f3M)(e.sBO), this.isShowTooltip = !1;
  }
  ngOnInit() {
    this.clsData = (0, Oc.yE)(w1.d, this.data.data);
    const s = this.clsData?.labReferral?.vialColorWithCompatibility.split(";");
    this.colorCode = s[0], this.groupName = s[1] ? s[1] : "Отсутствует";
  }
  ngAfterViewInit() {
    const s = this.text.nativeElement;
    this.isShowTooltip = s.scrollWidth > s.clientWidth, this.cdr.detectChanges();
  }
  get convertedColor() {
    return (0, V6.d)(this.colorCode);
  }
});
