const express = require('express');
const db = require('../db/mongodb');
var app = express();
// root dir + index.html
app.use(express.static(__dirname + '../index.html'));
app.get('/restaurants', (request, response) => {
  response.send('Restaurant Reviews');
});

app.listen(3000, () => console.log('Server Up on port 3000.'));

module.exports = app;