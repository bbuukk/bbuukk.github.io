const CWD = process.cwd();

const commonLoaders = [
  {
    loader: 'css-loader',
    options: { importLoaders: 3 },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [require('autoprefixer')],
      },
    },
  },
  'resolve-url-loader',
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
];

const moduleCfg = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        oneOf: [
          {
            exclude: `${CWD}./assets/styles/global`,
            use: commonLoaders,
          },
          {
            include: `${CWD}./assets/styles/global`,
            use: ['style-loader', ...commonLoaders],
          },
        ],
      },
    ],
  },
};

module.exports = moduleCfg;
