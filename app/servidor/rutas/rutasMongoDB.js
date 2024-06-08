const express = require('express');
const router = express.Router();
const MongoDB = require('../controladores/controladorDB');
const Usuarios = require('../controladores/controladorUser')


// Rutas
router.post('/ingproyecto', MongoDB.proyectoNuevo);
router.get('/infoproy', MongoDB.obtenerProyectos);
router.post('/registrar', Usuarios.regUsuario);
router.post('/login', Usuarios.login)
router.get('/conect', Usuarios.conectado)

module.exports = router;