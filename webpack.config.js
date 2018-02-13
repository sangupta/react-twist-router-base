const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactTwistPlugin = require('@twist/react-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  context: __dirname,

  entry: {
    app: [ './src/App.jsx', 'react-hot-loader/patch' ],
    vendor: [ "react", "react-dom" ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'assets'),
    compress: true,
    port: 1309,
    hot: true,
    https: false,
    noInfo: false,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: './src'
    }
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },

  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ReactTwistPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: 'React Twist Router Base', template: 'src/index.ejs', inject : 'body'  })
  ]

};
