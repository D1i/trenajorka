const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loaders: ['ts-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
