const path = require('path');
const HtmlWebPack = require('html-webpack-plugin');
const HtmlCdn = require('webpack-cdn-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  externals: [
    'lodash'  
  ], 
  plugins: [
    new HtmlWebPack(),
    new HtmlCdn({
      modules: [
        { 
          name: 'lodash'
        }
      ]
    })
  ]
};

module.exports = config;

// vi: se ts=2 sw=2 et:
