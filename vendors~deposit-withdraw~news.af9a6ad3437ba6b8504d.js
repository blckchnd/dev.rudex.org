(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[34],{

/***/ 2973:
/***/ (function(module, exports, __webpack_require__) {

var ciphers = __webpack_require__(2974)
var deciphers = __webpack_require__(2991)
var modes = __webpack_require__(2985)

function getCiphers () {
  return Object.keys(modes)
}

exports.createCipher = exports.Cipher = ciphers.createCipher
exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv
exports.createDecipher = exports.Decipher = deciphers.createDecipher
exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv
exports.listCiphers = exports.getCiphers = getCiphers


/***/ }),

/***/ 2974:
/***/ (function(module, exports, __webpack_require__) {

var MODES = __webpack_require__(2975)
var AuthCipher = __webpack_require__(2986)
var Buffer = __webpack_require__(424).Buffer
var StreamCipher = __webpack_require__(2989)
var Transform = __webpack_require__(486)
var aes = __webpack_require__(2987)
var ebtk = __webpack_require__(2990)
var inherits = __webpack_require__(448)

function Cipher (mode, key, iv) {
  Transform.call(this)

  this._cache = new Splitter()
  this._cipher = new aes.AES(key)
  this._prev = Buffer.from(iv)
  this._mode = mode
  this._autopadding = true
}

inherits(Cipher, Transform)

Cipher.prototype._update = function (data) {
  this._cache.add(data)
  var chunk
  var thing
  var out = []

  while ((chunk = this._cache.get())) {
    thing = this._mode.encrypt(this, chunk)
    out.push(thing)
  }

  return Buffer.concat(out)
}

var PADDING = Buffer.alloc(16, 0x10)

Cipher.prototype._final = function () {
  var chunk = this._cache.flush()
  if (this._autopadding) {
    chunk = this._mode.encrypt(this, chunk)
    this._cipher.scrub()
    return chunk
  }

  if (!chunk.equals(PADDING)) {
    this._cipher.scrub()
    throw new Error('data not multiple of block length')
  }
}

Cipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo
  return this
}

function Splitter () {
  this.cache = Buffer.allocUnsafe(0)
}

Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data])
}

Splitter.prototype.get = function () {
  if (this.cache.length > 15) {
    var out = this.cache.slice(0, 16)
    this.cache = this.cache.slice(16)
    return out
  }
  return null
}

Splitter.prototype.flush = function () {
  var len = 16 - this.cache.length
  var padBuff = Buffer.allocUnsafe(len)

  var i = -1
  while (++i < len) {
    padBuff.writeUInt8(len, i)
  }

  return Buffer.concat([this.cache, padBuff])
}

function createCipheriv (suite, password, iv) {
  var config = MODES[suite.toLowerCase()]
  if (!config) throw new TypeError('invalid suite type')

  if (typeof password === 'string') password = Buffer.from(password)
  if (password.length !== config.key / 8) throw new TypeError('invalid key length ' + password.length)

  if (typeof iv === 'string') iv = Buffer.from(iv)
  if (config.mode !== 'GCM' && iv.length !== config.iv) throw new TypeError('invalid iv length ' + iv.length)

  if (config.type === 'stream') {
    return new StreamCipher(config.module, password, iv)
  } else if (config.type === 'auth') {
    return new AuthCipher(config.module, password, iv)
  }

  return new Cipher(config.module, password, iv)
}

function createCipher (suite, password) {
  var config = MODES[suite.toLowerCase()]
  if (!config) throw new TypeError('invalid suite type')

  var keys = ebtk(password, false, config.key, config.iv)
  return createCipheriv(suite, keys.key, keys.iv)
}

exports.createCipheriv = createCipheriv
exports.createCipher = createCipher


/***/ }),

/***/ 2975:
/***/ (function(module, exports, __webpack_require__) {

var modeModules = {
  ECB: __webpack_require__(2976),
  CBC: __webpack_require__(2977),
  CFB: __webpack_require__(2979),
  CFB8: __webpack_require__(2980),
  CFB1: __webpack_require__(2981),
  OFB: __webpack_require__(2982),
  CTR: __webpack_require__(2983),
  GCM: __webpack_require__(2983)
}

var modes = __webpack_require__(2985)

for (var key in modes) {
  modes[key].module = modeModules[modes[key].mode]
}

module.exports = modes


/***/ }),

/***/ 2976:
/***/ (function(module, exports) {

exports.encrypt = function (self, block) {
  return self._cipher.encryptBlock(block)
}

exports.decrypt = function (self, block) {
  return self._cipher.decryptBlock(block)
}


/***/ }),

/***/ 2977:
/***/ (function(module, exports, __webpack_require__) {

var xor = __webpack_require__(2978)

exports.encrypt = function (self, block) {
  var data = xor(block, self._prev)

  self._prev = self._cipher.encryptBlock(data)
  return self._prev
}

exports.decrypt = function (self, block) {
  var pad = self._prev

  self._prev = block
  var out = self._cipher.decryptBlock(block)

  return xor(out, pad)
}


/***/ }),

/***/ 2978:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function xor (a, b) {
  var length = Math.min(a.length, b.length)
  var buffer = new Buffer(length)

  for (var i = 0; i < length; ++i) {
    buffer[i] = a[i] ^ b[i]
  }

  return buffer
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(425).Buffer))

/***/ }),

/***/ 2979:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(424).Buffer
var xor = __webpack_require__(2978)

function encryptStart (self, data, decrypt) {
  var len = data.length
  var out = xor(data, self._cache)
  self._cache = self._cache.slice(len)
  self._prev = Buffer.concat([self._prev, decrypt ? data : out])
  return out
}

exports.encrypt = function (self, data, decrypt) {
  var out = Buffer.allocUnsafe(0)
  var len

  while (data.length) {
    if (self._cache.length === 0) {
      self._cache = self._cipher.encryptBlock(self._prev)
      self._prev = Buffer.allocUnsafe(0)
    }

    if (self._cache.length <= data.length) {
      len = self._cache.length
      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)])
      data = data.slice(len)
    } else {
      out = Buffer.concat([out, encryptStart(self, data, decrypt)])
      break
    }
  }

  return out
}


/***/ }),

/***/ 2980:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(424).Buffer

function encryptByte (self, byteParam, decrypt) {
  var pad = self._cipher.encryptBlock(self._prev)
  var out = pad[0] ^ byteParam

  self._prev = Buffer.concat([
    self._prev.slice(1),
    Buffer.from([decrypt ? byteParam : out])
  ])

  return out
}

exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length
  var out = Buffer.allocUnsafe(len)
  var i = -1

  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt)
  }

  return out
}


/***/ }),

/***/ 2981:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(424).Buffer

function encryptByte (self, byteParam, decrypt) {
  var pad
  var i = -1
  var len = 8
  var out = 0
  var bit, value
  while (++i < len) {
    pad = self._cipher.encryptBlock(self._prev)
    bit = (byteParam & (1 << (7 - i))) ? 0x80 : 0
    value = pad[0] ^ bit
    out += ((value & 0x80) >> (i % 8))
    self._prev = shiftIn(self._prev, decrypt ? bit : value)
  }
  return out
}

function shiftIn (buffer, value) {
  var len = buffer.length
  var i = -1
  var out = Buffer.allocUnsafe(buffer.length)
  buffer = Buffer.concat([buffer, Buffer.from([value])])

  while (++i < len) {
    out[i] = buffer[i] << 1 | buffer[i + 1] >> (7)
  }

  return out
}

exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length
  var out = Buffer.allocUnsafe(len)
  var i = -1

  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt)
  }

  return out
}


/***/ }),

/***/ 2982:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(2978)

function getBlock (self) {
  self._prev = self._cipher.encryptBlock(self._prev)
  return self._prev
}

exports.encrypt = function (self, chunk) {
  while (self._cache.length < chunk.length) {
    self._cache = Buffer.concat([self._cache, getBlock(self)])
  }

  var pad = self._cache.slice(0, chunk.length)
  self._cache = self._cache.slice(chunk.length)
  return xor(chunk, pad)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(425).Buffer))

/***/ }),

/***/ 2983:
/***/ (function(module, exports, __webpack_require__) {

var xor = __webpack_require__(2978)
var Buffer = __webpack_require__(424).Buffer
var incr32 = __webpack_require__(2984)

function getBlock (self) {
  var out = self._cipher.encryptBlockRaw(self._prev)
  incr32(self._prev)
  return out
}

var blockSize = 16
exports.encrypt = function (self, chunk) {
  var chunkNum = Math.ceil(chunk.length / blockSize)
  var start = self._cache.length
  self._cache = Buffer.concat([
    self._cache,
    Buffer.allocUnsafe(chunkNum * blockSize)
  ])
  for (var i = 0; i < chunkNum; i++) {
    var out = getBlock(self)
    var offset = start + i * blockSize
    self._cache.writeUInt32BE(out[0], offset + 0)
    self._cache.writeUInt32BE(out[1], offset + 4)
    self._cache.writeUInt32BE(out[2], offset + 8)
    self._cache.writeUInt32BE(out[3], offset + 12)
  }
  var pad = self._cache.slice(0, chunk.length)
  self._cache = self._cache.slice(chunk.length)
  return xor(chunk, pad)
}


/***/ }),

/***/ 2984:
/***/ (function(module, exports) {

function incr32 (iv) {
  var len = iv.length
  var item
  while (len--) {
    item = iv.readUInt8(len)
    if (item === 255) {
      iv.writeUInt8(0, len)
    } else {
      item++
      iv.writeUInt8(item, len)
      break
    }
  }
}
module.exports = incr32


/***/ }),

/***/ 2985:
/***/ (function(module) {

module.exports = JSON.parse("{\"aes-128-ecb\":{\"cipher\":\"AES\",\"key\":128,\"iv\":0,\"mode\":\"ECB\",\"type\":\"block\"},\"aes-192-ecb\":{\"cipher\":\"AES\",\"key\":192,\"iv\":0,\"mode\":\"ECB\",\"type\":\"block\"},\"aes-256-ecb\":{\"cipher\":\"AES\",\"key\":256,\"iv\":0,\"mode\":\"ECB\",\"type\":\"block\"},\"aes-128-cbc\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes-192-cbc\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes-256-cbc\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes128\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes192\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes256\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CBC\",\"type\":\"block\"},\"aes-128-cfb\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CFB\",\"type\":\"stream\"},\"aes-192-cfb\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CFB\",\"type\":\"stream\"},\"aes-256-cfb\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CFB\",\"type\":\"stream\"},\"aes-128-cfb8\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CFB8\",\"type\":\"stream\"},\"aes-192-cfb8\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CFB8\",\"type\":\"stream\"},\"aes-256-cfb8\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CFB8\",\"type\":\"stream\"},\"aes-128-cfb1\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CFB1\",\"type\":\"stream\"},\"aes-192-cfb1\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CFB1\",\"type\":\"stream\"},\"aes-256-cfb1\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CFB1\",\"type\":\"stream\"},\"aes-128-ofb\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"OFB\",\"type\":\"stream\"},\"aes-192-ofb\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"OFB\",\"type\":\"stream\"},\"aes-256-ofb\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"OFB\",\"type\":\"stream\"},\"aes-128-ctr\":{\"cipher\":\"AES\",\"key\":128,\"iv\":16,\"mode\":\"CTR\",\"type\":\"stream\"},\"aes-192-ctr\":{\"cipher\":\"AES\",\"key\":192,\"iv\":16,\"mode\":\"CTR\",\"type\":\"stream\"},\"aes-256-ctr\":{\"cipher\":\"AES\",\"key\":256,\"iv\":16,\"mode\":\"CTR\",\"type\":\"stream\"},\"aes-128-gcm\":{\"cipher\":\"AES\",\"key\":128,\"iv\":12,\"mode\":\"GCM\",\"type\":\"auth\"},\"aes-192-gcm\":{\"cipher\":\"AES\",\"key\":192,\"iv\":12,\"mode\":\"GCM\",\"type\":\"auth\"},\"aes-256-gcm\":{\"cipher\":\"AES\",\"key\":256,\"iv\":12,\"mode\":\"GCM\",\"type\":\"auth\"}}");

/***/ }),

