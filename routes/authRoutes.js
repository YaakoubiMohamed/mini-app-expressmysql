const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validate');
const { verifyToken } = require('../middleware/auth');

router.post('/register',validate.register, authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/profile',verifyToken, authController.profile);

module.exports = router