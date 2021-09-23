const bd = require('./db');

const getAll = (tableName) => bd(tableName).select('*');

const single = (tableName,id) => bd(tableName).select('*').where({'id':id})

const innerJoin = (table1,table2,refTable2,refTable1) => bd(table1).join(table2, `${table1}.${refTable2}`, '=', `${table2}.${refTable1}`).select('*')

module.exports = { getAll }