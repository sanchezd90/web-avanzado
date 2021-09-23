const bd = require('../utils/db');

const login = (username, pass) => bd('usuarios')
.where({username, pass})
.select('id');

module.exports = {login};