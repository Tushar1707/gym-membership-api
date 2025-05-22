const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const planRoutes = require('./routes/planRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/users', userRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => res.send('Gym Membership Management API'));

module.exports = app;
