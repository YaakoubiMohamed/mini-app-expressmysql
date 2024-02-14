const { Commande } = require('../models');

// Controller methods
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.findAll();
    res.json(commandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommandeById = async (req, res) => {
  const commandeID = req.params.commandeID;
  try {
    const commande = await Commande.findByPk(commandeID);
    if (commande) {
      res.json(commande);
    } else {
      res.status(404).json({ message: 'Commande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCommande = async (req, res) => {
  const { userID, date, totale } = req.body;
  try {
    const newCommande = await Commande.create({ userID, date, totale });
    res.status(201).json(newCommande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCommandeById = async (req, res) => {
  const commandeID = req.params.commandeID;
  const { userID, date, totale } = req.body;
  try {
    const commande = await Commande.findByPk(commandeID);
    if (commande) {
      await commande.update({ userID, date, totale });
      res.json(commande);
    } else {
      res.status(404).json({ message: 'Commande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommandeById = async (req, res) => {
  const commandeID = req.params.commandeID;
  try {
    const commande = await Commande.findByPk(commandeID);
    if (commande) {
      await commande.destroy();
      res.json({ message: 'Commande deleted successfully' });
    } else {
      res.status(404).json({ message: 'Commande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCommandes,
  getCommandeById,
  createCommande,
  updateCommandeById,
  deleteCommandeById,
};
