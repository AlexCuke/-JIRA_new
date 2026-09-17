// Extracted class; external identifiers resolve in modules/83151.js.
(class {
  constructor(Qn, In) {
    this.breakpointObserver = Qn, this.cdr = In, this.isTablet = !1;
  }
  ngOnInit() {
    this.breakpointObserver.observe(fe.o).subscribe(Qn => {
      this.isTablet = Qn.matches, this.cdr.markForCheck();
    });
  }
});
