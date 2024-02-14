const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index.js');
const sequelize = db.sequelize;

// Define User model
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 10], // Enforce 10-digit phone number length
        },
      },
      role: {
        type: DataTypes.ENUM(["admin","client","entrepise"]),
        allowNull: false,
      },
    });

module.exports = User;