const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const pluginsCfg = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/images/icons/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new Dotenv({ path: './cfg/.env' }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'dist/assets',
        },
      ],
    }),
  ],
};

module.exports = pluginsCfg;
