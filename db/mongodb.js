const mongoose = require('mongoose');
const sampleData = require('../sampleData');

mongoose.connect('mongodb://localhost/data');

let restaurantSchema = mongoose.Schema({
  restaurantId: Number,
  restaurantName: String,
  overallRating: Number,
  totalReviews: Number,
  reviews: [ 
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
      overallRating: Number,
      totalReviews: Number,
      reviews: [ 
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


// });

module.exports = save;