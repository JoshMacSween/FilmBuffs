const mongoose = require("mongoose");
const { movieSchema } = require("./Movie");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  watchList: [movieSchema],
});

module.exports = mongoose.model("User", userSchema);
