const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

// Get all produits
router.get('/produits', produitController.getAllProduits);

// Get a specific produit by ID
router.get('/produits/:produitID', produitController.getProduitById);

// Create a new produit
router.post('/produits', produitController.createProduit);

// Update a produit by ID
router.put('/produits/:produitID', produitController.updateProduitById);

// Delete a produit by ID
router.delete('/produits/:produitID', produitController.deleteProduitById);

module.exports = router;
