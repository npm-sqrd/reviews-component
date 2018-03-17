const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurants_reviews');

const restaurantSchema = mongoose.Schema({
  restaurantId: { type: Number, required: true, unique: true },
  restaurantName: { type: String, required: true },
  restaurantReviews: [
    {
      username: { type: String, required: true },
      city: { type: String, required: true },
      dinedDate: { type: Date, required: true },
      rating: { type: Number, required: true },
      review: { type: String, required: true },
    },
  ],
}).index({ id: 1, restaurantName: 1 });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

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
