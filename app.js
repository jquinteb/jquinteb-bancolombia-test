// app.js

const sequalize = require('./database/configDB');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cuentasRoutes = require('./routes/cuentasRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const claveDinamicaRoutes = require('./routes/clavedinamicaRoutes');

app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de vistas
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Middleware para el manejo de datos en formato JSON
app.use(express.json());

// Rutas clientesRoutes
app.use('/', cuentasRoutes);
app.use('/', clientesRoutes);
app.use('/', claveDinamicaRoutes);

// Puerto de escucha del servidor
app.listen(3000, () => {
  console.log('Servidor web escuchando en el puerto 3000...');
});

// Importar los modelos
const Cliente = require('./models/cliente');
const Cuenta = require('./models/cuenta');
const ClaveDinamica = require('./models/claveDinamica');

//Definir las relaciones entre los modelos
Cliente.hasMany(Cuenta, { foreignKey: 'cedula_cliente' });
Cuenta.belongsTo(Cliente, { foreignKey: 'cedula_cliente' });

Cliente.hasOne(ClaveDinamica, { foreignKey: 'cedula_cliente' });
ClaveDinamica.belongsTo(Cliente, { foreignKey: 'cedula_cliente' });

//Conectarse a la base de datos
// sequalize
// .sync({ force: true }) // force: true recreará las tablas en cada reinicio (¡ten cuidado en producción!)
// .then(() => {
//     console.log('Base de datos conectada');
// })
// .catch((error) => {
//     console.error('Error al conectar la base de datos:', error);
// });