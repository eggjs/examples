import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import merge from 'webpack-merge';

import commonConfig from './webpack.base';

const publicConfig = {
  devtool: 'cheap-module-source-map',
  mode: 'production',
  output: {
    path: path.join(__dirname, '../app/public/'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
    namedModules: true,
    namedChunks: true,
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new CleanWebpackPlugin(['public/*.*'], {
      root: path.join(__dirname, '../'),
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),

    new ManifestPlugin({
      fileName: path.resolve(__dirname, '../config/manifest.json'),
      publicPath: '',
    }),
  ],
};

module.exports = merge(commonConfig, publicConfig);
