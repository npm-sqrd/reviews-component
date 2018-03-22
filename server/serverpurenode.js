const fs = require('fs');
const http = require('http');
const db = require('../db/mongodb');

const html = fs.readFileSync('./react/dist/index.html', 'utf8');
const css = fs.readFileSync('./react/dist/style.css', 'utf8');
const bundle = fs.readFileSync('./react/dist/bundle-prod.js', 'utf8');

const port = process.env.PORT || 3001;

const files = {
  'index.html': html,
  'style.css': css,
  'bundle-prod.js': bundle,
};

const filePathsAndType = {
  '/': 'text/html',
  '/index.html': 'text/html',
  '/style.css': 'text/css',
  '/bundle-prod.js': 'application/javascript',
};

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/restaurants')) {
    const id = Number(req.url.slice(13));
    db.findByRestaurantId(id, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('Not Found!');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const jsonString = JSON.stringify(data);
        res.end(jsonString);
      }
    });
  } else if (['/', '/index.html', '/style.css', '/bundle-prod.js'].includes(req.url)) {
    res.writeHead(200, { 'Content-Type': filePathsAndType[req.url] });
    res.end(req.url === '/' ? files['index.html'] : files[req.url.slice(1)]);
  } else {
    res.writeHead(404);
    res.write('Not Found!');
    res.end();
  }
}).listen(port);
console.log(`Node Server Up on port: ${port}`);
