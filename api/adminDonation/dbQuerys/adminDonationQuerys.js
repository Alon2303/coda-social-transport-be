const mongoose = require("mongoose");
const Donor = require('../../donorSideDonation/donorDonation.models');


exports.getDonations = async () => {
    const donations = await Donor.find({});
    const donationsMap = {};
    donations.forEach((donation) => {
        donationsMap[donation._id] = donation;
    });
    return donations;
};

exports.getById = async (id) => {
    const donation = await Donor.findOne({
        _id: id
    });
    return donation;
}

exports.update = async (donation) => {
    const updatedDonation = await Donor.findOneAndUpdate(
        { _id: donation.id },
        { $set: { donorName: donation.donorName } },
        { upsert: true } // if property doesnt exist, insert it.
    );
    return updatedDonation;
}

exports.remove = async (id) => {
    const donation = await Donor.findOneAndRemove({
        _id: id
    });
    return;
}