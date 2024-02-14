const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');

// Get all shopping carts
router.get('/paniers', panierController.getAllPaniers);

// Get a specific shopping cart by ID
router.get('/paniers/:cartID', panierController.getPanierById);

// Create a new shopping cart
router.post('/paniers', panierController.createPanier);

// Update a shopping cart by ID
router.put('/paniers/:cartID', panierController.updatePanierById);

// Delete a shopping cart by ID
router.delete('/paniers/:cartID', panierController.deletePanierById);

module.exports = router;
