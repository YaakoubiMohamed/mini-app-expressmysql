const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

// Get all categories
router.get('/categories', categorieController.getAllCategories);

// Get a specific categorie by ID
router.get('/categories/:categorieID', categorieController.getCategorieById);

// Create a new categorie
router.post('/categories', categorieController.createCategorie);

// Update a categorie by ID
router.put('/categories/:categorieID', categorieController.updateCategorieById);

// Delete a categorie by ID
router.delete('/categories/:categorieID', categorieController.deleteCategorieById);

module.exports = router;
