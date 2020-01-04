const db = require('./dbConnection.js');

var query;

// POSTGRES --------------------------------------------------->
const helper = {
  getOneListing: req => {
    query = `SELECT * from amenities where listing_id=${req.params.id}`;
    return db.query(query)
  },
  postListing: req => {
    req.body.tags = JSON.stringify(req.body.tags).replace('[', '{').replace(']', '}')
    query = `INSERT INTO amenities(listing_id, propertytype, overview, amenities, houserules, tags) VALUES(${req.body.listing_ID}, '${req.body.propertyType}', '${JSON.stringify(req.body.overview)}', '${JSON.stringify(req.body.amenities)}', '${JSON.stringify(req.body.houseRules)}', '${req.body.tags}')`;
    return db.query(query)
  },
  deleteListing: req => {
    query = `DELETE from amenities where listing_id=${req.params.id}`;
    return db.query(query)
  },
  updateListing: req => {
    req.body.tags = JSON.stringify(req.body.tags).replace('[', '{').replace(']', '}')
    query = `UPDATE amenities SET propertytype='${req.body.propertyType}', overview='${JSON.stringify(req.body.overview)}', amenities='${JSON.stringify(req.body.amenities)}', houserules='${JSON.stringify(req.body.houseRules)}', tags='${req.body.tags}'  WHERE listing_id=${req.params.id}`;
    return db.query(query)
  }
}

module.exports = helper;