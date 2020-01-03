const {Client} = require('pg');
const connectionString = 'postgres://postgres@localhost:5432/sdcamenities';
const db = new Client({
    connectionString: connectionString
})

db.connect()
  .then(() => console.log('Connected to database sdcamenities'))
  .catch(err => console.error('connection error', err.stack))

module.exports = db;