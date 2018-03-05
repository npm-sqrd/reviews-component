const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './react/src/app.jsx'),
  output: {
    path: path.resolve(__dirname, './react/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
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

