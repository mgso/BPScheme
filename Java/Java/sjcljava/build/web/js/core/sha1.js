/** @fileOverview Javascript SHA-1 implementation.
 *
 * Based on the implementation in RFC 3174, method 1, and on the SJCL
 * SHA-256 implementation.
 *
 * @author Quinn Slack
 */

/**
 * Context for a SHA-1 operation in progress.
 * @constructor
 * @class Secure Hash Algorithm, 160 bits.
 */
/*
sha1 = new function()
{
	var blockLen = 64;
	var state = [ 0x67452301 , 0xefcdab89 , 0x98badcfe , 0x10325476 , 0xc3d2e1f0 ];
	var sttLen = state.length;
	
	this.hex = function(_data)
	{
		return toHex( getMD(_data) );
	}

	this.dec = function(_data)
	{
		return getMD(_data);
	}
	
	this.bin = function(_data)
	{
		return pack( getMD(_data) );
	}
	
	var getMD = function(_data)
	{
		var datz = [];
		if (isAry(_data)) datz = _data;
		else if (isStr(_data)) datz = unpack(_data);
		else "unknown type";
		datz = paddingData(datz);
		return round(datz);
	}
    
    var isAry = function(_ary)
	{
		return _ary && _ary.constructor === [].constructor;
	}
	var isStr = function(_str)
	{
		return typeof(_str) == typeof("string");
	}

    var rotl = function(_v, _s) { return (_v << _s) | (_v >>> (32 - _s)) };

	var round = function(_blk)
	{
		var stt = [];
		var tmpS= [];
		var i, j, tmp, x = [];
		for (j=0; j<sttLen; j++) stt[j] = state[j];
		
		for (i=0; i<_blk.length; i+=blockLen)
		{
			for (j=0; j<sttLen; j++) tmpS[j] = stt[j];
			x = toBigEndian32( _blk.slice(i, i+ blockLen) );
			for (j=16; j<80; j++)
            	x[j] = rotl(x[j-3] ^ x[j-8] ^ x[j-14] ^ x[j-16], 1);
		
	        for (j=0; j<80; j++)
	        {
	     		if (j<20) 
	                tmp = ((stt[1] & stt[2]) ^ (~stt[1] & stt[3])) + K[0];
	            else if (j<40)
	                tmp = (stt[1] ^ stt[2] ^ stt[3]) + K[1];
	            else if (j<60)
	                tmp = ((stt[1] & stt[2]) ^ (stt[1] & stt[3]) ^ (stt[2] & stt[3])) + K[2];
	            else
	                tmp = (stt[1] ^ stt[2] ^ stt[3]) + K[3];

	            tmp += rotl(stt[0], 5) + x[j] + stt[4];
	            stt[4] = stt[3];
	            stt[3] = stt[2];
	            stt[2] = rotl(stt[1], 30);
	            stt[1] = stt[0];
	            stt[0] = tmp;
	        }
			for (j=0; j<sttLen; j++) stt[j] += tmpS[j];
		}

		return fromBigEndian32(stt);
	}

	var paddingData = function(_datz)
	{
		var datLen = _datz.length;
		var n = datLen;
		_datz[n++] = 0x80;
		while (n% blockLen != 56) _datz[n++] = 0;
		datLen *= 8;
		return _datz.concat(0, 0, 0, 0, fromBigEndian32([datLen]) );
	}

	var toHex = function(_decz)
	{
		var i, hex = "";

		for (i=0; i<_decz.length; i++)
			hex += (_decz[i]>0xf?"":"0")+ _decz[i].toString(16);
		return hex;
	}
	
	var fromBigEndian32 = function(_blk)
	{
		var tmp = [];
		for (n=i=0; i<_blk.length; i++)
		{
			tmp[n++] = (_blk[i] >>> 24) & 0xff;
			tmp[n++] = (_blk[i] >>> 16) & 0xff;
			tmp[n++] = (_blk[i] >>>  8) & 0xff;
			tmp[n++] = _blk[i] & 0xff;
		}
		return tmp;
	}
	
	var toBigEndian32 = function(_blk)
	{
		var tmp = [];
		var i, n;
		for (n=i=0; i<_blk.length; i+=4, n++)
			tmp[n] = (_blk[i]<<24) | (_blk[i+ 1]<<16) | (_blk[i+ 2]<<8) | _blk[i+ 3];
		return tmp;
	}
	
	var unpack = function(_dat)
	{
		var i, n, c, tmp = [];

	    for (n=i=0; i<_dat.length; i++) 
	    {
	    	c = _dat.charCodeAt(i);
			if (c <= 0xff) tmp[n++] = c;
			else {
				tmp[n++] = c >>> 8;
				tmp[n++] = c &  0xff;
			}	
	    }
	    return tmp;
	}

	var pack = function(_ary)
    {
        var i, tmp = "";
        for (i in _ary) tmp += String.fromCharCode(_ary[i]);
        return tmp;
    }

	var K = [ 0x5a827999 , 0x6ed9eba1 , 0x8f1bbcdc , 0xca62c1d6 ];

}

*/

