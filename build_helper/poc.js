const http = require('http');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 0 }, function () {
  const chars = "!#$%&'*+-.0123456789abcdefghijklmnopqrstuvwxyz^_`|~".split('');
  const headers = {};
  let count = 0;

  for (let i = 0; i < chars.length; i++) {
    if (count === 2000) break;

    for (let j = 0; j < chars.length; j++) {
      const key = chars[i] + chars[j];
      headers[key] = 'x';

      if (++count === 2000) break;
    }
  }

  headers.Connection = 'Upgrade';
  headers.Upgrade = 'websocket';
  headers['Sec-WebSocket-Key'] = 'dGhlIHNhbXBsZSBub25jZQ==';
  headers['Sec-WebSocket-Version'] = '13';

  const request = http.request({
    headers: headers,
    host: '127.0.0.1',
    port: wss.address(8080).port
  });

  request.end();
});
response.writeHead(200, { 'Content-Type': 'text/plain',
                          'Trailer': 'Content-MD5' });
response.write(fileData);
response.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
response.end();
