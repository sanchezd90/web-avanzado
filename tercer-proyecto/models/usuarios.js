const bd = require('../utils/bd');

const getAll = () => bd('usuarios')
.select();

const create = (obj) => bd('usuarios')
.insert(obj);

const single = (id) => bd('usuarios')
.where({'id':id, 'deleted':0})
.select();

const update = (id,obj) => bd('usuarios')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}