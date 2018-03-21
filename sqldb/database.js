const { Client } = require('pg');

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

const querydb = (restoId, cb) => {
  client.query('SELECT * FROM restaurant INNER JOIN review ON restaurant.restaurantId = $1 AND restaurant.restaurantId = review.restaurant_Id', [restoId], (err, data) => {
    if (err) cb(err);
    cb(null, data);
  });
};

module.exports.querydb = querydb;
