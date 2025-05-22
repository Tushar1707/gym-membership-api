const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
  amount: Number,
  paymentMethod: { type: String, enum: ['cash', 'card', 'UPI'] },
  transactionId: String,
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['completed', 'pending', 'failed'], default: 'completed' }
});

module.exports = mongoose.model('Payment', paymentSchema);
