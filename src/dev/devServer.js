import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import path from 'path'
import webpackConfig from './webpack.config'

const app = express()
const srcPath = path.join(__dirname, '../app')

app.use(
  webpackMiddleware(
    webpack(webpackConfig),
    {
      publicPath: '/scripts/',
      noInfo: true
    }
  )
)

app.use(express.static(`${srcPath}/assets`))
app.set('views', srcPath)

app.get('/', (req, res) => {
  res.render('app.pug', { pretty: true })
})

app.get('*', (req, res) => {
  res.render('app.pug', { pretty: true })
})

app.listen(config.HTTP_SERVER_PORT, () => {
  logger.info('Development server mounted on', config.HTTP_SERVER_PORT.magenta)
})
