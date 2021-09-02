const knex = require('knex')({
    client: process.env.DB_CLIENT || 'mysql',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'npsybd',
        pool: {min:1,max:10}
    } 
})

module.exports = knex;