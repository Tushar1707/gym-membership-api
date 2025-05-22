const User = require('../models/User');
const Subscription = require('../models/Subscription');
const Payment = require('../models/Payment');

const getInvoice = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const subscription = await Subscription.findOne({ userId }).sort({ endDate: -1 }).populate('planId');
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    const payment = await Payment.findOne({ userId, subscriptionId: subscription._id }).sort({ paymentDate: -1 });
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    const invoice = {
      invoiceNumber: `INV-${payment._id.toString().slice(-6).toUpperCase()}`,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      plan: {
        name: subscription.planId.name,
        duration: subscription.planId.duration,
        price: subscription.planId.price,
        accessType: subscription.planId.accessType
      },
      payment: {
        amount: payment.amount,
        method: payment.paymentMethod,
        date: payment.paymentDate
      },
      subscriptionPeriod: {
        startDate: subscription.startDate,
        endDate: subscription.endDate
      }
    };

    res.json(invoice);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getInvoice };
