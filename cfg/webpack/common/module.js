const moduleCfg = {
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
    ],
  },
};

module.exports = moduleCfg;

//todo reasearch asset module ty
/* {
        test: /\.(png|jpg|gif)$/,
        type: 'asset', // Automatically inline or emit files based on size
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // Inline files smaller than 8KB
          },
        },
        generator: {
          filename: 'images/[name].[hash][ext]', // Naming pattern for emitted files
        },
      },*/

// {
//   test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/,
//   type: 'asset/resource',
//   generator: {
//     filename: 'assets/images/icons/[name].[hash][ext]',
//   },
// },
