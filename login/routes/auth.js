const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('./keys/private.pem');
const model = require('./../models/auth');
const sha1 = require('sha1');

const jwtOptions = {algorithm:'RS256', expiresIn:'5h'} //tambien se puede usar min

const login = async (req, res) => {
    try{
        const {username, pass} = req.body;  
        console.log(username);      
        const [user] = await model.login(username,sha1(pass))
        !user? res.status(401) : null;
        const payload = {id:user.id};
        const token = jwt.sign(payload,privateKey,jwtOptions);
        res.status(200).json({JWT:token})
    }catch(err){
        res.sendStatus(500);
    }
}

router.post('/', login);


module.exports = router;