// 1.
console.log(new Date().toLocaleString());
console.log(require('path').basename(__filename));

// 2.
const getNumber = require('./number');
console.log(getNumber(1, 5));

// 3.
const httpGet = require('./httpGet');

httpGet('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.length))
  .catch(err => console.log(err));
