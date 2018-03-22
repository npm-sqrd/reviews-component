require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/mongodb'); // mongodb
// const db = require('../sqldb/database'); // postgresql

const app = express();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react/dist`));

app.get('/restaurants/:id', (request, response) => {
  // mongodb
  response.set({ 'Access-Control-Allow-Origin': '*' });
  db.findByRestaurantId(request.params.id, (err, results) => {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });

  // postgresql
  // db.querydb(request.params.id, (err, data) => {
  //   if (err) response.sendStatus(500);
  //   response.json(data.rows);
  // });
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Express Server Up on port: ${port}`); });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const db = require('../db/mongodb');
//
// const port = process.env.PORT || 3001;
//
// const indexPath = path.join(__dirname, '../react/dist/index.html');
// const stylePath = path.join(__dirname, '../react/dist/style.css');
// const bundlePath = path.join(__dirname, '../react/dist/bundle-prod.js');
//
// http.createServer((req, res) => {
//   // index.html path
//   if (req.url === '/') {
//     // fs.readFileSync(indexPath, 'utf8', (err, file) => {
//     //   if (err) {
//     //     res.writeHead(404);
//     //     res.write(err.toString());
//     //     res.end();
//     //   } else {
//     //     res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     //res.write(file);
//     //     res.end(file);
//     //   }
//     const htmlStream = fs.createReadStream(indexPath);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     htmlStream.pipe(res);
//   // });
//
//     // css.style path
//   } else if (req.url === '/style.css') {
//     // fs.readFileSync(stylePath, 'utf8', (err, file) => {
//     //   if (err) {
//     //     res.writeHead(404, { 'Content-Type': 'text/html' });
//     //     res.write(err.toString());
//     //     res.end();
//     //   } else {
//     //     res.writeHead(200, { 'Content-Type': 'text/css' });
//     //     res.write(file);
//     //     res.end();
//     //   }
//     // });
//     const cssStream = fs.createReadStream(stylePath);
//     res.writeHead(200, { 'Content-Type': 'text/css' });
//     cssStream.pipe(res);
//     // bundle.js path
//   } else if (req.url === '/bundle-prod.js') {
//     // fs.readFileSync(bundlePath, 'utf8', (err, file) => {
//     //   if (err) {
//     //     res.writeHead(404, { 'Content-Type': 'text/html' });
//     //     res.write(err.toString());
//     //     res.end();
//     //   } else {
//     //     res.writeHead(200, { 'Content-Type': 'application/javascript' });
//     //     res.write(file);
//     //     res.end();
//     //   }
//     // });
//     const jsStream = fs.createReadStream(bundlePath);
//     res.writeHead(200, { 'Content-Type': 'text/javascript' });
//     jsStream.pipe(res);
//   // GET request
//   } else if (req.method === 'GET' && req.url.startsWith('/restaurants')) {
//     const id = Number(req.url.split('/')[2]);
//     db.findByRestaurantId(id, (err, data) => {
//       console.log('console.log', id, 'data', data);
//       if (err) {
//         res.writeHead(404);
//         res.write('Not Found!');
//         res.end();
//       } else {
//         res.writeHead(200, { contentType: 'application/json' });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// }).listen(port);
// console.log(`Node Server Up on port: ${port}`);
