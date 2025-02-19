// Build: 2/19/2025, 2:52:57 PM
(() => {
    var Mt = Object.defineProperty;
    var Ot = (t, e, n) => e in t ? Mt(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n;
    var D = (t, e, n) => (Ot(t, typeof e != "symbol" ? e + "" : e, n), n);

    function h(t, e) {
        if (!t) throw new Error(e)
    }

    var Ut = 34028234663852886e22, Pt = -34028234663852886e22, Ct = 4294967295, At = 2147483647, vt = -2147483648;

    function P(t) {
        if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
        if (!Number.isInteger(t) || t > At || t < vt) throw new Error("invalid int 32: " + t)
    }

    function $(t) {
        if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
        if (!Number.isInteger(t) || t > Ct || t < 0) throw new Error("invalid uint 32: " + t)
    }

    function q(t) {
        if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
        if (Number.isFinite(t) && (t > Ut || t < Pt)) throw new Error("invalid float 32: " + t)
    }

    var Ae = Symbol("@bufbuild/protobuf/enum-type");

    function ve(t) {
        let e = t[Ae];
        return h(e, "missing enum type on enum object"), e
    }

    function ge(t, e, n, r) {
        t[Ae] = ye(e, n.map(s => ({no: s.no, name: s.name, localName: t[s.no]})), r)
    }

    function ye(t, e, n) {
        let r = Object.create(null), s = Object.create(null), o = [];
        for (let i of e) {
            let a = De(i);
            o.push(a), r[i.name] = a, s[i.no] = a
        }
        return {
            typeName: t, values: o, findName(i) {
                return r[i]
            }, findNumber(i) {
                return s[i]
            }
        }
    }

    function Le(t, e, n) {
        let r = {};
        for (let s of e) {
            let o = De(s);
            r[o.localName] = o.no, r[o.no] = o.localName
        }
        return ge(r, t, e, n), r
    }

    function De(t) {
        return "localName" in t ? t : Object.assign(Object.assign({}, t), {localName: t.name})
    }

    var k = class {
        equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e)
        }

        clone() {
            return this.getType().runtime.util.clone(this)
        }

        fromBinary(e, n) {
            let r = this.getType(), s = r.runtime.bin, o = s.makeReadOptions(n);
            return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this
        }

        fromJson(e, n) {
            let r = this.getType(), s = r.runtime.json, o = s.makeReadOptions(n);
            return s.readMessage(r, e, o, this), this
        }

        fromJsonString(e, n) {
            let r;
            try {
                r = JSON.parse(e)
            } catch (s) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`)
            }
            return this.fromJson(r, n)
        }

        toBinary(e) {
            let n = this.getType(), r = n.runtime.bin, s = r.makeWriteOptions(e), o = s.writerFactory();
            return r.writeMessage(this, o, s), o.finish()
        }

        toJson(e) {
            let n = this.getType(), r = n.runtime.json, s = r.makeWriteOptions(e);
            return r.writeMessage(this, s)
        }

        toJsonString(e) {
            var n;
            let r = this.toJson(e);
            return JSON.stringify(r, null, (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0)
        }

        toJSON() {
            return this.toJson({emitDefaultValues: !0})
        }

        getType() {
            return Object.getPrototypeOf(this).constructor
        }
    };

    function $e(t, e, n, r) {
        var s;
        let o = (s = r?.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1), i = {
            [o]: function (a) {
                t.util.initFields(this), t.util.initPartial(a, this)
            }
        }[o];
        return Object.setPrototypeOf(i.prototype, new k), Object.assign(i, {
            runtime: t,
            typeName: e,
            fields: t.util.newFieldList(n),
            fromBinary(a, c) {
                return new i().fromBinary(a, c)
            },
            fromJson(a, c) {
                return new i().fromJson(a, c)
            },
            fromJsonString(a, c) {
                return new i().fromJsonString(a, c)
            },
            equals(a, c) {
                return t.util.equals(i, a, c)
            }
        }), i
    }

    var u;
    (function (t) {
        t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64"
    })(u || (u = {}));
    var x;
    (function (t) {
        t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING"
    })(x || (x = {}));

    function Je() {
        let t = 0, e = 0;
        for (let r = 0; r < 28; r += 7) {
            let s = this.buf[this.pos++];
            if (t |= (s & 127) << r, !(s & 128)) return this.assertBounds(), [t, e]
        }
        let n = this.buf[this.pos++];
        if (t |= (n & 15) << 28, e = (n & 112) >> 4, !(n & 128)) return this.assertBounds(), [t, e];
        for (let r = 3; r <= 31; r += 7) {
            let s = this.buf[this.pos++];
            if (e |= (s & 127) << r, !(s & 128)) return this.assertBounds(), [t, e]
        }
        throw new Error("invalid varint")
    }

    function W(t, e, n) {
        for (let o = 0; o < 28; o = o + 7) {
            let i = t >>> o, a = !(!(i >>> 7) && e == 0), c = (a ? i | 128 : i) & 255;
            if (n.push(c), !a) return
        }
        let r = t >>> 28 & 15 | (e & 7) << 4, s = !!(e >> 3);
        if (n.push((s ? r | 128 : r) & 255), !!s) {
            for (let o = 3; o < 31; o = o + 7) {
                let i = e >>> o, a = !!(i >>> 7), c = (a ? i | 128 : i) & 255;
                if (n.push(c), !a) return
            }
            n.push(e >>> 31 & 1)
        }
    }

    var X = 4294967296;

    function he(t) {
        let e = t[0] === "-";
        e && (t = t.slice(1));
        let n = 1e6, r = 0, s = 0;

        function o(i, a) {
            let c = Number(t.slice(i, a));
            s *= n, r = r * n + c, r >= X && (s = s + (r / X | 0), r = r % X)
        }

        return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? Ge(r, s) : ke(r, s)
    }

    function _e(t, e) {
        let n = ke(t, e), r = n.hi & 2147483648;
        r && (n = Ge(n.lo, n.hi));
        let s = be(n.lo, n.hi);
        return r ? "-" + s : s
    }

    function be(t, e) {
        if ({lo: t, hi: e} = Lt(t, e), e <= 2097151) return String(X * e + t);
        let n = t & 16777215, r = (t >>> 24 | e << 8) & 16777215, s = e >> 16 & 65535,
            o = n + r * 6777216 + s * 6710656, i = r + s * 8147497, a = s * 2, c = 1e7;
        return o >= c && (i += Math.floor(o / c), o %= c), i >= c && (a += Math.floor(i / c), i %= c), a.toString() + Ve(i) + Ve(o)
    }

    function Lt(t, e) {
        return {lo: t >>> 0, hi: e >>> 0}
    }

    function ke(t, e) {
        return {lo: t | 0, hi: e | 0}
    }

    function Ge(t, e) {
        return e = ~e, t ? t = ~t + 1 : e += 1, ke(t, e)
    }

    var Ve = t => {
        let e = String(t);
        return "0000000".slice(e.length) + e
    };

    function Te(t, e) {
        if (t >= 0) {
            for (; t > 127;) e.push(t & 127 | 128), t = t >>> 7;
            e.push(t)
        } else {
            for (let n = 0; n < 9; n++) e.push(t & 127 | 128), t = t >> 7;
            e.push(1)
        }
    }

    function Ye() {
        let t = this.buf[this.pos++], e = t & 127;
        if (!(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 7, !(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 14, !(t & 128)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (t & 127) << 21, !(t & 128)) return this.assertBounds(), e;
        t = this.buf[this.pos++], e |= (t & 15) << 28;
        for (let n = 5; t & 128 && n < 10; n++) t = this.buf[this.pos++];
        if (t & 128) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0
    }

    function Dt() {
        let t = new DataView(new ArrayBuffer(8));
        if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
            let s = BigInt("-9223372036854775808"), o = BigInt("9223372036854775807"), i = BigInt("0"),
                a = BigInt("18446744073709551615");
            return {
                zero: BigInt(0), supported: !0, parse(c) {
                    let d = typeof c == "bigint" ? c : BigInt(c);
                    if (d > o || d < s) throw new Error(`int64 invalid: ${c}`);
                    return d
                }, uParse(c) {
                    let d = typeof c == "bigint" ? c : BigInt(c);
                    if (d > a || d < i) throw new Error(`uint64 invalid: ${c}`);
                    return d
                }, enc(c) {
                    return t.setBigInt64(0, this.parse(c), !0), {lo: t.getInt32(0, !0), hi: t.getInt32(4, !0)}
                }, uEnc(c) {
                    return t.setBigInt64(0, this.uParse(c), !0), {lo: t.getInt32(0, !0), hi: t.getInt32(4, !0)}
                }, dec(c, d) {
                    return t.setInt32(0, c, !0), t.setInt32(4, d, !0), t.getBigInt64(0, !0)
                }, uDec(c, d) {
                    return t.setInt32(0, c, !0), t.setInt32(4, d, !0), t.getBigUint64(0, !0)
                }
            }
        }
        let n = s => h(/^-?[0-9]+$/.test(s), `int64 invalid: ${s}`),
            r = s => h(/^[0-9]+$/.test(s), `uint64 invalid: ${s}`);
        return {
            zero: "0", supported: !1, parse(s) {
                return typeof s != "string" && (s = s.toString()), n(s), s
            }, uParse(s) {
                return typeof s != "string" && (s = s.toString()), r(s), s
            }, enc(s) {
                return typeof s != "string" && (s = s.toString()), n(s), he(s)
            }, uEnc(s) {
                return typeof s != "string" && (s = s.toString()), r(s), he(s)
            }, dec(s, o) {
                return _e(s, o)
            }, uDec(s, o) {
                return be(s, o)
            }
        }
    }

    var b = Dt();
    var g;
    (function (t) {
        t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32"
    })(g || (g = {}));
    var j = class {
        constructor(e) {
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
            let n = new Uint8Array(e), r = 0;
            for (let s = 0; s < this.chunks.length; s++) n.set(this.chunks[s], r), r += this.chunks[s].length;
            return this.chunks = [], n
        }

        fork() {
            return this.stack.push({chunks: this.chunks, buf: this.buf}), this.chunks = [], this.buf = [], this
        }

        join() {
            let e = this.finish(), n = this.stack.pop();
            if (!n) throw new Error("invalid state, fork stack empty");
            return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e)
        }

        tag(e, n) {
            return this.uint32((e << 3 | n) >>> 0)
        }

        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }

        uint32(e) {
            for ($(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
            return this.buf.push(e), this
        }

        int32(e) {
            return P(e), Te(e, this.buf), this
        }

        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }

        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }

        string(e) {
            let n = this.textEncoder.encode(e);
            return this.uint32(n.byteLength), this.raw(n)
        }

        float(e) {
            q(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n)
        }

        double(e) {
            let n = new Uint8Array(8);
            return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n)
        }

        fixed32(e) {
            $(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n)
        }

        sfixed32(e) {
            P(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n)
        }

        sint32(e) {
            return P(e), e = (e << 1 ^ e >> 31) >>> 0, Te(e, this.buf), this
        }

        sfixed64(e) {
            let n = new Uint8Array(8), r = new DataView(n.buffer), s = b.enc(e);
            return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
        }

        fixed64(e) {
            let n = new Uint8Array(8), r = new DataView(n.buffer), s = b.uEnc(e);
            return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(n)
        }

        int64(e) {
            let n = b.enc(e);
            return W(n.lo, n.hi, this.buf), this
        }

        sint64(e) {
            let n = b.enc(e), r = n.hi >> 31, s = n.lo << 1 ^ r, o = (n.hi << 1 | n.lo >>> 31) ^ r;
            return W(s, o, this.buf), this
        }

        uint64(e) {
            let n = b.uEnc(e);
            return W(n.lo, n.hi, this.buf), this
        }
    }, K = class {
        constructor(e, n) {
            this.varint64 = Je, this.uint32 = Ye, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder
        }

        tag() {
            let e = this.uint32(), n = e >>> 3, r = e & 7;
            if (n <= 0 || r < 0 || r > 5) throw new Error("illegal tag: field no " + n + " wire type " + r);
            return [n, r]
        }

        skip(e) {
            let n = this.pos;
            switch (e) {
                case g.Varint:
                    for (; this.buf[this.pos++] & 128;) ;
                    break;
                case g.Bit64:
                    this.pos += 4;
                case g.Bit32:
                    this.pos += 4;
                    break;
                case g.LengthDelimited:
                    let r = this.uint32();
                    this.pos += r;
                    break;
                case g.StartGroup:
                    let s;
                    for (; (s = this.tag()[1]) !== g.EndGroup;) this.skip(s);
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(n, this.pos)
        }

        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }

        int32() {
            return this.uint32() | 0
        }

        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1)
        }

        int64() {
            return b.dec(...this.varint64())
        }

        uint64() {
            return b.uDec(...this.varint64())
        }

        sint64() {
            let [e, n] = this.varint64(), r = -(e & 1);
            return e = (e >>> 1 | (n & 1) << 31) ^ r, n = n >>> 1 ^ r, b.dec(e, n)
        }

        bool() {
            let [e, n] = this.varint64();
            return e !== 0 || n !== 0
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }

        fixed64() {
            return b.uDec(this.sfixed32(), this.sfixed32())
        }

        sfixed64() {
            return b.dec(this.sfixed32(), this.sfixed32())
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }

        bytes() {
            let e = this.uint32(), n = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e)
        }

        string() {
            return this.textDecoder.decode(this.bytes())
        }
    };

    function S(t, e, n) {
        if (e === n) return !0;
        if (t == u.BYTES) {
            if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length) return !1;
            for (let r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
            return !0
        }
        switch (t) {
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return e == n
        }
        return !1
    }

    function U(t, e) {
        switch (t) {
            case u.BOOL:
                return !1;
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return e == 0 ? b.zero : "0";
            case u.DOUBLE:
            case u.FLOAT:
                return 0;
            case u.BYTES:
                return new Uint8Array(0);
            case u.STRING:
                return "";
            default:
                return 0
        }
    }

    function we(t, e) {
        let n = e === void 0, r = g.Varint, s = e === 0;
        switch (t) {
            case u.STRING:
                s = n || !e.length, r = g.LengthDelimited;
                break;
            case u.BOOL:
                s = e === !1;
                break;
            case u.DOUBLE:
                r = g.Bit64;
                break;
            case u.FLOAT:
                r = g.Bit32;
                break;
            case u.INT64:
                s = n || e == 0;
                break;
            case u.UINT64:
                s = n || e == 0;
                break;
            case u.FIXED64:
                s = n || e == 0, r = g.Bit64;
                break;
            case u.BYTES:
                s = n || !e.byteLength, r = g.LengthDelimited;
                break;
            case u.FIXED32:
                r = g.Bit32;
                break;
            case u.SFIXED32:
                r = g.Bit32;
                break;
            case u.SFIXED64:
                s = n || e == 0, r = g.Bit64;
                break;
            case u.SINT64:
                s = n || e == 0;
                break
        }
        let o = u[t].toLowerCase();
        return [r, o, n || s]
    }

    function qe(t, e, n, r) {
        let s;
        return {
            typeName: e, extendee: n, get field() {
                if (!s) {
                    let o = typeof r == "function" ? r() : r;
                    o.name = e.split(".").pop(), o.jsonName = `[${e}]`, s = t.util.newFieldList([o]).list()[0]
                }
                return s
            }, runtime: t
        }
    }

    function z(t) {
        let e = t.field.localName, n = Object.create(null);
        return n[e] = $t(t), [n, () => n[e]]
    }

    function $t(t) {
        let e = t.field;
        if (e.repeated) return [];
        if (e.default !== void 0) return e.default;
        switch (e.kind) {
            case"enum":
                return e.T.values[0].no;
            case"scalar":
                return U(e.T, e.L);
            case"message":
                let n = e.T, r = new n;
                return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
            case"map":
                throw "map fields are not allowed to be extensions"
        }
    }

    function Xe(t, e) {
        if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
            for (let n = t.length - 1; n >= 0; --n) if (t[n].no == e.no) return [t[n]];
            return []
        }
        return t.filter(n => n.no === e.no)
    }

    function We(t, e, n, r) {
        return {
            syntax: t, json: e, bin: n, util: r, makeMessageType(s, o, i) {
                return $e(this, s, o, i)
            }, makeEnum: Le, makeEnumType: ye, getEnumType: ve, makeExtension(s, o, i) {
                return qe(this, s, o, i)
            }
        }
    }

    function Q(t, e) {
        return e instanceof k || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e)
    }

    var Er = {
        "google.protobuf.DoubleValue": u.DOUBLE,
        "google.protobuf.FloatValue": u.FLOAT,
        "google.protobuf.Int64Value": u.INT64,
        "google.protobuf.UInt64Value": u.UINT64,
        "google.protobuf.Int32Value": u.INT32,
        "google.protobuf.UInt32Value": u.UINT32,
        "google.protobuf.BoolValue": u.BOOL,
        "google.protobuf.StringValue": u.STRING,
        "google.protobuf.BytesValue": u.BYTES
    };
    var C = Symbol("@bufbuild/protobuf/unknown-fields"), je = {readUnknownFields: !0, readerFactory: t => new K(t)},
        Ke = {writeUnknownFields: !0, writerFactory: () => new j};

    function Vt(t) {
        return t ? Object.assign(Object.assign({}, je), t) : je
    }

    function Jt(t) {
        return t ? Object.assign(Object.assign({}, Ke), t) : Ke
    }

    function Qe() {
        return {
            makeReadOptions: Vt, makeWriteOptions: Jt, listUnknownFields(t) {
                var e;
                return (e = t[C]) !== null && e !== void 0 ? e : []
            }, discardUnknownFields(t) {
                delete t[C]
            }, writeUnknownFields(t, e) {
                let r = t[C];
                if (r) for (let s of r) e.tag(s.no, s.wireType).raw(s.data)
            }, onUnknownField(t, e, n, r) {
                let s = t;
                Array.isArray(s[C]) || (s[C] = []), s[C].push({no: e, wireType: n, data: r})
            }, readMessage(t, e, n, r, s) {
                let o = t.getType(), i = s ? e.len : e.pos + n, a, c;
                for (; e.pos < i && ([a, c] = e.tag(), c != g.EndGroup);) {
                    let d = o.fields.find(a);
                    if (!d) {
                        let f = e.skip(c);
                        r.readUnknownFields && this.onUnknownField(t, a, c, f);
                        continue
                    }
                    ze(t, e, d, c, r)
                }
                if (s && (c != g.EndGroup || a !== n)) throw new Error("invalid end group tag")
            }, readField: ze
        }
    }

    function ze(t, e, n, r, s) {
        let {repeated: o, localName: i} = n;
        switch (n.oneof && (t = t[n.oneof.localName], t.case != i && delete t.value, t.case = i, i = "value"), n.kind) {
            case"scalar":
            case"enum":
                let a = n.kind == "enum" ? u.INT32 : n.T, c = Z;
                if (n.kind == "scalar" && n.L > 0 && (c = Gt), o) {
                    let p = t[i];
                    if (r == g.LengthDelimited && a != u.STRING && a != u.BYTES) {
                        let N = e.uint32() + e.pos;
                        for (; e.pos < N;) p.push(c(e, a))
                    } else p.push(c(e, a))
                } else t[i] = c(e, a);
                break;
            case"message":
                let d = n.T;
                o ? t[i].push(H(e, new d, s, n)) : t[i] instanceof k ? H(e, t[i], s, n) : (t[i] = H(e, new d, s, n), d.fieldWrapper && !n.oneof && !n.repeated && (t[i] = d.fieldWrapper.unwrapField(t[i])));
                break;
            case"map":
                let [f, l] = _t(n, e, s);
                t[i][f] = l;
                break
        }
    }

    function H(t, e, n, r) {
        let s = e.getType().runtime.bin, o = r?.delimited;
        return s.readMessage(e, t, o ? r?.no : t.uint32(), n, o), e
    }

    function _t(t, e, n) {
        let r = e.uint32(), s = e.pos + r, o, i;
        for (; e.pos < s;) {
            let [a] = e.tag();
            switch (a) {
                case 1:
                    o = Z(e, t.K);
                    break;
                case 2:
                    switch (t.V.kind) {
                        case"scalar":
                            i = Z(e, t.V.T);
                            break;
                        case"enum":
                            i = e.int32();
                            break;
                        case"message":
                            i = H(e, new t.V.T, n, void 0);
                            break
                    }
                    break
            }
        }
        if (o === void 0) {
            let a = U(t.K, x.BIGINT);
            o = t.K == u.BOOL ? a.toString() : a
        }
        if (typeof o != "string" && typeof o != "number" && (o = o.toString()), i === void 0) switch (t.V.kind) {
            case"scalar":
                i = U(t.V.T, x.BIGINT);
                break;
            case"enum":
                i = 0;
                break;
            case"message":
                i = new t.V.T;
                break
        }
        return [o, i]
    }

    function Gt(t, e) {
        let n = Z(t, e);
        return typeof n == "bigint" ? n.toString() : n
    }

    function Z(t, e) {
        switch (e) {
            case u.STRING:
                return t.string();
            case u.BOOL:
                return t.bool();
            case u.DOUBLE:
                return t.double();
            case u.FLOAT:
                return t.float();
            case u.INT32:
                return t.int32();
            case u.INT64:
                return t.int64();
            case u.UINT64:
                return t.uint64();
            case u.FIXED64:
                return t.fixed64();
            case u.BYTES:
                return t.bytes();
            case u.FIXED32:
                return t.fixed32();
            case u.SFIXED32:
                return t.sfixed32();
            case u.SFIXED64:
                return t.sfixed64();
            case u.SINT64:
                return t.sint64();
            case u.UINT32:
                return t.uint32();
            case u.SINT32:
                return t.sint32()
        }
    }

    function He(t, e, n, r, s) {
        t.tag(n.no, g.LengthDelimited), t.fork();
        let o = r;
        switch (n.K) {
            case u.INT32:
            case u.FIXED32:
            case u.UINT32:
            case u.SFIXED32:
            case u.SINT32:
                o = Number.parseInt(r);
                break;
            case u.BOOL:
                h(r == "true" || r == "false"), o = r == "true";
                break
        }
        switch (A(t, n.K, 1, o, !0), n.V.kind) {
            case"scalar":
                A(t, n.V.T, 2, s, !0);
                break;
            case"enum":
                A(t, u.INT32, 2, s, !0);
                break;
            case"message":
                t.tag(2, g.LengthDelimited).bytes(s.toBinary(e));
                break
        }
        t.join()
    }

    function xe(t, e, n, r) {
        let s = Q(n.T, r);
        n?.delimited ? t.tag(n.no, g.StartGroup).raw(s.toBinary(e)).tag(n.no, g.EndGroup) : t.tag(n.no, g.LengthDelimited).bytes(s.toBinary(e))
    }

    function A(t, e, n, r, s) {
        let [o, i, a] = we(e, r);
        (!a || s) && t.tag(n, o)[i](r)
    }

    function Ze(t, e, n, r) {
        if (!r.length) return;
        t.tag(n, g.LengthDelimited).fork();
        let [, s] = we(e);
        for (let o = 0; o < r.length; o++) t[s](r[o]);
        t.join()
    }

    function tt() {
        return Object.assign(Object.assign({}, Qe()), {
            writeField: et, writeMessage(t, e, n) {
                let r = t.getType();
                for (let s of r.fields.byNumber()) {
                    let o, i = s.localName;
                    if (s.oneof) {
                        let a = t[s.oneof.localName];
                        if (a.case !== i) continue;
                        o = a.value
                    } else o = t[i];
                    et(s, o, e, n)
                }
                return n.writeUnknownFields && this.writeUnknownFields(t, e), e
            }
        })
    }

    function et(t, e, n, r) {
        let s = t.repeated;
        switch (t.kind) {
            case"scalar":
            case"enum":
                let o = t.kind == "enum" ? u.INT32 : t.T;
                if (s) if (t.packed) Ze(n, o, t.no, e); else for (let i of e) A(n, o, t.no, i, !0); else e !== void 0 && A(n, o, t.no, e, !!t.oneof || t.opt);
                break;
            case"message":
                if (s) for (let i of e) xe(n, r, t, i); else e !== void 0 && xe(n, r, t, e);
                break;
            case"map":
                for (let [i, a] of Object.entries(e)) He(n, r, t, i, a);
                break
        }
    }

    var F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), ee = [];
    for (let t = 0; t < F.length; t++) ee[F[t].charCodeAt(0)] = t;
    ee["-".charCodeAt(0)] = F.indexOf("+");
    ee["_".charCodeAt(0)] = F.indexOf("/");
    var Ie = {
        dec(t) {
            let e = t.length * 3 / 4;
            t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
            let n = new Uint8Array(e), r = 0, s = 0, o, i = 0;
            for (let a = 0; a < t.length; a++) {
                if (o = ee[t.charCodeAt(a)], o === void 0) switch (t[a]) {
                    case"=":
                        s = 0;
                    case`
`:
                    case"\r":
                    case"	":
                    case" ":
                        continue;
                    default:
                        throw Error("invalid base64 string.")
                }
                switch (s) {
                    case 0:
                        i = o, s = 1;
                        break;
                    case 1:
                        n[r++] = i << 2 | (o & 48) >> 4, i = o, s = 2;
                        break;
                    case 2:
                        n[r++] = (i & 15) << 4 | (o & 60) >> 2, i = o, s = 3;
                        break;
                    case 3:
                        n[r++] = (i & 3) << 6 | o, s = 0;
                        break
                }
            }
            if (s == 1) throw Error("invalid base64 string.");
            return n.subarray(0, r)
        }, enc(t) {
            let e = "", n = 0, r, s = 0;
            for (let o = 0; o < t.length; o++) switch (r = t[o], n) {
                case 0:
                    e += F[r >> 2], s = (r & 3) << 4, n = 1;
                    break;
                case 1:
                    e += F[s | r >> 4], s = (r & 15) << 2, n = 2;
                    break;
                case 2:
                    e += F[s | r >> 6], e += F[r & 63], n = 0;
                    break
            }
            return n && (e += F[s], e += "=", n == 1 && (e += "=")), e
        }
    };

    function nt(t, e, n) {
        st(e, t);
        let r = e.runtime.bin.makeReadOptions(n),
            s = Xe(t.getType().runtime.bin.listUnknownFields(t), e.field), [o, i] = z(e);
        for (let a of s) e.runtime.bin.readField(o, r.readerFactory(a.data), e.field, a.wireType, r);
        return i()
    }

    function rt(t, e, n, r) {
        st(e, t);
        let s = e.runtime.bin.makeReadOptions(r), o = e.runtime.bin.makeWriteOptions(r);
        if (Ne(t, e)) {
            let d = t.getType().runtime.bin.listUnknownFields(t).filter(f => f.no != e.field.no);
            t.getType().runtime.bin.discardUnknownFields(t);
            for (let f of d) t.getType().runtime.bin.onUnknownField(t, f.no, f.wireType, f.data)
        }
        let i = o.writerFactory(), a = e.field;
        !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), {opt: !0})), e.runtime.bin.writeField(a, n, i, o);
        let c = s.readerFactory(i.finish());
        for (; c.pos < c.len;) {
            let [d, f] = c.tag(), l = c.skip(f);
            t.getType().runtime.bin.onUnknownField(t, d, f, l)
        }
    }

    function Ne(t, e) {
        let n = t.getType();
        return e.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(t).find(r => r.no == e.field.no)
    }

    function st(t, e) {
        h(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`)
    }

    var ot = {ignoreUnknownFields: !1},
        it = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0};

    function Yt(t) {
        return t ? Object.assign(Object.assign({}, ot), t) : ot
    }

    function qt(t) {
        return t ? Object.assign(Object.assign({}, it), t) : it
    }

    function ut(t, e) {
        let n = e(Xt, ct);
        return {
            makeReadOptions: Yt, makeWriteOptions: qt, readMessage(r, s, o, i) {
                if (s == null || Array.isArray(s) || typeof s != "object") throw new Error(`cannot decode message ${r.typeName} from JSON: ${I(s)}`);
                i = i ?? new r;
                let a = new Map, c = o.typeRegistry;
                for (let [d, f] of Object.entries(s)) {
                    let l = r.fields.findJsonName(d);
                    if (l) {
                        if (l.oneof) {
                            if (f === null && l.kind == "scalar") continue;
                            let p = a.get(l.oneof);
                            if (p !== void 0) throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${p}", "${d}"`);
                            a.set(l.oneof, d)
                        }
                        at(i, f, l, o, r, t)
                    } else {
                        let p = !1;
                        if (c?.findExtension && d.startsWith("[") && d.endsWith("]")) {
                            let T = c.findExtension(d.substring(1, d.length - 1));
                            if (T && T.extendee.typeName == r.typeName) {
                                p = !0;
                                let [N, Bt] = z(T);
                                at(N, f, T.field, o, T, !0), rt(i, T, Bt(), o)
                            }
                        }
                        if (!p && !o.ignoreUnknownFields) throw new Error(`cannot decode message ${r.typeName} from JSON: key "${d}" is unknown`)
                    }
                }
                return i
            }, writeMessage(r, s) {
                let o = r.getType(), i = {}, a;
                try {
                    for (let d of o.fields.byMember()) {
                        let f;
                        if (d.kind == "oneof") {
                            let l = r[d.localName];
                            if (l.value === void 0) continue;
                            if (a = d.findField(l.case), !a) throw "oneof case not found: " + l.case;
                            f = n(a, l.value, s)
                        } else a = d, f = n(a, r[a.localName], s);
                        f !== void 0 && (i[s.useProtoFieldName ? a.name : a.jsonName] = f)
                    }
                    let c = s.typeRegistry;
                    if (c?.findExtensionFor) for (let d of o.runtime.bin.listUnknownFields(r)) {
                        let f = c.findExtensionFor(o.typeName, d.no);
                        if (f && Ne(r, f)) {
                            let l = nt(r, f, s), p = n(f.field, l, s);
                            p !== void 0 && (i[f.field.jsonName] = p)
                        }
                    }
                } catch (c) {
                    let d = a ? `cannot encode field ${o.typeName}.${a.name} to JSON` : `cannot encode message ${o.typeName} to JSON`,
                        f = c instanceof Error ? c.message : String(c);
                    throw new Error(d + (f.length > 0 ? `: ${f}` : ""))
                }
                return i
            }, readScalar: (r, s, o) => V(r, s, o, t), writeScalar: ct, debug: I
        }
    }

    function I(t) {
        if (t === null) return "null";
        switch (typeof t) {
            case"object":
                return Array.isArray(t) ? "array" : "object";
            case"string":
                return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
            default:
                return String(t)
        }
    }

    function at(t, e, n, r, s, o) {
        let i = n.localName;
        if (n.oneof) {
            if (e === null && n.kind == "scalar") return;
            t = t[n.oneof.localName] = {case: i}, i = "value"
        }
        if (n.repeated) {
            if (e === null) return;
            if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${I(e)}`);
            let a = t[i];
            for (let c of e) {
                if (c === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${I(c)}`);
                let d;
                switch (n.kind) {
                    case"message":
                        d = n.T.fromJson(c, r);
                        break;
                    case"enum":
                        if (d = Se(n.T, c, r.ignoreUnknownFields, !0), d === void 0) continue;
                        break;
                    case"scalar":
                        try {
                            d = V(n.T, c, n.L, !0)
                        } catch (f) {
                            let l = `cannot decode field ${s.typeName}.${n.name} from JSON: ${I(c)}`;
                            throw f instanceof Error && f.message.length > 0 && (l += `: ${f.message}`), new Error(l)
                        }
                        break
                }
                a.push(d)
            }
        } else if (n.kind == "map") {
            if (e === null) return;
            if (typeof e != "object" || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${I(e)}`);
            let a = t[i];
            for (let [c, d] of Object.entries(e)) {
                if (d === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
                let f;
                switch (n.V.kind) {
                    case"message":
                        f = n.V.T.fromJson(d, r);
                        break;
                    case"enum":
                        if (f = Se(n.V.T, d, r.ignoreUnknownFields, !0), f === void 0) continue;
                        break;
                    case"scalar":
                        try {
                            f = V(n.V.T, d, x.BIGINT, !0)
                        } catch (l) {
                            let p = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${I(e)}`;
                            throw l instanceof Error && l.message.length > 0 && (p += `: ${l.message}`), new Error(p)
                        }
                        break
                }
                try {
                    a[V(n.K, n.K == u.BOOL ? c == "true" ? !0 : c == "false" ? !1 : c : c, x.BIGINT, !0).toString()] = f
                } catch (l) {
                    let p = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${I(e)}`;
                    throw l instanceof Error && l.message.length > 0 && (p += `: ${l.message}`), new Error(p)
                }
            }
        } else switch (n.kind) {
            case"message":
                let a = n.T;
                if (e === null && a.typeName != "google.protobuf.Value") {
                    if (n.oneof) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: null is invalid for oneof field`);
                    return
                }
                t[i] instanceof k ? t[i].fromJson(e, r) : (t[i] = a.fromJson(e, r), a.fieldWrapper && !n.oneof && (t[i] = a.fieldWrapper.unwrapField(t[i])));
                break;
            case"enum":
                let c = Se(n.T, e, r.ignoreUnknownFields, o);
                c !== void 0 && (t[i] = c);
                break;
            case"scalar":
                try {
                    t[i] = V(n.T, e, n.L, o)
                } catch (d) {
                    let f = `cannot decode field ${s.typeName}.${n.name} from JSON: ${I(e)}`;
                    throw d instanceof Error && d.message.length > 0 && (f += `: ${d.message}`), new Error(f)
                }
                break
        }
    }

    function V(t, e, n, r) {
        switch (t) {
            case u.DOUBLE:
            case u.FLOAT:
                if (e === null) return r ? 0 : void 0;
                if (e === "NaN") return Number.NaN;
                if (e === "Infinity") return Number.POSITIVE_INFINITY;
                if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
                let s = Number(e);
                if (Number.isNaN(s) || !Number.isFinite(s)) break;
                return t == u.FLOAT && q(s), s;
            case u.INT32:
            case u.FIXED32:
            case u.SFIXED32:
            case u.SINT32:
            case u.UINT32:
                if (e === null) return r ? 0 : void 0;
                let o;
                if (typeof e == "number" ? o = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (o = Number(e)), o === void 0) break;
                return t == u.UINT32 ? $(o) : P(o), o;
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                if (e === null) return r ? b.zero : void 0;
                if (typeof e != "number" && typeof e != "string") break;
                let i = b.parse(e);
                return n ? i.toString() : i;
            case u.FIXED64:
            case u.UINT64:
                if (e === null) return r ? b.zero : void 0;
                if (typeof e != "number" && typeof e != "string") break;
                let a = b.uParse(e);
                return n ? a.toString() : a;
            case u.BOOL:
                if (e === null) return r ? !1 : void 0;
                if (typeof e != "boolean") break;
                return e;
            case u.STRING:
                if (e === null) return r ? "" : void 0;
                if (typeof e != "string") break;
                try {
                    encodeURIComponent(e)
                } catch {
                    throw new Error("invalid UTF8")
                }
                return e;
            case u.BYTES:
                if (e === null) return r ? new Uint8Array(0) : void 0;
                if (e === "") return new Uint8Array(0);
                if (typeof e != "string") break;
                return Ie.dec(e)
        }
        throw new Error
    }

    function Se(t, e, n, r) {
        if (e === null) return r ? t.values[0].no : void 0;
        switch (typeof e) {
            case"number":
                if (Number.isInteger(e)) return e;
                break;
            case"string":
                let s = t.findName(e);
                if (s || n) return s?.no;
                break
        }
        throw new Error(`cannot decode enum ${t.typeName} from JSON: ${I(e)}`)
    }

    function Xt(t, e, n, r) {
        var s;
        if (e === void 0) return e;
        if (!n && t.values[0].no === e) return;
        if (r) return e;
        if (t.typeName == "google.protobuf.NullValue") return null;
        let o = t.findNumber(e);
        return (s = o?.name) !== null && s !== void 0 ? s : e
    }

    function ct(t, e, n) {
        if (e !== void 0) switch (t) {
            case u.INT32:
            case u.SFIXED32:
            case u.SINT32:
            case u.FIXED32:
            case u.UINT32:
                return h(typeof e == "number"), e != 0 || n ? e : void 0;
            case u.FLOAT:
            case u.DOUBLE:
                return h(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || n ? e : void 0;
            case u.STRING:
                return h(typeof e == "string"), e.length > 0 || n ? e : void 0;
            case u.BOOL:
                return h(typeof e == "boolean"), e || n ? e : void 0;
            case u.UINT64:
            case u.FIXED64:
            case u.INT64:
            case u.SFIXED64:
            case u.SINT64:
                return h(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), n || e != 0 ? e.toString(10) : void 0;
            case u.BYTES:
                return h(e instanceof Uint8Array), n || e.byteLength > 0 ? Ie.enc(e) : void 0
        }
    }

    function mt() {
        return ut(!0, (t, e) => function (r, s, o) {
            if (r.kind == "map") {
                let i = {};
                switch (r.V.kind) {
                    case"scalar":
                        for (let [c, d] of Object.entries(s)) {
                            let f = e(r.V.T, d, !0);
                            h(f !== void 0), i[c.toString()] = f
                        }
                        break;
                    case"message":
                        for (let [c, d] of Object.entries(s)) i[c.toString()] = d.toJson(o);
                        break;
                    case"enum":
                        let a = r.V.T;
                        for (let [c, d] of Object.entries(s)) {
                            h(d === void 0 || typeof d == "number");
                            let f = t(a, d, !0, o.enumAsInteger);
                            h(f !== void 0), i[c.toString()] = f
                        }
                        break
                }
                return o.emitDefaultValues || Object.keys(i).length > 0 ? i : void 0
            } else if (r.repeated) {
                let i = [];
                switch (r.kind) {
                    case"scalar":
                        for (let a = 0; a < s.length; a++) i.push(e(r.T, s[a], !0));
                        break;
                    case"enum":
                        for (let a = 0; a < s.length; a++) i.push(t(r.T, s[a], !0, o.enumAsInteger));
                        break;
                    case"message":
                        for (let a = 0; a < s.length; a++) i.push(s[a].toJson(o));
                        break
                }
                return o.emitDefaultValues || i.length > 0 ? i : void 0
            } else {
                if (s === void 0) return;
                switch (r.kind) {
                    case"scalar":
                        return e(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues);
                    case"enum":
                        return t(r.T, s, !!r.oneof || r.opt || o.emitDefaultValues, o.enumAsInteger);
                    case"message":
                        return Q(r.T, s).toJson(o)
                }
            }
        })
    }

    function dt() {
        return {
            setEnumType: ge, initPartial(t, e) {
                if (t === void 0) return;
                let n = e.getType();
                for (let r of n.fields.byMember()) {
                    let s = r.localName, o = e, i = t;
                    if (i[s] !== void 0) switch (r.kind) {
                        case"oneof":
                            let a = i[s].case;
                            if (a === void 0) continue;
                            let c = r.findField(a), d = i[s].value;
                            c && c.kind == "message" && !(d instanceof c.T) ? d = new c.T(d) : c && c.kind === "scalar" && c.T === u.BYTES && (d = J(d)), o[s] = {
                                case: a,
                                value: d
                            };
                            break;
                        case"scalar":
                        case"enum":
                            let f = i[s];
                            r.T === u.BYTES && (f = r.repeated ? f.map(J) : J(f)), o[s] = f;
                            break;
                        case"map":
                            switch (r.V.kind) {
                                case"scalar":
                                case"enum":
                                    if (r.V.T === u.BYTES) for (let [T, N] of Object.entries(i[s])) o[s][T] = J(N); else Object.assign(o[s], i[s]);
                                    break;
                                case"message":
                                    let p = r.V.T;
                                    for (let T of Object.keys(i[s])) {
                                        let N = i[s][T];
                                        p.fieldWrapper || (N = new p(N)), o[s][T] = N
                                    }
                                    break
                            }
                            break;
                        case"message":
                            let l = r.T;
                            if (r.repeated) o[s] = i[s].map(p => p instanceof l ? p : new l(p)); else if (i[s] !== void 0) {
                                let p = i[s];
                                l.fieldWrapper ? l.typeName === "google.protobuf.BytesValue" ? o[s] = J(p) : o[s] = p : o[s] = p instanceof l ? p : new l(p)
                            }
                            break
                    }
                }
            }, equals(t, e, n) {
                return e === n ? !0 : !e || !n ? !1 : t.fields.byMember().every(r => {
                    let s = e[r.localName], o = n[r.localName];
                    if (r.repeated) {
                        if (s.length !== o.length) return !1;
                        switch (r.kind) {
                            case"message":
                                return s.every((i, a) => r.T.equals(i, o[a]));
                            case"scalar":
                                return s.every((i, a) => S(r.T, i, o[a]));
                            case"enum":
                                return s.every((i, a) => S(u.INT32, i, o[a]))
                        }
                        throw new Error(`repeated cannot contain ${r.kind}`)
                    }
                    switch (r.kind) {
                        case"message":
                            return r.T.equals(s, o);
                        case"enum":
                            return S(u.INT32, s, o);
                        case"scalar":
                            return S(r.T, s, o);
                        case"oneof":
                            if (s.case !== o.case) return !1;
                            let i = r.findField(s.case);
                            if (i === void 0) return !0;
                            switch (i.kind) {
                                case"message":
                                    return i.T.equals(s.value, o.value);
                                case"enum":
                                    return S(u.INT32, s.value, o.value);
                                case"scalar":
                                    return S(i.T, s.value, o.value)
                            }
                            throw new Error(`oneof cannot contain ${i.kind}`);
                        case"map":
                            let a = Object.keys(s).concat(Object.keys(o));
                            switch (r.V.kind) {
                                case"message":
                                    let c = r.V.T;
                                    return a.every(f => c.equals(s[f], o[f]));
                                case"enum":
                                    return a.every(f => S(u.INT32, s[f], o[f]));
                                case"scalar":
                                    let d = r.V.T;
                                    return a.every(f => S(d, s[f], o[f]))
                            }
                            break
                    }
                })
            }, clone(t) {
                let e = t.getType(), n = new e, r = n;
                for (let s of e.fields.byMember()) {
                    let o = t[s.localName], i;
                    if (s.repeated) i = o.map(te); else if (s.kind == "map") {
                        i = r[s.localName];
                        for (let [a, c] of Object.entries(o)) i[a] = te(c)
                    } else s.kind == "oneof" ? i = s.findField(o.case) ? {
                        case: o.case,
                        value: te(o.value)
                    } : {case: void 0} : i = te(o);
                    r[s.localName] = i
                }
                return n
            }
        }
    }

    function te(t) {
        if (t === void 0) return t;
        if (t instanceof k) return t.clone();
        if (t instanceof Uint8Array) {
            let e = new Uint8Array(t.byteLength);
            return e.set(t), e
        }
        return t
    }

    function J(t) {
        return t instanceof Uint8Array ? t : new Uint8Array(t)
    }

    var ne = class {
        constructor(e, n) {
            this._fields = e, this._normalizer = n
        }

        findJsonName(e) {
            if (!this.jsonNames) {
                let n = {};
                for (let r of this.list()) n[r.jsonName] = n[r.name] = r;
                this.jsonNames = n
            }
            return this.jsonNames[e]
        }

        find(e) {
            if (!this.numbers) {
                let n = {};
                for (let r of this.list()) n[r.no] = r;
                this.numbers = n
            }
            return this.numbers[e]
        }

        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all
        }

        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, n) => e.no - n.no)), this.numbersAsc
        }

        byMember() {
            if (!this.members) {
                this.members = [];
                let e = this.members, n;
                for (let r of this.list()) r.oneof ? r.oneof !== n && (n = r.oneof, e.push(n)) : e.push(r)
            }
            return this.members
        }
    };

    function Fe(t, e) {
        let n = pt(t);
        return e ? n : zt(Kt(n))
    }

    function ft(t) {
        return Fe(t, !1)
    }

    var lt = pt;

    function pt(t) {
        let e = !1, n = [];
        for (let r = 0; r < t.length; r++) {
            let s = t.charAt(r);
            switch (s) {
                case"_":
                    e = !0;
                    break;
                case"0":
                case"1":
                case"2":
                case"3":
                case"4":
                case"5":
                case"6":
                case"7":
                case"8":
                case"9":
                    n.push(s), e = !1;
                    break;
                default:
                    e && (e = !1, s = s.toUpperCase()), n.push(s);
                    break
            }
        }
        return n.join("")
    }

    var Wt = new Set(["constructor", "toString", "toJSON", "valueOf"]),
        jt = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
        gt = t => `${t}$`, Kt = t => jt.has(t) ? gt(t) : t, zt = t => Wt.has(t) ? gt(t) : t;
    var re = class {
        constructor(e) {
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = ft(e)
        }

        addField(e) {
            h(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e)
        }

        findField(e) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for (let n = 0; n < this.fields.length; n++) this._lookup[this.fields[n].localName] = this.fields[n]
            }
            return this._lookup[e]
        }
    };
    var m = We("proto3", mt(), tt(), Object.assign(Object.assign({}, dt()), {
        newFieldList(t) {
            return new ne(t, Qt)
        }, initFields(t) {
            for (let e of t.getType().fields.byMember()) {
                if (e.opt) continue;
                let n = e.localName, r = t;
                if (e.repeated) {
                    r[n] = [];
                    continue
                }
                switch (e.kind) {
                    case"oneof":
                        r[n] = {case: void 0};
                        break;
                    case"enum":
                        r[n] = 0;
                        break;
                    case"map":
                        r[n] = {};
                        break;
                    case"scalar":
                        r[n] = U(e.T, e.L);
                        break;
                    case"message":
                        break
                }
            }
        }
    }));

    function Qt(t) {
        var e, n, r, s;
        let o = [], i;
        for (let a of typeof t == "function" ? t() : t) {
            let c = a;
            if (c.localName = Fe(a.name, a.oneof !== void 0), c.jsonName = (e = a.jsonName) !== null && e !== void 0 ? e : lt(a.name), c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1, a.kind == "scalar" && (c.L = (r = a.L) !== null && r !== void 0 ? r : x.BIGINT), a.oneof !== void 0) {
                let d = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
                (!i || i.name != d) && (i = new re(d)), c.oneof = i, i.addField(c)
            }
            a.kind == "message" && (c.delimited = !1), c.packed = (s = a.packed) !== null && s !== void 0 ? s : a.kind == "enum" || a.kind == "scalar" && a.T != u.BYTES && a.T != u.STRING, o.push(c)
        }
        return o
    }

    var yt = m.makeMessageType("youtube.component.ResponseContext", () => [{
            no: 6,
            name: "serviceTrackingParams",
            kind: "message",
            T: Ht,
            repeated: !0
        }]), Ht = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [{
            no: 1,
            name: "service",
            kind: "scalar",
            T: 5
        }, {no: 2, name: "params", kind: "message", T: Zt, repeated: !0}]),
        Zt = m.makeMessageType("youtube.component.Param", () => [{no: 1, name: "key", kind: "scalar", T: 9}, {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }]);
    var se = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [{
            no: 1,
            name: "entityBatchUpdate",
            kind: "message",
            T: en
        }]), en = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [{
            no: 1,
            name: "mutations",
            kind: "message",
            T: tn,
            repeated: !0
        }]), tn = m.makeMessageType("youtube.component.Mutation", () => [{
            no: 1,
            name: "entityKey",
            kind: "scalar",
            T: 9
        }, {no: 2, name: "type", kind: "scalar", T: 5}, {no: 3, name: "payload", kind: "message", T: nn}]),
        nn = m.makeMessageType("youtube.component.Payload", []),
        $s = m.makeMessageType("youtube.component.Entity", () => [{no: 2, name: "name", kind: "scalar", T: 9}, {
            no: 4,
            name: "targetNo",
            kind: "scalar",
            T: 5
        }, {no: 5, name: "type", kind: "scalar", T: 5}]);
    var w = m.makeMessageType("youtube.component.Label", () => [{
        no: 1,
        name: "runs",
        kind: "message",
        T: Ee,
        repeated: !0
    }]), Ee = m.makeMessageType("youtube.component.Run", () => [{no: 1, name: "text", kind: "scalar", T: 9}]);
    var ht = m.makeMessageType("youtube.response.browse.Browse", () => [{
            no: 1,
            name: "responseContext",
            kind: "message",
            T: yt
        }, {no: 9, name: "content", kind: "message", T: M}, {
            no: 10,
            name: "onResponseReceivedAction",
            kind: "message",
            T: M
        }, {no: 777, name: "frameworkUpdateTransport", kind: "message", T: se}]),
        M = m.makeMessageType("youtube.response.browse.Content", () => [{
            no: 58173949,
            name: "singleColumnResultsRenderer",
            kind: "message",
            T: rn
        }, {no: 153515154, name: "elementRenderer", kind: "message", T: kt}, {
            no: 49399797,
            name: "sectionListRenderer",
            kind: "message",
            T: Re
        }]), rn = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [{
            no: 1,
            name: "tabs",
            kind: "message",
            T: sn,
            repeated: !0
        }]), sn = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [{
            no: 58174010,
            name: "tabRenderer",
            kind: "message",
            T: on
        }]), on = m.makeMessageType("youtube.response.browse.TabRenderer", () => [{
            no: 4,
            name: "content",
            kind: "message",
            T: M
        }]), Re = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [{
            no: 1,
            name: "sectionListSupportedRenderers",
            kind: "message",
            T: an,
            repeated: !0
        }]), an = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [{
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: Be
        }, {no: 51845067, name: "shelfRenderer", kind: "message", T: yn}, {
            no: 221496734,
            name: "musicDescriptionShelfRenderer",
            kind: "message",
            T: kn
        }]), Be = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [{
            no: 1,
            name: "richItemContent",
            kind: "message",
            T: bt,
            repeated: !0
        }]), bt = m.makeMessageType("youtube.response.browse.RichItemContent", () => [{
            no: 153515154,
            name: "videoWithContextRenderer",
            kind: "message",
            T: kt
        }]), kt = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [{
            no: 172660663,
            name: "videoRendererContent",
            kind: "message",
            T: cn
        }]), cn = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [{
            no: 1,
            name: "videoInfo",
            kind: "message",
            T: un
        }, {no: 2, name: "renderInfo", kind: "message", T: pn}]),
        un = m.makeMessageType("youtube.response.browse.VideoInfo", () => [{
            no: 168777401,
            name: "videoContext",
            kind: "message",
            T: mn
        }]), mn = m.makeMessageType("youtube.response.browse.VideoContext", () => [{
            no: 5,
            name: "videoContent",
            kind: "message",
            T: dn
        }]), dn = m.makeMessageType("youtube.response.browse.VideoContent", () => [{
            no: 465160965,
            name: "timedLyricsRender",
            kind: "message",
            T: fn
        }]), fn = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [{
            no: 4,
            name: "timedLyricsContent",
            kind: "message",
            T: ln
        }]), ln = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [{
            no: 1,
            name: "runs",
            kind: "message",
            T: Ee,
            repeated: !0
        }, {no: 2, name: "footerLabel", kind: "scalar", T: 9}]),
        pn = m.makeMessageType("youtube.response.browse.RenderInfo", () => [{
            no: 183314536,
            name: "layoutRender",
            kind: "message",
            T: gn
        }]), gn = m.makeMessageType("youtube.response.browse.LayoutRender", () => [{
            no: 1,
            name: "eml",
            kind: "scalar",
            T: 9
        }]), yn = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [{
            no: 5,
            name: "richSectionContent",
            kind: "message",
            T: hn
        }]), hn = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [{
            no: 51431404,
            name: "reelShelfRenderer",
            kind: "message",
            T: bn
        }]), bn = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [{
            no: 1,
            name: "richItemContent",
            kind: "message",
            T: bt,
            repeated: !0
        }]), kn = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [{
            no: 3,
            name: "description",
            kind: "message",
            T: w
        }, {no: 10, name: "footer", kind: "message", T: w}]);
    var oe = m.makeMessageType("youtube.response.next.Next", () => [{
        no: 7,
        name: "content",
        kind: "message",
        T: Tn
    }, {no: 8, name: "onResponseReceivedAction", kind: "message", T: M}, {
        no: 777,
        name: "frameworkUpdateTransport",
        kind: "message",
        T: se
    }]), Tn = m.makeMessageType("youtube.response.next.Content", () => [{
        no: 51779735,
        name: "nextResult",
        kind: "message",
        T: wn
    }]), wn = m.makeMessageType("youtube.response.next.NextResult", () => [{
        no: 1,
        name: "content",
        kind: "message",
        T: M
    }]);
    var Tt = m.makeMessageType("youtube.response.search.Search", () => [{
            no: 4,
            name: "content",
            kind: "message",
            T: M
        }, {no: 7, name: "onResponseReceivedCommand", kind: "message", T: xn}]),
        xn = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [{
            no: 50195462,
            name: "itemSectionRenderer",
            kind: "message",
            T: Be
        }, {no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: Re}]);
    var wt = m.makeMessageType("youtube.response.shorts.Shorts", () => [{
        no: 2,
        name: "entries",
        kind: "message",
        T: In,
        repeated: !0
    }]), In = m.makeMessageType("youtube.response.shorts.Entry", () => [{
        no: 1,
        name: "command",
        kind: "message",
        T: Nn
    }]), Nn = m.makeMessageType("youtube.response.shorts.Command", () => [{
        no: 139608561,
        name: "reelWatchEndpoint",
        kind: "message",
        T: Sn
    }]), Sn = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [{
        no: 8,
        name: "overlay",
        kind: "message",
        T: Fn
    }]), Fn = m.makeMessageType("youtube.response.shorts.Overlay", () => [{
        no: 139970731,
        name: "reelPlayerOverlayRenderer",
        kind: "message",
        T: En
    }]), En = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [{
        no: 12,
        name: "style",
        kind: "scalar",
        T: 5
    }]);
    var Nt = m.makeMessageType("youtube.response.browse.Guide", () => [{
            no: 4,
            name: "items4",
            kind: "message",
            T: xt,
            repeated: !0
        }, {no: 6, name: "items6", kind: "message", T: xt, repeated: !0}]),
        xt = m.makeMessageType("youtube.response.browse.Item", () => [{
            no: 117866661,
            name: "guideSectionRenderer",
            kind: "message",
            T: Rn
        }]), Rn = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [{
            no: 1,
            name: "rendererItems",
            kind: "message",
            T: Bn,
            repeated: !0
        }]), Bn = m.makeMessageType("youtube.response.browse.RendererItem", () => [{
            no: 318370163,
            name: "iconRender",
            kind: "message",
            T: It
        }, {no: 117501096, name: "labelRender", kind: "message", T: It}]),
        It = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [{
            no: 1,
            name: "browseId",
            kind: "scalar",
            T: 9
        }]);
    var ie = m.makeMessageType("youtube.response.player.Player", () => [{
            no: 7,
            name: "adPlacements",
            kind: "message",
            T: Mn,
            repeated: !0
        }, {no: 2, name: "playabilityStatus", kind: "message", T: Un}, {
            no: 9,
            name: "playbackTracking",
            kind: "message",
            T: vn
        }, {no: 10, name: "captions", kind: "message", T: Ln}, {
            no: 68,
            name: "adSlots",
            kind: "message",
            T: Jn,
            repeated: !0
        }]), Mn = m.makeMessageType("youtube.response.player.AdPlacement", () => [{
            no: 84813246,
            name: "adPlacementRenderer",
            kind: "message",
            T: On
        }]), On = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [{
            no: 4,
            name: "params",
            kind: "scalar",
            T: 9
        }]), Un = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [{
            no: 21,
            name: "miniPlayer",
            kind: "message",
            T: Pn
        }, {no: 11, name: "backgroundPlayer", kind: "message", T: Me}]),
        Pn = m.makeMessageType("youtube.response.player.MiniPlayer", () => [{
            no: 151635310,
            name: "miniPlayerRender",
            kind: "message",
            T: Cn
        }]), Me = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [{
            no: 64657230,
            name: "backgroundPlayerRender",
            kind: "message",
            T: An
        }]), Cn = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [{
            no: 1,
            name: "active",
            kind: "scalar",
            T: 8
        }]), An = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [{
            no: 1,
            name: "active",
            kind: "scalar",
            T: 8
        }]), vn = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [{
            no: 1,
            name: "videostatsPlaybackUrl",
            kind: "message",
            T: O
        }, {no: 2, name: "videostatsDelayplayUrl", kind: "message", T: O}, {
            no: 3,
            name: "videostatsWatchtimeUrl",
            kind: "message",
            T: O
        }, {no: 4, name: "ptrackingUrl", kind: "message", T: O}, {no: 5, name: "qoeUrl", kind: "message", T: O}, {
            no: 13,
            name: "atrUrl",
            kind: "message",
            T: O
        }, {no: 15, name: "videostatsEngageUrl", kind: "message", T: O}, {
            no: 18,
            name: "pageadViewthroughconversion",
            kind: "message",
            T: O
        }]), O = m.makeMessageType("youtube.response.player.Tracking", () => [{
            no: 1,
            name: "baseUrl",
            kind: "scalar",
            T: 9
        }]), Ln = m.makeMessageType("youtube.response.player.Captions", () => [{
            no: 51621377,
            name: "playerCaptionsTrackListRenderer",
            jsonName: "playerCaptionsTracklistRenderer",
            kind: "message",
            T: Dn
        }]), Dn = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [{
            no: 1,
            name: "captionTracks",
            kind: "message",
            T: $n,
            repeated: !0
        }, {no: 2, name: "audioTracks", kind: "message", T: Vn, repeated: !0}, {
            no: 3,
            name: "translationLanguages",
            kind: "message",
            T: Oe,
            repeated: !0
        }, {no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: !0}, {
            no: 6,
            name: "defaultCaptionTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }]), $n = m.makeMessageType("youtube.response.player.CaptionTrack", () => [{
            no: 1,
            name: "baseUrl",
            kind: "scalar",
            T: 9
        }, {no: 2, name: "name", kind: "message", T: w}, {no: 3, name: "vssId", kind: "scalar", T: 9}, {
            no: 4,
            name: "languageCode",
            kind: "scalar",
            T: 9
        }, {no: 5, name: "kind", kind: "scalar", T: 9, opt: !0}, {
            no: 6,
            name: "rtl",
            kind: "scalar",
            T: 8,
            opt: !0
        }, {no: 7, name: "isTranslatable", kind: "scalar", T: 8}]),
        Vn = m.makeMessageType("youtube.response.player.AudioTrack", () => [{
            no: 2,
            name: "captionTrackIndices",
            kind: "scalar",
            T: 5,
            repeated: !0,
            packed: !1
        }, {no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0}, {
            no: 4,
            name: "forcedCaptionTrackIndex",
            kind: "scalar",
            T: 5,
            opt: !0
        }, {no: 5, name: "visibility", kind: "scalar", T: 5, opt: !0}, {
            no: 6,
            name: "hasDefaultTrack",
            kind: "scalar",
            T: 8,
            opt: !0
        }, {no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: !0}, {
            no: 8,
            name: "audioTrackId",
            kind: "scalar",
            T: 9,
            opt: !0
        }, {no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: !0}]),
        Oe = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [{
            no: 1,
            name: "languageCode",
            kind: "scalar",
            T: 9
        }, {no: 2, name: "languageName", kind: "message", T: w}]),
        Jn = m.makeMessageType("youtube.response.player.AdSlot", () => [{
            no: 424701016,
            name: "render",
            kind: "message",
            T: _n
        }]), _n = m.makeMessageType("youtube.response.player.AdSlot.Render", [], {localName: "AdSlot_Render"});
    var Ft = m.makeMessageType("youtube.response.setting.Setting", () => [{
            no: 6,
            name: "settingItems",
            kind: "message",
            T: ae,
            repeated: !0
        }, {no: 7, name: "CollectionItems", kind: "message", T: ae, repeated: !0}]),
        ae = m.makeMessageType("youtube.response.setting.SettingItem", () => [{
            no: 88478200,
            name: "backgroundPlayBackSettingRenderer",
            kind: "message",
            T: Gn
        }, {no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: Yn}]),
        Gn = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [{
            no: 1,
            name: "name",
            kind: "message",
            T: w
        }, {no: 2, name: "backgroundPlayback", kind: "scalar", T: 8}, {
            no: 3,
            name: "download",
            kind: "scalar",
            T: 8
        }, {no: 5, name: "trackingParams", kind: "scalar", T: 12}, {
            no: 9,
            name: "downloadQualitySelection",
            kind: "scalar",
            T: 8
        }, {no: 10, name: "smartDownload", kind: "scalar", T: 8}, {no: 14, name: "icon", kind: "message", T: Et}]),
        Yn = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [{
            no: 2,
            name: "name",
            kind: "message",
            T: w
        }, {no: 3, name: "subSettings", kind: "message", T: Ue, repeated: !0}, {
            no: 4,
            name: "categoryId",
            kind: "scalar",
            T: 5
        }, {no: 5, name: "icon", kind: "message", T: Et}]),
        Et = m.makeMessageType("youtube.response.setting.Icon", () => [{
            no: 1,
            name: "iconType",
            kind: "scalar",
            T: 5
        }]), Ue = m.makeMessageType("youtube.response.setting.SubSetting", () => [{
            no: 61331416,
            name: "settingBooleanRenderer",
            kind: "message",
            T: qn
        }]), qn = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [{
            no: 2,
            name: "title",
            kind: "message",
            T: w
        }, {no: 3, name: "description", kind: "message", T: w}, {
            no: 5,
            name: "enableServiceEndpoint",
            kind: "message",
            T: St
        }, {no: 6, name: "disableServiceEndpoint", kind: "message", T: St}, {
            no: 15,
            name: "itemId",
            kind: "scalar",
            T: 5
        }]), St = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [{
            no: 81212182,
            name: "setClientSettingEndpoint",
            kind: "message",
            T: Xn
        }]), Xn = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [{
            no: 1,
            name: "settingData",
            kind: "message",
            T: Wn
        }]), Wn = m.makeMessageType("youtube.response.setting.SettingData", () => [{
            no: 1,
            name: "clientSettingEnum",
            kind: "message",
            T: jn
        }, {no: 3, name: "boolValue", kind: "scalar", T: 8}]),
        jn = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [{
            no: 1,
            name: "item",
            kind: "scalar",
            T: 5
        }]);
    var Rt = m.makeMessageType("youtube.response.watch.Watch", () => [{
        no: 1,
        name: "contents",
        kind: "message",
        T: Kn,
        repeated: !0
    }]), Kn = m.makeMessageType("youtube.response.watch.Content", () => [{
        no: 2,
        name: "player",
        kind: "message",
        T: ie
    }, {no: 3, name: "next", kind: "message", T: oe}]);
    var v = class {
        _times = new Map;
        name;
        isDebug;
        className;
        request;
        response;

        constructor(e, n, r) {
            this.name = e ?? "", this.isDebug = r?.debug ?? !1, e && this.debug(`${e} Start`), this.className = n ?? "", this.init()
        }

        static getInstance(e, n) {
            let r = "Surge";
            return typeof $loon < "u" ? r = "Loon" : typeof $task < "u" && (r = "QuanX"), v.instances[r] || (v.instances[r] = v.classNames[r](e, r, n)), v.instances[r]
        }

        createProxy(e) {
            return new Proxy(e, {get: this.getFn, set: this.setFn})
        }

        getFn(e, n, r) {
            return e[n]
        }

        setFn(e, n, r, s) {
            return e[n] = r, !0
        }

        getJSON(e, n = {}) {
            let r = this.getVal(e);
            return r ? JSON.parse(r) : n
        }

        setJSON(e, n) {
            this.setVal(JSON.stringify(e), n)
        }

        msg(e = this.name, n = "", r = "", s) {
        }

        debug(e) {
            this.isDebug && (typeof e == "object" && (e = JSON.stringify(e)), console.log(e))
        }

        log(e) {
            typeof e == "object" && (e = JSON.stringify(e)), console.log(e)
        }

        timeStart(e) {
            this._times.set(e, Date.now())
        }

        timeEnd(e) {
            if (this._times.has(e)) {
                let n = this._times.get(e) ?? 0, r = Date.now() - n;
                this.debug(`${e}: ${r}ms`), this._times.delete(e)
            } else this.debug(`Timer with label ${e} does not exist.`)
        }

        exit() {
            $done({})
        }

        reject() {
            $done()
        }

        decodeParams(e) {
            return e
        }
    }, R = v;
    D(R, "instances", {}), D(R, "classNames", {
        QuanX: (e, n, r) => new ce(e, n, r),
        Surge: (e, n, r) => new _(e, n, r),
        Loon: (e, n, r) => new Pe(e, n, r)
    });
    var ue = class extends R {
        getFn(e, n, r) {
            let s = ue.clientAdapter[n] || n;
            return super.getFn(e, s, r)
        }

        setFn(e, n, r, s) {
            let o = ue.clientAdapter[n] || n;
            return super.setFn(e, o, r, s)
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (e) {
                this.debug(e.toString())
            }
        }

        getVal(e) {
            return $persistentStore.read(e)
        }

        setVal(e, n) {
            $persistentStore.write(e, n)
        }

        msg(e = this.name, n = "", r = "", s) {
            $notification.post(e, n, r, {url: s ?? ""})
        }

        async fetch(e) {
            return await new Promise((n, r) => {
                let {method: s, body: o, bodyBytes: i, ...a} = e, c = i ?? o, d = c instanceof Uint8Array;
                $httpClient[s.toLowerCase()]({...a, body: c, "binary-mode": d}, (f, l, p) => {
                    f && r(f);
                    let T = d ? "bodyBytes" : "body";
                    n({status: l.status || l.statusCode, headers: l.headers, [T]: p})
                })
            })
        }

        done(e) {
            let n = e.response ?? e, r, s;
            n.bodyBytes ? (r = n.bodyBytes, delete n.bodyBytes, s = {...e}, s.response ? s.response.body = r : s.body = r) : s = e, $done(s)
        }

        decodeParams(e) {
            return typeof $argument == "string" && !$argument.includes("{{{") && Object.assign(e, JSON.parse($argument)), e
        }
    }, _ = ue;
    D(_, "clientAdapter", {bodyBytes: "body"});
    var E = class extends R {
        static transferBodyBytes(e, n) {
            return e instanceof ArrayBuffer ? n === "Uint8Array" ? new Uint8Array(e) : e : e instanceof Uint8Array && n === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (e) {
                this.debug(e.toString())
            }
        }

        getFn(e, n, r) {
            let s = E.clientAdapter[n] || n, o = super.getFn(e, s, r);
            return n === "bodyBytes" && (o = E.transferBodyBytes(o, "Uint8Array")), o
        }

        setFn(e, n, r, s) {
            let o = E.clientAdapter[n] || n, i = r;
            return n === "bodyBytes" && (i = E.transferBodyBytes(i, "Uint8Array")), super.setFn(e, o, i, s)
        }

        getVal(e) {
            return $prefs.valueForKey(e)?.replace(/\0/g, "")
        }

        setVal(e, n) {
            $prefs.setValueForKey(e, n)
        }

        msg(e = this.name, n = "", r = "", s) {
            $notify(e, n, r, {"open-url": s ?? ""})
        }

        async fetch(e) {
            return await new Promise(n => {
                let r = {url: "", method: "GET"};
                for (let [s, o] of Object.entries(e)) s === "id" ? r.sessionIndex = o : s === "bodyBytes" ? r.bodyBytes = E.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
                e.bodyBytes && delete r.body, $task.fetch(r).then(s => {
                    let o = {status: 200, headers: {}};
                    for (let [i, a] of Object.entries(s)) i === "sessionIndex" ? o.id = a : i === "bodyBytes" ? o.bodyBytes = E.transferBodyBytes(a, "Uint8Array") : i === "statusCode" ? o.status = a : o[i] = a;
                    n(o)
                })
            })
        }

        done(e) {
            let n = e.response ?? e, r = {};
            for (let [s, o] of Object.entries(n)) s === "status" ? r.status = `HTTP/1.1 ${o}` : s === "bodyBytes" ? r.bodyBytes = E.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
            $done(r)
        }
    }, ce = E;
    D(ce, "clientAdapter", {id: "sessionIndex", status: "statusCode"});
    var Pe = class extends _ {
        decodeParams(e) {
            if (typeof $argument < "u") for (let n of Object.keys(e)) {
                let r = $argument?.[n];
                r !== void 0 && (e[n] = r)
            }
            return e
        }
    };
    var y = R.getInstance("YouTube");
    var B = class {
        name;
        needProcess;
        needSave;
        message;
        version = "1.0";
        whiteNo = [];
        blackNo = [];
        whiteEml = [];
        blackEml = ["inline_injection_entrypoint_layout.eml"];
        msgType;
        argument;
        decoder = new TextDecoder("utf-8", {fatal: !1, ignoreBOM: !0});

        constructor(e, n) {
            this.name = n, this.msgType = e, this.argument = this.decodeArgument(), y.isDebug = Boolean(this.argument.debug);
            let r = y.getJSON("YouTubeAdvertiseInfo");
            r?.version === this.version && Object.assign(this, r)
        }

        decodeArgument() {
            let e = {debug: !1};
            return y.decodeParams(e)
        }

        fromBinary(e) {
            return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), this) : (y.log("YouTube can not get binaryBody"), y.exit(), this)
        }

        async modify() {
            let e = this.pure();
            return e instanceof Promise ? await e : e
        }

        toBinary() {
            return this.message.toBinary()
        }

        listUnknownFields(e) {
            return e instanceof k ? e.getType().runtime.bin.listUnknownFields(e) : []
        }

        save() {
            if (this.needSave) {
                y.debug("Update Config");
                let e = {
                    version: this.version,
                    whiteNo: this.whiteNo,
                    blackNo: this.blackNo,
                    whiteEml: this.whiteEml,
                    blackEml: this.blackEml
                };
                y.debug(e), y.setJSON(e, "YouTubeAdvertiseInfo")
            }
        }

        done() {
            if (this.save(), this.needProcess) {
                y.timeStart("toBinary");
                let e = this.toBinary();
                y.timeEnd("toBinary"), y.done({bodyBytes: e})
            }
            y.exit()
        }

        iterate(e = {}, n, r) {
            let s = typeof e == "object" ? [e] : [];
            for (; s.length;) {
                let o = s.pop(), i = Object.keys(o);
                for (let a of i) a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a])
            }
        }

        isAdvertise(e) {
            let n = this.listUnknownFields(e)[0];
            return n ? this.handleFieldNo(n) : this.handleFieldEml(e)
        }

        handleFieldNo(e) {
            let n = e.no;
            if (this.whiteNo.includes(n)) return !1;
            if (this.blackNo.includes(n)) return !0;
            let r = this.checkBufferIsAd(e);
            return r ? this.blackNo.push(n) : this.whiteNo.push(n), this.needSave = !0, r
        }

        handleFieldEml(e) {
            let n = !1, r = "";
            return this.iterate(e, "renderInfo", (s, o) => {
                if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1; else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0; else {
                    let i = s?.videoInfo?.videoContext?.videoContent;
                    i && (n = this.checkUnknownFiled(i), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0)
                }
                o.length = 0
            }), n
        }

        checkBufferIsAd(e) {
            return !e || e.data.length < 1e3 ? !1 : this.decoder.decode(e.data).includes("pagead")
        }

        checkUnknownFiled(e) {
            return e ? this.listUnknownFields(e)?.some(r => this.checkBufferIsAd(r)) ?? !1 : !1
        }

        isShorts(e) {
            let n = !1;
            return this.iterate(e, "eml", (r, s) => {
                n = /shorts(?!_pivot_item)/.test(r.eml), s.length = 0
            }), n
        }
    };
    var L = class extends B {
        constructor(e = ht, n = "Browse") {
            super(e, n)
        }

        async pure() {
            return this.iterate(this.message, "sectionListSupportedRenderers", e => {
                for (let n = e.sectionListSupportedRenderers.length - 1; n >= 0; n--) this.removeCommonAD(e, n), this.removeShorts(e, n)
            }), this
        }

        removeCommonAD(e, n) {
            let s = e.sectionListSupportedRenderers[n]?.itemSectionRenderer?.richItemContent;
            for (let o = s?.length - 1; o >= 0; o--) this.isAdvertise(s[o]) && (s.splice(o, 1), this.needProcess = !0)
        }

        removeShorts(e, n) {
            let r = e.sectionListSupportedRenderers[n]?.shelfRenderer;
            this.isShorts(r) && (e.sectionListSupportedRenderers.splice(n, 1), this.needProcess = !0)
        }
    }, G = class extends L {
        constructor(e = oe, n = "Next") {
            super(e, n)
        }
    }, Y = class extends B {
        constructor(e = ie, n = "Player") {
            super(e, n)
        }

        pure() {
            return this.message.adPlacements?.length && (this.message.adPlacements.length = 0), this.message.adSlots?.length && (this.message.adSlots.length = 0), delete this.message?.playbackTracking?.pageadViewthroughconversion, this.addPlayAbility(), this.addTranslateCaption(), this.needProcess = !0, this
        }

        addPlayAbility() {
            let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
            typeof e == "object" && (e.active = !0), typeof this.message.playabilityStatus == "object" && (this.message.playabilityStatus.backgroundPlayer = new Me({backgroundPlayerRender: {active: !0}}))
        }

        addTranslateCaption() {
            this.argument.captionLang !== "off" && this.iterate(this.message, "captionTracks", (n, r) => {
                let s = {en: "English", vi: "Ti\u1EBFng Vi\u1EC7t"};
                n.translationLanguages = Object.entries(s).map(([o, i]) => new Oe({
                    languageCode: o,
                    languageName: {runs: [{text: i}]}
                })), r.length = 0
            })
        }
    }, me = class extends L {
        constructor(e = Tt, n = "Search") {
            super(e, n)
        }
    }, de = class extends B {
        constructor(e = wt, n = "Shorts") {
            super(e, n)
        }

        pure() {
            let e = this.message.entries?.length;
            if (e) for (let n = e - 1; n >= 0; n--) this.message.entries[n].command?.reelWatchEndpoint?.overlay || (this.message.entries.splice(n, 1), this.needProcess = !0);
            return this
        }
    }, fe = class extends B {
        constructor(e = Nt, n = "Guide") {
            super(e, n)
        }

        pure() {
            let e = ["SPunlimited"];
            return this.argument.blockUpload && e.push("FEuploads"), this.argument.blockImmersive && e.push("FEmusic_immersive"), this.iterate(this.message, "rendererItems", n => {
                for (let r = n.rendererItems.length - 1; r >= 0; r--) {
                    let s = n.rendererItems[r]?.iconRender?.browseId || n.rendererItems[r]?.labelRender?.browseId;
                    e.includes(s) && (n.rendererItems.splice(r, 1), this.needProcess = !0)
                }
            }), this
        }
    }, le = class extends B {
        constructor(e = Ft, n = "Setting") {
            super(e, n)
        }

        pure() {
            this.iterate(this.message.settingItems, "categoryId", n => {
                if (n.categoryId === 10135) {
                    let r = new Ue({
                        settingBooleanRenderer: {
                            itemId: 0,
                            enableServiceEndpoint: {
                                setClientSettingEndpoint: {
                                    settingData: {
                                        clientSettingEnum: {item: 151},
                                        boolValue: !0
                                    }
                                }
                            },
                            disableServiceEndpoint: {
                                setClientSettingEndpoint: {
                                    settingData: {
                                        clientSettingEnum: {item: 151},
                                        boolValue: !1
                                    }
                                }
                            }
                        }
                    });
                    n.subSettings.push(r)
                }
            });
            let e = new ae({
                backgroundPlayBackSettingRenderer: {
                    backgroundPlayback: !0,
                    download: !0,
                    downloadQualitySelection: !0,
                    smartDownload: !0,
                    icon: {iconType: 1093}
                }
            });
            return this.message.settingItems.push(e), this.needProcess = !0, this
        }
    }, pe = class extends B {
        player;
        next;

        constructor(e = Rt, n = "Watch") {
            super(e, n), this.player = new Y, this.next = new G
        }

        async pure() {
            for (let e of this.message.contents) e.player && (this.player.message = e.player, await this.player.pure()), e.next && (this.next.message = e.next, await this.next.pure()), this.needProcess = !0;
            return this
        }
    };
    var zn = new Map([["browse", L], ["next", G], ["player", Y], ["search", me], ["reel_watch_sequence", de], ["guide", fe], ["get_setting", le], ["get_watch", pe]]);

    function Ce(t) {
        for (let [e, n] of zn.entries()) if (t.includes(e)) return new n;
        return null
    }

    async function Qn() {
        let t = Ce(y.request.url);
        if (t) {
            let e = y.response.bodyBytes;
            y.timeStart("fromBinary"), t.fromBinary(e), y.timeEnd("fromBinary"), y.timeStart("modify"), await t.modify(), y.timeEnd("modify"), t.done()
        } else y.exit()
    }

    Qn().catch(t => {
        y.log(t.toString())
    }).finally(() => {
        y.exit()
    });
})();
