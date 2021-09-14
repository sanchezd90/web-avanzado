const bd = require('../utils/bd');

const getAll = () => bd('pruebas')
.select();

const create = (obj) => bd('pruebas')
.insert(obj);

const single = (id) => bd('pruebas')
.where({'id':id, 'deleted':0})
.select('nombre_principal','dominio_principal');

const update = (id,obj) => bd('pruebas')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}