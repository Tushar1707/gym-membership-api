const Plan = require('../models/Plan');

const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const addPlan = async (req, res) => {
  try {
    const { name, duration, price, accessType } = req.body;
    const plan = await Plan.create({ name, duration, price, accessType });
    res.status(201).json(plan);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const updatePlan = async (req, res) => {
  try {
    const updated = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const deletePlan = async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plan deleted' });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getPlans, addPlan, updatePlan, deletePlan };
