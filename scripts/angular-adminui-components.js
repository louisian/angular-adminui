(function (e, undefined) {
  var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = '2.0.2', f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function (e, n) {
      return new x.fn.init(e, n, t);
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function (e, t) {
      return t.toUpperCase();
    }, S = function () {
      o.removeEventListener('DOMContentLoaded', S, !1), e.removeEventListener('load', S, !1), x.ready();
    };
  x.fn = x.prototype = {
    jquery: p,
    constructor: x,
    init: function (e, t, n) {
      var r, i;
      if (!e)
        return this;
      if ('string' == typeof e) {
        if (r = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [
            null,
            e,
            null
          ] : T.exec(e), !r || !r[1] && t)
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
            for (r in t)
              x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ('boolean' == typeof s && (l = s, s = arguments[1] || {}, a = 2), 'object' == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e)
          n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
    return s;
  }, x.extend({
    expando: 'jQuery' + (p + Math.random()).replace(/\D/g, ''),
    noConflict: function (t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger('ready').off('ready')));
    },
    isFunction: function (e) {
      return 'function' === x.type(e);
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? l[m.call(e)] || 'object' : typeof e;
    },
    isPlainObject: function (e) {
      if ('object' !== x.type(e) || e.nodeType || x.isWindow(e))
        return !1;
      try {
        if (e.constructor && !y.call(e.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (t) {
        return !1;
      }
      return !0;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || 'string' != typeof e)
        return null;
      'boolean' == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: JSON.parse,
    parseXML: function (e) {
      var t, n;
      if (!e || 'string' != typeof e)
        return null;
      try {
        n = new DOMParser(), t = n.parseFromString(e, 'text/xml');
      } catch (r) {
        t = undefined;
      }
      return (!t || t.getElementsByTagName('parsererror').length) && x.error('Invalid XML: ' + e), t;
    },
    noop: function () {
    },
    globalEval: function (e) {
      var t, n = eval;
      e = x.trim(e), e && (1 === e.indexOf('use strict') ? (t = o.createElement('script'), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(k, 'ms-').replace(N, E);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e);
      if (n) {
        if (s) {
          for (; o > i; i++)
            if (r = t.apply(e[i], n), r === !1)
              break;
        } else
          for (i in e)
            if (r = t.apply(e[i], n), r === !1)
              break;
      } else if (s) {
        for (; o > i; i++)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      } else
        for (i in e)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      return e;
    },
    trim: function (e) {
      return null == e ? '' : v.call(e);
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (j(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : g.call(t, e, n);
    },
    merge: function (e, t) {
      var n = t.length, r = e.length, i = 0;
      if ('number' == typeof n)
        for (; n > i; i++)
          e[r++] = t[i];
      else
        while (t[i] !== undefined)
          e[r++] = t[i++];
      return e.length = r, e;
    },
    grep: function (e, t, n) {
      var r, i = [], o = 0, s = e.length;
      for (n = !!n; s > o; o++)
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e), a = [];
      if (s)
        for (; o > i; i++)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      else
        for (i in e)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      return f.apply([], a);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i;
      return 'string' == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
        return e.apply(t || this, r.concat(d.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
    },
    access: function (e, t, n, r, i, o, s) {
      var a = 0, u = e.length, l = null == n;
      if ('object' === x.type(n)) {
        i = !0;
        for (a in n)
          x.access(e, t, a, n[a], !0, o, s);
      } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(x(e), n);
        })), t))
        for (; u > a; a++)
          t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    now: Date.now,
    swap: function (e, t, n, r) {
      var i, o, s = {};
      for (o in t)
        s[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = s[o];
      return i;
    }
  }), x.ready.promise = function (t) {
    return n || (n = x.Deferred(), 'complete' === o.readyState ? setTimeout(x.ready) : (o.addEventListener('DOMContentLoaded', S, !1), e.addEventListener('load', S, !1))), n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    l['[object ' + t + ']'] = t.toLowerCase();
  });
  function j(e) {
    var t = e.length, n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  t = x(o), function (e, undefined) {
    var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = 'sizzle' + -new Date(), b = e.document, w = 0, T = 0, C = at(), k = at(), N = at(), E = !1, S = function () {
        return 0;
      }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], H = L.pop, q = L.push, O = L.push, F = L.slice, P = L.indexOf || function (e) {
        var t = 0, n = this.length;
        for (; n > t; t++)
          if (this[t] === e)
            return t;
        return -1;
      }, R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', W = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', $ = W.replace('w', 'w#'), B = '\\[' + M + '*(' + W + ')' + M + '*(?:([*^$|!~]?=)' + M + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + $ + ')|)|)' + M + '*\\]', I = ':(' + W + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + B.replace(3, 8) + ')*)|.*)\\)|)', z = RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), _ = RegExp('^' + M + '*,' + M + '*'), X = RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = RegExp(M + '*[+~]'), Y = RegExp('=' + M + '*([^\\]\'"]*)' + M + '*\\]', 'g'), V = RegExp(I), G = RegExp('^' + $ + '$'), J = {
        ID: RegExp('^#(' + W + ')'),
        CLASS: RegExp('^\\.(' + W + ')'),
        TAG: RegExp('^(' + W.replace('w', 'w*') + ')'),
        ATTR: RegExp('^' + B),
        PSEUDO: RegExp('^' + I),
        CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: RegExp('^(?:' + R + ')$', 'i'),
        needsContext: RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
      }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), rt = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
    } catch (it) {
      O = {
        apply: L.length ? function (e, t) {
          q.apply(e, F.call(t));
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function ot(e, t, r, i) {
      var o, s, a, u, l, f, g, m, x, w;
      if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || 'string' != typeof e)
        return r;
      if (1 !== (u = t.nodeType) && 9 !== u)
        return [];
      if (h && !i) {
        if (o = K.exec(e))
          if (a = o[1]) {
            if (9 === u) {
              if (s = t.getElementById(a), !s || !s.parentNode)
                return r;
              if (s.id === a)
                return r.push(s), r;
            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
              return r.push(s), r;
          } else {
            if (o[2])
              return O.apply(r, t.getElementsByTagName(e)), r;
            if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return O.apply(r, t.getElementsByClassName(a)), r;
          }
        if (n.qsa && (!d || !d.test(e))) {
          if (m = g = v, x = t, w = 9 === u && e, 1 === u && 'object' !== t.nodeName.toLowerCase()) {
            f = vt(e), (g = t.getAttribute('id')) ? m = g.replace(tt, '\\$&') : t.setAttribute('id', m), m = '[id=\'' + m + '\'] ', l = f.length;
            while (l--)
              f[l] = m + xt(f[l]);
            x = U.test(e) && t.parentNode || t, w = f.join(',');
          }
          if (w)
            try {
              return O.apply(r, x.querySelectorAll(w)), r;
            } catch (T) {
            } finally {
              g || t.removeAttribute('id');
            }
        }
      }
      return St(e.replace(z, '$1'), t, r, i);
    }
    function st(e) {
      return Q.test(e + '');
    }
    function at() {
      var e = [];
      function t(n, r) {
        return e.push(n += ' ') > i.cacheLength && delete t[e.shift()], t[n] = r;
      }
      return t;
    }
    function ut(e) {
      return e[v] = !0, e;
    }
    function lt(e) {
      var t = p.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function ct(e, t, n) {
      e = e.split('|');
      var r, o = e.length, s = n ? null : t;
      while (o--)
        (r = i.attrHandle[e[o]]) && r !== t || (i.attrHandle[e[o]] = s);
    }
    function pt(e, t) {
      var n = e.getAttributeNode(t);
      return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null;
    }
    function ft(e, t) {
      return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }
    function ht(e) {
      return 'input' === e.nodeName.toLowerCase() ? e.defaultValue : undefined;
    }
    function dt(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r)
        return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function gt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function mt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function yt(e) {
      return ut(function (t) {
        return t = +t, ut(function (n, r) {
          var i, o = e([], n.length, t), s = o.length;
          while (s--)
            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    s = ot.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? 'HTML' !== t.nodeName : !1;
    }, n = ot.support = {}, c = ot.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : b, r = t.parentWindow;
      return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.frameElement && r.attachEvent('onbeforeunload', function () {
        c();
      }), n.attributes = lt(function (e) {
        return e.innerHTML = '<a href=\'#\'></a>', ct('type|href|height|width', ft, '#' === e.firstChild.getAttribute('href')), ct(R, pt, null == e.getAttribute('disabled')), e.className = 'i', !e.getAttribute('className');
      }), n.input = lt(function (e) {
        return e.innerHTML = '<input>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
      }), ct('value', ht, n.attributes && n.input), n.getElementsByTagName = lt(function (e) {
        return e.appendChild(t.createComment('')), !e.getElementsByTagName('*').length;
      }), n.getElementsByClassName = lt(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), n.getById = lt(function (e) {
        return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
      }), n.getById ? (i.find.ID = function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete i.find.ID, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          var n = typeof e.getAttributeNode !== j && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          while (n = o[i++])
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined;
      }, g = [], d = [], (n.qsa = st(t.querySelectorAll)) && (lt(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || d.push('\\[' + M + '*(?:value|' + R + ')'), e.querySelectorAll(':checked').length || d.push(':checked');
      }), lt(function (e) {
        var n = t.createElement('input');
        n.setAttribute('type', 'hidden'), e.appendChild(n).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && d.push('[*^$]=' + M + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || d.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), d.push(',.*:');
      })), (n.matchesSelector = st(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function (e) {
        n.disconnectedMatch = m.call(e, 'div'), m.call(e, '[s!=\'\']:x'), g.push('!=', I);
      }), d = d.length && RegExp(d.join('|')), g = g.length && RegExp(g.join('|')), y = st(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          while (t = t.parentNode)
            if (t === e)
              return !0;
        return !1;
      }, n.sortDetached = lt(function (e) {
        return 1 & e.compareDocumentPosition(t.createElement('div'));
      }), S = f.compareDocumentPosition ? function (e, r) {
        if (e === r)
          return E = !0, 0;
        var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
        return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, n) {
        var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
        if (e === n)
          return E = !0, 0;
        if (!o || !s)
          return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
        if (o === s)
          return dt(e, n);
        r = e;
        while (r = r.parentNode)
          a.unshift(r);
        r = n;
        while (r = r.parentNode)
          u.unshift(r);
        while (a[i] === u[i])
          i++;
        return i ? dt(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
      }, t) : p;
    }, ot.matches = function (e, t) {
      return ot(e, null, null, t);
    }, ot.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, '=\'$1\']'), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
        try {
          var r = m.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return r;
        } catch (i) {
        }
      return ot(t, p, null, [e]).length > 0;
    }, ot.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, ot.attr = function (e, t) {
      (e.ownerDocument || e) !== p && c(e);
      var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
      return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
    }, ot.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }, ot.uniqueSort = function (e) {
      var t, r = [], i = 0, o = 0;
      if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
        while (t = e[o++])
          t === e[o] && (i = r.push(o));
        while (i--)
          e.splice(r[i], 1);
      }
      return e;
    }, o = ot.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += o(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r]; r++)
          n += o(t);
      return n;
    }, i = ot.selectors = {
      cacheLength: 50,
      createPseudo: ut,
      match: J,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || '').replace(nt, rt), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && ot.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t, n = !e[5] && e[2];
          return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = vt(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(nt, rt).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = C[e + ' '];
          return t || (t = RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && C(e, function (e) {
            return t.test('string' == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = ot.attr(r, e);
            return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > -1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), s = 'last' !== e.slice(-4), a = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l, c, p, f, h, d, g = o !== s ? 'nextSibling' : 'previousSibling', m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g])
                    if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                      return !1;
                  d = g = 'only' === e && !d && 'nextSibling';
                }
                return !0;
              }
              if (d = [s ? m.firstChild : m.lastChild], s && x) {
                c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [
                      w,
                      h,
                      f
                    ];
                    break;
                  }
              } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w)
                f = l[1];
              else
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [
                      w,
                      f
                    ]), p === t))
                    break;
              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error('unsupported pseudo: ' + e);
          return r[v] ? r(t) : r.length > 1 ? (n = [
            e,
            e,
            '',
            t
          ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) {
            var i, o = r(e, t), s = o.length;
            while (s--)
              i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: ut(function (e) {
          var t = [], n = [], r = a(e.replace(z, '$1'));
          return r[v] ? ut(function (e, t, n, i) {
            var o, s = r(e, null, i, []), a = e.length;
            while (a--)
              (o = s[a]) && (e[a] = !(t[a] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: ut(function (e) {
          return function (t) {
            return ot(e, t).length > 0;
          };
        }),
        contains: ut(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }),
        lang: ut(function (e) {
          return G.test(e || '') || ot.error('unsupported lang: ' + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
            var n;
            do
              if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === f;
        },
        focus: function (e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return et.test(e.nodeName);
        },
        input: function (e) {
          return Z.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        },
        first: yt(function () {
          return [0];
        }),
        last: yt(function (e, t) {
          return [t - 1];
        }),
        eq: yt(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: yt(function (e, t) {
          var n = 0;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        odd: yt(function (e, t) {
          var n = 1;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        lt: yt(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: yt(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; t > ++r;)
            e.push(r);
          return e;
        })
      }
    };
    for (t in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      i.pseudos[t] = gt(t);
    for (t in {
        submit: !0,
        reset: !0
      })
      i.pseudos[t] = mt(t);
    function vt(e, t) {
      var n, r, o, s, a, u, l, c = k[e + ' '];
      if (c)
        return t ? 0 : c.slice(0);
      a = e, u = [], l = i.preFilter;
      while (a) {
        (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), a = a.slice(n.length));
        for (s in i.filter)
          !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
            value: n,
            type: s,
            matches: r
          }), a = a.slice(n.length));
        if (!n)
          break;
      }
      return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
    }
    function xt(e) {
      var t = 0, n = e.length, r = '';
      for (; n > t; t++)
        r += e[t].value;
      return r;
    }
    function bt(e, t, n) {
      var i = t.dir, o = n && 'parentNode' === i, s = T++;
      return t.first ? function (t, n, r) {
        while (t = t[i])
          if (1 === t.nodeType || o)
            return e(t, n, r);
      } : function (t, n, a) {
        var u, l, c, p = w + ' ' + s;
        if (a) {
          while (t = t[i])
            if ((1 === t.nodeType || o) && e(t, n, a))
              return !0;
        } else
          while (t = t[i])
            if (1 === t.nodeType || o)
              if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
                if ((u = l[1]) === !0 || u === r)
                  return u === !0;
              } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0)
                return !0;
      };
    }
    function wt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function Tt(e, t, n, r, i) {
      var o, s = [], a = 0, u = e.length, l = null != t;
      for (; u > a; a++)
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s;
    }
    function Ct(e, t, n, r, i, o) {
      return r && !r[v] && (r = Ct(r)), i && !i[v] && (i = Ct(i, o)), ut(function (o, s, a, u) {
        var l, c, p, f = [], h = [], d = s.length, g = o || Et(t || '*', a.nodeType ? [a] : a, []), m = !e || !o && t ? g : Tt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
        if (n && n(m, y, a, u), r) {
          l = Tt(y, h), r(l, [], a, u), c = l.length;
          while (c--)
            (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;
              while (c--)
                (p = y[c]) && l.push(m[c] = p);
              i(null, y = [], l, u);
            }
            c = y.length;
            while (c--)
              (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
          }
        } else
          y = Tt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
      });
    }
    function kt(e) {
      var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[' '], l = s ? 1 : 0, c = bt(function (e) {
          return e === t;
        }, a, !0), p = bt(function (e) {
          return P.call(t, e) > -1;
        }, a, !0), f = [function (e, n, r) {
            return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          }];
      for (; o > l; l++)
        if (n = i.relative[e[l].type])
          f = [bt(wt(f), n)];
        else {
          if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
            for (r = ++l; o > r; r++)
              if (i.relative[e[r].type])
                break;
            return Ct(l > 1 && wt(f), l > 1 && xt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'), n, r > l && kt(e.slice(l, r)), o > r && kt(e = e.slice(r)), o > r && xt(e));
          }
          f.push(n);
        }
      return wt(f);
    }
    function Nt(e, t) {
      var n = 0, o = t.length > 0, s = e.length > 0, a = function (a, l, c, f, h) {
          var d, g, m, y = [], v = 0, x = '0', b = a && [], T = null != h, C = u, k = a || s && i.find.TAG('*', h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || 0.1;
          for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
            if (s && d) {
              g = 0;
              while (m = e[g++])
                if (m(d, l, c)) {
                  f.push(d);
                  break;
                }
              T && (w = N, r = ++n);
            }
            o && ((d = !m && d) && v--, a && b.push(d));
          }
          if (v += x, o && x !== v) {
            g = 0;
            while (m = t[g++])
              m(b, y, l, c);
            if (a) {
              if (v > 0)
                while (x--)
                  b[x] || y[x] || (y[x] = H.call(f));
              y = Tt(y);
            }
            O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
          }
          return T && (w = N, u = C), b;
        };
      return o ? ut(a) : a;
    }
    a = ot.compile = function (e, t) {
      var n, r = [], i = [], o = N[e + ' '];
      if (!o) {
        t || (t = vt(e)), n = t.length;
        while (n--)
          o = kt(t[n]), o[v] ? r.push(o) : i.push(o);
        o = N(e, Nt(i, r));
      }
      return o;
    };
    function Et(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++)
        ot(e, t[r], n);
      return n;
    }
    function St(e, t, r, o) {
      var s, u, l, c, p, f = vt(e);
      if (!o && 1 === f.length) {
        if (u = f[0] = f[0].slice(0), u.length > 2 && 'ID' === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
          if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t)
            return r;
          e = e.slice(u.shift().value.length);
        }
        s = J.needsContext.test(e) ? 0 : u.length;
        while (s--) {
          if (l = u[s], i.relative[c = l.type])
            break;
          if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
            if (u.splice(s, 1), e = o.length && xt(u), !e)
              return O.apply(r, o), r;
            break;
          }
        }
      }
      return a(e, f)(o, t, !h, r, U.test(e)), r;
    }
    i.pseudos.nth = i.pseudos.eq;
    function jt() {
    }
    jt.prototype = i.filters = i.pseudos, i.setFilters = new jt(), n.sortStable = v.split('').sort(S).join('') === v, c(), [
      0,
      0
    ].sort(S), n.detectDuplicates = E, x.find = ot, x.expr = ot.selectors, x.expr[':'] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
  }(e);
  var D = {};
  function A(e) {
    var t = D[e] = {};
    return x.each(e.match(w) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  x.Callbacks = function (e) {
    e = 'string' == typeof e ? D[e] || A(e) : x.extend({}, e);
    var t, n, r, i, o, s, a = [], u = !e.once && [], l = function (p) {
        for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
          if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
      }, c = {
        add: function () {
          if (a) {
            var n = a.length;
            (function s(t) {
              x.each(t, function (t, n) {
                var r = x.type(n);
                'function' === r ? e.unique && c.has(n) || a.push(n) : n && n.length && 'string' !== r && s(n);
              });
            }(arguments), r ? o = a.length : t && (i = n, l(t)));
          }
          return this;
        },
        remove: function () {
          return a && x.each(arguments, function (e, t) {
            var n;
            while ((n = x.inArray(t, a, n)) > -1)
              a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
          }), this;
        },
        has: function (e) {
          return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
        },
        empty: function () {
          return a = [], o = 0, this;
        },
        disable: function () {
          return a = u = t = undefined, this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return u = undefined, t || c.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return t = t || [], t = [
            e,
            t.slice ? t.slice() : t
          ], !a || n && !u || (r ? u.push(t) : l(t)), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        }
      };
    return c;
  }, x.extend({
    Deferred: function (e) {
      var t = [
          [
            'resolve',
            'done',
            x.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            x.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            x.Callbacks('memory')
          ]
        ], n = 'pending', r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
              x.each(t, function (t, o) {
                var s = o[0], a = x.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + 'With'](this === r ? n.promise() : this, a ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          promise: function (e) {
            return null != e ? x.extend(e, r) : r;
          }
        }, i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var s = o[2], a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = s.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        }, a, u, l;
      if (r > 1)
        for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)
          n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
      return i || o.resolveWith(l, n), o.promise();
    }
  }), x.support = function (t) {
    var n = o.createElement('input'), r = o.createDocumentFragment(), i = o.createElement('div'), s = o.createElement('select'), a = s.appendChild(o.createElement('option'));
    return n.type ? (n.type = 'checkbox', t.checkOn = '' !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement('input'), n.value = 't', n.type = 'radio', t.radioValue = 't' === n.value, n.setAttribute('checked', 't'), n.setAttribute('name', 't'), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = 'onfocusin' in e, i.style.backgroundClip = 'content-box', i.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === i.style.backgroundClip, x(function () {
      var n, r, s = 'padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box', a = o.getElementsByTagName('body')[0];
      a && (n = o.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', a.appendChild(n).appendChild(i), i.innerHTML = '', i.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%', x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === i.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(i, null) || { width: '4px' }).width, r = i.appendChild(o.createElement('div')), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = '0', i.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
    }), t) : t;
  }({});
  var L, H, q = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
  function F() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {};
      }
    }), this.expando = x.expando + Math.random();
  }
  F.uid = 1, F.accepts = function (e) {
    return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
  }, F.prototype = {
    key: function (e) {
      if (!F.accepts(e))
        return 0;
      var t = {}, n = e[this.expando];
      if (!n) {
        n = F.uid++;
        try {
          t[this.expando] = { value: n }, Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = n, x.extend(e, t);
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n;
    },
    set: function (e, t, n) {
      var r, i = this.key(e), o = this.cache[i];
      if ('string' == typeof t)
        o[t] = n;
      else if (x.isEmptyObject(o))
        x.extend(this.cache[i], t);
      else
        for (r in t)
          o[r] = t[r];
      return o;
    },
    get: function (e, t) {
      var n = this.cache[this.key(e)];
      return t === undefined ? n : n[t];
    },
    access: function (e, t, n) {
      return t === undefined || t && 'string' == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t);
    },
    remove: function (e, t) {
      var n, r, i, o = this.key(e), s = this.cache[o];
      if (t === undefined)
        this.cache[o] = {};
      else {
        x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [
          t,
          i
        ] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
        while (n--)
          delete s[r[n]];
      }
    },
    hasData: function (e) {
      return !x.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    }
  }, L = new F(), H = new F(), x.extend({
    acceptData: F.accepts,
    hasData: function (e) {
      return L.hasData(e) || H.hasData(e);
    },
    data: function (e, t, n) {
      return L.access(e, t, n);
    },
    removeData: function (e, t) {
      L.remove(e, t);
    },
    _data: function (e, t, n) {
      return H.access(e, t, n);
    },
    _removeData: function (e, t) {
      H.remove(e, t);
    }
  }), x.fn.extend({
    data: function (e, t) {
      var n, r, i = this[0], o = 0, s = null;
      if (e === undefined) {
        if (this.length && (s = L.get(i), 1 === i.nodeType && !H.get(i, 'hasDataAttrs'))) {
          for (n = i.attributes; n.length > o; o++)
            r = n[o].name, 0 === r.indexOf('data-') && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
          H.set(i, 'hasDataAttrs', !0);
        }
        return s;
      }
      return 'object' == typeof e ? this.each(function () {
        L.set(this, e);
      }) : x.access(this, function (t) {
        var n, r = x.camelCase(e);
        if (i && t === undefined) {
          if (n = L.get(i, e), n !== undefined)
            return n;
          if (n = L.get(i, r), n !== undefined)
            return n;
          if (n = P(i, r, undefined), n !== undefined)
            return n;
        } else
          this.each(function () {
            var n = L.get(this, r);
            L.set(this, r, t), -1 !== e.indexOf('-') && n !== undefined && L.set(this, e, t);
          });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        L.remove(this, e);
      });
    }
  });
  function P(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType)
      if (r = 'data-' + t.replace(O, '-$1').toLowerCase(), n = e.getAttribute(r), 'string' == typeof n) {
        try {
          n = 'true' === n ? !0 : 'false' === n ? !1 : 'null' === n ? null : +n + '' === n ? +n : q.test(n) ? JSON.parse(n) : n;
        } catch (i) {
        }
        L.set(e, t, n);
      } else
        n = undefined;
    return n;
  }
  x.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = (t || 'fx') + 'queue', r = H.get(e, t), n && (!r || x.isArray(n) ? r = H.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function () {
          x.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return H.get(e, n) || H.access(e, n, {
        empty: x.Callbacks('once memory').add(function () {
          H.remove(e, [
            t + 'queue',
            n
          ]);
        })
      });
    }
  }), x.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
        var n = x.queue(this, e, t);
        x._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, t) {
      var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function () {
          --r || i.resolveWith(o, [o]);
        };
      'string' != typeof e && (t = e, e = undefined), e = e || 'fx';
      while (s--)
        n = H.get(o[s], e + 'queueHooks'), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t);
    }
  });
  var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
    addClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : ' ')) {
            o = 0;
            while (i = t[o++])
              0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : '')) {
            o = 0;
            while (i = t[o++])
              while (r.indexOf(' ' + i + ' ') >= 0)
                r = r.replace(' ' + i + ' ', ' ');
            n.className = e ? x.trim(r) : '';
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e, i = 'boolean' == typeof t;
      return x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ('string' === n) {
          var o, s = 0, a = x(this), u = t, l = e.match(w) || [];
          while (o = l[s++])
            u = i ? u : !a.hasClass(o), a[u ? 'addClass' : 'removeClass'](o);
        } else
          (n === r || 'boolean' === n) && (this.className && H.set(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : H.get(this, '__className__') || '');
      });
    },
    hasClass: function (e) {
      var t = ' ' + e + ' ', n = 0, r = this.length;
      for (; r > n; n++)
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(W, ' ').indexOf(t) >= 0)
          return !0;
      return !1;
    },
    val: function (e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length)
          return r = x.isFunction(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : x.isArray(i) && (i = x.map(i, function (e) {
              return null == e ? '' : e + '';
            })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && 'set' in t && t.set(this, i, 'value') !== undefined || (this.value = i));
          });
        if (i)
          return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && 'get' in t && (n = t.get(i, 'value')) !== undefined ? n : (n = i.value, 'string' == typeof n ? n.replace($, '') : null == n ? '' : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function (e) {
          var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
          for (; a > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o)
                return t;
              s.push(t);
            }
          return s;
        },
        set: function (e, t) {
          var n, r, i = e.options, o = x.makeArray(t), s = i.length;
          while (s--)
            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function (e, t, n) {
      var i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && 'get' in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && 'set' in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ''), n) : (x.removeAttr(e, t), undefined));
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(w);
      if (o && 1 === e.nodeType)
        while (n = o[i++])
          r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (e, t, n) {
      var r, i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && 'set' in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute('tabindex') || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), M = {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = x.expr.attrHandle[t] || x.find.attr;
    x.expr.attrHandle[t] = function (e, t, r) {
      var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
      return x.expr.attrHandle[t] = i, o;
    };
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }
  }), x.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.each([
    'radio',
    'checkbox'
  ], function () {
    x.valHooks[this] = {
      set: function (e, t) {
        return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;
  function U() {
    return !0;
  }
  function Y() {
    return !1;
  }
  function V() {
    try {
      return o.activeElement;
    } catch (e) {
    }
  }
  x.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var s, a, u, l, c, p, f, h, d, g, m, y = H.get(e);
      if (y) {
        n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
          return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
        }, a.elem = e), t = (t || '').match(w) || [''], c = t.length;
        while (c--)
          u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || '').split('.').sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
            type: d,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && x.expr.match.needsContext.test(o),
            namespace: g.join('.')
          }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o, s, a, u, l, c, p, f, h, d, g, m = H.hasData(e) && H.get(e);
      if (m && (u = m.events)) {
        t = (t || '').match(w) || [''], l = t.length;
        while (l--)
          if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || '').split('.').sort(), h) {
            p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = f.length;
            while (o--)
              c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
            s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
          } else
            for (h in u)
              x.event.remove(e, h + t[l], n, r, !0);
        x.isEmptyObject(u) && (delete m.handle, H.remove(e, 'events'));
      }
    },
    trigger: function (t, n, r, i) {
      var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, 'type') ? t.type : t, g = y.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf('.') >= 0 && (g = d.split('.'), d = g.shift(), g.sort()), c = 0 > d.indexOf(':') && 'on' + d, t = t[x.expando] ? t : new x.Event(d, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join('.'), t.namespace_re = t.namespace ? RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !x.isWindow(r)) {
          for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
            h.push(a), u = a;
          u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
        }
        s = 0;
        while ((a = h[s++]) && !t.isPropagationStopped())
          t.type = s > 1 ? l : f.bindType || d, p = (H.get(a, 'events') || {})[t.type] && H.get(a, 'handle'), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var t, n, r, i, o, s = [], a = d.call(arguments), u = (H.get(this, 'events') || {})[e.type] || [], l = x.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), t = 0;
        while ((i = s[t++]) && !e.isPropagationStopped()) {
          e.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
      if (a && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (u.disabled !== !0 || 'click' !== e.type) {
            for (r = [], n = 0; a > n; n++)
              o = t[n], i = o.selector + ' ', r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            });
          }
      return t.length > a && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n, r, i, s = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function (e) {
      if (e[x.expando])
        return e;
      var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
      a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
      while (t--)
        n = r[t], e[n] = s[n];
      return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== V() && this.focus ? (this.focus(), !1) : undefined;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === V() && this.blur ? (this.blur(), !1) : undefined;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && x.nodeName(this, 'input') ? (this.click(), !1) : undefined;
        },
        _default: function (e) {
          return x.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, x.Event = function (e, t) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
  }, x.Event.prototype = {
    isDefaultPrevented: Y,
    isPropagationStopped: Y,
    isImmediatePropagationStopped: Y,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = U, this.stopPropagation();
    }
  }, x.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.focusinBubbles || x.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0, r = function (e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0);
      };
    x.event.special[t] = {
      setup: function () {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ('object' == typeof e) {
        'string' != typeof t && (n = n || t, t = undefined);
        for (s in e)
          this.on(s, t, n, e[s], i);
        return this;
      }
      if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ('string' == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1)
        r = Y;
      else if (!r)
        return this;
      return 1 === i && (o = r, r = function (e) {
        return x().off(e), o.apply(this, arguments);
      }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, r, n, t);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return (t === !1 || 'function' == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
        x.event.remove(this, e, n, t);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      return n ? x.event.trigger(e, t, n, !0) : undefined;
    }
  });
  var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  x.fn.extend({
    find: function (e) {
      var t, n = [], r = this, i = r.length;
      if ('string' != typeof e)
        return this.pushStack(x(e).filter(function () {
          for (t = 0; i > t; t++)
            if (x.contains(r[t], this))
              return !0;
        }));
      for (t = 0; i > t; t++)
        x.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    },
    has: function (e) {
      var t = x(e, this), n = t.length;
      return this.filter(function () {
        var e = 0;
        for (; n > e; e++)
          if (x.contains(this, t[e]))
            return !0;
      });
    },
    not: function (e) {
      return this.pushStack(et(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(et(this, e || [], !1));
    },
    is: function (e) {
      return !!et(this, 'string' == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], s = Q.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function Z(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  x.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, 'parentNode', n);
    },
    next: function (e) {
      return Z(e, 'nextSibling');
    },
    prev: function (e) {
      return Z(e, 'previousSibling');
    },
    nextAll: function (e) {
      return x.dir(e, 'nextSibling');
    },
    prevAll: function (e) {
      return x.dir(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
    };
  }), x.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, t, n) {
      var r = [], i = n !== undefined;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && x(e).is(n))
            break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function et(e, t, n) {
    if (x.isFunction(t))
      return x.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return x.grep(e, function (e) {
        return e === t !== n;
      });
    if ('string' == typeof t) {
      if (G.test(t))
        return x.filter(t, e, n);
      t = x.filter(t, e);
    }
    return x.grep(e, function (e) {
      return g.call(t, e) >= 0 !== n;
    });
  }
  var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n, r = e ? x.filter(e, this) : this, i = 0;
      for (; null != (n = r[i]); i++)
        t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, 'script')), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      var e, t = 0;
      for (; null != (e = this[t]); t++)
        1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = '');
      return this;
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (e === undefined && 1 === t.nodeType)
          return t.innerHTML;
        if ('string' == typeof e && !it.test(e) && !ct[(nt.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          e = e.replace(tt, '<$1></$2>');
          try {
            for (; r > n; n++)
              t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (i) {
          }
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = x.map(this, function (e) {
          return [
            e.nextSibling,
            e.parentNode
          ];
        }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = f.apply([], e);
      var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
      if (g || !(1 >= c || 'string' != typeof d || x.support.checkClone) && st.test(d))
        return this.each(function (r) {
          var i = p.eq(r);
          g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
        });
      if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
        for (o = x.map(mt(r, 'script'), ft), s = o.length; c > l; l++)
          a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, 'script'))), t.call(this[l], a, l);
        if (s)
          for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)
            a = o[l], at.test(a.type || '') && !H.access(a, 'globalEval') && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, '')));
      }
      return this;
    }
  }), x.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n, r = [], i = x(e), o = i.length - 1, s = 0;
      for (; o >= s; s++)
        n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
      return this.pushStack(r);
    };
  }), x.extend({
    clone: function (e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
      if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
        for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)
          yt(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)
            gt(o[r], s[r]);
        else
          gt(e, a);
      return s = mt(a, 'script'), s.length > 0 && dt(s, !u && mt(e, 'script')), a;
    },
    buildFragment: function (e, t, n, r) {
      var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
      for (; p > c; c++)
        if (i = e[c], i || 0 === i)
          if ('object' === x.type(i))
            x.merge(h, i.nodeType ? [i] : i);
          else if (rt.test(i)) {
            o = o || f.appendChild(t.createElement('div')), s = (nt.exec(i) || [
              '',
              ''
            ])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, '<$1></$2>') + a[2], l = a[0];
            while (l--)
              o = o.firstChild;
            x.merge(h, o.childNodes), o = f.firstChild, o.textContent = '';
          } else
            h.push(t.createTextNode(i));
      f.textContent = '', c = 0;
      while (i = h[c++])
        if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), 'script'), u && dt(o), n)) {
          l = 0;
          while (i = o[l++])
            at.test(i.type || '') && n.push(i);
        }
      return f;
    },
    cleanData: function (e) {
      var t, n, r, i, o, s, a = x.event.special, u = 0;
      for (; (n = e[u]) !== undefined; u++) {
        if (F.accepts(n) && (o = n[H.expando], o && (t = H.cache[o]))) {
          if (r = Object.keys(t.events || {}), r.length)
            for (s = 0; (i = r[s]) !== undefined; s++)
              a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
          H.cache[o] && delete H.cache[o];
        }
        delete L.cache[n[L.expando]];
      }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        'throws': !0
      });
    }
  });
  function pt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }
  function ft(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }
  function ht(e) {
    var t = ut.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function dt(e, t) {
    var n = e.length, r = 0;
    for (; n > r; r++)
      H.set(e[r], 'globalEval', !t || H.get(t[r], 'globalEval'));
  }
  function gt(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (H.hasData(e) && (o = H.access(e), s = H.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++)
            x.event.add(t, i, l[i][n]);
      }
      L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
    }
  }
  function mt(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
    return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
  }
  function yt(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && ot.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
  }
  x.fn.extend({
    wrapAll: function (e) {
      var t;
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild)
          e = e.firstElementChild;
        return e;
      }).append(this)), this);
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp('^(' + b + ')(.*)$', 'i'), Ct = RegExp('^(' + b + ')(?!px)[a-z%]+$', 'i'), kt = RegExp('^([+-])=(' + b + ')', 'i'), Nt = { BODY: 'block' }, Et = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, St = {
      letterSpacing: 0,
      fontWeight: 400
    }, jt = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], Dt = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function At(e, t) {
    if (t in e)
      return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length;
    while (i--)
      if (t = Dt[i] + n, t in e)
        return t;
    return r;
  }
  function Lt(e, t) {
    return e = t || e, 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
  }
  function Ht(t) {
    return e.getComputedStyle(t, null);
  }
  function qt(e, t) {
    var n, r, i, o = [], s = 0, a = e.length;
    for (; a > s; s++)
      r = e[s], r.style && (o[s] = H.get(r, 'olddisplay'), n = r.style.display, t ? (o[s] || 'none' !== n || (r.style.display = ''), '' === r.style.display && Lt(r) && (o[s] = H.access(r, 'olddisplay', Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && 'none' !== n || !i) && H.set(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    for (s = 0; a > s; s++)
      r = e[s], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[s] || '' : 'none'));
    return e;
  }
  x.fn.extend({
    css: function (e, t) {
      return x.access(this, function (e, t, n) {
        var r, i, o = {}, s = 0;
        if (x.isArray(t)) {
          for (r = Ht(e), i = t.length; i > s; s++)
            o[t[s]] = x.css(e, t[s], !1, r);
          return o;
        }
        return n !== undefined ? x.style(e, t, n) : x.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function () {
      return qt(this, !0);
    },
    hide: function () {
      return qt(this);
    },
    toggle: function (e) {
      var t = 'boolean' == typeof e;
      return this.each(function () {
        (t ? e : Lt(this)) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = vt(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = x.camelCase(t), u = e.style;
        return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && 'get' in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, 'string' === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = 'number'), null == n || 'number' === o && isNaN(n) || ('number' !== o || x.cssNumber[a] || (n += 'px'), x.support.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'), s && 'set' in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
      }
    },
    css: function (e, t, n, r) {
      var i, o, s, a = x.camelCase(t);
      return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && 'get' in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), 'normal' === i && t in St && (i = St[t]), '' === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
    }
  }), vt = function (e, t, n) {
    var r, i, o, s = n || Ht(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
    return s && ('' !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
  };
  function Ot(e, t, n) {
    var r = Tt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function Ft(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0;
    for (; 4 > o; o += 2)
      'margin' === n && (s += x.css(e, n + jt[o], !0, i)), r ? ('content' === n && (s -= x.css(e, 'padding' + jt[o], !0, i)), 'margin' !== n && (s -= x.css(e, 'border' + jt[o] + 'Width', !0, i))) : (s += x.css(e, 'padding' + jt[o], !0, i), 'padding' !== n && (s += x.css(e, 'border' + jt[o] + 'Width', !0, i)));
    return s;
  }
  function Pt(e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = Ht(e), s = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);
    if (0 >= i || null == i) {
      if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i))
        return i;
      r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + Ft(e, t, n || (s ? 'border' : 'content'), r, o) + 'px';
  }
  function Rt(e) {
    var t = o, n = Nt[e];
    return n || (n = Mt(e, t), 'none' !== n && n || (xt = (xt || x('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
  }
  function Mt(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], 'display');
    return n.remove(), r;
  }
  x.each([
    'height',
    'width'
  ], function (e, t) {
    x.cssHooks[t] = {
      get: function (e, n, r) {
        return n ? 0 === e.offsetWidth && bt.test(x.css(e, 'display')) ? x.swap(e, Et, function () {
          return Pt(e, t, r);
        }) : Pt(e, t, r) : undefined;
      },
      set: function (e, n, r) {
        var i = r && Ht(e);
        return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
      }
    };
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function (e, t) {
        return t ? x.swap(e, { display: 'inline-block' }, vt, [
          e,
          'marginRight'
        ]) : undefined;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each([
      'top',
      'left'
    ], function (e, t) {
      x.cssHooks[t] = {
        get: function (e, n) {
          return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + 'px' : n) : undefined;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
        for (; 4 > r; r++)
          i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
  });
  var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = x.prop(this, 'elements');
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(':disabled') && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Bt, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(Bt, '\r\n')
        };
      }).get();
    }
  }), x.param = function (e, t) {
    var n, r = [], i = function (e, t) {
        t = x.isFunction(t) ? t() : null == t ? '' : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      };
    if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
      x.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        _t(n, e[n], t, i);
    return r.join('&').replace(Wt, '+');
  };
  function _t(e, t, n, r) {
    var i;
    if (x.isArray(t))
      x.each(t, function (t, i) {
        n || $t.test(e) ? r(e, i) : _t(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== x.type(t))
      r(e, t);
    else
      for (i in t)
        _t(e + '[' + i + ']', t[i], n, r);
  }
  x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  });
  var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = '*/'.concat('*');
  try {
    Ut = i.href;
  } catch (an) {
    Ut = o.createElement('a'), Ut.href = '', Ut = Ut.href;
  }
  Xt = tn.exec(Ut.toLowerCase()) || [];
  function un(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(w) || [];
      if (x.isFunction(n))
        while (r = o[i++])
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function ln(e, t, n, r) {
    var i = {}, o = e === on;
    function s(a) {
      var u;
      return i[a] = !0, x.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return 'string' != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
      }), u;
    }
    return s(t.dataTypes[0]) || !i['*'] && s('*');
  }
  function cn(e, t) {
    var n, r, i = x.ajaxSettings.flatOptions || {};
    for (n in t)
      t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && x.extend(!0, e, r), e;
  }
  x.fn.load = function (e, t, n) {
    if ('string' != typeof e && nn)
      return nn.apply(this, arguments);
    var r, i, o, s = this, a = e.indexOf(' ');
    return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && 'object' == typeof t && (i = 'POST'), s.length > 0 && x.ajax({
      url: e,
      type: i,
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? x('<div>').append(x.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [
        e.responseText,
        t,
        e
      ]);
    }), this;
  }, x.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ut,
      type: 'GET',
      isLocal: Kt.test(Xt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': sn,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': x.parseJSON,
        'text xml': x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
    },
    ajaxPrefilter: un(rn),
    ajaxTransport: un(on),
    ajax: function (e, t) {
      'object' == typeof e && (t = e, e = undefined), t = t || {};
      var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks('once memory'), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = 'canceled', T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === v) {
              if (!o) {
                o = {};
                while (t = Qt.exec(i))
                  o[t[1].toLowerCase()] = t[2];
              }
              t = o[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? i : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return v || (e = y[n] = y[n] || e, m[e] = t), this;
          },
          overrideMimeType: function (e) {
            return v || (c.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > v)
                for (t in e)
                  g[t] = [
                    g[t],
                    e[t]
                  ];
              else
                T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || b;
            return n && n.abort(t), k(0, t), this;
          }
        };
      if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + '').replace(Gt, '').replace(en, Xt[1] + '//'), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || '*').toLowerCase().match(w) || [''], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ('http:' === a[1] ? '80' : '443')) === (Xt[3] || ('http:' === Xt[1] ? '80' : '443')))), c.data && c.processData && 'string' != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v)
        return T;
      u = c.global, u && 0 === x.active++ && x.event.trigger('ajaxStart'), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? '&' : '?') + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, '$1_=' + Yt++) : r + (Vt.test(r) ? '&' : '?') + '_=' + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader('If-Modified-Since', x.lastModified[r]), x.etag[r] && T.setRequestHeader('If-None-Match', x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader('Content-Type', c.contentType), T.setRequestHeader('Accept', c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ('*' !== c.dataTypes[0] ? ', ' + sn + '; q=0.01' : '') : c.accepts['*']);
      for (l in c.headers)
        T.setRequestHeader(l, c.headers[l]);
      if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
        return T.abort();
      b = 'abort';
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        })
        T[l](c[l]);
      if (n = ln(on, c, t, T)) {
        T.readyState = 1, u && f.trigger('ajaxSend', [
          T,
          c
        ]), c.async && c.timeout > 0 && (s = setTimeout(function () {
          T.abort('timeout');
        }, c.timeout));
        try {
          v = 1, n.send(m, k);
        } catch (C) {
          if (!(2 > v))
            throw C;
          k(-1, C);
        }
      } else
        k(-1, 'No Transport');
      function k(e, t, o, a) {
        var l, m, y, b, w, C = t;
        2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || '', T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader('Last-Modified'), w && (x.lastModified[r] = w), w = T.getResponseHeader('etag'), w && (x.etag[r] = w)), 204 === e || 'HEAD' === c.type ? C = 'nocontent' : 304 === e ? C = 'notmodified' : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = 'error', 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + '', l ? h.resolveWith(p, [
          m,
          C,
          T
        ]) : h.rejectWith(p, [
          T,
          C,
          y
        ]), T.statusCode(g), g = undefined, u && f.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          T,
          c,
          l ? m : y
        ]), d.fireWith(p, [
          T,
          C
        ]), u && (f.trigger('ajaxComplete', [
          T,
          c
        ]), --x.active || x.event.trigger('ajaxStop')));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return x.get(e, undefined, t, 'script');
    }
  }), x.each([
    'get',
    'post'
  ], function (e, t) {
    x[t] = function (e, n, r, i) {
      return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      });
    };
  });
  function pn(e, t, n) {
    var r, i, o, s, a = e.contents, u = e.dataTypes;
    while ('*' === u[0])
      u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n)
      o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        s || (s = i);
      }
      o = o || s;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
  }
  function fn(e, t, n, r) {
    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
    if (c[1])
      for (s in e.converters)
        l[s.toLowerCase()] = e.converters[s];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ('*' === o)
          o = u;
        else if ('*' !== u && u !== o) {
          if (s = l[u + ' ' + o] || l['* ' + o], !s)
            for (i in l)
              if (a = i.split(' '), a[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e['throws'])
              t = s(t);
            else
              try {
                t = s(t);
              } catch (p) {
                return {
                  state: 'parsererror',
                  error: s ? p : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  x.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter('script', function (e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = x('<script>').prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
          }), o.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = hn.pop() || x.expando + '_' + Yt++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? 'url' : 'string' == typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && dn.test(t.data) && 'data');
    return a || 'jsonp' === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, '$1' + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
      return s || x.error(i + ' was not called'), s[0];
    }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
      s = arguments;
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
    }), 'script') : undefined;
  }), x.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {
    }
  };
  var gn = x.ajaxSettings.xhr(), mn = {
      0: 200,
      1223: 204
    }, yn = 0, vn = {};
  e.ActiveXObject && x(e).on('unload', function () {
    for (var e in vn)
      vn[e]();
    vn = undefined;
  }), x.support.cors = !!gn && 'withCredentials' in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
    var t;
    return x.support.cors || gn && !e.crossDomain ? {
      send: function (n, r) {
        var i, o, s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (i in e.xhrFields)
            s[i] = e.xhrFields[i];
        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
        for (i in n)
          s.setRequestHeader(i, n[i]);
        t = function (e) {
          return function () {
            t && (delete vn[o], t = s.onload = s.onerror = null, 'abort' === e ? s.abort() : 'error' === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, 'string' == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
          };
        }, s.onload = t(), s.onerror = t('error'), t = vn[o = yn++] = t('abort'), s.send(e.hasContent && e.data || null);
      },
      abort: function () {
        t && t();
      }
    } : undefined;
  });
  var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp('^(?:([+-])=|)(' + b + ')([a-z%]*)$', 'i'), Cn = /queueHooks$/, kn = [An], Nn = {
      '*': [function (e, t) {
          var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? '' : 'px'), s = (x.cssNumber[e] || 'px' !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
          if (s && s[3] !== o) {
            o = o || s[3], i = i || [], s = +r || 1;
            do
              a = a || '.5', s /= a, x.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && 1 !== a && --u);
          }
          return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n;
        }]
    };
  function En() {
    return setTimeout(function () {
      xn = undefined;
    }), xn = x.now();
  }
  function Sn(e, t, n) {
    var r, i = (Nn[t] || []).concat(Nn['*']), o = 0, s = i.length;
    for (; s > o; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function jn(e, t, n) {
    var r, i, o = 0, s = kn.length, a = x.Deferred().always(function () {
        delete u.elem;
      }), u = function () {
        if (i)
          return !1;
        var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length;
        for (; u > s; s++)
          l.tweens[s].run(o);
        return a.notifyWith(e, [
          l,
          o,
          n
        ]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
      }, l = a.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: xn || En(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? l.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; r > n; n++)
            l.tweens[n].run(1);
          return t ? a.resolveWith(e, [
            l,
            t
          ]) : a.rejectWith(e, [
            l,
            t
          ]), this;
        }
      }), c = l.props;
    for (Dn(c, l.opts.specialEasing); s > o; o++)
      if (r = kn[o].call(l, e, c, l.opts))
        return r;
    return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function Dn(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && 'expand' in s) {
        o = s.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  x.Animation = x.extend(jn, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');
      var n, r = 0, i = e.length;
      for (; i > r; r++)
        n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? kn.unshift(e) : kn.push(e);
    }
  });
  function An(e, t, n) {
    var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = H.get(e, 'fxshow');
    n.queue || (a = x._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u();
    }), a.unqueued++, l.always(function () {
      l.always(function () {
        a.unqueued--, x.queue(e, 'fx').length || a.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], 'inline' === x.css(e, 'display') && 'none' === x.css(e, 'float') && (p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', l.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));
    for (r in t)
      if (i = t[r], wn.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (f ? 'hide' : 'show')) {
          if ('show' !== i || !h || h[r] === undefined)
            continue;
          f = !0;
        }
        c[r] = h && h[r] || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      h ? 'hidden' in h && (f = h.hidden) : h = H.access(e, 'fxshow', {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
        x(e).hide();
      }), l.done(function () {
        var t;
        H.remove(e, 'fxshow');
        for (t in c)
          x.style(e, t, c[t]);
      });
      for (r in c)
        s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = 'width' === r || 'height' === r ? 1 : 0));
    }
  }
  function Ln(e, t, n, r, i) {
    return new Ln.prototype.init(e, t, n, r, i);
  }
  x.Tween = Ln, Ln.prototype = {
    constructor: Ln,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = Ln.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = Ln.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
    }
  }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = x.fn[t];
    x.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(Hn(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Lt).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function () {
          var t = jn(this, x.extend({}, e), o);
          (i || H.get(this, 'finish')) && t.stop(!0);
        };
      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return 'string' != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = x.timers, s = H.get(this);
        if (i)
          s[i] && s[i].stop && r(s[i]);
        else
          for (i in s)
            s[i] && s[i].stop && Cn.test(i) && r(s[i]);
        for (i = o.length; i--;)
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        (t || !n) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t, n = H.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = x.timers, s = r ? r.length : 0;
        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; s > t; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function Hn(e, t) {
    var n, r = { height: e }, i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      n = jt[i], r['margin' + n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  x.each({
    slideDown: Hn('show'),
    slideUp: Hn('hide'),
    slideToggle: Hn('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? x.extend({}, e) : {
        complete: n || !n && t || x.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !x.isFunction(t) && t
      };
    return r.duration = x.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
    var e, t = x.timers, n = 0;
    for (xn = x.now(); t.length > n; n++)
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    t.length || x.fx.stop(), xn = undefined;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    bn || (bn = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(bn), bn = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length)
      return e === undefined ? this : this.each(function (t) {
        x.offset.setOffset(this, e, t);
      });
    var t, n, i = this[0], o = {
        top: 0,
        left: 0
      }, s = i && i.ownerDocument;
    if (s)
      return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = qn(s), {
        top: o.top + n.pageYOffset - t.clientTop,
        left: o.left + n.pageXOffset - t.clientLeft
      }) : o;
  }, x.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, s, a, u, l, c = x.css(e, 'position'), p = x(e), f = {};
      'static' === c && (e.style.position = 'relative'), a = p.offset(), o = x.css(e, 'top'), u = x.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), 'using' in t ? t.using.call(e, f) : p.css(f);
    }
  }, x.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {
            top: 0,
            left: 0
          };
        return 'fixed' === x.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], 'html') || (r = e.offset()), r.top += x.css(e[0], 'borderTopWidth', !0), r.left += x.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - r.top - x.css(n, 'marginTop', !0),
          left: t.left - r.left - x.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || s;
        while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position'))
          e = e.offsetParent;
        return e || s;
      });
    }
  }), x.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, n) {
    var r = 'pageYOffset' === n;
    x.fn[t] = function (i) {
      return x.access(this, function (t, i, o) {
        var s = qn(t);
        return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
      }, t, i, arguments.length, null);
    };
  });
  function qn(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  x.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    x.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      x.fn[r] = function (r, i) {
        var o = arguments.length && (n || 'boolean' != typeof r), s = n || (r === !0 || i === !0 ? 'margin' : 'border');
        return x.access(this, function (t, n, r) {
          var i;
          return x.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
        }, t, o ? r : undefined, o, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, 'object' == typeof module && module && 'object' == typeof module.exports ? module.exports = x : 'function' == typeof define && define.amd && define('jquery', [], function () {
    return x;
  }), 'object' == typeof e && 'object' == typeof e.document && (e.jQuery = e.$ = x);
}(window));
(function (window, document, undefined) {
  'use strict';
  var lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };
  var uppercase = function (string) {
    return isString(string) ? string.toUpperCase() : string;
  };
  var manualLowercase = function (s) {
    return isString(s) ? s.replace(/[A-Z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    }) : s;
  };
  var manualUppercase = function (s) {
    return isString(s) ? s.replace(/[a-z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) & ~32);
    }) : s;
  };
  if ('i' !== 'I'.toLowerCase()) {
    lowercase = manualLowercase;
    uppercase = manualUppercase;
  }
  var msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), jqLite, jQuery, slice = [].slice, push = [].push, toString = Object.prototype.toString, angular = window.angular || (window.angular = {}), angularModule, nodeName_, uid = [
      '0',
      '0',
      '0'
    ];
  function isArrayLike(obj) {
    if (!obj || typeof obj.length !== 'number')
      return false;
    if (typeof obj.hasOwnProperty != 'function' && typeof obj.constructor != 'function') {
      return true;
    } else {
      return obj instanceof JQLite || jQuery && obj instanceof jQuery || toString.call(obj) !== '[object Object]' || typeof obj.callee === 'function';
    }
  }
  function forEach(obj, iterator, context) {
    var key;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key != 'prototype' && key != 'length' && key != 'name' && obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context);
      } else if (isArrayLike(obj)) {
        for (key = 0; key < obj.length; key++)
          iterator.call(context, obj[key], key);
      } else {
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key);
          }
        }
      }
    }
    return obj;
  }
  function sortedKeys(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys.sort();
  }
  function forEachSorted(obj, iterator, context) {
    var keys = sortedKeys(obj);
    for (var i = 0; i < keys.length; i++) {
      iterator.call(context, obj[keys[i]], keys[i]);
    }
    return keys;
  }
  function reverseParams(iteratorFn) {
    return function (value, key) {
      iteratorFn(key, value);
    };
  }
  function nextUid() {
    var index = uid.length;
    var digit;
    while (index) {
      index--;
      digit = uid[index].charCodeAt(0);
      if (digit == 57) {
        uid[index] = 'A';
        return uid.join('');
      }
      if (digit == 90) {
        uid[index] = '0';
      } else {
        uid[index] = String.fromCharCode(digit + 1);
        return uid.join('');
      }
    }
    uid.unshift('0');
    return uid.join('');
  }
  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }
  function extend(dst) {
    var h = dst.$$hashKey;
    forEach(arguments, function (obj) {
      if (obj !== dst) {
        forEach(obj, function (value, key) {
          dst[key] = value;
        });
      }
    });
    setHashKey(dst, h);
    return dst;
  }
  function int(str) {
    return parseInt(str, 10);
  }
  function inherit(parent, extra) {
    return extend(new (extend(function () {
    }, { prototype: parent }))(), extra);
  }
  function noop() {
  }
  noop.$inject = [];
  function identity($) {
    return $;
  }
  identity.$inject = [];
  function valueFn(value) {
    return function () {
      return value;
    };
  }
  function isUndefined(value) {
    return typeof value == 'undefined';
  }
  function isDefined(value) {
    return typeof value != 'undefined';
  }
  function isObject(value) {
    return value != null && typeof value == 'object';
  }
  function isString(value) {
    return typeof value == 'string';
  }
  function isNumber(value) {
    return typeof value == 'number';
  }
  function isDate(value) {
    return toString.apply(value) == '[object Date]';
  }
  function isArray(value) {
    return toString.apply(value) == '[object Array]';
  }
  function isFunction(value) {
    return typeof value == 'function';
  }
  function isWindow(obj) {
    return obj && obj.document && obj.location && obj.alert && obj.setInterval;
  }
  function isScope(obj) {
    return obj && obj.$evalAsync && obj.$watch;
  }
  function isFile(obj) {
    return toString.apply(obj) === '[object File]';
  }
  function isBoolean(value) {
    return typeof value == 'boolean';
  }
  function trim(value) {
    return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value;
  }
  function isElement(node) {
    return node && (node.nodeName || node.bind && node.find);
  }
  function makeMap(str) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++)
      obj[items[i]] = true;
    return obj;
  }
  if (msie < 9) {
    nodeName_ = function (element) {
      element = element.nodeName ? element : element[0];
      return element.scopeName && element.scopeName != 'HTML' ? uppercase(element.scopeName + ':' + element.nodeName) : element.nodeName;
    };
  } else {
    nodeName_ = function (element) {
      return element.nodeName ? element.nodeName : element[0].nodeName;
    };
  }
  function map(obj, iterator, context) {
    var results = [];
    forEach(obj, function (value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  }
  function size(obj, ownPropsOnly) {
    var size = 0, key;
    if (isArray(obj) || isString(obj)) {
      return obj.length;
    } else if (isObject(obj)) {
      for (key in obj)
        if (!ownPropsOnly || obj.hasOwnProperty(key))
          size++;
    }
    return size;
  }
  function includes(array, obj) {
    return indexOf(array, obj) != -1;
  }
  function indexOf(array, obj) {
    if (array.indexOf)
      return array.indexOf(obj);
    for (var i = 0; i < array.length; i++) {
      if (obj === array[i])
        return i;
    }
    return -1;
  }
  function arrayRemove(array, value) {
    var index = indexOf(array, value);
    if (index >= 0)
      array.splice(index, 1);
    return value;
  }
  function isLeafNode(node) {
    if (node) {
      switch (node.nodeName) {
      case 'OPTION':
      case 'PRE':
      case 'TITLE':
        return true;
      }
    }
    return false;
  }
  function copy(source, destination) {
    if (isWindow(source) || isScope(source))
      throw Error('Can\'t copy Window or Scope');
    if (!destination) {
      destination = source;
      if (source) {
        if (isArray(source)) {
          destination = copy(source, []);
        } else if (isDate(source)) {
          destination = new Date(source.getTime());
        } else if (isObject(source)) {
          destination = copy(source, {});
        }
      }
    } else {
      if (source === destination)
        throw Error('Can\'t copy equivalent objects or arrays');
      if (isArray(source)) {
        destination.length = 0;
        for (var i = 0; i < source.length; i++) {
          destination.push(copy(source[i]));
        }
      } else {
        var h = destination.$$hashKey;
        forEach(destination, function (value, key) {
          delete destination[key];
        });
        for (var key in source) {
          destination[key] = copy(source[key]);
        }
        setHashKey(destination, h);
      }
    }
    return destination;
  }
  function shallowCopy(src, dst) {
    dst = dst || {};
    for (var key in src) {
      if (src.hasOwnProperty(key) && key.substr(0, 2) !== '$$') {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  function equals(o1, o2) {
    if (o1 === o2)
      return true;
    if (o1 === null || o2 === null)
      return false;
    if (o1 !== o1 && o2 !== o2)
      return true;
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2) {
      if (t1 == 'object') {
        if (isArray(o1)) {
          if ((length = o1.length) == o2.length) {
            for (key = 0; key < length; key++) {
              if (!equals(o1[key], o2[key]))
                return false;
            }
            return true;
          }
        } else if (isDate(o1)) {
          return isDate(o2) && o1.getTime() == o2.getTime();
        } else {
          if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2))
            return false;
          keySet = {};
          for (key in o1) {
            if (key.charAt(0) === '$' || isFunction(o1[key]))
              continue;
            if (!equals(o1[key], o2[key]))
              return false;
            keySet[key] = true;
          }
          for (key in o2) {
            if (!keySet[key] && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key]))
              return false;
          }
          return true;
        }
      }
    }
    return false;
  }
  function concat(array1, array2, index) {
    return array1.concat(slice.call(array2, index));
  }
  function sliceArgs(args, startIndex) {
    return slice.call(args, startIndex || 0);
  }
  function bind(self, fn) {
    var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
    if (isFunction(fn) && !(fn instanceof RegExp)) {
      return curryArgs.length ? function () {
        return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
      } : function () {
        return arguments.length ? fn.apply(self, arguments) : fn.call(self);
      };
    } else {
      return fn;
    }
  }
  function toJsonReplacer(key, value) {
    var val = value;
    if (/^\$+/.test(key)) {
      val = undefined;
    } else if (isWindow(value)) {
      val = '$WINDOW';
    } else if (value && document === value) {
      val = '$DOCUMENT';
    } else if (isScope(value)) {
      val = '$SCOPE';
    }
    return val;
  }
  function toJson(obj, pretty) {
    return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
  }
  function fromJson(json) {
    return isString(json) ? JSON.parse(json) : json;
  }
  function toBoolean(value) {
    if (value && value.length !== 0) {
      var v = lowercase('' + value);
      value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
    } else {
      value = false;
    }
    return value;
  }
  function startingTag(element) {
    element = jqLite(element).clone();
    try {
      element.html('');
    } catch (e) {
    }
    var TEXT_NODE = 3;
    var elemHtml = jqLite('<div>').append(element).html();
    try {
      return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (match, nodeName) {
        return '<' + lowercase(nodeName);
      });
    } catch (e) {
      return lowercase(elemHtml);
    }
  }
  function parseKeyValue(keyValue) {
    var obj = {}, key_value, key;
    forEach((keyValue || '').split('&'), function (keyValue) {
      if (keyValue) {
        key_value = keyValue.split('=');
        key = decodeURIComponent(key_value[0]);
        obj[key] = isDefined(key_value[1]) ? decodeURIComponent(key_value[1]) : true;
      }
    });
    return obj;
  }
  function toKeyValue(obj) {
    var parts = [];
    forEach(obj, function (value, key) {
      parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
    });
    return parts.length ? parts.join('&') : '';
  }
  function encodeUriSegment(val) {
    return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
  }
  function angularInit(element, bootstrap) {
    var elements = [element], appElement, module, names = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    function append(element) {
      element && elements.push(element);
    }
    forEach(names, function (name) {
      names[name] = true;
      append(document.getElementById(name));
      name = name.replace(':', '\\:');
      if (element.querySelectorAll) {
        forEach(element.querySelectorAll('.' + name), append);
        forEach(element.querySelectorAll('.' + name + '\\:'), append);
        forEach(element.querySelectorAll('[' + name + ']'), append);
      }
    });
    forEach(elements, function (element) {
      if (!appElement) {
        var className = ' ' + element.className + ' ';
        var match = NG_APP_CLASS_REGEXP.exec(className);
        if (match) {
          appElement = element;
          module = (match[2] || '').replace(/\s+/g, ',');
        } else {
          forEach(element.attributes, function (attr) {
            if (!appElement && names[attr.name]) {
              appElement = element;
              module = attr.value;
            }
          });
        }
      }
    });
    if (appElement) {
      bootstrap(appElement, module ? [module] : []);
    }
  }
  function bootstrap(element, modules) {
    var resumeBootstrapInternal = function () {
      element = jqLite(element);
      modules = modules || [];
      modules.unshift([
        '$provide',
        function ($provide) {
          $provide.value('$rootElement', element);
        }
      ]);
      modules.unshift('ng');
      var injector = createInjector(modules);
      injector.invoke([
        '$rootScope',
        '$rootElement',
        '$compile',
        '$injector',
        function (scope, element, compile, injector) {
          scope.$apply(function () {
            element.data('$injector', injector);
            compile(element)(scope);
          });
        }
      ]);
      return injector;
    };
    var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
    if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
      return resumeBootstrapInternal();
    }
    window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
    angular.resumeBootstrap = function (extraModules) {
      forEach(extraModules, function (module) {
        modules.push(module);
      });
      resumeBootstrapInternal();
    };
  }
  var SNAKE_CASE_REGEXP = /[A-Z]/g;
  function snake_case(name, separator) {
    separator = separator || '_';
    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  function bindJQuery() {
    jQuery = window.jQuery;
    if (jQuery) {
      jqLite = jQuery;
      extend(jQuery.fn, {
        scope: JQLitePrototype.scope,
        controller: JQLitePrototype.controller,
        injector: JQLitePrototype.injector,
        inheritedData: JQLitePrototype.inheritedData
      });
      JQLitePatchJQueryRemove('remove', true);
      JQLitePatchJQueryRemove('empty');
      JQLitePatchJQueryRemove('html');
    } else {
      jqLite = JQLite;
    }
    angular.element = jqLite;
  }
  function assertArg(arg, name, reason) {
    if (!arg) {
      throw new Error('Argument \'' + (name || '?') + '\' is ' + (reason || 'required'));
    }
    return arg;
  }
  function assertArgFn(arg, name, acceptArrayAnnotation) {
    if (acceptArrayAnnotation && isArray(arg)) {
      arg = arg[arg.length - 1];
    }
    assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg == 'object' ? arg.constructor.name || 'Object' : typeof arg));
    return arg;
  }
  function setupModuleLoader(window) {
    function ensure(obj, name, factory) {
      return obj[name] || (obj[name] = factory());
    }
    return ensure(ensure(window, 'angular', Object), 'module', function () {
      var modules = {};
      return function module(name, requires, configFn) {
        if (requires && modules.hasOwnProperty(name)) {
          modules[name] = null;
        }
        return ensure(modules, name, function () {
          if (!requires) {
            throw Error('No module: ' + name);
          }
          var invokeQueue = [];
          var runBlocks = [];
          var config = invokeLater('$injector', 'invoke');
          var moduleInstance = {
              _invokeQueue: invokeQueue,
              _runBlocks: runBlocks,
              requires: requires,
              name: name,
              provider: invokeLater('$provide', 'provider'),
              factory: invokeLater('$provide', 'factory'),
              service: invokeLater('$provide', 'service'),
              value: invokeLater('$provide', 'value'),
              constant: invokeLater('$provide', 'constant', 'unshift'),
              filter: invokeLater('$filterProvider', 'register'),
              controller: invokeLater('$controllerProvider', 'register'),
              directive: invokeLater('$compileProvider', 'directive'),
              config: config,
              run: function (block) {
                runBlocks.push(block);
                return this;
              }
            };
          if (configFn) {
            config(configFn);
          }
          return moduleInstance;
          function invokeLater(provider, method, insertMethod) {
            return function () {
              invokeQueue[insertMethod || 'push']([
                provider,
                method,
                arguments
              ]);
              return moduleInstance;
            };
          }
        });
      };
    });
  }
  var version = {
      full: '1.0.7',
      major: 1,
      minor: 0,
      dot: 7,
      codeName: 'monochromatic-rainbow'
    };
  function publishExternalAPI(angular) {
    extend(angular, {
      'bootstrap': bootstrap,
      'copy': copy,
      'extend': extend,
      'equals': equals,
      'element': jqLite,
      'forEach': forEach,
      'injector': createInjector,
      'noop': noop,
      'bind': bind,
      'toJson': toJson,
      'fromJson': fromJson,
      'identity': identity,
      'isUndefined': isUndefined,
      'isDefined': isDefined,
      'isString': isString,
      'isFunction': isFunction,
      'isObject': isObject,
      'isNumber': isNumber,
      'isElement': isElement,
      'isArray': isArray,
      'version': version,
      'isDate': isDate,
      'lowercase': lowercase,
      'uppercase': uppercase,
      'callbacks': { counter: 0 }
    });
    angularModule = setupModuleLoader(window);
    try {
      angularModule('ngLocale');
    } catch (e) {
      angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
    }
    angularModule('ng', ['ngLocale'], [
      '$provide',
      function ngModule($provide) {
        $provide.provider('$compile', $CompileProvider).directive({
          a: htmlAnchorDirective,
          input: inputDirective,
          textarea: inputDirective,
          form: formDirective,
          script: scriptDirective,
          select: selectDirective,
          style: styleDirective,
          option: optionDirective,
          ngBind: ngBindDirective,
          ngBindHtmlUnsafe: ngBindHtmlUnsafeDirective,
          ngBindTemplate: ngBindTemplateDirective,
          ngClass: ngClassDirective,
          ngClassEven: ngClassEvenDirective,
          ngClassOdd: ngClassOddDirective,
          ngCsp: ngCspDirective,
          ngCloak: ngCloakDirective,
          ngController: ngControllerDirective,
          ngForm: ngFormDirective,
          ngHide: ngHideDirective,
          ngInclude: ngIncludeDirective,
          ngInit: ngInitDirective,
          ngNonBindable: ngNonBindableDirective,
          ngPluralize: ngPluralizeDirective,
          ngRepeat: ngRepeatDirective,
          ngShow: ngShowDirective,
          ngSubmit: ngSubmitDirective,
          ngStyle: ngStyleDirective,
          ngSwitch: ngSwitchDirective,
          ngSwitchWhen: ngSwitchWhenDirective,
          ngSwitchDefault: ngSwitchDefaultDirective,
          ngOptions: ngOptionsDirective,
          ngView: ngViewDirective,
          ngTransclude: ngTranscludeDirective,
          ngModel: ngModelDirective,
          ngList: ngListDirective,
          ngChange: ngChangeDirective,
          required: requiredDirective,
          ngRequired: requiredDirective,
          ngValue: ngValueDirective
        }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
        $provide.provider({
          $anchorScroll: $AnchorScrollProvider,
          $browser: $BrowserProvider,
          $cacheFactory: $CacheFactoryProvider,
          $controller: $ControllerProvider,
          $document: $DocumentProvider,
          $exceptionHandler: $ExceptionHandlerProvider,
          $filter: $FilterProvider,
          $interpolate: $InterpolateProvider,
          $http: $HttpProvider,
          $httpBackend: $HttpBackendProvider,
          $location: $LocationProvider,
          $log: $LogProvider,
          $parse: $ParseProvider,
          $route: $RouteProvider,
          $routeParams: $RouteParamsProvider,
          $rootScope: $RootScopeProvider,
          $q: $QProvider,
          $sniffer: $SnifferProvider,
          $templateCache: $TemplateCacheProvider,
          $timeout: $TimeoutProvider,
          $window: $WindowProvider
        });
      }
    ]);
  }
  var jqCache = JQLite.cache = {}, jqName = JQLite.expando = 'ng-' + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function (element, type, fn) {
      element.addEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.attachEvent('on' + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function (element, type, fn) {
      element.removeEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.detachEvent('on' + type, fn);
    };
  function jqNextId() {
    return ++jqId;
  }
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  }
  function JQLitePatchJQueryRemove(name, dispatchThis) {
    var originalJqFn = jQuery.fn[name];
    originalJqFn = originalJqFn.$original || originalJqFn;
    removePatch.$original = originalJqFn;
    jQuery.fn[name] = removePatch;
    function removePatch() {
      var list = [this], fireEvent = dispatchThis, set, setIndex, setLength, element, childIndex, childLength, children, fns, events;
      while (list.length) {
        set = list.shift();
        for (setIndex = 0, setLength = set.length; setIndex < setLength; setIndex++) {
          element = jqLite(set[setIndex]);
          if (fireEvent) {
            element.triggerHandler('$destroy');
          } else {
            fireEvent = !fireEvent;
          }
          for (childIndex = 0, childLength = (children = element.children()).length; childIndex < childLength; childIndex++) {
            list.push(jQuery(children[childIndex]));
          }
        }
      }
      return originalJqFn.apply(this, arguments);
    }
  }
  function JQLite(element) {
    if (element instanceof JQLite) {
      return element;
    }
    if (!(this instanceof JQLite)) {
      if (isString(element) && element.charAt(0) != '<') {
        throw Error('selectors not implemented');
      }
      return new JQLite(element);
    }
    if (isString(element)) {
      var div = document.createElement('div');
      div.innerHTML = '<div>&#160;</div>' + element;
      div.removeChild(div.firstChild);
      JQLiteAddNodes(this, div.childNodes);
      this.remove();
    } else {
      JQLiteAddNodes(this, element);
    }
  }
  function JQLiteClone(element) {
    return element.cloneNode(true);
  }
  function JQLiteDealoc(element) {
    JQLiteRemoveData(element);
    for (var i = 0, children = element.childNodes || []; i < children.length; i++) {
      JQLiteDealoc(children[i]);
    }
  }
  function JQLiteUnbind(element, type, fn) {
    var events = JQLiteExpandoStore(element, 'events'), handle = JQLiteExpandoStore(element, 'handle');
    if (!handle)
      return;
    if (isUndefined(type)) {
      forEach(events, function (eventHandler, type) {
        removeEventListenerFn(element, type, eventHandler);
        delete events[type];
      });
    } else {
      if (isUndefined(fn)) {
        removeEventListenerFn(element, type, events[type]);
        delete events[type];
      } else {
        arrayRemove(events[type], fn);
      }
    }
  }
  function JQLiteRemoveData(element) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId];
    if (expandoStore) {
      if (expandoStore.handle) {
        expandoStore.events.$destroy && expandoStore.handle({}, '$destroy');
        JQLiteUnbind(element);
      }
      delete jqCache[expandoId];
      element[jqName] = undefined;
    }
  }
  function JQLiteExpandoStore(element, key, value) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
    if (isDefined(value)) {
      if (!expandoStore) {
        element[jqName] = expandoId = jqNextId();
        expandoStore = jqCache[expandoId] = {};
      }
      expandoStore[key] = value;
    } else {
      return expandoStore && expandoStore[key];
    }
  }
  function JQLiteData(element, key, value) {
    var data = JQLiteExpandoStore(element, 'data'), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
    if (!data && !isSimpleGetter) {
      JQLiteExpandoStore(element, 'data', data = {});
    }
    if (isSetter) {
      data[key] = value;
    } else {
      if (keyDefined) {
        if (isSimpleGetter) {
          return data && data[key];
        } else {
          extend(data, key);
        }
      } else {
        return data;
      }
    }
  }
  function JQLiteHasClass(element, selector) {
    return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + selector + ' ') > -1;
  }
  function JQLiteRemoveClass(element, cssClasses) {
    if (cssClasses) {
      forEach(cssClasses.split(' '), function (cssClass) {
        element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
      });
    }
  }
  function JQLiteAddClass(element, cssClasses) {
    if (cssClasses) {
      forEach(cssClasses.split(' '), function (cssClass) {
        if (!JQLiteHasClass(element, cssClass)) {
          element.className = trim(element.className + ' ' + trim(cssClass));
        }
      });
    }
  }
  function JQLiteAddNodes(root, elements) {
    if (elements) {
      elements = !elements.nodeName && isDefined(elements.length) && !isWindow(elements) ? elements : [elements];
      for (var i = 0; i < elements.length; i++) {
        root.push(elements[i]);
      }
    }
  }
  function JQLiteController(element, name) {
    return JQLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
  }
  function JQLiteInheritedData(element, name, value) {
    element = jqLite(element);
    if (element[0].nodeType == 9) {
      element = element.find('html');
    }
    while (element.length) {
      if (value = element.data(name))
        return value;
      element = element.parent();
    }
  }
  var JQLitePrototype = JQLite.prototype = {
      ready: function (fn) {
        var fired = false;
        function trigger() {
          if (fired)
            return;
          fired = true;
          fn();
        }
        this.bind('DOMContentLoaded', trigger);
        JQLite(window).bind('load', trigger);
      },
      toString: function () {
        var value = [];
        forEach(this, function (e) {
          value.push('' + e);
        });
        return '[' + value.join(', ') + ']';
      },
      eq: function (index) {
        return index >= 0 ? jqLite(this[index]) : jqLite(this[this.length + index]);
      },
      length: 0,
      push: push,
      sort: [].sort,
      splice: [].splice
    };
  var BOOLEAN_ATTR = {};
  forEach('multiple,selected,checked,disabled,readOnly,required'.split(','), function (value) {
    BOOLEAN_ATTR[lowercase(value)] = value;
  });
  var BOOLEAN_ELEMENTS = {};
  forEach('input,select,option,textarea,button,form'.split(','), function (value) {
    BOOLEAN_ELEMENTS[uppercase(value)] = true;
  });
  function getBooleanAttrName(element, name) {
    var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
    return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
  }
  forEach({
    data: JQLiteData,
    inheritedData: JQLiteInheritedData,
    scope: function (element) {
      return JQLiteInheritedData(element, '$scope');
    },
    controller: JQLiteController,
    injector: function (element) {
      return JQLiteInheritedData(element, '$injector');
    },
    removeAttr: function (element, name) {
      element.removeAttribute(name);
    },
    hasClass: JQLiteHasClass,
    css: function (element, name, value) {
      name = camelCase(name);
      if (isDefined(value)) {
        element.style[name] = value;
      } else {
        var val;
        if (msie <= 8) {
          val = element.currentStyle && element.currentStyle[name];
          if (val === '')
            val = 'auto';
        }
        val = val || element.style[name];
        if (msie <= 8) {
          val = val === '' ? undefined : val;
        }
        return val;
      }
    },
    attr: function (element, name, value) {
      var lowercasedName = lowercase(name);
      if (BOOLEAN_ATTR[lowercasedName]) {
        if (isDefined(value)) {
          if (!!value) {
            element[name] = true;
            element.setAttribute(name, lowercasedName);
          } else {
            element[name] = false;
            element.removeAttribute(lowercasedName);
          }
        } else {
          return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
        }
      } else if (isDefined(value)) {
        element.setAttribute(name, value);
      } else if (element.getAttribute) {
        var ret = element.getAttribute(name, 2);
        return ret === null ? undefined : ret;
      }
    },
    prop: function (element, name, value) {
      if (isDefined(value)) {
        element[name] = value;
      } else {
        return element[name];
      }
    },
    text: extend(msie < 9 ? function (element, value) {
      if (element.nodeType == 1) {
        if (isUndefined(value))
          return element.innerText;
        element.innerText = value;
      } else {
        if (isUndefined(value))
          return element.nodeValue;
        element.nodeValue = value;
      }
    } : function (element, value) {
      if (isUndefined(value)) {
        return element.textContent;
      }
      element.textContent = value;
    }, { $dv: '' }),
    val: function (element, value) {
      if (isUndefined(value)) {
        return element.value;
      }
      element.value = value;
    },
    html: function (element, value) {
      if (isUndefined(value)) {
        return element.innerHTML;
      }
      for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
        JQLiteDealoc(childNodes[i]);
      }
      element.innerHTML = value;
    }
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2) {
      var i, key;
      if ((fn.length == 2 && (fn !== JQLiteHasClass && fn !== JQLiteController) ? arg1 : arg2) === undefined) {
        if (isObject(arg1)) {
          for (i = 0; i < this.length; i++) {
            if (fn === JQLiteData) {
              fn(this[i], arg1);
            } else {
              for (key in arg1) {
                fn(this[i], key, arg1[key]);
              }
            }
          }
          return this;
        } else {
          if (this.length)
            return fn(this[0], arg1, arg2);
        }
      } else {
        for (i = 0; i < this.length; i++) {
          fn(this[i], arg1, arg2);
        }
        return this;
      }
      return fn.$dv;
    };
  });
  function createEventHandler(element, events) {
    var eventHandler = function (event, type) {
      if (!event.preventDefault) {
        event.preventDefault = function () {
          event.returnValue = false;
        };
      }
      if (!event.stopPropagation) {
        event.stopPropagation = function () {
          event.cancelBubble = true;
        };
      }
      if (!event.target) {
        event.target = event.srcElement || document;
      }
      if (isUndefined(event.defaultPrevented)) {
        var prevent = event.preventDefault;
        event.preventDefault = function () {
          event.defaultPrevented = true;
          prevent.call(event);
        };
        event.defaultPrevented = false;
      }
      event.isDefaultPrevented = function () {
        return event.defaultPrevented;
      };
      forEach(events[type || event.type], function (fn) {
        fn.call(element, event);
      });
      if (msie <= 8) {
        event.preventDefault = null;
        event.stopPropagation = null;
        event.isDefaultPrevented = null;
      } else {
        delete event.preventDefault;
        delete event.stopPropagation;
        delete event.isDefaultPrevented;
      }
    };
    eventHandler.elem = element;
    return eventHandler;
  }
  forEach({
    removeData: JQLiteRemoveData,
    dealoc: JQLiteDealoc,
    bind: function bindFn(element, type, fn) {
      var events = JQLiteExpandoStore(element, 'events'), handle = JQLiteExpandoStore(element, 'handle');
      if (!events)
        JQLiteExpandoStore(element, 'events', events = {});
      if (!handle)
        JQLiteExpandoStore(element, 'handle', handle = createEventHandler(element, events));
      forEach(type.split(' '), function (type) {
        var eventFns = events[type];
        if (!eventFns) {
          if (type == 'mouseenter' || type == 'mouseleave') {
            var contains = document.body.contains || document.body.compareDocumentPosition ? function (a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
              } : function (a, b) {
                if (b) {
                  while (b = b.parentNode) {
                    if (b === a) {
                      return true;
                    }
                  }
                }
                return false;
              };
            events[type] = [];
            var eventmap = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              };
            bindFn(element, eventmap[type], function (event) {
              var ret, target = this, related = event.relatedTarget;
              if (!related || related !== target && !contains(target, related)) {
                handle(event, type);
              }
            });
          } else {
            addEventListenerFn(element, type, handle);
            events[type] = [];
          }
          eventFns = events[type];
        }
        eventFns.push(fn);
      });
    },
    unbind: JQLiteUnbind,
    replaceWith: function (element, replaceNode) {
      var index, parent = element.parentNode;
      JQLiteDealoc(element);
      forEach(new JQLite(replaceNode), function (node) {
        if (index) {
          parent.insertBefore(node, index.nextSibling);
        } else {
          parent.replaceChild(node, element);
        }
        index = node;
      });
    },
    children: function (element) {
      var children = [];
      forEach(element.childNodes, function (element) {
        if (element.nodeType === 1)
          children.push(element);
      });
      return children;
    },
    contents: function (element) {
      return element.childNodes || [];
    },
    append: function (element, node) {
      forEach(new JQLite(node), function (child) {
        if (element.nodeType === 1)
          element.appendChild(child);
      });
    },
    prepend: function (element, node) {
      if (element.nodeType === 1) {
        var index = element.firstChild;
        forEach(new JQLite(node), function (child) {
          if (index) {
            element.insertBefore(child, index);
          } else {
            element.appendChild(child);
            index = child;
          }
        });
      }
    },
    wrap: function (element, wrapNode) {
      wrapNode = jqLite(wrapNode)[0];
      var parent = element.parentNode;
      if (parent) {
        parent.replaceChild(wrapNode, element);
      }
      wrapNode.appendChild(element);
    },
    remove: function (element) {
      JQLiteDealoc(element);
      var parent = element.parentNode;
      if (parent)
        parent.removeChild(element);
    },
    after: function (element, newElement) {
      var index = element, parent = element.parentNode;
      forEach(new JQLite(newElement), function (node) {
        parent.insertBefore(node, index.nextSibling);
        index = node;
      });
    },
    addClass: JQLiteAddClass,
    removeClass: JQLiteRemoveClass,
    toggleClass: function (element, selector, condition) {
      if (isUndefined(condition)) {
        condition = !JQLiteHasClass(element, selector);
      }
      (condition ? JQLiteAddClass : JQLiteRemoveClass)(element, selector);
    },
    parent: function (element) {
      var parent = element.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    next: function (element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      }
      var elm = element.nextSibling;
      while (elm != null && elm.nodeType !== 1) {
        elm = elm.nextSibling;
      }
      return elm;
    },
    find: function (element, selector) {
      return element.getElementsByTagName(selector);
    },
    clone: JQLiteClone,
    triggerHandler: function (element, eventName) {
      var eventFns = (JQLiteExpandoStore(element, 'events') || {})[eventName];
      forEach(eventFns, function (fn) {
        fn.call(element, null);
      });
    }
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2) {
      var value;
      for (var i = 0; i < this.length; i++) {
        if (value == undefined) {
          value = fn(this[i], arg1, arg2);
          if (value !== undefined) {
            value = jqLite(value);
          }
        } else {
          JQLiteAddNodes(value, fn(this[i], arg1, arg2));
        }
      }
      return value == undefined ? this : value;
    };
  });
  function hashKey(obj) {
    var objType = typeof obj, key;
    if (objType == 'object' && obj !== null) {
      if (typeof (key = obj.$$hashKey) == 'function') {
        key = obj.$$hashKey();
      } else if (key === undefined) {
        key = obj.$$hashKey = nextUid();
      }
    } else {
      key = obj;
    }
    return objType + ':' + key;
  }
  function HashMap(array) {
    forEach(array, this.put, this);
  }
  HashMap.prototype = {
    put: function (key, value) {
      this[hashKey(key)] = value;
    },
    get: function (key) {
      return this[hashKey(key)];
    },
    remove: function (key) {
      var value = this[key = hashKey(key)];
      delete this[key];
      return value;
    }
  };
  function HashQueueMap() {
  }
  HashQueueMap.prototype = {
    push: function (key, value) {
      var array = this[key = hashKey(key)];
      if (!array) {
        this[key] = [value];
      } else {
        array.push(value);
      }
    },
    shift: function (key) {
      var array = this[key = hashKey(key)];
      if (array) {
        if (array.length == 1) {
          delete this[key];
          return array[0];
        } else {
          return array.shift();
        }
      }
    },
    peek: function (key) {
      var array = this[hashKey(key)];
      if (array) {
        return array[0];
      }
    }
  };
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  function annotate(fn) {
    var $inject, fnText, argDecl, last;
    if (typeof fn == 'function') {
      if (!($inject = fn.$inject)) {
        $inject = [];
        fnText = fn.toString().replace(STRIP_COMMENTS, '');
        argDecl = fnText.match(FN_ARGS);
        forEach(argDecl[1].split(FN_ARG_SPLIT), function (arg) {
          arg.replace(FN_ARG, function (all, underscore, name) {
            $inject.push(name);
          });
        });
        fn.$inject = $inject;
      }
    } else if (isArray(fn)) {
      last = fn.length - 1;
      assertArgFn(fn[last], 'fn');
      $inject = fn.slice(0, last);
    } else {
      assertArgFn(fn, 'fn', true);
    }
    return $inject;
  }
  function createInjector(modulesToLoad) {
    var INSTANTIATING = {}, providerSuffix = 'Provider', path = [], loadedModules = new HashMap(), providerCache = {
        $provide: {
          provider: supportObject(provider),
          factory: supportObject(factory),
          service: supportObject(service),
          value: supportObject(value),
          constant: supportObject(constant),
          decorator: decorator
        }
      }, providerInjector = createInternalInjector(providerCache, function () {
        throw Error('Unknown provider: ' + path.join(' <- '));
      }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function (servicename) {
        var provider = providerInjector.get(servicename + providerSuffix);
        return instanceInjector.invoke(provider.$get, provider);
      });
    forEach(loadModules(modulesToLoad), function (fn) {
      instanceInjector.invoke(fn || noop);
    });
    return instanceInjector;
    function supportObject(delegate) {
      return function (key, value) {
        if (isObject(key)) {
          forEach(key, reverseParams(delegate));
        } else {
          return delegate(key, value);
        }
      };
    }
    function provider(name, provider_) {
      if (isFunction(provider_) || isArray(provider_)) {
        provider_ = providerInjector.instantiate(provider_);
      }
      if (!provider_.$get) {
        throw Error('Provider ' + name + ' must define $get factory method.');
      }
      return providerCache[name + providerSuffix] = provider_;
    }
    function factory(name, factoryFn) {
      return provider(name, { $get: factoryFn });
    }
    function service(name, constructor) {
      return factory(name, [
        '$injector',
        function ($injector) {
          return $injector.instantiate(constructor);
        }
      ]);
    }
    function value(name, value) {
      return factory(name, valueFn(value));
    }
    function constant(name, value) {
      providerCache[name] = value;
      instanceCache[name] = value;
    }
    function decorator(serviceName, decorFn) {
      var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
      origProvider.$get = function () {
        var origInstance = instanceInjector.invoke(orig$get, origProvider);
        return instanceInjector.invoke(decorFn, null, { $delegate: origInstance });
      };
    }
    function loadModules(modulesToLoad) {
      var runBlocks = [];
      forEach(modulesToLoad, function (module) {
        if (loadedModules.get(module))
          return;
        loadedModules.put(module, true);
        if (isString(module)) {
          var moduleFn = angularModule(module);
          runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
          try {
            for (var invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
              var invokeArgs = invokeQueue[i], provider = invokeArgs[0] == '$injector' ? providerInjector : providerInjector.get(invokeArgs[0]);
              provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
            }
          } catch (e) {
            if (e.message)
              e.message += ' from ' + module;
            throw e;
          }
        } else if (isFunction(module)) {
          try {
            runBlocks.push(providerInjector.invoke(module));
          } catch (e) {
            if (e.message)
              e.message += ' from ' + module;
            throw e;
          }
        } else if (isArray(module)) {
          try {
            runBlocks.push(providerInjector.invoke(module));
          } catch (e) {
            if (e.message)
              e.message += ' from ' + String(module[module.length - 1]);
            throw e;
          }
        } else {
          assertArgFn(module, 'module');
        }
      });
      return runBlocks;
    }
    function createInternalInjector(cache, factory) {
      function getService(serviceName) {
        if (typeof serviceName !== 'string') {
          throw Error('Service name expected');
        }
        if (cache.hasOwnProperty(serviceName)) {
          if (cache[serviceName] === INSTANTIATING) {
            throw Error('Circular dependency: ' + path.join(' <- '));
          }
          return cache[serviceName];
        } else {
          try {
            path.unshift(serviceName);
            cache[serviceName] = INSTANTIATING;
            return cache[serviceName] = factory(serviceName);
          } finally {
            path.shift();
          }
        }
      }
      function invoke(fn, self, locals) {
        var args = [], $inject = annotate(fn), length, i, key;
        for (i = 0, length = $inject.length; i < length; i++) {
          key = $inject[i];
          args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
        }
        if (!fn.$inject) {
          fn = fn[length];
        }
        switch (self ? -1 : args.length) {
        case 0:
          return fn();
        case 1:
          return fn(args[0]);
        case 2:
          return fn(args[0], args[1]);
        case 3:
          return fn(args[0], args[1], args[2]);
        case 4:
          return fn(args[0], args[1], args[2], args[3]);
        case 5:
          return fn(args[0], args[1], args[2], args[3], args[4]);
        case 6:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        case 8:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        case 9:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
        case 10:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
        default:
          return fn.apply(self, args);
        }
      }
      function instantiate(Type, locals) {
        var Constructor = function () {
          }, instance, returnedValue;
        Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype;
        instance = new Constructor();
        returnedValue = invoke(Type, instance, locals);
        return isObject(returnedValue) ? returnedValue : instance;
      }
      return {
        invoke: invoke,
        instantiate: instantiate,
        get: getService,
        annotate: annotate
      };
    }
  }
  function $AnchorScrollProvider() {
    var autoScrollingEnabled = true;
    this.disableAutoScrolling = function () {
      autoScrollingEnabled = false;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function ($window, $location, $rootScope) {
        var document = $window.document;
        function getFirstAnchor(list) {
          var result = null;
          forEach(list, function (element) {
            if (!result && lowercase(element.nodeName) === 'a')
              result = element;
          });
          return result;
        }
        function scroll() {
          var hash = $location.hash(), elm;
          if (!hash)
            $window.scrollTo(0, 0);
          else if (elm = document.getElementById(hash))
            elm.scrollIntoView();
          else if (elm = getFirstAnchor(document.getElementsByName(hash)))
            elm.scrollIntoView();
          else if (hash === 'top')
            $window.scrollTo(0, 0);
        }
        if (autoScrollingEnabled) {
          $rootScope.$watch(function autoScrollWatch() {
            return $location.hash();
          }, function autoScrollWatchAction() {
            $rootScope.$evalAsync(scroll);
          });
        }
        return scroll;
      }
    ];
  }
  function Browser(window, document, $log, $sniffer) {
    var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
    self.isMock = false;
    var outstandingRequestCount = 0;
    var outstandingRequestCallbacks = [];
    self.$$completeOutstandingRequest = completeOutstandingRequest;
    self.$$incOutstandingRequestCount = function () {
      outstandingRequestCount++;
    };
    function completeOutstandingRequest(fn) {
      try {
        fn.apply(null, sliceArgs(arguments, 1));
      } finally {
        outstandingRequestCount--;
        if (outstandingRequestCount === 0) {
          while (outstandingRequestCallbacks.length) {
            try {
              outstandingRequestCallbacks.pop()();
            } catch (e) {
              $log.error(e);
            }
          }
        }
      }
    }
    self.notifyWhenNoOutstandingRequests = function (callback) {
      forEach(pollFns, function (pollFn) {
        pollFn();
      });
      if (outstandingRequestCount === 0) {
        callback();
      } else {
        outstandingRequestCallbacks.push(callback);
      }
    };
    var pollFns = [], pollTimeout;
    self.addPollFn = function (fn) {
      if (isUndefined(pollTimeout))
        startPoller(100, setTimeout);
      pollFns.push(fn);
      return fn;
    };
    function startPoller(interval, setTimeout) {
      (function check() {
        forEach(pollFns, function (pollFn) {
          pollFn();
        });
        pollTimeout = setTimeout(check, interval);
      }());
    }
    var lastBrowserUrl = location.href, baseElement = document.find('base');
    self.url = function (url, replace) {
      if (url) {
        if (lastBrowserUrl == url)
          return;
        lastBrowserUrl = url;
        if ($sniffer.history) {
          if (replace)
            history.replaceState(null, '', url);
          else {
            history.pushState(null, '', url);
            baseElement.attr('href', baseElement.attr('href'));
          }
        } else {
          if (replace)
            location.replace(url);
          else
            location.href = url;
        }
        return self;
      } else {
        return location.href.replace(/%27/g, '\'');
      }
    };
    var urlChangeListeners = [], urlChangeInit = false;
    function fireUrlChange() {
      if (lastBrowserUrl == self.url())
        return;
      lastBrowserUrl = self.url();
      forEach(urlChangeListeners, function (listener) {
        listener(self.url());
      });
    }
    self.onUrlChange = function (callback) {
      if (!urlChangeInit) {
        if ($sniffer.history)
          jqLite(window).bind('popstate', fireUrlChange);
        if ($sniffer.hashchange)
          jqLite(window).bind('hashchange', fireUrlChange);
        else
          self.addPollFn(fireUrlChange);
        urlChangeInit = true;
      }
      urlChangeListeners.push(callback);
      return callback;
    };
    self.baseHref = function () {
      var href = baseElement.attr('href');
      return href ? href.replace(/^https?\:\/\/[^\/]*/, '') : '';
    };
    var lastCookies = {};
    var lastCookieString = '';
    var cookiePath = self.baseHref();
    self.cookies = function (name, value) {
      var cookieLength, cookieArray, cookie, i, index;
      if (name) {
        if (value === undefined) {
          rawDocument.cookie = escape(name) + '=;path=' + cookiePath + ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
        } else {
          if (isString(value)) {
            cookieLength = (rawDocument.cookie = escape(name) + '=' + escape(value) + ';path=' + cookiePath).length + 1;
            if (cookieLength > 4096) {
              $log.warn('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!');
            }
          }
        }
      } else {
        if (rawDocument.cookie !== lastCookieString) {
          lastCookieString = rawDocument.cookie;
          cookieArray = lastCookieString.split('; ');
          lastCookies = {};
          for (i = 0; i < cookieArray.length; i++) {
            cookie = cookieArray[i];
            index = cookie.indexOf('=');
            if (index > 0) {
              var name = unescape(cookie.substring(0, index));
              if (lastCookies[name] === undefined) {
                lastCookies[name] = unescape(cookie.substring(index + 1));
              }
            }
          }
        }
        return lastCookies;
      }
    };
    self.defer = function (fn, delay) {
      var timeoutId;
      outstandingRequestCount++;
      timeoutId = setTimeout(function () {
        delete pendingDeferIds[timeoutId];
        completeOutstandingRequest(fn);
      }, delay || 0);
      pendingDeferIds[timeoutId] = true;
      return timeoutId;
    };
    self.defer.cancel = function (deferId) {
      if (pendingDeferIds[deferId]) {
        delete pendingDeferIds[deferId];
        clearTimeout(deferId);
        completeOutstandingRequest(noop);
        return true;
      }
      return false;
    };
  }
  function $BrowserProvider() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function ($window, $log, $sniffer, $document) {
        return new Browser($window, $document, $log, $sniffer);
      }
    ];
  }
  function $CacheFactoryProvider() {
    this.$get = function () {
      var caches = {};
      function cacheFactory(cacheId, options) {
        if (cacheId in caches) {
          throw Error('cacheId ' + cacheId + ' taken');
        }
        var size = 0, stats = extend({}, options, { id: cacheId }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
        return caches[cacheId] = {
          put: function (key, value) {
            var lruEntry = lruHash[key] || (lruHash[key] = { key: key });
            refresh(lruEntry);
            if (isUndefined(value))
              return;
            if (!(key in data))
              size++;
            data[key] = value;
            if (size > capacity) {
              this.remove(staleEnd.key);
            }
          },
          get: function (key) {
            var lruEntry = lruHash[key];
            if (!lruEntry)
              return;
            refresh(lruEntry);
            return data[key];
          },
          remove: function (key) {
            var lruEntry = lruHash[key];
            if (!lruEntry)
              return;
            if (lruEntry == freshEnd)
              freshEnd = lruEntry.p;
            if (lruEntry == staleEnd)
              staleEnd = lruEntry.n;
            link(lruEntry.n, lruEntry.p);
            delete lruHash[key];
            delete data[key];
            size--;
          },
          removeAll: function () {
            data = {};
            size = 0;
            lruHash = {};
            freshEnd = staleEnd = null;
          },
          destroy: function () {
            data = null;
            stats = null;
            lruHash = null;
            delete caches[cacheId];
          },
          info: function () {
            return extend({}, stats, { size: size });
          }
        };
        function refresh(entry) {
          if (entry != freshEnd) {
            if (!staleEnd) {
              staleEnd = entry;
            } else if (staleEnd == entry) {
              staleEnd = entry.n;
            }
            link(entry.n, entry.p);
            link(entry, freshEnd);
            freshEnd = entry;
            freshEnd.n = null;
          }
        }
        function link(nextEntry, prevEntry) {
          if (nextEntry != prevEntry) {
            if (nextEntry)
              nextEntry.p = prevEntry;
            if (prevEntry)
              prevEntry.n = nextEntry;
          }
        }
      }
      cacheFactory.info = function () {
        var info = {};
        forEach(caches, function (cache, cacheId) {
          info[cacheId] = cache.info();
        });
        return info;
      };
      cacheFactory.get = function (cacheId) {
        return caches[cacheId];
      };
      return cacheFactory;
    };
  }
  function $TemplateCacheProvider() {
    this.$get = [
      '$cacheFactory',
      function ($cacheFactory) {
        return $cacheFactory('templates');
      }
    ];
  }
  var NON_ASSIGNABLE_MODEL_EXPRESSION = 'Non-assignable model expression: ';
  $CompileProvider.$inject = ['$provide'];
  function $CompileProvider($provide) {
    var hasDirectives = {}, Suffix = 'Directive', COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, MULTI_ROOT_TEMPLATE_ERROR = 'Template must have exactly one root element. was: ', urlSanitizationWhitelist = /^\s*(https?|ftp|mailto|file):/;
    this.directive = function registerDirective(name, directiveFactory) {
      if (isString(name)) {
        assertArg(directiveFactory, 'directive');
        if (!hasDirectives.hasOwnProperty(name)) {
          hasDirectives[name] = [];
          $provide.factory(name + Suffix, [
            '$injector',
            '$exceptionHandler',
            function ($injector, $exceptionHandler) {
              var directives = [];
              forEach(hasDirectives[name], function (directiveFactory) {
                try {
                  var directive = $injector.invoke(directiveFactory);
                  if (isFunction(directive)) {
                    directive = { compile: valueFn(directive) };
                  } else if (!directive.compile && directive.link) {
                    directive.compile = valueFn(directive.link);
                  }
                  directive.priority = directive.priority || 0;
                  directive.name = directive.name || name;
                  directive.require = directive.require || directive.controller && directive.name;
                  directive.restrict = directive.restrict || 'A';
                  directives.push(directive);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
              return directives;
            }
          ]);
        }
        hasDirectives[name].push(directiveFactory);
      } else {
        forEach(name, reverseParams(registerDirective));
      }
      return this;
    };
    this.urlSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        urlSanitizationWhitelist = regexp;
        return this;
      }
      return urlSanitizationWhitelist;
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      function ($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document) {
        var Attributes = function (element, attr) {
          this.$$element = element;
          this.$attr = attr || {};
        };
        Attributes.prototype = {
          $normalize: directiveNormalize,
          $set: function (key, value, writeAttr, attrName) {
            var booleanKey = getBooleanAttrName(this.$$element[0], key), $$observers = this.$$observers, normalizedVal;
            if (booleanKey) {
              this.$$element.prop(key, value);
              attrName = booleanKey;
            }
            this[key] = value;
            if (attrName) {
              this.$attr[key] = attrName;
            } else {
              attrName = this.$attr[key];
              if (!attrName) {
                this.$attr[key] = attrName = snake_case(key, '-');
              }
            }
            if (nodeName_(this.$$element[0]) === 'A' && key === 'href') {
              urlSanitizationNode.setAttribute('href', value);
              normalizedVal = urlSanitizationNode.href;
              if (!normalizedVal.match(urlSanitizationWhitelist)) {
                this[key] = value = 'unsafe:' + normalizedVal;
              }
            }
            if (writeAttr !== false) {
              if (value === null || value === undefined) {
                this.$$element.removeAttr(attrName);
              } else {
                this.$$element.attr(attrName, value);
              }
            }
            $$observers && forEach($$observers[key], function (fn) {
              try {
                fn(value);
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          },
          $observe: function (key, fn) {
            var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
            listeners.push(fn);
            $rootScope.$evalAsync(function () {
              if (!listeners.$$inter) {
                fn(attrs[key]);
              }
            });
            return fn;
          }
        };
        var urlSanitizationNode = $document[0].createElement('a'), startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = startSymbol == '{{' || endSymbol == '}}' ? identity : function denormalizeTemplate(template) {
            return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
          };
        return compile;
        function compile($compileNodes, transcludeFn, maxPriority) {
          if (!($compileNodes instanceof jqLite)) {
            $compileNodes = jqLite($compileNodes);
          }
          forEach($compileNodes, function (node, index) {
            if (node.nodeType == 3 && node.nodeValue.match(/\S+/)) {
              $compileNodes[index] = jqLite(node).wrap('<span></span>').parent()[0];
            }
          });
          var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority);
          return function publicLinkFn(scope, cloneConnectFn) {
            assertArg(scope, 'scope');
            var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
            for (var i = 0, ii = $linkNode.length; i < ii; i++) {
              var node = $linkNode[i];
              if (node.nodeType == 1 || node.nodeType == 9) {
                $linkNode.eq(i).data('$scope', scope);
              }
            }
            safeAddClass($linkNode, 'ng-scope');
            if (cloneConnectFn)
              cloneConnectFn($linkNode, scope);
            if (compositeLinkFn)
              compositeLinkFn(scope, $linkNode, $linkNode);
            return $linkNode;
          };
        }
        function wrongMode(localName, mode) {
          throw Error('Unsupported \'' + mode + '\' for \'' + localName + '\'.');
        }
        function safeAddClass($element, className) {
          try {
            $element.addClass(className);
          } catch (e) {
          }
        }
        function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority) {
          var linkFns = [], nodeLinkFn, childLinkFn, directives, attrs, linkFnFound;
          for (var i = 0; i < nodeList.length; i++) {
            attrs = new Attributes();
            directives = collectDirectives(nodeList[i], [], attrs, maxPriority);
            nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement) : null;
            childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !nodeList[i].childNodes || !nodeList[i].childNodes.length ? null : compileNodes(nodeList[i].childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn);
            linkFns.push(nodeLinkFn);
            linkFns.push(childLinkFn);
            linkFnFound = linkFnFound || nodeLinkFn || childLinkFn;
          }
          return linkFnFound ? compositeLinkFn : null;
          function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
            var nodeLinkFn, childLinkFn, node, childScope, childTranscludeFn, i, ii, n;
            var stableNodeList = [];
            for (i = 0, ii = nodeList.length; i < ii; i++) {
              stableNodeList.push(nodeList[i]);
            }
            for (i = 0, n = 0, ii = linkFns.length; i < ii; n++) {
              node = stableNodeList[n];
              nodeLinkFn = linkFns[i++];
              childLinkFn = linkFns[i++];
              if (nodeLinkFn) {
                if (nodeLinkFn.scope) {
                  childScope = scope.$new(isObject(nodeLinkFn.scope));
                  jqLite(node).data('$scope', childScope);
                } else {
                  childScope = scope;
                }
                childTranscludeFn = nodeLinkFn.transclude;
                if (childTranscludeFn || !boundTranscludeFn && transcludeFn) {
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, function (transcludeFn) {
                    return function (cloneFn) {
                      var transcludeScope = scope.$new();
                      transcludeScope.$$transcluded = true;
                      return transcludeFn(transcludeScope, cloneFn).bind('$destroy', bind(transcludeScope, transcludeScope.$destroy));
                    };
                  }(childTranscludeFn || transcludeFn));
                } else {
                  nodeLinkFn(childLinkFn, childScope, node, undefined, boundTranscludeFn);
                }
              } else if (childLinkFn) {
                childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
              }
            }
          }
        }
        function collectDirectives(node, directives, attrs, maxPriority) {
          var nodeType = node.nodeType, attrsMap = attrs.$attr, match, className;
          switch (nodeType) {
          case 1:
            addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), 'E', maxPriority);
            for (var attr, name, nName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
              attr = nAttrs[j];
              if (attr.specified) {
                name = attr.name;
                nName = directiveNormalize(name.toLowerCase());
                attrsMap[nName] = name;
                attrs[nName] = value = trim(msie && name == 'href' ? decodeURIComponent(node.getAttribute(name, 2)) : attr.value);
                if (getBooleanAttrName(node, nName)) {
                  attrs[nName] = true;
                }
                addAttrInterpolateDirective(node, directives, value, nName);
                addDirective(directives, nName, 'A', maxPriority);
              }
            }
            className = node.className;
            if (isString(className) && className !== '') {
              while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                nName = directiveNormalize(match[2]);
                if (addDirective(directives, nName, 'C', maxPriority)) {
                  attrs[nName] = trim(match[3]);
                }
                className = className.substr(match.index + match[0].length);
              }
            }
            break;
          case 3:
            addTextInterpolateDirective(directives, node.nodeValue);
            break;
          case 8:
            try {
              match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
              if (match) {
                nName = directiveNormalize(match[1]);
                if (addDirective(directives, nName, 'M', maxPriority)) {
                  attrs[nName] = trim(match[2]);
                }
              }
            } catch (e) {
            }
            break;
          }
          directives.sort(byPriority);
          return directives;
        }
        function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection) {
          var terminalPriority = -Number.MAX_VALUE, preLinkFns = [], postLinkFns = [], newScopeDirective = null, newIsolateScopeDirective = null, templateDirective = null, $compileNode = templateAttrs.$$element = jqLite(compileNode), directive, directiveName, $template, transcludeDirective, childTranscludeFn = transcludeFn, controllerDirectives, linkFn, directiveValue;
          for (var i = 0, ii = directives.length; i < ii; i++) {
            directive = directives[i];
            $template = undefined;
            if (terminalPriority > directive.priority) {
              break;
            }
            if (directiveValue = directive.scope) {
              assertNoDuplicate('isolated scope', newIsolateScopeDirective, directive, $compileNode);
              if (isObject(directiveValue)) {
                safeAddClass($compileNode, 'ng-isolate-scope');
                newIsolateScopeDirective = directive;
              }
              safeAddClass($compileNode, 'ng-scope');
              newScopeDirective = newScopeDirective || directive;
            }
            directiveName = directive.name;
            if (directiveValue = directive.controller) {
              controllerDirectives = controllerDirectives || {};
              assertNoDuplicate('\'' + directiveName + '\' controller', controllerDirectives[directiveName], directive, $compileNode);
              controllerDirectives[directiveName] = directive;
            }
            if (directiveValue = directive.transclude) {
              assertNoDuplicate('transclusion', transcludeDirective, directive, $compileNode);
              transcludeDirective = directive;
              terminalPriority = directive.priority;
              if (directiveValue == 'element') {
                $template = jqLite(compileNode);
                $compileNode = templateAttrs.$$element = jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
                compileNode = $compileNode[0];
                replaceWith(jqCollection, jqLite($template[0]), compileNode);
                childTranscludeFn = compile($template, transcludeFn, terminalPriority);
              } else {
                $template = jqLite(JQLiteClone(compileNode)).contents();
                $compileNode.html('');
                childTranscludeFn = compile($template, transcludeFn);
              }
            }
            if (directiveValue = directive.template) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              directiveValue = denormalizeTemplate(directiveValue);
              if (directive.replace) {
                $template = jqLite('<div>' + trim(directiveValue) + '</div>').contents();
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== 1) {
                  throw new Error(MULTI_ROOT_TEMPLATE_ERROR + directiveValue);
                }
                replaceWith(jqCollection, $compileNode, compileNode);
                var newTemplateAttrs = { $attr: {} };
                directives = directives.concat(collectDirectives(compileNode, directives.splice(i + 1, directives.length - (i + 1)), newTemplateAttrs));
                mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                ii = directives.length;
              } else {
                $compileNode.html(directiveValue);
              }
            }
            if (directive.templateUrl) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), nodeLinkFn, $compileNode, templateAttrs, jqCollection, directive.replace, childTranscludeFn);
              ii = directives.length;
            } else if (directive.compile) {
              try {
                linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                if (isFunction(linkFn)) {
                  addLinkFns(null, linkFn);
                } else if (linkFn) {
                  addLinkFns(linkFn.pre, linkFn.post);
                }
              } catch (e) {
                $exceptionHandler(e, startingTag($compileNode));
              }
            }
            if (directive.terminal) {
              nodeLinkFn.terminal = true;
              terminalPriority = Math.max(terminalPriority, directive.priority);
            }
          }
          nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope;
          nodeLinkFn.transclude = transcludeDirective && childTranscludeFn;
          return nodeLinkFn;
          function addLinkFns(pre, post) {
            if (pre) {
              pre.require = directive.require;
              preLinkFns.push(pre);
            }
            if (post) {
              post.require = directive.require;
              postLinkFns.push(post);
            }
          }
          function getControllers(require, $element) {
            var value, retrievalMethod = 'data', optional = false;
            if (isString(require)) {
              while ((value = require.charAt(0)) == '^' || value == '?') {
                require = require.substr(1);
                if (value == '^') {
                  retrievalMethod = 'inheritedData';
                }
                optional = optional || value == '?';
              }
              value = $element[retrievalMethod]('$' + require + 'Controller');
              if (!value && !optional) {
                throw Error('No controller: ' + require);
              }
              return value;
            } else if (isArray(require)) {
              value = [];
              forEach(require, function (require) {
                value.push(getControllers(require, $element));
              });
            }
            return value;
          }
          function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
            var attrs, $element, i, ii, linkFn, controller;
            if (compileNode === linkNode) {
              attrs = templateAttrs;
            } else {
              attrs = shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr));
            }
            $element = attrs.$$element;
            if (newIsolateScopeDirective) {
              var LOCAL_REGEXP = /^\s*([@=&])\s*(\w*)\s*$/;
              var parentScope = scope.$parent || scope;
              forEach(newIsolateScopeDirective.scope, function (definiton, scopeName) {
                var match = definiton.match(LOCAL_REGEXP) || [], attrName = match[2] || scopeName, mode = match[1], lastValue, parentGet, parentSet;
                scope.$$isolateBindings[scopeName] = mode + attrName;
                switch (mode) {
                case '@': {
                    attrs.$observe(attrName, function (value) {
                      scope[scopeName] = value;
                    });
                    attrs.$$observers[attrName].$$scope = parentScope;
                    break;
                  }
                case '=': {
                    parentGet = $parse(attrs[attrName]);
                    parentSet = parentGet.assign || function () {
                      lastValue = scope[scopeName] = parentGet(parentScope);
                      throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + attrs[attrName] + ' (directive: ' + newIsolateScopeDirective.name + ')');
                    };
                    lastValue = scope[scopeName] = parentGet(parentScope);
                    scope.$watch(function parentValueWatch() {
                      var parentValue = parentGet(parentScope);
                      if (parentValue !== scope[scopeName]) {
                        if (parentValue !== lastValue) {
                          lastValue = scope[scopeName] = parentValue;
                        } else {
                          parentSet(parentScope, parentValue = lastValue = scope[scopeName]);
                        }
                      }
                      return parentValue;
                    });
                    break;
                  }
                case '&': {
                    parentGet = $parse(attrs[attrName]);
                    scope[scopeName] = function (locals) {
                      return parentGet(parentScope, locals);
                    };
                    break;
                  }
                default: {
                    throw Error('Invalid isolate scope definition for directive ' + newIsolateScopeDirective.name + ': ' + definiton);
                  }
                }
              });
            }
            if (controllerDirectives) {
              forEach(controllerDirectives, function (directive) {
                var locals = {
                    $scope: scope,
                    $element: $element,
                    $attrs: attrs,
                    $transclude: boundTranscludeFn
                  };
                controller = directive.controller;
                if (controller == '@') {
                  controller = attrs[directive.name];
                }
                $element.data('$' + directive.name + 'Controller', $controller(controller, locals));
              });
            }
            for (i = 0, ii = preLinkFns.length; i < ii; i++) {
              try {
                linkFn = preLinkFns[i];
                linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
            childLinkFn && childLinkFn(scope, linkNode.childNodes, undefined, boundTranscludeFn);
            for (i = 0, ii = postLinkFns.length; i < ii; i++) {
              try {
                linkFn = postLinkFns[i];
                linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
          }
        }
        function addDirective(tDirectives, name, location, maxPriority) {
          var match = false;
          if (hasDirectives.hasOwnProperty(name)) {
            for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++) {
              try {
                directive = directives[i];
                if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                  tDirectives.push(directive);
                  match = true;
                }
              } catch (e) {
                $exceptionHandler(e);
              }
            }
          }
          return match;
        }
        function mergeTemplateAttributes(dst, src) {
          var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
          forEach(dst, function (value, key) {
            if (key.charAt(0) != '$') {
              if (src[key]) {
                value += (key === 'style' ? ';' : ' ') + src[key];
              }
              dst.$set(key, value, true, srcAttr[key]);
            }
          });
          forEach(src, function (value, key) {
            if (key == 'class') {
              safeAddClass($element, value);
              dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
            } else if (key == 'style') {
              $element.attr('style', $element.attr('style') + ';' + value);
            } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
              dst[key] = value;
              dstAttr[key] = srcAttr[key];
            }
          });
        }
        function compileTemplateUrl(directives, beforeTemplateNodeLinkFn, $compileNode, tAttrs, $rootElement, replace, childTranscludeFn) {
          var linkQueue = [], afterTemplateNodeLinkFn, afterTemplateChildLinkFn, beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
              controller: null,
              templateUrl: null,
              transclude: null,
              scope: null
            });
          $compileNode.html('');
          $http.get(origAsyncDirective.templateUrl, { cache: $templateCache }).success(function (content) {
            var compileNode, tempTemplateAttrs, $template;
            content = denormalizeTemplate(content);
            if (replace) {
              $template = jqLite('<div>' + trim(content) + '</div>').contents();
              compileNode = $template[0];
              if ($template.length != 1 || compileNode.nodeType !== 1) {
                throw new Error(MULTI_ROOT_TEMPLATE_ERROR + content);
              }
              tempTemplateAttrs = { $attr: {} };
              replaceWith($rootElement, $compileNode, compileNode);
              collectDirectives(compileNode, directives, tempTemplateAttrs);
              mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
            } else {
              compileNode = beforeTemplateCompileNode;
              $compileNode.html(content);
            }
            directives.unshift(derivedSyncDirective);
            afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn);
            afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
            while (linkQueue.length) {
              var controller = linkQueue.pop(), linkRootElement = linkQueue.pop(), beforeTemplateLinkNode = linkQueue.pop(), scope = linkQueue.pop(), linkNode = compileNode;
              if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                linkNode = JQLiteClone(compileNode);
                replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
              }
              afterTemplateNodeLinkFn(function () {
                beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, controller);
              }, scope, linkNode, $rootElement, controller);
            }
            linkQueue = null;
          }).error(function (response, code, headers, config) {
            throw Error('Failed to load template: ' + config.url);
          });
          return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, controller) {
            if (linkQueue) {
              linkQueue.push(scope);
              linkQueue.push(node);
              linkQueue.push(rootElement);
              linkQueue.push(controller);
            } else {
              afterTemplateNodeLinkFn(function () {
                beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, controller);
              }, scope, node, rootElement, controller);
            }
          };
        }
        function byPriority(a, b) {
          return b.priority - a.priority;
        }
        function assertNoDuplicate(what, previousDirective, directive, element) {
          if (previousDirective) {
            throw Error('Multiple directives [' + previousDirective.name + ', ' + directive.name + '] asking for ' + what + ' on: ' + startingTag(element));
          }
        }
        function addTextInterpolateDirective(directives, text) {
          var interpolateFn = $interpolate(text, true);
          if (interpolateFn) {
            directives.push({
              priority: 0,
              compile: valueFn(function textInterpolateLinkFn(scope, node) {
                var parent = node.parent(), bindings = parent.data('$binding') || [];
                bindings.push(interpolateFn);
                safeAddClass(parent.data('$binding', bindings), 'ng-binding');
                scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                  node[0].nodeValue = value;
                });
              })
            });
          }
        }
        function addAttrInterpolateDirective(node, directives, value, name) {
          var interpolateFn = $interpolate(value, true);
          if (!interpolateFn)
            return;
          directives.push({
            priority: 100,
            compile: valueFn(function attrInterpolateLinkFn(scope, element, attr) {
              var $$observers = attr.$$observers || (attr.$$observers = {});
              if (name === 'class') {
                interpolateFn = $interpolate(attr[name], true);
              }
              attr[name] = undefined;
              ($$observers[name] || ($$observers[name] = [])).$$inter = true;
              (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(value) {
                attr.$set(name, value);
              });
            })
          });
        }
        function replaceWith($rootElement, $element, newNode) {
          var oldNode = $element[0], parent = oldNode.parentNode, i, ii;
          if ($rootElement) {
            for (i = 0, ii = $rootElement.length; i < ii; i++) {
              if ($rootElement[i] == oldNode) {
                $rootElement[i] = newNode;
                break;
              }
            }
          }
          if (parent) {
            parent.replaceChild(newNode, oldNode);
          }
          newNode[jqLite.expando] = oldNode[jqLite.expando];
          $element[0] = newNode;
        }
      }
    ];
  }
  var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;
  function directiveNormalize(name) {
    return camelCase(name.replace(PREFIX_REGEXP, ''));
  }
  function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {
  }
  function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {
  }
  function $ControllerProvider() {
    var controllers = {};
    this.register = function (name, constructor) {
      if (isObject(name)) {
        extend(controllers, name);
      } else {
        controllers[name] = constructor;
      }
    };
    this.$get = [
      '$injector',
      '$window',
      function ($injector, $window) {
        return function (constructor, locals) {
          if (isString(constructor)) {
            var name = constructor;
            constructor = controllers.hasOwnProperty(name) ? controllers[name] : getter(locals.$scope, name, true) || getter($window, name, true);
            assertArgFn(constructor, name, true);
          }
          return $injector.instantiate(constructor, locals);
        };
      }
    ];
  }
  function $DocumentProvider() {
    this.$get = [
      '$window',
      function (window) {
        return jqLite(window.document);
      }
    ];
  }
  function $ExceptionHandlerProvider() {
    this.$get = [
      '$log',
      function ($log) {
        return function (exception, cause) {
          $log.error.apply($log, arguments);
        };
      }
    ];
  }
  function $InterpolateProvider() {
    var startSymbol = '{{';
    var endSymbol = '}}';
    this.startSymbol = function (value) {
      if (value) {
        startSymbol = value;
        return this;
      } else {
        return startSymbol;
      }
    };
    this.endSymbol = function (value) {
      if (value) {
        endSymbol = value;
        return this;
      } else {
        return endSymbol;
      }
    };
    this.$get = [
      '$parse',
      function ($parse) {
        var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
        function $interpolate(text, mustHaveExpression) {
          var startIndex, endIndex, index = 0, parts = [], length = text.length, hasInterpolation = false, fn, exp, concat = [];
          while (index < length) {
            if ((startIndex = text.indexOf(startSymbol, index)) != -1 && (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1) {
              index != startIndex && parts.push(text.substring(index, startIndex));
              parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex)));
              fn.exp = exp;
              index = endIndex + endSymbolLength;
              hasInterpolation = true;
            } else {
              index != length && parts.push(text.substring(index));
              index = length;
            }
          }
          if (!(length = parts.length)) {
            parts.push('');
            length = 1;
          }
          if (!mustHaveExpression || hasInterpolation) {
            concat.length = length;
            fn = function (context) {
              for (var i = 0, ii = length, part; i < ii; i++) {
                if (typeof (part = parts[i]) == 'function') {
                  part = part(context);
                  if (part == null || part == undefined) {
                    part = '';
                  } else if (typeof part != 'string') {
                    part = toJson(part);
                  }
                }
                concat[i] = part;
              }
              return concat.join('');
            };
            fn.exp = text;
            fn.parts = parts;
            return fn;
          }
        }
        $interpolate.startSymbol = function () {
          return startSymbol;
        };
        $interpolate.endSymbol = function () {
          return endSymbol;
        };
        return $interpolate;
      }
    ];
  }
  var URL_MATCH = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, PATH_MATCH = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, HASH_MATCH = PATH_MATCH, DEFAULT_PORTS = {
      'http': 80,
      'https': 443,
      'ftp': 21
    };
  function encodePath(path) {
    var segments = path.split('/'), i = segments.length;
    while (i--) {
      segments[i] = encodeUriSegment(segments[i]);
    }
    return segments.join('/');
  }
  function stripHash(url) {
    return url.split('#')[0];
  }
  function matchUrl(url, obj) {
    var match = URL_MATCH.exec(url);
    match = {
      protocol: match[1],
      host: match[3],
      port: int(match[5]) || DEFAULT_PORTS[match[1]] || null,
      path: match[6] || '/',
      search: match[8],
      hash: match[10]
    };
    if (obj) {
      obj.$$protocol = match.protocol;
      obj.$$host = match.host;
      obj.$$port = match.port;
    }
    return match;
  }
  function composeProtocolHostPort(protocol, host, port) {
    return protocol + '://' + host + (port == DEFAULT_PORTS[protocol] ? '' : ':' + port);
  }
  function pathPrefixFromBase(basePath) {
    return basePath.substr(0, basePath.lastIndexOf('/'));
  }
  function convertToHtml5Url(url, basePath, hashPrefix) {
    var match = matchUrl(url);
    if (decodeURIComponent(match.path) != basePath || isUndefined(match.hash) || match.hash.indexOf(hashPrefix) !== 0) {
      return url;
    } else {
      return composeProtocolHostPort(match.protocol, match.host, match.port) + pathPrefixFromBase(basePath) + match.hash.substr(hashPrefix.length);
    }
  }
  function convertToHashbangUrl(url, basePath, hashPrefix) {
    var match = matchUrl(url);
    if (decodeURIComponent(match.path) == basePath && !isUndefined(match.hash) && match.hash.indexOf(hashPrefix) === 0) {
      return url;
    } else {
      var search = match.search && '?' + match.search || '', hash = match.hash && '#' + match.hash || '', pathPrefix = pathPrefixFromBase(basePath), path = match.path.substr(pathPrefix.length);
      if (match.path.indexOf(pathPrefix) !== 0) {
        throw Error('Invalid url "' + url + '", missing path prefix "' + pathPrefix + '" !');
      }
      return composeProtocolHostPort(match.protocol, match.host, match.port) + basePath + '#' + hashPrefix + path + search + hash;
    }
  }
  function LocationUrl(url, pathPrefix, appBaseUrl) {
    pathPrefix = pathPrefix || '';
    this.$$parse = function (newAbsoluteUrl) {
      var match = matchUrl(newAbsoluteUrl, this);
      if (match.path.indexOf(pathPrefix) !== 0) {
        throw Error('Invalid url "' + newAbsoluteUrl + '", missing path prefix "' + pathPrefix + '" !');
      }
      this.$$path = decodeURIComponent(match.path.substr(pathPrefix.length));
      this.$$search = parseKeyValue(match.search);
      this.$$hash = match.hash && decodeURIComponent(match.hash) || '';
      this.$$compose();
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + pathPrefix + this.$$url;
    };
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return absoluteLinkUrl;
      }
    };
    this.$$parse(url);
  }
  function LocationHashbangUrl(url, hashPrefix, appBaseUrl) {
    var basePath;
    this.$$parse = function (url) {
      var match = matchUrl(url, this);
      if (match.hash && match.hash.indexOf(hashPrefix) !== 0) {
        throw Error('Invalid url "' + url + '", missing hash prefix "' + hashPrefix + '" !');
      }
      basePath = match.path + (match.search ? '?' + match.search : '');
      match = HASH_MATCH.exec((match.hash || '').substr(hashPrefix.length));
      if (match[1]) {
        this.$$path = (match[1].charAt(0) == '/' ? '' : '/') + decodeURIComponent(match[1]);
      } else {
        this.$$path = '';
      }
      this.$$search = parseKeyValue(match[3]);
      this.$$hash = match[5] && decodeURIComponent(match[5]) || '';
      this.$$compose();
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + basePath + (this.$$url ? '#' + hashPrefix + this.$$url : '');
    };
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return absoluteLinkUrl;
      }
    };
    this.$$parse(url);
  }
  LocationUrl.prototype = {
    $$replace: false,
    absUrl: locationGetter('$$absUrl'),
    url: function (url, replace) {
      if (isUndefined(url))
        return this.$$url;
      var match = PATH_MATCH.exec(url);
      if (match[1])
        this.path(decodeURIComponent(match[1]));
      if (match[2] || match[1])
        this.search(match[3] || '');
      this.hash(match[5] || '', replace);
      return this;
    },
    protocol: locationGetter('$$protocol'),
    host: locationGetter('$$host'),
    port: locationGetter('$$port'),
    path: locationGetterSetter('$$path', function (path) {
      return path.charAt(0) == '/' ? path : '/' + path;
    }),
    search: function (search, paramValue) {
      if (isUndefined(search))
        return this.$$search;
      if (isDefined(paramValue)) {
        if (paramValue === null) {
          delete this.$$search[search];
        } else {
          this.$$search[search] = paramValue;
        }
      } else {
        this.$$search = isString(search) ? parseKeyValue(search) : search;
      }
      this.$$compose();
      return this;
    },
    hash: locationGetterSetter('$$hash', identity),
    replace: function () {
      this.$$replace = true;
      return this;
    }
  };
  LocationHashbangUrl.prototype = inherit(LocationUrl.prototype);
  function LocationHashbangInHtml5Url(url, hashPrefix, appBaseUrl, baseExtra) {
    LocationHashbangUrl.apply(this, arguments);
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return appBaseUrl + baseExtra + '#' + hashPrefix + absoluteLinkUrl.substr(appBaseUrl.length);
      }
    };
  }
  LocationHashbangInHtml5Url.prototype = inherit(LocationHashbangUrl.prototype);
  function locationGetter(property) {
    return function () {
      return this[property];
    };
  }
  function locationGetterSetter(property, preprocess) {
    return function (value) {
      if (isUndefined(value))
        return this[property];
      this[property] = preprocess(value);
      this.$$compose();
      return this;
    };
  }
  function $LocationProvider() {
    var hashPrefix = '', html5Mode = false;
    this.hashPrefix = function (prefix) {
      if (isDefined(prefix)) {
        hashPrefix = prefix;
        return this;
      } else {
        return hashPrefix;
      }
    };
    this.html5Mode = function (mode) {
      if (isDefined(mode)) {
        html5Mode = mode;
        return this;
      } else {
        return html5Mode;
      }
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function ($rootScope, $browser, $sniffer, $rootElement) {
        var $location, basePath, pathPrefix, initUrl = $browser.url(), initUrlParts = matchUrl(initUrl), appBaseUrl;
        if (html5Mode) {
          basePath = $browser.baseHref() || '/';
          pathPrefix = pathPrefixFromBase(basePath);
          appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + pathPrefix + '/';
          if ($sniffer.history) {
            $location = new LocationUrl(convertToHtml5Url(initUrl, basePath, hashPrefix), pathPrefix, appBaseUrl);
          } else {
            $location = new LocationHashbangInHtml5Url(convertToHashbangUrl(initUrl, basePath, hashPrefix), hashPrefix, appBaseUrl, basePath.substr(pathPrefix.length + 1));
          }
        } else {
          appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + (initUrlParts.path || '') + (initUrlParts.search ? '?' + initUrlParts.search : '') + '#' + hashPrefix + '/';
          $location = new LocationHashbangUrl(initUrl, hashPrefix, appBaseUrl);
        }
        $rootElement.bind('click', function (event) {
          if (event.ctrlKey || event.metaKey || event.which == 2)
            return;
          var elm = jqLite(event.target);
          while (lowercase(elm[0].nodeName) !== 'a') {
            if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
              return;
          }
          var absHref = elm.prop('href'), rewrittenUrl = $location.$$rewriteAppUrl(absHref);
          if (absHref && !elm.attr('target') && rewrittenUrl) {
            $location.$$parse(rewrittenUrl);
            $rootScope.$apply();
            event.preventDefault();
            window.angular['ff-684208-preventDefault'] = true;
          }
        });
        if ($location.absUrl() != initUrl) {
          $browser.url($location.absUrl(), true);
        }
        $browser.onUrlChange(function (newUrl) {
          if ($location.absUrl() != newUrl) {
            if ($rootScope.$broadcast('$locationChangeStart', newUrl, $location.absUrl()).defaultPrevented) {
              $browser.url($location.absUrl());
              return;
            }
            $rootScope.$evalAsync(function () {
              var oldUrl = $location.absUrl();
              $location.$$parse(newUrl);
              afterLocationChange(oldUrl);
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          }
        });
        var changeCounter = 0;
        $rootScope.$watch(function $locationWatch() {
          var oldUrl = $browser.url();
          var currentReplace = $location.$$replace;
          if (!changeCounter || oldUrl != $location.absUrl()) {
            changeCounter++;
            $rootScope.$evalAsync(function () {
              if ($rootScope.$broadcast('$locationChangeStart', $location.absUrl(), oldUrl).defaultPrevented) {
                $location.$$parse(oldUrl);
              } else {
                $browser.url($location.absUrl(), currentReplace);
                afterLocationChange(oldUrl);
              }
            });
          }
          $location.$$replace = false;
          return changeCounter;
        });
        return $location;
        function afterLocationChange(oldUrl) {
          $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl);
        }
      }
    ];
  }
  function $LogProvider() {
    this.$get = [
      '$window',
      function ($window) {
        return {
          log: consoleLog('log'),
          warn: consoleLog('warn'),
          info: consoleLog('info'),
          error: consoleLog('error')
        };
        function formatError(arg) {
          if (arg instanceof Error) {
            if (arg.stack) {
              arg = arg.message && arg.stack.indexOf(arg.message) === -1 ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
            } else if (arg.sourceURL) {
              arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
            }
          }
          return arg;
        }
        function consoleLog(type) {
          var console = $window.console || {}, logFn = console[type] || console.log || noop;
          if (logFn.apply) {
            return function () {
              var args = [];
              forEach(arguments, function (arg) {
                args.push(formatError(arg));
              });
              return logFn.apply(console, args);
            };
          }
          return function (arg1, arg2) {
            logFn(arg1, arg2);
          };
        }
      }
    ];
  }
  var OPERATORS = {
      'null': function () {
        return null;
      },
      'true': function () {
        return true;
      },
      'false': function () {
        return false;
      },
      undefined: noop,
      '+': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        if (isDefined(a)) {
          if (isDefined(b)) {
            return a + b;
          }
          return a;
        }
        return isDefined(b) ? b : undefined;
      },
      '-': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        return (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
      },
      '*': function (self, locals, a, b) {
        return a(self, locals) * b(self, locals);
      },
      '/': function (self, locals, a, b) {
        return a(self, locals) / b(self, locals);
      },
      '%': function (self, locals, a, b) {
        return a(self, locals) % b(self, locals);
      },
      '^': function (self, locals, a, b) {
        return a(self, locals) ^ b(self, locals);
      },
      '=': noop,
      '==': function (self, locals, a, b) {
        return a(self, locals) == b(self, locals);
      },
      '!=': function (self, locals, a, b) {
        return a(self, locals) != b(self, locals);
      },
      '<': function (self, locals, a, b) {
        return a(self, locals) < b(self, locals);
      },
      '>': function (self, locals, a, b) {
        return a(self, locals) > b(self, locals);
      },
      '<=': function (self, locals, a, b) {
        return a(self, locals) <= b(self, locals);
      },
      '>=': function (self, locals, a, b) {
        return a(self, locals) >= b(self, locals);
      },
      '&&': function (self, locals, a, b) {
        return a(self, locals) && b(self, locals);
      },
      '||': function (self, locals, a, b) {
        return a(self, locals) || b(self, locals);
      },
      '&': function (self, locals, a, b) {
        return a(self, locals) & b(self, locals);
      },
      '|': function (self, locals, a, b) {
        return b(self, locals)(self, locals, a(self, locals));
      },
      '!': function (self, locals, a) {
        return !a(self, locals);
      }
    };
  var ESCAPE = {
      'n': '\n',
      'f': '\f',
      'r': '\r',
      't': '\t',
      'v': '\x0B',
      '\'': '\'',
      '"': '"'
    };
  function lex(text, csp) {
    var tokens = [], token, index = 0, json = [], ch, lastCh = ':';
    while (index < text.length) {
      ch = text.charAt(index);
      if (is('"\'')) {
        readString(ch);
      } else if (isNumber(ch) || is('.') && isNumber(peek())) {
        readNumber();
      } else if (isIdent(ch)) {
        readIdent();
        if (was('{,') && json[0] == '{' && (token = tokens[tokens.length - 1])) {
          token.json = token.text.indexOf('.') == -1;
        }
      } else if (is('(){}[].,;:')) {
        tokens.push({
          index: index,
          text: ch,
          json: was(':[,') && is('{[') || is('}]:,')
        });
        if (is('{['))
          json.unshift(ch);
        if (is('}]'))
          json.shift();
        index++;
      } else if (isWhitespace(ch)) {
        index++;
        continue;
      } else {
        var ch2 = ch + peek(), fn = OPERATORS[ch], fn2 = OPERATORS[ch2];
        if (fn2) {
          tokens.push({
            index: index,
            text: ch2,
            fn: fn2
          });
          index += 2;
        } else if (fn) {
          tokens.push({
            index: index,
            text: ch,
            fn: fn,
            json: was('[,:') && is('+-')
          });
          index += 1;
        } else {
          throwError('Unexpected next character ', index, index + 1);
        }
      }
      lastCh = ch;
    }
    return tokens;
    function is(chars) {
      return chars.indexOf(ch) != -1;
    }
    function was(chars) {
      return chars.indexOf(lastCh) != -1;
    }
    function peek() {
      return index + 1 < text.length ? text.charAt(index + 1) : false;
    }
    function isNumber(ch) {
      return '0' <= ch && ch <= '9';
    }
    function isWhitespace(ch) {
      return ch == ' ' || ch == '\r' || ch == '\t' || ch == '\n' || ch == '\x0B' || ch == '\xa0';
    }
    function isIdent(ch) {
      return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' == ch || ch == '$';
    }
    function isExpOperator(ch) {
      return ch == '-' || ch == '+' || isNumber(ch);
    }
    function throwError(error, start, end) {
      end = end || index;
      throw Error('Lexer Error: ' + error + ' at column' + (isDefined(start) ? 's ' + start + '-' + index + ' [' + text.substring(start, end) + ']' : ' ' + end) + ' in expression [' + text + '].');
    }
    function readNumber() {
      var number = '';
      var start = index;
      while (index < text.length) {
        var ch = lowercase(text.charAt(index));
        if (ch == '.' || isNumber(ch)) {
          number += ch;
        } else {
          var peekCh = peek();
          if (ch == 'e' && isExpOperator(peekCh)) {
            number += ch;
          } else if (isExpOperator(ch) && peekCh && isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
            number += ch;
          } else if (isExpOperator(ch) && (!peekCh || !isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
            throwError('Invalid exponent');
          } else {
            break;
          }
        }
        index++;
      }
      number = 1 * number;
      tokens.push({
        index: start,
        text: number,
        json: true,
        fn: function () {
          return number;
        }
      });
    }
    function readIdent() {
      var ident = '', start = index, lastDot, peekIndex, methodName, ch;
      while (index < text.length) {
        ch = text.charAt(index);
        if (ch == '.' || isIdent(ch) || isNumber(ch)) {
          if (ch == '.')
            lastDot = index;
          ident += ch;
        } else {
          break;
        }
        index++;
      }
      if (lastDot) {
        peekIndex = index;
        while (peekIndex < text.length) {
          ch = text.charAt(peekIndex);
          if (ch == '(') {
            methodName = ident.substr(lastDot - start + 1);
            ident = ident.substr(0, lastDot - start);
            index = peekIndex;
            break;
          }
          if (isWhitespace(ch)) {
            peekIndex++;
          } else {
            break;
          }
        }
      }
      var token = {
          index: start,
          text: ident
        };
      if (OPERATORS.hasOwnProperty(ident)) {
        token.fn = token.json = OPERATORS[ident];
      } else {
        var getter = getterFn(ident, csp);
        token.fn = extend(function (self, locals) {
          return getter(self, locals);
        }, {
          assign: function (self, value) {
            return setter(self, ident, value);
          }
        });
      }
      tokens.push(token);
      if (methodName) {
        tokens.push({
          index: lastDot,
          text: '.',
          json: false
        });
        tokens.push({
          index: lastDot + 1,
          text: methodName,
          json: false
        });
      }
    }
    function readString(quote) {
      var start = index;
      index++;
      var string = '';
      var rawString = quote;
      var escape = false;
      while (index < text.length) {
        var ch = text.charAt(index);
        rawString += ch;
        if (escape) {
          if (ch == 'u') {
            var hex = text.substring(index + 1, index + 5);
            if (!hex.match(/[\da-f]{4}/i))
              throwError('Invalid unicode escape [\\u' + hex + ']');
            index += 4;
            string += String.fromCharCode(parseInt(hex, 16));
          } else {
            var rep = ESCAPE[ch];
            if (rep) {
              string += rep;
            } else {
              string += ch;
            }
          }
          escape = false;
        } else if (ch == '\\') {
          escape = true;
        } else if (ch == quote) {
          index++;
          tokens.push({
            index: start,
            text: rawString,
            string: string,
            json: true,
            fn: function () {
              return string;
            }
          });
          return;
        } else {
          string += ch;
        }
        index++;
      }
      throwError('Unterminated quote', start);
    }
  }
  function parser(text, json, $filter, csp) {
    var ZERO = valueFn(0), value, tokens = lex(text, csp), assignment = _assignment, functionCall = _functionCall, fieldAccess = _fieldAccess, objectIndex = _objectIndex, filterChain = _filterChain;
    if (json) {
      assignment = logicalOR;
      functionCall = fieldAccess = objectIndex = filterChain = function () {
        throwError('is not valid json', {
          text: text,
          index: 0
        });
      };
      value = primary();
    } else {
      value = statements();
    }
    if (tokens.length !== 0) {
      throwError('is an unexpected token', tokens[0]);
    }
    return value;
    function throwError(msg, token) {
      throw Error('Syntax Error: Token \'' + token.text + '\' ' + msg + ' at column ' + (token.index + 1) + ' of the expression [' + text + '] starting at [' + text.substring(token.index) + '].');
    }
    function peekToken() {
      if (tokens.length === 0)
        throw Error('Unexpected end of expression: ' + text);
      return tokens[0];
    }
    function peek(e1, e2, e3, e4) {
      if (tokens.length > 0) {
        var token = tokens[0];
        var t = token.text;
        if (t == e1 || t == e2 || t == e3 || t == e4 || !e1 && !e2 && !e3 && !e4) {
          return token;
        }
      }
      return false;
    }
    function expect(e1, e2, e3, e4) {
      var token = peek(e1, e2, e3, e4);
      if (token) {
        if (json && !token.json) {
          throwError('is not valid json', token);
        }
        tokens.shift();
        return token;
      }
      return false;
    }
    function consume(e1) {
      if (!expect(e1)) {
        throwError('is unexpected, expecting [' + e1 + ']', peek());
      }
    }
    function unaryFn(fn, right) {
      return function (self, locals) {
        return fn(self, locals, right);
      };
    }
    function binaryFn(left, fn, right) {
      return function (self, locals) {
        return fn(self, locals, left, right);
      };
    }
    function statements() {
      var statements = [];
      while (true) {
        if (tokens.length > 0 && !peek('}', ')', ';', ']'))
          statements.push(filterChain());
        if (!expect(';')) {
          return statements.length == 1 ? statements[0] : function (self, locals) {
            var value;
            for (var i = 0; i < statements.length; i++) {
              var statement = statements[i];
              if (statement)
                value = statement(self, locals);
            }
            return value;
          };
        }
      }
    }
    function _filterChain() {
      var left = expression();
      var token;
      while (true) {
        if (token = expect('|')) {
          left = binaryFn(left, token.fn, filter());
        } else {
          return left;
        }
      }
    }
    function filter() {
      var token = expect();
      var fn = $filter(token.text);
      var argsFn = [];
      while (true) {
        if (token = expect(':')) {
          argsFn.push(expression());
        } else {
          var fnInvoke = function (self, locals, input) {
            var args = [input];
            for (var i = 0; i < argsFn.length; i++) {
              args.push(argsFn[i](self, locals));
            }
            return fn.apply(self, args);
          };
          return function () {
            return fnInvoke;
          };
        }
      }
    }
    function expression() {
      return assignment();
    }
    function _assignment() {
      var left = logicalOR();
      var right;
      var token;
      if (token = expect('=')) {
        if (!left.assign) {
          throwError('implies assignment but [' + text.substring(0, token.index) + '] can not be assigned to', token);
        }
        right = logicalOR();
        return function (scope, locals) {
          return left.assign(scope, right(scope, locals), locals);
        };
      } else {
        return left;
      }
    }
    function logicalOR() {
      var left = logicalAND();
      var token;
      while (true) {
        if (token = expect('||')) {
          left = binaryFn(left, token.fn, logicalAND());
        } else {
          return left;
        }
      }
    }
    function logicalAND() {
      var left = equality();
      var token;
      if (token = expect('&&')) {
        left = binaryFn(left, token.fn, logicalAND());
      }
      return left;
    }
    function equality() {
      var left = relational();
      var token;
      if (token = expect('==', '!=')) {
        left = binaryFn(left, token.fn, equality());
      }
      return left;
    }
    function relational() {
      var left = additive();
      var token;
      if (token = expect('<', '>', '<=', '>=')) {
        left = binaryFn(left, token.fn, relational());
      }
      return left;
    }
    function additive() {
      var left = multiplicative();
      var token;
      while (token = expect('+', '-')) {
        left = binaryFn(left, token.fn, multiplicative());
      }
      return left;
    }
    function multiplicative() {
      var left = unary();
      var token;
      while (token = expect('*', '/', '%')) {
        left = binaryFn(left, token.fn, unary());
      }
      return left;
    }
    function unary() {
      var token;
      if (expect('+')) {
        return primary();
      } else if (token = expect('-')) {
        return binaryFn(ZERO, token.fn, unary());
      } else if (token = expect('!')) {
        return unaryFn(token.fn, unary());
      } else {
        return primary();
      }
    }
    function primary() {
      var primary;
      if (expect('(')) {
        primary = filterChain();
        consume(')');
      } else if (expect('[')) {
        primary = arrayDeclaration();
      } else if (expect('{')) {
        primary = object();
      } else {
        var token = expect();
        primary = token.fn;
        if (!primary) {
          throwError('not a primary expression', token);
        }
      }
      var next, context;
      while (next = expect('(', '[', '.')) {
        if (next.text === '(') {
          primary = functionCall(primary, context);
          context = null;
        } else if (next.text === '[') {
          context = primary;
          primary = objectIndex(primary);
        } else if (next.text === '.') {
          context = primary;
          primary = fieldAccess(primary);
        } else {
          throwError('IMPOSSIBLE');
        }
      }
      return primary;
    }
    function _fieldAccess(object) {
      var field = expect().text;
      var getter = getterFn(field, csp);
      return extend(function (scope, locals, self) {
        return getter(self || object(scope, locals), locals);
      }, {
        assign: function (scope, value, locals) {
          return setter(object(scope, locals), field, value);
        }
      });
    }
    function _objectIndex(obj) {
      var indexFn = expression();
      consume(']');
      return extend(function (self, locals) {
        var o = obj(self, locals), i = indexFn(self, locals), v, p;
        if (!o)
          return undefined;
        v = o[i];
        if (v && v.then) {
          p = v;
          if (!('$$v' in v)) {
            p.$$v = undefined;
            p.then(function (val) {
              p.$$v = val;
            });
          }
          v = v.$$v;
        }
        return v;
      }, {
        assign: function (self, value, locals) {
          return obj(self, locals)[indexFn(self, locals)] = value;
        }
      });
    }
    function _functionCall(fn, contextGetter) {
      var argsFn = [];
      if (peekToken().text != ')') {
        do {
          argsFn.push(expression());
        } while (expect(','));
      }
      consume(')');
      return function (scope, locals) {
        var args = [], context = contextGetter ? contextGetter(scope, locals) : scope;
        for (var i = 0; i < argsFn.length; i++) {
          args.push(argsFn[i](scope, locals));
        }
        var fnPtr = fn(scope, locals, context) || noop;
        return fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
      };
    }
    function arrayDeclaration() {
      var elementFns = [];
      if (peekToken().text != ']') {
        do {
          elementFns.push(expression());
        } while (expect(','));
      }
      consume(']');
      return function (self, locals) {
        var array = [];
        for (var i = 0; i < elementFns.length; i++) {
          array.push(elementFns[i](self, locals));
        }
        return array;
      };
    }
    function object() {
      var keyValues = [];
      if (peekToken().text != '}') {
        do {
          var token = expect(), key = token.string || token.text;
          consume(':');
          var value = expression();
          keyValues.push({
            key: key,
            value: value
          });
        } while (expect(','));
      }
      consume('}');
      return function (self, locals) {
        var object = {};
        for (var i = 0; i < keyValues.length; i++) {
          var keyValue = keyValues[i];
          object[keyValue.key] = keyValue.value(self, locals);
        }
        return object;
      };
    }
  }
  function setter(obj, path, setValue) {
    var element = path.split('.');
    for (var i = 0; element.length > 1; i++) {
      var key = element.shift();
      var propertyObj = obj[key];
      if (!propertyObj) {
        propertyObj = {};
        obj[key] = propertyObj;
      }
      obj = propertyObj;
    }
    obj[element.shift()] = setValue;
    return setValue;
  }
  function getter(obj, path, bindFnToScope) {
    if (!path)
      return obj;
    var keys = path.split('.');
    var key;
    var lastInstance = obj;
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      key = keys[i];
      if (obj) {
        obj = (lastInstance = obj)[key];
      }
    }
    if (!bindFnToScope && isFunction(obj)) {
      return bind(lastInstance, obj);
    }
    return obj;
  }
  var getterFnCache = {};
  function cspSafeGetterFn(key0, key1, key2, key3, key4) {
    return function (scope, locals) {
      var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope, promise;
      if (pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key0];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key1 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key1];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key2 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key2];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key3 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key3];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key4 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key4];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      return pathVal;
    };
  }
  function getterFn(path, csp) {
    if (getterFnCache.hasOwnProperty(path)) {
      return getterFnCache[path];
    }
    var pathKeys = path.split('.'), pathKeysLength = pathKeys.length, fn;
    if (csp) {
      fn = pathKeysLength < 6 ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4]) : function (scope, locals) {
        var i = 0, val;
        do {
          val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++])(scope, locals);
          locals = undefined;
          scope = val;
        } while (i < pathKeysLength);
        return val;
      };
    } else {
      var code = 'var l, fn, p;\n';
      forEach(pathKeys, function (key, index) {
        code += 'if(s === null || s === undefined) return s;\n' + 'l=s;\n' + 's=' + (index ? 's' : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' + 'if (s && s.then) {\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n';
      });
      code += 'return s;';
      fn = Function('s', 'k', code);
      fn.toString = function () {
        return code;
      };
    }
    return getterFnCache[path] = fn;
  }
  function $ParseProvider() {
    var cache = {};
    this.$get = [
      '$filter',
      '$sniffer',
      function ($filter, $sniffer) {
        return function (exp) {
          switch (typeof exp) {
          case 'string':
            return cache.hasOwnProperty(exp) ? cache[exp] : cache[exp] = parser(exp, false, $filter, $sniffer.csp);
          case 'function':
            return exp;
          default:
            return noop;
          }
        };
      }
    ];
  }
  function $QProvider() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function ($rootScope, $exceptionHandler) {
        return qFactory(function (callback) {
          $rootScope.$evalAsync(callback);
        }, $exceptionHandler);
      }
    ];
  }
  function qFactory(nextTick, exceptionHandler) {
    var defer = function () {
      var pending = [], value, deferred;
      deferred = {
        resolve: function (val) {
          if (pending) {
            var callbacks = pending;
            pending = undefined;
            value = ref(val);
            if (callbacks.length) {
              nextTick(function () {
                var callback;
                for (var i = 0, ii = callbacks.length; i < ii; i++) {
                  callback = callbacks[i];
                  value.then(callback[0], callback[1]);
                }
              });
            }
          }
        },
        reject: function (reason) {
          deferred.resolve(reject(reason));
        },
        promise: {
          then: function (callback, errback) {
            var result = defer();
            var wrappedCallback = function (value) {
              try {
                result.resolve((callback || defaultCallback)(value));
              } catch (e) {
                exceptionHandler(e);
                result.reject(e);
              }
            };
            var wrappedErrback = function (reason) {
              try {
                result.resolve((errback || defaultErrback)(reason));
              } catch (e) {
                exceptionHandler(e);
                result.reject(e);
              }
            };
            if (pending) {
              pending.push([
                wrappedCallback,
                wrappedErrback
              ]);
            } else {
              value.then(wrappedCallback, wrappedErrback);
            }
            return result.promise;
          }
        }
      };
      return deferred;
    };
    var ref = function (value) {
      if (value && value.then)
        return value;
      return {
        then: function (callback) {
          var result = defer();
          nextTick(function () {
            result.resolve(callback(value));
          });
          return result.promise;
        }
      };
    };
    var reject = function (reason) {
      return {
        then: function (callback, errback) {
          var result = defer();
          nextTick(function () {
            result.resolve((errback || defaultErrback)(reason));
          });
          return result.promise;
        }
      };
    };
    var when = function (value, callback, errback) {
      var result = defer(), done;
      var wrappedCallback = function (value) {
        try {
          return (callback || defaultCallback)(value);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      var wrappedErrback = function (reason) {
        try {
          return (errback || defaultErrback)(reason);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      nextTick(function () {
        ref(value).then(function (value) {
          if (done)
            return;
          done = true;
          result.resolve(ref(value).then(wrappedCallback, wrappedErrback));
        }, function (reason) {
          if (done)
            return;
          done = true;
          result.resolve(wrappedErrback(reason));
        });
      });
      return result.promise;
    };
    function defaultCallback(value) {
      return value;
    }
    function defaultErrback(reason) {
      return reject(reason);
    }
    function all(promises) {
      var deferred = defer(), counter = promises.length, results = [];
      if (counter) {
        forEach(promises, function (promise, index) {
          ref(promise).then(function (value) {
            if (index in results)
              return;
            results[index] = value;
            if (!--counter)
              deferred.resolve(results);
          }, function (reason) {
            if (index in results)
              return;
            deferred.reject(reason);
          });
        });
      } else {
        deferred.resolve(results);
      }
      return deferred.promise;
    }
    return {
      defer: defer,
      reject: reject,
      when: when,
      all: all
    };
  }
  function $RouteProvider() {
    var routes = {};
    this.when = function (path, route) {
      routes[path] = extend({ reloadOnSearch: true }, route);
      if (path) {
        var redirectPath = path[path.length - 1] == '/' ? path.substr(0, path.length - 1) : path + '/';
        routes[redirectPath] = { redirectTo: path };
      }
      return this;
    };
    this.otherwise = function (params) {
      this.when(null, params);
      return this;
    };
    this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$http',
      '$templateCache',
      function ($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache) {
        var forceReload = false, $route = {
            routes: routes,
            reload: function () {
              forceReload = true;
              $rootScope.$evalAsync(updateRoute);
            }
          };
        $rootScope.$on('$locationChangeSuccess', updateRoute);
        return $route;
        function switchRouteMatcher(on, when) {
          when = '^' + when.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$';
          var regex = '', params = [], dst = {};
          var re = /:(\w+)/g, paramMatch, lastMatchedIndex = 0;
          while ((paramMatch = re.exec(when)) !== null) {
            regex += when.slice(lastMatchedIndex, paramMatch.index);
            regex += '([^\\/]*)';
            params.push(paramMatch[1]);
            lastMatchedIndex = re.lastIndex;
          }
          regex += when.substr(lastMatchedIndex);
          var match = on.match(new RegExp(regex));
          if (match) {
            forEach(params, function (name, index) {
              dst[name] = match[index + 1];
            });
          }
          return match ? dst : null;
        }
        function updateRoute() {
          var next = parseRoute(), last = $route.current;
          if (next && last && next.$$route === last.$$route && equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
            last.params = next.params;
            copy(last.params, $routeParams);
            $rootScope.$broadcast('$routeUpdate', last);
          } else if (next || last) {
            forceReload = false;
            $rootScope.$broadcast('$routeChangeStart', next, last);
            $route.current = next;
            if (next) {
              if (next.redirectTo) {
                if (isString(next.redirectTo)) {
                  $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace();
                } else {
                  $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace();
                }
              }
            }
            $q.when(next).then(function () {
              if (next) {
                var keys = [], values = [], template;
                forEach(next.resolve || {}, function (value, key) {
                  keys.push(key);
                  values.push(isString(value) ? $injector.get(value) : $injector.invoke(value));
                });
                if (isDefined(template = next.template)) {
                } else if (isDefined(template = next.templateUrl)) {
                  template = $http.get(template, { cache: $templateCache }).then(function (response) {
                    return response.data;
                  });
                }
                if (isDefined(template)) {
                  keys.push('$template');
                  values.push(template);
                }
                return $q.all(values).then(function (values) {
                  var locals = {};
                  forEach(values, function (value, index) {
                    locals[keys[index]] = value;
                  });
                  return locals;
                });
              }
            }).then(function (locals) {
              if (next == $route.current) {
                if (next) {
                  next.locals = locals;
                  copy(next.params, $routeParams);
                }
                $rootScope.$broadcast('$routeChangeSuccess', next, last);
              }
            }, function (error) {
              if (next == $route.current) {
                $rootScope.$broadcast('$routeChangeError', next, last, error);
              }
            });
          }
        }
        function parseRoute() {
          var params, match;
          forEach(routes, function (route, path) {
            if (!match && (params = switchRouteMatcher($location.path(), path))) {
              match = inherit(route, {
                params: extend({}, $location.search(), params),
                pathParams: params
              });
              match.$$route = route;
            }
          });
          return match || routes[null] && inherit(routes[null], {
            params: {},
            pathParams: {}
          });
        }
        function interpolate(string, params) {
          var result = [];
          forEach((string || '').split(':'), function (segment, i) {
            if (i == 0) {
              result.push(segment);
            } else {
              var segmentMatch = segment.match(/(\w+)(.*)/);
              var key = segmentMatch[1];
              result.push(params[key]);
              result.push(segmentMatch[2] || '');
              delete params[key];
            }
          });
          return result.join('');
        }
      }
    ];
  }
  function $RouteParamsProvider() {
    this.$get = valueFn({});
  }
  function $RootScopeProvider() {
    var TTL = 10;
    this.digestTtl = function (value) {
      if (arguments.length) {
        TTL = value;
      }
      return TTL;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      function ($injector, $exceptionHandler, $parse) {
        function Scope() {
          this.$id = nextUid();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = false;
          this.$$asyncQueue = [];
          this.$$listeners = {};
          this.$$isolateBindings = {};
        }
        Scope.prototype = {
          $new: function (isolate) {
            var Child, child;
            if (isFunction(isolate)) {
              throw Error('API-CHANGE: Use $controller to instantiate controllers.');
            }
            if (isolate) {
              child = new Scope();
              child.$root = this.$root;
            } else {
              Child = function () {
              };
              Child.prototype = this;
              child = new Child();
              child.$id = nextUid();
            }
            child['this'] = child;
            child.$$listeners = {};
            child.$parent = this;
            child.$$asyncQueue = [];
            child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null;
            child.$$prevSibling = this.$$childTail;
            if (this.$$childHead) {
              this.$$childTail.$$nextSibling = child;
              this.$$childTail = child;
            } else {
              this.$$childHead = this.$$childTail = child;
            }
            return child;
          },
          $watch: function (watchExp, listener, objectEquality) {
            var scope = this, get = compileToFn(watchExp, 'watch'), array = scope.$$watchers, watcher = {
                fn: listener,
                last: initWatchVal,
                get: get,
                exp: watchExp,
                eq: !!objectEquality
              };
            if (!isFunction(listener)) {
              var listenFn = compileToFn(listener || noop, 'listener');
              watcher.fn = function (newVal, oldVal, scope) {
                listenFn(scope);
              };
            }
            if (!array) {
              array = scope.$$watchers = [];
            }
            array.unshift(watcher);
            return function () {
              arrayRemove(array, watcher);
            };
          },
          $digest: function () {
            var watch, value, last, watchers, asyncQueue, length, dirty, ttl = TTL, next, current, target = this, watchLog = [], logIdx, logMsg;
            beginPhase('$digest');
            do {
              dirty = false;
              current = target;
              do {
                asyncQueue = current.$$asyncQueue;
                while (asyncQueue.length) {
                  try {
                    current.$eval(asyncQueue.shift());
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (watchers = current.$$watchers) {
                  length = watchers.length;
                  while (length--) {
                    try {
                      watch = watchers[length];
                      if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : typeof value == 'number' && typeof last == 'number' && isNaN(value) && isNaN(last))) {
                        dirty = true;
                        watch.last = watch.eq ? copy(value) : value;
                        watch.fn(value, last === initWatchVal ? value : last, current);
                        if (ttl < 5) {
                          logIdx = 4 - ttl;
                          if (!watchLog[logIdx])
                            watchLog[logIdx] = [];
                          logMsg = isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp;
                          logMsg += '; newVal: ' + toJson(value) + '; oldVal: ' + toJson(last);
                          watchLog[logIdx].push(logMsg);
                        }
                      }
                    } catch (e) {
                      $exceptionHandler(e);
                    }
                  }
                }
                if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                  while (current !== target && !(next = current.$$nextSibling)) {
                    current = current.$parent;
                  }
                }
              } while (current = next);
              if (dirty && !ttl--) {
                clearPhase();
                throw Error(TTL + ' $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: ' + toJson(watchLog));
              }
            } while (dirty || asyncQueue.length);
            clearPhase();
          },
          $destroy: function () {
            if ($rootScope == this || this.$$destroyed)
              return;
            var parent = this.$parent;
            this.$broadcast('$destroy');
            this.$$destroyed = true;
            if (parent.$$childHead == this)
              parent.$$childHead = this.$$nextSibling;
            if (parent.$$childTail == this)
              parent.$$childTail = this.$$prevSibling;
            if (this.$$prevSibling)
              this.$$prevSibling.$$nextSibling = this.$$nextSibling;
            if (this.$$nextSibling)
              this.$$nextSibling.$$prevSibling = this.$$prevSibling;
            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          },
          $eval: function (expr, locals) {
            return $parse(expr)(this, locals);
          },
          $evalAsync: function (expr) {
            this.$$asyncQueue.push(expr);
          },
          $apply: function (expr) {
            try {
              beginPhase('$apply');
              return this.$eval(expr);
            } catch (e) {
              $exceptionHandler(e);
            } finally {
              clearPhase();
              try {
                $rootScope.$digest();
              } catch (e) {
                $exceptionHandler(e);
                throw e;
              }
            }
          },
          $on: function (name, listener) {
            var namedListeners = this.$$listeners[name];
            if (!namedListeners) {
              this.$$listeners[name] = namedListeners = [];
            }
            namedListeners.push(listener);
            return function () {
              namedListeners[indexOf(namedListeners, listener)] = null;
            };
          },
          $emit: function (name, args) {
            var empty = [], namedListeners, scope = this, stopPropagation = false, event = {
                name: name,
                targetScope: scope,
                stopPropagation: function () {
                  stopPropagation = true;
                },
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), i, length;
            do {
              namedListeners = scope.$$listeners[name] || empty;
              event.currentScope = scope;
              for (i = 0, length = namedListeners.length; i < length; i++) {
                if (!namedListeners[i]) {
                  namedListeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  namedListeners[i].apply(null, listenerArgs);
                  if (stopPropagation)
                    return event;
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              scope = scope.$parent;
            } while (scope);
            return event;
          },
          $broadcast: function (name, args) {
            var target = this, current = target, next = target, event = {
                name: name,
                targetScope: target,
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), listeners, i, length;
            do {
              current = next;
              event.currentScope = current;
              listeners = current.$$listeners[name] || [];
              for (i = 0, length = listeners.length; i < length; i++) {
                if (!listeners[i]) {
                  listeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  listeners[i].apply(null, listenerArgs);
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                while (current !== target && !(next = current.$$nextSibling)) {
                  current = current.$parent;
                }
              }
            } while (current = next);
            return event;
          }
        };
        var $rootScope = new Scope();
        return $rootScope;
        function beginPhase(phase) {
          if ($rootScope.$$phase) {
            throw Error($rootScope.$$phase + ' already in progress');
          }
          $rootScope.$$phase = phase;
        }
        function clearPhase() {
          $rootScope.$$phase = null;
        }
        function compileToFn(exp, name) {
          var fn = $parse(exp);
          assertArgFn(fn, name);
          return fn;
        }
        function initWatchVal() {
        }
      }
    ];
  }
  function $SnifferProvider() {
    this.$get = [
      '$window',
      function ($window) {
        var eventSupport = {}, android = int((/android (\d+)/.exec(lowercase($window.navigator.userAgent)) || [])[1]);
        return {
          history: !!($window.history && $window.history.pushState && !(android < 4)),
          hashchange: 'onhashchange' in $window && (!$window.document.documentMode || $window.document.documentMode > 7),
          hasEvent: function (event) {
            if (event == 'input' && msie == 9)
              return false;
            if (isUndefined(eventSupport[event])) {
              var divElm = $window.document.createElement('div');
              eventSupport[event] = 'on' + event in divElm;
            }
            return eventSupport[event];
          },
          csp: false
        };
      }
    ];
  }
  function $WindowProvider() {
    this.$get = valueFn(window);
  }
  function parseHeaders(headers) {
    var parsed = {}, key, val, i;
    if (!headers)
      return parsed;
    forEach(headers.split('\n'), function (line) {
      i = line.indexOf(':');
      key = lowercase(trim(line.substr(0, i)));
      val = trim(line.substr(i + 1));
      if (key) {
        if (parsed[key]) {
          parsed[key] += ', ' + val;
        } else {
          parsed[key] = val;
        }
      }
    });
    return parsed;
  }
  function headersGetter(headers) {
    var headersObj = isObject(headers) ? headers : undefined;
    return function (name) {
      if (!headersObj)
        headersObj = parseHeaders(headers);
      if (name) {
        return headersObj[lowercase(name)] || null;
      }
      return headersObj;
    };
  }
  function transformData(data, headers, fns) {
    if (isFunction(fns))
      return fns(data, headers);
    forEach(fns, function (fn) {
      data = fn(data, headers);
    });
    return data;
  }
  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
  function $HttpProvider() {
    var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/;
    var $config = this.defaults = {
        transformResponse: [function (data) {
            if (isString(data)) {
              data = data.replace(PROTECTION_PREFIX, '');
              if (JSON_START.test(data) && JSON_END.test(data))
                data = fromJson(data, true);
            }
            return data;
          }],
        transformRequest: [function (d) {
            return isObject(d) && !isFile(d) ? toJson(d) : d;
          }],
        headers: {
          common: {
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
          },
          post: { 'Content-Type': 'application/json;charset=utf-8' },
          put: { 'Content-Type': 'application/json;charset=utf-8' }
        }
      };
    var providerResponseInterceptors = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function ($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
        var defaultCache = $cacheFactory('$http'), responseInterceptors = [];
        forEach(providerResponseInterceptors, function (interceptor) {
          responseInterceptors.push(isString(interceptor) ? $injector.get(interceptor) : $injector.invoke(interceptor));
        });
        function $http(config) {
          config.method = uppercase(config.method);
          var reqTransformFn = config.transformRequest || $config.transformRequest, respTransformFn = config.transformResponse || $config.transformResponse, defHeaders = $config.headers, reqHeaders = extend({ 'X-XSRF-TOKEN': $browser.cookies()['XSRF-TOKEN'] }, defHeaders.common, defHeaders[lowercase(config.method)], config.headers), reqData = transformData(config.data, headersGetter(reqHeaders), reqTransformFn), promise;
          if (isUndefined(config.data)) {
            delete reqHeaders['Content-Type'];
          }
          promise = sendReq(config, reqData, reqHeaders);
          promise = promise.then(transformResponse, transformResponse);
          forEach(responseInterceptors, function (interceptor) {
            promise = interceptor(promise);
          });
          promise.success = function (fn) {
            promise.then(function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          promise.error = function (fn) {
            promise.then(null, function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          return promise;
          function transformResponse(response) {
            var resp = extend({}, response, { data: transformData(response.data, response.headers, respTransformFn) });
            return isSuccess(response.status) ? resp : $q.reject(resp);
          }
        }
        $http.pendingRequests = [];
        createShortMethods('get', 'delete', 'head', 'jsonp');
        createShortMethodsWithData('post', 'put');
        $http.defaults = $config;
        return $http;
        function createShortMethods(names) {
          forEach(arguments, function (name) {
            $http[name] = function (url, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url
              }));
            };
          });
        }
        function createShortMethodsWithData(name) {
          forEach(arguments, function (name) {
            $http[name] = function (url, data, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url,
                data: data
              }));
            };
          });
        }
        function sendReq(config, reqData, reqHeaders) {
          var deferred = $q.defer(), promise = deferred.promise, cache, cachedResp, url = buildUrl(config.url, config.params);
          $http.pendingRequests.push(config);
          promise.then(removePendingReq, removePendingReq);
          if (config.cache && config.method == 'GET') {
            cache = isObject(config.cache) ? config.cache : defaultCache;
          }
          if (cache) {
            cachedResp = cache.get(url);
            if (cachedResp) {
              if (cachedResp.then) {
                cachedResp.then(removePendingReq, removePendingReq);
                return cachedResp;
              } else {
                if (isArray(cachedResp)) {
                  resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]));
                } else {
                  resolvePromise(cachedResp, 200, {});
                }
              }
            } else {
              cache.put(url, promise);
            }
          }
          if (!cachedResp) {
            $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials);
          }
          return promise;
          function done(status, response, headersString) {
            if (cache) {
              if (isSuccess(status)) {
                cache.put(url, [
                  status,
                  response,
                  parseHeaders(headersString)
                ]);
              } else {
                cache.remove(url);
              }
            }
            resolvePromise(response, status, headersString);
            $rootScope.$apply();
          }
          function resolvePromise(response, status, headers) {
            status = Math.max(status, 0);
            (isSuccess(status) ? deferred.resolve : deferred.reject)({
              data: response,
              status: status,
              headers: headersGetter(headers),
              config: config
            });
          }
          function removePendingReq() {
            var idx = indexOf($http.pendingRequests, config);
            if (idx !== -1)
              $http.pendingRequests.splice(idx, 1);
          }
        }
        function buildUrl(url, params) {
          if (!params)
            return url;
          var parts = [];
          forEachSorted(params, function (value, key) {
            if (value == null || value == undefined)
              return;
            if (isObject(value)) {
              value = toJson(value);
            }
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          });
          return url + (url.indexOf('?') == -1 ? '?' : '&') + parts.join('&');
        }
      }
    ];
  }
  var XHR = window.XMLHttpRequest || function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e1) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e2) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e3) {
      }
      throw new Error('This browser does not support XMLHttpRequest.');
    };
  function $HttpBackendProvider() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function ($browser, $window, $document) {
        return createHttpBackend($browser, XHR, $browser.defer, $window.angular.callbacks, $document[0], $window.location.protocol.replace(':', ''));
      }
    ];
  }
  function createHttpBackend($browser, XHR, $browserDefer, callbacks, rawDocument, locationProtocol) {
    return function (method, url, post, callback, headers, timeout, withCredentials) {
      $browser.$$incOutstandingRequestCount();
      url = url || $browser.url();
      if (lowercase(method) == 'jsonp') {
        var callbackId = '_' + (callbacks.counter++).toString(36);
        callbacks[callbackId] = function (data) {
          callbacks[callbackId].data = data;
        };
        jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), function () {
          if (callbacks[callbackId].data) {
            completeRequest(callback, 200, callbacks[callbackId].data);
          } else {
            completeRequest(callback, -2);
          }
          delete callbacks[callbackId];
        });
      } else {
        var xhr = new XHR();
        xhr.open(method, url, true);
        forEach(headers, function (value, key) {
          if (value)
            xhr.setRequestHeader(key, value);
        });
        var status;
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            var responseHeaders = xhr.getAllResponseHeaders();
            var value, simpleHeaders = [
                'Cache-Control',
                'Content-Language',
                'Content-Type',
                'Expires',
                'Last-Modified',
                'Pragma'
              ];
            if (!responseHeaders) {
              responseHeaders = '';
              forEach(simpleHeaders, function (header) {
                var value = xhr.getResponseHeader(header);
                if (value) {
                  responseHeaders += header + ': ' + value + '\n';
                }
              });
            }
            completeRequest(callback, status || xhr.status, xhr.responseText, responseHeaders);
          }
        };
        if (withCredentials) {
          xhr.withCredentials = true;
        }
        xhr.send(post || '');
        if (timeout > 0) {
          $browserDefer(function () {
            status = -1;
            xhr.abort();
          }, timeout);
        }
      }
      function completeRequest(callback, status, response, headersString) {
        var protocol = (url.match(URL_MATCH) || [
            '',
            locationProtocol
          ])[1];
        status = protocol == 'file' ? response ? 200 : 404 : status;
        status = status == 1223 ? 204 : status;
        callback(status, response, headersString);
        $browser.$$completeOutstandingRequest(noop);
      }
    };
    function jsonpReq(url, done) {
      var script = rawDocument.createElement('script'), doneWrapper = function () {
          rawDocument.body.removeChild(script);
          if (done)
            done();
        };
      script.type = 'text/javascript';
      script.src = url;
      if (msie) {
        script.onreadystatechange = function () {
          if (/loaded|complete/.test(script.readyState))
            doneWrapper();
        };
      } else {
        script.onload = script.onerror = doneWrapper;
      }
      rawDocument.body.appendChild(script);
    }
  }
  function $LocaleProvider() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          short: 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (num) {
          if (num === 1) {
            return 'one';
          }
          return 'other';
        }
      };
    };
  }
  function $TimeoutProvider() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function ($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {};
        function timeout(fn, delay, invokeApply) {
          var deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply, timeoutId, cleanup;
          timeoutId = $browser.defer(function () {
            try {
              deferred.resolve(fn());
            } catch (e) {
              deferred.reject(e);
              $exceptionHandler(e);
            }
            if (!skipApply)
              $rootScope.$apply();
          }, delay);
          cleanup = function () {
            delete deferreds[promise.$$timeoutId];
          };
          promise.$$timeoutId = timeoutId;
          deferreds[timeoutId] = deferred;
          promise.then(cleanup, cleanup);
          return promise;
        }
        timeout.cancel = function (promise) {
          if (promise && promise.$$timeoutId in deferreds) {
            deferreds[promise.$$timeoutId].reject('canceled');
            return $browser.defer.cancel(promise.$$timeoutId);
          }
          return false;
        };
        return timeout;
      }
    ];
  }
  $FilterProvider.$inject = ['$provide'];
  function $FilterProvider($provide) {
    var suffix = 'Filter';
    function register(name, factory) {
      return $provide.factory(name + suffix, factory);
    }
    this.register = register;
    this.$get = [
      '$injector',
      function ($injector) {
        return function (name) {
          return $injector.get(name + suffix);
        };
      }
    ];
    register('currency', currencyFilter);
    register('date', dateFilter);
    register('filter', filterFilter);
    register('json', jsonFilter);
    register('limitTo', limitToFilter);
    register('lowercase', lowercaseFilter);
    register('number', numberFilter);
    register('orderBy', orderByFilter);
    register('uppercase', uppercaseFilter);
  }
  function filterFilter() {
    return function (array, expression) {
      if (!isArray(array))
        return array;
      var predicates = [];
      predicates.check = function (value) {
        for (var j = 0; j < predicates.length; j++) {
          if (!predicates[j](value)) {
            return false;
          }
        }
        return true;
      };
      var search = function (obj, text) {
        if (text.charAt(0) === '!') {
          return !search(obj, text.substr(1));
        }
        switch (typeof obj) {
        case 'boolean':
        case 'number':
        case 'string':
          return ('' + obj).toLowerCase().indexOf(text) > -1;
        case 'object':
          for (var objKey in obj) {
            if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
              return true;
            }
          }
          return false;
        case 'array':
          for (var i = 0; i < obj.length; i++) {
            if (search(obj[i], text)) {
              return true;
            }
          }
          return false;
        default:
          return false;
        }
      };
      switch (typeof expression) {
      case 'boolean':
      case 'number':
      case 'string':
        expression = { $: expression };
      case 'object':
        for (var key in expression) {
          if (key == '$') {
            (function () {
              var text = ('' + expression[key]).toLowerCase();
              if (!text)
                return;
              predicates.push(function (value) {
                return search(value, text);
              });
            }());
          } else {
            (function () {
              var path = key;
              var text = ('' + expression[key]).toLowerCase();
              if (!text)
                return;
              predicates.push(function (value) {
                return search(getter(value, path), text);
              });
            }());
          }
        }
        break;
      case 'function':
        predicates.push(expression);
        break;
      default:
        return array;
      }
      var filtered = [];
      for (var j = 0; j < array.length; j++) {
        var value = array[j];
        if (predicates.check(value)) {
          filtered.push(value);
        }
      }
      return filtered;
    };
  }
  currencyFilter.$inject = ['$locale'];
  function currencyFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (amount, currencySymbol) {
      if (isUndefined(currencySymbol))
        currencySymbol = formats.CURRENCY_SYM;
      return formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
    };
  }
  numberFilter.$inject = ['$locale'];
  function numberFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (number, fractionSize) {
      return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
    };
  }
  var DECIMAL_SEP = '.';
  function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
    if (isNaN(number) || !isFinite(number))
      return '';
    var isNegative = number < 0;
    number = Math.abs(number);
    var numStr = number + '', formatedText = '', parts = [];
    var hasExponent = false;
    if (numStr.indexOf('e') !== -1) {
      var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
      if (match && match[2] == '-' && match[3] > fractionSize + 1) {
        numStr = '0';
      } else {
        formatedText = numStr;
        hasExponent = true;
      }
    }
    if (!hasExponent) {
      var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;
      if (isUndefined(fractionSize)) {
        fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
      }
      var pow = Math.pow(10, fractionSize);
      number = Math.round(number * pow) / pow;
      var fraction = ('' + number).split(DECIMAL_SEP);
      var whole = fraction[0];
      fraction = fraction[1] || '';
      var pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
      if (whole.length >= lgroup + group) {
        pos = whole.length - lgroup;
        for (var i = 0; i < pos; i++) {
          if ((pos - i) % group === 0 && i !== 0) {
            formatedText += groupSep;
          }
          formatedText += whole.charAt(i);
        }
      }
      for (i = pos; i < whole.length; i++) {
        if ((whole.length - i) % lgroup === 0 && i !== 0) {
          formatedText += groupSep;
        }
        formatedText += whole.charAt(i);
      }
      while (fraction.length < fractionSize) {
        fraction += '0';
      }
      if (fractionSize && fractionSize !== '0')
        formatedText += decimalSep + fraction.substr(0, fractionSize);
    }
    parts.push(isNegative ? pattern.negPre : pattern.posPre);
    parts.push(formatedText);
    parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
    return parts.join('');
  }
  function padNumber(num, digits, trim) {
    var neg = '';
    if (num < 0) {
      neg = '-';
      num = -num;
    }
    num = '' + num;
    while (num.length < digits)
      num = '0' + num;
    if (trim)
      num = num.substr(num.length - digits);
    return neg + num;
  }
  function dateGetter(name, size, offset, trim) {
    offset = offset || 0;
    return function (date) {
      var value = date['get' + name]();
      if (offset > 0 || value > -offset)
        value += offset;
      if (value === 0 && offset == -12)
        value = 12;
      return padNumber(value, size, trim);
    };
  }
  function dateStrGetter(name, shortForm) {
    return function (date, formats) {
      var value = date['get' + name]();
      var get = uppercase(shortForm ? 'SHORT' + name : name);
      return formats[get][value];
    };
  }
  function timeZoneGetter(date) {
    var zone = -1 * date.getTimezoneOffset();
    var paddedZone = zone >= 0 ? '+' : '';
    paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    return paddedZone;
  }
  function ampmGetter(date, formats) {
    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
  }
  var DATE_FORMATS = {
      yyyy: dateGetter('FullYear', 4),
      yy: dateGetter('FullYear', 2, 0, true),
      y: dateGetter('FullYear', 1),
      MMMM: dateStrGetter('Month'),
      MMM: dateStrGetter('Month', true),
      MM: dateGetter('Month', 2, 1),
      M: dateGetter('Month', 1, 1),
      dd: dateGetter('Date', 2),
      d: dateGetter('Date', 1),
      HH: dateGetter('Hours', 2),
      H: dateGetter('Hours', 1),
      hh: dateGetter('Hours', 2, -12),
      h: dateGetter('Hours', 1, -12),
      mm: dateGetter('Minutes', 2),
      m: dateGetter('Minutes', 1),
      ss: dateGetter('Seconds', 2),
      s: dateGetter('Seconds', 1),
      EEEE: dateStrGetter('Day'),
      EEE: dateStrGetter('Day', true),
      a: ampmGetter,
      Z: timeZoneGetter
    };
  var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\d+$/;
  dateFilter.$inject = ['$locale'];
  function dateFilter($locale) {
    var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    function jsonStringToDate(string) {
      var match;
      if (match = string.match(R_ISO8601_STR)) {
        var date = new Date(0), tzHour = 0, tzMin = 0;
        if (match[9]) {
          tzHour = int(match[9] + match[10]);
          tzMin = int(match[9] + match[11]);
        }
        date.setUTCFullYear(int(match[1]), int(match[2]) - 1, int(match[3]));
        date.setUTCHours(int(match[4] || 0) - tzHour, int(match[5] || 0) - tzMin, int(match[6] || 0), int(match[7] || 0));
        return date;
      }
      return string;
    }
    return function (date, format) {
      var text = '', parts = [], fn, match;
      format = format || 'mediumDate';
      format = $locale.DATETIME_FORMATS[format] || format;
      if (isString(date)) {
        if (NUMBER_STRING.test(date)) {
          date = int(date);
        } else {
          date = jsonStringToDate(date);
        }
      }
      if (isNumber(date)) {
        date = new Date(date);
      }
      if (!isDate(date)) {
        return date;
      }
      while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
          parts = concat(parts, match, 1);
          format = parts.pop();
        } else {
          parts.push(format);
          format = null;
        }
      }
      forEach(parts, function (value) {
        fn = DATE_FORMATS[value];
        text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return text;
    };
  }
  function jsonFilter() {
    return function (object) {
      return toJson(object, true);
    };
  }
  var lowercaseFilter = valueFn(lowercase);
  var uppercaseFilter = valueFn(uppercase);
  function limitToFilter() {
    return function (array, limit) {
      if (!(array instanceof Array))
        return array;
      limit = int(limit);
      var out = [], i, n;
      if (!array || !(array instanceof Array))
        return out;
      if (limit > array.length)
        limit = array.length;
      else if (limit < -array.length)
        limit = -array.length;
      if (limit > 0) {
        i = 0;
        n = limit;
      } else {
        i = array.length + limit;
        n = array.length;
      }
      for (; i < n; i++) {
        out.push(array[i]);
      }
      return out;
    };
  }
  orderByFilter.$inject = ['$parse'];
  function orderByFilter($parse) {
    return function (array, sortPredicate, reverseOrder) {
      if (!isArray(array))
        return array;
      if (!sortPredicate)
        return array;
      sortPredicate = isArray(sortPredicate) ? sortPredicate : [sortPredicate];
      sortPredicate = map(sortPredicate, function (predicate) {
        var descending = false, get = predicate || identity;
        if (isString(predicate)) {
          if (predicate.charAt(0) == '+' || predicate.charAt(0) == '-') {
            descending = predicate.charAt(0) == '-';
            predicate = predicate.substring(1);
          }
          get = $parse(predicate);
        }
        return reverseComparator(function (a, b) {
          return compare(get(a), get(b));
        }, descending);
      });
      var arrayCopy = [];
      for (var i = 0; i < array.length; i++) {
        arrayCopy.push(array[i]);
      }
      return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
      function comparator(o1, o2) {
        for (var i = 0; i < sortPredicate.length; i++) {
          var comp = sortPredicate[i](o1, o2);
          if (comp !== 0)
            return comp;
        }
        return 0;
      }
      function reverseComparator(comp, descending) {
        return toBoolean(descending) ? function (a, b) {
          return comp(b, a);
        } : comp;
      }
      function compare(v1, v2) {
        var t1 = typeof v1;
        var t2 = typeof v2;
        if (t1 == t2) {
          if (t1 == 'string')
            v1 = v1.toLowerCase();
          if (t1 == 'string')
            v2 = v2.toLowerCase();
          if (v1 === v2)
            return 0;
          return v1 < v2 ? -1 : 1;
        } else {
          return t1 < t2 ? -1 : 1;
        }
      }
    };
  }
  function ngDirective(directive) {
    if (isFunction(directive)) {
      directive = { link: directive };
    }
    directive.restrict = directive.restrict || 'AC';
    return valueFn(directive);
  }
  var htmlAnchorDirective = valueFn({
      restrict: 'E',
      compile: function (element, attr) {
        if (msie <= 8) {
          if (!attr.href && !attr.name) {
            attr.$set('href', '');
          }
          element.append(document.createComment('IE fix'));
        }
        return function (scope, element) {
          element.bind('click', function (event) {
            if (!element.attr('href')) {
              event.preventDefault();
            }
          });
        };
      }
    });
  var ngAttributeAliasDirectives = {};
  forEach(BOOLEAN_ATTR, function (propName, attrName) {
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 100,
        compile: function () {
          return function (scope, element, attr) {
            scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
              attr.$set(attrName, !!value);
            });
          };
        }
      };
    };
  });
  forEach([
    'src',
    'href'
  ], function (attrName) {
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 99,
        link: function (scope, element, attr) {
          attr.$observe(normalized, function (value) {
            if (!value)
              return;
            attr.$set(attrName, value);
            if (msie)
              element.prop(attrName, attr[attrName]);
          });
        }
      };
    };
  });
  var nullFormCtrl = {
      $addControl: noop,
      $removeControl: noop,
      $setValidity: noop,
      $setDirty: noop
    };
  FormController.$inject = [
    '$element',
    '$attrs',
    '$scope'
  ];
  function FormController(element, attrs) {
    var form = this, parentForm = element.parent().controller('form') || nullFormCtrl, invalidCount = 0, errors = form.$error = {};
    form.$name = attrs.name;
    form.$dirty = false;
    form.$pristine = true;
    form.$valid = true;
    form.$invalid = false;
    parentForm.$addControl(form);
    element.addClass(PRISTINE_CLASS);
    toggleValidCss(true);
    function toggleValidCss(isValid, validationErrorKey) {
      validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
      element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
    }
    form.$addControl = function (control) {
      if (control.$name && !form.hasOwnProperty(control.$name)) {
        form[control.$name] = control;
      }
    };
    form.$removeControl = function (control) {
      if (control.$name && form[control.$name] === control) {
        delete form[control.$name];
      }
      forEach(errors, function (queue, validationToken) {
        form.$setValidity(validationToken, true, control);
      });
    };
    form.$setValidity = function (validationToken, isValid, control) {
      var queue = errors[validationToken];
      if (isValid) {
        if (queue) {
          arrayRemove(queue, control);
          if (!queue.length) {
            invalidCount--;
            if (!invalidCount) {
              toggleValidCss(isValid);
              form.$valid = true;
              form.$invalid = false;
            }
            errors[validationToken] = false;
            toggleValidCss(true, validationToken);
            parentForm.$setValidity(validationToken, true, form);
          }
        }
      } else {
        if (!invalidCount) {
          toggleValidCss(isValid);
        }
        if (queue) {
          if (includes(queue, control))
            return;
        } else {
          errors[validationToken] = queue = [];
          invalidCount++;
          toggleValidCss(false, validationToken);
          parentForm.$setValidity(validationToken, false, form);
        }
        queue.push(control);
        form.$valid = false;
        form.$invalid = true;
      }
    };
    form.$setDirty = function () {
      element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
      form.$dirty = true;
      form.$pristine = false;
      parentForm.$setDirty();
    };
  }
  var formDirectiveFactory = function (isNgForm) {
    return [
      '$timeout',
      function ($timeout) {
        var formDirective = {
            name: 'form',
            restrict: 'E',
            controller: FormController,
            compile: function () {
              return {
                pre: function (scope, formElement, attr, controller) {
                  if (!attr.action) {
                    var preventDefaultListener = function (event) {
                      event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    };
                    addEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                    formElement.bind('$destroy', function () {
                      $timeout(function () {
                        removeEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = formElement.parent().controller('form'), alias = attr.name || attr.ngForm;
                  if (alias) {
                    scope[alias] = controller;
                  }
                  if (parentFormCtrl) {
                    formElement.bind('$destroy', function () {
                      parentFormCtrl.$removeControl(controller);
                      if (alias) {
                        scope[alias] = undefined;
                      }
                      extend(controller, nullFormCtrl);
                    });
                  }
                }
              };
            }
          };
        return isNgForm ? extend(copy(formDirective), { restrict: 'EAC' }) : formDirective;
      }
    ];
  };
  var formDirective = formDirectiveFactory();
  var ngFormDirective = formDirectiveFactory(true);
  var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
  var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
  var inputType = {
      'text': textInputType,
      'number': numberInputType,
      'url': urlInputType,
      'email': emailInputType,
      'radio': radioInputType,
      'checkbox': checkboxInputType,
      'hidden': noop,
      'button': noop,
      'submit': noop,
      'reset': noop
    };
  function isEmpty(value) {
    return isUndefined(value) || value === '' || value === null || value !== value;
  }
  function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    var listener = function () {
      var value = trim(element.val());
      if (ctrl.$viewValue !== value) {
        scope.$apply(function () {
          ctrl.$setViewValue(value);
        });
      }
    };
    if ($sniffer.hasEvent('input')) {
      element.bind('input', listener);
    } else {
      var timeout;
      var deferListener = function () {
        if (!timeout) {
          timeout = $browser.defer(function () {
            listener();
            timeout = null;
          });
        }
      };
      element.bind('keydown', function (event) {
        var key = event.keyCode;
        if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40)
          return;
        deferListener();
      });
      element.bind('change', listener);
      if ($sniffer.hasEvent('paste')) {
        element.bind('paste cut', deferListener);
      }
    }
    ctrl.$render = function () {
      element.val(isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
    };
    var pattern = attr.ngPattern, patternValidator;
    var validate = function (regexp, value) {
      if (isEmpty(value) || regexp.test(value)) {
        ctrl.$setValidity('pattern', true);
        return value;
      } else {
        ctrl.$setValidity('pattern', false);
        return undefined;
      }
    };
    if (pattern) {
      if (pattern.match(/^\/(.*)\/$/)) {
        pattern = new RegExp(pattern.substr(1, pattern.length - 2));
        patternValidator = function (value) {
          return validate(pattern, value);
        };
      } else {
        patternValidator = function (value) {
          var patternObj = scope.$eval(pattern);
          if (!patternObj || !patternObj.test) {
            throw new Error('Expected ' + pattern + ' to be a RegExp but was ' + patternObj);
          }
          return validate(patternObj, value);
        };
      }
      ctrl.$formatters.push(patternValidator);
      ctrl.$parsers.push(patternValidator);
    }
    if (attr.ngMinlength) {
      var minlength = int(attr.ngMinlength);
      var minLengthValidator = function (value) {
        if (!isEmpty(value) && value.length < minlength) {
          ctrl.$setValidity('minlength', false);
          return undefined;
        } else {
          ctrl.$setValidity('minlength', true);
          return value;
        }
      };
      ctrl.$parsers.push(minLengthValidator);
      ctrl.$formatters.push(minLengthValidator);
    }
    if (attr.ngMaxlength) {
      var maxlength = int(attr.ngMaxlength);
      var maxLengthValidator = function (value) {
        if (!isEmpty(value) && value.length > maxlength) {
          ctrl.$setValidity('maxlength', false);
          return undefined;
        } else {
          ctrl.$setValidity('maxlength', true);
          return value;
        }
      };
      ctrl.$parsers.push(maxLengthValidator);
      ctrl.$formatters.push(maxLengthValidator);
    }
  }
  function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    ctrl.$parsers.push(function (value) {
      var empty = isEmpty(value);
      if (empty || NUMBER_REGEXP.test(value)) {
        ctrl.$setValidity('number', true);
        return value === '' ? null : empty ? value : parseFloat(value);
      } else {
        ctrl.$setValidity('number', false);
        return undefined;
      }
    });
    ctrl.$formatters.push(function (value) {
      return isEmpty(value) ? '' : '' + value;
    });
    if (attr.min) {
      var min = parseFloat(attr.min);
      var minValidator = function (value) {
        if (!isEmpty(value) && value < min) {
          ctrl.$setValidity('min', false);
          return undefined;
        } else {
          ctrl.$setValidity('min', true);
          return value;
        }
      };
      ctrl.$parsers.push(minValidator);
      ctrl.$formatters.push(minValidator);
    }
    if (attr.max) {
      var max = parseFloat(attr.max);
      var maxValidator = function (value) {
        if (!isEmpty(value) && value > max) {
          ctrl.$setValidity('max', false);
          return undefined;
        } else {
          ctrl.$setValidity('max', true);
          return value;
        }
      };
      ctrl.$parsers.push(maxValidator);
      ctrl.$formatters.push(maxValidator);
    }
    ctrl.$formatters.push(function (value) {
      if (isEmpty(value) || isNumber(value)) {
        ctrl.$setValidity('number', true);
        return value;
      } else {
        ctrl.$setValidity('number', false);
        return undefined;
      }
    });
  }
  function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var urlValidator = function (value) {
      if (isEmpty(value) || URL_REGEXP.test(value)) {
        ctrl.$setValidity('url', true);
        return value;
      } else {
        ctrl.$setValidity('url', false);
        return undefined;
      }
    };
    ctrl.$formatters.push(urlValidator);
    ctrl.$parsers.push(urlValidator);
  }
  function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var emailValidator = function (value) {
      if (isEmpty(value) || EMAIL_REGEXP.test(value)) {
        ctrl.$setValidity('email', true);
        return value;
      } else {
        ctrl.$setValidity('email', false);
        return undefined;
      }
    };
    ctrl.$formatters.push(emailValidator);
    ctrl.$parsers.push(emailValidator);
  }
  function radioInputType(scope, element, attr, ctrl) {
    if (isUndefined(attr.name)) {
      element.attr('name', nextUid());
    }
    element.bind('click', function () {
      if (element[0].checked) {
        scope.$apply(function () {
          ctrl.$setViewValue(attr.value);
        });
      }
    });
    ctrl.$render = function () {
      var value = attr.value;
      element[0].checked = value == ctrl.$viewValue;
    };
    attr.$observe('value', ctrl.$render);
  }
  function checkboxInputType(scope, element, attr, ctrl) {
    var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
    if (!isString(trueValue))
      trueValue = true;
    if (!isString(falseValue))
      falseValue = false;
    element.bind('click', function () {
      scope.$apply(function () {
        ctrl.$setViewValue(element[0].checked);
      });
    });
    ctrl.$render = function () {
      element[0].checked = ctrl.$viewValue;
    };
    ctrl.$formatters.push(function (value) {
      return value === trueValue;
    });
    ctrl.$parsers.push(function (value) {
      return value ? trueValue : falseValue;
    });
  }
  var inputDirective = [
      '$browser',
      '$sniffer',
      function ($browser, $sniffer) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (scope, element, attr, ctrl) {
            if (ctrl) {
              (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
          }
        };
      }
    ];
  var VALID_CLASS = 'ng-valid', INVALID_CLASS = 'ng-invalid', PRISTINE_CLASS = 'ng-pristine', DIRTY_CLASS = 'ng-dirty';
  var NgModelController = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      function ($scope, $exceptionHandler, $attr, $element, $parse) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) {
          throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + $attr.ngModel + ' (' + startingTag($element) + ')');
        }
        this.$render = noop;
        var parentForm = $element.inheritedData('$formController') || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS);
        toggleValidCss(true);
        function toggleValidCss(isValid, validationErrorKey) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          $element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$setValidity = function (validationErrorKey, isValid) {
          if ($error[validationErrorKey] === !isValid)
            return;
          if (isValid) {
            if ($error[validationErrorKey])
              invalidCount--;
            if (!invalidCount) {
              toggleValidCss(true);
              this.$valid = true;
              this.$invalid = false;
            }
          } else {
            toggleValidCss(false);
            this.$invalid = true;
            this.$valid = false;
            invalidCount++;
          }
          $error[validationErrorKey] = !isValid;
          toggleValidCss(isValid, validationErrorKey);
          parentForm.$setValidity(validationErrorKey, isValid, this);
        };
        this.$setViewValue = function (value) {
          this.$viewValue = value;
          if (this.$pristine) {
            this.$dirty = true;
            this.$pristine = false;
            $element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
            parentForm.$setDirty();
          }
          forEach(this.$parsers, function (fn) {
            value = fn(value);
          });
          if (this.$modelValue !== value) {
            this.$modelValue = value;
            ngModelSet($scope, value);
            forEach(this.$viewChangeListeners, function (listener) {
              try {
                listener();
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          }
        };
        var ctrl = this;
        $scope.$watch(function ngModelWatch() {
          var value = ngModelGet($scope);
          if (ctrl.$modelValue !== value) {
            var formatters = ctrl.$formatters, idx = formatters.length;
            ctrl.$modelValue = value;
            while (idx--) {
              value = formatters[idx](value);
            }
            if (ctrl.$viewValue !== value) {
              ctrl.$viewValue = value;
              ctrl.$render();
            }
          }
        });
      }
    ];
  var ngModelDirective = function () {
    return {
      require: [
        'ngModel',
        '^?form'
      ],
      controller: NgModelController,
      link: function (scope, element, attr, ctrls) {
        var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
        formCtrl.$addControl(modelCtrl);
        element.bind('$destroy', function () {
          formCtrl.$removeControl(modelCtrl);
        });
      }
    };
  };
  var ngChangeDirective = valueFn({
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        ctrl.$viewChangeListeners.push(function () {
          scope.$eval(attr.ngChange);
        });
      }
    });
  var requiredDirective = function () {
    return {
      require: '?ngModel',
      link: function (scope, elm, attr, ctrl) {
        if (!ctrl)
          return;
        attr.required = true;
        var validator = function (value) {
          if (attr.required && (isEmpty(value) || value === false)) {
            ctrl.$setValidity('required', false);
            return;
          } else {
            ctrl.$setValidity('required', true);
            return value;
          }
        };
        ctrl.$formatters.push(validator);
        ctrl.$parsers.unshift(validator);
        attr.$observe('required', function () {
          validator(ctrl.$viewValue);
        });
      }
    };
  };
  var ngListDirective = function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ',';
        var parse = function (viewValue) {
          var list = [];
          if (viewValue) {
            forEach(viewValue.split(separator), function (value) {
              if (value)
                list.push(trim(value));
            });
          }
          return list;
        };
        ctrl.$parsers.push(parse);
        ctrl.$formatters.push(function (value) {
          if (isArray(value)) {
            return value.join(', ');
          }
          return undefined;
        });
      }
    };
  };
  var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
  var ngValueDirective = function () {
    return {
      priority: 100,
      compile: function (tpl, tplAttr) {
        if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
          return function (scope, elm, attr) {
            attr.$set('value', scope.$eval(attr.ngValue));
          };
        } else {
          return function (scope, elm, attr) {
            scope.$watch(attr.ngValue, function valueWatchAction(value) {
              attr.$set('value', value, false);
            });
          };
        }
      }
    };
  };
  var ngBindDirective = ngDirective(function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.ngBind);
      scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
        element.text(value == undefined ? '' : value);
      });
    });
  var ngBindTemplateDirective = [
      '$interpolate',
      function ($interpolate) {
        return function (scope, element, attr) {
          var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
          element.addClass('ng-binding').data('$binding', interpolateFn);
          attr.$observe('ngBindTemplate', function (value) {
            element.text(value);
          });
        };
      }
    ];
  var ngBindHtmlUnsafeDirective = [function () {
        return function (scope, element, attr) {
          element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
          scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
          });
        };
      }];
  function classDirective(name, selector) {
    name = 'ngClass' + name;
    return ngDirective(function (scope, element, attr) {
      var oldVal = undefined;
      scope.$watch(attr[name], ngClassWatchAction, true);
      attr.$observe('class', function (value) {
        var ngClass = scope.$eval(attr[name]);
        ngClassWatchAction(ngClass, ngClass);
      });
      if (name !== 'ngClass') {
        scope.$watch('$index', function ($index, old$index) {
          var mod = $index & 1;
          if (mod !== old$index & 1) {
            if (mod === selector) {
              addClass(scope.$eval(attr[name]));
            } else {
              removeClass(scope.$eval(attr[name]));
            }
          }
        });
      }
      function ngClassWatchAction(newVal) {
        if (selector === true || scope.$index % 2 === selector) {
          if (oldVal && !equals(newVal, oldVal)) {
            removeClass(oldVal);
          }
          addClass(newVal);
        }
        oldVal = copy(newVal);
      }
      function removeClass(classVal) {
        if (isObject(classVal) && !isArray(classVal)) {
          classVal = map(classVal, function (v, k) {
            if (v)
              return k;
          });
        }
        element.removeClass(isArray(classVal) ? classVal.join(' ') : classVal);
      }
      function addClass(classVal) {
        if (isObject(classVal) && !isArray(classVal)) {
          classVal = map(classVal, function (v, k) {
            if (v)
              return k;
          });
        }
        if (classVal) {
          element.addClass(isArray(classVal) ? classVal.join(' ') : classVal);
        }
      }
    });
  }
  var ngClassDirective = classDirective('', true);
  var ngClassOddDirective = classDirective('Odd', 0);
  var ngClassEvenDirective = classDirective('Even', 1);
  var ngCloakDirective = ngDirective({
      compile: function (element, attr) {
        attr.$set('ngCloak', undefined);
        element.removeClass('ng-cloak');
      }
    });
  var ngControllerDirective = [function () {
        return {
          scope: true,
          controller: '@'
        };
      }];
  var ngCspDirective = [
      '$sniffer',
      function ($sniffer) {
        return {
          priority: 1000,
          compile: function () {
            $sniffer.csp = true;
          }
        };
      }
    ];
  var ngEventDirectives = {};
  forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave'.split(' '), function (name) {
    var directiveName = directiveNormalize('ng-' + name);
    ngEventDirectives[directiveName] = [
      '$parse',
      function ($parse) {
        return function (scope, element, attr) {
          var fn = $parse(attr[directiveName]);
          element.bind(lowercase(name), function (event) {
            scope.$apply(function () {
              fn(scope, { $event: event });
            });
          });
        };
      }
    ];
  });
  var ngSubmitDirective = ngDirective(function (scope, element, attrs) {
      element.bind('submit', function () {
        scope.$apply(attrs.ngSubmit);
      });
    });
  var ngIncludeDirective = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$compile',
      function ($http, $templateCache, $anchorScroll, $compile) {
        return {
          restrict: 'ECA',
          terminal: true,
          compile: function (element, attr) {
            var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || '', autoScrollExp = attr.autoscroll;
            return function (scope, element) {
              var changeCounter = 0, childScope;
              var clearContent = function () {
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                element.html('');
              };
              scope.$watch(srcExp, function ngIncludeWatchAction(src) {
                var thisChangeId = ++changeCounter;
                if (src) {
                  $http.get(src, { cache: $templateCache }).success(function (response) {
                    if (thisChangeId !== changeCounter)
                      return;
                    if (childScope)
                      childScope.$destroy();
                    childScope = scope.$new();
                    element.html(response);
                    $compile(element.contents())(childScope);
                    if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                      $anchorScroll();
                    }
                    childScope.$emit('$includeContentLoaded');
                    scope.$eval(onloadExp);
                  }).error(function () {
                    if (thisChangeId === changeCounter)
                      clearContent();
                  });
                } else
                  clearContent();
              });
            };
          }
        };
      }
    ];
  var ngInitDirective = ngDirective({
      compile: function () {
        return {
          pre: function (scope, element, attrs) {
            scope.$eval(attrs.ngInit);
          }
        };
      }
    });
  var ngNonBindableDirective = ngDirective({
      terminal: true,
      priority: 1000
    });
  var ngPluralizeDirective = [
      '$locale',
      '$interpolate',
      function ($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
          restrict: 'EA',
          link: function (scope, element, attr) {
            var numberExp = attr.count, whenExp = element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp), whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol();
            forEach(whens, function (expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
            });
            scope.$watch(function ngPluralizeWatch() {
              var value = parseFloat(scope.$eval(numberExp));
              if (!isNaN(value)) {
                if (!(value in whens))
                  value = $locale.pluralCat(value - offset);
                return whensExpFns[value](scope, element, true);
              } else {
                return '';
              }
            }, function ngPluralizeWatchAction(newVal) {
              element.text(newVal);
            });
          }
        };
      }
    ];
  var ngRepeatDirective = ngDirective({
      transclude: 'element',
      priority: 1000,
      terminal: true,
      compile: function (element, attr, linker) {
        return function (scope, iterStartElement, attr) {
          var expression = attr.ngRepeat;
          var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/), lhs, rhs, valueIdent, keyIdent;
          if (!match) {
            throw Error('Expected ngRepeat in form of \'_item_ in _collection_\' but got \'' + expression + '\'.');
          }
          lhs = match[1];
          rhs = match[2];
          match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
          if (!match) {
            throw Error('\'item\' in \'item in collection\' should be identifier or (key, value) but got \'' + lhs + '\'.');
          }
          valueIdent = match[3] || match[1];
          keyIdent = match[2];
          var lastOrder = new HashQueueMap();
          scope.$watch(function ngRepeatWatch(scope) {
            var index, length, collection = scope.$eval(rhs), cursor = iterStartElement, nextOrder = new HashQueueMap(), arrayBound, childScope, key, value, array, last;
            if (!isArray(collection)) {
              array = [];
              for (key in collection) {
                if (collection.hasOwnProperty(key) && key.charAt(0) != '$') {
                  array.push(key);
                }
              }
              array.sort();
            } else {
              array = collection || [];
            }
            arrayBound = array.length - 1;
            for (index = 0, length = array.length; index < length; index++) {
              key = collection === array ? index : array[index];
              value = collection[key];
              last = lastOrder.shift(value);
              if (last) {
                childScope = last.scope;
                nextOrder.push(value, last);
                if (index === last.index) {
                  cursor = last.element;
                } else {
                  last.index = index;
                  cursor.after(last.element);
                  cursor = last.element;
                }
              } else {
                childScope = scope.$new();
              }
              childScope[valueIdent] = value;
              if (keyIdent)
                childScope[keyIdent] = key;
              childScope.$index = index;
              childScope.$first = index === 0;
              childScope.$last = index === arrayBound;
              childScope.$middle = !(childScope.$first || childScope.$last);
              if (!last) {
                linker(childScope, function (clone) {
                  cursor.after(clone);
                  last = {
                    scope: childScope,
                    element: cursor = clone,
                    index: index
                  };
                  nextOrder.push(value, last);
                });
              }
            }
            for (key in lastOrder) {
              if (lastOrder.hasOwnProperty(key)) {
                array = lastOrder[key];
                while (array.length) {
                  value = array.pop();
                  value.element.remove();
                  value.scope.$destroy();
                }
              }
            }
            lastOrder = nextOrder;
          });
        };
      }
    });
  var ngShowDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
        element.css('display', toBoolean(value) ? '' : 'none');
      });
    });
  var ngHideDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
        element.css('display', toBoolean(value) ? 'none' : '');
      });
    });
  var ngStyleDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
        if (oldStyles && newStyles !== oldStyles) {
          forEach(oldStyles, function (val, style) {
            element.css(style, '');
          });
        }
        if (newStyles)
          element.css(newStyles);
      }, true);
    });
  var NG_SWITCH = 'ng-switch';
  var ngSwitchDirective = valueFn({
      restrict: 'EA',
      require: 'ngSwitch',
      controller: [
        '$scope',
        function ngSwitchController() {
          this.cases = {};
        }
      ],
      link: function (scope, element, attr, ctrl) {
        var watchExpr = attr.ngSwitch || attr.on, selectedTransclude, selectedElement, selectedScope;
        scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
          if (selectedElement) {
            selectedScope.$destroy();
            selectedElement.remove();
            selectedElement = selectedScope = null;
          }
          if (selectedTransclude = ctrl.cases['!' + value] || ctrl.cases['?']) {
            scope.$eval(attr.change);
            selectedScope = scope.$new();
            selectedTransclude(selectedScope, function (caseElement) {
              selectedElement = caseElement;
              element.append(caseElement);
            });
          }
        });
      }
    });
  var ngSwitchWhenDirective = ngDirective({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (element, attrs, transclude) {
        return function (scope, element, attr, ctrl) {
          ctrl.cases['!' + attrs.ngSwitchWhen] = transclude;
        };
      }
    });
  var ngSwitchDefaultDirective = ngDirective({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (element, attrs, transclude) {
        return function (scope, element, attr, ctrl) {
          ctrl.cases['?'] = transclude;
        };
      }
    });
  var ngTranscludeDirective = ngDirective({
      controller: [
        '$transclude',
        '$element',
        function ($transclude, $element) {
          $transclude(function (clone) {
            $element.append(clone);
          });
        }
      ]
    });
  var ngViewDirective = [
      '$http',
      '$templateCache',
      '$route',
      '$anchorScroll',
      '$compile',
      '$controller',
      function ($http, $templateCache, $route, $anchorScroll, $compile, $controller) {
        return {
          restrict: 'ECA',
          terminal: true,
          link: function (scope, element, attr) {
            var lastScope, onloadExp = attr.onload || '';
            scope.$on('$routeChangeSuccess', update);
            update();
            function destroyLastScope() {
              if (lastScope) {
                lastScope.$destroy();
                lastScope = null;
              }
            }
            function clearContent() {
              element.html('');
              destroyLastScope();
            }
            function update() {
              var locals = $route.current && $route.current.locals, template = locals && locals.$template;
              if (template) {
                element.html(template);
                destroyLastScope();
                var link = $compile(element.contents()), current = $route.current, controller;
                lastScope = current.scope = scope.$new();
                if (current.controller) {
                  locals.$scope = lastScope;
                  controller = $controller(current.controller, locals);
                  element.children().data('$ngControllerController', controller);
                }
                link(lastScope);
                lastScope.$emit('$viewContentLoaded');
                lastScope.$eval(onloadExp);
                $anchorScroll();
              } else {
                clearContent();
              }
            }
          }
        };
      }
    ];
  var scriptDirective = [
      '$templateCache',
      function ($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function (element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id, text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }
    ];
  var ngOptionsDirective = valueFn({ terminal: true });
  var selectDirective = [
      '$compile',
      '$parse',
      function ($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, nullModelCtrl = { $setViewValue: noop };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function ($element, $scope, $attrs) {
              var self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl, nullOption, unknownOption;
              self.databound = $attrs.ngModel;
              self.init = function (ngModelCtrl_, nullOption_, unknownOption_) {
                ngModelCtrl = ngModelCtrl_;
                nullOption = nullOption_;
                unknownOption = unknownOption_;
              };
              self.addOption = function (value) {
                optionsMap[value] = true;
                if (ngModelCtrl.$viewValue == value) {
                  $element.val(value);
                  if (unknownOption.parent())
                    unknownOption.remove();
                }
              };
              self.removeOption = function (value) {
                if (this.hasOption(value)) {
                  delete optionsMap[value];
                  if (ngModelCtrl.$viewValue == value) {
                    this.renderUnknownOption(value);
                  }
                }
              };
              self.renderUnknownOption = function (val) {
                var unknownVal = '? ' + hashKey(val) + ' ?';
                unknownOption.val(unknownVal);
                $element.prepend(unknownOption);
                $element.val(unknownVal);
                unknownOption.prop('selected', true);
              };
              self.hasOption = function (value) {
                return optionsMap.hasOwnProperty(value);
              };
              $scope.$on('$destroy', function () {
                self.renderUnknownOption = noop;
              });
            }
          ],
          link: function (scope, element, attr, ctrls) {
            if (!ctrls[1])
              return;
            var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = false, emptyOption, optionTemplate = jqLite(document.createElement('option')), optGroupTemplate = jqLite(document.createElement('optgroup')), unknownOption = optionTemplate.clone();
            for (var i = 0, children = element.children(), ii = children.length; i < ii; i++) {
              if (children[i].value == '') {
                emptyOption = nullOption = children.eq(i);
                break;
              }
            }
            selectCtrl.init(ngModelCtrl, nullOption, unknownOption);
            if (multiple && (attr.required || attr.ngRequired)) {
              var requiredValidator = function (value) {
                ngModelCtrl.$setValidity('required', !attr.required || value && value.length);
                return value;
              };
              ngModelCtrl.$parsers.push(requiredValidator);
              ngModelCtrl.$formatters.unshift(requiredValidator);
              attr.$observe('required', function () {
                requiredValidator(ngModelCtrl.$viewValue);
              });
            }
            if (optionsExp)
              Options(scope, element, ngModelCtrl);
            else if (multiple)
              Multiple(scope, element, ngModelCtrl);
            else
              Single(scope, element, ngModelCtrl, selectCtrl);
            function Single(scope, selectElement, ngModelCtrl, selectCtrl) {
              ngModelCtrl.$render = function () {
                var viewValue = ngModelCtrl.$viewValue;
                if (selectCtrl.hasOption(viewValue)) {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  selectElement.val(viewValue);
                  if (viewValue === '')
                    emptyOption.prop('selected', true);
                } else {
                  if (isUndefined(viewValue) && emptyOption) {
                    selectElement.val('');
                  } else {
                    selectCtrl.renderUnknownOption(viewValue);
                  }
                }
              };
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  ngModelCtrl.$setViewValue(selectElement.val());
                });
              });
            }
            function Multiple(scope, selectElement, ctrl) {
              var lastView;
              ctrl.$render = function () {
                var items = new HashMap(ctrl.$viewValue);
                forEach(selectElement.find('option'), function (option) {
                  option.selected = isDefined(items.get(option.value));
                });
              };
              scope.$watch(function selectMultipleWatch() {
                if (!equals(lastView, ctrl.$viewValue)) {
                  lastView = copy(ctrl.$viewValue);
                  ctrl.$render();
                }
              });
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  var array = [];
                  forEach(selectElement.find('option'), function (option) {
                    if (option.selected) {
                      array.push(option.value);
                    }
                  });
                  ctrl.$setViewValue(array);
                });
              });
            }
            function Options(scope, selectElement, ctrl) {
              var match;
              if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
                throw Error('Expected ngOptions in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\'' + ' but got \'' + optionsExp + '\'.');
              }
              var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ''), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), optionGroupsCache = [[{
                      element: selectElement,
                      label: ''
                    }]];
              if (nullOption) {
                $compile(nullOption)(scope);
                nullOption.removeClass('ng-scope');
                nullOption.remove();
              }
              selectElement.html('');
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  var optionGroup, collection = valuesFn(scope) || [], locals = {}, key, value, optionElement, index, groupIndex, length, groupLength;
                  if (multiple) {
                    value = [];
                    for (groupIndex = 0, groupLength = optionGroupsCache.length; groupIndex < groupLength; groupIndex++) {
                      optionGroup = optionGroupsCache[groupIndex];
                      for (index = 1, length = optionGroup.length; index < length; index++) {
                        if ((optionElement = optionGroup[index].element)[0].selected) {
                          key = optionElement.val();
                          if (keyName)
                            locals[keyName] = key;
                          locals[valueName] = collection[key];
                          value.push(valueFn(scope, locals));
                        }
                      }
                    }
                  } else {
                    key = selectElement.val();
                    if (key == '?') {
                      value = undefined;
                    } else if (key == '') {
                      value = null;
                    } else {
                      locals[valueName] = collection[key];
                      if (keyName)
                        locals[keyName] = key;
                      value = valueFn(scope, locals);
                    }
                  }
                  ctrl.$setViewValue(value);
                });
              });
              ctrl.$render = render;
              scope.$watch(render);
              function render() {
                var optionGroups = { '': [] }, optionGroupNames = [''], optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, groupLength, length, groupIndex, index, locals = {}, selected, selectedSet = false, lastElement, element, label;
                if (multiple) {
                  selectedSet = new HashMap(modelValue);
                }
                for (index = 0; length = keys.length, index < length; index++) {
                  locals[valueName] = values[keyName ? locals[keyName] = keys[index] : index];
                  optionGroupName = groupByFn(scope, locals) || '';
                  if (!(optionGroup = optionGroups[optionGroupName])) {
                    optionGroup = optionGroups[optionGroupName] = [];
                    optionGroupNames.push(optionGroupName);
                  }
                  if (multiple) {
                    selected = selectedSet.remove(valueFn(scope, locals)) != undefined;
                  } else {
                    selected = modelValue === valueFn(scope, locals);
                    selectedSet = selectedSet || selected;
                  }
                  label = displayFn(scope, locals);
                  label = label === undefined ? '' : label;
                  optionGroup.push({
                    id: keyName ? keys[index] : index,
                    label: label,
                    selected: selected
                  });
                }
                if (!multiple) {
                  if (nullOption || modelValue === null) {
                    optionGroups[''].unshift({
                      id: '',
                      label: '',
                      selected: !selectedSet
                    });
                  } else if (!selectedSet) {
                    optionGroups[''].unshift({
                      id: '?',
                      label: '',
                      selected: true
                    });
                  }
                }
                for (groupIndex = 0, groupLength = optionGroupNames.length; groupIndex < groupLength; groupIndex++) {
                  optionGroupName = optionGroupNames[groupIndex];
                  optionGroup = optionGroups[optionGroupName];
                  if (optionGroupsCache.length <= groupIndex) {
                    existingParent = {
                      element: optGroupTemplate.clone().attr('label', optionGroupName),
                      label: optionGroup.label
                    };
                    existingOptions = [existingParent];
                    optionGroupsCache.push(existingOptions);
                    selectElement.append(existingParent.element);
                  } else {
                    existingOptions = optionGroupsCache[groupIndex];
                    existingParent = existingOptions[0];
                    if (existingParent.label != optionGroupName) {
                      existingParent.element.attr('label', existingParent.label = optionGroupName);
                    }
                  }
                  lastElement = null;
                  for (index = 0, length = optionGroup.length; index < length; index++) {
                    option = optionGroup[index];
                    if (existingOption = existingOptions[index + 1]) {
                      lastElement = existingOption.element;
                      if (existingOption.label !== option.label) {
                        lastElement.text(existingOption.label = option.label);
                      }
                      if (existingOption.id !== option.id) {
                        lastElement.val(existingOption.id = option.id);
                      }
                      if (lastElement[0].selected !== option.selected) {
                        lastElement.prop('selected', existingOption.selected = option.selected);
                      }
                    } else {
                      if (option.id === '' && nullOption) {
                        element = nullOption;
                      } else {
                        (element = optionTemplate.clone()).val(option.id).attr('selected', option.selected).text(option.label);
                      }
                      existingOptions.push(existingOption = {
                        element: element,
                        label: option.label,
                        id: option.id,
                        selected: option.selected
                      });
                      if (lastElement) {
                        lastElement.after(element);
                      } else {
                        existingParent.element.append(element);
                      }
                      lastElement = element;
                    }
                  }
                  index++;
                  while (existingOptions.length > index) {
                    existingOptions.pop().element.remove();
                  }
                }
                while (optionGroupsCache.length > groupIndex) {
                  optionGroupsCache.pop()[0].element.remove();
                }
              }
            }
          }
        };
      }
    ];
  var optionDirective = [
      '$interpolate',
      function ($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (element, attr) {
            if (isUndefined(attr.value)) {
              var interpolateFn = $interpolate(element.text(), true);
              if (!interpolateFn) {
                attr.$set('value', element.text());
              }
            }
            return function (scope, element, attr) {
              var selectCtrlName = '$selectController', parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (selectCtrl && selectCtrl.databound) {
                element.prop('selected', false);
              } else {
                selectCtrl = nullSelectCtrl;
              }
              if (interpolateFn) {
                scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                  attr.$set('value', newVal);
                  if (newVal !== oldVal)
                    selectCtrl.removeOption(oldVal);
                  selectCtrl.addOption(newVal);
                });
              } else {
                selectCtrl.addOption(attr.value);
              }
              element.bind('$destroy', function () {
                selectCtrl.removeOption(attr.value);
              });
            };
          }
        };
      }
    ];
  var styleDirective = valueFn({
      restrict: 'E',
      terminal: true
    });
  bindJQuery();
  publishExternalAPI(angular);
  jqLite(document).ready(function () {
    angularInit(document, bootstrap);
  });
}(window, document));
angular.element(document).find('head').append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
(function (window, angular, undefined) {
  'use strict';
  angular.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$parse',
    function ($http, $parse) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        };
      var noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy, isFunction = angular.isFunction, getter = function (obj, path) {
          return $parse(path)(obj);
        };
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
      }
      function Route(template, defaults) {
        this.template = template = template + '#';
        this.defaults = defaults || {};
        var urlParams = this.urlParams = {};
        forEach(template.split(/\W/), function (param) {
          if (param && new RegExp('(^|[^\\\\]):' + param + '\\W').test(template)) {
            urlParams[param] = true;
          }
        });
        this.template = template.replace(/\\:/g, ':');
      }
      Route.prototype = {
        url: function (params) {
          var self = this, url = this.template, val, encodedVal;
          params = params || {};
          forEach(this.urlParams, function (_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(':' + urlParam + '(\\W)', 'g'), encodedVal + '$1');
            } else {
              url = url.replace(new RegExp('(/?):' + urlParam + '(\\W)', 'g'), function (match, leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });
          url = url.replace(/\/?#$/, '');
          var query = [];
          forEach(params, function (value, key) {
            if (!self.urlParams[key]) {
              query.push(encodeUriQuery(key) + '=' + encodeUriQuery(value));
            }
          });
          query.sort();
          url = url.replace(/\/*$/, '');
          return url + (query.length ? '?' + query.join('&') : '');
        }
      };
      function ResourceFactory(url, paramDefaults, actions) {
        var route = new Route(url);
        actions = extend({}, DEFAULT_ACTIONS, actions);
        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function (value, key) {
            ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
          });
          return ids;
        }
        function Resource(value) {
          copy(value || {}, this);
        }
        forEach(actions, function (action, name) {
          action.method = angular.uppercase(action.method);
          var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
          Resource[name] = function (a1, a2, a3, a4) {
            var params = {};
            var data;
            var success = noop;
            var error = null;
            switch (arguments.length) {
            case 4:
              error = a4;
              success = a3;
            case 3:
            case 2:
              if (isFunction(a2)) {
                if (isFunction(a1)) {
                  success = a1;
                  error = a2;
                  break;
                }
                success = a2;
                error = a3;
              } else {
                params = a1;
                data = a2;
                success = a3;
                break;
              }
            case 1:
              if (isFunction(a1))
                success = a1;
              else if (hasBody)
                data = a1;
              else
                params = a1;
              break;
            case 0:
              break;
            default:
              throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
            }
            var value = this instanceof Resource ? this : action.isArray ? [] : new Resource(data);
            $http({
              method: action.method,
              url: route.url(extend({}, extractParams(data, action.params || {}), params)),
              data: data
            }).then(function (response) {
              var data = response.data;
              if (data) {
                if (action.isArray) {
                  value.length = 0;
                  forEach(data, function (item) {
                    value.push(new Resource(item));
                  });
                } else {
                  copy(data, value);
                }
              }
              (success || noop)(value, response.headers);
            }, error);
            return value;
          };
          Resource.prototype['$' + name] = function (a1, a2, a3) {
            var params = extractParams(this), success = noop, error;
            switch (arguments.length) {
            case 3:
              params = a1;
              success = a2;
              error = a3;
              break;
            case 2:
            case 1:
              if (isFunction(a1)) {
                success = a1;
                error = a2;
              } else {
                params = a1;
                success = a2 || noop;
              }
            case 0:
              break;
            default:
              throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
            }
            var data = hasBody ? this : undefined;
            Resource[name].call(this, params, data, success, error);
          };
        });
        Resource.bind = function (additionalParamDefaults) {
          return ResourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };
        return Resource;
      }
      return ResourceFactory;
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  angular.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function ($rootScope, $browser) {
      var cookies = {}, lastCookies = {}, lastBrowserCookies, runEval = false, copy = angular.copy, isUndefined = angular.isUndefined;
      $browser.addPollFn(function () {
        var currentCookies = $browser.cookies();
        if (lastBrowserCookies != currentCookies) {
          lastBrowserCookies = currentCookies;
          copy(currentCookies, lastCookies);
          copy(currentCookies, cookies);
          if (runEval)
            $rootScope.$apply();
        }
      })();
      runEval = true;
      $rootScope.$watch(push);
      return cookies;
      function push() {
        var name, value, browserCookies, updated;
        for (name in lastCookies) {
          if (isUndefined(cookies[name])) {
            $browser.cookies(name, undefined);
          }
        }
        for (name in cookies) {
          value = cookies[name];
          if (!angular.isString(value)) {
            if (angular.isDefined(lastCookies[name])) {
              cookies[name] = lastCookies[name];
            } else {
              delete cookies[name];
            }
          } else if (value !== lastCookies[name]) {
            $browser.cookies(name, value);
            updated = true;
          }
        }
        if (updated) {
          updated = false;
          browserCookies = $browser.cookies();
          for (name in cookies) {
            if (cookies[name] !== browserCookies[name]) {
              if (isUndefined(browserCookies[name])) {
                delete cookies[name];
              } else {
                cookies[name] = browserCookies[name];
              }
              updated = true;
            }
          }
        }
      }
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function ($cookies) {
      return {
        get: function (key) {
          var value = $cookies[key];
          return value ? angular.fromJson(value) : value;
        },
        put: function (key, value) {
          $cookies[key] = angular.toJson(value);
        },
        remove: function (key) {
          delete $cookies[key];
        }
      };
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  var $sanitize = function (html) {
    var buf = [];
    htmlParser(html, htmlSanitizeWriter(buf));
    return buf.join('');
  };
  var START_TAG_REGEXP = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, END_TAG_REGEXP = /^<\s*\/\s*([\w:-]+)[^>]*>/, ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, BEGIN_TAG_REGEXP = /^</, BEGING_END_TAGE_REGEXP = /^<\s*\//, COMMENT_REGEXP = /<!--(.*?)-->/g, CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g, URI_REGEXP = /^((ftp|https?):\/\/|mailto:|#)/, NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;
  var voidElements = makeMap('area,br,col,hr,img,wbr');
  var optionalEndTagBlockElements = makeMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'), optionalEndTagInlineElements = makeMap('rp,rt'), optionalEndTagElements = angular.extend({}, optionalEndTagInlineElements, optionalEndTagBlockElements);
  var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap('address,article,aside,' + 'blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,' + 'header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul'));
  var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap('a,abbr,acronym,b,bdi,bdo,' + 'big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,' + 'span,strike,strong,sub,sup,time,tt,u,var'));
  var specialElements = makeMap('script,style');
  var validElements = angular.extend({}, voidElements, blockElements, inlineElements, optionalEndTagElements);
  var uriAttrs = makeMap('background,cite,href,longdesc,src,usemap');
  var validAttrs = angular.extend({}, uriAttrs, makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' + 'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' + 'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' + 'scope,scrolling,shape,span,start,summary,target,title,type,' + 'valign,value,vspace,width'));
  function makeMap(str) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++)
      obj[items[i]] = true;
    return obj;
  }
  function htmlParser(html, handler) {
    var index, chars, match, stack = [], last = html;
    stack.last = function () {
      return stack[stack.length - 1];
    };
    while (html) {
      chars = true;
      if (!stack.last() || !specialElements[stack.last()]) {
        if (html.indexOf('<!--') === 0) {
          index = html.indexOf('-->');
          if (index >= 0) {
            if (handler.comment)
              handler.comment(html.substring(4, index));
            html = html.substring(index + 3);
            chars = false;
          }
        } else if (BEGING_END_TAGE_REGEXP.test(html)) {
          match = html.match(END_TAG_REGEXP);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(END_TAG_REGEXP, parseEndTag);
            chars = false;
          }
        } else if (BEGIN_TAG_REGEXP.test(html)) {
          match = html.match(START_TAG_REGEXP);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(START_TAG_REGEXP, parseStartTag);
            chars = false;
          }
        }
        if (chars) {
          index = html.indexOf('<');
          var text = index < 0 ? html : html.substring(0, index);
          html = index < 0 ? '' : html.substring(index);
          if (handler.chars)
            handler.chars(decodeEntities(text));
        }
      } else {
        html = html.replace(new RegExp('(.*)<\\s*\\/\\s*' + stack.last() + '[^>]*>', 'i'), function (all, text) {
          text = text.replace(COMMENT_REGEXP, '$1').replace(CDATA_REGEXP, '$1');
          if (handler.chars)
            handler.chars(decodeEntities(text));
          return '';
        });
        parseEndTag('', stack.last());
      }
      if (html == last) {
        throw 'Parse Error: ' + html;
      }
      last = html;
    }
    parseEndTag();
    function parseStartTag(tag, tagName, rest, unary) {
      tagName = angular.lowercase(tagName);
      if (blockElements[tagName]) {
        while (stack.last() && inlineElements[stack.last()]) {
          parseEndTag('', stack.last());
        }
      }
      if (optionalEndTagElements[tagName] && stack.last() == tagName) {
        parseEndTag('', tagName);
      }
      unary = voidElements[tagName] || !!unary;
      if (!unary)
        stack.push(tagName);
      var attrs = {};
      rest.replace(ATTR_REGEXP, function (match, name, doubleQuotedValue, singleQoutedValue, unqoutedValue) {
        var value = doubleQuotedValue || singleQoutedValue || unqoutedValue || '';
        attrs[name] = decodeEntities(value);
      });
      if (handler.start)
        handler.start(tagName, attrs, unary);
    }
    function parseEndTag(tag, tagName) {
      var pos = 0, i;
      tagName = angular.lowercase(tagName);
      if (tagName)
        for (pos = stack.length - 1; pos >= 0; pos--)
          if (stack[pos] == tagName)
            break;
      if (pos >= 0) {
        for (i = stack.length - 1; i >= pos; i--)
          if (handler.end)
            handler.end(stack[i]);
        stack.length = pos;
      }
    }
  }
  var hiddenPre = document.createElement('pre');
  function decodeEntities(value) {
    hiddenPre.innerHTML = value.replace(/</g, '&lt;');
    return hiddenPre.innerText || hiddenPre.textContent || '';
  }
  function encodeEntities(value) {
    return value.replace(/&/g, '&amp;').replace(NON_ALPHANUMERIC_REGEXP, function (value) {
      return '&#' + value.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function htmlSanitizeWriter(buf) {
    var ignore = false;
    var out = angular.bind(buf, buf.push);
    return {
      start: function (tag, attrs, unary) {
        tag = angular.lowercase(tag);
        if (!ignore && specialElements[tag]) {
          ignore = tag;
        }
        if (!ignore && validElements[tag] == true) {
          out('<');
          out(tag);
          angular.forEach(attrs, function (value, key) {
            var lkey = angular.lowercase(key);
            if (validAttrs[lkey] == true && (uriAttrs[lkey] !== true || value.match(URI_REGEXP))) {
              out(' ');
              out(key);
              out('="');
              out(encodeEntities(value));
              out('"');
            }
          });
          out(unary ? '/>' : '>');
        }
      },
      end: function (tag) {
        tag = angular.lowercase(tag);
        if (!ignore && validElements[tag] == true) {
          out('</');
          out(tag);
          out('>');
        }
        if (tag == ignore) {
          ignore = false;
        }
      },
      chars: function (chars) {
        if (!ignore) {
          out(encodeEntities(chars));
        }
      }
    };
  }
  angular.module('ngSanitize', []).value('$sanitize', $sanitize);
  angular.module('ngSanitize').directive('ngBindHtml', [
    '$sanitize',
    function ($sanitize) {
      return function (scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.ngBindHtml);
        scope.$watch(attr.ngBindHtml, function ngBindHtmlWatchAction(value) {
          value = $sanitize(value);
          element.html(value || '');
        });
      };
    }
  ]);
  angular.module('ngSanitize').filter('linky', function () {
    var LINKY_URL_REGEXP = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/, MAILTO_REGEXP = /^mailto:/;
    return function (text) {
      if (!text)
        return text;
      var match;
      var raw = text;
      var html = [];
      var writer = htmlSanitizeWriter(html);
      var url;
      var i;
      while (match = raw.match(LINKY_URL_REGEXP)) {
        url = match[0];
        if (match[2] == match[3])
          url = 'mailto:' + url;
        i = match.index;
        writer.chars(raw.substr(0, i));
        writer.start('a', { href: url });
        writer.chars(match[0].replace(MAILTO_REGEXP, ''));
        writer.end('a');
        raw = raw.substring(i + match[0].length);
      }
      writer.chars(raw);
      return html.join('');
    };
  });
}(window, window.angular));
angular.module('ui.bootstrap', [
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dialog',
  'ui.bootstrap.dropdownToggle',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.position',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.typeahead'
]), angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function (t, e, n) {
    function o(t) {
      for (var e in t)
        if (void 0 !== a.style[e])
          return t[e];
    }
    var i = function (o, a, r) {
        r = r || {};
        var s = t.defer(), l = i[r.animation ? 'animationEndEventName' : 'transitionEndEventName'], c = function () {
            n.$apply(function () {
              o.unbind(l, c), s.resolve(o);
            });
          };
        return l && o.bind(l, c), e(function () {
          angular.isString(a) ? o.addClass(a) : angular.isFunction(a) ? a(o) : angular.isObject(a) && o.css(a), l || s.resolve(o);
        }), s.promise.cancel = function () {
          l && o.unbind(l, c), s.reject('Transition cancelled');
        }, s.promise;
      }, a = document.createElement('trans'), r = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }, s = {
        WebkitTransition: 'webkitAnimationEnd',
        MozTransition: 'animationend',
        OTransition: 'oAnimationEnd',
        transition: 'animationend'
      };
    return i.transitionEndEventName = o(r), i.animationEndEventName = o(s), i;
  }
]), angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function (t) {
    var e = function (t, e, n) {
      e.removeClass('collapse'), e.css({ height: n }), e[0].offsetWidth, e.addClass('collapse');
    };
    return {
      link: function (n, o, i) {
        var a, r = !0;
        n.$watch(function () {
          return o[0].scrollHeight;
        }, function () {
          0 !== o[0].scrollHeight && (a || (r ? e(n, o, o[0].scrollHeight + 'px') : e(n, o, 'auto')));
        }), n.$watch(i.collapse, function (t) {
          t ? u() : c();
        });
        var s, l = function (e) {
            return s && s.cancel(), s = t(o, e), s.then(function () {
              s = void 0;
            }, function () {
              s = void 0;
            }), s;
          }, c = function () {
            r ? (r = !1, a || e(n, o, 'auto')) : l({ height: o[0].scrollHeight + 'px' }).then(function () {
              a || e(n, o, 'auto');
            }), a = !1;
          }, u = function () {
            a = !0, r ? (r = !1, e(n, o, 0)) : (e(n, o, o[0].scrollHeight + 'px'), l({ height: '0' }));
          };
      }
    };
  }
]), angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: !0 }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function (t, e, n) {
    this.groups = [], this.closeOthers = function (o) {
      var i = angular.isDefined(e.closeOthers) ? t.$eval(e.closeOthers) : n.closeOthers;
      i && angular.forEach(this.groups, function (t) {
        t !== o && (t.isOpen = !1);
      });
    }, this.addGroup = function (t) {
      var e = this;
      this.groups.push(t), t.$on('$destroy', function () {
        e.removeGroup(t);
      });
    }, this.removeGroup = function (t) {
      var e = this.groups.indexOf(t);
      -1 !== e && this.groups.splice(this.groups.indexOf(t), 1);
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: !0,
    replace: !1,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', [
  '$parse',
  '$transition',
  '$timeout',
  function (t) {
    return {
      require: '^accordion',
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      templateUrl: 'template/accordion/accordion-group.html',
      scope: { heading: '@' },
      controller: [
        '$scope',
        function () {
          this.setHeading = function (t) {
            this.heading = t;
          };
        }
      ],
      link: function (e, n, o, i) {
        var a, r;
        i.addGroup(e), e.isOpen = !1, o.isOpen && (a = t(o.isOpen), r = a.assign, e.$watch(function () {
          return a(e.$parent);
        }, function (t) {
          e.isOpen = t;
        }), e.isOpen = a ? a(e.$parent) : !1), e.$watch('isOpen', function (t) {
          t && i.closeOthers(e), r && r(e.$parent, t);
        });
      }
    };
  }
]).directive('accordionHeading', function () {
  return {
    restrict: 'E',
    transclude: !0,
    template: '',
    replace: !0,
    require: '^accordionGroup',
    compile: function (t, e, n) {
      return function (t, e, o, i) {
        i.setHeading(n(t, function () {
        }));
      };
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (t, e, n, o) {
      t.$watch(function () {
        return o[n.accordionTransclude];
      }, function (t) {
        t && (e.html(''), e.append(t));
      });
    }
  };
}), angular.module('ui.bootstrap.alert', []).directive('alert', function () {
  return {
    restrict: 'EA',
    templateUrl: 'template/alert/alert.html',
    transclude: !0,
    replace: !0,
    scope: {
      type: '=',
      close: '&'
    },
    link: function (t, e, n) {
      t.closeable = 'close' in n;
    }
  };
}), angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).directive('btnRadio', [
  'buttonConfig',
  function (t) {
    var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
    return {
      require: 'ngModel',
      link: function (t, o, i, a) {
        var r = t.$eval(i.btnRadio);
        t.$watch(function () {
          return a.$modelValue;
        }, function (t) {
          angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
        }), o.bind(n, function () {
          o.hasClass(e) || t.$apply(function () {
            a.$setViewValue(r);
          });
        });
      }
    };
  }
]).directive('btnCheckbox', [
  'buttonConfig',
  function (t) {
    var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
    return {
      require: 'ngModel',
      link: function (t, o, i, a) {
        var r = t.$eval(i.btnCheckboxTrue), s = t.$eval(i.btnCheckboxFalse);
        r = angular.isDefined(r) ? r : !0, s = angular.isDefined(s) ? s : !1, t.$watch(function () {
          return a.$modelValue;
        }, function (t) {
          angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
        }), o.bind(n, function () {
          t.$apply(function () {
            a.$setViewValue(o.hasClass(e) ? s : r);
          });
        });
      }
    };
  }
]), angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$transition',
  '$q',
  function (t, e, n) {
    function o() {
      function n() {
        a ? (t.next(), o()) : t.pause();
      }
      i && e.cancel(i);
      var r = +t.interval;
      !isNaN(r) && r >= 0 && (i = e(n, r));
    }
    var i, a, r = this, s = r.slides = [], l = -1;
    r.currentSlide = null, r.select = function (i, a) {
      function c() {
        r.currentSlide && angular.isString(a) && !t.noTransition && i.$element ? (i.$element.addClass(a), i.$element[0].offsetWidth = i.$element[0].offsetWidth, angular.forEach(s, function (t) {
          angular.extend(t, {
            direction: '',
            entering: !1,
            leaving: !1,
            active: !1
          });
        }), angular.extend(i, {
          direction: a,
          active: !0,
          entering: !0
        }), angular.extend(r.currentSlide || {}, {
          direction: a,
          leaving: !0
        }), t.$currentTransition = n(i.$element, {}), function (e, n) {
          t.$currentTransition.then(function () {
            u(e, n);
          }, function () {
            u(e, n);
          });
        }(i, r.currentSlide)) : u(i, r.currentSlide), r.currentSlide = i, l = p, o();
      }
      function u(e, n) {
        angular.extend(e, {
          direction: '',
          active: !0,
          leaving: !1,
          entering: !1
        }), angular.extend(n || {}, {
          direction: '',
          active: !1,
          leaving: !1,
          entering: !1
        }), t.$currentTransition = null;
      }
      var p = s.indexOf(i);
      void 0 === a && (a = p > l ? 'next' : 'prev'), i && i !== r.currentSlide && (t.$currentTransition ? (t.$currentTransition.cancel(), e(c)) : c());
    }, r.indexOfSlide = function (t) {
      return s.indexOf(t);
    }, t.next = function () {
      var t = (l + 1) % s.length;
      return r.select(s[t], 'next');
    }, t.prev = function () {
      var t = 0 > l - 1 ? s.length - 1 : l - 1;
      return r.select(s[t], 'prev');
    }, t.select = function (t) {
      r.select(t);
    }, t.isActive = function (t) {
      return r.currentSlide === t;
    }, t.slides = function () {
      return s;
    }, t.$watch('interval', o), t.play = function () {
      a || (a = !0, o());
    }, t.pause = function () {
      a = !1, i && e.cancel(i);
    }, r.addSlide = function (e, n) {
      e.$element = n, s.push(e), 1 === s.length || e.active ? (r.select(s[s.length - 1]), 1 == s.length && t.play()) : e.active = !1;
    }, r.removeSlide = function (t) {
      var e = s.indexOf(t);
      s.splice(e, 1), s.length > 0 && t.active && (e >= s.length ? r.select(s[e - 1]) : r.select(s[e]));
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '='
      }
    };
  }]).directive('slide', [function () {
    return {
      require: '^carousel',
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      templateUrl: 'template/carousel/slide.html',
      scope: { active: '=' },
      link: function (t, e, n, o) {
        o.addSlide(t, e), t.$on('$destroy', function () {
          o.removeSlide(t);
        }), t.$watch('active', function (e) {
          e && o.select(t);
        });
      }
    };
  }]);
var dialogModule = angular.module('ui.bootstrap.dialog', ['ui.bootstrap.transition']);
dialogModule.controller('MessageBoxController', [
  '$scope',
  'dialog',
  'model',
  function (t, e, n) {
    t.title = n.title, t.message = n.message, t.buttons = n.buttons, t.close = function (t) {
      e.close(t);
    };
  }
]), dialogModule.provider('$dialog', function () {
  var t = {
      backdrop: !0,
      dialogClass: 'modal',
      backdropClass: 'modal-backdrop',
      transitionClass: 'fade',
      triggerClass: 'in',
      dialogOpenClass: 'modal-open',
      resolve: {},
      backdropFade: !1,
      dialogFade: !1,
      keyboard: !0,
      backdropClick: !0
    }, e = {}, n = { value: 0 };
  this.options = function (t) {
    e = t;
  }, this.$get = [
    '$http',
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    '$templateCache',
    '$q',
    '$transition',
    '$injector',
    function (o, i, a, r, s, l, c, u, p) {
      function d(t) {
        var e = angular.element('<div>');
        return e.addClass(t), e;
      }
      function f(n) {
        var o = this, i = this.options = angular.extend({}, t, e, n);
        this._open = !1, this.backdropEl = d(i.backdropClass), i.backdropFade && (this.backdropEl.addClass(i.transitionClass), this.backdropEl.removeClass(i.triggerClass)), this.modalEl = d(i.dialogClass), i.dialogFade && (this.modalEl.addClass(i.transitionClass), this.modalEl.removeClass(i.triggerClass)), this.handledEscapeKey = function (t) {
          27 === t.which && (o.close(), t.preventDefault(), o.$scope.$apply());
        }, this.handleBackDropClick = function (t) {
          o.close(), t.preventDefault(), o.$scope.$apply();
        }, this.handleLocationChange = function () {
          o.close();
        };
      }
      var h = i.find('body');
      return f.prototype.isOpen = function () {
        return this._open;
      }, f.prototype.open = function (t, e) {
        var n = this, o = this.options;
        if (t && (o.templateUrl = t), e && (o.controller = e), !o.template && !o.templateUrl)
          throw Error('Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.');
        return this._loadResolves().then(function (t) {
          var e = t.$scope = n.$scope = t.$scope ? t.$scope : r.$new();
          if (n.modalEl.html(t.$template), n.options.controller) {
            var o = s(n.options.controller, t);
            n.modalEl.children().data('ngControllerController', o);
          }
          a(n.modalEl)(e), n._addElementsToDom(), h.addClass(n.options.dialogOpenClass), setTimeout(function () {
            n.options.dialogFade && n.modalEl.addClass(n.options.triggerClass), n.options.backdropFade && n.backdropEl.addClass(n.options.triggerClass);
          }), n._bindEvents();
        }), this.deferred = c.defer(), this.deferred.promise;
      }, f.prototype.close = function (t) {
        function e(t) {
          t.removeClass(o.options.triggerClass);
        }
        function n() {
          o._open && o._onCloseComplete(t);
        }
        var o = this, i = this._getFadingElements();
        if (h.removeClass(o.options.dialogOpenClass), i.length > 0)
          for (var a = i.length - 1; a >= 0; a--)
            u(i[a], e).then(n);
        else
          this._onCloseComplete(t);
      }, f.prototype._getFadingElements = function () {
        var t = [];
        return this.options.dialogFade && t.push(this.modalEl), this.options.backdropFade && t.push(this.backdropEl), t;
      }, f.prototype._bindEvents = function () {
        this.options.keyboard && h.bind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind('click', this.handleBackDropClick), this.$scope.$on('$locationChangeSuccess', this.handleLocationChange);
      }, f.prototype._unbindEvents = function () {
        this.options.keyboard && h.unbind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind('click', this.handleBackDropClick);
      }, f.prototype._onCloseComplete = function (t) {
        this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(t);
      }, f.prototype._addElementsToDom = function () {
        h.append(this.modalEl), this.options.backdrop && (0 === n.value && h.append(this.backdropEl), n.value++), this._open = !0;
      }, f.prototype._removeElementsFromDom = function () {
        this.modalEl.remove(), this.options.backdrop && (n.value--, 0 === n.value && this.backdropEl.remove()), this._open = !1;
      }, f.prototype._loadResolves = function () {
        var t, e = [], n = [], i = this;
        return this.options.template ? t = c.when(this.options.template) : this.options.templateUrl && (t = o.get(this.options.templateUrl, { cache: l }).then(function (t) {
          return t.data;
        })), angular.forEach(this.options.resolve || [], function (t, o) {
          n.push(o), e.push(angular.isString(t) ? p.get(t) : p.invoke(t));
        }), n.push('$template'), e.push(t), c.all(e).then(function (t) {
          var e = {};
          return angular.forEach(t, function (t, o) {
            e[n[o]] = t;
          }), e.dialog = i, e;
        });
      }, {
        dialog: function (t) {
          return new f(t);
        },
        messageBox: function (t, e, n) {
          return new f({
            templateUrl: 'template/dialog/message.html',
            controller: 'MessageBoxController',
            resolve: {
              model: function () {
                return {
                  title: t,
                  message: e,
                  buttons: n
                };
              }
            }
          });
        }
      };
    }
  ];
}), angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', [
  '$document',
  '$location',
  '$window',
  function (t) {
    var e = null, n = angular.noop;
    return {
      restrict: 'CA',
      link: function (o, i) {
        o.$watch('$location.path', function () {
          n();
        }), i.parent().bind('click', function () {
          n();
        }), i.bind('click', function (o) {
          o.preventDefault(), o.stopPropagation();
          var a = i === e;
          e && n(), a || (i.parent().addClass('open'), e = i, n = function (o) {
            o && (o.preventDefault(), o.stopPropagation()), t.unbind('click', n), i.parent().removeClass('open'), n = angular.noop, e = null;
          }, t.bind('click', n));
        });
      }
    };
  }
]), angular.module('ui.bootstrap.modal', ['ui.bootstrap.dialog']).directive('modal', [
  '$parse',
  '$dialog',
  function (t, e) {
    return {
      restrict: 'EA',
      terminal: !0,
      link: function (n, o, i) {
        var a, r = angular.extend({}, n.$eval(i.uiOptions || i.bsOptions || i.options)), s = i.modal || i.show;
        r = angular.extend(r, {
          template: o.html(),
          resolve: {
            $scope: function () {
              return n;
            }
          }
        });
        var l = e.dialog(r);
        o.remove(), a = i.close ? function () {
          t(i.close)(n);
        } : function () {
          angular.isFunction(t(s).assign) && t(s).assign(n, !1);
        }, n.$watch(s, function (t) {
          t ? l.open().then(function () {
            a();
          }) : l.isOpen() && l.close();
        });
      }
    };
  }
]), angular.module('ui.bootstrap.pagination', []).constant('paginationConfig', {
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last'
}).directive('pagination', [
  'paginationConfig',
  function (t) {
    return {
      restrict: 'EA',
      scope: {
        numPages: '=',
        currentPage: '=',
        maxSize: '=',
        onSelectPage: '&'
      },
      templateUrl: 'template/pagination/pagination.html',
      replace: !0,
      link: function (e, n, o) {
        function i(t, e, n, o) {
          return {
            number: t,
            text: e,
            active: n,
            disabled: o
          };
        }
        var a = angular.isDefined(o.boundaryLinks) ? e.$eval(o.boundaryLinks) : t.boundaryLinks, r = angular.isDefined(o.directionLinks) ? e.$eval(o.directionLinks) : t.directionLinks, s = angular.isDefined(o.firstText) ? o.firstText : t.firstText, l = angular.isDefined(o.previousText) ? o.previousText : t.previousText, c = angular.isDefined(o.nextText) ? o.nextText : t.nextText, u = angular.isDefined(o.lastText) ? o.lastText : t.lastText;
        e.$watch('numPages + currentPage + maxSize', function () {
          e.pages = [];
          var t = 1, n = e.numPages;
          e.maxSize && e.maxSize < e.numPages && (t = Math.max(e.currentPage - Math.floor(e.maxSize / 2), 1), n = t + e.maxSize - 1, n > e.numPages && (n = e.numPages, t = n - e.maxSize + 1));
          for (var o = t; n >= o; o++) {
            var p = i(o, o, e.isActive(o), !1);
            e.pages.push(p);
          }
          if (r) {
            var d = i(e.currentPage - 1, l, !1, e.noPrevious());
            e.pages.unshift(d);
            var f = i(e.currentPage + 1, c, !1, e.noNext());
            e.pages.push(f);
          }
          if (a) {
            var h = i(1, s, !1, e.noPrevious());
            e.pages.unshift(h);
            var g = i(e.numPages, u, !1, e.noNext());
            e.pages.push(g);
          }
          e.currentPage > e.numPages && e.selectPage(e.numPages);
        }), e.noPrevious = function () {
          return 1 === e.currentPage;
        }, e.noNext = function () {
          return e.currentPage === e.numPages;
        }, e.isActive = function (t) {
          return e.currentPage === t;
        }, e.selectPage = function (t) {
          !e.isActive(t) && t > 0 && e.numPages >= t && (e.currentPage = t, e.onSelectPage({ page: t }));
        };
      }
    };
  }
]), angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function (t, e) {
    function n(t, n) {
      return t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n];
    }
    function o(t) {
      return 'static' === (n(t, 'position') || 'static');
    }
    var i = function (e) {
      for (var n = t[0], i = e.offsetParent || n; i && i !== n && o(i);)
        i = i.offsetParent;
      return i || n;
    };
    return {
      position: function (e) {
        var n = this.offset(e), o = {
            top: 0,
            left: 0
          }, a = i(e[0]);
        return a != t[0] && (o = this.offset(angular.element(a)), o.top += a.clientTop, o.left += a.clientLeft), {
          width: e.prop('offsetWidth'),
          height: e.prop('offsetHeight'),
          top: n.top - o.top,
          left: n.left - o.left
        };
      },
      offset: function (n) {
        var o = n[0].getBoundingClientRect();
        return {
          width: n.prop('offsetWidth'),
          height: n.prop('offsetHeight'),
          top: o.top + (e.pageYOffset || t[0].body.scrollTop),
          left: o.left + (e.pageXOffset || t[0].body.scrollLeft)
        };
      }
    };
  }
]), angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position']).provider('$tooltip', function () {
  function t(t) {
    var e = /[A-Z]/g, n = '-';
    return t.replace(e, function (t, e) {
      return (e ? n : '') + t.toLowerCase();
    });
  }
  var e = {
      placement: 'top',
      animation: !0,
      popupDelay: 0
    }, n = {
      mouseenter: 'mouseleave',
      click: 'click',
      focus: 'blur'
    }, o = {};
  this.options = function (t) {
    angular.extend(o, t);
  }, this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    function (i, a, r, s, l, c) {
      return function (i, u, p) {
        function d(t) {
          var e, o;
          return e = t || f.trigger || p, o = angular.isDefined(f.trigger) ? n[f.trigger] || e : n[e] || e, {
            show: e,
            hide: o
          };
        }
        var f = angular.extend({}, e, o), h = t(i), g = d(void 0), m = '<' + h + '-popup ' + 'title="{{tt_title}}" ' + 'content="{{tt_content}}" ' + 'placement="{{tt_placement}}" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + '>' + '</' + h + '-popup>';
        return {
          restrict: 'EA',
          scope: !0,
          link: function (t, e, n) {
            function o() {
              t.tt_isOpen ? h() : p();
            }
            function p() {
              t.tt_popupDelay ? y = r(v, t.tt_popupDelay) : t.$apply(v);
            }
            function h() {
              t.$apply(function () {
                $();
              });
            }
            function v() {
              var n, o, i, a;
              if (t.tt_content) {
                switch (b && r.cancel(b), x.css({
                    top: 0,
                    left: 0,
                    display: 'block'
                  }), f.appendToBody ? (k = k || l.find('body'), k.append(x)) : e.after(x), n = c.position(e), o = x.prop('offsetWidth'), i = x.prop('offsetHeight'), t.tt_placement) {
                case 'right':
                  a = {
                    top: n.top + n.height / 2 - i / 2 + 'px',
                    left: n.left + n.width + 'px'
                  };
                  break;
                case 'bottom':
                  a = {
                    top: n.top + n.height + 'px',
                    left: n.left + n.width / 2 - o / 2 + 'px'
                  };
                  break;
                case 'left':
                  a = {
                    top: n.top + n.height / 2 - i / 2 + 'px',
                    left: n.left - o + 'px'
                  };
                  break;
                default:
                  a = {
                    top: n.top - i + 'px',
                    left: n.left + n.width / 2 - o / 2 + 'px'
                  };
                }
                x.css(a), t.tt_isOpen = !0;
              }
            }
            function $() {
              t.tt_isOpen = !1, r.cancel(y), angular.isDefined(t.tt_animation) && t.tt_animation() ? b = r(function () {
                x.remove();
              }, 500) : x.remove();
            }
            var b, y, k, x = a(m)(t);
            t.tt_isOpen = !1, n.$observe(i, function (e) {
              t.tt_content = e;
            }), n.$observe(u + 'Title', function (e) {
              t.tt_title = e;
            }), n.$observe(u + 'Placement', function (e) {
              t.tt_placement = angular.isDefined(e) ? e : f.placement;
            }), n.$observe(u + 'Animation', function (e) {
              t.tt_animation = angular.isDefined(e) ? s(e) : function () {
                return f.animation;
              };
            }), n.$observe(u + 'PopupDelay', function (e) {
              var n = parseInt(e, 10);
              t.tt_popupDelay = isNaN(n) ? f.popupDelay : n;
            }), n.$observe(u + 'Trigger', function (t) {
              e.unbind(g.show), e.unbind(g.hide), g = d(t), g.show === g.hide ? e.bind(g.show, o) : (e.bind(g.show, p), e.bind(g.hide, h));
            });
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function (t) {
    return t('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'E',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function (t) {
    return t('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]), angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$compile',
  '$timeout',
  '$parse',
  '$window',
  '$tooltip',
  function (t, e, n, o, i) {
    return i('popover', 'popover', 'click');
  }
]), angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition']).constant('progressConfig', {
  animate: !0,
  autoType: !1,
  stackedTypes: [
    'success',
    'info',
    'warning',
    'danger'
  ]
}).controller('ProgressBarController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function (t, e, n) {
    function o(t) {
      return r[t];
    }
    var i = angular.isDefined(e.animate) ? t.$eval(e.animate) : n.animate, a = angular.isDefined(e.autoType) ? t.$eval(e.autoType) : n.autoType, r = angular.isDefined(e.stackedTypes) ? t.$eval('[' + e.stackedTypes + ']') : n.stackedTypes;
    this.makeBar = function (t, e, n) {
      var r = angular.isObject(t) ? t.value : t || 0, s = angular.isObject(e) ? e.value : e || 0, l = angular.isObject(t) && angular.isDefined(t.type) ? t.type : a ? o(n || 0) : null;
      return {
        from: s,
        to: r,
        type: l,
        animate: i
      };
    }, this.addBar = function (e) {
      t.bars.push(e), t.totalPercent += e.to;
    }, this.clearBars = function () {
      t.bars = [], t.totalPercent = 0;
    }, this.clearBars();
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: !0,
    controller: 'ProgressBarController',
    scope: {
      value: '=',
      onFull: '&',
      onEmpty: '&'
    },
    templateUrl: 'template/progressbar/progress.html',
    link: function (t, e, n, o) {
      t.$watch('value', function (t, e) {
        if (o.clearBars(), angular.isArray(t))
          for (var n = 0, i = t.length; i > n; n++)
            o.addBar(o.makeBar(t[n], e[n], n));
        else
          o.addBar(o.makeBar(t, e));
      }, !0), t.$watch('totalPercent', function (e) {
        e >= 100 ? t.onFull() : 0 >= e && t.onEmpty();
      }, !0);
    }
  };
}).directive('progressbar', [
  '$transition',
  function (t) {
    return {
      restrict: 'EA',
      replace: !0,
      scope: {
        width: '=',
        old: '=',
        type: '=',
        animate: '='
      },
      templateUrl: 'template/progressbar/bar.html',
      link: function (e, n) {
        e.$watch('width', function (o) {
          e.animate ? (n.css('width', e.old + '%'), t(n, { width: o + '%' })) : n.css('width', o + '%');
        });
      }
    };
  }
]), angular.module('ui.bootstrap.rating', []).constant('ratingConfig', { max: 5 }).directive('rating', [
  'ratingConfig',
  '$parse',
  function (t, e) {
    return {
      restrict: 'EA',
      scope: { value: '=' },
      templateUrl: 'template/rating/rating.html',
      replace: !0,
      link: function (n, o, i) {
        var a = angular.isDefined(i.max) ? n.$eval(i.max) : t.max;
        n.range = [];
        for (var r = 1; a >= r; r++)
          n.range.push(r);
        n.rate = function (t) {
          n.readonly || (n.value = t);
        }, n.enter = function (t) {
          n.readonly || (n.val = t);
        }, n.reset = function () {
          n.val = angular.copy(n.value);
        }, n.reset(), n.$watch('value', function (t) {
          n.val = t;
        }), n.readonly = !1, i.readonly && n.$parent.$watch(e(i.readonly), function (t) {
          n.readonly = !!t;
        });
      }
    };
  }
]), angular.module('ui.bootstrap.tabs', []).controller('TabsController', [
  '$scope',
  '$element',
  function (t) {
    var e = t.panes = [];
    this.select = t.select = function (t) {
      angular.forEach(e, function (t) {
        t.selected = !1;
      }), t.selected = !0;
    }, this.addPane = function (n) {
      e.length || t.select(n), e.push(n);
    }, this.removePane = function (n) {
      var o = e.indexOf(n);
      e.splice(o, 1), n.selected && e.length > 0 && t.select(e[e.length > o ? o : o - 1]);
    };
  }
]).directive('tabs', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    scope: {},
    controller: 'TabsController',
    templateUrl: 'template/tabs/tabs.html',
    replace: !0
  };
}).directive('pane', [
  '$parse',
  function (t) {
    return {
      require: '^tabs',
      restrict: 'EA',
      transclude: !0,
      scope: { heading: '@' },
      link: function (e, n, o, i) {
        var a, r;
        e.selected = !1, o.active && (a = t(o.active), r = a.assign, e.$watch(function () {
          return a(e.$parent);
        }, function (t) {
          e.selected = t;
        }), e.selected = a ? a(e.$parent) : !1), e.$watch('selected', function (t) {
          t && i.select(e), r && r(e.$parent, t);
        }), i.addPane(e), e.$on('$destroy', function () {
          i.removePane(e);
        });
      },
      templateUrl: 'template/tabs/pane.html',
      replace: !0
    };
  }
]), angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position']).factory('typeaheadParser', [
  '$parse',
  function (t) {
    var e = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
      parse: function (n) {
        var o = n.match(e);
        if (!o)
          throw Error('Expected typeahead specification in form of \'_modelValue_ (as _label_)? for _item_ in _collection_\' but got \'' + n + '\'.');
        return {
          itemName: o[3],
          source: t(o[4]),
          viewMapper: t(o[2] || o[1]),
          modelMapper: t(o[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$document',
  '$position',
  'typeaheadParser',
  function (t, e, n, o, i, a) {
    var r = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (s, l, c, u) {
        var p, d = s.$eval(c.typeaheadMinLength) || 1, f = a.parse(c.typeahead), h = s.$eval(c.typeaheadEditable) !== !1, g = e(c.typeaheadLoading).assign || angular.noop, m = angular.element('<typeahead-popup matches=\'matches\' active=\'activeIdx\' select=\'select(activeIdx)\' query=\'query\' position=\'position\'></typeahead-popup>'), v = s.$new();
        s.$on('$destroy', function () {
          v.$destroy();
        });
        var $ = function () {
            v.matches = [], v.activeIdx = -1;
          }, b = function (t) {
            var e = { $viewValue: t };
            g(s, !0), n.when(f.source(v, e)).then(function (n) {
              if (t === u.$viewValue) {
                if (n.length > 0) {
                  v.activeIdx = 0, v.matches.length = 0;
                  for (var o = 0; n.length > o; o++)
                    e[f.itemName] = n[o], v.matches.push({
                      label: f.viewMapper(v, e),
                      model: n[o]
                    });
                  v.query = t, v.position = i.position(l), v.position.top = v.position.top + l.prop('offsetHeight');
                } else
                  $();
                g(s, !1);
              }
            }, function () {
              $(), g(s, !1);
            });
          };
        $(), v.query = void 0, u.$parsers.push(function (t) {
          return $(), p ? t : (t && t.length >= d && b(t), h ? t : void 0);
        }), u.$render = function () {
          var t = {};
          t[f.itemName] = p || u.$viewValue, l.val(f.viewMapper(v, t) || u.$viewValue), p = void 0;
        }, v.select = function (t) {
          var e = {};
          e[f.itemName] = p = v.matches[t].model, u.$setViewValue(f.modelMapper(v, e)), u.$render();
        }, l.bind('keydown', function (t) {
          0 !== v.matches.length && -1 !== r.indexOf(t.which) && (t.preventDefault(), 40 === t.which ? (v.activeIdx = (v.activeIdx + 1) % v.matches.length, v.$digest()) : 38 === t.which ? (v.activeIdx = (v.activeIdx ? v.activeIdx : v.matches.length) - 1, v.$digest()) : 13 === t.which || 9 === t.which ? v.$apply(function () {
            v.select(v.activeIdx);
          }) : 27 === t.which && (t.stopPropagation(), $(), v.$digest()));
        }), o.bind('click', function () {
          $(), v.$digest();
        }), l.after(t(m)(v));
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'E',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: !0,
    templateUrl: 'template/typeahead/typeahead.html',
    link: function (t) {
      t.isOpen = function () {
        return t.matches.length > 0;
      }, t.isActive = function (e) {
        return t.active == e;
      }, t.selectActive = function (e) {
        t.active = e;
      }, t.selectMatch = function (e) {
        t.select({ activeIdx: e });
      };
    }
  };
}).filter('typeaheadHighlight', function () {
  function t(t) {
    return t.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (e, n) {
    return n ? e.replace(RegExp(t(n), 'gi'), '<strong>$&</strong>') : n;
  };
});
angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dialog',
  'ui.bootstrap.dropdownToggle',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.position',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.typeahead'
]), angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/dialog/message.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/rating/rating.html',
  'template/tabs/pane.html',
  'template/tabs/tabs.html',
  'template/typeahead/typeahead.html'
]), angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function (t, e, n) {
    function o(t) {
      for (var e in t)
        if (void 0 !== i.style[e])
          return t[e];
    }
    var a = function (o, i, r) {
        r = r || {};
        var l = t.defer(), s = a[r.animation ? 'animationEndEventName' : 'transitionEndEventName'], c = function () {
            n.$apply(function () {
              o.unbind(s, c), l.resolve(o);
            });
          };
        return s && o.bind(s, c), e(function () {
          angular.isString(i) ? o.addClass(i) : angular.isFunction(i) ? i(o) : angular.isObject(i) && o.css(i), s || l.resolve(o);
        }), l.promise.cancel = function () {
          s && o.unbind(s, c), l.reject('Transition cancelled');
        }, l.promise;
      }, i = document.createElement('trans'), r = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }, l = {
        WebkitTransition: 'webkitAnimationEnd',
        MozTransition: 'animationend',
        OTransition: 'oAnimationEnd',
        transition: 'animationend'
      };
    return a.transitionEndEventName = o(r), a.animationEndEventName = o(l), a;
  }
]), angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function (t) {
    var e = function (t, e, n) {
      e.removeClass('collapse'), e.css({ height: n }), e[0].offsetWidth, e.addClass('collapse');
    };
    return {
      link: function (n, o, a) {
        var i, r = !0;
        n.$watch(function () {
          return o[0].scrollHeight;
        }, function () {
          0 !== o[0].scrollHeight && (i || (r ? e(n, o, o[0].scrollHeight + 'px') : e(n, o, 'auto')));
        }), n.$watch(a.collapse, function (t) {
          t ? u() : c();
        });
        var l, s = function (e) {
            return l && l.cancel(), l = t(o, e), l.then(function () {
              l = void 0;
            }, function () {
              l = void 0;
            }), l;
          }, c = function () {
            r ? (r = !1, i || e(n, o, 'auto')) : s({ height: o[0].scrollHeight + 'px' }).then(function () {
              i || e(n, o, 'auto');
            }), i = !1;
          }, u = function () {
            i = !0, r ? (r = !1, e(n, o, 0)) : (e(n, o, o[0].scrollHeight + 'px'), s({ height: '0' }));
          };
      }
    };
  }
]), angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: !0 }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function (t, e, n) {
    this.groups = [], this.closeOthers = function (o) {
      var a = angular.isDefined(e.closeOthers) ? t.$eval(e.closeOthers) : n.closeOthers;
      a && angular.forEach(this.groups, function (t) {
        t !== o && (t.isOpen = !1);
      });
    }, this.addGroup = function (t) {
      var e = this;
      this.groups.push(t), t.$on('$destroy', function () {
        e.removeGroup(t);
      });
    }, this.removeGroup = function (t) {
      var e = this.groups.indexOf(t);
      -1 !== e && this.groups.splice(this.groups.indexOf(t), 1);
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: !0,
    replace: !1,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', [
  '$parse',
  '$transition',
  '$timeout',
  function (t) {
    return {
      require: '^accordion',
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      templateUrl: 'template/accordion/accordion-group.html',
      scope: { heading: '@' },
      controller: [
        '$scope',
        function () {
          this.setHeading = function (t) {
            this.heading = t;
          };
        }
      ],
      link: function (e, n, o, a) {
        var i, r;
        a.addGroup(e), e.isOpen = !1, o.isOpen && (i = t(o.isOpen), r = i.assign, e.$watch(function () {
          return i(e.$parent);
        }, function (t) {
          e.isOpen = t;
        }), e.isOpen = i ? i(e.$parent) : !1), e.$watch('isOpen', function (t) {
          t && a.closeOthers(e), r && r(e.$parent, t);
        });
      }
    };
  }
]).directive('accordionHeading', function () {
  return {
    restrict: 'E',
    transclude: !0,
    template: '',
    replace: !0,
    require: '^accordionGroup',
    compile: function (t, e, n) {
      return function (t, e, o, a) {
        a.setHeading(n(t, function () {
        }));
      };
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (t, e, n, o) {
      t.$watch(function () {
        return o[n.accordionTransclude];
      }, function (t) {
        t && (e.html(''), e.append(t));
      });
    }
  };
}), angular.module('ui.bootstrap.alert', []).directive('alert', function () {
  return {
    restrict: 'EA',
    templateUrl: 'template/alert/alert.html',
    transclude: !0,
    replace: !0,
    scope: {
      type: '=',
      close: '&'
    },
    link: function (t, e, n) {
      t.closeable = 'close' in n;
    }
  };
}), angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).directive('btnRadio', [
  'buttonConfig',
  function (t) {
    var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
    return {
      require: 'ngModel',
      link: function (t, o, a, i) {
        var r = t.$eval(a.btnRadio);
        t.$watch(function () {
          return i.$modelValue;
        }, function (t) {
          angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
        }), o.bind(n, function () {
          o.hasClass(e) || t.$apply(function () {
            i.$setViewValue(r);
          });
        });
      }
    };
  }
]).directive('btnCheckbox', [
  'buttonConfig',
  function (t) {
    var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
    return {
      require: 'ngModel',
      link: function (t, o, a, i) {
        var r = t.$eval(a.btnCheckboxTrue), l = t.$eval(a.btnCheckboxFalse);
        r = angular.isDefined(r) ? r : !0, l = angular.isDefined(l) ? l : !1, t.$watch(function () {
          return i.$modelValue;
        }, function (t) {
          angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
        }), o.bind(n, function () {
          t.$apply(function () {
            i.$setViewValue(o.hasClass(e) ? l : r);
          });
        });
      }
    };
  }
]), angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$transition',
  '$q',
  function (t, e, n) {
    function o() {
      function n() {
        i ? (t.next(), o()) : t.pause();
      }
      a && e.cancel(a);
      var r = +t.interval;
      !isNaN(r) && r >= 0 && (a = e(n, r));
    }
    var a, i, r = this, l = r.slides = [], s = -1;
    r.currentSlide = null, r.select = function (a, i) {
      function c() {
        r.currentSlide && angular.isString(i) && !t.noTransition && a.$element ? (a.$element.addClass(i), a.$element[0].offsetWidth = a.$element[0].offsetWidth, angular.forEach(l, function (t) {
          angular.extend(t, {
            direction: '',
            entering: !1,
            leaving: !1,
            active: !1
          });
        }), angular.extend(a, {
          direction: i,
          active: !0,
          entering: !0
        }), angular.extend(r.currentSlide || {}, {
          direction: i,
          leaving: !0
        }), t.$currentTransition = n(a.$element, {}), function (e, n) {
          t.$currentTransition.then(function () {
            u(e, n);
          }, function () {
            u(e, n);
          });
        }(a, r.currentSlide)) : u(a, r.currentSlide), r.currentSlide = a, s = p, o();
      }
      function u(e, n) {
        angular.extend(e, {
          direction: '',
          active: !0,
          leaving: !1,
          entering: !1
        }), angular.extend(n || {}, {
          direction: '',
          active: !1,
          leaving: !1,
          entering: !1
        }), t.$currentTransition = null;
      }
      var p = l.indexOf(a);
      void 0 === i && (i = p > s ? 'next' : 'prev'), a && a !== r.currentSlide && (t.$currentTransition ? (t.$currentTransition.cancel(), e(c)) : c());
    }, r.indexOfSlide = function (t) {
      return l.indexOf(t);
    }, t.next = function () {
      var t = (s + 1) % l.length;
      return r.select(l[t], 'next');
    }, t.prev = function () {
      var t = 0 > s - 1 ? l.length - 1 : s - 1;
      return r.select(l[t], 'prev');
    }, t.select = function (t) {
      r.select(t);
    }, t.isActive = function (t) {
      return r.currentSlide === t;
    }, t.slides = function () {
      return l;
    }, t.$watch('interval', o), t.play = function () {
      i || (i = !0, o());
    }, t.pause = function () {
      i = !1, a && e.cancel(a);
    }, r.addSlide = function (e, n) {
      e.$element = n, l.push(e), 1 === l.length || e.active ? (r.select(l[l.length - 1]), 1 == l.length && t.play()) : e.active = !1;
    }, r.removeSlide = function (t) {
      var e = l.indexOf(t);
      l.splice(e, 1), l.length > 0 && t.active && (e >= l.length ? r.select(l[e - 1]) : r.select(l[e]));
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '='
      }
    };
  }]).directive('slide', [function () {
    return {
      require: '^carousel',
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      templateUrl: 'template/carousel/slide.html',
      scope: { active: '=' },
      link: function (t, e, n, o) {
        o.addSlide(t, e), t.$on('$destroy', function () {
          o.removeSlide(t);
        }), t.$watch('active', function (e) {
          e && o.select(t);
        });
      }
    };
  }]);
var dialogModule = angular.module('ui.bootstrap.dialog', ['ui.bootstrap.transition']);
dialogModule.controller('MessageBoxController', [
  '$scope',
  'dialog',
  'model',
  function (t, e, n) {
    t.title = n.title, t.message = n.message, t.buttons = n.buttons, t.close = function (t) {
      e.close(t);
    };
  }
]), dialogModule.provider('$dialog', function () {
  var t = {
      backdrop: !0,
      dialogClass: 'modal',
      backdropClass: 'modal-backdrop',
      transitionClass: 'fade',
      triggerClass: 'in',
      dialogOpenClass: 'modal-open',
      resolve: {},
      backdropFade: !1,
      dialogFade: !1,
      keyboard: !0,
      backdropClick: !0
    }, e = {}, n = { value: 0 };
  this.options = function (t) {
    e = t;
  }, this.$get = [
    '$http',
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    '$templateCache',
    '$q',
    '$transition',
    '$injector',
    function (o, a, i, r, l, s, c, u, p) {
      function d(t) {
        var e = angular.element('<div>');
        return e.addClass(t), e;
      }
      function f(n) {
        var o = this, a = this.options = angular.extend({}, t, e, n);
        this._open = !1, this.backdropEl = d(a.backdropClass), a.backdropFade && (this.backdropEl.addClass(a.transitionClass), this.backdropEl.removeClass(a.triggerClass)), this.modalEl = d(a.dialogClass), a.dialogFade && (this.modalEl.addClass(a.transitionClass), this.modalEl.removeClass(a.triggerClass)), this.handledEscapeKey = function (t) {
          27 === t.which && (o.close(), t.preventDefault(), o.$scope.$apply());
        }, this.handleBackDropClick = function (t) {
          o.close(), t.preventDefault(), o.$scope.$apply();
        }, this.handleLocationChange = function () {
          o.close();
        };
      }
      var g = a.find('body');
      return f.prototype.isOpen = function () {
        return this._open;
      }, f.prototype.open = function (t, e) {
        var n = this, o = this.options;
        if (t && (o.templateUrl = t), e && (o.controller = e), !o.template && !o.templateUrl)
          throw Error('Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.');
        return this._loadResolves().then(function (t) {
          var e = t.$scope = n.$scope = t.$scope ? t.$scope : r.$new();
          if (n.modalEl.html(t.$template), n.options.controller) {
            var o = l(n.options.controller, t);
            n.modalEl.children().data('ngControllerController', o);
          }
          i(n.modalEl)(e), n._addElementsToDom(), g.addClass(n.options.dialogOpenClass), setTimeout(function () {
            n.options.dialogFade && n.modalEl.addClass(n.options.triggerClass), n.options.backdropFade && n.backdropEl.addClass(n.options.triggerClass);
          }), n._bindEvents();
        }), this.deferred = c.defer(), this.deferred.promise;
      }, f.prototype.close = function (t) {
        function e(t) {
          t.removeClass(o.options.triggerClass);
        }
        function n() {
          o._open && o._onCloseComplete(t);
        }
        var o = this, a = this._getFadingElements();
        if (g.removeClass(o.options.dialogOpenClass), a.length > 0)
          for (var i = a.length - 1; i >= 0; i--)
            u(a[i], e).then(n);
        else
          this._onCloseComplete(t);
      }, f.prototype._getFadingElements = function () {
        var t = [];
        return this.options.dialogFade && t.push(this.modalEl), this.options.backdropFade && t.push(this.backdropEl), t;
      }, f.prototype._bindEvents = function () {
        this.options.keyboard && g.bind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind('click', this.handleBackDropClick), this.$scope.$on('$locationChangeSuccess', this.handleLocationChange);
      }, f.prototype._unbindEvents = function () {
        this.options.keyboard && g.unbind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind('click', this.handleBackDropClick);
      }, f.prototype._onCloseComplete = function (t) {
        this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(t);
      }, f.prototype._addElementsToDom = function () {
        g.append(this.modalEl), this.options.backdrop && (0 === n.value && g.append(this.backdropEl), n.value++), this._open = !0;
      }, f.prototype._removeElementsFromDom = function () {
        this.modalEl.remove(), this.options.backdrop && (n.value--, 0 === n.value && this.backdropEl.remove()), this._open = !1;
      }, f.prototype._loadResolves = function () {
        var t, e = [], n = [], a = this;
        return this.options.template ? t = c.when(this.options.template) : this.options.templateUrl && (t = o.get(this.options.templateUrl, { cache: s }).then(function (t) {
          return t.data;
        })), angular.forEach(this.options.resolve || [], function (t, o) {
          n.push(o), e.push(angular.isString(t) ? p.get(t) : p.invoke(t));
        }), n.push('$template'), e.push(t), c.all(e).then(function (t) {
          var e = {};
          return angular.forEach(t, function (t, o) {
            e[n[o]] = t;
          }), e.dialog = a, e;
        });
      }, {
        dialog: function (t) {
          return new f(t);
        },
        messageBox: function (t, e, n) {
          return new f({
            templateUrl: 'template/dialog/message.html',
            controller: 'MessageBoxController',
            resolve: {
              model: function () {
                return {
                  title: t,
                  message: e,
                  buttons: n
                };
              }
            }
          });
        }
      };
    }
  ];
}), angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', [
  '$document',
  '$location',
  '$window',
  function (t) {
    var e = null, n = angular.noop;
    return {
      restrict: 'CA',
      link: function (o, a) {
        o.$watch('$location.path', function () {
          n();
        }), a.parent().bind('click', function () {
          n();
        }), a.bind('click', function (o) {
          o.preventDefault(), o.stopPropagation();
          var i = a === e;
          e && n(), i || (a.parent().addClass('open'), e = a, n = function (o) {
            o && (o.preventDefault(), o.stopPropagation()), t.unbind('click', n), a.parent().removeClass('open'), n = angular.noop, e = null;
          }, t.bind('click', n));
        });
      }
    };
  }
]), angular.module('ui.bootstrap.modal', ['ui.bootstrap.dialog']).directive('modal', [
  '$parse',
  '$dialog',
  function (t, e) {
    return {
      restrict: 'EA',
      terminal: !0,
      link: function (n, o, a) {
        var i, r = angular.extend({}, n.$eval(a.uiOptions || a.bsOptions || a.options)), l = a.modal || a.show;
        r = angular.extend(r, {
          template: o.html(),
          resolve: {
            $scope: function () {
              return n;
            }
          }
        });
        var s = e.dialog(r);
        o.remove(), i = a.close ? function () {
          t(a.close)(n);
        } : function () {
          angular.isFunction(t(l).assign) && t(l).assign(n, !1);
        }, n.$watch(l, function (t) {
          t ? s.open().then(function () {
            i();
          }) : s.isOpen() && s.close();
        });
      }
    };
  }
]), angular.module('ui.bootstrap.pagination', []).constant('paginationConfig', {
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last'
}).directive('pagination', [
  'paginationConfig',
  function (t) {
    return {
      restrict: 'EA',
      scope: {
        numPages: '=',
        currentPage: '=',
        maxSize: '=',
        onSelectPage: '&'
      },
      templateUrl: 'template/pagination/pagination.html',
      replace: !0,
      link: function (e, n, o) {
        function a(t, e, n, o) {
          return {
            number: t,
            text: e,
            active: n,
            disabled: o
          };
        }
        var i = angular.isDefined(o.boundaryLinks) ? e.$eval(o.boundaryLinks) : t.boundaryLinks, r = angular.isDefined(o.directionLinks) ? e.$eval(o.directionLinks) : t.directionLinks, l = angular.isDefined(o.firstText) ? o.firstText : t.firstText, s = angular.isDefined(o.previousText) ? o.previousText : t.previousText, c = angular.isDefined(o.nextText) ? o.nextText : t.nextText, u = angular.isDefined(o.lastText) ? o.lastText : t.lastText;
        e.$watch('numPages + currentPage + maxSize', function () {
          e.pages = [];
          var t = 1, n = e.numPages;
          e.maxSize && e.maxSize < e.numPages && (t = Math.max(e.currentPage - Math.floor(e.maxSize / 2), 1), n = t + e.maxSize - 1, n > e.numPages && (n = e.numPages, t = n - e.maxSize + 1));
          for (var o = t; n >= o; o++) {
            var p = a(o, o, e.isActive(o), !1);
            e.pages.push(p);
          }
          if (r) {
            var d = a(e.currentPage - 1, s, !1, e.noPrevious());
            e.pages.unshift(d);
            var f = a(e.currentPage + 1, c, !1, e.noNext());
            e.pages.push(f);
          }
          if (i) {
            var g = a(1, l, !1, e.noPrevious());
            e.pages.unshift(g);
            var m = a(e.numPages, u, !1, e.noNext());
            e.pages.push(m);
          }
          e.currentPage > e.numPages && e.selectPage(e.numPages);
        }), e.noPrevious = function () {
          return 1 === e.currentPage;
        }, e.noNext = function () {
          return e.currentPage === e.numPages;
        }, e.isActive = function (t) {
          return e.currentPage === t;
        }, e.selectPage = function (t) {
          !e.isActive(t) && t > 0 && e.numPages >= t && (e.currentPage = t, e.onSelectPage({ page: t }));
        };
      }
    };
  }
]), angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function (t, e) {
    function n(t, n) {
      return t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n];
    }
    function o(t) {
      return 'static' === (n(t, 'position') || 'static');
    }
    var a = function (e) {
      for (var n = t[0], a = e.offsetParent || n; a && a !== n && o(a);)
        a = a.offsetParent;
      return a || n;
    };
    return {
      position: function (e) {
        var n = this.offset(e), o = {
            top: 0,
            left: 0
          }, i = a(e[0]);
        return i != t[0] && (o = this.offset(angular.element(i)), o.top += i.clientTop, o.left += i.clientLeft), {
          width: e.prop('offsetWidth'),
          height: e.prop('offsetHeight'),
          top: n.top - o.top,
          left: n.left - o.left
        };
      },
      offset: function (n) {
        var o = n[0].getBoundingClientRect();
        return {
          width: n.prop('offsetWidth'),
          height: n.prop('offsetHeight'),
          top: o.top + (e.pageYOffset || t[0].body.scrollTop),
          left: o.left + (e.pageXOffset || t[0].body.scrollLeft)
        };
      }
    };
  }
]), angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position']).provider('$tooltip', function () {
  function t(t) {
    var e = /[A-Z]/g, n = '-';
    return t.replace(e, function (t, e) {
      return (e ? n : '') + t.toLowerCase();
    });
  }
  var e = {
      placement: 'top',
      animation: !0,
      popupDelay: 0
    }, n = {
      mouseenter: 'mouseleave',
      click: 'click',
      focus: 'blur'
    }, o = {};
  this.options = function (t) {
    angular.extend(o, t);
  }, this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    function (a, i, r, l, s, c) {
      return function (a, u, p) {
        function d(t) {
          var e, o;
          return e = t || f.trigger || p, o = angular.isDefined(f.trigger) ? n[f.trigger] || e : n[e] || e, {
            show: e,
            hide: o
          };
        }
        var f = angular.extend({}, e, o), g = t(a), m = d(void 0), h = '<' + g + '-popup ' + 'title="{{tt_title}}" ' + 'content="{{tt_content}}" ' + 'placement="{{tt_placement}}" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + '>' + '</' + g + '-popup>';
        return {
          restrict: 'EA',
          scope: !0,
          link: function (t, e, n) {
            function o() {
              t.tt_isOpen ? g() : p();
            }
            function p() {
              t.tt_popupDelay ? y = r(v, t.tt_popupDelay) : t.$apply(v);
            }
            function g() {
              t.$apply(function () {
                b();
              });
            }
            function v() {
              var n, o, a, i;
              if (t.tt_content) {
                switch ($ && r.cancel($), C.css({
                    top: 0,
                    left: 0,
                    display: 'block'
                  }), f.appendToBody ? (k = k || s.find('body'), k.append(C)) : e.after(C), n = c.position(e), o = C.prop('offsetWidth'), a = C.prop('offsetHeight'), t.tt_placement) {
                case 'right':
                  i = {
                    top: n.top + n.height / 2 - a / 2 + 'px',
                    left: n.left + n.width + 'px'
                  };
                  break;
                case 'bottom':
                  i = {
                    top: n.top + n.height + 'px',
                    left: n.left + n.width / 2 - o / 2 + 'px'
                  };
                  break;
                case 'left':
                  i = {
                    top: n.top + n.height / 2 - a / 2 + 'px',
                    left: n.left - o + 'px'
                  };
                  break;
                default:
                  i = {
                    top: n.top - a + 'px',
                    left: n.left + n.width / 2 - o / 2 + 'px'
                  };
                }
                C.css(i), t.tt_isOpen = !0;
              }
            }
            function b() {
              t.tt_isOpen = !1, r.cancel(y), angular.isDefined(t.tt_animation) && t.tt_animation() ? $ = r(function () {
                C.remove();
              }, 500) : C.remove();
            }
            var $, y, k, C = i(h)(t);
            t.tt_isOpen = !1, n.$observe(a, function (e) {
              t.tt_content = e;
            }), n.$observe(u + 'Title', function (e) {
              t.tt_title = e;
            }), n.$observe(u + 'Placement', function (e) {
              t.tt_placement = angular.isDefined(e) ? e : f.placement;
            }), n.$observe(u + 'Animation', function (e) {
              t.tt_animation = angular.isDefined(e) ? l(e) : function () {
                return f.animation;
              };
            }), n.$observe(u + 'PopupDelay', function (e) {
              var n = parseInt(e, 10);
              t.tt_popupDelay = isNaN(n) ? f.popupDelay : n;
            }), n.$observe(u + 'Trigger', function (t) {
              e.unbind(m.show), e.unbind(m.hide), m = d(t), m.show === m.hide ? e.bind(m.show, o) : (e.bind(m.show, p), e.bind(m.hide, g));
            });
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function (t) {
    return t('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'E',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function (t) {
    return t('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]), angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$compile',
  '$timeout',
  '$parse',
  '$window',
  '$tooltip',
  function (t, e, n, o, a) {
    return a('popover', 'popover', 'click');
  }
]), angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition']).constant('progressConfig', {
  animate: !0,
  autoType: !1,
  stackedTypes: [
    'success',
    'info',
    'warning',
    'danger'
  ]
}).controller('ProgressBarController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function (t, e, n) {
    function o(t) {
      return r[t];
    }
    var a = angular.isDefined(e.animate) ? t.$eval(e.animate) : n.animate, i = angular.isDefined(e.autoType) ? t.$eval(e.autoType) : n.autoType, r = angular.isDefined(e.stackedTypes) ? t.$eval('[' + e.stackedTypes + ']') : n.stackedTypes;
    this.makeBar = function (t, e, n) {
      var r = angular.isObject(t) ? t.value : t || 0, l = angular.isObject(e) ? e.value : e || 0, s = angular.isObject(t) && angular.isDefined(t.type) ? t.type : i ? o(n || 0) : null;
      return {
        from: l,
        to: r,
        type: s,
        animate: a
      };
    }, this.addBar = function (e) {
      t.bars.push(e), t.totalPercent += e.to;
    }, this.clearBars = function () {
      t.bars = [], t.totalPercent = 0;
    }, this.clearBars();
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: !0,
    controller: 'ProgressBarController',
    scope: {
      value: '=',
      onFull: '&',
      onEmpty: '&'
    },
    templateUrl: 'template/progressbar/progress.html',
    link: function (t, e, n, o) {
      t.$watch('value', function (t, e) {
        if (o.clearBars(), angular.isArray(t))
          for (var n = 0, a = t.length; a > n; n++)
            o.addBar(o.makeBar(t[n], e[n], n));
        else
          o.addBar(o.makeBar(t, e));
      }, !0), t.$watch('totalPercent', function (e) {
        e >= 100 ? t.onFull() : 0 >= e && t.onEmpty();
      }, !0);
    }
  };
}).directive('progressbar', [
  '$transition',
  function (t) {
    return {
      restrict: 'EA',
      replace: !0,
      scope: {
        width: '=',
        old: '=',
        type: '=',
        animate: '='
      },
      templateUrl: 'template/progressbar/bar.html',
      link: function (e, n) {
        e.$watch('width', function (o) {
          e.animate ? (n.css('width', e.old + '%'), t(n, { width: o + '%' })) : n.css('width', o + '%');
        });
      }
    };
  }
]), angular.module('ui.bootstrap.rating', []).constant('ratingConfig', { max: 5 }).directive('rating', [
  'ratingConfig',
  '$parse',
  function (t, e) {
    return {
      restrict: 'EA',
      scope: { value: '=' },
      templateUrl: 'template/rating/rating.html',
      replace: !0,
      link: function (n, o, a) {
        var i = angular.isDefined(a.max) ? n.$eval(a.max) : t.max;
        n.range = [];
        for (var r = 1; i >= r; r++)
          n.range.push(r);
        n.rate = function (t) {
          n.readonly || (n.value = t);
        }, n.enter = function (t) {
          n.readonly || (n.val = t);
        }, n.reset = function () {
          n.val = angular.copy(n.value);
        }, n.reset(), n.$watch('value', function (t) {
          n.val = t;
        }), n.readonly = !1, a.readonly && n.$parent.$watch(e(a.readonly), function (t) {
          n.readonly = !!t;
        });
      }
    };
  }
]), angular.module('ui.bootstrap.tabs', []).controller('TabsController', [
  '$scope',
  '$element',
  function (t) {
    var e = t.panes = [];
    this.select = t.select = function (t) {
      angular.forEach(e, function (t) {
        t.selected = !1;
      }), t.selected = !0;
    }, this.addPane = function (n) {
      e.length || t.select(n), e.push(n);
    }, this.removePane = function (n) {
      var o = e.indexOf(n);
      e.splice(o, 1), n.selected && e.length > 0 && t.select(e[e.length > o ? o : o - 1]);
    };
  }
]).directive('tabs', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    scope: {},
    controller: 'TabsController',
    templateUrl: 'template/tabs/tabs.html',
    replace: !0
  };
}).directive('pane', [
  '$parse',
  function (t) {
    return {
      require: '^tabs',
      restrict: 'EA',
      transclude: !0,
      scope: { heading: '@' },
      link: function (e, n, o, a) {
        var i, r;
        e.selected = !1, o.active && (i = t(o.active), r = i.assign, e.$watch(function () {
          return i(e.$parent);
        }, function (t) {
          e.selected = t;
        }), e.selected = i ? i(e.$parent) : !1), e.$watch('selected', function (t) {
          t && a.select(e), r && r(e.$parent, t);
        }), a.addPane(e), e.$on('$destroy', function () {
          a.removePane(e);
        });
      },
      templateUrl: 'template/tabs/pane.html',
      replace: !0
    };
  }
]), angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position']).factory('typeaheadParser', [
  '$parse',
  function (t) {
    var e = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
      parse: function (n) {
        var o = n.match(e);
        if (!o)
          throw Error('Expected typeahead specification in form of \'_modelValue_ (as _label_)? for _item_ in _collection_\' but got \'' + n + '\'.');
        return {
          itemName: o[3],
          source: t(o[4]),
          viewMapper: t(o[2] || o[1]),
          modelMapper: t(o[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$document',
  '$position',
  'typeaheadParser',
  function (t, e, n, o, a, i) {
    var r = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (l, s, c, u) {
        var p, d = l.$eval(c.typeaheadMinLength) || 1, f = i.parse(c.typeahead), g = l.$eval(c.typeaheadEditable) !== !1, m = e(c.typeaheadLoading).assign || angular.noop, h = angular.element('<typeahead-popup matches=\'matches\' active=\'activeIdx\' select=\'select(activeIdx)\' query=\'query\' position=\'position\'></typeahead-popup>'), v = l.$new();
        l.$on('$destroy', function () {
          v.$destroy();
        });
        var b = function () {
            v.matches = [], v.activeIdx = -1;
          }, $ = function (t) {
            var e = { $viewValue: t };
            m(l, !0), n.when(f.source(v, e)).then(function (n) {
              if (t === u.$viewValue) {
                if (n.length > 0) {
                  v.activeIdx = 0, v.matches.length = 0;
                  for (var o = 0; n.length > o; o++)
                    e[f.itemName] = n[o], v.matches.push({
                      label: f.viewMapper(v, e),
                      model: n[o]
                    });
                  v.query = t, v.position = a.position(s), v.position.top = v.position.top + s.prop('offsetHeight');
                } else
                  b();
                m(l, !1);
              }
            }, function () {
              b(), m(l, !1);
            });
          };
        b(), v.query = void 0, u.$parsers.push(function (t) {
          return b(), p ? t : (t && t.length >= d && $(t), g ? t : void 0);
        }), u.$render = function () {
          var t = {};
          t[f.itemName] = p || u.$viewValue, s.val(f.viewMapper(v, t) || u.$viewValue), p = void 0;
        }, v.select = function (t) {
          var e = {};
          e[f.itemName] = p = v.matches[t].model, u.$setViewValue(f.modelMapper(v, e)), u.$render();
        }, s.bind('keydown', function (t) {
          0 !== v.matches.length && -1 !== r.indexOf(t.which) && (t.preventDefault(), 40 === t.which ? (v.activeIdx = (v.activeIdx + 1) % v.matches.length, v.$digest()) : 38 === t.which ? (v.activeIdx = (v.activeIdx ? v.activeIdx : v.matches.length) - 1, v.$digest()) : 13 === t.which || 9 === t.which ? v.$apply(function () {
            v.select(v.activeIdx);
          }) : 27 === t.which && (t.stopPropagation(), b(), v.$digest()));
        }), o.bind('click', function () {
          b(), v.$digest();
        }), s.after(t(h)(v));
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'E',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: !0,
    templateUrl: 'template/typeahead/typeahead.html',
    link: function (t) {
      t.isOpen = function () {
        return t.matches.length > 0;
      }, t.isActive = function (e) {
        return t.active == e;
      }, t.selectActive = function (e) {
        t.active = e;
      }, t.selectMatch = function (e) {
        t.select({ activeIdx: e });
      };
    }
  };
}).filter('typeaheadHighlight', function () {
  function t(t) {
    return t.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (e, n) {
    return n ? e.replace(RegExp(t(n), 'gi'), '<strong>$&</strong>') : n;
  };
}), angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/accordion/accordion-group.html', '<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>');
  }
]), angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/accordion/accordion.html', '<div class="accordion" ng-transclude></div>');
  }
]), angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/alert/alert.html', '<div class=\'alert\' ng-class=\'type && "alert-" + type\'>\n    <button ng-show=\'closeable\' type=\'button\' class=\'close\' ng-click=\'close()\'>&times;</button>\n    <div ng-transclude></div>\n</div>\n');
  }
]), angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n');
  }
]), angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/carousel/slide.html', '<div ng-class="{\n    \'active\': leaving || (active && !entering),\n    \'prev\': (next || active) && direction==\'prev\',\n    \'next\': (next || active) && direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }" class="item" ng-transclude></div>\n');
  }
]), angular.module('template/dialog/message.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/dialog/message.html', '<div class="modal-header">\n\t<h1>{{ title }}</h1>\n</div>\n<div class="modal-body">\n\t<p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n\t<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class=btn ng-class="btn.cssClass">{{ btn.label }}</button>\n</div>\n');
  }
]), angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/pagination/pagination.html', '<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n');
  }
]), angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n');
  }
]), angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
  }
]), angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
  }
]), angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/progressbar/bar.html', '<div class="bar" ng-class=\'type && "bar-" + type\'></div>');
  }
]), angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/progressbar/progress.html', '<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>');
  }
]), angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/rating/rating.html', '<span ng-mouseleave="reset()">\n\t<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i>\n</span>\n');
  }
]), angular.module('template/tabs/pane.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/tabs/pane.html', '<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-transclude></div>\n');
  }
]), angular.module('template/tabs/tabs.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/tabs/tabs.html', '<div class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\n      <a ng-click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class="tab-content" ng-transclude></div>\n</div>\n');
  }
]), angular.module('template/typeahead/match.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/typeahead/match.html', '<a tabindex="-1" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]), angular.module('template/typeahead/typeahead.html', []).run([
  '$templateCache',
  function (t) {
    t.put('template/typeahead/typeahead.html', '<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>');
  }
]);
(function ($) {
  $.easyPieChart = function (el, options) {
    var addScaleLine, animateLine, drawLine, easeInOutQuad, rAF, renderBackground, renderScale, renderTrack, _this = this;
    this.el = el;
    this.$el = $(el);
    this.$el.data('easyPieChart', this);
    this.init = function () {
      var percent, scaleBy;
      _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
      percent = parseInt(_this.$el.data('percent'), 10);
      _this.percentage = 0;
      _this.canvas = $('<canvas width=\'' + _this.options.size + '\' height=\'' + _this.options.size + '\'></canvas>').get(0);
      _this.$el.append(_this.canvas);
      if (typeof G_vmlCanvasManager !== 'undefined' && G_vmlCanvasManager !== null) {
        G_vmlCanvasManager.initElement(_this.canvas);
      }
      _this.ctx = _this.canvas.getContext('2d');
      if (window.devicePixelRatio > 1) {
        scaleBy = window.devicePixelRatio;
        $(_this.canvas).css({
          width: _this.options.size,
          height: _this.options.size
        });
        _this.canvas.width *= scaleBy;
        _this.canvas.height *= scaleBy;
        _this.ctx.scale(scaleBy, scaleBy);
      }
      _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
      _this.$el.addClass('easyPieChart');
      _this.$el.css({
        width: _this.options.size,
        height: _this.options.size,
        lineHeight: '' + _this.options.size + 'px'
      });
      _this.update(percent);
      return _this;
    };
    this.update = function (percent) {
      percent = parseFloat(percent) || 0;
      if (_this.options.animate === false) {
        drawLine(percent);
      } else {
        animateLine(_this.percentage, percent);
      }
      return _this;
    };
    renderScale = function () {
      var i, _i, _results;
      _this.ctx.fillStyle = _this.options.scaleColor;
      _this.ctx.lineWidth = 1;
      _results = [];
      for (i = _i = 0; _i <= 24; i = ++_i) {
        _results.push(addScaleLine(i));
      }
      return _results;
    };
    addScaleLine = function (i) {
      var offset;
      offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
      _this.ctx.save();
      _this.ctx.rotate(i * Math.PI / 12);
      _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
      _this.ctx.restore();
    };
    renderTrack = function () {
      var offset;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
      _this.ctx.closePath();
      _this.ctx.strokeStyle = _this.options.trackColor;
      _this.ctx.lineWidth = _this.options.lineWidth;
      _this.ctx.stroke();
    };
    renderBackground = function () {
      if (_this.options.scaleColor !== false) {
        renderScale();
      }
      if (_this.options.trackColor !== false) {
        renderTrack();
      }
    };
    drawLine = function (percent) {
      var offset;
      renderBackground();
      _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
      _this.ctx.lineCap = _this.options.lineCap;
      _this.ctx.lineWidth = _this.options.lineWidth;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.save();
      _this.ctx.rotate(-Math.PI / 2);
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
      _this.ctx.stroke();
      _this.ctx.restore();
    };
    rAF = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    }();
    animateLine = function (from, to) {
      var anim, startTime;
      _this.options.onStart.call(_this);
      _this.percentage = to;
      startTime = Date.now();
      anim = function () {
        var currentValue, process;
        process = Date.now() - startTime;
        if (process < _this.options.animate) {
          rAF(anim);
        }
        _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
        renderBackground.call(_this);
        currentValue = [easeInOutQuad(process, from, to - from, _this.options.animate)];
        _this.options.onStep.call(_this, currentValue);
        drawLine.call(_this, currentValue);
        if (process >= _this.options.animate) {
          return _this.options.onStop.call(_this);
        }
      };
      rAF(anim);
    };
    easeInOutQuad = function (t, b, c, d) {
      var easeIn, easing;
      easeIn = function (t) {
        return Math.pow(t, 2);
      };
      easing = function (t) {
        if (t < 1) {
          return easeIn(t);
        } else {
          return 2 - easeIn(t / 2 * -2 + 2);
        }
      };
      t /= d / 2;
      return c / 2 * easing(t) + b;
    };
    return this.init();
  };
  $.easyPieChart.defaultOptions = {
    barColor: '#ef1e25',
    trackColor: '#f2f2f2',
    scaleColor: '#dfe0e0',
    lineCap: 'round',
    size: 110,
    lineWidth: 3,
    animate: false,
    onStart: $.noop,
    onStop: $.noop,
    onStep: $.noop
  };
  $.fn.easyPieChart = function (options) {
    return $.each(this, function (i, el) {
      var $el;
      $el = $(el);
      if (!$el.data('easyPieChart')) {
        return $el.data('easyPieChart', new $.easyPieChart(el, options));
      }
    });
  };
  return void 0;
}(jQuery));
(function ($) {
  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  }
  var Datepicker = function (element, options) {
    var that = this;
    this._process_options(options);
    this.element = $(element);
    this.isInline = false;
    this.isInput = this.element.is('input');
    this.component = this.element.is('.date') ? this.element.find('.add-on, .btn') : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0)
      this.component = false;
    this.picker = $(DPGlobal.template);
    this._buildEvents();
    this._attachEvents();
    if (this.isInline) {
      this.picker.addClass('datepicker-inline').appendTo(this.element);
    } else {
      this.picker.addClass('datepicker-dropdown dropdown-menu');
    }
    if (this.o.rtl) {
      this.picker.addClass('datepicker-rtl');
      this.picker.find('.prev i, .next i').toggleClass('icon-arrow-left icon-arrow-right');
    }
    this.viewMode = this.o.startView;
    if (this.o.calendarWeeks)
      this.picker.find('tfoot th.today').attr('colspan', function (i, val) {
        return parseInt(val) + 1;
      });
    this._allow_update = false;
    this.setStartDate(this.o.startDate);
    this.setEndDate(this.o.endDate);
    this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
    this.fillDow();
    this.fillMonths();
    this._allow_update = true;
    this.update();
    this.showMode();
    if (this.isInline) {
      this.show();
    }
  };
  Datepicker.prototype = {
    constructor: Datepicker,
    _process_options: function (opts) {
      this._o = $.extend({}, this._o, opts);
      var o = this.o = $.extend({}, this._o);
      var lang = o.language;
      if (!dates[lang]) {
        lang = lang.split('-')[0];
        if (!dates[lang])
          lang = $.fn.datepicker.defaults.language;
      }
      o.language = lang;
      switch (o.startView) {
      case 2:
      case 'decade':
        o.startView = 2;
        break;
      case 1:
      case 'year':
        o.startView = 1;
        break;
      default:
        o.startView = 0;
      }
      switch (o.minViewMode) {
      case 1:
      case 'months':
        o.minViewMode = 1;
        break;
      case 2:
      case 'years':
        o.minViewMode = 2;
        break;
      default:
        o.minViewMode = 0;
      }
      o.startView = Math.max(o.startView, o.minViewMode);
      o.weekStart %= 7;
      o.weekEnd = (o.weekStart + 6) % 7;
      var format = DPGlobal.parseFormat(o.format);
      if (o.startDate !== -Infinity) {
        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
      }
      if (o.endDate !== Infinity) {
        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
      }
      o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
      if (!$.isArray(o.daysOfWeekDisabled))
        o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
      o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function (evs) {
      for (var i = 0, el, ev; i < evs.length; i++) {
        el = evs[i][0];
        ev = evs[i][1];
        el.on(ev);
      }
    },
    _unapplyEvents: function (evs) {
      for (var i = 0, el, ev; i < evs.length; i++) {
        el = evs[i][0];
        ev = evs[i][1];
        el.off(ev);
      }
    },
    _buildEvents: function () {
      if (this.isInput) {
        this._events = [[
            this.element,
            {
              focus: $.proxy(this.show, this),
              keyup: $.proxy(this.update, this),
              keydown: $.proxy(this.keydown, this)
            }
          ]];
      } else if (this.component && this.hasInput) {
        this._events = [
          [
            this.element.find('input'),
            {
              focus: $.proxy(this.show, this),
              keyup: $.proxy(this.update, this),
              keydown: $.proxy(this.keydown, this)
            }
          ],
          [
            this.component,
            { click: $.proxy(this.show, this) }
          ]
        ];
      } else if (this.element.is('div')) {
        this.isInline = true;
      } else {
        this._events = [[
            this.element,
            { click: $.proxy(this.show, this) }
          ]];
      }
      this._secondaryEvents = [
        [
          this.picker,
          { click: $.proxy(this.click, this) }
        ],
        [
          $(window),
          { resize: $.proxy(this.place, this) }
        ],
        [
          $(document),
          {
            mousedown: $.proxy(function (e) {
              if (!(this.element.is(e.target) || this.element.find(e.target).size() || this.picker.is(e.target) || this.picker.find(e.target).size())) {
                this.hide();
              }
            }, this)
          }
        ]
      ];
    },
    _attachEvents: function () {
      this._detachEvents();
      this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents();
      this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (event, altdate) {
      var date = altdate || this.date, local_date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      this.element.trigger({
        type: event,
        date: local_date,
        format: $.proxy(function (altformat) {
          var format = altformat || this.o.format;
          return DPGlobal.formatDate(date, format, this.o.language);
        }, this)
      });
    },
    show: function (e) {
      if (!this.isInline)
        this.picker.appendTo('body');
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      this.place();
      this._attachSecondaryEvents();
      if (e) {
        e.preventDefault();
      }
      this._trigger('show');
    },
    hide: function (e) {
      if (this.isInline)
        return;
      if (!this.picker.is(':visible'))
        return;
      this.picker.hide().detach();
      this._detachSecondaryEvents();
      this.viewMode = this.o.startView;
      this.showMode();
      if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val()))
        this.setValue();
      this._trigger('hide');
    },
    remove: function () {
      this.hide();
      this._detachEvents();
      this._detachSecondaryEvents();
      this.picker.remove();
      delete this.element.data().datepicker;
      if (!this.isInput) {
        delete this.element.data().date;
      }
    },
    getDate: function () {
      var d = this.getUTCDate();
      return new Date(d.getTime() + d.getTimezoneOffset() * 60000);
    },
    getUTCDate: function () {
      return this.date;
    },
    setDate: function (d) {
      this.setUTCDate(new Date(d.getTime() - d.getTimezoneOffset() * 60000));
    },
    setUTCDate: function (d) {
      this.date = d;
      this.setValue();
    },
    setValue: function () {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted);
        }
      } else {
        this.element.val(formatted);
      }
    },
    getFormattedDate: function (format) {
      if (format === undefined)
        format = this.o.format;
      return DPGlobal.formatDate(this.date, format, this.o.language);
    },
    setStartDate: function (startDate) {
      this._process_options({ startDate: startDate });
      this.update();
      this.updateNavArrows();
    },
    setEndDate: function (endDate) {
      this._process_options({ endDate: endDate });
      this.update();
      this.updateNavArrows();
    },
    setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
      this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
      this.update();
      this.updateNavArrows();
    },
    place: function () {
      if (this.isInline)
        return;
      var zIndex = parseInt(this.element.parents().filter(function () {
          return $(this).css('z-index') != 'auto';
        }).first().css('z-index')) + 10;
      var offset = this.component ? this.component.parent().offset() : this.element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
      this.picker.css({
        top: offset.top + height,
        left: offset.left,
        zIndex: zIndex
      });
    },
    _allow_update: true,
    update: function () {
      if (!this._allow_update)
        return;
      var date, fromArgs = false;
      if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
        delete this.element.data().date;
      }
      this.date = DPGlobal.parseDate(date, this.o.format, this.o.language);
      if (fromArgs)
        this.setValue();
      if (this.date < this.o.startDate) {
        this.viewDate = new Date(this.o.startDate);
      } else if (this.date > this.o.endDate) {
        this.viewDate = new Date(this.o.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }
      this.fill();
    },
    fillDow: function () {
      var dowCnt = this.o.weekStart, html = '<tr>';
      if (this.o.calendarWeeks) {
        var cell = '<th class="cw">&nbsp;</th>';
        html += cell;
        this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
      }
      while (dowCnt < this.o.weekStart + 7) {
        html += '<th class="dow">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
      }
      html += '</tr>';
      this.picker.find('.datepicker-days thead').append(html);
    },
    fillMonths: function () {
      var html = '', i = 0;
      while (i < 12) {
        html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
      }
      this.picker.find('.datepicker-months td').html(html);
    },
    setRange: function (range) {
      if (!range || !range.length)
        delete this.range;
      else
        this.range = $.map(range, function (d) {
          return d.valueOf();
        });
      this.fill();
    },
    getClassNames: function (date) {
      var cls = [], year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth(), currentDate = this.date.valueOf(), today = new Date();
      if (date.getUTCFullYear() < year || date.getUTCFullYear() == year && date.getUTCMonth() < month) {
        cls.push('old');
      } else if (date.getUTCFullYear() > year || date.getUTCFullYear() == year && date.getUTCMonth() > month) {
        cls.push('new');
      }
      if (this.o.todayHighlight && date.getUTCFullYear() == today.getFullYear() && date.getUTCMonth() == today.getMonth() && date.getUTCDate() == today.getDate()) {
        cls.push('today');
      }
      if (currentDate && date.valueOf() == currentDate) {
        cls.push('active');
      }
      if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate || $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
        cls.push('disabled');
      }
      if (this.range) {
        if (date > this.range[0] && date < this.range[this.range.length - 1]) {
          cls.push('range');
        }
        if ($.inArray(date.valueOf(), this.range) != -1) {
          cls.push('selected');
        }
      }
      return cls;
    },
    fill: function () {
      var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth(), startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity, startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity, endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity, endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity, currentDate = this.date && this.date.valueOf(), tooltip;
      this.picker.find('.datepicker-days thead th.datepicker-switch').text(dates[this.o.language].months[month] + ' ' + year);
      this.picker.find('tfoot th.today').text(dates[this.o.language].today).toggle(this.o.todayBtn !== false);
      this.picker.find('tfoot th.clear').text(dates[this.o.language].clear).toggle(this.o.clearBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0), day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.o.weekStart) {
          html.push('<tr>');
          if (this.o.calendarWeeks) {
            var ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 86400000), th = new Date(+ws + (7 + 4 - ws.getUTCDay()) % 7 * 86400000), yth = new Date(+(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 86400000), calWeek = (th - yth) / 86400000 / 7 + 1;
            html.push('<td class="cw">' + calWeek + '</td>');
          }
        }
        clsName = this.getClassNames(prevMonth);
        clsName.push('day');
        var before = this.o.beforeShowDay(prevMonth);
        if (before === undefined)
          before = {};
        else if (typeof before === 'boolean')
          before = { enabled: before };
        else if (typeof before === 'string')
          before = { classes: before };
        if (before.enabled === false)
          clsName.push('disabled');
        if (before.classes)
          clsName = clsName.concat(before.classes.split(/\s+/));
        if (before.tooltip)
          tooltip = before.tooltip;
        clsName = $.unique(clsName);
        html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() == this.o.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
      var currentYear = this.date && this.date.getUTCFullYear();
      var months = this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
      if (currentYear && currentYear == year) {
        months.eq(this.date.getUTCMonth()).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year == startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }
      if (year == endYear) {
        months.slice(endMonth + 1).addClass('disabled');
      }
      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.picker.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += '<span class="year' + (i == -1 ? ' old' : i == 10 ? ' new' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
    },
    updateNavArrows: function () {
      if (!this._allow_update)
        return;
      var d = new Date(this.viewDate), year = d.getUTCFullYear(), month = d.getUTCMonth();
      switch (this.viewMode) {
      case 0:
        if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
          this.picker.find('.prev').css({ visibility: 'hidden' });
        } else {
          this.picker.find('.prev').css({ visibility: 'visible' });
        }
        if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
          this.picker.find('.next').css({ visibility: 'hidden' });
        } else {
          this.picker.find('.next').css({ visibility: 'visible' });
        }
        break;
      case 1:
      case 2:
        if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
          this.picker.find('.prev').css({ visibility: 'hidden' });
        } else {
          this.picker.find('.prev').css({ visibility: 'visible' });
        }
        if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
          this.picker.find('.next').css({ visibility: 'hidden' });
        } else {
          this.picker.find('.next').css({ visibility: 'visible' });
        }
        break;
      }
    },
    click: function (e) {
      e.preventDefault();
      var target = $(e.target).closest('span, td, th');
      if (target.length == 1) {
        switch (target[0].nodeName.toLowerCase()) {
        case 'th':
          switch (target[0].className) {
          case 'datepicker-switch':
            this.showMode(1);
            break;
          case 'prev':
          case 'next':
            var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
            switch (this.viewMode) {
            case 0:
              this.viewDate = this.moveMonth(this.viewDate, dir);
              break;
            case 1:
            case 2:
              this.viewDate = this.moveYear(this.viewDate, dir);
              break;
            }
            this.fill();
            break;
          case 'today':
            var date = new Date();
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            this.showMode(-2);
            var which = this.o.todayBtn == 'linked' ? null : 'view';
            this._setDate(date, which);
            break;
          case 'clear':
            var element;
            if (this.isInput)
              element = this.element;
            else if (this.component)
              element = this.element.find('input');
            if (element)
              element.val('').change();
            this._trigger('changeDate');
            this.update();
            if (this.o.autoclose)
              this.hide();
            break;
          }
          break;
        case 'span':
          if (!target.is('.disabled')) {
            this.viewDate.setUTCDate(1);
            if (target.is('.month')) {
              var day = 1;
              var month = target.parent().find('span').index(target);
              var year = this.viewDate.getUTCFullYear();
              this.viewDate.setUTCMonth(month);
              this._trigger('changeMonth', this.viewDate);
              if (this.o.minViewMode === 1) {
                this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
              }
            } else {
              var year = parseInt(target.text(), 10) || 0;
              var day = 1;
              var month = 0;
              this.viewDate.setUTCFullYear(year);
              this._trigger('changeYear', this.viewDate);
              if (this.o.minViewMode === 2) {
                this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
              }
            }
            this.showMode(-1);
            this.fill();
          }
          break;
        case 'td':
          if (target.is('.day') && !target.is('.disabled')) {
            var day = parseInt(target.text(), 10) || 1;
            var year = this.viewDate.getUTCFullYear(), month = this.viewDate.getUTCMonth();
            if (target.is('.old')) {
              if (month === 0) {
                month = 11;
                year -= 1;
              } else {
                month -= 1;
              }
            } else if (target.is('.new')) {
              if (month == 11) {
                month = 0;
                year += 1;
              } else {
                month += 1;
              }
            }
            this._setDate(UTCDate(year, month, day, 0, 0, 0, 0));
          }
          break;
        }
      }
    },
    _setDate: function (date, which) {
      if (!which || which == 'date')
        this.date = new Date(date);
      if (!which || which == 'view')
        this.viewDate = new Date(date);
      this.fill();
      this.setValue();
      this._trigger('changeDate');
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element) {
        element.change();
        if (this.o.autoclose && (!which || which == 'date')) {
          this.hide();
        }
      }
    },
    moveMonth: function (date, dir) {
      if (!dir)
        return date;
      var new_date = new Date(date.valueOf()), day = new_date.getUTCDate(), month = new_date.getUTCMonth(), mag = Math.abs(dir), new_month, test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1) {
        test = dir == -1 ? function () {
          return new_date.getUTCMonth() == month;
        } : function () {
          return new_date.getUTCMonth() != new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        if (new_month < 0 || new_month > 11)
          new_month = (new_month + 12) % 12;
      } else {
        for (var i = 0; i < mag; i++)
          new_date = this.moveMonth(new_date, dir);
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function () {
          return new_month != new_date.getUTCMonth();
        };
      }
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },
    moveYear: function (date, dir) {
      return this.moveMonth(date, dir * 12);
    },
    dateWithinRange: function (date) {
      return date >= this.o.startDate && date <= this.o.endDate;
    },
    keydown: function (e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode == 27)
          this.show();
        return;
      }
      var dateChanged = false, dir, day, month, newDate, newViewDate;
      switch (e.keyCode) {
      case 27:
        this.hide();
        e.preventDefault();
        break;
      case 37:
      case 39:
        if (!this.o.keyboardNavigation)
          break;
        dir = e.keyCode == 37 ? -1 : 1;
        if (e.ctrlKey) {
          newDate = this.moveYear(this.date, dir);
          newViewDate = this.moveYear(this.viewDate, dir);
        } else if (e.shiftKey) {
          newDate = this.moveMonth(this.date, dir);
          newViewDate = this.moveMonth(this.viewDate, dir);
        } else {
          newDate = new Date(this.date);
          newDate.setUTCDate(this.date.getUTCDate() + dir);
          newViewDate = new Date(this.viewDate);
          newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir);
        }
        if (this.dateWithinRange(newDate)) {
          this.date = newDate;
          this.viewDate = newViewDate;
          this.setValue();
          this.update();
          e.preventDefault();
          dateChanged = true;
        }
        break;
      case 38:
      case 40:
        if (!this.o.keyboardNavigation)
          break;
        dir = e.keyCode == 38 ? -1 : 1;
        if (e.ctrlKey) {
          newDate = this.moveYear(this.date, dir);
          newViewDate = this.moveYear(this.viewDate, dir);
        } else if (e.shiftKey) {
          newDate = this.moveMonth(this.date, dir);
          newViewDate = this.moveMonth(this.viewDate, dir);
        } else {
          newDate = new Date(this.date);
          newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
          newViewDate = new Date(this.viewDate);
          newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7);
        }
        if (this.dateWithinRange(newDate)) {
          this.date = newDate;
          this.viewDate = newViewDate;
          this.setValue();
          this.update();
          e.preventDefault();
          dateChanged = true;
        }
        break;
      case 13:
        this.hide();
        e.preventDefault();
        break;
      case 9:
        this.hide();
        break;
      }
      if (dateChanged) {
        this._trigger('changeDate');
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
      }
    },
    showMode: function (dir) {
      if (dir) {
        this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
      }
      this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    }
  };
  var DateRangePicker = function (element, options) {
    this.element = $(element);
    this.inputs = $.map(options.inputs, function (i) {
      return i.jquery ? i[0] : i;
    });
    delete options.inputs;
    $(this.inputs).datepicker(options).bind('changeDate', $.proxy(this.dateUpdated, this));
    this.pickers = $.map(this.inputs, function (i) {
      return $(i).data('datepicker');
    });
    this.updateDates();
  };
  DateRangePicker.prototype = {
    updateDates: function () {
      this.dates = $.map(this.pickers, function (i) {
        return i.date;
      });
      this.updateRanges();
    },
    updateRanges: function () {
      var range = $.map(this.dates, function (d) {
          return d.valueOf();
        });
      $.each(this.pickers, function (i, p) {
        p.setRange(range);
      });
    },
    dateUpdated: function (e) {
      var dp = $(e.target).data('datepicker'), new_date = dp.getUTCDate(), i = $.inArray(e.target, this.inputs), l = this.inputs.length;
      if (i == -1)
        return;
      if (new_date < this.dates[i]) {
        while (i >= 0 && new_date < this.dates[i]) {
          this.pickers[i--].setUTCDate(new_date);
        }
      } else if (new_date > this.dates[i]) {
        while (i < l && new_date > this.dates[i]) {
          this.pickers[i++].setUTCDate(new_date);
        }
      }
      this.updateDates();
    },
    remove: function () {
      $.map(this.pickers, function (p) {
        p.remove();
      });
      delete this.element.data().datepicker;
    }
  };
  function opts_from_el(el, prefix) {
    var data = $(el).data(), out = {}, inkey, replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])'), prefix = new RegExp('^' + prefix.toLowerCase());
    for (var key in data)
      if (prefix.test(key)) {
        inkey = key.replace(replace, function (_, a) {
          return a.toLowerCase();
        });
        out[inkey] = data[key];
      }
    return out;
  }
  function opts_from_locale(lang) {
    var out = {};
    if (!dates[lang]) {
      lang = lang.split('-')[0];
      if (!dates[lang])
        return;
    }
    var d = dates[lang];
    $.each($.fn.datepicker.locale_opts, function (i, k) {
      if (k in d)
        out[k] = d[k];
    });
    return out;
  }
  var old = $.fn.datepicker;
  $.fn.datepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return, this_return;
    this.each(function () {
      var $this = $(this), data = $this.data('datepicker'), options = typeof option == 'object' && option;
      if (!data) {
        var elopts = opts_from_el(this, 'date'), xopts = $.extend({}, $.fn.datepicker.defaults, elopts, options), locopts = opts_from_locale(xopts.language), opts = $.extend({}, $.fn.datepicker.defaults, locopts, elopts, options);
        if ($this.is('.input-daterange') || opts.inputs) {
          var ropts = { inputs: opts.inputs || $this.find('input').toArray() };
          $this.data('datepicker', data = new DateRangePicker(this, $.extend(opts, ropts)));
        } else {
          $this.data('datepicker', data = new Datepicker(this, opts));
        }
      }
      if (typeof option == 'string' && typeof data[option] == 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined)
          return false;
      }
    });
    if (internal_return !== undefined)
      return internal_return;
    else
      return this;
  };
  $.fn.datepicker.defaults = {
    autoclose: false,
    beforeShowDay: $.noop,
    calendarWeeks: false,
    clearBtn: false,
    daysOfWeekDisabled: [],
    endDate: Infinity,
    forceParse: true,
    format: 'mm/dd/yyyy',
    keyboardNavigation: true,
    language: 'en',
    minViewMode: 0,
    rtl: false,
    startDate: -Infinity,
    startView: 0,
    todayBtn: false,
    todayHighlight: false,
    weekStart: 0
  };
  $.fn.datepicker.locale_opts = [
    'format',
    'rtl',
    'weekStart'
  ];
  $.fn.datepicker.Constructor = Datepicker;
  var dates = $.fn.datepicker.dates = {
      en: {
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        daysShort: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun'
        ],
        daysMin: [
          'Su',
          'Mo',
          'Tu',
          'We',
          'Th',
          'Fr',
          'Sa',
          'Su'
        ],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        today: 'Today',
        clear: 'Clear'
      }
    };
  var DPGlobal = {
      modes: [
        {
          clsName: 'days',
          navFnc: 'Month',
          navStep: 1
        },
        {
          clsName: 'months',
          navFnc: 'FullYear',
          navStep: 1
        },
        {
          clsName: 'years',
          navFnc: 'FullYear',
          navStep: 10
        }
      ],
      isLeapYear: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      },
      getDaysInMonth: function (year, month) {
        return [
          31,
          DPGlobal.isLeapYear(year) ? 29 : 28,
          31,
          30,
          31,
          30,
          31,
          31,
          30,
          31,
          30,
          31
        ][month];
      },
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
      parseFormat: function (format) {
        var separators = format.replace(this.validParts, '\0').split('\0'), parts = format.match(this.validParts);
        if (!separators || !separators.length || !parts || parts.length === 0) {
          throw new Error('Invalid date format.');
        }
        return {
          separators: separators,
          parts: parts
        };
      },
      parseDate: function (date, format, language) {
        if (date instanceof Date)
          return date;
        if (typeof format === 'string')
          format = DPGlobal.parseFormat(format);
        if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
          var part_re = /([\-+]\d+)([dmwy])/, parts = date.match(/([\-+]\d+)([dmwy])/g), part, dir;
          date = new Date();
          for (var i = 0; i < parts.length; i++) {
            part = part_re.exec(parts[i]);
            dir = parseInt(part[1]);
            switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
              break;
            }
          }
          return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
        }
        var parts = date && date.match(this.nonpunctuation) || [], date = new Date(), parsed = {}, setters_order = [
            'yyyy',
            'yy',
            'M',
            'MM',
            'm',
            'mm',
            'd',
            'dd'
          ], setters_map = {
            yyyy: function (d, v) {
              return d.setUTCFullYear(v);
            },
            yy: function (d, v) {
              return d.setUTCFullYear(2000 + v);
            },
            m: function (d, v) {
              v -= 1;
              while (v < 0)
                v += 12;
              v %= 12;
              d.setUTCMonth(v);
              while (d.getUTCMonth() != v)
                d.setUTCDate(d.getUTCDate() - 1);
              return d;
            },
            d: function (d, v) {
              return d.setUTCDate(v);
            }
          }, val, filtered, part;
        setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
        setters_map['dd'] = setters_map['d'];
        date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
        var fparts = format.parts.slice();
        if (parts.length != fparts.length) {
          fparts = $(fparts).filter(function (i, p) {
            return $.inArray(p, setters_order) !== -1;
          }).toArray();
        }
        if (parts.length == fparts.length) {
          for (var i = 0, cnt = fparts.length; i < cnt; i++) {
            val = parseInt(parts[i], 10);
            part = fparts[i];
            if (isNaN(val)) {
              switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
              }
            }
            parsed[part] = val;
          }
          for (var i = 0, s; i < setters_order.length; i++) {
            s = setters_order[i];
            if (s in parsed && !isNaN(parsed[s]))
              setters_map[s](date, parsed[s]);
          }
        }
        return date;
      },
      formatDate: function (date, format, language) {
        if (typeof format === 'string')
          format = DPGlobal.parseFormat(format);
        var val = {
            d: date.getUTCDate(),
            D: dates[language].daysShort[date.getUTCDay()],
            DD: dates[language].days[date.getUTCDay()],
            m: date.getUTCMonth() + 1,
            M: dates[language].monthsShort[date.getUTCMonth()],
            MM: dates[language].months[date.getUTCMonth()],
            yy: date.getUTCFullYear().toString().substring(2),
            yyyy: date.getUTCFullYear()
          };
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
        var date = [], seps = $.extend([], format.separators);
        for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
          if (seps.length)
            date.push(seps.shift());
          date.push(val[format.parts[i]]);
        }
        return date.join('');
      },
      headTemplate: '<thead>' + '<tr>' + '<th class="prev"><i class="icon-arrow-left"/></th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next"><i class="icon-arrow-right"/></th>' + '</tr>' + '</thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
  DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  $.fn.datepicker.DPGlobal = DPGlobal;
  $.fn.datepicker.noConflict = function () {
    $.fn.datepicker = old;
    return this;
  };
  $(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
    var $this = $(this);
    if ($this.data('datepicker'))
      return;
    e.preventDefault();
    $this.datepicker('show');
  });
  $(function () {
    $('[data-provide="datepicker-inline"]').datepicker();
  });
}(window.jQuery));
(function ($, window, document, undefined) {
  'use strict';
  var Timepicker = function (element, options) {
    this.widget = '';
    this.$element = $(element);
    this.defaultTime = options.defaultTime;
    this.disableFocus = options.disableFocus;
    this.isOpen = options.isOpen;
    this.minuteStep = options.minuteStep;
    this.modalBackdrop = options.modalBackdrop;
    this.secondStep = options.secondStep;
    this.showInputs = options.showInputs;
    this.showMeridian = options.showMeridian;
    this.showSeconds = options.showSeconds;
    this.template = options.template;
    this.appendWidgetTo = options.appendWidgetTo;
    this._init();
  };
  Timepicker.prototype = {
    constructor: Timepicker,
    _init: function () {
      var self = this;
      if (this.$element.parent().hasClass('input-append') || this.$element.parent().hasClass('input-prepend')) {
        this.$element.parent('.input-append, .input-prepend').find('.add-on').on({ 'click.timepicker': $.proxy(this.showWidget, this) });
        this.$element.on({
          'focus.timepicker': $.proxy(this.highlightUnit, this),
          'click.timepicker': $.proxy(this.highlightUnit, this),
          'keydown.timepicker': $.proxy(this.elementKeydown, this),
          'blur.timepicker': $.proxy(this.blurElement, this)
        });
      } else {
        if (this.template) {
          this.$element.on({
            'focus.timepicker': $.proxy(this.showWidget, this),
            'click.timepicker': $.proxy(this.showWidget, this),
            'blur.timepicker': $.proxy(this.blurElement, this)
          });
        } else {
          this.$element.on({
            'focus.timepicker': $.proxy(this.highlightUnit, this),
            'click.timepicker': $.proxy(this.highlightUnit, this),
            'keydown.timepicker': $.proxy(this.elementKeydown, this),
            'blur.timepicker': $.proxy(this.blurElement, this)
          });
        }
      }
      if (this.template !== false) {
        this.$widget = $(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on('click', $.proxy(this.widgetClick, this));
      } else {
        this.$widget = false;
      }
      if (this.showInputs && this.$widget !== false) {
        this.$widget.find('input').each(function () {
          $(this).on({
            'click.timepicker': function () {
              $(this).select();
            },
            'keydown.timepicker': $.proxy(self.widgetKeydown, self)
          });
        });
      }
      this.setDefaultTime(this.defaultTime);
    },
    blurElement: function () {
      this.highlightedUnit = undefined;
      this.updateFromElementVal();
    },
    decrementHour: function () {
      if (this.showMeridian) {
        if (this.hour === 1) {
          this.hour = 12;
        } else if (this.hour === 12) {
          this.hour--;
          return this.toggleMeridian();
        } else if (this.hour === 0) {
          this.hour = 11;
          return this.toggleMeridian();
        } else {
          this.hour--;
        }
      } else {
        if (this.hour === 0) {
          this.hour = 23;
        } else {
          this.hour--;
        }
      }
      this.update();
    },
    decrementMinute: function (step) {
      var newVal;
      if (step) {
        newVal = this.minute - step;
      } else {
        newVal = this.minute - this.minuteStep;
      }
      if (newVal < 0) {
        this.decrementHour();
        this.minute = newVal + 60;
      } else {
        this.minute = newVal;
      }
      this.update();
    },
    decrementSecond: function () {
      var newVal = this.second - this.secondStep;
      if (newVal < 0) {
        this.decrementMinute(true);
        this.second = newVal + 60;
      } else {
        this.second = newVal;
      }
      this.update();
    },
    elementKeydown: function (e) {
      switch (e.keyCode) {
      case 9:
        this.updateFromElementVal();
        switch (this.highlightedUnit) {
        case 'hour':
          e.preventDefault();
          this.highlightNextUnit();
          break;
        case 'minute':
          if (this.showMeridian || this.showSeconds) {
            e.preventDefault();
            this.highlightNextUnit();
          }
          break;
        case 'second':
          if (this.showMeridian) {
            e.preventDefault();
            this.highlightNextUnit();
          }
          break;
        }
        break;
      case 27:
        this.updateFromElementVal();
        break;
      case 37:
        e.preventDefault();
        this.highlightPrevUnit();
        this.updateFromElementVal();
        break;
      case 38:
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.incrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.incrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.incrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }
        break;
      case 39:
        e.preventDefault();
        this.updateFromElementVal();
        this.highlightNextUnit();
        break;
      case 40:
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.decrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.decrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.decrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }
        break;
      }
    },
    formatTime: function (hour, minute, second, meridian) {
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      return hour + ':' + minute + (this.showSeconds ? ':' + second : '') + (this.showMeridian ? ' ' + meridian : '');
    },
    getCursorPosition: function () {
      var input = this.$element.get(0);
      if ('selectionStart' in input) {
        return input.selectionStart;
      } else if (document.selection) {
        input.focus();
        var sel = document.selection.createRange(), selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
      }
    },
    getTemplate: function () {
      var template, hourTemplate, minuteTemplate, secondTemplate, meridianTemplate, templateContent;
      if (this.showInputs) {
        hourTemplate = '<input type="text" name="hour" class="bootstrap-timepicker-hour" maxlength="2"/>';
        minuteTemplate = '<input type="text" name="minute" class="bootstrap-timepicker-minute" maxlength="2"/>';
        secondTemplate = '<input type="text" name="second" class="bootstrap-timepicker-second" maxlength="2"/>';
        meridianTemplate = '<input type="text" name="meridian" class="bootstrap-timepicker-meridian" maxlength="2"/>';
      } else {
        hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
        minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
        secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
        meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
      }
      templateContent = '<table>' + '<tr>' + '<td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td>' + '<td class="separator">&nbsp;</td>' + '<td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td>' + '<td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td>' + '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>' : '') + '</tr>' + '<tr>' + '<td>' + hourTemplate + '</td> ' + '<td class="separator">:</td>' + '<td>' + minuteTemplate + '</td> ' + (this.showSeconds ? '<td class="separator">:</td>' + '<td>' + secondTemplate + '</td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td>' + '<td>' + meridianTemplate + '</td>' : '') + '</tr>' + '<tr>' + '<td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td>' + '<td class="separator"></td>' + '<td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td>' + '<td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td>' + '<td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>' : '') + '</tr>' + '</table>';
      switch (this.template) {
      case 'modal':
        template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? 'true' : 'false') + '">' + '<div class="modal-header">' + '<a href="#" class="close" data-dismiss="modal">\xd7</a>' + '<h3>Pick a Time</h3>' + '</div>' + '<div class="modal-content">' + templateContent + '</div>' + '<div class="modal-footer">' + '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>' + '</div>' + '</div>';
        break;
      case 'dropdown':
        template = '<div class="bootstrap-timepicker-widget dropdown-menu">' + templateContent + '</div>';
        break;
      }
      return template;
    },
    getTime: function () {
      return this.formatTime(this.hour, this.minute, this.second, this.meridian);
    },
    hideWidget: function () {
      if (this.isOpen === false) {
        return;
      }
      if (this.showInputs) {
        this.updateFromWidgetInputs();
      }
      this.$element.trigger({
        'type': 'hide.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
      if (this.template === 'modal') {
        this.$widget.modal('hide');
      } else {
        this.$widget.removeClass('open');
      }
      $(document).off('mousedown.timepicker');
      this.isOpen = false;
    },
    highlightUnit: function () {
      this.position = this.getCursorPosition();
      if (this.position >= 0 && this.position <= 2) {
        this.highlightHour();
      } else if (this.position >= 3 && this.position <= 5) {
        this.highlightMinute();
      } else if (this.position >= 6 && this.position <= 8) {
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMeridian();
        }
      } else if (this.position >= 9 && this.position <= 11) {
        this.highlightMeridian();
      }
    },
    highlightNextUnit: function () {
      switch (this.highlightedUnit) {
      case 'hour':
        this.highlightMinute();
        break;
      case 'minute':
        if (this.showSeconds) {
          this.highlightSecond();
        } else if (this.showMeridian) {
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'second':
        if (this.showMeridian) {
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'meridian':
        this.highlightHour();
        break;
      }
    },
    highlightPrevUnit: function () {
      switch (this.highlightedUnit) {
      case 'hour':
        this.highlightMeridian();
        break;
      case 'minute':
        this.highlightHour();
        break;
      case 'second':
        this.highlightMinute();
        break;
      case 'meridian':
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      }
    },
    highlightHour: function () {
      var $element = this.$element.get(0);
      this.highlightedUnit = 'hour';
      if ($element.setSelectionRange) {
        setTimeout(function () {
          $element.setSelectionRange(0, 2);
        }, 0);
      }
    },
    highlightMinute: function () {
      var $element = this.$element.get(0);
      this.highlightedUnit = 'minute';
      if ($element.setSelectionRange) {
        setTimeout(function () {
          $element.setSelectionRange(3, 5);
        }, 0);
      }
    },
    highlightSecond: function () {
      var $element = this.$element.get(0);
      this.highlightedUnit = 'second';
      if ($element.setSelectionRange) {
        setTimeout(function () {
          $element.setSelectionRange(6, 8);
        }, 0);
      }
    },
    highlightMeridian: function () {
      var $element = this.$element.get(0);
      this.highlightedUnit = 'meridian';
      if ($element.setSelectionRange) {
        if (this.showSeconds) {
          setTimeout(function () {
            $element.setSelectionRange(9, 11);
          }, 0);
        } else {
          setTimeout(function () {
            $element.setSelectionRange(6, 8);
          }, 0);
        }
      }
    },
    incrementHour: function () {
      if (this.showMeridian) {
        if (this.hour === 11) {
          this.hour++;
          return this.toggleMeridian();
        } else if (this.hour === 12) {
          this.hour = 0;
        }
      }
      if (this.hour === 23) {
        this.hour = 0;
        return;
      }
      this.hour++;
      this.update();
    },
    incrementMinute: function (step) {
      var newVal;
      if (step) {
        newVal = this.minute + step;
      } else {
        newVal = this.minute + this.minuteStep - this.minute % this.minuteStep;
      }
      if (newVal > 59) {
        this.incrementHour();
        this.minute = newVal - 60;
      } else {
        this.minute = newVal;
      }
      this.update();
    },
    incrementSecond: function () {
      var newVal = this.second + this.secondStep - this.second % this.secondStep;
      if (newVal > 59) {
        this.incrementMinute(true);
        this.second = newVal - 60;
      } else {
        this.second = newVal;
      }
      this.update();
    },
    remove: function () {
      $('document').off('.timepicker');
      if (this.$widget) {
        this.$widget.remove();
      }
      delete this.$element.data().timepicker;
    },
    setDefaultTime: function (defaultTime) {
      if (!this.$element.val()) {
        if (defaultTime === 'current') {
          var dTime = new Date(), hours = dTime.getHours(), minutes = Math.floor(dTime.getMinutes() / this.minuteStep) * this.minuteStep, seconds = Math.floor(dTime.getSeconds() / this.secondStep) * this.secondStep, meridian = 'AM';
          if (this.showMeridian) {
            if (hours === 0) {
              hours = 12;
            } else if (hours >= 12) {
              if (hours > 12) {
                hours = hours - 12;
              }
              meridian = 'PM';
            } else {
              meridian = 'AM';
            }
          }
          this.hour = hours;
          this.minute = minutes;
          this.second = seconds;
          this.meridian = meridian;
          this.update();
        } else if (defaultTime === false) {
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
          this.meridian = 'AM';
        } else {
          this.setTime(defaultTime);
        }
      } else {
        this.updateFromElementVal();
      }
    },
    setTime: function (time) {
      var arr, timeArray;
      if (this.showMeridian) {
        arr = time.split(' ');
        timeArray = arr[0].split(':');
        this.meridian = arr[1];
      } else {
        timeArray = time.split(':');
      }
      this.hour = parseInt(timeArray[0], 10);
      this.minute = parseInt(timeArray[1], 10);
      this.second = parseInt(timeArray[2], 10);
      if (isNaN(this.hour)) {
        this.hour = 0;
      }
      if (isNaN(this.minute)) {
        this.minute = 0;
      }
      if (this.showMeridian) {
        if (this.hour > 12) {
          this.hour = 12;
        } else if (this.hour < 1) {
          this.hour = 12;
        }
        if (this.meridian === 'am' || this.meridian === 'a') {
          this.meridian = 'AM';
        } else if (this.meridian === 'pm' || this.meridian === 'p') {
          this.meridian = 'PM';
        }
        if (this.meridian !== 'AM' && this.meridian !== 'PM') {
          this.meridian = 'AM';
        }
      } else {
        if (this.hour >= 24) {
          this.hour = 23;
        } else if (this.hour < 0) {
          this.hour = 0;
        }
      }
      if (this.minute < 0) {
        this.minute = 0;
      } else if (this.minute >= 60) {
        this.minute = 59;
      }
      if (this.showSeconds) {
        if (isNaN(this.second)) {
          this.second = 0;
        } else if (this.second < 0) {
          this.second = 0;
        } else if (this.second >= 60) {
          this.second = 59;
        }
      }
      this.update();
    },
    showWidget: function () {
      if (this.isOpen) {
        return;
      }
      if (this.$element.is(':disabled')) {
        return;
      }
      var self = this;
      $(document).on('mousedown.timepicker', function (e) {
        if ($(e.target).closest('.bootstrap-timepicker-widget').length === 0) {
          self.hideWidget();
        }
      });
      this.$element.trigger({
        'type': 'show.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
      if (this.disableFocus) {
        this.$element.blur();
      }
      this.updateFromElementVal();
      if (this.template === 'modal') {
        this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
      } else {
        if (this.isOpen === false) {
          this.$widget.addClass('open');
        }
      }
      this.isOpen = true;
    },
    toggleMeridian: function () {
      this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';
      this.update();
    },
    update: function () {
      this.$element.trigger({
        'type': 'changeTime.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
      this.updateElement();
      this.updateWidget();
    },
    updateElement: function () {
      this.$element.val(this.getTime()).change();
    },
    updateFromElementVal: function () {
      var val = this.$element.val();
      if (val) {
        this.setTime(val);
      }
    },
    updateWidget: function () {
      if (this.$widget === false) {
        return;
      }
      var hour = this.hour < 10 ? '0' + this.hour : this.hour, minute = this.minute < 10 ? '0' + this.minute : this.minute, second = this.second < 10 ? '0' + this.second : this.second;
      if (this.showInputs) {
        this.$widget.find('input.bootstrap-timepicker-hour').val(hour);
        this.$widget.find('input.bootstrap-timepicker-minute').val(minute);
        if (this.showSeconds) {
          this.$widget.find('input.bootstrap-timepicker-second').val(second);
        }
        if (this.showMeridian) {
          this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
        }
      } else {
        this.$widget.find('span.bootstrap-timepicker-hour').text(hour);
        this.$widget.find('span.bootstrap-timepicker-minute').text(minute);
        if (this.showSeconds) {
          this.$widget.find('span.bootstrap-timepicker-second').text(second);
        }
        if (this.showMeridian) {
          this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
        }
      }
    },
    updateFromWidgetInputs: function () {
      if (this.$widget === false) {
        return;
      }
      var time = $('input.bootstrap-timepicker-hour', this.$widget).val() + ':' + $('input.bootstrap-timepicker-minute', this.$widget).val() + (this.showSeconds ? ':' + $('input.bootstrap-timepicker-second', this.$widget).val() : '') + (this.showMeridian ? ' ' + $('input.bootstrap-timepicker-meridian', this.$widget).val() : '');
      this.setTime(time);
    },
    widgetClick: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var action = $(e.target).closest('a').data('action');
      if (action) {
        this[action]();
      }
    },
    widgetKeydown: function (e) {
      var $input = $(e.target).closest('input'), name = $input.attr('name');
      switch (e.keyCode) {
      case 9:
        if (this.showMeridian) {
          if (name === 'meridian') {
            return this.hideWidget();
          }
        } else {
          if (this.showSeconds) {
            if (name === 'second') {
              return this.hideWidget();
            }
          } else {
            if (name === 'minute') {
              return this.hideWidget();
            }
          }
        }
        this.updateFromWidgetInputs();
        break;
      case 27:
        this.hideWidget();
        break;
      case 38:
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.incrementHour();
          break;
        case 'minute':
          this.incrementMinute();
          break;
        case 'second':
          this.incrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        break;
      case 40:
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.decrementHour();
          break;
        case 'minute':
          this.decrementMinute();
          break;
        case 'second':
          this.decrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        break;
      }
    }
  };
  $.fn.timepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function () {
      var $this = $(this), data = $this.data('timepicker'), options = typeof option === 'object' && option;
      if (!data) {
        $this.data('timepicker', data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data())));
      }
      if (typeof option === 'string') {
        data[option].apply(data, args);
      }
    });
  };
  $.fn.timepicker.defaults = {
    defaultTime: 'current',
    disableFocus: false,
    isOpen: false,
    minuteStep: 15,
    modalBackdrop: false,
    secondStep: 15,
    showSeconds: false,
    showInputs: true,
    showMeridian: true,
    template: 'dropdown',
    appendWidgetTo: '.bootstrap-timepicker'
  };
  $.fn.timepicker.Constructor = Timepicker;
}(jQuery, window, document));
(function ($, w, undefined) {
  w.footable = {
    options: {
      delay: 100,
      breakpoints: {
        phone: 480,
        tablet: 1024
      },
      parsers: {
        alpha: function (cell) {
          return $(cell).data('value') || $.trim($(cell).text());
        }
      },
      calculateWidthAndHeightOverride: null,
      toggleSelector: ' > tbody > tr:not(.footable-row-detail)',
      columnDataSelector: '> thead > tr:last-child > th, > thead > tr:last-child > td',
      createDetail: function (element, data) {
        var groups = {
            '_none': {
              'name': null,
              'data': []
            }
          };
        for (var i = 0; i < data.length; i++) {
          var groupid = data[i].group;
          if (groupid != null) {
            if (!(groupid in groups))
              groups[groupid] = {
                'name': data[i].groupName,
                'data': []
              };
            groups[groupid].data.push(data[i]);
          } else {
            groups._none.data.push(data[i]);
          }
        }
        for (var group in groups) {
          if (groups[group].data.length == 0)
            continue;
          if (group != '_none')
            element.append('<h4>' + groups[group].name + '</h4>');
          for (var j = 0; j < groups[group].data.length; j++) {
            element.append('<div><strong>' + groups[group].data[j].name + '</strong> : ' + groups[group].data[j].display + '</div>');
          }
        }
      },
      classes: {
        loading: 'footable-loading',
        loaded: 'footable-loaded',
        sorted: 'footable-sorted',
        descending: 'footable-sorted-desc',
        indicator: 'footable-sort-indicator'
      },
      debug: false
    },
    version: {
      major: 0,
      minor: 5,
      toString: function () {
        return w.footable.version.major + '.' + w.footable.version.minor;
      },
      parse: function (str) {
        version = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);
        return {
          major: parseInt(version[1]) || 0,
          minor: parseInt(version[2]) || 0,
          patch: parseInt(version[3]) || 0
        };
      }
    },
    plugins: {
      _validate: function (plugin) {
        if (typeof plugin['name'] !== 'string') {
          if (w.footable.options.debug == true)
            console.error('Validation failed, plugin does not implement a string property called "name".', plugin);
          return false;
        }
        if (!$.isFunction(plugin['init'])) {
          if (w.footable.options.debug == true)
            console.error('Validation failed, plugin "' + plugin['name'] + '" does not implement a function called "init".', plugin);
          return false;
        }
        if (w.footable.options.debug == true)
          console.log('Validation succeeded for plugin "' + plugin['name'] + '".', plugin);
        return true;
      },
      registered: [],
      register: function (plugin, options) {
        if (w.footable.plugins._validate(plugin)) {
          w.footable.plugins.registered.push(plugin);
          if (options != undefined && typeof options === 'object')
            $.extend(true, w.footable.options, options);
          if (w.footable.options.debug == true)
            console.log('Plugin "' + plugin['name'] + '" has been registered with the Foobox.', plugin);
        }
      },
      init: function (instance) {
        for (var i = 0; i < w.footable.plugins.registered.length; i++) {
          try {
            w.footable.plugins.registered[i]['init'](instance);
          } catch (err) {
            if (w.footable.options.debug == true)
              console.error(err);
          }
        }
      }
    }
  };
  var instanceCount = 0;
  $.fn.footable = function (options) {
    options = options || {};
    var o = $.extend(true, {}, w.footable.options, options);
    return this.each(function () {
      instanceCount++;
      this.footable = new Footable(this, o, instanceCount);
    });
  };
  function Timer() {
    var t = this;
    t.id = null;
    t.busy = false;
    t.start = function (code, milliseconds) {
      if (t.busy) {
        return;
      }
      t.stop();
      t.id = setTimeout(function () {
        code();
        t.id = null;
        t.busy = false;
      }, milliseconds);
      t.busy = true;
    };
    t.stop = function () {
      if (t.id != null) {
        clearTimeout(t.id);
        t.id = null;
        t.busy = false;
      }
    };
  }
  ;
  function Footable(t, o, id) {
    var ft = this;
    ft.id = id;
    ft.table = t;
    ft.options = o;
    ft.breakpoints = [];
    ft.breakpointNames = '';
    ft.columns = {};
    var opt = ft.options;
    var cls = opt.classes;
    var indexOffset = 0;
    ft.timers = {
      resize: new Timer(),
      register: function (name) {
        ft.timers[name] = new Timer();
        return ft.timers[name];
      }
    };
    w.footable.plugins.init(ft);
    ft.init = function () {
      var $window = $(w), $table = $(ft.table);
      if ($table.hasClass(cls.loaded)) {
        ft.raise('footable_already_initialized');
        return;
      }
      $table.addClass(cls.loading);
      $table.find(opt.columnDataSelector).each(function () {
        var data = ft.getColumnData(this);
        ft.columns[data.index] = data;
        if (data.className != null) {
          var selector = '', first = true;
          $.each(data.matches, function (m, match) {
            if (!first) {
              selector += ', ';
            }
            selector += '> tbody > tr:not(.footable-row-detail) > td:nth-child(' + (parseInt(match) + 1) + ')';
            first = false;
          });
          $table.find(selector).not('.footable-cell-detail').addClass(data.className);
        }
      });
      for (var name in opt.breakpoints) {
        ft.breakpoints.push({
          'name': name,
          'width': opt.breakpoints[name]
        });
        ft.breakpointNames += name + ' ';
      }
      ft.breakpoints.sort(function (a, b) {
        return a['width'] - b['width'];
      });
      ft.bindToggleSelectors();
      ft.raise('footable_initializing');
      $table.bind('footable_initialized', function () {
        ft.resize();
        $table.removeClass(cls.loading);
        $table.find('[data-init="hide"]').hide();
        $table.find('[data-init="show"]').show();
        $table.addClass(cls.loaded);
      });
      $table.bind('footable_resize', function () {
        ft.resize();
      });
      $window.bind('resize.footable', function () {
        ft.timers.resize.stop();
        ft.timers.resize.start(function () {
          ft.resize();
        }, opt.delay);
      });
      ft.raise('footable_initialized');
    };
    ft.bindToggleSelectors = function () {
      var $table = $(ft.table);
      $table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable', function (e) {
        if ($table.is('.breakpoint') && $(e.target).is('td')) {
          var $row = $(this).is('tr') ? $(this) : $(this).parents('tr:first');
          ft.toggleDetail($row.get(0));
        }
      });
    };
    ft.parse = function (cell, column) {
      var parser = opt.parsers[column.type] || opt.parsers.alpha;
      return parser(cell);
    };
    ft.getColumnData = function (th) {
      var $th = $(th), hide = $th.data('hide'), index = $th.index();
      hide = hide || '';
      hide = hide.split(',');
      var data = {
          'index': index,
          'hide': {},
          'type': $th.data('type') || 'alpha',
          'name': $th.data('name') || $.trim($th.text()),
          'ignore': $th.data('ignore') || false,
          'className': $th.data('class') || null,
          'matches': [],
          'names': {},
          'group': $th.data('group') || null,
          'groupName': null
        };
      if (data.group != null) {
        var $group = $(ft.table).find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]').first();
        data.groupName = ft.parse($group, { 'type': 'alpha' });
      }
      var pcolspan = parseInt($th.prev().attr('colspan') || 0);
      indexOffset += pcolspan > 1 ? pcolspan - 1 : 0;
      var colspan = parseInt($th.attr('colspan') || 0), curindex = data.index + indexOffset;
      if (colspan > 1) {
        var names = $th.data('names');
        names = names || '';
        names = names.split(',');
        for (var i = 0; i < colspan; i++) {
          data.matches.push(i + curindex);
          if (i < names.length)
            data.names[i + curindex] = names[i];
        }
      } else {
        data.matches.push(curindex);
      }
      data.hide['default'] = $th.data('hide') === 'all' || $.inArray('default', hide) >= 0;
      for (var name in opt.breakpoints) {
        data.hide[name] = $th.data('hide') === 'all' || $.inArray(name, hide) >= 0;
      }
      var e = ft.raise('footable_column_data', {
          'column': {
            'data': data,
            'th': th
          }
        });
      return e.column.data;
    };
    ft.getViewportWidth = function () {
      return window.innerWidth || (document.body ? document.body.offsetWidth : 0);
    };
    ft.getViewportHeight = function () {
      return window.innerHeight || (document.body ? document.body.offsetHeight : 0);
    };
    ft.calculateWidthAndHeight = function ($table, info) {
      if (jQuery.isFunction(opt.calculateWidthAndHeightOverride)) {
        return opt.calculateWidthAndHeightOverride($table, info);
      }
      if (info.viewportWidth < info.width)
        info.width = info.viewportWidth;
      if (info.viewportHeight < info.height)
        info.height = info.viewportHeight;
      return info;
    };
    ft.hasBreakpointColumn = function (breakpoint) {
      for (var c in ft.columns) {
        if (ft.columns[c].hide[breakpoint]) {
          return true;
        }
      }
      return false;
    };
    ft.resize = function () {
      var $table = $(ft.table);
      var info = {
          'width': $table.width(),
          'height': $table.height(),
          'viewportWidth': ft.getViewportWidth(),
          'viewportHeight': ft.getViewportHeight(),
          'orientation': null
        };
      info.orientation = info.viewportWidth > info.viewportHeight ? 'landscape' : 'portrait';
      info = ft.calculateWidthAndHeight($table, info);
      var pinfo = $table.data('footable_info');
      $table.data('footable_info', info);
      ft.raise('footable_resizing', {
        'old': pinfo,
        'info': info
      });
      if (!pinfo || (pinfo && pinfo.width && pinfo.width != info.width || pinfo && pinfo.height && pinfo.height != info.height)) {
        var current = null, breakpoint;
        for (var i = 0; i < ft.breakpoints.length; i++) {
          breakpoint = ft.breakpoints[i];
          if (breakpoint && breakpoint.width && info.width <= breakpoint.width) {
            current = breakpoint;
            break;
          }
        }
        var breakpointName = current == null ? 'default' : current['name'];
        var hasBreakpointFired = ft.hasBreakpointColumn(breakpointName);
        $table.removeClass('default breakpoint').removeClass(ft.breakpointNames).addClass(breakpointName + (hasBreakpointFired ? ' breakpoint' : '')).find('> thead > tr:last-child > th').each(function () {
          var data = ft.columns[$(this).index()], selector = '', first = true;
          $.each(data.matches, function (m, match) {
            if (!first) {
              selector += ', ';
            }
            var count = match + 1;
            selector += '> tbody > tr:not(.footable-row-detail) > td:nth-child(' + count + ')';
            selector += ', > tfoot > tr:not(.footable-row-detail) > td:nth-child(' + count + ')';
            selector += ', > colgroup > col:nth-child(' + count + ')';
            first = false;
          });
          selector += ', > thead > tr[data-group-row="true"] > th[data-group="' + data.group + '"]';
          var $column = $table.find(selector).add(this);
          if (data.hide[breakpointName] == false)
            $column.show();
          else
            $column.hide();
          if ($table.find('> thead > tr.footable-group-row').length == 1) {
            var $groupcols = $table.find('> thead > tr:last-child > th[data-group="' + data.group + '"]:visible, > thead > tr:last-child > th[data-group="' + data.group + '"]:visible'), $group = $table.find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]'), groupspan = 0;
            $.each($groupcols, function () {
              groupspan += parseInt($(this).attr('colspan') || 1);
            });
            if (groupspan > 0)
              $group.attr('colspan', groupspan).show();
            else
              $group.hide();
          }
        }).end().find('> tbody > tr.footable-detail-show').each(function () {
          ft.createOrUpdateDetailRow(this);
        });
        $table.find('> tbody > tr.footable-detail-show:visible').each(function () {
          var $next = $(this).next();
          if ($next.hasClass('footable-row-detail')) {
            if (breakpointName == 'default' && !hasBreakpointFired)
              $next.hide();
            else
              $next.show();
          }
        });
        $table.find('> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column').removeClass('footable-last-column');
        $table.find('> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column').removeClass('footable-first-column');
        $table.find('> thead > tr, > tbody > tr').find('> th:visible:last, > td:visible:last').addClass('footable-last-column').end().find('> th:visible:first, > td:visible:first').addClass('footable-first-column');
        ft.raise('footable_breakpoint_' + breakpointName, { 'info': info });
      }
      ft.raise('footable_resized', {
        'old': pinfo,
        'info': info
      });
    };
    ft.toggleDetail = function (actualRow) {
      var $row = $(actualRow), created = ft.createOrUpdateDetailRow($row.get(0)), $next = $row.next();
      if (!created && $next.is(':visible')) {
        $row.removeClass('footable-detail-show');
        if ($next.hasClass('footable-row-detail'))
          $next.hide();
      } else {
        $row.addClass('footable-detail-show');
        $next.show();
      }
    };
    ft.getColumnFromTdIndex = function (index) {
      var result = null;
      for (var column in ft.columns) {
        if ($.inArray(index, ft.columns[column].matches) >= 0) {
          result = ft.columns[column];
          break;
        }
      }
      return result;
    };
    ft.createOrUpdateDetailRow = function (actualRow) {
      var $row = $(actualRow), $next = $row.next(), $detail, values = [];
      if ($row.is(':hidden'))
        return false;
      ft.raise('footable_rowdetailupdated', {
        'row': $row,
        'detail': $next
      });
      $row.find('> td:hidden').each(function () {
        var index = $(this).index(), column = ft.getColumnFromTdIndex(index), name = column.name;
        if (column.ignore == true)
          return true;
        if (index in column.names)
          name = column.names[index];
        values.push({
          'name': name,
          'value': ft.parse(this, column),
          'display': $.trim($(this).html()),
          'group': column.group,
          'groupName': column.groupName
        });
        return true;
      });
      if (values.length == 0)
        return false;
      var colspan = $row.find('> td:visible').length;
      var exists = $next.hasClass('footable-row-detail');
      if (!exists) {
        $next = $('<tr class="footable-row-detail"><td class="footable-cell-detail"><div class="footable-row-detail-inner"></div></td></tr>');
        $row.after($next);
      }
      $next.find('> td:first').attr('colspan', colspan);
      $detail = $next.find('.footable-row-detail-inner').empty();
      opt.createDetail($detail, values);
      return !exists;
    };
    ft.raise = function (eventName, args) {
      args = args || {};
      var def = { 'ft': ft };
      $.extend(true, def, args);
      var e = $.Event(eventName, def);
      if (!e.ft) {
        $.extend(true, e, def);
      }
      $(ft.table).trigger(e);
      return e;
    };
    ft.init();
    return ft;
  }
  ;
}(jQuery, window));
d3 = function () {
  var d3 = { version: '3.1.10' };
  if (!Date.now)
    Date.now = function () {
      return +new Date();
    };
  var d3_document = document, d3_window = window;
  try {
    d3_document.createElement('div').style.setProperty('opacity', 0, '');
  } catch (error) {
    var d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_style_prototype.setProperty = function (name, value, priority) {
      d3_style_setProperty.call(this, name, value + '', priority);
    };
  }
  d3.ascending = function (a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  d3.descending = function (a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function (array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a))
        a = undefined;
      while (++i < n)
        if ((b = array[i]) != null && a > b)
          a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a))
        a = undefined;
      while (++i < n)
        if ((b = f.call(array, array[i], i)) != null && a > b)
          a = b;
    }
    return a;
  };
  d3.max = function (array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a))
        a = undefined;
      while (++i < n)
        if ((b = array[i]) != null && b > a)
          a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a))
        a = undefined;
      while (++i < n)
        if ((b = f.call(array, array[i], i)) != null && b > a)
          a = b;
    }
    return a;
  };
  d3.extent = function (array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n && ((a = c = array[i]) == null || a != a))
        a = c = undefined;
      while (++i < n)
        if ((b = array[i]) != null) {
          if (a > b)
            a = b;
          if (c < b)
            c = b;
        }
    } else {
      while (++i < n && ((a = c = f.call(array, array[i], i)) == null || a != a))
        a = undefined;
      while (++i < n)
        if ((b = f.call(array, array[i], i)) != null) {
          if (a > b)
            a = b;
          if (c < b)
            c = b;
        }
    }
    return [
      a,
      c
    ];
  };
  d3.sum = function (array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n)
        if (!isNaN(a = +array[i]))
          s += a;
    } else {
      while (++i < n)
        if (!isNaN(a = +f.call(array, array[i], i)))
          s += a;
    }
    return s;
  };
  function d3_number(x) {
    return x != null && !isNaN(x);
  }
  d3.mean = function (array, f) {
    var n = array.length, a, m = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n)
        if (d3_number(a = array[i]))
          m += (a - m) / ++j;
    } else {
      while (++i < n)
        if (d3_number(a = f.call(array, array[i], i)))
          m += (a - m) / ++j;
    }
    return j ? m : undefined;
  };
  d3.quantile = function (values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function (array, f) {
    if (arguments.length > 1)
      array = array.map(f);
    array = array.filter(d3_number);
    return array.length ? d3.quantile(array.sort(d3.ascending), 0.5) : undefined;
  };
  d3.bisector = function (f) {
    return {
      left: function (a, x, lo, hi) {
        if (arguments.length < 3)
          lo = 0;
        if (arguments.length < 4)
          hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (f.call(a, a[mid], mid) < x)
            lo = mid + 1;
          else
            hi = mid;
        }
        return lo;
      },
      right: function (a, x, lo, hi) {
        if (arguments.length < 3)
          lo = 0;
        if (arguments.length < 4)
          hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (x < f.call(a, a[mid], mid))
            hi = mid;
          else
            lo = mid + 1;
        }
        return lo;
      }
    };
  };
  var d3_bisector = d3.bisector(function (d) {
      return d;
    });
  d3.bisectLeft = d3_bisector.left;
  d3.bisect = d3.bisectRight = d3_bisector.right;
  d3.shuffle = function (array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
  };
  d3.permute = function (array, indexes) {
    var permutes = [], i = -1, n = indexes.length;
    while (++i < n)
      permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.zip = function () {
    if (!(n = arguments.length))
      return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m;) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n;) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  function d3_zipLength(d) {
    return d.length;
  }
  d3.transpose = function (matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.keys = function (map) {
    var keys = [];
    for (var key in map)
      keys.push(key);
    return keys;
  };
  d3.values = function (map) {
    var values = [];
    for (var key in map)
      values.push(map[key]);
    return values;
  };
  d3.entries = function (map) {
    var entries = [];
    for (var key in map)
      entries.push({
        key: key,
        value: map[key]
      });
    return entries;
  };
  d3.merge = function (arrays) {
    return Array.prototype.concat.apply([], arrays);
  };
  d3.range = function (start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity)
      throw new Error('infinite range');
    var range = [], k = d3_range_integerScale(Math.abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0)
      while ((j = start + step * ++i) > stop)
        range.push(j / k);
    else
      while ((j = start + step * ++i) < stop)
        range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1)
      k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    try {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    } catch (e) {
      ctor.prototype = properties;
    }
  }
  d3.map = function (object) {
    var map = new d3_Map();
    for (var key in object)
      map.set(key, object[key]);
    return map;
  };
  function d3_Map() {
  }
  d3_class(d3_Map, {
    has: function (key) {
      return d3_map_prefix + key in this;
    },
    get: function (key) {
      return this[d3_map_prefix + key];
    },
    set: function (key, value) {
      return this[d3_map_prefix + key] = value;
    },
    remove: function (key) {
      key = d3_map_prefix + key;
      return key in this && delete this[key];
    },
    keys: function () {
      var keys = [];
      this.forEach(function (key) {
        keys.push(key);
      });
      return keys;
    },
    values: function () {
      var values = [];
      this.forEach(function (key, value) {
        values.push(value);
      });
      return values;
    },
    entries: function () {
      var entries = [];
      this.forEach(function (key, value) {
        entries.push({
          key: key,
          value: value
        });
      });
      return entries;
    },
    forEach: function (f) {
      for (var key in this) {
        if (key.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, key.substring(1), this[key]);
        }
      }
    }
  });
  var d3_map_prefix = '\0', d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
  d3.nest = function () {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length)
        return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [object]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function (keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function (keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length)
        return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function (key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function (a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function (array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function (array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function (d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function (order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function (order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function (f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function (array) {
    var set = new d3_Set();
    if (array)
      for (var i = 0; i < array.length; i++)
        set.add(array[i]);
    return set;
  };
  function d3_Set() {
  }
  d3_class(d3_Set, {
    has: function (value) {
      return d3_map_prefix + value in this;
    },
    add: function (value) {
      this[d3_map_prefix + value] = true;
      return value;
    },
    remove: function (value) {
      value = d3_map_prefix + value;
      return value in this && delete this[value];
    },
    values: function () {
      var values = [];
      this.forEach(function (value) {
        values.push(value);
      });
      return values;
    },
    forEach: function (f) {
      for (var value in this) {
        if (value.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, value.substring(1));
        }
      }
    }
  });
  d3.behavior = {};
  d3.rebind = function (target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n)
      target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function () {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  d3.dispatch = function () {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n)
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {
  }
  d3_dispatch.prototype.on = function (type, listener) {
    var i = type.indexOf('.'), name = '';
    if (i >= 0) {
      name = type.substring(i + 1);
      type = type.substring(0, i);
    }
    if (type)
      return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null)
        for (type in this) {
          if (this.hasOwnProperty(type))
            this[type].on(name, null);
        }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n)
        if (l = z[i].on)
          l.apply(this, arguments);
      return dispatch;
    }
    event.on = function (name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2)
        return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener)
        listeners.push(listenerByName.set(name, { on: listener }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventCancel() {
    d3.event.stopPropagation();
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent)
      e = s;
    return e;
  }
  function d3_eventSuppress(target, type) {
    function off() {
      target.on(type, null);
    }
    target.on(type, function () {
      d3_eventCancel();
      off();
    }, true);
    setTimeout(off, 0);
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n)
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function (thiz, argumentz) {
      return function (e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.mouse = function (container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
        svg = d3.select(d3_document.body).append('svg').style('position', 'absolute').style('top', 0).style('left', 0);
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) {
        point.x = e.pageX;
        point.y = e.pageY;
      } else {
        point.x = e.clientX;
        point.y = e.clientY;
      }
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [
        point.x,
        point.y
      ];
    }
    var rect = container.getBoundingClientRect();
    return [
      e.clientX - rect.left - container.clientLeft,
      e.clientY - rect.top - container.clientTop
    ];
  }
  var d3_array = d3_arraySlice;
  function d3_arrayCopy(pseudoarray) {
    var i = -1, n = pseudoarray.length, array = [];
    while (++i < n)
      array.push(pseudoarray[i]);
    return array;
  }
  function d3_arraySlice(pseudoarray) {
    return Array.prototype.slice.call(pseudoarray);
  }
  try {
    d3_array(d3_document.documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = d3_arrayCopy;
  }
  var d3_arraySubclass = [].__proto__ ? function (array, prototype) {
      array.__proto__ = prototype;
    } : function (array, prototype) {
      for (var property in prototype)
        array[property] = prototype[property];
    };
  d3.touches = function (container, touches) {
    if (arguments.length < 2)
      touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function (touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  d3.behavior.drag = function () {
    var event = d3_eventDispatch(drag, 'drag', 'dragstart', 'dragend'), origin = null;
    function drag() {
      this.on('mousedown.drag', mousedown).on('touchstart.drag', mousedown);
    }
    function mousedown() {
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, touchId = d3.event.touches ? d3.event.changedTouches[0].identifier : null, offset, origin_ = point(), moved = 0;
      var w = d3.select(d3_window).on(touchId != null ? 'touchmove.drag-' + touchId : 'mousemove.drag', dragmove).on(touchId != null ? 'touchend.drag-' + touchId : 'mouseup.drag', dragend, true);
      if (origin) {
        offset = origin.apply(target, arguments);
        offset = [
          offset.x - origin_[0],
          offset.y - origin_[1]
        ];
      } else {
        offset = [
          0,
          0
        ];
      }
      if (touchId == null)
        d3_eventCancel();
      event_({ type: 'dragstart' });
      function point() {
        var p = target.parentNode;
        return touchId != null ? d3.touches(p).filter(function (p) {
          return p.identifier === touchId;
        })[0] : d3.mouse(p);
      }
      function dragmove() {
        if (!target.parentNode)
          return dragend();
        var p = point(), dx = p[0] - origin_[0], dy = p[1] - origin_[1];
        moved |= dx | dy;
        origin_ = p;
        d3_eventCancel();
        event_({
          type: 'drag',
          x: p[0] + offset[0],
          y: p[1] + offset[1],
          dx: dx,
          dy: dy
        });
      }
      function dragend() {
        event_({ type: 'dragend' });
        if (moved) {
          d3_eventCancel();
          if (d3.event.target === eventTarget)
            d3_eventSuppress(w, 'click');
        }
        w.on(touchId != null ? 'touchmove.drag-' + touchId : 'mousemove.drag', null).on(touchId != null ? 'touchend.drag-' + touchId : 'mouseup.drag', null);
      }
    }
    drag.origin = function (x) {
      if (!arguments.length)
        return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, 'on');
  };
  function d3_selection(groups) {
    d3_arraySubclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function (s, n) {
      return n.querySelector(s);
    }, d3_selectAll = function (s, n) {
      return n.querySelectorAll(s);
    }, d3_selectRoot = d3_document.documentElement, d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector, d3_selectMatches = function (n, s) {
      return d3_selectMatcher.call(n, s);
    };
  if (typeof Sizzle === 'function') {
    d3_select = function (s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = function (s, n) {
      return Sizzle.uniqueSort(Sizzle(s, n));
    };
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function () {
    return d3_selectionRoot;
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function (selector) {
    var subgroups = [], subgroup, subnode, group, node;
    if (typeof selector !== 'function')
      selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i));
          if (subnode && '__data__' in node)
            subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return function () {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function (selector) {
    var subgroups = [], subgroup, node;
    if (typeof selector !== 'function')
      selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return function () {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsPrefix = {
      svg: 'http://www.w3.org/2000/svg',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      xml: 'http://www.w3.org/XML/1998/namespace',
      xmlns: 'http://www.w3.org/2000/xmlns/'
    };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function (name) {
      var i = name.indexOf(':'), prefix = name;
      if (i >= 0) {
        prefix = name.substring(0, i);
        name = name.substring(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === 'string') {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name)
        this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null)
        this.removeAttributeNS(name.space, name.local);
      else
        this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === 'function' ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, ' ');
  }
  d3.requote = function (s) {
    return s.replace(d3_requote_re, '\\$&');
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  d3_selectionPrototype.classed = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === 'string') {
        var node = this.node(), n = (name = name.trim().split(/^|\s+/g)).length, i = -1;
        if (value = node.classList) {
          while (++i < n)
            if (!value.contains(name[i]))
              return false;
        } else {
          value = node.getAttribute('class');
          while (++i < n)
            if (!d3_selection_classedRe(name[i]).test(value))
              return false;
        }
        return true;
      }
      for (value in name)
        this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp('(?:^|\\s+)' + d3.requote(name) + '(?:\\s+|$)', 'g');
  }
  function d3_selection_classed(name, value) {
    name = name.trim().split(/\s+/).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n)
        name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n)
        name[i](this, x);
    }
    return typeof value === 'function' ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function (node, value) {
      if (c = node.classList)
        return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute('class') || '';
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c))
          node.setAttribute('class', d3_collapse(c + ' ' + name));
      } else {
        node.setAttribute('class', d3_collapse(c.replace(re, ' ')));
      }
    };
  }
  d3_selectionPrototype.style = function (name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== 'string') {
        if (n < 2)
          value = '';
        for (priority in name)
          this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2)
        return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = '';
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === 'function' ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === 'string')
        return this.node()[name];
      for (value in name)
        this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null)
        delete this[name];
      else
        this[name] = x;
    }
    return value == null ? propertyNull : typeof value === 'function' ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function (value) {
    return arguments.length ? this.each(typeof value === 'function' ? function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? '' : v;
    } : value == null ? function () {
      this.textContent = '';
    } : function () {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function (value) {
    return arguments.length ? this.each(typeof value === 'function' ? function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? '' : v;
    } : value == null ? function () {
      this.innerHTML = '';
    } : function () {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function (name) {
    name = d3.ns.qualify(name);
    function append() {
      return this.appendChild(d3_document.createElementNS(this.namespaceURI, name));
    }
    function appendNS() {
      return this.appendChild(d3_document.createElementNS(name.space, name.local));
    }
    return this.select(name.local ? appendNS : append);
  };
  d3_selectionPrototype.insert = function (name, before) {
    name = d3.ns.qualify(name);
    if (typeof before !== 'function')
      before = d3_selection_selector(before);
    function insert(d, i) {
      return this.insertBefore(d3_document.createElementNS(this.namespaceURI, name), before.call(this, d, i));
    }
    function insertNS(d, i) {
      return this.insertBefore(d3_document.createElementNS(name.space, name.local), before.call(this, d, i));
    }
    return this.select(name.local ? insertNS : insert);
  };
  d3_selectionPrototype.remove = function () {
    return this.each(function () {
      var parent = this.parentNode;
      if (parent)
        parent.removeChild(this);
    });
  };
  d3_selectionPrototype.data = function (value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
        for (i = -1; ++i < n;) {
          keyValue = key.call(node = group[i], node.__data__, i);
          if (nodeByKeyValue.has(keyValue)) {
            exitNodes[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues.push(keyValue);
        }
        for (i = -1; ++i < m;) {
          keyValue = key.call(groupData, nodeData = groupData[i], i);
          if (node = nodeByKeyValue.get(keyValue)) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          } else if (!dataByKeyValue.has(keyValue)) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
          dataByKeyValue.set(keyValue, nodeData);
          nodeByKeyValue.remove(keyValue);
        }
        for (i = -1; ++i < n;) {
          if (nodeByKeyValue.has(keyValues[i])) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0;) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (; i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (; i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === 'function') {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function () {
      return enter;
    };
    update.exit = function () {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return { __data__: data };
  }
  d3_selectionPrototype.datum = function (value) {
    return arguments.length ? this.property('__data__', value) : this.property('__data__');
  };
  d3_selectionPrototype.filter = function (filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== 'function')
      filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function () {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function () {
    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function (comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m;)
      this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length)
      comparator = d3.ascending;
    return function (a, b) {
      return !a - !b || comparator(a.__data__, b.__data__);
    };
  }
  function d3_noop() {
  }
  d3_selectionPrototype.on = function (type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== 'string') {
        if (n < 2)
          listener = false;
        for (capture in type)
          this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2)
        return (n = this.node()['__on' + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = '__on' + type, i = type.indexOf('.'), wrap = d3_selection_onListener;
    if (i > 0)
      type = type.substring(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter)
      type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp('^__on([^.]+)' + d3.requote(type) + '$'), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
      mouseenter: 'mouseover',
      mouseleave: 'mouseout'
    });
  d3_selection_onFilters.forEach(function (k) {
    if ('on' + k in d3_document)
      d3_selection_onFilters.remove(k);
  });
  function d3_selection_onListener(listener, argumentz) {
    return function (e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function (e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  d3_selectionPrototype.each = function (callback) {
    return d3_selection_each(this, function (node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i])
          callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function (callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function () {
    return !this.node();
  };
  d3_selectionPrototype.node = function () {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node)
          return node;
      }
    }
    return null;
  };
  function d3_selection_enter(selection) {
    d3_arraySubclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.insert = d3_selectionPrototype.insert;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.select = function (selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m;) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selectionPrototype.transition = function () {
    var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = Object.create(d3_transitionInherit);
    transition.time = Date.now();
    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i])
          d3_transitionNode(node, i, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id);
  };
  d3.select = function (node) {
    var group = [typeof node === 'string' ? d3_select(node, d3_document) : node];
    group.parentNode = d3_selectRoot;
    return d3_selection([group]);
  };
  d3.selectAll = function (nodes) {
    var group = d3_array(typeof nodes === 'string' ? d3_selectAll(nodes, d3_document) : nodes);
    group.parentNode = d3_selectRoot;
    return d3_selection([group]);
  };
  var d3_selectionRoot = d3.select(d3_selectRoot);
  d3.behavior.zoom = function () {
    var translate = [
        0,
        0
      ], translate0, scale = 1, scale0, scaleExtent = d3_behavior_zoomInfinity, event = d3_eventDispatch(zoom, 'zoom'), x0, x1, y0, y1, touchtime;
    function zoom() {
      this.on('mousedown.zoom', mousedown).on('mousemove.zoom', mousemove).on(d3_behavior_zoomWheel + '.zoom', mousewheel).on('dblclick.zoom', dblclick).on('touchstart.zoom', touchstart).on('touchmove.zoom', touchmove).on('touchend.zoom', touchstart);
    }
    zoom.translate = function (x) {
      if (!arguments.length)
        return translate;
      translate = x.map(Number);
      rescale();
      return zoom;
    };
    zoom.scale = function (x) {
      if (!arguments.length)
        return scale;
      scale = +x;
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function (x) {
      if (!arguments.length)
        return scaleExtent;
      scaleExtent = x == null ? d3_behavior_zoomInfinity : x.map(Number);
      return zoom;
    };
    zoom.x = function (z) {
      if (!arguments.length)
        return x1;
      x1 = z;
      x0 = z.copy();
      translate = [
        0,
        0
      ];
      scale = 1;
      return zoom;
    };
    zoom.y = function (z) {
      if (!arguments.length)
        return y1;
      y1 = z;
      y0 = z.copy();
      translate = [
        0,
        0
      ];
      scale = 1;
      return zoom;
    };
    function location(p) {
      return [
        (p[0] - translate[0]) / scale,
        (p[1] - translate[1]) / scale
      ];
    }
    function point(l) {
      return [
        l[0] * scale + translate[0],
        l[1] * scale + translate[1]
      ];
    }
    function scaleTo(s) {
      scale = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      translate[0] += p[0] - l[0];
      translate[1] += p[1] - l[1];
    }
    function rescale() {
      if (x1)
        x1.domain(x0.range().map(function (x) {
          return (x - translate[0]) / scale;
        }).map(x0.invert));
      if (y1)
        y1.domain(y0.range().map(function (y) {
          return (y - translate[1]) / scale;
        }).map(y0.invert));
    }
    function dispatch(event) {
      rescale();
      d3.event.preventDefault();
      event({
        type: 'zoom',
        scale: scale,
        translate: translate
      });
    }
    function mousedown() {
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, moved = 0, w = d3.select(d3_window).on('mousemove.zoom', mousemove).on('mouseup.zoom', mouseup), l = location(d3.mouse(target));
      d3_window.focus();
      d3_eventCancel();
      function mousemove() {
        moved = 1;
        translateTo(d3.mouse(target), l);
        dispatch(event_);
      }
      function mouseup() {
        if (moved)
          d3_eventCancel();
        w.on('mousemove.zoom', null).on('mouseup.zoom', null);
        if (moved && d3.event.target === eventTarget)
          d3_eventSuppress(w, 'click.zoom');
      }
    }
    function mousewheel() {
      if (!translate0)
        translate0 = location(d3.mouse(this));
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * 0.002) * scale);
      translateTo(d3.mouse(this), translate0);
      dispatch(event.of(this, arguments));
    }
    function mousemove() {
      translate0 = null;
    }
    function dblclick() {
      var p = d3.mouse(this), l = location(p), k = Math.log(scale) / Math.LN2;
      scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
      translateTo(p, l);
      dispatch(event.of(this, arguments));
    }
    function touchstart() {
      var touches = d3.touches(this), now = Date.now();
      scale0 = scale;
      translate0 = {};
      touches.forEach(function (t) {
        translate0[t.identifier] = location(t);
      });
      d3_eventCancel();
      if (touches.length === 1) {
        if (now - touchtime < 500) {
          var p = touches[0], l = location(touches[0]);
          scaleTo(scale * 2);
          translateTo(p, l);
          dispatch(event.of(this, arguments));
        }
        touchtime = now;
      }
    }
    function touchmove() {
      var touches = d3.touches(this), p0 = touches[0], l0 = translate0[p0.identifier];
      if (p1 = touches[1]) {
        var p1, l1 = translate0[p1.identifier];
        p0 = [
          (p0[0] + p1[0]) / 2,
          (p0[1] + p1[1]) / 2
        ];
        l0 = [
          (l0[0] + l1[0]) / 2,
          (l0[1] + l1[1]) / 2
        ];
        scaleTo(d3.event.scale * scale0);
      }
      translateTo(p0, l0);
      touchtime = null;
      dispatch(event.of(this, arguments));
    }
    return d3.rebind(zoom, event, 'on');
  };
  var d3_behavior_zoomInfinity = [
      0,
      Infinity
    ];
  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = 'onwheel' in d3_document ? (d3_behavior_zoomDelta = function () {
      return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
    }, 'wheel') : 'onmousewheel' in d3_document ? (d3_behavior_zoomDelta = function () {
      return d3.event.wheelDelta;
    }, 'mousewheel') : (d3_behavior_zoomDelta = function () {
      return -d3.event.detail;
    }, 'MozMousePixelScroll');
  function d3_Color() {
  }
  d3_Color.prototype.toString = function () {
    return this.rgb() + '';
  };
  d3.hsl = function (h, s, l) {
    return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse('' + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
  };
  function d3_hsl(h, s, l) {
    return new d3_Hsl(h, s, l);
  }
  function d3_Hsl(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  var d3_hslPrototype = d3_Hsl.prototype = new d3_Color();
  d3_hslPrototype.brighter = function (k) {
    k = Math.pow(0.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function (k) {
    k = Math.pow(0.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function () {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= 0.5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360)
        h -= 360;
      else if (h < 0)
        h += 360;
      if (h < 60)
        return m1 + (m2 - m1) * h / 60;
      if (h < 180)
        return m2;
      if (h < 240)
        return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  var π = Math.PI, ε = 0.000001, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_acos(x) {
    return Math.acos(Math.max(-1, Math.min(1, x)));
  }
  function d3_asin(x) {
    return x > 1 ? π / 2 : x < -1 ? -π / 2 : Math.asin(x);
  }
  function d3_sinh(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  }
  function d3_cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  d3.hcl = function (h, c, l) {
    return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
  };
  function d3_hcl(h, c, l) {
    return new d3_Hcl(h, c, l);
  }
  function d3_Hcl(h, c, l) {
    this.h = h;
    this.c = c;
    this.l = l;
  }
  var d3_hclPrototype = d3_Hcl.prototype = new d3_Color();
  d3_hclPrototype.brighter = function (k) {
    return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function (k) {
    return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function () {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h))
      h = 0;
    if (isNaN(c))
      c = 0;
    return d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = function (l, a, b) {
    return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
  };
  function d3_lab(l, a, b) {
    return new d3_Lab(l, a, b);
  }
  function d3_Lab(l, a, b) {
    this.l = l;
    this.a = a;
    this.b = b;
  }
  var d3_lab_K = 18;
  var d3_lab_X = 0.95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_Lab.prototype = new d3_Color();
  d3_labPrototype.brighter = function (k) {
    return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function (k) {
    return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function () {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), d3_xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z), d3_xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > 0.206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));
  }
  d3.rgb = function (r, g, b) {
    return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse('' + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
  };
  function d3_rgb(r, g, b) {
    return new d3_Rgb(r, g, b);
  }
  function d3_Rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color();
  d3_rgbPrototype.brighter = function (k) {
    k = Math.pow(0.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b)
      return d3_rgb(i, i, i);
    if (r && r < i)
      r = i;
    if (g && g < i)
      g = i;
    if (b && b < i)
      b = i;
    return d3_rgb(Math.min(255, Math.floor(r / k)), Math.min(255, Math.floor(g / k)), Math.min(255, Math.floor(b / k)));
  };
  d3_rgbPrototype.darker = function (k) {
    k = Math.pow(0.7, arguments.length ? k : 1);
    return d3_rgb(Math.floor(k * this.r), Math.floor(k * this.g), Math.floor(k * this.b));
  };
  d3_rgbPrototype.hsl = function () {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function () {
    return '#' + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? '0' + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, name;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(',');
      switch (m1[1]) {
      case 'hsl': {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }
      case 'rgb': {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (name = d3_rgb_names.get(format))
      return rgb(name.r, name.g, name.b);
    if (format != null && format.charAt(0) === '#') {
      if (format.length === 4) {
        r = format.charAt(1);
        r += r;
        g = format.charAt(2);
        g += g;
        b = format.charAt(3);
        b += b;
      } else if (format.length === 7) {
        r = format.substring(1, 3);
        g = format.substring(3, 5);
        b = format.substring(5, 7);
      }
      r = parseInt(r, 16);
      g = parseInt(g, 16);
      b = parseInt(b, 16);
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < 0.5 ? d / (max + min) : d / (2 - max - min);
      if (r == max)
        h = (g - b) / d + (g < b ? 6 : 0);
      else if (g == max)
        h = (b - r) / d + 2;
      else
        h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / d3_lab_X), y = d3_xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / d3_lab_Y), z = d3_xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === '%' ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavender: '#e6e6fa',
      lavenderblush: '#fff0f5',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32'
    });
  d3_rgb_names.forEach(function (key, value) {
    d3_rgb_names.set(key, d3_rgb_parse(value, d3_rgb, d3_hsl_rgb));
  });
  function d3_functor(v) {
    return typeof v === 'function' ? v : function () {
      return v;
    };
  }
  d3.functor = d3_functor;
  function d3_identity(d) {
    return d;
  }
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function (url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === 'function')
        callback = mimeType, mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch('progress', 'load', 'error'), headers = {}, request = new (d3_window.XDomainRequest && /^(http(s)?:)?\/\//.test(url) ? XDomainRequest : XMLHttpRequest)();
    'onload' in request ? request.onload = request.onerror = respond : request.onreadystatechange = function () {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && request.responseText || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function (event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function (name, value) {
      name = (name + '').toLowerCase();
      if (arguments.length < 2)
        return headers[name];
      if (value == null)
        delete headers[name];
      else
        headers[name] = value + '';
      return xhr;
    };
    xhr.mimeType = function (value) {
      if (!arguments.length)
        return mimeType;
      mimeType = value == null ? null : value + '';
      return xhr;
    };
    xhr.response = function (value) {
      response = value;
      return xhr;
    };
    [
      'get',
      'post'
    ].forEach(function (method) {
      xhr[method] = function () {
        return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
      };
    });
    xhr.send = function (method, data, callback) {
      if (arguments.length === 2 && typeof data === 'function')
        callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !('accept' in headers))
        headers['accept'] = mimeType + ',*/*';
      if (request.setRequestHeader)
        for (var name in headers)
          request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType)
        request.overrideMimeType(mimeType);
      if (callback != null)
        xhr.on('error', callback).on('load', function (request) {
          callback(null, request);
        });
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function () {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, 'on');
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function (error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_dsv(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + '\n]'), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3)
        callback = row, row = null;
      var xhr = d3.xhr(url, mimeType, callback);
      xhr.row = function (_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr.row(row);
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function (request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function (text, f) {
      var o;
      return dsv.parseRows(text, function (row, i) {
        if (o)
          return o(row, i - 1);
        var a = new Function('d', 'return {' + row.map(function (name, i) {
            return JSON.stringify(name) + ': d[' + i + ']';
          }).join(',') + '}');
        o = f ? function (row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function (text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N)
          return EOF;
        if (eol)
          return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34)
                break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10)
              ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.substring(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10)
            eol = true;
          else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10)
              ++I, ++k;
          } else if (c !== delimiterCode)
            continue;
          return text.substring(j, I - k);
        }
        return text.substring(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && !(a = f(a, n++)))
          continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function (rows) {
      if (Array.isArray(rows[0]))
        return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function (row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [fields.map(formatValue).join(delimiter)].concat(rows.map(function (row) {
        return fields.map(function (field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join('\n');
    };
    dsv.formatRows = function (rows) {
      return rows.map(formatRow).join('\n');
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  }
  d3.csv = d3_dsv(',', 'text/csv');
  d3.tsv = d3_dsv('\t', 'text/tab-separated-values');
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout;
  d3.timer = function (callback, delay, then) {
    if (arguments.length < 3) {
      if (arguments.length < 2)
        delay = 0;
      else if (!isFinite(delay))
        return;
      then = Date.now();
    }
    var time = then + delay;
    var timer = {
        callback: callback,
        time: time,
        next: null
      };
    if (d3_timer_queueTail)
      d3_timer_queueTail.next = timer;
    else
      d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function () {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.time)
        timer.flush = timer.callback(now - timer.time);
      timer = timer.next;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.flush) {
        t1 = t0 ? t0.next = t1.next : d3_timer_queueHead = t1.next;
      } else {
        if (t1.time < time)
          time = t1.time;
        t1 = (t0 = t1).next;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  var d3_timer_frame = d3_window.requestAnimationFrame || d3_window.webkitRequestAnimationFrame || d3_window.mozRequestAnimationFrame || d3_window.oRequestAnimationFrame || d3_window.msRequestAnimationFrame || function (callback) {
      setTimeout(callback, 17);
    };
  var d3_format_decimalPoint = '.', d3_format_thousandsSeparator = ',', d3_format_grouping = [
      3,
      3
    ];
  var d3_formatPrefixes = [
      'y',
      'z',
      'a',
      'f',
      'p',
      'n',
      '\xb5',
      'm',
      '',
      'k',
      'M',
      'G',
      'T',
      'P',
      'E',
      'Z',
      'Y'
    ].map(d3_formatPrefix);
  d3.formatPrefix = function (value, precision) {
    var i = 0;
    if (value) {
      if (value < 0)
        value *= -1;
      if (precision)
        value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, Math.abs(8 - i) * 3);
    return {
      scale: i > 8 ? function (d) {
        return d / k;
      } : function (d) {
        return d * k;
      },
      symbol: d
    };
  }
  d3.round = function (x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  d3.format = function (specifier) {
    var match = d3_format_re.exec(specifier), fill = match[1] || ' ', align = match[2] || '>', sign = match[3] || '', basePrefix = match[4] || '', zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, suffix = '', integer = false;
    if (precision)
      precision = +precision.substring(1);
    if (zfill || fill === '0' && align === '=') {
      zfill = fill = '0';
      align = '=';
      if (comma)
        width -= Math.floor((width - 1) / 4);
    }
    switch (type) {
    case 'n':
      comma = true;
      type = 'g';
      break;
    case '%':
      scale = 100;
      suffix = '%';
      type = 'f';
      break;
    case 'p':
      scale = 100;
      suffix = '%';
      type = 'r';
      break;
    case 'b':
    case 'o':
    case 'x':
    case 'X':
      if (basePrefix)
        basePrefix = '0' + type.toLowerCase();
    case 'c':
    case 'd':
      integer = true;
      precision = 0;
      break;
    case 's':
      scale = -1;
      type = 'r';
      break;
    }
    if (basePrefix === '#')
      basePrefix = '';
    if (type == 'r' && !precision)
      type = 'g';
    if (precision != null) {
      if (type == 'g')
        precision = Math.max(1, Math.min(21, precision));
      else if (type == 'e' || type == 'f')
        precision = Math.max(0, Math.min(20, precision));
    }
    type = d3_format_types.get(type) || d3_format_typeDefault;
    var zcomma = zfill && comma;
    return function (value) {
      if (integer && value % 1)
        return '';
      var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, '-') : sign;
      if (scale < 0) {
        var prefix = d3.formatPrefix(value, precision);
        value = prefix.scale(value);
        suffix = prefix.symbol;
      } else {
        value *= scale;
      }
      value = type(value, precision);
      if (!zfill && comma)
        value = d3_format_group(value);
      var length = basePrefix.length + value.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : '';
      if (zcomma)
        value = d3_format_group(padding + value);
      if (d3_format_decimalPoint)
        value.replace('.', d3_format_decimalPoint);
      negative += basePrefix;
      return (align === '<' ? negative + value + padding : align === '>' ? padding + negative + value : align === '^' ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + suffix;
    };
  };
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
      b: function (x) {
        return x.toString(2);
      },
      c: function (x) {
        return String.fromCharCode(x);
      },
      o: function (x) {
        return x.toString(8);
      },
      x: function (x) {
        return x.toString(16);
      },
      X: function (x) {
        return x.toString(16).toUpperCase();
      },
      g: function (x, p) {
        return x.toPrecision(p);
      },
      e: function (x, p) {
        return x.toExponential(p);
      },
      f: function (x, p) {
        return x.toFixed(p);
      },
      r: function (x, p) {
        return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
      }
    });
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  function d3_format_typeDefault(x) {
    return x + '';
  }
  var d3_format_group = d3_identity;
  if (d3_format_grouping) {
    var d3_format_groupingLength = d3_format_grouping.length;
    d3_format_group = function (value) {
      var i = value.lastIndexOf('.'), f = i >= 0 ? '.' + value.substring(i + 1) : (i = value.length, ''), t = [], j = 0, g = d3_format_grouping[0];
      while (i > 0 && g > 0) {
        t.push(value.substring(i -= g, i + g));
        g = d3_format_grouping[j = (j + 1) % d3_format_groupingLength];
      }
      return t.reverse().join(d3_format_thousandsSeparator || '') + f;
    };
  }
  d3.geo = {};
  d3.geo.stream = function (object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
      Feature: function (feature, listener) {
        d3_geo_streamGeometry(feature.geometry, listener);
      },
      FeatureCollection: function (object, listener) {
        var features = object.features, i = -1, n = features.length;
        while (++i < n)
          d3_geo_streamGeometry(features[i].geometry, listener);
      }
    };
  var d3_geo_streamGeometryType = {
      Sphere: function (object, listener) {
        listener.sphere();
      },
      Point: function (object, listener) {
        var coordinate = object.coordinates;
        listener.point(coordinate[0], coordinate[1]);
      },
      MultiPoint: function (object, listener) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length, coordinate;
        while (++i < n)
          coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
      },
      LineString: function (object, listener) {
        d3_geo_streamLine(object.coordinates, listener, 0);
      },
      MultiLineString: function (object, listener) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while (++i < n)
          d3_geo_streamLine(coordinates[i], listener, 0);
      },
      Polygon: function (object, listener) {
        d3_geo_streamPolygon(object.coordinates, listener);
      },
      MultiPolygon: function (object, listener) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while (++i < n)
          d3_geo_streamPolygon(coordinates[i], listener);
      },
      GeometryCollection: function (object, listener) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while (++i < n)
          d3_geo_streamGeometry(geometries[i], listener);
      }
    };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n)
      coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n)
      d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function (object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum;
  var d3_geo_area = {
      sphere: function () {
        d3_geo_areaSum += 4 * π;
      },
      point: d3_noop,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: function () {
        d3_geo_areaRingSum = 0;
        d3_geo_area.lineStart = d3_geo_areaRingStart;
      },
      polygonEnd: function () {
        var area = 2 * d3_geo_areaRingSum;
        d3_geo_areaSum += area < 0 ? 4 * π + area : area;
        d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
      }
    };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function (λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(dλ), v = k * Math.sin(dλ);
      d3_geo_areaRingSum += Math.atan2(v, u);
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function () {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [
      cosφ * Math.cos(λ),
      cosφ * Math.sin(λ),
      Math.sin(φ)
    ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [
      vector[0] * k,
      vector[1] * k,
      vector[2] * k
    ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [
      Math.atan2(cartesian[1], cartesian[0]),
      Math.asin(Math.max(-1, Math.min(1, cartesian[2])))
    ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function () {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function () {
          bound.point = ringPoint;
          bound.lineStart = ringStart;
          bound.lineEnd = ringEnd;
          dλSum = 0;
          d3_geo_area.polygonStart();
        },
        polygonEnd: function () {
          d3_geo_area.polygonEnd();
          bound.point = point;
          bound.lineStart = lineStart;
          bound.lineEnd = lineEnd;
          if (d3_geo_areaRingSum < 0)
            λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);
          else if (dλSum > ε)
            φ1 = 90;
          else if (dλSum < -ε)
            φ0 = -90;
          range[0] = λ0, range[1] = λ1;
        }
      };
    function point(λ, φ) {
      ranges.push(range = [
        λ0 = λ,
        λ1 = λ
      ]);
      if (φ < φ0)
        φ0 = φ;
      if (φ > φ1)
        φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([
          λ * d3_radians,
          φ * d3_radians
        ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [
            normal[1],
            -normal[0],
            0
          ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = Math.abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1)
            φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0)
            φ0 = φi;
        } else {
          if (φ < φ0)
            φ0 = φ;
          if (φ > φ1)
            φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1))
              λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1))
              λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0)
              λ0 = λ;
            if (λ > λ1)
              λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1))
                λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1))
                λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += Math.abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else
        λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (Math.abs(dλSum) > ε)
        λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function (feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      ranges.sort(compareRanges);
      for (var i = 1, n = ranges.length, a = ranges[0], b, merged = [a]; i < n; ++i) {
        b = ranges[i];
        if (withinRange(b[0], a) || withinRange(b[1], a)) {
          if (angle(a[0], b[1]) > angle(a[0], a[1]))
            a[1] = b[1];
          if (angle(b[0], a[1]) > angle(a[0], a[1]))
            a[0] = b[0];
        } else {
          merged.push(a = b);
        }
      }
      var best = -Infinity, dλ;
      for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
        b = merged[i];
        if ((dλ = angle(a[1], b[0])) > best)
          best = dλ, λ0 = b[0], λ1 = a[1];
      }
      ranges = range = null;
      return [
        [
          λ0,
          φ0
        ],
        [
          λ1,
          φ1
        ]
      ];
    };
  }();
  d3.geo.centroid = function (object) {
    d3_geo_centroidDimension = d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var m;
    if (d3_geo_centroidW && Math.abs(m = Math.sqrt(d3_geo_centroidX * d3_geo_centroidX + d3_geo_centroidY * d3_geo_centroidY + d3_geo_centroidZ * d3_geo_centroidZ)) > ε) {
      return [
        Math.atan2(d3_geo_centroidY, d3_geo_centroidX) * d3_degrees,
        Math.asin(Math.max(-1, Math.min(1, d3_geo_centroidZ / m))) * d3_degrees
      ];
    }
  };
  var d3_geo_centroidDimension, d3_geo_centroidW, d3_geo_centroidX, d3_geo_centroidY, d3_geo_centroidZ;
  var d3_geo_centroid = {
      sphere: function () {
        if (d3_geo_centroidDimension < 2) {
          d3_geo_centroidDimension = 2;
          d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
        }
      },
      point: d3_geo_centroidPoint,
      lineStart: d3_geo_centroidLineStart,
      lineEnd: d3_geo_centroidLineEnd,
      polygonStart: function () {
        if (d3_geo_centroidDimension < 2) {
          d3_geo_centroidDimension = 2;
          d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
        }
        d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
      },
      polygonEnd: function () {
        d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
      }
    };
  function d3_geo_centroidPoint(λ, φ) {
    if (d3_geo_centroidDimension)
      return;
    ++d3_geo_centroidW;
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidX += (cosφ * Math.cos(λ) - d3_geo_centroidX) / d3_geo_centroidW;
    d3_geo_centroidY += (cosφ * Math.sin(λ) - d3_geo_centroidY) / d3_geo_centroidW;
    d3_geo_centroidZ += (Math.sin(φ) - d3_geo_centroidZ) / d3_geo_centroidW;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00;
    d3_geo_centroidDimension = 1;
    d3_geo_centroidLineStart();
    d3_geo_centroidDimension = 2;
    var linePoint = d3_geo_centroid.point;
    d3_geo_centroid.point = function (λ, φ) {
      linePoint(λ00 = λ, φ00 = φ);
    };
    d3_geo_centroid.lineEnd = function () {
      d3_geo_centroid.point(λ00, φ00);
      d3_geo_centroidLineEnd();
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
    };
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    if (d3_geo_centroidDimension > 1)
      return;
    if (d3_geo_centroidDimension < 1) {
      d3_geo_centroidDimension = 1;
      d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    }
    d3_geo_centroid.point = function (λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW += w;
      d3_geo_centroidX += w * (x0 + (x0 = x));
      d3_geo_centroidY += w * (y0 + (y0 = y));
      d3_geo_centroidZ += w * (z0 + (z0 = z));
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, inside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function (segment) {
      if ((n = segment.length - 1) <= 0)
        return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i)
          listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = {
          point: p0,
          points: segment,
          other: null,
          visited: false,
          entry: true,
          subject: true
        }, b = {
          point: p0,
          points: [p0],
          other: a,
          visited: false,
          entry: false,
          subject: false
        };
      a.other = b;
      subject.push(a);
      clip.push(b);
      a = {
        point: p1,
        points: [p1],
        other: null,
        visited: false,
        entry: false,
        subject: true
      };
      b = {
        point: p1,
        points: [p1],
        other: a,
        visited: false,
        entry: true,
        subject: false
      };
      a.other = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length)
      return;
    if (inside)
      for (var i = 1, e = !inside(clip[0].point), n = clip.length; i < n; ++i) {
        clip[i].entry = e = !e;
      }
    var start = subject[0], current, points, point;
    while (1) {
      current = start;
      while (current.visited)
        if ((current = current.next) === start)
          return;
      points = current.points;
      listener.lineStart();
      do {
        current.visited = current.other.visited = true;
        if (current.entry) {
          if (current.subject) {
            for (var i = 0; i < points.length; i++)
              listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.next.point, 1, listener);
          }
          current = current.next;
        } else {
          if (current.subject) {
            points = current.prev.points;
            for (var i = points.length; --i >= 0;)
              listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.prev.point, -1, listener);
          }
          current = current.prev;
        }
        current = current.other;
        points = current.points;
      } while (!current.visited);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length))
      return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.next = b = array[i];
      b.prev = a;
      a = b;
    }
    a.next = b = array[0];
    b.prev = a;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate) {
    return function (listener) {
      var line = clipLine(listener);
      var clip = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function () {
            clip.point = pointRing;
            clip.lineStart = ringStart;
            clip.lineEnd = ringEnd;
            invisible = false;
            invisibleArea = visibleArea = 0;
            segments = [];
            listener.polygonStart();
          },
          polygonEnd: function () {
            clip.point = point;
            clip.lineStart = lineStart;
            clip.lineEnd = lineEnd;
            segments = d3.merge(segments);
            if (segments.length) {
              d3_geo_clipPolygon(segments, d3_geo_clipSort, null, interpolate, listener);
            } else if (visibleArea < -ε || invisible && invisibleArea < -ε) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            listener.polygonEnd();
            segments = null;
          },
          sphere: function () {
            listener.polygonStart();
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
            listener.polygonEnd();
          }
        };
      function point(λ, φ) {
        if (pointVisible(λ, φ))
          listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        line.point(λ, φ);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments, visibleArea, invisibleArea, invisible;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), ring;
      function pointRing(λ, φ) {
        ringListener.point(λ, φ);
        ring.push([
          λ,
          φ
        ]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        if (!n) {
          invisible = true;
          invisibleArea += d3_geo_clipAreaRing(ring, -1);
          ring = null;
          return;
        }
        ring = null;
        if (clean & 1) {
          segment = ringSegments[0];
          visibleArea += d3_geo_clipAreaRing(segment, 1);
          var n = segment.length - 1, i = -1, point;
          listener.lineStart();
          while (++i < n)
            listener.point((point = segment[i])[0], point[1]);
          listener.lineEnd();
          return;
        }
        if (n > 1 && clean & 2)
          ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function () {
        lines.push(line = []);
      },
      point: function (λ, φ) {
        line.push([
          λ,
          φ
        ]);
      },
      lineEnd: d3_noop,
      buffer: function () {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function () {
        if (lines.length > 1)
          lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipAreaRing(ring, invisible) {
    if (!(n = ring.length))
      return 0;
    var n, i = 0, area = 0, p = ring[0], λ = p[0], φ = p[1], cosφ = Math.cos(φ), x0 = Math.atan2(invisible * Math.sin(λ) * cosφ, Math.sin(φ)), y0 = 1 - invisible * Math.cos(λ) * cosφ, x1 = x0, x, y;
    while (++i < n) {
      p = ring[i];
      cosφ = Math.cos(φ = p[1]);
      x = Math.atan2(invisible * Math.sin(λ = p[0]) * cosφ, Math.sin(φ));
      y = 1 - invisible * Math.cos(λ) * cosφ;
      if (Math.abs(y0 - 2) < ε && Math.abs(y - 2) < ε)
        continue;
      if (Math.abs(y) < ε || Math.abs(y0) < ε) {
      } else if (Math.abs(Math.abs(x - x0) - π) < ε) {
        if (y + y0 > 2)
          area += 4 * (x - x0);
      } else if (Math.abs(y0 - 2) < ε)
        area += 4 * (x - x1);
      else
        area += ((3 * π + x - x0) % (2 * π) - π) * (y0 + y);
      x1 = x0, x0 = x, y0 = y;
    }
    return area;
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.point)[0] < 0 ? a[1] - π / 2 - ε : π / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - π / 2 - ε : π / 2 - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function () {
        listener.lineStart();
        clean = 1;
      },
      point: function (λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = Math.abs(λ1 - λ0);
        if (Math.abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? π / 2 : -π / 2);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (Math.abs(λ0 - sλ0) < ε)
            λ0 -= sλ0 * ε;
          if (Math.abs(λ1 - sλ1) < ε)
            λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function () {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function () {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return Math.abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * π / 2;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (Math.abs(from[0] - to[0]) > ε) {
      var s = (from[0] < to[0] ? 1 : -1) * π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = Math.abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function () {
          v00 = v0 = false;
          clean = 1;
        },
        point: function (λ, φ) {
          var point1 = [
              λ,
              φ
            ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v))
            listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function () {
          if (v0)
            listener.lineEnd();
          point0 = null;
        },
        clean: function () {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [
          1,
          0,
          0
        ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant)
        return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0)
        return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two)
        return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0)
        z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = Math.abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0)
        z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (Math.abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [
          q,
          d3_geo_spherical(q1)
        ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r)
        code |= 1;
      else if (λ > r)
        code |= 2;
      if (φ < -r)
        code |= 4;
      else if (φ > r)
        code |= 8;
      return code;
    }
  }
  var d3_geo_clipViewMAX = 1000000000;
  function d3_geo_clipView(x0, y0, x1, y1) {
    return function (listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), segments, polygon, ring;
      var clip = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function () {
            listener = bufferListener;
            segments = [];
            polygon = [];
          },
          polygonEnd: function () {
            listener = listener_;
            if ((segments = d3.merge(segments)).length) {
              listener.polygonStart();
              d3_geo_clipPolygon(segments, compare, inside, interpolate, listener);
              listener.polygonEnd();
            } else if (insidePolygon([
                x0,
                y0
              ])) {
              listener.polygonStart(), listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd(), listener.polygonEnd();
            }
            segments = polygon = ring = null;
          }
        };
      function inside(point) {
        var a = corner(point, -1), i = insidePolygon([
            a === 0 || a === 3 ? x0 : x1,
            a > 1 ? y1 : y0
          ]);
        return i;
      }
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && isLeft(a, b, p) > 0)
                ++wn;
            } else {
              if (b[1] <= y && isLeft(a, b, p) < 0)
                --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function isLeft(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (visible(x, y))
          listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first;
      function lineStart() {
        clip.point = linePoint;
        if (polygon)
          polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_)
            bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_)
          listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipViewMAX, Math.min(d3_geo_clipViewMAX, x));
        y = Math.max(-d3_geo_clipViewMAX, Math.min(d3_geo_clipViewMAX, y));
        var v = visible(x, y);
        if (polygon)
          ring.push([
            x,
            y
          ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_)
            listener.point(x, y);
          else {
            var a = [
                x_,
                y_
              ], b = [
                x,
                y
              ];
            if (clipLine(a, b)) {
              if (!v_) {
                listener.lineStart();
                listener.point(a[0], a[1]);
              }
              listener.point(b[0], b[1]);
              if (!v)
                listener.lineEnd();
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return Math.abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : Math.abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : Math.abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.point, b.point);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    function clipLine(a, b) {
      var dx = b[0] - a[0], dy = b[1] - a[1], t = [
          0,
          1
        ];
      if (Math.abs(dx) < ε && Math.abs(dy) < ε)
        return x0 <= a[0] && a[0] <= x1 && y0 <= a[1] && a[1] <= y1;
      if (d3_geo_clipViewT(x0 - a[0], dx, t) && d3_geo_clipViewT(a[0] - x1, -dx, t) && d3_geo_clipViewT(y0 - a[1], dy, t) && d3_geo_clipViewT(a[1] - y1, -dy, t)) {
        if (t[1] < 1) {
          b[0] = a[0] + t[1] * dx;
          b[1] = a[1] + t[1] * dy;
        }
        if (t[0] > 0) {
          a[0] += t[0] * dx;
          a[1] += t[0] * dy;
        }
        return true;
      }
      return false;
    }
  }
  function d3_geo_clipViewT(num, denominator, t) {
    if (Math.abs(denominator) < ε)
      return num <= 0;
    var u = num / denominator;
    if (denominator > 0) {
      if (u > t[1])
        return false;
      if (u > t[0])
        t[0] = u;
    } else {
      if (u < t[0])
        return false;
      if (u < t[1])
        t[1] = u;
    }
    return true;
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert)
      compose.invert = function (x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
      };
    return compose;
  }
  function d3_geo_resample(project) {
    var δ2 = 0.5, maxDepth = 16;
    function resample(stream) {
      var λ0, x0, y0, a0, b0, c0;
      var resample = {
          point: point,
          lineStart: lineStart,
          lineEnd: lineEnd,
          polygonStart: function () {
            stream.polygonStart();
            resample.lineStart = polygonLineStart;
          },
          polygonEnd: function () {
            stream.polygonEnd();
            resample.lineStart = lineStart;
          }
        };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([
            λ,
            φ
          ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function polygonLineStart() {
        var λ00, φ00, x00, y00, a00, b00, c00;
        lineStart();
        resample.point = function (λ, φ) {
          linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
          resample.point = linePoint;
        };
        resample.lineEnd = function () {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
          resample.lineEnd = lineEnd;
          lineEnd();
        };
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = Math.abs(Math.abs(c) - 1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || Math.abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function (_) {
      if (!arguments.length)
        return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function () {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function (x, y) {
        x = project(x, y);
        return [
          x[0] * k + δx,
          δy - x[1] * k
        ];
      }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [
        point[0] * k + δx,
        δy - point[1] * k
      ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [
        point[0] * d3_degrees,
        point[1] * d3_degrees
      ];
    }
    projection.stream = function (stream) {
      return d3_geo_projectionRadiansRotate(rotate, preclip(projectResample(postclip(stream))));
    };
    projection.clipAngle = function (_) {
      if (!arguments.length)
        return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return projection;
    };
    projection.clipExtent = function (_) {
      if (!arguments.length)
        return clipExtent;
      clipExtent = _;
      postclip = _ == null ? d3_identity : d3_geo_clipView(_[0][0], _[0][1], _[1][0], _[1][1]);
      return projection;
    };
    projection.scale = function (_) {
      if (!arguments.length)
        return k;
      k = +_;
      return reset();
    };
    projection.translate = function (_) {
      if (!arguments.length)
        return [
          x,
          y
        ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function (_) {
      if (!arguments.length)
        return [
          λ * d3_degrees,
          φ * d3_degrees
        ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function (_) {
      if (!arguments.length)
        return [
          δλ * d3_degrees,
          δφ * d3_degrees,
          δγ * d3_degrees
        ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, 'precision');
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return projection;
    }
    return function () {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadiansRotate(rotate, stream) {
    return {
      point: function (x, y) {
        y = rotate(x * d3_radians, y * d3_radians), x = y[0];
        stream.point(x > π ? x - 2 * π : x < -π ? x + 2 * π : x, y[1]);
      },
      sphere: function () {
        stream.sphere();
      },
      lineStart: function () {
        stream.lineStart();
      },
      lineEnd: function () {
        stream.lineEnd();
      },
      polygonStart: function () {
        stream.polygonStart();
      },
      polygonEnd: function () {
        stream.polygonEnd();
      }
    };
  }
  function d3_geo_equirectangular(λ, φ) {
    return [
      λ,
      φ
    ];
  }
  (d3.geo.equirectangular = function () {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function (rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function (coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_equirectangular;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function (λ, φ) {
      return λ += δλ, [
        λ > π ? λ - 2 * π : λ < -π ? λ + 2 * π : λ,
        φ
      ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [
        Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ),
        Math.asin(Math.max(-1, Math.min(1, k * cosδγ + y * sinδγ)))
      ];
    }
    rotation.invert = function (λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [
        Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ),
        Math.asin(Math.max(-1, Math.min(1, k * cosδφ - x * sinδφ)))
      ];
    };
    return rotation;
  }
  d3.geo.circle = function () {
    var origin = [
        0,
        0
      ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === 'function' ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function (x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: 'Polygon',
        coordinates: [ring]
      };
    }
    circle.origin = function (x) {
      if (!arguments.length)
        return origin;
      origin = x;
      return circle;
    };
    circle.angle = function (x) {
      if (!arguments.length)
        return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function (_) {
      if (!arguments.length)
        return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function (from, to, direction, listener) {
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to)
          from += direction * 2 * π;
      } else {
        from = radius + direction * 2 * π;
        to = radius;
      }
      var point;
      for (var step = direction * precision, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([
          cr,
          -sr * Math.cos(t),
          -sr * Math.sin(t)
        ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function (a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function () {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: 'MultiLineString',
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) {
        return Math.abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function (y) {
        return Math.abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function () {
      return lines().map(function (coordinates) {
        return {
          type: 'LineString',
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function () {
      return {
        type: 'Polygon',
        coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
      };
    };
    graticule.extent = function (_) {
      if (!arguments.length)
        return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function (_) {
      if (!arguments.length)
        return [
          [
            X0,
            Y0
          ],
          [
            X1,
            Y1
          ]
        ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1)
        _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1)
        _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function (_) {
      if (!arguments.length)
        return [
          [
            x0,
            y0
          ],
          [
            x1,
            y1
          ]
        ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1)
        _ = x0, x0 = x1, x1 = _;
      if (y0 > y1)
        _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function (_) {
      if (!arguments.length)
        return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function (_) {
      if (!arguments.length)
        return [
          DX,
          DY
        ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function (_) {
      if (!arguments.length)
        return [
          dx,
          dy
        ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function (_) {
      if (!arguments.length)
        return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([
      [
        -180,
        -90 + ε
      ],
      [
        180,
        90 - ε
      ]
    ]).minorExtent([
      [
        -180,
        -80 - ε
      ],
      [
        180,
        80 + ε
      ]
    ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function (x) {
      return y.map(function (y) {
        return [
          x,
          y
        ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function (y) {
      return x.map(function (x) {
        return [
          x,
          y
        ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function () {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: 'LineString',
        coordinates: [
          source_ || source.apply(this, arguments),
          target_ || target.apply(this, arguments)
        ]
      };
    }
    greatArc.distance = function () {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function (_) {
      if (!arguments.length)
        return source;
      source = _, source_ = typeof _ === 'function' ? null : _;
      return greatArc;
    };
    greatArc.target = function (_) {
      if (!arguments.length)
        return target;
      target = _, target_ = typeof _ === 'function' ? null : _;
      return greatArc;
    };
    greatArc.precision = function () {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function (source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function (t) {
        var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
        return [
          Math.atan2(y, x) * d3_degrees,
          Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees
        ];
      } : function () {
        return [
          x0 * d3_degrees,
          y0 * d3_degrees
        ];
      };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function (object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
      sphere: d3_noop,
      point: d3_noop,
      lineStart: d3_geo_lengthLineStart,
      lineEnd: d3_noop,
      polygonStart: d3_noop,
      polygonEnd: d3_noop
    };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function (λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function () {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = Math.abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function (_) {
      if (!arguments.length)
        return [
          φ0 / π * 180,
          φ1 / π * 180
        ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [
        ρ * Math.sin(λ *= n),
        ρ0 - ρ * Math.cos(λ)
      ];
    }
    forward.invert = function (x, y) {
      var ρ0_y = ρ0 - y;
      return [
        Math.atan2(x, ρ0_y) / n,
        d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))
      ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function () {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function () {
    return d3.geo.conicEqualArea().rotate([
      96,
      0
    ]).center([
      -0.6,
      38.7
    ]).parallels([
      29.5,
      45.5
    ]).scale(1070);
  };
  d3.geo.albersUsa = function () {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([
        154,
        0
      ]).center([
        -2,
        58.5
      ]).parallels([
        55,
        65
      ]);
    var hawaii = d3.geo.conicEqualArea().rotate([
        157,
        0
      ]).center([
        -3,
        19.9
      ]).parallels([
        8,
        18
      ]);
    var point, pointStream = {
        point: function (x, y) {
          point = [
            x,
            y
          ];
        }
      }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function (coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= 0.12 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function (stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function (x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function () {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function () {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function () {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function () {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function () {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function (_) {
      if (!arguments.length)
        return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function (_) {
      if (!arguments.length)
        return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * 0.35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function (_) {
      if (!arguments.length)
        return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([
        [
          x - 0.455 * k,
          y - 0.238 * k
        ],
        [
          x + 0.455 * k,
          y + 0.238 * k
        ]
      ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([
        x - 0.307 * k,
        y + 0.201 * k
      ]).clipExtent([
        [
          x - 0.425 * k + ε,
          y + 0.12 * k + ε
        ],
        [
          x - 0.214 * k - ε,
          y + 0.234 * k - ε
        ]
      ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([
        x - 0.205 * k,
        y + 0.212 * k
      ]).clipExtent([
        [
          x - 0.214 * k + ε,
          y + 0.166 * k + ε
        ],
        [
          x - 0.115 * k - ε,
          y + 0.234 * k - ε
        ]
      ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
      point: d3_noop,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: function () {
        d3_geo_pathAreaPolygon = 0;
        d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
      },
      polygonEnd: function () {
        d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
        d3_geo_pathAreaSum += Math.abs(d3_geo_pathAreaPolygon / 2);
      }
    };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function (x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function () {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
      point: d3_geo_pathBoundsPoint,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: d3_noop,
      polygonEnd: d3_noop
    };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0)
      d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1)
      d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0)
      d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1)
      d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
        point: point,
        lineStart: function () {
          stream.point = pointLineStart;
        },
        lineEnd: lineEnd,
        polygonStart: function () {
          stream.lineEnd = lineEndPolygon;
        },
        polygonEnd: function () {
          stream.lineEnd = lineEnd;
          stream.point = point;
        },
        pointRadius: function (_) {
          pointCircle = d3_geo_pathBufferCircle(_);
          return stream;
        },
        result: function () {
          if (buffer.length) {
            var result = buffer.join('');
            buffer = [];
            return result;
          }
        }
      };
    function point(x, y) {
      buffer.push('M', x, ',', y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push('M', x, ',', y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push('L', x, ',', y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push('Z');
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return 'm0,' + radius + 'a' + radius + ',' + radius + ' 0 1,1 0,' + -2 * radius + 'a' + radius + ',' + radius + ' 0 1,1 0,' + 2 * radius + 'z';
  }
  var d3_geo_pathCentroid = {
      point: d3_geo_pathCentroidPoint,
      lineStart: d3_geo_pathCentroidLineStart,
      lineEnd: d3_geo_pathCentroidLineEnd,
      polygonStart: function () {
        d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
      },
      polygonEnd: function () {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
        d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
        d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
      }
    };
  function d3_geo_pathCentroidPoint(x, y) {
    if (d3_geo_centroidDimension)
      return;
    d3_geo_centroidX += x;
    d3_geo_centroidY += y;
    ++d3_geo_centroidZ;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    if (d3_geo_centroidDimension !== 1) {
      if (d3_geo_centroidDimension < 1) {
        d3_geo_centroidDimension = 1;
        d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      } else
        return;
    }
    d3_geo_pathCentroid.point = function (x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      x0 = x, y0 = y;
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX += z * (x0 + x) / 2;
      d3_geo_centroidY += z * (y0 + y) / 2;
      d3_geo_centroidZ += z;
      x0 = x, y0 = y;
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    if (d3_geo_centroidDimension < 2) {
      d3_geo_centroidDimension = 2;
      d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    }
    d3_geo_pathCentroid.point = function (x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      var z = y0 * x - x0 * y;
      d3_geo_centroidX += z * (x0 + x);
      d3_geo_centroidY += z * (y0 + y);
      d3_geo_centroidZ += z * 3;
      x0 = x, y0 = y;
    }
    d3_geo_pathCentroid.lineEnd = function () {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
        point: point,
        lineStart: function () {
          stream.point = pointLineStart;
        },
        lineEnd: lineEnd,
        polygonStart: function () {
          stream.lineEnd = lineEndPolygon;
        },
        polygonEnd: function () {
          stream.lineEnd = lineEnd;
          stream.point = point;
        },
        pointRadius: function (_) {
          pointRadius = _;
          return stream;
        },
        result: d3_noop
      };
    function point(x, y) {
      context.moveTo(x, y);
      context.arc(x, y, pointRadius, 0, 2 * π);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  d3.geo.path = function () {
    var pointRadius = 4.5, projection, context, projectStream, contextStream;
    function path(object) {
      if (object)
        d3.geo.stream(object, projectStream(contextStream.pointRadius(typeof pointRadius === 'function' ? +pointRadius.apply(this, arguments) : pointRadius)));
      return contextStream.result();
    }
    path.area = function (object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function (object) {
      d3_geo_centroidDimension = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ ? [
        d3_geo_centroidX / d3_geo_centroidZ,
        d3_geo_centroidY / d3_geo_centroidZ
      ] : undefined;
    };
    path.bounds = function (object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [
        [
          d3_geo_pathBoundsX0,
          d3_geo_pathBoundsY0
        ],
        [
          d3_geo_pathBoundsX1,
          d3_geo_pathBoundsY1
        ]
      ];
    };
    path.projection = function (_) {
      if (!arguments.length)
        return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return path;
    };
    path.context = function (_) {
      if (!arguments.length)
        return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      return path;
    };
    path.pointRadius = function (_) {
      if (!arguments.length)
        return pointRadius;
      pointRadius = typeof _ === 'function' ? _ : +_;
      return path;
    };
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function (λ, φ) {
        return project([
          λ * d3_degrees,
          φ * d3_degrees
        ]);
      });
    return function (stream) {
      stream = resample(stream);
      return {
        point: function (λ, φ) {
          stream.point(λ * d3_radians, φ * d3_radians);
        },
        sphere: function () {
          stream.sphere();
        },
        lineStart: function () {
          stream.lineStart();
        },
        lineEnd: function () {
          stream.lineEnd();
        },
        polygonStart: function () {
          stream.polygonStart();
        },
        polygonEnd: function () {
          stream.polygonEnd();
        }
      };
    };
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [
        k * cosφ * Math.sin(λ),
        k * Math.sin(φ)
      ];
    }
    azimuthal.invert = function (x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [
        Math.atan2(x * sinc, ρ * cosc),
        Math.asin(ρ && y * sinc / ρ)
      ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function (cosλcosφ) {
      return Math.sqrt(2 / (1 + cosλcosφ));
    }, function (ρ) {
      return 2 * Math.asin(ρ / 2);
    });
  (d3.geo.azimuthalEqualArea = function () {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function (cosλcosφ) {
      var c = Math.acos(cosλcosφ);
      return c && c / Math.sin(c);
    }, d3_identity);
  (d3.geo.azimuthalEquidistant = function () {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function (φ) {
        return Math.tan(π / 4 + φ / 2);
      }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n)
      return d3_geo_mercator;
    function forward(λ, φ) {
      var ρ = Math.abs(Math.abs(φ) - π / 2) < ε ? 0 : F / Math.pow(t(φ), n);
      return [
        ρ * Math.sin(n * λ),
        F - ρ * Math.cos(n * λ)
      ];
    }
    forward.invert = function (x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [
        Math.atan2(x, ρ0_y) / n,
        2 * Math.atan(Math.pow(F / ρ, 1 / n)) - π / 2
      ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function () {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (Math.abs(n) < ε)
      return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [
        ρ * Math.sin(n * λ),
        G - ρ * Math.cos(n * λ)
      ];
    }
    forward.invert = function (x, y) {
      var ρ0_y = G - y;
      return [
        Math.atan2(x, ρ0_y) / n,
        G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)
      ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function () {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function (cosλcosφ) {
      return 1 / cosλcosφ;
    }, Math.atan);
  (d3.geo.gnomonic = function () {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [
      λ,
      Math.log(Math.tan(π / 4 + φ / 2))
    ];
  }
  d3_geo_mercator.invert = function (x, y) {
    return [
      x,
      2 * Math.atan(Math.exp(y)) - π / 2
    ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function () {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function () {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function (_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([
            [
              t[0] - k,
              t[1] - k
            ],
            [
              t[0] + k,
              t[1] + k
            ]
          ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function () {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function () {
      return 1;
    }, Math.asin);
  (d3.geo.orthographic = function () {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function (cosλcosφ) {
      return 1 / (1 + cosλcosφ);
    }, function (ρ) {
      return 2 * Math.atan(ρ);
    });
  (d3.geo.stereographic = function () {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    var B = Math.cos(φ) * Math.sin(λ);
    return [
      Math.log((1 + B) / (1 - B)) / 2,
      Math.atan2(Math.tan(φ), Math.cos(λ))
    ];
  }
  d3_geo_transverseMercator.invert = function (x, y) {
    return [
      Math.atan2(d3_sinh(x), Math.cos(y)),
      d3_asin(Math.sin(y) / d3_cosh(x))
    ];
  };
  (d3.geo.transverseMercator = function () {
    return d3_geo_mercatorProjection(d3_geo_transverseMercator);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  d3.svg = {};
  function d3_svg_line(projection) {
    var x = d3_svg_lineX, y = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = 0.7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push('M', interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([
            +fx.call(this, d, i),
            +fy.call(this, d, i)
          ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length)
        segment();
      return segments.length ? segments.join('') : null;
    }
    line.x = function (_) {
      if (!arguments.length)
        return x;
      x = _;
      return line;
    };
    line.y = function (_) {
      if (!arguments.length)
        return y;
      y = _;
      return line;
    };
    line.defined = function (_) {
      if (!arguments.length)
        return defined;
      defined = _;
      return line;
    };
    line.interpolate = function (_) {
      if (!arguments.length)
        return interpolateKey;
      if (typeof _ === 'function')
        interpolateKey = interpolate = _;
      else
        interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function (_) {
      if (!arguments.length)
        return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function () {
    return d3_svg_line(d3_identity);
  };
  function d3_svg_lineX(d) {
    return d[0];
  }
  function d3_svg_lineY(d) {
    return d[1];
  }
  var d3_svg_lineInterpolators = d3.map({
      linear: d3_svg_lineLinear,
      'linear-closed': d3_svg_lineLinearClosed,
      'step-before': d3_svg_lineStepBefore,
      'step-after': d3_svg_lineStepAfter,
      basis: d3_svg_lineBasis,
      'basis-open': d3_svg_lineBasisOpen,
      'basis-closed': d3_svg_lineBasisClosed,
      bundle: d3_svg_lineBundle,
      cardinal: d3_svg_lineCardinal,
      'cardinal-open': d3_svg_lineCardinalOpen,
      'cardinal-closed': d3_svg_lineCardinalClosed,
      monotone: d3_svg_lineMonotone
    });
  d3_svg_lineInterpolators.forEach(function (key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.join('L');
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + 'Z';
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [
        p[0],
        ',',
        p[1]
      ];
    while (++i < n)
      path.push('V', (p = points[i])[1], 'H', p[0]);
    return path.join('');
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [
        p[0],
        ',',
        p[1]
      ];
    while (++i < n)
      path.push('H', (p = points[i])[0], 'V', p[1]);
    return path.join('');
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = '', p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += 'Q' + (p[0] - t0[0] * 2 / 3) + ',' + (p[1] - t0[1] * 2 / 3) + ',' + p[0] + ',' + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += 'C' + (p0[0] + t0[0]) + ',' + (p0[1] + t0[1]) + ',' + (p[0] - t[0]) + ',' + (p[1] - t[1]) + ',' + p[0] + ',' + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += 'S' + (p[0] - t[0]) + ',' + (p[1] - t[1]) + ',' + p[0] + ',' + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += 'Q' + (p[0] + t[0] * 2 / 3) + ',' + (p[1] + t[1] * 2 / 3) + ',' + lp[0] + ',' + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([
        a * (p2[0] - p0[0]),
        a * (p2[1] - p0[1])
      ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3)
      return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [
        x0,
        x0,
        x0,
        (pi = points[1])[0]
      ], py = [
        y0,
        y0,
        y0,
        pi[1]
      ], path = [
        x0,
        ',',
        y0
      ];
    d3_svg_lineBasisBezier(path, px, py);
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    i = -1;
    while (++i < 2) {
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join('');
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4)
      return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [0], py = [0];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + ',' + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join('');
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [
      d3_svg_lineDot4(d3_svg_lineBasisBezier3, px),
      ',',
      d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)
    ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join('');
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [
      0,
      2 / 3,
      1 / 3,
      0
    ], d3_svg_lineBasisBezier2 = [
      0,
      1 / 3,
      2 / 3,
      0
    ], d3_svg_lineBasisBezier3 = [
      0,
      1 / 6,
      2 / 3,
      1 / 6
    ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push('C', d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ',', d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ',', d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ',', d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ',', d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ',', d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (Math.abs(d) < 0.000001) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([
        s || 0,
        m[i] * s || 0
      ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.geom.hull = function (vertices) {
    var x = d3_svg_lineX, y = d3_svg_lineY;
    if (arguments.length)
      return hull(vertices);
    function hull(data) {
      if (data.length < 3)
        return [];
      var fx = d3_functor(x), fy = d3_functor(y), n = data.length, vertices, plen = n - 1, points = [], stack = [], d, i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;
      if (fx === d3_svg_lineX && y === d3_svg_lineY)
        vertices = data;
      else
        for (i = 0, vertices = []; i < n; ++i) {
          vertices.push([
            +fx.call(this, d = data[i], i),
            +fy.call(this, d, i)
          ]);
        }
      for (i = 1; i < n; ++i) {
        if (vertices[i][1] < vertices[h][1] || vertices[i][1] == vertices[h][1] && vertices[i][0] < vertices[h][0])
          h = i;
      }
      for (i = 0; i < n; ++i) {
        if (i === h)
          continue;
        y1 = vertices[i][1] - vertices[h][1];
        x1 = vertices[i][0] - vertices[h][0];
        points.push({
          angle: Math.atan2(y1, x1),
          index: i
        });
      }
      points.sort(function (a, b) {
        return a.angle - b.angle;
      });
      a = points[0].angle;
      v = points[0].index;
      u = 0;
      for (i = 1; i < plen; ++i) {
        j = points[i].index;
        if (a == points[i].angle) {
          x1 = vertices[v][0] - vertices[h][0];
          y1 = vertices[v][1] - vertices[h][1];
          x2 = vertices[j][0] - vertices[h][0];
          y2 = vertices[j][1] - vertices[h][1];
          if (x1 * x1 + y1 * y1 >= x2 * x2 + y2 * y2) {
            points[i].index = -1;
            continue;
          } else {
            points[u].index = -1;
          }
        }
        a = points[i].angle;
        u = i;
        v = j;
      }
      stack.push(h);
      for (i = 0, j = 0; i < 2; ++j) {
        if (points[j].index > -1) {
          stack.push(points[j].index);
          i++;
        }
      }
      sp = stack.length;
      for (; j < plen; ++j) {
        if (points[j].index < 0)
          continue;
        while (!d3_geom_hullCCW(stack[sp - 2], stack[sp - 1], points[j].index, vertices)) {
          --sp;
        }
        stack[sp++] = points[j].index;
      }
      var poly = [];
      for (i = sp - 1; i >= 0; --i)
        poly.push(data[stack[i]]);
      return poly;
    }
    hull.x = function (_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function (_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullCCW(i1, i2, i3, v) {
    var t, a, b, c, d, e, f;
    t = v[i1];
    a = t[0];
    b = t[1];
    t = v[i2];
    c = t[0];
    d = t[1];
    t = v[i3];
    e = t[0];
    f = t[1];
    return (f - b) * (c - a) - (d - b) * (e - a) > 0;
  }
  d3.geom.polygon = function (coordinates) {
    coordinates.area = function () {
      var i = 0, n = coordinates.length, area = coordinates[n - 1][1] * coordinates[0][0] - coordinates[n - 1][0] * coordinates[0][1];
      while (++i < n) {
        area += coordinates[i - 1][1] * coordinates[i][0] - coordinates[i - 1][0] * coordinates[i][1];
      }
      return area * 0.5;
    };
    coordinates.centroid = function (k) {
      var i = -1, n = coordinates.length, x = 0, y = 0, a, b = coordinates[n - 1], c;
      if (!arguments.length)
        k = -1 / (6 * coordinates.area());
      while (++i < n) {
        a = b;
        b = coordinates[i];
        c = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * c;
        y += (a[1] + b[1]) * c;
      }
      return [
        x * k,
        y * k
      ];
    };
    coordinates.clip = function (subject) {
      var input, i = -1, n = coordinates.length, j, m, a = coordinates[n - 1], b, c, d;
      while (++i < n) {
        input = subject.slice();
        subject.length = 0;
        b = coordinates[i];
        c = input[(m = input.length) - 1];
        j = -1;
        while (++j < m) {
          d = input[j];
          if (d3_geom_polygonInside(d, a, b)) {
            if (!d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            subject.push(d);
          } else if (d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          c = d;
        }
        a = b;
      }
      return subject;
    };
    return coordinates;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [
      x1 + ua * x21,
      y1 + ua * y21
    ];
  }
  d3.geom.delaunay = function (vertices) {
    var edges = vertices.map(function () {
        return [];
      }), triangles = [];
    d3_geom_voronoiTessellate(vertices, function (e) {
      edges[e.region.l.index].push(vertices[e.region.r.index]);
    });
    edges.forEach(function (edge, i) {
      var v = vertices[i], cx = v[0], cy = v[1];
      edge.forEach(function (v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
      });
      edge.sort(function (a, b) {
        return a.angle - b.angle;
      });
      for (var j = 0, m = edge.length - 1; j < m; j++) {
        triangles.push([
          v,
          edge[j],
          edge[j + 1]
        ]);
      }
    });
    return triangles;
  };
  d3.geom.voronoi = function (points) {
    var size = null, x = d3_svg_lineX, y = d3_svg_lineY, clip;
    if (arguments.length)
      return voronoi(points);
    function voronoi(data) {
      var points, polygons = data.map(function () {
          return [];
        }), fx = d3_functor(x), fy = d3_functor(y), d, i, n = data.length, Z = 1000000;
      if (fx === d3_svg_lineX && fy === d3_svg_lineY)
        points = data;
      else
        for (points = [], i = 0; i < n; ++i) {
          points.push([
            +fx.call(this, d = data[i], i),
            +fy.call(this, d, i)
          ]);
        }
      d3_geom_voronoiTessellate(points, function (e) {
        var s1, s2, x1, x2, y1, y2;
        if (e.a === 1 && e.b >= 0) {
          s1 = e.ep.r;
          s2 = e.ep.l;
        } else {
          s1 = e.ep.l;
          s2 = e.ep.r;
        }
        if (e.a === 1) {
          y1 = s1 ? s1.y : -Z;
          x1 = e.c - e.b * y1;
          y2 = s2 ? s2.y : Z;
          x2 = e.c - e.b * y2;
        } else {
          x1 = s1 ? s1.x : -Z;
          y1 = e.c - e.a * x1;
          x2 = s2 ? s2.x : Z;
          y2 = e.c - e.a * x2;
        }
        var v1 = [
            x1,
            y1
          ], v2 = [
            x2,
            y2
          ];
        polygons[e.region.l.index].push(v1, v2);
        polygons[e.region.r.index].push(v1, v2);
      });
      polygons = polygons.map(function (polygon, i) {
        var cx = points[i][0], cy = points[i][1], angle = polygon.map(function (v) {
            return Math.atan2(v[0] - cx, v[1] - cy);
          }), order = d3.range(polygon.length).sort(function (a, b) {
            return angle[a] - angle[b];
          });
        return order.filter(function (d, i) {
          return !i || angle[d] - angle[order[i - 1]] > ε;
        }).map(function (d) {
          return polygon[d];
        });
      });
      polygons.forEach(function (polygon, i) {
        var n = polygon.length;
        if (!n)
          return polygon.push([
            -Z,
            -Z
          ], [
            -Z,
            Z
          ], [
            Z,
            Z
          ], [
            Z,
            -Z
          ]);
        if (n > 2)
          return;
        var p0 = points[i], p1 = polygon[0], p2 = polygon[1], x0 = p0[0], y0 = p0[1], x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1], dx = Math.abs(x2 - x1), dy = y2 - y1;
        if (Math.abs(dy) < ε) {
          var y = y0 < y1 ? -Z : Z;
          polygon.push([
            -Z,
            y
          ], [
            Z,
            y
          ]);
        } else if (dx < ε) {
          var x = x0 < x1 ? -Z : Z;
          polygon.push([
            x,
            -Z
          ], [
            x,
            Z
          ]);
        } else {
          var y = (x2 - x1) * (y1 - y0) < (x1 - x0) * (y2 - y1) ? Z : -Z, z = Math.abs(dy) - dx;
          if (Math.abs(z) < ε) {
            polygon.push([
              dy < 0 ? y : -y,
              y
            ]);
          } else {
            if (z > 0)
              y *= -1;
            polygon.push([
              -Z,
              y
            ], [
              Z,
              y
            ]);
          }
        }
      });
      if (clip)
        for (i = 0; i < n; ++i)
          clip(polygons[i]);
      for (i = 0; i < n; ++i)
        polygons[i].point = data[i];
      return polygons;
    }
    voronoi.x = function (_) {
      return arguments.length ? (x = _, voronoi) : x;
    };
    voronoi.y = function (_) {
      return arguments.length ? (y = _, voronoi) : y;
    };
    voronoi.size = function (_) {
      if (!arguments.length)
        return size;
      if (_ == null) {
        clip = null;
      } else {
        size = [
          +_[0],
          +_[1]
        ];
        clip = d3.geom.polygon([
          [
            0,
            0
          ],
          [
            0,
            size[1]
          ],
          size,
          [
            size[0],
            0
          ]
        ]).clip;
      }
      return voronoi;
    };
    voronoi.links = function (data) {
      var points, graph = data.map(function () {
          return [];
        }), links = [], fx = d3_functor(x), fy = d3_functor(y), d, i, n = data.length;
      if (fx === d3_svg_lineX && fy === d3_svg_lineY)
        points = data;
      else
        for (i = 0; i < n; ++i) {
          points.push([
            +fx.call(this, d = data[i], i),
            +fy.call(this, d, i)
          ]);
        }
      d3_geom_voronoiTessellate(points, function (e) {
        var l = e.region.l.index, r = e.region.r.index;
        if (graph[l][r])
          return;
        graph[l][r] = graph[r][l] = true;
        links.push({
          source: data[l],
          target: data[r]
        });
      });
      return links;
    };
    voronoi.triangles = function (data) {
      if (x === d3_svg_lineX && y === d3_svg_lineY)
        return d3.geom.delaunay(data);
      var points, point, fx = d3_functor(x), fy = d3_functor(y), d, i, n;
      for (i = 0, points = [], n = data.length; i < n; ++i) {
        point = [
          +fx.call(this, d = data[i], i),
          +fy.call(this, d, i)
        ];
        point.data = d;
        points.push(point);
      }
      return d3.geom.delaunay(points).map(function (triangle) {
        return triangle.map(function (point) {
          return point.data;
        });
      });
    };
    return voronoi;
  };
  var d3_geom_voronoiOpposite = {
      l: 'r',
      r: 'l'
    };
  function d3_geom_voronoiTessellate(points, callback) {
    var Sites = {
        list: points.map(function (v, i) {
          return {
            index: i,
            x: v[0],
            y: v[1]
          };
        }).sort(function (a, b) {
          return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
        }),
        bottomSite: null
      };
    var EdgeList = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function () {
          EdgeList.leftEnd = EdgeList.createHalfEdge(null, 'l');
          EdgeList.rightEnd = EdgeList.createHalfEdge(null, 'l');
          EdgeList.leftEnd.r = EdgeList.rightEnd;
          EdgeList.rightEnd.l = EdgeList.leftEnd;
          EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);
        },
        createHalfEdge: function (edge, side) {
          return {
            edge: edge,
            side: side,
            vertex: null,
            l: null,
            r: null
          };
        },
        insert: function (lb, he) {
          he.l = lb;
          he.r = lb.r;
          lb.r.l = he;
          lb.r = he;
        },
        leftBound: function (p) {
          var he = EdgeList.leftEnd;
          do {
            he = he.r;
          } while (he != EdgeList.rightEnd && Geom.rightOf(he, p));
          he = he.l;
          return he;
        },
        del: function (he) {
          he.l.r = he.r;
          he.r.l = he.l;
          he.edge = null;
        },
        right: function (he) {
          return he.r;
        },
        left: function (he) {
          return he.l;
        },
        leftRegion: function (he) {
          return he.edge == null ? Sites.bottomSite : he.edge.region[he.side];
        },
        rightRegion: function (he) {
          return he.edge == null ? Sites.bottomSite : he.edge.region[d3_geom_voronoiOpposite[he.side]];
        }
      };
    var Geom = {
        bisect: function (s1, s2) {
          var newEdge = {
              region: {
                l: s1,
                r: s2
              },
              ep: {
                l: null,
                r: null
              }
            };
          var dx = s2.x - s1.x, dy = s2.y - s1.y, adx = dx > 0 ? dx : -dx, ady = dy > 0 ? dy : -dy;
          newEdge.c = s1.x * dx + s1.y * dy + (dx * dx + dy * dy) * 0.5;
          if (adx > ady) {
            newEdge.a = 1;
            newEdge.b = dy / dx;
            newEdge.c /= dx;
          } else {
            newEdge.b = 1;
            newEdge.a = dx / dy;
            newEdge.c /= dy;
          }
          return newEdge;
        },
        intersect: function (el1, el2) {
          var e1 = el1.edge, e2 = el2.edge;
          if (!e1 || !e2 || e1.region.r == e2.region.r) {
            return null;
          }
          var d = e1.a * e2.b - e1.b * e2.a;
          if (Math.abs(d) < 1e-10) {
            return null;
          }
          var xint = (e1.c * e2.b - e2.c * e1.b) / d, yint = (e2.c * e1.a - e1.c * e2.a) / d, e1r = e1.region.r, e2r = e2.region.r, el, e;
          if (e1r.y < e2r.y || e1r.y == e2r.y && e1r.x < e2r.x) {
            el = el1;
            e = e1;
          } else {
            el = el2;
            e = e2;
          }
          var rightOfSite = xint >= e.region.r.x;
          if (rightOfSite && el.side === 'l' || !rightOfSite && el.side === 'r') {
            return null;
          }
          return {
            x: xint,
            y: yint
          };
        },
        rightOf: function (he, p) {
          var e = he.edge, topsite = e.region.r, rightOfSite = p.x > topsite.x;
          if (rightOfSite && he.side === 'l') {
            return 1;
          }
          if (!rightOfSite && he.side === 'r') {
            return 0;
          }
          if (e.a === 1) {
            var dyp = p.y - topsite.y, dxp = p.x - topsite.x, fast = 0, above = 0;
            if (!rightOfSite && e.b < 0 || rightOfSite && e.b >= 0) {
              above = fast = dyp >= e.b * dxp;
            } else {
              above = p.x + p.y * e.b > e.c;
              if (e.b < 0) {
                above = !above;
              }
              if (!above) {
                fast = 1;
              }
            }
            if (!fast) {
              var dxs = topsite.x - e.region.l.x;
              above = e.b * (dxp * dxp - dyp * dyp) < dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b);
              if (e.b < 0) {
                above = !above;
              }
            }
          } else {
            var yl = e.c - e.a * p.x, t1 = p.y - yl, t2 = p.x - topsite.x, t3 = yl - topsite.y;
            above = t1 * t1 > t2 * t2 + t3 * t3;
          }
          return he.side === 'l' ? above : !above;
        },
        endPoint: function (edge, side, site) {
          edge.ep[side] = site;
          if (!edge.ep[d3_geom_voronoiOpposite[side]])
            return;
          callback(edge);
        },
        distance: function (s, t) {
          var dx = s.x - t.x, dy = s.y - t.y;
          return Math.sqrt(dx * dx + dy * dy);
        }
      };
    var EventQueue = {
        list: [],
        insert: function (he, site, offset) {
          he.vertex = site;
          he.ystar = site.y + offset;
          for (var i = 0, list = EventQueue.list, l = list.length; i < l; i++) {
            var next = list[i];
            if (he.ystar > next.ystar || he.ystar == next.ystar && site.x > next.vertex.x) {
              continue;
            } else {
              break;
            }
          }
          list.splice(i, 0, he);
        },
        del: function (he) {
          for (var i = 0, ls = EventQueue.list, l = ls.length; i < l && ls[i] != he; ++i) {
          }
          ls.splice(i, 1);
        },
        empty: function () {
          return EventQueue.list.length === 0;
        },
        nextEvent: function (he) {
          for (var i = 0, ls = EventQueue.list, l = ls.length; i < l; ++i) {
            if (ls[i] == he)
              return ls[i + 1];
          }
          return null;
        },
        min: function () {
          var elem = EventQueue.list[0];
          return {
            x: elem.vertex.x,
            y: elem.ystar
          };
        },
        extractMin: function () {
          return EventQueue.list.shift();
        }
      };
    EdgeList.init();
    Sites.bottomSite = Sites.list.shift();
    var newSite = Sites.list.shift(), newIntStar;
    var lbnd, rbnd, llbnd, rrbnd, bisector;
    var bot, top, temp, p, v;
    var e, pm;
    while (true) {
      if (!EventQueue.empty()) {
        newIntStar = EventQueue.min();
      }
      if (newSite && (EventQueue.empty() || newSite.y < newIntStar.y || newSite.y == newIntStar.y && newSite.x < newIntStar.x)) {
        lbnd = EdgeList.leftBound(newSite);
        rbnd = EdgeList.right(lbnd);
        bot = EdgeList.rightRegion(lbnd);
        e = Geom.bisect(bot, newSite);
        bisector = EdgeList.createHalfEdge(e, 'l');
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(lbnd, bisector);
        if (p) {
          EventQueue.del(lbnd);
          EventQueue.insert(lbnd, p, Geom.distance(p, newSite));
        }
        lbnd = bisector;
        bisector = EdgeList.createHalfEdge(e, 'r');
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(bisector, rbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, newSite));
        }
        newSite = Sites.list.shift();
      } else if (!EventQueue.empty()) {
        lbnd = EventQueue.extractMin();
        llbnd = EdgeList.left(lbnd);
        rbnd = EdgeList.right(lbnd);
        rrbnd = EdgeList.right(rbnd);
        bot = EdgeList.leftRegion(lbnd);
        top = EdgeList.rightRegion(rbnd);
        v = lbnd.vertex;
        Geom.endPoint(lbnd.edge, lbnd.side, v);
        Geom.endPoint(rbnd.edge, rbnd.side, v);
        EdgeList.del(lbnd);
        EventQueue.del(rbnd);
        EdgeList.del(rbnd);
        pm = 'l';
        if (bot.y > top.y) {
          temp = bot;
          bot = top;
          top = temp;
          pm = 'r';
        }
        e = Geom.bisect(bot, top);
        bisector = EdgeList.createHalfEdge(e, pm);
        EdgeList.insert(llbnd, bisector);
        Geom.endPoint(e, d3_geom_voronoiOpposite[pm], v);
        p = Geom.intersect(llbnd, bisector);
        if (p) {
          EventQueue.del(llbnd);
          EventQueue.insert(llbnd, p, Geom.distance(p, bot));
        }
        p = Geom.intersect(bisector, rrbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, bot));
        }
      } else {
        break;
      }
    }
    for (lbnd = EdgeList.right(EdgeList.leftEnd); lbnd != EdgeList.rightEnd; lbnd = EdgeList.right(lbnd)) {
      callback(lbnd.edge);
    }
  }
  d3.geom.quadtree = function (points, x1, y1, x2, y2) {
    var x = d3_svg_lineX, y = d3_svg_lineY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat)
          for (i = 0; i < n; ++i) {
            d = data[i];
            if (d.x < x1_)
              x1_ = d.x;
            if (d.y < y1_)
              y1_ = d.y;
            if (d.x > x2_)
              x2_ = d.x;
            if (d.y > y2_)
              y2_ = d.y;
            xs.push(d.x);
            ys.push(d.y);
          }
        else
          for (i = 0; i < n; ++i) {
            var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
            if (x_ < x1_)
              x1_ = x_;
            if (y_ < y1_)
              y1_ = y_;
            if (x_ > x2_)
              x2_ = x_;
            if (y_ > y2_)
              y2_ = y_;
            xs.push(x_);
            ys.push(y_);
          }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy)
        y2_ = y1_ + dx;
      else
        x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y))
          return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (Math.abs(nx - x) + Math.abs(ny - y) < 0.01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, right = x >= sx, bottom = y >= sy, i = (bottom << 1) + right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right)
          x1 = sx;
        else
          x2 = sx;
        if (bottom)
          y1 = sy;
        else
          y2 = sy;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function (d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function (f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else
        data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function (_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function (_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.size = function (_) {
      if (!arguments.length)
        return x1 == null ? null : [
          x2,
          y2
        ];
      if (_ == null) {
        x1 = y1 = x2 = y2 = null;
      } else {
        x1 = y1 = 0;
        x2 = +_[0], y2 = +_[1];
      }
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * 0.5, sy = (y1 + y2) * 0.5, children = node.nodes;
      if (children[0])
        d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1])
        d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2])
        d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3])
        d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function (t) {
      return '#' + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.transform = function (string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, 'g');
    return (d3.transform = function (string) {
      if (string != null) {
        g.setAttribute('transform', string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [
        m.a,
        m.b
      ], r1 = [
        m.c,
        m.d
      ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [
      m.e,
      m.f
    ];
    this.scale = [
      kx,
      ky
    ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function () {
    return 'translate(' + this.translate + ')rotate(' + this.rotate + ')skewX(' + this.skew + ')scale(' + this.scale + ')';
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    };
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    b -= a = +a;
    return function (t) {
      return a + b * t;
    };
  }
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransform(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push('translate(', null, ',', null, ')');
      q.push({
        i: 1,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push('translate(' + tb + ')');
    } else {
      s.push('');
    }
    if (ra != rb) {
      if (ra - rb > 180)
        rb += 360;
      else if (rb - ra > 180)
        ra += 360;
      q.push({
        i: s.push(s.pop() + 'rotate(', null, ')') - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + 'rotate(' + rb + ')');
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + 'skewX(', null, ')') - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + 'skewX(' + wb + ')');
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + 'scale(', null, ',', null, ')');
      q.push({
        i: n - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + 'scale(' + kb + ')');
    }
    n = q.length;
    return function (t) {
      var i = -1, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join('');
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolateByName(k)(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function (t) {
      for (k in i)
        c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var m, i, j, s0 = 0, s1 = 0, s = [], q = [], n, o;
    a = a + '', b = b + '';
    d3_interpolate_number.lastIndex = 0;
    for (i = 0; m = d3_interpolate_number.exec(b); ++i) {
      if (m.index)
        s.push(b.substring(s0, s1 = m.index));
      q.push({
        i: s.length,
        x: m[0]
      });
      s.push(null);
      s0 = d3_interpolate_number.lastIndex;
    }
    if (s0 < b.length)
      s.push(b.substring(s0));
    for (i = 0, n = q.length; (m = d3_interpolate_number.exec(a)) && i < n; ++i) {
      o = q[i];
      if (o.x == m[0]) {
        if (o.i) {
          if (s[o.i + 1] == null) {
            s[o.i - 1] += o.x;
            s.splice(o.i, 1);
            for (j = i + 1; j < n; ++j)
              q[j].i--;
          } else {
            s[o.i - 1] += o.x + s[o.i + 1];
            s.splice(o.i, 2);
            for (j = i + 1; j < n; ++j)
              q[j].i -= 2;
          }
        } else {
          if (s[o.i + 1] == null) {
            s[o.i] = o.x;
          } else {
            s[o.i] = o.x + s[o.i + 1];
            s.splice(o.i + 1, 1);
            for (j = i + 1; j < n; ++j)
              q[j].i--;
          }
        }
        q.splice(i, 1);
        n--;
        i--;
      } else {
        o.x = d3_interpolateNumber(parseFloat(m[0]), parseFloat(o.x));
      }
    }
    while (i < n) {
      o = q.pop();
      if (s[o.i + 1] == null) {
        s[o.i] = o.x;
      } else {
        s[o.i] = o.x + s[o.i + 1];
        s.splice(o.i + 1, 1);
      }
      n--;
    }
    if (s.length === 1) {
      return s[0] == null ? (o = q[0].x, function (t) {
        return o(t) + '';
      }) : function () {
        return b;
      };
    }
    return function (t) {
      for (i = 0; i < n; ++i)
        s[(o = q[i]).i] = o.x(t);
      return s.join('');
    };
  }
  var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b)));
    return f;
  }
  function d3_interpolateByName(name) {
    return name == 'transform' ? d3_interpolateTransform : d3_interpolate;
  }
  d3.interpolators = [function (a, b) {
      var t = typeof b;
      return (t === 'string' ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_Color ? d3_interpolateRgb : t === 'object' ? Array.isArray(b) ? d3_interpolateArray : d3_interpolateObject : d3_interpolateNumber)(a, b);
    }];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i)
      x.push(d3_interpolate(a[i], b[i]));
    for (; i < na; ++i)
      c[i] = a[i];
    for (; i < nb; ++i)
      c[i] = b[i];
    return function (t) {
      for (i = 0; i < n0; ++i)
        c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function () {
    return d3_identity;
  };
  var d3_ease = d3.map({
      linear: d3_ease_default,
      poly: d3_ease_poly,
      quad: function () {
        return d3_ease_quad;
      },
      cubic: function () {
        return d3_ease_cubic;
      },
      sin: function () {
        return d3_ease_sin;
      },
      exp: function () {
        return d3_ease_exp;
      },
      circle: function () {
        return d3_ease_circle;
      },
      elastic: d3_ease_elastic,
      back: d3_ease_back,
      bounce: function () {
        return d3_ease_bounce;
      }
    });
  var d3_ease_mode = d3.map({
      'in': d3_identity,
      out: d3_ease_reverse,
      'in-out': d3_ease_reflect,
      'out-in': function (f) {
        return d3_ease_reflect(d3_ease_reverse(f));
      }
    });
  d3.ease = function (name) {
    var i = name.indexOf('-'), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : 'in';
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, Array.prototype.slice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function (t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function (t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function (t) {
      return 0.5 * (t < 0.5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0)
      return 0;
    if (t >= 1)
      return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < 0.5 ? t3 : 3 * (t - t2) + t3 - 0.75);
  }
  function d3_ease_poly(e) {
    return function (t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * π / 2);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2)
      p = 0.45;
    if (arguments.length)
      s = p / (2 * π) * Math.asin(1 / a);
    else
      a = 1, s = p / 4;
    return function (t) {
      return 1 + a * Math.pow(2, 10 * -t) * Math.sin((t - s) * 2 * π / p);
    };
  }
  function d3_ease_back(s) {
    if (!s)
      s = 1.70158;
    return function (t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc))
      bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh))
      bh = 0, ah = isNaN(ah) ? b.h : ah;
    else if (bh > 180)
      bh -= 360;
    else if (bh < -180)
      bh += 360;
    return function (t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + '';
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs))
      bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh))
      bh = 0, ah = isNaN(ah) ? b.h : ah;
    else if (bh > 180)
      bh -= 360;
    else if (bh < -180)
      bh += 360;
    return function (t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + '';
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function (t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + '';
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function (t) {
      return Math.round(a + b * t);
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function (x) {
      return (x - a) * b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function (x) {
      return Math.max(0, Math.min(1, (x - a) * b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function () {
    return function (links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n)
        paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [start];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b)
      return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function () {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function (a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function (d, i) {
          d.sort(function (a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (2 * π - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + '-' + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + '-' + j], target = subgroups[j + '-' + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords)
        resort();
    }
    function resort() {
      chords.sort(function (a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function (x) {
      if (!arguments.length)
        return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function (x) {
      if (!arguments.length)
        return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function (x) {
      if (!arguments.length)
        return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function (x) {
      if (!arguments.length)
        return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function (x) {
      if (!arguments.length)
        return sortChords;
      sortChords = x;
      if (chords)
        resort();
      return chord;
    };
    chord.chords = function () {
      if (!chords)
        relayout();
      return chords;
    };
    chord.groups = function () {
      if (!groups)
        relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function () {
    var force = {}, event = d3.dispatch('start', 'tick', 'end'), size = [
        1,
        1
      ], drag, alpha, friction = 0.9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, gravity = 0.1, theta = 0.8, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function (quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dn = 1 / Math.sqrt(dx * dx + dy * dy);
          if ((x2 - x1) * dn < theta) {
            var k = quad.charge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
            return true;
          }
          if (quad.point && isFinite(dn)) {
            var k = quad.pointCharge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function () {
      if ((alpha *= 0.99) < 0.005) {
        event.end({
          type: 'end',
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k)
          while (++i < n) {
            o = nodes[i];
            o.x += (x - o.x) * k;
            o.y += (y - o.y) * k;
          }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: 'tick',
        alpha: alpha
      });
    };
    force.nodes = function (x) {
      if (!arguments.length)
        return nodes;
      nodes = x;
      return force;
    };
    force.links = function (x) {
      if (!arguments.length)
        return links;
      links = x;
      return force;
    };
    force.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return force;
    };
    force.linkDistance = function (x) {
      if (!arguments.length)
        return linkDistance;
      linkDistance = typeof x === 'function' ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function (x) {
      if (!arguments.length)
        return linkStrength;
      linkStrength = typeof x === 'function' ? x : +x;
      return force;
    };
    force.friction = function (x) {
      if (!arguments.length)
        return friction;
      friction = +x;
      return force;
    };
    force.charge = function (x) {
      if (!arguments.length)
        return charge;
      charge = typeof x === 'function' ? x : +x;
      return force;
    };
    force.gravity = function (x) {
      if (!arguments.length)
        return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function (x) {
      if (!arguments.length)
        return theta;
      theta = +x;
      return force;
    };
    force.alpha = function (x) {
      if (!arguments.length)
        return alpha;
      x = +x;
      if (alpha) {
        if (x > 0)
          alpha = x;
        else
          alpha = 0;
      } else if (x > 0) {
        event.start({
          type: 'start',
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function () {
      var i, j, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == 'number')
          o.source = nodes[o.source];
        if (typeof o.target == 'number')
          o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x))
          o.x = position('x', w);
        if (isNaN(o.y))
          o.y = position('y', h);
        if (isNaN(o.px))
          o.px = o.x;
        if (isNaN(o.py))
          o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === 'function')
        for (i = 0; i < m; ++i)
          distances[i] = +linkDistance.call(this, links[i], i);
      else
        for (i = 0; i < m; ++i)
          distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === 'function')
        for (i = 0; i < m; ++i)
          strengths[i] = +linkStrength.call(this, links[i], i);
      else
        for (i = 0; i < m; ++i)
          strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === 'function')
        for (i = 0; i < n; ++i)
          charges[i] = +charge.call(this, nodes[i], i);
      else
        for (i = 0; i < n; ++i)
          charges[i] = charge;
      function position(dimension, size) {
        var neighbors = neighbor(i), j = -1, m = neighbors.length, x;
        while (++j < m)
          if (!isNaN(x = neighbors[j][dimension]))
            return x;
        return Math.random() * size;
      }
      function neighbor() {
        if (!neighbors) {
          neighbors = [];
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        return neighbors[i];
      }
      return force.resume();
    };
    force.resume = function () {
      return force.alpha(0.1);
    };
    force.stop = function () {
      return force.alpha(0);
    };
    force.drag = function () {
      if (!drag)
        drag = d3.behavior.drag().origin(d3_identity).on('dragstart.force', d3_layout_forceDragstart).on('drag.force', dragmove).on('dragend.force', d3_layout_forceDragend);
      if (!arguments.length)
        return drag;
      this.on('mouseover.force', d3_layout_forceMouseover).on('mouseout.force', d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, 'on');
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null)
          continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - 0.5;
        quad.point.y += Math.random() - 0.5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1;
  d3.layout.hierarchy = function () {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function recurse(node, depth, nodes) {
      var childs = children.call(hierarchy, node, depth);
      node.depth = depth;
      nodes.push(node);
      if (childs && (n = childs.length)) {
        var i = -1, n, c = node.children = [], v = 0, j = depth + 1, d;
        while (++i < n) {
          d = recurse(childs[i], j, nodes);
          d.parent = node;
          c.push(d);
          v += d.value;
        }
        if (sort)
          c.sort(sort);
        if (value)
          node.value = v;
      } else if (value) {
        node.value = +value.call(hierarchy, node, depth) || 0;
      }
      return node;
    }
    function revalue(node, depth) {
      var children = node.children, v = 0;
      if (children && (n = children.length)) {
        var i = -1, n, j = depth + 1;
        while (++i < n)
          v += revalue(children[i], j);
      } else if (value) {
        v = +value.call(hierarchy, node, depth) || 0;
      }
      if (value)
        node.value = v;
      return v;
    }
    function hierarchy(d) {
      var nodes = [];
      recurse(d, 0, nodes);
      return nodes;
    }
    hierarchy.sort = function (x) {
      if (!arguments.length)
        return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function (x) {
      if (!arguments.length)
        return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function (x) {
      if (!arguments.length)
        return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function (root) {
      revalue(root, 0);
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, 'sort', 'children', 'value');
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function (parent) {
      return (parent.children || []).map(function (child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function () {
    var hierarchy = d3.layout.hierarchy(), size = [
        1,
        1
      ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n)
          d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function () {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = 2 * π;
    function pie(data) {
      var values = data.map(function (d, i) {
          return +value.call(pie, d, i);
        });
      var a = +(typeof startAngle === 'function' ? startAngle.apply(this, arguments) : startAngle);
      var k = ((typeof endAngle === 'function' ? endAngle.apply(this, arguments) : endAngle) - a) / d3.sum(values);
      var index = d3.range(data.length);
      if (sort != null)
        index.sort(sort === d3_layout_pieSortByValue ? function (i, j) {
          return values[j] - values[i];
        } : function (i, j) {
          return sort(data[i], data[j]);
        });
      var arcs = [];
      index.forEach(function (i) {
        var d;
        arcs[i] = {
          data: data[i],
          value: d = values[i],
          startAngle: a,
          endAngle: a += d * k
        };
      });
      return arcs;
    }
    pie.value = function (x) {
      if (!arguments.length)
        return value;
      value = x;
      return pie;
    };
    pie.sort = function (x) {
      if (!arguments.length)
        return sort;
      sort = x;
      return pie;
    };
    pie.startAngle = function (x) {
      if (!arguments.length)
        return startAngle;
      startAngle = x;
      return pie;
    };
    pie.endAngle = function (x) {
      if (!arguments.length)
        return endAngle;
      endAngle = x;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function () {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      var series = data.map(function (d, i) {
          return values.call(stack, d, i);
        });
      var points = series.map(function (d) {
          return d.map(function (v, i) {
            return [
              x.call(stack, v, i),
              y.call(stack, v, i)
            ];
          });
        });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var n = series.length, m = series[0].length, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function (x) {
      if (!arguments.length)
        return values;
      values = x;
      return stack;
    };
    stack.order = function (x) {
      if (!arguments.length)
        return order;
      order = typeof x === 'function' ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function (x) {
      if (!arguments.length)
        return offset;
      offset = typeof x === 'function' ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function (z) {
      if (!arguments.length)
        return x;
      x = z;
      return stack;
    };
    stack.y = function (z) {
      if (!arguments.length)
        return y;
      y = z;
      return stack;
    };
    stack.out = function (z) {
      if (!arguments.length)
        return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
      'inside-out': function (data) {
        var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function (a, b) {
            return max[a] - max[b];
          }), top = 0, bottom = 0, tops = [], bottoms = [];
        for (i = 0; i < n; ++i) {
          j = index[i];
          if (top < bottom) {
            top += sums[j];
            tops.push(j);
          } else {
            bottom += sums[j];
            bottoms.push(j);
          }
        }
        return bottoms.reverse().concat(tops);
      },
      reverse: function (data) {
        return d3.range(data.length).reverse();
      },
      'default': d3_layout_stackOrderDefault
    });
  var d3_layout_stackOffsets = d3.map({
      silhouette: function (data) {
        var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
        for (j = 0; j < m; ++j) {
          for (i = 0, o = 0; i < n; i++)
            o += data[i][j][1];
          if (o > max)
            max = o;
          sums.push(o);
        }
        for (j = 0; j < m; ++j) {
          y0[j] = (max - sums[j]) / 2;
        }
        return y0;
      },
      wiggle: function (data) {
        var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
        y0[0] = o = o0 = 0;
        for (j = 1; j < m; ++j) {
          for (i = 0, s1 = 0; i < n; ++i)
            s1 += data[i][j][1];
          for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
            for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
              s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
            }
            s2 += s3 * data[i][j][1];
          }
          y0[j] = o -= s1 ? s2 / s1 * dx : 0;
          if (o < o0)
            o0 = o;
        }
        for (j = 0; j < m; ++j)
          y0[j] -= o0;
        return y0;
      },
      expand: function (data) {
        var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
        for (j = 0; j < m; ++j) {
          for (i = 0, o = 0; i < n; i++)
            o += data[i][j][1];
          if (o)
            for (i = 0; i < n; i++)
              data[i][j][1] /= o;
          else
            for (i = 0; i < n; i++)
              data[i][j][1] = k;
        }
        for (j = 0; j < m; ++j)
          y0[j] = 0;
        return y0;
      },
      zero: d3_layout_stackOffsetZero
    });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m)
      y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (; i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function () {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function (x) {
      if (!arguments.length)
        return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function (x) {
      if (!arguments.length)
        return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function (x) {
      if (!arguments.length)
        return binner;
      binner = typeof x === 'number' ? function (range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function (x) {
      if (!arguments.length)
        return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n)
      f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [
      d3.min(values),
      d3.max(values)
    ];
  }
  d3.layout.tree = function () {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [
        1,
        1
      ];
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      function firstWalk(node, previousSibling) {
        var children = node.children, layout = node._tree;
        if (children && (n = children.length)) {
          var n, firstChild = children[0], previousChild, ancestor = firstChild, child, i = -1;
          while (++i < n) {
            child = children[i];
            firstWalk(child, previousChild);
            ancestor = apportion(child, previousChild, ancestor);
            previousChild = child;
          }
          d3_layout_treeShift(node);
          var midpoint = 0.5 * (firstChild._tree.prelim + child._tree.prelim);
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
            layout.mod = layout.prelim - midpoint;
          } else {
            layout.prelim = midpoint;
          }
        } else {
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
          }
        }
      }
      function secondWalk(node, x) {
        node.x = node._tree.prelim + x;
        var children = node.children;
        if (children && (n = children.length)) {
          var i = -1, n;
          x += node._tree.mod;
          while (++i < n) {
            secondWalk(children[i], x);
          }
        }
      }
      function apportion(node, previousSibling, ancestor) {
        if (previousSibling) {
          var vip = node, vop = node, vim = previousSibling, vom = node.parent.children[0], sip = vip._tree.mod, sop = vop._tree.mod, sim = vim._tree.mod, som = vom._tree.mod, shift;
          while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
            vom = d3_layout_treeLeft(vom);
            vop = d3_layout_treeRight(vop);
            vop._tree.ancestor = node;
            shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
            if (shift > 0) {
              d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim._tree.mod;
            sip += vip._tree.mod;
            som += vom._tree.mod;
            sop += vop._tree.mod;
          }
          if (vim && !d3_layout_treeRight(vop)) {
            vop._tree.thread = vim;
            vop._tree.mod += sim - sop;
          }
          if (vip && !d3_layout_treeLeft(vom)) {
            vom._tree.thread = vip;
            vom._tree.mod += sip - som;
            ancestor = node;
          }
        }
        return ancestor;
      }
      d3_layout_treeVisitAfter(root, function (node, previousSibling) {
        node._tree = {
          ancestor: node,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: previousSibling ? previousSibling._tree.number + 1 : 0
        };
      });
      firstWalk(root);
      secondWalk(root, -root._tree.prelim);
      var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost), right = d3_layout_treeSearch(root, d3_layout_treeRightmost), deep = d3_layout_treeSearch(root, d3_layout_treeDeepest), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2, y1 = deep.depth || 1;
      d3_layout_treeVisitAfter(root, function (node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = node.depth / y1 * size[1];
        delete node._tree;
      });
      return nodes;
    }
    tree.separation = function (x) {
      if (!arguments.length)
        return separation;
      separation = x;
      return tree;
    };
    tree.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(node) {
    var children = node.children;
    return children && children.length ? children[0] : node._tree.thread;
  }
  function d3_layout_treeRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? children[n - 1] : node._tree.thread;
  }
  function d3_layout_treeSearch(node, compare) {
    var children = node.children;
    if (children && (n = children.length)) {
      var child, n, i = -1;
      while (++i < n) {
        if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
          node = child;
        }
      }
    }
    return node;
  }
  function d3_layout_treeRightmost(a, b) {
    return a.x - b.x;
  }
  function d3_layout_treeLeftmost(a, b) {
    return b.x - a.x;
  }
  function d3_layout_treeDeepest(a, b) {
    return a.depth - b.depth;
  }
  function d3_layout_treeVisitAfter(node, callback) {
    function visit(node, previousSibling) {
      var children = node.children;
      if (children && (n = children.length)) {
        var child, previousChild = null, i = -1, n;
        while (++i < n) {
          child = children[i];
          visit(child, previousChild);
          previousChild = child;
        }
      }
      callback(node, previousSibling);
    }
    visit(node, null);
  }
  function d3_layout_treeShift(node) {
    var shift = 0, change = 0, children = node.children, i = children.length, child;
    while (--i >= 0) {
      child = children[i]._tree;
      child.prelim += shift;
      child.mod += shift;
      shift += child.shift + (change += child.change);
    }
  }
  function d3_layout_treeMove(ancestor, node, shift) {
    ancestor = ancestor._tree;
    node = node._tree;
    var change = shift / (node.number - ancestor.number);
    ancestor.change += change;
    node.change -= change;
    node.shift += shift;
    node.prelim += shift;
    node.mod += shift;
  }
  function d3_layout_treeAncestor(vim, node, ancestor) {
    return vim._tree.ancestor.parent == node.parent ? vim._tree.ancestor : ancestor;
  }
  d3.layout.pack = function () {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [
        1,
        1
      ];
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      root.x = 0;
      root.y = 0;
      d3_layout_treeVisitAfter(root, function (d) {
        d.r = Math.sqrt(d.value);
      });
      d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
      var w = size[0], h = size[1], k = Math.max(2 * root.r / w, 2 * root.r / h);
      if (padding > 0) {
        var dr = padding * k / 2;
        d3_layout_treeVisitAfter(root, function (d) {
          d.r += dr;
        });
        d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
        d3_layout_treeVisitAfter(root, function (d) {
          d.r -= dr;
        });
        k = Math.max(2 * root.r / w, 2 * root.r / h);
      }
      d3_layout_packTransform(root, w / 2, h / 2, 1 / k);
      return nodes;
    }
    pack.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return pack;
    };
    pack.padding = function (_) {
      if (!arguments.length)
        return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return dr * dr - dx * dx - dy * dy > 0.001;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length))
      return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r)
              d3_layout_packSplice(a, b = j);
            else
              d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n)
        d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = 0.5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.cluster = function () {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [
        1,
        1
      ];
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_treeVisitAfter(root, function (node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_treeVisitAfter(root, function (node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function (x) {
      if (!arguments.length)
        return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function (child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function (x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function () {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [
        1,
        1
      ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = 'squarify', ratio = 0.5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === 'slice' ? rect.dx : mode === 'dice' ? rect.dy : mode === 'slice-dice' ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== 'squarify' || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area))
          continue;
        if (r < rmin)
          rmin = r;
        if (r > rmax)
          rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy)
          v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx)
          v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies)
        hierarchy.revalue(root);
      scale([root], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky)
        stickies = nodes;
      return nodes;
    }
    treemap.size = function (x) {
      if (!arguments.length)
        return size;
      size = x;
      return treemap;
    };
    treemap.padding = function (x) {
      if (!arguments.length)
        return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === 'number' ? [
          p,
          p,
          p,
          p
        ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === 'function' ? padFunction : type === 'number' ? (x = [
        x,
        x,
        x,
        x
      ], padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function (x) {
      if (!arguments.length)
        return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function (x) {
      if (!arguments.length)
        return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function (x) {
      if (!arguments.length)
        return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function (x) {
      if (!arguments.length)
        return mode;
      mode = x + '';
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function (µ, σ) {
      var n = arguments.length;
      if (n < 2)
        σ = 1;
      if (n < 1)
        µ = 0;
      return function () {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function () {
      var random = d3.random.normal.apply(d3, arguments);
      return function () {
        return Math.exp(random());
      };
    },
    irwinHall: function (m) {
      return function () {
        for (var s = 0, j = 0; j < m; j++)
          s += Math.random();
        return s / m;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [
      start,
      stop
    ] : [
      stop,
      start
    ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function (x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    if (nice = nice(x1 - x0)) {
      domain[i0] = nice.floor(x0);
      domain[i1] = nice.ceil(x1);
    }
    return domain;
  }
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function (x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function () {
    return d3_scale_linear([
      0,
      1
    ], [
      0,
      1
    ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function (y) {
      return input(y);
    };
    scale.domain = function (x) {
      if (!arguments.length)
        return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function (x) {
      if (!arguments.length)
        return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function (x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function (x) {
      if (!arguments.length)
        return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function (x) {
      if (!arguments.length)
        return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function () {
      d3_scale_nice(domain, d3_scale_linearNice);
      return rescale();
    };
    scale.copy = function () {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, 'range', 'rangeRound', 'interpolate', 'clamp');
  }
  function d3_scale_linearNice(dx) {
    dx = Math.pow(10, Math.round(Math.log(dx) / Math.LN10) - 1);
    return dx && {
      floor: function (x) {
        return Math.floor(x / dx) * dx;
      },
      ceil: function (x) {
        return Math.ceil(x / dx) * dx;
      }
    };
  }
  function d3_scale_linearTickRange(domain, m) {
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= 0.15)
      step *= 10;
    else if (err <= 0.35)
      step *= 5;
    else if (err <= 0.75)
      step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * 0.5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var precision = -Math.floor(Math.log(d3_scale_linearTickRange(domain, m)[2]) / Math.LN10 + 0.01);
    return d3.format(format ? format.replace(d3_format_re, function (a, b, c, d, e, f, g, h, i, j) {
      return [
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i || '.' + (precision - (j === '%') * 2),
        j
      ].join('');
    }) : ',.' + precision + 'f');
  }
  d3.scale.log = function () {
    return d3_scale_log(d3.scale.linear().domain([
      0,
      Math.LN10
    ]), 10, d3_scale_logp, d3_scale_powp, [
      1,
      10
    ]);
  };
  function d3_scale_log(linear, base, log, pow, domain) {
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function (x) {
      return pow(linear.invert(x));
    };
    scale.domain = function (x) {
      if (!arguments.length)
        return domain;
      if (x[0] < 0)
        log = d3_scale_logn, pow = d3_scale_pown;
      else
        log = d3_scale_logp, pow = d3_scale_powp;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function (_) {
      if (!arguments.length)
        return base;
      base = +_;
      return scale;
    };
    scale.nice = function () {
      linear.domain(d3_scale_nice(domain, nice).map(log));
      return scale;
    };
    scale.ticks = function () {
      var extent = d3_scaleExtent(linear.domain()), ticks = [];
      if (extent.every(isFinite)) {
        var b = Math.log(base), i = Math.floor(extent[0] / b), j = Math.ceil(extent[1] / b), u = pow(extent[0]), v = pow(extent[1]), n = base % 1 ? 2 : base;
        if (log === d3_scale_logn) {
          ticks.push(-Math.pow(base, -i));
          for (; i++ < j;)
            for (var k = n - 1; k > 0; k--)
              ticks.push(-Math.pow(base, -i) * k);
        } else {
          for (; i < j; i++)
            for (var k = 1; k < n; k++)
              ticks.push(Math.pow(base, i) * k);
          ticks.push(Math.pow(base, i));
        }
        for (i = 0; ticks[i] < u; i++) {
        }
        for (j = ticks.length; ticks[j - 1] > v; j--) {
        }
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function (n, format) {
      if (arguments.length < 2)
        format = d3_scale_logFormat;
      if (!arguments.length)
        return format;
      var b = Math.log(base), k = Math.max(0.1, n / scale.ticks().length), f = log === d3_scale_logn ? (e = -1e-12, Math.floor) : (e = 1e-12, Math.ceil), e;
      return function (d) {
        return d / pow(b * f(log(d) / b + e)) <= k ? format(d) : '';
      };
    };
    scale.copy = function () {
      return d3_scale_log(linear.copy(), base, log, pow, domain);
    };
    function nice() {
      return log === d3_scale_logp ? {
        floor: floor,
        ceil: ceil
      } : {
        floor: function (x) {
          return -ceil(-x);
        },
        ceil: function (x) {
          return -floor(-x);
        }
      };
    }
    function floor(x) {
      return Math.pow(base, Math.floor(Math.log(x) / Math.log(base)));
    }
    function ceil(x) {
      return Math.pow(base, Math.ceil(Math.log(x) / Math.log(base)));
    }
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format('.0e');
  function d3_scale_logp(x) {
    return Math.log(x < 0 ? 0 : x);
  }
  function d3_scale_powp(x) {
    return Math.exp(x);
  }
  function d3_scale_logn(x) {
    return -Math.log(x > 0 ? 0 : -x);
  }
  function d3_scale_pown(x) {
    return -Math.exp(-x);
  }
  d3.scale.pow = function () {
    return d3_scale_pow(d3.scale.linear(), 1, [
      0,
      1
    ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function (x) {
      return powb(linear.invert(x));
    };
    scale.domain = function (x) {
      if (!arguments.length)
        return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function () {
      return scale.domain(d3_scale_nice(domain, d3_scale_linearNice));
    };
    scale.exponent = function (x) {
      if (!arguments.length)
        return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function () {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function (x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function () {
    return d3.scale.pow().exponent(0.5);
  };
  d3.scale.ordinal = function () {
    return d3_scale_ordinal([], {
      t: 'range',
      a: [[]]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || index.set(x, domain.push(x))) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function (i) {
        return start + step * i;
      });
    }
    scale.domain = function (x) {
      if (!arguments.length)
        return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n)
        if (!index.has(xi = x[i]))
          index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function (x) {
      if (!arguments.length)
        return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: 'range',
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function (x, padding) {
      if (arguments.length < 2)
        padding = 0;
      var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
      range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: 'rangePoints',
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function (x, padding, outerPadding) {
      if (arguments.length < 2)
        padding = 0;
      if (arguments.length < 3)
        outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse)
        range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: 'rangeBands',
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function (x, padding, outerPadding) {
      if (arguments.length < 2)
        padding = 0;
      if (arguments.length < 3)
        outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
      range = steps(start + Math.round(error / 2), step);
      if (reverse)
        range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: 'rangeRoundBands',
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function () {
      return rangeBand;
    };
    scale.rangeExtent = function () {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function () {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function () {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function () {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function () {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function () {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
      '#bcbd22',
      '#17becf'
    ];
  var d3_category20 = [
      '#1f77b4',
      '#aec7e8',
      '#ff7f0e',
      '#ffbb78',
      '#2ca02c',
      '#98df8a',
      '#d62728',
      '#ff9896',
      '#9467bd',
      '#c5b0d5',
      '#8c564b',
      '#c49c94',
      '#e377c2',
      '#f7b6d2',
      '#7f7f7f',
      '#c7c7c7',
      '#bcbd22',
      '#dbdb8d',
      '#17becf',
      '#9edae5'
    ];
  var d3_category20b = [
      '#393b79',
      '#5254a3',
      '#6b6ecf',
      '#9c9ede',
      '#637939',
      '#8ca252',
      '#b5cf6b',
      '#cedb9c',
      '#8c6d31',
      '#bd9e39',
      '#e7ba52',
      '#e7cb94',
      '#843c39',
      '#ad494a',
      '#d6616b',
      '#e7969c',
      '#7b4173',
      '#a55194',
      '#ce6dbd',
      '#de9ed6'
    ];
  var d3_category20c = [
      '#3182bd',
      '#6baed6',
      '#9ecae1',
      '#c6dbef',
      '#e6550d',
      '#fd8d3c',
      '#fdae6b',
      '#fdd0a2',
      '#31a354',
      '#74c476',
      '#a1d99b',
      '#c7e9c0',
      '#756bb1',
      '#9e9ac8',
      '#bcbddc',
      '#dadaeb',
      '#636363',
      '#969696',
      '#bdbdbd',
      '#d9d9d9'
    ];
  d3.scale.quantile = function () {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q)
        thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (isNaN(x = +x))
        return NaN;
      return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function (x) {
      if (!arguments.length)
        return domain;
      domain = x.filter(function (d) {
        return !isNaN(d);
      }).sort(d3.ascending);
      return rescale();
    };
    scale.range = function (x) {
      if (!arguments.length)
        return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function () {
      return thresholds;
    };
    scale.copy = function () {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function () {
    return d3_scale_quantize(0, 1, [
      0,
      1
    ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function (x) {
      if (!arguments.length)
        return [
          x0,
          x1
        ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function (x) {
      if (!arguments.length)
        return range;
      range = x;
      return rescale();
    };
    scale.copy = function () {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function () {
    return d3_scale_threshold([0.5], [
      0,
      1
    ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      return range[d3.bisect(domain, x)];
    }
    scale.domain = function (_) {
      if (!arguments.length)
        return domain;
      domain = _;
      return scale;
    };
    scale.range = function (_) {
      if (!arguments.length)
        return range;
      range = _;
      return scale;
    };
    scale.copy = function () {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function () {
    return d3_scale_identity([
      0,
      1
    ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function (x) {
      if (!arguments.length)
        return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function () {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg.arc = function () {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function arc() {
      var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, a0 = a1, a1 = da), a1 - a0), df = da < π ? '0' : '1', c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      return da >= d3_svg_arcMax ? r0 ? 'M0,' + r1 + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + -r1 + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + r1 + 'M0,' + r0 + 'A' + r0 + ',' + r0 + ' 0 1,0 0,' + -r0 + 'A' + r0 + ',' + r0 + ' 0 1,0 0,' + r0 + 'Z' : 'M0,' + r1 + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + -r1 + 'A' + r1 + ',' + r1 + ' 0 1,1 0,' + r1 + 'Z' : r0 ? 'M' + r1 * c0 + ',' + r1 * s0 + 'A' + r1 + ',' + r1 + ' 0 ' + df + ',1 ' + r1 * c1 + ',' + r1 * s1 + 'L' + r0 * c1 + ',' + r0 * s1 + 'A' + r0 + ',' + r0 + ' 0 ' + df + ',0 ' + r0 * c0 + ',' + r0 * s0 + 'Z' : 'M' + r1 * c0 + ',' + r1 * s0 + 'A' + r1 + ',' + r1 + ' 0 ' + df + ',1 ' + r1 * c1 + ',' + r1 * s1 + 'L0,0' + 'Z';
    }
    arc.innerRadius = function (v) {
      if (!arguments.length)
        return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function (v) {
      if (!arguments.length)
        return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.startAngle = function (v) {
      if (!arguments.length)
        return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function (v) {
      if (!arguments.length)
        return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function () {
      var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
      return [
        Math.cos(a) * r,
        Math.sin(a) * r
      ];
    };
    return arc;
  };
  var d3_svg_arcOffset = -π / 2, d3_svg_arcMax = 2 * π - 0.000001;
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  d3.svg.line.radial = function () {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] + d3_svg_arcOffset;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_svg_lineX, x1 = d3_svg_lineX, y0 = 0, y1 = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = 'L', tension = 0.7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function () {
          return x;
        } : d3_functor(x1), fy1 = y0 === y1 ? function () {
          return y;
        } : d3_functor(y1), x, y;
      function segment() {
        segments.push('M', interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), 'Z');
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([
            x = +fx0.call(this, d, i),
            y = +fy0.call(this, d, i)
          ]);
          points1.push([
            +fx1.call(this, d, i),
            +fy1.call(this, d, i)
          ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length)
        segment();
      return segments.length ? segments.join('') : null;
    }
    area.x = function (_) {
      if (!arguments.length)
        return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function (_) {
      if (!arguments.length)
        return x0;
      x0 = _;
      return area;
    };
    area.x1 = function (_) {
      if (!arguments.length)
        return x1;
      x1 = _;
      return area;
    };
    area.y = function (_) {
      if (!arguments.length)
        return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function (_) {
      if (!arguments.length)
        return y0;
      y0 = _;
      return area;
    };
    area.y1 = function (_) {
      if (!arguments.length)
        return y1;
      y1 = _;
      return area;
    };
    area.defined = function (_) {
      if (!arguments.length)
        return defined;
      defined = _;
      return area;
    };
    area.interpolate = function (_) {
      if (!arguments.length)
        return interpolateKey;
      if (typeof _ === 'function')
        interpolateKey = interpolate = _;
      else
        interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? 'M' : 'L';
      return area;
    };
    area.tension = function (_) {
      if (!arguments.length)
        return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function () {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function () {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function () {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return 'M' + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + 'Z';
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [
          r * Math.cos(a0),
          r * Math.sin(a0)
        ],
        p1: [
          r * Math.cos(a1),
          r * Math.sin(a1)
        ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return 'A' + r + ',' + r + ' 0 ' + +(a > π) + ',1 ' + p;
    }
    function curve(r0, p0, r1, p1) {
      return 'Q 0,0 ' + p1;
    }
    chord.radius = function (v) {
      if (!arguments.length)
        return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function (v) {
      if (!arguments.length)
        return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function (v) {
      if (!arguments.length)
        return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function (v) {
      if (!arguments.length)
        return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function (v) {
      if (!arguments.length)
        return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function () {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [
          p0,
          {
            x: p0.x,
            y: m
          },
          {
            x: p3.x,
            y: m
          },
          p3
        ];
      p = p.map(projection);
      return 'M' + p[0] + 'C' + p[1] + ' ' + p[2] + ' ' + p[3];
    }
    diagonal.source = function (x) {
      if (!arguments.length)
        return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function (x) {
      if (!arguments.length)
        return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function (x) {
      if (!arguments.length)
        return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [
      d.x,
      d.y
    ];
  }
  d3.svg.diagonal.radial = function () {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function (x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function () {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
      return [
        r * Math.cos(a),
        r * Math.sin(a)
      ];
    };
  }
  d3.svg.symbol = function () {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function (x) {
      if (!arguments.length)
        return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function (x) {
      if (!arguments.length)
        return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return 'circle';
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return 'M0,' + r + 'A' + r + ',' + r + ' 0 1,1 0,' + -r + 'A' + r + ',' + r + ' 0 1,1 0,' + r + 'Z';
  }
  var d3_svg_symbols = d3.map({
      circle: d3_svg_symbolCircle,
      cross: function (size) {
        var r = Math.sqrt(size / 5) / 2;
        return 'M' + -3 * r + ',' + -r + 'H' + -r + 'V' + -3 * r + 'H' + r + 'V' + -r + 'H' + 3 * r + 'V' + r + 'H' + r + 'V' + 3 * r + 'H' + -r + 'V' + r + 'H' + -3 * r + 'Z';
      },
      diamond: function (size) {
        var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
        return 'M0,' + -ry + 'L' + rx + ',0' + ' 0,' + ry + ' ' + -rx + ',0' + 'Z';
      },
      square: function (size) {
        var r = Math.sqrt(size) / 2;
        return 'M' + -r + ',' + -r + 'L' + r + ',' + -r + ' ' + r + ',' + r + ' ' + -r + ',' + r + 'Z';
      },
      'triangle-down': function (size) {
        var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
        return 'M0,' + ry + 'L' + rx + ',' + -ry + ' ' + -rx + ',' + -ry + 'Z';
      },
      'triangle-up': function (size) {
        var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
        return 'M0,' + -ry + 'L' + rx + ',' + ry + ' ' + -rx + ',' + ry + 'Z';
      }
    });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  function d3_transition(groups, id) {
    d3_arraySubclass(groups, d3_transitionPrototype);
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit = {
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3.transition = function (selection) {
    return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function (selector) {
    var id = this.id, subgroups = [], subgroup, subnode, node;
    if (typeof selector !== 'function')
      selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i))) {
          if ('__data__' in node)
            subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, id, node.__transition__[id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.selectAll = function (selector) {
    var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
    if (typeof selector !== 'function')
      selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          transition = node.__transition__[id];
          subnodes = selector.call(node, node.__data__, i);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o;) {
            d3_transitionNode(subnode = subnodes[k], k, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.filter = function (filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== 'function')
      filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.id, this.time).ease(this.ease());
  };
  d3_transitionPrototype.tween = function (name, tween) {
    var id = this.id;
    if (arguments.length < 2)
      return this.node().__transition__[id].tween.get(name);
    return d3_selection_each(this, tween == null ? function (node) {
      node.__transition__[id].tween.remove(name);
    } : function (node) {
      node.__transition__[id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id;
    return d3_selection_each(groups, typeof value === 'function' ? function (node, i, j) {
      node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function (node) {
      node.__transition__[id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function (nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS)
        this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = d3_interpolateByName(nameNS), name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += '', function () {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function (t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += '', function () {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function (t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, 'attr.' + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function (nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function (t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function (t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween('attr.' + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function (name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== 'string') {
        if (n < 2)
          value = '';
        for (priority in name)
          this.style(priority, name[priority], value);
        return this;
      }
      priority = '';
    }
    var interpolate = d3_interpolateByName(name);
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += '', function () {
        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = interpolate(a, b), function (t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, 'style.' + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function (name, tween, priority) {
    if (arguments.length < 3)
      priority = '';
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
      return f && function (t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween('style.' + name, styleTween);
  };
  d3_transitionPrototype.text = function (value) {
    return d3_transition_tween(this, 'text', value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null)
      b = '';
    return function () {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function () {
    return this.each('end.transition', function () {
      var p;
      if (!this.__transition__ && (p = this.parentNode))
        p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function (value) {
    var id = this.id;
    if (arguments.length < 1)
      return this.node().__transition__[id].ease;
    if (typeof value !== 'function')
      value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function (node) {
      node.__transition__[id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function (value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === 'function' ? function (node, i, j) {
      node.__transition__[id].delay = value.call(node, node.__data__, i, j) | 0;
    } : (value |= 0, function (node) {
      node.__transition__[id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function (value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === 'function' ? function (node, i, j) {
      node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j) | 0);
    } : (value = Math.max(1, value | 0), function (node) {
      node.__transition__[id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function (type, listener) {
    var id = this.id;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      d3_transitionInheritId = id;
      d3_selection_each(this, function (node, i, j) {
        d3_transitionInherit = node.__transition__[id];
        type.call(node, node.__data__, i, j);
      });
      d3_transitionInherit = inherit;
      d3_transitionInheritId = inheritId;
    } else {
      d3_selection_each(this, function (node) {
        node.__transition__[id].event.on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function () {
    var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = Object.create(node.__transition__[id0]);
          transition.delay += transition.duration;
          d3_transitionNode(node, i, id1, transition);
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id1);
  };
  function d3_transitionNode(node, i, id, inherit) {
    var lock = node.__transition__ || (node.__transition__ = {
        active: 0,
        count: 0
      }), transition = lock[id];
    if (!transition) {
      var time = inherit.time;
      transition = lock[id] = {
        tween: new d3_Map(),
        event: d3.dispatch('start', 'end'),
        time: time,
        ease: inherit.ease,
        delay: inherit.delay,
        duration: inherit.duration
      };
      ++lock.count;
      d3.timer(function (elapsed) {
        var d = node.__data__, ease = transition.ease, event = transition.event, delay = transition.delay, duration = transition.duration, tweened = [];
        return delay <= elapsed ? start(elapsed) : d3.timer(start, delay, time), 1;
        function start(elapsed) {
          if (lock.active > id)
            return stop();
          lock.active = id;
          event.start.call(node, d, i);
          transition.tween.forEach(function (key, value) {
            if (value = value.call(node, d, i)) {
              tweened.push(value);
            }
          });
          if (!tick(elapsed))
            d3.timer(tick, 0, time);
          return 1;
        }
        function tick(elapsed) {
          if (lock.active !== id)
            return stop();
          var t = (elapsed - delay) / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            stop();
            event.end.call(node, d, i);
            return 1;
          }
        }
        function stop() {
          if (--lock.count)
            delete lock[id];
          else
            delete node.__transition__;
          return 1;
        }
      }, 0, time);
      return transition;
    }
  }
  d3.svg.axis = function () {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, tickMajorSize = 6, tickMinorSize = 6, tickEndSize = 6, tickPadding = 3, tickArguments_ = [10], tickValues = null, tickFormat_, tickSubdivide = 0;
    function axis(g) {
      g.each(function () {
        var g = d3.select(this);
        var ticks = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments_) : scale.domain() : tickValues, tickFormat = tickFormat_ == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments_) : String : tickFormat_;
        var subticks = d3_svg_axisSubdivide(scale, ticks, tickSubdivide), subtick = g.selectAll('.tick.minor').data(subticks, String), subtickEnter = subtick.enter().insert('line', '.tick').attr('class', 'tick minor').style('opacity', 0.000001), subtickExit = d3.transition(subtick.exit()).style('opacity', 0.000001).remove(), subtickUpdate = d3.transition(subtick).style('opacity', 1);
        var tick = g.selectAll('.tick.major').data(ticks, String), tickEnter = tick.enter().insert('g', 'path').attr('class', 'tick major').style('opacity', 0.000001), tickExit = d3.transition(tick.exit()).style('opacity', 0.000001).remove(), tickUpdate = d3.transition(tick).style('opacity', 1), tickTransform;
        var range = d3_scaleRange(scale), path = g.selectAll('.domain').data([0]), pathUpdate = (path.enter().append('path').attr('class', 'domain'), d3.transition(path));
        var scale1 = scale.copy(), scale0 = this.__chart__ || scale1;
        this.__chart__ = scale1;
        tickEnter.append('line');
        tickEnter.append('text');
        var lineEnter = tickEnter.select('line'), lineUpdate = tickUpdate.select('line'), text = tick.select('text').text(tickFormat), textEnter = tickEnter.select('text'), textUpdate = tickUpdate.select('text');
        switch (orient) {
        case 'bottom': {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr('y2', tickMinorSize);
            subtickUpdate.attr('x2', 0).attr('y2', tickMinorSize);
            lineEnter.attr('y2', tickMajorSize);
            textEnter.attr('y', Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr('x2', 0).attr('y2', tickMajorSize);
            textUpdate.attr('x', 0).attr('y', Math.max(tickMajorSize, 0) + tickPadding);
            text.attr('dy', '.71em').style('text-anchor', 'middle');
            pathUpdate.attr('d', 'M' + range[0] + ',' + tickEndSize + 'V0H' + range[1] + 'V' + tickEndSize);
            break;
          }
        case 'top': {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr('y2', -tickMinorSize);
            subtickUpdate.attr('x2', 0).attr('y2', -tickMinorSize);
            lineEnter.attr('y2', -tickMajorSize);
            textEnter.attr('y', -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr('x2', 0).attr('y2', -tickMajorSize);
            textUpdate.attr('x', 0).attr('y', -(Math.max(tickMajorSize, 0) + tickPadding));
            text.attr('dy', '0em').style('text-anchor', 'middle');
            pathUpdate.attr('d', 'M' + range[0] + ',' + -tickEndSize + 'V0H' + range[1] + 'V' + -tickEndSize);
            break;
          }
        case 'left': {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr('x2', -tickMinorSize);
            subtickUpdate.attr('x2', -tickMinorSize).attr('y2', 0);
            lineEnter.attr('x2', -tickMajorSize);
            textEnter.attr('x', -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr('x2', -tickMajorSize).attr('y2', 0);
            textUpdate.attr('x', -(Math.max(tickMajorSize, 0) + tickPadding)).attr('y', 0);
            text.attr('dy', '.32em').style('text-anchor', 'end');
            pathUpdate.attr('d', 'M' + -tickEndSize + ',' + range[0] + 'H0V' + range[1] + 'H' + -tickEndSize);
            break;
          }
        case 'right': {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr('x2', tickMinorSize);
            subtickUpdate.attr('x2', tickMinorSize).attr('y2', 0);
            lineEnter.attr('x2', tickMajorSize);
            textEnter.attr('x', Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr('x2', tickMajorSize).attr('y2', 0);
            textUpdate.attr('x', Math.max(tickMajorSize, 0) + tickPadding).attr('y', 0);
            text.attr('dy', '.32em').style('text-anchor', 'start');
            pathUpdate.attr('d', 'M' + tickEndSize + ',' + range[0] + 'H0V' + range[1] + 'H' + tickEndSize);
            break;
          }
        }
        if (scale.ticks) {
          tickEnter.call(tickTransform, scale0);
          tickUpdate.call(tickTransform, scale1);
          tickExit.call(tickTransform, scale1);
          subtickEnter.call(tickTransform, scale0);
          subtickUpdate.call(tickTransform, scale1);
          subtickExit.call(tickTransform, scale1);
        } else {
          var dx = scale1.rangeBand() / 2, x = function (d) {
              return scale1(d) + dx;
            };
          tickEnter.call(tickTransform, x);
          tickUpdate.call(tickTransform, x);
        }
      });
    }
    axis.scale = function (x) {
      if (!arguments.length)
        return scale;
      scale = x;
      return axis;
    };
    axis.orient = function (x) {
      if (!arguments.length)
        return orient;
      orient = x in d3_svg_axisOrients ? x + '' : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function () {
      if (!arguments.length)
        return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function (x) {
      if (!arguments.length)
        return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function (x) {
      if (!arguments.length)
        return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function (x, y) {
      if (!arguments.length)
        return tickMajorSize;
      var n = arguments.length - 1;
      tickMajorSize = +x;
      tickMinorSize = n > 1 ? +y : tickMajorSize;
      tickEndSize = n > 0 ? +arguments[n] : tickMajorSize;
      return axis;
    };
    axis.tickPadding = function (x) {
      if (!arguments.length)
        return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function (x) {
      if (!arguments.length)
        return tickSubdivide;
      tickSubdivide = +x;
      return axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = 'bottom', d3_svg_axisOrients = {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    };
  function d3_svg_axisX(selection, x) {
    selection.attr('transform', function (d) {
      return 'translate(' + x(d) + ',0)';
    });
  }
  function d3_svg_axisY(selection, y) {
    selection.attr('transform', function (d) {
      return 'translate(0,' + y(d) + ')';
    });
  }
  function d3_svg_axisSubdivide(scale, ticks, m) {
    subticks = [];
    if (m && ticks.length > 1) {
      var extent = d3_scaleExtent(scale.domain()), subticks, i = -1, n = ticks.length, d = (ticks[1] - ticks[0]) / ++m, j, v;
      while (++i < n) {
        for (j = m; --j > 0;) {
          if ((v = +ticks[i] - j * d) >= extent[0]) {
            subticks.push(v);
          }
        }
      }
      for (--i, j = 0; ++j < m && (v = +ticks[i] + j * d) < extent[1];) {
        subticks.push(v);
      }
    }
    return subticks;
  }
  d3.svg.brush = function () {
    var event = d3_eventDispatch(brush, 'brushstart', 'brush', 'brushend'), x = null, y = null, resizes = d3_svg_brushResizes[0], extent = [
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ], extentDomain;
    function brush(g) {
      g.each(function () {
        var g = d3.select(this), bg = g.selectAll('.background').data([0]), fg = g.selectAll('.extent').data([0]), tz = g.selectAll('.resize').data(resizes, String), e;
        g.style('pointer-events', 'all').on('mousedown.brush', brushstart).on('touchstart.brush', brushstart);
        bg.enter().append('rect').attr('class', 'background').style('visibility', 'hidden').style('cursor', 'crosshair');
        fg.enter().append('rect').attr('class', 'extent').style('cursor', 'move');
        tz.enter().append('g').attr('class', function (d) {
          return 'resize ' + d;
        }).style('cursor', function (d) {
          return d3_svg_brushCursor[d];
        }).append('rect').attr('x', function (d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr('y', function (d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr('width', 6).attr('height', 6).style('visibility', 'hidden');
        tz.style('display', brush.empty() ? 'none' : null);
        tz.exit().remove();
        if (x) {
          e = d3_scaleRange(x);
          bg.attr('x', e[0]).attr('width', e[1] - e[0]);
          redrawX(g);
        }
        if (y) {
          e = d3_scaleRange(y);
          bg.attr('y', e[0]).attr('height', e[1] - e[0]);
          redrawY(g);
        }
        redraw(g);
      });
    }
    function redraw(g) {
      g.selectAll('.resize').attr('transform', function (d) {
        return 'translate(' + extent[+/e$/.test(d)][0] + ',' + extent[+/^s/.test(d)][1] + ')';
      });
    }
    function redrawX(g) {
      g.select('.extent').attr('x', extent[0][0]);
      g.selectAll('.extent,.n>rect,.s>rect').attr('width', extent[1][0] - extent[0][0]);
    }
    function redrawY(g) {
      g.select('.extent').attr('y', extent[0][1]);
      g.selectAll('.extent,.e>rect,.w>rect').attr('height', extent[1][1] - extent[0][1]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed('extent'), center, origin = mouse(), offset;
      var w = d3.select(d3_window).on('mousemove.brush', brushmove).on('mouseup.brush', brushend).on('touchmove.brush', brushmove).on('touchend.brush', brushend).on('keydown.brush', keydown).on('keyup.brush', keyup);
      if (dragging) {
        origin[0] = extent[0][0] - origin[0];
        origin[1] = extent[0][1] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [
          extent[1 - ex][0] - origin[0],
          extent[1 - ey][1] - origin[1]
        ];
        origin[0] = extent[ex][0];
        origin[1] = extent[ey][1];
      } else if (d3.event.altKey)
        center = origin.slice();
      g.style('pointer-events', 'none').selectAll('.resize').style('display', null);
      d3.select('body').style('cursor', eventTarget.style('cursor'));
      event_({ type: 'brushstart' });
      brushmove();
      d3_eventCancel();
      function mouse() {
        var touches = d3.event.changedTouches;
        return touches ? d3.touches(target, touches)[0] : d3.mouse(target);
      }
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= extent[1][0];
            origin[1] -= extent[1][1];
            dragging = 2;
          }
          d3_eventCancel();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += extent[1][0];
          origin[1] += extent[1][1];
          dragging = 0;
          d3_eventCancel();
        }
      }
      function brushmove() {
        var point = mouse(), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center)
              center = [
                (extent[0][0] + extent[1][0]) / 2,
                (extent[0][1] + extent[1][1]) / 2
              ];
            origin[0] = extent[+(point[0] < center[0])][0];
            origin[1] = extent[+(point[1] < center[1])][1];
          } else
            center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: 'brush',
            mode: dragging ? 'move' : 'resize'
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], size = extent[1][i] - extent[0][i], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = Math.max(r0, Math.min(r1, point[i]));
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center)
            position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0][i] !== min || extent[1][i] !== max) {
          extentDomain = null;
          extent[0][i] = min;
          extent[1][i] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style('pointer-events', 'all').selectAll('.resize').style('display', brush.empty() ? 'none' : null);
        d3.select('body').style('cursor', null);
        w.on('mousemove.brush', null).on('mouseup.brush', null).on('touchmove.brush', null).on('touchend.brush', null).on('keydown.brush', null).on('keyup.brush', null);
        event_({ type: 'brushend' });
        d3_eventCancel();
      }
    }
    brush.x = function (z) {
      if (!arguments.length)
        return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function (z) {
      if (!arguments.length)
        return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.extent = function (z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        z = extentDomain || extent;
        if (x) {
          x0 = z[0][0], x1 = z[1][0];
          if (!extentDomain) {
            x0 = extent[0][0], x1 = extent[1][0];
            if (x.invert)
              x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0)
              t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          y0 = z[0][1], y1 = z[1][1];
          if (!extentDomain) {
            y0 = extent[0][1], y1 = extent[1][1];
            if (y.invert)
              y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0)
              t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [
          [
            x0,
            y0
          ],
          [
            x1,
            y1
          ]
        ] : x ? [
          x0,
          x1
        ] : y && [
          y0,
          y1
        ];
      }
      extentDomain = [
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ];
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y)
          x0 = x0[0], x1 = x1[0];
        extentDomain[0][0] = x0, extentDomain[1][0] = x1;
        if (x.invert)
          x0 = x(x0), x1 = x(x1);
        if (x1 < x0)
          t = x0, x0 = x1, x1 = t;
        extent[0][0] = x0 | 0, extent[1][0] = x1 | 0;
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x)
          y0 = y0[1], y1 = y1[1];
        extentDomain[0][1] = y0, extentDomain[1][1] = y1;
        if (y.invert)
          y0 = y(y0), y1 = y(y1);
        if (y1 < y0)
          t = y0, y0 = y1, y1 = t;
        extent[0][1] = y0 | 0, extent[1][1] = y1 | 0;
      }
      return brush;
    };
    brush.clear = function () {
      extentDomain = null;
      extent[0][0] = extent[0][1] = extent[1][0] = extent[1][1] = 0;
      return brush;
    };
    brush.empty = function () {
      return x && extent[0][0] === extent[1][0] || y && extent[0][1] === extent[1][1];
    };
    return d3.rebind(brush, event, 'on');
  };
  var d3_svg_brushCursor = {
      n: 'ns-resize',
      e: 'ew-resize',
      s: 'ns-resize',
      w: 'ew-resize',
      nw: 'nwse-resize',
      ne: 'nesw-resize',
      se: 'nwse-resize',
      sw: 'nesw-resize'
    };
  var d3_svg_brushResizes = [
      [
        'n',
        'e',
        's',
        'w',
        'nw',
        'ne',
        'se',
        'sw'
      ],
      [
        'e',
        'w'
      ],
      [
        'n',
        's'
      ],
      []
    ];
  d3.time = {};
  var d3_time = Date, d3_time_daySymbols = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  function d3_time_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_time_utc.prototype = {
    getDate: function () {
      return this._.getUTCDate();
    },
    getDay: function () {
      return this._.getUTCDay();
    },
    getFullYear: function () {
      return this._.getUTCFullYear();
    },
    getHours: function () {
      return this._.getUTCHours();
    },
    getMilliseconds: function () {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function () {
      return this._.getUTCMinutes();
    },
    getMonth: function () {
      return this._.getUTCMonth();
    },
    getSeconds: function () {
      return this._.getUTCSeconds();
    },
    getTime: function () {
      return this._.getTime();
    },
    getTimezoneOffset: function () {
      return 0;
    },
    valueOf: function () {
      return this._.valueOf();
    },
    setDate: function () {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function () {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function () {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function () {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function () {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function () {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function () {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function () {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function () {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  var d3_time_formatDateTime = '%a %b %e %X %Y', d3_time_formatDate = '%m/%d/%Y', d3_time_formatTime = '%H:%M:%S';
  var d3_time_days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ], d3_time_dayAbbreviations = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ], d3_time_months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ], d3_time_monthAbbreviations = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_time(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_time(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt))
            times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1)
          times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_time = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function (date, k) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_time = Date;
      }
    };
  }
  d3.time.year = d3_time_interval(function (date) {
    date = d3.time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function (date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function (date) {
    return date.getFullYear();
  });
  d3.time.years = d3.time.year.range;
  d3.time.years.utc = d3.time.year.utc.range;
  d3.time.day = d3_time_interval(function (date) {
    var day = new d3_time(1970, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function (date, offset) {
    date.setDate(date.getDate() + offset);
  }, function (date) {
    return date.getDate() - 1;
  });
  d3.time.days = d3.time.day.range;
  d3.time.days.utc = d3.time.day.utc.range;
  d3.time.dayOfYear = function (date) {
    var year = d3.time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 60000) / 86400000);
  };
  d3_time_daySymbols.forEach(function (day, i) {
    day = day.toLowerCase();
    i = 7 - i;
    var interval = d3.time[day] = d3_time_interval(function (date) {
        (date = d3.time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
        return date;
      }, function (date, offset) {
        date.setDate(date.getDate() + Math.floor(offset) * 7);
      }, function (date) {
        var day = d3.time.year(date).getDay();
        return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
      });
    d3.time[day + 's'] = interval.range;
    d3.time[day + 's'].utc = interval.utc.range;
    d3.time[day + 'OfYear'] = function (date) {
      var day = d3.time.year(date).getDay();
      return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3.time.week = d3.time.sunday;
  d3.time.weeks = d3.time.sunday.range;
  d3.time.weeks.utc = d3.time.sunday.utc.range;
  d3.time.weekOfYear = d3.time.sundayOfYear;
  d3.time.format = function (template) {
    var n = template.length;
    function format(date) {
      var string = [], i = -1, j = 0, c, p, f;
      while (++i < n) {
        if (template.charCodeAt(i) === 37) {
          string.push(template.substring(j, i));
          if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null)
            c = template.charAt(++i);
          if (f = d3_time_formats[c])
            c = f(date, p == null ? c === 'e' ? ' ' : '0' : p);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(template.substring(j, i));
      return string.join('');
    }
    format.parse = function (string) {
      var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0
        }, i = d3_time_parse(d, template, string, 0);
      if (i != string.length)
        return null;
      if ('p' in d)
        d.H = d.H % 12 + d.p * 12;
      var date = new d3_time();
      date.setFullYear(d.y, d.m, d.d);
      date.setHours(d.H, d.M, d.S, d.L);
      return date;
    };
    format.toString = function () {
      return template;
    };
    return format;
  };
  function d3_time_parse(date, template, string, j) {
    var c, p, i = 0, n = template.length, m = string.length;
    while (i < n) {
      if (j >= m)
        return -1;
      c = template.charCodeAt(i++);
      if (c === 37) {
        p = d3_time_parsers[template.charAt(i++)];
        if (!p || (j = p(date, string, j)) < 0)
          return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function d3_time_formatRe(names) {
    return new RegExp('^(?:' + names.map(d3.requote).join('|') + ')', 'i');
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n)
      map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_formatPad(value, fill, width) {
    value += '';
    var length = value.length;
    return length < width ? new Array(width - length + 1).join(fill) + value : value;
  }
  var d3_time_dayRe = d3_time_formatRe(d3_time_days), d3_time_dayAbbrevRe = d3_time_formatRe(d3_time_dayAbbreviations), d3_time_monthRe = d3_time_formatRe(d3_time_months), d3_time_monthLookup = d3_time_formatLookup(d3_time_months), d3_time_monthAbbrevRe = d3_time_formatRe(d3_time_monthAbbreviations), d3_time_monthAbbrevLookup = d3_time_formatLookup(d3_time_monthAbbreviations);
  var d3_time_formatPads = {
      '-': '',
      _: ' ',
      '0': '0'
    };
  var d3_time_formats = {
      a: function (d) {
        return d3_time_dayAbbreviations[d.getDay()];
      },
      A: function (d) {
        return d3_time_days[d.getDay()];
      },
      b: function (d) {
        return d3_time_monthAbbreviations[d.getMonth()];
      },
      B: function (d) {
        return d3_time_months[d.getMonth()];
      },
      c: d3.time.format(d3_time_formatDateTime),
      d: function (d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function (d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function (d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function (d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function (d, p) {
        return d3_time_formatPad(1 + d3.time.dayOfYear(d), p, 3);
      },
      L: function (d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function (d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function (d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function (d) {
        return d.getHours() >= 12 ? 'PM' : 'AM';
      },
      S: function (d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function (d, p) {
        return d3_time_formatPad(d3.time.sundayOfYear(d), p, 2);
      },
      w: function (d) {
        return d.getDay();
      },
      W: function (d, p) {
        return d3_time_formatPad(d3.time.mondayOfYear(d), p, 2);
      },
      x: d3.time.format(d3_time_formatDate),
      X: d3.time.format(d3_time_formatTime),
      y: function (d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function (d, p) {
        return d3_time_formatPad(d.getFullYear() % 10000, p, 4);
      },
      Z: d3_time_zone,
      '%': function () {
        return '%';
      }
    };
  var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear
    };
  function d3_time_parseWeekdayAbbrev(date, string, i) {
    d3_time_dayAbbrevRe.lastIndex = 0;
    var n = d3_time_dayAbbrevRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseWeekday(date, string, i) {
    d3_time_dayRe.lastIndex = 0;
    var n = d3_time_dayRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseMonthAbbrev(date, string, i) {
    d3_time_monthAbbrevRe.lastIndex = 0;
    var n = d3_time_monthAbbrevRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseMonth(date, string, i) {
    d3_time_monthRe.lastIndex = 0;
    var n = d3_time_monthRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseLocaleFull(date, string, i) {
    return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
  }
  function d3_time_parseLocaleDate(date, string, i) {
    return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
  }
  function d3_time_parseLocaleTime(date, string, i) {
    return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 4));
    return n ? (date.y = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i += n[0].length) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2000);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.m = n[0] - 1, i += n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.d = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.H = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.M = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.S = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
    return n ? (date.L = +n[0], i += n[0].length) : -1;
  }
  var d3_time_numberRe = /^\s*\d+/;
  function d3_time_parseAmPm(date, string, i) {
    var n = d3_time_amPmLookup.get(string.substring(i, i += 2).toLowerCase());
    return n == null ? -1 : (date.p = n, i);
  }
  var d3_time_amPmLookup = d3.map({
      am: 0,
      pm: 1
    });
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? '-' : '+', zh = ~~(Math.abs(z) / 60), zm = Math.abs(z) % 60;
    return zs + d3_time_formatPad(zh, '0', 2) + d3_time_formatPad(zm, '0', 2);
  }
  d3.time.format.utc = function (template) {
    var local = d3.time.format(template);
    function format(date) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time();
        utc._ = date;
        return local(utc);
      } finally {
        d3_time = Date;
      }
    }
    format.parse = function (string) {
      try {
        d3_time = d3_time_utc;
        var date = local.parse(string);
        return date && date._;
      } finally {
        d3_time = Date;
      }
    };
    format.toString = local.toString;
    return format;
  };
  var d3_time_formatIso = d3.time.format.utc('%Y-%m-%dT%H:%M:%S.%LZ');
  d3.time.format.iso = Date.prototype.toISOString && +new Date('2000-01-01T00:00:00.000Z') ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function (string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3.time.second = d3_time_interval(function (date) {
    return new d3_time(Math.floor(date / 1000) * 1000);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1000);
  }, function (date) {
    return date.getSeconds();
  });
  d3.time.seconds = d3.time.second.range;
  d3.time.seconds.utc = d3.time.second.utc.range;
  d3.time.minute = d3_time_interval(function (date) {
    return new d3_time(Math.floor(date / 60000) * 60000);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 60000);
  }, function (date) {
    return date.getMinutes();
  });
  d3.time.minutes = d3.time.minute.range;
  d3.time.minutes.utc = d3.time.minute.utc.range;
  d3.time.hour = d3_time_interval(function (date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_time((Math.floor(date / 3600000 - timezone) + timezone) * 3600000);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 3600000);
  }, function (date) {
    return date.getHours();
  });
  d3.time.hours = d3.time.hour.range;
  d3.time.hours.utc = d3.time.hour.utc.range;
  d3.time.month = d3_time_interval(function (date) {
    date = d3.time.day(date);
    date.setDate(1);
    return date;
  }, function (date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function (date) {
    return date.getMonth();
  });
  d3.time.months = d3.time.month.range;
  d3.time.months.utc = d3.time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function (x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function (x) {
      if (!arguments.length)
        return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    scale.nice = function (m) {
      return scale.domain(d3_scale_nice(scale.domain(), function () {
        return m;
      }));
    };
    scale.ticks = function (m, k) {
      var extent = d3_scaleExtent(scale.domain());
      if (typeof m !== 'function') {
        var span = extent[1] - extent[0], target = span / m, i = d3.bisect(d3_time_scaleSteps, target);
        if (i == d3_time_scaleSteps.length)
          return methods.year(extent, m);
        if (!i)
          return linear.ticks(m).map(d3_time_scaleDate);
        if (Math.log(target / d3_time_scaleSteps[i - 1]) < Math.log(d3_time_scaleSteps[i] / target))
          --i;
        m = methods[i];
        k = m[1];
        m = m[0].range;
      }
      return m(extent[0], new Date(+extent[1] + 1), k);
    };
    scale.tickFormat = function () {
      return format;
    };
    scale.copy = function () {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  function d3_time_scaleFormat(formats) {
    return function (date) {
      var i = formats.length - 1, f = formats[i];
      while (!f[1](date))
        f = formats[--i];
      return f[0](date);
    };
  }
  function d3_time_scaleSetYear(y) {
    var d = new Date(y, 0, 1);
    d.setFullYear(y);
    return d;
  }
  function d3_time_scaleGetYear(d) {
    var y = d.getFullYear(), d0 = d3_time_scaleSetYear(y), d1 = d3_time_scaleSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  var d3_time_scaleSteps = [
      1000,
      5000,
      15000,
      30000,
      60000,
      300000,
      900000,
      1800000,
      3600000,
      10800000,
      21600000,
      43200000,
      86400000,
      172800000,
      604800000,
      2592000000,
      7776000000,
      31536000000
    ];
  var d3_time_scaleLocalMethods = [
      [
        d3.time.second,
        1
      ],
      [
        d3.time.second,
        5
      ],
      [
        d3.time.second,
        15
      ],
      [
        d3.time.second,
        30
      ],
      [
        d3.time.minute,
        1
      ],
      [
        d3.time.minute,
        5
      ],
      [
        d3.time.minute,
        15
      ],
      [
        d3.time.minute,
        30
      ],
      [
        d3.time.hour,
        1
      ],
      [
        d3.time.hour,
        3
      ],
      [
        d3.time.hour,
        6
      ],
      [
        d3.time.hour,
        12
      ],
      [
        d3.time.day,
        1
      ],
      [
        d3.time.day,
        2
      ],
      [
        d3.time.week,
        1
      ],
      [
        d3.time.month,
        1
      ],
      [
        d3.time.month,
        3
      ],
      [
        d3.time.year,
        1
      ]
    ];
  var d3_time_scaleLocalFormats = [
      [
        d3.time.format('%Y'),
        d3_true
      ],
      [
        d3.time.format('%B'),
        function (d) {
          return d.getMonth();
        }
      ],
      [
        d3.time.format('%b %d'),
        function (d) {
          return d.getDate() != 1;
        }
      ],
      [
        d3.time.format('%a %d'),
        function (d) {
          return d.getDay() && d.getDate() != 1;
        }
      ],
      [
        d3.time.format('%I %p'),
        function (d) {
          return d.getHours();
        }
      ],
      [
        d3.time.format('%I:%M'),
        function (d) {
          return d.getMinutes();
        }
      ],
      [
        d3.time.format(':%S'),
        function (d) {
          return d.getSeconds();
        }
      ],
      [
        d3.time.format('.%L'),
        function (d) {
          return d.getMilliseconds();
        }
      ]
    ];
  var d3_time_scaleLinear = d3.scale.linear(), d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);
  d3_time_scaleLocalMethods.year = function (extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleGetYear)).ticks(m).map(d3_time_scaleSetYear);
  };
  d3.time.scale = function () {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function (m) {
      return [
        m[0].utc,
        m[1]
      ];
    });
  var d3_time_scaleUTCFormats = [
      [
        d3.time.format.utc('%Y'),
        d3_true
      ],
      [
        d3.time.format.utc('%B'),
        function (d) {
          return d.getUTCMonth();
        }
      ],
      [
        d3.time.format.utc('%b %d'),
        function (d) {
          return d.getUTCDate() != 1;
        }
      ],
      [
        d3.time.format.utc('%a %d'),
        function (d) {
          return d.getUTCDay() && d.getUTCDate() != 1;
        }
      ],
      [
        d3.time.format.utc('%I %p'),
        function (d) {
          return d.getUTCHours();
        }
      ],
      [
        d3.time.format.utc('%I:%M'),
        function (d) {
          return d.getUTCMinutes();
        }
      ],
      [
        d3.time.format.utc(':%S'),
        function (d) {
          return d.getUTCSeconds();
        }
      ],
      [
        d3.time.format.utc('.%L'),
        function (d) {
          return d.getUTCMilliseconds();
        }
      ]
    ];
  var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);
  function d3_time_scaleUTCSetYear(y) {
    var d = new Date(Date.UTC(y, 0, 1));
    d.setUTCFullYear(y);
    return d;
  }
  function d3_time_scaleUTCGetYear(d) {
    var y = d.getUTCFullYear(), d0 = d3_time_scaleUTCSetYear(y), d1 = d3_time_scaleUTCSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  d3_time_scaleUTCMethods.year = function (extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleUTCGetYear)).ticks(m).map(d3_time_scaleUTCSetYear);
  };
  d3.time.scale.utc = function () {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
  };
  d3.text = d3_xhrType(function (request) {
    return request.responseText;
  });
  d3.json = function (url, callback) {
    return d3_xhr(url, 'application/json', d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function (url, callback) {
    return d3_xhr(url, 'text/html', d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function (request) {
    return request.responseXML;
  });
  return d3;
}();
(function (e) {
  jQuery.fn.extend({
    slimScroll: function (h) {
      var a = e.extend({
          width: 'auto',
          height: '250px',
          size: '7px',
          color: '#000',
          position: 'right',
          distance: '1px',
          start: 'top',
          opacity: 0.4,
          alwaysVisible: !1,
          disableFadeOut: !1,
          railVisible: !1,
          railColor: '#333',
          railOpacity: 0.2,
          railDraggable: !0,
          railClass: 'slimScrollRail',
          barClass: 'slimScrollBar',
          wrapperClass: 'slimScrollDiv',
          allowPageScroll: !1,
          wheelStep: 20,
          touchScrollStep: 200
        }, h);
      this.each(function () {
        function s(d) {
          if (q) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest('.' + a.wrapperClass).is(b.parent()) && k(c, !0);
            d.preventDefault && !m && d.preventDefault();
            m || (d.returnValue = !1);
          }
        }
        function k(d, e, h) {
          var f = d, g = b.outerHeight() - c.outerHeight();
          e && (f = parseInt(c.css('top')) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), f = Math.min(Math.max(f, 0), g), f = 0 < d ? Math.ceil(f) : Math.floor(f), c.css({ top: f + 'px' }));
          j = parseInt(c.css('top')) / (b.outerHeight() - c.outerHeight());
          f = j * (b[0].scrollHeight - b.outerHeight());
          h && (f = d, d = f / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), g), c.css({ top: d + 'px' }));
          b.scrollTop(f);
          b.trigger('slimscrolling', ~~f);
          t();
          n();
        }
        function A() {
          window.addEventListener ? (this.addEventListener('DOMMouseScroll', s, !1), this.addEventListener('mousewheel', s, !1)) : document.attachEvent('onmousewheel', s);
        }
        function u() {
          r = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), B);
          c.css({ height: r + 'px' });
          var a = r == b.outerHeight() ? 'none' : 'block';
          c.css({ display: a });
        }
        function t() {
          u();
          clearTimeout(x);
          j == ~~j ? (m = a.allowPageScroll, y != j && b.trigger('slimscroll', 0 == ~~j ? 'top' : 'bottom')) : m = !1;
          y = j;
          r >= b.outerHeight() ? m = !0 : (c.stop(!0, !0).fadeIn('fast'), a.railVisible && g.stop(!0, !0).fadeIn('fast'));
        }
        function n() {
          a.alwaysVisible || (x = setTimeout(function () {
            if ((!a.disableFadeOut || !q) && !v && !w)
              c.fadeOut('slow'), g.fadeOut('slow');
          }, 1000));
        }
        var q, v, w, x, z, r, j, y, B = 30, m = !1, b = e(this);
        if (b.parent().hasClass(a.wrapperClass)) {
          var l = b.scrollTop(), c = b.parent().find('.' + a.barClass), g = b.parent().find('.' + a.railClass);
          u();
          if (e.isPlainObject(h)) {
            if ('height' in h && 'auto' == h.height) {
              b.parent().css('height', 'auto');
              b.css('height', 'auto');
              var p = b.parent().parent().height();
              b.parent().css('height', p);
              b.css('height', p);
            }
            if ('scrollTo' in h)
              l = parseInt(a.scrollTo);
            else if ('scrollBy' in h)
              l += parseInt(a.scrollBy);
            else if ('destroy' in h) {
              c.remove();
              g.remove();
              b.unwrap();
              return;
            }
            k(l, !1, !0);
          }
        } else {
          a.height = 'auto' == a.height ? b.parent().height() : a.height;
          l = e('<div></div>').addClass(a.wrapperClass).css({
            position: 'relative',
            overflow: 'hidden',
            width: a.width,
            height: a.height
          });
          b.css({
            overflow: 'hidden',
            width: a.width,
            height: a.height
          });
          var g = e('<div></div>').addClass(a.railClass).css({
              width: a.size,
              height: '100%',
              position: 'absolute',
              top: 0,
              display: a.alwaysVisible && a.railVisible ? 'block' : 'none',
              'border-radius': a.size,
              background: a.railColor,
              opacity: a.railOpacity,
              zIndex: 90
            }), c = e('<div></div>').addClass(a.barClass).css({
              background: a.color,
              width: a.size,
              position: 'absolute',
              top: 0,
              opacity: a.opacity,
              display: a.alwaysVisible ? 'block' : 'none',
              'border-radius': a.size,
              BorderRadius: a.size,
              MozBorderRadius: a.size,
              WebkitBorderRadius: a.size,
              zIndex: 99
            }), p = 'right' == a.position ? { right: a.distance } : { left: a.distance };
          g.css(p);
          c.css(p);
          b.wrap(l);
          b.parent().append(c);
          b.parent().append(g);
          a.railDraggable && (e.ui && 'function' == typeof e.ui.draggable) && c.draggable({
            axis: 'y',
            containment: 'parent',
            start: function () {
              w = !0;
            },
            stop: function () {
              w = !1;
              n();
            },
            drag: function () {
              k(0, e(this).position().top, !1);
            }
          });
          g.hover(function () {
            t();
          }, function () {
            n();
          });
          c.hover(function () {
            v = !0;
          }, function () {
            v = !1;
          });
          b.hover(function () {
            q = !0;
            t();
            n();
          }, function () {
            q = !1;
            n();
          });
          b.bind('touchstart', function (a) {
            a.originalEvent.touches.length && (z = a.originalEvent.touches[0].pageY);
          });
          b.bind('touchmove', function (b) {
            b.originalEvent.preventDefault();
            b.originalEvent.touches.length && k((z - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0);
          });
          'bottom' === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }), k(0, !0)) : 'top' !== a.start && (k(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          A();
          u();
        }
      });
      return this;
    }
  });
  jQuery.fn.extend({ slimscroll: jQuery.fn.slimScroll });
}(jQuery));
!function (e) {
  'use strict';
  e(function () {
    e.support.transition = function () {
      var e = function () {
          var e = document.createElement('bootstrap'), t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            }, n;
          for (n in t)
            if (e.style[n] !== undefined)
              return t[n];
        }();
      return e && { end: e };
    }();
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = '[data-dismiss="alert"]', n = function (n) {
      e(n).on('click', t, this.close);
    };
  n.prototype.close = function (t) {
    function s() {
      i.trigger('closed').remove();
    }
    var n = e(this), r = n.attr('data-target'), i;
    r || (r = n.attr('href'), r = r && r.replace(/.*(?=#[^\s]*$)/, '')), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass('alert') ? n : n.parent()), i.trigger(t = e.Event('close'));
    if (t.isDefaultPrevented())
      return;
    i.removeClass('in'), e.support.transition && i.hasClass('fade') ? i.on(e.support.transition.end, s) : s();
  };
  var r = e.fn.alert;
  e.fn.alert = function (t) {
    return this.each(function () {
      var r = e(this), i = r.data('alert');
      i || r.data('alert', i = new n(this)), typeof t == 'string' && i[t].call(r);
    });
  }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
    return e.fn.alert = r, this;
  }, e(document).on('click.alert.data-api', t, n.prototype.close);
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n);
  };
  t.prototype.setState = function (e) {
    var t = 'disabled', n = this.$element, r = n.data(), i = n.is('input') ? 'val' : 'html';
    e += 'Text', r.resetText || n.data('resetText', n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
      e == 'loadingText' ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t);
    }, 0);
  }, t.prototype.toggle = function () {
    var e = this.$element.closest('[data-toggle="buttons-radio"]');
    e && e.find('.active').removeClass('active'), this.$element.toggleClass('active');
  };
  var n = e.fn.button;
  e.fn.button = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('button'), s = typeof n == 'object' && n;
      i || r.data('button', i = new t(this, s)), n == 'toggle' ? i.toggle() : n && i.setState(n);
    });
  }, e.fn.button.defaults = { loadingText: 'loading...' }, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
    return e.fn.button = n, this;
  }, e(document).on('click.button.data-api', '[data-toggle^=button]', function (t) {
    var n = e(t.target);
    n.hasClass('btn') || (n = n.closest('.btn')), n.button('toggle');
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.$element = e(t), this.$indicators = this.$element.find('.carousel-indicators'), this.options = n, this.options.pause == 'hover' && this.$element.on('mouseenter', e.proxy(this.pause, this)).on('mouseleave', e.proxy(this.cycle, this));
  };
  t.prototype = {
    cycle: function (t) {
      return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this;
    },
    getActiveIndex: function () {
      return this.$active = this.$element.find('.item.active'), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
    },
    to: function (t) {
      var n = this.getActiveIndex(), r = this;
      if (t > this.$items.length - 1 || t < 0)
        return;
      return this.sliding ? this.$element.one('slid', function () {
        r.to(t);
      }) : n == t ? this.pause().cycle() : this.slide(t > n ? 'next' : 'prev', e(this.$items[t]));
    },
    pause: function (t) {
      return t || (this.paused = !0), this.$element.find('.next, .prev').length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this;
    },
    next: function () {
      if (this.sliding)
        return;
      return this.slide('next');
    },
    prev: function () {
      if (this.sliding)
        return;
      return this.slide('prev');
    },
    slide: function (t, n) {
      var r = this.$element.find('.item.active'), i = n || r[t](), s = this.interval, o = t == 'next' ? 'left' : 'right', u = t == 'next' ? 'first' : 'last', a = this, f;
      this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find('.item')[u](), f = e.Event('slide', {
        relatedTarget: i[0],
        direction: o
      });
      if (i.hasClass('active'))
        return;
      this.$indicators.length && (this.$indicators.find('.active').removeClass('active'), this.$element.one('slid', function () {
        var t = e(a.$indicators.children()[a.getActiveIndex()]);
        t && t.addClass('active');
      }));
      if (e.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(f);
        if (f.isDefaultPrevented())
          return;
        i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function () {
          i.removeClass([
            t,
            o
          ].join(' ')).addClass('active'), r.removeClass([
            'active',
            o
          ].join(' ')), a.sliding = !1, setTimeout(function () {
            a.$element.trigger('slid');
          }, 0);
        });
      } else {
        this.$element.trigger(f);
        if (f.isDefaultPrevented())
          return;
        r.removeClass('active'), i.addClass('active'), this.sliding = !1, this.$element.trigger('slid');
      }
      return s && this.cycle(), this;
    }
  };
  var n = e.fn.carousel;
  e.fn.carousel = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('carousel'), s = e.extend({}, e.fn.carousel.defaults, typeof n == 'object' && n), o = typeof n == 'string' ? n : s.slide;
      i || r.data('carousel', i = new t(this, s)), typeof n == 'number' ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle();
    });
  }, e.fn.carousel.defaults = {
    interval: 5000,
    pause: 'hover'
  }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
    return e.fn.carousel = n, this;
  }, e(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (t) {
    var n = e(this), r, i = e(n.attr('data-target') || (r = n.attr('href')) && r.replace(/.*(?=#[^\s]+$)/, '')), s = e.extend({}, i.data(), n.data()), o;
    i.carousel(s), (o = n.attr('data-slide-to')) && i.data('carousel').pause().to(o).cycle(), t.preventDefault();
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle();
  };
  t.prototype = {
    constructor: t,
    dimension: function () {
      var e = this.$element.hasClass('width');
      return e ? 'width' : 'height';
    },
    show: function () {
      var t, n, r, i;
      if (this.transitioning || this.$element.hasClass('in'))
        return;
      t = this.dimension(), n = e.camelCase([
        'scroll',
        t
      ].join('-')), r = this.$parent && this.$parent.find('> .accordion-group > .in');
      if (r && r.length) {
        i = r.data('collapse');
        if (i && i.transitioning)
          return;
        r.collapse('hide'), i || r.data('collapse', null);
      }
      this.$element[t](0), this.transition('addClass', e.Event('show'), 'shown'), e.support.transition && this.$element[t](this.$element[0][n]);
    },
    hide: function () {
      var t;
      if (this.transitioning || !this.$element.hasClass('in'))
        return;
      t = this.dimension(), this.reset(this.$element[t]()), this.transition('removeClass', e.Event('hide'), 'hidden'), this.$element[t](0);
    },
    reset: function (e) {
      var t = this.dimension();
      return this.$element.removeClass('collapse')[t](e || 'auto')[0].offsetWidth, this.$element[e !== null ? 'addClass' : 'removeClass']('collapse'), this;
    },
    transition: function (t, n, r) {
      var i = this, s = function () {
          n.type == 'show' && i.reset(), i.transitioning = 0, i.$element.trigger(r);
        };
      this.$element.trigger(n);
      if (n.isDefaultPrevented())
        return;
      this.transitioning = 1, this.$element[t]('in'), e.support.transition && this.$element.hasClass('collapse') ? this.$element.one(e.support.transition.end, s) : s();
    },
    toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']();
    }
  };
  var n = e.fn.collapse;
  e.fn.collapse = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('collapse'), s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == 'object' && n);
      i || r.data('collapse', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.collapse.defaults = { toggle: !0 }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
    return e.fn.collapse = n, this;
  }, e(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (t) {
    var n = e(this), r, i = n.attr('data-target') || t.preventDefault() || (r = n.attr('href')) && r.replace(/.*(?=#[^\s]+$)/, ''), s = e(i).data('collapse') ? 'toggle' : n.data();
    n[e(i).hasClass('in') ? 'addClass' : 'removeClass']('collapsed'), e(i).collapse(s);
  });
}(window.jQuery), !function (e) {
  'use strict';
  function r() {
    e('.dropdown-backdrop').remove(), e(t).each(function () {
      i(e(this)).removeClass('open');
    });
  }
  function i(t) {
    var n = t.attr('data-target'), r;
    n || (n = t.attr('href'), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, '')), r = n && e(n);
    if (!r || !r.length)
      r = t.parent();
    return r;
  }
  var t = '[data-toggle=dropdown]', n = function (t) {
      var n = e(t).on('click.dropdown.data-api', this.toggle);
      e('html').on('click.dropdown.data-api', function () {
        n.parent().removeClass('open');
      });
    };
  n.prototype = {
    constructor: n,
    toggle: function (t) {
      var n = e(this), s, o;
      if (n.is('.disabled, :disabled'))
        return;
      return s = i(n), o = s.hasClass('open'), r(), o || ('ontouchstart' in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on('click', r), s.toggleClass('open')), n.focus(), !1;
    },
    keydown: function (n) {
      var r, s, o, u, a, f;
      if (!/(38|40|27)/.test(n.keyCode))
        return;
      r = e(this), n.preventDefault(), n.stopPropagation();
      if (r.is('.disabled, :disabled'))
        return;
      u = i(r), a = u.hasClass('open');
      if (!a || a && n.keyCode == 27)
        return n.which == 27 && u.find(t).focus(), r.click();
      s = e('[role=menu] li:not(.divider):visible a', u);
      if (!s.length)
        return;
      f = s.index(s.filter(':focus')), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus();
    }
  };
  var s = e.fn.dropdown;
  e.fn.dropdown = function (t) {
    return this.each(function () {
      var r = e(this), i = r.data('dropdown');
      i || r.data('dropdown', i = new n(this)), typeof t == 'string' && i[t].call(r);
    });
  }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function () {
    return e.fn.dropdown = s, this;
  }, e(document).on('click.dropdown.data-api', r).on('click.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.dropdown.data-api', t, n.prototype.toggle).on('keydown.dropdown.data-api', t + ', [role=menu]', n.prototype.keydown);
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', e.proxy(this.hide, this)), this.options.remote && this.$element.find('.modal-body').load(this.options.remote);
  };
  t.prototype = {
    constructor: t,
    toggle: function () {
      return this[this.isShown ? 'hide' : 'show']();
    },
    show: function () {
      var t = this, n = e.Event('show');
      this.$element.trigger(n);
      if (this.isShown || n.isDefaultPrevented())
        return;
      this.isShown = !0, this.escape(), this.backdrop(function () {
        var n = e.support.transition && t.$element.hasClass('fade');
        t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass('in').attr('aria-hidden', !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {
          t.$element.focus().trigger('shown');
        }) : t.$element.focus().trigger('shown');
      });
    },
    hide: function (t) {
      t && t.preventDefault();
      var n = this;
      t = e.Event('hide'), this.$element.trigger(t);
      if (!this.isShown || t.isDefaultPrevented())
        return;
      this.isShown = !1, this.escape(), e(document).off('focusin.modal'), this.$element.removeClass('in').attr('aria-hidden', !0), e.support.transition && this.$element.hasClass('fade') ? this.hideWithTransition() : this.hideModal();
    },
    enforceFocus: function () {
      var t = this;
      e(document).on('focusin.modal', function (e) {
        t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus();
      });
    },
    escape: function () {
      var e = this;
      this.isShown && this.options.keyboard ? this.$element.on('keyup.dismiss.modal', function (t) {
        t.which == 27 && e.hide();
      }) : this.isShown || this.$element.off('keyup.dismiss.modal');
    },
    hideWithTransition: function () {
      var t = this, n = setTimeout(function () {
          t.$element.off(e.support.transition.end), t.hideModal();
        }, 500);
      this.$element.one(e.support.transition.end, function () {
        clearTimeout(n), t.hideModal();
      });
    },
    hideModal: function () {
      var e = this;
      this.$element.hide(), this.backdrop(function () {
        e.removeBackdrop(), e.$element.trigger('hidden');
      });
    },
    removeBackdrop: function () {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    },
    backdrop: function (t) {
      var n = this, r = this.$element.hasClass('fade') ? 'fade' : '';
      if (this.isShown && this.options.backdrop) {
        var i = e.support.transition && r;
        this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == 'static' ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in');
        if (!t)
          return;
        i ? this.$backdrop.one(e.support.transition.end, t) : t();
      } else
        !this.isShown && this.$backdrop ? (this.$backdrop.removeClass('in'), e.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t();
    }
  };
  var n = e.fn.modal;
  e.fn.modal = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('modal'), s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == 'object' && n);
      i || r.data('modal', i = new t(this, s)), typeof n == 'string' ? i[n]() : s.show && i.show();
    });
  }, e.fn.modal.defaults = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
    return e.fn.modal = n, this;
  }, e(document).on('click.modal.data-api', '[data-toggle="modal"]', function (t) {
    var n = e(this), r = n.attr('href'), i = e(n.attr('data-target') || r && r.replace(/.*(?=#[^\s]+$)/, '')), s = i.data('modal') ? 'toggle' : e.extend({ remote: !/#/.test(r) && r }, i.data(), n.data());
    t.preventDefault(), i.modal(s).one('hide', function () {
      n.focus();
    });
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (e, t) {
    this.init('tooltip', e, t);
  };
  t.prototype = {
    constructor: t,
    init: function (t, n, r) {
      var i, s, o, u, a;
      this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(' ');
      for (a = o.length; a--;)
        u = o[a], u == 'click' ? this.$element.on('click.' + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != 'manual' && (i = u == 'hover' ? 'mouseenter' : 'focus', s = u == 'hover' ? 'mouseleave' : 'blur', this.$element.on(i + '.' + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + '.' + this.type, this.options.selector, e.proxy(this.leave, this)));
      this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: 'manual',
        selector: ''
      }) : this.fixTitle();
    },
    getOptions: function (t) {
      return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == 'number' && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), t;
    },
    enter: function (t) {
      var n = e.fn[this.type].defaults, r = {}, i;
      this._options && e.each(this._options, function (e, t) {
        n[e] != t && (r[e] = t);
      }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
      if (!i.options.delay || !i.options.delay.show)
        return i.show();
      clearTimeout(this.timeout), i.hoverState = 'in', this.timeout = setTimeout(function () {
        i.hoverState == 'in' && i.show();
      }, i.options.delay.show);
    },
    leave: function (t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      this.timeout && clearTimeout(this.timeout);
      if (!n.options.delay || !n.options.delay.hide)
        return n.hide();
      n.hoverState = 'out', this.timeout = setTimeout(function () {
        n.hoverState == 'out' && n.hide();
      }, n.options.delay.hide);
    },
    show: function () {
      var t, n, r, i, s, o, u = e.Event('show');
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(u);
        if (u.isDefaultPrevented())
          return;
        t = this.tip(), this.setContent(), this.options.animation && t.addClass('fade'), s = typeof this.options.placement == 'function' ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
          top: 0,
          left: 0,
          display: 'block'
        }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
        switch (s) {
        case 'bottom':
          o = {
            top: n.top + n.height,
            left: n.left + n.width / 2 - r / 2
          };
          break;
        case 'top':
          o = {
            top: n.top - i,
            left: n.left + n.width / 2 - r / 2
          };
          break;
        case 'left':
          o = {
            top: n.top + n.height / 2 - i / 2,
            left: n.left - r
          };
          break;
        case 'right':
          o = {
            top: n.top + n.height / 2 - i / 2,
            left: n.left + n.width
          };
        }
        this.applyPlacement(o, s), this.$element.trigger('shown');
      }
    },
    applyPlacement: function (e, t) {
      var n = this.tip(), r = n[0].offsetWidth, i = n[0].offsetHeight, s, o, u, a;
      n.offset(e).addClass(t).addClass('in'), s = n[0].offsetWidth, o = n[0].offsetHeight, t == 'top' && o != i && (e.top = e.top + i - o, a = !0), t == 'bottom' || t == 'top' ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, 'left')) : this.replaceArrow(o - i, o, 'top'), a && n.offset(e);
    },
    replaceArrow: function (e, t, n) {
      this.arrow().css(n, e ? 50 * (1 - e / t) + '%' : '');
    },
    setContent: function () {
      var e = this.tip(), t = this.getTitle();
      e.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](t), e.removeClass('fade in top bottom left right');
    },
    hide: function () {
      function i() {
        var t = setTimeout(function () {
            n.off(e.support.transition.end).detach();
          }, 500);
        n.one(e.support.transition.end, function () {
          clearTimeout(t), n.detach();
        });
      }
      var t = this, n = this.tip(), r = e.Event('hide');
      this.$element.trigger(r);
      if (r.isDefaultPrevented())
        return;
      return n.removeClass('in'), e.support.transition && this.$tip.hasClass('fade') ? i() : n.detach(), this.$element.trigger('hidden'), this;
    },
    fixTitle: function () {
      var e = this.$element;
      (e.attr('title') || typeof e.attr('data-original-title') != 'string') && e.attr('data-original-title', e.attr('title') || '').attr('title', '');
    },
    hasContent: function () {
      return this.getTitle();
    },
    getPosition: function () {
      var t = this.$element[0];
      return e.extend({}, typeof t.getBoundingClientRect == 'function' ? t.getBoundingClientRect() : {
        width: t.offsetWidth,
        height: t.offsetHeight
      }, this.$element.offset());
    },
    getTitle: function () {
      var e, t = this.$element, n = this.options;
      return e = t.attr('data-original-title') || (typeof n.title == 'function' ? n.title.call(t[0]) : n.title), e;
    },
    tip: function () {
      return this.$tip = this.$tip || e(this.options.template);
    },
    arrow: function () {
      return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
    },
    validate: function () {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    },
    enable: function () {
      this.enabled = !0;
    },
    disable: function () {
      this.enabled = !1;
    },
    toggleEnabled: function () {
      this.enabled = !this.enabled;
    },
    toggle: function (t) {
      var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
      n.tip().hasClass('in') ? n.hide() : n.show();
    },
    destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type);
    }
  };
  var n = e.fn.tooltip;
  e.fn.tooltip = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('tooltip'), s = typeof n == 'object' && n;
      i || r.data('tooltip', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
    animation: !0,
    placement: 'top',
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    container: !1
  }, e.fn.tooltip.noConflict = function () {
    return e.fn.tooltip = n, this;
  };
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (e, t) {
    this.init('popover', e, t);
  };
  t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
    constructor: t,
    setContent: function () {
      var e = this.tip(), t = this.getTitle(), n = this.getContent();
      e.find('.popover-title')[this.options.html ? 'html' : 'text'](t), e.find('.popover-content')[this.options.html ? 'html' : 'text'](n), e.removeClass('fade top bottom left right in');
    },
    hasContent: function () {
      return this.getTitle() || this.getContent();
    },
    getContent: function () {
      var e, t = this.$element, n = this.options;
      return e = (typeof n.content == 'function' ? n.content.call(t[0]) : n.content) || t.attr('data-content'), e;
    },
    tip: function () {
      return this.$tip || (this.$tip = e(this.options.template)), this.$tip;
    },
    destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type);
    }
  });
  var n = e.fn.popover;
  e.fn.popover = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('popover'), s = typeof n == 'object' && n;
      i || r.data('popover', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), e.fn.popover.noConflict = function () {
    return e.fn.popover = n, this;
  };
}(window.jQuery), !function (e) {
  'use strict';
  function t(t, n) {
    var r = e.proxy(this.process, this), i = e(t).is('body') ? e(window) : e(t), s;
    this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on('scroll.scroll-spy.data-api', r), this.selector = (this.options.target || (s = e(t).attr('href')) && s.replace(/.*(?=#[^\s]+$)/, '') || '') + ' .nav li > a', this.$body = e('body'), this.refresh(), this.process();
  }
  t.prototype = {
    constructor: t,
    refresh: function () {
      var t = this, n;
      this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function () {
        var n = e(this), r = n.data('target') || n.attr('href'), i = /^#\w/.test(r) && e(r);
        return i && i.length && [[
            i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()),
            r
          ]] || null;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).each(function () {
        t.offsets.push(this[0]), t.targets.push(this[1]);
      });
    },
    process: function () {
      var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
      if (e >= n)
        return s != (o = i.last()[0]) && this.activate(o);
      for (o = r.length; o--;)
        s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o]);
    },
    activate: function (t) {
      var n, r;
      this.activeTarget = t, e(this.selector).parent('.active').removeClass('active'), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent('li').addClass('active'), n.parent('.dropdown-menu').length && (n = n.closest('li.dropdown').addClass('active')), n.trigger('activate');
    }
  };
  var n = e.fn.scrollspy;
  e.fn.scrollspy = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('scrollspy'), s = typeof n == 'object' && n;
      i || r.data('scrollspy', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = { offset: 10 }, e.fn.scrollspy.noConflict = function () {
    return e.fn.scrollspy = n, this;
  }, e(window).on('load', function () {
    e('[data-spy="scroll"]').each(function () {
      var t = e(this);
      t.scrollspy(t.data());
    });
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t) {
    this.element = e(t);
  };
  t.prototype = {
    constructor: t,
    show: function () {
      var t = this.element, n = t.closest('ul:not(.dropdown-menu)'), r = t.attr('data-target'), i, s, o;
      r || (r = t.attr('href'), r = r && r.replace(/.*(?=#[^\s]*$)/, ''));
      if (t.parent('li').hasClass('active'))
        return;
      i = n.find('.active:last a')[0], o = e.Event('show', { relatedTarget: i }), t.trigger(o);
      if (o.isDefaultPrevented())
        return;
      s = e(r), this.activate(t.parent('li'), n), this.activate(s, s.parent(), function () {
        t.trigger({
          type: 'shown',
          relatedTarget: i
        });
      });
    },
    activate: function (t, n, r) {
      function o() {
        i.removeClass('active').find('> .dropdown-menu > .active').removeClass('active'), t.addClass('active'), s ? (t[0].offsetWidth, t.addClass('in')) : t.removeClass('fade'), t.parent('.dropdown-menu') && t.closest('li.dropdown').addClass('active'), r && r();
      }
      var i = n.find('> .active'), s = r && e.support.transition && i.hasClass('fade');
      s ? i.one(e.support.transition.end, o) : o(), i.removeClass('in');
    }
  };
  var n = e.fn.tab;
  e.fn.tab = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('tab');
      i || r.data('tab', i = new t(this)), typeof n == 'string' && i[n]();
    });
  }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
    return e.fn.tab = n, this;
  }, e(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
    t.preventDefault(), e(this).tab('show');
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen();
  };
  t.prototype = {
    constructor: t,
    select: function () {
      var e = this.$menu.find('.active').attr('data-value');
      return this.$element.val(this.updater(e)).change(), this.hide();
    },
    updater: function (e) {
      return e;
    },
    show: function () {
      var t = e.extend({}, this.$element.position(), { height: this.$element[0].offsetHeight });
      return this.$menu.insertAfter(this.$element).css({
        top: t.top + t.height,
        left: t.left
      }).show(), this.shown = !0, this;
    },
    hide: function () {
      return this.$menu.hide(), this.shown = !1, this;
    },
    lookup: function (t) {
      var n;
      return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this);
    },
    process: function (t) {
      var n = this;
      return t = e.grep(t, function (e) {
        return n.matcher(e);
      }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
    },
    matcher: function (e) {
      return ~e.toLowerCase().indexOf(this.query.toLowerCase());
    },
    sorter: function (e) {
      var t = [], n = [], r = [], i;
      while (i = e.shift())
        i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
      return t.concat(n, r);
    },
    highlighter: function (e) {
      var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      return e.replace(new RegExp('(' + t + ')', 'ig'), function (e, t) {
        return '<strong>' + t + '</strong>';
      });
    },
    render: function (t) {
      var n = this;
      return t = e(t).map(function (t, r) {
        return t = e(n.options.item).attr('data-value', r), t.find('a').html(n.highlighter(r)), t[0];
      }), t.first().addClass('active'), this.$menu.html(t), this;
    },
    next: function (t) {
      var n = this.$menu.find('.active').removeClass('active'), r = n.next();
      r.length || (r = e(this.$menu.find('li')[0])), r.addClass('active');
    },
    prev: function (e) {
      var t = this.$menu.find('.active').removeClass('active'), n = t.prev();
      n.length || (n = this.$menu.find('li').last()), n.addClass('active');
    },
    listen: function () {
      this.$element.on('focus', e.proxy(this.focus, this)).on('blur', e.proxy(this.blur, this)).on('keypress', e.proxy(this.keypress, this)).on('keyup', e.proxy(this.keyup, this)), this.eventSupported('keydown') && this.$element.on('keydown', e.proxy(this.keydown, this)), this.$menu.on('click', e.proxy(this.click, this)).on('mouseenter', 'li', e.proxy(this.mouseenter, this)).on('mouseleave', 'li', e.proxy(this.mouseleave, this));
    },
    eventSupported: function (e) {
      var t = e in this.$element;
      return t || (this.$element.setAttribute(e, 'return;'), t = typeof this.$element[e] == 'function'), t;
    },
    move: function (e) {
      if (!this.shown)
        return;
      switch (e.keyCode) {
      case 9:
      case 13:
      case 27:
        e.preventDefault();
        break;
      case 38:
        e.preventDefault(), this.prev();
        break;
      case 40:
        e.preventDefault(), this.next();
      }
      e.stopPropagation();
    },
    keydown: function (t) {
      this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [
        40,
        38,
        9,
        13,
        27
      ]), this.move(t);
    },
    keypress: function (e) {
      if (this.suppressKeyPressRepeat)
        return;
      this.move(e);
    },
    keyup: function (e) {
      switch (e.keyCode) {
      case 40:
      case 38:
      case 16:
      case 17:
      case 18:
        break;
      case 9:
      case 13:
        if (!this.shown)
          return;
        this.select();
        break;
      case 27:
        if (!this.shown)
          return;
        this.hide();
        break;
      default:
        this.lookup();
      }
      e.stopPropagation(), e.preventDefault();
    },
    focus: function (e) {
      this.focused = !0;
    },
    blur: function (e) {
      this.focused = !1, !this.mousedover && this.shown && this.hide();
    },
    click: function (e) {
      e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus();
    },
    mouseenter: function (t) {
      this.mousedover = !0, this.$menu.find('.active').removeClass('active'), e(t.currentTarget).addClass('active');
    },
    mouseleave: function (e) {
      this.mousedover = !1, !this.focused && this.shown && this.hide();
    }
  };
  var n = e.fn.typeahead;
  e.fn.typeahead = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('typeahead'), s = typeof n == 'object' && n;
      i || r.data('typeahead', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu"></ul>',
    item: '<li><a href="#"></a></li>',
    minLength: 1
  }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function () {
    return e.fn.typeahead = n, this;
  }, e(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (t) {
    var n = e(this);
    if (n.data('typeahead'))
      return;
    n.typeahead(n.data());
  });
}(window.jQuery), !function (e) {
  'use strict';
  var t = function (t, n) {
    this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on('scroll.affix.data-api', e.proxy(this.checkPosition, this)).on('click.affix.data-api', e.proxy(function () {
      setTimeout(e.proxy(this.checkPosition, this), 1);
    }, this)), this.$element = e(t), this.checkPosition();
  };
  t.prototype.checkPosition = function () {
    if (!this.$element.is(':visible'))
      return;
    var t = e(document).height(), n = this.$window.scrollTop(), r = this.$element.offset(), i = this.options.offset, s = i.bottom, o = i.top, u = 'affix affix-top affix-bottom', a;
    typeof i != 'object' && (s = o = i), typeof o == 'function' && (o = i.top()), typeof s == 'function' && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? 'bottom' : o != null && n <= o ? 'top' : !1;
    if (this.affixed === a)
      return;
    this.affixed = a, this.unpin = a == 'bottom' ? r.top - n : null, this.$element.removeClass(u).addClass('affix' + (a ? '-' + a : ''));
  };
  var n = e.fn.affix;
  e.fn.affix = function (n) {
    return this.each(function () {
      var r = e(this), i = r.data('affix'), s = typeof n == 'object' && n;
      i || r.data('affix', i = new t(this, s)), typeof n == 'string' && i[n]();
    });
  }, e.fn.affix.Constructor = t, e.fn.affix.defaults = { offset: 0 }, e.fn.affix.noConflict = function () {
    return e.fn.affix = n, this;
  }, e(window).on('load', function () {
    e('[data-spy="affix"]').each(function () {
      var t = e(this), n = t.data();
      n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n);
    });
  });
}(window.jQuery);
(function () {
  var SelectParser;
  SelectParser = function () {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }
    SelectParser.prototype.add_node = function (child) {
      if (child.nodeName.toUpperCase() === 'OPTGROUP') {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };
    SelectParser.prototype.add_group = function (group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };
    SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === 'OPTION') {
        if (option.text !== '') {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };
    SelectParser.prototype.escapeExpression = function (text) {
      var map, unsafe_chars;
      if (text == null || text === false) {
        return '';
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '`': '&#x60;'
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function (chr) {
        return map[chr] || '&amp;';
      });
    };
    return SelectParser;
  }();
  SelectParser.select_to_array = function (select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };
  this.SelectParser = SelectParser;
}.call(this));
(function () {
  var AbstractChosen, root;
  root = this;
  AbstractChosen = function () {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.finish_setup();
    }
    AbstractChosen.prototype.set_default_values = function () {
      var _this = this;
      this.click_test_action = function (evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function (evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === '' ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete || false;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      return this.inherit_select_classes = this.options.inherit_select_classes || false;
    };
    AbstractChosen.prototype.set_default_text = function () {
      if (this.form_field.getAttribute('data-placeholder')) {
        this.default_text = this.form_field.getAttribute('data-placeholder');
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute('data-no_results_text') || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };
    AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = true;
    };
    AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = false;
    };
    AbstractChosen.prototype.input_focus = function (evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(function () {
            return _this.container_mousedown();
          }, 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };
    AbstractChosen.prototype.input_blur = function (evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout(function () {
          return _this.blur_test();
        }, 100);
      }
    };
    AbstractChosen.prototype.results_option_build = function (options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group && (data.search_match || data.group_match)) {
          content += this.result_add_group(data);
        } else if (!data.empty && data.search_match) {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    };
    AbstractChosen.prototype.result_add_option = function (option) {
      var classes, style;
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push('active-result');
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push('disabled-result');
      }
      if (option.selected) {
        classes.push('result-selected');
      }
      if (option.group_array_index != null) {
        classes.push('group-option');
      }
      if (option.classes !== '') {
        classes.push(option.classes);
      }
      style = option.style.cssText !== '' ? ' style="' + option.style + '"' : '';
      return '<li class="' + classes.join(' ') + '"' + style + ' data-option-array-index="' + option.array_index + '">' + option.search_text + '</li>';
    };
    AbstractChosen.prototype.result_add_group = function (group) {
      return '<li class="group-result">' + group.search_text + '</li>';
    };
    AbstractChosen.prototype.results_update_field = function () {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.result_single_selected = null;
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };
    AbstractChosen.prototype.results_toggle = function () {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.results_search = function (evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.winnow_results = function () {
      var option, regex, regexAnchor, results, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      regexAnchor = this.search_contains ? '' : '^';
      regex = new RegExp(regexAnchor + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
      zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (!option.empty) {
          if (option.group) {
            option.group_match = false;
          }
          if (!(option.group && !this.group_search)) {
            option.search_match = false;
            option.search_text = option.group ? option.label : option.html;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (option.group_array_index != null) {
                this.results_data[option.group_array_index].group_match = true;
              }
            } else if (option.group_array_index != null && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      if (results < 1 && searchText.length) {
        this.update_results_content('');
        this.result_clear_highlight();
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };
    AbstractChosen.prototype.search_string_match = function (search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(' ') >= 0 || search_string.indexOf('[') === 0)) {
        parts = search_string.replace(/\[|\]/g, '').split(' ');
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };
    AbstractChosen.prototype.choices_count = function () {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };
    AbstractChosen.prototype.choices_click = function (evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.keyup_checker = function (evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
      case 8:
        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
          return this.keydown_backstroke();
        } else if (!this.pending_backstroke) {
          this.result_clear_highlight();
          return this.results_search();
        }
        break;
      case 13:
        evt.preventDefault();
        if (this.results_showing) {
          return this.result_select(evt);
        }
        break;
      case 27:
        if (this.results_showing) {
          this.results_hide();
        }
        return true;
      case 9:
      case 38:
      case 40:
      case 16:
      case 91:
      case 17:
        break;
      default:
        return this.results_search();
      }
    };
    AbstractChosen.prototype.container_width = function () {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return '' + this.form_field.offsetWidth + 'px';
      }
    };
    AbstractChosen.browser_is_supported = function () {
      var _ref;
      if (window.navigator.appName === 'Microsoft Internet Explorer') {
        return null !== (_ref = document.documentMode) && _ref >= 8;
      }
      return true;
    };
    AbstractChosen.default_multiple_text = 'Select Some Options';
    AbstractChosen.default_single_text = 'Select an Option';
    AbstractChosen.default_no_result_text = 'No results match';
    return AbstractChosen;
  }();
  root.AbstractChosen = AbstractChosen;
}.call(this));
(function () {
  var $, Chosen, root, _ref, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  root = this;
  $ = jQuery;
  $.fn.extend({
    chosen: function (options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function (input_field) {
        var $this;
        $this = $(this);
        if (!$this.hasClass('chzn-done')) {
          return $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });
  Chosen = function (_super) {
    __extends(Chosen, _super);
    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    Chosen.prototype.setup = function () {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass('chzn-rtl');
    };
    Chosen.prototype.finish_setup = function () {
      return this.form_field_jq.addClass('chzn-done');
    };
    Chosen.prototype.set_up_html = function () {
      var container_classes, container_props;
      container_classes = ['chzn-container'];
      container_classes.push('chzn-container-' + (this.is_multiple ? 'multi' : 'single'));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push('chzn-rtl');
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': 'width: ' + this.container_width() + ';',
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + '_chzn';
      }
      this.container = $('<div />', container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>');
      } else {
        this.container.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chzn-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chzn-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chzn-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chzn-search').first();
        this.selected_item = this.container.find('.chzn-single').first();
      }
      this.results_build();
      this.set_tab_index();
      this.set_label_behavior();
      return this.form_field_jq.trigger('liszt:ready', { chosen: this });
    };
    Chosen.prototype.register_observers = function () {
      var _this = this;
      this.container.mousedown(function (evt) {
        _this.container_mousedown(evt);
      });
      this.container.mouseup(function (evt) {
        _this.container_mouseup(evt);
      });
      this.container.mouseenter(function (evt) {
        _this.mouse_enter(evt);
      });
      this.container.mouseleave(function (evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.mouseup(function (evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.mouseover(function (evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.mouseout(function (evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel DOMMouseScroll', function (evt) {
        _this.search_results_mousewheel(evt);
      });
      this.form_field_jq.bind('liszt:updated', function (evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind('liszt:activate', function (evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind('liszt:open', function (evt) {
        _this.container_mousedown(evt);
      });
      this.search_field.blur(function (evt) {
        _this.input_blur(evt);
      });
      this.search_field.keyup(function (evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.keydown(function (evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.focus(function (evt) {
        _this.input_focus(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.click(function (evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.click(function (evt) {
          evt.preventDefault();
        });
      }
    };
    Chosen.prototype.search_field_disabled = function () {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chzn-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind('focus', this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chzn-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind('focus', this.activate_action);
        }
      }
    };
    Chosen.prototype.container_mousedown = function (evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === 'mousedown' && !this.results_showing) {
          evt.preventDefault();
        }
        if (!(evt != null && $(evt.target).hasClass('search-choice-close'))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val('');
            }
            $(document).click(this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && ($(evt.target)[0] === this.selected_item[0] || $(evt.target).parents('a.chzn-single').length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };
    Chosen.prototype.container_mouseup = function (evt) {
      if (evt.target.nodeName === 'ABBR' && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };
    Chosen.prototype.search_results_mousewheel = function (evt) {
      var delta, _ref1, _ref2;
      delta = -((_ref1 = evt.originalEvent) != null ? _ref1.wheelDelta : void 0) || ((_ref2 = evt.originialEvent) != null ? _ref2.detail : void 0);
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };
    Chosen.prototype.blur_test = function (evt) {
      if (!this.active_field && this.container.hasClass('chzn-container-active')) {
        return this.close_field();
      }
    };
    Chosen.prototype.close_field = function () {
      $(document).unbind('click', this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass('chzn-container-active');
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };
    Chosen.prototype.activate_field = function () {
      this.container.addClass('chzn-container-active');
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };
    Chosen.prototype.test_active_click = function (evt) {
      if (this.container.is($(evt.target).closest('.chzn-container'))) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };
    Chosen.prototype.results_build = function () {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = root.SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find('li.search-choice').remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass('chzn-container-single-nosearch');
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass('chzn-container-single-nosearch');
        }
      }
      this.update_results_content(this.results_option_build({ first: true }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };
    Chosen.prototype.result_do_highlight = function (el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass('highlighted');
        maxHeight = parseInt(this.search_results.css('maxHeight'), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop(high_bottom - maxHeight > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };
    Chosen.prototype.result_clear_highlight = function () {
      if (this.result_highlight) {
        this.result_highlight.removeClass('highlighted');
      }
      return this.result_highlight = null;
    };
    Chosen.prototype.results_show = function () {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger('liszt:maxselected', { chosen: this });
        return false;
      }
      this.container.addClass('chzn-with-drop');
      this.form_field_jq.trigger('liszt:showing_dropdown', { chosen: this });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };
    Chosen.prototype.update_results_content = function (content) {
      return this.search_results.html(content);
    };
    Chosen.prototype.results_hide = function () {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass('chzn-with-drop');
        this.form_field_jq.trigger('liszt:hiding_dropdown', { chosen: this });
      }
      return this.results_showing = false;
    };
    Chosen.prototype.set_tab_index = function (el) {
      var ti;
      if (this.form_field_jq.attr('tabindex')) {
        ti = this.form_field_jq.attr('tabindex');
        this.form_field_jq.attr('tabindex', -1);
        return this.search_field.attr('tabindex', ti);
      }
    };
    Chosen.prototype.set_label_behavior = function () {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents('label');
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $('label[for=\'' + this.form_field.id + '\']');
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.click(function (evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };
    Chosen.prototype.show_search_field_default = function () {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass('default');
      } else {
        this.search_field.val('');
        return this.search_field.removeClass('default');
      }
    };
    Chosen.prototype.search_results_mouseup = function (evt) {
      var target;
      target = $(evt.target).hasClass('active-result') ? $(evt.target) : $(evt.target).parents('.active-result').first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };
    Chosen.prototype.search_results_mouseover = function (evt) {
      var target;
      target = $(evt.target).hasClass('active-result') ? $(evt.target) : $(evt.target).parents('.active-result').first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };
    Chosen.prototype.search_results_mouseout = function (evt) {
      if ($(evt.target).hasClass('active-result' || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };
    Chosen.prototype.choice_build = function (item) {
      var choice, close_link, _this = this;
      choice = $('<li />', { 'class': 'search-choice' }).html('<span>' + item.html + '</span>');
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          href: '#',
          'class': 'search-choice-close',
          rel: item.array_index
        });
        close_link.click(function (evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };
    Chosen.prototype.choice_destroy_link_click = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };
    Chosen.prototype.choice_destroy = function (link) {
      if (this.result_deselect(link.attr('rel'))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };
    Chosen.prototype.results_reset = function () {
      this.form_field.options[0].selected = true;
      this.selected_option_count = null;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger('change');
      if (this.active_field) {
        return this.results_hide();
      }
    };
    Chosen.prototype.results_reset_cleanup = function () {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find('abbr').remove();
    };
    Chosen.prototype.result_select = function (evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger('liszt:maxselected', { chosen: this });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass('active-result');
        } else {
          this.search_results.find('.result-selected').removeClass('result-selected');
          this.result_single_selected = high;
        }
        high.addClass('result-selected');
        item = this.results_data[high[0].getAttribute('data-option-array-index')];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(item.text);
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val('');
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger('change', { 'selected': this.form_field.options[item.options_index].value });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        return this.search_field_scale();
      }
    };
    Chosen.prototype.single_set_selected_text = function (text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass('chzn-default');
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass('chzn-default');
      }
      return this.selected_item.find('span').text(text);
    };
    Chosen.prototype.result_deselect = function (pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger('change', { deselected: this.form_field.options[result_data.options_index].value });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };
    Chosen.prototype.single_deselect_control_build = function () {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find('abbr').length) {
        this.selected_item.find('span').first().after('<abbr class="search-choice-close"></abbr>');
      }
      return this.selected_item.addClass('chzn-single-with-deselect');
    };
    Chosen.prototype.get_search_text = function () {
      if (this.search_field.val() === this.default_text) {
        return '';
      } else {
        return $('<div/>').text($.trim(this.search_field.val())).html();
      }
    };
    Chosen.prototype.winnow_results_set_highlight = function () {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find('.result-selected.active-result') : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find('.active-result').first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };
    Chosen.prototype.no_results = function (terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find('span').first().html(terms);
      return this.search_results.append(no_results_html);
    };
    Chosen.prototype.no_results_clear = function () {
      return this.search_results.find('.no-results').remove();
    };
    Chosen.prototype.keydown_arrow = function () {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll('li.active-result').first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };
    Chosen.prototype.keyup_arrow = function () {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll('li.active-result');
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };
    Chosen.prototype.keydown_backstroke = function () {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find('a').first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings('li.search-choice').last();
        if (next_available_destroy.length && !next_available_destroy.hasClass('search-choice-disabled')) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass('search-choice-focus');
          }
        }
      }
    };
    Chosen.prototype.clear_backstroke = function () {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass('search-choice-focus');
      }
      return this.pending_backstroke = null;
    };
    Chosen.prototype.keydown_checker = function (evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
      case 8:
        this.backstroke_length = this.search_field.val().length;
        break;
      case 9:
        if (this.results_showing && !this.is_multiple) {
          this.result_select(evt);
        }
        this.mouse_on_container = false;
        break;
      case 13:
        evt.preventDefault();
        break;
      case 38:
        evt.preventDefault();
        this.keyup_arrow();
        break;
      case 40:
        evt.preventDefault();
        this.keydown_arrow();
        break;
      }
    };
    Chosen.prototype.search_field_scale = function () {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = 'position:absolute; left: -1000px; top: -1000px; display:none;';
        styles = [
          'font-size',
          'font-style',
          'font-weight',
          'font-family',
          'line-height',
          'text-transform',
          'letter-spacing'
        ];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ':' + this.search_field.css(style) + ';';
        }
        div = $('<div />', { 'style': style_block });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({ 'width': w + 'px' });
      }
    };
    return Chosen;
  }(AbstractChosen);
  root.Chosen = Chosen;
}.call(this));
(function (q, k, I) {
  'use strict';
  function G(c) {
    return c.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function D(c, e) {
    var b = k.element('<pre>' + e + '</pre>');
    c.html('');
    c.append(b.contents());
    return c;
  }
  var t = {}, w = { value: {} }, L = {
      'angular.js': 'http://code.angularjs.org/' + k.version.full + '/angular.min.js',
      'angular-resource.js': 'http://code.angularjs.org/' + k.version.full + '/angular-resource.min.js',
      'angular-sanitize.js': 'http://code.angularjs.org/' + k.version.full + '/angular-sanitize.min.js',
      'angular-cookies.js': 'http://code.angularjs.org/' + k.version.full + '/angular-cookies.min.js'
    };
  t.jsFiddle = function (c, e, b) {
    return {
      terminal: !0,
      link: function (x, a, r) {
        function d(a, b) {
          return '<input type="hidden" name="' + a + '" value="' + e(b) + '">';
        }
        var H = {
            html: '',
            css: '',
            js: ''
          };
        k.forEach(r.jsFiddle.split(' '), function (a, b) {
          var d = a.split('.')[1];
          H[d] += d == 'html' ? b == 0 ? '<div ng-app' + (r.module ? '="' + r.module + '"' : '') + '>\n' + c(a, 2) : '\n\n\n  <!-- CACHE FILE: ' + a + ' -->\n  <script type="text/ng-template" id="' + a + '">\n' + c(a, 4) + '  </script>\n' : c(a) + '\n';
        });
        H.html += '</div>\n';
        D(a, '<form class="jsfiddle" method="post" action="http://jsfiddle.net/api/post/library/pure/" target="_blank">' + d('title', 'AngularJS Example: ') + d('css', '</style> <!-- Ugly Hack due to jsFiddle issue: http://goo.gl/BUfGZ --> \n<link rel="stylesheet" href="http://twitter.github.com/bootstrap/assets/css/bootstrap.css">\n' + b.angular + (r.resource ? b.resource : '') + '<style>\n' + H.css) + d('html', H.html) + d('js', H.js) + '<button class="btn btn-primary"><i class="icon-white icon-pencil"></i> Edit Me</button></form>');
      }
    };
  };
  t.code = function () {
    return {
      restrict: 'E',
      terminal: !0
    };
  };
  t.prettyprint = [
    'reindentCode',
    function (c) {
      return {
        restrict: 'C',
        terminal: !0,
        compile: function (e) {
          e.html(q.prettyPrintOne(c(e.html()), I, !0));
        }
      };
    }
  ];
  t.ngSetText = [
    'getEmbeddedTemplate',
    function (c) {
      return {
        restrict: 'CA',
        priority: 10,
        compile: function (e, b) {
          D(e, G(c(b.ngSetText)));
        }
      };
    }
  ];
  t.ngHtmlWrap = [
    'reindentCode',
    'templateMerge',
    function (c, e) {
      return {
        compile: function (b, c) {
          var a = {
              head: '',
              module: '',
              body: b.text()
            };
          k.forEach((c.ngHtmlWrap || '').split(' '), function (b) {
            if (b) {
              var b = L[b] || b, d = b.split(/\./).pop();
              d == 'css' ? a.head += '<link rel="stylesheet" href="' + b + '" type="text/css">\n' : d == 'js' ? a.head += '<script src="' + b + '"></script>\n' : a.module = '="' + b + '"';
            }
          });
          D(b, G(e('<!doctype html>\n<html ng-app{{module}}>\n  <head>\n{{head:4}}  </head>\n  <body>\n{{body:4}}  </body>\n</html>', a)));
        }
      };
    }
  ];
  t.ngSetHtml = [
    'getEmbeddedTemplate',
    function (c) {
      return {
        restrict: 'CA',
        priority: 10,
        compile: function (e, b) {
          D(e, c(b.ngSetHtml));
        }
      };
    }
  ];
  t.ngEvalJavascript = [
    'getEmbeddedTemplate',
    function (c) {
      return {
        compile: function (e, b) {
          var x = c(b.ngEvalJavascript);
          try {
            q.execScript ? q.execScript(x || '""') : q.eval(x);
          } catch (a) {
            q.console ? q.console.log(x, '\n', a) : q.alert(a);
          }
        }
      };
    }
  ];
  t.ngEmbedApp = [
    '$templateCache',
    '$browser',
    '$rootScope',
    '$location',
    function (c, e, b, x) {
      return {
        terminal: !0,
        link: function (a, r, d) {
          a = [];
          a.push([
            '$provide',
            function (a) {
              a.value('$templateCache', c);
              a.value('$anchorScroll', k.noop);
              a.value('$browser', e);
              a.provider('$location', function () {
                this.$get = [
                  '$rootScope',
                  function (a) {
                    b.$on('$locationChangeSuccess', function (b, d, c) {
                      a.$broadcast('$locationChangeSuccess', d, c);
                    });
                    return x;
                  }
                ];
                this.html5Mode = k.noop;
              });
              a.decorator('$timeout', [
                '$rootScope',
                '$delegate',
                function (a, b) {
                  return k.extend(function (d, c) {
                    return c && c > 50 ? setTimeout(function () {
                      a.$apply(d);
                    }, c) : b.apply(this, arguments);
                  }, b);
                }
              ]);
              a.decorator('$rootScope', [
                '$delegate',
                function (a) {
                  b.$watch(function () {
                    a.$digest();
                  });
                  return a;
                }
              ]);
            }
          ]);
          d.ngEmbedApp && a.push(d.ngEmbedApp);
          r.bind('click', function (a) {
            a.target.attributes.getNamedItem('ng-click') && a.preventDefault();
          });
          k.bootstrap(r, a);
        }
      };
    }
  ];
  w.reindentCode = function () {
    return function (c, e) {
      if (!c)
        return c;
      for (var b = c.split(/\r?\n/), x = '      '.substr(0, e || 0), a; b.length && b[0].match(/^\s*$/);)
        b.shift();
      for (; b.length && b[b.length - 1].match(/^\s*$/);)
        b.pop();
      var r = 999;
      for (a = 0; a < b.length; a++) {
        var d = b[0], k = d.match(/^\s*/)[0];
        if (k !== d && k.length < r)
          r = k.length;
      }
      for (a = 0; a < b.length; a++)
        b[a] = x + b[a].substring(r);
      b.push('');
      return b.join('\n');
    };
  };
  w.templateMerge = [
    'reindentCode',
    function (c) {
      return function (e, b) {
        return e.replace(/\{\{(\w+)(?:\:(\d+))?\}\}/g, function (e, a, k) {
          e = b[a];
          k && (e = c(e, k));
          return e == I ? '' : e;
        });
      };
    }
  ];
  w.getEmbeddedTemplate = [
    'reindentCode',
    function (c) {
      return function (e) {
        e = document.getElementById(e);
        return !e ? null : c(k.element(e).html(), 0);
      };
    }
  ];
  k.module('bootstrapPrettify', []).directive(t).factory(w);
  q.PR_SHOULD_USE_CONTINUATION = !0;
  (function () {
    function c(a) {
      function b(i) {
        var a = i.charCodeAt(0);
        if (a !== 92)
          return a;
        var l = i.charAt(1);
        return (a = k[l]) ? a : '0' <= l && l <= '7' ? parseInt(i.substring(1), 8) : l === 'u' || l === 'x' ? parseInt(i.substring(2), 16) : i.charCodeAt(1);
      }
      function A(i) {
        if (i < 32)
          return (i < 16 ? '\\x0' : '\\x') + i.toString(16);
        i = String.fromCharCode(i);
        return i === '\\' || i === '-' || i === ']' || i === '^' ? '\\' + i : i;
      }
      function M(i) {
        var a = i.substring(1, i.length - 1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g), i = [], l = a[0] === '^', f = ['['];
        l && f.push('^');
        for (var l = l ? 1 : 0, g = a.length; l < g; ++l) {
          var j = a[l];
          if (/\\[bdsw]/i.test(j))
            f.push(j);
          else {
            var j = b(j), h;
            l + 2 < g && '-' === a[l + 1] ? (h = b(a[l + 2]), l += 2) : h = j;
            i.push([
              j,
              h
            ]);
            h < 65 || j > 122 || (h < 65 || j > 90 || i.push([
              Math.max(65, j) | 32,
              Math.min(h, 90) | 32
            ]), h < 97 || j > 122 || i.push([
              Math.max(97, j) & -33,
              Math.min(h, 122) & -33
            ]));
          }
        }
        i.sort(function (i, a) {
          return i[0] - a[0] || a[1] - i[1];
        });
        a = [];
        g = [];
        for (l = 0; l < i.length; ++l)
          j = i[l], j[0] <= g[1] + 1 ? g[1] = Math.max(g[1], j[1]) : a.push(g = j);
        for (l = 0; l < a.length; ++l)
          j = a[l], f.push(A(j[0])), j[1] > j[0] && (j[1] + 1 > j[0] && f.push('-'), f.push(A(j[1])));
        f.push(']');
        return f.join('');
      }
      function c(i) {
        for (var a = i.source.match(RegExp('(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)', 'g')), f = a.length, b = [], g = 0, j = 0; g < f; ++g) {
          var h = a[g];
          h === '(' ? ++j : '\\' === h.charAt(0) && (h = +h.substring(1)) && (h <= j ? b[h] = -1 : a[g] = A(h));
        }
        for (g = 1; g < b.length; ++g)
          -1 === b[g] && (b[g] = ++d);
        for (j = g = 0; g < f; ++g)
          h = a[g], h === '(' ? (++j, b[j] || (a[g] = '(?:')) : '\\' === h.charAt(0) && (h = +h.substring(1)) && h <= j && (a[g] = '\\' + b[h]);
        for (g = 0; g < f; ++g)
          '^' === a[g] && '^' !== a[g + 1] && (a[g] = '');
        if (i.ignoreCase && e)
          for (g = 0; g < f; ++g)
            h = a[g], i = h.charAt(0), h.length >= 2 && i === '[' ? a[g] = M(h) : i !== '\\' && (a[g] = h.replace(/[a-zA-Z]/g, function (a) {
              a = a.charCodeAt(0);
              return '[' + String.fromCharCode(a & -33, a | 32) + ']';
            }));
        return a.join('');
      }
      for (var d = 0, e = !1, m = !1, p = 0, f = a.length; p < f; ++p) {
        var n = a[p];
        if (n.ignoreCase)
          m = !0;
        else if (/[a-z]/i.test(n.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
          e = !0;
          m = !1;
          break;
        }
      }
      for (var k = {
            b: 8,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13
          }, o = [], p = 0, f = a.length; p < f; ++p) {
        n = a[p];
        if (n.global || n.multiline)
          throw Error('' + n);
        o.push('(?:' + c(n) + ')');
      }
      return RegExp(o.join('|'), m ? 'gi' : 'g');
    }
    function e(a, b) {
      function A(a) {
        switch (a.nodeType) {
        case 1:
          if (M.test(a.className))
            break;
          for (var f = a.firstChild; f; f = f.nextSibling)
            A(f);
          f = a.nodeName.toLowerCase();
          if ('br' === f || 'li' === f)
            c[m] = '\n', e[m << 1] = d++, e[m++ << 1 | 1] = a;
          break;
        case 3:
        case 4:
          f = a.nodeValue, f.length && (f = b ? f.replace(/\r\n?/g, '\n') : f.replace(/[ \t\r\n]+/g, ' '), c[m] = f, e[m << 1] = d, d += f.length, e[m++ << 1 | 1] = a);
        }
      }
      var M = /(?:^|\s)nocode(?:\s|$)/, c = [], d = 0, e = [], m = 0;
      A(a);
      return {
        sourceCode: c.join('').replace(/\n$/, ''),
        spans: e
      };
    }
    function b(a, b, c, d) {
      b && (a = {
        sourceCode: b,
        basePos: a
      }, c(a), d.push.apply(d, a.decorations));
    }
    function k(a, d) {
      var A = {}, e;
      (function () {
        for (var b = a.concat(d), m = [], p = {}, f = 0, n = b.length; f < n; ++f) {
          var k = b[f], o = k[3];
          if (o)
            for (var i = o.length; --i >= 0;)
              A[o.charAt(i)] = k;
          k = k[1];
          o = '' + k;
          p.hasOwnProperty(o) || (m.push(k), p[o] = null);
        }
        m.push(/[\0-\uffff]/);
        e = c(m);
      }());
      var r = d.length, N = function (a) {
          for (var c = a.basePos, B = [
                c,
                'pln'
              ], f = 0, k = a.sourceCode.match(e) || [], v = {}, o = 0, i = k.length; o < i; ++o) {
            var u = k[o], l = v[u], s = void 0, g;
            if (typeof l === 'string')
              g = !1;
            else {
              var j = A[u.charAt(0)];
              if (j)
                s = u.match(j[1]), l = j[0];
              else {
                for (g = 0; g < r; ++g)
                  if (j = d[g], s = u.match(j[1])) {
                    l = j[0];
                    break;
                  }
                s || (l = 'pln');
              }
              if ((g = l.length >= 5 && 'lang-' === l.substring(0, 5)) && !(s && typeof s[1] === 'string'))
                g = !1, l = 'src';
              g || (v[u] = l);
            }
            j = f;
            f += u.length;
            if (g) {
              g = s[1];
              var h = u.indexOf(g), E = h + g.length;
              s[2] && (E = u.length - s[2].length, h = E - g.length);
              l = l.substring(5);
              b(c + j, u.substring(0, h), N, B);
              b(c + j + h, g, t(l, g), B);
              b(c + j + E, u.substring(E), N, B);
            } else
              B.push(c + j, l);
          }
          a.decorations = B;
        };
      return N;
    }
    function a(a) {
      var b = [], c = [];
      a.tripleQuotedStrings ? b.push([
        'str',
        /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
        null,
        '\'"'
      ]) : a.multiLineStrings ? b.push([
        'str',
        /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
        null,
        '\'"`'
      ]) : b.push([
        'str',
        /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
        null,
        '"\''
      ]);
      a.verbatimStrings && c.push([
        'str',
        /^@\"(?:[^\"]|\"\")*(?:\"|$)/,
        null
      ]);
      var d = a.hashComments;
      d && (a.cStyleComments ? (d > 1 ? b.push([
        'com',
        /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,
        null,
        '#'
      ]) : b.push([
        'com',
        /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,
        null,
        '#'
      ]), c.push([
        'str',
        /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
        null
      ])) : b.push([
        'com',
        /^#[^\r\n]*/,
        null,
        '#'
      ]));
      a.cStyleComments && (c.push([
        'com',
        /^\/\/[^\r\n]*/,
        null
      ]), c.push([
        'com',
        /^\/\*[\s\S]*?(?:\*\/|$)/,
        null
      ]));
      a.regexLiterals && c.push([
        'lang-regex',
        RegExp('^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)')
      ]);
      (d = a.types) && c.push([
        'typ',
        d
      ]);
      a = ('' + a.keywords).replace(/^ | $/g, '');
      a.length && c.push([
        'kwd',
        RegExp('^(?:' + a.replace(/[\s,]+/g, '|') + ')\\b'),
        null
      ]);
      b.push([
        'pln',
        /^\s+/,
        null,
        ' \r\n\t\xa0'
      ]);
      c.push([
        'lit',
        /^@[a-z_$][a-z_$@0-9]*/i,
        null
      ], [
        'typ',
        /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,
        null
      ], [
        'pln',
        /^[a-z_$][a-z_$@0-9]*/i,
        null
      ], [
        'lit',
        /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,
        null,
        '0123456789'
      ], [
        'pln',
        /^\\[\s\S]?/,
        null
      ], [
        'pun',
        /^.[^\s\w\.$@\'\"\`\/\#\\]*/,
        null
      ]);
      return k(b, c);
    }
    function r(a, b, c) {
      function d(a) {
        switch (a.nodeType) {
        case 1:
          if (k.test(a.className))
            break;
          if ('br' === a.nodeName)
            e(a), a.parentNode && a.parentNode.removeChild(a);
          else
            for (a = a.firstChild; a; a = a.nextSibling)
              d(a);
          break;
        case 3:
        case 4:
          if (c) {
            var b = a.nodeValue, f = b.match(r);
            if (f) {
              var B = b.substring(0, f.index);
              a.nodeValue = B;
              (b = b.substring(f.index + f[0].length)) && a.parentNode.insertBefore(m.createTextNode(b), a.nextSibling);
              e(a);
              B || a.parentNode.removeChild(a);
            }
          }
        }
      }
      function e(a) {
        function b(a, f) {
          var c = f ? a.cloneNode(!1) : a, h = a.parentNode;
          if (h) {
            var h = b(h, 1), d = a.nextSibling;
            h.appendChild(c);
            for (var i = d; i; i = d)
              d = i.nextSibling, h.appendChild(i);
          }
          return c;
        }
        for (; !a.nextSibling;)
          if (a = a.parentNode, !a)
            return;
        for (var a = b(a.nextSibling, 0), c; (c = a.parentNode) && c.nodeType === 1;)
          a = c;
        f.push(a);
      }
      for (var k = /(?:^|\s)nocode(?:\s|$)/, r = /\r\n?|\n/, m = a.ownerDocument, p = m.createElement('li'); a.firstChild;)
        p.appendChild(a.firstChild);
      for (var f = [p], n = 0; n < f.length; ++n)
        d(f[n]);
      b === (b | 0) && f[0].setAttribute('value', b);
      var v = m.createElement('ol');
      v.className = 'linenums';
      for (var b = Math.max(0, b - 1 | 0) || 0, n = 0, o = f.length; n < o; ++n)
        p = f[n], p.className = 'L' + (n + b) % 10, p.firstChild || p.appendChild(m.createTextNode('\xa0')), v.appendChild(p);
      a.appendChild(v);
    }
    function d(a, b) {
      for (var c = b.length; --c >= 0;) {
        var d = b[c];
        J.hasOwnProperty(d) ? F.console && console.warn('cannot override language handler %s', d) : J[d] = a;
      }
    }
    function t(a, b) {
      if (!a || !J.hasOwnProperty(a))
        a = /^\s*</.test(b) ? 'default-markup' : 'default-code';
      return J[a];
    }
    function D(a) {
      var b = a.langExtension;
      try {
        var c = e(a.sourceNode, a.pre), d = c.sourceCode;
        a.sourceCode = d;
        a.spans = c.spans;
        a.basePos = 0;
        t(b, d)(a);
        var k = /\bMSIE\s(\d+)/.exec(navigator.userAgent), k = k && +k[1] <= 8, b = /\n/g, r = a.sourceCode, q = r.length, c = 0, m = a.spans, p = m.length, d = 0, f = a.decorations, n = f.length, v = 0;
        f[n] = q;
        var o, i;
        for (i = o = 0; i < n;)
          f[i] !== f[i + 2] ? (f[o++] = f[i++], f[o++] = f[i++]) : i += 2;
        n = o;
        for (i = o = 0; i < n;) {
          for (var u = f[i], l = f[i + 1], s = i + 2; s + 2 <= n && f[s + 1] === l;)
            s += 2;
          f[o++] = u;
          f[o++] = l;
          i = s;
        }
        f.length = o;
        var g = a.sourceNode, j;
        if (g)
          j = g.style.display, g.style.display = 'none';
        try {
          for (; d < p;) {
            var h = m[d + 2] || q, E = f[v + 2] || q, s = Math.min(h, E), C = m[d + 1], K;
            if (C.nodeType !== 1 && (K = r.substring(c, s))) {
              k && (K = K.replace(b, '\r'));
              C.nodeValue = K;
              var x = C.ownerDocument, w = x.createElement('span');
              w.className = f[v + 1];
              var z = C.parentNode;
              z.replaceChild(w, C);
              w.appendChild(C);
              c < h && (m[d + 1] = C = x.createTextNode(r.substring(s, h)), z.insertBefore(C, w.nextSibling));
            }
            c = s;
            c >= h && (d += 2);
            c >= E && (v += 2);
          }
        } finally {
          if (g)
            g.style.display = j;
        }
      } catch (y) {
        F.console && console.log(y && y.stack ? y.stack : y);
      }
    }
    var F = q, z = ['break,continue,do,else,for,if,return,while'], y = [
        [
          z,
          'auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile'
        ],
        'catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof'
      ], w = [
        y,
        'alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where'
      ], G = [
        y,
        'abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient'
      ], O = [
        G,
        'as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where'
      ], y = [
        y,
        'debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN'
      ], P = [
        z,
        'and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None'
      ], Q = [
        z,
        'alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END'
      ], z = [
        z,
        'case,done,elif,esac,eval,fi,function,in,local,set,then,until'
      ], R = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, L = /\S/, S = a({
        keywords: [
          w,
          O,
          y,
          'caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END' + P,
          Q,
          z
        ],
        hashComments: !0,
        cStyleComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
      }), J = {};
    d(S, ['default-code']);
    d(k([], [
      [
        'pln',
        /^[^<?]+/
      ],
      [
        'dec',
        /^<!\w[^>]*(?:>|$)/
      ],
      [
        'com',
        /^<\!--[\s\S]*?(?:-\->|$)/
      ],
      [
        'lang-',
        /^<\?([\s\S]+?)(?:\?>|$)/
      ],
      [
        'lang-',
        /^<%([\s\S]+?)(?:%>|$)/
      ],
      [
        'pun',
        /^(?:<[%?]|[%?]>)/
      ],
      [
        'lang-',
        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i
      ],
      [
        'lang-js',
        /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i
      ],
      [
        'lang-css',
        /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i
      ],
      [
        'lang-in.tag',
        /^(<\/?[a-z][^<>]*>)/i
      ]
    ]), [
      'default-markup',
      'htm',
      'html',
      'mxml',
      'xhtml',
      'xml',
      'xsl'
    ]);
    d(k([
      [
        'pln',
        /^[\s]+/,
        null,
        ' \t\r\n'
      ],
      [
        'atv',
        /^(?:\"[^\"]*\"?|\'[^\']*\'?)/,
        null,
        '"\''
      ]
    ], [
      [
        'tag',
        /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i
      ],
      [
        'atn',
        /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i
      ],
      [
        'lang-uq.val',
        /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/
      ],
      [
        'pun',
        /^[=<>\/]+/
      ],
      [
        'lang-js',
        /^on\w+\s*=\s*\"([^\"]+)\"/i
      ],
      [
        'lang-js',
        /^on\w+\s*=\s*\'([^\']+)\'/i
      ],
      [
        'lang-js',
        /^on\w+\s*=\s*([^\"\'>\s]+)/i
      ],
      [
        'lang-css',
        /^style\s*=\s*\"([^\"]+)\"/i
      ],
      [
        'lang-css',
        /^style\s*=\s*\'([^\']+)\'/i
      ],
      [
        'lang-css',
        /^style\s*=\s*([^\"\'>\s]+)/i
      ]
    ]), ['in.tag']);
    d(k([], [[
        'atv',
        /^[\s\S]+/
      ]]), ['uq.val']);
    d(a({
      keywords: w,
      hashComments: !0,
      cStyleComments: !0,
      types: R
    }), [
      'c',
      'cc',
      'cpp',
      'cxx',
      'cyc',
      'm'
    ]);
    d(a({ keywords: 'null,true,false' }), ['json']);
    d(a({
      keywords: O,
      hashComments: !0,
      cStyleComments: !0,
      verbatimStrings: !0,
      types: R
    }), ['cs']);
    d(a({
      keywords: G,
      cStyleComments: !0
    }), ['java']);
    d(a({
      keywords: z,
      hashComments: !0,
      multiLineStrings: !0
    }), [
      'bsh',
      'csh',
      'sh'
    ]);
    d(a({
      keywords: P,
      hashComments: !0,
      multiLineStrings: !0,
      tripleQuotedStrings: !0
    }), [
      'cv',
      'py'
    ]);
    d(a({
      keywords: 'caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END',
      hashComments: !0,
      multiLineStrings: !0,
      regexLiterals: !0
    }), [
      'perl',
      'pl',
      'pm'
    ]);
    d(a({
      keywords: Q,
      hashComments: !0,
      multiLineStrings: !0,
      regexLiterals: !0
    }), ['rb']);
    d(a({
      keywords: y,
      cStyleComments: !0,
      regexLiterals: !0
    }), ['js']);
    d(a({
      keywords: 'all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes',
      hashComments: 3,
      cStyleComments: !0,
      multilineStrings: !0,
      tripleQuotedStrings: !0,
      regexLiterals: !0
    }), ['coffee']);
    d(k([], [[
        'str',
        /^[\s\S]+/
      ]]), ['regex']);
    var T = F.PR = {
        createSimpleLexer: k,
        registerLangHandler: d,
        sourceDecorator: a,
        PR_ATTRIB_NAME: 'atn',
        PR_ATTRIB_VALUE: 'atv',
        PR_COMMENT: 'com',
        PR_DECLARATION: 'dec',
        PR_KEYWORD: 'kwd',
        PR_LITERAL: 'lit',
        PR_NOCODE: 'nocode',
        PR_PLAIN: 'pln',
        PR_PUNCTUATION: 'pun',
        PR_SOURCE: 'src',
        PR_STRING: 'str',
        PR_TAG: 'tag',
        PR_TYPE: 'typ',
        prettyPrintOne: F.prettyPrintOne = function (a, b, c) {
          var d = document.createElement('div');
          d.innerHTML = '<pre>' + a + '</pre>';
          d = d.firstChild;
          c && r(d, c, !0);
          D({
            langExtension: b,
            numberLines: c,
            sourceNode: d,
            pre: 1
          });
          return d.innerHTML;
        },
        prettyPrint: F.prettyPrint = function (a) {
          function b() {
            var s;
            for (var c = F.PR_SHOULD_USE_CONTINUATION ? m.now() + 250 : Infinity; p < d.length && m.now() < c; p++) {
              var g = d[p], j = g.className;
              if (v.test(j) && !o.test(j)) {
                for (var h = !1, e = g.parentNode; e; e = e.parentNode)
                  if (l.test(e.tagName) && e.className && v.test(e.className)) {
                    h = !0;
                    break;
                  }
                if (!h) {
                  g.className += ' prettyprinted';
                  var j = j.match(n), k;
                  if (h = !j) {
                    for (var h = g, e = I, q = h.firstChild; q; q = q.nextSibling)
                      var t = q.nodeType, e = t === 1 ? e ? h : q : t === 3 ? L.test(q.nodeValue) ? h : e : e;
                    h = (k = e === h ? I : e) && u.test(k.tagName);
                  }
                  h && (j = k.className.match(n));
                  j && (j = j[1]);
                  s = i.test(g.tagName) ? 1 : (h = (h = g.currentStyle) ? h.whiteSpace : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(g, null).getPropertyValue('white-space') : 0) && 'pre' === h.substring(0, 3), h = s;
                  (e = (e = g.className.match(/\blinenums\b(?::(\d+))?/)) ? e[1] && e[1].length ? +e[1] : !0 : !1) && r(g, e, h);
                  f = {
                    langExtension: j,
                    sourceNode: g,
                    numberLines: e,
                    pre: h
                  };
                  D(f);
                }
              }
            }
            p < d.length ? setTimeout(b, 250) : a && a();
          }
          for (var c = [
                document.getElementsByTagName('pre'),
                document.getElementsByTagName('code'),
                document.getElementsByTagName('xmp')
              ], d = [], e = 0; e < c.length; ++e)
            for (var k = 0, q = c[e].length; k < q; ++k)
              d.push(c[e][k]);
          var c = null, m = Date;
          m.now || (m = {
            now: function () {
              return +new Date();
            }
          });
          var p = 0, f, n = /\blang(?:uage)?-([\w.]+)(?!\S)/, v = /\bprettyprint\b/, o = /\bprettyprinted\b/, i = /pre|xmp/i, u = /^code$/i, l = /^(?:pre|code|xmp)$/i;
          b();
        }
      };
    typeof define === 'function' && define.amd && define('google-code-prettify', [], function () {
      return T;
    });
  }());
}(window, window.angular));
angular.element(document).find('head').append('<style type="text/css">.com{color:#93a1a1;}.lit{color:#195f91;}.pun,.opn,.clo{color:#93a1a1;}.fun{color:#dc322f;}.str,.atv{color:#D14;}.kwd,.linenums .tag{color:#1e347b;}.typ,.atn,.dec,.var{color:teal;}.pln{color:#48484c;}.prettyprint{padding:8px;background-color:#f7f7f9;border:1px solid #e1e1e8;}.prettyprint.linenums{-webkit-box-shadow:inset 40px 0 0 #fbfbfc,inset 41px 0 0 #ececf0;-moz-box-shadow:inset 40px 0 0 #fbfbfc,inset 41px 0 0 #ececf0;box-shadow:inset 40px 0 0 #fbfbfc,inset 41px 0 0 #ececf0;}ol.linenums{margin:0 0 0 33px;}ol.linenums li{padding-left:12px;color:#bebec5;line-height:18px;text-shadow:0 1px 0 #fff;}</style>');