const express = require('express');
const router = express.Router();
const purposesController = require('../controllers/purposesController')
const { check } = require('express-validator');

router.post('/create',
    [
        check('en','english name is required').not().isEmpty(),
        check('es','spanish name is required').not().isEmpty(),
    ],
    purposesController.create
)
router.get('/all',
    purposesController.getAll
);
router.get('/single/:id',
    purposesController.getSingle
);

module.exports = router;