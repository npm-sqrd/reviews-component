DROP DATABASE IF EXISTS restaurants_reviews;
CREATE DATABASE restaurants_reviews;

\c restaurants_reviews;

CREATE TABLE restaurant
(
  restaurantId    serial  PRIMARY KEY,
  restaurantName  text    NOT NULL
);

\copy restaurant(restaurantName) FROM 'sqldb/csv-file/restaurant-data.csv' DELIMITER ',' CSV

CREATE TABLE review
(
  reviewId      serial      PRIMARY KEY,
  username      text        NOT NULL,
  city          text        NOT NULL,
  dinedDate     date        NOT NULL,
  rating        integer     NOT NULL,
  review        text        NOT NULL,
  restaurant_Id integer     REFERENCES restaurant (restaurantId)
);

\copy review(username, city, dinedDate, rating, review, restaurant_Id) FROM 'sqldb/csv-file/review-data.csv' DELIMITER ',' CSV

CREATE INDEX ON restaurant (restaurantName);
CREATE INDEX ON review (restaurant_id);

-- EXPLAIN ANALYZE SELECT * FROM restaurant INNER JOIN review ON restaurant.restaurantName = 'Bergstrom-Heaney5000000' AND restaurant.restaurantId = review.restaurant_Id;

-- psql postgres < sqldb/schema.sql
