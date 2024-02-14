const express = require('express');
const router = express.Router();
const reclamationController = require('../controllers/reclamationController');

// Get all reclamations
router.get('/reclamations', reclamationController.getAllReclamations);

// Get a specific reclamation by ID
router.get('/reclamations/:reclamationID', reclamationController.getReclamationById);

// Create a new reclamation
router.post('/reclamations', reclamationController.createReclamation);

// Update a reclamation by ID
router.put('/reclamations/:reclamationID', reclamationController.updateReclamationById);


module.exports = router;
