const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');
const {validateRegistro} = require('./../middlewares/usuarios');
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');

const get = (req,res) => {
  model.getAll()
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}

const create = (req,res) => {
  const usuario = req.body;
  const uid = uuid();
  const usuarioFinal = { 
    username: usuario.username,
    pass: sha1(usuario.pass),
    email: usuario.email,
    confirmacionCorreo: uid,
  }

  console.log(get())

  model.create(usuarioFinal)
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}

const single = (req,res) => {
  model.single(req.params.id)
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}

const update = (req,res) => {
  model.update(req.params.id,req.body)
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}

const eliminar = (req,res) => {
  model.update(req.params.id,{'deleted':1})
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}


router.get('/',get);
router.get('/single/:id',single);
router.post('/registro',validateRegistro,create);
router.post('/update/:id',update);
router.post('/delete/:id',eliminar);

module.exports = router;
