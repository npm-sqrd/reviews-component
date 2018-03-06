const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/mongodb');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/restaurantsData');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react/dist'));

app.get('/restaurants/:id', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin' : '*' });
  db.findByRestaurantId(request.params.id, (err, results) => {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log(results);
      response.json(results);
    }
  })
});

app.listen(3000, () => console.log('Server Up on port 3000.'));

module.exports = app; 