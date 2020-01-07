const fs = require('fs')
const cliProgress = require('cli-progress')
const colors = require('colors')
const createListingDetails = require('./createListingDetails')

const count = 10000000

const file = 'db/postgres/10M.csv'
if (fs.existsSync(file)) fs.unlinkSync(file)

const bar = new cliProgress.SingleBar({
  format: `progress |${colors.cyan(
    '{bar}'
  )}| {percentage}% | {total} / {value} | {duration}s  `,
  barCompleteChar: `\u2588`,
  barIncompleteChar: '.'
})
bar.start(count, 0)

const stream = fs.createWriteStream(file)
stream.on('err', err => console.error(err))
stream.on('close', () => {
  bar.stop()
  console.log('finished writing')
})

let i = 0

write()

function write() {
  let ok = true
  for (i; i < count; i++) {
    if (ok) {
      if (i === count - 1) {
        ok = stream.write(JSON.stringify(stringify(i + 1)))
        bar.update(i + 1)
        stream.end()
      } else {
        ok = stream.write(JSON.stringify(stringify(i + 1)) + '\n')
        bar.update(i + 1)
      }
    } else {
      stream.once('drain', write)
      break
    }
  }
}

function stringify(i) {
  var data = createListingDetails(i + 1)
  strID = JSON.stringify(data.listing_ID)
  strProperty = `\t${data.propertyType}`
  strOverview = `\t${JSON.stringify(data.overview)}`
  strAmenities = `\t${JSON.stringify(data.amenities)}`
  strHouserules = `\t${JSON.stringify(data.houseRules)}`
  strTags = `\t${JSON.stringify(data.tags)}`.replace('[', '{').replace(']', '}')
  str =
    strID +
    strProperty +
    strOverview +
    strAmenities +
    strHouserules +
    strTags +
    '\n'
  return str
}
