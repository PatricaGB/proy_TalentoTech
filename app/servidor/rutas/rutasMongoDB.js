const express = require('express');
const router = express.Router();
const MongoDB = require('../controladores/controladorDB');


// Rutas
router.post('/ingproyecto', MongoDB.proyectoNuevo);
router.get('/infoproy', MongoDB.obtenerProyectos);



module.exports = router;