DROP DATABASE IF EXISTS SDCamenities;

CREATE DATABASE SDCamenities;

\c sdcamenities;

DROP TABLE IF EXISTS amenities;

CREATE TABLE amenities (
  listing_ID integer NOT NULL,
  propertyType VARCHAR,
  overview jsonb,
  amenities jsonb,
  houseRules jsonb,
  tags text[]
);
