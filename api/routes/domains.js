const express = require('express');
const router = express.Router();
const domainsController = require('../controllers/domainsController')

router.post('/',
    domainsController.createDomain
)

module.exports = router;