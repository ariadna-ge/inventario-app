const db = require('../config/db');
// Función reutilizable
function getAll(tableName, viewName) {
    return (req, res) => {
        const consultaDB = `SELECT * FROM ${tableName}`;
        db.query(consultaDB, (err, results) => {
            if (err) {
                console.log(`Error al recuperar los datos de la tabla '${tableName}'`, err); 
                res.send('Error al recuperar los datos');
            } else {
                const data = {};
                data[tableName] = results;
                res.render(viewName, data);
            }
        });
    };
}

//exportar para poder usar en otros archivos
module.exports = {
    getAll
};