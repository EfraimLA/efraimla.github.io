import { d as derived, w as writable } from "./index.js";
import t from "deepmerge";
import o from "intl-messageformat";
const i = {}, r = (e, n, t2) => t2 ? (n in i || (i[n] = {}), e in i[n] || (i[n][e] = t2), t2) : t2, s = (e, n) => {
  if (null == n)
    return;
  if (n in i && e in i[n])
    return i[n][e];
  const t2 = E(n);
  for (let o2 = 0; o2 < t2.length; o2++) {
    const i2 = c(t2[o2], e);
    if (i2)
      return r(e, n, i2);
  }
};
let l;
const a = writable({});
function u(e) {
  return e in l;
}
function c(e, n) {
  if (!u(e))
    return null;
  const t2 = function(e2) {
    return l[e2] || null;
  }(e);
  return function(e2, n2) {
    if (null == n2)
      return;
    if (n2 in e2)
      return e2[n2];
    const t3 = n2.split(".");
    let o2 = e2;
    for (let e3 = 0; e3 < t3.length; e3++)
      if ("object" == typeof o2) {
        if (e3 > 0) {
          const n3 = t3.slice(e3, t3.length).join(".");
          if (n3 in o2) {
            o2 = o2[n3];
            break;
          }
        }
        o2 = o2[t3[e3]];
      } else
        o2 = void 0;
    return o2;
  }(t2, n);
}
function m(e, ...n) {
  delete i[e], a.update((o2) => (o2[e] = t.all([o2[e] || {}, ...n]), o2));
}
derived([a], ([e]) => Object.keys(e));
a.subscribe((e) => l = e);
const d = {};
function g(e) {
  return d[e];
}
function h(e) {
  return null != e && E(e).some((e2) => {
    var n;
    return null === (n = g(e2)) || void 0 === n ? void 0 : n.size;
  });
}
function w(e, n) {
  const t2 = Promise.all(n.map((n2) => (function(e2, n3) {
    d[e2].delete(n3), 0 === d[e2].size && delete d[e2];
  }(e, n2), n2().then((e2) => e2.default || e2))));
  return t2.then((n2) => m(e, ...n2));
}
const p = {};
function b(e) {
  if (!h(e))
    return e in p ? p[e] : Promise.resolve();
  const n = function(e2) {
    return E(e2).map((e3) => {
      const n2 = g(e3);
      return [e3, n2 ? [...n2] : []];
    }).filter(([, e3]) => e3.length > 0);
  }(e);
  return p[e] = Promise.all(n.map(([e2, n2]) => w(e2, n2))).then(() => {
    if (h(e))
      return b(e);
    delete p[e];
  }), p[e];
}
function y(e, n) {
  g(e) || function(e2) {
    d[e2] = /* @__PURE__ */ new Set();
  }(e);
  const t2 = g(e);
  g(e).has(n) || (u(e) || a.update((n2) => (n2[e] = {}, n2)), t2.add(n));
}
function v({ locale: e, id: n }) {
  console.warn(`[svelte-i18n] The message "${n}" was not found in "${E(e).join('", "')}".${h(D()) ? "\n\nNote: there are at least one loader still registered to this locale that wasn't executed." : ""}`);
}
const M = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: true, handleMissingMessage: void 0, ignoreTag: true };
function j() {
  return M;
}
function O(e) {
  const { formats: n, ...t2 } = e, o2 = e.initialLocale || e.fallbackLocale;
  return t2.warnOnMissingMessages && (delete t2.warnOnMissingMessages, null == t2.handleMissingMessage ? t2.handleMissingMessage = v : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(M, t2, { initialLocale: o2 }), n && ("number" in n && Object.assign(M.formats.number, n.number), "date" in n && Object.assign(M.formats.date, n.date), "time" in n && Object.assign(M.formats.time, n.time)), x.set(o2);
}
const $ = writable(false);
let k;
const T = writable(null);
function L(e) {
  return e.split("-").map((e2, n, t2) => t2.slice(0, n + 1).join("-")).reverse();
}
function E(e, n = j().fallbackLocale) {
  const t2 = L(e);
  return n ? [.../* @__PURE__ */ new Set([...t2, ...L(n)])] : t2;
}
function D() {
  return null != k ? k : void 0;
}
T.subscribe((e) => {
  k = null != e ? e : void 0, "undefined" != typeof window && null != e && document.documentElement.setAttribute("lang", e);
});
const x = { ...T, set: (e) => {
  if (e && function(e2) {
    if (null == e2)
      return;
    const n = E(e2);
    for (let e3 = 0; e3 < n.length; e3++) {
      const t2 = n[e3];
      if (u(t2))
        return t2;
    }
  }(e) && h(e)) {
    const { loadingDelay: n } = j();
    let t2;
    return "undefined" != typeof window && null != D() && n ? t2 = window.setTimeout(() => $.set(true), n) : $.set(true), b(e).then(() => {
      T.set(e);
    }).finally(() => {
      clearTimeout(t2), $.set(false);
    });
  }
  return T.set(e);
} }, z = () => "undefined" == typeof window ? null : window.navigator.language || window.navigator.languages[0], Z = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t2) => {
    const o2 = JSON.stringify(t2);
    return o2 in n ? n[o2] : n[o2] = e(t2);
  };
}, C = (e, n) => {
  const { formats: t2 } = j();
  if (e in t2 && n in t2[e])
    return t2[e][n];
  throw new Error(`[svelte-i18n] Unknown "${n}" ${e} format.`);
}, G = Z(({ locale: e, format: n, ...t2 }) => {
  if (null == e)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return n && (t2 = C("number", n)), new Intl.NumberFormat(e, t2);
}), J = Z(({ locale: e, format: n, ...t2 }) => {
  if (null == e)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return n ? t2 = C("date", n) : 0 === Object.keys(t2).length && (t2 = C("date", "short")), new Intl.DateTimeFormat(e, t2);
}), U = Z(({ locale: e, format: n, ...t2 }) => {
  if (null == e)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return n ? t2 = C("time", n) : 0 === Object.keys(t2).length && (t2 = C("time", "short")), new Intl.DateTimeFormat(e, t2);
}), V = ({ locale: e = D(), ...n } = {}) => G({ locale: e, ...n }), _ = ({ locale: e = D(), ...n } = {}) => J({ locale: e, ...n }), q = ({ locale: e = D(), ...n } = {}) => U({ locale: e, ...n }), B = Z((e, n = D()) => new o(e, n, j().formats, { ignoreTag: j().ignoreTag })), H = (e, n = {}) => {
  var t2, o2, i2, r2;
  let l2 = n;
  "object" == typeof e && (l2 = e, e = l2.id);
  const { values: a2, locale: u2 = D(), default: c2 } = l2;
  if (null == u2)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let m2 = s(e, u2);
  if (m2) {
    if ("string" != typeof m2)
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof m2}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), m2;
  } else
    m2 = null !== (r2 = null !== (i2 = null === (o2 = (t2 = j()).handleMissingMessage) || void 0 === o2 ? void 0 : o2.call(t2, { locale: u2, id: e, defaultValue: c2 })) && void 0 !== i2 ? i2 : c2) && void 0 !== r2 ? r2 : e;
  if (!a2)
    return m2;
  let f = m2;
  try {
    f = B(m2, u2).format(a2);
  } catch (n2) {
    n2 instanceof Error && console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, n2.message);
  }
  return f;
}, K = (e, n) => q(n).format(e), Q = (e, n) => _(n).format(e), R = (e, n) => V(n).format(e), W = (e, n = D()) => s(e, n), X = derived([x, a], () => H);
derived([x], () => K);
derived([x], () => Q);
derived([x], () => R);
derived([x, a], () => W);
export {
  $,
  O,
  X,
  y,
  z
};
