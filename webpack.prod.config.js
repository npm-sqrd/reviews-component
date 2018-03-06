const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './react/src/production.js'),
  output: {
    path: path.resolve(__dirname, './react/dist'),
    filename: 'bundle-prod.js',
  },
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

