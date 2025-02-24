// Build Spotify: 2/24/2025, 9:49:14 PM
(() => {
    var Cn = Object.create
    var _r = Object.defineProperty
    var Ln = Object.getOwnPropertyDescriptor
    var Jn = Object.getOwnPropertyNames
    var $n = Object.getPrototypeOf, Pn = Object.prototype.hasOwnProperty
    var v = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports)
    var zn = (r, e, t, i) => {
        if (e && typeof e == 'object' || typeof e == 'function') {
            for (let n of Jn(e)) {
                !Pn.call(r, n) && n !== t && _r(r, n, {
                    get: () => e[n],
                    enumerable: !(i = Ln(e, n)) || i.enumerable
                })
            }
        }
        return r
    }
    var Wn = (r, e, t) => (t = r != null ? Cn($n(r)) : {}, zn(e || !r || !r.__esModule ? _r(t, 'default', {
        value: r,
        enumerable: !0
    }) : t, r))
    var Et = v((io, Ar) => {
        'use strict'
        Ar.exports = Mn

        function Mn (r, e) {
            for (var t = new Array(arguments.length - 1), i = 0, n = 2, s = !0; n < arguments.length;) t[i++] = arguments[n++]
            return new Promise(function (a, o) {
                t[i] = function (d) {
                    if (s) {
                        if (s = !1, d) {
                            o(d)
                        } else {
                            for (var g = new Array(arguments.length - 1), q = 0; q < g.length;) g[q++] = arguments[q]
                            a.apply(null, g)
                        }
                    }
                }
                try {
                    r.apply(e || null, t)
                } catch (f) {
                    s && (s = !1, o(f))
                }
            })
        }
    })
    var qr = v(xr => {
        'use strict'
        var Ye = xr
        Ye.length = function (e) {
            var t = e.length
            if (!t) return 0
            for (var i = 0; --t % 4 > 1 && e.charAt(t) === "=";) ++i
            return Math.ceil(e.length * 3) / 4 - i
        }
        var Ie = new Array(64), Er = new Array(123)
        for (ne = 0; ne < 64;) Er[Ie[ne] = ne < 26 ? ne + 65 : ne < 52 ? ne + 71 : ne < 62 ? ne - 4 : ne - 59 | 43] = ne++
        var ne
        Ye.encode = function (e, t, i) {
            for (var n = null, s = [], u = 0, a = 0, o; t < i;) {
                var f = e[t++]
                switch (a) {
                    case 0:
                        s[u++] = Ie[f >> 2], o = (f & 3) << 4, a = 1
                        break
                    case 1:
                        s[u++] = Ie[o | f >> 4], o = (f & 15) << 2, a = 2
                        break
                    case 2:
                        s[u++] = Ie[o | f >> 6], s[u++] = Ie[f & 63], a = 0
                        break
                }
                u > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, s)), u = 0)
            }
            return a && (s[u++] = Ie[o], s[u++] = 61, a === 1 && (s[u++] = 61)), n ? (u && n.push(String.fromCharCode.apply(String, s.slice(0, u))), n.join('')) : String.fromCharCode.apply(String, s.slice(0, u))
        }
        var Sr = 'invalid encoding'
        Ye.decode = function (e, t, i) {
            for (var n = i, s = 0, u, a = 0; a < e.length;) {
                var o = e.charCodeAt(a++)
                if (o === 61 && s > 1) break
                if ((o = Er[o]) === void 0) throw Error(Sr)
                switch (s) {
                    case 0:
                        u = o, s = 1
                        break
                    case 1:
                        t[i++] = u << 2 | (o & 48) >> 4, u = o, s = 2
                        break
                    case 2:
                        t[i++] = (u & 15) << 4 | (o & 60) >> 2, u = o, s = 3
                        break
                    case 3:
                        t[i++] = (u & 3) << 6 | o, s = 0
                        break
                }
            }
            if (s === 1) throw Error(Sr)
            return i - n
        }
        Ye.test = function (e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }
    })
    var Rr = v((so, kr) => {
        'use strict'
        kr.exports = et

        function et () {
            this._listeners = {}
        }

        et.prototype.on = function (e, t, i) {
            return (this._listeners[e] || (this._listeners[e] = [])).push({
                fn: t,
                ctx: i || this
            }), this
        }
        et.prototype.off = function (e, t) {
            if (e === void 0) this._listeners = {} else if (t === void 0) this._listeners[e] = [] else for (var i = this._listeners[e], n = 0; n < i.length;) i[n].fn === t ? i.splice(n, 1) : ++n
            return this
        }
        et.prototype.emit = function (e) {
            var t = this._listeners[e]
            if (t) {
                for (var i = [], n = 1; n < arguments.length;) i.push(arguments[n++])
                for (n = 0; n < t.length;) t[n].fn.apply(t[n++].ctx, i)
            }
            return this
        }
    })
    var Dr = v((oo, Vr) => {
        'use strict'
        Vr.exports = Nr(Nr)

        function Nr (r) {
            return typeof Float32Array < 'u' ? function () {
                var e = new Float32Array([-0]), t = new Uint8Array(e.buffer), i = t[3] === 128

                function n (o, f, d) {
                    e[0] = o, f[d] = t[0], f[d + 1] = t[1], f[d + 2] = t[2], f[d + 3] = t[3]
                }

                function s (o, f, d) {
                    e[0] = o, f[d] = t[3], f[d + 1] = t[2], f[d + 2] = t[1], f[d + 3] = t[0]
                }

                r.writeFloatLE = i ? n : s, r.writeFloatBE = i ? s : n

                function u (o, f) {
                    return t[0] = o[f], t[1] = o[f + 1], t[2] = o[f + 2], t[3] = o[f + 3], e[0]
                }

                function a (o, f) {
                    return t[3] = o[f], t[2] = o[f + 1], t[1] = o[f + 2], t[0] = o[f + 3], e[0]
                }

                r.readFloatLE = i ? u : a, r.readFloatBE = i ? a : u
            }() : function () {
                function e (i, n, s, u) {
                    var a = n < 0 ? 1 : 0
                    if (a && (n = -n), n === 0) {
                        i(1 / n > 0 ? 0 : 2147483648, s, u)
                    } else if (isNaN(n)) {
                        i(2143289344, s, u)
                    } else if (n > 34028234663852886e22) {
                        i((a << 31 | 2139095040) >>> 0, s, u)
                    } else if (n < 11754943508222875e-54) {
                        i((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, s, u)
                    } else {
                        var o = Math.floor(Math.log(n) / Math.LN2),
                          f = Math.round(n * Math.pow(2, -o) * 8388608) & 8388607
                        i((a << 31 | o + 127 << 23 | f) >>> 0, s, u)
                    }
                }

                r.writeFloatLE = e.bind(null, Tr), r.writeFloatBE = e.bind(null, Br)

                function t (i, n, s) {
                    var u = i(n, s), a = (u >> 31) * 2 + 1, o = u >>> 23 & 255, f = u & 8388607
                    return o === 255 ? f ? NaN : a * (1 / 0) : o === 0 ? a * 1401298464324817e-60 * f : a * Math.pow(2, o - 150) * (f + 8388608)
                }

                r.readFloatLE = t.bind(null, Fr), r.readFloatBE = t.bind(null, Ir)
            }(), typeof Float64Array < 'u' ? function () {
                var e = new Float64Array([-0]), t = new Uint8Array(e.buffer), i = t[7] === 128

                function n (o, f, d) {
                    e[0] = o, f[d] = t[0], f[d + 1] = t[1], f[d + 2] = t[2], f[d + 3] = t[3], f[d + 4] = t[4], f[d + 5] = t[5], f[d + 6] = t[6], f[d + 7] = t[7]
                }

                function s (o, f, d) {
                    e[0] = o, f[d] = t[7], f[d + 1] = t[6], f[d + 2] = t[5], f[d + 3] = t[4], f[d + 4] = t[3], f[d + 5] = t[2], f[d + 6] = t[1], f[d + 7] = t[0]
                }

                r.writeDoubleLE = i ? n : s, r.writeDoubleBE = i ? s : n

                function u (o, f) {
                    return t[0] = o[f], t[1] = o[f + 1], t[2] = o[f + 2], t[3] = o[f + 3], t[4] = o[f + 4], t[5] = o[f + 5], t[6] = o[f + 6], t[7] = o[f + 7], e[0]
                }

                function a (o, f) {
                    return t[7] = o[f], t[6] = o[f + 1], t[5] = o[f + 2], t[4] = o[f + 3], t[3] = o[f + 4], t[2] = o[f + 5], t[1] = o[f + 6], t[0] = o[f + 7], e[0]
                }

                r.readDoubleLE = i ? u : a, r.readDoubleBE = i ? a : u
            }() : function () {
                function e (i, n, s, u, a, o) {
                    var f = u < 0 ? 1 : 0
                    if (f && (u = -u), u === 0) {
                        i(0, a, o + n), i(1 / u > 0 ? 0 : 2147483648, a, o + s)
                    } else if (isNaN(u)) {
                        i(0, a, o + n), i(2146959360, a, o + s)
                    } else if (u > 17976931348623157e292) {
                        i(0, a, o + n), i((f << 31 | 2146435072) >>> 0, a, o + s)
                    } else {
                        var d
                        if (u < 22250738585072014e-324) {
                            d = u / 5e-324, i(d >>> 0, a, o + n), i((f << 31 | d / 4294967296) >>> 0, a, o + s)
                        } else {
                            var g = Math.floor(Math.log(u) / Math.LN2)
                            g === 1024 && (g = 1023), d = u * Math.pow(2, -g), i(d * 4503599627370496 >>> 0, a, o + n), i((f << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, o + s)
                        }
                    }
                }

                r.writeDoubleLE = e.bind(null, Tr, 0, 4), r.writeDoubleBE = e.bind(null, Br, 4, 0)

                function t (i, n, s, u, a) {
                    var o = i(u, a + n), f = i(u, a + s), d = (f >> 31) * 2 + 1, g = f >>> 20 & 2047,
                      q = 4294967296 * (f & 1048575) + o
                    return g === 2047 ? q ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * q : d * Math.pow(2, g - 1075) * (q + 4503599627370496)
                }

                r.readDoubleLE = t.bind(null, Fr, 0, 4), r.readDoubleBE = t.bind(null, Ir, 4, 0)
            }(), r
        }

        function Tr (r, e, t) {
            e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24
        }

        function Br (r, e, t) {
            e[t] = r >>> 24, e[t + 1] = r >>> 16 & 255, e[t + 2] = r >>> 8 & 255, e[t + 3] = r & 255
        }

        function Fr (r, e) {
            return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0
        }

        function Ir (r, e) {
            return (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0
        }
    })
    var xt = v((exports, module) => {
        'use strict'
        module.exports = inquire

        function inquire (moduleName) {
            try {
                var mod = eval('quire'.replace(/^/, 're'))(moduleName)
                if (mod && (mod.length || Object.keys(mod).length)) return mod
            } catch (r) {
            }
            return null
        }
    })
    var Lr = v(Cr => {
        'use strict'
        var qt = Cr
        qt.length = function (e) {
            for (var t = 0, i = 0, n = 0; n < e.length; ++n) i = e.charCodeAt(n), i < 128 ? t += 1 : i < 2048 ? t += 2 : (i & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320 ? (++n, t += 4) : t += 3
            return t
        }
        qt.read = function (e, t, i) {
            var n = i - t
            if (n < 1) return ''
            for (var s = null, u = [], a = 0, o; t < i;) o = e[t++], o < 128 ? u[a++] = o : o > 191 && o < 224 ? u[a++] = (o & 31) << 6 | e[t++] & 63 : o > 239 && o < 365 ? (o = ((o & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536, u[a++] = 55296 + (o >> 10), u[a++] = 56320 + (o & 1023)) : u[a++] = (o & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63, a > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, u)), a = 0)
            return s ? (a && s.push(String.fromCharCode.apply(String, u.slice(0, a))), s.join('')) : String.fromCharCode.apply(String, u.slice(0, a))
        }
        qt.write = function (e, t, i) {
            for (var n = i, s, u, a = 0; a < e.length; ++a) s = e.charCodeAt(a), s < 128 ? t[i++] = s : s < 2048 ? (t[i++] = s >> 6 | 192, t[i++] = s & 63 | 128) : (s & 64512) === 55296 && ((u = e.charCodeAt(a + 1)) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (u & 1023), ++a, t[i++] = s >> 18 | 240, t[i++] = s >> 12 & 63 | 128, t[i++] = s >> 6 & 63 | 128, t[i++] = s & 63 | 128) : (t[i++] = s >> 12 | 224, t[i++] = s >> 6 & 63 | 128, t[i++] = s & 63 | 128)
            return i - n
        }
    })
    var $r = v((ao, Jr) => {
        'use strict'
        Jr.exports = Un

        function Un (r, e, t) {
            var i = t || 8192, n = i >>> 1, s = null, u = i
            return function (o) {
                if (o < 1 || o > n) return r(o)
                u + o > i && (s = r(i), u = 0)
                var f = e.call(s, u, u += o)
                return u & 7 && (u = (u | 7) + 1), f
            }
        }
    })
    var zr = v((fo, Pr) => {
        'use strict'
        Pr.exports = $
        var $e = ce()

        function $ (r, e) {
            this.lo = r >>> 0, this.hi = e >>> 0
        }

        var ke = $.zero = new $(0, 0)
        ke.toNumber = function () {
            return 0
        }
        ke.zzEncode = ke.zzDecode = function () {
            return this
        }
        ke.length = function () {
            return 1
        }
        var jn = $.zeroHash = '\0\0\0\0\0\0\0\0'
        $.fromNumber = function (e) {
            if (e === 0) return ke
            var t = e < 0
            t && (e = -e)
            var i = e >>> 0, n = (e - i) / 4294967296 >>> 0
            return t && (n = ~n >>> 0, i = ~i >>> 0, ++i > 4294967295 && (i = 0, ++n > 4294967295 && (n = 0))), new $(i, n)
        }
        $.from = function (e) {
            if (typeof e == 'number') return $.fromNumber(e)
            if ($e.isString(e)) if ($e.Long) e = $e.Long.fromString(e) else return $.fromNumber(parseInt(e, 10))
            return e.low || e.high ? new $(e.low >>> 0, e.high >>> 0) : ke
        }
        $.prototype.toNumber = function (e) {
            if (!e && this.hi >>> 31) {
                var t = ~this.lo + 1 >>> 0, i = ~this.hi >>> 0
                return t || (i = i + 1 >>> 0), -(t + i * 4294967296)
            }
            return this.lo + this.hi * 4294967296
        }
        $.prototype.toLong = function (e) {
            return $e.Long ? new $e.Long(this.lo | 0, this.hi | 0, Boolean(e)) : {
                low: this.lo | 0,
                high: this.hi | 0,
                unsigned: Boolean(e)
            }
        }
        var _e = String.prototype.charCodeAt
        $.fromHash = function (e) {
            return e === jn ? ke : new $((_e.call(e, 0) | _e.call(e, 1) << 8 | _e.call(e, 2) << 16 | _e.call(e, 3) << 24) >>> 0, (_e.call(e, 4) | _e.call(e, 5) << 8 | _e.call(e, 6) << 16 | _e.call(e, 7) << 24) >>> 0)
        }
        $.prototype.toHash = function () {
            return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }
        $.prototype.zzEncode = function () {
            var e = this.hi >> 31
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
        }
        $.prototype.zzDecode = function () {
            var e = -(this.lo & 1)
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
        }
        $.prototype.length = function () {
            var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, i = this.hi >>> 24
            return i === 0 ? t === 0 ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : i < 128 ? 9 : 10
        }
    })
    var ce = v(kt => {
        'use strict'
        var y = kt
        y.asPromise = Et()
        y.base64 = qr()
        y.EventEmitter = Rr()
        y.float = Dr()
        y.inquire = xt()
        y.utf8 = Lr()
        y.pool = $r()
        y.LongBits = zr()
        y.isNode = Boolean(typeof global < 'u' && global && global.process && global.process.versions && global.process.versions.node)
        y.global = y.isNode && global || typeof window < 'u' && window || typeof self < 'u' && self || kt
        y.emptyArray = Object.freeze ? Object.freeze([]) : []
        y.emptyObject = Object.freeze ? Object.freeze({}) : {}
        y.isInteger = Number.isInteger || function (e) {
            return typeof e == 'number' && isFinite(e) && Math.floor(e) === e
        }
        y.isString = function (e) {
            return typeof e == 'string' || e instanceof String
        }
        y.isObject = function (e) {
            return e && typeof e == 'object'
        }
        y.isset = y.isSet = function (e, t) {
            var i = e[t]
            return i != null && e.hasOwnProperty(t) ? typeof i != 'object' || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1
        }
        y.Buffer = function () {
            try {
                var r = y.inquire('buffer').Buffer
                return r.prototype.utf8Write ? r : null
            } catch {
                return null
            }
        }()
        y._Buffer_from = null
        y._Buffer_allocUnsafe = null
        y.newBuffer = function (e) {
            return typeof e == 'number' ? y.Buffer ? y._Buffer_allocUnsafe(e) : new y.Array(e) : y.Buffer ? y._Buffer_from(e) : typeof Uint8Array > 'u' ? e : new Uint8Array(e)
        }
        y.Array = typeof Uint8Array < 'u' ? Uint8Array : Array
        y.Long = y.global.dcodeIO && y.global.dcodeIO.Long || y.global.Long || y.inquire('long')
        y.key2Re = /^true|false|0|1$/
        y.key32Re = /^-?(?:0|[1-9][0-9]*)$/
        y.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/
        y.longToHash = function (e) {
            return e ? y.LongBits.from(e).toHash() : y.LongBits.zeroHash
        }
        y.longFromHash = function (e, t) {
            var i = y.LongBits.fromHash(e)
            return y.Long ? y.Long.fromBits(i.lo, i.hi, t) : i.toNumber(Boolean(t))
        }

        function Wr (r, e, t) {
            for (var i = Object.keys(e), n = 0; n < i.length; ++n) (r[i[n]] === void 0 || !t) && (r[i[n]] = e[i[n]])
            return r
        }

        y.merge = Wr
        y.lcFirst = function (e) {
            return e.charAt(0).toLowerCase() + e.substring(1)
        }

        function Mr (r) {
            function e (t, i) {
                if (!(this instanceof e)) return new e(t, i)
                Object.defineProperty(this, 'message', {
                    get: function () {
                        return t
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, 'stack', { value: new Error().stack || '' }), i && Wr(this, i)
            }

            return e.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                },
                name: {
                    get: function () {
                        return r
                    },
                    set: void 0,
                    enumerable: !1,
                    configurable: !0
                },
                toString: {
                    value: function () {
                        return this.name + ': ' + this.message
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }
            }), e
        }

        y.newError = Mr
        y.ProtocolError = Mr('ProtocolError')
        y.oneOfGetter = function (e) {
            for (var t = {}, i = 0; i < e.length; ++i) t[e[i]] = 1
            return function () {
                for (var n = Object.keys(this), s = n.length - 1; s > -1; --s) if (t[n[s]] === 1 && this[n[s]] !== void 0 && this[n[s]] !== null) return n[s]
            }
        }
        y.oneOfSetter = function (e) {
            return function (t) {
                for (var i = 0; i < e.length; ++i) e[i] !== t && delete this[e[i]]
            }
        }
        y.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        }
        y._configure = function () {
            var r = y.Buffer
            if (!r) {
                y._Buffer_from = y._Buffer_allocUnsafe = null
                return
            }
            y._Buffer_from = r.from !== Uint8Array.from && r.from || function (t, i) {
                return new r(t, i)
            }, y._Buffer_allocUnsafe = r.allocUnsafe || function (t) {
                return new r(t)
            }
        }
    })
    var rt = v((co, Zr) => {
        'use strict'
        Zr.exports = A
        var K = ce(), Rt, tt = K.LongBits, Ur = K.base64, jr = K.utf8

        function Pe (r, e, t) {
            this.fn = r, this.len = e, this.next = void 0, this.val = t
        }

        function Tt () {
        }

        function Hn (r) {
            this.head = r.head, this.tail = r.tail, this.len = r.len, this.next = r.states
        }

        function A () {
            this.len = 0, this.head = new Pe(Tt, 0, 0), this.tail = this.head, this.states = null
        }

        var Hr = function () {
            return K.Buffer ? function () {
                return (A.create = function () {
                    return new Rt
                })()
            } : function () {
                return new A
            }
        }
        A.create = Hr()
        A.alloc = function (e) {
            return new K.Array(e)
        }
        K.Array !== Array && (A.alloc = K.pool(A.alloc, K.Array.prototype.subarray))
        A.prototype._push = function (e, t, i) {
            return this.tail = this.tail.next = new Pe(e, t, i), this.len += t, this
        }

        function Bt (r, e, t) {
            e[t] = r & 255
        }

        function Zn (r, e, t) {
            for (; r > 127;) e[t++] = r & 127 | 128, r >>>= 7
            e[t] = r
        }

        function Ft (r, e) {
            this.len = r, this.next = void 0, this.val = e
        }

        Ft.prototype = Object.create(Pe.prototype)
        Ft.prototype.fn = Zn
        A.prototype.uint32 = function (e) {
            return this.len += (this.tail = this.tail.next = new Ft((e = e >>> 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
        }
        A.prototype.int32 = function (e) {
            return e < 0 ? this._push(It, 10, tt.fromNumber(e)) : this.uint32(e)
        }
        A.prototype.sint32 = function (e) {
            return this.uint32((e << 1 ^ e >> 31) >>> 0)
        }

        function It (r, e, t) {
            for (; r.hi;) e[t++] = r.lo & 127 | 128, r.lo = (r.lo >>> 7 | r.hi << 25) >>> 0, r.hi >>>= 7
            for (; r.lo > 127;) e[t++] = r.lo & 127 | 128, r.lo = r.lo >>> 7
            e[t++] = r.lo
        }

        A.prototype.uint64 = function (e) {
            var t = tt.from(e)
            return this._push(It, t.length(), t)
        }
        A.prototype.int64 = A.prototype.uint64
        A.prototype.sint64 = function (e) {
            var t = tt.from(e).zzEncode()
            return this._push(It, t.length(), t)
        }
        A.prototype.bool = function (e) {
            return this._push(Bt, 1, e ? 1 : 0)
        }

        function Nt (r, e, t) {
            e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24
        }

        A.prototype.fixed32 = function (e) {
            return this._push(Nt, 4, e >>> 0)
        }
        A.prototype.sfixed32 = A.prototype.fixed32
        A.prototype.fixed64 = function (e) {
            var t = tt.from(e)
            return this._push(Nt, 4, t.lo)._push(Nt, 4, t.hi)
        }
        A.prototype.sfixed64 = A.prototype.fixed64
        A.prototype.float = function (e) {
            return this._push(K.float.writeFloatLE, 4, e)
        }
        A.prototype.double = function (e) {
            return this._push(K.float.writeDoubleLE, 8, e)
        }
        var Gn = K.Array.prototype.set ? function (e, t, i) {
            t.set(e, i)
        } : function (e, t, i) {
            for (var n = 0; n < e.length; ++n) t[i + n] = e[n]
        }
        A.prototype.bytes = function (e) {
            var t = e.length >>> 0
            if (!t) return this._push(Bt, 1, 0)
            if (K.isString(e)) {
                var i = A.alloc(t = Ur.length(e))
                Ur.decode(e, i, 0), e = i
            }
            return this.uint32(t)._push(Gn, t, e)
        }
        A.prototype.string = function (e) {
            var t = jr.length(e)
            return t ? this.uint32(t)._push(jr.write, t, e) : this._push(Bt, 1, 0)
        }
        A.prototype.fork = function () {
            return this.states = new Hn(this), this.head = this.tail = new Pe(Tt, 0, 0), this.len = 0, this
        }
        A.prototype.reset = function () {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Pe(Tt, 0, 0), this.len = 0), this
        }
        A.prototype.ldelim = function () {
            var e = this.head, t = this.tail, i = this.len
            return this.reset().uint32(i), i && (this.tail.next = e.next, this.tail = t, this.len += i), this
        }
        A.prototype.finish = function () {
            for (var e = this.head.next, t = this.constructor.alloc(this.len), i = 0; e;) e.fn(e.val, t, i), i += e.len, e = e.next
            return t
        }
        A._configure = function (r) {
            Rt = r, A.create = Hr(), Rt._configure()
        }
    })
    var Kr = v((ho, Xr) => {
        'use strict'
        Xr.exports = he
        var Gr = rt();
        (he.prototype = Object.create(Gr.prototype)).constructor = he
        var Ae = ce()

        function he () {
            Gr.call(this)
        }

        he._configure = function () {
            he.alloc = Ae._Buffer_allocUnsafe, he.writeBytesBuffer = Ae.Buffer && Ae.Buffer.prototype instanceof Uint8Array && Ae.Buffer.prototype.set.name === 'set' ? function (e, t, i) {
                t.set(e, i)
            } : function (e, t, i) {
                if (e.copy) e.copy(t, i, 0, e.length) else for (var n = 0; n < e.length;) t[i++] = e[n++]
            }
        }
        he.prototype.bytes = function (e) {
            Ae.isString(e) && (e = Ae._Buffer_from(e, 'base64'))
            var t = e.length >>> 0
            return this.uint32(t), t && this._push(he.writeBytesBuffer, t, e), this
        }

        function Xn (r, e, t) {
            r.length < 40 ? Ae.utf8.write(r, e, t) : e.utf8Write ? e.utf8Write(r, t) : e.write(r, t)
        }

        he.prototype.string = function (e) {
            var t = Ae.Buffer.byteLength(e)
            return this.uint32(t), t && this._push(Xn, t, e), this
        }
        he._configure()
    })
    var nt = v((po, ri) => {
        'use strict'
        ri.exports = D
        var se = ce(), Dt, ei = se.LongBits, Kn = se.utf8

        function oe (r, e) {
            return RangeError('index out of range: ' + r.pos + ' + ' + (e || 1) + ' > ' + r.len)
        }

        function D (r) {
            this.buf = r, this.pos = 0, this.len = r.length
        }

        var Qr = typeof Uint8Array < 'u' ? function (e) {
            if (e instanceof Uint8Array || Array.isArray(e)) return new D(e)
            throw Error('illegal buffer')
        } : function (e) {
            if (Array.isArray(e)) return new D(e)
            throw Error('illegal buffer')
        }, ti = function () {
            return se.Buffer ? function (t) {
                return (D.create = function (n) {
                    return se.Buffer.isBuffer(n) ? new Dt(n) : Qr(n)
                })(t)
            } : Qr
        }
        D.create = ti()
        D.prototype._slice = se.Array.prototype.subarray || se.Array.prototype.slice
        D.prototype.uint32 = function () {
            var e = 4294967295
            return function () {
                if (e = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return e
                if ((this.pos += 5) > this.len) throw this.pos = this.len, oe(this, 10)
                return e
            }
        }()
        D.prototype.int32 = function () {
            return this.uint32() | 0
        }
        D.prototype.sint32 = function () {
            var e = this.uint32()
            return e >>> 1 ^ -(e & 1) | 0
        }

        function Vt () {
            var r = new ei(0, 0), e = 0
            if (this.len - this.pos > 4) {
                for (; e < 4; ++e) if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r
                if (r.lo = (r.lo | (this.buf[this.pos] & 127) << 28) >>> 0, r.hi = (r.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return r
                e = 0
            } else {
                for (; e < 3; ++e) {
                    if (this.pos >= this.len) throw oe(this)
                    if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r
                }
                return r.lo = (r.lo | (this.buf[this.pos++] & 127) << e * 7) >>> 0, r
            }
            if (this.len - this.pos > 4) {
                for (; e < 5; ++e) if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r
            } else {
                for (; e < 5; ++e) {
                    if (this.pos >= this.len) throw oe(this)
                    if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r
                }
            }
            throw Error('invalid varint encoding')
        }

        D.prototype.bool = function () {
            return this.uint32() !== 0
        }

        function it (r, e) {
            return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0
        }

        D.prototype.fixed32 = function () {
            if (this.pos + 4 > this.len) throw oe(this, 4)
            return it(this.buf, this.pos += 4)
        }
        D.prototype.sfixed32 = function () {
            if (this.pos + 4 > this.len) throw oe(this, 4)
            return it(this.buf, this.pos += 4) | 0
        }

        function Yr () {
            if (this.pos + 8 > this.len) throw oe(this, 8)
            return new ei(it(this.buf, this.pos += 4), it(this.buf, this.pos += 4))
        }

        D.prototype.float = function () {
            if (this.pos + 4 > this.len) throw oe(this, 4)
            var e = se.float.readFloatLE(this.buf, this.pos)
            return this.pos += 4, e
        }
        D.prototype.double = function () {
            if (this.pos + 8 > this.len) throw oe(this, 4)
            var e = se.float.readDoubleLE(this.buf, this.pos)
            return this.pos += 8, e
        }
        D.prototype.bytes = function () {
            var e = this.uint32(), t = this.pos, i = this.pos + e
            if (i > this.len) throw oe(this, e)
            if (this.pos += e, Array.isArray(this.buf)) return this.buf.slice(t, i)
            if (t === i) {
                var n = se.Buffer
                return n ? n.alloc(0) : new this.buf.constructor(0)
            }
            return this._slice.call(this.buf, t, i)
        }
        D.prototype.string = function () {
            var e = this.bytes()
            return Kn.read(e, 0, e.length)
        }
        D.prototype.skip = function (e) {
            if (typeof e == 'number') {
                if (this.pos + e > this.len) throw oe(this, e)
                this.pos += e
            } else {
                do if (this.pos >= this.len) throw oe(this) while (this.buf[this.pos++] & 128)
            }
            return this
        }
        D.prototype.skipType = function (r) {
            switch (r) {
                case 0:
                    this.skip()
                    break
                case 1:
                    this.skip(8)
                    break
                case 2:
                    this.skip(this.uint32())
                    break
                case 3:
                    for (; (r = this.uint32() & 7) !== 4;) this.skipType(r)
                    break
                case 5:
                    this.skip(4)
                    break
                default:
                    throw Error('invalid wire type ' + r + ' at offset ' + this.pos)
            }
            return this
        }
        D._configure = function (r) {
            Dt = r, D.create = ti(), Dt._configure()
            var e = se.Long ? 'toLong' : 'toNumber'
            se.merge(D.prototype, {
                int64: function () {
                    return Vt.call(this)[e](!1)
                },
                uint64: function () {
                    return Vt.call(this)[e](!0)
                },
                sint64: function () {
                    return Vt.call(this).zzDecode()[e](!1)
                },
                fixed64: function () {
                    return Yr.call(this)[e](!0)
                },
                sfixed64: function () {
                    return Yr.call(this)[e](!1)
                }
            })
        }
    })
    var oi = v((yo, si) => {
        'use strict'
        si.exports = Re
        var ni = nt();
        (Re.prototype = Object.create(ni.prototype)).constructor = Re
        var ii = ce()

        function Re (r) {
            ni.call(this, r)
        }

        Re._configure = function () {
            ii.Buffer && (Re.prototype._slice = ii.Buffer.prototype.slice)
        }
        Re.prototype.string = function () {
            var e = this.uint32()
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + e, this.len))
        }
        Re._configure()
    })
    var ai = v((mo, ui) => {
        'use strict'
        ui.exports = ze
        var Ct = ce();
        (ze.prototype = Object.create(Ct.EventEmitter.prototype)).constructor = ze

        function ze (r, e, t) {
            if (typeof r != 'function') throw TypeError('rpcImpl must be a function')
            Ct.EventEmitter.call(this), this.rpcImpl = r, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(t)
        }

        ze.prototype.rpcCall = function r (e, t, i, n, s) {
            if (!n) throw TypeError('request must be specified')
            var u = this
            if (!s) return Ct.asPromise(r, u, e, t, i, n)
            if (!u.rpcImpl) {
                setTimeout(function () {
                    s(Error('already ended'))
                }, 0)
                return
            }
            try {
                return u.rpcImpl(e, t[u.requestDelimited ? 'encodeDelimited' : 'encode'](n).finish(), function (o, f) {
                    if (o) return u.emit('error', o, e), s(o)
                    if (f === null) {
                        u.end(!0)
                        return
                    }
                    if (!(f instanceof i)) {
                        try {
                            f = i[u.responseDelimited ? 'decodeDelimited' : 'decode'](f)
                        } catch (d) {
                            return u.emit('error', d, e), s(d)
                        }
                    }
                    return u.emit('data', f, e), s(null, f)
                })
            } catch (a) {
                u.emit('error', a, e), setTimeout(function () {
                    s(a)
                }, 0)
                return
            }
        }
        ze.prototype.end = function (e) {
            return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit('end').off()), this
        }
    })
    var Lt = v(fi => {
        'use strict'
        var Qn = fi
        Qn.Service = ai()
    })
    var Jt = v((go, li) => {
        'use strict'
        li.exports = {}
    })
    var di = v(hi => {
        'use strict'
        var M = hi
        M.build = 'minimal'
        M.Writer = rt()
        M.BufferWriter = Kr()
        M.Reader = nt()
        M.BufferReader = oi()
        M.util = ce()
        M.rpc = Lt()
        M.roots = Jt()
        M.configure = ci

        function ci () {
            M.util._configure(), M.Writer._configure(M.BufferWriter), M.Reader._configure(M.BufferReader)
        }

        ci()
    })
    var yi = v((bo, pi) => {
        'use strict'
        pi.exports = $t

        function $t (r, e) {
            typeof r == 'string' && (e = r, r = void 0)
            var t = []

            function i (s) {
                if (typeof s != 'string') {
                    var u = n()
                    if ($t.verbose && console.log('codegen: ' + u), u = 'return ' + u, s) {
                        for (var a = Object.keys(s), o = new Array(a.length + 1), f = new Array(a.length), d = 0; d < a.length;) o[d] = a[d], f[d] = s[a[d++]]
                        return o[d] = u, Function.apply(null, o).apply(null, f)
                    }
                    return Function(u)()
                }
                for (var g = new Array(arguments.length - 1), q = 0; q < g.length;) g[q] = arguments[++q]
                if (q = 0, s = s.replace(/%([%dfijs])/g, function (R, x) {
                    var B = g[q++]
                    switch (x) {
                        case'd':
                        case'f':
                            return String(Number(B))
                        case'i':
                            return String(Math.floor(B))
                        case'j':
                            return JSON.stringify(B)
                        case's':
                            return String(B)
                    }
                    return '%'
                }), q !== g.length) {
                    throw Error('parameter count mismatch')
                }
                return t.push(s), i
            }

            function n (s) {
                return 'function ' + (s || e || '') + '(' + (r && r.join(',') || '') + `){
  ` + t.join(`
  `) + `
}`
            }

            return i.toString = n, i
        }

        $t.verbose = !1
    })
    var vi = v((Oo, mi) => {
        'use strict'
        mi.exports = We
        var Yn = Et(), es = xt(), Pt = es('fs')

        function We (r, e, t) {
            return typeof e == 'function' ? (t = e, e = {}) : e || (e = {}), t ? !e.xhr && Pt && Pt.readFile ? Pt.readFile(r, function (n, s) {
                return n && typeof XMLHttpRequest < 'u' ? We.xhr(r, e, t) : n ? t(n) : t(null, e.binary ? s : s.toString('utf8'))
            }) : We.xhr(r, e, t) : Yn(We, this, r, e)
        }

        We.xhr = function (e, t, i) {
            var n = new XMLHttpRequest
            n.onreadystatechange = function () {
                if (n.readyState === 4) {
                    if (n.status !== 0 && n.status !== 200) return i(Error('status ' + n.status))
                    if (t.binary) {
                        var u = n.response
                        if (!u) {
                            u = []
                            for (var a = 0; a < n.responseText.length; ++a) u.push(n.responseText.charCodeAt(a) & 255)
                        }
                        return i(null, typeof Uint8Array < 'u' ? new Uint8Array(u) : u)
                    }
                    return i(null, n.responseText)
                }
            }, t.binary && ('overrideMimeType' in n && n.overrideMimeType('text/plain; charset=x-user-defined'), n.responseType = 'arraybuffer'), n.open('GET', e), n.send()
        }
    })
    var bi = v(wi => {
        'use strict'
        var Wt = wi, gi = Wt.isAbsolute = function (e) {
            return /^(?:\/|\w+:)/.test(e)
        }, zt = Wt.normalize = function (e) {
            e = e.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
            var t = e.split('/'), i = gi(e), n = ''
            i && (n = t.shift() + '/')
            for (var s = 0; s < t.length;) t[s] === '..' ? s > 0 && t[s - 1] !== '..' ? t.splice(--s, 2) : i ? t.splice(s, 1) : ++s : t[s] === '.' ? t.splice(s, 1) : ++s
            return n + t.join('/')
        }
        Wt.resolve = function (e, t, i) {
            return i || (t = zt(t)), gi(t) ? t : (i || (e = zt(e)), (e = e.replace(/(?:\/|^)[^/]+$/, '')).length ? zt(e + '/' + t) : t)
        }
    })
    var Ne = v(Oi => {
        'use strict'
        var Me = Oi, ts = P(),
          rs = ['double', 'float', 'int32', 'uint32', 'sint32', 'fixed32', 'sfixed32', 'int64', 'uint64', 'sint64', 'fixed64', 'sfixed64', 'bool', 'string', 'bytes']

        function Ue (r, e) {
            var t = 0, i = {}
            for (e |= 0; t < r.length;) i[rs[t + e]] = r[t++]
            return i
        }

        Me.basic = Ue([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])
        Me.defaults = Ue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, '', ts.emptyArray, null])
        Me.long = Ue([0, 0, 0, 1, 1], 7)
        Me.mapKey = Ue([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)
        Me.packed = Ue([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
    })
    var Se = v((So, Si) => {
        'use strict'
        Si.exports = Q
        var st = Te();
        ((Q.prototype = Object.create(st.prototype)).constructor = Q).className = 'Field'
        var _i = ue(), Ai = Ne(), L = P(), Mt, is = /^required|optional|repeated$/
        Q.fromJSON = function (e, t) {
            return new Q(e, t.id, t.type, t.rule, t.extend, t.options, t.comment)
        }

        function Q (r, e, t, i, n, s, u) {
            if (L.isObject(i) ? (u = n, s = i, i = n = void 0) : L.isObject(n) && (u = s, s = n, n = void 0), st.call(this, r, s), !L.isInteger(e) || e < 0) throw TypeError('id must be a non-negative integer')
            if (!L.isString(t)) throw TypeError('type must be a string')
            if (i !== void 0 && !is.test(i = i.toString().toLowerCase())) throw TypeError('rule must be a string rule')
            if (n !== void 0 && !L.isString(n)) throw TypeError('extend must be a string')
            i === 'proto3_optional' && (i = 'optional'), this.rule = i && i !== 'optional' ? i : void 0, this.type = t, this.id = e, this.extend = n || void 0, this.required = i === 'required', this.optional = !this.required, this.repeated = i === 'repeated', this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = L.Long ? Ai.long[t] !== void 0 : !1, this.bytes = t === 'bytes', this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = u
        }

        Object.defineProperty(Q.prototype, 'packed', {
            get: function () {
                return this._packed === null && (this._packed = this.getOption('packed') !== !1), this._packed
            }
        })
        Q.prototype.setOption = function (e, t, i) {
            return e === 'packed' && (this._packed = null), st.prototype.setOption.call(this, e, t, i)
        }
        Q.prototype.toJSON = function (e) {
            var t = e ? Boolean(e.keepComments) : !1
            return L.toObject(['rule', this.rule !== 'optional' && this.rule || void 0, 'type', this.type, 'id', this.id, 'extend', this.extend, 'options', this.options, 'comment', t ? this.comment : void 0])
        }
        Q.prototype.resolve = function () {
            if (this.resolved) return this
            if ((this.typeDefault = Ai.defaults[this.type]) === void 0 ? (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof Mt ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof _i && typeof this.typeDefault == 'string' && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && ((this.options.packed === !0 || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof _i)) && delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) {
                this.typeDefault = L.Long.fromNumber(this.typeDefault, this.type.charAt(0) === 'u'), Object.freeze && Object.freeze(this.typeDefault)
            } else if (this.bytes && typeof this.typeDefault == 'string') {
                var e
                L.base64.test(this.typeDefault) ? L.base64.decode(this.typeDefault, e = L.newBuffer(L.base64.length(this.typeDefault)), 0) : L.utf8.write(this.typeDefault, e = L.newBuffer(L.utf8.length(this.typeDefault)), 0), this.typeDefault = e
            }
            return this.map ? this.defaultValue = L.emptyObject : this.repeated ? this.defaultValue = L.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof Mt && (this.parent.ctor.prototype[this.name] = this.defaultValue), st.prototype.resolve.call(this)
        }
        Q.d = function (e, t, i, n) {
            return typeof t == 'function' ? t = L.decorateType(t).name : t && typeof t == 'object' && (t = L.decorateEnum(t).name), function (u, a) {
                L.decorateType(u.constructor).add(new Q(a, e, t, i, { default: n }))
            }
        }
        Q._configure = function (e) {
            Mt = e
        }
    })
    var Ve = v((Eo, qi) => {
        'use strict'
        qi.exports = Y
        var ut = Te();
        ((Y.prototype = Object.create(ut.prototype)).constructor = Y).className = 'OneOf'
        var Ei = Se(), ot = P()

        function Y (r, e, t, i) {
            if (Array.isArray(e) || (t = e, e = void 0), ut.call(this, r, t), !(e === void 0 || Array.isArray(e))) throw TypeError('fieldNames must be an Array')
            this.oneof = e || [], this.fieldsArray = [], this.comment = i
        }

        Y.fromJSON = function (e, t) {
            return new Y(e, t.oneof, t.options, t.comment)
        }
        Y.prototype.toJSON = function (e) {
            var t = e ? Boolean(e.keepComments) : !1
            return ot.toObject(['options', this.options, 'oneof', this.oneof, 'comment', t ? this.comment : void 0])
        }

        function xi (r) {
            if (r.parent) for (var e = 0; e < r.fieldsArray.length; ++e) r.fieldsArray[e].parent || r.parent.add(r.fieldsArray[e])
        }

        Y.prototype.add = function (e) {
            if (!(e instanceof Ei)) throw TypeError('field must be a Field')
            return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), e.partOf = this, xi(this), this
        }
        Y.prototype.remove = function (e) {
            if (!(e instanceof Ei)) throw TypeError('field must be a Field')
            var t = this.fieldsArray.indexOf(e)
            if (t < 0) throw Error(e + ' is not a member of ' + this)
            return this.fieldsArray.splice(t, 1), t = this.oneof.indexOf(e.name), t > -1 && this.oneof.splice(t, 1), e.partOf = null, this
        }
        Y.prototype.onAdd = function (e) {
            ut.prototype.onAdd.call(this, e)
            for (var t = this, i = 0; i < this.oneof.length; ++i) {
                var n = e.get(this.oneof[i])
                n && !n.partOf && (n.partOf = t, t.fieldsArray.push(n))
            }
            xi(this)
        }
        Y.prototype.onRemove = function (e) {
            for (var t = 0, i; t < this.fieldsArray.length; ++t) (i = this.fieldsArray[t]).parent && i.parent.remove(i)
            ut.prototype.onRemove.call(this, e)
        }
        Y.d = function () {
            for (var e = new Array(arguments.length), t = 0; t < arguments.length;) e[t] = arguments[t++]
            return function (n, s) {
                ot.decorateType(n.constructor).add(new Y(s, e)), Object.defineProperty(n, s, {
                    get: ot.oneOfGetter(e),
                    set: ot.oneOfSetter(e)
                })
            }
        }
    })
    var Le = v((xo, Ti) => {
        'use strict'
        Ti.exports = E
        var Ut = Te();
        ((E.prototype = Object.create(Ut.prototype)).constructor = E).className = 'Namespace'
        var ki = Se(), at = P(), ns = Ve(), De, je, Ce
        E.fromJSON = function (e, t) {
            return new E(e, t.options).addJSON(t.nested)
        }

        function Ri (r, e) {
            if (r && r.length) {
                for (var t = {}, i = 0; i < r.length; ++i) t[r[i].name] = r[i].toJSON(e)
                return t
            }
        }

        E.arrayToJSON = Ri
        E.isReservedId = function (e, t) {
            if (e) {
                for (var i = 0; i < e.length; ++i) if (typeof e[i] != 'string' && e[i][0] <= t && e[i][1] > t) return !0
            }
            return !1
        }
        E.isReservedName = function (e, t) {
            if (e) {
                for (var i = 0; i < e.length; ++i) if (e[i] === t) return !0
            }
            return !1
        }

        function E (r, e) {
            Ut.call(this, r, e), this.nested = void 0, this._nestedArray = null
        }

        function Ni (r) {
            return r._nestedArray = null, r
        }

        Object.defineProperty(E.prototype, 'nestedArray', {
            get: function () {
                return this._nestedArray || (this._nestedArray = at.toArray(this.nested))
            }
        })
        E.prototype.toJSON = function (e) {
            return at.toObject(['options', this.options, 'nested', Ri(this.nestedArray, e)])
        }
        E.prototype.addJSON = function (e) {
            var t = this
            if (e) for (var i = Object.keys(e), n = 0, s; n < i.length; ++n) s = e[i[n]], t.add((s.fields !== void 0 ? De.fromJSON : s.values !== void 0 ? Ce.fromJSON : s.methods !== void 0 ? je.fromJSON : s.id !== void 0 ? ki.fromJSON : E.fromJSON)(i[n], s))
            return this
        }
        E.prototype.get = function (e) {
            return this.nested && this.nested[e] || null
        }
        E.prototype.getEnum = function (e) {
            if (this.nested && this.nested[e] instanceof Ce) return this.nested[e].values
            throw Error('no such enum: ' + e)
        }
        E.prototype.add = function (e) {
            if (!(e instanceof ki && e.extend !== void 0 || e instanceof De || e instanceof ns || e instanceof Ce || e instanceof je || e instanceof E)) throw TypeError('object must be a valid nested object')
            if (!this.nested) {
                this.nested = {}
            } else {
                var t = this.get(e.name)
                if (t) {
                    if (t instanceof E && e instanceof E && !(t instanceof De || t instanceof je)) {
                        for (var i = t.nestedArray, n = 0; n < i.length; ++n) e.add(i[n])
                        this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0)
                    } else {
                        throw Error('duplicate name \'' + e.name + '\' in ' + this)
                    }
                }
            }
            return this.nested[e.name] = e, e.onAdd(this), Ni(this)
        }
        E.prototype.remove = function (e) {
            if (!(e instanceof Ut)) throw TypeError('object must be a ReflectionObject')
            if (e.parent !== this) throw Error(e + ' is not a member of ' + this)
            return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = void 0), e.onRemove(this), Ni(this)
        }
        E.prototype.define = function (e, t) {
            if (at.isString(e)) e = e.split('.') else if (!Array.isArray(e)) throw TypeError('illegal path')
            if (e && e.length && e[0] === '') throw Error('path must be relative')
            for (var i = this; e.length > 0;) {
                var n = e.shift()
                if (i.nested && i.nested[n]) {
                    if (i = i.nested[n], !(i instanceof E)) throw Error('path conflicts with non-namespace objects')
                } else {
                    i.add(i = new E(n))
                }
            }
            return t && i.addJSON(t), i
        }
        E.prototype.resolveAll = function () {
            for (var e = this.nestedArray, t = 0; t < e.length;) e[t] instanceof E ? e[t++].resolveAll() : e[t++].resolve()
            return this.resolve()
        }
        E.prototype.lookup = function (e, t, i) {
            if (typeof t == 'boolean' ? (i = t, t = void 0) : t && !Array.isArray(t) && (t = [t]), at.isString(e) && e.length) {
                if (e === '.') return this.root
                e = e.split('.')
            } else if (!e.length) return this
            if (e[0] === '') return this.root.lookup(e.slice(1), t)
            var n = this.get(e[0])
            if (n) {
                if (e.length === 1) {
                    if (!t || t.indexOf(n.constructor) > -1) return n
                } else if (n instanceof E && (n = n.lookup(e.slice(1), t, !0))) return n
            } else {
                for (var s = 0; s < this.nestedArray.length; ++s) if (this._nestedArray[s] instanceof E && (n = this._nestedArray[s].lookup(e, t, !0))) return n
            }
            return this.parent === null || i ? null : this.parent.lookup(e, t)
        }
        E.prototype.lookupType = function (e) {
            var t = this.lookup(e, [De])
            if (!t) throw Error('no such type: ' + e)
            return t
        }
        E.prototype.lookupEnum = function (e) {
            var t = this.lookup(e, [Ce])
            if (!t) throw Error('no such Enum \'' + e + '\' in ' + this)
            return t
        }
        E.prototype.lookupTypeOrEnum = function (e) {
            var t = this.lookup(e, [De, Ce])
            if (!t) throw Error('no such Type or Enum \'' + e + '\' in ' + this)
            return t
        }
        E.prototype.lookupService = function (e) {
            var t = this.lookup(e, [je])
            if (!t) throw Error('no such Service \'' + e + '\' in ' + this)
            return t
        }
        E._configure = function (r, e, t) {
            De = r, je = e, Ce = t
        }
    })
    var ft = v((qo, Bi) => {
        'use strict'
        Bi.exports = ge
        var jt = Se();
        ((ge.prototype = Object.create(jt.prototype)).constructor = ge).className = 'MapField'
        var ss = Ne(), He = P()

        function ge (r, e, t, i, n, s) {
            if (jt.call(this, r, e, i, void 0, void 0, n, s), !He.isString(t)) throw TypeError('keyType must be a string')
            this.keyType = t, this.resolvedKeyType = null, this.map = !0
        }

        ge.fromJSON = function (e, t) {
            return new ge(e, t.id, t.keyType, t.type, t.options, t.comment)
        }
        ge.prototype.toJSON = function (e) {
            var t = e ? Boolean(e.keepComments) : !1
            return He.toObject(['keyType', this.keyType, 'type', this.type, 'id', this.id, 'extend', this.extend, 'options', this.options, 'comment', t ? this.comment : void 0])
        }
        ge.prototype.resolve = function () {
            if (this.resolved) return this
            if (ss.mapKey[this.keyType] === void 0) throw Error('invalid key type: ' + this.keyType)
            return jt.prototype.resolve.call(this)
        }
        ge.d = function (e, t, i) {
            return typeof i == 'function' ? i = He.decorateType(i).name : i && typeof i == 'object' && (i = He.decorateEnum(i).name), function (s, u) {
                He.decorateType(s.constructor).add(new ge(u, e, t, i))
            }
        }
    })
    var lt = v((ko, Fi) => {
        'use strict'
        Fi.exports = Be
        var Ht = Te();
        ((Be.prototype = Object.create(Ht.prototype)).constructor = Be).className = 'Method'
        var Je = P()

        function Be (r, e, t, i, n, s, u, a, o) {
            if (Je.isObject(n) ? (u = n, n = s = void 0) : Je.isObject(s) && (u = s, s = void 0), !(e === void 0 || Je.isString(e))) throw TypeError('type must be a string')
            if (!Je.isString(t)) throw TypeError('requestType must be a string')
            if (!Je.isString(i)) throw TypeError('responseType must be a string')
            Ht.call(this, r, u), this.type = e || 'rpc', this.requestType = t, this.requestStream = n ? !0 : void 0, this.responseType = i, this.responseStream = s ? !0 : void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = a, this.parsedOptions = o
        }

        Be.fromJSON = function (e, t) {
            return new Be(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions)
        }
        Be.prototype.toJSON = function (e) {
            var t = e ? Boolean(e.keepComments) : !1
            return Je.toObject(['type', this.type !== 'rpc' && this.type || void 0, 'requestType', this.requestType, 'requestStream', this.requestStream, 'responseType', this.responseType, 'responseStream', this.responseStream, 'options', this.options, 'comment', t ? this.comment : void 0, 'parsedOptions', this.parsedOptions])
        }
        Be.prototype.resolve = function () {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), Ht.prototype.resolve.call(this))
        }
    })
    var ct = v((Ro, Vi) => {
        'use strict'
        Vi.exports = ee
        var Ee = Le();
        ((ee.prototype = Object.create(Ee.prototype)).constructor = ee).className = 'Service'
        var Zt = lt(), Ze = P(), os = Lt()

        function ee (r, e) {
            Ee.call(this, r, e), this.methods = {}, this._methodsArray = null
        }

        ee.fromJSON = function (e, t) {
            var i = new ee(e, t.options)
            if (t.methods) for (var n = Object.keys(t.methods), s = 0; s < n.length; ++s) i.add(Zt.fromJSON(n[s], t.methods[n[s]]))
            return t.nested && i.addJSON(t.nested), i.comment = t.comment, i
        }
        ee.prototype.toJSON = function (e) {
            var t = Ee.prototype.toJSON.call(this, e), i = e ? Boolean(e.keepComments) : !1
            return Ze.toObject(['options', t && t.options || void 0, 'methods', Ee.arrayToJSON(this.methodsArray, e) || {}, 'nested', t && t.nested || void 0, 'comment', i ? this.comment : void 0])
        }
        Object.defineProperty(ee.prototype, 'methodsArray', {
            get: function () {
                return this._methodsArray || (this._methodsArray = Ze.toArray(this.methods))
            }
        })

        function Ii (r) {
            return r._methodsArray = null, r
        }

        ee.prototype.get = function (e) {
            return this.methods[e] || Ee.prototype.get.call(this, e)
        }
        ee.prototype.resolveAll = function () {
            for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve()
            return Ee.prototype.resolve.call(this)
        }
        ee.prototype.add = function (e) {
            if (this.get(e.name)) throw Error('duplicate name \'' + e.name + '\' in ' + this)
            return e instanceof Zt ? (this.methods[e.name] = e, e.parent = this, Ii(this)) : Ee.prototype.add.call(this, e)
        }
        ee.prototype.remove = function (e) {
            if (e instanceof Zt) {
                if (this.methods[e.name] !== e) throw Error(e + ' is not a member of ' + this)
                return delete this.methods[e.name], e.parent = null, Ii(this)
            }
            return Ee.prototype.remove.call(this, e)
        }
        ee.prototype.create = function (e, t, i) {
            for (var n = new os.Service(e, t, i), s = 0, u; s < this.methodsArray.length; ++s) {
                var a = Ze.lcFirst((u = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, '')
                n[a] = Ze.codegen(['r', 'c'], Ze.isReserved(a) ? a + '_' : a)('return this.rpcCall(m,q,s,r,c)')({
                    m: u,
                    q: u.resolvedRequestType.ctor,
                    s: u.resolvedResponseType.ctor
                })
            }
            return n
        }
    })
    var ht = v((No, Di) => {
        'use strict'
        Di.exports = de
        var us = ce()

        function de (r) {
            if (r) for (var e = Object.keys(r), t = 0; t < e.length; ++t) this[e[t]] = r[e[t]]
        }

        de.create = function (e) {
            return this.$type.create(e)
        }
        de.encode = function (e, t) {
            return this.$type.encode(e, t)
        }
        de.encodeDelimited = function (e, t) {
            return this.$type.encodeDelimited(e, t)
        }
        de.decode = function (e) {
            return this.$type.decode(e)
        }
        de.decodeDelimited = function (e) {
            return this.$type.decodeDelimited(e)
        }
        de.verify = function (e) {
            return this.$type.verify(e)
        }
        de.fromObject = function (e) {
            return this.$type.fromObject(e)
        }
        de.toObject = function (e, t) {
            return this.$type.toObject(e, t)
        }
        de.prototype.toJSON = function () {
            return this.$type.toObject(this, us.toJSONOptions)
        }
    })
    var Gt = v((To, Li) => {
        'use strict'
        Li.exports = ls
        var as = ue(), we = Ne(), Ci = P()

        function fs (r) {
            return 'missing required \'' + r.name + '\''
        }

        function ls (r) {
            var e = Ci.codegen(['r', 'l'], r.name + '$decode')('if(!(r instanceof Reader))')('r=Reader.create(r)')('var c=l===undefined?r.len:r.pos+l,m=new this.ctor' + (r.fieldsArray.filter(function (a) {
                return a.map
            }).length ? ',k,value' : ''))('while(r.pos<c){')('var t=r.uint32()')
            r.group && e('if((t&7)===4)')('break'), e('switch(t>>>3){')
            for (var t = 0; t < r.fieldsArray.length; ++t) {
                var i = r._fieldsArray[t].resolve(), n = i.resolvedType instanceof as ? 'int32' : i.type,
                  s = 'm' + Ci.safeProp(i.name)
                e('case %i: {', i.id), i.map ? (e('if(%s===util.emptyObject)', s)('%s={}', s)('var c2 = r.uint32()+r.pos'), we.defaults[i.keyType] !== void 0 ? e('k=%j', we.defaults[i.keyType]) : e('k=null'), we.defaults[n] !== void 0 ? e('value=%j', we.defaults[n]) : e('value=null'), e('while(r.pos<c2){')('var tag2=r.uint32()')('switch(tag2>>>3){')('case 1: k=r.%s(); break', i.keyType)('case 2:'), we.basic[n] === void 0 ? e('value=types[%i].decode(r,r.uint32())', t) : e('value=r.%s()', n), e('break')('default:')('r.skipType(tag2&7)')('break')('}')('}'), we.long[i.keyType] !== void 0 ? e('%s[typeof k==="object"?util.longToHash(k):k]=value', s) : e('%s[k]=value', s)) : i.repeated ? (e('if(!(%s&&%s.length))', s, s)('%s=[]', s), we.packed[n] !== void 0 && e('if((t&7)===2){')('var c2=r.uint32()+r.pos')('while(r.pos<c2)')('%s.push(r.%s())', s, n)('}else'), we.basic[n] === void 0 ? e(i.resolvedType.group ? '%s.push(types[%i].decode(r))' : '%s.push(types[%i].decode(r,r.uint32()))', s, t) : e('%s.push(r.%s())', s, n)) : we.basic[n] === void 0 ? e(i.resolvedType.group ? '%s=types[%i].decode(r)' : '%s=types[%i].decode(r,r.uint32())', s, t) : e('%s=r.%s()', s, n), e('break')('}')
            }
            for (e('default:')('r.skipType(t&7)')('break')('}')('}'), t = 0; t < r._fieldsArray.length; ++t) {
                var u = r._fieldsArray[t]
                u.required && e('if(!m.hasOwnProperty(%j))', u.name)('throw util.ProtocolError(%j,{instance:m})', fs(u))
            }
            return e('return m')
        }
    })
    var Qt = v((Bo, Ji) => {
        'use strict'
        Ji.exports = ds
        var cs = ue(), Xt = P()

        function te (r, e) {
            return r.name + ': ' + e + (r.repeated && e !== 'array' ? '[]' : r.map && e !== 'object' ? '{k:' + r.keyType + '}' : '') + ' expected'
        }

        function Kt (r, e, t, i) {
            if (e.resolvedType) {
                if (e.resolvedType instanceof cs) {
                    r('switch(%s){', i)('default:')('return%j', te(e, 'enum value'))
                    for (var n = Object.keys(e.resolvedType.values), s = 0; s < n.length; ++s) r('case %i:', e.resolvedType.values[n[s]])
                    r('break')('}')
                } else {
                    r('{')('var e=types[%i].verify(%s);', t, i)('if(e)')('return%j+e', e.name + '.')('}')
                }
            } else {
                switch (e.type) {
                    case'int32':
                    case'uint32':
                    case'sint32':
                    case'fixed32':
                    case'sfixed32':
                        r('if(!util.isInteger(%s))', i)('return%j', te(e, 'integer'))
                        break
                    case'int64':
                    case'uint64':
                    case'sint64':
                    case'fixed64':
                    case'sfixed64':
                        r('if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))', i, i, i, i)('return%j', te(e, 'integer|Long'))
                        break
                    case'float':
                    case'double':
                        r('if(typeof %s!=="number")', i)('return%j', te(e, 'number'))
                        break
                    case'bool':
                        r('if(typeof %s!=="boolean")', i)('return%j', te(e, 'boolean'))
                        break
                    case'string':
                        r('if(!util.isString(%s))', i)('return%j', te(e, 'string'))
                        break
                    case'bytes':
                        r('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)('return%j', te(e, 'buffer'))
                        break
                }
            }
            return r
        }

        function hs (r, e, t) {
            switch (e.keyType) {
                case'int32':
                case'uint32':
                case'sint32':
                case'fixed32':
                case'sfixed32':
                    r('if(!util.key32Re.test(%s))', t)('return%j', te(e, 'integer key'))
                    break
                case'int64':
                case'uint64':
                case'sint64':
                case'fixed64':
                case'sfixed64':
                    r('if(!util.key64Re.test(%s))', t)('return%j', te(e, 'integer|Long key'))
                    break
                case'bool':
                    r('if(!util.key2Re.test(%s))', t)('return%j', te(e, 'boolean key'))
                    break
            }
            return r
        }

        function ds (r) {
            var e = Xt.codegen(['m'], r.name + '$verify')('if(typeof m!=="object"||m===null)')('return%j', 'object expected'),
              t = r.oneofsArray, i = {}
            t.length && e('var p={}')
            for (var n = 0; n < r.fieldsArray.length; ++n) {
                var s = r._fieldsArray[n].resolve(), u = 'm' + Xt.safeProp(s.name)
                if (s.optional && e('if(%s!=null&&m.hasOwnProperty(%j)){', u, s.name), s.map) {
                    e('if(!util.isObject(%s))', u)('return%j', te(s, 'object'))('var k=Object.keys(%s)', u)('for(var i=0;i<k.length;++i){'), hs(e, s, 'k[i]'), Kt(e, s, n, u + '[k[i]]')('}')
                } else if (s.repeated) {
                    e('if(!Array.isArray(%s))', u)('return%j', te(s, 'array'))('for(var i=0;i<%s.length;++i){', u), Kt(e, s, n, u + '[i]')('}')
                } else {
                    if (s.partOf) {
                        var a = Xt.safeProp(s.partOf.name)
                        i[s.partOf.name] === 1 && e('if(p%s===1)', a)('return%j', s.partOf.name + ': multiple values'), i[s.partOf.name] = 1, e('p%s=1', a)
                    }
                    Kt(e, s, n, u)
                }
                s.optional && e('}')
            }
            return e('return null')
        }
    })
    var tr = v(Pi => {
        'use strict'
        var $i = Pi, Ge = ue(), pe = P()

        function Yt (r, e, t, i) {
            var n = !1
            if (e.resolvedType) {
                if (e.resolvedType instanceof Ge) {
                    r('switch(d%s){', i)
                    for (var s = e.resolvedType.values, u = Object.keys(s), a = 0; a < u.length; ++a) s[u[a]] === e.typeDefault && !n && (r('default:')('if(typeof(d%s)==="number"){m%s=d%s;break}', i, i, i), e.repeated || r('break'), n = !0), r('case%j:', u[a])('case %i:', s[u[a]])('m%s=%j', i, s[u[a]])('break')
                    r('}')
                } else {
                    r('if(typeof d%s!=="object")', i)('throw TypeError(%j)', e.fullName + ': object expected')('m%s=types[%i].fromObject(d%s)', i, t, i)
                }
            } else {
                var o = !1
                switch (e.type) {
                    case'double':
                    case'float':
                        r('m%s=Number(d%s)', i, i)
                        break
                    case'uint32':
                    case'fixed32':
                        r('m%s=d%s>>>0', i, i)
                        break
                    case'int32':
                    case'sint32':
                    case'sfixed32':
                        r('m%s=d%s|0', i, i)
                        break
                    case'uint64':
                        o = !0
                    case'int64':
                    case'sint64':
                    case'fixed64':
                    case'sfixed64':
                        r('if(util.Long)')('(m%s=util.Long.fromValue(d%s)).unsigned=%j', i, i, o)('else if(typeof d%s==="string")', i)('m%s=parseInt(d%s,10)', i, i)('else if(typeof d%s==="number")', i)('m%s=d%s', i, i)('else if(typeof d%s==="object")', i)('m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)', i, i, i, o ? 'true' : '')
                        break
                    case'bytes':
                        r('if(typeof d%s==="string")', i)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', i, i, i)('else if(d%s.length >= 0)', i)('m%s=d%s', i, i)
                        break
                    case'string':
                        r('m%s=String(d%s)', i, i)
                        break
                    case'bool':
                        r('m%s=Boolean(d%s)', i, i)
                        break
                }
            }
            return r
        }

        $i.fromObject = function (e) {
            var t = e.fieldsArray,
              i = pe.codegen(['d'], e.name + '$fromObject')('if(d instanceof this.ctor)')('return d')
            if (!t.length) return i('return new this.ctor')
            i('var m=new this.ctor')
            for (var n = 0; n < t.length; ++n) {
                var s = t[n].resolve(), u = pe.safeProp(s.name)
                s.map ? (i('if(d%s){', u)('if(typeof d%s!=="object")', u)('throw TypeError(%j)', s.fullName + ': object expected')('m%s={}', u)('for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){', u), Yt(i, s, n, u + '[ks[i]]')('}')('}')) : s.repeated ? (i('if(d%s){', u)('if(!Array.isArray(d%s))', u)('throw TypeError(%j)', s.fullName + ': array expected')('m%s=[]', u)('for(var i=0;i<d%s.length;++i){', u), Yt(i, s, n, u + '[i]')('}')('}')) : (s.resolvedType instanceof Ge || i('if(d%s!=null){', u), Yt(i, s, n, u), s.resolvedType instanceof Ge || i('}'))
            }
            return i('return m')
        }

        function er (r, e, t, i) {
            if (e.resolvedType) {
                e.resolvedType instanceof Ge ? r('d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s', i, t, i, i, t, i, i) : r('d%s=types[%i].toObject(m%s,o)', i, t, i)
            } else {
                var n = !1
                switch (e.type) {
                    case'double':
                    case'float':
                        r('d%s=o.json&&!isFinite(m%s)?String(m%s):m%s', i, i, i, i)
                        break
                    case'uint64':
                        n = !0
                    case'int64':
                    case'sint64':
                    case'fixed64':
                    case'sfixed64':
                        r('if(typeof m%s==="number")', i)('d%s=o.longs===String?String(m%s):m%s', i, i, i)('else')('d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s', i, i, i, i, n ? 'true' : '', i)
                        break
                    case'bytes':
                        r('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', i, i, i, i, i)
                        break
                    default:
                        r('d%s=m%s', i, i)
                        break
                }
            }
            return r
        }

        $i.toObject = function (e) {
            var t = e.fieldsArray.slice().sort(pe.compareFieldsById)
            if (!t.length) return pe.codegen()('return {}')
            for (var i = pe.codegen(['m', 'o'], e.name + '$toObject')('if(!o)')('o={}')('var d={}'), n = [], s = [], u = [], a = 0; a < t.length; ++a) t[a].partOf || (t[a].resolve().repeated ? n : t[a].map ? s : u).push(t[a])
            if (n.length) {
                for (i('if(o.arrays||o.defaults){'), a = 0; a < n.length; ++a) i('d%s=[]', pe.safeProp(n[a].name))
                i('}')
            }
            if (s.length) {
                for (i('if(o.objects||o.defaults){'), a = 0; a < s.length; ++a) i('d%s={}', pe.safeProp(s[a].name))
                i('}')
            }
            if (u.length) {
                for (i('if(o.defaults){'), a = 0; a < u.length; ++a) {
                    var o = u[a], f = pe.safeProp(o.name)
                    if (o.resolvedType instanceof Ge) {
                        i('d%s=o.enums===String?%j:%j', f, o.resolvedType.valuesById[o.typeDefault], o.typeDefault)
                    } else if (o.long) {
                        i('if(util.Long){')('var n=new util.Long(%i,%i,%j)', o.typeDefault.low, o.typeDefault.high, o.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n', f)('}else')('d%s=o.longs===String?%j:%i', f, o.typeDefault.toString(), o.typeDefault.toNumber())
                    } else if (o.bytes) {
                        var d = '[' + Array.prototype.slice.call(o.typeDefault).join(',') + ']'
                        i('if(o.bytes===String)d%s=%j', f, String.fromCharCode.apply(String, o.typeDefault))('else{')('d%s=%s', f, d)('if(o.bytes!==Array)d%s=util.newBuffer(d%s)', f, f)('}')
                    } else {
                        i('d%s=%j', f, o.typeDefault)
                    }
                }
                i('}')
            }
            var g = !1
            for (a = 0; a < t.length; ++a) {
                var o = t[a], q = e._fieldsArray.indexOf(o), f = pe.safeProp(o.name)
                o.map ? (g || (g = !0, i('var ks2')), i('if(m%s&&(ks2=Object.keys(m%s)).length){', f, f)('d%s={}', f)('for(var j=0;j<ks2.length;++j){'), er(i, o, q, f + '[ks2[j]]')('}')) : o.repeated ? (i('if(m%s&&m%s.length){', f, f)('d%s=[]', f)('for(var j=0;j<m%s.length;++j){', f), er(i, o, q, f + '[j]')('}')) : (i('if(m%s!=null&&m.hasOwnProperty(%j)){', f, o.name), er(i, o, q, f), o.partOf && i('if(o.oneofs)')('d%s=%j', pe.safeProp(o.partOf.name), o.name)), i('}')
            }
            return i('return d')
        }
    })
    var rr = v(zi => {
        'use strict'
        var ps = zi, ys = ht()
        ps['.google.protobuf.Any'] = {
            fromObject: function (r) {
                if (r && r['@type']) {
                    var e = r['@type'].substring(r['@type'].lastIndexOf('/') + 1), t = this.lookup(e)
                    if (t) {
                        var i = r['@type'].charAt(0) === '.' ? r['@type'].slice(1) : r['@type']
                        return i.indexOf('/') === -1 && (i = '/' + i), this.create({
                            type_url: i,
                            value: t.encode(t.fromObject(r)).finish()
                        })
                    }
                }
                return this.fromObject(r)
            },
            toObject: function (r, e) {
                var t = 'type.googleapis.com/', i = '', n = ''
                if (e && e.json && r.type_url && r.value) {
                    n = r.type_url.substring(r.type_url.lastIndexOf('/') + 1), i = r.type_url.substring(0, r.type_url.lastIndexOf('/') + 1)
                    var s = this.lookup(n)
                    s && (r = s.decode(r.value))
                }
                if (!(r instanceof this.ctor) && r instanceof ys) {
                    var u = r.$type.toObject(r, e),
                      a = r.$type.fullName[0] === '.' ? r.$type.fullName.slice(1) : r.$type.fullName
                    return i === '' && (i = t), n = i + a, u['@type'] = n, u
                }
                return this.toObject(r, e)
            }
        }
    })
    var yt = v((Vo, Mi) => {
        'use strict'
        Mi.exports = N
        var ae = Le();
        ((N.prototype = Object.create(ae.prototype)).constructor = N).className = 'Type'
        var ms = ue(), sr = Ve(), dt = Se(), vs = ft(), gs = ct(), ir = ht(), nr = nt(), ws = rt(), W = P(), bs = or(),
          Os = Gt(), _s = Qt(), Wi = tr(), As = rr()

        function N (r, e) {
            ae.call(this, r, e), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
        }

        Object.defineProperties(N.prototype, {
            fieldsById: {
                get: function () {
                    if (this._fieldsById) return this._fieldsById
                    this._fieldsById = {}
                    for (var r = Object.keys(this.fields), e = 0; e < r.length; ++e) {
                        var t = this.fields[r[e]], i = t.id
                        if (this._fieldsById[i]) throw Error('duplicate id ' + i + ' in ' + this)
                        this._fieldsById[i] = t
                    }
                    return this._fieldsById
                }
            },
            fieldsArray: {
                get: function () {
                    return this._fieldsArray || (this._fieldsArray = W.toArray(this.fields))
                }
            },
            oneofsArray: {
                get: function () {
                    return this._oneofsArray || (this._oneofsArray = W.toArray(this.oneofs))
                }
            },
            ctor: {
                get: function () {
                    return this._ctor || (this.ctor = N.generateConstructor(this)())
                },
                set: function (r) {
                    var e = r.prototype
                    e instanceof ir || ((r.prototype = new ir).constructor = r, W.merge(r.prototype, e)), r.$type = r.prototype.$type = this, W.merge(r, ir, !0), this._ctor = r
                    for (var t = 0; t < this.fieldsArray.length; ++t) this._fieldsArray[t].resolve()
                    var i = {}
                    for (t = 0; t < this.oneofsArray.length; ++t) {
                        i[this._oneofsArray[t].resolve().name] = {
                            get: W.oneOfGetter(this._oneofsArray[t].oneof),
                            set: W.oneOfSetter(this._oneofsArray[t].oneof)
                        }
                    }
                    t && Object.defineProperties(r.prototype, i)
                }
            }
        })
        N.generateConstructor = function (e) {
            for (var t = W.codegen(['p'], e.name), i = 0, n; i < e.fieldsArray.length; ++i) (n = e._fieldsArray[i]).map ? t('this%s={}', W.safeProp(n.name)) : n.repeated && t('this%s=[]', W.safeProp(n.name))
            return t('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)')('this[ks[i]]=p[ks[i]]')
        }

        function pt (r) {
            return r._fieldsById = r._fieldsArray = r._oneofsArray = null, delete r.encode, delete r.decode, delete r.verify, r
        }

        N.fromJSON = function (e, t) {
            var i = new N(e, t.options)
            i.extensions = t.extensions, i.reserved = t.reserved
            for (var n = Object.keys(t.fields), s = 0; s < n.length; ++s) i.add((typeof t.fields[n[s]].keyType < 'u' ? vs.fromJSON : dt.fromJSON)(n[s], t.fields[n[s]]))
            if (t.oneofs) for (n = Object.keys(t.oneofs), s = 0; s < n.length; ++s) i.add(sr.fromJSON(n[s], t.oneofs[n[s]]))
            if (t.nested) {
                for (n = Object.keys(t.nested), s = 0; s < n.length; ++s) {
                    var u = t.nested[n[s]]
                    i.add((u.id !== void 0 ? dt.fromJSON : u.fields !== void 0 ? N.fromJSON : u.values !== void 0 ? ms.fromJSON : u.methods !== void 0 ? gs.fromJSON : ae.fromJSON)(n[s], u))
                }
            }
            return t.extensions && t.extensions.length && (i.extensions = t.extensions), t.reserved && t.reserved.length && (i.reserved = t.reserved), t.group && (i.group = !0), t.comment && (i.comment = t.comment), i
        }
        N.prototype.toJSON = function (e) {
            var t = ae.prototype.toJSON.call(this, e), i = e ? Boolean(e.keepComments) : !1
            return W.toObject(['options', t && t.options || void 0, 'oneofs', ae.arrayToJSON(this.oneofsArray, e), 'fields', ae.arrayToJSON(this.fieldsArray.filter(function (n) {
                return !n.declaringField
            }), e) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : void 0, 'reserved', this.reserved && this.reserved.length ? this.reserved : void 0, 'group', this.group || void 0, 'nested', t && t.nested || void 0, 'comment', i ? this.comment : void 0])
        }
        N.prototype.resolveAll = function () {
            for (var e = this.fieldsArray, t = 0; t < e.length;) e[t++].resolve()
            var i = this.oneofsArray
            for (t = 0; t < i.length;) i[t++].resolve()
            return ae.prototype.resolveAll.call(this)
        }
        N.prototype.get = function (e) {
            return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
        }
        N.prototype.add = function (e) {
            if (this.get(e.name)) throw Error('duplicate name \'' + e.name + '\' in ' + this)
            if (e instanceof dt && e.extend === void 0) {
                if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error('duplicate id ' + e.id + ' in ' + this)
                if (this.isReservedId(e.id)) throw Error('id ' + e.id + ' is reserved in ' + this)
                if (this.isReservedName(e.name)) throw Error('name \'' + e.name + '\' is reserved in ' + this)
                return e.parent && e.parent.remove(e), this.fields[e.name] = e, e.message = this, e.onAdd(this), pt(this)
            }
            return e instanceof sr ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), pt(this)) : ae.prototype.add.call(this, e)
        }
        N.prototype.remove = function (e) {
            if (e instanceof dt && e.extend === void 0) {
                if (!this.fields || this.fields[e.name] !== e) throw Error(e + ' is not a member of ' + this)
                return delete this.fields[e.name], e.parent = null, e.onRemove(this), pt(this)
            }
            if (e instanceof sr) {
                if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + ' is not a member of ' + this)
                return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), pt(this)
            }
            return ae.prototype.remove.call(this, e)
        }
        N.prototype.isReservedId = function (e) {
            return ae.isReservedId(this.reserved, e)
        }
        N.prototype.isReservedName = function (e) {
            return ae.isReservedName(this.reserved, e)
        }
        N.prototype.create = function (e) {
            return new this.ctor(e)
        }
        N.prototype.setup = function () {
            for (var e = this.fullName, t = [], i = 0; i < this.fieldsArray.length; ++i) t.push(this._fieldsArray[i].resolve().resolvedType)
            this.encode = bs(this)({
                Writer: ws,
                types: t,
                util: W
            }), this.decode = Os(this)({
                Reader: nr,
                types: t,
                util: W
            }), this.verify = _s(this)({
                types: t,
                util: W
            }), this.fromObject = Wi.fromObject(this)({
                types: t,
                util: W
            }), this.toObject = Wi.toObject(this)({
                types: t,
                util: W
            })
            var n = As[e]
            if (n) {
                var s = Object.create(this)
                s.fromObject = this.fromObject, this.fromObject = n.fromObject.bind(s), s.toObject = this.toObject, this.toObject = n.toObject.bind(s)
            }
            return this
        }
        N.prototype.encode = function (e, t) {
            return this.setup().encode(e, t)
        }
        N.prototype.encodeDelimited = function (e, t) {
            return this.encode(e, t && t.len ? t.fork() : t).ldelim()
        }
        N.prototype.decode = function (e, t) {
            return this.setup().decode(e, t)
        }
        N.prototype.decodeDelimited = function (e) {
            return e instanceof nr || (e = nr.create(e)), this.decode(e, e.uint32())
        }
        N.prototype.verify = function (e) {
            return this.setup().verify(e)
        }
        N.prototype.fromObject = function (e) {
            return this.setup().fromObject(e)
        }
        N.prototype.toObject = function (e, t) {
            return this.setup().toObject(e, t)
        }
        N.d = function (e) {
            return function (i) {
                W.decorateType(i, e)
            }
        }
    })
    var gt = v((Do, Gi) => {
        'use strict'
        Gi.exports = Z
        var vt = Le();
        ((Z.prototype = Object.create(vt.prototype)).constructor = Z).className = 'Root'
        var ar = Se(), ji = ue(), Ss = Ve(), xe = P(), Hi, ur, Xe

        function Z (r) {
            vt.call(this, '', r), this.deferred = [], this.files = []
        }

        Z.fromJSON = function (e, t) {
            return t || (t = new Z), e.options && t.setOptions(e.options), t.addJSON(e.nested)
        }
        Z.prototype.resolvePath = xe.path.resolve
        Z.prototype.fetch = xe.fetch

        function Zi () {
        }

        Z.prototype.load = function r (e, t, i) {
            typeof t == 'function' && (i = t, t = void 0)
            var n = this
            if (!i) return xe.asPromise(r, n, e, t)
            var s = i === Zi

            function u (S, R) {
                if (i) {
                    if (s) throw S
                    var x = i
                    i = null, x(S, R)
                }
            }

            function a (S) {
                var R = S.lastIndexOf('google/protobuf/')
                if (R > -1) {
                    var x = S.substring(R)
                    if (x in Xe) return x
                }
                return null
            }

            function o (S, R) {
                try {
                    if (xe.isString(R) && R.charAt(0) === '{' && (R = JSON.parse(R)), !xe.isString(R)) {
                        n.setOptions(R.options).addJSON(R.nested)
                    } else {
                        ur.filename = S
                        var x = ur(R, n, t), B, J = 0
                        if (x.imports) for (; J < x.imports.length; ++J) (B = a(x.imports[J]) || n.resolvePath(S, x.imports[J])) && f(B)
                        if (x.weakImports) for (J = 0; J < x.weakImports.length; ++J) (B = a(x.weakImports[J]) || n.resolvePath(S, x.weakImports[J])) && f(B, !0)
                    }
                } catch (w) {
                    u(w)
                }
                !s && !d && u(null, n)
            }

            function f (S, R) {
                if (S = a(S) || S, !(n.files.indexOf(S) > -1)) {
                    if (n.files.push(S), S in Xe) {
                        s ? o(S, Xe[S]) : (++d, setTimeout(function () {
                            --d, o(S, Xe[S])
                        }))
                        return
                    }
                    if (s) {
                        var x
                        try {
                            x = xe.fs.readFileSync(S).toString('utf8')
                        } catch (B) {
                            R || u(B)
                            return
                        }
                        o(S, x)
                    } else {
                        ++d, n.fetch(S, function (B, J) {
                            if (--d, !!i) {
                                if (B) {
                                    R ? d || u(null, n) : u(B)
                                    return
                                }
                                o(S, J)
                            }
                        })
                    }
                }
            }

            var d = 0
            xe.isString(e) && (e = [e])
            for (var g = 0, q; g < e.length; ++g) (q = n.resolvePath('', e[g])) && f(q)
            if (s) return n
            d || u(null, n)
        }
        Z.prototype.loadSync = function (e, t) {
            if (!xe.isNode) throw Error('not supported')
            return this.load(e, t, Zi)
        }
        Z.prototype.resolveAll = function () {
            if (this.deferred.length) {
                throw Error('unresolvable extensions: ' + this.deferred.map(function (e) {
                    return '\'extend ' + e.extend + '\' in ' + e.parent.fullName
                }).join(', '))
            }
            return vt.prototype.resolveAll.call(this)
        }
        var mt = /^[A-Z]/

        function Ui (r, e) {
            var t = e.parent.lookup(e.extend)
            if (t) {
                var i = new ar(e.fullName, e.id, e.type, e.rule, void 0, e.options)
                return t.get(i.name) || (i.declaringField = e, e.extensionField = i, t.add(i)), !0
            }
            return !1
        }

        Z.prototype._handleAdd = function (e) {
            if (e instanceof ar) {
                e.extend !== void 0 && !e.extensionField && (Ui(this, e) || this.deferred.push(e))
            } else if (e instanceof ji) {
                mt.test(e.name) && (e.parent[e.name] = e.values)
            } else if (!(e instanceof Ss)) {
                if (e instanceof Hi) for (var t = 0; t < this.deferred.length;) Ui(this, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t
                for (var i = 0; i < e.nestedArray.length; ++i) this._handleAdd(e._nestedArray[i])
                mt.test(e.name) && (e.parent[e.name] = e)
            }
        }
        Z.prototype._handleRemove = function (e) {
            if (e instanceof ar) {
                if (e.extend !== void 0) {
                    if (e.extensionField) {
                        e.extensionField.parent.remove(e.extensionField), e.extensionField = null
                    } else {
                        var t = this.deferred.indexOf(e)
                        t > -1 && this.deferred.splice(t, 1)
                    }
                }
            } else if (e instanceof ji) {
                mt.test(e.name) && delete e.parent[e.name]
            } else if (e instanceof vt) {
                for (var i = 0; i < e.nestedArray.length; ++i) this._handleRemove(e._nestedArray[i])
                mt.test(e.name) && delete e.parent[e.name]
            }
        }
        Z._configure = function (r, e, t) {
            Hi = r, ur = e, Xe = t
        }
    })
    var P = v((Co, Ki) => {
        'use strict'
        var C = Ki.exports = ce(), Xi = Jt(), fr, lr
        C.codegen = yi()
        C.fetch = vi()
        C.path = bi()
        C.fs = C.inquire('fs')
        C.toArray = function (e) {
            if (e) {
                for (var t = Object.keys(e), i = new Array(t.length), n = 0; n < t.length;) i[n] = e[t[n++]]
                return i
            }
            return []
        }
        C.toObject = function (e) {
            for (var t = {}, i = 0; i < e.length;) {
                var n = e[i++], s = e[i++]
                s !== void 0 && (t[n] = s)
            }
            return t
        }
        var Es = /\\/g, xs = /"/g
        C.isReserved = function (e) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
        }
        C.safeProp = function (e) {
            return !/^[$\w_]+$/.test(e) || C.isReserved(e) ? '["' + e.replace(Es, '\\\\').replace(xs, '\\"') + '"]' : '.' + e
        }
        C.ucFirst = function (e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        var qs = /_([a-z])/g
        C.camelCase = function (e) {
            return e.substring(0, 1) + e.substring(1).replace(qs, function (t, i) {
                return i.toUpperCase()
            })
        }
        C.compareFieldsById = function (e, t) {
            return e.id - t.id
        }
        C.decorateType = function (e, t) {
            if (e.$type) return t && e.$type.name !== t && (C.decorateRoot.remove(e.$type), e.$type.name = t, C.decorateRoot.add(e.$type)), e.$type
            fr || (fr = yt())
            var i = new fr(t || e.name)
            return C.decorateRoot.add(i), i.ctor = e, Object.defineProperty(e, '$type', {
                value: i,
                enumerable: !1
            }), Object.defineProperty(e.prototype, '$type', {
                value: i,
                enumerable: !1
            }), i
        }
        var ks = 0
        C.decorateEnum = function (e) {
            if (e.$type) return e.$type
            lr || (lr = ue())
            var t = new lr('Enum' + ks++, e)
            return C.decorateRoot.add(t), Object.defineProperty(e, '$type', {
                value: t,
                enumerable: !1
            }), t
        }
        C.setProperty = function (e, t, i) {
            function n (s, u, a) {
                var o = u.shift()
                if (o === '__proto__' || o === 'prototype') return s
                if (u.length > 0) {
                    s[o] = n(s[o] || {}, u, a)
                } else {
                    var f = s[o]
                    f && (a = [].concat(f).concat(a)), s[o] = a
                }
                return s
            }

            if (typeof e != 'object') throw TypeError('dst must be an object')
            if (!t) throw TypeError('path must be specified')
            return t = t.split('.'), n(e, t, i)
        }
        Object.defineProperty(C, 'decorateRoot', {
            get: function () {
                return Xi.decorated || (Xi.decorated = new (gt()))
            }
        })
    })
    var Te = v((Lo, Qi) => {
        'use strict'
        Qi.exports = G
        G.className = 'ReflectionObject'
        var wt = P(), bt

        function G (r, e) {
            if (!wt.isString(r)) throw TypeError('name must be a string')
            if (e && !wt.isObject(e)) throw TypeError('options must be an object')
            this.options = e, this.parsedOptions = null, this.name = r, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
        }

        Object.defineProperties(G.prototype, {
            root: {
                get: function () {
                    for (var r = this; r.parent !== null;) r = r.parent
                    return r
                }
            },
            fullName: {
                get: function () {
                    for (var r = [this.name], e = this.parent; e;) r.unshift(e.name), e = e.parent
                    return r.join('.')
                }
            }
        })
        G.prototype.toJSON = function () {
            throw Error()
        }
        G.prototype.onAdd = function (e) {
            this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1
            var t = e.root
            t instanceof bt && t._handleAdd(this)
        }
        G.prototype.onRemove = function (e) {
            var t = e.root
            t instanceof bt && t._handleRemove(this), this.parent = null, this.resolved = !1
        }
        G.prototype.resolve = function () {
            return this.resolved ? this : (this.root instanceof bt && (this.resolved = !0), this)
        }
        G.prototype.getOption = function (e) {
            if (this.options) return this.options[e]
        }
        G.prototype.setOption = function (e, t, i) {
            return (!i || !this.options || this.options[e] === void 0) && ((this.options || (this.options = {}))[e] = t), this
        }
        G.prototype.setParsedOption = function (e, t, i) {
            this.parsedOptions || (this.parsedOptions = [])
            var n = this.parsedOptions
            if (i) {
                var s = n.find(function (o) {
                    return Object.prototype.hasOwnProperty.call(o, e)
                })
                if (s) {
                    var u = s[e]
                    wt.setProperty(u, i, t)
                } else {
                    s = {}, s[e] = wt.setProperty({}, i, t), n.push(s)
                }
            } else {
                var a = {}
                a[e] = t, n.push(a)
            }
            return this
        }
        G.prototype.setOptions = function (e, t) {
            if (e) for (var i = Object.keys(e), n = 0; n < i.length; ++n) this.setOption(i[n], e[i[n]], t)
            return this
        }
        G.prototype.toString = function () {
            var e = this.constructor.className, t = this.fullName
            return t.length ? e + ' ' + t : e
        }
        G._configure = function (r) {
            bt = r
        }
    })
    var ue = v((Jo, tn) => {
        'use strict'
        tn.exports = ye
        var Yi = Te();
        ((ye.prototype = Object.create(Yi.prototype)).constructor = ye).className = 'Enum'
        var en = Le(), Ot = P()

        function ye (r, e, t, i, n, s) {
            if (Yi.call(this, r, t), e && typeof e != 'object') throw TypeError('values must be an object')
            if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, this.comments = n || {}, this.valuesOptions = s, this.reserved = void 0, e) for (var u = Object.keys(e), a = 0; a < u.length; ++a) typeof e[u[a]] == 'number' && (this.valuesById[this.values[u[a]] = e[u[a]]] = u[a])
        }

        ye.fromJSON = function (e, t) {
            var i = new ye(e, t.values, t.options, t.comment, t.comments)
            return i.reserved = t.reserved, i
        }
        ye.prototype.toJSON = function (e) {
            var t = e ? Boolean(e.keepComments) : !1
            return Ot.toObject(['options', this.options, 'valuesOptions', this.valuesOptions, 'values', this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : void 0, 'comment', t ? this.comment : void 0, 'comments', t ? this.comments : void 0])
        }
        ye.prototype.add = function (e, t, i, n) {
            if (!Ot.isString(e)) throw TypeError('name must be a string')
            if (!Ot.isInteger(t)) throw TypeError('id must be an integer')
            if (this.values[e] !== void 0) throw Error('duplicate name \'' + e + '\' in ' + this)
            if (this.isReservedId(t)) throw Error('id ' + t + ' is reserved in ' + this)
            if (this.isReservedName(e)) throw Error('name \'' + e + '\' is reserved in ' + this)
            if (this.valuesById[t] !== void 0) {
                if (!(this.options && this.options.allow_alias)) throw Error('duplicate id ' + t + ' in ' + this)
                this.values[e] = t
            } else {
                this.valuesById[this.values[e] = t] = e
            }
            return n && (this.valuesOptions === void 0 && (this.valuesOptions = {}), this.valuesOptions[e] = n || null), this.comments[e] = i || null, this
        }
        ye.prototype.remove = function (e) {
            if (!Ot.isString(e)) throw TypeError('name must be a string')
            var t = this.values[e]
            if (t == null) throw Error('name \'' + e + '\' does not exist in ' + this)
            return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this.valuesOptions && delete this.valuesOptions[e], this
        }
        ye.prototype.isReservedId = function (e) {
            return en.isReservedId(this.reserved, e)
        }
        ye.prototype.isReservedName = function (e) {
            return en.isReservedName(this.reserved, e)
        }
    })
    var or = v(($o, nn) => {
        'use strict'
        nn.exports = Ns
        var Rs = ue(), cr = Ne(), hr = P()

        function rn (r, e, t, i) {
            return e.resolvedType.group ? r('types[%i].encode(%s,w.uint32(%i)).uint32(%i)', t, i, (e.id << 3 | 3) >>> 0, (e.id << 3 | 4) >>> 0) : r('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', t, i, (e.id << 3 | 2) >>> 0)
        }

        function Ns (r) {
            for (var e = hr.codegen(['m', 'w'], r.name + '$encode')('if(!w)')('w=Writer.create()'), t, i, n = r.fieldsArray.slice().sort(hr.compareFieldsById), t = 0; t < n.length; ++t) {
                var s = n[t].resolve(), u = r._fieldsArray.indexOf(s),
                  a = s.resolvedType instanceof Rs ? 'int32' : s.type, o = cr.basic[a]
                i = 'm' + hr.safeProp(s.name), s.map ? (e('if(%s!=null&&Object.hasOwnProperty.call(m,%j)){', i, s.name)('for(var ks=Object.keys(%s),i=0;i<ks.length;++i){', i)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', (s.id << 3 | 2) >>> 0, 8 | cr.mapKey[s.keyType], s.keyType), o === void 0 ? e('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', u, i) : e('.uint32(%i).%s(%s[ks[i]]).ldelim()', 16 | o, a, i), e('}')('}')) : s.repeated ? (e('if(%s!=null&&%s.length){', i, i), s.packed && cr.packed[a] !== void 0 ? e('w.uint32(%i).fork()', (s.id << 3 | 2) >>> 0)('for(var i=0;i<%s.length;++i)', i)('w.%s(%s[i])', a, i)('w.ldelim()') : (e('for(var i=0;i<%s.length;++i)', i), o === void 0 ? rn(e, s, u, i + '[i]') : e('w.uint32(%i).%s(%s[i])', (s.id << 3 | o) >>> 0, a, i)), e('}')) : (s.optional && e('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', i, s.name), o === void 0 ? rn(e, s, u, i) : e('w.uint32(%i).%s(%s)', (s.id << 3 | o) >>> 0, a, i))
            }
            return e('return w')
        }
    })
    var on = v((Po, sn) => {
        'use strict'
        var _ = sn.exports = di()
        _.build = 'light'

        function Ts (r, e, t) {
            return typeof e == 'function' ? (t = e, e = new _.Root) : e || (e = new _.Root), e.load(r, t)
        }

        _.load = Ts

        function Bs (r, e) {
            return e || (e = new _.Root), e.loadSync(r)
        }

        _.loadSync = Bs
        _.encoder = or()
        _.decoder = Gt()
        _.verifier = Qt()
        _.converter = tr()
        _.ReflectionObject = Te()
        _.Namespace = Le()
        _.Root = gt()
        _.Enum = ue()
        _.Type = yt()
        _.Field = Se()
        _.OneOf = Ve()
        _.MapField = ft()
        _.Service = ct()
        _.Method = lt()
        _.Message = ht()
        _.wrappers = rr()
        _.types = Ne()
        _.util = P()
        _.ReflectionObject._configure(_.Root)
        _.Namespace._configure(_.Type, _.Service, _.Enum)
        _.Root._configure(_.Type)
        _.Field._configure(_.Type)
    })
    var pr = v((zo, fn) => {
        'use strict'
        fn.exports = an
        var dr = /[\s{}=;:[\],'"()<>]/g, Fs = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, Is = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
          Vs = /^ *[*/]+ */, Ds = /^\s*\*?\/*/, Cs = /\n/g, Ls = /\s/, Js = /\\(.?)/g, $s = {
              0: '\0',
              r: '\r',
              n: `
`,
              t: '	'
          }

        function un (r) {
            return r.replace(Js, function (e, t) {
                switch (t) {
                    case'\\':
                    case'':
                        return t
                    default:
                        return $s[t] || ''
                }
            })
        }

        an.unescape = un

        function an (r, e) {
            r = r.toString()
            var t = 0, i = r.length, n = 1, s = 0, u = {}, a = [], o = null

            function f (O) {
                return Error('illegal ' + O + ' (line ' + n + ')')
            }

            function d () {
                var O = o === '\'' ? Is : Fs
                O.lastIndex = t - 1
                var T = O.exec(r)
                if (!T) throw f('string')
                return t = O.lastIndex, B(o), o = null, un(T[1])
            }

            function g (O) {
                return r.charAt(O)
            }

            function q (O, T, k) {
                var I = {
                    type: r.charAt(O++),
                    lineEmpty: !1,
                    leading: k
                }, U
                e ? U = 2 : U = 3
                var j = O - U, re
                do {
                    if (--j < 0 || (re = r.charAt(j)) === `
`) {
                        I.lineEmpty = !0
                        break
                    }
                } while (re === ' ' || re === '	')
                for (var le = r.substring(O, T).split(Cs), V = 0; V < le.length; ++V) le[V] = le[V].replace(e ? Ds : Vs, '').trim()
                I.text = le.join(`
`).trim(), u[n] = I, s = n
            }

            function S (O) {
                var T = R(O), k = r.substring(O, T), I = /^\s*\/\//.test(k)
                return I
            }

            function R (O) {
                for (var T = O; T < i && g(T) !== `
`;) {
                    T++
                }
                return T
            }

            function x () {
                if (a.length > 0) return a.shift()
                if (o) return d()
                var O, T, k, I, U, j = t === 0
                do {
                    if (t === i) return null
                    for (O = !1; Ls.test(k = g(t));) {
                        if (k === `
` && (j = !0, ++n), ++t === i) {
                            return null
                        }
                    }
                    if (g(t) === '/') {
                        if (++t === i) throw f('comment')
                        if (g(t) === '/') {
                            if (e) {
                                if (I = t, U = !1, S(t - 1)) {
                                    U = !0
                                    do if (t = R(t), t === i || (t++, !j)) break while (S(t))
                                } else {
                                    t = Math.min(i, R(t) + 1)
                                }
                                U && (q(I, t, j), j = !0), n++, O = !0
                            } else {
                                for (U = g(I = t + 1) === '/'; g(++t) !== `
`;) {
                                    if (t === i) return null
                                }
                                ++t, U && (q(I, t - 1, j), j = !0), ++n, O = !0
                            }
                        } else if ((k = g(t)) === '*') {
                            I = t + 1, U = e || g(I) === '*'
                            do {
                                if (k === `
` && ++n, ++t === i) {
                                    throw f('comment')
                                }
                                T = k, k = g(t)
                            } while (T !== '*' || k !== '/')
                            ++t, U && (q(I, t - 2, j), j = !0), O = !0
                        } else {
                            return '/'
                        }
                    }
                } while (O)
                var re = t
                dr.lastIndex = 0
                var le = dr.test(g(re++))
                if (!le) for (; re < i && !dr.test(g(re));) ++re
                var V = r.substring(t, t = re)
                return (V === '"' || V === '\'') && (o = V), V
            }

            function B (O) {
                a.push(O)
            }

            function J () {
                if (!a.length) {
                    var O = x()
                    if (O === null) return null
                    B(O)
                }
                return a[0]
            }

            function w (O, T) {
                var k = J(), I = k === O
                if (I) return x(), !0
                if (!T) throw f('token \'' + k + '\', \'' + O + '\' expected')
                return !1
            }

            function Fe (O) {
                var T = null, k
                return O === void 0 ? (k = u[n - 1], delete u[n - 1], k && (e || k.type === '*' || k.lineEmpty) && (T = k.leading ? k.text : null)) : (s < O && J(), k = u[O], delete u[O], k && !k.lineEmpty && (e || k.type === '/') && (T = k.leading ? null : k.text)), T
            }

            return Object.defineProperty({
                next: x,
                peek: J,
                push: B,
                skip: w,
                cmnt: Fe
            }, 'line', {
                get: function () {
                    return n
                }
            })
        }
    })
    var yn = v((Wo, pn) => {
        'use strict'
        pn.exports = be
        be.filename = null
        be.defaults = { keepCase: !1 }
        var Ps = pr(), ln = gt(), cn = yt(), hn = Se(), zs = ft(), dn = Ve(), Ws = ue(), Ms = ct(), Us = lt(),
          yr = Ne(), mr = P(), js = /^[1-9][0-9]*$/, Hs = /^-?[1-9][0-9]*$/, Zs = /^0[x][0-9a-fA-F]+$/,
          Gs = /^-?0[x][0-9a-fA-F]+$/, Xs = /^0[0-7]+$/, Ks = /^-?0[0-7]+$/,
          Qs = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, me = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          ve = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, Ys = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/

        function be (r, e, t) {
            e instanceof ln || (t = e, e = new ln), t || (t = be.defaults)
            var i = t.preferTrailingComment || !1, n = Ps(r, t.alternateCommentMode || !1), s = n.next, u = n.push,
              a = n.peek, o = n.skip, f = n.cmnt, d = !0, g, q, S, R, x = !1, B = e, J = t.keepCase ? function (l) {
                  return l
              } : mr.camelCase

            function w (l, c, h) {
                var m = be.filename
                return h || (be.filename = null), Error('illegal ' + (c || 'token') + ' \'' + l + '\' (' + (m ? m + ', ' : '') + 'line ' + n.line + ')')
            }

            function Fe () {
                var l = [], c
                do {
                    if ((c = s()) !== '"' && c !== '\'') throw w(c)
                    l.push(s()), o(c), c = a()
                } while (c === '"' || c === '\'')
                return l.join('')
            }

            function O (l) {
                var c = s()
                switch (c) {
                    case'\'':
                    case'"':
                        return u(c), Fe()
                    case'true':
                    case'TRUE':
                        return !0
                    case'false':
                    case'FALSE':
                        return !1
                }
                try {
                    return k(c, !0)
                } catch {
                    if (l && ve.test(c)) return c
                    throw w(c, 'value')
                }
            }

            function T (l, c) {
                var h, m
                do c && ((h = a()) === '"' || h === '\'') ? l.push(Fe()) : l.push([m = I(s()), o('to', !0) ? I(s()) : m]) while (o(',', !0))
                var p = { options: void 0 }
                p.setOption = function (b, F) {
                    this.options === void 0 && (this.options = {}), this.options[b] = F
                }, V(p, function (F) {
                    if (F === 'option') ie(p, F), o(';') else throw w(F)
                }, function () {
                    Ke(p)
                })
            }

            function k (l, c) {
                var h = 1
                switch (l.charAt(0) === '-' && (h = -1, l = l.substring(1)), l) {
                    case'inf':
                    case'INF':
                    case'Inf':
                        return h * (1 / 0)
                    case'nan':
                    case'NAN':
                    case'Nan':
                    case'NaN':
                        return NaN
                    case'0':
                        return 0
                }
                if (js.test(l)) return h * parseInt(l, 10)
                if (Zs.test(l)) return h * parseInt(l, 16)
                if (Xs.test(l)) return h * parseInt(l, 8)
                if (Qs.test(l)) return h * parseFloat(l)
                throw w(l, 'number', c)
            }

            function I (l, c) {
                switch (l) {
                    case'max':
                    case'MAX':
                    case'Max':
                        return 536870911
                    case'0':
                        return 0
                }
                if (!c && l.charAt(0) === '-') throw w(l, 'id')
                if (Hs.test(l)) return parseInt(l, 10)
                if (Gs.test(l)) return parseInt(l, 16)
                if (Ks.test(l)) return parseInt(l, 8)
                throw w(l, 'id')
            }

            function U () {
                if (g !== void 0) throw w('package')
                if (g = s(), !ve.test(g)) throw w(g, 'name')
                B = B.define(g), o(';')
            }

            function j () {
                var l = a(), c
                switch (l) {
                    case'weak':
                        c = S || (S = []), s()
                        break
                    case'public':
                        s()
                    default:
                        c = q || (q = [])
                        break
                }
                l = Fe(), o(';'), c.push(l)
            }

            function re () {
                if (o('='), R = Fe(), x = R === 'proto3', !x && R !== 'proto2') throw w(R, 'syntax')
                e.setOption('syntax', R), o(';')
            }

            function le (l, c) {
                switch (c) {
                    case'option':
                        return ie(l, c), o(';'), !0
                    case'message':
                        return wr(l, c), !0
                    case'enum':
                        return br(l, c), !0
                    case'service':
                        return In(l, c), !0
                    case'extend':
                        return Dn(l, c), !0
                }
                return !1
            }

            function V (l, c, h) {
                var m = n.line
                if (l && (typeof l.comment != 'string' && (l.comment = f()), l.filename = be.filename), o('{', !0)) {
                    for (var p; (p = s()) !== "}";) c(p)
                    o(';', !0)
                } else {
                    h && h(), o(';'), l && (typeof l.comment != 'string' || i) && (l.comment = f(m) || l.comment)
                }
            }

            function wr (l, c) {
                if (!me.test(c = s())) throw w(c, 'type name')
                var h = new cn(c)
                V(h, function (p) {
                    if (!le(h, p)) {
                        switch (p) {
                            case'map':
                                Nn(h, p)
                                break
                            case'required':
                            case'repeated':
                                X(h, p)
                                break
                            case'optional':
                                x ? X(h, 'proto3_optional') : X(h, 'optional')
                                break
                            case'oneof':
                                Tn(h, p)
                                break
                            case'extensions':
                                T(h.extensions || (h.extensions = []))
                                break
                            case'reserved':
                                T(h.reserved || (h.reserved = []), !0)
                                break
                            default:
                                if (!x || !ve.test(p)) throw w(p)
                                u(p), X(h, 'optional')
                                break
                        }
                    }
                }), l.add(h)
            }

            function X (l, c, h) {
                var m = s()
                if (m === 'group') {
                    Rn(l, c)
                    return
                }
                for (; m.endsWith(".") || a().startsWith(".");) m += s()
                if (!ve.test(m)) throw w(m, 'type')
                var p = s()
                if (!me.test(p)) throw w(p, 'name')
                p = J(p), o('=')
                var b = new hn(p, I(s()), m, c, h)
                if (V(b, function (H) {
                    if (H === 'option') ie(b, H), o(';') else throw w(H)
                }, function () {
                    Ke(b)
                }), c === 'proto3_optional') {
                    var F = new dn('_' + p)
                    b.setOption('proto3_optional', !0), F.add(b), l.add(F)
                } else {
                    l.add(b)
                }
                !x && b.repeated && (yr.packed[m] !== void 0 || yr.basic[m] === void 0) && b.setOption('packed', !1, !0)
            }

            function Rn (l, c) {
                var h = s()
                if (!me.test(h)) throw w(h, 'name')
                var m = mr.lcFirst(h)
                h === m && (h = mr.ucFirst(h)), o('=')
                var p = I(s()), b = new cn(h)
                b.group = !0
                var F = new hn(m, p, h, c)
                F.filename = be.filename, V(b, function (H) {
                    switch (H) {
                        case'option':
                            ie(b, H), o(';')
                            break
                        case'required':
                        case'repeated':
                            X(b, H)
                            break
                        case'optional':
                            x ? X(b, 'proto3_optional') : X(b, 'optional')
                            break
                        case'message':
                            wr(b, H)
                            break
                        case'enum':
                            br(b, H)
                            break
                        default:
                            throw w(H)
                    }
                }), l.add(b).add(F)
            }

            function Nn (l) {
                o('<')
                var c = s()
                if (yr.mapKey[c] === void 0) throw w(c, 'type')
                o(',')
                var h = s()
                if (!ve.test(h)) throw w(h, 'type')
                o('>')
                var m = s()
                if (!me.test(m)) throw w(m, 'name')
                o('=')
                var p = new zs(J(m), I(s()), c, h)
                V(p, function (F) {
                    if (F === 'option') ie(p, F), o(';') else throw w(F)
                }, function () {
                    Ke(p)
                }), l.add(p)
            }

            function Tn (l, c) {
                if (!me.test(c = s())) throw w(c, 'name')
                var h = new dn(J(c))
                V(h, function (p) {
                    p === 'option' ? (ie(h, p), o(';')) : (u(p), X(h, 'optional'))
                }), l.add(h)
            }

            function br (l, c) {
                if (!me.test(c = s())) throw w(c, 'name')
                var h = new Ws(c)
                V(h, function (p) {
                    switch (p) {
                        case'option':
                            ie(h, p), o(';')
                            break
                        case'reserved':
                            T(h.reserved || (h.reserved = []), !0)
                            break
                        default:
                            Bn(h, p)
                    }
                }), l.add(h)
            }

            function Bn (l, c) {
                if (!me.test(c)) throw w(c, 'name')
                o('=')
                var h = I(s(), !0), m = { options: void 0 }
                m.setOption = function (p, b) {
                    this.options === void 0 && (this.options = {}), this.options[p] = b
                }, V(m, function (b) {
                    if (b === 'option') ie(m, b), o(';') else throw w(b)
                }, function () {
                    Ke(m)
                }), l.add(c, h, m.comment, m.options)
            }

            function ie (l, c) {
                var h = o('(', !0)
                if (!ve.test(c = s())) throw w(c, 'name')
                var m = c, p = m, b
                h && (o(')'), m = '(' + m + ')', p = m, c = a(), Ys.test(c) && (b = c.slice(1), m += c, s())), o('=')
                var F = Or(l, m)
                Fn(l, p, F, b)
            }

            function Or (l, c) {
                if (o('{', !0)) {
                    for (var h = {}; !o("}", !0);) {
                        if (!me.test(z = s())) throw w(z, 'name')
                        if (z === null) throw w(z, 'end of input')
                        var m, p = z
                        if (o(':', !0), a() === '{') {
                            m = Or(l, c + '.' + z)
                        } else if (a() === '[') {
                            m = []
                            var b
                            if (o('[', !0)) {
                                do b = O(!0), m.push(b) while (o(',', !0))
                                o(']'), typeof b < 'u' && At(l, c + '.' + z, b)
                            }
                        } else {
                            m = O(!0), At(l, c + '.' + z, m)
                        }
                        var F = h[p]
                        F && (m = [].concat(F).concat(m)), h[p] = m, o(',', !0), o(';', !0)
                    }
                    return h
                }
                var Oe = O(!0)
                return At(l, c, Oe), Oe
            }

            function At (l, c, h) {
                l.setOption && l.setOption(c, h)
            }

            function Fn (l, c, h, m) {
                l.setParsedOption && l.setParsedOption(c, h, m)
            }

            function Ke (l) {
                if (o('[', !0)) {
                    do ie(l, 'option') while (o(',', !0))
                    o(']')
                }
                return l
            }

            function In (l, c) {
                if (!me.test(c = s())) throw w(c, 'service name')
                var h = new Ms(c)
                V(h, function (p) {
                    if (!le(h, p)) if (p === 'rpc') Vn(h, p) else throw w(p)
                }), l.add(h)
            }

            function Vn (l, c) {
                var h = f(), m = c
                if (!me.test(c = s())) throw w(c, 'name')
                var p = c, b, F, Oe, H
                if (o('('), o('stream', !0) && (F = !0), !ve.test(c = s()) || (b = c, o(')'), o('returns'), o('('), o('stream', !0) && (H = !0), !ve.test(c = s()))) throw w(c)
                Oe = c, o(')')
                var Qe = new Us(p, m, b, Oe, F, H)
                Qe.comment = h, V(Qe, function (St) {
                    if (St === 'option') ie(Qe, St), o(';') else throw w(St)
                }), l.add(Qe)
            }

            function Dn (l, c) {
                if (!ve.test(c = s())) throw w(c, 'reference')
                var h = c
                V(null, function (p) {
                    switch (p) {
                        case'required':
                        case'repeated':
                            X(l, p, h)
                            break
                        case'optional':
                            x ? X(l, 'proto3_optional', h) : X(l, 'optional', h)
                            break
                        default:
                            if (!x || !ve.test(p)) throw w(p)
                            u(p), X(l, 'optional', h)
                            break
                    }
                })
            }

            for (var z; (z = s()) !== null;) {
                switch (z) {
                    case'package':
                        if (!d) throw w(z)
                        U()
                        break
                    case'import':
                        if (!d) throw w(z)
                        j()
                        break
                    case'syntax':
                        if (!d) throw w(z)
                        re()
                        break
                    case'option':
                        ie(B, z), o(';')
                        break
                    default:
                        if (le(B, z)) {
                            d = !1
                            continue
                        }
                        throw w(z)
                }
            }
            return be.filename = null, {
                package: g,
                imports: q,
                weakImports: S,
                syntax: R,
                root: e
            }
        }
    })
    var gn = v((Mo, vn) => {
        'use strict'
        vn.exports = fe
        var eo = /\/|\./

        function fe (r, e) {
            eo.test(r) || (r = 'google/protobuf/' + r + '.proto', e = { nested: { google: { nested: { protobuf: { nested: e } } } } }), fe[r] = e
        }

        fe('any', {
            Any: {
                fields: {
                    type_url: {
                        type: 'string',
                        id: 1
                    },
                    value: {
                        type: 'bytes',
                        id: 2
                    }
                }
            }
        })
        var mn
        fe('duration', {
            Duration: mn = {
                fields: {
                    seconds: {
                        type: 'int64',
                        id: 1
                    },
                    nanos: {
                        type: 'int32',
                        id: 2
                    }
                }
            }
        })
        fe('timestamp', { Timestamp: mn })
        fe('empty', { Empty: { fields: {} } })
        fe('struct', {
            Struct: {
                fields: {
                    fields: {
                        keyType: 'string',
                        type: 'Value',
                        id: 1
                    }
                }
            },
            Value: {
                oneofs: { kind: { oneof: ['nullValue', 'numberValue', 'stringValue', 'boolValue', 'structValue', 'listValue'] } },
                fields: {
                    nullValue: {
                        type: 'NullValue',
                        id: 1
                    },
                    numberValue: {
                        type: 'double',
                        id: 2
                    },
                    stringValue: {
                        type: 'string',
                        id: 3
                    },
                    boolValue: {
                        type: 'bool',
                        id: 4
                    },
                    structValue: {
                        type: 'Struct',
                        id: 5
                    },
                    listValue: {
                        type: 'ListValue',
                        id: 6
                    }
                }
            },
            NullValue: { values: { NULL_VALUE: 0 } },
            ListValue: {
                fields: {
                    values: {
                        rule: 'repeated',
                        type: 'Value',
                        id: 1
                    }
                }
            }
        })
        fe('wrappers', {
            DoubleValue: {
                fields: {
                    value: {
                        type: 'double',
                        id: 1
                    }
                }
            },
            FloatValue: {
                fields: {
                    value: {
                        type: 'float',
                        id: 1
                    }
                }
            },
            Int64Value: {
                fields: {
                    value: {
                        type: 'int64',
                        id: 1
                    }
                }
            },
            UInt64Value: {
                fields: {
                    value: {
                        type: 'uint64',
                        id: 1
                    }
                }
            },
            Int32Value: {
                fields: {
                    value: {
                        type: 'int32',
                        id: 1
                    }
                }
            },
            UInt32Value: {
                fields: {
                    value: {
                        type: 'uint32',
                        id: 1
                    }
                }
            },
            BoolValue: {
                fields: {
                    value: {
                        type: 'bool',
                        id: 1
                    }
                }
            },
            StringValue: {
                fields: {
                    value: {
                        type: 'string',
                        id: 1
                    }
                }
            },
            BytesValue: {
                fields: {
                    value: {
                        type: 'bytes',
                        id: 1
                    }
                }
            }
        })
        fe('field_mask', {
            FieldMask: {
                fields: {
                    paths: {
                        rule: 'repeated',
                        type: 'string',
                        id: 1
                    }
                }
            }
        })
        fe.get = function (e) {
            return fe[e] || null
        }
    })
    var bn = v((Uo, wn) => {
        'use strict'
        var qe = wn.exports = on()
        qe.build = 'full'
        qe.tokenize = pr()
        qe.parse = yn()
        qe.common = gn()
        qe.Root._configure(qe.Type, qe.parse, qe.common)
    })
    var _n = v((jo, On) => {
        'use strict'
        On.exports = bn()
    })
    var vr = Wn(_n(), 1), An = {
        options: { java_package: 'com.smile.spotify.model' },
        nested: {
            BootstrapResponse: {
                oneofs: { ucsResponse: { oneof: ['ucsResponseV0', 'trialsFacadeResponseV1'] } },
                fields: {
                    ucsResponseV0: {
                        type: 'UcsResponseWrapperV0',
                        id: 2
                    },
                    trialsFacadeResponseV1: {
                        type: 'TrialsFacadeResponseWrapperV1',
                        id: 3
                    }
                }
            },
            UcsResponseWrapperV0: {
                oneofs: { result: { oneof: ['success', 'error'] } },
                fields: {
                    success: {
                        type: 'UcsResponseWrapperSuccess',
                        id: 1
                    },
                    error: {
                        type: 'UcsResponseWrapperError',
                        id: 2
                    }
                }
            },
            UcsResponseWrapperSuccess: {
                fields: {
                    customization: {
                        type: 'UcsResponseWrapper',
                        id: 1
                    }
                }
            },
            UcsResponseWrapperError: {
                fields: {
                    errorCode: {
                        type: 'int32',
                        id: 1
                    },
                    message: {
                        type: 'string',
                        id: 2
                    },
                    logId: {
                        type: 'string',
                        id: 3
                    }
                }
            },
            TrialsFacadeResponseWrapperV1: {
                oneofs: { result: { oneof: ['success', 'error'] } },
                fields: {
                    success: {
                        type: 'TrialsFacadeResponseWrapperSuccess',
                        id: 1
                    },
                    error: {
                        type: 'TrialsFacadeResponseWrapperError',
                        id: 2
                    }
                }
            },
            TrialsFacadeResponseWrapperError: {
                fields: {
                    errorCode: {
                        type: 'int32',
                        id: 1
                    },
                    message: {
                        type: 'string',
                        id: 2
                    },
                    logId: {
                        type: 'string',
                        id: 3
                    }
                }
            },
            TrialsFacadeResponseWrapperSuccess: {
                fields: {
                    field1: {
                        type: 'int32',
                        id: 1
                    }
                }
            },
            UcsResponseWrapper: {
                oneofs: { result: { oneof: ['success', 'error'] } },
                fields: {
                    success: {
                        type: 'UcsResponse',
                        id: 1
                    },
                    error: {
                        type: 'Error',
                        id: 2
                    }
                }
            },
            UcsResponse: {
                oneofs: {
                    resolveResult: { oneof: ['resolveSuccess', 'resolveError'] },
                    accountAttributesResult: { oneof: ['accountAttributesSuccess', 'accountAttributesError'] }
                },
                fields: {
                    resolveSuccess: {
                        type: 'ResolveResponse',
                        id: 1
                    },
                    resolveError: {
                        type: 'Error',
                        id: 2
                    },
                    accountAttributesSuccess: {
                        type: 'AccountAttributesResponse',
                        id: 3
                    },
                    accountAttributesError: {
                        type: 'Error',
                        id: 4
                    },
                    fetchTimeMillis: {
                        type: 'int64',
                        id: 5
                    }
                }
            },
            ResolveResponse: {
                fields: {
                    configuration: {
                        type: 'Configuration',
                        id: 1
                    }
                }
            },
            Configuration: {
                fields: {
                    configurationAssignmentId: {
                        type: 'string',
                        id: 1
                    },
                    fetchTimeMillis: {
                        type: 'int64',
                        id: 2
                    },
                    assignedValues: {
                        rule: 'repeated',
                        type: 'AssignedValue',
                        id: 3
                    },
                    policySnapshotId: {
                        type: 'int64',
                        id: 4
                    }
                }
            },
            AssignedValue: {
                oneofs: { structuredValue: { oneof: ['boolValue', 'intValue', 'enumValue'] } },
                fields: {
                    propertyId: {
                        type: 'Identifier',
                        id: 1
                    },
                    metadata: {
                        type: 'Metadata',
                        id: 2
                    },
                    boolValue: {
                        type: 'BoolValue',
                        id: 3
                    },
                    intValue: {
                        type: 'IntValue',
                        id: 4
                    },
                    enumValue: {
                        type: 'EnumValue',
                        id: 5
                    }
                }
            },
            Identifier: {
                fields: {
                    scope: {
                        type: 'string',
                        id: 1
                    },
                    name: {
                        type: 'string',
                        id: 2
                    }
                }
            },
            Metadata: {
                fields: {
                    policyId: {
                        type: 'int64',
                        id: 1
                    },
                    externalRealm: {
                        type: 'string',
                        id: 2
                    },
                    externalRealmId: {
                        type: 'int64',
                        id: 3
                    }
                }
            },
            BoolValue: {
                fields: {
                    value: {
                        type: 'bool',
                        id: 1
                    }
                }
            },
            EnumValue: {
                fields: {
                    value: {
                        type: 'string',
                        id: 1
                    }
                }
            },
            IntValue: {
                fields: {
                    value: {
                        type: 'int32',
                        id: 1
                    }
                }
            },
            AccountAttributesResponse: {
                fields: {
                    accountAttributes: {
                        keyType: "string",
                        type: "AccountAttribute",
                        id: 1
                    }
                }
            },
            AccountAttribute: {
                oneofs: { value: { oneof: ["boolValue", "longValue", "stringValue"] } },
                fields: {
                    boolValue: {
                        type: "bool",
                        id: 2
                    },
                    longValue: {
                        type: "int64",
                        id: 3
                    },
                    stringValue: {
                        type: "string",
                        id: 4
                    }
                }
            },
            Error: {
                fields: {
                    errorCode: {
                        type: "int32",
                        id: 1
                    },
                    errorMessage: {
                        type: "string",
                        id: 2
                    }
                }
            }
        }
    }, Sn = $request.url, En = $request.method, xn = "POST", qn = new Uint8Array($response.bodyBytes), _t, gr;
    if (Sn.includes("bootstrap/v1/bootstrap") && En === xn) {
        let r = vr.default.Root.fromJSON(An).lookupType("BootstrapResponse"), e = r.decode(qn);
        _t = e.ucsResponseV0.success.customization.success.accountAttributesSuccess.accountAttributes, kn(_t), gr = r.encode(e).finish()
    } else if (Sn.includes("user-customization-service/v1/customize") && En === xn) {
        let r = vr.default.Root.fromJSON(An).lookupType("UcsResponseWrapper"), e = r.decode(qn);
        _t = e.success.accountAttributesSuccess.accountAttributes, kn(_t), gr = r.encode(e).finish()
    }
    $done({ body: gr });

    function kn (r) {
        r["player-license"] = { stringValue: "premium" }, r.mobile = { boolValue: !0 }, r["streaming-rules"] = { stringValue: "" }, r["financial-product"] = { stringValue: "pr:premium,tc:0" }, r["license-acceptance-grace-days"] = { longValue: 30 }, r["mobile-login"] = { boolValue: !0 }, r.name = { stringValue: "Spotify Premium" }, r["on-demand"] = { boolValue: !0 }, r.ads = { boolValue: !1 }, r.catalogue = { stringValue: "premium" }, r["high-bitrate"] = { boolValue: !0 }, r.libspotify = { boolValue: !0 }, r["nft-disabled"] = { stringValue: "1" }, r.shuffle = { boolValue: !1 }, r["audio-quality"] = { stringValue: "1" }, r.offline = { boolValue: !0 }, r["pause-after"] = { longValue: 0 }, r.can_use_superbird = { boolValue: !0 }, r.type = { stringValue: "premium" }, r["loudness-levels"] = { stringValue: "1:-9.0,0.0,3.0:-2.0" }, r["payments-initial-campaign"] = { stringValue: "web" }, r["shuffle-eligible"] = { boolValue: !0 }, r.unrestricted = { boolValue: !0 }, r["com.spotify.madprops.use.ucs.product.state"] = { boolValue: !0 }, delete r["ad-use-adlogic"], delete r["ad-catalogues"]
    }
})();
