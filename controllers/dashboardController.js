const User = require('../models/User');
const Subscription = require('../models/Subscription');
const Attendance = require('../models/Attendance');
const Payment = require('../models/Payment');
const Plan = require('../models/Plan');

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeSubscriptions = await Subscription.countDocuments({ status: 'active' });

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const checkInsToday = await Attendance.countDocuments({
      checkInTime: { $gte: startOfDay, $lte: endOfDay }
    });

    const payments = await Payment.find({ status: 'completed' });
    const totalRevenue = payments.reduce((sum, pay) => sum + pay.amount, 0);

    const popularPlanAggregation = await Subscription.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$planId', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);

    let mostPopularPlan = null;
    if (popularPlanAggregation.length > 0) {
      const plan = await Plan.findById(popularPlanAggregation[0]._id);
      mostPopularPlan = plan ? plan.name : null;
    }

    res.json({
      totalUsers,
      activeSubscriptions,
      checkInsToday,
      totalRevenue,
      mostPopularPlan
    });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getDashboardStats };
