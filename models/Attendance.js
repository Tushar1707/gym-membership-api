const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkInTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
