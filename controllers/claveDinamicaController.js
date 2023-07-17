
const ClaveDinamica = require('../models/claveDinamica');

// Obtener todas las cuentas
exports.getClaveDinamica = async (req, res) => {
  try {
    const clavedinamica = await ClaveDinamica.findAll();
    res.render('clavedinamica', { clavedinamica });
  } catch (error) {
    console.error('Error al obtener las clavedinamicas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear una cuenta
exports.createClaveDinamica = async (req, res) => {

  const { cedula_cliente, correo, celular} = req.body;
  try {
    await ClaveDinamica.create({
      cedula_cliente,
      correo,
      celular
    });
    res.redirect('/clavedinamica');
  } catch (error) {
    console.error('Error al crear la clavedinamica:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar una cuenta
exports.updateClaveDinamica = async (req, res) => {  
  
  const { cedula_cliente,correo, celular } = req.body;
  
  try {
    await ClaveDinamica.update(
      { correo, celular },
      { where: { cedula_cliente } }
    );
    res.redirect('/clavedinamica');
  } catch (error) {
    console.error('Error al actualizar la clavedinamica:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar una cuenta
exports.deleteClaveDinamica = async (req, res) => {
  const { num_cuenta } = req.params;
  try {
    await ClaveDinamica.destroy({ where: { num_cuenta } });
    res.redirect('/clavedinamica');
  } catch (error) {
    console.error('Error al eliminar la clavedinamica:', error);
    res.status(500).send('Error interno del servidor');
  }
};
