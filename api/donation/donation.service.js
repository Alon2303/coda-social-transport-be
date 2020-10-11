const fs = require('fs');

var donations = require('../../data/donation.json');

function query() {
    return Promise.resolve(donations);
}

function getById(donationId) {
    const donation = donations.find(donation => donation.id === +donationId)
    return Promise.resolve(donation)
}

function remove(donationId) {
    const donationIdx = donations.findIndex(donation => donation.id === +donationId)
    donations.splice(donationIdx, 1);
    _saveDonationsToFile()
    return Promise.resolve()
}

function save(donation) {
    if (donation.id) {
        donation.updatedAt = Date.now();
        const donationIdx = donations.findIndex(currDonation => currDonation.id === +donation.id)
        if (donationIdx === -1) throw new Error('Donation not found')
        donations.splice(donationIdx, 1, donation);
    } else {
        donation.id = _makeId()
        donation.createdAt = Date.now();
        donations.push(donation);
    }
    _saveDonationsToFile();
    return Promise.resolve(donation);
}


module.exports = {
    query,
    getById,
    save,
    remove
}

function _makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveDonationsToFile() {
    fs.writeFileSync('data/donation.json', JSON.stringify(donations, null, 2));
}