const https = require('https');
function getPost (url) {
  return new Promise((resolve) => {
  
    https.get(url, (res) => {
      let result = '';
      res.setEncoding('utf-8');
      res.on('data',data =>  result += data);
      res.on('end',() => resolve(JSON.parse(result)));
    });
  });
}

module.exports = getPost;
