// models/cliente.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

const Cliente = sequelize.define('Cliente', {
  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Cliente;
