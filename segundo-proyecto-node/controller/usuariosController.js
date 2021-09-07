const { restart } = require("nodemon");
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');

const Usuario = require('../models/Usuarios')
const jwt = require('jsonwebtoken')

exports.crearUsuario = async (req,res) => {
    console.log(req.body);

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({errores: error.array()})
    }

    try{
        const {email, password} = req.body;
        console.log("email y pass del body",email,password);

        //validar que el usuario registrado sea único
        let usuario = await Usuario.findOne({email});        
        if (usuario) {
            return res.status(400).json({message : 'El Usuario ya está registrado'})
        }

        usuario = new Usuario(req.body);
        // hashear el password. Primero hacer un salt
        const salt = await bcryptjs.genSalt(10);

        // reescribir nuestro password
        usuario.password = await bcryptjs.hash(password,salt);

        await usuario.save()

        // crear y firmar jwt
        const payload = {
            usuario:{
                id: usuario.id,
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
        res.status(400).send("error al guardar")        
    }
}