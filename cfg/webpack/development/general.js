const { PORT } = process.env;

const generalCfg = {
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: PORT | 3000,
    hot: true,
    open: false,
    static: {
      directory: './dist',
    },
    historyApiFallback: true,
    compress: true,
    client: {
      logging: 'info',
    },
  },
};

module.exports = generalCfg;

// https: true,
// Set up proxying of API requests to a different server
/* headers: {
      'X-Custom-Header': 'yes',
    }, */
