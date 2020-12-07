const fs = require('fs');

var donations = require('../../data/donation.json');

function query(filterBy) {
    let filteredDonations = [];
    switch (filterBy.status) {
        case 'Open donations':
            filteredDonations = donations.filter(d => d.status != 'on hold' && d.status != 'canceled');
            return filteredDonations;
        case 'Closed donations':
            filteredDonations = donations.filter(d => d.status == 'canceled');
            return filteredDonations;
        case 'Archived donations':
            filteredDonations = donations.filter(d => d.status == 'on hold');
            return filteredDonations;
        case 'All donations':
            return donations;
        default:
            break;
    }

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