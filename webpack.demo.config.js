var webpack = require('webpack')
var optimist = require('optimist')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var path = require('path')
var root = __dirname

// get some options
var ENV = optimist.argv.env || 'dev'
var dest = 'demo/dist/'
var outputJs = 'vuestrap-demo.js'
var outputCss = 'vuestrap-demo.css'

// show a summary in console
console.log('\nenvironment = ' + ENV)
console.log('output JS = ' + dest + outputJs)
console.log('output CSS = ' + dest + outputCss + '\n')

// Define plugins

// export to css rather than js file
var pluginCss = new ExtractTextPlugin(outputCss)

// watch for changes with browser sync
pluginBS = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  ui: false,
  notify: false,
  open: false,
  server: {
    baseDir: ['./']
  }
})

var plugins = [
  pluginCss,
  pluginBS,
]

// export config
module.exports = {
  entry: './demo/index.js',
  themeLoader: {
    themes: ['./demo/theme/_demo.scss', './src/theme/_variables.scss'], // default theme
  },
  resolve: {
    root: path.resolve(root),
    extensions: ['', '.js', 'scss']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader')
    }, {
      test: /\.html$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'html'
    }, {
      test: /\.json$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'json'
    }]
  },
  plugins: plugins,
  output: {
    filename: outputJs,
    path: path.join(root, dest),
  },
  devtool: 'source-map'
}
