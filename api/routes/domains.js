const express = require('express');
const router = express.Router();
const domainsController = require('../controllers/domainsController')
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/create',
    auth,
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
    auth,
    [
        check('en','english name is required').not().isEmpty(),
        check('es','spanish name is required').not().isEmpty(),
    ],
    domainsController.update
);
router.post('/delete/:id',
    auth,
    domainsController.del
);

module.exports = router;