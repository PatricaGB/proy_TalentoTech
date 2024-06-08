const express = require('express');
const router = express.Router();
const MongoDB = require('../controladores/controladorDB');
const Usuarios = require('../controladores/controladorUser')


// Rutas
router.post('/registrar', Usuarios.regUsuario);
router.post('/login', Usuarios.login)


module.exports = router;