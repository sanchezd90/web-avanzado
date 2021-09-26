const express = require('express');
const router = express.Router();
const domainsController = require('../controllers/domainsController')

router.post('/create',
    domainsController.createDomain
);
router.get('/all',
    domainsController.getAll
);

module.exports = router;