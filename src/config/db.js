const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'taeMoon04',
    database: 'inventario',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error en la base de datos', err);
    } else {
        console.log('Conexión realizada de forma correcta');
    }
});

module.exports = db;