
const Cliente = require('../models/cliente');

// Obtener todas las cuentas
exports.getCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();
    res.render('cliente', { cliente });
  } catch (error) {
    console.error('Error al obtener las clientes:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear una cuenta
exports.createCliente = async (req, res) => {

  const { cedula, nombre, region, edad} = req.body;
  try {
    await Cliente.create({
      cedula,
      nombre,
      region,
      edad
    });
    res.redirect('/cliente');
  } catch (error) {
    console.error('Error al crear la cuenta:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar una cuenta
exports.updateCliente = async (req, res) => {  
  const { cedula,nombre, region, edad} = req.body;
  try {
    await Cliente.update(
      { nombre, region, edad },
      { where: { cedula } }
    );
    res.redirect('/cliente');
  } catch (error) {
    console.error('Error al actualizar la cuenta:', error);
    res.status(500).send('Error interno del servidor');
  }
};

exports.deleteCliente = async (req, res) => {
  const { cedula } = req.params;
  try {
    await Cliente.destroy({ where: { cedula } });
    res.redirect('/cliente');
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
    res.status(500).send('Error interno del servidor');
  }
};
