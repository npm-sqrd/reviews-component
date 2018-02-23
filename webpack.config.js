const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'reviews-repo/react/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'reviews-repo'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        // options: {
        //   eslintPath: 'eslint-config-airbnb-standard/node_modules/eslint',
        // },
      },
    ],
  },
};

