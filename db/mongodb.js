const mongoose = require('mongoose');
const sampleData = require('../sampleData');
const reviews = require('../sample_reviews');

mongoose.connect('mongodb://localhost/restaurantsData');

let restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  // overallRating: Number,
  // totalReviews: Number,
  restaurantReviews: [ 
  { id: Number,
    username: String, 
    userCity: String,
    userDinedDate: Date,
    rating: Number,
    review: String }  
  ]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let save = function(reviews, callback) {

  reviews.forEach( review => {
    let restaurantInstance = new Restaurant({
      restaurantId: Number,
      restaurantName: String,
      // overallRating: Number,
      // totalReviews: Number,
      restaurantReviews: [ 
      { id: Number,
        username: String, 
        userCity: String,
        userDinedDate: Date,
        rating: Number,
        review: String }  
      ]
    })
  });
}

function insertOne(restaurant, callback) {
  Restaurant.create(restaurant, callback);
}
// });

module.exports.save = save;
module.exports.insertOne = insertOne;