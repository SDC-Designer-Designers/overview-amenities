const promise = require('bluebird');
const pgPromise = require('pg-promise');

const initOptions = {
    promiseLib: promise
};

const pgp = pgPromise(initOptions);

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'sdcHomeAway',
  user: 'derickpark'
}

const db = pgp(cn)
module.exports = {db, pgp};