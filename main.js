// 1.
const date = new Date().toLocaleString();
console.log(date);
console.log(require('path').basename(__filename));

// 2.
const getNumber = require('./number');
console.log(getNumber(1, 5));

// 3.
const httpGet = require('./httpGet.js');

httpGet('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.length))
  .catch(err => console.log(err));

// 4.
const fs = require('file-system');
const curDate = new Date();
fs.writeFile('dir/date.html', curDate);

// 5.
const http = require('http');

http.get('http://wttr.in/~kharkov', (html) => {
  html.setEncoding('utf-8');
  html.on('data', data => fs.appendFile('weather.html', data, (err) => {
    if (err) throw err;
  }));
});
