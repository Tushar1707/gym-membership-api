const express = require('express');
const router = express.Router();

const { register, login, getAllUsers, getProfile, updateProfile, deleteUser } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const { loginLimiter } = require('../middleware/rateLimit');

router.post('/register', register);
router.post('/login', loginLimiter, login);

router.get('/', protect, authorize(['admin']), getAllUsers);
router.get('/:id', protect, getProfile);
router.put('/:id', protect, updateProfile);
router.delete('/:id', protect, authorize(['admin']), deleteUser);

module.exports = router;
