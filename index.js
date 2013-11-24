var urltoken = {};

urltoken.encode = function encode(str, enc) {
  var buf, result, pad, padpos;

  if (str.length === 0) {
    return '';
  }

  if ('undefined' !== typeof enc) {
    enc = 'utf8';
  }

  buf = new Buffer(str, enc);
  
  result = buf.toString('base64');
  result = result.replace(/\+/g, '-').replace(/\//g, '_');

  padpos = result.indexOf('=');
  if (padpos === -1) {
    return result + '0';
  }

  pad = result.length - padpos;

  if (pad > 2) {
    throw new Error('padstring is more than 2, something wrong is happening');
  }

  return result.replace(/=/g, '') + pad;
  
};

urltoken.decode = function decode(str, enc) {
  var buf, orig64, result, pad = '', padnum;
  if ('undefined' === typeof enc) {
    enc = 'utf8';
  }
  
  if (str.length === 0) {
    return '';
  }

  padnum = ['0', '1', '2'].indexOf(str.substr(-1));

  if (padnum !== -1) {
    for (padnum; padnum > 0; padnum--) {
      pad = pad + '=';
    }
  }
  orig64 = str.replace(/_/g, '/').replace(/-/g, '+') + pad;

  buf = new Buffer(orig64, 'base64');

  return buf.toString(enc);
};

module.exports = urltoken;
