var webpack = require('webpack')
var optimist = require('optimist')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var path = require('path')
var root = __dirname

// get some options
var ENV = optimist.argv.env || 'dev'
var dest = 'dist/'
var outputJs = ENV === 'dist' ? 'vuestrap.min.js' : 'vuestrap.js'
var outputCss = ENV === 'dist' ? 'vuestrap.min.css' : 'vuestrap.css'

// show a summary in console
console.log('\nenvironment = ' + ENV)
console.log('output JS = ' + dest + outputJs)
console.log('output CSS = ' + dest + outputCss + '\n')

// app structure for loaders
var appPaths = [
  path.resolve(root, 'src'),
  path.resolve(root, 'docs'),
]

// define plugins

// set environment inside the app
var pluginEnv = new webpack.DefinePlugin({
  __DEV__: ENV === 'dev',
  __DIST__: ENV === 'dist',
})

// export to css rather than js file
var pluginCss = new ExtractTextPlugin(outputCss)

// minify (production only)
var pluginUglify = new webpack.optimize.UglifyJsPlugin({
  sourceMap: false,
  compress: {
    warnings: false
  }
})

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

// plugins for production
var pluginsDist = [
  pluginEnv,
  pluginCss,
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    }
  }),
]

// plugins for development
var pluginsDev = [
  pluginEnv,
  pluginCss,
  pluginBS,
]

var plugins = (ENV === 'dist') ? pluginsDist : pluginsDev


// export config
module.exports = {
  entry: './src/index.js',
  themeLoader: {
    themes: ['./src/theme/_variables.scss'], // default theme
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
    }]
  },
  plugins: plugins,
  output: {
    filename: outputJs,
    path: path.join(root, dest),
  },
  devtool: (ENV === 'dist') ? 'source-map' : ''
}
