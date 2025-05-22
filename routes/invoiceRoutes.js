const express = require('express');
const router = express.Router();

const { getInvoice } = require('../controllers/invoiceController');
const { protect } = require('../middleware/auth');

router.get('/:userId', protect, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.id === req.params.userId) next();
  else res.status(403).json({ message: 'Forbidden' });
}, getInvoice);

module.exports = router;
