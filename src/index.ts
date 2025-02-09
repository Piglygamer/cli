const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('There was an unexpected error.')
    process.exit(1)
  }

  const { version } = JSON.parse(data)
  require('./main')
    .main(version)
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
})
