const restaurantsData = require('./sampleData.js');
const reviewsList = require('./sample_reviews.js');
const mongoose = require('mongoose');
const db = require('./db/mongodb.js');

mongoose.connect('mongodb://localhost/restaurantsData');

const getReviews = function () {
  // random length for how many reviews will render with minimum of 3 reviews
  const randomLength = Math.ceil(Math.random() * 10) + 3;
  const reviewsArray = [];
  // looping up to the random length
  for (var i = 1; i < randomLength; i++) {
    // random index generator
    const randomIdx = Math.floor(Math.random() * 100);
    // push random comments into array using randomIdx
    reviewsArray.push(reviewsList[randomIdx]);
  }
  // returns array of reviews
  return reviewsArray;
};

// const seedDb = function (restaurantsData) {
//   // looping thru restaurants
//   restaurantsData.forEach((restaurant) => {
//     // for a restaurant, use schema to set values
//     const eachRestaurant = {
//       restaurantId: restaurant.id,
//       restaurantName: restaurant.name,
//       restaurantReviews: getReviews(),
//     };
//     // save each one into db
//     db.insertOne(eachRestaurant, (error) => {
//       if (error) {
//         throw error;
//       }
//     });
//   });
// };

const seedDb = function (restaurantsData) {
  for (var i = 0; i < restaurantsData.length; i++) {
    const restaurant = restaurantsData[i];
    const eachRestaurant = {
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurantReviews: getReviews(),
    };
    // save each one into db
    db.insertOne(eachRestaurant, (error) => {
      if (error) {
        throw error;
      }
    });
    if (i === restaurantsData.length - 1) {
      mongoose.disconnect();
    }
  }
};

// seed data into db
seedDb(restaurantsData);