/***/ 2986:
/***/ (function(module, exports, __webpack_require__) {

var aes = __webpack_require__(2987)
var Buffer = __webpack_require__(424).Buffer
var Transform = __webpack_require__(486)
var inherits = __webpack_require__(448)
var GHASH = __webpack_require__(2988)
var xor = __webpack_require__(2978)
var incr32 = __webpack_require__(2984)

function xorTest (a, b) {
  var out = 0
  if (a.length !== b.length) out++

  var len = Math.min(a.length, b.length)
  for (var i = 0; i < len; ++i) {
    out += (a[i] ^ b[i])
  }

  return out
}

function calcIv (self, iv, ck) {
  if (iv.length === 12) {
    self._finID = Buffer.concat([iv, Buffer.from([0, 0, 0, 1])])
    return Buffer.concat([iv, Buffer.from([0, 0, 0, 2])])
  }
  var ghash = new GHASH(ck)
  var len = iv.length
  var toPad = len % 16
  ghash.update(iv)
  if (toPad) {
    toPad = 16 - toPad
    ghash.update(Buffer.alloc(toPad, 0))
  }
  ghash.update(Buffer.alloc(8, 0))
  var ivBits = len * 8
  var tail = Buffer.alloc(8)
  tail.writeUIntBE(ivBits, 0, 8)
  ghash.update(tail)
  self._finID = ghash.state
  var out = Buffer.from(self._finID)
  incr32(out)
  return out
}
function StreamCipher (mode, key, iv, decrypt) {
  Transform.call(this)

  var h = Buffer.alloc(4, 0)

  this._cipher = new aes.AES(key)
  var ck = this._cipher.encryptBlock(h)
  this._ghash = new GHASH(ck)
  iv = calcIv(this, iv, ck)

  this._prev = Buffer.from(iv)
  this._cache = Buffer.allocUnsafe(0)
  this._secCache = Buffer.allocUnsafe(0)
  this._decrypt = decrypt
  this._alen = 0
  this._len = 0
  this._mode = mode

  this._authTag = null
  this._called = false
}

inherits(StreamCipher, Transform)

StreamCipher.prototype._update = function (chunk) {
  if (!this._called && this._alen) {
    var rump = 16 - (this._alen % 16)
    if (rump < 16) {
      rump = Buffer.alloc(rump, 0)
      this._ghash.update(rump)
    }
  }

  this._called = true
  var out = this._mode.encrypt(this, chunk)
  if (this._decrypt) {
    this._ghash.update(chunk)
  } else {
    this._ghash.update(out)
  }
  this._len += chunk.length
  return out
}

StreamCipher.prototype._final = function () {
  if (this._decrypt && !this._authTag) throw new Error('Unsupported state or unable to authenticate data')

  var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID))
  if (this._decrypt && xorTest(tag, this._authTag)) throw new Error('Unsupported state or unable to authenticate data')

  this._authTag = tag
  this._cipher.scrub()
}

StreamCipher.prototype.getAuthTag = function getAuthTag () {
  if (this._decrypt || !Buffer.isBuffer(this._authTag)) throw new Error('Attempting to get auth tag in unsupported state')

  return this._authTag
}

StreamCipher.prototype.setAuthTag = function setAuthTag (tag) {
  if (!this._decrypt) throw new Error('Attempting to set auth tag in unsupported state')

  this._authTag = tag
}

StreamCipher.prototype.setAAD = function setAAD (buf) {
  if (this._called) throw new Error('Attempting to set AAD in unsupported state')

  this._ghash.update(buf)
  this._alen += buf.length
}

module.exports = StreamCipher


/***/ }),

/***/ 2987:
/***/ (function(module, exports, __webpack_require__) {

// based on the aes implimentation in triple sec
// https://github.com/keybase/triplesec
// which is in turn based on the one from crypto-js
// https://code.google.com/p/crypto-js/

var Buffer = __webpack_require__(424).Buffer

function asUInt32Array (buf) {
  if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)

  var len = (buf.length / 4) | 0
  var out = new Array(len)

  for (var i = 0; i < len; i++) {
    out[i] = buf.readUInt32BE(i * 4)
  }

  return out
}

function scrubVec (v) {
  for (var i = 0; i < v.length; v++) {
    v[i] = 0
  }
}

function cryptBlock (M, keySchedule, SUB_MIX, SBOX, nRounds) {
  var SUB_MIX0 = SUB_MIX[0]
  var SUB_MIX1 = SUB_MIX[1]
  var SUB_MIX2 = SUB_MIX[2]
  var SUB_MIX3 = SUB_MIX[3]

  var s0 = M[0] ^ keySchedule[0]
  var s1 = M[1] ^ keySchedule[1]
  var s2 = M[2] ^ keySchedule[2]
  var s3 = M[3] ^ keySchedule[3]
  var t0, t1, t2, t3
  var ksRow = 4

  for (var round = 1; round < nRounds; round++) {
    t0 = SUB_MIX0[s0 >>> 24] ^ SUB_MIX1[(s1 >>> 16) & 0xff] ^ SUB_MIX2[(s2 >>> 8) & 0xff] ^ SUB_MIX3[s3 & 0xff] ^ keySchedule[ksRow++]
    t1 = SUB_MIX0[s1 >>> 24] ^ SUB_MIX1[(s2 >>> 16) & 0xff] ^ SUB_MIX2[(s3 >>> 8) & 0xff] ^ SUB_MIX3[s0 & 0xff] ^ keySchedule[ksRow++]
    t2 = SUB_MIX0[s2 >>> 24] ^ SUB_MIX1[(s3 >>> 16) & 0xff] ^ SUB_MIX2[(s0 >>> 8) & 0xff] ^ SUB_MIX3[s1 & 0xff] ^ keySchedule[ksRow++]
    t3 = SUB_MIX0[s3 >>> 24] ^ SUB_MIX1[(s0 >>> 16) & 0xff] ^ SUB_MIX2[(s1 >>> 8) & 0xff] ^ SUB_MIX3[s2 & 0xff] ^ keySchedule[ksRow++]
    s0 = t0
    s1 = t1
    s2 = t2
    s3 = t3
  }

  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++]
  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++]
  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++]
  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]
  t0 = t0 >>> 0
  t1 = t1 >>> 0
  t2 = t2 >>> 0
  t3 = t3 >>> 0

  return [t0, t1, t2, t3]
}

// AES constants
var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36]
var G = (function () {
  // Compute double table
  var d = new Array(256)
  for (var j = 0; j < 256; j++) {
    if (j < 128) {
      d[j] = j << 1
    } else {
      d[j] = (j << 1) ^ 0x11b
    }
  }

  var SBOX = []
  var INV_SBOX = []
  var SUB_MIX = [[], [], [], []]
  var INV_SUB_MIX = [[], [], [], []]

  // Walk GF(2^8)
  var x = 0
  var xi = 0
  for (var i = 0; i < 256; ++i) {
    // Compute sbox
    var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4)
    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63
    SBOX[x] = sx
    INV_SBOX[sx] = x

    // Compute multiplication
    var x2 = d[x]
    var x4 = d[x2]
    var x8 = d[x4]

    // Compute sub bytes, mix columns tables
    var t = (d[sx] * 0x101) ^ (sx * 0x1010100)
    SUB_MIX[0][x] = (t << 24) | (t >>> 8)
    SUB_MIX[1][x] = (t << 16) | (t >>> 16)
    SUB_MIX[2][x] = (t << 8) | (t >>> 24)
    SUB_MIX[3][x] = t

    // Compute inv sub bytes, inv mix columns tables
    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100)
    INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8)
    INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16)
    INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24)
    INV_SUB_MIX[3][sx] = t

    if (x === 0) {
      x = xi = 1
    } else {
      x = x2 ^ d[d[d[x8 ^ x2]]]
      xi ^= d[d[xi]]
    }
  }

  return {
    SBOX: SBOX,
    INV_SBOX: INV_SBOX,
    SUB_MIX: SUB_MIX,
    INV_SUB_MIX: INV_SUB_MIX
  }
})()

function AES (key) {
  this._key = asUInt32Array(key)
  this._reset()
}

AES.blockSize = 4 * 4
AES.keySize = 256 / 8
AES.prototype.blockSize = AES.blockSize
AES.prototype.keySize = AES.keySize
AES.prototype._reset = function () {
  var keyWords = this._key
  var keySize = keyWords.length
  var nRounds = keySize + 6
  var ksRows = (nRounds + 1) * 4

  var keySchedule = []
  for (var k = 0; k < keySize; k++) {
    keySchedule[k] = keyWords[k]
  }

  for (k = keySize; k < ksRows; k++) {
    var t = keySchedule[k - 1]

    if (k % keySize === 0) {
      t = (t << 8) | (t >>> 24)
      t =
        (G.SBOX[t >>> 24] << 24) |
        (G.SBOX[(t >>> 16) & 0xff] << 16) |
        (G.SBOX[(t >>> 8) & 0xff] << 8) |
        (G.SBOX[t & 0xff])

      t ^= RCON[(k / keySize) | 0] << 24
    } else if (keySize > 6 && k % keySize === 4) {
      t =
        (G.SBOX[t >>> 24] << 24) |
        (G.SBOX[(t >>> 16) & 0xff] << 16) |
        (G.SBOX[(t >>> 8) & 0xff] << 8) |
        (G.SBOX[t & 0xff])
    }

    keySchedule[k] = keySchedule[k - keySize] ^ t
  }

  var invKeySchedule = []
  for (var ik = 0; ik < ksRows; ik++) {
    var ksR = ksRows - ik
    var tt = keySchedule[ksR - (ik % 4 ? 0 : 4)]

    if (ik < 4 || ksR <= 4) {
      invKeySchedule[ik] = tt
    } else {
      invKeySchedule[ik] =
        G.INV_SUB_MIX[0][G.SBOX[tt >>> 24]] ^
        G.INV_SUB_MIX[1][G.SBOX[(tt >>> 16) & 0xff]] ^
        G.INV_SUB_MIX[2][G.SBOX[(tt >>> 8) & 0xff]] ^
        G.INV_SUB_MIX[3][G.SBOX[tt & 0xff]]
    }
  }

  this._nRounds = nRounds
  this._keySchedule = keySchedule
  this._invKeySchedule = invKeySchedule
}

AES.prototype.encryptBlockRaw = function (M) {
  M = asUInt32Array(M)
  return cryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX, this._nRounds)
}

AES.prototype.encryptBlock = function (M) {
  var out = this.encryptBlockRaw(M)
  var buf = Buffer.allocUnsafe(16)
  buf.writeUInt32BE(out[0], 0)
  buf.writeUInt32BE(out[1], 4)
  buf.writeUInt32BE(out[2], 8)
  buf.writeUInt32BE(out[3], 12)
  return buf
}

AES.prototype.decryptBlock = function (M) {
  M = asUInt32Array(M)

  // swap
  var m1 = M[1]
  M[1] = M[3]
  M[3] = m1

  var out = cryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX, this._nRounds)
  var buf = Buffer.allocUnsafe(16)
  buf.writeUInt32BE(out[0], 0)
  buf.writeUInt32BE(out[3], 4)
  buf.writeUInt32BE(out[2], 8)
  buf.writeUInt32BE(out[1], 12)
  return buf
}

AES.prototype.scrub = function () {
  scrubVec(this._keySchedule)
  scrubVec(this._invKeySchedule)
  scrubVec(this._key)
}

module.exports.AES = AES


/***/ }),

/***/ 2988:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(424).Buffer
var ZEROES = Buffer.alloc(16, 0)

function toArray (buf) {
  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ]
}

