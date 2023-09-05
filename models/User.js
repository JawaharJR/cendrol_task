const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: String,
  profilePicture: String, // Assuming you'll store the image URL or file path
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
