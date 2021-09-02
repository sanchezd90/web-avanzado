const { restart } = require("nodemon");

const Usuario = require('../models/Usuarios')

exports.crearUsuario = async (req,res) => {
    console.log(req.body);
    try{
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save()
        res.send("Usuario guardado")
    } catch (error) {
        console.log(error);
        res.status(400).send("error al guardar")        
    }
}