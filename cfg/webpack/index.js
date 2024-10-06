const dotenv = require('dotenv');
dotenv.config({ path: './cfg/.env' });
const { NODE_ENV } = process.env;

const { merge } = require('webpack-merge');

function importCfg(mode) {
  return [
    require(`./${mode}/general.js`),
    require(`./${mode}/module.js`),
    require(`./${mode}/plugins.js`),
  ];
}



module.exports = () => {
  return merge(...importCfg('common'), ...importCfg(NODE_ENV));
};

/*
module.exports = () => {
  return merge(...importcfg('common'), ...importcfg(node_env));
}; */

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
