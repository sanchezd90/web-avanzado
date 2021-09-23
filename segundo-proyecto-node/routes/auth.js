const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('./keys/private.pem');

const jwtOptions = {algorithm:'RS256', expiresIn:'5h'} //tambien se puede usar min

const login = (req, res) => {    
    const token = jwt.sign({id:1},privateKey,jwtOptions);//(payload,privateKey,jwtOptions)
    res.status(200).json({JWT:token})
}

router.post('/', login);

module.exports = router;