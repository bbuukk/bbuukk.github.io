const path = require('path');

const modeConfig = (mode) => require(`./webpack.${mode}.js`);
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const dotenv = require('dotenv');
dotenv.config({ path: './cfg/.env' });

const nodeEnv = process.env.NODE_ENV;

module.exports = () => {
  return merge(
    {
      mode: nodeEnv || 'development',
      entry: ['./src/index.js'],
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
      },
      resolve: {
        modules: [path.resolve(__dirname, '../../.'), 'node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.scss'],
      },
      module: {
        rules: [
          { test: /\.js$/, use: 'swc-loader', exclude: /node_modules/ },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'fonts/',
                },
              },
            ],
          },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          // {
          //   test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/,
          //   type: 'asset/resource',
          //   generator: {
          //     filename: 'assets/images/icons/[name].[hash][ext]',
          //   },
          // },
        ],
      },
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
    },
    modeConfig(process.env.NODE_ENV),
  );
};

//todo reasearch chunks webpack feature
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     chunkFilename:
//         argv.mode === 'production'
//             ? 'chunks/[name].[chunkhash].js'
//             : 'chunks/[name].js',
//     filename:
//         argv.mode === 'production' ? '[name].[chunkhash].js' : '[name].js'
// },
