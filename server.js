const http = require('http'),
      fs = require('fs'),
      ext = ['png', 'jpg', 'ico'],
      reg = new RegExp(`\\.(${ext.join('|')})$`);

const server = http.createServer((req, res) => {
  
  if (reg.test(req.url)) {
    fs.readFile(req.url.replace('/', ''), (err, data) => {
      if (err) {
        res.end('<strong>Error!</strong>');
      }
      
      res.end(data);
    });

    return;
  }

  if (req.url.includes('.js')) {
    res.setHeader('Content-Type', 'text/javascript');

    fs.readFile('img.js', 'utf-8', (err, data) => {
      if (err) {
        res.end('<strong>Error!</strong>');
      }
      
      res.end(data);
    });

    return;
  }

  res.setHeader('Content-Type', 'text/html');

  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.end('<strong>404! Page not found!</strong>');
      throw new Error('Error while reading index.html');
    }

    res.setHeader('Content-Type', 'text/html');
    res.end(data.replace(`</body>`, `<h2>${new Date().toLocaleString()}</h2></body>`));
    res.end(data);
  });

});

server.listen(1111, () => {
  console.log('Server go');
});

