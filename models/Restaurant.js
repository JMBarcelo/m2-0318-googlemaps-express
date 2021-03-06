const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
restaurantSchema.index({ location: "2dsphere" });

let Restaurant = mongoose.model("Restaurant", restaurantSchema);

Restaurant.on('index', function(error) {
    // "_id index cannot be sparse"
    console.log(error);
});

module.exports = Restaurant;
