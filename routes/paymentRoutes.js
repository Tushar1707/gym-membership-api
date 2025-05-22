const express = require('express');
const router = express.Router();

const { makePayment, getPayments } = require('../controllers/paymentController');
const { protect } = require('../middleware/auth');

router.post('/', protect, makePayment);
router.get('/', protect, getPayments);

module.exports = router;
