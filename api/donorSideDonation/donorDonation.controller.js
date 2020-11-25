const mongoose = require('mongoose');
const Donor = require('./donorDonation.models');
const db = require('./dbQuerys/donorDonationQuerys');

async function donor(req, res, next){
  try {
    const user = await db.findUserByEmail(req.body.email);
    if (user)
      return res.status(401).json({
        message: "The donation is already exist,try again",
      });
    await db.addUser(req.body);
    return res.status(201).json({
      message: "Donation was Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    donor
};
