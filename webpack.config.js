let path = require('path')
let webpack = require('webpack')
let BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Phaser webpack config
let phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
let phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
let pixi = path.join(phaserModule, 'build/custom/pixi.js')
let p2 = path.join(phaserModule, 'build/custom/p2.js')

// global objects
let utils = path.join(__dirname, '/src/utils/')
let dice = path.join(__dirname, '/src/utils/dice.js')
let logger = path.join(__dirname, '/src/utils/logger.js')
let generator = path.join(__dirname, '/src/utils/generator.js')

let app = path.join(__dirname, '/src/app.js')
let engine = path.join(__dirname, '/src/engine/engine.js')


let definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/main.js')
    ],
    vendor: ['pixi', 'p2', 'phaser', 'webfontloader']
  },
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    definePlugin,
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor'/* chunkName= */, filename: 'vendor.bundle.js'/* filename= */}),
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', './build']
      }
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
			'app': app,
			'dice': dice,
			'logger': logger,
			'generator': generator,
			'engine': engine,
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
}
