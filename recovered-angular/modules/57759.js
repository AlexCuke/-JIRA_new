// Extracted from main; webpack module 57759. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    Z: () => d
  });
  var t = i(5343),
    e = i(1520);
  if (typeof Promise > "u") throw Error("Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.");
  var a = !1;
  function m() {
    a || (a = !0, console.warn("[KEYCLOAK] Usage of legacy style promise methods such as `.error()` and `.success()` has been deprecated and support will be removed in future versions. Use standard style promise methods such as `.then() and `.catch()` instead."));
  }
  function d(M) {
    if (!(this instanceof d)) return new d(M);
    for (var A, I, b = this, N = [], O = {
        enable: !0,
        callbackList: [],
        interval: 5
      }, L = document.getElementsByTagName("script"), C = 0; C < L.length; C++) (-1 !== L[C].src.indexOf("keycloak.js") || -1 !== L[C].src.indexOf("keycloak.min.js")) && -1 !== L[C].src.indexOf("version=") && (b.iframeVersion = L[C].src.substring(L[C].src.indexOf("version=") + 8).split("&")[0]);
    var v = !0,
      f = We(console.info),
      E = We(console.warn);
    function u(Re, st) {
      for (var q = function h(Re) {
          var st = null,
            q = window.crypto || window.msCrypto;
          if (q && q.getRandomValues && window.Uint8Array) return st = new Uint8Array(Re), q.getRandomValues(st), st;
          st = new Array(Re);
          for (var mt = 0; mt < st.length; mt++) st[mt] = Math.floor(256 * Math.random());
          return st;
        }(Re), mt = new Array(Re), ut = 0; ut < Re; ut++) mt[ut] = st.charCodeAt(q[ut] % st.length);
      return String.fromCharCode.apply(null, mt);
    }
    function B() {
      if (typeof b.authServerUrl < "u") return "/" == b.authServerUrl.charAt(b.authServerUrl.length - 1) ? b.authServerUrl + "realms/" + encodeURIComponent(b.realm) : b.authServerUrl + "/realms/" + encodeURIComponent(b.realm);
    }
    function j(Re, st) {
      var q = Re.code,
        mt = Re.error,
        ut = Re.prompt,
        Ct = new Date().getTime();
      if (Re.kc_action_status && b.onActionUpdate && b.onActionUpdate(Re.kc_action_status), mt) {
        if ("none" != ut) {
          var Ft = {
            error: mt,
            error_description: Re.error_description
          };
          b.onAuthError && b.onAuthError(Ft), st && st.setError(Ft);
        } else st && st.setSuccess();
      } else if ("standard" != b.flow && (Re.access_token || Re.id_token) && Ke(Re.access_token, null, Re.id_token, !0), "implicit" != b.flow && q) {
        var Et = "code=" + q + "&grant_type=authorization_code",
          Ue = b.endpoints.token(),
          Me = new XMLHttpRequest();
        Me.open("POST", Ue, !0), Me.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Et += "&client_id=" + encodeURIComponent(b.clientId), Et += "&redirect_uri=" + Re.redirectUri, Re.pkceCodeVerifier && (Et += "&code_verifier=" + Re.pkceCodeVerifier), Me.withCredentials = !0, Me.onreadystatechange = function () {
          if (4 == Me.readyState) if (200 == Me.status) {
            var Ze = JSON.parse(Me.responseText);
            Ke(Ze.access_token, Ze.refresh_token, Ze.id_token, "standard" === b.flow), pe();
          } else b.onAuthError && b.onAuthError(), st && st.setError();
        }, Me.send(Et);
      }
      function Ke(Ze, Ee, je, Mt) {
        Le(Ze, Ee, je, Ct = (Ct + new Date().getTime()) / 2), v && (b.tokenParsed && b.tokenParsed.nonce != Re.storedNonce || b.refreshTokenParsed && b.refreshTokenParsed.nonce != Re.storedNonce || b.idTokenParsed && b.idTokenParsed.nonce != Re.storedNonce) ? (f("[KEYCLOAK] Invalid nonce, clearing token"), b.clearToken(), st && st.setError()) : Mt && (b.onAuthSuccess && b.onAuthSuccess(), st && st.setSuccess());
      }
    }
    function F(Re) {
      return 0 == Re.status && Re.responseText && Re.responseURL.startsWith("file:");
    }
    function Le(Re, st, q, mt) {
      if (b.tokenTimeoutHandle && (clearTimeout(b.tokenTimeoutHandle), b.tokenTimeoutHandle = null), st ? (b.refreshToken = st, b.refreshTokenParsed = ke(st)) : (delete b.refreshToken, delete b.refreshTokenParsed), q ? (b.idToken = q, b.idTokenParsed = ke(q)) : (delete b.idToken, delete b.idTokenParsed), Re) {
        if (b.token = Re, b.tokenParsed = ke(Re), b.sessionId = b.tokenParsed.session_state, b.authenticated = !0, b.subject = b.tokenParsed.sub, b.realmAccess = b.tokenParsed.realm_access, b.resourceAccess = b.tokenParsed.resource_access, mt && (b.timeSkew = Math.floor(mt / 1e3) - b.tokenParsed.iat), null != b.timeSkew && (f("[KEYCLOAK] Estimated time difference between browser and server is " + b.timeSkew + " seconds"), b.onTokenExpired)) {
          var ut = 1e3 * (b.tokenParsed.exp - new Date().getTime() / 1e3 + b.timeSkew);
          f("[KEYCLOAK] Token expires in " + Math.round(ut / 1e3) + " s"), ut <= 0 ? b.onTokenExpired() : b.tokenTimeoutHandle = setTimeout(b.onTokenExpired, ut);
        }
      } else delete b.token, delete b.tokenParsed, delete b.subject, delete b.realmAccess, delete b.resourceAccess, b.authenticated = !1;
    }
    function ke(Re) {
      switch ((Re = (Re = (Re = Re.split(".")[1]).replace(/-/g, "+")).replace(/_/g, "/")).length % 4) {
        case 0:
          break;
        case 2:
          Re += "==";
          break;
        case 3:
          Re += "=";
          break;
        default:
          throw "Invalid token";
      }
      return Re = decodeURIComponent(escape(atob(Re))), JSON.parse(Re);
    }
    function J() {
      var Re = "0123456789abcdef",
        st = u(36, Re).split("");
      return st[14] = "4", st[19] = Re.substr(3 & st[19] | 8, 1), st[8] = st[13] = st[18] = st[23] = "-", st.join("");
    }
    function fe(Re) {
      var st = function ye(Re) {
        var st;
        switch (b.flow) {
          case "standard":
            st = ["code", "state", "session_state", "kc_action_status"];
            break;
          case "implicit":
            st = ["access_token", "token_type", "id_token", "state", "session_state", "expires_in", "kc_action_status"];
            break;
          case "hybrid":
            st = ["access_token", "token_type", "id_token", "code", "state", "session_state", "expires_in", "kc_action_status"];
        }
        st.push("error"), st.push("error_description"), st.push("error_uri");
        var ut,
          Ct,
          q = Re.indexOf("?"),
          mt = Re.indexOf("#");
        if ("query" === b.responseMode && -1 !== q ? (ut = Re.substring(0, q), "" !== (Ct = ae(Re.substring(q + 1, -1 !== mt ? mt : Re.length), st)).paramsString && (ut += "?" + Ct.paramsString), -1 !== mt && (ut += Re.substring(mt))) : "fragment" === b.responseMode && -1 !== mt && (ut = Re.substring(0, mt), "" !== (Ct = ae(Re.substring(mt + 1), st)).paramsString && (ut += "#" + Ct.paramsString)), Ct && Ct.oauthParams) if ("standard" === b.flow || "hybrid" === b.flow) {
          if ((Ct.oauthParams.code || Ct.oauthParams.error) && Ct.oauthParams.state) return Ct.oauthParams.newUrl = ut, Ct.oauthParams;
        } else if ("implicit" === b.flow && (Ct.oauthParams.access_token || Ct.oauthParams.error) && Ct.oauthParams.state) return Ct.oauthParams.newUrl = ut, Ct.oauthParams;
      }(Re);
      if (st) {
        var q = I.get(st.state);
        return q && (st.valid = !0, st.redirectUri = q.redirectUri, st.storedNonce = q.nonce, st.prompt = q.prompt, st.pkceCodeVerifier = q.pkceCodeVerifier), st;
      }
    }
    function ae(Re, st) {
      for (var q = Re.split("&"), mt = {
          paramsString: "",
          oauthParams: {}
        }, ut = 0; ut < q.length; ut++) {
        var Ct = q[ut].indexOf("="),
          Ft = q[ut].slice(0, Ct);
        -1 !== st.indexOf(Ft) ? mt.oauthParams[Ft] = q[ut].slice(Ct + 1) : ("" !== mt.paramsString && (mt.paramsString += "&"), mt.paramsString += q[ut]);
      }
      return mt;
    }
    function Y() {
      var Re = {
        setSuccess: function (st) {
          Re.resolve(st);
        },
        setError: function (st) {
          Re.reject(st);
        }
      };
      return Re.promise = new Promise(function (st, q) {
        Re.resolve = st, Re.reject = q;
      }), Re.promise.success = function (st) {
        return m(), this.then(function (mt) {
          st(mt);
        }), this;
      }, Re.promise.error = function (st) {
        return m(), this.catch(function (mt) {
          st(mt);
        }), this;
      }, Re;
    }
    function te() {
      var Re = Y();
      if (!O.enable || O.iframe) return Re.setSuccess(), Re.promise;
      var st = document.createElement("iframe");
      O.iframe = st, st.onload = function () {
        var ut = b.endpoints.authorize();
        O.iframeOrigin = "/" === ut.charAt(0) ? function y() {
          return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }() : ut.substring(0, ut.indexOf("/", 8)), Re.setSuccess();
      };
      var q = b.endpoints.checkSessionIframe();
      return st.setAttribute("src", q), st.setAttribute("title", "keycloak-session-iframe"), st.style.display = "none", document.body.appendChild(st), window.addEventListener("message", function (ut) {
        if (ut.origin === O.iframeOrigin && O.iframe.contentWindow === ut.source && ("unchanged" == ut.data || "changed" == ut.data || "error" == ut.data)) {
          "unchanged" != ut.data && b.clearToken();
          for (var Ct = O.callbackList.splice(0, O.callbackList.length), Ft = Ct.length - 1; Ft >= 0; --Ft) {
            var Et = Ct[Ft];
            "error" == ut.data ? Et.setError() : Et.setSuccess("unchanged" == ut.data);
          }
        }
      }, !1), Re.promise;
    }
    function pe() {
      O.enable && b.token && setTimeout(function () {
        be().then(function (Re) {
          Re && pe();
        });
      }, 1e3 * O.interval);
    }
    function be() {
      var Re = Y();
      if (O.iframe && O.iframeOrigin) {
        var st = b.clientId + " " + (b.sessionId ? b.sessionId : "");
        O.callbackList.push(Re), 1 == O.callbackList.length && O.iframe.contentWindow.postMessage(st, O.iframeOrigin);
      } else Re.setSuccess();
      return Re.promise;
    }
    function le() {
      var Re = Y();
      if (O.enable || b.silentCheckSsoRedirectUri) {
        var st = document.createElement("iframe");
        st.setAttribute("src", b.endpoints.thirdPartyCookiesIframe()), st.setAttribute("title", "keycloak-3p-check-iframe"), st.style.display = "none", document.body.appendChild(st);
        var q = function (mt) {
          st.contentWindow === mt.source && ("supported" !== mt.data && "unsupported" !== mt.data || ("unsupported" === mt.data && (O.enable = !1, b.silentCheckSsoFallback && (b.silentCheckSsoRedirectUri = !1), E("[KEYCLOAK] 3rd party cookies aren't supported by this browser. checkLoginIframe and silent check-sso are not available.")), document.body.removeChild(st), window.removeEventListener("message", q), Re.setSuccess()));
        };
        window.addEventListener("message", q, !1);
      } else Re.setSuccess();
      return function G(Re, st, q) {
        var mt = null,
          ut = new Promise(function (Ct, Ft) {
            mt = setTimeout(function () {
              Ft({
                error: q || "Promise is not settled within timeout of " + st + "ms"
              });
            }, st);
          });
        return Promise.race([Re, ut]).finally(function () {
          clearTimeout(mt);
        });
      }(Re.promise, b.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
    }
    function n(Re) {
      if (!Re || "default" == Re) return {
        login: function (Ct) {
          return window.location.replace(b.createLoginUrl(Ct)), Y().promise;
        },
        logout: function (Ct) {
          return window.location.replace(b.createLogoutUrl(Ct)), Y().promise;
        },
        register: function (Ct) {
          return window.location.replace(b.createRegisterUrl(Ct)), Y().promise;
        },
        accountManagement: function () {
          var Ct = b.createAccountUrl();
          if (!(typeof Ct < "u")) throw "Not supported by the OIDC server";
          return window.location.href = Ct, Y().promise;
        },
        redirectUri: function (Ct, Ft) {
          return Ct && Ct.redirectUri ? Ct.redirectUri : b.redirectUri ? b.redirectUri : location.href;
        }
      };
      if ("cordova" == Re) {
        O.enable = !1;
        var st = function (Ct, Ft, Et) {
            return window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(Ct, Ft, Et) : window.open(Ct, Ft, Et);
          },
          ut = function (Ct) {
            var Ft = function (Ct) {
              return Ct && Ct.cordovaOptions ? Object.keys(Ct.cordovaOptions).reduce(function (Ft, Et) {
                return Ft[Et] = Ct.cordovaOptions[Et], Ft;
              }, {}) : {};
            }(Ct);
            return Ft.location = "no", Ct && "none" == Ct.prompt && (Ft.hidden = "yes"), function (Ct) {
              return Object.keys(Ct).reduce(function (Ft, Et) {
                return Ft.push(Et + "=" + Ct[Et]), Ft;
              }, []).join(",");
            }(Ft);
          };
        return {
          login: function (Ct) {
            var Ft = Y(),
              Et = ut(Ct),
              Ue = b.createLoginUrl(Ct),
              Me = st(Ue, "_blank", Et),
              Ke = !1,
              Ze = !1,
              Ee = function () {
                Ze = !0, Me.close();
              };
            return Me.addEventListener("loadstart", function (je) {
              0 == je.url.indexOf("http://localhost") && (j(fe(je.url), Ft), Ee(), Ke = !0);
            }), Me.addEventListener("loaderror", function (je) {
              Ke || (0 == je.url.indexOf("http://localhost") ? (j(fe(je.url), Ft), Ee(), Ke = !0) : (Ft.setError(), Ee()));
            }), Me.addEventListener("exit", function (je) {
              Ze || Ft.setError({
                reason: "closed_by_user"
              });
            }), Ft.promise;
          },
          logout: function (Ct) {
            var Me,
              Ft = Y(),
              Et = b.createLogoutUrl(Ct),
              Ue = st(Et, "_blank", "location=no,hidden=yes,clearcache=yes");
            return Ue.addEventListener("loadstart", function (Ke) {
              0 == Ke.url.indexOf("http://localhost") && Ue.close();
            }), Ue.addEventListener("loaderror", function (Ke) {
              0 == Ke.url.indexOf("http://localhost") || (Me = !0), Ue.close();
            }), Ue.addEventListener("exit", function (Ke) {
              Me ? Ft.setError() : (b.clearToken(), Ft.setSuccess());
            }), Ft.promise;
          },
          register: function (Ct) {
            var Ft = Y(),
              Et = b.createRegisterUrl(),
              Ue = ut(Ct),
              Me = st(Et, "_blank", Ue);
            return Me.addEventListener("loadstart", function (Ke) {
              0 == Ke.url.indexOf("http://localhost") && (Me.close(), j(fe(Ke.url), Ft));
            }), Ft.promise;
          },
          accountManagement: function () {
            var Ct = b.createAccountUrl();
            if (!(typeof Ct < "u")) throw "Not supported by the OIDC server";
            var Ft = st(Ct, "_blank", "location=no");
            Ft.addEventListener("loadstart", function (Et) {
              0 == Et.url.indexOf("http://localhost") && Ft.close();
            });
          },
          redirectUri: function (Ct) {
            return "http://localhost";
          }
        };
      }
      if ("cordova-native" == Re) return O.enable = !1, {
        login: function (Ct) {
          var Ft = Y(),
            Et = b.createLoginUrl(Ct);
          return universalLinks.subscribe("keycloak", function (Ue) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), j(fe(Ue.url), Ft);
          }), window.cordova.plugins.browsertab.openUrl(Et), Ft.promise;
        },
        logout: function (Ct) {
          var Ft = Y(),
            Et = b.createLogoutUrl(Ct);
          return universalLinks.subscribe("keycloak", function (Ue) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), b.clearToken(), Ft.setSuccess();
          }), window.cordova.plugins.browsertab.openUrl(Et), Ft.promise;
        },
        register: function (Ct) {
          var Ft = Y(),
            Et = b.createRegisterUrl(Ct);
          return universalLinks.subscribe("keycloak", function (Ue) {
            universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), j(fe(Ue.url), Ft);
          }), window.cordova.plugins.browsertab.openUrl(Et), Ft.promise;
        },
        accountManagement: function () {
          var Ct = b.createAccountUrl();
          if (!(typeof Ct < "u")) throw "Not supported by the OIDC server";
          window.cordova.plugins.browsertab.openUrl(Ct);
        },
        redirectUri: function (Ct) {
          return Ct && Ct.redirectUri ? Ct.redirectUri : b.redirectUri ? b.redirectUri : "http://localhost";
        }
      };
      throw "invalid adapter type: " + Re;
    }
    b.init = function (Re) {
      if (b.authenticated = !1, I = function Rt() {
        try {
          return new Se();
        } catch {}
        return new qe();
      }(), A = Re && ["default", "cordova", "cordova-native"].indexOf(Re.adapter) > -1 ? n(Re.adapter) : Re && "object" == typeof Re.adapter ? Re.adapter : window.Cordova || window.cordova ? n("cordova") : n(), Re) {
        if (typeof Re.useNonce < "u" && (v = Re.useNonce), typeof Re.checkLoginIframe < "u" && (O.enable = Re.checkLoginIframe), Re.checkLoginIframeInterval && (O.interval = Re.checkLoginIframeInterval), "login-required" === Re.onLoad && (b.loginRequired = !0), Re.responseMode) {
          if ("query" !== Re.responseMode && "fragment" !== Re.responseMode) throw "Invalid value for responseMode";
          b.responseMode = Re.responseMode;
        }
        if (Re.flow) {
          switch (Re.flow) {
            case "standard":
              b.responseType = "code";
              break;
            case "implicit":
              b.responseType = "id_token token";
              break;
            case "hybrid":
              b.responseType = "code id_token token";
              break;
            default:
              throw "Invalid value for flow";
          }
          b.flow = Re.flow;
        }
        if (null != Re.timeSkew && (b.timeSkew = Re.timeSkew), Re.redirectUri && (b.redirectUri = Re.redirectUri), Re.silentCheckSsoRedirectUri && (b.silentCheckSsoRedirectUri = Re.silentCheckSsoRedirectUri), b.silentCheckSsoFallback = "boolean" != typeof Re.silentCheckSsoFallback || Re.silentCheckSsoFallback, Re.pkceMethod) {
          if ("S256" !== Re.pkceMethod) throw "Invalid value for pkceMethod";
          b.pkceMethod = Re.pkceMethod;
        }
        b.enableLogging = "boolean" == typeof Re.enableLogging && Re.enableLogging, "string" == typeof Re.scope && (b.scope = Re.scope), b.messageReceiveTimeout = "number" == typeof Re.messageReceiveTimeout && Re.messageReceiveTimeout > 0 ? Re.messageReceiveTimeout : 1e4;
      }
      b.responseMode || (b.responseMode = "fragment"), b.responseType || (b.responseType = "code", b.flow = "standard");
      var q = Y(),
        mt = Y();
      mt.promise.then(function () {
        b.onReady && b.onReady(b.authenticated), q.setSuccess(b.authenticated);
      }).catch(function (Ue) {
        q.setError(Ue);
      });
      var ut = function W(Re) {
        var q,
          st = Y();
        function mt(Me) {
          b.endpoints = Me ? {
            authorize: function () {
              return Me.authorization_endpoint;
            },
            token: function () {
              return Me.token_endpoint;
            },
            logout: function () {
              if (!Me.end_session_endpoint) throw "Not supported by the OIDC server";
              return Me.end_session_endpoint;
            },
            checkSessionIframe: function () {
              if (!Me.check_session_iframe) throw "Not supported by the OIDC server";
              return Me.check_session_iframe;
            },
            register: function () {
              throw "Redirection to \"Register user\" page not supported in standard OIDC mode";
            },
            userinfo: function () {
              if (!Me.userinfo_endpoint) throw "Not supported by the OIDC server";
              return Me.userinfo_endpoint;
            }
          } : {
            authorize: function () {
              return B() + "/protocol/openid-connect/auth";
            },
            token: function () {
              return B() + "/protocol/openid-connect/token";
            },
            logout: function () {
              return B() + "/protocol/openid-connect/logout";
            },
            checkSessionIframe: function () {
              var Ke = B() + "/protocol/openid-connect/login-status-iframe.html";
              return b.iframeVersion && (Ke = Ke + "?version=" + b.iframeVersion), Ke;
            },
            thirdPartyCookiesIframe: function () {
              var Ke = B() + "/protocol/openid-connect/3p-cookies/step1.html";
              return b.iframeVersion && (Ke = Ke + "?version=" + b.iframeVersion), Ke;
            },
            register: function () {
              return B() + "/protocol/openid-connect/registrations";
            },
            userinfo: function () {
              return B() + "/protocol/openid-connect/userinfo";
            }
          };
        }
        if (M ? "string" == typeof M && (q = M) : q = "keycloak.json", q) (ut = new XMLHttpRequest()).open("GET", q, !0), ut.setRequestHeader("Accept", "application/json"), ut.onreadystatechange = function () {
          if (4 == ut.readyState) if (200 == ut.status || F(ut)) {
            var Me = JSON.parse(ut.responseText);
            b.authServerUrl = Me["auth-server-url"], b.realm = Me.realm, b.clientId = Me.resource, mt(null), st.setSuccess();
          } else st.setError();
        }, ut.send();else {
          if (!M.clientId) throw "clientId missing";
          b.clientId = M.clientId;
          var Ct = M.oidcProvider;
          if (Ct) {
            if ("string" == typeof Ct) {
              var Ue, ut;
              Ue = "/" == Ct.charAt(Ct.length - 1) ? Ct + ".well-known/openid-configuration" : Ct + "/.well-known/openid-configuration", (ut = new XMLHttpRequest()).open("GET", Ue, !0), ut.setRequestHeader("Accept", "application/json"), ut.onreadystatechange = function () {
                4 == ut.readyState && (200 == ut.status || F(ut) ? (mt(JSON.parse(ut.responseText)), st.setSuccess()) : st.setError());
              }, ut.send();
            } else mt(Ct), st.setSuccess();
          } else {
            if (!M.url) for (var Ft = document.getElementsByTagName("script"), Et = 0; Et < Ft.length; Et++) if (Ft[Et].src.match(/.*keycloak\.js/)) {
              M.url = Ft[Et].src.substr(0, Ft[Et].src.indexOf("/js/keycloak.js"));
              break;
            }
            if (!M.realm) throw "realm missing";
            b.authServerUrl = M.url, b.realm = M.realm, mt(null), st.setSuccess();
          }
        }
        return st.promise;
      }();
      function Ct() {
        var Ue = function (Ze) {
            Ze || (Ke.prompt = "none"), b.login(Ke).then(function () {
              mt.setSuccess();
            }).catch(function (Ee) {
              mt.setError(Ee);
            });
          },
          Me = function () {
            var Ze = document.createElement("iframe"),
              Ee = b.createLoginUrl({
                prompt: "none",
                redirectUri: b.silentCheckSsoRedirectUri
              });
            Ze.setAttribute("src", Ee), Ze.setAttribute("title", "keycloak-silent-check-sso"), Ze.style.display = "none", document.body.appendChild(Ze);
            var je = function (Mt) {
              Mt.origin === window.location.origin && Ze.contentWindow === Mt.source && (j(fe(Mt.data), mt), document.body.removeChild(Ze), window.removeEventListener("message", je));
            };
            window.addEventListener("message", je);
          },
          Ke = {};
        switch (Re.onLoad) {
          case "check-sso":
            O.enable ? te().then(function () {
              be().then(function (Ze) {
                Ze ? mt.setSuccess() : b.silentCheckSsoRedirectUri ? Me() : Ue(!1);
              }).catch(function (Ze) {
                mt.setError(Ze);
              });
            }) : b.silentCheckSsoRedirectUri ? Me() : Ue(!1);
            break;
          case "login-required":
            Ue(!0);
            break;
          default:
            throw "Invalid value for onLoad";
        }
      }
      function Ft() {
        var Ue = fe(window.location.href);
        if (Ue && window.history.replaceState(window.history.state, null, Ue.newUrl), Ue && Ue.valid) return te().then(function () {
          j(Ue, mt);
        }).catch(function (Me) {
          mt.setError(Me);
        });
        Re ? Re.token && Re.refreshToken ? (Le(Re.token, Re.refreshToken, Re.idToken), O.enable ? te().then(function () {
          be().then(function (Me) {
            Me ? (b.onAuthSuccess && b.onAuthSuccess(), mt.setSuccess(), pe()) : mt.setSuccess();
          }).catch(function (Me) {
            mt.setError(Me);
          });
        }) : b.updateToken(-1).then(function () {
          b.onAuthSuccess && b.onAuthSuccess(), mt.setSuccess();
        }).catch(function (Me) {
          b.onAuthError && b.onAuthError(), Re.onLoad ? Ct() : mt.setError(Me);
        })) : Re.onLoad ? Ct() : mt.setSuccess() : mt.setSuccess();
      }
      return ut.then(function () {
        (function Et() {
          var Ue = Y(),
            Me = function () {
              ("interactive" === document.readyState || "complete" === document.readyState) && (document.removeEventListener("readystatechange", Me), Ue.setSuccess());
            };
          return document.addEventListener("readystatechange", Me), Me(), Ue.promise;
        })().then(le).then(Ft).catch(function (Ue) {
          q.setError(Ue);
        });
      }), ut.catch(function (Ue) {
        q.setError(Ue);
      }), q.promise;
    }, b.login = function (Re) {
      return A.login(Re);
    }, b.createLoginUrl = function (Re) {
      var Ct,
        st = J(),
        q = J(),
        mt = A.redirectUri(Re),
        ut = {
          state: st,
          nonce: q,
          redirectUri: encodeURIComponent(mt)
        };
      Re && Re.prompt && (ut.prompt = Re.prompt), Ct = Re && "register" == Re.action ? b.endpoints.register() : b.endpoints.authorize();
      var Ft = Re && Re.scope || b.scope;
      Ft ? -1 === Ft.indexOf("openid") && (Ft = "openid " + Ft) : Ft = "openid";
      var Et = Ct + "?client_id=" + encodeURIComponent(b.clientId) + "&redirect_uri=" + encodeURIComponent(mt) + "&state=" + encodeURIComponent(st) + "&response_mode=" + encodeURIComponent(b.responseMode) + "&response_type=" + encodeURIComponent(b.responseType) + "&scope=" + encodeURIComponent(Ft);
      if (v && (Et = Et + "&nonce=" + encodeURIComponent(q)), Re && Re.prompt && (Et += "&prompt=" + encodeURIComponent(Re.prompt)), Re && Re.maxAge && (Et += "&max_age=" + encodeURIComponent(Re.maxAge)), Re && Re.loginHint && (Et += "&login_hint=" + encodeURIComponent(Re.loginHint)), Re && Re.idpHint && (Et += "&kc_idp_hint=" + encodeURIComponent(Re.idpHint)), Re && Re.action && "register" != Re.action && (Et += "&kc_action=" + encodeURIComponent(Re.action)), Re && Re.locale && (Et += "&ui_locales=" + encodeURIComponent(Re.locale)), Re && Re.acr) {
        var Ue = function R(Re) {
          return JSON.stringify({
            id_token: {
              acr: Re
            }
          });
        }(Re.acr);
        Et += "&claims=" + encodeURIComponent(Ue);
      }
      if (b.pkceMethod) {
        var Me = function x(Re) {
          return u(Re, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
        }(96);
        ut.pkceCodeVerifier = Me;
        var Ke = function T(Re, st) {
          if ("S256" === Re) {
            var q = new Uint8Array(e.arrayBuffer(st));
            return t.fromByteArray(q).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
          }
          throw "Invalid value for pkceMethod";
        }(b.pkceMethod, Me);
        Et += "&code_challenge=" + Ke, Et += "&code_challenge_method=" + b.pkceMethod;
      }
      return I.add(ut), Et;
    }, b.logout = function (Re) {
      return A.logout(Re);
    }, b.createLogoutUrl = function (Re) {
      var st = b.endpoints.logout() + "?client_id=" + encodeURIComponent(b.clientId) + "&post_logout_redirect_uri=" + encodeURIComponent(A.redirectUri(Re, !1));
      return b.idToken && (st += "&id_token_hint=" + encodeURIComponent(b.idToken)), st;
    }, b.register = function (Re) {
      return A.register(Re);
    }, b.createRegisterUrl = function (Re) {
      return Re || (Re = {}), Re.action = "register", b.createLoginUrl(Re);
    }, b.createAccountUrl = function (Re) {
      var st = B(),
        q = void 0;
      return typeof st < "u" && (q = st + "/account?referrer=" + encodeURIComponent(b.clientId) + "&referrer_uri=" + encodeURIComponent(A.redirectUri(Re))), q;
    }, b.accountManagement = function () {
      return A.accountManagement();
    }, b.hasRealmRole = function (Re) {
      var st = b.realmAccess;
      return !!st && st.roles.indexOf(Re) >= 0;
    }, b.hasResourceRole = function (Re, st) {
      if (!b.resourceAccess) return !1;
      var q = b.resourceAccess[st || b.clientId];
      return !!q && q.roles.indexOf(Re) >= 0;
    }, b.loadUserProfile = function () {
      var Re = B() + "/account",
        st = new XMLHttpRequest();
      st.open("GET", Re, !0), st.setRequestHeader("Accept", "application/json"), st.setRequestHeader("Authorization", "bearer " + b.token);
      var q = Y();
      return st.onreadystatechange = function () {
        4 == st.readyState && (200 == st.status ? (b.profile = JSON.parse(st.responseText), q.setSuccess(b.profile)) : q.setError());
      }, st.send(), q.promise;
    }, b.loadUserInfo = function () {
      var Re = b.endpoints.userinfo(),
        st = new XMLHttpRequest();
      st.open("GET", Re, !0), st.setRequestHeader("Accept", "application/json"), st.setRequestHeader("Authorization", "bearer " + b.token);
      var q = Y();
      return st.onreadystatechange = function () {
        4 == st.readyState && (200 == st.status ? (b.userInfo = JSON.parse(st.responseText), q.setSuccess(b.userInfo)) : q.setError());
      }, st.send(), q.promise;
    }, b.isTokenExpired = function (Re) {
      if (!b.tokenParsed || !b.refreshToken && "implicit" != b.flow) throw "Not authenticated";
      if (null == b.timeSkew) return f("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"), !0;
      var st = b.tokenParsed.exp - Math.ceil(new Date().getTime() / 1e3) + b.timeSkew;
      if (Re) {
        if (isNaN(Re)) throw "Invalid minValidity";
        st -= Re;
      }
      return st < 0;
    }, b.updateToken = function (Re) {
      var st = Y();
      if (!b.refreshToken) return st.setError(), st.promise;
      Re = Re || 5;
      var q = function () {
        var ut = !1;
        if (-1 == Re ? (ut = !0, f("[KEYCLOAK] Refreshing token: forced refresh")) : (!b.tokenParsed || b.isTokenExpired(Re)) && (ut = !0, f("[KEYCLOAK] Refreshing token: token expired")), ut) {
          var Ct = "grant_type=refresh_token&refresh_token=" + b.refreshToken,
            Ft = b.endpoints.token();
          if (N.push(st), 1 == N.length) {
            var Et = new XMLHttpRequest();
            Et.open("POST", Ft, !0), Et.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Et.withCredentials = !0, Ct += "&client_id=" + encodeURIComponent(b.clientId);
            var Ue = new Date().getTime();
            Et.onreadystatechange = function () {
              if (4 == Et.readyState) if (200 == Et.status) {
                f("[KEYCLOAK] Token refreshed"), Ue = (Ue + new Date().getTime()) / 2;
                var Me = JSON.parse(Et.responseText);
                Le(Me.access_token, Me.refresh_token, Me.id_token, Ue), b.onAuthRefreshSuccess && b.onAuthRefreshSuccess();
                for (var Ke = N.pop(); null != Ke; Ke = N.pop()) Ke.setSuccess(!0);
              } else for (E("[KEYCLOAK] Failed to refresh token"), 400 == Et.status && b.clearToken(), b.onAuthRefreshError && b.onAuthRefreshError(), Ke = N.pop(); null != Ke; Ke = N.pop()) Ke.setError(!0);
            }, Et.send(Ct);
          }
        } else st.setSuccess(!1);
      };
      return O.enable ? be().then(function () {
        q();
      }).catch(function (ut) {
        st.setError(ut);
      }) : q(), st.promise;
    }, b.clearToken = function () {
      b.token && (Le(null, null, null), b.onAuthLogout && b.onAuthLogout(), b.loginRequired && b.login());
    };
    var Se = function () {
        if (!(this instanceof Se)) return new Se();
        function st() {
          for (var q = new Date().getTime(), mt = 0; mt < localStorage.length; mt++) {
            var ut = localStorage.key(mt);
            if (ut && 0 == ut.indexOf("kc-callback-")) {
              var Ct = localStorage.getItem(ut);
              if (Ct) try {
                var Ft = JSON.parse(Ct).expires;
                (!Ft || Ft < q) && localStorage.removeItem(ut);
              } catch {
                localStorage.removeItem(ut);
              }
            }
          }
        }
        localStorage.setItem("kc-test", "test"), localStorage.removeItem("kc-test"), this.get = function (q) {
          if (q) {
            var mt = "kc-callback-" + q,
              ut = localStorage.getItem(mt);
            return ut && (localStorage.removeItem(mt), ut = JSON.parse(ut)), st(), ut;
          }
        }, this.add = function (q) {
          st();
          var mt = "kc-callback-" + q.state;
          q.expires = new Date().getTime() + 36e5, localStorage.setItem(mt, JSON.stringify(q));
        };
      },
      qe = function () {
        if (!(this instanceof qe)) return new qe();
        this.get = function (ut) {
          if (ut) {
            var Ct = q("kc-callback-" + ut);
            if (mt("kc-callback-" + ut, "", st(-100)), Ct) return JSON.parse(Ct);
          }
        }, this.add = function (ut) {
          mt("kc-callback-" + ut.state, JSON.stringify(ut), st(60));
        }, this.removeItem = function (ut) {
          mt(ut, "", st(-100));
        };
        var st = function (ut) {
            var Ct = new Date();
            return Ct.setTime(Ct.getTime() + 60 * ut * 1e3), Ct;
          },
          q = function (ut) {
            for (var Ct = ut + "=", Ft = document.cookie.split(";"), Et = 0; Et < Ft.length; Et++) {
              for (var Ue = Ft[Et]; " " == Ue.charAt(0);) Ue = Ue.substring(1);
              if (0 == Ue.indexOf(Ct)) return Ue.substring(Ct.length, Ue.length);
            }
            return "";
          },
          mt = function (ut, Ct, Ft) {
            var Et = ut + "=" + Ct + "; expires=" + Ft.toUTCString() + "; ";
            document.cookie = Et;
          };
      };
    function We(Re) {
      return function () {
        b.enableLogging && Re.apply(console, Array.prototype.slice.call(arguments));
      };
    }
  }
});
