const donationService = require("./donation.service");

async function getDonation(req, res) {
    const { id } = req.params;
    const donation = await donationService.getById(id);
    res.send(donation);

}

async function addDonation(req, res) {
    var donation = req.body;
    donation = await donationService.add(donation);
    res.send(donation);
}

async function query(req, res) {
    const donations = await donationService.query(req.query);
    res.send(donations);
}

async function deleteDonation(req, res) {
    await donationService.remove(req.params.id);
    res.end();
}

async function updateDonation(req, res) {
    const donation = req.body;
    await donationService.save(donation);
    res.send(donation);
}

module.exports = {
    getDonation,
    query,
    deleteDonation,
    updateDonation,
    addDonation
};