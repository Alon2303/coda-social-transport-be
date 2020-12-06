const mongoose = require("mongoose");
const User = require("./../user.models");

exports.findUserByEmail = async (userEmail) => {
    return await User.findOne({ email: userEmail }).exec();
};

exports.checkPassword = async (password1, password2) => {
    if(password1 == password2){
        return true;
    }else{
        return false;
    }
}

exports.addUser = async (user) => {
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email: user.email,
        password: user.password,
        name: user.name
    });
    return await newUser.save();
};