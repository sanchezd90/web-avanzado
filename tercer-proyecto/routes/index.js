var express = require('express');
var router = express.Router();
const {getAll} = require("./../models/pruebas")

/* GET home page. */
router.get('/', function(req, res) {
  getAll().then((response) => res.status(200).json(response)).catch((e) => res.status(500).json(e))

});

module.exports = router;
