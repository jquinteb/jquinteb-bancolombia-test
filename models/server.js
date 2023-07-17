const sequalize = require('../database/configDB');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


class Server {
    constructor(){

        this.app = express();
        this.clientes = '/clientes';
        this.cuentas = '/cuentas';
        this.clavedinamica = '/clavedinamica';

        this.iniciarBD();

        this.routes();

    }

    iniciarBD(){
        // Importar los modelos
        const Cliente = require('./cliente');
        const Cuenta = require('./cuenta');
        const ClaveDinamica = require('./claveDinamica');
    
        //Definir las relaciones entre los modelos
        Cliente.hasMany(Cuenta, { foreignKey: 'cedula_cliente' });
        Cuenta.belongsTo(Cliente, { foreignKey: 'cedula_cliente' });
    
        Cliente.hasOne(ClaveDinamica, { foreignKey: 'cedula_cliente' });
        ClaveDinamica.belongsTo(Cliente, { foreignKey: 'cedula_cliente' });
    
        //Conectarse a la base de datos
        sequalize
        .sync({ force: true }) // force: true recreará las tablas en cada reinicio (¡ten cuidado en producción!)
        .then(() => {
            console.log('Base de datos conectada');
        })
        .catch((error) => {
            console.error('Error al conectar la base de datos:', error);
        });
        
    }

    routes(){

        //this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(this.clientes,require('../routes/clientesRoutes'));
        // this.app.use(this.cuentas,require('../routes/cuentasRoutes'));
        // this.app.use(this.clavedinamica,require('../routes/clavedinamicaRoutes'));
    }

    listen(){
        this.app.listen(3000, () => {
            console.log('Servidor iniciado en el puerto 3000');
          });
    }    
}
 
  
//   // Rutas para clientes
//   router.post('/clientes', (req, res) => {
//     // Procesar la creación de un nuevo cliente
//     const cedula = req.body.cedula;
//     const nombre = req.body.nombre;
//     const region = req.body.region;
//     const edad = req.body.edad;
    
//     // Realizar las operaciones necesarias para crear un nuevo cliente
  
//     res.send('Cliente creado exitosamente');
//   });
  
  // // Rutas para cuentas
  // router.post('/cuentas', (req, res) => {
  //   // Procesar la creación de una nueva cuenta
  //   const numCuenta = req.body.num_cuenta;
  //   const cedulaCliente = req.body.cedula_cliente;
  //   const estado = req.body.estado;
  //   const saldo = req.body.saldo;
  //   const fechaApertura = req.body.fecha_apertura;
    
  //   // Realizar las operaciones necesarias para crear una nueva cuenta
  
  //   res.send('Cuenta creada exitosamente');
  // });
  
  // // Rutas para clave dinámica
  // router.post('/clavedinamica', (req, res) => {
  //   // Procesar la creación de una nueva clave dinámica
  //   const cedulaCliente = req.body.cedula_cliente;
  //   const correo = req.body.correo;
  //   const celular = req.body.celular;
    
  //   // Realizar las operaciones necesarias para crear una nueva clave dinámica
  
  //   res.send('Clave dinámica creada exitosamente');
  // });
  
  // Resto de las configuraciones y rutas de la aplicación

  

module.exports = Server;