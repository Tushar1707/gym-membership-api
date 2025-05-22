const express = require('express');
const router = express.Router();

const { checkIn, getAttendance } = require('../controllers/attendanceController');
const { protect } = require('../middleware/auth');

router.post('/checkin', protect, checkIn);
router.get('/', protect, getAttendance);

module.exports = router;
