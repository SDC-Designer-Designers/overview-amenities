const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const port = 3001;

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Connected to port ${port}`));

// POSTGRES
const controller = require('../db/postgres/index.js');
app.get('/amenities/:id', (req, res) => {
  controller.getOneListing(req)
  .then(data => res.status(200).send(data.rows))
  .catch(err => res.status(404).send('GETTING user was unsuccessful'))
})

app.post('/amenities', (req, res) => {
  controller.postListing(req)
  .then(data => res.status(200).send('Success insert listing details'))
  .catch(err => res.status(404).send('Failed insert was unsuccessful'))
})

app.delete('/amenities/:id', (req, res) => {
  controller.deleteListing(req)
  .then(data => res.status(200).send('Success delete listing details'))
  .catch(err => res.status(404).send('Failed delete was unsuccessful'))
})

app.put('/amenities/:id', (req, res) => {
  controller.updateListing(req)
  .then(data => res.status(200).send('Success updating listing details'))
  .catch(err => res.status(404).send('Failed updating was unsuccessful'))
})

// MONGO
// const controller = require('../db/mongo/index.js');
// app.get('/amenities/:id', (req, res) => {
//   controller.getOneListing(req, (err, data) => {
//     if (err) {
//       res.status(404).send('Couldn\'t get listin details');
//     } else {
//       res.status(200).send(data)
//     }
//   })
// })

// app.post('/amenities', (req, res) => {
//   controller.postListing(req, (err, data) => {
//     if (err) {
//       res.status(404).send('Couldn\`t insert listing details')
//     } else {
//       res.status(200).send('Success insert listing details')
//     }
//   })
// })

// app.delete('/amenities/:id', (req, res) => {
//   controller.deleteListing(req, (err, data) => {
//     if (err) {
//       res.status(404).send('Couldn\`t delete listing details')
//     } else {
//       res.status(200).send('Success delete listing details')
//     }
//   })
// })

// app.put('/amenities/:id', (req, res) => {
//   controller.updateListing(req, (err, data) => {
//     if (err) {
//       res.status(404).send('Couldn\`t update listing details')
//     } else {
//       res.status(200).send('Success update listing details')
//     }
//   })
// })