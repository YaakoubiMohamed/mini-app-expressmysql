const express = require('express');
const router = express.Router();
const ligneCommandeController = require('../controllers/ligneCommandeController');

// Get all commande lines
router.get('/commandelines', ligneCommandeController.getAllLigneCommandes);

// Get a specific commande line by ID
router.get('/commandelines/:ligneCommandeID', ligneCommandeController.getLigneCommandeById);

// Create a new commande line
router.post('/commandelines', ligneCommandeController.createLigneCommande);

// Update an commande line by ID
router.put('/commandelines/:ligneCommandeID', ligneCommandeController.updateLigneCommandeById);

// Delete an commande line by ID
router.delete('/commandelines/:ligneCommandeID', ligneCommandeController.deleteLigneCommandeById);

module.exports = router;
