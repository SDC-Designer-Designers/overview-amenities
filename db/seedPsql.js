const {Client} = require('pg');
const connectionString = 'postgresssql://derickpark@localhost:5432/sdcHomeAway';
const db = new Client({
    connectionString: connectionString
})

module.exports = db;

db.query('Insert')