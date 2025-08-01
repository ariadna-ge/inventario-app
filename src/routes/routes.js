const express = require('express');
const router = express.Router();

// Inventario
router.get('/inventario', (req, res) => {
    res.render('inventario');
});

// Entradas
router.get('/entradas', (req, res) => {
    res.render('entradas');
});

// Salidas
router.get('/salidas', (req, res) => {
    res.render('salidas');
});

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