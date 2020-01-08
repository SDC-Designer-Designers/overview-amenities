const {Client} = require('pg');
const config = require('../../config')
const connectionString = `postgres://ubuntu:${config.password}@${config.ip}/${config.database}`;

const db = new Client({
    connectionString: connectionString
})

db.connect()
  .then(() => console.log('Connected to database sdcamenities'))
  .catch(err => console.error('connection error', err.stack))

module.exports = db;