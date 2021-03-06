const path = require('path');

const common = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: path.resolve(__dirname, './react/src/production.jsx'),
  output: {
    path: path.resolve(__dirname, './react/dist'),
    filename: 'bundle-prod.js',
  },
};

const server = {
  entry: path.resolve(__dirname, './react/src/srcserver.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './react/dist'),
    filename: 'bundle-prod-server.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
];
