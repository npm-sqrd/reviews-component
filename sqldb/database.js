const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'nicolaspeyrichou',
  database: 'restaurants_reviews',
  password: '',
  port: 5432,
});

module.exports = client;

// psql postgres < sqldb/schema.sql
