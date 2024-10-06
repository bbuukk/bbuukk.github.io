const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const moduleCfg = {
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
};

module.exports = moduleCfg;

