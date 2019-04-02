const http = require('http');
const fs = require('file-system');

http.get('http://wttr.in/~kharkov', (html) => {
  let res = '';

  html.setEncoding('utf-8');
  html.on('data', data => res += data);
  html.on('end', () => fs.appendFile('weather.html', res, (err) => {
    if (err) throw err;
  }));
});
