const mongoose = require('mongoose');
const restaurantsData = require('./restaurant-data');
const db = require('./db/mongodb.js');

let counter = 0;

restaurantsData.forEach((x) => {
  const eachRestaurant = {
    restaurantId: x.id,
    restaurantName: x.name,
    restaurantReviews: [
      {
        username: x.reviews[0].username,
        city: x.reviews[0].city,
        dinedDate: x.reviews[0].dinedDate,
        rating: x.reviews[0].rating,
        review: x.reviews[0].review,
      },
    ],
  };

  db.insertOne(eachRestaurant, (err) => {
    if (err) {
      console.log('Data insert error', err);
    } else {
      counter++;
      console.log('DATA INSERTED', counter);
      if (counter === 1000000) {
        mongoose.disconnect();
      }
    }
  });
});
