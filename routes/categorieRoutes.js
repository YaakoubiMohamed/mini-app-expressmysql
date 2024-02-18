const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');
const { verifyToken, checkRole } = require('../middleware/auth');

// Get all categories
router.get('/categories',  verifyToken, categorieController.getAllCategories);

// Get a specific categorie by ID
router.get('/categories/:categorieID', verifyToken, categorieController.getCategorieById);

// Create a new categorie
router.post('/categories', verifyToken, checkRole('admin'), categorieController.createCategorie);

// Update a categorie by ID
router.put('/categories/:categorieID', verifyToken, checkRole('admin'), categorieController.updateCategorieById);

// Delete a categorie by ID
router.delete('/categories/:categorieID', verifyToken, checkRole('admin'), categorieController.deleteCategorieById);

module.exports = router;
