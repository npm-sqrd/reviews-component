require('newrelic');
const fs = require('fs');
const http = require('http');
const db = require('../db/mongodb');
const { redisClient } = require('../redisindex');

const port = process.env.PORT || 3001;

const html = './react/dist/index.html';
const css = './react/dist/style.css';
const bundle = './react/dist/bundle-prod.js';
const bundleServer = './react/dist/bundle-prod-server.js';

http.createServer((req, res) => {
  // GET request
  if (req.method === 'GET' && req.url.startsWith('/restaurants')) {
    const id = Number(req.url.slice(13));
    redisClient.get(id, (err, reply) => {
      if (err) {
        console.log(err);
      } else if (reply !== null) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(reply);
      } else {
        db.findByRestaurantId(id, (error, data) => {
          if (error) {
            res.writeHead(404);
            res.write('Not Found!');
            res.end();
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const jsonString = JSON.stringify(data);
            redisClient.setex(`${id}`, 60, jsonString);
            res.end(jsonString);
          }
        });
      }
    });

  // index.html path
  } else if (req.url === '/') {
    fs.readFile(html, 'utf8', (err, file) => {
      if (err) {
        res.writeHead(404);
        res.write(err.toString());
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(file);
        res.end();
      }
    });
  // css.style path
  } else if (req.url === '/style.css') {
    fs.readFile(css, 'utf8', (err, file) => {
      if (err) {
        res.writeHead(404);
        res.write(err.toString());
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(file);
        res.end();
      }
    });
  // bundle.js path
  } else if (req.url === '/bundle-prod.js') {
    fs.readFile(bundle, 'utf8', (err, file) => {
      if (err) {
        res.writeHead(404);
        res.write(err.toString());
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(file);
        res.end();
      }
    });
  } else if (req.url === '/bundle-prod-server.js') {
    fs.readFile(bundleServer, 'utf8', (err, file) => {
      if (err) {
        res.writeHead(404);
        res.write(err.toString());
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.write(file);
        res.end();
      }
    });
  }
}).listen(port);
console.log(`Node Server Up on port: ${port}`);
