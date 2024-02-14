const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index.js');
const sequelize = db.sequelize;

// Define User model
const Message = sequelize.define('message', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenu:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    date:{
        type:DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    }
});

module.exports = Message;