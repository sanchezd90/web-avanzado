const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController')

//api/usuarios
router.post('/', usuariosController.crearUsuario)

module.exports = router;