/* globals config */

import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

const distPath = path.join(__dirname, '../../dist')

app.use(express.static(distPath))

app.get('*', (req, res) => {
  fs
    .createReadStream(
      path.join(distPath, 'index.html'),
      { encoding: 'utf8' }
    )
    .pipe(res)
})

app.listen(config.HTTP_SERVER_PORT, () => {
  logger.info(`Stage server Listening on`, config.HTTP_SERVER_PORT.magenta)
})
