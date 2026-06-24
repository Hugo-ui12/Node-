const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'control_escolar'
});

conexion.connect((error) => {
  if (error) {
    console.log('Error de conexión:', error.message);
    return;
  }

  console.log('¡Conectado a control_escolar!');
});

module.exports = conexion;