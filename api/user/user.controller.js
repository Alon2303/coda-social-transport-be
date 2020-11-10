const mongoose = require('mongoose');
const User = require('./user.models');
const db = require('./dbQuerys/UserQuerys');

async function singUp(req, res, next){
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

async function singIn(req, res, next) {
  try {
      const user = await db.findUserByEmail(req.body.email);
      if (!user) return res.status(400).message({
          message: "not exist"
      })
      const password = await db.checkPassword(user.password,req.body.password);
      console.log("checking", password)
      console.log("checking2", !password)

      if(!password) return res.status(400).send("worng password");
      const token = 'token';
      return res.status(201).json({
          message: "ok",
          token: token
      })
  } catch (error) {
    next(error);
  }
};

module.exports = {
    singUp,
    singIn
};
