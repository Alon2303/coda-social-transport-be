const mongoose = require('mongoose');
const Donor = require('./donorDonation.models');
const db = require('./dbQuerys/donorDonationQuerys');

async function donor(req, res, next){
  try {
    await db.addDonorDonation(req.body);
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
