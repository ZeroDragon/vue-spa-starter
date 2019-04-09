import VueLoaderPlugin from 'vue-loader/lib/plugin'
import webpack from 'webpack'
import path from 'path'

export default {
  mode: 'development',
  entry: {
    vendors: [
      'vue',
      'vue-router',
      'vuex',
      'axios'
    ],
    bundle: './src/app/assets/scripts/index.js'
  },
  output: {
    filename: '[name].js',
    path: '/'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      Utils: path.resolve(__dirname, '../app/assets/scripts/'),
      Styles: path.resolve(__dirname, '../app/assets/styles/'),
      '~': path.resolve(__dirname, '../app/components/')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          test: 'vendors',
          name: 'vendors',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      /** ADD HERE RUNTIME ENV VARIABLES */
      ENV: JSON.stringify(config.ENV)
      /** END OF RUNTIME ENV VARIABLES */
    })
  ]
}
