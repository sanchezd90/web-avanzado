const express = require('express');
const router = express.Router();
const model = require('./../models/dominios');
const dbService = require('../utils/dbService');

const get = (req,res) => {
  dbService.getAll('denominacion_dominios')
  .then((response) => res.status(200).json(response))
  .catch((err) => res.status(500).json(err))
}

const create = (req,res) => {
  model.create(req.body)
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
router.post('/create',create);
router.post('/update/:id',update);
router.post('/delete/:id',eliminar);

module.exports = router;
