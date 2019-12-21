CREATE TABLE overview (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

CREATE TABLE featured (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

CREATE TABLE safety_features (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE location_type (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE general (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE kitchen (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE dining (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE entertainment (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE outside (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
CREATE TABLE pool_spa (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);








TABLE overview (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

TABLE featured (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

TABLE safety_features (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE location_type (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE general (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE kitchen (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE dining (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE entertainment (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE outside (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);
TABLE pool_spa (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

-- let listingDetailsSchema = mongoose.Schema({
--   listing_ID: Number,
--   propertyType: String, 
--   overview: {
--     "Sleeps": {
--       icon: String,
--       data: Number
--     },
--     "Bedrooms": {
--       icon: String,
--       data: Number
--     },
--     "Bathrooms": {
--       icon: String,
--       data: Number
--     },
--     "Half Baths": {
--       icon: String,
--       data: Number
--     },
--     "Min Stay": {
--       icon: String,
--       data: String
--     },
--   },
--   amenities: {
--     "Featured": [Object],
--     "Safety Features": [String],
--     "Location Type": [String],
--     "General": [String],
--     "Kitchen": [String],
--     "Dining": [String],
--     "Entertainment": [String],
--     "Outside": [String],
--     "Pool/Spa": [String]
--   },
--   houseRules: {
--     rules: [String],
--     minAge: Number
--   },
--   tags: [String]
-- })