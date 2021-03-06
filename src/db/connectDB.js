const Pool = require('pg').Pool
require('dotenv').config()
const {POSTGRES_USER, POSTGRES_PASSWORD} = process.env


const pool = new Pool({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: 'person_database',
    host: 'localhost',
    port: 5432
})

module.exports = pool