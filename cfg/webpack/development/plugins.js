const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const pluginsCfg = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/images/icons/favicon.ico',
    }),
    //todo I still don't get it , what is the value of separating css from main js bundle?
    new MiniCssExtractPlugin({
      filename: '[name].css',
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
