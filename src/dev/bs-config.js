const dotenv = require('dotenv')
const { join } = require('path')
dotenv.config()

const port = process.env.PORT || 3003

module.exports = {
  ui: { 'port': 3002 },
  port: process.env.BSPORT,
  files: 'src/app',
  proxy: `http://localhost:${port}`,
  notify: false
}
