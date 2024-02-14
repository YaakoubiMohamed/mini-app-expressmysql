const Message = require("../models/message");

// Controller methods
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMessageById = async (req, res) => {
  const messageID = req.params.messageID;
  try {
    const message = await Message.findByPk(messageID);
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMessage = async (req, res) => {
  const { contenu,date,senderId, recipientId } = req.body;
  try {
    const newMessage = await Message.create({ contenu,date,senderId, recipientId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMessageById = async (req, res) => {
  const messageID = req.params.messageID;
  const { contenu,date,senderId, recipientId } = req.body;
  try {
    const message = await Message.findByPk(messageID);
    if (message) {
      await message.update({ contenu,date,senderId, recipientId });
      res.json(message);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMessageById = async (req, res) => {
  const messageID = req.params.messageID;
  try {
    const message = await Message.findByPk(messageID);
    if (message) {
      await message.destroy();
      res.json({ message: 'Message deleted successfully' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
};
