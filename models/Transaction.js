const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
    required: [true, 'Please add item description']
  },
  amount: {
    type: Number,
    required: [true, 'Please add number of items']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
