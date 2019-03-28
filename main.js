const date =  new Date().toLocaleString();
console.log(date);
console.log(require('path').basename(__filename));

const getNumber = require('./number');
console.log(getNumber(1, 5));
