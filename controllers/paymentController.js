const Payment = require('../models/Payment');

const makePayment = async (req, res) => {
  try {
    const { userId, subscriptionId, amount, paymentMethod, transactionId } = req.body;
    const payment = await Payment.create({
      userId,
      subscriptionId,
      amount,
      paymentMethod,
      transactionId,
      status: 'completed'
    });
    res.status(201).json(payment);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id });
    res.json(payments);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { makePayment, getPayments };
