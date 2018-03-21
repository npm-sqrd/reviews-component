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

app.listen(port, () => { console.log(`Server Up on port: ${port}`); });

module.exports = app;
