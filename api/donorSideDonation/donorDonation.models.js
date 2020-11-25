const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now 
    },
    donorName: {
        type: String,
        required: [true, "Donor name is required"]
    },
    logo: {
        type: Image
    },
    shippingMethod: {
        type: String,
        required: [true, "Shipping Method is required"]
    },
    shippingDateStart: {
        type: Date,
        required: [true, "Shipping Date Start is required"]
    },
    shippingDateEnd: {
        type: Date,
        required: [true, "Shipping Date Start is required"]
    },
    alternativeShippingDate: {
        type: Date,
    },
    pickUpAddress: {
        type: String,
        required: [true, "Pick up adddress is required"]
    },
    comments: {
        type: String,
    },
    status: {
        type: String
    },
    awaitingPaymeny: {
        type: String
    },
    paymentStatus: {
        type: String
    },
    contact: {
        contactName: {
            type: String
        },
        phone: {
            type: String
        }
    },
    items: [{
        tags: {
            type: String,
            default: 'כללי'
        }, 
        count:{
            type: String,
            required: [true, "Count is required"]
        },
        images: { 
            data: Buffer, 
            contentType: String,
            required: [true, "Image is required"]
        },
        comment: {
            type: String,
            default: ''
        },
        itemAccepted: {
            type: String, 
            default: 'no'
        }
    }]
});

module.exports = mongoose.model("Donor", donorSchema);