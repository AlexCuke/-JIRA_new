// Extracted from main; webpack module 41025. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    M: () => d
  });
  var t = i(57759);
  class e {
    static getValue(A) {
      return (window.env || {})[A];
    }
  }
  var a = i(94650);
  const m = {
      realm: e.getValue("apiKeycloakRealm"),
      url: e.getValue("apiKeycloakUrl"),
      clientId: e.getValue("apiKeycloakClientId"),
      tokenMinValidityTime: e.getValue("apiKeycloakTokenMinValidityTime")
    },
    M = class {
      constructor() {
        this.keycloak = new t.Z(m);
      }
      initPromise() {
        return this.keycloak.init({
          onLoad: "login-required",
          checkLoginIframe: !1
        }).then(A => (console.log("Keycloak инициализирован", {
          authenticated: A,
          token: this.keycloak.token
        }), A)).catch(A => {
          throw console.error("Ошибка инициализации Keycloak:", A), A;
        });
      }
      get ehrTokenKey() {
        return e.getValue("apiKeyEhr");
      }
      get token() {
        return this.keycloak.token;
      }
      get isAuthorized() {
        return !!this.keycloak.authenticated;
      }
      updateToken() {
        return this.keycloak.updateToken(-1).then(() => {
          if (!this.keycloak.token) throw new Error("No token available after update");
          return this.keycloak.token;
        }).catch(() => {
          throw this.keycloak.login(), new Error("Token update failed, redirecting to login");
        });
      }
    };
  let d = M;
  M.ɵfac = function (N) {
    return new (N || M)();
  }, M.ɵprov = a.Yz7({
    token: M,
    factory: M.ɵfac,
    providedIn: "root"
  });
});
