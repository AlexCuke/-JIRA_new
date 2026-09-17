// Extracted class; external identifiers resolve in modules/15513.js.
(class {
  constructor() {
    this.cdr = (0, e.f3M)(e.sBO), this.isShowTooltip = !1;
  }
  ngOnInit() {
    this.clsData = (0, Oc.yE)(w1.d, this.data.data);
  }
  ngAfterViewInit() {
    const s = this.text.nativeElement;
    this.isShowTooltip = s.scrollWidth > s.clientWidth, this.cdr.detectChanges();
  }
});
