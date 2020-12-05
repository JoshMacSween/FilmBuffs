const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  userName: {
    type: String
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
})

//Export the model
module.exports = mongoose.model('User', userSchema)
