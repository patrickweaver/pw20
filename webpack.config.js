const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './client-src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
      },
    ],
  },
  node: {
    fs: 'empty'
  }
};