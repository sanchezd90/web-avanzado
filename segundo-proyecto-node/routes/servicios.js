const express = require('express');
const router = express.Router();

// GET home page

router.get('/', (req,res) => {
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Estoy en servicios</h1>
    </body>
    </html>
    `)
});

router.put('/:id',(req,res) => {
    const params = req.params.id;
    res.send(`PUT de SERVICIOS id ${params}`);
})

router.post('/', (req,res) => {
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>POST de servicios</h1>
    </body>
    </html>
    `)
})

module.exports = router;