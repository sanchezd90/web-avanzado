const bd = require('../utils/bd');

const getAll = () => bd('denominacion_dominios')
.select();

const create = (obj) => bd('denominacion_dominios')
.insert(obj);

const single = (id) => bd('denominacion_dominios')
.where({'id':id, 'deleted':0})
.select();

const update = (id,obj) => bd('denominacion_dominios')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}