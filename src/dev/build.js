/* globals config */
import webpack from 'webpack'
import { promisify } from 'util'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import pug from 'pug'
import fs from 'fs'
import path from 'path'
import { sync as copyDir } from 'copy-dir'
import webpackConfig from './webpack.config'

const webpackAsync = promisify(webpack)
const mkdirpAsync = promisify(mkdirp)
const rimrafAsync = promisify(rimraf)

const distPath = path.join(__dirname, '../../dist')
const srcPath = path.join(__dirname, '../app')

const cleanStart = async () => {
  logger.info('Re-Create dist folder')
  await rimrafAsync(distPath)
}

const bundleScripts = async () => {
  logger.info('Bundling JS file')
  const scriptsPath = `${distPath}/scripts/`
  await mkdirpAsync(scriptsPath)
  const wpConfig = Object.assign(webpackConfig, {})
  wpConfig.mode = 'production'
  wpConfig.output.path = scriptsPath
  wpConfig.resolve.alias.vue = 'vue/dist/vue.min.js'
  return webpackAsync(wpConfig)
    .then(({ compilation }) => {
      if (compilation.errors.length > 0) {
        compilation.errors.forEach(err => {
          logger.error(err.toString())
        })
        process.exit(1)
      }
    })
}

const bundleHTML = async () => {
  logger.info('Bundling HTML files')
  const index = pug.renderFile(`${srcPath}/app.pug`, { pretty: true })
  fs.writeFileSync(`${distPath}/index.html`, index)
}

const bundleAllAssets = async () => {
  logger.info('Bundling all assets')
  await mkdirpAsync(distPath)
  await copyDir(path.join(srcPath, 'assets'), distPath)
  await rimrafAsync(path.join(distPath, 'scripts'))
}

(async () => {
  logger.info('Config', JSON.stringify(config, false, 2))
  await cleanStart()
  await bundleAllAssets()
  await bundleScripts()
  await bundleHTML()
})()
