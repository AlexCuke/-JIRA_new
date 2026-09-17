// Extracted from main; webpack module 37340. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    IO: () => f,
    LC: () => e,
    SB: () => N,
    X$: () => m,
    ZE: () => u,
    ZN: () => x,
    _j: () => t,
    eR: () => O,
    jt: () => d,
    k1: () => T,
    l3: () => a,
    oB: () => A,
    ru: () => M,
    vP: () => b
  });
  class t {}
  class e {}
  const a = "*";
  function m(R, B) {
    return {
      type: 7,
      name: R,
      definitions: B,
      options: {}
    };
  }
  function d(R, B = null) {
    return {
      type: 4,
      styles: B,
      timings: R
    };
  }
  function M(R, B = null) {
    return {
      type: 3,
      steps: R,
      options: B
    };
  }
  function b(R, B = null) {
    return {
      type: 2,
      steps: R,
      options: B
    };
  }
  function A(R) {
    return {
      type: 6,
      styles: R,
      offset: null
    };
  }
  function N(R, B, y) {
    return {
      type: 0,
      name: R,
      styles: B,
      options: y
    };
  }
  function O(R, B, y = null) {
    return {
      type: 1,
      expr: R,
      animation: B,
      options: y
    };
  }
  function f(R, B, y = null) {
    return {
      type: 11,
      selector: R,
      animation: B,
      options: y
    };
  }
  function h(R) {
    Promise.resolve().then(R);
  }
  class x {
    constructor(B = 0, y = 0) {
      this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = B + y;
    }
    _onFinish() {
      this._finished || (this._finished = !0, this._onDoneFns.forEach(B => B()), this._onDoneFns = []);
    }
    onStart(B) {
      this._originalOnStartFns.push(B), this._onStartFns.push(B);
    }
    onDone(B) {
      this._originalOnDoneFns.push(B), this._onDoneFns.push(B);
    }
    onDestroy(B) {
      this._onDestroyFns.push(B);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0;
    }
    triggerMicrotask() {
      h(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach(B => B()), this._onStartFns = [];
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(B => B()), this._onDestroyFns = []);
    }
    reset() {
      this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns;
    }
    setPosition(B) {
      this._position = this.totalTime ? B * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(B) {
      const y = "start" == B ? this._onStartFns : this._onDoneFns;
      y.forEach(j => j()), y.length = 0;
    }
  }
  class u {
    constructor(B) {
      this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = B;
      let y = 0,
        j = 0,
        W = 0;
      const F = this.players.length;
      0 == F ? h(() => this._onFinish()) : this.players.forEach(Le => {
        Le.onDone(() => {
          ++y == F && this._onFinish();
        }), Le.onDestroy(() => {
          ++j == F && this._onDestroy();
        }), Le.onStart(() => {
          ++W == F && this._onStart();
        });
      }), this.totalTime = this.players.reduce((Le, ke) => Math.max(Le, ke.totalTime), 0);
    }
    _onFinish() {
      this._finished || (this._finished = !0, this._onDoneFns.forEach(B => B()), this._onDoneFns = []);
    }
    init() {
      this.players.forEach(B => B.init());
    }
    onStart(B) {
      this._onStartFns.push(B);
    }
    _onStart() {
      this.hasStarted() || (this._started = !0, this._onStartFns.forEach(B => B()), this._onStartFns = []);
    }
    onDone(B) {
      this._onDoneFns.push(B);
    }
    onDestroy(B) {
      this._onDestroyFns.push(B);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(), this._onStart(), this.players.forEach(B => B.play());
    }
    pause() {
      this.players.forEach(B => B.pause());
    }
    restart() {
      this.players.forEach(B => B.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach(B => B.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(B => B.destroy()), this._onDestroyFns.forEach(B => B()), this._onDestroyFns = []);
    }
    reset() {
      this.players.forEach(B => B.reset()), this._destroyed = !1, this._finished = !1, this._started = !1;
    }
    setPosition(B) {
      const y = B * this.totalTime;
      this.players.forEach(j => {
        const W = j.totalTime ? Math.min(1, y / j.totalTime) : 1;
        j.setPosition(W);
      });
    }
    getPosition() {
      const B = this.players.reduce((y, j) => null === y || j.totalTime > y.totalTime ? j : y, null);
      return null != B ? B.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach(B => {
        B.beforeDestroy && B.beforeDestroy();
      });
    }
    triggerCallback(B) {
      const y = "start" == B ? this._onStartFns : this._onDoneFns;
      y.forEach(j => j()), y.length = 0;
    }
  }
  const T = "!";
});
