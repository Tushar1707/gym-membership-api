const express = require('express');
const router = express.Router();

const { createSubscription, getSubscriptions, freezeSubscription, cancelSubscription } = require('../controllers/subscriptionController');
const { protect, authorize } = require('../middleware/auth');

router.post('/', protect, createSubscription);
router.get('/', protect, authorize(['admin']), getSubscriptions);
router.put('/freeze/:id', protect, freezeSubscription);
router.put('/cancel/:id', protect, cancelSubscription);

module.exports = router;
