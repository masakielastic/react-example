var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ],
  },
  externals: {
    react: 'React'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}