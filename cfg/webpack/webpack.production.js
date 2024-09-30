const path = require('path');

const glob = require('glob');
const ALL_FILES = glob.sync(path.join(__dirname, 'src/*.js'));

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 3 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          'resolve-url-loader', // Resolves relative URLs
          'sass-loader',
        ],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only assets bigger than this will be processed (10kB here)
      minRatio: 0.8, // Compress only if the compression ratio is below this threshold
    }),
  ],
};
