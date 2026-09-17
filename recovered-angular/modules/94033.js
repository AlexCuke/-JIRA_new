// Extracted from main; webpack module 94033. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    c: () => M
  });
  var t = i(69751),
    e = i(50727),
    a = i(38343),
    m = i(25403),
    d = i(54482);
  class M extends t.y {
    constructor(A, N) {
      super(), this.source = A, this.subjectFactory = N, this._subject = null, this._refCount = 0, this._connection = null, (0, d.A)(A) && (this.lift = A.lift);
    }
    _subscribe(A) {
      return this.getSubject().subscribe(A);
    }
    getSubject() {
      const A = this._subject;
      return (!A || A.isStopped) && (this._subject = this.subjectFactory()), this._subject;
    }
    _teardown() {
      this._refCount = 0;
      const {
        _connection: A
      } = this;
      this._subject = this._connection = null, A?.unsubscribe();
    }
    connect() {
      let A = this._connection;
      if (!A) {
        A = this._connection = new e.w0();
        const N = this.getSubject();
        A.add(this.source.subscribe(new m.Q(N, void 0, () => {
          this._teardown(), N.complete();
        }, I => {
          this._teardown(), N.error(I);
        }, () => this._teardown()))), A.closed && (this._connection = null, A = e.w0.EMPTY);
      }
      return A;
    }
    refCount() {
      return (0, a.x)()(this);
    }
  }
});
