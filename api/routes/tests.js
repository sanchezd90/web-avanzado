const express = require('express');
const router = express.Router();
const testsController = require('../controllers/testsController')
const { check } = require('express-validator');

router.post('/create',
    [
        check('nombre_principal','name is required').not().isEmpty(),        
    ],
    testsController.create
)
router.get('/all',
    testsController.getAll
);
router.get('/single/:id',
    testsController.getSingle
);

module.exports = router;

