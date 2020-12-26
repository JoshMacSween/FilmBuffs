const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // poster: {
  //   type: String,
  //   required: true,
  // },
  // movie_id: {
  //   type: String,
  //   required: true,
  // },
});

module.exports.movieSchema = movieSchema;
module.exports.Movie = mongoose.model("Movie", movieSchema);
