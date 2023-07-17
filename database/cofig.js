require('dotenv').config();

module.exports = {
    development: {
      username: process.env.USER,
      password: process.env.PASS,
      database: process.env.DB,
      host: process.env.  HOST,
      dialect: 'mysql'
    }
  };
  
