const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, './react/src/production.jsx'),
  output: {
    path: path.resolve(__dirname, './react/dist'),
    filename: 'bundle-prod.js',
  },
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

