DROP DATABASE IF EXISTS restaurants_reviews;
CREATE DATABASE restaurants_reviews;

\c restaurants_reviews;

CREATE TABLE restaurant
(
  restaurantId    serial  PRIMARY KEY,
  restaurantName  text    NOT NULL
);

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

-- INSERT INTO restaurant (restaurantId, restaurantName)
--   VALUES (1, 'Tyler');
--
-- INSERT INTO review (username, city, dinedDate, rating, review)
--   VALUES ('Tyler', 'San Francisco', '03/17/2018', 4, 'dver fvfevererfg fvev vfevev');
--
-- INSERT INTO review (username, city, dinedDate, rating, review)
--   VALUES ('Matt', 'Los Angeles', '03/18/2018', 3, 'werggewg fvfevererfg ergregeg vfevev');
--
-- INSERT INTO review (username, city, dinedDate, rating, review)
--   VALUES ('Angel', 'New York', '03/19/2018', 2, 'dver gegrg fvev eretergeg');
