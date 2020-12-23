const mongoose = require("mongoose");
const Donor = require('../../donorSideDonation/donorDonation.models');


exports.getDonations = async (filterBy) => {
    let filteredDonations = [];
    switch (filterBy.status) {
        case 'Open donations':
            filteredDonations = await Donor.find({
                status: {
                    $in: [
                        'חדש',
                        'ממתין להובלה',
                        'ממתין לתשלום'
                    ]
                }
            });
            // filteredDonations = donations.filter(d => d.status != 'on hold' && d.status != 'canceled');
            return filteredDonations;
        case 'Closed donations':
            filteredDonations = await Donor.find({ status: 'canceled' });
            return filteredDonations;
        case 'Archived donations':
            filteredDonations = await Donor.find({ status: 'on hold' });
            return filteredDonations;
        case 'All donations':
            filteredDonations = await Donor.find({});
            return filteredDonations;
        default:
            break;
    }

    const donationsMap = {};
    filteredDonations.forEach((donation) => {
        donationsMap[donation._id] = donation;
    });
    return filteredDonations;
};

exports.getById = async (id) => {
    const donation = await Donor.findOne({
        _id: id
    });
    return donation;
}

exports.update = async (donation) => {
    // Es6 assign
    var donationToUpdate = {};
    donationToUpdate = Object.assign(donationToUpdate, donation);
    console.log('donationToUpdate ::::::::: ', donationToUpdate);
    delete donationToUpdate._id;

    const updatedDonation = await Donor.findByIdAndUpdate(
        donation._id,
        donationToUpdate,
        // { upsert: true } // if property doesnt exist, insert it.
    ).exec();
    // .exec(function (err) {
    //     if (err) return error;
    //     return updatedDonation;

    // });
    console.log('updatedDonation ::::::::: ', updatedDonation);
    return updatedDonation;
}

exports.remove = async (id) => {
    const donation = await Donor.findOneAndRemove({
        _id: id
    });
    return;
}