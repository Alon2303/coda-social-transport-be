const donationService = require("./donation.service");
const Donor = require('../donorSideDonation/donorDonation.models');
const db = require('./dbQuerys/adminDonationQuerys');

async function getDonation(req, res) {
    const { id } = req.params;
    const donation = await db.getById(id);
    res.send(donation);

}

async function getDonations(req, res) {
    console.log("req.query: ", req.query);
    const donations = await db.getDonations(req.query);
    // console.log('TEST - donationsDB: ', donationsDB);
    res.send(donations);
}

async function updateDonation(req, res) {
    const donation = req.body;
    const updatedDonation = await db.update(donation);
    console.log('TEST - donationsDB: ', updatedDonation);
    // await donationService.save(donation);
    res.send(donation);
}

async function deleteDonation(req, res) {
    // await db.remove(donation);
    await donationService.remove(req.params.id);
    res.end();
}

module.exports = {
    getDonation,
    getDonations,
    deleteDonation,
    updateDonation,
};