const date =  new Date().toLocaleString();
console.log(date);
console.log(require('path').basename(__filename));


const getNumber = require('./number');
console.log(getNumber(1, 5));


const httpGet = require('./httpGet.js');

httpGet('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.length))
  .catch(err => console.log(err));
  