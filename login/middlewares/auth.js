const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.pem');
const jwt = require('jsonwebtoken');

const logged = (req,res,next) => {
    try{
        const {authorization} = req.headers;
        const {id} = jwt.verify(authorization, publicKey);//authorization es el token
        req.id = id;
        next();
    }catch(error){
       console.log(error);
       res.sendStatus(401); 
    }
}