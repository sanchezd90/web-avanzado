const express = require('express');
const app = express();
const conectarDB = require('./config/db')

require('dotenv').config({path: './config/variables.env'});
const port = process.env.PORT_SERVER || 4500

conectarDB()

// lectura -> permite interpretar la peticion en json
app.use(express.json({extend: true}));

//Routes
app.use('/api/usuarios', require('./routes/Usuarios'))


app.listen(port, () => {
    console.log(`Server en port ${port}`)
})

