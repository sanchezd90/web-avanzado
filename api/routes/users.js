const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const { check } = require('express-validator');

router.post('/',
    [
        check('username','Username is required').not().isEmpty(),
        check('email','Provide a valid email address').isEmail(),
        check('pass','Your password must contain at least 6 characters').isLength({min:6}) 

    ],
    usersController.createUser
)

module.exports = router;

