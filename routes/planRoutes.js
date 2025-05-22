const express = require('express');
const router = express.Router();

const { getPlans, addPlan, updatePlan, deletePlan } = require('../controllers/planController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', protect, getPlans);
router.post('/', protect, authorize(['admin']), addPlan);
router.put('/:id', protect, authorize(['admin']), updatePlan);
router.delete('/:id', protect, authorize(['admin']), deletePlan);

module.exports = router;
