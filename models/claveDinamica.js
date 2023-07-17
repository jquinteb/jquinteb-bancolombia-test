// models/claveDinamica.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

const ClaveDinamica = sequelize.define('ClaveDinamica', {
  cedula_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ClaveDinamica;
