// models/cuenta.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

const Cuenta = sequelize.define('Cuenta', {
  num_cuenta: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  cedula_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  saldo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_apertura: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Cuenta;
