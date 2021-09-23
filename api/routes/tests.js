const express = require('express');
const router = express.Router();
const testsController = require('../controllers/testsController')

router.post('/',
    testsController.createTest
)

module.exports = router;

