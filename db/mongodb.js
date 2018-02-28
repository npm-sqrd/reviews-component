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
    city: String,
    dinedDate: Date,
    rating: Number,
    review: String }  
  ]
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);


function insertOne(restaurant, callback) {
  Restaurant.create(restaurant, callback);
}

function findByRestaurantId(id, callback) {
  Restaurant.find({ restaurantId: id }).exec(callback);
}

module.exports.insertOne = insertOne;
module.exports.findByRestaurantId = findByRestaurantId;