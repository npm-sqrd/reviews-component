const restaurantsData = require('./sampleData.js');
const reviewsList = require('./sample_reviews.js');
const mongoose = require('mongoose');
const db = require('./db/mongodb.js');

mongoose.connect('mongodb://localhost:8000/restaurantsData');

let getReviews = function () {
  // random length for how many reviews will render (up to 10)
  let randomLength = () => {
    return Math.ceil(Math.random() * 10) + 1;
  }
  // random index generator
  let randomIdx = () => {
    return Math.floor(Math.random() * 100);
  }

  let reviewsArray = [];

  let length = randomLength();
  // looping up to the random length
  for (var i = 1; i < length; i++) {
    // push random comments into array using randomIdx
    let idx = randomIdx();
    reviewsArray.push(reviewsList[idx]);
  }
  // returns array of reviews
  return reviewsArray;
}

let seedDb = function (restaurantsData) {
  // looping thru restaurants
  restaurantsData.forEach((restaurant) => {
    // for a restaurant, use schema to set values
    let eachRestaurant = {
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantReviews: getReviews()
    }
    // save each one into db
    db.insertOne(eachRestaurant, (error) => {
      if (error) {
        throw error;
      }
    });
  });
};

// seed data into db
seedDb(restaurantsData);
