const bd = require('../utils/bd');

const getAll = () => bd('denominaciones')
.select();

const create = (obj) => bd('denominaciones')
.insert(obj);

const single = (id) => bd('denominaciones')
.where({'id':id, 'deleted':0})
.select();

const update = (id,obj) => bd('denominaciones')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}