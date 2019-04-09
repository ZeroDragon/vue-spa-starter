require('@babel/register')
require('./config')

const devServer = () => require('./devServer')

const server = {
  'build': () => require('./build'),
  'stage': () => require('./stageServer')
}[process.argv[2]] || devServer

server()

module.exports = server
