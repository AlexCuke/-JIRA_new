// Extracted class; external identifiers resolve in modules/44785.js.
(class {
  constructor() {
    this.onEndReached = ($, k) => {}, this.listItems = [], this.isLoading = !1, this.hasMore = !0;
  }
  ngAfterViewInit() {
    this.observer = new IntersectionObserver($ => {
      $.forEach(k => {
        k.isIntersecting && !this.isLoading && this.hasMore && this.onEndReached();
      });
    }, {
      threshold: .5
    }), this.observer.observe(this.loadTrigger.nativeElement);
  }
  ngOnDestroy() {
    this.observer && this.observer.disconnect();
  }
});
