
const glob = require('glob');
const ALL_FILES = glob.sync(path.join(__dirname, 'src/*.js'));

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsCfg = {
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

module.exports = pluginsCfg;
