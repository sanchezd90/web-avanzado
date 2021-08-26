const express = require('express');
const app = express();
require('dotenv').config({path: './config/variables.env'});
const port = process.env.PORT_SERVER || 4500

const home = require('./routes/index');
const servicios = require('./routes/servicios');
const posteos = require('./routes/posteos');

app.use('/',home);
app.use('/servicios',servicios);
app.use('/posteos',posteos);

app.listen(port, () => {
    console.log(`Server en port ${port}`)
})

