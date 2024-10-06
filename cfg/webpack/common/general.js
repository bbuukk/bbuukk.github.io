const path = require('path');

const { NODE_ENV } = process.env;

const CWD = process.cwd();

const generalCfg = {
  mode: NODE_ENV || 'development',
  entry: ['./src/index.js'],
  output: {
    // Use process.cwd() to resolve paths relative to the current working directory
    path: path.resolve(CWD, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [CWD, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    /* alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
    },*/
  },
};

module.exports = generalCfg;
