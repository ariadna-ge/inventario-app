const express = require('express');
const router = express.Router();

// Inventario
// Importa el objeto que contiene la función getAll desde el archivo productos.js
const { getAll } = require('./productos'); 
router.get('/inventario', getAll('productos', 'inventario'));

//Entradas
const { getAll: getAllEntradas } = require('./productos');
router.get('/entradas', getAllEntradas('entradas', 'entradas'));

// Salidas
const { getAll: getAllSalidas } = require('./productos');
router.get('/salidas', getAllSalidas('salidas', 'salidas'));

//Agregar producto al inventario 
router.get('/agregar', (req, res) => {
  res.render('agregar');
});

//Agregar salida
router.get('/agregarSalida', (req, res) => {
  res.render('agregarSalida');
});

//Agregar entrada de producto
//Agregar salida
router.get('/agregarEntrada', (req, res) => {
  res.render('agregarEntrada');
});

// Obtener date
router.get('/', (req, res) => {
  const date = new Date();

  const currentDay = date.toLocaleDateString('es-MX', { weekday: 'long' }); // solo el día
  const currentDate = date.toLocaleDateString('es-MX', { //resto de la fecha
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  res.render('index', { currentDay, currentDate });
});

module.exports = router;