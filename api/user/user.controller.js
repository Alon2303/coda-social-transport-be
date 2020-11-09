const userService = require("./user.service");
const mongoose = require('mongoose');
const User = require('../../models/User');
const db = require('../../services/dbQuerys/UserQuerys');


async function getAllUsersData(req, res) {
    const users = await userService.getAllUsers(req.query);
    res.send(users);
}

async function getUserByEmail(req, res) {
    const { email, password } = req.body;
    const user = await userService.getUser(email, password);
    console.log("user", user)
    res.send(user);
}

exports.singUp = async (req, res, next) => {
  try {
    const user = await db.findUserByEmail(req.body.email);
    if (user)
      return res.status(401).json({
        message: "user already exist,try again",
      });

    await db.addUser(req.body);
    return res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.singIn = async (req, res, next) => {
  try {
      const user = await db.findUserByEmail(req.body.email);
      if (!user) return res.status(400).message({
          message: "not exist"
      })

      const password = db.checkPassword(user.password,req.body.password);
      if(!password) return res.status(400).message({
        message: "worng password",
      });

      const token = 'token';
      return res.status(201).message({
          message: "ok",
          token: token
      })
      
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAllUsersData,
    getUserByEmail
};
