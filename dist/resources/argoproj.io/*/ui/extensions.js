/*! For license information please see extensions.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      d: (t, o) => {
        for (var n in o)
          e.o(o, n) &&
            !e.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t), e.d(t, { Extension: () => i, component: () => c });
  const o = window.React;
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var n in o) e[n] = o[n];
    }
    return e;
  }
  const r = (function e(t, o) {
    function r(e, r, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = n({}, o, i)).expires &&
          (i.expires = new Date(Date.now() + 864e5 * i.expires)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (e = encodeURIComponent(e)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var c = "";
        for (var u in i)
          i[u] &&
            ((c += "; " + u), !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
        return (document.cookie = e + "=" + t.write(r, e) + c);
      }
    }
    return Object.create(
      {
        set: r,
        get: function (e) {
          if ("undefined" != typeof document && (!arguments.length || e)) {
            for (
              var o = document.cookie ? document.cookie.split("; ") : [],
                n = {},
                r = 0;
              r < o.length;
              r++
            ) {
              var i = o[r].split("="),
                c = i.slice(1).join("=");
              try {
                var u = decodeURIComponent(i[0]);
                if (((n[u] = t.read(c, u)), e === u)) break;
              } catch (e) {}
            }
            return e ? n[e] : n;
          }
        },
        remove: function (e, t) {
          r(e, "", n({}, t, { expires: -1 }));
        },
        withAttributes: function (t) {
          return e(this.converter, n({}, this.attributes, t));
        },
        withConverter: function (t) {
          return e(n({}, this.converter, t), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(o) },
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
  var i = function () {
      console.log("COSMIN"), console.log(window.document.cookie);
      var e = r.get("argocd.token");
      return (
        console.log(e),
        o.createElement("div", null, e, o.createElement("p", null, "Alex"))
      );
    },
    c = i;
  ((window.extensions = window.extensions || {}).resources =
    window.extensions.resources || {})["argoproj.io/*"] = t;
})();