function fromArray (out) {
  var buf = Buffer.allocUnsafe(16)
  buf.writeUInt32BE(out[0] >>> 0, 0)
  buf.writeUInt32BE(out[1] >>> 0, 4)
  buf.writeUInt32BE(out[2] >>> 0, 8)
  buf.writeUInt32BE(out[3] >>> 0, 12)
  return buf
}

function GHASH (key) {
  this.h = key
  this.state = Buffer.alloc(16, 0)
  this.cache = Buffer.allocUnsafe(0)
}

// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
// by Juho Vähä-Herttua
GHASH.prototype.ghash = function (block) {
  var i = -1
  while (++i < block.length) {
    this.state[i] ^= block[i]
  }
  this._multiply()
}

GHASH.prototype._multiply = function () {
  var Vi = toArray(this.h)
  var Zi = [0, 0, 0, 0]
  var j, xi, lsbVi
  var i = -1
  while (++i < 128) {
    xi = (this.state[~~(i / 8)] & (1 << (7 - (i % 8)))) !== 0
    if (xi) {
      // Z_i+1 = Z_i ^ V_i
      Zi[0] ^= Vi[0]
      Zi[1] ^= Vi[1]
      Zi[2] ^= Vi[2]
      Zi[3] ^= Vi[3]
    }

    // Store the value of LSB(V_i)
    lsbVi = (Vi[3] & 1) !== 0

    // V_i+1 = V_i >> 1
    for (j = 3; j > 0; j--) {
      Vi[j] = (Vi[j] >>> 1) | ((Vi[j - 1] & 1) << 31)
    }
    Vi[0] = Vi[0] >>> 1

    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
    if (lsbVi) {
      Vi[0] = Vi[0] ^ (0xe1 << 24)
    }
  }
  this.state = fromArray(Zi)
}

GHASH.prototype.update = function (buf) {
  this.cache = Buffer.concat([this.cache, buf])
  var chunk
  while (this.cache.length >= 16) {
    chunk = this.cache.slice(0, 16)
    this.cache = this.cache.slice(16)
    this.ghash(chunk)
  }
}

GHASH.prototype.final = function (abl, bl) {
  if (this.cache.length) {
    this.ghash(Buffer.concat([this.cache, ZEROES], 16))
  }

  this.ghash(fromArray([0, abl, 0, bl]))
  return this.state
}

module.exports = GHASH


/***/ }),

/***/ 2989:
/***/ (function(module, exports, __webpack_require__) {

var aes = __webpack_require__(2987)
var Buffer = __webpack_require__(424).Buffer
var Transform = __webpack_require__(486)
var inherits = __webpack_require__(448)

function StreamCipher (mode, key, iv, decrypt) {
  Transform.call(this)

  this._cipher = new aes.AES(key)
  this._prev = Buffer.from(iv)
  this._cache = Buffer.allocUnsafe(0)
  this._secCache = Buffer.allocUnsafe(0)
  this._decrypt = decrypt
  this._mode = mode
}

inherits(StreamCipher, Transform)

StreamCipher.prototype._update = function (chunk) {
  return this._mode.encrypt(this, chunk, this._decrypt)
}

StreamCipher.prototype._final = function () {
  this._cipher.scrub()
}

module.exports = StreamCipher


/***/ }),

/***/ 2990:
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(424).Buffer
var MD5 = __webpack_require__(449)

/* eslint-disable camelcase */
function EVP_BytesToKey (password, salt, keyBits, ivLen) {
  if (!Buffer.isBuffer(password)) password = Buffer.from(password, 'binary')
  if (salt) {
    if (!Buffer.isBuffer(salt)) salt = Buffer.from(salt, 'binary')
    if (salt.length !== 8) throw new RangeError('salt should be Buffer with 8 byte length')
  }

  var keyLen = keyBits / 8
  var key = Buffer.alloc(keyLen)
  var iv = Buffer.alloc(ivLen || 0)
  var tmp = Buffer.alloc(0)

  while (keyLen > 0 || ivLen > 0) {
    var hash = new MD5()
    hash.update(tmp)
    hash.update(password)
    if (salt) hash.update(salt)
    tmp = hash.digest()

    var used = 0

    if (keyLen > 0) {
      var keyStart = key.length - keyLen
      used = Math.min(keyLen, tmp.length)
      tmp.copy(key, keyStart, 0, used)
      keyLen -= used
    }

    if (used < tmp.length && ivLen > 0) {
      var ivStart = iv.length - ivLen
      var length = Math.min(ivLen, tmp.length - used)
      tmp.copy(iv, ivStart, used, used + length)
      ivLen -= length
    }
  }

  tmp.fill(0)
  return { key: key, iv: iv }
}

module.exports = EVP_BytesToKey


/***/ }),

/***/ 2991:
/***/ (function(module, exports, __webpack_require__) {

var AuthCipher = __webpack_require__(2986)
var Buffer = __webpack_require__(424).Buffer
var MODES = __webpack_require__(2975)
var StreamCipher = __webpack_require__(2989)
var Transform = __webpack_require__(486)
var aes = __webpack_require__(2987)
var ebtk = __webpack_require__(2990)
var inherits = __webpack_require__(448)

function Decipher (mode, key, iv) {
  Transform.call(this)

  this._cache = new Splitter()
  this._last = void 0
  this._cipher = new aes.AES(key)
  this._prev = Buffer.from(iv)
  this._mode = mode
  this._autopadding = true
}

inherits(Decipher, Transform)

Decipher.prototype._update = function (data) {
  this._cache.add(data)
  var chunk
  var thing
  var out = []
  while ((chunk = this._cache.get(this._autopadding))) {
    thing = this._mode.decrypt(this, chunk)
    out.push(thing)
  }
  return Buffer.concat(out)
}

Decipher.prototype._final = function () {
  var chunk = this._cache.flush()
  if (this._autopadding) {
    return unpad(this._mode.decrypt(this, chunk))
  } else if (chunk) {
    throw new Error('data not multiple of block length')
  }
}

Decipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo
  return this
}

function Splitter () {
  this.cache = Buffer.allocUnsafe(0)
}

Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data])
}

Splitter.prototype.get = function (autoPadding) {
  var out
  if (autoPadding) {
    if (this.cache.length > 16) {
      out = this.cache.slice(0, 16)
      this.cache = this.cache.slice(16)
      return out
    }
  } else {
    if (this.cache.length >= 16) {
      out = this.cache.slice(0, 16)
      this.cache = this.cache.slice(16)
      return out
    }
  }

  return null
}

Splitter.prototype.flush = function () {
  if (this.cache.length) return this.cache
}

function unpad (last) {
  var padded = last[15]
  if (padded < 1 || padded > 16) {
    throw new Error('unable to decrypt data')
  }
  var i = -1
  while (++i < padded) {
    if (last[(i + (16 - padded))] !== padded) {
      throw new Error('unable to decrypt data')
    }
  }
  if (padded === 16) return

  return last.slice(0, 16 - padded)
}

function createDecipheriv (suite, password, iv) {
  var config = MODES[suite.toLowerCase()]
  if (!config) throw new TypeError('invalid suite type')

  if (typeof iv === 'string') iv = Buffer.from(iv)
  if (config.mode !== 'GCM' && iv.length !== config.iv) throw new TypeError('invalid iv length ' + iv.length)

  if (typeof password === 'string') password = Buffer.from(password)
  if (password.length !== config.key / 8) throw new TypeError('invalid key length ' + password.length)

  if (config.type === 'stream') {
    return new StreamCipher(config.module, password, iv, true)
  } else if (config.type === 'auth') {
    return new AuthCipher(config.module, password, iv, true)
  }

  return new Decipher(config.module, password, iv)
}

function createDecipher (suite, password) {
  var config = MODES[suite.toLowerCase()]
  if (!config) throw new TypeError('invalid suite type')

  var keys = ebtk(password, false, config.key, config.iv)
  return createDecipheriv(suite, keys.key, keys.iv)
}

