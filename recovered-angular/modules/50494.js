// Extracted from main; webpack module 50494. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    zb: () => O,
    yE: () => v
  });
  var t = i(31061),
    e = i(91415);
  class M {
    constructor(B, y) {
      this.transformationType = B, this.options = y, this.recursionStack = new Set();
    }
    transform(B, y, j, W, F, Le = 0) {
      if (Array.isArray(y) || y instanceof Set) {
        const ke = W && this.transformationType === e.h.PLAIN_TO_CLASS ? function d(R) {
          const B = new R();
          return B instanceof Set || "push" in B ? B : [];
        }(W) : [];
        return y.forEach((J, fe) => {
          const ye = B ? B[fe] : void 0;
          if (this.options.enableCircularCheck && this.isCircular(J)) this.transformationType === e.h.CLASS_TO_CLASS && (ke instanceof Set ? ke.add(J) : ke.push(J));else {
            let ae;
            if ("function" != typeof j && j && j.options && j.options.discriminator && j.options.discriminator.property && j.options.discriminator.subTypes) {
              if (this.transformationType === e.h.PLAIN_TO_CLASS) {
                ae = j.options.discriminator.subTypes.find(pe => pe.name === J[j.options.discriminator.property]);
                const te = j.typeFunction({
                  newObject: ke,
                  object: J,
                  property: void 0
                });
                ae = void 0 === ae ? te : ae.value, j.options.keepDiscriminatorProperty || delete J[j.options.discriminator.property];
              }
              this.transformationType === e.h.CLASS_TO_CLASS && (ae = J.constructor), this.transformationType === e.h.CLASS_TO_PLAIN && (J[j.options.discriminator.property] = j.options.discriminator.subTypes.find(G => G.value === J.constructor).name);
            } else ae = j;
            const Y = this.transform(ye, J, ae, void 0, J instanceof Map, Le + 1);
            ke instanceof Set ? ke.add(Y) : ke.push(Y);
          }
        }), ke;
      }
      if (j === String && !F) return null == y ? y : String(y);
      if (j === Number && !F) return null == y ? y : Number(y);
      if (j === Boolean && !F) return null == y ? y : Boolean(y);
      if ((j === Date || y instanceof Date) && !F) return y instanceof Date ? new Date(y.valueOf()) : null == y ? y : new Date(y);
      if (function a() {
        return typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : void 0;
      }().Buffer && (j === Buffer || y instanceof Buffer) && !F) return null == y ? y : Buffer.from(y);
      if (function m(R) {
        return null !== R && "object" == typeof R && "function" == typeof R.then;
      }(y) && !F) return new Promise((ke, J) => {
        y.then(fe => ke(this.transform(void 0, fe, j, void 0, void 0, Le + 1)), J);
      });
      if (!F && null !== y && "object" == typeof y && "function" == typeof y.then) return y;
      if ("object" == typeof y && null !== y) {
        !j && y.constructor !== Object && (!Array.isArray(y) && y.constructor === Array || (j = y.constructor)), !j && B && (j = B.constructor), this.options.enableCircularCheck && this.recursionStack.add(y);
        const ke = this.getKeys(j, y, F);
        let J = B || {};
        !B && (this.transformationType === e.h.PLAIN_TO_CLASS || this.transformationType === e.h.CLASS_TO_CLASS) && (J = F ? new Map() : j ? new j() : {});
        for (const fe of ke) {
          if ("__proto__" === fe || "constructor" === fe) continue;
          const ye = fe;
          let G,
            ae = fe,
            Y = fe;
          if (!this.options.ignoreDecorators && j) if (this.transformationType === e.h.PLAIN_TO_CLASS) {
            const n = t.m.findExposeMetadataByCustomName(j, fe);
            n && (Y = n.propertyName, ae = n.propertyName);
          } else if (this.transformationType === e.h.CLASS_TO_PLAIN || this.transformationType === e.h.CLASS_TO_CLASS) {
            const n = t.m.findExposeMetadata(j, fe);
            n && n.options && n.options.name && (ae = n.options.name);
          }
          G = this.transformationType === e.h.PLAIN_TO_CLASS ? y[ye] : y instanceof Map ? y.get(ye) : y[ye] instanceof Function ? y[ye]() : y[ye];
          let te,
            pe = G instanceof Map;
          if (j && F) te = j;else if (j) {
            const n = t.m.findTypeMetadata(j, Y);
            if (n) {
              const qe = n.typeFunction ? n.typeFunction({
                newObject: J,
                object: y,
                property: Y
              }) : n.reflectedType;
              n.options && n.options.discriminator && n.options.discriminator.property && n.options.discriminator.subTypes ? y[ye] instanceof Array ? te = n : (this.transformationType === e.h.PLAIN_TO_CLASS && (te = n.options.discriminator.subTypes.find(Rt => {
                if (G && G instanceof Object && n.options.discriminator.property in G) return Rt.name === G[n.options.discriminator.property];
              }), te = void 0 === te ? qe : te.value, n.options.keepDiscriminatorProperty || G && G instanceof Object && n.options.discriminator.property in G && delete G[n.options.discriminator.property]), this.transformationType === e.h.CLASS_TO_CLASS && (te = G.constructor), this.transformationType === e.h.CLASS_TO_PLAIN && G && (G[n.options.discriminator.property] = n.options.discriminator.subTypes.find(Rt => Rt.value === G.constructor).name)) : te = qe, pe = pe || n.reflectedType === Map;
            } else if (this.options.targetMaps) this.options.targetMaps.filter(Se => Se.target === j && !!Se.properties[Y]).forEach(Se => te = Se.properties[Y]);else if (this.options.enableImplicitConversion && this.transformationType === e.h.PLAIN_TO_CLASS) {
              const Se = Reflect.getMetadata("design:type", j.prototype, Y);
              Se && (te = Se);
            }
          }
          const be = Array.isArray(y[ye]) ? this.getReflectedType(j, Y) : void 0,
            le = B ? B[ye] : void 0;
          if (J.constructor.prototype) {
            const n = Object.getOwnPropertyDescriptor(J.constructor.prototype, ae);
            if ((this.transformationType === e.h.PLAIN_TO_CLASS || this.transformationType === e.h.CLASS_TO_CLASS) && (n && !n.set || J[ae] instanceof Function)) continue;
          }
          if (this.options.enableCircularCheck && this.isCircular(G)) {
            if (this.transformationType === e.h.CLASS_TO_CLASS) {
              let n = G;
              n = this.applyCustomTransformations(n, j, fe, y, this.transformationType), (void 0 !== n || this.options.exposeUnsetFields) && (J instanceof Map ? J.set(ae, n) : J[ae] = n);
            }
          } else {
            const n = this.transformationType === e.h.PLAIN_TO_CLASS ? ae : fe;
            let Se;
            this.transformationType === e.h.CLASS_TO_PLAIN ? (Se = y[n], Se = this.applyCustomTransformations(Se, j, n, y, this.transformationType), Se = y[n] === Se ? G : Se, Se = this.transform(le, Se, te, be, pe, Le + 1)) : void 0 === G && this.options.exposeDefaultValues ? Se = J[ae] : (Se = this.transform(le, G, te, be, pe, Le + 1), Se = this.applyCustomTransformations(Se, j, n, y, this.transformationType)), (void 0 !== Se || this.options.exposeUnsetFields) && (J instanceof Map ? J.set(ae, Se) : J[ae] = Se);
          }
        }
        return this.options.enableCircularCheck && this.recursionStack.delete(y), J;
      }
      return y;
    }
    applyCustomTransformations(B, y, j, W, F) {
      let Le = t.m.findTransformMetadatas(y, j, this.transformationType);
      return void 0 !== this.options.version && (Le = Le.filter(ke => !ke.options || this.checkVersion(ke.options.since, ke.options.until))), Le = Le.filter(this.options.groups && this.options.groups.length ? ke => !ke.options || this.checkGroups(ke.options.groups) : ke => !ke.options || !ke.options.groups || !ke.options.groups.length), Le.forEach(ke => {
        B = ke.transformFn({
          value: B,
          key: j,
          obj: W,
          type: F,
          options: this.options
        });
      }), B;
    }
    isCircular(B) {
      return this.recursionStack.has(B);
    }
    getReflectedType(B, y) {
      if (!B) return;
      const j = t.m.findTypeMetadata(B, y);
      return j ? j.reflectedType : void 0;
    }
    getKeys(B, y, j) {
      let W = t.m.getStrategy(B);
      "none" === W && (W = this.options.strategy || "exposeAll");
      let F = [];
      if (("exposeAll" === W || j) && (F = y instanceof Map ? Array.from(y.keys()) : Object.keys(y)), j) return F;
      if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && B && (F = [...t.m.getExposedProperties(B, this.transformationType), ...t.m.getExcludedProperties(B, this.transformationType)]), !this.options.ignoreDecorators && B) {
        let Le = t.m.getExposedProperties(B, this.transformationType);
        this.transformationType === e.h.PLAIN_TO_CLASS && (Le = Le.map(J => {
          const fe = t.m.findExposeMetadata(B, J);
          return fe && fe.options && fe.options.name ? fe.options.name : J;
        })), F = this.options.excludeExtraneousValues ? Le : F.concat(Le);
        const ke = t.m.getExcludedProperties(B, this.transformationType);
        ke.length > 0 && (F = F.filter(J => !ke.includes(J))), void 0 !== this.options.version && (F = F.filter(J => {
          const fe = t.m.findExposeMetadata(B, J);
          return !fe || !fe.options || this.checkVersion(fe.options.since, fe.options.until);
        })), F = F.filter(this.options.groups && this.options.groups.length ? J => {
          const fe = t.m.findExposeMetadata(B, J);
          return !fe || !fe.options || this.checkGroups(fe.options.groups);
        } : J => {
          const fe = t.m.findExposeMetadata(B, J);
          return !(fe && fe.options && fe.options.groups && fe.options.groups.length);
        });
      }
      return this.options.excludePrefixes && this.options.excludePrefixes.length && (F = F.filter(Le => this.options.excludePrefixes.every(ke => Le.substr(0, ke.length) !== ke))), F = F.filter((Le, ke, J) => J.indexOf(Le) === ke), F;
    }
    checkVersion(B, y) {
      let j = !0;
      return j && B && (j = this.options.version >= B), j && y && (j = this.options.version < y), j;
    }
    checkGroups(B) {
      return !B || this.options.groups.some(y => B.includes(y));
    }
  }
  const b = {
      enableCircularCheck: !1,
      enableImplicitConversion: !1,
      excludeExtraneousValues: !1,
      excludePrefixes: void 0,
      exposeDefaultValues: !1,
      exposeUnsetFields: !0,
      groups: void 0,
      ignoreDecorators: !1,
      strategy: void 0,
      targetMaps: void 0,
      version: void 0
    },
    N = new class A {
      instanceToPlain(B, y) {
        return new M(e.h.CLASS_TO_PLAIN, {
          ...b,
          ...y
        }).transform(void 0, B, void 0, void 0, void 0, void 0);
      }
      classToPlainFromExist(B, y, j) {
        return new M(e.h.CLASS_TO_PLAIN, {
          ...b,
          ...j
        }).transform(y, B, void 0, void 0, void 0, void 0);
      }
      plainToInstance(B, y, j) {
        return new M(e.h.PLAIN_TO_CLASS, {
          ...b,
          ...j
        }).transform(void 0, y, B, void 0, void 0, void 0);
      }
      plainToClassFromExist(B, y, j) {
        return new M(e.h.PLAIN_TO_CLASS, {
          ...b,
          ...j
        }).transform(B, y, void 0, void 0, void 0, void 0);
      }
      instanceToInstance(B, y) {
        return new M(e.h.CLASS_TO_CLASS, {
          ...b,
          ...y
        }).transform(void 0, B, void 0, void 0, void 0, void 0);
      }
      classToClassFromExist(B, y, j) {
        return new M(e.h.CLASS_TO_CLASS, {
          ...b,
          ...j
        }).transform(y, B, void 0, void 0, void 0, void 0);
      }
      serialize(B, y) {
        return JSON.stringify(this.instanceToPlain(B, y));
      }
      deserialize(B, y, j) {
        const W = JSON.parse(y);
        return this.plainToInstance(B, W, j);
      }
      deserializeArray(B, y, j) {
        const W = JSON.parse(y);
        return this.plainToInstance(B, W, j);
      }
    }();
  function O(R, B) {
    return N.instanceToPlain(R, B);
  }
  function v(R, B, y) {
    return N.plainToInstance(R, B, y);
  }
});
