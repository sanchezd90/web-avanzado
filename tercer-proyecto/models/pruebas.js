const bd = require('../utils/bd');

const getAll = () => bd('pruebas').select()

module.exports = {getAll}