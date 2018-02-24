const mongoose = require('mongoose');
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

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
let save = function() {

}


// });

module.exports = save;