// Extracted from main; webpack module 64477. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    w: () => b
  });
  var t = i(36895),
    e = i(94650),
    a = i(77579),
    m = i(39453);
  const d = {
      maxGapMs: 80,
      maxAverageGapMs: 35,
      idleFinishMs: 120,
      ignoreEditableTargets: !0
    },
    M = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
    A = class {
      constructor(I) {
        this.document = I, this.manageScanner$ = new a.x(), this.options = d, this.buffer = "", this.gaps = [], this.lastTime = 0, this.lastTarget = null, this.idleTimer = null, this.removeListener = null, this.scanSubject = new a.x(), this.scan$ = this.scanSubject.asObservable(), this.zone = (0, e.f3M)(e.R0b);
      }
      start(I = {}) {
        this.stop(), this.options = {
          ...d,
          ...I
        }, this.zone.runOutsideAngular(() => {
          const O = L => this.handleKeydown(L);
          this.document.addEventListener("keydown", O, !0), this.removeListener = () => {
            this.document.removeEventListener("keydown", O, !0);
          };
        });
      }
      stop() {
        this.removeListener?.(), this.removeListener = null, this.reset();
      }
      ngOnDestroy() {
        this.stop(), this.scanSubject.complete();
      }
      handleKeydown(I) {
        if (I.ctrlKey || I.altKey || I.metaKey) return void this.reset();
        if (1 !== I.key.length) return;
        const O = performance.now();
        if (this.lastTime > 0) {
          const L = O - this.lastTime;
          L > this.options.maxGapMs ? this.reset() : this.gaps.push(L);
        }
        I.isTrusted && (this.buffer += I.key, this.lastTime = O, this.lastTarget = I.target), this.restartIdleTimer();
      }
      restartIdleTimer() {
        this.clearIdleTimer(), this.idleTimer = setTimeout(() => {
          this.finish();
        }, this.options.idleFinishMs);
      }
      finish() {
        this.clearIdleTimer();
        const I = this.fixKeyboardLayout(this.buffer),
          O = this.lastTarget;
        this.isLikelyScannerInput() && this.isUuid(I) && !this.shouldIgnoreTarget(O) && this.zone.run(() => {
          this.scanSubject.next({
            value: I,
            target: O
          });
        }), this.reset();
      }
      isLikelyScannerInput() {
        return 0 !== this.gaps.length && this.gaps.reduce((O, L) => O + L, 0) / this.gaps.length <= this.options.maxAverageGapMs;
      }
      isUuid(I) {
        return M.test(I);
      }
      shouldIgnoreTarget(I) {
        return !!this.options.ignoreEditableTargets && !!I && (I instanceof HTMLInputElement || I instanceof HTMLTextAreaElement || I.isContentEditable);
      }
      fixKeyboardLayout(I) {
        return (0, m.FF)(I);
      }
      reset() {
        this.buffer = "", this.gaps = [], this.lastTime = 0, this.lastTarget = null, this.clearIdleTimer();
      }
      clearIdleTimer() {
        this.idleTimer && (clearTimeout(this.idleTimer), this.idleTimer = null);
      }
    };
  let b = A;
  A.ɵfac = function (O) {
    return new (O || A)(e.LFG(t.K0));
  }, A.ɵprov = e.Yz7({
    token: A,
    factory: A.ɵfac
  });
});
