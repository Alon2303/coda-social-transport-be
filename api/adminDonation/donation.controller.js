const donationService = require("./donation.service");
const Donor = require('../donorSideDonation/donorDonation.models');
const db = require('./dbQuerys/adminDonationQuerys');

async function getDonation(req, res) {
    const { id } = req.params;
    const donationDB = await db.getById(id);
    console.log('FOUND ONE: ', donationDB);
    const donation = await donationService.getById(id);
    res.send(donationDB);

}

async function getDonations(req, res) {
    const donationsDB = await db.getDonations();
    console.log('TEST - donationsDB: ', donationsDB);
    const donations = await donationService.query(req.query);
    res.send(donationsDB);
}

async function updateDonation(req, res) {
    const donation = req.body;
    // const updatedDonation = await db.update(donation);
    // console.log('TEST - donationsDB: ', updatedDonation);
    await donationService.save(donation);
    res.send(donation);
}

async function deleteDonation(req, res) {
    // await db.remove(donation);
    await donationService.remove(req.params.id);
    res.end();
}

// async function addDonation(req, res) {
//     var donation = req.body;
//     donation = await donationService.add(donation);
//     res.send(donation);
// }

module.exports = {
    getDonation,
    getDonations,
    deleteDonation,
    updateDonation,
    // addDonation
};