sjcl.hash.sha1 = function (hash) {
  if (hash) {
    this._h = hash._h.slice(0);
    this._buffer = hash._buffer.slice(0);
    this._length = hash._length;
  } else {
    this.reset();
  }
};

/**
 * Hash a string or an array of words.
 * @static
 * @param {bitArray|String} data the data to hash.
 * @return {bitArray} The hash value, an array of 5 big-endian words.
 */
sjcl.hash.sha1.hash = function (data) {
  return (new sjcl.hash.sha1()).update(data).finalize();
};

sjcl.hash.sha1.prototype = {
  /**
   * The hash's block size, in bits.
   * @constant
   */
  blockSize: 512,
   
  /**
   * Reset the hash state.
   * @return this
   */
  reset:function () {
    this._h = this._init.slice(0);
    this._buffer = [];
    this._length = 0;
    return this;
  },
  
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update: function (data) {
    if (typeof data === "string") {
      data = sjcl.codec.utf8String.toBits(data);
    }
    var i, b = this._buffer = sjcl.bitArray.concat(this._buffer, data),
        ol = this._length,
        nl = this._length = ol + sjcl.bitArray.bitLength(data);
    for (i = this.blockSize+ol & -this.blockSize; i <= nl;
         i+= this.blockSize) {
      this._block(b.splice(0,16));
    }
    return this;
  },
  
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize:function () {
    var i, b = this._buffer, h = this._h;

    // Round out and push the buffer
    b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1,1)]);
    // Round out the buffer to a multiple of 16 words, less the 2 length words.
    for (i = b.length + 2; i & 15; i++) {
      b.push(0);
    }

    // append the length
    b.push(Math.floor(this._length / 0x100000000));
    b.push(this._length | 0);

    while (b.length) {
      this._block(b.splice(0,16));
    }

    this.reset();
    return h;
  },

  /**
   * The SHA-1 initialization vector.
   * @private
   */
  _init:[0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0],

  /**
   * The SHA-1 hash key.
   * @private
   */
  _key:[0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6],

  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f:function(t, b, c, d) {
    if (t <= 19) {
      return (b & c) | (~b & d);
    } else if (t <= 39) {
      return b ^ c ^ d;
    } else if (t <= 59) {
      return (b & c) | (b & d) | (c & d);
    } else if (t <= 79) {
      return b ^ c ^ d;
    }
  },

  /**
   * Circular left-shift operator.
   * @private
   */
  _S:function(n, x) {
    return (x << n) | (x >>> 32-n);
  },
  
  /**
   * Perform one cycle of SHA-1.
   * @param {bitArray} words one block of words.
   * @private
   */
  _block:function (words) {  
    var t, tmp, a, b, c, d, e,
    w = words.slice(0),
    h = this._h,
    k = this._key;
   
    a = h[0]; b = h[1]; c = h[2]; d = h[3]; e = h[4]; 

    for (t=0; t<=79; t++) {
      if (t >= 16) {
        w[t] = this._S(1, w[t-3] ^ w[t-8] ^ w[t-14] ^ w[t-16]);
      }
      tmp = (this._S(5, a) + this._f(t, b, c, d) + e + w[t] +
             this._key[Math.floor(t/20)]) | 0;
      e = d;
      d = c;
      c = this._S(30, b);
      b = a;
      a = tmp;
   }

   h[0] = (h[0]+a) |0;
   h[1] = (h[1]+b) |0;
   h[2] = (h[2]+c) |0;
   h[3] = (h[3]+d) |0;
   h[4] = (h[4]+e) |0;
  }
};
