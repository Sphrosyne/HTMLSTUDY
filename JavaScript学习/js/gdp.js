!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).gdp =
        t());
})(this, function () {
  "use strict";
  const e = ["web", "wxwv", "minp", "alip", "baidup", "qq", "bytedance"],
    t = {
      autotrack: { type: "boolean", default: !0 },
      compress: { type: "boolean", default: !0 },
      dataCollect: { type: "boolean", default: !0 },
      debug: { type: "boolean", default: !1 },
      hashtag: { type: "boolean", default: !1 },
      touch: { type: "boolean", default: !1 },
      version: { type: "string", default: "1.0.0" },
      platform: { type: "string", default: "web" },
      cookieDomain: { type: "string", default: "" },
      sendType: { type: "string", default: "beacon" },
    },
    i = {
      enableIdMapping: { type: "boolean", default: !1 },
      gtouchHost: { type: "string", default: "" },
      host: { type: "string", default: "napi.growingio.com" },
      ignoreFields: { type: "array", default: [] },
      penetrateHybrid: { type: "boolean", default: !0 },
      scheme: {
        type: "string",
        default:
          location.protocol.indexOf("http") > -1
            ? location.protocol.replace(":", "")
            : "https",
      },
      sessionExpires: { type: "number", default: 30 },
      performance: { type: "object", default: { monitor: !0, exception: !0 } },
      embeddedIgnore: { type: "array", default: [] },
      storageType: { type: "string", default: "cookie" },
      requestTimeout: { type: "number", default: 5e3 },
    },
    s = {},
    o = [
      "clearUserId",
      "getGioInfo",
      "getLocation",
      "getOption",
      "init",
      "setDataCollect",
      "setOption",
      "setUserId",
      "track",
      "setGeneralProps",
      "clearGeneralProps",
      "enableDebug",
      "enableHT",
      "setAutotrack",
      "setTrackerHost",
      "setTrackerScheme",
      "setUserAttributes",
      "getVisitorId",
      "getDeviceId",
      "registerPlugins",
      "getPlugins",
      "sendPage",
      "sendVisit",
      "trackTimerStart",
      "trackTimerPause",
      "trackTimerResume",
      "trackTimerEnd",
      "removeTimer",
      "clearTrackTimer",
      "updateImpression",
    ],
    r = [
      "autotrack",
      "dataCollect",
      "dataSourceId",
      "debug",
      "host",
      "hashtag",
      "scheme",
    ],
    n = { autotrack: "无埋点采集", dataCollect: "数据采集", debug: "调试模式" },
    a = ["send", "setConfig", "collectImp", "setPlatformProfile"],
    d = ["screenHeight", "screenWidth"];
  var l,
    g,
    h,
    c,
    u,
    m =
      "function" == typeof Array.from
        ? Array.from
        : (g ||
            ((g = 1),
            (h = function (e) {
              return "function" == typeof e;
            }),
            (c = function (e) {
              var t = (function (e) {
                var t = Number(e);
                return isNaN(t)
                  ? 0
                  : 0 !== t && isFinite(t)
                  ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                  : t;
              })(e);
              return Math.min(Math.max(t, 0), 9007199254740991);
            }),
            (u = function (e) {
              var t = e.next();
              return !t.done && t;
            }),
            (l = function (e) {
              var t,
                i,
                s,
                o = this,
                r = arguments.length > 1 ? arguments[1] : void 0;
              if (void 0 !== r) {
                if (!h(r))
                  throw new TypeError(
                    "Array.from: when provided, the second argument must be a function"
                  );
                arguments.length > 2 && (t = arguments[2]);
              }
              var n = (function (e, t) {
                if (null != e && null != t) {
                  var i = e[t];
                  if (null == i) return;
                  if (!h(i)) throw new TypeError(i + " is not a function");
                  return i;
                }
              })(
                e,
                (function (e) {
                  if (null != e) {
                    if (
                      ["string", "number", "boolean", "symbol"].indexOf(
                        typeof e
                      ) > -1
                    )
                      return Symbol.iterator;
                    if (
                      "undefined" != typeof Symbol &&
                      "iterator" in Symbol &&
                      Symbol.iterator in e
                    )
                      return Symbol.iterator;
                    if ("@@iterator" in e) return "@@iterator";
                  }
                })(e)
              );
              if (void 0 !== n) {
                i = h(o) ? Object(new o()) : [];
                var a,
                  d,
                  l = n.call(e);
                if (null == l)
                  throw new TypeError(
                    "Array.from requires an array-like or iterable object"
                  );
                for (s = 0; ; ) {
                  if (!(a = u(l))) return (i.length = s), i;
                  (d = a.value), (i[s] = r ? r.call(t, d, s) : d), s++;
                }
              } else {
                var g = Object(e);
                if (null == e)
                  throw new TypeError(
                    "Array.from requires an array-like object - not null or undefined"
                  );
                var m,
                  p = c(g.length);
                for (i = h(o) ? Object(new o(p)) : Array(p), s = 0; p > s; )
                  (m = g[s]), (i[s] = r ? r.call(t, m, s) : m), s++;
                i.length = p;
              }
              return i;
            })),
          l);
  const p = (e) => j(["undefined", "null"], V(e)),
    I = (e) => "string" === V(e),
    v = (e) => "number" === V(e),
    f = (e) => "NaN" === N(Number(e)),
    w = (e) => "object" === V(e) && !p(e),
    y = (e) => "regexp" === V(e),
    S = (e) => j(["function", "asyncfunction"], V(e)),
    O = (e) => Array.isArray(e) && "array" === V(e),
    b = (e) => "date" === V(e),
    E = (e) => {
      try {
        return q(e)[0];
      } catch (e) {
        return;
      }
    },
    T = (e) => {
      try {
        const t = q(e);
        return t[t.length - 1];
      } catch (e) {
        return;
      }
    },
    _ = (e, t = 1) => (O(e) && v(t) ? e.slice(t > 0 ? t : 1, e.length) : e),
    C = (e) => {
      if (O(e)) {
        let t = 0;
        const i = [];
        for (const s of e) s && !H(s) && (i[t++] = s);
        return i;
      }
      return e;
    },
    x = (e, t) => e[k(e, t)],
    k = (e, t) => {
      let i = -1;
      return O(e) && e.every((e, s) => !t(e) || ((i = s), !1)), i;
    },
    j = (e, t) => ("array" === V(e) || "string" === V(e)) && e.indexOf(t) >= 0,
    q = m,
    N = (e) => (p(e) ? "" : "" + e),
    P = (e, t) => ("string" == typeof e ? e.split(t) : e),
    D = (e) => {
      if (I(e)) {
        const t = P(e, "");
        return `${E(t).toLowerCase()}${_(t).join("")}`;
      }
      return e;
    },
    A = (e, t) => !!I(e) && e.slice(0, t.length) === t,
    U = (e, t) => {
      if (I(e)) {
        const { length: i } = e;
        let s = i;
        s > i && (s = i);
        const o = s;
        return (s -= t.length), s >= 0 && e.slice(s, o) === t;
      }
      return !1;
    },
    K = {}.hasOwnProperty,
    R = (e, t) => !p(e) && K.call(e, t),
    L = (e) => (w(e) ? Object.keys(e) : []),
    F = (e, t) => {
      L(e).forEach((i) => t(e[i], i));
    },
    $ = (e, t) => {
      const i = L(e);
      return !(
        !w(e) ||
        !w(t) ||
        i.length !== L(t).length ||
        j(
          i.map((i, s) => (w(e[i]) ? $(e[i], t[i]) : e[i] === t[i])),
          !1
        )
      );
    },
    B = (e, t) => {
      if (!w(e)) return !1;
      try {
        return "string" === V(t)
          ? delete e[t]
          : "array" === V(t)
          ? t.map((t) => delete e[t])
          : (y(t) &&
              L(e).forEach((i) => {
                t.test(i) && B(e, i);
              }),
            !0);
      } catch (e) {
        return !1;
      }
    },
    H = (e) => (O(e) ? 0 === e.length : w(e) ? 0 === L(e).length : !e),
    V = (e) => ({}.toString.call(e).slice(8, -1).toLowerCase());
  var G = Object.freeze({
    __proto__: null,
    isNil: p,
    isString: I,
    isNumber: v,
    isNaN: f,
    isBoolean: (e) => "boolean" === V(e),
    isObject: w,
    isRegExp: y,
    isFunction: S,
    isArray: O,
    isDate: b,
    fixed: (e, t) =>
      v(e)
        ? Number(e.toFixed(v(t) ? t : 2))
        : I(e) && "NaN" !== N(Number(e))
        ? Number(Number(e).toFixed(v(t) ? t : 2))
        : e,
    head: E,
    last: T,
    drop: _,
    dropWhile: (e, t) => (O(e) ? e.filter((e) => !t(e)) : e),
    compact: C,
    find: x,
    findIndex: k,
    includes: j,
    arrayFrom: q,
    toString: N,
    split: P,
    lowerFirst: D,
    upperFirst: (e) => {
      if (I(e)) {
        const t = P(e, "");
        return `${E(t).toUpperCase()}${_(t).join("")}`;
      }
      return e;
    },
    startsWith: A,
    endsWith: U,
    has: R,
    keys: L,
    forEach: F,
    isEqual: $,
    get: (e, t, i) => {
      let s = e;
      return w(e)
        ? (t.split(".").forEach((e) => {
            s = s ? s[e] : i;
          }),
          s)
        : i;
    },
    unset: B,
    isEmpty: H,
    typeOf: V,
    formatDate: (e) => {
      if (b(e)) {
        const t = (e) => (10 > e ? "0" + e : e);
        return (
          e.getFullYear() +
          "-" +
          t(e.getMonth() + 1) +
          "-" +
          t(e.getDate()) +
          " " +
          t(e.getHours()) +
          ":" +
          t(e.getMinutes()) +
          ":" +
          t(e.getSeconds()) +
          "." +
          t(e.getMilliseconds())
        );
      }
      return e;
    },
  });
  const M = (e, t) => {
      console.log(
        "%c [GrowingIO]：" + e,
        {
          info: "color: #3B82F6;",
          error: "color: #EF4444;",
          warn: "color: #F59E0B;",
          success: "color: #10B981;",
        }[t] || ""
      );
    },
    z = (e) => {
      try {
        return e();
      } catch (e) {
        return;
      }
    },
    W = (e) => {
      const t = {};
      return (
        w(e) &&
          F(e, (e, i) => {
            var s;
            const o = N(i).slice(0, 100);
            w(e)
              ? (t[o] = W(e))
              : O(e)
              ? ((t[o] = e.slice(0, 100)),
                "cdp" ===
                  (null === (s = window.vds) || void 0 === s
                    ? void 0
                    : s.gioEnvironment) &&
                  (t[o] = t[o].join("||").slice(0, 1e3)))
              : (t[o] = p(e) ? "" : N(e).slice(0, 1e3));
          }),
        t
      );
    },
    J = (e, t, i, s = {}) => {
      document.addEventListener
        ? e.addEventListener(
            t,
            i,
            Object.assign(Object.assign({}, { capture: !0 }), s)
          )
        : e.attachEvent
        ? e.attachEvent("on" + t, i)
        : (e["on" + t] = i);
    },
    Q = (e, t) =>
      I(e) && !H(e) && e.match(/^[a-zA-Z_][0-9a-zA-Z_]{0,100}$/)
        ? t()
        : (M(
            "事件名格式不正确，只能包含数字、字母和下划线，且不能以数字开头，字符总长度不能超过100!",
            "error"
          ),
          !1);
  var Z = Object.freeze({
    __proto__: null,
    consoleText: M,
    niceTry: z,
    limitObject: W,
    addListener: J,
    flattenObject: (e = {}) => {
      const t = Object.assign({}, e);
      return (
        L(t).forEach((e) => {
          w(t[e])
            ? (L(t[e]).forEach((i) => {
                t[`${e}_${i}`] = N(t[e][i]);
              }),
              B(t, e))
            : O(t[e])
            ? (t[e].forEach((i, s) => {
                w(i)
                  ? L(i).forEach((o) => {
                      t[`${e}_${s}_${o}`] = N(i[o]);
                    })
                  : (t[`${e}_${s}`] = N(i));
              }),
              B(t, e))
            : p(t[e]) || "" === t[e]
            ? B(t, e)
            : (t[e] = N(t[e]));
        }),
        W(t)
      );
    },
    eventNameValidate: Q,
    getGioFunction: () => {
      var e, t, i, s;
      const o = window._gio_local_vds || "vds",
        r =
          null !==
            (t =
              null === (e = window[o]) || void 0 === e
                ? void 0
                : e.namespace) && void 0 !== t
            ? t
            : "gdp";
      return S(window[r])
        ? window[r]
        : null !==
            (s = null !== (i = window.gdp) && void 0 !== i ? i : window.gio) &&
          void 0 !== s
        ? s
        : function () {};
    },
  });
  const X = (e) => (I(e) && e.length > 0) || (v(e) && e > 0),
    Y =
      /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/i,
    ee =
      /^(https?:\/\/)|(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
  function te(e) {
    for (var t = 1; arguments.length > t; t++) {
      var i = arguments[t];
      for (var s in i) e[s] = i[s];
    }
    return e;
  }
  var ie = (function e(t, i) {
    function s(e, s, o) {
      if ("undefined" != typeof document) {
        "number" == typeof (o = te({}, i, o)).expires &&
          (o.expires = new Date(Date.now() + 864e5 * o.expires)),
          o.expires && (o.expires = o.expires.toUTCString()),
          (e = encodeURIComponent(e)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var r = "";
        for (var n in o)
          o[n] &&
            ((r += "; " + n), !0 !== o[n] && (r += "=" + o[n].split(";")[0]));
        return (document.cookie = e + "=" + t.write(s, e) + r);
      }
    }
    return Object.create(
      {
        set: s,
        get: function (e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (
              var i = document.cookie ? document.cookie.split("; ") : [],
                s = {},
                o = 0;
              o < i.length;
              o++
            ) {
              var r = i[o].split("="),
                n = r.slice(1).join("=");
              try {
                var a = decodeURIComponent(r[0]);
                if (((s[a] = t.read(n, a)), e === a)) break;
              } catch (e) {}
            }
            return e ? s[e] : s;
          }
        },
        remove: function (e, t) {
          s(e, "", te({}, t, { expires: -1 }));
        },
        withAttributes: function (t) {
          return e(this.converter, te({}, this.attributes, t));
        },
        withConverter: function (t) {
          return e(te({}, this.converter, t), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(i) },
        converter: { value: Object.freeze(t) },
      }
    );
  })(
    {
      read: function (e) {
        return (
          '"' === e[0] && (e = e.slice(1, -1)),
          e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        );
      },
      write: function (e) {
        return encodeURIComponent(e).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        );
      },
    },
    { path: "/" }
  );
  const se = () =>
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        const t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      }),
    oe = (e) => (U(e, "_gioenc") ? e.slice(0, -7) : e),
    re = (e) => (f(Number(e)) && z(() => JSON.parse(e))) || e,
    ne = { A: 1, a: 1, Z: 1, z: 1, "@": 1, "{": 1 },
    ae = (e) => (p(e) ? e : z(() => "gioenc-" + le(e)) || e),
    de = (e) =>
      (I(e) && A(e, "gioenc-") && z(() => le(e.replace("gioenc-", "")))) || e,
    le = (e) =>
      (e = e || "")
        .split("")
        .map((e) => (ne[e] ? e : ge(e)))
        .join(""),
    ge = (e) => {
      if (/[0-9]/.test(e)) return 1 ^ +e;
      {
        let t = e.charCodeAt(0);
        return String.fromCharCode(1 ^ t);
      }
    };
  class he {
    constructor(e) {
      (this.domain = e),
        (this.getItem = (e) =>
          re(de(ie.get(oe(e), { domain: this.domain, path: "/" })))),
        (this.setItem = (e, t, i) => {
          let s;
          (s = I(t)
            ? t.length
              ? U(e, "_gioenc")
                ? ae(t)
                : t
              : ""
            : JSON.stringify(t)),
            ie.set(oe(e), s, {
              expires: i ? new Date(i) : 3650,
              domain: this.domain,
              path: "/",
            });
        }),
        (this.removeItem = (e) => {
          ie.remove(oe(e), { domain: this.domain, path: "/" });
        }),
        (this.hasItem = (e) => j(L(ie.get()), oe(e))),
        (this.getKeys = () => L(ie.get())),
        (this.type = "Cookie");
    }
  }
  class ce {
    constructor() {
      (this.getItem = (e) => {
        const t = z(() => JSON.parse(localStorage.getItem(oe(e)) || "")) || {};
        return w(t) && t.expiredAt > +Date.now() ? re(de(t.value)) : void 0;
      }),
        (this.setItem = (e, t, i) => {
          const s = null != i ? i : +new Date(9999, 12);
          localStorage.setItem(
            oe(e),
            JSON.stringify({
              value: I(t) && t.length && U(e, "_gioenc") ? ae(t) : t,
              expiredAt: s,
            })
          );
        }),
        (this.removeItem = (e) => localStorage.removeItem(oe(e))),
        (this.hasItem = (e) => !!localStorage.getItem(oe(e))),
        (this.getKeys = () =>
          q(Array(localStorage.length)).map((e, t) => localStorage.key(t))),
        (this.type = "localStorage");
    }
  }
  const ue = {};
  class me {
    constructor() {
      (this.getItem = (e) => {
        const t = z(() => JSON.parse(ue[oe(e)] || ""));
        return w(t) && t.expiredAt > +Date.now() ? re(de(t.value)) : void 0;
      }),
        (this.setItem = (e, t, i) => {
          const s = null != i ? i : +new Date(9999, 12);
          ue[oe(e)] = JSON.stringify({
            value: I(t) && t.length ? ae(t) : t,
            expiredAt: s,
          });
        }),
        (this.removeItem = (e) => B(ue, oe(e))),
        (this.hasItem = (e) => R(ue, oe(e))),
        (this.getKeys = () => L(ue)),
        (this.type = "memory");
    }
  }
  let pe;
  const Ie = /^(\.ac\.|\.br\.|\.co\.|\.com\.|\.edu\.|\.gov\.|\.org\.|\.net\.)/,
    ve = (e) => {
      const t = [];
      try {
        const i = e.split("."),
          s = T(i);
        if (
          i.length >= 2 &&
          (isNaN(Number(s)) || 0 > Number(s) || Number(s) > 255)
        ) {
          const e = "." + i.slice(-2).join(".");
          Ie.test(e) ? (pe = e) : t.push(e);
          const s = "." + i.slice(-3).join(".");
          Ie.test(s) || j(t, s) || t.push(s);
          const o = "." + i.slice(-4).join(".");
          Ie.test(o) || j(t, o) || t.push(o);
        }
      } catch (e) {}
      return t;
    },
    fe = (e) => {
      let t = "";
      return e.every((e) => !we(e) || ((t = e), !1)), t;
    },
    we = (e) => {
      try {
        ie.set("gioCookie", "yes", { domain: e });
        const t = !!ie.get("gioCookie", { domain: e });
        return ie.remove("gioCookie", { domain: e }), t;
      } catch (e) {
        return !1;
      }
    },
    ye = (e) => {
      let t,
        i,
        s,
        { storageType: o, cookieDomain: r, projectId: n } = e;
      if (
        (j(["cookie", "localstorage"], o) || (o = "cookie"),
        "cookie" === o &&
          ((s =
            navigator.userAgent.indexOf("Electron") > -1 ||
            j(["", "localhost", "127.0.0.1"], window.location.hostname) ||
            !j(["http:", "https:"], window.location.protocol)
              ? ""
              : fe([
                  ...ve(window.location.hostname),
                  window.location.hostname,
                ])),
          (i = !!s)),
        "cookie" === o && i)
      ) {
        const e = new he(s);
        if (r) {
          let t = ve(r);
          const i = fe(H(t) ? [] : [r, ...ve(r)]);
          i && we(i)
            ? (e.domain = i)
            : M("指定Cookie域无效或无权限，使用默认域！", "warn");
        }
        t = e;
      } else
        t = (() => {
          try {
            const e = window.localStorage,
              t = "__storage_test__";
            return e.setItem(t, t), e.removeItem(t), !0;
          } catch (e) {
            return !1;
          }
        })()
          ? new ce()
          : new me();
      return (
        "cookie" === o &&
          pe &&
          we(pe) &&
          ((e, t, i) => {
            if (t && we(t)) {
              let s = new he(t);
              [
                i + "_gdp_session_id",
                "gdp_user_id_gioenc",
                i + "_gdp_cs1_gioenc",
                i + "_gdp_user_key_gioenc",
                i + "_gdp_gio_id_gioenc",
                i + "_gdp_sequence_ids",
                i + "_gdp_session_id_sent",
              ].forEach((t) => {
                const i = s.getItem(t);
                s.hasItem(t) && (e.setItem(t, i), s.removeItem(t));
              }),
                (s = void 0);
            }
          })(t, pe, n),
        t
      );
    };
  var Se = "SESSIONID_UPDATE",
    Oe = {
      name: "gioCustomTracking",
      method: class {
        constructor(e) {
          (this.growingIO = e),
            (this.getValidResourceItem = (e) => {
              if (e && w(e) && e.id && e.key) {
                const t = {
                  id: I(e.id) ? e.id : N(e.id),
                  key: I(e.key) ? e.key : N(e.key),
                };
                return e.attributes && (t.attributes = e.attributes), t;
              }
            }),
            (this.getDynamicAttributes = (e) => (
              p(e) ||
                L(e).forEach((t) => {
                  S(e[t])
                    ? (e[t] = e[t]())
                    : w(e[t])
                    ? B(e, t)
                    : O(e[t]) || (e[t] = N(e[t]));
                }),
              e
            )),
            (this.buildCustomEvent = (e, t, i, s) => {
              Q(e, () => {
                const {
                  dataStore: {
                    eventContextBuilder: o,
                    eventConverter: r,
                    currentPage: n,
                  },
                } = this.growingIO;
                let a = Object.assign(
                  {
                    eventType: "CUSTOM",
                    eventName: e,
                    pageShowTimestamp: null == n ? void 0 : n.time,
                    attributes: W(
                      this.getDynamicAttributes(w(t) && !H(t) ? t : void 0)
                    ),
                    resourceItem: W(this.getValidResourceItem(i)),
                  },
                  o()
                );
                H(s) || (a = Object.assign(Object.assign({}, a), s)), r(a);
              });
            }),
            (this.buildUserAttributesEvent = (e, t) => {
              const {
                dataStore: { eventContextBuilder: i, eventConverter: s },
              } = this.growingIO;
              let o = Object.assign(
                { eventType: "LOGIN_USER_ATTRIBUTES", attributes: W(e) },
                i()
              );
              H(t) || (o = Object.assign(Object.assign({}, o), t)), s(o);
            });
        }
      },
    };
  const be = ["gioPerformance"];
  class Ee {
    constructor(e) {
      var t, i, s, o;
      (this.growingIO = e),
        (this.innerPluginInit = () => {
          var e;
          be.forEach((e) => {
            var t;
            return B(
              null === (t = this.pluginsContext) || void 0 === t
                ? void 0
                : t.plugins,
              e
            );
          }),
            L(
              null === (e = this.pluginsContext) || void 0 === e
                ? void 0
                : e.plugins
            ).forEach((e) => {
              var t;
              const { name: i, method: s } =
                null === (t = this.pluginsContext) || void 0 === t
                  ? void 0
                  : t.plugins[e];
              x(this.pluginItems, (e) => e.name === i) ||
                this.pluginItems.push({
                  name: D(i || e),
                  method: s || ((e) => {}),
                });
            }),
            H(this.pluginItems) || this.installAll();
        }),
        (this.install = (e, t, i) => {
          var s, o;
          const r = t || x(this.pluginItems, (t) => t.name === e);
          if (
            (null === (s = this.growingIO) || void 0 === s
              ? void 0
              : s.plugins)[e]
          )
            return M(`重复加载插件 ${e} 或插件重名，已跳过加载!`, "warn"), !1;
          if (!r) return M(`插件加载失败!不存在名为 ${e} 的插件!`, "error"), !1;
          try {
            return (
              ((null === (o = this.growingIO) || void 0 === o
                ? void 0
                : o.plugins)[e] = new r.method(this.growingIO, i)),
              "cdp" === this.growingIO.gioEnvironment &&
                t &&
                M("加载插件 " + e, "info"),
              !0
            );
          } catch (e) {
            return M("插件加载异常 " + e, "error"), !1;
          }
        }),
        (this.installAll = (e) => {
          (e || this.pluginItems).forEach((t) => {
            this.install(
              t.name,
              e ? t : void 0,
              e ? (null == t ? void 0 : t.options) : void 0
            ) &&
              !x(this.pluginItems, (e) => e.name === t.name) &&
              this.pluginItems.push({
                name: D(t.name),
                method: t.method ? t.method : () => {},
              });
          });
        }),
        (this.uninstall = (e) => {
          var t;
          B(this.pluginItems, e);
          const i = B(
            null === (t = this.growingIO) || void 0 === t ? void 0 : t.plugins,
            e
          );
          return i || M(`卸载插件 ${e} 失败!`, "error"), i;
        }),
        (this.uninstallAll = () => {
          this.pluginItems.forEach((e) => this.uninstall(e.name));
        }),
        (this.lifeError = (e, t) => M(`插件执行错误 ${e.name} ${t}`, "error")),
        (this.onComposeBefore = (e) => {
          this.pluginItems.forEach((t) => {
            var i;
            const s =
              null === (i = this.growingIO.plugins[t.name]) || void 0 === i
                ? void 0
                : i.onComposeBefore;
            if (s && S(s))
              try {
                s(e);
              } catch (e) {
                this.lifeError(t, e);
              }
          });
        }),
        (this.onComposeAfter = (e) => {
          this.pluginItems.forEach((t) => {
            var i;
            const s =
              null === (i = this.growingIO.plugins[t.name]) || void 0 === i
                ? void 0
                : i.onComposeAfter;
            if (s && S(s))
              try {
                s(e);
              } catch (e) {
                this.lifeError(t, e);
              }
          });
        }),
        (this.onSendBefore = (e) => {
          this.pluginItems.forEach((t) => {
            var i;
            const s =
              null === (i = this.growingIO.plugins[t.name]) || void 0 === i
                ? void 0
                : i.onSendBefore;
            if (s && S(s))
              try {
                s(e);
              } catch (e) {
                this.lifeError(t, e);
              }
          });
        }),
        (this.onSendAfter = (e) => {
          this.pluginItems.forEach((t) => {
            var i;
            const s =
              null === (i = this.growingIO.plugins[t.name]) || void 0 === i
                ? void 0
                : i.onSendAfter;
            if (s && S(s))
              try {
                s(e);
              } catch (e) {
                this.lifeError(t, e);
              }
          });
        }),
        (this.pluginsContext = { plugins: {} }),
        (this.pluginItems = []),
        null === (t = this.growingIO.emitter) ||
          void 0 === t ||
          t.on("onComposeBefore", this.onComposeBefore),
        null === (i = this.growingIO.emitter) ||
          void 0 === i ||
          i.on("onComposeAfter", this.onComposeAfter),
        null === (s = this.growingIO.emitter) ||
          void 0 === s ||
          s.on("onSendBefore", this.onSendBefore),
        null === (o = this.growingIO.emitter) ||
          void 0 === o ||
          o.on("onSendAfter", this.onSendAfter);
    }
  }
  class Te extends Ee {
    constructor(e) {
      super(e),
        (this.growingIO = e),
        (this.growingIO.gioSDKFull = !1),
        (this.pluginsContext = { plugins: { gioCustomTracking: Oe } });
    }
  }
  class _e {
    constructor() {
      var e;
      (this.trackingId = "g0"),
        (this.init = (e) => {
          var t, i, s, o, r;
          M("Gio Web SDK 初始化中...", "info");
          const {
            initOptions: n,
            currentPage: a,
            sendVisit: d,
            sendPage: l,
          } = this.dataStore;
          n(e),
            (this.storage = ye(this.vdsConfig)),
            this.initCallback(),
            null === (t = this.emitter) ||
              void 0 === t ||
              t.emit("OPTION_INITIALIZED", this),
            null ===
              (s =
                null === (i = this.plugins) || void 0 === i
                  ? void 0
                  : i.gioEventAutoTracking) ||
              void 0 === s ||
              s.main(),
            a.hookHistory(),
            a.parsePage(),
            null === (o = this.emitter) ||
              void 0 === o ||
              o.emit("SDK_INITIALIZED", this),
            M("Gio Web SDK 初始化完成！", "success"),
            this.useEmbeddedInherit ||
              ((this.dataStore.lastVisitEvent.timestamp = a.time), d()),
            l(),
            (this.gioSDKInitialized = !0),
            (this.vdsConfig.gioSDKInitialized = !0),
            (window[this.vds] = this.vdsConfig),
            null === (r = this.emitter) ||
              void 0 === r ||
              r.emit("SDK_INITIALIZED_COMPLATE", this);
        }),
        (this.setOption = (e, t) => {
          if (j(r, e)) {
            const i = this.dataStore.setOption(e, t);
            return i && n[e] && M(`已${t ? "开启" : "关闭"}${n[e]}`, "info"), i;
          }
          return M(`不存在可修改的配置项：${e}，请检查后重试!`, "warn"), !1;
        }),
        (this.getOption = (e) => this.dataStore.getOption(e)),
        (this.setGeneralProps = (e) => {
          w(e) && !H(e)
            ? ((this.dataStore.generalProps = Object.assign(
                Object.assign({}, this.dataStore.generalProps),
                e
              )),
              L(this.dataStore.generalProps).forEach((e) => {
                j([void 0, null], this.dataStore.generalProps[e]) &&
                  (this.dataStore.generalProps[e] = "");
              }))
            : this.callError("setGeneralProps");
        }),
        (this.clearGeneralProps = (e) => {
          O(e) && !H(e)
            ? e.forEach((e) => {
                B(this.dataStore.generalProps, e);
              })
            : (this.dataStore.generalProps = {});
        }),
        (this.reissuePage = () => {
          this.dataStore.sendPage();
        }),
        (this.notRecommended = () =>
          M(
            "不推荐的方法使用，建议使用 gio('setOption', [optionName], [value])!",
            "info"
          )),
        (this.callError = (e, t = !0, i = "参数不合法") =>
          M(`${t ? "调用" : "设置"} ${e} 失败，${i}!`, "warn")),
        (this.updateImpression = () => {
          var e, t;
          const i =
            null ===
              (t =
                null === (e = this.plugins) || void 0 === e
                  ? void 0
                  : e.gioImpressionTracking) || void 0 === t
              ? void 0
              : t.main;
          i
            ? i("emitter")
            : M(
                "updateImpression 错误! 请集成半自动埋点浏览插件后重试!",
                "error"
              );
        }),
        (this.gioEnvironment = "cdp"),
        (this.sdkVersion = "3.8.6"),
        (this.vds = window.gioCompatibilityVds ? "gdp_vds" : "vds"),
        (this.utils = Object.assign(Object.assign({}, G), Z)),
        (this.emitter = {
          all: (e = e || new Map()),
          on: function (t, i) {
            var s = e.get(t);
            s ? s.push(i) : e.set(t, [i]);
          },
          off: function (t, i) {
            var s = e.get(t);
            s && (i ? s.splice(s.indexOf(i) >>> 0, 1) : e.set(t, []));
          },
          emit: function (t, i) {
            var s = e.get(t);
            s &&
              s.slice().map(function (e) {
                e(i);
              }),
              (s = e.get("*")) &&
                s.slice().map(function (e) {
                  e(t, i);
                });
          },
        }),
        (this.useEmbeddedInherit = !1),
        (this.useHybridInherit = !1),
        (this.gioSDKInitialized = !1),
        (this.plugins = new Te(this)),
        this.plugins.innerPluginInit();
    }
  }
  class Ce {
    constructor(e) {
      this.growingIO = e;
      const { projectId: t } = this.growingIO.vdsConfig,
        {
          getItem: i,
          setItem: s,
          getKeys: o,
          removeItem: r,
        } = this.growingIO.storage;
      (this.getItem = i),
        (this.setItem = s),
        (this.getKeys = o),
        (this.removeItem = r),
        (this.sIdStorageName = t + "_gdp_session_id"),
        (this.uidStorageName = "gdp_user_id_gioenc"),
        (this.userIdStorageName = t + "_gdp_cs1_gioenc"),
        (this.userKeyStorageName = t + "_gdp_user_key_gioenc"),
        (this.gioIdStorageName = t + "_gdp_gio_id_gioenc");
    }
    get sessionId() {
      return (
        this.getItem(this.sIdStorageName) ||
        ((this.sessionId = se()), this.sessionId)
      );
    }
    set sessionId(e) {
      var t;
      e || (e = se());
      const i = this.getItem(this.sIdStorageName) || this.prevSessionId,
        { sessionExpires: s = 30 } = this.growingIO.vdsConfig;
      this.setItem(this.sIdStorageName, e, +Date.now() + 60 * s * 1e3),
        i !== e &&
          (this.getKeys()
            .filter((e) => /.+_gdp_session_id_.{36}/.test(e))
            .forEach((e) => {
              this.removeItem(e);
            }),
          this.setItem(this.growingIO.dataStore.visitStorageName, ""),
          null === (t = this.growingIO.emitter) ||
            void 0 === t ||
            t.emit(Se, { newSessionId: e, oldSessionId: i })),
        (this.prevSessionId = e);
    }
    get uid() {
      return this.getItem(this.uidStorageName) || ((this.uid = se()), this.uid);
    }
    set uid(e) {
      var t;
      const i = this.getItem(this.uidStorageName) || this.prevUId;
      this.setItem(this.uidStorageName, e),
        i !== e &&
          (null === (t = this.growingIO.emitter) ||
            void 0 === t ||
            t.emit("UID_UPDATE", { newUId: e, oldUId: i })),
        (this.prevUId = e);
    }
    get userId() {
      return this.getItem(this.userIdStorageName) || "";
    }
    set userId(e) {
      var t, i;
      const s = this.getItem(this.userIdStorageName) || this.prevUserId;
      this.setItem(this.userIdStorageName, e),
        null === (t = this.growingIO.emitter) ||
          void 0 === t ||
          t.emit("SET_USERID", {
            newUserId: e,
            oldUserId: s,
            userKey: this.userKey,
          }),
        s !== e &&
          (null === (i = this.growingIO.emitter) ||
            void 0 === i ||
            i.emit("USERID_UPDATE", {
              newUserId: e,
              oldUserId: s,
              userKey: this.userKey,
            })),
        e && (this.gioId = e),
        (this.prevUserId = e);
    }
    get userKey() {
      return this.getItem(this.userKeyStorageName) || "";
    }
    set userKey(e) {
      var t, i;
      const s = this.getItem(this.userKeyStorageName) || this.prevUserKey;
      this.setItem(this.userKeyStorageName, e),
        null === (t = this.growingIO.emitter) ||
          void 0 === t ||
          t.emit("SET_USERKEY", {
            newUserKey: e,
            oldUserKey: s,
            userId: this.userId,
          }),
        s !== e &&
          (null === (i = this.growingIO.emitter) ||
            void 0 === i ||
            i.emit("USERKEY_UPDATE", {
              newUserKey: e,
              oldUserKey: s,
              userId: this.userId,
            })),
        (this.prevUserKey = e);
    }
    get gioId() {
      return this.getItem(this.gioIdStorageName) || "";
    }
    set gioId(e) {
      var t;
      const i = this.getItem(this.gioIdStorageName) || this.prevGioId;
      this.setItem(this.gioIdStorageName, e),
        i !== e &&
          (null === (t = this.growingIO.emitter) ||
            void 0 === t ||
            t.emit("GIOID_UPDATE", { newGioId: e, oldGioId: i })),
        (this.prevGioId = e);
    }
  }
  class xe {
    constructor(e) {
      (this.growingIO = e),
        (this.main = () => {
          var e, t;
          const {
              sdkVersion: i,
              useEmbeddedInherit: s,
              vdsConfig: o,
              userStore: r,
              dataStore: n,
              trackingId: a,
            } = this.growingIO,
            { path: d, query: l } = n.currentPage;
          let g = {
            appVersion: o.version,
            dataSourceId: o.dataSourceId,
            deviceId: r.uid,
            domain: s ? o.appId : window.location.host,
            gioId: r.gioId,
            language: navigator.language,
            path: d,
            platform: o.platform,
            query: l,
            referralPage:
              (null === (e = n.lastPageEvent) || void 0 === e
                ? void 0
                : e.referralPage) || "",
            screenHeight: window.screen.height,
            screenWidth: window.screen.width,
            sdkVersion: i,
            sessionId: r.sessionId,
            timestamp: +Date.now(),
            title:
              null !== (t = z(() => document.title.slice(0, 255))) &&
              void 0 !== t
                ? t
                : "",
            userId: r.userId,
          };
          if (
            (o.enableIdMapping && (g.userKey = r.userKey),
            H(o.ignoreFields) ||
              o.ignoreFields.forEach((e) => {
                B(g, e);
              }),
            s && !H(this.minpExtraParams))
          ) {
            const e = Object.assign({}, g);
            F(
              Object.assign(Object.assign({}, g), this.minpExtraParams),
              (t, i) => {
                var s;
                j(o.embeddedIgnore, i)
                  ? ((g[i] = e[i]),
                    "domain" === i && (g[i] = window.location.host))
                  : (g[i] =
                      null !== (s = this.minpExtraParams[i]) && void 0 !== s
                        ? s
                        : g[i]);
              }
            );
          }
          return (g.trackingId = a), g;
        }),
        (this.minpExtraParams = {});
    }
  }
  class ke {
    constructor(e) {
      (this.growingIO = e),
        (this.parsePage = () => {
          const { hashtag: e } = this.growingIO.vdsConfig,
            t = location.pathname,
            i = location.search,
            s = location.hash,
            o = s.indexOf("?");
          (this.domain = window.location.host),
            (this.title = document.title.slice(0, 255)),
            (this.time = +Date.now()),
            (this.path = t),
            (this.query = i),
            e &&
              (o > -1
                ? ((this.path += s.slice(0, o)),
                  (this.query = this.query + "&" + s.slice(o + 1)))
                : (this.path += s)),
            this.query &&
              j(["?", "&"], this.query.charAt(0)) &&
              (this.query = this.query.slice(1));
        }),
        (this._getNoHashHref = () => {
          const {
            protocol: e,
            host: t,
            pathname: i,
            search: s,
          } = window.location;
          return `${e}://${t}${i}${s}`;
        }),
        (this.getReferralPage = () => {
          var e, t;
          const {
            dataStore: { lastPageEvent: i },
          } = this.growingIO;
          return (null == i ? void 0 : i.path) === this.path &&
            (null !== (e = null == i ? void 0 : i.query) && void 0 !== e
              ? e
              : "") === (null !== (t = this.query) && void 0 !== t ? t : "")
            ? null == i
              ? void 0
              : i.referralPage
            : (null == i ? void 0 : i.path)
            ? this.lastHref
            : document.referrer;
        }),
        (this.pageListener = () => {
          const { hashtag: e } = this.growingIO.vdsConfig;
          let t = window.location.href,
            i = this.lastHref;
          e || ((t = this._getNoHashHref()), (i = this.lastNoHashHref)),
            i !== t && (this.parsePage(), this.buildPageEvent());
        }),
        (this.hookHistory = () => {
          const e = window.history.pushState,
            t = window.history.replaceState,
            i = this;
          e &&
            z(
              () =>
                (window.history.pushState = function () {
                  e.apply(window.history, arguments),
                    setTimeout(i.pageListener);
                })
            ),
            t &&
              z(
                () =>
                  (window.history.replaceState = function () {
                    t.apply(window.history, arguments),
                      setTimeout(i.pageListener);
                  })
              ),
            J(window, "popstate", this.pageListener);
          const { hashtag: s } = this.growingIO.vdsConfig;
          s && J(window, "hashchange", this.pageListener);
        }),
        (this.buildPageEvent = (e) => {
          const {
            dataStore: {
              lastPageEvent: t,
              eventContextBuilder: i,
              eventConverter: s,
            },
          } = this.growingIO;
          let o = Object.assign(Object.assign({ eventType: "PAGE" }, i()), {
            protocolType: location.protocol.substring(
              0,
              location.protocol.length - 1
            ),
            referralPage: this.getReferralPage(),
          });
          H(e) || (o = Object.assign(Object.assign({}, o), e)),
            (o.timestamp = this.time),
            s(o),
            (this.lastHref = window.location.href),
            (this.lastNoHashHref = this._getNoHashHref()),
            (this.lastLocation = Object.assign({}, window.location));
        }),
        (this.title = document.title.slice(0, 255)),
        (this.lastLocation = Object.assign({}, window.location));
    }
  }
  const je = { referralPage: document.referrer };
  class qe {
    constructor(o) {
      var a, l, g;
      (this.growingIO = o),
        (this.ALLOW_SETTING = Object.assign(
          Object.assign({}, t),
          "saas" === this.growingIO.gioEnvironment ? s : i
        )),
        (this.allowOptKeys = Object.keys(this.ALLOW_SETTING)),
        (this.trackTimers = {}),
        (this.setSequenceIds = (e, t) => {
          let i = this.growingIO.storage.getItem(this.seqStorageIdName) || {};
          "gsid" === e
            ? (i.globalKey = t)
            : (i = Object.assign(Object.assign({}, i), t)),
            this.growingIO.storage.setItem(this.seqStorageIdName, i);
        }),
        (this.initOptions = (t) => {
          var i, s, o, r, a, l, g;
          const { projectId: h, dataSourceId: c, appId: u } = t;
          this.initialDataSourceId = c;
          const m = {};
          this.allowOptKeys.forEach((i) => {
            const s = this.ALLOW_SETTING[i].type;
            let o = O(s) ? !j(s, V(t[i])) : V(t[i]) !== s;
            "platform" !== i || j(e, t[i]) || (o = !0),
              o
                ? (m[i] = this.ALLOW_SETTING[i].default)
                : "ignoreFields" === i
                ? (m.ignoreFields = t.ignoreFields.filter((e) => j(d, e)))
                : ((m[i] = t[i]),
                  j(["dataCollect", "autotrack"], i) &&
                    (m[i] || M("已关闭" + n[i], "info")));
          }),
            (m.sessionExpires = Math.round(m.sessionExpires)),
            (f(m.sessionExpires) ||
              1 > m.sessionExpires ||
              m.sessionExpires > 360) &&
              (m.sessionExpires = 30),
            (m.storageType = m.storageType.toLowerCase()),
            (m.sendType = m.sendType.toLowerCase()),
            j(["beacon", "xhr", "image"], m.sendType) ||
              (m.sendType = "beacon"),
            (!f(Number(m.requestTimeout)) && m.requestTimeout > 0) ||
              (m.requestTimeout = 5e3),
            (this.growingIO.vdsConfig = Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  null !== (i = window.vds) && void 0 !== i ? i : {}
                ),
                m
              ),
              {
                projectId: h,
                dataSourceId: c,
                appId: u,
                performance: {
                  monitor:
                    null ===
                      (o =
                        null === (s = m.performance) || void 0 === s
                          ? void 0
                          : s.monitor) ||
                    void 0 === o ||
                    o,
                  exception:
                    null ===
                      (a =
                        null === (r = m.performance) || void 0 === r
                          ? void 0
                          : r.exception) ||
                    void 0 === a ||
                    a,
                  network:
                    null !==
                      (g =
                        null === (l = m.performance) || void 0 === l
                          ? void 0
                          : l.network) &&
                    void 0 !== g &&
                    g,
                },
              }
            )),
            (window.vds = this.growingIO.vdsConfig),
            (this.seqStorageIdName = h + "_gdp_sequence_ids"),
            (this.visitStorageName = h + "_gdp_session_id_sent");
        }),
        (this.setOption = (e, t) => {
          var i;
          const {
              vdsConfig: s,
              callError: o,
              uploader: n,
              emitter: a,
            } = this.growingIO,
            d = I(e) && j(r, e),
            l =
              d &&
              typeof t ===
                ((null === (i = this.ALLOW_SETTING[e]) || void 0 === i
                  ? void 0
                  : i.type) || "string"),
            g = Object.assign({}, s);
          return d && l
            ? ((s[e] = t),
              "dataCollect" === e &&
                g.dataCollect !== t &&
                (t
                  ? (this.sendVisit(!0), this.sendPage())
                  : this.growingIO.clearTrackTimer()),
              j(["host", "scheme"], e) && (null == n || n.generateHost()),
              null == a ||
                a.emit("OPTION_CHANGE", { optionName: e, optionValue: t }),
              (window.vds[e] = t),
              !0)
            : (o("setOption > " + e), !1);
        }),
        (this.getOption = (e) => {
          const { vdsConfig: t, callError: i } = this.growingIO;
          return e && R(t, N(e))
            ? t[N(e)]
            : p(e)
            ? Object.assign({}, t)
            : void i("getOption > " + e);
        }),
        (this.sendVisit = (e) => {
          const {
              userStore: { sessionId: t },
              storage: i,
            } = this.growingIO,
            s = i.getItem(this.visitStorageName);
          (!e && t === s) ||
            ((this.lastVisitEvent.timestamp = this.currentPage.time - 1),
            this.buildVisitEvent());
        }),
        (this.buildVisitEvent = (e) => {
          const {
              dataStore: { eventContextBuilder: t, eventConverter: i },
              emitter: s,
              storage: o,
              userStore: r,
            } = this.growingIO,
            {
              referralPage: n,
              title: a,
              path: d,
              query: l,
              timestamp: g,
            } = this.lastVisitEvent;
          let h = Object.assign(Object.assign({ eventType: "VISIT" }, t()), {
            referralPage: n || this.currentPage.getReferralPage(),
            timestamp: g,
          });
          d && ((h.title = a), (h.path = d), (h.query = l)),
            H(e) ||
              ((h.session = (null == e ? void 0 : e.session) || h.session),
              (h.trackingId = null == e ? void 0 : e.trackingId),
              (h = Object.assign(Object.assign({}, h), e)));
          const c = ({ requestData: e }) => {
            "VISIT" === e.eventType &&
              e.trackingId === this.growingIO.trackingId &&
              (r.sessionId === e.sessionId &&
                o.setItem(this.visitStorageName, e.sessionId),
              s.off("onSendAfter", c));
          };
          s.on("onSendAfter", c), i(h);
        }),
        (this.sendPage = (e) => {
          e && this.currentPage.parsePage(), this.currentPage.buildPageEvent();
        }),
        (this.buildErrorEvent = (e) => {
          const {
            dataStore: { eventContextBuilder: t, eventConverter: i },
          } = this.growingIO;
          i(
            Object.assign(
              {
                eventType: "CUSTOM",
                pageShowTimestamp: this.currentPage.time,
                eventName: "onError",
                attributes: e,
              },
              t()
            )
          );
        }),
        (this.currentPage = new ke(this.growingIO)),
        (this.eventContextBuilderInst = new xe(this.growingIO)),
        (this.eventContextBuilder = this.eventContextBuilderInst.main),
        (this.generalProps = {}),
        (this.lastVisitEvent = je),
        null === (a = this.growingIO.emitter) ||
          void 0 === a ||
          a.on("onComposeAfter", ({ composedEvent: e }) => {
            ("VISIT" !== e.eventType && "vst" !== e.t) ||
              e.trackingId !== this.growingIO.trackingId ||
              (this.lastVisitEvent = e);
          }),
        (this.lastPageEvent = {}),
        null === (l = this.growingIO.emitter) ||
          void 0 === l ||
          l.on("onComposeAfter", ({ composedEvent: e }) => {
            ("PAGE" !== e.eventType && "page" !== e.t) ||
              e.trackingId !== this.growingIO.trackingId ||
              (this.lastPageEvent = e);
          }),
        null === (g = this.growingIO.emitter) ||
          void 0 === g ||
          g.on(Se, () => {
            if (this.growingIO.gioSDKInitialized) {
              this.currentPage.parsePage();
              const {
                title: e,
                path: t,
                query: i,
                time: s,
                getReferralPage: o,
              } = this.currentPage;
              (this.lastVisitEvent = {
                referralPage: document.referrer || o(),
                title: e,
                path: t,
                query: i,
                timestamp: s - 1,
              }),
                this.sendVisit(!0),
                this.sendPage(!0);
            }
          });
    }
    get esid() {
      const e = this.growingIO.storage.getItem(this.seqStorageIdName) || {};
      let t = Object.assign({}, e);
      return (
        B(t, "globalKey"),
        (t = w(t) && !p(t) ? t : {}),
        (this._esid = {}),
        L(t).forEach((e) => {
          this._esid[e] = f(Number(t[e])) || t[e] >= 1e9 || 1 > t[e] ? 1 : t[e];
        }),
        this._esid
      );
    }
    set esid(e) {
      const t = {};
      L(e).forEach((i) => {
        t[i] = f(e[i]) || e[i] >= 1e9 || 1 > e[i] ? 1 : e[i];
      }),
        $(this._esid, t) ||
          ((this._esid = t), this.setSequenceIds("esid", this._esid));
    }
    get gsid() {
      const e = this.growingIO.storage.getItem(this.seqStorageIdName) || {},
        t = Number(e.globalKey);
      return (this._gsid = f(t) || t >= 1e9 || 1 > t ? 1 : t), this._gsid;
    }
    set gsid(e) {
      f(Number(e)) || e >= 1e9 || 1 > e ? (this._gsid = 1) : (this._gsid = e),
        this.setSequenceIds("gsid", this._gsid);
    }
  }
  class Ne extends qe {
    constructor(e) {
      super(e),
        (this.growingIO = e),
        (this.eventConverter = (e) => {
          var t;
          const { vdsConfig: i, dataStore: s, uploader: o } = this.growingIO;
          if (i.dataCollect) {
            e.trackingId === this.growingIO.trackingId &&
              ((e.globalSequenceId = s.gsid),
              (e.eventSequenceId = s.esid[e.eventType] || 1));
            const i = {};
            F(e, (e, t) => {
              var s;
              if ("element" === t) {
                const t = null !== (s = E(e)) && void 0 !== s ? s : {};
                F(t, (e, t) => {
                  (H(e) && 0 !== e) || (i[t] = e);
                });
              } else ((H(e) || p(e)) && 0 !== e) || (i[t] = e);
            }),
              e.trackingId === this.growingIO.trackingId &&
                ((this.growingIO.dataStore.gsid += 1),
                (this.growingIO.dataStore.esid = Object.assign(
                  Object.assign({}, this.growingIO.dataStore.esid),
                  {
                    [i.eventType]:
                      (this.growingIO.dataStore.esid[i.eventType] || 1) + 1,
                  }
                ))),
              null === (t = this.growingIO.emitter) ||
                void 0 === t ||
                t.emit("onComposeAfter", {
                  composedEvent: Object.assign({}, i),
                }),
              e.trackingId === this.growingIO.trackingId && o.commitRequest(i);
          } else "VISIT" === e.eventType && (this.lastVisitEvent = e);
        });
    }
  }
  class Pe {
    constructor(e) {
      (this.growingIO = e),
        (this.getSendType = () => {
          const { sendType: e } = this.growingIO.vdsConfig;
          return "beacon" === e
            ? (() => {
                var e;
                const t = !!(null ===
                    (e =
                      null === window || void 0 === window
                        ? void 0
                        : window.navigator) || void 0 === e
                    ? void 0
                    : e.sendBeacon),
                  i = window.navigator.userAgent;
                if (i.match(/(iPad|iPhone|iPod)/g)) {
                  const e = ((e) => {
                    const t = e
                      .toLowerCase()
                      .match(/cpu.*os (.*?) like mac os/i);
                    return !t || 2 > t.length
                      ? 0
                      : +t[1].split("_").slice(0, 2).join(".");
                  })(i);
                  return t && e > 13;
                }
                return t;
              })()
              ? "beacon"
              : "xhr"
            : e;
        }),
        (this.commitRequest = (e) => {
          const t = Object.assign({}, e);
          this.requestQueue.push(
            Object.assign(Object.assign({}, t), {
              requestType: this.getSendType(),
            })
          ),
            this.initiateRequest();
        }),
        (this.initiateRequest = () => {
          var e, t;
          if (
            [...this.requestQueue].length > 0 &&
            this.requestingNum < this.requestLimit
          ) {
            const {
              vdsConfig: i,
              emitter: s,
              plugins: o,
              useHybridInherit: r,
            } = this.growingIO;
            if (
              ((this.requestQueue = [...this.requestQueue].filter(
                (e) =>
                  (this.retryIds[e.globalSequenceId || e.esid] || 0) <=
                  this.retryLimit
              )),
              H(this.requestQueue))
            )
              return;
            const n = this.requestQueue.shift(),
              { requestType: a } = n;
            null == s ||
              s.emit("onSendBefore", { requestData: Object.assign({}, n) });
            const d = Object.assign({}, n);
            if (
              (B(d, ["requestType", "trackingId"]),
              i.debug &&
                console.log(
                  "[GrowingIO Debug]:",
                  JSON.stringify(d, null, 2).replace(
                    /\"/g,
                    (() => {
                      const e = window.navigator.userAgent;
                      return (
                        /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) &&
                        !/chrome\/(\d+\.\d+)/i.test(e)
                      );
                    })()
                      ? ""
                      : '"'
                  )
                ),
              (this.requestingNum += 1),
              r)
            )
              return this.requestSuccessFn(n), !1;
            let l = Object.assign({}, d);
            switch (
              (i.compress && (null == o ? void 0 : o.gioCompress)
                ? "image" === a
                  ? ((this.compressType = "11"),
                    (l =
                      null === (e = null == o ? void 0 : o.gioCompress) ||
                      void 0 === e
                        ? void 0
                        : e.compressToEncodedURIComponent(JSON.stringify([l]))))
                  : ((this.compressType = "1"),
                    (l =
                      null === (t = null == o ? void 0 : o.gioCompress) ||
                      void 0 === t
                        ? void 0
                        : t.compressToUint8Array(JSON.stringify([l]))))
                : ((this.compressType = "0"), (l = JSON.stringify([l]))),
              a)
            ) {
              case "beacon":
              default:
                this.sendByBeacon(n, l);
                break;
              case "xhr":
                this.sendByXHR(n, l);
                break;
              case "image":
                this.sendByImage(n, l);
            }
          }
        }),
        (this.generateURL = () =>
          `${this.requestURL}?stm=${+Date.now()}&compress=${
            this.compressType
          }`),
        (this.sendByBeacon = (e, t) => {
          navigator.sendBeacon(this.generateURL(), t)
            ? this.requestSuccessFn(e)
            : this.requestFailFn(e, "beacon");
        }),
        (this.sendByXHR = (e, t) => {
          const i = new XMLHttpRequest();
          if (i)
            return (
              i.open("POST", this.generateURL(), !0),
              (i.onload = () => {
                204 === i.status
                  ? this.requestSuccessFn(e)
                  : this.requestFailFn(e, "xhr");
              }),
              (i.ontimeout =
                i.onerror =
                i.onabort =
                  () => {
                    this.requestFailFn(e, "xhr");
                  }),
              i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
              (i.timeout = this.growingIO.vdsConfig.requestTimeout),
              void i.send(t)
            );
          if (
            null === window || void 0 === window
              ? void 0
              : window.XDomainRequest
          ) {
            const i = new window.XDomainRequest();
            i.open(
              "POST",
              this.generateURL().replace("https://", "http://"),
              !0
            ),
              (i.onload = () => {
                204 === i.status
                  ? this.requestSuccessFn(e)
                  : this.requestFailFn(e, "xhr");
              }),
              (i.onerror = i.ontimeout =
                () => {
                  this.requestFailFn(e, "xhr");
                }),
              i.send(t);
          }
        }),
        (this.sendByImage = (e, t) => {
          const i = `${this.generateURL()}&data=${t}`;
          let s = document.createElement("img");
          (s.width = 1), (s.height = 1);
          let o = window.setTimeout(() => {
            (this.requestingNum -= 1),
              this.clearImage(s),
              window.clearTimeout(o),
              (o = null),
              this.initiateRequest();
          }, this.growingIO.vdsConfig.requestTimeout);
          (s.onload = () => {
            this.requestSuccessFn(e),
              this.clearImage(s),
              window.clearTimeout(o),
              (o = null);
          }),
            (s.onerror = s.onabort =
              () => {
                this.requestSuccessFn(e),
                  this.clearImage(s),
                  window.clearTimeout(o),
                  (o = null);
              }),
            (s.src = i);
        }),
        (this.clearImage = (e) => {
          (e.src = ""),
            (e.onload = () => {}),
            (e.onerror = e.onabort = () => {}),
            (e = null);
        }),
        (this.requestSuccessFn = (e) => {
          var t;
          this.requestingNum -= 1;
          const i = e.globalSequenceId || e.esid || -1;
          this.retryIds[i] && (this.retryIds[i] = 0),
            e.trackingId === this.growingIO.trackingId &&
              this.growingIO.userStore.sessionId === e.sessionId &&
              (this.growingIO.userStore.sessionId = e.sessionId),
            null === (t = this.growingIO.emitter) ||
              void 0 === t ||
              t.emit("onSendAfter", { requestData: Object.assign({}, e) }),
            this.initiateRequest();
        }),
        (this.requestFailFn = (e, t) => {
          this.requestingNum -= 1;
          const i = e.globalSequenceId || e.esid || -1;
          this.retryIds[i] || (this.retryIds[i] = 0), (this.retryIds[i] += 1);
          const s = this.requestQueue.some(
            (t) =>
              t.globalSequenceId === e.globalSequenceId && t.esid === e.esid
          );
          let o = t;
          if (
            (this.retryIds[i] < this.retryLimit + 1 ||
              ((o = "beacon" === t ? "xhr" : "xhr" === t ? "image" : void 0),
              (this.retryIds[i] = 0)),
            !s && o)
          ) {
            let t = window.setTimeout(() => {
              this.requestQueue.push(
                Object.assign(Object.assign({}, e), { requestType: o })
              ),
                this.initiateRequest(),
                window.clearTimeout(t),
                (t = null);
            }, 800);
          }
          this.initiateRequest();
        }),
        (this.requestQueue = []),
        (this.requestLimit = 10),
        (this.requestTimeout = 5e3),
        (this.retryLimit = 2),
        (this.retryIds = {}),
        (this.requestingNum = 0),
        (this.requestURL = "");
    }
  }
  class De extends Pe {
    constructor(e) {
      super(e),
        (this.growingIO = e),
        (this.generateHost = () => {
          let {
            scheme: e,
            host: t = "",
            projectId: i,
          } = this.growingIO.vdsConfig;
          e
            ? U(N(e), "://") || (e += "://")
            : (e =
                (location.protocol.indexOf("http") > -1
                  ? location.protocol.replace(":", "")
                  : "https") + "//"),
            A(t, "http") &&
              (t = t.substring(t.indexOf("://") + (U(N(e), "://") ? 3 : 0))),
            (this.requestURL = `${e}${t}/v3/projects/${i}/collect`);
        }),
        (this.requestURL = ""),
        this.generateHost();
    }
  }
  class Ae extends _e {
    constructor() {
      super(),
        (this.registerPlugins = (e) => {
          O(e)
            ? (e.forEach((t, i) => {
                var s, o;
                H(t) || p(t)
                  ? M("插件不合法，跳过加载!", "warn")
                  : (null === (s = t.js) || void 0 === s
                      ? void 0
                      : s.default) &&
                    (e[i] = Object.assign(
                      Object.assign(
                        {},
                        null === (o = t.js) || void 0 === o ? void 0 : o.default
                      ),
                      { options: t.options }
                    ));
              }),
              (e = C(e)),
              this.plugins.installAll(e))
            : M("插件注册失败，请检查!", "error");
        }),
        (this.initCallback = () => {
          (this.uploader = new De(this)), (this.userStore = new Ce(this));
        }),
        (this.getPlugins = () => this.plugins.pluginItems),
        (this.setTrackerScheme = (e) => {
          j(["http", "https"], e)
            ? (this.dataStore.setOption("scheme", e), this.notRecommended())
            : this.callError("scheme", !1);
        }),
        (this.setTrackerHost = (e) => {
          Y.test(e) || ee.test(e)
            ? (this.dataStore.setOption("host", e), this.notRecommended())
            : this.callError("host", !1);
        }),
        (this.setDataCollect = (e) => {
          this.setOption("dataCollect", !!e), this.notRecommended();
        }),
        (this.setAutotrack = (e) => {
          this.setOption("autotrack", !!e), this.notRecommended();
        }),
        (this.enableDebug = (e) => {
          this.setOption("debug", !!e), this.notRecommended();
        }),
        (this.enableHT = (e) => {
          this.setOption("hashtag", !!e), this.notRecommended();
        }),
        (this.getVisitorId = () => this.userStore.uid),
        (this.getDeviceId = () => this.userStore.uid),
        (this.setUserAttributes = (e, t) => {
          var i, s;
          !H(e) && w(e)
            ? null ===
                (s =
                  null === (i = this.plugins) || void 0 === i
                    ? void 0
                    : i.gioCustomTracking) ||
              void 0 === s ||
              s.buildUserAttributesEvent(e, t)
            : this.callError("setUserAttributes");
        }),
        (this.setUserId = (e, t) => {
          if (X(N(e).trim())) {
            const i = this.userStore.gioId;
            this.vdsConfig.enableIdMapping &&
              (this.userStore.userKey =
                !p(t) && N(t).length > 0 ? N(t).slice(0, 1e3) : ""),
              (this.userStore.userId = N(e).slice(0, 1e3)),
              i &&
                i !== this.userStore.userId &&
                (this.userStore.sessionId = "");
          } else this.clearUserId(), this.callError("setUserId");
        }),
        (this.clearUserId = () => {
          (this.userStore.userId = ""), (this.userStore.userKey = "");
        }),
        (this.track = (e, t, i, s) => {
          var o, r;
          (
            (null ===
              (r =
                null === (o = this.plugins) || void 0 === o
                  ? void 0
                  : o.gioCustomTracking) || void 0 === r
              ? void 0
              : r.buildCustomEvent) || function () {}
          )(
            e,
            Object.assign(
              Object.assign({}, this.dataStore.generalProps),
              w(t) && !H(t) ? t : {}
            ),
            i,
            s
          );
        }),
        (this.sendPage = (e) => this.dataStore.currentPage.buildPageEvent(e)),
        (this.sendVisit = (e) => this.dataStore.buildVisitEvent(e)),
        (this.trackTimerStart = (e, t) => {
          this.vdsConfig.dataCollect &&
            Q(e, () => {
              const i = se();
              S(t)
                ? ((this.dataStore.trackTimers[i] = {
                    eventName: e,
                    leng: 0,
                    start: +Date.now(),
                  }),
                  t(i))
                : M("回调方法不合法，返回timerId失败!");
            });
        }),
        (this.trackTimerPause = (e) => {
          if (e && this.dataStore.trackTimers[e]) {
            const t = this.dataStore.trackTimers[e];
            t.start && (t.leng = t.leng + (+Date.now() - t.start)),
              (t.start = 0);
          }
        }),
        (this.trackTimerResume = (e) => {
          if (e && this.dataStore.trackTimers[e]) {
            const t = this.dataStore.trackTimers[e];
            0 === t.start && (t.start = +Date.now());
          }
        }),
        (this.trackTimerEnd = (e, t) => {
          if (this.vdsConfig.dataCollect) {
            const i = 864e5;
            if (e && this.dataStore.trackTimers[e]) {
              const s = this.dataStore.trackTimers[e];
              if (0 !== s.start) {
                const e = +Date.now() - s.start;
                s.leng = e > 0 ? s.leng + e : 0;
              }
              this.track(
                s.eventName,
                Object.assign(Object.assign({}, t), {
                  event_duration: s.leng > i ? 0 : s.leng / 1e3,
                })
              ),
                this.removeTimer(e);
            } else M("未查找到对应的计时器，请检查!", "error");
          }
        }),
        (this.removeTimer = (e) => {
          e &&
            this.dataStore.trackTimers[e] &&
            delete this.dataStore.trackTimers[e];
        }),
        (this.clearTrackTimer = () => {
          this.dataStore.trackTimers = {};
        }),
        (this.dataStore = new Ne(this));
    }
  }
  let Ue;
  return (
    (function () {
      var e, t, i, s, r;
      let n = window.gioCompatibilityVds ? "gdp_vds" : "vds";
      if (null === (e = window[n]) || void 0 === e ? void 0 : e.gioSDKInstalled)
        return (
          (Ue = window.gdp),
          void M(
            "SDK重复加载，请检查是否重复加载SDK或接入其他平台SDK导致冲突!",
            "warn"
          )
        );
      window[n] = Object.assign(
        Object.assign({}, null !== (t = window[n]) && void 0 !== t ? t : {}),
        { gioSDKInstalled: !0 }
      );
      const d = new Ae();
      Ue = function () {
        var e;
        const t = arguments[0];
        if (I(t) && j(o, t) && d[t]) {
          const e = _(q(arguments));
          if ("init" === t) {
            const t = ((e) => {
              var t;
              return e.vdsConfig ||
                e.gioSDKInitialized ||
                (null === (t = window.vds) || void 0 === t
                  ? void 0
                  : t.gioSDKInitialized)
                ? (M(
                    "SDK重复初始化，请检查是否重复加载SDK或接入其他平台SDK导致冲突!",
                    "warn"
                  ),
                  !1)
                : !(
                    j(["", "localhost", "127.0.0.1"], location.hostname) &&
                    !window._gr_ignore_local_rule &&
                    (M("当前SDK不允许在本地环境初始化!", "warn"), 1)
                  );
            })(d);
            if (!t) return;
            const i = ((e) =>
              !H(C(e)) ||
              (M(
                'SDK初始化失败，请使用 gdp("init", "您的GrowingIO项目 accountId", "您项目的 dataSourceId", options); 进行初始化!',
                "error"
              ),
              !1))(e);
            if (!i) return;
            const s = ((e) => {
              const t = E(e);
              let i = T(e);
              return X(N(t).trim())
                ? ((w(i) && i) || (i = {}), { projectId: t, userOptions: i })
                : (M("SDK初始化失败，accountId 参数不合法!", "error"), !1);
            })(e);
            if (!s) return;
            const o = ((e) => {
              const t = e[1],
                i = e[2],
                s = T(e);
              return t && I(t)
                ? { dataSourceId: t, appId: I(i) ? i : "", cdpOptions: s }
                : (M("SDK初始化失败，dataSourceId 参数不合法!", "error"), !1);
            })(e);
            if (!o) return;
            const { projectId: r } = s,
              { dataSourceId: n, appId: a, cdpOptions: l } = o;
            d.init(
              Object.assign(Object.assign({}, l), {
                projectId: r,
                dataSourceId: n,
                appId: a,
              })
            );
          } else if ("registerPlugins" === t) d.registerPlugins(e[0]);
          else {
            if (d.gioSDKInitialized && d.vdsConfig) return d[t](...e);
            d.emitter.emit("UNINITIALIZED_CALL", arguments),
              M("SDK未初始化!", "error");
          }
        } else
          j(a, t)
            ? M(`方法 ${N(t)} 已被弃用，请移除!`, "warn")
            : M(`不存在名为 ${N(t)} 的方法调用!`, "error");
        window[n] = Object.assign(Object.assign({}, window[n]), {
          _gr_ignore_local_rule:
            null !== (e = window._gr_ignore_local_rule) && void 0 !== e && e,
          gioEnvironment: "cdp",
          gioSDKVersion: d.sdkVersion,
          gioSDKFull: d.gioSDKFull,
          canIUse: (e) => j(o, e) && d[e],
        });
      };
      const l =
          null ===
            (i = null === window || void 0 === window ? void 0 : window.gdp) ||
          void 0 === i
            ? void 0
            : i.q,
        g =
          null ===
            (s = null === window || void 0 === window ? void 0 : window.gdp) ||
          void 0 === s
            ? void 0
            : s.e,
        h =
          null ===
            (r = null === window || void 0 === window ? void 0 : window.gdp) ||
          void 0 === r
            ? void 0
            : r.ef;
      (window.gdp = Ue),
        (window.gdp.e = g),
        (window.gdp.ef = h),
        O(l) &&
          !H(l) &&
          l.forEach((e) => {
            Ue.apply(null, e);
          });
    })(),
    Ue
  );
});
