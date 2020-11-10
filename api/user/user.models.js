const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: [true,"email is requaierd"],
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: [true,"password is requaierd"],
  },
  name: {
    type: String,
    required: [true,"name is requaierd"],
  },
  phone: {
    type: Number,
    required: [true,"phone is requaierd"],
  },
  companyName: {
    type: String,
  },
  address: {
    type: String,
  }
});

module.exports = mongoose.model("User", userSchema);
