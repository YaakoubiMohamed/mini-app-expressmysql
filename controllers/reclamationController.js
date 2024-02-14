const Reclamation = require("../models/reclamation");

// Controller methods
const getAllReclamations = async (req, res) => {
  try {
    const reclamations = await Reclamation.findAll();
    res.json(reclamations);
  } catch (error) {
    res.status(500).json({ error: error.reclamation });
  }
};

const getReclamationById = async (req, res) => {
  const reclamationID = req.params.reclamationID;
  try {
    const reclamation = await Reclamation.findByPk(reclamationID);
    if (reclamation) {
      res.json(reclamation);
    } else {
      res.status(404).json({ reclamation: 'Reclamation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.reclamation });
  }
};

const createReclamation = async (req, res) => {
  const { raison, description, etat, date, userId } = req.body;
  try {
    const newReclamation = await Reclamation.create({ raison, description, etat, date, userId });
    res.status(201).json(newReclamation);
  } catch (error) {
    res.status(500).json({ error: error.reclamation });
  }
};

const updateReclamationById = async (req, res) => {
  const reclamationID = req.params.reclamationID;
  const { raison, description, etat, date, userId} = req.body;
  try {
    const reclamation = await Reclamation.findByPk(reclamationID);
    if (reclamation) {
      await reclamation.update({ raison, description, etat, date, userId });
      res.json(reclamation);
    } else {
      res.status(404).json({ reclamation: 'Reclamation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.reclamation });
  }
};

// const deleteReclamationById = async (req, res) => {
//   const reclamationID = req.params.reclamationID;
//   try {
//     const reclamation = await Reclamation.findByPk(reclamationID);
//     if (reclamation) {
//       await reclamation.destroy();
//       res.json({ reclamation: 'Reclamation deleted successfully' });
//     } else {
//       res.status(404).json({ reclamation: 'Reclamation not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.reclamation });
//   }
// };

module.exports = {
  getAllReclamations,
  getReclamationById,
  createReclamation,
  updateReclamationById,
//   deleteReclamationById,
};
