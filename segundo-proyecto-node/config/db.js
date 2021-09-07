const mongoose = require('mongoose');
require('dotenv').config({ path : 'variables.env'});

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.STRING_SERVER_MONGO, {});
        console.log("Conectado a mongo");
    } catch (error) {
        console.log(error);
        process.exit(1);//detiene la app
    }
}

module.exports = conectarDB;