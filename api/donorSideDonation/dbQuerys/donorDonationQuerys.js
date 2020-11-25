const mongoose = require("mongoose");
const Donor = require("./../donorDonation.models");

exports.findUserByEmail = async (userEmail) => {
    return await User.findOne({ email: userEmail }).exec();
};

exports.checkPassword = async (password1, password2) => {
    if(password1 == password2){
        return true;
    }else{
        return false;
    }
}

exports.addDonorDonation = async (donor) => {
    const newDonorDonation = new Donor({
        _id: new mongoose.Types.ObjectId(),
        date: donor.date,
        donorName: donor.donorName,
        logo: donor.logo,
        shippingMethod: donor.shippingMethod,
        shippingDateStart: donor.shippingDateStart,
        shippingDateEnd: donor.shippingDateEnd,
        alternativeShippingDate: donor.alternativeShippingDate,
        pickUpAddress: donor.pickUpAddress,
        comments: donor.comments,
        status: donor.status,
        awaitingPaymeny: donor.awaitingPaymeny,
        paymentStatus: donor.paymentStatus,
        contact: donor.contact,
        items: donor.items
    });
    return await newDonorDonation.save();
};
