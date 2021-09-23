const express = require('express');
const router = express.Router();
const purposesController = require('../controllers/purposesController')

router.post('/',
    purposesController.createPurpose
)

module.exports = router;