const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index.js');
const sequelize = db.sequelize;

// Define User model
const Reclamation = sequelize.define('reclamation', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    raison:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    etat: {
        type: DataTypes.ENUM(["en attente","resolu"]),
        allowNull: false,
      },
    date:{
        type:DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    }
});

module.exports = Reclamation;