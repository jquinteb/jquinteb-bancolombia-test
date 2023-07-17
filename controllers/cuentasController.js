// controllers/cuentasController.js

const Cuenta = require('../models/cuenta');

// Obtener todas las cuentas
exports.getCuentas = async (req, res) => {
  try {
    const cuentas = await Cuenta.findAll({
      attributes: ['num_cuenta', 'cedula_cliente','estado','saldo','fecha_apertura']
    });    
    res.render('cuentasList', { cuentas });
    
  } catch (error) {
    console.error('Error al obtener las cuentas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear una cuenta
exports.createCuenta = async (req, res) => {
  const { num_cuenta, cedula_cliente, estado, saldo, fecha_apertura } = req.body;
  try {
    await Cuenta.create({
      num_cuenta,
      cedula_cliente,
      estado,
      saldo,
      fecha_apertura,
    });
    res.redirect('/cuentas');
  } catch (error) {
    console.error('Error al crear la cuenta:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar una cuenta
exports.updateCuenta = async (req, res) => {  
  const {num_cuenta, estado, saldo,fecha_apertura } = req.body;

  try {
    await Cuenta.update(
      { estado, saldo , fecha_apertura},
      { where: { num_cuenta } }
    );
    res.redirect('/cuentas');
  } catch (error) {
    console.error('Error al actualizar la cuenta:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar una cuenta
exports.deleteCuenta = async (req, res) => {
  const { num_cuenta } = req.params;
  try {
    await Cuenta.destroy({ where: { num_cuenta } });
    res.redirect('/cuentas');
  } catch (error) {
    console.error('Error al eliminar la cuenta:', error);
    res.status(500).send('Error interno del servidor');
  }
};
