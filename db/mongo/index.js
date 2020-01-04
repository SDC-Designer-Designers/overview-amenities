const mongo = require('mongodb');
const url = "mongodb://localhost:27017";

// MONGO --------------------------------------------------->
const helper = {
  getOneListing: (req, cb) => {
    mongo.connect(url, (err, db) => {
      if (err) {
        process.exit(0);
      }
      var dbo = db.db('amenities-overview');
      var collection = dbo.collection('listingdetails');
      collection.findOne({listing_ID: Number(req.params.id)}, (err, data) => {
        if (err) {
          cb(err)
        } else {
          cb(null, data)
        }
      })
    })
  },
  postListing: (req, cb) => {
    mongo.connect(url, (err, db) => {
      if (err) {
        process.exit(0);
      }
      var dbo = db.db('amenities-overview');
      var collection = dbo.collection('listingdetails');
      collection.insert(req.body, (err, data) => {
        if (err) {
          cb(err)
        } else {
          cb(null, data)
        }
      })
    })
  },
  deleteListing: (req, cb) => {
    mongo.connect(url, (err, db) => {
      if (err) {
        process.exit(0);
      }
      var dbo = db.db('amenities-overview');
      var collection = dbo.collection('listingdetails');
      collection.deleteOne({listing_ID: Number(req.params.id)}, (err, data) => {
        if (err) {
          cb(err)
        } else {
          cb(null, data)
        }
      })
    })
  },
  updateListing: (req, cb) => {
    mongo.connect(url, (err, db) => {
      if (err) {
        process.exit(0);
      }
      var dbo = db.db('amenities-overview');
      var collection = dbo.collection('listingdetails');
      collection.updateOne({listing_ID: Number(req.params.id)}, {$set: {propertyType: req.body.propertyType, overview: req.body.overview, amenities: req.body.amenities, houseRules: req.body.houseRules, tags: req.body.tags}}, (err, data => {
        if (err) {
          cb(err)
        } else {
          cb(null, data)
        }
      })
    )})
  }
}

module.exports = helper