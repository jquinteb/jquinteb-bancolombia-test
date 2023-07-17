// routes/cuentasRoutes.js

const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

// Obtener todas las cuentas
router.get('/cuentas', cuentasController.getCuentas);

// Crear una cuenta
router.post('/cuentas', cuentasController.createCuenta);

// Actualizar una cuenta
router.post('/cuentas/update', cuentasController.updateCuenta);

// Eliminar una cuenta
router.get('/cuentas/delete/:num_cuenta', cuentasController.deleteCuenta);

module.exports = router;
