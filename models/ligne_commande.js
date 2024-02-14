const { Sequelize, DataTypes } = require('sequelize');

const db = require('./index');
const sequelize = db.sequelize;

const Ligne_Commande = sequelize.define('Ligne_Commande', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantite:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotale:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Ligne_Commande