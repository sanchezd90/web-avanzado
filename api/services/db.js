const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.STRING_SERVER_MONGO,{});
        console.log("MongoDB connection: success")
    }catch(error){
        console.log(error);
        process.exit(1);//esto no se usa en proyectos grandes
    }
} 

module.exports = connectDB;
