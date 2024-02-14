const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getAllUsers);

// Get a specific user by ID
router.get('/users/:userID', userController.getUserById);

// Create a new user
router.post('/users', userController.createUser);

// Update a user by ID
router.put('/users/:userID', userController.updateUserById);

// Delete a user by ID
router.delete('/users/:userID', userController.deleteUserById);

module.exports = router;
