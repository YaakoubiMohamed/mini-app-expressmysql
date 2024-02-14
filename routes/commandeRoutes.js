const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// Get all commandes
router.get('/commandes', commandeController.getAllCommandes);

// Get a specific commande by ID
router.get('/commandes/:commandeID', commandeController.getCommandeById);

// Create a new commande
router.post('/commandes', commandeController.createCommande);

// Update an commande by ID
router.put('/commandes/:commandeID', commandeController.updateCommandeById);

// Delete an commande by ID
router.delete('/commandes/:commandeID', commandeController.deleteCommandeById);

module.exports = router;
