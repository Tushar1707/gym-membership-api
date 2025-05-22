const Attendance = require('../models/Attendance');

const checkIn = async (req, res) => {
  try {
    const attendance = await Attendance.create({ userId: req.user.id, checkInTime: new Date() });
    res.status(201).json(attendance);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ userId: req.user.id });
    res.json(attendance);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { checkIn, getAttendance };
