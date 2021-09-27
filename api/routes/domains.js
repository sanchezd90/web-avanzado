const express = require('express');
const router = express.Router();
const domainsController = require('../controllers/domainsController')
const { check } = require('express-validator');

router.post('/create',
    [
        check('en','english name is required').not().isEmpty(),
        check('es','spanish name is required').not().isEmpty(),
    ],
    domainsController.create
);
router.get('/all',
    domainsController.getAll
);
router.get('/single/:id',
    domainsController.getSingle
);
router.post('/update',
    [
        check('en','english name is required').not().isEmpty(),
        check('es','spanish name is required').not().isEmpty(),
    ],
    domainsController.update
);
router.post('/delete/:id',
    domainsController.del
);

module.exports = router;