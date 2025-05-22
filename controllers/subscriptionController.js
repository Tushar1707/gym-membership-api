const Subscription = require('../models/Subscription');
const Plan = require('../models/Plan');

const createSubscription = async (req, res) => {
  try {
    const { userId, planId, startDate } = req.body;

    const plan = await Plan.findById(planId);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(end.getDate() + plan.duration);

    const subscription = await Subscription.create({
      userId,
      planId,
      startDate: start,
      endDate: end,
      status: 'active'
    });

    res.status(201).json(subscription);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find().populate('userId planId');
    res.json(subs);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const freezeSubscription = async (req, res) => {
  try {
    const { startFreeze, endFreeze } = req.body;
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    subscription.freeze = { start: new Date(startFreeze), end: new Date(endFreeze) };
    subscription.status = 'frozen';

    await subscription.save();
    res.json(subscription);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const cancelSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    subscription.status = 'cancelled';
    await subscription.save();
    res.json(subscription);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createSubscription, getSubscriptions, freezeSubscription, cancelSubscription };
