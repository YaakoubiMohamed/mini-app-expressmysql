const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Get all messages
router.get('/messages', messageController.getAllMessages);

// Get a specific message by ID
router.get('/messages/:messageID', messageController.getMessageById);

// Create a new message
router.post('/messages', messageController.createMessage);

// Update a message by ID
router.put('/messages/:messageID', messageController.updateMessageById);

// Delete a message by ID
router.delete('/messages/:messageID', messageController.deleteMessageById);

module.exports = router;
