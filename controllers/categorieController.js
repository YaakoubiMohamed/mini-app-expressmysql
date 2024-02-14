const Categorie = require("../models/categorie");

// Controller methods
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategorieById = async (req, res) => {
  const categorieID = req.params.categorieID;
  try {
    const categorie = await Categorie.findByPk(categorieID);
    if (categorie) {
      res.json(categorie);
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCategorie = async (req, res) => {
  const { nom } = req.body;
  try {
    const newCategorie = await Categorie.create({ nom });
    res.status(201).json(newCategorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategorieById = async (req, res) => {
  const categorieID = req.params.categorieID;
  const { nom } = req.body;
  try {
    const categorie = await Categorie.findByPk(categorieID);
    if (categorie) {
      await categorie.update({ nom });
      res.json(categorie);
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategorieById = async (req, res) => {
  const categorieID = req.params.categorieID;
  try {
    const categorie = await Categorie.findByPk(categorieID);
    if (categorie) {
      await categorie.destroy();
      res.json({ message: 'Categorie deleted successfully' });
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategorieById,
  createCategorie,
  updateCategorieById,
  deleteCategorieById,
};
