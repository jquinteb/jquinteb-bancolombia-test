// routes/cuentasRoutes.js

const express = require('express');
const router = express.Router();
const claveDinamicaController = require('../controllers/claveDinamicaController');


router.get('/clavedinamica', claveDinamicaController.getClaveDinamica);


router.post('/clavedinamica', claveDinamicaController.createClaveDinamica);


router.post('/clavedinamica/update', claveDinamicaController.updateClaveDinamica);


router.get('/cuentas/:cedula', claveDinamicaController.deleteClaveDinamica);

module.exports = router;
