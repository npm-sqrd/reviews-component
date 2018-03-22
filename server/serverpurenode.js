const http = require('http');
const path = require('path');
const fs = require('fs');
const db = require('../db/mongodb');

const port = process.env.PORT || 3001;
const indexPath = '../react/dist/index.html';
const stylePath = '../react/dist/style.css';

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(err.toString());
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data.toString());
        res.end();
      }
    });
  } else if (req.method === 'GET' && req.url === '/restaurants/:id') {
    db.findByRestaurantId(req, (err, results) => {
      if (err) {
        res.writeHead(404);
        res.write('Not Found!');
        res.end();
      } else {
        res.writeHead(200, { contentType: 'application/json' });
        res.end(results);
      }
    });
  }
}).listen(port);
console.log(`Node Server Up on port: ${port}`);
