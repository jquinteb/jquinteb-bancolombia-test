// routes/cuentasRoutes.js

const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

 // Obtener todas las cuentas
 router.get('/cliente', clientesController.getCliente);

// Crear una cuenta
router.post('/cliente', clientesController.createCliente);

// Actualizar una cuenta
router.post('/cliente/update', clientesController.updateCliente);

// Eliminar una cuenta
router.get('/cliente/delete/:cedula', clientesController.deleteCliente);

module.exports = router;
