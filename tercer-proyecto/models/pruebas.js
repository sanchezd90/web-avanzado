const bd = require('../utils/bd');
const dbService = require('../utils/dbService');

const getAll = () => dbService.getAll('pruebas');

const single = (id) => dbService.single('pruebas',id);

const joinPruebasDenominaciones = () => dbService.innerJoin('pruebas','denominaciones','dominio_principal','id')

const create = (obj) => bd('pruebas')
.insert(obj);

const update = (id,obj) => bd('pruebas')
.where({'id':id})
.update(obj)

module.exports = {getAll,create,single,update}