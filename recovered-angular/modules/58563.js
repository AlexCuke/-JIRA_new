// Extracted from main; webpack module 58563. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      e,
      a,
      m,
      d,
      b,
      A,
      N,
      I,
      O,
      L,
      C,
      v = {}.hasOwnProperty;
    C = i(3452), L = C.isObject, O = C.isFunction, I = C.isEmpty, d = null, t = null, e = null, a = null, m = null, A = null, N = null, b = null, Ae.exports = function () {
      function f(E) {
        this.parent = E, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], d || (d = i(43352), t = i(91361), e = i(92516), a = i(54789), m = i(99195), A = i(59942), N = i(20474), b = i(94666));
      }
      return f.prototype.element = function (E, h, x) {
        var u, R, B, y, j, W, F, Le, ke;
        if (j = null, null == h && (h = {}), h = h.valueOf(), L(h) || (x = (Le = [h, x])[0], h = Le[1]), null != E && (E = E.valueOf()), Array.isArray(E)) for (R = 0, W = E.length; R < W; R++) j = this.element(E[R]);else if (O(E)) j = this.element(E.apply());else if (L(E)) {
          for (y in E) if (v.call(E, y)) if (O(ke = E[y]) && (ke = ke.apply()), L(ke) && I(ke) && (ke = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === y.indexOf(this.stringify.convertAttKey)) j = this.attribute(y.substr(this.stringify.convertAttKey.length), ke);else if (!this.options.separateArrayItems && Array.isArray(ke)) for (B = 0, F = ke.length; B < F; B++) (u = {})[y] = ke[B], j = this.element(u);else L(ke) ? (j = this.element(y)).element(ke) : j = this.element(y, ke);
        } else j = !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === E.indexOf(this.stringify.convertTextKey) ? this.text(x) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === E.indexOf(this.stringify.convertCDataKey) ? this.cdata(x) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === E.indexOf(this.stringify.convertCommentKey) ? this.comment(x) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === E.indexOf(this.stringify.convertRawKey) ? this.raw(x) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === E.indexOf(this.stringify.convertPIKey) ? this.instruction(E.substr(this.stringify.convertPIKey.length), x) : this.node(E, h, x);
        if (null == j) throw new Error("Could not create any elements with: " + E);
        return j;
      }, f.prototype.insertBefore = function (E, h, x) {
        var u, T, R;
        if (this.isRoot) throw new Error("Cannot insert elements at root level");
        return T = this.parent.children.indexOf(this), R = this.parent.children.splice(T), u = this.parent.element(E, h, x), Array.prototype.push.apply(this.parent.children, R), u;
      }, f.prototype.insertAfter = function (E, h, x) {
        var u, T, R;
        if (this.isRoot) throw new Error("Cannot insert elements at root level");
        return T = this.parent.children.indexOf(this), R = this.parent.children.splice(T + 1), u = this.parent.element(E, h, x), Array.prototype.push.apply(this.parent.children, R), u;
      }, f.prototype.remove = function () {
        var E;
        if (this.isRoot) throw new Error("Cannot remove the root element");
        return E = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [E, E - E + 1].concat([])), this.parent;
      }, f.prototype.node = function (E, h, x) {
        var u, T;
        return null != E && (E = E.valueOf()), h || (h = {}), h = h.valueOf(), L(h) || (x = (T = [h, x])[0], h = T[1]), u = new d(this, E, h), null != x && u.text(x), this.children.push(u), u;
      }, f.prototype.text = function (E) {
        var h;
        return h = new N(this, E), this.children.push(h), this;
      }, f.prototype.cdata = function (E) {
        var h;
        return h = new t(this, E), this.children.push(h), this;
      }, f.prototype.comment = function (E) {
        var h;
        return h = new e(this, E), this.children.push(h), this;
      }, f.prototype.commentBefore = function (E) {
        var x, u;
        return x = this.parent.children.indexOf(this), u = this.parent.children.splice(x), this.parent.comment(E), Array.prototype.push.apply(this.parent.children, u), this;
      }, f.prototype.commentAfter = function (E) {
        var x, u;
        return x = this.parent.children.indexOf(this), u = this.parent.children.splice(x + 1), this.parent.comment(E), Array.prototype.push.apply(this.parent.children, u), this;
      }, f.prototype.raw = function (E) {
        var h;
        return h = new A(this, E), this.children.push(h), this;
      }, f.prototype.instruction = function (E, h) {
        var x, T, R, B;
        if (null != E && (E = E.valueOf()), null != h && (h = h.valueOf()), Array.isArray(E)) for (R = 0, B = E.length; R < B; R++) this.instruction(x = E[R]);else if (L(E)) for (x in E) v.call(E, x) && this.instruction(x, E[x]);else O(h) && (h = h.apply()), T = new b(this, E, h), this.children.push(T);
        return this;
      }, f.prototype.instructionBefore = function (E, h) {
        var u, T;
        return u = this.parent.children.indexOf(this), T = this.parent.children.splice(u), this.parent.instruction(E, h), Array.prototype.push.apply(this.parent.children, T), this;
      }, f.prototype.instructionAfter = function (E, h) {
        var u, T;
        return u = this.parent.children.indexOf(this), T = this.parent.children.splice(u + 1), this.parent.instruction(E, h), Array.prototype.push.apply(this.parent.children, T), this;
      }, f.prototype.declaration = function (E, h, x) {
        var u, T;
        return u = this.document(), T = new a(u, E, h, x), u.children[0] instanceof a ? u.children[0] = T : u.children.unshift(T), u.root() || u;
      }, f.prototype.doctype = function (E, h) {
        var u, T, R, B, y, j, W, F, Le;
        for (u = this.document(), T = new m(u, E, h), R = B = 0, j = (F = u.children).length; B < j; R = ++B) if (F[R] instanceof m) return u.children[R] = T, T;
        for (R = y = 0, W = (Le = u.children).length; y < W; R = ++y) if (Le[R].isRoot) return u.children.splice(R, 0, T), T;
        return u.children.push(T), T;
      }, f.prototype.up = function () {
        if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, f.prototype.root = function () {
        var E;
        for (E = this; E;) {
          if (E.isDocument) return E.rootObject;
          if (E.isRoot) return E;
          E = E.parent;
        }
      }, f.prototype.document = function () {
        var E;
        for (E = this; E;) {
          if (E.isDocument) return E;
          E = E.parent;
        }
      }, f.prototype.end = function (E) {
        return this.document().end(E);
      }, f.prototype.prev = function () {
        var E;
        if ((E = this.parent.children.indexOf(this)) < 1) throw new Error("Already at the first node");
        return this.parent.children[E - 1];
      }, f.prototype.next = function () {
        var E;
        if (-1 === (E = this.parent.children.indexOf(this)) || E === this.parent.children.length - 1) throw new Error("Already at the last node");
        return this.parent.children[E + 1];
      }, f.prototype.importDocument = function (E) {
        var h;
        return (h = E.root().clone()).parent = this, h.isRoot = !1, this.children.push(h), this;
      }, f.prototype.ele = function (E, h, x) {
        return this.element(E, h, x);
      }, f.prototype.nod = function (E, h, x) {
        return this.node(E, h, x);
      }, f.prototype.txt = function (E) {
        return this.text(E);
      }, f.prototype.dat = function (E) {
        return this.cdata(E);
      }, f.prototype.com = function (E) {
        return this.comment(E);
      }, f.prototype.ins = function (E, h) {
        return this.instruction(E, h);
      }, f.prototype.doc = function () {
        return this.document();
      }, f.prototype.dec = function (E, h, x) {
        return this.declaration(E, h, x);
      }, f.prototype.dtd = function (E, h) {
        return this.doctype(E, h);
      }, f.prototype.e = function (E, h, x) {
        return this.element(E, h, x);
      }, f.prototype.n = function (E, h, x) {
        return this.node(E, h, x);
      }, f.prototype.t = function (E) {
        return this.text(E);
      }, f.prototype.d = function (E) {
        return this.cdata(E);
      }, f.prototype.c = function (E) {
        return this.comment(E);
      }, f.prototype.r = function (E) {
        return this.raw(E);
      }, f.prototype.i = function (E, h) {
        return this.instruction(E, h);
      }, f.prototype.u = function () {
        return this.up();
      }, f.prototype.importXMLBuilder = function (E) {
        return this.importDocument(E);
      }, f;
    }();
  }).call(this);
});
