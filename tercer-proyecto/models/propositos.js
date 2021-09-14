const bd = require('../utils/bd');

const getAll = () => bd('propositos')
.select();

const create = (obj) => bd('propositos')
.insert(obj);

const single = (id) => bd('propositos')
.where({'id':id, 'deleted':0})
.select();

const update = (id,obj) => bd('propositos')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}