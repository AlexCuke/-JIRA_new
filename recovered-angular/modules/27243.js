// Extracted from main; webpack module 27243. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  var e = x(i(49721)),
    m = x(i(44070)),
    M = x(i(76162)),
    A = x(i(13800)),
    I = x(i(41731)),
    L = x(i(40070)),
    v = x(i(3930)),
    f = i(87497),
    h = x(i(97850));
  function x(F) {
    return F && F.__esModule ? F : {
      default: F
    };
  }
  var u = function () {},
    T = function (Le, ke, J) {
      var fe = new u();
      if (typeof Le > "u") throw Error("No element to render on was provided.");
      return fe._renderProperties = (0, I.default)(Le), fe._encodings = [], fe._options = h.default, fe._errorHandler = new v.default(fe), typeof ke < "u" && ((J = J || {}).format || (J.format = j()), fe.options(J)[J.format](ke, J).render()), fe;
    };
  for (var R in T.getModule = function (F) {
    return e.default[F];
  }, e.default) e.default.hasOwnProperty(R) && B(e.default, R);
  function B(F, Le) {
    u.prototype[Le] = u.prototype[Le.toUpperCase()] = u.prototype[Le.toLowerCase()] = function (ke, J) {
      var fe = this;
      return fe._errorHandler.wrapBarcodeCall(function () {
        J.text = typeof J.text > "u" ? void 0 : "" + J.text;
        var ye = (0, m.default)(fe._options, J);
        ye = (0, L.default)(ye);
        var Y = y(ke, F[Le], ye);
        return fe._encodings.push(Y), fe;
      });
    };
  }
  function y(F, Le, ke) {
    var J = new Le(F = "" + F, ke);
    if (!J.valid()) throw new f.InvalidInputException(J.constructor.name, F);
    var fe = J.encode();
    fe = (0, M.default)(fe);
    for (var ye = 0; ye < fe.length; ye++) fe[ye].options = (0, m.default)(ke, fe[ye].options);
    return fe;
  }
  function j() {
    return e.default.CODE128 ? "CODE128" : Object.keys(e.default)[0];
  }
  function W(F, Le, ke) {
    Le = (0, M.default)(Le);
    for (var J = 0; J < Le.length; J++) Le[J].options = (0, m.default)(ke, Le[J].options), (0, A.default)(Le[J].options);
    (0, A.default)(ke), new (0, F.renderer)(F.element, Le, ke).render(), F.afterRender && F.afterRender();
  }
  u.prototype.options = function (F) {
    return this._options = (0, m.default)(this._options, F), this;
  }, u.prototype.blank = function (F) {
    var Le = new Array(F + 1).join("0");
    return this._encodings.push({
      data: Le
    }), this;
  }, u.prototype.init = function () {
    var F;
    if (this._renderProperties) for (var Le in Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]), this._renderProperties) {
      var ke = (0, m.default)(this._options, (F = this._renderProperties[Le]).options);
      "auto" == ke.format && (ke.format = j()), this._errorHandler.wrapBarcodeCall(function () {
        var ye = y(ke.value, e.default[ke.format.toUpperCase()], ke);
        W(F, ye, ke);
      });
    }
  }, u.prototype.render = function () {
    if (!this._renderProperties) throw new f.NoElementException();
    if (Array.isArray(this._renderProperties)) for (var F = 0; F < this._renderProperties.length; F++) W(this._renderProperties[F], this._encodings, this._options);else W(this._renderProperties, this._encodings, this._options);
    return this;
  }, u.prototype._defaults = h.default, typeof window < "u" && (window.JsBarcode = T), typeof jQuery < "u" && (jQuery.fn.JsBarcode = function (F, Le) {
    var ke = [];
    return jQuery(this).each(function () {
      ke.push(this);
    }), T(ke, F, Le);
  }), Ae.exports = T;
});
