// Extracted from main; webpack module 71105. Factory, not an ES module.
(function (Ae, V, i) {
  (function () {
    var t,
      e,
      a,
      m,
      d,
      M,
      b,
      A,
      N,
      O,
      L,
      C,
      v,
      f,
      E,
      h,
      x,
      u,
      T,
      R = {}.hasOwnProperty;
    T = i(3452), x = T.isObject, h = T.isFunction, u = T.isPlainObject, O = i(43352), e = i(91361), a = i(92516), C = i(59942), E = i(20474), L = i(94666), A = i(54789), N = i(99195), m = i(97274), M = i(8349), d = i(32068), b = i(33087), t = i(25968), f = i(85041), v = i(34354), Ae.exports = function () {
      function B(y, j, W) {
        y || (y = {}), y.writer ? u(y.writer) && (y.writer = new v(y.writer)) : y.writer = new v(y), this.options = y, this.writer = y.writer, this.stringify = new f(y), this.onDataCallback = j || function () {}, this.onEndCallback = W || function () {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return B.prototype.node = function (y, j, W) {
        var F;
        if (null == y) throw new Error("Missing node name");
        if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node");
        return this.openCurrent(), y = y.valueOf(), null == j && (j = {}), j = j.valueOf(), x(j) || (W = (F = [j, W])[0], j = F[1]), this.currentNode = new O(this, y, j), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != W && this.text(W), this;
      }, B.prototype.element = function (y, j, W) {
        return this.currentNode && this.currentNode instanceof N ? this.dtdElement.apply(this, arguments) : this.node(y, j, W);
      }, B.prototype.attribute = function (y, j) {
        var W;
        if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode");
        if (null != y && (y = y.valueOf()), x(y)) for (W in y) R.call(y, W) && this.attribute(W, y[W]);else h(j) && (j = j.apply()), (!this.options.skipNullAttributes || null != j) && (this.currentNode.attributes[y] = new t(this, y, j));
        return this;
      }, B.prototype.text = function (y) {
        var j;
        return this.openCurrent(), j = new E(this, y), this.onData(this.writer.text(j, this.currentLevel + 1)), this;
      }, B.prototype.cdata = function (y) {
        var j;
        return this.openCurrent(), j = new e(this, y), this.onData(this.writer.cdata(j, this.currentLevel + 1)), this;
      }, B.prototype.comment = function (y) {
        var j;
        return this.openCurrent(), j = new a(this, y), this.onData(this.writer.comment(j, this.currentLevel + 1)), this;
      }, B.prototype.raw = function (y) {
        var j;
        return this.openCurrent(), j = new C(this, y), this.onData(this.writer.raw(j, this.currentLevel + 1)), this;
      }, B.prototype.instruction = function (y, j) {
        var W, F, ke, J;
        if (this.openCurrent(), null != y && (y = y.valueOf()), null != j && (j = j.valueOf()), Array.isArray(y)) for (W = 0, ke = y.length; W < ke; W++) this.instruction(F = y[W]);else if (x(y)) for (F in y) R.call(y, F) && this.instruction(F, y[F]);else h(j) && (j = j.apply()), J = new L(this, y, j), this.onData(this.writer.processingInstruction(J, this.currentLevel + 1));
        return this;
      }, B.prototype.declaration = function (y, j, W) {
        var F;
        if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node");
        return F = new A(this, y, j, W), this.onData(this.writer.declaration(F, this.currentLevel + 1)), this;
      }, B.prototype.doctype = function (y, j, W) {
        if (this.openCurrent(), null == y) throw new Error("Missing root node name");
        if (this.root) throw new Error("dtd() must come before the root node");
        return this.currentNode = new N(this, j, W), this.currentNode.rootNodeName = y, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, B.prototype.dtdElement = function (y, j) {
        var W;
        return this.openCurrent(), W = new d(this, y, j), this.onData(this.writer.dtdElement(W, this.currentLevel + 1)), this;
      }, B.prototype.attList = function (y, j, W, F, Le) {
        var ke;
        return this.openCurrent(), ke = new m(this, y, j, W, F, Le), this.onData(this.writer.dtdAttList(ke, this.currentLevel + 1)), this;
      }, B.prototype.entity = function (y, j) {
        var W;
        return this.openCurrent(), W = new M(this, !1, y, j), this.onData(this.writer.dtdEntity(W, this.currentLevel + 1)), this;
      }, B.prototype.pEntity = function (y, j) {
        var W;
        return this.openCurrent(), W = new M(this, !0, y, j), this.onData(this.writer.dtdEntity(W, this.currentLevel + 1)), this;
      }, B.prototype.notation = function (y, j) {
        var W;
        return this.openCurrent(), W = new b(this, y, j), this.onData(this.writer.dtdNotation(W, this.currentLevel + 1)), this;
      }, B.prototype.up = function () {
        if (this.currentLevel < 0) throw new Error("The document node has no parent");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, B.prototype.end = function () {
        for (; this.currentLevel >= 0;) this.up();
        return this.onEnd();
      }, B.prototype.openCurrent = function () {
        if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, B.prototype.openNode = function (y) {
        if (!y.isOpen) return !this.root && 0 === this.currentLevel && y instanceof O && (this.root = y), this.onData(this.writer.openNode(y, this.currentLevel)), y.isOpen = !0;
      }, B.prototype.closeNode = function (y) {
        if (!y.isClosed) return this.onData(this.writer.closeNode(y, this.currentLevel)), y.isClosed = !0;
      }, B.prototype.onData = function (y) {
        return this.documentStarted = !0, this.onDataCallback(y);
      }, B.prototype.onEnd = function () {
        return this.documentCompleted = !0, this.onEndCallback();
      }, B.prototype.ele = function () {
        return this.element.apply(this, arguments);
      }, B.prototype.nod = function (y, j, W) {
        return this.node(y, j, W);
      }, B.prototype.txt = function (y) {
        return this.text(y);
      }, B.prototype.dat = function (y) {
        return this.cdata(y);
      }, B.prototype.com = function (y) {
        return this.comment(y);
      }, B.prototype.ins = function (y, j) {
        return this.instruction(y, j);
      }, B.prototype.dec = function (y, j, W) {
        return this.declaration(y, j, W);
      }, B.prototype.dtd = function (y, j, W) {
        return this.doctype(y, j, W);
      }, B.prototype.e = function (y, j, W) {
        return this.element(y, j, W);
      }, B.prototype.n = function (y, j, W) {
        return this.node(y, j, W);
      }, B.prototype.t = function (y) {
        return this.text(y);
      }, B.prototype.d = function (y) {
        return this.cdata(y);
      }, B.prototype.c = function (y) {
        return this.comment(y);
      }, B.prototype.r = function (y) {
        return this.raw(y);
      }, B.prototype.i = function (y, j) {
        return this.instruction(y, j);
      }, B.prototype.att = function () {
        return this.currentNode && this.currentNode instanceof N ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, B.prototype.a = function () {
        return this.currentNode && this.currentNode instanceof N ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, B.prototype.ent = function (y, j) {
        return this.entity(y, j);
      }, B.prototype.pent = function (y, j) {
        return this.pEntity(y, j);
      }, B.prototype.not = function (y, j) {
        return this.notation(y, j);
      }, B;
    }();
  }).call(this);
});
