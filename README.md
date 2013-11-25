# Urltoken
## Purpose
Implementation of this is only to provide developers a tool to deal with the urltoken encoded by a base64 variant from Microsoft in their .Net framework [HttpServerUtility.UrlTokenEncode](http://msdn.microsoft.com/library/system.web.httpserverutility.urltokenencode.aspx)

for now only string is supported

## Usage

### encode
```javascript
var urltoken = require('urltoken');
var encoded = urltoken.encode(origin_str);
```

### decode
```javascript
var urltoken = require('urltoken');
var decoded = urltoken.decode(encoded_str, 'utf8'); // the second optional argument is the encoding for decode the base64 string to human-readable text. if omitted, utf8 will be used
```
