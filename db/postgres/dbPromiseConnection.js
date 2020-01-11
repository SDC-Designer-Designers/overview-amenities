const promise = require('bluebird');
const pgPromise = require('pg-promise');
const config = require('../../config')

const initOptions = {
  promiseLib: promise,
  capSQL: true
};

const pgp = pgPromise(initOptions);

const cn = `postgres://ubuntu:${config.password}@${config.ip}/${config.database}`;

const db = pgp(cn);

module.exports = {db, pgp};
