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
        data: Buffer,
        contentType: String
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
        type: Date
    },
    alternativeShippingDate: {
        type: Date,
    },
    pickUpAddress: {
        type: String
    },
    shippingComments: {
        type: String,
    },
    comments: {
        type: String,
    },
    status: {
        type: String,
        default: 'חדש'
    },
    awaitingPayment: {
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
            type: String
        },
        count: {
            type: String,
            required: [true, "Count is required"]
        },
        images: {
            data: Buffer,
            contentType: String
        },
        comment: {
            type: String,
            default: ''
        },
        itemAccepted: {
            type: String,
            default: ''
        },
        rejectionReason: {
            type: String,
            default: ''
        }
    }]
});

module.exports = mongoose.model("Donor", donorSchema);