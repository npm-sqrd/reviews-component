const mongoose = require('mongoose');
const sampleData = require('../sampleData');
const reviews = require('../sample_reviews');

mongoose.connect(`mongodb://Miken:1234@ds261828.mlab.com:61828/restaurants_reviews`);

let restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  restaurantReviews: [ 
  { 
    // id: Number,
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
  Restaurant.find({ restaurantId: id }).exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports.insertOne = insertOne;
module.exports.findByRestaurantId = findByRestaurantId;