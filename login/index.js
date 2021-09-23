const express = require('express');
const app = express();
const conectarDB = require('./utils/db')
const {logged} = require('./middlewares/auth');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT_SERVER || 4000;

conectarDB()

app.use(express.json({extend: true}));// permite interpretar la peticion en json

//Routes

app.use('/login',require('./routes/auth'))

app.listen(port, () => {
    console.log(`Server en port ${port}`)
})

