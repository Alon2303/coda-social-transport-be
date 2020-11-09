const mongoose = require("mongoose");
const User = require("../../models/User");


exports.findUserByEmail = async (userEmail) => {
  return await User.findOne({ email: userEmail }).exec();
};

exports.addUser = async (user) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    email: user.email,
    password: user.password,
    name: user.name,
  });
  return await newUser.save();
};