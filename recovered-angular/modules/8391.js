// Extracted from main; webpack module 8391. Factory, not an ES module.
((Ae, V, i) => {
  "use strict";

  i.d(V, {
    O4: () => C,
    SW: () => E,
    oo: () => f
  });
  var t = i(97582),
    e = i(94650),
    a = i(58435),
    m = i(68675),
    d = i(54004),
    M = i(63900),
    b = i(4707),
    A = i(77579),
    N = i(11848),
    I = i(15635),
    O = i(44348);
  const L = new Map();
  function C(h, x) {
    const u = new e.OlP(`LUCIDUS LOCALE TOKEN ${h} ${Math.random()}`);
    return L.set(h, u), {
      provide: u,
      useValue: x
    };
  }
  let f = (() => {
      class h {
        constructor(u) {
          this.injector = u, this.locale = null, this.changeLocale = new b.t(1);
        }
        get localeChanges() {
          return this.changeLocale.asObservable();
        }
        get currentLocale() {
          return this.locale;
        }
        setLocale(u) {
          this.locale = u, this.loadLocale(u), this.changeLocale.next(u);
        }
        getTranslation(u, T) {
          const B = u.split(".").reduce((y, j) => y ? y[j] : void 0, this.localeObject);
          return (0, I.HD)(B) ? Object.keys(T || {}).reduce((y, j) => y.replace(new RegExp(`{{${j}}}`, "g"), T ? T[j] : ""), B) : null;
        }
        get(u, T) {
          return this.localeChanges.pipe((0, m.O)(null), (0, d.U)(() => this.getTranslation(u, T)));
        }
        loadLocale(u) {
          const T = function v(h) {
            return L.get(h) || null;
          }(u);
          if (!T) throw O.vE.error(`\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c ${u}`);
          this.localeObject = this.injector.get(T);
        }
      }
      return h.ɵfac = function (u) {
        return new (u || h)(e.LFG(e.zs3));
      }, h.ɵprov = e.Yz7({
        token: h,
        factory: h.ɵfac,
        providedIn: "root"
      }), h;
    })(),
    E = (() => {
      let h = class {
        constructor(u) {
          this.localeService = u, this.locale = "en-US", this.dateLocale = null, this.localeChanges$ = new A.x(), this.localeService.localeChanges.pipe((0, m.O)(this.localeService.currentLocale), (0, M.w)(T => (0, I.EN)(T) ? this.loadLocale(T).pipe((0, d.U)(R => ({
            locale: T,
            dateLocale: R
          }))) : N.C), (0, a.t)(this)).subscribe(T => {
            this.locale = T.locale, this.dateLocale = T.dateLocale, this.localeChanges$.next(this.dateLocale);
          });
        }
        get localeChanges() {
          return this.localeChanges$.asObservable();
        }
        getDate(u) {
          return this.toDate(this.clone(u)).getDate();
        }
        getDay(u) {
          return this.toDate(this.clone(u)).getDay();
        }
        getMonth(u) {
          return this.toDate(this.clone(u)).getMonth();
        }
        getYear(u) {
          return this.toDate(this.clone(u)).getFullYear();
        }
        isSameDay(u, T) {
          return this.getYear(u) === this.getYear(T) && this.getMonth(u) === this.getMonth(T) && this.getDate(u) === this.getDate(T);
        }
        isSameMonth(u, T) {
          return this.getYear(u) === this.getYear(T) && this.getMonth(u) === this.getMonth(T);
        }
        isSameYear(u, T) {
          return this.getYear(u) === this.getYear(T);
        }
        isBefore(u, T) {
          return this.toDate(u) < this.toDate(T);
        }
        isAfter(u, T) {
          return this.toDate(u) > this.toDate(T);
        }
        isWeekend(u) {
          return [0, 6].includes(this.toDate(u).getDay());
        }
        isToday(u) {
          return this.isSameDay(u, this.today());
        }
        isBetween(u, T, R) {
          return this.isAfter(u, T) && this.isBefore(u, R) || this.isSameDay(u, T) || this.isSameDay(u, R);
        }
        addUnit(u, T, R) {
          switch (T) {
            case "year":
              return this.addYears(u, R);
            case "month":
              return this.addMonths(u, R);
            case "week":
              return this.addDays(u, 7 * R);
            default:
              return this.addDays(u, R);
          }
        }
        diffInUnit(u, T) {
          switch (T) {
            case "year":
              return this.diffInYears(u);
            case "month":
              return this.diffInMonths(u);
            case "week":
              return this.diffInWeeks(u);
            default:
              return this.diffInDays(u);
          }
        }
      };
      return h.ɵfac = function (u) {
        return new (u || h)(e.LFG(f));
      }, h.ɵprov = e.Yz7({
        token: h,
        factory: h.ɵfac
      }), h = (0, t.gn)([(0, a.c)()], h), h;
    })();
});
