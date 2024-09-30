const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /^(?!.*global).*\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // Enable source maps for Sass
            },
          },
        ],
      },
      {
        test: /global.*\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    open: false,
    static: {
      directory: path.resolve(__dirname, '../../dist'), // Or 'dist', 'build', etc.
    },
    historyApiFallback: true,
    compress: true,
    client: {
      logging: 'info',
    },
    // https: true,
    // Set up proxying of API requests to a different server
    /* headers: {
      'X-Custom-Header': 'yes',
    }, */
  },
};
