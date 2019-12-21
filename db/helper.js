const {QueryFile} = require('pg-promise');

const sql = function sql(filePath) {
    const options = {
        minify: true
    }
}
const qf = new QueryFile(filePath, options);

if (qf.error) {
    console.error(qf.error)
};

return qf;

module.exports = sql;