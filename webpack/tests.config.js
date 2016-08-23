const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-decorators-legacy',
            'transform-async-to-generator',
            'syntax-async-functions',
            'transform-regenerator'
          ]
        },
        include: path.join(__dirname, '..', 'app'),
        exclude: /node_modules/
      },
      {test: /\.json$/, loader: 'json-loader'},
    ]
  },
  progress: true,
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    },
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: "inline-source-map"
};