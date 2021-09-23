const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.createUser = async (req,res) => {
    //validar datos ingresados
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errores: error.array()})
    }

    try{
        const {email, pass} = req.body;        

        //validar que el usuario registrado sea único usando el mail 
        let user = await User.findOne({email});        
        if (user) {
            return res.status(400).json({message : 'User is already registered'})
        }

        //crea una instancia de usuario con los datos recibidos 
        user = new User(req.body);

        // hashea el password. Primero hace un salt y luego reescribe
        const salt = await bcryptjs.genSalt(10);
        user.pass = await bcryptjs.hash(pass,salt);

        //guardar el usuario con los datos que vienen del body pero con la pass hasheada
        await user.save()

        // crear y firmar jwt
        const payload = {
            user:{
                id: user.id,
            }
        }
        jwt.sign(payload,process.env.SECRETA,{
            expiresIn: 3600
        }, (error,token) => {
            if (error) throw error;
            res.json({token:token});            
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).send("register error")        
        }
} 