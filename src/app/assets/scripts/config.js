/* globals ENV */
const logger = {}

const sty = color => {
  return [
    'border-radius:4px',
    'color:#fff',
    'padding:4px',
    `background-color:${color}`
  ].join(';')
}
const loggerTypes = {
  debug: sty('green'),
  info: sty('blue'),
  warn: sty('orange'),
  error: sty('red')
}

let innerLogger = () => { }
if (console && console.log) {
  innerLogger = console.log
}

Object.keys(loggerTypes).forEach(type => {
  const style = loggerTypes[type]
  logger[type] = (...params) => {
    if (ENV === 'dev') {
      innerLogger(`%c${type}`, style, ...params)
    }
  }
})

if (console && console.log) {
  console.info = logger.info
  console.log = logger.debug
  console.error = logger.error
}

window.logger = logger
