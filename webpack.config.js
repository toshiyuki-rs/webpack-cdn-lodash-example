const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const HtmlCdn = require('webpack-cdn-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules:[ 
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]  
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  externals: [
    function() {
      const arg0 = arguments[0];
      let context = undefined;
      let request = undefined;
      let cb = undefined;
      if (arg0.request) {
        context = arg0.context;
        request = arg0.request;
        cb = arguments[1];
      } else {
        context = arguments[0];
        request = arguments[1]; 
        cb = arguments[2];
      }
      if ('lodash' == request) {
        cb(undefined, '_', 'window');
      } else {
        cb();
      }
    }
  ], 
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpack(),
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