exports.createDecipher = createDecipher
exports.createDecipheriv = createDecipheriv


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kZXBvc2l0LXdpdGhkcmF3fm5ld3MuYWY5YTZhZDM0MzdiYTZiODUwNGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvZW5jcnlwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWFlcy9tb2Rlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvbW9kZXMvZWNiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWFlcy9tb2Rlcy9jYmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci14b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktYWVzL21vZGVzL2NmYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvbW9kZXMvY2ZiOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvbW9kZXMvY2ZiMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvbW9kZXMvb2ZiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWFlcy9tb2Rlcy9jdHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktYWVzL2luY3IzMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvYXV0aENpcGhlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvYWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWFlcy9naGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvc3RyZWFtQ2lwaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldnBfYnl0ZXN0b2tleS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1hZXMvZGVjcnlwdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjaXBoZXJzID0gcmVxdWlyZSgnLi9lbmNyeXB0ZXInKVxudmFyIGRlY2lwaGVycyA9IHJlcXVpcmUoJy4vZGVjcnlwdGVyJylcbnZhciBtb2RlcyA9IHJlcXVpcmUoJy4vbW9kZXMvbGlzdC5qc29uJylcblxuZnVuY3Rpb24gZ2V0Q2lwaGVycyAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2Rlcylcbn1cblxuZXhwb3J0cy5jcmVhdGVDaXBoZXIgPSBleHBvcnRzLkNpcGhlciA9IGNpcGhlcnMuY3JlYXRlQ2lwaGVyXG5leHBvcnRzLmNyZWF0ZUNpcGhlcml2ID0gZXhwb3J0cy5DaXBoZXJpdiA9IGNpcGhlcnMuY3JlYXRlQ2lwaGVyaXZcbmV4cG9ydHMuY3JlYXRlRGVjaXBoZXIgPSBleHBvcnRzLkRlY2lwaGVyID0gZGVjaXBoZXJzLmNyZWF0ZURlY2lwaGVyXG5leHBvcnRzLmNyZWF0ZURlY2lwaGVyaXYgPSBleHBvcnRzLkRlY2lwaGVyaXYgPSBkZWNpcGhlcnMuY3JlYXRlRGVjaXBoZXJpdlxuZXhwb3J0cy5saXN0Q2lwaGVycyA9IGV4cG9ydHMuZ2V0Q2lwaGVycyA9IGdldENpcGhlcnNcbiIsInZhciBNT0RFUyA9IHJlcXVpcmUoJy4vbW9kZXMnKVxudmFyIEF1dGhDaXBoZXIgPSByZXF1aXJlKCcuL2F1dGhDaXBoZXInKVxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyXG52YXIgU3RyZWFtQ2lwaGVyID0gcmVxdWlyZSgnLi9zdHJlYW1DaXBoZXInKVxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJ2NpcGhlci1iYXNlJylcbnZhciBhZXMgPSByZXF1aXJlKCcuL2FlcycpXG52YXIgZWJ0ayA9IHJlcXVpcmUoJ2V2cF9ieXRlc3Rva2V5JylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxuZnVuY3Rpb24gQ2lwaGVyIChtb2RlLCBrZXksIGl2KSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMpXG5cbiAgdGhpcy5fY2FjaGUgPSBuZXcgU3BsaXR0ZXIoKVxuICB0aGlzLl9jaXBoZXIgPSBuZXcgYWVzLkFFUyhrZXkpXG4gIHRoaXMuX3ByZXYgPSBCdWZmZXIuZnJvbShpdilcbiAgdGhpcy5fbW9kZSA9IG1vZGVcbiAgdGhpcy5fYXV0b3BhZGRpbmcgPSB0cnVlXG59XG5cbmluaGVyaXRzKENpcGhlciwgVHJhbnNmb3JtKVxuXG5DaXBoZXIucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLl9jYWNoZS5hZGQoZGF0YSlcbiAgdmFyIGNodW5rXG4gIHZhciB0aGluZ1xuICB2YXIgb3V0ID0gW11cblxuICB3aGlsZSAoKGNodW5rID0gdGhpcy5fY2FjaGUuZ2V0KCkpKSB7XG4gICAgdGhpbmcgPSB0aGlzLl9tb2RlLmVuY3J5cHQodGhpcywgY2h1bmspXG4gICAgb3V0LnB1c2godGhpbmcpXG4gIH1cblxuICByZXR1cm4gQnVmZmVyLmNvbmNhdChvdXQpXG59XG5cbnZhciBQQURESU5HID0gQnVmZmVyLmFsbG9jKDE2LCAweDEwKVxuXG5DaXBoZXIucHJvdG90eXBlLl9maW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNodW5rID0gdGhpcy5fY2FjaGUuZmx1c2goKVxuICBpZiAodGhpcy5fYXV0b3BhZGRpbmcpIHtcbiAgICBjaHVuayA9IHRoaXMuX21vZGUuZW5jcnlwdCh0aGlzLCBjaHVuaylcbiAgICB0aGlzLl9jaXBoZXIuc2NydWIoKVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgaWYgKCFjaHVuay5lcXVhbHMoUEFERElORykpIHtcbiAgICB0aGlzLl9jaXBoZXIuc2NydWIoKVxuICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBub3QgbXVsdGlwbGUgb2YgYmxvY2sgbGVuZ3RoJylcbiAgfVxufVxuXG5DaXBoZXIucHJvdG90eXBlLnNldEF1dG9QYWRkaW5nID0gZnVuY3Rpb24gKHNldFRvKSB7XG4gIHRoaXMuX2F1dG9wYWRkaW5nID0gISFzZXRUb1xuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBTcGxpdHRlciAoKSB7XG4gIHRoaXMuY2FjaGUgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMClcbn1cblxuU3BsaXR0ZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuY2FjaGUgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmNhY2hlLCBkYXRhXSlcbn1cblxuU3BsaXR0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoID4gMTUpIHtcbiAgICB2YXIgb3V0ID0gdGhpcy5jYWNoZS5zbGljZSgwLCAxNilcbiAgICB0aGlzLmNhY2hlID0gdGhpcy5jYWNoZS5zbGljZSgxNilcbiAgICByZXR1cm4gb3V0XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuU3BsaXR0ZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuID0gMTYgLSB0aGlzLmNhY2hlLmxlbmd0aFxuICB2YXIgcGFkQnVmZiA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW4pXG5cbiAgdmFyIGkgPSAtMVxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgcGFkQnVmZi53cml0ZVVJbnQ4KGxlbiwgaSlcbiAgfVxuXG4gIHJldHVybiBCdWZmZXIuY29uY2F0KFt0aGlzLmNhY2hlLCBwYWRCdWZmXSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lwaGVyaXYgKHN1aXRlLCBwYXNzd29yZCwgaXYpIHtcbiAgdmFyIGNvbmZpZyA9IE1PREVTW3N1aXRlLnRvTG93ZXJDYXNlKCldXG4gIGlmICghY29uZmlnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKVxuXG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnKSBwYXNzd29yZCA9IEJ1ZmZlci5mcm9tKHBhc3N3b3JkKVxuICBpZiAocGFzc3dvcmQubGVuZ3RoICE9PSBjb25maWcua2V5IC8gOCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBrZXkgbGVuZ3RoICcgKyBwYXNzd29yZC5sZW5ndGgpXG5cbiAgaWYgKHR5cGVvZiBpdiA9PT0gJ3N0cmluZycpIGl2ID0gQnVmZmVyLmZyb20oaXYpXG4gIGlmIChjb25maWcubW9kZSAhPT0gJ0dDTScgJiYgaXYubGVuZ3RoICE9PSBjb25maWcuaXYpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgaXYgbGVuZ3RoICcgKyBpdi5sZW5ndGgpXG5cbiAgaWYgKGNvbmZpZy50eXBlID09PSAnc3RyZWFtJykge1xuICAgIHJldHVybiBuZXcgU3RyZWFtQ2lwaGVyKGNvbmZpZy5tb2R1bGUsIHBhc3N3b3JkLCBpdilcbiAgfSBlbHNlIGlmIChjb25maWcudHlwZSA9PT0gJ2F1dGgnKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRoQ2lwaGVyKGNvbmZpZy5tb2R1bGUsIHBhc3N3b3JkLCBpdilcbiAgfVxuXG4gIHJldHVybiBuZXcgQ2lwaGVyKGNvbmZpZy5tb2R1bGUsIHBhc3N3b3JkLCBpdilcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lwaGVyIChzdWl0ZSwgcGFzc3dvcmQpIHtcbiAgdmFyIGNvbmZpZyA9IE1PREVTW3N1aXRlLnRvTG93ZXJDYXNlKCldXG4gIGlmICghY29uZmlnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKVxuXG4gIHZhciBrZXlzID0gZWJ0ayhwYXNzd29yZCwgZmFsc2UsIGNvbmZpZy5rZXksIGNvbmZpZy5pdilcbiAgcmV0dXJuIGNyZWF0ZUNpcGhlcml2KHN1aXRlLCBrZXlzLmtleSwga2V5cy5pdilcbn1cblxuZXhwb3J0cy5jcmVhdGVDaXBoZXJpdiA9IGNyZWF0ZUNpcGhlcml2XG5leHBvcnRzLmNyZWF0ZUNpcGhlciA9IGNyZWF0ZUNpcGhlclxuIiwidmFyIG1vZGVNb2R1bGVzID0ge1xuICBFQ0I6IHJlcXVpcmUoJy4vZWNiJyksXG4gIENCQzogcmVxdWlyZSgnLi9jYmMnKSxcbiAgQ0ZCOiByZXF1aXJlKCcuL2NmYicpLFxuICBDRkI4OiByZXF1aXJlKCcuL2NmYjgnKSxcbiAgQ0ZCMTogcmVxdWlyZSgnLi9jZmIxJyksXG4gIE9GQjogcmVxdWlyZSgnLi9vZmInKSxcbiAgQ1RSOiByZXF1aXJlKCcuL2N0cicpLFxuICBHQ006IHJlcXVpcmUoJy4vY3RyJylcbn1cblxudmFyIG1vZGVzID0gcmVxdWlyZSgnLi9saXN0Lmpzb24nKVxuXG5mb3IgKHZhciBrZXkgaW4gbW9kZXMpIHtcbiAgbW9kZXNba2V5XS5tb2R1bGUgPSBtb2RlTW9kdWxlc1ttb2Rlc1trZXldLm1vZGVdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kZXNcbiIsImV4cG9ydHMuZW5jcnlwdCA9IGZ1bmN0aW9uIChzZWxmLCBibG9jaykge1xuICByZXR1cm4gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9jayhibG9jaylcbn1cblxuZXhwb3J0cy5kZWNyeXB0ID0gZnVuY3Rpb24gKHNlbGYsIGJsb2NrKSB7XG4gIHJldHVybiBzZWxmLl9jaXBoZXIuZGVjcnlwdEJsb2NrKGJsb2NrKVxufVxuIiwidmFyIHhvciA9IHJlcXVpcmUoJ2J1ZmZlci14b3InKVxuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgYmxvY2spIHtcbiAgdmFyIGRhdGEgPSB4b3IoYmxvY2ssIHNlbGYuX3ByZXYpXG5cbiAgc2VsZi5fcHJldiA9IHNlbGYuX2NpcGhlci5lbmNyeXB0QmxvY2soZGF0YSlcbiAgcmV0dXJuIHNlbGYuX3ByZXZcbn1cblxuZXhwb3J0cy5kZWNyeXB0ID0gZnVuY3Rpb24gKHNlbGYsIGJsb2NrKSB7XG4gIHZhciBwYWQgPSBzZWxmLl9wcmV2XG5cbiAgc2VsZi5fcHJldiA9IGJsb2NrXG4gIHZhciBvdXQgPSBzZWxmLl9jaXBoZXIuZGVjcnlwdEJsb2NrKGJsb2NrKVxuXG4gIHJldHVybiB4b3Iob3V0LCBwYWQpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhvciAoYSwgYikge1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICB2YXIgYnVmZmVyID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGJ1ZmZlcltpXSA9IGFbaV0gXiBiW2ldXG4gIH1cblxuICByZXR1cm4gYnVmZmVyXG59XG4iLCJ2YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcbnZhciB4b3IgPSByZXF1aXJlKCdidWZmZXIteG9yJylcblxuZnVuY3Rpb24gZW5jcnlwdFN0YXJ0IChzZWxmLCBkYXRhLCBkZWNyeXB0KSB7XG4gIHZhciBsZW4gPSBkYXRhLmxlbmd0aFxuICB2YXIgb3V0ID0geG9yKGRhdGEsIHNlbGYuX2NhY2hlKVxuICBzZWxmLl9jYWNoZSA9IHNlbGYuX2NhY2hlLnNsaWNlKGxlbilcbiAgc2VsZi5fcHJldiA9IEJ1ZmZlci5jb25jYXQoW3NlbGYuX3ByZXYsIGRlY3J5cHQgPyBkYXRhIDogb3V0XSlcbiAgcmV0dXJuIG91dFxufVxuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgZGF0YSwgZGVjcnlwdCkge1xuICB2YXIgb3V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKDApXG4gIHZhciBsZW5cblxuICB3aGlsZSAoZGF0YS5sZW5ndGgpIHtcbiAgICBpZiAoc2VsZi5fY2FjaGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZWxmLl9jYWNoZSA9IHNlbGYuX2NpcGhlci5lbmNyeXB0QmxvY2soc2VsZi5fcHJldilcbiAgICAgIHNlbGYuX3ByZXYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMClcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fY2FjaGUubGVuZ3RoIDw9IGRhdGEubGVuZ3RoKSB7XG4gICAgICBsZW4gPSBzZWxmLl9jYWNoZS5sZW5ndGhcbiAgICAgIG91dCA9IEJ1ZmZlci5jb25jYXQoW291dCwgZW5jcnlwdFN0YXJ0KHNlbGYsIGRhdGEuc2xpY2UoMCwgbGVuKSwgZGVjcnlwdCldKVxuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UobGVuKVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBCdWZmZXIuY29uY2F0KFtvdXQsIGVuY3J5cHRTdGFydChzZWxmLCBkYXRhLCBkZWNyeXB0KV0pXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRcbn1cbiIsInZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG5mdW5jdGlvbiBlbmNyeXB0Qnl0ZSAoc2VsZiwgYnl0ZVBhcmFtLCBkZWNyeXB0KSB7XG4gIHZhciBwYWQgPSBzZWxmLl9jaXBoZXIuZW5jcnlwdEJsb2NrKHNlbGYuX3ByZXYpXG4gIHZhciBvdXQgPSBwYWRbMF0gXiBieXRlUGFyYW1cblxuICBzZWxmLl9wcmV2ID0gQnVmZmVyLmNvbmNhdChbXG4gICAgc2VsZi5fcHJldi5zbGljZSgxKSxcbiAgICBCdWZmZXIuZnJvbShbZGVjcnlwdCA/IGJ5dGVQYXJhbSA6IG91dF0pXG4gIF0pXG5cbiAgcmV0dXJuIG91dFxufVxuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgY2h1bmssIGRlY3J5cHQpIHtcbiAgdmFyIGxlbiA9IGNodW5rLmxlbmd0aFxuICB2YXIgb3V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbilcbiAgdmFyIGkgPSAtMVxuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBvdXRbaV0gPSBlbmNyeXB0Qnl0ZShzZWxmLCBjaHVua1tpXSwgZGVjcnlwdClcbiAgfVxuXG4gIHJldHVybiBvdXRcbn1cbiIsInZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG5mdW5jdGlvbiBlbmNyeXB0Qnl0ZSAoc2VsZiwgYnl0ZVBhcmFtLCBkZWNyeXB0KSB7XG4gIHZhciBwYWRcbiAgdmFyIGkgPSAtMVxuICB2YXIgbGVuID0gOFxuICB2YXIgb3V0ID0gMFxuICB2YXIgYml0LCB2YWx1ZVxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgcGFkID0gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9jayhzZWxmLl9wcmV2KVxuICAgIGJpdCA9IChieXRlUGFyYW0gJiAoMSA8PCAoNyAtIGkpKSkgPyAweDgwIDogMFxuICAgIHZhbHVlID0gcGFkWzBdIF4gYml0XG4gICAgb3V0ICs9ICgodmFsdWUgJiAweDgwKSA+PiAoaSAlIDgpKVxuICAgIHNlbGYuX3ByZXYgPSBzaGlmdEluKHNlbGYuX3ByZXYsIGRlY3J5cHQgPyBiaXQgOiB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHNoaWZ0SW4gKGJ1ZmZlciwgdmFsdWUpIHtcbiAgdmFyIGxlbiA9IGJ1ZmZlci5sZW5ndGhcbiAgdmFyIGkgPSAtMVxuICB2YXIgb3V0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ1ZmZlci5sZW5ndGgpXG4gIGJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoW2J1ZmZlciwgQnVmZmVyLmZyb20oW3ZhbHVlXSldKVxuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBvdXRbaV0gPSBidWZmZXJbaV0gPDwgMSB8IGJ1ZmZlcltpICsgMV0gPj4gKDcpXG4gIH1cblxuICByZXR1cm4gb3V0XG59XG5cbmV4cG9ydHMuZW5jcnlwdCA9IGZ1bmN0aW9uIChzZWxmLCBjaHVuaywgZGVjcnlwdCkge1xuICB2YXIgbGVuID0gY2h1bmsubGVuZ3RoXG4gIHZhciBvdXQgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuKVxuICB2YXIgaSA9IC0xXG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIG91dFtpXSA9IGVuY3J5cHRCeXRlKHNlbGYsIGNodW5rW2ldLCBkZWNyeXB0KVxuICB9XG5cbiAgcmV0dXJuIG91dFxufVxuIiwidmFyIHhvciA9IHJlcXVpcmUoJ2J1ZmZlci14b3InKVxuXG5mdW5jdGlvbiBnZXRCbG9jayAoc2VsZikge1xuICBzZWxmLl9wcmV2ID0gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9jayhzZWxmLl9wcmV2KVxuICByZXR1cm4gc2VsZi5fcHJldlxufVxuXG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgY2h1bmspIHtcbiAgd2hpbGUgKHNlbGYuX2NhY2hlLmxlbmd0aCA8IGNodW5rLmxlbmd0aCkge1xuICAgIHNlbGYuX2NhY2hlID0gQnVmZmVyLmNvbmNhdChbc2VsZi5fY2FjaGUsIGdldEJsb2NrKHNlbGYpXSlcbiAgfVxuXG4gIHZhciBwYWQgPSBzZWxmLl9jYWNoZS5zbGljZSgwLCBjaHVuay5sZW5ndGgpXG4gIHNlbGYuX2NhY2hlID0gc2VsZi5fY2FjaGUuc2xpY2UoY2h1bmsubGVuZ3RoKVxuICByZXR1cm4geG9yKGNodW5rLCBwYWQpXG59XG4iLCJ2YXIgeG9yID0gcmVxdWlyZSgnYnVmZmVyLXhvcicpXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcbnZhciBpbmNyMzIgPSByZXF1aXJlKCcuLi9pbmNyMzInKVxuXG5mdW5jdGlvbiBnZXRCbG9jayAoc2VsZikge1xuICB2YXIgb3V0ID0gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9ja1JhdyhzZWxmLl9wcmV2KVxuICBpbmNyMzIoc2VsZi5fcHJldilcbiAgcmV0dXJuIG91dFxufVxuXG52YXIgYmxvY2tTaXplID0gMTZcbmV4cG9ydHMuZW5jcnlwdCA9IGZ1bmN0aW9uIChzZWxmLCBjaHVuaykge1xuICB2YXIgY2h1bmtOdW0gPSBNYXRoLmNlaWwoY2h1bmsubGVuZ3RoIC8gYmxvY2tTaXplKVxuICB2YXIgc3RhcnQgPSBzZWxmLl9jYWNoZS5sZW5ndGhcbiAgc2VsZi5fY2FjaGUgPSBCdWZmZXIuY29uY2F0KFtcbiAgICBzZWxmLl9jYWNoZSxcbiAgICBCdWZmZXIuYWxsb2NVbnNhZmUoY2h1bmtOdW0gKiBibG9ja1NpemUpXG4gIF0pXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtOdW07IGkrKykge1xuICAgIHZhciBvdXQgPSBnZXRCbG9jayhzZWxmKVxuICAgIHZhciBvZmZzZXQgPSBzdGFydCArIGkgKiBibG9ja1NpemVcbiAgICBzZWxmLl9jYWNoZS53cml0ZVVJbnQzMkJFKG91dFswXSwgb2Zmc2V0ICsgMClcbiAgICBzZWxmLl9jYWNoZS53cml0ZVVJbnQzMkJFKG91dFsxXSwgb2Zmc2V0ICsgNClcbiAgICBzZWxmLl9jYWNoZS53cml0ZVVJbnQzMkJFKG91dFsyXSwgb2Zmc2V0ICsgOClcbiAgICBzZWxmLl9jYWNoZS53cml0ZVVJbnQzMkJFKG91dFszXSwgb2Zmc2V0ICsgMTIpXG4gIH1cbiAgdmFyIHBhZCA9IHNlbGYuX2NhY2hlLnNsaWNlKDAsIGNodW5rLmxlbmd0aClcbiAgc2VsZi5fY2FjaGUgPSBzZWxmLl9jYWNoZS5zbGljZShjaHVuay5sZW5ndGgpXG4gIHJldHVybiB4b3IoY2h1bmssIHBhZClcbn1cbiIsImZ1bmN0aW9uIGluY3IzMiAoaXYpIHtcbiAgdmFyIGxlbiA9IGl2Lmxlbmd0aFxuICB2YXIgaXRlbVxuICB3aGlsZSAobGVuLS0pIHtcbiAgICBpdGVtID0gaXYucmVhZFVJbnQ4KGxlbilcbiAgICBpZiAoaXRlbSA9PT0gMjU1KSB7XG4gICAgICBpdi53cml0ZVVJbnQ4KDAsIGxlbilcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbSsrXG4gICAgICBpdi53cml0ZVVJbnQ4KGl0ZW0sIGxlbilcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluY3IzMlxuIiwidmFyIGFlcyA9IHJlcXVpcmUoJy4vYWVzJylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJ2NpcGhlci1iYXNlJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBHSEFTSCA9IHJlcXVpcmUoJy4vZ2hhc2gnKVxudmFyIHhvciA9IHJlcXVpcmUoJ2J1ZmZlci14b3InKVxudmFyIGluY3IzMiA9IHJlcXVpcmUoJy4vaW5jcjMyJylcblxuZnVuY3Rpb24geG9yVGVzdCAoYSwgYikge1xuICB2YXIgb3V0ID0gMFxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSBvdXQrK1xuXG4gIHZhciBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBvdXQgKz0gKGFbaV0gXiBiW2ldKVxuICB9XG5cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBjYWxjSXYgKHNlbGYsIGl2LCBjaykge1xuICBpZiAoaXYubGVuZ3RoID09PSAxMikge1xuICAgIHNlbGYuX2ZpbklEID0gQnVmZmVyLmNvbmNhdChbaXYsIEJ1ZmZlci5mcm9tKFswLCAwLCAwLCAxXSldKVxuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtpdiwgQnVmZmVyLmZyb20oWzAsIDAsIDAsIDJdKV0pXG4gIH1cbiAgdmFyIGdoYXNoID0gbmV3IEdIQVNIKGNrKVxuICB2YXIgbGVuID0gaXYubGVuZ3RoXG4gIHZhciB0b1BhZCA9IGxlbiAlIDE2XG4gIGdoYXNoLnVwZGF0ZShpdilcbiAgaWYgKHRvUGFkKSB7XG4gICAgdG9QYWQgPSAxNiAtIHRvUGFkXG4gICAgZ2hhc2gudXBkYXRlKEJ1ZmZlci5hbGxvYyh0b1BhZCwgMCkpXG4gIH1cbiAgZ2hhc2gudXBkYXRlKEJ1ZmZlci5hbGxvYyg4LCAwKSlcbiAgdmFyIGl2Qml0cyA9IGxlbiAqIDhcbiAgdmFyIHRhaWwgPSBCdWZmZXIuYWxsb2MoOClcbiAgdGFpbC53cml0ZVVJbnRCRShpdkJpdHMsIDAsIDgpXG4gIGdoYXNoLnVwZGF0ZSh0YWlsKVxuICBzZWxmLl9maW5JRCA9IGdoYXNoLnN0YXRlXG4gIHZhciBvdXQgPSBCdWZmZXIuZnJvbShzZWxmLl9maW5JRClcbiAgaW5jcjMyKG91dClcbiAgcmV0dXJuIG91dFxufVxuZnVuY3Rpb24gU3RyZWFtQ2lwaGVyIChtb2RlLCBrZXksIGl2LCBkZWNyeXB0KSB7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMpXG5cbiAgdmFyIGggPSBCdWZmZXIuYWxsb2MoNCwgMClcblxuICB0aGlzLl9jaXBoZXIgPSBuZXcgYWVzLkFFUyhrZXkpXG4gIHZhciBjayA9IHRoaXMuX2NpcGhlci5lbmNyeXB0QmxvY2soaClcbiAgdGhpcy5fZ2hhc2ggPSBuZXcgR0hBU0goY2spXG4gIGl2ID0gY2FsY0l2KHRoaXMsIGl2LCBjaylcblxuICB0aGlzLl9wcmV2ID0gQnVmZmVyLmZyb20oaXYpXG4gIHRoaXMuX2NhY2hlID0gQnVmZmVyLmFsbG9jVW5zYWZlKDApXG4gIHRoaXMuX3NlY0NhY2hlID0gQnVmZmVyLmFsbG9jVW5zYWZlKDApXG4gIHRoaXMuX2RlY3J5cHQgPSBkZWNyeXB0XG4gIHRoaXMuX2FsZW4gPSAwXG4gIHRoaXMuX2xlbiA9IDBcbiAgdGhpcy5fbW9kZSA9IG1vZGVcblxuICB0aGlzLl9hdXRoVGFnID0gbnVsbFxuICB0aGlzLl9jYWxsZWQgPSBmYWxzZVxufVxuXG5pbmhlcml0cyhTdHJlYW1DaXBoZXIsIFRyYW5zZm9ybSlcblxuU3RyZWFtQ2lwaGVyLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIGlmICghdGhpcy5fY2FsbGVkICYmIHRoaXMuX2FsZW4pIHtcbiAgICB2YXIgcnVtcCA9IDE2IC0gKHRoaXMuX2FsZW4gJSAxNilcbiAgICBpZiAocnVtcCA8IDE2KSB7XG4gICAgICBydW1wID0gQnVmZmVyLmFsbG9jKHJ1bXAsIDApXG4gICAgICB0aGlzLl9naGFzaC51cGRhdGUocnVtcClcbiAgICB9XG4gIH1cblxuICB0aGlzLl9jYWxsZWQgPSB0cnVlXG4gIHZhciBvdXQgPSB0aGlzLl9tb2RlLmVuY3J5cHQodGhpcywgY2h1bmspXG4gIGlmICh0aGlzLl9kZWNyeXB0KSB7XG4gICAgdGhpcy5fZ2hhc2gudXBkYXRlKGNodW5rKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2doYXNoLnVwZGF0ZShvdXQpXG4gIH1cbiAgdGhpcy5fbGVuICs9IGNodW5rLmxlbmd0aFxuICByZXR1cm4gb3V0XG59XG5cblN0cmVhbUNpcGhlci5wcm90b3R5cGUuX2ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZGVjcnlwdCAmJiAhdGhpcy5fYXV0aFRhZykgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBzdGF0ZSBvciB1bmFibGUgdG8gYXV0aGVudGljYXRlIGRhdGEnKVxuXG4gIHZhciB0YWcgPSB4b3IodGhpcy5fZ2hhc2guZmluYWwodGhpcy5fYWxlbiAqIDgsIHRoaXMuX2xlbiAqIDgpLCB0aGlzLl9jaXBoZXIuZW5jcnlwdEJsb2NrKHRoaXMuX2ZpbklEKSlcbiAgaWYgKHRoaXMuX2RlY3J5cHQgJiYgeG9yVGVzdCh0YWcsIHRoaXMuX2F1dGhUYWcpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHN0YXRlIG9yIHVuYWJsZSB0byBhdXRoZW50aWNhdGUgZGF0YScpXG5cbiAgdGhpcy5fYXV0aFRhZyA9IHRhZ1xuICB0aGlzLl9jaXBoZXIuc2NydWIoKVxufVxuXG5TdHJlYW1DaXBoZXIucHJvdG90eXBlLmdldEF1dGhUYWcgPSBmdW5jdGlvbiBnZXRBdXRoVGFnICgpIHtcbiAgaWYgKHRoaXMuX2RlY3J5cHQgfHwgIUJ1ZmZlci5pc0J1ZmZlcih0aGlzLl9hdXRoVGFnKSkgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIGdldCBhdXRoIHRhZyBpbiB1bnN1cHBvcnRlZCBzdGF0ZScpXG5cbiAgcmV0dXJuIHRoaXMuX2F1dGhUYWdcbn1cblxuU3RyZWFtQ2lwaGVyLnByb3RvdHlwZS5zZXRBdXRoVGFnID0gZnVuY3Rpb24gc2V0QXV0aFRhZyAodGFnKSB7XG4gIGlmICghdGhpcy5fZGVjcnlwdCkgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIHNldCBhdXRoIHRhZyBpbiB1bnN1cHBvcnRlZCBzdGF0ZScpXG5cbiAgdGhpcy5fYXV0aFRhZyA9IHRhZ1xufVxuXG5TdHJlYW1DaXBoZXIucHJvdG90eXBlLnNldEFBRCA9IGZ1bmN0aW9uIHNldEFBRCAoYnVmKSB7XG4gIGlmICh0aGlzLl9jYWxsZWQpIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBzZXQgQUFEIGluIHVuc3VwcG9ydGVkIHN0YXRlJylcblxuICB0aGlzLl9naGFzaC51cGRhdGUoYnVmKVxuICB0aGlzLl9hbGVuICs9IGJ1Zi5sZW5ndGhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJlYW1DaXBoZXJcbiIsIi8vIGJhc2VkIG9uIHRoZSBhZXMgaW1wbGltZW50YXRpb24gaW4gdHJpcGxlIHNlY1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tleWJhc2UvdHJpcGxlc2VjXG4vLyB3aGljaCBpcyBpbiB0dXJuIGJhc2VkIG9uIHRoZSBvbmUgZnJvbSBjcnlwdG8tanNcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY3J5cHRvLWpzL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcblxuZnVuY3Rpb24gYXNVSW50MzJBcnJheSAoYnVmKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZilcblxuICB2YXIgbGVuID0gKGJ1Zi5sZW5ndGggLyA0KSB8IDBcbiAgdmFyIG91dCA9IG5ldyBBcnJheShsZW4pXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IGJ1Zi5yZWFkVUludDMyQkUoaSAqIDQpXG4gIH1cblxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHNjcnViVmVjICh2KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7IHYrKykge1xuICAgIHZbaV0gPSAwXG4gIH1cbn1cblxuZnVuY3Rpb24gY3J5cHRCbG9jayAoTSwga2V5U2NoZWR1bGUsIFNVQl9NSVgsIFNCT1gsIG5Sb3VuZHMpIHtcbiAgdmFyIFNVQl9NSVgwID0gU1VCX01JWFswXVxuICB2YXIgU1VCX01JWDEgPSBTVUJfTUlYWzFdXG4gIHZhciBTVUJfTUlYMiA9IFNVQl9NSVhbMl1cbiAgdmFyIFNVQl9NSVgzID0gU1VCX01JWFszXVxuXG4gIHZhciBzMCA9IE1bMF0gXiBrZXlTY2hlZHVsZVswXVxuICB2YXIgczEgPSBNWzFdIF4ga2V5U2NoZWR1bGVbMV1cbiAgdmFyIHMyID0gTVsyXSBeIGtleVNjaGVkdWxlWzJdXG4gIHZhciBzMyA9IE1bM10gXiBrZXlTY2hlZHVsZVszXVxuICB2YXIgdDAsIHQxLCB0MiwgdDNcbiAgdmFyIGtzUm93ID0gNFxuXG4gIGZvciAodmFyIHJvdW5kID0gMTsgcm91bmQgPCBuUm91bmRzOyByb3VuZCsrKSB7XG4gICAgdDAgPSBTVUJfTUlYMFtzMCA+Pj4gMjRdIF4gU1VCX01JWDFbKHMxID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVgyWyhzMiA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVgzW3MzICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXVxuICAgIHQxID0gU1VCX01JWDBbczEgPj4+IDI0XSBeIFNVQl9NSVgxWyhzMiA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYMlsoczMgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYM1tzMCAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK11cbiAgICB0MiA9IFNVQl9NSVgwW3MyID4+PiAyNF0gXiBTVUJfTUlYMVsoczMgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWDJbKHMwID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWDNbczEgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdXG4gICAgdDMgPSBTVUJfTUlYMFtzMyA+Pj4gMjRdIF4gU1VCX01JWDFbKHMwID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVgyWyhzMSA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVgzW3MyICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXVxuICAgIHMwID0gdDBcbiAgICBzMSA9IHQxXG4gICAgczIgPSB0MlxuICAgIHMzID0gdDNcbiAgfVxuXG4gIHQwID0gKChTQk9YW3MwID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMxID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczIgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MzICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK11cbiAgdDEgPSAoKFNCT1hbczEgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsoczIgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyhzMyA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbczAgJiAweGZmXSkgXiBrZXlTY2hlZHVsZVtrc1JvdysrXVxuICB0MiA9ICgoU0JPWFtzMiA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMyA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMwID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMSAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdXG4gIHQzID0gKChTQk9YW3MzID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMwID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczEgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MyICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK11cbiAgdDAgPSB0MCA+Pj4gMFxuICB0MSA9IHQxID4+PiAwXG4gIHQyID0gdDIgPj4+IDBcbiAgdDMgPSB0MyA+Pj4gMFxuXG4gIHJldHVybiBbdDAsIHQxLCB0MiwgdDNdXG59XG5cbi8vIEFFUyBjb25zdGFudHNcbnZhciBSQ09OID0gWzB4MDAsIDB4MDEsIDB4MDIsIDB4MDQsIDB4MDgsIDB4MTAsIDB4MjAsIDB4NDAsIDB4ODAsIDB4MWIsIDB4MzZdXG52YXIgRyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENvbXB1dGUgZG91YmxlIHRhYmxlXG4gIHZhciBkID0gbmV3IEFycmF5KDI1NilcbiAgZm9yICh2YXIgaiA9IDA7IGogPCAyNTY7IGorKykge1xuICAgIGlmIChqIDwgMTI4KSB7XG4gICAgICBkW2pdID0gaiA8PCAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGRbal0gPSAoaiA8PCAxKSBeIDB4MTFiXG4gICAgfVxuICB9XG5cbiAgdmFyIFNCT1ggPSBbXVxuICB2YXIgSU5WX1NCT1ggPSBbXVxuICB2YXIgU1VCX01JWCA9IFtbXSwgW10sIFtdLCBbXV1cbiAgdmFyIElOVl9TVUJfTUlYID0gW1tdLCBbXSwgW10sIFtdXVxuXG4gIC8vIFdhbGsgR0YoMl44KVxuICB2YXIgeCA9IDBcbiAgdmFyIHhpID0gMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgLy8gQ29tcHV0ZSBzYm94XG4gICAgdmFyIHN4ID0geGkgXiAoeGkgPDwgMSkgXiAoeGkgPDwgMikgXiAoeGkgPDwgMykgXiAoeGkgPDwgNClcbiAgICBzeCA9IChzeCA+Pj4gOCkgXiAoc3ggJiAweGZmKSBeIDB4NjNcbiAgICBTQk9YW3hdID0gc3hcbiAgICBJTlZfU0JPWFtzeF0gPSB4XG5cbiAgICAvLyBDb21wdXRlIG11bHRpcGxpY2F0aW9uXG4gICAgdmFyIHgyID0gZFt4XVxuICAgIHZhciB4NCA9IGRbeDJdXG4gICAgdmFyIHg4ID0gZFt4NF1cblxuICAgIC8vIENvbXB1dGUgc3ViIGJ5dGVzLCBtaXggY29sdW1ucyB0YWJsZXNcbiAgICB2YXIgdCA9IChkW3N4XSAqIDB4MTAxKSBeIChzeCAqIDB4MTAxMDEwMClcbiAgICBTVUJfTUlYWzBdW3hdID0gKHQgPDwgMjQpIHwgKHQgPj4+IDgpXG4gICAgU1VCX01JWFsxXVt4XSA9ICh0IDw8IDE2KSB8ICh0ID4+PiAxNilcbiAgICBTVUJfTUlYWzJdW3hdID0gKHQgPDwgOCkgfCAodCA+Pj4gMjQpXG4gICAgU1VCX01JWFszXVt4XSA9IHRcblxuICAgIC8vIENvbXB1dGUgaW52IHN1YiBieXRlcywgaW52IG1peCBjb2x1bW5zIHRhYmxlc1xuICAgIHQgPSAoeDggKiAweDEwMTAxMDEpIF4gKHg0ICogMHgxMDAwMSkgXiAoeDIgKiAweDEwMSkgXiAoeCAqIDB4MTAxMDEwMClcbiAgICBJTlZfU1VCX01JWFswXVtzeF0gPSAodCA8PCAyNCkgfCAodCA+Pj4gOClcbiAgICBJTlZfU1VCX01JWFsxXVtzeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpXG4gICAgSU5WX1NVQl9NSVhbMl1bc3hdID0gKHQgPDwgOCkgfCAodCA+Pj4gMjQpXG4gICAgSU5WX1NVQl9NSVhbM11bc3hdID0gdFxuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHggPSB4aSA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IHgyIF4gZFtkW2RbeDggXiB4Ml1dXVxuICAgICAgeGkgXj0gZFtkW3hpXV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFNCT1g6IFNCT1gsXG4gICAgSU5WX1NCT1g6IElOVl9TQk9YLFxuICAgIFNVQl9NSVg6IFNVQl9NSVgsXG4gICAgSU5WX1NVQl9NSVg6IElOVl9TVUJfTUlYXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gQUVTIChrZXkpIHtcbiAgdGhpcy5fa2V5ID0gYXNVSW50MzJBcnJheShrZXkpXG4gIHRoaXMuX3Jlc2V0KClcbn1cblxuQUVTLmJsb2NrU2l6ZSA9IDQgKiA0XG5BRVMua2V5U2l6ZSA9IDI1NiAvIDhcbkFFUy5wcm90b3R5cGUuYmxvY2tTaXplID0gQUVTLmJsb2NrU2l6ZVxuQUVTLnByb3RvdHlwZS5rZXlTaXplID0gQUVTLmtleVNpemVcbkFFUy5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIga2V5V29yZHMgPSB0aGlzLl9rZXlcbiAgdmFyIGtleVNpemUgPSBrZXlXb3Jkcy5sZW5ndGhcbiAgdmFyIG5Sb3VuZHMgPSBrZXlTaXplICsgNlxuICB2YXIga3NSb3dzID0gKG5Sb3VuZHMgKyAxKSAqIDRcblxuICB2YXIga2V5U2NoZWR1bGUgPSBbXVxuICBmb3IgKHZhciBrID0gMDsgayA8IGtleVNpemU7IGsrKykge1xuICAgIGtleVNjaGVkdWxlW2tdID0ga2V5V29yZHNba11cbiAgfVxuXG4gIGZvciAoayA9IGtleVNpemU7IGsgPCBrc1Jvd3M7IGsrKykge1xuICAgIHZhciB0ID0ga2V5U2NoZWR1bGVbayAtIDFdXG5cbiAgICBpZiAoayAlIGtleVNpemUgPT09IDApIHtcbiAgICAgIHQgPSAodCA8PCA4KSB8ICh0ID4+PiAyNClcbiAgICAgIHQgPVxuICAgICAgICAoRy5TQk9YW3QgPj4+IDI0XSA8PCAyNCkgfFxuICAgICAgICAoRy5TQk9YWyh0ID4+PiAxNikgJiAweGZmXSA8PCAxNikgfFxuICAgICAgICAoRy5TQk9YWyh0ID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHxcbiAgICAgICAgKEcuU0JPWFt0ICYgMHhmZl0pXG5cbiAgICAgIHQgXj0gUkNPTlsoayAvIGtleVNpemUpIHwgMF0gPDwgMjRcbiAgICB9IGVsc2UgaWYgKGtleVNpemUgPiA2ICYmIGsgJSBrZXlTaXplID09PSA0KSB7XG4gICAgICB0ID1cbiAgICAgICAgKEcuU0JPWFt0ID4+PiAyNF0gPDwgMjQpIHxcbiAgICAgICAgKEcuU0JPWFsodCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHxcbiAgICAgICAgKEcuU0JPWFsodCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8XG4gICAgICAgIChHLlNCT1hbdCAmIDB4ZmZdKVxuICAgIH1cblxuICAgIGtleVNjaGVkdWxlW2tdID0ga2V5U2NoZWR1bGVbayAtIGtleVNpemVdIF4gdFxuICB9XG5cbiAgdmFyIGludktleVNjaGVkdWxlID0gW11cbiAgZm9yICh2YXIgaWsgPSAwOyBpayA8IGtzUm93czsgaWsrKykge1xuICAgIHZhciBrc1IgPSBrc1Jvd3MgLSBpa1xuICAgIHZhciB0dCA9IGtleVNjaGVkdWxlW2tzUiAtIChpayAlIDQgPyAwIDogNCldXG5cbiAgICBpZiAoaWsgPCA0IHx8IGtzUiA8PSA0KSB7XG4gICAgICBpbnZLZXlTY2hlZHVsZVtpa10gPSB0dFxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZLZXlTY2hlZHVsZVtpa10gPVxuICAgICAgICBHLklOVl9TVUJfTUlYWzBdW0cuU0JPWFt0dCA+Pj4gMjRdXSBeXG4gICAgICAgIEcuSU5WX1NVQl9NSVhbMV1bRy5TQk9YWyh0dCA+Pj4gMTYpICYgMHhmZl1dIF5cbiAgICAgICAgRy5JTlZfU1VCX01JWFsyXVtHLlNCT1hbKHR0ID4+PiA4KSAmIDB4ZmZdXSBeXG4gICAgICAgIEcuSU5WX1NVQl9NSVhbM11bRy5TQk9YW3R0ICYgMHhmZl1dXG4gICAgfVxuICB9XG5cbiAgdGhpcy5fblJvdW5kcyA9IG5Sb3VuZHNcbiAgdGhpcy5fa2V5U2NoZWR1bGUgPSBrZXlTY2hlZHVsZVxuICB0aGlzLl9pbnZLZXlTY2hlZHVsZSA9IGludktleVNjaGVkdWxlXG59XG5cbkFFUy5wcm90b3R5cGUuZW5jcnlwdEJsb2NrUmF3ID0gZnVuY3Rpb24gKE0pIHtcbiAgTSA9IGFzVUludDMyQXJyYXkoTSlcbiAgcmV0dXJuIGNyeXB0QmxvY2soTSwgdGhpcy5fa2V5U2NoZWR1bGUsIEcuU1VCX01JWCwgRy5TQk9YLCB0aGlzLl9uUm91bmRzKVxufVxuXG5BRVMucHJvdG90eXBlLmVuY3J5cHRCbG9jayA9IGZ1bmN0aW9uIChNKSB7XG4gIHZhciBvdXQgPSB0aGlzLmVuY3J5cHRCbG9ja1JhdyhNKVxuICB2YXIgYnVmID0gQnVmZmVyLmFsbG9jVW5zYWZlKDE2KVxuICBidWYud3JpdGVVSW50MzJCRShvdXRbMF0sIDApXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFsxXSwgNClcbiAgYnVmLndyaXRlVUludDMyQkUob3V0WzJdLCA4KVxuICBidWYud3JpdGVVSW50MzJCRShvdXRbM10sIDEyKVxuICByZXR1cm4gYnVmXG59XG5cbkFFUy5wcm90b3R5cGUuZGVjcnlwdEJsb2NrID0gZnVuY3Rpb24gKE0pIHtcbiAgTSA9IGFzVUludDMyQXJyYXkoTSlcblxuICAvLyBzd2FwXG4gIHZhciBtMSA9IE1bMV1cbiAgTVsxXSA9IE1bM11cbiAgTVszXSA9IG0xXG5cbiAgdmFyIG91dCA9IGNyeXB0QmxvY2soTSwgdGhpcy5faW52S2V5U2NoZWR1bGUsIEcuSU5WX1NVQl9NSVgsIEcuSU5WX1NCT1gsIHRoaXMuX25Sb3VuZHMpXG4gIHZhciBidWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMTYpXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFswXSwgMClcbiAgYnVmLndyaXRlVUludDMyQkUob3V0WzNdLCA0KVxuICBidWYud3JpdGVVSW50MzJCRShvdXRbMl0sIDgpXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFsxXSwgMTIpXG4gIHJldHVybiBidWZcbn1cblxuQUVTLnByb3RvdHlwZS5zY3J1YiA9IGZ1bmN0aW9uICgpIHtcbiAgc2NydWJWZWModGhpcy5fa2V5U2NoZWR1bGUpXG4gIHNjcnViVmVjKHRoaXMuX2ludktleVNjaGVkdWxlKVxuICBzY3J1YlZlYyh0aGlzLl9rZXkpXG59XG5cbm1vZHVsZS5leHBvcnRzLkFFUyA9IEFFU1xuIiwidmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyXG52YXIgWkVST0VTID0gQnVmZmVyLmFsbG9jKDE2LCAwKVxuXG5mdW5jdGlvbiB0b0FycmF5IChidWYpIHtcbiAgcmV0dXJuIFtcbiAgICBidWYucmVhZFVJbnQzMkJFKDApLFxuICAgIGJ1Zi5yZWFkVUludDMyQkUoNCksXG4gICAgYnVmLnJlYWRVSW50MzJCRSg4KSxcbiAgICBidWYucmVhZFVJbnQzMkJFKDEyKVxuICBdXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheSAob3V0KSB7XG4gIHZhciBidWYgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMTYpXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFswXSA+Pj4gMCwgMClcbiAgYnVmLndyaXRlVUludDMyQkUob3V0WzFdID4+PiAwLCA0KVxuICBidWYud3JpdGVVSW50MzJCRShvdXRbMl0gPj4+IDAsIDgpXG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFszXSA+Pj4gMCwgMTIpXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gR0hBU0ggKGtleSkge1xuICB0aGlzLmggPSBrZXlcbiAgdGhpcy5zdGF0ZSA9IEJ1ZmZlci5hbGxvYygxNiwgMClcbiAgdGhpcy5jYWNoZSA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgwKVxufVxuXG4vLyBmcm9tIGh0dHA6Ly9iaXR3aXNlc2hpZnRsZWZ0LmdpdGh1Yi5pby9zamNsL2RvYy9zeW1ib2xzL3NyYy9jb3JlX2djbS5qcy5odG1sXG4vLyBieSBKdWhvIFbDpGjDpC1IZXJ0dHVhXG5HSEFTSC5wcm90b3R5cGUuZ2hhc2ggPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgdmFyIGkgPSAtMVxuICB3aGlsZSAoKytpIDwgYmxvY2subGVuZ3RoKSB7XG4gICAgdGhpcy5zdGF0ZVtpXSBePSBibG9ja1tpXVxuICB9XG4gIHRoaXMuX211bHRpcGx5KClcbn1cblxuR0hBU0gucHJvdG90eXBlLl9tdWx0aXBseSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFZpID0gdG9BcnJheSh0aGlzLmgpXG4gIHZhciBaaSA9IFswLCAwLCAwLCAwXVxuICB2YXIgaiwgeGksIGxzYlZpXG4gIHZhciBpID0gLTFcbiAgd2hpbGUgKCsraSA8IDEyOCkge1xuICAgIHhpID0gKHRoaXMuc3RhdGVbfn4oaSAvIDgpXSAmICgxIDw8ICg3IC0gKGkgJSA4KSkpKSAhPT0gMFxuICAgIGlmICh4aSkge1xuICAgICAgLy8gWl9pKzEgPSBaX2kgXiBWX2lcbiAgICAgIFppWzBdIF49IFZpWzBdXG4gICAgICBaaVsxXSBePSBWaVsxXVxuICAgICAgWmlbMl0gXj0gVmlbMl1cbiAgICAgIFppWzNdIF49IFZpWzNdXG4gICAgfVxuXG4gICAgLy8gU3RvcmUgdGhlIHZhbHVlIG9mIExTQihWX2kpXG4gICAgbHNiVmkgPSAoVmlbM10gJiAxKSAhPT0gMFxuXG4gICAgLy8gVl9pKzEgPSBWX2kgPj4gMVxuICAgIGZvciAoaiA9IDM7IGogPiAwOyBqLS0pIHtcbiAgICAgIFZpW2pdID0gKFZpW2pdID4+PiAxKSB8ICgoVmlbaiAtIDFdICYgMSkgPDwgMzEpXG4gICAgfVxuICAgIFZpWzBdID0gVmlbMF0gPj4+IDFcblxuICAgIC8vIElmIExTQihWX2kpIGlzIDEsIFZfaSsxID0gKFZfaSA+PiAxKSBeIFJcbiAgICBpZiAobHNiVmkpIHtcbiAgICAgIFZpWzBdID0gVmlbMF0gXiAoMHhlMSA8PCAyNClcbiAgICB9XG4gIH1cbiAgdGhpcy5zdGF0ZSA9IGZyb21BcnJheShaaSlcbn1cblxuR0hBU0gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChidWYpIHtcbiAgdGhpcy5jYWNoZSA9IEJ1ZmZlci5jb25jYXQoW3RoaXMuY2FjaGUsIGJ1Zl0pXG4gIHZhciBjaHVua1xuICB3aGlsZSAodGhpcy5jYWNoZS5sZW5ndGggPj0gMTYpIHtcbiAgICBjaHVuayA9IHRoaXMuY2FjaGUuc2xpY2UoMCwgMTYpXG4gICAgdGhpcy5jYWNoZSA9IHRoaXMuY2FjaGUuc2xpY2UoMTYpXG4gICAgdGhpcy5naGFzaChjaHVuaylcbiAgfVxufVxuXG5HSEFTSC5wcm90b3R5cGUuZmluYWwgPSBmdW5jdGlvbiAoYWJsLCBibCkge1xuICBpZiAodGhpcy5jYWNoZS5sZW5ndGgpIHtcbiAgICB0aGlzLmdoYXNoKEJ1ZmZlci5jb25jYXQoW3RoaXMuY2FjaGUsIFpFUk9FU10sIDE2KSlcbiAgfVxuXG4gIHRoaXMuZ2hhc2goZnJvbUFycmF5KFswLCBhYmwsIDAsIGJsXSkpXG4gIHJldHVybiB0aGlzLnN0YXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR0hBU0hcbiIsInZhciBhZXMgPSByZXF1aXJlKCcuL2FlcycpXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCdjaXBoZXItYmFzZScpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG5cbmZ1bmN0aW9uIFN0cmVhbUNpcGhlciAobW9kZSwga2V5LCBpdiwgZGVjcnlwdCkge1xuICBUcmFuc2Zvcm0uY2FsbCh0aGlzKVxuXG4gIHRoaXMuX2NpcGhlciA9IG5ldyBhZXMuQUVTKGtleSlcbiAgdGhpcy5fcHJldiA9IEJ1ZmZlci5mcm9tKGl2KVxuICB0aGlzLl9jYWNoZSA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgwKVxuICB0aGlzLl9zZWNDYWNoZSA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgwKVxuICB0aGlzLl9kZWNyeXB0ID0gZGVjcnlwdFxuICB0aGlzLl9tb2RlID0gbW9kZVxufVxuXG5pbmhlcml0cyhTdHJlYW1DaXBoZXIsIFRyYW5zZm9ybSlcblxuU3RyZWFtQ2lwaGVyLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHJldHVybiB0aGlzLl9tb2RlLmVuY3J5cHQodGhpcywgY2h1bmssIHRoaXMuX2RlY3J5cHQpXG59XG5cblN0cmVhbUNpcGhlci5wcm90b3R5cGUuX2ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jaXBoZXIuc2NydWIoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmVhbUNpcGhlclxuIiwidmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyXG52YXIgTUQ1ID0gcmVxdWlyZSgnbWQ1LmpzJylcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5mdW5jdGlvbiBFVlBfQnl0ZXNUb0tleSAocGFzc3dvcmQsIHNhbHQsIGtleUJpdHMsIGl2TGVuKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHBhc3N3b3JkKSkgcGFzc3dvcmQgPSBCdWZmZXIuZnJvbShwYXNzd29yZCwgJ2JpbmFyeScpXG4gIGlmIChzYWx0KSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoc2FsdCkpIHNhbHQgPSBCdWZmZXIuZnJvbShzYWx0LCAnYmluYXJ5JylcbiAgICBpZiAoc2FsdC5sZW5ndGggIT09IDgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzYWx0IHNob3VsZCBiZSBCdWZmZXIgd2l0aCA4IGJ5dGUgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBrZXlMZW4gPSBrZXlCaXRzIC8gOFxuICB2YXIga2V5ID0gQnVmZmVyLmFsbG9jKGtleUxlbilcbiAgdmFyIGl2ID0gQnVmZmVyLmFsbG9jKGl2TGVuIHx8IDApXG4gIHZhciB0bXAgPSBCdWZmZXIuYWxsb2MoMClcblxuICB3aGlsZSAoa2V5TGVuID4gMCB8fCBpdkxlbiA+IDApIHtcbiAgICB2YXIgaGFzaCA9IG5ldyBNRDUoKVxuICAgIGhhc2gudXBkYXRlKHRtcClcbiAgICBoYXNoLnVwZGF0ZShwYXNzd29yZClcbiAgICBpZiAoc2FsdCkgaGFzaC51cGRhdGUoc2FsdClcbiAgICB0bXAgPSBoYXNoLmRpZ2VzdCgpXG5cbiAgICB2YXIgdXNlZCA9IDBcblxuICAgIGlmIChrZXlMZW4gPiAwKSB7XG4gICAgICB2YXIga2V5U3RhcnQgPSBrZXkubGVuZ3RoIC0ga2V5TGVuXG4gICAgICB1c2VkID0gTWF0aC5taW4oa2V5TGVuLCB0bXAubGVuZ3RoKVxuICAgICAgdG1wLmNvcHkoa2V5LCBrZXlTdGFydCwgMCwgdXNlZClcbiAgICAgIGtleUxlbiAtPSB1c2VkXG4gICAgfVxuXG4gICAgaWYgKHVzZWQgPCB0bXAubGVuZ3RoICYmIGl2TGVuID4gMCkge1xuICAgICAgdmFyIGl2U3RhcnQgPSBpdi5sZW5ndGggLSBpdkxlblxuICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGl2TGVuLCB0bXAubGVuZ3RoIC0gdXNlZClcbiAgICAgIHRtcC5jb3B5KGl2LCBpdlN0YXJ0LCB1c2VkLCB1c2VkICsgbGVuZ3RoKVxuICAgICAgaXZMZW4gLT0gbGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdG1wLmZpbGwoMClcbiAgcmV0dXJuIHsga2V5OiBrZXksIGl2OiBpdiB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRVZQX0J5dGVzVG9LZXlcbiIsInZhciBBdXRoQ2lwaGVyID0gcmVxdWlyZSgnLi9hdXRoQ2lwaGVyJylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxudmFyIE1PREVTID0gcmVxdWlyZSgnLi9tb2RlcycpXG52YXIgU3RyZWFtQ2lwaGVyID0gcmVxdWlyZSgnLi9zdHJlYW1DaXBoZXInKVxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJ2NpcGhlci1iYXNlJylcbnZhciBhZXMgPSByZXF1aXJlKCcuL2FlcycpXG52YXIgZWJ0ayA9IHJlcXVpcmUoJ2V2cF9ieXRlc3Rva2V5JylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxuZnVuY3Rpb24gRGVjaXBoZXIgKG1vZGUsIGtleSwgaXYpIHtcbiAgVHJhbnNmb3JtLmNhbGwodGhpcylcblxuICB0aGlzLl9jYWNoZSA9IG5ldyBTcGxpdHRlcigpXG4gIHRoaXMuX2xhc3QgPSB2b2lkIDBcbiAgdGhpcy5fY2lwaGVyID0gbmV3IGFlcy5BRVMoa2V5KVxuICB0aGlzLl9wcmV2ID0gQnVmZmVyLmZyb20oaXYpXG4gIHRoaXMuX21vZGUgPSBtb2RlXG4gIHRoaXMuX2F1dG9wYWRkaW5nID0gdHJ1ZVxufVxuXG5pbmhlcml0cyhEZWNpcGhlciwgVHJhbnNmb3JtKVxuXG5EZWNpcGhlci5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuX2NhY2hlLmFkZChkYXRhKVxuICB2YXIgY2h1bmtcbiAgdmFyIHRoaW5nXG4gIHZhciBvdXQgPSBbXVxuICB3aGlsZSAoKGNodW5rID0gdGhpcy5fY2FjaGUuZ2V0KHRoaXMuX2F1dG9wYWRkaW5nKSkpIHtcbiAgICB0aGluZyA9IHRoaXMuX21vZGUuZGVjcnlwdCh0aGlzLCBjaHVuaylcbiAgICBvdXQucHVzaCh0aGluZylcbiAgfVxuICByZXR1cm4gQnVmZmVyLmNvbmNhdChvdXQpXG59XG5cbkRlY2lwaGVyLnByb3RvdHlwZS5fZmluYWwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaHVuayA9IHRoaXMuX2NhY2hlLmZsdXNoKClcbiAgaWYgKHRoaXMuX2F1dG9wYWRkaW5nKSB7XG4gICAgcmV0dXJuIHVucGFkKHRoaXMuX21vZGUuZGVjcnlwdCh0aGlzLCBjaHVuaykpXG4gIH0gZWxzZSBpZiAoY2h1bmspIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgbm90IG11bHRpcGxlIG9mIGJsb2NrIGxlbmd0aCcpXG4gIH1cbn1cblxuRGVjaXBoZXIucHJvdG90eXBlLnNldEF1dG9QYWRkaW5nID0gZnVuY3Rpb24gKHNldFRvKSB7XG4gIHRoaXMuX2F1dG9wYWRkaW5nID0gISFzZXRUb1xuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBTcGxpdHRlciAoKSB7XG4gIHRoaXMuY2FjaGUgPSBCdWZmZXIuYWxsb2NVbnNhZmUoMClcbn1cblxuU3BsaXR0ZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuY2FjaGUgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmNhY2hlLCBkYXRhXSlcbn1cblxuU3BsaXR0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChhdXRvUGFkZGluZykge1xuICB2YXIgb3V0XG4gIGlmIChhdXRvUGFkZGluZykge1xuICAgIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA+IDE2KSB7XG4gICAgICBvdXQgPSB0aGlzLmNhY2hlLnNsaWNlKDAsIDE2KVxuICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuY2FjaGUuc2xpY2UoMTYpXG4gICAgICByZXR1cm4gb3V0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLmNhY2hlLmxlbmd0aCA+PSAxNikge1xuICAgICAgb3V0ID0gdGhpcy5jYWNoZS5zbGljZSgwLCAxNilcbiAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLnNsaWNlKDE2KVxuICAgICAgcmV0dXJuIG91dFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cblNwbGl0dGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoKSByZXR1cm4gdGhpcy5jYWNoZVxufVxuXG5mdW5jdGlvbiB1bnBhZCAobGFzdCkge1xuICB2YXIgcGFkZGVkID0gbGFzdFsxNV1cbiAgaWYgKHBhZGRlZCA8IDEgfHwgcGFkZGVkID4gMTYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBkZWNyeXB0IGRhdGEnKVxuICB9XG4gIHZhciBpID0gLTFcbiAgd2hpbGUgKCsraSA8IHBhZGRlZCkge1xuICAgIGlmIChsYXN0WyhpICsgKDE2IC0gcGFkZGVkKSldICE9PSBwYWRkZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGRlY3J5cHQgZGF0YScpXG4gICAgfVxuICB9XG4gIGlmIChwYWRkZWQgPT09IDE2KSByZXR1cm5cblxuICByZXR1cm4gbGFzdC5zbGljZSgwLCAxNiAtIHBhZGRlZClcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjaXBoZXJpdiAoc3VpdGUsIHBhc3N3b3JkLCBpdikge1xuICB2YXIgY29uZmlnID0gTU9ERVNbc3VpdGUudG9Mb3dlckNhc2UoKV1cbiAgaWYgKCFjb25maWcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgc3VpdGUgdHlwZScpXG5cbiAgaWYgKHR5cGVvZiBpdiA9PT0gJ3N0cmluZycpIGl2ID0gQnVmZmVyLmZyb20oaXYpXG4gIGlmIChjb25maWcubW9kZSAhPT0gJ0dDTScgJiYgaXYubGVuZ3RoICE9PSBjb25maWcuaXYpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgaXYgbGVuZ3RoICcgKyBpdi5sZW5ndGgpXG5cbiAgaWYgKHR5cGVvZiBwYXNzd29yZCA9PT0gJ3N0cmluZycpIHBhc3N3b3JkID0gQnVmZmVyLmZyb20ocGFzc3dvcmQpXG4gIGlmIChwYXNzd29yZC5sZW5ndGggIT09IGNvbmZpZy5rZXkgLyA4KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGtleSBsZW5ndGggJyArIHBhc3N3b3JkLmxlbmd0aClcblxuICBpZiAoY29uZmlnLnR5cGUgPT09ICdzdHJlYW0nKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJlYW1DaXBoZXIoY29uZmlnLm1vZHVsZSwgcGFzc3dvcmQsIGl2LCB0cnVlKVxuICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlID09PSAnYXV0aCcpIHtcbiAgICByZXR1cm4gbmV3IEF1dGhDaXBoZXIoY29uZmlnLm1vZHVsZSwgcGFzc3dvcmQsIGl2LCB0cnVlKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBEZWNpcGhlcihjb25maWcubW9kdWxlLCBwYXNzd29yZCwgaXYpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlY2lwaGVyIChzdWl0ZSwgcGFzc3dvcmQpIHtcbiAgdmFyIGNvbmZpZyA9IE1PREVTW3N1aXRlLnRvTG93ZXJDYXNlKCldXG4gIGlmICghY29uZmlnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKVxuXG4gIHZhciBrZXlzID0gZWJ0ayhwYXNzd29yZCwgZmFsc2UsIGNvbmZpZy5rZXksIGNvbmZpZy5pdilcbiAgcmV0dXJuIGNyZWF0ZURlY2lwaGVyaXYoc3VpdGUsIGtleXMua2V5LCBrZXlzLml2KVxufVxuXG5leHBvcnRzLmNyZWF0ZURlY2lwaGVyID0gY3JlYXRlRGVjaXBoZXJcbmV4cG9ydHMuY3JlYXRlRGVjaXBoZXJpdiA9IGNyZWF0ZURlY2lwaGVyaXZcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9