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

// MONGOOSE ---------------------------------------------------->
// let getOneListing = (id) => {
//   return new Promise((resolve, reject) => {
//     listingDetails.find({ listing_ID: id }, (err, docs) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(docs);
//       }
//     }).limit(1)
//   })
// }

// let postListing = (body) => {
//   return new Promise((resolve, reject) => {
//     new listingDetails(body).save((err, docs) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(docs);
//       }
//     })
//   })
// }

module.exports = helper

// {
// 	"listing_ID": 10000001,
// 	"propertyType": "Cabin",
// 	"overview":{"hi": "hi"},
// 	"amenities":{"bye": "bye"},
// 	"houseRules": {"si": "si"},
	// "tags" : ["No Pets"]
// }