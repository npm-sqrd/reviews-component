const { Client } = require('pg');
// const { Pool } = require('pg');

// const pool = new Pool();



const client = new Client({
  host: 'localhost',
  user: 'nicolaspeyrichou',
  database: 'restaurants_reviews',
  password: '',
  port: 5432,
});

client.connect((err) => {
  if (err) console.err('Connection to postgresql error');
  console.log('Connected to postgresql');
});

// promise - checkout a client
const querydb = (restoId, cb) => {
  // new Promise((resolve, reject) => {
  // client.query('SELECT * FROM restaurant INNER JOIN review ON restaurant.restaurantId = $1 AND restaurant.restaurantId = review.restaurant_Id', [restoId], (err, data) => {
  //     if (err) reject(err);
  //     resolve(data);
  //   });
  // });
  client.query('SELECT * FROM restaurant INNER JOIN review ON restaurant.restaurantId = $1 AND restaurant.restaurantId = review.restaurant_Id', [restoId], (err, data) => {
    if (err) cb(err);
    cb(null, data)
  });
};

module.exports = client;
module.exports.querydb = querydb;
