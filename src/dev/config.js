import dotenv from 'dotenv'
import { DateTime } from 'luxon'
import 'consolecolors'
import { join } from 'path'

const config = {}
const logger = {}

dotenv.config({ path: join(__dirname, '.env') })
config.ENV = process.env.ENVIRONMENT || 'test'
config.HTTP_SERVER_PORT = process.env.PORT || 3003

const loggerTypes = {
  debug: 'green',
  info: 'blue',
  warn: 'yellow',
  error: 'red'
}

const innerLogger = console.log

Object.keys(loggerTypes).forEach(type => {
  const color = loggerTypes[type]
  logger[type] = (...params) => {
    const dt = DateTime.local().setZone('America/Mexico_City')
    innerLogger(`[${dt.toFormat('LLL/dd HH:mm:ss')}]`[color], ...params)
  }
})

console.log = logger.info

global.config = config
global.logger = logger
